<?php

namespace App\Traits;

use App\Models\Payment;

trait HasPayments
{

    public function payments(){
        return $this->hasMany(Payment::class,'order_id','id');
    }

}
