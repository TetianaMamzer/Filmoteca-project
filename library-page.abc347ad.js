!function(){function t(t){return t&&t.__esModule?t.default:t}function e(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=n.parcelRequired7c6;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},n.parcelRequired7c6=o),o.register("9TUSr",(function(n,r){e(n.exports,"fetchFilmsAPI",(function(){return m})),e(n.exports,"fetchGenresAPI",(function(){return b})),e(n.exports,"fetchMovieInfoAPI",(function(){return w})),e(n.exports,"trendingFilms",(function(){return d}));var i=o("bpxeT"),a=o("2TvXO"),s=o("1VFfL"),c=o("2iqew");o("4smAb");var u="https://api.themoviedb.org/3",l="cf961b1b89f4c4a28558be2b04fdd59a",f={pagination:document.querySelector(".tui-pagination"),movieList:document.querySelector(".card-list"),filmModalList:document.querySelector(".backdrop")},p=new(t(s))(f.pagination,{totalItems:0,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}});p.getCurrentPage();function d(){return h.apply(this,arguments)}function h(){return(h=t(i)(t(a).mark((function e(){return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u,"/trending/movie/week?api_key=").concat(l,"&page=1")).then((function(t){if(!t.ok)throw new Error("Network response was not OK");return t.json()})).then((function(t){return t.results})).catch((function(t){console.error("There has been a problem with your fetch operation:",t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function m(t){return g.apply(this,arguments)}function g(){return(g=t(i)(t(a).mark((function e(n){return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u,"/trending/movie/day?api_key=").concat(l,"&page=").concat(n)).then((function(t){if(!t.ok)throw new Error("Network response was not OK");return t.json()})).then((function(t){return p.reset(t.total_results),f.pagination.classList.remove("pagination-is-hidden"),t.results})).catch((function(t){console.error("There has been a problem with your fetch operation:",t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function v(t){return y.apply(this,arguments)}function y(){return(y=t(i)(t(a).mark((function e(n){return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u,"/trending/movie/day?api_key=").concat(l,"&page=").concat(n)).then((function(t){if(!t.ok)throw new Error("Network response was not OK");return t.json()})).then((function(t){return window.scrollTo({top:0,behavior:"smooth"}),t.results})).catch((function(t){console.error("There has been a problem with your fetch operation:",t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=t(i)(t(a).mark((function e(n){var r;return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=n.page,b().then((function(t){v(r).then((function(e){var n=(0,c.createCardMarkup)(e,t);f.movieList.innerHTML="",f.movieList.insertAdjacentHTML("beforeend",n)}))}));case 2:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function b(){return x.apply(this,arguments)}function x(){return(x=t(i)(t(a).mark((function e(){return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=cf961b1b89f4c4a28558be2b04fdd59a").then((function(t){if(!t.ok)throw new Error("Network response was not OK");return t.json()})).then((function(t){return t.genres})).catch((function(t){console.error("There has been a problem with your fetch operation:",t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function w(t){return E.apply(this,arguments)}function E(){return(E=t(i)(t(a).mark((function e(n){return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u,"/movie/").concat(n,"?api_key=").concat(l)).then((function(t){if(!t.ok)throw new Error("Network response was not OK");return t.json()})).then((function(t){return t})).catch((function(t){console.error("There has been a problem with your fetch operation:",t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),e)})))).apply(this,arguments)}p.on("afterMove",(function(t){return _.apply(this,arguments)}))})),o.register("bpxeT",(function(t,e){"use strict";function n(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,i)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var a=t.apply(e,r);function s(t){n(a,i,o,s,c,"next",t)}function c(t){n(a,i,o,s,c,"throw",t)}s(void 0)}))}}})),o.register("2TvXO",(function(t,e){var n=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,o=Object.create(i.prototype),a=new M(r||[]);return o._invoke=function(t,e,n){var r=f;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw o;return O()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=L(a,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?h:p,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(t,n,a),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",p="suspendedYield",d="executing",h="completed",m={};function g(){}function v(){}function y(){}var _={};c(_,o,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(T([])));x&&x!==n&&r.call(x,o)&&(_=x);var w=y.prototype=g.prototype=Object.create(_);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function n(i,o,a,s){var c=l(t[i],t,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}}function L(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function T(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:O}}function O(){return{value:e,done:!0}}return v.prototype=y,c(w,"constructor",y),c(y,"constructor",v),v.displayName=c(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},E(P.prototype),c(P.prototype,a,(function(){return this})),t.AsyncIterator=P,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new P(u(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(w),c(w,s,"Generator"),c(w,o,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=T,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return s.type="throw",s.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;C(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:T(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),o.register("1VFfL",(function(t,e){
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */
var n;window,n=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,r,i,o,a=Object.prototype.hasOwnProperty;for(i=1,o=arguments.length;i<o;i+=1)for(r in n=arguments[i])a.call(n,r)&&(t[r]=n[r]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var r=n(2),i=n(17),o=n(6);t.exports=function(t,e,n){r(t)?i(t,e,n):o(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var r;for(r in n=n||null,t)if(t.hasOwnProperty(r)&&!1===e.call(n,t[r],r,t))break}},function(t,e,n){"use strict";var r=n(18),i=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&r(n,t),e.hasOwnProperty("static")&&(i(n,e.static),delete e.static),i(n.prototype,e),n}},function(t,e,n){"use strict";var r=n(2);t.exports=function(t,e,n){var i,o;if(n=n||0,!r(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(o=e.length,i=n;n>=0&&i<o;i+=1)if(e[i]===t)return i;return-1}},function(t,e,n){"use strict";var r=n(29),i=n(30),o=n(5),a={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),i=o(t)?t(e):r(t,e);return n.innerHTML=i,n.firstChild},bind:function(t,e){var n,r=Array.prototype.slice;return t.bind?t.bind.apply(t,r.call(arguments,1)):(n=r.call(arguments,2),function(){return t.apply(e,n.length?n.concat(r.call(arguments)):arguments)})},sendHostName:function(){i("pagination","UA-129987462-1")}};t.exports=a},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var r=n(13),i=n(7),o=n(0),a=n(1),s=n(20),c=n(9),u={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=i({init:function(t,e){this._options=o({},u,e),this._currentPage=0,this._view=new s(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,r="prev"===t;return this._options.centerAlign?r?e-1:e+n:r?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),r=this._getPageIndex(t),i=this._getPageIndex(n),o=this._getEdge(t);return e.leftPageNumber=o.left,e.rightPageNumber=o.right,e.prevMore=r>1,e.nextMore=r<i,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,r,i=this._getLastPage(),o=this._options.visiblePages,a=this._getPageIndex(t);return this._options.centerAlign?(r=Math.floor(o/2),(n=(e=Math.max(t-r,1))+o-1)>i&&(e=Math.max(i-o+1,1),n=i)):(e=(a-1)*o+1,n=a*o,n=Math.min(n,i)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){a(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});r.mixin(l),t.exports=l},function(t,e,n){"use strict";var r=n(0),i=n(14),o=n(4),a=n(16),s=n(2),c=n(5),u=n(3),l=/\s+/g;function f(){this.events=null,this.contexts=null}f.mixin=function(t){r(t.prototype,f.prototype)},f.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},f.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},f.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},f.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},f.prototype._memorizeContext=function(t){var e,n;i(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},f.prototype._forgetContext=function(t){var e,n;i(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},f.prototype._bindEvent=function(t,e,n){var r=this._safeEvent(t);this._memorizeContext(n),r.push(this._getHandlerItem(e,n))},f.prototype.on=function(t,e,n){var r=this;o(t)?(t=t.split(l),u(t,(function(t){r._bindEvent(t,e,n)}))):a(t)&&(n=e,u(t,(function(t,e){r.on(e,t,n)})))},f.prototype.once=function(t,e,n){var r=this;if(a(t))return n=e,void u(t,(function(t,e){r.once(e,t,n)}));this.on(t,(function i(){e.apply(n,arguments),r.off(t,i,n)}),n)},f.prototype._spliceMatches=function(t,e){var n,r=0;if(s(t))for(n=t.length;r<n;r+=1)!0===e(t[r])&&(t.splice(r,1),n-=1,r-=1)},f.prototype._matchHandler=function(t){var e=this;return function(n){var r=t===n.handler;return r&&e._forgetContext(n.context),r}},f.prototype._matchContext=function(t){var e=this;return function(n){var r=t===n.context;return r&&e._forgetContext(n.context),r}},f.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(r){var i=t===r.handler,o=e===r.context,a=i&&o;return a&&n._forgetContext(r.context),a}},f.prototype._offByEventName=function(t,e){var n=this,r=c(e),i=n._matchHandler(e);t=t.split(l),u(t,(function(t){var e=n._safeEvent(t);r?n._spliceMatches(e,i):(u(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},f.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);u(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},f.prototype._offByObject=function(t,e){var n,r=this;this._indexOfContext(t)<0?u(t,(function(t,e){r.off(e,t)})):o(e)?(n=this._matchContext(t),r._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),u(this._safeEvent(),(function(t){r._spliceMatches(t,n)}))):(n=this._matchContext(t),u(this._safeEvent(),(function(t){r._spliceMatches(t,n)})))},f.prototype.off=function(t,e){o(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):a(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},f.prototype.fire=function(t){this.invoke.apply(this,arguments)},f.prototype.invoke=function(t){var e,n,r,i;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),r=0;e[r];){if(!1===(i=e[r]).handler.apply(i.context,n))return!1;r+=1}return!0},f.prototype.hasListener=function(t){return this.getListenerLength(t)>0},f.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=f},function(t,e,n){"use strict";var r=n(1),i=n(15);t.exports=function(t){return!r(t)&&!i(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var r=0,i=t.length;for(n=n||null;r<i&&!1!==e.call(n,t[r],r,t);r+=1);}},function(t,e,n){"use strict";var r=n(19);t.exports=function(t,e){var n=r(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var r=n(3),i=n(7),o=n(21),a=n(22),s=n(24),c=n(25),u=n(0),l=n(4),f=n(28),p=n(9),d={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},h=["first","prev","next","last"],m=["prev","next"],g=i({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=u({},d,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(l(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!f(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){r(h,(function(t){this._buttons[t]=p.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){r(h,(function(t){var e="disabled"+p.capitalizeFirstLetter(t);this._buttons[e]=p.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){r(m,(function(t){var e=t+"More";this._buttons[e]=p.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,c(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,c(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,r=t.leftPageNumber,i=t.rightPageNumber;for(n=r;n<=i;n+=1)n===t.page?e=p.createElementByTemplate(this._template.currentPage,{page:n}):(e=p.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==r||t.prevMore||c(e,this._firstItemClassName),n!==i||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();a(e,"click",(function(e){var n,r,i=o(e);s(e),(r=this._getButtonType(i))||(n=this._getPageNumber(i)),t(r,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return r(n,(function(n,r){return!p.isContained(t,n)||(e=r,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,r=this._enabledPageElements.length;n<r;n+=1)if(e=this._enabledPageElements[n],p.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],r(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=g},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var r=n(4),i=n(3),o=n(23);function a(t,e,n,r){function a(e){n.call(r||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,a):"attachEvent"in t&&t.attachEvent("on"+e,a),function(t,e,n,r){var a=o(t,e),s=!1;i(a,(function(t){return t.handler!==n||(s=!0,!1)})),s||a.push({handler:n,wrappedHandler:r})}(t,e,n,a)}t.exports=function(t,e,n,o){r(e)?i(e.split(/\s+/g),(function(e){a(t,e,n,o)})):i(e,(function(e,r){a(t,r,e,n)}))}},function(t,e,n){"use strict";var r="_feEventKey";t.exports=function(t,e){var n,i=t[r];return i||(i=t[r]={}),(n=i[e])||(n=i[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){"use strict";var r=n(3),i=n(8),o=n(26),a=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),s=t.classList,c=[];s?r(n,(function(e){t.classList.add(e)})):((e=o(t))&&(n=[].concat(e.split(/\s+/),n)),r(n,(function(t){i(t,c)<0&&c.push(t)})),a(t,c))}},function(t,e,n){"use strict";var r=n(1);t.exports=function(t){return t&&t.className?r(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var r=n(2),i=n(1);t.exports=function(t,e){e=(e=r(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){"use strict";var r=n(8),i=n(3),o=n(2),a=n(4),s=n(0),c=/{{\s?|\s?}}/g,u=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,f=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,p=/\./,d=/^["']\w+["']$/,h=/"|'/g,m=/^-?\d+\.?\d*$/,g={if:function(t,e,n){var r=function(t,e){var n=[t],r=[],o=0,a=0;return i(e,(function(t,i){0===t.indexOf("if")?o+=1:"/if"===t?o-=1:o||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),r.push(e.slice(a,i)),a=i+1)})),r.push(e.slice(a)),{exps:n,sourcesInsideIf:r}}(t,e),o=!1,a="";return i(r.exps,(function(t,e){return(o=b(t,n))&&(a=x(r.sourcesInsideIf[e],n)),!o})),a},each:function(t,e,n){var r=b(t,n),a=o(r)?"@index":"@key",c={},u="";return i(r,(function(t,r){c[a]=r,c["@this"]=t,s(n,c),u+=x(e.slice(),n)})),u},with:function(t,e,n){var i=r("as",t),o=t[i+1],a=b(t.slice(0,i),n),c={};return c[o]=a,x(e,s(n,c))||""}},v=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,r,i=[],o=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)r=n.index,i.push(t.slice(o,r)),o=r+n[0].length,n=e.exec(t);return i.push(t.slice(o)),i};function y(t,e){var n,r=e[t];return"true"===t?r=!0:"false"===t?r=!1:d.test(t)?r=t.replace(h,""):u.test(t)?r=y((n=t.split(l))[0],e)[y(n[1],e)]:f.test(t)?r=y((n=t.split(p))[0],e)[n[1]]:m.test(t)&&(r=parseFloat(t)),r}function _(t,e,n){for(var r,i,o,s,c=g[t],u=1,l=2,f=e[l];u&&a(f);)0===f.indexOf(t)?u+=1:0===f.indexOf("/"+t)&&(u-=1,r=l),f=e[l+=2];if(u)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=c(e[0].split(" ").slice(1),(i=0,o=r,(s=e.splice(i+1,o-i)).pop(),s),n),e}function b(t,e){var n=y(t[0],e);return n instanceof Function?function(t,e,n){var r=[];return i(e,(function(t){r.push(y(t,n))})),t.apply(null,r)}(n,t.slice(1),e):n}function x(t,e){for(var n,r,i,o=1,s=t[o];a(s);)r=(n=s.split(" "))[0],g[r]?(i=_(r,t.splice(o,t.length-o),e),t=t.concat(i)):t[o]=b(n,e),s=t[o+=2];return t.join("")}t.exports=function(t,e){return x(v(t,c),e)}},function(t,e,n){"use strict";var r=n(1),i=n(31);t.exports=function(t,e){var n=location.hostname,o="TOAST UI "+t+" for "+n+": Statistics",a=window.localStorage.getItem(o);(r(window.tui)||!1!==window.tui.usageStatistics)&&(a&&!function(t){return(new Date).getTime()-t>6048e5}(a)||(window.localStorage.setItem(o,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||i("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){"use strict";var r=n(6);t.exports=function(t,e){var n=document.createElement("img"),i="";return r(e,(function(t,e){i+="&"+e+"="+t})),i=i.substring(1),n.src=t+"?"+i,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},t.exports=n()})),o.register("2iqew",(function(n,r){e(n.exports,"createCardMarkup",(function(){return u}));var i=o("1VFfL"),a=o("9TUSr"),s={movieList:document.querySelector(".home"),pagination:document.querySelector(".tui-pagination"),filmModalList:document.querySelector(".backdrop")},c=new(t(i))(s.pagination,{totalItems:0,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}).getCurrentPage();function u(t,e){if(0!==t.length)return t.map((function(t){var n=t.id,r=t.title,i=t.poster_path,o=t.release_date,a=t.genre_ids,s=o.slice(0,4),c=[],u=!0,l=!1,f=void 0;try{for(var p,d=function(t,n){var r=n.value,i=e.find((function(t){return t.id===r}));c.push(i.name)},h=a[Symbol.iterator]();!(u=(p=h.next()).done);u=!0)d(0,p)}catch(t){l=!0,f=t}finally{try{u||null==h.return||h.return()}finally{if(l)throw f}}c.length>=3&&(c=[c[0],c[1],"Other"]);var m,g=c.join(", ");return'<li class="card">\n  <a href="" class="card-link link" data-id="'.concat(n,'">\n   <div class="card-box">\n    <img class="card-img" src="').concat((m=i,null===m?"https://freedesignfile.com/upload/2018/11/Characters-in-film-design-elements-background-vector-graphic-715.jpg":"".concat("https://image.tmdb.org/t/p/w500").concat(m)),'" alt="').concat(r,'">\n    </div>\n    <h3 class="card-name">').concat(r,'</h3>\n    <div class="card-item">\n      <p class="card-genres">').concat(g,'</p>\n      <p class="card-year"><span class="card-line">|</span>').concat(s,"</p>\n    </div>\n  </a>\n</li>")})).join("")}(0,a.fetchGenresAPI)().then((function(t){(0,a.fetchFilmsAPI)(c).then((function(e){var n=u(e,t);s.movieList&&s.movieList.insertAdjacentHTML("beforeend",n)}))}))})),o.register("4smAb",(function(t,e){window.addEventListener("load",(function(){document.querySelector(".preloader").classList.add("loaded_hiding"),setTimeout((function(){document.body.removeChild(document.querySelector(".preloader"))}),500)}))})),o.register("hGhfO",(function(t,e){var n={filmModalList:document.querySelector(".backdrop"),openModalFilm:document.querySelector(".card-list")};n.openModalFilm.addEventListener("click",(function(t){if(t.target!==t.currentTarget){t.preventDefault();var e=t.target.closest(".card-link").getAttribute("data-id");(i=e,fetch("".concat("https://api.themoviedb.org/3","/movie/").concat(i,"?api_key=").concat("cf961b1b89f4c4a28558be2b04fdd59a")).then((function(t){if(!t.ok)throw new Error("Network response was not OK");return t.json()})).then((function(t){return t})).catch((function(t){console.error("There has been a problem with your fetch operation:",t)}))).then((function(t){n.filmModalList.classList.remove("is-hidden"),n.filmModalList.innerHTML=function(t){var e=t.id,n=t.title,r=t.overview,i=t.poster_path,o=(t.release_date,t.genres,t.original_title),a=t.popularity,s=t.vote_average,c=t.vote_count,u=t.homepage,l="https://image.tmdb.org/t/p/w500",f=t.genres.map((function(t){return t.name})).join(", ");return"<div class=\"film-modal\">\n        <button type=\"submit\" class=\"film-modal-close-button\" data-film-modal-close> \n          <svg class='film-modal-close-icon' width='30' height='30' viewBox='0 0 30 30'>\n            <path class='film-modal-close-icon' d='M8 8L22 22' stroke='black' stroke-width='2'></path>\n            <path class='film-modal-close-icon' d='M8 22L22 8' stroke='black' stroke-width='2'></path>\n          </svg>\n        </button>\n    \n        <div class='film-modal-poster-wrap'>\n          <img\n            class='film-modal-poster-img'\n            src=\"".concat(l).concat(i,'" alt="film"\n          />\n          <a class=\'link link-watch film-modal-btn film-modal-btn-trailer js-film-trailer\' href="').concat(u,'" data-id="').concat(e,'">official page</a>\n          </div>\n        <div class="film-modal-info-wrap">\n        <h2 class="film-modal-title">').concat(n,'</h2>\n        <ul class="film-modal-info-list">\n          <li class="film-modal-item ">\n            <p class="film-modal-item-title">Vote / Votes</p>\n            <p class="film-modal-item-description">\n          <span class="film-modal-item-vote color">').concat(s,'</span>\n          <span>/</span>\n          <span class="film-modal-item-vote">').concat(c,'</span>\n        </p>\n        </li>\n        <li class="film-modal-item ">\n          <p class="film-modal-item-title">Popularity</p>\n          <p class=\'film-modal-item-description\'>').concat(a,'</p>\n        </li>\n        <li class="film-modal-item ">\n          <p class="film-modal-item-title">Original Title</p>\n          <p class="film-modal-item-description film-modal-item-original-title">').concat(o,'</p>\n        </li>\n        <li class="film-modal-item ">\n          <p class="film-modal-item-title">Genre</p>\n          <p class=\'film-modal-item-description\'>').concat(f,'</p>\n        </li>\n      </ul>\n      <h3 class="film-modal-about">ABOUT</h3>\n      <p class="film-modal-description">').concat(r,'\n      </p>\n      <div class="film-modal-btn-wrap">\n        <button class="film-modal-btn film-modal-btn-watched add-to-watched-btn" data-id="').concat(e,'" type="button">add to Watched</button>\n        <button class="film-modal-btn add-to-queue-btn" type="button" data-id="').concat(e,'">add to queue</button>\n      </div>\n      </div>')}(t),document.querySelector(".film-modal-close-button").addEventListener("click",o),n.filmModalList.addEventListener("click",a),r();var e=document.querySelector(".add-to-watched-btn"),i=(JSON.parse(localStorage.getItem("Watched movies"))||[]).includes(t.id);e.textContent=i?"Remove from watched":"Add to watched",e.addEventListener("click",(function(e){var n=JSON.parse(localStorage.getItem("Watched movies"))||[];if(n.includes(t.id)){var r=n.indexOf(t.id);n.splice(r,1),e.target.textContent="Add to watched"}else n.push(t.id),e.target.textContent="Remove from watched";localStorage.setItem("Watched movies",JSON.stringify(n))}));var s=document.querySelector(".add-to-queue-btn"),c=(JSON.parse(localStorage.getItem("Queue movies"))||[]).includes(t.id);s.textContent=c?"Remove from queue":"Add to queue",s.addEventListener("click",(function(e){var n=JSON.parse(localStorage.getItem("Queue movies"))||[];if(n.includes(t.id)){var r=n.indexOf(t.id);n.splice(r,1),e.target.textContent="Add to queue"}else n.push(t.id),e.target.textContent="Remove from queue";localStorage.setItem("Queue movies",JSON.stringify(n))}))}))}var i}));var r=function(){document.body.style.cssText="\n    overflow: hidden;\n    "},i=function(){document.body.style.cssText=""};function o(){n.filmModalList.classList.add("is-hidden"),n.filmModalList.removeEventListener("click",a),i()}function a(t){t.target.classList.contains("backdrop")&&o()}window.addEventListener("keydown",(function(t){"Escape"===t.code&&o()}))})),o.register("2sdtb",(function(t,e){var n=document.querySelector(".open-mdl-win"),r=document.querySelector(".backdrop-team"),i=(document.querySelector(".mdl-win-team"),document.querySelector(".close-btn-mdl")),o=function(){document.body.style.cssText="\n    overflow: hidden;\n    "},a=function(){document.body.style.cssText=""};n.addEventListener("click",(function(t){t.preventDefault(),o(),r.classList.remove("is-hidden")}));var s=function(t){r.classList.add("is-hidden"),a()};i.addEventListener("click",s);r.addEventListener("click",(function(t){t.target.classList.contains("backdrop-team")&&s()})),window.addEventListener("keydown",(function(t){"Escape"===t.code&&s()}))})),o.register("8Veln",(function(t,e){$(".slider-single").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,fade:!1,adaptiveHeight:!0,infinite:!1,useTransform:!0,speed:400,cssEase:"cubic-bezier(0.77, 0, 0.18, 1)"}),$(".slider-nav").on("init",(function(t,e){$(".slider-nav .slick-slide.slick-current").addClass("is-active")})).slick({slidesToShow:3,slidesToScroll:3,dots:!1,focusOnSelect:!1,infinite:!1}),$(".slider-single").on("afterChange",(function(t,e,n){$(".slider-nav").slick("slickGoTo",n);var r='.slider-nav .slick-slide[data-slick-index="'+n+'"]';$(".slider-nav .slick-slide.is-active").removeClass("is-active"),$(r).addClass("is-active")})),$(".slider-nav").on("click",".slick-slide",(function(t){t.preventDefault();var e=$(this).data("slick-index");$(".slider-single").slick("slickGoTo",e)}))}))}();
//# sourceMappingURL=library-page.abc347ad.js.map
