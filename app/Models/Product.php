<?php

namespace App\Models;

use App\Traits\HasVariants;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Plank\Metable\Metable;

class Product extends Model
{
    use HasFactory,Metable,HasVariants;
    protected $fillable=[
        'name',
        'slug',
        'status'
    ];



}
