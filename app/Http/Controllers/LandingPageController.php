<?php

namespace App\Http\Controllers;

use App\Http\Requests\SetUserPasswordFromEmailRequest;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class LandingPageController extends Controller
{
    public function index(){

        $getUrl=function (Product $map){
            $map->setAttribute('type_of_print',$map->getMeta('type_of_print'));
            $map->setAttribute('type_of_fabric',$map->getMeta('type_of_fabric'));
            $map->setAttribute('color',$map->getMeta('color'));
            $map->setAttribute('url',$map->media->first()->getUrl());
            $map->setAttribute('price',$map->prices->first()->price);
            $map->setAttribute('currency',$map->prices->first()->currency->currency->symbol);
            $map->unsetRelations(['prices','media','meta']);
            return$map;};
        $topProduct= Product::with(['media','meta'])->withCurrentPrice()->whereIn('id',[1,2])->get()->map($getUrl);
        $specialProduct= Product::with(['media','meta'])->withCurrentPrice()->whereIn('id',[3,4])->get()->map($getUrl);
        $mostView= Product::with(['media','meta'])->withCurrentPrice()->whereIn('id',[5,6])->get()->map($getUrl);
        return Inertia::render('Front/LandingPage', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'topProduct'=>$topProduct,
            'specialProduct'=>$specialProduct,
            'mostView'=>$mostView,]);

    }
    public function createAccount(User $user){

        return Inertia::render('Auth/Register',['user'=>$user]);

    }

    public function setAccountPassword(User $user,SetUserPasswordFromEmailRequest $request){
        return $request->persist($user);
    }

    public function privacyPolicy(){
        return Inertia::render('Front/PrivacyPolicy');
    }
    public function productList($type){
        $category=Category::getCategory($type)->get()->first();
        if($category==null)return redirect()->route('error_404');

        $data =[
            'currentCategory'=>$category,
            'productList'=>ProductResource::collection(Product::hasCategories($category->slug,['media','meta'])->paginate())
        ];

        return Inertia::render('Front/ProductList',$data);
    }
    public function productPage($type){
        $product=Product::with(['meta','media'])->where('slug',$type)->first();
        if($product==null)abort(404);

        $data =[
            'product'=>ProductResource::make($product),

        ];

        return Inertia::render('Front/ProductPage',$data);
    }

    public function cart(){
        $data =[];
        return Inertia::render('Front/Cart',$data);
    }

    public function error404(){
        $data =[];
        return Inertia::render('Front/404',$data);
    }
    public function notFound(){
        return redirect()->route('error_404');
    }
}
