<script setup>
import FrontEndLayout from '@/Layouts/FrontEnd.vue';
import { Head } from '@inertiajs/inertia-vue3';
import carousel from 'vue-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';
import '@/Lib/nivoslider'
import '@/Lib/nivo-slider.css';
import '@/Lib/preview.css';
import {onBeforeMount, onMounted, ref} from "vue";

const currentProduct = ref({});

const setCurrentProduct=(product)=>{
    currentProduct.value=null;
    currentProduct.value=product;
}

const getUpperPrice=(price)=>{
    return(price==799)?1099:1299;
}

const getDiscountPercentage=(price)=>{
    return(price==799)?27:23;
}


onMounted(()=>{
    // $('.landing-slider').owlCarousel({
    //     items:1,
    //     center:true,
    //    // autoWidth:true,
    //     loop:true,
    //     URLhashListener:true,
    //     nav:false,
    //     slideBy:true,
    //     lazyLoad:true,
    //     autoplay:false,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         576: {
    //             items: 1
    //         },
    //         768: {
    //             items: 1
    //         },
    //         992: {
    //             items: 1
    //         },
    //         1200: {
    //             items: 1
    //         }
    //     },
    //     dots:false
    //
    // });
    $('#jquery-slider-demo').nivoSlider(
        {
            lazyLoad:true,
            autoplay:true,
            loop:true,
            effect: 'random',
            slices: 35,
            boxCols: 12,
            boxRows: 12,
            animSpeed: 500,
            pauseTime: 500,
            startSlide: 0,
            directionNav: true,
            controlNavThumbs: true,
            pauseOnHover: true,
            manualAdvance: true}
    );
    $('#ensign-nivoslider').nivoSlider({
        effect: 'random',
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        animSpeed: 500,
        pauseTime: 5000,
        startSlide: 0,
        directionNav: true,
        controlNavThumbs: false,
        pauseOnHover: false,
        manualAdvance: true
    });
    $('#ensign-nivoslider-2').nivoSlider({
        effect: 'random',
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        animSpeed: 500,
        pauseTime: 5000,
        startSlide: 0,
        directionNav: true,
        controlNavThumbs: false,
        pauseOnHover: true,
        manualAdvance: true
    });

});

const props = defineProps({
    topProduct:Object,
    specialProduct:Object,
    mostView:Object,
})

const vfOptions=ref({
    autoplay: true
});
const vfImages=ref([ 'img/slider/bg_slider1.jpg', 'img/slider/bg_slider22.jpg' ]);
const vfTransitions=ref([ 'fade', 'cube', 'book', 'wave' ]);
const vfCaptions=ref(['Caption for image 1','Caption for image 2','Caption for image 3',]);

</script>

<template>
    <Head title="UrbanStrick | India's Best Fashion Store | Authentic Style | Premium Quality | Truly Indian" />
    <div id="top"></div>
<FrontEndLayout>


    <section class="slider-main-area home-3 bg-gray">
        <div class="main-slider an-si">
            <div class="bend niceties preview-2">

                <div class="slider-wrapper theme-default">
                <div id="jquery-slider-demo" class="nivoSlider">

                    <img title="#slide-title-1" src="img/slider/slider-1.jpg" alt="The slide 1" />

                    <img title="#slide-title-2" src="img/slider/slider-2.jpg" alt="The slide 2" />

                    <img title="#slide-title-3" src="img/slider/slider-3.jpg" alt="The slide 3" data-transition="slideInLeft" />


                </div>
                    <div id="slide-title-1" class="nivo-html-caption t-cn Builder">
                        <div class="t-cn Builder">
                        <div class="slide-all2">
                            <!-- layer 1 -->
                            <div class="layer-1">
                                <h2 class="title5">new collection</h2>
                            </div>
                            <!-- layer 2 -->
                            <div class="layer-2">
                                <h2 class="title6">Men’s Fashion</h2>
                            </div>
                            <!-- layer 2 -->
                            <div class="layer-2">
                                <p class="title0">Save Up To 40% Off</p>
                            </div>
                            <!-- layer 3 -->
                            <div class="layer-3">
                                <a class="min1" href="#">Shop Now</a>
                            </div>
                        </div>
                        </div>

                    </div>
                    <div id="slide-title-2" class="nivo-html-caption t-cn Builder">
                        <div class="t-cn Builder">
                        <div class="slide-all slide2">
                            <!-- layer 1 -->
                            <div class="layer-1">
                                <h2 class="title5">new collection</h2>
                            </div>
                            <!-- layer 2 -->
                            <div class="layer-2">
                                <h2 class="title6">Women’s Fashion</h2>
                            </div>
                            <!-- layer 2 -->
                            <div class="layer-2">
                                <p class="title0">Save Up To 40% Off</p>
                            </div>
                            <!-- layer 3 -->
                            <div class="layer-3">
                                <a class="min1" href="#">Shop Now</a>
                            </div>
                        </div>

                        </div>

                    </div>
                    <div id="slide-title-3" class="nivo-html-caption">

                        <div class="t-cn Builder">

                            <div class="slide-all slide2">
                                <!-- layer 1 -->
                                <div class="layer-1">
                                    <h2 class="title5">new collection</h2>
                                </div>
                                <!-- layer 2 -->
                                <div class="layer-2">
                                    <h2 class="title6">Women’s Fashion</h2>
                                </div>
                                <!-- layer 2 -->
                                <div class="layer-2">
                                    <p class="title0">Save Up To 40% Off</p>
                                </div>
                                <!-- layer 3 -->
                                <div class="layer-3">
                                    <a class="min1" href="#">Shop Now</a>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>




            </div>
        </div>
    </section>
    <section class="design-area home-4">
        <div class="container">
            <div class="bottom-design res">
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-12">
                        <div class="tb-info-box">
                            <div class="tb-image">
                                <img alt="" src="img/banner/t_1.png">
                            </div>
                            <div class="tb-content">
                                <h5>NEW DESIGN</h5>
                                <h3>big dream big act</h3>
                                <h6><a href="#">GET IT NOW</a></h6>
                            </div>
                        </div>
                        <div class="tb-info-box bt-no">
                            <div class="tb-content">
                                <h5>NEW DESIGN</h5>
                                <h3>ALWAYS STRONG</h3>
                                <h6><a href="#">GET IT NOW</a></h6>
                            </div>
                            <div class="tb-image tb-right">
                                <img alt="" src="img/banner/t_2.png">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-12">
                        <div class="ro-info-box-wrap tpl3 fs">
                            <div class="tb-image">
                                <img alt="" src="img/banner/t_3.png">
                            </div>
                            <div class="tb-content">
                                <div class="tb-content-inner">
                                    <h5>T-shirt FASHION</h5>
                                    <h3>MID SEASON SALE</h3>
                                    <h6>
                                        <a href="#">VIEW COLLECTION</a>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="features-tab indicator-style2">
                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" class="vc_tta-tab"><a href="#home" aria-controls="home" role="tab" data-bs-toggle="tab">BESTSELLER</a></li>
                            <li class="vc_tta-tab " role="presentation"><a class="active" href="#profile" aria-controls="profile" role="tab" data-bs-toggle="tab">NEW PRODUCTS</a></li>
                            <li class="vc_tta-tab" role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-bs-toggle="tab">MUST HAVE</a></li>
                        </ul>
                        <!-- Tab panes -->
                        <div class="tab-content jump">
                            <div role="tabpanel" class="tab-pane" id="home">
                                <div class="features-curosel2 indicator-style2 owl-carousel">
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <img alt="" src="img/product/1.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Leather Bag</a>
                                                </div>
                                                <div class="tb-product-wrap-price-rating">
                                                    <div class="tb-product-price font-noraure-3">
                                                        <span class="amount">$180.00</span>
                                                        <span class="amount2 ana">$170.00</span>
                                                    </div>
                                                </div>
                                                <div class="last-cart l-mrgn">
                                                    <a class="las3" href="#"><i class="fa fa-heart"></i></a>
                                                    <a class="las4" href="#">Add To Cart</a>
                                                    <a class="las3 las7" href="#"><i class="fa fa-retweet"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <span class="onsale two">Sale!</span>
                                        <img alt="" src="img/product/9.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Glasses</a>
                                                </div>
                                                <div class="tb-product-wrap-price-rating">
                                                    <div class="tb-product-price font-noraure-3">
                                                        <span class="amount2 ana">$79.00 - </span>
                                                        <span class="amount2 ana">$100.00</span>
                                                    </div>
                                                </div>
                                                <div class="last-cart l-mrgn">
                                                    <a class="las3" href="#"><i class="fa fa-heart"></i></a>
                                                    <a class="las4" href="#">Add To Cart</a>
                                                    <a class="las3 las7" href="#"><i class="fa fa-retweet"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <span class="onsale">Sale!</span>
                                        <img alt="" src="img/product/7.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Skin Shoulder Bag</a>
                                                </div>
                                                <div class="tb-product-wrap-price-rating">
                                                    <div class="tb-product-price font-noraure-3">
                                                        <span class="amount2 ana">$170.00</span>
                                                    </div>
                                                </div>
                                                <div class="last-cart l-mrgn">
                                                    <a class="las3" href="#"><i class="fa fa-heart"></i></a>
                                                    <a class="las4" href="#">Add To Cart</a>
                                                    <a class="las3 las7" href="#"><i class="fa fa-retweet"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <span class="onsale">Sale!</span>
                                        <img alt="" src="img/product/6.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Vintage Glasses</a>
                                                </div>
                                                <div class="tb-product-wrap-price-rating">
                                                    <div class="tb-product-price font-noraure-3">
                                                        <span class="amount2 ana">$199.00</span>
                                                    </div>
                                                </div>
                                                <div class="last-cart l-mrgn">
                                                    <a class="las3" href="#"><i class="fa fa-heart"></i></a>
                                                    <a class="las4" href="#">Add To Cart</a>
                                                    <a class="las3 las7" href="#"><i class="fa fa-retweet"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <img alt="" src="img/product/5.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Luxury Leather Bag</a>
                                                </div>
                                                <div class="tb-product-wrap-price-rating">
                                                    <div class="tb-product-price font-noraure-3">
                                                        <span class="amount2 ana">$150.00</span>
                                                    </div>
                                                </div>
                                                <div class="last-cart l-mrgn">
                                                    <a class="las3" href="#"><i class="fa fa-heart"></i></a>
                                                    <a class="las4" href="#">Add To Cart</a>
                                                    <a class="las3 las7" href="#"><i class="fa fa-retweet"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <span class="onsale two">Sale!</span>
                                        <img alt="" src="img/product/3.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Vintage Lambskin Shoe</a>
                                                </div>
                                                <div class="tb-product-wrap-price-rating">
                                                    <div class="tb-product-price font-noraure-3">
                                                        <span class="amount">$180.00</span>
                                                        <span class="amount2 ana">$170.00</span>
                                                    </div>
                                                </div>
                                                <div class="last-cart l-mrgn">
                                                    <a class="las3" href="#"><i class="fa fa-heart"></i></a>
                                                    <a class="las4" href="#">Add To Cart</a>
                                                    <a class="las3 las7" href="#"><i class="fa fa-retweet"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <span class="onsale">Sale!</span>
                                        <img alt="" src="img/product/4.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Skin Shoulder Bag</a>
                                                </div>
                                                <div class="tb-product-wrap-price-rating">
                                                    <div class="tb-product-price font-noraure-3">
                                                        <span class="amount2 ana">$170.00</span>
                                                    </div>
                                                </div>
                                                <div class="last-cart l-mrgn">
                                                    <a class="las3" href="#"><i class="fa fa-heart"></i></a>
                                                    <a class="las4" href="#">Add To Cart</a>
                                                    <a class="las3 las7" href="#"><i class="fa fa-retweet"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane active" id="profile">
                                <div class="features-curosel2 indicator-style2 owl-carousel">
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <span class="onsale two">Sale!</span>
                                        <img alt="" src="img/product/10.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Vintage Lambskin Shoe</a>
                                                </div>
                                                <div class="tb-product-wrap-price-rating">
                                                    <div class="tb-product-price font-noraure-3">
                                                        <span class="amount2 ana">$170.00</span>
                                                    </div>
                                                </div>
                                                <div class="last-cart l-mrgn">
                                                    <a class="las3" href="#"><i class="fa fa-heart"></i></a>
                                                    <a class="las4" href="#">Add To Cart</a>
                                                    <a class="las3 las7" href="#"><i class="fa fa-retweet"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <img alt="" src="img/product/2.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Leather Shoe</a>
                                                </div>
                                                <div class="tb-product-wrap-price-rating">
                                                    <div class="tb-product-price font-noraure-3">
                                                        <span class="amount2 ana">$220.00</span>
                                                    </div>
                                                </div>
                                                <div class="last-cart l-mrgn">
                                                    <a class="las3" href="#"><i class="fa fa-heart"></i></a>
                                                    <a class="las4" href="#">Add To Cart</a>
                                                    <a class="las3 las7" href="#"><i class="fa fa-retweet"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <span class="onsale two">Sale!</span>
                                        <img alt="" src="img/product/8.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Vintage Shoulder Bag</a>
                                                </div>
                                                <div class="tb-product-wrap-price-rating">
                                                    <div class="tb-product-price font-noraure-3">
                                                        <span class="amount2 ana">$99.00</span>
                                                    </div>
                                                </div>
                                                <div class="last-cart l-mrgn">
                                                    <a class="las3" href="#"><i class="fa fa-heart"></i></a>
                                                    <a class="las4" href="#">Add To Cart</a>
                                                    <a class="las3 las7" href="#"><i class="fa fa-retweet"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <img alt="" src="img/product/7.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Leather Bag</a>
                                                </div>
                                                <div class="tb-product-wrap-price-rating">
                                                    <div class="tb-product-price font-noraure-3">
                                                        <span class="amount">$180.00</span>
                                                        <span class="amount2 ana">$170.00</span>
                                                    </div>
                                                </div>
                                                <div class="last-cart l-mrgn">
                                                    <a class="las3" href="#"><i class="fa fa-heart"></i></a>
                                                    <a class="las4" href="#">Add To Cart</a>
                                                    <a class="las3 las7" href="#"><i class="fa fa-retweet"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <span class="onsale">Sale!</span>
                                        <img alt="" src="img/product/6.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Vintage Glasses</a>
                                                </div>
                                                <div class="tb-product-wrap-price-rating">
                                                    <div class="tb-product-price font-noraure-3">
                                                        <span class="amount2 ana">$120.00</span>
                                                    </div>
                                                </div>
                                                <div class="last-cart l-mrgn">
                                                    <a class="las3" href="#"><i class="fa fa-heart"></i></a>
                                                    <a class="las4" href="#">Add To Cart</a>
                                                    <a class="las3 las7" href="#"><i class="fa fa-retweet"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <span class="onsale two">Sale!</span>
                                        <img alt="" src="img/product/5.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Luxury Leather Bag</a>
                                                </div>
                                                <div class="tb-product-wrap-price-rating">
                                                    <div class="tb-product-price font-noraure-3">
                                                        <span class="amount2 ana">$170.00</span>
                                                    </div>
                                                </div>
                                                <div class="last-cart l-mrgn">
                                                    <a class="las3" href="#"><i class="fa fa-heart"></i></a>
                                                    <a class="las4" href="#">Add To Cart</a>
                                                    <a class="las3 las7" href="#"><i class="fa fa-retweet"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <img alt="" src="img/product/4.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Leather Bag</a>
                                                </div>
                                                <div class="tb-product-wrap-price-rating">
                                                    <div class="tb-product-price font-noraure-3">
                                                        <span class="amount">$180.00</span>
                                                        <span class="amount2 ana">$170.00</span>
                                                    </div>
                                                </div>
                                                <div class="last-cart l-mrgn">
                                                    <a class="las3" href="#"><i class="fa fa-heart"></i></a>
                                                    <a class="las4" href="#">Add To Cart</a>
                                                    <a class="las3 las7" href="#"><i class="fa fa-retweet"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <span class="onsale">Sale!</span>
                                        <img alt="" src="img/product/3.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Vintage Lambskin Shoe</a>
                                                </div>
                                                <div class="tb-product-wrap-price-rating">
                                                    <div class="tb-product-price font-noraure-3">
                                                        <span class="amount2 ana">$250.00</span>
                                                    </div>
                                                </div>
                                                <div class="last-cart l-mrgn">
                                                    <a class="las3" href="#"><i class="fa fa-heart"></i></a>
                                                    <a class="las4" href="#">Add To Cart</a>
                                                    <a class="las3 las7" href="#"><i class="fa fa-retweet"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="messages">
                                <div class="features-curosel2 indicator-style2 owl-carousel">
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <span class="onsale">Sale!</span>
                                        <img alt="" src="img/product/6.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Vintage Glasses</a>
                                                </div>
                                                <div class="tb-product-wrap-price-rating">
                                                    <div class="tb-product-price font-noraure-3">
                                                        <span class="amount2 ana">$170.00</span>
                                                    </div>
                                                </div>
                                                <div class="last-cart l-mrgn">
                                                    <a class="las3" href="#"><i class="fa fa-heart"></i></a>
                                                    <a class="las4" href="#">Add To Cart</a>
                                                    <a class="las3 las7" href="#"><i class="fa fa-retweet"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <span class="onsale two">Sale!</span>
                                        <img alt="" src="img/product/5.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Luxury Leather Bag</a>
                                                </div>
                                                <div class="tb-product-wrap-price-rating">
                                                    <div class="tb-product-price font-noraure-3">
                                                        <span class="amount2 ana">$160.00</span>
                                                    </div>
                                                </div>
                                                <div class="last-cart l-mrgn">
                                                    <a class="las3" href="#"><i class="fa fa-heart"></i></a>
                                                    <a class="las4" href="#">Add To Cart</a>
                                                    <a class="las3 las7" href="#"><i class="fa fa-retweet"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <img alt="" src="img/product/4.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Leather Bag</a>
                                                </div>
                                                <div class="tb-product-wrap-price-rating">
                                                    <div class="tb-product-price font-noraure-3">
                                                        <span class="amount">$180.00</span>
                                                        <span class="amount2 ana">$170.00</span>
                                                    </div>
                                                </div>
                                                <div class="last-cart l-mrgn">
                                                    <a class="las3" href="#"><i class="fa fa-heart"></i></a>
                                                    <a class="las4" href="#">Add To Cart</a>
                                                    <a class="las3 las7" href="#"><i class="fa fa-retweet"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <span class="onsale">Sale!</span>
                                        <img alt="" src="img/product/3.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Vintage Lambskin Shoe</a>
                                                </div>
                                                <div class="tb-product-wrap-price-rating">
                                                    <div class="tb-product-price font-noraure-3">
                                                        <span class="amount2 ana">$270.00</span>
                                                    </div>
                                                </div>
                                                <div class="last-cart l-mrgn">
                                                    <a class="las3" href="#"><i class="fa fa-heart"></i></a>
                                                    <a class="las4" href="#">Add To Cart</a>
                                                    <a class="las3 las7" href="#"><i class="fa fa-retweet"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <span class="onsale two">Sale!</span>
                                        <img alt="" src="img/product/2.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Leather Shoe</a>
                                                </div>
                                                <div class="tb-product-wrap-price-rating">
                                                    <div class="tb-product-price font-noraure-3">
                                                        <span class="amount2 ana">$120.00</span>
                                                    </div>
                                                </div>
                                                <div class="last-cart l-mrgn">
                                                    <a class="las3" href="#"><i class="fa fa-heart"></i></a>
                                                    <a class="las4" href="#">Add To Cart</a>
                                                    <a class="las3 las7" href="#"><i class="fa fa-retweet"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tb-product-item-inner tb2 pct-last">
                                        <img alt="" src="img/product/1.jpg">
                                        <a class="la-icon"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                        <div class="tb-content">
                                            <div class="tb-it">
                                                <div class="tb-beg">
                                                    <a href="#">Leather Bag</a>
                                                </div>
                                                <div class="tb-product-wrap-price-rating">
                                                    <div class="tb-product-price font-noraure-3">
                                                        <span class="amount">$180.00</span>
                                                        <span class="amount2 ana">$170.00</span>
                                                    </div>
                                                </div>
                                                <div class="last-cart l-mrgn">
                                                    <a class="las3" href="#"><i class="fa fa-heart"></i></a>
                                                    <a class="las4" href="#">Add To Cart</a>
                                                    <a class="las3 las7" href="#"><i class="fa fa-retweet"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="specail-area home-3 hm-4">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="specail-top">
                        <h3>Special</h3>
                        <div class="row">
                            <div v-for="product in props.specialProduct" class="col-lg-12  col-md-6">
                                <div class="tb-product-item">
                                    <div class="tb-image">
                                        <span class="new">New</span>
                                        <img :src="product.url" alt="">
                                        <a v-on:click="setCurrentProduct(product)" class="la-icon" data-bs-toggle="modal" title="Quick View" href="#productModal">
                                            <i class="fa fa-eye"></i>
                                        </a>
                                    </div>
                                    <div class="tb-content">
                                        <div class="tb-beg">
                                            <a href="#">{{ product.name }}</a>
                                        </div>
                                        <div class="tb-product-price font-noraure-3">
                                            <span class="amount2 ana text-success"> <del class="text-danger text-sm">{{ product.currency }}{{ getUpperPrice(product.price) }}.00</del><br>{{ product.currency }}{{ product.price }}.00 <span class="text-warning">( {{ getDiscountPercentage(product.price)}} % off)</span></span>
                                        </div>
                                        <div class="tb-product-btn">
                                            <a href="#">
                                                <i class="fa fa-shopping-cart"></i>
                                            </a>
                                            <a href="#">
                                                <i class="fa fa-heart"></i>
                                            </a>
                                            <a href="#">
                                                <i class="fa fa-retweet"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="specail-top">
                        <h3>Most View </h3>
                        <div class="row">
                            <div v-for="product in props.mostView" class="col-lg-12  col-md-6" >
                                <div class="tb-product-item">
                                    <div class="tb-image">
                                        <span class="new">New</span>
                                        <img :src="product.url" alt="">
                                        <a v-on:click="setCurrentProduct(product)" class="la-icon" data-bs-toggle="modal" title="Quick View" href="#productModal">
                                            <i class="fa fa-eye"></i>
                                        </a>
                                    </div>
                                    <div class="tb-content">
                                        <div class="tb-beg">
                                            <a href="#">{{ product.name }}</a>
                                        </div>
                                        <div class="tb-product-price font-noraure-3">
                                            <span class="amount2 ana text-success"> <del class="text-danger text-sm">{{ product.currency }}{{ getUpperPrice(product.price) }}.00</del><br>{{ product.currency }}{{ product.price }}.00 <span class="text-warning">( {{ getDiscountPercentage(product.price)}} % off)</span></span>
                                        </div>
                                        <div class="tb-product-btn">
                                            <a href="#">
                                                <i class="fa fa-shopping-cart"></i>
                                            </a>
                                            <a href="#">
                                                <i class="fa fa-heart"></i>
                                            </a>
                                            <a href="#">
                                                <i class="fa fa-retweet"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="specail-top">
                        <h3>Top Products </h3>
                        <div class="row">
                            <div  v-for="product in props.topProduct" class="col-lg-12  col-md-6">
                                <div class="tb-product-item">
                                    <div class="tb-image">
                                        <span class="new">New</span>
                                        <img :src="product.url" alt="">
                                        <a v-on:click="setCurrentProduct(product)" class="la-icon" data-bs-toggle="modal" title="Quick View" href="#productModal">
                                            <i class="fa fa-eye"></i>
                                        </a>
                                    </div>
                                    <div class="tb-content">
                                        <div class="tb-beg">
                                            <a href="#">{{ product.name }}</a>
                                        </div>
                                        <div class="tb-product-price font-noraure-3">
                                            <span class="amount2 ana text-success"> <del class="text-danger text-sm">{{ product.currency }}{{ getUpperPrice(product.price) }}.00</del><br>{{ product.currency }}{{ product.price }}.00 <span class="text-warning">( {{ getDiscountPercentage(product.price)}} % off)</span></span>
                                        </div>
                                        <div class="tb-product-btn">
                                            <a href="#">
                                                <i class="fa fa-shopping-cart"></i>
                                            </a>
                                            <a href="#">
                                                <i class="fa fa-heart"></i>
                                            </a>
                                            <a href="#">
                                                <i class="fa fa-retweet"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- QUICKVIEW PRODUCT -->
    <div id="quickview-wrapper">
        <!-- Modal -->
        <div class="modal fade" id="productModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-product">
                            <div class="product-images">
                                <div class="main-image images" style="max-height: 70vh">
                                    <img  :src="currentProduct.url" alt="">
                                </div>
                            </div><!-- .product-images -->

                            <div class="cras">
                                <div class="product-name">
                                    <h1>{{ currentProduct.name }}</h1>
                                </div>
                                <div class="tb-product-price font-noraure-3">
                                    <span class="amount">{{ currentProduct.currency }}{{ getUpperPrice(currentProduct.price) }}.00</span>
                                    <span class="amount2 ana">{{ currentProduct.currency }}{{ currentProduct.price }}.00</span>
                                </div>
                                <div class="short-description ">

                                    <ul class="list-group py-3">
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            Type of Cloth
                                            <span class="badge badge-primary bg-info badge-pill ">{{ currentProduct.type_of_fabric }}</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            Type of Print
                                            <span class="badge badge-primary bg-warning badge-pill">{{ currentProduct.type_of_print }}</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            Cloth Color
                                            <span class="badge badge-primary badge-pill bg-white" style="padding: 5px;border:1px solid black;"><span style="display:block;    height: 30px;width: 30px;" :style="{'background-color':currentProduct.color}"></span></span>
                                        </li>
                                    </ul>

                                    <p class="d-none">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
                                </div>
                                <div class="add-to-box1">
                                    <div class="add-to-box add-to-box2">
                                        <div class="add-to-cart">
                                            <div class="input-content">
                                                <label for="qty">Qty:<span> *</span></label>
                                                <input id="qty" class="input-text qty" type="text" name="qty" maxlength="12" value="1" title="Qty">
                                            </div>
                                            <div class="last-cart">
                                                <a class="last1" href="#">Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="stock2 d-none"><p class="availability in-stock2"> Availability:Accessories, Men </p></div>
                            </div><!-- .product-info -->
                        </div><!-- .modal-product -->
                    </div><!-- .modal-body -->
                </div><!-- .modal-content -->
            </div><!-- .modal-dialog -->
        </div>
        <!-- END Modal -->
    </div>
    <!-- END QUICKVIEW PRODUCT -->

</FrontEndLayout>

</template>
