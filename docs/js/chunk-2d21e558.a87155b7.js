(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e558"],{d4b4:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"2"}},[n("v-btn",{attrs:{color:"primary",large:"",block:""},on:{click:function(t){return e.initialize()}}},[e._v("Initialize")]),n("br"),n("v-btn",{attrs:{color:"primary",large:"",block:""},on:{click:function(t){return e.buttonProtection()}}},[e._v("Button")]),n("br"),n("v-btn",{attrs:{color:"primary",large:"",block:""},on:{click:function(t){return e.pinProtection(!1)}}},[e._v("Pin")]),n("br"),n("v-btn",{attrs:{color:"primary",large:"",block:""},on:{click:function(t){return e.passphraseProtection(!1)}}},[e._v("Passphrase")]),n("br"),n("v-row",{attrs:{align:"center"}},[n("v-col",[n("v-text-field",{attrs:{label:"msg","hide-details":""},model:{value:e.d_msg,callback:function(t){e.d_msg=t},expression:"d_msg"}})],1),n("v-col",[n("v-btn",{attrs:{color:"primary",large:"",block:""},on:{click:function(t){return e.testMsg()}}},[e._v("Test Msg")])],1)],1)],1),n("v-col",{attrs:{cols:"5"}},[n("v-textarea",{attrs:{label:"Request",value:e.d_request,filled:"",readonly:"","auto-grow":""}})],1),n("v-col",{attrs:{cols:"5"}},[n("v-textarea",{attrs:{label:"Response",value:e.d_response,filled:"",readonly:"","auto-grow":""}})],1)],1)],1)},s=[],i=(n("96cf"),n("1da1")),a={name:"Ping",data:function(){return{d_msg:"ABCKEY",d_response:"",d_request:""}},methods:{initialize:function(){this.$usb.cmd("Initialize")},testMsg:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={message:e.d_msg},t.next=3,e.$usb.cmd("Ping",n);case 3:r=t.sent,e.d_request='abckey.cmd("Ping", '+JSON.stringify(n,null,4)+")",e.d_response=JSON.stringify(r,null,4);case 6:case"end":return t.stop()}}),t)})))()},buttonProtection:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={button_protection:!0},t.next=3,e.$usb.cmd("Ping",n);case 3:r=t.sent,e.d_request='abckey.cmd("Ping", '+JSON.stringify(n,null,4)+")",e.d_response=JSON.stringify(r,null,4);case 6:case"end":return t.stop()}}),t)})))()},pinProtection:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={pin_protection:!0},t.next=3,e.$usb.cmd("Ping",n);case 3:r=t.sent,e.d_request='abckey.cmd("Ping", '+JSON.stringify(n,null,4)+")",e.d_response=JSON.stringify(r,null,4);case 6:case"end":return t.stop()}}),t)})))()},passphraseProtection:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={passphrase_protection:!0},t.next=3,e.$usb.cmd("Ping",n);case 3:r=t.sent,e.d_request='abckey.cmd("Ping", '+JSON.stringify(n,null,4)+")",e.d_response=JSON.stringify(r,null,4);case 6:case"end":return t.stop()}}),t)})))()}}},c=a,o=n("2877"),u=Object(o["a"])(c,r,s,!1,null,"47859670",null);t["default"]=u.exports}}]);