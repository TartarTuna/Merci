(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-441229a9"],{"62b3":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cartModal"},[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"container d-flex justify-content-center"},[t.carts.length>0?e("div",{staticClass:"col-md-7 col-12 mt-5"},[e("h5",{staticClass:"modal-title fz-3 fz-md-6 lh-4 fw-bold textColor"},[t._v("購物清單")]),t._l(t.carts,(function(a){return e("ul",{key:a.product.id+1,staticClass:"buylist mb-3"},[e("li",{staticClass:"d-flex flex-column mb-1"},[e("div",{staticClass:"cartMain d-flex p-2 bg-light align-items-center rounded-top"},[e("img",{staticClass:"buylistImg w-40 rounded",attrs:{src:a.product.imageUrl[0],alt:"buylistImg"}}),e("div",{staticClass:"buylistContent bg-light w-100 p-md-2 py-2 pl-2"},[e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("div",{staticClass:"cartTxt"},[e("p",{staticClass:"fz-2 fz-md-3-1 mb-0 pl-md-2 fw-bold textColor"},[t._v(t._s(a.product.title))]),e("p",{staticClass:"fz-1-1 fz-md-2 mb-0 pl-md-2 text-dark"},[t._v(t._s(t._f("money")(a.product.origin_price))+" / "+t._s(a.product.unit))])]),e("a",{staticClass:" textColor",on:{click:function(e){return e.preventDefault(),t.delCartItem(a.product.id)}}},[e("i",{staticClass:"fas fa-times"})])])])]),e("div",{staticClass:"quantityArea d-flex justify-content-between align-items-center bg-light p-md-2 px-2 pb-2 rounded-bottom"},[e("div",{staticClass:"bg-gray-light rounded w-50 d-flex justify-content-between align-items-center text-left border border-smallLink rounded-pill"},[e("a",{staticClass:"cursor-p p-1",attrs:{disabled:a.quantity<=1},on:{click:function(e){return e.preventDefault(),t.updateQuantity(a.product.id,a.quantity-1)}}},[e("i",{staticClass:"fas fa-minus"})]),e("input",{staticClass:"form-control border-0 text-center my-auto shadow-none bg-light",attrs:{type:"number",disabled:a.quantity<=1},domProps:{value:a.quantity},on:{change:function(e){return t.updateQuantity(a.product.id,e.target.value)}}}),e("a",{staticClass:"cursor-p p-1",on:{click:function(e){return e.preventDefault(),t.updateQuantity(a.product.id,a.quantity+1)}}},[e("i",{staticClass:"fas fa-plus"})])]),e("p",{staticClass:"w-50 fz-2 fz-md-3-1 mb-0 text-right fw-bold textColor"},[t._v("金額 "+t._s(t._f("money")(a.product.price*a.quantity)))])])])])})),e("div",{staticClass:"priceDetail mb-3"},[e("div",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"alertTxt"},[t._v("小計")]),e("p",{staticClass:"alertTxt"},[t._v(t._s(t._f("money")(t.totalPrice)))])]),t._m(0)]),e("div",{staticClass:"priceTotal d-flex justify-content-between mb-md-3"},[e("p",{staticClass:"fz-3 lh-4 fw-bold textColor"},[t._v("總計")]),e("p",{staticClass:"fz-3 lh-4 fw-bold textColor"},[t._v(t._s(t._f("money")(t.totalPrice+80)))])]),e("div",{staticClass:"d-md-flex mb-2 flex-md-row-reverse align-items-center justify-content-md-between w-md-100 mb-md-1 pb-md-4"},[e("div",{staticClass:"fillBtn text-center w-40"},[e("router-link",{staticClass:"d-block px-5 py-2",attrs:{to:"/paymentTable"}},[t._v("前往結帳")])],1),e("router-link",{staticClass:"primary text-center d-block my-3",attrs:{to:"/products"}},[e("i",{staticClass:"returnIcon fas fa-angle-left"}),e("span",[t._v(" 繼續購物")])])],1)],2):e("div",{staticClass:"col-12 my-5 my-md-1"},[e("div",{staticClass:"d-flex justify-content-center align-items-center flex-column v-100"},[e("img",{staticClass:"ideaImg",attrs:{src:"https://hexschool-api.s3.us-west-2.amazonaws.com/custom/fParBbJ6JQm3SeEg3PBISE9OL4CSnibrVJRSzdx2uAnIIyAdPs0eg0q8bL7KIZBDOa8ziHusck7sGNMQmFlWkYtGai4OrHU5gRte8CKOAxyyN3T6Yy8yop0JZn1dN44Q.svg",alt:"ideaImg"}}),t._m(1),e("div",{staticClass:"fillBtn text-center mb-3 w-30"},[e("router-link",{staticClass:"d-block px-5 py-2",attrs:{to:"/products"}},[t._v("繼續購物")])],1)])])])],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"alertTxt"},[t._v("運費")]),e("p",{staticClass:"alertTxt"},[t._v("NT $80")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h3",{staticClass:"my-5 lh-1 fz-3 fw-400 text-center"},[t._v("您的購物車是空的，"),e("br"),t._v("趕快放入喜歡的商品吧！")])}],n=(e("99af"),e("4160"),e("159b"),e("eae4")),c={data:function(){return{carts:{},totalPrice:0,isLoading:!1}},created:function(){this.getCart()},methods:{getCart:function(){var t=this,a="".concat("https://course-ec-api.hexschool.io/api/").concat("0b14219f-1a37-44d4-8d67-88e77b0f312a","/ec/shopping");this.isLoading=!0,this.$http.get(a).then((function(a){t.carts=a.data.data,t.updateTotal(),t.$bus.$emit("get-cart"),t.isLoading=!1})).catch((function(){t.isLoading=!1,n["a"].fire({title:"購物車讀取失敗",icon:"error"})}))},updateTotal:function(){var t=0;this.carts.forEach((function(a){t+=a.product.price*a.quantity})),this.totalPrice=t},updateQuantity:function(t,a){var e=this;if(!(a<=0)){this.isLoading=!0;var i="".concat("https://course-ec-api.hexschool.io/api/").concat("0b14219f-1a37-44d4-8d67-88e77b0f312a","/ec/shopping"),s={product:t,quantity:a};this.$http.patch(i,s).then((function(){e.getCart(),n["a"].fire({text:"更新成功",icon:"success"}),e.isLoading=!1})).catch((function(){n["a"].fire({title:"更新失敗",icon:"error"}),e.isLoading=!1}))}},delCartItem:function(t){var a=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api/").concat("0b14219f-1a37-44d4-8d67-88e77b0f312a","/ec/shopping/").concat(t);this.$http.delete(e).then((function(){a.updateTotal(),a.getCart(),n["a"].fire({text:"刪除成功",icon:"success"}),a.isLoading=!1})).catch((function(){n["a"].fire({text:"刪除失敗",icon:"error"}),a.isLoading=!1}))}}},r=c,o=e("2877"),l=Object(o["a"])(r,i,s,!1,null,null,null);a["default"]=l.exports},8418:function(t,a,e){"use strict";var i=e("c04e"),s=e("9bf2"),n=e("5c6c");t.exports=function(t,a,e){var c=i(a);c in t?s.f(t,c,n(0,e)):t[c]=e}},"99af":function(t,a,e){"use strict";var i=e("23e7"),s=e("d039"),n=e("e8b5"),c=e("861d"),r=e("7b0b"),o=e("50c4"),l=e("8418"),d=e("65f0"),u=e("1dde"),f=e("b622"),p=e("2d00"),m=f("isConcatSpreadable"),b=9007199254740991,h="Maximum allowed index exceeded",g=p>=51||!s((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),v=u("concat"),C=function(t){if(!c(t))return!1;var a=t[m];return void 0!==a?!!a:n(t)},x=!g||!v;i({target:"Array",proto:!0,forced:x},{concat:function(t){var a,e,i,s,n,c=r(this),u=d(c,0),f=0;for(a=-1,i=arguments.length;a<i;a++)if(n=-1===a?c:arguments[a],C(n)){if(s=o(n.length),f+s>b)throw TypeError(h);for(e=0;e<s;e++,f++)e in n&&l(u,f,n[e])}else{if(f>=b)throw TypeError(h);l(u,f++,n)}return u.length=f,u}})},eae4:function(t,a,e){"use strict";var i=e("3d20"),s=e.n(i);a["a"]=s.a.mixin({toast:!0,showConfirmButton:!1,timer:1500,padding:"1em",position:"center"})}}]);
//# sourceMappingURL=chunk-441229a9.a9965e4d.js.map