<?php

namespace App\Models;

use App\Traits\HasCountry;
use App\Traits\HasPrice;
use App\Traits\HasVariants;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Plank\Mediable\Mediable;
use Plank\Metable\Metable;
use Staudenmeir\EloquentHasManyDeep\HasRelationships;

class Product extends Model
{
    use HasFactory,Metable,HasVariants,Mediable,HasPrice,HasCountry;
    use HasRelationships;
    protected $fillable=[
        'name',
        'slug',
        'status'
    ];




}
