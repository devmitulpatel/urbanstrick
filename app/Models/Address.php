<?php

namespace App\Models;

use App\Traits\HasCity;
use App\Traits\HasCountry;
use App\Traits\HasState;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory,HasCity,HasState;

    protected $fillable=[
        'line_1',
        'line_2',
        'line_3',
        'pincode',
    ];

    protected $with=['city','state'];


}
