<?php

namespace App\Traits;

use App\Models\City;

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

    public function createCity($name,$state){



    }

}
