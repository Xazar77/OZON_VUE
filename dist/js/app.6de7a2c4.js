(function(){"use strict";var t={7208:function(t,s,e){var a=e(6369),r=function(){var t=this,s=t._self._c;return s("div",{staticClass:"wrapper"},[s("header-component",{scopedSlots:t._u([{key:"cartOpen",fn:function(){return[s("a",{attrs:{href:"#",id:"cart"},on:{click:t.onCartOpen}},[s("span",{staticClass:"counter"},[t._v(t._s(t.Count.length))]),s("span",{staticClass:"icon"},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[s("path",{attrs:{fill:"currentColor","fill-rule":"nonzero",d:"M6 6a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2h5.133L21.82 18.496A4 4 0 0 1 17.85 22H6.149a4 4 0 0 1-3.969-3.504L.867 8H6V6zm6 2a1 1 0 0 1 0 2H3.133l1.03 8.248A2 2 0 0 0 6.149 20h11.704a2 2 0 0 0 1.984-1.752L20.867 10H16V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2h4z"}})])]),s("span",{staticClass:"desc"},[t._v("Корзина")])])]},proxy:!0}])}),s("main-view"),t.isCartOpen?s("cart-component",[s("div",{staticClass:"cart-close",on:{click:t.onCartClose}})]):t._e()],1)},i=[],c=function(){var t=this,s=t._self._c;return s("main",[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-3 col-xl-2 d-none d-lg-block"},[s("filter-component")],1),s("div",{staticClass:"col-12 col-lg-9 col-xl-10"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row no-gutters goods"},t._l(t.goods,(function(t){return s("goods-item-card-component",{key:t.id,attrs:{card:t}})})),1)])])])])])},n=[],o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"col-12 col-md-6 col-lg-4 col-xl-3"},[s("div",{ref:"card",staticClass:"card",attrs:{"data-set":t.card.id},on:{click:function(s){return t.addCard(t.card.id)}}},[t.card.sale?s("div",{staticClass:"card-sale"},[t._v("🔥Hot Sale🔥")]):t._e(),s("div",{staticClass:"card-img-wrapper"},[s("span",{staticClass:"card-img-top",style:`background-image: url(${t.card.img})`})]),s("div",{staticClass:"card-body justify-content-between"},[s("div",{staticClass:"card-price"},[t._v(t._s(t.card.price)+" ₽")]),s("h5",{staticClass:"card-title"},[t._v(t._s(t.card.title))]),s("button",{staticClass:"btn btn-primary"},[t._v("В корзину")])])])])},l=[],d={props:{card:{type:Object,default(){return{}}}},methods:{addCard(t){fetch("https://ozon-615cf-default-rtdb.firebaseio.com/goods.json").then((t=>t.json())).then((s=>{const e=s.find((s=>s.id===t)),a={img:e.img,price:e.price,sale:e.sale,title:e.title};this.$store.dispatch("setCardsIncr",a)}))}}},u=d,p=e(1001),h=(0,p.Z)(u,o,l,!1,null,null,null),f=h.exports,C=function(){var t=this,s=t._self._c;return s("div",{staticClass:"filter"},[t._m(0),s("div",{staticClass:"filter-price"},[s("div",{staticClass:"filter-price_title"},[t._v(" Цена ")]),s("form",{on:{input:t.onPriceFilter}},[s("div",{staticClass:"filter-price_range"},[s("div",{staticClass:"filter-price_input-wrapper"},[s("label",{staticClass:"filter-price_label",attrs:{for:"min"}},[t._v("от")]),s("input",{ref:"min",staticClass:"filter-price_input",attrs:{id:"min",type:"number"}})]),s("div",{staticClass:"filter-price_input-wrapper"},[s("label",{staticClass:"filter-price_label",attrs:{for:"max"}},[t._v("до")]),s("input",{ref:"max",staticClass:"filter-price_input",attrs:{id:"max",type:"number"}})])])])]),s("div",{staticClass:"filter-check"},[s("label",{staticClass:"filter-check_label"},[s("input",{staticClass:"filter-check_checkbox",attrs:{type:"checkbox",id:"discount-checkbox"},on:{click:t.onCheked}}),s("span",{staticClass:"filter-check_checkmark",class:""+(t.isChecked?"checked":"")}),s("span",{staticClass:"filter-check_label-text"},[t._v("Акция")])])])])},v=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"filter-title"},[s("h5",[t._v("Фильтр")])])}],m={data(){return{isChecked:!1}},methods:{onCheked(){this.isChecked=!this.isChecked,fetch("https://ozon-615cf-default-rtdb.firebaseio.com/goods.json").then((t=>t.json())).then((t=>{this.$store.dispatch("setGoods",t.filter((t=>t.sale===this.isChecked)).filter((t=>""!=this.$refs.max.value?this.isChecked?t.price>=this.$refs.min.value&&t.price<=this.$refs.max.value&&t.sale===this.isChecked:t.price>=this.$refs.min.value&&t.price<=this.$refs.max.value:this.isChecked?+t.price>=+this.$refs.min.value&&t.sale==this.isChecked:+t.price>=+this.$refs.min.value)))}))},onPriceFilter(){fetch("https://ozon-615cf-default-rtdb.firebaseio.com/goods.json").then((t=>t.json())).then((t=>{this.$store.dispatch("setGoods",t.filter((t=>""!=this.$refs.max.value?this.isChecked?t.price>=this.$refs.min.value&&t.price<=this.$refs.max.value&&t.sale===this.isChecked:t.price>=this.$refs.min.value&&t.price<=this.$refs.max.value:this.isChecked?+t.price>=+this.$refs.min.value&&t.sale==this.isChecked:+t.price>=+this.$refs.min.value)))}))}}},g=m,_=(0,p.Z)(g,C,v,!1,null,null,null),b=_.exports,k={components:{GoodsItemCardComponent:f,FilterComponent:b},computed:{goods(){return this.$store.getters["getGoods"]}},mounted(){fetch("https://ozon-615cf-default-rtdb.firebaseio.com/goods.json").then((t=>t.json())).then((t=>{this.$store.dispatch("setGoods",t)}))}},w=k,x=(0,p.Z)(w,c,n,!1,null,null,null),y=x.exports,O=function(){var t=this,s=t._self._c;return s("header",[s("nav",[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"navbar-wrapper d-flex justify-content-between align-items-center"},[s("a",{staticClass:"logo",attrs:{href:"/"}}),s("div",{staticClass:"d-flex control-wrapper"},[s("div",{staticClass:"catalog-button",on:{click:t.catalogOpen}},[t._m(0),s("div",{staticClass:"catalog"},[t.isCatalogOpen?s("ul",{staticClass:"catalog-list",on:{click:function(s){return t.runCatalogItem(s)}}},[s("li",[t._v("Игровая приставка")]),s("li",[t._v("Периферия для ПК")]),s("li",[t._v("Игры и софт")])]):t._e()])]),s("search-component")],1),t._t("cartOpen")],2)])])])])])},$=[function(){var t=this,s=t._self._c;return s("button",[s("span",{staticClass:"catalog-button_burger"}),s("span",{staticClass:"catalog-button_text"},[t._v("Каталог")])])}],j=function(){var t=this,s=t._self._c;return s("div",{staticClass:"search"},[s("div",{staticClass:"search-wrapper"},[s("input",{staticClass:"search-wrapper_input",attrs:{type:"text"},on:{input:function(s){return t.searchItemGoods(s)}}})]),t._m(0)])},S=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"search-btn"},[s("button")])}],I={methods:{searchItemGoods(t){fetch("https://ozon-615cf-default-rtdb.firebaseio.com/goods.json").then((t=>t.json())).then((s=>{this.$store.dispatch("setGoods",s.filter((s=>s.title.toLowerCase().includes(t.target.value.toLowerCase()))))}))}}},G=I,Z=(0,p.Z)(G,j,S,!1,null,null,null),z=Z.exports,P={data(){return{isCatalogOpen:!1}},components:{SearchComponent:z},methods:{catalogOpen(){this.isCatalogOpen=!this.isCatalogOpen},runCatalogItem(t){fetch("https://ozon-615cf-default-rtdb.firebaseio.com/goods.json").then((t=>t.json())).then((s=>{this.$store.dispatch("setGoods",s.filter((s=>s.category.includes(t.target.textContent))))}))}}},L=P,D=(0,p.Z)(L,O,$,!1,null,null,null),H=D.exports,T=function(){var t=this,s=t._self._c;return s("div",{staticClass:"cart"},[s("div",{staticClass:"cart-body"},[s("div",{staticClass:"cart-title"},[t._v("Корзина")]),s("div",{staticClass:"cart-total"},[t._v(" Общая сумма: "),s("span",[t._v(t._s(t.TotalPrice(t.cards)))]),t._v(" руб ")]),s("div",{staticClass:"cart-wrapper"},[s("card-in-cart-component")],1),s("button",{staticClass:"btn btn-primary cart-confirm",on:{click:function(s){return s.preventDefault(),t.onSubmitCard(t.cards)}}},[t._v("Оформить заказ")]),t._t("default")],2)])},F=[],V=function(){var t=this,s=t._self._c;return s("div",{staticClass:"cart-block-wrapper"},[t.cards.length?t._l(t.cards,(function(e,a){return s("div",{key:e.id,staticClass:"card",attrs:{"data-set":e.id}},[s("div",{staticClass:"card-sale"},[t._v("🔥Hot Sale🔥")]),s("div",{staticClass:"card-img-wrapper"},[s("span",{staticClass:"card-img-top",style:`background-image: url(${e.img})`})]),s("div",{staticClass:"card-body justify-content-between"},[s("div",{staticClass:"card-price"},[t._v(t._s(e.price)+" ₽")]),s("h5",{staticClass:"card-title"},[t._v(t._s(e.title))]),s("button",{staticClass:"btn btn-primary",on:{click:function(s){return t.onDeletCard(a)}}},[t._v(" Удалить ")])])])})):[s("div",{attrs:{id:"cart-empty"}},[t._v("Ваша корзина пока пуста")])]],2)},J=[],M={data(){return{isCartVisible:!1}},computed:{cards(){return this.$store.getters["getCards"]}},methods:{onDeletCard(t){this.$store.dispatch("setCardsDecr",t)}}},N=M,A=(0,p.Z)(N,V,J,!1,null,"41b89572",null),B=A.exports,E=(e(5195),{data(){return{timer:null}},components:{CardInCartComponent:B},computed:{cards(){return this.$store.getters["getCards"]}},methods:{TotalPrice(t){return t.reduce(((t,s)=>t+s.price),0)},onSubmitCard(t){localStorage.removeItem("cards"),this.$store.dispatch("setCardsLocalStorage",[]),this.timer=setTimeout((()=>{alert("Спасибо, данные отправлены! Наш менеджер свяжется с вами")}),1e3)}},destroyed(){clearTimeout(this.timer)}}),q=E,K=(0,p.Z)(q,T,F,!1,null,null,null),Q=K.exports,R={data(){return{isCartOpen:!1}},components:{MainView:y,HeaderComponent:H,CartComponent:Q},computed:{Count(){return this.$store.getters["getCards"]}},methods:{onCartOpen(){this.isCartOpen=!0},onCartClose(){this.isCartOpen=!1},onCartClosekey(){console.log("click"),this.isCartOpen=!1}},mounted(){localStorage.getItem("cards")?this.$store.dispatch("setCardsLocalStorage",JSON.parse(localStorage.getItem("cards"))):localStorage.removeItem("cards")}},U=R,W=(0,p.Z)(U,r,i,!1,null,null,null),X=W.exports,Y=e(3822);const tt={state:{goods:[]},mutations:{setGoods(t,s){t.goods=s}},actions:{setGoods({commit:t},s){t("setGoods",s)}},getters:{getGoods(t){return t.goods}}};var st=tt;e(7658);const et={state:{cards:[],count:0},mutations:{setCardsIncr(t,s){t.cards.push(s),t.count++,localStorage.setItem("cards",JSON.stringify(t.cards))},setCardsDecr(t,s){t.cards.splice(s,1),t.count--,localStorage.setItem("cards",JSON.stringify(t.cards)),0===t.count&&localStorage.removeItem("cards")},setCardsLocalStorage(t,s){t.cards=s}},actions:{setCardsIncr({commit:t},s){t("setCardsIncr",s)},setCardsDecr({commit:t},s){t("setCardsDecr",s)},setCardsLocalStorage({commit:t},s){t("setCardsLocalStorage",s)}},getters:{getCards(t){return t.cards},getCount(t){return t.count}}};var at=et;a.ZP.use(Y.ZP);const rt=new Y.ZP.Store({modules:{goods:st,cart:at}});var it=rt;a.ZP.config.productionTip=!1,new a.ZP({store:it,render:t=>t(X)}).$mount("#app")}},s={};function e(a){var r=s[a];if(void 0!==r)return r.exports;var i=s[a]={exports:{}};return t[a](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(s,a,r,i){if(!a){var c=1/0;for(d=0;d<t.length;d++){a=t[d][0],r=t[d][1],i=t[d][2];for(var n=!0,o=0;o<a.length;o++)(!1&i||c>=i)&&Object.keys(e.O).every((function(t){return e.O[t](a[o])}))?a.splice(o--,1):(n=!1,i<c&&(c=i));if(n){t.splice(d--,1);var l=r();void 0!==l&&(s=l)}}return s}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[a,r,i]}}(),function(){e.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(s,{a:s}),s}}(),function(){e.d=function(t,s){for(var a in s)e.o(s,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:s[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){var t={143:0};e.O.j=function(s){return 0===t[s]};var s=function(s,a){var r,i,c=a[0],n=a[1],o=a[2],l=0;if(c.some((function(s){return 0!==t[s]}))){for(r in n)e.o(n,r)&&(e.m[r]=n[r]);if(o)var d=o(e)}for(s&&s(a);l<c.length;l++)i=c[l],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(d)},a=self["webpackChunkozon"]=self["webpackChunkozon"]||[];a.forEach(s.bind(null,0)),a.push=s.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(7208)}));a=e.O(a)})();
//# sourceMappingURL=app.6de7a2c4.js.map