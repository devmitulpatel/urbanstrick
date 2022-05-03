@extends('mail.layout_new')
@section('heading')
    Welcome to <img src="{{asset('img/logo/logo_text.png')}}" style="max-height: 20px"> Community
@endsection
@section('action')

@endsection
@section('content')
<tr>
    <td>
        <p style="text-align: left;text-align: left;
    margin-top: 20px;
    max-width: 80%;
    margin: auto;
display: block;
">
            Dear User,
            <br>
            <br>
            We successfully created Your brand new <a href="{{route('home')}}" style="color: rgba(0,0,0,.8);"><img src="{{asset('/img/logo/logo_text.png')}}" style="max-height: 8px;padding: 0 5px ;"></a> account.
        </p>

        <div class="text" style="padding: 20px 2.5em; text-align: center;">
            <p>  <a href="{{$data['url_for_password_set']}}" class="btn btn-black-outline">Click here To Active Your account</a> </p>
        </div>

        <div style="text-align: left;text-align: left;
             margin-top: 20px;
             max-width: 80%;
             margin: auto;
             display: block;">
            <h4 style="color: rgba(0,0,0,0.5)"><code>Note:</code> Process to active your account</h4>
        <ol>
            <li>CLick on Button "Click here to active Your account"</li>
            <li>Fill field First Name, Last Name & Password and then click on "save"</li>
            <li>Done Your account is activated now,</li>

        </ol>

        </div>

    </td>
</tr>




@endsection
