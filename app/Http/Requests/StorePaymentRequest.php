<?php

namespace App\Http\Requests;

use App\Models\Order;
use App\Models\Payment;
use Illuminate\Foundation\Http\FormRequest;

class StorePaymentRequest extends FormRequest
{

    private $requestModel=Payment::class;
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
            'payment_id'=>['required'],
            'order_id'=>['required'],
        ];
    }

    public function persist(){
        $input=$this->validated();
        $order=Order::whereMeta('order_id','=',$input['order_id'])->get()->first();
        $order->setMeta('payment_id',$input['payment_id']);

        $amount=$order->total_amount+$order->total_tax;

        $newPaymentData=[
            'order_id'=>$order->id,
            'amount'=>$amount,
            'fees'=>$amount*(envmix('payment-gateway-razorpay','fee')/100),
            'payment_ref_no'=>$input['payment_id'],
            'status'=>2,
        ];
        $newModel= new $this->requestModel ();
        $newModel->fill($newPaymentData);
        $newModel->save();
        $data=[];
        return redirect()->route($this->redirectTo,$data);

    }
}
