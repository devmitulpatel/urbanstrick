<?php

namespace App\Repositories;

use App\Models\Product;
use App\Models\Unit;
use Illuminate\Support\Str;

class UnitRepository extends ModelRepositories implements ModelRepositoriesInterface
{

    public string $model= Unit::class;

    public function create(array $data)
    {
        $this->setRawData($data);
        $this->createUnit();
        return $this->getRow();
    }

    private function createUnit(){
        $data=[
            'name'=>$this->getRawData('name'),
            'slug'=>$this->uniqueColumn('slug',Str::uuid()),
        ];

        $model=new ($this->getModel())();
        $model->fill($data);
        $this->setRow($model->save());


    }

    public function update(mixed $model, array $data)
    {
        // TODO: Implement update() method.
    }

    public function delete(mixed $model)
    {
        // TODO: Implement delete() method.
    }
}
