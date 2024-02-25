/*
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.Annotation=n():t.Annotation=n()}(window,(function(){return function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/",e(e.s=5)}([function(t,n,e){var o=e(1);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(3)(o,r);o.locals&&(t.exports=o.locals)},function(t,n,e){(t.exports=e(2)(!1)).push([t.i,".cdx-annotation {\n  background: rgb(192 192 192 / 30%);\n  padding: 2px 3px;\n  border: 1px solid rgb(201 201 201 / 30%);\n  border-radius: 3px;\n  font-size: .98em;\n}\n\n.cdx-annotation_popup {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 10;\n  padding: 10px;\n  transition: opacity .5s;\n}\n\n.cdx-annotation_popup.hidden {\n  pointer-events: none;\n  opacity: 0;\n}\n\n.cdx-annotation_popup-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background-color: rgb(0 0 0 / 50%);\n  cursor: pointer;\n}\n\n.cdx-annotation_popup-form {\n  display: flex;\n  flex-direction: column;\n\n  width: 100%;\n  max-width: 450px;\n  height: auto;\n  max-height: 100%;\n\n  z-index: 20;\n  background-color: white;\n  border: 1px solid #e8e8eb;\n  border-radius: 6px;\n  box-shadow: 0 3px 15px -3px rgba(13, 20, 33, .13);\n}\n\n.cdx-annotation_popup-header {\n  display: flex;\n  padding: 10px 16px;\n  border-bottom: 1px solid #e8e8eb;\n}\n\n.cdx-annotation_popup-title {\n  font-size: 16px;\n  font-weight: 500;\n  margin-right: auto;\n}\n\n.cdx-annotation_popup-btn-close {\n  margin: -10px -16px;\n  border: 0;\n  background-color: transparent;\n  padding: 0;\n  width: 44px;\n  height: 44px;\n}\n\n.cdx-annotation_popup-btn-close svg {\n  width: 26px;\n}\n\n.cdx-annotation_popup-content {\n  padding: 10px 12px;\n  overflow-y: auto;\n  max-height: 400px;\n}\n\n.cdx-annotation_popup-inp-title {\n  margin-bottom: 10px;\n}\n\n.cdx-annotation_popup-inp-text {\n  resize: vertical;\n  max-height: 300px;\n}\n\n.cdx-annotation_popup-footer {\n  display: flex;\n  padding: 10px 16px;\n  border-top: 1px solid #e8e8eb;\n}\n\n.cdx-annotation_popup-footer .cdx-button {\n  padding: 6px 13px;\n  transition: background-color .2s;\n}\n\n.cdx-annotation_popup-btn-remove {\n  color: #e96a6a;\n  border-color: #e96a6a;\n}\n\n.cdx-annotation_popup-btn-remove:hover {\n  background-color: #fff4f4;\n}\n\n.cdx-annotation_popup-btn-save {\n  color: #46a946;\n  border-color: #46a946;\n  margin-left: auto;\n}\n\n.cdx-annotation_popup-btn-save:hover {\n  background-color: #f2fff2;\n}\n\n.cdx-annotation_btn-edit {\n  display: none;\n  align-items: center;\n  justify-content: left;\n  font-size: 13px;\n  gap: 6px;\n  width: 100%;\n  border: 0;\n  background-color: transparent;\n  padding: 5px 8px;\n  border-top: 1px solid rgba(201, 201, 204, .48);\n  transition: background-color .2s;\n}\n\n.cdx-annotation_btn-edit:hover {\n  background-color: rgb(0 0 0 / 5%);\n}\n\n.cdx-annotation_btn-edit.show {\n  display: flex;\n}",""])},function(t,n){t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map((function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"}));return[e].concat(i).concat([r]).join("\n")}var a;return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e})).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),n.push(a))}},n}},function(t,n,e){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),p=function(t){return document.querySelector(t)},u=function(t){var n={};return function(t){if("function"==typeof t)return t();if(void 0===n[t]){var e=p.call(this,t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}}(),s=null,c=0,l=[],d=e(4);function f(t,n){for(var e=0;e<t.length;e++){var o=t[e],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(g(o.parts[a],n))}else{var p=[];for(a=0;a<o.parts.length;a++)p.push(g(o.parts[a],n));i[o.id]={id:o.id,refs:1,parts:p}}}}function h(t,n){for(var e=[],o={},r=0;r<t.length;r++){var i=t[r],a=n.base?i[0]+n.base:i[0],p={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(p):e.push(o[a]={id:a,parts:[p]})}return e}function v(t,n){var e=u(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=l[l.length-1];if("top"===t.insertAt)o?o.nextSibling?e.insertBefore(n,o.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),l.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=u(t.insertInto+" "+t.insertAt.before);e.insertBefore(n,r)}}function b(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=l.indexOf(t);n>=0&&l.splice(n,1)}function m(t){var n=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),x(n,t.attrs),v(t,n),n}function x(t,n){Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])}))}function g(t,n){var e,o,r,i;if(n.transform&&t.css){if(!(i=n.transform(t.css)))return function(){};t.css=i}if(n.singleton){var a=c++;e=s||(s=m(n)),o=C.bind(null,e,a,!1),r=C.bind(null,e,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",x(n,t.attrs),v(t,n),n}(n),o=E.bind(null,e,n),r=function(){b(e),e.href&&URL.revokeObjectURL(e.href)}):(e=m(n),o=w.bind(null,e),r=function(){b(e)});return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else r()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=h(t,n);return f(e,n),function(t){for(var o=[],r=0;r<e.length;r++){var a=e[r];(p=i[a.id]).refs--,o.push(p)}t&&f(h(t,n),n);for(r=0;r<o.length;r++){var p;if(0===(p=o[r]).refs){for(var u=0;u<p.parts.length;u++)p.parts[u]();delete i[p.id]}}}};var y,S=(y=[],function(t,n){return y[t]=n,y.filter(Boolean).join("\n")});function C(t,n,e,o){var r=e?"":o.css;if(t.styleSheet)t.styleSheet.cssText=S(n,r);else{var i=document.createTextNode(r),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}function w(t,n){var e=n.css,o=n.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}function E(t,n,e){var o=e.css,r=e.sourceMap,i=void 0===n.convertToAbsoluteUrls&&r;(n.convertToAbsoluteUrls||i)&&(o=d(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),p=t.href;t.href=URL.createObjectURL(a),p&&URL.revokeObjectURL(p)}},function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,o=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,n){var r,i=n.trim().replace(/^"(.*)"$/,(function(t,n){return n})).replace(/^'(.*)'$/,(function(t,n){return n}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")}))}},function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return u}));e(0);var o='<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="20" viewBox="0 -960 960 960" width="20"><path d="M480-144v-85l212-212 85 85-212 212h-85ZM144-348v-72h288v72H144Zm661-36-85-85 32-32q11-11 25.5-11t25.5 11l34 34q11 11 11 25.5T837-416l-32 32ZM144-498v-72h432v72H144Zm0-150v-72h432v72H144Z"/></svg>';function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,p(o.key),o)}}function a(t,n,e){return(n=p(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function p(t){var n=function(t,n){if("object"!==r(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,n||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===r(n)?n:String(n)}var u=function(){function t(n){var e=n.api;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=e,this.button=null,this.tag="SPAN",this.iconClasses={base:this.api.styles.inlineToolButton,active:this.api.styles.inlineToolButtonActive},this.actionButton=document.createElement("button"),this.actionButton.classList.add(t.CSS.actionButton),this.actionButton.innerHTML=o+this.api.i18n.t("Edit annotation")}var n,e,r;return n=t,r=[{key:"isInline",get:function(){return!0}},{key:"CSS",get:function(){return{baseClass:"cdx-annotation",actionButton:"cdx-annotation_btn-edit",actionShowButton:"show",popupClass:"cdx-annotation_popup",popupHidden:"hidden",popupOverlay:"cdx-annotation_popup-overlay",popupForm:"cdx-annotation_popup-form",popupHeader:"cdx-annotation_popup-header",popupTitle:"cdx-annotation_popup-title",popupCloseButton:"cdx-annotation_popup-btn-close",popupContent:"cdx-annotation_popup-content",popupInputTitle:"cdx-annotation_popup-inp-title",popupInputText:"cdx-annotation_popup-inp-text",popupFooter:"cdx-annotation_popup-footer",popupSaveButton:"cdx-annotation_popup-btn-save",popupRemoveButton:"cdx-annotation_popup-btn-remove"}}},{key:"sanitize",get:function(){return{span:{class:t.CSS.baseClass,"data-title":!0,"data-text":!0}}}}],(e=[{key:"getPopup",value:function(){var n=this,e=document.querySelector("body > .".concat(t.CSS.popupClass));if(!e){(e=document.createElement("div")).classList.add(t.CSS.popupClass,t.CSS.popupHidden);var o=document.createElement("div");o.classList.add(t.CSS.popupOverlay),o.addEventListener("click",(function(){n.closePopup()}));var r=document.createElement("div");r.classList.add(t.CSS.popupForm);var i=document.createElement("div");i.classList.add(t.CSS.popupHeader);var a=document.createElement("div");a.classList.add(t.CSS.popupTitle),a.innerText=this.api.i18n.t("Edit annotation");var p=document.createElement("button");p.classList.add(t.CSS.popupCloseButton),p.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="m251.333-204.667-46.666-46.666L433.334-480 204.667-708.667l46.666-46.666L480-526.666l228.667-228.667 46.666 46.666L526.666-480l228.667 228.667-46.666 46.666L480-433.334 251.333-204.667Z"/></svg>',p.addEventListener("click",(function(){n.closePopup()})),i.appendChild(a),i.appendChild(p);var u=document.createElement("div");u.classList.add(t.CSS.popupContent);var s=document.createElement("input");s.classList.add(this.api.styles.input,t.CSS.popupInputTitle),s.placeholder=this.api.i18n.t("Annotation title");var c=document.createElement("textarea");c.classList.add(this.api.styles.input,t.CSS.popupInputText),c.placeholder=this.api.i18n.t("Annotation text"),u.appendChild(s),u.appendChild(c);var l=document.createElement("div");l.classList.add(t.CSS.popupFooter);var d=document.createElement("button");d.classList.add(this.api.styles.button,t.CSS.popupRemoveButton),d.innerText=this.api.i18n.t("Remove"),d.addEventListener("click",(function(){t.currentElem&&n.unwrap(t.currentElem),n.closePopup()}));var f=document.createElement("button");f.classList.add(this.api.styles.button,t.CSS.popupSaveButton),f.innerText=this.api.i18n.t("Save"),f.addEventListener("click",(function(){n.saveData(s.value,c.value),n.closePopup()})),l.appendChild(d),l.appendChild(f),r.appendChild(i),r.appendChild(u),r.appendChild(l),e.appendChild(o),e.appendChild(r),document.body.appendChild(e)}return e}},{key:"openPopup",value:function(n,e){var o=this.getPopup(),r=o.querySelector(".".concat(t.CSS.popupInputTitle));r&&(r.value=n||null);var i=o.querySelector(".".concat(t.CSS.popupInputText));i&&(i.value=e||null);var a=o.querySelector(".".concat(t.CSS.popupRemoveButton));a&&(t.currentElem?a.style.display=null:a.style.display="none"),o.classList.remove(t.CSS.popupHidden)}},{key:"closePopup",value:function(){this.getPopup().classList.add(t.CSS.popupHidden),t.currentRange=null,t.currentElem=null,this.api.inlineToolbar.close()}},{key:"render",value:function(){return this.button=document.createElement("button"),this.button.type="button",this.button.classList.add(this.iconClasses.base),this.button.innerHTML=this.toolboxIcon,this.button}},{key:"surround",value:function(n){if(n){var e=this.api.selection.findParentTag(this.tag,t.CSS.baseClass);e?this.unwrap(e):(t.currentRange=n.cloneRange(),t.currentElem=null,this.openPopup(t.currentRange.toString().trim()))}}},{key:"wrap",value:function(n,e,o){var r=document.createElement(this.tag);r.classList.add(t.CSS.baseClass),e&&r.setAttribute("data-title",e),o&&r.setAttribute("data-text",o),r.appendChild(n.extractContents()),n.insertNode(r),this.api.selection.expandToTag(r)}},{key:"saveData",value:function(n,e){n=n.trim(),e=e.trim(),0===n.length&&0===e.length||(t.currentRange?this.wrap(t.currentRange,n,e):t.currentElem&&(n?t.currentElem.setAttribute("data-title",n):t.currentElem.removeAttribute("data-title"),e?t.currentElem.setAttribute("data-text",e):t.currentElem.removeAttribute("data-text")),t.currentRange=null,t.currentElem=null)}},{key:"unwrap",value:function(t){this.api.selection.expandToTag(t);var n=window.getSelection(),e=n.getRangeAt(0),o=e.extractContents();t.parentNode.removeChild(t),e.insertNode(o),n.removeAllRanges(),n.addRange(e)}},{key:"checkState",value:function(){var n=this,e=this.api.selection.findParentTag(this.tag,t.CSS.baseClass);this.button.classList.toggle(this.iconClasses.active,!!e),this.actionButton.classList.toggle(t.CSS.actionShowButton,!!e),e&&(this.actionButton.onclick=function(){t.currentRange=null,t.currentElem=e,n.openPopup(e.getAttribute("data-title"),e.getAttribute("data-text"))})}},{key:"renderActions",value:function(){return this.actionButton}},{key:"toolboxIcon",get:function(){return o}}])&&i(n.prototype,e),r&&i(n,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();a(u,"currentRange",null),a(u,"currentElem",null)}]).default}));