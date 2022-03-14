<?php

namespace Database\Seeders;

use App\Models\Country;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CountrySeeder extends Seeder
{
    public function run()
    {
        //
        $model= Country::class;
        $data=[];

        $this->createBasicData($data);

        $model::insert($data);
    }

    private function createBasicData(array &$data)
    {

        $data[]=normal_seed('India',['short_name'=>'ind']);
        $data[]=normal_seed('United States of America',['short_name'=>'usa']);
        $data[]=normal_seed('United Kingdom',['short_name'=>'uk']);

    }
}
