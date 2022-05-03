<template>
    <section class="contact-img-area" :style="{'background-image': 'url('+asset(getCategorySpecificBackground())+')'}">
        <div class="container">
            <div class="row">
                <div class="col-md-12" :class="getHeaderImageClass()">
                    <div class="con-text">
                        <h2 class="page-title">{{ props.currentCategory.name }}</h2>
                        <p><InertiaLink :href="route('home')">Home</InertiaLink> | {{ props.currentCategory.name }}</p>
                        <p>shop good quality, decent looking, {{ props.currentCategory.name }} clothings </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {InertiaLink} from "@inertiajs/inertia-vue3";
import {routes} from "@/Lib/LaravelHelper";
const props=defineProps(
    {
        currentCategory:Object

    }
);

const getHeaderImageClass=()=>{
    let defaultAddress= 'text-center';
    if (routes().current('product_list',{type:'women'}))defaultAddress='text-right';
    if (routes().current('product_list',{type:'unisex'}))defaultAddress='text-center';
    return defaultAddress;
}

const getCategorySpecificBackground=()=>{

    let defaultAddress='img/bg-img/bg-pagetitle.jpg';
    if (routes().current('product_list',{type:'women'}))defaultAddress='img/slider/slider-2.jpg'
    if (routes().current('product_list',{type:'men'}))defaultAddress='img/bg-img/men-bg-1.png'
    if (routes().current('product_list',{type:'unisex'}))defaultAddress='img/bg-img/unisex-bg-1.png'
    return defaultAddress;
}

</script>

<style scoped>

</style>
