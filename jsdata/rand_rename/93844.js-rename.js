const _=require("lodash");const Promise=require("bluebird");const $errUtils=require("../../cypress/error_utils");module.exports=(e,a,c)=>{e.addAll({readFile(s,e,r={}){let t=r;if(_.isObject(e)){t=e;e=null}r=_.defaults({},t,{encoding:e!=null?e:"utf8",log:true});const i={};if(r.log){r._log=a.log({message:s,timeout:r.timeout,consoleProps(){return i}})}if(!s||!_.isString(s)){$errUtils.throwErrByPath("files.invalid_argument",{onFail:r._log,args:{cmd:"readFile",file:s}})}const o=()=>{return a.backend("read:file",s,_.pick(r,"encoding")).catch(e=>{if(e.code==="ENOENT"){return{contents:null,filePath:e.filePath}}return $errUtils.throwErrByPath("files.unexpected_error",{onFail:r._log,args:{cmd:"readFile",action:"read",file:s,filePath:e.filePath,error:e.message}})}).then(({contents:l,filePath:n})=>{i["File Path"]=n;i["Contents"]=l;return c.verifyUpcomingAssertions(l,r,{ensureExistenceFor:"subject",onFail(e){if(e.type!=="existence"){return}const r=l?"files.existent":"files.nonexistent";const{message:t,docsUrl:i}=$errUtils.cypressErrByPath(r,{args:{file:s,filePath:n}});e.message=t;e.docsUrl=i},onRetry:o})})};return o()},writeFile(r,e,t,i={}){let l=i;if(_.isObject(t)){l=t;t=null}i=_.defaults({},l,{encoding:t?t:"utf8",flag:l.flag?l.flag:"w",log:true});const n={};if(i.log){i._log=a.log({message:r,timeout:0,consoleProps(){return n}})}if(!r||!_.isString(r)){$errUtils.throwErrByPath("files.invalid_argument",{onFail:i._log,args:{cmd:"writeFile",file:r}})}if(!(_.isString(e)||_.isObject(e))){$errUtils.throwErrByPath("files.invalid_contents",{onFail:i._log,args:{contents:e}})}if(_.isObject(e)){e=JSON.stringify(e,null,2)}return a.backend("write:file",r,e,_.pick(i,["encoding","flag"])).then(({contents:e,filePath:r})=>{n["File Path"]=r;n["Contents"]=e;return null}).catch(Promise.TimeoutError,()=>{return $errUtils.throwErrByPath("files.timed_out",{onFail:i._log,args:{cmd:"writeFile",file:r,timeout:i.timeout}})}).catch(e=>{return $errUtils.throwErrByPath("files.unexpected_error",{onFail:i._log,args:{cmd:"writeFile",action:"write",file:r,filePath:e.filePath,error:e.message}})})}})};