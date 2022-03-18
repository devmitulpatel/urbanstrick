<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Currenciable extends Model
{
    use HasFactory;
    protected $fillable=['created_at'];
    public function currency(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(Currency::class,'id','related_id');
    }
}
