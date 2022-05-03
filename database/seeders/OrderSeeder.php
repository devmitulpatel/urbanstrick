<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

     private $data=[];

    public function run()
    {
         $model= {Model}::class;
         $this->defaultSeedData();
         $model::insert($this->data);
    }

    private function defaultSeedData(){
       // $this->data[]=[];

    }
}
