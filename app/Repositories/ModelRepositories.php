<?php

namespace App\Repositories;


/**
 * @method static create(array $data)
 * @method static update(mixed $model,array $data)
 * @method static delete(mixed $model)
 */
use App\Models\Product;
use Illuminate\Support\Str;



class ModelRepositories
{

    private $rawData=[];
    private $row=null;
    /**
     * @return array
     */
    public function getRawData($key=null): mixed
    {
        return ($key==null)?$this->rawData:$this->rawData[$key];
    }

    /**
     * @param array $rawData
     */
    public function setRawData(array $rawData): void
    {
        $this->rawData = $rawData;
    }

    /**
     * @return null
     */
    public function getRow()
    {
        return $this->row;
    }

    /**
     * @param null $row
     */
    public function setRow($row): void
    {
        $this->row = $row;
    }

    /**
     * @return string
     */
    public function getModel(): string
    {
        return $this->model;
    }

    /**
     * @param string $model
     */
    public function setModel(string $model): void
    {
        $this->model = $model;
    }


    public function all()
    {
        return $this->getModel()::all();
    }
    public function query()
    {
        return $this->getModel()::query();
    }

    public function uniqueColumn($columnName,$value){

        $data=$value;

        while ($this->getModel()::where($columnName,$data)->first()!=null){
            $data=Str::uuid();
        }
       // dd($data);
        return $data;
    }

}
