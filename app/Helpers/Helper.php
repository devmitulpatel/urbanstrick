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

if(!function_exists('normal_name_seed')){
    function normal_name_seed($name){
            return ['name'=>$name,'slug'=>Str::slug($name)];
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

    }
}


if(!function_exists('google_tag_head_tag')){
    function google_tag_head_tag($tag=null)
    {

        if($tag==null)$tag=envmix('google','google-tag-id');
        $str=<<<EOF
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','{$tag}');</script>
<!-- End Google Tag Manager -->
EOF;
        return $str;



    }
}
if(!function_exists('google_tag_body_tag')){
    function google_tag_body_tag($tag=null)
    {

        if($tag==null)$tag=envmix('google','google-tag-id');
        $str=<<<EOF
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id={$tag}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
EOF;
        return $str;



    }
}

if(!function_exists('facebook_pixel_tag')){
    function facebook_pixel_tag($tag=null)
    {

        if($tag==null)$tag=envmix('facebook','facebook-pixelD-id');
        $str=<<<EOF
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
 fbq('init', '{$tag}');
fbq('track', 'PageView');
</script>
<noscript>
 <img height="1" width="1"
src="https://www.facebook.com/tr?id={$tag}&ev=PageView
&noscript=1"/>
</noscript>
EOF;
        return $str;



    }
}

if(!function_exists('facebook_pixel_head_tag')){
    function facebook_pixel_head_tag($tag=null){

        $str=
        <<<EOF
        <meta name="facebook-domain-verification" content="{$tag}" />
        EOF;

        return $str;

    }
}
if(!function_exists('google_catcha_tag')){
    function google_catcha_tag($tag=null){

        $str=
        <<<EOF
        <script src="https://www.google.com/recaptcha/enterprise.js?render=6Lc1iPceAAAAABFmmW4hKjrb28MtaMCNxp2Obm6q"></script>
        <script>
        grecaptcha.enterprise.ready(function() {
            grecaptcha.enterprise.execute('6Lc1iPceAAAAABFmmW4hKjrb28MtaMCNxp2Obm6q', {action: 'login'}).then(function(token) {

            });
        });
        </script>
        EOF;

        return $str;

    }
}
