"use strict";var d=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var s=d(function(b,v){
var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=require('@stdlib/assert-is-iterator-like/dist'),q=require('@stdlib/assert-is-function/dist'),n=require('@stdlib/symbol-iterator/dist'),p=require('@stdlib/stats-incr-sum/dist'),x=require('@stdlib/error-tools-fmtprodmsg/dist');function o(u){var r,t,i;if(!m(u))throw new TypeError(x('1KX3w',u));return i=p(),r={},a(r,"next",f),a(r,"return",c),n&&q(u[n])&&a(r,n,l),r;function f(){var e;return t?{done:!0}:(e=u.next(),e.done?(t=!0,e):(typeof e.value=="number"?e=i(e.value):e=i(NaN),{value:e,done:!1}))}function c(e){return t=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){return o(u[n]())}}v.exports=o
});var y=s();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
