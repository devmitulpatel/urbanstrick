<?php

namespace App\Traits;

use App\Models\Countriable;
use App\Models\Country;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Support\Str;

/**
 * @method static deleted(\Closure $param)
 * @method morphMany($getVariantsClassName, string $string)
 *
 */
trait HasCountry
{


    public function country() :MorphOne
    {
        return $this->morphOne($this->getCountryClassName(), $this->getCountryRelationName());
    }
    public static function bootHasCountry(){
        static::deleted(function (self $model) {
            if (method_exists($model, 'isForceDeleting') && !$model->isForceDeleting()) {
                return;
            }
            $model->purgeCountry();
        });

    }
    public function getCountryClassName():string{
        return Countriable::class;
    }
    private function getCountryRelationName(){
        return 'country';
    }
    private function getCountryRelationalName(){
        return 'related_id';
    }

    public function setCountry(mixed $country){

        if (empty($country)) {
            return;
        }

        $country_id=$this->getCountryId($country);


            if ($this->hasCountry()) {
                $item = $this->getCountryRecord();
                $item->setAttribute($this->getCountryRelationalName(),$country_id);
                if($item->isDirty())$item->save();
                //if ($item->getAttribute('parent_id') != $parent_id && !in_array($parent_id,$item->pluck('parent_id')->toArray())) goto CreateNewCountry;
            } else {
                CreateNewCountry:
                $item = $this->makeCountry($country_id);
                $item->setAttribute($this->getCountryRelationalName(),$country_id);
                $this->{$this->getCountryRelationName()}()->save($item);
                //$this->variants()[] = $item;
                //$this->indexedCountryCollection[] = $item;
            }

        $this->refresh();


    }
    public function getCountry(){
        return $this->getCountryRecord();
    }
    private function searchCountry($name){
        return Country::orWhere('slug',Str::slug($name))->orWhere('short_name',$name)->first();
    }
    private function getCountryId($country){

      //  dd($country);
        switch (gettype($country)){
            case 'string':
                $country=$this->searchCountry($country)?->id;
                goto IntegerCase;
                break;
            case 'integer':
                IntegerCase:
                $id=(integer)$country;
                break;
            case 'object':
                $id=$country->id;
                break;
            case 'array':
                $id=$country['id'];
                break;
            default:
                $id=(integer)$country;
        }

        return $id;

    }

    public function setCountryRelation($relation, $value)
    {
        if (isset($relations[$this->getCountryRelationName()])) {
            $this->indexedCountryCollection = null;
        }
        return parent::setRelation($relation, $value);
    }
    public function setCountryRelations(array $relations)
    {
        if (isset($relations[$this->getCountryRelationName()])) {
            // clear the indexed cache
            $this->indexedCountryCollection = null;
        }

        return parent::setRelations($relations);
    }
    private function getCountryCollection()
    {
        // load meta relation if not loaded.
        if (!$this->relationLoaded($this->getCountryRelationName())) {
            $this->setVariantRelation($this->getCountryRelationName(), $this->{$this->getCountryRelationName()}()->get());
        }
        //dd($this->{$this->getCountryRelationName()});
        // reindex by key for quicker lookups if necessary.
//        if ($this->indexedCountryCollection === null && $this->{$this->getCountryRelationName()}!==null) {
//            $this->indexedCountryCollection = $this->{$this->getCountryRelationName()}->keyBy('id');
//        }

        return $this->indexedCountryCollection??new ($this->getCountryClassName())();
    }
    protected function makeCountry(mixed $country=''): Countriable
    {
        $country_id=$this->getCountryId($country);
        $className = $this->getCountryClassName();
        $model = new $className([
            'created_at'=>now(),
            'updated_at'=>now(),
            $this->getCountryRelationalName()=>$country_id,
        ]);
        $model->{implode('_',[$this->getCountryRelationName(),'type'])} = $this->getMorphClass();
        $model->{implode('_',[$this->getCountryRelationName(),'id'])} = $this->getKey();
        return $model;
    }
    public function hasCountry(): bool
    {
        return $this->getCountryCollection()->count();
    }
    public function getCountryRecord(): ?Countriable
    {
     //   dd($this->getCountryCollection()->get());
        return $this->getCountryCollection()->first();
    }
    private function purgeCountry()
    {

        $this->{$this->getCountryRelationName()}()->delete();
        $this->setCountryRelation($this, $this->makeVariant()->newCollection([]));

    }

}
