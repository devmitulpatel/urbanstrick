<?php

namespace App\Traits;

use App\Models\Currenciable;

trait HasCurrency
{

    public function currency() :MorphOne
    {
        return $this->morphOne($this->getCurrencyClassName(), $this->getCurrencyRelationName());
    }
    public static function bootHasCurrency(){
        static::deleted(function (self $model) {
            if (method_exists($model, 'isForceDeleting') && !$model->isForceDeleting()) {
                return;
            }
            $model->purgeCurrency();
        });

    }
    public function getCurrencyClassName():string{
        return Currenciable::class;
    }
    private function getCurrencyRelationName(){
        return 'currency';
    }
    private function getCurrencyRelationalName(){
        return 'related_id';
    }

    private function purgeCurrency()
    {

        $this->variants()->delete();
        $this->set($this, $this->makeVariant()->newCollection([]));

    }
}
