<?php

use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Http;

if(env('APP_ENV')=='local' || env('APP_DEBUG')){

    Route::get('/migrate',function (){
        $exitCode = Artisan::call('migrate:fresh', [
            '--force'=>true,'--seed'=>true
        ]);
        dd($exitCode);
    });
    Route::get('/storage_link',function (){
        $exitCode = Artisan::call('storage:link');
        dd($exitCode);
    });
    Route::get('/loginas/{id?}',function ($id=1){auth()->loginUsingId($id);});



}
