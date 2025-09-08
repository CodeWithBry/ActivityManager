const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-DdF0CM1c.js","assets/subjects-Qvdm7Wki.js","assets/Home-Bdyyo7C1.css","assets/Subjects-CRIn8QDx.js","assets/Subjects-BICBmr9F.css","assets/Recap-D5cbpmpw.js","assets/Recap-CxJYarhM.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var mm={exports:{}},ql={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv;function vw(){if(kv)return ql;kv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return ql.Fragment=e,ql.jsx=n,ql.jsxs=n,ql}var Vv;function Ew(){return Vv||(Vv=1,mm.exports=vw()),mm.exports}var k=Ew(),pm={exports:{}},De={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv;function Tw(){if(Pv)return De;Pv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),A=Symbol.iterator;function w(D){return D===null||typeof D!="object"?null:(D=A&&D[A]||D["@@iterator"],typeof D=="function"?D:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,Y={};function G(D,Z,ae){this.props=D,this.context=Z,this.refs=Y,this.updater=ae||L}G.prototype.isReactComponent={},G.prototype.setState=function(D,Z){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Z,"setState")},G.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function Q(){}Q.prototype=G.prototype;function se(D,Z,ae){this.props=D,this.context=Z,this.refs=Y,this.updater=ae||L}var ie=se.prototype=new Q;ie.constructor=se,q(ie,G.prototype),ie.isPureReactComponent=!0;var pe=Array.isArray,ce={H:null,A:null,T:null,S:null,V:null},ye=Object.prototype.hasOwnProperty;function x(D,Z,ae,ne,de,be){return ae=be.ref,{$$typeof:r,type:D,key:Z,ref:ae!==void 0?ae:null,props:be}}function R(D,Z){return x(D.type,Z,void 0,void 0,void 0,D.props)}function I(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function O(D){var Z={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ae){return Z[ae]})}var M=/\/+/g;function V(D,Z){return typeof D=="object"&&D!==null&&D.key!=null?O(""+D.key):Z.toString(36)}function b(){}function Ie(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(b,b):(D.status="pending",D.then(function(Z){D.status==="pending"&&(D.status="fulfilled",D.value=Z)},function(Z){D.status==="pending"&&(D.status="rejected",D.reason=Z)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function Ce(D,Z,ae,ne,de){var be=typeof D;(be==="undefined"||be==="boolean")&&(D=null);var ve=!1;if(D===null)ve=!0;else switch(be){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(D.$$typeof){case r:case e:ve=!0;break;case E:return ve=D._init,Ce(ve(D._payload),Z,ae,ne,de)}}if(ve)return de=de(D),ve=ne===""?"."+V(D,0):ne,pe(de)?(ae="",ve!=null&&(ae=ve.replace(M,"$&/")+"/"),Ce(de,Z,ae,"",function(vn){return vn})):de!=null&&(I(de)&&(de=R(de,ae+(de.key==null||D&&D.key===de.key?"":(""+de.key).replace(M,"$&/")+"/")+ve)),Z.push(de)),1;ve=0;var _t=ne===""?".":ne+":";if(pe(D))for(var Ye=0;Ye<D.length;Ye++)ne=D[Ye],be=_t+V(ne,Ye),ve+=Ce(ne,Z,ae,be,de);else if(Ye=w(D),typeof Ye=="function")for(D=Ye.call(D),Ye=0;!(ne=D.next()).done;)ne=ne.value,be=_t+V(ne,Ye++),ve+=Ce(ne,Z,ae,be,de);else if(be==="object"){if(typeof D.then=="function")return Ce(Ie(D),Z,ae,ne,de);throw Z=String(D),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return ve}function K(D,Z,ae){if(D==null)return D;var ne=[],de=0;return Ce(D,ne,"","",function(be){return Z.call(ae,be,de++)}),ne}function re(D){if(D._status===-1){var Z=D._result;Z=Z(),Z.then(function(ae){(D._status===0||D._status===-1)&&(D._status=1,D._result=ae)},function(ae){(D._status===0||D._status===-1)&&(D._status=2,D._result=ae)}),D._status===-1&&(D._status=0,D._result=Z)}if(D._status===1)return D._result.default;throw D._result}var le=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function Ne(){}return De.Children={map:K,forEach:function(D,Z,ae){K(D,function(){Z.apply(this,arguments)},ae)},count:function(D){var Z=0;return K(D,function(){Z++}),Z},toArray:function(D){return K(D,function(Z){return Z})||[]},only:function(D){if(!I(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},De.Component=G,De.Fragment=n,De.Profiler=o,De.PureComponent=se,De.StrictMode=s,De.Suspense=g,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ce,De.__COMPILER_RUNTIME={__proto__:null,c:function(D){return ce.H.useMemoCache(D)}},De.cache=function(D){return function(){return D.apply(null,arguments)}},De.cloneElement=function(D,Z,ae){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var ne=q({},D.props),de=D.key,be=void 0;if(Z!=null)for(ve in Z.ref!==void 0&&(be=void 0),Z.key!==void 0&&(de=""+Z.key),Z)!ye.call(Z,ve)||ve==="key"||ve==="__self"||ve==="__source"||ve==="ref"&&Z.ref===void 0||(ne[ve]=Z[ve]);var ve=arguments.length-2;if(ve===1)ne.children=ae;else if(1<ve){for(var _t=Array(ve),Ye=0;Ye<ve;Ye++)_t[Ye]=arguments[Ye+2];ne.children=_t}return x(D.type,de,void 0,void 0,be,ne)},De.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},De.createElement=function(D,Z,ae){var ne,de={},be=null;if(Z!=null)for(ne in Z.key!==void 0&&(be=""+Z.key),Z)ye.call(Z,ne)&&ne!=="key"&&ne!=="__self"&&ne!=="__source"&&(de[ne]=Z[ne]);var ve=arguments.length-2;if(ve===1)de.children=ae;else if(1<ve){for(var _t=Array(ve),Ye=0;Ye<ve;Ye++)_t[Ye]=arguments[Ye+2];de.children=_t}if(D&&D.defaultProps)for(ne in ve=D.defaultProps,ve)de[ne]===void 0&&(de[ne]=ve[ne]);return x(D,be,void 0,void 0,null,de)},De.createRef=function(){return{current:null}},De.forwardRef=function(D){return{$$typeof:m,render:D}},De.isValidElement=I,De.lazy=function(D){return{$$typeof:E,_payload:{_status:-1,_result:D},_init:re}},De.memo=function(D,Z){return{$$typeof:p,type:D,compare:Z===void 0?null:Z}},De.startTransition=function(D){var Z=ce.T,ae={};ce.T=ae;try{var ne=D(),de=ce.S;de!==null&&de(ae,ne),typeof ne=="object"&&ne!==null&&typeof ne.then=="function"&&ne.then(Ne,le)}catch(be){le(be)}finally{ce.T=Z}},De.unstable_useCacheRefresh=function(){return ce.H.useCacheRefresh()},De.use=function(D){return ce.H.use(D)},De.useActionState=function(D,Z,ae){return ce.H.useActionState(D,Z,ae)},De.useCallback=function(D,Z){return ce.H.useCallback(D,Z)},De.useContext=function(D){return ce.H.useContext(D)},De.useDebugValue=function(){},De.useDeferredValue=function(D,Z){return ce.H.useDeferredValue(D,Z)},De.useEffect=function(D,Z,ae){var ne=ce.H;if(typeof ae=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ne.useEffect(D,Z)},De.useId=function(){return ce.H.useId()},De.useImperativeHandle=function(D,Z,ae){return ce.H.useImperativeHandle(D,Z,ae)},De.useInsertionEffect=function(D,Z){return ce.H.useInsertionEffect(D,Z)},De.useLayoutEffect=function(D,Z){return ce.H.useLayoutEffect(D,Z)},De.useMemo=function(D,Z){return ce.H.useMemo(D,Z)},De.useOptimistic=function(D,Z){return ce.H.useOptimistic(D,Z)},De.useReducer=function(D,Z,ae){return ce.H.useReducer(D,Z,ae)},De.useRef=function(D){return ce.H.useRef(D)},De.useState=function(D){return ce.H.useState(D)},De.useSyncExternalStore=function(D,Z,ae){return ce.H.useSyncExternalStore(D,Z,ae)},De.useTransition=function(){return ce.H.useTransition()},De.version="19.1.0",De}var Lv;function Ep(){return Lv||(Lv=1,pm.exports=Tw()),pm.exports}var B=Ep(),gm={exports:{}},Hl={},ym={exports:{}},_m={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uv;function Sw(){return Uv||(Uv=1,function(r){function e(K,re){var le=K.length;K.push(re);e:for(;0<le;){var Ne=le-1>>>1,D=K[Ne];if(0<o(D,re))K[Ne]=re,K[le]=D,le=Ne;else break e}}function n(K){return K.length===0?null:K[0]}function s(K){if(K.length===0)return null;var re=K[0],le=K.pop();if(le!==re){K[0]=le;e:for(var Ne=0,D=K.length,Z=D>>>1;Ne<Z;){var ae=2*(Ne+1)-1,ne=K[ae],de=ae+1,be=K[de];if(0>o(ne,le))de<D&&0>o(be,ne)?(K[Ne]=be,K[de]=le,Ne=de):(K[Ne]=ne,K[ae]=le,Ne=ae);else if(de<D&&0>o(be,le))K[Ne]=be,K[de]=le,Ne=de;else break e}}return re}function o(K,re){var le=K.sortIndex-re.sortIndex;return le!==0?le:K.id-re.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var g=[],p=[],E=1,A=null,w=3,L=!1,q=!1,Y=!1,G=!1,Q=typeof setTimeout=="function"?setTimeout:null,se=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate<"u"?setImmediate:null;function pe(K){for(var re=n(p);re!==null;){if(re.callback===null)s(p);else if(re.startTime<=K)s(p),re.sortIndex=re.expirationTime,e(g,re);else break;re=n(p)}}function ce(K){if(Y=!1,pe(K),!q)if(n(g)!==null)q=!0,ye||(ye=!0,V());else{var re=n(p);re!==null&&Ce(ce,re.startTime-K)}}var ye=!1,x=-1,R=5,I=-1;function O(){return G?!0:!(r.unstable_now()-I<R)}function M(){if(G=!1,ye){var K=r.unstable_now();I=K;var re=!0;try{e:{q=!1,Y&&(Y=!1,se(x),x=-1),L=!0;var le=w;try{t:{for(pe(K),A=n(g);A!==null&&!(A.expirationTime>K&&O());){var Ne=A.callback;if(typeof Ne=="function"){A.callback=null,w=A.priorityLevel;var D=Ne(A.expirationTime<=K);if(K=r.unstable_now(),typeof D=="function"){A.callback=D,pe(K),re=!0;break t}A===n(g)&&s(g),pe(K)}else s(g);A=n(g)}if(A!==null)re=!0;else{var Z=n(p);Z!==null&&Ce(ce,Z.startTime-K),re=!1}}break e}finally{A=null,w=le,L=!1}re=void 0}}finally{re?V():ye=!1}}}var V;if(typeof ie=="function")V=function(){ie(M)};else if(typeof MessageChannel<"u"){var b=new MessageChannel,Ie=b.port2;b.port1.onmessage=M,V=function(){Ie.postMessage(null)}}else V=function(){Q(M,0)};function Ce(K,re){x=Q(function(){K(r.unstable_now())},re)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(K){K.callback=null},r.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<K?Math.floor(1e3/K):5},r.unstable_getCurrentPriorityLevel=function(){return w},r.unstable_next=function(K){switch(w){case 1:case 2:case 3:var re=3;break;default:re=w}var le=w;w=re;try{return K()}finally{w=le}},r.unstable_requestPaint=function(){G=!0},r.unstable_runWithPriority=function(K,re){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var le=w;w=K;try{return re()}finally{w=le}},r.unstable_scheduleCallback=function(K,re,le){var Ne=r.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?Ne+le:Ne):le=Ne,K){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=le+D,K={id:E++,callback:re,priorityLevel:K,startTime:le,expirationTime:D,sortIndex:-1},le>Ne?(K.sortIndex=le,e(p,K),n(g)===null&&K===n(p)&&(Y?(se(x),x=-1):Y=!0,Ce(ce,le-Ne))):(K.sortIndex=D,e(g,K),q||L||(q=!0,ye||(ye=!0,V()))),K},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(K){var re=w;return function(){var le=w;w=re;try{return K.apply(this,arguments)}finally{w=le}}}}(_m)),_m}var Bv;function Aw(){return Bv||(Bv=1,ym.exports=Sw()),ym.exports}var vm={exports:{}},en={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jv;function ww(){if(jv)return en;jv=1;var r=Ep();function e(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)p+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(g,p,E){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:A==null?null:""+A,children:g,containerInfo:p,implementation:E}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return en.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,en.createPortal=function(g,p){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(g,p,null,E)},en.flushSync=function(g){var p=f.T,E=s.p;try{if(f.T=null,s.p=2,g)return g()}finally{f.T=p,s.p=E,s.d.f()}},en.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(g,p))},en.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},en.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var E=p.as,A=m(E,p.crossOrigin),w=typeof p.integrity=="string"?p.integrity:void 0,L=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;E==="style"?s.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:A,integrity:w,fetchPriority:L}):E==="script"&&s.d.X(g,{crossOrigin:A,integrity:w,fetchPriority:L,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},en.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var E=m(p.as,p.crossOrigin);s.d.M(g,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(g)},en.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var E=p.as,A=m(E,p.crossOrigin);s.d.L(g,E,{crossOrigin:A,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},en.preloadModule=function(g,p){if(typeof g=="string")if(p){var E=m(p.as,p.crossOrigin);s.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(g)},en.requestFormReset=function(g){s.d.r(g)},en.unstable_batchedUpdates=function(g,p){return g(p)},en.useFormState=function(g,p,E){return f.H.useFormState(g,p,E)},en.useFormStatus=function(){return f.H.useHostTransitionStatus()},en.version="19.1.0",en}var zv;function bw(){if(zv)return vm.exports;zv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),vm.exports=ww(),vm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv;function Rw(){if(qv)return Hl;qv=1;var r=Aw(),e=Ep(),n=bw();function s(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function g(t){var i=t.alternate;if(!i){if(i=u(t),i===null)throw Error(s(188));return i!==t?null:t}for(var a=t,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return m(h),t;if(d===l)return m(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,T=h.child;T;){if(T===a){v=!0,a=h,l=d;break}if(T===l){v=!0,l=h,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,l=h;break}if(T===l){v=!0,l=d,a=h;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:i}function p(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=p(t),i!==null)return i;t=t.sibling}return null}var E=Object.assign,A=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),Q=Symbol.for("react.provider"),se=Symbol.for("react.consumer"),ie=Symbol.for("react.context"),pe=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),ye=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),M=Symbol.iterator;function V(t){return t===null||typeof t!="object"?null:(t=M&&t[M]||t["@@iterator"],typeof t=="function"?t:null)}var b=Symbol.for("react.client.reference");function Ie(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===b?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case q:return"Fragment";case G:return"Profiler";case Y:return"StrictMode";case ce:return"Suspense";case ye:return"SuspenseList";case I:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case L:return"Portal";case ie:return(t.displayName||"Context")+".Provider";case se:return(t._context.displayName||"Context")+".Consumer";case pe:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case x:return i=t.displayName||null,i!==null?i:Ie(t.type)||"Memo";case R:i=t._payload,t=t._init;try{return Ie(t(i))}catch{}}return null}var Ce=Array.isArray,K=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},Ne=[],D=-1;function Z(t){return{current:t}}function ae(t){0>D||(t.current=Ne[D],Ne[D]=null,D--)}function ne(t,i){D++,Ne[D]=t.current,t.current=i}var de=Z(null),be=Z(null),ve=Z(null),_t=Z(null);function Ye(t,i){switch(ne(ve,i),ne(be,t),ne(de,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?lv(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=lv(i),t=uv(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ae(de),ne(de,t)}function vn(){ae(de),ae(be),ae(ve)}function Kn(t){t.memoizedState!==null&&ne(_t,t);var i=de.current,a=uv(i,t.type);i!==a&&(ne(be,t),ne(de,a))}function En(t){be.current===t&&(ae(de),ae(be)),_t.current===t&&(ae(_t),Ll._currentValue=le)}var Qn=Object.prototype.hasOwnProperty,Yn=r.unstable_scheduleCallback,Xn=r.unstable_cancelCallback,Sr=r.unstable_shouldYield,ys=r.unstable_requestPaint,an=r.unstable_now,ya=r.unstable_getCurrentPriorityLevel,Xe=r.unstable_ImmediatePriority,$e=r.unstable_UserBlockingPriority,_s=r.unstable_NormalPriority,pf=r.unstable_LowPriority,_a=r.unstable_IdlePriority,Po=r.log,Nu=r.unstable_setDisableYieldValue,pt=null,We=null;function Tn(t){if(typeof Po=="function"&&Nu(t),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(pt,t)}catch{}}var Zt=Math.clz32?Math.clz32:vs,Ou=Math.log,gf=Math.LN2;function vs(t){return t>>>=0,t===0?32:31-(Ou(t)/gf|0)|0}var Es=256,Ts=4194304;function Wn(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function va(t,i,a){var l=t.pendingLanes;if(l===0)return 0;var h=0,d=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?h=Wn(l):(v&=T,v!==0?h=Wn(v):a||(a=T&~t,a!==0&&(h=Wn(a))))):(T=l&~d,T!==0?h=Wn(T):v!==0?h=Wn(v):a||(a=l&~t,a!==0&&(h=Wn(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function Ss(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Lo(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uo(){var t=Es;return Es<<=1,(Es&4194048)===0&&(Es=256),t}function Bo(){var t=Ts;return Ts<<=1,(Ts&62914560)===0&&(Ts=4194304),t}function Ui(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Bi(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function jo(t,i,a,l,h,d){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,C=t.expirationTimes,z=t.hiddenUpdates;for(a=v&~a;0<a;){var X=31-Zt(a),J=1<<X;T[X]=0,C[X]=-1;var H=z[X];if(H!==null)for(z[X]=null,X=0;X<H.length;X++){var F=H[X];F!==null&&(F.lane&=-536870913)}a&=~J}l!==0&&ui(t,l,0),d!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=d&~(v&~i))}function ui(t,i,a){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Zt(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194090}function zo(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Zt(a),h=1<<l;h&i|t[l]&i&&(t[l]|=i),a&=~h}}function Ar(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ea(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function wr(){var t=re.p;return t!==0?t:(t=window.event,t===void 0?32:Cv(t.type))}function xu(t,i){var a=re.p;try{return re.p=t,i()}finally{re.p=a}}var ut=Math.random().toString(36).slice(2),Nt="__reactFiber$"+ut,At="__reactProps$"+ut,xn="__reactContainer$"+ut,qo="__reactEvents$"+ut,yf="__reactListeners$"+ut,br="__reactHandles$"+ut,Mu="__reactResources$"+ut,As="__reactMarker$"+ut;function Rr(t){delete t[Nt],delete t[At],delete t[qo],delete t[yf],delete t[br]}function ji(t){var i=t[Nt];if(i)return i;for(var a=t.parentNode;a;){if(i=a[xn]||a[Nt]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=dv(t);t!==null;){if(a=t[Nt])return a;t=dv(t)}return i}t=a,a=t.parentNode}return null}function ci(t){if(t=t[Nt]||t[xn]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function hi(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(s(33))}function on(t){var i=t[Mu];return i||(i=t[Mu]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function vt(t){t[As]=!0}var Ho=new Set,Ta={};function Zn(t,i){zi(t,i),zi(t+"Capture",i)}function zi(t,i){for(Ta[t]=i,t=0;t<i.length;t++)Ho.add(i[t])}var ku=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vu={},ws={};function Pu(t){return Qn.call(ws,t)?!0:Qn.call(Vu,t)?!1:ku.test(t)?ws[t]=!0:(Vu[t]=!0,!1)}function Ir(t,i,a){if(Pu(i))if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+a)}}function fi(t,i,a){if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+a)}}function Ft(t,i,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(i,a,""+l)}}var bs,Lu;function qi(t){if(bs===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);bs=i&&i[1]||"",Lu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bs+t+Lu}var Sa=!1;function Aa(t,i){if(!t||Sa)return"";Sa=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(F){var H=F}Reflect.construct(t,[],J)}else{try{J.call()}catch(F){H=F}t.call(J.prototype)}}else{try{throw Error()}catch(F){H=F}(J=t())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(F){if(F&&H&&typeof F.stack=="string")return[F.stack,H.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var C=v.split(`
`),z=T.split(`
`);for(h=l=0;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;for(;h<z.length&&!z[h].includes("DetermineComponentFrameRoot");)h++;if(l===C.length||h===z.length)for(l=C.length-1,h=z.length-1;1<=l&&0<=h&&C[l]!==z[h];)h--;for(;1<=l&&0<=h;l--,h--)if(C[l]!==z[h]){if(l!==1||h!==1)do if(l--,h--,0>h||C[l]!==z[h]){var X=`
`+C[l].replace(" at new "," at ");return t.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",t.displayName)),X}while(1<=l&&0<=h);break}}}finally{Sa=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?qi(a):""}function Fo(t){switch(t.tag){case 26:case 27:case 5:return qi(t.type);case 16:return qi("Lazy");case 13:return qi("Suspense");case 19:return qi("SuspenseList");case 0:case 15:return Aa(t.type,!1);case 11:return Aa(t.type.render,!1);case 1:return Aa(t.type,!0);case 31:return qi("Activity");default:return""}}function wa(t){try{var i="";do i+=Fo(t),t=t.return;while(t);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ln(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Go(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function _f(t){var i=Go(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ba(t){t._valueTracker||(t._valueTracker=_f(t))}function $o(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Go(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function Rs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var vf=/[\n"\\]/g;function wt(t){return t.replace(vf,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Sn(t,i,a,l,h,d,v,T){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),i!=null?v==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+ln(i)):t.value!==""+ln(i)&&(t.value=""+ln(i)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),i!=null?Cr(t,v,ln(i)):a!=null?Cr(t,v,ln(a)):l!=null&&t.removeAttribute("value"),h==null&&d!=null&&(t.defaultChecked=!!d),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ln(T):t.removeAttribute("name")}function Is(t,i,a,l,h,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+ln(a):"",i=i!=null?""+ln(i):a,T||i===t.value||(t.value=i),t.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=T?t.checked:!!l,t.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v)}function Cr(t,i,a){i==="number"&&Rs(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Hi(t,i,a,l){if(t=t.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=i.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&l&&(t[a].defaultSelected=!0)}else{for(a=""+ln(a),i=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function et(t,i,a){if(i!=null&&(i=""+ln(i),i!==t.value&&(t.value=i),a==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=a!=null?""+ln(a):""}function Cs(t,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(Ce(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=ln(i),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function Mn(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Ds=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Uu(t,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,a):typeof a!="number"||a===0||Ds.has(i)?i==="float"?t.cssFloat=a:t[i]=(""+a).trim():t[i]=a+"px"}function Ko(t,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&Uu(t,h,l)}else for(var d in i)i.hasOwnProperty(d)&&Uu(t,d,i[d])}function Qo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ef=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Tf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ra(t){return Tf.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Fi=null;function kn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gi=null,$i=null;function Yo(t){var i=ci(t);if(i&&(t=i.stateNode)){var a=t[At]||null;e:switch(t=i.stateNode,i.type){case"input":if(Sn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+wt(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var h=l[At]||null;if(!h)throw Error(s(90));Sn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===t.form&&$o(l)}break e;case"textarea":et(t,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&Hi(t,!!a.multiple,i,!1)}}}var di=!1;function Bu(t,i,a){if(di)return t(i,a);di=!0;try{var l=t(i);return l}finally{if(di=!1,(Gi!==null||$i!==null)&&(xc(),Gi&&(i=Gi,t=$i,$i=Gi=null,Yo(i),t)))for(i=0;i<t.length;i++)Yo(t[i])}}function Ns(t,i){var a=t.stateNode;if(a===null)return null;var l=a[At]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vn=!1;if(Jn)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){Vn=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{Vn=!1}var mi=null,Dr=null,Ki=null;function Xo(){if(Ki)return Ki;var t,i=Dr,a=i.length,l,h="value"in mi?mi.value:mi.textContent,d=h.length;for(t=0;t<a&&i[t]===h[t];t++);var v=a-t;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return Ki=h.slice(t,1<l?1-l:void 0)}function pi(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function gi(){return!0}function Wo(){return!1}function Ut(t){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?gi:Wo,this.isPropagationStopped=Wo,this}return E(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=gi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=gi)},persist:function(){},isPersistent:gi}),i}var Ke={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ia=Ut(Ke),xs=E({},Ke,{view:0,detail:0}),ju=Ut(xs),Ca,Da,yi,Ms=E({},xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ps,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yi&&(yi&&t.type==="mousemove"?(Ca=t.screenX-yi.screenX,Da=t.screenY-yi.screenY):Da=Ca=0,yi=t),Ca)},movementY:function(t){return"movementY"in t?t.movementY:Da}}),Pn=Ut(Ms),zu=E({},Ms,{dataTransfer:0}),Sf=Ut(zu),ks=E({},xs,{relatedTarget:0}),Na=Ut(ks),Zo=E({},Ke,{animationName:0,elapsedTime:0,pseudoElement:0}),Oa=Ut(Zo),qu=E({},Ke,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xa=Ut(qu),Af=E({},Ke,{data:0}),Jo=Ut(Af),Vs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function el(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Fu[t])?!!i[t]:!1}function Ps(){return el}var Gu=E({},xs,{key:function(t){if(t.key){var i=Vs[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=pi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Hu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ps,charCode:function(t){return t.type==="keypress"?pi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ma=Ut(Gu),$u=E({},Ms,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tl=Ut($u),Qi=E({},xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ps}),Ku=Ut(Qi),Qu=E({},Ke,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yu=Ut(Qu),Xu=E({},Ms,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ka=Ut(Xu),un=E({},Ke,{newState:0,oldState:0}),Wu=Ut(un),Zu=[9,13,27,32],_i=Jn&&"CompositionEvent"in window,c=null;Jn&&"documentMode"in document&&(c=document.documentMode);var y=Jn&&"TextEvent"in window&&!c,_=Jn&&(!_i||c&&8<c&&11>=c),S=" ",U=!1;function $(t,i){switch(t){case"keyup":return Zu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oe(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Be=!1;function Ot(t,i){switch(t){case"compositionend":return oe(i);case"keypress":return i.which!==32?null:(U=!0,S);case"textInput":return t=i.data,t===S&&U?null:t;default:return null}}function je(t,i){if(Be)return t==="compositionend"||!_i&&$(t,i)?(t=Xo(),Ki=Dr=mi=null,Be=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var Bt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xt(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Bt[t.type]:i==="textarea"}function Yi(t,i,a,l){Gi?$i?$i.push(l):$i=[l]:Gi=l,i=Uc(i,"onChange"),0<i.length&&(a=new Ia("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var Gt=null,vi=null;function nl(t){iv(t,0)}function Ju(t){var i=hi(t);if($o(i))return t}function wg(t,i){if(t==="change")return i}var bg=!1;if(Jn){var wf;if(Jn){var bf="oninput"in document;if(!bf){var Rg=document.createElement("div");Rg.setAttribute("oninput","return;"),bf=typeof Rg.oninput=="function"}wf=bf}else wf=!1;bg=wf&&(!document.documentMode||9<document.documentMode)}function Ig(){Gt&&(Gt.detachEvent("onpropertychange",Cg),vi=Gt=null)}function Cg(t){if(t.propertyName==="value"&&Ju(vi)){var i=[];Yi(i,vi,t,kn(t)),Bu(nl,i)}}function YS(t,i,a){t==="focusin"?(Ig(),Gt=i,vi=a,Gt.attachEvent("onpropertychange",Cg)):t==="focusout"&&Ig()}function XS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ju(vi)}function WS(t,i){if(t==="click")return Ju(i)}function ZS(t,i){if(t==="input"||t==="change")return Ju(i)}function JS(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var An=typeof Object.is=="function"?Object.is:JS;function il(t,i){if(An(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!Qn.call(i,h)||!An(t[h],i[h]))return!1}return!0}function Dg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ng(t,i){var a=Dg(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Dg(a)}}function Og(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Og(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function xg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Rs(t.document);i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=Rs(t.document)}return i}function Rf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var eA=Jn&&"documentMode"in document&&11>=document.documentMode,Va=null,If=null,rl=null,Cf=!1;function Mg(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cf||Va==null||Va!==Rs(l)||(l=Va,"selectionStart"in l&&Rf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),rl&&il(rl,l)||(rl=l,l=Uc(If,"onSelect"),0<l.length&&(i=new Ia("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=Va)))}function Ls(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var Pa={animationend:Ls("Animation","AnimationEnd"),animationiteration:Ls("Animation","AnimationIteration"),animationstart:Ls("Animation","AnimationStart"),transitionrun:Ls("Transition","TransitionRun"),transitionstart:Ls("Transition","TransitionStart"),transitioncancel:Ls("Transition","TransitionCancel"),transitionend:Ls("Transition","TransitionEnd")},Df={},kg={};Jn&&(kg=document.createElement("div").style,"AnimationEvent"in window||(delete Pa.animationend.animation,delete Pa.animationiteration.animation,delete Pa.animationstart.animation),"TransitionEvent"in window||delete Pa.transitionend.transition);function Us(t){if(Df[t])return Df[t];if(!Pa[t])return t;var i=Pa[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in kg)return Df[t]=i[a];return t}var Vg=Us("animationend"),Pg=Us("animationiteration"),Lg=Us("animationstart"),tA=Us("transitionrun"),nA=Us("transitionstart"),iA=Us("transitioncancel"),Ug=Us("transitionend"),Bg=new Map,Nf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nf.push("scrollEnd");function ei(t,i){Bg.set(t,i),Zn(i,[t])}var jg=new WeakMap;function Ln(t,i){if(typeof t=="object"&&t!==null){var a=jg.get(t);return a!==void 0?a:(i={value:t,source:i,stack:wa(i)},jg.set(t,i),i)}return{value:t,source:i,stack:wa(i)}}var Un=[],La=0,Of=0;function ec(){for(var t=La,i=Of=La=0;i<t;){var a=Un[i];Un[i++]=null;var l=Un[i];Un[i++]=null;var h=Un[i];Un[i++]=null;var d=Un[i];if(Un[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&zg(a,h,d)}}function tc(t,i,a,l){Un[La++]=t,Un[La++]=i,Un[La++]=a,Un[La++]=l,Of|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function xf(t,i,a,l){return tc(t,i,a,l),nc(t)}function Ua(t,i){return tc(t,null,null,i),nc(t)}function zg(t,i,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=t.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(h=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,h&&i!==null&&(h=31-Zt(a),t=d.hiddenUpdates,l=t[h],l===null?t[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function nc(t){if(50<Dl)throw Dl=0,Ud=null,Error(s(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Ba={};function rA(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(t,i,a,l){return new rA(t,i,a,l)}function Mf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xi(t,i){var a=t.alternate;return a===null?(a=wn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function qg(t,i){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,i=a.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function ic(t,i,a,l,h,d){var v=0;if(l=t,typeof t=="function")Mf(t)&&(v=1);else if(typeof t=="string")v=aw(t,a,de.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case I:return t=wn(31,a,i,h),t.elementType=I,t.lanes=d,t;case q:return Bs(a.children,h,d,i);case Y:v=8,h|=24;break;case G:return t=wn(12,a,i,h|2),t.elementType=G,t.lanes=d,t;case ce:return t=wn(13,a,i,h),t.elementType=ce,t.lanes=d,t;case ye:return t=wn(19,a,i,h),t.elementType=ye,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Q:case ie:v=10;break e;case se:v=9;break e;case pe:v=11;break e;case x:v=14;break e;case R:v=16,l=null;break e}v=29,a=Error(s(130,t===null?"null":typeof t,"")),l=null}return i=wn(v,a,i,h),i.elementType=t,i.type=l,i.lanes=d,i}function Bs(t,i,a,l){return t=wn(7,t,l,i),t.lanes=a,t}function kf(t,i,a){return t=wn(6,t,null,i),t.lanes=a,t}function Vf(t,i,a){return i=wn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var ja=[],za=0,rc=null,sc=0,Bn=[],jn=0,js=null,Wi=1,Zi="";function zs(t,i){ja[za++]=sc,ja[za++]=rc,rc=t,sc=i}function Hg(t,i,a){Bn[jn++]=Wi,Bn[jn++]=Zi,Bn[jn++]=js,js=t;var l=Wi;t=Zi;var h=32-Zt(l)-1;l&=~(1<<h),a+=1;var d=32-Zt(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Wi=1<<32-Zt(i)+h|a<<h|l,Zi=d+t}else Wi=1<<d|a<<h|l,Zi=t}function Pf(t){t.return!==null&&(zs(t,1),Hg(t,1,0))}function Lf(t){for(;t===rc;)rc=ja[--za],ja[za]=null,sc=ja[--za],ja[za]=null;for(;t===js;)js=Bn[--jn],Bn[jn]=null,Zi=Bn[--jn],Bn[jn]=null,Wi=Bn[--jn],Bn[jn]=null}var cn=null,gt=null,Fe=!1,qs=null,Ei=!1,Uf=Error(s(519));function Hs(t){var i=Error(s(418,""));throw ol(Ln(i,t)),Uf}function Fg(t){var i=t.stateNode,a=t.type,l=t.memoizedProps;switch(i[Nt]=t,i[At]=l,a){case"dialog":Ve("cancel",i),Ve("close",i);break;case"iframe":case"object":case"embed":Ve("load",i);break;case"video":case"audio":for(a=0;a<Ol.length;a++)Ve(Ol[a],i);break;case"source":Ve("error",i);break;case"img":case"image":case"link":Ve("error",i),Ve("load",i);break;case"details":Ve("toggle",i);break;case"input":Ve("invalid",i),Is(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ba(i);break;case"select":Ve("invalid",i);break;case"textarea":Ve("invalid",i),Cs(i,l.value,l.defaultValue,l.children),ba(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||ov(i.textContent,a)?(l.popover!=null&&(Ve("beforetoggle",i),Ve("toggle",i)),l.onScroll!=null&&Ve("scroll",i),l.onScrollEnd!=null&&Ve("scrollend",i),l.onClick!=null&&(i.onclick=Bc),i=!0):i=!1,i||Hs(t)}function Gg(t){for(cn=t.return;cn;)switch(cn.tag){case 5:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:cn=cn.return}}function sl(t){if(t!==cn)return!1;if(!Fe)return Gg(t),Fe=!0,!1;var i=t.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||em(t.type,t.memoizedProps)),a=!a),a&&gt&&Hs(t),Gg(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(i===0){gt=ni(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;t=t.nextSibling}gt=null}}else i===27?(i=gt,Gr(t.type)?(t=rm,rm=null,gt=t):gt=i):gt=cn?ni(t.stateNode.nextSibling):null;return!0}function al(){gt=cn=null,Fe=!1}function $g(){var t=qs;return t!==null&&(mn===null?mn=t:mn.push.apply(mn,t),qs=null),t}function ol(t){qs===null?qs=[t]:qs.push(t)}var Bf=Z(null),Fs=null,Ji=null;function Nr(t,i,a){ne(Bf,i._currentValue),i._currentValue=a}function er(t){t._currentValue=Bf.current,ae(Bf)}function jf(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function zf(t,i,a,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=h;for(var C=0;C<i.length;C++)if(T.context===i[C]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),jf(d.return,a,t),l||(v=null);break e}d=T.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),jf(v,a,t),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===t){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function ll(t,i,a,l){t=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=h.type;An(h.pendingProps.value,v.value)||(t!==null?t.push(T):t=[T])}}else if(h===_t.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(Ll):t=[Ll])}h=h.return}t!==null&&zf(i,t,a,l),i.flags|=262144}function ac(t){for(t=t.firstContext;t!==null;){if(!An(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Gs(t){Fs=t,Ji=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Jt(t){return Kg(Fs,t)}function oc(t,i){return Fs===null&&Gs(t),Kg(t,i)}function Kg(t,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Ji===null){if(t===null)throw Error(s(308));Ji=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Ji=Ji.next=i;return a}var sA=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(a){return a()})}},aA=r.unstable_scheduleCallback,oA=r.unstable_NormalPriority,Mt={$$typeof:ie,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qf(){return{controller:new sA,data:new Map,refCount:0}}function ul(t){t.refCount--,t.refCount===0&&aA(oA,function(){t.controller.abort()})}var cl=null,Hf=0,qa=0,Ha=null;function lA(t,i){if(cl===null){var a=cl=[];Hf=0,qa=Gd(),Ha={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Hf++,i.then(Qg,Qg),i}function Qg(){if(--Hf===0&&cl!==null){Ha!==null&&(Ha.status="fulfilled");var t=cl;cl=null,qa=0,Ha=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function uA(t,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var Yg=K.S;K.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&lA(t,i),Yg!==null&&Yg(t,i)};var $s=Z(null);function Ff(){var t=$s.current;return t!==null?t:at.pooledCache}function lc(t,i){i===null?ne($s,$s.current):ne($s,i.pool)}function Xg(){var t=Ff();return t===null?null:{parent:Mt._currentValue,pool:t}}var hl=Error(s(460)),Wg=Error(s(474)),uc=Error(s(542)),Gf={then:function(){}};function Zg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function cc(){}function Jg(t,i,a){switch(a=t[a],a===void 0?t.push(i):a!==i&&(i.then(cc,cc),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,ty(t),t;default:if(typeof i.status=="string")i.then(cc,cc);else{if(t=at,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,ty(t),t}throw fl=i,hl}}var fl=null;function ey(){if(fl===null)throw Error(s(459));var t=fl;return fl=null,t}function ty(t){if(t===hl||t===uc)throw Error(s(483))}var Or=!1;function $f(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Kf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function xr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Mr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ze&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=nc(t),zg(t,null,a),i}return tc(t,l,i,a),nc(t)}function dl(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,zo(t,a)}}function Qf(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}var Yf=!1;function ml(){if(Yf){var t=Ha;if(t!==null)throw t}}function pl(t,i,a,l){Yf=!1;var h=t.updateQueue;Or=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var C=T,z=C.next;C.next=null,v===null?d=z:v.next=z,v=C;var X=t.alternate;X!==null&&(X=X.updateQueue,T=X.lastBaseUpdate,T!==v&&(T===null?X.firstBaseUpdate=z:T.next=z,X.lastBaseUpdate=C))}if(d!==null){var J=h.baseState;v=0,X=z=C=null,T=d;do{var H=T.lane&-536870913,F=H!==T.lane;if(F?(ze&H)===H:(l&H)===H){H!==0&&H===qa&&(Yf=!0),X!==null&&(X=X.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Ae=t,_e=T;H=i;var it=a;switch(_e.tag){case 1:if(Ae=_e.payload,typeof Ae=="function"){J=Ae.call(it,J,H);break e}J=Ae;break e;case 3:Ae.flags=Ae.flags&-65537|128;case 0:if(Ae=_e.payload,H=typeof Ae=="function"?Ae.call(it,J,H):Ae,H==null)break e;J=E({},J,H);break e;case 2:Or=!0}}H=T.callback,H!==null&&(t.flags|=64,F&&(t.flags|=8192),F=h.callbacks,F===null?h.callbacks=[H]:F.push(H))}else F={lane:H,tag:T.tag,payload:T.payload,callback:T.callback,next:null},X===null?(z=X=F,C=J):X=X.next=F,v|=H;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;F=T,T=F.next,F.next=null,h.lastBaseUpdate=F,h.shared.pending=null}}while(!0);X===null&&(C=J),h.baseState=C,h.firstBaseUpdate=z,h.lastBaseUpdate=X,d===null&&(h.shared.lanes=0),zr|=v,t.lanes=v,t.memoizedState=J}}function ny(t,i){if(typeof t!="function")throw Error(s(191,t));t.call(i)}function iy(t,i){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)ny(a[t],i)}var Fa=Z(null),hc=Z(0);function ry(t,i){t=or,ne(hc,t),ne(Fa,i),or=t|i.baseLanes}function Xf(){ne(hc,or),ne(Fa,Fa.current)}function Wf(){or=hc.current,ae(Fa),ae(hc)}var kr=0,Oe=null,tt=null,bt=null,fc=!1,Ga=!1,Ks=!1,dc=0,gl=0,$a=null,cA=0;function Et(){throw Error(s(321))}function Zf(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!An(t[a],i[a]))return!1;return!0}function Jf(t,i,a,l,h,d){return kr=d,Oe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,K.H=t===null||t.memoizedState===null?zy:qy,Ks=!1,d=a(l,h),Ks=!1,Ga&&(d=ay(i,a,l,h)),sy(t),d}function sy(t){K.H=vc;var i=tt!==null&&tt.next!==null;if(kr=0,bt=tt=Oe=null,fc=!1,gl=0,$a=null,i)throw Error(s(300));t===null||jt||(t=t.dependencies,t!==null&&ac(t)&&(jt=!0))}function ay(t,i,a,l){Oe=t;var h=0;do{if(Ga&&($a=null),gl=0,Ga=!1,25<=h)throw Error(s(301));if(h+=1,bt=tt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}K.H=yA,d=i(a,l)}while(Ga);return d}function hA(){var t=K.H,i=t.useState()[0];return i=typeof i.then=="function"?yl(i):i,t=t.useState()[0],(tt!==null?tt.memoizedState:null)!==t&&(Oe.flags|=1024),i}function ed(){var t=dc!==0;return dc=0,t}function td(t,i,a){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~a}function nd(t){if(fc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}fc=!1}kr=0,bt=tt=Oe=null,Ga=!1,gl=dc=0,$a=null}function fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?Oe.memoizedState=bt=t:bt=bt.next=t,bt}function Rt(){if(tt===null){var t=Oe.alternate;t=t!==null?t.memoizedState:null}else t=tt.next;var i=bt===null?Oe.memoizedState:bt.next;if(i!==null)bt=i,tt=t;else{if(t===null)throw Oe.alternate===null?Error(s(467)):Error(s(310));tt=t,t={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},bt===null?Oe.memoizedState=bt=t:bt=bt.next=t}return bt}function id(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yl(t){var i=gl;return gl+=1,$a===null&&($a=[]),t=Jg($a,t,i),i=Oe,(bt===null?i.memoizedState:bt.next)===null&&(i=i.alternate,K.H=i===null||i.memoizedState===null?zy:qy),t}function mc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return yl(t);if(t.$$typeof===ie)return Jt(t)}throw Error(s(438,String(t)))}function rd(t){var i=null,a=Oe.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Oe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=id(),Oe.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(t),l=0;l<t;l++)a[l]=O;return i.index++,a}function tr(t,i){return typeof i=="function"?i(t):i}function pc(t){var i=Rt();return sd(i,tt,t)}function sd(t,i,a){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=t.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=t.baseState,h===null)t.memoizedState=d;else{i=h.next;var T=v=null,C=null,z=i,X=!1;do{var J=z.lane&-536870913;if(J!==z.lane?(ze&J)===J:(kr&J)===J){var H=z.revertLane;if(H===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),J===qa&&(X=!0);else if((kr&H)===H){z=z.next,H===qa&&(X=!0);continue}else J={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},C===null?(T=C=J,v=d):C=C.next=J,Oe.lanes|=H,zr|=H;J=z.action,Ks&&a(d,J),d=z.hasEagerState?z.eagerState:a(d,J)}else H={lane:J,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},C===null?(T=C=H,v=d):C=C.next=H,Oe.lanes|=J,zr|=J;z=z.next}while(z!==null&&z!==i);if(C===null?v=d:C.next=T,!An(d,t.memoizedState)&&(jt=!0,X&&(a=Ha,a!==null)))throw a;t.memoizedState=d,t.baseState=v,t.baseQueue=C,l.lastRenderedState=d}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function ad(t){var i=Rt(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=t(d,v.action),v=v.next;while(v!==h);An(d,i.memoizedState)||(jt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function oy(t,i,a){var l=Oe,h=Rt(),d=Fe;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!An((tt||h).memoizedState,a);v&&(h.memoizedState=a,jt=!0),h=h.queue;var T=cy.bind(null,l,h,t);if(_l(2048,8,T,[t]),h.getSnapshot!==i||v||bt!==null&&bt.memoizedState.tag&1){if(l.flags|=2048,Ka(9,gc(),uy.bind(null,l,h,a,i),null),at===null)throw Error(s(349));d||(kr&124)!==0||ly(l,i,a)}return a}function ly(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Oe.updateQueue,i===null?(i=id(),Oe.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function uy(t,i,a,l){i.value=a,i.getSnapshot=l,hy(i)&&fy(t)}function cy(t,i,a){return a(function(){hy(i)&&fy(t)})}function hy(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!An(t,a)}catch{return!0}}function fy(t){var i=Ua(t,2);i!==null&&Dn(i,t,2)}function od(t){var i=fn();if(typeof t=="function"){var a=t;if(t=a(),Ks){Tn(!0);try{a()}finally{Tn(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:t},i}function dy(t,i,a,l){return t.baseState=a,sd(t,tt,typeof l=="function"?l:tr)}function fA(t,i,a,l,h){if(_c(t))throw Error(s(485));if(t=i.action,t!==null){var d={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};K.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,my(i,d)):(d.next=a.next,i.pending=a.next=d)}}function my(t,i){var a=i.action,l=i.payload,h=t.state;if(i.isTransition){var d=K.T,v={};K.T=v;try{var T=a(h,l),C=K.S;C!==null&&C(v,T),py(t,i,T)}catch(z){ld(t,i,z)}finally{K.T=d}}else try{d=a(h,l),py(t,i,d)}catch(z){ld(t,i,z)}}function py(t,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){gy(t,i,l)},function(l){return ld(t,i,l)}):gy(t,i,a)}function gy(t,i,a){i.status="fulfilled",i.value=a,yy(i),t.state=a,i=t.pending,i!==null&&(a=i.next,a===i?t.pending=null:(a=a.next,i.next=a,my(t,a)))}function ld(t,i,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,yy(i),i=i.next;while(i!==l)}t.action=null}function yy(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function _y(t,i){return i}function vy(t,i){if(Fe){var a=at.formState;if(a!==null){e:{var l=Oe;if(Fe){if(gt){t:{for(var h=gt,d=Ei;h.nodeType!==8;){if(!d){h=null;break t}if(h=ni(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){gt=ni(h.nextSibling),l=h.data==="F!";break e}}Hs(l)}l=!1}l&&(i=a[0])}}return a=fn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_y,lastRenderedState:i},a.queue=l,a=Uy.bind(null,Oe,l),l.dispatch=a,l=od(!1),d=dd.bind(null,Oe,!1,l.queue),l=fn(),h={state:i,dispatch:null,action:t,pending:null},l.queue=h,a=fA.bind(null,Oe,h,d,a),h.dispatch=a,l.memoizedState=t,[i,a,!1]}function Ey(t){var i=Rt();return Ty(i,tt,t)}function Ty(t,i,a){if(i=sd(t,i,_y)[0],t=pc(tr)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=yl(i)}catch(v){throw v===hl?uc:v}else l=i;i=Rt();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(Oe.flags|=2048,Ka(9,gc(),dA.bind(null,h,a),null)),[l,d,t]}function dA(t,i){t.action=i}function Sy(t){var i=Rt(),a=tt;if(a!==null)return Ty(i,a,t);Rt(),i=i.memoizedState,a=Rt();var l=a.queue.dispatch;return a.memoizedState=t,[i,l,!1]}function Ka(t,i,a,l){return t={tag:t,create:a,deps:l,inst:i,next:null},i=Oe.updateQueue,i===null&&(i=id(),Oe.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t),t}function gc(){return{destroy:void 0,resource:void 0}}function Ay(){return Rt().memoizedState}function yc(t,i,a,l){var h=fn();l=l===void 0?null:l,Oe.flags|=t,h.memoizedState=Ka(1|i,gc(),a,l)}function _l(t,i,a,l){var h=Rt();l=l===void 0?null:l;var d=h.memoizedState.inst;tt!==null&&l!==null&&Zf(l,tt.memoizedState.deps)?h.memoizedState=Ka(i,d,a,l):(Oe.flags|=t,h.memoizedState=Ka(1|i,d,a,l))}function wy(t,i){yc(8390656,8,t,i)}function by(t,i){_l(2048,8,t,i)}function Ry(t,i){return _l(4,2,t,i)}function Iy(t,i){return _l(4,4,t,i)}function Cy(t,i){if(typeof i=="function"){t=t();var a=i(t);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Dy(t,i,a){a=a!=null?a.concat([t]):null,_l(4,4,Cy.bind(null,i,t),a)}function ud(){}function Ny(t,i){var a=Rt();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Zf(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Oy(t,i){var a=Rt();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Zf(i,l[1]))return l[0];if(l=t(),Ks){Tn(!0);try{t()}finally{Tn(!1)}}return a.memoizedState=[l,i],l}function cd(t,i,a){return a===void 0||(kr&1073741824)!==0?t.memoizedState=i:(t.memoizedState=a,t=k_(),Oe.lanes|=t,zr|=t,a)}function xy(t,i,a,l){return An(a,i)?a:Fa.current!==null?(t=cd(t,a,l),An(t,i)||(jt=!0),t):(kr&42)===0?(jt=!0,t.memoizedState=a):(t=k_(),Oe.lanes|=t,zr|=t,i)}function My(t,i,a,l,h){var d=re.p;re.p=d!==0&&8>d?d:8;var v=K.T,T={};K.T=T,dd(t,!1,i,a);try{var C=h(),z=K.S;if(z!==null&&z(T,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var X=uA(C,l);vl(t,i,X,Cn(t))}else vl(t,i,l,Cn(t))}catch(J){vl(t,i,{then:function(){},status:"rejected",reason:J},Cn())}finally{re.p=d,K.T=v}}function mA(){}function hd(t,i,a,l){if(t.tag!==5)throw Error(s(476));var h=ky(t).queue;My(t,h,i,le,a===null?mA:function(){return Vy(t),a(l)})}function ky(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:le},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:a},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Vy(t){var i=ky(t).next.queue;vl(t,i,{},Cn())}function fd(){return Jt(Ll)}function Py(){return Rt().memoizedState}function Ly(){return Rt().memoizedState}function pA(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var a=Cn();t=xr(a);var l=Mr(i,t,a);l!==null&&(Dn(l,i,a),dl(l,i,a)),i={cache:qf()},t.payload=i;return}i=i.return}}function gA(t,i,a){var l=Cn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},_c(t)?By(i,a):(a=xf(t,i,a,l),a!==null&&(Dn(a,t,l),jy(a,i,l)))}function Uy(t,i,a){var l=Cn();vl(t,i,a,l)}function vl(t,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(_c(t))By(i,h);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,T=d(v,a);if(h.hasEagerState=!0,h.eagerState=T,An(T,v))return tc(t,i,h,0),at===null&&ec(),!1}catch{}finally{}if(a=xf(t,i,h,l),a!==null)return Dn(a,t,l),jy(a,i,l),!0}return!1}function dd(t,i,a,l){if(l={lane:2,revertLane:Gd(),action:l,hasEagerState:!1,eagerState:null,next:null},_c(t)){if(i)throw Error(s(479))}else i=xf(t,a,l,2),i!==null&&Dn(i,t,2)}function _c(t){var i=t.alternate;return t===Oe||i!==null&&i===Oe}function By(t,i){Ga=fc=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function jy(t,i,a){if((a&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,zo(t,a)}}var vc={readContext:Jt,use:mc,useCallback:Et,useContext:Et,useEffect:Et,useImperativeHandle:Et,useLayoutEffect:Et,useInsertionEffect:Et,useMemo:Et,useReducer:Et,useRef:Et,useState:Et,useDebugValue:Et,useDeferredValue:Et,useTransition:Et,useSyncExternalStore:Et,useId:Et,useHostTransitionStatus:Et,useFormState:Et,useActionState:Et,useOptimistic:Et,useMemoCache:Et,useCacheRefresh:Et},zy={readContext:Jt,use:mc,useCallback:function(t,i){return fn().memoizedState=[t,i===void 0?null:i],t},useContext:Jt,useEffect:wy,useImperativeHandle:function(t,i,a){a=a!=null?a.concat([t]):null,yc(4194308,4,Cy.bind(null,i,t),a)},useLayoutEffect:function(t,i){return yc(4194308,4,t,i)},useInsertionEffect:function(t,i){yc(4,2,t,i)},useMemo:function(t,i){var a=fn();i=i===void 0?null:i;var l=t();if(Ks){Tn(!0);try{t()}finally{Tn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(t,i,a){var l=fn();if(a!==void 0){var h=a(i);if(Ks){Tn(!0);try{a(i)}finally{Tn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=gA.bind(null,Oe,t),[l.memoizedState,t]},useRef:function(t){var i=fn();return t={current:t},i.memoizedState=t},useState:function(t){t=od(t);var i=t.queue,a=Uy.bind(null,Oe,i);return i.dispatch=a,[t.memoizedState,a]},useDebugValue:ud,useDeferredValue:function(t,i){var a=fn();return cd(a,t,i)},useTransition:function(){var t=od(!1);return t=My.bind(null,Oe,t.queue,!0,!1),fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,a){var l=Oe,h=fn();if(Fe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),at===null)throw Error(s(349));(ze&124)!==0||ly(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,wy(cy.bind(null,l,d,t),[t]),l.flags|=2048,Ka(9,gc(),uy.bind(null,l,d,a,i),null),a},useId:function(){var t=fn(),i=at.identifierPrefix;if(Fe){var a=Zi,l=Wi;a=(l&~(1<<32-Zt(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=dc++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=cA++,i="«"+i+"r"+a.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:fd,useFormState:vy,useActionState:vy,useOptimistic:function(t){var i=fn();i.memoizedState=i.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=dd.bind(null,Oe,!0,a),a.dispatch=i,[t,i]},useMemoCache:rd,useCacheRefresh:function(){return fn().memoizedState=pA.bind(null,Oe)}},qy={readContext:Jt,use:mc,useCallback:Ny,useContext:Jt,useEffect:by,useImperativeHandle:Dy,useInsertionEffect:Ry,useLayoutEffect:Iy,useMemo:Oy,useReducer:pc,useRef:Ay,useState:function(){return pc(tr)},useDebugValue:ud,useDeferredValue:function(t,i){var a=Rt();return xy(a,tt.memoizedState,t,i)},useTransition:function(){var t=pc(tr)[0],i=Rt().memoizedState;return[typeof t=="boolean"?t:yl(t),i]},useSyncExternalStore:oy,useId:Py,useHostTransitionStatus:fd,useFormState:Ey,useActionState:Ey,useOptimistic:function(t,i){var a=Rt();return dy(a,tt,t,i)},useMemoCache:rd,useCacheRefresh:Ly},yA={readContext:Jt,use:mc,useCallback:Ny,useContext:Jt,useEffect:by,useImperativeHandle:Dy,useInsertionEffect:Ry,useLayoutEffect:Iy,useMemo:Oy,useReducer:ad,useRef:Ay,useState:function(){return ad(tr)},useDebugValue:ud,useDeferredValue:function(t,i){var a=Rt();return tt===null?cd(a,t,i):xy(a,tt.memoizedState,t,i)},useTransition:function(){var t=ad(tr)[0],i=Rt().memoizedState;return[typeof t=="boolean"?t:yl(t),i]},useSyncExternalStore:oy,useId:Py,useHostTransitionStatus:fd,useFormState:Sy,useActionState:Sy,useOptimistic:function(t,i){var a=Rt();return tt!==null?dy(a,tt,t,i):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:rd,useCacheRefresh:Ly},Qa=null,El=0;function Ec(t){var i=El;return El+=1,Qa===null&&(Qa=[]),Jg(Qa,t,i)}function Tl(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Tc(t,i){throw i.$$typeof===A?Error(s(525)):(t=Object.prototype.toString.call(i),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Hy(t){var i=t._init;return i(t._payload)}function Fy(t){function i(P,N){if(t){var j=P.deletions;j===null?(P.deletions=[N],P.flags|=16):j.push(N)}}function a(P,N){if(!t)return null;for(;N!==null;)i(P,N),N=N.sibling;return null}function l(P){for(var N=new Map;P!==null;)P.key!==null?N.set(P.key,P):N.set(P.index,P),P=P.sibling;return N}function h(P,N){return P=Xi(P,N),P.index=0,P.sibling=null,P}function d(P,N,j){return P.index=j,t?(j=P.alternate,j!==null?(j=j.index,j<N?(P.flags|=67108866,N):j):(P.flags|=67108866,N)):(P.flags|=1048576,N)}function v(P){return t&&P.alternate===null&&(P.flags|=67108866),P}function T(P,N,j,W){return N===null||N.tag!==6?(N=kf(j,P.mode,W),N.return=P,N):(N=h(N,j),N.return=P,N)}function C(P,N,j,W){var he=j.type;return he===q?X(P,N,j.props.children,W,j.key):N!==null&&(N.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===R&&Hy(he)===N.type)?(N=h(N,j.props),Tl(N,j),N.return=P,N):(N=ic(j.type,j.key,j.props,null,P.mode,W),Tl(N,j),N.return=P,N)}function z(P,N,j,W){return N===null||N.tag!==4||N.stateNode.containerInfo!==j.containerInfo||N.stateNode.implementation!==j.implementation?(N=Vf(j,P.mode,W),N.return=P,N):(N=h(N,j.children||[]),N.return=P,N)}function X(P,N,j,W,he){return N===null||N.tag!==7?(N=Bs(j,P.mode,W,he),N.return=P,N):(N=h(N,j),N.return=P,N)}function J(P,N,j){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=kf(""+N,P.mode,j),N.return=P,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case w:return j=ic(N.type,N.key,N.props,null,P.mode,j),Tl(j,N),j.return=P,j;case L:return N=Vf(N,P.mode,j),N.return=P,N;case R:var W=N._init;return N=W(N._payload),J(P,N,j)}if(Ce(N)||V(N))return N=Bs(N,P.mode,j,null),N.return=P,N;if(typeof N.then=="function")return J(P,Ec(N),j);if(N.$$typeof===ie)return J(P,oc(P,N),j);Tc(P,N)}return null}function H(P,N,j,W){var he=N!==null?N.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return he!==null?null:T(P,N,""+j,W);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case w:return j.key===he?C(P,N,j,W):null;case L:return j.key===he?z(P,N,j,W):null;case R:return he=j._init,j=he(j._payload),H(P,N,j,W)}if(Ce(j)||V(j))return he!==null?null:X(P,N,j,W,null);if(typeof j.then=="function")return H(P,N,Ec(j),W);if(j.$$typeof===ie)return H(P,N,oc(P,j),W);Tc(P,j)}return null}function F(P,N,j,W,he){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return P=P.get(j)||null,T(N,P,""+W,he);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case w:return P=P.get(W.key===null?j:W.key)||null,C(N,P,W,he);case L:return P=P.get(W.key===null?j:W.key)||null,z(N,P,W,he);case R:var xe=W._init;return W=xe(W._payload),F(P,N,j,W,he)}if(Ce(W)||V(W))return P=P.get(j)||null,X(N,P,W,he,null);if(typeof W.then=="function")return F(P,N,j,Ec(W),he);if(W.$$typeof===ie)return F(P,N,j,oc(N,W),he);Tc(N,W)}return null}function Ae(P,N,j,W){for(var he=null,xe=null,me=N,Ee=N=0,qt=null;me!==null&&Ee<j.length;Ee++){me.index>Ee?(qt=me,me=null):qt=me.sibling;var He=H(P,me,j[Ee],W);if(He===null){me===null&&(me=qt);break}t&&me&&He.alternate===null&&i(P,me),N=d(He,N,Ee),xe===null?he=He:xe.sibling=He,xe=He,me=qt}if(Ee===j.length)return a(P,me),Fe&&zs(P,Ee),he;if(me===null){for(;Ee<j.length;Ee++)me=J(P,j[Ee],W),me!==null&&(N=d(me,N,Ee),xe===null?he=me:xe.sibling=me,xe=me);return Fe&&zs(P,Ee),he}for(me=l(me);Ee<j.length;Ee++)qt=F(me,P,Ee,j[Ee],W),qt!==null&&(t&&qt.alternate!==null&&me.delete(qt.key===null?Ee:qt.key),N=d(qt,N,Ee),xe===null?he=qt:xe.sibling=qt,xe=qt);return t&&me.forEach(function(Xr){return i(P,Xr)}),Fe&&zs(P,Ee),he}function _e(P,N,j,W){if(j==null)throw Error(s(151));for(var he=null,xe=null,me=N,Ee=N=0,qt=null,He=j.next();me!==null&&!He.done;Ee++,He=j.next()){me.index>Ee?(qt=me,me=null):qt=me.sibling;var Xr=H(P,me,He.value,W);if(Xr===null){me===null&&(me=qt);break}t&&me&&Xr.alternate===null&&i(P,me),N=d(Xr,N,Ee),xe===null?he=Xr:xe.sibling=Xr,xe=Xr,me=qt}if(He.done)return a(P,me),Fe&&zs(P,Ee),he;if(me===null){for(;!He.done;Ee++,He=j.next())He=J(P,He.value,W),He!==null&&(N=d(He,N,Ee),xe===null?he=He:xe.sibling=He,xe=He);return Fe&&zs(P,Ee),he}for(me=l(me);!He.done;Ee++,He=j.next())He=F(me,P,Ee,He.value,W),He!==null&&(t&&He.alternate!==null&&me.delete(He.key===null?Ee:He.key),N=d(He,N,Ee),xe===null?he=He:xe.sibling=He,xe=He);return t&&me.forEach(function(_w){return i(P,_w)}),Fe&&zs(P,Ee),he}function it(P,N,j,W){if(typeof j=="object"&&j!==null&&j.type===q&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case w:e:{for(var he=j.key;N!==null;){if(N.key===he){if(he=j.type,he===q){if(N.tag===7){a(P,N.sibling),W=h(N,j.props.children),W.return=P,P=W;break e}}else if(N.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===R&&Hy(he)===N.type){a(P,N.sibling),W=h(N,j.props),Tl(W,j),W.return=P,P=W;break e}a(P,N);break}else i(P,N);N=N.sibling}j.type===q?(W=Bs(j.props.children,P.mode,W,j.key),W.return=P,P=W):(W=ic(j.type,j.key,j.props,null,P.mode,W),Tl(W,j),W.return=P,P=W)}return v(P);case L:e:{for(he=j.key;N!==null;){if(N.key===he)if(N.tag===4&&N.stateNode.containerInfo===j.containerInfo&&N.stateNode.implementation===j.implementation){a(P,N.sibling),W=h(N,j.children||[]),W.return=P,P=W;break e}else{a(P,N);break}else i(P,N);N=N.sibling}W=Vf(j,P.mode,W),W.return=P,P=W}return v(P);case R:return he=j._init,j=he(j._payload),it(P,N,j,W)}if(Ce(j))return Ae(P,N,j,W);if(V(j)){if(he=V(j),typeof he!="function")throw Error(s(150));return j=he.call(j),_e(P,N,j,W)}if(typeof j.then=="function")return it(P,N,Ec(j),W);if(j.$$typeof===ie)return it(P,N,oc(P,j),W);Tc(P,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,N!==null&&N.tag===6?(a(P,N.sibling),W=h(N,j),W.return=P,P=W):(a(P,N),W=kf(j,P.mode,W),W.return=P,P=W),v(P)):a(P,N)}return function(P,N,j,W){try{El=0;var he=it(P,N,j,W);return Qa=null,he}catch(me){if(me===hl||me===uc)throw me;var xe=wn(29,me,null,P.mode);return xe.lanes=W,xe.return=P,xe}finally{}}}var Ya=Fy(!0),Gy=Fy(!1),zn=Z(null),Ti=null;function Vr(t){var i=t.alternate;ne(kt,kt.current&1),ne(zn,t),Ti===null&&(i===null||Fa.current!==null||i.memoizedState!==null)&&(Ti=t)}function $y(t){if(t.tag===22){if(ne(kt,kt.current),ne(zn,t),Ti===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(Ti=t)}}else Pr()}function Pr(){ne(kt,kt.current),ne(zn,zn.current)}function nr(t){ae(zn),Ti===t&&(Ti=null),ae(kt)}var kt=Z(0);function Sc(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||im(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function md(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:E({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var pd={enqueueSetState:function(t,i,a){t=t._reactInternals;var l=Cn(),h=xr(l);h.payload=i,a!=null&&(h.callback=a),i=Mr(t,h,l),i!==null&&(Dn(i,t,l),dl(i,t,l))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=Cn(),h=xr(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Mr(t,h,l),i!==null&&(Dn(i,t,l),dl(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Cn(),l=xr(a);l.tag=2,i!=null&&(l.callback=i),i=Mr(t,l,a),i!==null&&(Dn(i,t,a),dl(i,t,a))}};function Ky(t,i,a,l,h,d,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!il(a,l)||!il(h,d):!0}function Qy(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&pd.enqueueReplaceState(i,i.state,null)}function Qs(t,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(t=t.defaultProps){a===i&&(a=E({},a));for(var h in t)a[h]===void 0&&(a[h]=t[h])}return a}var Ac=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Yy(t){Ac(t)}function Xy(t){console.error(t)}function Wy(t){Ac(t)}function wc(t,i){try{var a=t.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Zy(t,i,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function gd(t,i,a){return a=xr(a),a.tag=3,a.payload={element:null},a.callback=function(){wc(t,i)},a}function Jy(t){return t=xr(t),t.tag=3,t}function e_(t,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;t.payload=function(){return h(d)},t.callback=function(){Zy(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Zy(i,a,l),typeof h!="function"&&(qr===null?qr=new Set([this]):qr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function _A(t,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&ll(i,a,h,!0),a=zn.current,a!==null){switch(a.tag){case 13:return Ti===null?jd():a.alternate===null&&yt===0&&(yt=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===Gf?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),qd(t,l,h)),!1;case 22:return a.flags|=65536,l===Gf?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),qd(t,l,h)),!1}throw Error(s(435,a.tag))}return qd(t,l,h),jd(),!1}if(Fe)return i=zn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Uf&&(t=Error(s(422),{cause:l}),ol(Ln(t,a)))):(l!==Uf&&(i=Error(s(423),{cause:l}),ol(Ln(i,a))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=Ln(l,a),h=gd(t.stateNode,l,h),Qf(t,h),yt!==4&&(yt=2)),!1;var d=Error(s(520),{cause:l});if(d=Ln(d,a),Cl===null?Cl=[d]:Cl.push(d),yt!==4&&(yt=2),i===null)return!0;l=Ln(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,t=h&-h,a.lanes|=t,t=gd(a.stateNode,l,t),Qf(a,t),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(qr===null||!qr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=Jy(h),e_(h,t,a,l),Qf(a,h),!1}a=a.return}while(a!==null);return!1}var t_=Error(s(461)),jt=!1;function $t(t,i,a,l){i.child=t===null?Gy(i,null,a,l):Ya(i,t.child,a,l)}function n_(t,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return Gs(i),l=Jf(t,i,a,v,d,h),T=ed(),t!==null&&!jt?(td(t,i,h),ir(t,i,h)):(Fe&&T&&Pf(i),i.flags|=1,$t(t,i,l,h),i.child)}function i_(t,i,a,l,h){if(t===null){var d=a.type;return typeof d=="function"&&!Mf(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,r_(t,i,d,l,h)):(t=ic(a.type,null,l,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!wd(t,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:il,a(v,l)&&t.ref===i.ref)return ir(t,i,h)}return i.flags|=1,t=Xi(d,l),t.ref=i.ref,t.return=i,i.child=t}function r_(t,i,a,l,h){if(t!==null){var d=t.memoizedProps;if(il(d,l)&&t.ref===i.ref)if(jt=!1,i.pendingProps=l=d,wd(t,h))(t.flags&131072)!==0&&(jt=!0);else return i.lanes=t.lanes,ir(t,i,h)}return yd(t,i,a,l,h)}function s_(t,i,a){var l=i.pendingProps,h=l.children,d=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,t!==null){for(h=i.child=t.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return a_(t,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&lc(i,d!==null?d.cachePool:null),d!==null?ry(i,d):Xf(),$y(i);else return i.lanes=i.childLanes=536870912,a_(t,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(lc(i,d.cachePool),ry(i,d),Pr(),i.memoizedState=null):(t!==null&&lc(i,null),Xf(),Pr());return $t(t,i,h,a),i.child}function a_(t,i,a,l){var h=Ff();return h=h===null?null:{parent:Mt._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},t!==null&&lc(i,null),Xf(),$y(i),t!==null&&ll(t,i,l,!0),null}function bc(t,i){var a=i.ref;if(a===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(i.flags|=4194816)}}function yd(t,i,a,l,h){return Gs(i),a=Jf(t,i,a,l,void 0,h),l=ed(),t!==null&&!jt?(td(t,i,h),ir(t,i,h)):(Fe&&l&&Pf(i),i.flags|=1,$t(t,i,a,h),i.child)}function o_(t,i,a,l,h,d){return Gs(i),i.updateQueue=null,a=ay(i,l,a,h),sy(t),l=ed(),t!==null&&!jt?(td(t,i,d),ir(t,i,d)):(Fe&&l&&Pf(i),i.flags|=1,$t(t,i,a,d),i.child)}function l_(t,i,a,l,h){if(Gs(i),i.stateNode===null){var d=Ba,v=a.contextType;typeof v=="object"&&v!==null&&(d=Jt(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=pd,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},$f(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Jt(v):Ba,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(md(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&pd.enqueueReplaceState(d,d.state,null),pl(i,l,d,h),ml(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var T=i.memoizedProps,C=Qs(a,T);d.props=C;var z=d.context,X=a.contextType;v=Ba,typeof X=="object"&&X!==null&&(v=Jt(X));var J=a.getDerivedStateFromProps;X=typeof J=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,X||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||z!==v)&&Qy(i,d,l,v),Or=!1;var H=i.memoizedState;d.state=H,pl(i,l,d,h),ml(),z=i.memoizedState,T||H!==z||Or?(typeof J=="function"&&(md(i,a,J,l),z=i.memoizedState),(C=Or||Ky(i,a,C,l,H,z,v))?(X||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=z),d.props=l,d.state=z,d.context=v,l=C):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Kf(t,i),v=i.memoizedProps,X=Qs(a,v),d.props=X,J=i.pendingProps,H=d.context,z=a.contextType,C=Ba,typeof z=="object"&&z!==null&&(C=Jt(z)),T=a.getDerivedStateFromProps,(z=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==J||H!==C)&&Qy(i,d,l,C),Or=!1,H=i.memoizedState,d.state=H,pl(i,l,d,h),ml();var F=i.memoizedState;v!==J||H!==F||Or||t!==null&&t.dependencies!==null&&ac(t.dependencies)?(typeof T=="function"&&(md(i,a,T,l),F=i.memoizedState),(X=Or||Ky(i,a,X,l,H,F,C)||t!==null&&t.dependencies!==null&&ac(t.dependencies))?(z||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,F,C),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,F,C)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&H===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&H===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=F),d.props=l,d.state=F,d.context=C,l=X):(typeof d.componentDidUpdate!="function"||v===t.memoizedProps&&H===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&H===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,bc(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=Ya(i,t.child,null,h),i.child=Ya(i,null,a,h)):$t(t,i,a,h),i.memoizedState=d.state,t=i.child):t=ir(t,i,h),t}function u_(t,i,a,l){return al(),i.flags|=256,$t(t,i,a,l),i.child}var _d={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vd(t){return{baseLanes:t,cachePool:Xg()}}function Ed(t,i,a){return t=t!==null?t.childLanes&~a:0,i&&(t|=qn),t}function c_(t,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=t!==null&&t.memoizedState===null?!1:(kt.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,t===null){if(Fe){if(h?Vr(i):Pr(),Fe){var T=gt,C;if(C=T){e:{for(C=T,T=Ei;C.nodeType!==8;){if(!T){T=null;break e}if(C=ni(C.nextSibling),C===null){T=null;break e}}T=C}T!==null?(i.memoizedState={dehydrated:T,treeContext:js!==null?{id:Wi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},C=wn(18,null,null,0),C.stateNode=T,C.return=i,i.child=C,cn=i,gt=null,C=!0):C=!1}C||Hs(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return im(T)?i.lanes=32:i.lanes=536870912,null;nr(i)}return T=l.children,l=l.fallback,h?(Pr(),h=i.mode,T=Rc({mode:"hidden",children:T},h),l=Bs(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,h=i.child,h.memoizedState=vd(a),h.childLanes=Ed(t,v,a),i.memoizedState=_d,l):(Vr(i),Td(i,T))}if(C=t.memoizedState,C!==null&&(T=C.dehydrated,T!==null)){if(d)i.flags&256?(Vr(i),i.flags&=-257,i=Sd(t,i,a)):i.memoizedState!==null?(Pr(),i.child=t.child,i.flags|=128,i=null):(Pr(),h=l.fallback,T=i.mode,l=Rc({mode:"visible",children:l.children},T),h=Bs(h,T,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,Ya(i,t.child,null,a),l=i.child,l.memoizedState=vd(a),l.childLanes=Ed(t,v,a),i.memoizedState=_d,i=h);else if(Vr(i),im(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var z=v.dgst;v=z,l=Error(s(419)),l.stack="",l.digest=v,ol({value:l,source:null,stack:null}),i=Sd(t,i,a)}else if(jt||ll(t,i,a,!1),v=(a&t.childLanes)!==0,jt||v){if(v=at,v!==null&&(l=a&-a,l=(l&42)!==0?1:Ar(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==C.retryLane))throw C.retryLane=l,Ua(t,l),Dn(v,t,l),t_;T.data==="$?"||jd(),i=Sd(t,i,a)}else T.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=C.treeContext,gt=ni(T.nextSibling),cn=i,Fe=!0,qs=null,Ei=!1,t!==null&&(Bn[jn++]=Wi,Bn[jn++]=Zi,Bn[jn++]=js,Wi=t.id,Zi=t.overflow,js=i),i=Td(i,l.children),i.flags|=4096);return i}return h?(Pr(),h=l.fallback,T=i.mode,C=t.child,z=C.sibling,l=Xi(C,{mode:"hidden",children:l.children}),l.subtreeFlags=C.subtreeFlags&65011712,z!==null?h=Xi(z,h):(h=Bs(h,T,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=t.child.memoizedState,T===null?T=vd(a):(C=T.cachePool,C!==null?(z=Mt._currentValue,C=C.parent!==z?{parent:z,pool:z}:C):C=Xg(),T={baseLanes:T.baseLanes|a,cachePool:C}),h.memoizedState=T,h.childLanes=Ed(t,v,a),i.memoizedState=_d,l):(Vr(i),a=t.child,t=a.sibling,a=Xi(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,t!==null&&(v=i.deletions,v===null?(i.deletions=[t],i.flags|=16):v.push(t)),i.child=a,i.memoizedState=null,a)}function Td(t,i){return i=Rc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Rc(t,i){return t=wn(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Sd(t,i,a){return Ya(i,t.child,null,a),t=Td(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function h_(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),jf(t.return,i,a)}function Ad(t,i,a,l,h){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function f_(t,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if($t(t,i,l.children,a),l=kt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&h_(t,a,i);else if(t.tag===19)h_(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(ne(kt,l),h){case"forwards":for(a=i.child,h=null;a!==null;)t=a.alternate,t!==null&&Sc(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Ad(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&Sc(t)===null){i.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}Ad(i,!0,a,null,d);break;case"together":Ad(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ir(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),zr|=i.lanes,(a&i.childLanes)===0)if(t!==null){if(ll(t,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(s(153));if(i.child!==null){for(t=i.child,a=Xi(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Xi(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function wd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&ac(t)))}function vA(t,i,a){switch(i.tag){case 3:Ye(i,i.stateNode.containerInfo),Nr(i,Mt,t.memoizedState.cache),al();break;case 27:case 5:Kn(i);break;case 4:Ye(i,i.stateNode.containerInfo);break;case 10:Nr(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Vr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?c_(t,i,a):(Vr(i),t=ir(t,i,a),t!==null?t.sibling:null);Vr(i);break;case 19:var h=(t.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(ll(t,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return f_(t,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ne(kt,kt.current),l)break;return null;case 22:case 23:return i.lanes=0,s_(t,i,a);case 24:Nr(i,Mt,t.memoizedState.cache)}return ir(t,i,a)}function d_(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps)jt=!0;else{if(!wd(t,a)&&(i.flags&128)===0)return jt=!1,vA(t,i,a);jt=(t.flags&131072)!==0}else jt=!1,Fe&&(i.flags&1048576)!==0&&Hg(i,sc,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")Mf(l)?(t=Qs(l,t),i.tag=1,i=l_(null,i,l,t,a)):(i.tag=0,i=yd(null,i,l,t,a));else{if(l!=null){if(h=l.$$typeof,h===pe){i.tag=11,i=n_(null,i,l,t,a);break e}else if(h===x){i.tag=14,i=i_(null,i,l,t,a);break e}}throw i=Ie(l)||l,Error(s(306,i,""))}}return i;case 0:return yd(t,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Qs(l,i.pendingProps),l_(t,i,l,h,a);case 3:e:{if(Ye(i,i.stateNode.containerInfo),t===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,Kf(t,i),pl(i,l,null,a);var v=i.memoizedState;if(l=v.cache,Nr(i,Mt,l),l!==d.cache&&zf(i,[Mt],a,!0),ml(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=u_(t,i,l,a);break e}else if(l!==h){h=Ln(Error(s(424)),i),ol(h),i=u_(t,i,l,a);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(gt=ni(t.firstChild),cn=i,Fe=!0,qs=null,Ei=!0,a=Gy(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(al(),l===h){i=ir(t,i,a);break e}$t(t,i,l,a)}i=i.child}return i;case 26:return bc(t,i),t===null?(a=yv(i.type,null,i.pendingProps,null))?i.memoizedState=a:Fe||(a=i.type,t=i.pendingProps,l=jc(ve.current).createElement(a),l[Nt]=i,l[At]=t,Qt(l,a,t),vt(l),i.stateNode=l):i.memoizedState=yv(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Kn(i),t===null&&Fe&&(l=i.stateNode=mv(i.type,i.pendingProps,ve.current),cn=i,Ei=!0,h=gt,Gr(i.type)?(rm=h,gt=ni(l.firstChild)):gt=h),$t(t,i,i.pendingProps.children,a),bc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Fe&&((h=l=gt)&&(l=KA(l,i.type,i.pendingProps,Ei),l!==null?(i.stateNode=l,cn=i,gt=ni(l.firstChild),Ei=!1,h=!0):h=!1),h||Hs(i)),Kn(i),h=i.type,d=i.pendingProps,v=t!==null?t.memoizedProps:null,l=d.children,em(h,d)?l=null:v!==null&&em(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=Jf(t,i,hA,null,null,a),Ll._currentValue=h),bc(t,i),$t(t,i,l,a),i.child;case 6:return t===null&&Fe&&((t=a=gt)&&(a=QA(a,i.pendingProps,Ei),a!==null?(i.stateNode=a,cn=i,gt=null,t=!0):t=!1),t||Hs(i)),null;case 13:return c_(t,i,a);case 4:return Ye(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Ya(i,null,l,a):$t(t,i,l,a),i.child;case 11:return n_(t,i,i.type,i.pendingProps,a);case 7:return $t(t,i,i.pendingProps,a),i.child;case 8:return $t(t,i,i.pendingProps.children,a),i.child;case 12:return $t(t,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,Nr(i,i.type,l.value),$t(t,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Gs(i),h=Jt(h),l=l(h),i.flags|=1,$t(t,i,l,a),i.child;case 14:return i_(t,i,i.type,i.pendingProps,a);case 15:return r_(t,i,i.type,i.pendingProps,a);case 19:return f_(t,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},t===null?(a=Rc(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Xi(t.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return s_(t,i,a);case 24:return Gs(i),l=Jt(Mt),t===null?(h=Ff(),h===null&&(h=at,d=qf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},$f(i),Nr(i,Mt,h)):((t.lanes&a)!==0&&(Kf(t,i),pl(i,null,null,a),ml()),h=t.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Nr(i,Mt,l)):(l=d.cache,Nr(i,Mt,l),l!==h.cache&&zf(i,[Mt],a,!0))),$t(t,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function rr(t){t.flags|=4}function m_(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Sv(i)){if(i=zn.current,i!==null&&((ze&4194048)===ze?Ti!==null:(ze&62914560)!==ze&&(ze&536870912)===0||i!==Ti))throw fl=Gf,Wg;t.flags|=8192}}function Ic(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Bo():536870912,t.lanes|=i,Ja|=i)}function Sl(t,i){if(!Fe)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function ht(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function EA(t,i,a){var l=i.pendingProps;switch(Lf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(i),null;case 1:return ht(i),null;case 3:return a=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),er(Mt),vn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(sl(i)?rr(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,$g())),ht(i),null;case 26:return a=i.memoizedState,t===null?(rr(i),a!==null?(ht(i),m_(i,a)):(ht(i),i.flags&=-16777217)):a?a!==t.memoizedState?(rr(i),ht(i),m_(i,a)):(ht(i),i.flags&=-16777217):(t.memoizedProps!==l&&rr(i),ht(i),i.flags&=-16777217),null;case 27:En(i),a=ve.current;var h=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&rr(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ht(i),null}t=de.current,sl(i)?Fg(i):(t=mv(h,l,a),i.stateNode=t,rr(i))}return ht(i),null;case 5:if(En(i),a=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&rr(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ht(i),null}if(t=de.current,sl(i))Fg(i);else{switch(h=jc(ve.current),t){case 1:t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=h.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}t[Nt]=i,t[At]=l;e:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)t.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break e;for(;h.sibling===null;){if(h.return===null||h.return===i)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=t;e:switch(Qt(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&rr(i)}}return ht(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&rr(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(t=ve.current,sl(i)){if(t=i.stateNode,a=i.memoizedProps,l=null,h=cn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[Nt]=i,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||ov(t.nodeValue,a)),t||Hs(i)}else t=jc(t).createTextNode(l),t[Nt]=i,i.stateNode=t}return ht(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=sl(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Nt]=i}else al(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ht(i),h=!1}else h=$g(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(nr(i),i):(nr(i),null)}if(nr(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==t&&a&&(i.child.flags|=8192),Ic(i,i.updateQueue),ht(i),null;case 4:return vn(),t===null&&Yd(i.stateNode.containerInfo),ht(i),null;case 10:return er(i.type),ht(i),null;case 19:if(ae(kt),h=i.memoizedState,h===null)return ht(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)Sl(h,!1);else{if(yt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=Sc(t),d!==null){for(i.flags|=128,Sl(h,!1),t=d.updateQueue,i.updateQueue=t,Ic(i,t),i.subtreeFlags=0,t=a,a=i.child;a!==null;)qg(a,t),a=a.sibling;return ne(kt,kt.current&1|2),i.child}t=t.sibling}h.tail!==null&&an()>Nc&&(i.flags|=128,l=!0,Sl(h,!1),i.lanes=4194304)}else{if(!l)if(t=Sc(d),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,Ic(i,t),Sl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Fe)return ht(i),null}else 2*an()-h.renderingStartTime>Nc&&a!==536870912&&(i.flags|=128,l=!0,Sl(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(t=h.last,t!==null?t.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=an(),i.sibling=null,t=kt.current,ne(kt,l?t&1|2:t&1),i):(ht(i),null);case 22:case 23:return nr(i),Wf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(ht(i),i.subtreeFlags&6&&(i.flags|=8192)):ht(i),a=i.updateQueue,a!==null&&Ic(i,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),t!==null&&ae($s),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),er(Mt),ht(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function TA(t,i){switch(Lf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return er(Mt),vn(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return En(i),null;case 13:if(nr(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(s(340));al()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ae(kt),null;case 4:return vn(),null;case 10:return er(i.type),null;case 22:case 23:return nr(i),Wf(),t!==null&&ae($s),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return er(Mt),null;case 25:return null;default:return null}}function p_(t,i){switch(Lf(i),i.tag){case 3:er(Mt),vn();break;case 26:case 27:case 5:En(i);break;case 4:vn();break;case 13:nr(i);break;case 19:ae(kt);break;case 10:er(i.type);break;case 22:case 23:nr(i),Wf(),t!==null&&ae($s);break;case 24:er(Mt)}}function Al(t,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&t)===t){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(T){rt(i,i.return,T)}}function Lr(t,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&t)===t){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,h=i;var C=a,z=T;try{z()}catch(X){rt(h,C,X)}}}l=l.next}while(l!==d)}}catch(X){rt(i,i.return,X)}}function g_(t){var i=t.updateQueue;if(i!==null){var a=t.stateNode;try{iy(i,a)}catch(l){rt(t,t.return,l)}}}function y_(t,i,a){a.props=Qs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){rt(t,i,l)}}function wl(t,i){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(h){rt(t,i,h)}}function Si(t,i){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){rt(t,i,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){rt(t,i,h)}else a.current=null}function __(t){var i=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){rt(t,t.return,h)}}function bd(t,i,a){try{var l=t.stateNode;qA(l,t.type,a,i),l[At]=i}catch(h){rt(t,t.return,h)}}function v_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Gr(t.type)||t.tag===4}function Rd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||v_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Gr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Id(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(t),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Bc));else if(l!==4&&(l===27&&Gr(t.type)&&(a=t.stateNode,i=null),t=t.child,t!==null))for(Id(t,i,a),t=t.sibling;t!==null;)Id(t,i,a),t=t.sibling}function Cc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(l===27&&Gr(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Cc(t,i,a),t=t.sibling;t!==null;)Cc(t,i,a),t=t.sibling}function E_(t){var i=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Qt(i,l,a),i[Nt]=t,i[At]=a}catch(d){rt(t,t.return,d)}}var sr=!1,Tt=!1,Cd=!1,T_=typeof WeakSet=="function"?WeakSet:Set,zt=null;function SA(t,i){if(t=t.containerInfo,Zd=$c,t=xg(t),Rf(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var v=0,T=-1,C=-1,z=0,X=0,J=t,H=null;t:for(;;){for(var F;J!==a||h!==0&&J.nodeType!==3||(T=v+h),J!==d||l!==0&&J.nodeType!==3||(C=v+l),J.nodeType===3&&(v+=J.nodeValue.length),(F=J.firstChild)!==null;)H=J,J=F;for(;;){if(J===t)break t;if(H===a&&++z===h&&(T=v),H===d&&++X===l&&(C=v),(F=J.nextSibling)!==null)break;J=H,H=J.parentNode}J=F}a=T===-1||C===-1?null:{start:T,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jd={focusedElem:t,selectionRange:a},$c=!1,zt=i;zt!==null;)if(i=zt,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,zt=t;else for(;zt!==null;){switch(i=zt,d=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Ae=Qs(a.type,h,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(Ae,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(_e){rt(a,a.return,_e)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,a=t.nodeType,a===9)nm(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":nm(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=i.sibling,t!==null){t.return=i.return,zt=t;break}zt=i.return}}function S_(t,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Ur(t,a),l&4&&Al(5,a);break;case 1:if(Ur(t,a),l&4)if(t=a.stateNode,i===null)try{t.componentDidMount()}catch(v){rt(a,a.return,v)}else{var h=Qs(a.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(h,i,t.__reactInternalSnapshotBeforeUpdate)}catch(v){rt(a,a.return,v)}}l&64&&g_(a),l&512&&wl(a,a.return);break;case 3:if(Ur(t,a),l&64&&(t=a.updateQueue,t!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{iy(t,i)}catch(v){rt(a,a.return,v)}}break;case 27:i===null&&l&4&&E_(a);case 26:case 5:Ur(t,a),i===null&&l&4&&__(a),l&512&&wl(a,a.return);break;case 12:Ur(t,a);break;case 13:Ur(t,a),l&4&&b_(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=OA.bind(null,a),YA(t,a))));break;case 22:if(l=a.memoizedState!==null||sr,!l){i=i!==null&&i.memoizedState!==null||Tt,h=sr;var d=Tt;sr=l,(Tt=i)&&!d?Br(t,a,(a.subtreeFlags&8772)!==0):Ur(t,a),sr=h,Tt=d}break;case 30:break;default:Ur(t,a)}}function A_(t){var i=t.alternate;i!==null&&(t.alternate=null,A_(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Rr(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ct=null,dn=!1;function ar(t,i,a){for(a=a.child;a!==null;)w_(t,i,a),a=a.sibling}function w_(t,i,a){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(pt,a)}catch{}switch(a.tag){case 26:Tt||Si(a,i),ar(t,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Tt||Si(a,i);var l=ct,h=dn;Gr(a.type)&&(ct=a.stateNode,dn=!1),ar(t,i,a),Ml(a.stateNode),ct=l,dn=h;break;case 5:Tt||Si(a,i);case 6:if(l=ct,h=dn,ct=null,ar(t,i,a),ct=l,dn=h,ct!==null)if(dn)try{(ct.nodeType===9?ct.body:ct.nodeName==="HTML"?ct.ownerDocument.body:ct).removeChild(a.stateNode)}catch(d){rt(a,i,d)}else try{ct.removeChild(a.stateNode)}catch(d){rt(a,i,d)}break;case 18:ct!==null&&(dn?(t=ct,fv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),zl(t)):fv(ct,a.stateNode));break;case 4:l=ct,h=dn,ct=a.stateNode.containerInfo,dn=!0,ar(t,i,a),ct=l,dn=h;break;case 0:case 11:case 14:case 15:Tt||Lr(2,a,i),Tt||Lr(4,a,i),ar(t,i,a);break;case 1:Tt||(Si(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&y_(a,i,l)),ar(t,i,a);break;case 21:ar(t,i,a);break;case 22:Tt=(l=Tt)||a.memoizedState!==null,ar(t,i,a),Tt=l;break;default:ar(t,i,a)}}function b_(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{zl(t)}catch(a){rt(i,i.return,a)}}function AA(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new T_),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new T_),i;default:throw Error(s(435,t.tag))}}function Dd(t,i){var a=AA(t);i.forEach(function(l){var h=xA.bind(null,t,l);a.has(l)||(a.add(l),l.then(h,h))})}function bn(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=t,v=i,T=v;e:for(;T!==null;){switch(T.tag){case 27:if(Gr(T.type)){ct=T.stateNode,dn=!1;break e}break;case 5:ct=T.stateNode,dn=!1;break e;case 3:case 4:ct=T.stateNode.containerInfo,dn=!0;break e}T=T.return}if(ct===null)throw Error(s(160));w_(d,v,h),ct=null,dn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)R_(i,t),i=i.sibling}var ti=null;function R_(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:bn(i,t),Rn(t),l&4&&(Lr(3,t,t.return),Al(3,t),Lr(5,t,t.return));break;case 1:bn(i,t),Rn(t),l&512&&(Tt||a===null||Si(a,a.return)),l&64&&sr&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=ti;if(bn(i,t),Rn(t),l&512&&(Tt||a===null||Si(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[As]||d[Nt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Qt(d,l,a),d[Nt]=t,vt(d),l=d;break e;case"link":var v=Ev("link","href",h).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break t}}d=h.createElement(l),Qt(d,l,a),h.head.appendChild(d);break;case"meta":if(v=Ev("meta","content",h).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break t}}d=h.createElement(l),Qt(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[Nt]=t,vt(d),l=d}t.stateNode=l}else Tv(h,t.type,t.stateNode);else t.stateNode=vv(h,l,t.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?Tv(h,t.type,t.stateNode):vv(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&bd(t,t.memoizedProps,a.memoizedProps)}break;case 27:bn(i,t),Rn(t),l&512&&(Tt||a===null||Si(a,a.return)),a!==null&&l&4&&bd(t,t.memoizedProps,a.memoizedProps);break;case 5:if(bn(i,t),Rn(t),l&512&&(Tt||a===null||Si(a,a.return)),t.flags&32){h=t.stateNode;try{Mn(h,"")}catch(F){rt(t,t.return,F)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,bd(t,h,a!==null?a.memoizedProps:h)),l&1024&&(Cd=!0);break;case 6:if(bn(i,t),Rn(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(F){rt(t,t.return,F)}}break;case 3:if(Hc=null,h=ti,ti=zc(i.containerInfo),bn(i,t),ti=h,Rn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{zl(i.containerInfo)}catch(F){rt(t,t.return,F)}Cd&&(Cd=!1,I_(t));break;case 4:l=ti,ti=zc(t.stateNode.containerInfo),bn(i,t),Rn(t),ti=l;break;case 12:bn(i,t),Rn(t);break;case 13:bn(i,t),Rn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Vd=an()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Dd(t,l)));break;case 22:h=t.memoizedState!==null;var C=a!==null&&a.memoizedState!==null,z=sr,X=Tt;if(sr=z||h,Tt=X||C,bn(i,t),Tt=X,sr=z,Rn(t),l&8192)e:for(i=t.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||C||sr||Tt||Ys(t)),a=null,i=t;;){if(i.tag===5||i.tag===26){if(a===null){C=a=i;try{if(d=C.stateNode,h)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=C.stateNode;var J=C.memoizedProps.style,H=J!=null&&J.hasOwnProperty("display")?J.display:null;T.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(F){rt(C,C.return,F)}}}else if(i.tag===6){if(a===null){C=i;try{C.stateNode.nodeValue=h?"":C.memoizedProps}catch(F){rt(C,C.return,F)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Dd(t,a))));break;case 19:bn(i,t),Rn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Dd(t,l)));break;case 30:break;case 21:break;default:bn(i,t),Rn(t)}}function Rn(t){var i=t.flags;if(i&2){try{for(var a,l=t.return;l!==null;){if(v_(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Rd(t);Cc(t,d,h);break;case 5:var v=a.stateNode;a.flags&32&&(Mn(v,""),a.flags&=-33);var T=Rd(t);Cc(t,T,v);break;case 3:case 4:var C=a.stateNode.containerInfo,z=Rd(t);Id(t,z,C);break;default:throw Error(s(161))}}catch(X){rt(t,t.return,X)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function I_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;I_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Ur(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)S_(t,i.alternate,i),i=i.sibling}function Ys(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Lr(4,i,i.return),Ys(i);break;case 1:Si(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&y_(i,i.return,a),Ys(i);break;case 27:Ml(i.stateNode);case 26:case 5:Si(i,i.return),Ys(i);break;case 22:i.memoizedState===null&&Ys(i);break;case 30:Ys(i);break;default:Ys(i)}t=t.sibling}}function Br(t,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=t,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:Br(h,d,a),Al(4,d);break;case 1:if(Br(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(z){rt(l,l.return,z)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var C=h.shared.hiddenCallbacks;if(C!==null)for(h.shared.hiddenCallbacks=null,h=0;h<C.length;h++)ny(C[h],T)}catch(z){rt(l,l.return,z)}}a&&v&64&&g_(d),wl(d,d.return);break;case 27:E_(d);case 26:case 5:Br(h,d,a),a&&l===null&&v&4&&__(d),wl(d,d.return);break;case 12:Br(h,d,a);break;case 13:Br(h,d,a),a&&v&4&&b_(h,d);break;case 22:d.memoizedState===null&&Br(h,d,a),wl(d,d.return);break;case 30:break;default:Br(h,d,a)}i=i.sibling}}function Nd(t,i){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ul(a))}function Od(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&ul(t))}function Ai(t,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)C_(t,i,a,l),i=i.sibling}function C_(t,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Ai(t,i,a,l),h&2048&&Al(9,i);break;case 1:Ai(t,i,a,l);break;case 3:Ai(t,i,a,l),h&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&ul(t)));break;case 12:if(h&2048){Ai(t,i,a,l),t=i.stateNode;try{var d=i.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(C){rt(i,i.return,C)}}else Ai(t,i,a,l);break;case 13:Ai(t,i,a,l);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?Ai(t,i,a,l):bl(t,i):d._visibility&2?Ai(t,i,a,l):(d._visibility|=2,Xa(t,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&Nd(v,i);break;case 24:Ai(t,i,a,l),h&2048&&Od(i.alternate,i);break;default:Ai(t,i,a,l)}}function Xa(t,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=t,v=i,T=a,C=l,z=v.flags;switch(v.tag){case 0:case 11:case 15:Xa(d,v,T,C,h),Al(8,v);break;case 23:break;case 22:var X=v.stateNode;v.memoizedState!==null?X._visibility&2?Xa(d,v,T,C,h):bl(d,v):(X._visibility|=2,Xa(d,v,T,C,h)),h&&z&2048&&Nd(v.alternate,v);break;case 24:Xa(d,v,T,C,h),h&&z&2048&&Od(v.alternate,v);break;default:Xa(d,v,T,C,h)}i=i.sibling}}function bl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=t,l=i,h=l.flags;switch(l.tag){case 22:bl(a,l),h&2048&&Nd(l.alternate,l);break;case 24:bl(a,l),h&2048&&Od(l.alternate,l);break;default:bl(a,l)}i=i.sibling}}var Rl=8192;function Wa(t){if(t.subtreeFlags&Rl)for(t=t.child;t!==null;)D_(t),t=t.sibling}function D_(t){switch(t.tag){case 26:Wa(t),t.flags&Rl&&t.memoizedState!==null&&lw(ti,t.memoizedState,t.memoizedProps);break;case 5:Wa(t);break;case 3:case 4:var i=ti;ti=zc(t.stateNode.containerInfo),Wa(t),ti=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Rl,Rl=16777216,Wa(t),Rl=i):Wa(t));break;default:Wa(t)}}function N_(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Il(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];zt=l,x_(l,t)}N_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)O_(t),t=t.sibling}function O_(t){switch(t.tag){case 0:case 11:case 15:Il(t),t.flags&2048&&Lr(9,t,t.return);break;case 3:Il(t);break;case 12:Il(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Dc(t)):Il(t);break;default:Il(t)}}function Dc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];zt=l,x_(l,t)}N_(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Lr(8,i,i.return),Dc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Dc(i));break;default:Dc(i)}t=t.sibling}}function x_(t,i){for(;zt!==null;){var a=zt;switch(a.tag){case 0:case 11:case 15:Lr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ul(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,zt=l;else e:for(a=t;zt!==null;){l=zt;var h=l.sibling,d=l.return;if(A_(l),l===a){zt=null;break e}if(h!==null){h.return=d,zt=h;break e}zt=d}}}var wA={getCacheForType:function(t){var i=Jt(Mt),a=i.data.get(t);return a===void 0&&(a=t(),i.data.set(t,a)),a}},bA=typeof WeakMap=="function"?WeakMap:Map,Ze=0,at=null,ke=null,ze=0,Je=0,In=null,jr=!1,Za=!1,xd=!1,or=0,yt=0,zr=0,Xs=0,Md=0,qn=0,Ja=0,Cl=null,mn=null,kd=!1,Vd=0,Nc=1/0,Oc=null,qr=null,Kt=0,Hr=null,eo=null,to=0,Pd=0,Ld=null,M_=null,Dl=0,Ud=null;function Cn(){if((Ze&2)!==0&&ze!==0)return ze&-ze;if(K.T!==null){var t=qa;return t!==0?t:Gd()}return wr()}function k_(){qn===0&&(qn=(ze&536870912)===0||Fe?Uo():536870912);var t=zn.current;return t!==null&&(t.flags|=32),qn}function Dn(t,i,a){(t===at&&(Je===2||Je===9)||t.cancelPendingCommit!==null)&&(no(t,0),Fr(t,ze,qn,!1)),Bi(t,a),((Ze&2)===0||t!==at)&&(t===at&&((Ze&2)===0&&(Xs|=a),yt===4&&Fr(t,ze,qn,!1)),wi(t))}function V_(t,i,a){if((Ze&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&t.expiredLanes)===0||Ss(t,i),h=l?CA(t,i):zd(t,i,!0),d=l;do{if(h===0){Za&&!l&&Fr(t,i,0,!1);break}else{if(a=t.current.alternate,d&&!RA(a)){h=zd(t,i,!1),d=!1;continue}if(h===2){if(d=i,t.errorRecoveryDisabledLanes&d)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;e:{var T=t;h=Cl;var C=T.current.memoizedState.isDehydrated;if(C&&(no(T,v).flags|=256),v=zd(T,v,!1),v!==2){if(xd&&!C){T.errorRecoveryDisabledLanes|=d,Xs|=d,h=4;break e}d=mn,mn=h,d!==null&&(mn===null?mn=d:mn.push.apply(mn,d))}h=v}if(d=!1,h!==2)continue}}if(h===1){no(t,0),Fr(t,i,0,!0);break}e:{switch(l=t,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Fr(l,i,qn,!jr);break e;case 2:mn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=Vd+300-an(),10<h)){if(Fr(l,i,qn,!jr),va(l,0,!0)!==0)break e;l.timeoutHandle=cv(P_.bind(null,l,a,mn,Oc,kd,i,qn,Xs,Ja,jr,d,2,-0,0),h);break e}P_(l,a,mn,Oc,kd,i,qn,Xs,Ja,jr,d,0,-0,0)}}break}while(!0);wi(t)}function P_(t,i,a,l,h,d,v,T,C,z,X,J,H,F){if(t.timeoutHandle=-1,J=i.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(Pl={stylesheets:null,count:0,unsuspend:ow},D_(i),J=uw(),J!==null)){t.cancelPendingCommit=J(H_.bind(null,t,i,d,a,l,h,v,T,C,X,1,H,F)),Fr(t,d,v,!z);return}H_(t,i,d,a,l,h,v,T,C)}function RA(t){for(var i=t;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!An(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Fr(t,i,a,l){i&=~Md,i&=~Xs,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var h=i;0<h;){var d=31-Zt(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&ui(t,a,i)}function xc(){return(Ze&6)===0?(Nl(0),!1):!0}function Bd(){if(ke!==null){if(Je===0)var t=ke.return;else t=ke,Ji=Fs=null,nd(t),Qa=null,El=0,t=ke;for(;t!==null;)p_(t.alternate,t),t=t.return;ke=null}}function no(t,i){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,FA(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Bd(),at=t,ke=a=Xi(t.current,null),ze=i,Je=0,In=null,jr=!1,Za=Ss(t,i),xd=!1,Ja=qn=Md=Xs=zr=yt=0,mn=Cl=null,kd=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var h=31-Zt(l),d=1<<h;i|=t[h],l&=~d}return or=i,ec(),a}function L_(t,i){Oe=null,K.H=vc,i===hl||i===uc?(i=ey(),Je=3):i===Wg?(i=ey(),Je=4):Je=i===t_?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,In=i,ke===null&&(yt=1,wc(t,Ln(i,t.current)))}function U_(){var t=K.H;return K.H=vc,t===null?vc:t}function B_(){var t=K.A;return K.A=wA,t}function jd(){yt=4,jr||(ze&4194048)!==ze&&zn.current!==null||(Za=!0),(zr&134217727)===0&&(Xs&134217727)===0||at===null||Fr(at,ze,qn,!1)}function zd(t,i,a){var l=Ze;Ze|=2;var h=U_(),d=B_();(at!==t||ze!==i)&&(Oc=null,no(t,i)),i=!1;var v=yt;e:do try{if(Je!==0&&ke!==null){var T=ke,C=In;switch(Je){case 8:Bd(),v=6;break e;case 3:case 2:case 9:case 6:zn.current===null&&(i=!0);var z=Je;if(Je=0,In=null,io(t,T,C,z),a&&Za){v=0;break e}break;default:z=Je,Je=0,In=null,io(t,T,C,z)}}IA(),v=yt;break}catch(X){L_(t,X)}while(!0);return i&&t.shellSuspendCounter++,Ji=Fs=null,Ze=l,K.H=h,K.A=d,ke===null&&(at=null,ze=0,ec()),v}function IA(){for(;ke!==null;)j_(ke)}function CA(t,i){var a=Ze;Ze|=2;var l=U_(),h=B_();at!==t||ze!==i?(Oc=null,Nc=an()+500,no(t,i)):Za=Ss(t,i);e:do try{if(Je!==0&&ke!==null){i=ke;var d=In;t:switch(Je){case 1:Je=0,In=null,io(t,i,d,1);break;case 2:case 9:if(Zg(d)){Je=0,In=null,z_(i);break}i=function(){Je!==2&&Je!==9||at!==t||(Je=7),wi(t)},d.then(i,i);break e;case 3:Je=7;break e;case 4:Je=5;break e;case 7:Zg(d)?(Je=0,In=null,z_(i)):(Je=0,In=null,io(t,i,d,7));break;case 5:var v=null;switch(ke.tag){case 26:v=ke.memoizedState;case 5:case 27:var T=ke;if(!v||Sv(v)){Je=0,In=null;var C=T.sibling;if(C!==null)ke=C;else{var z=T.return;z!==null?(ke=z,Mc(z)):ke=null}break t}}Je=0,In=null,io(t,i,d,5);break;case 6:Je=0,In=null,io(t,i,d,6);break;case 8:Bd(),yt=6;break e;default:throw Error(s(462))}}DA();break}catch(X){L_(t,X)}while(!0);return Ji=Fs=null,K.H=l,K.A=h,Ze=a,ke!==null?0:(at=null,ze=0,ec(),yt)}function DA(){for(;ke!==null&&!Sr();)j_(ke)}function j_(t){var i=d_(t.alternate,t,or);t.memoizedProps=t.pendingProps,i===null?Mc(t):ke=i}function z_(t){var i=t,a=i.alternate;switch(i.tag){case 15:case 0:i=o_(a,i,i.pendingProps,i.type,void 0,ze);break;case 11:i=o_(a,i,i.pendingProps,i.type.render,i.ref,ze);break;case 5:nd(i);default:p_(a,i),i=ke=qg(i,or),i=d_(a,i,or)}t.memoizedProps=t.pendingProps,i===null?Mc(t):ke=i}function io(t,i,a,l){Ji=Fs=null,nd(i),Qa=null,El=0;var h=i.return;try{if(_A(t,h,i,a,ze)){yt=1,wc(t,Ln(a,t.current)),ke=null;return}}catch(d){if(h!==null)throw ke=h,d;yt=1,wc(t,Ln(a,t.current)),ke=null;return}i.flags&32768?(Fe||l===1?t=!0:Za||(ze&536870912)!==0?t=!1:(jr=t=!0,(l===2||l===9||l===3||l===6)&&(l=zn.current,l!==null&&l.tag===13&&(l.flags|=16384))),q_(i,t)):Mc(i)}function Mc(t){var i=t;do{if((i.flags&32768)!==0){q_(i,jr);return}t=i.return;var a=EA(i.alternate,i,or);if(a!==null){ke=a;return}if(i=i.sibling,i!==null){ke=i;return}ke=i=t}while(i!==null);yt===0&&(yt=5)}function q_(t,i){do{var a=TA(t.alternate,t);if(a!==null){a.flags&=32767,ke=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(t=t.sibling,t!==null)){ke=t;return}ke=t=a}while(t!==null);yt=6,ke=null}function H_(t,i,a,l,h,d,v,T,C){t.cancelPendingCommit=null;do kc();while(Kt!==0);if((Ze&6)!==0)throw Error(s(327));if(i!==null){if(i===t.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Of,jo(t,a,d,v,T,C),t===at&&(ke=at=null,ze=0),eo=i,Hr=t,to=a,Pd=d,Ld=h,M_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,MA(_s,function(){return Q_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=K.T,K.T=null,h=re.p,re.p=2,v=Ze,Ze|=4;try{SA(t,i,a)}finally{Ze=v,re.p=h,K.T=l}}Kt=1,F_(),G_(),$_()}}function F_(){if(Kt===1){Kt=0;var t=Hr,i=eo,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=K.T,K.T=null;var l=re.p;re.p=2;var h=Ze;Ze|=4;try{R_(i,t);var d=Jd,v=xg(t.containerInfo),T=d.focusedElem,C=d.selectionRange;if(v!==T&&T&&T.ownerDocument&&Og(T.ownerDocument.documentElement,T)){if(C!==null&&Rf(T)){var z=C.start,X=C.end;if(X===void 0&&(X=z),"selectionStart"in T)T.selectionStart=z,T.selectionEnd=Math.min(X,T.value.length);else{var J=T.ownerDocument||document,H=J&&J.defaultView||window;if(H.getSelection){var F=H.getSelection(),Ae=T.textContent.length,_e=Math.min(C.start,Ae),it=C.end===void 0?_e:Math.min(C.end,Ae);!F.extend&&_e>it&&(v=it,it=_e,_e=v);var P=Ng(T,_e),N=Ng(T,it);if(P&&N&&(F.rangeCount!==1||F.anchorNode!==P.node||F.anchorOffset!==P.offset||F.focusNode!==N.node||F.focusOffset!==N.offset)){var j=J.createRange();j.setStart(P.node,P.offset),F.removeAllRanges(),_e>it?(F.addRange(j),F.extend(N.node,N.offset)):(j.setEnd(N.node,N.offset),F.addRange(j))}}}}for(J=[],F=T;F=F.parentNode;)F.nodeType===1&&J.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<J.length;T++){var W=J[T];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}$c=!!Zd,Jd=Zd=null}finally{Ze=h,re.p=l,K.T=a}}t.current=i,Kt=2}}function G_(){if(Kt===2){Kt=0;var t=Hr,i=eo,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=K.T,K.T=null;var l=re.p;re.p=2;var h=Ze;Ze|=4;try{S_(t,i.alternate,i)}finally{Ze=h,re.p=l,K.T=a}}Kt=3}}function $_(){if(Kt===4||Kt===3){Kt=0,ys();var t=Hr,i=eo,a=to,l=M_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Kt=5:(Kt=0,eo=Hr=null,K_(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(qr=null),Ea(a),i=i.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(pt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=K.T,h=re.p,re.p=2,K.T=null;try{for(var d=t.onRecoverableError,v=0;v<l.length;v++){var T=l[v];d(T.value,{componentStack:T.stack})}}finally{K.T=i,re.p=h}}(to&3)!==0&&kc(),wi(t),h=t.pendingLanes,(a&4194090)!==0&&(h&42)!==0?t===Ud?Dl++:(Dl=0,Ud=t):Dl=0,Nl(0)}}function K_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,ul(i)))}function kc(t){return F_(),G_(),$_(),Q_()}function Q_(){if(Kt!==5)return!1;var t=Hr,i=Pd;Pd=0;var a=Ea(to),l=K.T,h=re.p;try{re.p=32>a?32:a,K.T=null,a=Ld,Ld=null;var d=Hr,v=to;if(Kt=0,eo=Hr=null,to=0,(Ze&6)!==0)throw Error(s(331));var T=Ze;if(Ze|=4,O_(d.current),C_(d,d.current,v,a),Ze=T,Nl(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(pt,d)}catch{}return!0}finally{re.p=h,K.T=l,K_(t,i)}}function Y_(t,i,a){i=Ln(a,i),i=gd(t.stateNode,i,2),t=Mr(t,i,2),t!==null&&(Bi(t,2),wi(t))}function rt(t,i,a){if(t.tag===3)Y_(t,t,a);else for(;i!==null;){if(i.tag===3){Y_(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(qr===null||!qr.has(l))){t=Ln(a,t),a=Jy(2),l=Mr(i,a,2),l!==null&&(e_(a,l,i,t),Bi(l,2),wi(l));break}}i=i.return}}function qd(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new bA;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(xd=!0,h.add(a),t=NA.bind(null,t,i,a),i.then(t,t))}function NA(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,at===t&&(ze&a)===a&&(yt===4||yt===3&&(ze&62914560)===ze&&300>an()-Vd?(Ze&2)===0&&no(t,0):Md|=a,Ja===ze&&(Ja=0)),wi(t)}function X_(t,i){i===0&&(i=Bo()),t=Ua(t,i),t!==null&&(Bi(t,i),wi(t))}function OA(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),X_(t,a)}function xA(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),X_(t,a)}function MA(t,i){return Yn(t,i)}var Vc=null,ro=null,Hd=!1,Pc=!1,Fd=!1,Ws=0;function wi(t){t!==ro&&t.next===null&&(ro===null?Vc=ro=t:ro=ro.next=t),Pc=!0,Hd||(Hd=!0,VA())}function Nl(t,i){if(!Fd&&Pc){Fd=!0;do for(var a=!1,l=Vc;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-Zt(42|t)+1)-1,d&=h&~(v&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,ev(l,d))}else d=ze,d=va(l,l===at?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Ss(l,d)||(a=!0,ev(l,d));l=l.next}while(a);Fd=!1}}function kA(){W_()}function W_(){Pc=Hd=!1;var t=0;Ws!==0&&(HA()&&(t=Ws),Ws=0);for(var i=an(),a=null,l=Vc;l!==null;){var h=l.next,d=Z_(l,i);d===0?(l.next=null,a===null?Vc=h:a.next=h,h===null&&(ro=a)):(a=l,(t!==0||(d&3)!==0)&&(Pc=!0)),l=h}Nl(t)}function Z_(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var v=31-Zt(d),T=1<<v,C=h[v];C===-1?((T&a)===0||(T&l)!==0)&&(h[v]=Lo(T,i)):C<=i&&(t.expiredLanes|=T),d&=~T}if(i=at,a=ze,a=va(t,t===i?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===i&&(Je===2||Je===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Xn(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ss(t,a)){if(i=a&-a,i===t.callbackPriority)return i;switch(l!==null&&Xn(l),Ea(a)){case 2:case 8:a=$e;break;case 32:a=_s;break;case 268435456:a=_a;break;default:a=_s}return l=J_.bind(null,t),a=Yn(a,l),t.callbackPriority=i,t.callbackNode=a,i}return l!==null&&l!==null&&Xn(l),t.callbackPriority=2,t.callbackNode=null,2}function J_(t,i){if(Kt!==0&&Kt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(kc()&&t.callbackNode!==a)return null;var l=ze;return l=va(t,t===at?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(V_(t,l,i),Z_(t,an()),t.callbackNode!=null&&t.callbackNode===a?J_.bind(null,t):null)}function ev(t,i){if(kc())return null;V_(t,i,!0)}function VA(){GA(function(){(Ze&6)!==0?Yn(Xe,kA):W_()})}function Gd(){return Ws===0&&(Ws=Uo()),Ws}function tv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ra(""+t)}function nv(t,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,t.id&&a.setAttribute("form",t.id),i.parentNode.insertBefore(a,i),t=new FormData(t),a.parentNode.removeChild(a),t}function PA(t,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=tv((h[At]||null).action),v=l.submitter;v&&(i=(i=v[At]||null)?tv(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var T=new Ia("action","action",null,l,h);t.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ws!==0){var C=v?nv(h,v):new FormData(h);hd(a,{pending:!0,data:C,method:h.method,action:d},null,C)}}else typeof d=="function"&&(T.preventDefault(),C=v?nv(h,v):new FormData(h),hd(a,{pending:!0,data:C,method:h.method,action:d},d,C))},currentTarget:h}]})}}for(var $d=0;$d<Nf.length;$d++){var Kd=Nf[$d],LA=Kd.toLowerCase(),UA=Kd[0].toUpperCase()+Kd.slice(1);ei(LA,"on"+UA)}ei(Vg,"onAnimationEnd"),ei(Pg,"onAnimationIteration"),ei(Lg,"onAnimationStart"),ei("dblclick","onDoubleClick"),ei("focusin","onFocus"),ei("focusout","onBlur"),ei(tA,"onTransitionRun"),ei(nA,"onTransitionStart"),ei(iA,"onTransitionCancel"),ei(Ug,"onTransitionEnd"),zi("onMouseEnter",["mouseout","mouseover"]),zi("onMouseLeave",["mouseout","mouseover"]),zi("onPointerEnter",["pointerout","pointerover"]),zi("onPointerLeave",["pointerout","pointerover"]),Zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Zn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ol));function iv(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],h=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var T=l[v],C=T.instance,z=T.currentTarget;if(T=T.listener,C!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=z;try{d(h)}catch(X){Ac(X)}h.currentTarget=null,d=C}else for(v=0;v<l.length;v++){if(T=l[v],C=T.instance,z=T.currentTarget,T=T.listener,C!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=z;try{d(h)}catch(X){Ac(X)}h.currentTarget=null,d=C}}}}function Ve(t,i){var a=i[qo];a===void 0&&(a=i[qo]=new Set);var l=t+"__bubble";a.has(l)||(rv(i,t,2,!1),a.add(l))}function Qd(t,i,a){var l=0;i&&(l|=4),rv(a,t,l,i)}var Lc="_reactListening"+Math.random().toString(36).slice(2);function Yd(t){if(!t[Lc]){t[Lc]=!0,Ho.forEach(function(a){a!=="selectionchange"&&(BA.has(a)||Qd(a,!1,t),Qd(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Lc]||(i[Lc]=!0,Qd("selectionchange",!1,i))}}function rv(t,i,a,l){switch(Cv(i)){case 2:var h=fw;break;case 8:h=dw;break;default:h=um}a=h.bind(null,i,a,t),h=void 0,!Vn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(i,a,{capture:!0,passive:h}):t.addEventListener(i,a,!0):h!==void 0?t.addEventListener(i,a,{passive:h}):t.addEventListener(i,a,!1)}function Xd(t,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===h)break;if(v===4)for(v=l.return;v!==null;){var C=v.tag;if((C===3||C===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;T!==null;){if(v=ji(T),v===null)return;if(C=v.tag,C===5||C===6||C===26||C===27){l=d=v;continue e}T=T.parentNode}}l=l.return}Bu(function(){var z=d,X=kn(a),J=[];e:{var H=Bg.get(t);if(H!==void 0){var F=Ia,Ae=t;switch(t){case"keypress":if(pi(a)===0)break e;case"keydown":case"keyup":F=Ma;break;case"focusin":Ae="focus",F=Na;break;case"focusout":Ae="blur",F=Na;break;case"beforeblur":case"afterblur":F=Na;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=Pn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=Sf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=Ku;break;case Vg:case Pg:case Lg:F=Oa;break;case Ug:F=Yu;break;case"scroll":case"scrollend":F=ju;break;case"wheel":F=ka;break;case"copy":case"cut":case"paste":F=xa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=tl;break;case"toggle":case"beforetoggle":F=Wu}var _e=(i&4)!==0,it=!_e&&(t==="scroll"||t==="scrollend"),P=_e?H!==null?H+"Capture":null:H;_e=[];for(var N=z,j;N!==null;){var W=N;if(j=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||j===null||P===null||(W=Ns(N,P),W!=null&&_e.push(xl(N,W,j))),it)break;N=N.return}0<_e.length&&(H=new F(H,Ae,null,a,X),J.push({event:H,listeners:_e}))}}if((i&7)===0){e:{if(H=t==="mouseover"||t==="pointerover",F=t==="mouseout"||t==="pointerout",H&&a!==Fi&&(Ae=a.relatedTarget||a.fromElement)&&(ji(Ae)||Ae[xn]))break e;if((F||H)&&(H=X.window===X?X:(H=X.ownerDocument)?H.defaultView||H.parentWindow:window,F?(Ae=a.relatedTarget||a.toElement,F=z,Ae=Ae?ji(Ae):null,Ae!==null&&(it=u(Ae),_e=Ae.tag,Ae!==it||_e!==5&&_e!==27&&_e!==6)&&(Ae=null)):(F=null,Ae=z),F!==Ae)){if(_e=Pn,W="onMouseLeave",P="onMouseEnter",N="mouse",(t==="pointerout"||t==="pointerover")&&(_e=tl,W="onPointerLeave",P="onPointerEnter",N="pointer"),it=F==null?H:hi(F),j=Ae==null?H:hi(Ae),H=new _e(W,N+"leave",F,a,X),H.target=it,H.relatedTarget=j,W=null,ji(X)===z&&(_e=new _e(P,N+"enter",Ae,a,X),_e.target=j,_e.relatedTarget=it,W=_e),it=W,F&&Ae)t:{for(_e=F,P=Ae,N=0,j=_e;j;j=so(j))N++;for(j=0,W=P;W;W=so(W))j++;for(;0<N-j;)_e=so(_e),N--;for(;0<j-N;)P=so(P),j--;for(;N--;){if(_e===P||P!==null&&_e===P.alternate)break t;_e=so(_e),P=so(P)}_e=null}else _e=null;F!==null&&sv(J,H,F,_e,!1),Ae!==null&&it!==null&&sv(J,it,Ae,_e,!0)}}e:{if(H=z?hi(z):window,F=H.nodeName&&H.nodeName.toLowerCase(),F==="select"||F==="input"&&H.type==="file")var he=wg;else if(xt(H))if(bg)he=ZS;else{he=XS;var xe=YS}else F=H.nodeName,!F||F.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?z&&Qo(z.elementType)&&(he=wg):he=WS;if(he&&(he=he(t,z))){Yi(J,he,a,X);break e}xe&&xe(t,H,z),t==="focusout"&&z&&H.type==="number"&&z.memoizedProps.value!=null&&Cr(H,"number",H.value)}switch(xe=z?hi(z):window,t){case"focusin":(xt(xe)||xe.contentEditable==="true")&&(Va=xe,If=z,rl=null);break;case"focusout":rl=If=Va=null;break;case"mousedown":Cf=!0;break;case"contextmenu":case"mouseup":case"dragend":Cf=!1,Mg(J,a,X);break;case"selectionchange":if(eA)break;case"keydown":case"keyup":Mg(J,a,X)}var me;if(_i)e:{switch(t){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Be?$(t,a)&&(Ee="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(_&&a.locale!=="ko"&&(Be||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Be&&(me=Xo()):(mi=X,Dr="value"in mi?mi.value:mi.textContent,Be=!0)),xe=Uc(z,Ee),0<xe.length&&(Ee=new Jo(Ee,t,null,a,X),J.push({event:Ee,listeners:xe}),me?Ee.data=me:(me=oe(a),me!==null&&(Ee.data=me)))),(me=y?Ot(t,a):je(t,a))&&(Ee=Uc(z,"onBeforeInput"),0<Ee.length&&(xe=new Jo("onBeforeInput","beforeinput",null,a,X),J.push({event:xe,listeners:Ee}),xe.data=me)),PA(J,t,z,a,X)}iv(J,i)})}function xl(t,i,a){return{instance:t,listener:i,currentTarget:a}}function Uc(t,i){for(var a=i+"Capture",l=[];t!==null;){var h=t,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=Ns(t,a),h!=null&&l.unshift(xl(t,h,d)),h=Ns(t,i),h!=null&&l.push(xl(t,h,d))),t.tag===3)return l;t=t.return}return[]}function so(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function sv(t,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var T=a,C=T.alternate,z=T.stateNode;if(T=T.tag,C!==null&&C===l)break;T!==5&&T!==26&&T!==27||z===null||(C=z,h?(z=Ns(a,d),z!=null&&v.unshift(xl(a,z,C))):h||(z=Ns(a,d),z!=null&&v.push(xl(a,z,C)))),a=a.return}v.length!==0&&t.push({event:i,listeners:v})}var jA=/\r\n?/g,zA=/\u0000|\uFFFD/g;function av(t){return(typeof t=="string"?t:""+t).replace(jA,`
`).replace(zA,"")}function ov(t,i){return i=av(i),av(t)===i}function Bc(){}function nt(t,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Mn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Mn(t,""+l);break;case"className":fi(t,"class",l);break;case"tabIndex":fi(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":fi(t,a,l);break;case"style":Ko(t,l,d);break;case"data":if(i!=="object"){fi(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Ra(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&nt(t,i,"name",h.name,h,null),nt(t,i,"formEncType",h.formEncType,h,null),nt(t,i,"formMethod",h.formMethod,h,null),nt(t,i,"formTarget",h.formTarget,h,null)):(nt(t,i,"encType",h.encType,h,null),nt(t,i,"method",h.method,h,null),nt(t,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Ra(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=Bc);break;case"onScroll":l!=null&&Ve("scroll",t);break;case"onScrollEnd":l!=null&&Ve("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=Ra(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":Ve("beforetoggle",t),Ve("toggle",t),Ir(t,"popover",l);break;case"xlinkActuate":Ft(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ft(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ft(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ft(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ft(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ft(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ft(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ft(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ft(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ir(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ef.get(a)||a,Ir(t,a,l))}}function Wd(t,i,a,l,h,d){switch(a){case"style":Ko(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof l=="string"?Mn(t,l):(typeof l=="number"||typeof l=="bigint")&&Mn(t,""+l);break;case"onScroll":l!=null&&Ve("scroll",t);break;case"onScrollEnd":l!=null&&Ve("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Bc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ta.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=t[At]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,l,h);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):Ir(t,a,l)}}}function Qt(t,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ve("error",t),Ve("load",t);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:nt(t,i,d,v,a,null)}}h&&nt(t,i,"srcSet",a.srcSet,a,null),l&&nt(t,i,"src",a.src,a,null);return;case"input":Ve("invalid",t);var T=d=v=h=null,C=null,z=null;for(l in a)if(a.hasOwnProperty(l)){var X=a[l];if(X!=null)switch(l){case"name":h=X;break;case"type":v=X;break;case"checked":C=X;break;case"defaultChecked":z=X;break;case"value":d=X;break;case"defaultValue":T=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,i));break;default:nt(t,i,l,X,a,null)}}Is(t,d,T,C,z,v,h,!1),ba(t);return;case"select":Ve("invalid",t),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:nt(t,i,h,T,a,null)}i=d,a=v,t.multiple=!!l,i!=null?Hi(t,!!l,i,!1):a!=null&&Hi(t,!!l,a,!0);return;case"textarea":Ve("invalid",t),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:nt(t,i,v,T,a,null)}Cs(t,l,h,d),ba(t);return;case"option":for(C in a)if(a.hasOwnProperty(C)&&(l=a[C],l!=null))switch(C){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:nt(t,i,C,l,a,null)}return;case"dialog":Ve("beforetoggle",t),Ve("toggle",t),Ve("cancel",t),Ve("close",t);break;case"iframe":case"object":Ve("load",t);break;case"video":case"audio":for(l=0;l<Ol.length;l++)Ve(Ol[l],t);break;case"image":Ve("error",t),Ve("load",t);break;case"details":Ve("toggle",t);break;case"embed":case"source":case"link":Ve("error",t),Ve("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(l=a[z],l!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:nt(t,i,z,l,a,null)}return;default:if(Qo(i)){for(X in a)a.hasOwnProperty(X)&&(l=a[X],l!==void 0&&Wd(t,i,X,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&nt(t,i,T,l,a,null))}function qA(t,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,T=null,C=null,z=null,X=null;for(F in a){var J=a[F];if(a.hasOwnProperty(F)&&J!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":C=J;default:l.hasOwnProperty(F)||nt(t,i,F,null,l,J)}}for(var H in l){var F=l[H];if(J=a[H],l.hasOwnProperty(H)&&(F!=null||J!=null))switch(H){case"type":d=F;break;case"name":h=F;break;case"checked":z=F;break;case"defaultChecked":X=F;break;case"value":v=F;break;case"defaultValue":T=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,i));break;default:F!==J&&nt(t,i,H,F,l,J)}}Sn(t,v,T,C,z,X,d,h);return;case"select":F=v=T=H=null;for(d in a)if(C=a[d],a.hasOwnProperty(d)&&C!=null)switch(d){case"value":break;case"multiple":F=C;default:l.hasOwnProperty(d)||nt(t,i,d,null,l,C)}for(h in l)if(d=l[h],C=a[h],l.hasOwnProperty(h)&&(d!=null||C!=null))switch(h){case"value":H=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==C&&nt(t,i,h,d,l,C)}i=T,a=v,l=F,H!=null?Hi(t,!!a,H,!1):!!l!=!!a&&(i!=null?Hi(t,!!a,i,!0):Hi(t,!!a,a?[]:"",!1));return;case"textarea":F=H=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:nt(t,i,T,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":H=h;break;case"defaultValue":F=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&nt(t,i,v,h,l,d)}et(t,H,F);return;case"option":for(var Ae in a)if(H=a[Ae],a.hasOwnProperty(Ae)&&H!=null&&!l.hasOwnProperty(Ae))switch(Ae){case"selected":t.selected=!1;break;default:nt(t,i,Ae,null,l,H)}for(C in l)if(H=l[C],F=a[C],l.hasOwnProperty(C)&&H!==F&&(H!=null||F!=null))switch(C){case"selected":t.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:nt(t,i,C,H,l,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _e in a)H=a[_e],a.hasOwnProperty(_e)&&H!=null&&!l.hasOwnProperty(_e)&&nt(t,i,_e,null,l,H);for(z in l)if(H=l[z],F=a[z],l.hasOwnProperty(z)&&H!==F&&(H!=null||F!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,i));break;default:nt(t,i,z,H,l,F)}return;default:if(Qo(i)){for(var it in a)H=a[it],a.hasOwnProperty(it)&&H!==void 0&&!l.hasOwnProperty(it)&&Wd(t,i,it,void 0,l,H);for(X in l)H=l[X],F=a[X],!l.hasOwnProperty(X)||H===F||H===void 0&&F===void 0||Wd(t,i,X,H,l,F);return}}for(var P in a)H=a[P],a.hasOwnProperty(P)&&H!=null&&!l.hasOwnProperty(P)&&nt(t,i,P,null,l,H);for(J in l)H=l[J],F=a[J],!l.hasOwnProperty(J)||H===F||H==null&&F==null||nt(t,i,J,H,l,F)}var Zd=null,Jd=null;function jc(t){return t.nodeType===9?t:t.ownerDocument}function lv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function uv(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function em(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var tm=null;function HA(){var t=window.event;return t&&t.type==="popstate"?t===tm?!1:(tm=t,!0):(tm=null,!1)}var cv=typeof setTimeout=="function"?setTimeout:void 0,FA=typeof clearTimeout=="function"?clearTimeout:void 0,hv=typeof Promise=="function"?Promise:void 0,GA=typeof queueMicrotask=="function"?queueMicrotask:typeof hv<"u"?function(t){return hv.resolve(null).then(t).catch($A)}:cv;function $A(t){setTimeout(function(){throw t})}function Gr(t){return t==="head"}function fv(t,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=t.ownerDocument;if(a&1&&Ml(v.documentElement),a&2&&Ml(v.body),a&4)for(a=v.head,Ml(a),v=a.firstChild;v;){var T=v.nextSibling,C=v.nodeName;v[As]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=T}}if(h===0){t.removeChild(d),zl(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);zl(i)}function nm(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":nm(a),Rr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function KA(t,i,a,l){for(;t.nodeType===1;){var h=a;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[As])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=ni(t.nextSibling),t===null)break}return null}function QA(t,i,a){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ni(t.nextSibling),t===null))return null;return t}function im(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function YA(t,i){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function ni(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var rm=null;function dv(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}function mv(t,i,a){switch(i=jc(a),t){case"html":if(t=i.documentElement,!t)throw Error(s(452));return t;case"head":if(t=i.head,!t)throw Error(s(453));return t;case"body":if(t=i.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Ml(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Rr(t)}var Hn=new Map,pv=new Set;function zc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var lr=re.d;re.d={f:XA,r:WA,D:ZA,C:JA,L:ew,m:tw,X:iw,S:nw,M:rw};function XA(){var t=lr.f(),i=xc();return t||i}function WA(t){var i=ci(t);i!==null&&i.tag===5&&i.type==="form"?Vy(i):lr.r(t)}var ao=typeof document>"u"?null:document;function gv(t,i,a){var l=ao;if(l&&typeof i=="string"&&i){var h=wt(i);h='link[rel="'+t+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),pv.has(h)||(pv.add(h),t={rel:t,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Qt(i,"link",t),vt(i),l.head.appendChild(i)))}}function ZA(t){lr.D(t),gv("dns-prefetch",t,null)}function JA(t,i){lr.C(t,i),gv("preconnect",t,i)}function ew(t,i,a){lr.L(t,i,a);var l=ao;if(l&&t&&i){var h='link[rel="preload"][as="'+wt(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+wt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+wt(a.imageSizes)+'"]')):h+='[href="'+wt(t)+'"]';var d=h;switch(i){case"style":d=oo(t);break;case"script":d=lo(t)}Hn.has(d)||(t=E({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:t,as:i},a),Hn.set(d,t),l.querySelector(h)!==null||i==="style"&&l.querySelector(kl(d))||i==="script"&&l.querySelector(Vl(d))||(i=l.createElement("link"),Qt(i,"link",t),vt(i),l.head.appendChild(i)))}}function tw(t,i){lr.m(t,i);var a=ao;if(a&&t){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+wt(l)+'"][href="'+wt(t)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=lo(t)}if(!Hn.has(d)&&(t=E({rel:"modulepreload",href:t},i),Hn.set(d,t),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Vl(d)))return}l=a.createElement("link"),Qt(l,"link",t),vt(l),a.head.appendChild(l)}}}function nw(t,i,a){lr.S(t,i,a);var l=ao;if(l&&t){var h=on(l).hoistableStyles,d=oo(t);i=i||"default";var v=h.get(d);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(kl(d)))T.loading=5;else{t=E({rel:"stylesheet",href:t,"data-precedence":i},a),(a=Hn.get(d))&&sm(t,a);var C=v=l.createElement("link");vt(C),Qt(C,"link",t),C._p=new Promise(function(z,X){C.onload=z,C.onerror=X}),C.addEventListener("load",function(){T.loading|=1}),C.addEventListener("error",function(){T.loading|=2}),T.loading|=4,qc(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:T},h.set(d,v)}}}function iw(t,i){lr.X(t,i);var a=ao;if(a&&t){var l=on(a).hoistableScripts,h=lo(t),d=l.get(h);d||(d=a.querySelector(Vl(h)),d||(t=E({src:t,async:!0},i),(i=Hn.get(h))&&am(t,i),d=a.createElement("script"),vt(d),Qt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function rw(t,i){lr.M(t,i);var a=ao;if(a&&t){var l=on(a).hoistableScripts,h=lo(t),d=l.get(h);d||(d=a.querySelector(Vl(h)),d||(t=E({src:t,async:!0,type:"module"},i),(i=Hn.get(h))&&am(t,i),d=a.createElement("script"),vt(d),Qt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function yv(t,i,a,l){var h=(h=ve.current)?zc(h):null;if(!h)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=oo(a.href),a=on(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=oo(a.href);var d=on(h).hoistableStyles,v=d.get(t);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,v),(d=h.querySelector(kl(t)))&&!d._p&&(v.instance=d,v.state.loading=5),Hn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Hn.set(t,a),d||sw(h,t,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=lo(a),a=on(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function oo(t){return'href="'+wt(t)+'"'}function kl(t){return'link[rel="stylesheet"]['+t+"]"}function _v(t){return E({},t,{"data-precedence":t.precedence,precedence:null})}function sw(t,i,a,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Qt(i,"link",a),vt(i),t.head.appendChild(i))}function lo(t){return'[src="'+wt(t)+'"]'}function Vl(t){return"script[async]"+t}function vv(t,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+wt(a.href)+'"]');if(l)return i.instance=l,vt(l),l;var h=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),vt(l),Qt(l,"style",h),qc(l,a.precedence,t),i.instance=l;case"stylesheet":h=oo(a.href);var d=t.querySelector(kl(h));if(d)return i.state.loading|=4,i.instance=d,vt(d),d;l=_v(a),(h=Hn.get(h))&&sm(l,h),d=(t.ownerDocument||t).createElement("link"),vt(d);var v=d;return v._p=new Promise(function(T,C){v.onload=T,v.onerror=C}),Qt(d,"link",l),i.state.loading|=4,qc(d,a.precedence,t),i.instance=d;case"script":return d=lo(a.src),(h=t.querySelector(Vl(d)))?(i.instance=h,vt(h),h):(l=a,(h=Hn.get(d))&&(l=E({},a),am(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),vt(h),Qt(h,"link",l),t.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,qc(l,a.precedence,t));return i.instance}function qc(t,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(t,i.firstChild))}function sm(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function am(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Hc=null;function Ev(t,i,a){if(Hc===null){var l=new Map,h=Hc=new Map;h.set(a,l)}else h=Hc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),h=0;h<a.length;h++){var d=a[h];if(!(d[As]||d[Nt]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=t+v;var T=l.get(v);T?T.push(d):l.set(v,[d])}}return l}function Tv(t,i,a){t=t.ownerDocument||t,t.head.insertBefore(a,i==="title"?t.querySelector("head > title"):null)}function aw(t,i,a){if(a===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Sv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Pl=null;function ow(){}function lw(t,i,a){if(Pl===null)throw Error(s(475));var l=Pl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=oo(a.href),d=t.querySelector(kl(h));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Fc.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=d,vt(d);return}d=t.ownerDocument||t,a=_v(a),(h=Hn.get(h))&&sm(a,h),d=d.createElement("link"),vt(d);var v=d;v._p=new Promise(function(T,C){v.onload=T,v.onerror=C}),Qt(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Fc.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function uw(){if(Pl===null)throw Error(s(475));var t=Pl;return t.stylesheets&&t.count===0&&om(t,t.stylesheets),0<t.count?function(i){var a=setTimeout(function(){if(t.stylesheets&&om(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Fc(){if(this.count--,this.count===0){if(this.stylesheets)om(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Gc=null;function om(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Gc=new Map,i.forEach(cw,t),Gc=null,Fc.call(t))}function cw(t,i){if(!(i.state.loading&4)){var a=Gc.get(t);if(a)var l=a.get(null);else{a=new Map,Gc.set(t,a);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=Fc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),i.state.loading|=4}}var Ll={$$typeof:ie,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function hw(t,i,a,l,h,d,v,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ui(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ui(0),this.hiddenUpdates=Ui(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Av(t,i,a,l,h,d,v,T,C,z,X,J){return t=new hw(t,i,a,v,T,C,z,J),i=1,d===!0&&(i|=24),d=wn(3,null,null,i),t.current=d,d.stateNode=t,i=qf(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},$f(d),t}function wv(t){return t?(t=Ba,t):Ba}function bv(t,i,a,l,h,d){h=wv(h),l.context===null?l.context=h:l.pendingContext=h,l=xr(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Mr(t,l,i),a!==null&&(Dn(a,t,i),dl(a,t,i))}function Rv(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function lm(t,i){Rv(t,i),(t=t.alternate)&&Rv(t,i)}function Iv(t){if(t.tag===13){var i=Ua(t,67108864);i!==null&&Dn(i,t,67108864),lm(t,67108864)}}var $c=!0;function fw(t,i,a,l){var h=K.T;K.T=null;var d=re.p;try{re.p=2,um(t,i,a,l)}finally{re.p=d,K.T=h}}function dw(t,i,a,l){var h=K.T;K.T=null;var d=re.p;try{re.p=8,um(t,i,a,l)}finally{re.p=d,K.T=h}}function um(t,i,a,l){if($c){var h=cm(l);if(h===null)Xd(t,i,l,Kc,a),Dv(t,l);else if(pw(h,t,i,a,l))l.stopPropagation();else if(Dv(t,l),i&4&&-1<mw.indexOf(t)){for(;h!==null;){var d=ci(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Wn(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var C=1<<31-Zt(v);T.entanglements[1]|=C,v&=~C}wi(d),(Ze&6)===0&&(Nc=an()+500,Nl(0))}}break;case 13:T=Ua(d,2),T!==null&&Dn(T,d,2),xc(),lm(d,2)}if(d=cm(l),d===null&&Xd(t,i,l,Kc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else Xd(t,i,l,null,a)}}function cm(t){return t=kn(t),hm(t)}var Kc=null;function hm(t){if(Kc=null,t=ji(t),t!==null){var i=u(t);if(i===null)t=null;else{var a=i.tag;if(a===13){if(t=f(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Kc=t,null}function Cv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ya()){case Xe:return 2;case $e:return 8;case _s:case pf:return 32;case _a:return 268435456;default:return 32}default:return 32}}var fm=!1,$r=null,Kr=null,Qr=null,Ul=new Map,Bl=new Map,Yr=[],mw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dv(t,i){switch(t){case"focusin":case"focusout":$r=null;break;case"dragenter":case"dragleave":Kr=null;break;case"mouseover":case"mouseout":Qr=null;break;case"pointerover":case"pointerout":Ul.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bl.delete(i.pointerId)}}function jl(t,i,a,l,h,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=ci(i),i!==null&&Iv(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function pw(t,i,a,l,h){switch(i){case"focusin":return $r=jl($r,t,i,a,l,h),!0;case"dragenter":return Kr=jl(Kr,t,i,a,l,h),!0;case"mouseover":return Qr=jl(Qr,t,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return Ul.set(d,jl(Ul.get(d)||null,t,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,Bl.set(d,jl(Bl.get(d)||null,t,i,a,l,h)),!0}return!1}function Nv(t){var i=ji(t.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){t.blockedOn=i,xu(t.priority,function(){if(a.tag===13){var l=Cn();l=Ar(l);var h=Ua(a,l);h!==null&&Dn(h,a,l),lm(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=cm(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Fi=l,a.target.dispatchEvent(l),Fi=null}else return i=ci(a),i!==null&&Iv(i),t.blockedOn=a,!1;i.shift()}return!0}function Ov(t,i,a){Qc(t)&&a.delete(i)}function gw(){fm=!1,$r!==null&&Qc($r)&&($r=null),Kr!==null&&Qc(Kr)&&(Kr=null),Qr!==null&&Qc(Qr)&&(Qr=null),Ul.forEach(Ov),Bl.forEach(Ov)}function Yc(t,i){t.blockedOn===i&&(t.blockedOn=null,fm||(fm=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,gw)))}var Xc=null;function xv(t){Xc!==t&&(Xc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Xc===t&&(Xc=null);for(var i=0;i<t.length;i+=3){var a=t[i],l=t[i+1],h=t[i+2];if(typeof l!="function"){if(hm(l||a)===null)continue;break}var d=ci(a);d!==null&&(t.splice(i,3),i-=3,hd(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function zl(t){function i(C){return Yc(C,t)}$r!==null&&Yc($r,t),Kr!==null&&Yc(Kr,t),Qr!==null&&Yc(Qr,t),Ul.forEach(i),Bl.forEach(i);for(var a=0;a<Yr.length;a++){var l=Yr[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Yr.length&&(a=Yr[0],a.blockedOn===null);)Nv(a),a.blockedOn===null&&Yr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[At]||null;if(typeof d=="function")v||xv(a);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[At]||null)T=v.formAction;else if(hm(h)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),xv(a)}}}function dm(t){this._internalRoot=t}Wc.prototype.render=dm.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=Cn();bv(a,l,t,i,null,null)},Wc.prototype.unmount=dm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;bv(t.current,2,null,t,null,null),xc(),i[xn]=null}};function Wc(t){this._internalRoot=t}Wc.prototype.unstable_scheduleHydration=function(t){if(t){var i=wr();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Yr.length&&i!==0&&i<Yr[a].priority;a++);Yr.splice(a,0,t),a===0&&Nv(t)}};var Mv=e.version;if(Mv!=="19.1.0")throw Error(s(527,Mv,"19.1.0"));re.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(i),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var yw={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:K,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zc.isDisabled&&Zc.supportsFiber)try{pt=Zc.inject(yw),We=Zc}catch{}}return Hl.createRoot=function(t,i){if(!o(t))throw Error(s(299));var a=!1,l="",h=Yy,d=Xy,v=Wy,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=Av(t,1,!1,null,null,a,l,h,d,v,T,null),t[xn]=i.current,Yd(t),new dm(i)},Hl.hydrateRoot=function(t,i,a){if(!o(t))throw Error(s(299));var l=!1,h="",d=Yy,v=Xy,T=Wy,C=null,z=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(C=a.unstable_transitionCallbacks),a.formState!==void 0&&(z=a.formState)),i=Av(t,1,!0,i,a??null,l,h,d,v,T,C,z),i.context=wv(null),a=i.current,l=Cn(),l=Ar(l),h=xr(l),h.callback=null,Mr(a,h,l),a=l,i.current.lanes=a,Bi(i,a),wi(i),t[xn]=i.current,Yd(t),new Wc(i)},Hl.version="19.1.0",Hl}var Hv;function Iw(){if(Hv)return gm.exports;Hv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),gm.exports=Rw(),gm.exports}var Cw=Iw();const Dw="modulepreload",Nw=function(r){return"/Activity_Manager/"+r},Fv={},Tp=function(e,n,s){let o=Promise.resolve();if(n&&n.length>0){let g=function(p){return Promise.all(p.map(E=>Promise.resolve(E).then(A=>({status:"fulfilled",value:A}),A=>({status:"rejected",reason:A}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),m=f?.nonce||f?.getAttribute("nonce");o=g(n.map(p=>{if(p=Nw(p),p in Fv)return;Fv[p]=!0;const E=p.endsWith(".css"),A=E?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${A}`))return;const w=document.createElement("link");if(w.rel=E?"stylesheet":Dw,E||(w.as="script"),w.crossOrigin="",w.href=p,m&&w.setAttribute("nonce",m),document.head.appendChild(w),E)return new Promise((L,q)=>{w.addEventListener("load",L),w.addEventListener("error",()=>q(new Error(`Unable to preload CSS for ${p}`)))})}))}function u(f){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=f,window.dispatchEvent(m),!m.defaultPrevented)throw f}return o.then(f=>{for(const m of f||[])m.status==="rejected"&&u(m.reason);return e().catch(u)})};/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Gv="popstate";function Ow(r={}){function e(o,u){let{pathname:f="/",search:m="",hash:g=""}=ha(o.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Hm("",{pathname:f,search:m,hash:g},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function n(o,u){let f=o.document.querySelector("base"),m="";if(f&&f.getAttribute("href")){let g=o.location.href,p=g.indexOf("#");m=p===-1?g:g.slice(0,p)}return m+"#"+(typeof u=="string"?u:ru(u))}function s(o,u){ai(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return Mw(e,n,s,r)}function dt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function ai(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xw(){return Math.random().toString(36).substring(2,10)}function $v(r,e){return{usr:r.state,key:r.key,idx:e}}function Hm(r,e,n=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?ha(e):e,state:n,key:e&&e.key||s||xw()}}function ru({pathname:r="/",search:e="",hash:n=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function ha(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substring(n),r=r.substring(0,n));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function Mw(r,e,n,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,f=o.history,m="POP",g=null,p=E();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function E(){return(f.state||{idx:null}).idx}function A(){m="POP";let G=E(),Q=G==null?null:G-p;p=G,g&&g({action:m,location:Y.location,delta:Q})}function w(G,Q){m="PUSH";let se=Hm(Y.location,G,Q);n&&n(se,G),p=E()+1;let ie=$v(se,p),pe=Y.createHref(se);try{f.pushState(ie,"",pe)}catch(ce){if(ce instanceof DOMException&&ce.name==="DataCloneError")throw ce;o.location.assign(pe)}u&&g&&g({action:m,location:Y.location,delta:1})}function L(G,Q){m="REPLACE";let se=Hm(Y.location,G,Q);n&&n(se,G),p=E();let ie=$v(se,p),pe=Y.createHref(se);f.replaceState(ie,"",pe),u&&g&&g({action:m,location:Y.location,delta:0})}function q(G){return kw(G)}let Y={get action(){return m},get location(){return r(o,f)},listen(G){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(Gv,A),g=G,()=>{o.removeEventListener(Gv,A),g=null}},createHref(G){return e(o,G)},createURL:q,encodeLocation(G){let Q=q(G);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:w,replace:L,go(G){return f.go(G)}};return Y}function kw(r,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),dt(n,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:ru(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=n+s),new URL(s,n)}function LT(r,e,n="/"){return Vw(r,e,n,!1)}function Vw(r,e,n,s){let o=typeof e=="string"?ha(e):e,u=yr(o.pathname||"/",n);if(u==null)return null;let f=UT(r);Pw(f);let m=null;for(let g=0;m==null&&g<f.length;++g){let p=Kw(u);m=Gw(f[g],p,s)}return m}function UT(r,e=[],n=[],s=""){let o=(u,f,m)=>{let g={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};g.relativePath.startsWith("/")&&(dt(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length));let p=mr([s,g.relativePath]),E=n.concat(g);u.children&&u.children.length>0&&(dt(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),UT(u.children,e,E,p)),!(u.path==null&&!u.index)&&e.push({path:p,score:Hw(p,u.index),routesMeta:E})};return r.forEach((u,f)=>{if(u.path===""||!u.path?.includes("?"))o(u,f);else for(let m of BT(u.path))o(u,f,m)}),e}function BT(r){let e=r.split("/");if(e.length===0)return[];let[n,...s]=e,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let f=BT(s.join("/")),m=[];return m.push(...f.map(g=>g===""?u:[u,g].join("/"))),o&&m.push(...f),m.map(g=>r.startsWith("/")&&g===""?"/":g)}function Pw(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:Fw(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var Lw=/^:[\w-]+$/,Uw=3,Bw=2,jw=1,zw=10,qw=-2,Kv=r=>r==="*";function Hw(r,e){let n=r.split("/"),s=n.length;return n.some(Kv)&&(s+=qw),e&&(s+=Bw),n.filter(o=>!Kv(o)).reduce((o,u)=>o+(Lw.test(u)?Uw:u===""?jw:zw),s)}function Fw(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function Gw(r,e,n=!1){let{routesMeta:s}=r,o={},u="/",f=[];for(let m=0;m<s.length;++m){let g=s[m],p=m===s.length-1,E=u==="/"?e:e.slice(u.length)||"/",A=vh({path:g.relativePath,caseSensitive:g.caseSensitive,end:p},E),w=g.route;if(!A&&p&&n&&!s[s.length-1].route.index&&(A=vh({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},E)),!A)return null;Object.assign(o,A.params),f.push({params:o,pathname:mr([u,A.pathname]),pathnameBase:Ww(mr([u,A.pathnameBase])),route:w}),A.pathnameBase!=="/"&&(u=mr([u,A.pathnameBase]))}return f}function vh(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=$w(r.path,r.caseSensitive,r.end),o=e.match(n);if(!o)return null;let u=o[0],f=u.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:s.reduce((p,{paramName:E,isOptional:A},w)=>{if(E==="*"){let q=m[w]||"";f=u.slice(0,u.length-q.length).replace(/(.)\/+$/,"$1")}const L=m[w];return A&&!L?p[E]=void 0:p[E]=(L||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:f,pattern:r}}function $w(r,e=!1,n=!0){ai(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,g)=>(s.push({paramName:m,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function Kw(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ai(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function yr(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}function Qw(r,e="/"){let{pathname:n,search:s="",hash:o=""}=typeof r=="string"?ha(r):r;return{pathname:n?n.startsWith("/")?n:Yw(n,e):e,search:Zw(s),hash:Jw(o)}}function Yw(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Em(r,e,n,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Xw(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function jT(r){let e=Xw(r);return e.map((n,s)=>s===e.length-1?n.pathname:n.pathnameBase)}function zT(r,e,n,s=!1){let o;typeof r=="string"?o=ha(r):(o={...r},dt(!o.pathname||!o.pathname.includes("?"),Em("?","pathname","search",o)),dt(!o.pathname||!o.pathname.includes("#"),Em("#","pathname","hash",o)),dt(!o.search||!o.search.includes("#"),Em("#","search","hash",o)));let u=r===""||o.pathname==="",f=u?"/":o.pathname,m;if(f==null)m=n;else{let A=e.length-1;if(!s&&f.startsWith("..")){let w=f.split("/");for(;w[0]==="..";)w.shift(),A-=1;o.pathname=w.join("/")}m=A>=0?e[A]:"/"}let g=Qw(o,m),p=f&&f!=="/"&&f.endsWith("/"),E=(u||f===".")&&n.endsWith("/");return!g.pathname.endsWith("/")&&(p||E)&&(g.pathname+="/"),g}var mr=r=>r.join("/").replace(/\/\/+/g,"/"),Ww=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Zw=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Jw=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function eb(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var qT=["POST","PUT","PATCH","DELETE"];new Set(qT);var tb=["GET",...qT];new Set(tb);var Io=B.createContext(null);Io.displayName="DataRouter";var zh=B.createContext(null);zh.displayName="DataRouterState";B.createContext(!1);var HT=B.createContext({isTransitioning:!1});HT.displayName="ViewTransition";var nb=B.createContext(new Map);nb.displayName="Fetchers";var ib=B.createContext(null);ib.displayName="Await";var Pi=B.createContext(null);Pi.displayName="Navigation";var gu=B.createContext(null);gu.displayName="Location";var Li=B.createContext({outlet:null,matches:[],isDataRoute:!1});Li.displayName="Route";var Sp=B.createContext(null);Sp.displayName="RouteError";function rb(r,{relative:e}={}){dt(yu(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=B.useContext(Pi),{hash:o,pathname:u,search:f}=_u(r,{relative:e}),m=u;return n!=="/"&&(m=u==="/"?n:mr([n,u])),s.createHref({pathname:m,search:f,hash:o})}function yu(){return B.useContext(gu)!=null}function fa(){return dt(yu(),"useLocation() may be used only in the context of a <Router> component."),B.useContext(gu).location}var FT="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function GT(r){B.useContext(Pi).static||B.useLayoutEffect(r)}function da(){let{isDataRoute:r}=B.useContext(Li);return r?yb():sb()}function sb(){dt(yu(),"useNavigate() may be used only in the context of a <Router> component.");let r=B.useContext(Io),{basename:e,navigator:n}=B.useContext(Pi),{matches:s}=B.useContext(Li),{pathname:o}=fa(),u=JSON.stringify(jT(s)),f=B.useRef(!1);return GT(()=>{f.current=!0}),B.useCallback((g,p={})=>{if(ai(f.current,FT),!f.current)return;if(typeof g=="number"){n.go(g);return}let E=zT(g,JSON.parse(u),o,p.relative==="path");r==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:mr([e,E.pathname])),(p.replace?n.replace:n.push)(E,p.state,p)},[e,n,u,o,r])}B.createContext(null);function ck(){let{matches:r}=B.useContext(Li),e=r[r.length-1];return e?e.params:{}}function _u(r,{relative:e}={}){let{matches:n}=B.useContext(Li),{pathname:s}=fa(),o=JSON.stringify(jT(n));return B.useMemo(()=>zT(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function ab(r,e){return $T(r,e)}function $T(r,e,n,s){dt(yu(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=B.useContext(Pi),{matches:u}=B.useContext(Li),f=u[u.length-1],m=f?f.params:{},g=f?f.pathname:"/",p=f?f.pathnameBase:"/",E=f&&f.route;{let Q=E&&E.path||"";KT(g,!E||Q.endsWith("*")||Q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q==="/"?"*":`${Q}/*`}">.`)}let A=fa(),w;if(e){let Q=typeof e=="string"?ha(e):e;dt(p==="/"||Q.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${Q.pathname}" was given in the \`location\` prop.`),w=Q}else w=A;let L=w.pathname||"/",q=L;if(p!=="/"){let Q=p.replace(/^\//,"").split("/");q="/"+L.replace(/^\//,"").split("/").slice(Q.length).join("/")}let Y=LT(r,{pathname:q});ai(E||Y!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),ai(Y==null||Y[Y.length-1].route.element!==void 0||Y[Y.length-1].route.Component!==void 0||Y[Y.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=hb(Y&&Y.map(Q=>Object.assign({},Q,{params:Object.assign({},m,Q.params),pathname:mr([p,o.encodeLocation?o.encodeLocation(Q.pathname).pathname:Q.pathname]),pathnameBase:Q.pathnameBase==="/"?p:mr([p,o.encodeLocation?o.encodeLocation(Q.pathnameBase).pathname:Q.pathnameBase])})),u,n,s);return e&&G?B.createElement(gu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},G):G}function ob(){let r=gb(),e=eb(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=B.createElement(B.Fragment,null,B.createElement("p",null,"💿 Hey developer 👋"),B.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",B.createElement("code",{style:u},"ErrorBoundary")," or"," ",B.createElement("code",{style:u},"errorElement")," prop on your route.")),B.createElement(B.Fragment,null,B.createElement("h2",null,"Unexpected Application Error!"),B.createElement("h3",{style:{fontStyle:"italic"}},e),n?B.createElement("pre",{style:o},n):null,f)}var lb=B.createElement(ob,null),ub=class extends B.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?B.createElement(Li.Provider,{value:this.props.routeContext},B.createElement(Sp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function cb({routeContext:r,match:e,children:n}){let s=B.useContext(Io);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),B.createElement(Li.Provider,{value:r},n)}function hb(r,e=[],n=null,s=null){if(r==null){if(!n)return null;if(n.errors)r=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let o=r,u=n?.errors;if(u!=null){let g=o.findIndex(p=>p.route.id&&u?.[p.route.id]!==void 0);dt(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,g+1))}let f=!1,m=-1;if(n)for(let g=0;g<o.length;g++){let p=o[g];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(m=g),p.route.id){let{loaderData:E,errors:A}=n,w=p.route.loader&&!E.hasOwnProperty(p.route.id)&&(!A||A[p.route.id]===void 0);if(p.route.lazy||w){f=!0,m>=0?o=o.slice(0,m+1):o=[o[0]];break}}}return o.reduceRight((g,p,E)=>{let A,w=!1,L=null,q=null;n&&(A=u&&p.route.id?u[p.route.id]:void 0,L=p.route.errorElement||lb,f&&(m<0&&E===0?(KT("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,q=null):m===E&&(w=!0,q=p.route.hydrateFallbackElement||null)));let Y=e.concat(o.slice(0,E+1)),G=()=>{let Q;return A?Q=L:w?Q=q:p.route.Component?Q=B.createElement(p.route.Component,null):p.route.element?Q=p.route.element:Q=g,B.createElement(cb,{match:p,routeContext:{outlet:g,matches:Y,isDataRoute:n!=null},children:Q})};return n&&(p.route.ErrorBoundary||p.route.errorElement||E===0)?B.createElement(ub,{location:n.location,revalidation:n.revalidation,component:L,error:A,children:G(),routeContext:{outlet:null,matches:Y,isDataRoute:!0}}):G()},null)}function Ap(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fb(r){let e=B.useContext(Io);return dt(e,Ap(r)),e}function db(r){let e=B.useContext(zh);return dt(e,Ap(r)),e}function mb(r){let e=B.useContext(Li);return dt(e,Ap(r)),e}function wp(r){let e=mb(r),n=e.matches[e.matches.length-1];return dt(n.route.id,`${r} can only be used on routes that contain a unique "id"`),n.route.id}function pb(){return wp("useRouteId")}function gb(){let r=B.useContext(Sp),e=db("useRouteError"),n=wp("useRouteError");return r!==void 0?r:e.errors?.[n]}function yb(){let{router:r}=fb("useNavigate"),e=wp("useNavigate"),n=B.useRef(!1);return GT(()=>{n.current=!0}),B.useCallback(async(o,u={})=>{ai(n.current,FT),n.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...u}))},[r,e])}var Qv={};function KT(r,e,n){!e&&!Qv[r]&&(Qv[r]=!0,ai(!1,n))}B.memo(_b);function _b({routes:r,future:e,state:n}){return $T(r,void 0,n,e)}function ah(r){dt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function vb({basename:r="/",children:e=null,location:n,navigationType:s="POP",navigator:o,static:u=!1}){dt(!yu(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),m=B.useMemo(()=>({basename:f,navigator:o,static:u,future:{}}),[f,o,u]);typeof n=="string"&&(n=ha(n));let{pathname:g="/",search:p="",hash:E="",state:A=null,key:w="default"}=n,L=B.useMemo(()=>{let q=yr(g,f);return q==null?null:{location:{pathname:q,search:p,hash:E,state:A,key:w},navigationType:s}},[f,g,p,E,A,w,s]);return ai(L!=null,`<Router basename="${f}"> is not able to match the URL "${g}${p}${E}" because it does not start with the basename, so the <Router> won't render anything.`),L==null?null:B.createElement(Pi.Provider,{value:m},B.createElement(gu.Provider,{children:e,value:L}))}function Yv({children:r,location:e}){return ab(Fm(r),e)}function Fm(r,e=[]){let n=[];return B.Children.forEach(r,(s,o)=>{if(!B.isValidElement(s))return;let u=[...e,o];if(s.type===B.Fragment){n.push.apply(n,Fm(s.props.children,u));return}dt(s.type===ah,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),dt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Fm(s.props.children,u)),n.push(f)}),n}var oh="get",lh="application/x-www-form-urlencoded";function qh(r){return r!=null&&typeof r.tagName=="string"}function Eb(r){return qh(r)&&r.tagName.toLowerCase()==="button"}function Tb(r){return qh(r)&&r.tagName.toLowerCase()==="form"}function Sb(r){return qh(r)&&r.tagName.toLowerCase()==="input"}function Ab(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function wb(r,e){return r.button===0&&(!e||e==="_self")&&!Ab(r)}var Jc=null;function bb(){if(Jc===null)try{new FormData(document.createElement("form"),0),Jc=!1}catch{Jc=!0}return Jc}var Rb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Tm(r){return r!=null&&!Rb.has(r)?(ai(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${lh}"`),null):r}function Ib(r,e){let n,s,o,u,f;if(Tb(r)){let m=r.getAttribute("action");s=m?yr(m,e):null,n=r.getAttribute("method")||oh,o=Tm(r.getAttribute("enctype"))||lh,u=new FormData(r)}else if(Eb(r)||Sb(r)&&(r.type==="submit"||r.type==="image")){let m=r.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=r.getAttribute("formaction")||m.getAttribute("action");if(s=g?yr(g,e):null,n=r.getAttribute("formmethod")||m.getAttribute("method")||oh,o=Tm(r.getAttribute("formenctype"))||Tm(m.getAttribute("enctype"))||lh,u=new FormData(m,r),!bb()){let{name:p,type:E,value:A}=r;if(E==="image"){let w=p?`${p}.`:"";u.append(`${w}x`,"0"),u.append(`${w}y`,"0")}else p&&u.append(p,A)}}else{if(qh(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=oh,s=null,o=lh,f=r}return u&&o==="text/plain"&&(f=u,u=void 0),{action:s,method:n.toLowerCase(),encType:o,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function bp(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Cb(r,e,n){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return s.pathname==="/"?s.pathname=`_root.${n}`:e&&yr(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${n}`,s}async function Db(r,e){if(r.id in e)return e[r.id];try{let n=await import(r.module);return e[r.id]=n,n}catch(n){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Nb(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Ob(r,e,n){let s=await Promise.all(r.map(async o=>{let u=e.routes[o.route.id];if(u){let f=await Db(u,n);return f.links?f.links():[]}return[]}));return Vb(s.flat(1).filter(Nb).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Xv(r,e,n,s,o,u){let f=(g,p)=>n[p]?g.route.id!==n[p].route.id:!0,m=(g,p)=>n[p].pathname!==g.pathname||n[p].route.path?.endsWith("*")&&n[p].params["*"]!==g.params["*"];return u==="assets"?e.filter((g,p)=>f(g,p)||m(g,p)):u==="data"?e.filter((g,p)=>{let E=s.routes[g.route.id];if(!E||!E.hasLoader)return!1;if(f(g,p)||m(g,p))return!0;if(g.route.shouldRevalidate){let A=g.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof A=="boolean")return A}return!0}):[]}function xb(r,e,{includeHydrateFallback:n}={}){return Mb(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function Mb(r){return[...new Set(r)]}function kb(r){let e={},n=Object.keys(r).sort();for(let s of n)e[s]=r[s];return e}function Vb(r,e){let n=new Set;return new Set(e),r.reduce((s,o)=>{let u=JSON.stringify(kb(o));return n.has(u)||(n.add(u),s.push({key:u,link:o})),s},[])}function QT(){let r=B.useContext(Io);return bp(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Pb(){let r=B.useContext(zh);return bp(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Rp=B.createContext(void 0);Rp.displayName="FrameworkContext";function YT(){let r=B.useContext(Rp);return bp(r,"You must render this element inside a <HydratedRouter> element"),r}function Lb(r,e){let n=B.useContext(Rp),[s,o]=B.useState(!1),[u,f]=B.useState(!1),{onFocus:m,onBlur:g,onMouseEnter:p,onMouseLeave:E,onTouchStart:A}=e,w=B.useRef(null);B.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let Y=Q=>{Q.forEach(se=>{f(se.isIntersecting)})},G=new IntersectionObserver(Y,{threshold:.5});return w.current&&G.observe(w.current),()=>{G.disconnect()}}},[r]),B.useEffect(()=>{if(s){let Y=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(Y)}}},[s]);let L=()=>{o(!0)},q=()=>{o(!1),f(!1)};return n?r!=="intent"?[u,w,{}]:[u,w,{onFocus:Fl(m,L),onBlur:Fl(g,q),onMouseEnter:Fl(p,L),onMouseLeave:Fl(E,q),onTouchStart:Fl(A,L)}]:[!1,w,{}]}function Fl(r,e){return n=>{r&&r(n),n.defaultPrevented||e(n)}}function Ub({page:r,...e}){let{router:n}=QT(),s=B.useMemo(()=>LT(n.routes,r,n.basename),[n.routes,r,n.basename]);return s?B.createElement(jb,{page:r,matches:s,...e}):null}function Bb(r){let{manifest:e,routeModules:n}=YT(),[s,o]=B.useState([]);return B.useEffect(()=>{let u=!1;return Ob(r,e,n).then(f=>{u||o(f)}),()=>{u=!0}},[r,e,n]),s}function jb({page:r,matches:e,...n}){let s=fa(),{manifest:o,routeModules:u}=YT(),{basename:f}=QT(),{loaderData:m,matches:g}=Pb(),p=B.useMemo(()=>Xv(r,e,g,o,s,"data"),[r,e,g,o,s]),E=B.useMemo(()=>Xv(r,e,g,o,s,"assets"),[r,e,g,o,s]),A=B.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let q=new Set,Y=!1;if(e.forEach(Q=>{let se=o.routes[Q.route.id];!se||!se.hasLoader||(!p.some(ie=>ie.route.id===Q.route.id)&&Q.route.id in m&&u[Q.route.id]?.shouldRevalidate||se.hasClientLoader?Y=!0:q.add(Q.route.id))}),q.size===0)return[];let G=Cb(r,f,"data");return Y&&q.size>0&&G.searchParams.set("_routes",e.filter(Q=>q.has(Q.route.id)).map(Q=>Q.route.id).join(",")),[G.pathname+G.search]},[f,m,s,o,p,e,r,u]),w=B.useMemo(()=>xb(E,o),[E,o]),L=Bb(E);return B.createElement(B.Fragment,null,A.map(q=>B.createElement("link",{key:q,rel:"prefetch",as:"fetch",href:q,...n})),w.map(q=>B.createElement("link",{key:q,rel:"modulepreload",href:q,...n})),L.map(({key:q,link:Y})=>B.createElement("link",{key:q,...Y})))}function zb(...r){return e=>{r.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var XT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{XT&&(window.__reactRouterVersion="7.7.1")}catch{}function qb({basename:r,children:e,window:n}){let s=B.useRef();s.current==null&&(s.current=Ow({window:n,v5Compat:!0}));let o=s.current,[u,f]=B.useState({action:o.action,location:o.location}),m=B.useCallback(g=>{B.startTransition(()=>f(g))},[f]);return B.useLayoutEffect(()=>o.listen(m),[o,m]),B.createElement(vb,{basename:r,children:e,location:u.location,navigationType:u.action,navigator:o})}var WT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ri=B.forwardRef(function({onClick:e,discover:n="render",prefetch:s="none",relative:o,reloadDocument:u,replace:f,state:m,target:g,to:p,preventScrollReset:E,viewTransition:A,...w},L){let{basename:q}=B.useContext(Pi),Y=typeof p=="string"&&WT.test(p),G,Q=!1;if(typeof p=="string"&&Y&&(G=p,XT))try{let I=new URL(window.location.href),O=p.startsWith("//")?new URL(I.protocol+p):new URL(p),M=yr(O.pathname,q);O.origin===I.origin&&M!=null?p=M+O.search+O.hash:Q=!0}catch{ai(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let se=rb(p,{relative:o}),[ie,pe,ce]=Lb(s,w),ye=$b(p,{replace:f,state:m,target:g,preventScrollReset:E,relative:o,viewTransition:A});function x(I){e&&e(I),I.defaultPrevented||ye(I)}let R=B.createElement("a",{...w,...ce,href:G||se,onClick:Q||u?e:x,ref:zb(L,pe),target:g,"data-discover":!Y&&n==="render"?"true":void 0});return ie&&!Y?B.createElement(B.Fragment,null,R,B.createElement(Ub,{page:se})):R});ri.displayName="Link";var Hb=B.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:s="",end:o=!1,style:u,to:f,viewTransition:m,children:g,...p},E){let A=_u(f,{relative:p.relative}),w=fa(),L=B.useContext(zh),{navigator:q,basename:Y}=B.useContext(Pi),G=L!=null&&Wb(A)&&m===!0,Q=q.encodeLocation?q.encodeLocation(A).pathname:A.pathname,se=w.pathname,ie=L&&L.navigation&&L.navigation.location?L.navigation.location.pathname:null;n||(se=se.toLowerCase(),ie=ie?ie.toLowerCase():null,Q=Q.toLowerCase()),ie&&Y&&(ie=yr(ie,Y)||ie);const pe=Q!=="/"&&Q.endsWith("/")?Q.length-1:Q.length;let ce=se===Q||!o&&se.startsWith(Q)&&se.charAt(pe)==="/",ye=ie!=null&&(ie===Q||!o&&ie.startsWith(Q)&&ie.charAt(Q.length)==="/"),x={isActive:ce,isPending:ye,isTransitioning:G},R=ce?e:void 0,I;typeof s=="function"?I=s(x):I=[s,ce?"active":null,ye?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let O=typeof u=="function"?u(x):u;return B.createElement(ri,{...p,"aria-current":R,className:I,ref:E,style:O,to:f,viewTransition:m},typeof g=="function"?g(x):g)});Hb.displayName="NavLink";var Fb=B.forwardRef(({discover:r="render",fetcherKey:e,navigate:n,reloadDocument:s,replace:o,state:u,method:f=oh,action:m,onSubmit:g,relative:p,preventScrollReset:E,viewTransition:A,...w},L)=>{let q=Yb(),Y=Xb(m,{relative:p}),G=f.toLowerCase()==="get"?"get":"post",Q=typeof m=="string"&&WT.test(m),se=ie=>{if(g&&g(ie),ie.defaultPrevented)return;ie.preventDefault();let pe=ie.nativeEvent.submitter,ce=pe?.getAttribute("formmethod")||f;q(pe||ie.currentTarget,{fetcherKey:e,method:ce,navigate:n,replace:o,state:u,relative:p,preventScrollReset:E,viewTransition:A})};return B.createElement("form",{ref:L,method:G,action:Y,onSubmit:s?g:se,...w,"data-discover":!Q&&r==="render"?"true":void 0})});Fb.displayName="Form";function Gb(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ZT(r){let e=B.useContext(Io);return dt(e,Gb(r)),e}function $b(r,{target:e,replace:n,state:s,preventScrollReset:o,relative:u,viewTransition:f}={}){let m=da(),g=fa(),p=_u(r,{relative:u});return B.useCallback(E=>{if(wb(E,e)){E.preventDefault();let A=n!==void 0?n:ru(g)===ru(p);m(r,{replace:A,state:s,preventScrollReset:o,relative:u,viewTransition:f})}},[g,m,p,n,s,e,r,o,u,f])}var Kb=0,Qb=()=>`__${String(++Kb)}__`;function Yb(){let{router:r}=ZT("useSubmit"),{basename:e}=B.useContext(Pi),n=pb();return B.useCallback(async(s,o={})=>{let{action:u,method:f,encType:m,formData:g,body:p}=Ib(s,e);if(o.navigate===!1){let E=o.fetcherKey||Qb();await r.fetch(E,n,o.action||u,{preventScrollReset:o.preventScrollReset,formData:g,body:p,formMethod:o.method||f,formEncType:o.encType||m,flushSync:o.flushSync})}else await r.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:g,body:p,formMethod:o.method||f,formEncType:o.encType||m,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,n])}function Xb(r,{relative:e}={}){let{basename:n}=B.useContext(Pi),s=B.useContext(Li);dt(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={..._u(r||".",{relative:e})},f=fa();if(r==null){u.search=f.search;let m=new URLSearchParams(u.search),g=m.getAll("index");if(g.some(E=>E==="")){m.delete("index"),g.filter(A=>A).forEach(A=>m.append("index",A));let E=m.toString();u.search=E?`?${E}`:""}}return(!r||r===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:mr([n,u.pathname])),ru(u)}function Wb(r,{relative:e}={}){let n=B.useContext(HT);dt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=ZT("useViewTransitionState"),o=_u(r,{relative:e});if(!n.isTransitioning)return!1;let u=yr(n.currentLocation.pathname,s)||n.currentLocation.pathname,f=yr(n.nextLocation.pathname,s)||n.nextLocation.pathname;return vh(o.pathname,f)!=null||vh(o.pathname,u)!=null}const Zb="_sbartabWrapper_uud5e_34",Jb={sbartabWrapper:Zb},eR="_nav_c5o2y_5",tR="_navWithLogForm_c5o2y_7",nR="_left_c5o2y_47",iR="_iconImage_c5o2y_1",rR="_title_c5o2y_1",sR="_right_c5o2y_91",aR="_authButts_c5o2y_173",oR="_HyperLink_c5o2y_201",lR="_signUp_c5o2y_1",uR="_signUpLink_c5o2y_1",cR="_logIn_c5o2y_1",hR="_logInLink_c5o2y_1",fR="_bell_c5o2y_1",dR="_hamburgerButton_c5o2y_1",mR="_dropDown_c5o2y_315",pR="_Links_c5o2y_391",gR="_hideDropDown_c5o2y_433",ot={nav:eR,navWithLogForm:tR,left:nR,iconImage:iR,title:rR,right:sR,authButts:aR,HyperLink:oR,signUp:lR,signUpLink:uR,logIn:cR,logInLink:hR,bell:fR,hamburgerButton:dR,dropDown:mR,Links:pR,hideDropDown:gR};function yR(){const{showLogForm:r}=B.useContext(li),[e,n]=B.useState(!1);function s(){}return k.jsxs("div",{className:r?ot.navWithLogForm:ot.nav,children:[k.jsxs("div",{className:ot.left,children:[k.jsx("img",{src:"./icon.jpg",id:ot.iconImage}),k.jsx("h1",{id:ot.title,children:"12 - MCCARTHY"})]}),k.jsxs("div",{className:ot.right,children:[k.jsx("button",{id:ot.hamburgerButton,onClick:()=>{n(!e)},children:k.jsx("i",{className:"fa fa-navicon"})}),k.jsx(Zv,{handleBellClick:s,setShowResults:n})]}),k.jsxs("div",{className:e?`${ot.dropDown} ${ot.showResults}`:`${ot.dropDown} ${ot.hideDropDown}  `,children:[k.jsx(Zv,{handleBellClick:s,setShowResults:n}),k.jsx("button",{onClick:()=>{n(!1)},children:"Hide Menu"})]})]})}function Wv(){const{userData:r}=B.useContext(li);return k.jsxs(k.Fragment,{children:[r&&k.jsx(ri,{to:"/",className:ot.HyperLink,children:k.jsx("button",{className:ot.authButts,children:"Home"})}),window.location.href.toLowerCase().includes("register")?k.jsx(ri,{to:"/login",className:ot.HyperLink,children:k.jsx("button",{className:ot.authButts,children:"Log In"})}):k.jsx(ri,{to:"/register",className:ot.HyperLink,children:k.jsx("button",{className:ot.authButts,children:"Sign Up"})})]})}function Zv({handleBellClick:r,setShowResults:e}){const{userObject:n,showLogForm:s,setShowLogForm:o,setShowLogOutPrompt:u}=B.useContext(li);return k.jsx(k.Fragment,{children:n?.uid?k.jsx(k.Fragment,{children:s?k.jsx(Wv,{}):k.jsxs(k.Fragment,{children:[k.jsxs("button",{id:ot.bell,onClick:()=>{r(),e(!1)},children:[k.jsx("i",{className:"fa fa-bell-o"}),k.jsx("p",{children:"Notifications"})]}),k.jsx("button",{onClick:()=>{u(!0),e(!1)},children:"Sign Out"})]})}):k.jsx(k.Fragment,{children:s?k.jsx(Wv,{}):k.jsxs(k.Fragment,{children:[k.jsx(ri,{to:"/register",id:ot.signUpLink,className:ot.Links,children:k.jsx("button",{className:ot.authButts,id:ot.signUp,onClick:()=>{o(!0),e(!1)},children:"Sign Up"})}),k.jsx(ri,{to:"/login",id:ot.logInLink,className:ot.Links,children:k.jsx("button",{className:ot.authButts,id:ot.logIn,onClick:()=>{o(!0),e(!1)},children:"Log In"})})]})})})}const _R="_sideBarWrapper_1k8a8_9",vR="_hideSidebar_1k8a8_41",ER="_linkWrapper_1k8a8_49",TR="_simplifySidebar_1k8a8_81",SR="_active_1k8a8_121",AR="_link_1k8a8_49",Wr={sideBarWrapper:_R,hideSidebar:vR,linkWrapper:ER,simplifySidebar:TR,active:SR,link:AR};function wR(){const{tabs:r,setTabs:e,setPathTo:n,showSideBar:s,setShowSideBar:o,showLogForm:u}=B.useContext(li),f=da();if(!u)return k.jsx("div",{className:s?`${Wr.sideBarWrapper} `:`${Wr.sideBarWrapper} ${Wr.hideSidebar}`,children:k.jsxs("ul",{className:Wr.linkWrapper,children:[k.jsxs("button",{className:Wr.simplifySidebar,onClick:()=>{o(!s)},children:[k.jsx("i",{className:s?"fa fa-chevron-left":"fa fa-chevron-right"}),k.jsx("p",{children:"Hide"})]}),r?.map(m=>k.jsxs("li",{className:m.focus?`${Wr.active} ${Wr.link}`:`${Wr.link}`,title:m.pageName,onClick:()=>{e(g=>g.map(p=>m.pageName==p.pageName?{...p,focus:!0}:{...p,focus:!1})),n(m.path),f(m.path)},children:[k.jsx("i",{className:m.icon}),k.jsx("p",{children:m.pageName})]},m.keyId))]})})}const bR="_errorWrapper_1xn5w_1",RR="_errorBox_1xn5w_29",IR="_buttons_1xn5w_79",Sm={errorWrapper:bR,errorBox:RR,buttons:IR};function CR(){const{errorDescription:r,setErrorDescription:e}=B.useContext(li);if(r.length!=0)return k.jsx("div",{className:Sm.errorWrapper,children:k.jsxs("div",{className:Sm.errorBox,children:[k.jsx("h1",{children:"Error Occured!"}),k.jsx("p",{children:r}),k.jsx("div",{className:Sm.buttons,children:k.jsx("button",{onClick:()=>{e("")},children:"Try Again"})})]})})}const DR={};function NR(){const{pageDetector:r}=B.useContext(li);return B.useEffect(()=>{r(2,null,!0)},[]),k.jsx("div",{className:DR.forgotPassBox,children:"Forgot Password"})}const OR="_logInWrapper_1sl5h_1",xR="_logInBox_1sl5h_31",MR="_top_1sl5h_69",kR="_middle_1sl5h_115",VR="_inputBoxes_1sl5h_127",PR="_inputBoxesFocused_1sl5h_151",LR="_focused_1sl5h_215",UR="_bottomLinks_1sl5h_245",BR="_links_1sl5h_255",jR="_bottom_1sl5h_245",zR="_platforms_1sl5h_363",Ge={logInWrapper:OR,logInBox:xR,top:MR,middle:kR,inputBoxes:VR,inputBoxesFocused:PR,focused:LR,bottomLinks:UR,links:BR,bottom:jR,platforms:zR},qR=()=>{};var Jv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},HR=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],m=r[n++],g=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[n++],f=r[n++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return e.join("")},e0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,m=f?r[o+1]:0,g=o+2<r.length,p=g?r[o+2]:0,E=u>>2,A=(u&3)<<4|m>>4;let w=(m&15)<<2|p>>6,L=p&63;g||(L=64,f||(w=64)),s.push(n[E],n[A],n[w],n[L])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(JT(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):HR(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const p=o<r.length?n[r.charAt(o)]:64;++o;const A=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||m==null||p==null||A==null)throw new FR;const w=u<<2|m>>4;if(s.push(w),p!==64){const L=m<<4&240|p>>2;if(s.push(L),A!==64){const q=p<<6&192|A;s.push(q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class FR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const GR=function(r){const e=JT(r);return e0.encodeByteArray(e,!0)},Eh=function(r){return GR(r).replace(/\./g,"")},t0=function(r){try{return e0.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $R(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR=()=>$R().__FIREBASE_DEFAULTS__,QR=()=>{if(typeof process>"u"||typeof Jv>"u")return;const r=Jv.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},YR=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&t0(r[1]);return e&&JSON.parse(e)},Hh=()=>{try{return qR()||KR()||QR()||YR()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},n0=r=>Hh()?.emulatorHosts?.[r],XR=r=>{const e=n0(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},i0=()=>Hh()?.config,r0=r=>Hh()?.[`_${r}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function s0(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZR(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Eh(JSON.stringify(n)),Eh(JSON.stringify(f)),""].join(".")}const Zl={};function JR(){const r={prod:[],emulator:[]};for(const e of Object.keys(Zl))Zl[e]?r.emulator.push(e):r.prod.push(e);return r}function eI(r){let e=document.getElementById(r),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),n=!0),{created:n,element:e}}let eE=!1;function a0(r,e){if(typeof window>"u"||typeof document>"u"||!Co(window.location.host)||Zl[r]===e||Zl[r]||eE)return;Zl[r]=e;function n(w){return`__firebase__banner__${w}`}const s="__firebase__banner",u=JR().prod.length>0;function f(){const w=document.getElementById(s);w&&w.remove()}function m(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function g(w,L){w.setAttribute("width","24"),w.setAttribute("id",L),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function p(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{eE=!0,f()},w}function E(w,L){w.setAttribute("id",L),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function A(){const w=eI(s),L=n("text"),q=document.getElementById(L)||document.createElement("span"),Y=n("learnmore"),G=document.getElementById(Y)||document.createElement("a"),Q=n("preprendIcon"),se=document.getElementById(Q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const ie=w.element;m(ie),E(G,Y);const pe=p();g(se,Q),ie.append(se,q,G,pe),document.body.appendChild(ie)}u?(q.innerText="Preview backend disconnected.",se.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(se.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,q.innerText="Preview backend running in this workspace."),q.setAttribute("id",L)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(sn())}function nI(){const r=Hh()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function iI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rI(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function sI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function aI(){const r=sn();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function oI(){return!nI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function o0(){try{return typeof indexedDB=="object"}catch{return!1}}function l0(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(n){e(n)}})}function lI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI="FirebaseError";class _n extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=uI,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ma.prototype.create)}}class ma{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,u=this.errors[e],f=u?cI(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new _n(o,m,s)}}function cI(r,e){return r.replace(hI,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const hI=/\{\$([^}]+)}/g;function fI(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ss(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=e[o];if(tE(u)&&tE(f)){if(!ss(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function tE(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function $l(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Kl(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}function dI(r,e){const n=new mI(r,e);return n.subscribe.bind(n)}class mI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");pI(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=Am),o.error===void 0&&(o.error=Am),o.complete===void 0&&(o.complete=Am);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pI(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function Am(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(r){return r&&r._delegate?r._delegate:r}class oi{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new WR;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_I(e))try{this.getOrInitializeService({instanceIdentifier:Zs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Zs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zs){return this.instances.has(e)}getOptions(e=Zs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:yI(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Zs){return this.component?this.component.multipleInstances?e:Zs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yI(r){return r===Zs?void 0:r}function _I(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Pe||(Pe={}));const EI={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},TI=Pe.INFO,SI={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},AI=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=SI[e];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ip{constructor(e){this.name=e,this._logLevel=TI,this._logHandler=AI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?EI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const wI=(r,e)=>e.some(n=>r instanceof n);let nE,iE;function bI(){return nE||(nE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function RI(){return iE||(iE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const u0=new WeakMap,Gm=new WeakMap,c0=new WeakMap,wm=new WeakMap,Cp=new WeakMap;function II(r){const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(pr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return e.then(n=>{n instanceof IDBCursor&&u0.set(n,r)}).catch(()=>{}),Cp.set(e,r),e}function CI(r){if(Gm.has(r))return;const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});Gm.set(r,e)}let $m={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Gm.get(r);if(e==="objectStoreNames")return r.objectStoreNames||c0.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pr(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function DI(r){$m=r($m)}function NI(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(bm(this),e,...n);return c0.set(s,e.sort?e.sort():[e]),pr(s)}:RI().includes(r)?function(...e){return r.apply(bm(this),e),pr(u0.get(this))}:function(...e){return pr(r.apply(bm(this),e))}}function OI(r){return typeof r=="function"?NI(r):(r instanceof IDBTransaction&&CI(r),wI(r,bI())?new Proxy(r,$m):r)}function pr(r){if(r instanceof IDBRequest)return II(r);if(wm.has(r))return wm.get(r);const e=OI(r);return e!==r&&(wm.set(r,e),Cp.set(e,r)),e}const bm=r=>Cp.get(r);function Fh(r,e,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,e),m=pr(f);return s&&f.addEventListener("upgradeneeded",g=>{s(pr(f.result),g.oldVersion,g.newVersion,pr(f.transaction),g)}),n&&f.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",p=>o(p.oldVersion,p.newVersion,p))}).catch(()=>{}),m}function Rm(r,{blocked:e}={}){const n=indexedDB.deleteDatabase(r);return e&&n.addEventListener("blocked",s=>e(s.oldVersion,s)),pr(n).then(()=>{})}const xI=["get","getKey","getAll","getAllKeys","count"],MI=["put","add","delete","clear"],Im=new Map;function rE(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Im.get(e))return Im.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=MI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||xI.includes(n)))return;const u=async function(f,...m){const g=this.transaction(f,o?"readwrite":"readonly");let p=g.store;return s&&(p=p.index(m.shift())),(await Promise.all([p[n](...m),o&&g.done]))[0]};return Im.set(e,u),u}DI(r=>({...r,get:(e,n,s)=>rE(e,n)||r.get(e,n,s),has:(e,n)=>!!rE(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(VI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function VI(r){return r.getComponent()?.type==="VERSION"}const Km="@firebase/app",sE="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new Ip("@firebase/app"),PI="@firebase/app-compat",LI="@firebase/analytics-compat",UI="@firebase/analytics",BI="@firebase/app-check-compat",jI="@firebase/app-check",zI="@firebase/auth",qI="@firebase/auth-compat",HI="@firebase/database",FI="@firebase/data-connect",GI="@firebase/database-compat",$I="@firebase/functions",KI="@firebase/functions-compat",QI="@firebase/installations",YI="@firebase/installations-compat",XI="@firebase/messaging",WI="@firebase/messaging-compat",ZI="@firebase/performance",JI="@firebase/performance-compat",e2="@firebase/remote-config",t2="@firebase/remote-config-compat",n2="@firebase/storage",i2="@firebase/storage-compat",r2="@firebase/firestore",s2="@firebase/ai",a2="@firebase/firestore-compat",o2="firebase",l2="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm="[DEFAULT]",u2={[Km]:"fire-core",[PI]:"fire-core-compat",[UI]:"fire-analytics",[LI]:"fire-analytics-compat",[jI]:"fire-app-check",[BI]:"fire-app-check-compat",[zI]:"fire-auth",[qI]:"fire-auth-compat",[HI]:"fire-rtdb",[FI]:"fire-data-connect",[GI]:"fire-rtdb-compat",[$I]:"fire-fn",[KI]:"fire-fn-compat",[QI]:"fire-iid",[YI]:"fire-iid-compat",[XI]:"fire-fcm",[WI]:"fire-fcm-compat",[ZI]:"fire-perf",[JI]:"fire-perf-compat",[e2]:"fire-rc",[t2]:"fire-rc-compat",[n2]:"fire-gcs",[i2]:"fire-gcs-compat",[r2]:"fire-fst",[a2]:"fire-fst-compat",[s2]:"fire-vertex","fire-js":"fire-js",[o2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th=new Map,c2=new Map,Ym=new Map;function aE(r,e){try{r.container.addComponent(e)}catch(n){_r.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function Mi(r){const e=r.name;if(Ym.has(e))return _r.debug(`There were multiple attempts to register component ${e}.`),!1;Ym.set(e,r);for(const n of Th.values())aE(n,r);for(const n of c2.values())aE(n,r);return!0}function Do(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function Nn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ns=new ma("app","Firebase",h2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new oi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ns.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=l2;function h0(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s={name:Qm,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw ns.create("bad-app-name",{appName:String(o)});if(n||(n=i0()),!n)throw ns.create("no-options");const u=Th.get(o);if(u){if(ss(n,u.options)&&ss(s,u.config))return u;throw ns.create("duplicate-app",{appName:o})}const f=new vI(o);for(const g of Ym.values())f.addComponent(g);const m=new f2(n,s,f);return Th.set(o,m),m}function Dp(r=Qm){const e=Th.get(r);if(!e&&r===Qm&&i0())return h0();if(!e)throw ns.create("no-app",{appName:r});return e}function Gn(r,e,n){let s=u2[r]??r;n&&(s+=`-${n}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const f=[`Unable to register library "${s}" with version "${e}":`];o&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_r.warn(f.join(" "));return}Mi(new oi(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2="firebase-heartbeat-database",m2=1,su="firebase-heartbeat-store";let Cm=null;function f0(){return Cm||(Cm=Fh(d2,m2,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(su)}catch(n){console.warn(n)}}}}).catch(r=>{throw ns.create("idb-open",{originalErrorMessage:r.message})})),Cm}async function p2(r){try{const n=(await f0()).transaction(su),s=await n.objectStore(su).get(d0(r));return await n.done,s}catch(e){if(e instanceof _n)_r.warn(e.message);else{const n=ns.create("idb-get",{originalErrorMessage:e?.message});_r.warn(n.message)}}}async function oE(r,e){try{const s=(await f0()).transaction(su,"readwrite");await s.objectStore(su).put(e,d0(r)),await s.done}catch(n){if(n instanceof _n)_r.warn(n.message);else{const s=ns.create("idb-set",{originalErrorMessage:n?.message});_r.warn(s.message)}}}function d0(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2=1024,y2=30;class _2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new E2(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=lE();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>y2){const o=T2(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){_r.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=lE(),{heartbeatsToSend:n,unsentEntries:s}=v2(this._heartbeatsCache.heartbeats),o=Eh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return _r.warn(e),""}}}function lE(){return new Date().toISOString().substring(0,10)}function v2(r,e=g2){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),uE(n)>e){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),uE(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class E2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return o0()?l0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await p2(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return oE(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return oE(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function uE(r){return Eh(JSON.stringify({version:2,heartbeats:r})).length}function T2(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S2(r){Mi(new oi("platform-logger",e=>new kI(e),"PRIVATE")),Mi(new oi("heartbeat",e=>new _2(e),"PRIVATE")),Gn(Km,sE,r),Gn(Km,sE,"esm2020"),Gn("fire-js","")}S2("");function m0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const A2=m0,p0=new ma("auth","Firebase",m0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=new Ip("@firebase/auth");function w2(r,...e){Sh.logLevel<=Pe.WARN&&Sh.warn(`Auth (${No}): ${r}`,...e)}function uh(r,...e){Sh.logLevel<=Pe.ERROR&&Sh.error(`Auth (${No}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(r,...e){throw Op(r,...e)}function si(r,...e){return Op(r,...e)}function Np(r,e,n){const s={...A2(),[e]:n};return new ma("auth","Firebase",s).create(e,{appName:r.name})}function gr(r){return Np(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function b2(r,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&$n(r,"argument-error"),Np(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Op(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return p0.create(r,...e)}function Te(r,e,...n){if(!r)throw Op(e,...n)}function fr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw uh(e),new Error(e)}function vr(r,e){r||fr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(){return typeof self<"u"&&self.location?.href||""}function R2(){return cE()==="http:"||cE()==="https:"}function cE(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(R2()||rI()||"connection"in navigator)?navigator.onLine:!0}function C2(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n){this.shortDelay=e,this.longDelay=n,vr(n>e,"Short delay should be less than long delay!"),this.isMobile=tI()||sI()}get(){return I2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(r,e){vr(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],O2=new Eu(3e4,6e4);function fs(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function ds(r,e,n,s,o={}){return y0(r,o,async()=>{let u={},f={};s&&(e==="GET"?f=s:u={body:JSON.stringify(s)});const m=vu({key:r.config.apiKey,...f}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const p={method:e,headers:g,...u};return iI()||(p.referrerPolicy="no-referrer"),r.emulatorConfig&&Co(r.emulatorConfig.host)&&(p.credentials="include"),g0.fetch()(await _0(r,r.config.apiHost,n,m),p)})}async function y0(r,e,n){r._canInitEmulator=!1;const s={...D2,...e};try{const o=new M2(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw eh(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[g,p]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw eh(r,"credential-already-in-use",f);if(g==="EMAIL_EXISTS")throw eh(r,"email-already-in-use",f);if(g==="USER_DISABLED")throw eh(r,"user-disabled",f);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw Np(r,E,p);$n(r,E)}}catch(o){if(o instanceof _n)throw o;$n(r,"network-request-failed",{message:String(o)})}}async function Tu(r,e,n,s,o={}){const u=await ds(r,e,n,s,o);return"mfaPendingCredential"in u&&$n(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function _0(r,e,n,s){const o=`${e}${n}?${s}`,u=r,f=u.config.emulator?xp(r.config,o):`${r.config.apiScheme}://${o}`;return N2.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function x2(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class M2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(si(this.auth,"network-request-failed")),O2.get())})}}function eh(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=si(r,e,s);return o.customData._tokenResponse=n,o}function hE(r){return r!==void 0&&r.enterprise!==void 0}class k2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return x2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function V2(r,e){return ds(r,"GET","/v2/recaptchaConfig",fs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P2(r,e){return ds(r,"POST","/v1/accounts:delete",e)}async function Ah(r,e){return ds(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function L2(r,e=!1){const n=Lt(r),s=await n.getIdToken(e),o=Mp(s);Te(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u?.sign_in_provider;return{claims:o,token:s,authTime:Jl(Dm(o.auth_time)),issuedAtTime:Jl(Dm(o.iat)),expirationTime:Jl(Dm(o.exp)),signInProvider:f||null,signInSecondFactor:u?.sign_in_second_factor||null}}function Dm(r){return Number(r)*1e3}function Mp(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return uh("JWT malformed, contained fewer than 3 sections"),null;try{const o=t0(n);return o?JSON.parse(o):(uh("Failed to decode base64 JWT payload"),null)}catch(o){return uh("Caught error parsing JWT payload as JSON",o?.toString()),null}}function fE(r){const e=Mp(r);return Te(e,"internal-error"),Te(typeof e.exp<"u","internal-error"),Te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function au(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof _n&&U2(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function U2({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jl(this.lastLoginAt),this.creationTime=Jl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wh(r){const e=r.auth,n=await r.getIdToken(),s=await au(r,Ah(e,{idToken:n}));Te(s?.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const u=o.providerUserInfo?.length?v0(o.providerUserInfo):[],f=z2(r.providerData,u),m=r.isAnonymous,g=!(r.email&&o.passwordHash)&&!f?.length,p=m?g:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new Wm(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(r,E)}async function j2(r){const e=Lt(r);await wh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function z2(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function v0(r){return r.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q2(r,e){const n=await y0(r,{},async()=>{const s=vu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=await _0(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return r.emulatorConfig&&Co(r.emulatorConfig.host)&&(g.credentials="include"),g0.fetch()(f,g)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function H2(r,e){return ds(r,"POST","/v2/accounts:revokeToken",fs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Te(e.idToken,"internal-error"),Te(typeof e.idToken<"u","internal-error"),Te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Te(e.length!==0,"internal-error");const n=fE(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await q2(e,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new mo;return s&&(Te(typeof s=="string","internal-error",{appName:e}),f.refreshToken=s),o&&(Te(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),u&&(Te(typeof u=="number","internal-error",{appName:e}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mo,this.toJSON())}_performRefresh(){return fr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(r,e){Te(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class ii{constructor({uid:e,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new B2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Wm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await au(this,this.stsTokenManager.getToken(this.auth,e));return Te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return L2(this,e)}reload(){return j2(this)}_assign(e){this!==e&&(Te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ii({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await wh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nn(this.auth.app))return Promise.reject(gr(this.auth));const e=await this.getIdToken();return await au(this,P2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,o=n.email??void 0,u=n.phoneNumber??void 0,f=n.photoURL??void 0,m=n.tenantId??void 0,g=n._redirectEventId??void 0,p=n.createdAt??void 0,E=n.lastLoginAt??void 0,{uid:A,emailVerified:w,isAnonymous:L,providerData:q,stsTokenManager:Y}=n;Te(A&&Y,e,"internal-error");const G=mo.fromJSON(this.name,Y);Te(typeof A=="string",e,"internal-error"),Zr(s,e.name),Zr(o,e.name),Te(typeof w=="boolean",e,"internal-error"),Te(typeof L=="boolean",e,"internal-error"),Zr(u,e.name),Zr(f,e.name),Zr(m,e.name),Zr(g,e.name),Zr(p,e.name),Zr(E,e.name);const Q=new ii({uid:A,auth:e,email:o,emailVerified:w,displayName:s,isAnonymous:L,photoURL:f,phoneNumber:u,tenantId:m,stsTokenManager:G,createdAt:p,lastLoginAt:E});return q&&Array.isArray(q)&&(Q.providerData=q.map(se=>({...se}))),g&&(Q._redirectEventId=g),Q}static async _fromIdTokenResponse(e,n,s=!1){const o=new mo;o.updateFromServerResponse(n);const u=new ii({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await wh(u),u}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];Te(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?v0(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!u?.length,m=new mo;m.updateFromIdToken(s);const g=new ii({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:f}),p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Wm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!u?.length};return Object.assign(g,p),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE=new Map;function dr(r){vr(r instanceof Function,"Expected a class definition");let e=dE.get(r);return e?(vr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,dE.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}E0.type="NONE";const mE=E0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(r,e,n){return`firebase:${r}:${e}:${n}`}class po{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=ch(this.userKey,o.apiKey,u),this.fullPersistenceKey=ch("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ah(this.auth,{idToken:e}).catch(()=>{});return n?ii._fromGetAccountInfoResponse(this.auth,n,e):null}return ii._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new po(dr(mE),e,s);const o=(await Promise.all(n.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let u=o[0]||dr(mE);const f=ch(s,e.config.apiKey,e.name);let m=null;for(const p of n)try{const E=await p._get(f);if(E){let A;if(typeof E=="string"){const w=await Ah(e,{idToken:E}).catch(()=>{});if(!w)break;A=await ii._fromGetAccountInfoResponse(e,w,E)}else A=ii._fromJSON(e,E);p!==u&&(m=A),u=p;break}}catch{}const g=o.filter(p=>p._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new po(u,e,s):(u=g[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async p=>{if(p!==u)try{await p._remove(f)}catch{}})),new po(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(w0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(T0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(R0(e))return"Blackberry";if(I0(e))return"Webos";if(S0(e))return"Safari";if((e.includes("chrome/")||A0(e))&&!e.includes("edge/"))return"Chrome";if(b0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function T0(r=sn()){return/firefox\//i.test(r)}function S0(r=sn()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function A0(r=sn()){return/crios\//i.test(r)}function w0(r=sn()){return/iemobile/i.test(r)}function b0(r=sn()){return/android/i.test(r)}function R0(r=sn()){return/blackberry/i.test(r)}function I0(r=sn()){return/webos/i.test(r)}function kp(r=sn()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function F2(r=sn()){return kp(r)&&!!window.navigator?.standalone}function G2(){return aI()&&document.documentMode===10}function C0(r=sn()){return kp(r)||b0(r)||I0(r)||R0(r)||/windows phone/i.test(r)||w0(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(r,e=[]){let n;switch(r){case"Browser":n=pE(sn());break;case"Worker":n=`${pE(sn())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${No}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((f,m)=>{try{const g=e(u);f(g)}catch(g){m(g)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K2(r,e={}){return ds(r,"GET","/v2/passwordPolicy",fs(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q2=6;class Y2{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Q2,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gE(this),this.idTokenSubscription=new gE(this),this.beforeStateQueue=new $2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dr(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await po.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ah(this,{idToken:e}),s=await ii._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Nn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(f,f))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,f=s?._redirectEventId,m=await this.tryRedirectSignIn(e);(!u||u===f)&&m?.user&&(s=m.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wh(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=C2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Nn(this.app))return Promise.reject(gr(this));const n=e?Lt(e):null;return n&&Te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Nn(this.app)?Promise.reject(gr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Nn(this.app)?Promise.reject(gr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await K2(this),n=new Y2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ma("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await H2(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dr(e)||this._popupRedirectResolver;Te(n,this,"argument-error"),this.redirectPersistenceManager=await po.create(this,[dr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Te(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const g=e.addObserver(n,s,o);return()=>{f=!0,g()}}else{const g=e.addObserver(n);return()=>{f=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=D0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Nn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&w2(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ms(r){return Lt(r)}class gE{constructor(e){this.auth=e,this.observer=null,this.addObserver=dI(n=>this.observer=n)}get next(){return Te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function W2(r){Gh=r}function N0(r){return Gh.loadJS(r)}function Z2(){return Gh.recaptchaEnterpriseScript}function J2(){return Gh.gapiScript}function eC(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class tC{constructor(){this.enterprise=new nC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class nC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const iC="recaptcha-enterprise",O0="NO_RECAPTCHA";class rC{constructor(e){this.type=iC,this.auth=ms(e)}async verify(e="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{V2(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const p=new k2(g);return u.tenantId==null?u._agentRecaptchaConfig=p:u._tenantRecaptchaConfigs[u.tenantId]=p,f(p.siteKey)}}).catch(g=>{m(g)})})}function o(u,f,m){const g=window.grecaptcha;hE(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(p=>{f(p)}).catch(()=>{f(O0)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new tC().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(m=>{if(!n&&hE(window.grecaptcha))o(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let g=Z2();g.length!==0&&(g+=m),N0(g).then(()=>{o(m,u,f)}).catch(p=>{f(p)})}}).catch(m=>{f(m)})})}}async function yE(r,e,n,s=!1,o=!1){const u=new rC(r);let f;if(o)f=O0;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const m={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,p=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:p,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Zm(r,e,n,s,o){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await yE(r,e,n,n==="getOobCode");return s(r,u)}else return s(r,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await yE(r,e,n,n==="getOobCode");return s(r,f)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(r,e){const n=Do(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(ss(u,e??{}))return o;$n(o,"already-initialized")}return n.initialize({options:e})}function aC(r,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(dr);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e?.popupRedirectResolver)}function oC(r,e,n){const s=ms(r);Te(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=x0(e),{host:f,port:m}=lC(e),g=m===null?"":`:${m}`,p={url:`${u}//${f}${g}/`},E=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Te(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Te(ss(p,s.config.emulator)&&ss(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=p,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,Co(f)?(s0(`${u}//${f}${g}`),a0("Auth",!0)):uC()}function x0(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function lC(r){const e=x0(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:_E(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:_E(f)}}}function _E(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function uC(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fr("not implemented")}_getIdTokenResponse(e){return fr("not implemented")}_linkToIdToken(e,n){return fr("not implemented")}_getReauthenticationResolver(e){return fr("not implemented")}}async function cC(r,e){return ds(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hC(r,e){return Tu(r,"POST","/v1/accounts:signInWithPassword",fs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fC(r,e){return Tu(r,"POST","/v1/accounts:signInWithEmailLink",fs(r,e))}async function dC(r,e){return Tu(r,"POST","/v1/accounts:signInWithEmailLink",fs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou extends Vp{constructor(e,n,s,o=null){super("password",s),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new ou(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ou(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zm(e,n,"signInWithPassword",hC);case"emailLink":return fC(e,{email:this._email,oobCode:this._password});default:$n(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zm(e,s,"signUpPassword",cC);case"emailLink":return dC(e,{idToken:n,email:this._email,oobCode:this._password});default:$n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(r,e){return Tu(r,"POST","/v1/accounts:signInWithIdp",fs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC="http://localhost";class sa extends Vp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new sa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=n;if(!s||!o)return null;const f=new sa(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(e){const n=this.buildRequest();return go(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,go(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,go(e,n)}buildRequest(){const e={requestUri:mC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vu(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gC(r){const e=$l(Kl(r)).link,n=e?$l(Kl(e)).deep_link_id:null,s=$l(Kl(r)).deep_link_id;return(s?$l(Kl(s)).link:null)||s||n||e||r}class Pp{constructor(e){const n=$l(Kl(e)),s=n.apiKey??null,o=n.oobCode??null,u=pC(n.mode??null);Te(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=gC(e);try{return new Pp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this.providerId=Oo.PROVIDER_ID}static credential(e,n){return ou._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Pp.parseLink(n);return Te(s,"argument-error"),ou._fromEmailAndCode(e,s.code,s.tenantId)}}Oo.PROVIDER_ID="password";Oo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Oo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su extends Lp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Su{constructor(){super("facebook.com")}static credential(e){return sa._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";cr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends Su{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return sa._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return hr.credential(n,s)}catch{return null}}}hr.GOOGLE_SIGN_IN_METHOD="google.com";hr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends Su{constructor(){super("github.com")}static credential(e){return sa._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jr.credential(e.oauthAccessToken)}catch{return null}}}Jr.GITHUB_SIGN_IN_METHOD="github.com";Jr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends Su{constructor(){super("twitter.com")}static credential(e,n){return sa._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return es.credentialFromTaggedObject(e)}static credentialFromError(e){return es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return es.credential(n,s)}catch{return null}}}es.TWITTER_SIGN_IN_METHOD="twitter.com";es.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yC(r,e){return Tu(r,"POST","/v1/accounts:signUp",fs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const u=await ii._fromIdTokenResponse(e,s,o),f=vE(s);return new aa({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=vE(s);return new aa({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function vE(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh extends _n{constructor(e,n,s,o){super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,bh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new bh(e,n,s,o)}}function M0(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?bh._fromErrorAndOperation(r,u,e,s):u})}async function _C(r,e,n=!1){const s=await au(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return aa._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vC(r,e,n=!1){const{auth:s}=r;if(Nn(s.app))return Promise.reject(gr(s));const o="reauthenticate";try{const u=await au(r,M0(s,o,e,r),n);Te(u.idToken,s,"internal-error");const f=Mp(u.idToken);Te(f,s,"internal-error");const{sub:m}=f;return Te(r.uid===m,s,"user-mismatch"),aa._forOperation(r,o,u)}catch(u){throw u?.code==="auth/user-not-found"&&$n(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k0(r,e,n=!1){if(Nn(r.app))return Promise.reject(gr(r));const s="signIn",o=await M0(r,s,e),u=await aa._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}async function EC(r,e){return k0(ms(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V0(r){const e=ms(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function TC(r,e,n){if(Nn(r.app))return Promise.reject(gr(r));const s=ms(r),f=await Zm(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",yC).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&V0(r),g}),m=await aa._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(m.user),m}function SC(r,e,n){return Nn(r.app)?Promise.reject(gr(r)):EC(Lt(r),Oo.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&V0(r),s})}function AC(r,e,n,s){return Lt(r).onIdTokenChanged(e,n,s)}function wC(r,e,n){return Lt(r).beforeAuthStateChanged(e,n)}function bC(r,e,n,s){return Lt(r).onAuthStateChanged(e,n,s)}function RC(r){return Lt(r).signOut()}const Rh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Rh,"1"),this.storage.removeItem(Rh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=1e3,CC=10;class L0 extends P0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=C0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((f,m,g)=>{this.notifyListeners(f,g)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);G2()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,CC):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},IC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}L0.type="LOCAL";const DC=L0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0 extends P0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}U0.type="SESSION";const B0=U0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new $h(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!f?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async p=>p(n.origin,u)),g=await NC(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$h.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,g)=>{const p=Up("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(A){const w=A;if(w.data.eventId===p)switch(w.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(w.data.response);break;default:clearTimeout(E),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:p,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(){return window}function xC(r){Ri().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(){return typeof Ri().WorkerGlobalScope<"u"&&typeof Ri().importScripts=="function"}async function MC(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kC(){return navigator?.serviceWorker?.controller||null}function VC(){return j0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0="firebaseLocalStorageDb",PC=1,Ih="firebaseLocalStorage",q0="fbase_key";class Au{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Kh(r,e){return r.transaction([Ih],e?"readwrite":"readonly").objectStore(Ih)}function LC(){const r=indexedDB.deleteDatabase(z0);return new Au(r).toPromise()}function Jm(){const r=indexedDB.open(z0,PC);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Ih,{keyPath:q0})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Ih)?e(s):(s.close(),await LC(),e(await Jm()))})})}async function EE(r,e,n){const s=Kh(r,!0).put({[q0]:e,value:n});return new Au(s).toPromise()}async function UC(r,e){const n=Kh(r,!1).get(e),s=await new Au(n).toPromise();return s===void 0?null:s.value}function TE(r,e){const n=Kh(r,!0).delete(e);return new Au(n).toPromise()}const BC=800,jC=3;class H0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>jC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return j0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$h._getInstance(VC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await MC(),!this.activeServiceWorker)return;this.sender=new OC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jm();return await EE(e,Rh,"1"),await TE(e,Rh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>EE(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>UC(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>TE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Kh(o,!1).getAll();return new Au(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),BC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}H0.type="LOCAL";const zC=H0;new Eu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(r,e){return e?dr(e):(Te(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp extends Vp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return go(e,this._buildIdpRequest())}_linkToIdToken(e,n){return go(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return go(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qC(r){return k0(r.auth,new Bp(r),r.bypassAuthState)}function HC(r){const{auth:e,user:n}=r;return Te(n,e,"internal-error"),vC(n,new Bp(r),r.bypassAuthState)}async function FC(r){const{auth:e,user:n}=r;return Te(n,e,"internal-error"),_C(n,new Bp(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e,n,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=e;if(f){this.reject(f);return}const g={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qC;case"linkViaPopup":case"linkViaRedirect":return FC;case"reauthViaPopup":case"reauthViaRedirect":return HC;default:$n(this.auth,"internal-error")}}resolve(e){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC=new Eu(2e3,1e4);async function SE(r,e,n){if(Nn(r.app))return Promise.reject(si(r,"operation-not-supported-in-this-environment"));const s=ms(r);b2(r,e,Lp);const o=F0(s,n);return new ta(s,"signInViaPopup",e,o).executeNotNull()}class ta extends G0{constructor(e,n,s,o,u){super(e,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,ta.currentPopupAction&&ta.currentPopupAction.cancel(),ta.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Te(e,this.auth,"internal-error"),e}async onExecution(){vr(this.filter.length===1,"Popup operations only handle one event");const e=Up();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(si(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(si(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ta.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(si(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,GC.get())};e()}}ta.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C="pendingRedirect",hh=new Map;class KC extends G0{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=hh.get(this.auth._key());if(!e){try{const s=await QC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}hh.set(this.auth._key(),e)}return this.bypassAuthState||hh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QC(r,e){const n=WC(e),s=XC(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function YC(r,e){hh.set(r._key(),e)}function XC(r){return dr(r._redirectPersistence)}function WC(r){return ch($C,r.config.apiKey,r.name)}async function ZC(r,e,n=!1){if(Nn(r.app))return Promise.reject(gr(r));const s=ms(r),o=F0(s,e),f=await new KC(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,e)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC=600*1e3;class eD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!$0(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(si(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JC&&this.cachedEventUids.clear(),this.cachedEventUids.has(AE(e))}saveEventToCache(e){this.cachedEventUids.add(AE(e)),this.lastProcessedEventTime=Date.now()}}function AE(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function $0({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function tD(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $0(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nD(r,e={}){return ds(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rD=/^https?/;async function sD(r){if(r.config.emulator)return;const{authorizedDomains:e}=await nD(r);for(const n of e)try{if(aD(n))return}catch{}$n(r,"unauthorized-domain")}function aD(r){const e=Xm(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!rD.test(n))return!1;if(iD.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oD=new Eu(3e4,6e4);function wE(){const r=Ri().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function lD(r){return new Promise((e,n)=>{function s(){wE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wE(),n(si(r,"network-request-failed"))},timeout:oD.get()})}if(Ri().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Ri().gapi?.load)s();else{const o=eC("iframefcb");return Ri()[o]=()=>{gapi.load?s():n(si(r,"network-request-failed"))},N0(`${J2()}?onload=${o}`).catch(u=>n(u))}}).catch(e=>{throw fh=null,e})}let fh=null;function uD(r){return fh=fh||lD(r),fh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cD=new Eu(5e3,15e3),hD="__/auth/iframe",fD="emulator/auth/iframe",dD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pD(r){const e=r.config;Te(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?xp(e,fD):`https://${r.config.authDomain}/${hD}`,s={apiKey:e.apiKey,appName:r.name,v:No},o=mD.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${vu(s).slice(1)}`}async function gD(r){const e=await uD(r),n=Ri().gapi;return Te(n,r,"internal-error"),e.open({where:document.body,url:pD(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dD,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=si(r,"network-request-failed"),m=Ri().setTimeout(()=>{u(f)},cD.get());function g(){Ri().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_D=500,vD=600,ED="_blank",TD="http://localhost";class bE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function SD(r,e,n,s=_D,o=vD){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g={...yD,width:s.toString(),height:o.toString(),top:u,left:f},p=sn().toLowerCase();n&&(m=A0(p)?ED:n),T0(p)&&(e=e||TD,g.scrollbars="yes");const E=Object.entries(g).reduce((w,[L,q])=>`${w}${L}=${q},`,"");if(F2(p)&&m!=="_self")return AD(e||"",m),new bE(null);const A=window.open(e||"",m,E);Te(A,r,"popup-blocked");try{A.focus()}catch{}return new bE(A)}function AD(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD="__/auth/handler",bD="emulator/auth/handler",RD=encodeURIComponent("fac");async function RE(r,e,n,s,o,u){Te(r.config.authDomain,r,"auth-domain-config-required"),Te(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:No,eventId:o};if(e instanceof Lp){e.setDefaultLanguage(r.languageCode),f.providerId=e.providerId||"",fI(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,A]of Object.entries({}))f[E]=A}if(e instanceof Su){const E=e.getScopes().filter(A=>A!=="");E.length>0&&(f.scopes=E.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const g=await r._getAppCheckToken(),p=g?`#${RD}=${encodeURIComponent(g)}`:"";return`${ID(r)}?${vu(m).slice(1)}${p}`}function ID({config:r}){return r.emulator?xp(r,bD):`https://${r.authDomain}/${wD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm="webStorageSupport";class CD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=B0,this._completeRedirectFn=ZC,this._overrideRedirectResult=YC}async _openPopup(e,n,s,o){vr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const u=await RE(e,n,s,Xm(),o);return SD(e,u,Up())}async _openRedirect(e,n,s,o){await this._originValidation(e);const u=await RE(e,n,s,Xm(),o);return xC(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(vr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await gD(e),s=new eD(e);return n.register("authEvent",o=>(Te(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nm,{type:Nm},o=>{const u=o?.[0]?.[Nm];u!==void 0&&n(!!u),$n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return C0()||S0()||kp()}}const DD=CD;var IE="@firebase/auth",CE="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OD(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xD(r){Mi(new oi("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;Te(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:D0(r)},p=new X2(s,o,u,g);return aC(p,n),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Mi(new oi("auth-internal",e=>{const n=ms(e.getProvider("auth").getImmediate());return(s=>new ND(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gn(IE,CE,OD(r)),Gn(IE,CE,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD=300,kD=r0("authIdTokenMaxAge")||MD;let DE=null;const VD=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>kD)return;const o=n?.token;DE!==o&&(DE=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function PD(r=Dp()){const e=Do(r,"auth");if(e.isInitialized())return e.getImmediate();const n=sC(r,{popupRedirectResolver:DD,persistence:[zC,DC,B0]}),s=r0("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=VD(u.toString());wC(n,f,()=>f(n.currentUser)),AC(n,m=>f(m))}}const o=n0("auth");return o&&oC(n,`http://${o}`),n}function LD(){return document.getElementsByTagName("head")?.[0]??document}W2({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=si("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",LD().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xD("Browser");var UD="firebase",BD="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gn(UD,BD,"app");var NE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var is,K0;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,R){function I(){}I.prototype=R.prototype,x.D=R.prototype,x.prototype=new I,x.prototype.constructor=x,x.C=function(O,M,V){for(var b=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)b[Ie-2]=arguments[Ie];return R.prototype[M].apply(O,b)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,R,I){I||(I=0);var O=Array(16);if(typeof R=="string")for(var M=0;16>M;++M)O[M]=R.charCodeAt(I++)|R.charCodeAt(I++)<<8|R.charCodeAt(I++)<<16|R.charCodeAt(I++)<<24;else for(M=0;16>M;++M)O[M]=R[I++]|R[I++]<<8|R[I++]<<16|R[I++]<<24;R=x.g[0],I=x.g[1],M=x.g[2];var V=x.g[3],b=R+(V^I&(M^V))+O[0]+3614090360&4294967295;R=I+(b<<7&4294967295|b>>>25),b=V+(M^R&(I^M))+O[1]+3905402710&4294967295,V=R+(b<<12&4294967295|b>>>20),b=M+(I^V&(R^I))+O[2]+606105819&4294967295,M=V+(b<<17&4294967295|b>>>15),b=I+(R^M&(V^R))+O[3]+3250441966&4294967295,I=M+(b<<22&4294967295|b>>>10),b=R+(V^I&(M^V))+O[4]+4118548399&4294967295,R=I+(b<<7&4294967295|b>>>25),b=V+(M^R&(I^M))+O[5]+1200080426&4294967295,V=R+(b<<12&4294967295|b>>>20),b=M+(I^V&(R^I))+O[6]+2821735955&4294967295,M=V+(b<<17&4294967295|b>>>15),b=I+(R^M&(V^R))+O[7]+4249261313&4294967295,I=M+(b<<22&4294967295|b>>>10),b=R+(V^I&(M^V))+O[8]+1770035416&4294967295,R=I+(b<<7&4294967295|b>>>25),b=V+(M^R&(I^M))+O[9]+2336552879&4294967295,V=R+(b<<12&4294967295|b>>>20),b=M+(I^V&(R^I))+O[10]+4294925233&4294967295,M=V+(b<<17&4294967295|b>>>15),b=I+(R^M&(V^R))+O[11]+2304563134&4294967295,I=M+(b<<22&4294967295|b>>>10),b=R+(V^I&(M^V))+O[12]+1804603682&4294967295,R=I+(b<<7&4294967295|b>>>25),b=V+(M^R&(I^M))+O[13]+4254626195&4294967295,V=R+(b<<12&4294967295|b>>>20),b=M+(I^V&(R^I))+O[14]+2792965006&4294967295,M=V+(b<<17&4294967295|b>>>15),b=I+(R^M&(V^R))+O[15]+1236535329&4294967295,I=M+(b<<22&4294967295|b>>>10),b=R+(M^V&(I^M))+O[1]+4129170786&4294967295,R=I+(b<<5&4294967295|b>>>27),b=V+(I^M&(R^I))+O[6]+3225465664&4294967295,V=R+(b<<9&4294967295|b>>>23),b=M+(R^I&(V^R))+O[11]+643717713&4294967295,M=V+(b<<14&4294967295|b>>>18),b=I+(V^R&(M^V))+O[0]+3921069994&4294967295,I=M+(b<<20&4294967295|b>>>12),b=R+(M^V&(I^M))+O[5]+3593408605&4294967295,R=I+(b<<5&4294967295|b>>>27),b=V+(I^M&(R^I))+O[10]+38016083&4294967295,V=R+(b<<9&4294967295|b>>>23),b=M+(R^I&(V^R))+O[15]+3634488961&4294967295,M=V+(b<<14&4294967295|b>>>18),b=I+(V^R&(M^V))+O[4]+3889429448&4294967295,I=M+(b<<20&4294967295|b>>>12),b=R+(M^V&(I^M))+O[9]+568446438&4294967295,R=I+(b<<5&4294967295|b>>>27),b=V+(I^M&(R^I))+O[14]+3275163606&4294967295,V=R+(b<<9&4294967295|b>>>23),b=M+(R^I&(V^R))+O[3]+4107603335&4294967295,M=V+(b<<14&4294967295|b>>>18),b=I+(V^R&(M^V))+O[8]+1163531501&4294967295,I=M+(b<<20&4294967295|b>>>12),b=R+(M^V&(I^M))+O[13]+2850285829&4294967295,R=I+(b<<5&4294967295|b>>>27),b=V+(I^M&(R^I))+O[2]+4243563512&4294967295,V=R+(b<<9&4294967295|b>>>23),b=M+(R^I&(V^R))+O[7]+1735328473&4294967295,M=V+(b<<14&4294967295|b>>>18),b=I+(V^R&(M^V))+O[12]+2368359562&4294967295,I=M+(b<<20&4294967295|b>>>12),b=R+(I^M^V)+O[5]+4294588738&4294967295,R=I+(b<<4&4294967295|b>>>28),b=V+(R^I^M)+O[8]+2272392833&4294967295,V=R+(b<<11&4294967295|b>>>21),b=M+(V^R^I)+O[11]+1839030562&4294967295,M=V+(b<<16&4294967295|b>>>16),b=I+(M^V^R)+O[14]+4259657740&4294967295,I=M+(b<<23&4294967295|b>>>9),b=R+(I^M^V)+O[1]+2763975236&4294967295,R=I+(b<<4&4294967295|b>>>28),b=V+(R^I^M)+O[4]+1272893353&4294967295,V=R+(b<<11&4294967295|b>>>21),b=M+(V^R^I)+O[7]+4139469664&4294967295,M=V+(b<<16&4294967295|b>>>16),b=I+(M^V^R)+O[10]+3200236656&4294967295,I=M+(b<<23&4294967295|b>>>9),b=R+(I^M^V)+O[13]+681279174&4294967295,R=I+(b<<4&4294967295|b>>>28),b=V+(R^I^M)+O[0]+3936430074&4294967295,V=R+(b<<11&4294967295|b>>>21),b=M+(V^R^I)+O[3]+3572445317&4294967295,M=V+(b<<16&4294967295|b>>>16),b=I+(M^V^R)+O[6]+76029189&4294967295,I=M+(b<<23&4294967295|b>>>9),b=R+(I^M^V)+O[9]+3654602809&4294967295,R=I+(b<<4&4294967295|b>>>28),b=V+(R^I^M)+O[12]+3873151461&4294967295,V=R+(b<<11&4294967295|b>>>21),b=M+(V^R^I)+O[15]+530742520&4294967295,M=V+(b<<16&4294967295|b>>>16),b=I+(M^V^R)+O[2]+3299628645&4294967295,I=M+(b<<23&4294967295|b>>>9),b=R+(M^(I|~V))+O[0]+4096336452&4294967295,R=I+(b<<6&4294967295|b>>>26),b=V+(I^(R|~M))+O[7]+1126891415&4294967295,V=R+(b<<10&4294967295|b>>>22),b=M+(R^(V|~I))+O[14]+2878612391&4294967295,M=V+(b<<15&4294967295|b>>>17),b=I+(V^(M|~R))+O[5]+4237533241&4294967295,I=M+(b<<21&4294967295|b>>>11),b=R+(M^(I|~V))+O[12]+1700485571&4294967295,R=I+(b<<6&4294967295|b>>>26),b=V+(I^(R|~M))+O[3]+2399980690&4294967295,V=R+(b<<10&4294967295|b>>>22),b=M+(R^(V|~I))+O[10]+4293915773&4294967295,M=V+(b<<15&4294967295|b>>>17),b=I+(V^(M|~R))+O[1]+2240044497&4294967295,I=M+(b<<21&4294967295|b>>>11),b=R+(M^(I|~V))+O[8]+1873313359&4294967295,R=I+(b<<6&4294967295|b>>>26),b=V+(I^(R|~M))+O[15]+4264355552&4294967295,V=R+(b<<10&4294967295|b>>>22),b=M+(R^(V|~I))+O[6]+2734768916&4294967295,M=V+(b<<15&4294967295|b>>>17),b=I+(V^(M|~R))+O[13]+1309151649&4294967295,I=M+(b<<21&4294967295|b>>>11),b=R+(M^(I|~V))+O[4]+4149444226&4294967295,R=I+(b<<6&4294967295|b>>>26),b=V+(I^(R|~M))+O[11]+3174756917&4294967295,V=R+(b<<10&4294967295|b>>>22),b=M+(R^(V|~I))+O[2]+718787259&4294967295,M=V+(b<<15&4294967295|b>>>17),b=I+(V^(M|~R))+O[9]+3951481745&4294967295,x.g[0]=x.g[0]+R&4294967295,x.g[1]=x.g[1]+(M+(b<<21&4294967295|b>>>11))&4294967295,x.g[2]=x.g[2]+M&4294967295,x.g[3]=x.g[3]+V&4294967295}s.prototype.u=function(x,R){R===void 0&&(R=x.length);for(var I=R-this.blockSize,O=this.B,M=this.h,V=0;V<R;){if(M==0)for(;V<=I;)o(this,x,V),V+=this.blockSize;if(typeof x=="string"){for(;V<R;)if(O[M++]=x.charCodeAt(V++),M==this.blockSize){o(this,O),M=0;break}}else for(;V<R;)if(O[M++]=x[V++],M==this.blockSize){o(this,O),M=0;break}}this.h=M,this.o+=R},s.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var R=1;R<x.length-8;++R)x[R]=0;var I=8*this.o;for(R=x.length-8;R<x.length;++R)x[R]=I&255,I/=256;for(this.u(x),x=Array(16),R=I=0;4>R;++R)for(var O=0;32>O;O+=8)x[I++]=this.g[R]>>>O&255;return x};function u(x,R){var I=m;return Object.prototype.hasOwnProperty.call(I,x)?I[x]:I[x]=R(x)}function f(x,R){this.h=R;for(var I=[],O=!0,M=x.length-1;0<=M;M--){var V=x[M]|0;O&&V==R||(I[M]=V,O=!1)}this.g=I}var m={};function g(x){return-128<=x&&128>x?u(x,function(R){return new f([R|0],0>R?-1:0)}):new f([x|0],0>x?-1:0)}function p(x){if(isNaN(x)||!isFinite(x))return A;if(0>x)return G(p(-x));for(var R=[],I=1,O=0;x>=I;O++)R[O]=x/I|0,I*=4294967296;return new f(R,0)}function E(x,R){if(x.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(x.charAt(0)=="-")return G(E(x.substring(1),R));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=p(Math.pow(R,8)),O=A,M=0;M<x.length;M+=8){var V=Math.min(8,x.length-M),b=parseInt(x.substring(M,M+V),R);8>V?(V=p(Math.pow(R,V)),O=O.j(V).add(p(b))):(O=O.j(I),O=O.add(p(b)))}return O}var A=g(0),w=g(1),L=g(16777216);r=f.prototype,r.m=function(){if(Y(this))return-G(this).m();for(var x=0,R=1,I=0;I<this.g.length;I++){var O=this.i(I);x+=(0<=O?O:4294967296+O)*R,R*=4294967296}return x},r.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(q(this))return"0";if(Y(this))return"-"+G(this).toString(x);for(var R=p(Math.pow(x,6)),I=this,O="";;){var M=pe(I,R).g;I=Q(I,M.j(R));var V=((0<I.g.length?I.g[0]:I.h)>>>0).toString(x);if(I=M,q(I))return V+O;for(;6>V.length;)V="0"+V;O=V+O}},r.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function q(x){if(x.h!=0)return!1;for(var R=0;R<x.g.length;R++)if(x.g[R]!=0)return!1;return!0}function Y(x){return x.h==-1}r.l=function(x){return x=Q(this,x),Y(x)?-1:q(x)?0:1};function G(x){for(var R=x.g.length,I=[],O=0;O<R;O++)I[O]=~x.g[O];return new f(I,~x.h).add(w)}r.abs=function(){return Y(this)?G(this):this},r.add=function(x){for(var R=Math.max(this.g.length,x.g.length),I=[],O=0,M=0;M<=R;M++){var V=O+(this.i(M)&65535)+(x.i(M)&65535),b=(V>>>16)+(this.i(M)>>>16)+(x.i(M)>>>16);O=b>>>16,V&=65535,b&=65535,I[M]=b<<16|V}return new f(I,I[I.length-1]&-2147483648?-1:0)};function Q(x,R){return x.add(G(R))}r.j=function(x){if(q(this)||q(x))return A;if(Y(this))return Y(x)?G(this).j(G(x)):G(G(this).j(x));if(Y(x))return G(this.j(G(x)));if(0>this.l(L)&&0>x.l(L))return p(this.m()*x.m());for(var R=this.g.length+x.g.length,I=[],O=0;O<2*R;O++)I[O]=0;for(O=0;O<this.g.length;O++)for(var M=0;M<x.g.length;M++){var V=this.i(O)>>>16,b=this.i(O)&65535,Ie=x.i(M)>>>16,Ce=x.i(M)&65535;I[2*O+2*M]+=b*Ce,se(I,2*O+2*M),I[2*O+2*M+1]+=V*Ce,se(I,2*O+2*M+1),I[2*O+2*M+1]+=b*Ie,se(I,2*O+2*M+1),I[2*O+2*M+2]+=V*Ie,se(I,2*O+2*M+2)}for(O=0;O<R;O++)I[O]=I[2*O+1]<<16|I[2*O];for(O=R;O<2*R;O++)I[O]=0;return new f(I,0)};function se(x,R){for(;(x[R]&65535)!=x[R];)x[R+1]+=x[R]>>>16,x[R]&=65535,R++}function ie(x,R){this.g=x,this.h=R}function pe(x,R){if(q(R))throw Error("division by zero");if(q(x))return new ie(A,A);if(Y(x))return R=pe(G(x),R),new ie(G(R.g),G(R.h));if(Y(R))return R=pe(x,G(R)),new ie(G(R.g),R.h);if(30<x.g.length){if(Y(x)||Y(R))throw Error("slowDivide_ only works with positive integers.");for(var I=w,O=R;0>=O.l(x);)I=ce(I),O=ce(O);var M=ye(I,1),V=ye(O,1);for(O=ye(O,2),I=ye(I,2);!q(O);){var b=V.add(O);0>=b.l(x)&&(M=M.add(I),V=b),O=ye(O,1),I=ye(I,1)}return R=Q(x,M.j(R)),new ie(M,R)}for(M=A;0<=x.l(R);){for(I=Math.max(1,Math.floor(x.m()/R.m())),O=Math.ceil(Math.log(I)/Math.LN2),O=48>=O?1:Math.pow(2,O-48),V=p(I),b=V.j(R);Y(b)||0<b.l(x);)I-=O,V=p(I),b=V.j(R);q(V)&&(V=w),M=M.add(V),x=Q(x,b)}return new ie(M,x)}r.A=function(x){return pe(this,x).h},r.and=function(x){for(var R=Math.max(this.g.length,x.g.length),I=[],O=0;O<R;O++)I[O]=this.i(O)&x.i(O);return new f(I,this.h&x.h)},r.or=function(x){for(var R=Math.max(this.g.length,x.g.length),I=[],O=0;O<R;O++)I[O]=this.i(O)|x.i(O);return new f(I,this.h|x.h)},r.xor=function(x){for(var R=Math.max(this.g.length,x.g.length),I=[],O=0;O<R;O++)I[O]=this.i(O)^x.i(O);return new f(I,this.h^x.h)};function ce(x){for(var R=x.g.length+1,I=[],O=0;O<R;O++)I[O]=x.i(O)<<1|x.i(O-1)>>>31;return new f(I,x.h)}function ye(x,R){var I=R>>5;R%=32;for(var O=x.g.length-I,M=[],V=0;V<O;V++)M[V]=0<R?x.i(V+I)>>>R|x.i(V+I+1)<<32-R:x.i(V+I);return new f(M,x.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,K0=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=p,f.fromString=E,is=f}).apply(typeof NE<"u"?NE:typeof self<"u"?self:typeof window<"u"?window:{});var th=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Q0,Ql,Y0,dh,ep,X0,W0,Z0;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,y,_){return c==Array.prototype||c==Object.prototype||(c[y]=_.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof th=="object"&&th];for(var y=0;y<c.length;++y){var _=c[y];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(c,y){if(y)e:{var _=s;c=c.split(".");for(var S=0;S<c.length-1;S++){var U=c[S];if(!(U in _))break e;_=_[U]}c=c[c.length-1],S=_[c],y=y(S),y!=S&&y!=null&&e(_,c,{configurable:!0,writable:!0,value:y})}}function u(c,y){c instanceof String&&(c+="");var _=0,S=!1,U={next:function(){if(!S&&_<c.length){var $=_++;return{value:y($,c[$]),done:!1}}return S=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(c){return c||function(){return u(this,function(y,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function g(c){var y=typeof c;return y=y!="object"?y:c?Array.isArray(c)?"array":y:"null",y=="array"||y=="object"&&typeof c.length=="number"}function p(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function E(c,y,_){return c.call.apply(c.bind,arguments)}function A(c,y,_){if(!c)throw Error();if(2<arguments.length){var S=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,S),c.apply(y,U)}}return function(){return c.apply(y,arguments)}}function w(c,y,_){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:A,w.apply(null,arguments)}function L(c,y){var _=Array.prototype.slice.call(arguments,1);return function(){var S=_.slice();return S.push.apply(S,arguments),c.apply(this,S)}}function q(c,y){function _(){}_.prototype=y.prototype,c.aa=y.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(S,U,$){for(var oe=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)oe[Be-2]=arguments[Be];return y.prototype[U].apply(S,oe)}}function Y(c){const y=c.length;if(0<y){const _=Array(y);for(let S=0;S<y;S++)_[S]=c[S];return _}return[]}function G(c,y){for(let _=1;_<arguments.length;_++){const S=arguments[_];if(g(S)){const U=c.length||0,$=S.length||0;c.length=U+$;for(let oe=0;oe<$;oe++)c[U+oe]=S[oe]}else c.push(S)}}class Q{constructor(y,_){this.i=y,this.j=_,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function se(c){return/^[\s\xa0]*$/.test(c)}function ie(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function pe(c){return pe[" "](c),c}pe[" "]=function(){};var ce=ie().indexOf("Gecko")!=-1&&!(ie().toLowerCase().indexOf("webkit")!=-1&&ie().indexOf("Edge")==-1)&&!(ie().indexOf("Trident")!=-1||ie().indexOf("MSIE")!=-1)&&ie().indexOf("Edge")==-1;function ye(c,y,_){for(const S in c)y.call(_,c[S],S,c)}function x(c,y){for(const _ in c)y.call(void 0,c[_],_,c)}function R(c){const y={};for(const _ in c)y[_]=c[_];return y}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(c,y){let _,S;for(let U=1;U<arguments.length;U++){S=arguments[U];for(_ in S)c[_]=S[_];for(let $=0;$<I.length;$++)_=I[$],Object.prototype.hasOwnProperty.call(S,_)&&(c[_]=S[_])}}function M(c){var y=1;c=c.split(":");const _=[];for(;0<y&&c.length;)_.push(c.shift()),y--;return c.length&&_.push(c.join(":")),_}function V(c){m.setTimeout(()=>{throw c},0)}function b(){var c=Ne;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class Ie{constructor(){this.h=this.g=null}add(y,_){const S=Ce.get();S.set(y,_),this.h?this.h.next=S:this.g=S,this.h=S}}var Ce=new Q(()=>new K,c=>c.reset());class K{constructor(){this.next=this.g=this.h=null}set(y,_){this.h=y,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let re,le=!1,Ne=new Ie,D=()=>{const c=m.Promise.resolve(void 0);re=()=>{c.then(Z)}};var Z=()=>{for(var c;c=b();){try{c.h.call(c.g)}catch(_){V(_)}var y=Ce;y.j(c),100>y.h&&(y.h++,c.next=y.g,y.g=c)}le=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ne(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}ne.prototype.h=function(){this.defaultPrevented=!0};var de=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};m.addEventListener("test",_,y),m.removeEventListener("test",_,y)}catch{}return c}();function be(c,y){if(ne.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,S=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget){if(ce){e:{try{pe(y.nodeName);var U=!0;break e}catch{}U=!1}U||(y=null)}}else _=="mouseover"?y=c.fromElement:_=="mouseout"&&(y=c.toElement);this.relatedTarget=y,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:ve[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&be.aa.h.call(this)}}q(be,ne);var ve={2:"touch",3:"pen",4:"mouse"};be.prototype.h=function(){be.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var _t="closure_listenable_"+(1e6*Math.random()|0),Ye=0;function vn(c,y,_,S,U){this.listener=c,this.proxy=null,this.src=y,this.type=_,this.capture=!!S,this.ha=U,this.key=++Ye,this.da=this.fa=!1}function Kn(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function En(c){this.src=c,this.g={},this.h=0}En.prototype.add=function(c,y,_,S,U){var $=c.toString();c=this.g[$],c||(c=this.g[$]=[],this.h++);var oe=Yn(c,y,S,U);return-1<oe?(y=c[oe],_||(y.fa=!1)):(y=new vn(y,this.src,$,!!S,U),y.fa=_,c.push(y)),y};function Qn(c,y){var _=y.type;if(_ in c.g){var S=c.g[_],U=Array.prototype.indexOf.call(S,y,void 0),$;($=0<=U)&&Array.prototype.splice.call(S,U,1),$&&(Kn(y),c.g[_].length==0&&(delete c.g[_],c.h--))}}function Yn(c,y,_,S){for(var U=0;U<c.length;++U){var $=c[U];if(!$.da&&$.listener==y&&$.capture==!!_&&$.ha==S)return U}return-1}var Xn="closure_lm_"+(1e6*Math.random()|0),Sr={};function ys(c,y,_,S,U){if(Array.isArray(y)){for(var $=0;$<y.length;$++)ys(c,y[$],_,S,U);return null}return _=Nu(_),c&&c[_t]?c.K(y,_,p(S)?!!S.capture:!1,U):an(c,y,_,!1,S,U)}function an(c,y,_,S,U,$){if(!y)throw Error("Invalid event type");var oe=p(U)?!!U.capture:!!U,Be=_a(c);if(Be||(c[Xn]=Be=new En(c)),_=Be.add(y,_,S,oe,$),_.proxy)return _;if(S=ya(),_.proxy=S,S.src=c,S.listener=_,c.addEventListener)de||(U=oe),U===void 0&&(U=!1),c.addEventListener(y.toString(),S,U);else if(c.attachEvent)c.attachEvent(_s(y.toString()),S);else if(c.addListener&&c.removeListener)c.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return _}function ya(){function c(_){return y.call(c.src,c.listener,_)}const y=pf;return c}function Xe(c,y,_,S,U){if(Array.isArray(y))for(var $=0;$<y.length;$++)Xe(c,y[$],_,S,U);else S=p(S)?!!S.capture:!!S,_=Nu(_),c&&c[_t]?(c=c.i,y=String(y).toString(),y in c.g&&($=c.g[y],_=Yn($,_,S,U),-1<_&&(Kn($[_]),Array.prototype.splice.call($,_,1),$.length==0&&(delete c.g[y],c.h--)))):c&&(c=_a(c))&&(y=c.g[y.toString()],c=-1,y&&(c=Yn(y,_,S,U)),(_=-1<c?y[c]:null)&&$e(_))}function $e(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[_t])Qn(y.i,c);else{var _=c.type,S=c.proxy;y.removeEventListener?y.removeEventListener(_,S,c.capture):y.detachEvent?y.detachEvent(_s(_),S):y.addListener&&y.removeListener&&y.removeListener(S),(_=_a(y))?(Qn(_,c),_.h==0&&(_.src=null,y[Xn]=null)):Kn(c)}}}function _s(c){return c in Sr?Sr[c]:Sr[c]="on"+c}function pf(c,y){if(c.da)c=!0;else{y=new be(y,this);var _=c.listener,S=c.ha||c.src;c.fa&&$e(c),c=_.call(S,y)}return c}function _a(c){return c=c[Xn],c instanceof En?c:null}var Po="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nu(c){return typeof c=="function"?c:(c[Po]||(c[Po]=function(y){return c.handleEvent(y)}),c[Po])}function pt(){ae.call(this),this.i=new En(this),this.M=this,this.F=null}q(pt,ae),pt.prototype[_t]=!0,pt.prototype.removeEventListener=function(c,y,_,S){Xe(this,c,y,_,S)};function We(c,y){var _,S=c.F;if(S)for(_=[];S;S=S.F)_.push(S);if(c=c.M,S=y.type||y,typeof y=="string")y=new ne(y,c);else if(y instanceof ne)y.target=y.target||c;else{var U=y;y=new ne(S,c),O(y,U)}if(U=!0,_)for(var $=_.length-1;0<=$;$--){var oe=y.g=_[$];U=Tn(oe,S,!0,y)&&U}if(oe=y.g=c,U=Tn(oe,S,!0,y)&&U,U=Tn(oe,S,!1,y)&&U,_)for($=0;$<_.length;$++)oe=y.g=_[$],U=Tn(oe,S,!1,y)&&U}pt.prototype.N=function(){if(pt.aa.N.call(this),this.i){var c=this.i,y;for(y in c.g){for(var _=c.g[y],S=0;S<_.length;S++)Kn(_[S]);delete c.g[y],c.h--}}this.F=null},pt.prototype.K=function(c,y,_,S){return this.i.add(String(c),y,!1,_,S)},pt.prototype.L=function(c,y,_,S){return this.i.add(String(c),y,!0,_,S)};function Tn(c,y,_,S){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();for(var U=!0,$=0;$<y.length;++$){var oe=y[$];if(oe&&!oe.da&&oe.capture==_){var Be=oe.listener,Ot=oe.ha||oe.src;oe.fa&&Qn(c.i,oe),U=Be.call(Ot,S)!==!1&&U}}return U&&!S.defaultPrevented}function Zt(c,y,_){if(typeof c=="function")_&&(c=w(c,_));else if(c&&typeof c.handleEvent=="function")c=w(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:m.setTimeout(c,y||0)}function Ou(c){c.g=Zt(()=>{c.g=null,c.i&&(c.i=!1,Ou(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class gf extends ae{constructor(y,_){super(),this.m=y,this.l=_,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:Ou(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vs(c){ae.call(this),this.h=c,this.g={}}q(vs,ae);var Es=[];function Ts(c){ye(c.g,function(y,_){this.g.hasOwnProperty(_)&&$e(y)},c),c.g={}}vs.prototype.N=function(){vs.aa.N.call(this),Ts(this)},vs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wn=m.JSON.stringify,va=m.JSON.parse,Ss=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function Lo(){}Lo.prototype.h=null;function Uo(c){return c.h||(c.h=c.i())}function Bo(){}var Ui={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bi(){ne.call(this,"d")}q(Bi,ne);function jo(){ne.call(this,"c")}q(jo,ne);var ui={},zo=null;function Ar(){return zo=zo||new pt}ui.La="serverreachability";function Ea(c){ne.call(this,ui.La,c)}q(Ea,ne);function wr(c){const y=Ar();We(y,new Ea(y))}ui.STAT_EVENT="statevent";function xu(c,y){ne.call(this,ui.STAT_EVENT,c),this.stat=y}q(xu,ne);function ut(c){const y=Ar();We(y,new xu(y,c))}ui.Ma="timingevent";function Nt(c,y){ne.call(this,ui.Ma,c),this.size=y}q(Nt,ne);function At(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},y)}function xn(){this.g=!0}xn.prototype.xa=function(){this.g=!1};function qo(c,y,_,S,U,$){c.info(function(){if(c.g)if($)for(var oe="",Be=$.split("&"),Ot=0;Ot<Be.length;Ot++){var je=Be[Ot].split("=");if(1<je.length){var Bt=je[0];je=je[1];var xt=Bt.split("_");oe=2<=xt.length&&xt[1]=="type"?oe+(Bt+"="+je+"&"):oe+(Bt+"=redacted&")}}else oe=null;else oe=$;return"XMLHTTP REQ ("+S+") [attempt "+U+"]: "+y+`
`+_+`
`+oe})}function yf(c,y,_,S,U,$,oe){c.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+U+"]: "+y+`
`+_+`
`+$+" "+oe})}function br(c,y,_,S){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+As(c,_)+(S?" "+S:"")})}function Mu(c,y){c.info(function(){return"TIMEOUT: "+y})}xn.prototype.info=function(){};function As(c,y){if(!c.g)return y;if(!y)return null;try{var _=JSON.parse(y);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var S=_[c];if(!(2>S.length)){var U=S[1];if(Array.isArray(U)&&!(1>U.length)){var $=U[0];if($!="noop"&&$!="stop"&&$!="close")for(var oe=1;oe<U.length;oe++)U[oe]=""}}}}return Wn(_)}catch{return y}}var Rr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ji={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ci;function hi(){}q(hi,Lo),hi.prototype.g=function(){return new XMLHttpRequest},hi.prototype.i=function(){return{}},ci=new hi;function on(c,y,_,S){this.j=c,this.i=y,this.l=_,this.R=S||1,this.U=new vs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vt}function vt(){this.i=null,this.g="",this.h=!1}var Ho={},Ta={};function Zn(c,y,_){c.L=1,c.v=Cs(Sn(y)),c.m=_,c.P=!0,zi(c,null)}function zi(c,y){c.F=Date.now(),ws(c),c.A=Sn(c.v);var _=c.A,S=c.R;Array.isArray(S)||(S=[String(S)]),Yo(_.i,"t",S),c.C=0,_=c.j.J,c.h=new vt,c.g=Yu(c.j,_?y:null,!c.m),0<c.O&&(c.M=new gf(w(c.Y,c,c.g),c.O)),y=c.U,_=c.g,S=c.ca;var U="readystatechange";Array.isArray(U)||(U&&(Es[0]=U.toString()),U=Es);for(var $=0;$<U.length;$++){var oe=ys(_,U[$],S||y.handleEvent,!1,y.h||y);if(!oe)break;y.g[oe.key]=oe}y=c.H?R(c.H):{},c.m?(c.u||(c.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,y)):(c.u="GET",c.g.ea(c.A,c.u,null,y)),wr(),qo(c.i,c.u,c.A,c.l,c.R,c.m)}on.prototype.ca=function(c){c=c.target;const y=this.M;y&&Pn(c)==3?y.j():this.Y(c)},on.prototype.Y=function(c){try{if(c==this.g)e:{const xt=Pn(this.g);var y=this.g.Ba();const Yi=this.g.Z();if(!(3>xt)&&(xt!=3||this.g&&(this.h.h||this.g.oa()||zu(this.g)))){this.J||xt!=4||y==7||(y==8||0>=Yi?wr(3):wr(2)),Ir(this);var _=this.g.Z();this.X=_;t:if(ku(this)){var S=zu(this.g);c="";var U=S.length,$=Pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ft(this),fi(this);var oe="";break t}this.h.i=new m.TextDecoder}for(y=0;y<U;y++)this.h.h=!0,c+=this.h.i.decode(S[y],{stream:!($&&y==U-1)});S.length=0,this.h.g+=c,this.C=0,oe=this.h.g}else oe=this.g.oa();if(this.o=_==200,yf(this.i,this.u,this.A,this.l,this.R,xt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,Ot=this.g;if((Be=Ot.g?Ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!se(Be)){var je=Be;break t}}je=null}if(_=je)br(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bs(this,_);else{this.o=!1,this.s=3,ut(12),Ft(this),fi(this);break e}}if(this.P){_=!0;let Gt;for(;!this.J&&this.C<oe.length;)if(Gt=Vu(this,oe),Gt==Ta){xt==4&&(this.s=4,ut(14),_=!1),br(this.i,this.l,null,"[Incomplete Response]");break}else if(Gt==Ho){this.s=4,ut(15),br(this.i,this.l,oe,"[Invalid Chunk]"),_=!1;break}else br(this.i,this.l,Gt,null),bs(this,Gt);if(ku(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),xt!=4||oe.length!=0||this.h.h||(this.s=1,ut(16),_=!1),this.o=this.o&&_,!_)br(this.i,this.l,oe,"[Invalid Chunked Response]"),Ft(this),fi(this);else if(0<oe.length&&!this.W){this.W=!0;var Bt=this.j;Bt.g==this&&Bt.ba&&!Bt.M&&(Bt.j.info("Great, no buffering proxy detected. Bytes received: "+oe.length),Ps(Bt),Bt.M=!0,ut(11))}}else br(this.i,this.l,oe,null),bs(this,oe);xt==4&&Ft(this),this.o&&!this.J&&(xt==4?$u(this.j,this):(this.o=!1,ws(this)))}else Sf(this.g),_==400&&0<oe.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),Ft(this),fi(this)}}}catch{}finally{}};function ku(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Vu(c,y){var _=c.C,S=y.indexOf(`
`,_);return S==-1?Ta:(_=Number(y.substring(_,S)),isNaN(_)?Ho:(S+=1,S+_>y.length?Ta:(y=y.slice(S,S+_),c.C=S+_,y)))}on.prototype.cancel=function(){this.J=!0,Ft(this)};function ws(c){c.S=Date.now()+c.I,Pu(c,c.I)}function Pu(c,y){if(c.B!=null)throw Error("WatchDog timer not null");c.B=At(w(c.ba,c),y)}function Ir(c){c.B&&(m.clearTimeout(c.B),c.B=null)}on.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Mu(this.i,this.A),this.L!=2&&(wr(),ut(17)),Ft(this),this.s=2,fi(this)):Pu(this,this.S-c)};function fi(c){c.j.G==0||c.J||$u(c.j,c)}function Ft(c){Ir(c);var y=c.M;y&&typeof y.ma=="function"&&y.ma(),c.M=null,Ts(c.U),c.g&&(y=c.g,c.g=null,y.abort(),y.ma())}function bs(c,y){try{var _=c.j;if(_.G!=0&&(_.g==c||Fo(_.h,c))){if(!c.K&&Fo(_.h,c)&&_.G==3){try{var S=_.Da.g.parse(y)}catch{S=null}if(Array.isArray(S)&&S.length==3){var U=S;if(U[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)Ma(_),Oa(_);else break e;el(_),ut(18)}}else _.za=U[1],0<_.za-_.T&&37500>U[2]&&_.F&&_.v==0&&!_.C&&(_.C=At(w(_.Za,_),6e3));if(1>=Aa(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Qi(_,11)}else if((c.K||_.g==c)&&Ma(_),!se(y))for(U=_.Da.g.parse(y),y=0;y<U.length;y++){let je=U[y];if(_.T=je[0],je=je[1],_.G==2)if(je[0]=="c"){_.K=je[1],_.ia=je[2];const Bt=je[3];Bt!=null&&(_.la=Bt,_.j.info("VER="+_.la));const xt=je[4];xt!=null&&(_.Aa=xt,_.j.info("SVER="+_.Aa));const Yi=je[5];Yi!=null&&typeof Yi=="number"&&0<Yi&&(S=1.5*Yi,_.L=S,_.j.info("backChannelRequestTimeoutMs_="+S)),S=_;const Gt=c.g;if(Gt){const vi=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vi){var $=S.h;$.g||vi.indexOf("spdy")==-1&&vi.indexOf("quic")==-1&&vi.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(wa($,$.h),$.h=null))}if(S.D){const nl=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;nl&&(S.ya=nl,et(S.I,S.D,nl))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),S=_;var oe=c;if(S.qa=Qu(S,S.J?S.ia:null,S.W),oe.K){ln(S.h,oe);var Be=oe,Ot=S.L;Ot&&(Be.I=Ot),Be.B&&(Ir(Be),ws(Be)),S.g=oe}else Fu(S);0<_.i.length&&xa(_)}else je[0]!="stop"&&je[0]!="close"||Qi(_,7);else _.G==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?Qi(_,7):Zo(_):je[0]!="noop"&&_.l&&_.l.ta(je),_.v=0)}}wr(4)}catch{}}var Lu=class{constructor(c,y){this.g=c,this.map=y}};function qi(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Sa(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Aa(c){return c.h?1:c.g?c.g.size:0}function Fo(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function wa(c,y){c.g?c.g.add(y):c.h=y}function ln(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}qi.prototype.cancel=function(){if(this.i=Go(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Go(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const _ of c.g.values())y=y.concat(_.D);return y}return Y(c.i)}function _f(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(g(c)){for(var y=[],_=c.length,S=0;S<_;S++)y.push(c[S]);return y}y=[],_=0;for(S in c)y[_++]=c[S];return y}function ba(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(g(c)||typeof c=="string"){var y=[];c=c.length;for(var _=0;_<c;_++)y.push(_);return y}y=[],_=0;for(const S in c)y[_++]=S;return y}}}function $o(c,y){if(c.forEach&&typeof c.forEach=="function")c.forEach(y,void 0);else if(g(c)||typeof c=="string")Array.prototype.forEach.call(c,y,void 0);else for(var _=ba(c),S=_f(c),U=S.length,$=0;$<U;$++)y.call(void 0,S[$],_&&_[$],c)}var Rs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vf(c,y){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var S=c[_].indexOf("="),U=null;if(0<=S){var $=c[_].substring(0,S);U=c[_].substring(S+1)}else $=c[_];y($,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function wt(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof wt){this.h=c.h,Is(this,c.j),this.o=c.o,this.g=c.g,Cr(this,c.s),this.l=c.l;var y=c.i,_=new Fi;_.i=y.i,y.g&&(_.g=new Map(y.g),_.h=y.h),Hi(this,_),this.m=c.m}else c&&(y=String(c).match(Rs))?(this.h=!1,Is(this,y[1]||"",!0),this.o=Mn(y[2]||""),this.g=Mn(y[3]||"",!0),Cr(this,y[4]),this.l=Mn(y[5]||"",!0),Hi(this,y[6]||"",!0),this.m=Mn(y[7]||"")):(this.h=!1,this.i=new Fi(null,this.h))}wt.prototype.toString=function(){var c=[],y=this.j;y&&c.push(Ds(y,Ko,!0),":");var _=this.g;return(_||y=="file")&&(c.push("//"),(y=this.o)&&c.push(Ds(y,Ko,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(Ds(_,_.charAt(0)=="/"?Ef:Qo,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",Ds(_,Ra)),c.join("")};function Sn(c){return new wt(c)}function Is(c,y,_){c.j=_?Mn(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function Cr(c,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);c.s=y}else c.s=null}function Hi(c,y,_){y instanceof Fi?(c.i=y,Bu(c.i,c.h)):(_||(y=Ds(y,Tf)),c.i=new Fi(y,c.h))}function et(c,y,_){c.i.set(y,_)}function Cs(c){return et(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Mn(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Ds(c,y,_){return typeof c=="string"?(c=encodeURI(c).replace(y,Uu),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Uu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Ko=/[#\/\?@]/g,Qo=/[#\?:]/g,Ef=/[#\?]/g,Tf=/[#\?@]/g,Ra=/#/g;function Fi(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function kn(c){c.g||(c.g=new Map,c.h=0,c.i&&vf(c.i,function(y,_){c.add(decodeURIComponent(y.replace(/\+/g," ")),_)}))}r=Fi.prototype,r.add=function(c,y){kn(this),this.i=null,c=di(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(y),this.h+=1,this};function Gi(c,y){kn(c),y=di(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function $i(c,y){return kn(c),y=di(c,y),c.g.has(y)}r.forEach=function(c,y){kn(this),this.g.forEach(function(_,S){_.forEach(function(U){c.call(y,U,S,this)},this)},this)},r.na=function(){kn(this);const c=Array.from(this.g.values()),y=Array.from(this.g.keys()),_=[];for(let S=0;S<y.length;S++){const U=c[S];for(let $=0;$<U.length;$++)_.push(y[S])}return _},r.V=function(c){kn(this);let y=[];if(typeof c=="string")$i(this,c)&&(y=y.concat(this.g.get(di(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)y=y.concat(c[_])}return y},r.set=function(c,y){return kn(this),this.i=null,c=di(this,c),$i(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},r.get=function(c,y){return c?(c=this.V(c),0<c.length?String(c[0]):y):y};function Yo(c,y,_){Gi(c,y),0<_.length&&(c.i=null,c.g.set(di(c,y),Y(_)),c.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(var _=0;_<y.length;_++){var S=y[_];const $=encodeURIComponent(String(S)),oe=this.V(S);for(S=0;S<oe.length;S++){var U=$;oe[S]!==""&&(U+="="+encodeURIComponent(String(oe[S]))),c.push(U)}}return this.i=c.join("&")};function di(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function Bu(c,y){y&&!c.j&&(kn(c),c.i=null,c.g.forEach(function(_,S){var U=S.toLowerCase();S!=U&&(Gi(this,S),Yo(this,U,_))},c)),c.j=y}function Ns(c,y){const _=new xn;if(m.Image){const S=new Image;S.onload=L(Vn,_,"TestLoadImage: loaded",!0,y,S),S.onerror=L(Vn,_,"TestLoadImage: error",!1,y,S),S.onabort=L(Vn,_,"TestLoadImage: abort",!1,y,S),S.ontimeout=L(Vn,_,"TestLoadImage: timeout",!1,y,S),m.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=c}else y(!1)}function Jn(c,y){const _=new xn,S=new AbortController,U=setTimeout(()=>{S.abort(),Vn(_,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:S.signal}).then($=>{clearTimeout(U),$.ok?Vn(_,"TestPingServer: ok",!0,y):Vn(_,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(U),Vn(_,"TestPingServer: error",!1,y)})}function Vn(c,y,_,S,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),S(_)}catch{}}function Os(){this.g=new Ss}function mi(c,y,_){const S=_||"";try{$o(c,function(U,$){let oe=U;p(U)&&(oe=Wn(U)),y.push(S+$+"="+encodeURIComponent(oe))})}catch(U){throw y.push(S+"type="+encodeURIComponent("_badmap")),U}}function Dr(c){this.l=c.Ub||null,this.j=c.eb||!1}q(Dr,Lo),Dr.prototype.g=function(){return new Ki(this.l,this.j)},Dr.prototype.i=function(c){return function(){return c}}({});function Ki(c,y){pt.call(this),this.D=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}q(Ki,pt),r=Ki.prototype,r.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=y,this.readyState=1,gi(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(y.body=c),(this.D||m).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pi(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,gi(this)),this.g&&(this.readyState=3,gi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xo(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xo(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?pi(this):gi(this),this.readyState==3&&Xo(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,pi(this))},r.Qa=function(c){this.g&&(this.response=c,pi(this))},r.ga=function(){this.g&&pi(this)};function pi(c){c.readyState=4,c.l=null,c.j=null,c.v=null,gi(c)}r.setRequestHeader=function(c,y){this.u.append(c,y)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var _=y.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=y.next();return c.join(`\r
`)};function gi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ki.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Wo(c){let y="";return ye(c,function(_,S){y+=S,y+=":",y+=_,y+=`\r
`}),y}function Ut(c,y,_){e:{for(S in _){var S=!1;break e}S=!0}S||(_=Wo(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):et(c,y,_))}function Ke(c){pt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}q(Ke,pt);var Ia=/^https?$/i,xs=["POST","PUT"];r=Ke.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,y,_,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ci.g(),this.v=this.o?Uo(this.o):Uo(ci),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch($){ju(this,$);return}if(c=_||"",_=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var U in S)_.set(U,S[U]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const $ of S.keys())_.set($,S.get($));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(_.keys()).find($=>$.toLowerCase()=="content-type"),U=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(xs,y,void 0))||S||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,oe]of _)this.g.setRequestHeader($,oe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ms(this),this.u=!0,this.g.send(c),this.u=!1}catch($){ju(this,$)}};function ju(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.m=5,Ca(c),yi(c)}function Ca(c){c.A||(c.A=!0,We(c,"complete"),We(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,We(this,"complete"),We(this,"abort"),yi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yi(this,!0)),Ke.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Da(this):this.bb())},r.bb=function(){Da(this)};function Da(c){if(c.h&&typeof f<"u"&&(!c.v[1]||Pn(c)!=4||c.Z()!=2)){if(c.u&&Pn(c)==4)Zt(c.Ea,0,c);else if(We(c,"readystatechange"),Pn(c)==4){c.h=!1;try{const oe=c.Z();e:switch(oe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var _;if(!(_=y)){var S;if(S=oe===0){var U=String(c.D).match(Rs)[1]||null;!U&&m.self&&m.self.location&&(U=m.self.location.protocol.slice(0,-1)),S=!Ia.test(U?U.toLowerCase():"")}_=S}if(_)We(c,"complete"),We(c,"success");else{c.m=6;try{var $=2<Pn(c)?c.g.statusText:""}catch{$=""}c.l=$+" ["+c.Z()+"]",Ca(c)}}finally{yi(c)}}}}function yi(c,y){if(c.g){Ms(c);const _=c.g,S=c.v[0]?()=>{}:null;c.g=null,c.v=null,y||We(c,"ready");try{_.onreadystatechange=S}catch{}}}function Ms(c){c.I&&(m.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function Pn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<Pn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),va(y)}};function zu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Sf(c){const y={};c=(c.g&&2<=Pn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<c.length;S++){if(se(c[S]))continue;var _=M(c[S]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const $=y[U]||[];y[U]=$,$.push(_)}x(y,function(S){return S.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ks(c,y,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||y}function Na(c){this.Aa=0,this.i=[],this.j=new xn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ks("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ks("baseRetryDelayMs",5e3,c),this.cb=ks("retryDelaySeedMs",1e4,c),this.Wa=ks("forwardChannelMaxRetries",2,c),this.wa=ks("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new qi(c&&c.concurrentRequestLimit),this.Da=new Os,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Na.prototype,r.la=8,r.G=1,r.connect=function(c,y,_,S){ut(0),this.W=c,this.H=y||{},_&&S!==void 0&&(this.H.OSID=_,this.H.OAID=S),this.F=this.X,this.I=Qu(this,null,this.W),xa(this)};function Zo(c){if(qu(c),c.G==3){var y=c.U++,_=Sn(c.I);if(et(_,"SID",c.K),et(_,"RID",y),et(_,"TYPE","terminate"),Vs(c,_),y=new on(c,c.j,y),y.L=2,y.v=Cs(Sn(_)),_=!1,m.navigator&&m.navigator.sendBeacon)try{_=m.navigator.sendBeacon(y.v.toString(),"")}catch{}!_&&m.Image&&(new Image().src=y.v,_=!0),_||(y.g=Yu(y.j,null),y.g.ea(y.v)),y.F=Date.now(),ws(y)}Ku(c)}function Oa(c){c.g&&(Ps(c),c.g.cancel(),c.g=null)}function qu(c){Oa(c),c.u&&(m.clearTimeout(c.u),c.u=null),Ma(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function xa(c){if(!Sa(c.h)&&!c.s){c.s=!0;var y=c.Ga;re||D(),le||(re(),le=!0),Ne.add(y,c),c.B=0}}function Af(c,y){return Aa(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=y.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=At(w(c.Ga,c,y),tl(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const U=new on(this,this.j,c);let $=this.o;if(this.S&&($?($=R($),O($,this.S)):$=this.S),this.m!==null||this.O||(U.H=$,$=null),this.P)e:{for(var y=0,_=0;_<this.i.length;_++){t:{var S=this.i[_];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break t}S=void 0}if(S===void 0)break;if(y+=S,4096<y){y=_;break e}if(y===4096||_===this.i.length-1){y=_+1;break e}}y=1e3}else y=1e3;y=Hu(this,U,y),_=Sn(this.I),et(_,"RID",c),et(_,"CVER",22),this.D&&et(_,"X-HTTP-Session-Id",this.D),Vs(this,_),$&&(this.O?y="headers="+encodeURIComponent(String(Wo($)))+"&"+y:this.m&&Ut(_,this.m,$)),wa(this.h,U),this.Ua&&et(_,"TYPE","init"),this.P?(et(_,"$req",y),et(_,"SID","null"),U.T=!0,Zn(U,_,null)):Zn(U,_,y),this.G=2}}else this.G==3&&(c?Jo(this,c):this.i.length==0||Sa(this.h)||Jo(this))};function Jo(c,y){var _;y?_=y.l:_=c.U++;const S=Sn(c.I);et(S,"SID",c.K),et(S,"RID",_),et(S,"AID",c.T),Vs(c,S),c.m&&c.o&&Ut(S,c.m,c.o),_=new on(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),y&&(c.i=y.D.concat(c.i)),y=Hu(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),wa(c.h,_),Zn(_,S,y)}function Vs(c,y){c.H&&ye(c.H,function(_,S){et(y,S,_)}),c.l&&$o({},function(_,S){et(y,S,_)})}function Hu(c,y,_){_=Math.min(c.i.length,_);var S=c.l?w(c.l.Na,c.l,c):null;e:{var U=c.i;let $=-1;for(;;){const oe=["count="+_];$==-1?0<_?($=U[0].g,oe.push("ofs="+$)):$=0:oe.push("ofs="+$);let Be=!0;for(let Ot=0;Ot<_;Ot++){let je=U[Ot].g;const Bt=U[Ot].map;if(je-=$,0>je)$=Math.max(0,U[Ot].g-100),Be=!1;else try{mi(Bt,oe,"req"+je+"_")}catch{S&&S(Bt)}}if(Be){S=oe.join("&");break e}}}return c=c.i.splice(0,_),y.D=c,S}function Fu(c){if(!c.g&&!c.u){c.Y=1;var y=c.Fa;re||D(),le||(re(),le=!0),Ne.add(y,c),c.v=0}}function el(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=At(w(c.Fa,c),tl(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,Gu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=At(w(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),Oa(this),Gu(this))};function Ps(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function Gu(c){c.g=new on(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var y=Sn(c.qa);et(y,"RID","rpc"),et(y,"SID",c.K),et(y,"AID",c.T),et(y,"CI",c.F?"0":"1"),!c.F&&c.ja&&et(y,"TO",c.ja),et(y,"TYPE","xmlhttp"),Vs(c,y),c.m&&c.o&&Ut(y,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=Cs(Sn(y)),_.m=null,_.P=!0,zi(_,c)}r.Za=function(){this.C!=null&&(this.C=null,Oa(this),el(this),ut(19))};function Ma(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function $u(c,y){var _=null;if(c.g==y){Ma(c),Ps(c),c.g=null;var S=2}else if(Fo(c.h,y))_=y.D,ln(c.h,y),S=1;else return;if(c.G!=0){if(y.o)if(S==1){_=y.m?y.m.length:0,y=Date.now()-y.F;var U=c.B;S=Ar(),We(S,new Nt(S,_)),xa(c)}else Fu(c);else if(U=y.s,U==3||U==0&&0<y.X||!(S==1&&Af(c,y)||S==2&&el(c)))switch(_&&0<_.length&&(y=c.h,y.i=y.i.concat(_)),U){case 1:Qi(c,5);break;case 4:Qi(c,10);break;case 3:Qi(c,6);break;default:Qi(c,2)}}}function tl(c,y){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*y}function Qi(c,y){if(c.j.info("Error code "+y),y==2){var _=w(c.fb,c),S=c.Xa;const U=!S;S=new wt(S||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Is(S,"https"),Cs(S),U?Ns(S.toString(),_):Jn(S.toString(),_)}else ut(2);c.G=0,c.l&&c.l.sa(y),Ku(c),qu(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function Ku(c){if(c.G=0,c.ka=[],c.l){const y=Go(c.h);(y.length!=0||c.i.length!=0)&&(G(c.ka,y),G(c.ka,c.i),c.h.i.length=0,Y(c.i),c.i.length=0),c.l.ra()}}function Qu(c,y,_){var S=_ instanceof wt?Sn(_):new wt(_);if(S.g!="")y&&(S.g=y+"."+S.g),Cr(S,S.s);else{var U=m.location;S=U.protocol,y=y?y+"."+U.hostname:U.hostname,U=+U.port;var $=new wt(null);S&&Is($,S),y&&($.g=y),U&&Cr($,U),_&&($.l=_),S=$}return _=c.D,y=c.ya,_&&y&&et(S,_,y),et(S,"VER",c.la),Vs(c,S),S}function Yu(c,y,_){if(y&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Ca&&!c.pa?new Ke(new Dr({eb:_})):new Ke(c.pa),y.Ha(c.J),y}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xu(){}r=Xu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ka(){}ka.prototype.g=function(c,y){return new un(c,y)};function un(c,y){pt.call(this),this.g=new Na(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(c?c["X-WebChannel-Client-Profile"]=y.va:c={"X-WebChannel-Client-Profile":y.va}),this.g.S=c,(c=y&&y.Sb)&&!se(c)&&(this.g.m=c),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!se(y)&&(this.g.D=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new _i(this)}q(un,pt),un.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},un.prototype.close=function(){Zo(this.g)},un.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=Wn(c),c=_);y.i.push(new Lu(y.Ya++,c)),y.G==3&&xa(y)},un.prototype.N=function(){this.g.l=null,delete this.j,Zo(this.g),delete this.g,un.aa.N.call(this)};function Wu(c){Bi.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){e:{for(const _ in y){c=_;break e}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}q(Wu,Bi);function Zu(){jo.call(this),this.status=1}q(Zu,jo);function _i(c){this.g=c}q(_i,Xu),_i.prototype.ua=function(){We(this.g,"a")},_i.prototype.ta=function(c){We(this.g,new Wu(c))},_i.prototype.sa=function(c){We(this.g,new Zu)},_i.prototype.ra=function(){We(this.g,"b")},ka.prototype.createWebChannel=ka.prototype.g,un.prototype.send=un.prototype.o,un.prototype.open=un.prototype.m,un.prototype.close=un.prototype.close,Z0=function(){return new ka},W0=function(){return Ar()},X0=ui,ep={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Rr.NO_ERROR=0,Rr.TIMEOUT=8,Rr.HTTP_ERROR=6,dh=Rr,ji.COMPLETE="complete",Y0=ji,Bo.EventType=Ui,Ui.OPEN="a",Ui.CLOSE="b",Ui.ERROR="c",Ui.MESSAGE="d",pt.prototype.listen=pt.prototype.K,Ql=Bo,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,Q0=Ke}).apply(typeof th<"u"?th:typeof self<"u"?self:typeof window<"u"?window:{});const OE="@firebase/firestore",xE="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nn.UNAUTHENTICATED=new nn(null),nn.GOOGLE_CREDENTIALS=new nn("google-credentials-uid"),nn.FIRST_PARTY=new nn("first-party-uid"),nn.MOCK_USER=new nn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xo="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=new Ip("@firebase/firestore");function uo(){return oa.logLevel}function ue(r,...e){if(oa.logLevel<=Pe.DEBUG){const n=e.map(jp);oa.debug(`Firestore (${xo}): ${r}`,...n)}}function Er(r,...e){if(oa.logLevel<=Pe.ERROR){const n=e.map(jp);oa.error(`Firestore (${xo}): ${r}`,...n)}}function vo(r,...e){if(oa.logLevel<=Pe.WARN){const n=e.map(jp);oa.warn(`Firestore (${xo}): ${r}`,...n)}}function jp(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(r,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,J0(r,s,n)}function J0(r,e,n){let s=`FIRESTORE (${xo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Er(s),new Error(s)}function Qe(r,e,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||J0(e,o,s)}function Re(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends _n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nn.UNAUTHENTICATED))}shutdown(){}}class zD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class qD{constructor(e){this.t=e,this.currentUser=nn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Qe(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,n(g)):Promise.resolve();let u=new rs;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new rs,e.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const g=u;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},m=g=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(g=>m(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new rs)}},0),f()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Qe(typeof s.accessToken=="string",31837,{l:s}),new e1(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Qe(e===null||typeof e=="string",2055,{h:e}),new nn(e)}}class HD{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=nn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class FD{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new HD(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(nn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ME{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class GD{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Nn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Qe(this.o===void 0,3512);const s=u=>{u.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,ue("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ME(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Qe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ME(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $D(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=$D(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=e.charAt(o[u]%62))}return s}}function Le(r,e){return r<e?-1:r>e?1:0}function tp(r,e){const n=Math.min(r.length,e.length);for(let s=0;s<n;s++){const o=r.charAt(s),u=e.charAt(s);if(o!==u)return Om(o)===Om(u)?Le(o,u):Om(o)?1:-1}return Le(r.length,e.length)}const KD=55296,QD=57343;function Om(r){const e=r.charCodeAt(0);return e>=KD&&e<=QD}function Eo(r,e,n){return r.length===e.length&&r.every((s,o)=>n(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE="__name__";class bi{constructor(e,n,s){n===void 0?n=0:n>e.length&&Se(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&Se(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return bi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bi?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let o=0;o<s;o++){const u=bi.compareSegments(e.get(o),n.get(o));if(u!==0)return u}return Le(e.length,n.length)}static compareSegments(e,n){const s=bi.isNumericId(e),o=bi.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?bi.extractNumericId(e).compare(bi.extractNumericId(n)):tp(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return is.fromString(e.substring(4,e.length-2))}}class ft extends bi{construct(e,n,s){return new ft(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new fe(te.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new ft(n)}static emptyPath(){return new ft([])}}const YD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xt extends bi{construct(e,n,s){return new Xt(e,n,s)}static isValidIdentifier(e){return YD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===kE}static keyField(){return new Xt([kE])}static fromServerFormat(e){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new fe(te.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new fe(te.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new fe(te.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new fe(te.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xt(n)}static emptyPath(){return new Xt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(ft.fromString(e))}static fromName(e){return new ge(ft.fromString(e).popFirst(5))}static empty(){return new ge(ft.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ft.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ft.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new ft(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XD(r,e,n){if(!n)throw new fe(te.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function WD(r,e,n,s){if(e===!0&&s===!0)throw new fe(te.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function VE(r){if(!ge.isDocumentKey(r))throw new fe(te.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function t1(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function qp(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Se(12329,{type:typeof r})}function Ii(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new fe(te.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qp(r);throw new fe(te.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(r,e){const n={typeString:r};return e&&(n.value=e),n}function wu(r,e){if(!t1(r))throw new fe(te.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const f=r[s];if(o&&typeof f!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){n=`Expected '${s}' field to equal '${u.value}'`;break}}if(n)throw new fe(te.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE=-62135596800,LE=1e6;class lt{static now(){return lt.fromMillis(Date.now())}static fromDate(e){return lt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*LE);return new lt(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new fe(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new fe(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<PE)throw new fe(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/LE}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:lt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(wu(e,lt._jsonSchema))return new lt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-PE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}lt._jsonSchemaVersion="firestore/timestamp/1.0",lt._jsonSchema={type:Ct("string",lt._jsonSchemaVersion),seconds:Ct("number"),nanoseconds:Ct("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new lt(0,0))}static max(){return new we(new lt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=-1;function ZD(r,e){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=we.fromTimestamp(s===1e9?new lt(n+1,0):new lt(n,s));return new as(o,ge.empty(),e)}function JD(r){return new as(r.readTime,r.key,lu)}class as{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new as(we.min(),ge.empty(),lu)}static max(){return new as(we.max(),ge.empty(),lu)}}function eN(r,e){let n=r.readTime.compareTo(e.readTime);return n!==0?n:(n=ge.comparator(r.documentKey,e.documentKey),n!==0?n:Le(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mo(r){if(r.code!==te.FAILED_PRECONDITION||r.message!==tN)throw r;ue("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new ee((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof ee?n:ee.resolve(n)}catch(n){return ee.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):ee.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):ee.reject(n)}static resolve(e){return new ee((n,s)=>{n(e)})}static reject(e){return new ee((n,s)=>{s(e)})}static waitFor(e){return new ee((n,s)=>{let o=0,u=0,f=!1;e.forEach(m=>{++o,m.next(()=>{++u,f&&u===o&&n()},g=>s(g))}),f=!0,u===o&&n()})}static or(e){let n=ee.resolve(!1);for(const s of e)n=n.next(o=>o?ee.resolve(o):s());return n}static forEach(e,n){const s=[];return e.forEach((o,u)=>{s.push(n.call(this,o,u))}),this.waitFor(s)}static mapArray(e,n){return new ee((s,o)=>{const u=e.length,f=new Array(u);let m=0;for(let g=0;g<u;g++){const p=g;n(e[p]).next(E=>{f[p]=E,++m,m===u&&s(f)},E=>o(E))}})}static doWhile(e,n){return new ee((s,o)=>{const u=()=>{e()===!0?n().next(()=>{u()},o):s()};u()})}}function iN(r){const e=r.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ko(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Qh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp=-1;function Yh(r){return r==null}function Ch(r){return r===0&&1/r==-1/0}function rN(r){return typeof r=="number"&&Number.isInteger(r)&&!Ch(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1="";function sN(r){let e="";for(let n=0;n<r.length;n++)e.length>0&&(e=UE(e)),e=aN(r.get(n),e);return UE(e)}function aN(r,e){let n=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case n1:n+="";break;default:n+=u}}return n}function UE(r){return r+n1+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(r){let e=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e++;return e}function ps(r,e){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e(n,r[n])}function i1(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n){this.comparator=e,this.root=n||Yt.EMPTY}insert(e,n){return new mt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Yt.BLACK,null,null))}remove(e){return new mt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Yt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nh(this.root,e,this.comparator,!1)}getReverseIterator(){return new nh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nh(this.root,e,this.comparator,!0)}}class nh{constructor(e,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=n?s(e.key,n):1,n&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Yt{constructor(e,n,s,o,u){this.key=e,this.value=n,this.color=s??Yt.RED,this.left=o??Yt.EMPTY,this.right=u??Yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,o,u){return new Yt(e??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return Yt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Se(27949);return e+(this.isRed()?0:1)}}Yt.EMPTY=null,Yt.RED=!0,Yt.BLACK=!1;Yt.EMPTY=new class{constructor(){this.size=0}get key(){throw Se(57766)}get value(){throw Se(16141)}get color(){throw Se(16727)}get left(){throw Se(29726)}get right(){throw Se(36894)}copy(e,n,s,o,u){return this}insert(e,n,s){return new Yt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.comparator=e,this.data=new mt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jE(this.data.getIterator())}getIteratorFrom(e){return new jE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Pt(this.comparator);return n.data=e,n}}class jE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.fields=e,e.sort(Xt.comparator)}static empty(){return new On([])}unionWith(e){let n=new Pt(Xt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new On(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Eo(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new r1("Invalid base64 string: "+u):u}}(e);return new Wt(n)}static fromUint8Array(e){const n=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(e);return new Wt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Wt.EMPTY_BYTE_STRING=new Wt("");const oN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function os(r){if(Qe(!!r,39018),typeof r=="string"){let e=0;const n=oN.exec(r);if(Qe(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:St(r.seconds),nanos:St(r.nanos)}}function St(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ls(r){return typeof r=="string"?Wt.fromBase64String(r):Wt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1="server_timestamp",a1="__type__",o1="__previous_value__",l1="__local_write_time__";function Fp(r){return(r?.mapValue?.fields||{})[a1]?.stringValue===s1}function Xh(r){const e=r.mapValue.fields[o1];return Fp(e)?Xh(e):e}function uu(r){const e=os(r.mapValue.fields[l1].timestampValue);return new lt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e,n,s,o,u,f,m,g,p,E){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=p,this.isUsingEmulator=E}}const Dh="(default)";class cu{constructor(e,n){this.projectId=e,this.database=n||Dh}static empty(){return new cu("","")}get isDefaultDatabase(){return this.database===Dh}isEqual(e){return e instanceof cu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1="__type__",uN="__max__",ih={mapValue:{}},c1="__vector__",Nh="value";function us(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Fp(r)?4:hN(r)?9007199254740991:cN(r)?10:11:Se(28295,{value:r})}function ki(r,e){if(r===e)return!0;const n=us(r);if(n!==us(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return uu(r).isEqual(uu(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=os(o.timestampValue),m=os(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,u){return ls(o.bytesValue).isEqual(ls(u.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,u){return St(o.geoPointValue.latitude)===St(u.geoPointValue.latitude)&&St(o.geoPointValue.longitude)===St(u.geoPointValue.longitude)}(r,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return St(o.integerValue)===St(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=St(o.doubleValue),m=St(u.doubleValue);return f===m?Ch(f)===Ch(m):isNaN(f)&&isNaN(m)}return!1}(r,e);case 9:return Eo(r.arrayValue.values||[],e.arrayValue.values||[],ki);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(BE(f)!==BE(m))return!1;for(const g in f)if(f.hasOwnProperty(g)&&(m[g]===void 0||!ki(f[g],m[g])))return!1;return!0}(r,e);default:return Se(52216,{left:r})}}function hu(r,e){return(r.values||[]).find(n=>ki(n,e))!==void 0}function To(r,e){if(r===e)return 0;const n=us(r),s=us(e);if(n!==s)return Le(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Le(r.booleanValue,e.booleanValue);case 2:return function(u,f){const m=St(u.integerValue||u.doubleValue),g=St(f.integerValue||f.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1}(r,e);case 3:return zE(r.timestampValue,e.timestampValue);case 4:return zE(uu(r),uu(e));case 5:return tp(r.stringValue,e.stringValue);case 6:return function(u,f){const m=ls(u),g=ls(f);return m.compareTo(g)}(r.bytesValue,e.bytesValue);case 7:return function(u,f){const m=u.split("/"),g=f.split("/");for(let p=0;p<m.length&&p<g.length;p++){const E=Le(m[p],g[p]);if(E!==0)return E}return Le(m.length,g.length)}(r.referenceValue,e.referenceValue);case 8:return function(u,f){const m=Le(St(u.latitude),St(f.latitude));return m!==0?m:Le(St(u.longitude),St(f.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return qE(r.arrayValue,e.arrayValue);case 10:return function(u,f){const m=u.fields||{},g=f.fields||{},p=m[Nh]?.arrayValue,E=g[Nh]?.arrayValue,A=Le(p?.values?.length||0,E?.values?.length||0);return A!==0?A:qE(p,E)}(r.mapValue,e.mapValue);case 11:return function(u,f){if(u===ih.mapValue&&f===ih.mapValue)return 0;if(u===ih.mapValue)return 1;if(f===ih.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),p=f.fields||{},E=Object.keys(p);g.sort(),E.sort();for(let A=0;A<g.length&&A<E.length;++A){const w=tp(g[A],E[A]);if(w!==0)return w;const L=To(m[g[A]],p[E[A]]);if(L!==0)return L}return Le(g.length,E.length)}(r.mapValue,e.mapValue);default:throw Se(23264,{he:n})}}function zE(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Le(r,e);const n=os(r),s=os(e),o=Le(n.seconds,s.seconds);return o!==0?o:Le(n.nanos,s.nanos)}function qE(r,e){const n=r.values||[],s=e.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=To(n[o],s[o]);if(u)return u}return Le(n.length,s.length)}function So(r){return np(r)}function np(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=os(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return ls(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return ge.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=np(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${np(n.fields[f])}`;return o+"}"}(r.mapValue):Se(61005,{value:r})}function mh(r){switch(us(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Xh(r);return e?16+mh(e):16;case 5:return 2*r.stringValue.length;case 6:return ls(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+mh(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return ps(s.fields,(u,f)=>{o+=u.length+mh(f)}),o}(r.mapValue);default:throw Se(13486,{value:r})}}function ip(r){return!!r&&"integerValue"in r}function Gp(r){return!!r&&"arrayValue"in r}function HE(r){return!!r&&"nullValue"in r}function FE(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function ph(r){return!!r&&"mapValue"in r}function cN(r){return(r?.mapValue?.fields||{})[u1]?.stringValue===c1}function eu(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return ps(r.mapValue.fields,(n,s)=>e.mapValue.fields[n]=eu(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=eu(r.arrayValue.values[n]);return e}return{...r}}function hN(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===uN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.value=e}static empty(){return new gn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ph(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=eu(n)}setAll(e){let n=Xt.emptyPath(),s={},o=[];e.forEach((f,m)=>{if(!n.isImmediateParentOf(m)){const g=this.getFieldsMap(n);this.applyChanges(g,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=eu(f):o.push(m.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(e){const n=this.field(e.popLast());ph(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ki(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=n.mapValue.fields[e.get(s)];ph(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,s){ps(n,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new gn(eu(this.value))}}function h1(r){const e=[];return ps(r.fields,(n,s)=>{const o=new Xt([n]);if(ph(s)){const u=h1(s.mapValue).fields;if(u.length===0)e.push(o);else for(const f of u)e.push(o.child(f))}else e.push(o)}),new On(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,n,s,o,u,f,m){this.key=e,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(e){return new rn(e,0,we.min(),we.min(),we.min(),gn.empty(),0)}static newFoundDocument(e,n,s,o){return new rn(e,1,n,we.min(),s,o,0)}static newNoDocument(e,n){return new rn(e,2,n,we.min(),we.min(),gn.empty(),0)}static newUnknownDocument(e,n){return new rn(e,3,n,we.min(),we.min(),gn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,n){this.position=e,this.inclusive=n}}function GE(r,e,n){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],f=r.position[o];if(u.field.isKeyField()?s=ge.comparator(ge.fromName(f.referenceValue),n.key):s=To(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function $E(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!ki(r.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n="asc"){this.field=e,this.dir=n}}function fN(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{}class Vt extends f1{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new mN(e,n,s):n==="array-contains"?new yN(e,s):n==="in"?new _N(e,s):n==="not-in"?new vN(e,s):n==="array-contains-any"?new EN(e,s):new Vt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new pN(e,s):new gN(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(To(n,this.value)):n!==null&&us(this.value)===us(n)&&this.matchesComparison(To(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vi extends f1{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Vi(e,n)}matches(e){return d1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function d1(r){return r.op==="and"}function m1(r){return dN(r)&&d1(r)}function dN(r){for(const e of r.filters)if(e instanceof Vi)return!1;return!0}function rp(r){if(r instanceof Vt)return r.field.canonicalString()+r.op.toString()+So(r.value);if(m1(r))return r.filters.map(e=>rp(e)).join(",");{const e=r.filters.map(n=>rp(n)).join(",");return`${r.op}(${e})`}}function p1(r,e){return r instanceof Vt?function(s,o){return o instanceof Vt&&s.op===o.op&&s.field.isEqual(o.field)&&ki(s.value,o.value)}(r,e):r instanceof Vi?function(s,o){return o instanceof Vi&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,f,m)=>u&&p1(f,o.filters[m]),!0):!1}(r,e):void Se(19439)}function g1(r){return r instanceof Vt?function(n){return`${n.field.canonicalString()} ${n.op} ${So(n.value)}`}(r):r instanceof Vi?function(n){return n.op.toString()+" {"+n.getFilters().map(g1).join(" ,")+"}"}(r):"Filter"}class mN extends Vt{constructor(e,n,s){super(e,n,s),this.key=ge.fromName(s.referenceValue)}matches(e){const n=ge.comparator(e.key,this.key);return this.matchesComparison(n)}}class pN extends Vt{constructor(e,n){super(e,"in",n),this.keys=y1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class gN extends Vt{constructor(e,n){super(e,"not-in",n),this.keys=y1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function y1(r,e){return(e.arrayValue?.values||[]).map(n=>ge.fromName(n.referenceValue))}class yN extends Vt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gp(n)&&hu(n.arrayValue,this.value)}}class _N extends Vt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&hu(this.value.arrayValue,n)}}class vN extends Vt{constructor(e,n){super(e,"not-in",n)}matches(e){if(hu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!hu(this.value.arrayValue,n)}}class EN extends Vt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>hu(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e,n=null,s=[],o=[],u=null,f=null,m=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.Te=null}}function KE(r,e=null,n=[],s=[],o=null,u=null,f=null){return new TN(r,e,n,s,o,u,f)}function $p(r){const e=Re(r);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>rp(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Yh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>So(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>So(s)).join(",")),e.Te=n}return e.Te}function Kp(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!fN(r.orderBy[n],e.orderBy[n]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!p1(r.filters[n],e.filters[n]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!$E(r.startAt,e.startAt)&&$E(r.endAt,e.endAt)}function sp(r){return ge.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,n=null,s=[],o=[],u=null,f="F",m=null,g=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=g,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function SN(r,e,n,s,o,u,f,m){return new Wh(r,e,n,s,o,u,f,m)}function Zh(r){return new Wh(r)}function QE(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function AN(r){return r.collectionGroup!==null}function tu(r){const e=Re(r);if(e.Ie===null){e.Ie=[];const n=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),n.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new Pt(Xt.comparator);return f.filters.forEach(g=>{g.getFlattenedFilters().forEach(p=>{p.isInequality()&&(m=m.add(p.field))})}),m})(e).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new xh(u,s))}),n.has(Xt.keyField().canonicalString())||e.Ie.push(new xh(Xt.keyField(),s))}return e.Ie}function Ci(r){const e=Re(r);return e.Ee||(e.Ee=wN(e,tu(r))),e.Ee}function wN(r,e){if(r.limitType==="F")return KE(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new xh(o.field,u)});const n=r.endAt?new Oh(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Oh(r.startAt.position,r.startAt.inclusive):null;return KE(r.path,r.collectionGroup,e,r.filters,r.limit,n,s)}}function ap(r,e,n){return new Wh(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,n,r.startAt,r.endAt)}function Jh(r,e){return Kp(Ci(r),Ci(e))&&r.limitType===e.limitType}function _1(r){return`${$p(Ci(r))}|lt:${r.limitType}`}function co(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>g1(o)).join(", ")}]`),Yh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>So(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>So(o)).join(",")),`Target(${s})`}(Ci(r))}; limitType=${r.limitType})`}function ef(r,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ge.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,e)&&function(s,o){for(const u of tu(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(f,m,g){const p=GE(f,m,g);return f.inclusive?p<=0:p<0}(s.startAt,tu(s),o)||s.endAt&&!function(f,m,g){const p=GE(f,m,g);return f.inclusive?p>=0:p>0}(s.endAt,tu(s),o))}(r,e)}function bN(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function v1(r){return(e,n)=>{let s=!1;for(const o of tu(r)){const u=RN(o,e,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function RN(r,e,n){const s=r.field.isKeyField()?ge.comparator(e.key,n.key):function(u,f,m){const g=f.data.field(u),p=m.data.field(u);return g!==null&&p!==null?To(g,p):Se(42886)}(r.field,e,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Se(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ps(this.inner,(n,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return i1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN=new mt(ge.comparator);function Tr(){return IN}const E1=new mt(ge.comparator);function Yl(...r){let e=E1;for(const n of r)e=e.insert(n.key,n);return e}function T1(r){let e=E1;return r.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function na(){return nu()}function S1(){return nu()}function nu(){return new pa(r=>r.toString(),(r,e)=>r.isEqual(e))}const CN=new mt(ge.comparator),DN=new Pt(ge.comparator);function Ue(...r){let e=DN;for(const n of r)e=e.add(n);return e}const NN=new Pt(Le);function ON(){return NN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ch(e)?"-0":e}}function A1(r){return{integerValue:""+r}}function xN(r,e){return rN(e)?A1(e):Qp(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this._=void 0}}function MN(r,e,n){return r instanceof Mh?function(o,u){const f={fields:{[a1]:{stringValue:s1},[l1]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Fp(u)&&(u=Xh(u)),u&&(f.fields[o1]=u),{mapValue:f}}(n,e):r instanceof Ao?b1(r,e):r instanceof fu?R1(r,e):function(o,u){const f=w1(o,u),m=YE(f)+YE(o.Ae);return ip(f)&&ip(o.Ae)?A1(m):Qp(o.serializer,m)}(r,e)}function kN(r,e,n){return r instanceof Ao?b1(r,e):r instanceof fu?R1(r,e):n}function w1(r,e){return r instanceof kh?function(s){return ip(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Mh extends tf{}class Ao extends tf{constructor(e){super(),this.elements=e}}function b1(r,e){const n=I1(e);for(const s of r.elements)n.some(o=>ki(o,s))||n.push(s);return{arrayValue:{values:n}}}class fu extends tf{constructor(e){super(),this.elements=e}}function R1(r,e){let n=I1(e);for(const s of r.elements)n=n.filter(o=>!ki(o,s));return{arrayValue:{values:n}}}class kh extends tf{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function YE(r){return St(r.integerValue||r.doubleValue)}function I1(r){return Gp(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e,n){this.field=e,this.transform=n}}function PN(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof Ao&&o instanceof Ao||s instanceof fu&&o instanceof fu?Eo(s.elements,o.elements,ki):s instanceof kh&&o instanceof kh?ki(s.Ae,o.Ae):s instanceof Mh&&o instanceof Mh}(r.transform,e.transform)}class LN{constructor(e,n){this.version=e,this.transformResults=n}}class Di{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Di}static exists(e){return new Di(void 0,e)}static updateTime(e){return new Di(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gh(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class nf{}function C1(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new N1(r.key,Di.none()):new bu(r.key,r.data,Di.none());{const n=r.data,s=gn.empty();let o=new Pt(Xt.comparator);for(let u of e.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new gs(r.key,s,new On(o.toArray()),Di.none())}}function UN(r,e,n){r instanceof bu?function(o,u,f){const m=o.value.clone(),g=WE(o.fieldTransforms,u,f.transformResults);m.setAll(g),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(r,e,n):r instanceof gs?function(o,u,f){if(!gh(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=WE(o.fieldTransforms,u,f.transformResults),g=u.data;g.setAll(D1(o)),g.setAll(m),u.convertToFoundDocument(f.version,g).setHasCommittedMutations()}(r,e,n):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,e,n)}function iu(r,e,n,s){return r instanceof bu?function(u,f,m,g){if(!gh(u.precondition,f))return m;const p=u.value.clone(),E=ZE(u.fieldTransforms,g,f);return p.setAll(E),f.convertToFoundDocument(f.version,p).setHasLocalMutations(),null}(r,e,n,s):r instanceof gs?function(u,f,m,g){if(!gh(u.precondition,f))return m;const p=ZE(u.fieldTransforms,g,f),E=f.data;return E.setAll(D1(u)),E.setAll(p),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(A=>A.field))}(r,e,n,s):function(u,f,m){return gh(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m}(r,e,n)}function BN(r,e){let n=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=w1(s.transform,o||null);u!=null&&(n===null&&(n=gn.empty()),n.set(s.field,u))}return n||null}function XE(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Eo(s,o,(u,f)=>PN(u,f))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class bu extends nf{constructor(e,n,s,o=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class gs extends nf{constructor(e,n,s,o,u=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function D1(r){const e=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);e.set(n,s)}}),e}function WE(r,e,n){const s=new Map;Qe(r.length===n.length,32656,{Re:n.length,Ve:r.length});for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,m=e.data.field(u.field);s.set(u.field,kN(f,m,n[o]))}return s}function ZE(r,e,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,MN(u,f,e))}return s}class N1 extends nf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jN extends nf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e,n,s,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&UN(u,e,s[o])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=iu(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=iu(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=S1();return this.mutations.forEach(o=>{const u=e.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const g=C1(f,m);g!==null&&s.set(o.key,g),f.isValidDocument()||f.convertToNoDocument(we.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ue())}isEqual(e){return this.batchId===e.batchId&&Eo(this.mutations,e.mutations,(n,s)=>XE(n,s))&&Eo(this.baseMutations,e.baseMutations,(n,s)=>XE(n,s))}}class Yp{constructor(e,n,s,o){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(e,n,s){Qe(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=function(){return CN}();const u=e.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new Yp(e,n,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var It,qe;function FN(r){switch(r){case te.OK:return Se(64938);case te.CANCELLED:case te.UNKNOWN:case te.DEADLINE_EXCEEDED:case te.RESOURCE_EXHAUSTED:case te.INTERNAL:case te.UNAVAILABLE:case te.UNAUTHENTICATED:return!1;case te.INVALID_ARGUMENT:case te.NOT_FOUND:case te.ALREADY_EXISTS:case te.PERMISSION_DENIED:case te.FAILED_PRECONDITION:case te.ABORTED:case te.OUT_OF_RANGE:case te.UNIMPLEMENTED:case te.DATA_LOSS:return!0;default:return Se(15467,{code:r})}}function O1(r){if(r===void 0)return Er("GRPC error has no .code"),te.UNKNOWN;switch(r){case It.OK:return te.OK;case It.CANCELLED:return te.CANCELLED;case It.UNKNOWN:return te.UNKNOWN;case It.DEADLINE_EXCEEDED:return te.DEADLINE_EXCEEDED;case It.RESOURCE_EXHAUSTED:return te.RESOURCE_EXHAUSTED;case It.INTERNAL:return te.INTERNAL;case It.UNAVAILABLE:return te.UNAVAILABLE;case It.UNAUTHENTICATED:return te.UNAUTHENTICATED;case It.INVALID_ARGUMENT:return te.INVALID_ARGUMENT;case It.NOT_FOUND:return te.NOT_FOUND;case It.ALREADY_EXISTS:return te.ALREADY_EXISTS;case It.PERMISSION_DENIED:return te.PERMISSION_DENIED;case It.FAILED_PRECONDITION:return te.FAILED_PRECONDITION;case It.ABORTED:return te.ABORTED;case It.OUT_OF_RANGE:return te.OUT_OF_RANGE;case It.UNIMPLEMENTED:return te.UNIMPLEMENTED;case It.DATA_LOSS:return te.DATA_LOSS;default:return Se(39323,{code:r})}}(qe=It||(It={}))[qe.OK=0]="OK",qe[qe.CANCELLED=1]="CANCELLED",qe[qe.UNKNOWN=2]="UNKNOWN",qe[qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qe[qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qe[qe.NOT_FOUND=5]="NOT_FOUND",qe[qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",qe[qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",qe[qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",qe[qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qe[qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qe[qe.ABORTED=10]="ABORTED",qe[qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",qe[qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",qe[qe.INTERNAL=13]="INTERNAL",qe[qe.UNAVAILABLE=14]="UNAVAILABLE",qe[qe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $N=new is([4294967295,4294967295],0);function JE(r){const e=GN().encode(r),n=new K0;return n.update(e),new Uint8Array(n.digest())}function eT(r){const e=new DataView(r.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new is([n,s],0),new is([o,u],0)]}class Xp{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Xl(`Invalid padding: ${n}`);if(s<0)throw new Xl(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Xl(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Xl(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=is.fromNumber(this.ge)}ye(e,n,s){let o=e.add(n.multiply(is.fromNumber(s)));return o.compare($N)===1&&(o=new is([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=JE(e),[s,o]=eT(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);if(!this.we(f))return!1}return!0}static create(e,n,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),f=new Xp(u,o,n);return s.forEach(m=>f.insert(m)),f}insert(e){if(this.ge===0)return;const n=JE(e),[s,o]=eT(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);this.Se(f)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Xl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,n,s,o,u){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const o=new Map;return o.set(e,Ru.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new rf(we.min(),o,new mt(Le),Tr(),Ue())}}class Ru{constructor(e,n,s,o,u){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ru(s,n,Ue(),Ue(),Ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,n,s,o){this.be=e,this.removedTargetIds=n,this.key=s,this.De=o}}class x1{constructor(e,n){this.targetId=e,this.Ce=n}}class M1{constructor(e,n,s=Wt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=o}}class tT{constructor(){this.ve=0,this.Fe=nT(),this.Me=Wt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ue(),n=Ue(),s=Ue();return this.Fe.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:Se(38017,{changeType:u})}}),new Ru(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=nT()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Qe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class KN{constructor(e){this.Ge=e,this.ze=new Map,this.je=Tr(),this.Je=rh(),this.He=rh(),this.Ye=new mt(Le)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:Se(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((s,o)=>{this.rt(o)&&n(o)})}st(e){const n=e.targetId,s=e.Ce.count,o=this.ot(n);if(o){const u=o.target;if(sp(u))if(s===0){const f=new ge(u.path);this.et(n,f,rn.newNoDocument(f,we.min()))}else Qe(s===1,20013,{expectedCount:s});else{const f=this._t(n);if(f!==s){const m=this.ut(e),g=m?this.ct(m,e,f):1;if(g!==0){this.it(n);const p=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,p)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=ls(s).toUint8Array()}catch(g){if(g instanceof r1)return vo("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new Xp(f,o,u)}catch(g){return vo(g instanceof Xl?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.ge===0?null:m}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let o=0;return s.forEach(u=>{const f=this.Ge.ht(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(n,u,null),o++)}),o}Tt(e){const n=new Map;this.ze.forEach((u,f)=>{const m=this.ot(f);if(m){if(u.current&&sp(m.target)){const g=new ge(m.target.path);this.It(g).has(f)||this.Et(f,g)||this.et(f,g,rn.newNoDocument(g,e))}u.Be&&(n.set(f,u.ke()),u.qe())}});let s=Ue();this.He.forEach((u,f)=>{let m=!0;f.forEachWhile(g=>{const p=this.ot(g);return!p||p.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.je.forEach((u,f)=>f.setReadTime(e));const o=new rf(e,n,this.Ye,this.je,s);return this.je=Tr(),this.Je=rh(),this.He=rh(),this.Ye=new mt(Le),o}Xe(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,n)?o.Qe(n,1):o.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new tT,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Pt(Le),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Pt(Le),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ue("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new tT),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function rh(){return new mt(ge.comparator)}function nT(){return new mt(ge.comparator)}const QN={asc:"ASCENDING",desc:"DESCENDING"},YN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},XN={and:"AND",or:"OR"};class WN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function op(r,e){return r.useProto3Json||Yh(e)?e:{value:e}}function Vh(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function k1(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function ZN(r,e){return Vh(r,e.toTimestamp())}function Ni(r){return Qe(!!r,49232),we.fromTimestamp(function(n){const s=os(n);return new lt(s.seconds,s.nanos)}(r))}function Wp(r,e){return lp(r,e).canonicalString()}function lp(r,e){const n=function(o){return new ft(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?n:n.child(e)}function V1(r){const e=ft.fromString(r);return Qe(j1(e),10190,{key:e.toString()}),e}function up(r,e){return Wp(r.databaseId,e.path)}function xm(r,e){const n=V1(e);if(n.get(1)!==r.databaseId.projectId)throw new fe(te.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new fe(te.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new ge(L1(n))}function P1(r,e){return Wp(r.databaseId,e)}function JN(r){const e=V1(r);return e.length===4?ft.emptyPath():L1(e)}function cp(r){return new ft(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function L1(r){return Qe(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function iT(r,e,n){return{name:up(r,e),fields:n.value.mapValue.fields}}function eO(r,e){let n;if("targetChange"in e){e.targetChange;const s=function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:Se(39313,{state:p})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(p,E){return p.useProto3Json?(Qe(E===void 0||typeof E=="string",58123),Wt.fromBase64String(E||"")):(Qe(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Wt.fromUint8Array(E||new Uint8Array))}(r,e.targetChange.resumeToken),f=e.targetChange.cause,m=f&&function(p){const E=p.code===void 0?te.UNKNOWN:O1(p.code);return new fe(E,p.message||"")}(f);n=new M1(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=xm(r,s.document.name),u=Ni(s.document.updateTime),f=s.document.createTime?Ni(s.document.createTime):we.min(),m=new gn({mapValue:{fields:s.document.fields}}),g=rn.newFoundDocument(o,u,f,m),p=s.targetIds||[],E=s.removedTargetIds||[];n=new yh(p,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=xm(r,s.document),u=s.readTime?Ni(s.readTime):we.min(),f=rn.newNoDocument(o,u),m=s.removedTargetIds||[];n=new yh([],m,f.key,f)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=xm(r,s.document),u=s.removedTargetIds||[];n=new yh([],u,o,null)}else{if(!("filter"in e))return Se(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new HN(o,u),m=s.targetId;n=new x1(m,f)}}return n}function tO(r,e){let n;if(e instanceof bu)n={update:iT(r,e.key,e.value)};else if(e instanceof N1)n={delete:up(r,e.key)};else if(e instanceof gs)n={update:iT(r,e.key,e.data),updateMask:cO(e.fieldMask)};else{if(!(e instanceof jN))return Se(16599,{Vt:e.type});n={verify:up(r,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(u,f){const m=f.transform;if(m instanceof Mh)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Ao)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof fu)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof kh)return{fieldPath:f.field.canonicalString(),increment:m.Ae};throw Se(20930,{transform:f.transform})}(0,s))),e.precondition.isNone||(n.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:ZN(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Se(27497)}(r,e.precondition)),n}function nO(r,e){return r&&r.length>0?(Qe(e!==void 0,14353),r.map(n=>function(o,u){let f=o.updateTime?Ni(o.updateTime):Ni(u);return f.isEqual(we.min())&&(f=Ni(u)),new LN(f,o.transformResults||[])}(n,e))):[]}function iO(r,e){return{documents:[P1(r,e.path)]}}function rO(r,e){const n={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=P1(r,o);const u=function(p){if(p.length!==0)return B1(Vi.create(p,"and"))}(e.filters);u&&(n.structuredQuery.where=u);const f=function(p){if(p.length!==0)return p.map(E=>function(w){return{field:ho(w.field),direction:oO(w.dir)}}(E))}(e.orderBy);f&&(n.structuredQuery.orderBy=f);const m=op(r,e.limit);return m!==null&&(n.structuredQuery.limit=m),e.startAt&&(n.structuredQuery.startAt=function(p){return{before:p.inclusive,values:p.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(p){return{before:!p.inclusive,values:p.position}}(e.endAt)),{ft:n,parent:o}}function sO(r){let e=JN(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){Qe(s===1,65062);const E=n.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];n.where&&(u=function(A){const w=U1(A);return w instanceof Vi&&m1(w)?w.getFilters():[w]}(n.where));let f=[];n.orderBy&&(f=function(A){return A.map(w=>function(q){return new xh(fo(q.field),function(G){switch(G){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(q.direction))}(w))}(n.orderBy));let m=null;n.limit&&(m=function(A){let w;return w=typeof A=="object"?A.value:A,Yh(w)?null:w}(n.limit));let g=null;n.startAt&&(g=function(A){const w=!!A.before,L=A.values||[];return new Oh(L,w)}(n.startAt));let p=null;return n.endAt&&(p=function(A){const w=!A.before,L=A.values||[];return new Oh(L,w)}(n.endAt)),SN(e,o,f,u,m,"F",g,p)}function aO(r,e){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se(28987,{purpose:o})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function U1(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=fo(n.unaryFilter.field);return Vt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=fo(n.unaryFilter.field);return Vt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=fo(n.unaryFilter.field);return Vt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=fo(n.unaryFilter.field);return Vt.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Se(61313);default:return Se(60726)}}(r):r.fieldFilter!==void 0?function(n){return Vt.create(fo(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Se(58110);default:return Se(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return Vi.create(n.compositeFilter.filters.map(s=>U1(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Se(1026)}}(n.compositeFilter.op))}(r):Se(30097,{filter:r})}function oO(r){return QN[r]}function lO(r){return YN[r]}function uO(r){return XN[r]}function ho(r){return{fieldPath:r.canonicalString()}}function fo(r){return Xt.fromServerFormat(r.fieldPath)}function B1(r){return r instanceof Vt?function(n){if(n.op==="=="){if(FE(n.value))return{unaryFilter:{field:ho(n.field),op:"IS_NAN"}};if(HE(n.value))return{unaryFilter:{field:ho(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(FE(n.value))return{unaryFilter:{field:ho(n.field),op:"IS_NOT_NAN"}};if(HE(n.value))return{unaryFilter:{field:ho(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ho(n.field),op:lO(n.op),value:n.value}}}(r):r instanceof Vi?function(n){const s=n.getFilters().map(o=>B1(o));return s.length===1?s[0]:{compositeFilter:{op:uO(n.op),filters:s}}}(r):Se(54877,{filter:r})}function cO(r){const e=[];return r.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function j1(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,n,s,o,u=we.min(),f=we.min(),m=Wt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new ts(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ts(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ts(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ts(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(e){this.yt=e}}function fO(r){const e=sO({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ap(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(){this.Cn=new mO}addToCollectionParentIndex(e,n){return this.Cn.add(n),ee.resolve()}getCollectionParents(e,n){return ee.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return ee.resolve()}deleteFieldIndex(e,n){return ee.resolve()}deleteAllFieldIndexes(e){return ee.resolve()}createTargetIndexes(e,n){return ee.resolve()}getDocumentsMatchingTarget(e,n){return ee.resolve(null)}getIndexType(e,n){return ee.resolve(0)}getFieldIndexes(e,n){return ee.resolve([])}getNextCollectionGroupToUpdate(e){return ee.resolve(null)}getMinOffset(e,n){return ee.resolve(as.min())}getMinOffsetFromCollectionGroup(e,n){return ee.resolve(as.min())}updateCollectionGroup(e,n,s){return ee.resolve()}updateIndexEntries(e,n){return ee.resolve()}}class mO{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n]||new Pt(ft.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Pt(ft.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},z1=41943040;class pn{static withCacheSize(e){return new pn(e,pn.DEFAULT_COLLECTION_PERCENTILE,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pn.DEFAULT_COLLECTION_PERCENTILE=10,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pn.DEFAULT=new pn(z1,pn.DEFAULT_COLLECTION_PERCENTILE,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pn.DISABLED=new pn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new wo(0)}static cr(){return new wo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT="LruGarbageCollector",pO=1048576;function aT([r,e],[n,s]){const o=Le(r,n);return o===0?Le(e,s):o}class gO{constructor(e){this.Ir=e,this.buffer=new Pt(aT),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();aT(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class yO{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ue(sT,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ko(n)?ue(sT,"Ignoring IndexedDB error during garbage collection: ",n):await Mo(n)}await this.Vr(3e5)})}}class _O{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return ee.resolve(Qh.ce);const s=new gO(n);return this.mr.forEachTarget(e,o=>s.Ar(o.sequenceNumber)).next(()=>this.mr.pr(e,o=>s.Ar(o))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),ee.resolve(rT)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rT):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,o,u,f,m,g,p;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,f=Date.now(),this.nthSequenceNumber(e,o))).next(A=>(s=A,m=Date.now(),this.removeTargets(e,s,n))).next(A=>(u=A,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(A=>(p=Date.now(),uo()<=Pe.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${A} documents in `+(p-g)+`ms
Total Duration: ${p-E}ms`),ee.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:A})))}}function vO(r,e){return new _O(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(){this.changes=new pa(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,rn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?ee.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(e,n,s,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,n))).next(o=>(s!==null&&iu(s.mutation,o,On.empty(),lt.now()),o))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Ue()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Ue()){const o=na();return this.populateOverlays(e,o,n).next(()=>this.computeViews(e,n,o,s).next(u=>{let f=Yl();return u.forEach((m,g)=>{f=f.insert(m,g.overlayedDocument)}),f}))}getOverlayedDocuments(e,n){const s=na();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Ue()))}populateOverlays(e,n,s){const o=[];return s.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((f,m)=>{n.set(f,m)})})}computeViews(e,n,s,o){let u=Tr();const f=nu(),m=function(){return nu()}();return n.forEach((g,p)=>{const E=s.get(p.key);o.has(p.key)&&(E===void 0||E.mutation instanceof gs)?u=u.insert(p.key,p):E!==void 0?(f.set(p.key,E.mutation.getFieldMask()),iu(E.mutation,p,E.mutation.getFieldMask(),lt.now())):f.set(p.key,On.empty())}),this.recalculateAndSaveOverlays(e,u).next(g=>(g.forEach((p,E)=>f.set(p,E)),n.forEach((p,E)=>m.set(p,new TO(E,f.get(p)??null))),m))}recalculateAndSaveOverlays(e,n){const s=nu();let o=new mt((f,m)=>f-m),u=Ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(f=>{for(const m of f)m.keys().forEach(g=>{const p=n.get(g);if(p===null)return;let E=s.get(g)||On.empty();E=m.applyToLocalView(p,E),s.set(g,E);const A=(o.get(m.batchId)||Ue()).add(g);o=o.insert(m.batchId,A)})}).next(()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),p=g.key,E=g.value,A=S1();E.forEach(w=>{if(!u.has(w)){const L=C1(n.get(w),s.get(w));L!==null&&A.set(w,L),u=u.add(w)}}),f.push(this.documentOverlayCache.saveOverlays(e,p,A))}return ee.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,o){return function(f){return ge.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):AN(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,o):this.getDocumentsMatchingCollectionQuery(e,n,s,o)}getNextDocuments(e,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,o-u.size):ee.resolve(na());let m=lu,g=u;return f.next(p=>ee.forEach(p,(E,A)=>(m<A.largestBatchId&&(m=A.largestBatchId),u.get(E)?ee.resolve():this.remoteDocumentCache.getEntry(e,E).next(w=>{g=g.insert(E,w)}))).next(()=>this.populateOverlays(e,p,u)).next(()=>this.computeViews(e,g,p,Ue())).next(E=>({batchId:m,changes:T1(E)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ge(n)).next(s=>{let o=Yl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,n,s,o){const u=n.collectionGroup;let f=Yl();return this.indexManager.getCollectionParents(e,u).next(m=>ee.forEach(m,g=>{const p=function(A,w){return new Wh(w,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(n,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,p,s,o).next(E=>{E.forEach((A,w)=>{f=f.insert(A,w)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(e,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,u,o))).next(f=>{u.forEach((g,p)=>{const E=p.getKey();f.get(E)===null&&(f=f.insert(E,rn.newInvalidDocument(E)))});let m=Yl();return f.forEach((g,p)=>{const E=u.get(g);E!==void 0&&iu(E.mutation,p,On.empty(),lt.now()),ef(n,p)&&(m=m.insert(g,p))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return ee.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:Ni(o.createTime)}}(n)),ee.resolve()}getNamedQuery(e,n){return ee.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(o){return{name:o.name,query:fO(o.bundledQuery),readTime:Ni(o.readTime)}}(n)),ee.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(){this.overlays=new mt(ge.comparator),this.qr=new Map}getOverlay(e,n){return ee.resolve(this.overlays.get(n))}getOverlays(e,n){const s=na();return ee.forEach(n,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((o,u)=>{this.St(e,n,u)}),ee.resolve()}removeOverlaysForBatchId(e,n,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.qr.delete(s)),ee.resolve()}getOverlaysForCollection(e,n,s){const o=na(),u=n.length+1,f=new ge(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const g=m.getNext().value,p=g.getKey();if(!n.isPrefixOf(p.path))break;p.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return ee.resolve(o)}getOverlaysForCollectionGroup(e,n,s,o){let u=new mt((p,E)=>p-E);const f=this.overlays.getIterator();for(;f.hasNext();){const p=f.getNext().value;if(p.getKey().getCollectionGroup()===n&&p.largestBatchId>s){let E=u.get(p.largestBatchId);E===null&&(E=na(),u=u.insert(p.largestBatchId,E)),E.set(p.getKey(),p)}}const m=na(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((p,E)=>m.set(p,E)),!(m.size()>=o)););return ee.resolve(m)}St(e,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new qN(n,s));let u=this.qr.get(n);u===void 0&&(u=Ue(),this.qr.set(n,u)),this.qr.set(n,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(){this.sessionToken=Wt.EMPTY_BYTE_STRING}getSessionToken(e){return ee.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,ee.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(){this.Qr=new Pt(Ht.$r),this.Ur=new Pt(Ht.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new Ht(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Gr(new Ht(e,n))}zr(e,n){e.forEach(s=>this.removeReference(s,n))}jr(e){const n=new ge(new ft([])),s=new Ht(n,e),o=new Ht(n,e+1),u=[];return this.Ur.forEachInRange([s,o],f=>{this.Gr(f),u.push(f.key)}),u}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ge(new ft([])),s=new Ht(n,e),o=new Ht(n,e+1);let u=Ue();return this.Ur.forEachInRange([s,o],f=>{u=u.add(f.key)}),u}containsKey(e){const n=new Ht(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ht{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ge.comparator(e.key,n.key)||Le(e.Yr,n.Yr)}static Kr(e,n){return Le(e.Yr,n.Yr)||ge.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Pt(Ht.$r)}checkEmpty(e){return ee.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new zN(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Zr=this.Zr.add(new Ht(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return ee.resolve(f)}lookupMutationBatch(e,n){return ee.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,o=this.ei(s),u=o<0?0:o;return ee.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return ee.resolve(this.mutationQueue.length===0?Hp:this.tr-1)}getAllMutationBatches(e){return ee.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ht(n,0),o=new Ht(n,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],f=>{const m=this.Xr(f.Yr);u.push(m)}),ee.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Pt(Le);return n.forEach(o=>{const u=new Ht(o,0),f=new Ht(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,f],m=>{s=s.add(m.Yr)})}),ee.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,o=s.length+1;let u=s;ge.isDocumentKey(u)||(u=u.child(""));const f=new Ht(new ge(u),0);let m=new Pt(Le);return this.Zr.forEachWhile(g=>{const p=g.key.path;return!!s.isPrefixOf(p)&&(p.length===o&&(m=m.add(g.Yr)),!0)},f),ee.resolve(this.ti(m))}ti(e){const n=[];return e.forEach(s=>{const o=this.Xr(s);o!==null&&n.push(o)}),n}removeMutationBatch(e,n){Qe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return ee.forEach(n.mutations,o=>{const u=new Ht(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Zr=s})}ir(e){}containsKey(e,n){const s=new Ht(n,0),o=this.Zr.firstAfterOrEqual(s);return ee.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,ee.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e){this.ri=e,this.docs=function(){return new mt(ge.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return ee.resolve(s?s.document.mutableCopy():rn.newInvalidDocument(n))}getEntries(e,n){let s=Tr();return n.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():rn.newInvalidDocument(o))}),ee.resolve(s)}getDocumentsMatchingQuery(e,n,s,o){let u=Tr();const f=n.path,m=new ge(f.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:p,value:{document:E}}=g.getNext();if(!f.isPrefixOf(p.path))break;p.path.length>f.length+1||eN(JD(E),s)<=0||(o.has(E.key)||ef(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return ee.resolve(u)}getAllFromCollectionGroup(e,n,s,o){Se(9500)}ii(e,n){return ee.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new CO(this)}getSize(e){return ee.resolve(this.size)}}class CO extends EO{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)}),ee.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e){this.persistence=e,this.si=new pa(n=>$p(n),Kp),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.oi=0,this._i=new Zp,this.targetCount=0,this.ai=wo.ur()}forEachTarget(e,n){return this.si.forEach((s,o)=>n(o)),ee.resolve()}getLastRemoteSnapshotVersion(e){return ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ee.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),ee.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),ee.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new wo(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,ee.resolve()}updateTargetData(e,n){return this.Pr(n),ee.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,ee.resolve()}removeTargets(e,n,s){let o=0;const u=[];return this.si.forEach((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.si.delete(f),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),ee.waitFor(u).next(()=>o)}getTargetCount(e){return ee.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return ee.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),ee.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(f=>{u.push(o.markPotentiallyOrphaned(e,f))}),ee.waitFor(u)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),ee.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return ee.resolve(s)}containsKey(e,n){return ee.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e,n){this.ui={},this.overlays={},this.ci=new Qh(0),this.li=!1,this.li=!0,this.hi=new bO,this.referenceDelegate=e(this),this.Pi=new DO(this),this.indexManager=new dO,this.remoteDocumentCache=function(o){return new IO(o)}(s=>this.referenceDelegate.Ti(s)),this.serializer=new hO(n),this.Ii=new AO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new wO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new RO(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){ue("MemoryPersistence","Starting transaction:",e);const o=new NO(this.ci.next());return this.referenceDelegate.Ei(),s(o).next(u=>this.referenceDelegate.di(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ai(e,n){return ee.or(Object.values(this.ui).map(s=>()=>s.containsKey(e,n)))}}class NO extends nN{constructor(e){super(),this.currentSequenceNumber=e}}class Jp{constructor(e){this.persistence=e,this.Ri=new Zp,this.Vi=null}static mi(e){return new Jp(e)}get fi(){if(this.Vi)return this.Vi;throw Se(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),ee.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),ee.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),ee.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(o=>this.fi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(o=>{o.forEach(u=>this.fi.add(u.toString()))}).next(()=>s.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ee.forEach(this.fi,s=>{const o=ge.fromPath(s);return this.gi(e,o).next(u=>{u||n.removeEntry(o,we.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return ee.or([()=>ee.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Ph{constructor(e,n){this.persistence=e,this.pi=new pa(s=>sN(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=vO(this,n)}static mi(e,n){return new Ph(e,n)}Ei(){}di(e){return ee.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(o=>s+o))}wr(e){let n=0;return this.pr(e,s=>{n++}).next(()=>n)}pr(e,n){return ee.forEach(this.pi,(s,o)=>this.br(e,s,o).next(u=>u?ee.resolve():n(o)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,f=>this.br(e,f,n).next(m=>{m||(s++,u.removeEntry(f,we.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),ee.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),ee.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),ee.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),ee.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=mh(e.data.value)),n}br(e,n,s){return ee.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.pi.get(n);return ee.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,n,s,o){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=o}static As(e,n){let s=Ue(),o=Ue();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new eg(e,n.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return oI()?8:iN(sn())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,o){const u={result:null};return this.ys(e,n).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.ws(e,n,o,s).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new OO;return this.Ss(e,n,f).next(m=>{if(u.result=m,this.Vs)return this.bs(e,n,f,m.size)})}).next(()=>u.result)}bs(e,n,s,o){return s.documentReadCount<this.fs?(uo()<=Pe.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",co(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),ee.resolve()):(uo()<=Pe.DEBUG&&ue("QueryEngine","Query:",co(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(uo()<=Pe.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",co(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ci(n))):ee.resolve())}ys(e,n){if(QE(n))return ee.resolve(null);let s=Ci(n);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=ap(n,null,"F"),s=Ci(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const f=Ue(...u);return this.ps.getDocuments(e,f).next(m=>this.indexManager.getMinOffset(e,s).next(g=>{const p=this.Ds(n,m);return this.Cs(n,p,f,g.readTime)?this.ys(e,ap(n,null,"F")):this.vs(e,p,n,g)}))})))}ws(e,n,s,o){return QE(n)||o.isEqual(we.min())?ee.resolve(null):this.ps.getDocuments(e,s).next(u=>{const f=this.Ds(n,u);return this.Cs(n,f,s,o)?ee.resolve(null):(uo()<=Pe.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),co(n)),this.vs(e,f,n,ZD(o,lu)).next(m=>m))})}Ds(e,n){let s=new Pt(v1(e));return n.forEach((o,u)=>{ef(e,u)&&(s=s.add(u))}),s}Cs(e,n,s,o){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const u=e.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,n,s){return uo()<=Pe.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",co(n)),this.ps.getDocumentsMatchingQuery(e,n,as.min(),s)}vs(e,n,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next(u=>(n.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg="LocalStore",MO=3e8;class kO{constructor(e,n,s,o){this.persistence=e,this.Fs=n,this.serializer=o,this.Ms=new mt(Le),this.xs=new pa(u=>$p(u),Kp),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new SO(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function VO(r,e,n,s){return new kO(r,e,n,s)}async function H1(r,e){const n=Re(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,n.Bs(e),n.mutationQueue.getAllMutationBatches(s))).next(u=>{const f=[],m=[];let g=Ue();for(const p of o){f.push(p.batchId);for(const E of p.mutations)g=g.add(E.key)}for(const p of u){m.push(p.batchId);for(const E of p.mutations)g=g.add(E.key)}return n.localDocuments.getDocuments(s,g).next(p=>({Ls:p,removedBatchIds:f,addedBatchIds:m}))})})}function PO(r,e){const n=Re(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=n.Ns.newChangeBuffer({trackRemovals:!0});return function(m,g,p,E){const A=p.batch,w=A.keys();let L=ee.resolve();return w.forEach(q=>{L=L.next(()=>E.getEntry(g,q)).next(Y=>{const G=p.docVersions.get(q);Qe(G!==null,48541),Y.version.compareTo(G)<0&&(A.applyToRemoteDocument(Y,p),Y.isValidDocument()&&(Y.setReadTime(p.commitVersion),E.addEntry(Y)))})}),L.next(()=>m.mutationQueue.removeMutationBatch(g,A))}(n,s,e,u).next(()=>u.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let g=Ue();for(let p=0;p<m.mutationResults.length;++p)m.mutationResults[p].transformResults.length>0&&(g=g.add(m.batch.mutations[p].key));return g}(e))).next(()=>n.localDocuments.getDocuments(s,o))})}function F1(r){const e=Re(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function LO(r,e){const n=Re(r),s=e.snapshotVersion;let o=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const f=n.Ns.newChangeBuffer({trackRemovals:!0});o=n.Ms;const m=[];e.targetChanges.forEach((E,A)=>{const w=o.get(A);if(!w)return;m.push(n.Pi.removeMatchingKeys(u,E.removedDocuments,A).next(()=>n.Pi.addMatchingKeys(u,E.addedDocuments,A)));let L=w.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(A)!==null?L=L.withResumeToken(Wt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):E.resumeToken.approximateByteSize()>0&&(L=L.withResumeToken(E.resumeToken,s)),o=o.insert(A,L),function(Y,G,Q){return Y.resumeToken.approximateByteSize()===0||G.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=MO?!0:Q.addedDocuments.size+Q.modifiedDocuments.size+Q.removedDocuments.size>0}(w,L,E)&&m.push(n.Pi.updateTargetData(u,L))});let g=Tr(),p=Ue();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))}),m.push(UO(u,f,e.documentUpdates).next(E=>{g=E.ks,p=E.qs})),!s.isEqual(we.min())){const E=n.Pi.getLastRemoteSnapshotVersion(u).next(A=>n.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(E)}return ee.waitFor(m).next(()=>f.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,g,p)).next(()=>g)}).then(u=>(n.Ms=o,u))}function UO(r,e,n){let s=Ue(),o=Ue();return n.forEach(u=>s=s.add(u)),e.getEntries(r,s).next(u=>{let f=Tr();return n.forEach((m,g)=>{const p=u.get(m);g.isFoundDocument()!==p.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(we.min())?(e.removeEntry(m,g.readTime),f=f.insert(m,g)):!p.isValidDocument()||g.version.compareTo(p.version)>0||g.version.compareTo(p.version)===0&&p.hasPendingWrites?(e.addEntry(g),f=f.insert(m,g)):ue(tg,"Ignoring outdated watch update for ",m,". Current version:",p.version," Watch version:",g.version)}),{ks:f,qs:o}})}function BO(r,e){const n=Re(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Hp),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function jO(r,e){const n=Re(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.Pi.getTargetData(s,e).next(u=>u?(o=u,ee.resolve(o)):n.Pi.allocateTargetId(s).next(f=>(o=new ts(e,f,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(e,s.targetId)),s})}async function hp(r,e,n){const s=Re(r),o=s.Ms.get(e),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!ko(f))throw f;ue(tg,`Failed to update sequence numbers for target ${e}: ${f}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function oT(r,e,n){const s=Re(r);let o=we.min(),u=Ue();return s.persistence.runTransaction("Execute query","readwrite",f=>function(g,p,E){const A=Re(g),w=A.xs.get(E);return w!==void 0?ee.resolve(A.Ms.get(w)):A.Pi.getTargetData(p,E)}(s,f,Ci(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(f,m.targetId).next(g=>{u=g})}).next(()=>s.Fs.getDocumentsMatchingQuery(f,e,n?o:we.min(),n?u:Ue())).next(m=>(zO(s,bN(e),m),{documents:m,Qs:u})))}function zO(r,e,n){let s=r.Os.get(e)||we.min();n.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.Os.set(e,s)}class lT{constructor(){this.activeTargetIds=ON()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qO{constructor(){this.Mo=new lT,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new lT,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT="ConnectivityMonitor";class cT{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ue(uT,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ue(uT,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sh=null;function fp(){return sh===null?sh=function(){return 268435456+Math.round(2147483648*Math.random())}():sh++,"0x"+sh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm="RestConnection",FO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class GO{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Dh?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,n,s,o,u){const f=fp(),m=this.zo(e,n.toUriEncodedString());ue(Mm,`Sending RPC '${e}' ${f}:`,m,s);const g={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(g,o,u);const{host:p}=new URL(m),E=Co(p);return this.Jo(e,m,g,s,E).then(A=>(ue(Mm,`Received RPC '${e}' ${f}: `,A),A),A=>{throw vo(Mm,`RPC '${e}' ${f} failed with error: `,A,"url: ",m,"request:",s),A})}Ho(e,n,s,o,u,f){return this.Go(e,n,s,o,u)}jo(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}zo(e,n){const s=FO[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn="WebChannelConnection";class KO extends GO{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,o,u){const f=fp();return new Promise((m,g)=>{const p=new Q0;p.setWithCredentials(!0),p.listenOnce(Y0.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case dh.NO_ERROR:const A=p.getResponseJson();ue(tn,`XHR for RPC '${e}' ${f} received:`,JSON.stringify(A)),m(A);break;case dh.TIMEOUT:ue(tn,`RPC '${e}' ${f} timed out`),g(new fe(te.DEADLINE_EXCEEDED,"Request time out"));break;case dh.HTTP_ERROR:const w=p.getStatus();if(ue(tn,`RPC '${e}' ${f} failed with status:`,w,"response text:",p.getResponseText()),w>0){let L=p.getResponseJson();Array.isArray(L)&&(L=L[0]);const q=L?.error;if(q&&q.status&&q.message){const Y=function(Q){const se=Q.toLowerCase().replace(/_/g,"-");return Object.values(te).indexOf(se)>=0?se:te.UNKNOWN}(q.status);g(new fe(Y,q.message))}else g(new fe(te.UNKNOWN,"Server responded with status "+p.getStatus()))}else g(new fe(te.UNAVAILABLE,"Connection failed."));break;default:Se(9055,{l_:e,streamId:f,h_:p.getLastErrorCode(),P_:p.getLastError()})}}finally{ue(tn,`RPC '${e}' ${f} completed.`)}});const E=JSON.stringify(o);ue(tn,`RPC '${e}' ${f} sending request:`,o),p.send(n,"POST",E,s,15)})}T_(e,n,s){const o=fp(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=Z0(),m=W0(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(g.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(g.useFetchStreams=!0),this.jo(g.initMessageHeaders,n,s),g.encodeInitMessageHeaders=!0;const E=u.join("");ue(tn,`Creating RPC '${e}' stream ${o}: ${E}`,g);const A=f.createWebChannel(E,g);this.I_(A);let w=!1,L=!1;const q=new $O({Yo:G=>{L?ue(tn,`Not sending because RPC '${e}' stream ${o} is closed:`,G):(w||(ue(tn,`Opening RPC '${e}' stream ${o} transport.`),A.open(),w=!0),ue(tn,`RPC '${e}' stream ${o} sending:`,G),A.send(G))},Zo:()=>A.close()}),Y=(G,Q,se)=>{G.listen(Q,ie=>{try{se(ie)}catch(pe){setTimeout(()=>{throw pe},0)}})};return Y(A,Ql.EventType.OPEN,()=>{L||(ue(tn,`RPC '${e}' stream ${o} transport opened.`),q.o_())}),Y(A,Ql.EventType.CLOSE,()=>{L||(L=!0,ue(tn,`RPC '${e}' stream ${o} transport closed`),q.a_(),this.E_(A))}),Y(A,Ql.EventType.ERROR,G=>{L||(L=!0,vo(tn,`RPC '${e}' stream ${o} transport errored. Name:`,G.name,"Message:",G.message),q.a_(new fe(te.UNAVAILABLE,"The operation could not be completed")))}),Y(A,Ql.EventType.MESSAGE,G=>{if(!L){const Q=G.data[0];Qe(!!Q,16349);const se=Q,ie=se?.error||se[0]?.error;if(ie){ue(tn,`RPC '${e}' stream ${o} received error:`,ie);const pe=ie.status;let ce=function(R){const I=It[R];if(I!==void 0)return O1(I)}(pe),ye=ie.message;ce===void 0&&(ce=te.INTERNAL,ye="Unknown error status: "+pe+" with message "+ie.message),L=!0,q.a_(new fe(ce,ye)),A.close()}else ue(tn,`RPC '${e}' stream ${o} received:`,Q),q.u_(Q)}}),Y(m,X0.STAT_EVENT,G=>{G.stat===ep.PROXY?ue(tn,`RPC '${e}' stream ${o} detected buffering proxy`):G.stat===ep.NOPROXY&&ue(tn,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{q.__()},0),q}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function km(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(r){return new WN(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(e,n,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-s);o>0&&ue("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT="PersistentStream";class $1{constructor(e,n,s,o,u,f,m,g){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new G1(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===te.RESOURCE_EXHAUSTED?(Er(n.toString()),Er("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===te.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.D_===n&&this.G_(s,o)},s=>{e(()=>{const o=new fe(te.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)})})}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{s(()=>this.listener.Xo())}),this.stream.t_(()=>{s(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(o=>{s(()=>this.z_(o))}),this.stream.onMessage(o=>{s(()=>++this.F_==1?this.J_(o):this.onNext(o))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return ue(hT,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(ue(hT,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class QO extends $1{constructor(e,n,s,o,u,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=eO(this.serializer,e),s=function(u){if(!("targetChange"in u))return we.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?we.min():f.readTime?Ni(f.readTime):we.min()}(e);return this.listener.H_(n,s)}Y_(e){const n={};n.database=cp(this.serializer),n.addTarget=function(u,f){let m;const g=f.target;if(m=sp(g)?{documents:iO(u,g)}:{query:rO(u,g).ft},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=k1(u,f.resumeToken);const p=op(u,f.expectedCount);p!==null&&(m.expectedCount=p)}else if(f.snapshotVersion.compareTo(we.min())>0){m.readTime=Vh(u,f.snapshotVersion.toTimestamp());const p=op(u,f.expectedCount);p!==null&&(m.expectedCount=p)}return m}(this.serializer,e);const s=aO(this.serializer,e);s&&(n.labels=s),this.q_(n)}Z_(e){const n={};n.database=cp(this.serializer),n.removeTarget=e,this.q_(n)}}class YO extends $1{constructor(e,n,s,o,u,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Qe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Qe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Qe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=nO(e.writeResults,e.commitTime),s=Ni(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=cp(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>tO(this.serializer,s))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{}class WO extends XO{constructor(e,n,s,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new fe(te.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.Go(e,lp(n,s),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new fe(te.UNKNOWN,u.toString())})}Ho(e,n,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,m])=>this.connection.Ho(e,lp(n,s),o,f,m,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new fe(te.UNKNOWN,f.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class ZO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Er(n),this.aa=!1):ue("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la="RemoteStore";class JO{constructor(e,n,s,o,u){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo(f=>{s.enqueueAndForget(async()=>{ga(this)&&(ue(la,"Restarting streams for network reachability change."),await async function(g){const p=Re(g);p.Ea.add(4),await Iu(p),p.Ra.set("Unknown"),p.Ea.delete(4),await af(p)}(this))})}),this.Ra=new ZO(s,o)}}async function af(r){if(ga(r))for(const e of r.da)await e(!0)}async function Iu(r){for(const e of r.da)await e(!1)}function K1(r,e){const n=Re(r);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),sg(n)?rg(n):Vo(n).O_()&&ig(n,e))}function ng(r,e){const n=Re(r),s=Vo(n);n.Ia.delete(e),s.O_()&&Q1(n,e),n.Ia.size===0&&(s.O_()?s.L_():ga(n)&&n.Ra.set("Unknown"))}function ig(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Vo(r).Y_(e)}function Q1(r,e){r.Va.Ue(e),Vo(r).Z_(e)}function rg(r){r.Va=new KN({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Vo(r).start(),r.Ra.ua()}function sg(r){return ga(r)&&!Vo(r).x_()&&r.Ia.size>0}function ga(r){return Re(r).Ea.size===0}function Y1(r){r.Va=void 0}async function ex(r){r.Ra.set("Online")}async function tx(r){r.Ia.forEach((e,n)=>{ig(r,e)})}async function nx(r,e){Y1(r),sg(r)?(r.Ra.ha(e),rg(r)):r.Ra.set("Unknown")}async function ix(r,e,n){if(r.Ra.set("Online"),e instanceof M1&&e.state===2&&e.cause)try{await async function(o,u){const f=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.Ia.delete(m),o.Va.removeTarget(m))}(r,e)}catch(s){ue(la,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Lh(r,s)}else if(e instanceof yh?r.Va.Ze(e):e instanceof x1?r.Va.st(e):r.Va.tt(e),!n.isEqual(we.min()))try{const s=await F1(r.localStore);n.compareTo(s)>=0&&await function(u,f){const m=u.Va.Tt(f);return m.targetChanges.forEach((g,p)=>{if(g.resumeToken.approximateByteSize()>0){const E=u.Ia.get(p);E&&u.Ia.set(p,E.withResumeToken(g.resumeToken,f))}}),m.targetMismatches.forEach((g,p)=>{const E=u.Ia.get(g);if(!E)return;u.Ia.set(g,E.withResumeToken(Wt.EMPTY_BYTE_STRING,E.snapshotVersion)),Q1(u,g);const A=new ts(E.target,g,p,E.sequenceNumber);ig(u,A)}),u.remoteSyncer.applyRemoteEvent(m)}(r,n)}catch(s){ue(la,"Failed to raise snapshot:",s),await Lh(r,s)}}async function Lh(r,e,n){if(!ko(e))throw e;r.Ea.add(1),await Iu(r),r.Ra.set("Offline"),n||(n=()=>F1(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{ue(la,"Retrying IndexedDB access"),await n(),r.Ea.delete(1),await af(r)})}function X1(r,e){return e().catch(n=>Lh(r,n,e))}async function of(r){const e=Re(r),n=cs(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Hp;for(;rx(e);)try{const o=await BO(e.localStore,s);if(o===null){e.Ta.length===0&&n.L_();break}s=o.batchId,sx(e,o)}catch(o){await Lh(e,o)}W1(e)&&Z1(e)}function rx(r){return ga(r)&&r.Ta.length<10}function sx(r,e){r.Ta.push(e);const n=cs(r);n.O_()&&n.X_&&n.ea(e.mutations)}function W1(r){return ga(r)&&!cs(r).x_()&&r.Ta.length>0}function Z1(r){cs(r).start()}async function ax(r){cs(r).ra()}async function ox(r){const e=cs(r);for(const n of r.Ta)e.ea(n.mutations)}async function lx(r,e,n){const s=r.Ta.shift(),o=Yp.from(s,e,n);await X1(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await of(r)}async function ux(r,e){e&&cs(r).X_&&await async function(s,o){if(function(f){return FN(f)&&f!==te.ABORTED}(o.code)){const u=s.Ta.shift();cs(s).B_(),await X1(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await of(s)}}(r,e),W1(r)&&Z1(r)}async function fT(r,e){const n=Re(r);n.asyncQueue.verifyOperationInProgress(),ue(la,"RemoteStore received new credentials");const s=ga(n);n.Ea.add(3),await Iu(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await af(n)}async function cx(r,e){const n=Re(r);e?(n.Ea.delete(2),await af(n)):e||(n.Ea.add(2),await Iu(n),n.Ra.set("Unknown"))}function Vo(r){return r.ma||(r.ma=function(n,s,o){const u=Re(n);return u.sa(),new QO(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Xo:ex.bind(null,r),t_:tx.bind(null,r),r_:nx.bind(null,r),H_:ix.bind(null,r)}),r.da.push(async e=>{e?(r.ma.B_(),sg(r)?rg(r):r.Ra.set("Unknown")):(await r.ma.stop(),Y1(r))})),r.ma}function cs(r){return r.fa||(r.fa=function(n,s,o){const u=Re(n);return u.sa(),new YO(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:ax.bind(null,r),r_:ux.bind(null,r),ta:ox.bind(null,r),na:lx.bind(null,r)}),r.da.push(async e=>{e?(r.fa.B_(),await of(r)):(await r.fa.stop(),r.Ta.length>0&&(ue(la,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))})),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,n,s,o,u){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new rs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,u){const f=Date.now()+s,m=new ag(e,n,f,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(te.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function og(r,e){if(Er("AsyncQueue",`${e}: ${r}`),ko(r))return new fe(te.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{static emptySet(e){return new yo(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||ge.comparator(n.key,s.key):(n,s)=>ge.comparator(n.key,s.key),this.keyedMap=Yl(),this.sortedSet=new mt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof yo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new yo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(){this.ga=new mt(ge.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Se(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,s)=>{e.push(s)}),e}}class bo{constructor(e,n,s,o,u,f,m,g,p){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=p}static fromInitialDocuments(e,n,s,o,u){const f=[];return n.forEach(m=>{f.push({type:0,doc:m})}),new bo(e,n,yo.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class fx{constructor(){this.queries=mT(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=Re(n),u=o.queries;o.queries=mT(),u.forEach((f,m)=>{for(const g of m.Sa)g.onError(s)})})(this,new fe(te.ABORTED,"Firestore shutting down"))}}function mT(){return new pa(r=>_1(r),Jh)}async function J1(r,e){const n=Re(r);let s=3;const o=e.query;let u=n.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new hx,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await n.onListen(o,!0);break;case 1:u.wa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=og(f,`Initialization of query '${co(e.query)}' failed`);return void e.onError(m)}n.queries.set(o,u),u.Sa.push(e),e.va(n.onlineState),u.wa&&e.Fa(u.wa)&&lg(n)}async function eS(r,e){const n=Re(r),s=e.query;let o=3;const u=n.queries.get(s);if(u){const f=u.Sa.indexOf(e);f>=0&&(u.Sa.splice(f,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function dx(r,e){const n=Re(r);let s=!1;for(const o of e){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.Sa)m.Fa(o)&&(s=!0);f.wa=o}}s&&lg(n)}function mx(r,e,n){const s=Re(r),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(n);s.queries.delete(e)}function lg(r){r.Ca.forEach(e=>{e.next()})}var dp,pT;(pT=dp||(dp={})).Ma="default",pT.Cache="cache";class tS{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new bo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=bo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==dp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.key=e}}class iS{constructor(e){this.key=e}}class px{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ue(),this.mutatedKeys=Ue(),this.eu=v1(e),this.tu=new yo(this.eu)}get nu(){return this.Ya}ru(e,n){const s=n?n.iu:new dT,o=n?n.tu:this.tu;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,p=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,A)=>{const w=o.get(E),L=ef(this.query,A)?A:null,q=!!w&&this.mutatedKeys.has(w.key),Y=!!L&&(L.hasLocalMutations||this.mutatedKeys.has(L.key)&&L.hasCommittedMutations);let G=!1;w&&L?w.data.isEqual(L.data)?q!==Y&&(s.track({type:3,doc:L}),G=!0):this.su(w,L)||(s.track({type:2,doc:L}),G=!0,(g&&this.eu(L,g)>0||p&&this.eu(L,p)<0)&&(m=!0)):!w&&L?(s.track({type:0,doc:L}),G=!0):w&&!L&&(s.track({type:1,doc:w}),G=!0,(g||p)&&(m=!0)),G&&(L?(f=f.add(L),u=Y?u.add(E):u.delete(E)):(f=f.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{tu:f,iu:s,Cs:m,mutatedKeys:u}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const f=e.iu.ya();f.sort((E,A)=>function(L,q){const Y=G=>{switch(G){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se(20277,{Rt:G})}};return Y(L)-Y(q)}(E.type,A.type)||this.eu(E.doc,A.doc)),this.ou(s),o=o??!1;const m=n&&!o?this._u():[],g=this.Xa.size===0&&this.current&&!o?1:0,p=g!==this.Za;return this.Za=g,f.length!==0||p?{snapshot:new bo(this.query,e.tu,u,f,e.mutatedKeys,g===0,p,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new dT,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ue(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))});const n=[];return e.forEach(s=>{this.Xa.has(s)||n.push(new iS(s))}),this.Xa.forEach(s=>{e.has(s)||n.push(new nS(s))}),n}cu(e){this.Ya=e.Qs,this.Xa=Ue();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return bo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ug="SyncEngine";class gx{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class yx{constructor(e){this.key=e,this.hu=!1}}class _x{constructor(e,n,s,o,u,f){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new pa(m=>_1(m),Jh),this.Iu=new Map,this.Eu=new Set,this.du=new mt(ge.comparator),this.Au=new Map,this.Ru=new Zp,this.Vu={},this.mu=new Map,this.fu=wo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function vx(r,e,n=!0){const s=uS(r);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await rS(s,e,n,!0),o}async function Ex(r,e){const n=uS(r);await rS(n,e,!0,!1)}async function rS(r,e,n,s){const o=await jO(r.localStore,Ci(e)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await Tx(r,e,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&K1(r.remoteStore,o),m}async function Tx(r,e,n,s,o){r.pu=(A,w,L)=>async function(Y,G,Q,se){let ie=G.view.ru(Q);ie.Cs&&(ie=await oT(Y.localStore,G.query,!1).then(({documents:x})=>G.view.ru(x,ie)));const pe=se&&se.targetChanges.get(G.targetId),ce=se&&se.targetMismatches.get(G.targetId)!=null,ye=G.view.applyChanges(ie,Y.isPrimaryClient,pe,ce);return yT(Y,G.targetId,ye.au),ye.snapshot}(r,A,w,L);const u=await oT(r.localStore,e,!0),f=new px(e,u.Qs),m=f.ru(u.documents),g=Ru.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),p=f.applyChanges(m,r.isPrimaryClient,g);yT(r,n,p.au);const E=new gx(e,n,f);return r.Tu.set(e,E),r.Iu.has(n)?r.Iu.get(n).push(e):r.Iu.set(n,[e]),p.snapshot}async function Sx(r,e,n){const s=Re(r),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter(f=>!Jh(f,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await hp(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&ng(s.remoteStore,o.targetId),mp(s,o.targetId)}).catch(Mo)):(mp(s,o.targetId),await hp(s.localStore,o.targetId,!0))}async function Ax(r,e){const n=Re(r),s=n.Tu.get(e),o=n.Iu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),ng(n.remoteStore,s.targetId))}async function wx(r,e,n){const s=Ox(r);try{const o=await function(f,m){const g=Re(f),p=lt.now(),E=m.reduce((L,q)=>L.add(q.key),Ue());let A,w;return g.persistence.runTransaction("Locally write mutations","readwrite",L=>{let q=Tr(),Y=Ue();return g.Ns.getEntries(L,E).next(G=>{q=G,q.forEach((Q,se)=>{se.isValidDocument()||(Y=Y.add(Q))})}).next(()=>g.localDocuments.getOverlayedDocuments(L,q)).next(G=>{A=G;const Q=[];for(const se of m){const ie=BN(se,A.get(se.key).overlayedDocument);ie!=null&&Q.push(new gs(se.key,ie,h1(ie.value.mapValue),Di.exists(!0)))}return g.mutationQueue.addMutationBatch(L,p,Q,m)}).next(G=>{w=G;const Q=G.applyToLocalDocumentSet(A,Y);return g.documentOverlayCache.saveOverlays(L,G.batchId,Q)})}).then(()=>({batchId:w.batchId,changes:T1(A)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(f,m,g){let p=f.Vu[f.currentUser.toKey()];p||(p=new mt(Le)),p=p.insert(m,g),f.Vu[f.currentUser.toKey()]=p}(s,o.batchId,n),await Cu(s,o.changes),await of(s.remoteStore)}catch(o){const u=og(o,"Failed to persist write");n.reject(u)}}async function sS(r,e){const n=Re(r);try{const s=await LO(n.localStore,e);e.targetChanges.forEach((o,u)=>{const f=n.Au.get(u);f&&(Qe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?Qe(f.hu,14607):o.removedDocuments.size>0&&(Qe(f.hu,42227),f.hu=!1))}),await Cu(n,s,e)}catch(s){await Mo(s)}}function gT(r,e,n){const s=Re(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Tu.forEach((u,f)=>{const m=f.view.va(e);m.snapshot&&o.push(m.snapshot)}),function(f,m){const g=Re(f);g.onlineState=m;let p=!1;g.queries.forEach((E,A)=>{for(const w of A.Sa)w.va(m)&&(p=!0)}),p&&lg(g)}(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function bx(r,e,n){const s=Re(r);s.sharedClientState.updateQueryState(e,"rejected",n);const o=s.Au.get(e),u=o&&o.key;if(u){let f=new mt(ge.comparator);f=f.insert(u,rn.newNoDocument(u,we.min()));const m=Ue().add(u),g=new rf(we.min(),new Map,new mt(Le),f,m);await sS(s,g),s.du=s.du.remove(u),s.Au.delete(e),cg(s)}else await hp(s.localStore,e,!1).then(()=>mp(s,e,n)).catch(Mo)}async function Rx(r,e){const n=Re(r),s=e.batch.batchId;try{const o=await PO(n.localStore,e);oS(n,s,null),aS(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Cu(n,o)}catch(o){await Mo(o)}}async function Ix(r,e,n){const s=Re(r);try{const o=await function(f,m){const g=Re(f);return g.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let E;return g.mutationQueue.lookupMutationBatch(p,m).next(A=>(Qe(A!==null,37113),E=A.keys(),g.mutationQueue.removeMutationBatch(p,A))).next(()=>g.mutationQueue.performConsistencyCheck(p)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(p,E,m)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,E)).next(()=>g.localDocuments.getDocuments(p,E))})}(s.localStore,e);oS(s,e,n),aS(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Cu(s,o)}catch(o){await Mo(o)}}function aS(r,e){(r.mu.get(e)||[]).forEach(n=>{n.resolve()}),r.mu.delete(e)}function oS(r,e,n){const s=Re(r);let o=s.Vu[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(n?u.reject(n):u.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function mp(r,e,n=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Iu.get(e))r.Tu.delete(s),n&&r.Pu.yu(s,n);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach(s=>{r.Ru.containsKey(s)||lS(r,s)})}function lS(r,e){r.Eu.delete(e.path.canonicalString());const n=r.du.get(e);n!==null&&(ng(r.remoteStore,n),r.du=r.du.remove(e),r.Au.delete(n),cg(r))}function yT(r,e,n){for(const s of n)s instanceof nS?(r.Ru.addReference(s.key,e),Cx(r,s)):s instanceof iS?(ue(ug,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,e),r.Ru.containsKey(s.key)||lS(r,s.key)):Se(19791,{wu:s})}function Cx(r,e){const n=e.key,s=n.path.canonicalString();r.du.get(n)||r.Eu.has(s)||(ue(ug,"New document in limbo: "+n),r.Eu.add(s),cg(r))}function cg(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const n=new ge(ft.fromString(e)),s=r.fu.next();r.Au.set(s,new yx(n)),r.du=r.du.insert(n,s),K1(r.remoteStore,new ts(Ci(Zh(n.path)),s,"TargetPurposeLimboResolution",Qh.ce))}}async function Cu(r,e,n){const s=Re(r),o=[],u=[],f=[];s.Tu.isEmpty()||(s.Tu.forEach((m,g)=>{f.push(s.pu(g,e,n).then(p=>{if((p||n)&&s.isPrimaryClient){const E=p?!p.fromCache:n?.targetChanges.get(g.targetId)?.current;s.sharedClientState.updateQueryState(g.targetId,E?"current":"not-current")}if(p){o.push(p);const E=eg.As(g.targetId,p);u.push(E)}}))}),await Promise.all(f),s.Pu.H_(o),await async function(g,p){const E=Re(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>ee.forEach(p,w=>ee.forEach(w.Es,L=>E.persistence.referenceDelegate.addReference(A,w.targetId,L)).next(()=>ee.forEach(w.ds,L=>E.persistence.referenceDelegate.removeReference(A,w.targetId,L)))))}catch(A){if(!ko(A))throw A;ue(tg,"Failed to update sequence numbers: "+A)}for(const A of p){const w=A.targetId;if(!A.fromCache){const L=E.Ms.get(w),q=L.snapshotVersion,Y=L.withLastLimboFreeSnapshotVersion(q);E.Ms=E.Ms.insert(w,Y)}}}(s.localStore,u))}async function Dx(r,e){const n=Re(r);if(!n.currentUser.isEqual(e)){ue(ug,"User change. New user:",e.toKey());const s=await H1(n.localStore,e);n.currentUser=e,function(u,f){u.mu.forEach(m=>{m.forEach(g=>{g.reject(new fe(te.CANCELLED,f))})}),u.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Cu(n,s.Ls)}}function Nx(r,e){const n=Re(r),s=n.Au.get(e);if(s&&s.hu)return Ue().add(s.key);{let o=Ue();const u=n.Iu.get(e);if(!u)return o;for(const f of u){const m=n.Tu.get(f);o=o.unionWith(m.view.nu)}return o}}function uS(r){const e=Re(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=sS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Nx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bx.bind(null,e),e.Pu.H_=dx.bind(null,e.eventManager),e.Pu.yu=mx.bind(null,e.eventManager),e}function Ox(r){const e=Re(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Rx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ix.bind(null,e),e}class Uh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=sf(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return VO(this.persistence,new xO,e.initialUser,this.serializer)}Cu(e){return new q1(Jp.mi,this.serializer)}Du(e){return new qO}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Uh.provider={build:()=>new Uh};class xx extends Uh{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Qe(this.persistence.referenceDelegate instanceof Ph,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new yO(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?pn.withCacheSize(this.cacheSizeBytes):pn.DEFAULT;return new q1(s=>Ph.mi(s,n),this.serializer)}}class pp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>gT(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Dx.bind(null,this.syncEngine),await cx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new fx}()}createDatastore(e){const n=sf(e.databaseInfo.databaseId),s=function(u){return new KO(u)}(e.databaseInfo);return function(u,f,m,g){return new WO(u,f,m,g)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,o,u,f,m){return new JO(s,o,u,f,m)}(this.localStore,this.datastore,e.asyncQueue,n=>gT(this.syncEngine,n,0),function(){return cT.v()?new cT:new HO}())}createSyncEngine(e,n){return function(o,u,f,m,g,p,E){const A=new _x(o,u,f,m,g,p);return E&&(A.gu=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await async function(n){const s=Re(n);ue(la,"RemoteStore shutting down."),s.Ea.add(5),await Iu(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}pp.provider={build:()=>new pp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Er("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="FirestoreClient";class Mx{constructor(e,n,s,o,u){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=nn.UNAUTHENTICATED,this.clientId=zp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async f=>{ue(hs,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(ue(hs,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=og(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Vm(r,e){r.asyncQueue.verifyOperationInProgress(),ue(hs,"Initializing OfflineComponentProvider");const n=r.configuration;await e.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await H1(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function _T(r,e){r.asyncQueue.verifyOperationInProgress();const n=await kx(r);ue(hs,"Initializing OnlineComponentProvider"),await e.initialize(n,r.configuration),r.setCredentialChangeListener(s=>fT(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>fT(e.remoteStore,o)),r._onlineComponents=e}async function kx(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ue(hs,"Using user provided OfflineComponentProvider");try{await Vm(r,r._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(o){return o.name==="FirebaseError"?o.code===te.FAILED_PRECONDITION||o.code===te.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;vo("Error using user provided cache. Falling back to memory cache: "+n),await Vm(r,new Uh)}}else ue(hs,"Using default OfflineComponentProvider"),await Vm(r,new xx(void 0));return r._offlineComponents}async function hS(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ue(hs,"Using user provided OnlineComponentProvider"),await _T(r,r._uninitializedComponentsProvider._online)):(ue(hs,"Using default OnlineComponentProvider"),await _T(r,new pp))),r._onlineComponents}function Vx(r){return hS(r).then(e=>e.syncEngine)}async function gp(r){const e=await hS(r),n=e.eventManager;return n.onListen=vx.bind(null,e.syncEngine),n.onUnlisten=Sx.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Ex.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Ax.bind(null,e.syncEngine),n}function Px(r,e,n={}){const s=new rs;return r.asyncQueue.enqueueAndForget(async()=>function(u,f,m,g,p){const E=new cS({next:w=>{E.Nu(),f.enqueueAndForget(()=>eS(u,A));const L=w.docs.has(m);!L&&w.fromCache?p.reject(new fe(te.UNAVAILABLE,"Failed to get document because the client is offline.")):L&&w.fromCache&&g&&g.source==="server"?p.reject(new fe(te.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):p.resolve(w)},error:w=>p.reject(w)}),A=new tS(Zh(m.path),E,{includeMetadataChanges:!0,qa:!0});return J1(u,A)}(await gp(r),r.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS="firestore.googleapis.com",ET=!0;class TT{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new fe(te.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=dS,this.ssl=ET}else this.host=e.host,this.ssl=e.ssl??ET;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=z1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<pO)throw new fe(te.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fS(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new fe(te.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new fe(te.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new fe(te.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hg{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new TT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(te.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(te.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new TT(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new jD;switch(s.type){case"firstParty":return new FD(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new fe(te.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=vT.get(n);s&&(ue("ComponentProvider","Removing Datastore"),vT.delete(n),s.terminate())}(this),Promise.resolve()}}function Lx(r,e,n,s={}){r=Ii(r,hg);const o=Co(e),u=r._getSettings(),f={...u,emulatorOptions:r._getEmulatorOptions()},m=`${e}:${n}`;o&&(s0(`https://${m}`),a0("Firestore",!0)),u.host!==dS&&u.host!==m&&vo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...u,host:m,ssl:o,emulatorOptions:s};if(!ss(g,f)&&(r._setSettings(g),s.mockUserToken)){let p,E;if(typeof s.mockUserToken=="string")p=s.mockUserToken,E=nn.MOCK_USER;else{p=ZR(s.mockUserToken,r._app?.options.projectId);const A=s.mockUserToken.sub||s.mockUserToken.user_id;if(!A)throw new fe(te.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new nn(A)}r._authCredentials=new zD(new e1(p,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new lf(this.firestore,e,this._query)}}class Dt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new du(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Dt(this.firestore,e,this._key)}toJSON(){return{type:Dt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(wu(n,Dt._jsonSchema))return new Dt(e,s||null,new ge(ft.fromString(n.referencePath)))}}Dt._jsonSchemaVersion="firestore/documentReference/1.0",Dt._jsonSchema={type:Ct("string",Dt._jsonSchemaVersion),referencePath:Ct("string")};class du extends lf{constructor(e,n,s){super(e,n,Zh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Dt(this.firestore,null,new ge(e))}withConverter(e){return new du(this.firestore,e,this._path)}}function Js(r,e,...n){if(r=Lt(r),arguments.length===1&&(e=zp.newId()),XD("doc","path",e),r instanceof hg){const s=ft.fromString(e,...n);return VE(s),new Dt(r,null,new ge(s))}{if(!(r instanceof Dt||r instanceof du))throw new fe(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ft.fromString(e,...n));return VE(s),new Dt(r.firestore,r instanceof du?r.converter:null,new ge(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST="AsyncQueue";class AT{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new G1(this,"async_queue_retry"),this._c=()=>{const s=km();s&&ue(ST,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=km();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=km();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new rs;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ko(e))throw e;ue(ST,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,Er("INTERNAL UNHANDLED ERROR: ",wT(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const o=ag.createAndSchedule(this,e,n,s,u=>this.hc(u));return this.tc.push(o),o}uc(){this.nc&&Se(47125,{Pc:wT(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function wT(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bT(r){return function(n,s){if(typeof n!="object"||n===null)return!1;const o=n;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(r,["next","error","complete"])}class Ro extends hg{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new AT,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new AT(e),this._firestoreClient=void 0,await e}}}function Ux(r,e){const n=typeof r=="object"?r:Dp(),s=typeof r=="string"?r:Dh,o=Do(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=XR("firestore");u&&Lx(o,...u)}return o}function fg(r){if(r._terminated)throw new fe(te.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Bx(r),r._firestoreClient}function Bx(r){const e=r._freezeSettings(),n=function(o,u,f,m){return new lN(o,u,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,fS(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(r._databaseId,r._app?.options.appId||"",r._persistenceKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new Mx(r._authCredentials,r._appCheckCredentials,r._queue,n,r._componentsProvider&&function(o){const u=o?._online.build();return{_offline:o?._offline.build(u),_online:u}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fn(Wt.fromBase64String(e))}catch(n){throw new fe(te.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Fn(Wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Fn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(wu(e,Fn._jsonSchema))return Fn.fromBase64String(e.bytes)}}Fn._jsonSchemaVersion="firestore/bytes/1.0",Fn._jsonSchema={type:Ct("string",Fn._jsonSchemaVersion),bytes:Ct("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new fe(te.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new fe(te.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new fe(te.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Oi._jsonSchemaVersion}}static fromJSON(e){if(wu(e,Oi._jsonSchema))return new Oi(e.latitude,e.longitude)}}Oi._jsonSchemaVersion="firestore/geoPoint/1.0",Oi._jsonSchema={type:Ct("string",Oi._jsonSchemaVersion),latitude:Ct("number"),longitude:Ct("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}toJSON(){return{type:xi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(wu(e,xi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new xi(e.vectorValues);throw new fe(te.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}xi._jsonSchemaVersion="firestore/vectorValue/1.0",xi._jsonSchema={type:Ct("string",xi._jsonSchemaVersion),vectorValues:Ct("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx=/^__.*__$/;class zx{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new gs(e,this.data,this.fieldMask,n,this.fieldTransforms):new bu(e,this.data,n,this.fieldTransforms)}}class mS{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new gs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function pS(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se(40011,{Ac:r})}}class hf{constructor(e,n,s,o,u,f){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new hf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Bh(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(pS(this.Ac)&&jx.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class qx{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||sf(e)}Cc(e,n,s,o=!1){return new hf({Ac:e,methodName:n,Dc:s,path:Xt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gS(r){const e=r._freezeSettings(),n=sf(r._databaseId);return new qx(r._databaseId,!!e.ignoreUndefinedProperties,n)}function Hx(r,e,n,s,o,u={}){const f=r.Cc(u.merge||u.mergeFields?2:0,e,n,o);mg("Data must be an object, but it was:",f,s);const m=yS(s,f);let g,p;if(u.merge)g=new On(f.fieldMask),p=f.fieldTransforms;else if(u.mergeFields){const E=[];for(const A of u.mergeFields){const w=yp(e,A,n);if(!f.contains(w))throw new fe(te.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);vS(E,w)||E.push(w)}g=new On(E),p=f.fieldTransforms.filter(A=>g.covers(A.field))}else g=null,p=f.fieldTransforms;return new zx(new gn(m),g,p)}class ff extends cf{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ff}}function Fx(r,e,n){return new hf({Ac:3,Dc:e.settings.Dc,methodName:r._methodName,fc:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class dg extends cf{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=Fx(this,e,!0),s=this.vc.map(u=>Du(u,n)),o=new Ao(s);return new VN(e.path,o)}isEqual(e){return e instanceof dg&&ss(this.vc,e.vc)}}function Gx(r,e,n,s){const o=r.Cc(1,e,n);mg("Data must be an object, but it was:",o,s);const u=[],f=gn.empty();ps(s,(g,p)=>{const E=pg(e,g,n);p=Lt(p);const A=o.yc(E);if(p instanceof ff)u.push(E);else{const w=Du(p,A);w!=null&&(u.push(E),f.set(E,w))}});const m=new On(u);return new mS(f,m,o.fieldTransforms)}function $x(r,e,n,s,o,u){const f=r.Cc(1,e,n),m=[yp(e,s,n)],g=[o];if(u.length%2!=0)throw new fe(te.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<u.length;w+=2)m.push(yp(e,u[w])),g.push(u[w+1]);const p=[],E=gn.empty();for(let w=m.length-1;w>=0;--w)if(!vS(p,m[w])){const L=m[w];let q=g[w];q=Lt(q);const Y=f.yc(L);if(q instanceof ff)p.push(L);else{const G=Du(q,Y);G!=null&&(p.push(L),E.set(L,G))}}const A=new On(p);return new mS(E,A,f.fieldTransforms)}function Du(r,e){if(_S(r=Lt(r)))return mg("Unsupported field value:",e,r),yS(r,e);if(r instanceof cf)return function(s,o){if(!pS(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(s,o){const u=[];let f=0;for(const m of s){let g=Du(m,o.wc(f));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),f++}return{arrayValue:{values:u}}}(r,e)}return function(s,o){if((s=Lt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return xN(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=lt.fromDate(s);return{timestampValue:Vh(o.serializer,u)}}if(s instanceof lt){const u=new lt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Vh(o.serializer,u)}}if(s instanceof Oi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Fn)return{bytesValue:k1(o.serializer,s._byteString)};if(s instanceof Dt){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.Sc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Wp(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof xi)return function(f,m){return{mapValue:{fields:{[u1]:{stringValue:c1},[Nh]:{arrayValue:{values:f.toArray().map(p=>{if(typeof p!="number")throw m.Sc("VectorValues must only contain numeric values.");return Qp(m.serializer,p)})}}}}}}(s,o);throw o.Sc(`Unsupported field value: ${qp(s)}`)}(r,e)}function yS(r,e){const n={};return i1(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ps(r,(s,o)=>{const u=Du(o,e.mc(s));u!=null&&(n[s]=u)}),{mapValue:{fields:n}}}function _S(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof lt||r instanceof Oi||r instanceof Fn||r instanceof Dt||r instanceof cf||r instanceof xi)}function mg(r,e,n){if(!_S(n)||!t1(n)){const s=qp(n);throw s==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+s)}}function yp(r,e,n){if((e=Lt(e))instanceof uf)return e._internalPath;if(typeof e=="string")return pg(r,e);throw Bh("Field path arguments must be of type string or ",r,!1,void 0,n)}const Kx=new RegExp("[~\\*/\\[\\]]");function pg(r,e,n){if(e.search(Kx)>=0)throw Bh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new uf(...e.split("."))._internalPath}catch{throw Bh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function Bh(r,e,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${e}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||f)&&(g+=" (found",u&&(g+=` in field ${s}`),f&&(g+=` in document ${o}`),g+=")"),new fe(te.INVALID_ARGUMENT,m+r+g)}function vS(r,e){return r.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e,n,s,o,u){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Qx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(TS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Qx extends ES{data(){return super.data()}}function TS(r,e){return typeof e=="string"?pg(r,e):e instanceof uf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yx(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new fe(te.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xx{convertValue(e,n="none"){switch(us(e)){case 0:return null;case 1:return e.booleanValue;case 2:return St(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ls(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Se(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return ps(e,(o,u)=>{s[o]=this.convertValue(u,n)}),s}convertVectorValue(e){const n=e.fields?.[Nh].arrayValue?.values?.map(s=>St(s.doubleValue));return new xi(n)}convertGeoPoint(e){return new Oi(St(e.latitude),St(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Xh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(uu(e));default:return null}}convertTimestamp(e){const n=os(e);return new lt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ft.fromString(e);Qe(j1(s),9688,{name:e});const o=new cu(s.get(1),s.get(3)),u=new ge(s.popFirst(5));return o.isEqual(n)||Er(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wx(r,e,n){let s;return s=r?r.toFirestore(e):e,s}class Wl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ra extends ES{constructor(e,n,s,o,u,f){super(e,n,s,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new _h(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(TS("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(te.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ra._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ra._jsonSchemaVersion="firestore/documentSnapshot/1.0",ra._jsonSchema={type:Ct("string",ra._jsonSchemaVersion),bundleSource:Ct("string","DocumentSnapshot"),bundleName:Ct("string"),bundle:Ct("string")};class _h extends ra{data(e={}){return super.data(e)}}class _o{constructor(e,n,s,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new Wl(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new _h(this._firestore,this._userDataWriter,s.key,s,new Wl(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new fe(te.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(m=>{const g=new _h(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Wl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const g=new _h(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Wl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let p=-1,E=-1;return m.type!==0&&(p=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),E=f.indexOf(m.doc.key)),{type:Zx(m.type),doc:g,oldIndex:p,newIndex:E}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(te.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=_o._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=zp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach(u=>{u._document!==null&&(n.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Zx(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Se(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(r){r=Ii(r,Dt);const e=Ii(r.firestore,Ro);return Px(fg(e),r._key).then(n=>wS(e,r,n))}_o._jsonSchemaVersion="firestore/querySnapshot/1.0",_o._jsonSchema={type:Ct("string",_o._jsonSchemaVersion),bundleSource:Ct("string","QuerySnapshot"),bundleName:Ct("string"),bundle:Ct("string")};class SS extends Xx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Dt(this.firestore,null,n)}}function Jx(r,e,n){r=Ii(r,Dt);const s=Ii(r.firestore,Ro),o=Wx(r.converter,e);return AS(s,[Hx(gS(s),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,Di.none())])}function _p(r,e,n,...s){r=Ii(r,Dt);const o=Ii(r.firestore,Ro),u=gS(o);let f;return f=typeof(e=Lt(e))=="string"||e instanceof uf?$x(u,"updateDoc",r._key,e,n,s):Gx(u,"updateDoc",r._key,e),AS(o,[f.toMutation(r._key,Di.exists(!0))])}function RT(r,...e){r=Lt(r);let n={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||bT(e[s])||(n=e[s++]);const o={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(bT(e[s])){const g=e[s];e[s]=g.next?.bind(g),e[s+1]=g.error?.bind(g),e[s+2]=g.complete?.bind(g)}let u,f,m;if(r instanceof Dt)f=Ii(r.firestore,Ro),m=Zh(r._key.path),u={next:g=>{e[s]&&e[s](wS(f,r,g))},error:e[s+1],complete:e[s+2]};else{const g=Ii(r,lf);f=Ii(g.firestore,Ro),m=g._query;const p=new SS(f);u={next:E=>{e[s]&&e[s](new _o(f,p,g,E))},error:e[s+1],complete:e[s+2]},Yx(r._query)}return function(p,E,A,w){const L=new cS(w),q=new tS(E,L,A);return p.asyncQueue.enqueueAndForget(async()=>J1(await gp(p),q)),()=>{L.Nu(),p.asyncQueue.enqueueAndForget(async()=>eS(await gp(p),q))}}(fg(f),m,o,u)}function AS(r,e){return function(s,o){const u=new rs;return s.asyncQueue.enqueueAndForget(async()=>wx(await Vx(s),o,u)),u.promise}(fg(r),e)}function wS(r,e,n){const s=n.docs.get(e._key),o=new SS(r);return new ra(r,o,e._key,s,new Wl(n.hasPendingWrites,n.fromCache),e.converter)}function e4(...r){return new dg("arrayUnion",r)}(function(e,n=!0){(function(o){xo=o})(No),Mi(new oi("firestore",(s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new Ro(new qD(s.getProvider("auth-internal")),new GD(f,s.getProvider("app-check-internal")),function(p,E){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new fe(te.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cu(p.options.projectId,E)}(f,o),f);return u={useFetchStreams:n,...u},m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),Gn(OE,xE,e),Gn(OE,xE,"esm2020")})();const bS="@firebase/installations",gg="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=1e4,IS=`w:${gg}`,CS="FIS_v2",t4="https://firebaseinstallations.googleapis.com/v1",n4=3600*1e3,i4="installations",r4="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s4={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ua=new ma(i4,r4,s4);function DS(r){return r instanceof _n&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS({projectId:r}){return`${t4}/projects/${r}/installations`}function OS(r){return{token:r.token,requestStatus:2,expiresIn:o4(r.expiresIn),creationTime:Date.now()}}async function xS(r,e){const s=(await e.json()).error;return ua.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function MS({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function a4(r,{refreshToken:e}){const n=MS(r);return n.append("Authorization",l4(e)),n}async function kS(r){const e=await r();return e.status>=500&&e.status<600?r():e}function o4(r){return Number(r.replace("s","000"))}function l4(r){return`${CS} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u4({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=NS(r),o=MS(r),u=e.getImmediate({optional:!0});if(u){const p=await u.getHeartbeatsHeader();p&&o.append("x-firebase-client",p)}const f={fid:n,authVersion:CS,appId:r.appId,sdkVersion:IS},m={method:"POST",headers:o,body:JSON.stringify(f)},g=await kS(()=>fetch(s,m));if(g.ok){const p=await g.json();return{fid:p.fid||n,registrationStatus:2,refreshToken:p.refreshToken,authToken:OS(p.authToken)}}else throw await xS("Create Installation",g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c4(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h4=/^[cdef][\w-]{21}$/,vp="";function f4(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=d4(r);return h4.test(n)?n:vp}catch{return vp}}function d4(r){return c4(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=new Map;function LS(r,e){const n=df(r);US(n,e),m4(n,e)}function US(r,e){const n=PS.get(r);if(n)for(const s of n)s(e)}function m4(r,e){const n=p4();n&&n.postMessage({key:r,fid:e}),g4()}let ia=null;function p4(){return!ia&&"BroadcastChannel"in self&&(ia=new BroadcastChannel("[Firebase] FID Change"),ia.onmessage=r=>{US(r.data.key,r.data.fid)}),ia}function g4(){PS.size===0&&ia&&(ia.close(),ia=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y4="firebase-installations-database",_4=1,ca="firebase-installations-store";let Pm=null;function yg(){return Pm||(Pm=Fh(y4,_4,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(ca)}}})),Pm}async function jh(r,e){const n=df(r),o=(await yg()).transaction(ca,"readwrite"),u=o.objectStore(ca),f=await u.get(n);return await u.put(e,n),await o.done,(!f||f.fid!==e.fid)&&LS(r,e.fid),e}async function BS(r){const e=df(r),s=(await yg()).transaction(ca,"readwrite");await s.objectStore(ca).delete(e),await s.done}async function mf(r,e){const n=df(r),o=(await yg()).transaction(ca,"readwrite"),u=o.objectStore(ca),f=await u.get(n),m=e(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&LS(r,m.fid),m}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _g(r){let e;const n=await mf(r.appConfig,s=>{const o=v4(s),u=E4(r,o);return e=u.registrationPromise,u.installationEntry});return n.fid===vp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function v4(r){const e=r||{fid:f4(),registrationStatus:0};return jS(e)}function E4(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(ua.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=T4(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:S4(r)}:{installationEntry:e}}async function T4(r,e){try{const n=await u4(r,e);return jh(r.appConfig,n)}catch(n){throw DS(n)&&n.customData.serverCode===409?await BS(r.appConfig):await jh(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function S4(r){let e=await IT(r.appConfig);for(;e.registrationStatus===1;)await VS(100),e=await IT(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await _g(r);return s||n}return e}function IT(r){return mf(r,e=>{if(!e)throw ua.create("installation-not-found");return jS(e)})}function jS(r){return A4(r)?{fid:r.fid,registrationStatus:0}:r}function A4(r){return r.registrationStatus===1&&r.registrationTime+RS<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w4({appConfig:r,heartbeatServiceProvider:e},n){const s=b4(r,n),o=a4(r,n),u=e.getImmediate({optional:!0});if(u){const p=await u.getHeartbeatsHeader();p&&o.append("x-firebase-client",p)}const f={installation:{sdkVersion:IS,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},g=await kS(()=>fetch(s,m));if(g.ok){const p=await g.json();return OS(p)}else throw await xS("Generate Auth Token",g)}function b4(r,{fid:e}){return`${NS(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vg(r,e=!1){let n;const s=await mf(r.appConfig,u=>{if(!zS(u))throw ua.create("not-registered");const f=u.authToken;if(!e&&C4(f))return u;if(f.requestStatus===1)return n=R4(r,e),u;{if(!navigator.onLine)throw ua.create("app-offline");const m=N4(u);return n=I4(r,m),m}});return n?await n:s.authToken}async function R4(r,e){let n=await CT(r.appConfig);for(;n.authToken.requestStatus===1;)await VS(100),n=await CT(r.appConfig);const s=n.authToken;return s.requestStatus===0?vg(r,e):s}function CT(r){return mf(r,e=>{if(!zS(e))throw ua.create("not-registered");const n=e.authToken;return O4(n)?{...e,authToken:{requestStatus:0}}:e})}async function I4(r,e){try{const n=await w4(r,e),s={...e,authToken:n};return await jh(r.appConfig,s),n}catch(n){if(DS(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await BS(r.appConfig);else{const s={...e,authToken:{requestStatus:0}};await jh(r.appConfig,s)}throw n}}function zS(r){return r!==void 0&&r.registrationStatus===2}function C4(r){return r.requestStatus===2&&!D4(r)}function D4(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+n4}function N4(r){const e={requestStatus:1,requestTime:Date.now()};return{...r,authToken:e}}function O4(r){return r.requestStatus===1&&r.requestTime+RS<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x4(r){const e=r,{installationEntry:n,registrationPromise:s}=await _g(e);return s?s.catch(console.error):vg(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M4(r,e=!1){const n=r;return await k4(n),(await vg(n,e)).token}async function k4(r){const{registrationPromise:e}=await _g(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V4(r){if(!r||!r.options)throw Lm("App Configuration");if(!r.name)throw Lm("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!r.options[n])throw Lm(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Lm(r){return ua.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS="installations",P4="installations-internal",L4=r=>{const e=r.getProvider("app").getImmediate(),n=V4(e),s=Do(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},U4=r=>{const e=r.getProvider("app").getImmediate(),n=Do(e,qS).getImmediate();return{getId:()=>x4(n),getToken:o=>M4(n,o)}};function B4(){Mi(new oi(qS,L4,"PUBLIC")),Mi(new oi(P4,U4,"PRIVATE"))}B4();Gn(bS,gg);Gn(bS,gg,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j4="/firebase-messaging-sw.js",z4="/firebase-cloud-messaging-push-scope",HS="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",q4="https://fcmregistrations.googleapis.com/v1",FS="google.c.a.c_id",H4="google.c.a.c_l",F4="google.c.a.ts",G4="google.c.a.e",DT=1e4;var NT;(function(r){r[r.DATA_MESSAGE=1]="DATA_MESSAGE",r[r.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(NT||(NT={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var mu;(function(r){r.PUSH_RECEIVED="push-received",r.NOTIFICATION_CLICKED="notification-clicked"})(mu||(mu={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(r){const e=new Uint8Array(r);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function $4(r){const e="=".repeat((4-r.length%4)%4),n=(r+e).replace(/\-/g,"+").replace(/_/g,"/"),s=atob(n),o=new Uint8Array(s.length);for(let u=0;u<s.length;++u)o[u]=s.charCodeAt(u);return o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um="fcm_token_details_db",K4=5,OT="fcm_token_object_Store";async function Q4(r){if("databases"in indexedDB&&!(await indexedDB.databases()).map(u=>u.name).includes(Um))return null;let e=null;return(await Fh(Um,K4,{upgrade:async(s,o,u,f)=>{if(o<2||!s.objectStoreNames.contains(OT))return;const m=f.objectStore(OT),g=await m.index("fcmSenderId").get(r);if(await m.clear(),!!g){if(o===2){const p=g;if(!p.auth||!p.p256dh||!p.endpoint)return;e={token:p.fcmToken,createTime:p.createTime??Date.now(),subscriptionOptions:{auth:p.auth,p256dh:p.p256dh,endpoint:p.endpoint,swScope:p.swScope,vapidKey:typeof p.vapidKey=="string"?p.vapidKey:ur(p.vapidKey)}}}else if(o===3){const p=g;e={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:ur(p.auth),p256dh:ur(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:ur(p.vapidKey)}}}else if(o===4){const p=g;e={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:ur(p.auth),p256dh:ur(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:ur(p.vapidKey)}}}}}})).close(),await Rm(Um),await Rm("fcm_vapid_details_db"),await Rm("undefined"),Y4(e)?e:null}function Y4(r){if(!r||!r.subscriptionOptions)return!1;const{subscriptionOptions:e}=r;return typeof r.createTime=="number"&&r.createTime>0&&typeof r.token=="string"&&r.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X4="firebase-messaging-database",W4=1,pu="firebase-messaging-store";let Bm=null;function GS(){return Bm||(Bm=Fh(X4,W4,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(pu)}}})),Bm}async function Z4(r){const e=$S(r),s=await(await GS()).transaction(pu).objectStore(pu).get(e);if(s)return s;{const o=await Q4(r.appConfig.senderId);if(o)return await Eg(r,o),o}}async function Eg(r,e){const n=$S(r),o=(await GS()).transaction(pu,"readwrite");return await o.objectStore(pu).put(e,n),await o.done,e}function $S({appConfig:r}){return r.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J4={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},hn=new ma("messaging","Messaging",J4);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eM(r,e){const n=await Sg(r),s=KS(e),o={method:"POST",headers:n,body:JSON.stringify(s)};let u;try{u=await(await fetch(Tg(r.appConfig),o)).json()}catch(f){throw hn.create("token-subscribe-failed",{errorInfo:f?.toString()})}if(u.error){const f=u.error.message;throw hn.create("token-subscribe-failed",{errorInfo:f})}if(!u.token)throw hn.create("token-subscribe-no-token");return u.token}async function tM(r,e){const n=await Sg(r),s=KS(e.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(s)};let u;try{u=await(await fetch(`${Tg(r.appConfig)}/${e.token}`,o)).json()}catch(f){throw hn.create("token-update-failed",{errorInfo:f?.toString()})}if(u.error){const f=u.error.message;throw hn.create("token-update-failed",{errorInfo:f})}if(!u.token)throw hn.create("token-update-no-token");return u.token}async function nM(r,e){const s={method:"DELETE",headers:await Sg(r)};try{const u=await(await fetch(`${Tg(r.appConfig)}/${e}`,s)).json();if(u.error){const f=u.error.message;throw hn.create("token-unsubscribe-failed",{errorInfo:f})}}catch(o){throw hn.create("token-unsubscribe-failed",{errorInfo:o?.toString()})}}function Tg({projectId:r}){return`${q4}/projects/${r}/registrations`}async function Sg({appConfig:r,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function KS({p256dh:r,auth:e,endpoint:n,vapidKey:s}){const o={web:{endpoint:n,auth:e,p256dh:r}};return s!==HS&&(o.web.applicationPubKey=s),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iM=10080*60*1e3;async function rM(r){const e=await aM(r.swRegistration,r.vapidKey),n={vapidKey:r.vapidKey,swScope:r.swRegistration.scope,endpoint:e.endpoint,auth:ur(e.getKey("auth")),p256dh:ur(e.getKey("p256dh"))},s=await Z4(r.firebaseDependencies);if(s){if(oM(s.subscriptionOptions,n))return Date.now()>=s.createTime+iM?sM(r,{token:s.token,createTime:Date.now(),subscriptionOptions:n}):s.token;try{await nM(r.firebaseDependencies,s.token)}catch(o){console.warn(o)}return xT(r.firebaseDependencies,n)}else return xT(r.firebaseDependencies,n)}async function sM(r,e){try{const n=await tM(r.firebaseDependencies,e),s={...e,token:n,createTime:Date.now()};return await Eg(r.firebaseDependencies,s),n}catch(n){throw n}}async function xT(r,e){const s={token:await eM(r,e),createTime:Date.now(),subscriptionOptions:e};return await Eg(r,s),s.token}async function aM(r,e){const n=await r.pushManager.getSubscription();return n||r.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:$4(e)})}function oM(r,e){const n=e.vapidKey===r.vapidKey,s=e.endpoint===r.endpoint,o=e.auth===r.auth,u=e.p256dh===r.p256dh;return n&&s&&o&&u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(r){const e={from:r.from,collapseKey:r.collapse_key,messageId:r.fcmMessageId};return lM(e,r),uM(e,r),cM(e,r),e}function lM(r,e){if(!e.notification)return;r.notification={};const n=e.notification.title;n&&(r.notification.title=n);const s=e.notification.body;s&&(r.notification.body=s);const o=e.notification.image;o&&(r.notification.image=o);const u=e.notification.icon;u&&(r.notification.icon=u)}function uM(r,e){e.data&&(r.data=e.data)}function cM(r,e){if(!e.fcmOptions&&!e.notification?.click_action)return;r.fcmOptions={};const n=e.fcmOptions?.link??e.notification?.click_action;n&&(r.fcmOptions.link=n);const s=e.fcmOptions?.analytics_label;s&&(r.fcmOptions.analyticsLabel=s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hM(r){return typeof r=="object"&&!!r&&FS in r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fM(r){if(!r||!r.options)throw jm("App Configuration Object");if(!r.name)throw jm("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=r;for(const s of e)if(!n[s])throw jm(s);return{appName:r.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function jm(r){return hn.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dM{constructor(e,n,s){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=fM(e);this.firebaseDependencies={app:e,appConfig:o,installations:n,analyticsProvider:s}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mM(r){try{r.swRegistration=await navigator.serviceWorker.register(j4,{scope:z4}),r.swRegistration.update().catch(()=>{}),await pM(r.swRegistration)}catch(e){throw hn.create("failed-service-worker-registration",{browserErrorMessage:e?.message})}}async function pM(r){return new Promise((e,n)=>{const s=setTimeout(()=>n(new Error(`Service worker not registered after ${DT} ms`)),DT),o=r.installing||r.waiting;r.active?(clearTimeout(s),e()):o?o.onstatechange=u=>{u.target?.state==="activated"&&(o.onstatechange=null,clearTimeout(s),e())}:(clearTimeout(s),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gM(r,e){if(!e&&!r.swRegistration&&await mM(r),!(!e&&r.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw hn.create("invalid-sw-registration");r.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yM(r,e){e?r.vapidKey=e:r.vapidKey||(r.vapidKey=HS)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QS(r,e){if(!navigator)throw hn.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw hn.create("permission-blocked");return await yM(r,e?.vapidKey),await gM(r,e?.serviceWorkerRegistration),rM(r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _M(r,e,n){const s=vM(e);(await r.firebaseDependencies.analyticsProvider.get()).logEvent(s,{message_id:n[FS],message_name:n[H4],message_time:n[F4],message_device_time:Math.floor(Date.now()/1e3)})}function vM(r){switch(r){case mu.NOTIFICATION_CLICKED:return"notification_open";case mu.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EM(r,e){const n=e.data;if(!n.isFirebaseMessaging)return;r.onMessageHandler&&n.messageType===mu.PUSH_RECEIVED&&(typeof r.onMessageHandler=="function"?r.onMessageHandler(MT(n)):r.onMessageHandler.next(MT(n)));const s=n.data;hM(s)&&s[G4]==="1"&&await _M(r,n.messageType,s)}const kT="@firebase/messaging",VT="0.12.23";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TM=r=>{const e=new dM(r.getProvider("app").getImmediate(),r.getProvider("installations-internal").getImmediate(),r.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>EM(e,n)),e},SM=r=>{const e=r.getProvider("messaging").getImmediate();return{getToken:s=>QS(e,s)}};function AM(){Mi(new oi("messaging",TM,"PUBLIC")),Mi(new oi("messaging-internal",SM,"PRIVATE")),Gn(kT,VT),Gn(kT,VT,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wM(){try{await l0()}catch{return!1}return typeof window<"u"&&o0()&&lI()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bM(r=Dp()){return wM().then(e=>{if(!e)throw hn.create("unsupported-browser")},e=>{throw hn.create("indexed-db-unsupported")}),Do(Lt(r),"messaging").getImmediate()}async function RM(r,e){return r=Lt(r),QS(r,e)}AM();const IM={apiKey:"AIzaSyAKcCWk_hS2I5PRmN6C0DqPc7PIyAsXQxM",authDomain:"activity-60d78.firebaseapp.com",projectId:"activity-60d78",storageBucket:"activity-60d78.firebasestorage.app",messagingSenderId:"784214109781",appId:"1:784214109781:web:cfcb864780520b4e1a2edc",measurementId:"G-77F988Z08Z"},Ag=h0(IM),ea=Ux(Ag),yn=PD(Ag),CM=bM(Ag),DM="BGM9mro1t5fC9M9qiSoE2WFH3cEV-COkgszOMBQtanaXDqoZ0zFkVRBiGdrHERHnOZL2bvtbFFgrLyLhAwTmw8A",NM=async()=>{try{const r=await Notification.requestPermission();if(console.log("Notification permission:",r),r==="granted"){const e=await navigator.serviceWorker.register("/Activity_Manager/firebase-messaging-sw.js"),n=await RM(CM,{vapidKey:DM,serviceWorkerRegistration:e});if(!n)throw new Error("FCM token is null. Possible causes: invalid VAPID key, missing Firebase config, or unsupported browser.");return console.log("FCM Token:",n),n}throw new Error("Notification permission not granted")}catch(r){throw console.error("Error in requestFCMToken:",r),r}};function OM(){const{pageDetector:r,signInWithFacebook:e,signInWithGoogle:n,setErrorDescription:s,userObject:o,userData:u,setBasicInfo:f,handleUser:m,setIsLoading:g}=B.useContext(li),p=da(),E=B.useRef(null),A=B.useRef(null),[w,L]=B.useState(""),[q,Y]=B.useState(""),[G,Q]=B.useState(!1),[se,ie]=B.useState(!1);async function pe(){if(g(!0),ce())try{await SC(yn,w,q),yn&&yn.currentUser&&m(yn.currentUser),g(!1)}catch(x){x instanceof _n&&(x.code=="auth/invalid-credential"&&s("Email or Password is Not Correct"),E.current&&A.current&&(E.current.innerText="Username may not be correct",A.current.innerText="Password may not be correct")),g(!1)}}function ce(){let ye=!1;return w.length==0?(E?.current&&(E.current.innerHTML="This input field is blank!"),ye=!0):w.length<=7&&(E?.current&&(E.current.innerHTML="Characters must be 8 and above"),ye=!0),q.length==0?(A?.current&&(A.current.innerHTML="This input field is blank!"),ye=!0):q.length<=7&&(A?.current&&(A.current.innerHTML="Characters must be 8 and above"),ye=!0),!ye}return B.useEffect(()=>{o==null?r(0,null,!0):r(null,0,!0)},[]),B.useEffect(()=>{u!=null&&o!=null&&(console.log("true"),u?.user.firstName?window.location.href.includes("/login")&&p("/"):(p("/register"),f(!0)))},[u,o]),k.jsx("div",{className:Ge.logInWrapper,children:k.jsxs("div",{className:Ge.logInBox,children:[k.jsxs("div",{className:Ge.top,children:[k.jsx("h1",{children:"LOG IN"}),k.jsx("span",{children:"12-McCarthy"})]}),k.jsxs("div",{className:Ge.middle,children:[k.jsxs("label",{className:w?`${Ge.inputBoxes} ${Ge.inputBoxesFocused}`:`${Ge.inputBoxes} ${Ge.inputBoxesNot}`,htmlFor:"log-in-username",children:[k.jsx("input",{type:"text",id:"log-in-username",value:w||"",onChange:ye=>{L(ye.target.value),E.current&&(E.current.innerText="")}}),k.jsx("span",{className:w?Ge.focused:Ge.unfocus,children:"Email"}),k.jsx("i",{className:G==!0?`${Ge.eyeIcon} "fa fa-eye"`:`${Ge.slashEye} "fa fa-eye-slash"`,onClick:()=>{Q(!G)}})]}),k.jsx("span",{ref:E,className:Ge.violation}),k.jsxs("label",{className:q?`${Ge.inputBoxes} ${Ge.inputBoxesFocused}`:`${Ge.inputBoxes} ${Ge.inputBoxesNot}`,htmlFor:"log-in-password",children:[k.jsx("input",{type:se?"type":"password",id:"log-in-password",value:q||"",onChange:ye=>{Y(ye.target.value),A.current&&(A.current.innerText="")}}),k.jsx("span",{className:q?Ge.focused:Ge.unfocus,children:"Password"}),k.jsx("i",{className:se==!0?`${Ge.eyeIcon} fa fa-eye`:`${Ge.slashEye} fa fa-eye-slash`,onClick:()=>{ie(!se)}})]}),k.jsx("span",{ref:A,className:Ge.violation}),k.jsxs("div",{className:Ge.bottomLinks,children:[k.jsx(ri,{to:"/forgot_password",className:Ge.links,children:"Forgot Password"}),k.jsx(ri,{to:"/register",className:Ge.links,children:"Create Account"})]}),k.jsx("button",{onClick:pe,id:Ge.logInButton,children:"Log In"})]}),k.jsxs("div",{className:Ge.bottom,children:[k.jsx("h4",{children:"Sign In With Different Accounts"}),k.jsxs("div",{className:Ge.platforms,children:[k.jsx("button",{className:Ge.diffAccButt,onClick:n,children:k.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"80%",height:"90%",viewBox:"0 0 48 48",children:[k.jsx("path",{fill:"#4caf50",d:"M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"}),k.jsx("path",{fill:"#1e88e5",d:"M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"}),k.jsx("polygon",{fill:"#e53935",points:"35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"}),k.jsx("path",{fill:"#c62828",d:"M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"}),k.jsx("path",{fill:"#fbc02d",d:"M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"})]})}),k.jsx("button",{className:Ge.diffAccButt,onClick:e,children:k.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"100%",height:"100%",viewBox:"0 0 48 48",children:[k.jsx("path",{fill:"#039be5",d:"M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"}),k.jsx("path",{fill:"#fff",d:"M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"})]})}),k.jsx("button",{className:Ge.diffAccButt,children:k.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"100%",height:"100%",viewBox:"0 0 30 30",children:k.jsx("path",{d:"M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"})})})]})]})]})})}const xM="_logInWrapper_1laus_1",MM="_logInBox_1laus_31",kM="_top_1laus_69",VM="_middle_1laus_115",PM="_inputBoxes_1laus_127",LM="_inputBoxesFocused_1laus_151",UM="_focused_1laus_215",BM="_bottomLinks_1laus_245",jM="_links_1laus_255",zM="_bottom_1laus_245",qM="_platforms_1laus_363",Me={logInWrapper:xM,logInBox:MM,top:kM,middle:VM,inputBoxes:PM,inputBoxesFocused:LM,focused:UM,bottomLinks:BM,links:jM,bottom:zM,platforms:qM},HM="_signUpWrapper_nrego_1",FM="_signUpBox_nrego_31",GM="_top_nrego_97",$M="_middle_nrego_143",KM="_inputBoxes_nrego_155",QM="_inputBoxesFocused_nrego_179",YM="_focused_nrego_231",XM="_buttons_nrego_307",st={signUpWrapper:HM,signUpBox:FM,top:GM,middle:$M,inputBoxes:KM,inputBoxesFocused:QM,focused:YM,buttons:XM};function WM({basicInfo:r,firstName:e,setFirstName:n,middleInitial:s,setMiddleInitial:o,lastName:u,setLastName:f,firstnameRef:m,middleInitialRef:g,lastnameRef:p,checkBasicInputs:E}){const{setUserData:A,setIsLoading:w}=B.useContext(li),L=da();function q(){w(!0),A(Y=>{if(!Y?.user)return null;const G={...Y?.user,firstName:e,middleInitial:s,lastName:u};async function Q(){try{const se=Js(ea,"McCarthy",`${yn?.currentUser?.uid}`);await _p(se,{user:G}),w(!1),L("/"),window.location.reload()}catch(se){console.log(se),w(!1)}}return Q(),{...Y,user:G}})}if(r)return k.jsx(k.Fragment,{children:k.jsx("div",{className:st.signUpWrapper,children:k.jsxs("div",{className:st.signUpBox,children:[k.jsxs("div",{className:st.top,children:[k.jsx("h1",{children:"SIGN UP"}),k.jsx("span",{children:"12-McCarthy"})]}),k.jsxs("div",{className:st.middle,children:[k.jsxs("label",{className:e?`${st.inputBoxes} ${st.inputBoxesFocused}`:`${st.inputBoxes} ${st.inputBoxesNot}`,htmlFor:"firstname",children:[k.jsx("input",{type:"text",id:"firstname",value:e||"",onChange:Y=>{n(Y.target.value),m.current&&(m.current.innerText="")}}),k.jsx("span",{className:e?st.focused:st.unfocus,children:"First Name"})]}),k.jsx("span",{ref:m,className:st.violation}),k.jsxs("label",{className:s?`${st.inputBoxes} ${st.inputBoxesFocused}`:`${st.inputBoxes} ${st.inputBoxesNot}`,htmlFor:"middleInitial",children:[k.jsx("input",{type:"text",id:"middleInitial",value:s||"",onChange:Y=>{o(Y.target.value),g.current&&(g.current.innerText="")}}),k.jsx("span",{className:s?st.focused:st.unfocus,children:"Middle Initial"})]}),k.jsx("span",{ref:g,className:st.violation}),k.jsxs("label",{className:u?`${st.inputBoxes} ${st.inputBoxesFocused}`:`${st.inputBoxes} ${st.inputBoxesNot}`,htmlFor:"lastName",children:[k.jsx("input",{type:"text",id:"lastName",value:u||"",onChange:Y=>{f(Y.target.value),p.current&&(p.current.innerText="")}}),k.jsx("span",{className:u?st.focused:st.unfocus,children:"Last Name"})]}),k.jsx("span",{ref:p,className:st.violation}),k.jsx("div",{className:st.buttons,children:k.jsx("button",{onClick:()=>{E()&&q()},id:st.logInButton,children:"Confirm"})})]})]})})})}function ZM(){const{pageDetector:r,basicInfo:e,setBasicInfo:n,handleUser:s,userData:o,userObject:u,signInWithFacebook:f,signInWithGoogle:m,setErrorDescription:g,setIsLoading:p}=B.useContext(li),E=da(),A=B.useRef(null),w=B.useRef(null),L=B.useRef(null),q=B.useRef(null),Y=B.useRef(null),G=B.useRef(null),[Q,se]=B.useState(""),[ie,pe]=B.useState(""),[ce,ye]=B.useState(""),[x,R]=B.useState(""),[I,O]=B.useState(""),[M,V]=B.useState(""),[b,Ie]=B.useState(!1),[Ce,K]=B.useState(!1);async function re(){const D=le();if(p(!0),D)try{if(await TC(yn,Q,ie),!yn.currentUser)return;console.log(yn.currentUser),s(yn.currentUser),n(!0)}catch(Z){Z instanceof _n&&(Z.code.includes("auth/invalid-email")&&A.current?(g("Invalid Email!"),A.current.innerHTML="Invalid Email!"):console.log(Z.code),p(!1))}}function le(){let D=!1;return Q.length==0?(A?.current&&(A.current.innerHTML="This input field is blank!"),D=!0):Q.length<=7&&(A?.current&&(A.current.innerHTML="Characters must be 8 and above"),D=!0),ie.length==0?(w?.current&&(w.current.innerHTML="This input field is blank!"),D=!0):ie.length<=7&&(w?.current&&(w.current.innerHTML="Characters must be 8 and above"),D=!0),!D}function Ne(){let D=!1;return x.length==0&&(q.current&&(q.current.innerText="The Input Field is Blank!"),D=!0),I.length==0&&(Y.current&&(Y.current.innerText="The Input Field is Blank!"),D=!0),M.length==0&&(G.current&&(G.current.innerText="The Input Field is Blank!"),D=!0),!D}return B.useEffect(()=>{u?console.log(u):n(!1)},[u]),B.useEffect(()=>{r(1,null,!0)},[yn,o]),B.useEffect(()=>{o!=null&&u!=null&&(o?.user.firstName?window.location.href.includes("register")&&E("/"):(E("/register"),n(!0)))},[o,u]),k.jsxs(k.Fragment,{children:[k.jsx("div",{className:Me.logInWrapper,style:e?{opacity:"0"}:{opacity:"1"},children:k.jsxs("div",{className:Me.logInBox,children:[k.jsxs("div",{className:Me.top,children:[k.jsx("h1",{children:"SIGN UP"}),k.jsx("span",{children:"12-McCarthy"})]}),k.jsxs("div",{className:Me.middle,children:[k.jsxs("label",{className:Q?`${Me.inputBoxes} ${Me.inputBoxesFocused}`:`${Me.inputBoxes} ${Me.inputBoxesNot}`,htmlFor:"log-in-username",children:[k.jsx("input",{type:"text",id:"log-in-username",value:Q||"",onChange:D=>{se(D.target.value),A.current&&(A.current.innerText="")}}),k.jsx("span",{className:Q?Me.focused:Me.unfocus,children:"Email"})]}),k.jsx("span",{ref:A,className:Me.violation}),k.jsxs("label",{className:ie?`${Me.inputBoxes} ${Me.inputBoxesFocused}`:`${Me.inputBoxes} ${Me.inputBoxesNot}`,htmlFor:"log-in-password",children:[k.jsx("input",{type:b?"type":"password",id:"log-in-password",value:ie||"",onChange:D=>{w.current&&(w.current.innerText=""),pe(D.target.value)}}),k.jsx("span",{className:ie?Me.focused:Me.unfocus,children:"Password"}),k.jsx("i",{className:b==!0?`${Me.eyeIcon} fa fa-eye`:`${Me.slashEye} fa fa-eye-slash`,onClick:()=>{Ie(!b)}})]}),k.jsx("span",{ref:w,className:Me.violation}),k.jsxs("label",{className:ce?`${Me.inputBoxes} ${Me.inputBoxesFocused}`:`${Me.inputBoxes} ${Me.inputBoxesNot}`,htmlFor:"log-in-confirm-password",children:[k.jsx("input",{type:Ce?"type":"password",id:"log-in-confirm-password",value:ce||"",onChange:D=>{L.current&&(L.current.innerText=""),ye(D.target.value)}}),k.jsx("span",{className:ce?Me.focused:Me.unfocus,children:"Confirm Password"}),k.jsx("i",{className:Ce==!0?`${Me.eyeIcon} fa fa-eye`:`${Me.slashEye} fa fa-eye-slash`,onClick:()=>{K(!Ce)}})]}),k.jsx("span",{ref:L,className:Me.violation}),k.jsxs("div",{className:Me.bottomLinks,children:[k.jsx(ri,{to:"/forgot_password",className:Me.links,children:"Forgot Password"}),k.jsx(ri,{to:"/login",className:Me.links,children:"Already Have an Account"})]}),k.jsx("button",{onClick:re,id:Me.logInButton,children:"Sign Up"})]}),k.jsxs("div",{className:Me.bottom,children:[k.jsx("h4",{children:"Sign In With Different Accounts"}),k.jsxs("div",{className:Me.platforms,onClick:m,children:[k.jsx("button",{className:Me.diffAccButt,children:k.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"80%",height:"90%",viewBox:"0 0 48 48",children:[k.jsx("path",{fill:"#4caf50",d:"M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"}),k.jsx("path",{fill:"#1e88e5",d:"M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"}),k.jsx("polygon",{fill:"#e53935",points:"35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"}),k.jsx("path",{fill:"#c62828",d:"M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"}),k.jsx("path",{fill:"#fbc02d",d:"M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"})]})}),k.jsx("button",{className:Me.diffAccButt,onClick:f,children:k.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"100%",height:"100%",viewBox:"0 0 48 48",children:[k.jsx("path",{fill:"#039be5",d:"M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"}),k.jsx("path",{fill:"#fff",d:"M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"})]})}),k.jsx("button",{className:Me.diffAccButt,children:k.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"100%",height:"100%",viewBox:"0 0 30 30",children:k.jsx("path",{d:"M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"})})})]})]})]})}),k.jsx(WM,{basicInfo:e,firstName:x,setFirstName:R,middleInitial:I,setMiddleInitial:O,lastName:M,setLastName:V,createAccount:re,firstnameRef:q,middleInitialRef:Y,lastnameRef:G,checkBasicInputs:Ne})]})}const JM="_LogOutWrapper_7qnt8_1",ek="_LogOutBox_7qnt8_25",tk="_buttons_7qnt8_71",zm={LogOutWrapper:JM,LogOutBox:ek,buttons:tk};function nk(){const{showLogOutPrompt:r,setShowLogOutPrompt:e,setUserObject:n,setUserData:s,setBasicInfo:o}=B.useContext(li),u=da();async function f(){try{await RC(yn),n(null),s(null),e(!1),o(!1),localStorage.removeItem("User"),u("/")}catch{e(!1)}}if(r)return k.jsx("div",{className:zm.LogOutWrapper,children:k.jsxs("div",{className:zm.LogOutBox,children:[k.jsx("h1",{children:"Sign Out?"}),k.jsx("p",{children:"Are you going to sign out?"}),k.jsxs("div",{className:zm.buttons,children:[k.jsx("button",{onClick:()=>{e(!1)},children:"No"}),k.jsx("button",{onClick:()=>{f()},children:"Yes"})]})]})})}const ik="_loadingWrapper_lmkvu_1",rk="_loadingBox_lmkvu_33",sk="_loading_lmkvu_1",qm={loadingWrapper:ik,loadingBox:rk,loading:sk};function ak({isLoading:r}){if(r)return k.jsx("div",{className:qm.loadingWrapper,children:k.jsxs("div",{className:qm.loadingBox,children:[k.jsx("div",{className:qm.loading}),"Loading..."]})})}const ok=B.lazy(()=>Tp(()=>import("./Home-DdF0CM1c.js"),__vite__mapDeps([0,1,2]))),PT=B.lazy(()=>Tp(()=>import("./Subjects-CRIn8QDx.js"),__vite__mapDeps([3,1,4]))),lk=B.lazy(()=>Tp(()=>import("./Recap-D5cbpmpw.js"),__vite__mapDeps([5,6]))),li=B.createContext({});function uk(){const r=da();let e={};const n=JSON.parse(localStorage.getItem("User")),[s,o]=B.useState(!1),[u,f]=B.useState(!1),[m,g]=B.useState(!1),[p,E]=B.useState(!1),[A,w]=B.useState(!1),[L,q]=B.useState(window.location.href),[Y,G]=B.useState(""),[Q,se]=B.useState(n||null),[ie,pe]=B.useState(null),[ce,ye]=B.useState([{pageName:"Home",path:"/",element:k.jsx(ok,{}),keyId:Math.random()*1,icon:"fa fa-home",focus:!0},{pageName:"Subjects",path:"/subjects",element:k.jsx(PT,{}),keyId:Math.random()*1,icon:"fa fa-book",focus:!1},{pageName:"Recap",path:"/Recap",element:k.jsx(lk,{}),keyId:Math.random()*1,icon:"fa fa-calendar",focus:!1}]),[x,R]=B.useState([{path:"/login",element:k.jsx(OM,{}),keyId:Math.random()*1,icon:"fa fa-book",focus:!1},{path:"/register",element:k.jsx(ZM,{}),keyId:Math.random()*1,icon:"fa fa-home",focus:!1},{path:"/forgot_password",element:k.jsx(NR,{}),keyId:Math.random()*1,icon:"	fa fa-check-square-o",focus:!1}]);function I(b,Ie,Ce){R(K=>K.map((re,le)=>le===b&&b!=null?(r(re.path),{...re,focus:!0}):{...re,focus:!1})),ye(K=>K.map((re,le)=>({...re,focus:le===Ie&&Ie!=null}))),f(Ce)}async function O(){try{const b=new hr,Ie=await SE(yn,b);V(Ie.user)}catch(b){b instanceof _n&&G(b.code)}}const M=async()=>{const b=new cr;b.addScope("public_profile"),SE(yn,b).then(Ie=>{const Ce=Ie.user;Ce&&(se(Ce),V(Ce),window.location.reload())}).catch(Ie=>{Ie instanceof _n&&G(Ie.code)})};async function V(b){w(!0);const Ie=Js(ea,"McCarthy",`${b?.uid}`),Ce=Js(ea,"Main_Database","Users"),K=await Gl(Ce),re=await Gl(Ie),le={user:{Gmail:b?.email,firstName:"",middleInitial:"",lastName:"",uid:b?.uid},activities:[],exams:[],assignments:[],petas:[],reviewers:[]};re.exists()||await Jx(Ie,le),Ne();async function Ne(){if(K.data()){const D=K.data()?.userList;let Z=!1;for(let ae=0;ae<D?.length;ae++)if(b?.uid===D[ae]?.uid){Z=!0;break}if(!Z){const ae=await Gl(Ie);await _p(Ce,{userList:e4(ae.data()?.user)})}}}w(!1)}return B.useEffect(()=>{const b=RT(Js(ea,"McCarthy",`${Q?.uid}`),Ie=>{Ie.exists()?(pe(Ie.data()),V(Q)):pe(null)});return()=>{b()}},[]),B.useEffect(()=>{const b=Js(ea,"McCarthy",`${Q?.uid}`),Ie=Js(ea,"Main_Database","School_Activities"),Ce=RT(Ie,async K=>{if(!K.exists()){pe(null);return}const le=(await Gl(b)).data();if(le==null)return;const Ne=K.data().Activity,D=K.data().Assignment,Z=K.data().Project,ae=K.data().Exam,ne=le.activities,de=le.assignments,be=le.petas,ve=le.petas,_t=Ne.filter(Xe=>!ne.some($e=>$e.id===Xe.id)),Ye=D.filter(Xe=>!de.some($e=>$e.id===Xe.id)),vn=Z.filter(Xe=>!be.some($e=>$e.id===Xe.id)),Kn=ae.filter(Xe=>!be.some($e=>$e.id===Xe.id)),En=ne.filter(Xe=>!Ne.some($e=>$e.id===Xe.id)),Qn=de.filter(Xe=>!D.some($e=>$e.id===Xe.id)),Yn=be.filter(Xe=>!Z.some($e=>$e.id===Xe.id)),Xn=ve.filter(Xe=>!Z.some($e=>$e.id===Xe.id)),Sr=Ne.filter(Xe=>!En.some($e=>Xe.id==$e.id)),ys=D.filter(Xe=>!Qn.some($e=>Xe.id==$e.id)),an=Z.filter(Xe=>!Yn.some($e=>Xe.id==$e.id)),ya=ae.filter(Xe=>!Xn.some($e=>Xe.id==$e.id));return await _p(b,{activities:En.length!=0?Sr:[..._t,...ne],assignments:Qn.length!=0?ys:[...Ye,...de],petas:Yn.length!=0?an:[...vn,...be],exams:Xn.length!=0?ya:[...Kn,...ve]}),pe({...le,activities:En.length!=0?Sr:[..._t,...ne],assignments:Qn.length!=0?ys:[...Ye,...de],petas:Yn.length!=0?an:[...vn,...be],exams:Xn.length!=0?ya:[...Kn,...ve]})});return()=>{Ce()}},[Q]),B.useEffect(()=>{ie!=null&&Q!=null&&ie?.user.firstName==""&&(r("/register"),E(!0))},[ie,Q]),B.useEffect(()=>{async function b(){try{const Ie=await NM();console.log(Ie)}catch{}}b()},[]),bC(yn,b=>{if(b!=null&&Q){Q==null&&(se(b),localStorage.setItem("User",JSON.stringify(b)),V(b));const Ie=Js(ea,"McCarthy",`${b?.uid}`);ie||Gl(Ie).then(Ce=>{(Ce.data()?.firstName==""||Ce.data()?.middleInitial==""||Ce.data()?.lastName=="")&&r("/register"),V(b),pe(Ce.data())})}else se(b),localStorage.setItem("User",JSON.stringify(b))}),e={userObject:Q,setUserObject:se,userData:ie,setUserData:pe,showSideBar:s,setShowSideBar:o,showLogForm:u,setShowLogForm:f,showLogOutPrompt:m,setShowLogOutPrompt:g,basicInfo:p,setBasicInfo:E,errorDescription:Y,setErrorDescription:G,isLoading:A,setIsLoading:w,pathTo:L,setPathTo:q,tabs:ce,setTabs:ye,pageDetector:I,signInWithFacebook:M,signInWithGoogle:O,handleUser:V},k.jsxs(li.Provider,{value:e,children:[k.jsx(yR,{}),k.jsx(nk,{}),k.jsx(CR,{}),k.jsx(ak,{isLoading:A}),k.jsxs("div",{className:Jb.sbartabWrapper,style:u?{display:"none"}:{display:"flex"},onContextMenu:b=>{b.preventDefault()},children:[k.jsx(wR,{}),k.jsxs(Yv,{children:[ce?.map(b=>k.jsx(ah,{path:b.path,element:b.element})),k.jsx(ah,{path:"/subjects/:subjectName",element:k.jsx(PT,{})})]})]}),k.jsx(Yv,{children:x?.map(b=>k.jsx(ah,{path:b.path,element:b.element}))})]})}Cw.createRoot(document.getElementById("root")).render(k.jsx(B.StrictMode,{children:k.jsx(qb,{children:k.jsx(uk,{})})}));export{_n as F,ri as L,e4 as a,_p as b,li as c,Js as d,fa as e,ea as f,Gl as g,ck as h,k as j,RT as o,B as r,Jx as s,da as u};
