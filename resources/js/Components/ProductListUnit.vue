<template>
    <div class="tb-product-item">
        <div class="tb-image">
            <span class="new">New</span>
            <div class="product-img" :style='imgStyle(props.product)'></div>
            <a class="la-icon"  title="Quick View" v-on:click.prevent="setCurrentProduct">
                <i class="fa fa-eye"></i>
            </a>
        </div>
        <div class="tb-content">
            <div class="tb-beg">
                <InertiaLink :href="route('product_page',{name:props.product.slug})">
                    {{ props.product.name }}
                </InertiaLink>
                <small v-if="currentCart.isItemExist(props.product)" class="pl-2" href="#">( in
                    cart: {{ currentCart.getItemTotalQt(props.product) }} )</small>
            </div>
            <div class="tb-product-price font-noraure-3">
                                            <span class="amount2 ana text-success"> <del class="text-danger text-sm">{{
                                                    props.product.currency
                                                }}{{ getUpperPrice(props.product.price) }}.00</del><br>{{
                                                    props.product.currency
                                                }}{{ props.product.price }}.00 <span
                                                    class="text-warning">( {{ getDiscountPercentage(props.product.price) }} % off)</span></span>
            </div>
            <div class="tb-product-btn">
                <a v-if="!currentCart.isItemExist(props.product)"
                   href="#" v-on:click.prevent="addProduct(props.product)">
                    <i class="fa fa-shopping-cart"></i>

                </a>

                <a v-if="currentCart.isItemExist(props.product)"
                   href="#" v-on:click.prevent="addProduct(props.product)">
                    <i class="fa fa-cart-plus"></i>

                </a>


                <WishButton :product="product"></WishButton>

                <a v-on:click.prevent="toggleShareModal" href="#">
                    <i class="fa fa-retweet"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { InertiaLink} from '@inertiajs/inertia-vue3';

import {manageCart} from "@/Lib/LaravelHelper";
import {defineProps} from "vue";
import WishButton from "@/Components/WishButton";

const currentCart = manageCart();
const props=defineProps({
    product:Object,
    currentProduct:Object,
    currentProductQt:Number,
});


const emit=defineEmits(
    [
        'shareModalToggle',
    ]
);

const addProduct = (product,fromModal=false) => {
    emit('addProduct',product)
}

const setCurrentProduct=()=>{
    emit('setCurrentProduct',props.product)
}

const toggleShareModal=()=>{
    emit("shareModalToggle",props.product);
}
const imgStyle=(product)=>{
    return 'background-image:url("'+product.url+'");';
}
</script>
<script>
export default {
    name: "ProductListUnit"
}
</script>

<style scoped>

</style>
