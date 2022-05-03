<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cartable extends Model
{
    use HasFactory;
    protected $fillable = [
          'created_at',
          'updated_at',
          'product_id',
          'quantity',
        ];

    public function product(){
        return $this->belongsTo(Product::class,'product_id','id');
    }
}
