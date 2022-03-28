<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddAddressRequest;
use App\Http\Requests\UpdateUserDataRequest;
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
            'is_password_set'=>auth()->user()->is_password_set

        ];
        return Inertia::render('Front/Dashboard',$data);
    }

    public function updateUserData(UpdateUserDataRequest $request,User $user){
        return $request->persist($user);
    }
    public function addAddress(AddAddressRequest $request,User $user){
        return $request->persist($user);
    }

}
