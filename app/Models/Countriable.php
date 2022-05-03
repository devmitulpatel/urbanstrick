<?php

namespace App\Models;

use App\Traits\HasCurrency;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Countriable extends Model
{
    use HasFactory,HasCurrency;
    protected $fillable=['created_at','updated_at'];

    public function country(){
        return $this->hasOne(Country::class,'id','country_id');
    }

}
