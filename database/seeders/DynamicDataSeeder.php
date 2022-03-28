<?php

namespace Database\Seeders;

use App\Models\DynamicData;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class DynamicDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $model= DynamicData::class;
        $data=[];

        $this->createBasicData($data);

        seed_model($model,$data);
    }

    private function createBasicData(array &$data)
    {
        $data['site'][]=seed_array('main-title','UrbanStrick');
        $data['site'][]=seed_array('site-title', <<<EOF
UrbanStrick | India's Best Fashion Store | Authentic Style | Premium Quality | Truly Indian
EOF);
        $data['site'][]=seed_array('support-email-1','help@urbanstrick.com');
        $data['site'][]=seed_array('support-number-1','+91 1234567890');
        $data['site'][]=seed_array('registered-address-1','44-45, Chandralok Society, Near New Laxmi Sawmill, Vyara, Tapi, Gujarat, India - 394650');
        $data['site'][]=seed_array('display-address-1','Vyara, Tapi, Gujarat, India - 394650');
        $data['sms_gateway'][]=seed_array('api-key','IEnWDHlXuYP5NLw7vJF2b69BijGRUfq8oTyegpdKCxQAOa0c4S5ALjFWOrV3otsgZlXBKQbnS2qHad6m');
        $data['sms_gateway'][]=seed_array('api-key','IEnWDHlXuYP5NLw7vJF2b69BijGRUfq8oTyegpdKCxQAOa0c4S5ALjFWOrV3otsgZlXBKQbnS2qHad6m');
        $data['social'][]=seed_array('instagram','https://www.instagram.com/urbanstrickindia/');
        $data['social'][]=seed_array('facebook','https://www.facebook.com/urbanstrickindia/');
        $data['site'][]=seed_array('up',false);

        $data['site'][]=seed_array('launch-date',new Carbon('2022-04-1'));
        $data['site'][]=seed_array('help-email','help@urbanstrick.com');
        $data['facebook'][]=seed_array('facebook-pixel-id','558778465671730');
        $data['facebook'][]=seed_array('facebook-track-id','ucddxw9xot52zlfjicnbw7d315mtjh');
        $data['google'][]=seed_array('analytic-id','G-WWHRD95S08');
        $data['google'][]=seed_array('google-tag-id','GTM-MBQCQQZ');
        $data['product-setting'][]=seed_array('default-country','india');
        $data['product-setting'][]=seed_array('default-currency',1);
    }
}
