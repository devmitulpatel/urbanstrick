<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Plank\Metable\Metable;

class DynamicData extends Model
{
    use HasFactory,Metable;
    public static $typeOfValueDisplay=[
        1,//string
        2,//number
        3,//date
        4,//datetime
        5,//time
        6,//array
    ];
    public static $defaultTypeOfValueDisplay=1;
    protected $fillable=[
        'value'
    ];


}
