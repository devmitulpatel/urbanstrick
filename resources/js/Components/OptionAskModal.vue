<template>
    <Modal
        :style="{'z-index': (isShow)?100:-1}"
        v-model="isShow"
        :close="closeModal"
    >
        <div >
            <div class="card">

                <div class="card-header">

                    <div class="d-flex justify-content-between">

                        <div>
                            <h5>Please Select Size & Quantity</h5>

                        </div>
                        <div class="btn las4 btn-outline-danger  btn-block" @click="closeModal">
                            <i class="fa fa-times"></i>
                        </div>

                    </div>

                </div>

                <div class="card-body">
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-6">
                            <img :src="asset('img/banner/tshirt_size.png')">
                        </div>

                        <div class="col-12 col-md-6 col-lg-6 ">

                            <div class="d-flex  flex-column justify-content-center h-full" style="height: 100%">



                                <div class="mb-2 border">
                                    <div class="d-flex ">
                                        <div>
                                            <img :src="props.product.thumbnail" style="max-height: 60px;">
                                        </div>
                                        <div class="align-self-center pl-2 w-full">
                                            <div class="d-flex flex-row justify-content-between">
                                                <div>
                                                    <strong>{{props.product.name}}</strong>
                                                </div>

                                                <div class="pr-2">
                                                    <div>
                                                        <small>{{currentQt}} x {{props.product.currency}} {{props.product.price}}</small>
                                                    </div>
                                                    <div>
                                                        <small>(sub total: {{props.product.currency}} {{props.product.price*currentQt}})</small>
                                                    </div>
                                                </div>

                                            </div>


                                        </div>

                                    </div>
                                </div>

                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">Qt.</span>
                                    </div>
                                    <input type="text" class="form-control" v-model="currentQt">
                                </div>

                                <div v-if="false" v-for="(option,k) in options" class="cursor-pointer">
                                    <div class="form-check" >
                                        <input
                                            :id="[option.value,k].join('_')"
                                            :value="option.value" v-model="selectedOption"
                                            class="form-check-input" type="radio" >
                                        <label
                                            :for="[option.value,k].join('_')"
                                            class="form-check-label" >
                                            {{ option.text }}
                                            <small v-if="currentCart.isItemExist(props.product,option.value)">
                                                (in cart: {{currentCart.getItem(props.product,option.value).qt}})
                                            </small>


                                        </label>
                                    </div>
                                </div>



                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button v-on:click="()=>selectedOption=option.value" v-for="(option,k) in options" type="button" class="btn " :class="{'btn-black':option.value==selectedOption,'btn-inactive':option.value!=selectedOption}">
                                            {{ option.text }}
                                            <small v-if="currentCart.isItemExist(props.product,option.value)">
                                                (in cart: {{currentCart.getItem(props.product,option.value).qt}})
                                            </small>
                                        </button>
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
                        <div class="btn las4 btn-black  btn-block" @click="addToCart">
                            Add to cart
                        </div>

                    </div>


                </div>

            </div>

        </div>
    </Modal>
</template>

<script>
export default {
    name: "OptionAskModal",
}
</script>

<script setup>
import {createErrorToast, manageCart, msHelper} from "@/Lib/LaravelHelper";
import {onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref, watch} from "vue";

const isShow=ref(false);

const cart=ref(manageCart().get());
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
    currentQt.value=1;
}

const addToCart=()=>{
    console.log(selectedOption.value);
    if(selectedOption.value==undefined || selectedOption.value==null || selectedOption.value==''){
        createErrorToast(['Please select size'].join(' '));
        isShow.value=true;
    }else {
        manageCart().add(props.product, currentQt.value,selectedOption.value);
        closeModal();
    }

}


const currentQt = ref(1);

const currentCart=manageCart();
const props=defineProps(
    {
        product:Object,
        options:Array,
        modelValue:String,
        isShow:Boolean,
      //  isShow:Boolean,
    }
);
const options=ref([]);

const selectedOption=ref();

watch(selectedOption, (currentValue) => {
    emit('update:modelValue',currentValue);
});
watch(isShow, (currentValue) => {

});
onBeforeMount(()=>{
    options.value=msHelper().getAllSize();
})
onBeforeUpdate(()=>{
    isShow.value=props.isShow;
})



</script>

<style scoped>

</style>
