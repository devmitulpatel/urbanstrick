<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Plank\Metable\Metable;

class Cartable extends Model
{
    use HasFactory,Metable;
    protected $fillable = [
          'created_at',
          'updated_at',
          'product_id',
          'quantity',
          'uuid',
        ];

    public function product(){
        return $this->belongsTo(Product::class,'product_id','id');
    }

}
