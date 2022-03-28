<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],
            'site'=>[
                'customer_care_email_1'=>envmix('site','support-email_1'),
                'customer_care_number_1'=>envmix('site','support-number-1'),
                'address'=>envmix('site','display-address-1'),
                'social'=>[
                    'instagram'=>envmix('social','instagram'),
                    'facebook'=>envmix('social','facebook')
                ]
            ]
        ]);
    }

    public function rootView(Request $request)
    {

        ;
        if (Str::startsWith($request->route()->getPrefix(),'test/admin')) {
            return 'layout.BackRoot';
        }
        return 'layout.FrontRoot';

       // return parent::rootView($request);
    }
}
