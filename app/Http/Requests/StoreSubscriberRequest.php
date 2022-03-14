<?php

namespace App\Http\Requests;

use App\Models\Subscriber;
use Illuminate\Foundation\Http\FormRequest;

class StoreSubscriberRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {

        return [
            'email'=>'email:rfc,dns|unique:subscribers'
        ];
    }

    public function presist()
    {
        $input=$this->validated();
        $newModel=Subscriber::create(['email'=>$input['email']]);
        $newModel->save();
        return true;
    }
}
