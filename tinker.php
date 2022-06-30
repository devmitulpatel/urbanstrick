<?php

use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\User;
use App\Repositories\StockOprate;
use Faker\Provider\Address;
use Plank\Mediable\Facades\ImageManipulator;
$currentNifty=16200;
$historyData=[
    16000,
    16200,
    16400,
    16300,
    16900,
    16870,
];
$stock=new StockOprate($currentNifty,$historyData);
dd($stock->deriveStrickPoints());






$product=\App\Models\Product::find(1);
$product->removeStock(1);
dd($product->getRequiredgetStock());


$productRepo=\App\Facades\Product::emptyRepo();
$product=\App\Models\Product::first();
$newProductVariant =\App\Facades\Product::emptyRepo()->emptyModel();
$productRepo->setRow($product);
$productRepo->createVariant($newProductVariant,'color','red');
$productRepo->createVariant($newProductVariant,'size','xl');
$productRepo->createVariant($newProductVariant,'size','l');

$productRepo->getRow()->refresh();
dd($productRepo->getRow()->getAllVariants());
$str=rand(11111111111111111,100000000000000000);
$encodeStr=encode($str);
$decodeStr=decode($encodeStr);
$encodeStrLimit=encode_limit($str);
$decodeStrLimit=decode_limit($encodeStrLimit);

$data=[
    'str'=>$str,
    'encoded Str'=>mb_strlen($encodeStr),
    'decoded Str'=>$decodeStr,
    'encoded Str Limit'=>mb_strlen($encodeStrLimit),
    'decoded Str Limit'=>$decodeStrLimit
];
dd($data);


foreach (range(0,100000) as $key ){
    $keyCache=implode(':',['debug','test',$key]);
    Cache::remember($keyCache,12000,function () use ($key) {
        return $key;
    });
}

dd('here');

auth()->loginUsingId(User::first()->id);

$product=\App\Models\Product::with(['wishedByOwn'])->first();
//dd($product->dd());
dd(ProductResource::make($product)->toJson());

$category=Category::where('slug','tshirt')->get()->first();

$product=\App\Models\Product::hasCategories([$category->slug]);
dd($product->get()->toArray());
//$product=\App\Models\Product::all()->take(3);
//User::first()->syncCart($product);
$address=auth()->user()->addresses;
$data= [
'items'=>
    [    0 => [
    "product" => [
    "id" => 6,
      "name" => "Always",
      "slug" => "b7e0efeb-1411-494d-8281-648a9833b17e",
      "status" => "1",
      "created_at" => "2022-04-02T00:50:43.000000Z",
      "updated_at" => "2022-04-02T00:50:43.000000Z",
      "type_of_print" => "Dye Print",
      "type_of_fabric" => "100 % Cotton",
      "color" => "rgb(246,247,247)",
      "url" => "http://urbanstrick.test/app/sample_product/5.png",
      "thumbnail" => "http://urbanstrick.test/app/sample_product/5-thumb-1.png",
      "price" => 799,
      "currency" => "₹",
    ],
    "qt" => 1,
  ],
  1 => [
    "product" =>  [
    "id" => 3,
      "name" => "Urban U",
      "slug" => "e5743bad-987a-4f6f-85f2-c59afe2dd57c",
      "status" => "1",
      "created_at" => "2022-04-02T00:50:40.000000Z",
      "updated_at" => "2022-04-02T00:50:40.000000Z",
      "type_of_print" => "Dye Print",
      "type_of_fabric" => "100 % Cotton",
      "color" => "rgb(246,247,247)",
      "url" => "http://urbanstrick.test/app/sample_product/2.png",
      "thumbnail" => "http://urbanstrick.test/app/sample_product/2-thumb-1.png",
      "price" => 999,
      "currency" => "₹",
    ],
    "qt" => 1
  ]
],
    'address'=>$address->first()
];
dd($address->first());

dd(\App\Facades\Order::create($data,$address->first()));

dd(User::find(1)->syncCartWithRawData($data));


//dd(array_diff([1,2,4],[1,2,3]));

dd(User::first()->cart);

//dd(social_share_link(route('home'),'Demo Title'));
$product=\App\Models\Product::find(1)->load('media')->media->first();
//dd($product);
foreach (\App\Models\Product::with(['media'])->get() as $product){
    ImageManipulator::createImageVariant($product->media->first(), 'thumb');
}
dd('1');
$category=\App\Models\Category::all()->first();
$category=\App\Models\Category::find(1);
//$category->addSubCategory('Tshirt');
//$category->deleteSubCategories(13);
dd($category->parent);


$user=User::first();

$faker=Address::country();

$address=[
    'line_1'=>11,
    'line_2'=>22,
    'line_3'=>33,
    'pincode'=>'112345',
    'city'=>'Surat',
    'state'=>'Gujarat'

];
//dd($user->createAddress($address));
dd($user->getAllAddress()->toArray());
$user->load(['addresses','addresses.address']);

//dd($user->createAddress($address));
