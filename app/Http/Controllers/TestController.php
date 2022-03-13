<?php

namespace App\Http\Controllers;


use App\Facades\Product;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index(){

        $data=[
            'name'=>' test',
            'price'=>120,
            'currency'=>'inr',
            'taxcode'=>'dsdsd'
        ];

        dd(Product::create($data));
    }
}
