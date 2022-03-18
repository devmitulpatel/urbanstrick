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
        [    'name'=>'Urban Earth','price'=>999,'type_of_fabric'=>'100 % Cotton','type_of_print'=>'Dye Print','color'=>'rgb(229,173,154)'],
        [    'name'=>'Urban U','price'=>999,'type_of_fabric'=>'100 % Cotton','type_of_print'=>'Dye Print','color'=>'rgb(246,247,247)'],
        [    'name'=>'Focus','price'=>799,'type_of_fabric'=>'100 % Cotton','type_of_print'=>'Dye Print','color'=>'rgb(42,43,43)'],
        [    'name'=>'Work Hard','price'=>799,'type_of_fabric'=>'100 % Cotton','type_of_print'=>'Dye Print','color'=>'rgb(144,179,190)'],
        [    'name'=>'Always','price'=>799,'type_of_fabric'=>'100 % Cotton','type_of_print'=>'Dye Print','color'=>'rgb(246,247,247)'],
        [    'name'=>'Big Dream Big Act','price'=>799,'type_of_fabric'=>'100 % Cotton','type_of_print'=>'Dye Print','color'=>'rgb(120,121,121)'],
        ];

        foreach ($data as $key=>$product){


                $productModel=\App\Facades\Product::create($product);
                $productModel->attachMedia(MediaUploader::importPath('app',$files[$key]),'image');
//            $productModel=new Product();
//            $productModel->name=$product['name'];
//            $productModel->slug=Str::slug($product['name']);
//            $productModel->save();
//            $productModel->attachMedia(MediaUploader::importPath('app',$files[$key]),'image');
//            $productModel->setPrice($product['price']);
        }




        //dd($uploader);

    }
}
