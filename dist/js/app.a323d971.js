(function(t){function s(s){for(var n,c,r=s[0],o=s[1],l=s[2],d=0,f=[];d<r.length;d++)c=r[d],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&f.push(i[c][0]),i[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(s);while(f.length)f.shift()();return a.push.apply(a,l||[]),e()}function e(){for(var t,s=0;s<a.length;s++){for(var e=a[s],n=!0,r=1;r<e.length;r++){var o=e[r];0!==i[o]&&(n=!1)}n&&(a.splice(s--,1),t=c(c.s=e[0]))}return t}var n={},i={app:0},a=[];function c(s){if(n[s])return n[s].exports;var e=n[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=n,c.d=function(t,s,e){c.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,s){if(1&s&&(t=c(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var n in t)c.d(e,n,function(s){return t[s]}.bind(null,n));return e},c.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(s,"a",s),s},c.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=s,r=r.slice();for(var l=0;l<r.length;l++)s(r[l]);var u=o;a.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"097e":function(t,s){(function(t){var s,e=t.document,n=e.documentElement;function i(){var t=n.getBoundingClientRect().width,s=t/7.5;n.style.fontSize=s+"px"}t.addEventListener("resize",(function(){clearTimeout(s),s=setTimeout(i,10)}),!1),t.addEventListener("pageshow",(function(t){t.persisted&&(clearTimeout(s),s=setTimeout(i,10))}),!1),i()})(window)},"0a8b":function(t,s,e){},"0bb1":function(t,s,e){"use strict";e("7c97")},2427:function(t,s,e){},3228:function(t,s,e){"use strict";e("2427")},"3fcc":function(t,s,e){"use strict";e("cac0")},"46a1":function(t,s,e){},"473d":function(t,s,e){"use strict";e("0a8b")},"4ee2":function(t,s,e){},"56d7":function(t,s,e){"use strict";e.r(s);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},a=[],c=e("2877"),r={},o=Object(c["a"])(r,i,a,!1,null,null,null),l=o.exports,u=e("8c4f"),d=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("van-sticky",{attrs:{"offset-top":0}},[e("div",{staticClass:"header"},[e("input",{staticClass:"search",attrs:{type:"text",placeholder:"请输入商家或者商品名称"}})])]),e("category"),e("div",{staticClass:" title"},[t._v(" 附近商家 ")]),e("list")],1)},f=[],p=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("ul",{staticClass:"cate-box"},t._l(t.cateList,(function(s){return e("li",{key:s.id,staticClass:"cate-list"},[e("img",{staticClass:"cate-img",attrs:{src:s.img}}),e("p",{staticClass:"cate-title"},[t._v(t._s(s.name))])])})),0)])},v=[],h=(e("d3b7"),e("bc3a")),m=e.n(h),_="http://admin.gxxmglzx.com/tender/test",C=function(t){var s=t.url,e=t.data,n=void 0===e?{}:e;return new Promise((function(t){m.a.get(_+s,{params:n}).then((function(s){200==s.data.errcode?t(s.data):console.log(s.errmsg)})).catch((function(t){console.log(t)}))}))};function b(t){return C({url:"/get_type",data:t})}function x(t){return C({url:"/get_store",data:t})}var g={data:function(){return{cateList:[]}},created:function(){var t=this;b().then((function(s){t.cateList=s.data}))}},y=g,w=(e("90fb"),Object(c["a"])(y,p,v,!1,null,"76b039d2",null)),j=w.exports,E=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.getData},model:{value:t.loading,callback:function(s){t.loading=s},expression:"loading"}},[e("ul",{staticClass:"list-container"},t._l(t.list,(function(s){return e("li",{key:s.id,staticClass:"shop-box",on:{click:function(e){return t.goDetail(s.id)}}},[e("div",{staticClass:"img-box"},[e("img",{attrs:{src:s.img}})]),e("div",{staticClass:"info-box"},[e("div",{staticClass:"title"},[t._v(t._s(s.name))]),e("div",{staticClass:"rate-box"},[e("div",[e("star",{attrs:{score:s.score}}),e("span",{staticClass:"rate"},[t._v(t._s(s.score)+"分")]),e("span",[t._v("月销"+t._s(s.num))])],1),e("div",[e("span",[t._v(t._s(s.minute)+"分钟")]),e("span",{staticClass:"left-line"},[t._v(t._s(s.distance))])])]),e("div",{staticClass:"distribution-box"},[e("span",[t._v("起送"+t._s(s.price))]),e("span",{staticClass:"left-line"},[t._v("配送"+t._s(s.fee))]),e("span",{staticClass:"left-line"},[t._v("人均"+t._s(s.per_capita))])])])])})),0)])],1)},$=[],O=(e("99af"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"star-box"},t._l(5,(function(s){return e("i",{key:s,class:t.getClass(s)})})),0)}),L=[],k={props:{score:{default:5}},methods:{getClass:function(t){return this.score%1==0?t<this.score?"icon-star-active":"icon-star":t<this.score?"icon-star-active":t==Math.ceil(this.score)?"icon-star-half":"icon-star"}}},S=k,P=(e("ea3f"),Object(c["a"])(S,O,L,!1,null,"250a9ad3",null)),M=P.exports,T=e("2bdd");n["a"].use(T["a"]);var Y={data:function(){return{current:0,size:10,list:[],loading:!1,finished:!1,total:0}},components:{star:M},methods:{getData:function(){var t=this;x({current:this.current,size:this.size}).then((function(s){t.list=t.list.concat(s.data.list),t.loading=!1,t.current++,t.total=s.data.total,t.list.length>=t.total&&(t.finished=!0)}))},goDetail:function(t){this.$router.push({path:"/detail",query:{id:t}})}}},z=Y,B=(e("3fcc"),Object(c["a"])(z,E,$,!1,null,"32990c3e",null)),D=B.exports,N={components:{category:j,list:D}},I=N,q=(e("3228"),Object(c["a"])(I,d,f,!1,null,"daa24c7a",null)),H=q.exports,A=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"scrollBox"},[e("div",[e("sellerHeader",{attrs:{seller:t.seller}}),e("van-tabs",{attrs:{sticky:"",animated:"",color:"#ffda41"},model:{value:t.active,callback:function(s){t.active=s},expression:"active"}},[e("van-tab",{attrs:{title:"点餐"}},[e("order")],1),e("van-tab",{attrs:{title:"评价"}},[e("comment")],1),e("van-tab",{attrs:{title:"商家"}},[e("seller",{attrs:{seller:t.seller}})],1)],1)],1),0==t.active?e("cart",{attrs:{seller:t.seller}}):t._e()],1)},J=[];function R(t){return C({url:"/get_store_id",data:t})}function F(t){return C({url:"/get_nav",data:t})}var G=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("div",{staticClass:"header",on:{click:function(s){return t.$router.push("/")}}},[e("span",{staticClass:"iconfont icon-xiangzuo"})]),e("div",{staticClass:"seller-box"},[e("div",{staticClass:"img-box"},[e("img",{attrs:{src:t.seller.img}})]),e("div",{staticClass:"info-box"},[e("div",{staticClass:"time"},[t._v(t._s(t.seller.delivery_time)+"分钟 "+t._s(t.seller.distance))]),e("div",{staticClass:"notice"},[t._v(t._s(t.seller.notice))]),e("div",{staticClass:"sale"},[t._v(t._s(t.seller.full))])])])])},K=[],Q={props:["seller"]},U=Q,V=(e("473d"),Object(c["a"])(U,G,K,!1,null,"44162146",null)),W=V.exports,X=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"order-box"},[e("div",{ref:"menuBox",staticClass:"menu-box"},[e("ul",t._l(t.prodList,(function(s,n){return e("li",{key:n,staticClass:"menu-list",class:t.getActive(n),on:{click:function(s){return t.changMenu(n)}}},[t._v(t._s(s.name))])})),0)]),e("div",{ref:"probox",staticClass:"prod-box"},[e("ul",t._l(t.prodList,(function(s,n){return e("li",{key:n,staticClass:"cate-list"},[e("div",{staticClass:"cate-title"},[t._v(t._s(s.name))]),e("ul",t._l(s.content,(function(s,i){return e("li",{key:s.id,staticClass:"prod-list"},[e("div",{staticClass:"prod-img-box"},[e("img",{attrs:{src:s.img}})]),e("div",{staticClass:"prod-info"},[e("div",{staticClass:"name"},[t._v(t._s(s.name))]),e("div",{staticClass:"sale"},[e("span",{staticClass:"num"},[t._v("月销"+t._s(s.num))]),e("span",[t._v("赞"+t._s(s.up))])]),e("div",{staticClass:"price"},[t._v("￥"+t._s(s.price))])]),e("div",{staticClass:"add-cart-container"},[e("addCart",{attrs:{type:n,index:i}})],1)])})),0)])})),0)])])])},Z=[],tt=e("5530"),st=e("2f62"),et=e("f40f"),nt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"add-cart"},[t.product.count?e("span",{staticClass:"iconfont icon-jianhao",on:{click:function(s){return t.reduceCart()}}}):t._e(),t.product.count?e("span",{staticClass:"num"},[t._v(t._s(t.product.count))]):t._e(),e("span",{staticClass:"iconfont icon-jiahao-",on:{click:function(s){return t.addCart()}}})])},it=[],at={props:["type","index"],computed:{product:function(){return this.$store.state.product.prodList[this.type].content[this.index]}},methods:{addCart:function(){this.$store.commit("product/add",{type:this.type,index:this.index})},reduceCart:function(){this.$store.commit("product/reduce",{type:this.type,index:this.index})}}},ct=at,rt=(e("8f9c"),Object(c["a"])(ct,nt,it,!1,null,"39b20291",null)),ot=rt.exports,lt={components:{addCart:ot},data:function(){return{menuScroll:null,prodScroll:null,currentIndex:0,posY:[],menuList:[],scrollY:0}},methods:{initScroll:function(){var t=this;this.menuScroll=new et["a"](".menu-box",{bounce:!1,click:!0}),this.prodScroll=new et["a"](".prod-box",{bounce:!1,probeType:3}),this.prodScroll.on("scroll",(function(s){t.scrollY=Math.abs(Math.round(s.y))})),this.getPosY(),this.menuList=this.$refs.menuBox.getElementsByClassName("menu-list")},changMenu:function(t){var s=this.$refs.probox.getElementsByClassName("cate-list"),e=s[t];this.prodScroll.scrollToElement(e,300),this.currentIndex=t},getActive:function(t){return t==this.currentIndex?"active":""},getPosY:function(){for(var t=this.$refs.probox.getElementsByClassName("cate-list"),s=0,e=0;e<t.length;e++)if(0==e)this.posY.push(s);else{var n=t[e-1];s+=n.offsetHeight,this.posY.push(s)}}},computed:Object(tt["a"])({},Object(st["c"])("product",["prodList"])),created:function(){var t=this;this.$store.dispatch("product/getProdList",this.$route.query.id).then((function(){t.$nextTick((function(){t.initScroll()}))}))},watch:{scrollY:function(t){for(var s=0;s<this.posY.length;s++){var e=this.posY[s],n=this.posY[s+1];if(e<=t&&n>t){var i=this.menuList[s];this.menuScroll.scrollToElement(i,300,0,-100),this.currentIndex=s;break}}}}},ut=lt,dt=(e("a9e0"),Object(c["a"])(ut,X,Z,!1,null,"25cc5140",null)),ft=dt.exports,pt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cart-container"},[e("div",{staticClass:"cart-box",on:{click:function(s){t.isShow=!t.isShow}}},[e("div",{staticClass:"cart-icon",class:{active:t.total}},[e("span",{staticClass:"iconfont icon-gouwuche"}),e("span",{directives:[{name:"show",rawName:"v-show",value:t.total,expression:"total"}],staticClass:"num"},[t._v(t._s(t.total))])]),e("div",{staticClass:"cart-price active"},[e("div",{staticClass:"price"},[t._v("￥"+t._s(t.totalPrice))]),e("div",{staticClass:"deliver"},[t._v("配送费￥"+t._s(t.seller.fee))])]),e("div",{staticClass:"cart-buy",class:{active:t.totalPrice>t.seller.price}},[t._v(t._s(t.buyDesc))])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow&&t.total,expression:"isShow && total"}],staticClass:"cart-list-box"},[e("div",{staticClass:"title",on:{click:function(s){return t.clear()}}},[e("span",[t._v("清空购物车")])]),e("ul",{staticClass:"list-box"},t._l(t.selectList,(function(s){return e("li",{key:s.id,staticClass:"list"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),e("span",{staticClass:"price"},[t._v("￥"+t._s(s.price))]),e("addCart",{attrs:{type:s.type,index:s.index}})],1)})),0)])])},vt=[],ht={data:function(){return{isShow:!1}},components:{addCart:ot},props:["seller"],computed:Object(tt["a"])(Object(tt["a"])({},Object(st["b"])("product",["totalPrice","total","selectList"])),{},{buyDesc:function(){return 0==this.totalPrice?"￥".concat(this.seller.price,"元起送"):this.totalPrice<this.seller.price?"￥".concat(this.seller.price-this.totalPrice,"元起送"):"去结算"}}),methods:{clear:function(){this.$store.commit("product/clearList")}}},mt=ht,_t=(e("86f6"),Object(c["a"])(mt,pt,vt,!1,null,"5e10fade",null)),Ct=_t.exports,bt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"seller-box"},[e("ul",{staticClass:"list-box"},[e("li",{staticClass:"list"},[e("span",{staticClass:"iconfont icon-weizhi"}),e("span",[t._v(t._s(t.seller.address))])])]),e("ul",{staticClass:"list-box"},[e("li",{staticClass:"list"},[e("span",{staticClass:"iconfont icon-icon212"}),e("span",[t._v("配送服务："+t._s(t.seller.server))])]),e("li",{staticClass:"list"},[e("span",{staticClass:"iconfont icon-shijian"}),e("span",[t._v("配送时间："+t._s(t.seller.delivery_time))])])]),e("ul",{staticClass:"list-box"},[e("li",{staticClass:"list"},[e("span",{staticClass:"iconfont icon-jian"}),e("span",[t._v(t._s(t.seller.full))])]),e("li",{staticClass:"list"},[e("span",{staticClass:"iconfont icon-shou"}),e("span",{staticClass:"sale"},[t._v(t._s(t.seller.sales))])]),e("li",{staticClass:"list"},[e("span",{staticClass:"iconfont icon-xin"}),e("span",[t._v(t._s(t.seller.sales))])])])])},xt=[],gt={props:["seller"]},yt=gt,wt=(e("601b"),Object(c["a"])(yt,bt,xt,!1,null,"846218de",null)),jt=wt.exports,Et=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("score"),e("tag"),e("list")],1)},$t=[],Ot=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"score-box"},[t._m(0),e("div",{staticClass:"pack-score"},[e("div",{staticClass:"item"},[e("span",[t._v("口味")]),e("star"),e("span",[t._v("4.9")])],1),e("div",{staticClass:"item"},[e("span",[t._v("包装")]),e("star"),e("span",[t._v("4.8")])],1)]),t._m(1)])},Lt=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"seller-score"},[e("div",{staticClass:"num"},[t._v("5.0")]),e("div",{staticClass:"desc"},[t._v("商家评分")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"deliver-score"},[e("div",{staticClass:"num"},[t._v("4.8")]),e("div",{staticClass:"desc"},[t._v("配送评分")])])}],kt={components:{star:M}},St=kt,Pt=(e("0bb1"),Object(c["a"])(St,Ot,Lt,!1,null,"f16faeb2",null)),Mt=Pt.exports,Tt=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},Yt=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"list-box"},[n("ul",{staticClass:"content"},[n("li",{staticClass:"list"},[n("div",{staticClass:"img-box"},[n("img",{attrs:{src:e("e7ab"),alt:""}})]),n("div",{staticClass:"info-box"},[n("div",{staticClass:"basic"},[n("span",{staticClass:"name"},[t._v("用户名")]),n("span",{staticClass:"date"},[t._v("发表时间")])]),n("div",{staticClass:"time"},[t._v("具体时间")]),n("div",{staticClass:"desc"},[t._v("具体评论")])])])])])}],zt={},Bt=zt,Dt=(e("d453"),Object(c["a"])(Bt,Tt,Yt,!1,null,"c9c45b98",null)),Nt=Dt.exports,It=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},qt=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tag-box"},[e("span",{staticClass:"tag-item active"},[t._v("1111111")]),e("span",{staticClass:"tag-item"},[t._v("1111111")]),e("span",{staticClass:"tag-item"},[t._v("1111111")]),e("span",{staticClass:"tag-item"},[t._v("1111111")]),e("span",{staticClass:"tag-item"},[t._v("1111111")]),e("span",{staticClass:"tag-item"},[t._v("1111111")])])}],Ht={},At=Ht,Jt=(e("d7fc"),Object(c["a"])(At,It,qt,!1,null,"1a832946",null)),Rt=Jt.exports,Ft={components:{score:Mt,list:Nt,tag:Rt}},Gt=Ft,Kt=Object(c["a"])(Gt,Et,$t,!1,null,"cc05c956",null),Qt=Kt.exports,Ut={data:function(){return{seller:[],active:0,scroll:null}},components:{sellerHeader:W,order:ft,cart:Ct,seller:jt,comment:Qt},methods:{getStoreMsg:function(){var t=this;R({id:this.$route.query.id}).then((function(s){t.seller=s.data}))}},mounted:function(){this.scroll=new et["a"](".scrollBox",{bounce:!1,click:!0})},created:function(){this.getStoreMsg()}},Vt=Ut,Wt=(e("9eec"),Object(c["a"])(Vt,A,J,!1,null,"e184b7f4",null)),Xt=Wt.exports;n["a"].use(u["a"]);var Zt=[{path:"/",component:H},{path:"/detail",component:Xt}],ts=new u["a"]({mode:"history",base:"/",routes:Zt}),ss=ts,es=e("2909"),ns=(e("159b"),e("13d5"),{namespaced:!0,state:{prodList:[]},getters:{selectList:function(t){var s=[];return t.prodList.forEach((function(t){t.content.forEach((function(t){t.count&&s.push(t)}))})),s},totalPrice:function(t,s){return s.selectList.reduce((function(t,s){return t+s.count*s.price}),0)},total:function(t,s){return s.selectList.reduce((function(t,s){return t+s.count}),0)}},mutations:{saveProdList:function(t,s){t.prodList=Object(es["a"])(s)},add:function(t,s){var e=s.type,i=s.index,a=t.prodList[e].content[i];a.count?n["a"].set(a,"count",a.count+1):n["a"].set(a,"count",1)},reduce:function(t,s){var e=s.type,i=s.index,a=t.prodList[e].content[i];a.count&&n["a"].set(a,"count",a.count-1)},clearList:function(t){t.prodList.forEach((function(t){t.content.forEach((function(t){t.count&&(t.count=0)}))}))}},actions:{getProdList:function(t,s){var e=t.commit;return new Promise((function(t){F({id:s}).then((function(s){var n=s.data.goods;n.forEach((function(t,s){t.content.forEach((function(t,e){t.type=s,t.index=e}))})),e("saveProdList",n),t()}))}))}}}),is=ns;n["a"].use(st["a"]);var as=new st["a"].Store({modules:{product:is}}),cs=(e("4ee2"),e("ed2c"),e("097e"),e("b970"));e("157a");n["a"].use(cs["a"]),n["a"].config.productionTip=!1,new n["a"]({router:ss,store:as,render:function(t){return t(l)}}).$mount("#app")},"601b":function(t,s,e){"use strict";e("c993")},"7c97":function(t,s,e){},"86f6":function(t,s,e){"use strict";e("dbfc")},"8eaf":function(t,s,e){},"8f9c":function(t,s,e){"use strict";e("adad")},"90fb":function(t,s,e){"use strict";e("db51")},"9eec":function(t,s,e){"use strict";e("46a1")},a9e0:function(t,s,e){"use strict";e("eee0")},adad:function(t,s,e){},be11:function(t,s,e){},c993:function(t,s,e){},cac0:function(t,s,e){},d453:function(t,s,e){"use strict";e("be11")},d7fc:function(t,s,e){"use strict";e("8eaf")},db51:function(t,s,e){},dbfc:function(t,s,e){},dcda:function(t,s,e){},e7ab:function(t,s,e){t.exports=e.p+"img/naixue.7aa33721.jpg"},ea3f:function(t,s,e){"use strict";e("dcda")},ed2c:function(t,s,e){},eee0:function(t,s,e){}});
//# sourceMappingURL=app.a323d971.js.map