<template>

    <Modal
        :style="{'z-index': (isShow)?100:-1}"
        v-model="isShow"
        :close="closeModal"
    >
        <div id="quickview-wrapper"  >
            <!-- Modal -->
            <div class="modal fade show" style="display:block;" id="productModal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button v-on:click.prevent="closeModal" type="button" class="btn-close" ><span aria-hidden="true">&times;</span></button>
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

                                                        <div class="col-12 mb-2">
                                                               <span v-for="size in options">
                                                                    <span
                                                                        class="mr-2"
                                                                        v-if="currentCart.getItem(props.product,size.value)!=null" style="line-height: 15px;"
                                                                    ><span class="badge bg-theme" style="font-size: 75%;">{{size.text}} {{size.value.toUpperCase()}} [{{currentCart.getItem(props.product,size.value).qt}}] </span></span>
                                                                </span>
                                                        </div>

                                                        <div class="col">
                                                            <div class="input-content" >
                                                                <label class="pt-2" for="qty">Qty:</label>
                                                                <input disabled :value="getTotalCurrentProductNo()" id="qty" class="input-text qty" type="text" name="qty" maxlength="12" title="Qty">
                                                            </div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="input-content" >
                                                                <label class="pt-2" for="cost">Cost:<span> *</span></label>
                                                                <input disabled :value="props.product.currency+' '+getTotalCurrentProductNo() * props.product.price" id="cost" class="input-text qty" type="text" name="qty" maxlength="12" title="Qty">
                                                            </div>
                                                        </div>
                                                        <div class="col-12 text-right">
                                                            <small>
                                                                *=Including Taxes
                                                            </small>
                                                        </div>
                                                    </div>


                                                    <div class="last-cart d-flex justify-content-center" style="width: 100%;">
                                                        <a v-if="!currentCart.isItemExist(props.product)" class=" btn btn-black px-4" href="#" v-on:click.prevent="addToCart">Add To Cart</a>
                                                        <a v-if="currentCart.isItemExist(props.product)" v-on:click.prevent="addToCart" class=" btn btn-black px-5">Edit</a>
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
    </Modal>
</template>

<script>
export default {
    name: "ProductModal",
}
</script>

<script setup>
import {manageCart} from "@/Lib/LaravelHelper";
import {onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref, watch} from "vue";
import Table from "@/Components/Table";

const isShow=ref(false);

const emit=defineEmits(
    [
        'update:modelValue',
        'update:isShow',
        'addProduct',
    ]
);
const closeModal=()=>{
    //console.log("closer modal")
    isShow.value=false;
    emit('update:isShow',false);
}

const getTotalCurrentProductNo=()=>{
    let total=0
    for (var x in options.value){

        if(currentCart.getItem(props.product,options.value[x].value)!=null){
            total=total+currentCart.getItem(props.product,options.value[x].value).qt;
        }
    }
    return total;
}

const addToCart=()=>{
    emit('addProduct',props.product);
    closeModal();
}


const currentQt = ref(1);

const currentCart=manageCart();
const props=defineProps(
    {
        product:Object,
        isShow:Boolean
    }
);
const options=ref([]);

const selectedOption=ref();



onBeforeMount(()=>{
    options.value=[

        {
            text:'Small',
            value:'s'
        },
        {
            text:'Medium',
            value:'m'
        },
        {
            text:'Large',
            value:'l'
        },
        {
            text:'Extra Large',
            value:'xl'
        },
    ];
})
onBeforeUpdate(()=>{
    isShow.value=props.isShow;
})



</script>

<style scoped>

</style>
