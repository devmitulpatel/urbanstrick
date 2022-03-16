@php

    $loadJs=[

            'js/vendor/modernizr-2.8.3.min.js',
            'js/vendor/jquery-1.12.0.min.js',
            'js/popper.js',
            'js/bootstrap.min.js',
            'js/parallax.min.js',
            'js/jquery.snipe.min.js',
            'js/owl.carousel.min.js',
            'js/jquery.meanmenu.js',
            'js/jquery-ui.min.js',
            'js/wow.min.js',
            'js/ajax-mail.js',
            'lib/js/jquery.nivo.slider.js',
            'lib/home.js',
            'js/plugins.js',
            'js/main.js',

    ];
    array_walk($loadJs,function (&$val){
        $val= asset($val).'?'.now();
    });
    $loadJs[]=mix('js/app.js');

@endphp

@foreach($loadJs as $path)
    <script src="{{$path}}"></script>
@endforeach
