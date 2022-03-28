<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoriable extends Model
{
    use HasFactory;
    protected $fillable=[
        'categoriable_id',
        'categoriable_type',
        'category_id',
    ];
    public function category(){
        return $this->hasOne(Category::class,'id','category_id');
    }
    protected $with=['category'];

}
