<?php

namespace App\Facades;

use App\Repositories\OrderRepository;
use Illuminate\Support\Facades\Facade;

class Order extends Facade implements FacadeInterface
{
    public static function getFacadeAccessor(){
        return OrderRepository::class;
    }

}
