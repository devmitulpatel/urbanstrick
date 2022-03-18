<?php

namespace App\Models;

use App\Traits\HasCountry;
use App\Traits\HasCurrency;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Priceable extends Model
{
    use HasFactory,HasCountry,HasCurrency;
    protected $fillable=['price'];
    protected $with=['country','currency'];

}
