function parseApis(e,t){return e.reduce(function(r,e){const n=e.apiList;n&&Object.keys(n).forEach(e=>{if(t(e,n[e])){r.add(e.replace("uni.",""))}});return r},new Set)}module.exports={parseUserApis(e=[],r=[]){const n=parseApis(e,function(e,r){return r===false});const t=parseApis(r,function(){return true});return[...t].filter(e=>!n.has(e))}};