!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=r.parcelRequire3a11;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},r.parcelRequire3a11=a),a.register("iE7OH",function(t,r){e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return i},function(e){return i=e});var n,i,a={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)a[t[r]]=e[t[r]]},i=function(e){var t=a[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),a.register("aNJCr",function(t,r){e(t.exports,"getBundleURL",function(){return n},function(e){return n=e});var n,i={};n=function(e){var t=i[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)// Use the 3rd one, which will be a runtime in the original bundle.
return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),i[e]=t),t}}),a("iE7OH").register(JSON.parse('{"4ko55":"index.2c255804.js","hOerA":"icons.c14567a0.svg"}'));/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,r,n,a){var o,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i(c,"_invoke",{value:(o=new S(a||[]),s=h,function(r,i){if(s===p)throw Error("Generator is already running");if(s===f){if("throw"===r)throw i;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return O()}for(o.method=r,o.arg=i;;){var a=o.delegate;if(a){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var i=n.method,a=r.iterator[i];if(a===t)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===i&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g);var o=d(a,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var s=o.arg;return s?s.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=s.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(a,o);if(c){if(c===g)continue;return c}}if("next"===o.method)// function.sent implementation.
o.sent=o._sent=o.arg;else if("throw"===o.method){if(s===h)throw s=f,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);s=p;var l=d(e,n,o);if("normal"===l.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
s=o.done?f:"suspendedYield",l.arg===g)continue;return{value:l.arg,done:o.done}}"throw"===l.type&&(s=f,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
o.method="throw",o.arg=l.arg)}})}),c)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var h="suspendedStart",p="executing",f="completed",g={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function v(){}function _(){}function m(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var y={};l(y,o,function(){return this});var b=Object.getPrototypeOf,w=b&&b(b(H([])));w&&w!==r&&n.call(w,o)&&// of the polyfill.
(y=w);var k=m.prototype=v.prototype=Object.create(y);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function $(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
i(this,"_invoke",{value:function(i,a){function o(){return new t(function(r,o){!function r(i,a,o,s){var c=d(e[i],e,a);if("throw"===c.type)s(c.arg);else{var l=c.arg,u=l.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then(function(e){r("next",e,o,s)},function(e){r("throw",e,o,s)}):t.resolve(u).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
l.value=e,o(l)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,o,s)})}}(i,a,r,o)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(o,// invocations of the iterator.
o):o()}})}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function H(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}// Return an iterator with no values.
return{next:O}}function O(){return{value:t,done:!0}}// Regardless of whether this script is executing as a CommonJS module
// or not, return the runtime object so that we can declare the variable
// regeneratorRuntime in the outer scope, which allows this module to be
// injected easily by `bin/regenerator --include-runtime script.js`.
return _.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:_,configurable:!0}),_.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===_||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},$(E.prototype),l(E.prototype,s,function(){return this}),e.AsyncIterator=E,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new E(u(t,r,n,i),a);return e.isGeneratorFunction(r)?o// If outerFn is a generator, return the full iterator.
:o.next().then(function(e){return e.done?e.value:o.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
$(k),l(k,c,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
l(k,o,function(){return this}),l(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
e.done=!0,e)}},e.values=H,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else if(l){if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&// location outside the try/catch block.
(a=null);var o=a?a.completion:{};return(o.type=e,o.arg=t,a)?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;L(r)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:H(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),g}},e}({});try{regeneratorRuntime=o}catch(e){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}let s="https://forkify-api.herokuapp.com/api/v2/recipes",c="1abccb16-ff74-471c-9c20-7f67aa7461e1",l=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 20 second"))},2e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} ${n.status}`);return i}catch(e){throw e}},u={recipe:{},search:{query:"",results:[],resultsPerPage:5,page:1},bookmarks:[]},d=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},h=async function(e){try{let t=await l(`${s}/${e}?key=${c}`);u.recipe=d(t),u.bookmarks.some(t=>t.id===e)?u.recipe.bookmarked=!0:u.recipe.bookmarked=!1,console.log(u.recipe)}catch(e){throw console.error(`${e} 😂😂😂`),e}},p=async function(e){try{u.search.query=e;let t=await l(`${s}?search=${e}&key=${c}`);// console.log(data);
u.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),u.search.page=1}catch(e){throw console.log(`${e} 😁😁😁`),Error}},f=function(e=u.search.page){u.search.page=e;let t=(e-1)*u.search.resultsPerPage,r=e*u.search.resultsPerPage;// 0
return u.search.results.slice(t,r)},g=function(e){u.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/u.recipe.servings;// newQT = OldQT * newServings / oldServings // 2 * 8 / 4 = 4
}),u.recipe.servings=e},v=function(){localStorage.setItem("bookmarks",JSON.stringify(u.bookmarks))},_=function(e){// Add Bookmark
u.bookmarks.push(e),e.id===u.recipe.id&&(u.recipe.bookmarked=!0),v()},m=function(e){// Delete Bookmark
let t=u.bookmarks.findIndex(t=>t.id===e);u.bookmarks.splice(t,1),e===u.recipe.id&&(u.recipe.bookmarked=!1),v()};!function(){let e=localStorage.getItem("bookmarks");e&&(u.bookmarks=JSON.parse(e))}();let y=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());// const ingArr = ing[1].replaceAll(' ', '').split(',');
if(3!==t.length)throw Error("not correct Form of INGRIDIENTS!");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,publisher:e.publisher,source_url:e.sourceUrl,image_url:e.image,servings:+e.servings,cooking_time:+e.cookingTime,ingredients:t},n=await l(`${s}?key=${c}`,r);u.recipe=d(n),_(u.recipe)}catch(e){throw e}};var b={};b=a("aNJCr").getBundleURL("4ko55")+a("iE7OH").resolve("hOerA");class w{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((e,t)=>{let r=i[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
        <div class="spinner">
            <svg>
              <use href="${/*@__PURE__*/t(b)}#icon-loader"></use>
            </svg>
        </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let r=`
          <div class="error">
              <div>
                  <svg>
                    <use href="${/*@__PURE__*/t(b)}#icon-alert-triangle"></use>
                  </svg>
              </div>
              <p>${e}<p>
          </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(e=this._message){let r=`
          <div class="message">
              <div>
                  <svg>
                    <use href="${/*@__PURE__*/t(b)}#icon-smile"></use>
                  </svg>
              </div>
              <p>${e}<p>
          </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}var k={};//FRACTY REDUCES THE FRACTION.
function $(e,t,r,n,i){var a,o,s;let c=[2,3,5];//If the numerator isn't from a repeating decimal case, the initialized array of prime numbers will suffice to find the common denominators.
if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&c.push(t);let l=0,u=e,d=t;//Initialize counter over the prime number array for the while loop.
for(;l<=c.length;)u%c[l]==0&&d%c[l]==0?(c[l],u/=c[l],d/=c[l]):l++;return a=d,o=u,s=r,1===a&&1===o?(s=`${n}${(parseInt(s)+1).toString()}`,`${s}`):0===o?`${n}${s}`:"0"==s?`${n}${o}/${a}`:`${n}${s} ${o}/${a}`//If there's an integer and a fraction return both.
}// FRACTY CONVERTS DECIMAL NUMBERS TO FRACTIONS BY ASSUMING THAT TRAILING PATTERNS FROM 10^-2 CONTINUE TO REPEAT
// The assumption is based on the most standard numbering conventions
// e.g. 3.51 will convert to 3 51/100 while 3.511 will convert to 3 23/45
// Throw any number up to 16 digits long at fracty and let fracy do the work.
// If number is beyond 16 digits fracty will truncate at 15 digits to compensate for roundoff errors created in IEEE 754 Floating Point conversion.
k=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),a=i[0];if("0"==r&&"0"!==a)return a;if("0"==r&&"0"==a)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==a)return`${a} 99/100`;if("99"==r&&"0"==a)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return a;let o=r.split("").reverse().join(""),s=o.match(/^(\d+)\1{1,2}/);//Reverse the string to look for patterns.
if(!s||!(r.length>2))return(//IF THERE'S NO TRAILING PATTERN FRACTY DIVIDES THE INPUT BY THE NEAREST BASE 10 INTEGER GREATER THAN THE NUMERATOR.
function(e,t,r){let n=parseInt(e,10),i=Math.pow(10,e.length);//Numerator begins as decimal input converted into an integer.
return $(n,i,t,r,!1);//Reduce the numerator and denominator.
}(r,a,t));//Begin calculating the numerator and denominator for decimals that don't have a pattern.
{let e=s[0].split("").reverse().join(""),n=s[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),//IF THERE'S A TRAILING PATTERN FRACTY DIVIDES THE INPUT BY ONE SUBTRACTED FROM THE NEAREST BASE 10 NUMBER WITH NUMBER OF ZEROS EQUAL TO THE LENGTH OF THE REPEATED PATTERN (I.E. A SERIES OF 9'S) MULTIPLIED BY THE BASE 10 NUMBER GREATER THAN AND CLOSEST TO THE INPUT.
function(e,t,r,n,i){let a=e.length-r.length>=1?e.length-r.length:1,o=Math.pow(10,a),s=parseFloat(`0.${e}`),c=Math.pow(10,t.length),l=Math.round((s*c-s)*Math.pow(10,a));//Does the length of the non pattern segment of the input = 0? If it does, that's incorrect since we know it must equal at least 1, otherwise it's the length of the decimal input minus the length of the full pattern.
return $(l,(c-1)*o,n,i,!0);//Further reduce the numerator and denominator.
}(r,n,e,a,t);//Begin calculating the numerator and denominator for decimals that have a pattern.
}};class E extends w{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find recipe. Try again...";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerBookmark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&e()})}_generateMarkup(){return`
        <figure class='recipe__fig'>
              <img src='${this._data.image}' alt='${this._data.title}' class='recipe__img' />
              <h1 class='recipe__title'>
                <span>${this._data.title}</span>
              </h1>
            </figure>
    
            <div class='recipe__details'>
              <div class='recipe__info'>
                <svg class='recipe__info-icon'>
                  <use href='${/*@__PURE__*/t(b)}#icon-clock'></use>
                </svg>
                <span class='recipe__info-data recipe__info-data--minutes'>${this._data.cookingTime}</span>
                <span class='recipe__info-text'>minutes</span>
              </div>
              <div class='recipe__info'>
                <svg class='recipe__info-icon'>
                  <use href='${/*@__PURE__*/t(b)}#icon-users'></use>
                </svg>
                <span class='recipe__info-data recipe__info-data--people'>${this._data.servings}</span>
                <span class='recipe__info-text'>servings</span>
    
                <div class='recipe__info-buttons'>
                  <button class='btn--tiny btn--update-servings' data-update-to="${this._data.servings-1}" >
                    <svg>
                      <use href='${/*@__PURE__*/t(b)}#icon-minus-circle'></use>
                    </svg>
                  </button>
                  <button class='btn--tiny btn--update-servings' data-update-to="${this._data.servings+1}">
                    <svg>
                      <use href='${/*@__PURE__*/t(b)}#icon-plus-circle'></use>
                    </svg>
                  </button>
                </div>
              </div>
    
              <div class='recipe__user-generated ${this._data.key?"":"hidden"}'>
                <svg>
                  <use href='${/*@__PURE__*/t(b)}#icon-user'></use>
                </svg>
              </div>
               
              <button class='btn--round btn--bookmark'>
                <svg class=''>
                  <use href='${/*@__PURE__*/t(b)}#icon-bookmark${this._data.bookmarked?"-fill":""}'></use>
                </svg>
              </button>
            </div>
    
            <div class='recipe__ingredients'>
              <h2 class='heading--2'>Recipe ingredients</h2>
              <ul class='recipe__ingredient-list'>
                ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
                </ul>
            </div>
    
            <div class='recipe__directions'>
              <h2 class='heading--2'>How to cook it</h2>
              <p class='recipe__directions-text'>
                This recipe was carefully designed and tested by
                <span class='recipe__publisher'>${this._data.publisher}</span>. Please check out
                directions at their website.
              </p>
              <a
                class='btn--small recipe__btn'
                href='${this._data.sourceUrl}'
                target='_blank'
              >
                <span>Directions</span>
                <svg class='search__icon'>
                  <use href='${/*@__PURE__*/t(b)}#icon-arrow-right'></use>
                </svg>
              </a>
            </div>
    `}_generateMarkupIngredient(e){return`
                    <li class='recipe__ingredient'>
                      <svg class='recipe__icon'>
                        <use href='${/*@__PURE__*/t(b)}#icon-check'></use>
                      </svg>
                      <div class='recipe__quantity'>${e.quantity?/*@__PURE__*/t(k)(e.quantity).toString():""}
                      </div>
                      <div class='recipe__description'>
                        <span class='recipe__unit'>${e.unit}</span>
                        ${e.description}
                      </div>
                    </li>
                      `}}var x=new E;class L{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var S=new L,H=new class extends w{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
           <li class='preview'>
                  <a class='preview__link ${this._data.id===e?"preview__link--active":""}' href='#${this._data.id}'>
                    <figure class='preview__fig'>
                      <img src='${this._data.image}' alt='${this._data.title}' />
                    </figure>
                    <div class='preview__data'>
                        <h4 class='preview__title'>${this._data.title}</h4>
                        <p class='preview__publisher'>${this._data.publisher}</p>
                        
                        <div class='recipe__user-generated ${this._data.key?"":"hidden"}'>
                          <svg>
                            <use href='${/*@__PURE__*/t(b)}#icon-user'></use>
                          </svg>
                        </div>
                    </div>
                  </a>
            </li>
      `}};class O extends w{_parentElement=document.querySelector(".results");_errorMessage="No recipe found!!!";_message="";_generateMarkup(){return this._data.map(e=>H.render(e,!1)).join("")}}var j=new O;class M extends w{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>H.render(e,!1)).join("")}}var P=new M;class T extends w{_parentElement=document.querySelector(".upload");_message="You added a recipe! Vamuuuus ...";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnClose=document.querySelector(".btn--close-modal");_btnOpen=document.querySelector(".nav__btn--add-recipe");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow(),this.addHandlerUpload()}toggleWindow(){this._window.classList.toggle("hidden"),this._overlay.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);e(n)})}_generateMarkup(){}}var q=new T;class N extends w{_parentElement=document.querySelector(".pagination");addHandlerRender(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;e(n)})}_generatePrev(){return`
    <button data-goto="${curPage-1}" class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                <use href="${/*@__PURE__*/t(b)}#icon-arrow-left"></use>
              </svg>
              <span>Page ${curPage-1}</span>
        </button>
    `}_generateMarkup(){let e=Math.ceil(this._data.results.length/this._data.resultsPerPage),r=this._data.page;return(// Page 1 , there are other Pages
1===r&&e>1?`
          <button data-goto="${r+1}" class="btn--inline pagination__btn--next">
                  <span>Page ${r+1}</span>
                  <svg class="search__icon">
                    <use href="${/*@__PURE__*/t(b)}#icon-arrow-right"></use>
                  </svg>
          </button>
      `:r===e&&e>1?`
      <button data-goto="${r-1}" class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                <use href="${/*@__PURE__*/t(b)}#icon-arrow-left"></use>
              </svg>
              <span>Page ${r-1}</span>
       </button>
      `:r<e?`
      <button data-goto="${r-1}" class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                <use href="${/*@__PURE__*/t(b)}#icon-arrow-left"></use>
              </svg>
              <span>Page ${r-1}</span>
       </button>
       <button data-goto="${r+1}" class="btn--inline pagination__btn--next">
                  <span>Page ${r+1}</span>
                  <svg class="search__icon">
                    <use href="${/*@__PURE__*/t(b)}#icon-arrow-right"></use>
                  </svg>
       </button>
      `:"")}}var I=new N;let R=async function(){try{let e=window.location.hash.slice(1);if(!e)return;x.renderSpinner(),j.update(f()),P.update(u.bookmarks),// 2. Loading Recipe
await h(e),x.render(u.recipe)}catch(e){x.renderError(),console.log(e)}},A=async function(){try{j.renderSpinner();// 1. Get Search Query
let e=S.getQuery();if(!e)return;// 2. Load Search Results
await p(e),j.render(f()),I.render(u.search)}catch(e){console.log(e)}},D=async function(e){try{q.renderSpinner(),// Upload New recipe data
await y(e),console.log(u.recipe),x.render(u.recipe),q.renderMessage(),P.render(u.bookmarks),// Change id in URL
window.history.pushState(null,"",`#${u.recipe.id}`),// Closing Form window
setTimeout(function(){q.toggleWindow()},2500)}catch(e){console.error(e,"\uD83D\uDE00\uD83D\uDE00\uD83D\uDE00"),q.renderError(e.message)}};P.addHandlerRender(function(){P.render(u.bookmarks)}),x.addHandlerRender(R),x.addHandlerUpdateServings(function(e){//Update recipe servings
g(e),x.update(u.recipe)}),x.addHandlerBookmark(function(){u.recipe.bookmarked?m(u.recipe.id):_(u.recipe),x.update(u.recipe),P.render(u.bookmarks)}),S.addHandlerSearch(A),I.addHandlerRender(function(e){j.render(f(e)),I.render(u.search)}),q.addHandlerUpload(D)}();//# sourceMappingURL=index.2c255804.js.map

//# sourceMappingURL=index.2c255804.js.map
