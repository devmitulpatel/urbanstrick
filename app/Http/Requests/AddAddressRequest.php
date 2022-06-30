<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AddAddressRequest extends FormRequest
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
            'line_1'=>['required'],
            'line_2'=>['required'],
            'line_3'=>['required'],
            'pincode'=>['required'],
            'city'=>['required'],
            'state'=>['required'],
        ];
    }

    public function persist($user,$redirectTo='dashboard.home'){
        $input=$this->validated();
        $user->createAddress($input);
        return redirect()->route($redirectTo);
    }
}
