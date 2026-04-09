function ey(t,r){for(var a=0;a<r.length;a++){const o=r[a];if(typeof o!="string"&&!Array.isArray(o)){for(const c in o)if(c!=="default"&&!(c in t)){const u=Object.getOwnPropertyDescriptor(o,c);u&&Object.defineProperty(t,c,u.get?u:{enumerable:!0,get:()=>o[c]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function a(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(c){if(c.ep)return;c.ep=!0;const u=a(c);fetch(c.href,u)}})();function ty(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var tc={exports:{}},Wi={},nc={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function ny(){if(Lp)return fe;Lp=1;var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),y=Symbol.iterator;function w(C){return C===null||typeof C!="object"?null:(C=y&&C[y]||C["@@iterator"],typeof C=="function"?C:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,E={};function N(C,V,ue){this.props=C,this.context=V,this.refs=E,this.updater=ue||P}N.prototype.isReactComponent={},N.prototype.setState=function(C,V){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,V,"setState")},N.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function M(){}M.prototype=N.prototype;function L(C,V,ue){this.props=C,this.context=V,this.refs=E,this.updater=ue||P}var D=L.prototype=new M;D.constructor=L,T(D,N.prototype),D.isPureReactComponent=!0;var U=Array.isArray,$=Object.prototype.hasOwnProperty,ne={current:null},le={key:!0,ref:!0,__self:!0,__source:!0};function F(C,V,ue){var he,se={},ae=null,Ne=null;if(V!=null)for(he in V.ref!==void 0&&(Ne=V.ref),V.key!==void 0&&(ae=""+V.key),V)$.call(V,he)&&!le.hasOwnProperty(he)&&(se[he]=V[he]);var be=arguments.length-2;if(be===1)se.children=ue;else if(1<be){for(var de=Array(be),tt=0;tt<be;tt++)de[tt]=arguments[tt+2];se.children=de}if(C&&C.defaultProps)for(he in be=C.defaultProps,be)se[he]===void 0&&(se[he]=be[he]);return{$$typeof:t,type:C,key:ae,ref:Ne,props:se,_owner:ne.current}}function ce(C,V){return{$$typeof:t,type:C.type,key:V,ref:C.ref,props:C.props,_owner:C._owner}}function ee(C){return typeof C=="object"&&C!==null&&C.$$typeof===t}function xe(C){var V={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(ue){return V[ue]})}var we=/\/+/g;function Pe(C,V){return typeof C=="object"&&C!==null&&C.key!=null?xe(""+C.key):V.toString(36)}function Se(C,V,ue,he,se){var ae=typeof C;(ae==="undefined"||ae==="boolean")&&(C=null);var Ne=!1;if(C===null)Ne=!0;else switch(ae){case"string":case"number":Ne=!0;break;case"object":switch(C.$$typeof){case t:case r:Ne=!0}}if(Ne)return Ne=C,se=se(Ne),C=he===""?"."+Pe(Ne,0):he,U(se)?(ue="",C!=null&&(ue=C.replace(we,"$&/")+"/"),Se(se,V,ue,"",function(tt){return tt})):se!=null&&(ee(se)&&(se=ce(se,ue+(!se.key||Ne&&Ne.key===se.key?"":(""+se.key).replace(we,"$&/")+"/")+C)),V.push(se)),1;if(Ne=0,he=he===""?".":he+":",U(C))for(var be=0;be<C.length;be++){ae=C[be];var de=he+Pe(ae,be);Ne+=Se(ae,V,ue,de,se)}else if(de=w(C),typeof de=="function")for(C=de.call(C),be=0;!(ae=C.next()).done;)ae=ae.value,de=he+Pe(ae,be++),Ne+=Se(ae,V,ue,de,se);else if(ae==="object")throw V=String(C),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.");return Ne}function ge(C,V,ue){if(C==null)return C;var he=[],se=0;return Se(C,he,"","",function(ae){return V.call(ue,ae,se++)}),he}function me(C){if(C._status===-1){var V=C._result;V=V(),V.then(function(ue){(C._status===0||C._status===-1)&&(C._status=1,C._result=ue)},function(ue){(C._status===0||C._status===-1)&&(C._status=2,C._result=ue)}),C._status===-1&&(C._status=0,C._result=V)}if(C._status===1)return C._result.default;throw C._result}var ke={current:null},W={transition:null},K={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:W,ReactCurrentOwner:ne};function I(){throw Error("act(...) is not supported in production builds of React.")}return fe.Children={map:ge,forEach:function(C,V,ue){ge(C,function(){V.apply(this,arguments)},ue)},count:function(C){var V=0;return ge(C,function(){V++}),V},toArray:function(C){return ge(C,function(V){return V})||[]},only:function(C){if(!ee(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},fe.Component=N,fe.Fragment=a,fe.Profiler=c,fe.PureComponent=L,fe.StrictMode=o,fe.Suspense=m,fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,fe.act=I,fe.cloneElement=function(C,V,ue){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var he=T({},C.props),se=C.key,ae=C.ref,Ne=C._owner;if(V!=null){if(V.ref!==void 0&&(ae=V.ref,Ne=ne.current),V.key!==void 0&&(se=""+V.key),C.type&&C.type.defaultProps)var be=C.type.defaultProps;for(de in V)$.call(V,de)&&!le.hasOwnProperty(de)&&(he[de]=V[de]===void 0&&be!==void 0?be[de]:V[de])}var de=arguments.length-2;if(de===1)he.children=ue;else if(1<de){be=Array(de);for(var tt=0;tt<de;tt++)be[tt]=arguments[tt+2];he.children=be}return{$$typeof:t,type:C.type,key:se,ref:ae,props:he,_owner:Ne}},fe.createContext=function(C){return C={$$typeof:h,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:u,_context:C},C.Consumer=C},fe.createElement=F,fe.createFactory=function(C){var V=F.bind(null,C);return V.type=C,V},fe.createRef=function(){return{current:null}},fe.forwardRef=function(C){return{$$typeof:f,render:C}},fe.isValidElement=ee,fe.lazy=function(C){return{$$typeof:x,_payload:{_status:-1,_result:C},_init:me}},fe.memo=function(C,V){return{$$typeof:g,type:C,compare:V===void 0?null:V}},fe.startTransition=function(C){var V=W.transition;W.transition={};try{C()}finally{W.transition=V}},fe.unstable_act=I,fe.useCallback=function(C,V){return ke.current.useCallback(C,V)},fe.useContext=function(C){return ke.current.useContext(C)},fe.useDebugValue=function(){},fe.useDeferredValue=function(C){return ke.current.useDeferredValue(C)},fe.useEffect=function(C,V){return ke.current.useEffect(C,V)},fe.useId=function(){return ke.current.useId()},fe.useImperativeHandle=function(C,V,ue){return ke.current.useImperativeHandle(C,V,ue)},fe.useInsertionEffect=function(C,V){return ke.current.useInsertionEffect(C,V)},fe.useLayoutEffect=function(C,V){return ke.current.useLayoutEffect(C,V)},fe.useMemo=function(C,V){return ke.current.useMemo(C,V)},fe.useReducer=function(C,V,ue){return ke.current.useReducer(C,V,ue)},fe.useRef=function(C){return ke.current.useRef(C)},fe.useState=function(C){return ke.current.useState(C)},fe.useSyncExternalStore=function(C,V,ue){return ke.current.useSyncExternalStore(C,V,ue)},fe.useTransition=function(){return ke.current.useTransition()},fe.version="18.3.1",fe}var Vp;function sd(){return Vp||(Vp=1,nc.exports=ny()),nc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function ry(){if(Fp)return Wi;Fp=1;var t=sd(),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(f,m,g){var x,y={},w=null,P=null;g!==void 0&&(w=""+g),m.key!==void 0&&(w=""+m.key),m.ref!==void 0&&(P=m.ref);for(x in m)o.call(m,x)&&!u.hasOwnProperty(x)&&(y[x]=m[x]);if(f&&f.defaultProps)for(x in m=f.defaultProps,m)y[x]===void 0&&(y[x]=m[x]);return{$$typeof:r,type:f,key:w,ref:P,props:y,_owner:c.current}}return Wi.Fragment=a,Wi.jsx=h,Wi.jsxs=h,Wi}var _p;function iy(){return _p||(_p=1,tc.exports=ry()),tc.exports}var i=iy(),xa={},rc={exports:{}},gt={},ic={exports:{}},sc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function sy(){return Op||(Op=1,(function(t){function r(W,K){var I=W.length;W.push(K);e:for(;0<I;){var C=I-1>>>1,V=W[C];if(0<c(V,K))W[C]=K,W[I]=V,I=C;else break e}}function a(W){return W.length===0?null:W[0]}function o(W){if(W.length===0)return null;var K=W[0],I=W.pop();if(I!==K){W[0]=I;e:for(var C=0,V=W.length,ue=V>>>1;C<ue;){var he=2*(C+1)-1,se=W[he],ae=he+1,Ne=W[ae];if(0>c(se,I))ae<V&&0>c(Ne,se)?(W[C]=Ne,W[ae]=I,C=ae):(W[C]=se,W[he]=I,C=he);else if(ae<V&&0>c(Ne,I))W[C]=Ne,W[ae]=I,C=ae;else break e}}return K}function c(W,K){var I=W.sortIndex-K.sortIndex;return I!==0?I:W.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var h=Date,f=h.now();t.unstable_now=function(){return h.now()-f}}var m=[],g=[],x=1,y=null,w=3,P=!1,T=!1,E=!1,N=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(W){for(var K=a(g);K!==null;){if(K.callback===null)o(g);else if(K.startTime<=W)o(g),K.sortIndex=K.expirationTime,r(m,K);else break;K=a(g)}}function U(W){if(E=!1,D(W),!T)if(a(m)!==null)T=!0,me($);else{var K=a(g);K!==null&&ke(U,K.startTime-W)}}function $(W,K){T=!1,E&&(E=!1,M(F),F=-1),P=!0;var I=w;try{for(D(K),y=a(m);y!==null&&(!(y.expirationTime>K)||W&&!xe());){var C=y.callback;if(typeof C=="function"){y.callback=null,w=y.priorityLevel;var V=C(y.expirationTime<=K);K=t.unstable_now(),typeof V=="function"?y.callback=V:y===a(m)&&o(m),D(K)}else o(m);y=a(m)}if(y!==null)var ue=!0;else{var he=a(g);he!==null&&ke(U,he.startTime-K),ue=!1}return ue}finally{y=null,w=I,P=!1}}var ne=!1,le=null,F=-1,ce=5,ee=-1;function xe(){return!(t.unstable_now()-ee<ce)}function we(){if(le!==null){var W=t.unstable_now();ee=W;var K=!0;try{K=le(!0,W)}finally{K?Pe():(ne=!1,le=null)}}else ne=!1}var Pe;if(typeof L=="function")Pe=function(){L(we)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,ge=Se.port2;Se.port1.onmessage=we,Pe=function(){ge.postMessage(null)}}else Pe=function(){N(we,0)};function me(W){le=W,ne||(ne=!0,Pe())}function ke(W,K){F=N(function(){W(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){T||P||(T=!0,me($))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ce=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return a(m)},t.unstable_next=function(W){switch(w){case 1:case 2:case 3:var K=3;break;default:K=w}var I=w;w=K;try{return W()}finally{w=I}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,K){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var I=w;w=W;try{return K()}finally{w=I}},t.unstable_scheduleCallback=function(W,K,I){var C=t.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?C+I:C):I=C,W){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=I+V,W={id:x++,callback:K,priorityLevel:W,startTime:I,expirationTime:V,sortIndex:-1},I>C?(W.sortIndex=I,r(g,W),a(m)===null&&W===a(g)&&(E?(M(F),F=-1):E=!0,ke(U,I-C))):(W.sortIndex=V,r(m,W),T||P||(T=!0,me($))),W},t.unstable_shouldYield=xe,t.unstable_wrapCallback=function(W){var K=w;return function(){var I=w;w=K;try{return W.apply(this,arguments)}finally{w=I}}}})(sc)),sc}var Bp;function ay(){return Bp||(Bp=1,ic.exports=sy()),ic.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function oy(){if(Wp)return gt;Wp=1;var t=sd(),r=ay();function a(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,s=1;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,c={};function u(e,n){h(e,n),h(e+"Capture",n)}function h(e,n){for(c[e]=n,e=0;e<n.length;e++)o.add(n[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},y={};function w(e){return m.call(y,e)?!0:m.call(x,e)?!1:g.test(e)?y[e]=!0:(x[e]=!0,!1)}function P(e,n,s,l){if(s!==null&&s.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function T(e,n,s,l){if(n===null||typeof n>"u"||P(e,n,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function E(e,n,s,l,d,p,v){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=s,this.propertyName=e,this.type=n,this.sanitizeURL=p,this.removeEmptyString=v}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){N[e]=new E(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];N[n]=new E(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){N[e]=new E(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){N[e]=new E(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){N[e]=new E(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){N[e]=new E(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){N[e]=new E(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){N[e]=new E(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){N[e]=new E(e,5,!1,e.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function L(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(M,L);N[n]=new E(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(M,L);N[n]=new E(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(M,L);N[n]=new E(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){N[e]=new E(e,1,!1,e.toLowerCase(),null,!1,!1)}),N.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){N[e]=new E(e,1,!1,e.toLowerCase(),null,!0,!0)});function D(e,n,s,l){var d=N.hasOwnProperty(n)?N[n]:null;(d!==null?d.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(T(n,s,d,l)&&(s=null),l||d===null?w(n)&&(s===null?e.removeAttribute(n):e.setAttribute(n,""+s)):d.mustUseProperty?e[d.propertyName]=s===null?d.type===3?!1:"":s:(n=d.attributeName,l=d.attributeNamespace,s===null?e.removeAttribute(n):(d=d.type,s=d===3||d===4&&s===!0?"":""+s,l?e.setAttributeNS(l,n,s):e.setAttribute(n,s))))}var U=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$=Symbol.for("react.element"),ne=Symbol.for("react.portal"),le=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),ce=Symbol.for("react.profiler"),ee=Symbol.for("react.provider"),xe=Symbol.for("react.context"),we=Symbol.for("react.forward_ref"),Pe=Symbol.for("react.suspense"),Se=Symbol.for("react.suspense_list"),ge=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),ke=Symbol.for("react.offscreen"),W=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var I=Object.assign,C;function V(e){if(C===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);C=n&&n[1]||""}return`
`+C+e}var ue=!1;function he(e,n){if(!e||ue)return"";ue=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(A){var l=A}Reflect.construct(e,[],n)}else{try{n.call()}catch(A){l=A}e.call(n.prototype)}else{try{throw Error()}catch(A){l=A}e()}}catch(A){if(A&&l&&typeof A.stack=="string"){for(var d=A.stack.split(`
`),p=l.stack.split(`
`),v=d.length-1,b=p.length-1;1<=v&&0<=b&&d[v]!==p[b];)b--;for(;1<=v&&0<=b;v--,b--)if(d[v]!==p[b]){if(v!==1||b!==1)do if(v--,b--,0>b||d[v]!==p[b]){var k=`
`+d[v].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=v&&0<=b);break}}}finally{ue=!1,Error.prepareStackTrace=s}return(e=e?e.displayName||e.name:"")?V(e):""}function se(e){switch(e.tag){case 5:return V(e.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return e=he(e.type,!1),e;case 11:return e=he(e.type.render,!1),e;case 1:return e=he(e.type,!0),e;default:return""}}function ae(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case le:return"Fragment";case ne:return"Portal";case ce:return"Profiler";case F:return"StrictMode";case Pe:return"Suspense";case Se:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xe:return(e.displayName||"Context")+".Consumer";case ee:return(e._context.displayName||"Context")+".Provider";case we:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ge:return n=e.displayName||null,n!==null?n:ae(e.type)||"Memo";case me:n=e._payload,e=e._init;try{return ae(e(n))}catch{}}return null}function Ne(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(n);case 8:return n===F?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function be(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function de(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function tt(e){var n=de(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var d=s.get,p=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return d.call(this)},set:function(v){l=""+v,p.call(this,v)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function tn(e){e._valueTracker||(e._valueTracker=tt(e))}function $n(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var s=n.getValue(),l="";return e&&(l=de(e)?e.checked?"true":"false":e.value),e=l,e!==s?(n.setValue(e),!0):!1}function pn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fn(e,n){var s=n.checked;return I({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??e._wrapperState.initialChecked})}function Ud(e,n){var s=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;s=be(n.value!=null?n.value:s),e._wrapperState={initialChecked:l,initialValue:s,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Hd(e,n){n=n.checked,n!=null&&D(e,"checked",n,!1)}function lo(e,n){Hd(e,n);var s=be(n.value),l=n.type;if(s!=null)l==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+s):e.value!==""+s&&(e.value=""+s);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?co(e,n.type,s):n.hasOwnProperty("defaultValue")&&co(e,n.type,be(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function $d(e,n,s){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,s||n===e.value||(e.value=n),e.defaultValue=n}s=e.name,s!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,s!==""&&(e.name=s)}function co(e,n,s){(n!=="number"||pn(e.ownerDocument)!==e)&&(s==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+s&&(e.defaultValue=""+s))}var ri=Array.isArray;function vr(e,n,s,l){if(e=e.options,n){n={};for(var d=0;d<s.length;d++)n["$"+s[d]]=!0;for(s=0;s<e.length;s++)d=n.hasOwnProperty("$"+e[s].value),e[s].selected!==d&&(e[s].selected=d),d&&l&&(e[s].defaultSelected=!0)}else{for(s=""+be(s),n=null,d=0;d<e.length;d++){if(e[d].value===s){e[d].selected=!0,l&&(e[d].defaultSelected=!0);return}n!==null||e[d].disabled||(n=e[d])}n!==null&&(n.selected=!0)}}function uo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(a(91));return I({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gd(e,n){var s=n.value;if(s==null){if(s=n.children,n=n.defaultValue,s!=null){if(n!=null)throw Error(a(92));if(ri(s)){if(1<s.length)throw Error(a(93));s=s[0]}n=s}n==null&&(n=""),s=n}e._wrapperState={initialValue:be(s)}}function Kd(e,n){var s=be(n.value),l=be(n.defaultValue);s!=null&&(s=""+s,s!==e.value&&(e.value=s),n.defaultValue==null&&e.defaultValue!==s&&(e.defaultValue=s)),l!=null&&(e.defaultValue=""+l)}function Yd(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function qd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ho(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?qd(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var cs,Xd=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,s,l,d){MSApp.execUnsafeLocalFunction(function(){return e(n,s,l,d)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(cs=cs||document.createElement("div"),cs.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=cs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ii(e,n){if(n){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=n;return}}e.textContent=n}var si={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iv=["Webkit","ms","Moz","O"];Object.keys(si).forEach(function(e){iv.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),si[n]=si[e]})});function Qd(e,n,s){return n==null||typeof n=="boolean"||n===""?"":s||typeof n!="number"||n===0||si.hasOwnProperty(e)&&si[e]?(""+n).trim():n+"px"}function Zd(e,n){e=e.style;for(var s in n)if(n.hasOwnProperty(s)){var l=s.indexOf("--")===0,d=Qd(s,n[s],l);s==="float"&&(s="cssFloat"),l?e.setProperty(s,d):e[s]=d}}var sv=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function po(e,n){if(n){if(sv[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(a(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(a(61))}if(n.style!=null&&typeof n.style!="object")throw Error(a(62))}}function fo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mo=null;function go(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xo=null,yr=null,wr=null;function Jd(e){if(e=Pi(e)){if(typeof xo!="function")throw Error(a(280));var n=e.stateNode;n&&(n=As(n),xo(e.stateNode,e.type,n))}}function eu(e){yr?wr?wr.push(e):wr=[e]:yr=e}function tu(){if(yr){var e=yr,n=wr;if(wr=yr=null,Jd(e),n)for(e=0;e<n.length;e++)Jd(n[e])}}function nu(e,n){return e(n)}function ru(){}var vo=!1;function iu(e,n,s){if(vo)return e(n,s);vo=!0;try{return nu(e,n,s)}finally{vo=!1,(yr!==null||wr!==null)&&(ru(),tu())}}function ai(e,n){var s=e.stateNode;if(s===null)return null;var l=As(s);if(l===null)return null;s=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,n,typeof s));return s}var yo=!1;if(f)try{var oi={};Object.defineProperty(oi,"passive",{get:function(){yo=!0}}),window.addEventListener("test",oi,oi),window.removeEventListener("test",oi,oi)}catch{yo=!1}function av(e,n,s,l,d,p,v,b,k){var A=Array.prototype.slice.call(arguments,3);try{n.apply(s,A)}catch(O){this.onError(O)}}var li=!1,ds=null,us=!1,wo=null,ov={onError:function(e){li=!0,ds=e}};function lv(e,n,s,l,d,p,v,b,k){li=!1,ds=null,av.apply(ov,arguments)}function cv(e,n,s,l,d,p,v,b,k){if(lv.apply(this,arguments),li){if(li){var A=ds;li=!1,ds=null}else throw Error(a(198));us||(us=!0,wo=A)}}function Gn(e){var n=e,s=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(s=n.return),e=n.return;while(e)}return n.tag===3?s:null}function su(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function au(e){if(Gn(e)!==e)throw Error(a(188))}function dv(e){var n=e.alternate;if(!n){if(n=Gn(e),n===null)throw Error(a(188));return n!==e?null:e}for(var s=e,l=n;;){var d=s.return;if(d===null)break;var p=d.alternate;if(p===null){if(l=d.return,l!==null){s=l;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===s)return au(d),e;if(p===l)return au(d),n;p=p.sibling}throw Error(a(188))}if(s.return!==l.return)s=d,l=p;else{for(var v=!1,b=d.child;b;){if(b===s){v=!0,s=d,l=p;break}if(b===l){v=!0,l=d,s=p;break}b=b.sibling}if(!v){for(b=p.child;b;){if(b===s){v=!0,s=p,l=d;break}if(b===l){v=!0,l=p,s=d;break}b=b.sibling}if(!v)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:n}function ou(e){return e=dv(e),e!==null?lu(e):null}function lu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=lu(e);if(n!==null)return n;e=e.sibling}return null}var cu=r.unstable_scheduleCallback,du=r.unstable_cancelCallback,uv=r.unstable_shouldYield,hv=r.unstable_requestPaint,_e=r.unstable_now,pv=r.unstable_getCurrentPriorityLevel,bo=r.unstable_ImmediatePriority,uu=r.unstable_UserBlockingPriority,hs=r.unstable_NormalPriority,fv=r.unstable_LowPriority,hu=r.unstable_IdlePriority,ps=null,Ut=null;function mv(e){if(Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(ps,e,void 0,(e.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:vv,gv=Math.log,xv=Math.LN2;function vv(e){return e>>>=0,e===0?32:31-(gv(e)/xv|0)|0}var fs=64,ms=4194304;function ci(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function gs(e,n){var s=e.pendingLanes;if(s===0)return 0;var l=0,d=e.suspendedLanes,p=e.pingedLanes,v=s&268435455;if(v!==0){var b=v&~d;b!==0?l=ci(b):(p&=v,p!==0&&(l=ci(p)))}else v=s&~d,v!==0?l=ci(v):p!==0&&(l=ci(p));if(l===0)return 0;if(n!==0&&n!==l&&(n&d)===0&&(d=l&-l,p=n&-n,d>=p||d===16&&(p&4194240)!==0))return n;if((l&4)!==0&&(l|=s&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=l;0<n;)s=31-At(n),d=1<<s,l|=e[s],n&=~d;return l}function yv(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wv(e,n){for(var s=e.suspendedLanes,l=e.pingedLanes,d=e.expirationTimes,p=e.pendingLanes;0<p;){var v=31-At(p),b=1<<v,k=d[v];k===-1?((b&s)===0||(b&l)!==0)&&(d[v]=yv(b,n)):k<=n&&(e.expiredLanes|=b),p&=~b}}function jo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pu(){var e=fs;return fs<<=1,(fs&4194240)===0&&(fs=64),e}function ko(e){for(var n=[],s=0;31>s;s++)n.push(e);return n}function di(e,n,s){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-At(n),e[n]=s}function bv(e,n){var s=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<s;){var d=31-At(s),p=1<<d;n[d]=0,l[d]=-1,e[d]=-1,s&=~p}}function No(e,n){var s=e.entangledLanes|=n;for(e=e.entanglements;s;){var l=31-At(s),d=1<<l;d&n|e[l]&n&&(e[l]|=n),s&=~d}}var Ce=0;function fu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var mu,So,gu,xu,vu,Co=!1,xs=[],mn=null,gn=null,xn=null,ui=new Map,hi=new Map,vn=[],jv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yu(e,n){switch(e){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":ui.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":hi.delete(n.pointerId)}}function pi(e,n,s,l,d,p){return e===null||e.nativeEvent!==p?(e={blockedOn:n,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[d]},n!==null&&(n=Pi(n),n!==null&&So(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),e)}function kv(e,n,s,l,d){switch(n){case"focusin":return mn=pi(mn,e,n,s,l,d),!0;case"dragenter":return gn=pi(gn,e,n,s,l,d),!0;case"mouseover":return xn=pi(xn,e,n,s,l,d),!0;case"pointerover":var p=d.pointerId;return ui.set(p,pi(ui.get(p)||null,e,n,s,l,d)),!0;case"gotpointercapture":return p=d.pointerId,hi.set(p,pi(hi.get(p)||null,e,n,s,l,d)),!0}return!1}function wu(e){var n=Kn(e.target);if(n!==null){var s=Gn(n);if(s!==null){if(n=s.tag,n===13){if(n=su(s),n!==null){e.blockedOn=n,vu(e.priority,function(){gu(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vs(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var s=To(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);mo=l,s.target.dispatchEvent(l),mo=null}else return n=Pi(s),n!==null&&So(n),e.blockedOn=s,!1;n.shift()}return!0}function bu(e,n,s){vs(e)&&s.delete(n)}function Nv(){Co=!1,mn!==null&&vs(mn)&&(mn=null),gn!==null&&vs(gn)&&(gn=null),xn!==null&&vs(xn)&&(xn=null),ui.forEach(bu),hi.forEach(bu)}function fi(e,n){e.blockedOn===n&&(e.blockedOn=null,Co||(Co=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Nv)))}function mi(e){function n(d){return fi(d,e)}if(0<xs.length){fi(xs[0],e);for(var s=1;s<xs.length;s++){var l=xs[s];l.blockedOn===e&&(l.blockedOn=null)}}for(mn!==null&&fi(mn,e),gn!==null&&fi(gn,e),xn!==null&&fi(xn,e),ui.forEach(n),hi.forEach(n),s=0;s<vn.length;s++)l=vn[s],l.blockedOn===e&&(l.blockedOn=null);for(;0<vn.length&&(s=vn[0],s.blockedOn===null);)wu(s),s.blockedOn===null&&vn.shift()}var br=U.ReactCurrentBatchConfig,ys=!0;function Sv(e,n,s,l){var d=Ce,p=br.transition;br.transition=null;try{Ce=1,Po(e,n,s,l)}finally{Ce=d,br.transition=p}}function Cv(e,n,s,l){var d=Ce,p=br.transition;br.transition=null;try{Ce=4,Po(e,n,s,l)}finally{Ce=d,br.transition=p}}function Po(e,n,s,l){if(ys){var d=To(e,n,s,l);if(d===null)$o(e,n,l,ws,s),yu(e,l);else if(kv(d,e,n,s,l))l.stopPropagation();else if(yu(e,l),n&4&&-1<jv.indexOf(e)){for(;d!==null;){var p=Pi(d);if(p!==null&&mu(p),p=To(e,n,s,l),p===null&&$o(e,n,l,ws,s),p===d)break;d=p}d!==null&&l.stopPropagation()}else $o(e,n,l,null,s)}}var ws=null;function To(e,n,s,l){if(ws=null,e=go(l),e=Kn(e),e!==null)if(n=Gn(e),n===null)e=null;else if(s=n.tag,s===13){if(e=su(n),e!==null)return e;e=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ws=e,null}function ju(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pv()){case bo:return 1;case uu:return 4;case hs:case fv:return 16;case hu:return 536870912;default:return 16}default:return 16}}var yn=null,Eo=null,bs=null;function ku(){if(bs)return bs;var e,n=Eo,s=n.length,l,d="value"in yn?yn.value:yn.textContent,p=d.length;for(e=0;e<s&&n[e]===d[e];e++);var v=s-e;for(l=1;l<=v&&n[s-l]===d[p-l];l++);return bs=d.slice(e,1<l?1-l:void 0)}function js(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ks(){return!0}function Nu(){return!1}function xt(e){function n(s,l,d,p,v){this._reactName=s,this._targetInst=d,this.type=l,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(s=e[b],this[b]=s?s(p):p[b]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ks:Nu,this.isPropagationStopped=Nu,this}return I(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ks)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ks)},persist:function(){},isPersistent:ks}),n}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ro=xt(jr),gi=I({},jr,{view:0,detail:0}),Pv=xt(gi),zo,Ao,xi,Ns=I({},gi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Io,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xi&&(xi&&e.type==="mousemove"?(zo=e.screenX-xi.screenX,Ao=e.screenY-xi.screenY):Ao=zo=0,xi=e),zo)},movementY:function(e){return"movementY"in e?e.movementY:Ao}}),Su=xt(Ns),Tv=I({},Ns,{dataTransfer:0}),Ev=xt(Tv),Rv=I({},gi,{relatedTarget:0}),Mo=xt(Rv),zv=I({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),Av=xt(zv),Mv=I({},jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Iv=xt(Mv),Dv=I({},jr,{data:0}),Cu=xt(Dv),Lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _v(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Fv[e])?!!n[e]:!1}function Io(){return _v}var Ov=I({},gi,{key:function(e){if(e.key){var n=Lv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=js(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Io,charCode:function(e){return e.type==="keypress"?js(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?js(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bv=xt(Ov),Wv=I({},Ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pu=xt(Wv),Uv=I({},gi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Io}),Hv=xt(Uv),$v=I({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gv=xt($v),Kv=I({},Ns,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yv=xt(Kv),qv=[9,13,27,32],Do=f&&"CompositionEvent"in window,vi=null;f&&"documentMode"in document&&(vi=document.documentMode);var Xv=f&&"TextEvent"in window&&!vi,Tu=f&&(!Do||vi&&8<vi&&11>=vi),Eu=" ",Ru=!1;function zu(e,n){switch(e){case"keyup":return qv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Au(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kr=!1;function Qv(e,n){switch(e){case"compositionend":return Au(n);case"keypress":return n.which!==32?null:(Ru=!0,Eu);case"textInput":return e=n.data,e===Eu&&Ru?null:e;default:return null}}function Zv(e,n){if(kr)return e==="compositionend"||!Do&&zu(e,n)?(e=ku(),bs=Eo=yn=null,kr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Tu&&n.locale!=="ko"?null:n.data;default:return null}}var Jv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Jv[e.type]:n==="textarea"}function Iu(e,n,s,l){eu(l),n=Es(n,"onChange"),0<n.length&&(s=new Ro("onChange","change",null,s,l),e.push({event:s,listeners:n}))}var yi=null,wi=null;function e0(e){Zu(e,0)}function Ss(e){var n=Tr(e);if($n(n))return e}function t0(e,n){if(e==="change")return n}var Du=!1;if(f){var Lo;if(f){var Vo="oninput"in document;if(!Vo){var Lu=document.createElement("div");Lu.setAttribute("oninput","return;"),Vo=typeof Lu.oninput=="function"}Lo=Vo}else Lo=!1;Du=Lo&&(!document.documentMode||9<document.documentMode)}function Vu(){yi&&(yi.detachEvent("onpropertychange",Fu),wi=yi=null)}function Fu(e){if(e.propertyName==="value"&&Ss(wi)){var n=[];Iu(n,wi,e,go(e)),iu(e0,n)}}function n0(e,n,s){e==="focusin"?(Vu(),yi=n,wi=s,yi.attachEvent("onpropertychange",Fu)):e==="focusout"&&Vu()}function r0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ss(wi)}function i0(e,n){if(e==="click")return Ss(n)}function s0(e,n){if(e==="input"||e==="change")return Ss(n)}function a0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Mt=typeof Object.is=="function"?Object.is:a0;function bi(e,n){if(Mt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var s=Object.keys(e),l=Object.keys(n);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var d=s[l];if(!m.call(n,d)||!Mt(e[d],n[d]))return!1}return!0}function _u(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ou(e,n){var s=_u(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=n&&l>=n)return{node:s,offset:n-e};e=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=_u(s)}}function Bu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Bu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Wu(){for(var e=window,n=pn();n instanceof e.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)e=n.contentWindow;else break;n=pn(e.document)}return n}function Fo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function o0(e){var n=Wu(),s=e.focusedElem,l=e.selectionRange;if(n!==s&&s&&s.ownerDocument&&Bu(s.ownerDocument.documentElement,s)){if(l!==null&&Fo(s)){if(n=l.start,e=l.end,e===void 0&&(e=n),"selectionStart"in s)s.selectionStart=n,s.selectionEnd=Math.min(e,s.value.length);else if(e=(n=s.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var d=s.textContent.length,p=Math.min(l.start,d);l=l.end===void 0?p:Math.min(l.end,d),!e.extend&&p>l&&(d=l,l=p,p=d),d=Ou(s,p);var v=Ou(s,l);d&&v&&(e.rangeCount!==1||e.anchorNode!==d.node||e.anchorOffset!==d.offset||e.focusNode!==v.node||e.focusOffset!==v.offset)&&(n=n.createRange(),n.setStart(d.node,d.offset),e.removeAllRanges(),p>l?(e.addRange(n),e.extend(v.node,v.offset)):(n.setEnd(v.node,v.offset),e.addRange(n)))}}for(n=[],e=s;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<n.length;s++)e=n[s],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var l0=f&&"documentMode"in document&&11>=document.documentMode,Nr=null,_o=null,ji=null,Oo=!1;function Uu(e,n,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Oo||Nr==null||Nr!==pn(l)||(l=Nr,"selectionStart"in l&&Fo(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ji&&bi(ji,l)||(ji=l,l=Es(_o,"onSelect"),0<l.length&&(n=new Ro("onSelect","select",null,n,s),e.push({event:n,listeners:l}),n.target=Nr)))}function Cs(e,n){var s={};return s[e.toLowerCase()]=n.toLowerCase(),s["Webkit"+e]="webkit"+n,s["Moz"+e]="moz"+n,s}var Sr={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionend:Cs("Transition","TransitionEnd")},Bo={},Hu={};f&&(Hu=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);function Ps(e){if(Bo[e])return Bo[e];if(!Sr[e])return e;var n=Sr[e],s;for(s in n)if(n.hasOwnProperty(s)&&s in Hu)return Bo[e]=n[s];return e}var $u=Ps("animationend"),Gu=Ps("animationiteration"),Ku=Ps("animationstart"),Yu=Ps("transitionend"),qu=new Map,Xu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wn(e,n){qu.set(e,n),u(n,[e])}for(var Wo=0;Wo<Xu.length;Wo++){var Uo=Xu[Wo],c0=Uo.toLowerCase(),d0=Uo[0].toUpperCase()+Uo.slice(1);wn(c0,"on"+d0)}wn($u,"onAnimationEnd"),wn(Gu,"onAnimationIteration"),wn(Ku,"onAnimationStart"),wn("dblclick","onDoubleClick"),wn("focusin","onFocus"),wn("focusout","onBlur"),wn(Yu,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),u0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ki));function Qu(e,n,s){var l=e.type||"unknown-event";e.currentTarget=s,cv(l,n,void 0,e),e.currentTarget=null}function Zu(e,n){n=(n&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],d=l.event;l=l.listeners;e:{var p=void 0;if(n)for(var v=l.length-1;0<=v;v--){var b=l[v],k=b.instance,A=b.currentTarget;if(b=b.listener,k!==p&&d.isPropagationStopped())break e;Qu(d,b,A),p=k}else for(v=0;v<l.length;v++){if(b=l[v],k=b.instance,A=b.currentTarget,b=b.listener,k!==p&&d.isPropagationStopped())break e;Qu(d,b,A),p=k}}}if(us)throw e=wo,us=!1,wo=null,e}function Re(e,n){var s=n[Qo];s===void 0&&(s=n[Qo]=new Set);var l=e+"__bubble";s.has(l)||(Ju(n,e,2,!1),s.add(l))}function Ho(e,n,s){var l=0;n&&(l|=4),Ju(s,e,l,n)}var Ts="_reactListening"+Math.random().toString(36).slice(2);function Ni(e){if(!e[Ts]){e[Ts]=!0,o.forEach(function(s){s!=="selectionchange"&&(u0.has(s)||Ho(s,!1,e),Ho(s,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ts]||(n[Ts]=!0,Ho("selectionchange",!1,n))}}function Ju(e,n,s,l){switch(ju(n)){case 1:var d=Sv;break;case 4:d=Cv;break;default:d=Po}s=d.bind(null,n,s,e),d=void 0,!yo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),l?d!==void 0?e.addEventListener(n,s,{capture:!0,passive:d}):e.addEventListener(n,s,!0):d!==void 0?e.addEventListener(n,s,{passive:d}):e.addEventListener(n,s,!1)}function $o(e,n,s,l,d){var p=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var b=l.stateNode.containerInfo;if(b===d||b.nodeType===8&&b.parentNode===d)break;if(v===4)for(v=l.return;v!==null;){var k=v.tag;if((k===3||k===4)&&(k=v.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;v=v.return}for(;b!==null;){if(v=Kn(b),v===null)return;if(k=v.tag,k===5||k===6){l=p=v;continue e}b=b.parentNode}}l=l.return}iu(function(){var A=p,O=go(s),B=[];e:{var _=qu.get(e);if(_!==void 0){var G=Ro,q=e;switch(e){case"keypress":if(js(s)===0)break e;case"keydown":case"keyup":G=Bv;break;case"focusin":q="focus",G=Mo;break;case"focusout":q="blur",G=Mo;break;case"beforeblur":case"afterblur":G=Mo;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=Su;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=Ev;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=Hv;break;case $u:case Gu:case Ku:G=Av;break;case Yu:G=Gv;break;case"scroll":G=Pv;break;case"wheel":G=Yv;break;case"copy":case"cut":case"paste":G=Iv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Pu}var J=(n&4)!==0,Oe=!J&&e==="scroll",R=J?_!==null?_+"Capture":null:_;J=[];for(var S=A,z;S!==null;){z=S;var H=z.stateNode;if(z.tag===5&&H!==null&&(z=H,R!==null&&(H=ai(S,R),H!=null&&J.push(Si(S,H,z)))),Oe)break;S=S.return}0<J.length&&(_=new G(_,q,null,s,O),B.push({event:_,listeners:J}))}}if((n&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",G=e==="mouseout"||e==="pointerout",_&&s!==mo&&(q=s.relatedTarget||s.fromElement)&&(Kn(q)||q[nn]))break e;if((G||_)&&(_=O.window===O?O:(_=O.ownerDocument)?_.defaultView||_.parentWindow:window,G?(q=s.relatedTarget||s.toElement,G=A,q=q?Kn(q):null,q!==null&&(Oe=Gn(q),q!==Oe||q.tag!==5&&q.tag!==6)&&(q=null)):(G=null,q=A),G!==q)){if(J=Su,H="onMouseLeave",R="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(J=Pu,H="onPointerLeave",R="onPointerEnter",S="pointer"),Oe=G==null?_:Tr(G),z=q==null?_:Tr(q),_=new J(H,S+"leave",G,s,O),_.target=Oe,_.relatedTarget=z,H=null,Kn(O)===A&&(J=new J(R,S+"enter",q,s,O),J.target=z,J.relatedTarget=Oe,H=J),Oe=H,G&&q)t:{for(J=G,R=q,S=0,z=J;z;z=Cr(z))S++;for(z=0,H=R;H;H=Cr(H))z++;for(;0<S-z;)J=Cr(J),S--;for(;0<z-S;)R=Cr(R),z--;for(;S--;){if(J===R||R!==null&&J===R.alternate)break t;J=Cr(J),R=Cr(R)}J=null}else J=null;G!==null&&eh(B,_,G,J,!1),q!==null&&Oe!==null&&eh(B,Oe,q,J,!0)}}e:{if(_=A?Tr(A):window,G=_.nodeName&&_.nodeName.toLowerCase(),G==="select"||G==="input"&&_.type==="file")var te=t0;else if(Mu(_))if(Du)te=s0;else{te=r0;var re=n0}else(G=_.nodeName)&&G.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(te=i0);if(te&&(te=te(e,A))){Iu(B,te,s,O);break e}re&&re(e,_,A),e==="focusout"&&(re=_._wrapperState)&&re.controlled&&_.type==="number"&&co(_,"number",_.value)}switch(re=A?Tr(A):window,e){case"focusin":(Mu(re)||re.contentEditable==="true")&&(Nr=re,_o=A,ji=null);break;case"focusout":ji=_o=Nr=null;break;case"mousedown":Oo=!0;break;case"contextmenu":case"mouseup":case"dragend":Oo=!1,Uu(B,s,O);break;case"selectionchange":if(l0)break;case"keydown":case"keyup":Uu(B,s,O)}var ie;if(Do)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else kr?zu(e,s)&&(oe="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(oe="onCompositionStart");oe&&(Tu&&s.locale!=="ko"&&(kr||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&kr&&(ie=ku()):(yn=O,Eo="value"in yn?yn.value:yn.textContent,kr=!0)),re=Es(A,oe),0<re.length&&(oe=new Cu(oe,e,null,s,O),B.push({event:oe,listeners:re}),ie?oe.data=ie:(ie=Au(s),ie!==null&&(oe.data=ie)))),(ie=Xv?Qv(e,s):Zv(e,s))&&(A=Es(A,"onBeforeInput"),0<A.length&&(O=new Cu("onBeforeInput","beforeinput",null,s,O),B.push({event:O,listeners:A}),O.data=ie))}Zu(B,n)})}function Si(e,n,s){return{instance:e,listener:n,currentTarget:s}}function Es(e,n){for(var s=n+"Capture",l=[];e!==null;){var d=e,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=ai(e,s),p!=null&&l.unshift(Si(e,p,d)),p=ai(e,n),p!=null&&l.push(Si(e,p,d))),e=e.return}return l}function Cr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function eh(e,n,s,l,d){for(var p=n._reactName,v=[];s!==null&&s!==l;){var b=s,k=b.alternate,A=b.stateNode;if(k!==null&&k===l)break;b.tag===5&&A!==null&&(b=A,d?(k=ai(s,p),k!=null&&v.unshift(Si(s,k,b))):d||(k=ai(s,p),k!=null&&v.push(Si(s,k,b)))),s=s.return}v.length!==0&&e.push({event:n,listeners:v})}var h0=/\r\n?/g,p0=/\u0000|\uFFFD/g;function th(e){return(typeof e=="string"?e:""+e).replace(h0,`
`).replace(p0,"")}function Rs(e,n,s){if(n=th(n),th(e)!==n&&s)throw Error(a(425))}function zs(){}var Go=null,Ko=null;function Yo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var qo=typeof setTimeout=="function"?setTimeout:void 0,f0=typeof clearTimeout=="function"?clearTimeout:void 0,nh=typeof Promise=="function"?Promise:void 0,m0=typeof queueMicrotask=="function"?queueMicrotask:typeof nh<"u"?function(e){return nh.resolve(null).then(e).catch(g0)}:qo;function g0(e){setTimeout(function(){throw e})}function Xo(e,n){var s=n,l=0;do{var d=s.nextSibling;if(e.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(l===0){e.removeChild(d),mi(n);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=d}while(s);mi(n)}function bn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function rh(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(n===0)return e;n--}else s==="/$"&&n++}e=e.previousSibling}return null}var Pr=Math.random().toString(36).slice(2),Ht="__reactFiber$"+Pr,Ci="__reactProps$"+Pr,nn="__reactContainer$"+Pr,Qo="__reactEvents$"+Pr,x0="__reactListeners$"+Pr,v0="__reactHandles$"+Pr;function Kn(e){var n=e[Ht];if(n)return n;for(var s=e.parentNode;s;){if(n=s[nn]||s[Ht]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(e=rh(e);e!==null;){if(s=e[Ht])return s;e=rh(e)}return n}e=s,s=e.parentNode}return null}function Pi(e){return e=e[Ht]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function As(e){return e[Ci]||null}var Zo=[],Er=-1;function jn(e){return{current:e}}function ze(e){0>Er||(e.current=Zo[Er],Zo[Er]=null,Er--)}function Ee(e,n){Er++,Zo[Er]=e.current,e.current=n}var kn={},nt=jn(kn),ut=jn(!1),Yn=kn;function Rr(e,n){var s=e.type.contextTypes;if(!s)return kn;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in s)d[p]=n[p];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=d),d}function ht(e){return e=e.childContextTypes,e!=null}function Ms(){ze(ut),ze(nt)}function ih(e,n,s){if(nt.current!==kn)throw Error(a(168));Ee(nt,n),Ee(ut,s)}function sh(e,n,s){var l=e.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var d in l)if(!(d in n))throw Error(a(108,Ne(e)||"Unknown",d));return I({},s,l)}function Is(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kn,Yn=nt.current,Ee(nt,e),Ee(ut,ut.current),!0}function ah(e,n,s){var l=e.stateNode;if(!l)throw Error(a(169));s?(e=sh(e,n,Yn),l.__reactInternalMemoizedMergedChildContext=e,ze(ut),ze(nt),Ee(nt,e)):ze(ut),Ee(ut,s)}var rn=null,Ds=!1,Jo=!1;function oh(e){rn===null?rn=[e]:rn.push(e)}function y0(e){Ds=!0,oh(e)}function Nn(){if(!Jo&&rn!==null){Jo=!0;var e=0,n=Ce;try{var s=rn;for(Ce=1;e<s.length;e++){var l=s[e];do l=l(!0);while(l!==null)}rn=null,Ds=!1}catch(d){throw rn!==null&&(rn=rn.slice(e+1)),cu(bo,Nn),d}finally{Ce=n,Jo=!1}}return null}var zr=[],Ar=0,Ls=null,Vs=0,kt=[],Nt=0,qn=null,sn=1,an="";function Xn(e,n){zr[Ar++]=Vs,zr[Ar++]=Ls,Ls=e,Vs=n}function lh(e,n,s){kt[Nt++]=sn,kt[Nt++]=an,kt[Nt++]=qn,qn=e;var l=sn;e=an;var d=32-At(l)-1;l&=~(1<<d),s+=1;var p=32-At(n)+d;if(30<p){var v=d-d%5;p=(l&(1<<v)-1).toString(32),l>>=v,d-=v,sn=1<<32-At(n)+d|s<<d|l,an=p+e}else sn=1<<p|s<<d|l,an=e}function el(e){e.return!==null&&(Xn(e,1),lh(e,1,0))}function tl(e){for(;e===Ls;)Ls=zr[--Ar],zr[Ar]=null,Vs=zr[--Ar],zr[Ar]=null;for(;e===qn;)qn=kt[--Nt],kt[Nt]=null,an=kt[--Nt],kt[Nt]=null,sn=kt[--Nt],kt[Nt]=null}var vt=null,yt=null,Me=!1,It=null;function ch(e,n){var s=Tt(5,null,null,0);s.elementType="DELETED",s.stateNode=n,s.return=e,n=e.deletions,n===null?(e.deletions=[s],e.flags|=16):n.push(s)}function dh(e,n){switch(e.tag){case 5:var s=e.type;return n=n.nodeType!==1||s.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,vt=e,yt=bn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,vt=e,yt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(s=qn!==null?{id:sn,overflow:an}:null,e.memoizedState={dehydrated:n,treeContext:s,retryLane:1073741824},s=Tt(18,null,null,0),s.stateNode=n,s.return=e,e.child=s,vt=e,yt=null,!0):!1;default:return!1}}function nl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function rl(e){if(Me){var n=yt;if(n){var s=n;if(!dh(e,n)){if(nl(e))throw Error(a(418));n=bn(s.nextSibling);var l=vt;n&&dh(e,n)?ch(l,s):(e.flags=e.flags&-4097|2,Me=!1,vt=e)}}else{if(nl(e))throw Error(a(418));e.flags=e.flags&-4097|2,Me=!1,vt=e}}}function uh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function Fs(e){if(e!==vt)return!1;if(!Me)return uh(e),Me=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Yo(e.type,e.memoizedProps)),n&&(n=yt)){if(nl(e))throw hh(),Error(a(418));for(;n;)ch(e,n),n=bn(n.nextSibling)}if(uh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"){if(n===0){yt=bn(e.nextSibling);break e}n--}else s!=="$"&&s!=="$!"&&s!=="$?"||n++}e=e.nextSibling}yt=null}}else yt=vt?bn(e.stateNode.nextSibling):null;return!0}function hh(){for(var e=yt;e;)e=bn(e.nextSibling)}function Mr(){yt=vt=null,Me=!1}function il(e){It===null?It=[e]:It.push(e)}var w0=U.ReactCurrentBatchConfig;function Ti(e,n,s){if(e=s.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(a(309));var l=s.stateNode}if(!l)throw Error(a(147,e));var d=l,p=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===p?n.ref:(n=function(v){var b=d.refs;v===null?delete b[p]:b[p]=v},n._stringRef=p,n)}if(typeof e!="string")throw Error(a(284));if(!s._owner)throw Error(a(290,e))}return e}function _s(e,n){throw e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ph(e){var n=e._init;return n(e._payload)}function fh(e){function n(R,S){if(e){var z=R.deletions;z===null?(R.deletions=[S],R.flags|=16):z.push(S)}}function s(R,S){if(!e)return null;for(;S!==null;)n(R,S),S=S.sibling;return null}function l(R,S){for(R=new Map;S!==null;)S.key!==null?R.set(S.key,S):R.set(S.index,S),S=S.sibling;return R}function d(R,S){return R=An(R,S),R.index=0,R.sibling=null,R}function p(R,S,z){return R.index=z,e?(z=R.alternate,z!==null?(z=z.index,z<S?(R.flags|=2,S):z):(R.flags|=2,S)):(R.flags|=1048576,S)}function v(R){return e&&R.alternate===null&&(R.flags|=2),R}function b(R,S,z,H){return S===null||S.tag!==6?(S=ql(z,R.mode,H),S.return=R,S):(S=d(S,z),S.return=R,S)}function k(R,S,z,H){var te=z.type;return te===le?O(R,S,z.props.children,H,z.key):S!==null&&(S.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===me&&ph(te)===S.type)?(H=d(S,z.props),H.ref=Ti(R,S,z),H.return=R,H):(H=ca(z.type,z.key,z.props,null,R.mode,H),H.ref=Ti(R,S,z),H.return=R,H)}function A(R,S,z,H){return S===null||S.tag!==4||S.stateNode.containerInfo!==z.containerInfo||S.stateNode.implementation!==z.implementation?(S=Xl(z,R.mode,H),S.return=R,S):(S=d(S,z.children||[]),S.return=R,S)}function O(R,S,z,H,te){return S===null||S.tag!==7?(S=ir(z,R.mode,H,te),S.return=R,S):(S=d(S,z),S.return=R,S)}function B(R,S,z){if(typeof S=="string"&&S!==""||typeof S=="number")return S=ql(""+S,R.mode,z),S.return=R,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case $:return z=ca(S.type,S.key,S.props,null,R.mode,z),z.ref=Ti(R,null,S),z.return=R,z;case ne:return S=Xl(S,R.mode,z),S.return=R,S;case me:var H=S._init;return B(R,H(S._payload),z)}if(ri(S)||K(S))return S=ir(S,R.mode,z,null),S.return=R,S;_s(R,S)}return null}function _(R,S,z,H){var te=S!==null?S.key:null;if(typeof z=="string"&&z!==""||typeof z=="number")return te!==null?null:b(R,S,""+z,H);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case $:return z.key===te?k(R,S,z,H):null;case ne:return z.key===te?A(R,S,z,H):null;case me:return te=z._init,_(R,S,te(z._payload),H)}if(ri(z)||K(z))return te!==null?null:O(R,S,z,H,null);_s(R,z)}return null}function G(R,S,z,H,te){if(typeof H=="string"&&H!==""||typeof H=="number")return R=R.get(z)||null,b(S,R,""+H,te);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case $:return R=R.get(H.key===null?z:H.key)||null,k(S,R,H,te);case ne:return R=R.get(H.key===null?z:H.key)||null,A(S,R,H,te);case me:var re=H._init;return G(R,S,z,re(H._payload),te)}if(ri(H)||K(H))return R=R.get(z)||null,O(S,R,H,te,null);_s(S,H)}return null}function q(R,S,z,H){for(var te=null,re=null,ie=S,oe=S=0,qe=null;ie!==null&&oe<z.length;oe++){ie.index>oe?(qe=ie,ie=null):qe=ie.sibling;var je=_(R,ie,z[oe],H);if(je===null){ie===null&&(ie=qe);break}e&&ie&&je.alternate===null&&n(R,ie),S=p(je,S,oe),re===null?te=je:re.sibling=je,re=je,ie=qe}if(oe===z.length)return s(R,ie),Me&&Xn(R,oe),te;if(ie===null){for(;oe<z.length;oe++)ie=B(R,z[oe],H),ie!==null&&(S=p(ie,S,oe),re===null?te=ie:re.sibling=ie,re=ie);return Me&&Xn(R,oe),te}for(ie=l(R,ie);oe<z.length;oe++)qe=G(ie,R,oe,z[oe],H),qe!==null&&(e&&qe.alternate!==null&&ie.delete(qe.key===null?oe:qe.key),S=p(qe,S,oe),re===null?te=qe:re.sibling=qe,re=qe);return e&&ie.forEach(function(Mn){return n(R,Mn)}),Me&&Xn(R,oe),te}function J(R,S,z,H){var te=K(z);if(typeof te!="function")throw Error(a(150));if(z=te.call(z),z==null)throw Error(a(151));for(var re=te=null,ie=S,oe=S=0,qe=null,je=z.next();ie!==null&&!je.done;oe++,je=z.next()){ie.index>oe?(qe=ie,ie=null):qe=ie.sibling;var Mn=_(R,ie,je.value,H);if(Mn===null){ie===null&&(ie=qe);break}e&&ie&&Mn.alternate===null&&n(R,ie),S=p(Mn,S,oe),re===null?te=Mn:re.sibling=Mn,re=Mn,ie=qe}if(je.done)return s(R,ie),Me&&Xn(R,oe),te;if(ie===null){for(;!je.done;oe++,je=z.next())je=B(R,je.value,H),je!==null&&(S=p(je,S,oe),re===null?te=je:re.sibling=je,re=je);return Me&&Xn(R,oe),te}for(ie=l(R,ie);!je.done;oe++,je=z.next())je=G(ie,R,oe,je.value,H),je!==null&&(e&&je.alternate!==null&&ie.delete(je.key===null?oe:je.key),S=p(je,S,oe),re===null?te=je:re.sibling=je,re=je);return e&&ie.forEach(function(J0){return n(R,J0)}),Me&&Xn(R,oe),te}function Oe(R,S,z,H){if(typeof z=="object"&&z!==null&&z.type===le&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case $:e:{for(var te=z.key,re=S;re!==null;){if(re.key===te){if(te=z.type,te===le){if(re.tag===7){s(R,re.sibling),S=d(re,z.props.children),S.return=R,R=S;break e}}else if(re.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===me&&ph(te)===re.type){s(R,re.sibling),S=d(re,z.props),S.ref=Ti(R,re,z),S.return=R,R=S;break e}s(R,re);break}else n(R,re);re=re.sibling}z.type===le?(S=ir(z.props.children,R.mode,H,z.key),S.return=R,R=S):(H=ca(z.type,z.key,z.props,null,R.mode,H),H.ref=Ti(R,S,z),H.return=R,R=H)}return v(R);case ne:e:{for(re=z.key;S!==null;){if(S.key===re)if(S.tag===4&&S.stateNode.containerInfo===z.containerInfo&&S.stateNode.implementation===z.implementation){s(R,S.sibling),S=d(S,z.children||[]),S.return=R,R=S;break e}else{s(R,S);break}else n(R,S);S=S.sibling}S=Xl(z,R.mode,H),S.return=R,R=S}return v(R);case me:return re=z._init,Oe(R,S,re(z._payload),H)}if(ri(z))return q(R,S,z,H);if(K(z))return J(R,S,z,H);_s(R,z)}return typeof z=="string"&&z!==""||typeof z=="number"?(z=""+z,S!==null&&S.tag===6?(s(R,S.sibling),S=d(S,z),S.return=R,R=S):(s(R,S),S=ql(z,R.mode,H),S.return=R,R=S),v(R)):s(R,S)}return Oe}var Ir=fh(!0),mh=fh(!1),Os=jn(null),Bs=null,Dr=null,sl=null;function al(){sl=Dr=Bs=null}function ol(e){var n=Os.current;ze(Os),e._currentValue=n}function ll(e,n,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===s)break;e=e.return}}function Lr(e,n){Bs=e,sl=Dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(pt=!0),e.firstContext=null)}function St(e){var n=e._currentValue;if(sl!==e)if(e={context:e,memoizedValue:n,next:null},Dr===null){if(Bs===null)throw Error(a(308));Dr=e,Bs.dependencies={lanes:0,firstContext:e}}else Dr=Dr.next=e;return n}var Qn=null;function cl(e){Qn===null?Qn=[e]:Qn.push(e)}function gh(e,n,s,l){var d=n.interleaved;return d===null?(s.next=s,cl(n)):(s.next=d.next,d.next=s),n.interleaved=s,on(e,l)}function on(e,n){e.lanes|=n;var s=e.alternate;for(s!==null&&(s.lanes|=n),s=e,e=e.return;e!==null;)e.childLanes|=n,s=e.alternate,s!==null&&(s.childLanes|=n),s=e,e=e.return;return s.tag===3?s.stateNode:null}var Sn=!1;function dl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ln(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Cn(e,n,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ve&2)!==0){var d=l.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),l.pending=n,on(e,s)}return d=l.interleaved,d===null?(n.next=n,cl(l)):(n.next=d.next,d.next=n),l.interleaved=n,on(e,s)}function Ws(e,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194240)!==0)){var l=n.lanes;l&=e.pendingLanes,s|=l,n.lanes=s,No(e,s)}}function vh(e,n){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var d=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var v={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};p===null?d=p=v:p=p.next=v,s=s.next}while(s!==null);p===null?d=p=n:p=p.next=n}else d=p=n;s={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:l.shared,effects:l.effects},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=n:e.next=n,s.lastBaseUpdate=n}function Us(e,n,s,l){var d=e.updateQueue;Sn=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,b=d.shared.pending;if(b!==null){d.shared.pending=null;var k=b,A=k.next;k.next=null,v===null?p=A:v.next=A,v=k;var O=e.alternate;O!==null&&(O=O.updateQueue,b=O.lastBaseUpdate,b!==v&&(b===null?O.firstBaseUpdate=A:b.next=A,O.lastBaseUpdate=k))}if(p!==null){var B=d.baseState;v=0,O=A=k=null,b=p;do{var _=b.lane,G=b.eventTime;if((l&_)===_){O!==null&&(O=O.next={eventTime:G,lane:0,tag:b.tag,payload:b.payload,callback:b.callback,next:null});e:{var q=e,J=b;switch(_=n,G=s,J.tag){case 1:if(q=J.payload,typeof q=="function"){B=q.call(G,B,_);break e}B=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=J.payload,_=typeof q=="function"?q.call(G,B,_):q,_==null)break e;B=I({},B,_);break e;case 2:Sn=!0}}b.callback!==null&&b.lane!==0&&(e.flags|=64,_=d.effects,_===null?d.effects=[b]:_.push(b))}else G={eventTime:G,lane:_,tag:b.tag,payload:b.payload,callback:b.callback,next:null},O===null?(A=O=G,k=B):O=O.next=G,v|=_;if(b=b.next,b===null){if(b=d.shared.pending,b===null)break;_=b,b=_.next,_.next=null,d.lastBaseUpdate=_,d.shared.pending=null}}while(!0);if(O===null&&(k=B),d.baseState=k,d.firstBaseUpdate=A,d.lastBaseUpdate=O,n=d.shared.interleaved,n!==null){d=n;do v|=d.lane,d=d.next;while(d!==n)}else p===null&&(d.shared.lanes=0);er|=v,e.lanes=v,e.memoizedState=B}}function yh(e,n,s){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var l=e[n],d=l.callback;if(d!==null){if(l.callback=null,l=s,typeof d!="function")throw Error(a(191,d));d.call(l)}}}var Ei={},$t=jn(Ei),Ri=jn(Ei),zi=jn(Ei);function Zn(e){if(e===Ei)throw Error(a(174));return e}function ul(e,n){switch(Ee(zi,n),Ee(Ri,e),Ee($t,Ei),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ho(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ho(n,e)}ze($t),Ee($t,n)}function Vr(){ze($t),ze(Ri),ze(zi)}function wh(e){Zn(zi.current);var n=Zn($t.current),s=ho(n,e.type);n!==s&&(Ee(Ri,e),Ee($t,s))}function hl(e){Ri.current===e&&(ze($t),ze(Ri))}var De=jn(0);function Hs(e){for(var n=e;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var pl=[];function fl(){for(var e=0;e<pl.length;e++)pl[e]._workInProgressVersionPrimary=null;pl.length=0}var $s=U.ReactCurrentDispatcher,ml=U.ReactCurrentBatchConfig,Jn=0,Le=null,Ue=null,Ke=null,Gs=!1,Ai=!1,Mi=0,b0=0;function rt(){throw Error(a(321))}function gl(e,n){if(n===null)return!1;for(var s=0;s<n.length&&s<e.length;s++)if(!Mt(e[s],n[s]))return!1;return!0}function xl(e,n,s,l,d,p){if(Jn=p,Le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,$s.current=e===null||e.memoizedState===null?S0:C0,e=s(l,d),Ai){p=0;do{if(Ai=!1,Mi=0,25<=p)throw Error(a(301));p+=1,Ke=Ue=null,n.updateQueue=null,$s.current=P0,e=s(l,d)}while(Ai)}if($s.current=qs,n=Ue!==null&&Ue.next!==null,Jn=0,Ke=Ue=Le=null,Gs=!1,n)throw Error(a(300));return e}function vl(){var e=Mi!==0;return Mi=0,e}function Gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Le.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Ct(){if(Ue===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var n=Ke===null?Le.memoizedState:Ke.next;if(n!==null)Ke=n,Ue=e;else{if(e===null)throw Error(a(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Ke===null?Le.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function Ii(e,n){return typeof n=="function"?n(e):n}function yl(e){var n=Ct(),s=n.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=Ue,d=l.baseQueue,p=s.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}l.baseQueue=d=p,s.pending=null}if(d!==null){p=d.next,l=l.baseState;var b=v=null,k=null,A=p;do{var O=A.lane;if((Jn&O)===O)k!==null&&(k=k.next={lane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),l=A.hasEagerState?A.eagerState:e(l,A.action);else{var B={lane:O,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null};k===null?(b=k=B,v=l):k=k.next=B,Le.lanes|=O,er|=O}A=A.next}while(A!==null&&A!==p);k===null?v=l:k.next=b,Mt(l,n.memoizedState)||(pt=!0),n.memoizedState=l,n.baseState=v,n.baseQueue=k,s.lastRenderedState=l}if(e=s.interleaved,e!==null){d=e;do p=d.lane,Le.lanes|=p,er|=p,d=d.next;while(d!==e)}else d===null&&(s.lanes=0);return[n.memoizedState,s.dispatch]}function wl(e){var n=Ct(),s=n.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,d=s.pending,p=n.memoizedState;if(d!==null){s.pending=null;var v=d=d.next;do p=e(p,v.action),v=v.next;while(v!==d);Mt(p,n.memoizedState)||(pt=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),s.lastRenderedState=p}return[p,l]}function bh(){}function jh(e,n){var s=Le,l=Ct(),d=n(),p=!Mt(l.memoizedState,d);if(p&&(l.memoizedState=d,pt=!0),l=l.queue,bl(Sh.bind(null,s,l,e),[e]),l.getSnapshot!==n||p||Ke!==null&&Ke.memoizedState.tag&1){if(s.flags|=2048,Di(9,Nh.bind(null,s,l,d,n),void 0,null),Ye===null)throw Error(a(349));(Jn&30)!==0||kh(s,n,d)}return d}function kh(e,n,s){e.flags|=16384,e={getSnapshot:n,value:s},n=Le.updateQueue,n===null?(n={lastEffect:null,stores:null},Le.updateQueue=n,n.stores=[e]):(s=n.stores,s===null?n.stores=[e]:s.push(e))}function Nh(e,n,s,l){n.value=s,n.getSnapshot=l,Ch(n)&&Ph(e)}function Sh(e,n,s){return s(function(){Ch(n)&&Ph(e)})}function Ch(e){var n=e.getSnapshot;e=e.value;try{var s=n();return!Mt(e,s)}catch{return!0}}function Ph(e){var n=on(e,1);n!==null&&Ft(n,e,1,-1)}function Th(e){var n=Gt();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:e},n.queue=e,e=e.dispatch=N0.bind(null,Le,e),[n.memoizedState,e]}function Di(e,n,s,l){return e={tag:e,create:n,destroy:s,deps:l,next:null},n=Le.updateQueue,n===null?(n={lastEffect:null,stores:null},Le.updateQueue=n,n.lastEffect=e.next=e):(s=n.lastEffect,s===null?n.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,n.lastEffect=e)),e}function Eh(){return Ct().memoizedState}function Ks(e,n,s,l){var d=Gt();Le.flags|=e,d.memoizedState=Di(1|n,s,void 0,l===void 0?null:l)}function Ys(e,n,s,l){var d=Ct();l=l===void 0?null:l;var p=void 0;if(Ue!==null){var v=Ue.memoizedState;if(p=v.destroy,l!==null&&gl(l,v.deps)){d.memoizedState=Di(n,s,p,l);return}}Le.flags|=e,d.memoizedState=Di(1|n,s,p,l)}function Rh(e,n){return Ks(8390656,8,e,n)}function bl(e,n){return Ys(2048,8,e,n)}function zh(e,n){return Ys(4,2,e,n)}function Ah(e,n){return Ys(4,4,e,n)}function Mh(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ih(e,n,s){return s=s!=null?s.concat([e]):null,Ys(4,4,Mh.bind(null,n,e),s)}function jl(){}function Dh(e,n){var s=Ct();n=n===void 0?null:n;var l=s.memoizedState;return l!==null&&n!==null&&gl(n,l[1])?l[0]:(s.memoizedState=[e,n],e)}function Lh(e,n){var s=Ct();n=n===void 0?null:n;var l=s.memoizedState;return l!==null&&n!==null&&gl(n,l[1])?l[0]:(e=e(),s.memoizedState=[e,n],e)}function Vh(e,n,s){return(Jn&21)===0?(e.baseState&&(e.baseState=!1,pt=!0),e.memoizedState=s):(Mt(s,n)||(s=pu(),Le.lanes|=s,er|=s,e.baseState=!0),n)}function j0(e,n){var s=Ce;Ce=s!==0&&4>s?s:4,e(!0);var l=ml.transition;ml.transition={};try{e(!1),n()}finally{Ce=s,ml.transition=l}}function Fh(){return Ct().memoizedState}function k0(e,n,s){var l=Rn(e);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},_h(e))Oh(n,s);else if(s=gh(e,n,s,l),s!==null){var d=lt();Ft(s,e,l,d),Bh(s,n,l)}}function N0(e,n,s){var l=Rn(e),d={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(_h(e))Oh(n,d);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var v=n.lastRenderedState,b=p(v,s);if(d.hasEagerState=!0,d.eagerState=b,Mt(b,v)){var k=n.interleaved;k===null?(d.next=d,cl(n)):(d.next=k.next,k.next=d),n.interleaved=d;return}}catch{}finally{}s=gh(e,n,d,l),s!==null&&(d=lt(),Ft(s,e,l,d),Bh(s,n,l))}}function _h(e){var n=e.alternate;return e===Le||n!==null&&n===Le}function Oh(e,n){Ai=Gs=!0;var s=e.pending;s===null?n.next=n:(n.next=s.next,s.next=n),e.pending=n}function Bh(e,n,s){if((s&4194240)!==0){var l=n.lanes;l&=e.pendingLanes,s|=l,n.lanes=s,No(e,s)}}var qs={readContext:St,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},S0={readContext:St,useCallback:function(e,n){return Gt().memoizedState=[e,n===void 0?null:n],e},useContext:St,useEffect:Rh,useImperativeHandle:function(e,n,s){return s=s!=null?s.concat([e]):null,Ks(4194308,4,Mh.bind(null,n,e),s)},useLayoutEffect:function(e,n){return Ks(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ks(4,2,e,n)},useMemo:function(e,n){var s=Gt();return n=n===void 0?null:n,e=e(),s.memoizedState=[e,n],e},useReducer:function(e,n,s){var l=Gt();return n=s!==void 0?s(n):n,l.memoizedState=l.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=k0.bind(null,Le,e),[l.memoizedState,e]},useRef:function(e){var n=Gt();return e={current:e},n.memoizedState=e},useState:Th,useDebugValue:jl,useDeferredValue:function(e){return Gt().memoizedState=e},useTransition:function(){var e=Th(!1),n=e[0];return e=j0.bind(null,e[1]),Gt().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,s){var l=Le,d=Gt();if(Me){if(s===void 0)throw Error(a(407));s=s()}else{if(s=n(),Ye===null)throw Error(a(349));(Jn&30)!==0||kh(l,n,s)}d.memoizedState=s;var p={value:s,getSnapshot:n};return d.queue=p,Rh(Sh.bind(null,l,p,e),[e]),l.flags|=2048,Di(9,Nh.bind(null,l,p,s,n),void 0,null),s},useId:function(){var e=Gt(),n=Ye.identifierPrefix;if(Me){var s=an,l=sn;s=(l&~(1<<32-At(l)-1)).toString(32)+s,n=":"+n+"R"+s,s=Mi++,0<s&&(n+="H"+s.toString(32)),n+=":"}else s=b0++,n=":"+n+"r"+s.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},C0={readContext:St,useCallback:Dh,useContext:St,useEffect:bl,useImperativeHandle:Ih,useInsertionEffect:zh,useLayoutEffect:Ah,useMemo:Lh,useReducer:yl,useRef:Eh,useState:function(){return yl(Ii)},useDebugValue:jl,useDeferredValue:function(e){var n=Ct();return Vh(n,Ue.memoizedState,e)},useTransition:function(){var e=yl(Ii)[0],n=Ct().memoizedState;return[e,n]},useMutableSource:bh,useSyncExternalStore:jh,useId:Fh,unstable_isNewReconciler:!1},P0={readContext:St,useCallback:Dh,useContext:St,useEffect:bl,useImperativeHandle:Ih,useInsertionEffect:zh,useLayoutEffect:Ah,useMemo:Lh,useReducer:wl,useRef:Eh,useState:function(){return wl(Ii)},useDebugValue:jl,useDeferredValue:function(e){var n=Ct();return Ue===null?n.memoizedState=e:Vh(n,Ue.memoizedState,e)},useTransition:function(){var e=wl(Ii)[0],n=Ct().memoizedState;return[e,n]},useMutableSource:bh,useSyncExternalStore:jh,useId:Fh,unstable_isNewReconciler:!1};function Dt(e,n){if(e&&e.defaultProps){n=I({},n),e=e.defaultProps;for(var s in e)n[s]===void 0&&(n[s]=e[s]);return n}return n}function kl(e,n,s,l){n=e.memoizedState,s=s(l,n),s=s==null?n:I({},n,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Xs={isMounted:function(e){return(e=e._reactInternals)?Gn(e)===e:!1},enqueueSetState:function(e,n,s){e=e._reactInternals;var l=lt(),d=Rn(e),p=ln(l,d);p.payload=n,s!=null&&(p.callback=s),n=Cn(e,p,d),n!==null&&(Ft(n,e,d,l),Ws(n,e,d))},enqueueReplaceState:function(e,n,s){e=e._reactInternals;var l=lt(),d=Rn(e),p=ln(l,d);p.tag=1,p.payload=n,s!=null&&(p.callback=s),n=Cn(e,p,d),n!==null&&(Ft(n,e,d,l),Ws(n,e,d))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var s=lt(),l=Rn(e),d=ln(s,l);d.tag=2,n!=null&&(d.callback=n),n=Cn(e,d,l),n!==null&&(Ft(n,e,l,s),Ws(n,e,l))}};function Wh(e,n,s,l,d,p,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,p,v):n.prototype&&n.prototype.isPureReactComponent?!bi(s,l)||!bi(d,p):!0}function Uh(e,n,s){var l=!1,d=kn,p=n.contextType;return typeof p=="object"&&p!==null?p=St(p):(d=ht(n)?Yn:nt.current,l=n.contextTypes,p=(l=l!=null)?Rr(e,d):kn),n=new n(s,p),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Xs,e.stateNode=n,n._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=d,e.__reactInternalMemoizedMaskedChildContext=p),n}function Hh(e,n,s,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,l),n.state!==e&&Xs.enqueueReplaceState(n,n.state,null)}function Nl(e,n,s,l){var d=e.stateNode;d.props=s,d.state=e.memoizedState,d.refs={},dl(e);var p=n.contextType;typeof p=="object"&&p!==null?d.context=St(p):(p=ht(n)?Yn:nt.current,d.context=Rr(e,p)),d.state=e.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(kl(e,n,p,s),d.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(n=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),n!==d.state&&Xs.enqueueReplaceState(d,d.state,null),Us(e,s,d,l),d.state=e.memoizedState),typeof d.componentDidMount=="function"&&(e.flags|=4194308)}function Fr(e,n){try{var s="",l=n;do s+=se(l),l=l.return;while(l);var d=s}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:e,source:n,stack:d,digest:null}}function Sl(e,n,s){return{value:e,source:null,stack:s??null,digest:n??null}}function Cl(e,n){try{console.error(n.value)}catch(s){setTimeout(function(){throw s})}}var T0=typeof WeakMap=="function"?WeakMap:Map;function $h(e,n,s){s=ln(-1,s),s.tag=3,s.payload={element:null};var l=n.value;return s.callback=function(){ra||(ra=!0,Bl=l),Cl(e,n)},s}function Gh(e,n,s){s=ln(-1,s),s.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var d=n.value;s.payload=function(){return l(d)},s.callback=function(){Cl(e,n)}}var p=e.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(s.callback=function(){Cl(e,n),typeof l!="function"&&(Tn===null?Tn=new Set([this]):Tn.add(this));var v=n.stack;this.componentDidCatch(n.value,{componentStack:v!==null?v:""})}),s}function Kh(e,n,s){var l=e.pingCache;if(l===null){l=e.pingCache=new T0;var d=new Set;l.set(n,d)}else d=l.get(n),d===void 0&&(d=new Set,l.set(n,d));d.has(s)||(d.add(s),e=W0.bind(null,e,n,s),n.then(e,e))}function Yh(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function qh(e,n,s,l,d){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(n=ln(-1,1),n.tag=2,Cn(s,n,1))),s.lanes|=1),e):(e.flags|=65536,e.lanes=d,e)}var E0=U.ReactCurrentOwner,pt=!1;function ot(e,n,s,l){n.child=e===null?mh(n,null,s,l):Ir(n,e.child,s,l)}function Xh(e,n,s,l,d){s=s.render;var p=n.ref;return Lr(n,d),l=xl(e,n,s,l,p,d),s=vl(),e!==null&&!pt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~d,cn(e,n,d)):(Me&&s&&el(n),n.flags|=1,ot(e,n,l,d),n.child)}function Qh(e,n,s,l,d){if(e===null){var p=s.type;return typeof p=="function"&&!Yl(p)&&p.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(n.tag=15,n.type=p,Zh(e,n,p,l,d)):(e=ca(s.type,null,l,n,n.mode,d),e.ref=n.ref,e.return=n,n.child=e)}if(p=e.child,(e.lanes&d)===0){var v=p.memoizedProps;if(s=s.compare,s=s!==null?s:bi,s(v,l)&&e.ref===n.ref)return cn(e,n,d)}return n.flags|=1,e=An(p,l),e.ref=n.ref,e.return=n,n.child=e}function Zh(e,n,s,l,d){if(e!==null){var p=e.memoizedProps;if(bi(p,l)&&e.ref===n.ref)if(pt=!1,n.pendingProps=l=p,(e.lanes&d)!==0)(e.flags&131072)!==0&&(pt=!0);else return n.lanes=e.lanes,cn(e,n,d)}return Pl(e,n,s,l,d)}function Jh(e,n,s){var l=n.pendingProps,d=l.children,p=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(Or,wt),wt|=s;else{if((s&1073741824)===0)return e=p!==null?p.baseLanes|s:s,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Ee(Or,wt),wt|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:s,Ee(Or,wt),wt|=l}else p!==null?(l=p.baseLanes|s,n.memoizedState=null):l=s,Ee(Or,wt),wt|=l;return ot(e,n,d,s),n.child}function ep(e,n){var s=n.ref;(e===null&&s!==null||e!==null&&e.ref!==s)&&(n.flags|=512,n.flags|=2097152)}function Pl(e,n,s,l,d){var p=ht(s)?Yn:nt.current;return p=Rr(n,p),Lr(n,d),s=xl(e,n,s,l,p,d),l=vl(),e!==null&&!pt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~d,cn(e,n,d)):(Me&&l&&el(n),n.flags|=1,ot(e,n,s,d),n.child)}function tp(e,n,s,l,d){if(ht(s)){var p=!0;Is(n)}else p=!1;if(Lr(n,d),n.stateNode===null)Zs(e,n),Uh(n,s,l),Nl(n,s,l,d),l=!0;else if(e===null){var v=n.stateNode,b=n.memoizedProps;v.props=b;var k=v.context,A=s.contextType;typeof A=="object"&&A!==null?A=St(A):(A=ht(s)?Yn:nt.current,A=Rr(n,A));var O=s.getDerivedStateFromProps,B=typeof O=="function"||typeof v.getSnapshotBeforeUpdate=="function";B||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(b!==l||k!==A)&&Hh(n,v,l,A),Sn=!1;var _=n.memoizedState;v.state=_,Us(n,l,v,d),k=n.memoizedState,b!==l||_!==k||ut.current||Sn?(typeof O=="function"&&(kl(n,s,O,l),k=n.memoizedState),(b=Sn||Wh(n,s,b,l,_,k,A))?(B||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(n.flags|=4194308)):(typeof v.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=k),v.props=l,v.state=k,v.context=A,l=b):(typeof v.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{v=n.stateNode,xh(e,n),b=n.memoizedProps,A=n.type===n.elementType?b:Dt(n.type,b),v.props=A,B=n.pendingProps,_=v.context,k=s.contextType,typeof k=="object"&&k!==null?k=St(k):(k=ht(s)?Yn:nt.current,k=Rr(n,k));var G=s.getDerivedStateFromProps;(O=typeof G=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(b!==B||_!==k)&&Hh(n,v,l,k),Sn=!1,_=n.memoizedState,v.state=_,Us(n,l,v,d);var q=n.memoizedState;b!==B||_!==q||ut.current||Sn?(typeof G=="function"&&(kl(n,s,G,l),q=n.memoizedState),(A=Sn||Wh(n,s,A,l,_,q,k)||!1)?(O||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(l,q,k),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(l,q,k)),typeof v.componentDidUpdate=="function"&&(n.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof v.componentDidUpdate!="function"||b===e.memoizedProps&&_===e.memoizedState||(n.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&_===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=q),v.props=l,v.state=q,v.context=k,l=A):(typeof v.componentDidUpdate!="function"||b===e.memoizedProps&&_===e.memoizedState||(n.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&_===e.memoizedState||(n.flags|=1024),l=!1)}return Tl(e,n,s,l,p,d)}function Tl(e,n,s,l,d,p){ep(e,n);var v=(n.flags&128)!==0;if(!l&&!v)return d&&ah(n,s,!1),cn(e,n,p);l=n.stateNode,E0.current=n;var b=v&&typeof s.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,e!==null&&v?(n.child=Ir(n,e.child,null,p),n.child=Ir(n,null,b,p)):ot(e,n,b,p),n.memoizedState=l.state,d&&ah(n,s,!0),n.child}function np(e){var n=e.stateNode;n.pendingContext?ih(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ih(e,n.context,!1),ul(e,n.containerInfo)}function rp(e,n,s,l,d){return Mr(),il(d),n.flags|=256,ot(e,n,s,l),n.child}var El={dehydrated:null,treeContext:null,retryLane:0};function Rl(e){return{baseLanes:e,cachePool:null,transitions:null}}function ip(e,n,s){var l=n.pendingProps,d=De.current,p=!1,v=(n.flags&128)!==0,b;if((b=v)||(b=e!==null&&e.memoizedState===null?!1:(d&2)!==0),b?(p=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(d|=1),Ee(De,d&1),e===null)return rl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(v=l.children,e=l.fallback,p?(l=n.mode,p=n.child,v={mode:"hidden",children:v},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=da(v,l,0,null),e=ir(e,l,s,null),p.return=n,e.return=n,p.sibling=e,n.child=p,n.child.memoizedState=Rl(s),n.memoizedState=El,e):zl(n,v));if(d=e.memoizedState,d!==null&&(b=d.dehydrated,b!==null))return R0(e,n,v,l,b,d,s);if(p){p=l.fallback,v=n.mode,d=e.child,b=d.sibling;var k={mode:"hidden",children:l.children};return(v&1)===0&&n.child!==d?(l=n.child,l.childLanes=0,l.pendingProps=k,n.deletions=null):(l=An(d,k),l.subtreeFlags=d.subtreeFlags&14680064),b!==null?p=An(b,p):(p=ir(p,v,s,null),p.flags|=2),p.return=n,l.return=n,l.sibling=p,n.child=l,l=p,p=n.child,v=e.child.memoizedState,v=v===null?Rl(s):{baseLanes:v.baseLanes|s,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=e.childLanes&~s,n.memoizedState=El,l}return p=e.child,e=p.sibling,l=An(p,{mode:"visible",children:l.children}),(n.mode&1)===0&&(l.lanes=s),l.return=n,l.sibling=null,e!==null&&(s=n.deletions,s===null?(n.deletions=[e],n.flags|=16):s.push(e)),n.child=l,n.memoizedState=null,l}function zl(e,n){return n=da({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Qs(e,n,s,l){return l!==null&&il(l),Ir(n,e.child,null,s),e=zl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function R0(e,n,s,l,d,p,v){if(s)return n.flags&256?(n.flags&=-257,l=Sl(Error(a(422))),Qs(e,n,v,l)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(p=l.fallback,d=n.mode,l=da({mode:"visible",children:l.children},d,0,null),p=ir(p,d,v,null),p.flags|=2,l.return=n,p.return=n,l.sibling=p,n.child=l,(n.mode&1)!==0&&Ir(n,e.child,null,v),n.child.memoizedState=Rl(v),n.memoizedState=El,p);if((n.mode&1)===0)return Qs(e,n,v,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var b=l.dgst;return l=b,p=Error(a(419)),l=Sl(p,l,void 0),Qs(e,n,v,l)}if(b=(v&e.childLanes)!==0,pt||b){if(l=Ye,l!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(l.suspendedLanes|v))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,on(e,d),Ft(l,e,d,-1))}return Kl(),l=Sl(Error(a(421))),Qs(e,n,v,l)}return d.data==="$?"?(n.flags|=128,n.child=e.child,n=U0.bind(null,e),d._reactRetry=n,null):(e=p.treeContext,yt=bn(d.nextSibling),vt=n,Me=!0,It=null,e!==null&&(kt[Nt++]=sn,kt[Nt++]=an,kt[Nt++]=qn,sn=e.id,an=e.overflow,qn=n),n=zl(n,l.children),n.flags|=4096,n)}function sp(e,n,s){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),ll(e.return,n,s)}function Al(e,n,s,l,d){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:d}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=s,p.tailMode=d)}function ap(e,n,s){var l=n.pendingProps,d=l.revealOrder,p=l.tail;if(ot(e,n,l.children,s),l=De.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sp(e,s,n);else if(e.tag===19)sp(e,s,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(Ee(De,l),(n.mode&1)===0)n.memoizedState=null;else switch(d){case"forwards":for(s=n.child,d=null;s!==null;)e=s.alternate,e!==null&&Hs(e)===null&&(d=s),s=s.sibling;s=d,s===null?(d=n.child,n.child=null):(d=s.sibling,s.sibling=null),Al(n,!1,d,s,p);break;case"backwards":for(s=null,d=n.child,n.child=null;d!==null;){if(e=d.alternate,e!==null&&Hs(e)===null){n.child=d;break}e=d.sibling,d.sibling=s,s=d,d=e}Al(n,!0,s,null,p);break;case"together":Al(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Zs(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function cn(e,n,s){if(e!==null&&(n.dependencies=e.dependencies),er|=n.lanes,(s&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,s=An(e,e.pendingProps),n.child=s,s.return=n;e.sibling!==null;)e=e.sibling,s=s.sibling=An(e,e.pendingProps),s.return=n;s.sibling=null}return n.child}function z0(e,n,s){switch(n.tag){case 3:np(n),Mr();break;case 5:wh(n);break;case 1:ht(n.type)&&Is(n);break;case 4:ul(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,d=n.memoizedProps.value;Ee(Os,l._currentValue),l._currentValue=d;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(Ee(De,De.current&1),n.flags|=128,null):(s&n.child.childLanes)!==0?ip(e,n,s):(Ee(De,De.current&1),e=cn(e,n,s),e!==null?e.sibling:null);Ee(De,De.current&1);break;case 19:if(l=(s&n.childLanes)!==0,(e.flags&128)!==0){if(l)return ap(e,n,s);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ee(De,De.current),l)break;return null;case 22:case 23:return n.lanes=0,Jh(e,n,s)}return cn(e,n,s)}var op,Ml,lp,cp;op=function(e,n){for(var s=n.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Ml=function(){},lp=function(e,n,s,l){var d=e.memoizedProps;if(d!==l){e=n.stateNode,Zn($t.current);var p=null;switch(s){case"input":d=fn(e,d),l=fn(e,l),p=[];break;case"select":d=I({},d,{value:void 0}),l=I({},l,{value:void 0}),p=[];break;case"textarea":d=uo(e,d),l=uo(e,l),p=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=zs)}po(s,l);var v;s=null;for(A in d)if(!l.hasOwnProperty(A)&&d.hasOwnProperty(A)&&d[A]!=null)if(A==="style"){var b=d[A];for(v in b)b.hasOwnProperty(v)&&(s||(s={}),s[v]="")}else A!=="dangerouslySetInnerHTML"&&A!=="children"&&A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&A!=="autoFocus"&&(c.hasOwnProperty(A)?p||(p=[]):(p=p||[]).push(A,null));for(A in l){var k=l[A];if(b=d?.[A],l.hasOwnProperty(A)&&k!==b&&(k!=null||b!=null))if(A==="style")if(b){for(v in b)!b.hasOwnProperty(v)||k&&k.hasOwnProperty(v)||(s||(s={}),s[v]="");for(v in k)k.hasOwnProperty(v)&&b[v]!==k[v]&&(s||(s={}),s[v]=k[v])}else s||(p||(p=[]),p.push(A,s)),s=k;else A==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,b=b?b.__html:void 0,k!=null&&b!==k&&(p=p||[]).push(A,k)):A==="children"?typeof k!="string"&&typeof k!="number"||(p=p||[]).push(A,""+k):A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&(c.hasOwnProperty(A)?(k!=null&&A==="onScroll"&&Re("scroll",e),p||b===k||(p=[])):(p=p||[]).push(A,k))}s&&(p=p||[]).push("style",s);var A=p;(n.updateQueue=A)&&(n.flags|=4)}},cp=function(e,n,s,l){s!==l&&(n.flags|=4)};function Li(e,n){if(!Me)switch(e.tailMode){case"hidden":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function it(e){var n=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(n)for(var d=e.child;d!==null;)s|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)s|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=l,e.childLanes=s,n}function A0(e,n,s){var l=n.pendingProps;switch(tl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(n),null;case 1:return ht(n.type)&&Ms(),it(n),null;case 3:return l=n.stateNode,Vr(),ze(ut),ze(nt),fl(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Fs(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,It!==null&&(Hl(It),It=null))),Ml(e,n),it(n),null;case 5:hl(n);var d=Zn(zi.current);if(s=n.type,e!==null&&n.stateNode!=null)lp(e,n,s,l,d),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(a(166));return it(n),null}if(e=Zn($t.current),Fs(n)){l=n.stateNode,s=n.type;var p=n.memoizedProps;switch(l[Ht]=n,l[Ci]=p,e=(n.mode&1)!==0,s){case"dialog":Re("cancel",l),Re("close",l);break;case"iframe":case"object":case"embed":Re("load",l);break;case"video":case"audio":for(d=0;d<ki.length;d++)Re(ki[d],l);break;case"source":Re("error",l);break;case"img":case"image":case"link":Re("error",l),Re("load",l);break;case"details":Re("toggle",l);break;case"input":Ud(l,p),Re("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Re("invalid",l);break;case"textarea":Gd(l,p),Re("invalid",l)}po(s,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var b=p[v];v==="children"?typeof b=="string"?l.textContent!==b&&(p.suppressHydrationWarning!==!0&&Rs(l.textContent,b,e),d=["children",b]):typeof b=="number"&&l.textContent!==""+b&&(p.suppressHydrationWarning!==!0&&Rs(l.textContent,b,e),d=["children",""+b]):c.hasOwnProperty(v)&&b!=null&&v==="onScroll"&&Re("scroll",l)}switch(s){case"input":tn(l),$d(l,p,!0);break;case"textarea":tn(l),Yd(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=zs)}l=d,n.updateQueue=l,l!==null&&(n.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qd(s)),e==="http://www.w3.org/1999/xhtml"?s==="script"?(e=v.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=v.createElement(s,{is:l.is}):(e=v.createElement(s),s==="select"&&(v=e,l.multiple?v.multiple=!0:l.size&&(v.size=l.size))):e=v.createElementNS(e,s),e[Ht]=n,e[Ci]=l,op(e,n,!1,!1),n.stateNode=e;e:{switch(v=fo(s,l),s){case"dialog":Re("cancel",e),Re("close",e),d=l;break;case"iframe":case"object":case"embed":Re("load",e),d=l;break;case"video":case"audio":for(d=0;d<ki.length;d++)Re(ki[d],e);d=l;break;case"source":Re("error",e),d=l;break;case"img":case"image":case"link":Re("error",e),Re("load",e),d=l;break;case"details":Re("toggle",e),d=l;break;case"input":Ud(e,l),d=fn(e,l),Re("invalid",e);break;case"option":d=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},d=I({},l,{value:void 0}),Re("invalid",e);break;case"textarea":Gd(e,l),d=uo(e,l),Re("invalid",e);break;default:d=l}po(s,d),b=d;for(p in b)if(b.hasOwnProperty(p)){var k=b[p];p==="style"?Zd(e,k):p==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Xd(e,k)):p==="children"?typeof k=="string"?(s!=="textarea"||k!=="")&&ii(e,k):typeof k=="number"&&ii(e,""+k):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(c.hasOwnProperty(p)?k!=null&&p==="onScroll"&&Re("scroll",e):k!=null&&D(e,p,k,v))}switch(s){case"input":tn(e),$d(e,l,!1);break;case"textarea":tn(e),Yd(e);break;case"option":l.value!=null&&e.setAttribute("value",""+be(l.value));break;case"select":e.multiple=!!l.multiple,p=l.value,p!=null?vr(e,!!l.multiple,p,!1):l.defaultValue!=null&&vr(e,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(e.onclick=zs)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return it(n),null;case 6:if(e&&n.stateNode!=null)cp(e,n,e.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(a(166));if(s=Zn(zi.current),Zn($t.current),Fs(n)){if(l=n.stateNode,s=n.memoizedProps,l[Ht]=n,(p=l.nodeValue!==s)&&(e=vt,e!==null))switch(e.tag){case 3:Rs(l.nodeValue,s,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Rs(l.nodeValue,s,(e.mode&1)!==0)}p&&(n.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[Ht]=n,n.stateNode=l}return it(n),null;case 13:if(ze(De),l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Me&&yt!==null&&(n.mode&1)!==0&&(n.flags&128)===0)hh(),Mr(),n.flags|=98560,p=!1;else if(p=Fs(n),l!==null&&l.dehydrated!==null){if(e===null){if(!p)throw Error(a(318));if(p=n.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(a(317));p[Ht]=n}else Mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;it(n),p=!1}else It!==null&&(Hl(It),It=null),p=!0;if(!p)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=s,n):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(De.current&1)!==0?He===0&&(He=3):Kl())),n.updateQueue!==null&&(n.flags|=4),it(n),null);case 4:return Vr(),Ml(e,n),e===null&&Ni(n.stateNode.containerInfo),it(n),null;case 10:return ol(n.type._context),it(n),null;case 17:return ht(n.type)&&Ms(),it(n),null;case 19:if(ze(De),p=n.memoizedState,p===null)return it(n),null;if(l=(n.flags&128)!==0,v=p.rendering,v===null)if(l)Li(p,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(v=Hs(e),v!==null){for(n.flags|=128,Li(p,!1),l=v.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=s,s=n.child;s!==null;)p=s,e=l,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=e,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,e=v.dependencies,p.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),s=s.sibling;return Ee(De,De.current&1|2),n.child}e=e.sibling}p.tail!==null&&_e()>Br&&(n.flags|=128,l=!0,Li(p,!1),n.lanes=4194304)}else{if(!l)if(e=Hs(v),e!==null){if(n.flags|=128,l=!0,s=e.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),Li(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!Me)return it(n),null}else 2*_e()-p.renderingStartTime>Br&&s!==1073741824&&(n.flags|=128,l=!0,Li(p,!1),n.lanes=4194304);p.isBackwards?(v.sibling=n.child,n.child=v):(s=p.last,s!==null?s.sibling=v:n.child=v,p.last=v)}return p.tail!==null?(n=p.tail,p.rendering=n,p.tail=n.sibling,p.renderingStartTime=_e(),n.sibling=null,s=De.current,Ee(De,l?s&1|2:s&1),n):(it(n),null);case 22:case 23:return Gl(),l=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(n.flags|=8192),l&&(n.mode&1)!==0?(wt&1073741824)!==0&&(it(n),n.subtreeFlags&6&&(n.flags|=8192)):it(n),null;case 24:return null;case 25:return null}throw Error(a(156,n.tag))}function M0(e,n){switch(tl(n),n.tag){case 1:return ht(n.type)&&Ms(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Vr(),ze(ut),ze(nt),fl(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return hl(n),null;case 13:if(ze(De),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Mr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ze(De),null;case 4:return Vr(),null;case 10:return ol(n.type._context),null;case 22:case 23:return Gl(),null;case 24:return null;default:return null}}var Js=!1,st=!1,I0=typeof WeakSet=="function"?WeakSet:Set,Y=null;function _r(e,n){var s=e.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){Ve(e,n,l)}else s.current=null}function Il(e,n,s){try{s()}catch(l){Ve(e,n,l)}}var dp=!1;function D0(e,n){if(Go=ys,e=Wu(),Fo(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var d=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var v=0,b=-1,k=-1,A=0,O=0,B=e,_=null;t:for(;;){for(var G;B!==s||d!==0&&B.nodeType!==3||(b=v+d),B!==p||l!==0&&B.nodeType!==3||(k=v+l),B.nodeType===3&&(v+=B.nodeValue.length),(G=B.firstChild)!==null;)_=B,B=G;for(;;){if(B===e)break t;if(_===s&&++A===d&&(b=v),_===p&&++O===l&&(k=v),(G=B.nextSibling)!==null)break;B=_,_=B.parentNode}B=G}s=b===-1||k===-1?null:{start:b,end:k}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ko={focusedElem:e,selectionRange:s},ys=!1,Y=n;Y!==null;)if(n=Y,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Y=e;else for(;Y!==null;){n=Y;try{var q=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(q!==null){var J=q.memoizedProps,Oe=q.memoizedState,R=n.stateNode,S=R.getSnapshotBeforeUpdate(n.elementType===n.type?J:Dt(n.type,J),Oe);R.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var z=n.stateNode.containerInfo;z.nodeType===1?z.textContent="":z.nodeType===9&&z.documentElement&&z.removeChild(z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(H){Ve(n,n.return,H)}if(e=n.sibling,e!==null){e.return=n.return,Y=e;break}Y=n.return}return q=dp,dp=!1,q}function Vi(e,n,s){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&e)===e){var p=d.destroy;d.destroy=void 0,p!==void 0&&Il(n,s,p)}d=d.next}while(d!==l)}}function ea(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&e)===e){var l=s.create;s.destroy=l()}s=s.next}while(s!==n)}}function Dl(e){var n=e.ref;if(n!==null){var s=e.stateNode;switch(e.tag){case 5:e=s;break;default:e=s}typeof n=="function"?n(e):n.current=e}}function up(e){var n=e.alternate;n!==null&&(e.alternate=null,up(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ht],delete n[Ci],delete n[Qo],delete n[x0],delete n[v0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hp(e){return e.tag===5||e.tag===3||e.tag===4}function pp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ll(e,n,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?s.nodeType===8?s.parentNode.insertBefore(e,n):s.insertBefore(e,n):(s.nodeType===8?(n=s.parentNode,n.insertBefore(e,s)):(n=s,n.appendChild(e)),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=zs));else if(l!==4&&(e=e.child,e!==null))for(Ll(e,n,s),e=e.sibling;e!==null;)Ll(e,n,s),e=e.sibling}function Vl(e,n,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?s.insertBefore(e,n):s.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(Vl(e,n,s),e=e.sibling;e!==null;)Vl(e,n,s),e=e.sibling}var Xe=null,Lt=!1;function Pn(e,n,s){for(s=s.child;s!==null;)fp(e,n,s),s=s.sibling}function fp(e,n,s){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(ps,s)}catch{}switch(s.tag){case 5:st||_r(s,n);case 6:var l=Xe,d=Lt;Xe=null,Pn(e,n,s),Xe=l,Lt=d,Xe!==null&&(Lt?(e=Xe,s=s.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)):Xe.removeChild(s.stateNode));break;case 18:Xe!==null&&(Lt?(e=Xe,s=s.stateNode,e.nodeType===8?Xo(e.parentNode,s):e.nodeType===1&&Xo(e,s),mi(e)):Xo(Xe,s.stateNode));break;case 4:l=Xe,d=Lt,Xe=s.stateNode.containerInfo,Lt=!0,Pn(e,n,s),Xe=l,Lt=d;break;case 0:case 11:case 14:case 15:if(!st&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&Il(s,n,v),d=d.next}while(d!==l)}Pn(e,n,s);break;case 1:if(!st&&(_r(s,n),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(b){Ve(s,n,b)}Pn(e,n,s);break;case 21:Pn(e,n,s);break;case 22:s.mode&1?(st=(l=st)||s.memoizedState!==null,Pn(e,n,s),st=l):Pn(e,n,s);break;default:Pn(e,n,s)}}function mp(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var s=e.stateNode;s===null&&(s=e.stateNode=new I0),n.forEach(function(l){var d=H0.bind(null,e,l);s.has(l)||(s.add(l),l.then(d,d))})}}function Vt(e,n){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var d=s[l];try{var p=e,v=n,b=v;e:for(;b!==null;){switch(b.tag){case 5:Xe=b.stateNode,Lt=!1;break e;case 3:Xe=b.stateNode.containerInfo,Lt=!0;break e;case 4:Xe=b.stateNode.containerInfo,Lt=!0;break e}b=b.return}if(Xe===null)throw Error(a(160));fp(p,v,d),Xe=null,Lt=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(A){Ve(d,n,A)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)gp(n,e),n=n.sibling}function gp(e,n){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Vt(n,e),Kt(e),l&4){try{Vi(3,e,e.return),ea(3,e)}catch(J){Ve(e,e.return,J)}try{Vi(5,e,e.return)}catch(J){Ve(e,e.return,J)}}break;case 1:Vt(n,e),Kt(e),l&512&&s!==null&&_r(s,s.return);break;case 5:if(Vt(n,e),Kt(e),l&512&&s!==null&&_r(s,s.return),e.flags&32){var d=e.stateNode;try{ii(d,"")}catch(J){Ve(e,e.return,J)}}if(l&4&&(d=e.stateNode,d!=null)){var p=e.memoizedProps,v=s!==null?s.memoizedProps:p,b=e.type,k=e.updateQueue;if(e.updateQueue=null,k!==null)try{b==="input"&&p.type==="radio"&&p.name!=null&&Hd(d,p),fo(b,v);var A=fo(b,p);for(v=0;v<k.length;v+=2){var O=k[v],B=k[v+1];O==="style"?Zd(d,B):O==="dangerouslySetInnerHTML"?Xd(d,B):O==="children"?ii(d,B):D(d,O,B,A)}switch(b){case"input":lo(d,p);break;case"textarea":Kd(d,p);break;case"select":var _=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var G=p.value;G!=null?vr(d,!!p.multiple,G,!1):_!==!!p.multiple&&(p.defaultValue!=null?vr(d,!!p.multiple,p.defaultValue,!0):vr(d,!!p.multiple,p.multiple?[]:"",!1))}d[Ci]=p}catch(J){Ve(e,e.return,J)}}break;case 6:if(Vt(n,e),Kt(e),l&4){if(e.stateNode===null)throw Error(a(162));d=e.stateNode,p=e.memoizedProps;try{d.nodeValue=p}catch(J){Ve(e,e.return,J)}}break;case 3:if(Vt(n,e),Kt(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{mi(n.containerInfo)}catch(J){Ve(e,e.return,J)}break;case 4:Vt(n,e),Kt(e);break;case 13:Vt(n,e),Kt(e),d=e.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Ol=_e())),l&4&&mp(e);break;case 22:if(O=s!==null&&s.memoizedState!==null,e.mode&1?(st=(A=st)||O,Vt(n,e),st=A):Vt(n,e),Kt(e),l&8192){if(A=e.memoizedState!==null,(e.stateNode.isHidden=A)&&!O&&(e.mode&1)!==0)for(Y=e,O=e.child;O!==null;){for(B=Y=O;Y!==null;){switch(_=Y,G=_.child,_.tag){case 0:case 11:case 14:case 15:Vi(4,_,_.return);break;case 1:_r(_,_.return);var q=_.stateNode;if(typeof q.componentWillUnmount=="function"){l=_,s=_.return;try{n=l,q.props=n.memoizedProps,q.state=n.memoizedState,q.componentWillUnmount()}catch(J){Ve(l,s,J)}}break;case 5:_r(_,_.return);break;case 22:if(_.memoizedState!==null){yp(B);continue}}G!==null?(G.return=_,Y=G):yp(B)}O=O.sibling}e:for(O=null,B=e;;){if(B.tag===5){if(O===null){O=B;try{d=B.stateNode,A?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(b=B.stateNode,k=B.memoizedProps.style,v=k!=null&&k.hasOwnProperty("display")?k.display:null,b.style.display=Qd("display",v))}catch(J){Ve(e,e.return,J)}}}else if(B.tag===6){if(O===null)try{B.stateNode.nodeValue=A?"":B.memoizedProps}catch(J){Ve(e,e.return,J)}}else if((B.tag!==22&&B.tag!==23||B.memoizedState===null||B===e)&&B.child!==null){B.child.return=B,B=B.child;continue}if(B===e)break e;for(;B.sibling===null;){if(B.return===null||B.return===e)break e;O===B&&(O=null),B=B.return}O===B&&(O=null),B.sibling.return=B.return,B=B.sibling}}break;case 19:Vt(n,e),Kt(e),l&4&&mp(e);break;case 21:break;default:Vt(n,e),Kt(e)}}function Kt(e){var n=e.flags;if(n&2){try{e:{for(var s=e.return;s!==null;){if(hp(s)){var l=s;break e}s=s.return}throw Error(a(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&(ii(d,""),l.flags&=-33);var p=pp(e);Vl(e,p,d);break;case 3:case 4:var v=l.stateNode.containerInfo,b=pp(e);Ll(e,b,v);break;default:throw Error(a(161))}}catch(k){Ve(e,e.return,k)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function L0(e,n,s){Y=e,xp(e)}function xp(e,n,s){for(var l=(e.mode&1)!==0;Y!==null;){var d=Y,p=d.child;if(d.tag===22&&l){var v=d.memoizedState!==null||Js;if(!v){var b=d.alternate,k=b!==null&&b.memoizedState!==null||st;b=Js;var A=st;if(Js=v,(st=k)&&!A)for(Y=d;Y!==null;)v=Y,k=v.child,v.tag===22&&v.memoizedState!==null?wp(d):k!==null?(k.return=v,Y=k):wp(d);for(;p!==null;)Y=p,xp(p),p=p.sibling;Y=d,Js=b,st=A}vp(e)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,Y=p):vp(e)}}function vp(e){for(;Y!==null;){var n=Y;if((n.flags&8772)!==0){var s=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:st||ea(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!st)if(s===null)l.componentDidMount();else{var d=n.elementType===n.type?s.memoizedProps:Dt(n.type,s.memoizedProps);l.componentDidUpdate(d,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=n.updateQueue;p!==null&&yh(n,p,l);break;case 3:var v=n.updateQueue;if(v!==null){if(s=null,n.child!==null)switch(n.child.tag){case 5:s=n.child.stateNode;break;case 1:s=n.child.stateNode}yh(n,v,s)}break;case 5:var b=n.stateNode;if(s===null&&n.flags&4){s=b;var k=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&s.focus();break;case"img":k.src&&(s.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var A=n.alternate;if(A!==null){var O=A.memoizedState;if(O!==null){var B=O.dehydrated;B!==null&&mi(B)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}st||n.flags&512&&Dl(n)}catch(_){Ve(n,n.return,_)}}if(n===e){Y=null;break}if(s=n.sibling,s!==null){s.return=n.return,Y=s;break}Y=n.return}}function yp(e){for(;Y!==null;){var n=Y;if(n===e){Y=null;break}var s=n.sibling;if(s!==null){s.return=n.return,Y=s;break}Y=n.return}}function wp(e){for(;Y!==null;){var n=Y;try{switch(n.tag){case 0:case 11:case 15:var s=n.return;try{ea(4,n)}catch(k){Ve(n,s,k)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var d=n.return;try{l.componentDidMount()}catch(k){Ve(n,d,k)}}var p=n.return;try{Dl(n)}catch(k){Ve(n,p,k)}break;case 5:var v=n.return;try{Dl(n)}catch(k){Ve(n,v,k)}}}catch(k){Ve(n,n.return,k)}if(n===e){Y=null;break}var b=n.sibling;if(b!==null){b.return=n.return,Y=b;break}Y=n.return}}var V0=Math.ceil,ta=U.ReactCurrentDispatcher,Fl=U.ReactCurrentOwner,Pt=U.ReactCurrentBatchConfig,ve=0,Ye=null,Be=null,Qe=0,wt=0,Or=jn(0),He=0,Fi=null,er=0,na=0,_l=0,_i=null,ft=null,Ol=0,Br=1/0,dn=null,ra=!1,Bl=null,Tn=null,ia=!1,En=null,sa=0,Oi=0,Wl=null,aa=-1,oa=0;function lt(){return(ve&6)!==0?_e():aa!==-1?aa:aa=_e()}function Rn(e){return(e.mode&1)===0?1:(ve&2)!==0&&Qe!==0?Qe&-Qe:w0.transition!==null?(oa===0&&(oa=pu()),oa):(e=Ce,e!==0||(e=window.event,e=e===void 0?16:ju(e.type)),e)}function Ft(e,n,s,l){if(50<Oi)throw Oi=0,Wl=null,Error(a(185));di(e,s,l),((ve&2)===0||e!==Ye)&&(e===Ye&&((ve&2)===0&&(na|=s),He===4&&zn(e,Qe)),mt(e,l),s===1&&ve===0&&(n.mode&1)===0&&(Br=_e()+500,Ds&&Nn()))}function mt(e,n){var s=e.callbackNode;wv(e,n);var l=gs(e,e===Ye?Qe:0);if(l===0)s!==null&&du(s),e.callbackNode=null,e.callbackPriority=0;else if(n=l&-l,e.callbackPriority!==n){if(s!=null&&du(s),n===1)e.tag===0?y0(jp.bind(null,e)):oh(jp.bind(null,e)),m0(function(){(ve&6)===0&&Nn()}),s=null;else{switch(fu(l)){case 1:s=bo;break;case 4:s=uu;break;case 16:s=hs;break;case 536870912:s=hu;break;default:s=hs}s=Rp(s,bp.bind(null,e))}e.callbackPriority=n,e.callbackNode=s}}function bp(e,n){if(aa=-1,oa=0,(ve&6)!==0)throw Error(a(327));var s=e.callbackNode;if(Wr()&&e.callbackNode!==s)return null;var l=gs(e,e===Ye?Qe:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||n)n=la(e,l);else{n=l;var d=ve;ve|=2;var p=Np();(Ye!==e||Qe!==n)&&(dn=null,Br=_e()+500,nr(e,n));do try{O0();break}catch(b){kp(e,b)}while(!0);al(),ta.current=p,ve=d,Be!==null?n=0:(Ye=null,Qe=0,n=He)}if(n!==0){if(n===2&&(d=jo(e),d!==0&&(l=d,n=Ul(e,d))),n===1)throw s=Fi,nr(e,0),zn(e,l),mt(e,_e()),s;if(n===6)zn(e,l);else{if(d=e.current.alternate,(l&30)===0&&!F0(d)&&(n=la(e,l),n===2&&(p=jo(e),p!==0&&(l=p,n=Ul(e,p))),n===1))throw s=Fi,nr(e,0),zn(e,l),mt(e,_e()),s;switch(e.finishedWork=d,e.finishedLanes=l,n){case 0:case 1:throw Error(a(345));case 2:rr(e,ft,dn);break;case 3:if(zn(e,l),(l&130023424)===l&&(n=Ol+500-_e(),10<n)){if(gs(e,0)!==0)break;if(d=e.suspendedLanes,(d&l)!==l){lt(),e.pingedLanes|=e.suspendedLanes&d;break}e.timeoutHandle=qo(rr.bind(null,e,ft,dn),n);break}rr(e,ft,dn);break;case 4:if(zn(e,l),(l&4194240)===l)break;for(n=e.eventTimes,d=-1;0<l;){var v=31-At(l);p=1<<v,v=n[v],v>d&&(d=v),l&=~p}if(l=d,l=_e()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*V0(l/1960))-l,10<l){e.timeoutHandle=qo(rr.bind(null,e,ft,dn),l);break}rr(e,ft,dn);break;case 5:rr(e,ft,dn);break;default:throw Error(a(329))}}}return mt(e,_e()),e.callbackNode===s?bp.bind(null,e):null}function Ul(e,n){var s=_i;return e.current.memoizedState.isDehydrated&&(nr(e,n).flags|=256),e=la(e,n),e!==2&&(n=ft,ft=s,n!==null&&Hl(n)),e}function Hl(e){ft===null?ft=e:ft.push.apply(ft,e)}function F0(e){for(var n=e;;){if(n.flags&16384){var s=n.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var d=s[l],p=d.getSnapshot;d=d.value;try{if(!Mt(p(),d))return!1}catch{return!1}}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function zn(e,n){for(n&=~_l,n&=~na,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var s=31-At(n),l=1<<s;e[s]=-1,n&=~l}}function jp(e){if((ve&6)!==0)throw Error(a(327));Wr();var n=gs(e,0);if((n&1)===0)return mt(e,_e()),null;var s=la(e,n);if(e.tag!==0&&s===2){var l=jo(e);l!==0&&(n=l,s=Ul(e,l))}if(s===1)throw s=Fi,nr(e,0),zn(e,n),mt(e,_e()),s;if(s===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,rr(e,ft,dn),mt(e,_e()),null}function $l(e,n){var s=ve;ve|=1;try{return e(n)}finally{ve=s,ve===0&&(Br=_e()+500,Ds&&Nn())}}function tr(e){En!==null&&En.tag===0&&(ve&6)===0&&Wr();var n=ve;ve|=1;var s=Pt.transition,l=Ce;try{if(Pt.transition=null,Ce=1,e)return e()}finally{Ce=l,Pt.transition=s,ve=n,(ve&6)===0&&Nn()}}function Gl(){wt=Or.current,ze(Or)}function nr(e,n){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;if(s!==-1&&(e.timeoutHandle=-1,f0(s)),Be!==null)for(s=Be.return;s!==null;){var l=s;switch(tl(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Ms();break;case 3:Vr(),ze(ut),ze(nt),fl();break;case 5:hl(l);break;case 4:Vr();break;case 13:ze(De);break;case 19:ze(De);break;case 10:ol(l.type._context);break;case 22:case 23:Gl()}s=s.return}if(Ye=e,Be=e=An(e.current,null),Qe=wt=n,He=0,Fi=null,_l=na=er=0,ft=_i=null,Qn!==null){for(n=0;n<Qn.length;n++)if(s=Qn[n],l=s.interleaved,l!==null){s.interleaved=null;var d=l.next,p=s.pending;if(p!==null){var v=p.next;p.next=d,l.next=v}s.pending=l}Qn=null}return e}function kp(e,n){do{var s=Be;try{if(al(),$s.current=qs,Gs){for(var l=Le.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}Gs=!1}if(Jn=0,Ke=Ue=Le=null,Ai=!1,Mi=0,Fl.current=null,s===null||s.return===null){He=1,Fi=n,Be=null;break}e:{var p=e,v=s.return,b=s,k=n;if(n=Qe,b.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var A=k,O=b,B=O.tag;if((O.mode&1)===0&&(B===0||B===11||B===15)){var _=O.alternate;_?(O.updateQueue=_.updateQueue,O.memoizedState=_.memoizedState,O.lanes=_.lanes):(O.updateQueue=null,O.memoizedState=null)}var G=Yh(v);if(G!==null){G.flags&=-257,qh(G,v,b,p,n),G.mode&1&&Kh(p,A,n),n=G,k=A;var q=n.updateQueue;if(q===null){var J=new Set;J.add(k),n.updateQueue=J}else q.add(k);break e}else{if((n&1)===0){Kh(p,A,n),Kl();break e}k=Error(a(426))}}else if(Me&&b.mode&1){var Oe=Yh(v);if(Oe!==null){(Oe.flags&65536)===0&&(Oe.flags|=256),qh(Oe,v,b,p,n),il(Fr(k,b));break e}}p=k=Fr(k,b),He!==4&&(He=2),_i===null?_i=[p]:_i.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,n&=-n,p.lanes|=n;var R=$h(p,k,n);vh(p,R);break e;case 1:b=k;var S=p.type,z=p.stateNode;if((p.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||z!==null&&typeof z.componentDidCatch=="function"&&(Tn===null||!Tn.has(z)))){p.flags|=65536,n&=-n,p.lanes|=n;var H=Gh(p,b,n);vh(p,H);break e}}p=p.return}while(p!==null)}Cp(s)}catch(te){n=te,Be===s&&s!==null&&(Be=s=s.return);continue}break}while(!0)}function Np(){var e=ta.current;return ta.current=qs,e===null?qs:e}function Kl(){(He===0||He===3||He===2)&&(He=4),Ye===null||(er&268435455)===0&&(na&268435455)===0||zn(Ye,Qe)}function la(e,n){var s=ve;ve|=2;var l=Np();(Ye!==e||Qe!==n)&&(dn=null,nr(e,n));do try{_0();break}catch(d){kp(e,d)}while(!0);if(al(),ve=s,ta.current=l,Be!==null)throw Error(a(261));return Ye=null,Qe=0,He}function _0(){for(;Be!==null;)Sp(Be)}function O0(){for(;Be!==null&&!uv();)Sp(Be)}function Sp(e){var n=Ep(e.alternate,e,wt);e.memoizedProps=e.pendingProps,n===null?Cp(e):Be=n,Fl.current=null}function Cp(e){var n=e;do{var s=n.alternate;if(e=n.return,(n.flags&32768)===0){if(s=A0(s,n,wt),s!==null){Be=s;return}}else{if(s=M0(s,n),s!==null){s.flags&=32767,Be=s;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{He=6,Be=null;return}}if(n=n.sibling,n!==null){Be=n;return}Be=n=e}while(n!==null);He===0&&(He=5)}function rr(e,n,s){var l=Ce,d=Pt.transition;try{Pt.transition=null,Ce=1,B0(e,n,s,l)}finally{Pt.transition=d,Ce=l}return null}function B0(e,n,s,l){do Wr();while(En!==null);if((ve&6)!==0)throw Error(a(327));s=e.finishedWork;var d=e.finishedLanes;if(s===null)return null;if(e.finishedWork=null,e.finishedLanes=0,s===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var p=s.lanes|s.childLanes;if(bv(e,p),e===Ye&&(Be=Ye=null,Qe=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||ia||(ia=!0,Rp(hs,function(){return Wr(),null})),p=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||p){p=Pt.transition,Pt.transition=null;var v=Ce;Ce=1;var b=ve;ve|=4,Fl.current=null,D0(e,s),gp(s,e),o0(Ko),ys=!!Go,Ko=Go=null,e.current=s,L0(s),hv(),ve=b,Ce=v,Pt.transition=p}else e.current=s;if(ia&&(ia=!1,En=e,sa=d),p=e.pendingLanes,p===0&&(Tn=null),mv(s.stateNode),mt(e,_e()),n!==null)for(l=e.onRecoverableError,s=0;s<n.length;s++)d=n[s],l(d.value,{componentStack:d.stack,digest:d.digest});if(ra)throw ra=!1,e=Bl,Bl=null,e;return(sa&1)!==0&&e.tag!==0&&Wr(),p=e.pendingLanes,(p&1)!==0?e===Wl?Oi++:(Oi=0,Wl=e):Oi=0,Nn(),null}function Wr(){if(En!==null){var e=fu(sa),n=Pt.transition,s=Ce;try{if(Pt.transition=null,Ce=16>e?16:e,En===null)var l=!1;else{if(e=En,En=null,sa=0,(ve&6)!==0)throw Error(a(331));var d=ve;for(ve|=4,Y=e.current;Y!==null;){var p=Y,v=p.child;if((Y.flags&16)!==0){var b=p.deletions;if(b!==null){for(var k=0;k<b.length;k++){var A=b[k];for(Y=A;Y!==null;){var O=Y;switch(O.tag){case 0:case 11:case 15:Vi(8,O,p)}var B=O.child;if(B!==null)B.return=O,Y=B;else for(;Y!==null;){O=Y;var _=O.sibling,G=O.return;if(up(O),O===A){Y=null;break}if(_!==null){_.return=G,Y=_;break}Y=G}}}var q=p.alternate;if(q!==null){var J=q.child;if(J!==null){q.child=null;do{var Oe=J.sibling;J.sibling=null,J=Oe}while(J!==null)}}Y=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,Y=v;else e:for(;Y!==null;){if(p=Y,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Vi(9,p,p.return)}var R=p.sibling;if(R!==null){R.return=p.return,Y=R;break e}Y=p.return}}var S=e.current;for(Y=S;Y!==null;){v=Y;var z=v.child;if((v.subtreeFlags&2064)!==0&&z!==null)z.return=v,Y=z;else e:for(v=S;Y!==null;){if(b=Y,(b.flags&2048)!==0)try{switch(b.tag){case 0:case 11:case 15:ea(9,b)}}catch(te){Ve(b,b.return,te)}if(b===v){Y=null;break e}var H=b.sibling;if(H!==null){H.return=b.return,Y=H;break e}Y=b.return}}if(ve=d,Nn(),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(ps,e)}catch{}l=!0}return l}finally{Ce=s,Pt.transition=n}}return!1}function Pp(e,n,s){n=Fr(s,n),n=$h(e,n,1),e=Cn(e,n,1),n=lt(),e!==null&&(di(e,1,n),mt(e,n))}function Ve(e,n,s){if(e.tag===3)Pp(e,e,s);else for(;n!==null;){if(n.tag===3){Pp(n,e,s);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Tn===null||!Tn.has(l))){e=Fr(s,e),e=Gh(n,e,1),n=Cn(n,e,1),e=lt(),n!==null&&(di(n,1,e),mt(n,e));break}}n=n.return}}function W0(e,n,s){var l=e.pingCache;l!==null&&l.delete(n),n=lt(),e.pingedLanes|=e.suspendedLanes&s,Ye===e&&(Qe&s)===s&&(He===4||He===3&&(Qe&130023424)===Qe&&500>_e()-Ol?nr(e,0):_l|=s),mt(e,n)}function Tp(e,n){n===0&&((e.mode&1)===0?n=1:(n=ms,ms<<=1,(ms&130023424)===0&&(ms=4194304)));var s=lt();e=on(e,n),e!==null&&(di(e,n,s),mt(e,s))}function U0(e){var n=e.memoizedState,s=0;n!==null&&(s=n.retryLane),Tp(e,s)}function H0(e,n){var s=0;switch(e.tag){case 13:var l=e.stateNode,d=e.memoizedState;d!==null&&(s=d.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(a(314))}l!==null&&l.delete(n),Tp(e,s)}var Ep;Ep=function(e,n,s){if(e!==null)if(e.memoizedProps!==n.pendingProps||ut.current)pt=!0;else{if((e.lanes&s)===0&&(n.flags&128)===0)return pt=!1,z0(e,n,s);pt=(e.flags&131072)!==0}else pt=!1,Me&&(n.flags&1048576)!==0&&lh(n,Vs,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;Zs(e,n),e=n.pendingProps;var d=Rr(n,nt.current);Lr(n,s),d=xl(null,n,l,e,d,s);var p=vl();return n.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ht(l)?(p=!0,Is(n)):p=!1,n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,dl(n),d.updater=Xs,n.stateNode=d,d._reactInternals=n,Nl(n,l,e,s),n=Tl(null,n,l,!0,p,s)):(n.tag=0,Me&&p&&el(n),ot(null,n,d,s),n=n.child),n;case 16:l=n.elementType;e:{switch(Zs(e,n),e=n.pendingProps,d=l._init,l=d(l._payload),n.type=l,d=n.tag=G0(l),e=Dt(l,e),d){case 0:n=Pl(null,n,l,e,s);break e;case 1:n=tp(null,n,l,e,s);break e;case 11:n=Xh(null,n,l,e,s);break e;case 14:n=Qh(null,n,l,Dt(l.type,e),s);break e}throw Error(a(306,l,""))}return n;case 0:return l=n.type,d=n.pendingProps,d=n.elementType===l?d:Dt(l,d),Pl(e,n,l,d,s);case 1:return l=n.type,d=n.pendingProps,d=n.elementType===l?d:Dt(l,d),tp(e,n,l,d,s);case 3:e:{if(np(n),e===null)throw Error(a(387));l=n.pendingProps,p=n.memoizedState,d=p.element,xh(e,n),Us(n,l,null,s);var v=n.memoizedState;if(l=v.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){d=Fr(Error(a(423)),n),n=rp(e,n,l,s,d);break e}else if(l!==d){d=Fr(Error(a(424)),n),n=rp(e,n,l,s,d);break e}else for(yt=bn(n.stateNode.containerInfo.firstChild),vt=n,Me=!0,It=null,s=mh(n,null,l,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Mr(),l===d){n=cn(e,n,s);break e}ot(e,n,l,s)}n=n.child}return n;case 5:return wh(n),e===null&&rl(n),l=n.type,d=n.pendingProps,p=e!==null?e.memoizedProps:null,v=d.children,Yo(l,d)?v=null:p!==null&&Yo(l,p)&&(n.flags|=32),ep(e,n),ot(e,n,v,s),n.child;case 6:return e===null&&rl(n),null;case 13:return ip(e,n,s);case 4:return ul(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=Ir(n,null,l,s):ot(e,n,l,s),n.child;case 11:return l=n.type,d=n.pendingProps,d=n.elementType===l?d:Dt(l,d),Xh(e,n,l,d,s);case 7:return ot(e,n,n.pendingProps,s),n.child;case 8:return ot(e,n,n.pendingProps.children,s),n.child;case 12:return ot(e,n,n.pendingProps.children,s),n.child;case 10:e:{if(l=n.type._context,d=n.pendingProps,p=n.memoizedProps,v=d.value,Ee(Os,l._currentValue),l._currentValue=v,p!==null)if(Mt(p.value,v)){if(p.children===d.children&&!ut.current){n=cn(e,n,s);break e}}else for(p=n.child,p!==null&&(p.return=n);p!==null;){var b=p.dependencies;if(b!==null){v=p.child;for(var k=b.firstContext;k!==null;){if(k.context===l){if(p.tag===1){k=ln(-1,s&-s),k.tag=2;var A=p.updateQueue;if(A!==null){A=A.shared;var O=A.pending;O===null?k.next=k:(k.next=O.next,O.next=k),A.pending=k}}p.lanes|=s,k=p.alternate,k!==null&&(k.lanes|=s),ll(p.return,s,n),b.lanes|=s;break}k=k.next}}else if(p.tag===10)v=p.type===n.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(a(341));v.lanes|=s,b=v.alternate,b!==null&&(b.lanes|=s),ll(v,s,n),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===n){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}ot(e,n,d.children,s),n=n.child}return n;case 9:return d=n.type,l=n.pendingProps.children,Lr(n,s),d=St(d),l=l(d),n.flags|=1,ot(e,n,l,s),n.child;case 14:return l=n.type,d=Dt(l,n.pendingProps),d=Dt(l.type,d),Qh(e,n,l,d,s);case 15:return Zh(e,n,n.type,n.pendingProps,s);case 17:return l=n.type,d=n.pendingProps,d=n.elementType===l?d:Dt(l,d),Zs(e,n),n.tag=1,ht(l)?(e=!0,Is(n)):e=!1,Lr(n,s),Uh(n,l,d),Nl(n,l,d,s),Tl(null,n,l,!0,e,s);case 19:return ap(e,n,s);case 22:return Jh(e,n,s)}throw Error(a(156,n.tag))};function Rp(e,n){return cu(e,n)}function $0(e,n,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,n,s,l){return new $0(e,n,s,l)}function Yl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function G0(e){if(typeof e=="function")return Yl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===we)return 11;if(e===ge)return 14}return 2}function An(e,n){var s=e.alternate;return s===null?(s=Tt(e.tag,n,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=n,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&14680064,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,n=e.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s}function ca(e,n,s,l,d,p){var v=2;if(l=e,typeof e=="function")Yl(e)&&(v=1);else if(typeof e=="string")v=5;else e:switch(e){case le:return ir(s.children,d,p,n);case F:v=8,d|=8;break;case ce:return e=Tt(12,s,n,d|2),e.elementType=ce,e.lanes=p,e;case Pe:return e=Tt(13,s,n,d),e.elementType=Pe,e.lanes=p,e;case Se:return e=Tt(19,s,n,d),e.elementType=Se,e.lanes=p,e;case ke:return da(s,d,p,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ee:v=10;break e;case xe:v=9;break e;case we:v=11;break e;case ge:v=14;break e;case me:v=16,l=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return n=Tt(v,s,n,d),n.elementType=e,n.type=l,n.lanes=p,n}function ir(e,n,s,l){return e=Tt(7,e,l,n),e.lanes=s,e}function da(e,n,s,l){return e=Tt(22,e,l,n),e.elementType=ke,e.lanes=s,e.stateNode={isHidden:!1},e}function ql(e,n,s){return e=Tt(6,e,null,n),e.lanes=s,e}function Xl(e,n,s){return n=Tt(4,e.children!==null?e.children:[],e.key,n),n.lanes=s,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function K0(e,n,s,l,d){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ko(0),this.expirationTimes=ko(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ko(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Ql(e,n,s,l,d,p,v,b,k){return e=new K0(e,n,s,b,k),n===1?(n=1,p===!0&&(n|=8)):n=0,p=Tt(3,null,null,n),e.current=p,p.stateNode=e,p.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},dl(p),e}function Y0(e,n,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ne,key:l==null?null:""+l,children:e,containerInfo:n,implementation:s}}function zp(e){if(!e)return kn;e=e._reactInternals;e:{if(Gn(e)!==e||e.tag!==1)throw Error(a(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ht(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(a(171))}if(e.tag===1){var s=e.type;if(ht(s))return sh(e,s,n)}return n}function Ap(e,n,s,l,d,p,v,b,k){return e=Ql(s,l,!0,e,d,p,v,b,k),e.context=zp(null),s=e.current,l=lt(),d=Rn(s),p=ln(l,d),p.callback=n??null,Cn(s,p,d),e.current.lanes=d,di(e,d,l),mt(e,l),e}function ua(e,n,s,l){var d=n.current,p=lt(),v=Rn(d);return s=zp(s),n.context===null?n.context=s:n.pendingContext=s,n=ln(p,v),n.payload={element:e},l=l===void 0?null:l,l!==null&&(n.callback=l),e=Cn(d,n,v),e!==null&&(Ft(e,d,v,p),Ws(e,d,v)),v}function ha(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<n?s:n}}function Zl(e,n){Mp(e,n),(e=e.alternate)&&Mp(e,n)}function q0(){return null}var Ip=typeof reportError=="function"?reportError:function(e){console.error(e)};function Jl(e){this._internalRoot=e}pa.prototype.render=Jl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));ua(e,n,null,null)},pa.prototype.unmount=Jl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;tr(function(){ua(null,e,null,null)}),n[nn]=null}};function pa(e){this._internalRoot=e}pa.prototype.unstable_scheduleHydration=function(e){if(e){var n=xu();e={blockedOn:null,target:e,priority:n};for(var s=0;s<vn.length&&n!==0&&n<vn[s].priority;s++);vn.splice(s,0,e),s===0&&wu(e)}};function ec(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Dp(){}function X0(e,n,s,l,d){if(d){if(typeof l=="function"){var p=l;l=function(){var A=ha(v);p.call(A)}}var v=Ap(n,l,e,0,null,!1,!1,"",Dp);return e._reactRootContainer=v,e[nn]=v.current,Ni(e.nodeType===8?e.parentNode:e),tr(),v}for(;d=e.lastChild;)e.removeChild(d);if(typeof l=="function"){var b=l;l=function(){var A=ha(k);b.call(A)}}var k=Ql(e,0,!1,null,null,!1,!1,"",Dp);return e._reactRootContainer=k,e[nn]=k.current,Ni(e.nodeType===8?e.parentNode:e),tr(function(){ua(n,k,s,l)}),k}function ma(e,n,s,l,d){var p=s._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var b=d;d=function(){var k=ha(v);b.call(k)}}ua(n,v,e,d)}else v=X0(s,n,e,d,l);return ha(v)}mu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var s=ci(n.pendingLanes);s!==0&&(No(n,s|1),mt(n,_e()),(ve&6)===0&&(Br=_e()+500,Nn()))}break;case 13:tr(function(){var l=on(e,1);if(l!==null){var d=lt();Ft(l,e,1,d)}}),Zl(e,1)}},So=function(e){if(e.tag===13){var n=on(e,134217728);if(n!==null){var s=lt();Ft(n,e,134217728,s)}Zl(e,134217728)}},gu=function(e){if(e.tag===13){var n=Rn(e),s=on(e,n);if(s!==null){var l=lt();Ft(s,e,n,l)}Zl(e,n)}},xu=function(){return Ce},vu=function(e,n){var s=Ce;try{return Ce=e,n()}finally{Ce=s}},xo=function(e,n,s){switch(n){case"input":if(lo(e,s),n=s.name,s.type==="radio"&&n!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<s.length;n++){var l=s[n];if(l!==e&&l.form===e.form){var d=As(l);if(!d)throw Error(a(90));$n(l),lo(l,d)}}}break;case"textarea":Kd(e,s);break;case"select":n=s.value,n!=null&&vr(e,!!s.multiple,n,!1)}},nu=$l,ru=tr;var Q0={usingClientEntryPoint:!1,Events:[Pi,Tr,As,eu,tu,$l]},Bi={findFiberByHostInstance:Kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Z0={bundleType:Bi.bundleType,version:Bi.version,rendererPackageName:Bi.rendererPackageName,rendererConfig:Bi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:U.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ou(e),e===null?null:e.stateNode},findFiberByHostInstance:Bi.findFiberByHostInstance||q0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ga.isDisabled&&ga.supportsFiber)try{ps=ga.inject(Z0),Ut=ga}catch{}}return gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q0,gt.createPortal=function(e,n){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ec(n))throw Error(a(200));return Y0(e,n,null,s)},gt.createRoot=function(e,n){if(!ec(e))throw Error(a(299));var s=!1,l="",d=Ip;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),n=Ql(e,1,!1,null,null,s,!1,l,d),e[nn]=n.current,Ni(e.nodeType===8?e.parentNode:e),new Jl(n)},gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=ou(n),e=e===null?null:e.stateNode,e},gt.flushSync=function(e){return tr(e)},gt.hydrate=function(e,n,s){if(!fa(n))throw Error(a(200));return ma(null,e,n,!0,s)},gt.hydrateRoot=function(e,n,s){if(!ec(e))throw Error(a(405));var l=s!=null&&s.hydratedSources||null,d=!1,p="",v=Ip;if(s!=null&&(s.unstable_strictMode===!0&&(d=!0),s.identifierPrefix!==void 0&&(p=s.identifierPrefix),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),n=Ap(n,null,e,1,s??null,d,!1,p,v),e[nn]=n.current,Ni(e),l)for(e=0;e<l.length;e++)s=l[e],d=s._getVersion,d=d(s._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[s,d]:n.mutableSourceEagerHydrationData.push(s,d);return new pa(n)},gt.render=function(e,n,s){if(!fa(n))throw Error(a(200));return ma(null,e,n,!1,s)},gt.unmountComponentAtNode=function(e){if(!fa(e))throw Error(a(40));return e._reactRootContainer?(tr(function(){ma(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1},gt.unstable_batchedUpdates=$l,gt.unstable_renderSubtreeIntoContainer=function(e,n,s,l){if(!fa(s))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return ma(e,n,s,!1,l)},gt.version="18.3.1-next-f1338f8080-20240426",gt}var Up;function Tm(){if(Up)return rc.exports;Up=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}return t(),rc.exports=oy(),rc.exports}var Hp;function ly(){if(Hp)return xa;Hp=1;var t=Tm();return xa.createRoot=t.createRoot,xa.hydrateRoot=t.hydrateRoot,xa}var cy=ly(),j=sd();const dy=ty(j),uy=ey({__proto__:null,default:dy},[j]);/**
 * react-router v7.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var $p="popstate";function Gp(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function hy(t={}){function r(c,u){let{pathname:h="/",search:f="",hash:m=""}=gr(c.location.hash.substring(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),zc("",{pathname:h,search:f,hash:m},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function a(c,u){let h=c.document.querySelector("base"),f="";if(h&&h.getAttribute("href")){let m=c.location.href,g=m.indexOf("#");f=g===-1?m:m.slice(0,g)}return f+"#"+(typeof u=="string"?u:Zi(u))}function o(c,u){zt(c.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return fy(r,a,o,t)}function Ie(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}function zt(t,r){if(!t){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function py(){return Math.random().toString(36).substring(2,10)}function Kp(t,r){return{usr:t.state,key:t.key,idx:r,masked:t.unstable_mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function zc(t,r,a=null,o,c){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof r=="string"?gr(r):r,state:a,key:r&&r.key||o||py(),unstable_mask:c}}function Zi({pathname:t="/",search:r="",hash:a=""}){return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function gr(t){let r={};if(t){let a=t.indexOf("#");a>=0&&(r.hash=t.substring(a),t=t.substring(0,a));let o=t.indexOf("?");o>=0&&(r.search=t.substring(o),t=t.substring(0,o)),t&&(r.pathname=t)}return r}function fy(t,r,a,o={}){let{window:c=document.defaultView,v5Compat:u=!1}=o,h=c.history,f="POP",m=null,g=x();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function x(){return(h.state||{idx:null}).idx}function y(){f="POP";let N=x(),M=N==null?null:N-g;g=N,m&&m({action:f,location:E.location,delta:M})}function w(N,M){f="PUSH";let L=Gp(N)?N:zc(E.location,N,M);a&&a(L,N),g=x()+1;let D=Kp(L,g),U=E.createHref(L.unstable_mask||L);try{h.pushState(D,"",U)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;c.location.assign(U)}u&&m&&m({action:f,location:E.location,delta:1})}function P(N,M){f="REPLACE";let L=Gp(N)?N:zc(E.location,N,M);a&&a(L,N),g=x();let D=Kp(L,g),U=E.createHref(L.unstable_mask||L);h.replaceState(D,"",U),u&&m&&m({action:f,location:E.location,delta:0})}function T(N){return my(N)}let E={get action(){return f},get location(){return t(c,h)},listen(N){if(m)throw new Error("A history only accepts one active listener");return c.addEventListener($p,y),m=N,()=>{c.removeEventListener($p,y),m=null}},createHref(N){return r(c,N)},createURL:T,encodeLocation(N){let M=T(N);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:w,replace:P,go(N){return h.go(N)}};return E}function my(t,r=!1){let a="http://localhost";typeof window<"u"&&(a=window.location.origin!=="null"?window.location.origin:window.location.href),Ie(a,"No window.location.(origin|href) available to create URL");let o=typeof t=="string"?t:Zi(t);return o=o.replace(/ $/,"%20"),!r&&o.startsWith("//")&&(o=a+o),new URL(o,a)}function Em(t,r,a="/"){return gy(t,r,a,!1)}function gy(t,r,a,o){let c=typeof r=="string"?gr(r):r,u=hn(c.pathname||"/",a);if(u==null)return null;let h=Rm(t);xy(h);let f=null;for(let m=0;f==null&&m<h.length;++m){let g=Ty(u);f=Cy(h[m],g,o)}return f}function Rm(t,r=[],a=[],o="",c=!1){let u=(h,f,m=c,g)=>{let x={relativePath:g===void 0?h.path||"":g,caseSensitive:h.caseSensitive===!0,childrenIndex:f,route:h};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(o)&&m)return;Ie(x.relativePath.startsWith(o),`Absolute route path "${x.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(o.length)}let y=Qt([o,x.relativePath]),w=a.concat(x);h.children&&h.children.length>0&&(Ie(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Rm(h.children,r,w,y,m)),!(h.path==null&&!h.index)&&r.push({path:y,score:Ny(y,h.index),routesMeta:w})};return t.forEach((h,f)=>{if(h.path===""||!h.path?.includes("?"))u(h,f);else for(let m of zm(h.path))u(h,f,!0,m)}),r}function zm(t){let r=t.split("/");if(r.length===0)return[];let[a,...o]=r,c=a.endsWith("?"),u=a.replace(/\?$/,"");if(o.length===0)return c?[u,""]:[u];let h=zm(o.join("/")),f=[];return f.push(...h.map(m=>m===""?u:[u,m].join("/"))),c&&f.push(...h),f.map(m=>t.startsWith("/")&&m===""?"/":m)}function xy(t){t.sort((r,a)=>r.score!==a.score?a.score-r.score:Sy(r.routesMeta.map(o=>o.childrenIndex),a.routesMeta.map(o=>o.childrenIndex)))}var vy=/^:[\w-]+$/,yy=3,wy=2,by=1,jy=10,ky=-2,Yp=t=>t==="*";function Ny(t,r){let a=t.split("/"),o=a.length;return a.some(Yp)&&(o+=ky),r&&(o+=wy),a.filter(c=>!Yp(c)).reduce((c,u)=>c+(vy.test(u)?yy:u===""?by:jy),o)}function Sy(t,r){return t.length===r.length&&t.slice(0,-1).every((o,c)=>o===r[c])?t[t.length-1]-r[r.length-1]:0}function Cy(t,r,a=!1){let{routesMeta:o}=t,c={},u="/",h=[];for(let f=0;f<o.length;++f){let m=o[f],g=f===o.length-1,x=u==="/"?r:r.slice(u.length)||"/",y=Ba({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},x),w=m.route;if(!y&&g&&a&&!o[o.length-1].route.index&&(y=Ba({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},x)),!y)return null;Object.assign(c,y.params),h.push({params:c,pathname:Qt([u,y.pathname]),pathnameBase:Ay(Qt([u,y.pathnameBase])),route:w}),y.pathnameBase!=="/"&&(u=Qt([u,y.pathnameBase]))}return h}function Ba(t,r){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[a,o]=Py(t.path,t.caseSensitive,t.end),c=r.match(a);if(!c)return null;let u=c[0],h=u.replace(/(.)\/+$/,"$1"),f=c.slice(1);return{params:o.reduce((g,{paramName:x,isOptional:y},w)=>{if(x==="*"){let T=f[w]||"";h=u.slice(0,u.length-T.length).replace(/(.)\/+$/,"$1")}const P=f[w];return y&&!P?g[x]=void 0:g[x]=(P||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:h,pattern:t}}function Py(t,r=!1,a=!0){zt(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let o=[],c="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,m,g,x)=>{if(o.push({paramName:f,isOptional:m!=null}),m){let y=x.charAt(g+h.length);return y&&y!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(o.push({paramName:"*"}),c+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?c+="\\/*$":t!==""&&t!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,r?void 0:"i"),o]}function Ty(t){try{return t.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return zt(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),t}}function hn(t,r){if(r==="/")return t;if(!t.toLowerCase().startsWith(r.toLowerCase()))return null;let a=r.endsWith("/")?r.length-1:r.length,o=t.charAt(a);return o&&o!=="/"?null:t.slice(a)||"/"}var Ey=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Ry(t,r="/"){let{pathname:a,search:o="",hash:c=""}=typeof t=="string"?gr(t):t,u;return a?(a=a.replace(/\/\/+/g,"/"),a.startsWith("/")?u=qp(a.substring(1),"/"):u=qp(a,r)):u=r,{pathname:u,search:My(o),hash:Iy(c)}}function qp(t,r){let a=r.replace(/\/+$/,"").split("/");return t.split("/").forEach(c=>{c===".."?a.length>1&&a.pop():c!=="."&&a.push(c)}),a.length>1?a.join("/"):"/"}function ac(t,r,a,o){return`Cannot include a '${t}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function zy(t){return t.filter((r,a)=>a===0||r.route.path&&r.route.path.length>0)}function ad(t){let r=zy(t);return r.map((a,o)=>o===r.length-1?a.pathname:a.pathnameBase)}function eo(t,r,a,o=!1){let c;typeof t=="string"?c=gr(t):(c={...t},Ie(!c.pathname||!c.pathname.includes("?"),ac("?","pathname","search",c)),Ie(!c.pathname||!c.pathname.includes("#"),ac("#","pathname","hash",c)),Ie(!c.search||!c.search.includes("#"),ac("#","search","hash",c)));let u=t===""||c.pathname==="",h=u?"/":c.pathname,f;if(h==null)f=a;else{let y=r.length-1;if(!o&&h.startsWith("..")){let w=h.split("/");for(;w[0]==="..";)w.shift(),y-=1;c.pathname=w.join("/")}f=y>=0?r[y]:"/"}let m=Ry(c,f),g=h&&h!=="/"&&h.endsWith("/"),x=(u||h===".")&&a.endsWith("/");return!m.pathname.endsWith("/")&&(g||x)&&(m.pathname+="/"),m}var Qt=t=>t.join("/").replace(/\/\/+/g,"/"),Ay=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),My=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Iy=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,Dy=class{constructor(t,r,a,o=!1){this.status=t,this.statusText=r||"",this.internal=o,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};function Ly(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function Vy(t){return t.map(r=>r.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Am=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Mm(t,r){let a=t;if(typeof a!="string"||!Ey.test(a))return{absoluteURL:void 0,isExternal:!1,to:a};let o=a,c=!1;if(Am)try{let u=new URL(window.location.href),h=a.startsWith("//")?new URL(u.protocol+a):new URL(a),f=hn(h.pathname,r);h.origin===u.origin&&f!=null?a=f+h.search+h.hash:c=!0}catch{zt(!1,`<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:c,to:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Im=["POST","PUT","PATCH","DELETE"];new Set(Im);var Fy=["GET",...Im];new Set(Fy);var Qr=j.createContext(null);Qr.displayName="DataRouter";var to=j.createContext(null);to.displayName="DataRouterState";var Dm=j.createContext(!1);function _y(){return j.useContext(Dm)}var Lm=j.createContext({isTransitioning:!1});Lm.displayName="ViewTransition";var Oy=j.createContext(new Map);Oy.displayName="Fetchers";var By=j.createContext(null);By.displayName="Await";var jt=j.createContext(null);jt.displayName="Navigation";var rs=j.createContext(null);rs.displayName="Location";var en=j.createContext({outlet:null,matches:[],isDataRoute:!1});en.displayName="Route";var od=j.createContext(null);od.displayName="RouteError";var Vm="REACT_ROUTER_ERROR",Wy="REDIRECT",Uy="ROUTE_ERROR_RESPONSE";function Hy(t){if(t.startsWith(`${Vm}:${Wy}:{`))try{let r=JSON.parse(t.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function $y(t){if(t.startsWith(`${Vm}:${Uy}:{`))try{let r=JSON.parse(t.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new Dy(r.status,r.statusText,r.data)}catch{}}function Gy(t,{relative:r}={}){Ie(Zr(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:o}=j.useContext(jt),{hash:c,pathname:u,search:h}=is(t,{relative:r}),f=u;return a!=="/"&&(f=u==="/"?a:Qt([a,u])),o.createHref({pathname:f,search:h,hash:c})}function Zr(){return j.useContext(rs)!=null}function Wt(){return Ie(Zr(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(rs).location}var Fm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function _m(t){j.useContext(jt).static||j.useLayoutEffect(t)}function Om(){let{isDataRoute:t}=j.useContext(en);return t?s1():Ky()}function Ky(){Ie(Zr(),"useNavigate() may be used only in the context of a <Router> component.");let t=j.useContext(Qr),{basename:r,navigator:a}=j.useContext(jt),{matches:o}=j.useContext(en),{pathname:c}=Wt(),u=JSON.stringify(ad(o)),h=j.useRef(!1);return _m(()=>{h.current=!0}),j.useCallback((m,g={})=>{if(zt(h.current,Fm),!h.current)return;if(typeof m=="number"){a.go(m);return}let x=eo(m,JSON.parse(u),c,g.relative==="path");t==null&&r!=="/"&&(x.pathname=x.pathname==="/"?r:Qt([r,x.pathname])),(g.replace?a.replace:a.push)(x,g.state,g)},[r,a,u,c,t])}j.createContext(null);function is(t,{relative:r}={}){let{matches:a}=j.useContext(en),{pathname:o}=Wt(),c=JSON.stringify(ad(a));return j.useMemo(()=>eo(t,JSON.parse(c),o,r==="path"),[t,c,o,r])}function Yy(t,r){return Bm(t,r)}function Bm(t,r,a){Ie(Zr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=j.useContext(jt),{matches:c}=j.useContext(en),u=c[c.length-1],h=u?u.params:{},f=u?u.pathname:"/",m=u?u.pathnameBase:"/",g=u&&u.route;{let N=g&&g.path||"";Um(f,!g||N.endsWith("*")||N.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N==="/"?"*":`${N}/*`}">.`)}let x=Wt(),y;if(r){let N=typeof r=="string"?gr(r):r;Ie(m==="/"||N.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${N.pathname}" was given in the \`location\` prop.`),y=N}else y=x;let w=y.pathname||"/",P=w;if(m!=="/"){let N=m.replace(/^\//,"").split("/");P="/"+w.replace(/^\//,"").split("/").slice(N.length).join("/")}let T=Em(t,{pathname:P});zt(g||T!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),zt(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let E=Jy(T&&T.map(N=>Object.assign({},N,{params:Object.assign({},h,N.params),pathname:Qt([m,o.encodeLocation?o.encodeLocation(N.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?m:Qt([m,o.encodeLocation?o.encodeLocation(N.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:N.pathnameBase])})),c,a);return r&&E?j.createElement(rs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...y},navigationType:"POP"}},E):E}function qy(){let t=i1(),r=Ly(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),a=t instanceof Error?t.stack:null,o="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:o},u={padding:"2px 4px",backgroundColor:o},h=null;return console.error("Error handled by React Router default ErrorBoundary:",t),h=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:u},"ErrorBoundary")," or"," ",j.createElement("code",{style:u},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},r),a?j.createElement("pre",{style:c},a):null,h)}var Xy=j.createElement(qy,null),Wm=class extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){this.props.onError?this.props.onError(t,r):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const a=$y(t.digest);a&&(t=a)}let r=t!==void 0?j.createElement(en.Provider,{value:this.props.routeContext},j.createElement(od.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?j.createElement(Qy,{error:t},r):r}};Wm.contextType=Dm;var oc=new WeakMap;function Qy({children:t,error:r}){let{basename:a}=j.useContext(jt);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let o=Hy(r.digest);if(o){let c=oc.get(r);if(c)throw c;let u=Mm(o.location,a);if(Am&&!oc.get(r))if(u.isExternal||o.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:o.replace}));throw oc.set(r,h),h}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return t}function Zy({routeContext:t,match:r,children:a}){let o=j.useContext(Qr);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),j.createElement(en.Provider,{value:t},a)}function Jy(t,r=[],a){let o=a?.state;if(t==null){if(!o)return null;if(o.errors)t=o.matches;else if(r.length===0&&!o.initialized&&o.matches.length>0)t=o.matches;else return null}let c=t,u=o?.errors;if(u!=null){let x=c.findIndex(y=>y.route.id&&u?.[y.route.id]!==void 0);Ie(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),c=c.slice(0,Math.min(c.length,x+1))}let h=!1,f=-1;if(a&&o){h=o.renderFallback;for(let x=0;x<c.length;x++){let y=c[x];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(f=x),y.route.id){let{loaderData:w,errors:P}=o,T=y.route.loader&&!w.hasOwnProperty(y.route.id)&&(!P||P[y.route.id]===void 0);if(y.route.lazy||T){a.isStatic&&(h=!0),f>=0?c=c.slice(0,f+1):c=[c[0]];break}}}}let m=a?.onError,g=o&&m?(x,y)=>{m(x,{location:o.location,params:o.matches?.[0]?.params??{},unstable_pattern:Vy(o.matches),errorInfo:y})}:void 0;return c.reduceRight((x,y,w)=>{let P,T=!1,E=null,N=null;o&&(P=u&&y.route.id?u[y.route.id]:void 0,E=y.route.errorElement||Xy,h&&(f<0&&w===0?(Um("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,N=null):f===w&&(T=!0,N=y.route.hydrateFallbackElement||null)));let M=r.concat(c.slice(0,w+1)),L=()=>{let D;return P?D=E:T?D=N:y.route.Component?D=j.createElement(y.route.Component,null):y.route.element?D=y.route.element:D=x,j.createElement(Zy,{match:y,routeContext:{outlet:x,matches:M,isDataRoute:o!=null},children:D})};return o&&(y.route.ErrorBoundary||y.route.errorElement||w===0)?j.createElement(Wm,{location:o.location,revalidation:o.revalidation,component:E,error:P,children:L(),routeContext:{outlet:null,matches:M,isDataRoute:!0},onError:g}):L()},null)}function ld(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function e1(t){let r=j.useContext(Qr);return Ie(r,ld(t)),r}function t1(t){let r=j.useContext(to);return Ie(r,ld(t)),r}function n1(t){let r=j.useContext(en);return Ie(r,ld(t)),r}function cd(t){let r=n1(t),a=r.matches[r.matches.length-1];return Ie(a.route.id,`${t} can only be used on routes that contain a unique "id"`),a.route.id}function r1(){return cd("useRouteId")}function i1(){let t=j.useContext(od),r=t1("useRouteError"),a=cd("useRouteError");return t!==void 0?t:r.errors?.[a]}function s1(){let{router:t}=e1("useNavigate"),r=cd("useNavigate"),a=j.useRef(!1);return _m(()=>{a.current=!0}),j.useCallback(async(c,u={})=>{zt(a.current,Fm),a.current&&(typeof c=="number"?await t.navigate(c):await t.navigate(c,{fromRouteId:r,...u}))},[t,r])}var Xp={};function Um(t,r,a){!r&&!Xp[t]&&(Xp[t]=!0,zt(!1,a))}j.memo(a1);function a1({routes:t,future:r,state:a,isStatic:o,onError:c}){return Bm(t,void 0,{state:a,isStatic:o,onError:c})}function o1({to:t,replace:r,state:a,relative:o}){Ie(Zr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:c}=j.useContext(jt);zt(!c,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=j.useContext(en),{pathname:h}=Wt(),f=Om(),m=eo(t,ad(u),h,o==="path"),g=JSON.stringify(m);return j.useEffect(()=>{f(JSON.parse(g),{replace:r,state:a,relative:o})},[f,g,o,r,a]),null}function Yt(t){Ie(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function l1({basename:t="/",children:r=null,location:a,navigationType:o="POP",navigator:c,static:u=!1,unstable_useTransitions:h}){Ie(!Zr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=t.replace(/^\/*/,"/"),m=j.useMemo(()=>({basename:f,navigator:c,static:u,unstable_useTransitions:h,future:{}}),[f,c,u,h]);typeof a=="string"&&(a=gr(a));let{pathname:g="/",search:x="",hash:y="",state:w=null,key:P="default",unstable_mask:T}=a,E=j.useMemo(()=>{let N=hn(g,f);return N==null?null:{location:{pathname:N,search:x,hash:y,state:w,key:P,unstable_mask:T},navigationType:o}},[f,g,x,y,w,P,o,T]);return zt(E!=null,`<Router basename="${f}"> is not able to match the URL "${g}${x}${y}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:j.createElement(jt.Provider,{value:m},j.createElement(rs.Provider,{children:r,value:E}))}function c1({children:t,location:r}){return Yy(Ac(t),r)}function Ac(t,r=[]){let a=[];return j.Children.forEach(t,(o,c)=>{if(!j.isValidElement(o))return;let u=[...r,c];if(o.type===j.Fragment){a.push.apply(a,Ac(o.props.children,u));return}Ie(o.type===Yt,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ie(!o.props.index||!o.props.children,"An index route cannot have child routes.");let h={id:o.props.id||u.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(h.children=Ac(o.props.children,u)),a.push(h)}),a}var Pa="get",Ta="application/x-www-form-urlencoded";function no(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function d1(t){return no(t)&&t.tagName.toLowerCase()==="button"}function u1(t){return no(t)&&t.tagName.toLowerCase()==="form"}function h1(t){return no(t)&&t.tagName.toLowerCase()==="input"}function p1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function f1(t,r){return t.button===0&&(!r||r==="_self")&&!p1(t)}var va=null;function m1(){if(va===null)try{new FormData(document.createElement("form"),0),va=!1}catch{va=!0}return va}var g1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function lc(t){return t!=null&&!g1.has(t)?(zt(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ta}"`),null):t}function x1(t,r){let a,o,c,u,h;if(u1(t)){let f=t.getAttribute("action");o=f?hn(f,r):null,a=t.getAttribute("method")||Pa,c=lc(t.getAttribute("enctype"))||Ta,u=new FormData(t)}else if(d1(t)||h1(t)&&(t.type==="submit"||t.type==="image")){let f=t.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=t.getAttribute("formaction")||f.getAttribute("action");if(o=m?hn(m,r):null,a=t.getAttribute("formmethod")||f.getAttribute("method")||Pa,c=lc(t.getAttribute("formenctype"))||lc(f.getAttribute("enctype"))||Ta,u=new FormData(f,t),!m1()){let{name:g,type:x,value:y}=t;if(x==="image"){let w=g?`${g}.`:"";u.append(`${w}x`,"0"),u.append(`${w}y`,"0")}else g&&u.append(g,y)}}else{if(no(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=Pa,o=null,c=Ta,h=t}return u&&c==="text/plain"&&(h=u,u=void 0),{action:o,method:a.toLowerCase(),encType:c,formData:u,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function dd(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}function Hm(t,r,a,o){let c=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return a?c.pathname.endsWith("/")?c.pathname=`${c.pathname}_.${o}`:c.pathname=`${c.pathname}.${o}`:c.pathname==="/"?c.pathname=`_root.${o}`:r&&hn(c.pathname,r)==="/"?c.pathname=`${r.replace(/\/$/,"")}/_root.${o}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${o}`,c}async function v1(t,r){if(t.id in r)return r[t.id];try{let a=await import(t.module);return r[t.id]=a,a}catch(a){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function y1(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function w1(t,r,a){let o=await Promise.all(t.map(async c=>{let u=r.routes[c.route.id];if(u){let h=await v1(u,a);return h.links?h.links():[]}return[]}));return N1(o.flat(1).filter(y1).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Qp(t,r,a,o,c,u){let h=(m,g)=>a[g]?m.route.id!==a[g].route.id:!0,f=(m,g)=>a[g].pathname!==m.pathname||a[g].route.path?.endsWith("*")&&a[g].params["*"]!==m.params["*"];return u==="assets"?r.filter((m,g)=>h(m,g)||f(m,g)):u==="data"?r.filter((m,g)=>{let x=o.routes[m.route.id];if(!x||!x.hasLoader)return!1;if(h(m,g)||f(m,g))return!0;if(m.route.shouldRevalidate){let y=m.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:a[0]?.params||{},nextUrl:new URL(t,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function b1(t,r,{includeHydrateFallback:a}={}){return j1(t.map(o=>{let c=r.routes[o.route.id];if(!c)return[];let u=[c.module];return c.clientActionModule&&(u=u.concat(c.clientActionModule)),c.clientLoaderModule&&(u=u.concat(c.clientLoaderModule)),a&&c.hydrateFallbackModule&&(u=u.concat(c.hydrateFallbackModule)),c.imports&&(u=u.concat(c.imports)),u}).flat(1))}function j1(t){return[...new Set(t)]}function k1(t){let r={},a=Object.keys(t).sort();for(let o of a)r[o]=t[o];return r}function N1(t,r){let a=new Set;return new Set(r),t.reduce((o,c)=>{let u=JSON.stringify(k1(c));return a.has(u)||(a.add(u),o.push({key:u,link:c})),o},[])}function ud(){let t=j.useContext(Qr);return dd(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function S1(){let t=j.useContext(to);return dd(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var hd=j.createContext(void 0);hd.displayName="FrameworkContext";function pd(){let t=j.useContext(hd);return dd(t,"You must render this element inside a <HydratedRouter> element"),t}function C1(t,r){let a=j.useContext(hd),[o,c]=j.useState(!1),[u,h]=j.useState(!1),{onFocus:f,onBlur:m,onMouseEnter:g,onMouseLeave:x,onTouchStart:y}=r,w=j.useRef(null);j.useEffect(()=>{if(t==="render"&&h(!0),t==="viewport"){let E=M=>{M.forEach(L=>{h(L.isIntersecting)})},N=new IntersectionObserver(E,{threshold:.5});return w.current&&N.observe(w.current),()=>{N.disconnect()}}},[t]),j.useEffect(()=>{if(o){let E=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(E)}}},[o]);let P=()=>{c(!0)},T=()=>{c(!1),h(!1)};return a?t!=="intent"?[u,w,{}]:[u,w,{onFocus:Ui(f,P),onBlur:Ui(m,T),onMouseEnter:Ui(g,P),onMouseLeave:Ui(x,T),onTouchStart:Ui(y,P)}]:[!1,w,{}]}function Ui(t,r){return a=>{t&&t(a),a.defaultPrevented||r(a)}}function P1({page:t,...r}){let a=_y(),{router:o}=ud(),c=j.useMemo(()=>Em(o.routes,t,o.basename),[o.routes,t,o.basename]);return c?a?j.createElement(E1,{page:t,matches:c,...r}):j.createElement(R1,{page:t,matches:c,...r}):null}function T1(t){let{manifest:r,routeModules:a}=pd(),[o,c]=j.useState([]);return j.useEffect(()=>{let u=!1;return w1(t,r,a).then(h=>{u||c(h)}),()=>{u=!0}},[t,r,a]),o}function E1({page:t,matches:r,...a}){let o=Wt(),{future:c}=pd(),{basename:u}=ud(),h=j.useMemo(()=>{if(t===o.pathname+o.search+o.hash)return[];let f=Hm(t,u,c.unstable_trailingSlashAwareDataRequests,"rsc"),m=!1,g=[];for(let x of r)typeof x.route.shouldRevalidate=="function"?m=!0:g.push(x.route.id);return m&&g.length>0&&f.searchParams.set("_routes",g.join(",")),[f.pathname+f.search]},[u,c.unstable_trailingSlashAwareDataRequests,t,o,r]);return j.createElement(j.Fragment,null,h.map(f=>j.createElement("link",{key:f,rel:"prefetch",as:"fetch",href:f,...a})))}function R1({page:t,matches:r,...a}){let o=Wt(),{future:c,manifest:u,routeModules:h}=pd(),{basename:f}=ud(),{loaderData:m,matches:g}=S1(),x=j.useMemo(()=>Qp(t,r,g,u,o,"data"),[t,r,g,u,o]),y=j.useMemo(()=>Qp(t,r,g,u,o,"assets"),[t,r,g,u,o]),w=j.useMemo(()=>{if(t===o.pathname+o.search+o.hash)return[];let E=new Set,N=!1;if(r.forEach(L=>{let D=u.routes[L.route.id];!D||!D.hasLoader||(!x.some(U=>U.route.id===L.route.id)&&L.route.id in m&&h[L.route.id]?.shouldRevalidate||D.hasClientLoader?N=!0:E.add(L.route.id))}),E.size===0)return[];let M=Hm(t,f,c.unstable_trailingSlashAwareDataRequests,"data");return N&&E.size>0&&M.searchParams.set("_routes",r.filter(L=>E.has(L.route.id)).map(L=>L.route.id).join(",")),[M.pathname+M.search]},[f,c.unstable_trailingSlashAwareDataRequests,m,o,u,x,r,t,h]),P=j.useMemo(()=>b1(y,u),[y,u]),T=T1(y);return j.createElement(j.Fragment,null,w.map(E=>j.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...a})),P.map(E=>j.createElement("link",{key:E,rel:"modulepreload",href:E,...a})),T.map(({key:E,link:N})=>j.createElement("link",{key:E,nonce:a.nonce,...N,crossOrigin:N.crossOrigin??a.crossOrigin})))}function z1(...t){return r=>{t.forEach(a=>{typeof a=="function"?a(r):a!=null&&(a.current=r)})}}var A1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{A1&&(window.__reactRouterVersion="7.14.0")}catch{}function M1({basename:t,children:r,unstable_useTransitions:a,window:o}){let c=j.useRef();c.current==null&&(c.current=hy({window:o,v5Compat:!0}));let u=c.current,[h,f]=j.useState({action:u.action,location:u.location}),m=j.useCallback(g=>{a===!1?f(g):j.startTransition(()=>f(g))},[a]);return j.useLayoutEffect(()=>u.listen(m),[u,m]),j.createElement(l1,{basename:t,children:r,location:h.location,navigationType:h.action,navigator:u,unstable_useTransitions:a})}var $m=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ze=j.forwardRef(function({onClick:r,discover:a="render",prefetch:o="none",relative:c,reloadDocument:u,replace:h,unstable_mask:f,state:m,target:g,to:x,preventScrollReset:y,viewTransition:w,unstable_defaultShouldRevalidate:P,...T},E){let{basename:N,navigator:M,unstable_useTransitions:L}=j.useContext(jt),D=typeof x=="string"&&$m.test(x),U=Mm(x,N);x=U.to;let $=Gy(x,{relative:c}),ne=Wt(),le=null;if(f){let ge=eo(f,[],ne.unstable_mask?ne.unstable_mask.pathname:"/",!0);N!=="/"&&(ge.pathname=ge.pathname==="/"?N:Qt([N,ge.pathname])),le=M.createHref(ge)}let[F,ce,ee]=C1(o,T),xe=V1(x,{replace:h,unstable_mask:f,state:m,target:g,preventScrollReset:y,relative:c,viewTransition:w,unstable_defaultShouldRevalidate:P,unstable_useTransitions:L});function we(ge){r&&r(ge),ge.defaultPrevented||xe(ge)}let Pe=!(U.isExternal||u),Se=j.createElement("a",{...T,...ee,href:(Pe?le:void 0)||U.absoluteURL||$,onClick:Pe?we:r,ref:z1(E,ce),target:g,"data-discover":!D&&a==="render"?"true":void 0});return F&&!D?j.createElement(j.Fragment,null,Se,j.createElement(P1,{page:$})):Se});Ze.displayName="Link";var I1=j.forwardRef(function({"aria-current":r="page",caseSensitive:a=!1,className:o="",end:c=!1,style:u,to:h,viewTransition:f,children:m,...g},x){let y=is(h,{relative:g.relative}),w=Wt(),P=j.useContext(to),{navigator:T,basename:E}=j.useContext(jt),N=P!=null&&W1(y)&&f===!0,M=T.encodeLocation?T.encodeLocation(y).pathname:y.pathname,L=w.pathname,D=P&&P.navigation&&P.navigation.location?P.navigation.location.pathname:null;a||(L=L.toLowerCase(),D=D?D.toLowerCase():null,M=M.toLowerCase()),D&&E&&(D=hn(D,E)||D);const U=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let $=L===M||!c&&L.startsWith(M)&&L.charAt(U)==="/",ne=D!=null&&(D===M||!c&&D.startsWith(M)&&D.charAt(M.length)==="/"),le={isActive:$,isPending:ne,isTransitioning:N},F=$?r:void 0,ce;typeof o=="function"?ce=o(le):ce=[o,$?"active":null,ne?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let ee=typeof u=="function"?u(le):u;return j.createElement(Ze,{...g,"aria-current":F,className:ce,ref:x,style:ee,to:h,viewTransition:f},typeof m=="function"?m(le):m)});I1.displayName="NavLink";var D1=j.forwardRef(({discover:t="render",fetcherKey:r,navigate:a,reloadDocument:o,replace:c,state:u,method:h=Pa,action:f,onSubmit:m,relative:g,preventScrollReset:x,viewTransition:y,unstable_defaultShouldRevalidate:w,...P},T)=>{let{unstable_useTransitions:E}=j.useContext(jt),N=O1(),M=B1(f,{relative:g}),L=h.toLowerCase()==="get"?"get":"post",D=typeof f=="string"&&$m.test(f),U=$=>{if(m&&m($),$.defaultPrevented)return;$.preventDefault();let ne=$.nativeEvent.submitter,le=ne?.getAttribute("formmethod")||h,F=()=>N(ne||$.currentTarget,{fetcherKey:r,method:le,navigate:a,replace:c,state:u,relative:g,preventScrollReset:x,viewTransition:y,unstable_defaultShouldRevalidate:w});E&&a!==!1?j.startTransition(()=>F()):F()};return j.createElement("form",{ref:T,method:L,action:M,onSubmit:o?m:U,...P,"data-discover":!D&&t==="render"?"true":void 0})});D1.displayName="Form";function L1(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Gm(t){let r=j.useContext(Qr);return Ie(r,L1(t)),r}function V1(t,{target:r,replace:a,unstable_mask:o,state:c,preventScrollReset:u,relative:h,viewTransition:f,unstable_defaultShouldRevalidate:m,unstable_useTransitions:g}={}){let x=Om(),y=Wt(),w=is(t,{relative:h});return j.useCallback(P=>{if(f1(P,r)){P.preventDefault();let T=a!==void 0?a:Zi(y)===Zi(w),E=()=>x(t,{replace:T,unstable_mask:o,state:c,preventScrollReset:u,relative:h,viewTransition:f,unstable_defaultShouldRevalidate:m});g?j.startTransition(()=>E()):E()}},[y,x,w,a,o,c,r,t,u,h,f,m,g])}var F1=0,_1=()=>`__${String(++F1)}__`;function O1(){let{router:t}=Gm("useSubmit"),{basename:r}=j.useContext(jt),a=r1(),o=t.fetch,c=t.navigate;return j.useCallback(async(u,h={})=>{let{action:f,method:m,encType:g,formData:x,body:y}=x1(u,r);if(h.navigate===!1){let w=h.fetcherKey||_1();await o(w,a,h.action||f,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:x,body:y,formMethod:h.method||m,formEncType:h.encType||g,flushSync:h.flushSync})}else await c(h.action||f,{unstable_defaultShouldRevalidate:h.unstable_defaultShouldRevalidate,preventScrollReset:h.preventScrollReset,formData:x,body:y,formMethod:h.method||m,formEncType:h.encType||g,replace:h.replace,state:h.state,fromRouteId:a,flushSync:h.flushSync,viewTransition:h.viewTransition})},[o,c,r,a])}function B1(t,{relative:r}={}){let{basename:a}=j.useContext(jt),o=j.useContext(en);Ie(o,"useFormAction must be used inside a RouteContext");let[c]=o.matches.slice(-1),u={...is(t||".",{relative:r})},h=Wt();if(t==null){u.search=h.search;let f=new URLSearchParams(u.search),m=f.getAll("index");if(m.some(x=>x==="")){f.delete("index"),m.filter(y=>y).forEach(y=>f.append("index",y));let x=f.toString();u.search=x?`?${x}`:""}}return(!t||t===".")&&c.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(u.pathname=u.pathname==="/"?a:Qt([a,u.pathname])),Zi(u)}function W1(t,{relative:r}={}){let a=j.useContext(Lm);Ie(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Gm("useViewTransitionState"),c=is(t,{relative:r});if(!a.isTransitioning)return!1;let u=hn(a.currentLocation.pathname,o)||a.currentLocation.pathname,h=hn(a.nextLocation.pathname,o)||a.nextLocation.pathname;return Ba(c.pathname,h)!=null||Ba(c.pathname,u)!=null}const Km=j.createContext({});function U1(t){const r=j.useRef(null);return r.current===null&&(r.current=t()),r.current}const H1=typeof window<"u",$1=H1?j.useLayoutEffect:j.useEffect,fd=j.createContext(null);function md(t,r){t.indexOf(r)===-1&&t.push(r)}function Wa(t,r){const a=t.indexOf(r);a>-1&&t.splice(a,1)}const Jt=(t,r,a)=>a>r?r:a<t?t:a;let gd=()=>{};const Fn={},Ym=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function qm(t){return typeof t=="object"&&t!==null}const Xm=t=>/^0[^.\s]+$/u.test(t);function Qm(t){let r;return()=>(r===void 0&&(r=t()),r)}const Rt=t=>t,G1=(t,r)=>a=>r(t(a)),ss=(...t)=>t.reduce(G1),Ji=(t,r,a)=>{const o=r-t;return o===0?1:(a-t)/o};class xd{constructor(){this.subscriptions=[]}add(r){return md(this.subscriptions,r),()=>Wa(this.subscriptions,r)}notify(r,a,o){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](r,a,o);else for(let u=0;u<c;u++){const h=this.subscriptions[u];h&&h(r,a,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const bt=t=>t*1e3,Et=t=>t/1e3;function Zm(t,r){return r?t*(1e3/r):0}const Jm=(t,r,a)=>(((1-3*a+3*r)*t+(3*a-6*r))*t+3*r)*t,K1=1e-7,Y1=12;function q1(t,r,a,o,c){let u,h,f=0;do h=r+(a-r)/2,u=Jm(h,o,c)-t,u>0?a=h:r=h;while(Math.abs(u)>K1&&++f<Y1);return h}function as(t,r,a,o){if(t===r&&a===o)return Rt;const c=u=>q1(u,0,1,t,a);return u=>u===0||u===1?u:Jm(c(u),r,o)}const eg=t=>r=>r<=.5?t(2*r)/2:(2-t(2*(1-r)))/2,tg=t=>r=>1-t(1-r),ng=as(.33,1.53,.69,.99),vd=tg(ng),rg=eg(vd),ig=t=>t>=1?1:(t*=2)<1?.5*vd(t):.5*(2-Math.pow(2,-10*(t-1))),yd=t=>1-Math.sin(Math.acos(t)),sg=tg(yd),ag=eg(yd),X1=as(.42,0,1,1),Q1=as(0,0,.58,1),og=as(.42,0,.58,1),Z1=t=>Array.isArray(t)&&typeof t[0]!="number",lg=t=>Array.isArray(t)&&typeof t[0]=="number",J1={linear:Rt,easeIn:X1,easeInOut:og,easeOut:Q1,circIn:yd,circInOut:ag,circOut:sg,backIn:vd,backInOut:rg,backOut:ng,anticipate:ig},ew=t=>typeof t=="string",Zp=t=>{if(lg(t)){gd(t.length===4);const[r,a,o,c]=t;return as(r,a,o,c)}else if(ew(t))return J1[t];return t},ya=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function tw(t,r){let a=new Set,o=new Set,c=!1,u=!1;const h=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function m(x){h.has(x)&&(g.schedule(x),t()),x(f)}const g={schedule:(x,y=!1,w=!1)=>{const T=w&&c?a:o;return y&&h.add(x),T.add(x),x},cancel:x=>{o.delete(x),h.delete(x)},process:x=>{if(f=x,c){u=!0;return}c=!0;const y=a;a=o,o=y,a.forEach(m),a.clear(),c=!1,u&&(u=!1,g.process(x))}};return g}const nw=40;function cg(t,r){let a=!1,o=!0;const c={delta:0,timestamp:0,isProcessing:!1},u=()=>a=!0,h=ya.reduce((D,U)=>(D[U]=tw(u),D),{}),{setup:f,read:m,resolveKeyframes:g,preUpdate:x,update:y,preRender:w,render:P,postRender:T}=h,E=()=>{const D=Fn.useManualTiming,U=D?c.timestamp:performance.now();a=!1,D||(c.delta=o?1e3/60:Math.max(Math.min(U-c.timestamp,nw),1)),c.timestamp=U,c.isProcessing=!0,f.process(c),m.process(c),g.process(c),x.process(c),y.process(c),w.process(c),P.process(c),T.process(c),c.isProcessing=!1,a&&r&&(o=!1,t(E))},N=()=>{a=!0,o=!0,c.isProcessing||t(E)};return{schedule:ya.reduce((D,U)=>{const $=h[U];return D[U]=(ne,le=!1,F=!1)=>(a||N(),$.schedule(ne,le,F)),D},{}),cancel:D=>{for(let U=0;U<ya.length;U++)h[ya[U]].cancel(D)},state:c,steps:h}}const{schedule:Te,cancel:_n,state:Je,steps:cc}=cg(typeof requestAnimationFrame<"u"?requestAnimationFrame:Rt,!0);let Ea;function rw(){Ea=void 0}const ct={now:()=>(Ea===void 0&&ct.set(Je.isProcessing||Fn.useManualTiming?Je.timestamp:performance.now()),Ea),set:t=>{Ea=t,queueMicrotask(rw)}},dg=t=>r=>typeof r=="string"&&r.startsWith(t),ug=dg("--"),iw=dg("var(--"),wd=t=>iw(t)?sw.test(t.split("/*")[0].trim()):!1,sw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Jp(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const Jr={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},es={...Jr,transform:t=>Jt(0,1,t)},wa={...Jr,default:1},Yi=t=>Math.round(t*1e5)/1e5,bd=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function aw(t){return t==null}const ow=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,jd=(t,r)=>a=>!!(typeof a=="string"&&ow.test(a)&&a.startsWith(t)||r&&!aw(a)&&Object.prototype.hasOwnProperty.call(a,r)),hg=(t,r,a)=>o=>{if(typeof o!="string")return o;const[c,u,h,f]=o.match(bd);return{[t]:parseFloat(c),[r]:parseFloat(u),[a]:parseFloat(h),alpha:f!==void 0?parseFloat(f):1}},lw=t=>Jt(0,255,t),dc={...Jr,transform:t=>Math.round(lw(t))},hr={test:jd("rgb","red"),parse:hg("red","green","blue"),transform:({red:t,green:r,blue:a,alpha:o=1})=>"rgba("+dc.transform(t)+", "+dc.transform(r)+", "+dc.transform(a)+", "+Yi(es.transform(o))+")"};function cw(t){let r="",a="",o="",c="";return t.length>5?(r=t.substring(1,3),a=t.substring(3,5),o=t.substring(5,7),c=t.substring(7,9)):(r=t.substring(1,2),a=t.substring(2,3),o=t.substring(3,4),c=t.substring(4,5),r+=r,a+=a,o+=o,c+=c),{red:parseInt(r,16),green:parseInt(a,16),blue:parseInt(o,16),alpha:c?parseInt(c,16)/255:1}}const Mc={test:jd("#"),parse:cw,transform:hr.transform},os=t=>({test:r=>typeof r=="string"&&r.endsWith(t)&&r.split(" ").length===1,parse:parseFloat,transform:r=>`${r}${t}`}),Ln=os("deg"),Zt=os("%"),Q=os("px"),dw=os("vh"),uw=os("vw"),ef={...Zt,parse:t=>Zt.parse(t)/100,transform:t=>Zt.transform(t*100)},$r={test:jd("hsl","hue"),parse:hg("hue","saturation","lightness"),transform:({hue:t,saturation:r,lightness:a,alpha:o=1})=>"hsla("+Math.round(t)+", "+Zt.transform(Yi(r))+", "+Zt.transform(Yi(a))+", "+Yi(es.transform(o))+")"},We={test:t=>hr.test(t)||Mc.test(t)||$r.test(t),parse:t=>hr.test(t)?hr.parse(t):$r.test(t)?$r.parse(t):Mc.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?hr.transform(t):$r.transform(t),getAnimatableNone:t=>{const r=We.parse(t);return r.alpha=0,We.transform(r)}},hw=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function pw(t){return isNaN(t)&&typeof t=="string"&&(t.match(bd)?.length||0)+(t.match(hw)?.length||0)>0}const pg="number",fg="color",fw="var",mw="var(",tf="${}",gw=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Yr(t){const r=t.toString(),a=[],o={color:[],number:[],var:[]},c=[];let u=0;const f=r.replace(gw,m=>(We.test(m)?(o.color.push(u),c.push(fg),a.push(We.parse(m))):m.startsWith(mw)?(o.var.push(u),c.push(fw),a.push(m)):(o.number.push(u),c.push(pg),a.push(parseFloat(m))),++u,tf)).split(tf);return{values:a,split:f,indexes:o,types:c}}function xw(t){return Yr(t).values}function mg({split:t,types:r}){const a=t.length;return o=>{let c="";for(let u=0;u<a;u++)if(c+=t[u],o[u]!==void 0){const h=r[u];h===pg?c+=Yi(o[u]):h===fg?c+=We.transform(o[u]):c+=o[u]}return c}}function vw(t){return mg(Yr(t))}const yw=t=>typeof t=="number"?0:We.test(t)?We.getAnimatableNone(t):t,ww=(t,r)=>typeof t=="number"?r?.trim().endsWith("/")?t:0:yw(t);function bw(t){const r=Yr(t);return mg(r)(r.values.map((o,c)=>ww(o,r.split[c])))}const Bt={test:pw,parse:xw,createTransformer:vw,getAnimatableNone:bw};function uc(t,r,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?t+(r-t)*6*a:a<1/2?r:a<2/3?t+(r-t)*(2/3-a)*6:t}function jw({hue:t,saturation:r,lightness:a,alpha:o}){t/=360,r/=100,a/=100;let c=0,u=0,h=0;if(!r)c=u=h=a;else{const f=a<.5?a*(1+r):a+r-a*r,m=2*a-f;c=uc(m,f,t+1/3),u=uc(m,f,t),h=uc(m,f,t-1/3)}return{red:Math.round(c*255),green:Math.round(u*255),blue:Math.round(h*255),alpha:o}}function Ua(t,r){return a=>a>0?r:t}const Ae=(t,r,a)=>t+(r-t)*a,hc=(t,r,a)=>{const o=t*t,c=a*(r*r-o)+o;return c<0?0:Math.sqrt(c)},kw=[Mc,hr,$r],Nw=t=>kw.find(r=>r.test(t));function nf(t){const r=Nw(t);if(!r)return!1;let a=r.parse(t);return r===$r&&(a=jw(a)),a}const rf=(t,r)=>{const a=nf(t),o=nf(r);if(!a||!o)return Ua(t,r);const c={...a};return u=>(c.red=hc(a.red,o.red,u),c.green=hc(a.green,o.green,u),c.blue=hc(a.blue,o.blue,u),c.alpha=Ae(a.alpha,o.alpha,u),hr.transform(c))},Ic=new Set(["none","hidden"]);function Sw(t,r){return Ic.has(t)?a=>a<=0?t:r:a=>a>=1?r:t}function Cw(t,r){return a=>Ae(t,r,a)}function kd(t){return typeof t=="number"?Cw:typeof t=="string"?wd(t)?Ua:We.test(t)?rf:Ew:Array.isArray(t)?gg:typeof t=="object"?We.test(t)?rf:Pw:Ua}function gg(t,r){const a=[...t],o=a.length,c=t.map((u,h)=>kd(u)(u,r[h]));return u=>{for(let h=0;h<o;h++)a[h]=c[h](u);return a}}function Pw(t,r){const a={...t,...r},o={};for(const c in a)t[c]!==void 0&&r[c]!==void 0&&(o[c]=kd(t[c])(t[c],r[c]));return c=>{for(const u in o)a[u]=o[u](c);return a}}function Tw(t,r){const a=[],o={color:0,var:0,number:0};for(let c=0;c<r.values.length;c++){const u=r.types[c],h=t.indexes[u][o[u]],f=t.values[h]??0;a[c]=f,o[u]++}return a}const Ew=(t,r)=>{const a=Bt.createTransformer(r),o=Yr(t),c=Yr(r);return o.indexes.var.length===c.indexes.var.length&&o.indexes.color.length===c.indexes.color.length&&o.indexes.number.length>=c.indexes.number.length?Ic.has(t)&&!c.values.length||Ic.has(r)&&!o.values.length?Sw(t,r):ss(gg(Tw(o,c),c.values),a):Ua(t,r)};function xg(t,r,a){return typeof t=="number"&&typeof r=="number"&&typeof a=="number"?Ae(t,r,a):kd(t)(t,r)}const Rw=t=>{const r=({timestamp:a})=>t(a);return{start:(a=!0)=>Te.update(r,a),stop:()=>_n(r),now:()=>Je.isProcessing?Je.timestamp:ct.now()}},vg=(t,r,a=10)=>{let o="";const c=Math.max(Math.round(r/a),2);for(let u=0;u<c;u++)o+=Math.round(t(u/(c-1))*1e4)/1e4+", ";return`linear(${o.substring(0,o.length-2)})`},Ha=2e4;function Nd(t){let r=0;const a=50;let o=t.next(r);for(;!o.done&&r<Ha;)r+=a,o=t.next(r);return r>=Ha?1/0:r}function zw(t,r=100,a){const o=a({...t,keyframes:[0,r]}),c=Math.min(Nd(o),Ha);return{type:"keyframes",ease:u=>o.next(c*u).value/r,duration:Et(c)}}const Fe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Dc(t,r){return t*Math.sqrt(1-r*r)}const Aw=12;function Mw(t,r,a){let o=a;for(let c=1;c<Aw;c++)o=o-t(o)/r(o);return o}const pc=.001;function Iw({duration:t=Fe.duration,bounce:r=Fe.bounce,velocity:a=Fe.velocity,mass:o=Fe.mass}){let c,u,h=1-r;h=Jt(Fe.minDamping,Fe.maxDamping,h),t=Jt(Fe.minDuration,Fe.maxDuration,Et(t)),h<1?(c=g=>{const x=g*h,y=x*t,w=x-a,P=Dc(g,h),T=Math.exp(-y);return pc-w/P*T},u=g=>{const y=g*h*t,w=y*a+a,P=Math.pow(h,2)*Math.pow(g,2)*t,T=Math.exp(-y),E=Dc(Math.pow(g,2),h);return(-c(g)+pc>0?-1:1)*((w-P)*T)/E}):(c=g=>{const x=Math.exp(-g*t),y=(g-a)*t+1;return-pc+x*y},u=g=>{const x=Math.exp(-g*t),y=(a-g)*(t*t);return x*y});const f=5/t,m=Mw(c,u,f);if(t=bt(t),isNaN(m))return{stiffness:Fe.stiffness,damping:Fe.damping,duration:t};{const g=Math.pow(m,2)*o;return{stiffness:g,damping:h*2*Math.sqrt(o*g),duration:t}}}const Dw=["duration","bounce"],Lw=["stiffness","damping","mass"];function sf(t,r){return r.some(a=>t[a]!==void 0)}function Vw(t){let r={velocity:Fe.velocity,stiffness:Fe.stiffness,damping:Fe.damping,mass:Fe.mass,isResolvedFromDuration:!1,...t};if(!sf(t,Lw)&&sf(t,Dw))if(r.velocity=0,t.visualDuration){const a=t.visualDuration,o=2*Math.PI/(a*1.2),c=o*o,u=2*Jt(.05,1,1-(t.bounce||0))*Math.sqrt(c);r={...r,mass:Fe.mass,stiffness:c,damping:u}}else{const a=Iw({...t,velocity:0});r={...r,...a,mass:Fe.mass},r.isResolvedFromDuration=!0}return r}function $a(t=Fe.visualDuration,r=Fe.bounce){const a=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:r}:t;let{restSpeed:o,restDelta:c}=a;const u=a.keyframes[0],h=a.keyframes[a.keyframes.length-1],f={done:!1,value:u},{stiffness:m,damping:g,mass:x,duration:y,velocity:w,isResolvedFromDuration:P}=Vw({...a,velocity:-Et(a.velocity||0)}),T=w||0,E=g/(2*Math.sqrt(m*x)),N=h-u,M=Et(Math.sqrt(m/x)),L=Math.abs(N)<5;o||(o=L?Fe.restSpeed.granular:Fe.restSpeed.default),c||(c=L?Fe.restDelta.granular:Fe.restDelta.default);let D,U,$,ne,le,F;if(E<1)$=Dc(M,E),ne=(T+E*M*N)/$,D=ee=>{const xe=Math.exp(-E*M*ee);return h-xe*(ne*Math.sin($*ee)+N*Math.cos($*ee))},le=E*M*ne+N*$,F=E*M*N-ne*$,U=ee=>Math.exp(-E*M*ee)*(le*Math.sin($*ee)+F*Math.cos($*ee));else if(E===1){D=xe=>h-Math.exp(-M*xe)*(N+(T+M*N)*xe);const ee=T+M*N;U=xe=>Math.exp(-M*xe)*(M*ee*xe-T)}else{const ee=M*Math.sqrt(E*E-1);D=Se=>{const ge=Math.exp(-E*M*Se),me=Math.min(ee*Se,300);return h-ge*((T+E*M*N)*Math.sinh(me)+ee*N*Math.cosh(me))/ee};const xe=(T+E*M*N)/ee,we=E*M*xe-N*ee,Pe=E*M*N-xe*ee;U=Se=>{const ge=Math.exp(-E*M*Se),me=Math.min(ee*Se,300);return ge*(we*Math.sinh(me)+Pe*Math.cosh(me))}}const ce={calculatedDuration:P&&y||null,velocity:ee=>bt(U(ee)),next:ee=>{if(!P&&E<1){const we=Math.exp(-E*M*ee),Pe=Math.sin($*ee),Se=Math.cos($*ee),ge=h-we*(ne*Pe+N*Se),me=bt(we*(le*Pe+F*Se));return f.done=Math.abs(me)<=o&&Math.abs(h-ge)<=c,f.value=f.done?h:ge,f}const xe=D(ee);if(P)f.done=ee>=y;else{const we=bt(U(ee));f.done=Math.abs(we)<=o&&Math.abs(h-xe)<=c}return f.value=f.done?h:xe,f},toString:()=>{const ee=Math.min(Nd(ce),Ha),xe=vg(we=>ce.next(ee*we).value,ee,30);return ee+"ms "+xe},toTransition:()=>{}};return ce}$a.applyToOptions=t=>{const r=zw(t,100,$a);return t.ease=r.ease,t.duration=bt(r.duration),t.type="keyframes",t};const Fw=5;function yg(t,r,a){const o=Math.max(r-Fw,0);return Zm(a-t(o),r-o)}function Lc({keyframes:t,velocity:r=0,power:a=.8,timeConstant:o=325,bounceDamping:c=10,bounceStiffness:u=500,modifyTarget:h,min:f,max:m,restDelta:g=.5,restSpeed:x}){const y=t[0],w={done:!1,value:y},P=F=>f!==void 0&&F<f||m!==void 0&&F>m,T=F=>f===void 0?m:m===void 0||Math.abs(f-F)<Math.abs(m-F)?f:m;let E=a*r;const N=y+E,M=h===void 0?N:h(N);M!==N&&(E=M-y);const L=F=>-E*Math.exp(-F/o),D=F=>M+L(F),U=F=>{const ce=L(F),ee=D(F);w.done=Math.abs(ce)<=g,w.value=w.done?M:ee};let $,ne;const le=F=>{P(w.value)&&($=F,ne=$a({keyframes:[w.value,T(w.value)],velocity:yg(D,F,w.value),damping:c,stiffness:u,restDelta:g,restSpeed:x}))};return le(0),{calculatedDuration:null,next:F=>{let ce=!1;return!ne&&$===void 0&&(ce=!0,U(F),le(F)),$!==void 0&&F>=$?ne.next(F-$):(!ce&&U(F),w)}}}function _w(t,r,a){const o=[],c=a||Fn.mix||xg,u=t.length-1;for(let h=0;h<u;h++){let f=c(t[h],t[h+1]);if(r){const m=Array.isArray(r)?r[h]||Rt:r;f=ss(m,f)}o.push(f)}return o}function Ow(t,r,{clamp:a=!0,ease:o,mixer:c}={}){const u=t.length;if(gd(u===r.length),u===1)return()=>r[0];if(u===2&&r[0]===r[1])return()=>r[1];const h=t[0]===t[1];t[0]>t[u-1]&&(t=[...t].reverse(),r=[...r].reverse());const f=_w(r,o,c),m=f.length,g=x=>{if(h&&x<t[0])return r[0];let y=0;if(m>1)for(;y<t.length-2&&!(x<t[y+1]);y++);const w=Ji(t[y],t[y+1],x);return f[y](w)};return a?x=>g(Jt(t[0],t[u-1],x)):g}function Bw(t,r){const a=t[t.length-1];for(let o=1;o<=r;o++){const c=Ji(0,r,o);t.push(Ae(a,1,c))}}function Ww(t){const r=[0];return Bw(r,t.length-1),r}function Uw(t,r){return t.map(a=>a*r)}function Hw(t,r){return t.map(()=>r||og).splice(0,t.length-1)}function qi({duration:t=300,keyframes:r,times:a,ease:o="easeInOut"}){const c=Z1(o)?o.map(Zp):Zp(o),u={done:!1,value:r[0]},h=Uw(a&&a.length===r.length?a:Ww(r),t),f=Ow(h,r,{ease:Array.isArray(c)?c:Hw(r,c)});return{calculatedDuration:t,next:m=>(u.value=f(m),u.done=m>=t,u)}}const $w=t=>t!==null;function ro(t,{repeat:r,repeatType:a="loop"},o,c=1){const u=t.filter($w),f=c<0||r&&a!=="loop"&&r%2===1?0:u.length-1;return!f||o===void 0?u[f]:o}const Gw={decay:Lc,inertia:Lc,tween:qi,keyframes:qi,spring:$a};function wg(t){typeof t.type=="string"&&(t.type=Gw[t.type])}class Sd{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(r=>{this.resolve=r})}notifyFinished(){this.resolve()}then(r,a){return this.finished.then(r,a)}}const Kw=t=>t/100;class Ga extends Sd{constructor(r){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{const{motionValue:a}=this.options;a&&a.updatedAt!==ct.now()&&this.tick(ct.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=r,this.initAnimation(),this.play(),r.autoplay===!1&&this.pause()}initAnimation(){const{options:r}=this;wg(r);const{type:a=qi,repeat:o=0,repeatDelay:c=0,repeatType:u,velocity:h=0}=r;let{keyframes:f}=r;const m=a||qi;m!==qi&&typeof f[0]!="number"&&(this.mixKeyframes=ss(Kw,xg(f[0],f[1])),f=[0,100]);const g=m({...r,keyframes:f});u==="mirror"&&(this.mirroredGenerator=m({...r,keyframes:[...f].reverse(),velocity:-h})),g.calculatedDuration===null&&(g.calculatedDuration=Nd(g));const{calculatedDuration:x}=g;this.calculatedDuration=x,this.resolvedDuration=x+c,this.totalDuration=this.resolvedDuration*(o+1)-c,this.generator=g}updateTime(r){const a=Math.round(r-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=a}tick(r,a=!1){const{generator:o,totalDuration:c,mixKeyframes:u,mirroredGenerator:h,resolvedDuration:f,calculatedDuration:m}=this;if(this.startTime===null)return o.next(0);const{delay:g=0,keyframes:x,repeat:y,repeatType:w,repeatDelay:P,type:T,onUpdate:E,finalKeyframe:N}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,r):this.speed<0&&(this.startTime=Math.min(r-c/this.speed,this.startTime)),a?this.currentTime=r:this.updateTime(r);const M=this.currentTime-g*(this.playbackSpeed>=0?1:-1),L=this.playbackSpeed>=0?M<0:M>c;this.currentTime=Math.max(M,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let D=this.currentTime,U=o;if(y){const F=Math.min(this.currentTime,c)/f;let ce=Math.floor(F),ee=F%1;!ee&&F>=1&&(ee=1),ee===1&&ce--,ce=Math.min(ce,y+1),!!(ce%2)&&(w==="reverse"?(ee=1-ee,P&&(ee-=P/f)):w==="mirror"&&(U=h)),D=Jt(0,1,ee)*f}let $;L?(this.delayState.value=x[0],$=this.delayState):$=U.next(D),u&&!L&&($.value=u($.value));let{done:ne}=$;!L&&m!==null&&(ne=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const le=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&ne);return le&&T!==Lc&&($.value=ro(x,this.options,N,this.speed)),E&&E($.value),le&&this.finish(),$}then(r,a){return this.finished.then(r,a)}get duration(){return Et(this.calculatedDuration)}get iterationDuration(){const{delay:r=0}=this.options||{};return this.duration+Et(r)}get time(){return Et(this.currentTime)}set time(r){r=bt(r),this.currentTime=r,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=r:this.driver&&(this.startTime=this.driver.now()-r/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=r,this.tick(r))}getGeneratorVelocity(){const r=this.currentTime;if(r<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(r);const a=this.generator.next(r).value;return yg(o=>this.generator.next(o).value,r,a)}get speed(){return this.playbackSpeed}set speed(r){const a=this.playbackSpeed!==r;a&&this.driver&&this.updateTime(ct.now()),this.playbackSpeed=r,a&&this.driver&&(this.time=Et(this.currentTime))}play(){if(this.isStopped)return;const{driver:r=Rw,startTime:a}=this.options;this.driver||(this.driver=r(c=>this.tick(c))),this.options.onPlay?.();const o=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=a??o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ct.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(r){return this.startTime=0,this.tick(r,!0)}attachTimeline(r){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),r.observe(this)}}function Yw(t){for(let r=1;r<t.length;r++)t[r]??(t[r]=t[r-1])}const pr=t=>t*180/Math.PI,Vc=t=>{const r=pr(Math.atan2(t[1],t[0]));return Fc(r)},qw={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Vc,rotateZ:Vc,skewX:t=>pr(Math.atan(t[1])),skewY:t=>pr(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Fc=t=>(t=t%360,t<0&&(t+=360),t),af=Vc,of=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),lf=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),Xw={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:of,scaleY:lf,scale:t=>(of(t)+lf(t))/2,rotateX:t=>Fc(pr(Math.atan2(t[6],t[5]))),rotateY:t=>Fc(pr(Math.atan2(-t[2],t[0]))),rotateZ:af,rotate:af,skewX:t=>pr(Math.atan(t[4])),skewY:t=>pr(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function _c(t){return t.includes("scale")?1:0}function Oc(t,r){if(!t||t==="none")return _c(r);const a=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,c;if(a)o=Xw,c=a;else{const f=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=qw,c=f}if(!c)return _c(r);const u=o[r],h=c[1].split(",").map(Zw);return typeof u=="function"?u(h):h[u]}const Qw=(t,r)=>{const{transform:a="none"}=getComputedStyle(t);return Oc(a,r)};function Zw(t){return parseFloat(t.trim())}const ei=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ti=new Set(ei),cf=t=>t===Jr||t===Q,Jw=new Set(["x","y","z"]),eb=ei.filter(t=>!Jw.has(t));function tb(t){const r=[];return eb.forEach(a=>{const o=t.getValue(a);o!==void 0&&(r.push([a,o.get()]),o.set(a.startsWith("scale")?1:0))}),r}const Vn={width:({x:t},{paddingLeft:r="0",paddingRight:a="0",boxSizing:o})=>{const c=t.max-t.min;return o==="border-box"?c:c-parseFloat(r)-parseFloat(a)},height:({y:t},{paddingTop:r="0",paddingBottom:a="0",boxSizing:o})=>{const c=t.max-t.min;return o==="border-box"?c:c-parseFloat(r)-parseFloat(a)},top:(t,{top:r})=>parseFloat(r),left:(t,{left:r})=>parseFloat(r),bottom:({y:t},{top:r})=>parseFloat(r)+(t.max-t.min),right:({x:t},{left:r})=>parseFloat(r)+(t.max-t.min),x:(t,{transform:r})=>Oc(r,"x"),y:(t,{transform:r})=>Oc(r,"y")};Vn.translateX=Vn.x;Vn.translateY=Vn.y;const fr=new Set;let Bc=!1,Wc=!1,Uc=!1;function bg(){if(Wc){const t=Array.from(fr).filter(o=>o.needsMeasurement),r=new Set(t.map(o=>o.element)),a=new Map;r.forEach(o=>{const c=tb(o);c.length&&(a.set(o,c),o.render())}),t.forEach(o=>o.measureInitialState()),r.forEach(o=>{o.render();const c=a.get(o);c&&c.forEach(([u,h])=>{o.getValue(u)?.set(h)})}),t.forEach(o=>o.measureEndState()),t.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}Wc=!1,Bc=!1,fr.forEach(t=>t.complete(Uc)),fr.clear()}function jg(){fr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Wc=!0)})}function nb(){Uc=!0,jg(),bg(),Uc=!1}class Cd{constructor(r,a,o,c,u,h=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...r],this.onComplete=a,this.name=o,this.motionValue=c,this.element=u,this.isAsync=h}scheduleResolve(){this.state="scheduled",this.isAsync?(fr.add(this),Bc||(Bc=!0,Te.read(jg),Te.resolveKeyframes(bg))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:r,name:a,element:o,motionValue:c}=this;if(r[0]===null){const u=c?.get(),h=r[r.length-1];if(u!==void 0)r[0]=u;else if(o&&a){const f=o.readValue(a,h);f!=null&&(r[0]=f)}r[0]===void 0&&(r[0]=h),c&&u===void 0&&c.set(r[0])}Yw(r)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(r=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,r),fr.delete(this)}cancel(){this.state==="scheduled"&&(fr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const rb=t=>t.startsWith("--");function kg(t,r,a){rb(r)?t.style.setProperty(r,a):t.style[r]=a}const ib={};function Ng(t,r){const a=Qm(t);return()=>ib[r]??a()}const sb=Ng(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Sg=Ng(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Gi=([t,r,a,o])=>`cubic-bezier(${t}, ${r}, ${a}, ${o})`,df={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Gi([0,.65,.55,1]),circOut:Gi([.55,0,1,.45]),backIn:Gi([.31,.01,.66,-.59]),backOut:Gi([.33,1.53,.69,.99])};function Cg(t,r){if(t)return typeof t=="function"?Sg()?vg(t,r):"ease-out":lg(t)?Gi(t):Array.isArray(t)?t.map(a=>Cg(a,r)||df.easeOut):df[t]}function ab(t,r,a,{delay:o=0,duration:c=300,repeat:u=0,repeatType:h="loop",ease:f="easeOut",times:m}={},g=void 0){const x={[r]:a};m&&(x.offset=m);const y=Cg(f,c);Array.isArray(y)&&(x.easing=y);const w={delay:o,duration:c,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:u+1,direction:h==="reverse"?"alternate":"normal"};return g&&(w.pseudoElement=g),t.animate(x,w)}function Pg(t){return typeof t=="function"&&"applyToOptions"in t}function ob({type:t,...r}){return Pg(t)&&Sg()?t.applyToOptions(r):(r.duration??(r.duration=300),r.ease??(r.ease="easeOut"),r)}class Tg extends Sd{constructor(r){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!r)return;const{element:a,name:o,keyframes:c,pseudoElement:u,allowFlatten:h=!1,finalKeyframe:f,onComplete:m}=r;this.isPseudoElement=!!u,this.allowFlatten=h,this.options=r,gd(typeof r.type!="string");const g=ob(r);this.animation=ab(a,o,c,g,u),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const x=ro(c,this.options,f,this.speed);this.updateMotionValue&&this.updateMotionValue(x),kg(a,o,x),this.animation.cancel()}m?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:r}=this;r==="idle"||r==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const r=this.options?.element;!this.isPseudoElement&&r?.isConnected&&this.animation.commitStyles?.()}get duration(){const r=this.animation.effect?.getComputedTiming?.().duration||0;return Et(Number(r))}get iterationDuration(){const{delay:r=0}=this.options||{};return this.duration+Et(r)}get time(){return Et(Number(this.animation.currentTime)||0)}set time(r){const a=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=bt(r),a&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(r){r<0&&(this.finishedTime=null),this.animation.playbackRate=r}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(r){this.manualStartTime=this.animation.startTime=r}attachTimeline({timeline:r,rangeStart:a,rangeEnd:o,observe:c}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,r&&sb()?(this.animation.timeline=r,a&&(this.animation.rangeStart=a),o&&(this.animation.rangeEnd=o),Rt):c(this)}}const Eg={anticipate:ig,backInOut:rg,circInOut:ag};function lb(t){return t in Eg}function cb(t){typeof t.ease=="string"&&lb(t.ease)&&(t.ease=Eg[t.ease])}const fc=10;class db extends Tg{constructor(r){cb(r),wg(r),super(r),r.startTime!==void 0&&r.autoplay!==!1&&(this.startTime=r.startTime),this.options=r}updateMotionValue(r){const{motionValue:a,onUpdate:o,onComplete:c,element:u,...h}=this.options;if(!a)return;if(r!==void 0){a.set(r);return}const f=new Ga({...h,autoplay:!1}),m=Math.max(fc,ct.now()-this.startTime),g=Jt(0,fc,m-fc),x=f.sample(m).value,{name:y}=this.options;u&&y&&kg(u,y,x),a.setWithVelocity(f.sample(Math.max(0,m-g)).value,x,g),f.stop()}}const uf=(t,r)=>r==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Bt.test(t)||t==="0")&&!t.startsWith("url("));function ub(t){const r=t[0];if(t.length===1)return!0;for(let a=0;a<t.length;a++)if(t[a]!==r)return!0}function hb(t,r,a,o){const c=t[0];if(c===null)return!1;if(r==="display"||r==="visibility")return!0;const u=t[t.length-1],h=uf(c,r),f=uf(u,r);return!h||!f?!1:ub(t)||(a==="spring"||Pg(a))&&o}function Hc(t){t.duration=0,t.type="keyframes"}const Rg=new Set(["opacity","clipPath","filter","transform"]),pb=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function fb(t){for(let r=0;r<t.length;r++)if(typeof t[r]=="string"&&pb.test(t[r]))return!0;return!1}const mb=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),gb=Qm(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function xb(t){const{motionValue:r,name:a,repeatDelay:o,repeatType:c,damping:u,type:h,keyframes:f}=t;if(!(r?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:g,transformTemplate:x}=r.owner.getProps();return gb()&&a&&(Rg.has(a)||mb.has(a)&&fb(f))&&(a!=="transform"||!x)&&!g&&!o&&c!=="mirror"&&u!==0&&h!=="inertia"}const vb=40;class yb extends Sd{constructor({autoplay:r=!0,delay:a=0,type:o="keyframes",repeat:c=0,repeatDelay:u=0,repeatType:h="loop",keyframes:f,name:m,motionValue:g,element:x,...y}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=ct.now();const w={autoplay:r,delay:a,type:o,repeat:c,repeatDelay:u,repeatType:h,name:m,motionValue:g,element:x,...y},P=x?.KeyframeResolver||Cd;this.keyframeResolver=new P(f,(T,E,N)=>this.onKeyframesResolved(T,E,w,!N),m,g,x),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(r,a,o,c){this.keyframeResolver=void 0;const{name:u,type:h,velocity:f,delay:m,isHandoff:g,onUpdate:x}=o;this.resolvedAt=ct.now();let y=!0;hb(r,u,h,f)||(y=!1,(Fn.instantAnimations||!m)&&x?.(ro(r,o,a)),r[0]=r[r.length-1],Hc(o),o.repeat=0);const P={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>vb?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:a,...o,keyframes:r},T=y&&!g&&xb(P),E=P.motionValue?.owner?.current;let N;if(T)try{N=new db({...P,element:E})}catch{N=new Ga(P)}else N=new Ga(P);N.finished.then(()=>{this.notifyFinished()}).catch(Rt),this.pendingTimeline&&(this.stopTimeline=N.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=N}get finished(){return this._animation?this.animation.finished:this._finished}then(r,a){return this.finished.finally(r).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),nb()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(r){this.animation.time=r}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(r){this.animation.speed=r}get startTime(){return this.animation.startTime}attachTimeline(r){return this._animation?this.stopTimeline=this.animation.attachTimeline(r):this.pendingTimeline=r,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function zg(t,r,a,o=0,c=1){const u=Array.from(t).sort((g,x)=>g.sortNodePosition(x)).indexOf(r),h=t.size,f=(h-1)*o;return typeof a=="function"?a(u,h):c===1?u*o:f-u*o}const wb=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function bb(t){const r=wb.exec(t);if(!r)return[,];const[,a,o,c]=r;return[`--${a??o}`,c]}function Ag(t,r,a=1){const[o,c]=bb(t);if(!o)return;const u=window.getComputedStyle(r).getPropertyValue(o);if(u){const h=u.trim();return Ym(h)?parseFloat(h):h}return wd(c)?Ag(c,r,a+1):c}const jb={type:"spring",stiffness:500,damping:25,restSpeed:10},kb=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),Nb={type:"keyframes",duration:.8},Sb={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Cb=(t,{keyframes:r})=>r.length>2?Nb:ti.has(t)?t.startsWith("scale")?kb(r[1]):jb:Sb;function Mg(t,r){if(t?.inherit&&r){const{inherit:a,...o}=t;return{...r,...o}}return t}function Pd(t,r){const a=t?.[r]??t?.default??t;return a!==t?Mg(a,t):a}const Pb=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function Tb(t){for(const r in t)if(!Pb.has(r))return!0;return!1}const Td=(t,r,a,o={},c,u)=>h=>{const f=Pd(o,t)||{},m=f.delay||o.delay||0;let{elapsed:g=0}=o;g=g-bt(m);const x={keyframes:Array.isArray(a)?a:[null,a],ease:"easeOut",velocity:r.getVelocity(),...f,delay:-g,onUpdate:w=>{r.set(w),f.onUpdate&&f.onUpdate(w)},onComplete:()=>{h(),f.onComplete&&f.onComplete()},name:t,motionValue:r,element:u?void 0:c};Tb(f)||Object.assign(x,Cb(t,x)),x.duration&&(x.duration=bt(x.duration)),x.repeatDelay&&(x.repeatDelay=bt(x.repeatDelay)),x.from!==void 0&&(x.keyframes[0]=x.from);let y=!1;if((x.type===!1||x.duration===0&&!x.repeatDelay)&&(Hc(x),x.delay===0&&(y=!0)),(Fn.instantAnimations||Fn.skipAnimations||c?.shouldSkipAnimations)&&(y=!0,Hc(x),x.delay=0),x.allowFlatten=!f.type&&!f.ease,y&&!u&&r.get()!==void 0){const w=ro(x.keyframes,f);if(w!==void 0){Te.update(()=>{x.onUpdate(w),x.onComplete()});return}}return f.isSync?new Ga(x):new yb(x)};function hf(t){const r=[{},{}];return t?.values.forEach((a,o)=>{r[0][o]=a.get(),r[1][o]=a.getVelocity()}),r}function Ed(t,r,a,o){if(typeof r=="function"){const[c,u]=hf(o);r=r(a!==void 0?a:t.custom,c,u)}if(typeof r=="string"&&(r=t.variants&&t.variants[r]),typeof r=="function"){const[c,u]=hf(o);r=r(a!==void 0?a:t.custom,c,u)}return r}function mr(t,r,a){const o=t.getProps();return Ed(o,r,a!==void 0?a:o.custom,t)}const Ig=new Set(["width","height","top","left","right","bottom",...ei]),pf=30,Eb=t=>!isNaN(parseFloat(t));class Rb{constructor(r,a={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=o=>{const c=ct.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const u of this.dependents)u.dirty()},this.hasAnimated=!1,this.setCurrent(r),this.owner=a.owner}setCurrent(r){this.current=r,this.updatedAt=ct.now(),this.canTrackVelocity===null&&r!==void 0&&(this.canTrackVelocity=Eb(this.current))}setPrevFrameValue(r=this.current){this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt}onChange(r){return this.on("change",r)}on(r,a){this.events[r]||(this.events[r]=new xd);const o=this.events[r].add(a);return r==="change"?()=>{o(),Te.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const r in this.events)this.events[r].clear()}attach(r,a){this.passiveEffect=r,this.stopPassiveEffect=a}set(r){this.passiveEffect?this.passiveEffect(r,this.updateAndNotify):this.updateAndNotify(r)}setWithVelocity(r,a,o){this.set(a),this.prev=void 0,this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt-o}jump(r,a=!0){this.updateAndNotify(r),this.prev=r,this.prevUpdatedAt=this.prevFrameValue=void 0,a&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(r){this.dependents||(this.dependents=new Set),this.dependents.add(r)}removeDependent(r){this.dependents&&this.dependents.delete(r)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const r=ct.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||r-this.updatedAt>pf)return 0;const a=Math.min(this.updatedAt-this.prevUpdatedAt,pf);return Zm(parseFloat(this.current)-parseFloat(this.prevFrameValue),a)}start(r){return this.stop(),new Promise(a=>{this.hasAnimated=!0,this.animation=r(a),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function qr(t,r){return new Rb(t,r)}const $c=t=>Array.isArray(t);function zb(t,r,a){t.hasValue(r)?t.getValue(r).set(a):t.addValue(r,qr(a))}function Ab(t){return $c(t)?t[t.length-1]||0:t}function Mb(t,r){const a=mr(t,r);let{transitionEnd:o={},transition:c={},...u}=a||{};u={...u,...o};for(const h in u){const f=Ab(u[h]);zb(t,h,f)}}const et=t=>!!(t&&t.getVelocity);function Ib(t){return!!(et(t)&&t.add)}function Gc(t,r){const a=t.getValue("willChange");if(Ib(a))return a.add(r);if(!a&&Fn.WillChange){const o=new Fn.WillChange("auto");t.addValue("willChange",o),o.add(r)}}function Rd(t){return t.replace(/([A-Z])/g,r=>`-${r.toLowerCase()}`)}const Db="framerAppearId",Dg="data-"+Rd(Db);function Lg(t){return t.props[Dg]}function Lb({protectedKeys:t,needsAnimating:r},a){const o=t.hasOwnProperty(a)&&r[a]!==!0;return r[a]=!1,o}function Vg(t,r,{delay:a=0,transitionOverride:o,type:c}={}){let{transition:u,transitionEnd:h,...f}=r;const m=t.getDefaultTransition();u=u?Mg(u,m):m;const g=u?.reduceMotion;o&&(u=o);const x=[],y=c&&t.animationState&&t.animationState.getState()[c];for(const w in f){const P=t.getValue(w,t.latestValues[w]??null),T=f[w];if(T===void 0||y&&Lb(y,w))continue;const E={delay:a,...Pd(u||{},w)},N=P.get();if(N!==void 0&&!P.isAnimating()&&!Array.isArray(T)&&T===N&&!E.velocity){Te.update(()=>P.set(T));continue}let M=!1;if(window.MotionHandoffAnimation){const U=Lg(t);if(U){const $=window.MotionHandoffAnimation(U,w,Te);$!==null&&(E.startTime=$,M=!0)}}Gc(t,w);const L=g??t.shouldReduceMotion;P.start(Td(w,P,T,L&&Ig.has(w)?{type:!1}:E,t,M));const D=P.animation;D&&x.push(D)}if(h){const w=()=>Te.update(()=>{h&&Mb(t,h)});x.length?Promise.all(x).then(w):w()}return x}function Kc(t,r,a={}){const o=mr(t,r,a.type==="exit"?t.presenceContext?.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=o||{};a.transitionOverride&&(c=a.transitionOverride);const u=o?()=>Promise.all(Vg(t,o,a)):()=>Promise.resolve(),h=t.variantChildren&&t.variantChildren.size?(m=0)=>{const{delayChildren:g=0,staggerChildren:x,staggerDirection:y}=c;return Vb(t,r,m,g,x,y,a)}:()=>Promise.resolve(),{when:f}=c;if(f){const[m,g]=f==="beforeChildren"?[u,h]:[h,u];return m().then(()=>g())}else return Promise.all([u(),h(a.delay)])}function Vb(t,r,a=0,o=0,c=0,u=1,h){const f=[];for(const m of t.variantChildren)m.notify("AnimationStart",r),f.push(Kc(m,r,{...h,delay:a+(typeof o=="function"?0:o)+zg(t.variantChildren,m,o,c,u)}).then(()=>m.notify("AnimationComplete",r)));return Promise.all(f)}function Fb(t,r,a={}){t.notify("AnimationStart",r);let o;if(Array.isArray(r)){const c=r.map(u=>Kc(t,u,a));o=Promise.all(c)}else if(typeof r=="string")o=Kc(t,r,a);else{const c=typeof r=="function"?mr(t,r,a.custom):r;o=Promise.all(Vg(t,c,a))}return o.then(()=>{t.notify("AnimationComplete",r)})}const _b={test:t=>t==="auto",parse:t=>t},Fg=t=>r=>r.test(t),_g=[Jr,Q,Zt,Ln,uw,dw,_b],ff=t=>_g.find(Fg(t));function Ob(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Xm(t):!0}const Bb=new Set(["brightness","contrast","saturate","opacity"]);function Wb(t){const[r,a]=t.slice(0,-1).split("(");if(r==="drop-shadow")return t;const[o]=a.match(bd)||[];if(!o)return t;const c=a.replace(o,"");let u=Bb.has(r)?1:0;return o!==a&&(u*=100),r+"("+u+c+")"}const Ub=/\b([a-z-]*)\(.*?\)/gu,Yc={...Bt,getAnimatableNone:t=>{const r=t.match(Ub);return r?r.map(Wb).join(" "):t}},qc={...Bt,getAnimatableNone:t=>{const r=Bt.parse(t);return Bt.createTransformer(t)(r.map(o=>typeof o=="number"?0:typeof o=="object"?{...o,alpha:1}:o))}},mf={...Jr,transform:Math.round},Hb={rotate:Ln,rotateX:Ln,rotateY:Ln,rotateZ:Ln,scale:wa,scaleX:wa,scaleY:wa,scaleZ:wa,skew:Ln,skewX:Ln,skewY:Ln,distance:Q,translateX:Q,translateY:Q,translateZ:Q,x:Q,y:Q,z:Q,perspective:Q,transformPerspective:Q,opacity:es,originX:ef,originY:ef,originZ:Q},zd={borderWidth:Q,borderTopWidth:Q,borderRightWidth:Q,borderBottomWidth:Q,borderLeftWidth:Q,borderRadius:Q,borderTopLeftRadius:Q,borderTopRightRadius:Q,borderBottomRightRadius:Q,borderBottomLeftRadius:Q,width:Q,maxWidth:Q,height:Q,maxHeight:Q,top:Q,right:Q,bottom:Q,left:Q,inset:Q,insetBlock:Q,insetBlockStart:Q,insetBlockEnd:Q,insetInline:Q,insetInlineStart:Q,insetInlineEnd:Q,padding:Q,paddingTop:Q,paddingRight:Q,paddingBottom:Q,paddingLeft:Q,paddingBlock:Q,paddingBlockStart:Q,paddingBlockEnd:Q,paddingInline:Q,paddingInlineStart:Q,paddingInlineEnd:Q,margin:Q,marginTop:Q,marginRight:Q,marginBottom:Q,marginLeft:Q,marginBlock:Q,marginBlockStart:Q,marginBlockEnd:Q,marginInline:Q,marginInlineStart:Q,marginInlineEnd:Q,fontSize:Q,backgroundPositionX:Q,backgroundPositionY:Q,...Hb,zIndex:mf,fillOpacity:es,strokeOpacity:es,numOctaves:mf},$b={...zd,color:We,backgroundColor:We,outlineColor:We,fill:We,stroke:We,borderColor:We,borderTopColor:We,borderRightColor:We,borderBottomColor:We,borderLeftColor:We,filter:Yc,WebkitFilter:Yc,mask:qc,WebkitMask:qc},Og=t=>$b[t],Gb=new Set([Yc,qc]);function Bg(t,r){let a=Og(t);return Gb.has(a)||(a=Bt),a.getAnimatableNone?a.getAnimatableNone(r):void 0}const Kb=new Set(["auto","none","0"]);function Yb(t,r,a){let o=0,c;for(;o<t.length&&!c;){const u=t[o];typeof u=="string"&&!Kb.has(u)&&Yr(u).values.length&&(c=t[o]),o++}if(c&&a)for(const u of r)t[u]=Bg(a,c)}class qb extends Cd{constructor(r,a,o,c,u){super(r,a,o,c,u,!0)}readKeyframes(){const{unresolvedKeyframes:r,element:a,name:o}=this;if(!a||!a.current)return;super.readKeyframes();for(let x=0;x<r.length;x++){let y=r[x];if(typeof y=="string"&&(y=y.trim(),wd(y))){const w=Ag(y,a.current);w!==void 0&&(r[x]=w),x===r.length-1&&(this.finalKeyframe=y)}}if(this.resolveNoneKeyframes(),!Ig.has(o)||r.length!==2)return;const[c,u]=r,h=ff(c),f=ff(u),m=Jp(c),g=Jp(u);if(m!==g&&Vn[o]){this.needsMeasurement=!0;return}if(h!==f)if(cf(h)&&cf(f))for(let x=0;x<r.length;x++){const y=r[x];typeof y=="string"&&(r[x]=parseFloat(y))}else Vn[o]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:r,name:a}=this,o=[];for(let c=0;c<r.length;c++)(r[c]===null||Ob(r[c]))&&o.push(c);o.length&&Yb(r,o,a)}measureInitialState(){const{element:r,unresolvedKeyframes:a,name:o}=this;if(!r||!r.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Vn[o](r.measureViewportBox(),window.getComputedStyle(r.current)),a[0]=this.measuredOrigin;const c=a[a.length-1];c!==void 0&&r.getValue(o,c).jump(c,!1)}measureEndState(){const{element:r,name:a,unresolvedKeyframes:o}=this;if(!r||!r.current)return;const c=r.getValue(a);c&&c.jump(this.measuredOrigin,!1);const u=o.length-1,h=o[u];o[u]=Vn[a](r.measureViewportBox(),window.getComputedStyle(r.current)),h!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=h),this.removedTransforms?.length&&this.removedTransforms.forEach(([f,m])=>{r.getValue(f).set(m)}),this.resolveNoneKeyframes()}}function Wg(t,r,a){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let o=document;const c=a?.[t]??o.querySelectorAll(t);return c?Array.from(c):[]}return Array.from(t).filter(o=>o!=null)}const Ug=(t,r)=>r&&typeof t=="number"?r.transform(t):t;function Xb(t){return qm(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Ad}=cg(queueMicrotask,!1),Ot={x:!1,y:!1};function Hg(){return Ot.x||Ot.y}function Qb(t){return t==="x"||t==="y"?Ot[t]?null:(Ot[t]=!0,()=>{Ot[t]=!1}):Ot.x||Ot.y?null:(Ot.x=Ot.y=!0,()=>{Ot.x=Ot.y=!1})}function $g(t,r){const a=Wg(t),o=new AbortController,c={passive:!0,...r,signal:o.signal};return[a,c,()=>o.abort()]}function Zb(t){return!(t.pointerType==="touch"||Hg())}function Jb(t,r,a={}){const[o,c,u]=$g(t,a);return o.forEach(h=>{let f=!1,m=!1,g;const x=()=>{h.removeEventListener("pointerleave",T)},y=N=>{g&&(g(N),g=void 0),x()},w=N=>{f=!1,window.removeEventListener("pointerup",w),window.removeEventListener("pointercancel",w),m&&(m=!1,y(N))},P=()=>{f=!0,window.addEventListener("pointerup",w,c),window.addEventListener("pointercancel",w,c)},T=N=>{if(N.pointerType!=="touch"){if(f){m=!0;return}y(N)}},E=N=>{if(!Zb(N))return;m=!1;const M=r(h,N);typeof M=="function"&&(g=M,h.addEventListener("pointerleave",T,c))};h.addEventListener("pointerenter",E,c),h.addEventListener("pointerdown",P,c)}),u}const Gg=(t,r)=>r?t===r?!0:Gg(t,r.parentElement):!1,Md=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,e2=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function t2(t){return e2.has(t.tagName)||t.isContentEditable===!0}const n2=new Set(["INPUT","SELECT","TEXTAREA"]);function r2(t){return n2.has(t.tagName)||t.isContentEditable===!0}const Ra=new WeakSet;function gf(t){return r=>{r.key==="Enter"&&t(r)}}function mc(t,r){t.dispatchEvent(new PointerEvent("pointer"+r,{isPrimary:!0,bubbles:!0}))}const i2=(t,r)=>{const a=t.currentTarget;if(!a)return;const o=gf(()=>{if(Ra.has(a))return;mc(a,"down");const c=gf(()=>{mc(a,"up")}),u=()=>mc(a,"cancel");a.addEventListener("keyup",c,r),a.addEventListener("blur",u,r)});a.addEventListener("keydown",o,r),a.addEventListener("blur",()=>a.removeEventListener("keydown",o),r)};function xf(t){return Md(t)&&!Hg()}const vf=new WeakSet;function s2(t,r,a={}){const[o,c,u]=$g(t,a),h=f=>{const m=f.currentTarget;if(!xf(f)||vf.has(f))return;Ra.add(m),a.stopPropagation&&vf.add(f);const g=r(m,f),x=(P,T)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",w),Ra.has(m)&&Ra.delete(m),xf(P)&&typeof g=="function"&&g(P,{success:T})},y=P=>{x(P,m===window||m===document||a.useGlobalTarget||Gg(m,P.target))},w=P=>{x(P,!1)};window.addEventListener("pointerup",y,c),window.addEventListener("pointercancel",w,c)};return o.forEach(f=>{(a.useGlobalTarget?window:f).addEventListener("pointerdown",h,c),Xb(f)&&(f.addEventListener("focus",g=>i2(g,c)),!t2(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),u}function Id(t){return qm(t)&&"ownerSVGElement"in t}const za=new WeakMap;let Aa;const Kg=(t,r,a)=>(o,c)=>c&&c[0]?c[0][t+"Size"]:Id(o)&&"getBBox"in o?o.getBBox()[r]:o[a],a2=Kg("inline","width","offsetWidth"),o2=Kg("block","height","offsetHeight");function l2({target:t,borderBoxSize:r}){za.get(t)?.forEach(a=>{a(t,{get width(){return a2(t,r)},get height(){return o2(t,r)}})})}function c2(t){t.forEach(l2)}function d2(){typeof ResizeObserver>"u"||(Aa=new ResizeObserver(c2))}function u2(t,r){Aa||d2();const a=Wg(t);return a.forEach(o=>{let c=za.get(o);c||(c=new Set,za.set(o,c)),c.add(r),Aa?.observe(o)}),()=>{a.forEach(o=>{const c=za.get(o);c?.delete(r),c?.size||Aa?.unobserve(o)})}}const Ma=new Set;let Gr;function h2(){Gr=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};Ma.forEach(r=>r(t))},window.addEventListener("resize",Gr)}function p2(t){return Ma.add(t),Gr||h2(),()=>{Ma.delete(t),!Ma.size&&typeof Gr=="function"&&(window.removeEventListener("resize",Gr),Gr=void 0)}}function yf(t,r){return typeof t=="function"?p2(t):u2(t,r)}function f2(t){return Id(t)&&t.tagName==="svg"}const m2=[..._g,We,Bt],g2=t=>m2.find(Fg(t)),wf=()=>({translate:0,scale:1,origin:0,originPoint:0}),Kr=()=>({x:wf(),y:wf()}),bf=()=>({min:0,max:0}),Ge=()=>({x:bf(),y:bf()}),x2=new WeakMap;function io(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function ts(t){return typeof t=="string"||Array.isArray(t)}const Dd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ld=["initial",...Dd];function so(t){return io(t.animate)||Ld.some(r=>ts(t[r]))}function Yg(t){return!!(so(t)||t.variants)}function v2(t,r,a){for(const o in r){const c=r[o],u=a[o];if(et(c))t.addValue(o,c);else if(et(u))t.addValue(o,qr(c,{owner:t}));else if(u!==c)if(t.hasValue(o)){const h=t.getValue(o);h.liveStyle===!0?h.jump(c):h.hasAnimated||h.set(c)}else{const h=t.getStaticValue(o);t.addValue(o,qr(h!==void 0?h:c,{owner:t}))}}for(const o in a)r[o]===void 0&&t.removeValue(o);return r}const Xc={current:null},qg={current:!1},y2=typeof window<"u";function w2(){if(qg.current=!0,!!y2)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),r=()=>Xc.current=t.matches;t.addEventListener("change",r),r()}else Xc.current=!1}const jf=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Ka={};function Xg(t){Ka=t}function b2(){return Ka}class j2{scrapeMotionValuesFromProps(r,a,o){return{}}constructor({parent:r,props:a,presenceContext:o,reducedMotionConfig:c,skipAnimations:u,blockInitialAnimation:h,visualState:f},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Cd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const P=ct.now();this.renderScheduledAt<P&&(this.renderScheduledAt=P,Te.render(this.render,!1,!0))};const{latestValues:g,renderState:x}=f;this.latestValues=g,this.baseTarget={...g},this.initialValues=a.initial?{...g}:{},this.renderState=x,this.parent=r,this.props=a,this.presenceContext=o,this.depth=r?r.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=u,this.options=m,this.blockInitialAnimation=!!h,this.isControllingVariants=so(a),this.isVariantNode=Yg(a),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(r&&r.current);const{willChange:y,...w}=this.scrapeMotionValuesFromProps(a,{},this);for(const P in w){const T=w[P];g[P]!==void 0&&et(T)&&T.set(g[P])}}mount(r){if(this.hasBeenMounted)for(const a in this.initialValues)this.values.get(a)?.jump(this.initialValues[a]),this.latestValues[a]=this.initialValues[a];this.current=r,x2.set(r,this),this.projection&&!this.projection.instance&&this.projection.mount(r),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((a,o)=>this.bindToMotionValue(o,a)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(qg.current||w2(),this.shouldReduceMotion=Xc.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),_n(this.notifyUpdate),_n(this.render),this.valueSubscriptions.forEach(r=>r()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const r in this.events)this.events[r].clear();for(const r in this.features){const a=this.features[r];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(r){this.children.add(r),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(r)}removeChild(r){this.children.delete(r),this.enteringChildren&&this.enteringChildren.delete(r)}bindToMotionValue(r,a){if(this.valueSubscriptions.has(r)&&this.valueSubscriptions.get(r)(),a.accelerate&&Rg.has(r)&&this.current instanceof HTMLElement){const{factory:h,keyframes:f,times:m,ease:g,duration:x}=a.accelerate,y=new Tg({element:this.current,name:r,keyframes:f,times:m,ease:g,duration:bt(x)}),w=h(y);this.valueSubscriptions.set(r,()=>{w(),y.cancel()});return}const o=ti.has(r);o&&this.onBindTransform&&this.onBindTransform();const c=a.on("change",h=>{this.latestValues[r]=h,this.props.onUpdate&&Te.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let u;typeof window<"u"&&window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,r,a)),this.valueSubscriptions.set(r,()=>{c(),u&&u(),a.owner&&a.stop()})}sortNodePosition(r){return!this.current||!this.sortInstanceNodePosition||this.type!==r.type?0:this.sortInstanceNodePosition(this.current,r.current)}updateFeatures(){let r="animation";for(r in Ka){const a=Ka[r];if(!a)continue;const{isEnabled:o,Feature:c}=a;if(!this.features[r]&&c&&o(this.props)&&(this.features[r]=new c(this)),this.features[r]){const u=this.features[r];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ge()}getStaticValue(r){return this.latestValues[r]}setStaticValue(r,a){this.latestValues[r]=a}update(r,a){(r.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=r,this.prevPresenceContext=this.presenceContext,this.presenceContext=a;for(let o=0;o<jf.length;o++){const c=jf[o];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const u="on"+c,h=r[u];h&&(this.propEventSubscriptions[c]=this.on(c,h))}this.prevMotionValues=v2(this,this.scrapeMotionValuesFromProps(r,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(r){return this.props.variants?this.props.variants[r]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(r){const a=this.getClosestVariantNode();if(a)return a.variantChildren&&a.variantChildren.add(r),()=>a.variantChildren.delete(r)}addValue(r,a){const o=this.values.get(r);a!==o&&(o&&this.removeValue(r),this.bindToMotionValue(r,a),this.values.set(r,a),this.latestValues[r]=a.get())}removeValue(r){this.values.delete(r);const a=this.valueSubscriptions.get(r);a&&(a(),this.valueSubscriptions.delete(r)),delete this.latestValues[r],this.removeValueFromRenderState(r,this.renderState)}hasValue(r){return this.values.has(r)}getValue(r,a){if(this.props.values&&this.props.values[r])return this.props.values[r];let o=this.values.get(r);return o===void 0&&a!==void 0&&(o=qr(a===null?void 0:a,{owner:this}),this.addValue(r,o)),o}readValue(r,a){let o=this.latestValues[r]!==void 0||!this.current?this.latestValues[r]:this.getBaseTargetFromProps(this.props,r)??this.readValueFromInstance(this.current,r,this.options);return o!=null&&(typeof o=="string"&&(Ym(o)||Xm(o))?o=parseFloat(o):!g2(o)&&Bt.test(a)&&(o=Bg(r,a)),this.setBaseTarget(r,et(o)?o.get():o)),et(o)?o.get():o}setBaseTarget(r,a){this.baseTarget[r]=a}getBaseTarget(r){const{initial:a}=this.props;let o;if(typeof a=="string"||typeof a=="object"){const u=Ed(this.props,a,this.presenceContext?.custom);u&&(o=u[r])}if(a&&o!==void 0)return o;const c=this.getBaseTargetFromProps(this.props,r);return c!==void 0&&!et(c)?c:this.initialValues[r]!==void 0&&o===void 0?void 0:this.baseTarget[r]}on(r,a){return this.events[r]||(this.events[r]=new xd),this.events[r].add(a)}notify(r,...a){this.events[r]&&this.events[r].notify(...a)}scheduleRenderMicrotask(){Ad.render(this.render)}}class Qg extends j2{constructor(){super(...arguments),this.KeyframeResolver=qb}sortInstanceNodePosition(r,a){return r.compareDocumentPosition(a)&2?1:-1}getBaseTargetFromProps(r,a){const o=r.style;return o?o[a]:void 0}removeValueFromRenderState(r,{vars:a,style:o}){delete a[r],delete o[r]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:r}=this.props;et(r)&&(this.childSubscription=r.on("change",a=>{this.current&&(this.current.textContent=`${a}`)}))}}class Bn{constructor(r){this.isMounted=!1,this.node=r}update(){}}function Zg({top:t,left:r,right:a,bottom:o}){return{x:{min:r,max:a},y:{min:t,max:o}}}function k2({x:t,y:r}){return{top:r.min,right:t.max,bottom:r.max,left:t.min}}function N2(t,r){if(!r)return t;const a=r({x:t.left,y:t.top}),o=r({x:t.right,y:t.bottom});return{top:a.y,left:a.x,bottom:o.y,right:o.x}}function gc(t){return t===void 0||t===1}function Qc({scale:t,scaleX:r,scaleY:a}){return!gc(t)||!gc(r)||!gc(a)}function lr(t){return Qc(t)||Jg(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Jg(t){return kf(t.x)||kf(t.y)}function kf(t){return t&&t!=="0%"}function Ya(t,r,a){const o=t-a,c=r*o;return a+c}function Nf(t,r,a,o,c){return c!==void 0&&(t=Ya(t,c,o)),Ya(t,a,o)+r}function Zc(t,r=0,a=1,o,c){t.min=Nf(t.min,r,a,o,c),t.max=Nf(t.max,r,a,o,c)}function ex(t,{x:r,y:a}){Zc(t.x,r.translate,r.scale,r.originPoint),Zc(t.y,a.translate,a.scale,a.originPoint)}const Sf=.999999999999,Cf=1.0000000000001;function S2(t,r,a,o=!1){const c=a.length;if(!c)return;r.x=r.y=1;let u,h;for(let f=0;f<c;f++){u=a[f],h=u.projectionDelta;const{visualElement:m}=u.options;m&&m.props.style&&m.props.style.display==="contents"||(o&&u.options.layoutScroll&&u.scroll&&u!==u.root&&(Xt(t.x,-u.scroll.offset.x),Xt(t.y,-u.scroll.offset.y)),h&&(r.x*=h.x.scale,r.y*=h.y.scale,ex(t,h)),o&&lr(u.latestValues)&&Ia(t,u.latestValues,u.layout?.layoutBox))}r.x<Cf&&r.x>Sf&&(r.x=1),r.y<Cf&&r.y>Sf&&(r.y=1)}function Xt(t,r){t.min+=r,t.max+=r}function Pf(t,r,a,o,c=.5){const u=Ae(t.min,t.max,c);Zc(t,r,a,u,o)}function Tf(t,r){return typeof t=="string"?parseFloat(t)/100*(r.max-r.min):t}function Ia(t,r,a){const o=a??t;Pf(t.x,Tf(r.x,o.x),r.scaleX,r.scale,r.originX),Pf(t.y,Tf(r.y,o.y),r.scaleY,r.scale,r.originY)}function tx(t,r){return Zg(N2(t.getBoundingClientRect(),r))}function C2(t,r,a){const o=tx(t,a),{scroll:c}=r;return c&&(Xt(o.x,c.offset.x),Xt(o.y,c.offset.y)),o}const P2={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},T2=ei.length;function E2(t,r,a){let o="",c=!0;for(let u=0;u<T2;u++){const h=ei[u],f=t[h];if(f===void 0)continue;let m=!0;if(typeof f=="number")m=f===(h.startsWith("scale")?1:0);else{const g=parseFloat(f);m=h.startsWith("scale")?g===1:g===0}if(!m||a){const g=Ug(f,zd[h]);if(!m){c=!1;const x=P2[h]||h;o+=`${x}(${g}) `}a&&(r[h]=g)}}return o=o.trim(),a?o=a(r,c?"":o):c&&(o="none"),o}function Vd(t,r,a){const{style:o,vars:c,transformOrigin:u}=t;let h=!1,f=!1;for(const m in r){const g=r[m];if(ti.has(m)){h=!0;continue}else if(ug(m)){c[m]=g;continue}else{const x=Ug(g,zd[m]);m.startsWith("origin")?(f=!0,u[m]=x):o[m]=x}}if(r.transform||(h||a?o.transform=E2(r,t.transform,a):o.transform&&(o.transform="none")),f){const{originX:m="50%",originY:g="50%",originZ:x=0}=u;o.transformOrigin=`${m} ${g} ${x}`}}function nx(t,{style:r,vars:a},o,c){const u=t.style;let h;for(h in r)u[h]=r[h];c?.applyProjectionStyles(u,o);for(h in a)u.setProperty(h,a[h])}function Ef(t,r){return r.max===r.min?0:t/(r.max-r.min)*100}const Hi={correct:(t,r)=>{if(!r.target)return t;if(typeof t=="string")if(Q.test(t))t=parseFloat(t);else return t;const a=Ef(t,r.target.x),o=Ef(t,r.target.y);return`${a}% ${o}%`}},R2={correct:(t,{treeScale:r,projectionDelta:a})=>{const o=t,c=Bt.parse(t);if(c.length>5)return o;const u=Bt.createTransformer(t),h=typeof c[0]!="number"?1:0,f=a.x.scale*r.x,m=a.y.scale*r.y;c[0+h]/=f,c[1+h]/=m;const g=Ae(f,m,.5);return typeof c[2+h]=="number"&&(c[2+h]/=g),typeof c[3+h]=="number"&&(c[3+h]/=g),u(c)}},Jc={borderRadius:{...Hi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Hi,borderTopRightRadius:Hi,borderBottomLeftRadius:Hi,borderBottomRightRadius:Hi,boxShadow:R2};function rx(t,{layout:r,layoutId:a}){return ti.has(t)||t.startsWith("origin")||(r||a!==void 0)&&(!!Jc[t]||t==="opacity")}function Fd(t,r,a){const o=t.style,c=r?.style,u={};if(!o)return u;for(const h in o)(et(o[h])||c&&et(c[h])||rx(h,t)||a?.getValue(h)?.liveStyle!==void 0)&&(u[h]=o[h]);return u}function z2(t){return window.getComputedStyle(t)}class A2 extends Qg{constructor(){super(...arguments),this.type="html",this.renderInstance=nx}readValueFromInstance(r,a){if(ti.has(a))return this.projection?.isProjecting?_c(a):Qw(r,a);{const o=z2(r),c=(ug(a)?o.getPropertyValue(a):o[a])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(r,{transformPagePoint:a}){return tx(r,a)}build(r,a,o){Vd(r,a,o.transformTemplate)}scrapeMotionValuesFromProps(r,a,o){return Fd(r,a,o)}}const M2={offset:"stroke-dashoffset",array:"stroke-dasharray"},I2={offset:"strokeDashoffset",array:"strokeDasharray"};function D2(t,r,a=1,o=0,c=!0){t.pathLength=1;const u=c?M2:I2;t[u.offset]=`${-o}`,t[u.array]=`${r} ${a}`}const L2=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function ix(t,{attrX:r,attrY:a,attrScale:o,pathLength:c,pathSpacing:u=1,pathOffset:h=0,...f},m,g,x){if(Vd(t,f,g),m){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:y,style:w}=t;y.transform&&(w.transform=y.transform,delete y.transform),(w.transform||y.transformOrigin)&&(w.transformOrigin=y.transformOrigin??"50% 50%",delete y.transformOrigin),w.transform&&(w.transformBox=x?.transformBox??"fill-box",delete y.transformBox);for(const P of L2)y[P]!==void 0&&(w[P]=y[P],delete y[P]);r!==void 0&&(y.x=r),a!==void 0&&(y.y=a),o!==void 0&&(y.scale=o),c!==void 0&&D2(y,c,u,h,!1)}const sx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),ax=t=>typeof t=="string"&&t.toLowerCase()==="svg";function V2(t,r,a,o){nx(t,r,void 0,o);for(const c in r.attrs)t.setAttribute(sx.has(c)?c:Rd(c),r.attrs[c])}function ox(t,r,a){const o=Fd(t,r,a);for(const c in t)if(et(t[c])||et(r[c])){const u=ei.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;o[u]=t[c]}return o}class F2 extends Qg{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ge}getBaseTargetFromProps(r,a){return r[a]}readValueFromInstance(r,a){if(ti.has(a)){const o=Og(a);return o&&o.default||0}return a=sx.has(a)?a:Rd(a),r.getAttribute(a)}scrapeMotionValuesFromProps(r,a,o){return ox(r,a,o)}build(r,a,o){ix(r,a,this.isSVGTag,o.transformTemplate,o.style)}renderInstance(r,a,o,c){V2(r,a,o,c)}mount(r){this.isSVGTag=ax(r.tagName),super.mount(r)}}const _2=Ld.length;function lx(t){if(!t)return;if(!t.isControllingVariants){const a=t.parent?lx(t.parent)||{}:{};return t.props.initial!==void 0&&(a.initial=t.props.initial),a}const r={};for(let a=0;a<_2;a++){const o=Ld[a],c=t.props[o];(ts(c)||c===!1)&&(r[o]=c)}return r}function cx(t,r){if(!Array.isArray(r))return!1;const a=r.length;if(a!==t.length)return!1;for(let o=0;o<a;o++)if(r[o]!==t[o])return!1;return!0}const O2=[...Dd].reverse(),B2=Dd.length;function W2(t){return r=>Promise.all(r.map(({animation:a,options:o})=>Fb(t,a,o)))}function U2(t){let r=W2(t),a=Rf(),o=!0,c=!1;const u=g=>(x,y)=>{const w=mr(t,y,g==="exit"?t.presenceContext?.custom:void 0);if(w){const{transition:P,transitionEnd:T,...E}=w;x={...x,...E,...T}}return x};function h(g){r=g(t)}function f(g){const{props:x}=t,y=lx(t.parent)||{},w=[],P=new Set;let T={},E=1/0;for(let M=0;M<B2;M++){const L=O2[M],D=a[L],U=x[L]!==void 0?x[L]:y[L],$=ts(U),ne=L===g?D.isActive:null;ne===!1&&(E=M);let le=U===y[L]&&U!==x[L]&&$;if(le&&(o||c)&&t.manuallyAnimateOnMount&&(le=!1),D.protectedKeys={...T},!D.isActive&&ne===null||!U&&!D.prevProp||io(U)||typeof U=="boolean")continue;if(L==="exit"&&D.isActive&&ne!==!0){D.prevResolvedValues&&(T={...T,...D.prevResolvedValues});continue}const F=H2(D.prevProp,U);let ce=F||L===g&&D.isActive&&!le&&$||M>E&&$,ee=!1;const xe=Array.isArray(U)?U:[U];let we=xe.reduce(u(L),{});ne===!1&&(we={});const{prevResolvedValues:Pe={}}=D,Se={...Pe,...we},ge=W=>{ce=!0,P.has(W)&&(ee=!0,P.delete(W)),D.needsAnimating[W]=!0;const K=t.getValue(W);K&&(K.liveStyle=!1)};for(const W in Se){const K=we[W],I=Pe[W];if(T.hasOwnProperty(W))continue;let C=!1;$c(K)&&$c(I)?C=!cx(K,I):C=K!==I,C?K!=null?ge(W):P.add(W):K!==void 0&&P.has(W)?ge(W):D.protectedKeys[W]=!0}D.prevProp=U,D.prevResolvedValues=we,D.isActive&&(T={...T,...we}),(o||c)&&t.blockInitialAnimation&&(ce=!1);const me=le&&F;ce&&(!me||ee)&&w.push(...xe.map(W=>{const K={type:L};if(typeof W=="string"&&(o||c)&&!me&&t.manuallyAnimateOnMount&&t.parent){const{parent:I}=t,C=mr(I,W);if(I.enteringChildren&&C){const{delayChildren:V}=C.transition||{};K.delay=zg(I.enteringChildren,t,V)}}return{animation:W,options:K}}))}if(P.size){const M={};if(typeof x.initial!="boolean"){const L=mr(t,Array.isArray(x.initial)?x.initial[0]:x.initial);L&&L.transition&&(M.transition=L.transition)}P.forEach(L=>{const D=t.getBaseTarget(L),U=t.getValue(L);U&&(U.liveStyle=!0),M[L]=D??null}),w.push({animation:M})}let N=!!w.length;return o&&(x.initial===!1||x.initial===x.animate)&&!t.manuallyAnimateOnMount&&(N=!1),o=!1,c=!1,N?r(w):Promise.resolve()}function m(g,x){if(a[g].isActive===x)return Promise.resolve();t.variantChildren?.forEach(w=>w.animationState?.setActive(g,x)),a[g].isActive=x;const y=f(g);for(const w in a)a[w].protectedKeys={};return y}return{animateChanges:f,setActive:m,setAnimateFunction:h,getState:()=>a,reset:()=>{a=Rf(),c=!0}}}function H2(t,r){return typeof r=="string"?r!==t:Array.isArray(r)?!cx(r,t):!1}function sr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Rf(){return{animate:sr(!0),whileInView:sr(),whileHover:sr(),whileTap:sr(),whileDrag:sr(),whileFocus:sr(),exit:sr()}}function ed(t,r){t.min=r.min,t.max=r.max}function _t(t,r){ed(t.x,r.x),ed(t.y,r.y)}function zf(t,r){t.translate=r.translate,t.scale=r.scale,t.originPoint=r.originPoint,t.origin=r.origin}const dx=1e-4,$2=1-dx,G2=1+dx,ux=.01,K2=0-ux,Y2=0+ux;function dt(t){return t.max-t.min}function q2(t,r,a){return Math.abs(t-r)<=a}function Af(t,r,a,o=.5){t.origin=o,t.originPoint=Ae(r.min,r.max,t.origin),t.scale=dt(a)/dt(r),t.translate=Ae(a.min,a.max,t.origin)-t.originPoint,(t.scale>=$2&&t.scale<=G2||isNaN(t.scale))&&(t.scale=1),(t.translate>=K2&&t.translate<=Y2||isNaN(t.translate))&&(t.translate=0)}function Xi(t,r,a,o){Af(t.x,r.x,a.x,o?o.originX:void 0),Af(t.y,r.y,a.y,o?o.originY:void 0)}function Mf(t,r,a,o=0){const c=o?Ae(a.min,a.max,o):a.min;t.min=c+r.min,t.max=t.min+dt(r)}function X2(t,r,a,o){Mf(t.x,r.x,a.x,o?.x),Mf(t.y,r.y,a.y,o?.y)}function If(t,r,a,o=0){const c=o?Ae(a.min,a.max,o):a.min;t.min=r.min-c,t.max=t.min+dt(r)}function qa(t,r,a,o){If(t.x,r.x,a.x,o?.x),If(t.y,r.y,a.y,o?.y)}function Df(t,r,a,o,c){return t-=r,t=Ya(t,1/a,o),c!==void 0&&(t=Ya(t,1/c,o)),t}function Q2(t,r=0,a=1,o=.5,c,u=t,h=t){if(Zt.test(r)&&(r=parseFloat(r),r=Ae(h.min,h.max,r/100)-h.min),typeof r!="number")return;let f=Ae(u.min,u.max,o);t===u&&(f-=r),t.min=Df(t.min,r,a,f,c),t.max=Df(t.max,r,a,f,c)}function Lf(t,r,[a,o,c],u,h){Q2(t,r[a],r[o],r[c],r.scale,u,h)}const Z2=["x","scaleX","originX"],J2=["y","scaleY","originY"];function Vf(t,r,a,o){Lf(t.x,r,Z2,a?a.x:void 0,o?o.x:void 0),Lf(t.y,r,J2,a?a.y:void 0,o?o.y:void 0)}function Ff(t){return t.translate===0&&t.scale===1}function hx(t){return Ff(t.x)&&Ff(t.y)}function _f(t,r){return t.min===r.min&&t.max===r.max}function ej(t,r){return _f(t.x,r.x)&&_f(t.y,r.y)}function Of(t,r){return Math.round(t.min)===Math.round(r.min)&&Math.round(t.max)===Math.round(r.max)}function px(t,r){return Of(t.x,r.x)&&Of(t.y,r.y)}function Bf(t){return dt(t.x)/dt(t.y)}function Wf(t,r){return t.translate===r.translate&&t.scale===r.scale&&t.originPoint===r.originPoint}function qt(t){return[t("x"),t("y")]}function tj(t,r,a){let o="";const c=t.x.translate/r.x,u=t.y.translate/r.y,h=a?.z||0;if((c||u||h)&&(o=`translate3d(${c}px, ${u}px, ${h}px) `),(r.x!==1||r.y!==1)&&(o+=`scale(${1/r.x}, ${1/r.y}) `),a){const{transformPerspective:g,rotate:x,rotateX:y,rotateY:w,skewX:P,skewY:T}=a;g&&(o=`perspective(${g}px) ${o}`),x&&(o+=`rotate(${x}deg) `),y&&(o+=`rotateX(${y}deg) `),w&&(o+=`rotateY(${w}deg) `),P&&(o+=`skewX(${P}deg) `),T&&(o+=`skewY(${T}deg) `)}const f=t.x.scale*r.x,m=t.y.scale*r.y;return(f!==1||m!==1)&&(o+=`scale(${f}, ${m})`),o||"none"}const fx=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],nj=fx.length,Uf=t=>typeof t=="string"?parseFloat(t):t,Hf=t=>typeof t=="number"||Q.test(t);function rj(t,r,a,o,c,u){c?(t.opacity=Ae(0,a.opacity??1,ij(o)),t.opacityExit=Ae(r.opacity??1,0,sj(o))):u&&(t.opacity=Ae(r.opacity??1,a.opacity??1,o));for(let h=0;h<nj;h++){const f=fx[h];let m=$f(r,f),g=$f(a,f);if(m===void 0&&g===void 0)continue;m||(m=0),g||(g=0),m===0||g===0||Hf(m)===Hf(g)?(t[f]=Math.max(Ae(Uf(m),Uf(g),o),0),(Zt.test(g)||Zt.test(m))&&(t[f]+="%")):t[f]=g}(r.rotate||a.rotate)&&(t.rotate=Ae(r.rotate||0,a.rotate||0,o))}function $f(t,r){return t[r]!==void 0?t[r]:t.borderRadius}const ij=mx(0,.5,sg),sj=mx(.5,.95,Rt);function mx(t,r,a){return o=>o<t?0:o>r?1:a(Ji(t,r,o))}function aj(t,r,a){const o=et(t)?t:qr(t);return o.start(Td("",o,r,a)),o.animation}function ns(t,r,a,o={passive:!0}){return t.addEventListener(r,a,o),()=>t.removeEventListener(r,a)}const oj=(t,r)=>t.depth-r.depth;class lj{constructor(){this.children=[],this.isDirty=!1}add(r){md(this.children,r),this.isDirty=!0}remove(r){Wa(this.children,r),this.isDirty=!0}forEach(r){this.isDirty&&this.children.sort(oj),this.isDirty=!1,this.children.forEach(r)}}function cj(t,r){const a=ct.now(),o=({timestamp:c})=>{const u=c-a;u>=r&&(_n(o),t(u-r))};return Te.setup(o,!0),()=>_n(o)}function Da(t){return et(t)?t.get():t}class dj{constructor(){this.members=[]}add(r){md(this.members,r);for(let a=this.members.length-1;a>=0;a--){const o=this.members[a];if(o===r||o===this.lead||o===this.prevLead)continue;const c=o.instance;(!c||c.isConnected===!1)&&!o.snapshot&&(Wa(this.members,o),o.unmount())}r.scheduleRender()}remove(r){if(Wa(this.members,r),r===this.prevLead&&(this.prevLead=void 0),r===this.lead){const a=this.members[this.members.length-1];a&&this.promote(a)}}relegate(r){for(let a=this.members.indexOf(r)-1;a>=0;a--){const o=this.members[a];if(o.isPresent!==!1&&o.instance?.isConnected!==!1)return this.promote(o),!0}return!1}promote(r,a){const o=this.lead;if(r!==o&&(this.prevLead=o,this.lead=r,r.show(),o)){o.updateSnapshot(),r.scheduleRender();const{layoutDependency:c}=o.options,{layoutDependency:u}=r.options;(c===void 0||c!==u)&&(r.resumeFrom=o,a&&(o.preserveOpacity=!0),o.snapshot&&(r.snapshot=o.snapshot,r.snapshot.latestValues=o.animationValues||o.latestValues),r.root?.isUpdating&&(r.isLayoutDirty=!0)),r.options.crossfade===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(r=>{r.options.onExitComplete?.(),r.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(r=>r.instance&&r.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}}const La={hasAnimatedSinceResize:!0,hasEverUpdated:!1},xc=["","X","Y","Z"],uj=1e3;let hj=0;function vc(t,r,a,o){const{latestValues:c}=r;c[t]&&(a[t]=c[t],r.setStaticValue(t,0),o&&(o[t]=0))}function gx(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:r}=t.options;if(!r)return;const a=Lg(r);if(window.MotionHasOptimisedAnimation(a,"transform")){const{layout:c,layoutId:u}=t.options;window.MotionCancelOptimisedAnimation(a,"transform",Te,!(c||u))}const{parent:o}=t;o&&!o.hasCheckedOptimisedAppear&&gx(o)}function xx({attachResizeListener:t,defaultParent:r,measureScroll:a,checkIsScrollRoot:o,resetTransform:c}){return class{constructor(h={},f=r?.()){this.id=hj++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(mj),this.nodes.forEach(bj),this.nodes.forEach(jj),this.nodes.forEach(gj)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=h,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new lj)}addEventListener(h,f){return this.eventHandlers.has(h)||this.eventHandlers.set(h,new xd),this.eventHandlers.get(h).add(f)}notifyListeners(h,...f){const m=this.eventHandlers.get(h);m&&m.notify(...f)}hasListeners(h){return this.eventHandlers.has(h)}mount(h){if(this.instance)return;this.isSVG=Id(h)&&!f2(h),this.instance=h;const{layoutId:f,layout:m,visualElement:g}=this.options;if(g&&!g.current&&g.mount(h),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(m||f)&&(this.isLayoutDirty=!0),t){let x,y=0;const w=()=>this.root.updateBlockedByResize=!1;Te.read(()=>{y=window.innerWidth}),t(h,()=>{const P=window.innerWidth;P!==y&&(y=P,this.root.updateBlockedByResize=!0,x&&x(),x=cj(w,250),La.hasAnimatedSinceResize&&(La.hasAnimatedSinceResize=!1,this.nodes.forEach(Yf)))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&g&&(f||m)&&this.addEventListener("didUpdate",({delta:x,hasLayoutChanged:y,hasRelativeLayoutChanged:w,layout:P})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const T=this.options.transition||g.getDefaultTransition()||Pj,{onLayoutAnimationStart:E,onLayoutAnimationComplete:N}=g.getProps(),M=!this.targetLayout||!px(this.targetLayout,P),L=!y&&w;if(this.options.layoutRoot||this.resumeFrom||L||y&&(M||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const D={...Pd(T,"layout"),onPlay:E,onComplete:N};(g.shouldReduceMotion||this.options.layoutRoot)&&(D.delay=0,D.type=!1),this.startAnimation(D),this.setAnimationOrigin(x,L)}else y||Yf(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=P})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const h=this.getStack();h&&h.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),_n(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(kj),this.animationId++)}getTransformTemplate(){const{visualElement:h}=this.options;return h&&h.getProps().transformTemplate}willUpdate(h=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&gx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let x=0;x<this.path.length;x++){const y=this.path[x];y.shouldResetTransform=!0,(typeof y.latestValues.x=="string"||typeof y.latestValues.y=="string")&&(y.isLayoutDirty=!0),y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:f,layout:m}=this.options;if(f===void 0&&!m)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),h&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const m=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),m&&this.nodes.forEach(vj),this.nodes.forEach(Gf);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Kf);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(yj),this.nodes.forEach(wj),this.nodes.forEach(pj),this.nodes.forEach(fj)):this.nodes.forEach(Kf),this.clearAllSnapshots();const f=ct.now();Je.delta=Jt(0,1e3/60,f-Je.timestamp),Je.timestamp=f,Je.isProcessing=!0,cc.update.process(Je),cc.preRender.process(Je),cc.render.process(Je),Je.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ad.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(xj),this.sharedNodes.forEach(Nj)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Te.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Te.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!dt(this.snapshot.measuredBox.x)&&!dt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const h=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Ge()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,h?h.layoutBox:void 0)}updateScroll(h="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===h&&(f=!1),f&&this.instance){const m=o(this.instance);this.scroll={animationId:this.root.animationId,phase:h,isRoot:m,offset:a(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!c)return;const h=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!hx(this.projectionDelta),m=this.getTransformTemplate(),g=m?m(this.latestValues,""):void 0,x=g!==this.prevTransformTemplateValue;h&&this.instance&&(f||lr(this.latestValues)||x)&&(c(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(h=!0){const f=this.measurePageBox();let m=this.removeElementScroll(f);return h&&(m=this.removeTransform(m)),Tj(m),{animationId:this.root.animationId,measuredBox:f,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:h}=this.options;if(!h)return Ge();const f=h.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Ej))){const{scroll:g}=this.root;g&&(Xt(f.x,g.offset.x),Xt(f.y,g.offset.y))}return f}removeElementScroll(h){const f=Ge();if(_t(f,h),this.scroll?.wasRoot)return f;for(let m=0;m<this.path.length;m++){const g=this.path[m],{scroll:x,options:y}=g;g!==this.root&&x&&y.layoutScroll&&(x.wasRoot&&_t(f,h),Xt(f.x,x.offset.x),Xt(f.y,x.offset.y))}return f}applyTransform(h,f=!1,m){const g=m||Ge();_t(g,h);for(let x=0;x<this.path.length;x++){const y=this.path[x];!f&&y.options.layoutScroll&&y.scroll&&y!==y.root&&(Xt(g.x,-y.scroll.offset.x),Xt(g.y,-y.scroll.offset.y)),lr(y.latestValues)&&Ia(g,y.latestValues,y.layout?.layoutBox)}return lr(this.latestValues)&&Ia(g,this.latestValues,this.layout?.layoutBox),g}removeTransform(h){const f=Ge();_t(f,h);for(let m=0;m<this.path.length;m++){const g=this.path[m];if(!lr(g.latestValues))continue;let x;g.instance&&(Qc(g.latestValues)&&g.updateSnapshot(),x=Ge(),_t(x,g.measurePageBox())),Vf(f,g.latestValues,g.snapshot?.layoutBox,x)}return lr(this.latestValues)&&Vf(f,this.latestValues),f}setTargetDelta(h){this.targetDelta=h,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(h){this.options={...this.options,...h,crossfade:h.crossfade!==void 0?h.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Je.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(h=!1){const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==f;if(!(h||m&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:x,layoutId:y}=this.options;if(!this.layout||!(x||y))return;this.resolvedRelativeTargetAt=Je.timestamp;const w=this.getClosestProjectingParent();w&&this.linkedParentVersion!==w.layoutVersion&&!w.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&w&&w.layout?this.createRelativeTarget(w,this.layout.layoutBox,w.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ge(),this.targetWithTransforms=Ge()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),X2(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):_t(this.target,this.layout.layoutBox),ex(this.target,this.targetDelta)):_t(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&w&&!!w.resumingFrom==!!this.resumingFrom&&!w.options.layoutScroll&&w.target&&this.animationProgress!==1?this.createRelativeTarget(w,this.target,w.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Qc(this.parent.latestValues)||Jg(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(h,f,m){this.relativeParent=h,this.linkedParentVersion=h.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ge(),this.relativeTargetOrigin=Ge(),qa(this.relativeTargetOrigin,f,m,this.options.layoutAnchor||void 0),_t(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const h=this.getLead(),f=!!this.resumingFrom||this!==h;let m=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(m=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===Je.timestamp&&(m=!1),m)return;const{layout:g,layoutId:x}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||x))return;_t(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,w=this.treeScale.y;S2(this.layoutCorrected,this.treeScale,this.path,f),h.layout&&!h.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(h.target=h.layout.layoutBox,h.targetWithTransforms=Ge());const{target:P}=h;if(!P){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(zf(this.prevProjectionDelta.x,this.projectionDelta.x),zf(this.prevProjectionDelta.y,this.projectionDelta.y)),Xi(this.projectionDelta,this.layoutCorrected,P,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==w||!Wf(this.projectionDelta.x,this.prevProjectionDelta.x)||!Wf(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",P))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(h=!0){if(this.options.visualElement?.scheduleRender(),h){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Kr(),this.projectionDelta=Kr(),this.projectionDeltaWithTransform=Kr()}setAnimationOrigin(h,f=!1){const m=this.snapshot,g=m?m.latestValues:{},x={...this.latestValues},y=Kr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const w=Ge(),P=m?m.source:void 0,T=this.layout?this.layout.source:void 0,E=P!==T,N=this.getStack(),M=!N||N.members.length<=1,L=!!(E&&!M&&this.options.crossfade===!0&&!this.path.some(Cj));this.animationProgress=0;let D;this.mixTargetDelta=U=>{const $=U/1e3;qf(y.x,h.x,$),qf(y.y,h.y,$),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(qa(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Sj(this.relativeTarget,this.relativeTargetOrigin,w,$),D&&ej(this.relativeTarget,D)&&(this.isProjectionDirty=!1),D||(D=Ge()),_t(D,this.relativeTarget)),E&&(this.animationValues=x,rj(x,g,this.latestValues,$,L,M)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=$},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(h){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(_n(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Te.update(()=>{La.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=qr(0)),this.motionValue.jump(0,!1),this.currentAnimation=aj(this.motionValue,[0,1e3],{...h,velocity:0,isSync:!0,onUpdate:f=>{this.mixTargetDelta(f),h.onUpdate&&h.onUpdate(f)},onStop:()=>{},onComplete:()=>{h.onComplete&&h.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const h=this.getStack();h&&h.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(uj),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const h=this.getLead();let{targetWithTransforms:f,target:m,layout:g,latestValues:x}=h;if(!(!f||!m||!g)){if(this!==h&&this.layout&&g&&vx(this.options.animationType,this.layout.layoutBox,g.layoutBox)){m=this.target||Ge();const y=dt(this.layout.layoutBox.x);m.x.min=h.target.x.min,m.x.max=m.x.min+y;const w=dt(this.layout.layoutBox.y);m.y.min=h.target.y.min,m.y.max=m.y.min+w}_t(f,m),Ia(f,x),Xi(this.projectionDeltaWithTransform,this.layoutCorrected,f,x)}}registerSharedNode(h,f){this.sharedNodes.has(h)||this.sharedNodes.set(h,new dj),this.sharedNodes.get(h).add(f);const g=f.options.initialPromotionConfig;f.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(f):void 0})}isLead(){const h=this.getStack();return h?h.lead===this:!0}getLead(){const{layoutId:h}=this.options;return h?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:h}=this.options;return h?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:h}=this.options;if(h)return this.root.sharedNodes.get(h)}promote({needsReset:h,transition:f,preserveFollowOpacity:m}={}){const g=this.getStack();g&&g.promote(this,m),h&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const h=this.getStack();return h?h.relegate(this):!1}resetSkewAndRotation(){const{visualElement:h}=this.options;if(!h)return;let f=!1;const{latestValues:m}=h;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(f=!0),!f)return;const g={};m.z&&vc("z",h,g,this.animationValues);for(let x=0;x<xc.length;x++)vc(`rotate${xc[x]}`,h,g,this.animationValues),vc(`skew${xc[x]}`,h,g,this.animationValues);h.render();for(const x in g)h.setStaticValue(x,g[x]),this.animationValues&&(this.animationValues[x]=g[x]);h.scheduleRender()}applyProjectionStyles(h,f){if(!this.instance||this.isSVG)return;if(!this.isVisible){h.visibility="hidden";return}const m=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,h.visibility="",h.opacity="",h.pointerEvents=Da(f?.pointerEvents)||"",h.transform=m?m(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(h.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,h.pointerEvents=Da(f?.pointerEvents)||""),this.hasProjected&&!lr(this.latestValues)&&(h.transform=m?m({},""):"none",this.hasProjected=!1);return}h.visibility="";const x=g.animationValues||g.latestValues;this.applyTransformsToTarget();let y=tj(this.projectionDeltaWithTransform,this.treeScale,x);m&&(y=m(x,y)),h.transform=y;const{x:w,y:P}=this.projectionDelta;h.transformOrigin=`${w.origin*100}% ${P.origin*100}% 0`,g.animationValues?h.opacity=g===this?x.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:x.opacityExit:h.opacity=g===this?x.opacity!==void 0?x.opacity:"":x.opacityExit!==void 0?x.opacityExit:0;for(const T in Jc){if(x[T]===void 0)continue;const{correct:E,applyTo:N,isCSSVariable:M}=Jc[T],L=y==="none"?x[T]:E(x[T],g);if(N){const D=N.length;for(let U=0;U<D;U++)h[N[U]]=L}else M?this.options.visualElement.renderState.vars[T]=L:h[T]=L}this.options.layoutId&&(h.pointerEvents=g===this?Da(f?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(h=>h.currentAnimation?.stop()),this.root.nodes.forEach(Gf),this.root.sharedNodes.clear()}}}function pj(t){t.updateLayout()}function fj(t){const r=t.resumeFrom?.snapshot||t.snapshot;if(t.isLead()&&t.layout&&r&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:o}=t.layout,{animationType:c}=t.options,u=r.source!==t.layout.source;if(c==="size")qt(x=>{const y=u?r.measuredBox[x]:r.layoutBox[x],w=dt(y);y.min=a[x].min,y.max=y.min+w});else if(c==="x"||c==="y"){const x=c==="x"?"y":"x";ed(u?r.measuredBox[x]:r.layoutBox[x],a[x])}else vx(c,r.layoutBox,a)&&qt(x=>{const y=u?r.measuredBox[x]:r.layoutBox[x],w=dt(a[x]);y.max=y.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[x].max=t.relativeTarget[x].min+w)});const h=Kr();Xi(h,a,r.layoutBox);const f=Kr();u?Xi(f,t.applyTransform(o,!0),r.measuredBox):Xi(f,a,r.layoutBox);const m=!hx(h);let g=!1;if(!t.resumeFrom){const x=t.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:y,layout:w}=x;if(y&&w){const P=t.options.layoutAnchor||void 0,T=Ge();qa(T,r.layoutBox,y.layoutBox,P);const E=Ge();qa(E,a,w.layoutBox,P),px(T,E)||(g=!0),x.options.layoutRoot&&(t.relativeTarget=E,t.relativeTargetOrigin=T,t.relativeParent=x)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:r,delta:f,layoutDelta:h,hasLayoutChanged:m,hasRelativeLayoutChanged:g})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function mj(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function gj(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function xj(t){t.clearSnapshot()}function Gf(t){t.clearMeasurements()}function vj(t){t.isLayoutDirty=!0,t.updateLayout()}function Kf(t){t.isLayoutDirty=!1}function yj(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function wj(t){const{visualElement:r}=t.options;r&&r.getProps().onBeforeLayoutMeasure&&r.notify("BeforeLayoutMeasure"),t.resetTransform()}function Yf(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function bj(t){t.resolveTargetDelta()}function jj(t){t.calcProjection()}function kj(t){t.resetSkewAndRotation()}function Nj(t){t.removeLeadSnapshot()}function qf(t,r,a){t.translate=Ae(r.translate,0,a),t.scale=Ae(r.scale,1,a),t.origin=r.origin,t.originPoint=r.originPoint}function Xf(t,r,a,o){t.min=Ae(r.min,a.min,o),t.max=Ae(r.max,a.max,o)}function Sj(t,r,a,o){Xf(t.x,r.x,a.x,o),Xf(t.y,r.y,a.y,o)}function Cj(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const Pj={duration:.45,ease:[.4,0,.1,1]},Qf=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Zf=Qf("applewebkit/")&&!Qf("chrome/")?Math.round:Rt;function Jf(t){t.min=Zf(t.min),t.max=Zf(t.max)}function Tj(t){Jf(t.x),Jf(t.y)}function vx(t,r,a){return t==="position"||t==="preserve-aspect"&&!q2(Bf(r),Bf(a),.2)}function Ej(t){return t!==t.root&&t.scroll?.wasRoot}const Rj=xx({attachResizeListener:(t,r)=>ns(t,"resize",r),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),yc={current:void 0},yx=xx({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!yc.current){const t=new Rj({});t.mount(window),t.setOptions({layoutScroll:!0}),yc.current=t}return yc.current},resetTransform:(t,r)=>{t.style.transform=r!==void 0?r:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),wx=j.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function zj(t=!0){const r=j.useContext(fd);if(r===null)return[!0,null];const{isPresent:a,onExitComplete:o,register:c}=r,u=j.useId();j.useEffect(()=>{if(t)return c(u)},[t]);const h=j.useCallback(()=>t&&o&&o(u),[u,o,t]);return!a&&o?[!1,h]:[!0]}const bx=j.createContext({strict:!1}),em={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let tm=!1;function Aj(){if(tm)return;const t={};for(const r in em)t[r]={isEnabled:a=>em[r].some(o=>!!a[o])};Xg(t),tm=!0}function jx(){return Aj(),b2()}function Mj(t){const r=jx();for(const a in t)r[a]={...r[a],...t[a]};Xg(r)}const Ij=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Xa(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Ij.has(t)}let kx=t=>!Xa(t);function Dj(t){typeof t=="function"&&(kx=r=>r.startsWith("on")?!Xa(r):t(r))}try{Dj(require("@emotion/is-prop-valid").default)}catch{}function Lj(t,r,a){const o={};for(const c in t)c==="values"&&typeof t.values=="object"||et(t[c])||(kx(c)||a===!0&&Xa(c)||!r&&!Xa(c)||t.draggable&&c.startsWith("onDrag"))&&(o[c]=t[c]);return o}const ao=j.createContext({});function Vj(t,r){if(so(t)){const{initial:a,animate:o}=t;return{initial:a===!1||ts(a)?a:void 0,animate:ts(o)?o:void 0}}return t.inherit!==!1?r:{}}function Fj(t){const{initial:r,animate:a}=Vj(t,j.useContext(ao));return j.useMemo(()=>({initial:r,animate:a}),[nm(r),nm(a)])}function nm(t){return Array.isArray(t)?t.join(" "):t}const _d=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Nx(t,r,a){for(const o in r)!et(r[o])&&!rx(o,a)&&(t[o]=r[o])}function _j({transformTemplate:t},r){return j.useMemo(()=>{const a=_d();return Vd(a,r,t),Object.assign({},a.vars,a.style)},[r])}function Oj(t,r){const a=t.style||{},o={};return Nx(o,a,t),Object.assign(o,_j(t,r)),o}function Bj(t,r){const a={},o=Oj(t,r);return t.drag&&t.dragListener!==!1&&(a.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(a.tabIndex=0),a.style=o,a}const Sx=()=>({..._d(),attrs:{}});function Wj(t,r,a,o){const c=j.useMemo(()=>{const u=Sx();return ix(u,r,ax(o),t.transformTemplate,t.style),{...u.attrs,style:{...u.style}}},[r]);if(t.style){const u={};Nx(u,t.style,t),c.style={...u,...c.style}}return c}const Uj=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Od(t){return typeof t!="string"||t.includes("-")?!1:!!(Uj.indexOf(t)>-1||/[A-Z]/u.test(t))}function Hj(t,r,a,{latestValues:o},c,u=!1,h){const m=(h??Od(t)?Wj:Bj)(r,o,c,t),g=Lj(r,typeof t=="string",u),x=t!==j.Fragment?{...g,...m,ref:a}:{},{children:y}=r,w=j.useMemo(()=>et(y)?y.get():y,[y]);return j.createElement(t,{...x,children:w})}function $j({scrapeMotionValuesFromProps:t,createRenderState:r},a,o,c){return{latestValues:Gj(a,o,c,t),renderState:r()}}function Gj(t,r,a,o){const c={},u=o(t,{});for(const w in u)c[w]=Da(u[w]);let{initial:h,animate:f}=t;const m=so(t),g=Yg(t);r&&g&&!m&&t.inherit!==!1&&(h===void 0&&(h=r.initial),f===void 0&&(f=r.animate));let x=a?a.initial===!1:!1;x=x||h===!1;const y=x?f:h;if(y&&typeof y!="boolean"&&!io(y)){const w=Array.isArray(y)?y:[y];for(let P=0;P<w.length;P++){const T=Ed(t,w[P]);if(T){const{transitionEnd:E,transition:N,...M}=T;for(const L in M){let D=M[L];if(Array.isArray(D)){const U=x?D.length-1:0;D=D[U]}D!==null&&(c[L]=D)}for(const L in E)c[L]=E[L]}}}return c}const Cx=t=>(r,a)=>{const o=j.useContext(ao),c=j.useContext(fd),u=()=>$j(t,r,o,c);return a?u():U1(u)},Kj=Cx({scrapeMotionValuesFromProps:Fd,createRenderState:_d}),Yj=Cx({scrapeMotionValuesFromProps:ox,createRenderState:Sx}),qj=Symbol.for("motionComponentSymbol");function Xj(t,r,a){const o=j.useRef(a);j.useInsertionEffect(()=>{o.current=a});const c=j.useRef(null);return j.useCallback(u=>{u&&t.onMount?.(u);const h=o.current;if(typeof h=="function")if(u){const f=h(u);typeof f=="function"&&(c.current=f)}else c.current?(c.current(),c.current=null):h(u);else h&&(h.current=u);r&&(u?r.mount(u):r.unmount())},[r])}const Px=j.createContext({});function Hr(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Qj(t,r,a,o,c,u){const{visualElement:h}=j.useContext(ao),f=j.useContext(bx),m=j.useContext(fd),g=j.useContext(wx),x=g.reducedMotion,y=g.skipAnimations,w=j.useRef(null),P=j.useRef(!1);o=o||f.renderer,!w.current&&o&&(w.current=o(t,{visualState:r,parent:h,props:a,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:x,skipAnimations:y,isSVG:u}),P.current&&w.current&&(w.current.manuallyAnimateOnMount=!0));const T=w.current,E=j.useContext(Px);T&&!T.projection&&c&&(T.type==="html"||T.type==="svg")&&Zj(w.current,a,c,E);const N=j.useRef(!1);j.useInsertionEffect(()=>{T&&N.current&&T.update(a,m)});const M=a[Dg],L=j.useRef(!!M&&typeof window<"u"&&!window.MotionHandoffIsComplete?.(M)&&window.MotionHasOptimisedAnimation?.(M));return $1(()=>{P.current=!0,T&&(N.current=!0,window.MotionIsMounted=!0,T.updateFeatures(),T.scheduleRenderMicrotask(),L.current&&T.animationState&&T.animationState.animateChanges())}),j.useEffect(()=>{T&&(!L.current&&T.animationState&&T.animationState.animateChanges(),L.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(M)}),L.current=!1),T.enteringChildren=void 0)}),T}function Zj(t,r,a,o){const{layoutId:c,layout:u,drag:h,dragConstraints:f,layoutScroll:m,layoutRoot:g,layoutAnchor:x,layoutCrossfade:y}=r;t.projection=new a(t.latestValues,r["data-framer-portal-id"]?void 0:Tx(t.parent)),t.projection.setOptions({layoutId:c,layout:u,alwaysMeasureLayout:!!h||f&&Hr(f),visualElement:t,animationType:typeof u=="string"?u:"both",initialPromotionConfig:o,crossfade:y,layoutScroll:m,layoutRoot:g,layoutAnchor:x})}function Tx(t){if(t)return t.options.allowProjection!==!1?t.projection:Tx(t.parent)}function wc(t,{forwardMotionProps:r=!1,type:a}={},o,c){o&&Mj(o);const u=a?a==="svg":Od(t),h=u?Yj:Kj;function f(g,x){let y;const w={...j.useContext(wx),...g,layoutId:Jj(g)},{isStatic:P}=w,T=Fj(g),E=h(g,P);if(!P&&typeof window<"u"){ek();const N=tk(w);y=N.MeasureLayout,T.visualElement=Qj(t,E,w,c,N.ProjectionNode,u)}return i.jsxs(ao.Provider,{value:T,children:[y&&T.visualElement?i.jsx(y,{visualElement:T.visualElement,...w}):null,Hj(t,g,Xj(E,T.visualElement,x),E,P,r,u)]})}f.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const m=j.forwardRef(f);return m[qj]=t,m}function Jj({layoutId:t}){const r=j.useContext(Km).id;return r&&t!==void 0?r+"-"+t:t}function ek(t,r){j.useContext(bx).strict}function tk(t){const r=jx(),{drag:a,layout:o}=r;if(!a&&!o)return{};const c={...a,...o};return{MeasureLayout:a?.isEnabled(t)||o?.isEnabled(t)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function nk(t,r){if(typeof Proxy>"u")return wc;const a=new Map,o=(u,h)=>wc(u,h,t,r),c=(u,h)=>o(u,h);return new Proxy(c,{get:(u,h)=>h==="create"?o:(a.has(h)||a.set(h,wc(h,void 0,t,r)),a.get(h))})}const rk=(t,r)=>r.isSVG??Od(t)?new F2(r):new A2(r,{allowProjection:t!==j.Fragment});class ik extends Bn{constructor(r){super(r),r.animationState||(r.animationState=U2(r))}updateAnimationControlsSubscription(){const{animate:r}=this.node.getProps();io(r)&&(this.unmountControls=r.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:r}=this.node.getProps(),{animate:a}=this.node.prevProps||{};r!==a&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let sk=0;class ak extends Bn{constructor(){super(...arguments),this.id=sk++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;const{isPresent:r,onExitComplete:a}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||r===o)return;if(r&&o===!1){if(this.isExitComplete){const{initial:u,custom:h}=this.node.getProps();if(typeof u=="string"){const f=mr(this.node,u,h);if(f){const{transition:m,transitionEnd:g,...x}=f;for(const y in x)this.node.getValue(y)?.jump(x[y])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!r);a&&!r&&c.then(()=>{this.isExitComplete=!0,a(this.id)})}mount(){const{register:r,onExitComplete:a}=this.node.presenceContext||{};a&&a(this.id),r&&(this.unmount=r(this.id))}unmount(){}}const ok={animation:{Feature:ik},exit:{Feature:ak}};function ls(t){return{point:{x:t.pageX,y:t.pageY}}}const lk=t=>r=>Md(r)&&t(r,ls(r));function Qi(t,r,a,o){return ns(t,r,lk(a),o)}const Ex=({current:t})=>t?t.ownerDocument.defaultView:null,rm=(t,r)=>Math.abs(t-r);function ck(t,r){const a=rm(t.x,r.x),o=rm(t.y,r.y);return Math.sqrt(a**2+o**2)}const im=new Set(["auto","scroll"]);class Rx{constructor(r,a,{transformPagePoint:o,contextWindow:c=window,dragSnapToOrigin:u=!1,distanceThreshold:h=3,element:f}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=P=>{this.handleScroll(P.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=ba(this.lastRawMoveEventInfo,this.transformPagePoint));const P=bc(this.lastMoveEventInfo,this.history),T=this.startEvent!==null,E=ck(P.offset,{x:0,y:0})>=this.distanceThreshold;if(!T&&!E)return;const{point:N}=P,{timestamp:M}=Je;this.history.push({...N,timestamp:M});const{onStart:L,onMove:D}=this.handlers;T||(L&&L(this.lastMoveEvent,P),this.startEvent=this.lastMoveEvent),D&&D(this.lastMoveEvent,P)},this.handlePointerMove=(P,T)=>{this.lastMoveEvent=P,this.lastRawMoveEventInfo=T,this.lastMoveEventInfo=ba(T,this.transformPagePoint),Te.update(this.updatePoint,!0)},this.handlePointerUp=(P,T)=>{this.end();const{onEnd:E,onSessionEnd:N,resumeAnimation:M}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&M&&M(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const L=bc(P.type==="pointercancel"?this.lastMoveEventInfo:ba(T,this.transformPagePoint),this.history);this.startEvent&&E&&E(P,L),N&&N(P,L)},!Md(r))return;this.dragSnapToOrigin=u,this.handlers=a,this.transformPagePoint=o,this.distanceThreshold=h,this.contextWindow=c||window;const m=ls(r),g=ba(m,this.transformPagePoint),{point:x}=g,{timestamp:y}=Je;this.history=[{...x,timestamp:y}];const{onSessionStart:w}=a;w&&w(r,bc(g,this.history)),this.removeListeners=ss(Qi(this.contextWindow,"pointermove",this.handlePointerMove),Qi(this.contextWindow,"pointerup",this.handlePointerUp),Qi(this.contextWindow,"pointercancel",this.handlePointerUp)),f&&this.startScrollTracking(f)}startScrollTracking(r){let a=r.parentElement;for(;a;){const o=getComputedStyle(a);(im.has(o.overflowX)||im.has(o.overflowY))&&this.scrollPositions.set(a,{x:a.scrollLeft,y:a.scrollTop}),a=a.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(r){const a=this.scrollPositions.get(r);if(!a)return;const o=r===window,c=o?{x:window.scrollX,y:window.scrollY}:{x:r.scrollLeft,y:r.scrollTop},u={x:c.x-a.x,y:c.y-a.y};u.x===0&&u.y===0||(o?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=u.x,this.lastMoveEventInfo.point.y+=u.y):this.history.length>0&&(this.history[0].x-=u.x,this.history[0].y-=u.y),this.scrollPositions.set(r,c),Te.update(this.updatePoint,!0))}updateHandlers(r){this.handlers=r}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),_n(this.updatePoint)}}function ba(t,r){return r?{point:r(t.point)}:t}function sm(t,r){return{x:t.x-r.x,y:t.y-r.y}}function bc({point:t},r){return{point:t,delta:sm(t,zx(r)),offset:sm(t,dk(r)),velocity:uk(r,.1)}}function dk(t){return t[0]}function zx(t){return t[t.length-1]}function uk(t,r){if(t.length<2)return{x:0,y:0};let a=t.length-1,o=null;const c=zx(t);for(;a>=0&&(o=t[a],!(c.timestamp-o.timestamp>bt(r)));)a--;if(!o)return{x:0,y:0};o===t[0]&&t.length>2&&c.timestamp-o.timestamp>bt(r)*2&&(o=t[1]);const u=Et(c.timestamp-o.timestamp);if(u===0)return{x:0,y:0};const h={x:(c.x-o.x)/u,y:(c.y-o.y)/u};return h.x===1/0&&(h.x=0),h.y===1/0&&(h.y=0),h}function hk(t,{min:r,max:a},o){return r!==void 0&&t<r?t=o?Ae(r,t,o.min):Math.max(t,r):a!==void 0&&t>a&&(t=o?Ae(a,t,o.max):Math.min(t,a)),t}function am(t,r,a){return{min:r!==void 0?t.min+r:void 0,max:a!==void 0?t.max+a-(t.max-t.min):void 0}}function pk(t,{top:r,left:a,bottom:o,right:c}){return{x:am(t.x,a,c),y:am(t.y,r,o)}}function om(t,r){let a=r.min-t.min,o=r.max-t.max;return r.max-r.min<t.max-t.min&&([a,o]=[o,a]),{min:a,max:o}}function fk(t,r){return{x:om(t.x,r.x),y:om(t.y,r.y)}}function mk(t,r){let a=.5;const o=dt(t),c=dt(r);return c>o?a=Ji(r.min,r.max-o,t.min):o>c&&(a=Ji(t.min,t.max-c,r.min)),Jt(0,1,a)}function gk(t,r){const a={};return r.min!==void 0&&(a.min=r.min-t.min),r.max!==void 0&&(a.max=r.max-t.min),a}const td=.35;function xk(t=td){return t===!1?t=0:t===!0&&(t=td),{x:lm(t,"left","right"),y:lm(t,"top","bottom")}}function lm(t,r,a){return{min:cm(t,r),max:cm(t,a)}}function cm(t,r){return typeof t=="number"?t:t[r]||0}const vk=new WeakMap;class yk{constructor(r){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ge(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=r}start(r,{snapToCursor:a=!1,distanceThreshold:o}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const u=y=>{a&&this.snapToCursor(ls(y).point),this.stopAnimation()},h=(y,w)=>{const{drag:P,dragPropagation:T,onDragStart:E}=this.getProps();if(P&&!T&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Qb(P),!this.openDragLock))return;this.latestPointerEvent=y,this.latestPanInfo=w,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),qt(M=>{let L=this.getAxisMotionValue(M).get()||0;if(Zt.test(L)){const{projection:D}=this.visualElement;if(D&&D.layout){const U=D.layout.layoutBox[M];U&&(L=dt(U)*(parseFloat(L)/100))}}this.originPoint[M]=L}),E&&Te.update(()=>E(y,w),!1,!0),Gc(this.visualElement,"transform");const{animationState:N}=this.visualElement;N&&N.setActive("whileDrag",!0)},f=(y,w)=>{this.latestPointerEvent=y,this.latestPanInfo=w;const{dragPropagation:P,dragDirectionLock:T,onDirectionLock:E,onDrag:N}=this.getProps();if(!P&&!this.openDragLock)return;const{offset:M}=w;if(T&&this.currentDirection===null){this.currentDirection=bk(M),this.currentDirection!==null&&E&&E(this.currentDirection);return}this.updateAxis("x",w.point,M),this.updateAxis("y",w.point,M),this.visualElement.render(),N&&Te.update(()=>N(y,w),!1,!0)},m=(y,w)=>{this.latestPointerEvent=y,this.latestPanInfo=w,this.stop(y,w),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:y}=this.getProps();(y||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:x}=this.getProps();this.panSession=new Rx(r,{onSessionStart:u,onStart:h,onMove:f,onSessionEnd:m,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:x,distanceThreshold:o,contextWindow:Ex(this.visualElement),element:this.visualElement.current})}stop(r,a){const o=r||this.latestPointerEvent,c=a||this.latestPanInfo,u=this.isDragging;if(this.cancel(),!u||!c||!o)return;const{velocity:h}=c;this.startAnimation(h);const{onDragEnd:f}=this.getProps();f&&Te.postRender(()=>f(o,c))}cancel(){this.isDragging=!1;const{projection:r,animationState:a}=this.visualElement;r&&(r.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),a&&a.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(r,a,o){const{drag:c}=this.getProps();if(!o||!ja(r,c,this.currentDirection))return;const u=this.getAxisMotionValue(r);let h=this.originPoint[r]+o[r];this.constraints&&this.constraints[r]&&(h=hk(h,this.constraints[r],this.elastic[r])),u.set(h)}resolveConstraints(){const{dragConstraints:r,dragElastic:a}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,c=this.constraints;r&&Hr(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&o?this.constraints=pk(o.layoutBox,r):this.constraints=!1,this.elastic=xk(a),c!==this.constraints&&!Hr(r)&&o&&this.constraints&&!this.hasMutatedConstraints&&qt(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=gk(o.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:r,onMeasureDragConstraints:a}=this.getProps();if(!r||!Hr(r))return!1;const o=r.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const u=C2(o,c.root,this.visualElement.getTransformPagePoint());let h=fk(c.layout.layoutBox,u);if(a){const f=a(k2(h));this.hasMutatedConstraints=!!f,f&&(h=Zg(f))}return h}startAnimation(r){const{drag:a,dragMomentum:o,dragElastic:c,dragTransition:u,dragSnapToOrigin:h,onDragTransitionEnd:f}=this.getProps(),m=this.constraints||{},g=qt(x=>{if(!ja(x,a,this.currentDirection))return;let y=m&&m[x]||{};(h===!0||h===x)&&(y={min:0,max:0});const w=c?200:1e6,P=c?40:1e7,T={type:"inertia",velocity:o?r[x]:0,bounceStiffness:w,bounceDamping:P,timeConstant:750,restDelta:1,restSpeed:10,...u,...y};return this.startAxisValueAnimation(x,T)});return Promise.all(g).then(f)}startAxisValueAnimation(r,a){const o=this.getAxisMotionValue(r);return Gc(this.visualElement,r),o.start(Td(r,o,0,a,this.visualElement,!1))}stopAnimation(){qt(r=>this.getAxisMotionValue(r).stop())}getAxisMotionValue(r){const a=`_drag${r.toUpperCase()}`,o=this.visualElement.getProps(),c=o[a];return c||this.visualElement.getValue(r,(o.initial?o.initial[r]:void 0)||0)}snapToCursor(r){qt(a=>{const{drag:o}=this.getProps();if(!ja(a,o,this.currentDirection))return;const{projection:c}=this.visualElement,u=this.getAxisMotionValue(a);if(c&&c.layout){const{min:h,max:f}=c.layout.layoutBox[a],m=u.get()||0;u.set(r[a]-Ae(h,f,.5)+m)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:r,dragConstraints:a}=this.getProps(),{projection:o}=this.visualElement;if(!Hr(a)||!o||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};qt(h=>{const f=this.getAxisMotionValue(h);if(f&&this.constraints!==!1){const m=f.get();c[h]=mk({min:m,max:m},this.constraints[h])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.constraints=!1,this.resolveConstraints(),qt(h=>{if(!ja(h,r,null))return;const f=this.getAxisMotionValue(h),{min:m,max:g}=this.constraints[h];f.set(Ae(m,g,c[h]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;vk.set(this.visualElement,this);const r=this.visualElement.current,a=Qi(r,"pointerdown",g=>{const{drag:x,dragListener:y=!0}=this.getProps(),w=g.target,P=w!==r&&r2(w);x&&y&&!P&&this.start(g)});let o;const c=()=>{const{dragConstraints:g}=this.getProps();Hr(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),o||(o=wk(r,g.current,()=>this.scalePositionWithinConstraints())))},{projection:u}=this.visualElement,h=u.addEventListener("measure",c);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),Te.read(c);const f=ns(window,"resize",()=>this.scalePositionWithinConstraints()),m=u.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:x})=>{this.isDragging&&x&&(qt(y=>{const w=this.getAxisMotionValue(y);w&&(this.originPoint[y]+=g[y].translate,w.set(w.get()+g[y].translate))}),this.visualElement.render())}));return()=>{f(),a(),h(),m&&m(),o&&o()}}getProps(){const r=this.visualElement.getProps(),{drag:a=!1,dragDirectionLock:o=!1,dragPropagation:c=!1,dragConstraints:u=!1,dragElastic:h=td,dragMomentum:f=!0}=r;return{...r,drag:a,dragDirectionLock:o,dragPropagation:c,dragConstraints:u,dragElastic:h,dragMomentum:f}}}function dm(t){let r=!0;return()=>{if(r){r=!1;return}t()}}function wk(t,r,a){const o=yf(t,dm(a)),c=yf(r,dm(a));return()=>{o(),c()}}function ja(t,r,a){return(r===!0||r===t)&&(a===null||a===t)}function bk(t,r=10){let a=null;return Math.abs(t.y)>r?a="y":Math.abs(t.x)>r&&(a="x"),a}class jk extends Bn{constructor(r){super(r),this.removeGroupControls=Rt,this.removeListeners=Rt,this.controls=new yk(r)}mount(){const{dragControls:r}=this.node.getProps();r&&(this.removeGroupControls=r.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Rt}update(){const{dragControls:r}=this.node.getProps(),{dragControls:a}=this.node.prevProps||{};r!==a&&(this.removeGroupControls(),r&&(this.removeGroupControls=r.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const jc=t=>(r,a)=>{t&&Te.update(()=>t(r,a),!1,!0)};class kk extends Bn{constructor(){super(...arguments),this.removePointerDownListener=Rt}onPointerDown(r){this.session=new Rx(r,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ex(this.node)})}createPanHandlers(){const{onPanSessionStart:r,onPanStart:a,onPan:o,onPanEnd:c}=this.node.getProps();return{onSessionStart:jc(r),onStart:jc(a),onMove:jc(o),onEnd:(u,h)=>{delete this.session,c&&Te.postRender(()=>c(u,h))}}}mount(){this.removePointerDownListener=Qi(this.node.current,"pointerdown",r=>this.onPointerDown(r))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let kc=!1;class Nk extends j.Component{componentDidMount(){const{visualElement:r,layoutGroup:a,switchLayoutGroup:o,layoutId:c}=this.props,{projection:u}=r;u&&(a.group&&a.group.add(u),o&&o.register&&c&&o.register(u),kc&&u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),La.hasEverUpdated=!0}getSnapshotBeforeUpdate(r){const{layoutDependency:a,visualElement:o,drag:c,isPresent:u}=this.props,{projection:h}=o;return h&&(h.isPresent=u,r.layoutDependency!==a&&h.setOptions({...h.options,layoutDependency:a}),kc=!0,c||r.layoutDependency!==a||a===void 0||r.isPresent!==u?h.willUpdate():this.safeToRemove(),r.isPresent!==u&&(u?h.promote():h.relegate()||Te.postRender(()=>{const f=h.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:r,layoutAnchor:a}=this.props,{projection:o}=r;o&&(o.options.layoutAnchor=a,o.root.didUpdate(),Ad.postRender(()=>{!o.currentAnimation&&o.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:r,layoutGroup:a,switchLayoutGroup:o}=this.props,{projection:c}=r;kc=!0,c&&(c.scheduleCheckAfterUnmount(),a&&a.group&&a.group.remove(c),o&&o.deregister&&o.deregister(c))}safeToRemove(){const{safeToRemove:r}=this.props;r&&r()}render(){return null}}function Ax(t){const[r,a]=zj(),o=j.useContext(Km);return i.jsx(Nk,{...t,layoutGroup:o,switchLayoutGroup:j.useContext(Px),isPresent:r,safeToRemove:a})}const Sk={pan:{Feature:kk},drag:{Feature:jk,ProjectionNode:yx,MeasureLayout:Ax}};function um(t,r,a){const{props:o}=t;t.animationState&&o.whileHover&&t.animationState.setActive("whileHover",a==="Start");const c="onHover"+a,u=o[c];u&&Te.postRender(()=>u(r,ls(r)))}class Ck extends Bn{mount(){const{current:r}=this.node;r&&(this.unmount=Jb(r,(a,o)=>(um(this.node,o,"Start"),c=>um(this.node,c,"End"))))}unmount(){}}class Pk extends Bn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let r=!1;try{r=this.node.current.matches(":focus-visible")}catch{r=!0}!r||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ss(ns(this.node.current,"focus",()=>this.onFocus()),ns(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function hm(t,r,a){const{props:o}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&o.whileTap&&t.animationState.setActive("whileTap",a==="Start");const c="onTap"+(a==="End"?"":a),u=o[c];u&&Te.postRender(()=>u(r,ls(r)))}class Tk extends Bn{mount(){const{current:r}=this.node;if(!r)return;const{globalTapTarget:a,propagate:o}=this.node.props;this.unmount=s2(r,(c,u)=>(hm(this.node,u,"Start"),(h,{success:f})=>hm(this.node,h,f?"End":"Cancel")),{useGlobalTarget:a,stopPropagation:o?.tap===!1})}unmount(){}}const nd=new WeakMap,Nc=new WeakMap,Ek=t=>{const r=nd.get(t.target);r&&r(t)},Rk=t=>{t.forEach(Ek)};function zk({root:t,...r}){const a=t||document;Nc.has(a)||Nc.set(a,{});const o=Nc.get(a),c=JSON.stringify(r);return o[c]||(o[c]=new IntersectionObserver(Rk,{root:t,...r})),o[c]}function Ak(t,r,a){const o=zk(r);return nd.set(t,a),o.observe(t),()=>{nd.delete(t),o.unobserve(t)}}const Mk={some:0,all:1};class Ik extends Bn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();const{viewport:r={}}=this.node.getProps(),{root:a,margin:o,amount:c="some",once:u}=r,h={root:a?a.current:void 0,rootMargin:o,threshold:typeof c=="number"?c:Mk[c]},f=m=>{const{isIntersecting:g}=m;if(this.isInView===g||(this.isInView=g,u&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:x,onViewportLeave:y}=this.node.getProps(),w=g?x:y;w&&w(m)};this.stopObserver=Ak(this.node.current,h,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:r,prevProps:a}=this.node;["amount","margin","root"].some(Dk(r,a))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}}function Dk({viewport:t={}},{viewport:r={}}={}){return a=>t[a]!==r[a]}const Lk={inView:{Feature:Ik},tap:{Feature:Tk},focus:{Feature:Pk},hover:{Feature:Ck}},Vk={layout:{ProjectionNode:yx,MeasureLayout:Ax}},Fk={...ok,...Lk,...Sk,...Vk},ni=nk(Fk,rk);function Wn({children:t}){const[r,a]=j.useState({x:0,y:0}),[o,c]=j.useState(!1),u=Wt();j.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let m=0,g=0,x=0,y=0,w=0;const P=E=>{m=E.clientX,g=E.clientY},T=()=>{x+=(m-x)*.12,y+=(g-y)*.12,a({x,y}),w=requestAnimationFrame(T)};return window.addEventListener("mousemove",P,{passive:!0}),w=requestAnimationFrame(T),()=>{window.removeEventListener("mousemove",P),cancelAnimationFrame(w)}},[]);const h=[{path:"/",label:"Home"},{path:"/about",label:"About"},{path:"/projects",label:"Projects"},{path:"/resume",label:"Resume"}];return i.jsxs("div",{className:"page-root",id:"home",children:[i.jsx("a",{className:"skip-link",href:"#main",children:"Skip to content"}),i.jsx("div",{className:"blob",style:{background:`radial-gradient(600px circle at ${r.x}px ${r.y}px,
            hsl(var(--g1)/.12) 0%, hsl(var(--g2)/.12) 25%, hsl(var(--g3)/.12) 55%,
            hsl(var(--g4)/.12) 85%, transparent 100%)`}}),i.jsx("header",{className:"nav",role:"banner",children:i.jsxs("div",{className:"container nav-row",children:[i.jsx(Ze,{to:"/",className:"nav-brand",children:"Yun-Rou Chang"}),i.jsx("nav",{className:"nav-links desktop-only",children:h.map(f=>{const m=u.pathname===f.path;return i.jsxs(Ze,{to:f.path,className:`nav-item ${m?"active":""}`,children:[i.jsx("span",{className:"nav-text",children:f.label}),m&&i.jsx(ni.div,{layoutId:"tubelight",className:"nav-tubelight",transition:{type:"spring",bounce:.2,duration:.6}})]},f.path)})}),i.jsxs("button",{className:"nav-hamburger","aria-label":"Toggle navigation menu","aria-expanded":o,onClick:()=>c(!o),children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]}),i.jsx("div",{className:`mobile-nav-overlay ${o?"open":""}`,children:i.jsxs("nav",{className:"mobile-nav-links",children:[h.map(f=>i.jsx(Ze,{to:f.path,onClick:()=>c(!1),className:u.pathname===f.path?"active":"",children:f.label},f.path)),i.jsx("a",{className:"btn-pill interactive-button-base btn--primary",href:"#contact",onClick:()=>c(!1),children:"Contact Me"})]})}),i.jsxs("a",{className:"btn-pill interactive-button-base btn--primary nav-cta desktop-only",href:"#contact",children:["Contact ",i.jsx("span",{className:"dot",children:"→"})]})]})}),i.jsx("main",{id:"main",children:t}),i.jsx("footer",{children:"© Yun-Rou Chang 2025"}),i.jsx("style",{children:`
        /* Global Variables & Reset */
        :root {
           /* Increase max-width for large screens (Note 4) */
           --container-width: 1200px;
        }
        @media (min-width: 1600px) {
           :root { --container-width: 1440px; }
        }

        .page-root {
          min-height: 100vh;
          background: var(--md-background);
          color: var(--text);
          overflow-x: hidden; /* Prevent horizontal scroll */
        }

        .container {
          max-width: var(--container-width);
          margin: 0 auto;
          padding: 0 var(--space-4);
          width: 100%;
        }

        /* Typography Defaults */
        body {
          margin: 0;
          font-family: ui-sans-serif, system-ui, sans-serif;
          color: var(--text);
        }
        h1, h2, h3 { color: var(--md-on-surface); }
        .muted { color: var(--color-text-muted); }

        /* Navigation (Tubelight Style - Note 6) */
        header.nav {
          position: fixed;
          top: 20px; /* Floating effect */
          left: 0;
          right: 0;
          z-index: 50;
          margin-left: auto;
          margin-right: auto;
          width: calc(100% - 32px);
          max-width: var(--container-width);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.85); /* White bg, slightly transparent */
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }
        
        .nav-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px; /* Compact padding */
        }

        .nav-brand {
          font-weight: 700;
          font-size: 18px;
          text-decoration: none;
          color: #000;
          padding-left: 12px;
        }

        .nav-links.desktop-only {
          display: flex;
          gap: 4px;
          background: rgba(0,0,0,0.03);
          padding: 4px;
          border-radius: 999px;
        }

        .nav-item {
          position: relative;
          padding: 8px 20px;
          font-size: 14px;
          font-weight: 500;
          color: #555;
          text-decoration: none;
          border-radius: 999px;
          transition: color 0.2s ease;
        }
        
        .nav-item:hover { color: #000; }
        .nav-item.active { color: #000; }

        .nav-text { position: relative; z-index: 2; }

        /* The floating highlight */
        .nav-tubelight {
          position: absolute;
          inset: 0;
          background: #fff;
          border-radius: 999px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          z-index: 1;
        }

        /* Buttons (Note 2) */
        .interactive-button-base {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          border-radius: 999px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          overflow: hidden; /* Ensure fill stays inside */
        }

        .btn-pill { padding: 12px 28px; font-size: 13px; font-weight: 500; }
        .btn--primary {
          background: #4570ff; /* Rose Chang title color */
          color: #fff;
        }

        /* Hover Effect: Pink shadow fill frame 10% */
        .interactive-button-base::after {
          content: '';
          position: absolute;
          inset: 0;
          background: hsl(var(--g2)); /* Pink/Magenta */
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }
        
        .interactive-button-base:hover::after {
          opacity: 0.1; /* 10% opacity */
        }
        
        .interactive-button-base span, 
        .interactive-button-base svg {
          position: relative;
          z-index: 1;
        }

        .interactive-button-base:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        /* Common Styles */
        .section { padding: 80px 0; }
        
        /* Main content spacing for fixed nav */
        main#main {
          padding-top: 120px;
        }
        
        /* Typography Scale */
        h1.name { font-size: clamp(40px, 5vw, 64px); font-weight: 800; margin-bottom: 16px; color: #4570ff; }
        h2.head { font-size: clamp(28px, 4vw, 48px); font-weight: 700; margin-bottom: 24px; }
        .body { font-size: 1.125rem; line-height: 1.75; }

        /* Glass Frame & Cards */
        .gframe {
          padding: 2px; /* Frame thickness */
          border-radius: var(--radius-lg);
          background: linear-gradient(135deg, hsl(var(--g1)/.4), hsl(var(--g2)/.4), hsl(var(--g3)/.4));
        }
        .card {
          background: rgba(255,255,255,0.9);
          border-radius: calc(var(--radius-lg) - 2px);
          overflow: hidden;
        }
        .shadow-glow { box-shadow: 0 10px 40px -10px rgba(0,0,0,0.1); }

        /* Mobile Nav (Note 3 - Solid background) */
        .nav-hamburger { display: none; background: none; border: none; cursor: pointer; flex-direction: column; gap: 5px; padding: 8px; }
        .nav-hamburger span { display: block; width: 24px; height: 2px; background: #000; border-radius: 2px; transition: all 0.3s; }
        
        .mobile-nav-overlay {
          position: fixed;
          inset: 0;
          background: rgba(255,255,255,0.98); /* Solid/Blur background */
          backdrop-filter: blur(10px);
          z-index: 40;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .mobile-nav-overlay.open { opacity: 1; pointer-events: all; }
        
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }
        .mobile-nav-links a {
          font-size: 24px;
          font-weight: 600;
          color: #333;
          text-decoration: none;
        }
        .mobile-nav-links a.active { color: var(--md-primary); }

        /* Responsive */
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .nav-hamburger { display: flex; }
          header.nav { top: 10px; border-radius: 16px; width: calc(100% - 32px); }
          main#main { padding-top: 100px; }
        }

        /* Skip Link */
        .skip-link { position: absolute; left: -9999px; top: auto; background: #000; color: #fff; padding: 12px; z-index: 100; }
        .skip-link:focus { left: 20px; top: 20px; }

        /* Blob */
        .blob { position: fixed; inset: 0; z-index: -1; pointer-events: none; }

        /* Footer */
        footer {
          border-top: 1px solid rgba(0, 0, 0, .12);
          padding: 32px 0;
          text-align: center;
          font-size: 12px;
          color: #666;
        }

      `})]})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ok=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,a,o)=>o?o.toUpperCase():a.toLowerCase()),pm=t=>{const r=Ok(t);return r.charAt(0).toUpperCase()+r.slice(1)},Mx=(...t)=>t.filter((r,a,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===a).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Bk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=j.forwardRef(({color:t="currentColor",size:r=24,strokeWidth:a=2,absoluteStrokeWidth:o,className:c="",children:u,iconNode:h,...f},m)=>j.createElement("svg",{ref:m,...Bk,width:r,height:r,stroke:t,strokeWidth:o?Number(a)*24/Number(r):a,className:Mx("lucide",c),...f},[...h.map(([g,x])=>j.createElement(g,x)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=(t,r)=>{const a=j.forwardRef(({className:o,...c},u)=>j.createElement(Wk,{ref:u,iconNode:r,className:Mx(`lucide-${_k(pm(t))}`,`lucide-${t}`,o),...c}));return a.displayName=pm(t),a};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],ka=ye("arrow-right",Uk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],at=ye("award",Hk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],Gk=ye("bot",$k);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Ix=ye("briefcase",Kk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],fm=ye("chart-column",Yk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ar=ye("circle-check",qk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk=[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]],mm=ye("code",Xk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],Sc=ye("cpu",Qk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],Cc=ye("download",Zk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],eN=ye("gift",Jk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],cr=ye("globe",tN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nN=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],rN=ye("graduation-cap",nN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iN=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],sN=ye("headphones",iN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aN=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],Qa=ye("heart",aN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oN=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],On=ye("lightbulb",oN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lN=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],cN=ye("linkedin",lN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dN=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],uN=ye("mail",dN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hN=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],pN=ye("message-circle",hN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fN=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Pc=ye("music",fN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mN=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Na=ye("package",mN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gN=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],Tc=ye("printer",gN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xN=[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]],vN=ye("puzzle",xN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yN=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],wN=ye("rocket",yN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bN=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],jN=ye("search",bN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kN=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],NN=ye("shield",kN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SN=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],dr=ye("sparkles",SN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CN=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],ur=ye("star",CN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],oo=ye("target",PN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TN=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],gm=ye("trash-2",TN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EN=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],Ki=ye("trending-up",EN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RN=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],Xr=ye("users",RN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zN=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],AN=ye("video",zN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MN=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],IN=ye("zap",MN);Tm();function xm(t,r){if(typeof t=="function")return t(r);t!=null&&(t.current=r)}function DN(...t){return r=>{let a=!1;const o=t.map(c=>{const u=xm(c,r);return!a&&typeof u=="function"&&(a=!0),u});if(a)return()=>{for(let c=0;c<o.length;c++){const u=o[c];typeof u=="function"?u():xm(t[c],null)}}}}var LN=Symbol.for("react.lazy"),Za=uy[" use ".trim().toString()];function VN(t){return typeof t=="object"&&t!==null&&"then"in t}function Dx(t){return t!=null&&typeof t=="object"&&"$$typeof"in t&&t.$$typeof===LN&&"_payload"in t&&VN(t._payload)}function Lx(t){const r=FN(t),a=j.forwardRef((o,c)=>{let{children:u,...h}=o;Dx(u)&&typeof Za=="function"&&(u=Za(u._payload));const f=j.Children.toArray(u),m=f.find(ON);if(m){const g=m.props.children,x=f.map(y=>y===m?j.Children.count(g)>1?j.Children.only(null):j.isValidElement(g)?g.props.children:null:y);return i.jsx(r,{...h,ref:c,children:j.isValidElement(g)?j.cloneElement(g,void 0,x):null})}return i.jsx(r,{...h,ref:c,children:u})});return a.displayName=`${t}.Slot`,a}var Vx=Lx("Slot");function FN(t){const r=j.forwardRef((a,o)=>{let{children:c,...u}=a;if(Dx(c)&&typeof Za=="function"&&(c=Za(c._payload)),j.isValidElement(c)){const h=WN(c),f=BN(u,c.props);return c.type!==j.Fragment&&(f.ref=o?DN(o,h):h),j.cloneElement(c,f)}return j.Children.count(c)>1?j.Children.only(null):null});return r.displayName=`${t}.SlotClone`,r}var _N=Symbol("radix.slottable");function ON(t){return j.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===_N}function BN(t,r){const a={...r};for(const o in r){const c=t[o],u=r[o];/^on[A-Z]/.test(o)?c&&u?a[o]=(...f)=>{const m=u(...f);return c(...f),m}:c&&(a[o]=c):o==="style"?a[o]={...c,...u}:o==="className"&&(a[o]=[c,u].filter(Boolean).join(" "))}return{...t,...a}}function WN(t){let r=Object.getOwnPropertyDescriptor(t.props,"ref")?.get,a=r&&"isReactWarning"in r&&r.isReactWarning;return a?t.ref:(r=Object.getOwnPropertyDescriptor(t,"ref")?.get,a=r&&"isReactWarning"in r&&r.isReactWarning,a?t.props.ref:t.props.ref||t.ref)}var UN=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],HN=UN.reduce((t,r)=>{const a=Lx(`Primitive.${r}`),o=j.forwardRef((c,u)=>{const{asChild:h,...f}=c,m=h?a:r;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),i.jsx(m,{...f,ref:u})});return o.displayName=`Primitive.${r}`,{...t,[r]:o}},{}),$N="Separator",vm="horizontal",GN=["horizontal","vertical"],Fx=j.forwardRef((t,r)=>{const{decorative:a,orientation:o=vm,...c}=t,u=KN(o)?o:vm,f=a?{role:"none"}:{"aria-orientation":u==="vertical"?u:void 0,role:"separator"};return i.jsx(HN.div,{"data-orientation":u,...f,...c,ref:r})});Fx.displayName=$N;function KN(t){return GN.includes(t)}var YN=Fx;function _x(t){var r,a,o="";if(typeof t=="string"||typeof t=="number")o+=t;else if(typeof t=="object")if(Array.isArray(t)){var c=t.length;for(r=0;r<c;r++)t[r]&&(a=_x(t[r]))&&(o&&(o+=" "),o+=a)}else for(a in t)t[a]&&(o&&(o+=" "),o+=a);return o}function Ox(){for(var t,r,a=0,o="",c=arguments.length;a<c;a++)(t=arguments[a])&&(r=_x(t))&&(o&&(o+=" "),o+=r);return o}const qN=(t,r)=>{const a=new Array(t.length+r.length);for(let o=0;o<t.length;o++)a[o]=t[o];for(let o=0;o<r.length;o++)a[t.length+o]=r[o];return a},XN=(t,r)=>({classGroupId:t,validator:r}),Bx=(t=new Map,r=null,a)=>({nextPart:t,validators:r,classGroupId:a}),Ja="-",ym=[],QN="arbitrary..",ZN=t=>{const r=eS(t),{conflictingClassGroups:a,conflictingClassGroupModifiers:o}=t;return{getClassGroupId:h=>{if(h.startsWith("[")&&h.endsWith("]"))return JN(h);const f=h.split(Ja),m=f[0]===""&&f.length>1?1:0;return Wx(f,m,r)},getConflictingClassGroupIds:(h,f)=>{if(f){const m=o[h],g=a[h];return m?g?qN(g,m):m:g||ym}return a[h]||ym}}},Wx=(t,r,a)=>{if(t.length-r===0)return a.classGroupId;const c=t[r],u=a.nextPart.get(c);if(u){const g=Wx(t,r+1,u);if(g)return g}const h=a.validators;if(h===null)return;const f=r===0?t.join(Ja):t.slice(r).join(Ja),m=h.length;for(let g=0;g<m;g++){const x=h[g];if(x.validator(f))return x.classGroupId}},JN=t=>t.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const r=t.slice(1,-1),a=r.indexOf(":"),o=r.slice(0,a);return o?QN+o:void 0})(),eS=t=>{const{theme:r,classGroups:a}=t;return tS(a,r)},tS=(t,r)=>{const a=Bx();for(const o in t){const c=t[o];Bd(c,a,o,r)}return a},Bd=(t,r,a,o)=>{const c=t.length;for(let u=0;u<c;u++){const h=t[u];nS(h,r,a,o)}},nS=(t,r,a,o)=>{if(typeof t=="string"){rS(t,r,a);return}if(typeof t=="function"){iS(t,r,a,o);return}sS(t,r,a,o)},rS=(t,r,a)=>{const o=t===""?r:Ux(r,t);o.classGroupId=a},iS=(t,r,a,o)=>{if(aS(t)){Bd(t(o),r,a,o);return}r.validators===null&&(r.validators=[]),r.validators.push(XN(a,t))},sS=(t,r,a,o)=>{const c=Object.entries(t),u=c.length;for(let h=0;h<u;h++){const[f,m]=c[h];Bd(m,Ux(r,f),a,o)}},Ux=(t,r)=>{let a=t;const o=r.split(Ja),c=o.length;for(let u=0;u<c;u++){const h=o[u];let f=a.nextPart.get(h);f||(f=Bx(),a.nextPart.set(h,f)),a=f}return a},aS=t=>"isThemeGetter"in t&&t.isThemeGetter===!0,oS=t=>{if(t<1)return{get:()=>{},set:()=>{}};let r=0,a=Object.create(null),o=Object.create(null);const c=(u,h)=>{a[u]=h,r++,r>t&&(r=0,o=a,a=Object.create(null))};return{get(u){let h=a[u];if(h!==void 0)return h;if((h=o[u])!==void 0)return c(u,h),h},set(u,h){u in a?a[u]=h:c(u,h)}}},rd="!",wm=":",lS=[],bm=(t,r,a,o,c)=>({modifiers:t,hasImportantModifier:r,baseClassName:a,maybePostfixModifierPosition:o,isExternal:c}),cS=t=>{const{prefix:r,experimentalParseClassName:a}=t;let o=c=>{const u=[];let h=0,f=0,m=0,g;const x=c.length;for(let E=0;E<x;E++){const N=c[E];if(h===0&&f===0){if(N===wm){u.push(c.slice(m,E)),m=E+1;continue}if(N==="/"){g=E;continue}}N==="["?h++:N==="]"?h--:N==="("?f++:N===")"&&f--}const y=u.length===0?c:c.slice(m);let w=y,P=!1;y.endsWith(rd)?(w=y.slice(0,-1),P=!0):y.startsWith(rd)&&(w=y.slice(1),P=!0);const T=g&&g>m?g-m:void 0;return bm(u,P,w,T)};if(r){const c=r+wm,u=o;o=h=>h.startsWith(c)?u(h.slice(c.length)):bm(lS,!1,h,void 0,!0)}if(a){const c=o;o=u=>a({className:u,parseClassName:c})}return o},dS=t=>{const r=new Map;return t.orderSensitiveModifiers.forEach((a,o)=>{r.set(a,1e6+o)}),a=>{const o=[];let c=[];for(let u=0;u<a.length;u++){const h=a[u],f=h[0]==="[",m=r.has(h);f||m?(c.length>0&&(c.sort(),o.push(...c),c=[]),o.push(h)):c.push(h)}return c.length>0&&(c.sort(),o.push(...c)),o}},uS=t=>({cache:oS(t.cacheSize),parseClassName:cS(t),sortModifiers:dS(t),...ZN(t)}),hS=/\s+/,pS=(t,r)=>{const{parseClassName:a,getClassGroupId:o,getConflictingClassGroupIds:c,sortModifiers:u}=r,h=[],f=t.trim().split(hS);let m="";for(let g=f.length-1;g>=0;g-=1){const x=f[g],{isExternal:y,modifiers:w,hasImportantModifier:P,baseClassName:T,maybePostfixModifierPosition:E}=a(x);if(y){m=x+(m.length>0?" "+m:m);continue}let N=!!E,M=o(N?T.substring(0,E):T);if(!M){if(!N){m=x+(m.length>0?" "+m:m);continue}if(M=o(T),!M){m=x+(m.length>0?" "+m:m);continue}N=!1}const L=w.length===0?"":w.length===1?w[0]:u(w).join(":"),D=P?L+rd:L,U=D+M;if(h.indexOf(U)>-1)continue;h.push(U);const $=c(M,N);for(let ne=0;ne<$.length;++ne){const le=$[ne];h.push(D+le)}m=x+(m.length>0?" "+m:m)}return m},fS=(...t)=>{let r=0,a,o,c="";for(;r<t.length;)(a=t[r++])&&(o=Hx(a))&&(c&&(c+=" "),c+=o);return c},Hx=t=>{if(typeof t=="string")return t;let r,a="";for(let o=0;o<t.length;o++)t[o]&&(r=Hx(t[o]))&&(a&&(a+=" "),a+=r);return a},mS=(t,...r)=>{let a,o,c,u;const h=m=>{const g=r.reduce((x,y)=>y(x),t());return a=uS(g),o=a.cache.get,c=a.cache.set,u=f,f(m)},f=m=>{const g=o(m);if(g)return g;const x=pS(m,a);return c(m,x),x};return u=h,(...m)=>u(fS(...m))},gS=[],$e=t=>{const r=a=>a[t]||gS;return r.isThemeGetter=!0,r},$x=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Gx=/^\((?:(\w[\w-]*):)?(.+)\)$/i,xS=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,vS=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,yS=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,wS=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,bS=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,jS=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,In=t=>xS.test(t),pe=t=>!!t&&!Number.isNaN(Number(t)),Dn=t=>!!t&&Number.isInteger(Number(t)),Ec=t=>t.endsWith("%")&&pe(t.slice(0,-1)),un=t=>vS.test(t),Kx=()=>!0,kS=t=>yS.test(t)&&!wS.test(t),Wd=()=>!1,NS=t=>bS.test(t),SS=t=>jS.test(t),CS=t=>!X(t)&&!Z(t),PS=t=>Un(t,Xx,Wd),X=t=>$x.test(t),or=t=>Un(t,Qx,kS),jm=t=>Un(t,DS,pe),TS=t=>Un(t,Jx,Kx),ES=t=>Un(t,Zx,Wd),km=t=>Un(t,Yx,Wd),RS=t=>Un(t,qx,SS),Sa=t=>Un(t,ev,NS),Z=t=>Gx.test(t),$i=t=>xr(t,Qx),zS=t=>xr(t,Zx),Nm=t=>xr(t,Yx),AS=t=>xr(t,Xx),MS=t=>xr(t,qx),Ca=t=>xr(t,ev,!0),IS=t=>xr(t,Jx,!0),Un=(t,r,a)=>{const o=$x.exec(t);return o?o[1]?r(o[1]):a(o[2]):!1},xr=(t,r,a=!1)=>{const o=Gx.exec(t);return o?o[1]?r(o[1]):a:!1},Yx=t=>t==="position"||t==="percentage",qx=t=>t==="image"||t==="url",Xx=t=>t==="length"||t==="size"||t==="bg-size",Qx=t=>t==="length",DS=t=>t==="number",Zx=t=>t==="family-name",Jx=t=>t==="number"||t==="weight",ev=t=>t==="shadow",LS=()=>{const t=$e("color"),r=$e("font"),a=$e("text"),o=$e("font-weight"),c=$e("tracking"),u=$e("leading"),h=$e("breakpoint"),f=$e("container"),m=$e("spacing"),g=$e("radius"),x=$e("shadow"),y=$e("inset-shadow"),w=$e("text-shadow"),P=$e("drop-shadow"),T=$e("blur"),E=$e("perspective"),N=$e("aspect"),M=$e("ease"),L=$e("animate"),D=()=>["auto","avoid","all","avoid-page","page","left","right","column"],U=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],$=()=>[...U(),Z,X],ne=()=>["auto","hidden","clip","visible","scroll"],le=()=>["auto","contain","none"],F=()=>[Z,X,m],ce=()=>[In,"full","auto",...F()],ee=()=>[Dn,"none","subgrid",Z,X],xe=()=>["auto",{span:["full",Dn,Z,X]},Dn,Z,X],we=()=>[Dn,"auto",Z,X],Pe=()=>["auto","min","max","fr",Z,X],Se=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],ge=()=>["start","end","center","stretch","center-safe","end-safe"],me=()=>["auto",...F()],ke=()=>[In,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...F()],W=()=>[In,"screen","full","dvw","lvw","svw","min","max","fit",...F()],K=()=>[In,"screen","full","lh","dvh","lvh","svh","min","max","fit",...F()],I=()=>[t,Z,X],C=()=>[...U(),Nm,km,{position:[Z,X]}],V=()=>["no-repeat",{repeat:["","x","y","space","round"]}],ue=()=>["auto","cover","contain",AS,PS,{size:[Z,X]}],he=()=>[Ec,$i,or],se=()=>["","none","full",g,Z,X],ae=()=>["",pe,$i,or],Ne=()=>["solid","dashed","dotted","double"],be=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],de=()=>[pe,Ec,Nm,km],tt=()=>["","none",T,Z,X],tn=()=>["none",pe,Z,X],$n=()=>["none",pe,Z,X],pn=()=>[pe,Z,X],fn=()=>[In,"full",...F()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[un],breakpoint:[un],color:[Kx],container:[un],"drop-shadow":[un],ease:["in","out","in-out"],font:[CS],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[un],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[un],shadow:[un],spacing:["px",pe],text:[un],"text-shadow":[un],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",In,X,Z,N]}],container:["container"],columns:[{columns:[pe,X,Z,f]}],"break-after":[{"break-after":D()}],"break-before":[{"break-before":D()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:$()}],overflow:[{overflow:ne()}],"overflow-x":[{"overflow-x":ne()}],"overflow-y":[{"overflow-y":ne()}],overscroll:[{overscroll:le()}],"overscroll-x":[{"overscroll-x":le()}],"overscroll-y":[{"overscroll-y":le()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:ce()}],"inset-x":[{"inset-x":ce()}],"inset-y":[{"inset-y":ce()}],start:[{"inset-s":ce(),start:ce()}],end:[{"inset-e":ce(),end:ce()}],"inset-bs":[{"inset-bs":ce()}],"inset-be":[{"inset-be":ce()}],top:[{top:ce()}],right:[{right:ce()}],bottom:[{bottom:ce()}],left:[{left:ce()}],visibility:["visible","invisible","collapse"],z:[{z:[Dn,"auto",Z,X]}],basis:[{basis:[In,"full","auto",f,...F()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[pe,In,"auto","initial","none",X]}],grow:[{grow:["",pe,Z,X]}],shrink:[{shrink:["",pe,Z,X]}],order:[{order:[Dn,"first","last","none",Z,X]}],"grid-cols":[{"grid-cols":ee()}],"col-start-end":[{col:xe()}],"col-start":[{"col-start":we()}],"col-end":[{"col-end":we()}],"grid-rows":[{"grid-rows":ee()}],"row-start-end":[{row:xe()}],"row-start":[{"row-start":we()}],"row-end":[{"row-end":we()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":Pe()}],"auto-rows":[{"auto-rows":Pe()}],gap:[{gap:F()}],"gap-x":[{"gap-x":F()}],"gap-y":[{"gap-y":F()}],"justify-content":[{justify:[...Se(),"normal"]}],"justify-items":[{"justify-items":[...ge(),"normal"]}],"justify-self":[{"justify-self":["auto",...ge()]}],"align-content":[{content:["normal",...Se()]}],"align-items":[{items:[...ge(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...ge(),{baseline:["","last"]}]}],"place-content":[{"place-content":Se()}],"place-items":[{"place-items":[...ge(),"baseline"]}],"place-self":[{"place-self":["auto",...ge()]}],p:[{p:F()}],px:[{px:F()}],py:[{py:F()}],ps:[{ps:F()}],pe:[{pe:F()}],pbs:[{pbs:F()}],pbe:[{pbe:F()}],pt:[{pt:F()}],pr:[{pr:F()}],pb:[{pb:F()}],pl:[{pl:F()}],m:[{m:me()}],mx:[{mx:me()}],my:[{my:me()}],ms:[{ms:me()}],me:[{me:me()}],mbs:[{mbs:me()}],mbe:[{mbe:me()}],mt:[{mt:me()}],mr:[{mr:me()}],mb:[{mb:me()}],ml:[{ml:me()}],"space-x":[{"space-x":F()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":F()}],"space-y-reverse":["space-y-reverse"],size:[{size:ke()}],"inline-size":[{inline:["auto",...W()]}],"min-inline-size":[{"min-inline":["auto",...W()]}],"max-inline-size":[{"max-inline":["none",...W()]}],"block-size":[{block:["auto",...K()]}],"min-block-size":[{"min-block":["auto",...K()]}],"max-block-size":[{"max-block":["none",...K()]}],w:[{w:[f,"screen",...ke()]}],"min-w":[{"min-w":[f,"screen","none",...ke()]}],"max-w":[{"max-w":[f,"screen","none","prose",{screen:[h]},...ke()]}],h:[{h:["screen","lh",...ke()]}],"min-h":[{"min-h":["screen","lh","none",...ke()]}],"max-h":[{"max-h":["screen","lh",...ke()]}],"font-size":[{text:["base",a,$i,or]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[o,IS,TS]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Ec,X]}],"font-family":[{font:[zS,ES,r]}],"font-features":[{"font-features":[X]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[c,Z,X]}],"line-clamp":[{"line-clamp":[pe,"none",Z,jm]}],leading:[{leading:[u,...F()]}],"list-image":[{"list-image":["none",Z,X]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Z,X]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:I()}],"text-color":[{text:I()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Ne(),"wavy"]}],"text-decoration-thickness":[{decoration:[pe,"from-font","auto",Z,or]}],"text-decoration-color":[{decoration:I()}],"underline-offset":[{"underline-offset":[pe,"auto",Z,X]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:F()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Z,X]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Z,X]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:C()}],"bg-repeat":[{bg:V()}],"bg-size":[{bg:ue()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Dn,Z,X],radial:["",Z,X],conic:[Dn,Z,X]},MS,RS]}],"bg-color":[{bg:I()}],"gradient-from-pos":[{from:he()}],"gradient-via-pos":[{via:he()}],"gradient-to-pos":[{to:he()}],"gradient-from":[{from:I()}],"gradient-via":[{via:I()}],"gradient-to":[{to:I()}],rounded:[{rounded:se()}],"rounded-s":[{"rounded-s":se()}],"rounded-e":[{"rounded-e":se()}],"rounded-t":[{"rounded-t":se()}],"rounded-r":[{"rounded-r":se()}],"rounded-b":[{"rounded-b":se()}],"rounded-l":[{"rounded-l":se()}],"rounded-ss":[{"rounded-ss":se()}],"rounded-se":[{"rounded-se":se()}],"rounded-ee":[{"rounded-ee":se()}],"rounded-es":[{"rounded-es":se()}],"rounded-tl":[{"rounded-tl":se()}],"rounded-tr":[{"rounded-tr":se()}],"rounded-br":[{"rounded-br":se()}],"rounded-bl":[{"rounded-bl":se()}],"border-w":[{border:ae()}],"border-w-x":[{"border-x":ae()}],"border-w-y":[{"border-y":ae()}],"border-w-s":[{"border-s":ae()}],"border-w-e":[{"border-e":ae()}],"border-w-bs":[{"border-bs":ae()}],"border-w-be":[{"border-be":ae()}],"border-w-t":[{"border-t":ae()}],"border-w-r":[{"border-r":ae()}],"border-w-b":[{"border-b":ae()}],"border-w-l":[{"border-l":ae()}],"divide-x":[{"divide-x":ae()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ae()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Ne(),"hidden","none"]}],"divide-style":[{divide:[...Ne(),"hidden","none"]}],"border-color":[{border:I()}],"border-color-x":[{"border-x":I()}],"border-color-y":[{"border-y":I()}],"border-color-s":[{"border-s":I()}],"border-color-e":[{"border-e":I()}],"border-color-bs":[{"border-bs":I()}],"border-color-be":[{"border-be":I()}],"border-color-t":[{"border-t":I()}],"border-color-r":[{"border-r":I()}],"border-color-b":[{"border-b":I()}],"border-color-l":[{"border-l":I()}],"divide-color":[{divide:I()}],"outline-style":[{outline:[...Ne(),"none","hidden"]}],"outline-offset":[{"outline-offset":[pe,Z,X]}],"outline-w":[{outline:["",pe,$i,or]}],"outline-color":[{outline:I()}],shadow:[{shadow:["","none",x,Ca,Sa]}],"shadow-color":[{shadow:I()}],"inset-shadow":[{"inset-shadow":["none",y,Ca,Sa]}],"inset-shadow-color":[{"inset-shadow":I()}],"ring-w":[{ring:ae()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:I()}],"ring-offset-w":[{"ring-offset":[pe,or]}],"ring-offset-color":[{"ring-offset":I()}],"inset-ring-w":[{"inset-ring":ae()}],"inset-ring-color":[{"inset-ring":I()}],"text-shadow":[{"text-shadow":["none",w,Ca,Sa]}],"text-shadow-color":[{"text-shadow":I()}],opacity:[{opacity:[pe,Z,X]}],"mix-blend":[{"mix-blend":[...be(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":be()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[pe]}],"mask-image-linear-from-pos":[{"mask-linear-from":de()}],"mask-image-linear-to-pos":[{"mask-linear-to":de()}],"mask-image-linear-from-color":[{"mask-linear-from":I()}],"mask-image-linear-to-color":[{"mask-linear-to":I()}],"mask-image-t-from-pos":[{"mask-t-from":de()}],"mask-image-t-to-pos":[{"mask-t-to":de()}],"mask-image-t-from-color":[{"mask-t-from":I()}],"mask-image-t-to-color":[{"mask-t-to":I()}],"mask-image-r-from-pos":[{"mask-r-from":de()}],"mask-image-r-to-pos":[{"mask-r-to":de()}],"mask-image-r-from-color":[{"mask-r-from":I()}],"mask-image-r-to-color":[{"mask-r-to":I()}],"mask-image-b-from-pos":[{"mask-b-from":de()}],"mask-image-b-to-pos":[{"mask-b-to":de()}],"mask-image-b-from-color":[{"mask-b-from":I()}],"mask-image-b-to-color":[{"mask-b-to":I()}],"mask-image-l-from-pos":[{"mask-l-from":de()}],"mask-image-l-to-pos":[{"mask-l-to":de()}],"mask-image-l-from-color":[{"mask-l-from":I()}],"mask-image-l-to-color":[{"mask-l-to":I()}],"mask-image-x-from-pos":[{"mask-x-from":de()}],"mask-image-x-to-pos":[{"mask-x-to":de()}],"mask-image-x-from-color":[{"mask-x-from":I()}],"mask-image-x-to-color":[{"mask-x-to":I()}],"mask-image-y-from-pos":[{"mask-y-from":de()}],"mask-image-y-to-pos":[{"mask-y-to":de()}],"mask-image-y-from-color":[{"mask-y-from":I()}],"mask-image-y-to-color":[{"mask-y-to":I()}],"mask-image-radial":[{"mask-radial":[Z,X]}],"mask-image-radial-from-pos":[{"mask-radial-from":de()}],"mask-image-radial-to-pos":[{"mask-radial-to":de()}],"mask-image-radial-from-color":[{"mask-radial-from":I()}],"mask-image-radial-to-color":[{"mask-radial-to":I()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":U()}],"mask-image-conic-pos":[{"mask-conic":[pe]}],"mask-image-conic-from-pos":[{"mask-conic-from":de()}],"mask-image-conic-to-pos":[{"mask-conic-to":de()}],"mask-image-conic-from-color":[{"mask-conic-from":I()}],"mask-image-conic-to-color":[{"mask-conic-to":I()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:C()}],"mask-repeat":[{mask:V()}],"mask-size":[{mask:ue()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Z,X]}],filter:[{filter:["","none",Z,X]}],blur:[{blur:tt()}],brightness:[{brightness:[pe,Z,X]}],contrast:[{contrast:[pe,Z,X]}],"drop-shadow":[{"drop-shadow":["","none",P,Ca,Sa]}],"drop-shadow-color":[{"drop-shadow":I()}],grayscale:[{grayscale:["",pe,Z,X]}],"hue-rotate":[{"hue-rotate":[pe,Z,X]}],invert:[{invert:["",pe,Z,X]}],saturate:[{saturate:[pe,Z,X]}],sepia:[{sepia:["",pe,Z,X]}],"backdrop-filter":[{"backdrop-filter":["","none",Z,X]}],"backdrop-blur":[{"backdrop-blur":tt()}],"backdrop-brightness":[{"backdrop-brightness":[pe,Z,X]}],"backdrop-contrast":[{"backdrop-contrast":[pe,Z,X]}],"backdrop-grayscale":[{"backdrop-grayscale":["",pe,Z,X]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[pe,Z,X]}],"backdrop-invert":[{"backdrop-invert":["",pe,Z,X]}],"backdrop-opacity":[{"backdrop-opacity":[pe,Z,X]}],"backdrop-saturate":[{"backdrop-saturate":[pe,Z,X]}],"backdrop-sepia":[{"backdrop-sepia":["",pe,Z,X]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":F()}],"border-spacing-x":[{"border-spacing-x":F()}],"border-spacing-y":[{"border-spacing-y":F()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Z,X]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[pe,"initial",Z,X]}],ease:[{ease:["linear","initial",M,Z,X]}],delay:[{delay:[pe,Z,X]}],animate:[{animate:["none",L,Z,X]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[E,Z,X]}],"perspective-origin":[{"perspective-origin":$()}],rotate:[{rotate:tn()}],"rotate-x":[{"rotate-x":tn()}],"rotate-y":[{"rotate-y":tn()}],"rotate-z":[{"rotate-z":tn()}],scale:[{scale:$n()}],"scale-x":[{"scale-x":$n()}],"scale-y":[{"scale-y":$n()}],"scale-z":[{"scale-z":$n()}],"scale-3d":["scale-3d"],skew:[{skew:pn()}],"skew-x":[{"skew-x":pn()}],"skew-y":[{"skew-y":pn()}],transform:[{transform:[Z,X,"","none","gpu","cpu"]}],"transform-origin":[{origin:$()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:fn()}],"translate-x":[{"translate-x":fn()}],"translate-y":[{"translate-y":fn()}],"translate-z":[{"translate-z":fn()}],"translate-none":["translate-none"],accent:[{accent:I()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:I()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Z,X]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":F()}],"scroll-mx":[{"scroll-mx":F()}],"scroll-my":[{"scroll-my":F()}],"scroll-ms":[{"scroll-ms":F()}],"scroll-me":[{"scroll-me":F()}],"scroll-mbs":[{"scroll-mbs":F()}],"scroll-mbe":[{"scroll-mbe":F()}],"scroll-mt":[{"scroll-mt":F()}],"scroll-mr":[{"scroll-mr":F()}],"scroll-mb":[{"scroll-mb":F()}],"scroll-ml":[{"scroll-ml":F()}],"scroll-p":[{"scroll-p":F()}],"scroll-px":[{"scroll-px":F()}],"scroll-py":[{"scroll-py":F()}],"scroll-ps":[{"scroll-ps":F()}],"scroll-pe":[{"scroll-pe":F()}],"scroll-pbs":[{"scroll-pbs":F()}],"scroll-pbe":[{"scroll-pbe":F()}],"scroll-pt":[{"scroll-pt":F()}],"scroll-pr":[{"scroll-pr":F()}],"scroll-pb":[{"scroll-pb":F()}],"scroll-pl":[{"scroll-pl":F()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Z,X]}],fill:[{fill:["none",...I()]}],"stroke-w":[{stroke:[pe,$i,or,jm]}],stroke:[{stroke:["none",...I()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},VS=mS(LS);function Hn(...t){return VS(Ox(t))}function Va({className:t,orientation:r="horizontal",decorative:a=!0,...o}){return i.jsx(YN,{"data-slot":"separator-root",decorative:a,orientation:r,className:Hn("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",t),...o})}function FS(){const t=j.useRef(null),r=j.useRef(null),a=j.useRef([]);j.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let u=!1;const h=()=>{const m=window.scrollY;t.current&&(t.current.style.transform=`translateY(${-(m/15)}px)`),r.current&&(r.current.style.transform=`translateY(${-(m/30)}px)`),u=!1},f=()=>{u||(window.requestAnimationFrame(h),u=!0)};return window.addEventListener("scroll",f,{passive:!0}),h(),()=>window.removeEventListener("scroll",f)},[]),j.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const u=document.querySelectorAll(".reveal"),h=new IntersectionObserver(f=>{f.forEach(m=>{m.isIntersecting&&m.target.classList.add("in")})},{rootMargin:"-5% 0px -5% 0px",threshold:0});return u.forEach(f=>h.observe(f)),()=>h.disconnect()},[]);const o=c=>{c&&!a.current.includes(c)&&a.current.push(c)};return i.jsxs(Wn,{children:[i.jsx("section",{className:"hero",id:"about",children:i.jsxs("div",{className:"container hero-inner",ref:t,children:[i.jsxs("div",{className:"hero-text reveal",ref:o,children:[i.jsx("h1",{className:"name interactive-name",children:"Rose Chang".split("").map((c,u)=>i.jsx("span",{className:"char",style:{animationDelay:`${u*.05}s`},children:c===" "?" ":c},u))}),i.jsx("h2",{className:"head",children:"Interaction & UX/UI Designer"}),i.jsx("h3",{className:"sub-head text-primary",children:"Focused on B2C Products & AI-Driven Experiences"}),i.jsx("p",{className:"body muted hero-desc",children:"I blend Human-Computer Interaction, AI literacy, and strategic design thinking to solve complex business challenges. Proven track record in leading end-to-end digital interventions and cross-functional collaborations."}),i.jsxs("div",{className:"hero-buttons",children:[i.jsxs(Ze,{className:"btn-pill interactive-button-base btn--primary",to:"/about",children:["About Me ",i.jsx("span",{className:"dot",children:"→"})]}),i.jsxs("a",{className:"btn-pill interactive-button-base",style:{background:"var(--surface)",color:"var(--text)",border:"1px solid rgba(0,0,0,0.1)"},href:"#selected-works",children:["View Work ",i.jsx("span",{className:"dot",children:"↓"})]})]})]}),i.jsx("div",{className:"venn-container reveal",ref:o,children:i.jsxs("svg",{viewBox:"0 0 400 350",className:"venn venn-diagram",role:"img","aria-label":"Venn diagram showing intersection of skills",children:[i.jsx("defs",{children:i.jsxs("filter",{id:"softGlass",children:[i.jsx("feGaussianBlur",{stdDeviation:"4",result:"coloredBlur"}),i.jsxs("feMerge",{children:[i.jsx("feMergeNode",{in:"coloredBlur"}),i.jsx("feMergeNode",{in:"SourceGraphic"})]})]})}),i.jsx("circle",{className:"c3",cx:"160",cy:"160",r:"90"}),i.jsx("circle",{className:"c2",cx:"240",cy:"160",r:"90"}),i.jsx("circle",{className:"c1",cx:"200",cy:"90",r:"90"}),i.jsxs("text",{x:"160",y:"195",textAnchor:"middle",fill:"var(--text)",fontSize:"13",fontWeight:"600",children:[i.jsx("tspan",{x:"140",dy:"0",children:"HCI &"}),i.jsx("tspan",{x:"140",dy:"16",children:"Research"})]}),i.jsxs("text",{x:"240",y:"195",textAnchor:"middle",fill:"var(--text)",fontSize:"13",fontWeight:"600",children:[i.jsx("tspan",{x:"260",dy:"0",children:"Business"}),i.jsx("tspan",{x:"260",dy:"16",children:"Strategy"})]}),i.jsxs("text",{x:"200",y:"80",textAnchor:"middle",fill:"var(--text)",fontSize:"13",fontWeight:"600",children:[i.jsx("tspan",{x:"200",dy:"0",children:"AI & Interactive"}),i.jsx("tspan",{x:"200",dy:"16",children:"Prototyping"})]})]})})]})}),i.jsx("section",{className:"section",id:"selected-works",style:{paddingTop:"40px",paddingBottom:"60px"},children:i.jsxs("div",{className:"container",ref:r,style:{maxWidth:"1200px"},children:[i.jsxs("div",{className:"section-header-flex",children:[i.jsxs("h2",{className:"section-head",children:[i.jsx(Ix,{size:32,color:"hsl(var(--g2))"}),"Selected Works"]}),i.jsx(Ze,{to:"/projects",className:"view-all-link",children:"View all projects →"})]}),i.jsxs("div",{className:"projects-3x3-grid",children:[i.jsxs(Ze,{to:"/projects/innoconnect",className:"grid-project-card group reveal",ref:o,children:[i.jsxs("div",{className:"grid-thumb",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",alt:"Innoconnect"}),i.jsx("span",{className:"grid-tag",children:"Gold Award"})]}),i.jsxs("div",{className:"grid-info",children:[i.jsx("h3",{children:"Innoconnect | Gift Service Optimization"}),i.jsxs("p",{children:[i.jsx("strong",{children:"Led UX/UI:"})," Optimized the B2C O2O gifting experience via gamification, boosting user engagement and solving complex flow issues."]}),i.jsxs("div",{className:"explore-btn",children:["Explore Case Study ",i.jsx("span",{className:"arrow",children:"→"})]})]})]}),i.jsxs(Ze,{to:"/projects/oblivilight",className:"grid-project-card group reveal",ref:o,children:[i.jsxs("div",{className:"grid-thumb",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1517457210348-703079e57d4b?auto=format&fit=crop&q=80&w=800",alt:"Oblivilight"}),i.jsx("span",{className:"grid-tag",children:"Best Demo Award"})]}),i.jsxs("div",{className:"grid-info",children:[i.jsx("h3",{children:"OpenHCI'25 | Oblivilight"}),i.jsxs("p",{children:[i.jsx("strong",{children:"End-to-End:"}),' Built a tangible interaction device in a 6-day sprint, exploring how AI systems handle "forgetting" mechanisms.']}),i.jsxs("div",{className:"explore-btn",children:["Explore Case Study ",i.jsx("span",{className:"arrow",children:"→"})]})]})]}),i.jsxs(Ze,{to:"/projects/times-awards",className:"grid-project-card group reveal",ref:o,children:[i.jsxs("div",{className:"grid-thumb",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800",alt:"Times Awards"}),i.jsx("span",{className:"grid-tag",children:"National 3rd Place"})]}),i.jsxs("div",{className:"grid-info",children:[i.jsx("h3",{children:"2025 34th Times Young Creative Awards"}),i.jsxs("p",{children:[i.jsx("strong",{children:"Cross-functional:"})," Directed a multi-channel digital campaign (Web, Video, Audio) leveraging interactive metaphors for job hunting."]}),i.jsxs("div",{className:"explore-btn",children:["Explore Case Study ",i.jsx("span",{className:"arrow",children:"→"})]})]})]}),i.jsxs(Ze,{to:"/projects",className:"grid-project-card group reveal",ref:o,children:[i.jsxs("div",{className:"grid-thumb",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",alt:"KDAN Internship"}),i.jsx("span",{className:"grid-tag",children:"Internship"})]}),i.jsxs("div",{className:"grid-info",children:[i.jsx("h3",{children:"KDAN Mobile | Marketing Intern"}),i.jsxs("p",{children:[i.jsx("strong",{children:"Impact:"})," Integrated AI workflows into social media pipelines, achieving a 101% growth in engagement and streamlining team efficiency."]}),i.jsxs("div",{className:"explore-btn",children:["View in Projects ",i.jsx("span",{className:"arrow",children:"→"})]})]})]}),i.jsxs(Ze,{to:"/projects",className:"grid-project-card group reveal",ref:o,children:[i.jsxs("div",{className:"grid-thumb",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=800",alt:"Research Papers"}),i.jsx("span",{className:"grid-tag",children:"HCI Research"})]}),i.jsxs("div",{className:"grid-info",children:[i.jsx("h3",{children:"HCI Research Publications"}),i.jsxs("p",{children:[i.jsx("strong",{children:"First Author:"})," Published award-winning papers on Human-AI music collaboration and voice emotion analysis (SSIM & IEEE)."]}),i.jsxs("div",{className:"explore-btn",children:["View in Projects ",i.jsx("span",{className:"arrow",children:"→"})]})]})]}),i.jsxs(Ze,{to:"/projects",className:"grid-project-card group reveal",ref:o,children:[i.jsxs("div",{className:"grid-thumb",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",alt:"Mú"}),i.jsx("span",{className:"grid-tag",children:"Nominated"})]}),i.jsxs("div",{className:"grid-info",children:[i.jsx("h3",{children:"UX Design Awards｜Mú"}),i.jsxs("p",{children:[i.jsx("strong",{children:"Lead Designer:"})," Created a multisensory interactive guide for Taiwan’s endangered woods, heavily utilizing emotional design principles."]}),i.jsxs("div",{className:"explore-btn",children:["View in Projects ",i.jsx("span",{className:"arrow",children:"→"})]})]})]}),i.jsxs(Ze,{to:"/projects/good-luck-peanut",className:"grid-project-card group reveal",ref:o,children:[i.jsxs("div",{className:"grid-thumb",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=800",alt:"Bilingual Center"}),i.jsx("span",{className:"grid-tag",children:"Project Assistant"})]}),i.jsxs("div",{className:"grid-info",children:[i.jsx("h3",{children:"Taipei Tech｜Center for Bilingual Learning"}),i.jsxs("p",{children:[i.jsx("strong",{children:"Project Management:"})," Assisted in coordinating cross-departmental bilingual education initiatives and streamlined administrative workflows."]}),i.jsxs("div",{className:"explore-btn",children:["View in Projects ",i.jsx("span",{className:"arrow",children:"→"})]})]})]}),i.jsxs(Ze,{to:"/projects",className:"grid-project-card group reveal",ref:o,children:[i.jsxs("div",{className:"grid-thumb",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",alt:"Big Data Cup"}),i.jsx("span",{className:"grid-tag",children:"3rd Place"})]}),i.jsxs("div",{className:"grid-info",children:[i.jsx("h3",{children:"Big Data Marketing Cup"}),i.jsxs("p",{children:[i.jsx("strong",{children:"UX Research & UI:"})," Designed a data-driven fitness app prototype relying on rigorous market research and user testing."]}),i.jsxs("div",{className:"explore-btn",children:["View in Projects ",i.jsx("span",{className:"arrow",children:"→"})]})]})]}),i.jsxs(Ze,{to:"/projects/good-luck-peanut",className:"grid-project-card group reveal",ref:o,children:[i.jsxs("div",{className:"grid-thumb",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",alt:"Academic Collabs"}),i.jsx("span",{className:"grid-tag",children:"Academic"})]}),i.jsxs("div",{className:"grid-info",children:[i.jsx("h3",{children:"Taipei Tech Academic Collaborations"}),i.jsxs("p",{children:[i.jsx("strong",{children:"Facilitator & Designer:"})," Co-hosted the Penn State GenAI Workshop and spearheaded local branding strategies for Good Luck Peanut."]}),i.jsxs("div",{className:"explore-btn",children:["View in Projects ",i.jsx("span",{className:"arrow",children:"→"})]})]})]})]})]})}),i.jsx("section",{className:"section bg-light-gray",id:"awards",style:{padding:"80px 0"},children:i.jsxs("div",{className:"container",children:[i.jsxs("h2",{className:"section-head",children:[i.jsx(at,{size:32,color:"hsl(var(--g3))"}),"Select Honors & Awards"]}),i.jsxs("div",{className:"awards-grid reveal",ref:o,children:[i.jsxs("div",{className:"award-item-clean",children:[i.jsx("span",{className:"award-year",children:"2025"}),i.jsxs("div",{children:[i.jsx("h4",{children:"Outstanding Graduate Research Award"}),i.jsx("p",{children:"Full Tuition Waiver for publishing two high-impact HCI academic papers."})]})]}),i.jsxs("div",{className:"award-item-clean",children:[i.jsx("span",{className:"award-year",children:"2025"}),i.jsxs("div",{children:[i.jsx("h4",{children:"Times Young Creative Awards (National 3rd)"}),i.jsx("p",{children:"Led marketing strategy and interactive design for YungChing Realty."})]})]}),i.jsxs("div",{className:"award-item-clean",children:[i.jsx("span",{className:"award-year",children:"2025"}),i.jsxs("div",{children:[i.jsx("h4",{children:"IEEE GCCE & TAICHI '25 (Paper Accepted)"}),i.jsx("p",{children:"First Author. Explored AI voice subjectivity and interactive product design."})]})]}),i.jsxs("div",{className:"award-item-clean",children:[i.jsx("span",{className:"award-year",children:"2024"}),i.jsxs("div",{children:[i.jsx("h4",{children:"InnoConnect+ Service Innovation (Gold)"}),i.jsx("p",{children:"End-to-end UX/UI design for Hi-Life O2O gifting service (Ranked 1/186)."})]})]}),i.jsxs("div",{className:"award-item-clean",children:[i.jsx("span",{className:"award-year",children:"2024"}),i.jsxs("div",{children:[i.jsx("h4",{children:"Big Data Marketing Cup (3rd Place)"}),i.jsx("p",{children:"Market research and app prototyping for Taiwan Livestock."})]})]}),i.jsxs("div",{className:"award-item-clean",children:[i.jsx("span",{className:"award-year",children:"2024"}),i.jsxs("div",{children:[i.jsx("h4",{children:"IEEE SSIM Best Paper Award"}),i.jsx("p",{children:"First Author. Focused on Human-AI music collaboration interfaces."})]})]})]})]})}),i.jsxs("section",{className:"section playground-section",id:"playground",children:[i.jsx("div",{className:"noise-overlay"}),i.jsxs("div",{className:"container relative z-10",children:[i.jsxs("h2",{className:"section-head",style:{justifyContent:"center"},children:[i.jsx(dr,{size:32,color:"var(--md-primary)"}),"Playground & Life"]}),i.jsx("p",{className:"contact-sub text-center mb-8",children:"When I'm not designing interfaces, I'm exploring new mediums."}),i.jsxs("div",{className:"playground-grid reveal",ref:o,children:[i.jsxs("div",{className:"play-card",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600",alt:"Vibe Coding"}),i.jsx("div",{className:"play-overlay",children:i.jsx("span",{children:"Vibe Coding & AI Tools"})})]}),i.jsxs("div",{className:"play-card",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=600",alt:"Exhibitions"}),i.jsx("div",{className:"play-overlay",children:i.jsx("span",{children:"Exhibitions & Curation"})})]}),i.jsxs("div",{className:"play-card",children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600",alt:"Photography"}),i.jsx("div",{className:"play-overlay",children:i.jsx("span",{children:"Photography & Visuals"})})]})]})]})]}),i.jsx(Va,{className:"container-sep"}),i.jsx("section",{className:"section",id:"contact",style:{paddingTop:"60px",paddingBottom:"96px"},children:i.jsxs("div",{className:"container contact-wrap",children:[i.jsxs("h2",{className:"section-head",style:{justifyContent:"center"},children:[i.jsx(uN,{size:32,color:"hsl(var(--g4))"}),"Let's Build Together"]}),i.jsx("p",{className:"contact-sub",children:"Open for full-time opportunities, collaborations, and coffee chats."}),i.jsxs("div",{className:"contact-pills",children:[i.jsxs("a",{className:"contact-pill",href:"https://www.linkedin.com/in/rose-chang0708",target:"_blank",rel:"noreferrer noopener",children:[i.jsx("svg",{viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",children:i.jsx("path",{fill:"currentColor",d:"M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7 0h3.84v1.98h.06c.53-1 1.84-2.06 3.79-2.06 4.06 0 4.81 2.67 4.81 6.14V23h-4v-6.43c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.66-2.46 3.39V23h-4V8.5z"})}),i.jsx("span",{children:"Connect on LinkedIn"})]}),i.jsxs("a",{className:"contact-pill contact-pill-lg",href:"mailto:yuu07798@gmail.com",children:[i.jsx("svg",{viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",children:i.jsx("path",{fill:"currentColor",d:"M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"})}),i.jsx("span",{children:"yuu07798@gmail.com"})]})]})]})}),i.jsx("style",{children:`
        /* Global & Typography */
        .section-head { font-size: clamp(28px, 4vw, 40px); font-weight: 700; color: var(--md-primary); margin-bottom: 32px; display: flex; align-items: center; gap: 12px; }
        .section-header-flex { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px; flex-wrap: wrap; gap: 16px; }
        .view-all-link { font-size: 15px; font-weight: 600; color: var(--md-primary); text-decoration: none; padding-bottom: 4px; border-bottom: 2px solid transparent; transition: border-color 0.3s; }
        .view-all-link:hover { border-color: var(--md-primary); }
        .bg-light-gray { background-color: rgba(0,0,0,0.02); }
        .dark .bg-light-gray { background-color: rgba(255,255,255,0.02); }

        /* Hero Split Layout */
        .hero { padding: 80px 0 40px; }
        .hero-inner { display: flex; flex-direction: column; align-items: center; gap: 40px; text-align: center; }
        .hero-text { max-width: 600px; display: flex; flex-direction: column; align-items: center; }
        .hero-buttons { display: flex; gap: 16px; margin-top: 24px; justify-content: center; flex-wrap: wrap; }
        .hero-desc { margin-top: 16px; line-height: 1.6; font-size: 17px; }
        .sub-head { font-size: 18px; font-weight: 600; margin-top: 8px; letter-spacing: 0.5px; }
        
        .venn-container { width: 100%; max-width: 350px; margin: 0 auto; }
        .venn circle { stroke: none; mix-blend-mode: multiply; filter: url(#softGlass); }
        .venn .c1 { fill: hsl(var(--g4)/.35); }
        .venn .c2 { fill: hsl(var(--g3)/.35); }
        .venn .c3 { fill: hsl(var(--g1)/.30); }

        @media (min-width: 960px) {
          .hero { padding: 120px 0 80px; }
          .hero-inner { flex-direction: row; justify-content: space-between; text-align: left; gap: 60px; }
          .hero-text { align-items: flex-start; max-width: 55%; }
          .hero-buttons { justify-content: flex-start; }
          .venn-container { max-width: 400px; margin: 0; }
        }

        /* Interactive Text */
        .interactive-name .char { display: inline-block; transition: transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1), color 0.2s ease; cursor: default; animation: fade-in-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) backwards; }
        .interactive-name:hover .char:hover { transform: translateY(-8px) scale(1.1); color: var(--md-primary); }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        /* 3x3 Grid with Explore Button */
        .projects-3x3-grid { display: grid; gap: 32px; grid-template-columns: repeat(3, 1fr); }
        .grid-project-card { display: flex; flex-direction: column; gap: 16px; text-decoration: none; color: inherit; height: 100%; }
        
        .grid-thumb { position: relative; aspect-ratio: 4/3; overflow: hidden; background: #f5f5f5; border-radius: var(--radius-lg); border: 1px solid rgba(0,0,0,0.05); }
        .grid-thumb img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1); }
        .grid-project-card:hover .grid-thumb img { transform: scale(1.05); }
        
        .grid-tag { position: absolute; top: 16px; left: 16px; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(8px); padding: 6px 12px; border-radius: 999px; font-size: 12px; font-weight: 600; box-shadow: 0 4px 12px rgba(0,0,0,0.08); z-index: 2; color: #333; }
        .dark .grid-tag { background: rgba(0,0,0,0.8); color: #fff; border: 1px solid rgba(255,255,255,0.1); }

        .grid-info { display: flex; flex-direction: column; gap: 8px; flex-grow: 1; }
        .grid-info h3 { font-size: 18px; font-weight: 700; margin: 0; line-height: 1.3; transition: color 0.3s ease; }
        .grid-project-card:hover h3 { color: var(--md-primary); }
        .grid-info p { font-size: 14px; color: var(--color-text-muted); margin: 0; line-height: 1.5; flex-grow: 1; }
        .grid-info strong { color: var(--text); }
        
        .explore-btn { margin-top: 12px; font-size: 14px; font-weight: 600; color: var(--md-primary); display: flex; align-items: center; gap: 6px; }
        .explore-btn .arrow { transition: transform 0.3s ease; }
        .grid-project-card:hover .explore-btn .arrow { transform: translateX(4px); }

        @media (max-width: 960px) { .projects-3x3-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .projects-3x3-grid { grid-template-columns: 1fr; } }

        /* Streamlined Awards Grid (Replaces Accordion) */
        .awards-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .award-item-clean { display: flex; gap: 20px; padding: 24px; background: var(--surface); border: 1px solid rgba(0,0,0,0.05); border-radius: 16px; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .dark .award-item-clean { border-color: rgba(255,255,255,0.05); }
        .award-item-clean:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(0,0,0,0.06); }
        .award-year { font-family: monospace; font-size: 18px; font-weight: 700; color: hsl(var(--g3)); opacity: 0.8; padding-top: 2px; }
        .award-item-clean h4 { font-size: 16px; font-weight: 700; margin-bottom: 6px; color: var(--text); }
        .award-item-clean p { font-size: 14px; color: var(--color-text-muted); line-height: 1.5; }
        
        @media (max-width: 768px) { .awards-grid { grid-template-columns: 1fr; } }

        /* Playground / Noise Section */
        .playground-section { position: relative; padding: 80px 0; background: linear-gradient(180deg, transparent, rgba(0,0,0,0.03)); overflow: hidden; }
        .dark .playground-section { background: linear-gradient(180deg, transparent, rgba(255,255,255,0.03)); }
        .noise-overlay { position: absolute; inset: 0; opacity: 0.4; pointer-events: none; z-index: 0; mix-blend-mode: overlay; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"); }
        
        .playground-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 40px; }
        .play-card { position: relative; aspect-ratio: 1; border-radius: 24px; overflow: hidden; }
        .play-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; filter: grayscale(20%); }
        .play-card:hover img { transform: scale(1.08); filter: grayscale(0%); }
        .play-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%); display: flex; align-items: flex-end; padding: 24px; opacity: 0; transition: opacity 0.3s ease; }
        .play-card:hover .play-overlay { opacity: 1; }
        .play-overlay span { color: white; font-weight: 600; font-size: 16px; transform: translateY(10px); transition: transform 0.3s ease; }
        .play-card:hover .play-overlay span { transform: translateY(0); }
        
        @media (max-width: 768px) { .playground-grid { grid-template-columns: 1fr; } .play-card { aspect-ratio: 16/9; } }

        /* Contact Buttons */
        .contact-wrap { text-align: center; display: flex; flex-direction: column; align-items: center; }
        .contact-sub { font-size: 16px; color: var(--color-text-muted); margin-bottom: 32px; }
        .contact-pills { display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center; gap: 16px; }
        .contact-pill { position: relative; display: inline-flex; align-items: center; justify-content: center; gap: 12px; padding: 12px 28px; background: var(--surface); border: 1px solid rgba(0,0,0,0.1); border-radius: 999px; color: var(--text); text-decoration: none; font-weight: 500; transition: all 0.3s ease; }
        .dark .contact-pill { border-color: rgba(255,255,255,0.1); }
        .contact-pill:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.08); border-color: var(--md-primary); color: var(--md-primary); }
        
        .btn-pill { position: relative; display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 28px; border-radius: 999px; text-decoration: none; font-weight: 500; transition: all 0.3s ease; }
        .btn--primary { background: var(--md-primary); color: white; }
        .btn--primary:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(69, 112, 255, 0.3); }
      `})]})}function _S({iconType:t,color:r}){const o={lightbulb:On,users:Xr,shield:NN,target:oo,search:jN,puzzle:vN,bot:Gk,messageCircle:pN}[t]||On;return i.jsx("div",{className:"relative shrink-0 size-[32px]",children:i.jsx(o,{size:32,color:r})})}function OS(){const t=j.useRef(null),r=j.useRef(null),a=j.useRef(null),o=j.useRef(null);j.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const h=document.querySelectorAll(".reveal"),f=new IntersectionObserver(m=>{m.forEach(g=>{g.isIntersecting&&g.target.classList.add("in")})},{threshold:.1});return h.forEach(m=>f.observe(m)),()=>f.disconnect()},[]);const c=[{iconType:"search",iconColor:"#5B8CFF",gradientFrom:"rgba(91, 140, 255, 0.2)",gradientTo:"rgba(0, 163, 163, 0.2)",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",title:"Evidence-Based UX Research",description:i.jsxs(i.Fragment,{children:[i.jsx("p",{style:{marginBottom:"8px"},children:i.jsx("strong",{children:"Blending academic rigor with design empathy."})}),i.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px",lineHeight:"1.6"},children:[i.jsx("li",{style:{marginBottom:"4px"},children:"With experience in mixed-method research, which ranging from SPSS quantitative analysis to in-depth qualitative interviews."}),i.jsxs("li",{children:["My research capabilities have been recognized with an ",i.jsx("strong",{children:"IEEE Best Paper Award"})," and conference acceptances."]})]})]})},{iconType:"puzzle",iconColor:"#A871F4",gradientFrom:"rgba(168, 113, 244, 0.2)",gradientTo:"rgba(249, 118, 31, 0.2)",image:"https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",title:"Strategic Product Thinking",description:i.jsxs(i.Fragment,{children:[i.jsx("p",{style:{marginBottom:"8px"},children:i.jsx("strong",{children:"Bridging the gap between user needs and business goals."})}),i.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px",lineHeight:"1.6"},children:[i.jsxs("li",{style:{marginBottom:"4px"},children:["Transitioning from ",i.jsx("strong",{children:"Digital Marketing"})," to Interaction Design."]}),i.jsxs("li",{children:["I consider market viability and brand strategy. This holistic approach helped my team secure the ",i.jsx("strong",{children:"Gold Prize at the InnoConnect+ competition"}),", turning user insights into a commercially viable service model."]})]})]})},{iconType:"bot",iconColor:"#00A3A3",gradientFrom:"rgba(0, 163, 163, 0.2)",gradientTo:"rgba(91, 140, 255, 0.2)",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",title:"AI & Tech Integration",description:i.jsxs(i.Fragment,{children:[i.jsx("p",{style:{marginBottom:"8px"},children:i.jsx("strong",{children:"Designing for the future with emerging technologies."})}),i.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px",lineHeight:"1.6"},children:[i.jsxs("li",{style:{marginBottom:"4px"},children:["Beyond standard prototyping, I experiment with ",i.jsx("strong",{children:"Generative AI workflows"}),", Python, and Arduino to explore new possibilities."]}),i.jsx("li",{children:"Whether it's researching AI voice synthesis or optimizing workflows with AI tools, I am always ready to adapt to the latest tech trends."})]})]})},{iconType:"messageCircle",iconColor:"#F9761F",gradientFrom:"rgba(249, 118, 31, 0.2)",gradientTo:"rgba(168, 113, 244, 0.2)",image:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",title:"Cross-Functional Collaboration",description:i.jsxs(i.Fragment,{children:[i.jsx("p",{style:{marginBottom:"8px"},children:i.jsx("strong",{children:"Translating complex ideas into team success."})}),i.jsxs("ul",{style:{paddingLeft:"20px",marginTop:"8px",lineHeight:"1.6"},children:[i.jsx("li",{style:{marginBottom:"4px"},children:"From managing influencer marketing campaigns to collaborating with engineers on hardware-software integration."}),i.jsxs("li",{children:["My experience as a ",i.jsx("strong",{children:"Marketing Intern"})," and a research assistant has honed my communication skills, enabling me to align stakeholders and drive projects from concept to launch."]})]})]})}];return i.jsx(Wn,{children:i.jsxs("div",{id:"about-page",children:[i.jsx("section",{className:"section",id:"about-hero",style:{paddingTop:"80px"},children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"about-hero-grid reveal",ref:t,children:[i.jsx("div",{className:"about-hero-photo",children:i.jsx("div",{className:"gframe",style:{borderRadius:"var(--radius-lg)"},children:i.jsx("img",{src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop",alt:"Rose Chang portrait",loading:"eager",decoding:"async",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"var(--radius-lg)",display:"block"}})})}),i.jsxs("div",{className:"about-hero-text",children:[i.jsx("h1",{className:"name",style:{textAlign:"left",fontSize:"48px",lineHeight:"1.2",marginBottom:"24px"},children:"Hey, I'm Rose. Nice to meet you!"}),i.jsxs("div",{className:"body",style:{fontSize:"16px",lineHeight:"1.7",color:"var(--md-on-background)"},children:[i.jsx("p",{style:{marginBottom:"16px"},children:"I'm a detail-oriented and insightful UI/UX designer passionate about crafting intuitive and user-centered digital experiences. My experience spans both UI design and UX research, and I had the honor of contributing to a team project that won the Gold Award at the 2024 InnoConnect+ competition for Hi-Life."}),i.jsx("p",{style:{marginBottom:"16px"},children:"Previously, I worked as a marketing intern at KDAN, where I created visual content for social media and produced analytical reports on influencer and advertising performance. I'm especially interested in emerging technologies such as AI and interactive design, with a current research focus on AI-generated music and voice synthesis."}),i.jsx("p",{style:{marginBottom:"16px"},children:"Beyond pixels and prototypes, I'm driven by collaboration. I love working with cross-functional teams—engineers, product managers, researchers—to transform ideas into user-centered solutions. I'm always eager to grow through collaboration, innovation, and meaningful storytelling at the intersection of design and technology."}),i.jsx("p",{children:"When I'm not designing, you'll find me exploring new music, experimenting with creative coding, or diving into the latest design trends. I'm always learning, always curious, and always ready for the next creative challenge."})]})]})]})})}),i.jsx("section",{className:"section",id:"about-strengths",style:{paddingTop:"80px",paddingBottom:"80px"},children:i.jsxs("div",{className:"container",style:{maxWidth:"1200px"},children:[i.jsxs("h2",{className:"section-head",style:{textAlign:"left",display:"flex",alignItems:"center",gap:"12px",marginBottom:"48px"},children:[i.jsx(On,{size:32,color:"hsl(var(--g1))"}),"My Strengths"]}),i.jsx("div",{className:"strengths-grid",ref:r,children:c.map((u,h)=>i.jsx("div",{className:"strength-card reveal",children:i.jsxs("div",{className:"strength-card-inner",children:[i.jsxs("div",{className:"strength-image-wrapper",children:[i.jsx("img",{src:u.image,alt:u.title,loading:"lazy",className:"strength-image"}),i.jsx("div",{className:"strength-icon-container",style:{backgroundImage:`linear-gradient(135deg, ${u.gradientFrom} 0%, ${u.gradientTo} 100%)`},children:i.jsx(_S,{iconType:u.iconType,color:u.iconColor})})]}),i.jsxs("div",{className:"strength-content",children:[i.jsx("h3",{className:"strength-title",children:u.title}),i.jsx("div",{className:"strength-description",children:u.description})]})]})},h))})]})}),i.jsx("section",{className:"section",id:"about-values",style:{paddingTop:"80px",paddingBottom:"80px"},children:i.jsxs("div",{className:"container",style:{maxWidth:"1200px"},children:[i.jsxs("h2",{className:"section-head",style:{textAlign:"left",display:"flex",alignItems:"center",gap:"12px",marginBottom:"48px"},children:[i.jsx(Qa,{size:32,color:"hsl(var(--g3))"}),"My Values"]}),i.jsxs("div",{className:"about-values-grid",ref:a,children:[i.jsx("div",{className:"gframe reveal",style:{height:"100%"},children:i.jsxs("div",{className:"card glass",style:{height:"100%",padding:"32px",display:"flex",flexDirection:"column",gap:"16px"},children:[i.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"var(--radius-md)",background:"linear-gradient(135deg, hsl(var(--g1)/.15), hsl(var(--g2)/.15))",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"8px"},children:i.jsx(oo,{size:24,color:"hsl(var(--g1))","aria-hidden":"true"})}),i.jsx("h3",{style:{fontSize:"20px",fontWeight:"600",lineHeight:"1.4",color:"var(--md-on-surface)"},children:"Clarity in Chaos"}),i.jsxs("p",{className:"body muted",style:{fontSize:"15px",lineHeight:"1.6"},children:[i.jsx("strong",{children:"I turn complex information into actionable plans."}),` I am a "documentation enthusiast" who believes that success lies in the details. Whether it's organizing research data or tracking project milestones, I meticulously document processes to ensure no insight is lost. This habit helps reduce ambiguity for my team, keeping stakeholders aligned and moving forward with a clear, shared vision.`]})]})}),i.jsx("div",{className:"gframe reveal",style:{height:"100%"},children:i.jsxs("div",{className:"card glass",style:{height:"100%",padding:"32px",display:"flex",flexDirection:"column",gap:"16px"},children:[i.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"var(--radius-md)",background:"linear-gradient(135deg, hsl(var(--g3)/.15), hsl(var(--g4)/.15))",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"8px"},children:i.jsx(wN,{size:24,color:"hsl(var(--g3))","aria-hidden":"true"})}),i.jsx("h3",{style:{fontSize:"20px",fontWeight:"600",lineHeight:"1.4",color:"var(--md-on-surface)"},children:"Curiosity as a Driver"}),i.jsxs("p",{className:"body muted",style:{fontSize:"15px",lineHeight:"1.6"},children:[i.jsx("strong",{children:"I embrace the new to optimize the now."})," With an open mind toward emerging technologies, I see change as an opportunity rather than a hurdle. From mastering Generative AI tools to coding in Python, I actively learn and share new methodologies. I strive to be the bridge that connects cutting-edge tech with practical workflows, empowering my team to work smarter, not just harder."]})]})}),i.jsx("div",{className:"gframe reveal",style:{height:"100%"},children:i.jsxs("div",{className:"card glass",style:{height:"100%",padding:"32px",display:"flex",flexDirection:"column",gap:"16px"},children:[i.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"var(--radius-md)",background:"linear-gradient(135deg, hsl(var(--g2)/.15), hsl(var(--g3)/.15))",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"8px"},children:i.jsx(Qa,{size:24,color:"hsl(var(--g2))","aria-hidden":"true"})}),i.jsx("h3",{style:{fontSize:"20px",fontWeight:"600",lineHeight:"1.4",color:"var(--md-on-surface)"},children:"Resilience & Empathy"}),i.jsxs("p",{className:"body muted",style:{fontSize:"15px",lineHeight:"1.6"},children:[i.jsx("strong",{children:"I foster a positive and collaborative environment."})," As an empathetic listener and an optimistic team player (ISFJ), I believe psychological safety creates the best work. I bring resilience to challenges and warmth to collaboration, ensuring that user needs are heard and team morale remains high. I don't just solve problems; I care about the people I solve them with."]})]})})]})]})}),i.jsx("section",{className:"section",id:"about-more",style:{paddingTop:"80px",paddingBottom:"120px"},children:i.jsxs("div",{className:"container",style:{maxWidth:"1200px"},children:[i.jsxs("h2",{className:"section-head",style:{textAlign:"left",display:"flex",alignItems:"center",gap:"12px",marginBottom:"32px"},children:[i.jsx(Pc,{size:32,color:"hsl(var(--g4))"}),"More about me — Composition"]}),i.jsx("div",{className:"gframe reveal",ref:o,children:i.jsx("div",{className:"card glass",style:{padding:"48px"},children:i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[i.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"flex-start"},children:[i.jsx("div",{style:{width:"56px",height:"56px",borderRadius:"var(--radius-md)",background:"linear-gradient(135deg, hsl(var(--g4)/.15), hsl(var(--g1)/.15))",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(Pc,{size:28,color:"hsl(var(--g4))","aria-hidden":"true"})}),i.jsxs("div",{className:"body",style:{fontSize:"16px",lineHeight:"1.7",flex:1},children:[i.jsx("p",{style:{marginBottom:"16px"},children:"Music composition has been a creative outlet for me since childhood. I approach it much like I approach design—starting with a mood or emotion I want to convey, then layering elements to build something cohesive and meaningful."}),i.jsx("p",{children:"Whether I'm arranging harmonies or designing interfaces, the process is the same: iterate, refine, and listen closely to the feedback. Below is a placeholder for one of my recent compositions."})]})]}),i.jsx("div",{className:"gframe",style:{borderRadius:"var(--radius-md)",background:"linear-gradient(135deg, hsl(var(--g1)/.08), hsl(var(--g3)/.08))",padding:"64px 32px",textAlign:"center"},children:i.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"16px",color:"var(--color-text-muted)"},children:[i.jsx(Pc,{size:48,"aria-hidden":"true",style:{opacity:.4}}),i.jsx("p",{className:"body muted",style:{fontSize:"14px",maxWidth:"400px"},children:"Audio player or embedded media content will be displayed here"})]})})]})})})]})}),i.jsx("style",{children:`
          /* Section Heading (matches Resume.tsx style) */
          .section-head {
            font-size: clamp(28px, 4vw, 48px);
            font-weight: 700;
            color: var(--md-primary);
            margin-bottom: 32px;
          }

          /* Hero Section - Two Column Layout */
          .about-hero-grid {
            display: grid;
            grid-template-columns: 1fr 1.5fr;
            gap: 48px;
            align-items: start;
          }

          .about-hero-photo {
            position: relative;
            aspect-ratio: 3 / 4;
            overflow: hidden;
          }

          .about-hero-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          /* Strengths Grid - 2x2 */
          .strengths-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
            max-width: 1200px;
            margin: 0 auto;
          }

          /* Strength Card */
          .strength-card {
            position: relative;
            width: 100%;
            transition: transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1);
          }

          .strength-card:hover {
            transform: translateY(-4px);
          }

          .strength-card-inner {
            position: relative;
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
            border: 1px solid rgba(0, 0, 0, 0.06);
            border-radius: var(--radius-lg);
            overflow: hidden;
            box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
            transition: box-shadow 220ms cubic-bezier(0.2, 0.8, 0.2, 1);
          }

          .strength-card:hover .strength-card-inner {
            box-shadow: 0 8px 28px rgba(0, 0, 0, 0.12);
          }

          /* Image Wrapper with Icon */
          .strength-image-wrapper {
            position: relative;
            width: 100%;
            height: 190px;
            overflow: hidden;
          }

          .strength-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          /* Icon Container - Positioned at top right */
          .strength-icon-container {
            position: absolute;
            top: 20px;
            right: 20px;
            width: 56px;
            height: 56px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

          /* Content Area */
          .strength-content {
            padding: 24px 29px;
          }

          .strength-title {
            font-size: 20px;
            font-weight: 600;
            line-height: 1.3;
            color: var(--md-on-surface);
            margin: 0 0 12px 0;
          }

          .strength-description {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin: 0;
          }

          /* Values Grid - 3 Columns */
          .about-values-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
          }

          .card.glass {
            background: rgba(255, 255, 255, 0.75);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(0, 0, 0, 0.06);
            border-radius: var(--radius-lg);
          }

          /* Tablet Responsive */
          @media (max-width: 959px) {
            .about-hero-grid {
              grid-template-columns: 1fr;
              gap: 32px;
            }

            .about-hero-photo {
              max-width: 400px;
              margin: 0 auto;
            }

            .about-hero-text h1 {
              text-align: center;
              font-size: 36px !important;
            }

            .strengths-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }

            .about-values-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          /* Mobile Responsive */
          @media (max-width: 640px) {
            .about-hero-text h1 {
              font-size: 32px !important;
            }

            .strengths-grid {
              gap: 20px;
            }

            .strength-content {
              padding: 20px 24px;
            }

            .strength-title {
              font-size: 18px;
            }

            .strength-description {
              font-size: 13px;
            }

            .about-values-grid {
              grid-template-columns: 1fr;
            }

            .card.glass {
              padding: 24px !important;
            }
          }

          /* Reduced Motion */
          @media (prefers-reduced-motion: reduce) {
            .strength-card,
            .strength-card-inner {
              transition: none !important;
            }

            .strength-card:hover {
              transform: none !important;
            }
          }
        `})]})})}const Sm=[{slug:"innoconnect",image:"https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1080",period:"2024",type:"Service Design & UX",title:"Innoconnect | Gift Service Optimization",description:"🏆 Gold Award Winner (1/186). Optimizing the O2O gifting experience for Hi-Life via gamification and social features.",tags:["Gold Award","Service Design","Gamification"],category:"award"},{slug:"oblivilight",image:"https://images.unsplash.com/photo-1517457210348-703079e57d4b?auto=format&fit=crop&q=80&w=1080",period:"2025 July",type:"Interaction Design",title:"OpenHCI'25 | Oblivilight",description:'🏆 Best Demo Award Winner. A tangible interaction device built in a 6-day workshop exploring how AI "forgets".',tags:["Best Demo Award","Tangible UI","Arduino"],category:"award"},{slug:"times-awards",image:"https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1080",period:"2024",type:"Advertising & Creative",title:"2025 34th Times Young Creative Awards",description:'🥉 National 3rd Place Winner. A multi-channel campaign (Video, Web, Audio) using "Gashapon" as a metaphor for job hunting.',tags:["Advertising","Copywriting","Campaign"],category:"award"},{slug:"kdan-internship",image:"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1080",period:"2024",type:"Marketing & Data Analytics",title:"KDAN Mobile | Marketing Intern",description:"Optimized social workflow increasing IG growth by 101%. Led AI training.",tags:["Marketing","Internship"],category:"research-exp"},{slug:"research-papers",image:"https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=1080",period:"2024 - 2025",type:"HCI Research",title:"HCI Research Publications",description:"🏆 SSIM 2024 Best Paper & IEEE GCCE 2025. Research on AI music & voice emotion.",tags:["HCI Research","IEEE"],category:"research-exp"},{slug:"mu-multisensory",image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1080",period:"2024",type:"UX Design & Research",title:"UX Design Awards｜Mú",description:"Nominated for UX Design Awards. A multisensory guide to Taiwan’s endangered woods exploring emotional design.",tags:["Nominated","Multisensory"],category:"design"},{slug:"bilingual-center",image:"https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=1080",period:"2023 - 2024",type:"Project Management",title:"Taipei Tech｜Part-Time Project Assistant @ Center for Bilingual Learning",description:"Assisted in promoting bilingual education projects and managing administrative tasks at the Center for Bilingual Learning.",tags:["Project Assistant","Management"],category:"research-exp"},{slug:"big-data-cup",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080",period:"2024",type:"UI/UX Design & Research",title:"Big Data Marketing Cup",description:'🥉 3rd Place Winner. Designed the UI/UX for "Taiwan Livestock" fitness app.',tags:["UI Design","3rd Place"],category:"award"},{slug:"academic-collaborations",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1080",period:"2022 - 2024",type:"Academic Collaborations",title:"Taipei Tech Academic Collaborations",description:'Includes the "Good Luck Peanut" branding project and the "Taipei Tech x Penn State GenAI Workshop".',tags:["GenAI","Branding"],category:"design"}];function BS(){const[t,r]=j.useState("all"),a=t==="all"?Sm:Sm.filter(o=>o.category===t);return i.jsx(Wn,{children:i.jsxs("div",{id:"projects-page",children:[i.jsx("section",{className:"section",style:{paddingTop:"80px",paddingBottom:"40px"},children:i.jsxs("div",{className:"container",style:{maxWidth:"1400px"},children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:"48px"},children:[i.jsx("h1",{className:"name",style:{fontSize:"48px",lineHeight:"1.2",marginBottom:"16px"},children:"Projects"}),i.jsx("p",{className:"body muted",style:{fontSize:"18px",maxWidth:"600px",margin:"0 auto"},children:"A collection of design work spanning awards, research, and creative projects."})]}),i.jsx("div",{className:"tabs-container",children:i.jsxs("div",{className:"tabs",role:"tablist","aria-label":"Project Categories",children:[i.jsx("button",{role:"tab","aria-selected":t==="all",onClick:()=>r("all"),className:`tab ${t==="all"?"active":""}`,children:"All"}),i.jsx("button",{role:"tab","aria-selected":t==="award",onClick:()=>r("award"),className:`tab ${t==="award"?"active":""}`,children:"Awards"}),i.jsx("button",{role:"tab","aria-selected":t==="research-exp",onClick:()=>r("research-exp"),className:`tab ${t==="research-exp"?"active":""}`,children:"Research & Exp."}),i.jsx("button",{role:"tab","aria-selected":t==="design",onClick:()=>r("design"),className:`tab ${t==="design"?"active":""}`,children:"Design Projects"})]})}),i.jsx("div",{className:"projects-grid",children:a.map(o=>i.jsx("div",{className:"project-card-wrapper",children:i.jsxs("div",{className:"project-card",children:[i.jsx("div",{className:"project-image",children:i.jsx("img",{src:o.image,alt:o.title,loading:"lazy"})}),i.jsxs("div",{className:"project-info",children:[i.jsxs("p",{className:"project-meta",children:[o.period," · ",o.type]}),i.jsx("h3",{className:"project-title",children:o.title}),i.jsx("p",{className:"project-description",children:o.description}),i.jsx("div",{className:"project-tags",children:o.tags.map((c,u)=>i.jsx("span",{className:"project-tag",children:c},u))}),i.jsx(Ze,{to:`/projects/${o.slug}`,className:"project-explore-btn",children:"Explore →"})]})]})},o.slug))})]})}),i.jsx("style",{children:`
          .tabs-container { display: flex; justify-content: center; margin-bottom: 48px; }
          .tabs { display: inline-flex; gap: 8px; padding: 6px; background: rgba(255, 255, 255, 0.6); border: 1px solid rgba(0, 0, 0, 0.06); border-radius: var(--radius-lg); box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04); }
          .tab { position: relative; padding: 10px 24px; background: transparent; border: none; border-radius: var(--radius-md); font-size: 14px; font-weight: 600; color: var(--color-text-muted); cursor: pointer; transition: all 220ms cubic-bezier(0.2, 0.8, 0.2, 1); white-space: nowrap; }
          .tab:hover { color: var(--md-on-surface); background: rgba(0, 0, 0, 0.04); }
          .tab.active { color: var(--md-on-surface); background: linear-gradient(135deg, hsl(var(--g1)/.12), hsl(var(--g2)/.12)); box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08); }
          .tab.active::after { content: ''; position: absolute; bottom: -2px; left: 50%; transform: translateX(-50%); width: 40%; height: 2px; background: linear-gradient(135deg, hsl(var(--g1)), hsl(var(--g2))); border-radius: 2px; }
          .tab:focus-visible { outline: 2px solid var(--focus); outline-offset: 2px; }

          .projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; width: 100%; }
          .project-card-wrapper { position: relative; width: 100%; }
          .project-card { position: relative; width: 100%; height: 100%; background: rgba(255, 255, 255, 0.95); border: 1px solid rgba(0, 0, 0, 0.06); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column; transition: transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 220ms cubic-bezier(0.2, 0.8, 0.2, 1); }
          .project-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12); }
          .project-image { position: relative; width: 100%; aspect-ratio: 16 / 10; overflow: hidden; background: #f5f5f5; }
          .project-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1); }
          .project-card:hover .project-image img { transform: scale(1.05); }
          
          .project-info { padding: 24px; display: flex; flex-direction: column; gap: 12px; flex: 1; }
          .project-meta { font-size: 14px !important; line-height: 1.4 !important; color: var(--color-text-muted); margin: 0; }
          .project-title { font-size: 20px; font-weight: 600; line-height: 1.3; color: var(--md-on-surface); margin: 0; }
          .project-description { font-size: 14px !important; line-height: 1.6 !important; color: var(--color-text-muted); margin: 0; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
          .project-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 4px; }
          .project-tag { padding: 4px 10px; font-size: 12px !important; line-height: 1.4 !important; color: hsl(var(--g3)); background: linear-gradient(135deg, hsl(var(--g3)/.08), hsl(var(--g4)/.08)); border-radius: var(--radius-sm); white-space: nowrap; }
          
          .project-explore-btn { position: relative; display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 10px 24px; margin-top: auto; background: rgba(255, 255, 255, 0.8); border: 1px solid rgba(0,0,0,0.08); border-radius: 999px; color: var(--text); text-decoration: none; font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1); overflow: hidden; transform: translateZ(0); align-self: flex-start; }
          .project-explore-btn::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, hsl(var(--g1)), hsl(var(--g2)), hsl(var(--g3))); opacity: 0; transition: opacity 0.3s ease; z-index: 0; }
          .project-explore-btn:hover { transform: scale(1.08) translateY(-2px); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.15); border-color: transparent; color: var(--text); }
          .project-explore-btn:hover::before { opacity: 0.12; }
          .project-explore-btn:active { transform: scale(0.98); }

          @media (max-width: 959px) and (min-width: 640px) {
            .projects-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
            .tabs { flex-wrap: wrap; gap: 6px; }
            .tab { padding: 8px 16px; font-size: 13px; }
          }
          @media (max-width: 639px) {
            .projects-grid { grid-template-columns: 1fr; gap: 16px; }
            .project-info { padding: 20px; }
            .project-title { font-size: 18px; }
            .project-description { font-size: 13px !important; }
            .tabs { flex-wrap: wrap; gap: 6px; padding: 4px; }
            .tab { padding: 8px 14px; font-size: 12px; }
            .tabs-container { margin-bottom: 32px; }
          }
          @media (prefers-reduced-motion: reduce) {
            .project-card, .project-image img, .project-explore-btn, .project-explore-btn::before, .tab { transition: none !important; transform: none !important; }
            .project-card:hover, .project-card:hover .project-image img, .project-explore-btn:hover { transform: none !important; }
          }
        `})]})})}function Fa({className:t,...r}){return i.jsx("div",{"data-slot":"card",className:Hn("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",t),...r})}function _a({className:t,...r}){return i.jsx("div",{"data-slot":"card-header",className:Hn("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",t),...r})}function Oa({className:t,...r}){return i.jsx("h4",{"data-slot":"card-title",className:Hn("leading-none",t),...r})}function id({className:t,...r}){return i.jsx("p",{"data-slot":"card-description",className:Hn("text-muted-foreground",t),...r})}function tv({className:t,...r}){return i.jsx("div",{"data-slot":"card-content",className:Hn("px-6 [&:last-child]:pb-6",t),...r})}const Cm=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,Pm=Ox,nv=(t,r)=>a=>{var o;if(r?.variants==null)return Pm(t,a?.class,a?.className);const{variants:c,defaultVariants:u}=r,h=Object.keys(c).map(g=>{const x=a?.[g],y=u?.[g];if(x===null)return null;const w=Cm(x)||Cm(y);return c[g][w]}),f=a&&Object.entries(a).reduce((g,x)=>{let[y,w]=x;return w===void 0||(g[y]=w),g},{}),m=r==null||(o=r.compoundVariants)===null||o===void 0?void 0:o.reduce((g,x)=>{let{class:y,className:w,...P}=x;return Object.entries(P).every(T=>{let[E,N]=T;return Array.isArray(N)?N.includes({...u,...f}[E]):{...u,...f}[E]===N})?[...g,y,w]:g},[]);return Pm(t,h,m,a?.class,a?.className)},WS=nv("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function rv({className:t,variant:r,asChild:a=!1,...o}){const c=a?Vx:"span";return i.jsx(c,{"data-slot":"badge",className:Hn(WS({variant:r}),t),...o})}const US=nv("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function Rc({className:t,variant:r,size:a,asChild:o=!1,...c}){const u=o?Vx:"button";return i.jsx(u,{"data-slot":"button",className:Hn(US({variant:r,size:a,className:t})),...c})}const Ur={lastUpdated:"2025-11-19",contact:{linkedin:"https://www.linkedin.com/in/rose-chang0708"},experience:[{id:"exp-1",year:"2025 Sep",title:"Part-Time Project Assistant",company:"NTUT; Center for Bilingual Learning",period:"Sep 2025 – Present",description:["Assisted the Center for Bilingual Learning at NTUT with social media management across Facebook, LINE, and the center’s website.","Supported the execution of workshops, including venue setup, assisting international instructors, and coordinating students.","Handled administrative tasks related to the Center for Bilingual Learning."],badges:["Social Media Management","Event Coordination","Document Handling and File Management","Administrative Support","Canva"]},{id:"exp-2",year:"2024 Sep",title:"Research Assistant",company:"NTUT",period:"Sep 2024 – Jul 2025",description:["Assisted Prof. Chien-Wen Cheng in executing project-related tasks.","Prepared funding applications for the Teaching Practice Research Program.","Contributed to writing the 2025 Teaching Practice Research Proposal.","Developed the project findings into a conference paper and submitted it to SSIM 2025, titled “Artificial Intelligence-Assisted Music and Interactive Design for University Students: Exploring Needs and Skill-Based Variations in Music Creation Experience.”","Provided administrative support for project documentation and coordination."],badges:["Research Report and Academic Paper Writing","Research Proposal Development and Project Execution","Statistical Software Proficiency","Qualitative Interview Techniques"]},{id:"exp-3",year:"2024 Mar",title:"Marketing Intern",company:"KDAN｜ADNEX",period:"Mar 2024 – Nov 2024",description:["Communicated with over 110 Key Option Leaders (KOL).","Created over 15 promotional posts for Instagram and Facebook accounts.","Increased official account followers by over 750.","Analyzed monthly influencer data and submitted 15 reports for client and manager review.","Trained 10 marketing staff on AI advertising picture generation.","Designed over 5 website graphics of company product."],badges:["Social Media Management","Ad Campaign Planning & Copywriting","Creative Advertising Ideation","Cross-Industry Partnership Planning","Brand Awareness Promotion","Market Research Planning & Execution"]},{id:"exp-4",year:"2022 Jul",title:"Corporate Training Project Intern",company:"Meng Ya Management Consulting Co., Ltd.",period:"Jul 2022 – Sep 2022",description:["Served as the PM (project partner) for three companies, responsible for coordinating client requirements and acting as a bridge between the company and instructors; supported the preparation of over 17 corporate training sessions.","Worked as a teaching assistant for corporate training programs, identifying clients’ potential needs during sessions and supporting client development and relationship maintenance.","Assisted the sales team with pre-training preparations, including coordination between instructors and corporate clients, as well as handling related administrative tasks.","Executed on-site corporate training services and supported post-training wrap-up and project closure."],badges:["Advertising Sales Skills","Customer Relationship Management (CRM)","Client Data Updating and Maintenance","Document Processing and Layout Design","Data Entry and Document Filing","Administrative Support"]},{id:"exp-5",year:"2022 Jan",title:"Part-time worker",company:"Won-Lai-Won Enterprise Group",period:"Jan 2022 – Feb 2022",description:["Responsible for product photography, background removal, photo editing, and uploading product listings.","Assisted in writing product descriptions and promotional copy.","Assisted with document filing and record management for the company."],badges:["Product Photography","Product Background Removal","Advertising Campaign Planning and Copywriting","Document Processing and Layout Design","Data Entry and Document Filing","Photoshop","Illustrator"]}],skills:[{category:"Tools",items:["Figma","Maze","Photoshop","Illustrator","Premiere","DaVinci Resolve","Google Analytics","Canva","SketchUp"]},{category:"Programming Languages",items:["HTML","CSS","JavaScript"]},{category:"Methods",items:["Prototyping","User Research","Usability Testing","Design Thinking","Wireframing","Design systems"]}],education:[{degree:"Master of Interaction Design",institution:"National Taipei University of Technology",year:"2024 - Present",description:'Specialized in Human-Computer Interaction and Interactive Design. Thesis: "Bedtime Procrastination"'},{degree:"Bechelar of Culture Creativity and Digital Marketing",institution:"National United University",year:"2020 - 2024",description:"Focus on package design, digital design, typography, and user experience fundamentals."}],certifications:[{name:"Information Technology Specialist - Python",issuer:"Certiport - A Pearson VUE Business",year:"2023 Jan"}]};function HS({experience:t}){const r=j.useRef(null);return i.jsxs(ni.li,{ref:r,className:"timeline-item",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.5},children:[i.jsx("div",{className:"timeline-left",children:i.jsx("span",{className:"timeline-year-text",children:t.year})}),i.jsxs("div",{className:"timeline-divider",children:[i.jsx("div",{className:"timeline-line"}),i.jsx("div",{className:"timeline-dot"})]}),i.jsx("div",{className:"timeline-content",children:i.jsxs(Fa,{className:"timeline-card",children:[i.jsxs(_a,{className:"resume-card-header",children:[i.jsx("div",{className:"exp-icon-box",children:i.jsx(Ix,{size:20})}),i.jsxs("div",{children:[i.jsx(Oa,{className:"exp-title",children:t.title}),i.jsxs(id,{className:"exp-meta",children:[t.company," · ",t.period]})]})]}),i.jsxs(tv,{className:"resume-card-content",children:[i.jsx("ul",{className:"exp-desc-list",children:t.description.map((a,o)=>i.jsx("li",{children:a},o))}),i.jsx("div",{className:"exp-badges",children:t.badges.map(a=>i.jsx(rv,{variant:"secondary",className:"exp-badge",children:a},a))})]})]})})]})}function $S(){return i.jsxs(Wn,{children:[i.jsxs("div",{id:"resume-page",children:[i.jsx("section",{className:"section header-section",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"resume-header-content",children:[i.jsxs("div",{children:[i.jsx("h1",{className:"name",children:"Resume"}),i.jsxs("p",{className:"body muted",children:["Last updated: ",Ur.lastUpdated]})]}),i.jsxs("div",{className:"resume-actions",children:[i.jsx(Rc,{className:"btn-pill interactive-button-base btn--primary",asChild:!0,children:i.jsxs("a",{href:"/Resume_250808.pdf",download:!0,children:[i.jsx(Cc,{size:18})," Download PDF"]})}),i.jsx(Rc,{variant:"outline",className:"btn-pill interactive-button-base",asChild:!0,children:i.jsxs("a",{href:Ur.contact.linkedin,target:"_blank",rel:"noopener noreferrer",children:[i.jsx(cN,{size:18})," LinkedIn"]})})]})]})})}),i.jsx(Va,{className:"container-sep"}),i.jsx("section",{className:"section",style:{paddingTop:"var(--space-8)",paddingBottom:"var(--space-10)"},children:i.jsx("div",{className:"container",style:{maxWidth:"1400px"},children:i.jsxs("div",{className:"resume-pdf-container",children:[i.jsx("object",{data:"/Resume_250808.pdf#view=FitH",type:"application/pdf",className:"resume-pdf-object","aria-label":"Resume PDF viewer",children:i.jsx("div",{className:"resume-pdf-fallback",children:i.jsxs("div",{style:{padding:"var(--space-10)",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--space-6)"},children:[i.jsx("div",{style:{width:"80px",height:"80px",borderRadius:"var(--radius-lg)",background:"linear-gradient(135deg, hsl(var(--g1)/.12), hsl(var(--g3)/.12))",display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(Cc,{size:40,style:{color:"hsl(var(--g1))"},"aria-hidden":"true"})}),i.jsxs("div",{children:[i.jsx("h3",{style:{marginBottom:"var(--space-2)",color:"var(--md-on-surface)"},children:"PDF Viewer Not Available"}),i.jsx("p",{className:"body muted",style:{maxWidth:"400px",margin:"0 auto var(--space-4)"},children:"Your browser doesn't support embedded PDFs. Please download the file to view it."})]}),i.jsx(Rc,{className:"interactive-button-base btn--primary",style:{gap:"var(--space-2)",padding:"var(--space-3) var(--space-5)",background:"var(--md-primary)",color:"var(--md-on-primary)",border:"none"},asChild:!0,children:i.jsxs("a",{href:"/Resume_250808.pdf",download:!0,children:[i.jsx(Cc,{size:18}),"Download Resume PDF"]})})]})})}),i.jsxs("p",{className:"body muted",style:{textAlign:"center",marginTop:"var(--space-4)"},children:["Can't view the PDF? ",i.jsx("a",{href:"/Resume_250808.pdf",target:"_blank",rel:"noopener noreferrer",style:{color:"hsl(var(--g1))",textDecoration:"underline"},children:"Open in new window"})]})]})})}),i.jsx("section",{className:"section",children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:"48px"},children:[i.jsx("h2",{className:"section-head",children:"Experience"}),i.jsx("p",{className:"body muted",style:{maxWidth:"600px",margin:"0 auto"},children:"A chronological overview of my professional journey in Marketing and design."})]}),i.jsx("ol",{className:"timeline-list",children:Ur.experience.map(t=>i.jsx(HS,{experience:t},t.id))})]})}),i.jsx(Va,{className:"container-sep"}),i.jsx("section",{className:"section",style:{paddingTop:"var(--space-10)",paddingBottom:"var(--space-10)"},children:i.jsxs("div",{className:"container",style:{maxWidth:"1400px"},children:[i.jsx("div",{style:{marginBottom:"var(--space-10)"},children:i.jsxs("h2",{className:"section-head",style:{textAlign:"left",display:"flex",alignItems:"center",gap:"12px"},children:[i.jsx(mm,{size:32,color:"hsl(var(--g2))"})," Skills"]})}),i.jsx("div",{className:"skills-grid",children:Ur.skills.map(t=>i.jsxs(Fa,{style:{border:"1px solid rgba(0, 0, 0, 0.06)"},children:[i.jsx(_a,{style:{padding:"var(--space-6)",paddingBottom:"var(--space-4)",gap:"0"},children:i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-3)"},children:[i.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"var(--radius-md)",background:"linear-gradient(135deg, hsl(var(--g2)/.12), hsl(var(--g3)/.12))",display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(mm,{size:20,style:{color:"hsl(var(--g2))"},"aria-hidden":"true"})}),i.jsx(Oa,{style:{color:"var(--md-on-surface)",marginBottom:"0"},children:t.category})]})}),i.jsx(tv,{style:{padding:"var(--space-6)",paddingTop:0,gap:"0"},children:i.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--space-2)"},children:t.items.map(r=>i.jsx(rv,{variant:"secondary",style:{padding:"6px 12px",background:"rgba(255, 255, 255, 0.75)",color:"var(--md-on-surface)",border:"1px solid rgba(0, 0, 0, 0.06)"},children:r},r))})})]},t.category))})]})}),i.jsx(Va,{className:"container-sep"}),i.jsx("section",{className:"section",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"education-cert-grid",children:[i.jsxs("div",{children:[i.jsxs("h2",{className:"section-head",style:{textAlign:"left",display:"flex",alignItems:"center",gap:"12px"},children:[i.jsx(rN,{size:32,color:"var(--md-primary)"})," Education"]}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:Ur.education.map((t,r)=>i.jsx(Fa,{style:{border:"1px solid rgba(0,0,0,0.06)"},children:i.jsxs(_a,{style:{padding:"24px"},children:[i.jsx(Oa,{className:"exp-title",children:t.degree}),i.jsxs(id,{children:[t.institution," · ",t.year]}),t.description&&i.jsx("p",{style:{fontSize:"14px",marginTop:"8px",color:"#666"},children:t.description})]})},r))})]}),i.jsxs("div",{children:[i.jsxs("h2",{className:"section-head",style:{textAlign:"left",display:"flex",alignItems:"center",gap:"12px"},children:[i.jsx(at,{size:32,color:"hsl(var(--g3))"})," Certifications"]}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:Ur.certifications.map((t,r)=>i.jsx(Fa,{style:{border:"1px solid rgba(0,0,0,0.06)"},children:i.jsxs(_a,{style:{padding:"24px"},children:[i.jsx(Oa,{className:"exp-title",children:t.name}),i.jsxs(id,{children:[t.issuer," · ",t.year]})]})},r))})]})]})})})]}),i.jsx("style",{children:`
        .header-section { padding-top: 40px; padding-bottom: 40px; }
        .resume-header-content { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; }
        .resume-actions { display: flex; gap: 12px; }
        .container-sep { max-width: 1200px; margin: 0 auto; }
        
        /* Headings (Matches Home H2) */
        .section-head {
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 700;
          color: var(--md-primary); /* Blue */
          margin-bottom: 32px;
        }

        /* Grid Timeline Layout - The Fix */
        .timeline-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          max-width: 900px;
          margin: 0 auto;
          list-style: none;
          padding: 0;
        }

        .timeline-item {
          display: grid;
          /* 100px Year | 40px Line | Content */
          grid-template-columns: 100px 40px 1fr;
          gap: 0;
          position: relative;
          padding-bottom: 48px; 
        }

        .timeline-left {
          text-align: right;
          padding-right: 16px;
          padding-top: 12px;
        }
        .timeline-year-text {
          font-weight: 700;
          font-size: 18px;
          color: var(--md-primary);
          font-variant-numeric: tabular-nums;
        }

        .timeline-divider {
          position: relative;
          display: flex;
          justify-content: center;
          height: 100%;
        }

        .timeline-line {
          position: absolute;
          top: 20px;
          bottom: -48px; /* Connect to next */
          width: 2px;
          background: rgba(91, 140, 255, 0.2);
        }
        .timeline-item:last-child .timeline-line { display: none; }

        .timeline-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--md-primary);
          box-shadow: 0 0 0 4px #fff;
          z-index: 2;
          margin-top: 16px;
        }

        .timeline-card {
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .timeline-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(91, 140, 255, 0.15);
          border-color: var(--md-primary);
        }

        .resume-card-header { padding: 20px; padding-bottom: 12px; display: flex; gap: 16px; }
        .exp-icon-box {
          width: 40px; height: 40px; border-radius: 8px;
          background: rgba(91, 140, 255, 0.1);
          display: flex; align-items: center; justify-content: center;
          color: var(--md-primary);
          flex-shrink: 0;
        }
        .exp-title { font-size: 18px; margin-bottom: 4px; font-weight: 600; }
        .exp-meta { font-size: 14px; color: #666; }
        .resume-card-content { padding: 0 20px 20px 76px; }
        .exp-desc-list { 
          font-size: 15px; 
          line-height: 1.6; 
          margin-bottom: 16px; 
          color: #333;
          padding-left: 24px;
          margin-top: 0;
          list-style-type: disc; /* Circle bullet points */
        }
        .exp-desc-list li {
          margin-bottom: 8px;
          padding-left: 4px;
        }
        .exp-desc-list li::marker {
          color: var(--md-primary); /* Blue color for bullet points */
          font-size: 1.2em;
        }
        .exp-desc-list li:last-child {
          margin-bottom: 0;
        }
        .exp-badge { margin-right: 8px; margin-bottom: 8px; background: rgba(91, 140, 255, 0.08); color: var(--md-primary); }

          /* Skills Grid */
          .skills-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-6);
          }

          /* Education & Certifications Grid */
          .education-cert-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-10);
          }
        
        .education-cert-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; }

        @media (max-width: 768px) {
          .timeline-item { grid-template-columns: 24px 1fr; }
          .timeline-left { display: none; } /* Hide year on side for mobile */
          .timeline-divider { padding-left: 4px; justify-content: flex-start; }
          .resume-card-content { padding-left: 20px; }
          .resume-header-content { flex-direction: column; align-items: flex-start; }
          .skills-grid { grid-template-columns: 1fr; }
          .education-cert-grid { grid-template-columns: 1fr; gap: 32px; }
        }
      `})]})}function GS(){return j.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const r=document.querySelectorAll(".reveal"),a=new IntersectionObserver(o=>{o.forEach(c=>{c.isIntersecting&&c.target.classList.add("in")})},{threshold:.1});return r.forEach(o=>a.observe(o)),()=>a.disconnect()},[]),i.jsx(Wn,{children:i.jsxs("div",{id:"good-luck-peanut-page",children:[i.jsx("section",{className:"hero-section",children:i.jsx("div",{className:"container",style:{maxWidth:"1200px"},children:i.jsxs(ni.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,ease:[.2,.8,.2,1]},className:"hero-content",children:[i.jsxs("div",{className:"hero-tags",children:[i.jsxs("span",{className:"hero-tag branding",children:[i.jsx(Na,{size:16}),"Branding & Packaging"]}),i.jsxs("span",{className:"hero-tag web",children:[i.jsx(cr,{size:16}),"Website Redesign"]})]}),i.jsx("h1",{className:"hero-title",children:"Good Luck Peanut"}),i.jsx("p",{className:"hero-subtitle",children:"Complete Brand Identity & E-Commerce Redesign"}),i.jsxs("div",{className:"hero-details",children:[i.jsxs("div",{className:"detail-item",children:[i.jsx("span",{className:"detail-label",children:"Timeline"}),i.jsx("span",{className:"detail-value",children:"2022 - 2023"}),i.jsx("span",{className:"detail-sub",children:"Branding: 2022 | Web: Jul-Sep 2023"})]}),i.jsxs("div",{className:"detail-item",children:[i.jsx("span",{className:"detail-label",children:"My Role"}),i.jsx("span",{className:"detail-value",children:"Brand Visual Planning, UI/UX Design"})]}),i.jsxs("div",{className:"detail-item",children:[i.jsx("span",{className:"detail-label",children:"Recognition"}),i.jsxs("span",{className:"detail-value",children:[i.jsx(at,{size:18,style:{display:"inline",verticalAlign:"middle",marginRight:"6px"}}),"2nd Place - Creative Culture Exhibition"]})]})]})]})})}),i.jsx("section",{className:"content-section reveal",children:i.jsxs("div",{className:"container",style:{maxWidth:"1200px"},children:[i.jsxs("div",{className:"overview-intro",children:[i.jsx("h2",{className:"section-heading",children:"Project Overview"}),i.jsx("p",{className:"body-text-large",children:"This comprehensive project transformed Fuhshyuan Foods (福瑄食品), a traditional Taiwanese peanut brittle manufacturer, through a complete brand redesign and modern e-commerce website. The goal was to bridge generational preferences by modernizing the brand's visual identity and digital presence while preserving its rich Hakka cultural heritage."})]}),i.jsxs("div",{className:"project-parts",children:[i.jsxs("div",{className:"part-card",children:[i.jsx("div",{className:"part-icon",children:i.jsx(Na,{size:32})}),i.jsx("h3",{className:"part-title",children:"Part 1: Brand & Packaging"}),i.jsx("p",{className:"part-desc",children:"Cultural storytelling through modern packaging design inspired by Hakka traditions"})]}),i.jsxs("div",{className:"part-card",children:[i.jsx("div",{className:"part-icon",children:i.jsx(cr,{size:32})}),i.jsx("h3",{className:"part-title",children:"Part 2: Website Redesign"}),i.jsx("p",{className:"part-desc",children:"User-centered e-commerce experience with improved navigation and conversion flow"})]})]})]})}),i.jsx("div",{className:"section-divider",children:i.jsx("div",{className:"container",style:{maxWidth:"1200px"},children:i.jsx("div",{className:"divider-line"})})}),i.jsx("section",{className:"content-section reveal",style:{background:"linear-gradient(180deg, rgba(255,248,225,0.3) 0%, transparent 100%)"},children:i.jsxs("div",{className:"container",style:{maxWidth:"1200px"},children:[i.jsxs("div",{className:"part-header",children:[i.jsx("div",{className:"part-number",children:"01"}),i.jsxs("div",{children:[i.jsx("h2",{className:"section-heading",children:"Brand & Packaging Redesign"}),i.jsx("p",{className:"section-subheading",children:"Revitalizing Traditional Taiwanese Peanut Brittle for Modern Consumers"})]})]}),i.jsxs("div",{className:"subsection",children:[i.jsxs("div",{className:"subsection-header",children:[i.jsx(On,{size:24,color:"hsl(var(--g1))"}),i.jsx("h3",{className:"subsection-title",children:"The Challenge"})]}),i.jsxs("div",{className:"two-column-layout",children:[i.jsxs("div",{className:"column-content",children:[i.jsx("p",{className:"body-text",children:"Fuhshyuan Foods (福瑄食品) faced declining engagement with younger demographics. The traditional packaging design failed to communicate the product's cultural value and quality, positioning it as outdated rather than heritage-rich."}),i.jsxs("div",{className:"challenge-list",children:[i.jsxs("div",{className:"challenge-item",children:[i.jsx("div",{className:"challenge-bullet"}),i.jsx("span",{children:"Old packaging was sticky and inconvenient for modern consumption"})]}),i.jsxs("div",{className:"challenge-item",children:[i.jsx("div",{className:"challenge-bullet"}),i.jsx("span",{children:"Visual identity failed to attract 18-35 age demographic"})]}),i.jsxs("div",{className:"challenge-item",children:[i.jsx("div",{className:"challenge-bullet"}),i.jsx("span",{children:"Cultural heritage story was not effectively communicated"})]})]})]}),i.jsx("div",{className:"column-media",children:i.jsx("div",{className:"image-placeholder old-packaging",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Old Traditional Packaging]"})})})]})]}),i.jsxs("div",{className:"subsection",children:[i.jsxs("div",{className:"subsection-header",children:[i.jsx(Ki,{size:24,color:"hsl(var(--g2))"}),i.jsx("h3",{className:"subsection-title",children:"The Strategy"})]}),i.jsx("div",{className:"strategy-highlight",children:i.jsxs("div",{className:"highlight-content",children:[i.jsx("h4",{className:"highlight-title",children:'Cultural Narrative: "Good Luck" (好韻)'}),i.jsx("p",{className:"body-text",children:`The rebranding centered around the Hakka festival "Tian Chuan Ri" (天穿日 - Heaven's Birthday). The word "Yun" (韻) in Chinese means "rhyme" or "rhythm," but phonetically it also implies "good luck" and "fortune." This dual meaning transformed the peanut brittle from a simple snack into a culturally meaningful gift symbolizing blessings and prosperity.`})]})}),i.jsxs("div",{className:"strategy-grid",children:[i.jsxs("div",{className:"strategy-card",children:[i.jsx("div",{className:"strategy-number",children:"01"}),i.jsx("h4",{className:"strategy-card-title",children:"Cultural Connection"}),i.jsx("p",{className:"strategy-card-text",children:'Anchored in Hakka "Tian Chuan Ri" festival traditions, making the product culturally significant'})]}),i.jsxs("div",{className:"strategy-card",children:[i.jsx("div",{className:"strategy-number",children:"02"}),i.jsx("h4",{className:"strategy-card-title",children:"Visual Modernization"}),i.jsx("p",{className:"strategy-card-text",children:"Woodblock printing aesthetics combined with contemporary design principles"})]}),i.jsxs("div",{className:"strategy-card",children:[i.jsx("div",{className:"strategy-number",children:"03"}),i.jsx("h4",{className:"strategy-card-title",children:"Format Innovation"}),i.jsx("p",{className:"strategy-card-text",children:"Single-serve instant packs solving stickiness while creating gift-ready format"})]})]})]}),i.jsxs("div",{className:"subsection",children:[i.jsxs("div",{className:"subsection-header",children:[i.jsx(Na,{size:24,color:"hsl(var(--g3))"}),i.jsx("h3",{className:"subsection-title",children:"Design Solution"})]}),i.jsx("div",{className:"visual-showcase",children:i.jsx("div",{className:"showcase-main",children:i.jsx("div",{className:"image-placeholder packaging-hero",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Final Packaging Design - Hero Shot]"})})})}),i.jsxs("div",{className:"design-details-grid",children:[i.jsx("div",{className:"image-placeholder",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Woodblock Printing Style Graphics]"})}),i.jsx("div",{className:"image-placeholder",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Brand Characters & Mascot]"})}),i.jsx("div",{className:"image-placeholder",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Single-Serve Pack Design]"})}),i.jsx("div",{className:"image-placeholder",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Gift Box Set]"})})]}),i.jsxs("div",{className:"features-list",children:[i.jsxs("div",{className:"feature-row",children:[i.jsx(ka,{size:20,color:"hsl(var(--g1))"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Woodblock Printing Visuals:"})," Traditional Hakka art style modernized with vibrant colors and clean typography"]})]}),i.jsxs("div",{className:"feature-row",children:[i.jsx(ka,{size:20,color:"hsl(var(--g2))"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Single-Serve Innovation:"})," Individual instant packs eliminate stickiness and improve portability"]})]}),i.jsxs("div",{className:"feature-row",children:[i.jsx(ka,{size:20,color:"hsl(var(--g3))"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Gift-Ready Format:"})," Premium packaging suitable for festivals and cultural celebrations"]})]})]})]})]})}),i.jsx("div",{className:"section-divider",children:i.jsx("div",{className:"container",style:{maxWidth:"1200px"},children:i.jsx("div",{className:"divider-line"})})}),i.jsx("section",{className:"content-section reveal",style:{background:"linear-gradient(180deg, rgba(227,242,253,0.3) 0%, transparent 100%)"},children:i.jsxs("div",{className:"container",style:{maxWidth:"1200px"},children:[i.jsxs("div",{className:"part-header",children:[i.jsx("div",{className:"part-number",children:"02"}),i.jsxs("div",{children:[i.jsx("h2",{className:"section-heading",children:"Website Redesign"}),i.jsx("p",{className:"section-subheading",children:"Modernizing the E-Commerce Experience"})]})]}),i.jsxs("div",{className:"subsection",children:[i.jsxs("div",{className:"subsection-header",children:[i.jsx(cr,{size:24,color:"hsl(var(--g1))"}),i.jsx("h3",{className:"subsection-title",children:"Project Context"})]}),i.jsx("p",{className:"body-text",children:"Following the successful brand redesign, the official website needed a complete overhaul to match the new brand identity and improve the user experience. The old website suffered from poor navigation, unclear product information, and low conversion rates."})]}),i.jsxs("div",{className:"subsection",children:[i.jsxs("div",{className:"subsection-header",children:[i.jsx(Xr,{size:24,color:"hsl(var(--g2))"}),i.jsx("h3",{className:"subsection-title",children:"Before vs. After"})]}),i.jsxs("div",{className:"comparison-container",children:[i.jsxs("div",{className:"comparison-side old",children:[i.jsx("div",{className:"comparison-label",children:"Old Website"}),i.jsx("div",{className:"image-placeholder old-website",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Old Website Screenshot]"})}),i.jsxs("ul",{className:"comparison-list",children:[i.jsx("li",{children:"Cluttered navigation"}),i.jsx("li",{children:"Outdated visual design"}),i.jsx("li",{children:"Poor mobile experience"}),i.jsx("li",{children:"Unclear product info"})]})]}),i.jsx("div",{className:"comparison-arrow",children:i.jsx(ka,{size:32})}),i.jsxs("div",{className:"comparison-side new",children:[i.jsx("div",{className:"comparison-label new-label",children:"New Website"}),i.jsx("div",{className:"image-placeholder new-website",children:i.jsx("p",{className:"placeholder-label",children:"[Image: New Website Screenshot]"})}),i.jsxs("ul",{className:"comparison-list",children:[i.jsx("li",{children:"Clean, intuitive navigation"}),i.jsx("li",{children:"Modern brand-aligned design"}),i.jsx("li",{children:"Mobile-first responsive"}),i.jsx("li",{children:"Clear product presentation"})]})]})]})]}),i.jsxs("div",{className:"subsection",children:[i.jsxs("div",{className:"subsection-header",children:[i.jsx(On,{size:24,color:"hsl(var(--g3))"}),i.jsx("h3",{className:"subsection-title",children:"UX Process: Functional Map"})]}),i.jsx("p",{className:"body-text",children:"I created a comprehensive functional map to reorganize the website's information architecture. This process helped identify user pain points and streamline the navigation structure for better discoverability and conversion."}),i.jsx("div",{className:"visual-showcase",children:i.jsx("div",{className:"image-placeholder functional-map",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Functional Map / Site Architecture]"})})})]}),i.jsxs("div",{className:"subsection",children:[i.jsxs("div",{className:"subsection-header",children:[i.jsx(cr,{size:24,color:"hsl(var(--g4))"}),i.jsx("h3",{className:"subsection-title",children:"UI Design: High-Fidelity Screens"})]}),i.jsx("p",{className:"body-text",children:"The final UI design focused on three key pages: Homepage (brand story and featured products), About Brand (Hakka culture and company values), and Product Listing (intuitive browsing and filtering)."}),i.jsxs("div",{className:"ui-screens-grid",children:[i.jsxs("div",{className:"ui-screen-item",children:[i.jsx("div",{className:"image-placeholder ui-screen",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Homepage Design]"})}),i.jsx("h4",{className:"ui-screen-label",children:"Homepage"})]}),i.jsxs("div",{className:"ui-screen-item",children:[i.jsx("div",{className:"image-placeholder ui-screen",children:i.jsx("p",{className:"placeholder-label",children:"[Image: About Brand Page]"})}),i.jsx("h4",{className:"ui-screen-label",children:"About Brand"})]}),i.jsxs("div",{className:"ui-screen-item",children:[i.jsx("div",{className:"image-placeholder ui-screen",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Product Listing Page]"})}),i.jsx("h4",{className:"ui-screen-label",children:"Product Listing"})]})]}),i.jsxs("div",{className:"highlights-grid",children:[i.jsxs("div",{className:"highlight-card",children:[i.jsx("h4",{className:"highlight-card-title",children:"Brand Storytelling"}),i.jsx("p",{className:"highlight-card-text",children:'Homepage hero section showcases Hakka culture and "Good Luck" concept'})]}),i.jsxs("div",{className:"highlight-card",children:[i.jsx("h4",{className:"highlight-card-title",children:"Intuitive Navigation"}),i.jsx("p",{className:"highlight-card-text",children:"Simplified menu structure with clear product categories and filters"})]}),i.jsxs("div",{className:"highlight-card",children:[i.jsx("h4",{className:"highlight-card-title",children:"Mobile-First Design"}),i.jsx("p",{className:"highlight-card-text",children:"Responsive layouts optimized for smartphone shopping experience"})]})]})]})]})}),i.jsx("section",{className:"content-section reveal",style:{paddingBottom:"120px"},children:i.jsx("div",{className:"container",style:{maxWidth:"1200px"},children:i.jsxs("div",{className:"outcome-section",children:[i.jsxs("div",{className:"outcome-header",children:[i.jsx(at,{size:48,color:"hsl(var(--g1))"}),i.jsx("h2",{className:"section-heading",style:{marginBottom:"16px"},children:"Outcome & Impact"}),i.jsx("p",{className:"section-subheading",children:"Recognition and Results"})]}),i.jsxs("div",{className:"outcome-grid",children:[i.jsxs("div",{className:"outcome-card featured",children:[i.jsx("div",{className:"outcome-icon",children:i.jsx(at,{size:40})}),i.jsx("h3",{className:"outcome-title",children:"2nd Place Award"}),i.jsx("p",{className:"outcome-text",children:"Won 2nd Place in the Creative Culture Graduate Exhibition, recognizing excellence in cultural brand design and digital innovation."})]}),i.jsxs("div",{className:"outcome-card",children:[i.jsx("div",{className:"outcome-icon",children:i.jsx(Na,{size:36})}),i.jsx("h3",{className:"outcome-title",children:"Brand Repositioning"}),i.jsx("p",{className:"outcome-text",children:"Successfully repositioned a traditional product for younger demographics while preserving cultural authenticity."})]}),i.jsxs("div",{className:"outcome-card",children:[i.jsx("div",{className:"outcome-icon",children:i.jsx(cr,{size:36})}),i.jsx("h3",{className:"outcome-title",children:"Digital Transformation"}),i.jsx("p",{className:"outcome-text",children:"Created a modern e-commerce platform that improved user experience and sales conversion."})]})]})]})})}),i.jsx("style",{children:`
          /* Hero Section */
          .hero-section {
            padding: 120px 0 80px;
            background: linear-gradient(180deg, rgba(0,0,0,0.02) 0%, transparent 100%);
          }

          .hero-content {
            text-align: center;
            max-width: 900px;
            margin: 0 auto;
          }

          .hero-tags {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin-bottom: 24px;
            flex-wrap: wrap;
          }

          .hero-tag {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 8px 16px;
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            border-radius: var(--radius-md);
          }

          .hero-tag.branding {
            background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1));
            color: hsl(var(--g1));
          }

          .hero-tag.web {
            background: linear-gradient(135deg, hsl(var(--g3)/.1), hsl(var(--g4)/.1));
            color: hsl(var(--g3));
          }

          .hero-title {
            font-size: clamp(48px, 6vw, 72px);
            font-weight: 800;
            line-height: 1.1;
            color: var(--md-on-surface);
            margin-bottom: 24px;
          }

          .hero-subtitle {
            font-size: clamp(18px, 2vw, 24px);
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-bottom: 48px;
          }

          .hero-details {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 32px;
            margin-top: 48px;
            padding-top: 48px;
            border-top: 1px solid rgba(0,0,0,0.06);
          }

          .detail-item {
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .detail-label {
            display: block;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--color-text-muted);
          }

          .detail-value {
            display: block;
            font-size: 15px;
            font-weight: 600;
            color: var(--md-on-surface);
          }

          .detail-sub {
            display: block;
            font-size: 13px;
            color: var(--color-text-muted);
          }

          /* Content Sections */
          .content-section {
            padding: 80px 0;
          }

          .section-heading {
            font-size: clamp(32px, 4vw, 48px);
            font-weight: 700;
            color: var(--md-on-surface);
            margin-bottom: 16px;
          }

          .section-subheading {
            font-size: clamp(16px, 2vw, 20px);
            color: var(--color-text-muted);
            margin-bottom: 32px;
          }

          .body-text {
            font-size: 16px;
            line-height: 1.8;
            color: var(--color-text-muted);
            margin-bottom: 24px;
          }

          .body-text-large {
            font-size: 20px;
            line-height: 1.7;
            color: var(--md-on-surface);
            font-weight: 500;
            margin-bottom: 48px;
          }

          /* Overview */
          .overview-intro {
            text-align: center;
            max-width: 900px;
            margin: 0 auto 64px;
          }

          .project-parts {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
            margin-top: 48px;
          }

          .part-card {
            padding: 40px 32px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
            text-align: center;
            transition: transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1);
          }

          .part-card:hover {
            transform: translateY(-4px);
          }

          .part-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 64px;
            height: 64px;
            background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1));
            border-radius: 50%;
            margin-bottom: 24px;
            color: hsl(var(--g1));
          }

          .part-card:nth-child(2) .part-icon {
            background: linear-gradient(135deg, hsl(var(--g3)/.1), hsl(var(--g4)/.1));
            color: hsl(var(--g3));
          }

          .part-title {
            font-size: 22px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 12px;
          }

          .part-desc {
            font-size: 15px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          /* Section Divider */
          .section-divider {
            padding: 60px 0;
          }

          .divider-line {
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent);
          }

          /* Part Headers */
          .part-header {
            display: flex;
            align-items: flex-start;
            gap: 24px;
            margin-bottom: 48px;
          }

          .part-number {
            font-size: 80px;
            font-weight: 900;
            line-height: 1;
            color: hsl(var(--g1)/.15);
          }

          /* Subsections */
          .subsection {
            margin-bottom: 64px;
          }

          .subsection-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 24px;
          }

          .subsection-title {
            font-size: 28px;
            font-weight: 600;
            color: var(--md-on-surface);
          }

          /* Two Column Layout */
          .two-column-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            align-items: start;
          }

          /* Challenge List */
          .challenge-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-top: 24px;
          }

          .challenge-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
          }

          .challenge-bullet {
            width: 8px;
            height: 8px;
            background: hsl(var(--g3));
            border-radius: 50%;
            margin-top: 8px;
            flex-shrink: 0;
          }

          .challenge-item span {
            font-size: 15px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          /* Strategy Highlight */
          .strategy-highlight {
            padding: 32px;
            background: linear-gradient(135deg, hsl(var(--g1)/.05), hsl(var(--g2)/.05));
            border-left: 4px solid hsl(var(--g1));
            border-radius: var(--radius-md);
            margin-bottom: 32px;
          }

          .highlight-title {
            font-size: 20px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 12px;
          }

          /* Strategy Grid */
          .strategy-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-top: 32px;
          }

          .strategy-card {
            padding: 24px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
          }

          .strategy-number {
            font-size: 36px;
            font-weight: 800;
            color: hsl(var(--g1)/.2);
            line-height: 1;
            margin-bottom: 12px;
          }

          .strategy-card-title {
            font-size: 16px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 8px;
          }

          .strategy-card-text {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          /* Visual Showcase */
          .visual-showcase {
            margin: 32px 0;
          }

          .showcase-main {
            width: 100%;
          }

          /* Design Details Grid */
          .design-details-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            margin-top: 32px;
          }

          /* Image Placeholders */
          .image-placeholder {
            width: 100%;
            aspect-ratio: 16 / 10;
            border-radius: var(--radius-lg);
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(0,0,0,0.06);
          }

          .image-placeholder.old-packaging {
            background: linear-gradient(135deg, #e0e0e0, #bdbdbd);
          }

          .image-placeholder.packaging-hero {
            background: linear-gradient(135deg, #fff8e1, #ffe4b3);
            aspect-ratio: 21 / 9;
          }

          .image-placeholder.functional-map {
            background: linear-gradient(135deg, #e3f2fd, #bbdefb);
            aspect-ratio: 16 / 9;
          }

          .image-placeholder.old-website {
            background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
          }

          .image-placeholder.new-website {
            background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
          }

          .image-placeholder.ui-screen {
            background: linear-gradient(135deg, #f3e5f5, #e1bee7);
            aspect-ratio: 3 / 4;
          }

          .placeholder-label {
            font-size: 14px;
            color: rgba(0,0,0,0.3);
            font-weight: 500;
            text-align: center;
            padding: 20px;
          }

          /* Features List */
          .features-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-top: 32px;
          }

          .feature-row {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 16px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-md);
          }

          .feature-row svg {
            flex-shrink: 0;
            margin-top: 2px;
          }

          .feature-row div {
            font-size: 15px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          /* Comparison Container */
          .comparison-container {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            gap: 32px;
            align-items: center;
            margin-top: 32px;
          }

          .comparison-side {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .comparison-label {
            font-size: 16px;
            font-weight: 600;
            color: var(--md-on-surface);
            padding: 8px 16px;
            background: rgba(0,0,0,0.05);
            border-radius: var(--radius-sm);
            text-align: center;
          }

          .comparison-label.new-label {
            background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1));
            color: hsl(var(--g1));
          }

          .comparison-arrow {
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-muted);
          }

          .comparison-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .comparison-list li {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-muted);
            padding-left: 20px;
            position: relative;
          }

          .comparison-list li::before {
            content: '•';
            position: absolute;
            left: 0;
            color: hsl(var(--g1));
          }

          /* UI Screens Grid */
          .ui-screens-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin: 32px 0;
          }

          .ui-screen-item {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .ui-screen-label {
            font-size: 16px;
            font-weight: 600;
            color: var(--md-on-surface);
            text-align: center;
          }

          /* Highlights Grid */
          .highlights-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-top: 32px;
          }

          .highlight-card {
            padding: 24px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
          }

          .highlight-card-title {
            font-size: 16px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 8px;
          }

          .highlight-card-text {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          /* Outcome Section */
          .outcome-section {
            text-align: center;
          }

          .outcome-header {
            max-width: 700px;
            margin: 0 auto 48px;
          }

          .outcome-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }

          .outcome-card {
            padding: 40px 24px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
            text-align: center;
          }

          .outcome-card.featured {
            grid-column: span 3;
            background: linear-gradient(135deg, hsl(var(--g1)/.05), hsl(var(--g2)/.05));
            border: 2px solid hsl(var(--g1)/.3);
          }

          .outcome-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1));
            border-radius: 50%;
            margin-bottom: 24px;
            color: hsl(var(--g1));
          }

          .outcome-card.featured .outcome-icon {
            width: 100px;
            height: 100px;
          }

          .outcome-title {
            font-size: 20px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 12px;
          }

          .outcome-text {
            font-size: 15px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          /* Reveal Animation */
          .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1),
                        transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
          }

          .reveal.in {
            opacity: 1;
            transform: translateY(0);
          }

          /* Responsive Design */
          @media (max-width: 959px) {
            .project-parts,
            .two-column-layout,
            .strategy-grid,
            .design-details-grid,
            .comparison-container,
            .ui-screens-grid,
            .highlights-grid,
            .outcome-grid {
              grid-template-columns: 1fr;
            }

            .comparison-arrow {
              transform: rotate(90deg);
            }

            .part-header {
              flex-direction: column;
            }

            .part-number {
              font-size: 60px;
            }

            .outcome-card.featured {
              grid-column: span 1;
            }
          }

          @media (max-width: 640px) {
            .hero-section {
              padding: 100px 0 60px;
            }

            .content-section {
              padding: 60px 0;
            }

            .hero-tags {
              flex-direction: column;
            }

            .section-divider {
              padding: 40px 0;
            }
          }

          /* Reduced Motion */
          @media (prefers-reduced-motion: reduce) {
            .reveal,
            .part-card {
              transition: none !important;
              transform: none !important;
            }

            .reveal {
              opacity: 1;
            }

            .part-card:hover {
              transform: none !important;
            }
          }
        `})]})})}function KS(){return j.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const r=document.querySelectorAll(".reveal"),a=new IntersectionObserver(o=>{o.forEach(c=>{c.isIntersecting&&c.target.classList.add("in")})},{threshold:.1});return r.forEach(o=>a.observe(o)),()=>a.disconnect()},[]),i.jsx(Wn,{children:i.jsxs("div",{id:"oblivilight-page",children:[i.jsx("section",{className:"hero-section",children:i.jsx("div",{className:"container",style:{maxWidth:"1200px"},children:i.jsxs(ni.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,ease:[.2,.8,.2,1]},className:"hero-content",children:[i.jsxs("div",{className:"award-badges",children:[i.jsxs("div",{className:"award-badge best-demo",children:[i.jsx(at,{size:20}),i.jsx("span",{children:"Best Demo Award"})]}),i.jsxs("div",{className:"award-badge taichi",children:[i.jsx(ur,{size:20}),i.jsx("span",{children:"Selected for TAICHI Demo"})]})]}),i.jsx("h1",{className:"hero-title",children:"OpenHCI'25｜Oblivilight"}),i.jsx("p",{className:"hero-subtitle",children:"Exploring AI Forgetting Mechanisms Through Tangible Interaction"}),i.jsxs("div",{className:"hero-details",children:[i.jsxs("div",{className:"detail-item",children:[i.jsx("span",{className:"detail-label",children:"Timeline"}),i.jsx("span",{className:"detail-value",children:"July 2025"}),i.jsx("span",{className:"detail-sub",children:"Completed in 6-day Intensive Workshop"})]}),i.jsxs("div",{className:"detail-item",children:[i.jsx("span",{className:"detail-label",children:"My Role"}),i.jsx("span",{className:"detail-value",children:"Interaction Designer"}),i.jsx("span",{className:"detail-sub",children:"Team of 5 Members"})]}),i.jsxs("div",{className:"detail-item",children:[i.jsx("span",{className:"detail-label",children:"Recognition"}),i.jsxs("span",{className:"detail-value achievement-highlight",children:["🏆 ","Best Demo Award"]}),i.jsxs("span",{className:"detail-sub",children:["✨ ","TAICHI Demo Selected"]})]})]}),i.jsxs("div",{className:"workshop-context",children:[i.jsx("div",{className:"context-icon",children:i.jsx(IN,{size:24})}),i.jsxs("div",{className:"context-content",children:[i.jsx("h3",{className:"context-title",children:"Rapid Prototyping Challenge"}),i.jsx("p",{className:"context-text",children:"This fully functional physical prototype was conceived, designed, and built within an intensive 6-day OpenHCI workshop — demonstrating exceptional teamwork, rapid iteration, and innovative problem-solving under pressure."})]})]})]})})}),i.jsx("section",{className:"content-section reveal",children:i.jsxs("div",{className:"container",style:{maxWidth:"1200px"},children:[i.jsxs("div",{className:"overview-intro",children:[i.jsx("h2",{className:"section-heading",children:"Project Overview"}),i.jsx("p",{className:"body-text-large",children:'Oblivilight is a tangible interaction device that explores how AI systems can "forget" information. In an era of digital hoarding and privacy concerns, this project reimagines data deletion as a meaningful, ritual-like experience through physical interaction.'})]}),i.jsxs("div",{className:"concept-cards",children:[i.jsxs("div",{className:"concept-card",children:[i.jsx("div",{className:"concept-icon",children:i.jsx(Sc,{size:32})}),i.jsx("h3",{className:"concept-title",children:"AI Forgetting"}),i.jsx("p",{className:"concept-desc",children:"Selective memory deletion that mirrors human forgetting patterns"})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("div",{className:"concept-icon",children:i.jsx(Tc,{size:32})}),i.jsx("h3",{className:"concept-title",children:"Tangible Output"}),i.jsx("p",{className:"concept-desc",children:"Physical receipt printer makes digital memories tangible"})]}),i.jsxs("div",{className:"concept-card",children:[i.jsx("div",{className:"concept-icon",children:i.jsx(gm,{size:32})}),i.jsx("h3",{className:"concept-title",children:"Ritual Interaction"}),i.jsx("p",{className:"concept-desc",children:"Shredding creates a meaningful deletion ceremony"})]})]})]})}),i.jsx("section",{className:"content-section reveal",style:{background:"linear-gradient(180deg, rgba(255,248,225,0.2) 0%, transparent 100%)"},children:i.jsx("div",{className:"container",style:{maxWidth:"1200px"},children:i.jsxs("div",{className:"subsection",children:[i.jsxs("div",{className:"subsection-header",children:[i.jsx(On,{size:24,color:"hsl(var(--g1))"}),i.jsx("h3",{className:"subsection-title",children:"The Challenge: Time Pressure & Complexity"})]}),i.jsxs("div",{className:"two-column-layout",children:[i.jsxs("div",{className:"column-content",children:[i.jsx("h4",{className:"highlight-title",children:"6 Days. 5 People. 1 Working Prototype."}),i.jsx("p",{className:"body-text",children:"The OpenHCI workshop imposed a strict 6-day timeline to ideate, prototype, and demo a complex physical computing project. Our team had to rapidly converge on a concept, source materials, learn Arduino programming, and build a polished demo — all while exploring a novel interaction paradigm."}),i.jsxs("div",{className:"challenge-list",children:[i.jsxs("div",{className:"challenge-item",children:[i.jsx("div",{className:"challenge-bullet urgent"}),i.jsxs("span",{children:[i.jsx("strong",{children:"Rapid Ideation:"})," Converge on a compelling concept within Day 1"]})]}),i.jsxs("div",{className:"challenge-item",children:[i.jsx("div",{className:"challenge-bullet urgent"}),i.jsxs("span",{children:[i.jsx("strong",{children:"Technical Learning Curve:"})," Arduino, sensors, receipt printer integration"]})]}),i.jsxs("div",{className:"challenge-item",children:[i.jsx("div",{className:"challenge-bullet urgent"}),i.jsxs("span",{children:[i.jsx("strong",{children:"Physical Fabrication:"})," Build and refine the lamp enclosure and shredder mechanism"]})]}),i.jsxs("div",{className:"challenge-item",children:[i.jsx("div",{className:"challenge-bullet urgent"}),i.jsxs("span",{children:[i.jsx("strong",{children:"Demo Readiness:"})," Ensure reliability and polish for live demonstration"]})]})]})]}),i.jsxs("div",{className:"column-media",children:[i.jsx("div",{className:"image-placeholder workshop-scene",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Workshop Team Brainstorming]"})}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-number",children:"6"}),i.jsx("div",{className:"stat-label",children:"Days"})]})]})]})]})})}),i.jsx("section",{className:"content-section reveal",children:i.jsx("div",{className:"container",style:{maxWidth:"1200px"},children:i.jsxs("div",{className:"subsection",children:[i.jsxs("div",{className:"subsection-header",children:[i.jsx(Sc,{size:24,color:"hsl(var(--g2))"}),i.jsx("h3",{className:"subsection-title",children:'The Concept: "Obliviate" - Making AI Forget'})]}),i.jsxs("div",{className:"concept-explanation",children:[i.jsx("p",{className:"body-text",children:'Inspired by the spell "Obliviate" from Harry Potter (which erases memories), our project tackles a pressing question: What if AI systems could selectively forget? In a world where data is hoarded indefinitely, we envisioned a system that gives users agency over what their AI remembers — and what it should let go.'}),i.jsxs("div",{className:"concept-highlight",children:[i.jsx("div",{className:"highlight-icon",children:i.jsx(On,{size:40})}),i.jsxs("div",{className:"highlight-content",children:[i.jsx("h4",{className:"highlight-title",children:"Core Insight"}),i.jsx("p",{className:"body-text",children:'Digital deletion feels ephemeral and meaningless. By making memory "tangible" (printed on paper) and deletion "physical" (shredding), we create a ritual that mirrors the emotional weight of letting go.'})]})]})]}),i.jsx("div",{className:"visual-showcase",children:i.jsx("div",{className:"image-placeholder concept-visual",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Oblivilight Lamp Prototype - Full Setup]"})})})]})})}),i.jsx("section",{className:"content-section reveal",style:{background:"linear-gradient(180deg, rgba(227,242,253,0.2) 0%, transparent 100%)"},children:i.jsx("div",{className:"container",style:{maxWidth:"1200px"},children:i.jsxs("div",{className:"subsection",children:[i.jsxs("div",{className:"subsection-header",children:[i.jsx(Tc,{size:24,color:"hsl(var(--g3))"}),i.jsx("h3",{className:"subsection-title",children:"Interaction Flow: Print → Review → Decide"})]}),i.jsx("p",{className:"body-text",style:{marginBottom:"40px"},children:"The interaction is designed as a three-step ritual that transforms abstract digital data into a tangible decision-making process."}),i.jsxs("div",{className:"interaction-steps",children:[i.jsxs("div",{className:"step-card",children:[i.jsx("div",{className:"step-number",children:"01"}),i.jsx("div",{className:"step-icon",children:i.jsx(Tc,{size:40})}),i.jsx("h4",{className:"step-title",children:"Print Memory Receipt"}),i.jsx("p",{className:"step-description",children:"The system prints a physical receipt containing a stored memory or data entry. The act of printing makes the digital tangible."}),i.jsx("div",{className:"image-placeholder step-visual",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Receipt Printer Output]"})})]}),i.jsxs("div",{className:"step-card",children:[i.jsx("div",{className:"step-number",children:"02"}),i.jsx("div",{className:"step-icon",children:i.jsx(Xr,{size:40})}),i.jsx("h4",{className:"step-title",children:"Review & Reflect"}),i.jsx("p",{className:"step-description",children:"The user holds the receipt and reflects on whether this memory should be kept or forgotten. This pause creates intentionality."}),i.jsx("div",{className:"image-placeholder step-visual",children:i.jsx("p",{className:"placeholder-label",children:"[Image: User Reviewing Receipt]"})})]}),i.jsxs("div",{className:"step-card",children:[i.jsx("div",{className:"step-number",children:"03"}),i.jsx("div",{className:"step-icon",children:i.jsx(gm,{size:40})}),i.jsx("h4",{className:"step-title",children:"Shred to Forget / Keep to Save"}),i.jsx("p",{className:"step-description",children:"Shredding the receipt triggers the lamp to change color (red = forgotten). Keeping it preserves the memory (green = saved). The physical act reinforces the digital consequence."}),i.jsx("div",{className:"image-placeholder step-visual shred",children:i.jsx("p",{className:"placeholder-label",children:"[Image: User Shredding Receipt + Lamp Feedback]"})})]})]})]})})}),i.jsx("section",{className:"content-section reveal",children:i.jsx("div",{className:"container",style:{maxWidth:"1200px"},children:i.jsxs("div",{className:"subsection",children:[i.jsxs("div",{className:"subsection-header",children:[i.jsx(Sc,{size:24,color:"hsl(var(--g4))"}),i.jsx("h3",{className:"subsection-title",children:"Technical Implementation"})]}),i.jsxs("div",{className:"tech-grid",children:[i.jsxs("div",{className:"tech-card",children:[i.jsx("h4",{className:"tech-card-title",children:"Hardware"}),i.jsxs("ul",{className:"tech-list",children:[i.jsx("li",{children:"Arduino Uno (microcontroller)"}),i.jsx("li",{children:"Thermal Receipt Printer"}),i.jsx("li",{children:"RGB LED Lamp (feedback)"}),i.jsx("li",{children:"Paper Shredder (modified)"}),i.jsx("li",{children:"IR Sensor (shred detection)"})]})]}),i.jsxs("div",{className:"tech-card",children:[i.jsx("h4",{className:"tech-card-title",children:"Software"}),i.jsxs("ul",{className:"tech-list",children:[i.jsx("li",{children:"Arduino C++ (sensor logic)"}),i.jsx("li",{children:"Serial Communication"}),i.jsx("li",{children:"State Machine (interaction flow)"}),i.jsx("li",{children:"LED Control (PWM)"}),i.jsx("li",{children:"Printer Driver Integration"})]})]}),i.jsxs("div",{className:"tech-card",children:[i.jsx("h4",{className:"tech-card-title",children:"Fabrication"}),i.jsxs("ul",{className:"tech-list",children:[i.jsx("li",{children:"Laser-cut lamp enclosure"}),i.jsx("li",{children:"3D-printed mounts"}),i.jsx("li",{children:"Wiring & soldering"}),i.jsx("li",{children:"Shredder mechanism retrofit"}),i.jsx("li",{children:"Aesthetic finishing"})]})]})]}),i.jsx("div",{className:"image-placeholder tech-visual",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Technical Diagram / Behind-the-Scenes]"})})]})})}),i.jsx("section",{className:"content-section reveal",style:{paddingBottom:"120px"},children:i.jsx("div",{className:"container",style:{maxWidth:"1200px"},children:i.jsxs("div",{className:"outcome-section",children:[i.jsxs("div",{className:"outcome-header",children:[i.jsx(at,{size:48,color:"hsl(var(--g1))"}),i.jsx("h2",{className:"section-heading",style:{marginBottom:"16px"},children:"Recognition & Impact"}),i.jsx("p",{className:"section-subheading",children:"Award-Winning Demo & Exhibition Selection"})]}),i.jsxs("div",{className:"outcome-grid",children:[i.jsxs("div",{className:"outcome-card featured",children:[i.jsx("div",{className:"outcome-icon award-icon",children:i.jsx(at,{size:50})}),i.jsxs("h3",{className:"outcome-title",children:["🏆 ","Best Demo Award"]}),i.jsx("p",{className:"outcome-text",children:"Recognized as the Best Demo at OpenHCI'25 workshop among all participating teams. The judges praised the project's conceptual depth, technical execution, and compelling user experience within the tight timeline."})]}),i.jsxs("div",{className:"outcome-card",children:[i.jsx("div",{className:"outcome-icon",children:i.jsx(ur,{size:40})}),i.jsxs("h3",{className:"outcome-title",children:["✨ ","Selected for TAICHI Demo"]}),i.jsx("p",{className:"outcome-text",children:"Chosen to be showcased at the prestigious TAICHI Demo exhibition, highlighting innovative HCI research and prototypes."})]}),i.jsxs("div",{className:"outcome-card",children:[i.jsx("div",{className:"outcome-icon",children:i.jsx(Xr,{size:40})}),i.jsx("h3",{className:"outcome-title",children:"Team Collaboration"}),i.jsx("p",{className:"outcome-text",children:"Successfully collaborated in a 5-person team under extreme time pressure, demonstrating effective communication, rapid prototyping, and shared ownership."})]})]}),i.jsx("div",{className:"demo-scene",children:i.jsx("div",{className:"image-placeholder demo-visual",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Group Demo Presentation at TAICHI / OpenHCI]"})})}),i.jsxs("div",{className:"takeaways-section",children:[i.jsx("h3",{className:"takeaways-title",children:"Key Takeaways"}),i.jsxs("div",{className:"takeaways-grid",children:[i.jsxs("div",{className:"takeaway-card",children:[i.jsx("h4",{className:"takeaway-card-title",children:"Rapid Prototyping Mastery"}),i.jsx("p",{className:"takeaway-card-text",children:"Learned to prioritize ruthlessly, iterate quickly, and deliver a polished prototype under intense time constraints."})]}),i.jsxs("div",{className:"takeaway-card",children:[i.jsx("h4",{className:"takeaway-card-title",children:"Tangible Interaction Design"}),i.jsx("p",{className:"takeaway-card-text",children:"Deepened understanding of how physical actions can create meaningful digital experiences and emotional resonance."})]}),i.jsxs("div",{className:"takeaway-card",children:[i.jsx("h4",{className:"takeaway-card-title",children:"Interdisciplinary Collaboration"}),i.jsx("p",{className:"takeaway-card-text",children:"Bridged interaction design, hardware engineering, and software development to bring a complex vision to life."})]})]})]})]})})}),i.jsx("style",{children:`
          /* Hero Section */
          .hero-section {
            padding: 120px 0 80px;
            background: linear-gradient(180deg, rgba(0,0,0,0.02) 0%, transparent 100%);
          }

          .hero-content {
            text-align: center;
            max-width: 900px;
            margin: 0 auto;
          }

          /* Award Badges - Prominent */
          .award-badges {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
            margin-bottom: 32px;
            flex-wrap: wrap;
          }

          .award-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 24px;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            border-radius: var(--radius-lg);
            box-shadow: 0 4px 16px rgba(0,0,0,0.1);
            animation: pulse-glow 2s ease-in-out infinite;
          }

          .award-badge.best-demo {
            background: linear-gradient(135deg, #FFD700, #FFA500);
            color: #000;
          }

          .award-badge.taichi {
            background: linear-gradient(135deg, hsl(var(--g1)), hsl(var(--g2)));
            color: #fff;
          }

          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 4px 16px rgba(0,0,0,0.1); }
            50% { box-shadow: 0 8px 24px rgba(255,215,0,0.4); }
          }

          .hero-title {
            font-size: clamp(40px, 6vw, 64px);
            font-weight: 800;
            line-height: 1.1;
            color: var(--md-on-surface);
            margin-bottom: 24px;
          }

          .hero-subtitle {
            font-size: clamp(18px, 2vw, 22px);
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-bottom: 48px;
          }

          .hero-details {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 32px;
            margin-top: 48px;
            padding-top: 48px;
            border-top: 1px solid rgba(0,0,0,0.06);
          }

          .detail-item {
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .detail-label {
            display: block;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--color-text-muted);
          }

          .detail-value {
            display: block;
            font-size: 15px;
            font-weight: 600;
            color: var(--md-on-surface);
          }

          .detail-value.achievement-highlight {
            font-size: 16px;
            color: hsl(var(--g1));
          }

          .detail-sub {
            display: block;
            font-size: 13px;
            color: var(--color-text-muted);
          }

          /* Workshop Context Highlight */
          .workshop-context {
            display: flex;
            align-items: flex-start;
            gap: 24px;
            padding: 32px;
            margin-top: 48px;
            background: linear-gradient(135deg, hsl(var(--g1)/.08), hsl(var(--g2)/.08));
            border-left: 4px solid hsl(var(--g1));
            border-radius: var(--radius-lg);
            text-align: left;
          }

          .context-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 56px;
            height: 56px;
            background: linear-gradient(135deg, hsl(var(--g1)), hsl(var(--g2)));
            border-radius: 50%;
            color: #fff;
            flex-shrink: 0;
          }

          .context-content {
            flex: 1;
          }

          .context-title {
            font-size: 20px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 8px;
          }

          .context-text {
            font-size: 15px;
            line-height: 1.7;
            color: var(--color-text-muted);
          }

          /* Content Sections */
          .content-section {
            padding: 80px 0;
          }

          .section-heading {
            font-size: clamp(32px, 4vw, 48px);
            font-weight: 700;
            color: var(--md-on-surface);
            margin-bottom: 16px;
          }

          .section-subheading {
            font-size: clamp(16px, 2vw, 20px);
            color: var(--color-text-muted);
            margin-bottom: 32px;
          }

          .body-text {
            font-size: 16px;
            line-height: 1.8;
            color: var(--color-text-muted);
            margin-bottom: 24px;
          }

          .body-text-large {
            font-size: 20px;
            line-height: 1.7;
            color: var(--md-on-surface);
            font-weight: 500;
            margin-bottom: 48px;
          }

          /* Overview */
          .overview-intro {
            text-align: center;
            max-width: 900px;
            margin: 0 auto 64px;
          }

          /* Concept Cards */
          .concept-cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
            margin-top: 48px;
          }

          .concept-card {
            padding: 32px 24px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
            text-align: center;
            transition: transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1);
          }

          .concept-card:hover {
            transform: translateY(-4px);
          }

          .concept-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 64px;
            height: 64px;
            background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1));
            border-radius: 50%;
            margin-bottom: 24px;
            color: hsl(var(--g1));
          }

          .concept-card:nth-child(2) .concept-icon {
            background: linear-gradient(135deg, hsl(var(--g2)/.1), hsl(var(--g3)/.1));
            color: hsl(var(--g2));
          }

          .concept-card:nth-child(3) .concept-icon {
            background: linear-gradient(135deg, hsl(var(--g3)/.1), hsl(var(--g4)/.1));
            color: hsl(var(--g3));
          }

          .concept-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 12px;
          }

          .concept-desc {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          /* Subsections */
          .subsection {
            margin-bottom: 64px;
          }

          .subsection-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 24px;
          }

          .subsection-title {
            font-size: 28px;
            font-weight: 600;
            color: var(--md-on-surface);
          }

          /* Two Column Layout */
          .two-column-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            align-items: start;
          }

          /* Challenge List */
          .challenge-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-top: 24px;
          }

          .challenge-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
          }

          .challenge-bullet {
            width: 8px;
            height: 8px;
            background: hsl(var(--g3));
            border-radius: 50%;
            margin-top: 8px;
            flex-shrink: 0;
          }

          .challenge-bullet.urgent {
            background: hsl(var(--g1));
          }

          .challenge-item span {
            font-size: 15px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          .highlight-title {
            font-size: 20px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 12px;
          }

          /* Stat Card */
          .stat-card {
            margin-top: 24px;
            padding: 32px;
            background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1));
            border: 2px solid hsl(var(--g1)/.3);
            border-radius: var(--radius-lg);
            text-align: center;
          }

          .stat-number {
            font-size: 72px;
            font-weight: 900;
            line-height: 1;
            background: linear-gradient(135deg, hsl(var(--g1)), hsl(var(--g2)));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 8px;
          }

          .stat-label {
            font-size: 16px;
            font-weight: 600;
            color: var(--md-on-surface);
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          /* Concept Explanation */
          .concept-explanation {
            margin-bottom: 48px;
          }

          .concept-highlight {
            display: flex;
            align-items: flex-start;
            gap: 24px;
            padding: 32px;
            background: linear-gradient(135deg, hsl(var(--g3)/.05), hsl(var(--g4)/.05));
            border-left: 4px solid hsl(var(--g3));
            border-radius: var(--radius-lg);
            margin-top: 32px;
          }

          .highlight-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 64px;
            height: 64px;
            background: linear-gradient(135deg, hsl(var(--g3)/.2), hsl(var(--g4)/.2));
            border-radius: 50%;
            color: hsl(var(--g3));
            flex-shrink: 0;
          }

          .highlight-content {
            flex: 1;
          }

          /* Visual Showcase */
          .visual-showcase {
            margin: 48px 0;
          }

          /* Interaction Steps */
          .interaction-steps {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }

          .step-card {
            padding: 32px 24px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
            text-align: center;
          }

          .step-number {
            display: inline-block;
            font-size: 18px;
            font-weight: 800;
            color: hsl(var(--g1));
            background: hsl(var(--g1)/.1);
            padding: 8px 16px;
            border-radius: var(--radius-sm);
            margin-bottom: 16px;
          }

          .step-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1));
            border-radius: 50%;
            margin-bottom: 24px;
            color: hsl(var(--g1));
          }

          .step-card:nth-child(2) .step-number {
            color: hsl(var(--g2));
            background: hsl(var(--g2)/.1);
          }

          .step-card:nth-child(2) .step-icon {
            background: linear-gradient(135deg, hsl(var(--g2)/.1), hsl(var(--g3)/.1));
            color: hsl(var(--g2));
          }

          .step-card:nth-child(3) .step-number {
            color: hsl(var(--g3));
            background: hsl(var(--g3)/.1);
          }

          .step-card:nth-child(3) .step-icon {
            background: linear-gradient(135deg, hsl(var(--g3)/.1), hsl(var(--g4)/.1));
            color: hsl(var(--g3));
          }

          .step-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 12px;
          }

          .step-description {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-bottom: 20px;
          }

          /* Technical Grid */
          .tech-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
            margin-bottom: 48px;
          }

          .tech-card {
            padding: 32px 24px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
          }

          .tech-card-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 16px;
            padding-bottom: 12px;
            border-bottom: 2px solid hsl(var(--g1)/.2);
          }

          .tech-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .tech-list li {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-muted);
            padding-left: 20px;
            position: relative;
          }

          .tech-list li::before {
            content: '▸';
            position: absolute;
            left: 0;
            color: hsl(var(--g1));
            font-weight: 600;
          }

          /* Image Placeholders */
          .image-placeholder {
            width: 100%;
            aspect-ratio: 16 / 10;
            border-radius: var(--radius-lg);
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(0,0,0,0.06);
          }

          .image-placeholder.workshop-scene {
            background: linear-gradient(135deg, #f3e5f5, #e1bee7);
          }

          .image-placeholder.concept-visual {
            background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
            aspect-ratio: 21 / 9;
          }

          .image-placeholder.step-visual {
            background: linear-gradient(135deg, #e3f2fd, #bbdefb);
            aspect-ratio: 4 / 3;
            margin-top: 16px;
          }

          .image-placeholder.step-visual.shred {
            background: linear-gradient(135deg, #ffebee, #ffcdd2);
          }

          .image-placeholder.tech-visual {
            background: linear-gradient(135deg, #fff3e0, #ffe0b2);
            aspect-ratio: 16 / 9;
          }

          .image-placeholder.demo-visual {
            background: linear-gradient(135deg, #f1f8e9, #dcedc8);
            aspect-ratio: 16 / 9;
          }

          .placeholder-label {
            font-size: 14px;
            color: rgba(0,0,0,0.3);
            font-weight: 500;
            text-align: center;
            padding: 20px;
          }

          /* Outcome Section */
          .outcome-section {
            text-align: center;
          }

          .outcome-header {
            max-width: 700px;
            margin: 0 auto 48px;
          }

          .outcome-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
            margin-bottom: 64px;
          }

          .outcome-card {
            padding: 40px 24px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
            text-align: center;
          }

          .outcome-card.featured {
            grid-column: span 3;
            background: linear-gradient(135deg, hsl(var(--g1)/.08), hsl(var(--g2)/.08));
            border: 2px solid hsl(var(--g1)/.3);
            padding: 56px 32px;
          }

          .outcome-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1));
            border-radius: 50%;
            margin-bottom: 24px;
            color: hsl(var(--g1));
          }

          .outcome-icon.award-icon {
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, #FFD700, #FFA500);
            color: #000;
          }

          .outcome-title {
            font-size: 20px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 12px;
          }

          .outcome-text {
            font-size: 15px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          /* Demo Scene */
          .demo-scene {
            margin-bottom: 64px;
          }

          /* Takeaways */
          .takeaways-section {
            margin-top: 64px;
          }

          .takeaways-title {
            font-size: 32px;
            font-weight: 700;
            color: var(--md-on-surface);
            margin-bottom: 32px;
          }

          .takeaways-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }

          .takeaway-card {
            padding: 32px 24px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
            text-align: left;
          }

          .takeaway-card-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 12px;
          }

          .takeaway-card-text {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          /* Reveal Animation */
          .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1),
                        transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
          }

          .reveal.in {
            opacity: 1;
            transform: translateY(0);
          }

          /* Responsive Design */
          @media (max-width: 959px) {
            .concept-cards,
            .two-column-layout,
            .interaction-steps,
            .tech-grid,
            .outcome-grid,
            .takeaways-grid {
              grid-template-columns: 1fr;
            }

            .outcome-card.featured {
              grid-column: span 1;
            }

            .workshop-context,
            .concept-highlight {
              flex-direction: column;
              text-align: center;
            }
          }

          @media (max-width: 640px) {
            .hero-section {
              padding: 100px 0 60px;
            }

            .content-section {
              padding: 60px 0;
            }

            .award-badges {
              flex-direction: column;
            }
          }

          /* Reduced Motion */
          @media (prefers-reduced-motion: reduce) {
            .reveal,
            .concept-card,
            .award-badge {
              transition: none !important;
              transform: none !important;
              animation: none !important;
            }

            .reveal {
              opacity: 1;
            }

            .concept-card:hover {
              transform: none !important;
            }
          }
        `})]})})}function YS(){return j.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const r=document.querySelectorAll(".reveal"),a=new IntersectionObserver(o=>{o.forEach(c=>{c.isIntersecting&&c.target.classList.add("in")})},{threshold:.1});return r.forEach(o=>a.observe(o)),()=>a.disconnect()},[]),i.jsx(Wn,{children:i.jsxs("div",{id:"innoconnect-page",children:[i.jsx("section",{className:"hero-section",children:i.jsx("div",{className:"container",style:{maxWidth:"1200px"},children:i.jsxs(ni.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,ease:[.2,.8,.2,1]},className:"hero-content",children:[i.jsx("div",{className:"award-badge-container",children:i.jsxs("div",{className:"gold-award-badge",children:[i.jsx("div",{className:"badge-icon",children:i.jsx(at,{size:28})}),i.jsxs("div",{className:"badge-content",children:[i.jsx("div",{className:"badge-title",children:"🏆 Gold Award Winner"}),i.jsx("div",{className:"badge-subtitle",children:"1st Place / 186 Teams"})]})]})}),i.jsx("h1",{className:"hero-title",children:"Innoconnect | Hi-Life Gift Service Optimization"}),i.jsx("p",{className:"hero-subtitle",children:"Revitalizing the Digital Gifting Experience for a Major Taiwanese Retail Chain"}),i.jsxs("div",{className:"hero-details",children:[i.jsxs("div",{className:"detail-item",children:[i.jsx("span",{className:"detail-label",children:"Timeline"}),i.jsx("span",{className:"detail-value",children:"2024"}),i.jsx("span",{className:"detail-sub",children:"InnoConnect+ Competition"})]}),i.jsxs("div",{className:"detail-item",children:[i.jsx("span",{className:"detail-label",children:"My Role"}),i.jsx("span",{className:"detail-value",children:"UI/UX Designer & Researcher"}),i.jsx("span",{className:"detail-sub",children:'Team "Lai Yi Ka" (萊一咖)'})]}),i.jsxs("div",{className:"detail-item",children:[i.jsx("span",{className:"detail-label",children:"Achievement"}),i.jsxs("span",{className:"detail-value achievement-gold",children:["🏆 ","Gold Award"]}),i.jsx("span",{className:"detail-sub",children:"Selected from 186 Teams"})]})]}),i.jsxs("div",{className:"competition-context",children:[i.jsx("div",{className:"context-icon",children:i.jsx(dr,{size:24})}),i.jsxs("div",{className:"context-content",children:[i.jsx("h3",{className:"context-title",children:"InnoConnect+ 2024 Challenge"}),i.jsx("p",{className:"context-text",children:`Selected as the Gold Award winner among 186 competing teams in the 2024 InnoConnect+ Competition, this project reimagined Hi-Life's "Send a Gift" (來送禮) O2O service through strategic gamification and social features that drove measurable increases in user engagement and conversion rates.`})]})]})]})})}),i.jsx("section",{className:"content-section reveal",children:i.jsxs("div",{className:"container",style:{maxWidth:"1200px"},children:[i.jsxs("div",{className:"overview-intro",children:[i.jsx("h2",{className:"section-heading",children:"Project Overview"}),i.jsx("p",{className:"body-text-large",children:`Hi-Life, one of Taiwan's largest convenience store chains, operates a "Send a Gift" (來送禮) service that allows customers to send gifts through their stores. Despite the convenience, the service suffered from low awareness, complex user flows, and punitive policies that discouraged repeat usage. Our mission was to transform this underutilized service into a compelling social gifting platform.`})]}),i.jsxs("div",{className:"metrics-grid",children:[i.jsxs("div",{className:"metric-card",children:[i.jsx("div",{className:"metric-icon",children:i.jsx(at,{size:40})}),i.jsx("div",{className:"metric-number",children:"1 / 186"}),i.jsx("div",{className:"metric-label",children:"Gold Award Winner"})]}),i.jsxs("div",{className:"metric-card",children:[i.jsx("div",{className:"metric-icon",children:i.jsx(Ki,{size:40})}),i.jsx("div",{className:"metric-number",children:"+35%"}),i.jsx("div",{className:"metric-label",children:"User Willingness (SUS)"})]}),i.jsxs("div",{className:"metric-card",children:[i.jsx("div",{className:"metric-icon",children:i.jsx(Xr,{size:40})}),i.jsx("div",{className:"metric-number",children:"4.8 / 5"}),i.jsx("div",{className:"metric-label",children:"UEQ Satisfaction Score"})]})]})]})}),i.jsx("section",{className:"content-section reveal",style:{background:"linear-gradient(180deg, rgba(255,248,225,0.2) 0%, transparent 100%)"},children:i.jsx("div",{className:"container",style:{maxWidth:"1200px"},children:i.jsxs("div",{className:"subsection",children:[i.jsxs("div",{className:"subsection-header",children:[i.jsx(oo,{size:24,color:"hsl(var(--g1))"}),i.jsx("h3",{className:"subsection-title",children:"The Challenge"})]}),i.jsxs("div",{className:"two-column-layout",children:[i.jsxs("div",{className:"column-content",children:[i.jsx("h4",{className:"highlight-title",children:"Why Wasn't Hi-Life's Gift Service Succeeding?"}),i.jsx("p",{className:"body-text",children:'Through comprehensive user research and competitive analysis, we identified three critical pain points preventing the "Send a Gift" service from reaching its potential. These issues created friction at every stage of the user journey, from awareness to post-purchase experience.'}),i.jsxs("div",{className:"challenge-list",children:[i.jsxs("div",{className:"challenge-item",children:[i.jsx("div",{className:"challenge-bullet problem"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Low Awareness:"}),i.jsx("span",{children:" Most users were unaware the service existed. Marketing was minimal, leading to poor traffic and conversion."})]})]}),i.jsxs("div",{className:"challenge-item",children:[i.jsx("div",{className:"challenge-bullet problem"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Complex User Flow:"}),i.jsx("span",{children:" The gifting process required multiple steps, excessive form inputs, and lacked clear visual guidance."})]})]}),i.jsxs("div",{className:"challenge-item",children:[i.jsx("div",{className:"challenge-bullet problem"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Punitive Policy:"}),i.jsx("span",{children:" If a gift expired unclaimed, users had to pay the price difference to redeem it—discouraging gifting altogether."})]})]})]})]}),i.jsxs("div",{className:"column-media",children:[i.jsx("div",{className:"image-placeholder problem-analysis",children:i.jsx("p",{className:"placeholder-label",children:"[Image: User Journey Pain Points Analysis]"})}),i.jsxs("div",{className:"insight-card",children:[i.jsx("h4",{className:"insight-title",children:"Key Insight"}),i.jsx("p",{className:"insight-text",children:"Users want gifting to feel spontaneous, social, and risk-free—not transactional and complex."})]})]})]})]})})}),i.jsx("section",{className:"content-section reveal",children:i.jsx("div",{className:"container",style:{maxWidth:"1200px"},children:i.jsxs("div",{className:"subsection",children:[i.jsxs("div",{className:"subsection-header",children:[i.jsx(dr,{size:24,color:"hsl(var(--g2))"}),i.jsx("h3",{className:"subsection-title",children:"The Strategy: Gamification + Social Gifting"})]}),i.jsx("p",{className:"body-text",style:{marginBottom:"40px"},children:"We devised a two-pronged approach: attract new users through viral gamified marketing, then convert them into active gifters through social features and simplified flows."}),i.jsxs("div",{className:"strategy-pillars",children:[i.jsxs("div",{className:"pillar-card",children:[i.jsx("div",{className:"pillar-number",children:"01"}),i.jsx("div",{className:"pillar-icon",children:i.jsx(dr,{size:36})}),i.jsx("h4",{className:"pillar-title",children:"Gamified Marketing"}),i.jsx("p",{className:"pillar-desc",children:"Psychological personality tests to match users with coffee flavors, driving viral traffic and brand awareness."})]}),i.jsxs("div",{className:"pillar-card",children:[i.jsx("div",{className:"pillar-number",children:"02"}),i.jsx("div",{className:"pillar-icon",children:i.jsx(Qa,{size:36})}),i.jsx("h4",{className:"pillar-title",children:"Social Gifting Features"}),i.jsx("p",{className:"pillar-desc",children:"Wishlist (許願池) and interactive gift cards that encourage sharing and gift requests among friends."})]}),i.jsxs("div",{className:"pillar-card",children:[i.jsx("div",{className:"pillar-number",children:"03"}),i.jsx("div",{className:"pillar-icon",children:i.jsx(ar,{size:36})}),i.jsx("h4",{className:"pillar-title",children:"Flow Optimization"}),i.jsx("p",{className:"pillar-desc",children:"Removed price penalties, streamlined checkout, and added clear visual guidance throughout the journey."})]})]})]})})}),i.jsx("section",{className:"content-section reveal",style:{background:"linear-gradient(180deg, rgba(227,242,253,0.2) 0%, transparent 100%)"},children:i.jsx("div",{className:"container",style:{maxWidth:"1200px"},children:i.jsxs("div",{className:"subsection",children:[i.jsxs("div",{className:"subsection-header",children:[i.jsx(dr,{size:24,color:"hsl(var(--g3))"}),i.jsx("h3",{className:"subsection-title",children:"Solution #1: Psychological Test (心理測驗)"})]}),i.jsxs("div",{className:"solution-explanation",children:[i.jsx("h4",{className:"highlight-title",children:"Driving Traffic Through Viral Gamification"}),i.jsx("p",{className:"body-text",children:"We created a personality-driven psychological test that matches users with coffee flavors based on their traits. This shareable, fun experience serves as a low-friction entry point to the gifting service, turning casual browsers into engaged users."}),i.jsxs("div",{className:"feature-highlights",children:[i.jsxs("div",{className:"feature-item",children:[i.jsx(ar,{size:20,color:"hsl(var(--g3))"}),i.jsx("span",{children:"Personality-to-product matching algorithm"})]}),i.jsxs("div",{className:"feature-item",children:[i.jsx(ar,{size:20,color:"hsl(var(--g3))"}),i.jsx("span",{children:"Social sharing hooks (viral loop)"})]}),i.jsxs("div",{className:"feature-item",children:[i.jsx(ar,{size:20,color:"hsl(var(--g3))"}),i.jsx("span",{children:"Seamless transition to product purchase"})]})]})]}),i.jsx("div",{className:"visual-showcase",children:i.jsx("div",{className:"image-placeholder psychological-test",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Psychological Test UI Flow & Results Screen]"})})}),i.jsxs("div",{className:"design-details-grid",children:[i.jsx("div",{className:"image-placeholder test-step",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Question Screen]"})}),i.jsx("div",{className:"image-placeholder test-step",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Result & Coffee Match]"})}),i.jsx("div",{className:"image-placeholder test-step",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Share to Social Media]"})})]})]})})}),i.jsx("section",{className:"content-section reveal",children:i.jsx("div",{className:"container",style:{maxWidth:"1200px"},children:i.jsxs("div",{className:"subsection",children:[i.jsxs("div",{className:"subsection-header",children:[i.jsx(Qa,{size:24,color:"hsl(var(--g4))"}),i.jsx("h3",{className:"subsection-title",children:"Solution #2: Wishlist & Social Gifting (許願池)"})]}),i.jsxs("div",{className:"solution-explanation",children:[i.jsx("h4",{className:"highlight-title",children:"Turning Gifting Into a Social Activity"}),i.jsx("p",{className:"body-text",children:"The Wishlist feature allows users to create and share gift requests with friends. Instead of guessing what someone wants, senders can browse their friends' wishlists and send meaningful gifts. Recipients can also send interactive gift cards, increasing engagement and virality."}),i.jsxs("div",{className:"feature-grid",children:[i.jsxs("div",{className:"feature-card",children:[i.jsx("div",{className:"feature-icon",children:i.jsx(eN,{size:32})}),i.jsx("h5",{className:"feature-title",children:"Personal Wishlist"}),i.jsx("p",{className:"feature-text",children:"Users curate gift requests that friends can easily fulfill."})]}),i.jsxs("div",{className:"feature-card",children:[i.jsx("div",{className:"feature-icon",children:i.jsx(Xr,{size:32})}),i.jsx("h5",{className:"feature-title",children:"Friend Discovery"}),i.jsx("p",{className:"feature-text",children:"Browse wishlists of friends and discover gift opportunities."})]}),i.jsxs("div",{className:"feature-card",children:[i.jsx("div",{className:"feature-icon",children:i.jsx(dr,{size:32})}),i.jsx("h5",{className:"feature-title",children:"Interactive Cards"}),i.jsx("p",{className:"feature-text",children:"Recipients send shareable gift cards to encourage friends to send gifts."})]})]})]}),i.jsx("div",{className:"visual-showcase",children:i.jsx("div",{className:"image-placeholder wishlist-ui",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Wishlist Interface & Social Features]"})})})]})})}),i.jsx("section",{className:"content-section reveal",style:{background:"linear-gradient(180deg, rgba(255,248,225,0.2) 0%, transparent 100%)"},children:i.jsx("div",{className:"container",style:{maxWidth:"1200px"},children:i.jsxs("div",{className:"subsection",children:[i.jsxs("div",{className:"subsection-header",children:[i.jsx(Ki,{size:24,color:"hsl(var(--g1))"}),i.jsx("h3",{className:"subsection-title",children:"Solution #3: Flow Optimization & Policy Changes"})]}),i.jsxs("div",{className:"solution-explanation",children:[i.jsx("h4",{className:"highlight-title",children:"Removing Friction, Eliminating Penalties"}),i.jsx("p",{className:"body-text",children:"We redesigned the entire gifting flow to reduce cognitive load and eliminate punitive policies. The new checkout process is 40% faster, requires fewer inputs, and removes the price difference penalty that discouraged gifting."})]}),i.jsxs("div",{className:"comparison-container",children:[i.jsxs("div",{className:"comparison-side old",children:[i.jsx("div",{className:"comparison-label",children:"Before"}),i.jsx("div",{className:"image-placeholder old-flow",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Old Gifting Flow]"})}),i.jsxs("ul",{className:"comparison-list",children:[i.jsx("li",{children:"7-step checkout process"}),i.jsx("li",{children:"Price penalty on expiration"}),i.jsx("li",{children:"Confusing form inputs"}),i.jsx("li",{children:"No visual progress indicator"})]})]}),i.jsx("div",{className:"comparison-arrow",children:i.jsx(Ki,{size:32})}),i.jsxs("div",{className:"comparison-side new",children:[i.jsx("div",{className:"comparison-label new-label",children:"After"}),i.jsx("div",{className:"image-placeholder new-flow",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Optimized Gifting Flow]"})}),i.jsxs("ul",{className:"comparison-list",children:[i.jsx("li",{children:"4-step streamlined checkout"}),i.jsx("li",{children:"No penalty policy removed"}),i.jsx("li",{children:"Auto-fill & smart defaults"}),i.jsx("li",{children:"Clear progress stepper"})]})]})]}),i.jsxs("div",{className:"improvements-grid",children:[i.jsxs("div",{className:"improvement-card",children:[i.jsx("div",{className:"improvement-number",children:"-40%"}),i.jsx("div",{className:"improvement-label",children:"Checkout Time"})]}),i.jsxs("div",{className:"improvement-card",children:[i.jsx("div",{className:"improvement-number",children:"-60%"}),i.jsx("div",{className:"improvement-label",children:"Form Fields"})]}),i.jsxs("div",{className:"improvement-card",children:[i.jsx("div",{className:"improvement-number",children:"100%"}),i.jsx("div",{className:"improvement-label",children:"Penalty Removed"})]})]})]})})}),i.jsx("section",{className:"content-section reveal",children:i.jsx("div",{className:"container",style:{maxWidth:"1200px"},children:i.jsxs("div",{className:"subsection",children:[i.jsxs("div",{className:"subsection-header",children:[i.jsx(fm,{size:24,color:"hsl(var(--g2))"}),i.jsx("h3",{className:"subsection-title",children:"Validation: Usability Testing (SUS & UEQ)"})]}),i.jsxs("div",{className:"validation-explanation",children:[i.jsx("h4",{className:"highlight-title",children:"Data-Driven Success Metrics"}),i.jsx("p",{className:"body-text",children:"We conducted comprehensive usability testing using the System Usability Scale (SUS) and User Experience Questionnaire (UEQ) to measure the impact of our redesign. The results confirmed significant improvements in user willingness, satisfaction, and overall experience."})]}),i.jsxs("div",{className:"testing-results",children:[i.jsxs("div",{className:"result-card sus",children:[i.jsx("div",{className:"result-header",children:i.jsx("h5",{className:"result-title",children:"System Usability Scale (SUS)"})}),i.jsxs("div",{className:"result-metric",children:[i.jsx("div",{className:"result-number",children:"+35%"}),i.jsx("div",{className:"result-label",children:"Increase in User Willingness"})]}),i.jsx("div",{className:"image-placeholder sus-chart",children:i.jsx("p",{className:"placeholder-label",children:"[Image: SUS Score Comparison Chart]"})})]}),i.jsxs("div",{className:"result-card ueq",children:[i.jsx("div",{className:"result-header",children:i.jsx("h5",{className:"result-title",children:"User Experience Questionnaire (UEQ)"})}),i.jsxs("div",{className:"result-metric",children:[i.jsx("div",{className:"result-number",children:"4.8 / 5"}),i.jsx("div",{className:"result-label",children:"Overall Satisfaction Score"})]}),i.jsx("div",{className:"image-placeholder ueq-chart",children:i.jsx("p",{className:"placeholder-label",children:"[Image: UEQ Dimension Scores (Attractiveness, Efficiency, etc.)]"})})]})]}),i.jsxs("div",{className:"findings-grid",children:[i.jsxs("div",{className:"finding-card",children:[i.jsx(ar,{size:24,color:"hsl(var(--g1))"}),i.jsx("p",{className:"finding-text",children:'Users found the psychological test "fun and shareable," driving organic traffic.'})]}),i.jsxs("div",{className:"finding-card",children:[i.jsx(ar,{size:24,color:"hsl(var(--g2))"}),i.jsx("p",{className:"finding-text",children:"Wishlist feature increased gift-sending intent by enabling easier gift discovery."})]}),i.jsxs("div",{className:"finding-card",children:[i.jsx(ar,{size:24,color:"hsl(var(--g3))"}),i.jsx("p",{className:"finding-text",children:"Removing the price penalty policy eliminated user anxiety and boosted trust."})]})]})]})})}),i.jsx("section",{className:"content-section reveal",style:{paddingBottom:"120px"},children:i.jsx("div",{className:"container",style:{maxWidth:"1200px"},children:i.jsxs("div",{className:"outcome-section",children:[i.jsxs("div",{className:"outcome-header",children:[i.jsx(at,{size:48,color:"hsl(var(--g1))"}),i.jsx("h2",{className:"section-heading",style:{marginBottom:"16px"},children:"Recognition & Impact"}),i.jsx("p",{className:"section-subheading",children:"Gold Award Winner & Measurable Business Impact"})]}),i.jsxs("div",{className:"outcome-grid",children:[i.jsxs("div",{className:"outcome-card featured",children:[i.jsx("div",{className:"outcome-icon gold-icon",children:i.jsx(at,{size:50})}),i.jsxs("h3",{className:"outcome-title",children:["🏆 ","InnoConnect+ Gold Award"]}),i.jsx("p",{className:"outcome-text",children:"Selected as the 1st place winner among 186 competing teams in the 2024 InnoConnect+ Competition. The judges recognized the project's strategic gamification, user-centered design, and measurable impact on conversion metrics."})]}),i.jsxs("div",{className:"outcome-card",children:[i.jsx("div",{className:"outcome-icon",children:i.jsx(Ki,{size:40})}),i.jsx("h3",{className:"outcome-title",children:"Increased User Engagement"}),i.jsx("p",{className:"outcome-text",children:"The psychological test campaign and wishlist features drove significant increases in user acquisition and repeat gifting behavior."})]}),i.jsxs("div",{className:"outcome-card",children:[i.jsx("div",{className:"outcome-icon",children:i.jsx(fm,{size:40})}),i.jsx("h3",{className:"outcome-title",children:"Validated by Research"}),i.jsx("p",{className:"outcome-text",children:"SUS and UEQ testing confirmed 35% improvement in user willingness and 4.8/5 satisfaction score, validating our design decisions."})]})]}),i.jsxs("div",{className:"takeaways-section",children:[i.jsx("h3",{className:"takeaways-title",children:"Key Takeaways"}),i.jsxs("div",{className:"takeaways-grid",children:[i.jsxs("div",{className:"takeaway-card",children:[i.jsx("h4",{className:"takeaway-card-title",children:"Gamification Drives Acquisition"}),i.jsx("p",{className:"takeaway-card-text",children:"Fun, shareable experiences can turn passive browsers into active users by lowering the entry barrier."})]}),i.jsxs("div",{className:"takeaway-card",children:[i.jsx("h4",{className:"takeaway-card-title",children:"Social Features Create Loops"}),i.jsx("p",{className:"takeaway-card-text",children:"Wishlists and interactive cards transform gifting from a one-time transaction into a repeatable social behavior."})]}),i.jsxs("div",{className:"takeaway-card",children:[i.jsx("h4",{className:"takeaway-card-title",children:"Remove Friction, Not Features"}),i.jsx("p",{className:"takeaway-card-text",children:"Simplifying flows and eliminating punitive policies can dramatically improve conversion without adding complexity."})]})]})]})]})})}),i.jsx("style",{children:`
          /* Hero Section */
          .hero-section {
            padding: 120px 0 80px;
            background: linear-gradient(180deg, rgba(0,0,0,0.02) 0%, transparent 100%);
          }

          .hero-content {
            text-align: center;
            max-width: 900px;
            margin: 0 auto;
          }

          /* Gold Award Badge - Ultra Prominent */
          .award-badge-container {
            display: flex;
            justify-content: center;
            margin-bottom: 32px;
          }

          .gold-award-badge {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 16px 32px;
            background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
            border-radius: var(--radius-lg);
            box-shadow: 0 8px 32px rgba(255, 215, 0, 0.4);
            animation: gold-pulse 3s ease-in-out infinite;
          }

          @keyframes gold-pulse {
            0%, 100% { 
              box-shadow: 0 8px 32px rgba(255, 215, 0, 0.4);
              transform: scale(1);
            }
            50% { 
              box-shadow: 0 12px 48px rgba(255, 215, 0, 0.6);
              transform: scale(1.02);
            }
          }

          .badge-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 56px;
            height: 56px;
            background: rgba(0, 0, 0, 0.1);
            border-radius: 50%;
            color: #000;
          }

          .badge-content {
            text-align: left;
          }

          .badge-title {
            font-size: 18px;
            font-weight: 800;
            color: #000;
            line-height: 1.2;
            letter-spacing: 0.5px;
          }

          .badge-subtitle {
            font-size: 14px;
            font-weight: 600;
            color: rgba(0, 0, 0, 0.7);
            margin-top: 4px;
          }

          .hero-title {
            font-size: clamp(36px, 5vw, 56px);
            font-weight: 800;
            line-height: 1.1;
            color: var(--md-on-surface);
            margin-bottom: 24px;
          }

          .hero-subtitle {
            font-size: clamp(18px, 2vw, 22px);
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-bottom: 48px;
          }

          .hero-details {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 32px;
            margin-top: 48px;
            padding-top: 48px;
            border-top: 1px solid rgba(0,0,0,0.06);
          }

          .detail-item {
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .detail-label {
            display: block;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--color-text-muted);
          }

          .detail-value {
            display: block;
            font-size: 15px;
            font-weight: 600;
            color: var(--md-on-surface);
          }

          .detail-value.achievement-gold {
            font-size: 16px;
            color: #FFA500;
            font-weight: 700;
          }

          .detail-sub {
            display: block;
            font-size: 13px;
            color: var(--color-text-muted);
          }

          /* Competition Context */
          .competition-context {
            display: flex;
            align-items: flex-start;
            gap: 24px;
            padding: 32px;
            margin-top: 48px;
            background: linear-gradient(135deg, hsl(var(--g1)/.08), hsl(var(--g2)/.08));
            border-left: 4px solid hsl(var(--g1));
            border-radius: var(--radius-lg);
            text-align: left;
          }

          .context-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 56px;
            height: 56px;
            background: linear-gradient(135deg, hsl(var(--g1)), hsl(var(--g2)));
            border-radius: 50%;
            color: #fff;
            flex-shrink: 0;
          }

          .context-content {
            flex: 1;
          }

          .context-title {
            font-size: 20px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 8px;
          }

          .context-text {
            font-size: 15px;
            line-height: 1.7;
            color: var(--color-text-muted);
          }

          /* Content Sections */
          .content-section {
            padding: 80px 0;
          }

          .section-heading {
            font-size: clamp(32px, 4vw, 48px);
            font-weight: 700;
            color: var(--md-on-surface);
            margin-bottom: 16px;
          }

          .section-subheading {
            font-size: clamp(16px, 2vw, 20px);
            color: var(--color-text-muted);
            margin-bottom: 32px;
          }

          .body-text {
            font-size: 16px;
            line-height: 1.8;
            color: var(--color-text-muted);
            margin-bottom: 24px;
          }

          .body-text-large {
            font-size: 20px;
            line-height: 1.7;
            color: var(--md-on-surface);
            font-weight: 500;
            margin-bottom: 48px;
          }

          /* Overview */
          .overview-intro {
            text-align: center;
            max-width: 900px;
            margin: 0 auto 64px;
          }

          /* Metrics Grid */
          .metrics-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }

          .metric-card {
            padding: 32px 24px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
            text-align: center;
          }

          .metric-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 64px;
            height: 64px;
            background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1));
            border-radius: 50%;
            margin-bottom: 16px;
            color: hsl(var(--g1));
          }

          .metric-number {
            font-size: 36px;
            font-weight: 800;
            line-height: 1;
            background: linear-gradient(135deg, hsl(var(--g1)), hsl(var(--g2)));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 8px;
          }

          .metric-label {
            font-size: 14px;
            font-weight: 600;
            color: var(--md-on-surface);
          }

          /* Subsections */
          .subsection {
            margin-bottom: 64px;
          }

          .subsection-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 24px;
          }

          .subsection-title {
            font-size: 28px;
            font-weight: 600;
            color: var(--md-on-surface);
          }

          /* Two Column Layout */
          .two-column-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            align-items: start;
          }

          /* Challenge List */
          .challenge-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-top: 24px;
          }

          .challenge-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
          }

          .challenge-bullet {
            width: 8px;
            height: 8px;
            background: hsl(var(--g3));
            border-radius: 50%;
            margin-top: 8px;
            flex-shrink: 0;
          }

          .challenge-bullet.problem {
            background: #ef4444;
          }

          .challenge-item div {
            font-size: 15px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          .highlight-title {
            font-size: 20px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 12px;
          }

          /* Insight Card */
          .insight-card {
            margin-top: 24px;
            padding: 24px;
            background: linear-gradient(135deg, hsl(var(--g3)/.08), hsl(var(--g4)/.08));
            border-left: 4px solid hsl(var(--g3));
            border-radius: var(--radius-lg);
          }

          .insight-title {
            font-size: 16px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 8px;
          }

          .insight-text {
            font-size: 15px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          /* Strategy Pillars */
          .strategy-pillars {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }

          .pillar-card {
            padding: 32px 24px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
            text-align: center;
          }

          .pillar-number {
            display: inline-block;
            font-size: 16px;
            font-weight: 800;
            color: hsl(var(--g1));
            background: hsl(var(--g1)/.1);
            padding: 6px 14px;
            border-radius: var(--radius-sm);
            margin-bottom: 16px;
          }

          .pillar-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 72px;
            height: 72px;
            background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1));
            border-radius: 50%;
            margin-bottom: 20px;
            color: hsl(var(--g1));
          }

          .pillar-card:nth-child(2) .pillar-number {
            color: hsl(var(--g2));
            background: hsl(var(--g2)/.1);
          }

          .pillar-card:nth-child(2) .pillar-icon {
            background: linear-gradient(135deg, hsl(var(--g2)/.1), hsl(var(--g3)/.1));
            color: hsl(var(--g2));
          }

          .pillar-card:nth-child(3) .pillar-number {
            color: hsl(var(--g3));
            background: hsl(var(--g3)/.1);
          }

          .pillar-card:nth-child(3) .pillar-icon {
            background: linear-gradient(135deg, hsl(var(--g3)/.1), hsl(var(--g4)/.1));
            color: hsl(var(--g3));
          }

          .pillar-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 12px;
          }

          .pillar-desc {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          /* Solution Explanation */
          .solution-explanation {
            margin-bottom: 48px;
          }

          /* Feature Highlights */
          .feature-highlights {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 24px;
          }

          .feature-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
          }

          .feature-item svg {
            flex-shrink: 0;
            margin-top: 2px;
          }

          .feature-item span {
            font-size: 15px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          /* Feature Grid */
          .feature-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-top: 32px;
          }

          .feature-card {
            padding: 24px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
            text-align: center;
          }

          .feature-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 64px;
            height: 64px;
            background: linear-gradient(135deg, hsl(var(--g4)/.1), hsl(var(--g1)/.1));
            border-radius: 50%;
            margin-bottom: 16px;
            color: hsl(var(--g4));
          }

          .feature-title {
            font-size: 16px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 8px;
          }

          .feature-text {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          /* Visual Showcase */
          .visual-showcase {
            margin: 48px 0;
          }

          /* Design Details Grid */
          .design-details-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-top: 32px;
          }

          /* Comparison Container */
          .comparison-container {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            gap: 32px;
            align-items: center;
            margin-top: 32px;
          }

          .comparison-side {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .comparison-label {
            font-size: 16px;
            font-weight: 600;
            color: var(--md-on-surface);
            padding: 8px 16px;
            background: rgba(0,0,0,0.05);
            border-radius: var(--radius-sm);
            text-align: center;
          }

          .comparison-label.new-label {
            background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1));
            color: hsl(var(--g1));
          }

          .comparison-arrow {
            display: flex;
            align-items: center;
            justify-content: center;
            color: hsl(var(--g1));
          }

          .comparison-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .comparison-list li {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-muted);
            padding-left: 20px;
            position: relative;
          }

          .comparison-list li::before {
            content: '•';
            position: absolute;
            left: 0;
            color: hsl(var(--g1));
          }

          /* Improvements Grid */
          .improvements-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-top: 32px;
          }

          .improvement-card {
            padding: 24px;
            background: linear-gradient(135deg, hsl(var(--g1)/.05), hsl(var(--g2)/.05));
            border: 2px solid hsl(var(--g1)/.2);
            border-radius: var(--radius-lg);
            text-align: center;
          }

          .improvement-number {
            font-size: 40px;
            font-weight: 900;
            line-height: 1;
            background: linear-gradient(135deg, hsl(var(--g1)), hsl(var(--g2)));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 8px;
          }

          .improvement-label {
            font-size: 14px;
            font-weight: 600;
            color: var(--md-on-surface);
          }

          /* Validation */
          .validation-explanation {
            margin-bottom: 48px;
          }

          /* Testing Results */
          .testing-results {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
            margin-top: 32px;
          }

          .result-card {
            padding: 32px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
          }

          .result-header {
            margin-bottom: 24px;
          }

          .result-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--md-on-surface);
          }

          .result-metric {
            text-align: center;
            margin-bottom: 24px;
          }

          .result-number {
            font-size: 48px;
            font-weight: 900;
            line-height: 1;
            background: linear-gradient(135deg, hsl(var(--g1)), hsl(var(--g2)));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 8px;
          }

          .result-label {
            font-size: 14px;
            font-weight: 600;
            color: var(--md-on-surface);
          }

          /* Findings Grid */
          .findings-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-top: 32px;
          }

          .finding-card {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 20px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
          }

          .finding-card svg {
            flex-shrink: 0;
            margin-top: 2px;
          }

          .finding-text {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          /* Image Placeholders */
          .image-placeholder {
            width: 100%;
            aspect-ratio: 16 / 10;
            border-radius: var(--radius-lg);
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(0,0,0,0.06);
          }

          .image-placeholder.problem-analysis {
            background: linear-gradient(135deg, #ffebee, #ffcdd2);
          }

          .image-placeholder.psychological-test {
            background: linear-gradient(135deg, #f3e5f5, #e1bee7);
            aspect-ratio: 21 / 9;
          }

          .image-placeholder.test-step {
            background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
            aspect-ratio: 3 / 4;
          }

          .image-placeholder.wishlist-ui {
            background: linear-gradient(135deg, #e3f2fd, #bbdefb);
            aspect-ratio: 21 / 9;
          }

          .image-placeholder.old-flow {
            background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
          }

          .image-placeholder.new-flow {
            background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
          }

          .image-placeholder.sus-chart,
          .image-placeholder.ueq-chart {
            background: linear-gradient(135deg, #fff3e0, #ffe0b2);
            aspect-ratio: 16 / 9;
          }

          .placeholder-label {
            font-size: 14px;
            color: rgba(0,0,0,0.3);
            font-weight: 500;
            text-align: center;
            padding: 20px;
          }

          /* Outcome Section */
          .outcome-section {
            text-align: center;
          }

          .outcome-header {
            max-width: 700px;
            margin: 0 auto 48px;
          }

          .outcome-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
            margin-bottom: 64px;
          }

          .outcome-card {
            padding: 40px 24px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
            text-align: center;
          }

          .outcome-card.featured {
            grid-column: span 3;
            background: linear-gradient(135deg, rgba(255,215,0,0.08), rgba(255,165,0,0.08));
            border: 2px solid rgba(255,215,0,0.3);
            padding: 56px 32px;
          }

          .outcome-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1));
            border-radius: 50%;
            margin-bottom: 24px;
            color: hsl(var(--g1));
          }

          .outcome-icon.gold-icon {
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, #FFD700, #FFA500);
            color: #000;
          }

          .outcome-title {
            font-size: 20px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 12px;
          }

          .outcome-text {
            font-size: 15px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          /* Takeaways */
          .takeaways-section {
            margin-top: 64px;
          }

          .takeaways-title {
            font-size: 32px;
            font-weight: 700;
            color: var(--md-on-surface);
            margin-bottom: 32px;
          }

          .takeaways-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }

          .takeaway-card {
            padding: 32px 24px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
            text-align: left;
          }

          .takeaway-card-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 12px;
          }

          .takeaway-card-text {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          /* Reveal Animation */
          .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1),
                        transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
          }

          .reveal.in {
            opacity: 1;
            transform: translateY(0);
          }

          /* Responsive Design */
          @media (max-width: 959px) {
            .metrics-grid,
            .two-column-layout,
            .strategy-pillars,
            .design-details-grid,
            .feature-grid,
            .comparison-container,
            .improvements-grid,
            .testing-results,
            .findings-grid,
            .outcome-grid,
            .takeaways-grid {
              grid-template-columns: 1fr;
            }

            .comparison-arrow {
              transform: rotate(90deg);
            }

            .outcome-card.featured {
              grid-column: span 1;
            }

            .competition-context,
            .insight-card {
              flex-direction: column;
              text-align: center;
            }
          }

          @media (max-width: 640px) {
            .hero-section {
              padding: 100px 0 60px;
            }

            .content-section {
              padding: 60px 0;
            }

            .gold-award-badge {
              flex-direction: column;
              text-align: center;
            }
          }

          /* Reduced Motion */
          @media (prefers-reduced-motion: reduce) {
            .reveal,
            .gold-award-badge {
              transition: none !important;
              transform: none !important;
              animation: none !important;
            }

            .reveal {
              opacity: 1;
            }
          }
        `})]})})}function qS(){return j.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const r=document.querySelectorAll(".reveal"),a=new IntersectionObserver(o=>{o.forEach(c=>{c.isIntersecting&&c.target.classList.add("in")})},{threshold:.1});return r.forEach(o=>a.observe(o)),()=>a.disconnect()},[]),i.jsx(Wn,{children:i.jsxs("div",{id:"times-awards-page",children:[i.jsx("section",{className:"hero-section",children:i.jsx("div",{className:"container",style:{maxWidth:"1200px"},children:i.jsxs(ni.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,ease:[.2,.8,.2,1]},className:"hero-content",children:[i.jsxs("div",{className:"award-badges-container",children:[i.jsxs("div",{className:"bronze-award-badge",children:[i.jsx("div",{className:"badge-icon",children:i.jsx(at,{size:24})}),i.jsxs("div",{className:"badge-content",children:[i.jsx("div",{className:"badge-title",children:"🥉 3rd Place Winner"}),i.jsx("div",{className:"badge-subtitle",children:"Video Category - National"})]})]}),i.jsxs("div",{className:"shortlist-badge",children:[i.jsx(ur,{size:20}),i.jsx("span",{children:"✨ 3x Shortlisted Works"})]})]}),i.jsx("h1",{className:"hero-title",children:"2025 34th Times Young Creative Awards"}),i.jsx("p",{className:"hero-subtitle",children:"Yung Ching Housing Employer Branding Campaign"}),i.jsxs("div",{className:"hero-details",children:[i.jsxs("div",{className:"detail-item",children:[i.jsx("span",{className:"detail-label",children:"Timeline"}),i.jsx("span",{className:"detail-value",children:"2024"}),i.jsx("span",{className:"detail-sub",children:"Times Young Creative Awards"})]}),i.jsxs("div",{className:"detail-item",children:[i.jsx("span",{className:"detail-label",children:"My Role"}),i.jsx("span",{className:"detail-value",children:"Creative Strategy, Copywriting"}),i.jsx("span",{className:"detail-sub",children:"Multimedia Design"})]}),i.jsxs("div",{className:"detail-item",children:[i.jsx("span",{className:"detail-label",children:"Team"}),i.jsx("span",{className:"detail-value",children:"4 Members"}),i.jsx("span",{className:"detail-sub",children:"Chi-Yun Chien, Po-Yu Chen, He-Chi Wang, Yun-Rou Chang"})]}),i.jsxs("div",{className:"detail-item",children:[i.jsx("span",{className:"detail-label",children:"Recognition"}),i.jsxs("span",{className:"detail-value bronze-highlight",children:["🥉 ","3rd Place"]}),i.jsxs("span",{className:"detail-sub",children:["+ ","3 Shortlisted Works"]})]})]}),i.jsxs("div",{className:"campaign-context",children:[i.jsx("div",{className:"context-icon",children:i.jsx(dr,{size:24})}),i.jsxs("div",{className:"context-content",children:[i.jsx("h3",{className:"context-title",children:"Multi-Channel Employer Branding Campaign"}),i.jsx("p",{className:"context-text",children:'A comprehensive campaign for Yung Ching Housing that reimagined job hunting as a "Career Gashapon" experience. The project won 3rd place nationally in the video category and had three additional works shortlisted across interactive and audio formats, demonstrating excellence in integrated creative strategy.'})]})]})]})})}),i.jsx("section",{className:"content-section reveal",children:i.jsxs("div",{className:"container",style:{maxWidth:"1200px"},children:[i.jsxs("div",{className:"overview-intro",children:[i.jsx("h2",{className:"section-heading",children:"Core Concept"}),i.jsxs("div",{className:"concept-highlight-box",children:[i.jsx("div",{className:"concept-icon-large",children:i.jsx(On,{size:48})}),i.jsxs("div",{className:"concept-text-content",children:[i.jsx("h3",{className:"concept-quote",children:'"Job hunting is like a Gashapon (Capsule Toy)."'}),i.jsx("p",{className:"concept-explanation",children:'We transformed the anxiety of job hunting into the anticipation and excitement of a capsule toy machine. Each "turn" represents a career choice, but unlike random luck, Yung Ching offers guaranteed value—making the metaphor both relatable and empowering.'}),i.jsxs("div",{className:"concept-tagline",children:[i.jsx("strong",{children:"Key Message:"}),` "True value isn't luck, it's choosing a worthy partner."`]})]})]})]}),i.jsxs("div",{className:"campaign-stats",children:[i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-number",children:"4"}),i.jsx("div",{className:"stat-label",children:"Creative Works"})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-number",children:"3"}),i.jsx("div",{className:"stat-label",children:"Media Formats"}),i.jsx("div",{className:"stat-sub",children:"Video, Web, Audio"})]}),i.jsxs("div",{className:"stat-card highlight",children:[i.jsx("div",{className:"stat-number",children:"1"}),i.jsx("div",{className:"stat-label",children:"3rd Place Winner"}),i.jsx("div",{className:"stat-sub",children:"+ 3 Shortlisted"})]})]})]})}),i.jsx("section",{className:"content-section reveal work-section",style:{background:"linear-gradient(180deg, rgba(205,133,63,0.08) 0%, transparent 100%)"},children:i.jsxs("div",{className:"container",style:{maxWidth:"1200px"},children:[i.jsxs("div",{className:"work-header",children:[i.jsxs("div",{className:"work-badge winner",children:[i.jsx(at,{size:20}),i.jsx("span",{children:"🥉 3rd Place Winner"})]}),i.jsx("h2",{className:"work-title",children:'Work 1: "Career Festival" (轉職慶典)'}),i.jsxs("div",{className:"work-meta",children:[i.jsx(AN,{size:18}),i.jsx("span",{children:"Video Advertisement"})]})]}),i.jsxs("div",{className:"work-content",children:[i.jsxs("div",{className:"work-description",children:[i.jsx("h3",{className:"subsection-title",children:"Concept"}),i.jsx("p",{className:"body-text",children:'The main video features a visually striking capsule machine designed for fresh graduates. Inside the transparent capsules are symbolic "career charms"—including "50k Guaranteed Salary" and "Freedom from Contracts." The film uses warm, inviting cinematography to contrast the cold reality of typical job hunting, positioning Yung Ching as a trustworthy partner rather than a gamble.'}),i.jsxs("div",{className:"key-message-box",children:[i.jsx("h4",{className:"key-message-title",children:"Key Copy"}),i.jsx("blockquote",{className:"key-copy",children:`"True value isn't luck, it's choosing a worthy partner."`})]}),i.jsxs("div",{className:"features-list",children:[i.jsx("h4",{className:"features-title",children:"Creative Elements"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Physical capsule machine prop design"}),i.jsx("li",{children:'Symbolic "career charms" visual metaphor'}),i.jsx("li",{children:"Fresh graduate persona storytelling"}),i.jsx("li",{children:"Warm cinematography vs. cold job market contrast"})]})]})]}),i.jsxs("div",{className:"work-visuals",children:[i.jsx("div",{className:"image-placeholder video-main",children:i.jsx("p",{className:"placeholder-label",children:"[Video: Career Festival Main Advertisement]"})}),i.jsxs("div",{className:"visual-grid",children:[i.jsx("div",{className:"image-placeholder video-frame",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Capsule Machine Scene]"})}),i.jsx("div",{className:"image-placeholder video-frame",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Career Charms Close-up]"})})]})]})]})]})}),i.jsx("section",{className:"content-section reveal work-section",children:i.jsxs("div",{className:"container",style:{maxWidth:"1200px"},children:[i.jsxs("div",{className:"work-header",children:[i.jsxs("div",{className:"work-badge shortlisted",children:[i.jsx(ur,{size:20}),i.jsx("span",{children:"✨ Shortlisted"})]}),i.jsx("h2",{className:"work-title",children:'Work 2: "Career Takeoff" (轉動職涯)'}),i.jsxs("div",{className:"work-meta",children:[i.jsx(cr,{size:18}),i.jsx("span",{children:"Web Interaction (Chatbot Style)"})]})]}),i.jsxs("div",{className:"work-content",children:[i.jsxs("div",{className:"work-description",children:[i.jsx("h3",{className:"subsection-title",children:"Concept"}),i.jsx("p",{className:"body-text",children:`An online interactive experience styled like a Line chatbot, where users "turn" a digital gashapon machine to receive "Career Subscription Passes"—a clever parody of Netflix's subscription model. Each "pass" unlocks different career benefits (training, mentorship, flexibility), gamifying the discovery of Yung Ching's employee value proposition.`}),i.jsxs("div",{className:"key-message-box",children:[i.jsx("h4",{className:"key-message-title",children:"Key Copy"}),i.jsx("blockquote",{className:"key-copy",children:'"Subscribe to your career, not just a job."'})]}),i.jsxs("div",{className:"features-list",children:[i.jsx("h4",{className:"features-title",children:"Creative Elements"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Netflix subscription parody (familiar UX pattern)"}),i.jsx("li",{children:"Gamified benefit discovery mechanic"}),i.jsx("li",{children:"Line chatbot-style conversational UI"}),i.jsx("li",{children:'Collectible "career passes" visual design'})]})]})]}),i.jsxs("div",{className:"work-visuals",children:[i.jsx("div",{className:"image-placeholder web-ui",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Online Gashapon Interface]"})}),i.jsxs("div",{className:"visual-grid",children:[i.jsx("div",{className:"image-placeholder ui-detail",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Career Pass Cards]"})}),i.jsx("div",{className:"image-placeholder ui-detail",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Chatbot Flow]"})})]})]})]})]})}),i.jsx("section",{className:"content-section reveal work-section",style:{background:"linear-gradient(180deg, rgba(227,242,253,0.2) 0%, transparent 100%)"},children:i.jsxs("div",{className:"container",style:{maxWidth:"1200px"},children:[i.jsxs("div",{className:"work-header",children:[i.jsxs("div",{className:"work-badge shortlisted",children:[i.jsx(ur,{size:20}),i.jsx("span",{children:"✨ Shortlisted"})]}),i.jsx("h2",{className:"work-title",children:'Work 3: "Job Personality Test" (工作不靠運)'}),i.jsxs("div",{className:"work-meta",children:[i.jsx(cr,{size:18}),i.jsx("span",{children:"Web Interaction / Psychology Test"})]})]}),i.jsxs("div",{className:"work-content",children:[i.jsxs("div",{className:"work-description",children:[i.jsx("h3",{className:"subsection-title",children:"Concept"}),i.jsx("p",{className:"body-text",children:`A shareable personality test that flips the interview script: "Don't just ask the interviewer, ask yourself." Users discover their workplace persona through playful questions, receiving personalized insights that match them with Yung Ching's culture. The viral format drives organic traffic while educating candidates about self-awareness in career planning.`}),i.jsxs("div",{className:"key-message-box",children:[i.jsx("h4",{className:"key-message-title",children:"Key Copy"}),i.jsx("blockquote",{className:"key-copy",children:`"Don't just ask the interviewer, ask yourself."`})]}),i.jsxs("div",{className:"features-list",children:[i.jsx("h4",{className:"features-title",children:"Creative Elements"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Self-discovery narrative arc"}),i.jsx("li",{children:"Workplace persona matching algorithm"}),i.jsx("li",{children:"Shareable social results (viral mechanic)"}),i.jsx("li",{children:"Educational value proposition embedded"})]})]})]}),i.jsxs("div",{className:"work-visuals",children:[i.jsx("div",{className:"image-placeholder personality-test",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Personality Test UI]"})}),i.jsxs("div",{className:"visual-grid",children:[i.jsx("div",{className:"image-placeholder test-result",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Result Page Example]"})}),i.jsx("div",{className:"image-placeholder test-result",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Persona Cards]"})})]})]})]})]})}),i.jsx("section",{className:"content-section reveal work-section",children:i.jsxs("div",{className:"container",style:{maxWidth:"1200px"},children:[i.jsxs("div",{className:"work-header",children:[i.jsxs("div",{className:"work-badge shortlisted",children:[i.jsx(ur,{size:20}),i.jsx("span",{children:"✨ Shortlisted"})]}),i.jsx("h2",{className:"work-title",children:'Work 4: "The Right Turn" (這一轉，選對了)'}),i.jsxs("div",{className:"work-meta",children:[i.jsx(sN,{size:18}),i.jsx("span",{children:"Audio Advertisement"})]})]}),i.jsxs("div",{className:"work-content",children:[i.jsxs("div",{className:"work-description",children:[i.jsx("h3",{className:"subsection-title",children:"Concept"}),i.jsx("p",{className:"body-text",children:`An audio-only experience that uses sound design to simulate the tactile anticipation of turning a gashapon machine. The "click-click-click" rhythm mimics a heartbeat, building tension before the satisfying "pop" of success. The script cleverly uses first-person narration to make listeners feel like they're making their own career choice in real-time.`}),i.jsxs("div",{className:"key-message-box",children:[i.jsx("h4",{className:"key-message-title",children:"Key Sound Design"}),i.jsx("blockquote",{className:"key-copy",children:'"Click-click-click... (heartbeat rhythm) ...POP! (career choice made)"'})]}),i.jsxs("div",{className:"features-list",children:[i.jsx("h4",{className:"features-title",children:"Creative Elements"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Gashapon machine sound simulation"}),i.jsx("li",{children:"Heartbeat-synced rhythm (tension building)"}),i.jsx("li",{children:"First-person immersive narration"}),i.jsx("li",{children:"Audio-only storytelling (theater of the mind)"})]})]})]}),i.jsxs("div",{className:"work-visuals",children:[i.jsx("div",{className:"image-placeholder audio-visual",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Audio Waveform Visualization]"})}),i.jsxs("div",{className:"visual-grid",children:[i.jsx("div",{className:"image-placeholder sound-design",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Sound Design Concept]"})}),i.jsx("div",{className:"image-placeholder sound-design",children:i.jsx("p",{className:"placeholder-label",children:"[Image: Script Excerpt]"})})]})]})]})]})}),i.jsx("section",{className:"content-section reveal",style:{paddingBottom:"120px"},children:i.jsx("div",{className:"container",style:{maxWidth:"1200px"},children:i.jsxs("div",{className:"outcome-section",children:[i.jsxs("div",{className:"outcome-header",children:[i.jsx(at,{size:48,color:"#CD853F"}),i.jsx("h2",{className:"section-heading",style:{marginBottom:"16px"},children:"Campaign Impact & Recognition"}),i.jsx("p",{className:"section-subheading",children:"National Recognition Across Multiple Formats"})]}),i.jsxs("div",{className:"outcome-grid",children:[i.jsxs("div",{className:"outcome-card featured bronze",children:[i.jsx("div",{className:"outcome-icon bronze-icon",children:i.jsx(at,{size:50})}),i.jsxs("h3",{className:"outcome-title",children:["🥉 ","Times Awards 3rd Place"]}),i.jsx("p",{className:"outcome-text",children:'Won 3rd Place nationally in the Video Category for "Career Festival," recognized among hundreds of submissions for creative excellence and strategic messaging in employer branding.'})]}),i.jsxs("div",{className:"outcome-card",children:[i.jsx("div",{className:"outcome-icon",children:i.jsx(ur,{size:40})}),i.jsx("h3",{className:"outcome-title",children:"Multi-Format Success"}),i.jsx("p",{className:"outcome-text",children:"Three additional works shortlisted across Interactive and Audio categories, demonstrating versatility in creative execution and integrated campaign thinking."})]}),i.jsxs("div",{className:"outcome-card",children:[i.jsx("div",{className:"outcome-icon",children:i.jsx(oo,{size:40})}),i.jsx("h3",{className:"outcome-title",children:"Strategic Creativity"}),i.jsx("p",{className:"outcome-text",children:'Successfully balanced playful metaphor ("Gashapon") with serious employer value proposition, making recruitment messaging both memorable and effective.'})]})]}),i.jsxs("div",{className:"takeaways-section",children:[i.jsx("h3",{className:"takeaways-title",children:"Creative Insights"}),i.jsxs("div",{className:"takeaways-grid",children:[i.jsxs("div",{className:"takeaway-card",children:[i.jsx("h4",{className:"takeaway-card-title",children:"Metaphor as Strategy"}),i.jsx("p",{className:"takeaway-card-text",children:`The "Gashapon" metaphor wasn't decoration—it was a strategic device to reframe job hunting anxiety as playful anticipation.`})]}),i.jsxs("div",{className:"takeaway-card",children:[i.jsx("h4",{className:"takeaway-card-title",children:"Integrated Storytelling"}),i.jsx("p",{className:"takeaway-card-text",children:'A single concept ("Career Gashapon") was adapted across 4 formats (video, web, audio), proving the power of flexible creative platforms.'})]}),i.jsxs("div",{className:"takeaway-card",children:[i.jsx("h4",{className:"takeaway-card-title",children:"Empowerment Over Promotion"}),i.jsx("p",{className:"takeaway-card-text",children:'The campaign prioritized candidate self-awareness and empowerment ("ask yourself") over hard-sell tactics, building trust and brand affinity.'})]})]})]})]})})}),i.jsx("style",{children:`
          /* Hero Section */
          .hero-section {
            padding: 120px 0 80px;
            background: linear-gradient(180deg, rgba(0,0,0,0.02) 0%, transparent 100%);
          }

          .hero-content {
            text-align: center;
            max-width: 900px;
            margin: 0 auto;
          }

          /* Award Badges Container */
          .award-badges-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            margin-bottom: 32px;
          }

          /* Bronze Award Badge */
          .bronze-award-badge {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 16px 32px;
            background: linear-gradient(135deg, #CD853F 0%, #B8860B 100%);
            border-radius: var(--radius-lg);
            box-shadow: 0 8px 32px rgba(205, 133, 63, 0.4);
            animation: bronze-pulse 3s ease-in-out infinite;
          }

          @keyframes bronze-pulse {
            0%, 100% { 
              box-shadow: 0 8px 32px rgba(205, 133, 63, 0.4);
              transform: scale(1);
            }
            50% { 
              box-shadow: 0 12px 48px rgba(205, 133, 63, 0.6);
              transform: scale(1.02);
            }
          }

          .badge-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 56px;
            height: 56px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            color: #fff;
          }

          .badge-content {
            text-align: left;
          }

          .badge-title {
            font-size: 18px;
            font-weight: 800;
            color: #fff;
            line-height: 1.2;
            letter-spacing: 0.5px;
          }

          .badge-subtitle {
            font-size: 14px;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.9);
            margin-top: 4px;
          }

          /* Shortlist Badge */
          .shortlist-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 20px;
            background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1));
            border: 2px solid hsl(var(--g1)/.3);
            border-radius: var(--radius-lg);
            font-size: 14px;
            font-weight: 700;
            color: hsl(var(--g1));
          }

          .hero-title {
            font-size: clamp(36px, 5vw, 56px);
            font-weight: 800;
            line-height: 1.1;
            color: var(--md-on-surface);
            margin-bottom: 24px;
          }

          .hero-subtitle {
            font-size: clamp(18px, 2vw, 22px);
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-bottom: 48px;
          }

          .hero-details {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 32px;
            margin-top: 48px;
            padding-top: 48px;
            border-top: 1px solid rgba(0,0,0,0.06);
          }

          .detail-item {
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .detail-label {
            display: block;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--color-text-muted);
          }

          .detail-value {
            display: block;
            font-size: 15px;
            font-weight: 600;
            color: var(--md-on-surface);
          }

          .detail-value.bronze-highlight {
            font-size: 16px;
            color: #CD853F;
            font-weight: 700;
          }

          .detail-sub {
            display: block;
            font-size: 13px;
            color: var(--color-text-muted);
          }

          /* Campaign Context */
          .campaign-context {
            display: flex;
            align-items: flex-start;
            gap: 24px;
            padding: 32px;
            margin-top: 48px;
            background: linear-gradient(135deg, hsl(var(--g1)/.08), hsl(var(--g2)/.08));
            border-left: 4px solid hsl(var(--g1));
            border-radius: var(--radius-lg);
            text-align: left;
          }

          .context-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 56px;
            height: 56px;
            background: linear-gradient(135deg, hsl(var(--g1)), hsl(var(--g2)));
            border-radius: 50%;
            color: #fff;
            flex-shrink: 0;
          }

          .context-content {
            flex: 1;
          }

          .context-title {
            font-size: 20px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 8px;
          }

          .context-text {
            font-size: 15px;
            line-height: 1.7;
            color: var(--color-text-muted);
          }

          /* Content Sections */
          .content-section {
            padding: 80px 0;
          }

          .section-heading {
            font-size: clamp(32px, 4vw, 48px);
            font-weight: 700;
            color: var(--md-on-surface);
            margin-bottom: 16px;
          }

          .section-subheading {
            font-size: clamp(16px, 2vw, 20px);
            color: var(--color-text-muted);
            margin-bottom: 32px;
          }

          .body-text {
            font-size: 16px;
            line-height: 1.8;
            color: var(--color-text-muted);
            margin-bottom: 24px;
          }

          /* Overview */
          .overview-intro {
            text-align: center;
            max-width: 1000px;
            margin: 0 auto 64px;
          }

          /* Concept Highlight Box */
          .concept-highlight-box {
            display: flex;
            align-items: flex-start;
            gap: 32px;
            padding: 48px;
            background: linear-gradient(135deg, hsl(var(--g3)/.08), hsl(var(--g4)/.08));
            border: 2px solid hsl(var(--g3)/.2);
            border-radius: var(--radius-lg);
            text-align: left;
            margin-top: 32px;
          }

          .concept-icon-large {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 96px;
            height: 96px;
            background: linear-gradient(135deg, hsl(var(--g3)), hsl(var(--g4)));
            border-radius: 50%;
            color: #fff;
            flex-shrink: 0;
          }

          .concept-text-content {
            flex: 1;
          }

          .concept-quote {
            font-size: 28px;
            font-weight: 700;
            line-height: 1.3;
            color: var(--md-on-surface);
            margin-bottom: 16px;
          }

          .concept-explanation {
            font-size: 16px;
            line-height: 1.7;
            color: var(--color-text-muted);
            margin-bottom: 16px;
          }

          .concept-tagline {
            padding: 16px;
            background: rgba(255, 255, 255, 0.6);
            border-left: 4px solid hsl(var(--g3));
            border-radius: var(--radius-sm);
            font-size: 15px;
            line-height: 1.6;
            color: var(--md-on-surface);
          }

          /* Campaign Stats */
          .campaign-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-top: 48px;
          }

          .stat-card {
            padding: 32px 24px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
            text-align: center;
          }

          .stat-card.highlight {
            background: linear-gradient(135deg, rgba(205,133,63,0.08), rgba(184,134,11,0.08));
            border: 2px solid rgba(205,133,63,0.3);
          }

          .stat-number {
            font-size: 56px;
            font-weight: 900;
            line-height: 1;
            background: linear-gradient(135deg, hsl(var(--g1)), hsl(var(--g2)));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 12px;
          }

          .stat-card.highlight .stat-number {
            background: linear-gradient(135deg, #CD853F, #B8860B);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .stat-label {
            font-size: 16px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 4px;
          }

          .stat-sub {
            font-size: 13px;
            color: var(--color-text-muted);
          }

          /* Work Sections */
          .work-section {
            position: relative;
          }

          .work-header {
            margin-bottom: 40px;
          }

          .work-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            border-radius: var(--radius-md);
            font-size: 14px;
            font-weight: 700;
            margin-bottom: 16px;
          }

          .work-badge.winner {
            background: linear-gradient(135deg, #CD853F, #B8860B);
            color: #fff;
          }

          .work-badge.shortlisted {
            background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1));
            border: 2px solid hsl(var(--g1)/.3);
            color: hsl(var(--g1));
          }

          .work-title {
            font-size: 32px;
            font-weight: 700;
            color: var(--md-on-surface);
            margin-bottom: 12px;
          }

          .work-meta {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            color: var(--color-text-muted);
          }

          /* Work Content */
          .work-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            align-items: start;
          }

          .work-description {
            display: flex;
            flex-direction: column;
            gap: 24px;
          }

          .subsection-title {
            font-size: 20px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 12px;
          }

          /* Key Message Box */
          .key-message-box {
            padding: 24px;
            background: linear-gradient(135deg, hsl(var(--g1)/.05), hsl(var(--g2)/.05));
            border-left: 4px solid hsl(var(--g1));
            border-radius: var(--radius-lg);
          }

          .key-message-title {
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: hsl(var(--g1));
            margin-bottom: 12px;
          }

          .key-copy {
            font-size: 18px;
            font-weight: 600;
            font-style: italic;
            line-height: 1.5;
            color: var(--md-on-surface);
            margin: 0;
          }

          /* Features List */
          .features-list {
            margin-top: 24px;
          }

          .features-title {
            font-size: 16px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 12px;
          }

          .features-list ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .features-list li {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-muted);
            padding-left: 24px;
            position: relative;
          }

          .features-list li::before {
            content: '▸';
            position: absolute;
            left: 0;
            color: hsl(var(--g1));
            font-weight: 700;
          }

          /* Work Visuals */
          .work-visuals {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .visual-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          /* Image Placeholders */
          .image-placeholder {
            width: 100%;
            border-radius: var(--radius-lg);
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(0,0,0,0.06);
          }

          .image-placeholder.video-main {
            background: linear-gradient(135deg, #ffebee, #ffcdd2);
            aspect-ratio: 16 / 9;
          }

          .image-placeholder.video-frame {
            background: linear-gradient(135deg, #f3e5f5, #e1bee7);
            aspect-ratio: 4 / 3;
          }

          .image-placeholder.web-ui {
            background: linear-gradient(135deg, #e3f2fd, #bbdefb);
            aspect-ratio: 9 / 16;
          }

          .image-placeholder.ui-detail {
            background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
            aspect-ratio: 3 / 4;
          }

          .image-placeholder.personality-test {
            background: linear-gradient(135deg, #fff3e0, #ffe0b2);
            aspect-ratio: 9 / 16;
          }

          .image-placeholder.test-result {
            background: linear-gradient(135deg, #f1f8e9, #dcedc8);
            aspect-ratio: 3 / 4;
          }

          .image-placeholder.audio-visual {
            background: linear-gradient(135deg, #fce4ec, #f8bbd0);
            aspect-ratio: 16 / 6;
          }

          .image-placeholder.sound-design {
            background: linear-gradient(135deg, #e0f2f1, #b2dfdb);
            aspect-ratio: 4 / 3;
          }

          .placeholder-label {
            font-size: 14px;
            color: rgba(0,0,0,0.3);
            font-weight: 500;
            text-align: center;
            padding: 20px;
          }

          /* Outcome Section */
          .outcome-section {
            text-align: center;
          }

          .outcome-header {
            max-width: 700px;
            margin: 0 auto 48px;
          }

          .outcome-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
            margin-bottom: 64px;
          }

          .outcome-card {
            padding: 40px 24px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
            text-align: center;
          }

          .outcome-card.featured {
            grid-column: span 3;
            padding: 56px 32px;
          }

          .outcome-card.featured.bronze {
            background: linear-gradient(135deg, rgba(205,133,63,0.08), rgba(184,134,11,0.08));
            border: 2px solid rgba(205,133,63,0.3);
          }

          .outcome-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, hsl(var(--g1)/.1), hsl(var(--g2)/.1));
            border-radius: 50%;
            margin-bottom: 24px;
            color: hsl(var(--g1));
          }

          .outcome-icon.bronze-icon {
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, #CD853F, #B8860B);
            color: #fff;
          }

          .outcome-title {
            font-size: 20px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 12px;
          }

          .outcome-text {
            font-size: 15px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          /* Takeaways */
          .takeaways-section {
            margin-top: 64px;
          }

          .takeaways-title {
            font-size: 32px;
            font-weight: 700;
            color: var(--md-on-surface);
            margin-bottom: 32px;
          }

          .takeaways-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }

          .takeaway-card {
            padding: 32px 24px;
            background: rgba(255,255,255,0.95);
            border: 1px solid rgba(0,0,0,0.06);
            border-radius: var(--radius-lg);
            text-align: left;
          }

          .takeaway-card-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--md-on-surface);
            margin-bottom: 12px;
          }

          .takeaway-card-text {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-muted);
          }

          /* Reveal Animation */
          .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1),
                        transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
          }

          .reveal.in {
            opacity: 1;
            transform: translateY(0);
          }

          /* Responsive Design */
          @media (max-width: 959px) {
            .work-content,
            .campaign-stats,
            .outcome-grid,
            .takeaways-grid {
              grid-template-columns: 1fr;
            }

            .outcome-card.featured {
              grid-column: span 1;
            }

            .concept-highlight-box,
            .campaign-context {
              flex-direction: column;
              align-items: center;
              text-align: center;
            }

            .visual-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 640px) {
            .hero-section {
              padding: 100px 0 60px;
            }

            .content-section {
              padding: 60px 0;
            }

            .award-badges-container {
              width: 100%;
            }

            .bronze-award-badge {
              flex-direction: column;
              text-align: center;
              width: 100%;
            }

            .shortlist-badge {
              flex-direction: column;
              text-align: center;
            }
          }

          /* Reduced Motion */
          @media (prefers-reduced-motion: reduce) {
            .reveal,
            .bronze-award-badge {
              transition: none !important;
              transform: none !important;
              animation: none !important;
            }

            .reveal {
              opacity: 1;
            }
          }
        `})]})})}function XS(){return i.jsx(M1,{children:i.jsxs(c1,{children:[i.jsx(Yt,{path:"/",element:i.jsx(FS,{})}),i.jsx(Yt,{path:"/about",element:i.jsx(OS,{})}),i.jsx(Yt,{path:"/projects",element:i.jsx(BS,{})}),i.jsx(Yt,{path:"/projects/oblivilight",element:i.jsx(KS,{})}),i.jsx(Yt,{path:"/projects/good-luck-peanut",element:i.jsx(GS,{})}),i.jsx(Yt,{path:"/projects/innoconnect",element:i.jsx(YS,{})}),i.jsx(Yt,{path:"/projects/times-awards",element:i.jsx(qS,{})}),i.jsx(Yt,{path:"/resume",element:i.jsx($S,{})}),i.jsx(Yt,{path:"*",element:i.jsx(o1,{to:"/",replace:!0})})]})})}cy.createRoot(document.getElementById("root")).render(i.jsx(XS,{}));
