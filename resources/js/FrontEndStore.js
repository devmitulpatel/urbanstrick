import { reactive,ref } from 'vue'
import axios from "axios";

const globalCart=ref([]);
const globalSite=ref({});
const globalAuth=ref(null);
const globalWish=ref([]);
export const store = reactive({
    cart: globalCart,
    site:globalSite,
    auth:globalAuth,

    setCart:(cart)=>{
        globalCart.value=cart;
        //console.log(globalAuth.value);
        //if(globalAuth.value!=null)
            //axios.post(route('update_cart'),{'items':cart});
    },
    getCart:()=>{
       return  globalCart.value;
    },
    setSiteRaw:(data)=>{
        globalSite.value=data;
    },
    setSite:(key,value=null)=>{
        globalSite.value[key]=value;
    },
    getSite:(key=null)=>{
        if(key!=null && key.hasOwnProperty(key)) return globalSite.value[key];
            return globalSite.value;
    },
    setAuth:(data) => {
        globalAuth.value = data;
    },
    getAuth:()=>{

        return globalAuth.value;
    },
    setWish:(data)=>{
        globalWish.value=data;
    },
    getWish:()=>{
        return globalWish.value;
    }
})
