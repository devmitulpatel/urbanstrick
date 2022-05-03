<template>
    <div id="quickview-wrapper show"  v-if="props.product!=null && typeof props.product  == 'object'" >
        <!-- Modal -->
        <div class="modal fade" id="productModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-product">
                            <div class="product-images" v-if="false">
                                <div class="main-image images" style="max-height: 70vh">
                                    <img  :src="props.product.url" alt="">
                                </div>
                            </div><!-- .product-images -->

                            <div class="cras row">
                                <div class="col-12 col-md-4  col-lg-4">
                                    <div class="">
                                        <div class="" style="max-height: 70vh">
                                            <img  :src="props.product.url" alt="">
                                        </div>
                                    </div><!-- .product-images -->
                                </div>
                                <div class="col-12  col-md-8  col-lg-8">
                                    <div class="product-name">
                                        <h1>{{ props.product.name }}</h1>
                                    </div>
                                    <div class="tb-product-price font-noraure-3">
                                        <span class="amount">{{ props.product.currency }}{{ getUpperPrice(props.product.price) }}.00</span>
                                        <span class="amount2 ana">{{ props.product.currency }}{{ props.product.price }}.00</span>
                                    </div>
                                    <div class="short-description ">

                                        <ul class="list-group py-3">
                                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                                Type of Fabric
                                                <span class="badge badge-primary bg-info badge-pill ">{{ props.product.type_of_fabric }}</span>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                                Type of Print
                                                <span class="badge badge-primary bg-warning badge-pill">{{ props.product.type_of_print }}</span>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                                Cloth Color
                                                <span class="badge badge-primary badge-pill bg-white" style="padding: 5px;border:1px solid black;"><span style="display:block;    height: 30px;width: 30px;" :style="{'background-color':props.product.color}"></span></span>
                                            </li>
                                        </ul>

                                        <p class="d-none">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
                                    </div>
                                    <div class="add-to-box1">
                                        <div class="add-to-box add-to-box2">
                                            <div class="add-to-cart">
                                                <div class="row" v-if="currentCart.isItemExist(props.product)">
                                                    <div class="col">
                                                        <div class="input-content" >
                                                            <label class="pt-2" for="qty">Qty:</label>
                                                            <input disabled :value="currentCart.getItem(props.product).qt" id="qty" class="input-text qty" type="text" name="qty" maxlength="12" title="Qty">
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="input-content" >
                                                            <label class="pt-2" for="cost">Cost:<span> *</span></label>
                                                            <input disabled :value="props.product.currency+' '+currentCart.getItem(props.product).qt * props.product.price" id="cost" class="input-text qty" type="text" name="qty" maxlength="12" title="Qty">
                                                        </div>
                                                    </div>
                                                    <div class="col-12 text-right">
                                                        <small>
                                                            *=Including Taxes
                                                        </small>
                                                    </div>
                                                </div>


                                                <div class="last-cart d-flex justify-content-center" style="width: 100%;">
                                                    <a v-if="currentCart.isItemExist(props.product)" v-on:click.prevent="currentCart.add(props.product,1)" class="last1 btn btn-black px-5"><i class="fa fa-plus" aria-hidden="true"></i></a>
                                                    <a v-if="!currentCart.isItemExist(props.product)" class="last1 btn btn-black px-4" href="#" v-on:click.prevent="currentCart.add(props.product)">Add To Cart</a>
                                                    <a v-if="currentCart.isItemExist(props.product)" v-on:click.prevent="currentCart.remove(props.product,1)" class="last1 btn btn-black px-5"><i class="fa fa-minus" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="stock2 d-none"><p class="availability in-stock2"> Availability:Accessories, Men </p></div>

                                </div>
                         </div><!-- .product-info -->
                        </div><!-- .modal-product -->
                    </div><!-- .modal-body -->
                </div><!-- .modal-content -->
            </div><!-- .modal-dialog -->
        </div>
        <!-- END Modal -->
    </div>
</template>

<script setup>

import {ref} from "vue";
import {manageCart} from "@/Lib/LaravelHelper";

const currentCart=manageCart();
const props=defineProps(
    {
        currentProduct:Object
    }
);

const currentProductQt=ref(1);

if(props.product!=null &&currentCart.getItem(props.product) !=null)currentProductQt.value=currentCart.getItem(props.product).qt;

</script>

<style scoped>

</style>
