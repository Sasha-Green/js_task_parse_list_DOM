parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function r(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})),e.push.apply(e,n)}return e}function t(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach(function(r){e(t,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))})}return t}function e(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function n(r){return a(r)||c(r)||i(r)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(r,t){if(r){if("string"==typeof r)return u(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(r,t):void 0}}function c(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}function a(r){if(Array.isArray(r))return u(r)}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var f=n(document.querySelectorAll("li"));function l(r){return r.split("").filter(function(r){return"0123456789".includes(r)}).join("")}function s(r){var t;r.sort(function(r,t){return l(t.dataset.salary)-l(r.dataset.salary)}),(t=document.querySelector("ul")).append.apply(t,n(r))}function p(r){return r.map(function(r){return t({name:r.innerText},r.dataset)})}s(f),p(f);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.cd862346.js.map