<?php


use App\Models\Product;
use App\Facades\Unit;

$data=[
    'name'=>' test 2',
];
$products=[];
$model=Product::find(1);
//$model->name='Test';
//$model->slug=\Illuminate\Support\Str::slug('Test');
//$products[]=$model->save();
//$model=$model->newInstance();
//$model->name='Test';
//$model->slug=\Illuminate\Support\Str::slug('Test');
//$products[]=$model->save();
//$model=$model->newInstance();
//$model->name='Test';
//$model->slug=\Illuminate\Support\Str::slug('Test');
//$model->save();
//$model->syncVariants($products);
\Illuminate\Support\Facades\Artisan::call('migrate:fresh',['--seed'=>true]);
$model->setManyVariants([1,2,3]);
//$model->refresh();
$model->setVariant(4);
//$model->setManyVariants([1,2,3]);$model->new


dd('her');
//dd($model->variants());
//
//dd(Unit::create($data));
//
//dd(Product::delete( 3));
//
//dd(Product::update( 3,$data));
//
//$data=[
//    'name'=>' test 1',
//    'price'=>120,
//    'currency'=>'inr',
//    'taxcode'=>'dsdsd'
//];
//
//dd((new App\Resource\ProductRepository)->create($data));
