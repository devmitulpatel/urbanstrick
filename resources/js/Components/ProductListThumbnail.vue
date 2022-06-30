<template>
    <div class="shop-tab">
        <div class="row">
            <!-- single-product start -->
            <div v-for="product in props.list.data" class="col-lg-6 col-xl-4 col-md-6">
                <div class="tb-product-item-inner tb2 pct-last">
                    <span class="onsale two">Sale!</span>

                    <div class="product-img" :style='imgStyle(product)'></div>
<!--                    <img alt="" :src="product.thumbnail">-->
                    <a v-on:click.prevent="viewProductInModal(product)" class="la-icon"  href="#" title="Quick View" ><i class="fa fa-eye"></i></a>
                    <div class="tb-content">
                        <div class="tb-it">
                            <div class="tb-beg">
                                <InertiaLink :href="route('product_page',{name:product.slug})">{{ product.name }}</InertiaLink>
                                <small v-if="currentCart.isItemExist(product)"  class="pl-2">( in cart : {{ currentCart.getItem(product).qt }} )</small>
                            </div>
                            <div class="tb-product-wrap-price-rating">
                                <div class="tb-product-price font-noraure-3">
                                    <span class="amount text-danger">{{ [product.currency,getUpperPrice(product.price)].join(' ') }}</span>
                                    <span class="amount2 ana text-success">{{ [product.currency,product.price].join(' ') }}</span>
                                </div>
                            </div>

                            <div class="last-cart l-mrgn">
                                <a class="las3 cursor-pointer" v-on:click.prevent="()=>{}">  <WishButton :product="product"></WishButton></a>
                                <a v-if="!currentCart.isItemExist(product)" v-on:click.prevent="addProduct(product)" class="las4 cursor-pointer">Add To Cart</a>
                                <a v-if="currentCart.isItemExist(product)" v-on:click.prevent="addProduct(product)" class="las4 cursor-pointer">Add more</a>
                                <a v-on:click.prevent="toggleShareModal(product)" class="las3 cursor-pointer" style="margin-left: 10px;margin-right: 0"  href="#">
                                    <i class="fa fa-retweet"></i>
                                </a>
                            </div>

                            <div class="last-cart l-mrgn" v-if="false">
                                <a class="las3" href="#"><i class="fa fa-heart"></i></a>
                                <a v-if="currentCart.isItemExist(product)" v-on:click.prevent="addProduct(product)" class="las3"><i class="fa fa-plus" aria-hidden="true"></i></a>
                                <a v-if="!currentCart.isItemExist(product)" v-on:click.prevent="addProduct(product)" class="las4">Add To Cart</a>

                                <a v-if="currentCart.isItemExist(product)" v-on:click.prevent="currentCart.remove(product,1)" class="las3"><i class="fa fa-minus" aria-hidden="true"></i></a>
                                <a v-on:click.prevent="toggleShareModal()" href="#">
                                    <i class="fa fa-retweet"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="props.list.data.length<1" class="pb-4">
                No Product To Show
            </div>

        </div>
    </div>
</template>


<script setup>

import {manageCart} from "@/Lib/LaravelHelper";
import {InertiaLink} from "@inertiajs/inertia-vue3";
import {ref} from "vue";
import WishButton from "@/Components/WishButton";

const emit=defineEmits(
    [
        'productModalOpen',
        'productModalAdd',
        'productModalShare'
    ]
);
const props=defineProps({
    list:Object
});
const currentCart =manageCart();
const viewProductInModal=(product)=>{
    emit('productModalOpen',product)
}

const imgStyle=(product)=>{
    return 'background-image:url("'+product.url+'");';
}
const currentProduct=ref();
const currentProductQt=ref();
const sizeModalOpen =ref(false);
const addProduct = (product,fromModal=false) => {
    emit('productModalAdd',product,fromModal);
}

const toggleShareModal=(product)=>{
    emit("productModalShare",product);
}

</script>

<script>
export default {
    name: "ProductListThumbnail"
}
</script>

<style scoped>

</style>
