<?php

namespace App\Facades;

use App\Repositories\PaymentRepository;
use Illuminate\Support\Facades\Facade;

class Payment extends Facade implements FacadeInterface
{

    public static function getFacadeAccessor()
    {
        return PaymentRepository::class;
    }
}
