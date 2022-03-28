import { reactive,ref } from 'vue'


const globalCart=ref([]);

export const store = reactive({
    cart: globalCart,
    setCart:(cart)=>{
        globalCart.value=cart;
    },
    getCart:()=>{
       return  globalCart.value;
    }
})
