const{hasOwnProperty}=Object.prototype;const eol=typeof process!=="undefined"&&process.platform==="win32"?"\r\n":"\n";const encode=(e,t)=>{const s=[];let o="";if(typeof t==="string"){t={section:t,whitespace:false}}else{t=t||Object.create(null);t.whitespace=t.whitespace===true}const n=t.whitespace?" = ":"=";for(const c of Object.keys(e)){const r=e[c];if(r&&Array.isArray(r)){for(const i of r)o+=safe(c+"[]")+n+safe(i)+"\n"}else if(r&&typeof r==="object")s.push(c);else o+=safe(c)+n+safe(r)+eol}if(t.section&&o.length)o="["+safe(t.section)+"]"+eol+o;for(const c of s){const f=dotSplit(c).join("\\.");const l=(t.section?t.section+".":"")+f;const{whitespace:a}=t;const p=encode(e[c],{section:l,whitespace:a});if(o.length&&p.length)o+=eol;o+=p}return o};const dotSplit=e=>e.replace(/\1/g,"LITERAL\\1LITERAL").replace(/\\\./g,"").split(/\./).map(e=>e.replace(/\1/g,"\\.").replace(/\2LITERAL\\1LITERAL\2/g,""));const decode=e=>{const t=Object.create(null);let s=t;let o=null;const n=/^\[([^\]]*)\]$|^([^=]+)(=(.*))?$/i;const c=e.split(/[\r\n]+/g);for(const i of c){if(!i||i.match(/^\s*[;#]/))continue;const f=i.match(n);if(!f)continue;if(f[1]!==undefined){o=unsafe(f[1]);if(o==="__proto__"){s=Object.create(null);continue}s=t[o]=t[o]||Object.create(null);continue}const l=unsafe(f[2]);const a=l.length>2&&l.slice(-2)==="[]";const p=a?l.slice(0,-2):l;if(p==="__proto__")continue;const u=f[3]?unsafe(f[4]):true;const h=u==="true"||u==="false"||u==="null"?JSON.parse(u):u;if(a){if(!hasOwnProperty.call(s,p))s[p]=[];else if(!Array.isArray(s[p]))s[p]=[s[p]]}if(Array.isArray(s[p]))s[p].push(h);else s[p]=h}const r=[];for(const d of Object.keys(t)){if(!hasOwnProperty.call(t,d)||typeof t[d]!=="object"||Array.isArray(t[d]))continue;const y=dotSplit(d);let e=t;const g=y.pop();const O=g.replace(/\\\./g,".");for(const A of y){if(A==="__proto__")continue;if(!hasOwnProperty.call(e,A)||typeof e[A]!=="object")e[A]=Object.create(null);e=e[A]}if(e===t&&O===g)continue;e[O]=t[d];r.push(d)}for(const b of r)delete t[b];return t};const isQuoted=e=>e.charAt(0)==='"'&&e.slice(-1)==='"'||e.charAt(0)==="'"&&e.slice(-1)==="'";const safe=e=>typeof e!=="string"||e.match(/[=\r\n]/)||e.match(/^\[/)||e.length>1&&isQuoted(e)||e!==e.trim()?JSON.stringify(e):e.replace(/;/g,"\\;").replace(/#/g,"\\#");const unsafe=(n,e)=>{n=(n||"").trim();if(isQuoted(n)){if(n.charAt(0)==="'")n=n.substr(1,n.length-2);try{n=JSON.parse(n)}catch(e){}}else{let s=false;let o="";for(let e=0,t=n.length;e<t;e++){const c=n.charAt(e);if(s){if("\\;#".indexOf(c)!==-1)o+=c;else o+="\\"+c;s=false}else if(";#".indexOf(c)!==-1)break;else if(c==="\\")s=true;else o+=c}if(s)o+="\\";return o.trim()}return n};module.exports={parse:decode,decode:decode,stringify:encode,encode:encode,safe:safe,unsafe:unsafe};