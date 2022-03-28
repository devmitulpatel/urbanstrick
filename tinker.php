<?php

use App\Models\User;
use Faker\Provider\Address;
use Plank\Mediable\Facades\ImageManipulator;

$product=\App\Models\Product::find(1)->load('media')->media->first();
//dd($product);
foreach (\App\Models\Product::with(['media'])->get() as $product){
    ImageManipulator::createImageVariant($product->media->first(), 'thumb');
}
dd('1');
$category=\App\Models\Category::all()->first();
$category=\App\Models\Category::find(1);
//$category->addSubCategory('Tshirt');
//$category->deleteSubCategories(13);
dd($category->parent);


$user=User::first();

$faker=Address::country();

$address=[
    'line_1'=>11,
    'line_2'=>22,
    'line_3'=>33,
    'pincode'=>'112345',
    'city'=>'Surat',
    'state'=>'Gujarat'

];
//dd($user->createAddress($address));
dd($user->getAllAddress()->toArray());
$user->load(['addresses','addresses.address']);

//dd($user->createAddress($address));
