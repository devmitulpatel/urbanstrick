<?php

namespace App\Traits;

use App\Models\Inventoriable;

trait HasInventory
{

    public function invetory(){

        return $this->morphMany($this->getInventoryClassName(),$this->getInventoryRelationalName());

    }


    public function getInventoryClassName()
    {
        return Inventoriable::class;
    }

    public function getInventoryRelationalName()
    {
        return 'inventoriable';
    }

    private function getInventoryRelationName()
    {
        return 'invetory';
    }

    private array $allowedTypeInvetory=[
        'add',
        'remove'
    ];

    private function updateInventory($qt,$type='add'){
        $direction =false;
        if($type=='add')$direction=true;
        $newEntry=$this->makeInventory($qt,$direction);
        $relation=$this->getInventoryRelationName();
        return $this->$relation()->save($newEntry);
    }

    public function scopeAddStock($query,$qt){
        if($qt<1)return false;
        return $this->addStock($qt);
    }
    public function scopeRemoveStock($query,$qt){
        if($qt<1)return false;
        return $this->removeStock($qt);
    }

    public function addStock(int $qt){
        if($qt<1)return false;
        return $this->updateInventory($qt,'add');
    }

    public function removeStock(int $qt){
        if($qt<1)return false;
        return $this->updateInventory($qt,'remove');
    }

    public function getStock(){
        $inventory=$this->{$this->getInventoryRelationName()};
        $inward=$inventory->where('direction',true)->sum('quantity');
        $outward=$inventory->where('direction',false)->sum('quantity');
        return $inward-$outward;
    }

    public function getRequiredStock(){
        $inventory=$this->{$this->getInventoryRelationName()};
        $inward=$inventory->where('direction',true)->sum('quantity');
        $outward=$inventory->where('direction',false)->sum('quantity');
        return $outward-$inward;
    }



    public function makeInventory($qt=1,bool $direction){

        $className = $this->getInventoryClassName();
        $data=[
            'created_at'=>now(),
            'updated_at'=>now(),
            'quantity'=>$qt,
            'direction'=>$direction
        ];
        $model = new $className($data);
        $model->{implode('_',[$this->getInventoryRelationalName(),'type'])} = $this->getMorphClass();
        $model->{implode('_',[$this->getInventoryRelationalName(),'id'])} = $this->getKey();
        // $model->setMeta('size',$size);
        return $model;
    }


}
