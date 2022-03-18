<?php

use App\Facades\Product;
use Illuminate\Support\Str;

$data=[
    'name'=>' test 1',
    'price'=>120,
    'currency'=>1,
    'taxcode'=>'dsdsd'
];

$product=Product::create($data);

$id=$product->id;
$data2=[
    'name'=>'Test 2',
    'price'=>122
];

$product=Product::find(1);
Product::update($product,$data2);

$product=$product->neywInstance()->find($id);
$condition=$product->name=='Test 2';
dd($condition);
