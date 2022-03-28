<?php

namespace App\Traits;

use App\Models\Categoriable;
use App\Models\Category;
use Illuminate\Support\Str;

trait HasCategory
{


    public function category(){
         return $this->morphMany($this->getCategoryClassName(),$this->getCategoryRelationName());
             //->morphMany($this->getCategoryClassName(), $this->getCategoryRelationName());
    }

    public function getCategoryClassName()
    {
        return Categoriable::class;
    }

    public function getCategoryRelationName()
    {
        return 'categoriable';
    }

    public function attachCategory(mixed $name){

        $categoryArray=collect([]);

        foreach ((array)$name as $category){
            $categoryModel=Category::findOrCreate($category);
            $categaibleModel=new Categoriable();
            $categaibleModel->category_id=$categoryModel->id;
            $categoryArray->push($categaibleModel);
        }
        $this->category()->saveMany($categoryArray);
        $this->refresh();
    }

    public function hasCategory(mixed $name){
        foreach ((array)$name as $category){
            $this->whereHas('category',function ($builder)use ($category){
                 $builder->whereHas('category',function ($builder2) use ($category) {
                     $builder2->orWhere('name',$category)->orWhere('slug',Str::slug($category));
                });

            });
        }
        return $this->count()>0;
    }

    public function scopeHasCategories($query,mixed $names,$with=[]){
        $this->load($with);
        foreach ((array)$names as $category) {
            $query->whereHas('category', function ($builder) use ($category) {
                $builder->whereHas('category', function ($builder2) use ($category) {
                    $builder2->orWhere('name', $category)->orWhere('slug', Str::slug($category));
                });

            });
        }

    }


}
