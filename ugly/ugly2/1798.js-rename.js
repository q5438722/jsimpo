import{isObject}from"./utils.js";import{paramsList}from"./params-list.js";function getChangedParams(i,r){const e=[];if(!r)return e;const a=t=>{if(e.indexOf(t)<0)e.push(t)};const t=paramsList.filter(t=>t[0]==="_").map(t=>t.replace(/_/,""));t.forEach(e=>{if(e in i&&e in r){if(isObject(i[e])&&isObject(r[e])){const t=Object.keys(i[e]);const s=Object.keys(r[e]);if(t.length!==s.length){a(e)}else{t.forEach(t=>{if(i[e][t]!==r[e][t]){a(e)}});s.forEach(t=>{if(i[e][t]!==r[e][t])a(e)})}}else if(i[e]!==r[e]){a(e)}}});return e}export{getChangedParams};