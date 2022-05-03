<?php

namespace App\Http\Requests;

use App\Facades\Order;
use Illuminate\Foundation\Http\FormRequest;
use Inertia\Inertia;

class StoreOrderRequest extends FormRequest
{

    private $requestModel=Order::class;
    private $redirectTo='checkout_proceed_to_payment';
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'items'=>['required'],
            'address'=>['required'],
        ];
    }

    public function persist(){
        $input=$this->validated();
        $order=Order::create($input)->load('meta');

        $orderId=$order->getMeta('order_id');
        $data =[
            'api'=>[
                'razorpay'=>[
                    'key'=>envmix('payment-gateway-razorpay','key'),
                    'secret'=>envmix('payment-gateway-razorpay','secret'),
                ]
            ],
            'order'=>[
                'id'=>$orderId,
                'data'=>$order->only(['total_amount','total_tax','id'])
            ]

        ];

        return Inertia::render('Front/ProceedToPayment',$data);

    }
}
