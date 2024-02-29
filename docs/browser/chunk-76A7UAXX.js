import{Ba as u,Ca as a,Da as ne,Ga as re,Ha as oe,L as W,Ma as ie,Oa as se,T as J,U as X,a as R,b as O,ba as ee,ca as te,f as F,i as Z,ic as ue,j as b,l as H,lb as I,mb as T,n as Y,ob as C,qb as ce,ra as m,t as Q,ua as c}from"./chunk-RJJ6RABR.js";function D(e,t){let o=!t?.manualCleanup;o&&!t?.injector&&ie(D);let n=o?t?.injector?.get(C)??a(C):null,r;t?.requireSync?r=T({kind:0}):r=T({kind:1,value:t?.initialValue});let i=e.subscribe({next:s=>r.set({kind:1,value:s}),error:s=>{if(t?.rejectErrors)throw s;r.set({kind:2,error:s})}});return n?.onDestroy(i.unsubscribe.bind(i)),I(()=>{let s=r();switch(s.kind){case 1:return s.value;case 2:throw s.error;case 0:throw new te(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}var M={};function y(e,t){if(M[e]=(M[e]||0)+1,typeof t=="function")return k(e,(...n)=>O(R({},t(...n)),{type:e}));switch(t?t._as:"empty"){case"empty":return k(e,()=>({type:e}));case"props":return k(e,n=>O(R({},n),{type:e}));default:throw new Error("Unexpected config.")}}function v(){return{_as:"props",_p:void 0}}function k(e,t){return Object.defineProperty(t,"type",{value:e,writable:!1})}var Se="@ngrx/store/init",g=(()=>{let t=class t extends b{constructor(){super({type:Se})}next(n){if(typeof n=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof n>"u")throw new TypeError("Actions must be objects");if(typeof n.type>"u")throw new TypeError("Actions must have a type property");super.next(n)}complete(){}ngOnDestroy(){super.complete()}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=m({token:t,factory:t.\u0275fac});let e=t;return e})(),Te=[g],Fe=new c("@ngrx/store Internal Root Guard"),ae=new c("@ngrx/store Internal Initial State"),V=new c("@ngrx/store Initial State"),be=new c("@ngrx/store Reducer Factory"),de=new c("@ngrx/store Internal Reducer Factory Provider"),Ie=new c("@ngrx/store Initial Reducers"),U=new c("@ngrx/store Internal Initial Reducers"),At=new c("@ngrx/store Store Features"),le=new c("@ngrx/store Internal Store Reducers"),Ot=new c("@ngrx/store Internal Feature Reducers"),Tt=new c("@ngrx/store Internal Feature Configs"),Ct=new c("@ngrx/store Internal Store Features"),Dt=new c("@ngrx/store Internal Feature Reducers Token"),kt=new c("@ngrx/store Feature Reducers"),fe=new c("@ngrx/store User Provided Meta Reducers"),j=new c("@ngrx/store Meta Reducers"),pe=new c("@ngrx/store Internal Resolved Meta Reducers"),ye=new c("@ngrx/store User Runtime Checks Config"),he=new c("@ngrx/store Internal User Runtime Checks Config"),E=new c("@ngrx/store Internal Runtime Checks"),je=new c("@ngrx/store Check if Action types are unique"),Re=new c("@ngrx/store Root Store Provider"),Ut=new c("@ngrx/store Feature State Provider");function Ce(e,t={}){let o=Object.keys(e),n={};for(let i=0;i<o.length;i++){let s=o[i];typeof e[s]=="function"&&(n[s]=e[s])}let r=Object.keys(n);return function(s,h){s=s===void 0?t:s;let d=!1,l={};for(let f=0;f<r.length;f++){let p=r[f],A=n[p],B=s[p],G=A(B,h);l[p]=G,d=d||G!==B}return d?l:s}}function De(e,t){return Object.keys(e).filter(o=>o!==t).reduce((o,n)=>Object.assign(o,{[n]:e[n]}),{})}function we(...e){return function(t){if(e.length===0)return t;let o=e[e.length-1];return e.slice(0,-1).reduceRight((r,i)=>i(r),o(t))}}function xe(e,t){return Array.isArray(t)&&t.length>0&&(e=we.apply(null,[...t,e])),(o,n)=>{let r=e(o);return(i,s)=>(i=i===void 0?n:i,r(i,s))}}function ke(e){let t=Array.isArray(e)&&e.length>0?we(...e):o=>o;return(o,n)=>(o=t(o),(r,i)=>(r=r===void 0?n:r,o(r,i)))}var S=class extends F{},w=class extends g{},Ue="@ngrx/store/update-reducers",_=(()=>{let t=class t extends b{get currentReducers(){return this.reducers}constructor(n,r,i,s){super(s(i,r)),this.dispatcher=n,this.initialState=r,this.reducers=i,this.reducerFactory=s}addFeature(n){this.addFeatures([n])}addFeatures(n){let r=n.reduce((i,{reducers:s,reducerFactory:h,metaReducers:d,initialState:l,key:f})=>{let p=typeof s=="function"?ke(d)(s,l):xe(h,d)(s,l);return i[f]=p,i},{});this.addReducers(r)}removeFeature(n){this.removeFeatures([n])}removeFeatures(n){this.removeReducers(n.map(r=>r.key))}addReducer(n,r){this.addReducers({[n]:r})}addReducers(n){this.reducers=R(R({},this.reducers),n),this.updateReducers(Object.keys(n))}removeReducer(n){this.removeReducers([n])}removeReducers(n){n.forEach(r=>{this.reducers=De(this.reducers,r)}),this.updateReducers(n)}updateReducers(n){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:Ue,features:n})}ngOnDestroy(){this.complete()}};t.\u0275fac=function(r){return new(r||t)(u(w),u(V),u(Ie),u(be))},t.\u0275prov=m({token:t,factory:t.\u0275fac});let e=t;return e})(),Me=[_,{provide:S,useExisting:_},{provide:w,useExisting:g}],$=(()=>{let t=class t extends Z{ngOnDestroy(){this.complete()}};t.\u0275fac=(()=>{let n;return function(i){return(n||(n=se(t)))(i||t)}})(),t.\u0275prov=m({token:t,factory:t.\u0275fac});let e=t;return e})(),_e=[$],x=class extends F{},me=(()=>{let t=class t extends b{constructor(n,r,i,s){super(s);let d=n.pipe(Y(H)).pipe(ee(r)),l={state:s},f=d.pipe(X(Ne,l));this.stateSubscription=f.subscribe(({state:p,action:A})=>{this.next(p),i.next(A)}),this.state=D(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}};t.INIT=Se,t.\u0275fac=function(r){return new(r||t)(u(g),u(S),u($),u(V))},t.\u0275prov=m({token:t,factory:t.\u0275fac});let e=t;return e})();function Ne(e={state:void 0},[t,o]){let{state:n}=e;return{state:o(n,t),action:t}}var Pe=[me,{provide:x,useExisting:me}],q=(()=>{let t=class t extends F{constructor(n,r,i){super(),this.actionsObserver=r,this.reducerManager=i,this.source=n,this.state=n.state}select(n,...r){return Ve.call(null,n,...r)(this)}selectSignal(n,r){return I(()=>n(this.state()),r)}lift(n){let r=new t(this,this.actionsObserver,this.reducerManager);return r.operator=n,r}dispatch(n){this.actionsObserver.next(n)}next(n){this.actionsObserver.next(n)}error(n){this.actionsObserver.error(n)}complete(){this.actionsObserver.complete()}addReducer(n,r){this.reducerManager.addReducer(n,r)}removeReducer(n){this.reducerManager.removeReducer(n)}};t.\u0275fac=function(r){return new(r||t)(u(x),u(g),u(_))},t.\u0275prov=m({token:t,factory:t.\u0275fac});let e=t;return e})(),ze=[q];function Ve(e,t,...o){return function(r){let i;if(typeof e=="string"){let s=[t,...o].filter(Boolean);i=r.pipe(J(e,...s))}else if(typeof e=="function")i=r.pipe(Q(s=>e(s,t)));else throw new TypeError(`Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`);return i.pipe(W())}}var K="https://ngrx.io/guide/store/configuration/runtime-checks";function ve(e){return e===void 0}function ge(e){return e===null}function Ae(e){return Array.isArray(e)}function $e(e){return typeof e=="string"}function qe(e){return typeof e=="boolean"}function Ke(e){return typeof e=="number"}function Oe(e){return typeof e=="object"&&e!==null}function Le(e){return Oe(e)&&!Ae(e)}function Be(e){if(!Le(e))return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}function N(e){return typeof e=="function"}function Ge(e){return N(e)&&e.hasOwnProperty("\u0275cmp")}function Ze(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function He(e){return e instanceof c?a(e):e}function Ye(e){return typeof e=="function"?e():e}function Qe(e,t){return e.concat(t)}function We(){if(a(q,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function Je(e,t){return function(o,n){let r=t.action(n)?P(n):n,i=e(o,r);return t.state()?P(i):i}}function P(e){Object.freeze(e);let t=N(e);return Object.getOwnPropertyNames(e).forEach(o=>{if(!o.startsWith("\u0275")&&Ze(e,o)&&(!t||o!=="caller"&&o!=="callee"&&o!=="arguments")){let n=e[o];(Oe(n)||N(n))&&!Object.isFrozen(n)&&P(n)}}),e}function Xe(e,t){return function(o,n){if(t.action(n)){let i=z(n);Ee(i,"action")}let r=e(o,n);if(t.state()){let i=z(r);Ee(i,"state")}return r}}function z(e,t=[]){return(ve(e)||ge(e))&&t.length===0?{path:["root"],value:e}:Object.keys(e).reduce((n,r)=>{if(n)return n;let i=e[r];return Ge(i)?n:ve(i)||ge(i)||Ke(i)||qe(i)||$e(i)||Ae(i)?!1:Be(i)?z(i,[...t,r]):{path:[...t,r],value:i}},!1)}function Ee(e,t){if(e===!1)return;let o=e.path.join("."),n=new Error(`Detected unserializable ${t} at "${o}". ${K}#strict${t}serializability`);throw n.value=e.value,n.unserializablePath=o,n}function et(e,t){return function(o,n){if(t.action(n)&&!ce.isInAngularZone())throw new Error(`Action '${n.type}' running outside NgZone. ${K}#strictactionwithinngzone`);return e(o,n)}}function tt(e){return ue()?R({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},e):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function nt({strictActionSerializability:e,strictStateSerializability:t}){return o=>e||t?Xe(o,{action:n=>e&&!L(n),state:()=>t}):o}function rt({strictActionImmutability:e,strictStateImmutability:t}){return o=>e||t?Je(o,{action:n=>e&&!L(n),state:()=>t}):o}function L(e){return e.type.startsWith("@ngrx")}function ot({strictActionWithinNgZone:e}){return t=>e?et(t,{action:o=>e&&!L(o)}):t}function it(e){return[{provide:he,useValue:e},{provide:ye,useFactory:ct,deps:[he]},{provide:E,deps:[ye],useFactory:tt},{provide:j,multi:!0,deps:[E],useFactory:rt},{provide:j,multi:!0,deps:[E],useFactory:nt},{provide:j,multi:!0,deps:[E],useFactory:ot}]}function st(){return[{provide:je,multi:!0,deps:[E],useFactory:ut}]}function ct(e){return e}function ut(e){if(!e.strictActionTypeUniqueness)return;let t=Object.entries(M).filter(([,o])=>o>1).map(([o])=>o);if(t.length)throw new Error(`Action types are registered more than once, ${t.map(o=>`"${o}"`).join(", ")}. ${K}#strictactiontypeuniqueness`)}function at(e={},t={}){return[{provide:Fe,useFactory:We},{provide:ae,useValue:t.initialState},{provide:V,useFactory:Ye,deps:[ae]},{provide:U,useValue:e},{provide:le,useExisting:e instanceof c?e:U},{provide:Ie,deps:[U,[new ne(le)]],useFactory:He},{provide:fe,useValue:t.metaReducers?t.metaReducers:[]},{provide:pe,deps:[j,fe],useFactory:Qe},{provide:de,useValue:t.reducerFactory?t.reducerFactory:Ce},{provide:be,deps:[de,pe],useFactory:xe},Te,Me,_e,Pe,ze,it(t.runtimeChecks),st()]}function dt(){a(g),a(S),a($),a(q),a(Fe,{optional:!0}),a(je,{optional:!0})}var lt=[{provide:Re,useFactory:dt},{provide:re,multi:!0,useFactory(){return()=>a(Re)}}];function Mt(e,t){return oe([...at(e,t),lt])}function _t(...e){let t=e.pop(),o=e.map(n=>n.type);return{reducer:t,types:o}}function Nt(e,...t){let o=new Map;for(let n of t)for(let r of n.types){let i=o.get(r);if(i){let s=(h,d)=>n.reducer(i(h,d),d);o.set(r,s)}else o.set(r,n.reducer)}return function(n=e,r){let i=o.get(r.type);return i?i(n,r):n}}var $t=y("[Data] addData",v()),qt=y("[Data] addFilteredData",v()),Kt=y("[Data] addInFilter",v()),Lt=y("[Data] searchFilter",v()),Bt=y("[Data] removeInFilter",v()),Gt=y("[Data] removeAllFilters");export{y as a,Re as b,Ut as c,$ as d,q as e,Ve as f,Mt as g,_t as h,Nt as i,$t as j,qt as k,Kt as l,Lt as m,Bt as n,Gt as o};
