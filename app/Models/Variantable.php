<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Variantable extends Model
{
    use HasFactory;
    protected $fillable=['parent_id','variant_type_id','variant_type_value_id'];

    public function variant_type(){
        return $this->hasOne(VariantType::class);
    }
    public function variant_type_value(){
        return $this->hasOne(VariantTypeValue::class);
    }
}
