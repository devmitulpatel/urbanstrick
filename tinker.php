<?php


use App\Facades\Product;
use App\Facades\Unit;

$data=[
    'name'=>' test 2',
];

dd(Unit::create($data));

dd(Product::delete( 3));

dd(Product::update( 3,$data));

$data=[
    'name'=>' test 1',
    'price'=>120,
    'currency'=>'inr',
    'taxcode'=>'dsdsd'
];

dd((new App\Resource\ProductRepository)->create($data));
