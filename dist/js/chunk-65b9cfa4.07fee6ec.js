(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65b9cfa4"],{"06cd":function(t,e,n){"use strict";var o=n("8fb7"),r=n.n(o);r.a},"11e9":function(t,e,n){var o=n("52a7"),r=n("4630"),i=n("6821"),a=n("6a99"),s=n("69a8"),c=n("c69a"),d=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?d:function(t,e){if(t=i(t),e=a(e,!0),c)try{return d(t,e)}catch(n){}if(s(t,e))return r(!o.f.call(t,e),t[e])}},"19dd":function(t,e,n){},"1af6":function(t,e,n){var o=n("63b6");o(o.S,"Array",{isArray:n("9003")})},"20fd":function(t,e,n){"use strict";var o=n("d9f6"),r=n("aebd");t.exports=function(t,e,n){e in t?o.f(t,e,r(0,n)):t[e]=n}},2638:function(t,e,n){"use strict";function o(){return o=Object.assign||function(t){for(var e,n=1;n<arguments.length;n++)for(var o in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},o.apply(this,arguments)}var r=["attrs","props","domProps"],i=["class","style","directives"],a=["on","nativeOn"],s=function(t){return t.reduce(function(t,e){for(var n in e)if(t[n])if(-1!==r.indexOf(n))t[n]=o({},t[n],e[n]);else if(-1!==i.indexOf(n)){var s=t[n]instanceof Array?t[n]:[t[n]],d=e[n]instanceof Array?e[n]:[e[n]];t[n]=s.concat(d)}else if(-1!==a.indexOf(n))for(var u in e[n])if(t[n][u]){var l=t[n][u]instanceof Array?t[n][u]:[t[n][u]],h=e[n][u]instanceof Array?e[n][u]:[e[n][u]];t[n][u]=l.concat(h)}else t[n][u]=e[n][u];else if("hook"==n)for(var f in e[n])t[n][f]=t[n][f]?c(t[n][f],e[n][f]):e[n][f];else t[n]=e[n];else t[n]=e[n];return t},{})},c=function(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}};t.exports=s},3702:function(t,e,n){var o=n("481b"),r=n("5168")("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||i[r]===t)}},"40c3":function(t,e,n){var o=n("6b4c"),r=n("5168")("toStringTag"),i="Arguments"==o(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=a(e=Object(t),r))?n:i?o(e):"Object"==(s=o(e))&&"function"==typeof e.callee?"Arguments":s}},"41d7":function(t,e){t.exports="<table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td></td>\n<td>className</td>\n<td></td>\n<td>string</td>\n</tr>\n<tr>\n<td>content</td>\n<td></td>\n<td>VNode</td>\n<td></td>\n</tr>\n<tr>\n<td>contentStyle</td>\n<td></td>\n<td>any</td>\n<td></td>\n</tr>\n<tr>\n<td>docked</td>\n<td></td>\n<td>boolean</td>\n<td></td>\n</tr>\n<tr>\n<td>dragHandleStyle</td>\n<td></td>\n<td>any</td>\n<td></td>\n</tr>\n<tr>\n<td>dragToggleDistance</td>\n<td></td>\n<td>number</td>\n<td></td>\n</tr>\n<tr>\n<td>open</td>\n<td></td>\n<td>boolean</td>\n<td></td>\n</tr>\n<tr>\n<td>overlayStyle</td>\n<td></td>\n<td>any</td>\n<td></td>\n</tr>\n<tr>\n<td>position</td>\n<td></td>\n<td>&#39;left&#39; | &#39;right&#39; | &#39;top&#39; | &#39;bottom&#39;</td>\n<td></td>\n</tr>\n<tr>\n<td>prefixCls</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>sidebar</td>\n<td></td>\n<td>VNode</td>\n<td></td>\n</tr>\n<tr>\n<td>sidebarStyle</td>\n<td>抽屉内容容器样式</td>\n<td>any</td>\n<td></td>\n</tr>\n<tr>\n<td>touch</td>\n<td></td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td>transitions</td>\n<td></td>\n<td>boolean</td>\n<td></td>\n</tr>\n<tr>\n<td>value</td>\n<td></td>\n<td>boolean</td>\n<td></td>\n</tr>\n</tbody></table>\n"},"4d26":function(t,e,n){var o,r;
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
(function(){"use strict";var n={}.hasOwnProperty;function i(){for(var t=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var r=typeof o;if("string"===r||"number"===r)t.push(o);else if(Array.isArray(o)&&o.length){var a=i.apply(null,o);a&&t.push(a)}else if("object"===r)for(var s in o)n.call(o,s)&&o[s]&&t.push(s)}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):(o=[],r=function(){return i}.apply(e,o),void 0===r||(t.exports=r))})()},"4ea9":function(t,e,n){},"4ee1":function(t,e,n){var o=n("5168")("iterator"),r=!1;try{var i=[7][o]();i["return"]=function(){r=!0},Array.from(i,function(){throw 2})}catch(a){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var i=[7],s=i[o]();s.next=function(){return{done:n=!0}},i[o]=function(){return s},t(i)}catch(a){}return n}},"4f8a":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"code-box code-box-target"},[n("markdown",{staticClass:"code-box-meta",attrs:{source:t.markdown}}),n("ae-icon",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.code,expression:"code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copied,expression:"copied",arg:"success"}],staticClass:"copy-btn",attrs:{type:"copy"}}),n("pre",{directives:[{name:"hljs",rawName:"v-hljs"}],staticClass:"code-box-code markdown-body clearfix"},[t._v("    "),n("ae-layout",[t._v("\n      "),n("code",{domProps:{textContent:t._s(t.code)}}),t._v("\n    ")]),t._v("\n  ")],1)],1)},r=[],i=n("d225"),a=n("b0b4"),s=n("308d"),c=n("6bb5"),d=n("4e2b"),u=n("9ab4"),l=n("8bbf"),h=n.n(l),f=n("65d9"),p=n.n(f),b=n("60a3"),v=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.showCode=!1,t}return Object(d["a"])(e,t),Object(a["a"])(e,[{key:"copied",value:function(){this.$message.success("已复制")}}]),e}(h.a);u["b"]([Object(b["d"])(String)],v.prototype,"code",void 0),u["b"]([Object(b["d"])(String)],v.prototype,"markdown",void 0),v=u["b"]([p()({name:"CodeBox"})],v);var y=v,m=y,g=(n("06cd"),n("2877")),O=Object(g["a"])(m,o,r,!1,null,null,null);e["a"]=O.exports},5176:function(t,e,n){t.exports=n("51b6")},"51b6":function(t,e,n){n("a3c3"),t.exports=n("584a").Object.assign},"549b":function(t,e,n){"use strict";var o=n("d864"),r=n("63b6"),i=n("241e"),a=n("b0dc"),s=n("3702"),c=n("b447"),d=n("20fd"),u=n("7cd6");r(r.S+r.F*!n("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,r,l,h=i(t),f="function"==typeof this?this:Array,p=arguments.length,b=p>1?arguments[1]:void 0,v=void 0!==b,y=0,m=u(h);if(v&&(b=o(b,p>2?arguments[2]:void 0,2)),void 0==m||f==Array&&s(m))for(e=c(h.length),n=new f(e);e>y;y++)d(n,y,v?b(h[y],y):h[y]);else for(l=m.call(h),n=new f;!(r=l.next()).done;y++)d(n,y,v?a(l,b,[r.value,y],!0):r.value);return n.length=y,n}})},"54a1":function(t,e,n){n("6c1c"),n("1654"),t.exports=n("95d5")},"5dbc":function(t,e,n){var o=n("d3f4"),r=n("8b97").set;t.exports=function(t,e,n){var i,a=e.constructor;return a!==n&&"function"==typeof a&&(i=a.prototype)!==n.prototype&&o(i)&&r&&r(t,i),t}},"624c":function(t,e){t.exports='<h1 id="抽屉--m-drawer">抽屉  m-drawer</h1>\n'},6379:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"basic"}},[n("markdown",{attrs:{source:t.title}})],1),t._m(0),n("demo1",{attrs:{id:"demo1"}}),n("demo2",{attrs:{id:"demo2"}}),t._m(1),n("markdown",{attrs:{source:t.props}})],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-body m-b",attrs:{id:"demo"}},[n("span"),n("h2",[t._v("示例代码")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-body",attrs:{id:"props"}},[n("span"),n("h2",[t._v("属性说明")])])}],i=n("d225"),a=n("b0b4"),s=n("308d"),c=n("6bb5"),d=n("4e2b"),u=n("9ab4"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo"},[n("code-box",{attrs:{code:t.code,markdown:t.md}})],1)},h=[],f='<template>\n  <div class="demo">\n    <m-nav-bar @left-click="onOpenChange">\n      <m-icon slot="icon"\n              type="ellipsis"/>\n      Basic\n    </m-nav-bar>\n    <m-drawer enable-drag-handle\n              class="my-drawer"\n              :content-style="{ color : \'#A6A6A6\', textAlign : \'center\', paddingTop : \'42px\' }"\n              :style="drawerStyle"\n              :value="state.open"\n              @open-change="{onOpenChange}">\n      <m-list slot="sidebar">\n        <m-list-item multiple-line\n                     thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png">Category\n        </m-list-item>\n        <template v-for="index in 15">\n          <m-list-item thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"\n                       :key="index">Category{{index}}\n          </m-list-item>\n        </template>\n      </m-list>\n      Click upper-left corner\n    </m-drawer>\n  </div>\n</template>\n<script lang="ts">\n  import Vue from \'vue\';\n  import Component from \'vue-class-component\';\n\n  @Component({\n    name: \'DemoDemo1\'\n  })\n  export default class DemoDemo1 extends Vue {\n\n    public state = {\n      open: true\n    };\n\n    get drawerStyle() {\n      return {minHeight: document.documentElement.clientHeight + \'px\'};\n    }\n\n    public onOpenChange(...args) {\n      console.log(args);\n      this.state.open = !this.state.open;\n    }\n  }\n<\/script>\n<style lang="less">\n  .demo {\n    .my-drawer {\n      position: relative;\n      overflow: auto;\n      -webkit-overflow-scrolling: touch;\n    }\n\n    .my-drawer .am-drawer-sidebar {\n      background-color: #fff;\n      overflow: auto;\n      -webkit-overflow-scrolling: touch;\n    }\n\n    .my-drawer .am-drawer-sidebar .am-list {\n      width: 300px;\n      padding: 0;\n    }\n  }\n</style>\n',p=n("7269"),b=n.n(p),v=n("8bbf"),y=n.n(v),m=n("65d9"),g=n.n(m),O=n("4f8a"),S=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.code=f,t.md=b.a,t}return Object(d["a"])(e,t),e}(y.a);S=u["b"]([g()({name:"Demo1",components:{CodeBox:O["a"]}})],S);var j=S,w=j,x=n("2877"),k=Object(x["a"])(w,l,h,!1,null,null,null),C=k.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo"},[n("code-box",{attrs:{code:t.code,markdown:t.md}})],1)},_=[],A='<template>\n  <div class="demo"\n       :style="{ height : \'100%\' }">\n    <m-nav-bar icon="ellipsis"\n               @left-click="onDock(\'open\')">\n      Docked in document\n    </m-nav-bar>\n    <m-drawer class="my-drawer"\n              :contentStyle="{ color : \'#A6A6A6\', textAlign : \'center\', paddingTop : \'42px\' }"\n              :docked="state.docked"\n              :sidebarStyle="{ border : \'1px solid #ddd\' }"\n              :style="drawerStyle"\n              :value="state.open">\n      <m-list slot="sidebar">\n        <m-list-item multiple-line\n                     thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png">Category\n        </m-list-item>\n        <template v-for="index in 15">\n          <m-list-item thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"\n                       :key="index">Category{{index}}\n          </m-list-item>\n        </template>\n      </m-list>\n      Click upper-left corner\n    </m-drawer>\n  </div>\n</template>\n<script lang="ts">\n  import Vue from \'vue\';\n  import Component from \'vue-class-component\';\n\n  @Component({\n    name: \'DemoDemo2\'\n  })\n  export default class DemoDemo2 extends Vue {\n\n\n    public state = {\n      docked: true,\n      open: true\n    };\n\n    get drawerStyle() {\n      return {minHeight: document.documentElement.clientHeight + \'px\'};\n    }\n\n    public onDock(d) {\n      this.state[d] = !this.state[d];\n    }\n  }\n<\/script>\n',X=n("bb59"),Y=n.n(X),E=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.code=A,t.md=Y.a,t}return Object(d["a"])(e,t),e}(y.a);E=u["b"]([g()({name:"Demo2",components:{CodeBox:O["a"]}})],E);var H=E,N=H,D=Object(x["a"])(N,T,_,!1,null,null,null),W=D.exports,I=n("f840"),M=n("624c"),P=n.n(M),$=n("41d7"),B=n.n($);y.a.use(I["a"]);var F=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.title=P.a,t.props=B.a,t}return Object(d["a"])(e,t),Object(a["a"])(e,[{key:"getContainer",value:function(){return document.getElementById("app-content")}}]),e}(y.a);F=u["b"]([g()({name:"ComponentDemo",components:{demo1:C,demo2:W}})],F);var R=F,V=R,z=(n("b853"),Object(x["a"])(V,o,r,!1,null,"0de0a9a2",null));e["default"]=z.exports},"658b":function(t,e,n){"use strict";n("f5df"),n("19dd")},7269:function(t,e){t.exports='<h4 id="基本">基本</h4>\n'},"7cd6":function(t,e,n){var o=n("40c3"),r=n("5168")("iterator"),i=n("481b");t.exports=n("584a").getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||i[o(t)]}},"8b97":function(t,e,n){var o=n("d3f4"),r=n("cb7c"),i=function(t,e){if(r(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{o=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),o(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:i}},"8fb7":function(t,e,n){},9093:function(t,e,n){var o=n("ce10"),r=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,r)}},9306:function(t,e,n){"use strict";var o=n("c3a1"),r=n("9aa9"),i=n("355d"),a=n("241e"),s=n("335c"),c=Object.assign;t.exports=!c||n("294c")(function(){var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=o})?function(t,e){var n=a(t),c=arguments.length,d=1,u=r.f,l=i.f;while(c>d){var h,f=s(arguments[d++]),p=u?o(f).concat(u(f)):o(f),b=p.length,v=0;while(b>v)l.call(f,h=p[v++])&&(n[h]=f[h])}return n}:c},"95d5":function(t,e,n){var o=n("40c3"),r=n("5168")("iterator"),i=n("481b");t.exports=n("584a").isIterable=function(t){var e=Object(t);return void 0!==e[r]||"@@iterator"in e||i.hasOwnProperty(o(e))}},a3c3:function(t,e,n){var o=n("63b6");o(o.S+o.F,"Object",{assign:n("9306")})},a745:function(t,e,n){t.exports=n("f410")},aa77:function(t,e,n){var o=n("5ca1"),r=n("be13"),i=n("79e5"),a=n("fdef"),s="["+a+"]",c="​",d=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),l=function(t,e,n){var r={},s=i(function(){return!!a[t]()||c[t]()!=c}),d=r[t]=s?e(h):a[t];n&&(r[n]=d),o(o.P+o.F*s,"String",r)},h=l.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(u,"")),t};t.exports=l},b0dc:function(t,e,n){var o=n("e4ae");t.exports=function(t,e,n,r){try{return r?e(o(n)[0],n[1]):e(n)}catch(a){var i=t["return"];throw void 0!==i&&o(i.call(t)),a}}},b853:function(t,e,n){"use strict";var o=n("4ea9"),r=n.n(o);r.a},bb59:function(t,e){t.exports='<h4 id="嵌入文档模式">嵌入文档模式</h4>\n'},bd86:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var o=n("85f2"),r=n.n(o);function i(t,e,n){return e in t?r()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},c426:function(t,e,n){},c5f6:function(t,e,n){"use strict";var o=n("7726"),r=n("69a8"),i=n("2d95"),a=n("5dbc"),s=n("6a99"),c=n("79e5"),d=n("9093").f,u=n("11e9").f,l=n("86cc").f,h=n("aa77").trim,f="Number",p=o[f],b=p,v=p.prototype,y=i(n("2aeb")(v))==f,m="trim"in String.prototype,g=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=m?e.trim():h(e,3);var n,o,r,i=e.charCodeAt(0);if(43===i||45===i){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+e}for(var a,c=e.slice(2),d=0,u=c.length;d<u;d++)if(a=c.charCodeAt(d),a<48||a>r)return NaN;return parseInt(c,o)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof p&&(y?c(function(){v.valueOf.call(n)}):i(n)!=f)?a(new b(g(e)),n,p):g(e)};for(var O,S=n("9e1e")?d(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;S.length>j;j++)r(b,O=S[j])&&!r(p,O)&&l(p,O,u(b,O));p.prototype=v,v.constructor=p,n("2aba")(o,f,p)}},d2d5:function(t,e,n){n("1654"),n("549b"),t.exports=n("584a").Array.from},f410:function(t,e,n){n("1af6"),t.exports=n("584a").Array.isArray},f5df:function(t,e,n){},f840:function(t,e,n){"use strict";n("c5f6");var o=n("5176"),r=n.n(o),i=n("2638"),a=n.n(i),s=n("d225"),c=n("b0b4"),d=n("308d"),u=n("6bb5"),l=n("4e2b"),h=n("9ab4"),f=n("8bbf"),p=n.n(f),b=n("65d9"),v=n.n(b),y=n("60a3"),m=(n("a481"),n("bd86")),g=n("7618"),O=n("dfdd"),S=n("579e"),j=n("4d26"),w=n.n(j);function x(t){var e=t,n=0,o=0;while(e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop))n+=e.offsetLeft-e.scrollLeft,o+=e.offsetTop-e.scrollTop,e=e.offsetParent;return{top:o,left:n}}var k=20,C=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(d["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.state={sidebarWidth:0,sidebarHeight:0,sidebarTop:0,dragHandleTop:0,touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null,touchSupported:"object"===("undefined"===typeof window?"undefined":Object(g["a"])(window))&&"ontouchstart"in window,notTouch:!0},t.isMoving=!1,t.startX=0,t.startY=0,t.touchOffsetX=0,t.touchOffsetY=0,t.transformOffset=0,t}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"mounted",value:function(){this.saveSidebarSize()}},{key:"updated",value:function(){this.isTouching()||this.saveSidebarSize()}},{key:"onOverlayClicked",value:function(){var t=this;this.open&&setTimeout(function(){t.$emit("open",!1,{overlayClicked:!0})},0)}},{key:"onTouchStart",value:function(t){if(!this.isTouching()){var e=t.targetTouches[0];this.state.touchIdentifier=this.state.notTouch?e.identifier:null,this.state.touchStartX=e.clientX,this.state.touchStartY=e.clientY,this.state.touchCurrentX=e.clientX,this.state.touchCurrentY=e.clientY}}},{key:"onTouchMove",value:function(t){if(this.isTouching())for(var e=0;e<t.targetTouches.length;e++)if(t.targetTouches[e].identifier===this.state.touchIdentifier){this.state.touchCurrentX=t.targetTouches[e].clientX,this.state.touchCurrentY=t.targetTouches[e].clientY;break}}},{key:"onTouchEnd",value:function(){if(this.state.notTouch=!1,this.isTouching()){var t=this.touchSidebarWidth();(this.open&&t<this.state.sidebarWidth-this.dragToggleDistance||!this.open&&t>this.dragToggleDistance)&&this.$emit("open",!this.open);var e=this.touchSidebarHeight();(this.open&&e<this.state.sidebarHeight-this.dragToggleDistance||!this.open&&e>this.dragToggleDistance)&&this.$emit("open",!this.open),this.state.touchIdentifier=null,this.state.touchStartX=null,this.state.touchStartY=null,this.state.touchCurrentX=null,this.state.touchCurrentY=null}}},{key:"onScroll",value:function(){this.isTouching()&&this.inCancelDistanceOnScroll()&&(this.state.touchIdentifier=null,this.state.touchStartX=null,this.state.touchStartY=null,this.state.touchCurrentX=null,this.state.touchCurrentY=null)}},{key:"inCancelDistanceOnScroll",value:function(){var t;switch(this.position){case"right":t=Math.abs(this.state.touchCurrentX-this.state.touchStartX)<k;break;case"bottom":t=Math.abs(this.state.touchCurrentY-this.state.touchStartY)<k;break;case"top":t=Math.abs(this.state.touchStartY-this.state.touchCurrentY)<k;break;case"left":default:t=Math.abs(this.state.touchStartX-this.state.touchCurrentX)<k}return t}},{key:"isTouching",value:function(){return null!==this.state.touchIdentifier}},{key:"saveSidebarSize",value:function(){var t=this.$refs.sidebar,e=t.offsetWidth,n=t.offsetHeight,o=x(this.$refs.sidebar).top,r=x(this.$refs.dragHandle).top;e!==this.state.sidebarWidth&&(this.state.sidebarWidth=e),n!==this.state.sidebarHeight&&(this.state.sidebarHeight=n),o!==this.state.sidebarTop&&(this.state.sidebarTop=o),r!==this.state.dragHandleTop&&(this.state.dragHandleTop=r)}},{key:"touchSidebarWidth",value:function(){return"right"===this.position?this.open&&window.innerWidth-this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth+this.state.touchStartX-this.state.touchCurrentX:this.state.sidebarWidth:Math.min(window.innerWidth-this.state.touchCurrentX,this.state.sidebarWidth):"left"===this.position?this.open&&this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth:this.state.sidebarWidth-this.state.touchStartX+this.state.touchCurrentX:Math.min(this.state.touchCurrentX,this.state.sidebarWidth):void 0}},{key:"touchSidebarHeight",value:function(){if("bottom"===this.position)return this.open&&window.innerHeight-this.state.touchStartY<this.state.sidebarHeight?this.state.touchCurrentY>this.state.touchStartY?this.state.sidebarHeight+this.state.touchStartY-this.state.touchCurrentY:this.state.sidebarHeight:Math.min(window.innerHeight-this.state.touchCurrentY,this.state.sidebarHeight);if("top"===this.position){var t=this.state.touchStartY-this.state.sidebarTop;return this.open&&t<this.state.sidebarHeight?this.state.touchCurrentY>this.state.touchStartY?this.state.sidebarHeight:this.state.sidebarHeight-this.state.touchStartY+this.state.touchCurrentY:Math.min(this.state.touchCurrentY-this.state.dragHandleTop,this.state.sidebarHeight)}}},{key:"renderStyle",value:function(t){var e=t.sidebarStyle,n=void 0===e?null:e,o=t.isTouching,r=void 0===o?null:o,i=t.overlayStyle,a=void 0===i?null:i,s=t.contentStyle,c=void 0===s?null:s;if("right"===this.position||"left"===this.position){if(n.transform="translateX(0%)",n.WebkitTransform="translateX(0%)",r){var d=this.touchSidebarWidth()/this.state.sidebarWidth;"right"===this.position&&(n.transform="translateX(".concat(100*(1-d),"%)"),n.WebkitTransform="translateX(".concat(100*(1-d),"%)")),"left"===this.position&&(n.transform="translateX(-".concat(100*(1-d),"%)"),n.WebkitTransform="translateX(-".concat(100*(1-d),"%)")),a.opacity=d,a.visibility="visible"}c&&(c[this.position]="".concat(this.state.sidebarWidth,"px"))}if("top"===this.position||"bottom"===this.position){if(n.transform="translateY(0%)",n.WebkitTransform="translateY(0%)",r){var u=this.touchSidebarHeight()/this.state.sidebarHeight;"bottom"===this.position&&(n.transform="translateY(".concat(100*(1-u),"%)"),n.WebkitTransform="translateY(".concat(100*(1-u),"%)")),"top"===this.position&&(n.transform="translateY(-".concat(100*(1-u),"%)"),n.WebkitTransform="translateY(-".concat(100*(1-u),"%)")),a.opacity=u,a.visibility="visible"}c&&(c[this.position]="".concat(this.state.sidebarHeight,"px"))}}},{key:"render",value:function(){var t,e=this,n=arguments[0],o=this.prefixCls,i=this.position,s=this.transitions,c=this.touch,d=this.enableDragHandle,u=this.sidebar,l=this.docked,h=this.open,f=r()({},this.sidebarStyle),p=r()({},this.contentStyle),b=r()({},this.overlayStyle),v=(t={},Object(m["a"])(t,o,!0),Object(m["a"])(t,"".concat(o,"-").concat(i),!0),t),y={},g=this.isTouching();g?this.renderStyle({sidebarStyle:f,isTouching:!0,overlayStyle:b}):this.docked?this.open&&(v["".concat(o,"-docked")]=!0,this.renderStyle({sidebarStyle:f,contentStyle:p})):h&&!l&&(v["".concat(o,"-open")]=!0,this.renderStyle({sidebarStyle:f}),b.opacity=1,b.visibility="visible"),!g&&s||(f.transition=void 0,f.webkitTransition=void 0,p.transition=void 0,b.transition=void 0);var O=null;return this.state.touchSupported&&c&&(h?(y.touchstart=function(t){e.state.notTouch=!0,e.onTouchStart(t)},y.touchmove=this.onTouchMove,y.touchend=this.onTouchEnd,y.touchcancel=this.onTouchEnd,y.scroll=this.onScroll):d&&(O=n("div",{class:"".concat(o,"-draghandle"),style:this.dragHandleStyle,on:{touchStart:this.onTouchStart.bind(this),touchMove:this.onTouchMove.bind(this),touchEnd:this.onTouchEnd.bind(this),touchCancel:this.onTouchEnd.bind(this)},ref:"dragHandle"}))),n("div",a()([{class:w()(v)},{on:y}]),[n("div",{class:"".concat(o,"-sidebar"),style:f,ref:"sidebar"},[u]),n("div",{class:"".concat(o,"-overlay"),style:b,attrs:{role:"presentation"},ref:"overlay",on:{click:this.onOverlayClicked.bind(this)}}),n("div",{class:"".concat(o,"-content"),style:p,ref:"content"},[O,this.$slots.default])])}},{key:"contentRef",get:function(){return this.$refs.content}},{key:"overlayRef",get:function(){return this.$refs.overlay}},{key:"onPan",get:function(){var t,e=this,n=0,o=0,r=function(){var t=+"".concat(n).replace("%","");return"".concat(n).indexOf("%")>=0&&(t/=100,t*=e.overlayRef.clientWidth),t};return{onPanStart:function(n){t=Object(O["b"])(n.direction),e.isMoving=!0},onPanMove:function(n){if(n.moveStatus){var i=r();i+="vertical"===t?0:n.moveStatus.x;var a=-e.overlayRef.scrollWidth+e.overlayRef.clientWidth;i=Math.min(i,0),i=Math.max(i,a),Object(S["c"])(e.overlayRef,i,"px",!1,!1),o=i}},onPanEnd:function(){n=o,e.isMoving=!1},setCurrentOffset:function(t){return n=t}}}}]),e}(p.a);h["b"]([Object(y["d"])({type:String,default:"rmc-drawer"})],C.prototype,"prefixCls",void 0),h["b"]([Object(y["d"])({default:function(){return{}}})],C.prototype,"sidebarStyle",void 0),h["b"]([Object(y["d"])({default:function(){return{}}})],C.prototype,"contentStyle",void 0),h["b"]([Object(y["d"])({default:function(){return{}}})],C.prototype,"overlayStyle",void 0),h["b"]([Object(y["d"])({default:function(){return{}}})],C.prototype,"dragHandleStyle",void 0),h["b"]([Object(y["d"])({})],C.prototype,"sidebar",void 0),h["b"]([Object(y["d"])({type:Boolean,default:!1})],C.prototype,"docked",void 0),h["b"]([Object(y["d"])({type:Boolean,default:!1})],C.prototype,"open",void 0),h["b"]([Object(y["d"])({type:Boolean,default:!0})],C.prototype,"transitions",void 0),h["b"]([Object(y["d"])({type:Boolean,default:!0})],C.prototype,"touch",void 0),h["b"]([Object(y["d"])({type:Boolean,default:!0})],C.prototype,"enableDragHandle",void 0),h["b"]([Object(y["d"])({default:"left"})],C.prototype,"position",void 0),h["b"]([Object(y["d"])({type:Number,default:30})],C.prototype,"dragToggleDistance",void 0),h["b"]([Object(y["d"])({default:function(){return function(){}}})],C.prototype,"onOpenChange",void 0),C=h["b"]([v()({name:"Drawer"})],C);var T=C,_=function(t){function e(){return Object(s["a"])(this,e),Object(d["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"render",value:function(){var t=this,e=arguments[0];return e(T,a()([{},{attrs:r()({},this.$props,this.$attrs,{sidebar:this.$slots.sidebar||this.sidebar})},{attrs:{open:this.value}},{on:r()({},this.$listeners,{open:function(e){t.$emit("input",e),t.$emit("open",e)}})}]),[this.$slots.default])}}]),e}(p.a);h["b"]([Object(y["d"])({type:Object})],_.prototype,"sidebarStyle",void 0),h["b"]([Object(y["d"])({type:Object})],_.prototype,"contentStyle",void 0),h["b"]([Object(y["d"])({type:Object})],_.prototype,"overlayStyle",void 0),h["b"]([Object(y["d"])({type:Object})],_.prototype,"dragHandleStyle",void 0),h["b"]([Object(y["d"])({type:Boolean})],_.prototype,"docked",void 0),h["b"]([Object(y["d"])({type:Boolean})],_.prototype,"transitions",void 0),h["b"]([Object(y["d"])({type:Boolean,default:!0})],_.prototype,"touch",void 0),h["b"]([Object(y["d"])({type:Number})],_.prototype,"dragToggleDistance",void 0),h["b"]([Object(y["d"])({type:String,default:"am-drawer"})],_.prototype,"prefixCls",void 0),h["b"]([Object(y["d"])({})],_.prototype,"sidebar",void 0),h["b"]([Object(y["d"])({type:Boolean})],_.prototype,"value",void 0),h["b"]([Object(y["d"])({type:String,default:"left"})],_.prototype,"position",void 0),_=h["b"]([v()({name:"Drawer"})],_);var A=_;n("658b"),n("c426");A.install=function(t){t.component("MDrawer",A)};e["a"]=A},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-65b9cfa4.07fee6ec.js.map