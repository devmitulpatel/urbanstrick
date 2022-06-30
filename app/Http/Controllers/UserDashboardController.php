<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddAddressRequest;
use App\Http\Requests\UpdateUserDataRequest;
use App\Http\Resources\OrderResource;
use App\Http\Resources\ProductResource;
use App\Http\Resources\UserInertiaResource;
use App\Http\Resources\WishedProductResource;
use App\Models\Order;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class UserDashboardController extends Controller
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
            'is_password_set'=>auth()->user()->is_password_set,
            'wish'=>WishedProductResource::collection(auth()->user()->hasWished)
        ];
        return Inertia::render('Front/Dashboard',$data);
    }

    public function updateUserData(UpdateUserDataRequest $request,User $user){
        return $request->persist($user);
    }
    public function addAddress(AddAddressRequest $request,User $user){
        return $request->persist($user);
    }

    public function orderList(Request $request){
        $oderList=Order::with(['payments','cart','cart.product','cart.meta'])->forUser(auth()->user());
        $data=[
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'is_password_set'=>auth()->user()->is_password_set,
            'orders'=>OrderResource::collection($oderList)->toArray($request)
        ];

        //dd($data);
        return Inertia::render('Front/OrderList',$data);
    }

    public function user(){
        return UserInertiaResource::make(auth()->user());
    }

}
