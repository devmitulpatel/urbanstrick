<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Addressable extends Model
{
    use HasFactory;


    protected $fillable=['created_at','updated_at','address_id'];
    public function address(): HasOne
    {
        return $this->hasOne(Address::class,'id','address_id');
    }
    protected $with=[
        'address'
    ];
}
