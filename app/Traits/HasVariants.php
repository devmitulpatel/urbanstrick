<?php

namespace App\Traits;

use App\Models\Variantable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Query\JoinClause;
use Illuminate\Support\Collection as CollectionSupport;
use Illuminate\Support\Facades\DB;
use Plank\Metable\Meta;

trait HasVariants
{
    use BaseModelTrait;
    public $indexedVariantsCollection=null;

    public static function bootHasVariants(){


        static::deleted(function (self $model) {
            if (method_exists($model, 'isForceDeleting') && !$model->isForceDeleting()) {
                return;
            }
            $model->purgeVariants();
        });

    }

    public function variants(): MorphMany
    {

        return $this->morphMany($this->getVariantsClassName(), 'variant');
    }
    public function getTableName(): string
    {
         return 'variantables';
    }
    public function getVariantsClassName():string{
         return Variantable::class;
    }

    public function setVariantRelation($relation, $value)
    {
        if (isset($relations['variants'])) {
            $this->indexedVariantsCollection = null;
        }
        return parent::setRelation($relation, $value);
    }
    public function setVariantRelations(array $relations)
    {
        if (isset($relations['variants'])) {
            // clear the indexed cache
            $this->indexedVariantsCollection = null;
        }

        return parent::setRelations($relations);
    }
    private function getVariantCollection()
    {
        // load meta relation if not loaded.
        if (!$this->relationLoaded('variants')) {
            $this->setVariantRelation('variants', $this->variants()->get());
        }
        // reindex by key for quicker lookups if necessary.
        if ($this->indexedVariantsCollection === null) {
            $this->indexedVariantsCollection = $this->variants->keyBy('id');
        }

        return $this->indexedVariantsCollection;
    }
    protected function makeVariant(mixed $product=''): Variantable
    {
        $className = $this->getVariantsClassName();
        $parent_id =$this->getProductId($product);
        $variant = new $className([
            'parent_id'=>$parent_id,
            'created_at'=>now(),
            'updated_at'=>now(),
        ]);
        $variant->variant_type = $this->getMorphClass();
        $variant->variant_id = $this->getKey();

        return $variant;
    }

    public function scopeWhereHasVariants(Builder $q): void
    {
        $q->whereHas(
            'variants',
            function (Builder $q)  {
            }
        );
    }

    public function purgeVariants(): void
    {
        $this->variants()->delete();
        $this->setRelation('variants', $this->makeVariant()->newCollection([]));
    }

    public function getVariantRecord(string $key): ?Variantable
    {
        return $this->getVariantCollection()->get($key);
    }

    public function setVariant($product,$unique=true): void
    {
        if (empty($product)) {
            return;
        }

        $parent_id=$this->getProductId($product);
        if($this->getKey()!=$parent_id) {
            if ($this->hasVariants($parent_id) && $unique) {
                $item = $this->getVariantRecord($parent_id);
                $item->setAttribute('parent_id', $parent_id);
                $item->save();
            } elseif ($this->hasVariants($parent_id)) {
                $item = $this->getVariantRecord($parent_id);
                //dd($item);
                if ($item->getAttribute('parent_id') != $parent_id && !in_array($parent_id,$item->pluck('parent_id')->toArray())) goto CreateNewVariant;
            } else {
                CreateNewVariant:

                $item = $this->makeVariant($parent_id);
                $this->variants()->save($item);
                //$this->variants()[] = $item;
                $this->indexedVariantsCollection[] = $item;
            }
        }
        $this->refresh();
    }
    public function setManyVariants(array $variantDictionary): void{
        if (empty($variantDictionary)) {
            return;
        }


        $prototype = $this->variants()->newModelInstance();
        $builder = DB::table($prototype->getTable());
        $needReload = $this->relationLoaded('variants');
        $notAllowedIds=array_unique(array_merge([$this->id],$this->variants->pluck('id')->toArray()));

        if (method_exists($builder, 'upsert')) {
            // use upsert if available to store all data in a single query
            // requires Laravel >8.0
            $variantsModels = new Collection();
            foreach ($variantDictionary as $key=>$product) {
                $variantsModels[$key] = $this->makeVariant($product);
            }



            $builder->upsert(
                $variantsModels->map(function (Variantable $model) {

                    $array=method_exists($model, 'getAttributesForInsert')
                        ? $model->getAttributesForInsert() // Laravel >= 8.0
                        : $model->getAttributes();
                    $timestampes=[ 'created_at' => now(), 'updated_at' => now()];
                    return array_merge($array,$timestampes);
                })->whereNotIn('parent_id',$notAllowedIds)->toArray(),//TODO here
                ['variant_type', 'variant_id',],
                ['parent_id','created_at','updated_at' ]
            );
        } else {
            // otherwise insert manually.
            // Clear local cache to speed things up since we will reload it afterwards
            $this->unsetRelation('variants');
            foreach ($variantDictionary as $key=>$product) {
                $this->setVariant($product);
            }
    }
      $this->refresh();


}

    public function syncVariants($array): void
    {
        $variant = [];

        if(is_array($array)){

            foreach ($array as $key => $value) {
                $variant[$key] = $this->makeVariant($value);
            }
        }elseif (is_object($array)){
            $x=0;
            foreach ($array as $value) {
                $variant[$x] = $this->makeVariant($value);
                $x++;
            }
        }

        $this->variants()->delete();
        $this->variants()->saveMany($variant);

        // Update cached relationship.
        $collection = $this->makeVariant()->newCollection($variant);
        $this->setRelation('variants', $collection);
    }

    public function hasVariants($parent_id=null): bool
    {

        return (bool)($parent_id==null)?$this->getVariantCollection()->count():$this->getVariantCollection()->where('parent_id',$parent_id)->count();
    }
    private function getProductId($product){

        switch (gettype($product)){
            case 'string':
                goto IntegerCase;
                break;
            case 'integer':
                IntegerCase:
                $parent_id=(integer)$product;
                break;
            case 'object':
                $parent_id=$product->id;
                break;
            case 'array':
                $parent_id=$product['id'];
                break;
            default:
                $parent_id=(integer)$product;
        }

        return $parent_id;

    }

    public function getAllVariants(): CollectionSupport
    {
        return collect([])->merge(
            $this->getVariantCollection()->toBase()->map(function (Variantable $variant) {
                return $variant->getAttribute('parent_id');
            })
        );
    }

    public function variantable(): MorphTo
    {
        return $this->morphTo();
    }


    }
