<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Variantable extends Model
{
    use HasFactory;
    protected $fillable=['parent_id'];

    public function variant_type(){
        return $this->hasOne(variantType::)
    }
}
