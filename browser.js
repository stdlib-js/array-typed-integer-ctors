// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),r=Object.prototype.toString,o=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol:void 0,i="function"==typeof e?e.toStringTag:"",f=t&&"symbol"==typeof Symbol.toStringTag?function(n){var t,e,f,y,a;if(null==n)return r.call(n);e=n[i],a=i,t=null!=(y=n)&&o.call(y,a);try{n[i]=void 0}catch(t){return r.call(n)}return f=r.call(n),t?n[i]=e:delete n[i],f}:function(n){return r.call(n)},y="function"==typeof Int16Array,a="function"==typeof Int16Array?Int16Array:null,c="function"==typeof Int16Array?Int16Array:void 0,u=function(){var n,t,r;if("function"!=typeof a)return!1;try{t=new a([1,3.14,-3.14,32768]),r=t,n=(y&&r instanceof Int16Array||"[object Int16Array]"===f(r))&&1===t[0]&&3===t[1]&&-3===t[2]&&-32768===t[3]}catch(t){n=!1}return n}()?c:function(){throw new Error("not implemented")},l="function"==typeof Int32Array,p="function"==typeof Int32Array?Int32Array:null,A="function"==typeof Int32Array?Int32Array:void 0,d=function(){var n,t,r;if("function"!=typeof p)return!1;try{t=new p([1,3.14,-3.14,2147483648]),r=t,n=(l&&r instanceof Int32Array||"[object Int32Array]"===f(r))&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){n=!1}return n}()?A:function(){throw new Error("not implemented")},m="function"==typeof Int8Array,U="function"==typeof Int8Array?Int8Array:null,w="function"==typeof Int8Array?Int8Array:void 0,I=function(){var n,t,r;if("function"!=typeof U)return!1;try{t=new U([1,3.14,-3.14,128]),r=t,n=(m&&r instanceof Int8Array||"[object Int8Array]"===f(r))&&1===t[0]&&3===t[1]&&-3===t[2]&&-128===t[3]}catch(t){n=!1}return n}()?w:function(){throw new Error("not implemented")},v="function"==typeof Uint16Array,b="function"==typeof Uint16Array?Uint16Array:null,h="function"==typeof Uint16Array?Uint16Array:void 0,s=function(){var n,t,r;if("function"!=typeof b)return!1;try{t=new b(t=[1,3.14,-3.14,65536,65537]),r=t,n=(v&&r instanceof Uint16Array||"[object Uint16Array]"===f(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?h:function(){throw new Error("not implemented")},j="function"==typeof Uint32Array,S="function"==typeof Uint32Array?Uint32Array:null,g="function"==typeof Uint32Array?Uint32Array:void 0,C=function(){var n,t,r;if("function"!=typeof S)return!1;try{t=new S(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(j&&r instanceof Uint32Array||"[object Uint32Array]"===f(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?g:function(){throw new Error("not implemented")},E="function"==typeof Uint8Array,T="function"==typeof Uint8Array?Uint8Array:null,O="function"==typeof Uint8Array?Uint8Array:void 0;n=function(){var n,t,r;if("function"!=typeof T)return!1;try{t=new T(t=[1,3.14,-3.14,256,257]),r=t,n=(E&&r instanceof Uint8Array||"[object Uint8Array]"===f(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?O:function(){throw new Error("not implemented")};var x="function"==typeof Uint8ClampedArray,P="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,k="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,q={int16:u,int32:d,int8:I,uint16:s,uint32:C,uint8:n,uint8c:function(){var n,t,r;if("function"!=typeof P)return!1;try{t=new P([-1,0,1,3.14,4.99,255,256]),r=t,n=(x&&r instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===f(r))&&0===t[0]&&0===t[1]&&1===t[2]&&3===t[3]&&5===t[4]&&255===t[5]&&255===t[6]}catch(t){n=!1}return n}()?k:function(){throw new Error("not implemented")}};return function(n){return q[n]||null}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).ctors=t();
//# sourceMappingURL=browser.js.map
