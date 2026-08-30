(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();var ti={};/**
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
 */const Ji={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const f=function(n,e){if(!n)throw Ce(e)},Ce=function(n){return new Error("Firebase Database ("+Ji.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Zi=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},wr=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},mn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,d=r>>2,h=(r&3)<<4|a>>4;let u=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(u=64)),i.push(t[d],t[h],t[u],t[p])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Zi(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):wr(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new Cr;const u=r<<2|a>>4;if(i.push(u),c!==64){const p=a<<4&240|c>>2;if(i.push(p),h!==64){const _=c<<6&192|h;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Cr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qi=function(n){const e=Zi(n);return mn.encodeByteArray(e,!0)},rt=function(n){return Qi(n).replace(/\./g,"")},zt=function(n){try{return mn.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Sr(n){return Xi(void 0,n)}function Xi(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Tr(t)||(n[t]=Xi(n[t],e[t]));return n}function Tr(n){return n!=="__proto__"}/**
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
 */function Nr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ar=()=>Nr().__FIREBASE_DEFAULTS__,Rr=()=>{if(typeof process>"u"||typeof ti>"u")return;const n=ti.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},kr=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&zt(n[1]);return e&&JSON.parse(e)},es=()=>{try{return Ar()||Rr()||kr()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},xr=n=>{var e,t;return(t=(e=es())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Dr=n=>{const e=xr(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},ts=()=>{var n;return(n=es())===null||n===void 0?void 0:n.config};/**
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
 */class qe{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Pr(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[rt(JSON.stringify(t)),rt(JSON.stringify(o)),""].join(".")}/**
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
 */function Lr(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ns(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Lr())}function Or(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mr(){return Ji.NODE_ADMIN===!0}function Fr(){try{return typeof indexedDB=="object"}catch{return!1}}function Ur(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const Br="FirebaseError";class $e extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Br,Object.setPrototypeOf(this,$e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,is.prototype.create)}}class is{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Wr(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new $e(s,a,i)}}function Wr(n,e){return n.replace(Hr,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Hr=/\{\$([^}]+)}/g;/**
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
 */function Fe(n){return JSON.parse(n)}function x(n){return JSON.stringify(n)}/**
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
 */const ss=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Fe(zt(r[0])||""),t=Fe(zt(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Kr=function(n){const e=ss(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Gr=function(n){const e=ss(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function G(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function oe(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function ni(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ot(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Jt(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(ii(r)&&ii(o)){if(!Jt(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function ii(n){return n!==null&&typeof n=="object"}/**
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
 */function Vr(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class jr{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)i[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const u=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(u<<1|u>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),d=1518500249):(c=r^o^a,d=1859775393):h<60?(c=r&o|a&(r|o),d=2400959708):(c=r^o^a,d=3395469782);const u=(s<<5|s>>>27)+c+l+d+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=u}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function yn(n,e){return`${n} failed: ${e} argument `}/**
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
 */const Yr=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,f(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},It=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Se(n){return n&&n._delegate?n._delegate:n}class Ue{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ne="[DEFAULT]";/**
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
 */class qr{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new qe;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zr(e))try{this.getOrInitializeService({instanceIdentifier:ne})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ne){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ne){return this.instances.has(e)}getOptions(e=ne){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:$r(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ne){return this.component?this.component.multipleInstances?e:ne:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $r(n){return n===ne?void 0:n}function zr(n){return n.instantiationMode==="EAGER"}/**
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
 */class Jr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new qr(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var w;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(w||(w={}));const Zr={debug:w.DEBUG,verbose:w.VERBOSE,info:w.INFO,warn:w.WARN,error:w.ERROR,silent:w.SILENT},Qr=w.INFO,Xr={[w.DEBUG]:"log",[w.VERBOSE]:"log",[w.INFO]:"info",[w.WARN]:"warn",[w.ERROR]:"error"},eo=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Xr[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rs{constructor(e){this.name=e,this._logLevel=Qr,this._logHandler=eo,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in w))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,w.DEBUG,...e),this._logHandler(this,w.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,w.VERBOSE,...e),this._logHandler(this,w.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,w.INFO,...e),this._logHandler(this,w.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,w.WARN,...e),this._logHandler(this,w.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,w.ERROR,...e),this._logHandler(this,w.ERROR,...e)}}const to=(n,e)=>e.some(t=>n instanceof t);let si,ri;function no(){return si||(si=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function io(){return ri||(ri=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const os=new WeakMap,Zt=new WeakMap,as=new WeakMap,Ut=new WeakMap,vn=new WeakMap;function so(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Z(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&os.set(t,n)}).catch(()=>{}),vn.set(e,n),e}function ro(n){if(Zt.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Zt.set(n,e)}let Qt={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Zt.get(n);if(e==="objectStoreNames")return n.objectStoreNames||as.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Z(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function oo(n){Qt=n(Qt)}function ao(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Bt(this),e,...t);return as.set(i,e.sort?e.sort():[e]),Z(i)}:io().includes(n)?function(...e){return n.apply(Bt(this),e),Z(os.get(this))}:function(...e){return Z(n.apply(Bt(this),e))}}function lo(n){return typeof n=="function"?ao(n):(n instanceof IDBTransaction&&ro(n),to(n,no())?new Proxy(n,Qt):n)}function Z(n){if(n instanceof IDBRequest)return so(n);if(Ut.has(n))return Ut.get(n);const e=lo(n);return e!==n&&(Ut.set(n,e),vn.set(e,n)),e}const Bt=n=>vn.get(n);function co(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=Z(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Z(o.result),l.oldVersion,l.newVersion,Z(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const ho=["get","getKey","getAll","getAllKeys","count"],uo=["put","add","delete","clear"],Wt=new Map;function oi(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Wt.get(e))return Wt.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=uo.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||ho.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return Wt.set(e,r),r}oo(n=>({...n,get:(e,t,i)=>oi(e,t)||n.get(e,t,i),has:(e,t)=>!!oi(e,t)||n.has(e,t)}));/**
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
 */class fo{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(po(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function po(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xt="@firebase/app",ai="0.10.13";/**
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
 */const q=new rs("@firebase/app"),_o="@firebase/app-compat",go="@firebase/analytics-compat",mo="@firebase/analytics",yo="@firebase/app-check-compat",vo="@firebase/app-check",Eo="@firebase/auth",Io="@firebase/auth-compat",bo="@firebase/database",wo="@firebase/data-connect",Co="@firebase/database-compat",So="@firebase/functions",To="@firebase/functions-compat",No="@firebase/installations",Ao="@firebase/installations-compat",Ro="@firebase/messaging",ko="@firebase/messaging-compat",xo="@firebase/performance",Do="@firebase/performance-compat",Po="@firebase/remote-config",Lo="@firebase/remote-config-compat",Oo="@firebase/storage",Mo="@firebase/storage-compat",Fo="@firebase/firestore",Uo="@firebase/vertexai-preview",Bo="@firebase/firestore-compat",Wo="firebase",Ho="10.14.1";/**
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
 */const en="[DEFAULT]",Ko={[Xt]:"fire-core",[_o]:"fire-core-compat",[mo]:"fire-analytics",[go]:"fire-analytics-compat",[vo]:"fire-app-check",[yo]:"fire-app-check-compat",[Eo]:"fire-auth",[Io]:"fire-auth-compat",[bo]:"fire-rtdb",[wo]:"fire-data-connect",[Co]:"fire-rtdb-compat",[So]:"fire-fn",[To]:"fire-fn-compat",[No]:"fire-iid",[Ao]:"fire-iid-compat",[Ro]:"fire-fcm",[ko]:"fire-fcm-compat",[xo]:"fire-perf",[Do]:"fire-perf-compat",[Po]:"fire-rc",[Lo]:"fire-rc-compat",[Oo]:"fire-gcs",[Mo]:"fire-gcs-compat",[Fo]:"fire-fst",[Bo]:"fire-fst-compat",[Uo]:"fire-vertex","fire-js":"fire-js",[Wo]:"fire-js-all"};/**
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
 */const at=new Map,Go=new Map,tn=new Map;function li(n,e){try{n.container.addComponent(e)}catch(t){q.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function lt(n){const e=n.name;if(tn.has(e))return q.debug(`There were multiple attempts to register component ${e}.`),!1;tn.set(e,n);for(const t of at.values())li(t,n);for(const t of Go.values())li(t,n);return!0}function Vo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const jo={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Q=new is("app","Firebase",jo);/**
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
 */class Yo{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ue("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Q.create("app-deleted",{appName:this._name})}}/**
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
 */const qo=Ho;function ls(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:en,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Q.create("bad-app-name",{appName:String(s)});if(t||(t=ts()),!t)throw Q.create("no-options");const r=at.get(s);if(r){if(Jt(t,r.options)&&Jt(i,r.config))return r;throw Q.create("duplicate-app",{appName:s})}const o=new Jr(s);for(const l of tn.values())o.addComponent(l);const a=new Yo(t,i,o);return at.set(s,a),a}function $o(n=en){const e=at.get(n);if(!e&&n===en&&ts())return ls();if(!e)throw Q.create("no-app",{appName:n});return e}function ge(n,e,t){var i;let s=(i=Ko[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),q.warn(a.join(" "));return}lt(new Ue(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const zo="firebase-heartbeat-database",Jo=1,Be="firebase-heartbeat-store";let Ht=null;function cs(){return Ht||(Ht=co(zo,Jo,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Be)}catch(t){console.warn(t)}}}}).catch(n=>{throw Q.create("idb-open",{originalErrorMessage:n.message})})),Ht}async function Zo(n){try{const t=(await cs()).transaction(Be),i=await t.objectStore(Be).get(hs(n));return await t.done,i}catch(e){if(e instanceof $e)q.warn(e.message);else{const t=Q.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});q.warn(t.message)}}}async function ci(n,e){try{const i=(await cs()).transaction(Be,"readwrite");await i.objectStore(Be).put(e,hs(n)),await i.done}catch(t){if(t instanceof $e)q.warn(t.message);else{const i=Q.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});q.warn(i.message)}}}function hs(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Qo=1024,Xo=30*24*60*60*1e3;class ea{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new na(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=hi();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Xo}),this._storage.overwrite(this._heartbeatsCache))}catch(i){q.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=hi(),{heartbeatsToSend:i,unsentEntries:s}=ta(this._heartbeatsCache.heartbeats),r=rt(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return q.warn(t),""}}}function hi(){return new Date().toISOString().substring(0,10)}function ta(n,e=Qo){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),di(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),di(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class na{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fr()?Ur().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Zo(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ci(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ci(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function di(n){return rt(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function ia(n){lt(new Ue("platform-logger",e=>new fo(e),"PRIVATE")),lt(new Ue("heartbeat",e=>new ea(e),"PRIVATE")),ge(Xt,ai,n),ge(Xt,ai,"esm2017"),ge("fire-js","")}ia("");var sa="firebase",ra="10.14.1";/**
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
 */ge(sa,ra,"app");var ui={};const fi="@firebase/database",pi="1.0.8";/**
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
 */let ds="";function oa(n){ds=n}/**
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
 */class aa{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),x(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Fe(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class la{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return G(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const us=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new aa(e)}}catch{}return new la},se=us("localStorage"),ca=us("sessionStorage");/**
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
 */const me=new rs("@firebase/database"),fs=function(){let n=1;return function(){return n++}}(),ps=function(n){const e=Yr(n),t=new jr;t.update(e);const i=t.digest();return mn.encodeByteArray(i)},ze=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=ze.apply(null,i):typeof i=="object"?e+=x(i):e+=i,e+=" "}return e};let De=null,_i=!0;const ha=function(n,e){f(!0,"Can't turn on custom loggers persistently."),me.logLevel=w.VERBOSE,De=me.log.bind(me)},P=function(...n){if(_i===!0&&(_i=!1,De===null&&ca.get("logging_enabled")===!0&&ha()),De){const e=ze.apply(null,n);De(e)}},Je=function(n){return function(...e){P(n,...e)}},nn=function(...n){const e="FIREBASE INTERNAL ERROR: "+ze(...n);me.error(e)},$=function(...n){const e=`FIREBASE FATAL ERROR: ${ze(...n)}`;throw me.error(e),new Error(e)},M=function(...n){const e="FIREBASE WARNING: "+ze(...n);me.warn(e)},da=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&M("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},En=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},ua=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ee="[MIN_NAME]",ae="[MAX_NAME]",Te=function(n,e){if(n===e)return 0;if(n===Ee||e===ae)return-1;if(e===Ee||n===ae)return 1;{const t=gi(n),i=gi(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},fa=function(n,e){return n===e?0:n<e?-1:1},Ae=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+x(e))},In=function(n){if(typeof n!="object"||n===null)return x(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=x(e[i]),t+=":",t+=In(n[e[i]]);return t+="}",t},_s=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function F(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const gs=function(n){f(!En(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const d=c.join("");let h="";for(l=0;l<64;l+=8){let u=parseInt(d.substr(l,8),2).toString(16);u.length===1&&(u="0"+u),h=h+u}return h.toLowerCase()},pa=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},_a=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ga(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const ma=new RegExp("^-?(0*)\\d{1,10}$"),ya=-2147483648,va=2147483647,gi=function(n){if(ma.test(n)){const e=Number(n);if(e>=ya&&e<=va)return e}return null},Ne=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw M("Exception was thrown by user callback.",t),e},Math.floor(0))}},Ea=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Pe=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Ia{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){M(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class ba{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(P("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',M(e)}}class it{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}it.OWNER="owner";/**
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
 */const bn="5",ms="v",ys="s",vs="r",Es="f",Is=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,bs="ls",ws="p",sn="ac",Cs="websocket",Ss="long_polling";/**
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
 */class Ts{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=se.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&se.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function wa(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Ns(n,e,t){f(typeof e=="string","typeof type must == string"),f(typeof t=="object","typeof params must == object");let i;if(e===Cs)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Ss)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);wa(n)&&(t.ns=n.namespace);const s=[];return F(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class Ca{constructor(){this.counters_={}}incrementCounter(e,t=1){G(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Sr(this.counters_)}}/**
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
 */const Kt={},Gt={};function wn(n){const e=n.toString();return Kt[e]||(Kt[e]=new Ca),Kt[e]}function Sa(n,e){const t=n.toString();return Gt[t]||(Gt[t]=e()),Gt[t]}/**
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
 */class Ta{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Ne(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const mi="start",Na="close",Aa="pLPCommand",Ra="pRTLPCB",As="id",Rs="pw",ks="ser",ka="cb",xa="seg",Da="ts",Pa="d",La="dframe",xs=1870,Ds=30,Oa=xs-Ds,Ma=25e3,Fa=3e4;class _e{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Je(e),this.stats_=wn(t),this.urlFn=l=>(this.appCheckToken&&(l[sn]=this.appCheckToken),Ns(t,Ss,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Ta(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Fa)),ua(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Cn((...r)=>{const[o,a,l,c,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===mi)this.id=a,this.password=l;else if(o===Na)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[mi]="t",i[ks]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[ka]=this.scriptTagHolder.uniqueCallbackIdentifier),i[ms]=bn,this.transportSessionId&&(i[ys]=this.transportSessionId),this.lastSessionId&&(i[bs]=this.lastSessionId),this.applicationId&&(i[ws]=this.applicationId),this.appCheckToken&&(i[sn]=this.appCheckToken),typeof location<"u"&&location.hostname&&Is.test(location.hostname)&&(i[vs]=Es);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_e.forceAllow_=!0}static forceDisallow(){_e.forceDisallow_=!0}static isAvailable(){return _e.forceAllow_?!0:!_e.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!pa()&&!_a()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=x(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Qi(t),s=_s(i,Oa);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[La]="t",i[As]=e,i[Rs]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=x(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Cn{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=fs(),window[Aa+this.uniqueCallbackIdentifier]=e,window[Ra+this.uniqueCallbackIdentifier]=t,this.myIFrame=Cn.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){P("frame writing exception"),a.stack&&P(a.stack),P(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||P("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[As]=this.myID,e[Rs]=this.myPW,e[ks]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ds+i.length<=xs;){const o=this.pendingSegs.shift();i=i+"&"+xa+s+"="+o.seg+"&"+Da+s+"="+o.ts+"&"+Pa+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Ma)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{P("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const Ua=16384,Ba=45e3;let ct=null;typeof MozWebSocket<"u"?ct=MozWebSocket:typeof WebSocket<"u"&&(ct=WebSocket);class B{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Je(this.connId),this.stats_=wn(t),this.connURL=B.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[ms]=bn,typeof location<"u"&&location.hostname&&Is.test(location.hostname)&&(o[vs]=Es),t&&(o[ys]=t),i&&(o[bs]=i),s&&(o[sn]=s),r&&(o[ws]=r),Ns(e,Cs,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,se.set("previous_websocket_failure",!0);try{let i;Mr(),this.mySock=new ct(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){B.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&ct!==null&&!B.forceDisallow_}static previouslyFailed(){return se.isInMemoryStorage||se.get("previous_websocket_failure")===!0}markConnectionHealthy(){se.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Fe(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(f(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=x(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=_s(t,Ua);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ba))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}B.responsesRequiredToBeHealthy=2;B.healthyTimeout=3e4;/**
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
 */class We{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[_e,B]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=B&&B.isAvailable();let i=t&&!B.previouslyFailed();if(e.webSocketOnly&&(t||M("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[B];else{const s=this.transports_=[];for(const r of We.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);We.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}We.globalTransportInitialized_=!1;/**
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
 */const Wa=6e4,Ha=5e3,Ka=10*1024,Ga=100*1024,Vt="t",yi="d",Va="s",vi="r",ja="e",Ei="o",Ii="a",bi="n",wi="p",Ya="h";class qa{constructor(e,t,i,s,r,o,a,l,c,d){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Je("c:"+this.id+":"),this.transportManager_=new We(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Pe(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ga?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ka?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Vt in e){const t=e[Vt];t===Ii?this.upgradeIfSecondaryHealthy_():t===vi?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Ei&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ae("t",e),i=Ae("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:wi,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ii,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:bi,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ae("t",e),i=Ae("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ae(Vt,e);if(yi in e){const i=e[yi];if(t===Ya){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===bi){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Va?this.onConnectionShutdown_(i):t===vi?this.onReset_(i):t===ja?nn("Server Error: "+i):t===Ei?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):nn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),bn!==i&&M("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Pe(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Wa))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Pe(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ha))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:wi,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(se.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ps{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Ls{constructor(e){this.allowedEvents_=e,this.listeners_={},f(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){f(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class ht extends Ls{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ns()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ht}getInitialEvent(e){return f(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Ci=32,Si=768;class b{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function E(){return new b("")}function m(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ee(n){return n.pieces_.length-n.pieceNum_}function C(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new b(n.pieces_,e)}function Os(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function $a(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Ms(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Fs(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new b(e,0)}function N(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof b)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new b(t,0)}function v(n){return n.pieceNum_>=n.pieces_.length}function L(n,e){const t=m(n),i=m(e);if(t===null)return e;if(t===i)return L(C(n),C(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Sn(n,e){if(ee(n)!==ee(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function W(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(ee(n)>ee(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class za{constructor(e,t){this.errorPrefix_=t,this.parts_=Ms(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=It(this.parts_[i]);Us(this)}}function Ja(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=It(e),Us(n)}function Za(n){const e=n.parts_.pop();n.byteLength_-=It(e),n.parts_.length>0&&(n.byteLength_-=1)}function Us(n){if(n.byteLength_>Si)throw new Error(n.errorPrefix_+"has a key path longer than "+Si+" bytes ("+n.byteLength_+").");if(n.parts_.length>Ci)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ci+") or object contains a cycle "+ie(n))}function ie(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Tn extends Ls{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Tn}getInitialEvent(e){return f(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Re=1e3,Qa=60*5*1e3,Ti=30*1e3,Xa=1.3,el=3e4,tl="server_kill",Ni=3;class Y extends Ps{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Y.nextPersistentConnectionId_++,this.log_=Je("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Re,this.maxReconnectDelay_=Qa,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Tn.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ht.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(x(r)),f(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new qe,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),f(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Y.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&G(e,"w")){const i=oe(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();M(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Gr(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ti)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Kr(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+x(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):nn("Unrecognized action received from server: "+x(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){f(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Re,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Re,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>el&&(this.reconnectDelay_=Re),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Xa)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Y.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){f(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,u]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?P("getToken() completed but was canceled"):(P("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=u&&u.token,a=new qa(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,p=>{M(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(tl)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&M(h),l())}}}interrupt(e){P("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){P("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ni(this.interruptReasons_)&&(this.reconnectDelay_=Re,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>In(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new b(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){P("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ni&&(this.reconnectDelay_=Ti,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){P("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ni&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+ds.replace(/\./g,"-")]=1,ns()?e["framework.cordova"]=1:Or()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ht.getInstance().currentlyOnline();return ni(this.interruptReasons_)&&e}}Y.nextPersistentConnectionId_=0;Y.nextConnectionId_=0;/**
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
 */class y{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new y(e,t)}}/**
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
 */class bt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new y(Ee,e),s=new y(Ee,t);return this.compare(i,s)!==0}minPost(){return y.MIN}}/**
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
 */let tt;class Bs extends bt{static get __EMPTY_NODE(){return tt}static set __EMPTY_NODE(e){tt=e}compare(e,t){return Te(e.name,t.name)}isDefinedOn(e){throw Ce("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return y.MIN}maxPost(){return new y(ae,tt)}makePost(e,t){return f(typeof e=="string","KeyIndex indexValue must always be a string."),new y(e,tt)}toString(){return".key"}}const ye=new Bs;/**
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
 */class nt{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class R{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??R.RED,this.left=s??O.EMPTY_NODE,this.right=r??O.EMPTY_NODE}copy(e,t,i,s,r){return new R(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return O.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return O.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,R.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,R.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}R.RED=!0;R.BLACK=!1;class nl{copy(e,t,i,s,r){return this}insert(e,t,i){return new R(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class O{constructor(e,t=O.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new O(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,R.BLACK,null,null))}remove(e){return new O(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,R.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new nt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new nt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new nt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new nt(this.root_,null,this.comparator_,!0,e)}}O.EMPTY_NODE=new nl;/**
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
 */function il(n,e){return Te(n.name,e.name)}function Nn(n,e){return Te(n,e)}/**
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
 */let rn;function sl(n){rn=n}const Ws=function(n){return typeof n=="number"?"number:"+gs(n):"string:"+n},Hs=function(n){if(n.isLeafNode()){const e=n.val();f(typeof e=="string"||typeof e=="number"||typeof e=="object"&&G(e,".sv"),"Priority must be a string or number.")}else f(n===rn||n.isEmpty(),"priority of unexpected type.");f(n===rn||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ai;class A{constructor(e,t=A.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,f(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Hs(this.priorityNode_)}static set __childrenNodeConstructor(e){Ai=e}static get __childrenNodeConstructor(){return Ai}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new A(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:A.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return v(e)?this:m(e)===".priority"?this.priorityNode_:A.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:A.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=m(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(f(i!==".priority"||ee(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,A.__childrenNodeConstructor.EMPTY_NODE.updateChild(C(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ws(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=gs(this.value_):e+=this.value_,this.lazyHash_=ps(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===A.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof A.__childrenNodeConstructor?-1:(f(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=A.VALUE_TYPE_ORDER.indexOf(t),r=A.VALUE_TYPE_ORDER.indexOf(i);return f(s>=0,"Unknown leaf type: "+t),f(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}A.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Ks,Gs;function rl(n){Ks=n}function ol(n){Gs=n}class al extends bt{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Te(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return y.MIN}maxPost(){return new y(ae,new A("[PRIORITY-POST]",Gs))}makePost(e,t){const i=Ks(e);return new y(t,new A("[PRIORITY-POST]",i))}toString(){return".priority"}}const T=new al;/**
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
 */const ll=Math.log(2);class cl{constructor(e){const t=r=>parseInt(Math.log(r)/ll,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const dt=function(n,e,t,i){n.sort(e);const s=function(l,c){const d=c-l;let h,u;if(d===0)return null;if(d===1)return h=n[l],u=t?t(h):h,new R(u,h.node,R.BLACK,null,null);{const p=parseInt(d/2,10)+l,_=s(l,p),I=s(p+1,c);return h=n[p],u=t?t(h):h,new R(u,h.node,R.BLACK,_,I)}},r=function(l){let c=null,d=null,h=n.length;const u=function(_,I){const D=h-_,fe=h;h-=_;const et=s(D+1,fe),Ft=n[D],br=t?t(Ft):Ft;p(new R(br,Ft.node,I,null,et))},p=function(_){c?(c.left=_,c=_):(d=_,c=_)};for(let _=0;_<l.count;++_){const I=l.nextBitIsOne(),D=Math.pow(2,l.count-(_+1));I?u(D,R.BLACK):(u(D,R.BLACK),u(D,R.RED))}return d},o=new cl(n.length),a=r(o);return new O(i||e,a)};/**
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
 */let jt;const pe={};class j{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return f(pe&&T,"ChildrenNode.ts has not been loaded"),jt=jt||new j({".priority":pe},{".priority":T}),jt}get(e){const t=oe(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof O?t:null}hasIndex(e){return G(this.indexSet_,e.toString())}addIndex(e,t){f(e!==ye,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(y.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=dt(i,e.getCompare()):a=pe;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new j(d,c)}addToIndexes(e,t){const i=ot(this.indexes_,(s,r)=>{const o=oe(this.indexSet_,r);if(f(o,"Missing index implementation for "+r),s===pe)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(y.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),dt(a,o.getCompare())}else return pe;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new y(e.name,a))),l.insert(e,e.node)}});return new j(i,this.indexSet_)}removeFromIndexes(e,t){const i=ot(this.indexes_,s=>{if(s===pe)return s;{const r=t.get(e.name);return r?s.remove(new y(e.name,r)):s}});return new j(i,this.indexSet_)}}/**
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
 */let ke;class g{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Hs(this.priorityNode_),this.children_.isEmpty()&&f(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ke||(ke=new g(new O(Nn),null,j.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ke}updatePriority(e){return this.children_.isEmpty()?this:new g(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ke:t}}getChild(e){const t=m(e);return t===null?this:this.getImmediateChild(t).getChild(C(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(f(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new y(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?ke:this.priorityNode_;return new g(s,o,r)}}updateChild(e,t){const i=m(e);if(i===null)return t;{f(m(e)!==".priority"||ee(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(C(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(T,(o,a)=>{t[o]=a.val(e),i++,r&&g.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ws(this.getPriority().val())+":"),this.forEachChild(T,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":ps(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new y(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new y(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new y(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,y.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,y.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ze?-1:0}withIndex(e){if(e===ye||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new g(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ye||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(T),s=t.getIterator(T);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ye?null:this.indexMap_.get(e.toString())}}g.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class hl extends g{constructor(){super(new O(Nn),g.EMPTY_NODE,j.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return g.EMPTY_NODE}isEmpty(){return!1}}const Ze=new hl;Object.defineProperties(y,{MIN:{value:new y(Ee,g.EMPTY_NODE)},MAX:{value:new y(ae,Ze)}});Bs.__EMPTY_NODE=g.EMPTY_NODE;A.__childrenNodeConstructor=g;sl(Ze);ol(Ze);/**
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
 */const dl=!0;function k(n,e=null){if(n===null)return g.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),f(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new A(t,k(e))}if(!(n instanceof Array)&&dl){const t=[];let i=!1;if(F(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=k(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new y(o,l)))}}),t.length===0)return g.EMPTY_NODE;const r=dt(t,il,o=>o.name,Nn);if(i){const o=dt(t,T.getCompare());return new g(r,k(e),new j({".priority":o},{".priority":T}))}else return new g(r,k(e),j.Default)}else{let t=g.EMPTY_NODE;return F(n,(i,s)=>{if(G(n,i)&&i.substring(0,1)!=="."){const r=k(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(k(e))}}rl(k);/**
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
 */class ul extends bt{constructor(e){super(),this.indexPath_=e,f(!v(e)&&m(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Te(e.name,t.name):r}makePost(e,t){const i=k(e),s=g.EMPTY_NODE.updateChild(this.indexPath_,i);return new y(t,s)}maxPost(){const e=g.EMPTY_NODE.updateChild(this.indexPath_,Ze);return new y(ae,e)}toString(){return Ms(this.indexPath_,0).join("/")}}/**
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
 */class fl extends bt{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Te(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return y.MIN}maxPost(){return y.MAX}makePost(e,t){const i=k(e);return new y(t,i)}toString(){return".value"}}const pl=new fl;/**
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
 */function Vs(n){return{type:"value",snapshotNode:n}}function Ie(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function He(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ke(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function _l(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class An{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){f(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(He(t,a)):f(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ie(t,i)):o.trackChildChange(Ke(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(T,(s,r)=>{t.hasChild(s)||i.trackChildChange(He(s,r))}),t.isLeafNode()||t.forEachChild(T,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Ke(s,r,o))}else i.trackChildChange(Ie(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?g.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ge{constructor(e){this.indexedFilter_=new An(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ge.getStartPost_(e),this.endPost_=Ge.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new y(t,i))||(i=g.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=g.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(g.EMPTY_NODE);const r=this;return t.forEachChild(T,(o,a)=>{r.matches(new y(o,a))||(s=s.updateImmediateChild(o,g.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class gl{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Ge(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new y(t,i))||(i=g.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=g.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=g.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(g.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,g.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(u,p)=>h(p,u)}else o=this.index_.getCompare();const a=e;f(a.numChildren()===this.limit_,"");const l=new y(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let u=s.getChildAfterChild(this.index_,c,this.reverse_);for(;u!=null&&(u.name===t||a.hasChild(u.name));)u=s.getChildAfterChild(this.index_,u,this.reverse_);const p=u==null?1:o(u,l);if(d&&!i.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Ke(t,i,h)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(He(t,h));const I=a.updateImmediateChild(t,g.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(r!=null&&r.trackChildChange(Ie(u.name,u.node)),I.updateImmediateChild(u.name,u.node)):I}}else return i.isEmpty()?e:d&&o(c,l)>=0?(r!=null&&(r.trackChildChange(He(c.name,c.node)),r.trackChildChange(Ie(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,g.EMPTY_NODE)):e}}/**
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
 */class Rn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=T}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return f(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return f(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ee}hasEnd(){return this.endSet_}getIndexEndValue(){return f(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return f(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ae}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return f(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===T}copy(){const e=new Rn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ml(n){return n.loadsAllData()?new An(n.getIndex()):n.hasLimit()?new gl(n):new Ge(n)}function Ri(n){const e={};if(n.isDefault())return e;let t;if(n.index_===T?t="$priority":n.index_===pl?t="$value":n.index_===ye?t="$key":(f(n.index_ instanceof ul,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=x(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=x(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+x(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=x(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+x(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function ki(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==T&&(e.i=n.index_.toString()),e}/**
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
 */class ut extends Ps{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Je("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(f(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ut.getListenId_(e,i),a={};this.listens_[o]=a;const l=Ri(e._queryParams);this.restRequest_(r+".json",l,(c,d)=>{let h=d;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),oe(this.listens_,o)===a){let u;c?c===401?u="permission_denied":u="rest_error:"+c:u="ok",s(u,null)}})}unlisten(e,t){const i=ut.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Ri(e._queryParams),i=e._path.toString(),s=new qe;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Vr(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Fe(a.responseText)}catch{M("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&M("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class yl{constructor(){this.rootNode_=g.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function ft(){return{value:null,children:new Map}}function js(n,e,t){if(v(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=m(e);n.children.has(i)||n.children.set(i,ft());const s=n.children.get(i);e=C(e),js(s,e,t)}}function on(n,e,t){n.value!==null?t(e,n.value):vl(n,(i,s)=>{const r=new b(e.toString()+"/"+i);on(s,r,t)})}function vl(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class El{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&F(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
 */const xi=10*1e3,Il=30*1e3,bl=5*60*1e3;class wl{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new El(e);const i=xi+(Il-xi)*Math.random();Pe(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;F(e,(s,r)=>{r>0&&G(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Pe(this.reportStats_.bind(this),Math.floor(Math.random()*2*bl))}}/**
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
 */var H;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(H||(H={}));function Ys(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function kn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function xn(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class pt{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=H.ACK_USER_WRITE,this.source=Ys()}operationForChild(e){if(v(this.path)){if(this.affectedTree.value!=null)return f(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new b(e));return new pt(E(),t,this.revert)}}else return f(m(this.path)===e,"operationForChild called for unrelated child."),new pt(C(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ve{constructor(e,t){this.source=e,this.path=t,this.type=H.LISTEN_COMPLETE}operationForChild(e){return v(this.path)?new Ve(this.source,E()):new Ve(this.source,C(this.path))}}/**
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
 */class le{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=H.OVERWRITE}operationForChild(e){return v(this.path)?new le(this.source,E(),this.snap.getImmediateChild(e)):new le(this.source,C(this.path),this.snap)}}/**
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
 */class je{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=H.MERGE}operationForChild(e){if(v(this.path)){const t=this.children.subtree(new b(e));return t.isEmpty()?null:t.value?new le(this.source,E(),t.value):new je(this.source,E(),t)}else return f(m(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new je(this.source,C(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ce{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(v(e))return this.isFullyInitialized()&&!this.filtered_;const t=m(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Cl{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Sl(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(_l(o.childName,o.snapshotNode))}),xe(n,s,"child_removed",e,i,t),xe(n,s,"child_added",e,i,t),xe(n,s,"child_moved",r,i,t),xe(n,s,"child_changed",e,i,t),xe(n,s,"value",e,i,t),s}function xe(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>Nl(n,a,l)),o.forEach(a=>{const l=Tl(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Tl(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Nl(n,e,t){if(e.childName==null||t.childName==null)throw Ce("Should only compare child_ events.");const i=new y(e.childName,e.snapshotNode),s=new y(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function wt(n,e){return{eventCache:n,serverCache:e}}function Le(n,e,t,i){return wt(new ce(e,t,i),n.serverCache)}function qs(n,e,t,i){return wt(n.eventCache,new ce(e,t,i))}function an(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function he(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Yt;const Al=()=>(Yt||(Yt=new O(fa)),Yt);class S{constructor(e,t=Al()){this.value=e,this.children=t}static fromObject(e){let t=new S(null);return F(e,(i,s)=>{t=t.set(new b(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:E(),value:this.value};if(v(e))return null;{const i=m(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(C(e),t);return r!=null?{path:N(new b(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(v(e))return this;{const t=m(e),i=this.children.get(t);return i!==null?i.subtree(C(e)):new S(null)}}set(e,t){if(v(e))return new S(t,this.children);{const i=m(e),r=(this.children.get(i)||new S(null)).set(C(e),t),o=this.children.insert(i,r);return new S(this.value,o)}}remove(e){if(v(e))return this.children.isEmpty()?new S(null):new S(null,this.children);{const t=m(e),i=this.children.get(t);if(i){const s=i.remove(C(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new S(null):new S(this.value,r)}else return this}}get(e){if(v(e))return this.value;{const t=m(e),i=this.children.get(t);return i?i.get(C(e)):null}}setTree(e,t){if(v(e))return t;{const i=m(e),r=(this.children.get(i)||new S(null)).setTree(C(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new S(this.value,o)}}fold(e){return this.fold_(E(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(N(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,E(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(v(e))return null;{const r=m(e),o=this.children.get(r);return o?o.findOnPath_(C(e),N(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,E(),t)}foreachOnPath_(e,t,i){if(v(e))return this;{this.value&&i(t,this.value);const s=m(e),r=this.children.get(s);return r?r.foreachOnPath_(C(e),N(t,s),i):new S(null)}}foreach(e){this.foreach_(E(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(N(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class K{constructor(e){this.writeTree_=e}static empty(){return new K(new S(null))}}function Oe(n,e,t){if(v(e))return new K(new S(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=L(s,e);return r=r.updateChild(o,t),new K(n.writeTree_.set(s,r))}else{const s=new S(t),r=n.writeTree_.setTree(e,s);return new K(r)}}}function Di(n,e,t){let i=n;return F(t,(s,r)=>{i=Oe(i,N(e,s),r)}),i}function Pi(n,e){if(v(e))return K.empty();{const t=n.writeTree_.setTree(e,new S(null));return new K(t)}}function ln(n,e){return de(n,e)!=null}function de(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(L(t.path,e)):null}function Li(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(T,(i,s)=>{e.push(new y(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new y(i,s.value))}),e}function X(n,e){if(v(e))return n;{const t=de(n,e);return t!=null?new K(new S(t)):new K(n.writeTree_.subtree(e))}}function cn(n){return n.writeTree_.isEmpty()}function be(n,e){return $s(E(),n.writeTree_,e)}function $s(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(f(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=$s(N(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(N(n,".priority"),i)),t}}/**
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
 */function Dn(n,e){return Qs(e,n)}function Rl(n,e,t,i,s){f(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Oe(n.visibleWrites,e,t)),n.lastWriteId=i}function kl(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function xl(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);f(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Dl(a,i.path)?s=!1:W(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Pl(n),!0;if(i.snap)n.visibleWrites=Pi(n.visibleWrites,i.path);else{const a=i.children;F(a,l=>{n.visibleWrites=Pi(n.visibleWrites,N(i.path,l))})}return!0}else return!1}function Dl(n,e){if(n.snap)return W(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&W(N(n.path,t),e))return!0;return!1}function Pl(n){n.visibleWrites=zs(n.allWrites,Ll,E()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Ll(n){return n.visible}function zs(n,e,t){let i=K.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)W(t,o)?(a=L(t,o),i=Oe(i,a,r.snap)):W(o,t)&&(a=L(o,t),i=Oe(i,E(),r.snap.getChild(a)));else if(r.children){if(W(t,o))a=L(t,o),i=Di(i,a,r.children);else if(W(o,t))if(a=L(o,t),v(a))i=Di(i,E(),r.children);else{const l=oe(r.children,m(a));if(l){const c=l.getChild(C(a));i=Oe(i,E(),c)}}}else throw Ce("WriteRecord should have .snap or .children")}}return i}function Js(n,e,t,i,s){if(!i&&!s){const r=de(n.visibleWrites,e);if(r!=null)return r;{const o=X(n.visibleWrites,e);if(cn(o))return t;if(t==null&&!ln(o,E()))return null;{const a=t||g.EMPTY_NODE;return be(o,a)}}}else{const r=X(n.visibleWrites,e);if(!s&&cn(r))return t;if(!s&&t==null&&!ln(r,E()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(W(c.path,e)||W(e,c.path))},a=zs(n.allWrites,o,e),l=t||g.EMPTY_NODE;return be(a,l)}}}function Ol(n,e,t){let i=g.EMPTY_NODE;const s=de(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(T,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=X(n.visibleWrites,e);return t.forEachChild(T,(o,a)=>{const l=be(X(r,new b(o)),a);i=i.updateImmediateChild(o,l)}),Li(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=X(n.visibleWrites,e);return Li(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Ml(n,e,t,i,s){f(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=N(e,t);if(ln(n.visibleWrites,r))return null;{const o=X(n.visibleWrites,r);return cn(o)?s.getChild(t):be(o,s.getChild(t))}}function Fl(n,e,t,i){const s=N(e,t),r=de(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=X(n.visibleWrites,s);return be(o,i.getNode().getImmediateChild(t))}else return null}function Ul(n,e){return de(n.visibleWrites,e)}function Bl(n,e,t,i,s,r,o){let a;const l=X(n.visibleWrites,e),c=de(l,E());if(c!=null)a=c;else if(t!=null)a=be(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],h=o.getCompare(),u=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let p=u.getNext();for(;p&&d.length<s;)h(p,i)!==0&&d.push(p),p=u.getNext();return d}else return[]}function Wl(){return{visibleWrites:K.empty(),allWrites:[],lastWriteId:-1}}function _t(n,e,t,i){return Js(n.writeTree,n.treePath,e,t,i)}function Pn(n,e){return Ol(n.writeTree,n.treePath,e)}function Oi(n,e,t,i){return Ml(n.writeTree,n.treePath,e,t,i)}function gt(n,e){return Ul(n.writeTree,N(n.treePath,e))}function Hl(n,e,t,i,s,r){return Bl(n.writeTree,n.treePath,e,t,i,s,r)}function Ln(n,e,t){return Fl(n.writeTree,n.treePath,e,t)}function Zs(n,e){return Qs(N(n.treePath,e),n.writeTree)}function Qs(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Kl{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;f(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),f(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Ke(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,He(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Ie(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Ke(i,e.snapshotNode,s.oldSnap));else throw Ce("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Gl{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Xs=new Gl;class On{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new ce(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ln(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:he(this.viewCache_),r=Hl(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function Vl(n){return{filter:n}}function jl(n,e){f(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),f(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Yl(n,e,t,i,s){const r=new Kl;let o,a;if(t.type===H.OVERWRITE){const c=t;c.source.fromUser?o=hn(n,e,c.path,c.snap,i,s,r):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!v(c.path),o=mt(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===H.MERGE){const c=t;c.source.fromUser?o=$l(n,e,c.path,c.children,i,s,r):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=dn(n,e,c.path,c.children,i,s,a,r))}else if(t.type===H.ACK_USER_WRITE){const c=t;c.revert?o=Zl(n,e,c.path,i,s,r):o=zl(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===H.LISTEN_COMPLETE)o=Jl(n,e,t.path,i,r);else throw Ce("Unknown operation type: "+t.type);const l=r.getChanges();return ql(e,o,l),{viewCache:o,changes:l}}function ql(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=an(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Vs(an(e)))}}function er(n,e,t,i,s,r){const o=e.eventCache;if(gt(i,t)!=null)return e;{let a,l;if(v(t))if(f(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=he(e),d=c instanceof g?c:g.EMPTY_NODE,h=Pn(i,d);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=_t(i,he(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=m(t);if(c===".priority"){f(ee(t)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const h=Oi(i,t,d,l);h!=null?a=n.filter.updatePriority(d,h):a=o.getNode()}else{const d=C(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const u=Oi(i,t,o.getNode(),l);u!=null?h=o.getNode().getImmediateChild(c).updateChild(d,u):h=o.getNode().getImmediateChild(c)}else h=Ln(i,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,d,s,r):a=o.getNode()}}return Le(e,a,o.isFullyInitialized()||v(t),n.filter.filtersNodes())}}function mt(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const d=o?n.filter:n.filter.getIndexedFilter();if(v(t))c=d.updateFullNode(l.getNode(),i,null);else if(d.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(t,i);c=d.updateFullNode(l.getNode(),p,null)}else{const p=m(t);if(!l.isCompleteForPath(t)&&ee(t)>1)return e;const _=C(t),D=l.getNode().getImmediateChild(p).updateChild(_,i);p===".priority"?c=d.updatePriority(l.getNode(),D):c=d.updateChild(l.getNode(),p,D,_,Xs,null)}const h=qs(e,c,l.isFullyInitialized()||v(t),d.filtersNodes()),u=new On(s,h,r);return er(n,h,t,s,u,a)}function hn(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const d=new On(s,e,r);if(v(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Le(e,c,!0,n.filter.filtersNodes());else{const h=m(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=Le(e,c,a.isFullyInitialized(),a.isFiltered());else{const u=C(t),p=a.getNode().getImmediateChild(h);let _;if(v(u))_=i;else{const I=d.getCompleteChild(h);I!=null?Os(u)===".priority"&&I.getChild(Fs(u)).isEmpty()?_=I:_=I.updateChild(u,i):_=g.EMPTY_NODE}if(p.equals(_))l=e;else{const I=n.filter.updateChild(a.getNode(),h,_,u,d,o);l=Le(e,I,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Mi(n,e){return n.eventCache.isCompleteForChild(e)}function $l(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const d=N(t,l);Mi(e,m(d))&&(a=hn(n,a,d,c,s,r,o))}),i.foreach((l,c)=>{const d=N(t,l);Mi(e,m(d))||(a=hn(n,a,d,c,s,r,o))}),a}function Fi(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function dn(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;v(t)?c=i:c=new S(null).setTree(t,i);const d=e.serverCache.getNode();return c.children.inorderTraversal((h,u)=>{if(d.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),_=Fi(n,p,u);l=mt(n,l,new b(h),_,s,r,o,a)}}),c.children.inorderTraversal((h,u)=>{const p=!e.serverCache.isCompleteForChild(h)&&u.value===null;if(!d.hasChild(h)&&!p){const _=e.serverCache.getNode().getImmediateChild(h),I=Fi(n,_,u);l=mt(n,l,new b(h),I,s,r,o,a)}}),l}function zl(n,e,t,i,s,r,o){if(gt(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(v(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return mt(n,e,t,l.getNode().getChild(t),s,r,a,o);if(v(t)){let c=new S(null);return l.getNode().forEachChild(ye,(d,h)=>{c=c.set(new b(d),h)}),dn(n,e,t,c,s,r,a,o)}else return e}else{let c=new S(null);return i.foreach((d,h)=>{const u=N(t,d);l.isCompleteForPath(u)&&(c=c.set(d,l.getNode().getChild(u)))}),dn(n,e,t,c,s,r,a,o)}}function Jl(n,e,t,i,s){const r=e.serverCache,o=qs(e,r.getNode(),r.isFullyInitialized()||v(t),r.isFiltered());return er(n,o,t,i,Xs,s)}function Zl(n,e,t,i,s,r){let o;if(gt(i,t)!=null)return e;{const a=new On(i,e,s),l=e.eventCache.getNode();let c;if(v(t)||m(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=_t(i,he(e));else{const h=e.serverCache.getNode();f(h instanceof g,"serverChildren would be complete if leaf node"),d=Pn(i,h)}d=d,c=n.filter.updateFullNode(l,d,r)}else{const d=m(t);let h=Ln(i,d,e.serverCache);h==null&&e.serverCache.isCompleteForChild(d)&&(h=l.getImmediateChild(d)),h!=null?c=n.filter.updateChild(l,d,h,C(t),a,r):e.eventCache.getNode().hasChild(d)?c=n.filter.updateChild(l,d,g.EMPTY_NODE,C(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=_t(i,he(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||gt(i,E())!=null,Le(e,c,o,n.filter.filtersNodes())}}/**
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
 */class Ql{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new An(i.getIndex()),r=ml(i);this.processor_=Vl(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(g.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(g.EMPTY_NODE,a.getNode(),null),d=new ce(l,o.isFullyInitialized(),s.filtersNodes()),h=new ce(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=wt(h,d),this.eventGenerator_=new Cl(this.query_)}get query(){return this.query_}}function Xl(n){return n.viewCache_.serverCache.getNode()}function ec(n,e){const t=he(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!v(e)&&!t.getImmediateChild(m(e)).isEmpty())?t.getChild(e):null}function Ui(n){return n.eventRegistrations_.length===0}function tc(n,e){n.eventRegistrations_.push(e)}function Bi(n,e,t){const i=[];if(t){f(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Wi(n,e,t,i){e.type===H.MERGE&&e.source.queryId!==null&&(f(he(n.viewCache_),"We should always have a full cache before handling merges"),f(an(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=Yl(n.processor_,s,e,t,i);return jl(n.processor_,r.viewCache),f(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,tr(n,r.changes,r.viewCache.eventCache.getNode(),null)}function nc(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(T,(r,o)=>{i.push(Ie(r,o))}),t.isFullyInitialized()&&i.push(Vs(t.getNode())),tr(n,i,t.getNode(),e)}function tr(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return Sl(n.eventGenerator_,e,t,s)}/**
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
 */let yt;class ic{constructor(){this.views=new Map}}function sc(n){f(!yt,"__referenceConstructor has already been defined"),yt=n}function rc(){return f(yt,"Reference.ts has not been loaded"),yt}function oc(n){return n.views.size===0}function Mn(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return f(r!=null,"SyncTree gave us an op for an invalid query."),Wi(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Wi(o,e,t,i));return r}}function ac(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=_t(t,s?i:null),l=!1;a?l=!0:i instanceof g?(a=Pn(t,i),l=!1):(a=g.EMPTY_NODE,l=!1);const c=wt(new ce(a,l,!1),new ce(i,s,!1));return new Ql(e,c)}return o}function lc(n,e,t,i,s,r){const o=ac(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),tc(o,t),nc(o,t)}function cc(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=te(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(Bi(c,t,i)),Ui(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(Bi(l,t,i)),Ui(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!te(n)&&r.push(new(rc())(e._repo,e._path)),{removed:r,events:o}}function nr(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ve(n,e){let t=null;for(const i of n.views.values())t=t||ec(i,e);return t}function ir(n,e){if(e._queryParams.loadsAllData())return Ct(n);{const i=e._queryIdentifier;return n.views.get(i)}}function sr(n,e){return ir(n,e)!=null}function te(n){return Ct(n)!=null}function Ct(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let vt;function hc(n){f(!vt,"__referenceConstructor has already been defined"),vt=n}function dc(){return f(vt,"Reference.ts has not been loaded"),vt}let uc=1;class Hi{constructor(e){this.listenProvider_=e,this.syncPointTree_=new S(null),this.pendingWriteTree_=Wl(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Fn(n,e,t,i,s){return Rl(n.pendingWriteTree_,e,t,i,s),s?Qe(n,new le(Ys(),e,t)):[]}function re(n,e,t=!1){const i=kl(n.pendingWriteTree_,e);if(xl(n.pendingWriteTree_,e)){let r=new S(null);return i.snap!=null?r=r.set(E(),!0):F(i.children,o=>{r=r.set(new b(o),!0)}),Qe(n,new pt(i.path,r,t))}else return[]}function St(n,e,t){return Qe(n,new le(kn(),e,t))}function fc(n,e,t){const i=S.fromObject(t);return Qe(n,new je(kn(),e,i))}function pc(n,e){return Qe(n,new Ve(kn(),e))}function _c(n,e,t){const i=Un(n,t);if(i){const s=Bn(i),r=s.path,o=s.queryId,a=L(r,e),l=new Ve(xn(o),a);return Wn(n,r,l)}else return[]}function un(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||sr(o,e))){const l=cc(o,e,t,i);oc(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const d=c.findIndex(u=>u._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(u,p)=>te(p));if(d&&!h){const u=n.syncPointTree_.subtree(r);if(!u.isEmpty()){const p=yc(u);for(let _=0;_<p.length;++_){const I=p[_],D=I.query,fe=ar(n,I);n.listenProvider_.startListening(Me(D),Et(n,D),fe.hashFn,fe.onComplete)}}}!h&&c.length>0&&!i&&(d?n.listenProvider_.stopListening(Me(e),null):c.forEach(u=>{const p=n.queryToTagMap.get(Nt(u));n.listenProvider_.stopListening(Me(u),p)}))}vc(n,c)}return a}function gc(n,e,t,i){const s=Un(n,i);if(s!=null){const r=Bn(s),o=r.path,a=r.queryId,l=L(o,e),c=new le(xn(a),l,t);return Wn(n,o,c)}else return[]}function mc(n,e,t,i){const s=Un(n,i);if(s){const r=Bn(s),o=r.path,a=r.queryId,l=L(o,e),c=S.fromObject(t),d=new je(xn(a),l,c);return Wn(n,o,d)}else return[]}function Ki(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(u,p)=>{const _=L(u,s);r=r||ve(p,_),o=o||te(p)});let a=n.syncPointTree_.get(s);a?(o=o||te(a),r=r||ve(a,E())):(a=new ic,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=g.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((p,_)=>{const I=ve(_,E());I&&(r=r.updateImmediateChild(p,I))}));const c=sr(a,e);if(!c&&!e._queryParams.loadsAllData()){const u=Nt(e);f(!n.queryToTagMap.has(u),"View does not exist, but we have a tag");const p=Ec();n.queryToTagMap.set(u,p),n.tagToQueryMap.set(p,u)}const d=Dn(n.pendingWriteTree_,s);let h=lc(a,e,t,d,r,l);if(!c&&!o&&!i){const u=ir(a,e);h=h.concat(Ic(n,e,u))}return h}function Tt(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=L(o,e),c=ve(a,l);if(c)return c});return Js(s,e,r,t,!0)}function Qe(n,e){return rr(e,n.syncPointTree_,null,Dn(n.pendingWriteTree_,E()))}function rr(n,e,t,i){if(v(n.path))return or(n,e,t,i);{const s=e.get(E());t==null&&s!=null&&(t=ve(s,E()));let r=[];const o=m(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,d=Zs(i,o);r=r.concat(rr(a,l,c,d))}return s&&(r=r.concat(Mn(s,n,i,t))),r}}function or(n,e,t,i){const s=e.get(E());t==null&&s!=null&&(t=ve(s,E()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Zs(i,o),d=n.operationForChild(o);d&&(r=r.concat(or(d,a,l,c)))}),s&&(r=r.concat(Mn(s,n,i,t))),r}function ar(n,e){const t=e.query,i=Et(n,t);return{hashFn:()=>(Xl(e)||g.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?_c(n,t._path,i):pc(n,t._path);{const r=ga(s,t);return un(n,t,null,r)}}}}function Et(n,e){const t=Nt(e);return n.queryToTagMap.get(t)}function Nt(n){return n._path.toString()+"$"+n._queryIdentifier}function Un(n,e){return n.tagToQueryMap.get(e)}function Bn(n){const e=n.indexOf("$");return f(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new b(n.substr(0,e))}}function Wn(n,e,t){const i=n.syncPointTree_.get(e);f(i,"Missing sync point for query tag that we're tracking");const s=Dn(n.pendingWriteTree_,e);return Mn(i,t,s,null)}function yc(n){return n.fold((e,t,i)=>{if(t&&te(t))return[Ct(t)];{let s=[];return t&&(s=nr(t)),F(i,(r,o)=>{s=s.concat(o)}),s}})}function Me(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(dc())(n._repo,n._path):n}function vc(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=Nt(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function Ec(){return uc++}function Ic(n,e,t){const i=e._path,s=Et(n,e),r=ar(n,t),o=n.listenProvider_.startListening(Me(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)f(!te(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,h)=>{if(!v(c)&&d&&te(d))return[Ct(d).query];{let u=[];return d&&(u=u.concat(nr(d).map(p=>p.query))),F(h,(p,_)=>{u=u.concat(_)}),u}});for(let c=0;c<l.length;++c){const d=l[c];n.listenProvider_.stopListening(Me(d),Et(n,d))}}return o}/**
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
 */class Hn{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Hn(t)}node(){return this.node_}}class Kn{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=N(this.path_,e);return new Kn(this.syncTree_,t)}node(){return Tt(this.syncTree_,this.path_)}}const bc=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Gi=function(n,e,t){if(!n||typeof n!="object")return n;if(f(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return wc(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Cc(n[".sv"],e);f(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},wc=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:f(!1,"Unexpected server value: "+n)}},Cc=function(n,e,t){n.hasOwnProperty("increment")||f(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&f(!1,"Unexpected increment value: "+i);const s=e.node();if(f(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Sc=function(n,e,t,i){return Vn(e,new Kn(t,n),i)},Gn=function(n,e,t){return Vn(n,new Hn(e),t)};function Vn(n,e,t){const i=n.getPriority().val(),s=Gi(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Gi(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new A(a,k(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new A(s))),o.forEachChild(T,(a,l)=>{const c=Vn(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class jn{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function At(n,e){let t=e instanceof b?e:new b(e),i=n,s=m(t);for(;s!==null;){const r=oe(i.node.children,s)||{children:{},childCount:0};i=new jn(s,i,r),t=C(t),s=m(t)}return i}function ue(n){return n.node.value}function Yn(n,e){n.node.value=e,fn(n)}function lr(n){return n.node.childCount>0}function Tc(n){return ue(n)===void 0&&!lr(n)}function Rt(n,e){F(n.node.children,(t,i)=>{e(new jn(t,n,i))})}function cr(n,e,t,i){t&&e(n),Rt(n,s=>{cr(s,e,!0)})}function Nc(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Xe(n){return new b(n.parent===null?n.name:Xe(n.parent)+"/"+n.name)}function fn(n){n.parent!==null&&Ac(n.parent,n.name,n)}function Ac(n,e,t){const i=Tc(t),s=G(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,fn(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,fn(n))}/**
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
 */const Rc=/[\[\].#$\/\u0000-\u001F\u007F]/,kc=/[\[\].#$\u0000-\u001F\u007F]/,qt=10*1024*1024,hr=function(n){return typeof n=="string"&&n.length!==0&&!Rc.test(n)},dr=function(n){return typeof n=="string"&&n.length!==0&&!kc.test(n)},xc=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),dr(n)},Dc=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!En(n)||n&&typeof n=="object"&&G(n,".sv")},Pc=function(n,e,t,i){kt(yn(n,"value"),e,t)},kt=function(n,e,t){const i=t instanceof b?new za(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ie(i));if(typeof e=="function")throw new Error(n+"contains a function "+ie(i)+" with contents = "+e.toString());if(En(e))throw new Error(n+"contains "+e.toString()+" "+ie(i));if(typeof e=="string"&&e.length>qt/3&&It(e)>qt)throw new Error(n+"contains a string greater than "+qt+" utf8 bytes "+ie(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(F(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!hr(o)))throw new Error(n+" contains an invalid key ("+o+") "+ie(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ja(i,o),kt(n,a,i),Za(i)}),s&&r)throw new Error(n+' contains ".value" child '+ie(i)+" in addition to actual children.")}},ur=function(n,e,t,i){if(!dr(t))throw new Error(yn(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Lc=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ur(n,e,t)},fr=function(n,e){if(m(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Oc=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!hr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!xc(t))throw new Error(yn(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Mc{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function qn(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Sn(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function pr(n,e,t){qn(n,t),_r(n,i=>Sn(i,e))}function V(n,e,t){qn(n,t),_r(n,i=>W(i,e)||W(e,i))}function _r(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(Fc(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Fc(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();De&&P("event: "+t.toString()),Ne(i)}}}/**
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
 */const Uc="repo_interrupt",Bc=25;class Wc{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Mc,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ft(),this.transactionQueueTree_=new jn,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Hc(n,e,t){if(n.stats_=wn(n.repoInfo_),n.forceRestClient_||Ea())n.server_=new ut(n.repoInfo_,(i,s,r,o)=>{Vi(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ji(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{x(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Y(n.repoInfo_,e,(i,s,r,o)=>{Vi(n,i,s,r,o)},i=>{ji(n,i)},i=>{Gc(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Sa(n.repoInfo_,()=>new wl(n.stats_,n.server_)),n.infoData_=new yl,n.infoSyncTree_=new Hi({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=St(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),$n(n,"connected",!1),n.serverSyncTree_=new Hi({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);V(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function Kc(n){const t=n.infoData_.getNode(new b(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function xt(n){return bc({timestamp:Kc(n)})}function Vi(n,e,t,i,s){n.dataUpdateCount++;const r=new b(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=ot(t,c=>k(c));o=mc(n.serverSyncTree_,r,l,s)}else{const l=k(t);o=gc(n.serverSyncTree_,r,l,s)}else if(i){const l=ot(t,c=>k(c));o=fc(n.serverSyncTree_,r,l)}else{const l=k(t);o=St(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Lt(n,r)),V(n.eventQueue_,a,o)}function ji(n,e){$n(n,"connected",e),e===!1&&jc(n)}function Gc(n,e){F(e,(t,i)=>{$n(n,t,i)})}function $n(n,e,t){const i=new b("/.info/"+e),s=k(t);n.infoData_.updateSnapshot(i,s);const r=St(n.infoSyncTree_,i,s);V(n.eventQueue_,i,r)}function zn(n){return n.nextWriteId_++}function Vc(n,e,t,i,s){Dt(n,"set",{path:e.toString(),value:t,priority:i});const r=xt(n),o=k(t,i),a=Tt(n.serverSyncTree_,e),l=Gn(o,a,r),c=zn(n),d=Fn(n.serverSyncTree_,e,l,c,!0);qn(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(u,p)=>{const _=u==="ok";_||M("set at "+e+" failed: "+u);const I=re(n.serverSyncTree_,c,!_);V(n.eventQueue_,e,I),$c(n,s,u,p)});const h=vr(n,e);Lt(n,h),V(n.eventQueue_,h,[])}function jc(n){Dt(n,"onDisconnectEvents");const e=xt(n),t=ft();on(n.onDisconnect_,E(),(s,r)=>{const o=Sc(s,r,n.serverSyncTree_,e);js(t,s,o)});let i=[];on(t,E(),(s,r)=>{i=i.concat(St(n.serverSyncTree_,s,r));const o=vr(n,s);Lt(n,o)}),n.onDisconnect_=ft(),V(n.eventQueue_,E(),i)}function Yc(n,e,t){let i;m(e._path)===".info"?i=Ki(n.infoSyncTree_,e,t):i=Ki(n.serverSyncTree_,e,t),pr(n.eventQueue_,e._path,i)}function Yi(n,e,t){let i;m(e._path)===".info"?i=un(n.infoSyncTree_,e,t):i=un(n.serverSyncTree_,e,t),pr(n.eventQueue_,e._path,i)}function qc(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Uc)}function Dt(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),P(t,...e)}function $c(n,e,t,i){e&&Ne(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function zc(n,e,t,i,s,r){Dt(n,"transaction on "+e);const o={path:e,update:t,onComplete:i,status:null,order:fs(),applyLocally:r,retryCount:0,unwatcher:s,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Jn(n,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{kt("transaction failed: Data returned ",l,o.path),o.status=0;const c=At(n.transactionQueueTree_,e),d=ue(c)||[];d.push(o),Yn(c,d);let h;typeof l=="object"&&l!==null&&G(l,".priority")?(h=oe(l,".priority"),f(Dc(h),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):h=(Tt(n.serverSyncTree_,e)||g.EMPTY_NODE).getPriority().val();const u=xt(n),p=k(l,h),_=Gn(p,a,u);o.currentOutputSnapshotRaw=p,o.currentOutputSnapshotResolved=_,o.currentWriteId=zn(n);const I=Fn(n.serverSyncTree_,e,_,o.currentWriteId,o.applyLocally);V(n.eventQueue_,e,I),Pt(n,n.transactionQueueTree_)}}function Jn(n,e,t){return Tt(n.serverSyncTree_,e,t)||g.EMPTY_NODE}function Pt(n,e=n.transactionQueueTree_){if(e||Ot(n,e),ue(e)){const t=mr(n,e);f(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&Jc(n,Xe(e),t)}else lr(e)&&Rt(e,t=>{Pt(n,t)})}function Jc(n,e,t){const i=t.map(c=>c.currentWriteId),s=Jn(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const d=t[c];f(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const h=L(e,d.path);r=r.updateChild(h,d.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{Dt(n,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const h=[];for(let u=0;u<t.length;u++)t[u].status=2,d=d.concat(re(n.serverSyncTree_,t[u].currentWriteId)),t[u].onComplete&&h.push(()=>t[u].onComplete(null,!0,t[u].currentOutputSnapshotResolved)),t[u].unwatcher();Ot(n,At(n.transactionQueueTree_,e)),Pt(n,n.transactionQueueTree_),V(n.eventQueue_,e,d);for(let u=0;u<h.length;u++)Ne(h[u])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{M("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}Lt(n,e)}},o)}function Lt(n,e){const t=gr(n,e),i=Xe(t),s=mr(n,t);return Zc(n,s,i),i}function Zc(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=L(t,l.path);let d=!1,h;if(f(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,h=l.abortReason,s=s.concat(re(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Bc)d=!0,h="maxretry",s=s.concat(re(n.serverSyncTree_,l.currentWriteId,!0));else{const u=Jn(n,l.path,o);l.currentInputSnapshot=u;const p=e[a].update(u.val());if(p!==void 0){kt("transaction failed: Data returned ",p,l.path);let _=k(p);typeof p=="object"&&p!=null&&G(p,".priority")||(_=_.updatePriority(u.getPriority()));const D=l.currentWriteId,fe=xt(n),et=Gn(_,u,fe);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=et,l.currentWriteId=zn(n),o.splice(o.indexOf(D),1),s=s.concat(Fn(n.serverSyncTree_,l.path,et,l.currentWriteId,l.applyLocally)),s=s.concat(re(n.serverSyncTree_,D,!0))}else d=!0,h="nodata",s=s.concat(re(n.serverSyncTree_,l.currentWriteId,!0))}V(n.eventQueue_,t,s),s=[],d&&(e[a].status=2,function(u){setTimeout(u,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}Ot(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Ne(i[a]);Pt(n,n.transactionQueueTree_)}function gr(n,e){let t,i=n.transactionQueueTree_;for(t=m(e);t!==null&&ue(i)===void 0;)i=At(i,t),e=C(e),t=m(e);return i}function mr(n,e){const t=[];return yr(n,e,t),t.sort((i,s)=>i.order-s.order),t}function yr(n,e,t){const i=ue(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Rt(e,s=>{yr(n,s,t)})}function Ot(n,e){const t=ue(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Yn(e,t.length>0?t:void 0)}Rt(e,i=>{Ot(n,i)})}function vr(n,e){const t=Xe(gr(n,e)),i=At(n.transactionQueueTree_,e);return Nc(i,s=>{$t(n,s)}),$t(n,i),cr(i,s=>{$t(n,s)}),t}function $t(n,e){const t=ue(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(f(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(f(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(re(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Yn(e,void 0):t.length=r+1,V(n.eventQueue_,Xe(e),s);for(let o=0;o<i.length;o++)Ne(i[o])}}/**
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
 */function Qc(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Xc(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):M(`Invalid query segment '${t}' in query '${n}'`)}return e}const qi=function(n,e){const t=eh(n),i=t.namespace;t.domain==="firebase.com"&&$(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&$("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||da();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Ts(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new b(t.pathString)}},eh=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let d=n.indexOf("/");d===-1&&(d=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(d,h)),d<h&&(s=Qc(n.substring(d,h)));const u=Xc(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),t=e.substring(_+1),r=i}"ns"in u&&(r=u.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class th{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+x(this.snapshot.exportVal())}}class nh{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class ih{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return f(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Zn{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return v(this._path)?null:Os(this._path)}get ref(){return new J(this._repo,this._path)}get _queryIdentifier(){const e=ki(this._queryParams),t=In(e);return t==="{}"?"default":t}get _queryObject(){return ki(this._queryParams)}isEqual(e){if(e=Se(e),!(e instanceof Zn))return!1;const t=this._repo===e._repo,i=Sn(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+$a(this._path)}}class J extends Zn{constructor(e,t){super(e,t,new Rn,!1)}get parent(){const e=Fs(this._path);return e===null?null:new J(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ye{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new b(e),i=pn(this.ref,e);return new Ye(this._node.getChild(t),i,T)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Ye(s,pn(this.ref,i),T)))}hasChild(e){const t=new b(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Qn(n,e){return n=Se(n),n._checkNotDeleted("ref"),e!==void 0?pn(n._root,e):n._root}function pn(n,e){return n=Se(n),m(n._path)===null?Lc("child","path",e):ur("child","path",e),new J(n._repo,N(n._path,e))}function Er(n,e){n=Se(n),fr("set",n._path),Pc("set",e,n._path);const t=new qe;return Vc(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class Xn{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new th("value",this,new Ye(e.snapshotNode,new J(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new nh(this,e,t):null}matches(e){return e instanceof Xn?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function sh(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=t,c=(d,h)=>{Yi(n._repo,n,a),l(d,h)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new ih(t,r||void 0),a=new Xn(o);return Yc(n._repo,n,a),()=>Yi(n._repo,n,a)}function Mt(n,e,t,i){return sh(n,"value",e,t,i)}sc(J);hc(J);/**
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
 */const rh="FIREBASE_DATABASE_EMULATOR_HOST",_n={};let oh=!1;function ah(n,e,t,i){n.repoInfo_=new Ts(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function lh(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||$("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),P("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=qi(r,s),a=o.repoInfo,l;typeof process<"u"&&ui&&(l=ui[rh]),l?(r=`http://${l}?ns=${a.namespace}`,o=qi(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new ba(n.name,n.options,e);Oc("Invalid Firebase Database URL",o),v(o.path)||$("Database URL must point to the root of a Firebase Database (not including a child path).");const d=hh(a,n,c,new Ia(n.name,t));return new dh(d,n)}function ch(n,e){const t=_n[e];(!t||t[n.key]!==n)&&$(`Database ${e}(${n.repoInfo_}) has already been deleted.`),qc(n),delete t[n.key]}function hh(n,e,t,i){let s=_n[e.name];s||(s={},_n[e.name]=s);let r=s[n.toURLString()];return r&&$("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Wc(n,oh,t,i),s[n.toURLString()]=r,r}class dh{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Hc(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new J(this._repo,E())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ch(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&$("Cannot call "+e+" on a deleted database.")}}function uh(n=$o(),e){const t=Vo(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Dr("database");i&&fh(t,...i)}return t}function fh(n,e,t,i={}){n=Se(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&$("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&$('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new it(it.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Pr(i.mockUserToken,n.app.options.projectId);r=new it(o)}ah(s,e,t,r)}/**
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
 */function ph(n){oa(qo),lt(new Ue("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return lh(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),ge(fi,pi,n),ge(fi,pi,"esm2017")}/**
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
 */class _h{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function gh(n,e,t){var i;if(n=Se(n),fr("Reference.transaction",n._path),n.key===".length"||n.key===".keys")throw"Reference.transaction failed: "+n.key+" is a read-only object.";const s=(i=void 0)!==null&&i!==void 0?i:!0,r=new qe,o=(l,c,d)=>{let h=null;l?r.reject(l):(h=new Ye(d,new J(n._repo,n._path),T),r.resolve(new _h(c,h)))},a=Mt(n,()=>{});return zc(n._repo,n._path,e,o,a,s),r.promise}Y.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Y.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};ph();const mh={statistical:{units:["stat record"],links:["https://file.garden/aZ1i9e6aIVfqSsYT/DocScanner%20Jun%2023%2C%202026%201-15%20PM%20(1).pdf"],_type:"subject",_rank:99,vids:[""]},"python record":{links:["https://file.garden/abrK4_rpWxJegn7w/ppds%20record.pdf"],_type:"subject",units:["python record"],_rank:99,vids:[""]},_rank:99,"ai record":{units:["ai record"],links:["https://file.garden/abrK4_rpWxJegn7w/AAI%20Record%20SEM-2.PDF"],_type:"subject",_rank:99,vids:[""]}},yh={v2:!0},gn={records:mh,"1ST YEAR NOTESES":{"BCA - A":{Telugu:{links:["https://file.garden/aZm7Ksv4vGLII5p_/General%20Telugu.pdf","https://files.catbox.moe/tv7dw0.pdf","https://file.garden/abrK4_rpWxJegn7w/%E0%B0%AF%E0%B1%82%E0%B0%A8%E0%B0%BF%E0%B0%9F%E0%B1%8D%202.pdf","https://file.garden/abrK4_rpWxJegn7w/Document%20(3).pdf","https://file.garden/abrK4_rpWxJegn7w/Document(1)%20(2).pdf","https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf"],_type:"subject",units:["Syllabus by AKNU","unit - 1 (  గజేంద్ర మోక్షం )","unit - 2 ( సీతా )","unit - 3 ( అతడు అడవిని జయించాడు )","Unit - 5 ( జానపద కళలు )","MID-1 ( Question paper)"],_rank:1,vids:["","","","","",""]},_rank:5,ENGLISH:{_rno:3,links:["https://ae8c6a7a-7f2b-4b7d-9030-bec209dfe11c-00-3aqpa04lxcxwh.janeway.replit.dev/api/files/5/view","https://file.garden/abrK4_rpWxJegn7w/EnglishUnit2.pdf"],_type:"subject",units:["UNIT - 1 ON SAYING PLEASE","UNIT - 2 HALF A RUPEE WORK"],vids:["https://file.garden/aZ1i9e6aIVfqSsYT/english.pdf",""],_rank:3},HINDI:{vids:["","","",""],_rank:2,_rno:2,links:["https://file.garden/aZm7Ksv4vGLII5p_/General%20Hindi%20sem1.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/h.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/hi.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/lethin.pdf"],_type:"subject",units:["SYLLABUS BY AKNU","MODEL PAPER","UNIT 4 TRANSLATIONS ENG - HIN","LETTERS"]}},"BCA - B":{Telugu:{vids:["","","","","",""],_rank:1,_type:"subject",links:["https://file.garden/aZm7Ksv4vGLII5p_/General%20Telugu.pdf","https://files.catbox.moe/tv7dw0.pdf","https://file.garden/abrK4_rpWxJegn7w/%E0%B0%AF%E0%B1%82%E0%B0%A8%E0%B0%BF%E0%B0%9F%E0%B1%8D%202.pdf","https://file.garden/abrK4_rpWxJegn7w/Document%20(3).pdf","https://file.garden/abrK4_rpWxJegn7w/Document(1)%20(2).pdf","https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf"],units:["Syllabus by AKNU","unit - 1 (  గజేంద్ర మోక్షం )","unit - 2 ( సీతా )","unit - 3 ( అతడు అడవిని జయించాడు )","Unit - 5 ( జానపద కళలు )","MID-1 ( Question paper)"]},_rank:6,ENGLISH:{_rno:3,units:["UNIT - 1 ON SAYING PLEASE","UNIT - 2 HALF A RUPEE WORK"],_type:"subject",links:["https://ae8c6a7a-7f2b-4b7d-9030-bec209dfe11c-00-3aqpa04lxcxwh.janeway.replit.dev/api/files/5/view","https://file.garden/abrK4_rpWxJegn7w/EnglishUnit2.pdf"],_rank:3,vids:["https://file.garden/aZ1i9e6aIVfqSsYT/english.pdf",""]},HINDI:{_rank:2,vids:["","","",""],units:["SYLLABUS BY AKNU","MODEL PAPER","UNIT 4 TRANSLATIONS ENG - HIN","LETTERS"],_type:"subject",links:["https://file.garden/aZm7Ksv4vGLII5p_/General%20Hindi%20sem1.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/h.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/hi.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/lethin.pdf"],_rno:2}},MATHS:{ENGLISH:{_rno:3,vids:["https://file.garden/aZ1i9e6aIVfqSsYT/english.pdf",""],_type:"subject",links:["https://ae8c6a7a-7f2b-4b7d-9030-bec209dfe11c-00-3aqpa04lxcxwh.janeway.replit.dev/api/files/5/view","https://file.garden/abrK4_rpWxJegn7w/EnglishUnit2.pdf"],units:["UNIT - 1 ON SAYING PLEASE","UNIT - 2 HALF A RUPEE WORK"],_rank:3},HINDI:{_rank:2,units:["SYLLABUS BY AKNU","MODEL PAPER","UNIT 4 TRANSLATIONS ENG - HIN","LETTERS"],links:["https://file.garden/aZm7Ksv4vGLII5p_/General%20Hindi%20sem1.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/h.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/hi.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/lethin.pdf"],vids:["","","",""],_type:"subject",_rno:2},_rank:11,Telugu:{_rank:1,units:["Syllabus by AKNU","unit - 1 (  గజేంద్ర మోక్షం )","unit - 2 ( సీతా )","unit - 3 ( అతడు అడవిని జయించాడు )","Unit - 5 ( జానపద కళలు )","MID-1 ( Question paper)"],vids:["","","","","",""],_type:"subject",links:["https://file.garden/aZm7Ksv4vGLII5p_/General%20Telugu.pdf","https://files.catbox.moe/tv7dw0.pdf","https://file.garden/abrK4_rpWxJegn7w/%E0%B0%AF%E0%B1%82%E0%B0%A8%E0%B0%BF%E0%B0%9F%E0%B1%8D%202.pdf","https://file.garden/abrK4_rpWxJegn7w/Document%20(3).pdf","https://file.garden/abrK4_rpWxJegn7w/Document(1)%20(2).pdf","https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf"]}},CHEMISTRY:{Telugu:{_rank:1,vids:["","","","","",""],_type:"subject",links:["https://file.garden/aZm7Ksv4vGLII5p_/General%20Telugu.pdf","https://files.catbox.moe/tv7dw0.pdf","https://file.garden/abrK4_rpWxJegn7w/%E0%B0%AF%E0%B1%82%E0%B0%A8%E0%B0%BF%E0%B0%9F%E0%B1%8D%202.pdf","https://file.garden/abrK4_rpWxJegn7w/Document%20(3).pdf","https://file.garden/abrK4_rpWxJegn7w/Document(1)%20(2).pdf","https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf"],units:["Syllabus by AKNU","unit - 1 (  గజేంద్ర మోక్షం )","unit - 2 ( సీతా )","unit - 3 ( అతడు అడవిని జయించాడు )","Unit - 5 ( జానపద కళలు )","MID-1 ( Question paper)"]},ENGLISH:{_rno:3,vids:["https://file.garden/aZ1i9e6aIVfqSsYT/english.pdf",""],links:["https://ae8c6a7a-7f2b-4b7d-9030-bec209dfe11c-00-3aqpa04lxcxwh.janeway.replit.dev/api/files/5/view","https://file.garden/abrK4_rpWxJegn7w/EnglishUnit2.pdf"],_type:"subject",units:["UNIT - 1 ON SAYING PLEASE","UNIT - 2 HALF A RUPEE WORK"],_rank:3},HINDI:{links:["https://file.garden/aZm7Ksv4vGLII5p_/General%20Hindi%20sem1.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/h.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/hi.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/lethin.pdf"],_type:"subject",_rno:2,units:["SYLLABUS BY AKNU","MODEL PAPER","UNIT 4 TRANSLATIONS ENG - HIN","LETTERS"],_rank:2,vids:["","","",""]},_rank:7},"BCA - DATA SCIENCE":{HINDI:{units:["SYLLABUS BY AKNU","MODEL PAPER","UNIT 4 TRANSLATIONS ENG - HIN","LETTERS"],links:["https://file.garden/aZm7Ksv4vGLII5p_/General%20Hindi%20sem1.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/h.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/hi.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/lethin.pdf"],_type:"subject",_rank:2,_rno:2,vids:["","","",""]},ENGLISH:{vids:["https://file.garden/aZ1i9e6aIVfqSsYT/english.pdf",""],_rank:3,links:["https://ae8c6a7a-7f2b-4b7d-9030-bec209dfe11c-00-3aqpa04lxcxwh.janeway.replit.dev/api/files/5/view","https://file.garden/abrK4_rpWxJegn7w/EnglishUnit2.pdf"],_type:"subject",units:["UNIT - 1 ON SAYING PLEASE","UNIT - 2 HALF A RUPEE WORK"],_rno:3},_rank:2,Telugu:{vids:["","","","","",""],_rank:1,units:["Syllabus by AKNU","unit - 1 (  గజేంద్ర మోక్షం )","unit - 2 ( సీతా )","unit - 3 ( అతడు అడవిని జయించాడు )","Unit - 5 ( జానపద కళలు )","MID-1 ( Question paper)"],_type:"subject",links:["https://file.garden/aZm7Ksv4vGLII5p_/General%20Telugu.pdf","https://files.catbox.moe/tv7dw0.pdf","https://file.garden/abrK4_rpWxJegn7w/%E0%B0%AF%E0%B1%82%E0%B0%A8%E0%B0%BF%E0%B0%9F%E0%B1%8D%202.pdf","https://file.garden/abrK4_rpWxJegn7w/Document%20(3).pdf","https://file.garden/abrK4_rpWxJegn7w/Document(1)%20(2).pdf","https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf"]}},"AIR - A":{"SOCIAL WORK":{_rank:7,vids:["",""],links:["https://file.garden/aZ1i9e6aIVfqSsYT/UNIT-1%20ISW(INTRODUCTION%20TO%20SOCIAL%20WORK).pdf","https://use-as-files--regulabandhas.replit.app/share/d62462107fe8473dc74008bacdf283d0"],_type:"subject",units:["UNIT - 1","uni-2"],_rno:7},"ARTIFICIAL INTELLIGENCE (AI)":{vids:["","","","",""],_rank:5,_rno:5,_type:"subject",links:["https://file.garden/aZm7Ksv4vGLII5p_/Applications%20of%20Artificial%20Intelligence%20skill-2.pdf","https://file.garden/aZx8SC2e7UEiSme3/merged_useas%20(4).pdf","https://file.garden/abrK4_rpWxJegn7w/AI%20UNIT_2%20.pdf","https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf","https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf"],units:["SYLLABUS BY AKNU","UNIT - 1","UNIT - 2","UNIT - 3","MID-1 ( Question paper)"]},_rank:3,ENGLISH:{_rank:3,units:["UNIT - 1 ON SAYING PLEASE","UNIT - 2 HALF A RUPEE WORK"],links:["https://ae8c6a7a-7f2b-4b7d-9030-bec209dfe11c-00-3aqpa04lxcxwh.janeway.replit.dev/api/files/5/view","https://file.garden/abrK4_rpWxJegn7w/EnglishUnit2.pdf"],vids:["https://file.garden/aZ1i9e6aIVfqSsYT/english.pdf",""],_type:"subject",_rno:3},HINDI:{_rank:2,units:["SYLLABUS BY AKNU","MODEL PAPER","UNIT 4 TRANSLATIONS ENG - HIN","LETTERS"],vids:["","","",""],links:["https://file.garden/aZm7Ksv4vGLII5p_/General%20Hindi%20sem1.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/h.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/hi.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/lethin.pdf"],_type:"subject",_rno:2},Telugu:{_rank:1,units:["Syllabus by AKNU","unit - 1 (  గజేంద్ర మోక్షం )","unit - 2 ( సీతా )","unit - 3 ( అతడు అడవిని జయించాడు )","Unit - 5 ( జానపద కళలు )","MID-1 ( Question paper)"],vids:["","","","","",""],links:["https://file.garden/aZm7Ksv4vGLII5p_/General%20Telugu.pdf","https://files.catbox.moe/tv7dw0.pdf","https://file.garden/abrK4_rpWxJegn7w/%E0%B0%AF%E0%B1%82%E0%B0%A8%E0%B0%BF%E0%B0%9F%E0%B1%8D%202.pdf","https://file.garden/abrK4_rpWxJegn7w/Document%20(3).pdf","https://file.garden/abrK4_rpWxJegn7w/Document(1)%20(2).pdf","https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf"],_type:"subject"}},"AIR - B":{ENGLISH:{_rank:3,vids:["https://file.garden/aZ1i9e6aIVfqSsYT/english.pdf",""],_type:"subject",links:["https://ae8c6a7a-7f2b-4b7d-9030-bec209dfe11c-00-3aqpa04lxcxwh.janeway.replit.dev/api/files/5/view","https://file.garden/abrK4_rpWxJegn7w/EnglishUnit2.pdf"],units:["UNIT - 1 ON SAYING PLEASE","UNIT - 2 HALF A RUPEE WORK"],_rno:3},"ARTIFICIAL INTELLIGENCE (AI)":{_rno:5,units:["SYLLABUS BY AKNU","UNIT - 1","UNIT - 2","UNIT - 3","MID-1 ( Question paper)"],_type:"subject",links:["https://file.garden/aZm7Ksv4vGLII5p_/Applications%20of%20Artificial%20Intelligence%20skill-2.pdf","https://file.garden/aZx8SC2e7UEiSme3/merged_useas%20(4).pdf","https://file.garden/abrK4_rpWxJegn7w/AI%20UNIT_2%20.pdf","https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf","https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf"],_rank:5,vids:["","","","",""]},"SOCIAL WORK":{links:["https://file.garden/aZ1i9e6aIVfqSsYT/UNIT-1%20ISW(INTRODUCTION%20TO%20SOCIAL%20WORK).pdf","https://use-as-files--regulabandhas.replit.app/share/d62462107fe8473dc74008bacdf283d0"],_type:"subject",_rno:7,units:["UNIT - 1","uni-2"],_rank:7,vids:["",""]},_rank:4,HINDI:{_rank:2,units:["SYLLABUS BY AKNU","MODEL PAPER","UNIT 4 TRANSLATIONS ENG - HIN","LETTERS"],vids:["","","",""],links:["https://file.garden/aZm7Ksv4vGLII5p_/General%20Hindi%20sem1.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/h.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/hi.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/lethin.pdf"],_type:"subject",_rno:2},Telugu:{vids:["","","","","",""],_rank:1,units:["Syllabus by AKNU","unit - 1 (  గజేంద్ర మోక్షం )","unit - 2 ( సీతా )","unit - 3 ( అతడు అడవిని జయించాడు )","Unit - 5 ( జానపద కళలు )","MID-1 ( Question paper)"],_type:"subject",links:["https://file.garden/aZm7Ksv4vGLII5p_/General%20Telugu.pdf","https://files.catbox.moe/tv7dw0.pdf","https://file.garden/abrK4_rpWxJegn7w/%E0%B0%AF%E0%B1%82%E0%B0%A8%E0%B0%BF%E0%B0%9F%E0%B1%8D%202.pdf","https://file.garden/abrK4_rpWxJegn7w/Document%20(3).pdf","https://file.garden/abrK4_rpWxJegn7w/Document(1)%20(2).pdf","https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf"]}},"CS - A":{Telugu:{_rank:1,vids:["","","","","",""],_type:"subject",links:["https://file.garden/aZm7Ksv4vGLII5p_/General%20Telugu.pdf","https://files.catbox.moe/tv7dw0.pdf","https://file.garden/abrK4_rpWxJegn7w/%E0%B0%AF%E0%B1%82%E0%B0%A8%E0%B0%BF%E0%B0%9F%E0%B1%8D%202.pdf","https://file.garden/abrK4_rpWxJegn7w/Document%20(3).pdf","https://file.garden/abrK4_rpWxJegn7w/Document(1)%20(2).pdf","https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf"],units:["Syllabus by AKNU","unit - 1 (  గజేంద్ర మోక్షం )","unit - 2 ( సీతా )","unit - 3 ( అతడు అడవిని జయించాడు )","Unit - 5 ( జానపద కళలు )","MID-1 ( Question paper)"]},HINDI:{_rank:2,units:["SYLLABUS BY AKNU","MODEL PAPER","UNIT 4 TRANSLATIONS ENG - HIN","LETTERS"],_type:"subject",links:["https://file.garden/aZm7Ksv4vGLII5p_/General%20Hindi%20sem1.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/h.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/hi.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/lethin.pdf"],vids:["","","",""],_rno:2},_rank:8,ENGLISH:{vids:["https://file.garden/aZ1i9e6aIVfqSsYT/english.pdf",""],_rank:3,_rno:3,links:["https://ae8c6a7a-7f2b-4b7d-9030-bec209dfe11c-00-3aqpa04lxcxwh.janeway.replit.dev/api/files/5/view","https://file.garden/abrK4_rpWxJegn7w/EnglishUnit2.pdf"],_type:"subject",units:["UNIT - 1 ON SAYING PLEASE","UNIT - 2 HALF A RUPEE WORK"]}},"BSC - DATA SCIENCE":{"SOCIAL WORK":{_rno:7,units:["UNIT - 1","uni-2","UNIT - 3"],links:["https://file.garden/aZ1i9e6aIVfqSsYT/UNIT-1%20ISW(INTRODUCTION%20TO%20SOCIAL%20WORK).pdf","https://file.garden/aZ1i9e6aIVfqSsYT/ISW_UNIT2.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/isw%20unit%203.pdf"],_type:"subject",vids:["","",""],_rank:7},ENGLISH:{_rank:3,units:["UNIT - 1 ON SAYING PLEASE","UNIT - 2 HALF A RUPEE WORK","UNIT - 3  Never-Never Nest","UNIT - 4 GRANDMOTHER ","UNIT - 5 THE SECRET OF WORK "],vids:["https://file.garden/aZ1i9e6aIVfqSsYT/english.pdf","","","",""],links:["https://ae8c6a7a-7f2b-4b7d-9030-bec209dfe11c-00-3aqpa04lxcxwh.janeway.replit.dev/api/files/5/view","https://file.garden/abrK4_rpWxJegn7w/EnglishUnit2.pdf","https://file.garden/abrK4_rpWxJegn7w/2026_07_17_UNIT-III%20ENGLISH(Sem-II).%20Never-Never%20Nest.pdf","https://file.garden/abrK4_rpWxJegn7w/2026_07_17_UNIT-%20IV%20ENGLISH%20(SEM-II)%20How%20I%20Taught%20My%20Grandmother%20to%20Read-1.pdf","https://file.garden/abrK4_rpWxJegn7w/2026_07_17_UNIT-V%20ENGLISH(Sem-II).The%20Secret%20of%20Work-1.pdf"],_type:"subject",_rno:3},_rank:1,HINDI:{_rank:2,vids:["","","",""],_type:"subject",links:["https://file.garden/aZm7Ksv4vGLII5p_/General%20Hindi%20sem1.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/h.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/hi.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/lethin.pdf"],units:["SYLLABUS BY AKNU","MODEL PAPER","UNIT 4 TRANSLATIONS ENG - HIN","LETTERS"],_rno:2},PYTHON:{_rno:6,units:["SYLLABUS BY AKNU","UNIT - 1","UNIT - 2","UNIT - 3","MID - 1 ( QUESTION PAPER )","UNIT - 4","UNIT - 5"],links:["https://file.garden/aZ1i9e6aIVfqSsYT/BSc%20-%20Data%20Science%20Major%20Syllabus%20wef%202025-26.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/python.pdf","https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf","https://file.garden/aZ1i9e6aIVfqSsYT/py.pdf","https://file.garden/abrK4_rpWxJegn7w/1775474574218.png","https://file.garden/abrK4_rpWxJegn7w/PPDS%20UNIT%204.pdf","https://file.garden/abrK4_rpWxJegn7w/PPDS%20UNIT%205.pdf"],_type:"subject",vids:["","","","","","",""],_rank:6},IKS:{vids:[],_type:"subject",links:[],units:[],_rank:99},Telugu:{vids:["https://youtu.be/m9p3O3r1q44?si=VF2Avj85HxijUS_z","","","","",""],_rank:1,links:["https://file.garden/aZm7Ksv4vGLII5p_/General%20Telugu.pdf","https://files.catbox.moe/tv7dw0.pdf","https://file.garden/abrK4_rpWxJegn7w/%E0%B0%AF%E0%B1%82%E0%B0%A8%E0%B0%BF%E0%B0%9F%E0%B1%8D%202.pdf","https://file.garden/abrK4_rpWxJegn7w/Document%20(3).pdf","https://file.garden/abrK4_rpWxJegn7w/Document(1)%20(2).pdf","https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf"],_type:"subject",units:["Syllabus by AKNU","unit - 1 (  గజేంద్ర మోక్షం )","unit - 2 ( సీతా )","unit - 3 ( అతడు అడవిని జయించాడు )","Unit - 5 ( జానపద కళలు )","MID-1 ( Question paper)"]},"STATISTICAL FOUNDATIONS (DS)":{_rno:4,_type:"subject",links:["https://file.garden/aZm7Ksv4vGLII5p_/Data%20Science%20Major.pdf","https://file.garden/abrK4_rpWxJegn7w/Full%20unit%201%20dss.pdf","https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf","https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf","https://file.garden/aZ1i9e6aIVfqSsYT/stat%20unit%205.pdf","https://file.garden/abrK4_rpWxJegn7w/split_useas%20(2).pdf"],units:["SYLLABUS BY AKNU","UNIT - 1","MID-1 ( Question paper)","UNIT - 4","unit 5","UNIT - 2"],_rank:4,vids:["","","","","",""]},"ARTIFICIAL INTELLIGENCE (AI)":{_rank:5,vids:["","","","","","",""],links:["https://file.garden/aZm7Ksv4vGLII5p_/Applications%20of%20Artificial%20Intelligence%20skill-2.pdf","https://file.garden/aZx8SC2e7UEiSme3/merged_useas%20(4).pdf","https://file.garden/abrK4_rpWxJegn7w/AI%20UNIT_2%20.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/AAI%20unit%203.pdf","https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf","https://file.garden/abrK4_rpWxJegn7w/AAI%20UNIT%204.docx","https://file.garden/abrK4_rpWxJegn7w/UNIT%205.docx"],_type:"subject",units:["SYLLABUS BY AKNU","UNIT - 1","UNIT - 2","UNIT - 3","MID-1 ( Question paper)","UNIT - 4","UNIT - 5"],_rno:5}},_rank:1,"CS - B":{_rank:9,HINDI:{_rank:2,units:["SYLLABUS BY AKNU","MODEL PAPER","UNIT 4 TRANSLATIONS ENG - HIN","LETTERS"],vids:["","","",""],links:["https://file.garden/aZm7Ksv4vGLII5p_/General%20Hindi%20sem1.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/h.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/hi.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/lethin.pdf"],_type:"subject",_rno:2},ENGLISH:{vids:["https://file.garden/aZ1i9e6aIVfqSsYT/english.pdf",""],_rank:3,units:["UNIT - 1 ON SAYING PLEASE","UNIT - 2 HALF A RUPEE WORK"],_type:"subject",links:["https://ae8c6a7a-7f2b-4b7d-9030-bec209dfe11c-00-3aqpa04lxcxwh.janeway.replit.dev/api/files/5/view","https://file.garden/abrK4_rpWxJegn7w/EnglishUnit2.pdf"],_rno:3},Telugu:{_rank:1,vids:["","","","","",""],links:["https://file.garden/aZm7Ksv4vGLII5p_/General%20Telugu.pdf","https://files.catbox.moe/tv7dw0.pdf","https://file.garden/abrK4_rpWxJegn7w/%E0%B0%AF%E0%B1%82%E0%B0%A8%E0%B0%BF%E0%B0%9F%E0%B1%8D%202.pdf","https://file.garden/abrK4_rpWxJegn7w/Document%20(3).pdf","https://file.garden/abrK4_rpWxJegn7w/Document(1)%20(2).pdf","https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf"],_type:"subject",units:["Syllabus by AKNU","unit - 1 (  గజేంద్ర మోక్షం )","unit - 2 ( సీతా )","unit - 3 ( అతడు అడవిని జయించాడు )","Unit - 5 ( జానపద కళలు )","MID-1 ( Question paper)"]}},"CS - C":{Telugu:{units:["Syllabus by AKNU","unit - 1 (  గజేంద్ర మోక్షం )","unit - 2 ( సీతా )","unit - 3 ( అతడు అడవిని జయించాడు )","Unit - 5 ( జానపద కళలు )","MID-1 ( Question paper)"],links:["https://file.garden/aZm7Ksv4vGLII5p_/General%20Telugu.pdf","https://files.catbox.moe/tv7dw0.pdf","https://file.garden/abrK4_rpWxJegn7w/%E0%B0%AF%E0%B1%82%E0%B0%A8%E0%B0%BF%E0%B0%9F%E0%B1%8D%202.pdf","https://file.garden/abrK4_rpWxJegn7w/Document%20(3).pdf","https://file.garden/abrK4_rpWxJegn7w/Document(1)%20(2).pdf","https://file.garden/abrK4_rpWxJegn7w/merged_useas%20(3).pdf"],_type:"subject",_rank:1,vids:["","","","","",""]},_rank:10,HINDI:{units:["SYLLABUS BY AKNU","MODEL PAPER","UNIT 4 TRANSLATIONS ENG - HIN","LETTERS"],_type:"subject",links:["https://file.garden/aZm7Ksv4vGLII5p_/General%20Hindi%20sem1.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/h.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/hi.pdf","https://file.garden/aZ1i9e6aIVfqSsYT/lethin.pdf"],_rno:2,_rank:2,vids:["","","",""]},ENGLISH:{_rno:3,vids:["https://file.garden/aZ1i9e6aIVfqSsYT/english.pdf",""],_type:"subject",links:["https://ae8c6a7a-7f2b-4b7d-9030-bec209dfe11c-00-3aqpa04lxcxwh.janeway.replit.dev/api/files/5/view","https://file.garden/abrK4_rpWxJegn7w/EnglishUnit2.pdf"],units:["UNIT - 1 ON SAYING PLEASE","UNIT - 2 HALF A RUPEE WORK"],_rank:3}}},_config:yh,"SEM - 3 Noteses":{"Web technologies":{links:["https://file.garden/abrK4_rpWxJegn7w/WEBTECHNOLOGIESUSEAS"],_type:"subject",units:["Syllabus"],_rank:6,vids:[""]},English:{links:["https://res.cloudinary.com/wdvuyvct/image/upload/v1787564750/qyvx2qjyhp6tl9xgxr75.jpg"],_type:"subject",units:["Syllabus"],_rank:3,vids:[""]},_rank:2,"R - Language":{_type:"subject",units:[],links:[],vids:[],_rank:4},Telugu:{_type:"subject",units:[],links:[],vids:[],_rank:1},Hindi:{_type:"subject",units:[],links:[],vids:[],_rank:2},DBMS:{_type:"subject",units:[],links:[],vids:[],_rank:5},ICT:{_type:"subject",units:[],links:[],vids:[],_rank:8},"COMPUTER ORGANIZATION":{_type:"subject",units:[],links:[],vids:[],_rank:7},"Introduction to Public Administration":{_type:"subject",units:[],links:[],vids:[],_rank:9}}},vh={apiKey:"AIzaSyDEMuw60DEiC1WDRdQ5vslBKS8LimB_Uj0",authDomain:"studyhub-33164.firebaseapp.com",databaseURL:"https://studyhub-33164-default-rtdb.firebaseio.com",projectId:"studyhub-33164",storageBucket:"studyhub-33164.firebasestorage.app",messagingSenderId:"918352715015",appId:"1:918352715015:web:ab2ba28aa9456aba32b9a2",measurementId:"G-HDPLBSL0BN"},Eh=ls(vh),ei=uh(Eh),$i=Qn(ei,"portal_tree_data"),Ir=Qn(ei,"visitor_count"),zi=Qn(ei,"messages");let we=gn,U=[],st="";window.addEventListener("DOMContentLoaded",()=>{z()});try{gh(Ir,n=>n==null?1380:n+1)}catch{}Mt(Ir,n=>{if(n.exists()){const e=document.getElementById("view-count");e&&(e.innerText=Number(n.val()).toLocaleString())}});Mt($i,n=>{n.exists()?we=n.val():(we=gn,Er($i,gn)),Ih(),z()});function Ih(){const n=window.location.hash;if(!n||!n.startsWith("#/"))return;let e=n.replace(/^#\//,"");e.startsWith("Home/")&&(e=e.replace(/^Home\//,""));const t=e.split("/").map(decodeURIComponent).filter(Boolean);if(t.length>0){const i=t[t.length-1].trim().toLowerCase(),s=t.slice(0,-1);let r=we;for(let a of s)if(r&&r[a])r=r[a];else break;let o=null;if(r&&r._type==="subject"){const a=r.units||[],l=r.links||[],c=a.findIndex(d=>(d||"").trim().toLowerCase()===i);c!==-1&&l[c]&&l[c]!=="#"&&(o=l[c])}if(!o){const a=l=>{if(!l)return null;if(l._type==="subject"){const c=l.units||[],d=l.links||[],h=c.findIndex(u=>(u||"").trim().toLowerCase()===i);if(h!==-1&&d[h]&&d[h]!=="#")return d[h]}else{const c=Object.keys(l).filter(d=>!d.startsWith("_"));for(let d of c){const h=a(l[d]);if(h)return h}}return null};o=a(we)}if(o){const a=document.getElementById("v2-loader");a&&(a.style.display="flex"),setTimeout(()=>{window.location.replace(o)},400)}}}function z(){const n=document.getElementById("mainGrid"),e=document.getElementById("notesArea"),t=document.getElementById("unitList"),i=document.getElementById("navHeader"),s=document.getElementById("viewTitle"),r=document.getElementById("bc");if(!n||!t)return;n.innerHTML="",t.innerHTML="";let o='<span class="bc-link" onclick="window.jumpTo(-1)">Home</span>';if(U.forEach((l,c)=>{o+=` > <span class="bc-link" onclick="window.jumpTo(${c})">${l}</span>`}),r&&(r.innerHTML=o),U.length>0?(i&&(i.style.display="flex"),s&&(s.innerText=U[U.length-1])):i&&(i.style.display="none"),st.trim()!==""){n.style.display="none",e&&(e.style.display="block"),i&&(i.style.display="none");const l=[],c=(d,h=[])=>{d&&(d._type==="subject"?(d.units||[]).forEach((u,p)=>{u&&u.toLowerCase().includes(st.toLowerCase())&&l.push({type:"unit",name:u,link:(d.links||[])[p]||"#",vid:(d.vids||[])[p]||"",path:h})}):Object.keys(d).filter(u=>!u.startsWith("_")).forEach(u=>{u.toLowerCase().includes(st.toLowerCase())&&l.push({type:"folder",name:u,path:[...h,u]}),c(d[u],[...h,u])}))};c(we),l.length===0?t.innerHTML='<div style="text-align:center; padding:40px; color:#888;">No results found</div>':l.forEach((d,h)=>{const u=(h*.05).toFixed(2);d.type==="unit"?t.innerHTML+=`
              <div class="unit-item" style="animation-delay: ${u}s" onclick="window.openPdf('${d.link}')">
                <span><i class="fa-solid fa-file-pdf" style="color:#ef4444; margin-right:10px;"></i> ${d.name}</span>
                <div class="action-btns" onclick="event.stopPropagation()">
                  <button class="icon-action-btn" onclick="window.shareUnit('${d.path.join("/")}', '${d.name}')" title="Share Link"><i class="fa-solid fa-share-nodes" style="color:#2ecc71;"></i></button>
                  ${d.vid?`<button class="icon-action-btn" onclick="window.openVideo('${d.vid}', '${d.name}')" title="Watch Video"><i class="fa-brands fa-youtube" style="color:#ff0000;"></i></button>`:""}
                  <button class="icon-action-btn" onclick="window.openPdf('${d.link}')" title="Open Full Page PDF"><i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                </div>
              </div>`:t.innerHTML+=`
              <div class="unit-item" style="animation-delay: ${u}s" onclick="window.jumpToPath('${d.path.join("/")}')">
                <span><i class="fa-solid fa-folder-open" style="color:var(--primary); margin-right:10px;"></i> ${d.name}</span>
                <i class="fa-solid fa-chevron-right"></i>
              </div>`});return}let a=we;if(U.forEach(l=>{a&&(a=a[l])}),!a){U=[],z();return}a._type==="subject"?(n.style.display="none",e&&(e.style.display="block"),(a.units||[]).forEach((l,c)=>{const d=(a.links||[])[c]||"#",h=(a.vids||[])[c]||"",u=(c*.05).toFixed(2);t.innerHTML+=`
                <div class="unit-item" style="animation-delay: ${u}s" onclick="window.openPdf('${d}')">
                    <span><i class="fa-solid fa-file-pdf" style="color:#ef4444; margin-right:10px;"></i> ${l}</span>
                    <div class="action-btns" onclick="event.stopPropagation()">
                      <button class="icon-action-btn" onclick="window.shareUnit('${U.join("/")}', '${l}')" title="Share Link"><i class="fa-solid fa-share-nodes" style="color:#2ecc71;"></i></button>
                      ${h?`<button class="icon-action-btn" onclick="window.openVideo('${h}', '${l}')" title="Watch Video"><i class="fa-brands fa-youtube" style="color:#ff0000;"></i></button>`:""}
                      <button class="icon-action-btn" onclick="window.openPdf('${d}')" title="Open Full Page PDF"><i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                    </div>
                </div>`})):(n.style.display="grid",e&&(e.style.display="none"),Object.keys(a).filter(c=>!c.startsWith("_")).sort((c,d)=>(a[c]._rank||99)-(a[d]._rank||99)).forEach((c,d)=>{const h=(d*.06).toFixed(2);n.innerHTML+=`
                <div class="card" style="animation-delay: ${h}s" onclick="window.moveIn('${c}')">
                    <i class="fa-solid ${U.length===0?"fa-graduation-cap":"fa-book-open"}" style="font-size:2.5rem; color:var(--primary); margin-bottom:15px;"></i>
                    <h3 style="font-size:1rem;">${c}</h3>
                </div>`}))}window.moveIn=n=>{U.push(n),z()};window.goBack=()=>{U.pop(),z()};window.jumpTo=n=>{U=U.slice(0,n+1),z()};window.jumpToPath=n=>{U=n.split("/"),z()};window.openPdf=n=>{n&&n!=="#"&&window.open(n,"_blank","noopener,noreferrer")};window.openVideo=(n,e)=>{const t=document.getElementById("v-video-name");t&&(t.innerText=e);let i="";n.includes("v=")?i=n.split("v=")[1].split("&")[0]:n.includes("youtu.be/")&&(i=n.split("youtu.be/")[1].split("?")[0]);const s=document.getElementById("video-frame");s&&(s.src=i?`https://www.youtube.com/embed/${i}?autoplay=1`:n);const r=document.getElementById("video-viewer");r&&(r.style.display="flex")};window.closeVideo=()=>{const n=document.getElementById("video-frame");n&&(n.src="");const e=document.getElementById("video-viewer");e&&(e.style.display="none")};window.shareUnit=(n,e)=>{const t=n.split("/").filter(Boolean).map(encodeURIComponent),i=`${window.location.origin}/#/Home/${t.join("/")}/${encodeURIComponent(e)}`;navigator.clipboard&&navigator.clipboard.writeText(i);const s=document.getElementById("toast");if(s&&(s.style.display="block",setTimeout(()=>{s.style.display="none"},2500)),navigator.share)try{navigator.share({title:e,text:`Study Hub notes for ${e}`,url:i})}catch{}};window.openHelp=()=>{const n=document.getElementById("help-panel");n&&(n.style.display="flex")};window.closeHelp=()=>{const n=document.getElementById("help-panel");n&&(n.style.display="none")};window.sendReport=()=>{const n=document.getElementById("helpMsg"),e=n?n.value:"";e.trim()&&(Mt(zi,t=>{const i=t.exists()&&t.val().inbox?t.val().inbox:[];i.push({text:e.trim(),time:new Date().toLocaleString()}),Er(zi,{inbox:i})},{onlyOnce:!0}),alert("Report sent to Study Hub support!"),n&&(n.value=""),window.closeHelp())};document.addEventListener("DOMContentLoaded",()=>{z();const n=document.getElementById("searchInput");n&&n.addEventListener("input",e=>{st=e.target.value,z()})});
