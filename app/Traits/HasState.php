<?php

namespace App\Traits;

use App\Models\City;
use App\Models\State;
use Illuminate\Support\Str;

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

    public function createState($name){

        $state=$this->getOrCreateState($name);
        $this->{$this->getStateLocalKey()}=$state->id;
        $this->save();
        return $state;

    }

    private function getOrCreateState($name)
    {
        $query=($this->getStateClassName())::query()->orWhere('name',(array)$name)->orWhere('slug',(array)Str::slug($name));
        if($query->count()<1){
            $model=new ($this->getStateClassName())(normal_name_seed($name));
            $model->save();
            return $model;
        }else{
            return $query->first();
        }

    }

}
