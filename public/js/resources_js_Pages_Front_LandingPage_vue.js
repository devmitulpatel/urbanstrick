(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Front_LandingPage_vue"],{

/***/ "./node_modules/.pnpm/babel-loader@8.2.4_acba72ea4bf9d339cdfcd8f55cdb7006/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/ProductModel.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/babel-loader@8.2.4_acba72ea4bf9d339cdfcd8f55cdb7006/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/ProductModel.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/.pnpm/vue@3.2.31/node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _Lib_LaravelHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Lib/LaravelHelper */ "./resources/js/Lib/LaravelHelper.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    currentProduct: Object
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var currentCart = (0,_Lib_LaravelHelper__WEBPACK_IMPORTED_MODULE_1__.manageCart)();
    var currentProductQt = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1);
    if (props.product != null && currentCart.getItem(props.product) != null) currentProductQt.value = currentCart.getItem(props.product).qt;
    var __returned__ = {
      currentCart: currentCart,
      props: props,
      currentProductQt: currentProductQt,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      manageCart: _Lib_LaravelHelper__WEBPACK_IMPORTED_MODULE_1__.manageCart
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/.pnpm/babel-loader@8.2.4_acba72ea4bf9d339cdfcd8f55cdb7006/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Front/LandingPage.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/babel-loader@8.2.4_acba72ea4bf9d339cdfcd8f55cdb7006/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Front/LandingPage.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_FrontEnd_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/FrontEnd.vue */ "./resources/js/Layouts/FrontEnd.vue");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/.pnpm/@inertiajs+inertia-vue3@0.6.0_91b43248bdff72beadf7eb88a4aefff2/node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Components_ProductModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/ProductModel */ "./resources/js/Components/ProductModel.vue");
/* harmony import */ var _Lib_nivoslider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Lib/nivoslider */ "./resources/js/Lib/nivoslider.js");
/* harmony import */ var _Lib_nivoslider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Lib_nivoslider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Lib_nivo_slider_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Lib/nivo-slider.css */ "./resources/js/Lib/nivo-slider.css");
/* harmony import */ var _Lib_preview_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Lib/preview.css */ "./resources/js/Lib/preview.css");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ "./node_modules/.pnpm/vue@3.2.31/node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _Lib_LaravelHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Lib/LaravelHelper */ "./resources/js/Lib/LaravelHelper.js");
/* harmony import */ var _FrontEndStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/FrontEndStore */ "./resources/js/FrontEndStore.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/.pnpm/jquery@3.6.0/node_modules/jquery/dist/jquery.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");

var __default__ = {
  // Using the shorthand
  layout: _Layouts_FrontEnd_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
};
 //import carousel from 'vue-owl-carousel';

 // import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  props: {
    topProduct: Object,
    specialProduct: Object,
    mostView: Object,
    site: Object,
    auth: Object,
    canlogin: Boolean
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var currentProduct = (0,vue__WEBPACK_IMPORTED_MODULE_6__.ref)({});
    var currentProductQt = (0,vue__WEBPACK_IMPORTED_MODULE_6__.ref)(1);
    var currentCartData = (0,vue__WEBPACK_IMPORTED_MODULE_6__.ref)([]);

    var setCurrentProduct = function setCurrentProduct(product) {
      currentProduct.value = null;
      currentProduct.value = product;
    };

    var addProduct = function addProduct(product) {
      $('.btn-close').trigger('click');
      currentCart.add(product, currentProductQt.value, currentCartData, currentProductQt);
    };

    var getUpperPrice = function getUpperPrice(price) {
      return price == 799 ? 1099 : 1299;
    };

    var getDiscountPercentage = function getDiscountPercentage(price) {
      return price == 799 ? 27 : 23;
    };

    var currentCart = (0,_Lib_LaravelHelper__WEBPACK_IMPORTED_MODULE_7__.manageCart)();
    (0,vue__WEBPACK_IMPORTED_MODULE_6__.onMounted)(function () {
      (0,_Lib_LaravelHelper__WEBPACK_IMPORTED_MODULE_7__.msHelper)().auth().login(props.auth.user); // console.log(store);
      // $('.landing-slider').owlCarousel({
      //     items:1,
      //     center:true,
      //    // autoWidth:true,
      //     loop:true,
      //     URLhashListener:true,
      //     nav:false,
      //     slideBy:true,
      //     lazyLoad:true,
      //     autoplay:false,
      //     responsive: {
      //         0: {
      //             items: 1
      //         },
      //         576: {
      //             items: 1
      //         },
      //         768: {
      //             items: 1
      //         },
      //         992: {
      //             items: 1
      //         },
      //         1200: {
      //             items: 1
      //         }
      //     },
      //     dots:false
      //
      // });

      if (process.browser) {
        $('#jquery-slider-demo').nivoSlider({
          lazyLoad: true,
          autoplay: true,
          loop: true,
          effect: 'random',
          slices: 35,
          boxCols: 12,
          boxRows: 12,
          animSpeed: 500,
          pauseTime: 500,
          startSlide: 0,
          directionNav: true,
          controlNavThumbs: true,
          pauseOnHover: true,
          manualAdvance: true
        });
        $('#ensign-nivoslider').nivoSlider({
          effect: 'random',
          slices: 15,
          boxCols: 8,
          boxRows: 4,
          animSpeed: 500,
          pauseTime: 5000,
          startSlide: 0,
          directionNav: true,
          controlNavThumbs: false,
          pauseOnHover: false,
          manualAdvance: true
        });
        $('#ensign-nivoslider-2').nivoSlider({
          effect: 'random',
          slices: 15,
          boxCols: 8,
          boxRows: 4,
          animSpeed: 500,
          pauseTime: 5000,
          startSlide: 0,
          directionNav: true,
          controlNavThumbs: false,
          pauseOnHover: true,
          manualAdvance: true
        });
      }

      currentCartData.value = currentCart.get(); //  console.log("sdasds");
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_6__.onUpdated)(function () {
      (0,_Lib_LaravelHelper__WEBPACK_IMPORTED_MODULE_7__.msHelper)().auth().login(props.auth.user);
    }); // const asset=(path)=>{
    //     return [route('base'),path].join('/');
    // }

    var vfOptions = (0,vue__WEBPACK_IMPORTED_MODULE_6__.ref)({
      autoplay: true
    });
    var vfImages = (0,vue__WEBPACK_IMPORTED_MODULE_6__.ref)(['img/slider/bg_slider1.jpg', 'img/slider/bg_slider22.jpg']);
    var vfTransitions = (0,vue__WEBPACK_IMPORTED_MODULE_6__.ref)(['fade', 'cube', 'book', 'wave']);
    var vfCaptions = (0,vue__WEBPACK_IMPORTED_MODULE_6__.ref)(['Caption for image 1', 'Caption for image 2', 'Caption for image 3']);
    var __returned__ = {
      currentProduct: currentProduct,
      currentProductQt: currentProductQt,
      currentCartData: currentCartData,
      setCurrentProduct: setCurrentProduct,
      addProduct: addProduct,
      getUpperPrice: getUpperPrice,
      getDiscountPercentage: getDiscountPercentage,
      currentCart: currentCart,
      props: props,
      vfOptions: vfOptions,
      vfImages: vfImages,
      vfTransitions: vfTransitions,
      vfCaptions: vfCaptions,
      FrontEndLayout: _Layouts_FrontEnd_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      Head: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Head,
      InertiaLink: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.InertiaLink,
      usePage: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.usePage,
      ProductModel: _Components_ProductModel__WEBPACK_IMPORTED_MODULE_2__["default"],
      onBeforeMount: vue__WEBPACK_IMPORTED_MODULE_6__.onBeforeMount,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_6__.onMounted,
      onUpdated: vue__WEBPACK_IMPORTED_MODULE_6__.onUpdated,
      ref: vue__WEBPACK_IMPORTED_MODULE_6__.ref,
      manageCart: _Lib_LaravelHelper__WEBPACK_IMPORTED_MODULE_7__.manageCart,
      msHelper: _Lib_LaravelHelper__WEBPACK_IMPORTED_MODULE_7__.msHelper,
      store: _FrontEndStore__WEBPACK_IMPORTED_MODULE_8__.store
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/.pnpm/babel-loader@8.2.4_acba72ea4bf9d339cdfcd8f55cdb7006/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/ProductModel.vue?vue&type=template&id=4fe7eb76":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/babel-loader@8.2.4_acba72ea4bf9d339cdfcd8f55cdb7006/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/ProductModel.vue?vue&type=template&id=4fe7eb76 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/.pnpm/vue@3.2.31/node_modules/vue/dist/vue.esm-bundler.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


var _hoisted_1 = {
  key: 0,
  id: "quickview-wrapper"
};
var _hoisted_2 = {
  "class": "modal fade",
  id: "productModal",
  tabindex: "-1",
  role: "dialog"
};
var _hoisted_3 = {
  "class": "modal-dialog",
  role: "document"
};
var _hoisted_4 = {
  "class": "modal-content"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "btn-close",
  "data-bs-dismiss": "modal",
  "aria-label": "Close"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "aria-hidden": "true"
}, "×")])], -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "modal-body"
};
var _hoisted_7 = {
  "class": "modal-product"
};
var _hoisted_8 = {
  key: 0,
  "class": "product-images"
};
var _hoisted_9 = {
  "class": "main-image images",
  style: {
    "max-height": "70vh"
  }
};
var _hoisted_10 = ["src"];
var _hoisted_11 = {
  "class": "cras row"
};
var _hoisted_12 = {
  "class": "col-12 col-md-4 col-lg-4"
};
var _hoisted_13 = {
  "class": ""
};
var _hoisted_14 = {
  "class": "",
  style: {
    "max-height": "70vh"
  }
};
var _hoisted_15 = ["src"];
var _hoisted_16 = {
  "class": "col-12 col-md-8 col-lg-8"
};
var _hoisted_17 = {
  "class": "product-name"
};
var _hoisted_18 = {
  "class": "tb-product-price font-noraure-3"
};
var _hoisted_19 = {
  "class": "amount"
};
var _hoisted_20 = {
  "class": "amount2 ana"
};
var _hoisted_21 = {
  "class": "short-description"
};
var _hoisted_22 = {
  "class": "list-group py-3"
};
var _hoisted_23 = {
  "class": "list-group-item d-flex justify-content-between align-items-center"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Type of Fabric ");

var _hoisted_25 = {
  "class": "badge badge-primary bg-info badge-pill"
};
var _hoisted_26 = {
  "class": "list-group-item d-flex justify-content-between align-items-center"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Type of Print ");

var _hoisted_28 = {
  "class": "badge badge-primary bg-warning badge-pill"
};
var _hoisted_29 = {
  "class": "list-group-item d-flex justify-content-between align-items-center"
};

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Cloth Color ");

var _hoisted_31 = {
  "class": "badge badge-primary badge-pill bg-white",
  style: {
    "padding": "5px",
    "border": "1px solid black"
  }
};

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "d-none"
}, "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.", -1
/* HOISTED */
);

var _hoisted_33 = {
  "class": "add-to-box1"
};
var _hoisted_34 = {
  "class": "add-to-box add-to-box2"
};
var _hoisted_35 = {
  "class": "add-to-cart"
};
var _hoisted_36 = {
  key: 0,
  "class": "row"
};
var _hoisted_37 = {
  "class": "col"
};
var _hoisted_38 = {
  "class": "input-content"
};

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "pt-2",
  "for": "qty"
}, "Qty:", -1
/* HOISTED */
);

var _hoisted_40 = ["value"];
var _hoisted_41 = {
  "class": "col"
};
var _hoisted_42 = {
  "class": "input-content"
};

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "pt-2",
  "for": "cost"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Cost:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " *")], -1
/* HOISTED */
);

var _hoisted_44 = ["value"];

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-12 text-right"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, " *=Including Taxes ")], -1
/* HOISTED */
);

var _hoisted_46 = {
  "class": "last-cart d-flex justify-content-center",
  style: {
    "width": "100%"
  }
};

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-plus",
  "aria-hidden": "true"
}, null, -1
/* HOISTED */
);

var _hoisted_48 = [_hoisted_47];

var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-minus",
  "aria-hidden": "true"
}, null, -1
/* HOISTED */
);

var _hoisted_50 = [_hoisted_49];

var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "stock2 d-none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "availability in-stock2"
}, " Availability:Accessories, Men ")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.props.product != null && _typeof($setup.props.product) == 'object' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [ false ? (0) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" .product-images "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $setup.props.product.url,
    alt: ""
  }, null, 8
  /* PROPS */
  , _hoisted_15)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" .product-images ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.product.name), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.product.currency) + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getUpperPrice($setup.props.product.price)) + ".00", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.product.currency) + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.product.price) + ".00", 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.product.type_of_fabric), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.product.type_of_print), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_29, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)([{
      "display": "block",
      "height": "30px",
      "width": "30px"
    }, {
      'background-color': $setup.props.product.color
    }])
  }, null, 4
  /* STYLE */
  )])])]), _hoisted_32]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [$setup.currentCart.isItemExist($setup.props.product) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    disabled: "",
    value: $setup.currentCart.getItem($setup.props.product).qt,
    id: "qty",
    "class": "input-text qty",
    type: "text",
    name: "qty",
    maxlength: "12",
    title: "Qty"
  }, null, 8
  /* PROPS */
  , _hoisted_40)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    disabled: "",
    value: $setup.props.product.currency + ' ' + $setup.currentCart.getItem($setup.props.product).qt * $setup.props.product.price,
    id: "cost",
    "class": "input-text qty",
    type: "text",
    name: "qty",
    maxlength: "12",
    title: "Qty"
  }, null, 8
  /* PROPS */
  , _hoisted_44)])]), _hoisted_45])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [$setup.currentCart.isItemExist($setup.props.product) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
    key: 0,
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $setup.currentCart.add($setup.props.product, 1);
    }, ["prevent"])),
    "class": "last1 btn btn-black px-5"
  }, _hoisted_48)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$setup.currentCart.isItemExist($setup.props.product) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
    key: 1,
    "class": "last1 btn btn-black px-4",
    href: "#",
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $setup.currentCart.add($setup.props.product);
    }, ["prevent"]))
  }, "Add To Cart")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.currentCart.isItemExist($setup.props.product) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
    key: 2,
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $setup.currentCart.remove($setup.props.product, 1);
    }, ["prevent"])),
    "class": "last1 btn btn-black px-5"
  }, _hoisted_50)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), _hoisted_51])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" .product-info ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" .modal-product ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" .modal-body ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" .modal-content ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" .modal-dialog ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END Modal ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/.pnpm/babel-loader@8.2.4_acba72ea4bf9d339cdfcd8f55cdb7006/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Front/LandingPage.vue?vue&type=template&id=6f079be7":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/babel-loader@8.2.4_acba72ea4bf9d339cdfcd8f55cdb7006/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Front/LandingPage.vue?vue&type=template&id=6f079be7 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/.pnpm/vue@3.2.31/node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "top"
}, null, -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "slider-main-area home-3 bg-gray"
};
var _hoisted_3 = {
  "class": "main-slider an-si"
};
var _hoisted_4 = {
  "class": "bend niceties preview-2"
};
var _hoisted_5 = {
  "class": "slider-wrapper theme-default"
};
var _hoisted_6 = {
  id: "jquery-slider-demo",
  "class": "nivoSlider"
};
var _hoisted_7 = ["src"];
var _hoisted_8 = ["src"];
var _hoisted_9 = ["src"];
var _hoisted_10 = {
  id: "slide-title-1",
  "class": "nivo-html-caption t-cn Builder"
};
var _hoisted_11 = {
  "class": "t-cn Builder"
};
var _hoisted_12 = {
  "class": "slide-all slide-title-fix-1"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "layer-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "title5"
}, "New Collection")], -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "layer-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "title6 slide-title-fix-1-layer-2"
}, "Men’s Fashion")], -1
/* HOISTED */
);

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "layer-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "title0"
}, "Save Up To 40% Off")], -1
/* HOISTED */
);

var _hoisted_16 = {
  "class": "layer-3"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Shop Now");

var _hoisted_18 = {
  id: "slide-title-2",
  "class": "nivo-html-caption t-cn Builder"
};
var _hoisted_19 = {
  "class": "t-cn Builder"
};
var _hoisted_20 = {
  "class": "slide-all slide-title-fix-2"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "layer-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "title5"
}, "New Collection")], -1
/* HOISTED */
);

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "layer-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "title6 slide-title-fix-1-layer-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Women’s"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Fashion")])], -1
/* HOISTED */
);

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "layer-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "title0"
}, "Save Up To 40% Off")], -1
/* HOISTED */
);

var _hoisted_24 = {
  "class": "layer-3"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Shop Now");

var _hoisted_26 = {
  id: "slide-title-3",
  "class": "nivo-html-caption"
};
var _hoisted_27 = {
  "class": "t-cn Builder"
};
var _hoisted_28 = {
  "class": "slide-all slide-title-fix-3"
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "layer-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "title5"
}, "New Collection")], -1
/* HOISTED */
);

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "layer-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "title6 slide-title-fix-1-layer-2"
}, "Unisex Fashion")], -1
/* HOISTED */
);

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "layer-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "title0"
}, "Save Up To 40% Off")], -1
/* HOISTED */
);

var _hoisted_32 = {
  "class": "layer-3"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Shop Now");

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", {
  "class": "design-area home-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "container"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "bottom-design res"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-8 col-md-8 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-info-box"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-image"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  alt: "",
  src: "img/banner/t_1.png"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "NEW DESIGN"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "big dream big act"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "GET IT NOW")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-info-box bt-no"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "NEW DESIGN"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "ALWAYS STRONG"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "GET IT NOW")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-image tb-right"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  alt: "",
  src: "img/banner/t_2.png"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-4 col-md-4 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "ro-info-box-wrap tpl3 fs"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-image"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  alt: "",
  src: "img/banner/t_3.png"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-content-inner"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "T-shirt FASHION"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "MID SEASON SALE"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "VIEW COLLECTION")])])])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-md-12 text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "features-tab indicator-style2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Nav tabs "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav nav-tabs",
  role: "tablist"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  role: "presentation",
  "class": "vc_tta-tab"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#home",
  "aria-controls": "home",
  role: "tab",
  "data-bs-toggle": "tab"
}, "BESTSELLER")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "vc_tta-tab",
  role: "presentation"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "active",
  href: "#profile",
  "aria-controls": "profile",
  role: "tab",
  "data-bs-toggle": "tab"
}, "NEW PRODUCTS")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "vc_tta-tab",
  role: "presentation"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#messages",
  "aria-controls": "messages",
  role: "tab",
  "data-bs-toggle": "tab"
}, "MUST HAVE")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Tab panes "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-content jump"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  role: "tabpanel",
  "class": "tab-pane",
  id: "home"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "features-curosel2 indicator-style2 owl-carousel"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-item-inner tb2 pct-last"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  alt: "",
  src: "img/product/1.jpg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "la-icon",
  href: "#productModal",
  title: "Quick View",
  "data-bs-toggle": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-eye"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-it"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-beg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Leather Bag")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-wrap-price-rating"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-price font-noraure-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "amount"
}, "$180.00"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "amount2 ana"
}, "$170.00")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "last-cart l-mrgn"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-heart"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las4",
  href: "#"
}, "Add To Cart"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3 las7",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-retweet"
})])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-item-inner tb2 pct-last"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "onsale two"
}, "Sale!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  alt: "",
  src: "img/product/9.jpg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "la-icon",
  href: "#productModal",
  title: "Quick View",
  "data-bs-toggle": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-eye"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-it"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-beg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Glasses")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-wrap-price-rating"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-price font-noraure-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "amount2 ana"
}, "$79.00 - "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "amount2 ana"
}, "$100.00")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "last-cart l-mrgn"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-heart"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las4",
  href: "#"
}, "Add To Cart"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3 las7",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-retweet"
})])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-item-inner tb2 pct-last"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "onsale"
}, "Sale!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  alt: "",
  src: "img/product/7.jpg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "la-icon",
  href: "#productModal",
  title: "Quick View",
  "data-bs-toggle": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-eye"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-it"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-beg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Skin Shoulder Bag")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-wrap-price-rating"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-price font-noraure-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "amount2 ana"
}, "$170.00")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "last-cart l-mrgn"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-heart"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las4",
  href: "#"
}, "Add To Cart"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3 las7",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-retweet"
})])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-item-inner tb2 pct-last"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "onsale"
}, "Sale!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  alt: "",
  src: "img/product/6.jpg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "la-icon",
  href: "#productModal",
  title: "Quick View",
  "data-bs-toggle": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-eye"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-it"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-beg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Vintage Glasses")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-wrap-price-rating"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-price font-noraure-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "amount2 ana"
}, "$199.00")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "last-cart l-mrgn"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-heart"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las4",
  href: "#"
}, "Add To Cart"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3 las7",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-retweet"
})])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-item-inner tb2 pct-last"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  alt: "",
  src: "img/product/5.jpg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "la-icon",
  href: "#productModal",
  title: "Quick View",
  "data-bs-toggle": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-eye"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-it"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-beg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Luxury Leather Bag")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-wrap-price-rating"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-price font-noraure-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "amount2 ana"
}, "$150.00")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "last-cart l-mrgn"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-heart"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las4",
  href: "#"
}, "Add To Cart"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3 las7",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-retweet"
})])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-item-inner tb2 pct-last"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "onsale two"
}, "Sale!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  alt: "",
  src: "img/product/3.jpg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "la-icon",
  href: "#productModal",
  title: "Quick View",
  "data-bs-toggle": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-eye"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-it"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-beg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Vintage Lambskin Shoe")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-wrap-price-rating"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-price font-noraure-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "amount"
}, "$180.00"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "amount2 ana"
}, "$170.00")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "last-cart l-mrgn"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-heart"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las4",
  href: "#"
}, "Add To Cart"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3 las7",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-retweet"
})])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-item-inner tb2 pct-last"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "onsale"
}, "Sale!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  alt: "",
  src: "img/product/4.jpg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "la-icon",
  href: "#productModal",
  title: "Quick View",
  "data-bs-toggle": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-eye"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-it"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-beg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Skin Shoulder Bag")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-wrap-price-rating"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-price font-noraure-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "amount2 ana"
}, "$170.00")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "last-cart l-mrgn"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-heart"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las4",
  href: "#"
}, "Add To Cart"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3 las7",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-retweet"
})])])])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  role: "tabpanel",
  "class": "tab-pane active",
  id: "profile"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "features-curosel2 indicator-style2 owl-carousel"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-item-inner tb2 pct-last"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "onsale two"
}, "Sale!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  alt: "",
  src: "img/product/10.jpg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "la-icon",
  href: "#productModal",
  title: "Quick View",
  "data-bs-toggle": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-eye"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-it"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-beg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Vintage Lambskin Shoe")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-wrap-price-rating"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-price font-noraure-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "amount2 ana"
}, "$170.00")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "last-cart l-mrgn"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-heart"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las4",
  href: "#"
}, "Add To Cart"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3 las7",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-retweet"
})])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-item-inner tb2 pct-last"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  alt: "",
  src: "img/product/2.jpg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "la-icon",
  href: "#productModal",
  title: "Quick View",
  "data-bs-toggle": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-eye"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-it"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-beg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Leather Shoe")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-wrap-price-rating"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-price font-noraure-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "amount2 ana"
}, "$220.00")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "last-cart l-mrgn"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-heart"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las4",
  href: "#"
}, "Add To Cart"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3 las7",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-retweet"
})])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-item-inner tb2 pct-last"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "onsale two"
}, "Sale!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  alt: "",
  src: "img/product/8.jpg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "la-icon",
  href: "#productModal",
  title: "Quick View",
  "data-bs-toggle": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-eye"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-it"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-beg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Vintage Shoulder Bag")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-wrap-price-rating"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-price font-noraure-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "amount2 ana"
}, "$99.00")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "last-cart l-mrgn"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-heart"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las4",
  href: "#"
}, "Add To Cart"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3 las7",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-retweet"
})])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-item-inner tb2 pct-last"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  alt: "",
  src: "img/product/7.jpg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "la-icon",
  href: "#productModal",
  title: "Quick View",
  "data-bs-toggle": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-eye"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-it"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-beg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Leather Bag")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-wrap-price-rating"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-price font-noraure-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "amount"
}, "$180.00"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "amount2 ana"
}, "$170.00")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "last-cart l-mrgn"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-heart"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las4",
  href: "#"
}, "Add To Cart"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3 las7",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-retweet"
})])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-item-inner tb2 pct-last"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "onsale"
}, "Sale!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  alt: "",
  src: "img/product/6.jpg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "la-icon",
  href: "#productModal",
  title: "Quick View",
  "data-bs-toggle": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-eye"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-it"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-beg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Vintage Glasses")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-wrap-price-rating"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-price font-noraure-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "amount2 ana"
}, "$120.00")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "last-cart l-mrgn"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-heart"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las4",
  href: "#"
}, "Add To Cart"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3 las7",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-retweet"
})])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-item-inner tb2 pct-last"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "onsale two"
}, "Sale!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  alt: "",
  src: "img/product/5.jpg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "la-icon",
  href: "#productModal",
  title: "Quick View",
  "data-bs-toggle": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-eye"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-it"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-beg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Luxury Leather Bag")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-wrap-price-rating"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-price font-noraure-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "amount2 ana"
}, "$170.00")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "last-cart l-mrgn"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-heart"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las4",
  href: "#"
}, "Add To Cart"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3 las7",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-retweet"
})])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-item-inner tb2 pct-last"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  alt: "",
  src: "img/product/4.jpg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "la-icon",
  href: "#productModal",
  title: "Quick View",
  "data-bs-toggle": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-eye"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-it"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-beg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Leather Bag")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-wrap-price-rating"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-price font-noraure-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "amount"
}, "$180.00"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "amount2 ana"
}, "$170.00")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "last-cart l-mrgn"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-heart"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las4",
  href: "#"
}, "Add To Cart"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3 las7",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-retweet"
})])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-item-inner tb2 pct-last"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "onsale"
}, "Sale!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  alt: "",
  src: "img/product/3.jpg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "la-icon",
  href: "#productModal",
  title: "Quick View",
  "data-bs-toggle": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-eye"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-it"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-beg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Vintage Lambskin Shoe")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-wrap-price-rating"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-price font-noraure-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "amount2 ana"
}, "$250.00")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "last-cart l-mrgn"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-heart"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las4",
  href: "#"
}, "Add To Cart"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3 las7",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-retweet"
})])])])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  role: "tabpanel",
  "class": "tab-pane",
  id: "messages"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "features-curosel2 indicator-style2 owl-carousel"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-item-inner tb2 pct-last"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "onsale"
}, "Sale!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  alt: "",
  src: "img/product/6.jpg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "la-icon",
  href: "#productModal",
  title: "Quick View",
  "data-bs-toggle": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-eye"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-it"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-beg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Vintage Glasses")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-wrap-price-rating"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-price font-noraure-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "amount2 ana"
}, "$170.00")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "last-cart l-mrgn"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-heart"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las4",
  href: "#"
}, "Add To Cart"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3 las7",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-retweet"
})])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-item-inner tb2 pct-last"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "onsale two"
}, "Sale!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  alt: "",
  src: "img/product/5.jpg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "la-icon",
  href: "#productModal",
  title: "Quick View",
  "data-bs-toggle": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-eye"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-it"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-beg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Luxury Leather Bag")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-wrap-price-rating"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-price font-noraure-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "amount2 ana"
}, "$160.00")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "last-cart l-mrgn"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-heart"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las4",
  href: "#"
}, "Add To Cart"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3 las7",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-retweet"
})])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-item-inner tb2 pct-last"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  alt: "",
  src: "img/product/4.jpg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "la-icon",
  href: "#productModal",
  title: "Quick View",
  "data-bs-toggle": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-eye"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-it"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-beg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Leather Bag")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-wrap-price-rating"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-price font-noraure-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "amount"
}, "$180.00"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "amount2 ana"
}, "$170.00")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "last-cart l-mrgn"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-heart"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las4",
  href: "#"
}, "Add To Cart"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3 las7",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-retweet"
})])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-item-inner tb2 pct-last"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "onsale"
}, "Sale!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  alt: "",
  src: "img/product/3.jpg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "la-icon",
  href: "#productModal",
  title: "Quick View",
  "data-bs-toggle": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-eye"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-it"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-beg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Vintage Lambskin Shoe")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-wrap-price-rating"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-price font-noraure-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "amount2 ana"
}, "$270.00")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "last-cart l-mrgn"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-heart"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las4",
  href: "#"
}, "Add To Cart"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3 las7",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-retweet"
})])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-item-inner tb2 pct-last"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "onsale two"
}, "Sale!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  alt: "",
  src: "img/product/2.jpg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "la-icon",
  href: "#productModal",
  title: "Quick View",
  "data-bs-toggle": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-eye"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-it"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-beg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Leather Shoe")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-wrap-price-rating"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-price font-noraure-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "amount2 ana"
}, "$120.00")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "last-cart l-mrgn"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-heart"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las4",
  href: "#"
}, "Add To Cart"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3 las7",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-retweet"
})])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-item-inner tb2 pct-last"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  alt: "",
  src: "img/product/1.jpg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "la-icon",
  href: "#productModal",
  title: "Quick View",
  "data-bs-toggle": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-eye"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-it"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-beg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, "Leather Bag")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-wrap-price-rating"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tb-product-price font-noraure-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "amount"
}, "$180.00"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "amount2 ana"
}, "$170.00")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "last-cart l-mrgn"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-heart"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las4",
  href: "#"
}, "Add To Cart"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "las3 las7",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-retweet"
})])])])])])])])])])])])])], -1
/* HOISTED */
);

var _hoisted_35 = {
  "class": "specail-area home-3 hm-4"
};
var _hoisted_36 = {
  "class": "container"
};
var _hoisted_37 = {
  "class": "row"
};
var _hoisted_38 = {
  "class": "col-lg-4"
};
var _hoisted_39 = {
  "class": "specail-top"
};

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Special", -1
/* HOISTED */
);

var _hoisted_41 = {
  "class": "row"
};
var _hoisted_42 = {
  "class": "col-lg-12 col-md-6"
};
var _hoisted_43 = {
  "class": "tb-product-item"
};
var _hoisted_44 = {
  "class": "tb-image"
};

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "new"
}, "New", -1
/* HOISTED */
);

var _hoisted_46 = ["src"];
var _hoisted_47 = ["onClick"];

var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-eye"
}, null, -1
/* HOISTED */
);

var _hoisted_49 = [_hoisted_48];
var _hoisted_50 = {
  "class": "tb-content"
};
var _hoisted_51 = {
  "class": "tb-beg"
};
var _hoisted_52 = {
  key: 0,
  "class": "pl-2",
  href: "#"
};
var _hoisted_53 = {
  "class": "tb-product-price font-noraure-3"
};
var _hoisted_54 = {
  "class": "amount2 ana text-success"
};
var _hoisted_55 = {
  "class": "text-danger text-sm"
};

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_57 = {
  "class": "text-warning"
};
var _hoisted_58 = {
  "class": "tb-product-btn"
};
var _hoisted_59 = ["onClick"];

var _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-shopping-cart"
}, null, -1
/* HOISTED */
);

var _hoisted_61 = [_hoisted_60];
var _hoisted_62 = ["onClick"];
var _hoisted_63 = ["onClick"];

var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-heart"
})], -1
/* HOISTED */
);

var _hoisted_65 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-retweet"
})], -1
/* HOISTED */
);

var _hoisted_66 = {
  "class": "col-lg-4"
};
var _hoisted_67 = {
  "class": "specail-top"
};

var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Most View ", -1
/* HOISTED */
);

var _hoisted_69 = {
  "class": "row"
};
var _hoisted_70 = {
  "class": "col-lg-12 col-md-6"
};
var _hoisted_71 = {
  "class": "tb-product-item"
};
var _hoisted_72 = {
  "class": "tb-image"
};

var _hoisted_73 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "new"
}, "New", -1
/* HOISTED */
);

var _hoisted_74 = ["src"];
var _hoisted_75 = ["onClick"];

var _hoisted_76 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-eye"
}, null, -1
/* HOISTED */
);

var _hoisted_77 = [_hoisted_76];
var _hoisted_78 = {
  "class": "tb-content"
};
var _hoisted_79 = {
  "class": "tb-beg"
};
var _hoisted_80 = {
  key: 0,
  "class": "pl-2",
  href: "#"
};
var _hoisted_81 = {
  "class": "tb-product-price font-noraure-3"
};
var _hoisted_82 = {
  "class": "amount2 ana text-success"
};
var _hoisted_83 = {
  "class": "text-danger text-sm"
};

var _hoisted_84 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_85 = {
  "class": "text-warning"
};
var _hoisted_86 = {
  "class": "tb-product-btn"
};
var _hoisted_87 = ["onClick"];

var _hoisted_88 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-shopping-cart"
}, null, -1
/* HOISTED */
);

var _hoisted_89 = [_hoisted_88];
var _hoisted_90 = ["onClick"];
var _hoisted_91 = ["onClick"];

var _hoisted_92 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-heart"
})], -1
/* HOISTED */
);

var _hoisted_93 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-retweet"
})], -1
/* HOISTED */
);

var _hoisted_94 = {
  "class": "col-lg-4"
};
var _hoisted_95 = {
  "class": "specail-top"
};

var _hoisted_96 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Top Products ", -1
/* HOISTED */
);

var _hoisted_97 = {
  "class": "row"
};
var _hoisted_98 = {
  "class": "col-lg-12 col-md-6"
};
var _hoisted_99 = {
  "class": "tb-product-item"
};
var _hoisted_100 = {
  "class": "tb-image"
};

var _hoisted_101 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "new"
}, "New", -1
/* HOISTED */
);

var _hoisted_102 = ["src"];
var _hoisted_103 = ["onClick"];

var _hoisted_104 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-eye"
}, null, -1
/* HOISTED */
);

var _hoisted_105 = [_hoisted_104];
var _hoisted_106 = {
  "class": "tb-content"
};
var _hoisted_107 = {
  "class": "tb-beg"
};
var _hoisted_108 = {
  key: 0,
  "class": "pl-2",
  href: "#"
};
var _hoisted_109 = {
  "class": "tb-product-price font-noraure-3"
};
var _hoisted_110 = {
  "class": "amount2 ana text-success"
};
var _hoisted_111 = {
  "class": "text-danger text-sm"
};

var _hoisted_112 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_113 = {
  "class": "text-warning"
};
var _hoisted_114 = {
  "class": "tb-product-btn"
};
var _hoisted_115 = ["onClick"];

var _hoisted_116 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-shopping-cart"
}, null, -1
/* HOISTED */
);

var _hoisted_117 = [_hoisted_116];
var _hoisted_118 = ["onClick"];
var _hoisted_119 = ["onClick"];

var _hoisted_120 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-heart"
})], -1
/* HOISTED */
);

var _hoisted_121 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-retweet"
})], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Head"], {
    title: "UrbanStrick | India's Best Fashion Store | Authentic Style | Premium Quality | Truly Indian"
  }), _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    title: "#slide-title-1",
    src: _ctx.asset('img/slider/slider-1.jpg'),
    alt: "The slide 1"
  }, null, 8
  /* PROPS */
  , _hoisted_7), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    title: "#slide-title-2",
    src: _ctx.asset('img/slider/slider-2.jpg'),
    alt: "The slide 2"
  }, null, 8
  /* PROPS */
  , _hoisted_8), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    title: "#slide-title-3",
    src: _ctx.asset('img/slider/slider-3.jpg'),
    alt: "The slide 3",
    "data-transition": "slideInLeft"
  }, null, 8
  /* PROPS */
  , _hoisted_9)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" layer 1 "), _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" layer 2 "), _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" layer 2 "), _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" layer 3 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["InertiaLink"], {
    "class": "min1 btn-black",
    href: _ctx.route('product_list', 'men')
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_17];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" layer 1 "), _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" layer 2 "), _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" layer 2 "), _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" layer 3 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["InertiaLink"], {
    "class": "min1 btn-black",
    href: _ctx.route('product_list', 'women')
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_25];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" layer 1 "), _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" layer 2 "), _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" layer 2 "), _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" layer 3 "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["InertiaLink"], {
    "class": "min1 btn-black",
    href: _ctx.route('product_list', 'unisex')
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_33];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])])])])])])])])]), _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [_hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.props.specialProduct, function (product) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [_hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: product.url,
      alt: ""
    }, null, 8
    /* PROPS */
    , _hoisted_46), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      onClick: function onClick($event) {
        return $setup.setCurrentProduct(product);
      },
      "class": "la-icon",
      "data-bs-toggle": "modal",
      title: "Quick View",
      href: "#productModal"
    }, _hoisted_49, 8
    /* PROPS */
    , _hoisted_47)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["InertiaLink"], {
      href: _ctx.route('product_page', {
        name: product.slug
      })
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.name), 1
        /* TEXT */
        )];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"]), $setup.currentCart.isItemExist(product) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("small", _hoisted_52, "( in cart: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.currentCart.getItem(product).qt) + " )", 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("del", _hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.currency) + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getUpperPrice(product.price)) + ".00", 1
    /* TEXT */
    ), _hoisted_56, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.currency) + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.price) + ".00 ", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_57, "( " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getDiscountPercentage(product.price)) + " % off)", 1
    /* TEXT */
    )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [!$setup.currentCart.isItemExist(product) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 0,
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.currentCart.add(product, 1);
      }, ["prevent"]),
      href: "#"
    }, _hoisted_61, 8
    /* PROPS */
    , _hoisted_59)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.currentCart.isItemExist(product) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 1,
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.currentCart.add(product, 1);
      }, ["prevent"]),
      href: "#"
    }, " + ", 8
    /* PROPS */
    , _hoisted_62)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.currentCart.isItemExist(product) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 2,
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.currentCart.remove(product, 1);
      }, ["prevent"]),
      href: "#"
    }, " - ", 8
    /* PROPS */
    , _hoisted_63)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_64, _hoisted_65])])])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [_hoisted_68, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.props.mostView, function (product) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_72, [_hoisted_73, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: product.url,
      alt: ""
    }, null, 8
    /* PROPS */
    , _hoisted_74), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      onClick: function onClick($event) {
        return $setup.setCurrentProduct(product);
      },
      "class": "la-icon",
      "data-bs-toggle": "modal",
      title: "Quick View",
      href: "#productModal"
    }, _hoisted_77, 8
    /* PROPS */
    , _hoisted_75)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["InertiaLink"], {
      href: _ctx.route('product_page', {
        name: product.slug
      })
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.name), 1
        /* TEXT */
        )];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"]), $setup.currentCart.isItemExist(product) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("small", _hoisted_80, "( in cart: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.currentCart.getItem(product).qt) + " )", 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_81, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("del", _hoisted_83, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.currency) + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getUpperPrice(product.price)) + ".00", 1
    /* TEXT */
    ), _hoisted_84, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.currency) + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.price) + ".00 ", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_85, "( " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getDiscountPercentage(product.price)) + " % off)", 1
    /* TEXT */
    )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_86, [!$setup.currentCart.isItemExist(product) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 0,
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.currentCart.add(product, 1);
      }, ["prevent"]),
      href: "#"
    }, _hoisted_89, 8
    /* PROPS */
    , _hoisted_87)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.currentCart.isItemExist(product) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 1,
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.currentCart.add(product, 1);
      }, ["prevent"]),
      href: "#"
    }, " + ", 8
    /* PROPS */
    , _hoisted_90)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.currentCart.isItemExist(product) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 2,
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.currentCart.remove(product, 1);
      }, ["prevent"]),
      href: "#"
    }, " - ", 8
    /* PROPS */
    , _hoisted_91)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_92, _hoisted_93])])])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_94, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_95, [_hoisted_96, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_97, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.props.topProduct, function (product) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_98, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_99, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_100, [_hoisted_101, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: product.url,
      alt: ""
    }, null, 8
    /* PROPS */
    , _hoisted_102), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      onClick: function onClick($event) {
        return $setup.setCurrentProduct(product);
      },
      "class": "la-icon",
      "data-bs-toggle": "modal",
      title: "Quick View",
      href: "#productModal"
    }, _hoisted_105, 8
    /* PROPS */
    , _hoisted_103)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_106, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_107, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["InertiaLink"], {
      href: _ctx.route('product_page', {
        name: product.slug
      })
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.name), 1
        /* TEXT */
        )];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"]), $setup.currentCart.isItemExist(product) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("small", _hoisted_108, "( in cart: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.currentCart.getItem(product).qt) + " )", 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_109, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_110, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("del", _hoisted_111, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.currency) + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getUpperPrice(product.price)) + ".00", 1
    /* TEXT */
    ), _hoisted_112, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.currency) + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(product.price) + ".00 ", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_113, "( " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.getDiscountPercentage(product.price)) + " % off)", 1
    /* TEXT */
    )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_114, [!$setup.currentCart.isItemExist(product) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 0,
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.currentCart.add(product, 1);
      }, ["prevent"]),
      href: "#"
    }, _hoisted_117, 8
    /* PROPS */
    , _hoisted_115)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.currentCart.isItemExist(product) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 1,
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.currentCart.add(product, 1);
      }, ["prevent"]),
      href: "#"
    }, " + ", 8
    /* PROPS */
    , _hoisted_118)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.currentCart.isItemExist(product) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 2,
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $setup.currentCart.remove(product, 1);
      }, ["prevent"]),
      href: "#"
    }, " - ", 8
    /* PROPS */
    , _hoisted_119)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_120, _hoisted_121])])])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" QUICKVIEW PRODUCT "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ProductModel"], {
    "current-product": $setup.currentProduct
  }, null, 8
  /* PROPS */
  , ["current-product"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" END QUICKVIEW PRODUCT ")], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Lib/nivoslider.js":
/*!****************************************!*\
  !*** ./resources/js/Lib/nivoslider.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/.pnpm/jquery@3.6.0/node_modules/jquery/dist/jquery.js");
/*
 * jQuery Nivo Slider v3.2
 * http://nivo.dev7studios.com
 *
 * Copyright 2012, Dev7studios
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
(function ($) {
  var NivoSlider = function NivoSlider(element, options) {
    // Defaults are below
    var settings = $.extend({}, $.fn.nivoSlider.defaults, options); // Useful variables. Play carefully.

    var vars = {
      currentSlide: 0,
      currentImage: '',
      totalSlides: 0,
      running: false,
      paused: false,
      stop: false,
      controlNavEl: false
    }; // Get this slider

    var slider = $(element);
    slider.data('nivo:vars', vars).addClass('nivoSlider'); // Find our slider children

    var kids = slider.children();
    kids.each(function () {
      var child = $(this);
      var link = '';

      if (!child.is('img')) {
        if (child.is('a')) {
          child.addClass('nivo-imageLink');
          link = child;
        }

        child = child.find('img:first');
      } // Get img width & height


      var childWidth = childWidth === 0 ? child.attr('width') : child.width(),
          childHeight = childHeight === 0 ? child.attr('height') : child.height();

      if (link !== '') {
        link.css('display', 'none');
      }

      child.css('display', 'none');
      vars.totalSlides++;
    }); // If randomStart

    if (settings.randomStart) {
      settings.startSlide = Math.floor(Math.random() * vars.totalSlides);
    } // Set startSlide


    if (settings.startSlide > 0) {
      if (settings.startSlide >= vars.totalSlides) {
        settings.startSlide = vars.totalSlides - 1;
      }

      vars.currentSlide = settings.startSlide;
    } // Get initial image


    if ($(kids[vars.currentSlide]).is('img')) {
      vars.currentImage = $(kids[vars.currentSlide]);
    } else {
      vars.currentImage = $(kids[vars.currentSlide]).find('img:first');
    } // Show initial link


    if ($(kids[vars.currentSlide]).is('a')) {
      $(kids[vars.currentSlide]).css('display', 'block');
    } // Set first background


    var sliderImg = $('<img/>').addClass('nivo-main-image');
    sliderImg.attr('src', vars.currentImage.attr('src')).show();
    slider.append(sliderImg); // Detect Window Resize

    $(window).resize(function () {
      slider.children('img').width(slider.width());
      sliderImg.attr('src', vars.currentImage.attr('src'));
      sliderImg.stop().height('auto');
      $('.nivo-slice').remove();
      $('.nivo-box').remove();
    }); //Create caption

    slider.append($('<div class="nivo-caption"></div>')); // Process caption function

    var processCaption = function processCaption(settings) {
      var nivoCaption = $('.nivo-caption', slider);

      if (vars.currentImage.attr('title') != '' && vars.currentImage.attr('title') != undefined) {
        var title = vars.currentImage.attr('title');
        if (title.substr(0, 1) == '#') title = $(title).html();

        if (nivoCaption.css('display') == 'block') {
          setTimeout(function () {
            nivoCaption.html(title);
          }, settings.animSpeed);
        } else {
          nivoCaption.html(title);
          nivoCaption.stop().fadeIn(settings.animSpeed);
        }
      } else {
        nivoCaption.stop().fadeOut(settings.animSpeed);
      }
    }; //Process initial  caption


    processCaption(settings); // In the words of Super Mario "let's a go!"

    var timer = 0;

    if (!settings.manualAdvance && kids.length > 1) {
      timer = setInterval(function () {
        nivoRun(slider, kids, settings, false);
      }, settings.pauseTime);
    } // Add Direction nav


    if (settings.directionNav) {
      slider.append('<div class="nivo-directionNav"><a class="nivo-prevNav">' + settings.prevText + '</a><a class="nivo-nextNav">' + settings.nextText + '</a></div>');
      $(slider).on('click', 'a.nivo-prevNav', function () {
        if (vars.running) {
          return false;
        }

        clearInterval(timer);
        timer = '';
        vars.currentSlide -= 2;
        nivoRun(slider, kids, settings, 'prev');
      });
      $(slider).on('click', 'a.nivo-nextNav', function () {
        if (vars.running) {
          return false;
        }

        clearInterval(timer);
        timer = '';
        nivoRun(slider, kids, settings, 'next');
      });
    } // Add Control nav


    if (settings.controlNav) {
      vars.controlNavEl = $('<div class="nivo-controlNav"></div>');
      slider.after(vars.controlNavEl);

      for (var i = 0; i < kids.length; i++) {
        if (settings.controlNavThumbs) {
          vars.controlNavEl.addClass('nivo-thumbs-enabled');
          var child = kids.eq(i);

          if (!child.is('img')) {
            child = child.find('img:first');
          }

          if (child.attr('data-thumb')) vars.controlNavEl.append('<a class="nivo-control" rel="' + i + '"><img src="' + child.attr('data-thumb') + '" alt="" /></a>');
        } else {
          vars.controlNavEl.append('<a class="nivo-control" rel="' + i + '">' + (i + 1) + '</a>');
        }
      } //Set initial active link


      $('a:eq(' + vars.currentSlide + ')', vars.controlNavEl).addClass('active');
      $('a', vars.controlNavEl).bind('click', function () {
        if (vars.running) return false;
        if ($(this).hasClass('active')) return false;
        clearInterval(timer);
        timer = '';
        sliderImg.attr('src', vars.currentImage.attr('src'));
        vars.currentSlide = $(this).attr('rel') - 1;
        nivoRun(slider, kids, settings, 'control');
      });
    } //For pauseOnHover setting


    if (settings.pauseOnHover) {
      slider.hover(function () {
        vars.paused = true;
        clearInterval(timer);
        timer = '';
      }, function () {
        vars.paused = false; // Restart the timer

        if (timer === '' && !settings.manualAdvance) {
          timer = setInterval(function () {
            nivoRun(slider, kids, settings, false);
          }, settings.pauseTime);
        }
      });
    } // Event when Animation finishes


    slider.bind('nivo:animFinished', function () {
      sliderImg.attr('src', vars.currentImage.attr('src'));
      vars.running = false; // Hide child links

      $(kids).each(function () {
        if ($(this).is('a')) {
          $(this).css('display', 'none');
        }
      }); // Show current link

      if ($(kids[vars.currentSlide]).is('a')) {
        $(kids[vars.currentSlide]).css('display', 'block');
      } // Restart the timer


      if (timer === '' && !vars.paused && !settings.manualAdvance) {
        timer = setInterval(function () {
          nivoRun(slider, kids, settings, false);
        }, settings.pauseTime);
      } // Trigger the afterChange callback


      settings.afterChange.call(this);
    }); // Add slices for slice animations

    var createSlices = function createSlices(slider, settings, vars) {
      if ($(vars.currentImage).parent().is('a')) $(vars.currentImage).parent().css('display', 'block');
      $('img[src="' + vars.currentImage.attr('src') + '"]', slider).not('.nivo-main-image,.nivo-control img').width(slider.width()).css('visibility', 'hidden').show();
      var sliceHeight = $('img[src="' + vars.currentImage.attr('src') + '"]', slider).not('.nivo-main-image,.nivo-control img').parent().is('a') ? $('img[src="' + vars.currentImage.attr('src') + '"]', slider).not('.nivo-main-image,.nivo-control img').parent().height() : $('img[src="' + vars.currentImage.attr('src') + '"]', slider).not('.nivo-main-image,.nivo-control img').height();

      for (var i = 0; i < settings.slices; i++) {
        var sliceWidth = Math.round(slider.width() / settings.slices);

        if (i === settings.slices - 1) {
          slider.append($('<div class="nivo-slice" name="' + i + '"><img src="' + vars.currentImage.attr('src') + '" style="position:absolute; width:' + slider.width() + 'px; height:auto; display:block !important; top:0; left:-' + (sliceWidth + i * sliceWidth - sliceWidth) + 'px;" /></div>').css({
            left: sliceWidth * i + 'px',
            width: slider.width() - sliceWidth * i + 'px',
            height: sliceHeight + 'px',
            opacity: '0',
            overflow: 'hidden'
          }));
        } else {
          slider.append($('<div class="nivo-slice" name="' + i + '"><img src="' + vars.currentImage.attr('src') + '" style="position:absolute; width:' + slider.width() + 'px; height:auto; display:block !important; top:0; left:-' + (sliceWidth + i * sliceWidth - sliceWidth) + 'px;" /></div>').css({
            left: sliceWidth * i + 'px',
            width: sliceWidth + 'px',
            height: sliceHeight + 'px',
            opacity: '0',
            overflow: 'hidden'
          }));
        }
      }

      $('.nivo-slice', slider).height(sliceHeight);
      sliderImg.stop().animate({
        height: $(vars.currentImage).height()
      }, settings.animSpeed);
    }; // Add boxes for box animations


    var createBoxes = function createBoxes(slider, settings, vars) {
      if ($(vars.currentImage).parent().is('a')) $(vars.currentImage).parent().css('display', 'block');
      $('img[src="' + vars.currentImage.attr('src') + '"]', slider).not('.nivo-main-image,.nivo-control img').width(slider.width()).css('visibility', 'hidden').show();
      var boxWidth = Math.round(slider.width() / settings.boxCols),
          boxHeight = Math.round($('img[src="' + vars.currentImage.attr('src') + '"]', slider).not('.nivo-main-image,.nivo-control img').height() / settings.boxRows);

      for (var rows = 0; rows < settings.boxRows; rows++) {
        for (var cols = 0; cols < settings.boxCols; cols++) {
          if (cols === settings.boxCols - 1) {
            slider.append($('<div class="nivo-box" name="' + cols + '" rel="' + rows + '"><img src="' + vars.currentImage.attr('src') + '" style="position:absolute; width:' + slider.width() + 'px; height:auto; display:block; top:-' + boxHeight * rows + 'px; left:-' + boxWidth * cols + 'px;" /></div>').css({
              opacity: 0,
              left: boxWidth * cols + 'px',
              top: boxHeight * rows + 'px',
              width: slider.width() - boxWidth * cols + 'px'
            }));
            $('.nivo-box[name="' + cols + '"]', slider).height($('.nivo-box[name="' + cols + '"] img', slider).height() + 'px');
          } else {
            slider.append($('<div class="nivo-box" name="' + cols + '" rel="' + rows + '"><img src="' + vars.currentImage.attr('src') + '" style="position:absolute; width:' + slider.width() + 'px; height:auto; display:block; top:-' + boxHeight * rows + 'px; left:-' + boxWidth * cols + 'px;" /></div>').css({
              opacity: 0,
              left: boxWidth * cols + 'px',
              top: boxHeight * rows + 'px',
              width: boxWidth + 'px'
            }));
            $('.nivo-box[name="' + cols + '"]', slider).height($('.nivo-box[name="' + cols + '"] img', slider).height() + 'px');
          }
        }
      }

      sliderImg.stop().animate({
        height: $(vars.currentImage).height()
      }, settings.animSpeed);
    }; // Private run method


    var nivoRun = function nivoRun(slider, kids, settings, nudge) {
      // Get our vars
      var vars = slider.data('nivo:vars'); // Trigger the lastSlide callback

      if (vars && vars.currentSlide === vars.totalSlides - 1) {
        settings.lastSlide.call(this);
      } // Stop


      if ((!vars || vars.stop) && !nudge) {
        return false;
      } // Trigger the beforeChange callback


      settings.beforeChange.call(this); // Set current background before change

      if (!nudge) {
        sliderImg.attr('src', vars.currentImage.attr('src'));
      } else {
        if (nudge === 'prev') {
          sliderImg.attr('src', vars.currentImage.attr('src'));
        }

        if (nudge === 'next') {
          sliderImg.attr('src', vars.currentImage.attr('src'));
        }
      }

      vars.currentSlide++; // Trigger the slideshowEnd callback

      if (vars.currentSlide === vars.totalSlides) {
        vars.currentSlide = 0;
        settings.slideshowEnd.call(this);
      }

      if (vars.currentSlide < 0) {
        vars.currentSlide = vars.totalSlides - 1;
      } // Set vars.currentImage


      if ($(kids[vars.currentSlide]).is('img')) {
        vars.currentImage = $(kids[vars.currentSlide]);
      } else {
        vars.currentImage = $(kids[vars.currentSlide]).find('img:first');
      } // Set active links


      if (settings.controlNav) {
        $('a', vars.controlNavEl).removeClass('active');
        $('a:eq(' + vars.currentSlide + ')', vars.controlNavEl).addClass('active');
      } // Process caption


      processCaption(settings); // Remove any slices from last transition

      $('.nivo-slice', slider).remove(); // Remove any boxes from last transition

      $('.nivo-box', slider).remove();
      var currentEffect = settings.effect,
          anims = ''; // Generate random effect

      if (settings.effect === 'random') {
        anims = new Array('sliceDownRight', 'sliceDownLeft', 'sliceUpRight', 'sliceUpLeft', 'sliceUpDown', 'sliceUpDownLeft', 'fold', 'fade', 'boxRandom', 'boxRain', 'boxRainReverse', 'boxRainGrow', 'boxRainGrowReverse');
        currentEffect = anims[Math.floor(Math.random() * (anims.length + 1))];

        if (currentEffect === undefined) {
          currentEffect = 'fade';
        }
      } // Run random effect from specified set (eg: effect:'fold,fade')


      if (settings.effect.indexOf(',') !== -1) {
        anims = settings.effect.split(',');
        currentEffect = anims[Math.floor(Math.random() * anims.length)];

        if (currentEffect === undefined) {
          currentEffect = 'fade';
        }
      } // Custom transition as defined by "data-transition" attribute


      if (vars.currentImage.attr('data-transition')) {
        currentEffect = vars.currentImage.attr('data-transition');
      } // Run effects


      vars.running = true;
      var timeBuff = 0,
          i = 0,
          slices = '',
          firstSlice = '',
          totalBoxes = '',
          boxes = '';

      if (currentEffect === 'sliceDown' || currentEffect === 'sliceDownRight' || currentEffect === 'sliceDownLeft') {
        createSlices(slider, settings, vars);
        timeBuff = 0;
        i = 0;
        slices = $('.nivo-slice', slider);

        if (currentEffect === 'sliceDownLeft') {
          slices = $('.nivo-slice', slider)._reverse();
        }

        slices.each(function () {
          var slice = $(this);
          slice.css({
            'top': '0px'
          });

          if (i === settings.slices - 1) {
            setTimeout(function () {
              slice.animate({
                opacity: '1.0'
              }, settings.animSpeed, '', function () {
                slider.trigger('nivo:animFinished');
              });
            }, 100 + timeBuff);
          } else {
            setTimeout(function () {
              slice.animate({
                opacity: '1.0'
              }, settings.animSpeed);
            }, 100 + timeBuff);
          }

          timeBuff += 50;
          i++;
        });
      } else if (currentEffect === 'sliceUp' || currentEffect === 'sliceUpRight' || currentEffect === 'sliceUpLeft') {
        createSlices(slider, settings, vars);
        timeBuff = 0;
        i = 0;
        slices = $('.nivo-slice', slider);

        if (currentEffect === 'sliceUpLeft') {
          slices = $('.nivo-slice', slider)._reverse();
        }

        slices.each(function () {
          var slice = $(this);
          slice.css({
            'bottom': '0px'
          });

          if (i === settings.slices - 1) {
            setTimeout(function () {
              slice.animate({
                opacity: '1.0'
              }, settings.animSpeed, '', function () {
                slider.trigger('nivo:animFinished');
              });
            }, 100 + timeBuff);
          } else {
            setTimeout(function () {
              slice.animate({
                opacity: '1.0'
              }, settings.animSpeed);
            }, 100 + timeBuff);
          }

          timeBuff += 50;
          i++;
        });
      } else if (currentEffect === 'sliceUpDown' || currentEffect === 'sliceUpDownRight' || currentEffect === 'sliceUpDownLeft') {
        createSlices(slider, settings, vars);
        timeBuff = 0;
        i = 0;
        var v = 0;
        slices = $('.nivo-slice', slider);

        if (currentEffect === 'sliceUpDownLeft') {
          slices = $('.nivo-slice', slider)._reverse();
        }

        slices.each(function () {
          var slice = $(this);

          if (i === 0) {
            slice.css('top', '0px');
            i++;
          } else {
            slice.css('bottom', '0px');
            i = 0;
          }

          if (v === settings.slices - 1) {
            setTimeout(function () {
              slice.animate({
                opacity: '1.0'
              }, settings.animSpeed, '', function () {
                slider.trigger('nivo:animFinished');
              });
            }, 100 + timeBuff);
          } else {
            setTimeout(function () {
              slice.animate({
                opacity: '1.0'
              }, settings.animSpeed);
            }, 100 + timeBuff);
          }

          timeBuff += 50;
          v++;
        });
      } else if (currentEffect === 'fold') {
        createSlices(slider, settings, vars);
        timeBuff = 0;
        i = 0;
        $('.nivo-slice', slider).each(function () {
          var slice = $(this);
          var origWidth = slice.width();
          slice.css({
            top: '0px',
            width: '0px'
          });

          if (i === settings.slices - 1) {
            setTimeout(function () {
              slice.animate({
                width: origWidth,
                opacity: '1.0'
              }, settings.animSpeed, '', function () {
                slider.trigger('nivo:animFinished');
              });
            }, 100 + timeBuff);
          } else {
            setTimeout(function () {
              slice.animate({
                width: origWidth,
                opacity: '1.0'
              }, settings.animSpeed);
            }, 100 + timeBuff);
          }

          timeBuff += 50;
          i++;
        });
      } else if (currentEffect === 'fade') {
        createSlices(slider, settings, vars);
        firstSlice = $('.nivo-slice:first', slider);
        firstSlice.css({
          'width': slider.width() + 'px'
        });
        firstSlice.animate({
          opacity: '1.0'
        }, settings.animSpeed * 2, '', function () {
          slider.trigger('nivo:animFinished');
        });
      } else if (currentEffect === 'slideInRight') {
        createSlices(slider, settings, vars);
        firstSlice = $('.nivo-slice:first', slider);
        firstSlice.css({
          'width': '0px',
          'opacity': '1'
        });
        firstSlice.animate({
          width: slider.width() + 'px'
        }, settings.animSpeed * 2, '', function () {
          slider.trigger('nivo:animFinished');
        });
      } else if (currentEffect === 'slideInLeft') {
        createSlices(slider, settings, vars);
        firstSlice = $('.nivo-slice:first', slider);
        firstSlice.css({
          'width': '0px',
          'opacity': '1',
          'left': '',
          'right': '0px'
        });
        firstSlice.animate({
          width: slider.width() + 'px'
        }, settings.animSpeed * 2, '', function () {
          // Reset positioning
          firstSlice.css({
            'left': '0px',
            'right': ''
          });
          slider.trigger('nivo:animFinished');
        });
      } else if (currentEffect === 'boxRandom') {
        createBoxes(slider, settings, vars);
        totalBoxes = settings.boxCols * settings.boxRows;
        i = 0;
        timeBuff = 0;
        boxes = shuffle($('.nivo-box', slider));
        boxes.each(function () {
          var box = $(this);

          if (i === totalBoxes - 1) {
            setTimeout(function () {
              box.animate({
                opacity: '1'
              }, settings.animSpeed, '', function () {
                slider.trigger('nivo:animFinished');
              });
            }, 100 + timeBuff);
          } else {
            setTimeout(function () {
              box.animate({
                opacity: '1'
              }, settings.animSpeed);
            }, 100 + timeBuff);
          }

          timeBuff += 20;
          i++;
        });
      } else if (currentEffect === 'boxRain' || currentEffect === 'boxRainReverse' || currentEffect === 'boxRainGrow' || currentEffect === 'boxRainGrowReverse') {
        createBoxes(slider, settings, vars);
        totalBoxes = settings.boxCols * settings.boxRows;
        i = 0;
        timeBuff = 0; // Split boxes into 2D array

        var rowIndex = 0;
        var colIndex = 0;
        var box2Darr = [];
        box2Darr[rowIndex] = [];
        boxes = $('.nivo-box', slider);

        if (currentEffect === 'boxRainReverse' || currentEffect === 'boxRainGrowReverse') {
          boxes = $('.nivo-box', slider)._reverse();
        }

        boxes.each(function () {
          box2Darr[rowIndex][colIndex] = $(this);
          colIndex++;

          if (colIndex === settings.boxCols) {
            rowIndex++;
            colIndex = 0;
            box2Darr[rowIndex] = [];
          }
        }); // Run animation

        for (var cols = 0; cols < settings.boxCols * 2; cols++) {
          var prevCol = cols;

          for (var rows = 0; rows < settings.boxRows; rows++) {
            if (prevCol >= 0 && prevCol < settings.boxCols) {
              /* Due to some weird JS bug with loop vars
              being used in setTimeout, this is wrapped
              with an anonymous function call */
              (function (row, col, time, i, totalBoxes) {
                var box = $(box2Darr[row][col]);
                var w = box.width();
                var h = box.height();

                if (currentEffect === 'boxRainGrow' || currentEffect === 'boxRainGrowReverse') {
                  box.width(0).height(0);
                }

                if (i === totalBoxes - 1) {
                  setTimeout(function () {
                    box.animate({
                      opacity: '1',
                      width: w,
                      height: h
                    }, settings.animSpeed / 1.3, '', function () {
                      slider.trigger('nivo:animFinished');
                    });
                  }, 100 + time);
                } else {
                  setTimeout(function () {
                    box.animate({
                      opacity: '1',
                      width: w,
                      height: h
                    }, settings.animSpeed / 1.3);
                  }, 100 + time);
                }
              })(rows, prevCol, timeBuff, i, totalBoxes);

              i++;
            }

            prevCol--;
          }

          timeBuff += 100;
        }
      }
    }; // Shuffle an array


    var shuffle = function shuffle(arr) {
      for (var j, x, i = arr.length; i; j = parseInt(Math.random() * i, 10), x = arr[--i], arr[i] = arr[j], arr[j] = x) {
        ;
      }

      return arr;
    }; // For debugging


    var trace = function trace(msg) {
      if (this.console && typeof console.log !== 'undefined') {
        console.log(msg);
      }
    }; // Start / Stop


    this.stop = function () {
      if (!$(element).data('nivo:vars').stop) {
        $(element).data('nivo:vars').stop = true;
        trace('Stop Slider');
      }
    };

    this.start = function () {
      if ($(element).data('nivo:vars').stop) {
        $(element).data('nivo:vars').stop = false;
        trace('Start Slider');
      }
    }; // Trigger the afterLoad callback


    settings.afterLoad.call(this);
    return this;
  };

  $.fn.nivoSlider = function (options) {
    return this.each(function (key, value) {
      var element = $(this); // Return early if this element already has a plugin instance

      if (element.data('nivoslider')) {
        return element.data('nivoslider');
      } // Pass options to plugin constructor


      var nivoslider = new NivoSlider(this, options); // Store plugin object in this element's data

      element.data('nivoslider', nivoslider);
    });
  }; //Default settings


  $.fn.nivoSlider.defaults = {
    effect: 'random',
    slices: 15,
    boxCols: 8,
    boxRows: 4,
    animSpeed: 500,
    pauseTime: 3000,
    startSlide: 0,
    directionNav: true,
    controlNav: true,
    controlNavThumbs: false,
    pauseOnHover: true,
    manualAdvance: false,
    prevText: 'Prev',
    nextText: 'Next',
    randomStart: false,
    beforeChange: function beforeChange() {},
    afterChange: function afterChange() {},
    slideshowEnd: function slideshowEnd() {},
    lastSlide: function lastSlide() {},
    afterLoad: function afterLoad() {}
  };
  $.fn._reverse = [].reverse;
})(jQuery);

/***/ }),

/***/ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.72.0/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.4.12+webpack@5.72.0/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./resources/js/Lib/nivo-slider.css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@5.2.7_webpack@5.72.0/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.4.12+webpack@5.72.0/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./resources/js/Lib/nivo-slider.css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_72_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/.pnpm/css-loader@5.2.7_webpack@5.72.0/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.72.0/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_72_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_5_2_7_webpack_5_72_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_5_2_7_webpack_5_72_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\r\n * jQuery Nivo Slider v3.2\r\n * http://nivo.dev7studios.com\r\n *\r\n * Copyright 2012, Dev7studios\r\n * Free to use and abuse under the MIT license.\r\n * http://www.opensource.org/licenses/mit-license.php\r\n */\r\n \r\n/* The Nivo Slider styles */\r\n/* #container {\r\n    width:100%;\r\n    height:100%;\r\n    overflow:hidden;\r\n    position:fixed;\r\n    top:0px;\r\n    left:0px;\r\n}\r\n.nivoSlider {\r\n    position:fixed;\r\n    top:-16px;\r\n    left:0px;\r\n}\r\n.nivoSlider img {position:absolute;\r\n    top:0px;\r\n    left:0px;\r\n} */\r\n.nivoSlider {\r\n\tposition:relative;\r\n\twidth:100%;\r\n\theight:auto;\r\n\toverflow: hidden;\r\n}\r\n.nivoSlider img {\r\n\tposition:absolute;\r\n\ttop:0px;\r\n\tleft:0px;\r\n\tmax-width: none;\r\n}\r\n.nivoSlider .layer-5{\r\n\tposition:absolute;\r\n\ttop:0px;\r\n\tleft:0px;\r\n\tmax-width: none;\r\n}\r\n.nivoSlider .layer-7{\r\n\tposition:absolute;\r\n\ttop:0px;\r\n\tleft:0px;\r\n\tmax-width: none;\r\n}\r\n.nivo-main-image {\r\n\tdisplay: block !important;\r\n\tposition: relative !important; \r\n\twidth: 100% !important;\r\n}\r\n\r\n/* If an image is wrapped in a link */\r\n.nivoSlider a.nivo-imageLink {\r\n\tposition:absolute;\r\n\ttop:0px;\r\n\tleft:0px;\r\n\twidth:100%;\r\n\theight:100%;\r\n\tborder:0;\r\n\tpadding:0;\r\n\tmargin:0;\r\n\tz-index:6;\r\n\tdisplay:none;\r\n\tbackground:white; \r\n\tfilter:alpha(opacity=0); \r\n\topacity:0;\r\n}\r\n/* The slices and boxes in the Slider */\r\n.nivo-slice {\r\n\tdisplay:block;\r\n\tposition:absolute;\r\n\tz-index:5;\r\n\theight:100%;\r\n\ttop:0;\r\n}\r\n.nivo-box {\r\n\tdisplay:block;\r\n\tposition:absolute;\r\n\tz-index:5;\r\n\toverflow:hidden;\r\n}\r\n.nivo-box img { display:block; }\r\n\r\n/* Caption styles */\r\n.nivo-caption {\r\n\tposition:absolute;\r\n\tleft:0px;\r\n\tbottom:0px;\r\n\tcolor:#fff;\r\n\twidth:100%;\r\n\tz-index:8;\r\n\tpadding: 5px 10px;\r\n\topacity: 2;\r\n\toverflow: hidden;\r\n\tdisplay: none;\r\n\t-moz-opacity: 0.8;\r\n\tfilter:alpha(opacity=8); /* Safari/Chrome, other WebKit */    /* Firefox, other Gecko */\r\n\tbox-sizing: border-box;         /* Opera/IE 8+ */\r\n}\r\n.nivo-caption p {\r\n\tpadding:5px;\r\n\tmargin:0;\r\n}\r\n.nivo-caption a {\r\n\tdisplay:inline !important;\r\n}\r\n.nivo-html-caption {\r\n    display:none;\r\n}\r\n/* Direction nav styles (e.g. Next & Prev) */\r\n.nivo-directionNav a {\r\n\tposition:absolute;\r\n\ttop:45%;\r\n\tz-index:9;\r\n\tcursor:pointer;\r\n}\r\n.nivo-prevNav {\r\n\tleft:0px;\r\n}\r\n.nivo-nextNav {\r\n\tright:0px;\r\n}\r\n/* Control nav styles (e.g. 1,2,3...) */\r\n.nivo-controlNav {\r\n\ttext-align:center;\r\n\tpadding: 15px 0;\r\n}\r\n.nivo-controlNav a {\r\n\tcursor:pointer;\r\n}\r\n.nivo-controlNav a.active {\r\n\tfont-weight:bold;\r\n}\r\n/* ------------------------------\r\nDefault Theme\r\n---------------------------------*/\r\n.slider-direction {\r\n\tposition: absolute;\r\n\tleft:0; \r\n\ttop:0;  \r\n\twidth: 100%;\r\n\tbackground: none;\r\n\tcolor: #fff;\r\n\tfont-size: 16px;\r\n\tz-index: 999;\r\n\tdisplay: none;\r\n}\r\n\r\n/* If an image is wrapped in a link */\r\n.nivoSlider a.nivo-imageLink {\r\n    position:absolute;\r\n    top:0px;\r\n    left:0px;\r\n    width:100%;\r\n    height:100%;\r\n    border:0;\r\n    padding:0;\r\n    margin:0;\r\n    z-index:6;\r\n    display:none;\r\n    background:white; \r\n    filter:alpha(opacity=0); \r\n    opacity:0;\r\n}\r\n/* The slices and boxes in the Slider */\r\n.nivo-slice {\r\n    display:block;\r\n    position:absolute;\r\n    z-index:5;\r\n    height:100%;\r\n    top:0;\r\n}\r\n.nivo-box {\r\n    display:block;\r\n    position:absolute;\r\n    z-index:5;\r\n    overflow:hidden;\r\n}\r\n.nivo-box img { display:block; }\r\n.nivo-caption {\r\n  position:absolute;\r\n    left:0; \r\n    top:0;  \r\n    color:#fff;\r\n    width:100%;\r\n    height: 100%;\r\n    z-index:8;\r\n}\r\n.nivo-main-image {\r\n    display: block !important;\r\n    position: relative !important; \r\n    width: 100% !important;\r\n}\r\n/* The slices and boxes in the Slider */\r\n.nivo-slice {\r\n    display:block;\r\n    position:absolute;\r\n    z-index:5;\r\n    height:100%;\r\n    top:0;\r\n}\r\n.nivo-box {\r\n    display:block;\r\n    position:absolute;\r\n    z-index:5;\r\n    overflow:hidden;\r\n}\r\n@-webkit-keyframes myfirst {\r\n  from {width: 0;}\r\n  to {width: 100%;}\r\n }\r\n @keyframes myfirst {\r\n  from {width: 0;}\r\n  to {width: 100%;}\r\n }\r\n .slider-progress.pos_hover{\r\n  -webkit-animation-play-state: paused;\r\n  animation-play-state: paused;\r\n }\r\n/* ------------------------------\r\ncustom slider\r\n---------------------------------*/\r\n.slider-progress{\r\n\tposition:absolute;\r\n\ttop:0;\r\n\tleft:0;\r\n\tbackground-color: rgba(255, 255, 255, .7);\r\n\theight:5px;\r\n\t-webkit-animation: myfirst 5000ms ease-in-out;\r\n\tanimation: myfirst 5000ms ease-in-out;\r\n}\r\n.s-tb{\r\n\tdisplay: table;\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tfloat: left;\r\n}\r\n.s-tb-c{\r\n\tdisplay: table-cell;\r\n    vertical-align: middle;\r\n}\r\n.t-cn{text-align: center}\r\n.t-lft{text-align: left}\r\n.t-lfr{text-align: right}\r\n/* ------------------------------\r\nslider animation\r\n---------------------------------*/\r\n/* -------------- Home 1  ---------------- */\r\n.slider-1 h1,.slider-1 h1{\r\n    -webkit-animation: bounceInUp 1000ms ease-in-out;\r\n    animation: bounceInUp 1000ms ease-in-out;\r\n}\r\n .slider-1 h2,.slider-1 h2{\r\n        -webkit-animation: fadeInRight 1500ms ease-in-out;\r\n    animation: fadeInRight 1500ms ease-in-out;\r\n}\r\n\r\n .slider-1 h3,.slider-1 h3{\r\n    -webkit-animation: fadeInLeft 1500ms ease-in-out;\r\n    animation: fadeInLeft 1500ms ease-in-out;\r\n}\r\n .slider-2 h1,.slider-2 h1{\r\n    -webkit-animation: bounceInUp 2000ms ease-in-out;\r\n    animation: bounceInUp 2000ms ease-in-out;\r\n}\r\n.slider-2 h3,.slider-2 h3{\r\n    -webkit-animation: fadeInLeft 1500ms ease-in-out;\r\n    animation: fadeInLeft 1500ms ease-in-out;\r\n}\r\n\r\n/* -------------- Home 2  ---------------- */\r\n .slider-2 h1{\r\n        -webkit-animation: fadeInLeft 500ms ease-in-out;\r\n    animation: fadeInLeft 500ms ease-in-out;\r\n}\r\n .slider-2 h3{\r\n        -webkit-animation: fadeInLeft 1500ms ease-in-out;\r\n    animation: fadeInLeft 1500ms ease-in-out;\r\n}\r\n.layer-1{\r\n    -webkit-animation: fadeInUpBig 1500ms ease-in-out;\r\n    animation: fadeInUpBig 1500ms ease-in-out;\r\n}\r\n .layer-2{\r\n\t-webkit-animation: zoomInDown 2000ms ease-in-out;\r\n    animation: zoomInDown 2000ms ease-in-out;\r\n}\r\n.slide-all{\r\n    -webkit-animation: bounceInUp 1000ms ease-in-out;\r\n    animation: bounceInUp 1000ms ease-in-out;\r\n}\r\n.layer-3{\r\n\t -webkit-animation: fadeInRight 1500ms ease-in-out;\r\n    animation: fadeInRight 1500ms ease-in-out;\r\n}\r\n .layer-1-1{\r\n\t-webkit-animation: fadeInRight 1500ms ease-in-out;\r\n    animation: fadeInRight 1500ms ease-in-out;\r\n}\r\n .slider-2 p{\r\n        -webkit-animation: fadeInLeft 1500ms ease-in-out;\r\n    animation: fadeInLeft 1500ms ease-in-out;\r\n}\r\n.layer-5{\r\n\t -webkit-animation: fadeInRight 1500ms ease-in-out;\r\n    animation: fadeInRight 1500ms ease-in-out;\r\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.72.0/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.4.12+webpack@5.72.0/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./resources/js/Lib/preview.css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@5.2.7_webpack@5.72.0/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.4.12+webpack@5.72.0/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./resources/js/Lib/preview.css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_72_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/.pnpm/css-loader@5.2.7_webpack@5.72.0/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.72.0/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_72_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_5_2_7_webpack_5_72_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_72_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/.pnpm/css-loader@5.2.7_webpack@5.72.0/node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.72.0/node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_72_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_5_2_7_webpack_5_72_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_loading_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/loading.gif */ "./resources/js/Lib/img/loading.gif");
/* harmony import */ var _img_bullets_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/bullets.png */ "./resources/js/Lib/img/bullets.png");
/* harmony import */ var _img_arrows_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/arrows.png */ "./resources/js/Lib/img/arrows.png");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_5_2_7_webpack_5_72_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_pnpm_css_loader_5_2_7_webpack_5_72_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_loading_gif__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_pnpm_css_loader_5_2_7_webpack_5_72_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_bullets_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_pnpm_css_loader_5_2_7_webpack_5_72_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_arrows_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\nSkin Name: Nivo Slider Default Theme\nSkin URI: http://nivo.dev7studios.com\nDescription: The default skin for the Nivo Slider.\nVersion: 1.3\nAuthor: Gilbert Pellegrom\nAuthor URI: http://dev7studios.com\nSupports Thumbs: true\n*/\n/* -------------------------------------\npreview-1\n---------------------------------------- */\n.preview-1 .nivoSlider {\n\tposition:relative;\n\tbackground: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat 50% 50%;\n}\n.preview-1 .nivoSlider img {\n\tposition:absolute;\n\ttop:0px;\n\tleft:0px;\n\tdisplay:none;\n}\n.preview-1 .nivoSlider a {\n\tborder:0;\n\tdisplay:block;\n}\n\n.preview-1 .nivo-controlNav {\n\ttext-align: center;\n\tpadding: 20px 0;\n}\n.preview-1 .nivo-controlNav a {\n\tdisplay:inline-block;\n\twidth:22px;\n\theight:22px;\n\tbackground:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\n\ttext-indent:-9999px;\n\tborder:0;\n\tmargin: 0 2px;\n}\n.preview-1 .nivo-controlNav a.active {\n\tbackground-position:0 -22px;\n}\n\n.preview-1 .nivo-directionNav a {\n\tdisplay:block;\n\twidth:30px;\n\theight:30px;\n\tbackground:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat;\n\ttext-indent:-9999px;\n\tborder:0;\n\topacity: 0;\n transition: all 200ms ease-in-out;\n}\n.preview-1:hover .nivo-directionNav a { opacity: 1; }\n.preview-1 a.nivo-nextNav {\n\tbackground-position:-30px 0;\n\tright:15px;\n}\n.preview-1 a.nivo-prevNav {\n\tleft:15px;\n}\n.preview-1 .nivo-caption {\n    font-family: Helvetica, Arial, sans-serif;\n}\n.preview-1 .nivo-caption a {\n    color:#fff;\n    border-bottom:1px dotted #fff;\n}\n.preview-1 .nivo-caption a:hover {\n    color:#fff;\n}\n\n.preview-1 .nivo-controlNav.nivo-thumbs-enabled {\n\twidth: 100%;\n}\n.preview-1 .nivo-controlNav.nivo-thumbs-enabled a {\n\twidth: auto;\n\theight: auto;\n\tbackground: none;\n\tmargin-bottom: 5px;\n}\n.preview-1 .nivo-controlNav.nivo-thumbs-enabled img {\n\tdisplay: block;\n\twidth: 120px;\n\theight: auto;\n}\n.preview-1 .nivo-controlNav {\n    position: relative;\n    z-index: 99999;\n    bottom: 68px;\n}\n.preview-1 .nivo-controlNav a {\n\tborder:5px solid #fff;\n\tdisplay: inline-block;\n\theight:18px;\n\tmargin: 0 5px;\n\ttext-indent: -9999px;\n\twidth:18px;\n\tline-height: 8px;\n\tbackground: #3c3c3c;\n\tcursor: pointer;\n\tposition: relative;\n\tz-index: 9;\n\tborder-radius: 100%;\n\topacity: 0;\n\tz-index: -999;\n}\n.preview-1:hover .nivo-controlNav a{\n  opacity: 1;\n  z-index: 999999;\n}\n.preview-1 .nivo-controlNav a:hover, .preview-1 .nivo-controlNav a.active {\n    background: #000;\n    cursor: pointer;\n}\n/* -------------------------------------\npreview-2\n---------------------------------------- */\n.preview-2 .nivoSlider:hover .nivo-directionNav a.nivo-prevNav {\n  left: 15px;\n}\n.preview-2 .nivoSlider:hover .nivo-directionNav a.nivo-nextNav{\n  right: 65px;\n}\n.preview-2 .nivoSlider .nivo-directionNav a.nivo-prevNav {\n  left: -34px;\n  font-size: 0;\n}\n.preview-2 .nivoSlider .nivo-directionNav a.nivo-nextNav {\n  right: 16px;\n    font-size: 0;\n}\n.preview-2 .nivo-directionNav a.nivo-prevNav:hover:before{\n  background: #fff;\n  color: #000;\n}\n.preview-2 .nivo-directionNav a.nivo-prevNav:before{\n  background: rgba(0,0,0,0.25);\n  content: \"\\f053\";\n  font: normal normal normal 14px/1 FontAwesome;\n  color: #fff;\n  cursor: pointer;\n  font-size: 25px;\n  font-weight: 400;\n  height: 50px;\n  line-height: 50px;\n  margin: 0;\n  position: absolute;\n  text-align: center;\n  top: 45%;\n  transition: all 300ms ease-in 0s;\n  width: 50px;\n  z-index: 9;\n}\n.preview-2 .nivo-directionNav a.nivo-nextNav:hover:before{\n  background:#fff;\n  color: #000\n}\n.preview-2 .nivo-directionNav a.nivo-nextNav:before{\n  background: rgba(0,0,0,0.25);\n  content: \"\\f054\";\n  font: normal normal normal 14px/1 FontAwesome;\n  color: #fff;\n  cursor: pointer;\n  font-size: 25px;\n  font-weight: 400;\n  height: 50px;\n  line-height: 50px;\n  margin: 0;\n  position: absolute;\n  text-align: center;\n  top: 45%;\n  transition: all 300ms ease-in 0s;\n  width: 50px;\n  z-index: 9;\n}\n.preview-2 .nivo-controlNav {\n    position: relative;\n    z-index: 91;\n    bottom: 0px;\n}\n.preview-2 .nivo-controlNav a {\n\tborder:5px solid #fff;\n\tdisplay: inline-block;\n\theight:18px;\n\tmargin: 0 5px;\n\ttext-indent: -9999px;\n\twidth:18px;\n\tline-height: 8px;\n\tbackground: #3c3c3c;\n\tcursor: pointer;\n\tposition: relative;\n\tz-index: 9;\n\tborder-radius: 100%;\n\topacity: 0;\n\tz-index: -999;\n}\n.preview-2:hover .nivo-controlNav a{\n  opacity: 1;\n  z-index: 999999;\n}\n.preview-2 .nivo-controlNav a:hover, .preview-2 .nivo-controlNav a.active {\n    background: #000;\n    cursor: pointer;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.72.0/node_modules/css-loader/dist/runtime/getUrl.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@5.2.7_webpack@5.72.0/node_modules/css-loader/dist/runtime/getUrl.js ***!
  \***********************************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./resources/js/Lib/img/arrows.png":
/*!*****************************************!*\
  !*** ./resources/js/Lib/img/arrows.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/arrows.png?064a0cb1a69b641d2f737354ef87eb7c");

/***/ }),

/***/ "./resources/js/Lib/img/bullets.png":
/*!******************************************!*\
  !*** ./resources/js/Lib/img/bullets.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/bullets.png?03e7bd0a03d7ecc78b19c19b6bfaa4f6");

/***/ }),

/***/ "./resources/js/Lib/img/loading.gif":
/*!******************************************!*\
  !*** ./resources/js/Lib/img/loading.gif ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/loading.gif?c601cb127f3667bf933525dfc9bd8b87");

/***/ }),

/***/ "./resources/js/Lib/nivo-slider.css":
/*!******************************************!*\
  !*** ./resources/js/Lib/nivo-slider.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_style_loader_2_0_0_webpack_5_72_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.72.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/.pnpm/style-loader@2.0.0_webpack@5.72.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_2_0_0_webpack_5_72_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_2_0_0_webpack_5_72_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_72_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_12_webpack_5_72_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_nivo_slider_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/.pnpm/css-loader@5.2.7_webpack@5.72.0/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.4.12+webpack@5.72.0/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./nivo-slider.css */ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.72.0/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.4.12+webpack@5.72.0/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./resources/js/Lib/nivo-slider.css");



var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_pnpm_style_loader_2_0_0_webpack_5_72_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_5_2_7_webpack_5_72_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_12_webpack_5_72_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_nivo_slider_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_5_2_7_webpack_5_72_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_12_webpack_5_72_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_nivo_slider_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Lib/preview.css":
/*!**************************************!*\
  !*** ./resources/js/Lib/preview.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_style_loader_2_0_0_webpack_5_72_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.72.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/.pnpm/style-loader@2.0.0_webpack@5.72.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_2_0_0_webpack_5_72_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_2_0_0_webpack_5_72_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_72_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_12_webpack_5_72_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_preview_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/.pnpm/css-loader@5.2.7_webpack@5.72.0/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.4.12+webpack@5.72.0/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./preview.css */ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.72.0/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.4.12+webpack@5.72.0/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./resources/js/Lib/preview.css");



var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_pnpm_style_loader_2_0_0_webpack_5_72_0_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_5_2_7_webpack_5_72_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_12_webpack_5_72_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_preview_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_5_2_7_webpack_5_72_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_12_webpack_5_72_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_preview_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Components/ProductModel.vue":
/*!**************************************************!*\
  !*** ./resources/js/Components/ProductModel.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductModel_vue_vue_type_template_id_4fe7eb76__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductModel.vue?vue&type=template&id=4fe7eb76 */ "./resources/js/Components/ProductModel.vue?vue&type=template&id=4fe7eb76");
/* harmony import */ var _ProductModel_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductModel.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Components/ProductModel.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var E_Projects_Github_urbanstrick_node_modules_pnpm_vue_loader_16_8_3_webpack_5_72_0_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,E_Projects_Github_urbanstrick_node_modules_pnpm_vue_loader_16_8_3_webpack_5_72_0_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ProductModel_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProductModel_vue_vue_type_template_id_4fe7eb76__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/ProductModel.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Front/LandingPage.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Front/LandingPage.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LandingPage_vue_vue_type_template_id_6f079be7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LandingPage.vue?vue&type=template&id=6f079be7 */ "./resources/js/Pages/Front/LandingPage.vue?vue&type=template&id=6f079be7");
/* harmony import */ var _LandingPage_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LandingPage.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Front/LandingPage.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var E_Projects_Github_urbanstrick_node_modules_pnpm_vue_loader_16_8_3_webpack_5_72_0_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,E_Projects_Github_urbanstrick_node_modules_pnpm_vue_loader_16_8_3_webpack_5_72_0_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LandingPage_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LandingPage_vue_vue_type_template_id_6f079be7__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Front/LandingPage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/ProductModel.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Components/ProductModel.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_pnpm_babel_loader_8_2_4_acba72ea4bf9d339cdfcd8f55cdb7006_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_webpack_5_72_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductModel_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_babel_loader_8_2_4_acba72ea4bf9d339cdfcd8f55cdb7006_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_webpack_5_72_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductModel_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/.pnpm/babel-loader@8.2.4_acba72ea4bf9d339cdfcd8f55cdb7006/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductModel.vue?vue&type=script&setup=true&lang=js */ "./node_modules/.pnpm/babel-loader@8.2.4_acba72ea4bf9d339cdfcd8f55cdb7006/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/ProductModel.vue?vue&type=script&setup=true&lang=js");


/***/ }),

/***/ "./resources/js/Pages/Front/LandingPage.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Front/LandingPage.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_pnpm_babel_loader_8_2_4_acba72ea4bf9d339cdfcd8f55cdb7006_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_webpack_5_72_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LandingPage_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_babel_loader_8_2_4_acba72ea4bf9d339cdfcd8f55cdb7006_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_webpack_5_72_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LandingPage_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/.pnpm/babel-loader@8.2.4_acba72ea4bf9d339cdfcd8f55cdb7006/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LandingPage.vue?vue&type=script&setup=true&lang=js */ "./node_modules/.pnpm/babel-loader@8.2.4_acba72ea4bf9d339cdfcd8f55cdb7006/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Front/LandingPage.vue?vue&type=script&setup=true&lang=js");


/***/ }),

/***/ "./resources/js/Components/ProductModel.vue?vue&type=template&id=4fe7eb76":
/*!********************************************************************************!*\
  !*** ./resources/js/Components/ProductModel.vue?vue&type=template&id=4fe7eb76 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_pnpm_babel_loader_8_2_4_acba72ea4bf9d339cdfcd8f55cdb7006_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_webpack_5_72_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_16_8_3_webpack_5_72_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductModel_vue_vue_type_template_id_4fe7eb76__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_babel_loader_8_2_4_acba72ea4bf9d339cdfcd8f55cdb7006_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_webpack_5_72_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_16_8_3_webpack_5_72_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductModel_vue_vue_type_template_id_4fe7eb76__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/.pnpm/babel-loader@8.2.4_acba72ea4bf9d339cdfcd8f55cdb7006/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductModel.vue?vue&type=template&id=4fe7eb76 */ "./node_modules/.pnpm/babel-loader@8.2.4_acba72ea4bf9d339cdfcd8f55cdb7006/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/ProductModel.vue?vue&type=template&id=4fe7eb76");


/***/ }),

/***/ "./resources/js/Pages/Front/LandingPage.vue?vue&type=template&id=6f079be7":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Front/LandingPage.vue?vue&type=template&id=6f079be7 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_pnpm_babel_loader_8_2_4_acba72ea4bf9d339cdfcd8f55cdb7006_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_webpack_5_72_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_16_8_3_webpack_5_72_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LandingPage_vue_vue_type_template_id_6f079be7__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_babel_loader_8_2_4_acba72ea4bf9d339cdfcd8f55cdb7006_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_webpack_5_72_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_16_8_3_webpack_5_72_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LandingPage_vue_vue_type_template_id_6f079be7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/.pnpm/babel-loader@8.2.4_acba72ea4bf9d339cdfcd8f55cdb7006/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LandingPage.vue?vue&type=template&id=6f079be7 */ "./node_modules/.pnpm/babel-loader@8.2.4_acba72ea4bf9d339cdfcd8f55cdb7006/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Front/LandingPage.vue?vue&type=template&id=6f079be7");


/***/ })

}]);
