"use strict";const toString=Object.prototype.toString;const colors=require("ansi-colors");let called=false;let fns=[];const complements={yellow:"blue",cyan:"red",green:"magenta",black:"white",blue:"yellow",red:"cyan",magenta:"green",white:"black"};exports.longest=(e,r)=>{return e.reduce((e,t)=>Math.max(e,r?t[r].length:t.length),0)};exports.hasColor=e=>!!e&&colors.hasColor(e);const isObject=exports.isObject=e=>{return e!==null&&typeof e==="object"&&!Array.isArray(e)};exports.nativeType=e=>{return toString.call(e).slice(8,-1).toLowerCase().replace(/\s/g,"")};exports.isAsyncFn=e=>{return exports.nativeType(e)==="asyncfunction"};exports.isPrimitive=e=>{return e!=null&&typeof e!=="object"&&typeof e!=="function"};exports.resolve=(e,t,...r)=>{if(typeof t==="function"){return t.call(e,...r)}return t};exports.scrollDown=(e=[])=>[...e.slice(1),e[0]];exports.scrollUp=(e=[])=>[e.pop(),...e];exports.reorder=(e=[])=>{let t=e.slice();t.sort((e,t)=>{if(e.index>t.index)return 1;if(e.index<t.index)return-1;return 0});return t};exports.swap=(e,t,r)=>{let o=e.length;let n=r===o?0:r<0?o-1:r;let s=e[t];e[t]=e[n];e[n]=s};exports.width=(e,t=80)=>{let r=e&&e.columns?e.columns:t;if(e&&typeof e.getWindowSize==="function"){r=e.getWindowSize()[0]}if(process.platform==="win32"){return r-1}return r};exports.height=(e,t=20)=>{let r=e&&e.rows?e.rows:t;if(e&&typeof e.getWindowSize==="function"){r=e.getWindowSize()[1]}return r};exports.wordWrap=(e,t={})=>{if(!e)return e;if(typeof t==="number"){t={width:t}}let{indent:r="",newline:o="\n"+r,width:n=80}=t;let s=(o+r).match(/[^\S\n]/g)||[];n-=s.length;let l=`.{1,${n}}([\\s\\u200B]+|$)|[^\\s\\u200B]+?([\\s\\u200B]+|$)`;let i=e.trim();let c=new RegExp(l,"g");let p=i.match(c)||[];p=p.map(e=>e.replace(/\n$/,""));if(t.padEnd)p=p.map(e=>e.padEnd(n," "));if(t.padStart)p=p.map(e=>e.padStart(n," "));return r+p.join(o)};exports.unmute=e=>{let t=e.stack.find(e=>colors.keys.color.includes(e));if(t){return colors[t]}let r=e.stack.find(e=>e.slice(2)==="bg");if(r){return colors[t.slice(2)]}return e=>e};exports.pascal=e=>e?e[0].toUpperCase()+e.slice(1):"";exports.inverse=t=>{if(!t||!t.stack)return t;let r=t.stack.find(e=>colors.keys.color.includes(e));if(r){let e=colors["bg"+exports.pascal(r)];return e?e.black:t}let e=t.stack.find(e=>e.slice(0,2)==="bg");if(e){return colors[e.slice(2).toLowerCase()]||t}return colors.none};exports.complement=r=>{if(!r||!r.stack)return r;let e=r.stack.find(e=>colors.keys.color.includes(e));let o=r.stack.find(e=>e.slice(0,2)==="bg");if(e&&!o){return colors[complements[e]||e]}if(o){let e=o.slice(2).toLowerCase();let t=complements[e];if(!t)return r;return colors["bg"+exports.pascal(t)]||r}return colors.none};exports.meridiem=e=>{let t=e.getHours();let r=e.getMinutes();let o=t>=12?"pm":"am";t=t%12;let n=t===0?12:t;let s=r<10?"0"+r:r;return n+":"+s+" "+o};exports.set=(e={},t="",s)=>{return t.split(".").reduce((e,t,r,o)=>{let n=o.length-1>r?e[t]||{}:s;if(!exports.isObject(n)&&r<o.length-1)n={};return e[t]=n},e)};exports.get=(e={},t="",r)=>{let o=e[t]==null?t.split(".").reduce((e,t)=>e&&e[t],e):e[t];return o==null?r:o};exports.mixin=(o,n)=>{if(!isObject(o))return n;if(!isObject(n))return o;for(let r of Object.keys(n)){let t=Object.getOwnPropertyDescriptor(n,r);if(t.hasOwnProperty("value")){if(o.hasOwnProperty(r)&&isObject(t.value)){let e=Object.getOwnPropertyDescriptor(o,r);if(isObject(e.value)){o[r]=exports.merge({},o[r],n[r])}else{Reflect.defineProperty(o,r,t)}}else{Reflect.defineProperty(o,r,t)}}else{Reflect.defineProperty(o,r,t)}}return o};exports.merge=(...t)=>{let r={};for(let e of t)exports.mixin(r,e);return r};exports.mixinEmitter=(r,o)=>{let n=o.constructor.prototype;for(let t of Object.keys(n)){let e=n[t];if(typeof e==="function"){exports.define(r,t,e.bind(o))}else{exports.define(r,t,e)}}};exports.onExit=e=>{const t=(e,t)=>{if(called)return;called=true;fns.forEach(e=>e());if(e===true){process.exit(128+t)}};if(fns.length===0){process.once("SIGTERM",t.bind(null,true,15));process.once("SIGINT",t.bind(null,true,2));process.once("exit",t)}fns.push(e)};exports.define=(e,t,r)=>{Reflect.defineProperty(e,t,{value:r})};exports.defineExport=(e,t,r)=>{let o;Reflect.defineProperty(e,t,{enumerable:true,configurable:true,set(e){o=e},get(){return o?o():r()}})};