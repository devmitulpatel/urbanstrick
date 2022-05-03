<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserInertiaResource extends JsonResource
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
        return [
            'addresses'=>$this->getAddresses(),
            'id'=>$this->id,
            'email'=>$this->email,
            'is_password_set'=>$this->is_password_set,
            'first_name'=>$this->first_name,
            'last_name'=>$this->last_name,
            'name'=>implode(' ',[$this->first_name,$this->last_name])

        ];
        return parent::toArray($request);
    }
    private function getAddresses(){
        return (!is_null($this->addresses))?AddressInertiaResource::collection($this->addresses)->toArray($this->request):[];
    }
}
