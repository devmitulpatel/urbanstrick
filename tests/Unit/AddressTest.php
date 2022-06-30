<?php

namespace Tests\Unit;

use App\Models\User;
use Faker\Provider\Address;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AddressTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_manage_address()
    {
        $user=User::first();

        $faker=Address::country();

        $address=[
            'line_1'=>$faker,
            'line_2'=>$faker,
            'line_3'=>$faker,
            'pincode'=>Address::postcode(),

        ];
        $user->createAddress($address);

       // dd($user->toArray());

        $this->assertTrue(true);
    }
}
