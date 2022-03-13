<?php

namespace App\Repositories;

interface ModelRepositoriesInterface
{
    public function create(array $data);
    public function update(mixed $model ,array $data);
    public function delete(mixed $model);
    public function all();

}
