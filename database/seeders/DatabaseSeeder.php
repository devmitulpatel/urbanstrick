<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Unit;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->createBasicUsers();
        $this->call(CurrencySeeder::class);
        $this->call(CountrySeeder::class);
        //$this->call(UnitSeeder::class);
        $this->call(DynamicDataSeeder::class);
        $this->call(CategorySeeder::class);
        $this->call(ProductSeeder::class);
        $this->call(VariantTypeSeeder::class);

    }

    private function createBasicUsers()
    {
        $user=new User();
        $user->email='admin@admin.com';
        $user->password=Hash::make('password');
        $user->first_name='admin';
        $user->last_name='admin';
        $user->save();
        $user->setCountry('india');
        $user->country->setCurrency(1);
        $address =[
            'line_1'=>'Plot no.530/2',
            'line_2'=>'Sector 3C',
            'line_3'=>'near Ayyapa Temple',
            'pincode'=>'382021',
            'city'=>'Gandhinagar',
            'state'=>'Gujarat',
        ];
        $user->createAddress($address);


        $user=new User();
        $user->email='mitul@admin.com';
        $user->password=Hash::make('password');
        $user->first_name='mitul';
        $user->last_name='patel';
        $user->save();
        $user->setCountry('india');
        $user->country->setCurrency(1);
        $address =[
            'line_1'=>'17',
            'line_2'=>'Divine Bunglows,Behind Rajhans Cinema',
            'line_3'=>'Pragatinagar,Piplod',
            'pincode'=>'395007',
            'city'=>'Surat',
            'state'=>'Gujarat',
        ];
        $user->createAddress($address);

    }
}
