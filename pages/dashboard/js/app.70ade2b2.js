(function(t){function e(e){for(var n,o,i=e[0],c=e[1],u=e[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b56be96f"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(t);var u=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(l);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",u.name="ChunkLoadError",u.type=n,u.request=s,a[1](u)}r[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/pages/dashboard/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),r=a.n(n);r.a},"5f9e":function(t,e,a){},"9c0c":function(t,e,a){},af2b:function(t,e,a){"use strict";var n=a("5f9e"),r=a.n(n);r.a},cd49:function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],o=(a("5c0b"),a("2877")),i={},c=Object(o["a"])(i,r,s,!1,null,null,null),u=c.exports,l=a("9483");Object(l["a"])("/pages/dashboard/service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var d=a("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard"},[a("div",{staticClass:"header"},[a("i",{staticClass:"fa fa-bars main-header",attrs:{"aria-hidden":"true"}}),a("h1",{staticClass:"main-header"},[t._v("Covid Data")]),a("div",{staticClass:"main-header"},[t._v("Total Count : "+t._s(t.data.length))])]),a("div",{staticClass:"main-panel"},[t._m(0),t.loading?a("div",{staticClass:"loader"},[a("PacmanLoader",{staticClass:"custom-class",attrs:{loading:t.loading,size:50}})],1):a("div",{staticClass:"cards"},t._l(t.data,(function(e,n){return a("div",{key:n,staticClass:"card"},[a("h1",{staticClass:"header1"},[t._v(t._s(e.patientnumber)+" "),"M"===e.gender?a("i",{staticClass:"fa fa-male",attrs:{"aria-hidden":"true"}}):"F"===e.gender?a("i",{staticClass:"fa fa-female",attrs:{"aria-hidden":"true"}}):a("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}})]),a("div",{staticClass:"details"},[a("span",[t._v("Nationality: "+t._s(e.nationality))]),a("span",[t._v("State: "+t._s(e.detectedstate))]),""!==e.agebracket?a("span",[t._v("Age : "+t._s(e.agebracket))]):a("span",{staticClass:"red-color"},[t._v("Age : "+t._s(e.agebracket))]),a("span",[t._v("Current Status : "+t._s(e.currentstatus))]),a("span",[t._v("Date: "+t._s(e.dateannounced))]),a("span",[t._v("Transmission Type: "+t._s(e.typeoftransmission))])])])})),0)])])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left-menu"},[a("span",{staticClass:"menu-items"},[a("i",{staticClass:"fa fa-pie-chart",attrs:{"aria-hidden":"true"}})]),a("span",{staticClass:"menu-items"},[a("i",{staticClass:"fa fa-line-chart menu-items",attrs:{"aria-hidden":"true"}})]),a("span",{staticClass:"menu-items"},[a("i",{staticClass:"fa fa-bar-chart menu-items",attrs:{"aria-hidden":"true"}})])])}],h=a("9ab4"),v=a("60a3"),b=a("bc3a"),m=a.n(b),g=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.loading=!1,e}return Object(h["b"])(e,t),e.prototype.created=function(){this.data="",this.info="",this.loading=!1,this.loadData()},e.prototype.loadData=function(){var t=this;this.loading=!0;var e=[];m.a.get("https://api.covid19india.org/raw_data1.json").then((function(a){t.loading=!1,e=a.data.raw_data,t.data=Object(h["c"])(e),t.$forceUpdate()})),m.a.get("https://api.covid19india.org/deaths_recoveries.json").then((function(e){t.info=e.data.deaths_recoveries.filter((function(t){return"Deceased"==t.patientstatus})),t.$forceUpdate()}))},e=Object(h["a"])([v["a"]],e),e}(v["b"]),_=g,y=_,C=(a("af2b"),Object(o["a"])(y,f,p,!1,null,"3e40e614",null)),w=C.exports;n["a"].use(d["a"]);var j=[{path:"/",name:"DashboardComponent",component:w},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],O=new d["a"]({mode:"history",base:"/pages/dashboard/",routes:j}),k=O,P=a("2f62");n["a"].use(P["a"]);var S=new P["a"].Store({state:{},mutations:{},actions:{},modules:{}}),x=(a("7f10"),a("05c2"));n["a"].config.productionTip=!1,n["a"].use(x["VueSpinners"]),new n["a"]({router:k,store:S,render:function(t){return t(u)}}).$mount("#app")}});