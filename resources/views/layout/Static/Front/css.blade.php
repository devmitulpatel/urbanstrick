
@php

    $loadCss=[

        'css/bootstrap.min.css',
        'css/animate.css',
        'css/jquery-ui.min.css',
        'css/meanmenu.min.css',
        'css/owl.carousel.css',
        'lib/css/nivo-slider.css',
        'lib/css/preview.css',
        'css/font-awesome.min.css',
        'style.css',
        'css/responsive.css'
    ];
    array_walk($loadCss,function (&$val){
        $val= asset($val).'?'.now();
    });
    $loadCss[]=mix('css/app.css');

@endphp

@foreach($loadCss as $path)
    <link rel="stylesheet" href="{{$path}}">
@endforeach
