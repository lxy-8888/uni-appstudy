(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goodsList/index"],{2570:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement;t._self._c},i=[]},"93fb":function(t,e,n){"use strict";var a=n("eaf7"),r=n.n(a);r.a},"9acb":function(t,e,n){"use strict";n.r(e);var a=n("dd11"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},a61e:function(t,e,n){"use strict";n.r(e);var a=n("2570"),r=n("9acb");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("93fb");var o,s=n("f0c5"),u=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);e["default"]=u.exports},d47f:function(t,e,n){"use strict";(function(t){n("8af3");a(n("66fd"));var e=a(n("a61e"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},dd11:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("a34a")),r=n("8015");function i(t){return t&&t.__esModule?t:{default:t}}function o(t){return f(t)||c(t)||u(t)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,e){if(t){if("string"===typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}function c(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function f(t){if(Array.isArray(t))return d(t)}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function l(t,e,n,a,r,i,o){try{var s=t[i](o),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(a,r)}function p(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var i=t.apply(e,n);function o(t){l(i,a,r,o,s,"next",t)}function s(t){l(i,a,r,o,s,"throw",t)}o(void 0)}))}}var g=function(){n.e("componets/tabs/tabs").then(function(){return resolve(n("89d0"))}.bind(null,n)).catch(n.oe)},m={components:{Tabs:g},onLoad:function(t){var e=this;return p(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.paramsData.cid=t.cid,e.getList();case 2:case"end":return n.stop()}}),n)})))()},data:function(){return{goodsList:[],tabs:[{id:0,name:"热卖",isActive:!0},{id:1,name:"销量",isActive:!1},{id:2,name:"价格",isActive:!1}],paramsData:{query:"",cid:5,pagenum:1,pagesize:10},totalPage:0}},onPullDownRefresh:function(){this.getNews()},onReachBottom:function(){this.getnewsList()},methods:{getgid:function(e){var n=e.currentTarget.dataset.gid;t.navigateTo({url:"../goodsDetail/index?goods_id="+encodeURIComponent(JSON.stringify(n))})},getNews:function(){this.paramsData.pagenum=1,this.goodsList=[],this.getList(),t.stopPullDownRefresh()},getList:function(){var t=this;return p(a.default.mark((function e(){var n;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,r.goodsListRequest)({url:"https://api-hmugo-web.itheima.net/api/public/v1/goods/search",method:"GET",data:t.paramsData});case 2:n=e.sent,t.goodsList=[].concat(o(t.goodsList),o(n.data.message.goods)),t.totalPage=n.data.message.total/t.paramsData.pagesize;case 5:case"end":return e.stop()}}),e)})))()},checkActive:function(t){this.tabs.filter((function(e){e.id==t?e.isActive=!0:e.isActive=!1}))},getnewsList:function(){this.paramsData.pagenum>=this.totalPage?t.showToast({title:"到底了!"}):(this.paramsData.pagenum++,this.getList())}}};e.default=m}).call(this,n("543d")["default"])},eaf7:function(t,e,n){}},[["d47f","common/runtime","common/vendor"]]]);