(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();function xo(e,n){const t=Object.create(null),a=e.split(",");for(let o=0;o<a.length;o++)t[a[o]]=!0;return n?o=>!!t[o.toLowerCase()]:o=>!!t[o]}function ga(e){if(M(e)){const n={};for(let t=0;t<e.length;t++){const a=e[t],o=pe(a)?Tl(a):ga(a);if(o)for(const r in o)n[r]=o[r]}return n}else{if(pe(e))return e;if(le(e))return e}}const Sl=/;(?![^(]*\))/g,Al=/:([^]+)/,Ol=/\/\*.*?\*\//gs;function Tl(e){const n={};return e.replace(Ol,"").split(Sl).forEach(t=>{if(t){const a=t.split(Al);a.length>1&&(n[a[0].trim()]=a[1].trim())}}),n}function wo(e){let n="";if(pe(e))n=e;else if(M(e))for(let t=0;t<e.length;t++){const a=wo(e[t]);a&&(n+=a+" ")}else if(le(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const Cl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",El=xo(Cl);function Ps(e){return!!e||e===""}const Rl=e=>pe(e)?e:e==null?"":M(e)||le(e)&&(e.toString===Ls||!W(e.toString))?JSON.stringify(e,Fs,2):String(e),Fs=(e,n)=>n&&n.__v_isRef?Fs(e,n.value):Kn(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[a,o])=>(t[`${a} =>`]=o,t),{})}:Ds(n)?{[`Set(${n.size})`]:[...n.values()]}:le(n)&&!M(n)&&!$s(n)?String(n):n,ie={},Vn=[],He=()=>{},Il=()=>!1,Pl=/^on[^a-z]/,ha=e=>Pl.test(e),jo=e=>e.startsWith("onUpdate:"),_e=Object.assign,_o=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Fl=Object.prototype.hasOwnProperty,Y=(e,n)=>Fl.call(e,n),M=Array.isArray,Kn=e=>ka(e)==="[object Map]",Ds=e=>ka(e)==="[object Set]",W=e=>typeof e=="function",pe=e=>typeof e=="string",So=e=>typeof e=="symbol",le=e=>e!==null&&typeof e=="object",Ns=e=>le(e)&&W(e.then)&&W(e.catch),Ls=Object.prototype.toString,ka=e=>Ls.call(e),Dl=e=>ka(e).slice(8,-1),$s=e=>ka(e)==="[object Object]",Ao=e=>pe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,na=xo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ya=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},Nl=/-(\w)/g,Xe=ya(e=>e.replace(Nl,(n,t)=>t?t.toUpperCase():"")),Ll=/\B([A-Z])/g,at=ya(e=>e.replace(Ll,"-$1").toLowerCase()),va=ya(e=>e.charAt(0).toUpperCase()+e.slice(1)),Pa=ya(e=>e?`on${va(e)}`:""),_t=(e,n)=>!Object.is(e,n),Fa=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},ia=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},Us=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let cr;const $l=()=>cr||(cr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ee;class Ms{constructor(n=!1){this.detached=n,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ee,!n&&Ee&&(this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1)}run(n){if(this.active){const t=Ee;try{return Ee=this,n()}finally{Ee=t}}}on(){Ee=this}off(){Ee=this.parent}stop(n){if(this.active){let t,a;for(t=0,a=this.effects.length;t<a;t++)this.effects[t].stop();for(t=0,a=this.cleanups.length;t<a;t++)this.cleanups[t]();if(this.scopes)for(t=0,a=this.scopes.length;t<a;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!n){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this.active=!1}}}function qs(e){return new Ms(e)}function Ul(e,n=Ee){n&&n.active&&n.effects.push(e)}function Ml(){return Ee}function ql(e){Ee&&Ee.cleanups.push(e)}const Oo=e=>{const n=new Set(e);return n.w=0,n.n=0,n},Hs=e=>(e.w&yn)>0,zs=e=>(e.n&yn)>0,Hl=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=yn},zl=e=>{const{deps:n}=e;if(n.length){let t=0;for(let a=0;a<n.length;a++){const o=n[a];Hs(o)&&!zs(o)?o.delete(e):n[t++]=o,o.w&=~yn,o.n&=~yn}n.length=t}},Va=new WeakMap;let ft=0,yn=1;const Ka=30;let Ue;const Pn=Symbol(""),Ga=Symbol("");class To{constructor(n,t=null,a){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Ul(this,a)}run(){if(!this.active)return this.fn();let n=Ue,t=gn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=Ue,Ue=this,gn=!0,yn=1<<++ft,ft<=Ka?Hl(this):mr(this),this.fn()}finally{ft<=Ka&&zl(this),yn=1<<--ft,Ue=this.parent,gn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ue===this?this.deferStop=!0:this.active&&(mr(this),this.onStop&&this.onStop(),this.active=!1)}}function mr(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0}}let gn=!0;const Ws=[];function ot(){Ws.push(gn),gn=!1}function rt(){const e=Ws.pop();gn=e===void 0?!0:e}function Pe(e,n,t){if(gn&&Ue){let a=Va.get(e);a||Va.set(e,a=new Map);let o=a.get(t);o||a.set(t,o=Oo()),Bs(o)}}function Bs(e,n){let t=!1;ft<=Ka?zs(e)||(e.n|=yn,t=!Hs(e)):t=!e.has(Ue),t&&(e.add(Ue),Ue.deps.push(e))}function nn(e,n,t,a,o,r){const s=Va.get(e);if(!s)return;let i=[];if(n==="clear")i=[...s.values()];else if(t==="length"&&M(e)){const l=Us(a);s.forEach((m,c)=>{(c==="length"||c>=l)&&i.push(m)})}else switch(t!==void 0&&i.push(s.get(t)),n){case"add":M(e)?Ao(t)&&i.push(s.get("length")):(i.push(s.get(Pn)),Kn(e)&&i.push(s.get(Ga)));break;case"delete":M(e)||(i.push(s.get(Pn)),Kn(e)&&i.push(s.get(Ga)));break;case"set":Kn(e)&&i.push(s.get(Pn));break}if(i.length===1)i[0]&&Ya(i[0]);else{const l=[];for(const m of i)m&&l.push(...m);Ya(Oo(l))}}function Ya(e,n){const t=M(e)?e:[...e];for(const a of t)a.computed&&ur(a);for(const a of t)a.computed||ur(a)}function ur(e,n){(e!==Ue||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Wl=xo("__proto__,__v_isRef,__isVue"),Vs=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(So)),Bl=Co(),Vl=Co(!1,!0),Kl=Co(!0),dr=Gl();function Gl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const a=Q(this);for(let r=0,s=this.length;r<s;r++)Pe(a,"get",r+"");const o=a[n](...t);return o===-1||o===!1?a[n](...t.map(Q)):o}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){ot();const a=Q(this)[n].apply(this,t);return rt(),a}}),e}function Co(e=!1,n=!1){return function(a,o,r){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return n;if(o==="__v_raw"&&r===(e?n?mc:Js:n?Qs:Ys).get(a))return a;const s=M(a);if(!e&&s&&Y(dr,o))return Reflect.get(dr,o,r);const i=Reflect.get(a,o,r);return(So(o)?Vs.has(o):Wl(o))||(e||Pe(a,"get",o),n)?i:ue(i)?s&&Ao(o)?i:i.value:le(i)?e?Xs(i):st(i):i}}const Yl=Ks(),Ql=Ks(!0);function Ks(e=!1){return function(t,a,o,r){let s=t[a];if(Qn(s)&&ue(s)&&!ue(o))return!1;if(!e&&(!la(o)&&!Qn(o)&&(s=Q(s),o=Q(o)),!M(t)&&ue(s)&&!ue(o)))return s.value=o,!0;const i=M(t)&&Ao(a)?Number(a)<t.length:Y(t,a),l=Reflect.set(t,a,o,r);return t===Q(r)&&(i?_t(o,s)&&nn(t,"set",a,o):nn(t,"add",a,o)),l}}function Jl(e,n){const t=Y(e,n);e[n];const a=Reflect.deleteProperty(e,n);return a&&t&&nn(e,"delete",n,void 0),a}function Xl(e,n){const t=Reflect.has(e,n);return(!So(n)||!Vs.has(n))&&Pe(e,"has",n),t}function Zl(e){return Pe(e,"iterate",M(e)?"length":Pn),Reflect.ownKeys(e)}const Gs={get:Bl,set:Yl,deleteProperty:Jl,has:Xl,ownKeys:Zl},ec={get:Kl,set(e,n){return!0},deleteProperty(e,n){return!0}},nc=_e({},Gs,{get:Vl,set:Ql}),Eo=e=>e,xa=e=>Reflect.getPrototypeOf(e);function Mt(e,n,t=!1,a=!1){e=e.__v_raw;const o=Q(e),r=Q(n);t||(n!==r&&Pe(o,"get",n),Pe(o,"get",r));const{has:s}=xa(o),i=a?Eo:t?Po:St;if(s.call(o,n))return i(e.get(n));if(s.call(o,r))return i(e.get(r));e!==o&&e.get(n)}function qt(e,n=!1){const t=this.__v_raw,a=Q(t),o=Q(e);return n||(e!==o&&Pe(a,"has",e),Pe(a,"has",o)),e===o?t.has(e):t.has(e)||t.has(o)}function Ht(e,n=!1){return e=e.__v_raw,!n&&Pe(Q(e),"iterate",Pn),Reflect.get(e,"size",e)}function fr(e){e=Q(e);const n=Q(this);return xa(n).has.call(n,e)||(n.add(e),nn(n,"add",e,e)),this}function pr(e,n){n=Q(n);const t=Q(this),{has:a,get:o}=xa(t);let r=a.call(t,e);r||(e=Q(e),r=a.call(t,e));const s=o.call(t,e);return t.set(e,n),r?_t(n,s)&&nn(t,"set",e,n):nn(t,"add",e,n),this}function br(e){const n=Q(this),{has:t,get:a}=xa(n);let o=t.call(n,e);o||(e=Q(e),o=t.call(n,e)),a&&a.call(n,e);const r=n.delete(e);return o&&nn(n,"delete",e,void 0),r}function gr(){const e=Q(this),n=e.size!==0,t=e.clear();return n&&nn(e,"clear",void 0,void 0),t}function zt(e,n){return function(a,o){const r=this,s=r.__v_raw,i=Q(s),l=n?Eo:e?Po:St;return!e&&Pe(i,"iterate",Pn),s.forEach((m,c)=>a.call(o,l(m),l(c),r))}}function Wt(e,n,t){return function(...a){const o=this.__v_raw,r=Q(o),s=Kn(r),i=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,m=o[e](...a),c=t?Eo:n?Po:St;return!n&&Pe(r,"iterate",l?Ga:Pn),{next(){const{value:d,done:p}=m.next();return p?{value:d,done:p}:{value:i?[c(d[0]),c(d[1])]:c(d),done:p}},[Symbol.iterator](){return this}}}}function cn(e){return function(...n){return e==="delete"?!1:this}}function tc(){const e={get(r){return Mt(this,r)},get size(){return Ht(this)},has:qt,add:fr,set:pr,delete:br,clear:gr,forEach:zt(!1,!1)},n={get(r){return Mt(this,r,!1,!0)},get size(){return Ht(this)},has:qt,add:fr,set:pr,delete:br,clear:gr,forEach:zt(!1,!0)},t={get(r){return Mt(this,r,!0)},get size(){return Ht(this,!0)},has(r){return qt.call(this,r,!0)},add:cn("add"),set:cn("set"),delete:cn("delete"),clear:cn("clear"),forEach:zt(!0,!1)},a={get(r){return Mt(this,r,!0,!0)},get size(){return Ht(this,!0)},has(r){return qt.call(this,r,!0)},add:cn("add"),set:cn("set"),delete:cn("delete"),clear:cn("clear"),forEach:zt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=Wt(r,!1,!1),t[r]=Wt(r,!0,!1),n[r]=Wt(r,!1,!0),a[r]=Wt(r,!0,!0)}),[e,t,n,a]}const[ac,oc,rc,sc]=tc();function Ro(e,n){const t=n?e?sc:rc:e?oc:ac;return(a,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?a:Reflect.get(Y(t,o)&&o in a?t:a,o,r)}const ic={get:Ro(!1,!1)},lc={get:Ro(!1,!0)},cc={get:Ro(!0,!1)},Ys=new WeakMap,Qs=new WeakMap,Js=new WeakMap,mc=new WeakMap;function uc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dc(e){return e.__v_skip||!Object.isExtensible(e)?0:uc(Dl(e))}function st(e){return Qn(e)?e:Io(e,!1,Gs,ic,Ys)}function fc(e){return Io(e,!1,nc,lc,Qs)}function Xs(e){return Io(e,!0,ec,cc,Js)}function Io(e,n,t,a,o){if(!le(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const r=o.get(e);if(r)return r;const s=dc(e);if(s===0)return e;const i=new Proxy(e,s===2?a:t);return o.set(e,i),i}function hn(e){return Qn(e)?hn(e.__v_raw):!!(e&&e.__v_isReactive)}function Qn(e){return!!(e&&e.__v_isReadonly)}function la(e){return!!(e&&e.__v_isShallow)}function Zs(e){return hn(e)||Qn(e)}function Q(e){const n=e&&e.__v_raw;return n?Q(n):e}function Jn(e){return ia(e,"__v_skip",!0),e}const St=e=>le(e)?st(e):e,Po=e=>le(e)?Xs(e):e;function ei(e){gn&&Ue&&(e=Q(e),Bs(e.dep||(e.dep=Oo())))}function ni(e,n){e=Q(e),e.dep&&Ya(e.dep)}function ue(e){return!!(e&&e.__v_isRef===!0)}function it(e){return ti(e,!1)}function pc(e){return ti(e,!0)}function ti(e,n){return ue(e)?e:new bc(e,n)}class bc{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:Q(n),this._value=t?n:St(n)}get value(){return ei(this),this._value}set value(n){const t=this.__v_isShallow||la(n)||Qn(n);n=t?n:Q(n),_t(n,this._rawValue)&&(this._rawValue=n,this._value=t?n:St(n),ni(this))}}function je(e){return ue(e)?e.value:e}const gc={get:(e,n,t)=>je(Reflect.get(e,n,t)),set:(e,n,t,a)=>{const o=e[n];return ue(o)&&!ue(t)?(o.value=t,!0):Reflect.set(e,n,t,a)}};function ai(e){return hn(e)?e:new Proxy(e,gc)}function hc(e){const n=M(e)?new Array(e.length):{};for(const t in e)n[t]=yc(e,t);return n}class kc{constructor(n,t,a){this._object=n,this._key=t,this._defaultValue=a,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function yc(e,n,t){const a=e[n];return ue(a)?a:new kc(e,n,t)}var oi;class vc{constructor(n,t,a,o){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[oi]=!1,this._dirty=!0,this.effect=new To(n,()=>{this._dirty||(this._dirty=!0,ni(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=a}get value(){const n=Q(this);return ei(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}oi="__v_isReadonly";function xc(e,n,t=!1){let a,o;const r=W(e);return r?(a=e,o=He):(a=e.get,o=e.set),new vc(a,o,r||!o,t)}function kn(e,n,t,a){let o;try{o=a?e(...a):e()}catch(r){wa(r,n,t)}return o}function ze(e,n,t,a){if(W(e)){const r=kn(e,n,t,a);return r&&Ns(r)&&r.catch(s=>{wa(s,n,t)}),r}const o=[];for(let r=0;r<e.length;r++)o.push(ze(e[r],n,t,a));return o}function wa(e,n,t,a=!0){const o=n?n.vnode:null;if(n){let r=n.parent;const s=n.proxy,i=t;for(;r;){const m=r.ec;if(m){for(let c=0;c<m.length;c++)if(m[c](e,s,i)===!1)return}r=r.parent}const l=n.appContext.config.errorHandler;if(l){kn(l,null,10,[e,s,i]);return}}wc(e,t,o,a)}function wc(e,n,t,a=!0){console.error(e)}let At=!1,Qa=!1;const ve=[];let Ge=0;const Gn=[];let en=null,Cn=0;const ri=Promise.resolve();let Fo=null;function Do(e){const n=Fo||ri;return e?n.then(this?e.bind(this):e):n}function jc(e){let n=Ge+1,t=ve.length;for(;n<t;){const a=n+t>>>1;Ot(ve[a])<e?n=a+1:t=a}return n}function No(e){(!ve.length||!ve.includes(e,At&&e.allowRecurse?Ge+1:Ge))&&(e.id==null?ve.push(e):ve.splice(jc(e.id),0,e),si())}function si(){!At&&!Qa&&(Qa=!0,Fo=ri.then(li))}function _c(e){const n=ve.indexOf(e);n>Ge&&ve.splice(n,1)}function Sc(e){M(e)?Gn.push(...e):(!en||!en.includes(e,e.allowRecurse?Cn+1:Cn))&&Gn.push(e),si()}function hr(e,n=At?Ge+1:0){for(;n<ve.length;n++){const t=ve[n];t&&t.pre&&(ve.splice(n,1),n--,t())}}function ii(e){if(Gn.length){const n=[...new Set(Gn)];if(Gn.length=0,en){en.push(...n);return}for(en=n,en.sort((t,a)=>Ot(t)-Ot(a)),Cn=0;Cn<en.length;Cn++)en[Cn]();en=null,Cn=0}}const Ot=e=>e.id==null?1/0:e.id,Ac=(e,n)=>{const t=Ot(e)-Ot(n);if(t===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return t};function li(e){Qa=!1,At=!0,ve.sort(Ac);const n=He;try{for(Ge=0;Ge<ve.length;Ge++){const t=ve[Ge];t&&t.active!==!1&&kn(t,null,14)}}finally{Ge=0,ve.length=0,ii(),At=!1,Fo=null,(ve.length||Gn.length)&&li()}}function Oc(e,n,...t){if(e.isUnmounted)return;const a=e.vnode.props||ie;let o=t;const r=n.startsWith("update:"),s=r&&n.slice(7);if(s&&s in a){const c=`${s==="modelValue"?"model":s}Modifiers`,{number:d,trim:p}=a[c]||ie;p&&(o=t.map(b=>pe(b)?b.trim():b)),d&&(o=t.map(Us))}let i,l=a[i=Pa(n)]||a[i=Pa(Xe(n))];!l&&r&&(l=a[i=Pa(at(n))]),l&&ze(l,e,6,o);const m=a[i+"Once"];if(m){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,ze(m,e,6,o)}}function ci(e,n,t=!1){const a=n.emitsCache,o=a.get(e);if(o!==void 0)return o;const r=e.emits;let s={},i=!1;if(!W(e)){const l=m=>{const c=ci(m,n,!0);c&&(i=!0,_e(s,c))};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!i?(le(e)&&a.set(e,null),null):(M(r)?r.forEach(l=>s[l]=null):_e(s,r),le(e)&&a.set(e,s),s)}function ja(e,n){return!e||!ha(n)?!1:(n=n.slice(2).replace(/Once$/,""),Y(e,n[0].toLowerCase()+n.slice(1))||Y(e,at(n))||Y(e,n))}let xe=null,mi=null;function ca(e){const n=xe;return xe=e,mi=e&&e.type.__scopeId||null,n}function dn(e,n=xe,t){if(!n||e._n)return e;const a=(...o)=>{a._d&&Ar(-1);const r=ca(n);let s;try{s=e(...o)}finally{ca(r),a._d&&Ar(1)}return s};return a._n=!0,a._c=!0,a._d=!0,a}function Da(e){const{type:n,vnode:t,proxy:a,withProxy:o,props:r,propsOptions:[s],slots:i,attrs:l,emit:m,render:c,renderCache:d,data:p,setupState:b,ctx:x,inheritAttrs:S}=e;let D,O;const I=ca(e);try{if(t.shapeFlag&4){const q=o||a;D=Ke(c.call(q,q,d,r,b,p,x)),O=l}else{const q=n;D=Ke(q.length>1?q(r,{attrs:l,slots:i,emit:m}):q(r,null)),O=n.props?l:Tc(l)}}catch(q){kt.length=0,wa(q,e,1),D=ae(vn)}let C=D;if(O&&S!==!1){const q=Object.keys(O),{shapeFlag:H}=C;q.length&&H&7&&(s&&q.some(jo)&&(O=Cc(O,s)),C=Xn(C,O))}return t.dirs&&(C=Xn(C),C.dirs=C.dirs?C.dirs.concat(t.dirs):t.dirs),t.transition&&(C.transition=t.transition),D=C,ca(I),D}const Tc=e=>{let n;for(const t in e)(t==="class"||t==="style"||ha(t))&&((n||(n={}))[t]=e[t]);return n},Cc=(e,n)=>{const t={};for(const a in e)(!jo(a)||!(a.slice(9)in n))&&(t[a]=e[a]);return t};function Ec(e,n,t){const{props:a,children:o,component:r}=e,{props:s,children:i,patchFlag:l}=n,m=r.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return a?kr(a,s,m):!!s;if(l&8){const c=n.dynamicProps;for(let d=0;d<c.length;d++){const p=c[d];if(s[p]!==a[p]&&!ja(m,p))return!0}}}else return(o||i)&&(!i||!i.$stable)?!0:a===s?!1:a?s?kr(a,s,m):!0:!!s;return!1}function kr(e,n,t){const a=Object.keys(n);if(a.length!==Object.keys(e).length)return!0;for(let o=0;o<a.length;o++){const r=a[o];if(n[r]!==e[r]&&!ja(t,r))return!0}return!1}function Rc({vnode:e,parent:n},t){for(;n&&n.subTree===e;)(e=n.vnode).el=t,n=n.parent}const Ic=e=>e.__isSuspense;function Pc(e,n){n&&n.pendingBranch?M(e)?n.effects.push(...e):n.effects.push(e):Sc(e)}function ta(e,n){if(ke){let t=ke.provides;const a=ke.parent&&ke.parent.provides;a===t&&(t=ke.provides=Object.create(a)),t[e]=n}}function Qe(e,n,t=!1){const a=ke||xe;if(a){const o=a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return t&&W(n)?n.call(a.proxy):n}}const Bt={};function bt(e,n,t){return ui(e,n,t)}function ui(e,n,{immediate:t,deep:a,flush:o,onTrack:r,onTrigger:s}=ie){const i=ke;let l,m=!1,c=!1;if(ue(e)?(l=()=>e.value,m=la(e)):hn(e)?(l=()=>e,a=!0):M(e)?(c=!0,m=e.some(C=>hn(C)||la(C)),l=()=>e.map(C=>{if(ue(C))return C.value;if(hn(C))return zn(C);if(W(C))return kn(C,i,2)})):W(e)?n?l=()=>kn(e,i,2):l=()=>{if(!(i&&i.isUnmounted))return d&&d(),ze(e,i,3,[p])}:l=He,n&&a){const C=l;l=()=>zn(C())}let d,p=C=>{d=O.onStop=()=>{kn(C,i,4)}},b;if(Ct)if(p=He,n?t&&ze(n,i,3,[l(),c?[]:void 0,p]):l(),o==="sync"){const C=Tm();b=C.__watcherHandles||(C.__watcherHandles=[])}else return He;let x=c?new Array(e.length).fill(Bt):Bt;const S=()=>{if(O.active)if(n){const C=O.run();(a||m||(c?C.some((q,H)=>_t(q,x[H])):_t(C,x)))&&(d&&d(),ze(n,i,3,[C,x===Bt?void 0:c&&x[0]===Bt?[]:x,p]),x=C)}else O.run()};S.allowRecurse=!!n;let D;o==="sync"?D=S:o==="post"?D=()=>Oe(S,i&&i.suspense):(S.pre=!0,i&&(S.id=i.uid),D=()=>No(S));const O=new To(l,D);n?t?S():x=O.run():o==="post"?Oe(O.run.bind(O),i&&i.suspense):O.run();const I=()=>{O.stop(),i&&i.scope&&_o(i.scope.effects,O)};return b&&b.push(I),I}function Fc(e,n,t){const a=this.proxy,o=pe(e)?e.includes(".")?di(a,e):()=>a[e]:e.bind(a,a);let r;W(n)?r=n:(r=n.handler,t=n);const s=ke;Zn(this);const i=ui(o,r.bind(a),t);return s?Zn(s):Dn(),i}function di(e,n){const t=n.split(".");return()=>{let a=e;for(let o=0;o<t.length&&a;o++)a=a[t[o]];return a}}function zn(e,n){if(!le(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),ue(e))zn(e.value,n);else if(M(e))for(let t=0;t<e.length;t++)zn(e[t],n);else if(Ds(e)||Kn(e))e.forEach(t=>{zn(t,n)});else if($s(e))for(const t in e)zn(e[t],n);return e}function Lo(e){return W(e)?{setup:e,name:e.name}:e}const gt=e=>!!e.type.__asyncLoader,fi=e=>e.type.__isKeepAlive;function Dc(e,n){pi(e,"a",n)}function Nc(e,n){pi(e,"da",n)}function pi(e,n,t=ke){const a=e.__wdc||(e.__wdc=()=>{let o=t;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(_a(n,a,t),t){let o=t.parent;for(;o&&o.parent;)fi(o.parent.vnode)&&Lc(a,n,t,o),o=o.parent}}function Lc(e,n,t,a){const o=_a(n,e,a,!0);gi(()=>{_o(a[n],o)},t)}function _a(e,n,t=ke,a=!1){if(t){const o=t[e]||(t[e]=[]),r=n.__weh||(n.__weh=(...s)=>{if(t.isUnmounted)return;ot(),Zn(t);const i=ze(n,t,e,s);return Dn(),rt(),i});return a?o.unshift(r):o.push(r),r}}const rn=e=>(n,t=ke)=>(!Ct||e==="sp")&&_a(e,(...a)=>n(...a),t),$c=rn("bm"),bi=rn("m"),Uc=rn("bu"),Mc=rn("u"),qc=rn("bum"),gi=rn("um"),Hc=rn("sp"),zc=rn("rtg"),Wc=rn("rtc");function Bc(e,n=ke){_a("ec",e,n)}function Sn(e,n,t,a){const o=e.dirs,r=n&&n.dirs;for(let s=0;s<o.length;s++){const i=o[s];r&&(i.oldValue=r[s].value);let l=i.dir[a];l&&(ot(),ze(l,t,8,[e.el,i,e,n]),rt())}}const $o="components";function Vc(e,n){return ki($o,e,!0,n)||e}const hi=Symbol();function Ap(e){return pe(e)?ki($o,e,!1)||e:e||hi}function ki(e,n,t=!0,a=!1){const o=xe||ke;if(o){const r=o.type;if(e===$o){const i=Sm(r,!1);if(i&&(i===n||i===Xe(n)||i===va(Xe(n))))return r}const s=yr(o[e]||r[e],n)||yr(o.appContext[e],n);return!s&&a?r:s}}function yr(e,n){return e&&(e[n]||e[Xe(n)]||e[va(Xe(n))])}function Kc(e,n,t,a){let o;const r=t&&t[a];if(M(e)||pe(e)){o=new Array(e.length);for(let s=0,i=e.length;s<i;s++)o[s]=n(e[s],s,void 0,r&&r[s])}else if(typeof e=="number"){o=new Array(e);for(let s=0;s<e;s++)o[s]=n(s+1,s,void 0,r&&r[s])}else if(le(e))if(e[Symbol.iterator])o=Array.from(e,(s,i)=>n(s,i,void 0,r&&r[i]));else{const s=Object.keys(e);o=new Array(s.length);for(let i=0,l=s.length;i<l;i++){const m=s[i];o[i]=n(e[m],m,i,r&&r[i])}}else o=[];return t&&(t[a]=o),o}function Gc(e,n,t={},a,o){if(xe.isCE||xe.parent&&gt(xe.parent)&&xe.parent.isCE)return n!=="default"&&(t.name=n),ae("slot",t,a&&a());let r=e[n];r&&r._c&&(r._d=!1),Je();const s=r&&yi(r(t)),i=qo(Re,{key:t.key||s&&s.key||`_${n}`},s||(a?a():[]),s&&e._===1?64:-2);return!o&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),r&&r._c&&(r._d=!0),i}function yi(e){return e.some(n=>ua(n)?!(n.type===vn||n.type===Re&&!yi(n.children)):!0)?e:null}const Ja=e=>e?Ei(e)?zo(e)||e.proxy:Ja(e.parent):null,ht=_e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ja(e.parent),$root:e=>Ja(e.root),$emit:e=>e.emit,$options:e=>Uo(e),$forceUpdate:e=>e.f||(e.f=()=>No(e.update)),$nextTick:e=>e.n||(e.n=Do.bind(e.proxy)),$watch:e=>Fc.bind(e)}),Na=(e,n)=>e!==ie&&!e.__isScriptSetup&&Y(e,n),Yc={get({_:e},n){const{ctx:t,setupState:a,data:o,props:r,accessCache:s,type:i,appContext:l}=e;let m;if(n[0]!=="$"){const b=s[n];if(b!==void 0)switch(b){case 1:return a[n];case 2:return o[n];case 4:return t[n];case 3:return r[n]}else{if(Na(a,n))return s[n]=1,a[n];if(o!==ie&&Y(o,n))return s[n]=2,o[n];if((m=e.propsOptions[0])&&Y(m,n))return s[n]=3,r[n];if(t!==ie&&Y(t,n))return s[n]=4,t[n];Xa&&(s[n]=0)}}const c=ht[n];let d,p;if(c)return n==="$attrs"&&Pe(e,"get",n),c(e);if((d=i.__cssModules)&&(d=d[n]))return d;if(t!==ie&&Y(t,n))return s[n]=4,t[n];if(p=l.config.globalProperties,Y(p,n))return p[n]},set({_:e},n,t){const{data:a,setupState:o,ctx:r}=e;return Na(o,n)?(o[n]=t,!0):a!==ie&&Y(a,n)?(a[n]=t,!0):Y(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(r[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:a,appContext:o,propsOptions:r}},s){let i;return!!t[s]||e!==ie&&Y(e,s)||Na(n,s)||(i=r[0])&&Y(i,s)||Y(a,s)||Y(ht,s)||Y(o.config.globalProperties,s)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:Y(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};let Xa=!0;function Qc(e){const n=Uo(e),t=e.proxy,a=e.ctx;Xa=!1,n.beforeCreate&&vr(n.beforeCreate,e,"bc");const{data:o,computed:r,methods:s,watch:i,provide:l,inject:m,created:c,beforeMount:d,mounted:p,beforeUpdate:b,updated:x,activated:S,deactivated:D,beforeDestroy:O,beforeUnmount:I,destroyed:C,unmounted:q,render:H,renderTracked:ee,renderTriggered:z,errorCaptured:V,serverPrefetch:se,expose:ge,inheritAttrs:Se,components:De,directives:ln,filters:Te}=n;if(m&&Jc(m,a,null,e.appContext.config.unwrapInjectedRef),s)for(const ne in s){const X=s[ne];W(X)&&(a[ne]=X.bind(t))}if(o){const ne=o.call(t,t);le(ne)&&(e.data=st(ne))}if(Xa=!0,r)for(const ne in r){const X=r[ne],Ne=W(X)?X.bind(t,t):W(X.get)?X.get.bind(t,t):He,_n=!W(X)&&W(X.set)?X.set.bind(t):He,Le=Ie({get:Ne,set:_n});Object.defineProperty(a,ne,{enumerable:!0,configurable:!0,get:()=>Le.value,set:Ae=>Le.value=Ae})}if(i)for(const ne in i)vi(i[ne],a,t,ne);if(l){const ne=W(l)?l.call(t):l;Reflect.ownKeys(ne).forEach(X=>{ta(X,ne[X])})}c&&vr(c,e,"c");function de(ne,X){M(X)?X.forEach(Ne=>ne(Ne.bind(t))):X&&ne(X.bind(t))}if(de($c,d),de(bi,p),de(Uc,b),de(Mc,x),de(Dc,S),de(Nc,D),de(Bc,V),de(Wc,ee),de(zc,z),de(qc,I),de(gi,q),de(Hc,se),M(ge))if(ge.length){const ne=e.exposed||(e.exposed={});ge.forEach(X=>{Object.defineProperty(ne,X,{get:()=>t[X],set:Ne=>t[X]=Ne})})}else e.exposed||(e.exposed={});H&&e.render===He&&(e.render=H),Se!=null&&(e.inheritAttrs=Se),De&&(e.components=De),ln&&(e.directives=ln)}function Jc(e,n,t=He,a=!1){M(e)&&(e=Za(e));for(const o in e){const r=e[o];let s;le(r)?"default"in r?s=Qe(r.from||o,r.default,!0):s=Qe(r.from||o):s=Qe(r),ue(s)&&a?Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:i=>s.value=i}):n[o]=s}}function vr(e,n,t){ze(M(e)?e.map(a=>a.bind(n.proxy)):e.bind(n.proxy),n,t)}function vi(e,n,t,a){const o=a.includes(".")?di(t,a):()=>t[a];if(pe(e)){const r=n[e];W(r)&&bt(o,r)}else if(W(e))bt(o,e.bind(t));else if(le(e))if(M(e))e.forEach(r=>vi(r,n,t,a));else{const r=W(e.handler)?e.handler.bind(t):n[e.handler];W(r)&&bt(o,r,e)}}function Uo(e){const n=e.type,{mixins:t,extends:a}=n,{mixins:o,optionsCache:r,config:{optionMergeStrategies:s}}=e.appContext,i=r.get(n);let l;return i?l=i:!o.length&&!t&&!a?l=n:(l={},o.length&&o.forEach(m=>ma(l,m,s,!0)),ma(l,n,s)),le(n)&&r.set(n,l),l}function ma(e,n,t,a=!1){const{mixins:o,extends:r}=n;r&&ma(e,r,t,!0),o&&o.forEach(s=>ma(e,s,t,!0));for(const s in n)if(!(a&&s==="expose")){const i=Xc[s]||t&&t[s];e[s]=i?i(e[s],n[s]):n[s]}return e}const Xc={data:xr,props:On,emits:On,methods:On,computed:On,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:On,directives:On,watch:em,provide:xr,inject:Zc};function xr(e,n){return n?e?function(){return _e(W(e)?e.call(this,this):e,W(n)?n.call(this,this):n)}:n:e}function Zc(e,n){return On(Za(e),Za(n))}function Za(e){if(M(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function we(e,n){return e?[...new Set([].concat(e,n))]:n}function On(e,n){return e?_e(_e(Object.create(null),e),n):n}function em(e,n){if(!e)return n;if(!n)return e;const t=_e(Object.create(null),e);for(const a in n)t[a]=we(e[a],n[a]);return t}function nm(e,n,t,a=!1){const o={},r={};ia(r,Aa,1),e.propsDefaults=Object.create(null),xi(e,n,o,r);for(const s in e.propsOptions[0])s in o||(o[s]=void 0);t?e.props=a?o:fc(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function tm(e,n,t,a){const{props:o,attrs:r,vnode:{patchFlag:s}}=e,i=Q(o),[l]=e.propsOptions;let m=!1;if((a||s>0)&&!(s&16)){if(s&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let p=c[d];if(ja(e.emitsOptions,p))continue;const b=n[p];if(l)if(Y(r,p))b!==r[p]&&(r[p]=b,m=!0);else{const x=Xe(p);o[x]=eo(l,i,x,b,e,!1)}else b!==r[p]&&(r[p]=b,m=!0)}}}else{xi(e,n,o,r)&&(m=!0);let c;for(const d in i)(!n||!Y(n,d)&&((c=at(d))===d||!Y(n,c)))&&(l?t&&(t[d]!==void 0||t[c]!==void 0)&&(o[d]=eo(l,i,d,void 0,e,!0)):delete o[d]);if(r!==i)for(const d in r)(!n||!Y(n,d))&&(delete r[d],m=!0)}m&&nn(e,"set","$attrs")}function xi(e,n,t,a){const[o,r]=e.propsOptions;let s=!1,i;if(n)for(let l in n){if(na(l))continue;const m=n[l];let c;o&&Y(o,c=Xe(l))?!r||!r.includes(c)?t[c]=m:(i||(i={}))[c]=m:ja(e.emitsOptions,l)||(!(l in a)||m!==a[l])&&(a[l]=m,s=!0)}if(r){const l=Q(t),m=i||ie;for(let c=0;c<r.length;c++){const d=r[c];t[d]=eo(o,l,d,m[d],e,!Y(m,d))}}return s}function eo(e,n,t,a,o,r){const s=e[t];if(s!=null){const i=Y(s,"default");if(i&&a===void 0){const l=s.default;if(s.type!==Function&&W(l)){const{propsDefaults:m}=o;t in m?a=m[t]:(Zn(o),a=m[t]=l.call(null,n),Dn())}else a=l}s[0]&&(r&&!i?a=!1:s[1]&&(a===""||a===at(t))&&(a=!0))}return a}function wi(e,n,t=!1){const a=n.propsCache,o=a.get(e);if(o)return o;const r=e.props,s={},i=[];let l=!1;if(!W(e)){const c=d=>{l=!0;const[p,b]=wi(d,n,!0);_e(s,p),b&&i.push(...b)};!t&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!r&&!l)return le(e)&&a.set(e,Vn),Vn;if(M(r))for(let c=0;c<r.length;c++){const d=Xe(r[c]);wr(d)&&(s[d]=ie)}else if(r)for(const c in r){const d=Xe(c);if(wr(d)){const p=r[c],b=s[d]=M(p)||W(p)?{type:p}:Object.assign({},p);if(b){const x=Sr(Boolean,b.type),S=Sr(String,b.type);b[0]=x>-1,b[1]=S<0||x<S,(x>-1||Y(b,"default"))&&i.push(d)}}}const m=[s,i];return le(e)&&a.set(e,m),m}function wr(e){return e[0]!=="$"}function jr(e){const n=e&&e.toString().match(/^\s*function (\w+)/);return n?n[1]:e===null?"null":""}function _r(e,n){return jr(e)===jr(n)}function Sr(e,n){return M(n)?n.findIndex(t=>_r(t,e)):W(n)&&_r(n,e)?0:-1}const ji=e=>e[0]==="_"||e==="$stable",Mo=e=>M(e)?e.map(Ke):[Ke(e)],am=(e,n,t)=>{if(n._n)return n;const a=dn((...o)=>Mo(n(...o)),t);return a._c=!1,a},_i=(e,n,t)=>{const a=e._ctx;for(const o in e){if(ji(o))continue;const r=e[o];if(W(r))n[o]=am(o,r,a);else if(r!=null){const s=Mo(r);n[o]=()=>s}}},Si=(e,n)=>{const t=Mo(n);e.slots.default=()=>t},om=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=Q(n),ia(n,"_",t)):_i(n,e.slots={})}else e.slots={},n&&Si(e,n);ia(e.slots,Aa,1)},rm=(e,n,t)=>{const{vnode:a,slots:o}=e;let r=!0,s=ie;if(a.shapeFlag&32){const i=n._;i?t&&i===1?r=!1:(_e(o,n),!t&&i===1&&delete o._):(r=!n.$stable,_i(n,o)),s=n}else n&&(Si(e,n),s={default:1});if(r)for(const i in o)!ji(i)&&!(i in s)&&delete o[i]};function Ai(){return{app:null,config:{isNativeTag:Il,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sm=0;function im(e,n){return function(a,o=null){W(a)||(a=Object.assign({},a)),o!=null&&!le(o)&&(o=null);const r=Ai(),s=new Set;let i=!1;const l=r.app={_uid:sm++,_component:a,_props:o,_container:null,_context:r,_instance:null,version:Cm,get config(){return r.config},set config(m){},use(m,...c){return s.has(m)||(m&&W(m.install)?(s.add(m),m.install(l,...c)):W(m)&&(s.add(m),m(l,...c))),l},mixin(m){return r.mixins.includes(m)||r.mixins.push(m),l},component(m,c){return c?(r.components[m]=c,l):r.components[m]},directive(m,c){return c?(r.directives[m]=c,l):r.directives[m]},mount(m,c,d){if(!i){const p=ae(a,o);return p.appContext=r,c&&n?n(p,m):e(p,m,d),i=!0,l._container=m,m.__vue_app__=l,zo(p.component)||p.component.proxy}},unmount(){i&&(e(null,l._container),delete l._container.__vue_app__)},provide(m,c){return r.provides[m]=c,l}};return l}}function no(e,n,t,a,o=!1){if(M(e)){e.forEach((p,b)=>no(p,n&&(M(n)?n[b]:n),t,a,o));return}if(gt(a)&&!o)return;const r=a.shapeFlag&4?zo(a.component)||a.component.proxy:a.el,s=o?null:r,{i,r:l}=e,m=n&&n.r,c=i.refs===ie?i.refs={}:i.refs,d=i.setupState;if(m!=null&&m!==l&&(pe(m)?(c[m]=null,Y(d,m)&&(d[m]=null)):ue(m)&&(m.value=null)),W(l))kn(l,i,12,[s,c]);else{const p=pe(l),b=ue(l);if(p||b){const x=()=>{if(e.f){const S=p?Y(d,l)?d[l]:c[l]:l.value;o?M(S)&&_o(S,r):M(S)?S.includes(r)||S.push(r):p?(c[l]=[r],Y(d,l)&&(d[l]=c[l])):(l.value=[r],e.k&&(c[e.k]=l.value))}else p?(c[l]=s,Y(d,l)&&(d[l]=s)):b&&(l.value=s,e.k&&(c[e.k]=s))};s?(x.id=-1,Oe(x,t)):x()}}}const Oe=Pc;function lm(e){return cm(e)}function cm(e,n){const t=$l();t.__VUE__=!0;const{insert:a,remove:o,patchProp:r,createElement:s,createText:i,createComment:l,setText:m,setElementText:c,parentNode:d,nextSibling:p,setScopeId:b=He,insertStaticContent:x}=e,S=(u,f,g,h=null,y=null,j=null,T=!1,w=null,_=!!f.dynamicChildren)=>{if(u===f)return;u&&!mt(u,f)&&(h=A(u),Ae(u,y,j,!0),u=null),f.patchFlag===-2&&(_=!1,f.dynamicChildren=null);const{type:v,ref:L,shapeFlag:P}=f;switch(v){case Sa:D(u,f,g,h);break;case vn:O(u,f,g,h);break;case aa:u==null&&I(f,g,h,T);break;case Re:De(u,f,g,h,y,j,T,w,_);break;default:P&1?H(u,f,g,h,y,j,T,w,_):P&6?ln(u,f,g,h,y,j,T,w,_):(P&64||P&128)&&v.process(u,f,g,h,y,j,T,w,_,G)}L!=null&&y&&no(L,u&&u.ref,j,f||u,!f)},D=(u,f,g,h)=>{if(u==null)a(f.el=i(f.children),g,h);else{const y=f.el=u.el;f.children!==u.children&&m(y,f.children)}},O=(u,f,g,h)=>{u==null?a(f.el=l(f.children||""),g,h):f.el=u.el},I=(u,f,g,h)=>{[u.el,u.anchor]=x(u.children,f,g,h,u.el,u.anchor)},C=({el:u,anchor:f},g,h)=>{let y;for(;u&&u!==f;)y=p(u),a(u,g,h),u=y;a(f,g,h)},q=({el:u,anchor:f})=>{let g;for(;u&&u!==f;)g=p(u),o(u),u=g;o(f)},H=(u,f,g,h,y,j,T,w,_)=>{T=T||f.type==="svg",u==null?ee(f,g,h,y,j,T,w,_):se(u,f,y,j,T,w,_)},ee=(u,f,g,h,y,j,T,w)=>{let _,v;const{type:L,props:P,shapeFlag:$,transition:U,dirs:K}=u;if(_=u.el=s(u.type,j,P&&P.is,P),$&8?c(_,u.children):$&16&&V(u.children,_,null,h,y,j&&L!=="foreignObject",T,w),K&&Sn(u,null,h,"created"),P){for(const Z in P)Z!=="value"&&!na(Z)&&r(_,Z,null,P[Z],j,u.children,h,y,E);"value"in P&&r(_,"value",null,P.value),(v=P.onVnodeBeforeMount)&&Ve(v,h,u)}z(_,u,u.scopeId,T,h),K&&Sn(u,null,h,"beforeMount");const te=(!y||y&&!y.pendingBranch)&&U&&!U.persisted;te&&U.beforeEnter(_),a(_,f,g),((v=P&&P.onVnodeMounted)||te||K)&&Oe(()=>{v&&Ve(v,h,u),te&&U.enter(_),K&&Sn(u,null,h,"mounted")},y)},z=(u,f,g,h,y)=>{if(g&&b(u,g),h)for(let j=0;j<h.length;j++)b(u,h[j]);if(y){let j=y.subTree;if(f===j){const T=y.vnode;z(u,T,T.scopeId,T.slotScopeIds,y.parent)}}},V=(u,f,g,h,y,j,T,w,_=0)=>{for(let v=_;v<u.length;v++){const L=u[v]=w?fn(u[v]):Ke(u[v]);S(null,L,f,g,h,y,j,T,w)}},se=(u,f,g,h,y,j,T)=>{const w=f.el=u.el;let{patchFlag:_,dynamicChildren:v,dirs:L}=f;_|=u.patchFlag&16;const P=u.props||ie,$=f.props||ie;let U;g&&An(g,!1),(U=$.onVnodeBeforeUpdate)&&Ve(U,g,f,u),L&&Sn(f,u,g,"beforeUpdate"),g&&An(g,!0);const K=y&&f.type!=="foreignObject";if(v?ge(u.dynamicChildren,v,w,g,h,K,j):T||X(u,f,w,null,g,h,K,j,!1),_>0){if(_&16)Se(w,f,P,$,g,h,y);else if(_&2&&P.class!==$.class&&r(w,"class",null,$.class,y),_&4&&r(w,"style",P.style,$.style,y),_&8){const te=f.dynamicProps;for(let Z=0;Z<te.length;Z++){const fe=te[Z],$e=P[fe],Un=$[fe];(Un!==$e||fe==="value")&&r(w,fe,$e,Un,y,u.children,g,h,E)}}_&1&&u.children!==f.children&&c(w,f.children)}else!T&&v==null&&Se(w,f,P,$,g,h,y);((U=$.onVnodeUpdated)||L)&&Oe(()=>{U&&Ve(U,g,f,u),L&&Sn(f,u,g,"updated")},h)},ge=(u,f,g,h,y,j,T)=>{for(let w=0;w<f.length;w++){const _=u[w],v=f[w],L=_.el&&(_.type===Re||!mt(_,v)||_.shapeFlag&70)?d(_.el):g;S(_,v,L,null,h,y,j,T,!0)}},Se=(u,f,g,h,y,j,T)=>{if(g!==h){if(g!==ie)for(const w in g)!na(w)&&!(w in h)&&r(u,w,g[w],null,T,f.children,y,j,E);for(const w in h){if(na(w))continue;const _=h[w],v=g[w];_!==v&&w!=="value"&&r(u,w,v,_,T,f.children,y,j,E)}"value"in h&&r(u,"value",g.value,h.value)}},De=(u,f,g,h,y,j,T,w,_)=>{const v=f.el=u?u.el:i(""),L=f.anchor=u?u.anchor:i("");let{patchFlag:P,dynamicChildren:$,slotScopeIds:U}=f;U&&(w=w?w.concat(U):U),u==null?(a(v,g,h),a(L,g,h),V(f.children,g,L,y,j,T,w,_)):P>0&&P&64&&$&&u.dynamicChildren?(ge(u.dynamicChildren,$,g,y,j,T,w),(f.key!=null||y&&f===y.subTree)&&Oi(u,f,!0)):X(u,f,g,L,y,j,T,w,_)},ln=(u,f,g,h,y,j,T,w,_)=>{f.slotScopeIds=w,u==null?f.shapeFlag&512?y.ctx.activate(f,g,h,T,_):Te(f,g,h,y,j,T,_):he(u,f,_)},Te=(u,f,g,h,y,j,T)=>{const w=u.component=ym(u,h,y);if(fi(u)&&(w.ctx.renderer=G),xm(w),w.asyncDep){if(y&&y.registerDep(w,de),!u.el){const _=w.subTree=ae(vn);O(null,_,f,g)}return}de(w,u,f,g,y,j,T)},he=(u,f,g)=>{const h=f.component=u.component;if(Ec(u,f,g))if(h.asyncDep&&!h.asyncResolved){ne(h,f,g);return}else h.next=f,_c(h.update),h.update();else f.el=u.el,h.vnode=f},de=(u,f,g,h,y,j,T)=>{const w=()=>{if(u.isMounted){let{next:L,bu:P,u:$,parent:U,vnode:K}=u,te=L,Z;An(u,!1),L?(L.el=K.el,ne(u,L,T)):L=K,P&&Fa(P),(Z=L.props&&L.props.onVnodeBeforeUpdate)&&Ve(Z,U,L,K),An(u,!0);const fe=Da(u),$e=u.subTree;u.subTree=fe,S($e,fe,d($e.el),A($e),u,y,j),L.el=fe.el,te===null&&Rc(u,fe.el),$&&Oe($,y),(Z=L.props&&L.props.onVnodeUpdated)&&Oe(()=>Ve(Z,U,L,K),y)}else{let L;const{el:P,props:$}=f,{bm:U,m:K,parent:te}=u,Z=gt(f);if(An(u,!1),U&&Fa(U),!Z&&(L=$&&$.onVnodeBeforeMount)&&Ve(L,te,f),An(u,!0),P&&B){const fe=()=>{u.subTree=Da(u),B(P,u.subTree,u,y,null)};Z?f.type.__asyncLoader().then(()=>!u.isUnmounted&&fe()):fe()}else{const fe=u.subTree=Da(u);S(null,fe,g,h,u,y,j),f.el=fe.el}if(K&&Oe(K,y),!Z&&(L=$&&$.onVnodeMounted)){const fe=f;Oe(()=>Ve(L,te,fe),y)}(f.shapeFlag&256||te&&gt(te.vnode)&&te.vnode.shapeFlag&256)&&u.a&&Oe(u.a,y),u.isMounted=!0,f=g=h=null}},_=u.effect=new To(w,()=>No(v),u.scope),v=u.update=()=>_.run();v.id=u.uid,An(u,!0),v()},ne=(u,f,g)=>{f.component=u;const h=u.vnode.props;u.vnode=f,u.next=null,tm(u,f.props,h,g),rm(u,f.children,g),ot(),hr(),rt()},X=(u,f,g,h,y,j,T,w,_=!1)=>{const v=u&&u.children,L=u?u.shapeFlag:0,P=f.children,{patchFlag:$,shapeFlag:U}=f;if($>0){if($&128){_n(v,P,g,h,y,j,T,w,_);return}else if($&256){Ne(v,P,g,h,y,j,T,w,_);return}}U&8?(L&16&&E(v,y,j),P!==v&&c(g,P)):L&16?U&16?_n(v,P,g,h,y,j,T,w,_):E(v,y,j,!0):(L&8&&c(g,""),U&16&&V(P,g,h,y,j,T,w,_))},Ne=(u,f,g,h,y,j,T,w,_)=>{u=u||Vn,f=f||Vn;const v=u.length,L=f.length,P=Math.min(v,L);let $;for($=0;$<P;$++){const U=f[$]=_?fn(f[$]):Ke(f[$]);S(u[$],U,g,null,y,j,T,w,_)}v>L?E(u,y,j,!0,!1,P):V(f,g,h,y,j,T,w,_,P)},_n=(u,f,g,h,y,j,T,w,_)=>{let v=0;const L=f.length;let P=u.length-1,$=L-1;for(;v<=P&&v<=$;){const U=u[v],K=f[v]=_?fn(f[v]):Ke(f[v]);if(mt(U,K))S(U,K,g,null,y,j,T,w,_);else break;v++}for(;v<=P&&v<=$;){const U=u[P],K=f[$]=_?fn(f[$]):Ke(f[$]);if(mt(U,K))S(U,K,g,null,y,j,T,w,_);else break;P--,$--}if(v>P){if(v<=$){const U=$+1,K=U<L?f[U].el:h;for(;v<=$;)S(null,f[v]=_?fn(f[v]):Ke(f[v]),g,K,y,j,T,w,_),v++}}else if(v>$)for(;v<=P;)Ae(u[v],y,j,!0),v++;else{const U=v,K=v,te=new Map;for(v=K;v<=$;v++){const Ce=f[v]=_?fn(f[v]):Ke(f[v]);Ce.key!=null&&te.set(Ce.key,v)}let Z,fe=0;const $e=$-K+1;let Un=!1,sr=0;const ct=new Array($e);for(v=0;v<$e;v++)ct[v]=0;for(v=U;v<=P;v++){const Ce=u[v];if(fe>=$e){Ae(Ce,y,j,!0);continue}let Be;if(Ce.key!=null)Be=te.get(Ce.key);else for(Z=K;Z<=$;Z++)if(ct[Z-K]===0&&mt(Ce,f[Z])){Be=Z;break}Be===void 0?Ae(Ce,y,j,!0):(ct[Be-K]=v+1,Be>=sr?sr=Be:Un=!0,S(Ce,f[Be],g,null,y,j,T,w,_),fe++)}const ir=Un?mm(ct):Vn;for(Z=ir.length-1,v=$e-1;v>=0;v--){const Ce=K+v,Be=f[Ce],lr=Ce+1<L?f[Ce+1].el:h;ct[v]===0?S(null,Be,g,lr,y,j,T,w,_):Un&&(Z<0||v!==ir[Z]?Le(Be,g,lr,2):Z--)}}},Le=(u,f,g,h,y=null)=>{const{el:j,type:T,transition:w,children:_,shapeFlag:v}=u;if(v&6){Le(u.component.subTree,f,g,h);return}if(v&128){u.suspense.move(f,g,h);return}if(v&64){T.move(u,f,g,G);return}if(T===Re){a(j,f,g);for(let P=0;P<_.length;P++)Le(_[P],f,g,h);a(u.anchor,f,g);return}if(T===aa){C(u,f,g);return}if(h!==2&&v&1&&w)if(h===0)w.beforeEnter(j),a(j,f,g),Oe(()=>w.enter(j),y);else{const{leave:P,delayLeave:$,afterLeave:U}=w,K=()=>a(j,f,g),te=()=>{P(j,()=>{K(),U&&U()})};$?$(j,K,te):te()}else a(j,f,g)},Ae=(u,f,g,h=!1,y=!1)=>{const{type:j,props:T,ref:w,children:_,dynamicChildren:v,shapeFlag:L,patchFlag:P,dirs:$}=u;if(w!=null&&no(w,null,g,u,!0),L&256){f.ctx.deactivate(u);return}const U=L&1&&$,K=!gt(u);let te;if(K&&(te=T&&T.onVnodeBeforeUnmount)&&Ve(te,f,u),L&6)k(u.component,g,h);else{if(L&128){u.suspense.unmount(g,h);return}U&&Sn(u,null,f,"beforeUnmount"),L&64?u.type.remove(u,f,g,y,G,h):v&&(j!==Re||P>0&&P&64)?E(v,f,g,!1,!0):(j===Re&&P&384||!y&&L&16)&&E(_,f,g),h&&$n(u)}(K&&(te=T&&T.onVnodeUnmounted)||U)&&Oe(()=>{te&&Ve(te,f,u),U&&Sn(u,null,f,"unmounted")},g)},$n=u=>{const{type:f,el:g,anchor:h,transition:y}=u;if(f===Re){Ut(g,h);return}if(f===aa){q(u);return}const j=()=>{o(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:T,delayLeave:w}=y,_=()=>T(g,j);w?w(u.el,j,_):_()}else j()},Ut=(u,f)=>{let g;for(;u!==f;)g=p(u),o(u),u=g;o(f)},k=(u,f,g)=>{const{bum:h,scope:y,update:j,subTree:T,um:w}=u;h&&Fa(h),y.stop(),j&&(j.active=!1,Ae(T,u,f,g)),w&&Oe(w,f),Oe(()=>{u.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},E=(u,f,g,h=!1,y=!1,j=0)=>{for(let T=j;T<u.length;T++)Ae(u[T],f,g,h,y)},A=u=>u.shapeFlag&6?A(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),N=(u,f,g)=>{u==null?f._vnode&&Ae(f._vnode,null,null,!0):S(f._vnode||null,u,f,null,null,null,g),hr(),ii(),f._vnode=u},G={p:S,um:Ae,m:Le,r:$n,mt:Te,mc:V,pc:X,pbc:ge,n:A,o:e};let ce,B;return n&&([ce,B]=n(G)),{render:N,hydrate:ce,createApp:im(N,ce)}}function An({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function Oi(e,n,t=!1){const a=e.children,o=n.children;if(M(a)&&M(o))for(let r=0;r<a.length;r++){const s=a[r];let i=o[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=o[r]=fn(o[r]),i.el=s.el),t||Oi(s,i)),i.type===Sa&&(i.el=s.el)}}function mm(e){const n=e.slice(),t=[0];let a,o,r,s,i;const l=e.length;for(a=0;a<l;a++){const m=e[a];if(m!==0){if(o=t[t.length-1],e[o]<m){n[a]=o,t.push(a);continue}for(r=0,s=t.length-1;r<s;)i=r+s>>1,e[t[i]]<m?r=i+1:s=i;m<e[t[r]]&&(r>0&&(n[a]=t[r-1]),t[r]=a)}}for(r=t.length,s=t[r-1];r-- >0;)t[r]=s,s=n[s];return t}const um=e=>e.__isTeleport,Re=Symbol(void 0),Sa=Symbol(void 0),vn=Symbol(void 0),aa=Symbol(void 0),kt=[];let Me=null;function Je(e=!1){kt.push(Me=e?null:[])}function dm(){kt.pop(),Me=kt[kt.length-1]||null}let Tt=1;function Ar(e){Tt+=e}function Ti(e){return e.dynamicChildren=Tt>0?Me||Vn:null,dm(),Tt>0&&Me&&Me.push(e),e}function Fn(e,n,t,a,o,r){return Ti(ye(e,n,t,a,o,r,!0))}function qo(e,n,t,a,o){return Ti(ae(e,n,t,a,o,!0))}function ua(e){return e?e.__v_isVNode===!0:!1}function mt(e,n){return e.type===n.type&&e.key===n.key}const Aa="__vInternal",Ci=({key:e})=>e??null,oa=({ref:e,ref_key:n,ref_for:t})=>e!=null?pe(e)||ue(e)||W(e)?{i:xe,r:e,k:n,f:!!t}:e:null;function ye(e,n=null,t=null,a=0,o=null,r=e===Re?0:1,s=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Ci(n),ref:n&&oa(n),scopeId:mi,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:a,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:xe};return i?(Ho(l,t),r&128&&e.normalize(l)):t&&(l.shapeFlag|=pe(t)?8:16),Tt>0&&!s&&Me&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Me.push(l),l}const ae=fm;function fm(e,n=null,t=null,a=0,o=null,r=!1){if((!e||e===hi)&&(e=vn),ua(e)){const i=Xn(e,n,!0);return t&&Ho(i,t),Tt>0&&!r&&Me&&(i.shapeFlag&6?Me[Me.indexOf(e)]=i:Me.push(i)),i.patchFlag|=-2,i}if(Am(e)&&(e=e.__vccOpts),n){n=pm(n);let{class:i,style:l}=n;i&&!pe(i)&&(n.class=wo(i)),le(l)&&(Zs(l)&&!M(l)&&(l=_e({},l)),n.style=ga(l))}const s=pe(e)?1:Ic(e)?128:um(e)?64:le(e)?4:W(e)?2:0;return ye(e,n,t,a,o,s,r,!0)}function pm(e){return e?Zs(e)||Aa in e?_e({},e):e:null}function Xn(e,n,t=!1){const{props:a,ref:o,patchFlag:r,children:s}=e,i=n?gm(a||{},n):a;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&Ci(i),ref:n&&n.ref?t&&o?M(o)?o.concat(oa(n)):[o,oa(n)]:oa(n):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Re?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xn(e.ssContent),ssFallback:e.ssFallback&&Xn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function Tn(e=" ",n=0){return ae(Sa,null,e,n)}function bm(e,n){const t=ae(aa,null,e);return t.staticCount=n,t}function Op(e="",n=!1){return n?(Je(),qo(vn,null,e)):ae(vn,null,e)}function Ke(e){return e==null||typeof e=="boolean"?ae(vn):M(e)?ae(Re,null,e.slice()):typeof e=="object"?fn(e):ae(Sa,null,String(e))}function fn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Xn(e)}function Ho(e,n){let t=0;const{shapeFlag:a}=e;if(n==null)n=null;else if(M(n))t=16;else if(typeof n=="object")if(a&65){const o=n.default;o&&(o._c&&(o._d=!1),Ho(e,o()),o._c&&(o._d=!0));return}else{t=32;const o=n._;!o&&!(Aa in n)?n._ctx=xe:o===3&&xe&&(xe.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else W(n)?(n={default:n,_ctx:xe},t=32):(n=String(n),a&64?(t=16,n=[Tn(n)]):t=8);e.children=n,e.shapeFlag|=t}function gm(...e){const n={};for(let t=0;t<e.length;t++){const a=e[t];for(const o in a)if(o==="class")n.class!==a.class&&(n.class=wo([n.class,a.class]));else if(o==="style")n.style=ga([n.style,a.style]);else if(ha(o)){const r=n[o],s=a[o];s&&r!==s&&!(M(r)&&r.includes(s))&&(n[o]=r?[].concat(r,s):s)}else o!==""&&(n[o]=a[o])}return n}function Ve(e,n,t,a=null){ze(e,n,7,[t,a])}const hm=Ai();let km=0;function ym(e,n,t){const a=e.type,o=(n?n.appContext:e.appContext)||hm,r={uid:km++,vnode:e,type:a,parent:n,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ms(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wi(a,o),emitsOptions:ci(a,o),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:a.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=n?n.root:r,r.emit=Oc.bind(null,r),e.ce&&e.ce(r),r}let ke=null;const vm=()=>ke||xe,Zn=e=>{ke=e,e.scope.on()},Dn=()=>{ke&&ke.scope.off(),ke=null};function Ei(e){return e.vnode.shapeFlag&4}let Ct=!1;function xm(e,n=!1){Ct=n;const{props:t,children:a}=e.vnode,o=Ei(e);nm(e,t,o,n),om(e,a);const r=o?wm(e,n):void 0;return Ct=!1,r}function wm(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=Jn(new Proxy(e.ctx,Yc));const{setup:a}=t;if(a){const o=e.setupContext=a.length>1?_m(e):null;Zn(e),ot();const r=kn(a,e,0,[e.props,o]);if(rt(),Dn(),Ns(r)){if(r.then(Dn,Dn),n)return r.then(s=>{Or(e,s,n)}).catch(s=>{wa(s,e,0)});e.asyncDep=r}else Or(e,r,n)}else Ri(e,n)}function Or(e,n,t){W(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:le(n)&&(e.setupState=ai(n)),Ri(e,t)}let Tr;function Ri(e,n,t){const a=e.type;if(!e.render){if(!n&&Tr&&!a.render){const o=a.template||Uo(e).template;if(o){const{isCustomElement:r,compilerOptions:s}=e.appContext.config,{delimiters:i,compilerOptions:l}=a,m=_e(_e({isCustomElement:r,delimiters:i},s),l);a.render=Tr(o,m)}}e.render=a.render||He}Zn(e),ot(),Qc(e),rt(),Dn()}function jm(e){return new Proxy(e.attrs,{get(n,t){return Pe(e,"get","$attrs"),n[t]}})}function _m(e){const n=a=>{e.exposed=a||{}};let t;return{get attrs(){return t||(t=jm(e))},slots:e.slots,emit:e.emit,expose:n}}function zo(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ai(Jn(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in ht)return ht[t](e)},has(n,t){return t in n||t in ht}}))}function Sm(e,n=!0){return W(e)?e.displayName||e.name:e.name||n&&e.__name}function Am(e){return W(e)&&"__vccOpts"in e}const Ie=(e,n)=>xc(e,n,Ct);function Ii(e,n,t){const a=arguments.length;return a===2?le(n)&&!M(n)?ua(n)?ae(e,null,[n]):ae(e,n):ae(e,null,n):(a>3?t=Array.prototype.slice.call(arguments,2):a===3&&ua(t)&&(t=[t]),ae(e,n,t))}const Om=Symbol(""),Tm=()=>Qe(Om),Cm="3.2.45",Em="http://www.w3.org/2000/svg",En=typeof document<"u"?document:null,Cr=En&&En.createElement("template"),Rm={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,a)=>{const o=n?En.createElementNS(Em,e):En.createElement(e,t?{is:t}:void 0);return e==="select"&&a&&a.multiple!=null&&o.setAttribute("multiple",a.multiple),o},createText:e=>En.createTextNode(e),createComment:e=>En.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>En.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,a,o,r){const s=t?t.previousSibling:n.lastChild;if(o&&(o===r||o.nextSibling))for(;n.insertBefore(o.cloneNode(!0),t),!(o===r||!(o=o.nextSibling)););else{Cr.innerHTML=a?`<svg>${e}</svg>`:e;const i=Cr.content;if(a){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}n.insertBefore(i,t)}return[s?s.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}};function Im(e,n,t){const a=e._vtc;a&&(n=(n?[n,...a]:[...a]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}function Pm(e,n,t){const a=e.style,o=pe(t);if(t&&!o){for(const r in t)to(a,r,t[r]);if(n&&!pe(n))for(const r in n)t[r]==null&&to(a,r,"")}else{const r=a.display;o?n!==t&&(a.cssText=t):n&&e.removeAttribute("style"),"_vod"in e&&(a.display=r)}}const Er=/\s*!important$/;function to(e,n,t){if(M(t))t.forEach(a=>to(e,n,a));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const a=Fm(e,n);Er.test(t)?e.setProperty(at(a),t.replace(Er,""),"important"):e[a]=t}}const Rr=["Webkit","Moz","ms"],La={};function Fm(e,n){const t=La[n];if(t)return t;let a=Xe(n);if(a!=="filter"&&a in e)return La[n]=a;a=va(a);for(let o=0;o<Rr.length;o++){const r=Rr[o]+a;if(r in e)return La[n]=r}return n}const Ir="http://www.w3.org/1999/xlink";function Dm(e,n,t,a,o){if(a&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(Ir,n.slice(6,n.length)):e.setAttributeNS(Ir,n,t);else{const r=El(n);t==null||r&&!Ps(t)?e.removeAttribute(n):e.setAttribute(n,r?"":t)}}function Nm(e,n,t,a,o,r,s){if(n==="innerHTML"||n==="textContent"){a&&s(a,o,r),e[n]=t??"";return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=t;const l=t??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),t==null&&e.removeAttribute(n);return}let i=!1;if(t===""||t==null){const l=typeof e[n];l==="boolean"?t=Ps(t):t==null&&l==="string"?(t="",i=!0):l==="number"&&(t=0,i=!0)}try{e[n]=t}catch{}i&&e.removeAttribute(n)}function Lm(e,n,t,a){e.addEventListener(n,t,a)}function $m(e,n,t,a){e.removeEventListener(n,t,a)}function Um(e,n,t,a,o=null){const r=e._vei||(e._vei={}),s=r[n];if(a&&s)s.value=a;else{const[i,l]=Mm(n);if(a){const m=r[n]=zm(a,o);Lm(e,i,m,l)}else s&&($m(e,i,s,l),r[n]=void 0)}}const Pr=/(?:Once|Passive|Capture)$/;function Mm(e){let n;if(Pr.test(e)){n={};let a;for(;a=e.match(Pr);)e=e.slice(0,e.length-a[0].length),n[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):at(e.slice(2)),n]}let $a=0;const qm=Promise.resolve(),Hm=()=>$a||(qm.then(()=>$a=0),$a=Date.now());function zm(e,n){const t=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=t.attached)return;ze(Wm(a,t.value),n,5,[a])};return t.value=e,t.attached=Hm(),t}function Wm(e,n){if(M(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(a=>o=>!o._stopped&&a&&a(o))}else return n}const Fr=/^on[a-z]/,Bm=(e,n,t,a,o=!1,r,s,i,l)=>{n==="class"?Im(e,a,o):n==="style"?Pm(e,t,a):ha(n)?jo(n)||Um(e,n,t,a,s):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Vm(e,n,a,o))?Nm(e,n,a,r,s,i,l):(n==="true-value"?e._trueValue=a:n==="false-value"&&(e._falseValue=a),Dm(e,n,a,o))};function Vm(e,n,t,a){return a?!!(n==="innerHTML"||n==="textContent"||n in e&&Fr.test(n)&&W(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||Fr.test(n)&&pe(t)?!1:n in e}const Km=["ctrl","shift","alt","meta"],Gm={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>Km.some(t=>e[`${t}Key`]&&!n.includes(t))},Ym=(e,n)=>(t,...a)=>{for(let o=0;o<n.length;o++){const r=Gm[n[o]];if(r&&r(t,n))return}return e(t,...a)},Qm=_e({patchProp:Bm},Rm);let Dr;function Jm(){return Dr||(Dr=lm(Qm))}const Xm=(...e)=>{const n=Jm().createApp(...e),{mount:t}=n;return n.mount=a=>{const o=Zm(a);if(!o)return;const r=n._component;!W(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.innerHTML="";const s=t(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},n};function Zm(e){return pe(e)?document.querySelector(e):e}var eu=!1;/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Pi;const Oa=e=>Pi=e,Fi=Symbol();function ao(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var yt;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(yt||(yt={}));function nu(){const e=qs(!0),n=e.run(()=>it({}));let t=[],a=[];const o=Jn({install(r){Oa(o),o._a=r,r.provide(Fi,o),r.config.globalProperties.$pinia=o,a.forEach(s=>t.push(s)),a=[]},use(r){return!this._a&&!eu?a.push(r):t.push(r),this},_p:t,_a:null,_e:e,_s:new Map,state:n});return o}const Di=()=>{};function Nr(e,n,t,a=Di){e.push(n);const o=()=>{const r=e.indexOf(n);r>-1&&(e.splice(r,1),a())};return!t&&Ml()&&ql(o),o}function Mn(e,...n){e.slice().forEach(t=>{t(...n)})}function oo(e,n){e instanceof Map&&n instanceof Map&&n.forEach((t,a)=>e.set(a,t)),e instanceof Set&&n instanceof Set&&n.forEach(e.add,e);for(const t in n){if(!n.hasOwnProperty(t))continue;const a=n[t],o=e[t];ao(o)&&ao(a)&&e.hasOwnProperty(t)&&!ue(a)&&!hn(a)?e[t]=oo(o,a):e[t]=a}return e}const tu=Symbol();function au(e){return!ao(e)||!e.hasOwnProperty(tu)}const{assign:pn}=Object;function ou(e){return!!(ue(e)&&e.effect)}function ru(e,n,t,a){const{state:o,actions:r,getters:s}=n,i=t.state.value[e];let l;function m(){i||(t.state.value[e]=o?o():{});const c=hc(t.state.value[e]);return pn(c,r,Object.keys(s||{}).reduce((d,p)=>(d[p]=Jn(Ie(()=>{Oa(t);const b=t._s.get(e);return s[p].call(b,b)})),d),{}))}return l=Ni(e,m,n,t,a,!0),l.$reset=function(){const d=o?o():{};this.$patch(p=>{pn(p,d)})},l}function Ni(e,n,t={},a,o,r){let s;const i=pn({actions:{}},t),l={deep:!0};let m,c,d=Jn([]),p=Jn([]),b;const x=a.state.value[e];!r&&!x&&(a.state.value[e]={}),it({});let S;function D(z){let V;m=c=!1,typeof z=="function"?(z(a.state.value[e]),V={type:yt.patchFunction,storeId:e,events:b}):(oo(a.state.value[e],z),V={type:yt.patchObject,payload:z,storeId:e,events:b});const se=S=Symbol();Do().then(()=>{S===se&&(m=!0)}),c=!0,Mn(d,V,a.state.value[e])}const O=Di;function I(){s.stop(),d=[],p=[],a._s.delete(e)}function C(z,V){return function(){Oa(a);const se=Array.from(arguments),ge=[],Se=[];function De(he){ge.push(he)}function ln(he){Se.push(he)}Mn(p,{args:se,name:z,store:H,after:De,onError:ln});let Te;try{Te=V.apply(this&&this.$id===e?this:H,se)}catch(he){throw Mn(Se,he),he}return Te instanceof Promise?Te.then(he=>(Mn(ge,he),he)).catch(he=>(Mn(Se,he),Promise.reject(he))):(Mn(ge,Te),Te)}}const q={_p:a,$id:e,$onAction:Nr.bind(null,p),$patch:D,$reset:O,$subscribe(z,V={}){const se=Nr(d,z,V.detached,()=>ge()),ge=s.run(()=>bt(()=>a.state.value[e],Se=>{(V.flush==="sync"?c:m)&&z({storeId:e,type:yt.direct,events:b},Se)},pn({},l,V)));return se},$dispose:I},H=st(q);a._s.set(e,H);const ee=a._e.run(()=>(s=qs(),s.run(()=>n())));for(const z in ee){const V=ee[z];if(ue(V)&&!ou(V)||hn(V))r||(x&&au(V)&&(ue(V)?V.value=x[z]:oo(V,x[z])),a.state.value[e][z]=V);else if(typeof V=="function"){const se=C(z,V);ee[z]=se,i.actions[z]=V}}return pn(H,ee),pn(Q(H),ee),Object.defineProperty(H,"$state",{get:()=>a.state.value[e],set:z=>{D(V=>{pn(V,z)})}}),a._p.forEach(z=>{pn(H,s.run(()=>z({store:H,app:a._a,pinia:a,options:i})))}),x&&r&&t.hydrate&&t.hydrate(H.$state,x),m=!0,c=!0,H}function su(e,n,t){let a,o;const r=typeof n=="function";typeof e=="string"?(a=e,o=r?t:n):(o=e,a=e.id);function s(i,l){const m=vm();return i=i||m&&Qe(Fi,null),i&&Oa(i),i=Pi,i._s.has(a)||(r?Ni(a,n,o,i):ru(a,o,i)),i._s.get(a)}return s.$id=a,s}var iu=Object.defineProperty,Lr=Object.getOwnPropertySymbols,lu=Object.prototype.hasOwnProperty,cu=Object.prototype.propertyIsEnumerable,$r=(e,n,t)=>n in e?iu(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Ur=(e,n)=>{for(var t in n||(n={}))lu.call(n,t)&&$r(e,t,n[t]);if(Lr)for(var t of Lr(n))cu.call(n,t)&&$r(e,t,n[t]);return e};function mu(e){return typeof e=="object"&&e!==null}function uu(e){return e}function Mr(e,n){return e=mu(e)?e:Object.create(null),new Proxy(e,{get(t,a,o){var r;return a==="key"?((r=n.key)!=null?r:uu)(Reflect.get(t,a,o)):Reflect.get(t,a,o)||Reflect.get(n,a,o)}})}function qr(e){return e!==null&&typeof e=="object"}function ro(e,n){const t=Array.isArray(e)&&Array.isArray(n),a=qr(e)&&qr(n);if(!t&&!a)throw new Error("Can only merge object with object or array with array");const o=t?[]:{};return[...Object.keys(e),...Object.keys(n)].forEach(s=>{Array.isArray(e[s])&&Array.isArray(n[s])?o[s]=[...Object.values(ro(e[s],n[s]))]:n[s]!==null&&typeof n[s]=="object"&&typeof e[s]=="object"?o[s]=ro(e[s],n[s]):e[s]!==void 0&&n[s]===void 0?o[s]=e[s]:e[s]===void 0&&n[s]!==void 0&&(o[s]=n[s])}),o}function Hr(e,n){return n.reduce((t,a)=>a==="[]"&&Array.isArray(t)?t:t==null?void 0:t[a],e)}function zr(e,n,t){const a=n.slice(0,-1).reduce((o,r)=>/^(__proto__)$/.test(r)?{}:o[r]=o[r]||{},e);if(Array.isArray(a[n[n.length-1]])&&Array.isArray(t)){const o=a[n[n.length-1]].map((r,s)=>Array.isArray(r)&&typeof r!="object"?[...r,...t[s]]:typeof r=="object"&&r!==null&&Object.keys(r).some(i=>Array.isArray(r[i]))?ro(r,t[s]):Ur(Ur({},r),t[s]));a[n[n.length-1]]=o}else n[n.length-1]===void 0&&Array.isArray(a)&&Array.isArray(t)?a.push(...t):a[n[n.length-1]]=t;return e}function Li(e,n){return n.reduce((t,a)=>{const o=a.split(".");if(!o.includes("[]"))return zr(t,o,Hr(e,o));const r=o.indexOf("[]"),s=o.slice(0,r),i=o.slice(0,r+1),l=o.slice(r+1),m=Hr(e,i),c=[];for(const d of m)l.length!==0&&(Array.isArray(d)||typeof d=="object")?c.push(Li(d,[l.join(".")])):c.push(d);return zr(t,s,c)},Array.isArray(e)?[]:{})}function Wr(e,n,t,a,o){try{const r=n==null?void 0:n.getItem(a);r&&e.$patch(t==null?void 0:t.deserialize(r))}catch(r){o&&console.error(r)}}function du(e={}){return n=>{const{options:{persist:t},store:a}=n;if(!t)return;const o=(Array.isArray(t)?t.map(r=>Mr(r,e)):[Mr(t,e)]).map(({storage:r=localStorage,beforeRestore:s=null,afterRestore:i=null,serializer:l={serialize:JSON.stringify,deserialize:JSON.parse},key:m=a.$id,paths:c=null,debug:d=!1})=>({storage:r,beforeRestore:s,afterRestore:i,serializer:l,key:m,paths:c,debug:d}));o.forEach(r=>{const{storage:s,serializer:i,key:l,paths:m,beforeRestore:c,afterRestore:d,debug:p}=r;c==null||c(n),Wr(a,s,i,l,p),d==null||d(n),a.$subscribe((b,x)=>{try{const S=Array.isArray(m)?Li(x,m):x;s.setItem(l,i.serialize(S))}catch(S){p&&console.error(S)}},{detached:!0})}),a.$hydrate=({runHooks:r=!0}={})=>{o.forEach(s=>{const{beforeRestore:i,afterRestore:l,storage:m,serializer:c,key:d,debug:p}=s;r&&(i==null||i(n)),Wr(a,m,c,d,p),r&&(l==null||l(n))})}}}var fu=du();function Br(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,a)}return t}function R(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Br(Object(t),!0).forEach(function(a){be(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Br(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function da(e){return da=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},da(e)}function pu(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Vr(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function bu(e,n,t){return n&&Vr(e.prototype,n),t&&Vr(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function be(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Wo(e,n){return hu(e)||yu(e,n)||$i(e,n)||xu()}function Nt(e){return gu(e)||ku(e)||$i(e)||vu()}function gu(e){if(Array.isArray(e))return so(e)}function hu(e){if(Array.isArray(e))return e}function ku(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function yu(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var a=[],o=!0,r=!1,s,i;try{for(t=t.call(e);!(o=(s=t.next()).done)&&(a.push(s.value),!(n&&a.length===n));o=!0);}catch(l){r=!0,i=l}finally{try{!o&&t.return!=null&&t.return()}finally{if(r)throw i}}return a}}function $i(e,n){if(e){if(typeof e=="string")return so(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return so(e,n)}}function so(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function vu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Kr=function(){},Bo={},Ui={},Mi=null,qi={mark:Kr,measure:Kr};try{typeof window<"u"&&(Bo=window),typeof document<"u"&&(Ui=document),typeof MutationObserver<"u"&&(Mi=MutationObserver),typeof performance<"u"&&(qi=performance)}catch{}var wu=Bo.navigator||{},Gr=wu.userAgent,Yr=Gr===void 0?"":Gr,xn=Bo,re=Ui,Qr=Mi,Vt=qi;xn.document;var sn=!!re.documentElement&&!!re.head&&typeof re.addEventListener=="function"&&typeof re.createElement=="function",Hi=~Yr.indexOf("MSIE")||~Yr.indexOf("Trident/"),Kt,Gt,Yt,Qt,Jt,tn="___FONT_AWESOME___",io=16,zi="fa",Wi="svg-inline--fa",Nn="data-fa-i2svg",lo="data-fa-pseudo-element",ju="data-fa-pseudo-element-pending",Vo="data-prefix",Ko="data-icon",Jr="fontawesome-i2svg",_u="async",Su=["HTML","HEAD","STYLE","SCRIPT"],Bi=function(){try{return!0}catch{return!1}}(),oe="classic",me="sharp",Go=[oe,me];function Lt(e){return new Proxy(e,{get:function(t,a){return a in t?t[a]:t[oe]}})}var Et=Lt((Kt={},be(Kt,oe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),be(Kt,me,{fa:"solid",fass:"solid","fa-solid":"solid"}),Kt)),Rt=Lt((Gt={},be(Gt,oe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),be(Gt,me,{solid:"fass"}),Gt)),It=Lt((Yt={},be(Yt,oe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),be(Yt,me,{fass:"fa-solid"}),Yt)),Au=Lt((Qt={},be(Qt,oe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),be(Qt,me,{"fa-solid":"fass"}),Qt)),Ou=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Vi="fa-layers-text",Tu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Cu=Lt((Jt={},be(Jt,oe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),be(Jt,me,{900:"fass"}),Jt)),Ki=[1,2,3,4,5,6,7,8,9,10],Eu=Ki.concat([11,12,13,14,15,16,17,18,19,20]),Ru=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Rn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Pt=new Set;Object.keys(Rt[oe]).map(Pt.add.bind(Pt));Object.keys(Rt[me]).map(Pt.add.bind(Pt));var Iu=[].concat(Go,Nt(Pt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Rn.GROUP,Rn.SWAP_OPACITY,Rn.PRIMARY,Rn.SECONDARY]).concat(Ki.map(function(e){return"".concat(e,"x")})).concat(Eu.map(function(e){return"w-".concat(e)})),vt=xn.FontAwesomeConfig||{};function Pu(e){var n=re.querySelector("script["+e+"]");if(n)return n.getAttribute(e)}function Fu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(re&&typeof re.querySelector=="function"){var Du=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Du.forEach(function(e){var n=Wo(e,2),t=n[0],a=n[1],o=Fu(Pu(t));o!=null&&(vt[a]=o)})}var Gi={styleDefault:"solid",familyDefault:"classic",cssPrefix:zi,replacementClass:Wi,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};vt.familyPrefix&&(vt.cssPrefix=vt.familyPrefix);var et=R(R({},Gi),vt);et.autoReplaceSvg||(et.observeMutations=!1);var F={};Object.keys(Gi).forEach(function(e){Object.defineProperty(F,e,{enumerable:!0,set:function(t){et[e]=t,xt.forEach(function(a){return a(F)})},get:function(){return et[e]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(n){et.cssPrefix=n,xt.forEach(function(t){return t(F)})},get:function(){return et.cssPrefix}});xn.FontAwesomeConfig=F;var xt=[];function Nu(e){return xt.push(e),function(){xt.splice(xt.indexOf(e),1)}}var mn=io,Ye={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Lu(e){if(!(!e||!sn)){var n=re.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e;for(var t=re.head.childNodes,a=null,o=t.length-1;o>-1;o--){var r=t[o],s=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=r)}return re.head.insertBefore(n,a),e}}var $u="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ft(){for(var e=12,n="";e-- >0;)n+=$u[Math.random()*62|0];return n}function lt(e){for(var n=[],t=(e||[]).length>>>0;t--;)n[t]=e[t];return n}function Yo(e){return e.classList?lt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Yi(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Uu(e){return Object.keys(e||{}).reduce(function(n,t){return n+"".concat(t,'="').concat(Yi(e[t]),'" ')},"").trim()}function Ta(e){return Object.keys(e||{}).reduce(function(n,t){return n+"".concat(t,": ").concat(e[t].trim(),";")},"")}function Qo(e){return e.size!==Ye.size||e.x!==Ye.x||e.y!==Ye.y||e.rotate!==Ye.rotate||e.flipX||e.flipY}function Mu(e){var n=e.transform,t=e.containerWidth,a=e.iconWidth,o={transform:"translate(".concat(t/2," 256)")},r="translate(".concat(n.x*32,", ").concat(n.y*32,") "),s="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),i="rotate(".concat(n.rotate," 0 0)"),l={transform:"".concat(r," ").concat(s," ").concat(i)},m={transform:"translate(".concat(a/2*-1," -256)")};return{outer:o,inner:l,path:m}}function qu(e){var n=e.transform,t=e.width,a=t===void 0?io:t,o=e.height,r=o===void 0?io:o,s=e.startCentered,i=s===void 0?!1:s,l="";return i&&Hi?l+="translate(".concat(n.x/mn-a/2,"em, ").concat(n.y/mn-r/2,"em) "):i?l+="translate(calc(-50% + ".concat(n.x/mn,"em), calc(-50% + ").concat(n.y/mn,"em)) "):l+="translate(".concat(n.x/mn,"em, ").concat(n.y/mn,"em) "),l+="scale(".concat(n.size/mn*(n.flipX?-1:1),", ").concat(n.size/mn*(n.flipY?-1:1),") "),l+="rotate(".concat(n.rotate,"deg) "),l}var Hu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Qi(){var e=zi,n=Wi,t=F.cssPrefix,a=F.replacementClass,o=Hu;if(t!==e||a!==n){var r=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),i=new RegExp("\\.".concat(n),"g");o=o.replace(r,".".concat(t,"-")).replace(s,"--".concat(t,"-")).replace(i,".".concat(a))}return o}var Xr=!1;function Ua(){F.autoAddCss&&!Xr&&(Lu(Qi()),Xr=!0)}var zu={mixout:function(){return{dom:{css:Qi,insertCss:Ua}}},hooks:function(){return{beforeDOMElementCreation:function(){Ua()},beforeI2svg:function(){Ua()}}}},an=xn||{};an[tn]||(an[tn]={});an[tn].styles||(an[tn].styles={});an[tn].hooks||(an[tn].hooks={});an[tn].shims||(an[tn].shims=[]);var qe=an[tn],Ji=[],Wu=function e(){re.removeEventListener("DOMContentLoaded",e),fa=1,Ji.map(function(n){return n()})},fa=!1;sn&&(fa=(re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(re.readyState),fa||re.addEventListener("DOMContentLoaded",Wu));function Bu(e){sn&&(fa?setTimeout(e,0):Ji.push(e))}function $t(e){var n=e.tag,t=e.attributes,a=t===void 0?{}:t,o=e.children,r=o===void 0?[]:o;return typeof e=="string"?Yi(e):"<".concat(n," ").concat(Uu(a),">").concat(r.map($t).join(""),"</").concat(n,">")}function Zr(e,n,t){if(e&&e[n]&&e[n][t])return{prefix:n,iconName:t,icon:e[n][t]}}var Vu=function(n,t){return function(a,o,r,s){return n.call(t,a,o,r,s)}},Ma=function(n,t,a,o){var r=Object.keys(n),s=r.length,i=o!==void 0?Vu(t,o):t,l,m,c;for(a===void 0?(l=1,c=n[r[0]]):(l=0,c=a);l<s;l++)m=r[l],c=i(c,n[m],m,n);return c};function Ku(e){for(var n=[],t=0,a=e.length;t<a;){var o=e.charCodeAt(t++);if(o>=55296&&o<=56319&&t<a){var r=e.charCodeAt(t++);(r&64512)==56320?n.push(((o&1023)<<10)+(r&1023)+65536):(n.push(o),t--)}else n.push(o)}return n}function co(e){var n=Ku(e);return n.length===1?n[0].toString(16):null}function Gu(e,n){var t=e.length,a=e.charCodeAt(n),o;return a>=55296&&a<=56319&&t>n+1&&(o=e.charCodeAt(n+1),o>=56320&&o<=57343)?(a-55296)*1024+o-56320+65536:a}function es(e){return Object.keys(e).reduce(function(n,t){var a=e[t],o=!!a.icon;return o?n[a.iconName]=a.icon:n[t]=a,n},{})}function mo(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=t.skipHooks,o=a===void 0?!1:a,r=es(n);typeof qe.hooks.addPack=="function"&&!o?qe.hooks.addPack(e,es(n)):qe.styles[e]=R(R({},qe.styles[e]||{}),r),e==="fas"&&mo("fa",n)}var Xt,Zt,ea,Wn=qe.styles,Yu=qe.shims,Qu=(Xt={},be(Xt,oe,Object.values(It[oe])),be(Xt,me,Object.values(It[me])),Xt),Jo=null,Xi={},Zi={},el={},nl={},tl={},Ju=(Zt={},be(Zt,oe,Object.keys(Et[oe])),be(Zt,me,Object.keys(Et[me])),Zt);function Xu(e){return~Iu.indexOf(e)}function Zu(e,n){var t=n.split("-"),a=t[0],o=t.slice(1).join("-");return a===e&&o!==""&&!Xu(o)?o:null}var al=function(){var n=function(r){return Ma(Wn,function(s,i,l){return s[l]=Ma(i,r,{}),s},{})};Xi=n(function(o,r,s){if(r[3]&&(o[r[3]]=s),r[2]){var i=r[2].filter(function(l){return typeof l=="number"});i.forEach(function(l){o[l.toString(16)]=s})}return o}),Zi=n(function(o,r,s){if(o[s]=s,r[2]){var i=r[2].filter(function(l){return typeof l=="string"});i.forEach(function(l){o[l]=s})}return o}),tl=n(function(o,r,s){var i=r[2];return o[s]=s,i.forEach(function(l){o[l]=s}),o});var t="far"in Wn||F.autoFetchSvg,a=Ma(Yu,function(o,r){var s=r[0],i=r[1],l=r[2];return i==="far"&&!t&&(i="fas"),typeof s=="string"&&(o.names[s]={prefix:i,iconName:l}),typeof s=="number"&&(o.unicodes[s.toString(16)]={prefix:i,iconName:l}),o},{names:{},unicodes:{}});el=a.names,nl=a.unicodes,Jo=Ca(F.styleDefault,{family:F.familyDefault})};Nu(function(e){Jo=Ca(e.styleDefault,{family:F.familyDefault})});al();function Xo(e,n){return(Xi[e]||{})[n]}function ed(e,n){return(Zi[e]||{})[n]}function In(e,n){return(tl[e]||{})[n]}function ol(e){return el[e]||{prefix:null,iconName:null}}function nd(e){var n=nl[e],t=Xo("fas",e);return n||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function wn(){return Jo}var Zo=function(){return{prefix:null,iconName:null,rest:[]}};function Ca(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.family,a=t===void 0?oe:t,o=Et[a][e],r=Rt[a][e]||Rt[a][o],s=e in qe.styles?e:null;return r||s||null}var ns=(ea={},be(ea,oe,Object.keys(It[oe])),be(ea,me,Object.keys(It[me])),ea);function Ea(e){var n,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,o=a===void 0?!1:a,r=(n={},be(n,oe,"".concat(F.cssPrefix,"-").concat(oe)),be(n,me,"".concat(F.cssPrefix,"-").concat(me)),n),s=null,i=oe;(e.includes(r[oe])||e.some(function(m){return ns[oe].includes(m)}))&&(i=oe),(e.includes(r[me])||e.some(function(m){return ns[me].includes(m)}))&&(i=me);var l=e.reduce(function(m,c){var d=Zu(F.cssPrefix,c);if(Wn[c]?(c=Qu[i].includes(c)?Au[i][c]:c,s=c,m.prefix=c):Ju[i].indexOf(c)>-1?(s=c,m.prefix=Ca(c,{family:i})):d?m.iconName=d:c!==F.replacementClass&&c!==r[oe]&&c!==r[me]&&m.rest.push(c),!o&&m.prefix&&m.iconName){var p=s==="fa"?ol(m.iconName):{},b=In(m.prefix,m.iconName);p.prefix&&(s=null),m.iconName=p.iconName||b||m.iconName,m.prefix=p.prefix||m.prefix,m.prefix==="far"&&!Wn.far&&Wn.fas&&!F.autoFetchSvg&&(m.prefix="fas")}return m},Zo());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&i===me&&(Wn.fass||F.autoFetchSvg)&&(l.prefix="fass",l.iconName=In(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=wn()||"fas"),l}var td=function(){function e(){pu(this,e),this.definitions={}}return bu(e,[{key:"add",value:function(){for(var t=this,a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];var s=o.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(i){t.definitions[i]=R(R({},t.definitions[i]||{}),s[i]),mo(i,s[i]);var l=It[oe][i];l&&mo(l,s[i]),al()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,a){var o=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(o).map(function(r){var s=o[r],i=s.prefix,l=s.iconName,m=s.icon,c=m[2];t[i]||(t[i]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(t[i][d]=m)}),t[i][l]=m}),t}}]),e}(),ts=[],Bn={},Yn={},ad=Object.keys(Yn);function od(e,n){var t=n.mixoutsTo;return ts=e,Bn={},Object.keys(Yn).forEach(function(a){ad.indexOf(a)===-1&&delete Yn[a]}),ts.forEach(function(a){var o=a.mixout?a.mixout():{};if(Object.keys(o).forEach(function(s){typeof o[s]=="function"&&(t[s]=o[s]),da(o[s])==="object"&&Object.keys(o[s]).forEach(function(i){t[s]||(t[s]={}),t[s][i]=o[s][i]})}),a.hooks){var r=a.hooks();Object.keys(r).forEach(function(s){Bn[s]||(Bn[s]=[]),Bn[s].push(r[s])})}a.provides&&a.provides(Yn)}),t}function uo(e,n){for(var t=arguments.length,a=new Array(t>2?t-2:0),o=2;o<t;o++)a[o-2]=arguments[o];var r=Bn[e]||[];return r.forEach(function(s){n=s.apply(null,[n].concat(a))}),n}function Ln(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];var o=Bn[e]||[];o.forEach(function(r){r.apply(null,t)})}function on(){var e=arguments[0],n=Array.prototype.slice.call(arguments,1);return Yn[e]?Yn[e].apply(null,n):void 0}function fo(e){e.prefix==="fa"&&(e.prefix="fas");var n=e.iconName,t=e.prefix||wn();if(n)return n=In(t,n)||n,Zr(rl.definitions,t,n)||Zr(qe.styles,t,n)}var rl=new td,rd=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,Ln("noAuto")},sd={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return sn?(Ln("beforeI2svg",n),on("pseudoElements2svg",n),on("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,Bu(function(){ld({autoReplaceSvgRoot:t}),Ln("watch",n)})}},id={icon:function(n){if(n===null)return null;if(da(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:In(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var t=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=Ca(n[0]);return{prefix:a,iconName:In(a,t)||t}}if(typeof n=="string"&&(n.indexOf("".concat(F.cssPrefix,"-"))>-1||n.match(Ou))){var o=Ea(n.split(" "),{skipLookups:!0});return{prefix:o.prefix||wn(),iconName:In(o.prefix,o.iconName)||o.iconName}}if(typeof n=="string"){var r=wn();return{prefix:r,iconName:In(r,n)||n}}}},Fe={noAuto:rd,config:F,dom:sd,parse:id,library:rl,findIconDefinition:fo,toHtml:$t},ld=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot,a=t===void 0?re:t;(Object.keys(qe.styles).length>0||F.autoFetchSvg)&&sn&&F.autoReplaceSvg&&Fe.dom.i2svg({node:a})};function Ra(e,n){return Object.defineProperty(e,"abstract",{get:n}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return $t(a)})}}),Object.defineProperty(e,"node",{get:function(){if(sn){var a=re.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function cd(e){var n=e.children,t=e.main,a=e.mask,o=e.attributes,r=e.styles,s=e.transform;if(Qo(s)&&t.found&&!a.found){var i=t.width,l=t.height,m={x:i/l/2,y:.5};o.style=Ta(R(R({},r),{},{"transform-origin":"".concat(m.x+s.x/16,"em ").concat(m.y+s.y/16,"em")}))}return[{tag:"svg",attributes:o,children:n}]}function md(e){var n=e.prefix,t=e.iconName,a=e.children,o=e.attributes,r=e.symbol,s=r===!0?"".concat(n,"-").concat(F.cssPrefix,"-").concat(t):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},o),{},{id:s}),children:a}]}]}function er(e){var n=e.icons,t=n.main,a=n.mask,o=e.prefix,r=e.iconName,s=e.transform,i=e.symbol,l=e.title,m=e.maskId,c=e.titleId,d=e.extra,p=e.watchable,b=p===void 0?!1:p,x=a.found?a:t,S=x.width,D=x.height,O=o==="fak",I=[F.replacementClass,r?"".concat(F.cssPrefix,"-").concat(r):""].filter(function(se){return d.classes.indexOf(se)===-1}).filter(function(se){return se!==""||!!se}).concat(d.classes).join(" "),C={children:[],attributes:R(R({},d.attributes),{},{"data-prefix":o,"data-icon":r,class:I,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(D)})},q=O&&!~d.classes.indexOf("fa-fw")?{width:"".concat(S/D*16*.0625,"em")}:{};b&&(C.attributes[Nn]=""),l&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(c||Ft())},children:[l]}),delete C.attributes.title);var H=R(R({},C),{},{prefix:o,iconName:r,main:t,mask:a,maskId:m,transform:s,symbol:i,styles:R(R({},q),d.styles)}),ee=a.found&&t.found?on("generateAbstractMask",H)||{children:[],attributes:{}}:on("generateAbstractIcon",H)||{children:[],attributes:{}},z=ee.children,V=ee.attributes;return H.children=z,H.attributes=V,i?md(H):cd(H)}function as(e){var n=e.content,t=e.width,a=e.height,o=e.transform,r=e.title,s=e.extra,i=e.watchable,l=i===void 0?!1:i,m=R(R(R({},s.attributes),r?{title:r}:{}),{},{class:s.classes.join(" ")});l&&(m[Nn]="");var c=R({},s.styles);Qo(o)&&(c.transform=qu({transform:o,startCentered:!0,width:t,height:a}),c["-webkit-transform"]=c.transform);var d=Ta(c);d.length>0&&(m.style=d);var p=[];return p.push({tag:"span",attributes:m,children:[n]}),r&&p.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),p}function ud(e){var n=e.content,t=e.title,a=e.extra,o=R(R(R({},a.attributes),t?{title:t}:{}),{},{class:a.classes.join(" ")}),r=Ta(a.styles);r.length>0&&(o.style=r);var s=[];return s.push({tag:"span",attributes:o,children:[n]}),t&&s.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),s}var qa=qe.styles;function po(e){var n=e[0],t=e[1],a=e.slice(4),o=Wo(a,1),r=o[0],s=null;return Array.isArray(r)?s={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(Rn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(Rn.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(Rn.PRIMARY),fill:"currentColor",d:r[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:n,height:t,icon:s}}var dd={found:!1,width:512,height:512};function fd(e,n){!Bi&&!F.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(n,'" is missing.'))}function bo(e,n){var t=n;return n==="fa"&&F.styleDefault!==null&&(n=wn()),new Promise(function(a,o){if(on("missingIconAbstract"),t==="fa"){var r=ol(e)||{};e=r.iconName||e,n=r.prefix||n}if(e&&n&&qa[n]&&qa[n][e]){var s=qa[n][e];return a(po(s))}fd(e,n),a(R(R({},dd),{},{icon:F.showMissingIcons&&e?on("missingIconAbstract")||{}:{}}))})}var os=function(){},go=F.measurePerformance&&Vt&&Vt.mark&&Vt.measure?Vt:{mark:os,measure:os},pt='FA "6.2.1"',pd=function(n){return go.mark("".concat(pt," ").concat(n," begins")),function(){return sl(n)}},sl=function(n){go.mark("".concat(pt," ").concat(n," ends")),go.measure("".concat(pt," ").concat(n),"".concat(pt," ").concat(n," begins"),"".concat(pt," ").concat(n," ends"))},nr={begin:pd,end:sl},ra=function(){};function rs(e){var n=e.getAttribute?e.getAttribute(Nn):null;return typeof n=="string"}function bd(e){var n=e.getAttribute?e.getAttribute(Vo):null,t=e.getAttribute?e.getAttribute(Ko):null;return n&&t}function gd(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(F.replacementClass)}function hd(){if(F.autoReplaceSvg===!0)return sa.replace;var e=sa[F.autoReplaceSvg];return e||sa.replace}function kd(e){return re.createElementNS("http://www.w3.org/2000/svg",e)}function yd(e){return re.createElement(e)}function il(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.ceFn,a=t===void 0?e.tag==="svg"?kd:yd:t;if(typeof e=="string")return re.createTextNode(e);var o=a(e.tag);Object.keys(e.attributes||[]).forEach(function(s){o.setAttribute(s,e.attributes[s])});var r=e.children||[];return r.forEach(function(s){o.appendChild(il(s,{ceFn:a}))}),o}function vd(e){var n=" ".concat(e.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var sa={replace:function(n){var t=n[0];if(t.parentNode)if(n[1].forEach(function(o){t.parentNode.insertBefore(il(o),t)}),t.getAttribute(Nn)===null&&F.keepOriginalSource){var a=re.createComment(vd(t));t.parentNode.replaceChild(a,t)}else t.remove()},nest:function(n){var t=n[0],a=n[1];if(~Yo(t).indexOf(F.replacementClass))return sa.replace(n);var o=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var r=a[0].attributes.class.split(" ").reduce(function(i,l){return l===F.replacementClass||l.match(o)?i.toSvg.push(l):i.toNode.push(l),i},{toNode:[],toSvg:[]});a[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",r.toNode.join(" "))}var s=a.map(function(i){return $t(i)}).join(`
`);t.setAttribute(Nn,""),t.innerHTML=s}};function ss(e){e()}function ll(e,n){var t=typeof n=="function"?n:ra;if(e.length===0)t();else{var a=ss;F.mutateApproach===_u&&(a=xn.requestAnimationFrame||ss),a(function(){var o=hd(),r=nr.begin("mutate");e.map(o),r(),t()})}}var tr=!1;function cl(){tr=!0}function ho(){tr=!1}var pa=null;function is(e){if(Qr&&F.observeMutations){var n=e.treeCallback,t=n===void 0?ra:n,a=e.nodeCallback,o=a===void 0?ra:a,r=e.pseudoElementsCallback,s=r===void 0?ra:r,i=e.observeMutationsRoot,l=i===void 0?re:i;pa=new Qr(function(m){if(!tr){var c=wn();lt(m).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!rs(d.addedNodes[0])&&(F.searchPseudoElements&&s(d.target),t(d.target)),d.type==="attributes"&&d.target.parentNode&&F.searchPseudoElements&&s(d.target.parentNode),d.type==="attributes"&&rs(d.target)&&~Ru.indexOf(d.attributeName))if(d.attributeName==="class"&&bd(d.target)){var p=Ea(Yo(d.target)),b=p.prefix,x=p.iconName;d.target.setAttribute(Vo,b||c),x&&d.target.setAttribute(Ko,x)}else gd(d.target)&&o(d.target)})}}),sn&&pa.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function xd(){pa&&pa.disconnect()}function wd(e){var n=e.getAttribute("style"),t=[];return n&&(t=n.split(";").reduce(function(a,o){var r=o.split(":"),s=r[0],i=r.slice(1);return s&&i.length>0&&(a[s]=i.join(":").trim()),a},{})),t}function jd(e){var n=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",o=Ea(Yo(e));return o.prefix||(o.prefix=wn()),n&&t&&(o.prefix=n,o.iconName=t),o.iconName&&o.prefix||(o.prefix&&a.length>0&&(o.iconName=ed(o.prefix,e.innerText)||Xo(o.prefix,co(e.innerText))),!o.iconName&&F.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=e.firstChild.data)),o}function _d(e){var n=lt(e.attributes).reduce(function(o,r){return o.name!=="class"&&o.name!=="style"&&(o[r.name]=r.value),o},{}),t=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return F.autoA11y&&(t?n["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(a||Ft()):(n["aria-hidden"]="true",n.focusable="false")),n}function Sd(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ye,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ls(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=jd(e),a=t.iconName,o=t.prefix,r=t.rest,s=_d(e),i=uo("parseNodeAttributes",{},e),l=n.styleParser?wd(e):[];return R({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:o,transform:Ye,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:s}},i)}var Ad=qe.styles;function ml(e){var n=F.autoReplaceSvg==="nest"?ls(e,{styleParser:!1}):ls(e);return~n.extra.classes.indexOf(Vi)?on("generateLayersText",e,n):on("generateSvgReplacementMutation",e,n)}var jn=new Set;Go.map(function(e){jn.add("fa-".concat(e))});Object.keys(Et[oe]).map(jn.add.bind(jn));Object.keys(Et[me]).map(jn.add.bind(jn));jn=Nt(jn);function cs(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!sn)return Promise.resolve();var t=re.documentElement.classList,a=function(d){return t.add("".concat(Jr,"-").concat(d))},o=function(d){return t.remove("".concat(Jr,"-").concat(d))},r=F.autoFetchSvg?jn:Go.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Ad));r.includes("fa")||r.push("fa");var s=[".".concat(Vi,":not([").concat(Nn,"])")].concat(r.map(function(c){return".".concat(c,":not([").concat(Nn,"])")})).join(", ");if(s.length===0)return Promise.resolve();var i=[];try{i=lt(e.querySelectorAll(s))}catch{}if(i.length>0)a("pending"),o("complete");else return Promise.resolve();var l=nr.begin("onTree"),m=i.reduce(function(c,d){try{var p=ml(d);p&&c.push(p)}catch(b){Bi||b.name==="MissingIcon"&&console.error(b)}return c},[]);return new Promise(function(c,d){Promise.all(m).then(function(p){ll(p,function(){a("active"),a("complete"),o("pending"),typeof n=="function"&&n(),l(),c()})}).catch(function(p){l(),d(p)})})}function Od(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ml(e).then(function(t){t&&ll([t],n)})}function Td(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:fo(n||{}),o=t.mask;return o&&(o=(o||{}).icon?o:fo(o||{})),e(a,R(R({},t),{},{mask:o}))}}var Cd=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.transform,o=a===void 0?Ye:a,r=t.symbol,s=r===void 0?!1:r,i=t.mask,l=i===void 0?null:i,m=t.maskId,c=m===void 0?null:m,d=t.title,p=d===void 0?null:d,b=t.titleId,x=b===void 0?null:b,S=t.classes,D=S===void 0?[]:S,O=t.attributes,I=O===void 0?{}:O,C=t.styles,q=C===void 0?{}:C;if(n){var H=n.prefix,ee=n.iconName,z=n.icon;return Ra(R({type:"icon"},n),function(){return Ln("beforeDOMElementCreation",{iconDefinition:n,params:t}),F.autoA11y&&(p?I["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(x||Ft()):(I["aria-hidden"]="true",I.focusable="false")),er({icons:{main:po(z),mask:l?po(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:ee,transform:R(R({},Ye),o),symbol:s,title:p,maskId:c,titleId:x,extra:{attributes:I,styles:q,classes:D}})})}},Ed={mixout:function(){return{icon:Td(Cd)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=cs,t.nodeCallback=Od,t}}},provides:function(n){n.i2svg=function(t){var a=t.node,o=a===void 0?re:a,r=t.callback,s=r===void 0?function(){}:r;return cs(o,s)},n.generateSvgReplacementMutation=function(t,a){var o=a.iconName,r=a.title,s=a.titleId,i=a.prefix,l=a.transform,m=a.symbol,c=a.mask,d=a.maskId,p=a.extra;return new Promise(function(b,x){Promise.all([bo(o,i),c.iconName?bo(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var D=Wo(S,2),O=D[0],I=D[1];b([t,er({icons:{main:O,mask:I},prefix:i,iconName:o,transform:l,symbol:m,maskId:d,title:r,titleId:s,extra:p,watchable:!0})])}).catch(x)})},n.generateAbstractIcon=function(t){var a=t.children,o=t.attributes,r=t.main,s=t.transform,i=t.styles,l=Ta(i);l.length>0&&(o.style=l);var m;return Qo(s)&&(m=on("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),a.push(m||r.icon),{children:a,attributes:o}}}},Rd={mixout:function(){return{layer:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=a.classes,r=o===void 0?[]:o;return Ra({type:"layer"},function(){Ln("beforeDOMElementCreation",{assembler:t,params:a});var s=[];return t(function(i){Array.isArray(i)?i.map(function(l){s=s.concat(l.abstract)}):s=s.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(Nt(r)).join(" ")},children:s}]})}}}},Id={mixout:function(){return{counter:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=a.title,r=o===void 0?null:o,s=a.classes,i=s===void 0?[]:s,l=a.attributes,m=l===void 0?{}:l,c=a.styles,d=c===void 0?{}:c;return Ra({type:"counter",content:t},function(){return Ln("beforeDOMElementCreation",{content:t,params:a}),ud({content:t.toString(),title:r,extra:{attributes:m,styles:d,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(Nt(i))}})})}}}},Pd={mixout:function(){return{text:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=a.transform,r=o===void 0?Ye:o,s=a.title,i=s===void 0?null:s,l=a.classes,m=l===void 0?[]:l,c=a.attributes,d=c===void 0?{}:c,p=a.styles,b=p===void 0?{}:p;return Ra({type:"text",content:t},function(){return Ln("beforeDOMElementCreation",{content:t,params:a}),as({content:t,transform:R(R({},Ye),r),title:i,extra:{attributes:d,styles:b,classes:["".concat(F.cssPrefix,"-layers-text")].concat(Nt(m))}})})}}},provides:function(n){n.generateLayersText=function(t,a){var o=a.title,r=a.transform,s=a.extra,i=null,l=null;if(Hi){var m=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();i=c.width/m,l=c.height/m}return F.autoA11y&&!o&&(s.attributes["aria-hidden"]="true"),Promise.resolve([t,as({content:t.innerHTML,width:i,height:l,transform:r,title:o,extra:s,watchable:!0})])}}},Fd=new RegExp('"',"ug"),ms=[1105920,1112319];function Dd(e){var n=e.replace(Fd,""),t=Gu(n,0),a=t>=ms[0]&&t<=ms[1],o=n.length===2?n[0]===n[1]:!1;return{value:co(o?n[0]:n),isSecondary:a||o}}function us(e,n){var t="".concat(ju).concat(n.replace(":","-"));return new Promise(function(a,o){if(e.getAttribute(t)!==null)return a();var r=lt(e.children),s=r.filter(function(z){return z.getAttribute(lo)===n})[0],i=xn.getComputedStyle(e,n),l=i.getPropertyValue("font-family").match(Tu),m=i.getPropertyValue("font-weight"),c=i.getPropertyValue("content");if(s&&!l)return e.removeChild(s),a();if(l&&c!=="none"&&c!==""){var d=i.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?me:oe,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Rt[p][l[2].toLowerCase()]:Cu[p][m],x=Dd(d),S=x.value,D=x.isSecondary,O=l[0].startsWith("FontAwesome"),I=Xo(b,S),C=I;if(O){var q=nd(S);q.iconName&&q.prefix&&(I=q.iconName,b=q.prefix)}if(I&&!D&&(!s||s.getAttribute(Vo)!==b||s.getAttribute(Ko)!==C)){e.setAttribute(t,C),s&&e.removeChild(s);var H=Sd(),ee=H.extra;ee.attributes[lo]=n,bo(I,b).then(function(z){var V=er(R(R({},H),{},{icons:{main:z,mask:Zo()},prefix:b,iconName:C,extra:ee,watchable:!0})),se=re.createElement("svg");n==="::before"?e.insertBefore(se,e.firstChild):e.appendChild(se),se.outerHTML=V.map(function(ge){return $t(ge)}).join(`
`),e.removeAttribute(t),a()}).catch(o)}else a()}else a()})}function Nd(e){return Promise.all([us(e,"::before"),us(e,"::after")])}function Ld(e){return e.parentNode!==document.head&&!~Su.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(lo)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ds(e){if(sn)return new Promise(function(n,t){var a=lt(e.querySelectorAll("*")).filter(Ld).map(Nd),o=nr.begin("searchPseudoElements");cl(),Promise.all(a).then(function(){o(),ho(),n()}).catch(function(){o(),ho(),t()})})}var $d={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=ds,t}}},provides:function(n){n.pseudoElements2svg=function(t){var a=t.node,o=a===void 0?re:a;F.searchPseudoElements&&ds(o)}}},fs=!1,Ud={mixout:function(){return{dom:{unwatch:function(){cl(),fs=!0}}}},hooks:function(){return{bootstrap:function(){is(uo("mutationObserverCallbacks",{}))},noAuto:function(){xd()},watch:function(t){var a=t.observeMutationsRoot;fs?ho():is(uo("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},ps=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,o){var r=o.toLowerCase().split("-"),s=r[0],i=r.slice(1).join("-");if(s&&i==="h")return a.flipX=!0,a;if(s&&i==="v")return a.flipY=!0,a;if(i=parseFloat(i),isNaN(i))return a;switch(s){case"grow":a.size=a.size+i;break;case"shrink":a.size=a.size-i;break;case"left":a.x=a.x-i;break;case"right":a.x=a.x+i;break;case"up":a.y=a.y-i;break;case"down":a.y=a.y+i;break;case"rotate":a.rotate=a.rotate+i;break}return a},t)},Md={mixout:function(){return{parse:{transform:function(t){return ps(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,a){var o=a.getAttribute("data-fa-transform");return o&&(t.transform=ps(o)),t}}},provides:function(n){n.generateAbstractTransformGrouping=function(t){var a=t.main,o=t.transform,r=t.containerWidth,s=t.iconWidth,i={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(o.x*32,", ").concat(o.y*32,") "),m="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),c="rotate(".concat(o.rotate," 0 0)"),d={transform:"".concat(l," ").concat(m," ").concat(c)},p={transform:"translate(".concat(s/2*-1," -256)")},b={outer:i,inner:d,path:p};return{tag:"g",attributes:R({},b.outer),children:[{tag:"g",attributes:R({},b.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:R(R({},a.icon.attributes),b.path)}]}]}}}},Ha={x:0,y:0,width:"100%",height:"100%"};function bs(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||n)&&(e.attributes.fill="black"),e}function qd(e){return e.tag==="g"?e.children:[e]}var Hd={hooks:function(){return{parseNodeAttributes:function(t,a){var o=a.getAttribute("data-fa-mask"),r=o?Ea(o.split(" ").map(function(s){return s.trim()})):Zo();return r.prefix||(r.prefix=wn()),t.mask=r,t.maskId=a.getAttribute("data-fa-mask-id"),t}}},provides:function(n){n.generateAbstractMask=function(t){var a=t.children,o=t.attributes,r=t.main,s=t.mask,i=t.maskId,l=t.transform,m=r.width,c=r.icon,d=s.width,p=s.icon,b=Mu({transform:l,containerWidth:d,iconWidth:m}),x={tag:"rect",attributes:R(R({},Ha),{},{fill:"white"})},S=c.children?{children:c.children.map(bs)}:{},D={tag:"g",attributes:R({},b.inner),children:[bs(R({tag:c.tag,attributes:R(R({},c.attributes),b.path)},S))]},O={tag:"g",attributes:R({},b.outer),children:[D]},I="mask-".concat(i||Ft()),C="clip-".concat(i||Ft()),q={tag:"mask",attributes:R(R({},Ha),{},{id:I,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,O]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:qd(p)},q]};return a.push(H,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(I,")")},Ha)}),{children:a,attributes:o}}}},zd={provides:function(n){var t=!1;xn.matchMedia&&(t=xn.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],o={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:R(R({},o),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=R(R({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:R(R({},o),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||i.children.push({tag:"animate",attributes:R(R({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},s),{},{values:"1;0;1;1;0;1;"})}),a.push(i),a.push({tag:"path",attributes:R(R({},o),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:R(R({},s),{},{values:"1;0;0;0;0;1;"})}]}),t||a.push({tag:"path",attributes:R(R({},o),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Wd={hooks:function(){return{parseNodeAttributes:function(t,a){var o=a.getAttribute("data-fa-symbol"),r=o===null?!1:o===""?!0:o;return t.symbol=r,t}}}},Bd=[zu,Ed,Rd,Id,Pd,$d,Ud,Md,Hd,zd,Wd];od(Bd,{mixoutsTo:Fe});Fe.noAuto;Fe.config;var Vd=Fe.library;Fe.dom;Fe.parse;Fe.findIconDefinition;Fe.toHtml;Fe.icon;Fe.layer;Fe.text;Fe.counter;var Kd={prefix:"fas",iconName:"dice-d20",icon:[512,512,[],"f6cf","M64.7 125.8l53.2 31.9c7.8 4.7 17.8 2 22.2-5.9L217.6 12.1c3-5.4-.9-12.1-7.1-12.1c-1.6 0-3.2 .5-4.6 1.4L63.9 98.8c-9.6 6.6-9.2 20.9 .8 26.9zM32 171.7V295.3c0 8 10.4 11 14.7 4.4l60-92c5-7.6 2.6-17.8-5.2-22.5L56.2 158C45.6 151.6 32 159.3 32 171.7zM326.4 12.1l77.6 139.6c4.4 7.9 14.5 10.6 22.2 5.9l53.2-31.9c10-6 10.4-20.3 .8-26.9L338.1 1.4c-1.4-.9-3-1.4-4.6-1.4c-6.2 0-10.1 6.7-7.1 12.1zM512 171.7c0-12.4-13.6-20.1-24.2-13.7l-45.3 27.2c-7.8 4.7-10.1 14.9-5.2 22.5l60 92c4.3 6.7 14.7 3.6 14.7-4.4V171.7zm-49.3 246L302.1 436.6c-8.1 .9-14.1 7.8-14.1 15.9v52.8c0 3.7 3 6.8 6.8 6.8c.8 0 1.6-.1 2.4-.4l172.7-64c6.1-2.2 10.1-8 10.1-14.5c0-9.3-8.1-16.5-17.3-15.4zM249.2 512c3.7 0 6.8-3 6.8-6.8V452.6c0-8.1-6.1-14.9-14.1-15.9l-160.6-19c-9.2-1.1-17.3 6.1-17.3 15.4c0 6.5 4 12.3 10.1 14.5l172.7 64c.8 .3 1.6 .4 2.4 .4zM57.7 382.9l170.9 20.2c7.8 .9 13.4-7.5 9.5-14.3l-85.7-150c-5.9-10.4-20.7-10.8-27.3-.8L46.2 358.2c-6.5 9.9-.3 23.3 11.5 24.7zm439.6-24.8L418.9 238.1c-6.5-10-21.4-9.6-27.3 .8L306.2 388.5c-3.9 6.8 1.6 15.2 9.5 14.3l170.1-20c11.8-1.4 18-14.7 11.5-24.6zm-216.9 11l78.4-137.2c6.1-10.7-1.6-23.9-13.9-23.9H199.1c-12.3 0-20 13.3-13.9 23.9l78.4 137.2c3.7 6.4 13 6.4 16.7 0zM190.4 176H353.6c12.2 0 19.9-13.1 14-23.8l-80-144c-2.8-5.1-8.2-8.2-14-8.2h-3.2c-5.8 0-11.2 3.2-14 8.2l-80 144c-5.9 10.7 1.8 23.8 14 23.8z"]};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Hn=typeof window<"u";function Gd(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const J=Object.assign;function za(e,n){const t={};for(const a in n){const o=n[a];t[a]=We(o)?o.map(e):e(o)}return t}const wt=()=>{},We=Array.isArray,Yd=/\/$/,Qd=e=>e.replace(Yd,"");function Wa(e,n,t="/"){let a,o={},r="",s="";const i=n.indexOf("#");let l=n.indexOf("?");return i<l&&i>=0&&(l=-1),l>-1&&(a=n.slice(0,l),r=n.slice(l+1,i>-1?i:n.length),o=e(r)),i>-1&&(a=a||n.slice(0,i),s=n.slice(i,n.length)),a=ef(a??n,t),{fullPath:a+(r&&"?")+r+s,path:a,query:o,hash:s}}function Jd(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function gs(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function Xd(e,n,t){const a=n.matched.length-1,o=t.matched.length-1;return a>-1&&a===o&&nt(n.matched[a],t.matched[o])&&ul(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function nt(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function ul(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(!Zd(e[t],n[t]))return!1;return!0}function Zd(e,n){return We(e)?hs(e,n):We(n)?hs(n,e):e===n}function hs(e,n){return We(n)?e.length===n.length&&e.every((t,a)=>t===n[a]):e.length===1&&e[0]===n}function ef(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),a=e.split("/");let o=t.length-1,r,s;for(r=0;r<a.length;r++)if(s=a[r],s!==".")if(s==="..")o>1&&o--;else break;return t.slice(0,o).join("/")+"/"+a.slice(r-(r===a.length?1:0)).join("/")}var Dt;(function(e){e.pop="pop",e.push="push"})(Dt||(Dt={}));var jt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(jt||(jt={}));function nf(e){if(!e)if(Hn){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Qd(e)}const tf=/^[^#]+#/;function af(e,n){return e.replace(tf,"#")+n}function of(e,n){const t=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:n.behavior,left:a.left-t.left-(n.left||0),top:a.top-t.top-(n.top||0)}}const Ia=()=>({left:window.pageXOffset,top:window.pageYOffset});function rf(e){let n;if("el"in e){const t=e.el,a=typeof t=="string"&&t.startsWith("#"),o=typeof t=="string"?a?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!o)return;n=of(o,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function ks(e,n){return(history.state?history.state.position-n:-1)+e}const ko=new Map;function sf(e,n){ko.set(e,n)}function lf(e){const n=ko.get(e);return ko.delete(e),n}let cf=()=>location.protocol+"//"+location.host;function dl(e,n){const{pathname:t,search:a,hash:o}=n,r=e.indexOf("#");if(r>-1){let i=o.includes(e.slice(r))?e.slice(r).length:1,l=o.slice(i);return l[0]!=="/"&&(l="/"+l),gs(l,"")}return gs(t,e)+a+o}function mf(e,n,t,a){let o=[],r=[],s=null;const i=({state:p})=>{const b=dl(e,location),x=t.value,S=n.value;let D=0;if(p){if(t.value=b,n.value=p,s&&s===x){s=null;return}D=S?p.position-S.position:0}else a(b);o.forEach(O=>{O(t.value,x,{delta:D,type:Dt.pop,direction:D?D>0?jt.forward:jt.back:jt.unknown})})};function l(){s=t.value}function m(p){o.push(p);const b=()=>{const x=o.indexOf(p);x>-1&&o.splice(x,1)};return r.push(b),b}function c(){const{history:p}=window;p.state&&p.replaceState(J({},p.state,{scroll:Ia()}),"")}function d(){for(const p of r)p();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:m,destroy:d}}function ys(e,n,t,a=!1,o=!1){return{back:e,current:n,forward:t,replaced:a,position:window.history.length,scroll:o?Ia():null}}function uf(e){const{history:n,location:t}=window,a={value:dl(e,t)},o={value:n.state};o.value||r(a.value,{back:null,current:a.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function r(l,m,c){const d=e.indexOf("#"),p=d>-1?(t.host&&document.querySelector("base")?e:e.slice(d))+l:cf()+e+l;try{n[c?"replaceState":"pushState"](m,"",p),o.value=m}catch(b){console.error(b),t[c?"replace":"assign"](p)}}function s(l,m){const c=J({},n.state,ys(o.value.back,l,o.value.forward,!0),m,{position:o.value.position});r(l,c,!0),a.value=l}function i(l,m){const c=J({},o.value,n.state,{forward:l,scroll:Ia()});r(c.current,c,!0);const d=J({},ys(a.value,l,null),{position:c.position+1},m);r(l,d,!1),a.value=l}return{location:a,state:o,push:i,replace:s}}function df(e){e=nf(e);const n=uf(e),t=mf(e,n.state,n.location,n.replace);function a(r,s=!0){s||t.pauseListeners(),history.go(r)}const o=J({location:"",base:e,go:a,createHref:af.bind(null,e)},n,t);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>n.state.value}),o}function ff(e){return typeof e=="string"||e&&typeof e=="object"}function fl(e){return typeof e=="string"||typeof e=="symbol"}const un={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},pl=Symbol("");var vs;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(vs||(vs={}));function tt(e,n){return J(new Error,{type:e,[pl]:!0},n)}function Ze(e,n){return e instanceof Error&&pl in e&&(n==null||!!(e.type&n))}const xs="[^/]+?",pf={sensitive:!1,strict:!1,start:!0,end:!0},bf=/[.+*?^${}()[\]/\\]/g;function gf(e,n){const t=J({},pf,n),a=[];let o=t.start?"^":"";const r=[];for(const m of e){const c=m.length?[]:[90];t.strict&&!m.length&&(o+="/");for(let d=0;d<m.length;d++){const p=m[d];let b=40+(t.sensitive?.25:0);if(p.type===0)d||(o+="/"),o+=p.value.replace(bf,"\\$&"),b+=40;else if(p.type===1){const{value:x,repeatable:S,optional:D,regexp:O}=p;r.push({name:x,repeatable:S,optional:D});const I=O||xs;if(I!==xs){b+=10;try{new RegExp(`(${I})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${x}" (${I}): `+q.message)}}let C=S?`((?:${I})(?:/(?:${I}))*)`:`(${I})`;d||(C=D&&m.length<2?`(?:/${C})`:"/"+C),D&&(C+="?"),o+=C,b+=20,D&&(b+=-8),S&&(b+=-20),I===".*"&&(b+=-50)}c.push(b)}a.push(c)}if(t.strict&&t.end){const m=a.length-1;a[m][a[m].length-1]+=.7000000000000001}t.strict||(o+="/?"),t.end?o+="$":t.strict&&(o+="(?:/|$)");const s=new RegExp(o,t.sensitive?"":"i");function i(m){const c=m.match(s),d={};if(!c)return null;for(let p=1;p<c.length;p++){const b=c[p]||"",x=r[p-1];d[x.name]=b&&x.repeatable?b.split("/"):b}return d}function l(m){let c="",d=!1;for(const p of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const b of p)if(b.type===0)c+=b.value;else if(b.type===1){const{value:x,repeatable:S,optional:D}=b,O=x in m?m[x]:"";if(We(O)&&!S)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const I=We(O)?O.join("/"):O;if(!I)if(D)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${x}"`);c+=I}}return c||"/"}return{re:s,score:a,keys:r,parse:i,stringify:l}}function hf(e,n){let t=0;for(;t<e.length&&t<n.length;){const a=n[t]-e[t];if(a)return a;t++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function kf(e,n){let t=0;const a=e.score,o=n.score;for(;t<a.length&&t<o.length;){const r=hf(a[t],o[t]);if(r)return r;t++}if(Math.abs(o.length-a.length)===1){if(ws(a))return 1;if(ws(o))return-1}return o.length-a.length}function ws(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const yf={type:0,value:""},vf=/[a-zA-Z0-9_]/;function xf(e){if(!e)return[[]];if(e==="/")return[[yf]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(b){throw new Error(`ERR (${t})/"${m}": ${b}`)}let t=0,a=t;const o=[];let r;function s(){r&&o.push(r),r=[]}let i=0,l,m="",c="";function d(){m&&(t===0?r.push({type:0,value:m}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&n(`A repeatable param (${m}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:m,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):n("Invalid state to consume buffer"),m="")}function p(){m+=l}for(;i<e.length;){if(l=e[i++],l==="\\"&&t!==2){a=t,t=4;continue}switch(t){case 0:l==="/"?(m&&d(),s()):l===":"?(d(),t=1):p();break;case 4:p(),t=a;break;case 1:l==="("?t=2:vf.test(l)?p():(d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:t=3:c+=l;break;case 3:d(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&i--,c="";break;default:n("Unknown state");break}}return t===2&&n(`Unfinished custom RegExp for param "${m}"`),d(),s(),o}function wf(e,n,t){const a=gf(xf(e.path),t),o=J(a,{record:e,parent:n,children:[],alias:[]});return n&&!o.record.aliasOf==!n.record.aliasOf&&n.children.push(o),o}function jf(e,n){const t=[],a=new Map;n=Ss({strict:!1,end:!0,sensitive:!1},n);function o(c){return a.get(c)}function r(c,d,p){const b=!p,x=_f(c);x.aliasOf=p&&p.record;const S=Ss(n,c),D=[x];if("alias"in c){const C=typeof c.alias=="string"?[c.alias]:c.alias;for(const q of C)D.push(J({},x,{components:p?p.record.components:x.components,path:q,aliasOf:p?p.record:x}))}let O,I;for(const C of D){const{path:q}=C;if(d&&q[0]!=="/"){const H=d.record.path,ee=H[H.length-1]==="/"?"":"/";C.path=d.record.path+(q&&ee+q)}if(O=wf(C,d,S),p?p.alias.push(O):(I=I||O,I!==O&&I.alias.push(O),b&&c.name&&!_s(O)&&s(c.name)),x.children){const H=x.children;for(let ee=0;ee<H.length;ee++)r(H[ee],O,p&&p.children[ee])}p=p||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&l(O)}return I?()=>{s(I)}:wt}function s(c){if(fl(c)){const d=a.get(c);d&&(a.delete(c),t.splice(t.indexOf(d),1),d.children.forEach(s),d.alias.forEach(s))}else{const d=t.indexOf(c);d>-1&&(t.splice(d,1),c.record.name&&a.delete(c.record.name),c.children.forEach(s),c.alias.forEach(s))}}function i(){return t}function l(c){let d=0;for(;d<t.length&&kf(c,t[d])>=0&&(c.record.path!==t[d].record.path||!bl(c,t[d]));)d++;t.splice(d,0,c),c.record.name&&!_s(c)&&a.set(c.record.name,c)}function m(c,d){let p,b={},x,S;if("name"in c&&c.name){if(p=a.get(c.name),!p)throw tt(1,{location:c});S=p.record.name,b=J(js(d.params,p.keys.filter(I=>!I.optional).map(I=>I.name)),c.params&&js(c.params,p.keys.map(I=>I.name))),x=p.stringify(b)}else if("path"in c)x=c.path,p=t.find(I=>I.re.test(x)),p&&(b=p.parse(x),S=p.record.name);else{if(p=d.name?a.get(d.name):t.find(I=>I.re.test(d.path)),!p)throw tt(1,{location:c,currentLocation:d});S=p.record.name,b=J({},d.params,c.params),x=p.stringify(b)}const D=[];let O=p;for(;O;)D.unshift(O.record),O=O.parent;return{name:S,path:x,params:b,matched:D,meta:Af(D)}}return e.forEach(c=>r(c)),{addRoute:r,resolve:m,removeRoute:s,getRoutes:i,getRecordMatcher:o}}function js(e,n){const t={};for(const a of n)a in e&&(t[a]=e[a]);return t}function _f(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Sf(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Sf(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const a in e.components)n[a]=typeof t=="boolean"?t:t[a];return n}function _s(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Af(e){return e.reduce((n,t)=>J(n,t.meta),{})}function Ss(e,n){const t={};for(const a in e)t[a]=a in n?n[a]:e[a];return t}function bl(e,n){return n.children.some(t=>t===e||bl(e,t))}const gl=/#/g,Of=/&/g,Tf=/\//g,Cf=/=/g,Ef=/\?/g,hl=/\+/g,Rf=/%5B/g,If=/%5D/g,kl=/%5E/g,Pf=/%60/g,yl=/%7B/g,Ff=/%7C/g,vl=/%7D/g,Df=/%20/g;function ar(e){return encodeURI(""+e).replace(Ff,"|").replace(Rf,"[").replace(If,"]")}function Nf(e){return ar(e).replace(yl,"{").replace(vl,"}").replace(kl,"^")}function yo(e){return ar(e).replace(hl,"%2B").replace(Df,"+").replace(gl,"%23").replace(Of,"%26").replace(Pf,"`").replace(yl,"{").replace(vl,"}").replace(kl,"^")}function Lf(e){return yo(e).replace(Cf,"%3D")}function $f(e){return ar(e).replace(gl,"%23").replace(Ef,"%3F")}function Uf(e){return e==null?"":$f(e).replace(Tf,"%2F")}function ba(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Mf(e){const n={};if(e===""||e==="?")return n;const a=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<a.length;++o){const r=a[o].replace(hl," "),s=r.indexOf("="),i=ba(s<0?r:r.slice(0,s)),l=s<0?null:ba(r.slice(s+1));if(i in n){let m=n[i];We(m)||(m=n[i]=[m]),m.push(l)}else n[i]=l}return n}function As(e){let n="";for(let t in e){const a=e[t];if(t=Lf(t),a==null){a!==void 0&&(n+=(n.length?"&":"")+t);continue}(We(a)?a.map(r=>r&&yo(r)):[a&&yo(a)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+t,r!=null&&(n+="="+r))})}return n}function qf(e){const n={};for(const t in e){const a=e[t];a!==void 0&&(n[t]=We(a)?a.map(o=>o==null?null:""+o):a==null?a:""+a)}return n}const Hf=Symbol(""),Os=Symbol(""),or=Symbol(""),xl=Symbol(""),vo=Symbol("");function ut(){let e=[];function n(a){return e.push(a),()=>{const o=e.indexOf(a);o>-1&&e.splice(o,1)}}function t(){e=[]}return{add:n,list:()=>e,reset:t}}function bn(e,n,t,a,o){const r=a&&(a.enterCallbacks[o]=a.enterCallbacks[o]||[]);return()=>new Promise((s,i)=>{const l=d=>{d===!1?i(tt(4,{from:t,to:n})):d instanceof Error?i(d):ff(d)?i(tt(2,{from:n,to:d})):(r&&a.enterCallbacks[o]===r&&typeof d=="function"&&r.push(d),s())},m=e.call(a&&a.instances[o],n,t,l);let c=Promise.resolve(m);e.length<3&&(c=c.then(l)),c.catch(d=>i(d))})}function Ba(e,n,t,a){const o=[];for(const r of e)for(const s in r.components){let i=r.components[s];if(!(n!=="beforeRouteEnter"&&!r.instances[s]))if(zf(i)){const m=(i.__vccOpts||i)[n];m&&o.push(bn(m,t,a,r,s))}else{let l=i();o.push(()=>l.then(m=>{if(!m)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${r.path}"`));const c=Gd(m)?m.default:m;r.components[s]=c;const p=(c.__vccOpts||c)[n];return p&&bn(p,t,a,r,s)()}))}}return o}function zf(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ts(e){const n=Qe(or),t=Qe(xl),a=Ie(()=>n.resolve(je(e.to))),o=Ie(()=>{const{matched:l}=a.value,{length:m}=l,c=l[m-1],d=t.matched;if(!c||!d.length)return-1;const p=d.findIndex(nt.bind(null,c));if(p>-1)return p;const b=Cs(l[m-2]);return m>1&&Cs(c)===b&&d[d.length-1].path!==b?d.findIndex(nt.bind(null,l[m-2])):p}),r=Ie(()=>o.value>-1&&Kf(t.params,a.value.params)),s=Ie(()=>o.value>-1&&o.value===t.matched.length-1&&ul(t.params,a.value.params));function i(l={}){return Vf(l)?n[je(e.replace)?"replace":"push"](je(e.to)).catch(wt):Promise.resolve()}return{route:a,href:Ie(()=>a.value.href),isActive:r,isExactActive:s,navigate:i}}const Wf=Lo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ts,setup(e,{slots:n}){const t=st(Ts(e)),{options:a}=Qe(or),o=Ie(()=>({[Es(e.activeClass,a.linkActiveClass,"router-link-active")]:t.isActive,[Es(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=n.default&&n.default(t);return e.custom?r:Ii("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:o.value},r)}}}),Bf=Wf;function Vf(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function Kf(e,n){for(const t in n){const a=n[t],o=e[t];if(typeof a=="string"){if(a!==o)return!1}else if(!We(o)||o.length!==a.length||a.some((r,s)=>r!==o[s]))return!1}return!0}function Cs(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Es=(e,n,t)=>e??n??t,Gf=Lo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const a=Qe(vo),o=Ie(()=>e.route||a.value),r=Qe(Os,0),s=Ie(()=>{let m=je(r);const{matched:c}=o.value;let d;for(;(d=c[m])&&!d.components;)m++;return m}),i=Ie(()=>o.value.matched[s.value]);ta(Os,Ie(()=>s.value+1)),ta(Hf,i),ta(vo,o);const l=it();return bt(()=>[l.value,i.value,e.name],([m,c,d],[p,b,x])=>{c&&(c.instances[d]=m,b&&b!==c&&m&&m===p&&(c.leaveGuards.size||(c.leaveGuards=b.leaveGuards),c.updateGuards.size||(c.updateGuards=b.updateGuards))),m&&c&&(!b||!nt(c,b)||!p)&&(c.enterCallbacks[d]||[]).forEach(S=>S(m))},{flush:"post"}),()=>{const m=o.value,c=e.name,d=i.value,p=d&&d.components[c];if(!p)return Rs(t.default,{Component:p,route:m});const b=d.props[c],x=b?b===!0?m.params:typeof b=="function"?b(m):b:null,D=Ii(p,J({},x,n,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return Rs(t.default,{Component:D,route:m})||D}}});function Rs(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const wl=Gf;function Yf(e){const n=jf(e.routes,e),t=e.parseQuery||Mf,a=e.stringifyQuery||As,o=e.history,r=ut(),s=ut(),i=ut(),l=pc(un);let m=un;Hn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=za.bind(null,k=>""+k),d=za.bind(null,Uf),p=za.bind(null,ba);function b(k,E){let A,N;return fl(k)?(A=n.getRecordMatcher(k),N=E):N=k,n.addRoute(N,A)}function x(k){const E=n.getRecordMatcher(k);E&&n.removeRoute(E)}function S(){return n.getRoutes().map(k=>k.record)}function D(k){return!!n.getRecordMatcher(k)}function O(k,E){if(E=J({},E||l.value),typeof k=="string"){const u=Wa(t,k,E.path),f=n.resolve({path:u.path},E),g=o.createHref(u.fullPath);return J(u,f,{params:p(f.params),hash:ba(u.hash),redirectedFrom:void 0,href:g})}let A;if("path"in k)A=J({},k,{path:Wa(t,k.path,E.path).path});else{const u=J({},k.params);for(const f in u)u[f]==null&&delete u[f];A=J({},k,{params:d(k.params)}),E.params=d(E.params)}const N=n.resolve(A,E),G=k.hash||"";N.params=c(p(N.params));const ce=Jd(a,J({},k,{hash:Nf(G),path:N.path})),B=o.createHref(ce);return J({fullPath:ce,hash:G,query:a===As?qf(k.query):k.query||{}},N,{redirectedFrom:void 0,href:B})}function I(k){return typeof k=="string"?Wa(t,k,l.value.path):J({},k)}function C(k,E){if(m!==k)return tt(8,{from:E,to:k})}function q(k){return z(k)}function H(k){return q(J(I(k),{replace:!0}))}function ee(k){const E=k.matched[k.matched.length-1];if(E&&E.redirect){const{redirect:A}=E;let N=typeof A=="function"?A(k):A;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=I(N):{path:N},N.params={}),J({query:k.query,hash:k.hash,params:"path"in N?{}:k.params},N)}}function z(k,E){const A=m=O(k),N=l.value,G=k.state,ce=k.force,B=k.replace===!0,u=ee(A);if(u)return z(J(I(u),{state:typeof u=="object"?J({},G,u.state):G,force:ce,replace:B}),E||A);const f=A;f.redirectedFrom=E;let g;return!ce&&Xd(a,N,A)&&(g=tt(16,{to:f,from:N}),_n(N,N,!0,!1)),(g?Promise.resolve(g):se(f,N)).catch(h=>Ze(h)?Ze(h,2)?h:Ne(h):ne(h,f,N)).then(h=>{if(h){if(Ze(h,2))return z(J({replace:B},I(h.to),{state:typeof h.to=="object"?J({},G,h.to.state):G,force:ce}),E||f)}else h=Se(f,N,!0,B,G);return ge(f,N,h),h})}function V(k,E){const A=C(k,E);return A?Promise.reject(A):Promise.resolve()}function se(k,E){let A;const[N,G,ce]=Qf(k,E);A=Ba(N.reverse(),"beforeRouteLeave",k,E);for(const u of N)u.leaveGuards.forEach(f=>{A.push(bn(f,k,E))});const B=V.bind(null,k,E);return A.push(B),qn(A).then(()=>{A=[];for(const u of r.list())A.push(bn(u,k,E));return A.push(B),qn(A)}).then(()=>{A=Ba(G,"beforeRouteUpdate",k,E);for(const u of G)u.updateGuards.forEach(f=>{A.push(bn(f,k,E))});return A.push(B),qn(A)}).then(()=>{A=[];for(const u of k.matched)if(u.beforeEnter&&!E.matched.includes(u))if(We(u.beforeEnter))for(const f of u.beforeEnter)A.push(bn(f,k,E));else A.push(bn(u.beforeEnter,k,E));return A.push(B),qn(A)}).then(()=>(k.matched.forEach(u=>u.enterCallbacks={}),A=Ba(ce,"beforeRouteEnter",k,E),A.push(B),qn(A))).then(()=>{A=[];for(const u of s.list())A.push(bn(u,k,E));return A.push(B),qn(A)}).catch(u=>Ze(u,8)?u:Promise.reject(u))}function ge(k,E,A){for(const N of i.list())N(k,E,A)}function Se(k,E,A,N,G){const ce=C(k,E);if(ce)return ce;const B=E===un,u=Hn?history.state:{};A&&(N||B?o.replace(k.fullPath,J({scroll:B&&u&&u.scroll},G)):o.push(k.fullPath,G)),l.value=k,_n(k,E,A,B),Ne()}let De;function ln(){De||(De=o.listen((k,E,A)=>{if(!Ut.listening)return;const N=O(k),G=ee(N);if(G){z(J(G,{replace:!0}),N).catch(wt);return}m=N;const ce=l.value;Hn&&sf(ks(ce.fullPath,A.delta),Ia()),se(N,ce).catch(B=>Ze(B,12)?B:Ze(B,2)?(z(B.to,N).then(u=>{Ze(u,20)&&!A.delta&&A.type===Dt.pop&&o.go(-1,!1)}).catch(wt),Promise.reject()):(A.delta&&o.go(-A.delta,!1),ne(B,N,ce))).then(B=>{B=B||Se(N,ce,!1),B&&(A.delta&&!Ze(B,8)?o.go(-A.delta,!1):A.type===Dt.pop&&Ze(B,20)&&o.go(-1,!1)),ge(N,ce,B)}).catch(wt)}))}let Te=ut(),he=ut(),de;function ne(k,E,A){Ne(k);const N=he.list();return N.length?N.forEach(G=>G(k,E,A)):console.error(k),Promise.reject(k)}function X(){return de&&l.value!==un?Promise.resolve():new Promise((k,E)=>{Te.add([k,E])})}function Ne(k){return de||(de=!k,ln(),Te.list().forEach(([E,A])=>k?A(k):E()),Te.reset()),k}function _n(k,E,A,N){const{scrollBehavior:G}=e;if(!Hn||!G)return Promise.resolve();const ce=!A&&lf(ks(k.fullPath,0))||(N||!A)&&history.state&&history.state.scroll||null;return Do().then(()=>G(k,E,ce)).then(B=>B&&rf(B)).catch(B=>ne(B,k,E))}const Le=k=>o.go(k);let Ae;const $n=new Set,Ut={currentRoute:l,listening:!0,addRoute:b,removeRoute:x,hasRoute:D,getRoutes:S,resolve:O,options:e,push:q,replace:H,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:r.add,beforeResolve:s.add,afterEach:i.add,onError:he.add,isReady:X,install(k){const E=this;k.component("RouterLink",Bf),k.component("RouterView",wl),k.config.globalProperties.$router=E,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>je(l)}),Hn&&!Ae&&l.value===un&&(Ae=!0,q(o.location).catch(G=>{}));const A={};for(const G in un)A[G]=Ie(()=>l.value[G]);k.provide(or,E),k.provide(xl,st(A)),k.provide(vo,l);const N=k.unmount;$n.add(k),k.unmount=function(){$n.delete(k),$n.size<1&&(m=un,De&&De(),De=null,l.value=un,Ae=!1,de=!1),N()}}};return Ut}function qn(e){return e.reduce((n,t)=>n.then(()=>t()),Promise.resolve())}function Qf(e,n){const t=[],a=[],o=[],r=Math.max(n.matched.length,e.matched.length);for(let s=0;s<r;s++){const i=n.matched[s];i&&(e.matched.find(m=>nt(m,i))?a.push(i):t.push(i));const l=e.matched[s];l&&(n.matched.find(m=>nt(m,l))||o.push(l))}return[t,a,o]}const Jf="/k-90b.png";const jl=(e,n)=>{const t=e.__vccOpts||e;for(const[a,o]of n)t[a]=o;return t},Xf=["onContextmenu"],Zf=["name","value","checked"],ep={__name:"Toggle",props:["values","def","name"],emits:["toggleValue"],setup(e,{emit:n}){const t=e,a=it([]),{values:o}=t,r=s=>{const i=a.value.findIndex(m=>m.checked);let l=s.type==="contextmenu"?i-1:(i+1)%o.length;l=l<0?o.length-1:l,a.value[i].checked=!1,a.value[l].checked=!0,n("toggleValue",{newValue:a.value[l].value,previousValue:a.value[i].value})};return(s,i)=>(Je(),Fn("button",{class:"toggle-container",style:ga(`--elNum:${je(o).length}`),onClick:r,onContextmenu:Ym(r,["prevent"])},[(Je(!0),Fn(Re,null,Kc(je(o),l=>(Je(),Fn("input",{disabled:"",name:t.name,type:"radio",class:"toggle__radio",key:`$toggle-${l}`,ref_for:!0,ref_key:"radios",ref:a,value:l,checked:t.def===l},null,8,Zf))),128))],44,Xf))}},np=jl(ep,[["__scopeId","data-v-2d99f134"]]);const tp={class:"toggle-label"},ap={__name:"ToggleLabel",props:["values","def","name"],emits:["toggleValue"],setup(e,{emit:n}){const t=e,{values:a}=t;return console.log("label props",t),(o,r)=>(Je(),Fn("div",tp,[Gc(o.$slots,"default",{},void 0,!0),ae(np,{onToggleValue:r[0]||(r[0]=s=>n("toggleValue",s)),values:je(a),def:t.def,name:t.name},null,8,["values","def","name"])]))}},op=jl(ap,[["__scopeId","data-v-c4ca4ad6"]]),rp=su("color",()=>{const e=it("system");return{color:e,storeColor:t=>{e.value=t||e.value,document.documentElement.className=`color-${e.value}`}}},{persist:{paths:["color"]}});const sp=ye("img",{src:Jf,alt:"K-scaffold logo",height:"90",width:"90"},null,-1),ip=ye("div",{class:"flex align-items-end gap"},[ye("h1",null,"The K-Scaffold"),ye("span",{class:"subtitle"},"A Roll20 Sheet Framework")],-1),lp={class:"capitalize"},cp={id:"main-nav"},mp={__name:"Header",setup(e){const n=it(null),t=rp();return t.storeColor(),bi(()=>document.documentElement.style.setProperty("--headHeight",`${n.value.offsetHeight}px`)),(o,r)=>{const s=Vc("RouterLink");return Je(),Fn("header",{ref_key:"headEl",ref:n},[sp,ip,ae(op,{onToggleValue:r[0]||(r[0]=i=>je(t).storeColor(i.newValue)),name:"color",values:["dark","system","light"],def:je(t).color},{default:dn(()=>[ye("span",lp,Rl(/system/i.test(je(t).color)?"System Theme":`${je(t).color} mode`),1)]),_:1},8,["def"]),ye("nav",cp,[ye("ul",null,[ye("li",null,[ae(s,{to:"/"},{default:dn(()=>[Tn("About")]),_:1})]),ye("li",null,[ae(s,{to:"/start"},{default:dn(()=>[Tn("Getting Started")]),_:1})]),ye("li",null,[ae(s,{to:"/gen"},{default:dn(()=>[Tn("Build API")]),_:1})]),ye("li",null,[ae(s,{to:"/pug"},{default:dn(()=>[Tn("Pug Library")]),_:1})]),ye("li",null,[ae(s,{to:"/sheetworkers"},{default:dn(()=>[Tn("Sheetworker Library")]),_:1})]),ye("li",null,[ae(s,{to:"/scss"},{default:dn(()=>[Tn("Style Library")]),_:1})])])])],512)}}};const up={class:"content"},dp={__name:"App",setup(e){return(n,t)=>(Je(),Fn(Re,null,[ae(mp,{ref:"headComp"},null,512),ye("main",up,[ae(je(wl))])],64))}},fp="modulepreload",pp=function(e){return"/"+e},Is={},dt=function(n,t,a){if(!t||t.length===0)return n();const o=document.getElementsByTagName("link");return Promise.all(t.map(r=>{if(r=pp(r),r in Is)return;Is[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(!!a)for(let c=o.length-1;c>=0;c--){const d=o[c];if(d.href===r&&(!s||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const m=document.createElement("link");if(m.rel=s?"stylesheet":fp,s||(m.as="script",m.crossOrigin=""),m.href=r,document.head.appendChild(m),s)return new Promise((c,d)=>{m.addEventListener("load",c),m.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>n())},bp="/K-200.png",gp={class:"markdown-body"},hp=bm('<div id="top"></div><span align="center"><p><a href="https://github.com/Kurohyou-Studios/k-scaffold/graphs/contributors"><img src="https://img.shields.io/github/contributors/Kurohyou-Studios/k-scaffold.svg?style=flat" alt="Contributors"></a> <a href="https://github.com/Kurohyou-Studios/k-scaffold/network/members"><img src="https://img.shields.io/github/forks/Kurohyou-Studios/k-scaffold.svg?style=flat" alt="Forks"></a> <a href="https://github.com/Kurohyou-Studios/k-scaffold/stargazers"><img src="https://img.shields.io/github/stars/Kurohyou-Studios/k-scaffold.svg?style=flat" alt="Stargazers"></a> <a href="https://github.com/Kurohyou-Studios/k-scaffold/issues"><img src="https://img.shields.io/github/issues/Kurohyou-Studios/k-scaffold.svg?style=flat" alt="Issues"></a> <a href="https://github.com/Kurohyou-Studios/k-scaffold/blob/master/LICENSE.txt"><img src="https://img.shields.io/github/license/Kurohyou-Studios/k-scaffold.svg?style=flat" alt="mit License"></a></p></span><span align="center"><p><a href="https://linkedin.com/in/scott-casey-20210398"><img src="https://img.shields.io/badge/-LinkedIn-black.svg?style=flat&amp;logo=linkedin&amp;colorB=555" alt="LinkedIn"></a> <a href="https://patreon.com/Kurohyoustudios"><img src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dkurohyoustudios%26type%3Dpatrons&amp;style=flat" alt="Patreon"></a></p></span><img src="'+bp+`" align="center"><br><div align="center"><h3 align="center">K-Scaffold</h3><p align="center"></p><p>A PUG, JS, and SCSS framework for building custom Roll20 character sheet templates.</p><p><strong>Documentation site coming soon! »</strong></p><p><a href="https://github.com/Kurohyou-Studios/k-scaffold">View Demo</a> · <a href="https://github.com/Kurohyou-Studios/k-scaffold/issues">Report Bug</a> · <a href="https://github.com/Kurohyou-Studios/k-scaffold/issues">Request Feature</a></p></div><details><summary>Table of Contents</summary><ol><li><a href="#about-the-project">About The Project</a><ul><li><a href="#built-with">Built With</a></li></ul></li><li><a href="#getting-started">Getting Started</a><ul><li><a href="#k-scaffold-pug">K-Scaffold Pug</a></li><li><a href="#k-scaffold-javascript">K-Scaffold Javascript</a></li><li><a href="#prerequisites">Prerequisites</a></li><li><a href="#installation">Installation</a></li></ul></li><li><a href="#usage">Usage</a></li><li><a href="#roadmap">Roadmap</a></li><li><a href="#contributing">Contributing</a></li><ul><li><a href="#tests">Tests</a></li></ul><li><a href="#license">License</a></li><li><a href="#contact">Contact</a></li><li><a href="#acknowledgments">Acknowledgments</a></li></ol></details><h2>About The Project</h2><p>This framework simplifies the task of writing code for Roll20 character sheets. It aims to provide an easier interface between the html and sheetworkers with some minor css templates.</p><p align="right">(<a href="#top">back to top</a>)</p><h3>Built With</h3><ul><li>PUG</li><li>JS</li><li>SCSS</li></ul><p align="right">(<a href="#top">back to top</a>)</p><h2>Getting Started</h2><h3>K-scaffold PUG</h3><p>To use the K-scaffold to write the html of your sheet, you will write normal PUG, but using a comprehensive library of components that are frequently used on character sheets. These range from simple mixin versions of standard html elements inputs, textareas, and selects to more complex constructions that generate Roll20 elements or workarounds for limitations of Roll20 character sheets. Library Documentation coming soon!</p><p align="right">(<a href="#top">back to top</a>)</p><h3>K-scaffold Javascript</h3><p>To use the K-scaffold to write your sheetworkers, you will write normal sheetworkers, but using a library of utility functions and sheetworker aliases to supercharge the standard sheetworkers. Library Documentation coming soon!</p><p align="right">(<a href="#top">back to top</a>)</p><h3>Prerequisites</h3><p>Creating and using a custom character sheet requires a Roll20 pro subscription. If you want to utilize the included testing framework, you will also need to install <a href="https://vitest.dev/">vitest</a>;</p><h3>Installation</h3><p>Install the scaffold via NPM:</p><pre><code class="">npm i @kurohyou/k-scaffold
</code></pre><p align="right">(<a href="#top">back to top</a>)</p><h2>Usage</h2><p>The scaffold simplifies many of the common tasks of creating a Roll20 character sheet and provides constructs to easily create everything from fill to left radio groups to textareas that grow based on the content of their associated Roll20 attribute. To generate a K-scaffold sheet, you will need a pug file, and an scss file.</p><h3>Pug</h3><p>Your main pug file should start with:</p><pre><code class="language-jade">include k-scaffold
//- Your code starts here
</code></pre><p>This will give your pug file(s) access to the K-scaffold mixins and local variables.</p><h3>SCSS</h3><p>Any scss file that you want to use the K-scaffold’s mixins in needs to start with:</p><pre><code class="language-scss">@use &quot;k-scaffold&quot; as k;
</code></pre><h3>Build your sheet</h3><p>To build your sheet, simply run the following command:</p><pre><code class="language-shell">&gt; k-build
</code></pre><p>Alternatively, you can build in watch mode so that the sheet is updated as you make code changes.</p><pre><code class="language-shell">&gt; k-build --watch
OR
&gt; k-build --w
</code></pre><p>This is useful when using the <a href="https://chrome.google.com/webstore/detail/roll20-api-and-sheet-auto/hboggmcfmaakkifgifjbccnpfmnegick">Roll20 Autocode chrome extension</a> to automatically update the Roll20 sandbox.</p><p align="right">(<a href="#top">back to top</a>)</p><h2>Roadmap</h2><p>See the <a href="https://github.com/Kurohyou-Studios/k-scaffold/issues">open issues</a> for a full list of proposed features (and known issues).</p><p align="right">(<a href="#top">back to top</a>)</p><h2>Contributing</h2><p>Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are <strong>greatly appreciated</strong>. If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag “enhancement”. Don’t forget to give the project a star! Thanks again!</p><ol><li>Fork the Project</li><li>Create your Feature Branch (<code class="">git checkout -b feature/AmazingFeature</code>)</li><li>Commit your Changes (<code class="">git commit -m &#39;Add some AmazingFeature&#39;</code>)</li><li>Push to the Branch (<code class="">git push origin feature/AmazingFeature</code>)</li><li>Open a Pull Request</li></ol><p align="right">(<a href="#top">back to top</a>)</p><h3>Tests</h3><p>The K-scaffold and sheets written with it use the <a href="https://vitest.dev/">Vitest testing framework</a>.</p><p>Unit tests are currently written for the following:</p><ul><li>The html, testFramework, and translation generation code</li><li>Parts of the CSS generation generation code</li><li>The K-scaffold’s pug helper functions</li><li>All sheetworker utility functions except for the repeating section ordering functions.</li></ul><p>Tests for the uncovered sections of code will be written as work progresses. If you wish to contribute, please ensure that no changes break these tests.</p><p align="right">(<a href="#top">back to top</a>)</p><h2>License</h2><p>Distributed under the mit License. See <a href="https://github.com/Kurohyou-Studios/k-scaffold/LICENSE.txt">LICENSE.txt</a> for more information.</p><p align="right">(<a href="#top">back to top</a>)</p><h2>Contact</h2><p><a href="https://kurohyou.github.io/">Scott Casey</a> - <a href="https://twitter.com/Kurohyoustudios">@Kurohyoustudios</a></p><p>Project Link: <a href="https://github.com/Kurohyou-Studios/k-scaffold">https://github.com/Kurohyou-Studios/k-scaffold</a></p><p align="right">(<a href="#top">back to top</a>)</p><h2>Acknowledgments</h2><ul><li><a href="https://github.com/Riernar">Riernar</a> has supercharged the efforts to properly organize and pacakage the K-scaffold.</li><li>Thank you to <a href="http://www.kacurtis.com/index.html">Keith Curtis</a> for the excellent logo assets.</li></ul><p>This readme template adapted from the <a href="https://github.com/othneildrew/Best-README-Template/blob/master/BLANK_README.md">Best-README-Template</a> by <a href="https://github.com/othneildrew">Othneil Drew</a>. Readme generated by <a href="https://github.com/Kurohyou/genme-SC">Genme! by Scott Casey</a>.</p><p align="right">(<a href="#top">back to top</a>)</p>`,66),kp=[hp],yp=Lo({__name:"README",setup(e,{expose:n}){return n({frontmatter:{},excerpt:void 0}),(t,a)=>(Je(),Fn("div",gp,kp))}}),vp={__name:"HomeView",setup(e){return(n,t)=>(Je(),qo(je(yp)))}},xp=Yf({scrollBehavior(e,n,t){var a;if(t)return t;if(e.hash)return{el:e.hash,top:(((a=document.querySelector("#app > header"))==null?void 0:a.offsetHeight)||0)+10,behavior:"smooth"}},history:df("/"),routes:[{path:"/",name:"home",component:vp},{path:"/start",name:"start",component:()=>dt(()=>import("./GettingStarted-ffe3d662.js"),[])},{path:"/gen",name:"gen",component:()=>dt(()=>import("./API-7e857fca.js"),["assets/API-7e857fca.js","assets/Library-84fd311b.js","assets/Library-5834e5f3.css"])},{path:"/pug",name:"pug",component:()=>dt(()=>import("./Pug-ad3e5498.js"),["assets/Pug-ad3e5498.js","assets/Library-84fd311b.js","assets/Library-5834e5f3.css"])},{path:"/sheetworkers",name:"sheetworkers",component:()=>dt(()=>import("./Sheetworker-6104228f.js"),["assets/Sheetworker-6104228f.js","assets/Library-84fd311b.js","assets/Library-5834e5f3.css"])},{path:"/scss",name:"scss",component:()=>dt(()=>import("./Style-0f7c323e.js"),["assets/Style-0f7c323e.js","assets/Library-84fd311b.js","assets/Library-5834e5f3.css"])}]});const wp=[{description:`Styling for the adaptive text construction to create textareas and inputs that grow based on their contents. Used in the default [defaultStyles](#defaultStyles) mixin, but can be used separately if you only want to include specific framework css.
`,commentRange:{start:6,end:6},context:{type:"mixin",name:"adaptiveText",code:`
  .adaptive{
    display:grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas: "content";
    position:relative;
    >*{
      grid-area: content;
    }
    > span{
      opacity: 0;
      z-index: -10;
      @include borderPlaceholders.base-border;
      text-transform: initial;
      border-radius:0px;
    }
  }
  .adaptive--text{
    min-height:4rem;
  }
  .adaptive--text__span{
    white-space: pre-wrap;
    padding:2px;
  }
  .adaptive--text__textarea{
    width:100%;
    height:100%;
    resize: none;
  }
  .adaptive--text__textarea,
  .adaptive--input__input{
    position:absolute;
  }
  .adaptive--input__input{
    width:100%;
  }
  .adaptive--input__span{
    padding:2px;
    min-height:1.5rem;
  }
`,line:{start:7,end:48}},group:["attribute holders"],author:["Scott Casey"],access:"public",require:[],file:{path:"adaptive/_adaptive.scss",name:"_adaptive.scss"}},{description:`The styling for basic collapsible/expandable sections.
`,commentRange:{start:8,end:8},context:{type:"mixin",name:"collapsible",code:`
  .collapse-container{
    display:grid;
    position:relative;
  }
  .text-collapse{
    cursor:pointer;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    &:before{
      content: var(--expandedSymbol);
      @include materialIcons.materialStyle;
    }
  }
  .text-collapse__text{
    display:inline;
  }
  .text-collapse__check{
    &:not(:checked) + .text-collapse{
      @include borderPlaceholders.inputHighlight;
    }
    &:checked + .text-collapse:before{
      content: var(--collapsedSymbol);
    }
  }
  .repitem,
  .collapse-container{
    &:hover{
      .collapse,.roll-container{
        opacity:var(--collapseHoverOpacity);
      }
    }
    .collapse{
      opacity:var(--collapseBaseOpacity);
      position:absolute;
      right:-10px;
      top:0px;
      border:0px solid black;
      border-radius:0;
      color:var(--collapseExpandedColor);
      text-transform:none;
      background-color:transparent;
      &:before{
        content:'y';
        font-family:pictos;
      }
      &:checked{
        color:var(--collapseCollapsedColor);
        background-color:transparent;
        ~ .expanded,
        ~ .collapse-container .expanded{
          display:none !important;
        }
        ~ .expanded--empty:is(:not([value]),[value='']) + *,
        ~ .collapse-container ~.expanded--empty:is(:not([value]),[value='']) + *{
          display:none !important;
        }
      }
      &:not(:checked){
        ~ .collapsed{
          display:none !important;
        }
      }
      &:hover{
        color:var(--collapseExpandedColor);
      }
    }
  }
  .repcontainer.editmode{
    .collapse{
      display:none;
    }
  }
`,line:{start:9,end:83}},group:["attribute holders"],author:["Scott Casey"],access:"public",require:[],file:{path:"attribute_holders/_collapse.scss",name:"_collapse.scss"}},{description:`The styling for the functionality of the fillLeft pug mixin. This allows us to easily make [radios/checkboxes that fill as the value increments](https://wiki.roll20.net/CSS_Wizardry#Fill_Radio_Buttons_to_the_Left).
`,commentRange:{start:6,end:6},context:{type:"mixin",name:"fillLeft",code:`
  .fill-left{
    display:var(--fillLeftDisplay);
    align-self:var(--fillLeftAlignment);
    box-sizing:border-box;
  }
  .fill-left__radio{
    appearance:none;
    -webkit-appearance:none;
    background-color:var(--fillLeftSelectedColor);
    width:100%;
    height:100%;
    cursor:pointer;
    &[data-value]:checked:before{
      content:attr(data-value);
      color:var(--fillLeftDataColor);
      font-size:var(--fillLeftDataSize);
      place-self:center;
      text-transform: var(--fillLeftDataTransform);
    }
    &:checked ~ .fill-left__radio{
      background-color:var(--fillLeftUnselectedColor);
    }
  }
`,line:{start:7,end:31}},group:["attribute holders"],author:["Scott Casey"],access:"public",require:[],file:{path:"attribute_holders/_fillLeft.scss",name:"_fillLeft.scss"}},{description:`Mixin for applying our checked styling to something
`,commentRange:{start:6,end:6},context:{type:"mixin",name:"checked",code:`
  background-color:var(--checkedBackColor);
  &:before{
    content: var(--checkContent);
    grid-area:content;
    font-weight:var(--checkWeight);
    place-self:start center;
    color: var(--checkColor);
    font-size: var(--checkSize);
    line-height: var(--checkLineHeight);
  }
`,line:{start:7,end:18}},group:["attribute holders"],author:["Scott Casey"],access:"public",require:[],file:{path:"attribute_holders/_inputBase.scss",name:"_inputBase.scss"},usedBy:[{description:`Basic input styling to ensure that the various inputs are ready for future styling
`,context:{type:"mixin",name:"inputBase",code:`
  input{
    &[type='checkbox']{
      border: 1px solid var(--checkboxBorderColor);
      cursor: pointer;
      -webkit-appearance:none;
      appearance:none;
      width: var(--checkboxWidth);
      min-width: var(--checkboxWidth);
      height: var(--checkboxHeight);
      min-height: var(--checkboxHeight);
      display:grid;
      grid-template-columns:1fr;
      grid-template-areas:"content";
      &:not(.collapse):not(.fill-left__radio):checked{
        @include checked;
      }
    }
    &[type='number']{
      width: 3rem;
      -moz-appearance: textfield !important;
      text-align: center;
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button{
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
  select,
  .pseudo-select span,
  .sheet-pseudo-select span,
  textarea,
  input:not(:is([type='radio'],[type='checkbox'])),
  .uneditable-input{
    padding: var(--inputPadding);
  }
  input:is([type="text"],[type="number"]),textarea{
    cursor:auto;
  }
  select,
  .pseudo-select span,
  .sheet-pseudo-select span,
  input:not(:where([type='checkbox'], [type='radio'])),
  .uneditable-input,
  textarea{
    @include borderPlaceholders.base-border;
  }
  select,
  .sheet-pseudo-select span,
  .pseudo-select span{
    -webkit-apperance: none;
    appearance: none;
    text-transform: var(--selectTextTransform);
    overflow: hidden!important;
    white-space: nowrap;
    text-overflow: var(--selectTextOverflow);
    text-align: var(--selectTextAlign);
    color:var(--selectColor);
  }
  input{
    width: auto;
    &:placeholder{
      color: var(--placeholderColor);
    }
    &.plus-control:not([value*="-"])+span:before{
      content: '+';
    }
  }
  textarea{
    resize: var(--textareaResize);
    white-space: pre-wrap;
    &.fixed{
      resize: none;
      overflow: auto;
    }
  }
`,line:{start:20,end:97}}}]},{description:`Basic input styling to ensure that the various inputs are ready for future styling
`,commentRange:{start:19,end:19},context:{type:"mixin",name:"inputBase",code:`
  input{
    &[type='checkbox']{
      border: 1px solid var(--checkboxBorderColor);
      cursor: pointer;
      -webkit-appearance:none;
      appearance:none;
      width: var(--checkboxWidth);
      min-width: var(--checkboxWidth);
      height: var(--checkboxHeight);
      min-height: var(--checkboxHeight);
      display:grid;
      grid-template-columns:1fr;
      grid-template-areas:"content";
      &:not(.collapse):not(.fill-left__radio):checked{
        @include checked;
      }
    }
    &[type='number']{
      width: 3rem;
      -moz-appearance: textfield !important;
      text-align: center;
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button{
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
  select,
  .pseudo-select span,
  .sheet-pseudo-select span,
  textarea,
  input:not(:is([type='radio'],[type='checkbox'])),
  .uneditable-input{
    padding: var(--inputPadding);
  }
  input:is([type="text"],[type="number"]),textarea{
    cursor:auto;
  }
  select,
  .pseudo-select span,
  .sheet-pseudo-select span,
  input:not(:where([type='checkbox'], [type='radio'])),
  .uneditable-input,
  textarea{
    @include borderPlaceholders.base-border;
  }
  select,
  .sheet-pseudo-select span,
  .pseudo-select span{
    -webkit-apperance: none;
    appearance: none;
    text-transform: var(--selectTextTransform);
    overflow: hidden!important;
    white-space: nowrap;
    text-overflow: var(--selectTextOverflow);
    text-align: var(--selectTextAlign);
    color:var(--selectColor);
  }
  input{
    width: auto;
    &:placeholder{
      color: var(--placeholderColor);
    }
    &.plus-control:not([value*="-"])+span:before{
      content: '+';
    }
  }
  textarea{
    resize: var(--textareaResize);
    white-space: pre-wrap;
    &.fixed{
      resize: none;
      overflow: auto;
    }
  }
`,line:{start:20,end:97}},group:["attribute holders"],author:["Scott Casey"],access:"public",require:[{type:"mixin",name:"checked"}],file:{path:"attribute_holders/_inputBase.scss",name:"_inputBase.scss"}},{description:`All input related items have their styling cleared to remove any Roll20 default styles. Note that all of your styles should be at a level higher than this mixin is used in.
`,commentRange:{start:5,end:10},context:{type:"mixin",name:"clear",code:`
  select,
  textarea,
  input,
  .uneditable-input,
  label,
  button {
    all: initial;
  }
`,line:{start:11,end:20}},example:[{type:"scss",code:`@use 'k-scaffold' as k;
.ui-dialog .tab-content .charsheet{
  @include k.clear;
}`}],group:["base styles"],access:"public",file:{path:"generic_scss/_roll20clear.scss",name:"_roll20clear.scss"}},{description:`Creates the default highlight styling for inputs/selects
`,commentRange:{start:5,end:5},context:{type:"mixin",name:"inputHighlight",code:`
  border-width: 1px 3px;
  border-style: solid;
  border-color: var(--borderColor);
  border-radius: 5px;
  box-sizing: border-box;
`,line:{start:6,end:12}},group:["borders"],access:"public",require:[],file:{path:"generic_scss/_borderPlaceholders.scss",name:"_borderPlaceholders.scss"},usedBy:[{description:`Utility classes that are provided to easily apply a variety of border styles to your elements.
`,context:{type:"mixin",name:"borderStyles",code:`
  .boxed,
  .sheet-boxed{
    @include boxed;
    &.thick-left{
      border-left-width: 5px;
    }
    &.thick-bottom{
      border-bottom-width: 5px;
    }
    &.thick-right{
      border-right-width: 5px;
    }
    &.thick-top{
      border-top-width: 5px;
    }
  }
  .underlined,
  .sheet-underlined{
    @include base-border;
    border-radius: 0;
    border-bottom: 1px solid var(--borderColor);
    transition: border-radius border var(--revealTrans);
  }
  :is(.underlined,.boxed){
    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:hover, :focus,:focus-within){
      @include inputHighlight;
    }
    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:focus,:focus-within){
      background-color: var(--disabledColor);
    }
  }
  .underlined--invisible{
    border-color:transparent !important;
  }
`,line:{start:29,end:64}}}]},{description:`Basic border styling for elements
`,commentRange:{start:13,end:13},context:{type:"mixin",name:"base-border",code:`
  border-width: 1px 3px;
  border-style: solid;
  border-radius: 5px;
  border-color: transparent;
  box-sizing: border-box;
`,line:{start:14,end:20}},group:["borders"],access:"public",file:{path:"generic_scss/_borderPlaceholders.scss",name:"_borderPlaceholders.scss"},usedBy:[{description:`Utility classes that are provided to easily apply a variety of border styles to your elements.
`,context:{type:"mixin",name:"borderStyles",code:`
  .boxed,
  .sheet-boxed{
    @include boxed;
    &.thick-left{
      border-left-width: 5px;
    }
    &.thick-bottom{
      border-bottom-width: 5px;
    }
    &.thick-right{
      border-right-width: 5px;
    }
    &.thick-top{
      border-top-width: 5px;
    }
  }
  .underlined,
  .sheet-underlined{
    @include base-border;
    border-radius: 0;
    border-bottom: 1px solid var(--borderColor);
    transition: border-radius border var(--revealTrans);
  }
  :is(.underlined,.boxed){
    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:hover, :focus,:focus-within){
      @include inputHighlight;
    }
    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:focus,:focus-within){
      background-color: var(--disabledColor);
    }
  }
  .underlined--invisible{
    border-color:transparent !important;
  }
`,line:{start:29,end:64}}}]},{description:`Styling for elements that should have a box around them
`,commentRange:{start:21,end:21},context:{type:"mixin",name:"boxed",code:`
  border: 2px solid var(--borderColor);
  border-radius:0;
  box-sizing:border-box;
`,line:{start:22,end:26}},group:["borders"],access:"public",require:[],file:{path:"generic_scss/_borderPlaceholders.scss",name:"_borderPlaceholders.scss"},usedBy:[{description:`Utility classes that are provided to easily apply a variety of border styles to your elements.
`,context:{type:"mixin",name:"borderStyles",code:`
  .boxed,
  .sheet-boxed{
    @include boxed;
    &.thick-left{
      border-left-width: 5px;
    }
    &.thick-bottom{
      border-bottom-width: 5px;
    }
    &.thick-right{
      border-right-width: 5px;
    }
    &.thick-top{
      border-top-width: 5px;
    }
  }
  .underlined,
  .sheet-underlined{
    @include base-border;
    border-radius: 0;
    border-bottom: 1px solid var(--borderColor);
    transition: border-radius border var(--revealTrans);
  }
  :is(.underlined,.boxed){
    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:hover, :focus,:focus-within){
      @include inputHighlight;
    }
    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:focus,:focus-within){
      background-color: var(--disabledColor);
    }
  }
  .underlined--invisible{
    border-color:transparent !important;
  }
`,line:{start:29,end:64}}}]},{description:`The basic stylings for a button like object. Provides some basic coloring, shadowing, and hover/active state styling
`,commentRange:{start:7,end:7},context:{type:"mixin",name:"base-button",code:`
	background-color: #DCDCDC33;
	border-radius: 5px;
	box-shadow: 0 2px 4px black;
	border-width: 0;
	transition: {
		property:box-shadow,backdrop-filter;
		duration:200ms;
		timing-function:ease-out;
	};
	backdrop-filter:blur(1px);
	overflow:hidden;
	&:is(:hover,:focus){
		background-color: #85858580;
		box-shadow: 0 4px 6px black;
		backdrop-filter:blur(2px);
	}
	&:active{
		background-color: #858585ff;
		box-shadow: 0 1px 2px black;
		backdrop-filter:blur(0px);
	}
`,line:{start:8,end:30}},group:["buttons"],author:["Scott Casey"],access:"public",require:[],file:{path:"attribute_holders/_buttons.scss",name:"_buttons.scss"},usedBy:[{description:`Basic styling for dice icon buttons using the dicefonts (e.g. dicefontd20).
`,context:{type:"mixin",name:"die-button",code:`
	@include base-button;
	line-height: 14px;
	/*height to vertically center a 2rem dicefontd10*/
	font-size: 2rem;
	font-weight: normal;
	font-style: normal;
	padding: 5px 3px 7px;
`,line:{start:33,end:41}}},{description:`Basic styling for buttons with text (or text and icons)
`,context:{type:"mixin",name:"text-button",code:`
	padding: 5px 7px;
	@include base-button;
`,line:{start:44,end:47}}}]},{description:`Basic styling for dice icon buttons using the dicefonts (e.g. dicefontd20).
`,commentRange:{start:32,end:32},context:{type:"mixin",name:"die-button",code:`
	@include base-button;
	line-height: 14px;
	/*height to vertically center a 2rem dicefontd10*/
	font-size: 2rem;
	font-weight: normal;
	font-style: normal;
	padding: 5px 3px 7px;
`,line:{start:33,end:41}},group:["buttons"],author:["Scott Casey"],access:"public",require:[{type:"mixin",name:"base-button"}],file:{path:"attribute_holders/_buttons.scss",name:"_buttons.scss"}},{description:`Basic styling for buttons with text (or text and icons)
`,commentRange:{start:43,end:43},context:{type:"mixin",name:"text-button",code:`
	padding: 5px 7px;
	@include base-button;
`,line:{start:44,end:47}},group:["buttons"],author:["Scott Casey"],access:"public",require:[{type:"mixin",name:"base-button"}],file:{path:"attribute_holders/_buttons.scss",name:"_buttons.scss"}},{description:`Styling for our roll buttons
`,commentRange:{start:48,end:48},context:{type:"mixin",name:"roller",code:`
  display: flex;
  align-items: center;
  gap: var(--half-gap);
  &:before{
    content:'T';
    font-family:dicefontd20;
  }
`,line:{start:49,end:57}},group:["buttons"],author:["Scott Casey"],access:"public",require:[],file:{path:"attribute_holders/_buttons.scss",name:"_buttons.scss"},usedBy:[{description:`Ensures our buttons use the pointer cursor and that our roller construct buttons use the proper styling.
`,context:{type:"mixin",name:"button",code:`
  button{
    cursor: pointer;
  }
	.roller{
		@include roller;
	}
`,line:{start:59,end:66}}}]},{description:`Ensures our buttons use the pointer cursor and that our roller construct buttons use the proper styling.
`,commentRange:{start:58,end:58},context:{type:"mixin",name:"button",code:`
  button{
    cursor: pointer;
  }
	.roller{
		@include roller;
	}
`,line:{start:59,end:66}},group:["buttons"],author:["Scott Casey"],access:"public",require:[{type:"mixin",name:"roller"}],file:{path:"attribute_holders/_buttons.scss",name:"_buttons.scss"}},{description:"A mixin that switches the scaffold's roll template color variables (including sheet variables) over to dark mode specific ones. Should only be used directly inside a `.sheet-rolltemplate-TEMPLATENAME` rule.\n",commentRange:{start:22,end:28},context:{type:"mixin",name:"darkRoll",code:`
  &.sheet-rolltemplate-darkmode{
    @include darkMode;
    --inlineRollBackColor: var(--dm-inlineRollBackColor);
    --inlineRollColor: var(--fontColor);
    --inlineRollCritColor: var(--dm-inlineRollCritColor);
    --inlineRollFumbleColor: var(--dm-inlineRollCritColor);
    --inlineRollImportantColor: var(--dm-inlineRollCritColor);
  }
`,line:{start:29,end:38}},example:[{type:"scss",code:`// Will apply the darkmode styling attributes to the default template when dark mode is enabled.
@use 'k-scaffold' as k;
.sheet-rolltemplate-default{
  @include k.darkRoll;
}`}],groupDescriptions:{"color modes":"A mixin that switches the scaffold's sheet color variables over to dark mode specific versions."},group:["color modes"],access:"public",require:[],file:{path:"generic_scss/_darkmode.scss",name:"_darkmode.scss"}},{description:`These variables control how the default translations included with the scaffold function
`,commentRange:{start:5,end:6},context:{type:"mixin",name:"Animation variables",code:`
  --revealTime:500ms;
  --revealFunction: ease-in-out;
  --revealTrans: var(--revealTime) var(--revealFunction);
`,line:{start:7,end:11}},group:["css variables"],access:"public",require:[],file:{path:"generic_scss/variables/_animation.scss",name:"_animation.scss"}},{description:`These variables control aspects of the borders in the k-scaffold
`,commentRange:{start:5,end:6},context:{type:"mixin",name:"Border variables",code:`
  --borderWidth:1px;
  --borderStyle:solid;
`,line:{start:7,end:10}},group:["css variables"],access:"public",file:{path:"generic_scss/variables/_border.scss",name:"_border.scss"}},{description:`These variables control aspects of the checkbox and radio display in the k-scaffold.
`,commentRange:{start:5,end:6},context:{type:"mixin",name:"checked variables",code:`
  --checkContent: '✓';
  --checkWeight: bold;
  --checkSize: 150%;
  --checkLineHeight: calc(var(--checkSize) / 3);

  --checkboxBorderWidth: var(--borderWidth);
  --checkboxBorderStyle: var(--borderStyle);
  --lm-checkboxBorderColor: var(--lm-borderColor);
  --dm-checkboxBorderColor: var(--dm-borderColor);
  --checkboxBorderColor: var(--lm-checkBorderColor);

  --checkboxWidth: 14px;
  --checkboxHeight: 14px;
`,line:{start:7,end:21}},group:["css variables"],access:"public",require:[],file:{path:"generic_scss/variables/_checked.scss",name:"_checked.scss"}},{description:`Variables that control the styling of the collapse inputs
`,commentRange:{start:5,end:6},context:{type:"mixin",name:"collapse variables",code:`
  --expandedSymbol:'unfold_less';
  --collapsedSymbol: 'unfold_more';

  --collapseHoverOpacity: 1;
  --collapseBaseOpacity: 0;

  --lm-collapseExpandedColor:var(--lm-selectedColor);
  --dm-collapseExpandedColor:var(--dm-selectedColor);
  --collapseExpandedColor: var(--lm-collapseExpandedColor);

  --lm-collapseCollapsedColor:var(--lm-unselectedColor);
  --dm-collapseCollapsedColor:var(--dm-unselectedColor);
  --collapseCollapsedColor: var(--lm-collapseCollapsedColor);
`,line:{start:7,end:21}},group:["css variables"],access:"public",require:[],file:{path:"generic_scss/variables/_collapse.scss",name:"_collapse.scss"}},{description:`Variables for defining colors in your sheet using light mode and dark mode
`,commentRange:{start:5,end:6},context:{type:"mixin",name:"colors variables",code:`
  --lm-backColor:#fff;
  --dm-backColor:var(--dark-surface1);
  --backColor:var(--lm-backColor);

  --lm-selectedColor:#000;
  --dm-selectedColor:#007476;
  --selectedColor:var(--lm-selectedColor);

  --lm-unselectedColor1:lightgrey;
  --dm-unselectedColor1:#0e0e0e;
  --unselectedColor1:var(--lm-unselectedColor1);

  --lm-unselectedColor2:transparent;
  --dm-unselectedColor2:transparent;
  --unselectedColor1:var(--lm-unselectedColor2);

  --lm-checkColor:#000;
  --dm-checkColor:#ff0000;
  --checkColor:var(--lm-checkColor);
  --lm-checkedBackColor:transparent;
  --dm-checkedBackColor:transparent;
  --checkedBackColor:var(--lm-checkedBackColor);

  --lm-borderColor:#000;
  --dm-borderColor:lightgrey;
  --borderColor:var(--lm-borderColor);

  --lm-fontColor:#0f0f0f;
  --dm-fontColor:var(--dark-primarytext);
  --fontColor:var(--lm-fontColor);

  --lm-disabledColor:var(--lm-unselectedColor1);
  --dm-disabledColor:var(--dm-unselectedColor1);
  --disabledColor:var(--lm-disabledColor);
`,line:{start:7,end:42}},group:["css variables"],access:"public",require:[],file:{path:"generic_scss/variables/_colors.scss",name:"_colors.scss"}},{description:`Variables that control the style behavior of the fillLeft construction
`,commentRange:{start:5,end:6},context:{type:"mixin",name:"fillLeft variables",code:`
  --fillLeftDisplay: flex;
  --fillLeftAlignment: center;

  --fillLeftDataTransform: uppercase;
  --fillLeftDataSize: var(--size6);

  // Colors
  --lm-fillLeftSelectedColor: var(--lm-selectedColor);
  --dm-fillLeftSelectedColor: var(--dm-selectedColor);
  --fillLeftSelectedColor: var(--lm-fillLeftSelectedColor);

  --lm-fillLeftUnselectedColor: var(--lm-unselectedColor);
  --dm-fillLeftUnselectedColor: var(--dm-unselectedColor);
  --fillLeftUnselectedColor: var(--lm-fillLeftUnselectedColor);

  --lm-fillLeftDataColor: var(--lm-backColor);
  --dm-fillLeftDataColor: var(--dm-backColor);
  --fillLeftDataColor: var(--lm-fillLeftDataColor);
`,line:{start:7,end:26}},group:["css variables"],access:"public",require:[],file:{path:"generic_scss/variables/_fillLeft.scss",name:"_fillLeft.scss"}},{description:`Variables that control how font family, and font-size of text on the sheet.
`,commentRange:{start:5,end:6},context:{type:"mixin",name:"font variables",code:`
  // Font families
  --font1:var(--topHeadFont);
  --font2:var(--topHeadFont);
  --font3:var(--midHeadFont);
  --font4:var(--midHeadFont);
  --font5:var(--midHeadFont);
  --font6:var(--contentHeadFont);
  --font7:var(--contentHeadFont);

  // Font sizes
  --baseFontSize: 16px;
  --size1:300%;
  --size2:250%;
  --size3:200%;
  --size4:150%;
  --size5:125%;
  --size6:100%;
  --size7:87.5%;

  // Default icon font size
  --icon-size:24px;

  //Default fonts used
  --font-icon: 'Material Icons';
`,line:{start:7,end:32}},group:["css variables"],access:"public",require:[],file:{path:"generic_scss/variables/_font.scss",name:"_font.scss"}},{description:`Variables to control the display of input elements
`,commentRange:{start:5,end:6},context:{type:"mixin",name:"input variables",code:`
  --inputTopPadding: 2px;
  --inputRightPadding: 2px;
  --inputBottomPadding: 2px;
  --inputLeftPadding: 2px;
  --inputPadding:
    var(--inputTopPadding)
    var(--inputRightPadding)
    var(--inputBottomPadding)
    var(--inputLeftPadding);
  
  --lm-placeholderColor:#ededed80;
  --dm-placeholderColor:#3f3f3f80;
  --placeholderColor: var(--lm-placeholderColor);

  --textareaResize: vertical;
`,line:{start:7,end:23}},group:["css variables"],access:"public",require:[],file:{path:"generic_scss/variables/_input.scss",name:"_input.scss"}},{description:`Variables to control the display of the various label constructions
`,commentRange:{start:5,end:6},context:{type:"mixin",name:"label variables",code:`

  --input-label-gap:var(--half-gap) var(--half-gap);

  --input-label-text-transform: capitalize;
`,line:{start:7,end:12}},group:["css variables"],access:"public",require:[],file:{path:"generic_scss/variables/_label.scss",name:"_label.scss"}},{description:`Variables to control basic layout of the k-scaffold
`,commentRange:{start:5,end:6},context:{type:"mixin",name:"layout variables",code:`
  // Layout variables
  // Variables to define our basic gap between layout elements. Followed by several gaps that are mathematically related to it.
  --normal-gap-x:1rem;
  --normal-gap-y:1rem;
  --normal-gap: var(--normal-gap-x);

  // Half gaps
  --half-gap-x:calc(var(--normal-gap-x) / 2);
  --half-gap-y:calc(var(--normal-gap-y) / 2);
  --half-gap: var(--half-gap-x);

  // Tiny gaps (1/4 gap)
  --tiny-gap-x:calc(var(--half-gap-x) / 2);
  --tiny-gap-y:calc(var(--half-gap-y) / 2);
  --tiny-gap: var(--tiny-gap-x);

  // Big gaps (double gap)
  --big-gap-x:calc(var(--normal-gap-x) * 2);
  --big-gap-y:calc(var(--normal-gap-y) * 2);
  --big-gap: var(--big-gap-x);
`,line:{start:7,end:28}},group:["css variables"],access:"public",require:[],file:{path:"generic_scss/variables/_layout.scss",name:"_layout.scss"}},{description:`Variables to control the display of selects
`,commentRange:{start:5,end:6},context:{type:"mixin",name:"select variables",code:`
  --lm-selectColor: var(--lm-fontColor);
  --dm-selectColor: var(--dm-fontColor);
  --selectColor: var(--lm-fontColor);

  --selectTextOverflow: var(--textOverflow);
  --selectTextAlign: center;
  --selectTextTransform: capitalize;
`,line:{start:7,end:15}},group:["css variables"],access:"public",require:[],file:{path:"generic_scss/variables/_select.scss",name:"_select.scss"}},{description:`Styling for our various special fieldset constructions. e.g. [customControlFieldset](/pug.html#customControlFieldset).
`,commentRange:{start:7,end:7},context:{type:"mixin",name:"fieldsetStyling",code:`
  .repitem {
    >input:not([type='checkbox']) {
      width: 100%;
    }

    .headed-textarea,
    .description {
      grid-column: 1/-1;
    }
  }

  .repcontainer {
    display: grid;
    gap: var(--normal-gap);
  }

  .repeating-container {
    display: grid;
    grid-template-areas: 'header';
    align-self: start;

    >.header {
      grid-area: header;
    }
    :is(.repcontrol-button,.repcontrol_edit) {
      opacity: 0;
      transition: var(--revealTrans);
    }
    &:is(:hover, :focus-within, :focus) :is(.repcontrol-button,.repcontrol_edit) {
      opacity: 1;
    }
  }

  // Adding pseudo rep styling
  .repcontrol-button {
    align-self: start;

    ~.repcontrol {
      justify-self: end;
      z-index: 100;

      >.repcontrol_add {
        display: none !important;
      }
    }
  }

  .repcontrol-button--add {
    justify-self: start;
    width: 15px;
    height: 15px;
    padding: 4px;
    font-size: 0;
    color: var(--col-alt);
    border: 1px solid var(--col-alt);

    &::before {
      inset: 0;
      place-self: center;
      font-family: var(--font-icon);
      font-size: 12px;
      content: 'add';
    }
  }

  //End pseudo rep styling
`,line:{start:8,end:75}},group:["fieldsets"],author:["Scott Casey"],access:"public",require:[],file:{path:"fieldsets/_fieldsetStyling.scss",name:"_fieldsetStyling.scss"}},{description:`Styling for items that need the pictos custom font
`,commentRange:{start:9,end:9},context:{type:"mixin",name:"pictosCustom",code:`
  font-family: pictos custom;
  text-transform: none;
`,line:{start:10,end:13}},groupDescriptions:{fonts:"Styling for items that need the pictos font"},group:["fonts"],access:"public",file:{path:"generic_scss/_pictos.scss",name:"_pictos.scss"},usedBy:[{description:`Utility classes for applying the various dice and pictos fonts that are included on Roll20.
`,context:{type:"mixin",name:"r20FontClasses",code:`
  .sheet-pictos,
  .pictos{
    @include pictos;
  }
  .pictos3,
  .sheet-pictos3{
    @include pictos3;
  }
  .pictoscustom,
  .sheet-pictoscustom{
    @include pictosCustom;
  }
  .d4,
  .sheet-d4{
    @include diceD4;
  }
  .d6,
  .sheet-d6{
    @include diceD6;
  }
  .d8,
  .sheet-d8{
    @include diceD8;
  }
  .d10,
  .sheet-d10{
    @include diceD10;
  }
  .d12,
  .sheet-d12{
    @include diceD12;
  }
  .d20,
  .sheet-d20{
    @include diceD20;
  }
  .d30,
  .sheet-d30{
    @include diceD30;
  }
`,line:{start:64,end:105}}}]},{description:`Styling for items that need the pictos 3 font
`,commentRange:{start:14,end:14},context:{type:"mixin",name:"pictos3",code:`
  font-family: pictos three;
  text-transform: none;
`,line:{start:15,end:18}},groupDescriptions:{fonts:"Styling for items that need the pictos font"},group:["fonts"],access:"public",file:{path:"generic_scss/_pictos.scss",name:"_pictos.scss"},usedBy:[{description:`Utility classes for applying the various dice and pictos fonts that are included on Roll20.
`,context:{type:"mixin",name:"r20FontClasses",code:`
  .sheet-pictos,
  .pictos{
    @include pictos;
  }
  .pictos3,
  .sheet-pictos3{
    @include pictos3;
  }
  .pictoscustom,
  .sheet-pictoscustom{
    @include pictosCustom;
  }
  .d4,
  .sheet-d4{
    @include diceD4;
  }
  .d6,
  .sheet-d6{
    @include diceD6;
  }
  .d8,
  .sheet-d8{
    @include diceD8;
  }
  .d10,
  .sheet-d10{
    @include diceD10;
  }
  .d12,
  .sheet-d12{
    @include diceD12;
  }
  .d20,
  .sheet-d20{
    @include diceD20;
  }
  .d30,
  .sheet-d30{
    @include diceD30;
  }
`,line:{start:64,end:105}}}]},{description:`Styling for items that need the dice d4 font
`,commentRange:{start:20,end:20},context:{type:"mixin",name:"diceD4",code:`
  font-family: dicefontd4 !important;
  text-transform: none !important;
`,line:{start:21,end:24}},groupDescriptions:{fonts:"Styling for items that need the pictos font"},group:["fonts"],access:"public",file:{path:"generic_scss/_pictos.scss",name:"_pictos.scss"},usedBy:[{description:`Utility classes for applying the various dice and pictos fonts that are included on Roll20.
`,context:{type:"mixin",name:"r20FontClasses",code:`
  .sheet-pictos,
  .pictos{
    @include pictos;
  }
  .pictos3,
  .sheet-pictos3{
    @include pictos3;
  }
  .pictoscustom,
  .sheet-pictoscustom{
    @include pictosCustom;
  }
  .d4,
  .sheet-d4{
    @include diceD4;
  }
  .d6,
  .sheet-d6{
    @include diceD6;
  }
  .d8,
  .sheet-d8{
    @include diceD8;
  }
  .d10,
  .sheet-d10{
    @include diceD10;
  }
  .d12,
  .sheet-d12{
    @include diceD12;
  }
  .d20,
  .sheet-d20{
    @include diceD20;
  }
  .d30,
  .sheet-d30{
    @include diceD30;
  }
`,line:{start:64,end:105}}}]},{description:`Styling for items that need the dice d6 font
`,commentRange:{start:26,end:26},context:{type:"mixin",name:"diceD6",code:`
  font-family: dicefontd6 !important;
  text-transform: none !important;
`,line:{start:27,end:30}},groupDescriptions:{fonts:"Styling for items that need the pictos font"},group:["fonts"],access:"public",file:{path:"generic_scss/_pictos.scss",name:"_pictos.scss"},usedBy:[{description:`Utility classes for applying the various dice and pictos fonts that are included on Roll20.
`,context:{type:"mixin",name:"r20FontClasses",code:`
  .sheet-pictos,
  .pictos{
    @include pictos;
  }
  .pictos3,
  .sheet-pictos3{
    @include pictos3;
  }
  .pictoscustom,
  .sheet-pictoscustom{
    @include pictosCustom;
  }
  .d4,
  .sheet-d4{
    @include diceD4;
  }
  .d6,
  .sheet-d6{
    @include diceD6;
  }
  .d8,
  .sheet-d8{
    @include diceD8;
  }
  .d10,
  .sheet-d10{
    @include diceD10;
  }
  .d12,
  .sheet-d12{
    @include diceD12;
  }
  .d20,
  .sheet-d20{
    @include diceD20;
  }
  .d30,
  .sheet-d30{
    @include diceD30;
  }
`,line:{start:64,end:105}}}]},{description:`Styling for items that need the dice d8 font
`,commentRange:{start:32,end:32},context:{type:"mixin",name:"diceD8",code:`
  font-family: dicefontd8 !important;
  text-transform: none !important;
`,line:{start:33,end:36}},groupDescriptions:{fonts:"Styling for items that need the pictos font"},group:["fonts"],access:"public",file:{path:"generic_scss/_pictos.scss",name:"_pictos.scss"},usedBy:[{description:`Utility classes for applying the various dice and pictos fonts that are included on Roll20.
`,context:{type:"mixin",name:"r20FontClasses",code:`
  .sheet-pictos,
  .pictos{
    @include pictos;
  }
  .pictos3,
  .sheet-pictos3{
    @include pictos3;
  }
  .pictoscustom,
  .sheet-pictoscustom{
    @include pictosCustom;
  }
  .d4,
  .sheet-d4{
    @include diceD4;
  }
  .d6,
  .sheet-d6{
    @include diceD6;
  }
  .d8,
  .sheet-d8{
    @include diceD8;
  }
  .d10,
  .sheet-d10{
    @include diceD10;
  }
  .d12,
  .sheet-d12{
    @include diceD12;
  }
  .d20,
  .sheet-d20{
    @include diceD20;
  }
  .d30,
  .sheet-d30{
    @include diceD30;
  }
`,line:{start:64,end:105}}}]},{description:`Styling for items that need the dice d10 font
`,commentRange:{start:38,end:38},context:{type:"mixin",name:"diceD10",code:`
  font-family: dicefontd10 !important;
  text-transform: none !important;
`,line:{start:39,end:42}},groupDescriptions:{fonts:"Styling for items that need the pictos font"},group:["fonts"],access:"public",file:{path:"generic_scss/_pictos.scss",name:"_pictos.scss"},usedBy:[{description:`Utility classes for applying the various dice and pictos fonts that are included on Roll20.
`,context:{type:"mixin",name:"r20FontClasses",code:`
  .sheet-pictos,
  .pictos{
    @include pictos;
  }
  .pictos3,
  .sheet-pictos3{
    @include pictos3;
  }
  .pictoscustom,
  .sheet-pictoscustom{
    @include pictosCustom;
  }
  .d4,
  .sheet-d4{
    @include diceD4;
  }
  .d6,
  .sheet-d6{
    @include diceD6;
  }
  .d8,
  .sheet-d8{
    @include diceD8;
  }
  .d10,
  .sheet-d10{
    @include diceD10;
  }
  .d12,
  .sheet-d12{
    @include diceD12;
  }
  .d20,
  .sheet-d20{
    @include diceD20;
  }
  .d30,
  .sheet-d30{
    @include diceD30;
  }
`,line:{start:64,end:105}}}]},{description:`Styling for items that need the dice d12 font
`,commentRange:{start:44,end:44},context:{type:"mixin",name:"diceD12",code:`
  font-family: dicefontd12 !important;
  text-transform: none !important;
`,line:{start:45,end:48}},groupDescriptions:{fonts:"Styling for items that need the pictos font"},group:["fonts"],access:"public",file:{path:"generic_scss/_pictos.scss",name:"_pictos.scss"},usedBy:[{description:`Utility classes for applying the various dice and pictos fonts that are included on Roll20.
`,context:{type:"mixin",name:"r20FontClasses",code:`
  .sheet-pictos,
  .pictos{
    @include pictos;
  }
  .pictos3,
  .sheet-pictos3{
    @include pictos3;
  }
  .pictoscustom,
  .sheet-pictoscustom{
    @include pictosCustom;
  }
  .d4,
  .sheet-d4{
    @include diceD4;
  }
  .d6,
  .sheet-d6{
    @include diceD6;
  }
  .d8,
  .sheet-d8{
    @include diceD8;
  }
  .d10,
  .sheet-d10{
    @include diceD10;
  }
  .d12,
  .sheet-d12{
    @include diceD12;
  }
  .d20,
  .sheet-d20{
    @include diceD20;
  }
  .d30,
  .sheet-d30{
    @include diceD30;
  }
`,line:{start:64,end:105}}}]},{description:`Styling for items that need the dice d20 font
`,commentRange:{start:50,end:50},context:{type:"mixin",name:"diceD20",code:`
  font-family: dicefontd20 !important;
  text-transform: none !important;
`,line:{start:51,end:54}},groupDescriptions:{fonts:"Styling for items that need the pictos font"},group:["fonts"],access:"public",file:{path:"generic_scss/_pictos.scss",name:"_pictos.scss"},usedBy:[{description:`Utility classes for applying the various dice and pictos fonts that are included on Roll20.
`,context:{type:"mixin",name:"r20FontClasses",code:`
  .sheet-pictos,
  .pictos{
    @include pictos;
  }
  .pictos3,
  .sheet-pictos3{
    @include pictos3;
  }
  .pictoscustom,
  .sheet-pictoscustom{
    @include pictosCustom;
  }
  .d4,
  .sheet-d4{
    @include diceD4;
  }
  .d6,
  .sheet-d6{
    @include diceD6;
  }
  .d8,
  .sheet-d8{
    @include diceD8;
  }
  .d10,
  .sheet-d10{
    @include diceD10;
  }
  .d12,
  .sheet-d12{
    @include diceD12;
  }
  .d20,
  .sheet-d20{
    @include diceD20;
  }
  .d30,
  .sheet-d30{
    @include diceD30;
  }
`,line:{start:64,end:105}}}]},{description:`Styling for items that need the dice d30 font
`,commentRange:{start:56,end:56},context:{type:"mixin",name:"diceD30",code:`
  font-family: dicefontd30 !important;
  text-transform: none !important;
`,line:{start:57,end:60}},groupDescriptions:{fonts:"Styling for items that need the pictos font"},group:["fonts"],access:"public",file:{path:"generic_scss/_pictos.scss",name:"_pictos.scss"},usedBy:[{description:`Utility classes for applying the various dice and pictos fonts that are included on Roll20.
`,context:{type:"mixin",name:"r20FontClasses",code:`
  .sheet-pictos,
  .pictos{
    @include pictos;
  }
  .pictos3,
  .sheet-pictos3{
    @include pictos3;
  }
  .pictoscustom,
  .sheet-pictoscustom{
    @include pictosCustom;
  }
  .d4,
  .sheet-d4{
    @include diceD4;
  }
  .d6,
  .sheet-d6{
    @include diceD6;
  }
  .d8,
  .sheet-d8{
    @include diceD8;
  }
  .d10,
  .sheet-d10{
    @include diceD10;
  }
  .d12,
  .sheet-d12{
    @include diceD12;
  }
  .d20,
  .sheet-d20{
    @include diceD20;
  }
  .d30,
  .sheet-d30{
    @include diceD30;
  }
`,line:{start:64,end:105}}}]},{description:`Utility classes for applying font styles
`,commentRange:{start:15,end:15},context:{type:"mixin",name:"textStyles",code:`
  .sheet-italics,
  .italics{
    @include italics;
  }
`,line:{start:16,end:21}},group:["fonts"],access:"public",require:[],file:{path:"generic_scss/_textLevel.scss",name:"_textLevel.scss"}},{description:`Basic styling for headers.
`,commentRange:{start:22,end:22},context:{type:"mixin",name:"baseHeader",code:`
  @include baseText;
  color:var(--fontColor);
  display: block;
  white-space: nowrap;
  margin-top: 0px;
  margin-bottom: 0px;
  font-weight:normal;
`,line:{start:23,end:31}},group:["fonts"],access:"public",require:[],file:{path:"generic_scss/_textLevel.scss",name:"_textLevel.scss"},usedBy:[{description:`Base styling of h1 level headers
`,context:{type:"mixin",name:"h1-style",code:`
  @include baseHeader;
  @include importantHeader;
  font-size: var(--size1);
  font-family: var(--font1);
  &:not(input){
    text-align: center;
  }
`,line:{start:48,end:56}}},{description:`Base styling of h2 level headers
`,context:{type:"mixin",name:"h2-style",code:`
  @include baseHeader;
  @include importantHeader;
  font-size: var(--size2);
  font-family: var(--font2);
  &:not(input){
    text-align: center;
  }
`,line:{start:64,end:72}}},{description:`Base styling of h3 level headers
`,context:{type:"mixin",name:"h3-style",code:`
  @include baseHeader;
  @include importantHeader;
  font-size: var(--size3);
  font-family: var(--font3);
  &:not(input){
    text-align: center;
  }
`,line:{start:80,end:88}}},{description:`Base styling of h4 level headers
`,context:{type:"mixin",name:"h4-style",code:`
  @include baseHeader;
  @include midHeader;
  font-size: var(--size4);
  font-family: var(--font4);
  &:not(input){
    text-align: center;
  }
`,line:{start:96,end:104}}},{description:`Base styling of h5 level headers
`,context:{type:"mixin",name:"h5-style",code:`
  @include baseHeader;
  @include midHeader;
  font-size: var(--size5);
  font-style:normal;
  font-family: var(--font5);
  &:not(input){
    text-align: center;
  }
`,line:{start:112,end:121}}},{description:`Base styling of h6 level headers
`,context:{type:"mixin",name:"h6-style",code:`
  @include baseHeader;
  @include midHeader;
  font-size: var(--size5);
  font-style:normal;
  font-family: var(--font5);
  &:not(input){
    text-align: center;
  }
`,line:{start:129,end:138}}}]},{description:`Headers that should pop!
`,commentRange:{start:33,end:33},context:{type:"mixin",name:"importantHeader",code:`
  text-transform: uppercase;
  font-weight: normal;
`,line:{start:34,end:37}},group:["fonts"],access:"public",file:{path:"generic_scss/_textLevel.scss",name:"_textLevel.scss"},usedBy:[{description:`Base styling of h1 level headers
`,context:{type:"mixin",name:"h1-style",code:`
  @include baseHeader;
  @include importantHeader;
  font-size: var(--size1);
  font-family: var(--font1);
  &:not(input){
    text-align: center;
  }
`,line:{start:48,end:56}}},{description:`Base styling of h2 level headers
`,context:{type:"mixin",name:"h2-style",code:`
  @include baseHeader;
  @include importantHeader;
  font-size: var(--size2);
  font-family: var(--font2);
  &:not(input){
    text-align: center;
  }
`,line:{start:64,end:72}}},{description:`Base styling of h3 level headers
`,context:{type:"mixin",name:"h3-style",code:`
  @include baseHeader;
  @include importantHeader;
  font-size: var(--size3);
  font-family: var(--font3);
  &:not(input){
    text-align: center;
  }
`,line:{start:80,end:88}}}]},{description:`Headers that should be important, but not eye-catching
`,commentRange:{start:39,end:39},context:{type:"mixin",name:"midHeader",code:`
  &:not(:where(input)){
    text-transform:capitalize;
  }
`,line:{start:40,end:44}},group:["fonts"],access:"public",require:[],file:{path:"generic_scss/_textLevel.scss",name:"_textLevel.scss"},usedBy:[{description:`Base styling of h4 level headers
`,context:{type:"mixin",name:"h4-style",code:`
  @include baseHeader;
  @include midHeader;
  font-size: var(--size4);
  font-family: var(--font4);
  &:not(input){
    text-align: center;
  }
`,line:{start:96,end:104}}},{description:`Base styling of h5 level headers
`,context:{type:"mixin",name:"h5-style",code:`
  @include baseHeader;
  @include midHeader;
  font-size: var(--size5);
  font-style:normal;
  font-family: var(--font5);
  &:not(input){
    text-align: center;
  }
`,line:{start:112,end:121}}},{description:`Base styling of h6 level headers
`,context:{type:"mixin",name:"h6-style",code:`
  @include baseHeader;
  @include midHeader;
  font-size: var(--size5);
  font-style:normal;
  font-family: var(--font5);
  &:not(input){
    text-align: center;
  }
`,line:{start:129,end:138}}}]},{description:`Base styling of h1 level headers
`,commentRange:{start:47,end:47},context:{type:"mixin",name:"h1-style",code:`
  @include baseHeader;
  @include importantHeader;
  font-size: var(--size1);
  font-family: var(--font1);
  &:not(input){
    text-align: center;
  }
`,line:{start:48,end:56}},group:["fonts"],access:"public",require:[{type:"mixin",name:"baseHeader"},{type:"mixin",name:"importantHeader"}],file:{path:"generic_scss/_textLevel.scss",name:"_textLevel.scss"}},{description:`Base styling of h2 level headers
`,commentRange:{start:63,end:63},context:{type:"mixin",name:"h2-style",code:`
  @include baseHeader;
  @include importantHeader;
  font-size: var(--size2);
  font-family: var(--font2);
  &:not(input){
    text-align: center;
  }
`,line:{start:64,end:72}},group:["fonts"],access:"public",require:[{type:"mixin",name:"baseHeader"},{type:"mixin",name:"importantHeader"}],file:{path:"generic_scss/_textLevel.scss",name:"_textLevel.scss"}},{description:`Base styling of h3 level headers
`,commentRange:{start:79,end:79},context:{type:"mixin",name:"h3-style",code:`
  @include baseHeader;
  @include importantHeader;
  font-size: var(--size3);
  font-family: var(--font3);
  &:not(input){
    text-align: center;
  }
`,line:{start:80,end:88}},group:["fonts"],access:"public",require:[{type:"mixin",name:"baseHeader"},{type:"mixin",name:"importantHeader"}],file:{path:"generic_scss/_textLevel.scss",name:"_textLevel.scss"}},{description:`Base styling of h4 level headers
`,commentRange:{start:95,end:95},context:{type:"mixin",name:"h4-style",code:`
  @include baseHeader;
  @include midHeader;
  font-size: var(--size4);
  font-family: var(--font4);
  &:not(input){
    text-align: center;
  }
`,line:{start:96,end:104}},group:["fonts"],access:"public",require:[{type:"mixin",name:"baseHeader"},{type:"mixin",name:"midHeader"}],file:{path:"generic_scss/_textLevel.scss",name:"_textLevel.scss"}},{description:`Base styling of h5 level headers
`,commentRange:{start:111,end:111},context:{type:"mixin",name:"h5-style",code:`
  @include baseHeader;
  @include midHeader;
  font-size: var(--size5);
  font-style:normal;
  font-family: var(--font5);
  &:not(input){
    text-align: center;
  }
`,line:{start:112,end:121}},group:["fonts"],access:"public",require:[{type:"mixin",name:"baseHeader"},{type:"mixin",name:"midHeader"}],file:{path:"generic_scss/_textLevel.scss",name:"_textLevel.scss"}},{description:`Base styling of h6 level headers
`,commentRange:{start:128,end:128},context:{type:"mixin",name:"h6-style",code:`
  @include baseHeader;
  @include midHeader;
  font-size: var(--size5);
  font-style:normal;
  font-family: var(--font5);
  &:not(input){
    text-align: center;
  }
`,line:{start:129,end:138}},group:["fonts"],access:"public",require:[{type:"mixin",name:"baseHeader"},{type:"mixin",name:"midHeader"}],file:{path:"generic_scss/_textLevel.scss",name:"_textLevel.scss"}},{description:"Header element styling is applied to normal header elements (h1 - h6) as well as elements that have an `aria-level` defined on them. Note that a `role='heading'` should also be defined on these html elements for full accessibility.\n",commentRange:{start:145,end:145},context:{type:"mixin",name:"headerElements",code:`
  h1,
  *[aria-level='1']{
    @include h1;
  }
  h2,
  *[aria-level='2']{
    @include h2;
  }
  h3,
  *[aria-level='3']{
    @include h3;
  }
  h4,
  *[aria-level='4']{
    @include h4;
  }
  h5,
  *[aria-level='5']{
    @include h5;
  }
  h6,
  *[aria-level='6']{
    @include h6;
  }
`,line:{start:146,end:171}},group:["fonts"],access:"public",require:[],file:{path:"generic_scss/_textLevel.scss",name:"_textLevel.scss"}},{description:`The styling that is applied to all text elements.
`,commentRange:{start:172,end:172},context:{type:"mixin",name:"textElements",code:`
  span,
  input,
  textarea,
  button,
  select{
    @include baseText;
    color: inherit;
    font-family: inherit;
    font-size:inherit;
    line-height:inherit;
  }
  @each $size in 1,2,3,4,5,6,7{
    .text-#{$size},
    .sheet-text-#{$size}{
      font-size: var(--size#{$size});
    }
  }
  .capitalize,
  .sheet-capitalize{
    text-transform: capitalize !important;
  }
  .lowercase,
  .sheet-lowercase{
    text-transform:lowercase !important;
  }
  .uppercase,
  .sheet-uppercase{
    text-transform:uppercase !important;
  }
`,line:{start:173,end:203}},group:["fonts"],access:"public",require:[],file:{path:"generic_scss/_textLevel.scss",name:"_textLevel.scss"}},{description:`Utility classes for applying aspect ratios and sizes
`,commentRange:{start:7,end:9},context:{type:"mixin",name:"Sizes and Ratios",code:`
  .ratio1-1,
  .sheet-ratio1-1{
    @include ratio1_1;
  }
`,line:{start:10,end:15}},group:["layout"],access:"public",require:[],file:{path:"generic_scss/_sizingAndRatio.scss",name:"_sizingAndRatio.scss"}},{description:`Mixin that includes all of the framework's styles. Should be included in a 3 class declaration for character sheets.
`,commentRange:{start:21,end:27},context:{type:"mixin",name:"defaultStyles",code:`
  // Clear roll20 styles
  @include genericStyle.clear;

  // Basic Layout constructs
  @include genericStyle.layout;
  @include genericStyle.borderStyles;
  @include genericStyle.sizesAndRatios;
  
  // Text stylings
  @include genericStyle.textElements;
  @include genericStyle.materialIcons;
  @include genericStyle.textStyles;
  @include genericStyle.headerElements;
  @include genericStyle.r20FontClasses;

  // Input and button
  @include attributeConstructs.inputBase;
  @include attributeConstructs.button;
  @include attributeConstructs.collapsible;
  @include attributeConstructs.fillLeft;
  @include labels.input-label;
  @include labels.headed-textarea;
  @include adaptive.adaptiveText;

  @include fieldsetStyling.fieldsetStyling;
`,line:{start:28,end:54}},example:[{type:"scss",code:`@use 'k-scaffold' as k;

.ui-dialog .tab-content .charsheet{
  @include k.defaultStyles;
}`}],access:"public",group:["undefined"],require:[],file:{path:"_k.scss",name:"_k.scss"},usedBy:[{description:`Mixin that includes all of the default styles as well as rolltemplate specific styling such as inline roll variable assignment. Should be included directly in the rolltemplate declaration for your roll templates.
`,context:{type:"mixin",name:"defaultRollStyling",code:`
  @include defaultStyles;
  @include rolltemplate.rollStyles;
`,line:{start:63,end:66}}}]},{description:`Mixin that includes all of the default styles as well as rolltemplate specific styling such as inline roll variable assignment. Should be included directly in the rolltemplate declaration for your roll templates.
`,commentRange:{start:56,end:62},context:{type:"mixin",name:"defaultRollStyling",code:`
  @include defaultStyles;
  @include rolltemplate.rollStyles;
`,line:{start:63,end:66}},example:[{type:"scss",code:`@use 'k-scaffold/k';

.sheet-rolltemplate-TEMPLATENAME{
  @include k.defaultRollStyling;
}`}],access:"public",group:["undefined"],require:[{type:"mixin",name:"defaultStyles"}],file:{path:"_k.scss",name:"_k.scss"}},{description:`Styling for the built-in layout out utility classes
 @group layout
`,commentRange:{start:1,end:2},context:{type:"mixin",name:"layout",code:`
  // Flexbox variables
  .flex-box,
  .sheet-flex-box{
    display:flex;
  }
  .flex-wrap,
  .sheet-flex-wrap{
    flex-wrap:wrap;
  }
  .justify-space-around,
  .sheet-justify-space-around{
    justify-content:space-around;
  }
  .justify-space-between,
  .sheet-justify-space-between{
    justify-content:space-between;
  }
  .justify-center,
  .sheet-justify-center{
    justify-content:center;
  }
  
  .flex-min-content,
  .sheet-flex-min-content{
    flex: 1 0 min-content;
  }
  .stacked{
    flex-direction:column;
    &.center>*{
      text-align: center;
    }
    &:not(.center){
      align-items:start;
    }
    > [name]:not([type="number"]):not([type="checkbox"]):not([type="radio"]){
      width:100%;
    }
  }
  .flex-column,
  .sheet-flex-column{
    flex-direction: column;
  }
  .flex-row-reverse,
  .sheet-flex-row-revers{
    flex-direction: row-reverse;
  }
  .flex-column-reverse,
  .sheet-flex-column-reverse{
    flex-direction: column-reverse;
  }

  // Gap/Flex combined variables
  .normal-gap,
  .sheet-normal-gap{
    gap:var(--normal-gap);
  }
  .normal-gap-x,
  .sheet-normal-gap-x{
    column-gap:var(--normal-gap-x);
  }
  .normal-gap-y,
  .sheet-normal-gap-y{
    row-gap:var(--normal-gap-y);
  }
  
  .half-gap,
  .sheet-half-gap{
    gap:var(--half-gap);
  }
  .half-gap-x,
  .sheet-half-gap-x{
    column-gap:var(--half-gap-x);
  }
  .half-gap-y,
  .sheet-half-gap-y{
    row-gap:var(--half-gap-y);
  }
  
  .tiny-gap,
  .sheet-tiny-gap{
    gap:var(--tiny-gap);
  }
  .tiny-gap-x,
  .sheet-tiny-gap-x{
    column-gap:var(--tiny-gap-x);
  }
  .tiny-gap-y,
  .sheet-tiny-gap-y{
    row-gap:var(--tiny-gap-y);
  }
  
  .big-gap,
  .sheet-big-gap{
    gap:var(--big-gap);
  }
  .big-gap-x,
  .sheet-big-gap-x{
    column-gap:var(--big-gap-x);
  }
  .big-gap-y,
  .sheet-big-gap-y{
    row-gap:var(--big-gap-y);
  }

  // Grid variables
  .grid,
  .sheet-grid{
    display:grid;
  }

  .grid-span-2,
  .sheet-grid-span-2{
    grid-column:span 2;
  }
  .grid-span-all,
  .sheet-grid-span-all{
    grid-column:1/-1;
  }

  .grid-column,
  .sheet-grid-column{
    grid-auto-flow:column;
  }
  .grid-dense,
  .sheet-grid-dense{
    grid-auto-flow:dense;
  }
`,line:{start:3,end:131}},access:"public",group:["undefined"],require:[],file:{path:"generic_scss/_layout.scss",name:"_layout.scss"}},{description:`Mixin that creates the properties that should be assigned for inline rolls
`,commentRange:{start:1,end:1},context:{type:"mixin",name:"rollProperties",code:`
  // Background settings
  background-color: var(--inlineRoll#{$type}BackColor);

  // Font settings
  color:var(--inlineRoll#{$type}Color);
  font-family:var(--inlineRoll#{$type}Font);
  font-size:var(--inlineRoll#{$type}Size);

  // Spacing
  padding: var(--inlineRoll#{$type}Padding);
  border: var(--inlineRoll#{$type}Border);
  margin: var(--inlineRoll#{$type}Margin);
`,line:{start:2,end:15}},access:"public",group:["undefined"],require:[],file:{path:"rolltemplate/helpers/_index.scss",name:"_index.scss"}},{description:`Utility classes that are provided to easily apply a variety of border styles to your elements.
`,commentRange:{start:27,end:28},context:{type:"mixin",name:"borderStyles",code:`
  .boxed,
  .sheet-boxed{
    @include boxed;
    &.thick-left{
      border-left-width: 5px;
    }
    &.thick-bottom{
      border-bottom-width: 5px;
    }
    &.thick-right{
      border-right-width: 5px;
    }
    &.thick-top{
      border-top-width: 5px;
    }
  }
  .underlined,
  .sheet-underlined{
    @include base-border;
    border-radius: 0;
    border-bottom: 1px solid var(--borderColor);
    transition: border-radius border var(--revealTrans);
  }
  :is(.underlined,.boxed){
    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:hover, :focus,:focus-within){
      @include inputHighlight;
    }
    &:not([readonly]):not([type='checkbox']):not([type='radio']):is(:focus,:focus-within){
      background-color: var(--disabledColor);
    }
  }
  .underlined--invisible{
    border-color:transparent !important;
  }
`,line:{start:29,end:64}},group:["utility"],access:"public",require:[{type:"mixin",name:"boxed"},{type:"mixin",name:"base-border"},{type:"mixin",name:"inputHighlight"}],file:{path:"generic_scss/_borderPlaceholders.scss",name:"_borderPlaceholders.scss"}},{description:`Utility classes that are provided to apply material icon styling to your elements
`,commentRange:{start:16,end:17},context:{type:"mixin",name:"materialIcons",code:`
  .sheet-material-icons,
  .material-icons {
    @include materialStyle;
  }
`,line:{start:18,end:23}},group:["utility"],groupDescriptions:{materialstyle:"Mixin to add the necessary styling to use material icons."},example:[{type:"scss",code:` @use 'k-scaffold' as k;
.charsheet .material-icon{
  @include k.materialStyle;
}`}],access:"public",require:[],file:{path:"generic_scss/_materialIcons.scss",name:"_materialIcons.scss"}},{description:`Utility classes for applying the various dice and pictos fonts that are included on Roll20.
`,commentRange:{start:62,end:63},context:{type:"mixin",name:"r20FontClasses",code:`
  .sheet-pictos,
  .pictos{
    @include pictos;
  }
  .pictos3,
  .sheet-pictos3{
    @include pictos3;
  }
  .pictoscustom,
  .sheet-pictoscustom{
    @include pictosCustom;
  }
  .d4,
  .sheet-d4{
    @include diceD4;
  }
  .d6,
  .sheet-d6{
    @include diceD6;
  }
  .d8,
  .sheet-d8{
    @include diceD8;
  }
  .d10,
  .sheet-d10{
    @include diceD10;
  }
  .d12,
  .sheet-d12{
    @include diceD12;
  }
  .d20,
  .sheet-d20{
    @include diceD20;
  }
  .d30,
  .sheet-d30{
    @include diceD30;
  }
`,line:{start:64,end:105}},group:["utility"],groupDescriptions:{fonts:"Styling for items that need the pictos font"},access:"public",require:[{type:"mixin",name:"pictos3"},{type:"mixin",name:"pictosCustom"},{type:"mixin",name:"diceD4"},{type:"mixin",name:"diceD6"},{type:"mixin",name:"diceD8"},{type:"mixin",name:"diceD10"},{type:"mixin",name:"diceD12"},{type:"mixin",name:"diceD20"},{type:"mixin",name:"diceD30"}],file:{path:"generic_scss/_pictos.scss",name:"_pictos.scss"}}],jp=[{meta:{name:"adaptiveTextarea",description:"Creates an html construction for creating a [content-scaled](https://wiki.roll20.net/CSS_Wizardry#Content-scaled_Inputs) textarea. You can apply classes and IDs to the container div by appending them to the mixin call (see the second example).",arguments:[{name:"textObj",description:"The object describing the textarea as per the {@link textarea} mixin.",type:"object",default:null,nullable:!1,optional:!1,original:"{object} textObj - The object describing the textarea as per the {@link textarea} mixin."}],attributes:null,example:`include ../_k.pug
+adaptiveTextarea({name:'character description'})

//Appending the class directly to the mixin
+adaptiveTextarea({name:'character description'}).custom-class
`},file:"lib/adaptive/_adaptive.pug",source:`mixin adaptiveTextarea(textObj)
  .adaptive.adaptive--text&attributes(attributes)
    - let spanObj = {name:textObj.name,class:'adaptive--text__span'};
    - textObj.class = textObj.class ? \`\${textObj.class} adaptive--text__textarea\` : 'adaptive--text__textarea';
    +span(spanObj)
    +textarea(textObj)`,output:`<div class="adaptive adaptive--text">
  <span class="adaptive--text__span" name="attr_character_description" title="@{character_description}"></span>
  <textarea class="adaptive--text__textarea" name="attr_character_description" title="@{character_description}"></textarea>
</div>
<!--Appending the class directly to the mixin-->
<div class="adaptive adaptive--text custom-class">
  <span class="adaptive--text__span" name="attr_character_description" title="@{character_description}"></span>
  <textarea class="adaptive--text__textarea" name="attr_character_description" title="@{character_description}"></textarea>
</div>`},{meta:{name:"adaptiveInput",description:"Creates an html construction for creating a [content-scaled](https://wiki.roll20.net/CSS_Wizardry#Content-scaled_Inputs) input. You can apply classes and IDs to the container div by appending them to the mixin call (see the second example).",arguments:[{name:"inputObj",description:"The object describing the input as per the {@link input} mixin. You can apply classes and IDs to the container div by appending them to the mixin call (see the second example).",type:"object",default:null,nullable:!1,optional:!1,original:"{object} inputObj - The object describing the input as per the {@link input} mixin. You can apply classes and IDs to the container div by appending them to the mixin call (see the second example)."}],attributes:null,example:`include ../_k.pug
+adaptiveInput({name:'character description',type:'text'})

//Appending class directly to the mixin
+adaptiveInput({name:'character description',type:'text'}).custom-class
`},file:"lib/adaptive/_adaptive.pug",source:`mixin adaptiveInput(textObj)
  .adaptive.adaptive--input&attributes(attributes)
    - let spanObj = {name:textObj.name,class:'adaptive--input__span','max-width':maxWidth};
    - textObj.class = textObj.class ? \`\${textObj.class} adaptive--input__input\` : 'adaptive--input__input';
    +span(spanObj)
    +input(textObj)`,output:`<div class="adaptive adaptive--input">
  <span class="adaptive--input__span" name="attr_character_description" title="@{character_description}"></span>
  <input class="adaptive--input__input" name="attr_character_description" type="text" title="@{character_description}"/>
</div>
<!--Appending class directly to the mixin-->
<div class="adaptive adaptive--input custom-class">
  <span class="adaptive--input__span" name="attr_character_description" title="@{character_description}"></span>
  <input class="adaptive--input__input" name="attr_character_description" type="text" title="@{character_description}"/>
</div>`},{meta:{name:"img",description:"A mixin to create a sheet image element. Particularly useful when using the image attribute syntax.",arguments:[{name:"imgObj",description:"An object describing the properties of the img just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property.",type:"object",default:null,nullable:!1,optional:!1,original:"{object} imgObj - An object describing the properties of the img just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property."}],example:`include ../_k.pug
+img({name:'my image',class:'some-class'})
`},file:"lib/attribute_holders/_attribute_backed.pug",source:`mixin img(obj)
  - checkKUse();
  - obj.class = obj.class ? replaceProblems(obj.class) : undefined;
  - obj['data-i18n-alt'] = obj['data-i18n-alt'] || obj.name;
  - obj.name = attrName(obj.name);
  - obj.title = obj.title || attrTitle(obj.name);
  - obj.name = \`attr_\${obj.name}\`;
  - const elementObj = makeElementObj(obj);
  - addFieldToFieldsetObj(obj);
  - storeTrigger(obj);
  img&attributes(elementObj)`,output:'<img class="some-class" name="attr_my_image" data-i18n-alt="my image" title="@{my_image}"/>'},{meta:{name:"span",description:"Creates a span element and formats the name of the span for compatibility with the Roll20 attribute system.",arguments:[{name:"attrObj",description:"The object describing the span itself.",type:"object",default:null,nullable:!1,optional:!1,original:"{object} attrObj - The object describing the span itself."},{name:"block",description:"What is contained within the span",type:"block",default:null,nullable:!1,optional:!1,original:"{block} block - What is contained within the span"}],attributes:null,example:`include ../_k.pug
+span({name:'attribute backed span',trigger:{calculation:'calculateAttribute'}})
`},file:"lib/attribute_holders/_attribute_backed.pug",source:`mixin span(obj)
  - checkKUse();
  - obj.class = obj.class ? replaceProblems(obj.class) : undefined;
  if obj.name
    - obj.name = replaceSpaces(obj.name);
    - obj.title = obj.title || attrTitle(obj.name);
    - obj.name = \`attr_\${obj.name}\`;
    - addFieldToFieldsetObj(obj);
  - const elementObj = makeElementObj(obj);
  span&attributes(elementObj)
    block
  if obj.name
    - obj.type = 'span';
    - storeTrigger(obj);`,output:'<span name="attr_attribute_backed_span" title="@{attribute_backed_span}"></span>'},{meta:{name:"div",description:"Creates a div element and will properly format the name attribute of the div if it is provided",arguments:[{name:"divObj",description:"The object describing the div",type:"object",default:null,nullable:!1,optional:!1,original:"{object} divObj - The object describing the div"},{name:"block",description:"The contents of the div",type:"block",default:null,nullable:!1,optional:!1,original:"{block} block - The contents of the div"}],attributes:null,example:`include ../_k.pug
+div({name:'background image'})
`},file:"lib/attribute_holders/_attribute_backed.pug",source:`mixin div(obj)
  - checkKUse();
  - obj.class = obj.class ? replaceProblems(obj.class) : undefined;
  if obj.name
    - obj.name = replaceSpaces(obj.name);
    - obj.title = obj.title || attrTitle(obj.name);
    - obj.name = \`attr_\${obj.name}\`;
  div&attributes(obj)
    block`,output:'<div name="attr_background_image" title="@{background_image}"></div>'},{meta:{name:"button",description:"Creates a button element. Valid types are `roll` or `action`. If a type is not specified in the object argument, a roll button is created. If an action button is created, spaces in the name are replaced with dashes instead of underscores.",arguments:[{name:"buttonObj",description:"The object describing the button",type:"object",default:null,nullable:!1,optional:!1,original:"{object} buttonObj - The object describing the button"},{name:"block",description:"The contents of the button element",type:"block",default:null,nullable:!1,optional:!1,original:"{block} block - The contents of the button element"}],example:`include ../_k.pug
//A basic roll button
+button({name:'my button',value:'/r 3d10'})
//An action button
+button({name:'my button',type:'action','data-i18n':'action button',trigger:{triggeredFuncs:['doSomethingOnClick']}})
`},file:"lib/attribute_holders/_buttons.pug",source:`mixin button(obj, _attributes)
  - checkKUse();
  - obj.class = obj.class ? replaceProblems(obj.class) : undefined;
  - obj.name = attrName(obj.name);
  - obj.title = obj.title || buttonTitle(obj.name);
  if obj.type === 'action'
    - obj.name = \`act_\${obj.name}\`;
  else
    - obj.type = 'roll';
    - obj.name = \`roll_\${obj.name}\`;
  - const elementObj = makeElementObj(obj);
  if obj.type !== 'roll'
    - storeTrigger(obj);
  button&attributes(elementObj)&attributes(attributes)
    block`,output:`<!--A basic roll button-->
<button name="roll_my_button" value="/r 3d10" title="%{my_button}" type="roll"></button>
<!--An action button-->
<button name="act_my_button" type="action" data-i18n="action button" title="%{my_button}"></button>`},{meta:{name:"action",arguments:[{name:"buttonObj",description:"The object describing the button",type:"object",default:null,nullable:!1,optional:!1,original:"{object} buttonObj - The object describing the button"},{name:"block",description:"The contents of the button element",type:"block",default:null,nullable:!1,optional:!1,original:"{block} block - The contents of the button element"}],description:"Alias for {@link button} that creates a button element with a type of `action`. Spaces in the name are replaced with dashes instead of underscores.",attributes:null,example:`include ../_k.pug
+action({name:'my button','data-i18n':'action button',trigger:{triggeredFuncs:['doSomethingOnClick']}})
`},file:"lib/attribute_holders/_buttons.pug",source:`mixin action(obj, _attributes)
  - obj.class = obj.class ? replaceProblems(obj.class) : undefined;
  - obj.type = 'action';
  - obj.name = attrName(obj.name).replace(/[\\s_]+/g,'-');
  +button(obj)&attributes(attributes)
    block`,output:'<button name="act_my-button" data-i18n="action button" type="action" title="%{my-button}"></button>'},{meta:{name:"roller",arguments:[{name:"buttonObj",description:"The object describing the button",type:"object",default:null,nullable:!1,optional:!1,original:"{object} buttonObj - The object describing the button"},{name:"block",description:"The contents of the button element",type:"block",default:null,nullable:!1,optional:!1,original:"{block} block - The contents of the button element"}],description:"Creates a multi element construction made of a hidden input, a roll button, and a hidden action button. On sheet load, or character sheet name change, the hidden input is updated with an ability call to the action button. The roll button refers to the hidden input as its value. This allows for an action button to be used to call custom roll parsing (or other sheet functionality) while retaining the ability to drag the button to the macro bar. Uses the same arguments as {@link button}. A trigger should be passed, and will be associated with the action button's name.",attributes:null,example:`include ../_k.pug
+roller({name:'my button','data-i18n':'action button',trigger:{triggeredFuncs:['doSomethingOnClick']}})
`},file:"lib/attribute_holders/_buttons.pug",source:`mixin roller(obj)
  +rollerExtras(obj)
    - let rollObj = {...obj};
    - delete rollObj.trigger;
    +button(obj)
      block`,output:`<button class="roller" name="roll_my_button" data-i18n="action button" value="@{my_button_action}" title="%{my_button}" type="roll"></button>
<button name="act_my-button-action" hidden="" type="action" title="%{my-button-action}"></button>
<input name="attr_my_button_action" type="hidden" title="@{my_button_action}"/>`},{meta:{name:"compendiumAttributes",description:"Creates a set of compendium drop target attributes. Defaults to creating target attributes for the `Name` and `data` compendium attributes.",arguments:[{name:"prefix",description:"A prefix to attach to the default attribute names.",type:"string",default:null,nullable:!1,optional:!0,original:"{string} [prefix] - A prefix to attach to the default attribute names."},{name:"lookupAttributes",description:"An array of the lookup attributes to create targets for. The target attributes are named based on the compendium attribute they are for.",type:"array",default:"['Name','data']",nullable:!1,optional:!0,original:"{array} [lookupAttributes = ['Name','data']] - An array of the lookup attributes to create targets for. The target attributes are named based on the compendium attribute they are for."},{name:"triggerAccept",description:"The compendium attribute that should trigger the sheetworkers to handle the compendium drop.",type:"string",default:"'Name'",nullable:!1,optional:!0,original:"{string} [triggerAccept = 'Name'] - The compendium attribute that should trigger the sheetworkers to handle the compendium drop."},{name:"trigger",description:"The trigger object.",type:"object",default:null,nullable:!1,optional:!0,original:"{object} [trigger] - The trigger object."}],attributes:null,example:`include ../_k.pug
//Using just defaults
+compendiumAttributes({})

//Specifying a prefix
+compendiumAttributes({prefix:'prefix'})

//Specifying lookupAttributes and a prefix
+compendiumAttributes({lookupAttributes:['Name','data','Category'],prefix:'prefix'})
`},file:"lib/attribute_holders/_compendium.pug",source:`mixin compendiumAttributes({prefix,lookupAttributes = ['Name','data'],triggerAccept = 'Name',trigger = {triggeredFuncs:["handleCompendiumDrop"]}})
  - prefix = prefix ? \`\${prefix} \` : '';
  each accept in lookupAttributes
    - let inputObj = {name:\`\${prefix}drop \${accept.toLowerCase()}\`,accept,value:''};
    if accept === triggerAccept
      - inputObj.trigger = trigger;
    +hidden(inputObj)`,output:`<!--Using just defaults-->
<input name="attr_drop_name" accept="Name" value="" type="hidden" title="@{drop_name}"/>
<input name="attr_drop_data" accept="data" value="" type="hidden" title="@{drop_data}"/>
<!--Specifying a prefix-->
<input name="attr_prefix_drop_name" accept="Name" value="" type="hidden" title="@{prefix_drop_name}"/>
<input name="attr_prefix_drop_data" accept="data" value="" type="hidden" title="@{prefix_drop_data}"/>
<!--Specifying lookupAttributes and a prefix-->
<input name="attr_prefix_drop_name" accept="Name" value="" type="hidden" title="@{prefix_drop_name}"/>
<input name="attr_prefix_drop_data" accept="data" value="" type="hidden" title="@{prefix_drop_data}"/>
<input name="attr_prefix_drop_category" accept="Category" value="" type="hidden" title="@{prefix_drop_category}"/>`},{meta:{name:"fillLeft",description:"A mixin that creates an html construction ready to be styled for use as a [fill-to-left section](https://wiki.roll20.net/CSS_Wizardry#Fill_Radio_Buttons_to_the_Left).",arguments:[{name:"radioObj",description:"The object containing the details of the radio input to create. Similar to the {@link radio}, but the value property passed is used as the default checked value.",type:"object",default:null,nullable:!1,optional:!1,original:"{object} radioObj - The object containing the details of the radio input to create. Similar to the {@link radio}, but the value property passed is used as the default checked value."},{name:"divObj",description:"Optional object containing any details of the div to be applied such as class, id, or other properties. Class and ID can also be supplied by attaching them to the mixin invocation just like with a regular div.",type:"object",default:null,nullable:!1,optional:!0,original:"{object} [divObj] - Optional object containing any details of the div to be applied such as class, id, or other properties. Class and ID can also be supplied by attaching them to the mixin invocation just like with a regular div."},{name:"valueArray",description:"Array containing the values to be used for the fill to left construction. These should be in the order that they should be displayed left to right.",type:"array",default:null,nullable:!1,optional:!1,original:"{array} valueArray - Array containing the values to be used for the fill to left construction. These should be in the order that they should be displayed left to right."},{name:"noClear",description:"Optional argument that tells the mixin whether or not to apply the `fill-left__radio--clearer` class to the first radio button value. If falsy (or not passed), the class is applied. If truthy, the class is not applied.",type:"boolean",default:null,nullable:!1,optional:!0,original:"{boolean} [noClear] - Optional argument that tells the mixin whether or not to apply the `fill-left__radio--clearer` class to the first radio button value. If falsy (or not passed), the class is applied. If truthy, the class is not applied."}],example:`include ../_k.pug
+fillLeft({
  radioObj:{name:'my radio'},
  divObj:{class:'some-custom-class'},
  valueArray:[1,2,3,4,5]
})
`},file:"lib/attribute_holders/_fill_left.pug",source:`mixin fillLeft({radioObj,divObj,valueArray,noClear,displayValues})
  - divObj = divObj || {};
  .fill-left&attributes(divObj)&attributes(attributes)
    if !noClear
      - const clearObj = {...radioObj,value:0};
      -
        clearObj.class = clearObj.class ? 
          \`\${clearObj.class} fill-left__radio\` :
          \`fill-left__radio\`;
      if value === 0
        - clearObj.checked = '';
      +hidden(clearObj)
    each value,index in valueArray
      - const usedObj = {...radioObj,value};
      -
        usedObj.class = usedObj.class ? 
          \`\${usedObj.class} fill-left__radio\` :
          \`fill-left__radio\`;
      if displayValues
        - usedObj['data-value'] = displayValues[index];
      if value === radioObj.value
        - usedObj.checked = '';
      
      +#{noClear ? 'radio' : 'checkbox'}(usedObj)`,output:`<div class="fill-left some-custom-class">
  <input class="fill-left__radio" name="attr_my_radio" value="0" type="hidden" title="@{my_radio}"/>
  <input class="fill-left__radio" name="attr_my_radio" value="1" type="checkbox" title="@{my_radio}"/>
  <input class="fill-left__radio" name="attr_my_radio" value="2" type="checkbox" title="@{my_radio}"/>
  <input class="fill-left__radio" name="attr_my_radio" value="3" type="checkbox" title="@{my_radio}"/>
  <input class="fill-left__radio" name="attr_my_radio" value="4" type="checkbox" title="@{my_radio}"/>
  <input class="fill-left__radio" name="attr_my_radio" value="5" type="checkbox" title="@{my_radio}"/>
</div>`},{meta:{name:"input",description:"A generic mixin to create an input. The mixin will replace spaces in the attribute name with underscores and will add a title property if one isn't supplied that will inform the user what the attribute call for the attribute is.",arguments:[{name:"inputObj",description:"An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property",type:"object",default:null,nullable:!1,optional:!1,original:"{object} inputObj - An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property"}],attributes:null,example:`include ../_k.pug
+input({name:'my attribute',type:'text',class:'some-class',trigger:{affects:['other_attribute']}})
`},file:"lib/attribute_holders/_inputs.pug",source:`mixin input(obj)
  - checkKUse();
  - obj.class = obj.class ? replaceProblems(obj.class) : undefined;
  - obj.name = attrName(obj.name);
  - obj.title = obj.title || attrTitle(obj.name);
  - obj.name = \`attr_\${obj.name}\`;
  - const elementObj = makeElementObj(obj);
  - addFieldToFieldsetObj(obj);
  - storeTrigger(obj);
  input&attributes(elementObj)&attributes(attributes)`,output:'<input class="some-class" name="attr_my_attribute" type="text" title="@{my_attribute}"/>'},{meta:{name:"text",arguments:[{name:"inputObj",description:"An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property",type:"object",default:null,nullable:!1,optional:!1,original:"{object} inputObj - An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property"}],description:"An alias for {@link input} that specifies the input type as text. See {@link input} for arguments.",attributes:null,example:`include ../_k.pug
+text({name:'my attribute',class:'some-class',trigger:{affects:['other_attribute']}})
`},file:"lib/attribute_holders/_inputs.pug",source:`mixin text(obj)
  - obj.type = 'text';
  +input(obj)`,output:'<input class="some-class" name="attr_my_attribute" type="text" title="@{my_attribute}"/>'},{meta:{name:"checkbox",arguments:[{name:"inputObj",description:"An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property",type:"object",default:null,nullable:!1,optional:!1,original:"{object} inputObj - An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property"}],description:"An alias for {@link input} that specifies the input type as checkbox. See {@link input} for arguments.",attributes:null,example:`include ../_k.pug
+checkbox({name:'my checkbox',value:1})
`},file:"lib/attribute_holders/_inputs.pug",source:`mixin checkbox(obj)
  - obj.type = 'checkbox';
  +input(obj)&attributes(attributes)`,output:'<input name="attr_my_checkbox" value="1" type="checkbox" title="@{my_checkbox}"/>'},{meta:{name:"collapse",arguments:[{name:"name",description:"The name to use for the collapse element. Defaults to `collapse`",type:"string",default:"collapse",nullable:!1,optional:!0,original:"{string} [name=collapse] - The name to use for the collapse element. Defaults to `collapse`"}],description:"Alias for {@link checkbox} that creates a checkbox for us in collapse/expanding a section. Sets the checkbox to unchecked with a checked value of `1` and a class of `collapse`. Additional classes/ids can be applied by applying them inline to the mixin call.",attributes:null,example:`include ../_k.pug
+collapse()
`},file:"lib/attribute_holders/_inputs.pug",source:`mixin collapse(name='collapse')
  +checkbox({name,value:1,class:'collapse'})&attributes(attributes)`,output:'<input class="collapse" name="attr_collapse" value="1" type="checkbox" title="@{collapse}"/>'},{meta:{name:"radio",arguments:[{name:"inputObj",description:"An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property",type:"object",default:null,nullable:!1,optional:!1,original:"{object} inputObj - An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property"}],description:"Alias for {@link input} that specifies `radio` as the input type. See {@link input} for arguments.",attributes:null,example:`include ../_k.pug
+radio({name:'my radio',value:1,checked:''})
+radio({name:'my radio',value:2})
+radio({name:'my radio',value:3})
`},file:"lib/attribute_holders/_inputs.pug",source:`mixin radio(obj)
  - obj.type = 'radio';
  +input(obj)`,output:`<input name="attr_my_radio" value="1" checked="" type="radio" title="@{my_radio}"/>
<input name="attr_my_radio" value="2" type="radio" title="@{my_radio}"/>
<input name="attr_my_radio" value="3" type="radio" title="@{my_radio}"/>`},{meta:{name:"number",arguments:[{name:"inputObj",description:"An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property",type:"object",default:null,nullable:!1,optional:!1,original:"{object} inputObj - An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property"}],description:"Alias for {@link input} that makes a number input. See {@link input} for arguments.",attributes:null,example:`include ../_k.pug
+number({name:'my number',class:'some-class',trigger:{affects:['other_attribute']}})
`},file:"lib/attribute_holders/_inputs.pug",source:`mixin number(obj)
  - obj.type = 'number';
  +input(obj)`,output:'<input class="some-class" name="attr_my_number" type="number" title="@{my_number}"/>'},{meta:{name:"range",arguments:[{name:"inputObj",description:"An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property",type:"object",default:null,nullable:!1,optional:!1,original:"{object} inputObj - An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property"}],description:"Alias for {@link input} that makes a range input. See {@link input} for arguments.",attributes:null,example:`include ../_k.pug
+range({name:'my range',class:'some-class'})
`},file:"lib/attribute_holders/_inputs.pug",source:`mixin range(obj)
  - obj.type = 'range';
  +input(obj)`,output:'<input class="some-class" name="attr_my_range" type="range" title="@{my_range}"/>'},{meta:{name:"hidden",arguments:[{name:"inputObj",description:"An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property",type:"object",default:null,nullable:!1,optional:!1,original:"{object} inputObj - An object describing the properties of the input just like they would be in a PUG or HTML element declaration, but in JS Object syntax. May also include a trigger property"}],description:"Alias for {@link input} that makes a hidden input. See {@link input} for arguments.",attributes:null,example:`include ../_k.pug
+hidden({name:'my hidden attribute',class:'some-class',trigger:{triggeredFuncs:['someFunction']}})
`},file:"lib/attribute_holders/_inputs.pug",source:`mixin hidden(obj)
  - obj.type = 'hidden';
  +input(obj)`,output:'<input class="some-class" name="attr_my_hidden_attribute" type="hidden" title="@{my_hidden_attribute}"/>'},{meta:{name:"textarea",description:"A mixin to create K-scaffold compatible textareas.",arguments:[{name:"textObj",description:"See {@link input} for information on valid properties of the textObj.",type:"object",default:null,nullable:!1,optional:!1,original:"{object} textObj - See {@link input} for information on valid properties of the textObj."}],attributes:null,example:`include ../_k.pug
+textarea({name:'my textarea',class:'some-class',trigger:{affects:['an_attribute']}})
`},file:"lib/attribute_holders/_inputs.pug",source:`mixin textarea(obj)
  - checkKUse();
  - obj.class = obj.class ? replaceProblems(obj.class) : undefined;
  - obj.name = attrName(obj.name);
  - obj.title = obj.title || attrTitle(obj.name);
  - obj.name = \`attr_\${obj.name}\`;
  - addFieldToFieldsetObj(obj);
  - storeTrigger(obj);
  - const elementObj = makeElementObj(obj);
  textarea&attributes(elementObj)`,output:'<textarea class="some-class" name="attr_my_textarea" title="@{my_textarea}"></textarea>'},{meta:{name:"select",arguments:[{name:"selectObj",description:"The object describing the select",type:"object",default:null,nullable:!1,optional:!1,original:"{object} selectObj - The object describing the select"},{name:"block",description:"The content within the select",type:"block",default:null,nullable:!1,optional:!1,original:"{block} block - The content within the select"}],description:"A mixin to create a select element. Also provides an option mixin that is restricted to only work within the select. Trigger objects can be passed as arguments on the select call itself or on the default selected option. Uses K-scaffold global variables to control how option mixins within the select's block behave.",example:`include ../_k.pug
+select({name:'my select'})
  +option({value:'a value','data-i18n':'a translation key',trigger:{affects:['some_attribute']}})
  +option({value:'value 2','data-i18n':'translation 2'})
  +option({value:'value 3'})
  |Some Text we include via the option's block
|
|
+select({
  name:'my select',
  trigger:{
    affects:['some_attribute']
  }
})
  +option({value:'a value','data-i18n':'a translation key'})
  +option({value:'value 2','data-i18n':'translation 2'})
  +option({value:'value 3'})
    |Some Text we include via the option's block
`},file:"lib/attribute_holders/_selects.pug",source:`mixin select(obj)
  - checkKUse();
  -
    obj.class = obj.class ?
      replaceProblems(obj.class) :
      undefined;
  - obj.name = attrName(obj.name);
  - obj.title = obj.title || attrTitle(obj.name);
  - obj.name = \`attr_\${obj.name}\`;
  - addFieldToFieldsetObj(obj);

  //- Initialize the object that will be passed to the cascade
  - const triggerObj = {...obj,type:'select'};
  - const options = [];
  
  mixin option(optObj)
    -
      optObj.class = optObj.class ?
        replaceProblems(optObj.class) :
        undefined;
    -
      const pushObj = {
        obj:optObj,
        attributes: attributes || {}
      };
    if block
      - pushObj.block = block;
    - options.push(pushObj);


  if !block
    option(value='!!! Error: empty select !!!')
  else
    - block();
    - const selObj = makeElementObj(obj);
    select&attributes(selObj)&attributes(attributes)
      each o in options
        if o.hasOwnProperty('selected') && o.hasOwnProperty('value')
          - triggerObj.value = o.value;
          if o.trigger && !triggerObj.trigger
            - triggerObj.trigger = o.trigger;
        - const elemObj = makeElementObj(o.obj);
        option&attributes(elemObj)&attributes(o.attributes)
    - storeTrigger(triggerObj);`,output:`Some Text we include via the option's block<select name="attr_my_select" title="@{my_select}">
  <option value="a value" data-i18n="a translation key"></option>
  <option value="value 2" data-i18n="translation 2"></option>
  <option value="value 3"></option>
</select>

<select name="attr_my_select" title="@{my_select}">
  <option value="a value" data-i18n="a translation key"></option>
  <option value="value 2" data-i18n="translation 2"></option>
  <option value="value 3"></option>
</select>`},{meta:{name:"fieldset",description:"A mixin that creates a fieldset for the creation of a repeating section. The mixin prefixes the name with `repeating_` and replaces problem characters (e.g. spaces are replaced with dashes). Additionally, the auto-generated title properties from the K-scaffold\\'s mixins will include the proper repeating section information.",arguments:[{name:"name",description:"The name of the repeating section. Will be prefixed with `repeating_` and spaces will be replaced with dashes (`-`).",type:"string",default:null,nullable:!1,optional:!1,original:"{string} name - The name of the repeating section. Will be prefixed with `repeating_` and spaces will be replaced with dashes (`-`)."},{name:"trigger",description:"Trigger that defines how to handle the removal of a row from the fieldset. `Optional`",type:"object",default:null,nullable:!1,optional:!0,original:"{object} [trigger] - Trigger that defines how to handle the removal of a row from the fieldset. `Optional`"},{name:"addClass",description:"Any additional classes that should be used for the repeating section. Note that these are not added to the fieldset itself as adding additional classes to the fieldset itself interferes with calling action buttons from chat, but are added to a span that precedes the fieldset. This allows styling of the repcontainer via a css declaration like `.bonus-class + fieldset + .repcontainer`.",type:"string",default:null,nullable:!1,optional:!1,original:"{string} addClass - Any additional classes that should be used for the repeating section. Note that these are not added to the fieldset itself as adding additional classes to the fieldset itself interferes with calling action buttons from chat, but are added to a span that precedes the fieldset. This allows styling of the repcontainer via a css declaration like `.bonus-class + fieldset + .repcontainer`."}],attributes:null,example:`include ../_k.pug
//A basic fieldset declaration with a trigger
+fieldset({
  name:'fieldset',
  trigger:{triggeredFuncs:['doWhenRemoved']}
})
  +text({name:'name'})

//A Fieldset with an added class
+fieldset({
  name:'fieldset',
  trigger:{triggeredFuncs:['doWhenRemoved']},
  addClass:'some-class'
})
  +text({name:'name'})
`},file:"lib/fieldsets/_fieldsets.pug",source:`mixin fieldset({name,trigger,addClass})
  -
    name = repeatsIgnoreSystemPrefix || !getSystemPrefix() ?
      name :
      \`\${getSystemPrefix()} \${name}\`;
  - name = name.replace(/\\s+/g,'-');
  - let section = \`repeating_\${name}\`;
  - k.repeatingPrefix = \`\${section}_$X_\`;
  - createFieldsetObj(section)
  if trigger
    - storeTrigger({name:section,type:'fieldset',trigger})
  if addClass
    span(hidden="" class=addClass)
  fieldset(class=\`\${section}\`)
    block
  - k.repeatingPrefix = '';`,output:`<!--A basic fieldset declaration with a trigger-->
<fieldset class="repeating_fieldset">
  <input name="attr_name" type="text" title="@{repeating_fieldset_$X_name}"/>
</fieldset>
<!--A Fieldset with an added class-->
<span class="some-class" hidden=""></span>
<fieldset class="repeating_fieldset">
  <input name="attr_name" type="text" title="@{repeating_fieldset_$X_name}"/>
</fieldset>`},{meta:{name:"inlineFieldset",description:"An alias for {@link fieldset} that creates a fieldset with an added class that can be easily hooked into via CSS to style the fieldset for inline display.",arguments:[{name:"name",description:"The name of the repeating section. Will be prefixed with `repeating_` and spaces will be replaced with dashes (`-`).",type:"string",default:null,nullable:!1,optional:!1,original:"{string} name - The name of the repeating section. Will be prefixed with `repeating_` and spaces will be replaced with dashes (`-`)."},{name:"trigger",description:"Trigger that defines how to handle the removal of a row from the fieldset. `Optional`",type:"object",default:null,nullable:!1,optional:!0,original:"{object} [trigger] - Trigger that defines how to handle the removal of a row from the fieldset. `Optional`"},{name:"addClass",description:"Any additional classes that should be used for the repeating section. Note that these are not added to the fieldset itself as adding additional classes to the fieldset itself interferes with calling action buttons from chat, but are added to a span that precedes the fieldset. This allows styling of the repcontainer via a css declaration like `.bonus-class + fieldset + .repcontainer`.",type:"string",default:null,nullable:!1,optional:!1,original:"{string} addClass - Any additional classes that should be used for the repeating section. Note that these are not added to the fieldset itself as adding additional classes to the fieldset itself interferes with calling action buttons from chat, but are added to a span that precedes the fieldset. This allows styling of the repcontainer via a css declaration like `.bonus-class + fieldset + .repcontainer`."}],attributes:null,example:`include ../_k.pug
+inlineFieldset({
  name:'fieldset',
  trigger:{triggeredFuncs:['doWhenRemoved']},
  addClass:'some-class'
})
`},file:"lib/fieldsets/_fieldsets.pug",source:`mixin inlineFieldset({name,trigger,addClass})
  - addClass = addClass ? \`\${addClass} inline-fieldset\` : 'inline-fieldset';
  - varObjects.inlineFieldsets = varObjects.inlineFieldsets || [];
  - varObjects.inlineFieldsets.push(name);
  
  +action({name:\`add \${name}\`,class:'repcontrol-button repcontrol-button--add repcontrol-button--inline',trigger:{listenerFunc:'sectionInteract'}})
  +fieldset({name,trigger,addClass})
    +radio({name:'display state',class:'display-control',value:'short-display',hidden:''})
    .inline-fieldset__summary.display-target
      label.pointer
        +checkbox({name:'collapse',value:1,hidden:'',trigger:{triggeredFuncs:['collapseSection']}})
        +span({name:'name',class:'inline-fieldset__summary__text'})
    +radio({name:'display state',class:'display-control',value:'display',checked:'',hidden:''})
    .inline-fieldset__detail.display-target
      +collapse
      block`,output:`<button class="repcontrol-button repcontrol-button--add repcontrol-button--inline" name="act_add-fieldset" type="action" title="%{add-fieldset}"></button>
<span class="some-class inline-fieldset" hidden=""></span>
<fieldset class="repeating_fieldset">
  <input class="display-control" name="attr_display_state" value="short-display" hidden="" type="radio" title="@{repeating_fieldset_$X_display_state}"/>
  <div class="inline-fieldset__summary display-target">
    <label class="pointer">
      <input name="attr_collapse" value="1" hidden="" type="checkbox" title="@{repeating_fieldset_$X_collapse}"/>
      <span class="inline-fieldset__summary__text" name="attr_name" title="@{repeating_fieldset_$X_name}"></span>
    </label>
  </div>
  <input class="display-control" name="attr_display_state" value="display" checked="" hidden="" type="radio" title="@{repeating_fieldset_$X_display_state}"/>
  <div class="inline-fieldset__detail display-target">
    <input class="collapse" name="attr_collapse" value="1" type="checkbox" title="@{repeating_fieldset_$X_collapse}"/>
  </div>
</fieldset>`},{meta:{name:"button-label",description:"A mixin to create a combined button and input that are within the same container. Similar to {@link input-label}, but does not use a label.",arguments:[{name:"inputObj",description:"An object describing the input to be paired with the button. This is the same object that you would pass to {@link input}.",type:"object",default:null,nullable:!1,optional:!1,original:"{object} inputObj - An object describing the input to be paired with the button. This is the same object that you would pass to {@link input}."},{name:"buttonObj",description:"An object describing the button to be paired with the input. This is the same object that you would pass to {@link button}.",type:"object",default:null,nullable:!1,optional:!1,original:"{object} buttonObj - An object describing the button to be paired with the input. This is the same object that you would pass to {@link button}."},{name:"divObj",description:"An object describing the container div. Similar to the first two objects, but will most likely only have a `class` property if it is passed at all.",type:"object",default:null,nullable:!1,optional:!1,original:"{object} divObj - An object describing the container div. Similar to the first two objects, but will most likely only have a `class` property if it is passed at all."}],attributes:null,example:`include ../_k.pug
+button-label({
  inputObj:{name:'strength',type:'number',class:'underlined',value:10,trigger:{affects:['athletics']}},
  buttonObj:{name:'strength_roll',type:'roll',value:'/r 1d20+@{strength}'},
  divObj:{class:'strength'}
})
`},file:"lib/labels/_labels.pug",source:`mixin button-label({inputObj,buttonObj,divObj})
  if divObj
    - divObj.class = divObj.class ? replaceProblems(divObj.class) : undefined;
  - inputObj.class = inputObj.class ? replaceProblems(inputObj.class) : undefined;
  - buttonObj.class = buttonObj.class ? replaceProblems(buttonObj.class) : undefined;
  - inputObj.name = inputObj.name.replace(/\\s+/g,'_');
  - buttonObj.name = (buttonObj.name || inputObj.name).replace(/\\s+/g,'_');
  .input-label.input-label--button&attributes(divObj)
    - inputObj.class = inputObj.class ? \`\${inputObj.class} input-label__input\` : 'input-label__input';
    if spanObj
      - buttonObj.class = buttonObj.class ? \`\${buttonObj.class} input-label__text\` : 'input-label__text';
    +button(buttonObj)
    +input(inputObj)`,output:`<div class="input-label input-label--button strength">
  <button name="roll_strength_roll" type="roll" value="/r 1d20+@{strength}" title="%{strength_roll}"></button>
  <input class="underlined input-label__input" name="attr_strength" type="number" value="10" title="@{strength}"/>
</div>`},{meta:{name:"roller-label",description:"Similar to the construction created by {@link button-label}, except that it creates a {@link roller} construction instead of just a straight button.",arguments:[{name:"inputObj",description:"An object describing the input to be paired with the button. This is the same object that you would pass to {@link input}.",type:"object",default:null,nullable:!1,optional:!1,original:"{object} inputObj - An object describing the input to be paired with the button. This is the same object that you would pass to {@link input}."},{name:"buttonObj",description:"An object describing the button to be paired with the input. This is the same object that you would pass to {@link button}.",type:"object",default:null,nullable:!1,optional:!1,original:"{object} buttonObj - An object describing the button to be paired with the input. This is the same object that you would pass to {@link button}."},{name:"divObj",description:"An object describing the container div. Similar to the first two objects, but will most likely only have a `class` property if it is passed at all.",type:"object",default:null,nullable:!1,optional:!1,original:"{object} divObj - An object describing the container div. Similar to the first two objects, but will most likely only have a `class` property if it is passed at all."}],attributes:null,example:`include ../_k.pug
+roller-label({
  inputObj:{name:'strength',type:'number',class:'underlined',value:10,trigger:{affects:['athletics']}},
  buttonObj:{name:'strength_roll',type:'roll',value:'/r 1d20+@{strength}'},
  divObj:{class:'strength'}
})
`},file:"lib/labels/_labels.pug",source:`mixin roller-label({inputObj,buttonObj,divObj})
  +rollerExtras(buttonObj)
    +button-label({inputObj,buttonObj,divObj})`,output:`<div class="input-label input-label--button strength">
  <button class="roller" name="roll_strength_roll" type="roll" value="@{strength_action}" title="%{strength_roll}"></button>
  <input class="underlined input-label__input" name="attr_strength" type="number" value="10" title="@{strength}"/>
</div>
<button name="act_strength-action" hidden="" type="action" title="%{strength-action}"></button>
<input name="attr_strength_action" type="hidden" title="@{strength_action}"/>`},{meta:{name:"action-label",description:"Similar to the construction created by {@link button-label}, except that it specifcally creates an [action button](https://wiki.roll20.net/Button#Action_Button) as per {@link action}.",arguments:[{name:"inputObj",description:"An object describing the input to be paired with the button. This is the same object that you would pass to {@link input}.",type:"object",default:null,nullable:!1,optional:!1,original:"{object} inputObj - An object describing the input to be paired with the button. This is the same object that you would pass to {@link input}."},{name:"buttonObj",description:"An object describing the button to be paired with the input. This is the same object that you would pass to {@link button}.",type:"object",default:null,nullable:!1,optional:!1,original:"{object} buttonObj - An object describing the button to be paired with the input. This is the same object that you would pass to {@link button}."},{name:"divObj",description:"An object describing the container div. Similar to the first two objects, but will most likely only have a `class` property if it is passed at all.",type:"object",default:null,nullable:!1,optional:!1,original:"{object} divObj - An object describing the container div. Similar to the first two objects, but will most likely only have a `class` property if it is passed at all."}],attributes:null,example:`include ../_k.pug
+roller-label({
  inputObj:{name:'strength',type:'number',class:'underlined',value:10,trigger:{affects:['athletics']}},
  buttonObj:{name:'strength_roll',type:'roll',value:'/r 1d20+@{strength}'},
  divObj:{class:'strength'}
})
`},file:"lib/labels/_labels.pug",source:`mixin action-label({inputObj,buttonObj,divObj})
  - buttonObj.type = 'action';
  +button-label({inputObj,buttonObj,divObj})`,output:`<div class="input-label input-label--button strength">
  <button class="roller" name="roll_strength_roll" type="roll" value="@{strength_action}" title="%{strength_roll}"></button>
  <input class="underlined input-label__input" name="attr_strength" type="number" value="10" title="@{strength}"/>
</div>
<button name="act_strength-action" hidden="" type="action" title="%{strength-action}"></button>
<input name="attr_strength_action" type="hidden" title="@{strength_action}"/>`},{meta:{name:"select-label",description:"Similar to the construction created by {@link input-label}, except that the input is replaced with a select.",arguments:[{name:"label",description:"The translation key to use for the span. If not passed, then the spanObj must be passed with a translation key",type:"string",default:null,nullable:!1,optional:!1,original:"{string} label - The translation key to use for the span. If not passed, then the spanObj must be passed with a translation key"},{name:"inputObj",description:"An object describing the select to be paired with the button. This is the same object that you would pass to {@link select}.",type:"object",default:null,nullable:!1,optional:!1,original:"{object} inputObj - An object describing the select to be paired with the button. This is the same object that you would pass to {@link select}."},{name:"divObj",description:"An object describing the container label. Similar to the inputObj, but will most likely only have a `class` property if it is passed at all.",type:"object",default:null,nullable:!1,optional:!0,original:"{object} [divObj] - An object describing the container label. Similar to the inputObj, but will most likely only have a `class` property if it is passed at all."},{name:"spanObj",description:"An object describing the span to be paired with the input. This is the same object that you would pass to {@link span}.",type:"object",default:null,nullable:!1,optional:!0,original:"{object} [spanObj] - An object describing the span to be paired with the input. This is the same object that you would pass to {@link span}."},{name:"block",description:"The mixin uses the pug block as the content of the select.",type:"block",default:null,nullable:!1,optional:!1,original:"{block} block - The mixin uses the pug block as the content of the select."}],attributes:null,example:`include ../_k.pug
+select-label({
  label:'Whisper to GM',
  inputObj:{name:'whisper'},
  divObj:{class:'div-class'},
  spanObj:{class:'span-class'}
})
  +option({value:'','data-i18n':'never',selected:''})
  +option({value:'/w gm ','data-i18n':'always'})
`},file:"lib/labels/_labels.pug",source:`mixin select-label({label,inputObj,divObj,spanObj})
  if divObj
    - divObj.class = divObj.class ? replaceProblems(divObj.class) : undefined;
  if inputObj
    - inputObj.class = inputObj.class ? replaceProblems(inputObj.class) : undefined;
  if spanObj
    - spanObj.class = spanObj.class ? replaceProblems(spanObj.class) : undefined;
  label.input-label&attributes(divObj)
    - inputObj.name = inputObj.name.replace(/\\s+/g,'_');
    - inputObj.class = inputObj.class ? \`\${inputObj.class} input-label__input\` : 'input-label__input';
    if spanObj
      - spanObj.class = spanObj.class ? \`\${spanObj.class} input-label__text\` : 'input-label__text';
    span(data-i18n=label)&attributes(spanObj)
    +select(inputObj)
      block`,output:`<label class="input-label div-class">
  <span class="span-class input-label__text" data-i18n="Whisper to GM"></span>
  <select class="input-label__input" name="attr_whisper" title="@{whisper}">
    <option value="" data-i18n="never" selected=""></option>
    <option value="/w gm " data-i18n="always"></option>
  </select>
</label>`},{meta:{name:"input-label",description:null,arguments:[{name:"label",description:"The translation key to use for the span. If not passed, then the spanObj must be passed with a translation key",type:"string",default:null,nullable:!1,optional:!1,original:"{string} label - The translation key to use for the span. If not passed, then the spanObj must be passed with a translation key"},{name:"inputObj",description:"An object describing the input to be paired with the button. This is the same object that you would pass to {@link input}.",type:"object",default:null,nullable:!1,optional:!1,original:"{object} inputObj - An object describing the input to be paired with the button. This is the same object that you would pass to {@link input}."},{name:"divObj",description:"An object describing the container label. Similar to the inputObj, but will most likely only have a `class` property if it is passed at all.",type:"object",default:null,nullable:!1,optional:!0,original:"{object} [divObj] - An object describing the container label. Similar to the inputObj, but will most likely only have a `class` property if it is passed at all."},{name:"spanObj",description:"An object describing the span to be paired with the input. This is the same object that you would pass to {@link span}.",type:"object",default:null,nullable:!1,optional:!0,original:"{object} [spanObj] - An object describing the span to be paired with the input. This is the same object that you would pass to {@link span}."}],attributes:null,example:`include ../_k.pug
+input-label({
  label:'strength',
  inputObj:{name:'strength',type:'number'},
  divObj:{class:'div-class'},
  spanObj:{class:'span-class'}
})
`},file:"lib/labels/_labels.pug",source:`mixin input-label({label,inputObj,divObj,spanObj})
  if divObj
    - divObj.class = divObj.class ? replaceProblems(divObj.class) : undefined;
  if inputObj
    - inputObj.class = inputObj.class ? replaceProblems(inputObj.class) : undefined;
  if spanObj
    - spanObj.class = spanObj.class ? replaceProblems(spanObj.class) : undefined;
  label.input-label&attributes(divObj)
    - inputObj.name = inputObj.name.replace(/\\s+/g,'_');
    - inputObj.class = inputObj.class ? \`\${inputObj.class} input-label__input\` : 'input-label__input';
    if spanObj
      - spanObj.class = spanObj.class ? \`\${spanObj.class} input-label__text\` : 'input-label__text';
    span(data-i18n=label)&attributes(spanObj)
    +input(inputObj)`,output:`<label class="input-label div-class">
  <span class="span-class input-label__text" data-i18n="strength"></span>
  <input class="input-label__input" name="attr_strength" type="number" title="@{strength}"/>
</label>`},{meta:{name:"headedTextarea",description:"Creates a construction for pairing a header with a textarea. Currently is locked to creating an `h3`.  This mixin also accepts classes and IDs appended directly to it (see the second example)",arguments:[{name:"textObj",description:"The object describing the textarea as per {@link textarea}",type:"object",default:null,nullable:!1,optional:!1,original:"{object} textObj - The object describing the textarea as per {@link textarea}"},{name:"header",description:"The `data-i18n` translation key to use for the header",type:"string",default:null,nullable:!1,optional:!1,original:"{string} header - The `data-i18n` translation key to use for the header"}],attributes:null,example:`include ../_k.pug
+headedTextarea({textObj:{name:'character description','data-i18n-placeholder':'The description of your character'},header:'description'})
//With class appended to the mixin itself
+headedTextarea({textObj:{name:'character description','data-i18n-placeholder':'The description of your character'},header:'description'}).character-description
`},file:"lib/labels/_labels.pug",source:`mixin headedTextarea({textObj,header})
  .headed-textarea&attributes(attributes)
    - textObj.class = textObj.class ? \`\${textObj.class} headed-textarea__textarea\` : 'headed-textarea__textarea';
    h3(data-i18n=header class='headed-textarea__header')
    +textarea(textObj)`,output:`<div class="headed-textarea">
  <h3 class="headed-textarea__header" data-i18n="description"></h3>
    <textarea class="headed-textarea__textarea" name="attr_character_description" data-i18n-placeholder="The description of your character" title="@{character_description}"></textarea>
  </div>
  <!--With class appended to the mixin itself-->
  <div class="headed-textarea character-description">
    <h3 class="headed-textarea__header" data-i18n="description"></h3>
      <textarea class="headed-textarea__textarea" name="attr_character_description" data-i18n-placeholder="The description of your character" title="@{character_description}"></textarea>
    </div>`},{meta:{name:"script",description:"Creates a generic [Roll20 script block](https://wiki.roll20.net/Building_Character_Sheets#JavaScript_2) for use with the sheetworker system.",arguments:null,attributes:null,example:`include ../_k.pug
+script
`},file:"lib/scripts/_scripts.pug",source:`mixin script
  script(type='text/worker')
    block`,output:'<script type="text/worker"><\/script>'},{meta:{name:"kscript",description:"Similar to {@link script}, but includes the K-scaffold\\'s javascript function library.",arguments:null,attributes:null,example:`include ../_k.pug
+kscript
`},file:"lib/scripts/_scripts.pug",source:`mixin kscript
  - scriptUsed = true;
  +script
    |const k = (function(){
    |const kFuncs = {};
    //- The below declarations import variables from the pug file and mixins into the sheetworker code
    - const propArray = ['cascades','repeatingSectionDetails','persistentTabs'];
    each prop in propArray
      |
      |const !{prop} = !{JSON.stringify(varObjects[prop])};
      |
      |kFuncs.!{prop} = !{prop};
      - delete varObjects[prop];
    |
    |
    include kvariables.js
    include utility.js
    include attribute_proxy.js
    include accessSheet.js
    include parse_cascade.js
    include sheetworker_aliases.js
    include listeners.js
    include ../tabs/tabs.js
    |
    |return kFuncs;
    |}());
    |
    each content,prop in varObjects
      |
      if typeof content === 'object'
        |const !{prop} = !{JSON.stringify(content)};
      else
        |let !{prop} = !{content};
      |
    |
    block
    each jsBlock in k.scriptBlocks
      |
      |
      - jsBlock();`,output:`<script type="text/worker">
  const k = (function(){
const kFuncs = {};
const cascades = {"attr_character_name":{"name":"character_name","type":"text","defaultValue":"","affects":[],"triggeredFuncs":["setActionCalls"],"listenerFunc":"accessSheet","listener":"change:character_name"},"attr_character_description":{"name":"character_description","type":"span","defaultValue":"","triggeredFuncs":[],"affects":[]},"attr_my_image":{"name":"my_image","defaultValue":"","triggeredFuncs":[],"affects":[]},"attr_attribute_backed_span":{"calculation":"calculateAttribute","name":"attribute_backed_span","type":"span","defaultValue":"","triggeredFuncs":[],"affects":[]},"act_my_button":{"triggeredFuncs":["doSomethingOnClick"],"name":"my_button","listener":"clicked:my_button","listenerFunc":"accessSheet","type":"action"},"act_my-button":{"triggeredFuncs":["doSomethingOnClick"],"name":"my-button","listener":"clicked:my-button","listenerFunc":"accessSheet","type":"action"},"act_my-button-action":{"triggeredFuncs":["doSomethingOnClick"],"name":"my-button-action","listener":"clicked:my-button-action","listenerFunc":"accessSheet","type":"action"},"attr_my_button_action":{"name":"my_button_action","type":"hidden","defaultValue":"","triggeredFuncs":[],"affects":[]},"attr_drop_name":{"triggeredFuncs":["handleCompendiumDrop"],"name":"drop_name","listener":"change:drop_name","listenerFunc":"accessSheet","type":"hidden","defaultValue":"","affects":[]},"attr_drop_data":{"name":"drop_data","type":"hidden","defaultValue":"","triggeredFuncs":[],"affects":[]},"attr_prefix_drop_name":{"triggeredFuncs":["handleCompendiumDrop"],"name":"prefix_drop_name","listener":"change:prefix_drop_name","listenerFunc":"accessSheet","type":"hidden","defaultValue":"","affects":[]},"attr_prefix_drop_data":{"name":"prefix_drop_data","type":"hidden","defaultValue":"","triggeredFuncs":[],"affects":[]},"attr_prefix_drop_category":{"name":"prefix_drop_category","type":"hidden","defaultValue":"","triggeredFuncs":[],"affects":[]},"attr_my_radio":{"name":"my_radio","type":"hidden","defaultValue":0,"triggeredFuncs":[],"affects":[]},"attr_my_attribute":{"affects":["other_attribute"],"name":"my_attribute","listener":"change:my_attribute","listenerFunc":"accessSheet","type":"text","defaultValue":"","triggeredFuncs":[]},"attr_my_checkbox":{"name":"my_checkbox","type":"checkbox","defaultValue":0,"triggeredFuncs":[],"affects":[]},"attr_collapse":{"name":"collapse","type":"checkbox","defaultValue":0,"triggeredFuncs":[],"affects":[]},"attr_my_number":{"affects":["other_attribute"],"name":"my_number","listener":"change:my_number","listenerFunc":"accessSheet","type":"number","defaultValue":0,"triggeredFuncs":[]},"attr_my_range":{"name":"my_range","type":"range","defaultValue":"","triggeredFuncs":[],"affects":[]},"attr_my_hidden_attribute":{"triggeredFuncs":["someFunction"],"name":"my_hidden_attribute","listener":"change:my_hidden_attribute","listenerFunc":"accessSheet","type":"hidden","defaultValue":"","affects":[]},"attr_my_textarea":{"affects":["an_attribute"],"name":"my_textarea","listener":"change:my_textarea","listenerFunc":"accessSheet","defaultValue":"","triggeredFuncs":[]},"attr_my_select":{"name":"my_select","type":"select","defaultValue":"","triggeredFuncs":[],"affects":["some_attribute"],"listener":"change:my_select","listenerFunc":"accessSheet"},"fieldset_repeating_fieldset":{"triggeredFuncs":["doWhenRemoved"],"name":"repeating_fieldset","listener":"remove:repeating_fieldset","listenerFunc":"accessSheet","type":"fieldset"},"attr_repeating_fieldset_$X_name":{"name":"repeating_fieldset_$X_name","type":"text","defaultValue":"","triggeredFuncs":[],"affects":[]},"act_add-undefined":{"listenerFunc":"addItem","name":"add-undefined","listener":"clicked:add-undefined","type":"action"},"act_add-fieldset":{"listenerFunc":"sectionInteract","name":"add-fieldset","listener":"clicked:add-fieldset","type":"action"},"attr_repeating_fieldset_$X_display_state":{"name":"repeating_fieldset_$X_display_state","type":"radio","defaultValue":"short-display","triggeredFuncs":[],"affects":[]},"attr_repeating_fieldset_$X_collapse":{"triggeredFuncs":["collapseSection"],"name":"repeating_fieldset_$X_collapse","listener":"change:repeating_fieldset:collapse","listenerFunc":"accessSheet","type":"checkbox","defaultValue":0,"affects":[]},"attr_strength":{"affects":["athletics"],"name":"strength","listener":"change:strength","listenerFunc":"accessSheet","type":"number","defaultValue":10,"triggeredFuncs":[]},"act_strength-action":{"listenerFunc":"initiateRoll","name":"strength-action","listener":"clicked:strength-action","type":"action"},"attr_strength_action":{"name":"strength_action","type":"hidden","defaultValue":"","triggeredFuncs":[],"affects":[]},"attr_whisper":{"name":"whisper","type":"select","defaultValue":"","triggeredFuncs":[],"affects":[]}};

kFuncs.cascades = cascades;
const repeatingSectionDetails = [{"section":"repeating_fieldset","fields":["name","display_state","collapse"]}];

kFuncs.repeatingSectionDetails = repeatingSectionDetails;
const persistentTabs = [];

kFuncs.persistentTabs = persistentTabs;
/**
 * The K-scaffold provides several variables to allow your scripts to tap into its information flow.
 * @namespace Sheetworkers.Variables
 */
/**
 * This stores the name of your sheet for use in the logging functions {@link log} and {@link debug}. Accessible by \`k.sheetName\`
 * @memberof Variables
 * @var
 * @type {string}
 */
let sheetName = 'kScaffold Powered Sheet';
kFuncs.sheetName = sheetName;
/**
	* This stores the version of your sheet for use in the logging functions{@link log} and {@link debug}. It is also stored in the sheet_version attribute on your character sheet. Accessible via \`k.version\`
 * @memberof Variables
	* @var
	* @type {number}
	*/
let version = 0;
kFuncs.version = version;
/**
	* A boolean flag that tells the script whether to enable or disable {@link debug} calls. If the version of the sheet is \`0\`, or an attribute named \`debug_mode\` is found on opening this is set to true for your entire session. Otherwise, it remains false.
 * @memberof Variables
	* @var
	* @type {boolean}
	*/
let debugMode = false;
kFuncs.debugMode = debugMode;
const funcs = {};
kFuncs.funcs = funcs;
const updateHandlers = {};
const openHandlers = {};
const initialSetups = {};
const allHandlers = {};
const addFuncs = {};

const kscaffoldJSVersion = '1.0.0';
const kscaffoldPUGVersion = '1.0.0';
/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/
/*jshint -W014,-W084,-W030,-W033*/
/**
 * These are utility functions that are not directly related to Roll20 systems. They provide easy methods for everything from processing text and numbers to querying the user for input.
 * @namespace Sheetworkers.Utilities
 * @alias Utilities
 */
/**
 * Replaces problem characters to use a string as a regex
 * @memberof Utilities
 * @param {string} text - The text to replace characters in
 * @returns {string}
 * @example
 * const textForRegex = k.sanitizeForRegex('.some thing[with characters]');
 * console.log(textForRegex);// =>
     "\\.some thing\\[with characters\\]"
 */
const sanitizeForRegex = function(text){
  return text.replace(/\\.|\\||\\(|\\)|\\[|\\]|\\-|\\+|\\?|\\/|\\{|\\}|\\^|\\$|\\*/g,'\\\\$&');
};
kFuncs.sanitizeForRegex = sanitizeForRegex;

/**
 * Converts a value to a number, it\\'s default value, or \`0\` if no default value passed.
 * @memberof Utilities
 * @param {string|number} val - Value to convert to a number
 * @param {number} def - The default value, uses 0 if not passed
 * @returns {number|undefined}
 * @example
 * const num = k.value('100');
 * console.log(num);// =>
       100
 */
const value = function(val,def){
  const convertVal = +val;
  if(def !== undefined && isNaN(def)){
    throw(\`K-scaffold Error: invalid default for value(). Default: \${def}\`);
  }
  return convertVal === 0 ?
    convertVal :
    (+val||def||0);
};
kFuncs.value = value;

/**
 * Extracts the section (e.g. \`repeating_equipment\`), rowID (e.g \`-;lkj098J:LKj\`), and field name (e.g. \`bulk\`) from a repeating attribute name.
 * @memberof Utilities
 * @param {string} string - The string to parse
 * @returns {array} - Array of matches. Index 0: the section name, e.g. repeating_equipment | Index 1:the row ID | index 2: The name of the attribute
 * @returns {string[]}
 * @example
 * //Extract info from a full repeating name
 * const [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23_name');
 * console.log(section);// =>
         "repeating_equipment"
 * console.log(rowID);// =>
           "-8908asdflkjZlkj23"
 * console.log(attrName);// =>
             "name"
 * 
 * //Extract info from just a row name
 * const [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23');
 * console.log(section);// =>
               "repeating_equipment"
 * console.log(rowID);// =>
                 "-8908asdflkjZlkj23"
 * console.log(attrName);// =>
                   undefined
 */
const parseRepeatName = function(string){
  let match = string.match(/(repeating_[^_]+)_([^_]+)(?:_(.+))?/);
  match.shift();
  return match;
};
kFuncs.parseRepeatName = parseRepeatName;

/**
 * Parses out the components of a trigger name similar to [parseRepeatName](#parserepeatname). Aliases: parseClickTrigger.
 * 
 * Aliases: \`k.parseClickTrigger\`
 * @memberof Utilities
 * @param {string} string The triggerName property of the
 * @returns {array} - For a repeating button named \`repeating_equipment_-LKJhpoi98;lj_roll\`, the array will be \`['repeating_equipment','-LKJhpoi98;lj','roll']\`. For a non repeating button named \`roll\`, the array will be \`[undefined,undefined,'roll']\`
 * @returns {string[]}
 * @example
 * //Parse a non repeating trigger
 * const [section,rowID,attrName] = k.parseTriggerName('clicked:some-button');
 * console.log(section);// =>
                     undefined
 * console.log(rowID);// =>
                       undefined
 * console.log(attrName);// =>
                         "some-button"
 * 
 * //Parse a repeating trigger
 * const [section,rowID,attrName] = k.parseTriggerName('clicked:repeating_attack_-234lkjpd8fu8usadf_some-button');
 * console.log(section);// =>
                           "repeating_attack"
 * console.log(rowID);// =>
                             "-234lkjpd8fu8usadf"
 * console.log(attrName);// =>
                               "some-button"
 * 
 * //Parse a repeating name
 * const [section,rowID,attrName] = k.parseTriggerName('repeating_attack_-234lkjpd8fu8usadf_some-button');
 * console.log(section);// =>
                                 "repeating_attack"
 * console.log(rowID);// =>
                                   "-234lkjpd8fu8usadf"
 * console.log(attrName);// =>
                                     "some-button"
 */
const parseTriggerName = function(string){
  let match = string.replace(/^clicked:/,'').match(/(?:(repeating_[^_]+)_([^_]+)_)?(.+)/);
  match.shift();
  return match;
};
kFuncs.parseTriggerName = parseTriggerName;
const parseClickTrigger = parseTriggerName;
kFuncs.parseClickTrigger = parseClickTrigger;

/**
 * Parses out the attribute name from the htmlattribute name.
 * @memberof Utilities
 * @param {string} string - The triggerName property of the [event](https://wiki.roll20.net/Sheet_Worker_Scripts#eventInfo_Object).
 * @returns {string}
 * @example
 * //Parse a name
 * const attrName = k.parseHtmlName('attr_attribute_1');
 * console.log(attrName);// =>
                                       "attribute_1"
 */
const parseHTMLName = function(string){
  let match = string.match(/(?:attr|act|roll)_(.+)/);
  match.shift();
  return match[0];
};
kFuncs.parseHTMLName = parseHTMLName;

/**
 * Capitalize each word in a string
 * @memberof Utilities
 * @param {string} string - The string to capitalize
 * @returns {string}
 * @example
 * const capitalized = k.capitalize('a word');
 * console.log(capitalized);// =>
                                         "A Word"
 */
const capitalize = function(string){
  return string.replace(/(?:^|\\s+|\\/)[a-z]/ig,(letter)=>
                                          letter.toUpperCase());
};
kFuncs.capitalize = capitalize;

/**
 * Extracts a roll query result for use in later functions. Must be awaited as per [startRoll documentation](https://wiki.roll20.net/Sheet_Worker_Scripts#Roll_Parsing.28NEW.29). Stolen from [Oosh\\'s Adventures with Startroll thread](https://app.roll20.net/forum/post/10346883/adventures-with-startroll).
 * @memberof Utilities
 * @param {string} query - The query should be just the text as the \`?{\` and \`}\` at the start/end of the query are added by the function.
 * @returns {Promise} - Resolves to the selected value from the roll query
 * @example
 * const rollFunction = async function(){
 *  //Get the result of a choose from list query
 *  const queryResult = await extractQueryResult('Prompt Text Here|Option 1|Option 2');
 *  console.log(queryResult);//=>
                                             "Option 1" or "Option 2" depending on what the user selects
 * 
 *  //Get free form input from the user
 *  const freeResult = await extractQueryResult('Prompt Text Here');
 *  consoel.log(freeResult);// =>
                                               Whatever the user entered
 * }
 */
const extractQueryResult = async function(query){
	debug('entering extractQueryResult');
	let queryRoll = await startRoll(\`!{{query=[[0[response=?{\${query}}]]]}}\`);
	finishRoll(queryRoll.rollId);
	return queryRoll.results.query.expression.replace(/^.+?response=|\\]$/g,'');
};
kFuncs.extractQueryResult = extractQueryResult;

/**
 * Simulates a query for ensuring that async/await works correctly in the sheetworker environment when doing conditional startRolls. E.g. if you have an if/else and only one of the conditions results in \`startRoll\` being called (and thus an \`await\`), the sheetworker environment would normally crash. Awaiting this in the condition that does not actually need to call \`startRoll\` will keep the environment in sync.
 * @memberof Utilities
 * @param {string|number} [value] - The value to return. Optional.
 * @returns {Promise} - Resolves to the value passed to the function
 * @example
 * const rollFunction = async function(){
 *  //Get the result of a choose from list query
 *  const queryResult = await pseudoQuery('a value');
 *  console.log(queryResult);//=>
                                                 "a value"
 * }
 */
const pseudoQuery = async function(value){
	debug('entering pseudoQuery');
	let queryRoll = await startRoll(\`!{{query=[[0[response=\${value}]]]}}\`);
	finishRoll(queryRoll.rollId);
	return queryRoll.results.query.expression.replace(/^.+?response=|\\]$/g,'');
};
kFuncs.pseudoQuery = pseudoQuery;

/**
 * An alias for console.log.
 * @memberof Utilities
 * @param {any} msg - The message can be a straight string, an object, or an array. If it is an object or array, the object will be broken down so that each key is used as a label to output followed by the value of that key. If the value of the key is an object or array, it will be output via \`console.table\`.
 */
const log = function(msg){
  if(typeof msg === 'string'){
    console.log(\`%c\${kFuncs.sheetName} log| \${msg}\`,"background-color:#159ccf");
  }else if(typeof msg === 'object'){
    Object.keys(msg).forEach((m)=>
                                                  {
      if(typeof msg[m] === 'string'){
        console.log(\`%c\${kFuncs.sheetName} log| \${m}: \${msg[m]}\`,"background-color:#159ccf");
      }else{
        console.log(\`%c\${kFuncs.sheetName} log| \${typeof msg[m]} \${m}\`,"background-color:#159ccf");
        console.table(msg[m]);
      }
    });
  }
};
kFuncs.log = log;

/**
 * Alias for console.log that only triggers when debug mode is enabled or when the sheet\\'s version is \`0\`. Useful for entering test logs that will not pollute the console on the live sheet.
 * @memberof Utilities
 * @param {any} msg - 'See {@link k.log}
 * @param {boolean} force - Pass as a truthy value to force the debug output to be output to the console regardless of debug mode.
 * @returns {void}
 */
const debug = function(msg,force){
  console.warn('kFuncs.version',kFuncs.version);
  if(!kFuncs.debugMode && !force && kFuncs.version >
                                                     0) return;
  if(typeof msg === 'string'){
    console.log(\`%c\${kFuncs.sheetName} DEBUG| \${msg}\`,"background-color:tan;color:red;");
  }else if(typeof msg === 'object'){
    Object.keys(msg).forEach((m)=>
                                                      {
      if(typeof msg[m] === 'string'){
        console.log(\`%c\${kFuncs.sheetName} DEBUG| \${m}: \${msg[m]}\`,"background-color:tan;color:red;");
      }else{
        console.log(\`%c\${kFuncs.sheetName} DEBUG| \${typeof msg[m]} \${m}\`,"background-color:tan;color:red;font-weight:bold;");
        console.table(msg[m]);
      }
    });
  }
};
kFuncs.debug = debug;

/**
 * Orders the section id arrays for all sections in the \`sections\` object to match the repOrder attribute.
 * @memberof Utilities
 * @param {attributesProxy} attributes - The attributes object that must have a value for the reporder for each section.
 * @param {object[]} sections - Object containing the IDs for the repeating sections, indexed by repeating section name.
 */
const orderSections = function(attributes,sections){
  Object.keys(sections).forEach((section)=>
                                                        {
    attributes.attributes[\`_reporder_\${section}\`] = commaArray(attributes[\`_reporder_\${section}\`]);
    orderSection(attributes.attributes[\`_reporder_\${section}\`],sections[section]);
  });
};
kFuncs.orderSections = orderSections;

/**
 * Orders a single ID array.
 * @memberof Utilities
 * @param {string[]} repOrder - Array of IDs in the order they are in on the sheet.
 * @param {string[]} IDs - Array of IDs to be ordered.
 */
const orderSection = function(repOrder,IDs=[]){
  IDs.sort((a,b)=>
                                                          {
    return repOrder.indexOf(a.toLowerCase()) - repOrder.indexOf(b.toLowerCase());
  });
};
kFuncs.orderSection = orderSection;

/**
 * Splits a comma delimited string into an array
 * @memberof Utilities
 * @param {string} string - The string to split.
 * @returns {array} - The string segments of the comma delimited list.
 */
const commaArray = function(string=''){
  return string.toLowerCase().split(/\\s*,\\s*/);
};
kFuncs.commaArray = commaArray;

// Roll escape functions for passing data in action button calls. Base64 encodes/decodes the data.
const RE = {
  chars: {
      '"': '%quot;',
      ',': '%comma;',
      ':': '%colon;',
      '}': '%rcub;',
      '{': '%lcub;',
  },
  escape(data) {
    return typeof data === 'object' ?
      \`KDATA\${btoa(JSON.stringify(data))}\` :
      \`KSTRING\${btoa(data)}\`;
  },
  unescape(string) {
    const isData = typeof string === 'string' &&
      (
        string.startsWith('KDATA') ||
        string.startsWith('KSTRING')
      );
    return isData ?
      (
        string.startsWith('KDATA') ?
          JSON.parse(atob(string.replace(/^KDATA/,''))) :
          atob(string.replace(/^KSTRING/,''))
      ) :
      string;
  }
};

/**
 * Encodes data in Base64. This is useful for passing roll information to action buttons called from roll buttons.
 * @function
 * @param {string|object|any[]} data - The data that you want to Base64 encode
 * @returns {string} - The encoded data
 * @memberof! Utilities
 */
const escape = RE.escape;
/**
 * Decodes Base64 encoded strings that were created by the K-scaffold
 * @function
 * @param {string|object|any[]} string - The string of encoded data to decode. If this is not a string, or is not a string that was encoded by the K-scaffold, it will be returned as is.
 * @returns {string|object|any[]}
 * @memberof! Utilities
 */
const unescape = RE.unescape;

Object.assign(kFuncs,{escape,unescape});/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/
/*jshint -W014,-W084,-W030,-W033*/

//# Attribute Obj Proxy handler
const createAttrProxy = function(attrs){
  //creates a proxy for the attributes object so that values can be worked with more easily.
  const getCascObj = function(event,casc){
    const eventName = event.triggerName || event.sourceAttribute;
    let typePrefix = eventName.startsWith('clicked:') ?
      'act_' :
      event.removedInfo ?
      'fieldset_' :
      'attr_';
    let cascName = \`\${typePrefix}\${eventName.replace(/(?:removed|clicked):/,'')}\`;
    let cascObj = casc[cascName];
    k.debug({[cascName]:cascObj});
    if(event && cascObj){
      if(event.previousValue){
        cascObj.previousValue = event.previousValue;
      }else if(event.originalRollId){
        cascObj.originalRollId = event.originalRollId;
        cascObj.rollData = RE.unescape(event.originalRollId);
      }
    }
    return cascObj || {};
  };
  
  const triggerFunctions = function(obj,attributes,sections,casc){
    if(obj.triggeredFuncs && obj.triggeredFuncs.length){
      debug(\`triggering functions for \${obj.name}\`);
      obj.triggeredFuncs && obj.triggeredFuncs.forEach(func=>
                                                            funcs[func] ? 
        funcs[func]({trigger:obj,attributes,sections,casc}) :
        debug(\`!!!Warning!!! no function named \${func} found. Triggered function not called for \${obj.name}\`,true));
    }
  };
  
  const initialFunction = function(obj,attributes,sections){
    if(obj.initialFunc){
      debug(\`initial functions for \${obj.name}\`);
      funcs[obj.initialFunc] ?
        funcs[obj.initialFunc]({trigger:obj,attributes,sections}) :
        debug(\`!!!Warning!!! no function named \${obj.initialFunc} found. Initial function not called for \${obj.name}\`,true);
    }
  };
  const alwaysFunctions = function(trigger,attributes,sections,casc){
    Object.values(allHandlers).forEach((handler)=>
                                                              {
      handler({trigger,attributes,sections,casc});
    });
  };
  const processChange = function({event,trigger,attributes,sections,casc}){
    if(event && !trigger){
      debug(\`\${event.sourceAttribute} change detected. No trigger found\`);
      return;
    }
    if(!attributes || !sections || !casc){
      debug(\`!!! Insufficient arguments || attributes >
                                                                 \${!!attributes} | sections >
                                                                   \${!!sections} | casc >
                                                                     \${!!casc} !!!\`);
      return;
    }
    debug({trigger});
    if(event){
      debug('checking for initial & always functions');
      alwaysFunctions(trigger,attributes,sections,casc);//Functions that should be run for all events.
      initialFunction(trigger,attributes,sections,casc);//functions that should only be run if the attribute was the thing changed by the user
    }
    if(trigger){
      debug(\`processing \${trigger.name}\`);
      triggerFunctions(trigger,attributes,sections,casc);
      if(!event && trigger.calculation && funcs[trigger.calculation]){
        attributes[trigger.name] = funcs[trigger.calculation]({trigger,attributes,sections,casc});
      }else if(trigger.calculation && !funcs[trigger.calculation]){
        debug(\`K-Scaffold Error: No function named \${trigger.calculation} found\`);
      }
      if(Array.isArray(trigger.affects)){
        attributes.queue.push(...trigger.affects);
      }
    }
    attributes.set({attributes,sections,casc});
  };
  const attrTarget = {
    updates:{},
    attributes:{...attrs},
    repOrders:{},
    queue: [],
    casc:{},
    alwaysFunctions,
    processChange,
    triggerFunctions,
    initialFunction,
    getCascObj
  };
  const attrHandler = {
    get:function(obj,prop){//gets the most value of the attribute.
      //If it is a repeating order, returns the array, otherwise returns the update value or the original value
      if(prop === 'set'){
        return function(){
          let {attributes,sections,casc,callback,vocal} = arguments[0] ? arguments[0] : {};
          if(attributes && attributes.queue.length && sections && casc){
            let triggerName = attributes.queue.shift();
            let trigger = getCascObj({sourceAttribute:triggerName},casc);
            attributes.processChange({trigger,attributes,sections,casc});
          }else{
            debug({updates:obj.updates});
            let trueCallback = Object.keys(obj.repOrders).length ?
              function(){
                Object.entries(obj.repOrders).forEach(([section,order])=>
                                                                      {
                  _setSectionOrder(section,order,)
                });
                callback && callback();
              }:
              callback;
            Object.keys(obj.updates).forEach((key)=>
                                                                        obj.attributes[key] = obj.updates[key]);
            const update = obj.updates;
            obj.updates = {};
            set(update,vocal,trueCallback);
          }
        }
      }else if(Object.keys(obj).some(key=>
                                                                          key===prop)){ 
        return Reflect.get(...arguments)
      }else{
        let retValue;
        switch(true){
          case obj.repOrders.hasOwnProperty(prop):
            retValue = obj.repOrders[prop];
            break;
          case obj.updates.hasOwnProperty(prop):
            retValue = obj.updates[prop];
            break;
          default:
            retValue = obj.attributes[prop];
            break;
        }
        let cascRef = \`attr_\${prop.replace(/(repeating_[^_]+_)[^_]+/,'$1\\$X')}\`;
        let numRetVal = +retValue;
        if(!Number.isNaN(numRetVal) && retValue !== ''){
          retValue = numRetVal;
        }else if(cascades[cascRef] && (typeof cascades[cascRef].defaultValue === 'number' || cascades[cascRef].type === 'number')){
          retValue = cascades[cascRef].defaultValue;
        }
        return retValue;
      }
    },
    set:function(obj,prop,value){
      //Sets the value. Also verifies that the value is a valid attribute value
      //e.g. not undefined, null, or NaN
      if(value || value===0 || value===''){
        if(/reporder|^repeating_[^_]+$/.test(prop)){
          let section = prop.replace(/_reporder_/,'');
          obj.repOrders[section] = value;
        }else if(\`\${obj.attributes}\` !== \`\${value}\` || 
          (obj.updates[prop] && \`\${obj.updates}\` !== \`\${value}\`)
        ){
          obj.updates[prop] = value;
        }
      }else{
        debug(\`!!!Warning: Attempted to set \${prop} to an invalid value:\${value}; value not stored!!!\`);
      }
      return true;
    },
    deleteProperty(obj,prop){
      //removes the property from the original attributes, updates, and the reporders
      Object.keys(obj).forEach((key)=>
                                                                            {
        delete obj[key][prop.toLowerCase()];
      });
    }
  };
  return new Proxy(attrTarget,attrHandler);
};

/**
 * Function that registers a function for being called via the funcs object. Returns true if the function was successfully registered, and false if it could not be registered for any reason.
 * @memberof Utilities
 * @param {object} funcObj - Object with keys that are names to register functions under and values that are functions.
 * @param {object} optionsObj - Object that contains options to use for this registration.
 * @param {string[]} optionsObj.type - Array that contains the types of specialized functions that apply to the functions being registered. Valid types are \`"opener"\`, \`"updater"\`, and \`"default"\`. \`"default"\` is always used, and never needs to be passed.
 * @returns {boolean} - True if the registration succeeded, false if it failed.
 * @example
 * //Basic Registration
 * const myFunc = function({trigger,attributes,sections,casc}){};
 * k.registerFuncs({myFunc});
 * 
 * //Register a function to run on sheet open
 * const openFunc = function({trigger,attributes,sections,casc}){};
 * k.registerFuncs({openFunc},{type:['opener']})
 * 
 * //Register a function to run on all events
 * const allFunc = function({trigger,attributes,sections,casc}){};
 * k.registerFuncs({allFunc},{type:['all']})
 */
const registerFuncs = function(funcObj,optionsObj = {}){
  if(typeof funcObj !== 'object' || typeof optionsObj !== 'object'){
    debug(\`!!!! K-scaffold error: Improper arguments to register functions !!!!\`);
    return false;
  }
  const typeArr = optionsObj.type ? ['default',...optionsObj.type] : ['default'];
  const typeSwitch = {
    'opener':openHandlers,
    'updater':updateHandlers,
    'new':initialSetups,
    'all':allHandlers,
    'default':funcs
  };
  let setState;
  Object.entries(funcObj).map(([prop,value])=>
                                                                              {
    typeArr.forEach((type)=>
                                                                                {
      if(typeSwitch[type][prop]){
        debug(\`!!! Duplicate function name for \${prop} as \${type}!!!\`);
        setState = false;
      }else if(typeof value === 'function'){
        typeSwitch[type][prop] = value;
        setState = setState !== false ? true : false;
      }else{
        debug(\`!!! K-scaffold error: Function registration requires a function. Invalid value to register as \${type} !!!\`);
        setState = false;
      }
    });
  });
  return setState;
};
kFuncs.registerFuncs = registerFuncs;

/**
 * Function that sets up the action calls used in the roller mixin.
 * @memberof Sheetworkers
 * @param {object} attributes - The attribute values of the character
 * @param {object[]} sections - All the repeating section IDs
 */
const setActionCalls = function({attributes,sections}){
  actionAttributes.forEach((base)=>
                                                                                  {
    let [section,,field] = k.parseTriggerName(base);
    let fieldAction = field.replace(/_/g,'-');
    if(section){
      sections[section].forEach((id)=>
                                                                                    {
        attributes[\`\${section}_\${id}_\${field}\`] = \`%{\${attributes.character_name}|\${section}_\${id}_\${fieldAction}}\`;
      });
    }else{
      attributes[\`\${field}\`] = \`%{\${attributes.character_name}|\${fieldAction}}\`;
    }
  });
};
funcs.setActionCalls = setActionCalls;

/**
 * Function to call a function previously registered to the funcs object. May not be used that much in actual sheets, but very useful when writing unit tests for your sheet. Either returns the function or null if no function exists.
 * @memberof Sheetworkers
 * @param {string} funcName - The name of the function to invoke.
 * @param {...any} args - The arguments to call the function with.
 * @returns {function|null}
 * @example
 * //Call myFunc with two arguments
 * k.callFunc('myFunc','an argument','another argument');
 */
const callFunc = function(funcName,...args){
  if(funcs[funcName]){
    debug(\`calling \${funcName}\`);
    return funcs[funcName](...args);
  }else{
    debug(\`Invalid function name: \${funcName}\`);
    return null;
  }
};
kFuncs.callFunc = callFunc;/**@namespace Sheetworkers */
/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/
/*jshint -W014,-W084,-W030,-W033*/
//Sheet Updaters and styling functions
const updateSheet = function(){
  log('updating sheet');
  getAllAttrs({props:['debug_mode',...baseGet],callback:(attributes,sections,casc)=>
                                                                                      {
    kFuncs.debugMode = kFuncs.debugMode || !!attributes.debug_mode;
    debug({sheet_version:attributes.sheet_version});
    if(!attributes.sheet_version){
      Object.entries(initialSetups).forEach(([funcName,handler])=>
                                                                                        {
        if(typeof funcs[funcName] === 'function'){
          debug(\`running \${funcName}\`);
          funcs[funcName]({attributes,sections,casc});
        }else{
          debug(\`!!!Warning!!! no function named \${funcName} found. Initial sheet setup not performed.\`);
        }
      });
    }else{
      Object.entries(updateHandlers).forEach(([ver,handler])=>
                                                                                          {
        if(attributes.sheet_version < +ver){
          handler({attributes,sections,casc});
        }
      });
    }
    k.debug({openHandlers});
    Object.entries(openHandlers).forEach(([funcName,func])=>
                                                                                            {
      if(typeof funcs[funcName] === 'function'){
        debug(\`running \${funcName}\`);
        funcs[funcName]({attributes,sections,casc});
      }else{
        debug(\`!!!Warning!!! no function named \${funcName} found. Sheet open handling not performed.\`);
      }
    });
    setActionCalls({attributes,sections});
    attributes.sheet_version = kFuncs.version;
    log(\`Sheet Update applied. Current Sheet Version \${kFuncs.version}\`);
    attributes.set();
    log('Sheet ready for use');
  }});
};

const initialSetup = function(attributes,sections){
  debug('Initial sheet setup');
};

/**
 * This is the default listener function for attributes that the K-Scaffold uses. It utilizes the \`triggerFuncs\`, \`listenerFunc\`, \`calculation\`, and \`affects\` properties of the K-scaffold trigger object (see the Pug section of the scaffold for more details).
 * @memberof Sheetworkers
 * @param {Roll20Event} event - The Roll20 event object
 * @returns {void}
 * @example
 * //Call from an attribute change
 * on('change:an_attribute',k.accessSheet);
 */
const accessSheet = function(event){
  debug({funcs:Object.keys(funcs)});
  debug({event});
  getAllAttrs({callback:(attributes,sections,casc)=>
                                                                                              {
    let trigger = attributes.getCascObj(event,casc);
    attributes.processChange({event,trigger,attributes,sections,casc});
  }});
};
funcs.accessSheet = accessSheet;/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/
/*jshint -W014,-W084,-W030,-W033*/
/*
Cascade Expansion functions
*/
//Expands the repeating section templates in cascades to reflect the rows actually available
const expandCascade = function(cascade,sections,attributes){
  return _.keys(cascade).reduce((memo,key)=>{//iterate through cascades and replace references to repeating attributes with correct row ids.
    if(/^(?:act|attr)_repeating_/.test(key)){//If the attribute is a repeating attribute, do special logic
      expandRepeating(memo,key,cascade,sections,attributes);
    }else if(key){//for non repeating attributes do this logic
      expandNormal(memo,key,cascade,sections);
    }
    return memo;
  },{});
};

const expandRepeating = function(memo,key,cascade,sections,attributes){
  key.replace(/((?:attr|act)_)(repeating_[^_]+)_[^_]+?_(.+)/,(match,type,section,field)=>
                                                                                                {
    (sections[section]||[]).forEach((id)=>
                                                                                                  {
      memo[\`\${type}\${section}_\${id}_\${field}\`]=_.clone(cascade[key]);//clone the details so that each row's attributes have correct ids
      memo[\`\${type}\${section}_\${id}_\${field}\`].name = \`\${section}_\${id}_\${field}\`;
      if(key.startsWith('attr_')){
        memo[\`\${type}\${section}_\${id}_\${field}\`].affects = memo[\`\${type}\${section}_\${id}_\${field}\`].affects.reduce((m,affected)=>
                                                                                                    {
          if(section === affected){//otherwise if the affected attribute is in the same section, simply set the affected attribute to have the same row id.
            m.push(applyID(affected,id));
          }else if(/repeating/.test(affected)){//If the affected attribute isn't in the same repeating section but is still a repeating attribute, add all the rows of that section
            addAllRows(affected,m,sections);
          }else{//otherwise the affected attribute is a non repeating attribute. Simply add it to the computed affected array
            m.push(affected);
          }
          return m;
        },[]);
      }
    });
  });
};

const applyID = function(affected,id){
  return affected.replace(/(repeating_[^_]+_)[^_]+(.+)/,\`$1\${id}$2\`);
};

const expandNormal = function(memo,key,cascade,sections){
  memo[key] = _.clone(cascade[key]);
  if(key.startsWith('attr_')){
    memo[key].affects = memo[key].affects || [];
    memo[key].affects = memo[key].affects.reduce((m,a)=>
                                                                                                      {
      if(/^repeating/.test(a)){
        addAllRows(a,m,sections);
      }else{
        m.push(a);
      }
      return m;
    },[]);
  }
};

const addAllRows = function(affected,memo,sections){
  affected.replace(/(repeating_[^_]+?)_[^_]+?_(.+)/,(match,section,field)=>
                                                                                                        {
    sections[section].forEach(id=>
                                                                                                          memo.push(\`\${section}_\${id}_\${field}\`));
  });
};/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/
/*jshint -W014,-W084,-W030,-W033*/
/**
 * These are functions that provide K-scaffold aliases for the basic Roll20 sheetworker functions. These functions also provide many additional features on top of the standard Roll20 sheetworkers.
 * @namespace Sheetworkers.Sheetworker Aliases
 */
/**
 * Alias for [setSectionOrder()](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) that allows you to use the section name in either \`repeating_section\` or \`section\` formats. Note that the Roll20 sheetworker [setSectionOrder](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) currently causes some display issues on sheets.
 * @memberof Sheetworker Aliases
 * @name setSectionOrder
 * @param {string} section - The name of the section, with or without \`repeating_\`
 * @param {string[]} order - Array of ids describing the desired order of the section.
 * @returns {void}
 * @example
 * //Set the order of a repeating_weapon section
 * k.setSectionOrder('repeating_equipment',['id1','id2','id3']);
 * //Can also specify the section name without the repeating_ prefix
 * k.setSectionOrder('equipment',['id1','id2','id3']);
 */
const _setSectionOrder = function(section,order){
  let trueSection = section.replace(/repeating_/,'');
  setSectionOrder(trueSection,order);
};
kFuncs.setSectionOrder = _setSectionOrder;

/**
 * Alias for [removeRepeatingRow](https://wiki.roll20.net/Sheet_Worker_Scripts#removeRepeatingRow.28_RowID_.29) that also removes the row from the current object of attribute values and array of section IDs to ensure that erroneous updates are not issued.
 * @memberof Sheetworker Aliases
 * @name removeRepeatingRow
 * @param {string} row - The row id to be removed
 * @param {attributesProxy} attributes - The attribute values currently in memory
 * @param {object} sections - Object that contains arrays of all the IDs in sections on the sheet indexed by repeating name.
 * @returns {void}
 * @example
 * //Remove a repeating Row
 * k.getAllAttrs({
 *  callback:(attributes,sections)=>
                                                                                                            {
 *    const rowID = sections.repeating_equipment[0];
 *    k.removeRepeatingRow(\`repeating_equipment_\${rowID}\`,attributes,sections);
 *    console.log(sections.repeating_equipment); // =>
                                                                                                               rowID no longer exists in the array.
 *    console.log(attributes[\`repeating_equipment_\${rowID}_name\`]); // =>
                                                                                                                 undefined
 *  }
 * })
 */
const _removeRepeatingRow = function(row,attributes,sections){
  debug(\`removing \${row}\`);
  Object.keys(attributes.attributes).forEach((key)=>
                                                                                                                  {
    if(key.startsWith(row)){
      delete attributes[key];
    }
  });
  let [,section,rowID] = row.match(/(repeating_[^_]+)_(.+)/,'');
  sections[section] = sections[section].filter((id)=>
                                                                                                                    id!==rowID);
  removeRepeatingRow(row);
};
kFuncs.removeRepeatingRow = _removeRepeatingRow;

/**
 * Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) that converts the default object of attribute values into an {@link attributesProxy} and passes that back to the callback function.
 * @memberof Sheetworker Aliases
 * @name getAttrs
 * @param {string[]} [props=baseGet] - Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.
 * @param {function(attributesProxy)} callback - The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback.
 * @example
 * //Gets the attributes named in props.
 * k.getAttrs({
 *  props:['attribute_1','attribute_2'],
 *  callback:(attributes)=>
                                                                                                                      {
 *    //Work with the attributes as you would in a normal getAttrs, or use the superpowers of the K-scaffold attributes object like so:
 *    attributes.attribute_1 = 'new value';
 *    attributes.set();
 *  }
 * })
 */
const _getAttrs = function({props=baseGet,callback}){
  getAttrs(props,(values)=>
                                                                                                                        {
    const attributes = createAttrProxy(values);
    callback(attributes);
  });
};
kFuncs.getAttrs = _getAttrs;

/**
 * Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) and [getSectionIDs](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that combines the actions of both sheetworker functions and converts the default object of attribute values into an {@link attributesProxy}. Also gets the details on how to handle all attributes from the master {@link cascades} object and.
 * @memberof Sheetworker Aliases
 * @param {Object} args
 * @param {string[]} [args.props=baseGet] - Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.
 * @param {repeatingSectionDetails} sectionDetails - Array of details about a section to get the IDs for and attributes that need to be gotten. 
 * @param {function(attributesProxy,sectionObj,expandedCascade):void} args.callback - The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback along with a {@link sectionObj} and {@link expandedCascade}.
 * @example
 * //Get every K-scaffold linked attribute on the sheet
 * k.getAllAttrs({
 *  callback:(attributes,sections,casc)=>
                                                                                                                          {
 *    //Work with the attributes as you please.
 *    attributes.some_attribute = 'a value';
 *    attributes.set();//Apply our change
 *  }
 * })
 */
const getAllAttrs = function({props=baseGet,sectionDetails=repeatingSectionDetails,callback}){
  getSections(sectionDetails,(repeats,sections)=>
                                                                                                                            {
    getAttrs([...props,...repeats],(values)=>
                                                                                                                              {
      const attributes = createAttrProxy(values);
      orderSections(attributes,sections);
      const casc = expandCascade(cascades,sections,attributes);
      callback(attributes,sections,casc);
    })
  });
};
kFuncs.getAllAttrs = getAllAttrs;

/**
 * Alias for [getSectionIDs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that allows you to iterate through several functions at once. Also assembles an array of repeating attributes to get.
 * @memberof Sheetworker Aliases
 * @param {object[]} sectionDetails - Array of details about a section to get the IDs for and attributes that need to be gotten.
 * @param {string} sectionDetails.section - The full name of the repeating section including the \`repeating_\` prefix.
 * @param {string[]} sectionDetails.fields - Array of field names that need to be gotten from the repeating section
 * @param {function(string[],sectionObj)} callback - The function to call once all IDs have been gotten and the array of repating attributes to get has been assembled. The callback is passed the array of repating attributes to get and a {@link sectionObj}.
 * @example
 * // Get some section details
 * const sectionDetails = {
 *  {section:'repeating_equipment',fields:['name','weight','cost']},
 *  {section:'repeating_weapon',fields:['name','attack','damage']}
 * };
 * k.getSections(sectionDetails,(attributeNames,sections)=>
                                                                                                                                {
 *  console.log(attributeNames);// =>
                                                                                                                                   Array containing all row specific attribute names
 *  console.log(sections);// =>
                                                                                                                                     Object with arrays containing the row ids. Indexed by section name (e.g. repeating_eqiupment)
 * })
 */
const getSections = function(sectionDetails,callback){
  let queueClone = _.clone(sectionDetails);
  const worker = (queue,repeatAttrs=[],sections={})=>
                                                                                                                                      {
    let detail = queue.shift();
    getSectionIDs(detail.section,(IDs)=>
                                                                                                                                        {
      sections[detail.section] = IDs;
      IDs.forEach((id)=>
                                                                                                                                          {
        detail.fields.forEach((f)=>
                                                                                                                                            {
          repeatAttrs.push(\`\${detail.section}_\${id}_\${f}\`);
        });
      });
      repeatAttrs.push(\`_reporder_\${detail.section}\`);
      if(queue.length){
        worker(queue,repeatAttrs,sections);
      }else{
        callback(repeatAttrs,sections);
      }
    });
  };
  if(!queueClone[0]){
    callback([],{});
  }else{
    worker(queueClone);
  }
};
kFuncs.getSections = getSections;

// Sets the attributes while always calling with {silent:true}
// Can be awaited to get the values returned from _setAttrs
/**
 * Alias for [setAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#setAttrs.28values.2Coptions.2Ccallback.29) that sets silently by default.
 * @memberof Sheetworker Aliases
 * @param {object} obj - The object containting attributes to set
 * @param {boolean} [vocal=false] - Whether to set silently (default value) or not.
 * @param {function()} [callback] - The callback function to invoke after the setting has been completed. No arguments are passed to the callback function.
 * @example
 * //Set some attributes silently
 * k.setAttrs({attribute_1:'new value'})
 * //Set some attributes and triggers listeners
 * k.setAttrs({attribute_1:'new value',true})
 * //Set some attributes and call a callback function
 * k.setAttrs({attribute_1:'new value'},null,()=>
                                                                                                                                              {
 *  //Do something after the attribute is set
 * })
 */
const set = function(obj,vocal=false,callback){
  setAttrs(obj,{silent:!vocal},callback);
};
kFuncs.setAttrs = set;

const generateCustomID = function(string){
  if(!string.startsWith('-')){
    string = \`-\${string}\`;
  }
  rowID = generateRowID();
  let re = new RegExp(\`^.{\${string.length}}\`);
  return \`\${string}\${rowID.replace(re,'')}\`;
};


/**
 * Alias for generateRowID that adds the new id to the {@link sectionObj}. Also allows for creation of custom IDs that conform to the section ID requirements.
 * @memberof Sheetworker Aliases
 * @name generateRowID
 * @param {sectionObj} sections
 * @param {string} [customText] - Custom text to start the ID with. This text should not be longer than the standard repeating section ID format.
 * @returns {string} - The created ID
 * @example
 * k.getAllAttrs({
 *  callback:(attributes,sections,casc)=>
                                                                                                                                                {
 *    //Create a new row ID
 *    const rowID = k.generateRowID('repeating_equipment',sections);
 *    console.log(rowID);// =>
                                                                                                                                                   -p8rg908ug0suzz
 *    //Create a custom row ID
 *    const customID = k.generateRowID('repeating_equipment',sections,'custom');
 *    console.log(customID);// =>
                                                                                                                                                     -custom98uadj89kj
 *  }
 * });
 */
const _generateRowID = function(section,sections,customText){
  let rowID = customText ?
    generateCustomID(customText) :
    generateRowID();
  section = section.match(/^repeating_[^_]+$/) ?
    section :
    \`repeating_\${section}\`;
  sections[section] = sections[section] || [];
  sections[section].push(rowID);
  return \`\${section}_\${rowID}\`;
};
kFuncs.generateRowID = _generateRowID;/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/
/*jshint -W014,-W084,-W030,-W033*/
const listeners = {};

/**
 * The array of attribute names that the k-scaffold gets by default. Does not incude repeating attributes.
 * @memberof Variables
 * @var
 * @type {array}
 */
const baseGet = Object.entries(cascades).reduce((memo,[attrName,detailObj])=>
                                                                                                                                                      {
  if(!/repeating/.test(attrName) && detailObj.type !== 'action'){
    memo.push(detailObj.name);
  }
  if(detailObj.listener){
    listeners[detailObj.listener] = detailObj.listenerFunc;
  }
  return memo;
},[]);
kFuncs.baseGet = baseGet;

const registerEventHandlers = function(){
  on('sheet:opened',updateSheet);
  debug({funcKeys:Object.keys(funcs),funcs});
  //Roll20 change and click listeners
  Object.entries(listeners).forEach(([event,funcName])=>
                                                                                                                                                        {
    if(funcs[funcName]){
      on(event,funcs[funcName]);
    }else{
      debug(\`!!!Warning!!! no function named \${funcName} found. No listener created for \${event}\`,true);
    }
  });
  log(\`kScaffold Loaded\`);
};
setTimeout(registerEventHandlers,0);//Delay the execution of event registration to ensure all event properties are present.

/**
 * Function to add a repeating section when the add button of a customControlFieldset or inlineFieldset is clicked.
 * @memberof Sheetworkers
 * @param {object} event - The R20 event object
 */
const addItem = function(event){
  let [,,section] = parseClickTrigger(event.triggerName);
  section = section.replace(/add-/,'');
  getAllAttrs({
    callback:(attributes,sections,casc) =>
                                                                                                                                                           {
      let row = _generateRowID(section,sections);
      debug({row});
      attributes[\`\${row}_name\`] = '';
      setActionCalls({attributes,sections});
      const trigger = cascades[\`fieldset_repeating_\${section}\`];
      if(trigger && trigger.addFuncs){
        trigger.addFuncs.forEach((funcName) =>
                                                                                                                                                             {
          if(funcs[funcName]){
            funcs[funcName]({attributes,sections,casc,trigger});
          }
        });
      }
      attributes.set({attributes,sections,casc});
    }
  });
};
funcs.addItem = addItem;/**
 * The default tab navigation function of the K-scaffold. Courtesy of Riernar. It will add \`k-active-tab\` to the active tab-container and \`k-active-button\` to the active button. You can either write your own CSS to control display of these, or use the default CSS included in \`scaffold/_k.scss\`. Note that \`k-active-button\` has no default CSS as it is assumed that you will want to style the active button to match your system.
 * @memberof Sheetworkers
 * @param {Object} trigger - The trigger object
 * @param {object} attributes - The attribute values of the character
 */
const kSwitchTab = function ({ trigger, attributes }) {
  const [container, tab] = (
    trigger.name.match(/nav-tabs-(.+)--(.+)/) ||
    []
  ).slice(1);
  $20(\`[data-container-tab="\${container}"]\`).removeClass('k-active-tab');
  $20(\`[data-container-tab="\${container}"][data-tab="\${tab}"]\`).addClass('k-active-tab');
  $20(\`[data-container-button="\${container}"]\`).removeClass('k-active-button');
  $20(\`[data-container-button="\${container}"][data-button="\${tab}"]\`).addClass('k-active-button');
  const tabInputName = \`\${container.replace(/\\-/g,'_')}_tab\`;
  if(persistentTabs.indexOf(tabInputName) >
                                                                                                                                                               -1){
    attributes[tabInputName] = trigger.name;
  }
}

registerFuncs({ kSwitchTab });

/**
 * Sets persistent tabs to their last active state
 * @memberof Sheetworkers
 * @param {object} attributes - The attribute values of the character
 */
const kTabOnOpen = function({trigger,attributes,sections,casc}){
  if(typeof persistentTabs === 'undefined') return;
  persistentTabs.forEach((tabInput) =>
                                                                                                                                                                 {
    const pseudoTrigger = {name:attributes[tabInput]};
    kSwitchTab({trigger:pseudoTrigger, attributes});
  });
};
registerFuncs({ kTabOnOpen },{type:['opener']});
return kFuncs;
}());
const actionAttributes = ["my_button_action","strength_action"];const inlineFieldsets = ["fieldset"];
                                                                                                                                                              <\/script>`},{meta:{name:"module",description:"A mixin that works with {@link kscript}. It allows you to link your js directly in the pug file that the js is related to. The K-scaffold will then put the js in the final script tag.",arguments:null,attributes:null,example:`include ../_k.pug
+module
  |// include local js file here
+kscript
  |// local js file will be put here
`},file:"lib/scripts/_scripts.pug",source:`mixin module
  if block
    - k.scriptBlocks.push(block)`,output:`<script type="text/worker">
  const k = (function(){
const kFuncs = {};
const cascades = ;

kFuncs.cascades = cascades;
const repeatingSectionDetails = ;

kFuncs.repeatingSectionDetails = repeatingSectionDetails;
const persistentTabs = ;

kFuncs.persistentTabs = persistentTabs;
/**
 * The K-scaffold provides several variables to allow your scripts to tap into its information flow.
 * @namespace Sheetworkers.Variables
 */
/**
 * This stores the name of your sheet for use in the logging functions {@link log} and {@link debug}. Accessible by \`k.sheetName\`
 * @memberof Variables
 * @var
 * @type {string}
 */
let sheetName = 'kScaffold Powered Sheet';
kFuncs.sheetName = sheetName;
/**
	* This stores the version of your sheet for use in the logging functions{@link log} and {@link debug}. It is also stored in the sheet_version attribute on your character sheet. Accessible via \`k.version\`
 * @memberof Variables
	* @var
	* @type {number}
	*/
let version = 0;
kFuncs.version = version;
/**
	* A boolean flag that tells the script whether to enable or disable {@link debug} calls. If the version of the sheet is \`0\`, or an attribute named \`debug_mode\` is found on opening this is set to true for your entire session. Otherwise, it remains false.
 * @memberof Variables
	* @var
	* @type {boolean}
	*/
let debugMode = false;
kFuncs.debugMode = debugMode;
const funcs = {};
kFuncs.funcs = funcs;
const updateHandlers = {};
const openHandlers = {};
const initialSetups = {};
const allHandlers = {};
const addFuncs = {};

const kscaffoldJSVersion = '1.0.0';
const kscaffoldPUGVersion = '1.0.0';
/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/
/*jshint -W014,-W084,-W030,-W033*/
/**
 * These are utility functions that are not directly related to Roll20 systems. They provide easy methods for everything from processing text and numbers to querying the user for input.
 * @namespace Sheetworkers.Utilities
 * @alias Utilities
 */
/**
 * Replaces problem characters to use a string as a regex
 * @memberof Utilities
 * @param {string} text - The text to replace characters in
 * @returns {string}
 * @example
 * const textForRegex = k.sanitizeForRegex('.some thing[with characters]');
 * console.log(textForRegex);// =>
     "\\.some thing\\[with characters\\]"
 */
const sanitizeForRegex = function(text){
  return text.replace(/\\.|\\||\\(|\\)|\\[|\\]|\\-|\\+|\\?|\\/|\\{|\\}|\\^|\\$|\\*/g,'\\\\$&');
};
kFuncs.sanitizeForRegex = sanitizeForRegex;

/**
 * Converts a value to a number, it\\'s default value, or \`0\` if no default value passed.
 * @memberof Utilities
 * @param {string|number} val - Value to convert to a number
 * @param {number} def - The default value, uses 0 if not passed
 * @returns {number|undefined}
 * @example
 * const num = k.value('100');
 * console.log(num);// =>
       100
 */
const value = function(val,def){
  const convertVal = +val;
  if(def !== undefined && isNaN(def)){
    throw(\`K-scaffold Error: invalid default for value(). Default: \${def}\`);
  }
  return convertVal === 0 ?
    convertVal :
    (+val||def||0);
};
kFuncs.value = value;

/**
 * Extracts the section (e.g. \`repeating_equipment\`), rowID (e.g \`-;lkj098J:LKj\`), and field name (e.g. \`bulk\`) from a repeating attribute name.
 * @memberof Utilities
 * @param {string} string - The string to parse
 * @returns {array} - Array of matches. Index 0: the section name, e.g. repeating_equipment | Index 1:the row ID | index 2: The name of the attribute
 * @returns {string[]}
 * @example
 * //Extract info from a full repeating name
 * const [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23_name');
 * console.log(section);// =>
         "repeating_equipment"
 * console.log(rowID);// =>
           "-8908asdflkjZlkj23"
 * console.log(attrName);// =>
             "name"
 * 
 * //Extract info from just a row name
 * const [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23');
 * console.log(section);// =>
               "repeating_equipment"
 * console.log(rowID);// =>
                 "-8908asdflkjZlkj23"
 * console.log(attrName);// =>
                   undefined
 */
const parseRepeatName = function(string){
  let match = string.match(/(repeating_[^_]+)_([^_]+)(?:_(.+))?/);
  match.shift();
  return match;
};
kFuncs.parseRepeatName = parseRepeatName;

/**
 * Parses out the components of a trigger name similar to [parseRepeatName](#parserepeatname). Aliases: parseClickTrigger.
 * 
 * Aliases: \`k.parseClickTrigger\`
 * @memberof Utilities
 * @param {string} string The triggerName property of the
 * @returns {array} - For a repeating button named \`repeating_equipment_-LKJhpoi98;lj_roll\`, the array will be \`['repeating_equipment','-LKJhpoi98;lj','roll']\`. For a non repeating button named \`roll\`, the array will be \`[undefined,undefined,'roll']\`
 * @returns {string[]}
 * @example
 * //Parse a non repeating trigger
 * const [section,rowID,attrName] = k.parseTriggerName('clicked:some-button');
 * console.log(section);// =>
                     undefined
 * console.log(rowID);// =>
                       undefined
 * console.log(attrName);// =>
                         "some-button"
 * 
 * //Parse a repeating trigger
 * const [section,rowID,attrName] = k.parseTriggerName('clicked:repeating_attack_-234lkjpd8fu8usadf_some-button');
 * console.log(section);// =>
                           "repeating_attack"
 * console.log(rowID);// =>
                             "-234lkjpd8fu8usadf"
 * console.log(attrName);// =>
                               "some-button"
 * 
 * //Parse a repeating name
 * const [section,rowID,attrName] = k.parseTriggerName('repeating_attack_-234lkjpd8fu8usadf_some-button');
 * console.log(section);// =>
                                 "repeating_attack"
 * console.log(rowID);// =>
                                   "-234lkjpd8fu8usadf"
 * console.log(attrName);// =>
                                     "some-button"
 */
const parseTriggerName = function(string){
  let match = string.replace(/^clicked:/,'').match(/(?:(repeating_[^_]+)_([^_]+)_)?(.+)/);
  match.shift();
  return match;
};
kFuncs.parseTriggerName = parseTriggerName;
const parseClickTrigger = parseTriggerName;
kFuncs.parseClickTrigger = parseClickTrigger;

/**
 * Parses out the attribute name from the htmlattribute name.
 * @memberof Utilities
 * @param {string} string - The triggerName property of the [event](https://wiki.roll20.net/Sheet_Worker_Scripts#eventInfo_Object).
 * @returns {string}
 * @example
 * //Parse a name
 * const attrName = k.parseHtmlName('attr_attribute_1');
 * console.log(attrName);// =>
                                       "attribute_1"
 */
const parseHTMLName = function(string){
  let match = string.match(/(?:attr|act|roll)_(.+)/);
  match.shift();
  return match[0];
};
kFuncs.parseHTMLName = parseHTMLName;

/**
 * Capitalize each word in a string
 * @memberof Utilities
 * @param {string} string - The string to capitalize
 * @returns {string}
 * @example
 * const capitalized = k.capitalize('a word');
 * console.log(capitalized);// =>
                                         "A Word"
 */
const capitalize = function(string){
  return string.replace(/(?:^|\\s+|\\/)[a-z]/ig,(letter)=>
                                          letter.toUpperCase());
};
kFuncs.capitalize = capitalize;

/**
 * Extracts a roll query result for use in later functions. Must be awaited as per [startRoll documentation](https://wiki.roll20.net/Sheet_Worker_Scripts#Roll_Parsing.28NEW.29). Stolen from [Oosh\\'s Adventures with Startroll thread](https://app.roll20.net/forum/post/10346883/adventures-with-startroll).
 * @memberof Utilities
 * @param {string} query - The query should be just the text as the \`?{\` and \`}\` at the start/end of the query are added by the function.
 * @returns {Promise} - Resolves to the selected value from the roll query
 * @example
 * const rollFunction = async function(){
 *  //Get the result of a choose from list query
 *  const queryResult = await extractQueryResult('Prompt Text Here|Option 1|Option 2');
 *  console.log(queryResult);//=>
                                             "Option 1" or "Option 2" depending on what the user selects
 * 
 *  //Get free form input from the user
 *  const freeResult = await extractQueryResult('Prompt Text Here');
 *  consoel.log(freeResult);// =>
                                               Whatever the user entered
 * }
 */
const extractQueryResult = async function(query){
	debug('entering extractQueryResult');
	let queryRoll = await startRoll(\`!{{query=[[0[response=?{\${query}}]]]}}\`);
	finishRoll(queryRoll.rollId);
	return queryRoll.results.query.expression.replace(/^.+?response=|\\]$/g,'');
};
kFuncs.extractQueryResult = extractQueryResult;

/**
 * Simulates a query for ensuring that async/await works correctly in the sheetworker environment when doing conditional startRolls. E.g. if you have an if/else and only one of the conditions results in \`startRoll\` being called (and thus an \`await\`), the sheetworker environment would normally crash. Awaiting this in the condition that does not actually need to call \`startRoll\` will keep the environment in sync.
 * @memberof Utilities
 * @param {string|number} [value] - The value to return. Optional.
 * @returns {Promise} - Resolves to the value passed to the function
 * @example
 * const rollFunction = async function(){
 *  //Get the result of a choose from list query
 *  const queryResult = await pseudoQuery('a value');
 *  console.log(queryResult);//=>
                                                 "a value"
 * }
 */
const pseudoQuery = async function(value){
	debug('entering pseudoQuery');
	let queryRoll = await startRoll(\`!{{query=[[0[response=\${value}]]]}}\`);
	finishRoll(queryRoll.rollId);
	return queryRoll.results.query.expression.replace(/^.+?response=|\\]$/g,'');
};
kFuncs.pseudoQuery = pseudoQuery;

/**
 * An alias for console.log.
 * @memberof Utilities
 * @param {any} msg - The message can be a straight string, an object, or an array. If it is an object or array, the object will be broken down so that each key is used as a label to output followed by the value of that key. If the value of the key is an object or array, it will be output via \`console.table\`.
 */
const log = function(msg){
  if(typeof msg === 'string'){
    console.log(\`%c\${kFuncs.sheetName} log| \${msg}\`,"background-color:#159ccf");
  }else if(typeof msg === 'object'){
    Object.keys(msg).forEach((m)=>
                                                  {
      if(typeof msg[m] === 'string'){
        console.log(\`%c\${kFuncs.sheetName} log| \${m}: \${msg[m]}\`,"background-color:#159ccf");
      }else{
        console.log(\`%c\${kFuncs.sheetName} log| \${typeof msg[m]} \${m}\`,"background-color:#159ccf");
        console.table(msg[m]);
      }
    });
  }
};
kFuncs.log = log;

/**
 * Alias for console.log that only triggers when debug mode is enabled or when the sheet\\'s version is \`0\`. Useful for entering test logs that will not pollute the console on the live sheet.
 * @memberof Utilities
 * @param {any} msg - 'See {@link k.log}
 * @param {boolean} force - Pass as a truthy value to force the debug output to be output to the console regardless of debug mode.
 * @returns {void}
 */
const debug = function(msg,force){
  console.warn('kFuncs.version',kFuncs.version);
  if(!kFuncs.debugMode && !force && kFuncs.version >
                                                     0) return;
  if(typeof msg === 'string'){
    console.log(\`%c\${kFuncs.sheetName} DEBUG| \${msg}\`,"background-color:tan;color:red;");
  }else if(typeof msg === 'object'){
    Object.keys(msg).forEach((m)=>
                                                      {
      if(typeof msg[m] === 'string'){
        console.log(\`%c\${kFuncs.sheetName} DEBUG| \${m}: \${msg[m]}\`,"background-color:tan;color:red;");
      }else{
        console.log(\`%c\${kFuncs.sheetName} DEBUG| \${typeof msg[m]} \${m}\`,"background-color:tan;color:red;font-weight:bold;");
        console.table(msg[m]);
      }
    });
  }
};
kFuncs.debug = debug;

/**
 * Orders the section id arrays for all sections in the \`sections\` object to match the repOrder attribute.
 * @memberof Utilities
 * @param {attributesProxy} attributes - The attributes object that must have a value for the reporder for each section.
 * @param {object[]} sections - Object containing the IDs for the repeating sections, indexed by repeating section name.
 */
const orderSections = function(attributes,sections){
  Object.keys(sections).forEach((section)=>
                                                        {
    attributes.attributes[\`_reporder_\${section}\`] = commaArray(attributes[\`_reporder_\${section}\`]);
    orderSection(attributes.attributes[\`_reporder_\${section}\`],sections[section]);
  });
};
kFuncs.orderSections = orderSections;

/**
 * Orders a single ID array.
 * @memberof Utilities
 * @param {string[]} repOrder - Array of IDs in the order they are in on the sheet.
 * @param {string[]} IDs - Array of IDs to be ordered.
 */
const orderSection = function(repOrder,IDs=[]){
  IDs.sort((a,b)=>
                                                          {
    return repOrder.indexOf(a.toLowerCase()) - repOrder.indexOf(b.toLowerCase());
  });
};
kFuncs.orderSection = orderSection;

/**
 * Splits a comma delimited string into an array
 * @memberof Utilities
 * @param {string} string - The string to split.
 * @returns {array} - The string segments of the comma delimited list.
 */
const commaArray = function(string=''){
  return string.toLowerCase().split(/\\s*,\\s*/);
};
kFuncs.commaArray = commaArray;

// Roll escape functions for passing data in action button calls. Base64 encodes/decodes the data.
const RE = {
  chars: {
      '"': '%quot;',
      ',': '%comma;',
      ':': '%colon;',
      '}': '%rcub;',
      '{': '%lcub;',
  },
  escape(data) {
    return typeof data === 'object' ?
      \`KDATA\${btoa(JSON.stringify(data))}\` :
      \`KSTRING\${btoa(data)}\`;
  },
  unescape(string) {
    const isData = typeof string === 'string' &&
      (
        string.startsWith('KDATA') ||
        string.startsWith('KSTRING')
      );
    return isData ?
      (
        string.startsWith('KDATA') ?
          JSON.parse(atob(string.replace(/^KDATA/,''))) :
          atob(string.replace(/^KSTRING/,''))
      ) :
      string;
  }
};

/**
 * Encodes data in Base64. This is useful for passing roll information to action buttons called from roll buttons.
 * @function
 * @param {string|object|any[]} data - The data that you want to Base64 encode
 * @returns {string} - The encoded data
 * @memberof! Utilities
 */
const escape = RE.escape;
/**
 * Decodes Base64 encoded strings that were created by the K-scaffold
 * @function
 * @param {string|object|any[]} string - The string of encoded data to decode. If this is not a string, or is not a string that was encoded by the K-scaffold, it will be returned as is.
 * @returns {string|object|any[]}
 * @memberof! Utilities
 */
const unescape = RE.unescape;

Object.assign(kFuncs,{escape,unescape});/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/
/*jshint -W014,-W084,-W030,-W033*/

//# Attribute Obj Proxy handler
const createAttrProxy = function(attrs){
  //creates a proxy for the attributes object so that values can be worked with more easily.
  const getCascObj = function(event,casc){
    const eventName = event.triggerName || event.sourceAttribute;
    let typePrefix = eventName.startsWith('clicked:') ?
      'act_' :
      event.removedInfo ?
      'fieldset_' :
      'attr_';
    let cascName = \`\${typePrefix}\${eventName.replace(/(?:removed|clicked):/,'')}\`;
    let cascObj = casc[cascName];
    k.debug({[cascName]:cascObj});
    if(event && cascObj){
      if(event.previousValue){
        cascObj.previousValue = event.previousValue;
      }else if(event.originalRollId){
        cascObj.originalRollId = event.originalRollId;
        cascObj.rollData = RE.unescape(event.originalRollId);
      }
    }
    return cascObj || {};
  };
  
  const triggerFunctions = function(obj,attributes,sections,casc){
    if(obj.triggeredFuncs && obj.triggeredFuncs.length){
      debug(\`triggering functions for \${obj.name}\`);
      obj.triggeredFuncs && obj.triggeredFuncs.forEach(func=>
                                                            funcs[func] ? 
        funcs[func]({trigger:obj,attributes,sections,casc}) :
        debug(\`!!!Warning!!! no function named \${func} found. Triggered function not called for \${obj.name}\`,true));
    }
  };
  
  const initialFunction = function(obj,attributes,sections){
    if(obj.initialFunc){
      debug(\`initial functions for \${obj.name}\`);
      funcs[obj.initialFunc] ?
        funcs[obj.initialFunc]({trigger:obj,attributes,sections}) :
        debug(\`!!!Warning!!! no function named \${obj.initialFunc} found. Initial function not called for \${obj.name}\`,true);
    }
  };
  const alwaysFunctions = function(trigger,attributes,sections,casc){
    Object.values(allHandlers).forEach((handler)=>
                                                              {
      handler({trigger,attributes,sections,casc});
    });
  };
  const processChange = function({event,trigger,attributes,sections,casc}){
    if(event && !trigger){
      debug(\`\${event.sourceAttribute} change detected. No trigger found\`);
      return;
    }
    if(!attributes || !sections || !casc){
      debug(\`!!! Insufficient arguments || attributes >
                                                                 \${!!attributes} | sections >
                                                                   \${!!sections} | casc >
                                                                     \${!!casc} !!!\`);
      return;
    }
    debug({trigger});
    if(event){
      debug('checking for initial & always functions');
      alwaysFunctions(trigger,attributes,sections,casc);//Functions that should be run for all events.
      initialFunction(trigger,attributes,sections,casc);//functions that should only be run if the attribute was the thing changed by the user
    }
    if(trigger){
      debug(\`processing \${trigger.name}\`);
      triggerFunctions(trigger,attributes,sections,casc);
      if(!event && trigger.calculation && funcs[trigger.calculation]){
        attributes[trigger.name] = funcs[trigger.calculation]({trigger,attributes,sections,casc});
      }else if(trigger.calculation && !funcs[trigger.calculation]){
        debug(\`K-Scaffold Error: No function named \${trigger.calculation} found\`);
      }
      if(Array.isArray(trigger.affects)){
        attributes.queue.push(...trigger.affects);
      }
    }
    attributes.set({attributes,sections,casc});
  };
  const attrTarget = {
    updates:{},
    attributes:{...attrs},
    repOrders:{},
    queue: [],
    casc:{},
    alwaysFunctions,
    processChange,
    triggerFunctions,
    initialFunction,
    getCascObj
  };
  const attrHandler = {
    get:function(obj,prop){//gets the most value of the attribute.
      //If it is a repeating order, returns the array, otherwise returns the update value or the original value
      if(prop === 'set'){
        return function(){
          let {attributes,sections,casc,callback,vocal} = arguments[0] ? arguments[0] : {};
          if(attributes && attributes.queue.length && sections && casc){
            let triggerName = attributes.queue.shift();
            let trigger = getCascObj({sourceAttribute:triggerName},casc);
            attributes.processChange({trigger,attributes,sections,casc});
          }else{
            debug({updates:obj.updates});
            let trueCallback = Object.keys(obj.repOrders).length ?
              function(){
                Object.entries(obj.repOrders).forEach(([section,order])=>
                                                                      {
                  _setSectionOrder(section,order,)
                });
                callback && callback();
              }:
              callback;
            Object.keys(obj.updates).forEach((key)=>
                                                                        obj.attributes[key] = obj.updates[key]);
            const update = obj.updates;
            obj.updates = {};
            set(update,vocal,trueCallback);
          }
        }
      }else if(Object.keys(obj).some(key=>
                                                                          key===prop)){ 
        return Reflect.get(...arguments)
      }else{
        let retValue;
        switch(true){
          case obj.repOrders.hasOwnProperty(prop):
            retValue = obj.repOrders[prop];
            break;
          case obj.updates.hasOwnProperty(prop):
            retValue = obj.updates[prop];
            break;
          default:
            retValue = obj.attributes[prop];
            break;
        }
        let cascRef = \`attr_\${prop.replace(/(repeating_[^_]+_)[^_]+/,'$1\\$X')}\`;
        let numRetVal = +retValue;
        if(!Number.isNaN(numRetVal) && retValue !== ''){
          retValue = numRetVal;
        }else if(cascades[cascRef] && (typeof cascades[cascRef].defaultValue === 'number' || cascades[cascRef].type === 'number')){
          retValue = cascades[cascRef].defaultValue;
        }
        return retValue;
      }
    },
    set:function(obj,prop,value){
      //Sets the value. Also verifies that the value is a valid attribute value
      //e.g. not undefined, null, or NaN
      if(value || value===0 || value===''){
        if(/reporder|^repeating_[^_]+$/.test(prop)){
          let section = prop.replace(/_reporder_/,'');
          obj.repOrders[section] = value;
        }else if(\`\${obj.attributes}\` !== \`\${value}\` || 
          (obj.updates[prop] && \`\${obj.updates}\` !== \`\${value}\`)
        ){
          obj.updates[prop] = value;
        }
      }else{
        debug(\`!!!Warning: Attempted to set \${prop} to an invalid value:\${value}; value not stored!!!\`);
      }
      return true;
    },
    deleteProperty(obj,prop){
      //removes the property from the original attributes, updates, and the reporders
      Object.keys(obj).forEach((key)=>
                                                                            {
        delete obj[key][prop.toLowerCase()];
      });
    }
  };
  return new Proxy(attrTarget,attrHandler);
};

/**
 * Function that registers a function for being called via the funcs object. Returns true if the function was successfully registered, and false if it could not be registered for any reason.
 * @memberof Utilities
 * @param {object} funcObj - Object with keys that are names to register functions under and values that are functions.
 * @param {object} optionsObj - Object that contains options to use for this registration.
 * @param {string[]} optionsObj.type - Array that contains the types of specialized functions that apply to the functions being registered. Valid types are \`"opener"\`, \`"updater"\`, and \`"default"\`. \`"default"\` is always used, and never needs to be passed.
 * @returns {boolean} - True if the registration succeeded, false if it failed.
 * @example
 * //Basic Registration
 * const myFunc = function({trigger,attributes,sections,casc}){};
 * k.registerFuncs({myFunc});
 * 
 * //Register a function to run on sheet open
 * const openFunc = function({trigger,attributes,sections,casc}){};
 * k.registerFuncs({openFunc},{type:['opener']})
 * 
 * //Register a function to run on all events
 * const allFunc = function({trigger,attributes,sections,casc}){};
 * k.registerFuncs({allFunc},{type:['all']})
 */
const registerFuncs = function(funcObj,optionsObj = {}){
  if(typeof funcObj !== 'object' || typeof optionsObj !== 'object'){
    debug(\`!!!! K-scaffold error: Improper arguments to register functions !!!!\`);
    return false;
  }
  const typeArr = optionsObj.type ? ['default',...optionsObj.type] : ['default'];
  const typeSwitch = {
    'opener':openHandlers,
    'updater':updateHandlers,
    'new':initialSetups,
    'all':allHandlers,
    'default':funcs
  };
  let setState;
  Object.entries(funcObj).map(([prop,value])=>
                                                                              {
    typeArr.forEach((type)=>
                                                                                {
      if(typeSwitch[type][prop]){
        debug(\`!!! Duplicate function name for \${prop} as \${type}!!!\`);
        setState = false;
      }else if(typeof value === 'function'){
        typeSwitch[type][prop] = value;
        setState = setState !== false ? true : false;
      }else{
        debug(\`!!! K-scaffold error: Function registration requires a function. Invalid value to register as \${type} !!!\`);
        setState = false;
      }
    });
  });
  return setState;
};
kFuncs.registerFuncs = registerFuncs;

/**
 * Function that sets up the action calls used in the roller mixin.
 * @memberof Sheetworkers
 * @param {object} attributes - The attribute values of the character
 * @param {object[]} sections - All the repeating section IDs
 */
const setActionCalls = function({attributes,sections}){
  actionAttributes.forEach((base)=>
                                                                                  {
    let [section,,field] = k.parseTriggerName(base);
    let fieldAction = field.replace(/_/g,'-');
    if(section){
      sections[section].forEach((id)=>
                                                                                    {
        attributes[\`\${section}_\${id}_\${field}\`] = \`%{\${attributes.character_name}|\${section}_\${id}_\${fieldAction}}\`;
      });
    }else{
      attributes[\`\${field}\`] = \`%{\${attributes.character_name}|\${fieldAction}}\`;
    }
  });
};
funcs.setActionCalls = setActionCalls;

/**
 * Function to call a function previously registered to the funcs object. May not be used that much in actual sheets, but very useful when writing unit tests for your sheet. Either returns the function or null if no function exists.
 * @memberof Sheetworkers
 * @param {string} funcName - The name of the function to invoke.
 * @param {...any} args - The arguments to call the function with.
 * @returns {function|null}
 * @example
 * //Call myFunc with two arguments
 * k.callFunc('myFunc','an argument','another argument');
 */
const callFunc = function(funcName,...args){
  if(funcs[funcName]){
    debug(\`calling \${funcName}\`);
    return funcs[funcName](...args);
  }else{
    debug(\`Invalid function name: \${funcName}\`);
    return null;
  }
};
kFuncs.callFunc = callFunc;/**@namespace Sheetworkers */
/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/
/*jshint -W014,-W084,-W030,-W033*/
//Sheet Updaters and styling functions
const updateSheet = function(){
  log('updating sheet');
  getAllAttrs({props:['debug_mode',...baseGet],callback:(attributes,sections,casc)=>
                                                                                      {
    kFuncs.debugMode = kFuncs.debugMode || !!attributes.debug_mode;
    debug({sheet_version:attributes.sheet_version});
    if(!attributes.sheet_version){
      Object.entries(initialSetups).forEach(([funcName,handler])=>
                                                                                        {
        if(typeof funcs[funcName] === 'function'){
          debug(\`running \${funcName}\`);
          funcs[funcName]({attributes,sections,casc});
        }else{
          debug(\`!!!Warning!!! no function named \${funcName} found. Initial sheet setup not performed.\`);
        }
      });
    }else{
      Object.entries(updateHandlers).forEach(([ver,handler])=>
                                                                                          {
        if(attributes.sheet_version < +ver){
          handler({attributes,sections,casc});
        }
      });
    }
    k.debug({openHandlers});
    Object.entries(openHandlers).forEach(([funcName,func])=>
                                                                                            {
      if(typeof funcs[funcName] === 'function'){
        debug(\`running \${funcName}\`);
        funcs[funcName]({attributes,sections,casc});
      }else{
        debug(\`!!!Warning!!! no function named \${funcName} found. Sheet open handling not performed.\`);
      }
    });
    setActionCalls({attributes,sections});
    attributes.sheet_version = kFuncs.version;
    log(\`Sheet Update applied. Current Sheet Version \${kFuncs.version}\`);
    attributes.set();
    log('Sheet ready for use');
  }});
};

const initialSetup = function(attributes,sections){
  debug('Initial sheet setup');
};

/**
 * This is the default listener function for attributes that the K-Scaffold uses. It utilizes the \`triggerFuncs\`, \`listenerFunc\`, \`calculation\`, and \`affects\` properties of the K-scaffold trigger object (see the Pug section of the scaffold for more details).
 * @memberof Sheetworkers
 * @param {Roll20Event} event - The Roll20 event object
 * @returns {void}
 * @example
 * //Call from an attribute change
 * on('change:an_attribute',k.accessSheet);
 */
const accessSheet = function(event){
  debug({funcs:Object.keys(funcs)});
  debug({event});
  getAllAttrs({callback:(attributes,sections,casc)=>
                                                                                              {
    let trigger = attributes.getCascObj(event,casc);
    attributes.processChange({event,trigger,attributes,sections,casc});
  }});
};
funcs.accessSheet = accessSheet;/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/
/*jshint -W014,-W084,-W030,-W033*/
/*
Cascade Expansion functions
*/
//Expands the repeating section templates in cascades to reflect the rows actually available
const expandCascade = function(cascade,sections,attributes){
  return _.keys(cascade).reduce((memo,key)=>{//iterate through cascades and replace references to repeating attributes with correct row ids.
    if(/^(?:act|attr)_repeating_/.test(key)){//If the attribute is a repeating attribute, do special logic
      expandRepeating(memo,key,cascade,sections,attributes);
    }else if(key){//for non repeating attributes do this logic
      expandNormal(memo,key,cascade,sections);
    }
    return memo;
  },{});
};

const expandRepeating = function(memo,key,cascade,sections,attributes){
  key.replace(/((?:attr|act)_)(repeating_[^_]+)_[^_]+?_(.+)/,(match,type,section,field)=>
                                                                                                {
    (sections[section]||[]).forEach((id)=>
                                                                                                  {
      memo[\`\${type}\${section}_\${id}_\${field}\`]=_.clone(cascade[key]);//clone the details so that each row's attributes have correct ids
      memo[\`\${type}\${section}_\${id}_\${field}\`].name = \`\${section}_\${id}_\${field}\`;
      if(key.startsWith('attr_')){
        memo[\`\${type}\${section}_\${id}_\${field}\`].affects = memo[\`\${type}\${section}_\${id}_\${field}\`].affects.reduce((m,affected)=>
                                                                                                    {
          if(section === affected){//otherwise if the affected attribute is in the same section, simply set the affected attribute to have the same row id.
            m.push(applyID(affected,id));
          }else if(/repeating/.test(affected)){//If the affected attribute isn't in the same repeating section but is still a repeating attribute, add all the rows of that section
            addAllRows(affected,m,sections);
          }else{//otherwise the affected attribute is a non repeating attribute. Simply add it to the computed affected array
            m.push(affected);
          }
          return m;
        },[]);
      }
    });
  });
};

const applyID = function(affected,id){
  return affected.replace(/(repeating_[^_]+_)[^_]+(.+)/,\`$1\${id}$2\`);
};

const expandNormal = function(memo,key,cascade,sections){
  memo[key] = _.clone(cascade[key]);
  if(key.startsWith('attr_')){
    memo[key].affects = memo[key].affects || [];
    memo[key].affects = memo[key].affects.reduce((m,a)=>
                                                                                                      {
      if(/^repeating/.test(a)){
        addAllRows(a,m,sections);
      }else{
        m.push(a);
      }
      return m;
    },[]);
  }
};

const addAllRows = function(affected,memo,sections){
  affected.replace(/(repeating_[^_]+?)_[^_]+?_(.+)/,(match,section,field)=>
                                                                                                        {
    sections[section].forEach(id=>
                                                                                                          memo.push(\`\${section}_\${id}_\${field}\`));
  });
};/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/
/*jshint -W014,-W084,-W030,-W033*/
/**
 * These are functions that provide K-scaffold aliases for the basic Roll20 sheetworker functions. These functions also provide many additional features on top of the standard Roll20 sheetworkers.
 * @namespace Sheetworkers.Sheetworker Aliases
 */
/**
 * Alias for [setSectionOrder()](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) that allows you to use the section name in either \`repeating_section\` or \`section\` formats. Note that the Roll20 sheetworker [setSectionOrder](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) currently causes some display issues on sheets.
 * @memberof Sheetworker Aliases
 * @name setSectionOrder
 * @param {string} section - The name of the section, with or without \`repeating_\`
 * @param {string[]} order - Array of ids describing the desired order of the section.
 * @returns {void}
 * @example
 * //Set the order of a repeating_weapon section
 * k.setSectionOrder('repeating_equipment',['id1','id2','id3']);
 * //Can also specify the section name without the repeating_ prefix
 * k.setSectionOrder('equipment',['id1','id2','id3']);
 */
const _setSectionOrder = function(section,order){
  let trueSection = section.replace(/repeating_/,'');
  setSectionOrder(trueSection,order);
};
kFuncs.setSectionOrder = _setSectionOrder;

/**
 * Alias for [removeRepeatingRow](https://wiki.roll20.net/Sheet_Worker_Scripts#removeRepeatingRow.28_RowID_.29) that also removes the row from the current object of attribute values and array of section IDs to ensure that erroneous updates are not issued.
 * @memberof Sheetworker Aliases
 * @name removeRepeatingRow
 * @param {string} row - The row id to be removed
 * @param {attributesProxy} attributes - The attribute values currently in memory
 * @param {object} sections - Object that contains arrays of all the IDs in sections on the sheet indexed by repeating name.
 * @returns {void}
 * @example
 * //Remove a repeating Row
 * k.getAllAttrs({
 *  callback:(attributes,sections)=>
                                                                                                            {
 *    const rowID = sections.repeating_equipment[0];
 *    k.removeRepeatingRow(\`repeating_equipment_\${rowID}\`,attributes,sections);
 *    console.log(sections.repeating_equipment); // =>
                                                                                                               rowID no longer exists in the array.
 *    console.log(attributes[\`repeating_equipment_\${rowID}_name\`]); // =>
                                                                                                                 undefined
 *  }
 * })
 */
const _removeRepeatingRow = function(row,attributes,sections){
  debug(\`removing \${row}\`);
  Object.keys(attributes.attributes).forEach((key)=>
                                                                                                                  {
    if(key.startsWith(row)){
      delete attributes[key];
    }
  });
  let [,section,rowID] = row.match(/(repeating_[^_]+)_(.+)/,'');
  sections[section] = sections[section].filter((id)=>
                                                                                                                    id!==rowID);
  removeRepeatingRow(row);
};
kFuncs.removeRepeatingRow = _removeRepeatingRow;

/**
 * Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) that converts the default object of attribute values into an {@link attributesProxy} and passes that back to the callback function.
 * @memberof Sheetworker Aliases
 * @name getAttrs
 * @param {string[]} [props=baseGet] - Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.
 * @param {function(attributesProxy)} callback - The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback.
 * @example
 * //Gets the attributes named in props.
 * k.getAttrs({
 *  props:['attribute_1','attribute_2'],
 *  callback:(attributes)=>
                                                                                                                      {
 *    //Work with the attributes as you would in a normal getAttrs, or use the superpowers of the K-scaffold attributes object like so:
 *    attributes.attribute_1 = 'new value';
 *    attributes.set();
 *  }
 * })
 */
const _getAttrs = function({props=baseGet,callback}){
  getAttrs(props,(values)=>
                                                                                                                        {
    const attributes = createAttrProxy(values);
    callback(attributes);
  });
};
kFuncs.getAttrs = _getAttrs;

/**
 * Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) and [getSectionIDs](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that combines the actions of both sheetworker functions and converts the default object of attribute values into an {@link attributesProxy}. Also gets the details on how to handle all attributes from the master {@link cascades} object and.
 * @memberof Sheetworker Aliases
 * @param {Object} args
 * @param {string[]} [args.props=baseGet] - Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.
 * @param {repeatingSectionDetails} sectionDetails - Array of details about a section to get the IDs for and attributes that need to be gotten. 
 * @param {function(attributesProxy,sectionObj,expandedCascade):void} args.callback - The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback along with a {@link sectionObj} and {@link expandedCascade}.
 * @example
 * //Get every K-scaffold linked attribute on the sheet
 * k.getAllAttrs({
 *  callback:(attributes,sections,casc)=>
                                                                                                                          {
 *    //Work with the attributes as you please.
 *    attributes.some_attribute = 'a value';
 *    attributes.set();//Apply our change
 *  }
 * })
 */
const getAllAttrs = function({props=baseGet,sectionDetails=repeatingSectionDetails,callback}){
  getSections(sectionDetails,(repeats,sections)=>
                                                                                                                            {
    getAttrs([...props,...repeats],(values)=>
                                                                                                                              {
      const attributes = createAttrProxy(values);
      orderSections(attributes,sections);
      const casc = expandCascade(cascades,sections,attributes);
      callback(attributes,sections,casc);
    })
  });
};
kFuncs.getAllAttrs = getAllAttrs;

/**
 * Alias for [getSectionIDs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that allows you to iterate through several functions at once. Also assembles an array of repeating attributes to get.
 * @memberof Sheetworker Aliases
 * @param {object[]} sectionDetails - Array of details about a section to get the IDs for and attributes that need to be gotten.
 * @param {string} sectionDetails.section - The full name of the repeating section including the \`repeating_\` prefix.
 * @param {string[]} sectionDetails.fields - Array of field names that need to be gotten from the repeating section
 * @param {function(string[],sectionObj)} callback - The function to call once all IDs have been gotten and the array of repating attributes to get has been assembled. The callback is passed the array of repating attributes to get and a {@link sectionObj}.
 * @example
 * // Get some section details
 * const sectionDetails = {
 *  {section:'repeating_equipment',fields:['name','weight','cost']},
 *  {section:'repeating_weapon',fields:['name','attack','damage']}
 * };
 * k.getSections(sectionDetails,(attributeNames,sections)=>
                                                                                                                                {
 *  console.log(attributeNames);// =>
                                                                                                                                   Array containing all row specific attribute names
 *  console.log(sections);// =>
                                                                                                                                     Object with arrays containing the row ids. Indexed by section name (e.g. repeating_eqiupment)
 * })
 */
const getSections = function(sectionDetails,callback){
  let queueClone = _.clone(sectionDetails);
  const worker = (queue,repeatAttrs=[],sections={})=>
                                                                                                                                      {
    let detail = queue.shift();
    getSectionIDs(detail.section,(IDs)=>
                                                                                                                                        {
      sections[detail.section] = IDs;
      IDs.forEach((id)=>
                                                                                                                                          {
        detail.fields.forEach((f)=>
                                                                                                                                            {
          repeatAttrs.push(\`\${detail.section}_\${id}_\${f}\`);
        });
      });
      repeatAttrs.push(\`_reporder_\${detail.section}\`);
      if(queue.length){
        worker(queue,repeatAttrs,sections);
      }else{
        callback(repeatAttrs,sections);
      }
    });
  };
  if(!queueClone[0]){
    callback([],{});
  }else{
    worker(queueClone);
  }
};
kFuncs.getSections = getSections;

// Sets the attributes while always calling with {silent:true}
// Can be awaited to get the values returned from _setAttrs
/**
 * Alias for [setAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#setAttrs.28values.2Coptions.2Ccallback.29) that sets silently by default.
 * @memberof Sheetworker Aliases
 * @param {object} obj - The object containting attributes to set
 * @param {boolean} [vocal=false] - Whether to set silently (default value) or not.
 * @param {function()} [callback] - The callback function to invoke after the setting has been completed. No arguments are passed to the callback function.
 * @example
 * //Set some attributes silently
 * k.setAttrs({attribute_1:'new value'})
 * //Set some attributes and triggers listeners
 * k.setAttrs({attribute_1:'new value',true})
 * //Set some attributes and call a callback function
 * k.setAttrs({attribute_1:'new value'},null,()=>
                                                                                                                                              {
 *  //Do something after the attribute is set
 * })
 */
const set = function(obj,vocal=false,callback){
  setAttrs(obj,{silent:!vocal},callback);
};
kFuncs.setAttrs = set;

const generateCustomID = function(string){
  if(!string.startsWith('-')){
    string = \`-\${string}\`;
  }
  rowID = generateRowID();
  let re = new RegExp(\`^.{\${string.length}}\`);
  return \`\${string}\${rowID.replace(re,'')}\`;
};


/**
 * Alias for generateRowID that adds the new id to the {@link sectionObj}. Also allows for creation of custom IDs that conform to the section ID requirements.
 * @memberof Sheetworker Aliases
 * @name generateRowID
 * @param {sectionObj} sections
 * @param {string} [customText] - Custom text to start the ID with. This text should not be longer than the standard repeating section ID format.
 * @returns {string} - The created ID
 * @example
 * k.getAllAttrs({
 *  callback:(attributes,sections,casc)=>
                                                                                                                                                {
 *    //Create a new row ID
 *    const rowID = k.generateRowID('repeating_equipment',sections);
 *    console.log(rowID);// =>
                                                                                                                                                   -p8rg908ug0suzz
 *    //Create a custom row ID
 *    const customID = k.generateRowID('repeating_equipment',sections,'custom');
 *    console.log(customID);// =>
                                                                                                                                                     -custom98uadj89kj
 *  }
 * });
 */
const _generateRowID = function(section,sections,customText){
  let rowID = customText ?
    generateCustomID(customText) :
    generateRowID();
  section = section.match(/^repeating_[^_]+$/) ?
    section :
    \`repeating_\${section}\`;
  sections[section] = sections[section] || [];
  sections[section].push(rowID);
  return \`\${section}_\${rowID}\`;
};
kFuncs.generateRowID = _generateRowID;/*jshint esversion: 11, laxcomma:true, eqeqeq:true*/
/*jshint -W014,-W084,-W030,-W033*/
const listeners = {};

/**
 * The array of attribute names that the k-scaffold gets by default. Does not incude repeating attributes.
 * @memberof Variables
 * @var
 * @type {array}
 */
const baseGet = Object.entries(cascades).reduce((memo,[attrName,detailObj])=>
                                                                                                                                                      {
  if(!/repeating/.test(attrName) && detailObj.type !== 'action'){
    memo.push(detailObj.name);
  }
  if(detailObj.listener){
    listeners[detailObj.listener] = detailObj.listenerFunc;
  }
  return memo;
},[]);
kFuncs.baseGet = baseGet;

const registerEventHandlers = function(){
  on('sheet:opened',updateSheet);
  debug({funcKeys:Object.keys(funcs),funcs});
  //Roll20 change and click listeners
  Object.entries(listeners).forEach(([event,funcName])=>
                                                                                                                                                        {
    if(funcs[funcName]){
      on(event,funcs[funcName]);
    }else{
      debug(\`!!!Warning!!! no function named \${funcName} found. No listener created for \${event}\`,true);
    }
  });
  log(\`kScaffold Loaded\`);
};
setTimeout(registerEventHandlers,0);//Delay the execution of event registration to ensure all event properties are present.

/**
 * Function to add a repeating section when the add button of a customControlFieldset or inlineFieldset is clicked.
 * @memberof Sheetworkers
 * @param {object} event - The R20 event object
 */
const addItem = function(event){
  let [,,section] = parseClickTrigger(event.triggerName);
  section = section.replace(/add-/,'');
  getAllAttrs({
    callback:(attributes,sections,casc) =>
                                                                                                                                                           {
      let row = _generateRowID(section,sections);
      debug({row});
      attributes[\`\${row}_name\`] = '';
      setActionCalls({attributes,sections});
      const trigger = cascades[\`fieldset_repeating_\${section}\`];
      if(trigger && trigger.addFuncs){
        trigger.addFuncs.forEach((funcName) =>
                                                                                                                                                             {
          if(funcs[funcName]){
            funcs[funcName]({attributes,sections,casc,trigger});
          }
        });
      }
      attributes.set({attributes,sections,casc});
    }
  });
};
funcs.addItem = addItem;/**
 * The default tab navigation function of the K-scaffold. Courtesy of Riernar. It will add \`k-active-tab\` to the active tab-container and \`k-active-button\` to the active button. You can either write your own CSS to control display of these, or use the default CSS included in \`scaffold/_k.scss\`. Note that \`k-active-button\` has no default CSS as it is assumed that you will want to style the active button to match your system.
 * @memberof Sheetworkers
 * @param {Object} trigger - The trigger object
 * @param {object} attributes - The attribute values of the character
 */
const kSwitchTab = function ({ trigger, attributes }) {
  const [container, tab] = (
    trigger.name.match(/nav-tabs-(.+)--(.+)/) ||
    []
  ).slice(1);
  $20(\`[data-container-tab="\${container}"]\`).removeClass('k-active-tab');
  $20(\`[data-container-tab="\${container}"][data-tab="\${tab}"]\`).addClass('k-active-tab');
  $20(\`[data-container-button="\${container}"]\`).removeClass('k-active-button');
  $20(\`[data-container-button="\${container}"][data-button="\${tab}"]\`).addClass('k-active-button');
  const tabInputName = \`\${container.replace(/\\-/g,'_')}_tab\`;
  if(persistentTabs.indexOf(tabInputName) >
                                                                                                                                                               -1){
    attributes[tabInputName] = trigger.name;
  }
}

registerFuncs({ kSwitchTab });

/**
 * Sets persistent tabs to their last active state
 * @memberof Sheetworkers
 * @param {object} attributes - The attribute values of the character
 */
const kTabOnOpen = function({trigger,attributes,sections,casc}){
  if(typeof persistentTabs === 'undefined') return;
  persistentTabs.forEach((tabInput) =>
                                                                                                                                                                 {
    const pseudoTrigger = {name:attributes[tabInput]};
    kSwitchTab({trigger:pseudoTrigger, attributes});
  });
};
registerFuncs({ kTabOnOpen },{type:['opener']});
return kFuncs;
}());
const actionAttributes = ["my_button_action","strength_action"];const inlineFieldsets = ["fieldset"];// local js file will be put here
// include local js file here
                                                                                                                                                              <\/script>`}],_p=[{comment:"",meta:{range:[6,32],filename:"errorHead.js",lineno:1,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000003",name:"colors",type:"CallExpression",value:""}},undocumented:!0,name:"colors",longname:"colors",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[41,255],filename:"errorHead.js",lineno:3,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000009",name:"kErrorHead",type:"ArrowFunctionExpression"},vars:{borderForString:"kErrorHead~borderForString","":null}},undocumented:!0,name:"kErrorHead",longname:"kErrorHead",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[76,148],filename:"errorHead.js",lineno:4,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000015",name:"borderForString",type:"CallExpression",value:""}},undocumented:!0,name:"borderForString",longname:"kErrorHead~borderForString",kind:"constant",memberof:"kErrorHead",scope:"inner",params:[]},{comment:"",meta:{range:[257,284],filename:"errorHead.js",lineno:8,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000052",name:"module.exports",type:"Identifier",value:"kErrorHead",paramnames:[]}},undocumented:!0,name:"exports",longname:"module.exports",kind:"member",memberof:"module",scope:"static"},{comment:"",meta:{range:[6,33],filename:"getTemplate.js",lineno:1,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000060",name:"fs",type:"CallExpression",value:""}},undocumented:!0,name:"fs",longname:"fs",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[42,214],filename:"getTemplate.js",lineno:3,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000066",name:"getTemplate",type:"ArrowFunctionExpression"},vars:{"":null}},undocumented:!0,name:"getTemplate",longname:"getTemplate",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[217,245],filename:"getTemplate.js",lineno:8,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000090",name:"module.exports",type:"Identifier",value:"getTemplate",paramnames:[]}},undocumented:!0,name:"exports",longname:"module.exports",kind:"member",memberof:"module",scope:"static"},{comment:`/**
 * The build functionality used by the CLI and API build interfaces.
 * @namespace Build
 */`,meta:{filename:"index.js",lineno:1,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{}},description:"The build functionality used by the CLI and API build interfaces.",kind:"namespace",name:"Build",longname:"Build",scope:"global"},{comment:"",meta:{range:[103,134],filename:"index.js",lineno:5,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000098",name:"watchSheet",type:"CallExpression",value:""}},undocumented:!0,name:"watchSheet",longname:"watchSheet",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[142,182],filename:"index.js",lineno:6,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000104",name:"processSheet",type:"CallExpression",value:""}},undocumented:!0,name:"processSheet",longname:"processSheet",kind:"constant",scope:"global",params:[]},{comment:`/**
 * Renders PUG and SCSS into HTML and CSS text
 * @memberof Build
 * @alias all
 * @param {string} source - The path to the directory containing your PUG and SCSS files
 * @param {string} destination - The path to the directory where you want your HTML and CSS files to be created
 * @param {object} [pugOptions] - Options for how the k-scaffold should parse the pug and options that should be passed to pugjs. Accepts all options specified at pugjs.org. To be explicit as the pugjs docs are obtuse on this point, you may pass any local variables/functions that you want to have access to in your pug via this object. In addition you may pass:
 * @param {boolean} [pugOptions.suppressStack = true] - Whether the K-scaffold should suppress the full error stack from pug and only display the message portion of the error. The stack traces provided by pug do not refer to the actual chain of included pug files, and so are usually useless in troubleshooting an issue.
 * @param {object} [scssOptions = {}] - Options for how the k-scaffold should parse the SCSS and options that should be passed to SASS. Accepts all options specified at sass-lang.com.
 * @returns {Promise<array[]>} - Array containing all rendered HTML text in an array at index 0 and all rendered CSS text at index 1.
 */`,meta:{range:[1482,1841],filename:"index.js",lineno:19,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000110",name:"build",type:"ArrowFunctionExpression"},vars:{undefined:null}},description:"Renders PUG and SCSS into HTML and CSS text",memberof:"Build",alias:"all",params:[{type:{names:["string"]},description:"The path to the directory containing your PUG and SCSS files",name:"source"},{type:{names:["string"]},description:"The path to the directory where you want your HTML and CSS files to be created",name:"destination"},{type:{names:["object"]},optional:!0,description:"Options for how the k-scaffold should parse the pug and options that should be passed to pugjs. Accepts all options specified at pugjs.org. To be explicit as the pugjs docs are obtuse on this point, you may pass any local variables/functions that you want to have access to in your pug via this object. In addition you may pass:",name:"pugOptions"},{type:{names:["boolean"]},optional:!0,defaultvalue:!0,description:"Whether the K-scaffold should suppress the full error stack from pug and only display the message portion of the error. The stack traces provided by pug do not refer to the actual chain of included pug files, and so are usually useless in troubleshooting an issue.",name:"pugOptions.suppressStack"},{type:{names:["object"]},optional:!0,defaultvalue:"{}",description:"Options for how the k-scaffold should parse the SCSS and options that should be passed to SASS. Accepts all options specified at sass-lang.com.",name:"scssOptions"}],returns:[{type:{names:["Promise.<Array.<array>>"]},description:"- Array containing all rendered HTML text in an array at index 0 and all rendered CSS text at index 1."}],name:"all",longname:"all",kind:"function",async:!0},{comment:"",meta:{range:[1498,1510],filename:"index.js",lineno:19,columnno:22,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000114",name:"source",type:"AssignmentPattern",value:"source"}},undocumented:!0,name:"source",longname:"source",kind:"member",scope:"global"},{comment:"",meta:{range:[1511,1522],filename:"index.js",lineno:19,columnno:35,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000118",name:"destination",type:"Identifier",value:"destination"}},undocumented:!0,name:"destination",longname:"destination",kind:"member",scope:"global"},{comment:"",meta:{range:[1523,1538],filename:"index.js",lineno:19,columnno:47,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000120",name:"testDestination",type:"Identifier",value:"testDestination"}},undocumented:!0,name:"testDestination",longname:"testDestination",kind:"member",scope:"global"},{comment:"",meta:{range:[1539,1570],filename:"index.js",lineno:19,columnno:63,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000122",name:"pugOptions",type:"AssignmentPattern",value:"pugOptions"}},undocumented:!0,name:"pugOptions",longname:"pugOptions",kind:"member",scope:"global"},{comment:"",meta:{range:[1551,1569],filename:"index.js",lineno:19,columnno:75,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000126",name:"suppressStack",type:"Literal",value:!0}},undocumented:!0,name:"suppressStack",longname:"suppressStack",kind:"member",scope:"global"},{comment:"",meta:{range:[1571,1585],filename:"index.js",lineno:19,columnno:95,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000128",name:"scssOptions",type:"AssignmentPattern",value:"scssOptions"}},undocumented:!0,name:"scssOptions",longname:"scssOptions",kind:"member",scope:"global"},{comment:"",meta:{range:[1586,1597],filename:"index.js",lineno:19,columnno:110,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000132",name:"watch",type:"AssignmentPattern",value:"watch"}},undocumented:!0,name:"watch",longname:"watch",kind:"member",scope:"global"},{comment:"",meta:{range:[1646,1652],filename:"index.js",lineno:20,columnno:41,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000144",name:"source",type:"Identifier",value:"source"}},undocumented:!0,name:"source",longname:"source",kind:"member",scope:"global"},{comment:"",meta:{range:[1653,1664],filename:"index.js",lineno:20,columnno:48,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000146",name:"destination",type:"Identifier",value:"destination"}},undocumented:!0,name:"destination",longname:"destination",kind:"member",scope:"global"},{comment:"",meta:{range:[1665,1680],filename:"index.js",lineno:20,columnno:60,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000148",name:"testDestination",type:"Identifier",value:"testDestination"}},undocumented:!0,name:"testDestination",longname:"testDestination",kind:"member",scope:"global"},{comment:"",meta:{range:[1681,1691],filename:"index.js",lineno:20,columnno:76,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000150",name:"pugOptions",type:"Identifier",value:"pugOptions"}},undocumented:!0,name:"pugOptions",longname:"pugOptions",kind:"member",scope:"global"},{comment:"",meta:{range:[1692,1703],filename:"index.js",lineno:20,columnno:87,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000152",name:"scssOptions",type:"Identifier",value:"scssOptions"}},undocumented:!0,name:"scssOptions",longname:"scssOptions",kind:"member",scope:"global"},{comment:"",meta:{range:[1743,1749],filename:"index.js",lineno:22,columnno:23,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000161",name:"source",type:"Identifier",value:"source"}},undocumented:!0,name:"source",longname:"source",kind:"member",scope:"global"},{comment:"",meta:{range:[1750,1761],filename:"index.js",lineno:22,columnno:30,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000163",name:"destination",type:"Identifier",value:"destination"}},undocumented:!0,name:"destination",longname:"destination",kind:"member",scope:"global"},{comment:"",meta:{range:[1762,1777],filename:"index.js",lineno:22,columnno:42,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000165",name:"testDestination",type:"Identifier",value:"testDestination"}},undocumented:!0,name:"testDestination",longname:"testDestination",kind:"member",scope:"global"},{comment:"",meta:{range:[1778,1788],filename:"index.js",lineno:22,columnno:58,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000167",name:"pugOptions",type:"Identifier",value:"pugOptions"}},undocumented:!0,name:"pugOptions",longname:"pugOptions",kind:"member",scope:"global"},{comment:"",meta:{range:[1789,1800],filename:"index.js",lineno:22,columnno:69,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000169",name:"scssOptions",type:"Identifier",value:"scssOptions"}},undocumented:!0,name:"scssOptions",longname:"scssOptions",kind:"member",scope:"global"},{comment:"",meta:{range:[1844,1866],filename:"index.js",lineno:28,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000177",name:"module.exports",type:"Identifier",value:"build",paramnames:[]}},undocumented:!0,name:"exports",longname:"module.exports",kind:"member",memberof:"module",scope:"static"},{comment:"",meta:{range:[6,32],filename:"kStatus.js",lineno:1,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000185",name:"colors",type:"CallExpression",value:""}},undocumented:!0,name:"colors",longname:"colors",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[41,101],filename:"kStatus.js",lineno:3,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000191",name:"kStatus",type:"ArrowFunctionExpression"}},undocumented:!0,name:"kStatus",longname:"kStatus",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[103,127],filename:"kStatus.js",lineno:7,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100000208",name:"module.exports",type:"Identifier",value:"kStatus",paramnames:[]}},undocumented:!0,name:"exports",longname:"module.exports",kind:"member",memberof:"module",scope:"static"},{comment:`/**
 * The local functions and variables that the K-scaffold provides for use in your pug.
 * @namespace Locals
*/`,meta:{filename:"index.js",lineno:1,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{}},description:"The local functions and variables that the K-scaffold provides for use in your pug.",kind:"namespace",name:"Locals",longname:"Locals",scope:"global"},{comment:`/**
 * Object that stores attributes that are updated based on the pug but are used in the sheetworkers. The user can add properties to this object to export data from the pug to the sheetworkers.
 * @memberof Locals
 * @property {object[]} repeatingSectionDetails - Array of objects that describe each repeating section and the attributes contained in them.
 * @property {string[]} actionAttributes - Array of attribute names created by use of the \`roller\` mixin.
 * @property {object} cascades - Object that accumulates the trigger information for all attributes created using k-scaffold mixins. Items are added and updated here via the {@link storeTrigger} function.
 */`,meta:{range:[795,810],filename:"index.js",lineno:12,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000216",name:"varObjects",type:"ObjectExpression",value:"{}"}},description:"Object that stores attributes that are updated based on the pug but are used in the sheetworkers. The user can add properties to this object to export data from the pug to the sheetworkers.",memberof:"Locals",properties:[{type:{names:["Array.<object>"]},description:"Array of objects that describe each repeating section and the attributes contained in them.",name:"repeatingSectionDetails"},{type:{names:["Array.<string>"]},description:"Array of attribute names created by use of the `roller` mixin.",name:"actionAttributes"},{type:{names:["object"]},description:"Object that accumulates the trigger information for all attributes created using k-scaffold mixins. Items are added and updated here via the {@link storeTrigger} function.",name:"cascades"}],name:"varObjects",longname:"Locals.varObjects",kind:"constant",scope:"static",params:[]},{comment:"/**\n * Object that describes the state of k-scaffold prefixes and info that are manipulated in reaction to mixins being used or direclty by the user, but are not used in the sheetworkers.\n * @memberof Locals\n * @property {boolean} scriptUsed - Boolean that tracks whether the kScript mixin has been called or not. Default `false`.\n * @property {string} repeatingPrefix - The prefix for the current repeating section. Empty when no repeating section is currently being worked in. Automatically updated when using the fieldset mixins. Default `''`\n * @property {boolean} repeatsIgnoreSystemPrefix - Boolean that controls whether repeating sections ignore the system prefix or not. Default `false`.\n * @property {string} systemPrefix - A prefix that is added to all attribute names until changed. Useful for sheets that handle multiple systems and need separate tracking for similarly named attributes. Default `''`\n */",meta:{range:[1736,1742],filename:"index.js",lineno:22,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000220",name:"k",type:"ObjectExpression",value:"{}"}},description:"Object that describes the state of k-scaffold prefixes and info that are manipulated in reaction to mixins being used or direclty by the user, but are not used in the sheetworkers.",memberof:"Locals",properties:[{type:{names:["boolean"]},description:"Boolean that tracks whether the kScript mixin has been called or not. Default `false`.",name:"scriptUsed"},{type:{names:["string"]},description:"The prefix for the current repeating section. Empty when no repeating section is currently being worked in. Automatically updated when using the fieldset mixins. Default `''`",name:"repeatingPrefix"},{type:{names:["boolean"]},description:"Boolean that controls whether repeating sections ignore the system prefix or not. Default `false`.",name:"repeatsIgnoreSystemPrefix"},{type:{names:["string"]},description:"A prefix that is added to all attribute names until changed. Useful for sheets that handle multiple systems and need separate tracking for similarly named attributes. Default `''`",name:"systemPrefix"}],name:"k",longname:"Locals.k",kind:"constant",scope:"static",params:[]},{comment:"",meta:{range:[1751,2543],filename:"index.js",lineno:24,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000224",name:"resetObjs",type:"ArrowFunctionExpression"},vars:{varTemplate:"resetObjs~varTemplate",kTemplate:"resetObjs~kTemplate","":null}},undocumented:!0,name:"resetObjs",longname:"resetObjs",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[1778,2146],filename:"index.js",lineno:25,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000229",name:"varTemplate",type:"ObjectExpression",value:'{"repeatingSectionDetails":"","actionAttributes":"","cascades":"","persistentTabs":""}'}},undocumented:!0,name:"varTemplate",longname:"resetObjs~varTemplate",kind:"constant",memberof:"resetObjs",scope:"inner",params:[]},{comment:"",meta:{range:[1798,1824],filename:"index.js",lineno:26,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000232",name:"repeatingSectionDetails",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"repeatingSectionDetails",longname:"resetObjs~varTemplate.repeatingSectionDetails",kind:"member",memberof:"resetObjs~varTemplate",scope:"static"},{comment:"",meta:{range:[1830,1849],filename:"index.js",lineno:27,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000234",name:"actionAttributes",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"actionAttributes",longname:"resetObjs~varTemplate.actionAttributes",kind:"member",memberof:"resetObjs~varTemplate",scope:"static"},{comment:"",meta:{range:[1855,2119],filename:"index.js",lineno:28,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000236",name:"cascades",type:"ObjectExpression",value:'{"attr_character_name":""}'}},undocumented:!0,name:"cascades",longname:"resetObjs~varTemplate.cascades",kind:"member",memberof:"resetObjs~varTemplate",scope:"static"},{comment:"",meta:{range:[1872,2111],filename:"index.js",lineno:29,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000238",name:"attr_character_name",type:"ObjectExpression",value:'{"name":"character_name","type":"text","defaultValue":"","affects":"","triggeredFuncs":"","listenerFunc":"accessSheet","listener":"change:character_name"}'}},undocumented:!0,name:"attr_character_name",longname:"resetObjs~varTemplate.cascades.attr_character_name",kind:"member",memberof:"resetObjs~varTemplate.cascades",scope:"static"},{comment:"",meta:{range:[1902,1923],filename:"index.js",lineno:30,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000240",name:"name",type:"Literal",value:"character_name"}},undocumented:!0,name:"name",longname:"resetObjs~varTemplate.cascades.attr_character_name.name",kind:"member",memberof:"resetObjs~varTemplate.cascades.attr_character_name",scope:"static"},{comment:"",meta:{range:[1933,1944],filename:"index.js",lineno:31,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000242",name:"type",type:"Literal",value:"text"}},undocumented:!0,name:"type",longname:"resetObjs~varTemplate.cascades.attr_character_name.type",kind:"member",memberof:"resetObjs~varTemplate.cascades.attr_character_name",scope:"static"},{comment:"",meta:{range:[1954,1969],filename:"index.js",lineno:32,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000244",name:"defaultValue",type:"Literal",value:""}},undocumented:!0,name:"defaultValue",longname:"resetObjs~varTemplate.cascades.attr_character_name.defaultValue",kind:"member",memberof:"resetObjs~varTemplate.cascades.attr_character_name",scope:"static"},{comment:"",meta:{range:[1979,1989],filename:"index.js",lineno:33,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000246",name:"affects",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"affects",longname:"resetObjs~varTemplate.cascades.attr_character_name.affects",kind:"member",memberof:"resetObjs~varTemplate.cascades.attr_character_name",scope:"static"},{comment:"",meta:{range:[1999,2032],filename:"index.js",lineno:34,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000248",name:"triggeredFuncs",type:"ArrayExpression",value:'["setActionCalls"]'}},undocumented:!0,name:"triggeredFuncs",longname:"resetObjs~varTemplate.cascades.attr_character_name.triggeredFuncs",kind:"member",memberof:"resetObjs~varTemplate.cascades.attr_character_name",scope:"static"},{comment:"",meta:{range:[2042,2068],filename:"index.js",lineno:35,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000251",name:"listenerFunc",type:"Literal",value:"accessSheet"}},undocumented:!0,name:"listenerFunc",longname:"resetObjs~varTemplate.cascades.attr_character_name.listenerFunc",kind:"member",memberof:"resetObjs~varTemplate.cascades.attr_character_name",scope:"static"},{comment:"",meta:{range:[2078,2110],filename:"index.js",lineno:36,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000253",name:"listener",type:"Literal",value:"change:character_name"}},undocumented:!0,name:"listener",longname:"resetObjs~varTemplate.cascades.attr_character_name.listener",kind:"member",memberof:"resetObjs~varTemplate.cascades.attr_character_name",scope:"static"},{comment:"",meta:{range:[2125,2142],filename:"index.js",lineno:38,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000255",name:"persistentTabs",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"persistentTabs",longname:"resetObjs~varTemplate.persistentTabs",kind:"member",memberof:"resetObjs~varTemplate",scope:"static"},{comment:"",meta:{range:[2156,2298],filename:"index.js",lineno:40,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000258",name:"kTemplate",type:"ObjectExpression",value:'{"scriptUsed":false,"repeatingPrefix":"","repeatsIgnoreSystemPrefix":false,"systemPrefix":"","scriptBlocks":""}'}},undocumented:!0,name:"kTemplate",longname:"resetObjs~kTemplate",kind:"constant",memberof:"resetObjs",scope:"inner",params:[]},{comment:"",meta:{range:[2174,2191],filename:"index.js",lineno:41,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000261",name:"scriptUsed",type:"Literal",value:!1}},undocumented:!0,name:"scriptUsed",longname:"resetObjs~kTemplate.scriptUsed",kind:"member",memberof:"resetObjs~kTemplate",scope:"static"},{comment:"",meta:{range:[2197,2215],filename:"index.js",lineno:42,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000263",name:"repeatingPrefix",type:"Literal",value:""}},undocumented:!0,name:"repeatingPrefix",longname:"resetObjs~kTemplate.repeatingPrefix",kind:"member",memberof:"resetObjs~kTemplate",scope:"static"},{comment:"",meta:{range:[2221,2252],filename:"index.js",lineno:43,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000265",name:"repeatsIgnoreSystemPrefix",type:"Literal",value:!1}},undocumented:!0,name:"repeatsIgnoreSystemPrefix",longname:"resetObjs~kTemplate.repeatsIgnoreSystemPrefix",kind:"member",memberof:"resetObjs~kTemplate",scope:"static"},{comment:"",meta:{range:[2258,2273],filename:"index.js",lineno:44,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000267",name:"systemPrefix",type:"Literal",value:""}},undocumented:!0,name:"systemPrefix",longname:"resetObjs~kTemplate.systemPrefix",kind:"member",memberof:"resetObjs~kTemplate",scope:"static"},{comment:"",meta:{range:[2279,2294],filename:"index.js",lineno:45,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000269",name:"scriptBlocks",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"scriptBlocks",longname:"resetObjs~kTemplate.scriptBlocks",kind:"member",memberof:"resetObjs~kTemplate",scope:"static"},{comment:`/**
 * checks that the kScript mixin is the final mixin used.
 */`,meta:{range:[2618,2769],filename:"index.js",lineno:57,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000332",name:"checkKUse",type:"ArrowFunctionExpression"}},description:"checks that the kScript mixin is the final mixin used.",name:"checkKUse",longname:"checkKUse",kind:"function",scope:"global",params:[]},{comment:`/**
 * Gets the current state of the system prefix
 * @returns {string}
 */`,meta:{range:[2856,2900],filename:"index.js",lineno:67,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000346",name:"getSystemPrefix",type:"ArrowFunctionExpression"}},description:"Gets the current state of the system prefix",returns:[{type:{names:["string"]}}],name:"getSystemPrefix",longname:"getSystemPrefix",kind:"function",scope:"global",params:[]},{comment:`/**
 * Updates the k.systemPrefix K-scaffold global variable so that any attributes created after this point will be prepended with the prefix. By default attributes in repeating sections are not prepended; instead the repeating section name is prefixed. Returns the previous prefix.
 * @param {string} val - The value to set the prefix to. If not a string or falsy, will reset the prefix to an empty string.
 * @param {boolean} normalRepeating - Whether the prefix should be applied to repeating section names (default), or to the attribute name itself in repeating sections.
 * @returns {string}
 */`,meta:{range:[3511,3727],filename:"index.js",lineno:75,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000355",name:"setSystemPrefix",type:"ArrowFunctionExpression"},vars:{"k.repeatsIgnoreSystemPrefix":"Locals.k.repeatsIgnoreSystemPrefix",prevPrefix:"setSystemPrefix~prevPrefix","k.systemPrefix":"Locals.k.systemPrefix"}},description:"Updates the k.systemPrefix K-scaffold global variable so that any attributes created after this point will be prepended with the prefix. By default attributes in repeating sections are not prepended; instead the repeating section name is prefixed. Returns the previous prefix.",params:[{type:{names:["string"]},description:"The value to set the prefix to. If not a string or falsy, will reset the prefix to an empty string.",name:"val"},{type:{names:["boolean"]},description:"Whether the prefix should be applied to repeating section names (default), or to the attribute name itself in repeating sections.",name:"normalRepeating",defaultvalue:!1}],returns:[{type:{names:["string"]}}],name:"setSystemPrefix",longname:"setSystemPrefix",kind:"function",scope:"global"},{comment:"",meta:{range:[3566,3611],filename:"index.js",lineno:76,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000364",name:"k.repeatsIgnoreSystemPrefix",type:"Identifier",value:"normalRepeating",paramnames:[]}},undocumented:!0,name:"repeatsIgnoreSystemPrefix",longname:"Locals.k.repeatsIgnoreSystemPrefix",kind:"member",memberof:"Locals.k",scope:"static"},{comment:"",meta:{range:[3621,3648],filename:"index.js",lineno:77,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000370",name:"prevPrefix",type:"MemberExpression",value:"k.systemPrefix"}},undocumented:!0,name:"prevPrefix",longname:"setSystemPrefix~prevPrefix",kind:"constant",memberof:"setSystemPrefix",scope:"inner",params:[]},{comment:"",meta:{range:[3652,3703],filename:"index.js",lineno:78,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000376",name:"k.systemPrefix",type:"ConditionalExpression",value:"",paramnames:[]}},undocumented:!0,name:"systemPrefix",longname:"Locals.k.systemPrefix",kind:"member",memberof:"Locals.k",scope:"static"},{comment:`/**
 * Converts an attribute name into an attribute call for that attribute. Converts \`_max\` attribute names to the proper attribute call syntax for \`_max\` attributes (see second example). If called from inside the block of a {@link fieldset} mixin, will also add the appropriate information for calling a repeating attribute.
 * @memberof Locals
 * @param {string} string - The attribute name to create an attribute call for.
 * @returns {string}
 */`,meta:{range:[4188,4285],filename:"index.js",lineno:88,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000390",name:"attrTitle",type:"ArrowFunctionExpression"}},description:"Converts an attribute name into an attribute call for that attribute. Converts `_max` attribute names to the proper attribute call syntax for `_max` attributes (see second example). If called from inside the block of a {@link fieldset} mixin, will also add the appropriate information for calling a repeating attribute.",memberof:"Locals",params:[{type:{names:["string"]},description:"The attribute name to create an attribute call for.",name:"string"}],returns:[{type:{names:["string"]}}],name:"attrTitle",longname:"Locals.attrTitle",kind:"function",scope:"static"},{comment:`/**
 * Converts a string to a valid snake_case attribute name or kebab-case action button name.
 * @memberof Locals
 * @param {string} string - The string to adapt
 * @returns {string}
 */`,meta:{range:[4483,4840],filename:"index.js",lineno:96,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000410",name:"attrName",type:"ArrowFunctionExpression"},vars:{sysPrefix:"Locals.attrName~sysPrefix",tempString:"Locals.attrName~tempString"}},description:"Converts a string to a valid snake_case attribute name or kebab-case action button name.",memberof:"Locals",params:[{type:{names:["string"]},description:"The string to adapt",name:"string"}],returns:[{type:{names:["string"]}}],name:"attrName",longname:"Locals.attrName",kind:"function",scope:"static"},{comment:"",meta:{range:[4516,4545],filename:"index.js",lineno:97,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000416",name:"sysPrefix",type:"CallExpression",value:""}},undocumented:!0,name:"sysPrefix",longname:"Locals.attrName~sysPrefix",kind:"constant",memberof:"Locals.attrName",scope:"inner",params:[]},{comment:"",meta:{range:[4553,4697],filename:"index.js",lineno:98,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000421",name:"tempString",type:"CallExpression",value:""}},undocumented:!0,name:"tempString",longname:"Locals.attrName~tempString",kind:"member",memberof:"Locals.attrName",scope:"inner",params:[]},{comment:"",meta:{range:[4720,4812],filename:"index.js",lineno:104,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000451",name:"tempString",type:"CallExpression",funcscope:"Locals.attrName",value:"",paramnames:[]}},undocumented:!0,name:"tempString",longname:"Locals.attrName~tempString",kind:"member",memberof:"Locals.attrName",scope:"inner"},{comment:`/**
 * Converts an ability name into an ability call for that attribute. If called from inside the block of a {@link fieldset} mixin, will also add the appropriate information for calling a repeating attribute.
 * @memberof Locals
 * @param {string} string - The ability name to create a call for.
 * @returns {string}
 */`,meta:{range:[5172,5247],filename:"index.js",lineno:116,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000469",name:"buttonTitle",type:"ArrowFunctionExpression"}},description:"Converts an ability name into an ability call for that attribute. If called from inside the block of a {@link fieldset} mixin, will also add the appropriate information for calling a repeating attribute.",memberof:"Locals",params:[{type:{names:["string"]},description:"The ability name to create a call for.",name:"string"}],returns:[{type:{names:["string"]}}],name:"buttonTitle",longname:"Locals.buttonTitle",kind:"function",scope:"static"},{comment:`/**
 * Replaces spaces in a string with underscores (\`_\`).
 * @memberof Locals
 * @param {string} string - The string to work on
 * @returns {string}
 */`,meta:{range:[5412,5466],filename:"index.js",lineno:124,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000484",name:"replaceSpaces",type:"ArrowFunctionExpression"}},description:"Replaces spaces in a string with underscores (`_`).",memberof:"Locals",params:[{type:{names:["string"]},description:"The string to work on",name:"string"}],returns:[{type:{names:["string"]}}],name:"replaceSpaces",longname:"Locals.replaceSpaces",kind:"function",scope:"static"},{comment:`/**
 * Escapes problem characters in a string for use as a regex.
 * @memberof Locals
 * @param {string} string - The string to work on
 * @returns {string}
 */`,meta:{range:[5636,5705],filename:"index.js",lineno:132,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000495",name:"replaceProblems",type:"ArrowFunctionExpression"}},description:"Escapes problem characters in a string for use as a regex.",memberof:"Locals",params:[{type:{names:["string"]},description:"The string to work on",name:"string"}],returns:[{type:{names:["string"]}}],name:"replaceProblems",longname:"Locals.replaceProblems",kind:"function",scope:"static"},{comment:`/**
 * Capitalizes the first letter of words in a string.
 * @memberof Locals
 * @param {string} string 
 * @returns {string}
 */`,meta:{range:[5844,5936],filename:"index.js",lineno:140,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000506",name:"capitalize",type:"ArrowFunctionExpression"},vars:{"":null}},description:"Capitalizes the first letter of words in a string.",memberof:"Locals",params:[{type:{names:["string"]},name:"string"}],returns:[{type:{names:["string"]}}],name:"capitalize",longname:"Locals.capitalize",kind:"function",scope:"static"},{comment:`/**
 * Converts a string to a valid kebab-case action button name
 * @memberof Locals
 * @param {string} name - The string to convert to an action button name
 * @returns {string}
 */`,meta:{range:[6129,6189],filename:"index.js",lineno:148,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000522",name:"actionButtonName",type:"ArrowFunctionExpression"}},description:"Converts a string to a valid kebab-case action button name",memberof:"Locals",params:[{type:{names:["string"]},description:"The string to convert to an action button name",name:"name"}],returns:[{type:{names:["string"]}}],name:"actionButtonName",longname:"Locals.actionButtonName",kind:"function",scope:"static"},{comment:`/**
 * Converts the name of an action button in a roller construction to the controlling attribute name.
 * @memberof Locals
 * @param {string} name - The string to convert
 * @returns {string}
 */`,meta:{range:[6395,6471],filename:"index.js",lineno:155,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000536",name:"actionInputName",type:"ArrowFunctionExpression"}},description:"Converts the name of an action button in a roller construction to the controlling attribute name.",memberof:"Locals",params:[{type:{names:["string"]},description:"The string to convert",name:"name"}],returns:[{type:{names:["string"]}}],name:"actionInputName",longname:"Locals.actionInputName",kind:"function",scope:"static"},{comment:`/**
 * Converts a title back to an attribute name
 * @param {string} string - The string to convert to an attribute name
 * @memberof Locals
 * @returns {string}
 */`,meta:{range:[6646,6703],filename:"index.js",lineno:163,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000550",name:"titleToName",type:"ArrowFunctionExpression"}},description:"Converts a title back to an attribute name",params:[{type:{names:["string"]},description:"The string to convert to an attribute name",name:"string"}],memberof:"Locals",returns:[{type:{names:["string"]}}],name:"titleToName",longname:"Locals.titleToName",kind:"function",scope:"static"},{comment:`/**
 * Adds an item to a designated array property of \`varObjects\` for tracking.
 * @param {any} item - 
 * @param {string} arrName - Name of the array to manipulate
 */`,meta:{range:[6882,7056],filename:"index.js",lineno:170,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000561",name:"addIfUnique",type:"ArrowFunctionExpression"},vars:{"varObjects[undefined]":"Locals.varObjects.undefined]"}},description:"Adds an item to a designated array property of `varObjects` for tracking.",params:[{type:{names:["any"]},description:"-",name:"item"},{type:{names:["string"]},description:"Name of the array to manipulate",name:"arrName"}],name:"addIfUnique",longname:"addIfUnique",kind:"function",scope:"global"},{comment:"",meta:{range:[6918,6965],filename:"index.js",lineno:171,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000568",name:"varObjects[undefined]",type:"LogicalExpression",value:"",paramnames:[]}},undocumented:!0,name:"undefined]",longname:"Locals.varObjects.undefined]",kind:"member",memberof:"Locals.varObjects",scope:"static"},{comment:`/**
 * Stores the attribute in the cascades object.
 * @param {object} element - Object describing the element
 */`,meta:{range:[7180,9990],filename:"index.js",lineno:181,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000598",name:"storeTrigger",type:"FunctionExpression"},vars:{trigger:"storeTrigger~trigger",namePrefix:"storeTrigger~namePrefix",typeDefs:"storeTrigger~typeDefs",eventTypes:"storeTrigger~eventTypes",elementName:"storeTrigger~elementName","trigger.name":"storeTrigger~trigger.name",cascName:"storeTrigger~cascName",match:"storeTrigger~match",undefined:null,eventType:"storeTrigger~eventType","trigger.listener":"storeTrigger~trigger.listener","trigger.listenerFunc":"storeTrigger~trigger.listenerFunc","trigger.type":"storeTrigger~trigger.type","trigger.defaultValue":"storeTrigger~trigger.defaultValue","trigger.triggeredFuncs":"storeTrigger~trigger.triggeredFuncs","trigger.affects":"storeTrigger~trigger.affects","":null,"varObjects.cascades[undefined]":"Locals.varObjects.cascades[undefined]","varObjects.cascades[undefined].triggeredFuncs":"Locals.varObjects.cascades[undefined].triggeredFuncs","varObjects.cascades[undefined].affects":"Locals.varObjects.cascades[undefined].affects","varObjects.cascades[undefined].calculation":"Locals.varObjects.cascades[undefined].calculation","varObjects.cascades[undefined].listener":"Locals.varObjects.cascades[undefined].listener","varObjects.cascades[undefined].listenerFunc":"Locals.varObjects.cascades[undefined].listenerFunc"}},description:"Stores the attribute in the cascades object.",params:[{type:{names:["object"]},description:"Object describing the element",name:"element"}],name:"storeTrigger",longname:"storeTrigger",kind:"function",scope:"global"},{comment:"",meta:{range:[7220,7251],filename:"index.js",lineno:182,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000604",name:"trigger",type:"LogicalExpression",value:""}},undocumented:!0,name:"trigger",longname:"storeTrigger~trigger",kind:"member",memberof:"storeTrigger",scope:"inner",params:[]},{comment:"",meta:{range:[7261,7341],filename:"index.js",lineno:183,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000612",name:"namePrefix",type:"ObjectExpression",value:'{"roll":"roll_","action":"act_","fieldset":"fieldset_"}'}},undocumented:!0,name:"namePrefix",longname:"storeTrigger~namePrefix",kind:"constant",memberof:"storeTrigger",scope:"inner",params:[]},{comment:"",meta:{range:[7280,7292],filename:"index.js",lineno:184,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000615",name:"roll",type:"Literal",value:"roll_"}},undocumented:!0,name:"roll",longname:"storeTrigger~namePrefix.roll",kind:"member",memberof:"storeTrigger~namePrefix",scope:"static"},{comment:"",meta:{range:[7298,7311],filename:"index.js",lineno:185,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000617",name:"action",type:"Literal",value:"act_"}},undocumented:!0,name:"action",longname:"storeTrigger~namePrefix.action",kind:"member",memberof:"storeTrigger~namePrefix",scope:"static"},{comment:"",meta:{range:[7317,7337],filename:"index.js",lineno:186,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000619",name:"fieldset",type:"Literal",value:"fieldset_"}},undocumented:!0,name:"fieldset",longname:"storeTrigger~namePrefix.fieldset",kind:"member",memberof:"storeTrigger~namePrefix",scope:"static"},{comment:"",meta:{range:[7351,7450],filename:"index.js",lineno:188,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000622",name:"typeDefs",type:"ObjectExpression",value:'{"select":"","radio":0,"checkbox":0,"number":0,"text":"","span":""}'}},undocumented:!0,name:"typeDefs",longname:"storeTrigger~typeDefs",kind:"constant",memberof:"storeTrigger",scope:"inner",params:[]},{comment:"",meta:{range:[7368,7377],filename:"index.js",lineno:189,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000625",name:"select",type:"Literal",value:""}},undocumented:!0,name:"select",longname:"storeTrigger~typeDefs.select",kind:"member",memberof:"storeTrigger~typeDefs",scope:"static"},{comment:"",meta:{range:[7383,7390],filename:"index.js",lineno:190,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000627",name:"radio",type:"Literal",value:0}},undocumented:!0,name:"radio",longname:"storeTrigger~typeDefs.radio",kind:"member",memberof:"storeTrigger~typeDefs",scope:"static"},{comment:"",meta:{range:[7396,7406],filename:"index.js",lineno:191,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000629",name:"checkbox",type:"Literal",value:0}},undocumented:!0,name:"checkbox",longname:"storeTrigger~typeDefs.checkbox",kind:"member",memberof:"storeTrigger~typeDefs",scope:"static"},{comment:"",meta:{range:[7412,7420],filename:"index.js",lineno:192,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000631",name:"number",type:"Literal",value:0}},undocumented:!0,name:"number",longname:"storeTrigger~typeDefs.number",kind:"member",memberof:"storeTrigger~typeDefs",scope:"static"},{comment:"",meta:{range:[7426,7433],filename:"index.js",lineno:193,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000633",name:"text",type:"Literal",value:""}},undocumented:!0,name:"text",longname:"storeTrigger~typeDefs.text",kind:"member",memberof:"storeTrigger~typeDefs",scope:"static"},{comment:"",meta:{range:[7439,7446],filename:"index.js",lineno:194,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000635",name:"span",type:"Literal",value:""}},undocumented:!0,name:"span",longname:"storeTrigger~typeDefs.span",kind:"member",memberof:"storeTrigger~typeDefs",scope:"static"},{comment:"",meta:{range:[7460,7542],filename:"index.js",lineno:196,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000638",name:"eventTypes",type:"ObjectExpression",value:'{"roll":"clicked","action":"clicked","fieldset":"remove"}'}},undocumented:!0,name:"eventTypes",longname:"storeTrigger~eventTypes",kind:"constant",memberof:"storeTrigger",scope:"inner",params:[]},{comment:"",meta:{range:[7479,7493],filename:"index.js",lineno:197,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000641",name:"roll",type:"Literal",value:"clicked"}},undocumented:!0,name:"roll",longname:"storeTrigger~eventTypes.roll",kind:"member",memberof:"storeTrigger~eventTypes",scope:"static"},{comment:"",meta:{range:[7499,7515],filename:"index.js",lineno:198,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000643",name:"action",type:"Literal",value:"clicked"}},undocumented:!0,name:"action",longname:"storeTrigger~eventTypes.action",kind:"member",memberof:"storeTrigger~eventTypes",scope:"static"},{comment:"",meta:{range:[7521,7538],filename:"index.js",lineno:199,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000645",name:"fieldset",type:"Literal",value:"remove"}},undocumented:!0,name:"fieldset",longname:"storeTrigger~eventTypes.fieldset",kind:"member",memberof:"storeTrigger~eventTypes",scope:"static"},{comment:"",meta:{range:[7550,7629],filename:"index.js",lineno:201,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000648",name:"elementName",type:"ConditionalExpression",value:""}},undocumented:!0,name:"elementName",longname:"storeTrigger~elementName",kind:"member",memberof:"storeTrigger",scope:"inner",params:[]},{comment:"",meta:{range:[7633,7678],filename:"index.js",lineno:204,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000663",name:"trigger.name",type:"CallExpression",funcscope:"storeTrigger",value:"",paramnames:[]}},undocumented:!0,name:"name",longname:"storeTrigger~trigger.name",kind:"member",memberof:"storeTrigger~trigger",scope:"static"},{comment:"",meta:{range:[7686,7752],filename:"index.js",lineno:205,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000674",name:"cascName",type:"TemplateLiteral",value:""}},undocumented:!0,name:"cascName",longname:"storeTrigger~cascName",kind:"member",memberof:"storeTrigger",scope:"inner",params:[]},{comment:"",meta:{range:[7760,7818],filename:"index.js",lineno:206,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000691",name:"match",type:"CallExpression",value:""}},undocumented:!0,name:"match",longname:"storeTrigger~match",kind:"member",memberof:"storeTrigger",scope:"inner",params:[]},{comment:"",meta:{range:[7878,7926],filename:"index.js",lineno:208,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000710",name:"eventType",type:"LogicalExpression",value:""}},undocumented:!0,name:"eventType",longname:"storeTrigger~eventType",kind:"member",memberof:"storeTrigger",scope:"inner",params:[]},{comment:"",meta:{range:[8090,8183],filename:"index.js",lineno:211,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000749",name:"trigger.listener",type:"LogicalExpression",funcscope:"storeTrigger",value:"",paramnames:[]}},undocumented:!0,name:"listener",longname:"storeTrigger~trigger.listener",kind:"member",memberof:"storeTrigger~trigger",scope:"static"},{comment:"",meta:{range:[8191,8251],filename:"index.js",lineno:212,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000772",name:"trigger.listenerFunc",type:"LogicalExpression",funcscope:"storeTrigger",value:"",paramnames:[]}},undocumented:!0,name:"listenerFunc",longname:"storeTrigger~trigger.listenerFunc",kind:"member",memberof:"storeTrigger~trigger",scope:"static"},{comment:"",meta:{range:[8263,8290],filename:"index.js",lineno:214,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000782",name:"trigger.type",type:"MemberExpression",funcscope:"storeTrigger",value:"element.type",paramnames:[]}},undocumented:!0,name:"type",longname:"storeTrigger~trigger.type",kind:"member",memberof:"storeTrigger~trigger",scope:"static"},{comment:"",meta:{range:[8333,8699],filename:"index.js",lineno:216,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000798",name:"trigger.defaultValue",type:"ConditionalExpression",funcscope:"storeTrigger",value:"",paramnames:[]}},undocumented:!0,name:"defaultValue",longname:"storeTrigger~trigger.defaultValue",kind:"member",memberof:"storeTrigger~trigger",scope:"static"},{comment:"",meta:{range:[8707,8760],filename:"index.js",lineno:225,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000849",name:"trigger.triggeredFuncs",type:"LogicalExpression",funcscope:"storeTrigger",value:"",paramnames:[]}},undocumented:!0,name:"triggeredFuncs",longname:"storeTrigger~trigger.triggeredFuncs",kind:"member",memberof:"storeTrigger~trigger",scope:"static"},{comment:"",meta:{range:[8797,8867],filename:"index.js",lineno:227,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000864",name:"trigger.affects",type:"CallExpression",funcscope:"storeTrigger",value:"",paramnames:[]}},undocumented:!0,name:"affects",longname:"storeTrigger~trigger.affects",kind:"member",memberof:"storeTrigger~trigger",scope:"static"},{comment:"",meta:{range:[8890,8910],filename:"index.js",lineno:229,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000881",name:"trigger.affects",type:"ArrayExpression",funcscope:"storeTrigger",value:"[]",paramnames:[]}},undocumented:!0,name:"affects",longname:"storeTrigger~trigger.affects",kind:"member",memberof:"storeTrigger~trigger",scope:"static"},{comment:"",meta:{range:[8930,8974],filename:"index.js",lineno:232,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000887",name:"varObjects.cascades[undefined]",type:"ObjectExpression",value:"{}",paramnames:[]}},undocumented:!0,name:"cascades[undefined]",longname:"Locals.varObjects.cascades[undefined]",kind:"member",memberof:"Locals.varObjects",scope:"static"},{comment:"",meta:{range:[9048,9272],filename:"index.js",lineno:235,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000910",name:"varObjects.cascades[undefined].triggeredFuncs",type:"ConditionalExpression",value:"",paramnames:[]}},undocumented:!0,name:"cascades[undefined].triggeredFuncs",longname:"Locals.varObjects.cascades[undefined].triggeredFuncs",kind:"member",memberof:"Locals.varObjects",scope:"static"},{comment:"",meta:{range:[9280,9470],filename:"index.js",lineno:238,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000947",name:"varObjects.cascades[undefined].affects",type:"ConditionalExpression",value:"",paramnames:[]}},undocumented:!0,name:"cascades[undefined].affects",longname:"Locals.varObjects.cascades[undefined].affects",kind:"member",memberof:"Locals.varObjects",scope:"static"},{comment:"",meta:{range:[9478,9595],filename:"index.js",lineno:241,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100000984",name:"varObjects.cascades[undefined].calculation",type:"LogicalExpression",value:"",paramnames:[]}},undocumented:!0,name:"cascades[undefined].calculation",longname:"Locals.varObjects.cascades[undefined].calculation",kind:"member",memberof:"Locals.varObjects",scope:"static"},{comment:"",meta:{range:[9684,9841],filename:"index.js",lineno:245,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001017",name:"varObjects.cascades[undefined].listener",type:"LogicalExpression",value:"",paramnames:[]}},undocumented:!0,name:"cascades[undefined].listener",longname:"Locals.varObjects.cascades[undefined].listener",kind:"member",memberof:"Locals.varObjects",scope:"static"},{comment:"",meta:{range:[9849,9977],filename:"index.js",lineno:246,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001052",name:"varObjects.cascades[undefined].listenerFunc",type:"LogicalExpression",value:"",paramnames:[]}},undocumented:!0,name:"cascades[undefined].listenerFunc",longname:"Locals.varObjects.cascades[undefined].listenerFunc",kind:"member",memberof:"Locals.varObjects",scope:"static"},{comment:`/**
 * Finds the details for a specific repeating section
 * @param {string} section - The name of the repeating section
 * @returns {object}
 */`,meta:{range:[10145,10274],filename:"index.js",lineno:256,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001074",name:"getSectionDetails",type:"FunctionExpression"},vars:{"":null}},description:"Finds the details for a specific repeating section",params:[{type:{names:["string"]},description:"The name of the repeating section",name:"section"}],returns:[{type:{names:["object"]}}],name:"getSectionDetails",longname:"getSectionDetails",kind:"function",scope:"global"},{comment:"/**\n * Creates an object to store information about a repating section in `varObjects` and pushes it to `repeatingSectionDetails`.\n * @param {string} section - The name of the repeating section\n */",meta:{range:[10481,10633],filename:"index.js",lineno:264,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001096",name:"createFieldsetObj",type:"FunctionExpression"}},description:"Creates an object to store information about a repating section in `varObjects` and pushes it to `repeatingSectionDetails`.",params:[{type:{names:["string"]},description:"The name of the repeating section",name:"section"}],name:"createFieldsetObj",longname:"createFieldsetObj",kind:"function",scope:"global"},{comment:"",meta:{range:[10600,10607],filename:"index.js",lineno:266,columnno:45,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001114",name:"section",type:"Identifier",value:"section"}},undocumented:!0,name:"section",longname:"section",kind:"member",scope:"global"},{comment:"",meta:{range:[10608,10617],filename:"index.js",lineno:266,columnno:53,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001116",name:"fields",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"fields",longname:"fields",kind:"member",scope:"global"},{comment:`/**
 * Adds info on an attribute to an existing repeating section detail object.
 * @param {object} obj - Object describing the attribute element being created
 */`,meta:{range:[10806,11106],filename:"index.js",lineno:274,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001120",name:"addFieldToFieldsetObj",type:"FunctionExpression"},vars:{section:"addFieldToFieldsetObj~section",sectionDetails:"addFieldToFieldsetObj~sectionDetails",name:"addFieldToFieldsetObj~name"}},description:"Adds info on an attribute to an existing repeating section detail object.",params:[{type:{names:["object"]},description:"Object describing the attribute element being created",name:"obj"}],name:"addFieldToFieldsetObj",longname:"addFieldToFieldsetObj",kind:"function",scope:"global"},{comment:"",meta:{range:[10851,10901],filename:"index.js",lineno:275,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001126",name:"section",type:"CallExpression",value:""}},undocumented:!0,name:"section",longname:"addFieldToFieldsetObj~section",kind:"member",memberof:"addFieldToFieldsetObj",scope:"inner",params:[]},{comment:"",meta:{range:[10909,10952],filename:"index.js",lineno:276,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001137",name:"sectionDetails",type:"CallExpression",value:""}},undocumented:!0,name:"sectionDetails",longname:"addFieldToFieldsetObj~sectionDetails",kind:"member",memberof:"addFieldToFieldsetObj",scope:"inner",params:[]},{comment:"",meta:{range:[10960,10996],filename:"index.js",lineno:277,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001143",name:"name",type:"CallExpression",value:""}},undocumented:!0,name:"name",longname:"addFieldToFieldsetObj~name",kind:"member",memberof:"addFieldToFieldsetObj",scope:"inner",params:[]},{comment:`/**
 * Converts a k-scaffold element object with a trigger to an element object without k-scaffold specific information.
 * @param {object} obj - The object to convert
 * @returns {object}
 */`,meta:{range:[11308,11410],filename:"index.js",lineno:288,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001175",name:"makeElementObj",type:"FunctionExpression"},vars:{newObj:"makeElementObj~newObj"}},description:"Converts a k-scaffold element object with a trigger to an element object without k-scaffold specific information.",params:[{type:{names:["object"]},description:"The object to convert",name:"obj"}],returns:[{type:{names:["object"]}}],name:"makeElementObj",longname:"makeElementObj",kind:"function",scope:"global"},{comment:"",meta:{range:[11348,11365],filename:"index.js",lineno:289,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001181",name:"newObj",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"newObj",longname:"makeElementObj~newObj",kind:"constant",memberof:"makeElementObj",scope:"inner",params:[]},{comment:"",meta:{range:[11413,11733],filename:"index.js",lineno:294,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001194",name:"module.exports",type:"ObjectExpression",value:'{"varObjects":"","k":"","resetObjs":"","checkKUse":"","getSystemPrefix":"","setSystemPrefix":"","attrTitle":"","attrName":"","buttonTitle":"","replaceSpaces":"","replaceProblems":"","capitalize":"","actionButtonName":"","actionInputName":"","titleToName":"","addIfUnique":"","storeTrigger":"","getSectionDetails":"","createFieldsetObj":"","addFieldToFieldsetObj":"","makeElementObj":""}',paramnames:[]}},undocumented:!0,name:"exports",longname:"module.exports",kind:"member",memberof:"module",scope:"static"},{comment:"",meta:{range:[11432,11442],filename:"index.js",lineno:294,columnno:19,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001199",name:"varObjects",type:"Identifier",value:"varObjects"}},undocumented:!0,name:"varObjects",longname:"module.exports.varObjects",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11444,11445],filename:"index.js",lineno:294,columnno:31,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001201",name:"k",type:"Identifier",value:"k"}},undocumented:!0,name:"k",longname:"module.exports.k",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11447,11456],filename:"index.js",lineno:294,columnno:34,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001203",name:"resetObjs",type:"Identifier",value:"resetObjs"}},undocumented:!0,name:"resetObjs",longname:"module.exports.resetObjs",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11458,11467],filename:"index.js",lineno:294,columnno:45,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001205",name:"checkKUse",type:"Identifier",value:"checkKUse"}},undocumented:!0,name:"checkKUse",longname:"module.exports.checkKUse",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11469,11484],filename:"index.js",lineno:294,columnno:56,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001207",name:"getSystemPrefix",type:"Identifier",value:"getSystemPrefix"}},undocumented:!0,name:"getSystemPrefix",longname:"module.exports.getSystemPrefix",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11486,11501],filename:"index.js",lineno:294,columnno:73,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001209",name:"setSystemPrefix",type:"Identifier",value:"setSystemPrefix"}},undocumented:!0,name:"setSystemPrefix",longname:"module.exports.setSystemPrefix",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11503,11512],filename:"index.js",lineno:294,columnno:90,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001211",name:"attrTitle",type:"Identifier",value:"attrTitle"}},undocumented:!0,name:"attrTitle",longname:"module.exports.attrTitle",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11514,11522],filename:"index.js",lineno:294,columnno:101,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001213",name:"attrName",type:"Identifier",value:"attrName"}},undocumented:!0,name:"attrName",longname:"module.exports.attrName",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11524,11535],filename:"index.js",lineno:294,columnno:111,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001215",name:"buttonTitle",type:"Identifier",value:"buttonTitle"}},undocumented:!0,name:"buttonTitle",longname:"module.exports.buttonTitle",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11537,11550],filename:"index.js",lineno:294,columnno:124,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001217",name:"replaceSpaces",type:"Identifier",value:"replaceSpaces"}},undocumented:!0,name:"replaceSpaces",longname:"module.exports.replaceSpaces",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11552,11567],filename:"index.js",lineno:294,columnno:139,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001219",name:"replaceProblems",type:"Identifier",value:"replaceProblems"}},undocumented:!0,name:"replaceProblems",longname:"module.exports.replaceProblems",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11569,11579],filename:"index.js",lineno:294,columnno:156,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001221",name:"capitalize",type:"Identifier",value:"capitalize"}},undocumented:!0,name:"capitalize",longname:"module.exports.capitalize",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11581,11597],filename:"index.js",lineno:294,columnno:168,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001223",name:"actionButtonName",type:"Identifier",value:"actionButtonName"}},undocumented:!0,name:"actionButtonName",longname:"module.exports.actionButtonName",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11599,11614],filename:"index.js",lineno:294,columnno:186,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001225",name:"actionInputName",type:"Identifier",value:"actionInputName"}},undocumented:!0,name:"actionInputName",longname:"module.exports.actionInputName",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11616,11627],filename:"index.js",lineno:294,columnno:203,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001227",name:"titleToName",type:"Identifier",value:"titleToName"}},undocumented:!0,name:"titleToName",longname:"module.exports.titleToName",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11629,11640],filename:"index.js",lineno:294,columnno:216,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001229",name:"addIfUnique",type:"Identifier",value:"addIfUnique"}},undocumented:!0,name:"addIfUnique",longname:"module.exports.addIfUnique",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11642,11654],filename:"index.js",lineno:294,columnno:229,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001231",name:"storeTrigger",type:"Identifier",value:"storeTrigger"}},undocumented:!0,name:"storeTrigger",longname:"module.exports.storeTrigger",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11656,11673],filename:"index.js",lineno:294,columnno:243,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001233",name:"getSectionDetails",type:"Identifier",value:"getSectionDetails"}},undocumented:!0,name:"getSectionDetails",longname:"module.exports.getSectionDetails",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11675,11692],filename:"index.js",lineno:294,columnno:262,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001235",name:"createFieldsetObj",type:"Identifier",value:"createFieldsetObj"}},undocumented:!0,name:"createFieldsetObj",longname:"module.exports.createFieldsetObj",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11694,11715],filename:"index.js",lineno:294,columnno:281,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001237",name:"addFieldToFieldsetObj",type:"Identifier",value:"addFieldToFieldsetObj"}},undocumented:!0,name:"addFieldToFieldsetObj",longname:"module.exports.addFieldToFieldsetObj",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[11717,11731],filename:"index.js",lineno:294,columnno:304,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render/locals",code:{id:"astnode100001239",name:"makeElementObj",type:"Identifier",value:"makeElementObj"}},undocumented:!0,name:"makeElementObj",longname:"module.exports.makeElementObj",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[6,28],filename:"outputPug.js",lineno:1,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001244",name:"path",type:"CallExpression",value:""}},undocumented:!0,name:"path",longname:"path",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[36,63],filename:"outputPug.js",lineno:2,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001250",name:"fs",type:"CallExpression",value:""}},undocumented:!0,name:"fs",longname:"fs",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[71,95],filename:"outputPug.js",lineno:3,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001256",name:"jsdom",type:"CallExpression",value:""}},undocumented:!0,name:"jsdom",longname:"jsdom",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[105,110],filename:"outputPug.js",lineno:4,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001264",name:"JSDOM",type:"Identifier",value:"JSDOM"}},undocumented:!0,name:"JSDOM",longname:"JSDOM",kind:"member",scope:"global"},{comment:"",meta:{range:[129,167],filename:"outputPug.js",lineno:6,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001268",name:"outputTests",type:"CallExpression",value:""}},undocumented:!0,name:"outputTests",longname:"outputTests",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[176,1960],filename:"outputPug.js",lineno:8,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001274",name:"outputPug",type:"ArrowFunctionExpression"},vars:{destDir:"outputPug~destDir",dom:"outputPug~dom",undefined:null,i18nSubTypes:"outputPug~i18nSubTypes",translations:"outputPug~translations","":null,transPath:"outputPug~transPath",currTranslation:"outputPug~currTranslation",toUse:"outputPug~toUse"}},undocumented:!0,name:"outputPug",longname:"outputPug",kind:"function",scope:"global",params:[],async:!0},{comment:"",meta:{range:[269,304],filename:"outputPug.js",lineno:10,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001286",name:"destDir",type:"CallExpression",value:""}},undocumented:!0,name:"destDir",longname:"outputPug~destDir",kind:"constant",memberof:"outputPug",scope:"inner",params:[]},{comment:"",meta:{range:[332,346],filename:"outputPug.js",lineno:11,columnno:26,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001301",name:"recursive",type:"Literal",value:!0}},undocumented:!0,name:"recursive",longname:"recursive",kind:"member",scope:"global"},{comment:"",meta:{range:[447,468],filename:"outputPug.js",lineno:14,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001321",name:"dom",type:"NewExpression",value:""}},undocumented:!0,name:"dom",longname:"outputPug~dom",kind:"constant",memberof:"outputPug",scope:"inner",params:[]},{comment:"",meta:{range:[480,486],filename:"outputPug.js",lineno:15,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001329",name:"window",type:"Identifier",value:"window"}},undocumented:!0,name:"window",longname:"window",kind:"member",scope:"global"},{comment:"",meta:{range:[506,514],filename:"outputPug.js",lineno:16,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001335",name:"document",type:"Identifier",value:"document"}},undocumented:!0,name:"document",longname:"document",kind:"member",scope:"global"},{comment:"",meta:{range:[673,773],filename:"outputPug.js",lineno:21,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001348",name:"i18nSubTypes",type:"ArrayExpression",value:'["","-title","-placeholder","-label","-aria-label","-alt","-vars","-dynamic","-list"]'}},undocumented:!0,name:"i18nSubTypes",longname:"outputPug~i18nSubTypes",kind:"constant",memberof:"outputPug",scope:"inner",params:[]},{comment:"",meta:{range:[783,1602],filename:"outputPug.js",lineno:22,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001361",name:"translations",type:"CallExpression",value:""}},undocumented:!0,name:"translations",longname:"outputPug~translations",kind:"constant",memberof:"outputPug",scope:"inner",params:[]},{comment:"",meta:{range:[843,908],filename:"outputPug.js",lineno:23,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001372",name:"transElems",type:"ArrayExpression",value:'[""]'}},undocumented:!0,name:"transElems",longname:"<anonymous>~transElems",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[920,952],filename:"outputPug.js",lineno:24,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001385",name:"baseType",type:"CallExpression",value:""}},undocumented:!0,name:"baseType",longname:"<anonymous>~baseType",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[1027,1039],filename:"outputPug.js",lineno:27,columnno:14,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001407",name:"listArr",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"listArr",longname:"<anonymous>~listArr",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[1055,1112],filename:"outputPug.js",lineno:28,columnno:14,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001411",name:"items",type:"ArrayExpression",value:'[""]'}},undocumented:!0,name:"items",longname:"<anonymous>~items",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[1277,1353],filename:"outputPug.js",lineno:34,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001444",name:"memo[undefined]",type:"CallExpression",value:"",paramnames:[]}},undocumented:!0,name:"memo[undefined]",longname:"memo[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[1376,1559],filename:"outputPug.js",lineno:36,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001470",name:"memo[undefined]",type:"LogicalExpression",value:"",paramnames:[]}},undocumented:!0,name:"memo[undefined]",longname:"memo[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[1634,1704],filename:"outputPug.js",lineno:47,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001505",name:"transPath",type:"CallExpression",value:""}},undocumented:!0,name:"transPath",longname:"outputPug~transPath",kind:"constant",memberof:"outputPug",scope:"inner",params:[]},{comment:"",meta:{range:[1716,1833],filename:"outputPug.js",lineno:48,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001518",name:"currTranslation",type:"AwaitExpression",value:""}},undocumented:!0,name:"currTranslation",longname:"outputPug~currTranslation",kind:"constant",memberof:"outputPug",scope:"inner",params:[]},{comment:"",meta:{range:[1845,1889],filename:"outputPug.js",lineno:51,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001546",name:"toUse",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"toUse",longname:"outputPug~toUse",kind:"constant",memberof:"outputPug",scope:"inner",params:[]},{comment:"",meta:{range:[1963,1989],filename:"outputPug.js",lineno:56,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001568",name:"module.exports",type:"Identifier",value:"outputPug",paramnames:[]}},undocumented:!0,name:"exports",longname:"module.exports",kind:"member",memberof:"module",scope:"static"},{comment:"",meta:{range:[6,28],filename:"outputTests.js",lineno:1,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001576",name:"path",type:"CallExpression",value:""}},undocumented:!0,name:"path",longname:"path",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[36,63],filename:"outputTests.js",lineno:2,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001582",name:"fs",type:"CallExpression",value:""}},undocumented:!0,name:"fs",longname:"fs",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[72,2030],filename:"outputTests.js",lineno:4,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001588",name:"outputTests",type:"ArrowFunctionExpression"},vars:{mockPath:"outputTests~mockPath",mockScafPath:"outputTests~mockScafPath",scriptContent:"outputTests~scriptContent",repeatingAttributes:"outputTests~repeatingAttributes","":null,attributes:"outputTests~attributes",scriptPrepend:"outputTests~scriptPrepend",scriptAppend:"outputTests~scriptAppend",testContent:"outputTests~testContent"}},undocumented:!0,name:"outputTests",longname:"outputTests",kind:"function",scope:"global",params:[],async:!0},{comment:"",meta:{range:[128,187],filename:"outputTests.js",lineno:5,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001595",name:"mockPath",type:"CallExpression",value:""}},undocumented:!0,name:"mockPath",longname:"outputTests~mockPath",kind:"constant",memberof:"outputTests",scope:"inner",params:[]},{comment:"",meta:{range:[197,266],filename:"outputTests.js",lineno:6,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001604",name:"mockScafPath",type:"CallExpression",value:""}},undocumented:!0,name:"mockScafPath",longname:"outputTests~mockScafPath",kind:"constant",memberof:"outputTests",scope:"inner",params:[]},{comment:"",meta:{range:[276,335],filename:"outputTests.js",lineno:7,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001613",name:"scriptContent",type:"ChainExpression",value:""}},undocumented:!0,name:"scriptContent",longname:"outputTests~scriptContent",kind:"constant",memberof:"outputTests",scope:"inner",params:[]},{comment:"",meta:{range:[374,587],filename:"outputTests.js",lineno:9,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001621",name:"repeatingAttributes",type:"CallExpression",value:""}},undocumented:!0,name:"repeatingAttributes",longname:"outputTests~repeatingAttributes",kind:"constant",memberof:"outputTests",scope:"inner",params:[]},{comment:"",meta:{range:[475,534],filename:"outputTests.js",lineno:10,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001638",name:"repAttr",type:"ArrayExpression",value:'[""]'}},undocumented:!0,name:"repAttr",longname:"<anonymous>~repAttr",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[597,1609],filename:"outputTests.js",lineno:14,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001658",name:"attributes",type:"CallExpression",value:""}},undocumented:!0,name:"attributes",longname:"outputTests~attributes",kind:"constant",memberof:"outputTests",scope:"inner",params:[]},{comment:"",meta:{range:[770,820],filename:"outputTests.js",lineno:17,columnno:14,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001688",name:"name",type:"CallExpression",value:""}},undocumented:!0,name:"name",longname:"<anonymous>~name",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[930,946],filename:"outputTests.js",lineno:21,columnno:14,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001719",name:"tag",type:"MemberExpression",value:"el.tagName"}},undocumented:!0,name:"tag",longname:"<anonymous>~tag",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[1051,1188],filename:"outputTests.js",lineno:24,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001730",name:"memo[undefined]",type:"LogicalExpression",value:"",paramnames:[]}},undocumented:!0,name:"memo[undefined]",longname:"memo[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[1301,1322],filename:"outputTests.js",lineno:31,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001750",name:"memo[undefined]",type:"MemberExpression",value:"el.value",paramnames:[]}},undocumented:!0,name:"memo[undefined]",longname:"memo[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[1425,1487],filename:"outputTests.js",lineno:35,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001765",name:"memo[undefined]",type:"ConditionalExpression",value:"",paramnames:[]}},undocumented:!0,name:"memo[undefined]",longname:"memo[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[1514,1557],filename:"outputTests.js",lineno:39,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001779",name:"memo[undefined]",type:"LogicalExpression",value:"",paramnames:[]}},undocumented:!0,name:"memo[undefined]",longname:"memo[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[1619,1756],filename:"outputTests.js",lineno:45,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001794",name:"scriptPrepend",type:"AwaitExpression",value:""}},undocumented:!0,name:"scriptPrepend",longname:"outputTests~scriptPrepend",kind:"constant",memberof:"outputTests",scope:"inner",params:[]},{comment:"",meta:{range:[1766,1819],filename:"outputTests.js",lineno:47,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001818",name:"scriptAppend",type:"AwaitExpression",value:""}},undocumented:!0,name:"scriptAppend",longname:"outputTests~scriptAppend",kind:"constant",memberof:"outputTests",scope:"inner",params:[]},{comment:"",meta:{range:[1829,1896],filename:"outputTests.js",lineno:48,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001828",name:"testContent",type:"TemplateLiteral",value:""}},undocumented:!0,name:"testContent",longname:"outputTests~testContent",kind:"constant",memberof:"outputTests",scope:"inner",params:[]},{comment:"",meta:{range:[1928,1942],filename:"outputTests.js",lineno:49,columnno:30,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001846",name:"recursive",type:"Literal",value:!0}},undocumented:!0,name:"recursive",longname:"recursive",kind:"member",scope:"global"},{comment:"",meta:{range:[2033,2061],filename:"outputTests.js",lineno:53,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001861",name:"module.exports",type:"Identifier",value:"outputTests",paramnames:[]}},undocumented:!0,name:"exports",longname:"module.exports",kind:"member",memberof:"module",scope:"static"},{comment:"",meta:{range:[6,33],filename:"processSheet.js",lineno:1,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001869",name:"fs",type:"CallExpression",value:""}},undocumented:!0,name:"fs",longname:"fs",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[42,72],filename:"processSheet.js",lineno:3,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001875",name:"kStatus",type:"CallExpression",value:""}},undocumented:!0,name:"kStatus",longname:"kStatus",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[80,120],filename:"processSheet.js",lineno:4,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001881",name:"resolvePaths",type:"CallExpression",value:""}},undocumented:!0,name:"resolvePaths",longname:"resolvePaths",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[128,164],filename:"processSheet.js",lineno:5,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001887",name:"renderSASS",type:"CallExpression",value:""}},undocumented:!0,name:"renderSASS",longname:"renderSASS",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[172,206],filename:"processSheet.js",lineno:6,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001893",name:"renderPug",type:"CallExpression",value:""}},undocumented:!0,name:"renderPug",longname:"renderPug",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[215,464],filename:"processSheet.js",lineno:8,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001899",name:"isSASS",type:"ArrowFunctionExpression"}},undocumented:!0,name:"isSASS",longname:"isSASS",kind:"function",scope:"global",params:[],async:!0},{comment:"",meta:{range:[232,237],filename:"processSheet.js",lineno:8,columnno:23,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001903",name:"entry",type:"Identifier",value:"entry"}},undocumented:!0,name:"entry",longname:"entry",kind:"member",scope:"global"},{comment:"",meta:{range:[238,254],filename:"processSheet.js",lineno:8,columnno:29,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001905",name:"source",type:"Identifier",value:"resSource"}},undocumented:!0,name:"source",longname:"source",kind:"member",scope:"global"},{comment:"",meta:{range:[255,274],filename:"processSheet.js",lineno:8,columnno:46,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001907",name:"destination",type:"Identifier",value:"resDest"}},undocumented:!0,name:"destination",longname:"destination",kind:"member",scope:"global"},{comment:"",meta:{range:[275,282],filename:"processSheet.js",lineno:8,columnno:66,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001909",name:"options",type:"Identifier",value:"options"}},undocumented:!0,name:"options",longname:"options",kind:"member",scope:"global"},{comment:"",meta:{range:[283,290],filename:"processSheet.js",lineno:8,columnno:74,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001911",name:"runSCSS",type:"Identifier",value:"runSCSS"}},undocumented:!0,name:"runSCSS",longname:"runSCSS",kind:"member",scope:"global"},{comment:"",meta:{range:[411,427],filename:"processSheet.js",lineno:11,columnno:23,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001938",name:"source",type:"Identifier",value:"resSource"}},undocumented:!0,name:"source",longname:"source",kind:"member",scope:"global"},{comment:"",meta:{range:[428,447],filename:"processSheet.js",lineno:11,columnno:40,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001940",name:"destination",type:"Identifier",value:"resDest"}},undocumented:!0,name:"destination",longname:"destination",kind:"member",scope:"global"},{comment:"",meta:{range:[448,455],filename:"processSheet.js",lineno:11,columnno:60,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001942",name:"options",type:"Identifier",value:"options"}},undocumented:!0,name:"options",longname:"options",kind:"member",scope:"global"},{comment:"",meta:{range:[473,750],filename:"processSheet.js",lineno:15,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001945",name:"isPUG",type:"ArrowFunctionExpression"}},undocumented:!0,name:"isPUG",longname:"isPUG",kind:"function",scope:"global",params:[],async:!0},{comment:"",meta:{range:[489,494],filename:"processSheet.js",lineno:15,columnno:22,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001949",name:"entry",type:"Identifier",value:"entry"}},undocumented:!0,name:"entry",longname:"entry",kind:"member",scope:"global"},{comment:"",meta:{range:[495,511],filename:"processSheet.js",lineno:15,columnno:28,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001951",name:"source",type:"Identifier",value:"resSource"}},undocumented:!0,name:"source",longname:"source",kind:"member",scope:"global"},{comment:"",meta:{range:[512,531],filename:"processSheet.js",lineno:15,columnno:45,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001953",name:"destination",type:"Identifier",value:"resDest"}},undocumented:!0,name:"destination",longname:"destination",kind:"member",scope:"global"},{comment:"",meta:{range:[532,547],filename:"processSheet.js",lineno:15,columnno:65,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001955",name:"testDestination",type:"Identifier",value:"testDestination"}},undocumented:!0,name:"testDestination",longname:"testDestination",kind:"member",scope:"global"},{comment:"",meta:{range:[548,555],filename:"processSheet.js",lineno:15,columnno:81,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001957",name:"options",type:"Identifier",value:"options"}},undocumented:!0,name:"options",longname:"options",kind:"member",scope:"global"},{comment:"",meta:{range:[556,562],filename:"processSheet.js",lineno:15,columnno:89,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001959",name:"runPUG",type:"Identifier",value:"runPUG"}},undocumented:!0,name:"runPUG",longname:"runPUG",kind:"member",scope:"global"},{comment:"",meta:{range:[680,696],filename:"processSheet.js",lineno:18,columnno:22,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001986",name:"source",type:"Identifier",value:"resSource"}},undocumented:!0,name:"source",longname:"source",kind:"member",scope:"global"},{comment:"",meta:{range:[697,716],filename:"processSheet.js",lineno:18,columnno:39,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001988",name:"destination",type:"Identifier",value:"resDest"}},undocumented:!0,name:"destination",longname:"destination",kind:"member",scope:"global"},{comment:"",meta:{range:[717,732],filename:"processSheet.js",lineno:18,columnno:59,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001990",name:"testDestination",type:"Identifier",value:"testDestination"}},undocumented:!0,name:"testDestination",longname:"testDestination",kind:"member",scope:"global"},{comment:"",meta:{range:[733,740],filename:"processSheet.js",lineno:18,columnno:75,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001992",name:"options",type:"Identifier",value:"options"}},undocumented:!0,name:"options",longname:"options",kind:"member",scope:"global"},{comment:"",meta:{range:[759,1730],filename:"processSheet.js",lineno:23,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001995",name:"processSheet",type:"ArrowFunctionExpression"},vars:{files:"processSheet~files",pugPromises:"processSheet~pugPromises",scssPromises:"processSheet~scssPromises",undefined:null,newSASS:"processSheet~newSASS",newPUG:"processSheet~newPUG",pugOutput:"processSheet~pugOutput",scssOutput:"processSheet~scssOutput"}},undocumented:!0,name:"processSheet",longname:"processSheet",kind:"function",scope:"global",params:[],async:!0},{comment:"",meta:{range:[782,794],filename:"processSheet.js",lineno:23,columnno:29,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100001999",name:"source",type:"AssignmentPattern",value:"source"}},undocumented:!0,name:"source",longname:"source",kind:"member",scope:"global"},{comment:"",meta:{range:[795,806],filename:"processSheet.js",lineno:23,columnno:42,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002003",name:"destination",type:"Identifier",value:"destination"}},undocumented:!0,name:"destination",longname:"destination",kind:"member",scope:"global"},{comment:"",meta:{range:[807,822],filename:"processSheet.js",lineno:23,columnno:54,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002005",name:"testDestination",type:"Identifier",value:"testDestination"}},undocumented:!0,name:"testDestination",longname:"testDestination",kind:"member",scope:"global"},{comment:"",meta:{range:[823,854],filename:"processSheet.js",lineno:23,columnno:70,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002007",name:"pugOptions",type:"AssignmentPattern",value:"pugOptions"}},undocumented:!0,name:"pugOptions",longname:"pugOptions",kind:"member",scope:"global"},{comment:"",meta:{range:[835,853],filename:"processSheet.js",lineno:23,columnno:82,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002011",name:"suppressStack",type:"Literal",value:!0}},undocumented:!0,name:"suppressStack",longname:"suppressStack",kind:"member",scope:"global"},{comment:"",meta:{range:[855,869],filename:"processSheet.js",lineno:23,columnno:102,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002013",name:"scssOptions",type:"AssignmentPattern",value:"scssOptions"}},undocumented:!0,name:"scssOptions",longname:"scssOptions",kind:"member",scope:"global"},{comment:"",meta:{range:[870,882],filename:"processSheet.js",lineno:23,columnno:117,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002017",name:"runSCSS",type:"AssignmentPattern",value:"runSCSS"}},undocumented:!0,name:"runSCSS",longname:"runSCSS",kind:"member",scope:"global"},{comment:"",meta:{range:[883,894],filename:"processSheet.js",lineno:23,columnno:130,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002021",name:"runPUG",type:"AssignmentPattern",value:"runPUG"}},undocumented:!0,name:"runPUG",longname:"runPUG",kind:"member",scope:"global"},{comment:"",meta:{range:[911,943],filename:"processSheet.js",lineno:24,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002027",name:"files",type:"AwaitExpression",value:""}},undocumented:!0,name:"files",longname:"processSheet~files",kind:"constant",memberof:"processSheet",scope:"inner",params:[]},{comment:"",meta:{range:[953,969],filename:"processSheet.js",lineno:25,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002036",name:"pugPromises",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"pugPromises",longname:"processSheet~pugPromises",kind:"constant",memberof:"processSheet",scope:"inner",params:[]},{comment:"",meta:{range:[979,996],filename:"processSheet.js",lineno:26,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002040",name:"scssPromises",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"scssPromises",longname:"processSheet~scssPromises",kind:"constant",memberof:"processSheet",scope:"inner",params:[]},{comment:"",meta:{range:[1235,1331],filename:"processSheet.js",lineno:31,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002087",name:"newSASS",type:"AwaitExpression",value:""}},undocumented:!0,name:"newSASS",longname:"processSheet~newSASS",kind:"constant",memberof:"processSheet",scope:"inner",params:[]},{comment:"",meta:{range:[1259,1264],filename:"processSheet.js",lineno:31,columnno:36,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002093",name:"entry",type:"Identifier",value:"entry"}},undocumented:!0,name:"entry",longname:"entry",kind:"member",scope:"global"},{comment:"",meta:{range:[1265,1281],filename:"processSheet.js",lineno:31,columnno:42,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002095",name:"source",type:"Identifier",value:"resSource"}},undocumented:!0,name:"source",longname:"source",kind:"member",scope:"global"},{comment:"",meta:{range:[1282,1301],filename:"processSheet.js",lineno:31,columnno:59,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002097",name:"destination",type:"Identifier",value:"resDest"}},undocumented:!0,name:"destination",longname:"destination",kind:"member",scope:"global"},{comment:"",meta:{range:[1302,1321],filename:"processSheet.js",lineno:31,columnno:79,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002099",name:"options",type:"Identifier",value:"scssOptions"}},undocumented:!0,name:"options",longname:"options",kind:"member",scope:"global"},{comment:"",meta:{range:[1322,1329],filename:"processSheet.js",lineno:31,columnno:99,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002101",name:"runSCSS",type:"Identifier",value:"runSCSS"}},undocumented:!0,name:"runSCSS",longname:"runSCSS",kind:"member",scope:"global"},{comment:"",meta:{range:[1346,1454],filename:"processSheet.js",lineno:33,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002104",name:"newPUG",type:"AwaitExpression",value:""}},undocumented:!0,name:"newPUG",longname:"processSheet~newPUG",kind:"constant",memberof:"processSheet",scope:"inner",params:[]},{comment:"",meta:{range:[1368,1373],filename:"processSheet.js",lineno:33,columnno:34,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002110",name:"entry",type:"Identifier",value:"entry"}},undocumented:!0,name:"entry",longname:"entry",kind:"member",scope:"global"},{comment:"",meta:{range:[1374,1390],filename:"processSheet.js",lineno:33,columnno:40,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002112",name:"source",type:"Identifier",value:"resSource"}},undocumented:!0,name:"source",longname:"source",kind:"member",scope:"global"},{comment:"",meta:{range:[1391,1410],filename:"processSheet.js",lineno:33,columnno:57,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002114",name:"destination",type:"Identifier",value:"resDest"}},undocumented:!0,name:"destination",longname:"destination",kind:"member",scope:"global"},{comment:"",meta:{range:[1411,1426],filename:"processSheet.js",lineno:33,columnno:77,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002116",name:"testDestination",type:"Identifier",value:"testDestination"}},undocumented:!0,name:"testDestination",longname:"testDestination",kind:"member",scope:"global"},{comment:"",meta:{range:[1427,1445],filename:"processSheet.js",lineno:33,columnno:93,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002118",name:"options",type:"Identifier",value:"pugOptions"}},undocumented:!0,name:"options",longname:"options",kind:"member",scope:"global"},{comment:"",meta:{range:[1446,1452],filename:"processSheet.js",lineno:33,columnno:112,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002120",name:"runPUG",type:"Identifier",value:"runPUG"}},undocumented:!0,name:"runPUG",longname:"runPUG",kind:"member",scope:"global"},{comment:"",meta:{range:[1598,1640],filename:"processSheet.js",lineno:43,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002141",name:"pugOutput",type:"AwaitExpression",value:""}},undocumented:!0,name:"pugOutput",longname:"processSheet~pugOutput",kind:"constant",memberof:"processSheet",scope:"inner",params:[]},{comment:"",meta:{range:[1650,1694],filename:"processSheet.js",lineno:44,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002150",name:"scssOutput",type:"AwaitExpression",value:""}},undocumented:!0,name:"scssOutput",longname:"processSheet~scssOutput",kind:"constant",memberof:"processSheet",scope:"inner",params:[]},{comment:"",meta:{range:[1733,1762],filename:"processSheet.js",lineno:48,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002163",name:"module.exports",type:"Identifier",value:"processSheet",paramnames:[]}},undocumented:!0,name:"exports",longname:"module.exports",kind:"member",memberof:"module",scope:"static"},{comment:"",meta:{range:[6,26],filename:"renderPug.js",lineno:1,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002171",name:"pug",type:"CallExpression",value:""}},undocumented:!0,name:"pug",longname:"pug",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[34,56],filename:"renderPug.js",lineno:2,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002177",name:"path",type:"CallExpression",value:""}},undocumented:!0,name:"path",longname:"path",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[65,100],filename:"renderPug.js",lineno:4,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002183",name:"kErrorHead",type:"CallExpression",value:""}},undocumented:!0,name:"kErrorHead",longname:"kErrorHead",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[108,146],filename:"renderPug.js",lineno:5,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002189",name:"getTemplate",type:"CallExpression",value:""}},undocumented:!0,name:"getTemplate",longname:"getTemplate",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[154,188],filename:"renderPug.js",lineno:6,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002195",name:"outputPug",type:"CallExpression",value:""}},undocumented:!0,name:"outputPug",longname:"outputPug",kind:"constant",scope:"global",params:[]},{comment:`/**
 * Renders pug into html text
 * @param {string} source - The path to the file you want to parse as pug.
 * @param {string} destination - The path to the file where you want to store the rendered HTML.
 * @param {object} [options] - Options for how the k-scaffold should parse the pug and options that should be passed to pugjs. Accepts all options specified at pugjs.org as well as:
 * @param {boolean} [options.suppressStack = true] - Whether the K-scaffold should suppress the full error stack from pug and only display the message portion of the error. The stack traces provided by pug do not refer to the actual chain of included pug files, and so are usually useless in troubleshooting an issue.
 * @returns {Promise<string|null>} - The rendered HTML or null if an error occurred
 */`,meta:{range:[992,1904],filename:"renderPug.js",lineno:17,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002201",name:"renderPug",type:"ArrowFunctionExpression"},vars:{template:"renderPug~template",k:"renderPug~k",html:"renderPug~html"}},description:"Renders pug into html text",params:[{type:{names:["string"]},description:"The path to the file you want to parse as pug.",name:"source"},{type:{names:["string"]},description:"The path to the file where you want to store the rendered HTML.",name:"destination"},{type:{names:["object"]},optional:!0,description:"Options for how the k-scaffold should parse the pug and options that should be passed to pugjs. Accepts all options specified at pugjs.org as well as:",name:"options"},{type:{names:["boolean"]},optional:!0,defaultvalue:!0,description:"Whether the K-scaffold should suppress the full error stack from pug and only display the message portion of the error. The stack traces provided by pug do not refer to the actual chain of included pug files, and so are usually useless in troubleshooting an issue.",name:"options.suppressStack"}],returns:[{type:{names:["Promise.<(string|null)>"]},description:"- The rendered HTML or null if an error occurred"}],name:"renderPug",longname:"renderPug",kind:"function",scope:"global",async:!0},{comment:"",meta:{range:[1012,1018],filename:"renderPug.js",lineno:17,columnno:26,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002205",name:"source",type:"Identifier",value:"source"}},undocumented:!0,name:"source",longname:"source",kind:"member",scope:"global"},{comment:"",meta:{range:[1019,1030],filename:"renderPug.js",lineno:17,columnno:33,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002207",name:"destination",type:"Identifier",value:"destination"}},undocumented:!0,name:"destination",longname:"destination",kind:"member",scope:"global"},{comment:"",meta:{range:[1031,1046],filename:"renderPug.js",lineno:17,columnno:45,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002209",name:"testDestination",type:"Identifier",value:"testDestination"}},undocumented:!0,name:"testDestination",longname:"testDestination",kind:"member",scope:"global"},{comment:"",meta:{range:[1047,1075],filename:"renderPug.js",lineno:17,columnno:61,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002211",name:"options",type:"AssignmentPattern",value:"options"}},undocumented:!0,name:"options",longname:"options",kind:"member",scope:"global"},{comment:"",meta:{range:[1056,1074],filename:"renderPug.js",lineno:17,columnno:70,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002215",name:"suppressStack",type:"Literal",value:!0}},undocumented:!0,name:"suppressStack",longname:"suppressStack",kind:"member",scope:"global"},{comment:"",meta:{range:[1091,1127],filename:"renderPug.js",lineno:18,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002219",name:"template",type:"AwaitExpression",value:""}},undocumented:!0,name:"template",longname:"renderPug~template",kind:"constant",memberof:"renderPug",scope:"inner",params:[]},{comment:"",meta:{range:[1146,1169],filename:"renderPug.js",lineno:20,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002228",name:"k",type:"CallExpression",value:""}},undocumented:!0,name:"k",longname:"renderPug~k",kind:"constant",memberof:"renderPug",scope:"inner",params:[]},{comment:"",meta:{range:[1200,1351],filename:"renderPug.js",lineno:22,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002239",name:"html",type:"CallExpression",value:""}},undocumented:!0,name:"html",longname:"renderPug~html",kind:"constant",memberof:"renderPug",scope:"inner",params:[]},{comment:"",meta:{range:[1235,1246],filename:"renderPug.js",lineno:23,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002247",name:"pretty",type:"Literal",value:!0}},undocumented:!0,name:"pretty",longname:"pretty",kind:"member",scope:"global"},{comment:"",meta:{range:[1284,1299],filename:"renderPug.js",lineno:26,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002253",name:"filename",type:"Identifier",value:"source"}},undocumented:!0,name:"filename",longname:"filename",kind:"member",scope:"global"},{comment:"",meta:{range:[1307,1344],filename:"renderPug.js",lineno:27,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002255",name:"basedir",type:"CallExpression",value:""}},undocumented:!0,name:"basedir",longname:"basedir",kind:"member",scope:"global"},{comment:"",meta:{range:[1907,1933],filename:"renderPug.js",lineno:47,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002322",name:"module.exports",type:"Identifier",value:"renderPug",paramnames:[]}},undocumented:!0,name:"exports",longname:"module.exports",kind:"member",memberof:"module",scope:"static"},{comment:"",meta:{range:[6,37],filename:"renderSASS.js",lineno:1,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002330",name:"sass",type:"CallExpression",value:""}},undocumented:!0,name:"sass",longname:"sass",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[45,67],filename:"renderSASS.js",lineno:2,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002336",name:"path",type:"CallExpression",value:""}},undocumented:!0,name:"path",longname:"path",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[75,102],filename:"renderSASS.js",lineno:3,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002342",name:"fs",type:"CallExpression",value:""}},undocumented:!0,name:"fs",longname:"fs",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[112,125],filename:"renderSASS.js",lineno:4,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002350",name:"pathToFileURL",type:"Identifier",value:"pathToFileURL"}},undocumented:!0,name:"pathToFileURL",longname:"pathToFileURL",kind:"member",scope:"global"},{comment:"",meta:{range:[153,188],filename:"renderSASS.js",lineno:6,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002356",name:"kErrorHead",type:"CallExpression",value:""}},undocumented:!0,name:"kErrorHead",longname:"kErrorHead",kind:"constant",scope:"global",params:[]},{comment:`/**
 * Renders SCSS into CSS text
 * @param {string} source - The path to the file you want to parse as SCSS.
 * @param {string} destination - The path to the file where you want to store the rendered CSS.
 * @param {object} [options = {}] - Options for how the k-scaffold should parse the SCSS and options that should be passed to SASS. Accepts all options specified at sass-lang.com.
 * @returns {Promise<string|null>} - The rendered css or null if an error occurred
 */`,meta:{range:[670,1799],filename:"renderSASS.js",lineno:15,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002362",name:"renderSASS",type:"ArrowFunctionExpression"},vars:{dirname:"renderSASS~dirname",compileOptions:"renderSASS~compileOptions","":null,currOptions:"renderSASS~currOptions",undefined:null}},description:"Renders SCSS into CSS text",params:[{type:{names:["string"]},description:"The path to the file you want to parse as SCSS.",name:"source"},{type:{names:["string"]},description:"The path to the file where you want to store the rendered CSS.",name:"destination"},{type:{names:["object"]},optional:!0,defaultvalue:"{}",description:"Options for how the k-scaffold should parse the SCSS and options that should be passed to SASS. Accepts all options specified at sass-lang.com.",name:"options"}],returns:[{type:{names:["Promise.<(string|null)>"]},description:"- The rendered css or null if an error occurred"}],name:"renderSASS",longname:"renderSASS",kind:"function",scope:"global",async:!0},{comment:"",meta:{range:[691,697],filename:"renderSASS.js",lineno:15,columnno:27,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002366",name:"source",type:"Identifier",value:"source"}},undocumented:!0,name:"source",longname:"source",kind:"member",scope:"global"},{comment:"",meta:{range:[698,709],filename:"renderSASS.js",lineno:15,columnno:34,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002368",name:"destination",type:"Identifier",value:"destination"}},undocumented:!0,name:"destination",longname:"destination",kind:"member",scope:"global"},{comment:"",meta:{range:[710,720],filename:"renderSASS.js",lineno:15,columnno:46,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002370",name:"options",type:"AssignmentPattern",value:"options"}},undocumented:!0,name:"options",longname:"options",kind:"member",scope:"global"},{comment:"",meta:{range:[745,790],filename:"renderSASS.js",lineno:17,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002378",name:"dirname",type:"CallExpression",value:""}},undocumented:!0,name:"dirname",longname:"renderSASS~dirname",kind:"constant",memberof:"renderSASS",scope:"inner",params:[]},{comment:"",meta:{range:[802,1186],filename:"renderSASS.js",lineno:18,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002392",name:"compileOptions",type:"ObjectExpression",value:'{"charset":false,"importers":""}'}},undocumented:!0,name:"compileOptions",longname:"renderSASS~compileOptions",kind:"constant",memberof:"renderSASS",scope:"inner",params:[]},{comment:"",meta:{range:[827,840],filename:"renderSASS.js",lineno:19,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002395",name:"charset",type:"Literal",value:!1}},undocumented:!0,name:"charset",longname:"renderSASS~compileOptions.charset",kind:"member",memberof:"renderSASS~compileOptions",scope:"static"},{comment:"",meta:{range:[848,1180],filename:"renderSASS.js",lineno:20,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002397",name:"importers",type:"ArrayExpression",value:'["{\\"findFileUrl\\":\\"\\"}"]'}},undocumented:!0,name:"importers",longname:"renderSASS~compileOptions.importers",kind:"member",memberof:"renderSASS~compileOptions",scope:"static"},{comment:"",meta:{range:[881,1162],filename:"renderSASS.js",lineno:22,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002400",name:"findFileUrl",type:"FunctionExpression"},vars:{fileURL:"findFileUrl~fileURL",newURL:"findFileUrl~newURL"}},undocumented:!0,name:"findFileUrl",longname:"findFileUrl",kind:"function",scope:"global"},{comment:"",meta:{range:[977,1077],filename:"renderSASS.js",lineno:24,columnno:18,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002414",name:"fileURL",type:"CallExpression",value:""}},undocumented:!0,name:"fileURL",longname:"findFileUrl~fileURL",kind:"constant",memberof:"findFileUrl",scope:"inner",params:[]},{comment:"",meta:{range:[1097,1122],filename:"renderSASS.js",lineno:25,columnno:18,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002430",name:"newURL",type:"NewExpression",value:""}},undocumented:!0,name:"newURL",longname:"findFileUrl~newURL",kind:"constant",memberof:"findFileUrl",scope:"inner",params:[]},{comment:"",meta:{range:[1198,1224],filename:"renderSASS.js",lineno:31,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002438",name:"currOptions",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"currOptions",longname:"renderSASS~currOptions",kind:"constant",memberof:"renderSASS",scope:"inner",params:[]},{comment:"",meta:{range:[1421,1424],filename:"renderSASS.js",lineno:38,columnno:11,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002474",name:"css",type:"Identifier",value:"css"}},undocumented:!0,name:"css",longname:"css",kind:"member",scope:"global"},{comment:"",meta:{range:[1802,1829],filename:"renderSASS.js",lineno:57,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002533",name:"module.exports",type:"Identifier",value:"renderSASS",paramnames:[]}},undocumented:!0,name:"exports",longname:"module.exports",kind:"member",memberof:"module",scope:"static"},{comment:"",meta:{range:[8,15],filename:"resolvePaths.js",lineno:1,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002543",name:"resolve",type:"Identifier",value:"resolve"}},undocumented:!0,name:"resolve",longname:"resolve",kind:"member",scope:"global"},{comment:"",meta:{range:[43,65],filename:"resolvePaths.js",lineno:2,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002549",name:"path",type:"CallExpression",value:""}},undocumented:!0,name:"path",longname:"path",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[74,347],filename:"resolvePaths.js",lineno:4,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002555",name:"resolvePaths",type:"ArrowFunctionExpression"},vars:{resSource:"resolvePaths~resSource",resDest:"resolvePaths~resDest"}},undocumented:!0,name:"resolvePaths",longname:"resolvePaths",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[129,172],filename:"resolvePaths.js",lineno:5,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002563",name:"resSource",type:"CallExpression",value:""}},undocumented:!0,name:"resSource",longname:"resolvePaths~resSource",kind:"constant",memberof:"resolvePaths",scope:"inner",params:[]},{comment:"",meta:{range:[182,314],filename:"resolvePaths.js",lineno:6,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002574",name:"resDest",type:"ConditionalExpression",value:""}},undocumented:!0,name:"resDest",longname:"resolvePaths~resDest",kind:"constant",memberof:"resolvePaths",scope:"inner",params:[]},{comment:"",meta:{range:[349,378],filename:"resolvePaths.js",lineno:12,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002602",name:"module.exports",type:"Identifier",value:"resolvePaths",paramnames:[]}},undocumented:!0,name:"exports",longname:"module.exports",kind:"member",memberof:"module",scope:"static"},{comment:"",meta:{range:[6,35],filename:"watch.js",lineno:1,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002610",name:"watch",type:"CallExpression",value:""}},undocumented:!0,name:"watch",longname:"watch",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[44,84],filename:"watch.js",lineno:3,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002616",name:"processSheet",type:"CallExpression",value:""}},undocumented:!0,name:"processSheet",longname:"processSheet",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[93,1025],filename:"watch.js",lineno:5,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002622",name:"kWatch",type:"ArrowFunctionExpression"},vars:{"":null}},undocumented:!0,name:"kWatch",longname:"kWatch",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[104,116],filename:"watch.js",lineno:5,columnno:17,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002626",name:"source",type:"AssignmentPattern",value:"source"}},undocumented:!0,name:"source",longname:"source",kind:"member",scope:"global"},{comment:"",meta:{range:[117,128],filename:"watch.js",lineno:5,columnno:30,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002630",name:"destination",type:"Identifier",value:"destination"}},undocumented:!0,name:"destination",longname:"destination",kind:"member",scope:"global"},{comment:"",meta:{range:[129,144],filename:"watch.js",lineno:5,columnno:42,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002632",name:"testDestination",type:"Identifier",value:"testDestination"}},undocumented:!0,name:"testDestination",longname:"testDestination",kind:"member",scope:"global"},{comment:"",meta:{range:[145,176],filename:"watch.js",lineno:5,columnno:58,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002634",name:"pugOptions",type:"AssignmentPattern",value:"pugOptions"}},undocumented:!0,name:"pugOptions",longname:"pugOptions",kind:"member",scope:"global"},{comment:"",meta:{range:[157,175],filename:"watch.js",lineno:5,columnno:70,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002638",name:"suppressStack",type:"Literal",value:!0}},undocumented:!0,name:"suppressStack",longname:"suppressStack",kind:"member",scope:"global"},{comment:"",meta:{range:[177,191],filename:"watch.js",lineno:5,columnno:90,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002640",name:"scssOptions",type:"AssignmentPattern",value:"scssOptions"}},undocumented:!0,name:"scssOptions",longname:"scssOptions",kind:"member",scope:"global"},{comment:"",meta:{range:[228,243],filename:"watch.js",lineno:8,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002650",name:"recursive",type:"Literal",value:!0}},undocumented:!0,name:"recursive",longname:"recursive",kind:"member",scope:"global"},{comment:"",meta:{range:[251,701],filename:"watch.js",lineno:9,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002652",name:"filter",type:"FunctionExpression"}},undocumented:!0,name:"filter",longname:"filter",kind:"function",scope:"global"},{comment:"",meta:{range:[788,820],filename:"watch.js",lineno:23,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002699",name:"runSCSS",type:"CallExpression",value:""}},undocumented:!0,name:"runSCSS",longname:"<anonymous>~runSCSS",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[834,870],filename:"watch.js",lineno:24,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002707",name:"runPUG",type:"CallExpression",value:""}},undocumented:!0,name:"runPUG",longname:"<anonymous>~runPUG",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[940,946],filename:"watch.js",lineno:28,columnno:26,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002726",name:"source",type:"Identifier",value:"source"}},undocumented:!0,name:"source",longname:"source",kind:"member",scope:"global"},{comment:"",meta:{range:[947,958],filename:"watch.js",lineno:28,columnno:33,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002728",name:"destination",type:"Identifier",value:"destination"}},undocumented:!0,name:"destination",longname:"destination",kind:"member",scope:"global"},{comment:"",meta:{range:[959,974],filename:"watch.js",lineno:28,columnno:45,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002730",name:"testDestination",type:"Identifier",value:"testDestination"}},undocumented:!0,name:"testDestination",longname:"testDestination",kind:"member",scope:"global"},{comment:"",meta:{range:[975,985],filename:"watch.js",lineno:28,columnno:61,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002732",name:"pugOptions",type:"Identifier",value:"pugOptions"}},undocumented:!0,name:"pugOptions",longname:"pugOptions",kind:"member",scope:"global"},{comment:"",meta:{range:[986,997],filename:"watch.js",lineno:28,columnno:72,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002734",name:"scssOptions",type:"Identifier",value:"scssOptions"}},undocumented:!0,name:"scssOptions",longname:"scssOptions",kind:"member",scope:"global"},{comment:"",meta:{range:[998,1005],filename:"watch.js",lineno:28,columnno:84,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002736",name:"runSCSS",type:"Identifier",value:"runSCSS"}},undocumented:!0,name:"runSCSS",longname:"runSCSS",kind:"member",scope:"global"},{comment:"",meta:{range:[1006,1012],filename:"watch.js",lineno:28,columnno:92,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002738",name:"runPUG",type:"Identifier",value:"runPUG"}},undocumented:!0,name:"runPUG",longname:"runPUG",kind:"member",scope:"global"},{comment:"",meta:{range:[1028,1051],filename:"watch.js",lineno:32,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/render",code:{id:"astnode100002741",name:"module.exports",type:"Identifier",value:"kWatch",paramnames:[]}},undocumented:!0,name:"exports",longname:"module.exports",kind:"member",memberof:"module",scope:"static"},{comment:"/**@namespace Sheetworkers */",meta:{filename:"accessSheet.js",lineno:1,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{}},kind:"namespace",name:"Sheetworkers",longname:"Sheetworkers",scope:"global"},{comment:"",meta:{range:[163,1594],filename:"accessSheet.js",lineno:5,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002749",name:"updateSheet",type:"FunctionExpression"},vars:{"":null}},undocumented:!0,name:"updateSheet",longname:"updateSheet",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[229,260],filename:"accessSheet.js",lineno:7,columnno:15,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002761",name:"props",type:"ArrayExpression",value:'["debug_mode",""]'}},undocumented:!0,name:"props",longname:"props",kind:"member",scope:"global"},{comment:"",meta:{range:[261,1589],filename:"accessSheet.js",lineno:7,columnno:47,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002766",name:"callback",type:"ArrowFunctionExpression"},vars:{"kFuncs.debugMode":"kFuncs.debugMode","":null,"attributes.sheet_version":"attributes.sheet_version"}},undocumented:!0,name:"callback",longname:"callback",kind:"function",scope:"global"},{comment:"",meta:{range:[304,366],filename:"accessSheet.js",lineno:8,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002773",name:"kFuncs.debugMode",type:"LogicalExpression",value:"",paramnames:[]}},undocumented:!0,name:"debugMode",longname:"kFuncs.debugMode",kind:"member",memberof:"kFuncs",scope:"static"},{comment:"",meta:{range:[379,417],filename:"accessSheet.js",lineno:9,columnno:11,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002790",name:"sheet_version",type:"MemberExpression",value:"attributes.sheet_version"}},undocumented:!0,name:"sheet_version",longname:"sheet_version",kind:"member",scope:"global"},{comment:"",meta:{range:[642,652],filename:"accessSheet.js",lineno:14,columnno:27,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002833",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[653,661],filename:"accessSheet.js",lineno:14,columnno:38,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002835",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[662,666],filename:"accessSheet.js",lineno:14,columnno:47,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002837",name:"casc",type:"Identifier",value:"casc"}},undocumented:!0,name:"casc",longname:"casc",kind:"member",scope:"global"},{comment:"",meta:{range:[950,960],filename:"accessSheet.js",lineno:22,columnno:19,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002872",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[961,969],filename:"accessSheet.js",lineno:22,columnno:30,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002874",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[970,974],filename:"accessSheet.js",lineno:22,columnno:39,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002876",name:"casc",type:"Identifier",value:"casc"}},undocumented:!0,name:"casc",longname:"casc",kind:"member",scope:"global"},{comment:"",meta:{range:[1017,1029],filename:"accessSheet.js",lineno:26,columnno:13,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002884",name:"openHandlers",type:"Identifier",value:"openHandlers"}},undocumented:!0,name:"openHandlers",longname:"openHandlers",kind:"member",scope:"global"},{comment:"",meta:{range:[1207,1217],filename:"accessSheet.js",lineno:30,columnno:25,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002919",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[1218,1226],filename:"accessSheet.js",lineno:30,columnno:36,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002921",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[1227,1231],filename:"accessSheet.js",lineno:30,columnno:45,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002923",name:"casc",type:"Identifier",value:"casc"}},undocumented:!0,name:"casc",longname:"casc",kind:"member",scope:"global"},{comment:"",meta:{range:[1388,1398],filename:"accessSheet.js",lineno:35,columnno:20,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002937",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[1399,1407],filename:"accessSheet.js",lineno:35,columnno:31,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002939",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[1415,1456],filename:"accessSheet.js",lineno:36,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002942",name:"attributes.sheet_version",type:"MemberExpression",value:"kFuncs.version",paramnames:[]}},undocumented:!0,name:"sheet_version",longname:"attributes.sheet_version",kind:"member",memberof:"attributes",scope:"static"},{comment:"",meta:{range:[1603,1682],filename:"accessSheet.js",lineno:43,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002968",name:"initialSetup",type:"FunctionExpression"}},undocumented:!0,name:"initialSetup",longname:"initialSetup",kind:"function",scope:"global",params:[]},{comment:"/**\n * This is the default listener function for attributes that the K-Scaffold uses. It utilizes the `triggerFuncs`, `listenerFunc`, `calculation`, and `affects` properties of the K-scaffold trigger object (see the Pug section of the scaffold for more details).\n * @memberof Sheetworkers\n * @param {Roll20Event} event - The Roll20 event object\n * @returns {void}\n * @example\n * //Call from an attribute change\n * on('change:an_attribute',k.accessSheet);\n */",meta:{range:[2150,2423],filename:"accessSheet.js",lineno:56,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002979",name:"accessSheet",type:"FunctionExpression"},vars:{"":null}},description:"This is the default listener function for attributes that the K-Scaffold uses. It utilizes the `triggerFuncs`, `listenerFunc`, `calculation`, and `affects` properties of the K-scaffold trigger object (see the Pug section of the scaffold for more details).",memberof:"Sheetworkers",params:[{type:{names:["Roll20Event"]},description:"The Roll20 event object",name:"event"}],returns:[{type:{names:["void"]}}],examples:[`//Call from an attribute change
on('change:an_attribute',k.accessSheet);`],name:"accessSheet",longname:"Sheetworkers.accessSheet",kind:"function",scope:"static"},{comment:"",meta:{range:[2190,2214],filename:"accessSheet.js",lineno:57,columnno:9,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002988",name:"funcs",type:"CallExpression",value:""}},undocumented:!0,name:"funcs",longname:"funcs",kind:"member",scope:"global"},{comment:"",meta:{range:[2227,2232],filename:"accessSheet.js",lineno:58,columnno:9,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100002998",name:"event",type:"Identifier",value:"event"}},undocumented:!0,name:"event",longname:"event",kind:"member",scope:"global"},{comment:"",meta:{range:[2251,2418],filename:"accessSheet.js",lineno:59,columnno:15,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003004",name:"callback",type:"ArrowFunctionExpression"},vars:{trigger:"callback~trigger"}},undocumented:!0,name:"callback",longname:"callback",kind:"function",scope:"global"},{comment:"",meta:{range:[2298,2341],filename:"accessSheet.js",lineno:60,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003011",name:"trigger",type:"CallExpression",value:""}},undocumented:!0,name:"trigger",longname:"callback~trigger",kind:"member",memberof:"callback",scope:"inner",params:[]},{comment:"",meta:{range:[2373,2378],filename:"accessSheet.js",lineno:61,columnno:30,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003025",name:"event",type:"Identifier",value:"event"}},undocumented:!0,name:"event",longname:"event",kind:"member",scope:"global"},{comment:"",meta:{range:[2379,2386],filename:"accessSheet.js",lineno:61,columnno:36,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003027",name:"trigger",type:"Identifier",value:"trigger"}},undocumented:!0,name:"trigger",longname:"trigger",kind:"member",scope:"global"},{comment:"",meta:{range:[2387,2397],filename:"accessSheet.js",lineno:61,columnno:44,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003029",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[2398,2406],filename:"accessSheet.js",lineno:61,columnno:55,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003031",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[2407,2411],filename:"accessSheet.js",lineno:61,columnno:64,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003033",name:"casc",type:"Identifier",value:"casc"}},undocumented:!0,name:"casc",longname:"casc",kind:"member",scope:"global"},{comment:"",meta:{range:[2425,2456],filename:"accessSheet.js",lineno:64,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003036",name:"funcs.accessSheet",type:"Identifier",value:"accessSheet",paramnames:[]}},undocumented:!0,name:"accessSheet",longname:"funcs.accessSheet",kind:"member",memberof:"funcs",scope:"static"},{comment:"",meta:{range:[127,6609],filename:"attribute_proxy.js",lineno:5,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003044",name:"createAttrProxy",type:"FunctionExpression"},vars:{getCascObj:"createAttrProxy~getCascObj","":null,triggerFunctions:"createAttrProxy~triggerFunctions",initialFunction:"createAttrProxy~initialFunction",alwaysFunctions:"createAttrProxy~alwaysFunctions",processChange:"createAttrProxy~processChange",attrTarget:"createAttrProxy~attrTarget",attrHandler:"createAttrProxy~attrHandler"}},undocumented:!0,name:"createAttrProxy",longname:"createAttrProxy",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[263,956],filename:"attribute_proxy.js",lineno:7,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003050",name:"getCascObj",type:"FunctionExpression"},vars:{eventName:"createAttrProxy~getCascObj~eventName",typePrefix:"createAttrProxy~getCascObj~typePrefix",cascName:"createAttrProxy~getCascObj~cascName",cascObj:"createAttrProxy~getCascObj~cascObj","cascObj.previousValue":"createAttrProxy~getCascObj~cascObj.previousValue","cascObj.originalRollId":"createAttrProxy~getCascObj~cascObj.originalRollId","cascObj.rollData":"createAttrProxy~getCascObj~cascObj.rollData"}},undocumented:!0,name:"getCascObj",longname:"createAttrProxy~getCascObj",kind:"function",memberof:"createAttrProxy",scope:"inner",params:[]},{comment:"",meta:{range:[308,362],filename:"attribute_proxy.js",lineno:8,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003057",name:"eventName",type:"LogicalExpression",value:""}},undocumented:!0,name:"eventName",longname:"createAttrProxy~getCascObj~eventName",kind:"constant",memberof:"createAttrProxy~getCascObj",scope:"inner",params:[]},{comment:"",meta:{range:[372,494],filename:"attribute_proxy.js",lineno:9,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003067",name:"typePrefix",type:"ConditionalExpression",value:""}},undocumented:!0,name:"typePrefix",longname:"createAttrProxy~getCascObj~typePrefix",kind:"member",memberof:"createAttrProxy~getCascObj",scope:"inner",params:[]},{comment:"",meta:{range:[504,577],filename:"attribute_proxy.js",lineno:14,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003083",name:"cascName",type:"TemplateLiteral",value:""}},undocumented:!0,name:"cascName",longname:"createAttrProxy~getCascObj~cascName",kind:"member",memberof:"createAttrProxy~getCascObj",scope:"inner",params:[]},{comment:"",meta:{range:[587,611],filename:"attribute_proxy.js",lineno:15,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003097",name:"cascObj",type:"MemberExpression",value:"casc[undefined]"}},undocumented:!0,name:"cascObj",longname:"createAttrProxy~getCascObj~cascObj",kind:"member",memberof:"createAttrProxy~getCascObj",scope:"inner",params:[]},{comment:"",meta:{range:[626,644],filename:"attribute_proxy.js",lineno:16,columnno:13,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003108",name:"cascName",type:"Identifier",value:"cascObj"}},undocumented:!0,name:"cascName",longname:"cascName",kind:"member",scope:"global"},{comment:"",meta:{range:[713,756],filename:"attribute_proxy.js",lineno:19,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003121",name:"cascObj.previousValue",type:"MemberExpression",funcscope:"createAttrProxy~getCascObj",value:"event.previousValue",paramnames:[]}},undocumented:!0,name:"previousValue",longname:"createAttrProxy~getCascObj~cascObj.previousValue",kind:"member",memberof:"createAttrProxy~getCascObj~cascObj",scope:"static"},{comment:"",meta:{range:[804,849],filename:"attribute_proxy.js",lineno:21,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003134",name:"cascObj.originalRollId",type:"MemberExpression",funcscope:"createAttrProxy~getCascObj",value:"event.originalRollId",paramnames:[]}},undocumented:!0,name:"originalRollId",longname:"createAttrProxy~getCascObj~cascObj.originalRollId",kind:"member",memberof:"createAttrProxy~getCascObj~cascObj",scope:"static"},{comment:"",meta:{range:[859,911],filename:"attribute_proxy.js",lineno:22,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003142",name:"cascObj.rollData",type:"CallExpression",funcscope:"createAttrProxy~getCascObj",value:"",paramnames:[]}},undocumented:!0,name:"rollData",longname:"createAttrProxy~getCascObj~cascObj.rollData",kind:"member",memberof:"createAttrProxy~getCascObj~cascObj",scope:"static"},{comment:"",meta:{range:[969,1402],filename:"attribute_proxy.js",lineno:28,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003158",name:"triggerFunctions",type:"FunctionExpression"},vars:{"":null}},undocumented:!0,name:"triggerFunctions",longname:"createAttrProxy~triggerFunctions",kind:"function",memberof:"createAttrProxy",scope:"inner",params:[]},{comment:"",meta:{range:[1235,1246],filename:"attribute_proxy.js",lineno:32,columnno:21,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003208",name:"trigger",type:"Identifier",value:"obj"}},undocumented:!0,name:"trigger",longname:"trigger",kind:"member",scope:"global"},{comment:"",meta:{range:[1247,1257],filename:"attribute_proxy.js",lineno:32,columnno:33,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003210",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[1258,1266],filename:"attribute_proxy.js",lineno:32,columnno:44,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003212",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[1267,1271],filename:"attribute_proxy.js",lineno:32,columnno:53,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003214",name:"casc",type:"Identifier",value:"casc"}},undocumented:!0,name:"casc",longname:"casc",kind:"member",scope:"global"},{comment:"",meta:{range:[1415,1776],filename:"attribute_proxy.js",lineno:37,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003228",name:"initialFunction",type:"FunctionExpression"}},undocumented:!0,name:"initialFunction",longname:"createAttrProxy~initialFunction",kind:"function",memberof:"createAttrProxy",scope:"inner",params:[]},{comment:"",meta:{range:[1606,1617],filename:"attribute_proxy.js",lineno:41,columnno:32,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003263",name:"trigger",type:"Identifier",value:"obj"}},undocumented:!0,name:"trigger",longname:"trigger",kind:"member",scope:"global"},{comment:"",meta:{range:[1618,1628],filename:"attribute_proxy.js",lineno:41,columnno:44,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003265",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[1629,1637],filename:"attribute_proxy.js",lineno:41,columnno:55,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003267",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[1786,1962],filename:"attribute_proxy.js",lineno:45,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003283",name:"alwaysFunctions",type:"FunctionExpression"},vars:{"":null}},undocumented:!0,name:"alwaysFunctions",longname:"createAttrProxy~alwaysFunctions",kind:"function",memberof:"createAttrProxy",scope:"inner",params:[]},{comment:"",meta:{range:[1915,1922],filename:"attribute_proxy.js",lineno:47,columnno:15,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003307",name:"trigger",type:"Identifier",value:"trigger"}},undocumented:!0,name:"trigger",longname:"trigger",kind:"member",scope:"global"},{comment:"",meta:{range:[1923,1933],filename:"attribute_proxy.js",lineno:47,columnno:23,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003309",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[1934,1942],filename:"attribute_proxy.js",lineno:47,columnno:34,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003311",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[1943,1947],filename:"attribute_proxy.js",lineno:47,columnno:43,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003313",name:"casc",type:"Identifier",value:"casc"}},undocumented:!0,name:"casc",longname:"casc",kind:"member",scope:"global"},{comment:"",meta:{range:[1972,3300],filename:"attribute_proxy.js",lineno:50,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003316",name:"processChange",type:"FunctionExpression"},vars:{"attributes[undefined]":null}},undocumented:!0,name:"processChange",longname:"createAttrProxy~processChange",kind:"function",memberof:"createAttrProxy",scope:"inner",params:[]},{comment:"",meta:{range:[1998,2003],filename:"attribute_proxy.js",lineno:50,columnno:34,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003320",name:"event",type:"Identifier",value:"event"}},undocumented:!0,name:"event",longname:"event",kind:"member",scope:"global"},{comment:"",meta:{range:[2004,2011],filename:"attribute_proxy.js",lineno:50,columnno:40,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003322",name:"trigger",type:"Identifier",value:"trigger"}},undocumented:!0,name:"trigger",longname:"trigger",kind:"member",scope:"global"},{comment:"",meta:{range:[2012,2022],filename:"attribute_proxy.js",lineno:50,columnno:48,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003324",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[2023,2031],filename:"attribute_proxy.js",lineno:50,columnno:59,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003326",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[2032,2036],filename:"attribute_proxy.js",lineno:50,columnno:68,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003328",name:"casc",type:"Identifier",value:"casc"}},undocumented:!0,name:"casc",longname:"casc",kind:"member",scope:"global"},{comment:"",meta:{range:[2361,2368],filename:"attribute_proxy.js",lineno:59,columnno:11,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003379",name:"trigger",type:"Identifier",value:"trigger"}},undocumented:!0,name:"trigger",longname:"trigger",kind:"member",scope:"global"},{comment:"",meta:{range:[2892,2981],filename:"attribute_proxy.js",lineno:69,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003436",name:"attributes[undefined]",type:"CallExpression",value:"",paramnames:[]}},undocumented:!0,name:"attributes[undefined]",longname:"attributes[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[2947,2954],filename:"attribute_proxy.js",lineno:69,columnno:63,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003449",name:"trigger",type:"Identifier",value:"trigger"}},undocumented:!0,name:"trigger",longname:"trigger",kind:"member",scope:"global"},{comment:"",meta:{range:[2955,2965],filename:"attribute_proxy.js",lineno:69,columnno:71,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003451",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[2966,2974],filename:"attribute_proxy.js",lineno:69,columnno:82,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003453",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[2975,2979],filename:"attribute_proxy.js",lineno:69,columnno:91,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003455",name:"casc",type:"Identifier",value:"casc"}},undocumented:!0,name:"casc",longname:"casc",kind:"member",scope:"global"},{comment:"",meta:{range:[3269,3279],filename:"attribute_proxy.js",lineno:77,columnno:20,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003504",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[3280,3288],filename:"attribute_proxy.js",lineno:77,columnno:31,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003506",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[3289,3293],filename:"attribute_proxy.js",lineno:77,columnno:40,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003508",name:"casc",type:"Identifier",value:"casc"}},undocumented:!0,name:"casc",longname:"casc",kind:"member",scope:"global"},{comment:"",meta:{range:[3310,3515],filename:"attribute_proxy.js",lineno:79,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003511",name:"attrTarget",type:"ObjectExpression",value:'{"updates":"","attributes":"","repOrders":"","queue":"","casc":"","alwaysFunctions":"","processChange":"","triggerFunctions":"","initialFunction":"","getCascObj":""}'}},undocumented:!0,name:"attrTarget",longname:"createAttrProxy~attrTarget",kind:"constant",memberof:"createAttrProxy",scope:"inner",params:[]},{comment:"",meta:{range:[3329,3339],filename:"attribute_proxy.js",lineno:80,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003514",name:"updates",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"updates",longname:"createAttrProxy~attrTarget.updates",kind:"member",memberof:"createAttrProxy~attrTarget",scope:"static"},{comment:"",meta:{range:[3345,3366],filename:"attribute_proxy.js",lineno:81,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003516",name:"attributes",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"attributes",longname:"createAttrProxy~attrTarget.attributes",kind:"member",memberof:"createAttrProxy~attrTarget",scope:"static"},{comment:"",meta:{range:[3372,3384],filename:"attribute_proxy.js",lineno:82,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003520",name:"repOrders",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"repOrders",longname:"createAttrProxy~attrTarget.repOrders",kind:"member",memberof:"createAttrProxy~attrTarget",scope:"static"},{comment:"",meta:{range:[3390,3399],filename:"attribute_proxy.js",lineno:83,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003522",name:"queue",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"queue",longname:"createAttrProxy~attrTarget.queue",kind:"member",memberof:"createAttrProxy~attrTarget",scope:"static"},{comment:"",meta:{range:[3405,3412],filename:"attribute_proxy.js",lineno:84,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003524",name:"casc",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"casc",longname:"createAttrProxy~attrTarget.casc",kind:"member",memberof:"createAttrProxy~attrTarget",scope:"static"},{comment:"",meta:{range:[3418,3433],filename:"attribute_proxy.js",lineno:85,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003526",name:"alwaysFunctions",type:"Identifier",value:"alwaysFunctions"}},undocumented:!0,name:"alwaysFunctions",longname:"createAttrProxy~attrTarget.alwaysFunctions",kind:"member",memberof:"createAttrProxy~attrTarget",scope:"static"},{comment:"",meta:{range:[3439,3452],filename:"attribute_proxy.js",lineno:86,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003528",name:"processChange",type:"Identifier",value:"processChange"}},undocumented:!0,name:"processChange",longname:"createAttrProxy~attrTarget.processChange",kind:"member",memberof:"createAttrProxy~attrTarget",scope:"static"},{comment:"",meta:{range:[3458,3474],filename:"attribute_proxy.js",lineno:87,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003530",name:"triggerFunctions",type:"Identifier",value:"triggerFunctions"}},undocumented:!0,name:"triggerFunctions",longname:"createAttrProxy~attrTarget.triggerFunctions",kind:"member",memberof:"createAttrProxy~attrTarget",scope:"static"},{comment:"",meta:{range:[3480,3495],filename:"attribute_proxy.js",lineno:88,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003532",name:"initialFunction",type:"Identifier",value:"initialFunction"}},undocumented:!0,name:"initialFunction",longname:"createAttrProxy~attrTarget.initialFunction",kind:"member",memberof:"createAttrProxy~attrTarget",scope:"static"},{comment:"",meta:{range:[3501,3511],filename:"attribute_proxy.js",lineno:89,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003534",name:"getCascObj",type:"Identifier",value:"getCascObj"}},undocumented:!0,name:"getCascObj",longname:"createAttrProxy~attrTarget.getCascObj",kind:"member",memberof:"createAttrProxy~attrTarget",scope:"static"},{comment:"",meta:{range:[3525,6562],filename:"attribute_proxy.js",lineno:91,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003537",name:"attrHandler",type:"ObjectExpression",value:'{"get":"","set":"","deleteProperty":""}'}},undocumented:!0,name:"attrHandler",longname:"createAttrProxy~attrHandler",kind:"constant",memberof:"createAttrProxy",scope:"inner",params:[]},{comment:"",meta:{range:[3545,5660],filename:"attribute_proxy.js",lineno:92,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003540",name:"get",type:"FunctionExpression"},vars:{"":null,retValue:"createAttrProxy~attrHandler.get~retValue",cascRef:"createAttrProxy~attrHandler.get~cascRef",numRetVal:"createAttrProxy~attrHandler.get~numRetVal"}},undocumented:!0,name:"get",longname:"createAttrProxy~attrHandler.get",kind:"function",memberof:"createAttrProxy~attrHandler",scope:"static"},{comment:"",meta:{range:[3788,3798],filename:"attribute_proxy.js",lineno:96,columnno:15,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003556",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[3799,3807],filename:"attribute_proxy.js",lineno:96,columnno:26,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003558",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[3808,3812],filename:"attribute_proxy.js",lineno:96,columnno:35,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003560",name:"casc",type:"Identifier",value:"casc"}},undocumented:!0,name:"casc",longname:"casc",kind:"member",scope:"global"},{comment:"",meta:{range:[3813,3821],filename:"attribute_proxy.js",lineno:96,columnno:40,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003562",name:"callback",type:"Identifier",value:"callback"}},undocumented:!0,name:"callback",longname:"callback",kind:"member",scope:"global"},{comment:"",meta:{range:[3822,3827],filename:"attribute_proxy.js",lineno:96,columnno:49,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003564",name:"vocal",type:"Identifier",value:"vocal"}},undocumented:!0,name:"vocal",longname:"vocal",kind:"member",scope:"global"},{comment:"",meta:{range:[3954,3992],filename:"attribute_proxy.js",lineno:98,columnno:16,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003588",name:"triggerName",type:"CallExpression",value:""}},undocumented:!0,name:"triggerName",longname:"<anonymous>~triggerName",kind:"member",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[4010,4066],filename:"attribute_proxy.js",lineno:99,columnno:16,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003597",name:"trigger",type:"CallExpression",value:""}},undocumented:!0,name:"trigger",longname:"<anonymous>~trigger",kind:"member",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[4032,4059],filename:"attribute_proxy.js",lineno:99,columnno:38,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003602",name:"sourceAttribute",type:"Identifier",value:"triggerName"}},undocumented:!0,name:"sourceAttribute",longname:"sourceAttribute",kind:"member",scope:"global"},{comment:"",meta:{range:[4106,4113],filename:"attribute_proxy.js",lineno:100,columnno:38,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003611",name:"trigger",type:"Identifier",value:"trigger"}},undocumented:!0,name:"trigger",longname:"trigger",kind:"member",scope:"global"},{comment:"",meta:{range:[4114,4124],filename:"attribute_proxy.js",lineno:100,columnno:46,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003613",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[4125,4133],filename:"attribute_proxy.js",lineno:100,columnno:57,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003615",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[4134,4138],filename:"attribute_proxy.js",lineno:100,columnno:66,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003617",name:"casc",type:"Identifier",value:"casc"}},undocumented:!0,name:"casc",longname:"casc",kind:"member",scope:"global"},{comment:"",meta:{range:[4178,4197],filename:"attribute_proxy.js",lineno:102,columnno:19,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003624",name:"updates",type:"MemberExpression",value:"obj.updates"}},undocumented:!0,name:"updates",longname:"updates",kind:"member",scope:"global"},{comment:"",meta:{range:[4217,4519],filename:"attribute_proxy.js",lineno:103,columnno:16,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003629",name:"trueCallback",type:"ConditionalExpression",value:""}},undocumented:!0,name:"trueCallback",longname:"<anonymous>~trueCallback",kind:"member",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[4573,4611],filename:"attribute_proxy.js",lineno:111,columnno:52,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003681",name:"obj.attributes[undefined]",type:"MemberExpression",value:"obj.updates[undefined]",paramnames:[]}},undocumented:!0,name:"obj.attributes[undefined]",longname:"<anonymous>.obj.attributes[undefined]",kind:"member",memberof:"<anonymous>",scope:"static"},{comment:"",meta:{range:[4632,4652],filename:"attribute_proxy.js",lineno:112,columnno:18,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003693",name:"update",type:"MemberExpression",value:"obj.updates"}},undocumented:!0,name:"update",longname:"<anonymous>~update",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[4666,4682],filename:"attribute_proxy.js",lineno:113,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003699",name:"obj.updates",type:"ObjectExpression",value:"{}",paramnames:[]}},undocumented:!0,name:"updates",longname:"obj.updates",kind:"member",memberof:"obj",scope:"static"},{comment:"",meta:{range:[4873,4881],filename:"attribute_proxy.js",lineno:120,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003734",name:"retValue"}},undocumented:!0,name:"retValue",longname:"createAttrProxy~attrHandler.get~retValue",kind:"member",memberof:"createAttrProxy~attrHandler.get",scope:"inner",params:[]},{comment:"",meta:{range:[4968,4998],filename:"attribute_proxy.js",lineno:123,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003747",name:"retValue",type:"MemberExpression",funcscope:"createAttrProxy~attrHandler.get",value:"obj.repOrders[undefined]",paramnames:[]}},undocumented:!0,name:"retValue",longname:"createAttrProxy~attrHandler.get~retValue",kind:"member",memberof:"createAttrProxy~attrHandler.get",scope:"inner"},{comment:"",meta:{range:[5080,5108],filename:"attribute_proxy.js",lineno:126,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003764",name:"retValue",type:"MemberExpression",funcscope:"createAttrProxy~attrHandler.get",value:"obj.updates[undefined]",paramnames:[]}},undocumented:!0,name:"retValue",longname:"createAttrProxy~attrHandler.get~retValue",kind:"member",memberof:"createAttrProxy~attrHandler.get",scope:"inner"},{comment:"",meta:{range:[5160,5191],filename:"attribute_proxy.js",lineno:129,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003774",name:"retValue",type:"MemberExpression",funcscope:"createAttrProxy~attrHandler.get",value:"obj.attributes[undefined]",paramnames:[]}},undocumented:!0,name:"retValue",longname:"createAttrProxy~attrHandler.get~retValue",kind:"member",memberof:"createAttrProxy~attrHandler.get",scope:"inner"},{comment:"",meta:{range:[5234,5301],filename:"attribute_proxy.js",lineno:132,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003783",name:"cascRef",type:"TemplateLiteral",value:""}},undocumented:!0,name:"cascRef",longname:"createAttrProxy~attrHandler.get~cascRef",kind:"member",memberof:"createAttrProxy~attrHandler.get",scope:"inner",params:[]},{comment:"",meta:{range:[5315,5336],filename:"attribute_proxy.js",lineno:133,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003795",name:"numRetVal",type:"UnaryExpression",value:"+retValue"}},undocumented:!0,name:"numRetVal",longname:"createAttrProxy~attrHandler.get~numRetVal",kind:"member",memberof:"createAttrProxy~attrHandler.get",scope:"inner",params:[]},{comment:"",meta:{range:[5405,5425],filename:"attribute_proxy.js",lineno:135,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003812",name:"retValue",type:"Identifier",funcscope:"createAttrProxy~attrHandler.get",value:"numRetVal",paramnames:[]}},undocumented:!0,name:"retValue",longname:"createAttrProxy~attrHandler.get~retValue",kind:"member",memberof:"createAttrProxy~attrHandler.get",scope:"inner"},{comment:"",meta:{range:[5569,5610],filename:"attribute_proxy.js",lineno:137,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003838",name:"retValue",type:"MemberExpression",funcscope:"createAttrProxy~attrHandler.get",value:"cascades[undefined].defaultValue",paramnames:[]}},undocumented:!0,name:"retValue",longname:"createAttrProxy~attrHandler.get~retValue",kind:"member",memberof:"createAttrProxy~attrHandler.get",scope:"inner"},{comment:"",meta:{range:[5666,6340],filename:"attribute_proxy.js",lineno:142,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003847",name:"set",type:"FunctionExpression"},vars:{section:"createAttrProxy~attrHandler.set~section","obj.repOrders[undefined]":"obj.repOrders[undefined]","obj.updates[undefined]":"obj.updates[undefined]"}},undocumented:!0,name:"set",longname:"createAttrProxy~attrHandler.set",kind:"function",memberof:"createAttrProxy~attrHandler",scope:"static"},{comment:"",meta:{range:[5928,5967],filename:"attribute_proxy.js",lineno:147,columnno:14,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003872",name:"section",type:"CallExpression",value:""}},undocumented:!0,name:"section",longname:"createAttrProxy~attrHandler.set~section",kind:"member",memberof:"createAttrProxy~attrHandler.set",scope:"inner",params:[]},{comment:"",meta:{range:[5979,6009],filename:"attribute_proxy.js",lineno:148,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003881",name:"obj.repOrders[undefined]",type:"Identifier",value:"value",paramnames:[]}},undocumented:!0,name:"repOrders[undefined]",longname:"obj.repOrders[undefined]",kind:"member",memberof:"obj",scope:"static"},{comment:"",meta:{range:[6153,6178],filename:"attribute_proxy.js",lineno:152,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003920",name:"obj.updates[undefined]",type:"Identifier",value:"value",paramnames:[]}},undocumented:!0,name:"updates[undefined]",longname:"obj.updates[undefined]",kind:"member",memberof:"obj",scope:"static"},{comment:"",meta:{range:[6346,6558],filename:"attribute_proxy.js",lineno:159,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003939",name:"deleteProperty",type:"FunctionExpression"},vars:{"":null}},undocumented:!0,name:"deleteProperty",longname:"createAttrProxy~attrHandler.deleteProperty",kind:"function",memberof:"createAttrProxy~attrHandler",scope:"static"},{comment:`/**
 * Function that registers a function for being called via the funcs object. Returns true if the function was successfully registered, and false if it could not be registered for any reason.
 * @memberof Utilities
 * @param {object} funcObj - Object with keys that are names to register functions under and values that are functions.
 * @param {object} optionsObj - Object that contains options to use for this registration.
 * @param {string[]} optionsObj.type - Array that contains the types of specialized functions that apply to the functions being registered. Valid types are \`"opener"\`, \`"updater"\`, and \`"default"\`. \`"default"\` is always used, and never needs to be passed.
 * @returns {boolean} - True if the registration succeeded, false if it failed.
 * @example
 * //Basic Registration
 * const myFunc = function({trigger,attributes,sections,casc}){};
 * k.registerFuncs({myFunc});
 * 
 * //Register a function to run on sheet open
 * const openFunc = function({trigger,attributes,sections,casc}){};
 * k.registerFuncs({openFunc},{type:['opener']})
 * 
 * //Register a function to run on all events
 * const allFunc = function({trigger,attributes,sections,casc}){};
 * k.registerFuncs({allFunc},{type:['all']})
 */`,meta:{range:[7848,8878],filename:"attribute_proxy.js",lineno:189,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003972",name:"registerFuncs",type:"FunctionExpression"},vars:{typeArr:"Utilities.registerFuncs~typeArr",typeSwitch:"Utilities.registerFuncs~typeSwitch",setState:"Utilities.registerFuncs~setState","":null}},description:"Function that registers a function for being called via the funcs object. Returns true if the function was successfully registered, and false if it could not be registered for any reason.",memberof:"Utilities",params:[{type:{names:["object"]},description:"Object with keys that are names to register functions under and values that are functions.",name:"funcObj"},{type:{names:["object"]},description:"Object that contains options to use for this registration.",name:"optionsObj"},{type:{names:["Array.<string>"]},description:'Array that contains the types of specialized functions that apply to the functions being registered. Valid types are `"opener"`, `"updater"`, and `"default"`. `"default"` is always used, and never needs to be passed.',name:"optionsObj.type"}],returns:[{type:{names:["boolean"]},description:"- True if the registration succeeded, false if it failed."}],examples:[`//Basic Registration
const myFunc = function({trigger,attributes,sections,casc}){};
k.registerFuncs({myFunc});

//Register a function to run on sheet open
const openFunc = function({trigger,attributes,sections,casc}){};
k.registerFuncs({openFunc},{type:['opener']})

//Register a function to run on all events
const allFunc = function({trigger,attributes,sections,casc}){};
k.registerFuncs({allFunc},{type:['all']})`],name:"registerFuncs",longname:"Utilities.registerFuncs",kind:"function",scope:"static"},{comment:"",meta:{range:[8081,8153],filename:"attribute_proxy.js",lineno:194,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100003999",name:"typeArr",type:"ConditionalExpression",value:""}},undocumented:!0,name:"typeArr",longname:"Utilities.registerFuncs~typeArr",kind:"constant",memberof:"Utilities.registerFuncs",scope:"inner",params:[]},{comment:"",meta:{range:[8163,8306],filename:"attribute_proxy.js",lineno:195,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004014",name:"typeSwitch",type:"ObjectExpression",value:'{"undefined":""}'}},undocumented:!0,name:"typeSwitch",longname:"Utilities.registerFuncs~typeSwitch",kind:"constant",memberof:"Utilities.registerFuncs",scope:"inner",params:[]},{comment:"",meta:{range:[8182,8203],filename:"attribute_proxy.js",lineno:196,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004017",name:"opener",type:"Identifier",value:"openHandlers"}},undocumented:!0,name:"opener",longname:"Utilities.registerFuncs~typeSwitch.opener",kind:"member",memberof:"Utilities.registerFuncs~typeSwitch",scope:"static"},{comment:"",meta:{range:[8209,8233],filename:"attribute_proxy.js",lineno:197,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004019",name:"updater",type:"Identifier",value:"updateHandlers"}},undocumented:!0,name:"updater",longname:"Utilities.registerFuncs~typeSwitch.updater",kind:"member",memberof:"Utilities.registerFuncs~typeSwitch",scope:"static"},{comment:"",meta:{range:[8239,8258],filename:"attribute_proxy.js",lineno:198,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004021",name:"new",type:"Identifier",value:"initialSetups"}},undocumented:!0,name:"new",longname:"Utilities.registerFuncs~typeSwitch.new",kind:"member",memberof:"Utilities.registerFuncs~typeSwitch",scope:"static"},{comment:"",meta:{range:[8264,8281],filename:"attribute_proxy.js",lineno:199,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004023",name:"all",type:"Identifier",value:"allHandlers"}},undocumented:!0,name:"all",longname:"Utilities.registerFuncs~typeSwitch.all",kind:"member",memberof:"Utilities.registerFuncs~typeSwitch",scope:"static"},{comment:"",meta:{range:[8287,8302],filename:"attribute_proxy.js",lineno:200,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004025",name:"default",type:"Identifier",value:"funcs"}},undocumented:!0,name:"default",longname:"Utilities.registerFuncs~typeSwitch.default",kind:"member",memberof:"Utilities.registerFuncs~typeSwitch",scope:"static"},{comment:"",meta:{range:[8314,8322],filename:"attribute_proxy.js",lineno:202,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004028",name:"setState"}},undocumented:!0,name:"setState",longname:"Utilities.registerFuncs~setState",kind:"member",memberof:"Utilities.registerFuncs",scope:"inner",params:[]},{comment:"",meta:{range:[8516,8532],filename:"attribute_proxy.js",lineno:207,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004067",name:"setState",type:"Literal",funcscope:"<anonymous>",value:!1,paramnames:[]}},undocumented:!0,name:"setState",longname:"<anonymous>~setState",kind:"member",memberof:"<anonymous>",scope:"inner"},{comment:"",meta:{range:[8587,8617],filename:"attribute_proxy.js",lineno:209,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004077",name:"typeSwitch[undefined][undefined]",type:"Identifier",funcscope:"Utilities.registerFuncs",value:"value",paramnames:[]}},undocumented:!0,name:"undefined][undefined]",longname:"Utilities.registerFuncs~typeSwitch.undefined][undefined]",kind:"member",memberof:"Utilities.registerFuncs~typeSwitch",scope:"static"},{comment:"",meta:{range:[8627,8671],filename:"attribute_proxy.js",lineno:210,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004085",name:"setState",type:"ConditionalExpression",funcscope:"<anonymous>",value:"",paramnames:[]}},undocumented:!0,name:"setState",longname:"<anonymous>~setState",kind:"member",memberof:"<anonymous>",scope:"inner"},{comment:"",meta:{range:[8818,8834],filename:"attribute_proxy.js",lineno:213,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004102",name:"setState",type:"Literal",funcscope:"<anonymous>",value:!1,paramnames:[]}},undocumented:!0,name:"setState",longname:"<anonymous>~setState",kind:"member",memberof:"<anonymous>",scope:"inner"},{comment:"",meta:{range:[8880,8916],filename:"attribute_proxy.js",lineno:219,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004108",name:"kFuncs.registerFuncs",type:"Identifier",value:"registerFuncs",paramnames:[]}},undocumented:!0,name:"registerFuncs",longname:"kFuncs.registerFuncs",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Function that sets up the action calls used in the roller mixin.
 * @memberof Sheetworkers
 * @param {object} attributes - The attribute values of the character
 * @param {object[]} sections - All the repeating section IDs
 */`,meta:{range:[9159,9635],filename:"attribute_proxy.js",lineno:227,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004114",name:"setActionCalls",type:"FunctionExpression"},vars:{"":null}},description:"Function that sets up the action calls used in the roller mixin.",memberof:"Sheetworkers",params:[{type:{names:["object"]},description:"The attribute values of the character",name:"attributes"},{type:{names:["Array.<object>"]},description:"All the repeating section IDs",name:"sections"}],name:"setActionCalls",longname:"Sheetworkers.setActionCalls",kind:"function",scope:"static"},{comment:"",meta:{range:[9186,9196],filename:"attribute_proxy.js",lineno:227,columnno:33,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004118",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[9197,9205],filename:"attribute_proxy.js",lineno:227,columnno:44,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004120",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[9307,9344],filename:"attribute_proxy.js",lineno:230,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004140",name:"fieldAction",type:"CallExpression",value:""}},undocumented:!0,name:"fieldAction",longname:"<anonymous>~fieldAction",kind:"member",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[9411,9518],filename:"attribute_proxy.js",lineno:233,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004162",name:"attributes[undefined]",type:"TemplateLiteral",value:"",paramnames:[]}},undocumented:!0,name:"attributes[undefined]",longname:"attributes[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[9547,9620],filename:"attribute_proxy.js",lineno:236,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004187",name:"attributes[undefined]",type:"TemplateLiteral",value:"",paramnames:[]}},undocumented:!0,name:"attributes[undefined]",longname:"attributes[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[9637,9674],filename:"attribute_proxy.js",lineno:240,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004203",name:"funcs.setActionCalls",type:"Identifier",value:"setActionCalls",paramnames:[]}},undocumented:!0,name:"setActionCalls",longname:"funcs.setActionCalls",kind:"member",memberof:"funcs",scope:"static"},{comment:`/**
 * Function to call a function previously registered to the funcs object. May not be used that much in actual sheets, but very useful when writing unit tests for your sheet. Either returns the function or null if no function exists.
 * @memberof Sheetworkers
 * @param {string} funcName - The name of the function to invoke.
 * @param {...any} args - The arguments to call the function with.
 * @returns {function|null}
 * @example
 * //Call myFunc with two arguments
 * k.callFunc('myFunc','an argument','another argument');
 */`,meta:{range:[10217,10430],filename:"attribute_proxy.js",lineno:252,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004209",name:"callFunc",type:"FunctionExpression"}},description:"Function to call a function previously registered to the funcs object. May not be used that much in actual sheets, but very useful when writing unit tests for your sheet. Either returns the function or null if no function exists.",memberof:"Sheetworkers",params:[{type:{names:["string"]},description:"The name of the function to invoke.",name:"funcName"},{type:{names:["any"]},variable:!0,description:"The arguments to call the function with.",name:"args"}],returns:[{type:{names:["function","null"]}}],examples:[`//Call myFunc with two arguments
k.callFunc('myFunc','an argument','another argument');`],name:"callFunc",longname:"Sheetworkers.callFunc",kind:"function",scope:"static"},{comment:"",meta:{range:[10432,10458],filename:"attribute_proxy.js",lineno:261,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004246",name:"kFuncs.callFunc",type:"Identifier",value:"callFunc",paramnames:[]}},undocumented:!0,name:"callFunc",longname:"kFuncs.callFunc",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * The K-scaffold provides several variables to allow your scripts to tap into its information flow.
 * @namespace Sheetworkers.Variables
 */`,meta:{filename:"kvariables.js",lineno:1,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{}},description:"The K-scaffold provides several variables to allow your scripts to tap into its information flow.",kind:"namespace",name:"Variables",memberof:"Sheetworkers",longname:"Sheetworkers.Variables",scope:"static"},{comment:`/**
 * This stores the name of your sheet for use in the logging functions {@link log} and {@link debug}. Accessible by \`k.sheetName\`
 * @memberof Variables
 * @var
 * @type {string}
 */`,meta:{range:[337,374],filename:"kvariables.js",lineno:11,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004254",name:"sheetName",type:"Literal",value:"kScaffold Powered Sheet"}},description:"This stores the name of your sheet for use in the logging functions {@link log} and {@link debug}. Accessible by `k.sheetName`",memberof:"Variables",kind:"member",type:{names:["string"]},name:"sheetName",longname:"Variables.sheetName",scope:"static",params:[]},{comment:"",meta:{range:[376,404],filename:"kvariables.js",lineno:12,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004258",name:"kFuncs.sheetName",type:"Identifier",value:"sheetName",paramnames:[]}},undocumented:!0,name:"sheetName",longname:"kFuncs.sheetName",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
	* This stores the version of your sheet for use in the logging functions{@link log} and {@link debug}. It is also stored in the sheet_version attribute on your character sheet. Accessible via \`k.version\`
 * @memberof Variables
	* @var
	* @type {number}
	*/`,meta:{range:[672,683],filename:"kvariables.js",lineno:19,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004264",name:"version",type:"Literal",value:0}},description:"This stores the version of your sheet for use in the logging functions{@link log} and {@link debug}. It is also stored in the sheet_version attribute on your character sheet. Accessible via `k.version`",memberof:"Variables",kind:"member",type:{names:["number"]},name:"version",longname:"Variables.version",scope:"static",params:[]},{comment:"",meta:{range:[685,709],filename:"kvariables.js",lineno:20,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004268",name:"kFuncs.version",type:"Identifier",value:"version",paramnames:[]}},undocumented:!0,name:"version",longname:"kFuncs.version",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
	* A boolean flag that tells the script whether to enable or disable {@link debug} calls. If the version of the sheet is \`0\`, or an attribute named \`debug_mode\` is found on opening this is set to true for your entire session. Otherwise, it remains false.
 * @memberof Variables
	* @var
	* @type {boolean}
	*/`,meta:{range:[1028,1045],filename:"kvariables.js",lineno:27,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004274",name:"debugMode",type:"Literal",value:!1}},description:"A boolean flag that tells the script whether to enable or disable {@link debug} calls. If the version of the sheet is `0`, or an attribute named `debug_mode` is found on opening this is set to true for your entire session. Otherwise, it remains false.",memberof:"Variables",kind:"member",type:{names:["boolean"]},name:"debugMode",longname:"Variables.debugMode",scope:"static",params:[]},{comment:"",meta:{range:[1047,1075],filename:"kvariables.js",lineno:28,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004278",name:"kFuncs.debugMode",type:"Identifier",value:"debugMode",paramnames:[]}},undocumented:!0,name:"debugMode",longname:"kFuncs.debugMode",kind:"member",memberof:"kFuncs",scope:"static"},{comment:"",meta:{range:[1083,1093],filename:"kvariables.js",lineno:29,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004284",name:"funcs",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"funcs",longname:"funcs",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[1095,1115],filename:"kvariables.js",lineno:30,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004288",name:"kFuncs.funcs",type:"Identifier",value:"funcs",paramnames:[]}},undocumented:!0,name:"funcs",longname:"kFuncs.funcs",kind:"member",memberof:"kFuncs",scope:"static"},{comment:"",meta:{range:[1123,1142],filename:"kvariables.js",lineno:31,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004294",name:"updateHandlers",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"updateHandlers",longname:"updateHandlers",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[1150,1167],filename:"kvariables.js",lineno:32,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004298",name:"openHandlers",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"openHandlers",longname:"openHandlers",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[1175,1193],filename:"kvariables.js",lineno:33,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004302",name:"initialSetups",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"initialSetups",longname:"initialSetups",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[1201,1217],filename:"kvariables.js",lineno:34,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004306",name:"allHandlers",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"allHandlers",longname:"allHandlers",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[1225,1238],filename:"kvariables.js",lineno:35,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004310",name:"addFuncs",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"addFuncs",longname:"addFuncs",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[1247,1275],filename:"kvariables.js",lineno:37,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004314",name:"kscaffoldJSVersion",type:"Literal",value:"1.0.0"}},undocumented:!0,name:"kscaffoldJSVersion",longname:"kscaffoldJSVersion",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[1283,1312],filename:"kvariables.js",lineno:38,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004318",name:"kscaffoldPUGVersion",type:"Literal",value:"1.0.0"}},undocumented:!0,name:"kscaffoldPUGVersion",longname:"kscaffoldPUGVersion",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[94,108],filename:"listeners.js",lineno:3,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004324",name:"listeners",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"listeners",longname:"listeners",kind:"constant",scope:"global",params:[]},{comment:`/**
 * The array of attribute names that the k-scaffold gets by default. Does not incude repeating attributes.
 * @memberof Variables
 * @var
 * @type {array}
 */`,meta:{range:[280,564],filename:"listeners.js",lineno:11,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004328",name:"baseGet",type:"CallExpression",value:""}},description:"The array of attribute names that the k-scaffold gets by default. Does not incude repeating attributes.",memberof:"Variables",kind:"constant",type:{names:["array"]},name:"baseGet",longname:"Variables.baseGet",scope:"static",params:[]},{comment:"",meta:{range:[484,538],filename:"listeners.js",lineno:16,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004370",name:"listeners[undefined]",type:"MemberExpression",value:"detailObj.listenerFunc",paramnames:[]}},undocumented:!0,name:"listeners[undefined]",longname:"listeners[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[566,590],filename:"listeners.js",lineno:20,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004383",name:"kFuncs.baseGet",type:"Identifier",value:"baseGet",paramnames:[]}},undocumented:!0,name:"baseGet",longname:"kFuncs.baseGet",kind:"member",memberof:"kFuncs",scope:"static"},{comment:"",meta:{range:[599,1025],filename:"listeners.js",lineno:22,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004389",name:"registerEventHandlers",type:"FunctionExpression"},vars:{"":null}},undocumented:!0,name:"registerEventHandlers",longname:"registerEventHandlers",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[678,705],filename:"listeners.js",lineno:24,columnno:9,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004402",name:"funcKeys",type:"CallExpression",value:""}},undocumented:!0,name:"funcKeys",longname:"funcKeys",kind:"member",scope:"global"},{comment:"",meta:{range:[706,711],filename:"listeners.js",lineno:24,columnno:37,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004408",name:"funcs",type:"Identifier",value:"funcs"}},undocumented:!0,name:"funcs",longname:"funcs",kind:"member",scope:"global"},{comment:`/**
 * Function to add a repeating section when the add button of a customControlFieldset or inlineFieldset is clicked.
 * @memberof Sheetworkers
 * @param {object} event - The R20 event object
 */`,meta:{range:[1356,2039],filename:"listeners.js",lineno:42,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004456",name:"addItem",type:"FunctionExpression"},vars:{undefined:null,section:"Sheetworkers.addItem~section","":null}},description:"Function to add a repeating section when the add button of a customControlFieldset or inlineFieldset is clicked.",memberof:"Sheetworkers",params:[{type:{names:["object"]},description:"The R20 event object",name:"event"}],name:"addItem",longname:"Sheetworkers.addItem",kind:"function",scope:"static"},{comment:"",meta:{range:[1443,1479],filename:"listeners.js",lineno:44,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004470",name:"section",type:"CallExpression",funcscope:"Sheetworkers.addItem",value:"",paramnames:[]}},undocumented:!0,name:"section",longname:"Sheetworkers.addItem~section",kind:"member",memberof:"Sheetworkers.addItem",scope:"inner"},{comment:"",meta:{range:[1501,2031],filename:"listeners.js",lineno:46,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004482",name:"callback",type:"ArrowFunctionExpression"},vars:{row:"callback~row","attributes[undefined]":null,trigger:"callback~trigger","":null}},undocumented:!0,name:"callback",longname:"callback",kind:"function",scope:"global"},{comment:"",meta:{range:[1552,1590],filename:"listeners.js",lineno:47,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004489",name:"row",type:"CallExpression",value:""}},undocumented:!0,name:"row",longname:"callback~row",kind:"member",memberof:"callback",scope:"inner",params:[]},{comment:"",meta:{range:[1605,1608],filename:"listeners.js",lineno:48,columnno:13,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004499",name:"row",type:"Identifier",value:"row"}},undocumented:!0,name:"row",longname:"row",kind:"member",scope:"global"},{comment:"",meta:{range:[1618,1648],filename:"listeners.js",lineno:49,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004502",name:"attributes[undefined]",type:"Literal",value:"",paramnames:[]}},undocumented:!0,name:"attributes[undefined]",longname:"attributes[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[1672,1682],filename:"listeners.js",lineno:50,columnno:22,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004514",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[1683,1691],filename:"listeners.js",lineno:50,columnno:33,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004516",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[1707,1758],filename:"listeners.js",lineno:51,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004519",name:"trigger",type:"MemberExpression",value:"cascades[undefined]"}},undocumented:!0,name:"trigger",longname:"callback~trigger",kind:"constant",memberof:"callback",scope:"inner",params:[]},{comment:"",meta:{range:[1908,1918],filename:"listeners.js",lineno:55,columnno:29,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004555",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[1919,1927],filename:"listeners.js",lineno:55,columnno:40,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004557",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[1928,1932],filename:"listeners.js",lineno:55,columnno:49,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004559",name:"casc",type:"Identifier",value:"casc"}},undocumented:!0,name:"casc",longname:"casc",kind:"member",scope:"global"},{comment:"",meta:{range:[1933,1940],filename:"listeners.js",lineno:55,columnno:54,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004561",name:"trigger",type:"Identifier",value:"trigger"}},undocumented:!0,name:"trigger",longname:"trigger",kind:"member",scope:"global"},{comment:"",meta:{range:[1998,2008],filename:"listeners.js",lineno:59,columnno:22,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004569",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[2009,2017],filename:"listeners.js",lineno:59,columnno:33,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004571",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[2018,2022],filename:"listeners.js",lineno:59,columnno:42,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004573",name:"casc",type:"Identifier",value:"casc"}},undocumented:!0,name:"casc",longname:"casc",kind:"member",scope:"global"},{comment:"",meta:{range:[2041,2064],filename:"listeners.js",lineno:63,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004576",name:"funcs.addItem",type:"Identifier",value:"addItem",paramnames:[]}},undocumented:!0,name:"addItem",longname:"funcs.addItem",kind:"member",memberof:"funcs",scope:"static"},{comment:`/**
 * @namespace {object} mock20
 */`,meta:{filename:"mock20.js",lineno:4,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{}},kind:"namespace",name:"mock20",type:{names:["object"]},description:"mock20",longname:"mock20",scope:"global"},{comment:`/**
 * @memberof mock20
 * @var
 * A mock environment variable for keeping track of triggers, other character information, and predefined query results.
 * @property {array} triggers - The triggers that have been registered by \`on\`
 * @property {object} queryResponses - Pre defined results you want the roll parser to use for a given roll query. Keys in the objects are roll query prompts. Values are what the user input should be for that query.
 */`,meta:{filename:"mock20.js",lineno:7,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{}},memberof:"mock20",kind:"member",name:"A",properties:[{type:{names:["array"]},description:"The triggers that have been registered by `on`",name:"triggers"},{type:{names:["object"]},description:"Pre defined results you want the roll parser to use for a given roll query. Keys in the objects are roll query prompts. Values are what the user input should be for that query.",name:"queryResponses"}],scope:"static",longname:"mock20.A"},{comment:"",meta:{range:[648,923],filename:"mock20.js",lineno:14,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004592",name:"environment",type:"ObjectExpression",value:'{"triggers":"","otherCharacters":"","queryResponses":""}'}},undocumented:!0,name:"environment",longname:"environment",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[696,708],filename:"mock20.js",lineno:16,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004595",name:"triggers",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"triggers",longname:"environment.triggers",kind:"member",memberof:"environment",scope:"static"},{comment:"",meta:{range:[712,814],filename:"mock20.js",lineno:17,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004597",name:"otherCharacters",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"otherCharacters",longname:"environment.otherCharacters",kind:"member",memberof:"environment",scope:"static"},{comment:"",meta:{range:[818,921],filename:"mock20.js",lineno:20,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004599",name:"queryResponses",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"queryResponses",longname:"environment.queryResponses",kind:"member",memberof:"environment",scope:"static"},{comment:"",meta:{range:[925,957],filename:"mock20.js",lineno:24,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004602",name:"global.environment",type:"Identifier",value:"environment",paramnames:[]}},undocumented:!0,name:"environment",longname:"global.environment",kind:"member",memberof:"global",scope:"static"},{comment:"",meta:{range:[966,1048],filename:"mock20.js",lineno:26,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004608",name:"on",type:"CallExpression",value:""}},undocumented:!0,name:"on",longname:"on",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[1028,1035],filename:"mock20.js",lineno:27,columnno:30,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004626",name:"trigger",type:"Identifier",value:"trigger"}},undocumented:!0,name:"trigger",longname:"trigger",kind:"member",scope:"global"},{comment:"",meta:{range:[1037,1041],filename:"mock20.js",lineno:27,columnno:39,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004628",name:"func",type:"Identifier",value:"func"}},undocumented:!0,name:"func",longname:"func",kind:"member",scope:"global"},{comment:"",meta:{range:[1050,1064],filename:"mock20.js",lineno:29,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004631",name:"global.on",type:"Identifier",value:"on",paramnames:[]}},undocumented:!0,name:"on",longname:"global.on",kind:"member",memberof:"global",scope:"static"},{comment:"",meta:{range:[1072,1308],filename:"mock20.js",lineno:30,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004637",name:"getAttrs",type:"CallExpression",value:""}},undocumented:!0,name:"getAttrs",longname:"getAttrs",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[1118,1129],filename:"mock20.js",lineno:31,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004648",name:"values",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"values",longname:"<anonymous>~values",kind:"member",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[1144,1148],filename:"mock20.js",lineno:32,columnno:13,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004653",name:"attr"}},undocumented:!0,name:"attr",longname:"<anonymous>~attr",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[1201,1244],filename:"mock20.js",lineno:33,columnno:40,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004664",name:"values[undefined]",type:"MemberExpression",funcscope:"<anonymous>",value:"environment.attributes[undefined]",paramnames:[]}},undocumented:!0,name:"undefined]",longname:"<anonymous>~values.undefined]",kind:"member",memberof:"<anonymous>~values",scope:"static"},{comment:"",meta:{range:[1310,1336],filename:"mock20.js",lineno:37,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004683",name:"global.getAttrs",type:"Identifier",value:"getAttrs",paramnames:[]}},undocumented:!0,name:"getAttrs",longname:"global.getAttrs",kind:"member",memberof:"global",scope:"static"},{comment:"",meta:{range:[1344,1597],filename:"mock20.js",lineno:38,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004689",name:"setAttrs",type:"CallExpression",value:""}},undocumented:!0,name:"setAttrs",longname:"setAttrs",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[1442,1459],filename:"mock20.js",lineno:39,columnno:49,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004709",name:"callback",type:"Identifier",funcscope:"<anonymous>",value:"params",paramnames:[]}},undocumented:!0,name:"callback",longname:"<anonymous>~callback",kind:"member",memberof:"<anonymous>",scope:"inner"},{comment:"",meta:{range:[1474,1478],filename:"mock20.js",lineno:40,columnno:13,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004714",name:"attr"}},undocumented:!0,name:"attr",longname:"<anonymous>~attr",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[1496,1539],filename:"mock20.js",lineno:41,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004719",name:"environment.attributes[undefined]",type:"MemberExpression",value:"submit[undefined]",paramnames:[]}},undocumented:!0,name:"attributes[undefined]",longname:"environment.attributes[undefined]",kind:"member",memberof:"environment",scope:"static"},{comment:"",meta:{range:[1599,1625],filename:"mock20.js",lineno:45,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004737",name:"global.setAttrs",type:"Identifier",value:"setAttrs",paramnames:[]}},undocumented:!0,name:"setAttrs",longname:"global.setAttrs",kind:"member",memberof:"global",scope:"static"},{comment:"",meta:{range:[1633,2039],filename:"mock20.js",lineno:46,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004743",name:"getSectionIDs",type:"CallExpression",value:""}},undocumented:!0,name:"getSectionIDs",longname:"getSectionIDs",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[1688,1696],filename:"mock20.js",lineno:47,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004754",name:"ids",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"ids",longname:"<anonymous>~ids",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[1706,1790],filename:"mock20.js",lineno:48,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004758",name:"sectionName",type:"ConditionalExpression",value:""}},undocumented:!0,name:"sectionName",longname:"<anonymous>~sectionName",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[1800,1835],filename:"mock20.js",lineno:49,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004774",name:"attributes",type:"MemberExpression",value:"environment.attributes"}},undocumented:!0,name:"attributes",longname:"<anonymous>~attributes",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[1850,1854],filename:"mock20.js",lineno:50,columnno:13,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004781",name:"attr"}},undocumented:!0,name:"attr",longname:"<anonymous>~attr",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[1955,1980],filename:"mock20.js",lineno:53,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004806",name:"idMap",type:"ArrayExpression",value:'[""]'}},undocumented:!0,name:"idMap",longname:"<anonymous>~idMap",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[2041,2077],filename:"mock20.js",lineno:56,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004823",name:"global.getSectionIDs",type:"Identifier",value:"getSectionIDs",paramnames:[]}},undocumented:!0,name:"getSectionIDs",longname:"global.getSectionIDs",kind:"member",memberof:"global",scope:"static"},{comment:"",meta:{range:[2085,2446],filename:"mock20.js",lineno:57,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004829",name:"getSectionIDsSync",type:"CallExpression",value:""}},undocumented:!0,name:"getSectionIDsSync",longname:"getSectionIDsSync",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[2134,2142],filename:"mock20.js",lineno:58,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004839",name:"ids",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"ids",longname:"<anonymous>~ids",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[2152,2236],filename:"mock20.js",lineno:59,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004843",name:"sectionName",type:"ConditionalExpression",value:""}},undocumented:!0,name:"sectionName",longname:"<anonymous>~sectionName",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[2246,2281],filename:"mock20.js",lineno:60,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004859",name:"attributes",type:"MemberExpression",value:"environment.attributes"}},undocumented:!0,name:"attributes",longname:"<anonymous>~attributes",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[2296,2300],filename:"mock20.js",lineno:61,columnno:13,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004866",name:"attr"}},undocumented:!0,name:"attr",longname:"<anonymous>~attr",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[2401,2426],filename:"mock20.js",lineno:64,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004891",name:"idMap",type:"ArrayExpression",value:'[""]'}},undocumented:!0,name:"idMap",longname:"<anonymous>~idMap",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[2448,2492],filename:"mock20.js",lineno:67,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004901",name:"global.getSectionIDsSync",type:"Identifier",value:"getSectionIDsSync",paramnames:[]}},undocumented:!0,name:"getSectionIDsSync",longname:"global.getSectionIDsSync",kind:"member",memberof:"global",scope:"static"},{comment:"",meta:{range:[2500,2691],filename:"mock20.js",lineno:68,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004907",name:"removeRepeatingRow",type:"CallExpression",value:""}},undocumented:!0,name:"removeRepeatingRow",longname:"removeRepeatingRow",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[2545,2580],filename:"mock20.js",lineno:69,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004917",name:"attributes",type:"MemberExpression",value:"environment.attributes"}},undocumented:!0,name:"attributes",longname:"<anonymous>~attributes",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[2595,2599],filename:"mock20.js",lineno:70,columnno:13,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004924",name:"attr"}},undocumented:!0,name:"attr",longname:"<anonymous>~attr",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[2693,2739],filename:"mock20.js",lineno:74,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004945",name:"global.removeRepeatingRow",type:"Identifier",value:"removeRepeatingRow",paramnames:[]}},undocumented:!0,name:"removeRepeatingRow",longname:"global.removeRepeatingRow",kind:"member",memberof:"global",scope:"static"},{comment:"",meta:{range:[2747,3545],filename:"mock20.js",lineno:75,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004951",name:"getCompendiumPage",type:"CallExpression",value:""}},undocumented:!0,name:"getCompendiumPage",longname:"getCompendiumPage",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[2806,2828],filename:"mock20.js",lineno:76,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004962",name:"pages",type:"Identifier",value:"compendiumData"}},undocumented:!0,name:"pages",longname:"<anonymous>~pages",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[3069,3151],filename:"mock20.js",lineno:83,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004987",name:"response",type:"ObjectExpression",value:'{"Name":"","Category":"","data":""}'}},undocumented:!0,name:"response",longname:"<anonymous>~response",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[3088,3102],filename:"mock20.js",lineno:84,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004990",name:"Name",type:"Identifier",value:"pageName"}},undocumented:!0,name:"Name",longname:"<anonymous>~response.Name",kind:"member",memberof:"<anonymous>~response",scope:"static"},{comment:"",meta:{range:[3110,3128],filename:"mock20.js",lineno:85,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004992",name:"Category",type:"Identifier",value:"category"}},undocumented:!0,name:"Category",longname:"<anonymous>~response.Category",kind:"member",memberof:"<anonymous>~response",scope:"static"},{comment:"",meta:{range:[3136,3144],filename:"mock20.js",lineno:86,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100004994",name:"data",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"data",longname:"<anonymous>~response.data",kind:"member",memberof:"<anonymous>~response",scope:"static"},{comment:"",meta:{range:[3177,3212],filename:"mock20.js",lineno:88,columnno:24,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005001",name:"response.data",type:"MemberExpression",funcscope:"<anonymous>",value:"pages[undefined].data",paramnames:[]}},undocumented:!0,name:"data",longname:"<anonymous>~response.data",kind:"member",memberof:"<anonymous>~response",scope:"static"},{comment:"",meta:{range:[3323,3337],filename:"mock20.js",lineno:91,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005027",name:"pageArray",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"pageArray",longname:"<anonymous>~pageArray",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[3354,3358],filename:"mock20.js",lineno:92,columnno:15,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005032",name:"page"}},undocumented:!0,name:"page",longname:"<anonymous>~page",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[3547,3591],filename:"mock20.js",lineno:98,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005066",name:"global.getCompendiumPage",type:"Identifier",value:"getCompendiumPage",paramnames:[]}},undocumented:!0,name:"getCompendiumPage",longname:"global.getCompendiumPage",kind:"member",memberof:"global",scope:"static"},{comment:"",meta:{range:[3599,4265],filename:"mock20.js",lineno:99,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005072",name:"generateUUID",type:"CallExpression",value:""}},undocumented:!0,name:"generateUUID",longname:"generateUUID",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[3634,3639],filename:"mock20.js",lineno:100,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005081",name:"a",type:"Literal",value:0}},undocumented:!0,name:"a",longname:"<anonymous>~a",kind:"member",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[3645,3651],filename:"mock20.js",lineno:101,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005084",name:"b",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"b",longname:"<anonymous>~b",kind:"member",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[3685,3713],filename:"mock20.js",lineno:103,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005092",name:"c",type:"BinaryExpression",value:""}},undocumented:!0,name:"c",longname:"<anonymous>~c",kind:"member",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[3721,3732],filename:"mock20.js",lineno:104,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005101",name:"d",type:"BinaryExpression",value:""}},undocumented:!0,name:"d",longname:"<anonymous>~d",kind:"member",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[3738,3743],filename:"mock20.js",lineno:105,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005107",name:"a",type:"Identifier",funcscope:"<anonymous>",value:"c",paramnames:[]}},undocumented:!0,name:"a",longname:"<anonymous>~a",kind:"member",memberof:"<anonymous>",scope:"inner"},{comment:"",meta:{range:[3758,3770],filename:"mock20.js",lineno:106,columnno:13,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005112",name:"e",type:"CallExpression",value:""}},undocumented:!0,name:"e",longname:"<anonymous>~e",kind:"member",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[3772,3777],filename:"mock20.js",lineno:106,columnno:27,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005117",name:"f",type:"Literal",value:7}},undocumented:!0,name:"f",longname:"<anonymous>~f",kind:"member",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[3799,3887],filename:"mock20.js",lineno:107,columnno:7,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005127",name:"e[undefined]",type:"CallExpression",funcscope:"<anonymous>",value:"",paramnames:[]}},undocumented:!0,name:"undefined]",longname:"<anonymous>~e.undefined]",kind:"member",memberof:"<anonymous>~e",scope:"static"},{comment:"",meta:{range:[3897,3919],filename:"mock20.js",lineno:108,columnno:7,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005138",name:"c",type:"CallExpression",funcscope:"<anonymous>",value:"",paramnames:[]}},undocumented:!0,name:"c",longname:"<anonymous>~c",kind:"member",memberof:"<anonymous>",scope:"inner"},{comment:"",meta:{range:[3926,3940],filename:"mock20.js",lineno:109,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005148",name:"c",type:"CallExpression",funcscope:"<anonymous>",value:"",paramnames:[]}},undocumented:!0,name:"c",longname:"<anonymous>~c",kind:"member",memberof:"<anonymous>",scope:"inner"},{comment:"",meta:{range:[3966,3972],filename:"mock20.js",lineno:111,columnno:11,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005159",name:"f",type:"Literal",funcscope:"<anonymous>",value:11,paramnames:[]}},undocumented:!0,name:"f",longname:"<anonymous>~f",kind:"member",memberof:"<anonymous>",scope:"inner"},{comment:"",meta:{range:[4002,4010],filename:"mock20.js",lineno:111,columnno:47,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005174",name:"b[undefined]",type:"Literal",funcscope:"<anonymous>",value:0,paramnames:[]}},undocumented:!0,name:"undefined]",longname:"<anonymous>~b.undefined]",kind:"member",memberof:"<anonymous>~b",scope:"static"},{comment:"",meta:{range:[4042,4047],filename:"mock20.js",lineno:113,columnno:16,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005185",name:"f",type:"Literal",funcscope:"<anonymous>",value:0,paramnames:[]}},undocumented:!0,name:"f",longname:"<anonymous>~f",kind:"member",memberof:"<anonymous>",scope:"inner"},{comment:"",meta:{range:[4062,4099],filename:"mock20.js",lineno:113,columnno:36,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005194",name:"b[undefined]",type:"CallExpression",funcscope:"<anonymous>",value:"",paramnames:[]}},undocumented:!0,name:"undefined]",longname:"<anonymous>~b.undefined]",kind:"member",memberof:"<anonymous>~b",scope:"static"},{comment:"",meta:{range:[4110,4115],filename:"mock20.js",lineno:114,columnno:9,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005209",name:"f",type:"Literal",funcscope:"<anonymous>",value:0,paramnames:[]}},undocumented:!0,name:"f",longname:"<anonymous>~f",kind:"member",memberof:"<anonymous>",scope:"inner"},{comment:"",meta:{range:[4136,4220],filename:"mock20.js",lineno:115,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005218",name:"c",type:"CallExpression",funcscope:"<anonymous>",value:"",paramnames:[]}},undocumented:!0,name:"c",longname:"<anonymous>~c",kind:"member",memberof:"<anonymous>",scope:"inner"},{comment:"",meta:{range:[4267,4301],filename:"mock20.js",lineno:119,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005235",name:"global.generateUUID",type:"Identifier",value:"generateUUID",paramnames:[]}},undocumented:!0,name:"generateUUID",longname:"global.generateUUID",kind:"member",memberof:"global",scope:"static"},{comment:"",meta:{range:[4309,4385],filename:"mock20.js",lineno:120,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005241",name:"generateRowID",type:"CallExpression",value:""}},undocumented:!0,name:"generateRowID",longname:"generateRowID",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[4387,4423],filename:"mock20.js",lineno:123,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005258",name:"global.generateRowID",type:"Identifier",value:"generateRowID",paramnames:[]}},undocumented:!0,name:"generateRowID",longname:"global.generateRowID",kind:"member",memberof:"global",scope:"static"},{comment:"",meta:{range:[4431,4765],filename:"mock20.js",lineno:124,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005264",name:"simulateEvent",type:"CallExpression",value:""}},undocumented:!0,name:"simulateEvent",longname:"simulateEvent",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[4522,4585],filename:"mock20.js",lineno:126,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005284",name:"splitTriggers",type:"LogicalExpression",value:""}},undocumented:!0,name:"splitTriggers",longname:"<anonymous>~splitTriggers",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[4704,4727],filename:"mock20.js",lineno:130,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005317",name:"sourceAttribute",type:"Literal",value:"test"}},undocumented:!0,name:"sourceAttribute",longname:"sourceAttribute",kind:"member",scope:"global"},{comment:"",meta:{range:[4767,4803],filename:"mock20.js",lineno:136,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005320",name:"global.simulateEvent",type:"Identifier",value:"simulateEvent",paramnames:[]}},undocumented:!0,name:"simulateEvent",longname:"global.simulateEvent",kind:"member",memberof:"global",scope:"static"},{comment:"",meta:{range:[4811,4852],filename:"mock20.js",lineno:137,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005326",name:"getTranslationByKey",type:"CallExpression",value:""}},undocumented:!0,name:"getTranslationByKey",longname:"getTranslationByKey",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[4854,4902],filename:"mock20.js",lineno:138,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005336",name:"global.getTranslationByKey",type:"Identifier",value:"getTranslationByKey",paramnames:[]}},undocumented:!0,name:"getTranslationByKey",longname:"global.getTranslationByKey",kind:"member",memberof:"global",scope:"static"},{comment:"",meta:{range:[4977,5143],filename:"mock20.js",lineno:141,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005342",name:"extractRollTemplate",type:"ArrowFunctionExpression"},vars:{rollTemplate:"extractRollTemplate~rollTemplate","environment.attributes.__rolltemplate":"environment.attributes.__rolltemplate"}},undocumented:!0,name:"extractRollTemplate",longname:"extractRollTemplate",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[5025,5084],filename:"mock20.js",lineno:142,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005348",name:"rollTemplate",type:"ChainExpression",value:""}},undocumented:!0,name:"rollTemplate",longname:"extractRollTemplate~rollTemplate",kind:"constant",memberof:"extractRollTemplate",scope:"inner",params:[]},{comment:"",meta:{range:[5088,5140],filename:"mock20.js",lineno:143,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005352",name:"environment.attributes.__rolltemplate",type:"Identifier",value:"rollTemplate",paramnames:[]}},undocumented:!0,name:"__rolltemplate",longname:"environment.attributes.__rolltemplate",kind:"member",memberof:"environment.attributes",scope:"static"},{comment:"",meta:{range:[5152,5366],filename:"mock20.js",lineno:146,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005360",name:"cleanRollElements",type:"ArrowFunctionExpression"},vars:{cleanText:"cleanRollElements~cleanText",splitText:"cleanRollElements~splitText"}},undocumented:!0,name:"cleanRollElements",longname:"cleanRollElements",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[5193,5287],filename:"mock20.js",lineno:147,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005366",name:"cleanText",type:"CallExpression",value:""}},undocumented:!0,name:"cleanText",longname:"cleanRollElements~cleanText",kind:"constant",memberof:"cleanRollElements",scope:"inner",params:[]},{comment:"",meta:{range:[5297,5343],filename:"mock20.js",lineno:150,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005380",name:"splitText",type:"CallExpression",value:""}},undocumented:!0,name:"splitText",longname:"cleanRollElements~splitText",kind:"constant",memberof:"cleanRollElements",scope:"inner",params:[]},{comment:"",meta:{range:[5375,5613],filename:"mock20.js",lineno:154,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005390",name:"extractRollElements",type:"ArrowFunctionExpression"},vars:{rollElements:"extractRollElements~rollElements"}},undocumented:!0,name:"extractRollElements",longname:"extractRollElements",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[5423,5485],filename:"mock20.js",lineno:155,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005396",name:"rollElements",type:"CallExpression",value:""}},undocumented:!0,name:"rollElements",longname:"extractRollElements~rollElements",kind:"constant",memberof:"extractRollElements",scope:"inner",params:[]},{comment:"",meta:{range:[5622,5687],filename:"mock20.js",lineno:160,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005425",name:"getExpression",type:"ArrowFunctionExpression"}},undocumented:!0,name:"getExpression",longname:"getExpression",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[5696,5885],filename:"mock20.js",lineno:162,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005436",name:"getDiceOrHalf",type:"ArrowFunctionExpression"},vars:{diceStack:"getDiceOrHalf~diceStack"}},undocumented:!0,name:"getDiceOrHalf",longname:"getDiceOrHalf",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[5732,5765],filename:"mock20.js",lineno:163,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005442",name:"diceStack",type:"MemberExpression",value:"environment.diceStack"}},undocumented:!0,name:"diceStack",longname:"getDiceOrHalf~diceStack",kind:"constant",memberof:"getDiceOrHalf",scope:"inner",params:[]},{comment:"",meta:{range:[5894,6245],filename:"mock20.js",lineno:168,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005472",name:"getDiceRolls",type:"ArrowFunctionExpression"},vars:{rolls:"getDiceRolls~rolls",allRolls:"getDiceRolls~allRolls","":null}},undocumented:!0,name:"getDiceRolls",longname:"getDiceRolls",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[5935,5983],filename:"mock20.js",lineno:169,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005478",name:"rolls",type:"CallExpression",value:""}},undocumented:!0,name:"rolls",longname:"getDiceRolls~rolls",kind:"constant",memberof:"getDiceRolls",scope:"inner",params:[]},{comment:"",meta:{range:[6018,6031],filename:"mock20.js",lineno:171,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005491",name:"allRolls",type:"ArrayExpression",value:"[]"}},undocumented:!0,name:"allRolls",longname:"getDiceRolls~allRolls",kind:"constant",memberof:"getDiceRolls",scope:"inner",params:[]},{comment:"",meta:{range:[6119,6124],filename:"mock20.js",lineno:174,columnno:13,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005512",name:"i",type:"Literal",value:1}},undocumented:!0,name:"i",longname:"<anonymous>~i",kind:"member",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[6158,6184],filename:"mock20.js",lineno:175,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005522",name:"dice",type:"CallExpression",value:""}},undocumented:!0,name:"dice",longname:"<anonymous>~dice",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[6254,6846],filename:"mock20.js",lineno:182,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005536",name:"calculateResult",type:"ArrowFunctionExpression"},vars:{expression:"calculateResult~expression",rolls:"calculateResult~rolls","":null}},undocumented:!0,name:"calculateResult",longname:"calculateResult",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[6307,6358],filename:"mock20.js",lineno:183,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005543",name:"expression",type:"CallExpression",value:""}},undocumented:!0,name:"expression",longname:"calculateResult~expression",kind:"member",memberof:"calculateResult",scope:"inner",params:[]},{comment:"",meta:{range:[6368,6416],filename:"mock20.js",lineno:185,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005552",name:"rolls",type:"CallExpression",value:""}},undocumented:!0,name:"rolls",longname:"calculateResult~rolls",kind:"constant",memberof:"calculateResult",scope:"inner",params:[]},{comment:"",meta:{range:[6545,6554],filename:"mock20.js",lineno:189,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005584",name:"total",type:"Literal",value:0}},undocumented:!0,name:"total",longname:"<anonymous>~total",kind:"member",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[6569,6574],filename:"mock20.js",lineno:190,columnno:13,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005589",name:"i",type:"Literal",value:1}},undocumented:!0,name:"i",longname:"<anonymous>~i",kind:"member",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[6602,6624],filename:"mock20.js",lineno:191,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005599",name:"total",type:"UnaryExpression",funcscope:"<anonymous>",value:"+",paramnames:[]}},undocumented:!0,name:"total",longname:"<anonymous>~total",kind:"member",memberof:"<anonymous>",scope:"inner"},{comment:"",meta:{range:[6636,6716],filename:"mock20.js",lineno:193,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005607",name:"expression",type:"CallExpression",funcscope:"<anonymous>",value:"",paramnames:[]}},undocumented:!0,name:"expression",longname:"<anonymous>~expression",kind:"member",memberof:"<anonymous>",scope:"inner"},{comment:"",meta:{range:[6728,6758],filename:"mock20.js",lineno:194,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005616",name:"regex",type:"NewExpression",value:""}},undocumented:!0,name:"regex",longname:"<anonymous>~regex",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[6764,6809],filename:"mock20.js",lineno:195,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005623",name:"expression",type:"CallExpression",funcscope:"<anonymous>",value:"",paramnames:[]}},undocumented:!0,name:"expression",longname:"<anonymous>~expression",kind:"member",memberof:"<anonymous>",scope:"inner"},{comment:"",meta:{range:[6855,7554],filename:"mock20.js",lineno:201,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005636",name:"replaceAttributes",type:"ArrowFunctionExpression"},vars:{test:"replaceAttributes~test",element:"replaceAttributes~element","":null}},undocumented:!0,name:"replaceAttributes",longname:"replaceAttributes",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[6898,6918],filename:"mock20.js",lineno:202,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005642",name:"test",type:"Literal",value:"<RegExp /@\\{(.*?)\\}/i>"}},undocumented:!0,name:"test",longname:"replaceAttributes~test",kind:"constant",memberof:"replaceAttributes",scope:"inner",params:[]},{comment:"",meta:{range:[6955,7529],filename:"mock20.js",lineno:204,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005653",name:"element",type:"CallExpression",funcscope:"replaceAttributes",value:"",paramnames:[]}},undocumented:!0,name:"element",longname:"replaceAttributes~element",kind:"member",memberof:"replaceAttributes",scope:"inner"},{comment:"",meta:{range:[7029,7052],filename:"mock20.js",lineno:205,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005666",name:"attributeName",type:"MemberExpression",value:"args[0]"}},undocumented:!0,name:"attributeName",longname:"<anonymous>~attributeName",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[7066,7120],filename:"mock20.js",lineno:206,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005672",name:"attributeValue",type:"MemberExpression",value:"environment.attributes[undefined]"}},undocumented:!0,name:"attributeValue",longname:"<anonymous>~attributeValue",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[7134,7189],filename:"mock20.js",lineno:207,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005680",name:"attributeExists",type:"BinaryExpression",value:""}},undocumented:!0,name:"attributeExists",longname:"<anonymous>~attributeExists",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[7203,7259],filename:"mock20.js",lineno:208,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005687",name:"possibleAttributes",type:"CallExpression",value:""}},undocumented:!0,name:"possibleAttributes",longname:"<anonymous>~possibleAttributes",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[7563,7764],filename:"mock20.js",lineno:221,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005718",name:"replaceQueries",type:"ArrowFunctionExpression"},vars:{"":null}},undocumented:!0,name:"replaceQueries",longname:"replaceQueries",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[7669,7699],filename:"mock20.js",lineno:223,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005735",name:"a",type:"LogicalExpression",funcscope:"<anonymous>",value:"",paramnames:[]}},undocumented:!0,name:"a",longname:"<anonymous>~a",kind:"member",memberof:"<anonymous>",scope:"inner"},{comment:"",meta:{range:[7773,8325],filename:"mock20.js",lineno:228,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005753",name:"calculateRollResult",type:"ArrowFunctionExpression"},vars:{results:"calculateRollResult~results",key:"calculateRollResult~key",element:"calculateRollResult~element",attributeFilled:"calculateRollResult~attributeFilled",queryAnswered:"calculateRollResult~queryAnswered",expression:"calculateRollResult~expression",dice:"calculateRollResult~dice",result:"calculateRollResult~result","results[undefined]":"calculateRollResult~results.undefined]"}},undocumented:!0,name:"calculateRollResult",longname:"calculateRollResult",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[7823,7835],filename:"mock20.js",lineno:229,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005759",name:"results",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"results",longname:"calculateRollResult~results",kind:"constant",memberof:"calculateRollResult",scope:"inner",params:[]},{comment:"",meta:{range:[7850,7853],filename:"mock20.js",lineno:230,columnno:13,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005764",name:"key"}},undocumented:!0,name:"key",longname:"calculateRollResult~key",kind:"constant",memberof:"calculateRollResult",scope:"inner",params:[]},{comment:"",meta:{range:[7883,7910],filename:"mock20.js",lineno:231,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005769",name:"element",type:"MemberExpression",value:"rollElements[undefined]"}},undocumented:!0,name:"element",longname:"calculateRollResult~element",kind:"constant",memberof:"calculateRollResult",scope:"inner",params:[]},{comment:"",meta:{range:[7970,8014],filename:"mock20.js",lineno:233,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005785",name:"attributeFilled",type:"CallExpression",value:""}},undocumented:!0,name:"attributeFilled",longname:"calculateRollResult~attributeFilled",kind:"constant",memberof:"calculateRollResult",scope:"inner",params:[]},{comment:"",meta:{range:[8026,8073],filename:"mock20.js",lineno:234,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005791",name:"queryAnswered",type:"CallExpression",value:""}},undocumented:!0,name:"queryAnswered",longname:"calculateRollResult~queryAnswered",kind:"constant",memberof:"calculateRollResult",scope:"inner",params:[]},{comment:"",meta:{range:[8085,8126],filename:"mock20.js",lineno:235,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005797",name:"expression",type:"CallExpression",value:""}},undocumented:!0,name:"expression",longname:"calculateRollResult~expression",kind:"constant",memberof:"calculateRollResult",scope:"inner",params:[]},{comment:"",meta:{range:[8138,8169],filename:"mock20.js",lineno:236,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005803",name:"dice",type:"CallExpression",value:""}},undocumented:!0,name:"dice",longname:"calculateRollResult~dice",kind:"constant",memberof:"calculateRollResult",scope:"inner",params:[]},{comment:"",meta:{range:[8181,8228],filename:"mock20.js",lineno:237,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005809",name:"result",type:"CallExpression",value:""}},undocumented:!0,name:"result",longname:"calculateRollResult~result",kind:"constant",memberof:"calculateRollResult",scope:"inner",params:[]},{comment:"",meta:{range:[8234,8300],filename:"mock20.js",lineno:238,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005818",name:"results[undefined]",type:"ObjectExpression",funcscope:"calculateRollResult",value:'{"result":"","dice":"","expression":""}',paramnames:[]}},undocumented:!0,name:"undefined]",longname:"calculateRollResult~results.undefined]",kind:"member",memberof:"calculateRollResult~results",scope:"static"},{comment:"",meta:{range:[8257,8263],filename:"mock20.js",lineno:239,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005823",name:"result",type:"Identifier",value:"result"}},undocumented:!0,name:"result",longname:"calculateRollResult~results.undefined].result",kind:"member",memberof:"calculateRollResult~results.undefined]",scope:"static"},{comment:"",meta:{range:[8271,8275],filename:"mock20.js",lineno:240,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005825",name:"dice",type:"Identifier",value:"dice"}},undocumented:!0,name:"dice",longname:"calculateRollResult~results.undefined].dice",kind:"member",memberof:"calculateRollResult~results.undefined]",scope:"static"},{comment:"",meta:{range:[8283,8293],filename:"mock20.js",lineno:241,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005827",name:"expression",type:"Identifier",value:"expression"}},undocumented:!0,name:"expression",longname:"calculateRollResult~results.undefined].expression",kind:"member",memberof:"calculateRollResult~results.undefined]",scope:"static"},{comment:"",meta:{range:[8334,8719],filename:"mock20.js",lineno:247,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005832",name:"startRoll",type:"CallExpression",value:""}},undocumented:!0,name:"startRoll",longname:"startRoll",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[8479,8507],filename:"mock20.js",lineno:249,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005849",name:"rollResult",type:"ObjectExpression",value:'{"results":""}'}},undocumented:!0,name:"rollResult",longname:"<anonymous>~rollResult",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[8494,8505],filename:"mock20.js",lineno:249,columnno:23,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005852",name:"results",type:"ObjectExpression",value:"{}"}},undocumented:!0,name:"results",longname:"<anonymous>~rollResult.results",kind:"member",memberof:"<anonymous>~rollResult",scope:"static"},{comment:"",meta:{range:[8552,8598],filename:"mock20.js",lineno:251,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005859",name:"rollElements",type:"CallExpression",value:""}},undocumented:!0,name:"rollElements",longname:"<anonymous>~rollElements",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[8602,8656],filename:"mock20.js",lineno:252,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005865",name:"rollResult.results",type:"CallExpression",funcscope:"<anonymous>",value:"",paramnames:[]}},undocumented:!0,name:"results",longname:"<anonymous>~rollResult.results",kind:"member",memberof:"<anonymous>~rollResult",scope:"static"},{comment:"",meta:{range:[8660,8694],filename:"mock20.js",lineno:253,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005873",name:"rollResult.rollId",type:"CallExpression",funcscope:"<anonymous>",value:"",paramnames:[]}},undocumented:!0,name:"rollId",longname:"<anonymous>~rollResult.rollId",kind:"member",memberof:"<anonymous>~rollResult",scope:"static"},{comment:"",meta:{range:[8721,8749],filename:"mock20.js",lineno:256,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005882",name:"global.startRoll",type:"Identifier",value:"startRoll",paramnames:[]}},undocumented:!0,name:"startRoll",longname:"global.startRoll",kind:"member",memberof:"global",scope:"static"},{comment:"",meta:{range:[8757,8785],filename:"mock20.js",lineno:257,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005888",name:"finishRoll",type:"CallExpression",value:""}},undocumented:!0,name:"finishRoll",longname:"finishRoll",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[8787,8817],filename:"mock20.js",lineno:258,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005897",name:"global.finishRoll",type:"Identifier",value:"finishRoll",paramnames:[]}},undocumented:!0,name:"finishRoll",longname:"global.finishRoll",kind:"member",memberof:"global",scope:"static"},{comment:"",meta:{range:[0,32],filename:"mockScaffold.js",lineno:1,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005905",name:"console.debug",type:"CallExpression",value:"",paramnames:[]}},undocumented:!0,name:"debug",longname:"console.debug",kind:"member",memberof:"console",scope:"static"},{comment:"",meta:{range:[34,64],filename:"mockScaffold.js",lineno:2,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005917",name:"console.log",type:"CallExpression",value:"",paramnames:[]}},undocumented:!0,name:"log",longname:"console.log",kind:"member",memberof:"console",scope:"static"},{comment:"",meta:{range:[66,98],filename:"mockScaffold.js",lineno:3,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005929",name:"console.table",type:"CallExpression",value:"",paramnames:[]}},undocumented:!0,name:"table",longname:"console.table",kind:"member",memberof:"console",scope:"static"},{comment:"",meta:{range:[100,130],filename:"mockScaffold.js",lineno:4,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005941",name:"module.exports",type:"ObjectExpression",value:'{"k":""}',paramnames:[]}},undocumented:!0,name:"exports",longname:"module.exports",kind:"member",memberof:"module",scope:"static"},{comment:"",meta:{range:[118,119],filename:"mockScaffold.js",lineno:4,columnno:18,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005946",name:"k",type:"Identifier",value:"k"}},undocumented:!0,name:"k",longname:"module.exports.k",kind:"member",memberof:"module.exports",scope:"static"},{comment:"",meta:{range:[221,728],filename:"parse_cascade.js",lineno:7,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100005953",name:"expandCascade",type:"FunctionExpression"},vars:{"":null}},undocumented:!0,name:"expandCascade",longname:"expandCascade",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[737,1972],filename:"parse_cascade.js",lineno:18,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006002",name:"expandRepeating",type:"FunctionExpression"},vars:{"":null}},undocumented:!0,name:"expandRepeating",longname:"expandRepeating",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[944,1006],filename:"parse_cascade.js",lineno:21,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006036",name:"memo[undefined]",type:"CallExpression",value:"",paramnames:[]}},undocumented:!0,name:"memo[undefined]",longname:"memo[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[1080,1155],filename:"parse_cascade.js",lineno:22,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006057",name:"memo[undefined].name",type:"TemplateLiteral",value:"",paramnames:[]}},undocumented:!0,name:"name",longname:"memo[undefined].name",kind:"member",memberof:"memo[undefined]",scope:"static"},{comment:"",meta:{range:[1200,1947],filename:"parse_cascade.js",lineno:24,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006088",name:"memo[undefined].affects",type:"CallExpression",value:"",paramnames:[]}},undocumented:!0,name:"affects",longname:"memo[undefined].affects",kind:"member",memberof:"memo[undefined]",scope:"static"},{comment:"",meta:{range:[1981,2085],filename:"parse_cascade.js",lineno:39,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006162",name:"applyID",type:"FunctionExpression"}},undocumented:!0,name:"applyID",longname:"applyID",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[2094,2459],filename:"parse_cascade.js",lineno:43,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006179",name:"expandNormal",type:"FunctionExpression"},vars:{"memo[undefined]":null,"memo[undefined].affects":"memo[undefined].affects","":null}},undocumented:!0,name:"expandNormal",longname:"expandNormal",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[2148,2181],filename:"parse_cascade.js",lineno:44,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006188",name:"memo[undefined]",type:"CallExpression",value:"",paramnames:[]}},undocumented:!0,name:"memo[undefined]",longname:"memo[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[2218,2261],filename:"parse_cascade.js",lineno:46,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006207",name:"memo[undefined].affects",type:"LogicalExpression",value:"",paramnames:[]}},undocumented:!0,name:"affects",longname:"memo[undefined].affects",kind:"member",memberof:"memo[undefined]",scope:"static"},{comment:"",meta:{range:[2267,2452],filename:"parse_cascade.js",lineno:47,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006221",name:"memo[undefined].affects",type:"CallExpression",value:"",paramnames:[]}},undocumented:!0,name:"affects",longname:"memo[undefined].affects",kind:"member",memberof:"memo[undefined]",scope:"static"},{comment:"",meta:{range:[2468,2674],filename:"parse_cascade.js",lineno:58,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006263",name:"addAllRows",type:"FunctionExpression"},vars:{"":null}},undocumented:!0,name:"addAllRows",longname:"addAllRows",kind:"function",scope:"global",params:[]},{comment:`/**
 * These are functions that provide K-scaffold aliases for the basic Roll20 sheetworker functions. These functions also provide many additional features on top of the standard Roll20 sheetworkers.
 * @namespace Sheetworkers.Sheetworker Aliases
 */`,meta:{filename:"sheetworker_aliases.js",lineno:3,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{}},description:"These are functions that provide K-scaffold aliases for the basic Roll20 sheetworker functions. These functions also provide many additional features on top of the standard Roll20 sheetworkers.",kind:"namespace",name:"Sheetworker Aliases",memberof:"Sheetworkers",longname:"Sheetworkers.Sheetworker Aliases",scope:"static"},{comment:`/**
 * Alias for [setSectionOrder()](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) that allows you to use the section name in either \`repeating_section\` or \`section\` formats. Note that the Roll20 sheetworker [setSectionOrder](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) currently causes some display issues on sheets.
 * @memberof Sheetworker Aliases
 * @name setSectionOrder
 * @param {string} section - The name of the section, with or without \`repeating_\`
 * @param {string[]} order - Array of ids describing the desired order of the section.
 * @returns {void}
 * @example
 * //Set the order of a repeating_weapon section
 * k.setSectionOrder('repeating_equipment',['id1','id2','id3']);
 * //Can also specify the section name without the repeating_ prefix
 * k.setSectionOrder('equipment',['id1','id2','id3']);
 */`,meta:{filename:"sheetworker_aliases.js",lineno:7,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{}},description:"Alias for [setSectionOrder()](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) that allows you to use the section name in either `repeating_section` or `section` formats. Note that the Roll20 sheetworker [setSectionOrder](https://wiki.roll20.net/Sheet_Worker_Scripts#setSectionOrder.28.3CRepeating_Section_Name.3E.2C_.3CSection_Array.3E.2C_.3CCallback.3E.29) currently causes some display issues on sheets.",memberof:"Sheetworker Aliases",name:"setSectionOrder",params:[{type:{names:["string"]},description:"The name of the section, with or without `repeating_`",name:"section"},{type:{names:["Array.<string>"]},description:"Array of ids describing the desired order of the section.",name:"order"}],returns:[{type:{names:["void"]}}],examples:[`//Set the order of a repeating_weapon section
k.setSectionOrder('repeating_equipment',['id1','id2','id3']);
//Can also specify the section name without the repeating_ prefix
k.setSectionOrder('equipment',['id1','id2','id3']);`],scope:"static",longname:"Sheetworker Aliases.setSectionOrder",kind:"member"},{comment:"",meta:{range:[1349,1486],filename:"sheetworker_aliases.js",lineno:20,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006305",name:"_setSectionOrder",type:"FunctionExpression"},vars:{trueSection:"_setSectionOrder~trueSection"}},undocumented:!0,name:"_setSectionOrder",longname:"_setSectionOrder",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[1399,1445],filename:"sheetworker_aliases.js",lineno:21,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006312",name:"trueSection",type:"CallExpression",value:""}},undocumented:!0,name:"trueSection",longname:"_setSectionOrder~trueSection",kind:"member",memberof:"_setSectionOrder",scope:"inner",params:[]},{comment:"",meta:{range:[1488,1529],filename:"sheetworker_aliases.js",lineno:24,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006326",name:"kFuncs.setSectionOrder",type:"Identifier",value:"_setSectionOrder",paramnames:[]}},undocumented:!0,name:"setSectionOrder",longname:"kFuncs.setSectionOrder",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Alias for [removeRepeatingRow](https://wiki.roll20.net/Sheet_Worker_Scripts#removeRepeatingRow.28_RowID_.29) that also removes the row from the current object of attribute values and array of section IDs to ensure that erroneous updates are not issued.
 * @memberof Sheetworker Aliases
 * @name removeRepeatingRow
 * @param {string} row - The row id to be removed
 * @param {attributesProxy} attributes - The attribute values currently in memory
 * @param {object} sections - Object that contains arrays of all the IDs in sections on the sheet indexed by repeating name.
 * @returns {void}
 * @example
 * //Remove a repeating Row
 * k.getAllAttrs({
 *  callback:(attributes,sections)=>{
 *    const rowID = sections.repeating_equipment[0];
 *    k.removeRepeatingRow(\`repeating_equipment_\${rowID}\`,attributes,sections);
 *    console.log(sections.repeating_equipment); // => rowID no longer exists in the array.
 *    console.log(attributes[\`repeating_equipment_\${rowID}_name\`]); // => undefined
 *  }
 * })
 */`,meta:{filename:"sheetworker_aliases.js",lineno:26,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{}},description:"Alias for [removeRepeatingRow](https://wiki.roll20.net/Sheet_Worker_Scripts#removeRepeatingRow.28_RowID_.29) that also removes the row from the current object of attribute values and array of section IDs to ensure that erroneous updates are not issued.",memberof:"Sheetworker Aliases",name:"removeRepeatingRow",params:[{type:{names:["string"]},description:"The row id to be removed",name:"row"},{type:{names:["attributesProxy"]},description:"The attribute values currently in memory",name:"attributes"},{type:{names:["object"]},description:"Object that contains arrays of all the IDs in sections on the sheet indexed by repeating name.",name:"sections"}],returns:[{type:{names:["void"]}}],examples:[`//Remove a repeating Row
k.getAllAttrs({
 callback:(attributes,sections)=>{
   const rowID = sections.repeating_equipment[0];
   k.removeRepeatingRow(\`repeating_equipment_\${rowID}\`,attributes,sections);
   console.log(sections.repeating_equipment); // => rowID no longer exists in the array.
   console.log(attributes[\`repeating_equipment_\${rowID}_name\`]); // => undefined
 }
})`],scope:"static",longname:"Sheetworker Aliases.removeRepeatingRow",kind:"member"},{comment:"",meta:{range:[2557,2926],filename:"sheetworker_aliases.js",lineno:45,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006332",name:"_removeRepeatingRow",type:"FunctionExpression"},vars:{"":null,undefined:null,"sections[undefined]":null}},undocumented:!0,name:"_removeRepeatingRow",longname:"_removeRepeatingRow",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[2834,2896],filename:"sheetworker_aliases.js",lineno:53,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006382",name:"sections[undefined]",type:"CallExpression",value:"",paramnames:[]}},undocumented:!0,name:"sections[undefined]",longname:"sections[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[2928,2975],filename:"sheetworker_aliases.js",lineno:56,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006402",name:"kFuncs.removeRepeatingRow",type:"Identifier",value:"_removeRepeatingRow",paramnames:[]}},undocumented:!0,name:"removeRepeatingRow",longname:"kFuncs.removeRepeatingRow",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) that converts the default object of attribute values into an {@link attributesProxy} and passes that back to the callback function.
 * @memberof Sheetworker Aliases
 * @name getAttrs
 * @param {string[]} [props=baseGet] - Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.
 * @param {function(attributesProxy)} callback - The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback.
 * @example
 * //Gets the attributes named in props.
 * k.getAttrs({
 *  props:['attribute_1','attribute_2'],
 *  callback:(attributes)=>{
 *    //Work with the attributes as you would in a normal getAttrs, or use the superpowers of the K-scaffold attributes object like so:
 *    attributes.attribute_1 = 'new value';
 *    attributes.set();
 *  }
 * })
 */`,meta:{filename:"sheetworker_aliases.js",lineno:58,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{}},description:"Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) that converts the default object of attribute values into an {@link attributesProxy} and passes that back to the callback function.",memberof:"Sheetworker Aliases",name:"getAttrs",params:[{type:{names:["Array.<string>"]},optional:!0,defaultvalue:"baseGet",description:"Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.",name:"props"},{type:{names:["function"]},description:"The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback.",name:"callback"}],examples:[`//Gets the attributes named in props.
k.getAttrs({
 props:['attribute_1','attribute_2'],
 callback:(attributes)=>{
   //Work with the attributes as you would in a normal getAttrs, or use the superpowers of the K-scaffold attributes object like so:
   attributes.attribute_1 = 'new value';
   attributes.set();
 }
})`],scope:"static",longname:"Sheetworker Aliases.getAttrs",kind:"member"},{comment:"",meta:{range:[3944,4102],filename:"sheetworker_aliases.js",lineno:75,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006408",name:"_getAttrs",type:"FunctionExpression"},vars:{"":null}},undocumented:!0,name:"_getAttrs",longname:"_getAttrs",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[3966,3979],filename:"sheetworker_aliases.js",lineno:75,columnno:28,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006412",name:"props",type:"AssignmentPattern",value:"props"}},undocumented:!0,name:"props",longname:"props",kind:"member",scope:"global"},{comment:"",meta:{range:[3980,3988],filename:"sheetworker_aliases.js",lineno:75,columnno:42,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006416",name:"callback",type:"Identifier",value:"callback"}},undocumented:!0,name:"callback",longname:"callback",kind:"member",scope:"global"},{comment:"",meta:{range:[4031,4067],filename:"sheetworker_aliases.js",lineno:77,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006427",name:"attributes",type:"CallExpression",value:""}},undocumented:!0,name:"attributes",longname:"<anonymous>~attributes",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[4104,4131],filename:"sheetworker_aliases.js",lineno:81,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006437",name:"kFuncs.getAttrs",type:"Identifier",value:"_getAttrs",paramnames:[]}},undocumented:!0,name:"getAttrs",longname:"kFuncs.getAttrs",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) and [getSectionIDs](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that combines the actions of both sheetworker functions and converts the default object of attribute values into an {@link attributesProxy}. Also gets the details on how to handle all attributes from the master {@link cascades} object and.
 * @memberof Sheetworker Aliases
 * @param {Object} args
 * @param {string[]} [args.props=baseGet] - Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.
 * @param {repeatingSectionDetails} sectionDetails - Array of details about a section to get the IDs for and attributes that need to be gotten. 
 * @param {function(attributesProxy,sectionObj,expandedCascade):void} args.callback - The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback along with a {@link sectionObj} and {@link expandedCascade}.
 * @example
 * //Get every K-scaffold linked attribute on the sheet
 * k.getAllAttrs({
 *  callback:(attributes,sections,casc)=>{
 *    //Work with the attributes as you please.
 *    attributes.some_attribute = 'a value';
 *    attributes.set();//Apply our change
 *  }
 * })
 */`,meta:{range:[5492,5891],filename:"sheetworker_aliases.js",lineno:100,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006443",name:"getAllAttrs",type:"FunctionExpression"},vars:{"":null}},description:"Alias for [getAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getAttrs.28attributeNameArray.2C_callback.29) and [getSectionIDs](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that combines the actions of both sheetworker functions and converts the default object of attribute values into an {@link attributesProxy}. Also gets the details on how to handle all attributes from the master {@link cascades} object and.",memberof:"Sheetworker Aliases",params:[{type:{names:["Object"]},name:"args"},{type:{names:["Array.<string>"]},optional:!0,defaultvalue:"baseGet",description:"Array of attribute names to get the value of. Defaults to {@link baseGet} if not passed.",name:"args.props"},{type:{names:["repeatingSectionDetails"]},description:"Array of details about a section to get the IDs for and attributes that need to be gotten.",name:"sectionDetails"},{type:{names:["function"]},description:"The function to call after the attribute values have been gotten. An {@link attributesProxy} is passed to the callback along with a {@link sectionObj} and {@link expandedCascade}.",name:"args.callback"}],examples:[`//Get every K-scaffold linked attribute on the sheet
k.getAllAttrs({
 callback:(attributes,sections,casc)=>{
   //Work with the attributes as you please.
   attributes.some_attribute = 'a value';
   attributes.set();//Apply our change
 }
})`],name:"getAllAttrs",longname:"Sheetworker Aliases.getAllAttrs",kind:"function",scope:"static"},{comment:"",meta:{range:[5516,5529],filename:"sheetworker_aliases.js",lineno:100,columnno:30,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006447",name:"props",type:"AssignmentPattern",value:"props"}},undocumented:!0,name:"props",longname:"props",kind:"member",scope:"global"},{comment:"",meta:{range:[5530,5568],filename:"sheetworker_aliases.js",lineno:100,columnno:44,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006451",name:"sectionDetails",type:"AssignmentPattern",value:"sectionDetails"}},undocumented:!0,name:"sectionDetails",longname:"sectionDetails",kind:"member",scope:"global"},{comment:"",meta:{range:[5569,5577],filename:"sheetworker_aliases.js",lineno:100,columnno:83,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006455",name:"callback",type:"Identifier",value:"callback"}},undocumented:!0,name:"callback",longname:"callback",kind:"member",scope:"global"},{comment:"",meta:{range:[5691,5727],filename:"sheetworker_aliases.js",lineno:103,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006478",name:"attributes",type:"CallExpression",value:""}},undocumented:!0,name:"attributes",longname:"<anonymous>~attributes",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[5783,5833],filename:"sheetworker_aliases.js",lineno:105,columnno:12,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006489",name:"casc",type:"CallExpression",value:""}},undocumented:!0,name:"casc",longname:"<anonymous>~casc",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[5893,5925],filename:"sheetworker_aliases.js",lineno:110,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006503",name:"kFuncs.getAllAttrs",type:"Identifier",value:"getAllAttrs",paramnames:[]}},undocumented:!0,name:"getAllAttrs",longname:"kFuncs.getAllAttrs",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Alias for [getSectionIDs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that allows you to iterate through several functions at once. Also assembles an array of repeating attributes to get.
 * @memberof Sheetworker Aliases
 * @param {object[]} sectionDetails - Array of details about a section to get the IDs for and attributes that need to be gotten.
 * @param {string} sectionDetails.section - The full name of the repeating section including the \`repeating_\` prefix.
 * @param {string[]} sectionDetails.fields - Array of field names that need to be gotten from the repeating section
 * @param {function(string[],sectionObj)} callback - The function to call once all IDs have been gotten and the array of repating attributes to get has been assembled. The callback is passed the array of repating attributes to get and a {@link sectionObj}.
 * @example
 * // Get some section details
 * const sectionDetails = {
 *  {section:'repeating_equipment',fields:['name','weight','cost']},
 *  {section:'repeating_weapon',fields:['name','attack','damage']}
 * };
 * k.getSections(sectionDetails,(attributeNames,sections)=>{
 *  console.log(attributeNames);// => Array containing all row specific attribute names
 *  console.log(sections);// => Object with arrays containing the row ids. Indexed by section name (e.g. repeating_eqiupment)
 * })
 */`,meta:{range:[7327,8010],filename:"sheetworker_aliases.js",lineno:130,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006509",name:"getSections",type:"FunctionExpression"},vars:{queueClone:"Sheetworker Aliases.getSections~queueClone",worker:"Sheetworker Aliases.getSections~worker","":null}},description:"Alias for [getSectionIDs()](https://wiki.roll20.net/Sheet_Worker_Scripts#getSectionIDs.28section_name.2Ccallback.29) that allows you to iterate through several functions at once. Also assembles an array of repeating attributes to get.",memberof:"Sheetworker Aliases",params:[{type:{names:["Array.<object>"]},description:"Array of details about a section to get the IDs for and attributes that need to be gotten.",name:"sectionDetails"},{type:{names:["string"]},description:"The full name of the repeating section including the `repeating_` prefix.",name:"sectionDetails.section"},{type:{names:["Array.<string>"]},description:"Array of field names that need to be gotten from the repeating section",name:"sectionDetails.fields"},{type:{names:["function"]},description:"The function to call once all IDs have been gotten and the array of repating attributes to get has been assembled. The callback is passed the array of repating attributes to get and a {@link sectionObj}.",name:"callback"}],examples:[`// Get some section details
const sectionDetails = {
 {section:'repeating_equipment',fields:['name','weight','cost']},
 {section:'repeating_weapon',fields:['name','attack','damage']}
};
k.getSections(sectionDetails,(attributeNames,sections)=>{
 console.log(attributeNames);// => Array containing all row specific attribute names
 console.log(sections);// => Object with arrays containing the row ids. Indexed by section name (e.g. repeating_eqiupment)
})`],name:"getSections",longname:"Sheetworker Aliases.getSections",kind:"function",scope:"static"},{comment:"",meta:{range:[7382,7418],filename:"sheetworker_aliases.js",lineno:131,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006516",name:"queueClone",type:"CallExpression",value:""}},undocumented:!0,name:"queueClone",longname:"Sheetworker Aliases.getSections~queueClone",kind:"member",memberof:"Sheetworker Aliases.getSections",scope:"inner",params:[]},{comment:"",meta:{range:[7428,7927],filename:"sheetworker_aliases.js",lineno:132,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006524",name:"worker",type:"ArrowFunctionExpression"},vars:{detail:"Sheetworker Aliases.getSections~worker~detail","":null}},undocumented:!0,name:"worker",longname:"Sheetworker Aliases.getSections~worker",kind:"function",memberof:"Sheetworker Aliases.getSections",scope:"inner",params:[]},{comment:"",meta:{range:[7483,7505],filename:"sheetworker_aliases.js",lineno:133,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006536",name:"detail",type:"CallExpression",value:""}},undocumented:!0,name:"detail",longname:"Sheetworker Aliases.getSections~worker~detail",kind:"member",memberof:"Sheetworker Aliases.getSections~worker",scope:"inner",params:[]},{comment:"",meta:{range:[7555,7585],filename:"sheetworker_aliases.js",lineno:135,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006552",name:"sections[undefined]",type:"Identifier",value:"IDs",paramnames:[]}},undocumented:!0,name:"sections[undefined]",longname:"sections[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[8012,8044],filename:"sheetworker_aliases.js",lineno:155,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006637",name:"kFuncs.getSections",type:"Identifier",value:"getSections",paramnames:[]}},undocumented:!0,name:"getSections",longname:"kFuncs.getSections",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Alias for [setAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#setAttrs.28values.2Coptions.2Ccallback.29) that sets silently by default.
 * @memberof Sheetworker Aliases
 * @param {object} obj - The object containting attributes to set
 * @param {boolean} [vocal=false] - Whether to set silently (default value) or not.
 * @param {function()} [callback] - The callback function to invoke after the setting has been completed. No arguments are passed to the callback function.
 * @example
 * //Set some attributes silently
 * k.setAttrs({attribute_1:'new value'})
 * //Set some attributes and triggers listeners
 * k.setAttrs({attribute_1:'new value',true})
 * //Set some attributes and call a callback function
 * k.setAttrs({attribute_1:'new value'},null,()=>{
 *  //Do something after the attribute is set
 * })
 */`,meta:{range:[9006,9091],filename:"sheetworker_aliases.js",lineno:175,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006643",name:"set",type:"FunctionExpression"}},description:"Alias for [setAttrs()](https://wiki.roll20.net/Sheet_Worker_Scripts#setAttrs.28values.2Coptions.2Ccallback.29) that sets silently by default.",memberof:"Sheetworker Aliases",params:[{type:{names:["object"]},description:"The object containting attributes to set",name:"obj"},{type:{names:["boolean"]},optional:!0,defaultvalue:!1,description:"Whether to set silently (default value) or not.",name:"vocal"},{type:{names:["function"]},optional:!0,description:"The callback function to invoke after the setting has been completed. No arguments are passed to the callback function.",name:"callback"}],examples:[`//Set some attributes silently
k.setAttrs({attribute_1:'new value'})
//Set some attributes and triggers listeners
k.setAttrs({attribute_1:'new value',true})
//Set some attributes and call a callback function
k.setAttrs({attribute_1:'new value'},null,()=>{
 //Do something after the attribute is set
})`],name:"set",longname:"Sheetworker Aliases.set",kind:"function",scope:"static"},{comment:"",meta:{range:[9064,9077],filename:"sheetworker_aliases.js",lineno:176,columnno:16,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006657",name:"silent",type:"UnaryExpression",value:"!vocal"}},undocumented:!0,name:"silent",longname:"silent",kind:"member",scope:"global"},{comment:"",meta:{range:[9093,9114],filename:"sheetworker_aliases.js",lineno:178,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006662",name:"kFuncs.setAttrs",type:"Identifier",value:"set",paramnames:[]}},undocumented:!0,name:"setAttrs",longname:"kFuncs.setAttrs",kind:"member",memberof:"kFuncs",scope:"static"},{comment:"",meta:{range:[9123,9342],filename:"sheetworker_aliases.js",lineno:180,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006668",name:"generateCustomID",type:"FunctionExpression"},vars:{string:"generateCustomID~string",rowID:"generateCustomID~rowID",re:"generateCustomID~re"}},undocumented:!0,name:"generateCustomID",longname:"generateCustomID",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[9195,9216],filename:"sheetworker_aliases.js",lineno:182,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006682",name:"string",type:"TemplateLiteral",funcscope:"generateCustomID",value:"",paramnames:[]}},undocumented:!0,name:"string",longname:"generateCustomID~string",kind:"member",memberof:"generateCustomID",scope:"inner"},{comment:"",meta:{range:[9224,9247],filename:"sheetworker_aliases.js",lineno:184,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006689",name:"rowID",type:"CallExpression",funcscope:"generateCustomID",value:"",paramnames:[]}},undocumented:!0,name:"rowID",longname:"generateCustomID~rowID",kind:"member",memberof:"generateCustomID",scope:"inner"},{comment:"",meta:{range:[9255,9294],filename:"sheetworker_aliases.js",lineno:185,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006694",name:"re",type:"NewExpression",value:""}},undocumented:!0,name:"re",longname:"generateCustomID~re",kind:"member",memberof:"generateCustomID",scope:"inner",params:[]},{comment:`/**
 * Alias for generateRowID that adds the new id to the {@link sectionObj}. Also allows for creation of custom IDs that conform to the section ID requirements.
 * @memberof Sheetworker Aliases
 * @name generateRowID
 * @param {sectionObj} sections
 * @param {string} [customText] - Custom text to start the ID with. This text should not be longer than the standard repeating section ID format.
 * @returns {string} - The created ID
 * @example
 * k.getAllAttrs({
 *  callback:(attributes,sections,casc)=>{
 *    //Create a new row ID
 *    const rowID = k.generateRowID('repeating_equipment',sections);
 *    console.log(rowID);// => -p8rg908ug0suzz
 *    //Create a custom row ID
 *    const customID = k.generateRowID('repeating_equipment',sections,'custom');
 *    console.log(customID);// => -custom98uadj89kj
 *  }
 * });
 */`,meta:{filename:"sheetworker_aliases.js",lineno:190,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{}},description:"Alias for generateRowID that adds the new id to the {@link sectionObj}. Also allows for creation of custom IDs that conform to the section ID requirements.",memberof:"Sheetworker Aliases",name:"generateRowID",params:[{type:{names:["sectionObj"]},name:"sections"},{type:{names:["string"]},optional:!0,description:"Custom text to start the ID with. This text should not be longer than the standard repeating section ID format.",name:"customText"}],returns:[{type:{names:["string"]},description:"- The created ID"}],examples:[`k.getAllAttrs({
 callback:(attributes,sections,casc)=>{
   //Create a new row ID
   const rowID = k.generateRowID('repeating_equipment',sections);
   console.log(rowID);// => -p8rg908ug0suzz
   //Create a custom row ID
   const customID = k.generateRowID('repeating_equipment',sections,'custom');
   console.log(customID);// => -custom98uadj89kj
 }
});`],scope:"static",longname:"Sheetworker Aliases.generateRowID",kind:"member"},{comment:"",meta:{range:[10186,10529],filename:"sheetworker_aliases.js",lineno:209,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006717",name:"_generateRowID",type:"FunctionExpression"},vars:{rowID:"_generateRowID~rowID",section:"_generateRowID~section","sections[undefined]":null}},undocumented:!0,name:"_generateRowID",longname:"_generateRowID",kind:"function",scope:"global",params:[]},{comment:"",meta:{range:[10248,10323],filename:"sheetworker_aliases.js",lineno:210,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006725",name:"rowID",type:"ConditionalExpression",value:""}},undocumented:!0,name:"rowID",longname:"_generateRowID~rowID",kind:"member",memberof:"_generateRowID",scope:"inner",params:[]},{comment:"",meta:{range:[10327,10414],filename:"sheetworker_aliases.js",lineno:213,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006735",name:"section",type:"ConditionalExpression",funcscope:"_generateRowID",value:"",paramnames:[]}},undocumented:!0,name:"section",longname:"_generateRowID~section",kind:"member",memberof:"_generateRowID",scope:"inner"},{comment:"",meta:{range:[10418,10461],filename:"sheetworker_aliases.js",lineno:216,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006749",name:"sections[undefined]",type:"LogicalExpression",value:"",paramnames:[]}},undocumented:!0,name:"sections[undefined]",longname:"sections[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[10531,10568],filename:"sheetworker_aliases.js",lineno:220,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006774",name:"kFuncs.generateRowID",type:"Identifier",value:"_generateRowID",paramnames:[]}},undocumented:!0,name:"generateRowID",longname:"kFuncs.generateRowID",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * These are utility functions that are not directly related to Roll20 systems. They provide easy methods for everything from processing text and numbers to querying the user for input.
 * @namespace Sheetworkers.Utilities
 * @alias Utilities
 */`,meta:{filename:"utility.js",lineno:3,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{}},description:"These are utility functions that are not directly related to Roll20 systems. They provide easy methods for everything from processing text and numbers to querying the user for input.",kind:"namespace",name:"Utilities",alias:"Utilities",memberof:"Sheetworkers",longname:"Sheetworkers.Utilities",scope:"static"},{comment:`/**
 * Replaces problem characters to use a string as a regex
 * @memberof Utilities
 * @param {string} text - The text to replace characters in
 * @returns {string}
 * @example
 * const textForRegex = k.sanitizeForRegex('.some thing[with characters]');
 * console.log(textForRegex);// => "\\.some thing\\[with characters\\]"
 */`,meta:{range:[672,787],filename:"utility.js",lineno:17,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006782",name:"sanitizeForRegex",type:"FunctionExpression"}},description:"Replaces problem characters to use a string as a regex",memberof:"Utilities",params:[{type:{names:["string"]},description:"The text to replace characters in",name:"text"}],returns:[{type:{names:["string"]}}],examples:[`const textForRegex = k.sanitizeForRegex('.some thing[with characters]');
console.log(textForRegex);// => "\\.some thing\\[with characters\\]"`],name:"sanitizeForRegex",longname:"Utilities.sanitizeForRegex",kind:"function",scope:"static"},{comment:"",meta:{range:[789,831],filename:"utility.js",lineno:20,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006795",name:"kFuncs.sanitizeForRegex",type:"Identifier",value:"sanitizeForRegex",paramnames:[]}},undocumented:!0,name:"sanitizeForRegex",longname:"kFuncs.sanitizeForRegex",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Converts a value to a number, it\\'s default value, or \`0\` if no default value passed.
 * @memberof Utilities
 * @param {string|number} val - Value to convert to a number
 * @param {number} def - The default value, uses 0 if not passed
 * @returns {number|undefined}
 * @example
 * const num = k.value('100');
 * console.log(num);// => 100
 */`,meta:{range:[1190,1430],filename:"utility.js",lineno:32,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006801",name:"value",type:"FunctionExpression"},vars:{convertVal:"Utilities.value~convertVal"}},description:"Converts a value to a number, it\\'s default value, or `0` if no default value passed.",memberof:"Utilities",params:[{type:{names:["string","number"]},description:"Value to convert to a number",name:"val"},{type:{names:["number"]},description:"The default value, uses 0 if not passed",name:"def"}],returns:[{type:{names:["number","undefined"]}}],examples:[`const num = k.value('100');
console.log(num);// => 100`],name:"value",longname:"Utilities.value",kind:"function",scope:"static"},{comment:"",meta:{range:[1225,1242],filename:"utility.js",lineno:33,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006808",name:"convertVal",type:"UnaryExpression",value:"+val"}},undocumented:!0,name:"convertVal",longname:"Utilities.value~convertVal",kind:"constant",memberof:"Utilities.value",scope:"inner",params:[]},{comment:"",meta:{range:[1432,1452],filename:"utility.js",lineno:41,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006839",name:"kFuncs.value",type:"Identifier",value:"value",paramnames:[]}},undocumented:!0,name:"value",longname:"kFuncs.value",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Extracts the section (e.g. \`repeating_equipment\`), rowID (e.g \`-;lkj098J:LKj\`), and field name (e.g. \`bulk\`) from a repeating attribute name.
 * @memberof Utilities
 * @param {string} string - The string to parse
 * @returns {array} - Array of matches. Index 0: the section name, e.g. repeating_equipment | Index 1:the row ID | index 2: The name of the attribute
 * @returns {string[]}
 * @example
 * //Extract info from a full repeating name
 * const [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23_name');
 * console.log(section);// => "repeating_equipment"
 * console.log(rowID);// => "-8908asdflkjZlkj23"
 * console.log(attrName);// => "name"
 * 
 * //Extract info from just a row name
 * const [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23');
 * console.log(section);// => "repeating_equipment"
 * console.log(rowID);// => "-8908asdflkjZlkj23"
 * console.log(attrName);// => undefined
 */`,meta:{range:[2438,2575],filename:"utility.js",lineno:62,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006845",name:"parseRepeatName",type:"FunctionExpression"},vars:{match:"Utilities.parseRepeatName~match"}},description:"Extracts the section (e.g. `repeating_equipment`), rowID (e.g `-;lkj098J:LKj`), and field name (e.g. `bulk`) from a repeating attribute name.",memberof:"Utilities",params:[{type:{names:["string"]},description:"The string to parse",name:"string"}],returns:[{type:{names:["array"]},description:"- Array of matches. Index 0: the section name, e.g. repeating_equipment | Index 1:the row ID | index 2: The name of the attribute"},{type:{names:["Array.<string>"]}}],examples:[`//Extract info from a full repeating name
const [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23_name');
console.log(section);// => "repeating_equipment"
console.log(rowID);// => "-8908asdflkjZlkj23"
console.log(attrName);// => "name"

//Extract info from just a row name
const [section,rowID,attrName] = k.parseRepeatName('repeating_equipment_-8908asdflkjZlkj23');
console.log(section);// => "repeating_equipment"
console.log(rowID);// => "-8908asdflkjZlkj23"
console.log(attrName);// => undefined`],name:"parseRepeatName",longname:"Utilities.parseRepeatName",kind:"function",scope:"static"},{comment:"",meta:{range:[2480,2539],filename:"utility.js",lineno:63,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006851",name:"match",type:"CallExpression",value:""}},undocumented:!0,name:"match",longname:"Utilities.parseRepeatName~match",kind:"member",memberof:"Utilities.parseRepeatName",scope:"inner",params:[]},{comment:"",meta:{range:[2577,2617],filename:"utility.js",lineno:67,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006866",name:"kFuncs.parseRepeatName",type:"Identifier",value:"parseRepeatName",paramnames:[]}},undocumented:!0,name:"parseRepeatName",longname:"kFuncs.parseRepeatName",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Parses out the components of a trigger name similar to [parseRepeatName](#parserepeatname). Aliases: parseClickTrigger.
 * 
 * Aliases: \`k.parseClickTrigger\`
 * @memberof Utilities
 * @param {string} string The triggerName property of the
 * @returns {array} - For a repeating button named \`repeating_equipment_-LKJhpoi98;lj_roll\`, the array will be \`['repeating_equipment','-LKJhpoi98;lj','roll']\`. For a non repeating button named \`roll\`, the array will be \`[undefined,undefined,'roll']\`
 * @returns {string[]}
 * @example
 * //Parse a non repeating trigger
 * const [section,rowID,attrName] = k.parseTriggerName('clicked:some-button');
 * console.log(section);// => undefined
 * console.log(rowID);// => undefined
 * console.log(attrName);// => "some-button"
 * 
 * //Parse a repeating trigger
 * const [section,rowID,attrName] = k.parseTriggerName('clicked:repeating_attack_-234lkjpd8fu8usadf_some-button');
 * console.log(section);// => "repeating_attack"
 * console.log(rowID);// => "-234lkjpd8fu8usadf"
 * console.log(attrName);// => "some-button"
 * 
 * //Parse a repeating name
 * const [section,rowID,attrName] = k.parseTriggerName('repeating_attack_-234lkjpd8fu8usadf_some-button');
 * console.log(section);// => "repeating_attack"
 * console.log(rowID);// => "-234lkjpd8fu8usadf"
 * console.log(attrName);// => "some-button"
 */`,meta:{range:[3974,4136],filename:"utility.js",lineno:96,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006872",name:"parseTriggerName",type:"FunctionExpression"},vars:{match:"Utilities.parseTriggerName~match"}},description:"Parses out the components of a trigger name similar to [parseRepeatName](#parserepeatname). Aliases: parseClickTrigger.\n\nAliases: `k.parseClickTrigger`",memberof:"Utilities",params:[{type:{names:["string"]},description:"The triggerName property of the",name:"string"}],returns:[{type:{names:["array"]},description:"- For a repeating button named `repeating_equipment_-LKJhpoi98;lj_roll`, the array will be `['repeating_equipment','-LKJhpoi98;lj','roll']`. For a non repeating button named `roll`, the array will be `[undefined,undefined,'roll']`"},{type:{names:["Array.<string>"]}}],examples:[`//Parse a non repeating trigger
const [section,rowID,attrName] = k.parseTriggerName('clicked:some-button');
console.log(section);// => undefined
console.log(rowID);// => undefined
console.log(attrName);// => "some-button"

//Parse a repeating trigger
const [section,rowID,attrName] = k.parseTriggerName('clicked:repeating_attack_-234lkjpd8fu8usadf_some-button');
console.log(section);// => "repeating_attack"
console.log(rowID);// => "-234lkjpd8fu8usadf"
console.log(attrName);// => "some-button"

//Parse a repeating name
const [section,rowID,attrName] = k.parseTriggerName('repeating_attack_-234lkjpd8fu8usadf_some-button');
console.log(section);// => "repeating_attack"
console.log(rowID);// => "-234lkjpd8fu8usadf"
console.log(attrName);// => "some-button"`],name:"parseTriggerName",longname:"Utilities.parseTriggerName",kind:"function",scope:"static"},{comment:"",meta:{range:[4017,4100],filename:"utility.js",lineno:97,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006878",name:"match",type:"CallExpression",value:""}},undocumented:!0,name:"match",longname:"Utilities.parseTriggerName~match",kind:"member",memberof:"Utilities.parseTriggerName",scope:"inner",params:[]},{comment:"",meta:{range:[4138,4180],filename:"utility.js",lineno:101,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006898",name:"kFuncs.parseTriggerName",type:"Identifier",value:"parseTriggerName",paramnames:[]}},undocumented:!0,name:"parseTriggerName",longname:"kFuncs.parseTriggerName",kind:"member",memberof:"kFuncs",scope:"static"},{comment:"",meta:{range:[4188,4224],filename:"utility.js",lineno:102,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006904",name:"parseClickTrigger",type:"Identifier",value:"parseTriggerName"}},undocumented:!0,name:"parseClickTrigger",longname:"parseClickTrigger",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[4226,4270],filename:"utility.js",lineno:103,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006908",name:"kFuncs.parseClickTrigger",type:"Identifier",value:"parseClickTrigger",paramnames:[]}},undocumented:!0,name:"parseClickTrigger",longname:"kFuncs.parseClickTrigger",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Parses out the attribute name from the htmlattribute name.
 * @memberof Utilities
 * @param {string} string - The triggerName property of the [event](https://wiki.roll20.net/Sheet_Worker_Scripts#eventInfo_Object).
 * @returns {string}
 * @example
 * //Parse a name
 * const attrName = k.parseHtmlName('attr_attribute_1');
 * console.log(attrName);// => "attribute_1"
 */`,meta:{range:[4657,4782],filename:"utility.js",lineno:115,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006914",name:"parseHTMLName",type:"FunctionExpression"},vars:{match:"Utilities.parseHTMLName~match"}},description:"Parses out the attribute name from the htmlattribute name.",memberof:"Utilities",params:[{type:{names:["string"]},description:"The triggerName property of the [event](https://wiki.roll20.net/Sheet_Worker_Scripts#eventInfo_Object).",name:"string"}],returns:[{type:{names:["string"]}}],examples:[`//Parse a name
const attrName = k.parseHtmlName('attr_attribute_1');
console.log(attrName);// => "attribute_1"`],name:"parseHTMLName",longname:"Utilities.parseHTMLName",kind:"function",scope:"static"},{comment:"",meta:{range:[4697,4743],filename:"utility.js",lineno:116,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006920",name:"match",type:"CallExpression",value:""}},undocumented:!0,name:"match",longname:"Utilities.parseHTMLName~match",kind:"member",memberof:"Utilities.parseHTMLName",scope:"inner",params:[]},{comment:"",meta:{range:[4784,4820],filename:"utility.js",lineno:120,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006937",name:"kFuncs.parseHTMLName",type:"Identifier",value:"parseHTMLName",paramnames:[]}},undocumented:!0,name:"parseHTMLName",longname:"kFuncs.parseHTMLName",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Capitalize each word in a string
 * @memberof Utilities
 * @param {string} string - The string to capitalize
 * @returns {string}
 * @example
 * const capitalized = k.capitalize('a word');
 * console.log(capitalized);// => "A Word"
 */`,meta:{range:[5072,5183],filename:"utility.js",lineno:131,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006943",name:"capitalize",type:"FunctionExpression"},vars:{"":null}},description:"Capitalize each word in a string",memberof:"Utilities",params:[{type:{names:["string"]},description:"The string to capitalize",name:"string"}],returns:[{type:{names:["string"]}}],examples:[`const capitalized = k.capitalize('a word');
console.log(capitalized);// => "A Word"`],name:"capitalize",longname:"Utilities.capitalize",kind:"function",scope:"static"},{comment:"",meta:{range:[5185,5215],filename:"utility.js",lineno:134,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006961",name:"kFuncs.capitalize",type:"Identifier",value:"capitalize",paramnames:[]}},undocumented:!0,name:"capitalize",longname:"kFuncs.capitalize",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Extracts a roll query result for use in later functions. Must be awaited as per [startRoll documentation](https://wiki.roll20.net/Sheet_Worker_Scripts#Roll_Parsing.28NEW.29). Stolen from [Oosh\\'s Adventures with Startroll thread](https://app.roll20.net/forum/post/10346883/adventures-with-startroll).
 * @memberof Utilities
 * @param {string} query - The query should be just the text as the \`?{\` and \`}\` at the start/end of the query are added by the function.
 * @returns {Promise} - Resolves to the selected value from the roll query
 * @example
 * const rollFunction = async function(){
 *  //Get the result of a choose from list query
 *  const queryResult = await extractQueryResult('Prompt Text Here|Option 1|Option 2');
 *  console.log(queryResult);//=> "Option 1" or "Option 2" depending on what the user selects
 * 
 *  //Get free form input from the user
 *  const freeResult = await extractQueryResult('Prompt Text Here');
 *  consoel.log(freeResult);// => Whatever the user entered
 * }
 */`,meta:{range:[6235,6503],filename:"utility.js",lineno:152,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006967",name:"extractQueryResult",type:"FunctionExpression"},vars:{queryRoll:"Utilities.extractQueryResult~queryRoll"}},description:"Extracts a roll query result for use in later functions. Must be awaited as per [startRoll documentation](https://wiki.roll20.net/Sheet_Worker_Scripts#Roll_Parsing.28NEW.29). Stolen from [Oosh\\'s Adventures with Startroll thread](https://app.roll20.net/forum/post/10346883/adventures-with-startroll).",memberof:"Utilities",params:[{type:{names:["string"]},description:"The query should be just the text as the `?{` and `}` at the start/end of the query are added by the function.",name:"query"}],returns:[{type:{names:["Promise"]},description:"- Resolves to the selected value from the roll query"}],examples:[`const rollFunction = async function(){
 //Get the result of a choose from list query
 const queryResult = await extractQueryResult('Prompt Text Here|Option 1|Option 2');
 console.log(queryResult);//=> "Option 1" or "Option 2" depending on what the user selects

 //Get free form input from the user
 const freeResult = await extractQueryResult('Prompt Text Here');
 consoel.log(freeResult);// => Whatever the user entered
}`],name:"extractQueryResult",longname:"Utilities.extractQueryResult",kind:"function",scope:"static",async:!0},{comment:"",meta:{range:[6323,6392],filename:"utility.js",lineno:154,columnno:5,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100006977",name:"queryRoll",type:"AwaitExpression",value:""}},undocumented:!0,name:"queryRoll",longname:"Utilities.extractQueryResult~queryRoll",kind:"member",memberof:"Utilities.extractQueryResult",scope:"inner",params:[]},{comment:"",meta:{range:[6505,6551],filename:"utility.js",lineno:158,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007006",name:"kFuncs.extractQueryResult",type:"Identifier",value:"extractQueryResult",paramnames:[]}},undocumented:!0,name:"extractQueryResult",longname:"kFuncs.extractQueryResult",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Simulates a query for ensuring that async/await works correctly in the sheetworker environment when doing conditional startRolls. E.g. if you have an if/else and only one of the conditions results in \`startRoll\` being called (and thus an \`await\`), the sheetworker environment would normally crash. Awaiting this in the condition that does not actually need to call \`startRoll\` will keep the environment in sync.
 * @memberof Utilities
 * @param {string|number} [value] - The value to return. Optional.
 * @returns {Promise} - Resolves to the value passed to the function
 * @example
 * const rollFunction = async function(){
 *  //Get the result of a choose from list query
 *  const queryResult = await pseudoQuery('a value');
 *  console.log(queryResult);//=> "a value"
 * }
 */`,meta:{range:[7348,7599],filename:"utility.js",lineno:172,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007012",name:"pseudoQuery",type:"FunctionExpression"},vars:{queryRoll:"Utilities.pseudoQuery~queryRoll"}},description:"Simulates a query for ensuring that async/await works correctly in the sheetworker environment when doing conditional startRolls. E.g. if you have an if/else and only one of the conditions results in `startRoll` being called (and thus an `await`), the sheetworker environment would normally crash. Awaiting this in the condition that does not actually need to call `startRoll` will keep the environment in sync.",memberof:"Utilities",params:[{type:{names:["string","number"]},optional:!0,description:"The value to return. Optional.",name:"value"}],returns:[{type:{names:["Promise"]},description:"- Resolves to the value passed to the function"}],examples:[`const rollFunction = async function(){
 //Get the result of a choose from list query
 const queryResult = await pseudoQuery('a value');
 console.log(queryResult);//=> "a value"
}`],name:"pseudoQuery",longname:"Utilities.pseudoQuery",kind:"function",scope:"static",async:!0},{comment:"",meta:{range:[7422,7488],filename:"utility.js",lineno:174,columnno:5,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007022",name:"queryRoll",type:"AwaitExpression",value:""}},undocumented:!0,name:"queryRoll",longname:"Utilities.pseudoQuery~queryRoll",kind:"member",memberof:"Utilities.pseudoQuery",scope:"inner",params:[]},{comment:"",meta:{range:[7601,7633],filename:"utility.js",lineno:178,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007051",name:"kFuncs.pseudoQuery",type:"Identifier",value:"pseudoQuery",paramnames:[]}},undocumented:!0,name:"pseudoQuery",longname:"kFuncs.pseudoQuery",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * An alias for console.log.
 * @memberof Utilities
 * @param {any} msg - The message can be a straight string, an object, or an array. If it is an object or array, the object will be broken down so that each key is used as a label to output followed by the value of that key. If the value of the key is an object or array, it will be output via \`console.table\`.
 */`,meta:{range:[8013,8516],filename:"utility.js",lineno:185,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007057",name:"log",type:"FunctionExpression"},vars:{"":null}},description:"An alias for console.log.",memberof:"Utilities",params:[{type:{names:["any"]},description:"The message can be a straight string, an object, or an array. If it is an object or array, the object will be broken down so that each key is used as a label to output followed by the value of that key. If the value of the key is an object or array, it will be output via `console.table`.",name:"msg"}],name:"log",longname:"Utilities.log",kind:"function",scope:"static"},{comment:"",meta:{range:[8518,8534],filename:"utility.js",lineno:199,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007155",name:"kFuncs.log",type:"Identifier",value:"log",paramnames:[]}},undocumented:!0,name:"log",longname:"kFuncs.log",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Alias for console.log that only triggers when debug mode is enabled or when the sheet\\'s version is \`0\`. Useful for entering test logs that will not pollute the console on the live sheet.
 * @memberof Utilities
 * @param {any} msg - 'See {@link k.log}
 * @param {boolean} force - Pass as a truthy value to force the debug output to be output to the console regardless of debug mode.
 * @returns {void}
 */`,meta:{range:[8956,9624],filename:"utility.js",lineno:208,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007161",name:"debug",type:"FunctionExpression"},vars:{"":null}},description:"Alias for console.log that only triggers when debug mode is enabled or when the sheet\\'s version is `0`. Useful for entering test logs that will not pollute the console on the live sheet.",memberof:"Utilities",params:[{type:{names:["any"]},description:"'See {@link k.log}",name:"msg"},{type:{names:["boolean"]},description:"Pass as a truthy value to force the debug output to be output to the console regardless of debug mode.",name:"force"}],returns:[{type:{names:["void"]}}],name:"debug",longname:"Utilities.debug",kind:"function",scope:"static"},{comment:"",meta:{range:[9626,9646],filename:"utility.js",lineno:224,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007284",name:"kFuncs.debug",type:"Identifier",value:"debug",paramnames:[]}},undocumented:!0,name:"debug",longname:"kFuncs.debug",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Orders the section id arrays for all sections in the \`sections\` object to match the repOrder attribute.
 * @memberof Utilities
 * @param {attributesProxy} attributes - The attributes object that must have a value for the reporder for each section.
 * @param {object[]} sections - Object containing the IDs for the repeating sections, indexed by repeating section name.
 */`,meta:{range:[10035,10317],filename:"utility.js",lineno:232,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007290",name:"orderSections",type:"FunctionExpression"},vars:{"":null}},description:"Orders the section id arrays for all sections in the `sections` object to match the repOrder attribute.",memberof:"Utilities",params:[{type:{names:["attributesProxy"]},description:"The attributes object that must have a value for the reporder for each section.",name:"attributes"},{type:{names:["Array.<object>"]},description:"Object containing the IDs for the repeating sections, indexed by repeating section name.",name:"sections"}],name:"orderSections",longname:"Utilities.orderSections",kind:"function",scope:"static"},{comment:"",meta:{range:[10131,10225],filename:"utility.js",lineno:234,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007309",name:"attributes.attributes[undefined]",type:"CallExpression",value:"",paramnames:[]}},undocumented:!0,name:"attributes[undefined]",longname:"attributes.attributes[undefined]",kind:"member",memberof:"attributes",scope:"static"},{comment:"",meta:{range:[10319,10355],filename:"utility.js",lineno:238,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007341",name:"kFuncs.orderSections",type:"Identifier",value:"orderSections",paramnames:[]}},undocumented:!0,name:"orderSections",longname:"kFuncs.orderSections",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Orders a single ID array.
 * @memberof Utilities
 * @param {string[]} repOrder - Array of IDs in the order they are in on the sheet.
 * @param {string[]} IDs - Array of IDs to be ordered.
 */`,meta:{range:[10563,10714],filename:"utility.js",lineno:246,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007347",name:"orderSection",type:"FunctionExpression"},vars:{"":null}},description:"Orders a single ID array.",memberof:"Utilities",params:[{type:{names:["Array.<string>"]},description:"Array of IDs in the order they are in on the sheet.",name:"repOrder"},{type:{names:["Array.<string>"]},description:"Array of IDs to be ordered.",name:"IDs"}],name:"orderSection",longname:"Utilities.orderSection",kind:"function",scope:"static"},{comment:"",meta:{range:[10716,10750],filename:"utility.js",lineno:251,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007383",name:"kFuncs.orderSection",type:"Identifier",value:"orderSection",paramnames:[]}},undocumented:!0,name:"orderSection",longname:"kFuncs.orderSection",kind:"member",memberof:"kFuncs",scope:"static"},{comment:`/**
 * Splits a comma delimited string into an array
 * @memberof Utilities
 * @param {string} string - The string to split.
 * @returns {array} - The string segments of the comma delimited list.
 */`,meta:{range:[10959,11042],filename:"utility.js",lineno:259,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007389",name:"commaArray",type:"FunctionExpression"}},description:"Splits a comma delimited string into an array",memberof:"Utilities",params:[{type:{names:["string"]},description:"The string to split.",name:"string"}],returns:[{type:{names:["array"]},description:"- The string segments of the comma delimited list."}],name:"commaArray",longname:"Utilities.commaArray",kind:"function",scope:"static"},{comment:"",meta:{range:[11044,11074],filename:"utility.js",lineno:262,columnno:0,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007406",name:"kFuncs.commaArray",type:"Identifier",value:"commaArray",paramnames:[]}},undocumented:!0,name:"commaArray",longname:"kFuncs.commaArray",kind:"member",memberof:"kFuncs",scope:"static"},{comment:"",meta:{range:[11182,11807],filename:"utility.js",lineno:265,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007412",name:"RE",type:"ObjectExpression",value:'{"chars":"","escape":"","unescape":""}'}},undocumented:!0,name:"RE",longname:"RE",kind:"constant",scope:"global",params:[]},{comment:"",meta:{range:[11191,11310],filename:"utility.js",lineno:266,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007415",name:"chars",type:"ObjectExpression",value:'{"undefined":"%lcub;"}'}},undocumented:!0,name:"chars",longname:"RE.chars",kind:"member",memberof:"RE",scope:"static"},{comment:"",meta:{range:[11206,11219],filename:"utility.js",lineno:267,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007417",name:'"\\""',type:"Literal",value:"%quot;"}},undocumented:!0,name:'"\\""',longname:'RE.chars."\\""',kind:"member",memberof:"RE.chars",scope:"static"},{comment:"",meta:{range:[11227,11241],filename:"utility.js",lineno:268,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007419",name:'","',type:"Literal",value:"%comma;"}},undocumented:!0,name:'","',longname:'RE.chars.","',kind:"member",memberof:"RE.chars",scope:"static"},{comment:"",meta:{range:[11249,11263],filename:"utility.js",lineno:269,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007421",name:'":"',type:"Literal",value:"%colon;"}},undocumented:!0,name:'":"',longname:'RE.chars.":"',kind:"member",memberof:"RE.chars",scope:"static"},{comment:"",meta:{range:[11271,11284],filename:"utility.js",lineno:270,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007423",name:'"}"',type:"Literal",value:"%rcub;"}},undocumented:!0,name:'"}"',longname:'RE.chars."}"',kind:"member",memberof:"RE.chars",scope:"static"},{comment:"",meta:{range:[11292,11305],filename:"utility.js",lineno:271,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007425",name:'"{"',type:"Literal",value:"%lcub;"}},undocumented:!0,name:'"{"',longname:'RE.chars."{"',kind:"member",memberof:"RE.chars",scope:"static"},{comment:"",meta:{range:[11314,11445],filename:"utility.js",lineno:273,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007427",name:"escape",type:"FunctionExpression"}},undocumented:!0,name:"escape",longname:"RE.escape",kind:"function",memberof:"RE",scope:"static"},{comment:"",meta:{range:[11449,11805],filename:"utility.js",lineno:278,columnno:2,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007453",name:"unescape",type:"FunctionExpression"},vars:{isData:"RE.unescape~isData"}},undocumented:!0,name:"unescape",longname:"RE.unescape",kind:"function",memberof:"RE",scope:"static"},{comment:"",meta:{range:[11478,11607],filename:"utility.js",lineno:279,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007458",name:"isData",type:"LogicalExpression",value:""}},undocumented:!0,name:"isData",longname:"RE.unescape~isData",kind:"constant",memberof:"RE.unescape",scope:"inner",params:[]},{comment:`/**
 * Encodes data in Base64. This is useful for passing roll information to action buttons called from roll buttons.
 * @function
 * @param {string|object|any[]} data - The data that you want to Base64 encode
 * @returns {string} - The encoded data
 * @memberof! Utilities
 */`,meta:{range:[12095,12113],filename:"utility.js",lineno:301,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007507",name:"escape",type:"MemberExpression",value:"RE.escape"}},description:"Encodes data in Base64. This is useful for passing roll information to action buttons called from roll buttons.",kind:"function",params:[{type:{names:["string","object","Array.<any>"]},description:"The data that you want to Base64 encode",name:"data"}],returns:[{type:{names:["string"]},description:"- The encoded data"}],forceMemberof:!0,memberof:"Utilities",name:"escape",longname:"Utilities.escape",scope:"static"},{comment:`/**
 * Decodes Base64 encoded strings that were created by the K-scaffold
 * @function
 * @param {string|object|any[]} string - The string of encoded data to decode. If this is not a string, or is not a string that was encoded by the K-scaffold, it will be returned as is.
 * @returns {string|object|any[]}
 * @memberof! Utilities
 */`,meta:{range:[12456,12478],filename:"utility.js",lineno:309,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007513",name:"unescape",type:"MemberExpression",value:"RE.unescape"}},description:"Decodes Base64 encoded strings that were created by the K-scaffold",kind:"function",params:[{type:{names:["string","object","Array.<any>"]},description:"The string of encoded data to decode. If this is not a string, or is not a string that was encoded by the K-scaffold, it will be returned as is.",name:"string"}],returns:[{type:{names:["string","object","Array.<any>"]}}],forceMemberof:!0,memberof:"Utilities",name:"unescape",longname:"Utilities.unescape",scope:"static"},{comment:"",meta:{range:[12503,12509],filename:"utility.js",lineno:311,columnno:22,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007525",name:"escape",type:"Identifier",value:"escape"}},undocumented:!0,name:"escape",longname:"escape",kind:"member",scope:"global"},{comment:"",meta:{range:[12510,12518],filename:"utility.js",lineno:311,columnno:29,path:"/home/runner/work/k-scaffold/k-scaffold/lib/scripts",code:{id:"astnode100007527",name:"unescape",type:"Identifier",value:"unescape"}},undocumented:!0,name:"unescape",longname:"unescape",kind:"member",scope:"global"},{comment:"/**\n * The default tab navigation function of the K-scaffold. Courtesy of Riernar. It will add `k-active-tab` to the active tab-container and `k-active-button` to the active button. You can either write your own CSS to control display of these, or use the default CSS included in `scaffold/_k.scss`. Note that `k-active-button` has no default CSS as it is assumed that you will want to style the active button to match your system.\n * @memberof Sheetworkers\n * @param {Object} trigger - The trigger object\n * @param {object} attributes - The attribute values of the character\n */",meta:{range:[586,1239],filename:"tabs.js",lineno:7,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007532",name:"kSwitchTab",type:"FunctionExpression"},vars:{undefined:null,tabInputName:"Sheetworkers.kSwitchTab~tabInputName","attributes[undefined]":null}},description:"The default tab navigation function of the K-scaffold. Courtesy of Riernar. It will add `k-active-tab` to the active tab-container and `k-active-button` to the active button. You can either write your own CSS to control display of these, or use the default CSS included in `scaffold/_k.scss`. Note that `k-active-button` has no default CSS as it is assumed that you will want to style the active button to match your system.",memberof:"Sheetworkers",params:[{type:{names:["Object"]},description:"The trigger object",name:"trigger"},{type:{names:["object"]},description:"The attribute values of the character",name:"attributes"}],name:"kSwitchTab",longname:"Sheetworkers.kSwitchTab",kind:"function",scope:"static"},{comment:"",meta:{range:[611,618],filename:"tabs.js",lineno:7,columnno:31,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007536",name:"trigger",type:"Identifier",value:"trigger"}},undocumented:!0,name:"trigger",longname:"trigger",kind:"member",scope:"global"},{comment:"",meta:{range:[620,630],filename:"tabs.js",lineno:7,columnno:40,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007538",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[1086,1138],filename:"tabs.js",lineno:16,columnno:8,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007606",name:"tabInputName",type:"TemplateLiteral",value:""}},undocumented:!0,name:"tabInputName",longname:"Sheetworkers.kSwitchTab~tabInputName",kind:"constant",memberof:"Sheetworkers.kSwitchTab",scope:"inner",params:[]},{comment:"",meta:{range:[1193,1232],filename:"tabs.js",lineno:18,columnno:4,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007628",name:"attributes[undefined]",type:"MemberExpression",value:"trigger.name",paramnames:[]}},undocumented:!0,name:"attributes[undefined]",longname:"attributes[undefined]",kind:"member",scope:"global"},{comment:"",meta:{range:[1257,1267],filename:"tabs.js",lineno:22,columnno:16,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007639",name:"kSwitchTab",type:"Identifier",value:"kSwitchTab"}},undocumented:!0,name:"kSwitchTab",longname:"kSwitchTab",kind:"member",scope:"global"},{comment:`/**
 * Sets persistent tabs to their last active state
 * @memberof Sheetworkers
 * @param {object} attributes - The attribute values of the character
 */`,meta:{range:[1434,1701],filename:"tabs.js",lineno:29,columnno:6,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007642",name:"kTabOnOpen",type:"FunctionExpression"},vars:{"":null}},description:"Sets persistent tabs to their last active state",memberof:"Sheetworkers",params:[{type:{names:["object"]},description:"The attribute values of the character",name:"attributes"}],name:"kTabOnOpen",longname:"Sheetworkers.kTabOnOpen",kind:"function",scope:"static"},{comment:"",meta:{range:[1457,1464],filename:"tabs.js",lineno:29,columnno:29,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007646",name:"trigger",type:"Identifier",value:"trigger"}},undocumented:!0,name:"trigger",longname:"trigger",kind:"member",scope:"global"},{comment:"",meta:{range:[1465,1475],filename:"tabs.js",lineno:29,columnno:37,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007648",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[1476,1484],filename:"tabs.js",lineno:29,columnno:48,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007650",name:"sections",type:"Identifier",value:"sections"}},undocumented:!0,name:"sections",longname:"sections",kind:"member",scope:"global"},{comment:"",meta:{range:[1485,1489],filename:"tabs.js",lineno:29,columnno:57,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007652",name:"casc",type:"Identifier",value:"casc"}},undocumented:!0,name:"casc",longname:"casc",kind:"member",scope:"global"},{comment:"",meta:{range:[1596,1639],filename:"tabs.js",lineno:32,columnno:10,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007670",name:"pseudoTrigger",type:"ObjectExpression",value:'{"name":""}'}},undocumented:!0,name:"pseudoTrigger",longname:"<anonymous>~pseudoTrigger",kind:"constant",memberof:"<anonymous>",scope:"inner",params:[]},{comment:"",meta:{range:[1613,1638],filename:"tabs.js",lineno:32,columnno:27,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007673",name:"name",type:"MemberExpression",value:"attributes[undefined]"}},undocumented:!0,name:"name",longname:"<anonymous>~pseudoTrigger.name",kind:"member",memberof:"<anonymous>~pseudoTrigger",scope:"static"},{comment:"",meta:{range:[1657,1678],filename:"tabs.js",lineno:33,columnno:16,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007681",name:"trigger",type:"Identifier",value:"pseudoTrigger"}},undocumented:!0,name:"trigger",longname:"trigger",kind:"member",scope:"global"},{comment:"",meta:{range:[1680,1690],filename:"tabs.js",lineno:33,columnno:39,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007683",name:"attributes",type:"Identifier",value:"attributes"}},undocumented:!0,name:"attributes",longname:"attributes",kind:"member",scope:"global"},{comment:"",meta:{range:[1719,1729],filename:"tabs.js",lineno:36,columnno:16,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007689",name:"kTabOnOpen",type:"Identifier",value:"kTabOnOpen"}},undocumented:!0,name:"kTabOnOpen",longname:"kTabOnOpen",kind:"member",scope:"global"},{comment:"",meta:{range:[1733,1748],filename:"tabs.js",lineno:36,columnno:30,path:"/home/runner/work/k-scaffold/k-scaffold/lib/tabs",code:{id:"astnode100007692",name:"type",type:"ArrayExpression",value:'["opener"]'}},undocumented:!0,name:"type",longname:"type",kind:"member",scope:"global"},{kind:"package",longname:"package:undefined",files:["/home/runner/work/k-scaffold/k-scaffold/lib/render/errorHead.js","/home/runner/work/k-scaffold/k-scaffold/lib/render/getTemplate.js","/home/runner/work/k-scaffold/k-scaffold/lib/render/index.js","/home/runner/work/k-scaffold/k-scaffold/lib/render/kStatus.js","/home/runner/work/k-scaffold/k-scaffold/lib/render/locals/index.js","/home/runner/work/k-scaffold/k-scaffold/lib/render/outputPug.js","/home/runner/work/k-scaffold/k-scaffold/lib/render/outputTests.js","/home/runner/work/k-scaffold/k-scaffold/lib/render/processSheet.js","/home/runner/work/k-scaffold/k-scaffold/lib/render/renderPug.js","/home/runner/work/k-scaffold/k-scaffold/lib/render/renderSASS.js","/home/runner/work/k-scaffold/k-scaffold/lib/render/resolvePaths.js","/home/runner/work/k-scaffold/k-scaffold/lib/render/watch.js","/home/runner/work/k-scaffold/k-scaffold/lib/scripts/accessSheet.js","/home/runner/work/k-scaffold/k-scaffold/lib/scripts/attribute_proxy.js","/home/runner/work/k-scaffold/k-scaffold/lib/scripts/kvariables.js","/home/runner/work/k-scaffold/k-scaffold/lib/scripts/listeners.js","/home/runner/work/k-scaffold/k-scaffold/lib/scripts/mock20.js","/home/runner/work/k-scaffold/k-scaffold/lib/scripts/mockScaffold.js","/home/runner/work/k-scaffold/k-scaffold/lib/scripts/parse_cascade.js","/home/runner/work/k-scaffold/k-scaffold/lib/scripts/sheetworker_aliases.js","/home/runner/work/k-scaffold/k-scaffold/lib/scripts/utility.js","/home/runner/work/k-scaffold/k-scaffold/lib/tabs/tabs.js"]}],Sp=Object.freeze(Object.defineProperty({__proto__:null,js:_p,pug:jp,sass:wp},Symbol.toStringTag,{value:"Module"}));console.log("data",Sp);Vd.add(Kd);const rr=Xm(dp),_l=nu();_l.use(fu);rr.use(_l);rr.use(xp);rr.mount("#app");export{Re as F,jl as _,ye as a,Vc as b,Fn as c,ae as d,Tn as e,bm as f,Lo as g,qo as h,it as i,_p as j,Ap as k,Op as l,Kc as m,Je as o,jp as p,Gc as r,wp as s,Rl as t,je as u,dn as w};
