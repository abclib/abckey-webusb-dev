(function(t){function e(e){for(var a,s,c=e[0],i=e[1],u=e[2],l=0,p=[];l<c.length;l++)s=c[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o=[];function s(t){return c.p+"js/"+({Account:"Account",Connect:"Connect",Loading:"Loading",Passphrase:"Passphrase",Pin:"Pin","lang-zhCN":"lang-zhCN"}[t]||t)+"."+{Account:"6cd0431c",Connect:"0819f95e",Loading:"7e4b151c",Passphrase:"18ecd614",Pin:"8c166f75","chunk-14ac0772":"a5596712","chunk-2d0c498d":"8ec8f59c","chunk-2d0d3ac3":"4deecc04","chunk-2d207ec5":"c539d368","chunk-2d20ef28":"de0e18d4","chunk-2d2101f1":"110206e7","chunk-2d2132b7":"d32a5a69","chunk-2d215fc3":"9b4c5794","chunk-2d21e558":"54dec896","chunk-2d229da5":"23d59214","chunk-2d22bce4":"eef1b27b","chunk-2d22c114":"5c077a45","chunk-2d2315d8":"0568ec38","chunk-4da529fc":"30892a08","chunk-57954163":"a6b690a1","chunk-88de8906":"1917f732","lang-zhCN":"cd589343"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=s(t);var u=new Error;o=function(e){i.onerror=i.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,n[1](u)}r[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"04bc":function(t,e,n){"use strict";n.r(e);n("d3b7");var a="ABC1",r={path:"Protocol",meta:{title:"Protocol"},component:function(){return n("bd97")("./".concat(a,"/Protocol"))}},o={path:"UserSetPublickey",meta:{title:"User Set Publickey"},component:function(){return n("74b1")("./".concat(a,"/UserSetPublickey"))}},s={path:"UserGetMnemonics",meta:{title:"User Get Mnemonics"},component:function(){return n("db88")("./".concat(a,"/UserGetMnemonics"))}};e["default"]={path:"/".concat(a),meta:{icon:"mdi-puzzle-outline",title:"ABC1 Extension"},component:function(){return n("f893")("./".concat(a,"/index"))},children:[r,o,s]}},"068a":function(t,e,n){"use strict";n.r(e),e["default"]={__set:function(t,e){t[e.key]=e.val}}},"0aa9":function(t,e,n){var a={"./Settings/RecoveryDevice":["a330","chunk-2d207ec5"]};function r(t){if(!n.o(a,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=a[t],r=e[0];return n.e(e[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id="0aa9",t.exports=r},1:function(t,e){},"12d5":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"pa-3",attrs:{dark:""}},[n("v-spacer"),n("div",[t._v("© ABCKEY "+t._s((new Date).getFullYear()))])],1)},r=[],o={data:function(){return{}},computed:{},methods:{}},s=o,c=n("2877"),i=Object(c["a"])(s,a,r,!1,null,null,null);e["default"]=i.exports},1850:function(t,e,n){"use strict";n.r(e),e["default"]={__set:function(t,e){t[e.key]=e.val}}},2:function(t,e){},3:function(t,e){},3030:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",{staticClass:"blue lighten-5"},[n("router-view")],1)},r=[],o={data:function(){return{}},computed:{},methods:{}},s=o,c=n("2877"),i=Object(c["a"])(s,a,r,!1,null,null,null);e["default"]=i.exports},"33d6":function(t,e,n){"use strict";n.r(e),e["default"]={language:""}},3995:function(t,e,n){var a={"./Settings/ApplySettings":["3c07","chunk-2d0c498d"]};function r(t){if(!n.o(a,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=a[t],r=e[0];return n.e(e[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id="3995",t.exports=r},4:function(t,e){},"50b9":function(t,e,n){"use strict";n.r(e),e["default"]={}},5880:function(t,e){t.exports=Vuex},"5dec":function(t,e,n){"use strict";n.r(e);n("d3b7");var a="Bitcoin",r={path:"GetPublicKey",meta:{title:"Get Public Key"},component:function(){return n("fc98")("./".concat(a,"/GetPublicKey"))}},o={path:"GetAddress",meta:{title:"Get Address"},component:function(){return n("d646")("./".concat(a,"/GetAddress"))}},s={path:"SignTransaction",meta:{title:"Sign Transaction"},component:function(){return n("db62")("./".concat(a,"/SignTransaction"))}};e["default"]={path:"/".concat(a),redirect:"/".concat(a,"/GetPublicKey"),meta:{icon:"mdi-bitcoin",title:"Bitcoin"},component:function(){return n("f893")("./".concat(a,"/index"))},children:[r,o,s]}},6389:function(t,e){t.exports=VueRouter},6809:function(t,e,n){var a={"./app/Content.vue":"3030","./app/Footer.vue":"12d5","./wallet/Account.vue":"aa71"};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="6809"},"69ba":function(t,e,n){"use strict";n.r(e),e["default"]={}},"74b1":function(t,e,n){var a={"./ABC1/UserSetPublickey":["0c5d","chunk-57954163"]};function r(t){if(!n.o(a,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=a[t],r=e[0];return n.e(e[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id="74b1",t.exports=r},"76b9":function(t,e,n){"use strict";n.r(e),e["default"]={}},"7a39":function(t,e,n){var a=n("7e10");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("499e").default;r("7d5cc012",a,!0,{sourceMap:!1,shadowMode:!1})},"7e10":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"",""]),t.exports=e},"85b3":function(t,e){t.exports=VueI18n},"8bbf":function(t,e){t.exports=Vue},aa71:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"pa-0 text-left",attrs:{fluid:""}},[n("v-card",{staticClass:"px-3"},[n("v-row",[n("v-col",{staticClass:"text-center"},[n("v-btn",{attrs:{text:""},on:{click:function(e){return t.upBalance()}}},[n("span",[t._v(t._s(t.$t("Balance")))]),n("v-icon",{class:["ml-1",t.d_loading.upBalance&&"rotate"],attrs:{size:"16",color:"primary"}},[t._v("mdi-cached")])],1),n("div",{class:["mt-1",t.d_loading.upBalance&&"blur"]},[n("span",{staticClass:"title font-weight-bold"},[t._v(t._s(t.btc2str(t.d_balance)))]),n("span",{staticClass:"text-uppercase caption"},[t._v(" "+t._s(t.symbol))])])],1),n("v-col",{staticClass:"text-center"},[n("v-btn",{attrs:{text:""},on:{click:function(e){return t.upAll()}}},[n("span",[t._v(t._s(t.$t("Convert")))]),n("v-icon",{class:["ml-1",(t.d_loading.upBalance||t.d_loading.upRate)&&"rotate"],attrs:{size:"16",color:"primary"}},[t._v("mdi-cached")])],1),n("div",{class:["mt-1",(t.d_loading.upBalance||t.d_loading.upRate)&&"blur"]},[n("span",{staticClass:"title font-weight-bold"},[t._v(t._s(t.btc2cash(t.d_balance,t.d_rate)))]),n("span",{staticClass:"text-uppercase caption"},[t._v(" "+t._s(t.currency))])])],1),n("v-col",{staticClass:"text-center"},[n("v-btn",{attrs:{text:""},on:{click:function(e){return t.upRate()}}},[n("span",[t._v(t._s(t.$t("Rate")))]),n("v-icon",{class:["ml-1",t.d_loading.upRate&&"rotate"],attrs:{size:"16",color:"primary"}},[t._v("mdi-cached")])],1),n("div",{class:["mt-1",t.d_loading.upRate&&"blur"]},[n("span",{staticClass:"title font-weight-bold"},[t._v(t._s(t.cash2str(t.d_rate)))]),n("span",{staticClass:"text-uppercase caption"},[t._v(" "+t._s(t.currency)+"/"+t._s(t.symbol))])])],1)],1)],1),n("v-card",{staticClass:"px-3 mt-3"},[n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[n("tbody",[n("tr",[n("td",{staticClass:"caption"},[t._v(t._s(t.$t("Total Received")))]),n("td",{staticClass:"text-right"},[n("v-tooltip",{attrs:{disabled:!t.d_totalReceived,top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("span",t._g({class:[t.d_loading.upBalance&&"blur"]},a),[n("b",[t._v(t._s(t.btc2str(t.d_totalReceived)))]),n("span",{staticClass:"text-uppercase caption grey--text"},[t._v(" "+t._s(t.symbol))])])]}}])},[n("span",[n("b",[t._v(t._s(t.btc2cash(t.d_totalReceived,t.d_rate)))]),n("span",{staticClass:"text-uppercase caption"},[t._v(" "+t._s(t.currency))])])])],1)]),n("tr",[n("td",{staticClass:"caption"},[t._v(t._s(t.$t("Address Count")))]),n("td",{staticClass:"text-right"},[n("span",{class:[t.d_loading.upBalance&&"blur"]},[n("b",[t._v(t._s(t.d_addressCount))])])])]),n("tr",[n("td",{staticClass:"caption"},[t._v(t._s(t.$t("Unconfirmed Balance")))]),n("td",{staticClass:"text-right"},[n("v-tooltip",{attrs:{disabled:!t.d_unconfirmedBalance,top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("span",t._g({class:[t.d_loading.upBalance&&"blur"]},a),[n("b",[t._v(t._s(t.btc2str(t.d_unconfirmedBalance)))]),n("span",{staticClass:"text-uppercase caption grey--text"},[t._v(" "+t._s(t.symbol))])])]}}])},[n("span",[n("b",[t._v(t._s(t.btc2cash(t.d_unconfirmedBalance,t.d_rate)))]),n("span",{staticClass:"text-uppercase caption"},[t._v(" "+t._s(t.currency))])])])],1)])])]},proxy:!0}])})],1),n("v-col",{attrs:{cols:"6"}},[n("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[n("tbody",[n("tr",[n("td",{staticClass:"caption"},[t._v(t._s(t.$t("Total Spent")))]),n("td",{staticClass:"text-right"},[n("v-tooltip",{attrs:{disabled:!t.d_totalSent,top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("span",t._g({class:[t.d_loading.upBalance&&"blur"]},a),[n("b",[t._v(t._s(t.btc2str(t.d_totalSent)))]),n("span",{staticClass:"text-uppercase caption grey--text"},[t._v(" "+t._s(t.symbol))])])]}}])},[n("span",[n("b",[t._v(t._s(t.btc2cash(t.d_totalSent,t.d_rate)))]),n("span",{staticClass:"text-uppercase caption"},[t._v(" "+t._s(t.currency))])])])],1)]),n("tr",[n("td",{staticClass:"caption"},[t._v(t._s(t.$t("Transaction Count")))]),n("td",{staticClass:"text-right"},[n("span",{class:[t.d_loading.upBalance&&"blur"]},[n("b",[t._v(t._s(t.d_transactionCount))])])])]),n("tr",[n("td",{staticClass:"caption"},[t._v(t._s(t.$t("Unconfirmed Txs")))]),n("td",{staticClass:"text-right"},[n("span",{class:[t.d_loading.upBalance&&"blur"]},[n("b",[t._v(t._s(t.d_unconfirmedTxs))])])])])])]},proxy:!0}])})],1)],1)],1),n("v-expansion-panels",{staticClass:"mt-3",attrs:{value:0}},[n("v-expansion-panel",{directives:[{name:"show",rawName:"v-show",value:0===t.d_txs.length,expression:"d_txs.length === 0"}],attrs:{readonly:""}},[n("v-expansion-panel-header",{attrs:{"expand-icon":""}},[n("span",[n("v-btn",{attrs:{text:""},on:{click:function(e){return t.upBalance()}}},[n("b",[t._v(t._s(t.$t("Transaction details need to be refreshed.")))]),n("v-icon",{class:["ml-1",t.d_loading.upBalance&&"rotate"],attrs:{right:"",size:"16",color:"primary"}},[t._v("mdi-cached")])],1)],1)])],1),t._l(t.d_txs,(function(e,a){return n("v-expansion-panel",{key:a},[n("v-expansion-panel-header",[n("span",[n("v-row",{attrs:{align:"center","no-gutters":""}},[n("v-col",{attrs:{cols:"4"}},[n("span",{staticClass:"caption grey--text"},[t._v(t._s(t.unix2utc(e.blockTime)))])]),n("v-col",{attrs:{cols:"4"}},[n("v-tooltip",{attrs:{disabled:!e.valueChanged,top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var r=a.on;return[n("v-chip",t._g({attrs:{color:e.valueChanged<0?"red":"green",small:"",label:"",outlined:""}},r),[n("v-icon",{attrs:{left:"",size:"18"}},[t._v(t._s(e.valueChanged>0?"mdi-plus":"mdi-minus"))]),n("span",[t._v(t._s(t.btc2str(Math.abs(e.valueChanged))))]),n("span",{staticClass:"text-uppercase caption ml-1"},[t._v(t._s(t.symbol))])],1)]}}],null,!0)},[n("span",[n("span",[t._v(t._s(e.valueChanged>0?t.$t("Received"):t.$t("Spent")))]),n("b",[t._v(" "+t._s(t.btc2cash(Math.abs(e.valueChanged),t.d_rate)))]),n("span",{staticClass:"text-uppercase caption"},[t._v(" "+t._s(t.currency))])])])],1),n("v-col",{attrs:{cols:"4"}},[n("v-tooltip",{attrs:{disabled:!e.value,top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var r=a.on;return[n("v-chip",t._g({attrs:{small:"",label:"",outlined:""}},r),[n("v-icon",{attrs:{left:"",color:"grey",size:"22"}},[t._v("mdi-wallet-outline")]),n("span",[t._v(t._s(t.btc2str(e.value)))]),n("span",{staticClass:"text-uppercase caption ml-1"},[t._v(t._s(t.symbol))])],1)]}}],null,!0)},[n("span",[n("span",[t._v(t._s(t.$t("Balance")))]),n("b",[t._v(" "+t._s(t.btc2cash(e.value,t.d_rate)))]),n("span",{staticClass:"text-uppercase caption"},[t._v(" "+t._s(t.currency))])])])],1)],1)],1)]),n("v-expansion-panel-content",[n("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[n("tbody",[n("tr",[n("td",{staticClass:"caption"},[t._v(t._s(t.$t("Hash")))]),n("td",[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var r=a.on;return[n("span",t._g({staticClass:"number"},r),[t._v(" "+t._s(e.txid.replace(/^(.......).+(.......)$/g,"$1 ######### $2"))+" ")])]}}],null,!0)},[n("span",[n("span",[t._v(t._s(e.txid))])])])],1)]),n("tr",[n("td",{staticClass:"caption"},[t._v(t._s(t.$t("Block")))]),n("td",[t._v(t._s(e.blockHeight))])]),n("tr",[n("td",{staticClass:"caption"},[t._v(t._s(t.$t("Confirmations")))]),n("td",[t._v(t._s(e.confirmations))])]),n("tr",[n("td",{staticClass:"caption"},[t._v(t._s(t.$t("Fees")))]),n("td",[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var r=a.on;return[n("span",t._g({},r),[n("span",[t._v(t._s(t.btc2str(e.fees)))]),n("span",{staticClass:"text-uppercase caption"},[t._v(" "+t._s(t.symbol))])])]}}],null,!0)},[n("span",[n("b",[t._v(t._s(t.btc2cash(e.fees,t.d_rate)))]),n("span",{staticClass:"text-uppercase caption"},[t._v(" "+t._s(t.currency))])])])],1)])])]},proxy:!0}],null,!0)}),n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v(t._s(t.$t("Input"))+"("+t._s(e.vin.length)+")")])])]),n("tbody",t._l(e.vin,(function(e,a){return n("tr",{key:a},[n("td",{staticClass:"caption number"},[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var r=a.on;return[n("span",t._g({class:[e.own&&"blue--text"]},r),[e.own?n("v-icon",{attrs:{size:"16",color:"blue"}},[t._v("mdi-key")]):t._e(),n("span",[t._v(" "+t._s(e.addresses[0]))])],1)]}}],null,!0)},[n("span",[n("b",[t._v(t._s(e.value))]),n("span",{staticClass:"text-uppercase caption"},[t._v(" "+t._s(t.symbol))]),n("span",[t._v(" ≈ ")]),n("b",[t._v(t._s(t.btc2cash(e.value,t.d_rate)))]),n("span",{staticClass:"text-uppercase caption"},[t._v(" "+t._s(t.currency))])])])],1)])})),0)]},proxy:!0}],null,!0)})],1),n("v-col",{attrs:{cols:"6"}},[n("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v(t._s(t.$t("Output"))+"("+t._s(e.vout.length)+")")])])]),n("tbody",t._l(e.vout,(function(e,a){return n("tr",{key:a},[n("td",{staticClass:"caption number"},[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var r=a.on;return[n("span",t._g({class:[e.own&&"blue--text"]},r),[e.own?n("v-icon",{attrs:{size:"16",color:"blue"}},[t._v("mdi-key")]):t._e(),n("span",[t._v(" "+t._s(e.addresses[0]))])],1)]}}],null,!0)},[n("span",[n("b",[t._v(t._s(e.value))]),n("span",{staticClass:"text-uppercase caption"},[t._v(" "+t._s(t.symbol))]),n("span",[t._v(" ≈ ")]),n("b",[t._v(t._s(t.btc2cash(e.value,t.d_rate)))]),n("span",{staticClass:"text-uppercase caption"},[t._v(" "+t._s(t.currency))])])])],1)])})),0)]},proxy:!0}],null,!0)})],1)],1)],1)],1)}))],2),n("p",{staticClass:"mt-3 mb-7 grey--text text-center"},[n("span",{staticClass:"caption"},[t._v(" "+t._s(t.$t("Only the latest 1000 data is displayed."))+" "),n("a",{attrs:{href:"https://blockchair.com/"+t.name+"/xpub/"+t.xpub,target:"_blank"}},[t._v(t._s(t.$t("See more")))])])])],1)},r=[],o=(n("99af"),n("b0c0"),n("d3b7"),n("ac1f"),n("5319"),n("bf19"),n("96cf"),n("1da1")),s=n("ade3"),c=n("cebe"),i=n.n(c),u=n("901e"),l=n.n(u),d={props:{name:{default:"bitcoin",type:String},symbol:{default:"btc",type:String},currency:{default:"usd",type:String},xpub:{default:"",type:String}},data:function(){return{d_balance:0,d_rate:0,d_totalReceived:0,d_totalSent:0,d_unconfirmedBalance:0,d_unconfirmedTxs:0,d_transactionCount:0,d_addressCount:0,d_txs:[],d_loading:{upBalance:!1,upRate:!1}}},watch:Object(s["a"])({},"d_upBalance.page",(function(t){this.upBalance(t)})),created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.$route.path;case 1:if(t.$route.path===n){e.next=3;break}return e.abrupt("break",8);case 3:return t.upAll(),e.next=6,new Promise((function(t){return setTimeout(t,77e3)}));case 6:e.next=1;break;case 8:case"end":return e.stop()}}),e)})))()},methods:{upAll:function(){this.upBalance(),this.upRate()},upBalance:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.d_loading.upBalance=!0,e.next=3,i.a.get("https://api.abckey.com/".concat(t.symbol,"/xpub/").concat(t.xpub,"?details=txs&tokens=used&t=").concat((new Date).getTime()));case 3:n=e.sent,a=n.data,t.d_balance=t.sat2btc(a.balance),t.d_totalReceived=t.sat2btc(a.totalReceived),t.d_totalSent=t.sat2btc(a.totalSent),t.d_unconfirmedBalance=t.sat2btc(a.unconfirmedBalance),t.d_unconfirmedTxs=a.unconfirmedTxs,t.d_transactionCount=a.txs,t.d_addressCount=a.usedTokens,t.d_loading.upBalance=!1,t._fixTxs(a.transactions,a.tokens);case 14:case"end":return e.stop()}}),e)})))()},upRate:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.d_loading.upRate=!0,e.next=3,i.a.get("https://api.coingecko.com/api/v3/simple/price?ids=".concat(t.name,"&vs_currencies=").concat(t.currency,"&t=").concat((new Date).getTime()));case 3:n=e.sent,a=n.data,t.d_rate=a[t.name][t.currency],t.d_loading.upRate=!1;case 7:case"end":return e.stop()}}),e)})))()},sat2btc:function(t){return l()(t).div(1e8).toNumber()},btc2str:function(t){return l()(t).dp(8,1).toFormat()},cash2str:function(t){return l()(t).dp(2,1).toFormat(2,1)},btc2cash:function(t,e){return l()(t).times(e).dp(2,1).toFormat()},unix2utc:function(t){return new Date(1e3*t).toJSON().substr(0,19).replace("T"," ")},_fixTxs:function(t,e){for(var n=0;n<t.length;n++){var a=n+1===t.length?0:t[n+1].value;t[n].valueChanged=this.sat2btc(t[n].value-a),t[n].value=this.sat2btc(t[n].value),t[n].fees=this.sat2btc(t[n].fees);for(var r=0;r<t[n].vin.length;r++)t[n].vin[r].value=this.sat2btc(t[n].vin[r].value),t[n].vin[r].own=this._isOwnAddr(t[n].vin[r].addresses[0],e);for(var o=0;o<t[n].vout.length;o++)t[n].vout[o].value=this.sat2btc(t[n].vout[o].value),t[n].vout[o].own=this._isOwnAddr(t[n].vout[o].addresses[0],e)}this.d_txs=t},_isOwnAddr:function(t,e){for(var n=!1,a=0;a<e.length;a++)if(t===e[a].name){n=!0;break}return n}},i18n:{messages:{zhCN:{Balance:"余额",Convert:"折合",Rate:"汇率",Received:"收入",Spent:"花费",Hash:"哈希",Block:"区块",Confirmations:"确认",Fees:"费用",Input:"输入",Output:"输出",Refresh:"刷新","See more":"查看更多","Transaction details need to be refreshed.":"交易明细有待刷新。","Only the latest 1000 data is displayed.":"仅显示最新 1000 条数据。","Click to copy":"点击复制","Total Received":"总收入","Total Spent":"总转出","Address Count":"地址计数","Transaction Count":"交易计数","Unconfirmed Balance":"未确认余额","Unconfirmed Txs":"未确认交易计数"}}}},p=d,f=(n("ccb3"),n("2877")),v=Object(f["a"])(p,a,r,!1,null,null,null);e["default"]=v.exports},abbf:function(t,e,n){var a={"./Settings/ChangePin":["f23e","chunk-2d22c114"]};function r(t){if(!n.o(a,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=a[t],r=e[0];return n.e(e[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id="abbf",t.exports=r},aeb4:function(t,e,n){var a={"./Settings/BackupDevice":["b213","chunk-2d20ef28"]};function r(t){if(!n.o(a,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=a[t],r=e[0];return n.e(e[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id="aeb4",t.exports=r},afbc:function(t,e,n){"use strict";n.r(e);n("99af"),n("4160"),n("d3b7"),n("159b"),n("ddb0");var a=n("8bbf"),r=n.n(a),o=n("6389"),s=n.n(o);r.a.use(s.a);var c=n("bd71"),i=[];c.keys().forEach((function(t){"./index.ts"!==t&&i.push(c(t).default)}));var u=[{path:"/",redirect:"/Connect"},{path:"/Connect",meta:{icon:"mdi-usb",title:"Connect"},component:function(){return n.e("Connect").then(n.bind(null,"ec26"))}},{path:"/Loading",meta:{icon:"mdi-reload",title:"Loading"},component:function(){return n.e("Loading").then(n.bind(null,"45d6"))}},{path:"/Pin",meta:{icon:"mdi-key",title:"Pin"},component:function(){return n.e("Pin").then(n.bind(null,"a544"))}},{path:"/Passphrase",meta:{icon:"mdi-textbox-password",title:"Passphrase"},component:function(){return n.e("Passphrase").then(n.bind(null,"85e9"))}},{path:"/Account",meta:{icon:"mdi-wallet",title:"Account"},component:function(){return n.e("Account").then(n.bind(null,"77be"))}}].concat(i),l=new s.a({routes:u,mode:"history",base:"/",linkActiveClass:"active",scrollBehavior:function(t,e,n){return n||{x:0,y:0}}});l.beforeEach((function(t,e,n){n()})),l.afterEach((function(t){window.scrollTo(0,0)})),e["default"]=l},b805:function(t,e,n){var a=n("dc71");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("499e").default;r("0c6b4873",a,!0,{sourceMap:!1,shadowMode:!1})},bd71:function(t,e,n){var a={"./index.ts":"afbc","./nav_1_bitcoin.ts":"5dec","./nav_8_settings.ts":"e274","./nav_9_abc1.ts":"04bc"};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="bd71"},bd97:function(t,e,n){var a={"./ABC1/Protocol":["a1f0","chunk-4da529fc"]};function r(t){if(!n.o(a,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=a[t],r=e[0];return n.e(e[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id="bd97",t.exports=r},c8fb:function(t,e,n){var a={"./Settings/ResetDevice":["ac10","chunk-2d2132b7"]};function r(t){if(!n.o(a,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=a[t],r=e[0];return n.e(e[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id="c8fb",t.exports=r},ccb3:function(t,e,n){"use strict";var a=n("b805"),r=n.n(a);r.a},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("8bbf"),r=n.n(a),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("app-nav"),n("app-content"),n("app-footer"),n("dialog-error")],1)},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{attrs:{dense:"","clipped-right":"",app:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.d_drawerMini=!t.d_drawerMini}}}),n("v-toolbar-title",{domProps:{textContent:t._s(t.$route.path)}}),n("v-spacer"),n("v-btn",{attrs:{text:"",rounded:""},on:{click:function(e){return t.connect()}}},[n("v-icon",[t._v("mdi-plus")]),n("span",[t._v(t._s(t.$t("Connect")))])],1),t.c_label?n("v-menu",{attrs:{"open-on-hover":"","offset-y":"","close-on-content-click":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({attrs:{outlined:"",rounded:"",color:"blue"}},a),[n("v-icon",[t._v("mdi-usb-port")]),n("span",{staticClass:"text-capitalize"},[t._v(t._s(t.c_label))])],1)]}}],null,!1,3412081074)},[n("v-list",{attrs:{nav:""}},[n("v-list-item",{on:{click:function(e){return t.loading()}}},[n("v-icon",[t._v("mdi-cog-outline")]),n("v-list-item-title",[t._v("Settings")])],1),n("v-list-item",{on:{click:function(e){return t.loading()}}},[n("v-icon",[t._v("mdi-refresh")]),n("v-list-item-title",[t._v("Refresh")])],1)],1)],1):t._e()],1),n("v-navigation-drawer",{attrs:{"mini-variant":t.d_drawerMini,"expand-on-hover":t.d_drawerMini,permanent:"",app:""}},[n("v-list",{attrs:{dense:"",nav:""}},t._l(this.$router.options.routes,(function(e){return n("span",{key:e.path},[e.meta&&!e.children?n("v-list-item",{attrs:{to:e.path}},[e.meta.icon?n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(e.meta.icon)}})],1):t._e(),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.meta.title)}})],1)],1):t._e(),e.meta&&e.children?n("v-list-group",{attrs:{"prepend-icon":e.meta.icon,"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.meta.title)}})],1)]},proxy:!0}],null,!0)},t._l(e.children,(function(a){return n("v-list-item",{key:a.path,attrs:{to:e.path+"/"+a.path}},[a.meta.icon?n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(a.meta.icon)}})],1):t._e(),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(a.meta.title)}})],1)],1)})),1):t._e()],1)})),0)],1)],1)},i=[],u=(n("ac1f"),n("5319"),{data:function(){return{d_drawerMini:!0}},computed:{c_label:function(t){return t.$store.__s("usb.label")}},methods:{connect:function(){this.$router.replace("/Connect")},loading:function(){this.$router.replace("/Loading")},settings:function(){this.$router.replace("/Settings")}}}),l=u,d=n("2877"),p=Object(d["a"])(l,c,i,!1,null,null,null),f=p.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"555",persistent:"",scrollable:""},model:{value:t.d_show,callback:function(e){t.d_show=e},expression:"d_show"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v(t._s(t.$t("Error")))]),n("v-card-text",{staticClass:"headline"},[t._v(t._s(t.$t(t.d_msg)))]),n("v-card-actions",[n("v-spacer"),n("v-btn",{on:{click:function(e){t.d_show=!1}}},[t._v(t._s(t.$t("Close")))])],1)],1)],1)},_=[],b={data:function(){return{d_show:!1,d_msg:""}},computed:{c_msg:function(t){return t.$store.__s("usb.msg")}},watch:{c_msg:function(t){"Failure"===t.type&&(this.d_show=!0,this.d_msg=t.data.message)}},methods:{}},h=b,m=Object(d["a"])(h,v,_,!1,null,null,null),g=m.exports,y={name:"App",components:{appNav:f,dialogError:g},data:function(){return{}},computed:{},watch:{$route:function(){window.document.title=this.$t(this.$route.meta.title)}},methods:{}},x=y,k=Object(d["a"])(x,o,s,!1,null,null,null),C=k.exports,w=n("afbc"),O=(n("1276"),n("5880")),P=n.n(O),S=n("f33f"),D={},E={},N={__set:function(t,e){t[e.key]=e.val}},U={},B=n("0e44");r.a.use(P.a);var T=new P.a.Store({modules:S["default"],actions:D,getters:E,mutations:N,state:U,strict:!0,plugins:[Object(B["a"])({paths:["app.language"]})]});T.__s=function(t,e){if(!t)return T.state;for(var n=t.split("."),a=T.state,r=0;r<n.length;r++)a=void 0!==a[n[r]]?a[n[r]]:void 0;return void 0!==e&&2===n.length&&T.commit({type:n[0]+"/__set",key:n[1],val:e}),a},T.__d=function(t,e,n){return T.dispatch(t,e,n)},T.__g=function(t){return t?T.getters[t]:T.getters};var $=T,j=(n("caad"),n("a15b"),n("d3b7"),n("85b3")),M=n.n(j),R=n("cebe"),A=n.n(R),L=n("76b9");r.a.use(M.a);var F=["enUS"],z=$.__s("app.language");z||(z=window.navigator.language.split("-").join(""),$.__s("app.language",z));var G=new M.a({locale:z,fallbackLocale:"enUS",silentTranslationWarn:!1,messages:L["default"]});function I(t){return G.locale=t,G.fallbackLocale=t,A.a.defaults.headers.common["Accept-Language"]=t,$.__s("app.language",t),t}function V(t){return z!==F?F.includes(t)?Promise.resolve(I(t)):n("f20f")("./".concat(t)).then((function(e){return G.setLocaleMessage(t,e.default[t]),F.push(t),I(t)})):Promise.resolve(t)}V(z);var K=G,J=(n("bf40"),n("7a39"),n("ce5b")),W=n.n(J);r.a.use(W.a);var H=new W.a({theme:{options:{customProperties:!0},themes:{light:{}}}});r.a.config.productionTip=!1,r.a.prototype.$http=A.a;var Y=n("6896"),q=n.n(Y);function Q(t){$.__s("usb.usbVendorId",t?t.vendorId:0),$.__s("usb.usbProductId",t?t.productId:0),$.__s("usb.usbManufacturer",t?t.manufacturerName:""),$.__s("usb.usbProduct",t?t.productName:""),$.__s("usb.usbSerialNumber",t?t.serialNumber:0),$.__s("usb.label",t?t.label:0)}var X=new q.a({debug:!0});X.onAdd((function(t){Q(t)})),X.onErr((function(t){$.__s("usb.err",t.message),w["default"].push("/Connect")})),X.onMsg((function(t){$.__s("usb.msg",JSON.parse(JSON.stringify(t))),Q(t.data)})),r.a.prototype.$usb=X;n("4160"),n("159b"),n("ddb0");var Z=n("8103"),tt=n.n(Z),et=n("bba4"),nt=n.n(et),at=n("6809");at.keys().forEach((function(t){var e=at(t),n=tt()(nt()(t.replace(/^\.\//,"").replace(/\.\w+$/,"")));r.a.component(n,e.default||e)})),new r.a({router:w["default"],store:$,i18n:K,vuetify:H,render:function(t){return t(C)}}).$mount("#app")},cebe:function(t,e){t.exports=axios},d646:function(t,e,n){var a={"./Bitcoin/GetAddress":["f28d","chunk-88de8906"]};function r(t){if(!n.o(a,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=a[t],r=e[0];return n.e(e[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id="d646",t.exports=r},db36:function(t,e,n){var a={"./Settings/WipeDevice":["b717","chunk-2d2101f1"]};function r(t){if(!n.o(a,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=a[t],r=e[0];return n.e(e[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id="db36",t.exports=r},db62:function(t,e,n){var a={"./Bitcoin/SignTransaction":["f114","chunk-2d22bce4"]};function r(t){if(!n.o(a,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=a[t],r=e[0];return n.e(e[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id="db62",t.exports=r},db88:function(t,e,n){var a={"./ABC1/UserGetMnemonics":["efde","chunk-2d2315d8"]};function r(t){if(!n.o(a,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=a[t],r=e[0];return n.e(e[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id="db88",t.exports=r},dc71:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".account{width:inherit}.blur{-webkit-filter:blur(2px);filter:blur(2px)}",""]),t.exports=e},e274:function(t,e,n){"use strict";n.r(e);n("d3b7");var a="Settings",r={path:"ApplySettings",meta:{title:"Apply Settings"},component:function(){return n("3995")("./".concat(a,"/ApplySettings"))}},o={path:"ChangePin",meta:{title:"Change Pin"},component:function(){return n("abbf")("./".concat(a,"/ChangePin"))}},s={path:"Ping",meta:{title:"Ping"},component:function(){return n("eecf")("./".concat(a,"/Ping"))}},c={path:"WipeDevice",meta:{title:"Wipe Device"},component:function(){return n("db36")("./".concat(a,"/WipeDevice"))}},i={path:"ResetDevice",meta:{title:"Reset Device"},component:function(){return n("c8fb")("./".concat(a,"/ResetDevice"))}},u={path:"BackupDevice",meta:{title:"Backup Device"},component:function(){return n("aeb4")("./".concat(a,"/BackupDevice"))}},l={path:"RecoveryDevice",meta:{title:"Recovery Device"},component:function(){return n("0aa9")("./".concat(a,"/RecoveryDevice"))}};e["default"]={path:"/".concat(a),meta:{icon:"mdi-cog-outline",title:"Device Settings"},component:function(){return n("f893")("./".concat(a,"/index"))},children:[r,o,s,c,i,u,l]}},e733:function(t,e,n){"use strict";n.r(e),e["default"]={}},e9e8:function(t,e,n){var a={"./app/actions.ts":"e733","./app/getters.ts":"50b9","./app/mutations.ts":"1850","./app/state.ts":"33d6","./index.ts":"f33f","./usb/actions.ts":"fac6","./usb/getters.ts":"69ba","./usb/mutations.ts":"068a","./usb/state.ts":"f978"};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="e9e8"},eecf:function(t,e,n){var a={"./Settings/Ping":["d4b4","chunk-2d21e558"]};function r(t){if(!n.o(a,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=a[t],r=e[0];return n.e(e[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id="eecf",t.exports=r},f20f:function(t,e,n){var a={"./enUS":["76b9"],"./enUS.ts":["76b9"],"./zhCN":["ccc5","lang-zhCN"],"./zhCN.ts":["ccc5","lang-zhCN"]};function r(t){if(!n.o(a,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=a[t],r=e[0];return Promise.all(e.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id="f20f",t.exports=r},f33f:function(t,e,n){"use strict";n.r(e);n("4160"),n("d3b7"),n("ac1f"),n("5319"),n("1276"),n("159b"),n("ddb0");var a=n("3835"),r=n("e9e8"),o={};r.keys().forEach((function(t){if("./index.ts"!==t){var e=t.replace(/(\.\/|\.ts)/g,""),n=e.split("/"),s=Object(a["a"])(n,2),c=s[0],i=s[1];o[c]||(o[c]={namespaced:!0}),o[c][i]=r(t).default}})),e["default"]=o},f893:function(t,e,n){var a={"./ABC1/index":["5e85","chunk-2d0d3ac3"],"./Bitcoin/index":["dee3","chunk-2d229da5"],"./Settings/index":["c110","chunk-2d215fc3"]};function r(t){if(!n.o(a,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=a[t],r=e[0];return n.e(e[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id="f893",t.exports=r},f978:function(t,e,n){"use strict";n.r(e),e["default"]={usbVendorId:0,usbProductId:0,usbManufacturer:"",usbProduct:"",usbSerialNumber:"",majorVersion:0,minorVersion:0,patchVersion:0,bootloaderMode:!1,firmwarePresent:!1,label:"",model:"",msg:null,err:null}},fac6:function(t,e,n){"use strict";n.r(e),e["default"]={}},fc98:function(t,e,n){var a={"./Bitcoin/GetPublicKey":["364c","chunk-14ac0772"]};function r(t){if(!n.o(a,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=a[t],r=e[0];return n.e(e[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id="fc98",t.exports=r}});