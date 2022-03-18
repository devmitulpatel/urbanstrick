<?php

namespace App\Traits;

use App\Models\Country;
use App\Models\Currency;
use App\Models\Priceable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\MorphMany;

trait HasPrice
{
    public static function bootHasPrice(){


        static::deleted(function (self $model) {
            if (method_exists($model, 'isForceDeleting') && !$model->isForceDeleting()) {
                return;
            }
            $model->purgePrices();
        });

    }

    public function prices(): MorphMany
    {
        return $this->morphMany($this->getPricesClassName(), 'price');
    }

    public function getPricesClassName():string{
        return Priceable::class;
    }
    private function getPricesRelationName(){
        return 'prices';
    }
    private function getPricesRelationalName(){
        return 'price';
    }

    private function purgePrices()
    {

        $this->prices()->delete();
        $this->set($this, $this->makePrice()->newCollection([]));

    }

    private function makePrice(mixed $price= null)
    {
        if($price==null)return new ($this->getPricesClassName())();
        $className = $this->getPricesClassName();
        $model = new $className([
       //     'created_at'=>now(),
       //     'updated_at'=>now(),
            $this->getPricesRelationalName()=>$price,
        ]);
        $model->{implode('_',[$this->getPricesRelationalName(),'type'])} = $this->getMorphClass();
        $model->{implode('_',[$this->getPricesRelationalName(),'id'])} = $this->getKey();
        return $model;
    }

    public function setPrice($price,$country='india',$currency=1){

        $price_id=$this->getPriceId($price);
        $newModel=$this->makePrice($price);
        $newModel->save();
        $newModel->setCountry($country);
        $newModel->setCurrency($currency);
        $newModel->save();
        $newModel->refresh();
        return $newModel;
    }

    public function updatePrice($price,$country=null,$currency=null){

        if($currency==null)$currency=1;
        if($country==null)$currency='india';

        $newModel=$this->getPriceRow($country,$currency);
        $newModel->price=$price;
        $newModel->save();
        $newModel->refresh();
        return $newModel;
    }


    public function scopeWithCurrentPrice(Builder $query){
        return $query->with(['prices','prices.currency','prices.currency.currency']);
    }

    public function getPriceRow(mixed $country, mixed $currency)
    {
        $country_id=$this->getCountry($country)->id;
        $currency_id=$currency;

       $this->loadPricesRelationIfNot();

       // dd($currency_id);
      //  $this->with(['prices']);
        //dd($currency_id.$country_id);
        return $this->prices->where('country.related_id',$country_id)->where('currency.related_id',$currency_id)->first();
        dd($this->prices()->whereHas('country',function (Builder $builder){})->whereHas('currency',function (Builder $builder){})->get()->toArray());
        dd($this->with(['prices'])->whereHas($this->getPricesRelationName(),function (Builder $builder) use ($country_id,$currency_id) {

//            $builder->whereHas('country',function (Builder $builder2) use ($country_id,$currency_id) {
//                $builder2->where('id',$country_id);
//            });
//            $builder->whereHas('currency',function (Builder $builder3) use ($country_id,$currency_id) {
//                $builder3->where('related_id',$currency_id);
//            });


        })->get()->toArray());
        //dd($this->{$this->getPricesRelationName()}->toArray());
        //dd($this->{$this->getPricesRelationName()}->toArray());
        dd($this->{$this->getPricesRelationName()}->whereHas('country.related_id',$country_id)->dd());

        dd($this->{$this->getPricesRelationName()}()->whereRelation('country',function (Builder $query) use ($country_id) {
            var_dump($query->where('country_id',$country_id)->count());
        })->count());


        dd($this->{$this->getPricesRelationName()}()->whereRelation('country',[Country::class],function (Builder $query){
            dd($query->dd());
        })->dd());

        return $this->prices->filter(function ($price)use ($country_id,$currency_id) {
            return $price->country->related_id==$country_id && $price->currency->related_id==$country_id ;
        })?->first();
    }


    public function setPricesRelation($relation,$value)
    {
        if (isset($relation[$this->getPricesRelationName()])) {
            // clear the indexed cache
            $this->indexedPricesCollection = null;
        }


        return parent::setRelation($relation, $value);
        return parent::setRelations($relations,$value);
    }

    private function loadPricesRelationIfNot(){
        if (!$this->relationLoaded($this->getPricesRelationName())) {
            $this->setPricesRelation($this->getPricesRelationName(), $this->{$this->getPricesRelationName()}()->get());
        }
    }
    private function getPricesCollection()
    {
        // load meta relation if not loaded.
        if (!$this->relationLoaded($this->getPricesRelationName())) {
            $this->setPricesRelation($this->getPricesRelationName(), $this->{$this->getPricesRelationName()}()->get());
        }
        // reindex by key for quicker lookups if necessary.
        if ($this->indexedPricesCollection === null) {
            $this->indexedPricesCollection = $this->variants->keyBy('id');
        }

        return $this->indexedPricesCollection;
    }

    private function getPriceId($price){

        //  dd($country);
        switch (gettype($price)){
            case 'string':
                $price=$this->searchPrice($price)?->id;
                goto IntegerCase;
                break;
            case 'integer':
                IntegerCase:
                $id=(integer)$price;
                break;
            case 'object':
                $id=$price->id;
                break;
            case 'array':
                $id=$price['id'];
                break;
            default:
                $id=(integer)$price;
        }

        return $id;

    }


}
