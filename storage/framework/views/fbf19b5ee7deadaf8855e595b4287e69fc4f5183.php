<?php

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
            //'checkout.js',
            'js/main.js',


    ];
    array_walk($loadJs,function (&$val){
        $val= asset($val).'?'.now();
    });
  //  $loadJs[]=asset(mix('js/app.js')).'?'.now();
    //$loadJs[]=asset('js/ssr.js');
    $loadJs[]=asset('js/app.js');

?>

<?php $__currentLoopData = $loadJs; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $path): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <script src="<?php echo e($path); ?>"></script>
<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

<?php echo app('Tightenco\Ziggy\BladeRouteGenerator')->generate(); ?>
<?php /**PATH E:\Projects\Github\urbanstrick\resources\views/layout/Static/Front/js.blade.php ENDPATH**/ ?>