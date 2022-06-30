<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;

class UpdateUserDataRequest extends FormRequest
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
            'first_name'=>['required'],
            'last_name'=>['required'],
            'email'=>['required','email'],
        ];
    }

    public function persist(User $user){
        $input=$this->validated();
        $ifAlreadyExistEmail=User::where('email',$input['email']);
        if($user->email != $input['email']&&$ifAlreadyExistEmail->count()){
            throw  ValidationException::withMessages(['email'=>'Email already used for another account.']);
        }
        $user->fill($input);
        if($user->isDirty())$user->save();
        return redirect()->route('dashboard.home');

    }
}
