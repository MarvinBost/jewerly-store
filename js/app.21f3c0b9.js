(function(t){function e(e){for(var n,i,s=e[0],c=e[1],u=e[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/jewerly-store/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"32a6":function(t,e,r){"use strict";r("bfdc")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],i=(r("5c0b"),r("2877")),s={},c=Object(i["a"])(s,o,a,!1,null,null,null),u=c.exports,l=r("8c4f"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("header",[r("Navbar",{attrs:{title:"Brand"}})],1),t._m(0),t._m(1)])},f=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("section",{staticClass:"banner"},[r("h1",[t._v("NEW COLLECTION")]),r("h2",[t._v("Four One")]),r("span")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",[r("div",{staticClass:"left-content"},[r("h2",[t._v(" Promise "),r("br"),t._v(" Rings ")]),r("h3",[t._v("NEXT COLLECTION")])]),r("div",{},[r("p",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,"),r("br"),t._v(" voluptate quasi exercitationem alias officia aperiam nostrum et"),r("br"),t._v(" voluptates suscipit consectetur. Tempora harum nesciunt natus"),r("br"),t._v(" tempore. ")]),r("div",{staticClass:"links"},[r("a",{attrs:{href:"http://",target:"_blank",rel:"noopener noreferrer"}},[r("b",[t._v("FB")])]),r("a",{attrs:{href:"http://",target:"_blank",rel:"noopener noreferrer"}},[r("b",[t._v("TW")])]),r("a",{attrs:{href:"http://",target:"_blank",rel:"noopener noreferrer"}},[r("b",[t._v("IN")])])])]),r("div",{staticClass:"btn-container"},[r("button",[t._v("GO TO SHOP")])])])}],v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",[r("router-link",{staticClass:"brand",attrs:{to:"/"}},[t._v(t._s(t.title))]),r("ul",[r("router-link",{attrs:{to:"/shop"}},[t._v("Shop")]),r("router-link",{attrs:{to:"/collection"}},[t._v("Collection")]),r("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),r("ul",[r("router-link",{attrs:{to:"/favorite"}},[r("i",{staticClass:"icon icon-lg icon-heart-2"})]),r("router-link",{attrs:{to:"/cart"}},[r("i",{staticClass:"icon icon-lg icon-shopping-bag"})])],1)],1)},b=[],d={name:"HelloWorld",props:{title:String}},h=d,_=(r("32a6"),Object(i["a"])(h,v,b,!1,null,"b4203dd6",null)),m=_.exports,O={name:"Home",components:{Navbar:m}},g=O,y=(r("7337"),Object(i["a"])(g,p,f,!1,null,"f7cc715a",null)),w=y.exports;n["a"].use(l["a"]);var j=[{path:"/",name:"Home",component:w}],k=new l["a"]({mode:"history",base:"/jewerly-store/",routes:j}),C=k,x=r("2f62");n["a"].use(x["a"]);var E=new x["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:C,store:E,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},7337:function(t,e,r){"use strict";r("b299")},"9c0c":function(t,e,r){},b299:function(t,e,r){},bfdc:function(t,e,r){}});
//# sourceMappingURL=app.21f3c0b9.js.map