<?php

namespace App\Interfaces;

use Illuminate\Support\Facades\Http;
use Razorpay\Api\Api;

class RazorPay
{

    private $apiBase='https://api.razorpay.com/v1';
    private $key,$secret;
    private $baseClient;
    private $urlRaw;

    public function __construct(){
        $this->key=envmix('payment-gateway-razorpay','key');
        $this->secret=envmix('payment-gateway-razorpay','secret');
        $this->baseClient= new Api($this->key, $this->secret);
        $this->urlRaw=[$this->apiBase];

    }

    public function createOrder($data,$order,$currency='INR'){
        $this->setApiLevel('orders');
        $receiptNo=[now()->get('year'),now()->get('month'),now()->get('day')];
        $receiptNo[]=$order->id;
        //dd($order);

       // dd($this->makeUrl());
        $receiptNo=implode('',$receiptNo);
        $subtotal=$order->total_amount+$order->total_tax;
        $amount=$subtotal;
        if(envmix('payment-gateway','fee-from-customer')){
            $amount=$subtotal+(( $subtotal * envmix('payment-gateway-razorpay','fee'))/100 );
        }
        $amount=(int)$amount*100;
        $orderData=[
            'receipt' => $receiptNo,
            'amount' => $amount,
            'currency' => $currency,
            'notes'=> $order->only(['id','user_id','addressable_id'])
        ];

       // dd($orderData);
        $response=$this->client($this->makeUrl(),$orderData);
        if($response->status()==200){
            $order->load(['meta']);
            $order->setMeta('order_id',$response->object()->id);
        }
        $order->refresh();

    }


    private function client($url, $data = [], $type = 'post')
    {
        return Http::withBasicAuth($this->key, $this->secret)->$type($url, $data);
    }

    private function makeUrl()
    {
        return implode('/', $this->urlRaw);
    }

    private function setApiLevel($name){
        $this->urlRaw[]=$name;
    }

}
