<?php

namespace Database\Seeders;

use App\Http\Middleware\RedirectIfAuthenticated;
use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    private $data=[];
    private $collectionOfModel;
    private string $model;

    public function run()
    {
         $this->model= Category::class;
         $this->defaultSeedData();
         $this->collectionOfModel=$this->model::insert($this->data);
         $this->defaultSubSeedData();
    }

    private function defaultSeedData(){
        $this->data[]=normal_name_seed('Women');
        $this->data[]=normal_name_seed('Men');
        $this->data[]=normal_name_seed('Unisex');
        $this->data[]=normal_name_seed('Kid');
    }

    private function defaultSubSeedData()
    {
        foreach ($this->model::all() as $category){
            switch ($category->slug){
                case Str::slug('Women'):
                    $category->addSubCategory('Tshirt');
                    break;
                case Str::slug('Men'):
                    $category->addSubCategory('Tshirt');
                    break;
                case Str::slug('Unisex'):
                    $category->addSubCategory('Tshirt');
                    break;
                case Str::slug('Kid'):
                    $category->addSubCategory('Tshirt');
                    break;

            }
        }
    }
}
