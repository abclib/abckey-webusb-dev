(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-491fec86"],{1681:function(e,t,i){var n=i("57e3");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("499e").default;a("02d338a9",n,!0,{sourceMap:!1,shadowMode:!1})},"2f28":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"6"}},[i("v-row",{attrs:{align:"center"}},[i("v-col",{attrs:{cols:"4"}},[i("v-btn",{attrs:{color:"primary",large:"",block:""},on:{click:function(t){return e.getAddr()}}},[e._v("Get Address")])],1),i("v-col",[i("v-checkbox",{attrs:{label:"show_display"},model:{value:e.d_showDisplay,callback:function(t){e.d_showDisplay=t},expression:"d_showDisplay"}})],1)],1),i("v-row",[i("v-col",{attrs:{cols:"2"}},[i("v-text-field",{attrs:{type:"number",label:"purpose","hide-details":""},model:{value:e.d_purpose,callback:function(t){e.d_purpose=t},expression:"d_purpose"}})],1),i("v-col",{attrs:{cols:"2"}},[i("v-text-field",{attrs:{type:"number",label:"coin_type","hide-details":""},model:{value:e.d_coinType,callback:function(t){e.d_coinType=t},expression:"d_coinType"}})],1),i("v-col",{attrs:{cols:"2"}},[i("v-text-field",{attrs:{type:"number",label:"account","hide-details":""},model:{value:e.d_account,callback:function(t){e.d_account=t},expression:"d_account"}})],1),i("v-col",{attrs:{cols:"2"}},[i("v-text-field",{attrs:{type:"number",label:"change","hide-details":""},model:{value:e.d_change,callback:function(t){e.d_change=t},expression:"d_change"}})],1),i("v-col",{attrs:{cols:"2"}},[i("v-text-field",{attrs:{type:"number",label:"address_index","hide-details":""},model:{value:e.d_addressIndex,callback:function(t){e.d_addressIndex=t},expression:"d_addressIndex"}})],1)],1),i("v-row",{attrs:{align:"center"}}),i("v-row",[i("v-col",[i("v-textarea",{attrs:{label:"Request",value:e.d_request,filled:"",readonly:"","auto-grow":""}})],1)],1),i("v-row",[i("ul",[i("li",[i("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki",target:"_blank"}},[e._v("https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki")])]),i("li",[i("a",{attrs:{href:"https://github.com/satoshilabs/slips/blob/master/slip-0044.md",target:"_blank"}},[e._v("https://github.com/satoshilabs/slips/blob/master/slip-0044.md")])])])])],1),i("v-col",{attrs:{cols:"6"}},[i("v-row",[i("v-col",[i("v-textarea",{attrs:{label:"Response",value:e.d_response,filled:"",readonly:"","auto-grow":""}})],1)],1)],1)],1)],1)},a=[],l=(i("96cf"),i("1da1")),s={name:"GetAddress",data:function(){return{d_purpose:49,d_coinType:0,d_account:0,d_change:0,d_addressIndex:0,d_showDisplay:!1,d_response:"",d_request:""}},methods:{getAddr:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i={address_n:[(2147483648|e.d_purpose)>>>0,(2147483648|e.d_coinType)>>>0,(2147483648|e.d_account)>>>0,e.d_change,e.d_addressIndex],script_type:49===e.d_purpose?4:0,show_display:e.d_showDisplay},t.next=3,e.$usb.cmd("GetAddress",i);case 3:n=t.sent,e.d_request='abckey.cmd("GetAddress", '+JSON.stringify(i,null,4)+")",e.d_response=JSON.stringify(n,null,4);case 6:case"end":return t.stop()}}),t)})))()}}},d=s,r=i("2877"),o=i("6544"),v=i.n(o),x=i("8336"),p=i("ac7c"),u=i("62ad"),c=i("a523"),f=i("0fd9"),h=i("8654"),_=i("a844"),g=Object(r["a"])(d,n,a,!1,null,"9a4f8354",null);t["default"]=g.exports;v()(g,{VBtn:x["a"],VCheckbox:p["a"],VCol:u["a"],VContainer:c["a"],VRow:f["a"],VTextField:h["a"],VTextarea:_["a"]})},"57e3":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".v-textarea textarea{-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{padding-top:2px;-ms-flex-item-align:start;align-self:start}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{-ms-flex-item-align:start;align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{-ms-flex-item-align:start;align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{-ms-flex-item-align:stretch;align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}",""]),e.exports=t},"6ca7":function(e,t,i){var n=i("dd75");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("499e").default;a("27ca4fa0",n,!0,{sourceMap:!1,shadowMode:!1})},a523:function(e,t,i){"use strict";i("20f6"),i("4b85");var n=i("8bbf"),a=i.n(n);function l(e){return a.a.extend({name:`v-${e}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(t,{props:i,data:n,children:a}){n.staticClass=`${e} ${n.staticClass||""}`.trim();const{attrs:l}=n;if(l){n.attrs={};const e=Object.keys(l).filter(e=>{if("slot"===e)return!1;const t=l[e];return e.startsWith("data-")?(n.attrs[e]=t,!1):t||"string"===typeof t});e.length&&(n.staticClass+=` ${e.join(" ")}`)}return i.id&&(n.domProps=n.domProps||{},n.domProps.id=i.id),t(i.tag,n,a)}})}var s=i("d9f7");t["a"]=l("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(e,{props:t,data:i,children:n}){let a;const{attrs:l}=i;return l&&(i.attrs={},a=Object.keys(l).filter(e=>{if("slot"===e)return!1;const t=l[e];return e.startsWith("data-")?(i.attrs[e]=t,!1):t||"string"===typeof t})),t.id&&(i.domProps=i.domProps||{},i.domProps.id=t.id),e(t.tag,Object(s["a"])(i,{staticClass:"container",class:Array({"container--fluid":t.fluid}).concat(a||[])}),n)}})},a844:function(e,t,i){"use strict";i("1681");var n=i("8654"),a=i("58df");const l=Object(a["a"])(n["a"]);t["a"]=l.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:e=>!isNaN(parseFloat(e))},rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseInt(e,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...n["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const e=this.$refs.input;if(!e)return;e.style.height="0";const t=e.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(i,t)+"px"},genInput(){const e=n["a"].options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput(e){n["a"].options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},ac7c:function(e,t,i){"use strict";i("6ca7"),i("ec29");var n=i("9d26"),a=i("c37a"),l=i("fe09");t["a"]=l["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...a["a"].options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.disabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(e){this.$nextTick(()=>this.inputIndeterminate=e)},inputIndeterminate(e){this.$emit("update:indeterminate",e)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(n["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...this.attrs$,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})},dd75:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}",""]),e.exports=t}}]);