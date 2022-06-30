<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Plank\Mediable\Facades\ImageManipulator;
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

       // dd($files);
        $uploader=[];
        $data=[
        [    'name'=>'Your Self','price'=>799,'type_of_fabric'=>'100 % Cotton','type_of_print'=>'Dye Print','color'=>'rgb(120,121,121)','image'=>'sample_product/7.png'],
        [    'name'=>'Urban Earth','price'=>999,'type_of_fabric'=>'100 % Cotton','type_of_print'=>'Dye Print','color'=>'rgb(229,173,154)','image'=>'sample_product/1.png'],
        [    'name'=>'Urban U','price'=>999,'type_of_fabric'=>'100 % Cotton','type_of_print'=>'Dye Print','color'=>'rgb(246,247,247)','image'=>'sample_product/2.png'],
        [    'name'=>'Focus','price'=>799,'type_of_fabric'=>'100 % Cotton','type_of_print'=>'Dye Print','color'=>'rgb(42,43,43)','image'=>'sample_product/3.png'],
        [    'name'=>'Work Hard','price'=>799,'type_of_fabric'=>'100 % Cotton','type_of_print'=>'Dye Print','color'=>'rgb(144,179,190)','image'=>'sample_product/4.png'],
        [    'name'=>'Always','price'=>799,'type_of_fabric'=>'100 % Cotton','type_of_print'=>'Dye Print','color'=>'rgb(246,247,247)','image'=>'sample_product/5.png'],
        [    'name'=>'Big Dream Big Act','price'=>799,'type_of_fabric'=>'100 % Cotton','type_of_print'=>'Dye Print','color'=>'rgb(120,121,121)','image'=>'sample_product/6.png'],

        ];

        $sizes=[
            's','m','l','xl','xxl'
        ];


        foreach ($data as $key=>$product){
                $productModel=\App\Facades\Product::create($product,true);
                foreach ($sizes as $size){
                    $productModel->createVariant('Size',$size);
                }

                $productModel->addCategory(['men','women','unisex','tshirt']);
                $productModel->getRow()->attachMedia(MediaUploader::importPath('app',$product['image']),'image');
                $productModel->getRow()->refresh();
                ImageManipulator::createImageVariant($productModel->getRow()->media->first()->findOriginal(), 'thumb');
                ImageManipulator::createImageVariant($productModel->getRow()->media->first()->findOriginal(), 'thumbnail');
//            $productModel=new Product();
//            $productModel->name=$product['name'];
//            $productModel->slug=Str::slug($product['name']);
//            $productModel->save();
//            $productModel->attachMedia(MediaUploader::importPath('app',$files[$key]),'image');
           // $productModel->getRow()->setPrice($product['price']);
        }


       // dd(\App\Models\Product::hasCategories(['men','women'])->get()->toArray());

        //dd($uploader);

    }

}
