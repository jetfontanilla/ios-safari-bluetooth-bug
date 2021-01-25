var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function c(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function s(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function p(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.data!==e&&(t.data=e)}function g(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}}let v;function b(t){v=t}const y=[],$=[],_=[],x=[],w=Promise.resolve();let k=!1;function C(t){_.push(t)}let E=!1;const S=new Set;function A(){if(!E){E=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];b(e),D(e.$$)}for(y.length=0;$.length;)$.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];S.has(e)||(S.add(e),e())}_.length=0}while(y.length);for(;x.length;)x.pop()();k=!1,E=!1,S.clear()}}function D(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const M=new Set;function N(t,e){-1===t.$$.dirty[0]&&(y.push(t),k||(k=!0,w.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function L(r,i,a,u,s,d,f=[-1]){const p=v;b(r);const m=i.props||{},h=r.$$={fragment:null,ctx:null,props:d,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:n(),dirty:f};let g=!1;if(h.ctx=a?a(r,m,(t,e,...n)=>{const o=n.length?n[0]:e;return h.ctx&&s(h.ctx[t],h.ctx[t]=o)&&(h.bound[t]&&h.bound[t](o),g&&N(r,t)),e}):[],h.update(),g=!0,o(h.before_update),h.fragment=!!u&&u(h.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);h.fragment&&h.fragment.l(t),t.forEach(l)}else h.fragment&&h.fragment.c();i.intro&&((y=r.$$.fragment)&&y.i&&(M.delete(y),y.i($))),function(t,n,r){const{fragment:i,on_mount:a,on_destroy:l,after_update:u}=t.$$;i&&i.m(n,r),C(()=>{const n=a.map(e).filter(c);l?l.push(...n):o(n),t.$$.on_mount=[]}),u.forEach(C)}(r,i.target,i.anchor),A()}var y,$;b(p)}function U(t,e,n){const o=t.slice();return o[16]=e[n],o[17]=e,o[18]=n,o}function j(t,e,n){const o=t.slice();return o[19]=e[n].label,o[20]=e[n].deviceId,o[21]=e[n].kind,o}function B(e){let n;return{c(){n=s("h2"),n.textContent="getUserMedia API is not supported by your browser"},m(t,e){a(t,n,e)},p:t,d(t){t&&l(n)}}}function I(t){let e,n,o,c,r,d,h,v,b,y,$,_,x=t[2],w=[];for(let e=0;e<x.length;e+=1)w[e]=O(j(t,x,e));let k=t[4],E=[];for(let e=0;e<k.length;e+=1)E[e]=T(U(t,k,e));function S(t,e){return t[3]?R:P}let A=S(t),D=A(t);return{c(){e=s("div"),n=s("label"),o=s("span"),o.textContent="Select Microphone",c=f(),r=s("select");for(let t=0;t<w.length;t+=1)w[t].c();d=f(),h=s("div"),v=s("div"),v.textContent="Enable / Disable Media Constraints",b=f();for(let t=0;t<E.length;t+=1)E[t].c();y=f(),$=s("div"),D.c(),m(o,"class","text-label mr-5"),m(r,"class","voices"),void 0===t[1]&&C(()=>t[14].call(r)),m(e,"class","section"),m(h,"class","section flex-column"),m($,"class","section justify-content-center confirm")},m(l,u,s){a(l,e,u),i(e,n),i(n,o),i(n,c),i(n,r);for(let t=0;t<w.length;t+=1)w[t].m(r,null);g(r,t[1]),a(l,d,u),a(l,h,u),i(h,v),i(h,b);for(let t=0;t<E.length;t+=1)E[t].m(h,null);a(l,y,u),a(l,$,u),D.m($,null),s&&_(),_=p(r,"change",t[14])},p(t,e){if(4&e){let n;for(x=t[2],n=0;n<x.length;n+=1){const o=j(t,x,n);w[n]?w[n].p(o,e):(w[n]=O(o),w[n].c(),w[n].m(r,null))}for(;n<w.length;n+=1)w[n].d(1);w.length=x.length}if(2&e&&g(r,t[1]),16&e){let n;for(k=t[4],n=0;n<k.length;n+=1){const o=U(t,k,n);E[n]?E[n].p(o,e):(E[n]=T(o),E[n].c(),E[n].m(h,null))}for(;n<E.length;n+=1)E[n].d(1);E.length=k.length}A===(A=S(t))&&D?D.p(t,e):(D.d(1),D=A(t),D&&(D.c(),D.m($,null)))},d(t){t&&l(e),u(w,t),t&&l(d),t&&l(h),u(E,t),t&&l(y),t&&l($),D.d(),_()}}}function O(t){let e,n,o,c,r,u,p,m,g=t[19]+"",v=t[21]+"",b=t[20]+"";return{c(){e=s("option"),n=d(g),o=d(" - "),c=d(v),r=d(" - "),u=d(b),p=f(),e.__value=m=t[20],e.value=e.__value},m(t,l){a(t,e,l),i(e,n),i(e,o),i(e,c),i(e,r),i(e,u),i(e,p)},p(t,o){4&o&&g!==(g=t[19]+"")&&h(n,g),4&o&&v!==(v=t[21]+"")&&h(c,v),4&o&&b!==(b=t[20]+"")&&h(u,b),4&o&&m!==(m=t[20])&&(e.__value=m),e.value=e.__value},d(t){t&&l(e)}}}function T(t){let e,n,o,c,r,u,g,v=t[16].constraintName+"";function b(){t[15].call(n,t[16])}return{c(){e=s("label"),n=s("input"),o=f(),c=s("span"),r=d(v),u=f(),m(n,"type","checkbox"),m(n,"class","mr-5"),m(c,"class","text-label")},m(l,s,d){a(l,e,s),i(e,n),n.checked=t[16].enabled,i(e,o),i(e,c),i(c,r),i(e,u),d&&g(),g=p(n,"change",b)},p(e,o){t=e,16&o&&(n.checked=t[16].enabled),16&o&&v!==(v=t[16].constraintName+"")&&h(r,v)},d(t){t&&l(e),g()}}}function P(e){let n,o;return{c(){n=s("button"),n.innerHTML="<span>Record</span>",m(n,"class","primary")},m(t,c,r){a(t,n,c),r&&o(),o=p(n,"click",e[5])},p:t,d(t){t&&l(n),o()}}}function R(e){let n,o;return{c(){n=s("button"),n.innerHTML="<span>Stop</span>",m(n,"class","primary")},m(t,c,r){a(t,n,c),r&&o(),o=p(n,"click",e[6])},p:t,d(t){t&&l(n),o()}}}function q(e){let n;function o(t,e){return t[0]?I:B}let c=o(e),r=c(e);return{c(){n=s("div"),r.c(),m(n,"class","container")},m(t,e){a(t,n,e),r.m(n,null)},p(t,[e]){c===(c=o(t))&&r?r.p(t,e):(r.d(1),r=c(t),r&&(r.c(),r.m(n,null)))},i:t,o:t,d(t){t&&l(n),r.d()}}}function H(t,e,n){let o,c,r,i,a=navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices,l="",u=[],s=!1,d=[],f=[];async function p(){if(!a)return;await navigator.mediaDevices.getUserMedia({audio:!0});let t=await navigator.mediaDevices.enumerateDevices();if(n(2,u=t.filter(t=>"audioinput"===t.kind)),!u||0===u.length)return void n(0,a=!1);n(1,l=u[0].deviceId);let e=navigator.mediaDevices.getSupportedConstraints()||{};n(4,d=["autoGainControl","echoCancellation","noiseSuppression"].reduce((t,n)=>(e[n]&&t.push({constraintName:n,enabled:!0}),t),[]))}function m(t){let e=`audio_${d.reduce((t,e)=>t+=`${e.constraintName}_${e.enabled}_`,"")}0.pcm`,n=URL.createObjectURL(t),o=document.createElement("a");document.body.appendChild(o),o.style="display: none",o.href=n,o.download=e,o.click()}return p(),[a,l,u,s,d,async function(){l||(isOutputStreamNotSupported=!0),f=[];const t=d.reduce((t,e)=>(t[e.constraintName]=e.enabled,t),{audio:{deviceId:{exact:l}}});o=await navigator.mediaDevices.getUserMedia(t),c=new AudioContext,r=c.createMediaStreamSource(o),i=c.createScriptProcessor(4096,1,1),i.onaudioprocess=t=>{const e=new Float32Array(t.inputBuffer.getChannelData(0));f.push(e)},r.connect(i),i.connect(c.destination),n(3,s=!0)},function(){if(!o)return;o.getTracks().forEach((function(t){t.stop()}));let t=function(t){let e=0;t.forEach(t=>e+=t.byteLength);let n=new Uint8Array(new ArrayBuffer(e)),o=0;return t.forEach(t=>{n.set(new Uint8Array(t),o),o+=t.byteLength}),n.buffer}(f);console.log(t),m(new Blob(f,{type:"audio/pcm"})),i&&i.disconnect(),r&&r.disconnect(),c&&c.close(),n(3,s=!1)},f,o,c,r,i,p,m,function(){l=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(1,l),n(2,u)},function(t){t.enabled=this.checked,n(4,d)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){super(),L(this,t,H,q,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map