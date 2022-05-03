<script setup>
import OptionAskModal from "@/Components/OptionAskModal";
import {Head, InertiaLink, usePage} from '@inertiajs/inertia-vue3';

//import carousel from 'vue-owl-carousel';
import ProductModel from '@/Components/ProductModel';
import ProductModal from '@/Components/ProductModal';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';

// const jsdom = require('jsdom').jsdom
// const myWindow = jsdom().createWindow()
// const $ = require('jQuery')
// const jq = require('jQuery').create()
//const jQuery = require('jQuery');
    //.create(myWindow)

import '@/Lib/nivoslider';
import '@/Lib/nivo-slider.css';
import '@/Lib/preview.css';

import {onBeforeMount, onMounted, onUpdated, ref} from "vue";
import {manageCart, msHelper} from '@/Lib/LaravelHelper';
import ProductListUnit from "@/Components/ProductListUnit";
import ShareModal from "@/Components/ShareModal";

const productModalOpen =ref(false)
const shareModalOpen =ref(false)
const currentProduct = ref({});
const currentProductQt = ref(1);
const currentCartData = ref([]);
const setCurrentProduct = (product) => {
    productModalOpen.value=true;
    //currentProduct.value = null;
    currentProduct.value = product;
}

const sizeModalOpen=ref(false);

const addProduct = (product,fromModal=false) => {
    currentProduct.value=product;
    if(currentProductQt.value<0)currentProductQt.value=1;
   // $('.btn-close').trigger('click');
    if(!fromModal){
        sizeModalOpen.value=true;
    }else {
        currentCart.add(product, currentProductQt.value,currentSize.value)
    }

}

const shareModalToggle=(product)=> {
    currentProduct.value=product;
    shareModalOpen.value = !shareModalOpen.value
};

const getUpperPrice = (price) => {
    return (price == 799) ? 1099 : 1299;
}

const getDiscountPercentage = (price) => {
    return (price == 799) ? 27 : 23;
}

const currentCart = manageCart();
onMounted(() => {

    msHelper().auth().login(props.auth.user);
    // console.log(store);
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
    if (process.browser) {
        $('#jquery-slider-demo').nivoSlider(
            {
                lazyLoad: true,
                autoplay: true,
                loop: true,
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
                manualAdvance: true
            }
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
    }
    currentCartData.value = currentCart.get();
    //  console.log("sdasds");
});
onUpdated(() => {
    msHelper().auth().login(props.auth.user);
});
const props = defineProps({
    topProduct: Object,
    specialProduct: Object,
    mostView: Object,
    site: Object,
    auth: Object,
    canlogin: Boolean
})
// const asset=(path)=>{
//     return [route('base'),path].join('/');
// }
const vfOptions = ref({
    autoplay: true
});
const vfImages = ref(['img/slider/bg_slider1.jpg', 'img/slider/bg_slider22.jpg']);
const vfTransitions = ref(['fade', 'cube', 'book', 'wave']);
const vfCaptions = ref(['Caption for image 1', 'Caption for image 2', 'Caption for image 3',]);
const currentSize=ref();
</script>
<script>
import FrontEndLayout from '@/Layouts/FrontEnd.vue';

export default {
    // Using the shorthand
    layout: FrontEndLayout,


}
</script>
<template>
    <Head title="UrbanStrick | India's Best Fashion Store | Authentic Style | Premium Quality | Truly Indian"/>
    <div id="top"></div>

    <section class="slider-main-area home-3 bg-gray">
        <div class="main-slider an-si">
            <div class="bend niceties preview-2">

                <div class="slider-wrapper theme-default">
                    <div id="jquery-slider-demo" class="nivoSlider">

                        <img :src="asset('img/slider/slider-1.jpg')" alt="The slide 1" title="#slide-title-1"/>


                        <img :src="asset('img/slider/slider-2.jpg')" alt="The slide 2" title="#slide-title-2"/>

                        <img :src="asset('img/slider/slider-3.jpg')" alt="The slide 3" data-transition="slideInLeft"
                             title="#slide-title-3"/>


                    </div>
                    <div id="slide-title-1" class="nivo-html-caption t-cn Builder">
                        <div class="t-cn Builder">
                            <div class="slide-all slide-title-fix-1">
                                <!-- layer 1 -->
                                <div class="layer-1">
                                    <h2 class="title5">New Collection</h2>
                                </div>
                                <!-- layer 2 -->
                                <div class="layer-2">
                                    <h2 class="title6 slide-title-fix-1-layer-2">Men’s Fashion</h2>
                                </div>
                                <!-- layer 2 -->
                                <div class="layer-2">
                                    <p class="title0">Save Up To 40% Off</p>
                                </div>
                                <!-- layer 3 -->
                                <div class="layer-3">
                                    <InertiaLink :href="route('product_list','men')" class="min1 btn-black">Shop Now
                                    </InertiaLink>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div id="slide-title-2" class="nivo-html-caption t-cn Builder">
                        <div class="t-cn Builder">
                            <div class="slide-all  slide-title-fix-2">
                                <!-- layer 1 -->
                                <div class="layer-1">
                                    <h2 class="title5">New Collection</h2>
                                </div>
                                <!-- layer 2 -->
                                <div class="layer-2">
                                    <h2 class="title6 slide-title-fix-1-layer-2">Women’s<br> Fashion</h2>
                                </div>
                                <!-- layer 2 -->
                                <div class="layer-2">
                                    <p class="title0">Save Up To 40% Off</p>
                                </div>
                                <!-- layer 3 -->
                                <div class="layer-3">
                                    <InertiaLink :href="route('product_list','women')" class="min1 btn-black">Shop Now
                                    </InertiaLink>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div id="slide-title-3" class="nivo-html-caption">

                        <div class="t-cn Builder">

                            <div class="slide-all  slide-title-fix-3 ">
                                <!-- layer 1 -->
                                <div class="layer-1">
                                    <h2 class="title5">New Collection</h2>
                                </div>
                                <!-- layer 2 -->
                                <div class="layer-2">
                                    <h2 class="title6 slide-title-fix-1-layer-2">Unisex Fashion</h2>
                                </div>
                                <!-- layer 2 -->
                                <div class="layer-2">
                                    <p class="title0">Save Up To 40% Off</p>
                                </div>
                                <!-- layer 3 -->
                                <div class="layer-3">
                                    <InertiaLink :href="route('product_list','unisex')" class="min1 btn-black">Shop
                                        Now
                                    </InertiaLink>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>

                <marquee class="top-marquee" scrolldelay="20">This is basic example of marquee</marquee>

            </div>
        </div>
    </section>
    <section class="design-area home-4">
        <div class="container">
            <div class="bottom-design res" v-if="false">
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
                                <ProductListUnit :product="product" @addProduct="addProduct"  @setCurrentProduct="setCurrentProduct" @shareModalToggle="shareModalToggle"></ProductListUnit>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="specail-top">
                        <h3>Most View </h3>
                        <div class="row">
                            <div v-for="product in props.mostView" class="col-lg-12  col-md-6">
                                <ProductListUnit @shareModalToggle="shareModalToggle" @addProduct="addProduct"  @setCurrentProduct="setCurrentProduct" :product="product"></ProductListUnit>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="specail-top">
                        <h3>Top Products </h3>
                        <div class="row">
                            <div v-for="product in props.topProduct" class="col-lg-12  col-md-6">
                                <ProductListUnit @shareModalToggle="shareModalToggle" @addProduct="addProduct" @setCurrentProduct="setCurrentProduct" :product="product"></ProductListUnit>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- QUICKVIEW PRODUCT -->

    <OptionAskModal v-model="currentSize" :product="currentProduct" v-model:is-show="sizeModalOpen" ></OptionAskModal>
    <ProductModal :product="currentProduct" v-model:is-show="productModalOpen" @addProduct="addProduct" ></ProductModal>
    <ShareModal :product="currentProduct" v-model:is-show="shareModalOpen" ></ShareModal>



    <!-- END QUICKVIEW PRODUCT -->

</template>
