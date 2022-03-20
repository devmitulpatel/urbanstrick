<?php

use App\Models\User;
use Faker\Provider\Address;

$user=User::first();

$faker=Address::country();

$address=[
    'line_1'=>11,
    'line_2'=>22,
    'line_3'=>33,
    'pincode'=>'112345',
    'city'=>'Surat',
    'state'=>'Gujarat'

];
//dd($user->createAddress($address));
dd($user->getAllAddress()->toArray());
$user->load(['addresses','addresses.address']);

//dd($user->createAddress($address));
