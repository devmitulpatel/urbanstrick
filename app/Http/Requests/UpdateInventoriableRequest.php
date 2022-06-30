<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateInventoriableRequest extends FormRequest
{

    private $requestModel={{ model_class }};
    private $redirectTo={{ route_name }};
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
        ];
    }

    public function persist(){
        $input=$this->validated();
        $newModel= new $this->requestModel ();
        $newModel->fill($input);
        $newModel->save();
        $data=[];
        return redirect()->route($this->redirectTo,$data);

    }
}
