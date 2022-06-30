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
    public function syncCartWithRawData($rawData,$meta=[]){

        $this->syncCartFor(auth()->user()->load(['cart'])->cart(),$rawData);

//        dd($dataCollection->toArray());
//
//        $dataRaw=$dataCollection->pluck('id');
//
//        $data=Product::whereIn('id',$dataRaw->toArray())->get();
//        $quantity=$dataCollection->pluck('qt','uuid')->toArray();
//
//        $size=$dataCollection->pluck('size','uuid')->toArray();
//        if(!$this->relationLoaded($this->getCartRelationName())){
//            $this->load($this->getCartRelationName());
//        }
//
//        if(is_object($data) &&  $data->first() instanceof Product){
//            $relationData=[];
//            $newProductId=$data->pluck('id')->toArray();
//            $oldProductId=$this->cart->pluck($this->getCartPivotName())->toArray();
//            $newIdsOnly=array_diff($newProductId,$oldProductId);
//            $oldIdsOnly=array_diff($oldProductId,$newProductId);
//            $updateIdOnly=array_intersect($newProductId,$oldProductId);
//            $this->cart->whereIn($this->getCartPivotName(),$oldIdsOnly)->each(function ($ar) use ($newProductId, $oldProductId) {
//                $ar->delete();
//            });
//
//            foreach ($newIdsOnly as $key){
//
//                foreach ($dataCollection->where('product.id',$key) as $item){
//                    $relationData[$item['uuid']]=$this->makeCartItem($key,$quantity[$key],$item['size']);
//                }
//
//            }
//
//            if(count($relationData)>0)$savedItems=$this->cart()->saveMany($relationData);
//
//            $this->cart->whereIn($this->getCartPivotName(),$updateIdOnly)->each(function ($ar) use ($quantity) {
//                if($ar->quantity!=$quantity[$ar->product_id])$ar->update(['quantity'=>$quantity[$ar->product_id]]);
//            });
//
//
//        }
//        $this->refresh();
//
//
//        if(isset($savedItems)){
//
//            foreach ($savedItems as $key=>$item){
//                $itemEntry=collect($relationData)->where('uuid',$item['uuid'])->first();
//                $itemEntry->setmeta('size',$size[$item['uuid']]);
//            }
//        }

    }


    public function makeOrderItem($id,$size,$qt,$price){

    }

    public function syncCartFor($cart,$rawData,$withPrice=false){
        $dataCollection=collect($rawData);
        $cart->delete();
        $dataCollection=$dataCollection->map(function ($item) use ($rawData, $withPrice, $cart) {
            $item['uuid']=implode('-',[$item['id'],$item['size'],$item['qt']]);
            $item['item']=Product::where('slug',$item['id'])->first();
            $item['item']->load(['prices','country','prices']);
            $item['order_item']=$this->makeCartItem($item['item']->id,$item['qt'],$item['size']);
            $itemRow=$cart->save($item['order_item']);

            $itemRow->setManyMeta([
                'size' => $item['size'],
                'price' => $item['item']->getPriceRow()['price'],
                'qt' => $item['qt'],
            ]);

            return $item;
        });

        foreach ($dataCollection as $item){
            $cart->save($item['order_item']);
        }

    }

    public function syncOrderItems($rawData){
        $this->syncCartFor($this->cart(),$rawData);
    }


    public function makeCartItem($id,$qt=1,$size='m'){


        $className = $this->getCartClassName();
        $data=[
            'created_at'=>now(),
            'updated_at'=>now(),
            $this->getCartPivotName()=>$id,
            'quantity'=>$qt,
            'uuid'=>implode('-',[$id,$size,$qt])
        ];
        $model = new $className($data);
        $model->{implode('_',[$this->getCartRelationalName(),'type'])} = $this->getMorphClass();
        $model->{implode('_',[$this->getCartRelationalName(),'id'])} = $this->getKey();
       // $model->setMeta('size',$size);
        return $model;
    }


    public function scopeGetCart($query,$userId){
        return $query->with([$this->getCartRelationName()])->whereKey($userId)->first()->cart;
    }



    public function scopeGetCurrentUserCart($query){
        return $query->with([$this->getCartRelationName(),'cart.product','cart.product.media','cart.product.prices'])->whereKey(auth()->id())->first()?->cart;
    }

    public function scopeGetCurrentUserCartItems($query){
        return $query->getCurrentUserCart()->pluck('product.id','id');
    }

}
