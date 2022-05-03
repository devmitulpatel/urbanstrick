<?php

namespace App\Traits;

use App\Models\Cartable;
use App\Models\Product;

trait HasCart
{

    public function cart(){
        return $this->morphMany($this->getCartClassName(),$this->getCartRelationalName());
    }


    private function getCartClassName()
    {
        return Cartable::class;
    }

    private function getCartRelationalName()
    {
        return 'cartable';
    }

    private function getCartRelationName()
    {
        return 'cart';
    }

    private function getCartPivotName()
    {
        return 'product_id';
    }


    public function syncCart($data){
        if(!$this->relationLoaded($this->getCartRelationName())){
            $this->load($this->getCartRelationName());
        }

        if(is_object($data) &&  $data->first() instanceof Product){
            $relationData=[];
            $newProductId=$data->pluck('id')->toArray();
            $oldProductId=$this->cart->pluck($this->getCartPivotName())->toArray();

            $this->cart->whereIn($this->getCartPivotName(),array_diff($oldProductId,$newProductId))->each(function ($ar) use ($newProductId, $oldProductId) {
                $ar->delete();
            });

            foreach (array_diff($newProductId,$oldProductId) as $row){
                $relationData[]=$this->makeCartItem($row);
            }
            if(count($relationData)>0)$this->cart()->saveMany($relationData);
        }
        $this->refresh();
       // dd($this->cart->toArray());
    }
    public function syncCartWithRawData($rawData){
        $dataCollection=collect($rawData);
        $dataRaw=$dataCollection->pluck('product.id');
        $data=Product::whereIn('id',$dataRaw->toArray())->get();
        $quantity=$dataCollection->pluck('qt','product.id')->toArray();
        if(!$this->relationLoaded($this->getCartRelationName())){
            $this->load($this->getCartRelationName());
        }

        if(is_object($data) &&  $data->first() instanceof Product){
            $relationData=[];
            $newProductId=$data->pluck('id')->toArray();
            $oldProductId=$this->cart->pluck($this->getCartPivotName())->toArray();
            $newIdsOnly=array_diff($newProductId,$oldProductId);
            $oldIdsOnly=array_diff($oldProductId,$newProductId);
            $updateIdOnly=array_intersect($newProductId,$oldProductId);
            $this->cart->whereIn($this->getCartPivotName(),$oldIdsOnly)->each(function ($ar) use ($newProductId, $oldProductId) {
                $ar->delete();
            });

            foreach ($newIdsOnly as $key){
                $relationData[]=$this->makeCartItem($key,$quantity[$key]);
            }

            $this->cart->whereIn($this->getCartPivotName(),$updateIdOnly)->each(function ($ar) use ($quantity) {
                if($ar->quantity!=$quantity[$ar->product_id])$ar->update(['quantity'=>$quantity[$ar->product_id]]);
            });

            if(count($relationData)>0)$this->cart()->saveMany($relationData);

        }
        $this->refresh();
       // dd($this->cart->toArray());
    }


    public function makeCartItem($id,$qt=1){


        $className = $this->getCartClassName();
        $data=[
            'created_at'=>now(),
            'updated_at'=>now(),
            $this->getCartPivotName()=>$id,
            'quantity'=>$qt
        ];
        $model = new $className($data);
        $model->{implode('_',[$this->getCartRelationalName(),'type'])} = $this->getMorphClass();
        $model->{implode('_',[$this->getCartRelationalName(),'id'])} = $this->getKey();
        return $model;
    }


    public function scopeGetCart($query,$userId){
        return $query->with([$this->getCartRelationName()])->whereKey($userId)->first()->cart;
    }

}
