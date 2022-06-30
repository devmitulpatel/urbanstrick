<template>
    <form class="form-horizontal" @submit.prevent="addressSaved" v-if="isAddAddressOpened && false">
        <fieldset>
            <legend>Add new Address</legend>
            <div class="form-group required">
                <div class="row">
                    <label class="col-md-3 control-label">Plot no/Bloc No/ Building Name</label>
                    <div class="col-md-9">
                        <BreezeInput :class="{'is-invalid':hasError(addressForm,'line_1')}" v-model="addressForm.line_1" class="form-control" type="text" placeholder="Address line 1"></BreezeInput>
                        <BootstrapInputError  :form="addressForm" name="line_1"></BootstrapInputError>
                    </div>
                </div>
            </div>
            <div class="form-group required">
                <div class="row">
                    <label class="col-md-3 control-label">Landmark</label>
                    <div class="col-md-9">
                        <BreezeInput :class="{'is-invalid':hasError(addressForm,'line_2')}" v-model="addressForm.line_2" class="form-control" type="text" placeholder="Address line 2"></BreezeInput>
                        <BootstrapInputError  :form="addressForm" name="line_2"></BootstrapInputError>
                    </div>
                </div>
            </div>
            <div class="form-group required">
                <div class="row">
                    <label class="col-md-3 control-label">Area/Road Name</label>
                    <div class="col-md-9">
                        <BreezeInput :class="{'is-invalid':hasError(addressForm,'line_3')}" v-model="addressForm.line_3" class="form-control" type="text" placeholder="Address line 3"></BreezeInput>
                        <BootstrapInputError  :form="addressForm" name="line_3"></BootstrapInputError>
                    </div>
                </div>
            </div>
            <div class="form-group required">
                <div class="row">
                    <label class="col-md-3 control-label">Pincode</label>
                    <div class="col-md-9">
                        <BreezeInput :class="{'is-invalid':hasError(addressForm,'pincode')}" v-model="addressForm.pincode" class="form-control" type="text" placeholder="Pincode"></BreezeInput>
                        <BootstrapInputError  :form="addressForm" name="pincode"></BootstrapInputError>
                    </div>
                </div>
            </div>
            <div class="form-group required">
                <div class="row">
                    <label class="col-md-3 control-label">City</label>
                    <div class="col-md-9">
                        <BreezeInput :class="{'is-invalid':hasError(addressForm,'city')}" v-model="addressForm.city" class="form-control" type="text" placeholder="City"></BreezeInput>
                        <BootstrapInputError  :form="addressForm" name="city"></BootstrapInputError>
                    </div>
                </div>
            </div>
            <div class="form-group required">
                <div class="row">
                    <label class="col-md-3 control-label">State</label>
                    <div class="col-md-9">
                        <BreezeInput :class="{'is-invalid':hasError(addressForm,'state')}" v-model="addressForm.state" class="form-control" type="text" placeholder="State"></BreezeInput>
                        <BootstrapInputError  :form="addressForm" name="state"></BootstrapInputError>
                    </div>
                </div>
            </div>
        </fieldset>
        <div class="buttons clearfix">

            <div class="pull-right">

                <ClickableButton :form="addressForm" text="Add New Address" ></ClickableButton>
            </div>
        </div>
    </form>
    <h2>Address Book Entries</h2>
    <table class="table table-bordered table-hover">
        <tr v-if="msHelper().auth().user()!=null" v-for="(address,key) in msHelper().auth().user().addresses">
            <AddressRow :address="address" :data-key="key"></AddressRow>
        </tr>
    </table>
    <div class="buttons clearfix">

        <div class="pull-right">

            <div class="btn btn-primary ce5" v-on:click="addAddressToggle" v-if="!isAddAddressOpened">

                <div role="status">Add New Address</div>

            </div>
        </div>
    </div>

    <AddAddressModal v-model:is-show="isAddAddressOpened" :added-address="reloadAddress"></AddAddressModal>

</template>


<script setup>
import {createErrorToast, createSuccessToast, hasError, msHelper, routes} from "@/Lib/LaravelHelper";
import {useForm} from "@inertiajs/inertia-vue3";
import AddAddressModal from "@/Components/AddAddressModal";
import BreezeInput from "@/Components/Input";
import BootstrapInputError from "@/Components/BootstrapInputError";
import AddressRow from "@/Components/AddressRow";
import ClickableButton from "@/Components/ClickableButton";
import {ref} from "vue";
import { Inertia } from '@inertiajs/inertia';
const props =defineProps({

});

const reloadAddress=()=>{
    msHelper().auth().refresh();
}
const addressForm =useForm({
    line_1:'',
    line_2:'',
    line_3:'',
    pincode:'',
    city:'',
    state:'',
})
const isAddAddressOpened=ref(false);
const addressSaved=()=>{
    let url = routes('user.dashboard.addAddress',{user:msHelper().auth().user()});
    addressForm.post(url,{
        preserveState:true,
        preserveScroll:true,
        //  errorBag:'userError',
        onSuccess:()=> {
            addAddressToggle()
            createSuccessToast('Address added successfully.')
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

    })
    console.log("save");
}
const addAddressToggle=()=>{
    isAddAddressOpened.value=!isAddAddressOpened.value
}
</script>

<script>
export default {
    name: "AddressSection"
}
</script>

<style scoped>

</style>
