<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Hash;

class SetUserPasswordFromEmailRequest extends FormRequest
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
            'password'=>['required','confirmed'],
            'first_name'=>['required'],
            'last_name'=>['required'],

            //
        ];
    }

    public function persist($user){
        $input=$this->validated();

        $input['password']=Hash::make($input['password']);
        $user->fill($input);
        if($user->isDirty())$user->save();
        return redirect()->route('dashboard.home');

    }

}
