(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e2171"],{"7ce4":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-card",[a("v-card-text",[a("v-btn",{attrs:{color:"primary",large:"",block:""},on:{click:function(t){return e.signETH()}}},[e._v(e._s(e.$t("ERC20 Transaction")))]),a("br"),a("v-select",{attrs:{items:e.c_coins,label:e.$t("coin_name")},model:{value:e.d_coinName,callback:function(t){e.d_coinName=t},expression:"d_coinName"}}),a("v-text-field",{attrs:{label:e.$t("bip32_path")},model:{value:e.d_bip32Path,callback:function(t){e.d_bip32Path=t},expression:"d_bip32Path"}}),a("v-text-field",{attrs:{label:e.$t("chain_id"),type:"number"},model:{value:e.d_chainId,callback:function(t){e.d_chainId=t},expression:"d_chainId"}}),a("v-text-field",{attrs:{label:e.$t("nonce"),type:"number"},model:{value:e.d_nonce,callback:function(t){e.d_nonce=t},expression:"d_nonce"}}),a("v-text-field",{attrs:{label:e.$t("gas_price"),type:"number"},model:{value:e.d_gasPrice,callback:function(t){e.d_gasPrice=t},expression:"d_gasPrice"}}),a("v-text-field",{attrs:{label:e.$t("gas_limit"),type:"number"},model:{value:e.d_gasLimit,callback:function(t){e.d_gasLimit=t},expression:"d_gasLimit"}}),a("v-text-field",{attrs:{label:e.$t("to")},model:{value:e.d_to,callback:function(t){e.d_to=t},expression:"d_to"}}),a("v-text-field",{attrs:{label:e.$t("value"),type:"number"},model:{value:e.d_value,callback:function(t){e.d_value=t},expression:"d_value"}}),a("v-text-field",{attrs:{label:e.$t("erc20")},model:{value:e.d_erc20,callback:function(t){e.d_erc20=t},expression:"d_erc20"}})],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"8"}},[a("v-textarea",{attrs:{label:e.$t("Request"),value:e.d_request,filled:"",readonly:"","auto-grow":""}}),a("v-textarea",{attrs:{label:e.$t("Response"),value:e.d_response,filled:"",readonly:"","auto-grow":""}})],1)],1)],1)},c=[],i=(a("96cf"),a("1da1")),l={name:"Transaction",data:function(){return{d_coinName:"Ethereum",d_bip32Path:"m/44'/60'/0'/0/0",d_chainId:"1",d_nonce:"1",d_gasPrice:"1000000000",d_gasLimit:"21000",d_to:"0xAEc6B4896bCCa877653a9E0df13FE085c3fafef2",d_value:"1",d_erc20:"0xdAC17F958D2ee523a2206206994597C13D831ec7",d_request:"",d_response:""}},computed:{c_coins:function(e){return e.$store.__s("app.ethName")}},methods:{signETH:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={erc20:e.d_erc20,bip32_path:e.d_bip32Path,nonce:e.d_nonce,gas_price:e.d_gasPrice,gas_limit:e.d_gasLimit,to:e.d_to,value:e.d_value,chain_id:e.d_chainId},e.d_request="abckey.signETH("+JSON.stringify(a,null,4)+")",t.next=4,e.$usb.signETH(a);case 4:n=t.sent,e.d_response=JSON.stringify(n,null,4);case 6:case"end":return t.stop()}}),t)})))()}},i18n:{messages:{zhCN:{"Sign Transaction":"签名交易"}}}},r=l,s=a("2877"),d=Object(s["a"])(r,n,c,!1,null,"cf84c082",null);t["default"]=d.exports}}]);