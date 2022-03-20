<?php

namespace App\Traits;

use App\Models\City;
use Illuminate\Support\Str;

trait HasCity
{

    public function city(){
        return $this->hasOne($this->getCityClassName(),$this->getCityForeignKey(),$this->getCityLocalKey());
    }

    public function getCityClassName(){
        return City::class;
    }
    public function getCityForeignKey(){
        return 'id';
    }

    public function getCityLocalKey(){
        return 'city_id';
    }

    private function loadCityRelationIfNot(){
        if (!$this->relationLoaded($this->getCityelationName())) {
            $this->setCityRelation($this->getCityRelationName(), $this->{$this->getCityRelationName()}()->get());
        }
    }


    private function getOrCreateCity($name)
    {
        $query=City::query()->orWhere('name',(array)$name)->orWhere('slug',(array)Str::slug($name));
        if($query->count()<1){


            $model=new ($this->getCityClassName())(normal_name_seed($name));
            $model->save();
            return $model;
        }else{
            return $query->first();
        }

    }

    public function createCity($name){

        $city=$this->getOrCreateCity($name);
        $this->{$this->getCityLocalKey()}=$city->id;
        $this->save();
        return $city;

       // $state_id=$state;


    }

    public function attachToState($name){


    }

}
