(function(e){function t(t){for(var o,a,i=t[0],c=t[1],l=t[2],d=0,f=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},s={app:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("a026"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{search:e.searchValue,"v-basket-goods":e.basketGoods,"v-visible":e.visible},on:{remove:e.removeItem,visible:function(t){e.visible=!e.visible}},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}}),n("Goods",{attrs:{goods:e.filteredGoods},on:{"handle-add":e.addToBasket}})],1)},r=[],a=(n("4de4"),n("c740"),n("d81d"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("498a"),n("5530")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("div",{staticClass:"logo"},[e._v("E-Shop")]),n("Search",{staticClass:"search",attrs:{placeholder:"Search...",id:"search"},on:{input:e.inputVal}}),n("button",{staticClass:"cart-button",on:{click:e.visible}},[e._v("Корзина")]),n("Basket",{directives:[{name:"show",rawName:"v-show",value:e.vVisible,expression:"vVisible"}],attrs:{basketGoods:e.vBasketGoods},on:{remove:e.remove}})],1)},c=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"basket"},[n("section",{staticClass:"basketGoods"},e._l(e.basketGoods,(function(t){return n("ItemBasket",{key:t.title,attrs:{element:t},on:{remove:e.remove}})})),1)])},u=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"itemBasket"},[n("h4",[e._v(e._s(e.element.title))]),n("p",[e._v("Стоимость - "+e._s(e.element.price))]),n("p",[e._v("Количество - "+e._s(e.element.quantity))]),n("button",{staticClass:"remove",on:{click:e.remove}},[e._v(" Remove")])])},f=[],p={name:"ItemBasket",props:["element"],methods:{remove:function(){this.$emit("remove",this.element)}}},h=p,m=n("2877"),v=Object(m["a"])(h,d,f,!1,null,"e16ed192",null),b=v.exports,k={name:"Basket",props:["basketGoods"],methods:{remove:function(e){this.$emit("remove",e)}},components:{ItemBasket:b}},g=k,_=Object(m["a"])(g,l,u,!1,null,"c16e712c",null),y=_.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("input",{staticClass:"search",attrs:{placeholder:"Search...",id:"search"},on:{input:function(t){return e.$emit("input",t.target.value)}}})},O=[],x={name:"Search",props:["search"]},S=x,j=Object(m["a"])(S,G,O,!1,null,"51d7e07a",null),w=j.exports,T={name:"Header",props:["vBasketGoods","vVisible","search","total-price"],data:function(){return{vSearch:""}},methods:{visible:function(){this.$emit("visible")},inputVal:function(e){this.$emit("input",e)},remove:function(e){this.$emit("remove",e)}},components:{Basket:y,Search:w}},B=T,$=Object(m["a"])(B,i,c,!1,null,"3d8e6fc0",null),P=$.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("section",{staticClass:"goods"},e._l(e.goods,(function(t){return n("Item",{key:t.title,attrs:{element:t},on:{addTo:e.add}})})),1)])},E=[],I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item"},[n("h4",[e._v(e._s(e.element.title))]),n("p",[e._v(e._s(e.element.price))]),n("button",{staticClass:"add-to-basket",on:{click:e.addToBasket}},[e._v(" Add to basket")])])},V=[],q={name:"Item",props:["element"],methods:{addToBasket:function(){this.$emit("addTo",this.element)}}},R=q,H=Object(m["a"])(R,I,V,!1,null,"56feb6d7",null),M=H.exports,D={name:"Goods",props:["goods"],methods:{add:function(e){this.$emit("handle-add",e)}},components:{Item:M}},J=D,N=Object(m["a"])(J,C,E,!1,null,"d118e52e",null),A=N.exports,L="http://localhost:3000/api",X=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"POST",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(o,s){var r=new XMLHttpRequest;r.timeout=1e4,r.ontimeout=function(){console.log("timeout!")},r.onreadystatechange=function(){4===r.readyState&&(200===r.status?o(JSON.parse(r.responseText)):(console.log("Error!",r.responseText),s(r.responseText)))},r.open(t,"".concat(L,"/").concat(e)),r.setRequestHeader("Content-type","application/json"),r.send(JSON.stringify(n))}))},z={name:"App",components:{Header:P,Goods:A},data:function(){return{goods:[],basketGoods:[],searchValue:"",visible:!1,errorStatus:!1}},mounted:function(){this.fetchData(),this.fetchBasketData()},methods:{fetchData:function(){var e=this;return new Promise((function(t){X("catalog","GET").then((function(n){e.goods=n,t()})).catch((function(){e.errorStatus=!0,t()}))}))},fetchBasketData:function(){var e=this;return new Promise((function(t){X("basket","GET").then((function(n){e.basketGoods=n,t()})).catch((function(){e.errorStatus=!0,t()}))}))},addToBasket:function(e){var t=this;X("basket","POST",e).then((function(n){if(console.log("Result",n),n.success){var o=t.basketGoods.findIndex((function(t){return t.id===e.id}));o>-1?t.basketGoods[o].quantity+=1:t.basketGoods.push(Object(a["a"])(Object(a["a"])({},e),{},{quantity:1})),console.log(t.basketGoods)}else console.log("addToBasket error")}))},removeItem:function(e){var t=this;X("basket-remove","POST",e).then((function(n){if(console.log("Result",n),n.success){var o=t.basketGoods.findIndex((function(t){return t.id===e.id}));o>-1&&(t.basketGoods[o].quantity>1?t.basketGoods[o].quantity-=1:t.basketGoods=t.basketGoods.filter((function(t){return t.id!==parseInt(e.id)}))),console.log(e)}else console.log("Remove to basket error")}))}},computed:{filteredGoods:function(){var e=new RegExp(this.searchValue.trim(),"i");return this.goods.filter((function(t){return e.test(t.title)}))},totalPrice:function(){var e=0;return this.goods.map((function(t){e+=t.price,console.log(e)})),e}}},F=z,K=(n("034f"),Object(m["a"])(F,s,r,!1,null,null,null)),Q=K.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(Q)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.e5459c0a.js.map