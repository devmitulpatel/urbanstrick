<template>

    <Modal
        :style="{'z-index': (isShow)?100:-1}"
        v-model="isShow"
        :close="closeModal"
    >
        <div class="col-12 col-md-6  col-lg-6 mx-auto">
            <div class="card">

                <div class="card-header">

                    <div class="d-flex justify-content-between">

                        <div class="w-full">
                            <h5>Share</h5>

                        </div>
                        <div class="btn las4 btn-outline-danger  btn-block" @click="closeModal">
                            <i class="fa fa-times"></i>
                        </div>

                    </div>

                </div>

                <div class="card-body" >
                    <div class="row">
                        <div class=" my-2">
                            Share {{ props.product.name }} on with your friends & family
                        </div>

                        <div class="d-flex my-2  justify-content-between">


                        <span v-for="(link,key) in props.product.share">
                            <a :href="link" class="btn btn-black mx-2" target="_blank">
                                <i :class="'fa fa-'+key"></i>
                            </a>
                        </span>
                        </div>
                        <div class=" text-center my-2">
                            or
                        </div>
                        <div class=" mx-auto my-2 text-center">

                            <div class="input-group mb-3">
                                <input type="text" class="form-control" :value="(props.product!=null)?route('product_page',{name:props.product.slug}):''" readonly>
                                <div class="input-group-append">
                                <span class="input-group-text">

                                       <div v-on:click="copyUrl" class="btn btn-black btn-black">
                            Copy link to clipboard
                        </div>

                                </span>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>

                <div class="card-footer">

                    <div class="d-flex justify-content-between">

                        <div class="btn las4 btn-black btn-block" @click="closeModal">
                            close
                        </div>

                    </div>


                </div>

            </div>
        </div>

    </Modal>
</template>

<script>
export default {
    name: "ShareModal",
}
</script>

<script setup>
import {createSuccessToast, manageCart, routes} from "@/Lib/LaravelHelper";
import {onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref, watch} from "vue";
import Table from "@/Components/Table";
import Input from "@/Components/Input";
import route from "ziggy-js";

const isShow=ref(false);

const emit=defineEmits(
    [
        'update:modelValue',
        'update:isShow',
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


const currentCart=manageCart();
const props=defineProps(
    {
        product:Object,
        isShow:Boolean
    }
);
const options=ref([]);

const selectedOption=ref();


const copyUrl=async () => {
    let url = routes('product_page', {name: props.product.slug});
    navigator.clipboard.writeText(url).then(function() {
        createSuccessToast('Link has been copied to your clipboard')
    });

}

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
