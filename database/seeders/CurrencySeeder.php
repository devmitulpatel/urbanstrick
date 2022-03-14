<?php

namespace Database\Seeders;

use App\Models\Currency;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CurrencySeeder extends Seeder
{
    public function run()
    {
        //
        $model= Currency::class;
        $data=[];

        $this->createBasicData($data);

        $model::insert($data);
    }

    private function createBasicData(array &$data)
    {

        $data[]=normal_seed('Rupee',['symbol'=>'₹']);
        $data[]=normal_seed('US Dollar',['symbol'=>'$']);
        $data[]=normal_seed('Pound',['symbol'=>'£']);

    }
}
