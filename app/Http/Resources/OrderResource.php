<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {



        $payment=$this->payments->first();
        $displayId=[$this->created_at->year,$this->created_at->month,$this->id];
        $paymentId=[$this->created_at->year,$this->created_at->month,$this->id,$payment?->id];
        if((bool)!($payment?->id))$paymentId=[];
        $separator='-';
        return [
            'id'=>$this->id,
            'display_id'=>implode($separator,$displayId),
            'total_amount'=>$this->total_amount,
            'total_tax'=>$this->total_tax,
            'paid'=>(bool)($payment?->id),
            'payment_id'=>implode($separator,$paymentId),
            'payment_on'=>Carbon::parse($payment?->created_at)->format('d/m/Y'),
            'payment_fees'=>(int)$payment?->fees,
            'total'=>(int)$payment?->amount,
            'items'=>OrderItemResource::collection($this->cart)->toArray($request),

        ];
        return parent::toArray($request);
    }


}
