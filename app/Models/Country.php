<?php

namespace App\Models;

use App\Traits\HasCurrency;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;

    public function prices(){
        return $this->morphTo();
    }

}
