(()=>{var e={284:(e,t)=>{t.init=function(){Vue.component("v-basket",{props:["goods"],template:'\n    <div class="cart">\n        <div class="cart-item" v-for="item in goods">\n            <p class="cart-item__title">{{item.title}}</p>\n            <p>{{item.quantity}} x {{item.price}}</p>\n            <button @click="$emit(\'delete\', item.id)">Удалить</button>\n        </div>\n    </div>\n  '})}},629:(e,t)=>{t.init=function(){Vue.component("v-error",{props:["message"],template:'\n    <div class="error">\n      Ошибка! {{ message }}\n    </div>\n  '})}},632:(e,t)=>{t.init=function(){Vue.component("v-goods",{props:["goods"],template:'\n    <main>\n        <section class="goods">\n            <v-item\n              v-for="item in goods"\n              v-bind:element="item"\n              v-on:addToBasket="handleAddToBasket"\n            />\n            <div v-if="!goods.length" class="goods-empty">\n                Нет данных\n            </div>\n        </section>\n    </main>\n  ',methods:{handleAddToBasket(e){this.$emit("add",e)}}})}},933:(e,t)=>{t.init=function(){Vue.component("v-header",{template:'\n    <header class="header d-flex">\n        <span class="logo">E-Shop</span>\n        <slot />\n        <button @click="handleClick" type="button" class="cart-button">Корзина</button>\n        <slot name="basket" />\n    </header>\n  ',methods:{handleClick(){this.$emit("change-is-cart-visible")}}})}},747:(e,t)=>{t.init=function(){Vue.component("v-item",{props:["element"],template:'\n    <div class="item">\n        <h4>{{element.title}}</h4>\n        <p>{{element.price}}</p>\n        <button type="button" v-on:click="addToBasket">Add to basket</button>\n    </div>\n  ',methods:{addToBasket(){this.$emit("addToBasket",this.element)}}})}},452:(e,t)=>{t.init=function(){Vue.component("v-search",{props:["value"],template:'\n    <div>\n      <input type="text" :value="value" @input="$emit(\'input\', $event.target.value)"  class="search" placeholder="Search..." />\n    </div>\n  '})}}},t={};function s(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,s),o.exports}(()=>{const e=(e,t="GET",s={})=>new Promise(((n,o)=>{const i=new XMLHttpRequest;i.timeout=1e4,i.ontimeout=()=>{console.log("timeout!")},i.onreadystatechange=()=>{4===i.readyState&&(200===i.status?n(JSON.parse(i.responseText)):(console.log("Error!",i.responseText),o(i.responseText)))},i.open(t,`http://localhost:3000/api/${e}`),i.setRequestHeader("Content-Type","application/json"),i.send(JSON.stringify(s))}));s(284).init(),s(933).init(),s(632).init(),s(747).init(),s(452).init(),s(629).init(),new Vue({el:"#app",data:{goods:[],basketGoods:[],searchValue:"",isVisible:!1,errorMessage:""},mounted(){this.fetchData(),this.fetchBasketData()},methods:{fetchData(){return new Promise(((t,s)=>{e("catalog").then((e=>{this.goods=e,t()})).catch((e=>{this.errorMessage="Не удалось получить список товаров!"}))}))},fetchBasketData(){return new Promise(((t,s)=>{e("basket").then((e=>{this.basketGoods=e,t()})).catch((e=>{this.errorMessage="Не удалось получить содержимое корзины!"}))}))},addToBasket(t){e("basket","POST",t).then((e=>{if(console.log("Result",e),!e.success)return void console.log("addToBasket Error");const s=this.basketGoods.findIndex((e=>e.id===t.id));s>-1?this.basketGoods[s].quantity+=1:this.basketGoods.push({...t,quantity:1})})).catch((e=>{this.errorMessage="Не удалось добавить элемент в корзину!"}))},removeItem(t){e(`basket/${t}`,"DELETE").then((e=>{console.log("Result",e),e.success?(this.basketGoods=this.basketGoods.filter((e=>e.id!==parseInt(t))),console.log(this.basketGoods)):console.log("addToBasket Error")})).catch((e=>{this.errorMessage="Не удалось удалить элемент из корзины!"}))}},computed:{filteredGoods(){const e=new RegExp(this.searchValue.trim(),"i");return this.goods.filter((t=>e.test(t.title)))},totalPrice(){return this.goods.reduce(((e,t)=>e+t.price),0)}}})})()})();