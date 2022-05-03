"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97],{9018:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(821),r=["type"];const l={props:{type:{type:String,default:"submit"}},setup:function(e){return function(t,o){return(0,n.openBlock)(),(0,n.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"},[(0,n.renderSlot)(t.$slots,"default")],8,r)}}}},7887:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(821),r=["value"];const l={props:["modelValue"],emits:["update:modelValue"],setup:function(e){var t=(0,n.ref)(null);return(0,n.onMounted)((function(){t.value.hasAttribute("autofocus")&&t.value.focus()})),function(o,l){return(0,n.openBlock)(),(0,n.createElementBlock)("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:e.modelValue,onInput:l[0]||(l[0]=function(e){return o.$emit("update:modelValue",e.target.value)}),ref_key:"input",ref:t},null,40,r)}}}},1329:(e,t,o)=>{o.d(t,{Z:()=>c});var n=o(821),r={class:"block font-medium text-sm text-gray-700"},l={key:0},a={key:1};const c={props:["value"],setup:function(e){return function(t,o){return(0,n.openBlock)(),(0,n.createElementBlock)("label",r,[e.value?((0,n.openBlock)(),(0,n.createElementBlock)("span",l,(0,n.toDisplayString)(e.value),1)):((0,n.openBlock)(),(0,n.createElementBlock)("span",a,[(0,n.renderSlot)(t.$slots,"default")]))])}}}},5414:(e,t,o)=>{o.d(t,{Z:()=>s});var n=o(821),r=o(9038),l={key:0},a=(0,n.createElementVNode)("div",{class:"font-medium text-red-600"},"Whoops! Something went wrong.",-1),c={class:"mt-3 list-disc list-inside text-sm text-red-600"};const s={setup:function(e){var t=(0,n.computed)((function(){return(0,r.qt)().props.value.errors})),o=(0,n.computed)((function(){return Object.keys(t.value).length>0}));return function(e,r){return(0,n.unref)(o)?((0,n.openBlock)(),(0,n.createElementBlock)("div",l,[a,(0,n.createElementVNode)("ul",c,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)((0,n.unref)(t),(function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("li",{key:t},(0,n.toDisplayString)(e),1)})),128))])])):(0,n.createCommentVNode)("",!0)}}}},97:(e,t,o)=>{o.r(t),o.d(t,{default:()=>F});var n=o(821),r=o(9018),l=(o(3621),o(7887)),a=(o(1329),o(5414),o(9038)),c=o(3017),s=o(6486),u=o.n(s),i=o(4260),d=[(0,n.createElementVNode)("div",{class:"container"},[(0,n.createElementVNode)("div",{class:"row"},[(0,n.createElementVNode)("div",{class:"col-md-7 mx-auto text-center"},[(0,n.createElementVNode)("div",{class:"con-text"},[(0,n.createElementVNode)("h2",{class:"page-title"},[(0,n.createTextVNode)("Register "),(0,n.createElementVNode)("hr"),(0,n.createTextVNode)(" Get UrbanStrick Reward Membership")]),(0,n.createElementVNode)("small",null,"to manage your purchase, checkouts, rewards & many more interesting things . . .")])])])],-1)],m={class:"login-area"},p={class:"container"},f={class:"row"},V={class:"col-lg-7 mx-auto"},k={key:0,class:"tb-login-form res"},g={key:0,class:"tb-title"},E={key:1,class:"tb-title"},N={key:2},y={key:3,class:"text-success"},b=["onSubmit"],v={key:0,class:"checkout-coupon top log a-an"},h=(0,n.createElementVNode)("label",{class:"l-contact"},[(0,n.createTextVNode)(" Email Address "),(0,n.createElementVNode)("em",null,"*")],-1),w={key:0,class:"invalid-feedback"},B={key:1},x={class:"checkout-coupon top log a-an"},S=(0,n.createElementVNode)("label",{class:"l-contact"},[(0,n.createTextVNode)(" First Name "),(0,n.createElementVNode)("em",null,"*")],-1),_={class:"checkout-coupon top log a-an"},C=(0,n.createElementVNode)("label",{class:"l-contact"},[(0,n.createTextVNode)(" Last Name "),(0,n.createElementVNode)("em",null,"*")],-1),Z={class:"checkout-coupon top log a-an"},T=(0,n.createElementVNode)("label",{class:"l-contact"},[(0,n.createTextVNode)(" Password "),(0,n.createElementVNode)("em",null,"*")],-1),j={class:"checkout-coupon top log a-an"},O=(0,n.createElementVNode)("label",{class:"l-contact"},[(0,n.createTextVNode)(" Confirm Password "),(0,n.createElementVNode)("em",null,"*")],-1),U={class:"login-submit5"},P=(0,n.createElementVNode)("span",{class:"px-3"}," - or - ",-1),q=(0,n.createTextVNode)("Log in"),D=(0,n.createElementVNode)("div",{class:"tb-info-login"},[(0,n.createElementVNode)("h5",{class:"tb-title4"}," SignUp today and you'll be able to:"),(0,n.createElementVNode)("ul",null,[(0,n.createElementVNode)("li",null,"Speed your way through the checkout."),(0,n.createElementVNode)("li",null,"Track your orders easily."),(0,n.createElementVNode)("li",null,"Keep a record of all your purchases.")])],-1),R={key:1,class:"tb-login-form res"},A=[(0,n.createElementVNode)("h5",{class:"tb-title text-danger"},"Opps Link is expired. Please Contact our Support team.",-1)];const F={props:{site:Object,auth:Object,errors:Object,user:Object},setup:function(e){var t,o=e,s=null===(t=o.user)||void 0===t?void 0:t.hasOwnProperty("id"),F=(0,a.cI)({first_name:"",last_name:"",password:"",password_confirmation:"",terms:!1,email:""}),L=(0,n.ref)(!1),M=["img/slider/bg_slider1.jpg","img/slider/bg_slider22.jpg"];(0,n.onMounted)((function(){}));var z=function(){var e=s?route("createUserPassword",{user:o.user.id}):route("register");F.post(e,{preserveScroll:!0,preserveState:!0,onFinish:function(){F.reset("password","password_confirmation")},onSuccess:function(){s&&(L.value=!0),(0,i.nj)("Action taken successfully.")},onError:function(){(0,i.rv)("Opps.. Something went wrong.Please try again")}})};return function(e,t){return(0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(c.Z),{site:o.site,auth:o.auth},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(a.Fb),{title:"Register"}),(0,n.createElementVNode)("section",{class:"contact-img-area",style:(0,n.normalizeStyle)({"background-image":"url("+e.asset(u().sample(M))+")"})},d,4),(0,n.createElementVNode)("div",m,[(0,n.createElementVNode)("div",p,[(0,n.createElementVNode)("div",f,[(0,n.createElementVNode)("div",V,[null!=o.user&&o.user.is_password_set?((0,n.openBlock)(),(0,n.createElementBlock)("div",R,A)):((0,n.openBlock)(),(0,n.createElementBlock)("div",k,[(0,n.unref)(s)?((0,n.openBlock)(),(0,n.createElementBlock)("h5",E,"Set Password")):((0,n.openBlock)(),(0,n.createElementBlock)("h5",g,"Create a new account")),(0,n.unref)(s)?((0,n.openBlock)(),(0,n.createElementBlock)("p",y,"Your email ( "+(0,n.toDisplayString)(o.user.email)+") is verified successfully.",1)):((0,n.openBlock)(),(0,n.createElementBlock)("p",N,"Hello, Welcome your to account")),(0,n.createElementVNode)("form",{onSubmit:(0,n.withModifiers)(z,["prevent"])},[(0,n.unref)(s)?((0,n.openBlock)(),(0,n.createElementBlock)("span",B,[(0,n.createElementVNode)("p",x,[S,(0,n.createVNode)(l.Z,{type:"text",modelValue:(0,n.unref)(F).first_name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return(0,n.unref)(F).first_name=e}),required:"",autocomplete:"username"},null,8,["modelValue"])]),(0,n.createElementVNode)("p",_,[C,(0,n.createVNode)(l.Z,{type:"text",modelValue:(0,n.unref)(F).last_name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return(0,n.unref)(F).last_name=e}),required:"",autocomplete:"username"},null,8,["modelValue"])]),(0,n.createElementVNode)("p",Z,[T,(0,n.createVNode)(l.Z,{type:"password",modelValue:(0,n.unref)(F).password,"onUpdate:modelValue":t[3]||(t[3]=function(e){return(0,n.unref)(F).password=e}),required:"",autocomplete:"username"},null,8,["modelValue"])]),(0,n.createElementVNode)("p",j,[O,(0,n.createVNode)(l.Z,{type:"password",modelValue:(0,n.unref)(F).password_confirmation,"onUpdate:modelValue":t[4]||(t[4]=function(e){return(0,n.unref)(F).password_confirmation=e}),required:"",autocomplete:"username"},null,8,["modelValue"])])])):((0,n.openBlock)(),(0,n.createElementBlock)("p",v,[h,(0,n.createVNode)(l.Z,{class:(0,n.normalizeClass)({"is-invalid":e.hasError((0,n.unref)(F),"email")}),type:"email",modelValue:(0,n.unref)(F).email,"onUpdate:modelValue":t[0]||(t[0]=function(e){return(0,n.unref)(F).email=e}),required:"",autocomplete:"username"},null,8,["class","modelValue"]),e.hasError((0,n.unref)(F),"email")?((0,n.openBlock)(),(0,n.createElementBlock)("div",w,(0,n.toDisplayString)(e.getError((0,n.unref)(F),"email")),1)):(0,n.createCommentVNode)("",!0)])),(0,n.createElementVNode)("p",U,[(0,n.createVNode)(r.Z,{value:"geRegister",class:(0,n.normalizeClass)(["button-info btn btn-black",{"opacity-25":(0,n.unref)(F).processing}]),type:"submit",disabled:(0,n.unref)(F).processing},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(s?"Create Your Account":"Register"),1)]})),_:1},8,["class","disabled"]),P,(0,n.createVNode)((0,n.unref)(a.ZQ),{href:e.route("login",{email:(0,n.unref)(F).email}),class:"btn button-info btn-black"},{default:(0,n.withCtx)((function(){return[q]})),_:1},8,["href"])])],40,b),D]))])])])]),(0,n.createCommentVNode)("",!0)]})),_:1},8,["site","auth"])}}}}}]);