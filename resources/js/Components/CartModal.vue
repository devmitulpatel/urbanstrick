<template>

    <Modal
        :style="{'z-index': (isShow)?100:-1}"
        v-model="isShow"
        :close="closeModal"
    >
        <div class="col-12 col-md-8 col-lg-8">
            <div class="card">

                <div  class="card-header">

                    <div class="d-flex justify-content-between">

                        <div>
                            <h5>Shopping Cart</h5>

                        </div>
                        <div class="btn las4 btn-outline-danger  btn-block" @click="closeModal">
                            <i class="fa fa-times"></i>
                        </div>

                    </div>

                </div>

                <div class="card-body" style="max-height: 60vh;overflow-y: auto;">
                    <div class="cat" v-for="itemList in manageCart().get()" style="margin:0 10px">



                        <InertiaLink class="image" :href="route('product_page',{name:itemList.product.slug})"><img :src="itemList.product.url" alt=""></InertiaLink>
                        <div class="cat_two">
                            <p>

                                <InertiaLink :href="route('product_page',{name:itemList.product.slug})" >{{ itemList.product.name }}</InertiaLink>
                                <br>
                                <span style="line-height: 15px">
                                    <span class="badge bg-theme" style="font-size: 75%">{{
                                        msHelper().getSize(itemList.size).text
                                    }}</span>


                                </span>

                            </p>
                            <p>
                                <small><span class="agn">{{ itemList.qt }} </span>x <span>{{[itemList.product.currency,itemList.product.price].join('')}}</span> =   </small><span>{{ [itemList.product.currency,itemList.product.price*itemList.qt].join('') }}</span>


                            </p>
                        </div>
                        <div class="cat_icon ">
                            <a class="remove btn-black" href="#" v-on:click="removeProduct(itemList.product) ">×</a>
                        </div>
                    </div>
                    <div v-if="manageCart().getItemNo()==0" class=""  style="margin:0 10px">
                        <div class="cat_two text-center w-full mb-3" >

                            <i class="fa fa-shopping-basket fa-5x mb-3 text-black" aria-hidden="true"></i>
                            <h3 class="mb-3">
                                Oops... There is nothing to show here
                            </h3>

                            <div  v-on:click.prevent="goAndCloseModal(route('home'))"  class="btn btn-primary btn-black w-full">
                                Shop now
                            </div>

                        </div>

                    </div>




                </div>

                <div class="card-footer">

                    <div class="wish-item">
                        <div class="cat_bottom">
                            <p class="total" v-if="manageCart().getItemNo()>0">
                                <strong>Subtotal:</strong>
                                <span class="amount">{{ manageCart().getTotal() }} + <small>taxes</small></span>
                            </p>
                        </div>
                    </div>

                    <div class="d-flex justify-content-between">

                        <div class="btn las4 btn-black btn-block" v-on:click.prevent="goAndCloseModal(route('cart'))">
                            View cart
                        </div>
                        <div class="btn las4 btn-black  btn-block" @click="closeModal">
                            close
                        </div>
                        <div class="btn las4 btn-black  btn-block" v-on:click.prevent="goAndCloseModal(route('checkout'))" v-if="manageCart().getItemNo()" >
                            Checkout
                        </div>

                    </div>


                </div>

            </div>

        </div>
    </Modal>


</template>

<script setup>
import {manageCart} from "@/Lib/LaravelHelper";
import { InertiaLink } from '@inertiajs/inertia-vue3'
import {onBeforeUpdate, ref} from "vue";
import {Inertia} from "@inertiajs/inertia";
const isShow=ref(false);
const removeProduct = (product) => {
    manageCart().remove(product);
}

const emit=defineEmits(
    [
        'update:modelValue',
    ]
);
const props=defineProps(
    {
        modelValue:Boolean,

    }
);
const closeModal=()=>{
    isShow.value=false;
    emit('update:modelValue',false);
}
onBeforeUpdate(()=>{
    isShow.value=props.modelValue;
})

const goAndCloseModal=(url)=>{
    closeModal();
    Inertia.get(url)
}
</script>

<script>
export default {
    name: "CartModal"
}
</script>

<style scoped>

</style>
