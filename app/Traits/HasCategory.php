<?php

namespace App\Traits;

use App\Models\Categoriable;
use App\Models\Category;
use Illuminate\Database\Eloquent\Builder;
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



    public function scopeHasCategories(Builder $query,mixed $names,$with=[]){
        $names=collect((array)$names);

            $query->whereHas('category', function ($builder) use ($names) {
                $builder->where(function ($builder2) use ($names) {
                    $builder2->whereHas('category',function ($builder3) use ($names) {
                        $builder3->WhereIn('slug', $names);
                    });
                });

            });




    }


}
