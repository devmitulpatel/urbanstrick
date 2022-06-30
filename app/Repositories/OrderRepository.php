<?php

namespace App\Repositories;

use App\Facades\Payment;
use App\Models\Addressable;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Support\Str;

class OrderRepository extends ModelRepositories implements ModelRepositoriesInterface
{

    public string $model= Order::class;


    private $address=null;

    public function create(array $data)
    {
        $this->address=$data['address'];
        $this->setRawData($data['items']);
        $this->createOrder();
        $this->attachProducts();
        $this->createPayment();
        return $this->getRow();
    }

    private function createPayment(){
        $data=[];
        Payment::create($data,$this->getRow());
    }
    private function attachProducts(){

        $this->getRow()->syncOrderItems($this->getRawData());

    }

    private static $transactionFee=5;
    private function createOrder(){
        $orderData=collect($this->getRawData());

        $foundItem=Product::withCurrentPrice()->whereIn('slug',$orderData->pluck('id'))->get();

        $orderData=$orderData->map(function ($model) use ($foundItem) {
            $sellingPrice=0;

            $currentItem=$foundItem->where('slug',$model['id'])->first();
            $price=$currentItem->getPriceRow();

            if($price)$sellingPrice=$price['price'];

            $model['sub_total']=$sellingPrice*$model['qt'];
            $model['sub_tax']=$model['sub_total']*(self::$transactionFee/100);

            return $model;
        });



        $payment=[
            'total'=>$orderData->sum('sub_total'),
            'tax'=>$orderData->sum('sub_tax'),
        ];

        $model=new ($this->getModel()) ();

        $addressable_id=(is_object($this->address))?$this->address->id:$this->address['id'];

        $data=[
            'user_id'=>auth()->id(),
            'total_amount'=>$payment['total'],
            'total_tax'=>$payment['tax'],
            'addressable_id'=>$addressable_id
        ];
        $model->fill($data);
        $model->save();
        $this->setRow($model);
    }
    public function update(mixed $model, array $data)
    {

    }

    public function delete(mixed $model)
    {

    }
}
