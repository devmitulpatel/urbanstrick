<template>

    <Modal
        :style="{'z-index': (isShow)?100:-1}"
        v-model="isShow"
        :close="closeModal"
    >
        <div class="col-12 col-md-9 col-lg-9 mx-auto">
            <form class="my-3" v-on:submit.prevent="addAddressToServer">



            <div class="card">

                <div  class="card-header">

                    <div class="d-flex justify-content-between">

                        <div class="w-full">
                            <h5>Add New Address</h5>

                        </div>
                        <div class="btn las4 btn-outline-danger  btn-block" @click="closeModal">
                            <i class="fa fa-times"></i>
                        </div>

                    </div>

                </div>

                <div class="card-body" >

                    <div class="d-flex flex-wrap justify-content-between w-full">
                        <div class="form-group required w-full">
                                <label class="control-label">Plot no/Bloc No/ Building Name</label>
                                <div class="">
                                    <input :class="{'is-invalid':hasError(addressForm,'line_1')}" v-model="addressForm.line_1" class="form-control" type="text" placeholder="Address line 1">
                                    <BootstrapInputError  :form="addressForm" name="line_1"></BootstrapInputError>
                                </div>
                        </div>

                    </div>

                    <div class="d-flex  flex-wrap justify-content-between w-full">
                        <div class="form-group required col-12 col-md-5 col-lg-5">

                                <label class=" control-label">Landmark</label>
                                <div class="">
                                    <input :class="{'is-invalid':hasError(addressForm,'line_2')}" v-model="addressForm.line_2" class="form-control" type="text" placeholder="Address line 2">
                                    <BootstrapInputError  :form="addressForm" name="line_2"></BootstrapInputError>
                                </div>

                        </div>
                        <div class="form-group required col-12 col-md-6 col-lg-6">
                            <div class="row">
                                <label class="control-label">Area/Road Name</label>
                                <div class="">
                                    <input :class="{'is-invalid':hasError(addressForm,'line_3')}" v-model="addressForm.line_3" class="form-control" type="text" placeholder="Address line 3">
                                    <BootstrapInputError  :form="addressForm" name="line_3"></BootstrapInputError>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex  flex-wrap justify-content-between w-full">

                        <div class="form-group required col-12 col-md-3 col-lg-3">

                                <label class=" control-label">Pincode</label>

                                    <input :class="{'is-invalid':hasError(addressForm,'pincode') ,'form-control':true}" v-model="addressForm.pincode" type="text" placeholder="Pincode" >
                                    <BootstrapInputError  :form="addressForm" name="pincode"></BootstrapInputError>


                        </div>
                        <div class="form-group required col-12 col-md-3 col-lg-3">

                                <label class=" control-label">City</label>
                                <div class="">
                                    <input :class="{'is-invalid':hasError(addressForm,'city')}" v-model="addressForm.city" class="form-control" type="text" placeholder="City">
                                    <BootstrapInputError  :form="addressForm" name="city"></BootstrapInputError>
                                </div>

                        </div>
                        <div class="form-group required col-12 col-md-4 col-lg-4">

                                <label class="control-label">State</label>
                                <div class="">
                                    <input :class="{'is-invalid':hasError(addressForm,'state')}" v-model="addressForm.state" class="form-control" type="text" placeholder="State">
                                    <BootstrapInputError  :form="addressForm" name="state"></BootstrapInputError>
                                </div>
                            </div>


                    </div>





                        <div class="text-center my-4">

                        </div>



                </div>

                <div class="card-footer">

                    <div class="d-flex justify-content-around">

                        <div class="btn las4 btn-black btn-block col-6" @click="closeModal">
                            close
                        </div>

                        <button type="submit" value="Save" class="btn btn-primary btn-lg ce5 btn-block w-full">
                            <div v-if="addressForm.processing" class="spinner-border loading" role="status"></div>
                            <div v-else  role="status">Add address</div>
                        </button>


                    </div>


                </div>

            </div>

        </form>
        </div>

    </Modal>
</template>

<script>
export default {
    name: "AddAddressModal",
}
</script>

<script setup>
import {createErrorToast,routes, createSuccessToast, manageCart, msHelper} from "@/Lib/LaravelHelper";
import {onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref, watch} from "vue";
import Table from "@/Components/Table";
import Input from "@/Components/Input";
import {InertiaLink, useForm} from "@inertiajs/inertia-vue3";
//import route from "ziggy-js";
import {Inertia} from "@inertiajs/inertia";

const isShow=ref(false);

const openAnotherPage=(url,type,data={},options={},autoCloseModal=true)=>{


    Inertia[type](url,data,options);
    if(autoCloseModal)closeModal();
}

const addressForm=useForm('addressForm',{
    line_1:'',
    line_2:'',
    line_3:'',
    city:'',
    state:'',
    pincode:'',
});
const emit=defineEmits(
    [
        'update:modelValue',
        'update:isShow',
        'addedAddress'
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
const addAddressToServer= () => {
    let url = routes('dashboard.addAddress',{user:msHelper().auth().user()});
    addressForm.post(url,{
        preserveState:true,
        preserveScroll:true,
        //  errorBag:'userError',
        onSuccess:()=> {
            addressForm.reset();
            closeModal()
            createSuccessToast('Address added successfully.');
            emit('addedAddress');
        },
        onError:()=> {

            let hasErrorInForm= false;
            let form=addressForm;
            if(
                hasError(form,'line_1') ||
                hasError(form,'line_2') ||
                hasError(form,'line_3') ||
                hasError(form,'pincode') ||
                hasError(form,'city') ||
                hasError(form,'state')
            )hasErrorInForm=true;

            if(hasErrorInForm)createErrorToast('Opps.. Something went wrong.Please try again');


        }

    });
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
