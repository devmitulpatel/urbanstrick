<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Plank\Mediable\Facades\MediaUploader;
use Plank\Mediable\Mediable;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Product::factory(5)->create();


        $files=Storage::disk('app')->files('/sample_product');

        $uploader=[];
        $data=[
        [    'name'=>'Urban Earth',],
        [    'name'=>'Urban U',],
        [    'name'=>'Focus',],
        [    'name'=>'Work Hard',],
        [    'name'=>'Always',],
        [    'name'=>'Big Dream Big Act',],
        ];

        foreach ($data as $key=>$product){


            $productModel=new Product();
            $productModel->name=$product['name'];
            $productModel->slug=Str::slug($product['name']);
            $productModel->save();
            $productModel->attachMedia(MediaUploader::importPath('app',$files[$key]),'image');
        }




        //dd($uploader);

    }
}
