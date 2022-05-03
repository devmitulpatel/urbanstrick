<?php

namespace App\Http\Requests;

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Mail\UserRequestedToGetAccount;
use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class CreateAndBuyAccountRequest extends FormRequest
{


    private $redirectTo='checkout_proceed_to_payment';
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
          'first_name'=>['required'],
          'last_name'=>['required'],
          'email'=>['required','string','email','max:255','unique:users',],
          'line_1'=>['required'],
          'line_2'=>['required'],
          'line_3'=>['required'],
          'city'=>['required'],
          'state'=>['required'],
        ];
    }

    public function persist(){
        $input=$this->validated();

        $user = User::create([
            //  'name' => $request->name,
            'email' => $input['email'],
            //    'password' => Hash::make($request->password),
        ]);
        $user->createAddress($input);
        $mail=Mail::to($user->mail)->send(new UserRequestedToGetAccount($user));
        Auth::login($user);
        $data=[];

        return redirect()->route($this->redirectTo,$data);

    }
}
