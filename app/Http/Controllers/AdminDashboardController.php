<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class AdminDashboardController extends Controller
{
    //


    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(){

        $data=[
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ];
        return Inertia::render('Dashboard',$data);
    }

    public function product(){

        $getUrl=function (Product $map){
            $map->setAttribute('type_of_print',$map->getMeta('type_of_print'));
            $map->setAttribute('type_of_fabric',$map->getMeta('type_of_fabric'));
            $map->setAttribute('color',$map->getMeta('color'));
            $map->setAttribute('url',$map->media->first()->getUrl());
            $map->setAttribute('price',$map->prices->first()->price);
            $map->setAttribute('currency',$map->prices->first()->currency->currency->symbol);
            $map->unsetRelations(['prices','media','meta']);
            return$map;};
        $topProduct= Product::with(['media','meta'])->withCurrentPrice();
        $data=[
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'product_data'=>ProductResource::collection($topProduct->paginate(5)),
        ];
        return Inertia::render('Back/Product',$data);
    }

}
