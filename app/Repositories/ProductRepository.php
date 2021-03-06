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
    private $price=['price'];
    private $types=['type_of_fabric','type_of_print'];
    private $color=['color'];
    private $size=['size'];


    private function createExtraMetas(){
        $data=$this->getRawData();
        $allowedKeys=array_merge($this->types,$this->color,$this->size);
        $metas=[];
        foreach ($allowedKeys as $key){
            if(array_key_exists($key,$data))$metas[$key]=$data[$key];
        }
        if(count($metas)){
            $this->getRow()->setManyMeta($metas);
        }
    }
    public function create(array $data,$getClass=false): Product|self
    {

        $this->setRawData($data);
        $this->createProduct();
        $this->createPrice();
        $this->createExtraMetas();
        if($getClass)return $this;
        return $this->getRow();
    }

    private function createPrice():void{
        $data=$this->getRawData();
        $currency=(array_key_exists('currency',$data))?$data['currency']:envmix('product-setting','default-currency');
        $country=(array_key_exists('country',$data))?$data['country']:envmix('product-setting','default-country');


        $this->getRow()->setPrice($data['price'],$country,$currency);

        $this->getRow()->setCountry($country);
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
        $this->updatePrice();
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

    private function updatePrice()
    {
     //   dd("here");
//        $data =[
//            'price'=>$this->getRawData('price'),
//            'currency'=>$this->getRawData('currency'),
//        ];


        $this->getRow()->updatePrice($this->getRawData('price'),'india',$this->getRawData('currency'));
        //$this->getRow()->setManyMeta($data);

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

    public function createVariant($type,$typeValue){
        $model=$this;
        $data=$this->getRow()->toArray();
        if(array_key_exists('country',$data))unset($data['country']);
        if(array_key_exists('created_at',$data))unset($data['created_at']);
        if(array_key_exists('updated_at',$data))unset($data['updated_at']);
        if(array_key_exists('id',$data))unset($data['id']);
        if(array_key_exists('variants',$data))unset($data['variants']);
        $variantCount=$this->getRow()->getAllVariants()->count();
        $data['slug']=$this->getUniqueSlug($this->getRow()->slug,$variantCount+1);
        $data['price']=$model->getRawData('price');
        $data['image']=$model->getRawData('image');
        $data['type_of_print']=$model->getRawData('type_of_print');
        $data['type_of_fabric']=$model->getRawData('type_of_fabric');
        $data['color']=$model->getRawData('color');
        $model=$model->getRow();
        return $this->getRow()->makeVariant($model,$type,$typeValue);

    }

    public function addCategory($categories){
        $categories=(array)$categories;
        Product:
        $this->getRow()->attachCategory($categories);
    }

    public function getUniqueSlug($realted,$count=0){
        $rawSlug=$realted;
        $slug=$realted;
        $rawCount=$count;
        while($this->query()->where('slug',$slug)->count()){
         //$slug=Str::uuid();
            if($rawCount<$count){
                $slug=implode('-',[$rawSlug,$count]);
            }else{
                $slug=implode('-',[$slug,$count]);
            }

         $count++;
        }
        return $slug;
    }

}
