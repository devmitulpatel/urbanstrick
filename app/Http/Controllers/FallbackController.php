<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FallbackController extends Controller
{
    public function underConstruction(){
        $options=[
            'launch_date'=>envmix('site','launch-date')
        ];
        return view('UnderConstruction',$options);
    }
}
