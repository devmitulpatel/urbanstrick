<?php

namespace App\Traits;

use App\Models\Category;
use App\Models\CategoryCategories;
use App\Models\CategoryCategory;

trait HasSubCategory
{

    public function parent(){
        return $this->hasMany(CategoryCategories::class,'parent_id','id');
        return $this->hasOneThrough(CategoryCategories::class,self::class,'id','id','parent_id','child_id');
    }

    public function addSubCategory($category){
        $foundSub=self::where('slug',$category);
        if($foundSub->count()<1) {
            $subCategory = self::create(normal_name_seed($category));
        }else{
            $subCategory = $foundSub->first();
        }

        CategoryCategories::create(['parent_id'=>$this->id,'child_id'=>$subCategory->id]);
        return $subCategory;
    }

    public function getChildCategories(){

        if(!$this->relationLoaded('parent'))$this->load('parent');
        return $this->parent;

    }

    public function deleteSubCategories($id){
        if(!$this->relationLoaded('parent'))$this->load('parent');
        dd($this->parent()->where('child_id',$id)->dd());
        return $this->parent()->where('child_id','=',$id)->dd();
    }



}
