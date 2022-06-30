<?php

namespace App\Models;

use App\Traits\HasCity;
use App\Traits\HasState;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pincode extends Model
{
    use HasFactory,HasCity,HasState;
    protected $fillable = [
            'pincode',
            'city_id',
            'state_id'
        ];
}
