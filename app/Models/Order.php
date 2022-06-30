<?php

namespace App\Models;

use App\Traits\HasCart;
use App\Traits\HasPayments;
use App\Traits\HasProducts;
use App\Traits\HasUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Plank\Metable\Metable;

class Order extends Model
{
    use HasFactory,HasCart,Metable,HasUser,HasPayments,HasProducts;

    protected $fillable = [
           'user_id',
           'addressable_id',
           'total_amount',
           'total_tax',
        ];



}
