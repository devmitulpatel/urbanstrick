<template>

    <Modal
        :style="{'z-index': (isShow)?100:-1}"
        v-model="isShow"
        :close="closeModal"
    >
        <div class="col-12 col-md-4 col-lg-4 mx-auto">
            <div class="card">

                <div v-if="false" class="card-header">

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
                        <div class=" col-12 col-md-3 col-lg-3 mx-auto">
                            <div class="profile-avatar avatar-1">
                                {{ msHelper().getFirstOfAll([msHelper().auth().user().first_name,msHelper().auth().user().last_name]) }}
                            </div>
                        </div>

                    </div>




                </div>

                <div class="card-footer">

                    <div class="d-flex justify-content-between">

                        <a v-on:click.prevent="openAnotherPage(routes('user.dashboard.home'),'get')" method="get" as="div" class="btn las4 btn-info " >
                            My account
                        </a>

                        <div class="btn las4 btn-black btn-block col-6" @click="closeModal">
                            close
                        </div>
                        <a v-on:click.prevent="openAnotherPage(routes('logout'),'post')" method="post" as="div" class="btn  btn-block btn-danger las4 " >
                            Log out
                        </a>

                    </div>


                </div>

            </div>
        </div>

    </Modal>
</template>

<script>
export default {
    name: "ProfileModal",
}
</script>

<script setup>
import {createErrorToast,routes, createSuccessToast, manageCart, msHelper} from "@/Lib/LaravelHelper";
import {onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref, watch} from "vue";
import Table from "@/Components/Table";
import Input from "@/Components/Input";
import{InertiaLink} from "@inertiajs/inertia-vue3";
//import route from "ziggy-js";
import {Inertia} from "@inertiajs/inertia";

const isShow=ref(false);

const openAnotherPage=(url,type,data={},options={},autoCloseModal=true)=>{


    Inertia[type](url,data,options);
    if(autoCloseModal)closeModal();
}

const emit=defineEmits(
    [
        'update:modelValue',
        'update:isShow',
        'addProduct'
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


const copyUrl=async () => {
    let url = routes('product_page', {name: props.product.slug});

    console.log(url);
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

const getAvatarText=()=>{
    let user = msHelper().auth().user();
    let split
}


</script>

<style scoped>

.profile-avatar{
    border-radius: 50%;
    width: 6rem;
    height: 6rem;
    line-height: 6rem;
    font-size: 3rem;
    text-align:center;
    margin-right: auto!important;
    margin-left: auto!important;
}

.avatar-1{
    color:rgba(255,255,255,0.9);
    background: #B24592;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #F15F79, #B24592);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #F15F79, #B24592); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.avatar-2{
    color:rgba(255,255,255,0.9);
    background: #c2e59c;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #64b3f4, #c2e59c);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #64b3f4, #c2e59c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

</style>
