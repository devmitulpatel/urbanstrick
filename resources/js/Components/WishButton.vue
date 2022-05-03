<template>
                                            <span v-if="msHelper().auth().check()" class="wish-button cursor-pointer">
                                            <a v-on:click.prevent="addToWish" v-if="!props.product.wished" >
                                                <i  class="fa fa-heart "></i>
                                            </a>
                                            <a v-on:click.prevent="removeFromWish" v-else >
                                                <i  class="fa fa-heart text-danger"></i>
                                            </a>
                                            </span>

    <a  v-else v-on:click.prevent="createErrorToast('to add this product to wish list you need to login/sign up first')" class="disabled">
        <i class="fa fa-heart-o text-muted"></i>
    </a>
</template>

<script setup>

import {Inertia} from "@inertiajs/inertia";
import {createSuccessToast} from "@/Lib/LaravelHelper";

const props=defineProps({
    product:Object
});

const addToWish=()=>{
    let data={
        product_id:props.product.id
    };
    let url = route('wish.store')
    Inertia.post(url,data,{
        onSuccess:()=>{
            let str=[props.product.name,'added to your wish list'].join(' ');
            createSuccessToast(str)
        },
        preserveScroll:true,
        preserveState:true
    })
}
const removeFromWish=()=>{
    let data={
        product_id:props.product.id
    };
    let url = route('wish.destroy',{wish:props.product.wished_id})
    Inertia.post(url,data,{
        onSuccess:()=>{
            let str=[props.product.name,'removed from your wish list'].join(' ');
            createSuccessToast(str)
        },
        preserveScroll:true,
        preserveState:true
    })
}

</script>

<script>
export default {
    name: "WishButton"
}
</script>

<style scoped>

</style>
