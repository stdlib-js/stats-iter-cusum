// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).itercusum=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,l=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var c,a,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(f.call(t,e)||l.call(t,e)?(c=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=c):t[e]=r.value),y="get"in r,p="set"in r,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,e,r.get),p&&i&&i.call(t,e,r.set),t};var c=e;function a(t,e,r){c(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var y=/./;function p(t){return"boolean"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function m(t,e){return null!=t&&v.call(t,e)}var g="function"==typeof Symbol?Symbol.toStringTag:"";var _=s()?function(t){var e,r,n;if(null==t)return d.call(t);r=t[g],e=m(t,g);try{t[g]=void 0}catch(e){return d.call(t)}return n=d.call(t),e?t[g]=r:delete t[g],n}:function(t){return d.call(t)},w=Boolean.prototype.toString;var j=s();function h(t){return"object"==typeof t&&(t instanceof Boolean||(j?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===_(t)))}function S(t){return p(t)||h(t)}function A(){return new Function("return this;")()}a(S,"isPrimitive",p),a(S,"isObject",h);var E="object"==typeof self?self:null,O="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},x="object"==typeof T?T:null;var B=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return A()}if(E)return E;if(O)return O;if(x)return x;throw new Error("unexpected error. Unable to resolve global object.")}(),P=B.document&&B.document.childNodes,C=Int8Array;function V(){return/^\s*function\s*([^(]*)/i}var k=/^\s*function\s*([^(]*)/i;a(V,"REGEXP",k);var G=Array.isArray?Array.isArray:function(t){return"[object Array]"===_(t)};function L(t){return null!==t&&"object"==typeof t}function M(t){var e,r,n,o;if(("Object"===(r=_(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=k.exec(n.toString()))return e[1]}return L(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(L,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!G(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(L));var N="function"==typeof y||"object"==typeof C||"function"==typeof P?function(t){return M(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?M(t).toLowerCase():e};function F(t){return"function"===N(t)}var I="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function R(t){return Math.abs(t)}return function t(e){var r,n,o,u,i;if(i=typeof(u=e),null===u||"object"!==i&&"function"!==i||!F(u.next))throw new TypeError(function(){var t,e=arguments,r="https://stdlib.io/e/"+e[0]+"?";for(t=1;t<e.length;t++)r+="&arg[]="+encodeURIComponent(e[t]);return r}("0fA49",e));return o=function(){var t,e,r,n,o,u,i;return t=0,e=0,n=0,function(f){return 0===arguments.length?r?t+n+e:null:(r=!0,u=t+f,i=R(t)>=R(f)?t-u+f:f-u+t,t=u,u=n+i,o=R(n)>=R(i)?n-u+i:i-u+n,t+(n=u)+(e+=o))}}(),a(r={},"next",(function(){var t;if(n)return{done:!0};if((t=e.next()).done)return n=!0,t;t="number"==typeof t.value?o(t.value):o(NaN);return{value:t,done:!1}})),a(r,"return",(function(t){if(n=!0,arguments.length)return{value:t,done:!0};return{done:!0}})),I&&F(e[I])&&a(r,I,(function(){return t(e[I]())})),r}}));
//# sourceMappingURL=index.js.map
