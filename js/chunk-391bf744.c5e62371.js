(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-391bf744"],{1799:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{attrs:{"aria-label":"Page navigation"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.emitPages(t.pages.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(a,i){return e("li",{key:i,staticClass:"page-item",class:{active:a===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.emitPages(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.emitPages(t.pages.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])},s=[],r={props:{pages:{}},methods:{emitPages:function(t){this.$emit("emit-pages",t)}}},n=r,o=e("2877"),c=Object(o["a"])(n,i,s,!1,null,null,null);a["a"]=c.exports},8418:function(t,a,e){"use strict";var i=e("c04e"),s=e("9bf2"),r=e("5c6c");t.exports=function(t,a,e){var n=i(a);n in t?s.f(t,n,r(0,e)):t[n]=e}},"99af":function(t,a,e){"use strict";var i=e("23e7"),s=e("d039"),r=e("e8b5"),n=e("861d"),o=e("7b0b"),c=e("50c4"),d=e("8418"),l=e("65f0"),u=e("1dde"),p=e("b622"),f=e("2d00"),h=p("isConcatSpreadable"),g=9007199254740991,m="Maximum allowed index exceeded",v=f>=51||!s((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),_=u("concat"),b=function(t){if(!n(t))return!1;var a=t[h];return void 0!==a?!!a:r(t)},C=!v||!_;i({target:"Array",proto:!0,forced:C},{concat:function(t){var a,e,i,s,r,n=o(this),u=l(n,0),p=0;for(a=-1,i=arguments.length;a<i;a++)if(r=-1===a?n:arguments[a],b(r)){if(s=c(r.length),p+s>g)throw TypeError(m);for(e=0;e<s;e++,p++)e in r&&d(u,p,r[e])}else{if(p>=g)throw TypeError(m);d(u,p++,r)}return u.length=p,u}})},ca07:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),t.orders.length>0?e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-striped mt-5"},[t._m(0),e("tbody",t._l(t.sortOrder,(function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(t._f("date")(a.created.timestamp)))]),e("td",[e("ul",{staticClass:"list-unstyled"},t._l(a.products,(function(a,i){return e("li",{key:i},[t._v(" "+t._s(a.product.title)+" 數量："+t._s(a.quantity)+" "+t._s(a.product.unit)+" ")])})),0)]),e("td",{staticClass:"text-center"},[t._v(t._s(t._f("money")(a.amount)))]),e("td",{staticClass:"text-center"},[t._v(t._s(a.payment))]),e("td",[e("div",{staticClass:"custom-control custom-switch"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.paid,expression:"item.paid"}],staticClass:"custom-control-input",attrs:{id:a.id,type:"checkbox"},domProps:{checked:Array.isArray(a.paid)?t._i(a.paid,null)>-1:a.paid},on:{change:[function(e){var i=a.paid,s=e.target,r=!!s.checked;if(Array.isArray(i)){var n=null,o=t._i(i,n);s.checked?o<0&&t.$set(a,"paid",i.concat([n])):o>-1&&t.$set(a,"paid",i.slice(0,o).concat(i.slice(o+1)))}else t.$set(a,"paid",r)},function(e){return t.updatePayment(a)}]}}),e("label",{staticClass:"custom-control-label",attrs:{for:a.id}},[a.paid?e("strong",{staticClass:"text-success"},[t._v("已付款")]):e("span",{staticClass:"text-muted"},[t._v("尚未付款")])])])]),e("td",[e("button",{staticClass:"btn btn-outline-primary btn-sm mr-1",on:{click:function(e){return e.preventDefault(),t.openModal(a)}}},[t._v(" 查看 ")])])])})),0)]),e("Pagination",{attrs:{pages:t.pagination},on:{"emit-pages":t.getOrders}}),e("OrderModal",{ref:"orderModal"})],1):t._e()],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{width:"140"}},[t._v("購買時間")]),e("th",[t._v("購買項目")]),e("th",{attrs:{width:"140"}},[t._v("付款金額")]),e("th",{attrs:{width:"140"}},[t._v("付款方式")]),e("th",{attrs:{width:"140"}},[t._v("是否付款")]),e("th",{attrs:{width:"100"}},[t._v("客戶資料")])])])}],r=(e("99af"),e("eae4")),n=e("1799"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal fade",attrs:{id:"orderModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(0),e("div",{staticClass:"modal-body"},[e("ul",[e("li",[t._v("Email: "+t._s(t.order.user.email))]),e("li",[t._v("收件人姓名: "+t._s(t.order.user.name))]),e("li",[t._v("收件人電話: "+t._s(t.order.user.tel))]),e("li",[t._v("收件人地址: "+t._s(t.order.user.address))])])])])])])},c=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("顧客資料")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],d={data:function(){return{order:{user:{}}}},methods:{getOrder:function(t){var a=this,e="".concat("https://course-ec-api.hexschool.io/api/").concat("0b14219f-1a37-44d4-8d67-88e77b0f312a","/admin/ec/orders/").concat(t);this.$http.get(e).then((function(t){a.order=t.data.data,$("#orderModal").modal("show")})).catch((function(){r["a"].fire({title:"無法取得資料，稍後再試",icon:"error"})}))}}},l=d,u=e("2877"),p=Object(u["a"])(l,o,c,!1,null,null,null),f=p.exports,h={data:function(){return{orders:[],isLoading:!0,pagination:{},order:{user:{}},isProcessing:!1}},components:{Pagination:n["a"],OrderModal:f},created:function(){this.getOrders()},methods:{getOrders:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e="".concat("https://course-ec-api.hexschool.io/api/").concat("0b14219f-1a37-44d4-8d67-88e77b0f312a","/admin/ec/orders?page=").concat(a);this.isLoading=!0,this.$http.get(e).then((function(a){t.isLoading=!1,t.orders=a.data.data,t.pagination=a.data.meta.pagination})).catch((function(){t.isLoading=!1,r["a"].fire({title:"無法取得資料",icon:"error"})}))},updatePayment:function(t){var a=this,e="".concat("https://course-ec-api.hexschool.io/api/").concat("0b14219f-1a37-44d4-8d67-88e77b0f312a","/admin/ec/orders/").concat(t.id,"/paid");this.isLoading=!0,t.paid||(e="".concat("https://course-ec-api.hexschool.io/api/").concat("0b14219f-1a37-44d4-8d67-88e77b0f312a","/admin/ec/orders/").concat(t.id,"/unpaid")),this.$http.patch(e,t.id).then((function(){a.isLoading=!1,r["a"].fire({title:"修改成功",icon:"success"}),a.getOrders()})).catch((function(){a.isLoading=!1,r["a"].fire({title:"修改失敗",icon:"error"})}))},openModal:function(t){this.$refs.orderModal.getOrder(t.id)}},computed:{sortOrder:function(){var t=this,a=[];return t.orders.length&&(a=t.orders.sort((function(t,a){var e=t.is_paid?1:0,i=a.is_paid?1:0;return i-e}))),a}}},g=h,m=Object(u["a"])(g,i,s,!1,null,null,null);a["default"]=m.exports},eae4:function(t,a,e){"use strict";var i=e("3d20"),s=e.n(i);a["a"]=s.a.mixin({toast:!0,showConfirmButton:!1,timer:1500,padding:"1em",position:"center"})}}]);
//# sourceMappingURL=chunk-391bf744.c5e62371.js.map