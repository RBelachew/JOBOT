(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var q;function ca(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var da="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function t(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&da(c,a,{configurable:!0,writable:!0,value:b})}}
t("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;da(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&da(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(ca(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:ca(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ia(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function la(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ma="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)la(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||ma});
var na="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},oa;
if("function"==typeof Object.setPrototypeOf)oa=Object.setPrototypeOf;else{var pa;a:{var qa={a:!0},ra={};try{ra.__proto__=qa;pa=ra.a;break a}catch(a){}pa=!1}oa=pa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=oa;
function v(a,b){a.prototype=na(b.prototype);a.prototype.constructor=a;if(sa)sa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ma=b.prototype}
function ta(){this.G=!1;this.l=null;this.h=void 0;this.g=1;this.s=this.v=0;this.aa=this.i=null}
function ua(a){if(a.G)throw new TypeError("Generator is already running");a.G=!0}
ta.prototype.P=function(a){this.h=a};
function va(a,b){a.i={Wb:b,ic:!0};a.g=a.v||a.s}
ta.prototype.return=function(a){this.i={return:a};this.g=this.s};
function w(a,b,c){a.g=c;return{value:b}}
ta.prototype.C=function(a){this.g=a};
function wa(a,b,c){a.v=b;void 0!=c&&(a.s=c)}
function xa(a,b){a.g=b;a.v=0}
function Aa(a){a.v=0;var b=a.i.Wb;a.i=null;return b}
function Ba(a){a.aa=[a.i];a.v=0;a.s=0}
function Da(a){var b=a.aa.splice(0)[0];(b=a.i=a.i||b)?b.ic?a.g=a.v||a.s:void 0!=b.C&&a.s<b.C?(a.g=b.C,a.i=null):a.g=a.s:a.g=0}
function Ea(a){this.g=new ta;this.h=a}
function Fa(a,b){ua(a.g);var c=a.g.l;if(c)return Ga(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return Ha(a)}
function Ga(a,b,c,d){try{var e=b.call(a.g.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.G=!1,e;var f=e.value}catch(g){return a.g.l=null,va(a.g,g),Ha(a)}a.g.l=null;d.call(a.g,f);return Ha(a)}
function Ha(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.G=!1,{value:b.value,done:!1}}catch(c){a.g.h=void 0,va(a.g,c)}a.g.G=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.ic)throw b.Wb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ia(a){this.next=function(b){ua(a.g);a.g.l?b=Ga(a,a.g.l.next,b,a.g.P):(a.g.P(b),b=Ha(a));return b};
this.throw=function(b){ua(a.g);a.g.l?b=Ga(a,a.g.l["throw"],b,a.g.P):(va(a.g,b),b=Ha(a));return b};
this.return=function(b){return Fa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ja(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ja(new Ia(new Ea(a)))}
function Ka(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
t("Reflect.setPrototypeOf",function(a){return a?a:sa?function(b,c){try{return sa(b,c),!0}catch(d){return!1}}:null});
t("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.h=[];this.G=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.h=function(g){if(null==this.g){this.g=[];var h=this;this.i(function(){h.s()})}this.g.push(g)};
var e=fa.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.s=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.g=null};
c.prototype.l=function(g){this.i(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.Bc),reject:g(this.s)}};
b.prototype.Bc=function(g){if(g===this)this.s(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Ec(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.Ac(g):this.v(g)}};
b.prototype.Ac=function(g){var h=void 0;try{h=g.then}catch(k){this.s(k);return}"function"==typeof h?this.Fc(h,g):this.v(g)};
b.prototype.s=function(g){this.P(2,g)};
b.prototype.v=function(g){this.P(1,g)};
b.prototype.P=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;2===this.g&&this.Dc();this.aa()};
b.prototype.Dc=function(){var g=this;e(function(){if(g.kb()){var h=fa.console;"undefined"!==typeof h&&h.error(g.i)}},1)};
b.prototype.kb=function(){if(this.G)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return k(g)};
b.prototype.aa=function(){if(null!=this.h){for(var g=0;g<this.h.length;++g)f.h(this.h[g]);this.h=null}};
var f=new c;b.prototype.Ec=function(g){var h=this.l();g.qb(h.resolve,h.reject)};
b.prototype.Fc=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,p){return"function"==typeof r?function(y){try{l(r(y))}catch(A){m(A)}}:p}
var l,m,n=new b(function(r,p){l=r;m=p});
this.qb(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.qb=function(g,h){function k(){switch(l.g){case 1:g(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.h?f.h(k):this.h.push(k);this.G=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).qb(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(y){return function(A){r[y]=A;p--;0==p&&l(r)}}
var r=[],p=0;do r.push(void 0),p++,d(k.value).qb(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
t("WeakMap",function(a){function b(k){this.g=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!la(k,g)){var l=new c;da(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!la(k,g))throw Error("WeakMap key fail: "+k);k[g][this.g]=l;return this};
b.prototype.get=function(k){return d(k)&&la(k,g)?k[g][this.g]:void 0};
b.prototype.has=function(k){return d(k)&&la(k,g)&&la(k[g],this.g)};
b.prototype.delete=function(k){return d(k)&&la(k,g)&&la(k[g],this.g)?delete k[g][this.g]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.g;return ha(function(){if(l){for(;l.head!=h.g;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.data_[l];if(m&&la(h.data_,l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this.data_={};this.g=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.g,previous:this.g.previous,head:this.g,key:h,value:k},l.list.push(l.entry),this.g.previous.next=l.entry,this.g.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.g=this.g.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ma(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ma(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
t("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ma(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
t("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push(b[d]);return c}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ma(this,b,"includes").indexOf(b,c||0)}});
t("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
function Na(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Na(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return Na(this,function(b){return b})}});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
t("Array.prototype.values",function(a){return a?a:function(){return Na(this,function(b,c){return c})}});
t("Object.setPrototypeOf",function(a){return a||sa});
t("Set",function(a){function b(c){this.g=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push([d,b[d]]);return c}});
var z=this||self;function B(a,b){a=a.split(".");b=b||z;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Oa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Pa(a){var b=Oa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Qa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(1E9*Math.random()>>>0),Ta=0;function Ua(a,b,c){return a.call.apply(a.bind,arguments)}
function Xa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ya(a,b,c){Ya=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ua:Xa;return Ya.apply(null,arguments)}
function C(a,b){a=a.split(".");var c=z;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Za(a,b){function c(){}
c.prototype=b.prototype;a.ma=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Sd=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function $a(a){return a}
;function ab(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,ab);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Za(ab,Error);ab.prototype.name="CustomError";function bb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.h=c}}
;function cb(){}
function db(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var eb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},fb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
D(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function gb(a,b){b=eb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function hb(a){return Array.prototype.concat.apply([],arguments)}
function ib(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function jb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function kb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function lb(a){var b=mb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function nb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function ob(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=ob(a[c]);return b}
var pb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<pb.length;f++)c=pb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var rb;function sb(){}
function tb(a){return new sb(ub,a)}
var ub={};tb("");var vb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},wb=/&/g,xb=/</g,yb=/>/g,zb=/"/g,Fb=/'/g,Gb=/\x00/g,Hb=/[\x00&<>"']/;function Ib(a){this.g=a}
Ib.prototype.toString=function(){return this.g.toString()};
var Jb={},Kb=new Ib("about:invalid#zClosurez",Jb);var Lb,Mb=B("CLOSURE_FLAGS"),Nb=Mb&&Mb[610401301];Lb=null!=Nb?Nb:!1;function Ob(){var a=z.navigator;return a&&(a=a.userAgent)?a:""}
var Pb,Qb=z.navigator;Pb=Qb?Qb.userAgentData||null:null;function Rb(a){return Lb?Pb?Pb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function E(a){return-1!=Ob().indexOf(a)}
;function Sb(){return Lb?!!Pb&&0<Pb.brands.length:!1}
function Tb(){return Sb()?!1:E("Trident")||E("MSIE")}
function Ub(){return Sb()?Rb("Chromium"):(E("Chrome")||E("CriOS"))&&!(Sb()?0:E("Edge"))||E("Silk")}
;function Vb(a){this.g=a}
Vb.prototype.toString=function(){return this.g.toString()};function Wb(a){Hb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(wb,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(xb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(yb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(zb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Fb,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Gb,"&#0;")));return a}
;var Xb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yb(a){return a?decodeURI(a):a}
function Zb(a){return Yb(a.match(Xb)[3]||null)}
function $b(a){var b=a.match(Xb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function ac(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ac(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function bc(a){var b=[],c;for(c in a)ac(c,a[c],b);return b.join("&")}
var cc=/#|$/;function dc(a,b){var c=a.search(cc);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function ec(a){z.setTimeout(function(){throw a;},0)}
;function jc(){return E("iPhone")&&!E("iPod")&&!E("iPad")}
;function kc(a){kc[" "](a);return a}
kc[" "]=function(){};var lc=Sb()?!1:E("Opera"),mc=Tb(),nc=E("Edge"),oc=E("Gecko")&&!(-1!=Ob().toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),pc=-1!=Ob().toLowerCase().indexOf("webkit")&&!E("Edge");function qc(){var a=z.document;return a?a.documentMode:void 0}
var rc;a:{var sc="",tc=function(){var a=Ob();if(oc)return/rv:([^\);]+)(\)|;)/.exec(a);if(nc)return/Edge\/([\d\.]+)/.exec(a);if(mc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(pc)return/WebKit\/(\S+)/.exec(a);if(lc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
tc&&(sc=tc?tc[1]:"");if(mc){var uc=qc();if(null!=uc&&uc>parseFloat(sc)){rc=String(uc);break a}}rc=sc}var vc=rc,wc;if(z.document&&mc){var xc=qc();wc=xc?xc:parseInt(vc,10)||void 0}else wc=void 0;var yc=wc;var zc=jc()||E("iPod"),Ac=E("iPad");!E("Android")||Ub();Ub();var Bc=E("Safari")&&!(Ub()||(Sb()?0:E("Coast"))||(Sb()?0:E("Opera"))||(Sb()?0:E("Edge"))||(Sb()?Rb("Microsoft Edge"):E("Edg/"))||(Sb()?Rb("Opera"):E("OPR"))||E("Firefox")||E("FxiOS")||E("Silk")||E("Android"))&&!(jc()||E("iPad")||E("iPod"));var Cc={},Dc=null;
function Ec(a,b){Pa(a);void 0===b&&(b=0);if(!Dc){Dc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Cc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Dc[h]&&(Dc[h]=g)}}}b=Cc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Fc="undefined"!==typeof Uint8Array,Gc=!mc&&"function"===typeof btoa;var Hc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,ia(Object.values({Gd:1,Fd:2,Ed:4,Id:8,Hd:16,Ad:32,Jd:64,Cd:128,Bd:256,Dd:512})));function Jc(a,b){Hc?a[Hc]|=b:void 0!==a.ia?a.ia|=b:Object.defineProperties(a,{ia:{value:b,configurable:!0,writable:!0,enumerable:!1}})}
function Kc(a){var b=F(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Array.prototype.slice.call(a)),Lc(a,b|1))}
function Mc(a,b){Hc?a[Hc]&&(a[Hc]&=~b):void 0!==a.ia&&(a.ia&=~b)}
function F(a){var b;Hc?b=a[Hc]:b=a.ia;return b|0}
function Lc(a,b){Hc?a[Hc]=b:void 0!==a.ia?a.ia=b:Object.defineProperties(a,{ia:{value:b,configurable:!0,writable:!0,enumerable:!1}});return a}
function Nc(a,b){Object.isFrozen(a)&&(a=Array.prototype.slice.call(a));Lc(a,b);return a}
function Oc(a){Jc(a,1);return a}
function Pc(a,b){Lc(b,(a|0)&-51)}
function Qc(a,b){Lc(b,(a|18)&-41)}
function Rc(a){a=a>>10&1023;return 0===a?536870912:a}
;var Sc={};function Tc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Uc,Vc=Object.freeze(Lc([],23));function Wc(a){if(a&2)throw Error();}
;function Xc(a){return a.displayName||a.name||"unknown type name"}
function ad(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Xc(b)+" but got "+(a&&Xc(a.constructor)));return a}
function bd(a,b,c){var d=!1;if(null!=a&&"object"===typeof a&&!(d=Array.isArray(a))&&a.Jb===Sc)return a;if(d){var e=d=F(a);0===e&&(e|=c&16);e|=c&2;e!==d&&Lc(a,e);return new b(a)}}
;function cd(a,b){a=a.J;return dd(a,F(a),b)}
function dd(a,b,c,d){if(-1===c)return null;if(c>=Rc(b)){if(b&128)return a[a.length-1][c]}else{var e=a.length;if(d&&b&128&&(d=a[e-1][c],null!=d))return d;b=c+(((b&256)>>8)-1);if(b<e)return a[b]}}
function G(a,b,c){var d=a.J,e=F(d);Wc(e);ed(d,e,b,c);return a}
function ed(a,b,c,d,e){var f=Rc(b);if(c>=f||e){e=b;if(b&128)f=a[a.length-1];else{if(null==d)return;f=a[f+(((b&256)>>8)-1)]={};e|=128}f[c]=d;e&=-513;e!==b&&Lc(a,e)}else a[c+(((b&256)>>8)-1)]=d,b&128&&(d=a[a.length-1],c in d&&delete d[c]),b&512&&Lc(a,b&-513)}
function fd(a,b,c,d,e){var f=b&2,g=dd(a,b,c,e);Array.isArray(g)||(g=Vc);var h=F(g);h&1||Oc(g);if(f)h&2||Jc(g,18),d&1||Object.freeze(g);else{f=!(d&2);var k=h&2;d&1||!k?f&&h&16&&!k&&Mc(g,16):(g=Oc(Array.prototype.slice.call(g)),ed(a,b,c,g,e))}return g}
function gd(a,b,c,d){a=a.J;var e=F(a);Wc(e);(c=hd(a,e,c))&&c!==b&&null!=d&&ed(a,e,c);ed(a,e,b,d)}
function id(a,b,c){a=a.J;return hd(a,F(a),b)===c?c:-1}
function hd(a,b,c){for(var d=0,e=0;e<c.length;e++){var f=c[e];null!=dd(a,b,f)&&(0!==d&&ed(a,b,d),d=f)}return d}
function jd(a,b,c){var d=void 0===d?!1:d;var e=a.J;var f=F(e),g=dd(e,f,c,d);b=bd(g,b,f);b!==g&&null!=b&&ed(e,f,c,b,d);e=b;if(null==e)return e;a=a.J;f=F(a);f&2||(g=e,F(g.J)&2&&(b=kd(g,!1),b.g=g,Jc(b.J,512),g=b),g!==e&&(e=g,ed(a,f,c,e,d)));return e}
function I(a,b,c,d){null!=d?ad(d,b):d=void 0;return G(a,c,d)}
function ld(a,b,c,d,e){null!=e?ad(e,b):e=void 0;gd(a,c,d,e)}
function md(a,b,c,d){a=a.J;var e=F(a);Wc(e);var f=!!(e&2),g=fd(a,e,b,1);if(g!==Vc&&F(g)&4){if(!f){f=Object.isFrozen(g);var h=F(g);var k=h&-19;f&&(g=Array.prototype.slice.call(g),h=0,ed(a,e,b,g));h!==k&&Lc(g,k)}b=g}else{f=g;h=!!(e&2);k=!!(F(f)&2);g=f;!h&&k&&(f=Array.prototype.slice.call(f));h=e|(k?2:0);k=k||void 0;for(var l=0,m=0;l<f.length;l++){var n=bd(f[l],c,h);void 0!==n&&(k=k||F(n.J)&2,f[m++]=n)}m<l&&(f.length=m);k=!k;h=F(f);l=h|5;k=k?l|8:l&-9;h!=k&&(f=Nc(f,k));g!==f&&ed(a,e,b,f);b=f}c=null!=
d?ad(d,c):new c;b.push(c);F(c.J)&2&&Mc(b,8);e&512&&Lc(a,e&-513)}
function nd(a,b){var c=void 0===c?"":c;a=cd(a,b);return null==a?c:a}
function od(a,b){b=id(a,pd,b);return cd(a,b)}
;var qd;function rd(a,b){return sd(b)}
function sd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)&&Fc&&null!=a&&a instanceof Uint8Array){if(Gc){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=Ec(a);return a}}return a}
;function td(a,b){var c=a.J,d=Array.prototype.slice.call(c),e=F(c),f=d.length;c=e&128?d[f-1]:void 0;f+=c?-1:0;for(e=e&256?1:0;e<f;e++)d[e]=b(d[e]);if(c){e=d[e]={};for(var g in c)e[g]=b(c[g])}b=a.constructor;Jc(d,16);F(d);qd=d;d=new b(d);qd=void 0;a.hc&&(d.hc=a.hc.slice());return d}
function ud(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&F(a)&1?void 0:f&&F(a)&2?a:vd(a,b,c,void 0!==d,e,f);else if(Tc(a)){var g={},h;for(h in a)g[h]=ud(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function vd(a,b,c,d,e,f){var g=d||c?F(a):0;d=d?!!(g&16):void 0;a=Array.prototype.slice.call(a);for(var h=0;h<a.length;h++)a[h]=ud(a[h],b,c,d,e,f);c&&c(g,a);return a}
function wd(a){return a.Jb===Sc?a.toJSON():sd(a)}
;function xd(a,b,c){c=void 0===c?Qc:c;if(null!=a){if(Fc&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=F(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return Lc(a,d|18),a;a=vd(a,xd,d&4?Qc:c,!0,!1,!0);b=F(a);b&4&&b&2&&Object.freeze(a);return a}a.Jb===Sc&&(F(a.J)&2||(a=kd(a,!0),Jc(a.J,18)));return a}}
function kd(a,b){var c=F(a.J),d=b||c&2?Qc:Pc,e=!!(c&16);return td(a,function(f){return xd(f,e,d)})}
;function J(a,b,c){null==a&&(a=qd);qd=void 0;if(null==a){var d=48;c?(a=[c],d|=256):a=[]}else{if(!Array.isArray(a))throw Error();d=F(a)|32;if(c&&(d|=256,c!==a[0]))throw Error();}this.J=a;a:{c=a;var e=c.length;if(e){var f=e-1,g=c[f];if(Tc(g)){d|=128;b=((d&256)>>8)-1;e=f-b;if(1024<=e){for(var h=e=1023;h<=f;h++){var k=c[h];null!=k&&(g[h-b]=k)}c.length=1024;c[e]=g}d=d&-1047553|(e&1023)<<10;break a}}b&&(c=Math.max(b,e-(((d&256)>>8)-1)),1024<c&&(c=536870912),d=d&-1047553|(c&1023)<<10)}Lc(a,d)}
J.prototype.toJSON=function(){if(Uc)var a=yd(this,this.J,!1);else a=vd(this.J,wd,void 0,void 0,!1,!1),a=yd(this,a,!0);return a};
function zd(a){Uc=!0;try{return JSON.stringify(a.toJSON(),rd)}finally{Uc=!1}}
J.prototype.clone=function(){return kd(this,!1)};
J.prototype.Jb=Sc;J.prototype.toString=function(){return yd(this,this.J,!1).toString()};
function yd(a,b,c){var d=a.constructor.la,e=F(c?a.J:b);e=Rc(e);if(d){if(!c){b=Array.prototype.slice.call(b);var f;if(b.length&&Tc(f=b[b.length-1]))for(var g=0;g<d.length;g++)if(d[g]>=e){Object.assign(b[b.length-1]={},f);break}}f=b;c=!c;e=F(a.J);a=Rc(e);e=((e&256)>>8)-1;var h;for(g=0;g<d.length;g++){var k=d[g];if(k<a){k+=e;var l=f[k];null==l?f[k]=c?Vc:Oc([]):c&&l!==Vc&&Kc(l)}else h||(l=void 0,f.length&&Tc(l=f[f.length-1])?h=l:f.push(h={})),l=h[k],null==h[k]?h[k]=c?Vc:Oc([]):c&&l!==Vc&&Kc(l)}}return b}
;var Ad=window;tb("csi.gstatic.com");tb("googleads.g.doubleclick.net");tb("partner.googleadservices.com");tb("pubads.g.doubleclick.net");tb("securepubads.g.doubleclick.net");tb("tpc.googlesyndication.com");function Bd(a,b){this.width=a;this.height=b}
q=Bd.prototype;q.clone=function(){return new Bd(this.width,this.height)};
q.aspectRatio=function(){return this.width/this.height};
q.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
q.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
q.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Cd(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Dd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Ed(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||z.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Fd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Gd[c])c=Gd[c];else{c=String(c);if(!Gd[c]){var f=/function\s+([^\(]+)/m.exec(c);Gd[c]=f?f[1]:"[Anonymous]"}c=Gd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Fd(a,b){b||(b={});b[Hd(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Hd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Fd(a,b));return c}
function Hd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Gd={};/*

 SPDX-License-Identifier: Apache-2.0
*/
var Id;try{new URL("s://g"),Id=!0}catch(a){Id=!1}var Jd=Id;function Kd(a,b){a.removeAttribute("srcdoc");var c="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");a.setAttribute("sandbox","");for(var d=0;d<c.length;d++)a.sandbox.supports&&!a.sandbox.supports(c[d])||a.sandbox.add(c[d]);if(b instanceof Ib)b instanceof Ib&&b.constructor===Ib?b=b.g:(Oa(b),b="type_error:SafeUrl");else{b:if(Jd){try{var e=new URL(b)}catch(f){c="https:";break b}c=e.protocol}else c:{c=document.createElement("a");
try{c.href=b}catch(f){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}b="javascript:"!==c?b:void 0}void 0!==b&&(a.src=b)}
;function Ld(a){this.ad=a}
function Md(a){return new Ld(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Nd=[Md("data"),Md("http"),Md("https"),Md("mailto"),Md("ftp"),new Ld(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function Od(a,b){b=void 0===b?Nd:b;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof Ld&&d.ad(a))return new Ib(a,Jb)}}
function Pd(a){var b=void 0===b?Nd:b;return Od(a,b)||Kb}
;function Qd(a){var b=Rd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Sd(){var a=[];Qd(function(b){a.push(b)});
return a}
var Rd={pd:"allow-forms",qd:"allow-modals",rd:"allow-orientation-lock",sd:"allow-pointer-lock",td:"allow-popups",ud:"allow-popups-to-escape-sandbox",vd:"allow-presentation",wd:"allow-same-origin",xd:"allow-scripts",yd:"allow-top-navigation",zd:"allow-top-navigation-by-user-activation"},Td=db(function(){return Sd()});
function Ud(){var a=Vd(),b={};D(Td(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Vd(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var Wd=(new Date).getTime();function Xd(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var Yd="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ia(Yd);function Zd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,p=0;64>p;p+=4)r[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=r[p-3]^r[p-8]^r[p-14]^r[p-16],r[p]=(n<<1|n>>>31)&4294967295;n=e[0];var y=e[1],A=e[2],H=e[3],O=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var T=H^y&(A^H);var Q=1518500249}else T=y^A^H,Q=1859775393;else 60>p?(T=y&A|H&(y|A),Q=2400959708):(T=y^A^H,Q=3395469782);T=((n<<5|n>>>27)&4294967295)+T+O+Q+r[p]&4294967295;O=H;H=A;A=(y<<30|y>>>2)&4294967295;y=n;n=T}e[0]=e[0]+n&4294967295;e[1]=e[1]+y&4294967295;e[2]=
e[2]+A&4294967295;e[3]=e[3]+H&4294967295;e[4]=e[4]+O&4294967295}
function c(n,r){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],y=0,A=n.length;y<A;++y)p.push(n.charCodeAt(y));n=p}r||(r=n.length);p=0;if(0==l)for(;p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<r;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=r&255,r>>>=8;b(f);for(p=r=0;5>p;p++)for(var y=24;0<=y;y-=8)n[r++]=e[p]>>y&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Lc:function(){for(var n=d(),r="",p=0;p<n.length;p++)r+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return r}}}
;function $d(a,b,c){var d=String(z.location.href);return d&&a&&b?[b,ae(Xd(d),a,c||null)].join(" "):null}
function ae(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],D(d,function(h){e.push(h)}),be(e.join(" "));
var f=[],g=[];D(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];D(d,function(h){e.push(h)});
a=be(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function be(a){var b=Zd();b.update(a);return b.Lc().toLowerCase()}
;var ce={};function de(a){this.g=a||{cookie:""}}
q=de.prototype;q.isEnabled=function(){if(!z.navigator.cookieEnabled)return!1;if(this.g.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Gb:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
q.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Zd;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Gb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
q.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=vb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
q.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Gb:0,path:b,domain:c});return d};
q.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=vb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var ee=new de("undefined"==typeof document?null:document);function fe(a){return!!ce.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function ge(a,b,c,d){(a=z[a])||"undefined"===typeof document||(a=(new de(document)).get(b));return a?$d(a,c,d):null}
function he(a){var b=void 0===b?!1:b;var c=Xd(String(z.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=z.__SAPISID||z.__APISID||z.__3PSAPISID||z.__OVERRIDE_SID;fe(e)&&(f=f||z.__1PSAPISID);if(f)e=!0;else{if("undefined"!==typeof document){var g=new de(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID")||g.get("OSID");fe(e)&&(f=f||g.get("__Secure-1PAPISID"))}e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?
z.__SAPISID:z.__APISID,e||"undefined"===typeof document||(e=new de(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?$d(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&fe(b)&&((b=ge("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=ge("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;"undefined"!==typeof TextDecoder&&new TextDecoder;var ie="undefined"!==typeof TextEncoder?new TextEncoder:null,je=ie?function(a){return ie.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function ke(){this.i=this.i;this.s=this.s}
ke.prototype.i=!1;ke.prototype.dispose=function(){this.i||(this.i=!0,this.Ea())};
ke.prototype.Ea=function(){if(this.s)for(;this.s.length;)this.s.shift()()};function le(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.i=!1}
le.prototype.stopPropagation=function(){this.i=!0};
le.prototype.preventDefault=function(){this.defaultPrevented=!0};var qe=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
z.addEventListener("test",c,b);z.removeEventListener("test",c,b)}catch(d){}return a}();function re(a,b){le.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.h=null;a&&this.init(a,b)}
Za(re,le);var se={2:"touch",3:"pen",4:"mouse"};
re.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(oc){a:{try{kc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:se[a.pointerType]||"";this.state=a.state;
this.h=a;a.defaultPrevented&&re.ma.preventDefault.call(this)};
re.prototype.stopPropagation=function(){re.ma.stopPropagation.call(this);this.h.stopPropagation?this.h.stopPropagation():this.h.cancelBubble=!0};
re.prototype.preventDefault=function(){re.ma.preventDefault.call(this);var a=this.h;a.preventDefault?a.preventDefault():a.returnValue=!1};var te="closure_listenable_"+(1E6*Math.random()|0);var ue=0;function ve(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.ub=e;this.key=++ue;this.hb=this.pb=!1}
function we(a){a.hb=!0;a.listener=null;a.proxy=null;a.src=null;a.ub=null}
;function xe(a){this.src=a;this.listeners={};this.g=0}
xe.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=ye(a,b,d,e);-1<g?(b=a[g],c||(b.pb=!1)):(b=new ve(b,this.src,f,!!d,e),b.pb=c,a.push(b));return b};
xe.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ye(e,b,c,d);return-1<b?(we(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.g--),!0):!1};
function ze(a,b){var c=b.type;c in a.listeners&&gb(a.listeners[c],b)&&(we(b),0==a.listeners[c].length&&(delete a.listeners[c],a.g--))}
function ye(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.hb&&f.listener==b&&f.capture==!!c&&f.ub==d)return e}return-1}
;var Ae="closure_lm_"+(1E6*Math.random()|0),Be={},Ce=0;function De(a,b,c,d,e){if(d&&d.once)Ee(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)De(a,b[f],c,d,e);else c=Fe(c),a&&a[te]?a.Ga(b,c,Qa(d)?!!d.capture:!!d,e):Ge(a,b,c,!1,d,e)}
function Ge(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,h=He(a);h||(a[Ae]=h=new xe(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ie();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)qe||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Je(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ce++}}
function Ie(){function a(c){return b.call(a.src,a.listener,c)}
var b=Ke;return a}
function Ee(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ee(a,b[f],c,d,e);else c=Fe(c),a&&a[te]?a.g.add(String(b),c,!0,Qa(d)?!!d.capture:!!d,e):Ge(a,b,c,!0,d,e)}
function Le(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Le(a,b[f],c,d,e);else(d=Qa(d)?!!d.capture:!!d,c=Fe(c),a&&a[te])?a.g.remove(String(b),c,d,e):a&&(a=He(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ye(b,c,d,e)),(c=-1<a?b[a]:null)&&Me(c))}
function Me(a){if("number"!==typeof a&&a&&!a.hb){var b=a.src;if(b&&b[te])ze(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Je(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ce--;(c=He(b))?(ze(c,a),0==c.g&&(c.src=null,b[Ae]=null)):we(a)}}}
function Je(a){return a in Be?Be[a]:Be[a]="on"+a}
function Ke(a,b){if(a.hb)a=!0;else{b=new re(b,this);var c=a.listener,d=a.ub||a.src;a.pb&&Me(a);a=c.call(d,b)}return a}
function He(a){a=a[Ae];return a instanceof xe?a:null}
var Ne="__closure_events_fn_"+(1E9*Math.random()>>>0);function Fe(a){if("function"===typeof a)return a;a[Ne]||(a[Ne]=function(b){return a.handleEvent(b)});
return a[Ne]}
;function Oe(){ke.call(this);this.g=new xe(this);this.kb=this;this.P=null}
Za(Oe,ke);Oe.prototype[te]=!0;Oe.prototype.addEventListener=function(a,b,c,d){De(this,a,b,c,d)};
Oe.prototype.removeEventListener=function(a,b,c,d){Le(this,a,b,c,d)};
function Pe(a,b){var c=a.P;if(c){var d=[];for(var e=1;c;c=c.P)d.push(c),++e}a=a.kb;c=b.type||b;"string"===typeof b?b=new le(b,a):b instanceof le?b.target=b.target||a:(e=b,b=new le(c,a),qb(b,e));e=!0;if(d)for(var f=d.length-1;!b.i&&0<=f;f--){var g=b.g=d[f];e=Qe(g,c,!0,b)&&e}b.i||(g=b.g=a,e=Qe(g,c,!0,b)&&e,b.i||(e=Qe(g,c,!1,b)&&e));if(d)for(f=0;!b.i&&f<d.length;f++)g=b.g=d[f],e=Qe(g,c,!1,b)&&e}
Oe.prototype.Ea=function(){Oe.ma.Ea.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,we(d[e]);delete a.listeners[c];a.g--}}this.P=null};
Oe.prototype.Ga=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function Qe(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.hb&&g.capture==c){var h=g.listener,k=g.ub||g.src;g.pb&&ze(a.g,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Re(a){Oe.call(this);var b=this;this.aa=this.l=0;this.fa=null!=a?a:{oa:function(e,f){return setTimeout(e,f)},
Na:function(e){clearTimeout(e)}};
var c,d;this.h=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.v=function(){return x(function(e){return w(e,Se(b),0)})};
window.addEventListener("offline",this.v);window.addEventListener("online",this.v);this.aa||Te(this)}
v(Re,Oe);function Ue(){var a=Ve;Re.g||(Re.g=new Re(a));return Re.g}
Re.prototype.dispose=function(){window.removeEventListener("offline",this.v);window.removeEventListener("online",this.v);this.fa.Na(this.aa);delete Re.g};
Re.prototype.ba=function(){return this.h};
function Te(a){a.aa=a.fa.oa(function(){var b;return x(function(c){if(1==c.g)return a.h?(null==(b=window.navigator)?0:b.onLine)?c.C(3):w(c,Se(a),3):w(c,Se(a),3);Te(a);c.g=0})},3E4)}
function Se(a,b){return a.G?a.G:a.G=new Promise(function(c){var d,e,f,g;return x(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,wa(h,2,3),d&&(a.l=a.fa.oa(function(){d.abort()},b||2E4)),w(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ba(h);a.G=void 0;a.l&&(a.fa.Na(a.l),a.l=0);g!==a.h&&(a.h=g,a.h?Pe(a,"networkstatus-online"):Pe(a,"networkstatus-offline"));c(g);Da(h);break;case 2:Aa(h),g=!1,h.C(3)}})})}
;function We(){this.data_=[];this.g=-1}
We.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.g=-1)};
We.prototype.get=function(a){return!!this.data_[a]};
function Xe(a){-1===a.g&&(a.g=fb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.g}
;function Ye(a){J.call(this,a)}
v(Ye,J);function Ze(a){J.call(this,a)}
v(Ze,J);function $e(a,b){return G(a,2,b)}
function af(a,b){return G(a,3,b)}
function bf(a,b){return G(a,4,b)}
function cf(a,b){return G(a,5,b)}
function df(a,b){return G(a,9,b)}
function ef(a,b){var c=a.J,d=F(c);Wc(d);if(null!=b){for(var e=!!b.length,f=0;f<b.length;f++){var g=b[f];ad(g,Ye);e=e&&!(F(g.J)&2)}f=F(b);g=f|1;g=(e?g|8:g&-9)|4;g!=f&&(b=Nc(b,g))}null==b&&(b=void 0);ed(c,d,10,b);return a}
function ff(a,b){return G(a,11,null==b?b:!!b)}
function gf(a,b){return G(a,1,b)}
function hf(a,b){return G(a,7,null==b?b:!!b)}
Ze.la=[10,6];var jf="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function kf(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function lf(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function mf(){var a=window;if(!lf(a))return null;var b=kf(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(jf).then(function(c){null!=b.uach||(b.uach=c);return c});
return b.uach_promise=a}
function nf(a){var b;return ff(ef(cf($e(gf(bf(hf(df(af(new Ze,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new Ye;d=G(d,1,c.brand);return G(d,2,c.version)}))||[]),a.wow64||!1)}
function of(){var a,b;return null!=(b=null==(a=mf())?void 0:a.then(function(c){return nf(c)}))?b:null}
;function pf(a,b){this.i=a;this.l=b;this.h=0;this.g=null}
pf.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function qf(a,b){a.l(b);100>a.h&&(a.h++,b.next=a.g,a.g=b)}
;var rf;function sf(){var a=z.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var e=Cd();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ya(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Tb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Tb;c.Tb=null;e()}};
return function(e){d.next={Tb:e};d=d.next;b.port2.postMessage(0)}}return function(e){z.setTimeout(e,0)}}
;function tf(){this.h=this.g=null}
tf.prototype.add=function(a,b){var c=uf.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};
tf.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.h=null),a.next=null);return a};
var uf=new pf(function(){return new vf},function(a){return a.reset()});
function vf(){this.next=this.scope=this.g=null}
vf.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
vf.prototype.reset=function(){this.next=this.scope=this.g=null};var wf,xf=!1,yf=new tf;function zf(a,b){wf||Af();xf||(wf(),xf=!0);yf.add(a,b)}
function Af(){if(z.Promise&&z.Promise.resolve){var a=z.Promise.resolve(void 0);wf=function(){a.then(Bf)}}else wf=function(){var b=Bf;
"function"!==typeof z.setImmediate||z.Window&&z.Window.prototype&&(Sb()||!E("Edge"))&&z.Window.prototype.setImmediate==z.setImmediate?(rf||(rf=sf()),rf(b)):z.setImmediate(b)}}
function Bf(){for(var a;a=yf.remove();){try{a.g.call(a.scope)}catch(b){ec(b)}qf(uf,a)}xf=!1}
;function Cf(a,b){this.g=a[z.Symbol.iterator]();this.h=b}
Cf.prototype[Symbol.iterator]=function(){return this};
Cf.prototype.next=function(){var a=this.g.next();return{value:a.done?void 0:this.h.call(void 0,a.value),done:a.done}};
function Df(a,b){return new Cf(a,b)}
;function Ef(){this.blockSize=-1}
;function Ff(){this.blockSize=-1;this.blockSize=64;this.g=[];this.s=[];this.v=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.l=this.h=0;this.reset()}
Za(Ff,Ef);Ff.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.l=this.h=0};
function Gf(a,b,c){c||(c=0);var d=a.v;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],h=a.g[3],k=a.g[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+h&4294967295;a.g[4]=a.g[4]+k&4294967295}
Ff.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.s,f=this.h;d<b;){if(0==f)for(;d<=c;)Gf(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Gf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Gf(this,e);f=0;break}}this.h=f;this.l+=b}};
Ff.prototype.digest=function(){var a=[],b=8*this.l;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.blockSize-(this.h-56));for(var c=this.blockSize-1;56<=c;c--)this.s[c]=b&255,b/=256;Gf(this,this.s);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function Hf(){}
Hf.prototype.next=function(){return If};
var If={done:!0,value:void 0};function Jf(a){return{value:a,done:!1}}
Hf.prototype.ga=function(){return this};function Kf(a){if(a instanceof Lf||a instanceof Mf||a instanceof Nf)return a;if("function"==typeof a.next)return new Lf(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Lf(function(){return a[Symbol.iterator]()});
if("function"==typeof a.ga)return new Lf(function(){return a.ga()});
throw Error("Not an iterator or iterable.");}
function Lf(a){this.h=a}
Lf.prototype.ga=function(){return new Mf(this.h())};
Lf.prototype[Symbol.iterator]=function(){return new Nf(this.h())};
Lf.prototype.g=function(){return new Nf(this.h())};
function Mf(a){this.h=a}
v(Mf,Hf);Mf.prototype.next=function(){return this.h.next()};
Mf.prototype[Symbol.iterator]=function(){return new Nf(this.h)};
Mf.prototype.g=function(){return new Nf(this.h)};
function Nf(a){Lf.call(this,function(){return a});
this.i=a}
v(Nf,Lf);Nf.prototype.next=function(){return this.i.next()};function Of(a,b){this.h={};this.g=[];this.i=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Of)for(c=Pf(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Pf(a){Qf(a);return a.g.concat()}
q=Of.prototype;q.has=function(a){return Rf(this.h,a)};
q.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Sf;Qf(this);for(var c,d=0;c=this.g[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Sf(a,b){return a===b}
q.clear=function(){this.h={};this.i=this.size=this.g.length=0};
q.remove=function(a){return this.delete(a)};
q.delete=function(a){return Rf(this.h,a)?(delete this.h[a],--this.size,this.i++,this.g.length>2*this.size&&Qf(this),!0):!1};
function Qf(a){if(a.size!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];Rf(a.h,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.size!=a.g.length){var e={};for(c=b=0;b<a.g.length;)d=a.g[b],Rf(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}}
q.get=function(a,b){return Rf(this.h,a)?this.h[a]:b};
q.set=function(a,b){Rf(this.h,a)||(this.size+=1,this.g.push(a),this.i++);this.h[a]=b};
q.forEach=function(a,b){for(var c=Pf(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
q.clone=function(){return new Of(this)};
q.keys=function(){return Kf(this.ga(!0)).g()};
q.values=function(){return Kf(this.ga(!1)).g()};
q.entries=function(){var a=this;return Df(this.keys(),function(b){return[b,a.get(b)]})};
q.ga=function(a){Qf(this);var b=0,c=this.i,d=this,e=new Hf;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)return If;var f=d.g[b++];return Jf(a?f:d.h[f])};
return e};
function Rf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var Tf=z.JSON.stringify;function Uf(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Vf(a){this.g=0;this.G=void 0;this.l=this.h=this.i=null;this.s=this.v=!1;if(a!=cb)try{var b=this;a.call(void 0,function(c){Wf(b,2,c)},function(c){Wf(b,3,c)})}catch(c){Wf(this,3,c)}}
function Xf(){this.next=this.context=this.h=this.i=this.g=null;this.l=!1}
Xf.prototype.reset=function(){this.context=this.h=this.i=this.g=null;this.l=!1};
var Yf=new pf(function(){return new Xf},function(a){a.reset()});
function Zf(a,b,c){var d=Yf.get();d.i=a;d.h=b;d.context=c;return d}
Vf.prototype.then=function(a,b,c){return $f(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Vf.prototype.$goog_Thenable=!0;Vf.prototype.cancel=function(a){if(0==this.g){var b=new ag(a);zf(function(){bg(this,b)},this)}};
function bg(a,b){if(0==a.g)if(a.i){var c=a.i;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.l||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?bg(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):cg(c),dg(c,e,3,b)))}a.i=null}else Wf(a,3,b)}
function eg(a,b){a.h||2!=a.g&&3!=a.g||fg(a);a.l?a.l.next=b:a.h=b;a.l=b}
function $f(a,b,c,d){var e=Zf(null,null,null);e.g=new Vf(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof ag?g(h):f(k)}catch(l){g(l)}}:g});
e.g.i=a;eg(a,e);return e.g}
Vf.prototype.aa=function(a){this.g=0;Wf(this,2,a)};
Vf.prototype.kb=function(a){this.g=0;Wf(this,3,a)};
function Wf(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.aa,f=a.kb;if(d instanceof Vf){eg(d,Zf(e||cb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Qa(d))try{var k=d.then;if("function"===typeof k){gg(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.G=c,a.g=b,a.i=null,fg(a),3!=b||c instanceof ag||hg(a,c))}}
function gg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function fg(a){a.v||(a.v=!0,zf(a.P,a))}
function cg(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.l=null);return b}
Vf.prototype.P=function(){for(var a;a=cg(this);)dg(this,a,this.g,this.G);this.v=!1};
function dg(a,b,c,d){if(3==c&&b.h&&!b.l)for(;a&&a.s;a=a.i)a.s=!1;if(b.g)b.g.i=null,ig(b,c,d);else try{b.l?b.i.call(b.context):ig(b,c,d)}catch(e){jg.call(null,e)}qf(Yf,b)}
function ig(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function hg(a,b){a.s=!0;zf(function(){a.s&&jg.call(null,b)})}
var jg=ec;function ag(a){ab.call(this,a)}
Za(ag,ab);ag.prototype.name="cancel";function K(a){ke.call(this);this.G=1;this.l=[];this.v=0;this.g=[];this.h={};this.P=!!a}
Za(K,ke);q=K.prototype;q.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.G;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.G=e+3;d.push(e);return e};
function kg(a,b,c){var d=lg;if(a=d.h[a]){var e=d.g;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.jb(a)}}
q.jb=function(a){var b=this.g[a];if(b){var c=this.h[b];0!=this.v?(this.l.push(a),this.g[a+1]=function(){}):(c&&gb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
q.Wa=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.P)for(e=0;e<c.length;e++){var g=c[e];mg(this.g[g+1],this.g[g+2],d)}else{this.v++;try{for(e=0,f=c.length;e<f&&!this.i;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.v--,0<this.l.length&&0==this.v)for(;c=this.l.pop();)this.jb(c)}}return 0!=e}return!1};
function mg(a,b,c){zf(function(){a.apply(b,c)})}
q.clear=function(a){if(a){var b=this.h[a];b&&(b.forEach(this.jb,this),delete this.h[a])}else this.g.length=0,this.h={}};
q.Ea=function(){K.ma.Ea.call(this);this.clear();this.l.length=0};function ng(a){this.g=a}
ng.prototype.set=function(a,b){void 0===b?this.g.remove(a):this.g.set(a,Tf(b))};
ng.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ng.prototype.remove=function(a){this.g.remove(a)};function og(a){this.g=a}
Za(og,ng);function pg(a){this.data=a}
function qg(a){return void 0===a||a instanceof pg?a:new pg(a)}
og.prototype.set=function(a,b){og.ma.set.call(this,a,qg(b))};
og.prototype.h=function(a){a=og.ma.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
og.prototype.get=function(a){if(a=this.h(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function rg(a){this.g=a}
Za(rg,og);rg.prototype.set=function(a,b,c){if(b=qg(b)){if(c){if(c<Date.now()){rg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}rg.ma.set.call(this,a,b)};
rg.prototype.h=function(a){var b=rg.ma.h.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())rg.prototype.remove.call(this,a);else return b}};function sg(){}
;function tg(){}
Za(tg,sg);tg.prototype[Symbol.iterator]=function(){return Kf(this.ga(!0)).g()};
tg.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function ug(a){this.g=a}
Za(ug,tg);q=ug.prototype;q.set=function(a,b){try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
q.get=function(a){a=this.g.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.g.removeItem(a)};
q.ga=function(a){var b=0,c=this.g,d=new Hf;d.next=function(){if(b>=c.length)return If;var e=c.key(b++);if(a)return Jf(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Jf(e)};
return d};
q.clear=function(){this.g.clear()};
q.key=function(a){return this.g.key(a)};function vg(){var a=null;try{a=window.localStorage||null}catch(b){}this.g=a}
Za(vg,ug);function wg(a,b){this.h=a;this.g=null;var c;if(c=mc)c=!(9<=Number(yc));if(c){xg||(xg=new Of);this.g=xg.get(a);this.g||(b?this.g=document.getElementById(b):(this.g=document.createElement("userdata"),this.g.addBehavior("#default#userData"),document.body.appendChild(this.g)),xg.set(a,this.g));try{this.g.load(this.h)}catch(d){this.g=null}}}
Za(wg,tg);var yg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},xg=null;function zg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return yg[b]})}
q=wg.prototype;q.set=function(a,b){this.g.setAttribute(zg(a),b);Ag(this)};
q.get=function(a){a=this.g.getAttribute(zg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.g.removeAttribute(zg(a));Ag(this)};
q.ga=function(a){var b=0,c=this.g.XMLDocument.documentElement.attributes,d=new Hf;d.next=function(){if(b>=c.length)return If;var e=c[b++];if(a)return Jf(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Jf(e)};
return d};
q.clear=function(){for(var a=this.g.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ag(this)};
function Ag(a){try{a.g.save(a.h)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Bg(a,b){this.h=a;this.g=b+"::"}
Za(Bg,tg);Bg.prototype.set=function(a,b){this.h.set(this.g+a,b)};
Bg.prototype.get=function(a){return this.h.get(this.g+a)};
Bg.prototype.remove=function(a){this.h.remove(this.g+a)};
Bg.prototype.ga=function(a){var b=this.h[Symbol.iterator](),c=this,d=new Hf;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return Jf(a?e.slice(c.g.length):c.h.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var L={},Cg="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;L.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
L.Nb=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Dg={Ma:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Xb:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Eg={Ma:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Xb:function(a){return[].concat.apply([],a)}};
L.jd=function(){Cg?(L.La=Uint8Array,L.na=Uint16Array,L.Cc=Int32Array,L.assign(L,Dg)):(L.La=Array,L.na=Array,L.Cc=Array,L.assign(L,Eg))};
L.jd();var Fg=!0;try{new Uint8Array(1)}catch(a){Fg=!1}
function Gg(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new L.La(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Hg={};Hg=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Ig={},Jg,Kg=[],Lg=0;256>Lg;Lg++){Jg=Lg;for(var Mg=0;8>Mg;Mg++)Jg=Jg&1?3988292384^Jg>>>1:Jg>>>1;Kg[Lg]=Jg}Ig=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Kg[(a^b[d])&255];return a^-1};var Ng={};Ng={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function jh(a){for(var b=a.length;0<=--b;)a[b]=0}
var kh=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],lh=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],mh=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],nh=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],oh=Array(576);jh(oh);var ph=Array(60);jh(ph);var qh=Array(512);jh(qh);var rh=Array(256);jh(rh);var sh=Array(29);jh(sh);var th=Array(30);jh(th);function uh(a,b,c,d,e){this.vc=a;this.Pc=b;this.Oc=c;this.Mc=d;this.ed=e;this.ac=a&&a.length}
var vh,wh,xh;function yh(a,b){this.Vb=a;this.Ta=0;this.Aa=b}
function zh(a,b){a.K[a.pending++]=b&255;a.K[a.pending++]=b>>>8&255}
function N(a,b,c){a.N>16-c?(a.U|=b<<a.N&65535,zh(a,a.U),a.U=b>>16-a.N,a.N+=c-16):(a.U|=b<<a.N&65535,a.N+=c)}
function Ah(a,b,c){N(a,c[2*b],c[2*b+1])}
function Bh(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Ch(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Bh(d[e]++,e))}
function Dh(a){var b;for(b=0;286>b;b++)a.W[2*b]=0;for(b=0;30>b;b++)a.Fa[2*b]=0;for(b=0;19>b;b++)a.R[2*b]=0;a.W[512]=1;a.ta=a.Xa=0;a.ca=a.matches=0}
function Eh(a){8<a.N?zh(a,a.U):0<a.N&&(a.K[a.pending++]=a.U);a.U=0;a.N=0}
function Fh(a,b,c){Eh(a);zh(a,c);zh(a,~c);L.Ma(a.K,a.window,b,c,a.pending);a.pending+=c}
function Gh(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Hh(a,b,c){for(var d=a.L[c],e=c<<1;e<=a.sa;){e<a.sa&&Gh(b,a.L[e+1],a.L[e],a.depth)&&e++;if(Gh(b,d,a.L[e],a.depth))break;a.L[c]=a.L[e];c=e;e<<=1}a.L[c]=d}
function Ih(a,b,c){var d=0;if(0!==a.ca){do{var e=a.K[a.ab+2*d]<<8|a.K[a.ab+2*d+1];var f=a.K[a.Fb+d];d++;if(0===e)Ah(a,f,b);else{var g=rh[f];Ah(a,g+256+1,b);var h=kh[g];0!==h&&(f-=sh[g],N(a,f,h));e--;g=256>e?qh[e]:qh[256+(e>>>7)];Ah(a,g,c);h=lh[g];0!==h&&(e-=th[g],N(a,e,h))}}while(d<a.ca)}Ah(a,256,b)}
function Jh(a,b){var c=b.Vb,d=b.Aa.vc,e=b.Aa.ac,f=b.Aa.Mc,g,h=-1;a.sa=0;a.Qa=573;for(g=0;g<f;g++)0!==c[2*g]?(a.L[++a.sa]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.sa;){var k=a.L[++a.sa]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.ta--;e&&(a.Xa-=d[2*k+1])}b.Ta=h;for(g=a.sa>>1;1<=g;g--)Hh(a,c,g);k=f;do g=a.L[1],a.L[1]=a.L[a.sa--],Hh(a,c,1),d=a.L[1],a.L[--a.Qa]=g,a.L[--a.Qa]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.L[1]=k++,Hh(a,c,1);while(2<=a.sa);a.L[--a.Qa]=
a.L[1];g=b.Vb;k=b.Ta;d=b.Aa.vc;e=b.Aa.ac;f=b.Aa.Pc;var l=b.Aa.Oc,m=b.Aa.ed,n,r=0;for(n=0;15>=n;n++)a.pa[n]=0;g[2*a.L[a.Qa]+1]=0;for(b=a.Qa+1;573>b;b++){var p=a.L[b];n=g[2*g[2*p+1]+1]+1;n>m&&(n=m,r++);g[2*p+1]=n;if(!(p>k)){a.pa[n]++;var y=0;p>=l&&(y=f[p-l]);var A=g[2*p];a.ta+=A*(n+y);e&&(a.Xa+=A*(d[2*p+1]+y))}}if(0!==r){do{for(n=m-1;0===a.pa[n];)n--;a.pa[n]--;a.pa[n+1]+=2;a.pa[m]--;r-=2}while(0<r);for(n=m;0!==n;n--)for(p=a.pa[n];0!==p;)d=a.L[--b],d>k||(g[2*d+1]!==n&&(a.ta+=(n-g[2*d+1])*g[2*d],g[2*
d+1]=n),p--)}Ch(c,h,a.pa)}
function Kh(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.R[2*l]+=g:0!==l?(l!==e&&a.R[2*l]++,a.R[32]++):10>=g?a.R[34]++:a.R[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Lh(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Ah(a,l,a.R);while(0!==--g)}else 0!==l?(l!==e&&(Ah(a,l,a.R),g--),Ah(a,16,a.R),N(a,g-3,2)):10>=g?(Ah(a,17,a.R),N(a,g-3,3)):(Ah(a,18,a.R),N(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Mh(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.W[2*c])return 0;if(0!==a.W[18]||0!==a.W[20]||0!==a.W[26])return 1;for(c=32;256>c;c++)if(0!==a.W[2*c])return 1;return 0}
var Nh=!1;function Oh(a,b,c){a.K[a.ab+2*a.ca]=b>>>8&255;a.K[a.ab+2*a.ca+1]=b&255;a.K[a.Fb+a.ca]=c&255;a.ca++;0===b?a.W[2*c]++:(a.matches++,b--,a.W[2*(rh[c]+256+1)]++,a.Fa[2*(256>b?qh[b]:qh[256+(b>>>7)])]++);return a.ca===a.eb-1}
;function Ph(a,b){a.msg=Ng[b];return b}
function Qh(a){for(var b=a.length;0<=--b;)a[b]=0}
function Rh(a){var b=a.state,c=b.pending;c>a.D&&(c=a.D);0!==c&&(L.Ma(a.fb,b.K,b.gb,c,a.Ua),a.Ua+=c,b.gb+=c,a.Ob+=c,a.D-=c,b.pending-=c,0===b.pending&&(b.gb=0))}
function P(a,b){var c=0<=a.Y?a.Y:-1,d=a.j-a.Y,e=0;if(0<a.level){2===a.A.Cb&&(a.A.Cb=Mh(a));Jh(a,a.wb);Jh(a,a.sb);Kh(a,a.W,a.wb.Ta);Kh(a,a.Fa,a.sb.Ta);Jh(a,a.Rb);for(e=18;3<=e&&0===a.R[2*nh[e]+1];e--);a.ta+=3*(e+1)+14;var f=a.ta+3+7>>>3;var g=a.Xa+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)N(a,b?1:0,3),Fh(a,c,d);else if(4===a.strategy||g===f)N(a,2+(b?1:0),3),Ih(a,oh,ph);else{N(a,4+(b?1:0),3);c=a.wb.Ta+1;d=a.sb.Ta+1;e+=1;N(a,c-257,5);N(a,d-1,5);N(a,e-4,4);for(f=0;f<e;f++)N(a,a.R[2*nh[f]+1],
3);Lh(a,a.W,c-1);Lh(a,a.Fa,d-1);Ih(a,a.W,a.Fa)}Dh(a);b&&Eh(a);a.Y=a.j;Rh(a.A)}
function R(a,b){a.K[a.pending++]=b}
function Sh(a,b){a.K[a.pending++]=b>>>8&255;a.K[a.pending++]=b&255}
function Th(a,b){var c=a.jc,d=a.j,e=a.Z,f=a.lc,g=a.j>a.S-262?a.j-(a.S-262):0,h=a.window,k=a.Ba,l=a.ka,m=a.j+258,n=h[d+e-1],r=h[d+e];a.Z>=a.Zb&&(c>>=2);f>a.m&&(f=a.m);do{var p=b;if(h[p+e]===r&&h[p+e-1]===n&&h[p]===h[d]&&h[++p]===h[d+1]){d+=2;for(p++;h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&d<m;);p=258-(m-d);d=m-258;if(p>e){a.Sa=b;e=p;if(p>=f)break;n=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.m?e:a.m}
function Uh(a){var b=a.S,c;do{var d=a.yc-a.m-a.j;if(a.j>=b+(b-262)){L.Ma(a.window,a.window,b,b,0);a.Sa-=b;a.j-=b;a.Y-=b;var e=c=a.vb;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.ka[--e],a.ka[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.A.T)break;e=a.A;c=a.window;f=a.j+a.m;var g=e.T;g>d&&(g=d);0===g?c=0:(e.T-=g,L.Ma(c,e.input,e.Ja,g,f),1===e.state.wrap?e.u=Hg(e.u,c,g,f):2===e.state.wrap&&(e.u=Ig(e.u,c,g,f)),e.Ja+=g,e.Ka+=g,c=g);a.m+=c;if(3<=a.m+a.X)for(d=a.j-a.X,a.B=a.window[d],a.B=
(a.B<<a.ra^a.window[d+1])&a.qa;a.X&&!(a.B=(a.B<<a.ra^a.window[d+3-1])&a.qa,a.ka[d&a.Ba]=a.head[a.B],a.head[a.B]=d,d++,a.X--,3>a.m+a.X););}while(262>a.m&&0!==a.A.T)}
function Vh(a,b){for(var c;;){if(262>a.m){Uh(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.B=(a.B<<a.ra^a.window[a.j+3-1])&a.qa,c=a.ka[a.j&a.Ba]=a.head[a.B],a.head[a.B]=a.j);0!==c&&a.j-c<=a.S-262&&(a.F=Th(a,c));if(3<=a.F)if(c=Oh(a,a.j-a.Sa,a.F-3),a.m-=a.F,a.F<=a.Hb&&3<=a.m){a.F--;do a.j++,a.B=(a.B<<a.ra^a.window[a.j+3-1])&a.qa,a.ka[a.j&a.Ba]=a.head[a.B],a.head[a.B]=a.j;while(0!==--a.F);a.j++}else a.j+=a.F,a.F=0,a.B=a.window[a.j],a.B=(a.B<<a.ra^a.window[a.j+1])&a.qa;else c=Oh(a,0,a.window[a.j]),
a.m--,a.j++;if(c&&(P(a,!1),0===a.A.D))return 1}a.X=2>a.j?a.j:2;return 4===b?(P(a,!0),0===a.A.D?3:4):a.ca&&(P(a,!1),0===a.A.D)?1:2}
function Wh(a,b){for(var c,d;;){if(262>a.m){Uh(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.B=(a.B<<a.ra^a.window[a.j+3-1])&a.qa,c=a.ka[a.j&a.Ba]=a.head[a.B],a.head[a.B]=a.j);a.Z=a.F;a.oc=a.Sa;a.F=2;0!==c&&a.Z<a.Hb&&a.j-c<=a.S-262&&(a.F=Th(a,c),5>=a.F&&(1===a.strategy||3===a.F&&4096<a.j-a.Sa)&&(a.F=2));if(3<=a.Z&&a.F<=a.Z){d=a.j+a.m-3;c=Oh(a,a.j-1-a.oc,a.Z-3);a.m-=a.Z-1;a.Z-=2;do++a.j<=d&&(a.B=(a.B<<a.ra^a.window[a.j+3-1])&a.qa,a.ka[a.j&a.Ba]=a.head[a.B],a.head[a.B]=a.j);while(0!==
--a.Z);a.Ha=0;a.F=2;a.j++;if(c&&(P(a,!1),0===a.A.D))return 1}else if(a.Ha){if((c=Oh(a,0,a.window[a.j-1]))&&P(a,!1),a.j++,a.m--,0===a.A.D)return 1}else a.Ha=1,a.j++,a.m--}a.Ha&&(Oh(a,0,a.window[a.j-1]),a.Ha=0);a.X=2>a.j?a.j:2;return 4===b?(P(a,!0),0===a.A.D?3:4):a.ca&&(P(a,!1),0===a.A.D)?1:2}
function Xh(a,b){for(var c,d,e,f=a.window;;){if(258>=a.m){Uh(a);if(258>=a.m&&0===b)return 1;if(0===a.m)break}a.F=0;if(3<=a.m&&0<a.j&&(d=a.j-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.j+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.F=258-(e-d);a.F>a.m&&(a.F=a.m)}3<=a.F?(c=Oh(a,1,a.F-3),a.m-=a.F,a.j+=a.F,a.F=0):(c=Oh(a,0,a.window[a.j]),a.m--,a.j++);if(c&&(P(a,!1),0===a.A.D))return 1}a.X=0;return 4===b?(P(a,!0),0===a.A.D?3:4):a.ca&&
(P(a,!1),0===a.A.D)?1:2}
function Yh(a,b){for(var c;;){if(0===a.m&&(Uh(a),0===a.m)){if(0===b)return 1;break}a.F=0;c=Oh(a,0,a.window[a.j]);a.m--;a.j++;if(c&&(P(a,!1),0===a.A.D))return 1}a.X=0;return 4===b?(P(a,!0),0===a.A.D?3:4):a.ca&&(P(a,!1),0===a.A.D)?1:2}
function Zh(a,b,c,d,e){this.Sc=a;this.dd=b;this.gd=c;this.cd=d;this.Qc=e}
var $h;$h=[new Zh(0,0,0,0,function(a,b){var c=65535;for(c>a.da-5&&(c=a.da-5);;){if(1>=a.m){Uh(a);if(0===a.m&&0===b)return 1;if(0===a.m)break}a.j+=a.m;a.m=0;var d=a.Y+c;if(0===a.j||a.j>=d)if(a.m=a.j-d,a.j=d,P(a,!1),0===a.A.D)return 1;if(a.j-a.Y>=a.S-262&&(P(a,!1),0===a.A.D))return 1}a.X=0;if(4===b)return P(a,!0),0===a.A.D?3:4;a.j>a.Y&&P(a,!1);return 1}),
new Zh(4,4,8,4,Vh),new Zh(4,5,16,8,Vh),new Zh(4,6,32,32,Vh),new Zh(4,4,16,16,Wh),new Zh(8,16,32,32,Wh),new Zh(8,16,128,128,Wh),new Zh(8,32,128,256,Wh),new Zh(32,128,258,1024,Wh),new Zh(32,258,258,4096,Wh)];
function ai(){this.A=null;this.status=0;this.K=null;this.wrap=this.pending=this.gb=this.da=0;this.o=null;this.ea=0;this.method=8;this.Ra=-1;this.Ba=this.Pb=this.S=0;this.window=null;this.yc=0;this.head=this.ka=null;this.lc=this.Zb=this.strategy=this.level=this.Hb=this.jc=this.Z=this.m=this.Sa=this.j=this.Ha=this.oc=this.F=this.Y=this.ra=this.qa=this.Db=this.vb=this.B=0;this.W=new L.na(1146);this.Fa=new L.na(122);this.R=new L.na(78);Qh(this.W);Qh(this.Fa);Qh(this.R);this.Rb=this.sb=this.wb=null;this.pa=
new L.na(16);this.L=new L.na(573);Qh(this.L);this.Qa=this.sa=0;this.depth=new L.na(573);Qh(this.depth);this.N=this.U=this.X=this.matches=this.Xa=this.ta=this.ab=this.ca=this.eb=this.Fb=0}
function bi(a,b){if(!a||!a.state||5<b||0>b)return a?Ph(a,-2):-2;var c=a.state;if(!a.fb||!a.input&&0!==a.T||666===c.status&&4!==b)return Ph(a,0===a.D?-5:-2);c.A=a;var d=c.Ra;c.Ra=b;if(42===c.status)if(2===c.wrap)a.u=0,R(c,31),R(c,139),R(c,8),c.o?(R(c,(c.o.text?1:0)+(c.o.ya?2:0)+(c.o.xa?4:0)+(c.o.name?8:0)+(c.o.comment?16:0)),R(c,c.o.time&255),R(c,c.o.time>>8&255),R(c,c.o.time>>16&255),R(c,c.o.time>>24&255),R(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),R(c,c.o.Yd&255),c.o.xa&&c.o.xa.length&&(R(c,
c.o.xa.length&255),R(c,c.o.xa.length>>8&255)),c.o.ya&&(a.u=Ig(a.u,c.K,c.pending,0)),c.ea=0,c.status=69):(R(c,0),R(c,0),R(c,0),R(c,0),R(c,0),R(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),R(c,3),c.status=113);else{var e=8+(c.Pb-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.j&&(e|=32);c.status=113;Sh(c,e+(31-e%31));0!==c.j&&(Sh(c,a.u>>>16),Sh(c,a.u&65535));a.u=1}if(69===c.status)if(c.o.xa){for(e=c.pending;c.ea<(c.o.xa.length&65535)&&(c.pending!==c.da||(c.o.ya&&c.pending>
e&&(a.u=Ig(a.u,c.K,c.pending-e,e)),Rh(a),e=c.pending,c.pending!==c.da));)R(c,c.o.xa[c.ea]&255),c.ea++;c.o.ya&&c.pending>e&&(a.u=Ig(a.u,c.K,c.pending-e,e));c.ea===c.o.xa.length&&(c.ea=0,c.status=73)}else c.status=73;if(73===c.status)if(c.o.name){e=c.pending;do{if(c.pending===c.da&&(c.o.ya&&c.pending>e&&(a.u=Ig(a.u,c.K,c.pending-e,e)),Rh(a),e=c.pending,c.pending===c.da)){var f=1;break}f=c.ea<c.o.name.length?c.o.name.charCodeAt(c.ea++)&255:0;R(c,f)}while(0!==f);c.o.ya&&c.pending>e&&(a.u=Ig(a.u,c.K,c.pending-
e,e));0===f&&(c.ea=0,c.status=91)}else c.status=91;if(91===c.status)if(c.o.comment){e=c.pending;do{if(c.pending===c.da&&(c.o.ya&&c.pending>e&&(a.u=Ig(a.u,c.K,c.pending-e,e)),Rh(a),e=c.pending,c.pending===c.da)){f=1;break}f=c.ea<c.o.comment.length?c.o.comment.charCodeAt(c.ea++)&255:0;R(c,f)}while(0!==f);c.o.ya&&c.pending>e&&(a.u=Ig(a.u,c.K,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.o.ya?(c.pending+2>c.da&&Rh(a),c.pending+2<=c.da&&(R(c,a.u&255),R(c,a.u>>8&255),a.u=0,
c.status=113)):c.status=113);if(0!==c.pending){if(Rh(a),0===a.D)return c.Ra=-1,0}else if(0===a.T&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Ph(a,-5);if(666===c.status&&0!==a.T)return Ph(a,-5);if(0!==a.T||0!==c.m||0!==b&&666!==c.status){d=2===c.strategy?Yh(c,b):3===c.strategy?Xh(c,b):$h[c.level].Qc(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.D&&(c.Ra=-1),0;if(2===d&&(1===b?(N(c,2,3),Ah(c,256,oh),16===c.N?(zh(c,c.U),c.U=0,c.N=0):8<=c.N&&(c.K[c.pending++]=c.U&255,c.U>>=8,c.N-=
8)):5!==b&&(N(c,0,3),Fh(c,0,0),3===b&&(Qh(c.head),0===c.m&&(c.j=0,c.Y=0,c.X=0))),Rh(a),0===a.D))return c.Ra=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(R(c,a.u&255),R(c,a.u>>8&255),R(c,a.u>>16&255),R(c,a.u>>24&255),R(c,a.Ka&255),R(c,a.Ka>>8&255),R(c,a.Ka>>16&255),R(c,a.Ka>>24&255)):(Sh(c,a.u>>>16),Sh(c,a.u&65535));Rh(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var ci={};ci=function(){this.input=null;this.Ka=this.T=this.Ja=0;this.fb=null;this.Ob=this.D=this.Ua=0;this.msg="";this.state=null;this.Cb=2;this.u=0};var di=Object.prototype.toString;
function ei(a){if(!(this instanceof ei))return new ei(a);a=this.options=L.assign({level:-1,method:8,chunkSize:16384,Ca:15,fd:8,strategy:0,xc:""},a||{});a.raw&&0<a.Ca?a.Ca=-a.Ca:a.Tc&&0<a.Ca&&16>a.Ca&&(a.Ca+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.A=new ci;this.A.D=0;var b=this.A;var c=a.level,d=a.method,e=a.Ca,f=a.fd,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=Ph(b,-2);else{8===e&&(e=9);var k=new ai;
b.state=k;k.A=b;k.wrap=h;k.o=null;k.Pb=e;k.S=1<<k.Pb;k.Ba=k.S-1;k.Db=f+7;k.vb=1<<k.Db;k.qa=k.vb-1;k.ra=~~((k.Db+3-1)/3);k.window=new L.La(2*k.S);k.head=new L.na(k.vb);k.ka=new L.na(k.S);k.eb=1<<f+6;k.da=4*k.eb;k.K=new L.La(k.da);k.ab=1*k.eb;k.Fb=3*k.eb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.Ka=b.Ob=0;b.Cb=2;c=b.state;c.pending=0;c.gb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.u=2===c.wrap?0:1;c.Ra=0;if(!Nh){d=Array(16);for(f=g=0;28>f;f++)for(sh[f]=g,e=0;e<1<<kh[f];e++)rh[g++]=
f;rh[g-1]=f;for(f=g=0;16>f;f++)for(th[f]=g,e=0;e<1<<lh[f];e++)qh[g++]=f;for(g>>=7;30>f;f++)for(th[f]=g<<7,e=0;e<1<<lh[f]-7;e++)qh[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)oh[2*e+1]=8,e++,d[8]++;for(;255>=e;)oh[2*e+1]=9,e++,d[9]++;for(;279>=e;)oh[2*e+1]=7,e++,d[7]++;for(;287>=e;)oh[2*e+1]=8,e++,d[8]++;Ch(oh,287,d);for(e=0;30>e;e++)ph[2*e+1]=5,ph[2*e]=Bh(e,5);vh=new uh(oh,kh,257,286,15);wh=new uh(ph,lh,0,30,15);xh=new uh([],mh,0,19,7);Nh=!0}c.wb=new yh(c.W,vh);c.sb=new yh(c.Fa,wh);c.Rb=new yh(c.R,
xh);c.U=0;c.N=0;Dh(c);c=0}else c=Ph(b,-2);0===c&&(b=b.state,b.yc=2*b.S,Qh(b.head),b.Hb=$h[b.level].dd,b.Zb=$h[b.level].Sc,b.lc=$h[b.level].gd,b.jc=$h[b.level].cd,b.j=0,b.Y=0,b.m=0,b.X=0,b.F=b.Z=2,b.Ha=0,b.B=0);b=c}}else b=-2;if(0!==b)throw Error(Ng[b]);a.header&&(b=this.A)&&b.state&&2===b.state.wrap&&(b.state.o=a.header);if(a.bb){var l;"string"===typeof a.bb?l=Gg(a.bb):"[object ArrayBuffer]"===di.call(a.bb)?l=new Uint8Array(a.bb):l=a.bb;a=this.A;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,
2===b||1===b&&42!==l.status||l.m)b=-2;else{1===b&&(a.u=Hg(a.u,f,g,0));l.wrap=0;g>=l.S&&(0===b&&(Qh(l.head),l.j=0,l.Y=0,l.X=0),c=new L.La(l.S),L.Ma(c,f,g-l.S,l.S,0),f=c,g=l.S);c=a.T;d=a.Ja;e=a.input;a.T=g;a.Ja=0;a.input=f;for(Uh(l);3<=l.m;){f=l.j;g=l.m-2;do l.B=(l.B<<l.ra^l.window[f+3-1])&l.qa,l.ka[f&l.Ba]=l.head[l.B],l.head[l.B]=f,f++;while(--g);l.j=f;l.m=2;Uh(l)}l.j+=l.m;l.Y=l.j;l.X=l.m;l.m=0;l.F=l.Z=2;l.Ha=0;a.Ja=d;a.input=e;a.T=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(Ng[b]);this.Pd=!0}}
ei.prototype.push=function(a,b){var c=this.A,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=Gg(a):"[object ArrayBuffer]"===di.call(a)?c.input=new Uint8Array(a):c.input=a;c.Ja=0;c.T=c.input.length;do{0===c.D&&(c.fb=new L.La(d),c.Ua=0,c.D=d);a=bi(c,e);if(1!==a&&0!==a)return fi(this,a),this.ended=!0,!1;if(0===c.D||0===c.T&&(4===e||2===e))if("string"===this.options.xc){var f=L.Nb(c.fb,c.Ua);b=f;f=f.length;if(65537>f&&(b.subarray&&Fg||!b.subarray))b=
String.fromCharCode.apply(null,L.Nb(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=L.Nb(c.fb,c.Ua),this.chunks.push(b)}while((0<c.T||0===c.D)&&1!==a);if(4===e)return(c=this.A)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=Ph(c,-2):(c.state=null,a=113===d?Ph(c,-3):0)):a=-2,fi(this,a),this.ended=!0,0===a;2===e&&(fi(this,0),c.D=0);return!0};
function fi(a,b){0===b&&(a.result="string"===a.options.xc?a.chunks.join(""):L.Xb(a.chunks));a.chunks=[];a.err=b;a.msg=a.A.msg}
;function gi(a){this.name=a}
;var hi=new gi("rawColdConfigGroup");var ii=new gi("rawHotConfigGroup");function ji(a){J.call(this,a)}
v(ji,J);function ki(a){J.call(this,a)}
v(ki,J);function li(a){J.call(this,a)}
v(li,J);li.la=[2];function mi(a){J.call(this,a)}
v(mi,J);mi.prototype.getPlayerType=function(){var a=0;a=void 0===a?0:a;var b=cd(this,36);b=null==b?b:b;return null==b?a:b};
mi.prototype.setHomeGroupInfo=function(a){return I(this,li,81,a)};
mi.la=[9,66,24,32,86,100,101];function ni(a){J.call(this,a)}
v(ni,J);ni.prototype.getKey=function(){return nd(this,1)};
ni.prototype.ha=function(){return nd(this,id(this,oi,2))};
var oi=[2,3,4,5,6];function pi(a){J.call(this,a)}
v(pi,J);pi.la=[15,26,28];function qi(a){J.call(this,a)}
v(qi,J);qi.la=[5];function ri(a){J.call(this,a)}
v(ri,J);function si(a){J.call(this,a)}
v(si,J);si.prototype.setSafetyMode=function(a){return G(this,5,a)};
si.la=[12];function ti(a){J.call(this,a)}
v(ti,J);ti.la=[12];var ui={Od:"WEB_DISPLAY_MODE_UNKNOWN",Kd:"WEB_DISPLAY_MODE_BROWSER",Md:"WEB_DISPLAY_MODE_MINIMAL_UI",Nd:"WEB_DISPLAY_MODE_STANDALONE",Ld:"WEB_DISPLAY_MODE_FULLSCREEN"};function vi(a){J.call(this,a)}
v(vi,J);vi.prototype.getKey=function(){return nd(this,1)};
vi.prototype.ha=function(){return nd(this,2)};function wi(a){J.call(this,a)}
v(wi,J);wi.la=[4,5];function xi(a){J.call(this,a)}
v(xi,J);function yi(a){J.call(this,a)}
v(yi,J);var zi=[2,3,4,5];function Ai(a){J.call(this,a)}
v(Ai,J);function Bi(a){J.call(this,a)}
v(Bi,J);function Ci(a){J.call(this,a)}
v(Ci,J);function Di(a){J.call(this,a)}
v(Di,J);Di.la=[10,17];function Ei(a){J.call(this,a)}
v(Ei,J);function Fi(a){J.call(this,a)}
v(Fi,J);function Gi(a){J.call(this,a)}
v(Gi,J);function Hi(a){J.call(this,a,475)}
v(Hi,J);
var Ii=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474];function Ji(a){J.call(this,a)}
v(Ji,J);function Ki(a){J.call(this,a)}
v(Ki,J);Ki.prototype.getPlaylistId=function(){return od(this,2)};
var pd=[1,2];function Li(a){J.call(this,a)}
v(Li,J);Li.la=[3];var Mi=z.window,Ni,Oi,Pi=(null==Mi?void 0:null==(Ni=Mi.yt)?void 0:Ni.config_)||(null==Mi?void 0:null==(Oi=Mi.ytcfg)?void 0:Oi.data_)||{};C("yt.config_",Pi);function Qi(){var a=arguments;1<a.length?Pi[a[0]]=a[1]:1===a.length&&Object.assign(Pi,a[0])}
function S(a,b){return a in Pi?Pi[a]:b}
function Ri(){return S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function Si(){var a=Pi.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var Ti=[];function Ui(a){Ti.forEach(function(b){return b(a)})}
function Vi(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Wi(b)}}:a}
function Wi(a){var b=B("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Qi("ERRORS",b));Ui(a)}
function Xi(a,b,c,d,e){var f=B("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=S("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Qi("ERRORS",f))}
;function U(a){a=Yi(a);return"string"===typeof a&&"false"===a?!1:!!a}
function W(a,b){a=Yi(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Yi(a){var b=S("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:S("EXPERIMENT_FLAGS",{})[a]}
function Zi(){for(var a=[],b=S("EXPERIMENTS_FORCED_FLAGS",{}),c=u(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=S("EXPERIMENT_FLAGS",{});var e=u(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var $i=0;C("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++$i});var aj={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function bj(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in aj||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
bj.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
bj.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
bj.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var mb=z.ytEventsEventsListeners||{};C("ytEventsEventsListeners",mb);var cj=z.ytEventsEventsCounter||{count:0};C("ytEventsEventsCounter",cj);
function dj(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return lb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Qa(e[4])&&Qa(d)&&nb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function ej(a){a&&("string"==typeof a&&(a=[a]),D(a,function(b){if(b in mb){var c=mb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?fj()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete mb[b]}}))}
var fj=db(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function gj(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=dj(a,b,c,d);if(!e){e=++cj.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new bj(h);if(!Dd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new bj(h);
h.currentTarget=a;return c.call(a,h)};
g=Vi(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),fj()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);mb[e]=[a,b,c,g,d]}}}
;function hj(a,b){"function"===typeof a&&(a=Vi(a));return window.setTimeout(a,b)}
function ij(a){"function"===typeof a&&(a=Vi(a));return window.setInterval(a,250)}
;var jj=/^[\w.]*$/,kj={q:!0,search_query:!0};function lj(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=mj(f[0]||""),h=mj(f[1]||"");g in c?Array.isArray(c[g])?jb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(n){var k=n,l=f[0],m=String(lj);k.args=[{key:l,value:f[1],query:a,method:nj==m?"unchanged":m}];kj.hasOwnProperty(l)||Xi(k)}}return c}
var nj=String(lj);function oj(a){var b=[];kb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];D(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function pj(a){"?"==a.charAt(0)&&(a=a.substr(1));return lj(a,"&")}
function qj(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=pj(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=bc(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function rj(a){if(!b)var b=window.location.href;var c=a.match(Xb)[1]||null,d=Zb(a);c&&d?(a=a.match(Xb),b=b.match(Xb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Zb(b)==d&&(Number(b.match(Xb)[4]||null)||null)==(Number(a.match(Xb)[4]||null)||null):!0;return a}
function mj(a){return a&&a.match(jj)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function sj(a){var b=tj;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Wd;e.flash="0";a:{try{var f=b.g.top.location.href}catch(aa){f=2;break a}f=f?f===b.h.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Ad:g;try{var h=g.history.length}catch(aa){h=0}e.u_his=h;var k;e.u_h=null==(k=Ad.screen)?void 0:k.height;var l;e.u_w=null==(l=Ad.screen)?void 0:l.width;var m;e.u_ah=null==(m=Ad.screen)?void 0:m.availHeight;var n;e.u_aw=
null==(n=Ad.screen)?void 0:n.availWidth;var r;e.u_cd=null==(r=Ad.screen)?void 0:r.colorDepth}catch(aa){}h=b.g;try{var p=h.screenX;var y=h.screenY}catch(aa){}try{var A=h.outerWidth;var H=h.outerHeight}catch(aa){}try{var O=h.innerWidth;var T=h.innerHeight}catch(aa){}try{var Q=h.screenLeft;var ya=h.screenTop}catch(aa){}try{O=h.innerWidth,T=h.innerHeight}catch(aa){}try{var Ic=h.screen.availWidth;var La=h.screen.availTop}catch(aa){}p=[Q,ya,p,y,Ic,La,A,H,O,T];y=b.g.top;try{var za=(y||window).document,ba=
"CSS1Compat"==za.compatMode?za.documentElement:za.body;var ja=(new Bd(ba.clientWidth,ba.clientHeight)).round()}catch(aa){ja=new Bd(-12245933,-12245933)}za=ja;ja={};var ka=void 0===ka?z:ka;ba=new We;"SVGElement"in ka&&"createElementNS"in ka.document&&ba.set(0);y=Ud();y["allow-top-navigation-by-user-activation"]&&ba.set(1);y["allow-popups-to-escape-sandbox"]&&ba.set(2);ka.crypto&&ka.crypto.subtle&&ba.set(3);"TextDecoder"in ka&&"TextEncoder"in ka&&ba.set(4);ka=Xe(ba);ja.bc=ka;ja.bih=za.height;ja.biw=
za.width;ja.brdim=p.join();b=b.h;b=(ja.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ja.wgl=!!Ad.WebGLRenderingContext,ja);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var tj=new function(){var a=window.document;this.g=window;this.h=a};
C("yt.ads_.signals_.getAdSignalsString",function(a){return oj(sj(a))});Date.now();var uj="XMLHttpRequest"in z?function(){return new XMLHttpRequest}:null;
function vj(){if(!uj)return null;var a=uj();return"open"in a?a:null}
;var wj={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},xj="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia(Yd)),yj=!1;
function zj(a,b){b=void 0===b?{}:b;var c=rj(a),d=U("web_ajax_ignore_global_headers_if_set"),e;for(e in wj){var f=S(wj[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=S("VISITOR_DATA"));!f||!c&&Zb(a)||d&&void 0!==b[e]||(!U("move_vss_away_from_login_info_cookie")||"TVHTML5_UNPLUGGED"===S("INNERTUBE_CLIENT_NAME"))&&g||(b[e]=f)}U("move_vss_away_from_login_info_cookie")&&c&&S("SESSION_INDEX")&&"TVHTML5_UNPLUGGED"!==S("INNERTUBE_CLIENT_NAME")&&(b["X-Yt-Auth-Test"]="test");
"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Zb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Zb(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&Zb(a)||(b["X-YouTube-Ad-Signals"]=oj(sj()));return b}
function Aj(a){var b=window.location.search,c=Zb(a);U("debug_handle_relative_url_for_query_forward_killswitch")||!c&&rj(a)&&(c=document.location.hostname);var d=Yb(a.match(Xb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=pj(b),f={};D(xj,function(g){e[g]&&(f[g]=e[g])});
return qj(a,f||{},!1)}
function Bj(a,b){var c=b.format||"JSON";a=Cj(a,b);var d=Dj(a,b),e=!1,f=Ej(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||n||r)m=Fj(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};n=b.context||z;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=hj(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||z,f))},d)}return f}
function Cj(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=qj(a,b||{},!0);return a}
function Dj(a,b){var c=S("XSRF_FIELD_NAME"),d=S("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams;var g=S("XSRF_FIELD_NAME");var h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Zb(a)&&!b.withCredentials&&Zb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(U("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=pj(e),qb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):bc(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;break a}f=!0}a=!f}!yj&&a&&"POST"!=b.method&&(yj=!0,Wi(Error("AJAX request with postData should use POST")));return e}
function Fj(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Xi(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Gj(a):null)e={},D(a.getElementsByTagName("*"),function(g){e[g.tagName]=Hj(g)})}d&&Ij(e);
return e}
function Ij(a){if(Qa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===rb){var e=null;var f=z.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:$a,createScript:$a,createScriptURL:$a})}catch(g){z.console&&z.console.error(g.message)}rb=e}else rb=e}d=(e=rb)?e.createHTML(d):d;a[c]=new Vb(d)}else Ij(a[b])}}
function Gj(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Hj(a){var b="";D(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Jj(a,b){b.method="POST";b.postParams||(b.postParams={});return Bj(a,b)}
function Ej(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Vi(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=vj();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;U("debug_forward_web_query_parameters")&&(a=Aj(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=zj(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Kj=[{Ib:function(a){return"Cannot read property '"+a.key+"'"},
xb:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ib:function(a){return"Cannot call '"+a.key+"'"},
xb:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ib:function(a){return a.key+" is not defined"},
xb:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Mj={za:[],wa:[{Jc:Lj,weight:500}]};function Lj(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Nj(){this.wa=[];this.za=[]}
var Oj;function Pj(){if(!Oj){var a=Oj=new Nj;a.za.length=0;a.wa.length=0;Mj.za&&a.za.push.apply(a.za,Mj.za);Mj.wa&&a.wa.push.apply(a.wa,Mj.wa)}return Oj}
;var Qj=new K;function Rj(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Sj(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Sj(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Sj(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Sj(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Tj(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Uj(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Rj(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Uj(e+".ve",f,g,h):0;d+=g;d+=Uj(e,a[e],b,c);if(500<d)break}}else c[b]=Vj(a),d+=c[b].length;else c[b]=Vj(a),d+=c[b].length;return d}
function Uj(a,b,c,d){c+="."+a;a=Vj(b);d[c]=a;return c.length+a.length}
function Vj(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Wj(){}
;function Xj(){if(!z.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return z.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":z.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":z.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":z.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;C("ytglobal.prefsUserPrefsPrefs_",B("ytglobal.prefsUserPrefsPrefs_")||{});var Yj={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Zj={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},ak={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},bk={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function ck(){var a=z.navigator;return a?a.connection:void 0}
;function dk(a){var b=Ka.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ia(b))}
v(dk,Error);function ek(){try{return fk(),!0}catch(a){return!1}}
function fk(){if(void 0!==S("DATASYNC_ID"))return S("DATASYNC_ID");throw new dk("Datasync ID not set","unknown");}
;function gk(){}
function hk(a,b){return ik(a,0,b)}
gk.prototype.oa=function(a,b){return ik(a,1,b)};function jk(){gk.apply(this,arguments)}
v(jk,gk);function kk(){jk.g||(jk.g=new jk);return jk.g}
function ik(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):hj(a,c||0)}
jk.prototype.Na=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
jk.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
var Ve=kk();function lk(a){var b=new vg;if(b.g)try{b.g.setItem("__sak","1");b.g.removeItem("__sak");var c=!0}catch(d){c=!1}else c=!1;(b=c?a?new Bg(b,a):b:null)||(a=new wg(a||"UserDataSharedStore"),b=a.g?a:null);this.g=(a=b)?new rg(a):null;this.h=document.domain||window.location.hostname}
lk.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Tf(b))}catch(f){return}else e=escape(b);b=this.h;ee.set(""+a,e,{Gb:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
lk.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=ee.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
lk.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.h;ee.remove(""+a,"/",void 0===b?"youtube.com":b)};var mk=function(){var a;return function(){a||(a=new lk("ytidb"));return a}}();
function nk(){var a;return null==(a=mk())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var ok=[],pk=!1;function qk(a){pk||(ok.push({type:"ERROR",payload:a}),10<ok.length&&ok.shift())}
function rk(a,b){pk||(ok.push({type:"EVENT",eventType:a,payload:b}),10<ok.length&&ok.shift())}
;function sk(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function tk(a){return a.substr(0,a.indexOf(":"))||a}
;var uk=zc||Ac;var vk={},wk=(vk.AUTH_INVALID="No user identifier specified.",vk.EXPLICIT_ABORT="Transaction was explicitly aborted.",vk.IDB_NOT_SUPPORTED="IndexedDB is not supported.",vk.MISSING_INDEX="Index not created.",vk.MISSING_OBJECT_STORES="Object stores not created.",vk.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",vk.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",vk.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
vk.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",vk.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",vk.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",vk.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",vk),xk={},yk=(xk.AUTH_INVALID="ERROR",xk.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",xk.EXPLICIT_ABORT="IGNORED",xk.IDB_NOT_SUPPORTED="ERROR",xk.MISSING_INDEX=
"WARNING",xk.MISSING_OBJECT_STORES="ERROR",xk.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",xk.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",xk.QUOTA_EXCEEDED="WARNING",xk.QUOTA_MAYBE_EXCEEDED="WARNING",xk.UNKNOWN_ABORT="WARNING",xk.INCOMPATIBLE_DB_VERSION="WARNING",xk),zk={},Ak=(zk.AUTH_INVALID=!1,zk.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,zk.EXPLICIT_ABORT=!1,zk.IDB_NOT_SUPPORTED=!1,zk.MISSING_INDEX=!1,zk.MISSING_OBJECT_STORES=!1,zk.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,zk.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,zk.QUOTA_EXCEEDED=!1,zk.QUOTA_MAYBE_EXCEEDED=!0,zk.UNKNOWN_ABORT=!0,zk.INCOMPATIBLE_DB_VERSION=!1,zk);function X(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?wk[a]:c;d=void 0===d?yk[a]:d;e=void 0===e?Ak[a]:e;dk.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,X.prototype)}
v(X,dk);function Bk(a,b){X.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},wk.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Bk.prototype)}
v(Bk,X);function Ck(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Ck.prototype)}
v(Ck,Error);var Dk=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Ek(a,b,c,d){b=tk(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof X)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new X("QUOTA_EXCEEDED",a);if(Bc&&"UnknownError"===e.name)return new X("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Ck)return new X("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Dk.some(function(f){return e.message.includes(f)}))return new X("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new X("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Xd:e.name})];e.level="WARNING";return e}
function Fk(a,b,c){var d=nk();return new X("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Gk(a){if(!a)throw Error();throw a;}
function Hk(a){return a}
function Ik(a){this.g=a}
function Jk(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.h=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
Jk.resolve=function(a){return new Jk(new Ik(function(b,c){a instanceof Jk?a.then(b,c):b(a)}))};
Jk.reject=function(a){return new Jk(new Ik(function(b,c){c(a)}))};
Jk.prototype.then=function(a,b){var c=this,d=null!=a?a:Hk,e=null!=b?b:Gk;return new Jk(new Ik(function(f,g){"PENDING"===c.state.status?(c.g.push(function(){Kk(c,c,d,f,g)}),c.h.push(function(){Lk(c,c,e,f,g)})):"FULFILLED"===c.state.status?Kk(c,c,d,f,g):"REJECTED"===c.state.status&&Lk(c,c,e,f,g)}))};
function Mk(a,b){a.then(void 0,b)}
function Kk(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Jk?Nk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Lk(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Jk?Nk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Nk(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Jk?Nk(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Ok(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Pk(a){return new Promise(function(b,c){Ok(a,b,c)})}
function Qk(a){return new Jk(new Ik(function(b,c){Ok(a,b,c)}))}
;function Rk(a,b){return new Jk(new Ik(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Sk=window,Y=Sk.ytcsi&&Sk.ytcsi.now?Sk.ytcsi.now:Sk.performance&&Sk.performance.timing&&Sk.performance.now&&Sk.performance.timing.navigationStart?function(){return Sk.performance.timing.navigationStart+Sk.performance.now()}:function(){return(new Date).getTime()};function Tk(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(Y());this.h=!1}
q=Tk.prototype;q.add=function(a,b,c){return Uk(this,[a],{mode:"readwrite",V:!0},function(d){return d.objectStore(a).add(b,c)})};
q.clear=function(a){return Uk(this,[a],{mode:"readwrite",V:!0},function(b){return b.objectStore(a).clear()})};
q.close=function(){this.g.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
function Vk(a,b,c){a=a.g.createObjectStore(b,c);return new Wk(a)}
q.delete=function(a,b){return Uk(this,[a],{mode:"readwrite",V:!0},function(c){return c.objectStore(a).delete(b)})};
q.get=function(a,b){return Uk(this,[a],{mode:"readonly",V:!0},function(c){return c.objectStore(a).get(b)})};
function Xk(a,b,c){return Uk(a,[b],{mode:"readwrite",V:!0},function(d){d=d.objectStore(b);return Qk(d.g.put(c,void 0))})}
q.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function Uk(a,b,c,d){var e,f,g,h,k,l,m,n,r,p,y,A;return x(function(H){switch(H.g){case 1:var O={mode:"readonly",V:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?O.mode=c:Object.assign(O,c);e=O;a.transactionCount++;f=e.V?3:1;g=0;case 2:if(h){H.C(4);break}g++;k=Math.round(Y());wa(H,5);l=a.g.transaction(b,e.mode);O=new Yk(l);O=Zk(O,d);return w(H,O,7);case 7:return m=H.h,n=Math.round(Y()),$k(a,k,n,g,void 0,b.join(),e),H.return(m);case 5:r=Aa(H);p=Math.round(Y());y=Ek(r,a.g.name,b.join(),a.g.version);
if((A=y instanceof X&&!y.g)||g>=f)$k(a,k,p,g,y,b.join(),e),h=y;H.C(2);break;case 4:return H.return(Promise.reject(h))}})}
function $k(a,b,c,d,e,f,g){b=c-b;e?(e instanceof X&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&rk("QUOTA_EXCEEDED",{dbName:tk(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof X&&"UNKNOWN_ABORT"===e.type&&(c-=a.i,0>c&&c>=Math.pow(2,31)&&(c=0),rk("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.h=!0),al(a,!1,d,f,b,g.tag),qk(e)):al(a,!0,d,f,b,g.tag)}
function al(a,b,c,d,e,f){rk("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.h,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
q.getName=function(){return this.g.name};
function Wk(a){this.g=a}
q=Wk.prototype;q.add=function(a,b){return Qk(this.g.add(a,b))};
q.autoIncrement=function(){return this.g.autoIncrement};
q.clear=function(){return Qk(this.g.clear()).then(function(){})};
function bl(a,b,c){a.g.createIndex(b,c,{unique:!1})}
function cl(a,b){return dl(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
q.delete=function(a){return a instanceof IDBKeyRange?cl(this,a):Qk(this.g.delete(a))};
q.get=function(a){return Qk(this.g.get(a))};
q.index=function(a){try{return new el(this.g.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Ck(a,this.g.name);throw b;}};
q.getName=function(){return this.g.name};
q.keyPath=function(){return this.g.keyPath};
function dl(a,b,c){a=a.g.openCursor(b.query,b.direction);return fl(a).then(function(d){return Rk(d,c)})}
function Yk(a){var b=this;this.g=a;this.i=new Map;this.h=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.h){e=X;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function Zk(a,b){var c=new Promise(function(d,e){try{Mk(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
Yk.prototype.abort=function(){this.g.abort();this.h=!0;throw new X("EXPLICIT_ABORT");};
Yk.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new Wk(a),this.i.set(a,b));return b};
function el(a){this.g=a}
q=el.prototype;q.delete=function(a){return gl(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
q.get=function(a){return Qk(this.g.get(a))};
q.getKey=function(a){return Qk(this.g.getKey(a))};
q.keyPath=function(){return this.g.keyPath};
q.unique=function(){return this.g.unique};
function gl(a,b,c){a=a.g.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return fl(a).then(function(d){return Rk(d,c)})}
function hl(a,b){this.request=a;this.cursor=b}
function fl(a){return Qk(a).then(function(b){return b?new hl(a,b):null})}
q=hl.prototype;q.advance=function(a){this.cursor.advance(a);return fl(this.request)};
q.continue=function(a){this.cursor.continue(a);return fl(this.request)};
q.delete=function(){return Qk(this.cursor.delete()).then(function(){})};
q.getKey=function(){return this.cursor.key};
q.ha=function(){return this.cursor.value};
q.update=function(a){return Qk(this.cursor.update(a))};function il(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Tk(g.result,{closed:n}));return r}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Hc,k=c.Ic,l=c.kd,m=c.upgrade,n=c.closed,r;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&rk("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:tk(a)});var y=f(),A=new Yk(g.transaction);m&&
m(y,function(H){return p.oldVersion<H&&p.newVersion>=H},A);
A.done.catch(function(H){e(H)})}catch(H){e(H)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){rk("IDB_UNEXPECTEDLY_CLOSED",{dbName:tk(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function jl(a,b,c){c=void 0===c?{}:c;return il(a,b,c)}
function kl(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.g)return wa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Hc)&&c.addEventListener("blocked",function(){e()}),w(g,Pk(c),4);
if(2!=g.g)return xa(g,0);f=Aa(g);throw Ek(f,a,"",-1);})}
;function ll(a,b){this.name=a;this.options=b;this.i=!0;this.s=this.l=0}
ll.prototype.h=function(a,b,c){c=void 0===c?{}:c;return jl(a,b,c)};
ll.prototype.delete=function(a){a=void 0===a?{}:a;return kl(this.name,a)};
function Yl(a,b){return new X("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Zl(a,b){if(!b)throw Fk("openWithToken",tk(a.name));return $l(a)}
function $l(a){function b(){var f,g,h,k,l,m,n,r,p,y;return x(function(A){switch(A.g){case 1:return g=null!=(f=Error().stack)?f:"",wa(A,2),w(A,a.h(a.name,a.options.version,d),4);case 4:h=A.h;for(var H=a.options,O=[],T=u(Object.keys(H.Va)),Q=T.next();!Q.done;Q=T.next()){Q=Q.value;var ya=H.Va[Q],Ic=void 0===ya.hd?Number.MAX_VALUE:ya.hd;!(h.g.version>=ya.Za)||h.g.version>=Ic||h.g.objectStoreNames.contains(Q)||O.push(Q)}k=O;if(0===k.length){A.C(5);break}l=Object.keys(a.options.Va);m=h.objectStoreNames();
if(a.s<W("ytidb_reopen_db_retries",0))return a.s++,h.close(),qk(new X("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),A.return(b());if(!(a.l<W("ytidb_remake_db_retries",1))){A.C(6);break}a.l++;return w(A,a.delete(),7);case 7:return qk(new X("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),A.return(b());case 6:throw new Bk(m,l);case 5:return A.return(h);case 2:n=Aa(A);if(n instanceof DOMException?
"VersionError"!==n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"!==n.name:!(n instanceof Object&&"message"in n)||"An attempt was made to open a database using a lower version than the existing version."!==n.message){A.C(8);break}return w(A,a.h(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:r=A.h;p=r.g.version;if(void 0!==a.options.version&&p>a.options.version+1)throw r.close(),a.i=!1,Yl(a,p);return A.return(r);case 8:throw c(),n instanceof Error&&!U("ytidb_async_stack_killswitch")&&
(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Ek(n,a.name,"",null!=(y=a.options.version)?y:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.i)throw Yl(a);if(a.g)return a.g;var d={Ic:function(f){f.close()},
closed:c,kd:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var am=new ll("YtIdbMeta",{Va:{databases:{Za:1}},upgrade:function(a,b){b(1)&&Vk(a,"databases",{keyPath:"actualName"})}});
function bm(a,b){var c;return x(function(d){if(1==d.g)return w(d,Zl(am,b),2);c=d.h;return d.return(Uk(c,["databases"],{V:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Qk(f.g.put(a,void 0)).then(function(){})})}))})}
function cm(a,b){var c;return x(function(d){if(1==d.g)return a?w(d,Zl(am,b),2):d.return();c=d.h;return d.return(c.delete("databases",a))})}
function dm(a,b){var c,d;return x(function(e){return 1==e.g?(c=[],w(e,Zl(am,b),2)):3!=e.g?(d=e.h,w(e,Uk(d,["databases"],{V:!0,mode:"readonly"},function(f){c.length=0;return dl(f.objectStore("databases"),{},function(g){a(g.ha())&&c.push(g.ha());return g.continue()})}),3)):e.return(c)})}
function em(a){return dm(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var fm,gm=new function(){}(new function(){});
function hm(){var a,b,c,d;return x(function(e){switch(e.g){case 1:a=nk();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=uk)f=/WebKit\/([0-9]+)/.exec(Ob()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Ob()),f=!(f&&602<=parseInt(f[1],10)));if(f||nc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
wa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(e,bm(d,gm),4);case 4:return w(e,cm("yt-idb-test-do-not-use",gm),5);case 5:return e.return(!0);case 2:return Aa(e),e.return(!1)}})}
function im(){if(void 0!==fm)return fm;pk=!0;return fm=hm().then(function(a){pk=!1;var b;if(null!=(b=mk())&&b.g){var c;b={hasSucceededOnce:(null==(c=nk())?void 0:c.hasSucceededOnce)||a};var d;null==(d=mk())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function jm(){return B("ytglobal.idbToken_")||void 0}
function km(){var a=jm();return a?Promise.resolve(a):im().then(function(b){(b=b?gm:void 0)&&C("ytglobal.idbToken_",b);return b})}
;new Uf;function lm(a){if(!ek())throw a=new X("AUTH_INVALID",{dbName:a}),qk(a),a;var b=fk();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function mm(a,b,c,d){var e,f,g,h,k,l;return x(function(m){switch(m.g){case 1:return f=null!=(e=Error().stack)?e:"",w(m,km(),2);case 2:g=m.h;if(!g)throw h=Fk("openDbImpl",a,b),U("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),qk(h),h;sk(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:lm(a);wa(m,3);return w(m,bm(k,g),5);case 5:return w(m,jl(k.actualName,b,d),6);case 6:return m.return(m.h);case 3:return l=Aa(m),wa(m,7),w(m,cm(k.actualName,g),9);case 9:xa(m,
8);break;case 7:Aa(m);case 8:throw l;}})}
function nm(a,b,c){c=void 0===c?{}:c;return mm(a,b,!1,c)}
function om(a,b,c){c=void 0===c?{}:c;return mm(a,b,!0,c)}
function pm(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.g)return w(e,km(),2);if(3!=e.g){c=e.h;if(!c)return e.return();sk(a);d=lm(a);return w(e,kl(d.actualName,b),3)}return w(e,cm(d.actualName,c),0)})}
function qm(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.g?w(e,kl(d.actualName,b),2):w(e,cm(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function rm(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.g)return w(d,km(),2);if(3!=d.g){b=d.h;if(!b)return d.return();sk("LogsDatabaseV2");return w(d,em(b),3)}c=d.h;return w(d,qm(c,a,b),0)})}
function sm(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.g)return w(d,km(),2);if(3!=d.g){c=d.h;if(!c)return d.return();sk(a);return w(d,kl(a,b),3)}return w(d,cm(a,c),0)})}
;function tm(a,b){ll.call(this,a,b);this.options=b;sk(a)}
v(tm,ll);function um(a,b){var c;return function(){c||(c=new tm(a,b));return c}}
tm.prototype.h=function(a,b,c){c=void 0===c?{}:c;return(this.options.Bb?om:nm)(a,b,Object.assign({},c))};
tm.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Bb?sm:pm)(this.name,a)};
function vm(a,b){return um(a,b)}
;var wm={},xm=vm("ytGcfConfig",{Va:(wm.coldConfigStore={Za:1},wm.hotConfigStore={Za:1},wm),Bb:!1,upgrade:function(a,b){b(1)&&(bl(Vk(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),bl(Vk(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function ym(a){return Zl(xm(),a)}
function zm(a,b,c){var d,e,f;return x(function(g){switch(g.g){case 1:return d={config:a,hashData:b,timestamp:Y()},w(g,ym(c),2);case 2:return e=g.h,w(g,e.clear("hotConfigStore"),3);case 3:return w(g,Xk(e,"hotConfigStore",d),4);case 4:return f=g.h,g.return(f)}})}
function Am(a,b,c,d){var e,f,g;return x(function(h){switch(h.g){case 1:return e={config:a,hashData:b,configData:c,timestamp:Y()},w(h,ym(d),2);case 2:return f=h.h,w(h,f.clear("coldConfigStore"),3);case 3:return w(h,Xk(f,"coldConfigStore",e),4);case 4:return g=h.h,h.return(g)}})}
function Bm(a){var b,c;return x(function(d){return 1==d.g?w(d,ym(a),2):3!=d.g?(b=d.h,c=void 0,w(d,Uk(b,["coldConfigStore"],{mode:"readwrite",V:!0},function(e){return gl(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.ha()})}),3)):d.return(c)})}
function Cm(a){var b,c;return x(function(d){return 1==d.g?w(d,ym(a),2):3!=d.g?(b=d.h,c=void 0,w(d,Uk(b,["hotConfigStore"],{mode:"readwrite",V:!0},function(e){return gl(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.ha()})}),3)):d.return(c)})}
;function Dm(){ke.apply(this,arguments);this.g=[]}
v(Dm,ke);Dm.prototype.Ea=function(){this.g.length=0;ke.prototype.Ea.call(this)};function Em(){this.g=0;this.h=new Dm}
function Fm(a,b,c){var d,e,f;return x(function(g){switch(g.g){case 1:if(!U("update_log_event_config")){g.C(0);break}c&&(a.i=c,C("yt.gcf.config.hotConfigGroup",a.i||null));a.hotHashData=b;C("yt.gcf.config.hotHashData",a.hotHashData||null);d=jm();if(!d){g.C(3);break}if(c){g.C(4);break}return w(g,Cm(d),5);case 5:e=g.h,c=null==(f=e)?void 0:f.config;case 4:return w(g,zm(c,b,d),3);case 3:if(c)for(var h=c,k=u(a.h.g),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.g=0}})}
function Gm(a,b,c){var d,e,f,g;return x(function(h){if(1==h.g){if(!U("update_log_event_config"))return h.C(0);a.coldHashData=b;C("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=jm())?c?h.C(4):w(h,Bm(d),5):h.C(0)}4!=h.g&&(e=h.h,c=null==(f=e)?void 0:f.config);if(!c)return h.C(0);g=c.configData;return w(h,Am(c,b,g,d),0)})}
;function Hm(){return"INNERTUBE_API_KEY"in Pi&&"INNERTUBE_API_VERSION"in Pi}
function Im(){return{Uc:S("INNERTUBE_API_KEY"),Vc:S("INNERTUBE_API_VERSION"),Eb:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),cc:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Wc:S("INNERTUBE_CONTEXT_CLIENT_NAME",1),dc:S("INNERTUBE_CONTEXT_CLIENT_VERSION"),fc:S("INNERTUBE_CONTEXT_HL"),ec:S("INNERTUBE_CONTEXT_GL"),Xc:S("INNERTUBE_HOST_OVERRIDE")||"",Zc:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Yc:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:S("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Jm(a){var b={client:{hl:a.fc,gl:a.ec,clientName:a.cc,clientVersion:a.dc,configInfo:a.Eb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=z.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=S("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=Zi();0<c.length&&(b.request={internalExperimentFlags:c});Km(a,void 0,b);Lm(void 0,b);Mm(void 0,b);Nm(a,void 0,b);Om(void 0,b);U("start_sending_config_hash")&&Pm(void 0,b);S("DELEGATED_SESSION_ID")&&
!U("pageid_as_header_web")&&(b.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});!U("fill_delegate_context_in_gel_killswitch")&&(a=S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;for(var d=b.client,e={},f=u(Object.entries(pj(S("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===
g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Qm(a){var b=new ti,c=new mi;G(c,1,a.fc);G(c,2,a.ec);G(c,16,a.Wc);G(c,17,a.dc);if(a.Eb){var d=a.Eb,e=new ji;d.coldConfigData&&G(e,1,d.coldConfigData);d.appInstallData&&G(e,6,d.appInstallData);d.coldHashData&&G(e,3,d.coldHashData);d.hotHashData&&G(e,5,d.hotHashData);I(c,ji,62,e)}if((d=z.devicePixelRatio)&&1!=d){if(null!=d&&"number"!==typeof d)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof d+": "+d);G(c,65,d)}d=S("EXPERIMENTS_TOKEN","");""!==d&&G(c,
54,d);d=Zi();if(0<d.length){e=new pi;for(var f=0;f<d.length;f++){var g=new ni;G(g,1,d[f].key);gd(g,2,oi,d[f].value);md(e,15,ni,g)}I(b,pi,5,e)}Km(a,c);Lm(b);Mm(c);Nm(a,c);Om(c);U("start_sending_config_hash")&&Pm(c);S("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&(a=new si,G(a,3,S("DELEGATED_SESSION_ID")));!U("fill_delegate_context_in_gel_killswitch")&&(a=S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(d=jd(b,si,3)||new si,a=G(d,18,a),I(b,si,3,a));a=u(Object.entries(pj(S("DEVICE",""))));
for(d=a.next();!d.done;d=a.next())e=u(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?G(c,12,e):"cmodel"===d?G(c,13,e):"cbr"===d?G(c,87,e):"cbrver"===d?G(c,88,e):"cos"===d?G(c,18,e):"cosver"===d?G(c,19,e):"cplatform"===d&&G(c,42,e);I(b,mi,1,c);return b}
function Km(a,b,c){a=a.cc;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=jd(b,ki,96)||new ki;var d=Xj();d=Object.keys(ui).indexOf(d);d=-1===d?null:d;null!==d&&G(c,3,d);I(b,ki,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Xj())}
function Lm(a,b){var c=B("yt.embedded_player.embed_url");c&&(a?(b=jd(a,qi,7)||new qi,G(b,4,c),I(a,qi,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function Mm(a,b){var c;if(U("web_log_memory_total_kbytes")&&(null==(c=z.navigator)?0:c.deviceMemory)){var d;c=null==(d=z.navigator)?void 0:d.deviceMemory;a?G(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Nm(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=jd(b,ji,62))?d:new ji;G(c,6,a.appInstallData);I(b,ji,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Om(a,b){a:{var c=ck();if(c){var d=Yj[c.type||"unknown"]||"CONN_UNKNOWN";c=Yj[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?G(a,61,Zj[d]):b&&(b.client.connectionType=d));U("web_log_effective_connection_type")&&(d=ck(),d=null!=d&&d.effectiveType?bk.hasOwnProperty(d.effectiveType)?bk[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?G(a,94,ak[d]):
b&&(b.client.effectiveConnectionType=d)))}
function Rm(a,b,c){c=void 0===c?{}:c;var d={};S("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":S("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.Rd||S("AUTHORIZATION");if(!b)if(a)b="Bearer "+B("gapi.auth.getToken")().Qd;else{Wj.g||(Wj.g=new Wj);a={};if(c=he([]))a.Authorization=c,c=void 0,void 0===c&&(c=Number(S("SESSION_INDEX",0)),c=isNaN(c)?0:c),U("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=
c.toString()),"INNERTUBE_HOST_OVERRIDE"in Pi||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in Pi&&(a["X-Goog-PageId"]=S("DELEGATED_SESSION_ID"));U("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function Pm(a,b){if(!Em.g){var c=new Em;Em.g=c}c=Em.g;var d=Y()-c.g;if(0!==c.g&&d<W("send_config_hash_timer"))c=void 0;else{d=B("yt.gcf.config.coldConfigData");var e=B("yt.gcf.config.hotHashData"),f=B("yt.gcf.config.coldHashData");d&&e&&f&&(c.g=Y());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){var g;b=null!=(g=jd(a,ji,62))?g:new ji;G(b,1,c);G(b,3,d);G(b,5,e);I(a,ji,62,b)}else b&&(b.client.configInfo=b.client.configInfo||
{},b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;var Sm=B("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.jb;K.prototype.publish=K.prototype.Wa;K.prototype.clear=K.prototype.clear;C("ytPubsub2Pubsub2Instance",Sm);C("ytPubsub2Pubsub2SubscribedKeys",B("ytPubsub2Pubsub2SubscribedKeys")||{});C("ytPubsub2Pubsub2TopicToKeys",B("ytPubsub2Pubsub2TopicToKeys")||{});C("ytPubsub2Pubsub2IsAsync",B("ytPubsub2Pubsub2IsAsync")||{});C("ytPubsub2Pubsub2SkipSubKey",null);function Tm(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&(a={ce:a,be:b},(b=B("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"meta_logging_csi_event".toString(),"meta_logging_csi_event",a))}
;var Um=W("max_body_size_to_compress",5E5),Vm=W("min_body_size_to_compress",500),Wm=!0,Xm=0,Ym=0,Zm=W("compression_performance_threshold",250),$m=W("slow_compressions_before_abandon_count",4);
function an(a,b,c,d){var e=Y(),f={startTime:e,ticks:{},infos:{}};if(Wm)try{try{var g=(new Blob(b.split(""))).size}catch(r){Xi(r),g=null}if(null==g||!(g>Um||g<Vm)){var h=je(b);var k=k||{};k.Tc=!0;var l=new ei(k);l.push(h,!0);if(l.err)throw l.msg||Ng[l.err];var m=l.result;var n=Y();f.ticks.gelc=n;Ym++;U("disable_compression_due_to_performance_degredation")&&n-e>=Zm&&(Xm++,U("abandon_compression_after_N_slow_zips")?Ym===W("compression_disable_point")&&Xm>$m&&(Wm=!1):Wm=!1);U("gel_compression_csi_killswitch")||
!U("log_gel_compression_latency")&&!U("log_gel_compression_latency_lr")||Tm("gel_compression",f,{sampleRate:.1});c.headers||(c.headers={});c.headers["Content-Encoding"]="gzip";c.postBody=m;c.postParams=void 0}d(a,c)}catch(r){Xi(r),d(a,c)}else d(a,c)}
;function bn(a){a=Object.assign({},a);delete a.Authorization;var b=he();if(b){var c=new Ff;c.update(S("INNERTUBE_API_KEY"));c.update(b);a.hash=Ec(c.digest(),3)}return a}
;var cn;function dn(){cn||(cn=new lk("yt.innertube"));return cn}
function en(a,b,c,d){if(d)return null;d=dn().get("nextId",!0)||1;var e=dn().get("requests",!0)||{};e[d]={method:a,request:b,authState:bn(c),requestTime:Math.round(Y())};dn().set("nextId",d+1,86400,!0);dn().set("requests",e,86400,!0);return d}
function fn(a){var b=dn().get("requests",!0)||{};delete b[a];dn().set("requests",b,86400,!0)}
function gn(a){var b=dn().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Y())-d.requestTime)){var e=d.authState,f=bn(Rm(!1));nb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Y())),hn(a,d.method,e,{}));delete b[c]}}dn().set("requests",b,86400,!0)}}
;function jn(a){this.ob=this.g=!1;this.potentialEsfErrorCounter=this.h=0;this.handleError=function(){};
this.Pa=function(){};
this.now=Date.now;this.cb=!1;var b;this.wc=null!=(b=a.wc)?b:100;var c;this.uc=null!=(c=a.uc)?c:1;var d;this.qc=null!=(d=a.qc)?d:2592E6;var e;this.pc=null!=(e=a.pc)?e:12E4;var f;this.sc=null!=(f=a.sc)?f:5E3;var g;this.H=null!=(g=a.H)?g:void 0;this.tb=!!a.tb;var h;this.rb=null!=(h=a.rb)?h:.1;var k;this.yb=null!=(k=a.yb)?k:10;a.handleError&&(this.handleError=a.handleError);a.Pa&&(this.Pa=a.Pa);a.cb&&(this.cb=a.cb);a.ob&&(this.ob=a.ob);this.I=a.I;this.fa=a.fa;this.M=a.M;this.O=a.O;this.va=a.va;this.Lb=
a.Lb;this.Kb=a.Kb;kn(this)&&(!this.I||this.I("networkless_logging"))&&ln(this)}
function ln(a){kn(a)&&!a.cb&&(a.g=!0,a.tb&&Math.random()<=a.rb&&a.M.Kc(a.H),mn(a),a.O.ba()&&a.ib(),a.O.Ga(a.Lb,a.ib.bind(a)),a.O.Ga(a.Kb,a.Sb.bind(a)))}
q=jn.prototype;q.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(kn(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.M.set(d,this.H).then(function(e){d.id=e;c.O.ba()&&nn(c,d)}).catch(function(e){nn(c,d);
on(c,e)})}else this.va(a,b)};
q.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(kn(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.I&&this.I("nwl_skip_retry")&&(e.skipRetry=c);if(this.O.ba()||this.I&&this.I("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.g)return w(k,d.M.set(e,d.H).catch(function(l){on(d,l)}),2);
f(g,h);k.g=0})}}this.va(a,b,e.skipRetry)}else this.M.set(e,this.H).catch(function(g){d.va(a,b,e.skipRetry);
on(d,g)})}else this.va(a,b,this.I&&this.I("nwl_skip_retry")&&c)};
q.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(kn(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.M.Oa(d.id,c.H):e=!0;c.O.Ia&&c.I&&c.I("vss_network_hint")&&c.O.Ia(!0);f(g,h)};
this.va(d.url,d.options);this.M.set(d,this.H).then(function(g){d.id=g;e&&c.M.Oa(d.id,c.H)}).catch(function(g){on(c,g)})}else this.va(a,b)};
q.ib=function(){var a=this;if(!kn(this))throw Fk("throttleSend");this.h||(this.h=this.fa.oa(function(){var b;return x(function(c){if(1==c.g)return w(c,a.M.Yb("NEW",a.H),2);if(3!=c.g)return b=c.h,b?w(c,nn(a,b),3):(a.Sb(),c.return());a.h&&(a.h=0,a.ib());c.g=0})},this.wc))};
q.Sb=function(){this.fa.Na(this.h);this.h=0};
function nn(a,b){var c,d;return x(function(e){switch(e.g){case 1:if(!kn(a))throw c=Fk("immediateSend"),c;if(void 0===b.id){e.C(2);break}return w(e,a.M.bd(b.id,a.H),3);case 3:(d=e.h)||a.Pa(Error("The request cannot be found in the database."));case 2:if(pn(a,b,a.qc)){e.C(4);break}a.Pa(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.C(5);break}return w(e,a.M.Oa(b.id,a.H),5);case 5:return e.return();case 4:b.skipRetry||(b=qn(a,b));if(!b){e.C(0);break}if(!b.skipRetry||
void 0===b.id){e.C(8);break}return w(e,a.M.Oa(b.id,a.H),8);case 8:a.va(b.url,b.options,!!b.skipRetry),e.g=0}})}
function qn(a,b){if(!kn(a))throw Fk("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return x(function(m){switch(m.g){case 1:g=rn(f);(h=sn(f))&&a.I&&a.I("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.I&&a.I("nwl_consider_error_code")&&g||a.I&&!a.I("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.yb)){m.C(2);break}if(!a.O.Ab){m.C(3);break}return w(m,a.O.Ab(),3);case 3:if(a.O.ba()){m.C(2);break}c(e,f);if(!a.I||!a.I("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){m.C(6);
break}return w(m,a.M.Mb(b.id,a.H,!1),6);case 6:return m.return();case 2:if(a.I&&a.I("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.yb)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){m.C(8);break}return b.sendCount<a.uc?w(m,a.M.Mb(b.id,a.H,!0,h?!1:void 0),12):w(m,a.M.Oa(b.id,a.H),8);case 12:a.fa.oa(function(){a.O.ba()&&a.ib()},a.sc);
case 8:c(e,f),m.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.g)return void 0===(null==(g=b)?void 0:g.id)?h.C(2):w(h,a.M.Oa(b.id,a.H),2);a.O.Ia&&a.I&&a.I("vss_network_hint")&&a.O.Ia(!0);d(e,f);h.g=0})};
return b}
function pn(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function mn(a){if(!kn(a))throw Fk("retryQueuedRequests");a.M.Yb("QUEUED",a.H).then(function(b){b&&!pn(a,b,a.pc)?a.fa.oa(function(){return x(function(c){if(1==c.g)return void 0===b.id?c.C(2):w(c,a.M.Mb(b.id,a.H),2);mn(a);c.g=0})}):a.O.ba()&&a.ib()})}
function on(a,b){a.zc&&!a.O.ba()?a.zc(b):a.handleError(b)}
function kn(a){return!!a.H||a.ob}
function rn(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function sn(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var tn;
function un(){if(tn)return tn();var a={};tn=vm("LogsDatabaseV2",{Va:(a.LogsRequestsStore={Za:2},a),Bb:!1,upgrade:function(b,c,d){c(2)&&Vk(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),bl(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return tn()}
;function vn(a){return Zl(un(),a)}
function wn(a,b){var c,d,e,f;return x(function(g){if(1==g.g)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},w(g,vn(b),2);if(3!=g.g)return d=g.h,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:S("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(g,Xk(d,"LogsRequestsStore",e),3);f=g.h;c.ticks.tc=Y();xn(c);return g.return(f)})}
function yn(a,b){var c,d,e,f,g,h,k;return x(function(l){if(1==l.g)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},w(l,vn(b),2);if(3!=l.g)return d=l.h,e=S("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Y()],h=IDBKeyRange.bound(f,g),k=void 0,w(l,Uk(d,["LogsRequestsStore"],{mode:"readwrite",V:!0},function(m){return gl(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(n){n.ha()&&(k=n.ha(),"NEW"===a&&(k.status="QUEUED",
n.update(k)))})}),3);
c.ticks.tc=Y();xn(c);return l.return(k)})}
function zn(a,b){var c;return x(function(d){if(1==d.g)return w(d,vn(b),2);c=d.h;return d.return(Uk(c,["LogsRequestsStore"],{mode:"readwrite",V:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Qk(f.g.put(g,void 0)).then(function(){return g})})}))})}
function An(a,b,c,d){c=void 0===c?!0:c;var e;return x(function(f){if(1==f.g)return w(f,vn(b),2);e=f.h;return f.return(Uk(e,["LogsRequestsStore"],{mode:"readwrite",V:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Qk(h.g.put(k,void 0)).then(function(){return k})):Jk.resolve(void 0)})}))})}
function Bn(a,b){var c;return x(function(d){if(1==d.g)return w(d,vn(b),2);c=d.h;return d.return(c.delete("LogsRequestsStore",a))})}
function Cn(a){var b,c;return x(function(d){if(1==d.g)return w(d,vn(a),2);b=d.h;c=Y()-2592E6;return w(d,Uk(b,["LogsRequestsStore"],{mode:"readwrite",V:!0},function(e){return dl(e.objectStore("LogsRequestsStore"),{},function(f){if(f.ha().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Dn(){x(function(a){return w(a,rm(),0)})}
function xn(a){U("nwl_csi_killswitch")||Tm("networkless_performance",a,{sampleRate:1})}
;var En={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,
mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,
kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,
transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,
ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,
ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,
userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,
embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,tvhtml5ApiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,
liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,
delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,
tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,
postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,
proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,
accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,
sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,
homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,
dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,
producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477};var Fn={},Gn=vm("ServiceWorkerLogsDatabase",{Va:(Fn.SWHealthLog={Za:1},Fn),Bb:!0,upgrade:function(a,b){b(1)&&bl(Vk(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Hn(a){return Zl(Gn(),a)}
function In(a){var b,c;x(function(d){if(1==d.g)return w(d,Hn(a),2);b=d.h;c=Y()-2592E6;return w(d,Uk(b,["SWHealthLog"],{mode:"readwrite",V:!0},function(e){return dl(e.objectStore("SWHealthLog"),{},function(f){if(f.ha().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Jn(a){var b;return x(function(c){if(1==c.g)return w(c,Hn(a),2);b=c.h;return w(c,b.clear("SWHealthLog"),0)})}
;var Kn={},Ln=0;function Mn(a){var b=new Image,c=""+Ln++;Kn[c]=b;b.onload=b.onerror=function(){delete Kn[c]};
b.src=a}
;function Nn(){this.g=new Map;this.h=!1}
function On(){if(!Nn.g){var a=B("yt.networkRequestMonitor.instance")||new Nn;C("yt.networkRequestMonitor.instance",a);Nn.g=a}return Nn.g}
Nn.prototype.requestComplete=function(a,b){b&&(this.h=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
Nn.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:!1===a&&this.h?!0:null};
Nn.prototype.removeParams=function(a){return a.split("?")[0]};
Nn.prototype.removeParams=Nn.prototype.removeParams;Nn.prototype.isEndpointCFR=Nn.prototype.isEndpointCFR;Nn.prototype.requestComplete=Nn.prototype.requestComplete;Nn.getInstance=On;var Pn;function Qn(){Pn||(Pn=new lk("yt.offline"));return Pn}
function Rn(a){if(U("offline_error_handling")){var b=Qn().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Qn().set("errors",b,2592E3,!0)}}
;function Z(){Oe.call(this);var a=this;this.l=!1;this.h=Ue();this.h.Ga("networkstatus-online",function(){if(a.l&&U("offline_error_handling")){var b=Qn().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new dk(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Wi(d)}Qn().set("errors",{},2592E3,!0)}}})}
v(Z,Oe);function Sn(){if(!Z.g){var a=B("yt.networkStatusManager.instance")||new Z;C("yt.networkStatusManager.instance",a);Z.g=a}return Z.g}
q=Z.prototype;q.ba=function(){return this.h.ba()};
q.Ia=function(a){this.h.h=a};
q.Rc=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
q.Nc=function(){this.l=!0};
q.Ga=function(a,b){return this.h.Ga(a,b)};
q.Ab=function(a){a=Se(this.h,a);a.then(function(b){U("use_cfr_monitor")&&On().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.Ab;Z.prototype.listen=Z.prototype.Ga;Z.prototype.enableErrorFlushing=Z.prototype.Nc;Z.prototype.getWindowStatus=Z.prototype.Rc;Z.prototype.networkStatusHint=Z.prototype.Ia;Z.prototype.isNetworkAvailable=Z.prototype.ba;Z.getInstance=Sn;function Tn(a){a=void 0===a?{}:a;Oe.call(this);var b=this;this.h=this.G=0;this.l=Sn();var c=B("yt.networkStatusManager.instance.listen").bind(this.l);c&&(a.zb?(this.zb=a.zb,c("networkstatus-online",function(){Un(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Un(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Pe(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Pe(b,"publicytnetworkstatus-offline")})))}
v(Tn,Oe);Tn.prototype.ba=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.l)():!0};
Tn.prototype.Ia=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.l);b&&b(a)};
Tn.prototype.Ab=function(a){var b=this,c;return x(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.l);return U("skip_network_check_if_cfr")&&On().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.Ia((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ba())})):c?d.return(c(a)):d.return(!0)})};
function Un(a,b){a.zb?a.h?(Ve.Na(a.G),a.G=Ve.oa(function(){a.v!==b&&(Pe(a,b),a.v=b,a.h=Y())},a.zb-(Y()-a.h))):(Pe(a,b),a.v=b,a.h=Y()):Pe(a,b)}
;var Vn;function Wn(){var a=jn.call;Vn||(Vn=new Tn({Vd:!0,Ud:!0}));a.call(jn,this,{M:{Kc:Cn,Oa:Bn,Yb:yn,bd:zn,Mb:An,set:wn},O:Vn,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;Xi(new dk(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else Wi(b)},
Pa:Xi,va:Xn,now:Y,zc:Rn,fa:kk(),Lb:"publicytnetworkstatus-online",Kb:"publicytnetworkstatus-offline",tb:!0,rb:.1,yb:W("potential_esf_error_limit",10),I:U,cb:!(ek()&&"www.youtube-nocookie.com"!==Zb(document.location.toString()))});this.i=new Uf;U("networkless_immediately_drop_all_requests")&&Dn();sm("LogsDatabaseV2")}
v(Wn,jn);function Yn(){var a=B("yt.networklessRequestController.instance");a||(a=new Wn,C("yt.networklessRequestController.instance",a),U("networkless_logging")&&km().then(function(b){a.H=b;ln(a);a.i.resolve();a.tb&&Math.random()<=a.rb&&a.H&&In(a.H);U("networkless_immediately_drop_sw_health_store")&&Zn(a)}));
return a}
Wn.prototype.writeThenSend=function(a,b){b||(b={});ek()||(this.g=!1);jn.prototype.writeThenSend.call(this,a,b)};
Wn.prototype.sendThenWrite=function(a,b,c){b||(b={});ek()||(this.g=!1);jn.prototype.sendThenWrite.call(this,a,b,c)};
Wn.prototype.sendAndWrite=function(a,b){b||(b={});ek()||(this.g=!1);jn.prototype.sendAndWrite.call(this,a,b)};
Wn.prototype.awaitInitialization=function(){return this.i.promise};
function Zn(a){var b;x(function(c){if(!a.H)throw b=Fk("clearSWHealthLogsDb"),b;return c.return(Jn(a.H).catch(function(d){a.handleError(d)}))})}
function Xn(a,b,c){b=U("web_fp_via_jspb")?Object.assign({},b):b;U("use_cfr_monitor")&&$n(a,b);if(U("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(Y())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;if(a)if(e)Ej(a,void 0,"POST",e);else if(S("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Ej(a,void 0,"GET","",void 0,void 0,f);else{b:{try{var g=
new bb({url:a});if(g.i&&g.h||g.l){var h=Yb(a.match(Xb)[5]||null);var k=!(!h||!h.endsWith("/aclk")||"1"!==dc(a,"ri"));break b}}catch(m){}k=!1}if(k){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var l=!0;break b}}catch(m){}l=!1}c=l?!0:!1}else c=!1;c||Mn(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),an(a,b.postBody,b,Bj)):an(a,JSON.stringify(b.postParams),b,Jj):Bj(a,b)}
function $n(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){On().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){On().requestComplete(a,!0);d(e,f)}}
;var ao=z.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};C("ytNetworklessLoggingInitializationOptions",ao);function bo(a){var b=this;this.config_=null;a?this.config_=a:Hm()&&(this.config_=Im());hk(function(){gn(b)},5E3)}
bo.prototype.isReady=function(){!this.config_&&Hm()&&(this.config_=Im());return!!this.config_};
function hn(a,b,c,d){function e(y){y=void 0===y?!1:y;var A;if(d.retry&&"www.youtube-nocookie.com"!=h&&(y||U("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(A=en(b,c,l,k)),A)){var H=g.onSuccess,O=g.onFetchSuccess;g.onSuccess=function(Q,ya){fn(A);H(Q,ya)};
c.onFetchSuccess=function(Q,ya){fn(A);O(Q,ya)}}try{if(y&&d.retry&&!d.kc.bypassNetworkless)g.method="POST",d.kc.writeThenSend?Yn().writeThenSend(p,g):Yn().sendAndWrite(p,g);
else if(d.compress)if(g.postBody){var T=g.postBody;"string"!==typeof T&&(T=JSON.stringify(g.postBody));an(p,T,g,Bj)}else an(p,JSON.stringify(g.postParams),g,Jj);else U("web_all_payloads_via_jspb")?Bj(p,g):Jj(p,g)}catch(Q){if("InvalidAccessError"==Q.name)A&&(fn(A),A=0),Xi(Error("An extension is blocking network request."));else throw Q;}A&&hk(function(){gn(a)},5E3)}
!S("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Xi(new dk("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new dk("innertube xhrclient not ready",b,c,d);Wi(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(y,A){if(d.onSuccess)d.onSuccess(A)},
onFetchSuccess:function(y){if(d.onSuccess)d.onSuccess(y)},
onError:function(y,A){if(d.onError)d.onError(A)},
onFetchError:function(y){if(d.onError)d.onError(y)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Xc)&&(h=f);var k=a.config_.Zc||!1,l=Rm(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.Vc+"/"+b,n={alt:"json"},r=a.config_.Yc&&f;r=r&&f.startsWith("Bearer");r||(n.key=a.config_.Uc);var p=qj(""+h+m,n||{},!0);B("ytNetworklessLoggingInitializationOptions")&&
ao.isNwlInitialized?im().then(function(y){e(y)}):e(!1)}
;function co(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var eo=z.ytPubsubPubsubInstance||new K,fo=z.ytPubsubPubsubSubscribedKeys||{},go=z.ytPubsubPubsubTopicToKeys||{},ho=z.ytPubsubPubsubIsSynchronous||{};K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.jb;K.prototype.publish=K.prototype.Wa;K.prototype.clear=K.prototype.clear;C("ytPubsubPubsubInstance",eo);C("ytPubsubPubsubTopicToKeys",go);C("ytPubsubPubsubIsSynchronous",ho);C("ytPubsubPubsubSubscribedKeys",fo);var io=Symbol("injectionDeps");function jo(){this.key=Em}
function ko(){this.h=new Map;this.g=new Map}
ko.prototype.resolve=function(a){return a instanceof jo?lo(this,a.key,[],!0):lo(this,a,[])};
function lo(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.g.has(b))return a.g.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.nd)var e=d.nd;else if(d.md)e=d[io]?mo(a,d[io],c):[],e=d.md.apply(d,ia(e));else if(d.ld){e=d.ld;var f=e[io]?mo(a,e[io],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ia(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.ae||a.g.set(b,e);return e}
function mo(a,b,c){return b?b.map(function(d){return d instanceof jo?lo(a,d.key,c,!0):lo(a,d,c)}):[]}
;var no;function oo(){no||(no=new ko);return no}
;function po(){this.store={};this.g={}}
po.prototype.storePayload=function(a,b){a=qo(a);this.store[a]?this.store[a].push(b):(this.g={},this.store[a]=[b]);return a};
po.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=ro(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ia(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ia(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ia(this.smartExtractMatchingEntries(a))));return c};
po.prototype.extractMatchingEntries=function(a){a=ro(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ia(this.store[a[c]])),delete this.store[a[c]]);return b};
po.prototype.getSequenceCount=function(a){a=ro(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function ro(a,b){var c=qo(b);if(a.g[c])return a.g[c];var d=Object.keys(a.store)||[];if(1>=d.length&&qo(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(so(b.auth,g[0])){var h=b.isJspb;so(void 0===h?"undefined":h?"true":"false",g[1])&&so(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),so(h,g[3])&&e.push(d[f]))}}return a.g[c]=e}
function so(a,b){return void 0===a||"undefined"===a?!0:a===b}
po.prototype.getSequenceCount=po.prototype.getSequenceCount;po.prototype.extractMatchingEntries=po.prototype.extractMatchingEntries;po.prototype.smartExtractMatchingEntries=po.prototype.smartExtractMatchingEntries;po.prototype.storePayload=po.prototype.storePayload;function qo(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;var to=W("initial_gel_batch_timeout",2E3),uo=W("gel_queue_timeout_max_ms",6E4),vo=Math.pow(2,16)-1,wo=void 0;function xo(){this.i=this.g=this.h=0}
var yo=new xo,zo=new xo,Ao=new xo,Bo=new xo,Co,Do=!0,Eo=z.ytLoggingTransportTokensToCttTargetIds_||{};C("ytLoggingTransportTokensToCttTargetIds_",Eo);var Fo=z.ytLoggingTransportTokensToJspbCttTargetIds_||{};C("ytLoggingTransportTokensToJspbCttTargetIds_",Fo);var Go={};function Ho(){var a=B("yt.logging.ims");a||(a=new po,C("yt.logging.ims",a));return a}
function Io(a,b){if("log_event"===a.endpoint){Jo(a);var c=Ko(a);a:{var d=Object.keys(a.payload);d=u(d);for(var e=d.next();!e.done;e=d.next())if(e=e.value,En[e]){d=e;break a}d=void 0}d=Lo(d||"");400===d?Mo(a,b):(Go[c]=!0,d={cttAuthInfo:c,isJspb:!1,tier:d},Ho().storePayload(d,a.payload),No(b,c,!1,d))}}
function Oo(a,b,c){if("log_event"===b.endpoint){Jo(void 0,b);var d=Ko(b,!0),e=Lo(a);400===e?Po(a,b,c):(Go[d]=!0,a={cttAuthInfo:d,isJspb:!0,tier:e},Ho().storePayload(a,b.payload.toJSON()),No(c,d,!0,a))}}
function No(a,b,c,d){function e(){Qo({writeThenSend:!0},U("flush_only_full_queue")?b:void 0,c,d.tier)}
c=void 0===c?!1:c;a&&(wo=new a);a=Ro();var f=Y(),g=So(c,d.tier),h=g.i,k=0;d&&(k=Ho().getSequenceCount(d));1E3<=k&&U("web_logging_max_batch_hard_limit")?e():k>=a?Co||(Co=To(function(){e();Co=void 0},0)):10<=f-h&&(Uo(c,d.tier),g.i=f)}
function Mo(a,b){if("log_event"===a.endpoint){Jo(a);var c=Ko(a),d=new Map;d.set(c,[a.payload]);b&&(wo=new b);return new Vf(function(e,f){wo&&wo.isReady()?Vo(d,wo,e,f,{bypassNetworkless:!0},!0):e()})}}
function Po(a,b,c){if("log_event"===b.endpoint){Jo(void 0,b);a=Ko(b,!0);var d=new Map;d.set(a,[b.payload.toJSON()]);c&&(wo=new c);return new Vf(function(e){wo&&wo.isReady()?Wo(d,wo,e,{bypassNetworkless:!0},!0):e()})}}
function Ko(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Ki;c.videoId?gd(d,1,pd,c.videoId):c.playlistId&&gd(d,2,pd,c.playlistId);Fo[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Eo[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Qo(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new Vf(function(e,f){var g=So(c,d);Xo(g.h);Xo(g.g);g.g=0;wo&&wo.isReady()?void 0===d&&U("enable_web_tiered_gel")?(Yo(e,f,a,b,c,300),Yo(e,f,a,b,c,200)):Yo(e,f,a,b,c,d):(Uo(c,d),e())})}
function Yo(a,b,c,d,e,f){var g=wo;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;var h=new Map,k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f},m={isJspb:e,cttAuthInfo:d};if(void 0!==d)e?(b=U("enable_web_tiered_gel")?Ho().smartExtractMatchingEntries({keys:[l,m],sizeLimit:Ro()}):Ho().extractMatchingEntries(m),h.set(d,b),Wo(h,g,a,c)):(h=U("enable_web_tiered_gel")?Ho().smartExtractMatchingEntries({keys:[l,m],sizeLimit:Ro()}):Ho().extractMatchingEntries(m),k.set(d,h),Vo(k,g,a,b,c));else if(e){b=u(Object.keys(Go));
for(d=b.next();!d.done;d=b.next())k=d.value,f=U("enable_web_tiered_gel")?Ho().smartExtractMatchingEntries({keys:[l,m],sizeLimit:Ro()}):Ho().extractMatchingEntries({isJspb:!0,cttAuthInfo:k}),0<f.length&&h.set(k,f),(U("web_fp_via_jspb_and_json")&&c.writeThenSend||!U("web_fp_via_jspb_and_json"))&&delete Go[k];Wo(h,g,a,c)}else{h=u(Object.keys(Go));for(d=h.next();!d.done;d=h.next())l=d.value,m=U("enable_web_tiered_gel")?Ho().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},{isJspb:!1,
cttAuthInfo:l}],sizeLimit:Ro()}):Ho().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),0<m.length&&k.set(l,m),(U("web_fp_via_jspb_and_json")&&c.writeThenSend||!U("web_fp_via_jspb_and_json"))&&delete Go[l];Vo(k,g,a,b,c)}}
function Uo(a,b){a=void 0===a?!1:a;b=void 0===b?200:b;var c=So(a,b),d=c===Bo||c===Ao?5E3:uo;U("web_gel_timeout_cap")&&!c.g&&(d=To(function(){Qo({writeThenSend:!0},void 0,a,b)},d),c.g=d);
Xo(c.h);d=S("LOGGING_BATCH_TIMEOUT",W("web_gel_debounce_ms",1E4));U("shorten_initial_gel_batch_timeout")&&Do&&(d=to);d=To(function(){Qo({writeThenSend:!0},void 0,a,b)},d);
c.h=d}
function Vo(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(Y()),h=a.size,k={};a=u(a);for(var l=a.next();!l.done;k={lb:k.lb,Da:k.Da,Ya:k.Ya,nb:k.nb,mb:k.mb},l=a.next()){var m=u(l.value);l=m.next().value;m=m.next().value;k.Da=ob({context:Jm(b.config_||Im())});if(!Pa(m)&&!U("throw_err_when_logevent_malformed_killswitch")){d();break}k.Da.events=m;(m=Eo[l])&&Zo(k.Da,l,m);delete Eo[l];k.Ya="visitorOnlyApprovedKey"===l;$o(k.Da,g,k.Ya);ap(e);k.nb=function(n){U("update_log_event_config")&&Ve.oa(function(){return x(function(r){return w(r,
bp(n),0)})});
h--;h||c()};
k.lb=0;k.mb=function(n){return function(){n.lb++;if(e.bypassNetworkless&&1===n.lb)try{hn(b,"log_event",n.Da,cp({writeThenSend:!0},n.Ya,n.nb,n.mb,f)),Do=!1}catch(r){Wi(r),d()}h--;h||c()}}(k);
try{hn(b,"log_event",k.Da,cp(e,k.Ya,k.nb,k.mb,f)),Do=!1}catch(n){Wi(n),d()}}}
function Wo(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(Y()),g=a.size,h=new Map([].concat(ia(a)));h=u(h);for(var k=h.next();!k.done;k=h.next()){var l=u(k.value).next().value,m=a.get(l);k=new Li;var n=Qm(b.config_||Im());I(k,ti,1,n);m=m?dp(m):[];m=u(m);for(n=m.next();!n.done;n=m.next())md(k,3,Hi,n.value);(m=Fo[l])&&ep(k,l,m);delete Fo[l];l="visitorOnlyApprovedKey"===l;fp(k,f,l);ap(d);m={startTime:Y(),ticks:{},infos:{}};k=zd(k);m.ticks.geljspc=Y();U("log_jspb_serialize_latency")&&Tm("gel_jspb_serialize",
m,{sampleRate:.1});l=cp(d,l,function(r){U("update_log_event_config")&&Ve.oa(function(){return x(function(p){return w(p,bp(r),0)})});
g--;g||c()},function(){g--;
g||c()},e);
l.headers["Content-Type"]="application/json+protobuf";l.postBodyFormat="JSPB";l.postBody=k;hn(b,"log_event","",l);Do=!1}}
function ap(a){U("always_send_and_write")&&(a.writeThenSend=!1)}
function cp(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,kc:a,dangerousLogToVisitorSession:b,Td:!!e,headers:{},postBodyFormat:"",postBody:"",compress:U("compress_gel")||U("compress_gel_lr")};gp()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));return a}
function $o(a,b,c){gp()||(a.requestTimeMs=String(b));U("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=S("EVENT_ID"))&&(c=hp(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function fp(a,b,c){gp()||G(a,2,b);if(!c&&(b=S("EVENT_ID"))){c=hp();var d=new Ji;G(d,1,b);G(d,2,c);I(a,Ji,5,d)}}
function hp(){var a=S("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*vo/2));a++;a>vo&&(a=1);Qi("BATCH_CLIENT_COUNTER",a);return a}
function Zo(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function ep(a,b,c){if(od(c,1))var d=1;else if(c.getPlaylistId())d=2;else return;I(a,Ki,4,c);a=jd(a,ti,1)||new ti;c=jd(a,si,3)||new si;var e=new ri;G(e,2,b);G(e,1,d);md(c,12,ri,e);I(a,si,3,c)}
function dp(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new Hi(a[c]))}catch(d){Wi(new dk("Transport failed to deserialize "+String(a[c])))}return b}
function Jo(a,b){if(B("yt.logging.transport.enableScrapingForTest")){var c=B("yt.logging.transport.scrapedPayloadsForTesting"),d=B("yt.logging.transport.payloadToScrape");b&&(b=B("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);if(d&&1<=d.length)for(b=0;b<d.length;b++)if(a&&a.payload[d[b]]){var e=void 0;c.push((null==(e=a)?void 0:e.payload)[d[b]])}C("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function gp(){return U("use_request_time_ms_header")||U("lr_use_request_time_ms_header")}
function To(a,b){return U("transport_use_scheduler")?hk(a,b):hj(a,b)}
function Xo(a){U("transport_use_scheduler")?Ve.Na(a):window.clearTimeout(a)}
function bp(a){var b,c,d,e,f,g,h,k,l,m;return x(function(n){if(1==n.g){d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup;var r=d?d[ii.name]:void 0;e=r;g=null==(f=d)?void 0:f.hotHashData;r=d?d[hi.name]:void 0;h=r;l=null==(k=d)?void 0:k.coldHashData;return(m=oo().resolve(new jo))?g?e?w(n,Fm(m,g,e),2):w(n,Fm(m,g),2):n.C(2):n.return()}return l?h?w(n,Gm(m,l,h),0):w(n,Gm(m,l),0):n.C(0)})}
function So(a,b){b=void 0===b?200:b;return a?300===b?Bo:zo:300===b?Ao:yo}
function Ro(){return W("tvhtml5_logging_max_batch_ads_fork")||W("web_logging_max_batch")||100}
function Lo(a){if(U("enable_web_tiered_gel")){a=En[a||""];var b,c;if(null==oo().resolve(new jo))var d=void 0;else{var e=null!=(d=B("yt.gcf.config.hotConfigGroup"))?d:null;d=null==e?void 0:null==(b=e.loggingHotConfig)?void 0:null==(c=b.eventLoggingConfig)?void 0:c.payloadPolicies}if(b=d)for(c=0;c<b.length;c++)if(b[c].payloadNumber===a)return b[c].tier;return 200}}
;var ip=z.ytLoggingGelSequenceIdObj_||{};C("ytLoggingGelSequenceIdObj_",ip);
function jp(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||Y());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=co();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};U("log_sequence_info_on_gel_web")&&d.sequenceGroup&&(a=e.context,b=d.sequenceGroup,b={index:kp(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete ip[d.sequenceGroup]);(d.sendIsolatedPayload?Mo:Io)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
function lp(a){Qo(void 0,void 0,void 0===a?!1:a)}
function kp(a){ip[a]=a in ip?ip[a]+1:0;return ip[a]}
;var mp=[];function np(a,b,c){c=void 0===c?{}:c;var d=bo;S("ytLoggingEventsDefaultDisabled",!1)&&bo===bo&&(d=null);U("web_all_payloads_via_jspb")?(c.timestamp||(c.lact=co(),c.timestamp=Y()),mp.push({mc:a,payload:b,options:c})):jp(a,b,d,c)}
;var op=z.ytLoggingGelSequenceIdObj_||{};C("ytLoggingGelSequenceIdObj_",op);function pp(a,b){var c=void 0;c=void 0===c?{}:c;var d=!1;S("ytLoggingEventsDefaultDisabled",!1)&&(d=!0);d=d?null:bo;c=void 0===c?{}:c;var e=Math.round(c.timestamp||Y());G(b,1,e<Number.MAX_SAFE_INTEGER?e:0);e=new Gi;if(c.lact)G(e,1,isFinite(c.lact)?c.lact:-1);else if(c.timestamp)G(e,1,-1);else{var f=co();G(e,1,isFinite(f)?f:-1)}if(U("log_sequence_info_on_gel_web")&&c.sequenceGroup){f=c.sequenceGroup;var g=kp(f),h=new Fi;G(h,2,g);G(h,1,f);I(e,Fi,3,h);c.endOfSequence&&delete op[c.sequenceGroup]}I(b,
Gi,33,e);(c.sendIsolatedPayload?Po:Oo)(a,{endpoint:"log_event",payload:b,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},d)}
;var qp=new Set,rp=0,sp=0,tp=0,up=[],vp=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function wp(a){try{qp.add(a.message)}catch(b){}rp++}
function xp(){for(var a=u(vp),b=a.next();!b.done;b=a.next()){var c=Ob();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
function yp(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:S("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=u(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=Ri())for(b=u(Object.keys(c)),d=b.next();!d.done;d=b.next())d=
d.value,a.postParams[d]=c[d];c=S("SERVER_NAME");b=S("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Bj(S("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function zp(){var a;return x(function(b){return(a=of())?b.return(a.then(function(c){c=zd(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return Ec(d,3)})):b.return(Promise.resolve(null))})}
;var Ap={};function Bp(a){return Ap[a]||(Ap[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Cp={},Dp=[],lg=new K,Ep={};function Fp(){for(var a=u(Dp),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Gp(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Bp(b)]:a.getAttribute("data-"+b):null;return c}
function Hp(a){lg.Wa.apply(lg,arguments)}
;function Ip(a){this.g=a||{};a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Jp(a,b){a=[a.g,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Kp(a,b,c){Lp||(Lp={},Mp=new Set,gj(window,"message",function(d){a:if(Mp.has(d.origin)){try{var e=JSON.parse(d.data)}catch(g){break a}var f=Lp[e.id];f&&d.origin===f.Gc&&(d=f.od,d.G=!0,d.G&&(D(d.v,d.sendMessage,d),d.v.length=0),d.Qb(e))}}));
a=String(Jp(a,"host"));Lp[c]={od:b,Gc:a};Mp.add(a)}
var Lp=null,Mp=null;var Np=window;
function Op(a,b,c){this.s=this.g=this.h=null;this.i=0;this.G=!1;this.v=[];this.l=null;this.aa={};if(!a)throw Error("YouTube player element ID required.");this.id=Ra(this);this.P=c;c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?$b(a.src):"https://www.youtube.com"),this.h=new Ip(b),c||(b=Pp(this,a),this.s=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.g=a,this.g.id||(this.g.id="widget"+Ra(this.g)),Cp[this.g.id]=this,window.postMessage){this.l=
new K;Qp(this);b=Jp(this.h,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Ep)Ep.hasOwnProperty(e)&&Rp(this,e)}}
q=Op.prototype;q.setSize=function(a,b){this.g.width=a.toString();this.g.height=b.toString();return this};
q.getIframe=function(){return this.g};
q.Qb=function(a){Sp(this,a.event,a)};
q.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);Tp(this,a);return this};
function Rp(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.P===b[0]&&Tp(a,c)}}
q.destroy=function(){this.g&&this.g.id&&(Cp[this.g.id]=null);var a=this.l;a&&"function"==typeof a.dispose&&a.dispose();if(this.s){a=this.g;var b=a.parentNode;b&&b.replaceChild(this.s,a)}else(a=this.g)&&a.parentNode&&a.parentNode.removeChild(a);Lp&&(Lp[this.id]=null);this.h=null;a=this.g;for(var c in mb)mb[c][0]==a&&ej(c);this.s=this.g=null};
q.Ub=function(){return{}};
function Up(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.G?a.sendMessage(b):a.v.push(b)}
function Sp(a,b,c){a.l.i||(c={target:a,data:c},a.l.Wa(b,c),Hp(a.P+"."+b,c))}
function Pp(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");c.setAttribute("title","YouTube "+Jp(a.h,"title"));(b=Jp(a.h,"width"))&&c.setAttribute("width",b.toString());(b=Jp(a.h,"height"))&&
c.setAttribute("height",b.toString());var g=a.Ub();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&D(["debugjs","debugcss"],function(k){var l=dc(window.location.href,k);null!==l&&(g[k]=l)});
var h=""+Jp(a.h,"host")+("/embed/"+Jp(a.h,"videoId"))+"?"+bc(g);Np.yt_embedsEnableUaChProbe?zp().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=Od(l.href).toString();Kd(c,Pd(k));c.sandbox.add("allow-presentation","allow-top-navigation");return k}):Np.yt_embedsEnableIframeSrcWithIntent?(Kd(c,Pd(h)),
c.sandbox.add("allow-presentation","allow-top-navigation")):c.src=h;
return c}
q.nc=function(){this.g&&this.g.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.i)};
function Qp(a){Kp(a.h,a,a.id);a.i=ij(a.nc.bind(a));gj(a.g,"load",function(){window.clearInterval(a.i);a.i=ij(a.nc.bind(a))})}
function Tp(a,b){a.aa[b]||(a.aa[b]=!0,Up(a,"addEventListener",[b]))}
q.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[$b(this.g.src||"").replace("http:","https:")];if(this.g.contentWindow)for(var d=0;d<c.length;d++)try{this.g.contentWindow.postMessage(b,c[d])}catch(fc){if(fc.name&&"SyntaxError"===fc.name){if(!(fc.message&&0<fc.message.indexOf("target origin ''"))){var e=void 0,f=fc;e=void 0===e?{}:e;e.name=S("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=S("INNERTUBE_CONTEXT_CLIENT_VERSION");var g="WARNING",h=!1;g=void 0===g?"ERROR":
g;h=void 0===h?!1:h;if(f){f.hasOwnProperty("level")&&f.level&&(g=f.level);if(U("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=rp)){var m=void 0,n=void 0,r=f,p=e,y=Ed(r),A=y.message||"Unknown Error",
H=y.name||"UnknownError",O=y.stack||r.h||"Not available";if(O.startsWith(H+": "+A)){var T=O.split("\n");T.shift();O=T.join("\n")}var Q=y.lineNumber||"Not available",ya=y.fileName||"Not available",Ic=O,La=0;if(r.hasOwnProperty("args")&&r.args&&r.args.length)for(var za=0;za<r.args.length&&!(La=Tj(r.args[za],"params."+za,p,La),500<=La);za++);else if(r.hasOwnProperty("params")&&r.params){var ba=r.params;if("object"===typeof r.params)for(n in ba){if(ba[n]){var ja="params."+n,ka=Vj(ba[n]);p[ja]=ka;La+=
ja.length+ka.length;if(500<La)break}}else p.params=Vj(ba)}if(up.length)for(var aa=0;aa<up.length&&!(La=Tj(up[aa],"params.context."+aa,p,La),500<=La);aa++);navigator.vendor&&!p.hasOwnProperty("vendor")&&(p["device.vendor"]=navigator.vendor);var V={message:A,name:H,lineNumber:Q,fileName:ya,stack:Ic,params:p,sampleWeight:1},ml=Number(r.columnNumber);isNaN(ml)||(V.lineNumber=V.lineNumber+":"+ml);if("IGNORED"===r.level)m=0;else a:{for(var nl=Pj(),ol=u(nl.za),Og=ol.next();!Og.done;Og=ol.next()){var pl=
Og.value;if(V.message&&V.message.match(pl.Wd)){m=pl.weight;break a}}for(var ql=u(nl.wa),Pg=ql.next();!Pg.done;Pg=ql.next()){var rl=Pg.value;if(rl.Jc(V)){m=rl.weight;break a}}m=1}V.sampleWeight=m;for(var sl=u(Kj),Qg=sl.next();!Qg.done;Qg=sl.next()){var Rg=Qg.value;if(Rg.xb[V.name])for(var tl=u(Rg.xb[V.name]),Sg=tl.next();!Sg.done;Sg=tl.next()){var ul=Sg.value,me=V.message.match(ul.regexp);if(me){V.params["params.error.original"]=me[0];for(var Tg=ul.groups,vl={},gc=0;gc<Tg.length;gc++)vl[Tg[gc]]=me[gc+
1],V.params["params.error."+Tg[gc]]=me[gc+1];V.message=Rg.Ib(vl);break}}}V.params||(V.params={});var wl=Pj();V.params["params.errorServiceSignature"]="msg="+wl.za.length+"&cb="+wl.wa.length;V.params["params.serviceWorker"]="false";z.document&&z.document.querySelectorAll&&(V.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));tb("sample").constructor!==sb&&(V.params["params.fconst"]="true");var Yc=V;window.yterr&&"function"===typeof window.yterr&&window.yterr(Yc);
if(0!==Yc.sampleWeight&&!qp.has(Yc.message))if(h&&U("web_enable_error_204")){var xl=Yc;yp(void 0===g?"ERROR":g,xl);wp(xl)}else{var Ug=void 0,Vg=void 0,yl=void 0,zl=void 0,Wg=void 0,M=Yc,Ab=g;Ab=void 0===Ab?"ERROR":Ab;if("ERROR"===Ab){Qj.Wa("handleError",M);if(U("record_app_crashed_web")&&0===tp&&1===M.sampleWeight)if(tp++,U("errors_via_jspb")){var $p=new Ei;Wg=G($p,1,1);if(!U("report_client_error_with_app_crash_ks")){var aq=new Di,bq=new Ci,cq=new Bi,dq=new Ai;var eq=G(dq,1,M.message);var fq=I(cq,
Ai,3,eq);zl=I(bq,Bi,5,fq);yl=I(aq,Ci,9,zl);I(Wg,Di,4,yl)}var Al=U("jspb_sparse_encoded_pivot")?new Hi([{}]):new Hi;ld(Al,Ei,20,Ii,Wg);pp("appCrashed",Al)}else{var Bl={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};U("report_client_error_with_app_crash_ks")||(Bl.systemHealth={crashData:{clientError:{logMessage:{message:M.message}}}});np("appCrashed",Bl)}sp++}else"WARNING"===Ab&&Qj.Wa("handleWarning",M);if(U("kevlar_gel_error_routing"))a:{var Zc=Ab;if(U("errors_via_jspb")){if(xp())Vg=void 0;else{var hc=new xi;
G(hc,1,M.stack);M.fileName&&G(hc,4,M.fileName);var Va=M.lineNumber&&M.lineNumber.split?M.lineNumber.split(":"):[];if(0!==Va.length)if(1===Va.length&&!isNaN(Number(Va[0]))){var gq=hc,Cl=Number(Va[0]);Oa(Cl);G(gq,2,Cl)}else if(2===Va.length&&!isNaN(Number(Va[0]))&&!isNaN(Number(Va[1]))){var hq=hc,Dl=Number(Va[0]);Oa(Dl);G(hq,2,Dl);var iq=hc,El=Number(Va[1]);Oa(El);G(iq,3,El)}var Bb=new Ai;G(Bb,1,M.message);G(Bb,3,M.name);var jq=Bb,Fl=M.sampleWeight;Oa(Fl);G(jq,6,Fl);"ERROR"===Zc?G(Bb,2,2):"WARNING"===
Zc?G(Bb,2,1):G(Bb,2,0);var Xg=new yi;G(Xg,1,!0);ld(Xg,xi,3,zi,hc);var Cb=new wi;G(Cb,3,window.location.href);for(var Gl=S("FEXP_EXPERIMENTS",[]),Yg=0;Yg<Gl.length;Yg++){var kq=Gl[Yg],Zg=Cb.J,ne=F(Zg);Wc(ne);fd(Zg,ne,5,2,!1).push(kq);ne&512&&Lc(Zg,ne&-513)}var $g=Ri();if(!Si()&&$g)for(var Hl=u(Object.keys($g)),Db=Hl.next();!Db.done;Db=Hl.next()){var Il=Db.value,ah=new vi;G(ah,1,Il);G(ah,2,String($g[Il]));md(Cb,4,vi,ah)}var bh=M.params;if(bh){var Jl=u(Object.keys(bh));for(Db=Jl.next();!Db.done;Db=Jl.next()){var Kl=
Db.value,ch=new vi;G(ch,1,"client."+Kl);G(ch,2,String(bh[Kl]));md(Cb,4,vi,ch)}}var Ll=S("SERVER_NAME"),Ml=S("SERVER_VERSION");if(Ll&&Ml){var dh=new vi;G(dh,1,"server.name");G(dh,2,Ll);md(Cb,4,vi,dh);var eh=new vi;G(eh,1,"server.version");G(eh,2,Ml);md(Cb,4,vi,eh)}var oe=new Bi;I(oe,wi,1,Cb);I(oe,yi,2,Xg);I(oe,Ai,3,Bb);Vg=oe}var Nl=Vg;if(!Nl)break a;var Ol=U("jspb_sparse_encoded_pivot")?new Hi([{}]):new Hi;ld(Ol,Bi,163,Ii,Nl);pp("clientError",Ol)}else{var Ca=void 0;Ca=void 0===Ca?{}:Ca;if(xp())Ug=
void 0;else{var $c={stackTrace:M.stack};M.fileName&&($c.filename=M.fileName);var Wa=M.lineNumber&&M.lineNumber.split?M.lineNumber.split(":"):[];0!==Wa.length&&(1!==Wa.length||isNaN(Number(Wa[0]))?2!==Wa.length||isNaN(Number(Wa[0]))||isNaN(Number(Wa[1]))||($c.lineNumber=Number(Wa[0]),$c.columnNumber=Number(Wa[1])):$c.lineNumber=Number(Wa[0]));var fh={level:"ERROR_LEVEL_UNKNOWN",message:M.message,errorClassName:M.name,sampleWeight:M.sampleWeight};"ERROR"===Zc?fh.level="ERROR_LEVEL_ERROR":"WARNING"===
Zc&&(fh.level="ERROR_LEVEL_WARNNING");var lq={isObfuscated:!0,browserStackInfo:$c};Ca.pageUrl=window.location.href;Ca.kvPairs=[];S("FEXP_EXPERIMENTS")&&(Ca.experimentIds=S("FEXP_EXPERIMENTS"));var gh=Ri();if(!Si()&&gh)for(var Pl=u(Object.keys(gh)),Eb=Pl.next();!Eb.done;Eb=Pl.next()){var Ql=Eb.value;Ca.kvPairs.push({key:Ql,value:String(gh[Ql])})}var hh=M.params;if(hh){var Rl=u(Object.keys(hh));for(Eb=Rl.next();!Eb.done;Eb=Rl.next()){var Sl=Eb.value;Ca.kvPairs.push({key:"client."+Sl,value:String(hh[Sl])})}}var Tl=
S("SERVER_NAME"),Ul=S("SERVER_VERSION");Tl&&Ul&&(Ca.kvPairs.push({key:"server.name",value:Tl}),Ca.kvPairs.push({key:"server.version",value:Ul}));Ug={errorMetadata:Ca,stackTrace:lq,logMessage:fh}}var Vl=Ug;if(!Vl)break a;np("clientError",Vl)}if("ERROR"===Zc||U("errors_flush_gel_always_killswitch"))b:{if(U("web_fp_via_jspb")){var pe=!0;pe=void 0===pe?!1:pe;var Wl=mp;mp=[];if(Wl)for(var Xl=u(Wl),ih=Xl.next();!ih.done;ih=Xl.next()){var ic=ih.value;pe?jp(ic.mc,ic.payload,bo,ic.options):np(ic.mc,ic.payload,
ic.options)}lp(!0);if(!U("web_fp_via_jspb_and_json"))break b}lp()}}U("suppress_error_204_logging")||yp(Ab,M);wp(M)}}}}}else throw fc;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Vp(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Wp(a){return 0===a.search("get")||0===a.search("is")}
;function Xp(a,b){Op.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.ja={};this.playerInfo={};this.videoTitle=""}
v(Xp,Op);q=Xp.prototype;q.Ub=function(){var a=Jp(this.h,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Jp(this.h,"embedConfig")){if(Qa(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
q.Qb=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Qa(a))for(var c in a)a.hasOwnProperty(c)&&(this.ja[c]=a[c]);break;case "infoDelivery":Yp(this,a);break;case "initialDelivery":Qa(a)&&(window.clearInterval(this.i),this.playerInfo={},this.ja={},Zp(this,a.apiInterface),Yp(this,a));break;default:Sp(this,b,a)}};
function Yp(a,b){if(Qa(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.g.setAttribute("title",b))):(a.videoTitle="",a.g.setAttribute("title","YouTube "+Jp(a.h,"title"))))}}
function Zp(a,b){D(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Vp(c)?this[c]=function(){this.playerInfo={};
this.ja={};Up(this,c,arguments);return this}:Wp(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Up(this,c,arguments);
return this})},a)}
q.getVideoEmbedCode=function(){var a=Jp(this.h,"host")+("/embed/"+Jp(this.h,"videoId")),b=Number(Jp(this.h,"width")),c=Number(Jp(this.h,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;a=Wb(a);d=Wb(null!=d?d:"YouTube video player");return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+(d+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')};
q.getOptions=function(a){return this.ja.namespaces?a?this.ja[a]?this.ja[a].options||[]:[]:this.ja.namespaces||[]:[]};
q.getOption=function(a,b){if(this.ja.namespaces&&a&&b&&this.ja[a])return this.ja[a][b]};
function mq(a){if("iframe"!==a.tagName.toLowerCase()){var b=Gp(a,"videoid");b&&(b={videoId:b,width:Gp(a,"width"),height:Gp(a,"height")},new Xp(a,b))}}
;C("YT.PlayerState.UNSTARTED",-1);C("YT.PlayerState.ENDED",0);C("YT.PlayerState.PLAYING",1);C("YT.PlayerState.PAUSED",2);C("YT.PlayerState.BUFFERING",3);C("YT.PlayerState.CUED",5);C("YT.get",function(a){return Cp[a]});
C("YT.scan",Fp);C("YT.subscribe",function(a,b,c){lg.subscribe(a,b,c);Ep[a]=!0;for(var d in Cp)Cp.hasOwnProperty(d)&&Rp(Cp[d],a)});
C("YT.unsubscribe",function(a,b,c){kg(a,b,c)});
C("YT.Player",Xp);Op.prototype.destroy=Op.prototype.destroy;Op.prototype.setSize=Op.prototype.setSize;Op.prototype.getIframe=Op.prototype.getIframe;Op.prototype.addEventListener=Op.prototype.addEventListener;Xp.prototype.getVideoEmbedCode=Xp.prototype.getVideoEmbedCode;Xp.prototype.getOptions=Xp.prototype.getOptions;Xp.prototype.getOption=Xp.prototype.getOption;
Dp.push(function(a){var b=a;b||(b=document);a=ib(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=eb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=ib(b);D(hb(a,b),mq)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Fp();var nq=z.onYTReady;nq&&nq();var oq=z.onYouTubeIframeAPIReady;oq&&oq();var pq=z.onYouTubePlayerAPIReady;pq&&pq();}).call(this);
