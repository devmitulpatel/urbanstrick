import {createToast} from "mosha-vue-toastify";

function asset(path) {
    console.log()
    return [route('base'),path].join('/');
}

function callLink(number){
    return 'tel:'+number
}

function mailLink(email){
    return 'mailto:'+email
}

function createSuccessToast(text,timeout=5000,position='top-right',showIcon=true){
    createToast({title: text}, {type: 'success',timeout:timeout,position:position,showIcon:showIcon});

}
function createErrorToast(text,timeout=5000,position='top-right',showIcon=true){
    createToast({title: text}, {type: 'danger',timeout:timeout,position:position,showIcon:showIcon});
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

const cartLocalKey='cart';

import {store} from '@/FrontEndStore';


const cart={
    add:(product,qt=1,liveCart=null,resetQt=null)=>{
        let cart = getLocalData(cartLocalKey);
        if(cart.findIndex((ar)=>{

            return ar.product.id==product.id
        })==-1){
            let newCartProduct={
                product:product,
                qt:qt
            }
            cart.push(newCartProduct);
            createSuccessToast([product.name,'added to cart'].join(' '))

        }else {
          let foundIndex=cart.findIndex((ar)=>{
              return ar.product.id==product.id
          });
          cart[foundIndex].qt=cart[foundIndex].qt+qt;
          createSuccessToast([product.name,'quantity updated to',cart[foundIndex].qt].join(' '))
        }
        setLocalData(cartLocalKey,cart);
        store.setCart(cart);
        // if(liveCart!=null)liveCart.value=cart;
        if(resetQt!=null)resetQt.value=1;
    },
    remove:(product,qt=null,liveCart=null,resetQt=null)=>{
        let cart = getLocalData(cartLocalKey);
        let foundIndex=cart.findIndex((ar)=>{

            return ar.product.id==product.id
        });
        if(foundIndex!=-1){
            cart.splice(foundIndex,1);
        }
        store.setCart(cart);
        setLocalData(cartLocalKey,cart);
        // if(liveCart!=null)liveCart.value=cart;
        createSuccessToast([product.name,'removed from cart'].join(' '))
    },
    get(){
        let existingCart=getLocalData(cartLocalKey);
        if (existingCart!=null && existingCart.length>0)store.setCart(existingCart);
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
        return store.getCart()[0].product.currency
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
    }
}

export {
    asset,callLink,mailLink,createSuccessToast,createErrorToast,hasError,getError,setLocalData,getLocalData,hasLocalData,manageCart,
    getUpperPrice,getDiscountPercentage
}
