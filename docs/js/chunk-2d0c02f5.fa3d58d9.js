(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c02f5"],{4168:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"4"}},[a("v-btn",{attrs:{color:"primary",large:"",block:""},on:{click:function(t){return e.resetDevice()}}},[e._v("Reset Device")])],1),a("v-col",[a("v-select",{attrs:{items:[{text:"12 word",value:128},{text:"18 word",value:192},{text:"24 word",value:256}],label:"Strength","hide-details":""},model:{value:e.d_strength,callback:function(t){e.d_strength=t},expression:"d_strength"}})],1),a("v-col",[a("v-select",{attrs:{items:[{text:"Bip39",value:0},{text:"Slip39_Basic",value:1},{text:"Slip39_Advanced",value:2}],label:"backup_type","hide-details":""},model:{value:e.d_backupType,callback:function(t){e.d_backupType=t},expression:"d_backupType"}})],1)],1),a("v-row",[a("v-col",[a("v-textarea",{attrs:{label:"Request",value:e.d_request,filled:"",readonly:"","auto-grow":""}})],1)],1)],1),a("v-col",{attrs:{cols:"6"}},[a("v-row",[a("v-col",[a("v-textarea",{attrs:{label:"Response",value:e.d_response,filled:"",readonly:"","auto-grow":""}})],1)],1)],1)],1)],1)},n=[],s=(a("96cf"),a("1da1")),l={name:"ResetDevice",data:function(){return{d_strength:256,d_backupType:0,d_response:"",d_request:""}},methods:{resetDevice:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={display_random:!1,strength:e.d_strength,passphrase_protection:!1,pin_protection:!1,language:"en-US",label:"ABCKEY",skip_backup:!0,no_backup:!1,backup_type:e.d_backupType},t.next=3,e.$usb.resetDevice(a);case 3:r=t.sent,e.d_request="abckey.resetDevice("+JSON.stringify(a,null,4)+")",e.d_response=JSON.stringify(r,null,4);case 6:case"end":return t.stop()}}),t)})))()}}},c=l,o=a("2877"),u=a("6544"),i=a.n(u),d=a("8336"),p=a("62ad"),v=a("a523"),_=a("0fd9"),b=a("b974"),k=a("a844"),w=Object(o["a"])(c,r,n,!1,null,"a361341c",null);t["default"]=w.exports;i()(w,{VBtn:d["a"],VCol:p["a"],VContainer:v["a"],VRow:_["a"],VSelect:b["a"],VTextarea:k["a"]})}}]);