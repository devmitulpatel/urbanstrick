<?php

namespace App\Traits;

use App\Models\Currenciable;
use App\Models\Currency;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;
use function Symfony\Component\Translation\t;

trait HasCurrency
{

    public function currency() :MorphOne
    {
        return $this->morphOne($this->getCurrencyClassName(), $this->getCurrencyRelationName());
    }

    public function getCurrencyCacheKey(){
        return implode(':',['currency',$this->getKey()]);
    }

    public function getCurrencyAttribute()
    {
        $relation=(Cache::has($this->getCurrencyCacheKey()))?
            Cache::remember($this->getCurrencyCacheKey(),1200, function () {
            return $this->getRelationValue($this->getCurrencyRelationName());
        }):$this->getRelationValue($this->getCurrencyRelationName());

        $this->setRelation($this->getCurrencyRelationName(), $relation);

        return $relation;
        if ($this->relationLoaded($this->getCurrencyRelationName())) {
            return $this->getRelationValue($this->getCurrencyRelationName());
        }


        $relation = Cache::rememberForever($this->getCurrencyCacheKey(), function () {
            return $this->getRelationValue($this->getCurrencyRelationName());
        });

        $this->setRelation($this->getCurrencyRelationName(), $relation);

        return $relation;
    }
    public static function bootHasCurrency(){
        static::deleted(function (self $model) {
            if (method_exists($model, 'isForceDeleting') && !$model->isForceDeleting()) {
                return;
            }
            $model->purgeCurrency();
        });

    }
    public function getCurrencyClassName():string{
        return Currenciable::class;
    }
    private function getCurrencyRelationName(){
        return 'currency';
    }
    private function getCurrencyRelationalName(){
        return 'related_id';
    }
    public function hasCurrency(): bool
    {
        return $this->getCurrencyCollection()->count();
    }


    public $indexedCurrencyCollection=[];
    public function setCurrencyRelation($relation, $value)
    {
        if (isset($relations[$this->getCurrencyRelationName()])) {
            $this->indexedCurrencyCollection = null;
        }
        return parent::setRelation($relation, $value);
    }

    private function getCurrencyCollection()
    {
        // load meta relation if not loaded.
        if (!$this->relationLoaded($this->getCurrencyRelationName())) {
            $this->setCurrencyRelation($this->getCurrencyRelationName(), $this->{$this->getCurrencyRelationName()}()->get());
        }
        return $this->{$this->getCurrencyRelationName()};
        // reindex by key for quicker lookups if necessary.
//        if ($this->indexedCountryCollection === null && $this->{$this->getCountryRelationName()}!==null) {
//            $this->indexedCountryCollection = $this->{$this->getCountryRelationName()}->keyBy('id');
//        }

        return $this->indexedCountryCollection??new ($this->getCurrencyClassName())();
    }

    private function searchCurrency($name){

        return Currency::orWhere('name',$name)->orWhere('slug',Str::slug($name))->orWhere('id',(int)$name)
            //->orWhere('short_name',$name)
            ->first();
    }

    private function getCurrencyId($currency){
        switch (gettype($currency)){
            case 'string':
                $currency2=$this->searchCurrency($currency)?->id;
                $id=$currency2;
                //goto IntegerCase;
                break;
            case 'integer':
                IntegerCase:
                $id=(integer)$currency;

                break;
            case 'object':
                $id=$currency->id;
                break;
            case 'array':
                $id=$currency['id'];
                break;
            default:
                $id=(integer)$currency;
        }


        return $id;

    }
    public function getCurrencyRecord(): ?Currenciable
    {
        return $this->getCurrencyCollection()->first();
    }

    public function setCurrency(mixed $currency){

        if (empty($currency)) {
            return;
        }

        $currency_id=$this->getCurrencyId($currency);

        if($currency_id==0)dd('here 2');

        if ($this->hasCurrency()) {
            $item = $this->getCurrencyRecord();
            $item->setAttribute($this->getCurrencyRelationalName(),$currency_id);
            if($item->isDirty())$item->save();
            //if ($item->getAttribute('parent_id') != $parent_id && !in_array($parent_id,$item->pluck('parent_id')->toArray())) goto CreateNewCountry;
        } else {
            CreateNewCountry:
            $item = $this->makeCurrency($currency_id);
            $item->setAttribute($this->getCurrencyRelationalName(),$currency_id);
            $this->{$this->getCurrencyRelationName()}()->save($item);
            //$this->variants()[] = $item;
            //$this->indexedCountryCollection[] = $item;
        }

        $this->refresh();


    }

    protected function makeCurrency(mixed $country=''): Currenciable
    {
        $country_id=$this->getCurrencyId($country);
        $className = $this->getCurrencyClassName();
        $model = new $className([
            'created_at'=>now(),
            'updated_at'=>now(),
            $this->getCurrencyRelationalName()=>$country_id,
        ]);
        $model->{implode('_',[$this->getCurrencyRelationName(),'type'])} = $this->getMorphClass();
        $model->{implode('_',[$this->getCurrencyRelationName(),'id'])} = $this->getKey();
        return $model;
    }
    private function purgeCurrency()
    {

        $this->currency()->delete();
        $this->set($this, $this->makeCurrency()->newCollection([]));

    }
}
