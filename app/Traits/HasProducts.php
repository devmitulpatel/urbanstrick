<?php

namespace App\Traits;

use App\Models\Orderable;
use App\Models\Product;

trait HasProducts
{

    public function products(){

        return $this->belongsToMany(Product::class,'');

    }


    public function getOrderableClassName()
    {
        return Orderable::class;
    }

    public function getOrderableRelationalName()
    {
        return 'orderables';
    }


}
