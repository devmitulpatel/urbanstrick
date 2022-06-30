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


    private $redirectTo='checkout';
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
          'address_line_1'=>['required'],
          'address_line_2'=>['required'],
          'address_line_3'=>['required'],
          'city'=>['required'],
          'contact_no'=>['required'],
          'state'=>['required'],
          'pincode'=>['required'],
        ];
    }

    public function persist(){
        $input=$this->validated();

        $input['line_1']=$input['address_line_1'];
        $input['line_2']=$input['address_line_2'];
        $input['line_3']=$input['address_line_3'];

        $user = User::create([
            'first_name' => $input['first_name'],
            'last_name' => $input['last_name'],
            'email' => $input['email'],
            //    'password' => Hash::make($request->password),
        ]);
        $user->createAddress($input);
        \auth()->loginUsingId($user->id);
        $mail=Mail::to($user->mail)->send(new UserRequestedToGetAccount($user));
        Auth::login($user);
        $data=[];
        return redirect()->route($this->redirectTo,$data);

    }
}
