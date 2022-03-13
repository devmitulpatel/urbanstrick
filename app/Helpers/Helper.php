<?php


use App\Models\DynamicData;
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
            $foundSlug=$model::where('slug',$type)->first()->getMeta($slug);

            if($foundSlug!=null){
                $hasCatchValue=$foundSlug;
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
