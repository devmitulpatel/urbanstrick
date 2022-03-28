<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{


    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {



        //  dd($this->media->first()->findOriginal()->findVariant('thumb')->getUrl());
        $this->setAttribute('type_of_print',$this->getMeta('type_of_print'));
        $this->setAttribute('type_of_fabric',$this->getMeta('type_of_fabric'));
        $this->setAttribute('color',$this->getMeta('color'));
        $this->setAttribute('url',$this->media->first()->getUrl());

        $this->setAttribute('thumbnail',$this->media->first()->findOriginal()->findVariant('thumb')->getUrl());
        $this->setAttribute('price',$this->prices->first()->price);
        $this->setAttribute('currency',$this->prices->first()->currency->currency->symbol);
        $this->unsetRelations(['prices','media','meta']);

        return parent::toArray($request);
    }
}
