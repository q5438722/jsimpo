"use strict";const{basename,extname}=require("path");const util=require("util");const Chunk=require("./Chunk");const Module=require("./Module");const{parseResource}=require("./util/identifier");const REGEXP=/\[\\*([\w:]+)\\*\]/gi;const prepareId=e=>{if(typeof e!=="string")return e;if(/^"\s\+*.*\+\s*"$/.test(e)){const t=/^"\s\+*\s*(.*)\s*\+\s*"$/.exec(e);return`" + (${t[1]} + "").replace(/(^[.-]|[^a-zA-Z0-9_-])+/g, "_") + "`}return e.replace(/(^[.-]|[^a-zA-Z0-9_-])+/g,"_")};const hashLength=(h,c,i,o)=>{const e=(e,t,n)=>{let s;const r=t&&parseInt(t,10);if(r&&c){s=c(r)}else{const a=h(e,t,n);s=r?a.slice(0,r):a}if(i){i.immutable=true;if(Array.isArray(i[o])){i[o]=[...i[o],s]}else if(i[o]){i[o]=[i[o],s]}else{i[o]=s}}return s};return e};const replacer=(s,r)=>{const e=(e,t,n)=>{if(typeof s==="function"){s=s()}if(s===null||s===undefined){if(!r){throw new Error(`Path variable ${e} not implemented in this context: ${n}`)}return""}else{return`${s}`}};return e};const deprecationCache=new Map;const deprecatedFunction=(()=>()=>{})();const deprecated=(t,e,n)=>{let s=deprecationCache.get(e);if(s===undefined){s=util.deprecate(deprecatedFunction,e,n);deprecationCache.set(e,s)}return(...e)=>{s();return t(...e)}};const replacePathVariables=(h,e,t)=>{const n=e.chunkGraph;const c=new Map;if(typeof e.filename==="string"){const{path:s,query:r,fragment:a}=parseResource(e.filename);const i=extname(s);const o=basename(s);const l=o.slice(0,o.length-i.length);const h=s.slice(0,s.length-o.length);c.set("file",replacer(s));c.set("query",replacer(r,true));c.set("fragment",replacer(a,true));c.set("path",replacer(h,true));c.set("base",replacer(o));c.set("name",replacer(l));c.set("ext",replacer(i,true));c.set("filebase",deprecated(replacer(o),"[filebase] is now [base]","DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_FILENAME"))}if(e.hash){const u=hashLength(replacer(e.hash),e.hashWithLength,t,"fullhash");c.set("fullhash",u);c.set("hash",deprecated(u,"[hash] is now [fullhash] (also consider using [chunkhash] or [contenthash], see documentation for details)","DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_HASH"))}if(e.chunk){const p=e.chunk;const d=e.contentHashType;const f=replacer(p.id);const g=replacer(p.name||p.id);const P=hashLength(replacer(p instanceof Chunk?p.renderedHash:p.hash),"hashWithLength"in p?p.hashWithLength:undefined,t,"chunkhash");const m=hashLength(replacer(e.contentHash||d&&p.contentHash&&p.contentHash[d]),e.contentHashWithLength||("contentHashWithLength"in p&&p.contentHashWithLength?p.contentHashWithLength[d]:undefined),t,"contenthash");c.set("id",f);c.set("name",g);c.set("chunkhash",P);c.set("contenthash",m)}if(e.module){const _=e.module;const f=replacer(()=>prepareId(_ instanceof Module?n.getModuleId(_):_.id));const E=hashLength(replacer(()=>_ instanceof Module?n.getRenderedModuleHash(_,e.runtime):_.hash),"hashWithLength"in _?_.hashWithLength:undefined,t,"modulehash");const L=hashLength(replacer(e.contentHash),undefined,t,"contenthash");c.set("id",f);c.set("modulehash",E);c.set("contenthash",L);c.set("hash",e.contentHash?L:E);c.set("moduleid",deprecated(f,"[moduleid] is now [id]","DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_MODULE_ID"))}if(e.url){c.set("url",replacer(e.url))}if(typeof e.runtime==="string"){c.set("runtime",replacer(()=>prepareId(e.runtime)))}else{c.set("runtime",replacer("_"))}if(typeof h==="function"){h=h(e,t)}h=h.replace(REGEXP,(t,n)=>{if(n.length+2===t.length){const s=/^(\w+)(?::(\w+))?$/.exec(n);if(!s)return t;const[,r,a]=s;const e=c.get(r);if(e!==undefined){return e(t,a,h)}}else if(t.startsWith("[\\")&&t.endsWith("\\]")){return`[${t.slice(2,-2)}]`}return t});return h};const plugin="TemplatedPathPlugin";class TemplatedPathPlugin{apply(e){e.hooks.compilation.tap(plugin,e=>{e.hooks.assetPath.tap(plugin,replacePathVariables)})}}module.exports=TemplatedPathPlugin;