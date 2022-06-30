<?php

use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin/dashboard')->as('admin.dashboard.')->group(function(){
    Route::controller(AdminDashboardController::class)->group(function (){
        Route::get('/','index')->name('home');
        Route::get('product','product')->name('product');
        Route::get('order','order')->name('order');
        Route::get('stock','index')->name('stock');
    });

    Route::controller(ProductController::class)->prefix('product')->as('product.')->group(function (){
        Route::get('create','create')->name('create');
    });

});

