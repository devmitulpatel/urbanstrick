<?php

namespace App\Models;

use App\Traits\HasSubCategory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

/**
 * @method static getCategory($type)
 */
class Category extends Model
{
    use HasFactory,HasSubCategory;
    protected $fillable = [
        'name',
        'slug'
    ];


    public function scopeFindOrCreate($query,$name){
        $found=$query->orWhere('name',$name)->orWhere('slug',Str::slug($name))->first();
        if($found==null){
            $found=new self();
            $found->fill(normal_name_seed($name));
            $found->save();
        }

        return $found;
    }
    public function scopeGetCategory($query,$name){
         $query->orWhere('name',$name)->orWhere('slug',Str::slug($name))->first();
    }
}
