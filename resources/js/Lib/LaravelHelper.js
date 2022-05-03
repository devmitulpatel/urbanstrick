import {createToast} from "mosha-vue-toastify";

const cartLocalKey='cart';
import {store} from '@/FrontEndStore';
//import {debounce} from "lodash/function";
import route from "ziggy-js";
import {Ziggy} from "@/ziggy";


function routes(name, params, absolute, config = Ziggy){
    return route(name, params, absolute, config);
}

function asset(path) {

    return [routes('base'),path].join('/');
}

function callLink(number){
    return 'tel:'+number
}

function mailLink(email){
    return 'mailto:'+email
}
const _ = require('lodash');
function createSuccessToast(text,timeout=5000,position='bottom-center',showIcon=true){

   const createToastFinally= _.throttle(()=>{
        createToast({title: text}, {type: 'success',timeout:timeout,position:position,showIcon:showIcon});
   },1000,{});

    createToastFinally();


}
function createErrorToast(text,timeout=5000,position='bottom-center',showIcon=true){
    const createToastFinally= _.throttle(()=> {
        createToast({title: text}, {type: 'danger', timeout: timeout, position: position, showIcon: showIcon});
    },1000,{});
    createToastFinally();
}

function hasError(form,name){
    return form.errors.hasOwnProperty(name);
}

function getError(form,name){
    return form.errors[name];
}

const localStorageKey='urbanstrick';
const defaultLocalStorage={};
function setUpBasicLocalData(){
    if(localStorage.getItem(localStorageKey)==null || localStorage.getItem(localStorageKey)==undefined)localStorage.setItem(localStorageKey,JSON.stringify(defaultLocalStorage));
}
function setLocalData(key,value){
    setUpBasicLocalData();
    let currentData=JSON.parse(localStorage.getItem(localStorageKey));
    currentData[key]=value;
    //console.log(currentData);
    localStorage.setItem(localStorageKey,JSON.stringify(currentData));
}

function getLocalData(key){
    setUpBasicLocalData();
    let currentData=JSON.parse(localStorage.getItem(localStorageKey));
    return currentData[key];
}

function hasLocalData(key){
    setUpBasicLocalData();
    let currentData=JSON.parse(localStorage.getItem(localStorageKey));
    return currentData[key]!=null&&currentData[key]!=undefined;
}

function manageCart(){
    return cart
}


const getUpperPrice=(price)=>{
    return(price==799)?1099:1299;
}

const getDiscountPercentage=(price)=>{
    return(price==799)?27:23;
}


const msHelper=()=>{

    let allSizeAvailable=[

        {
            text:'Small (S)',
            value:'s'
        },
        {
            text:'Medium (M)',
            value:'m'
        },
        {
            text:'Large (L)',
            value:'l'
        },
        {
            text:'Extra Large (XL)',
            value:'xl'
        },
        {
            text:'Extra Double Large (2XL)',
            value:'xxl'
        },
    ];

    return {
        getYear() {
            var d = new Date();
            return d.getFullYear();
        },
        currentUserHasAddress:()=>{
            let user= store.getAuth()
            if(user==null)return false;
          // if (user.add)

        },
        auth:()=> {
            return {
                user:()=>{
                    return store.getAuth();
                },
                check:()=>{
                   // console.log(store.getAuth());
                    return store.getAuth()!=null && store.getAuth().hasOwnProperty('id')
                },
                login:(user)=>{
                    store.setAuth(user);
                },
                logout:()=>{
                    store.setAuth(null);
                },
                wished:()=>{
                    return store.getWish();
                },
                setRawWished:(data)=>{
                    store.setWish(data);
                }


            }
        },
        allSize:()=>{
            return ['s','m','l','xl','2xl'];
        },
        getAllSize:()=>{
            return allSizeAvailable
        },
        getSize:(size)=>{
            return allSizeAvailable.find((ar)=>{

                return ar.value == size
            })
        },
        getFirstOfAll:(array)=>{
            let returnArray=[];

            for (let i in array){
                returnArray.push(array[i].charAt(0).toUpperCase())
            }

            return returnArray.join('');
    }
    }
}
// function msHelper(){
//     return {
//         getYear:() => {
//             var d = new Date();
//             return d.getFullYear();
//         }
//     }
//
// };

const findItem=(product,size=null)=>{
   // console.log(size);
    return  cart.get().findIndex((ar) => {
        if(size!=null)return ar.product.id == product.id && ar.size == size;
        return ar.product.id == product.id
    });
}

const findItemAll=(product,size=null)=>{

    return cart.get().filter((ar) => {
        if(size!=null)return ar.product.id == product.id && ar.size == size;
        return ar.product.id == product.id
    });
}

const cart={
    add:(product,qt=1,size='m')=>{
        let maxLimit=3;
        let cart = getLocalData(cartLocalKey);
        if(cart.findIndex((ar)=>{
            if(size!=null)return ar.product.id == product.id && ar.size == size;
            return ar.product.id == product.id
        })==-1){

            if(qt>maxLimit){
                qt=maxLimit;
                createErrorToast(['you can add max',maxLimit,'per product per size'].join(' '))
            }

            let newCartProduct={
                product:product,
                qt:qt,
                size:size
            }
                cart.push(newCartProduct);
                createSuccessToast([product.name,'added to cart'].join(' '))



        }else {
          let foundIndex=cart.findIndex((ar)=>{
              return ar.product.id==product.id
          });


            if(cart[foundIndex].qt+qt>maxLimit){
                createErrorToast([product.name,'is already in cart , you can add max', maxLimit,'pics in cart'].join(' '))
                if(cart[foundIndex].qt<maxLimit && qt>maxLimit){
                    cart[foundIndex].qt=maxLimit;
                }
            }else {
                cart[foundIndex].qt=cart[foundIndex].qt+qt;
                createSuccessToast([product.name, 'quantity updated to', cart[foundIndex].qt].join(' '))
            }
        }
        setLocalData(cartLocalKey,cart);
        store.setCart(cart);
        // if(liveCart!=null)liveCart.value=cart;
       // if(resetQt!=null)resetQt.value=1;
    },
    remove:(product,qt=null)=>{
        let cart = getLocalData(cartLocalKey);
        let foundIndex=findItem(product);
        if(foundIndex!=-1){

            if (qt!=null && qt>0){
                cart[foundIndex].qt=cart[foundIndex].qt-1;

                if(cart[foundIndex].qt<1) {
                    cart.splice(foundIndex, 1)
                    createSuccessToast([product.name,'removed from cart'].join(' '))
                }else {
                    createSuccessToast([product.name,'quantity updated to',cart[foundIndex].qt].join(' '))
                }

            }else {
                cart.splice(foundIndex,1)
                createSuccessToast([product.name,'removed from cart'].join(' '))
            }
            store.setCart(cart);
            setLocalData(cartLocalKey,cart);
            // if(liveCart!=null)liveCart.value=cart;

        }

    },
    get(){
        let existingCart=getLocalData(cartLocalKey);
        if (existingCart!=null && existingCart.length>0 && store.getCart().length<1)store.setCart(existingCart);
        return store.getCart();
    },
    getTotal(){
        let cart= store.getCart();
        let total=0;
        let currency='₹';
        for(let x in cart){
            if(x==0)currency=cart[x].product.currency
            total=total+(cart[x].product.price*cart[x].qt);
        }
        return [currency,total].join(' ');
    },
    getCurrency(){
        return  '₹';//store.getCart()[0].product.currency
    },
    getTotalRaw(){
        let cart= store.getCart();
        let total=0;
        for(let x in cart){
            total=total+(cart[x].product.price*cart[x].qt);
        }
        return total;
    },
    getItemNo(){
        return store.getCart().length;
    },
    isItemExist(product,size=null) {
        return findItem(product,size) != -1
    },
    getItem(product,size=null){
        return cart.get()[findItem(product,size)];
    },

    getItemTotalQt(product,size=null){
        let foundItems=findItemAll(product,size);
        let total = 0 ;

        for(var i in foundItems) {
            console.log(foundItems[i].product.name);
            total = total + foundItems[i].qt;
        }
        console.log(total);
        return total;
    },


}




export {
    routes,asset,callLink,mailLink,createSuccessToast,createErrorToast,hasError,getError,setLocalData,getLocalData,hasLocalData,manageCart,getUpperPrice,getDiscountPercentage,msHelper
}
