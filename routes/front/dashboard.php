<?php

use Illuminate\Support\Facades\Route;


Route::get('/','index')->name('home');
Route::post('update/{user}','updateUserData')->name('updateUser');
Route::post('add/address/{user}','addAddress')->name('addAddress');
Route::get('orders','orderList')->name('orderList');
Route::post('user','user')->name('userData');
