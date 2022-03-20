<?php

namespace App\Traits;

use App\Models\Address;
use App\Models\Addressable;
use App\Models\City;
use Illuminate\Support\Arr;

trait HasAddresses
{


    public function addresses(){
        return $this->morphMany($this->getAddressClassName(),$this->getAddressRelationalName());
    }

    private function getAddressClassName()
    {
        return Addressable::class;
    }

    private function getAddressRelationalName()
    {
        return 'addressables';
    }

    private function getAddressRelationName()
    {
        return 'addresses';
    }

    private function getAddressPivotName()
    {
        return 'address_id';
    }


    public function getAllAddress(){
        $this->loadAddressRelation();
        return $this->addresses->pluck('address');
    }


    public function loadAddressRelation(){
        if (!$this->relationLoaded($this->getAddressRelationName())) {
            $this->setAddressRelation($this->getAddressRelationName(), $this->{$this->getAddressRelationName()}()->with(['address'])->get());
        }
    }

    public function setAddressRelation($relation, $value)
    {
        if (isset($relations[$this->getAddressRelationName()])) {
            $this->indexedAddressCollection = null;
        }
        return parent::setRelation($relation, $value);
    }


    public function createAddress($data=[]){
        $rawData=$data;
        $data=Arr::only($data,['line_1','line_2','line_3','pincode']);

        $newModel=new (Address::class)();
        $newModel->fill($data);
        $newModel->save();

        $newMorphModel=$this->makeAddress($newModel->id);

        $relationalArray=Arr::only($rawData,['city','state']);

        if(count($relationalArray)){
            if(array_key_exists('city',$relationalArray)){
                if(array_key_exists(HasCity::class,class_uses($newModel))){
                    $city = $newModel->createCity($relationalArray['city']);
                    if(array_key_exists('state',$relationalArray) && array_key_exists(HasState::class,class_uses($newModel))){

                        $newModel->createState($relationalArray['state']);
                    }

                }
            }
        }

        //dd($relationalArray);
      //  dd($newMorphModel);
        //dd($newMorphModel->);
        $this->addresses()->save($newMorphModel);
        return $this->save();
        return $this;

    }


    public function makeAddress($id){


        $className = $this->getAddressClassName();
        $data=[
            'created_at'=>now(),
            'updated_at'=>now(),
            $this->getAddressPivotName()=>$id,
        ];
        $model = new $className($data);
        $model->{implode('_',[$this->getAddressRelationalName(),'type'])} = $this->getMorphClass();
        $model->{implode('_',[$this->getAddressRelationalName(),'id'])} = $this->getKey();
        return $model;
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
