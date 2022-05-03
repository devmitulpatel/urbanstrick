"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Front_ProductPage_vue"],{

/***/ "./node_modules/.pnpm/babel-loader@8.2.4_acba72ea4bf9d339cdfcd8f55cdb7006/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Front/ProductPage.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/babel-loader@8.2.4_acba72ea4bf9d339cdfcd8f55cdb7006/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Front/ProductPage.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_FrontEnd_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/FrontEnd.vue */ "./resources/js/Layouts/FrontEnd.vue");
/* harmony import */ var _Lib_LaravelHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Lib/LaravelHelper */ "./resources/js/Lib/LaravelHelper.js");

var __default__ = {
  // Using the shorthand
  layout: _Layouts_FrontEnd_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  props: {
    site: Object,
    auth: Object,
    product: Array
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var currentCart = (0,_Lib_LaravelHelper__WEBPACK_IMPORTED_MODULE_1__.manageCart)();

    var addProduct = function addProduct(product) {
      currentCart.add(product, 1);
    };

    var __returned__ = {
      props: props,
      currentCart: currentCart,
      addProduct: addProduct,
      FrontEndLayout: _Layouts_FrontEnd_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      manageCart: _Lib_LaravelHelper__WEBPACK_IMPORTED_MODULE_1__.manageCart
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/.pnpm/babel-loader@8.2.4_acba72ea4bf9d339cdfcd8f55cdb7006/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Front/ProductPage.vue?vue&type=template&id=70865282":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/babel-loader@8.2.4_acba72ea4bf9d339cdfcd8f55cdb7006/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Front/ProductPage.vue?vue&type=template&id=70865282 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/.pnpm/vue@3.2.31/node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "contact-img-area"
};
var _hoisted_2 = {
  "class": "container"
};
var _hoisted_3 = {
  "class": "row"
};
var _hoisted_4 = {
  "class": "col-md-12"
};
var _hoisted_5 = {
  "class": "con-text"
};
var _hoisted_6 = {
  "class": "page-title"
};
var _hoisted_7 = {
  "class": "single-product-area"
};
var _hoisted_8 = {
  "class": "container"
};
var _hoisted_9 = {
  "class": "row"
};
var _hoisted_10 = {
  "class": "col-lg-9 col-xl-9 col-md-12 col-12"
};
var _hoisted_11 = {
  "class": "row"
};
var _hoisted_12 = {
  "class": "col-lg-6 col-md-6"
};
var _hoisted_13 = {
  "class": "tab-zoom"
};
var _hoisted_14 = {
  "class": "tab-content"
};
var _hoisted_15 = {
  id: "image1",
  "class": "tab-pane fade show active"
};
var _hoisted_16 = {
  "class": "s_big"
};
var _hoisted_17 = {
  href: "img/product/t1.jpg",
  "class": "demo4"
};
var _hoisted_18 = ["src"];
var _hoisted_19 = {
  id: "image2",
  "class": "tab-pane fade"
};
var _hoisted_20 = {
  "class": "s_big"
};
var _hoisted_21 = {
  href: "img/product/z1.jpg",
  "class": "demo4"
};
var _hoisted_22 = ["src"];

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "image3",
  "class": "tab-pane fade"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "s_big"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "img/product/z2.jpg",
  "class": "demo4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "img/product/1.jpg",
  alt: ""
})])])], -1
/* HOISTED */
);

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"thumnail-image fix\"><ul class=\"tab-menu nav\"><li><a class=\"active\" data-bs-toggle=\"tab\" href=\"#image1\"><img alt=\"\" src=\"img/product/9.jpg\"></a></li><li><a data-bs-toggle=\"tab\" href=\"#image2\"><img alt=\"\" src=\"img/product/2.jpg\"></a></li><li class=\"zoom-mrgn-none\"><a data-bs-toggle=\"tab\" href=\"#image3\"><img alt=\"\" src=\"img/product/1.jpg\"></a></li></ul></div>", 1);

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-lg-6 col-md-6\"><div class=\"entry-summary\"><div class=\"entry-title\">Glasses</div><div class=\"tb-product-wrap-price-rating\"><div class=\"tb-product-price font-noraure-3 nurore\"><span class=\"amount2 ana\">$79.00 - </span><span class=\"amount2 ana\">$100.00</span></div><div class=\"stock\"> Avaiability: <span> in stock</span></div></div><div class=\"description\"><p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p></div><form action=\"#\" class=\"woocommerce-shipping-calculator\"><p class=\"form-row form-row-wide\"><label> Color <span class=\"required\">*</span></label><select class=\"email s-email s-wid\"><option>Choose an option</option><option>Black</option></select></p><p class=\"form-row form-row-wide\"><label> Brand <span class=\"required\">*</span></label><select class=\"email s-email s-wid\"><option>Choose an option</option><option>Nike</option><option>Religion</option><option>Diesel</option><option>Monki</option></select></p></form><div class=\"single-price\"><div><p class=\"single-price-top\">Price:</p></div><div class=\"ro-quantity clearfix\"><label> Qty: <span class=\"s-color\"> *</span></label><div class=\"quantity\"><div class=\"cart-plus-minus\"><input type=\"text\" value=\"0\" name=\"qtybutton\" class=\"cart-plus-minus-box\"></div></div></div><div class=\"add-two-single\"><div class=\"last-cart l-mrgn ns\"><a class=\"las4\" href=\"#\">Add To Cart</a></div><div class=\"tb-product-btn shp\"><a href=\"#\"><i class=\"fa fa-eye\"></i></a><a href=\"#\"><i class=\"fa fa-heart\"></i></a><a href=\"#\"><i class=\"fa fa-retweet\"></i></a></div></div><div class=\"capture-pn\"><img src=\"img/icon-img/capture.png\" alt=\"\"></div></div></div></div>", 1);

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-sin"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Nav tabs "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "nav",
  role: "tablist"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "active",
  href: "#home",
  "data-bs-toggle": "tab"
}, "Description")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#profile",
  "data-bs-toggle": "tab"
}, "Additional Information")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#messages",
  "data-bs-toggle": "tab"
}, "Reviews (0)")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#tag",
  "data-bs-toggle": "tab"
}, " TAGS")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#video",
  "data-bs-toggle": "tab"
}, " Video")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Tab panes "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane active sin-ha",
  id: "home"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Product Description"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane sin-ha",
  id: "profile"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Additional Information"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", {
  "class": "shop_attributes"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": ""
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Color"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Black, Orange")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "alt"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Brand"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Nike, Religion, Diesel, Monki")])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane sin-ha",
  id: "messages"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Reviews"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "woocommerce-nore"
}, "There are no reviews yet."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Be the first to review “Glasses” "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
  action: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "sin-form2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "woocommerce-nore2"
}, "Your Rating"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-star-o"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-star-o"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-star-o"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-star-o"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fa fa-star-o"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-md-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "l-contact"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Your Review "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("em", null, "*")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
  "class": "form-control",
  name: "message",
  required: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-md-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "di-na"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "l-contact"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Name "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("em", null, "*")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  "class": "form-control",
  type: "text",
  name: "name",
  required: ""
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-md-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "di-na"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "l-contact"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Email "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("em", null, "*")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  "class": "form-control",
  type: "email",
  name: "name",
  required: ""
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-md-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "last-cart-con s-icon2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  "class": "wpcf7",
  type: "submit",
  value: "Submit"
})])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane",
  id: "tag"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "tagged_as"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Tag: "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  rel: "tag",
  href: "#"
}, "Featured")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "tab-pane",
  id: "video"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "post-format-area"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "blog_video ratio ratio-16x9"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
  "class": "embed-responsive-item",
  src: "https://www.youtube.com/embed/87Fx45Bwy-E?list=PLFii9RzqhPhGIXp9ouuse2pVqIOTI0VrM",
  allowfullscreen: ""
})])])])])], -1
/* HOISTED */
);

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-xl-3 col-lg-3 col-md-12 col-12\"><div class=\"top-shop-sidebar an-shop\"><h3 class=\"wg-title\">UpSell Products</h3><ul><li class=\"b-none\"><div class=\"tb-recent-thumbb\"><a href=\"#\"><img class=\"attachment\" src=\"img/product/p1.jpg\" alt=\"\"></a></div><div class=\"tb-recentb\"><div class=\"tb-beg\"><a href=\"#\">Lambskin Shoe</a></div><div class=\"tb-product-price font-noraure-3\"><span class=\"amount\">$180.00</span><span class=\"amount2 ana\">$170.00</span></div></div></li><li class=\"b-none\"><div class=\"tb-recent-thumbb\"><a href=\"#\"><img class=\"attachment\" src=\"img/product/p2.jpg\" alt=\"\"></a></div><div class=\"tb-recentb\"><div class=\"tb-beg\"><a href=\"#\">Luxury Leather Bag</a></div><div class=\"tb-product-price font-noraure-3\"><span class=\"amount2 ana\">$170.00</span></div></div></li><li class=\"b-none agn\"><div class=\"tb-recent-thumbb\"><a href=\"#\"><img class=\"attachment\" src=\"img/product/p3.jpg\" alt=\"\"></a></div><div class=\"tb-recentb\"><div class=\"tb-beg\"><a href=\"#\">Vintage Glasses</a></div><div class=\"tb-product-price font-noraure-3\"><span class=\"amount2 ana\">$170.00</span></div></div></li></ul></div><div class=\"ro-info-box-wrap tpl3 st\"><div class=\"tb-image\"><img alt=\"\" src=\"img/product/a1.jpg\"></div><div class=\"tb-content\"><div class=\"tb-content-inner an-inner\"><h5>WOMEN&#39;S FASHION</h5><h3>MID SEASON SALE</h3><h6><a href=\"#\">SHOP NOW</a></h6></div></div></div></div>", 1);

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"single-pro-area7\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-12\"><div class=\"last-line\"><h3 class=\"wg-title\">Related Products</h3></div></div></div><div class=\"non7\"><div class=\"row\"><!-- single-product start --><div class=\"col-xl-3 col-lg-4 col-md-6\"><div class=\"tb-product-item-inner tb2 pct-last\"><img alt=\"\" src=\"img/product/1.jpg\"><a class=\"la-icon\" href=\"#productModal\" title=\"Quick View\" data-bs-toggle=\"modal\"><i class=\"fa fa-eye\"></i></a><div class=\"tb-content\"><div class=\"tb-it\"><div class=\"tb-beg\"><a href=\"#\">Leather Bag</a></div><div class=\"tb-product-wrap-price-rating\"><div class=\"tb-product-price font-noraure-3\"><span class=\"amount\">$180.00</span><span class=\"amount2 ana\">$170.00</span></div></div><div class=\"last-cart l-mrgn\"><a class=\"las3\" href=\"#\"><i class=\"fa fa-heart\"></i></a><a class=\"las4\" href=\"#\">Add To Cart</a><a class=\"las3 las7\" href=\"#\"><i class=\"fa fa-retweet\"></i></a></div></div></div></div></div><!-- single-product end --><!-- single-product start --><div class=\"col-xl-3 col-lg-4 col-md-6\"><div class=\"tb-product-item-inner tb2 pct-last\"><span class=\"onsale two\">Sale!</span><img alt=\"\" src=\"img/product/9.jpg\"><a class=\"la-icon\" href=\"#productModal\" title=\"Quick View\" data-bs-toggle=\"modal\"><i class=\"fa fa-eye\"></i></a><div class=\"tb-content\"><div class=\"tb-it\"><div class=\"tb-beg\"><a href=\"#\">Glasses</a></div><div class=\"tb-product-wrap-price-rating\"><div class=\"tb-product-price font-noraure-3\"><span class=\"amount2 ana\">$79.00 - </span><span class=\"amount2 ana\">$100.00</span></div></div><div class=\"last-cart l-mrgn\"><a class=\"las3\" href=\"#\"><i class=\"fa fa-heart\"></i></a><a class=\"las4\" href=\"#\">Add To Cart</a><a class=\"las3 las7\" href=\"#\"><i class=\"fa fa-retweet\"></i></a></div></div></div></div></div><!-- single-product end --><!-- single-product start --><div class=\"col-xl-3 col-lg-4 col-md-6\"><div class=\"tb-product-item-inner tb2 pct-last\"><span class=\"onsale\">Sale!</span><img alt=\"\" src=\"img/product/7.jpg\"><a class=\"la-icon\" href=\"#productModal\" title=\"Quick View\" data-bs-toggle=\"modal\"><i class=\"fa fa-eye\"></i></a><div class=\"tb-content\"><div class=\"tb-it\"><div class=\"tb-beg\"><a href=\"#\">Skin Shoulder Bag</a></div><div class=\"tb-product-wrap-price-rating\"><div class=\"tb-product-price font-noraure-3\"><span class=\"amount2 ana\">$170.00</span></div></div><div class=\"last-cart l-mrgn\"><a class=\"las3\" href=\"#\"><i class=\"fa fa-heart\"></i></a><a class=\"las4\" href=\"#\">Add To Cart</a><a class=\"las3 las7\" href=\"#\"><i class=\"fa fa-retweet\"></i></a></div></div></div></div></div><!-- single-product end --><!-- single-product start --><div class=\"col-xl-3 col-lg-4 col-md-6\"><div class=\"tb-product-item-inner tb2 pct-last res res2\"><span class=\"onsale\">Sale!</span><img alt=\"\" src=\"img/product/6.jpg\"><a class=\"la-icon\" href=\"#productModal\" title=\"Quick View\" data-bs-toggle=\"modal\"><i class=\"fa fa-eye\"></i></a><div class=\"tb-content\"><div class=\"tb-it\"><div class=\"tb-beg\"><a href=\"#\">Vintage Glasses</a></div><div class=\"tb-product-wrap-price-rating\"><div class=\"tb-product-price font-noraure-3\"><span class=\"amount2 ana\">$199.00</span></div></div><div class=\"last-cart l-mrgn\"><a class=\"las3\" href=\"#\"><i class=\"fa fa-heart\"></i></a><a class=\"las4\" href=\"#\">Add To Cart</a><a class=\"las3 las7\" href=\"#\"><i class=\"fa fa-retweet\"></i></a></div></div></div></div></div><!-- single-product end --></div></div></div></section>", 1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.product.data.name), 1
  /* TEXT */
  )])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Tab panes "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $props.product.data.url,
    alt: ""
  }, null, 8
  /* PROPS */
  , _hoisted_18)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $props.product.data.url,
    alt: ""
  }, null, 8
  /* PROPS */
  , _hoisted_22)])])]), _hoisted_23]), _hoisted_24])]), _hoisted_25]), _hoisted_26]), _hoisted_27])])]), _hoisted_28], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Pages/Front/ProductPage.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Front/ProductPage.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductPage_vue_vue_type_template_id_70865282__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductPage.vue?vue&type=template&id=70865282 */ "./resources/js/Pages/Front/ProductPage.vue?vue&type=template&id=70865282");
/* harmony import */ var _ProductPage_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductPage.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Front/ProductPage.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var E_Projects_Github_urbanstrick_node_modules_pnpm_vue_loader_16_8_3_webpack_5_72_0_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,E_Projects_Github_urbanstrick_node_modules_pnpm_vue_loader_16_8_3_webpack_5_72_0_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ProductPage_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProductPage_vue_vue_type_template_id_70865282__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Front/ProductPage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Front/ProductPage.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Front/ProductPage.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_pnpm_babel_loader_8_2_4_acba72ea4bf9d339cdfcd8f55cdb7006_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_webpack_5_72_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductPage_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_babel_loader_8_2_4_acba72ea4bf9d339cdfcd8f55cdb7006_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_webpack_5_72_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductPage_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/.pnpm/babel-loader@8.2.4_acba72ea4bf9d339cdfcd8f55cdb7006/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductPage.vue?vue&type=script&setup=true&lang=js */ "./node_modules/.pnpm/babel-loader@8.2.4_acba72ea4bf9d339cdfcd8f55cdb7006/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Front/ProductPage.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Front/ProductPage.vue?vue&type=template&id=70865282":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Front/ProductPage.vue?vue&type=template&id=70865282 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_pnpm_babel_loader_8_2_4_acba72ea4bf9d339cdfcd8f55cdb7006_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_webpack_5_72_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_16_8_3_webpack_5_72_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductPage_vue_vue_type_template_id_70865282__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_babel_loader_8_2_4_acba72ea4bf9d339cdfcd8f55cdb7006_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_webpack_5_72_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_16_8_3_webpack_5_72_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProductPage_vue_vue_type_template_id_70865282__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/.pnpm/babel-loader@8.2.4_acba72ea4bf9d339cdfcd8f55cdb7006/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProductPage.vue?vue&type=template&id=70865282 */ "./node_modules/.pnpm/babel-loader@8.2.4_acba72ea4bf9d339cdfcd8f55cdb7006/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_webpack@5.72.0/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Front/ProductPage.vue?vue&type=template&id=70865282");


/***/ })

}]);