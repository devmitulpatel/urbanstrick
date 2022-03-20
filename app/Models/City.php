<?php

namespace App\Models;

use App\Traits\HasState;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    use HasFactory;
    protected $fillable=['name','slug'];
}
