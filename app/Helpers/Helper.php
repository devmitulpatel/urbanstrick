<?php


use App\Enum\RowStatus;
use App\Http\Resources\ProductResource;
use App\Models\DynamicData;
use App\Models\Product;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;

//use Jorenvh\Share\Share;

if (!function_exists('enum')) {
    function enum($class)
    {
        $cases = $class::cases();
        return collect($cases)->pluck('value')->toArray();
    }
}
if (!function_exists('seed_model')) {

    function seed_model($model, $data): void
    {


        foreach ($data as $master => $d) {
            $type = $model::create(['name' => Str::slug($master), 'slug' => Str::slug($master)]);
            $typeValues = [];
            foreach ($d as $value) {
                $typeValues[$value['slug']] = $value['value'];
            }
            // dd($typeValues);
            $type->setManyMeta($typeValues);
        }

    }

}

if (!function_exists('seed_array')) {
    function seed_array($name, $value = null)
    {
        return [
            'name' => $name,
            'slug' => Str::slug($name),
            'value' => $value ?? '',
        ];
    }
}

if (!function_exists('envmix')) {
    function envmix($type, $slug, $model = DynamicData::class)
    {
        $rawSlug = $slug;
        $slug = Str::slug($slug);
        $keyName = implode('-', [__FUNCTION__, $type, $slug]);
        $seconds = 1200;
        $hasCatchValue = cache($keyName);

        if ($hasCatchValue == null) {

            $foundSlug = $model::where('slug', $type)->first();

            if ($foundSlug != null) {
                $hasCatchValue = $foundSlug->getMeta($slug);
            } else {
                $hasCatchValue = env($rawSlug, '');
            }

            $cache = cache([$keyName => $hasCatchValue], $seconds);

        }

        return $hasCatchValue;


    }
}

if (!function_exists('able_model_schema')) {
    function able_model_schema(Blueprint $table, $related, $options = [])
    {
        $type = implode('_', [$related, 'type']);

        $related = implode('_', [$related, 'id']);

        $table->id();
        $table->unsignedBigInteger($related);
        $table->string($type);


        if (array_key_exists('foreign', $options)) $table->unsignedBigInteger($options['foreign']);
        if (array_key_exists('pivot', $options)) foreach ($options['pivot'] as $pivotColumn) $table->$pivotColumn['type']($pivotColumn['name'])->nullable();

        $table->boolean('status')->default(1);
        $table->timestamps();
    }
}

if (!function_exists('normal_name_table')) {
    function normal_name_table($table)
    {
        $table->id();
        $table->string('name');
        $table->string('slug');
        $table->enum('status', enum(RowStatus::class))->default(RowStatus::Active->value);
        $table->timestamps();
    }
}

if (!function_exists('normal_name_seed')) {
    function normal_name_seed($name)
    {
        return ['name' => $name, 'slug' => Str::slug($name)];
    }
}

if (!function_exists('normal_seed')) {
    function normal_seed($name, $extra = [])
    {
        $array = ['name' => $name, 'slug' => Str::slug($name)];
        if (array_key_exists('name', $extra)) unset($extra['name']);
        if (array_key_exists('slug', $extra)) unset($extra['slug']);
        $extra['created_at'] = now();
        $extra['updated_at'] = now();
        // dd(array_merge($array,$extra));
        return array_merge($array, $extra);
    }
}
if (!function_exists('global_site_tag')) {
    function global_site_tag($tag = null)
    {

        if ($tag == null) $tag = envmix('google', 'analytic-id');
        $str = <<<EOF
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


if (!function_exists('google_tag_head_tag')) {
    function google_tag_head_tag($tag = null)
    {

        if ($tag == null) $tag = envmix('google', 'google-tag-id');
        $str = <<<EOF
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
if (!function_exists('google_tag_body_tag')) {
    function google_tag_body_tag($tag = null)
    {

        if ($tag == null) $tag = envmix('google', 'google-tag-id');
        $str = <<<EOF
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id={$tag}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
EOF;
        return $str;


    }
}

if (!function_exists('facebook_pixel_tag')) {
    function facebook_pixel_tag($tag = null)
    {

        if ($tag == null) $tag = envmix('facebook', 'facebook-pixelD-id');
        $str = <<<EOF
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

if (!function_exists('facebook_pixel_head_tag')) {
    function facebook_pixel_head_tag($tag = null)
    {

        $str =
            <<<EOF
        <meta name="facebook-domain-verification" content="{$tag}" />
        EOF;

        return $str;

    }
}
if (!function_exists('google_catcha_tag')) {
    function google_catcha_tag($tag = null)
    {

        $str =
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
if (!function_exists('product_map')) {
    function product_map(Product|ProductResource $map)
    {
            if(get_class($map)==ProductResource::class){
                $map=$map->resource;
            }
            $media = $map->media->first();
            $price = $map->prices->first();
            $meta = $map->meta;
            $wishedByOwn = $map->wishedByOwn;
            $slug=$map->slug;
            $name=$map->name;



        $key = implode(':', ['currency_symbol']);
        $currency = (Cache::has($key)) ?
            Cache::remember($key, 1200, function () use ($price) {
                return $price->currency->currency;
            }) : $price->currency->currency;

        if($currency==null)dd($price->currency);

        $map->setAttribute('type_of_print', $meta->where('key', 'type_of_print')->first()->value);
        $map->setAttribute('type_of_fabric', $map->getMeta('type_of_fabric'));
        $map->setAttribute('color', $map->getMeta('color'));
        $map->setAttribute('url', makeSureHttps($media?->getUrl()));
        $map->setAttribute('thumbnail', makeSureHttps($media?->findVariant('thumb')->getUrl()));
        $map->setAttribute('price', $price->price);
        $map->setAttribute('currency', $currency->symbol);
        $map->setAttribute('wished', $wishedByOwn->count() > 0);
        $map->setAttribute('wished_id', $wishedByOwn->first()?->id);
        $map->setAttribute('share', social_share_link(route('product_page', ['name' =>$slug ]), implode(' ', ['Buy', $name, 'only on UrbanStrick'])));
        $map->unsetRelations(['prices', 'media', 'meta']);


        return $map;

    }
}

if (!function_exists('makeSureHttps')) {
    function makeSureHttps($url){
        if(!preg_match('/https:\/\//i',$url))$url=preg_replace('/http:\/\//','https://',$url);
        return$url;
    }
}
if (!function_exists('randomStr')) {
    function randomStr($count = 4, $type = 1, $lvl = 1, $preFix = [], $dv = '_'): string
    {
        $randstring = [];
        //  dd($preFix);
        switch ($type) {
            case'patern':
                $characters = '456';
                break;

            case '1':
                $characters = '123456789';
                break;

            case '2':
                $characters = 'abcdefghijklmnopqrstuvwxyz';
                break;

            case '3':
                $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                break;

            case '4':
                $characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                break;


            case '5':
                $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                break;

            case '6':
                $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                break;

            default:
                $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                break;
        }

        if ($lvl > 1) {
            $fCode = [];
            for ($i2 = 0; $i2 <= $lvl; $i2++) {
                $randstring = [];
                for ($i = 0; $i < $count; $i++) {
                    $randstring[] = $characters[rand(0, strlen($characters) - 1)];
                }

                $fCode[] = implode('', $randstring);


            }
            //dd($lvl);
            //dd([implode($dv,$fCode)]);
            $randstring = [implode($dv, $fCode)];
        } else {
            for ($i = 0; $i < $count; $i++) {
                $randstring[] = $characters[rand(0, strlen($characters) - 1)];
            }
        }
        $randstring = implode('', $randstring);

        if (count($preFix) > 0) {
            //    dd($preFix);
            $preFix = implode($dv, $preFix);
            $randstring = implode($dv, [$preFix, $randstring]);
        }

        return $randstring;
    }
}
if (!function_exists('encode')) {
    function encode($str): string
    {
        return encrypt($str);
    }
}
if (!function_exists('decode')) {
    function decode(?string $str): string {
        return decrypt ($str);
    }
}
if (!function_exists('encode_limit')) {

    function encode_limit($str = '', $min = 30, $zone = 'Asia/Kolkata', $salt = "|\/|")
    {
        $enStr = '';
        $enStr = (strlen($str) > 0) ? $str : '';
        $now = Carbon::now($zone);
        $timeStamp = ($now->addMinutes($min)->timestamp);
        $min = encode($min * 60000);
        //   $timeStamp=$now->timestamp;
        $enStr = encode($enStr);
        $enStr = implode($salt, [$enStr, $timeStamp, $min]);
        return encode($enStr);
    }
}
if (!function_exists('decode_limit')) {

    function decode_limit($str='',$min=30,$zone='Asia/Kolkata',$salt="|\/|")
    {
        $deStr='';

        $deStr=(strlen($str)>0)?$str:'';
        $deStr=decode($deStr);
        $exStr=explode($salt,$deStr);

        if(count($exStr)==3){
            $min=(string)end($exStr);
            $min=decode($min) /60000;
        }else{
            return FALSE;
        }


        $timeStamp=$exStr[count($exStr)-2];

        $now=Carbon::now($zone);
        $checkNow=Carbon::now($zone);
        $checkNow=$checkNow->setTimestamp($timeStamp);

        if(!$now->diffInMinutes($checkNow)) return '';
        return decode(reset($exStr));
    }
}


if (!function_exists('get_refer_url')) {
    function get_refer_url(){
        $request=request();
        if($request->hasHeader('referer')){
            return $request->header('referer');
        }
        return url('/');
    }
}
if (!function_exists('social_share_link')) {
    function social_share_link($url = '', $title = '')
    {

        return Share::page(
            $url,
            $title,
        )
            //  ->instagram()
            ->facebook()
            ->twitter()
            ->linkedin()
            // ->telegram()
            ->whatsapp()
            ->reddit()
            ->getRawLinks();


    }
}
if (!function_exists('get_file_name')) {
    function get_file_name($path,$seprator='/')
    {

        $explode=explode($seprator,$path);
        $fileName=$explode[count($explode)-1];
        $explodeFileName=explode('.',$fileName);
        return $explodeFileName[0];

    }
}
if (!function_exists('load_routes')) {
    function load_routes($path,$controllers=[],$auto=true)
    {
        $basePath=['routes'];
        $basePath[]=$path;
        $files=\Illuminate\Support\Facades\Storage::disk('root')->allFiles(implode('/',$basePath));
        foreach ($files as $file){
            $filename=Str::slug(get_file_name($file));
            $name=implode('.',[$filename,'']);
            $routes=Route::prefix($filename)->as($name);
            if(array_key_exists($filename,$controllers))$routes->controller($controllers[$filename]);
            $routes->group(function () use ($file) {
                require base_path($file);
            });

        }
    }
}


