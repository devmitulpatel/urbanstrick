<template>


    <HeaderImage :currentCategory="currentCategory">

    </HeaderImage>


        <section class="shop-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-xl-3 col-md-12 d-none d-md-block d-lg-block ">
                        <div class="all-shop-sidebar">
                            <div class="top-shop-sidebar">
                                <h3 class="wg-title">SHOP BY</h3>
                            </div>
                            <div class="shop-one">
                                <h3 class="wg-title2">Gender</h3>
                                <ul class="product-categories">
                                    <li  v-for="type in props.categoryCount.data" class="cat-item" :class="{'current-cat':type.active}" >
                                        <InertiaLink v-if="type.count" preserve-scroll :href="type.url">{{  type.name }}</InertiaLink>
                                        <a v-else="type.count">{{  type.name }}</a>
                                        <span class="count pl-2">( {{ type.count }} )</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="shop-one">
                                <h3 class="wg-title2">Our Lable</h3>
                                <ul class="product-categories">
                                    <li class="cat-item">
                                        <a href="#">UrbanStrick</a>
                                        <span class="count">(1)</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="shop-one">
                                <h3 class="wg-title2">Choose Price</h3>
                                <div class="widget shop-filter">
                                    <div class="info_widget">
                                        <div class="price_filter">
                                            <div id="slider-range"></div>
                                            <div id="amount">
                                                <input type="text" name="first_price" class="first_price" />
                                                <input type="text" name="last_price" class="last_price"/>
                                                <button class="button-shop" type="submit"><i class="fa fa-search search-icon"></i></button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="shop-one">
                                <h3 class="wg-title2">Choose Color</h3>
                                <ul class="product-categories">
                                    <li class="cat-item cat-item-11">
                                        <a href="#">Black</a>
                                        <span class="count">(1)</span>
                                    </li>
                                    <li class="cat-item cat-item-8">
                                        <a href="#">Orange</a>
                                        <span class="count">(1)</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="top-shop-sidebar sim">
                                <h3 class="wg-title">Compare Products</h3>
                                <ul class="products-list">
                                    <li class="cat-item cat-item-11">No products to compare</li>
                                </ul>
                                <a class="clear-all" href="#">Clear all</a>
                                <a class="blog8" href="#">Compare</a>
                            </div>
                            <div class="top-shop-sidebar sim2">
                                <h3 class="wg-title">Community Pool</h3>
                            </div>
                            <div class="shop-one">
                                <ul class="product-categories">
                                    <li class="cat-item cat-item-11">
                                        <a href="#">Black</a>
                                        <span class="count">(1)</span>
                                    </li>
                                    <li class="cat-item cat-item-8">
                                        <a href="#">Orange</a>
                                        <span class="count">(1)</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="top-shop-sidebar an-shop">
                                <h3 class="wg-title">BEST SELLER</h3>
                                <ul>
                                    <li class="b-none">
                                        <div class="tb-recent-thumbb">
                                            <a href="#">
                                                <img class="attachment" src="img/product/p1.jpg" alt="">
                                            </a>
                                        </div>
                                        <div class="tb-recentb">
                                            <div class="tb-beg">
                                                <a href="#">Lambskin Shoe</a>
                                            </div>
                                            <div class="tb-product-price font-noraure-3">
                                                <span class="amount">$180.00</span>
                                                <span class="amount2 ana">$170.00</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="b-none">
                                        <div class="tb-recent-thumbb">
                                            <a href="#">
                                                <img class="attachment" src="img/product/p2.jpg" alt="">
                                            </a>
                                        </div>
                                        <div class="tb-recentb">
                                            <div class="tb-beg">
                                                <a href="#">Luxury Leather Bag</a>
                                            </div>
                                            <div class="tb-product-price font-noraure-3">
                                                <span class="amount2 ana">$170.00</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="b-none agn">
                                        <div class="tb-recent-thumbb">
                                            <a href="#">
                                                <img class="attachment" src="img/product/p3.jpg" alt="">
                                            </a>
                                        </div>
                                        <div class="tb-recentb">
                                            <div class="tb-beg">
                                                <a href="#">Vintage Glasses</a>
                                            </div>
                                            <div class="tb-product-price font-noraure-3">
                                                <span class="amount2 ana">$170.00</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="ro-info-box-wrap tpl3 st">
                                <div class="tb-image">
                                    <img src="img/product/a1.jpg" alt="">
                                </div>
                                <div class="tb-content">
                                    <div class="tb-content-inner an-inner">
                                        <h5>WOMEN'S FASHION</h5>
                                        <h3>MID SEASON SALE</h3>
                                        <h6>
                                            <a href="#">SHOP NOW</a>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 col-xl-9 col-md-12">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-12">
                                <div class="features-tab">
                                    <!-- Nav tabs -->
                                    <div class="shop-all-tab">
                                        <div class="two-part">
                                            <ul class="nav tabs" role="tablist">
                                                <li class="vali">View as:</li>
                                                <li role="presentation"><a href="#tab-view" class="active" aria-controls="home" role="tab" data-bs-toggle="tab"><i class="fa fa-th-large"></i></a></li>
                                                <li role="presentation"><a href="#list-view" aria-controls="profile" role="tab" data-bs-toggle="tab"><i class="fa fa-align-justify"></i></a></li>
                                            </ul>
                                            <div class="sort-by">
                                                <div class="shop6">
                                                    <label>Sort By :</label>
                                                    <select>
                                                        <option value="">Default sorting</option>
                                                        <option value="">Sort by popularity</option>
                                                        <option value="">Sort by average rating</option>
                                                        <option value="">Sort by newness</option>
                                                        <option value="">Sort by price: low to high</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="shop5">
                                            <label>Show :</label>
                                            <select>
                                                <option value="">12</option>
                                                <option value="">24</option>
                                                <option value="">36</option>
                                            </select>
                                        </div>



                                    </div>

                                    <!-- Tab panes -->
                                    <div class="tab-content">
                                        <div role="tabpanel" class="tab-pane active" id="tab-view">
                                            <ProductListThumbnail :list="props.productList" @productModalOpen="viewProduct" @productModalAdd="addProduct" @productModalShare="shareModalToggle"></ProductListThumbnail>
                                        </div>
                                        <div role="tabpanel" class="tab-pane" id="list-view">

                                            <div v-for="product in props.productList.data" class="li-item">
                                                <div class="row">
                                                    <div class="col-lg-4 col-md-4">
                                                        <div class="tb-product-item-inner tb2 pct-last">
                                                            <span class="onsale two">Sale!</span>
                                                            <img alt="" :src="product.thumbnail">
                                                            <a class="la-icon ts"  href="#productModal" title="Quick View" data-bs-toggle="modal"><i class="fa fa-eye"></i></a>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-8 col-md-8">
                                                        <div class="f-fix">
                                                            <div class="tb-beg">
                                                                <a href="#">{{ product.name }}</a>
                                                            </div>
                                                            <div class="tb-product-wrap-price-rating">
                                                                <div class="tb-product-price font-noraure-3">
                                                                    <span class="amount text-danger">{{ [product.currency,getUpperPrice(product.price)].join(' ') }}</span>
                                                                    <span class="amount2 ana text-success">{{ [product.currency,product.price].join(' ') }}</span>

                                                                </div>
                                                            </div>
                                                            <p class="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo  </p>
                                                            <div class="last-cart l-mrgn ns">
                                                                <a class="las4" v-on:click.prevent="addProduct(product)">Add To Cart</a>
                                                            </div>
                                                            <div class="tb-product-btn">
                                                                <a href="#">
                                                                    <i class="fa fa-eye"></i>
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
                                    <div class="shop-all-tab-nor">
                                        <div class="two-part">
                                            <ul class="nav tabs" role="tablist">
                                                <li role="presentation"><a href="#home" aria-controls="home" role="tab" data-bs-toggle="tab"><i class="fa fa-th-large"></i></a></li>
                                                <li role="presentation"><a class="active" href="#profile" aria-controls="profile" role="tab" data-bs-toggle="tab"><i class="fa fa-align-justify"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom-sticky-navbar d-none d-xs-block d-sm-block">
                <i class="fa fa-cogs"></i> Filter
            </div>
        </section>
    <ProductModal  v-model:is-show="productModalOpen" :product="currentProduct" @addProduct="addProduct" ></ProductModal>
    <OptionAskModal v-model:is-show="sizeModalOpen" :product="currentProduct" v-model="currentSize"   ></OptionAskModal>
    <ShareModal v-model:is-show="shareModalOpen" :product="currentProduct"  ></ShareModal>
</template>

<script setup>
import {InertiaLink} from "@inertiajs/inertia-vue3";
import {manageCart, routes} from "@/Lib/LaravelHelper";
import {ref} from "vue";
import HeaderImage from "@/Components/HeaderImage";
import ProductModal from "@/Components/ProductModal";
import ShareModal from "@/Components/ShareModal";
import OptionAskModal from "@/Components/OptionAskModal";
import ProductListThumbnail from "@/Components/ProductListThumbnail";

const allowedModal = ['productModalOpen','sizeModalOpen','shareModalOpen'];

const shareModalOpen = ref(false);
const productModalOpen = ref(false);
const currentProduct = ref({});
const currentSize = ref();
const setCurrentProduct=(product)=>{
   // currentProduct.value=null;
    currentProduct.value=product;
}

const viewProduct = (product) => {
    currentProduct.value=product;
    productModalOpen.value=true;
}
const props=defineProps({
    site:Object,
    auth:Object,
    productList:Object,
    currentCategory:Object,
    categoryCount:Object
});
const shareModalToggle=(product)=>{
    currentProduct.value=product;
    shareModalOpen.value=true;
}
const closeAllModal = () => {

    for (let i in allowedModal){
        [allowedModal[i]].value=false;
    }

}

const getCategorySpecificBackground=()=>{

    let defaultAddress='img/bg-img/bg-pagetitle.jpg';
    if (routes().current('product_list',{type:'women'}))defaultAddress='img/slider/slider-2.jpg'
    return defaultAddress;
}
const currentCart=manageCart();
const currentProductQt =ref(1);
const sizeModalOpen =ref(false);
const addProduct = (product,fromModal=false) => {
    currentProduct.value=product;
    if(currentProductQt.value<0)currentProductQt.value=1;
    // $('.btn-close').trigger('click');
    if(!fromModal){
        sizeModalOpen.value=true;
    }else {
        currentCart.add(product, currentProductQt.value,currentSize.value)
    }
    //currentCart.add(product,1)
}

const productType=ref([
    {
        name:'Women',
        active:routes().current('product_list',{type:'women'}),
        url:routes('product_list',{type:'women'}),
        count:0
    },
    {
        name:'Men',
        active:routes().current('product_list',{type:'men'}),
        url:routes('product_list',{type:'men'}),
        count:0
    },
    {
        name:'Unisex',
        active:routes().current('product_list',{type:'unisex'}),
        url:routes('product_list',{type:'unisex'}),
        count:0
    }

]);
const productColor=ref([
    {
        name:'white'
    },
    {
        name:'black'
    },
    {
        name:'red'
    },
    {
        name:'blue'
    },
    {
        name:'orange'
    },
]);

</script>
<script>
import FrontEndLayout from '@/Layouts/FrontEnd.vue';

export default {
    // Using the shorthand
    layout: FrontEndLayout,


}
</script>
<style scoped>

</style>
