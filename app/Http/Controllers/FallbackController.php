<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FallbackController extends Controller
{
    public function comingSoon(){

        $options=[
            'launch_date'=>envmix('site','launch-date')
        ];
        return view('ComingSoon',$options);
    }


}
