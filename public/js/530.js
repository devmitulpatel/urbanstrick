"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[530],{7232:(e,t,r)=>{r.d(t,{Z:()=>$});var o=r(821),n=r(7810),a=r(6976),l=r(9774),d=r(8348),c=r(6454),i=r(9038),s={class:"min-h-screen bg-gray-100"},u={class:"bg-white border-b border-gray-100"},m={class:"px-4 sm:px-6 lg:px-8"},h={class:"flex justify-between h-16"},f={class:"flex"},p={class:"shrink-0 flex items-center"},x={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},g=(0,o.createTextVNode)(" Dashboard "),N=(0,o.createTextVNode)(" Product "),V=(0,o.createTextVNode)(" Order "),v=(0,o.createTextVNode)(" Stock "),b={class:"hidden sm:flex sm:items-center sm:ml-6"},w={class:"ml-3 relative"},E={class:"inline-flex rounded-md"},k={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},y=(0,o.createElementVNode)("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[(0,o.createElementVNode)("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),C=(0,o.createTextVNode)(" Log Out "),B={class:"-mr-2 flex items-center sm:hidden"},Z={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},j={class:"pt-2 pb-3 space-y-1"},_=(0,o.createTextVNode)(" Dashboard "),T=(0,o.createTextVNode)(" Product "),S=(0,o.createTextVNode)(" Order "),M=(0,o.createTextVNode)(" Stock "),D={class:"pt-4 pb-1 border-t border-gray-200"},L=(0,o.createElementVNode)("div",{class:"px-4"},null,-1),O={class:"mt-3 space-y-1"},F=(0,o.createElementVNode)("div",{class:"rounded-md ring-1 ring-black ring-opacity-5 py-1 bg-white"},null,-1),z=(0,o.createTextVNode)(" Settings "),A=(0,o.createTextVNode)(" Log Out "),P={key:0,class:"bg-white shadow"},Q={class:"py-6 px-4 sm:px-6 lg:px-8"};const $={props:{site:Object,auth:Object},setup:function(e){var t=e,r=(0,o.ref)(!1);return function(e,$){return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createElementVNode)("div",s,[(0,o.createElementVNode)("nav",u,[(0,o.createElementVNode)("div",m,[(0,o.createElementVNode)("div",h,[(0,o.createElementVNode)("div",f,[(0,o.createElementVNode)("div",p,[(0,o.createVNode)((0,o.unref)(i.rU),{href:e.route("admin.dashboard.home")},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(n.Z,{class:"block h-9 w-auto"})]})),_:1},8,["href"])]),(0,o.createElementVNode)("div",x,[(0,o.createVNode)(d.Z,{href:e.route("admin.dashboard.home"),active:e.route().current("admin.dashboard.home")},{default:(0,o.withCtx)((function(){return[g]})),_:1},8,["href","active"]),(0,o.createVNode)(d.Z,{href:e.route("admin.dashboard.product"),active:e.route().current("admin.dashboard.product")},{default:(0,o.withCtx)((function(){return[N]})),_:1},8,["href","active"]),(0,o.createVNode)(d.Z,{href:e.route("admin.dashboard.order"),active:e.route().current("admin.dashboard.order")},{default:(0,o.withCtx)((function(){return[V]})),_:1},8,["href","active"]),(0,o.createVNode)(d.Z,{href:e.route("admin.dashboard.stock"),active:e.route().current("admin.dashboard.stock")},{default:(0,o.withCtx)((function(){return[v]})),_:1},8,["href","active"])])]),(0,o.createElementVNode)("div",b,[(0,o.createElementVNode)("div",w,[(0,o.createVNode)(a.Z,{align:"right",width:"48"},{trigger:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("span",E,[(0,o.createElementVNode)("button",k,[(0,o.createTextVNode)((0,o.toDisplayString)(t.auth.user.email)+" ",1),y])])]})),content:(0,o.withCtx)((function(){return[(0,o.createVNode)(l.Z,{href:e.route("logout"),method:"post",as:"button"},{default:(0,o.withCtx)((function(){return[C]})),_:1},8,["href"])]})),_:1})])]),(0,o.createElementVNode)("div",B,[(0,o.createElementVNode)("button",{onClick:$[0]||($[0]=function(e){return r.value=!r.value}),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[((0,o.openBlock)(),(0,o.createElementBlock)("svg",Z,[(0,o.createElementVNode)("path",{class:(0,o.normalizeClass)({hidden:r.value,"inline-flex":!r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),(0,o.createElementVNode)("path",{class:(0,o.normalizeClass)({hidden:!r.value,"inline-flex":r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),(0,o.createElementVNode)("div",{class:(0,o.normalizeClass)([{block:r.value,hidden:!r.value},"sm:hidden"])},[(0,o.createElementVNode)("div",j,[(0,o.createVNode)(c.Z,{href:e.route("admin.dashboard.home"),active:e.route().current("admin.dashboard.home")},{default:(0,o.withCtx)((function(){return[_]})),_:1},8,["href","active"]),(0,o.createVNode)(c.Z,{href:e.route("admin.dashboard.home"),active:e.route().current("admin.dashboard.home")},{default:(0,o.withCtx)((function(){return[T]})),_:1},8,["href","active"]),(0,o.createVNode)(c.Z,{href:e.route("admin.dashboard.home"),active:e.route().current("admin.dashboard.home")},{default:(0,o.withCtx)((function(){return[S]})),_:1},8,["href","active"]),(0,o.createVNode)(c.Z,{href:e.route("admin.dashboard.home"),active:e.route().current("admin.dashboard.home")},{default:(0,o.withCtx)((function(){return[M]})),_:1},8,["href","active"])]),(0,o.createElementVNode)("div",D,[L,(0,o.createElementVNode)("div",O,[F,(0,o.createVNode)(c.Z,{href:e.route("logout"),method:"post",as:"button"},{default:(0,o.withCtx)((function(){return[z]})),_:1},8,["href"]),(0,o.createVNode)(c.Z,{href:e.route("logout"),method:"post",as:"button",class:"bg-red-500"},{default:(0,o.withCtx)((function(){return[A]})),_:1},8,["href"])])])],2)]),e.$slots.header?((0,o.openBlock)(),(0,o.createElementBlock)("header",P,[(0,o.createElementVNode)("div",Q,[(0,o.renderSlot)(e.$slots,"header")])])):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("main",null,[(0,o.renderSlot)(e.$slots,"default")])])])}}}},3530:(e,t,r)=>{r.r(t),r.d(t,{default:()=>J});var o=r(821),n=r(7232),a=(r(8348),r(9038)),l={class:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"},d={class:"text-sm text-gray-700"},c=(0,o.createTextVNode)(" Showing "),i={class:"font-medium"},s=(0,o.createTextVNode)(" to "),u={class:"font-medium"},m=(0,o.createTextVNode)(" of "),h={class:"font-medium"},f=(0,o.createTextVNode)(" results "),p={class:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px","aria-label":"Pagination"},x=(0,o.createElementVNode)("span",{class:"sr-only"},"Previous",-1),g=(0,o.createElementVNode)("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,o.createElementVNode)("path",{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1),N=(0,o.createElementVNode)("span",{class:"sr-only"},"Next",-1),V=(0,o.createElementVNode)("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,o.createElementVNode)("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1);const v={props:{data:Object},setup:function(e){var t=e;return function(e,r){return(0,o.openBlock)(),(0,o.createElementBlock)("div",l,[(0,o.createElementVNode)("div",null,[(0,o.createElementVNode)("p",d,[c,(0,o.createElementVNode)("span",i,(0,o.toDisplayString)(t.data.from),1),s,(0,o.createElementVNode)("span",u,(0,o.toDisplayString)(t.data.to),1),m,(0,o.createElementVNode)("span",h,(0,o.toDisplayString)(t.data.total),1),f])]),(0,o.createElementVNode)("div",null,[(0,o.createElementVNode)("nav",p,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(t.data.links,(function(e,r){return(0,o.openBlock)(),(0,o.createElementBlock)("span",null,[0!=r&&r!=t.data.links.length-1?((0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(a.ZQ),{key:0,class:(0,o.normalizeClass)([{"bg-indigo-50 border-indigo-500 text-indigo-600":e.active},"bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"]),href:e.url,"aria-current":"page"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.label),1)]})),_:2},1032,["class","href"])):(0,o.createCommentVNode)("",!0),0==r?((0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(a.ZQ),{key:1,href:e.url,class:"relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"},{default:(0,o.withCtx)((function(){return[x,g]})),_:2},1032,["href"])):(0,o.createCommentVNode)("",!0),r==t.data.links.length-1?((0,o.openBlock)(),(0,o.createBlock)((0,o.unref)(a.ZQ),{key:2,href:e.url,class:"relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"},{default:(0,o.withCtx)((function(){return[N,V]})),_:2},1032,["href"])):(0,o.createCommentVNode)("",!0)])})),256)),(0,o.createCommentVNode)("",!0)])])])}}};var b={class:"sm:px-3 w-full"},w={class:"bg-white py-2 px-4 md:px-8 xl:px-10"},E={class:"sm:flex items-center justify-between"},k={class:"text-sm font-medium leading-none text-white"},y=(0,o.createStaticVNode)('<div class="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 cursor-pointer rounded"><p>Sort By:</p><select aria-label="select" class="focus:text-indigo-600 focus:outline-none bg-transparent ml-1"><option class="text-sm text-indigo-800">Latest</option><option class="text-sm text-indigo-800">Oldest</option><option class="text-sm text-indigo-800">Latest</option></select></div>',1),C={class:"mt-7 overflow-x-auto"},B={class:"w-full whitespace-nowrap"},Z={tabindex:"0",class:"focus:outline-none h-16 border border-gray-100 rounded"},j=(0,o.createElementVNode)("td",null,[(0,o.createElementVNode)("div",{class:"ml-5"},[(0,o.createElementVNode)("div",{class:"bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative"},[(0,o.createElementVNode)("input",{placeholder:"checkbox",type:"checkbox",class:"focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full"}),(0,o.createElementVNode)("div",{class:"check-icon hidden bg-indigo-700 text-white rounded-sm"},[(0,o.createElementVNode)("svg",{class:"icon icon-tabler icon-tabler-check",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[(0,o.createElementVNode)("path",{stroke:"none",d:"M0 0h24v24H0z"}),(0,o.createElementVNode)("path",{d:"M5 12l5 5l10 -10"})])])])])],-1),_={class:""},T={class:"flex items-center pl-5"},S={class:"text-base font-medium leading-none text-gray-700 mr-2"},M={class:"pl-5"},D={class:"flex items-center"},L=["src"],O={class:"pl-5"},F={class:"flex items-center"},z={class:"text-sm leading-none text-gray-600 ml-2"},A=(0,o.createElementVNode)("td",{class:"pl-4"},[(0,o.createElementVNode)("button",{class:"focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"},"View")],-1),P=(0,o.createElementVNode)("td",null,[(0,o.createElementVNode)("div",{class:"relative px-5 pt-2"},[(0,o.createElementVNode)("button",{class:"focus:ring-2 rounded-md focus:outline-none",onclick:"dropdownFunction(this)",role:"button","aria-label":"option"},[(0,o.createElementVNode)("svg",{class:"dropbtn",onclick:"dropdownFunction(this)",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none"},[(0,o.createElementVNode)("path",{d:"M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z",stroke:"#9CA3AF","stroke-width":"1.25","stroke-linecap":"round","stroke-linejoin":"round"}),(0,o.createElementVNode)("path",{d:"M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z",stroke:"#9CA3AF","stroke-width":"1.25","stroke-linecap":"round","stroke-linejoin":"round"}),(0,o.createElementVNode)("path",{d:"M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z",stroke:"#9CA3AF","stroke-width":"1.25","stroke-linecap":"round","stroke-linejoin":"round"})])]),(0,o.createElementVNode)("div",{class:"dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 hidden"},[(0,o.createElementVNode)("div",{tabindex:"0",class:"focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white"},[(0,o.createElementVNode)("p",null,"Edit")]),(0,o.createElementVNode)("div",{tabindex:"0",class:"focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white"},[(0,o.createElementVNode)("p",null,"Delete")])])])],-1),Q=(0,o.createElementVNode)("tr",{class:"h-3"},null,-1);const $={props:{data:Object,button:Array},setup:function(e){var t=e;return function(e,r){var n=(0,o.resolveComponent)("InertiaLink");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("div",b,[(0,o.createElementVNode)("div",w,[(0,o.createElementVNode)("div",E,[(0,o.createCommentVNode)("",!0),((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(t.button,(function(e){return(0,o.openBlock)(),(0,o.createBlock)(n,{href:e.url,class:"cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("p",k,(0,o.toDisplayString)(e.label),1)]})),_:2},1032,["href"])})),256)),y]),(0,o.createElementVNode)("div",C,[(0,o.createElementVNode)("table",B,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(t.data.data,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("tbody",null,[(0,o.createElementVNode)("tr",Z,[j,(0,o.createElementVNode)("td",_,[(0,o.createElementVNode)("div",T,[(0,o.createElementVNode)("p",S,(0,o.toDisplayString)(e.name),1)])]),(0,o.createElementVNode)("td",M,[(0,o.createElementVNode)("div",D,[(0,o.createElementVNode)("img",{src:e.thumbnail,style:{"max-height":"30px"}},null,8,L)])]),(0,o.createElementVNode)("td",O,[(0,o.createElementVNode)("div",F,[(0,o.createElementVNode)("p",z,(0,o.toDisplayString)([e.currency,e.price].join(" ")),1)])]),A,P]),Q])})),256))])])])]),(0,o.createVNode)((0,o.unref)(v),{data:t.data.meta},null,8,["data"])],64)}}};var H=(0,o.createElementVNode)("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Products ",-1),I={class:"py-5"},U={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},q={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},G={class:"p-3 bg-white border-b border-gray-200"};const J={props:{auth:Object,site:Object,product_data:Object},setup:function(e){var t=e,r=[{label:"Add Product",url:route("admin.dashboard.product.create")}];return function(e,l){return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)((0,o.unref)(a.Fb),{title:"Dashboard : Product"}),(0,o.createVNode)(n.Z,{auth:t.auth,site:t.site},{header:(0,o.withCtx)((function(){return[H]})),default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",I,[(0,o.createElementVNode)("div",U,[(0,o.createElementVNode)("div",q,[(0,o.createElementVNode)("div",G,[(0,o.createVNode)($,{button:r,data:t.product_data},null,8,["data"])])])])])]})),_:1},8,["auth","site"])],64)}}}}}]);