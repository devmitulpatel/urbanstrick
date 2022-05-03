<?php

namespace App\Http\Requests;

use App\Models\Product;
use Illuminate\Foundation\Http\FormRequest;

class StoreCartableRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'items'=>[]
        ];
    }

    public function persist(){
        $input=$this->validated();
        if (count($input['items'])<1){
            auth()->user()->cart()->delete();
        }
        auth()->user()->syncCartWithRawData($input['items']);

    }
}
