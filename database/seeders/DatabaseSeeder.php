<?php

namespace Database\Seeders;

use App\Models\Product;
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
        $this->call(DynamicDataSeeder::class);
        $this->call(ProductSeeder::class);
    }

    private function createBasicUsers()
    {
        $user=new User();
        $user->email='admin@admin.com';
        $user->password=Hash::make('password');
        $user->name='admin';
        $user->save();

    }
}
