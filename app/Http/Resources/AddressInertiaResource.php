<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AddressInertiaResource extends JsonResource
{
    private \Illuminate\Http\Request $request;

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $this->request=$request;


        $address=$this->address;

        return [
            'id'=>$address->id,
            'name'=>$address->name,
            'line_1'=>$address->line_1,
            'line_2'=>$address->line_2,
            'line_3'=>$address->line_3,
            'city'=>$this->getCity(),
            'state'=>$this->getState(),
            'pincode'=>$this->getPicode(),

        ];

        return parent::toArray($request);
    }

    private function getCity():array{

        return (!is_null($this->address->city))?CityInertiaResource::make($this->address->city)->toArray($this->request):'';
    }
    private function getState():array{
        return (!is_null($this->address->state))?StateInertiaResource::make($this->address->state)->toArray($this->request):'';
    }
    private function getPicode():string{
        return (!is_null($this->address->pincode))?$this->address->pincode:'';
    }
}
