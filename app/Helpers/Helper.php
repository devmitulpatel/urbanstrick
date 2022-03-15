<?php


use App\Enum\RowStatus;
use App\Models\DynamicData;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Str;

if(!function_exists('enum')){
    function enum($class){
        $cases=$class::cases();
        return collect($cases)->pluck('value')->toArray();
    }
}
if(!function_exists('seed_model')){

    function seed_model($model,$data):void{


        foreach ($data as $master=>$d){
            $type=$model::create(['name'=>Str::slug($master),'slug'=>Str::slug($master)]);
            $typeValues=[];
            foreach ($d as $value){
                $typeValues[$value['slug']]=$value['value'];
            }
           // dd($typeValues);
            $type->setManyMeta($typeValues);
        }

    }

}

if(!function_exists('seed_array')){
    function seed_array($name,$value=null){
        return [
            'name'=>$name,
            'slug'=>Str::slug($name),
            'value'=>$value??'',
        ];
    }
}

if(!function_exists('envmix')){
    function envmix($type,$slug,$model=DynamicData::class){
        $rawSlug=$slug;
        $slug=Str::slug($slug);
        $keyName=implode('-',[__FUNCTION__,$type,$slug]);
        $seconds=2;
        $hasCatchValue=cache($keyName);
        if($hasCatchValue==null){
            $foundSlug=$model::where('slug',$type)->first();

            if($foundSlug!=null){
                $hasCatchValue=$foundSlug->getMeta($slug);
            }else{
                $hasCatchValue=env($rawSlug,'');
            }
            if($hasCatchValue!=null){

                cache([$keyName => $hasCatchValue], $seconds);
            }
        }

        return $hasCatchValue;



    }
}

if(!function_exists('able_model_schema')){
    function able_model_schema(Blueprint $table, $related,$options=[]){
        $type=implode('_',[$related,'type']);

        $related=implode('_',[$related,'id']);

        $table->id();
        $table->unsignedBigInteger($related);
        $table->string($type);
        if(array_key_exists('foreign',$options))$table->unsignedBigInteger($options['foreign']);
        if(array_key_exists('pivot',$options))foreach ($options['pivot'] as $pivotColumn)$table->$pivotColumn['type']($pivotColumn['name'])->nullable();

        $table->boolean('status')->default(1);
        $table->timestamps();
    }
}

if(!function_exists('normal_name_table')){
    function normal_name_table($table){
        $table->id();
        $table->string('name');
        $table->string('slug');
        $table->enum('status',enum(RowStatus::class))->default(RowStatus::Active->value);
        $table->timestamps();
    }
}
if(!function_exists('normal_seed')){
    function normal_seed($name,$extra=[]){
        $array=['name'=>$name,'slug'=>Str::slug($name)];
        if(array_key_exists('name',$extra))unset($extra['name']);
        if(array_key_exists('slug',$extra))unset($extra['slug']);
        $extra['created_at']=now();
        $extra['updated_at']=now();
       // dd(array_merge($array,$extra));
        return array_merge($array,$extra);
    }
}
if(!function_exists('global_site_tag')){
    function global_site_tag($tag=null){

        if($tag==null)$tag=envmix('google','analytic-id');
        $str=<<<EOF
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id={$tag}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '{$tag}');
</script>
EOF;

        return $str;

    }}
