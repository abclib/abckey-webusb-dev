(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e41f845"],{"364c":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"2"}},[a("v-btn",{attrs:{color:"primary",large:"",block:""},on:{click:function(t){return e.getPbk()}}},[e._v("Get Public Key")]),a("br"),a("v-select",{attrs:{items:["Bitcoin","Dogecoin"],label:"coin_name","hide-details":""},model:{value:e.d_coinName,callback:function(t){e.d_coinName=t},expression:"d_coinName"}}),a("br"),a("v-text-field",{attrs:{label:"path","hide-details":""},model:{value:e.d_path,callback:function(t){e.d_path=t},expression:"d_path"}}),a("br"),a("v-select",{attrs:{items:["SPENDADDRESS","SPENDMULTISIG","EXTERNAL","SPENDWITNESS","SPENDP2SHWITNESS"],label:"script_type","hide-details":""},model:{value:e.d_scriptType,callback:function(t){e.d_scriptType=t},expression:"d_scriptType"}}),a("br"),a("v-select",{attrs:{items:[!0,!1],label:"show_display","hide-details":""},model:{value:e.d_showDisplay,callback:function(t){e.d_showDisplay=t},expression:"d_showDisplay"}}),a("br"),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki",target:"_blank"}},[e._v("bip-0044.mediawiki")])]),a("li",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0045.mediawiki",target:"_blank"}},[e._v("bip-0045.mediawiki")])]),a("li",[a("a",{attrs:{href:"https://github.com/satoshilabs/slips/blob/master/slip-0044.md",target:"_blank"}},[e._v("slip-0044.md")])])])],1),a("v-col",{attrs:{cols:"5"}},[a("v-textarea",{attrs:{label:"Request",value:e.d_request,filled:"",readonly:"","auto-grow":""}})],1),a("v-col",{attrs:{cols:"5"}},[a("v-textarea",{attrs:{label:"Response",value:e.d_response,filled:"",readonly:"","auto-grow":""}})],1)],1)],1)},s=[],r=a("62a3"),c=r["a"],n=a("2877"),l=Object(n["a"])(c,i,s,!1,null,"5707a888",null);t["default"]=l.exports},"62a3":function(e,t,a){"use strict";(function(e){a("d3b7"),a("ac1f"),a("25f0"),a("466d"),a("96cf");var i=a("1da1"),s=a("b85c");t["a"]={name:"GetPublicKey",data:function(){return{d_coinName:"Bitcoin",d_path:"m/49'/0'/0'",d_scriptType:"SPENDP2SHWITNESS",d_showDisplay:!1,d_response:"",d_request:""}},watch:{d_scriptType:function(e){"SPENDMULTISIG"===e&&(this.d_path="m/45'/0")},d_coinName:function(e){"Bitcoin"===e?(this.d_path="m/49'/0'/0'",this.d_scriptType="SPENDP2SHWITNESS"):"Dogecoin"===e&&(this.d_path="m/44'/0'/0'",this.d_scriptType="SPENDADDRESS")}},computed:{c_addressN:function(){var e,t=[],a=this.d_path.match(/\/[0-9]+('|H)?/g),i=Object(s["a"])(a);try{for(i.s();!(e=i.n()).done;){var r=e.value,c=parseInt(r.match(/[0-9]+/g)[0]);r.match(/('|H)/g)&&(c=(2147483648|c)>>>0),t.push(c)}}catch(n){i.e(n)}finally{i.f()}return t}},methods:{getPbk:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var i,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i={coin_name:t.d_coinName,address_n:t.c_addressN,script_type:t.d_scriptType,show_display:t.d_showDisplay},t.d_request='abckey.cmd("GetPublicKey", '+JSON.stringify(i,null,4)+")",a.next=4,t.$usb.cmd("GetPublicKey",i);case 4:s=a.sent,s.data.node.chain_code=e.from(s.data.node.chain_code,"base64").toString("hex"),s.data.node.public_key=e.from(s.data.node.public_key,"base64").toString("hex"),t.d_response=JSON.stringify(s,null,4);case 8:case"end":return a.stop()}}),a)})))()}}}}).call(this,a("b639").Buffer)}}]);