<?php

namespace App\Http\Requests;

use App\Facades\Order;
use Illuminate\Foundation\Http\FormRequest;
use Inertia\Inertia;

class StoreOrderRequest extends FormRequest
{

    private $requestModel=Order::class;
    private $redirectTo='checkout_proceed_to_payment';

    public function __construct(array $query = [], array $request = [], array $attributes = [], array $cookies = [], array $files = [], array $server = [], $content = null)
    {
        parent::__construct($query, $request, $attributes, $cookies, $files, $server, $content);
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        if(auth()->check()){
            $data=['items'=>[],'address'];
            $this->mergeIfMissing($data);
        }

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

        if(strtolower($this->method())!='post')return redirect()->route('checkout');
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
