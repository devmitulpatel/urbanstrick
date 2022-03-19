<?php

namespace App\Traits;

use App\Models\State;

trait HasState
{

    public function state(){
        return $this->hasOne($this->getStateClassName(),$this->getStateForeignKey(),$this->getStateLocalKey());
    }
    public function getStateClassName(){
        return State::class;
    }
    public function getStateForeignKey(){
        return 'id';
    }

    public function getStateLocalKey(){
        return 'state_id';
    }

    public function createCity($name,$state){

        $this->cit;

    }
}
