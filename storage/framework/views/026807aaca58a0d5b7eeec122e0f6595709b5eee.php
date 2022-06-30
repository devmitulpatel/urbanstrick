
<?php

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
    //$loadCss[]=asset(mix('css/app.css'));
    $loadCss[]=asset('css/app.css');

?>

<?php $__currentLoopData = $loadCss; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $path): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <link rel="stylesheet" href="<?php echo e($path); ?>">
<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
<?php /**PATH E:\Projects\Github\urbanstrick\resources\views/layout/Static/Front/css.blade.php ENDPATH**/ ?>