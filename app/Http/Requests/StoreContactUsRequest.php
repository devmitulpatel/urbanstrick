<?php

namespace App\Http\Requests;

use App\Models\ContactUs;
use Illuminate\Foundation\Http\FormRequest;

class StoreContactUsRequest extends FormRequest
{

    private $requestModel= ContactUs::class;
    private $redirectTo= 'contact_us';
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
            'name'=>['required'],
            'email'=>['email'],
            'subject'=>['required'],
            'query'=>['required'],
        ];
    }

    public function persist(){
        $input=$this->validated();
        $newModel= new $this->requestModel();
        $newModel->fill($input);
        $newModel->save();
        $data=[];
        return redirect()->route($this->redirectTo,$data);

    }
}
