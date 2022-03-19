<?php

namespace App\Traits;

use App\Models\Address;
use Illuminate\Support\Arr;

trait HasAddresses
{

    public function addresses(){
        return $this->morphMany($this->getAddressClassName(),$this->getAddressRelationalName());
    }

    private function getAddressClassName()
    {
        return Address::class;
    }

    private function getAddressRelationalName()
    {
        return 'address';
    }


    public function createAddress($data=[]){
        $newModel=new ($this->getAddressClassName())();
        $data=Arr::only($data,['line_1','line_2','line_3','pincode']);
        $dataRaltion=Arr::only($data,['city','state','country']);
        $newModel->fill($data);
    }




    private function getOrCreateCity($data){

        switch (gettype($data)){
            case 'string':
                $country=$this->searchCity($data)?->id;
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

}
