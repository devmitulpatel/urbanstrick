<?php

namespace App\Http\Requests;

use App\Models\Wish;
use Illuminate\Foundation\Http\FormRequest;

class StoreWishRequest extends FormRequest
{

    private $requestModel=Wish::class;
    private $redirectTo='';
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
            'product_id'=>['required']
            //
        ];
    }

    public function persist(){
        $input=$this->validated();
        $input['user_id']=auth()->id();
        $this->redirectTo=get_refer_url();
        if($this->requestModel::where('user_id',$input['user_id'])->where('product_id',$input['product_id'])->count()>0)goto FinallyReturn;
        $newModel= new $this->requestModel ();
        $newModel->fill($input);
        $newModel->save();

        FinallyReturn:
        $data=[];
        return redirect($this->redirectTo);

    }
}
