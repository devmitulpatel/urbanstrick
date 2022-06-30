<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {

        $productArray=ProductResource::make($this->product)->toArray($request);

        $productOtherData=[
            'quantity'=>$this->quantity,
            'size'=>$this->getMeta('size')
        ];

        return array_merge($productArray,$productOtherData);
        return parent::toArray($request);
    }
}
