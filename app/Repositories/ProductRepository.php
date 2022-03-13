<?php

namespace App\Repositories;

use App\Models\Product;
use http\Exception\BadQueryStringException;
use Illuminate\Support\Facades\Facade;
use Illuminate\Support\Str;
use PHPUnit\Framework\MockObject\DuplicateMethodException;

class ProductRepository extends ModelRepositories implements ModelRepositoriesInterface
{
    public string $model= Product::class;


    private $product=['name','slug'];
    private $price=['price',''];


    public function create(array $data): Product
    {
        $this->setRawData($data);
        $this->createProduct();
        $this->createPriceMeta();
        return $this->getRow();
    }

    private function createPriceMeta():void{
        $data=$this->getRawData();
        $price=[
            'price'=>$data['price'],
            'currency'=>$data['currency']
        ];
        $this->getRow()->setManyMeta($price);

    }

    private function createProduct() :void
    {
        $data=[
            'name'=>$this->getRawData('name'),
            //'slug'=>Str::slug($this->getRawData()['name']),
            'slug'=>Str::uuid(),
        ];

        $model=new ($this->getModel()) ();
        //$foundRow=$model->where('slug',$data['slug']);
        while ($this->getModel()::where('slug',$data['slug'])->first()!=null){

                 //$data['slug']=implode('-',[$data['slug'],$this->getModel()::where('slug',$data['slug'])->count(),Str::random()]);
                 $data['slug']=Str::uuid();
        }
        $model->fill($data);
        $model->save();
        $this->setRow($model);

    }

    public function update(mixed $model,array $data){
        $this->setRawData($data);
        if(is_object($model) && get_class($model)==$this->getModel()){
            $this->setRow($model);
        }elseif (is_string($model) || is_integer($model)){
            $this->setRow($this->getModel()::whereKey($model)->first());
                if($this->getRow()==null)throw new \Exception('No Product Found');
        }

        $this->updateProduct();
        $this->updatePriceMeta();
        if($this->getRow()->isDirty())$this->getRow()->save();
        return $this->getRow();
    }

    private function updateProduct()
    {
        $data =[
            'name'=>$this->getRawData('name'),

        ];
        $this->getRow()->fill($data);
    }

    private function updatePriceMeta()
    {
        $data =[
            'price'=>$this->getRawData('price'),
            'currency'=>$this->getRawData('currency'),
        ];
        $this->getRow()->setManyMeta($data);

    }

    public function delete(mixed $model){

        if(is_object($model) && get_class($model)==$this->getModel()){
            $this->setRow($model);
        }elseif (is_string($model) || is_integer($model)){
            $this->setRow($this->getModel()::whereKey($model)->first());
            if($this->getRow()==null)throw new \Exception('No Product Found');
        }

        return $this->getRow()->delete();
    }


}
