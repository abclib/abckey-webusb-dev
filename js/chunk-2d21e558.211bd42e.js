(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e558"],{d4b4:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"2"}},[n("v-btn",{attrs:{color:"primary",large:"",block:""},on:{click:function(e){return t.initialize()}}},[t._v(t._s(t.$t("Initialize")))]),n("br"),n("v-btn",{attrs:{color:"primary",large:"",block:""},on:{click:function(e){return t.buttonProtection()}}},[t._v(t._s(t.$t("Button")))]),n("br"),n("v-btn",{attrs:{color:"primary",large:"",block:""},on:{click:function(e){return t.passphraseProtection()}}},[t._v(t._s(t.$t("Passphrase")))]),n("br"),n("v-btn",{attrs:{color:"primary",large:"",block:""},on:{click:function(e){return t.pinProtection()}}},[t._v(t._s(t.$t("Pin")))]),n("br"),n("v-row",{attrs:{align:"center"}},[n("v-col",[n("v-text-field",{attrs:{label:t.$t("msg"),"hide-details":""},model:{value:t.d_msg,callback:function(e){t.d_msg=e},expression:"d_msg"}})],1),n("v-col",[n("v-btn",{attrs:{color:"primary",large:"",block:""},on:{click:function(e){return t.testMsg()}}},[t._v(t._s(t.$t("Test Msg")))])],1)],1)],1),n("v-col",{attrs:{cols:"5"}},[n("v-textarea",{attrs:{label:t.$t("Request"),value:t.d_request,filled:"",readonly:"","auto-grow":""}})],1),n("v-col",{attrs:{cols:"5"}},[n("v-textarea",{attrs:{label:t.$t("Response"),value:t.d_response,filled:"",readonly:"","auto-grow":""}})],1)],1)],1)},s=[],i=(n("96cf"),n("1da1")),a={name:"Ping",data:function(){return{d_msg:"ABCKEY",d_response:"",d_request:""}},methods:{initialize:function(){this.$usb.cmd("Initialize")},testMsg:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={message:t.d_msg},e.next=3,t.$usb.cmd("Ping",n);case 3:r=e.sent,t.d_request='abckey.cmd("Ping", '+JSON.stringify(n,null,4)+")",t.d_response=JSON.stringify(r,null,4);case 6:case"end":return e.stop()}}),e)})))()},buttonProtection:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={button_protection:!0},e.next=3,t.$usb.cmd("Ping",n);case 3:r=e.sent,t.d_request='abckey.cmd("Ping", '+JSON.stringify(n,null,4)+")",t.d_response=JSON.stringify(r,null,4);case 6:case"end":return e.stop()}}),e)})))()},pinProtection:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={pin_protection:!0},e.next=3,t.$usb.cmd("Ping",n);case 3:r=e.sent,t.d_request='abckey.cmd("Ping", '+JSON.stringify(n,null,4)+")",t.d_response=JSON.stringify(r,null,4);case 6:case"end":return e.stop()}}),e)})))()},passphraseProtection:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={passphrase_protection:!0},e.next=3,t.$usb.cmd("Ping",n);case 3:r=e.sent,t.d_request='abckey.cmd("Ping", '+JSON.stringify(n,null,4)+")",t.d_response=JSON.stringify(r,null,4);case 6:case"end":return e.stop()}}),e)})))()}},i18n:{messages:{zhCN:{Initialize:"复位",Button:"按键",Passphrase:"密码",Pin:"PIN","Test Msg":"通信",msg:"消息"}}}},c=a,o=n("2877"),u=Object(o["a"])(c,r,s,!1,null,"c05bef02",null);e["default"]=u.exports}}]);