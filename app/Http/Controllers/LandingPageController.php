<?php

namespace App\Http\Controllers;

use App\Http\Requests\SetUserPasswordFromEmailRequest;
use App\Http\Resources\CategoriesCountResource;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class LandingPageController extends Controller
{


    public function index(){


        $allProducts=Product::loadWithBasics()->withCurrentPrice()->get();
        $topProduct= $allProducts->whereIn('id',[1,2])->map(fn($ar)=>product_map($ar));
        $specialProduct= $allProducts->whereIn('id',[3,4])->map(fn($ar)=>product_map($ar));
        $mostView= $allProducts->whereIn('id',[5,6])->map(fn($ar)=>product_map($ar)   );
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
    public function aboutUs(){
        return Inertia::render('Front/AboutUs');
    }
    public function productList(Category $type){
        $category=$type;

        $categoryCount=Cache::remember('category_count',1200,function (){
            return Category::query()
                ->with(['parent','products'])
                ->parentOnly()
                ->withCount(['products'])->get();
        }) ;

        $productList=$category->products;
        $data =[
            'categoryCount'=>CategoriesCountResource::collection($categoryCount),
            'currentCategory'=>$category,
            'productList'=>ProductResource::collection($productList)
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
    }  public function contactUs(){
    $data =[];
    return Inertia::render('Front/ContactUs',$data);
    }
}
