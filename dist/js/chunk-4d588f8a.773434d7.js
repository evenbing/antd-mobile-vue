(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d588f8a"],{"06cd":function(t,e,n){"use strict";var a=n("8fb7"),c=n.n(a);c.a},"17e7":function(t,e){t.exports='<h4 id="基本">基本</h4>\n'},"19dd":function(t,e,n){},"2b50":function(t,e,n){"use strict";var a=n("b143"),c=n.n(a);c.a},"2ee9":function(t,e){t.exports='<h1 id="上下留白--m-white-space">上下留白  m-white-space</h1>\n'},"30dc":function(t,e,n){"use strict";var a=n("61df"),c=(n("658b"),n("86e5"),a["a"]);c.install=function(t){t.component("MWhiteSpace",a["a"])};e["a"]=c},"4d26":function(t,e,n){var a,c;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var c=typeof a;if("string"===c||"number"===c)t.push(a);else if(Array.isArray(a)&&a.length){var r=o.apply(null,a);r&&t.push(r)}else if("object"===c)for(var s in a)n.call(a,s)&&a[s]&&t.push(s)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):(a=[],c=function(){return o}.apply(e,a),void 0===c||(t.exports=c))})()},"4f8a":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"code-box code-box-target"},[n("markdown",{staticClass:"code-box-meta",attrs:{source:t.markdown}}),n("ae-icon",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.code,expression:"code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copied,expression:"copied",arg:"success"}],staticClass:"copy-btn",attrs:{type:"copy"}}),n("pre",{directives:[{name:"hljs",rawName:"v-hljs"}],staticClass:"code-box-code markdown-body clearfix"},[t._v("    "),n("ae-layout",[t._v("\n      "),n("code",{domProps:{textContent:t._s(t.code)}}),t._v("\n    ")]),t._v("\n  ")],1)],1)},c=[],o=n("d225"),r=n("b0b4"),s=n("308d"),i=n("6bb5"),d=n("4e2b"),l=n("9ab4"),p=n("8bbf"),u=n.n(p),b=n("65d9"),f=n.n(b),m=n("60a3"),h=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(s["a"])(this,Object(i["a"])(e).apply(this,arguments)),t.showCode=!1,t}return Object(d["a"])(e,t),Object(r["a"])(e,[{key:"copied",value:function(){this.$message.success("已复制")}}]),e}(u.a);l["b"]([Object(m["d"])(String)],h.prototype,"code",void 0),l["b"]([Object(m["d"])(String)],h.prototype,"markdown",void 0),h=l["b"]([f()({name:"CodeBox"})],h);var v=h,y=v,j=(n("06cd"),n("2877")),x=Object(j["a"])(y,a,c,!1,null,null,null);e["a"]=x.exports},"61df":function(t,e,n){"use strict";var a=n("d225"),c=n("b0b4"),o=n("308d"),r=n("6bb5"),s=n("4e2b"),i=n("9ab4"),d=n("4d26"),l=n.n(d),p=n("8bbf"),u=n.n(p),b=n("65d9"),f=n.n(b),m=n("60a3"),h=function(t){function e(){return Object(a["a"])(this,e),Object(o["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),Object(c["a"])(e,[{key:"render",value:function(){var t=this,e=arguments[0],n=l()(this.prefixCls,"".concat(this.prefixCls,"-").concat(this.size));return e("div",{class:n,on:{click:function(e){t.$emit("click",e)}}})}}]),e}(u.a);i["b"]([Object(m["d"])({type:String,default:"md"})],h.prototype,"size",void 0),i["b"]([Object(m["d"])({type:String,default:"am-whitespace"})],h.prototype,"prefixCls",void 0),h=i["b"]([f()({name:"WhiteSpace"})],h),e["a"]=h},"658b":function(t,e,n){"use strict";n("f5df"),n("19dd")},"7a21":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"basic"}},[n("markdown",{attrs:{source:t.title}})],1),t._m(0),n("demo1",{attrs:{id:"demo1"}}),t._m(1),n("markdown",{attrs:{source:t.props}})],1)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-body m-b",attrs:{id:"demo"}},[n("span"),n("h2",[t._v("示例代码")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-body",attrs:{id:"props"}},[n("span"),n("h2",[t._v("属性说明")])])}],o=n("d225"),r=n("b0b4"),s=n("308d"),i=n("6bb5"),d=n("4e2b"),l=n("9ab4"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo"},[n("code-box",{attrs:{code:t.code,markdown:t.md}})],1)},u=[],b='<template>\n  <div>\n    <m-white-space size="xs"/>\n    <place-holder/>\n    <m-white-space size="sm"/>\n    <place-holder/>\n    <m-white-space/>\n    <place-holder/>\n    <m-white-space size="lg"/>\n    <place-holder/>\n    <m-white-space size="xl"/>\n    <place-holder/>\n  </div>\n</template>\n<script lang="ts">\n  import PlaceHolder from \'../../flex/demo/place-holder.vue\';\n\n  export default {\n    name: \'DemoDemo1\',\n    components: {PlaceHolder}\n  };\n<\/script>\n',f=n("17e7"),m=n.n(f),h=n("8bbf"),v=n.n(h),y=n("65d9"),j=n.n(y),x=n("4f8a"),w=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(s["a"])(this,Object(i["a"])(e).apply(this,arguments)),t.code=b,t.md=m.a,t}return Object(d["a"])(e,t),e}(v.a);w=l["b"]([j()({name:"Demo1",components:{CodeBox:x["a"]}})],w);var O=w,_=O,g=n("2877"),k=Object(g["a"])(_,p,u,!1,null,null,null),C=k.exports,z=n("30dc"),$=n("2ee9"),E=n.n($),S=n("afb8"),D=n.n(S);v.a.use(z["a"]);var P=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(s["a"])(this,Object(i["a"])(e).apply(this,arguments)),t.title=E.a,t.props=D.a,t}return Object(d["a"])(e,t),Object(r["a"])(e,[{key:"getContainer",value:function(){return document.getElementById("app-content")}}]),e}(v.a);P=l["b"]([j()({name:"ComponentDemo",components:{demo1:C}})],P);var B=P,N=B,A=(n("2b50"),Object(g["a"])(N,a,c,!1,null,"5c107b03",null));e["default"]=A.exports},"86e5":function(t,e,n){},"8fb7":function(t,e,n){},afb8:function(t,e){t.exports="<table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>prefixCls</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>size</td>\n<td></td>\n<td>&#39;xs&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;xl&#39;</td>\n<td></td>\n</tr>\n</tbody></table>\n"},b143:function(t,e,n){},f5df:function(t,e,n){}}]);
//# sourceMappingURL=chunk-4d588f8a.773434d7.js.map