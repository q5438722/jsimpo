import*as path from"path";import del from"del";import{writeFile,stat,mkdir}from"fs/promises";import{repoRoot,benchesRoot,toUrl}from"./utils.js";import{defaultBenchOptions}from"./bench.js";import{prepare}from"./prepare.js";const measureName="duration";const warnings=new Set([]);const TACH_SCHEMA="https://raw.githubusercontent.com/Polymer/tachometer/master/config.schema.json";export const baseTraceLogDir=(...e)=>path.join(benchesRoot("logs"),...e);async function validateFileDep(e){try{if(typeof e==="string"){await stat(e.replace(/^file:/,""));return true}else{return false}}catch(e){console.log("Stat error:",e);return false}}export const frameworks=[{label:"preact-v8",dependencies:{framework:"file:"+repoRoot("benches/proxy-packages/preact-v8-proxy")},isValid(){return validateFileDep(this.dependencies.framework)}},{label:"preact-master",dependencies:{framework:"file:"+repoRoot("benches/proxy-packages/preact-master-proxy")},async isValid(){try{await stat(repoRoot("preact.tgz"));return validateFileDep(this.dependencies.framework)}catch(e){return false}}},{label:"preact-local",dependencies:{framework:"file:"+repoRoot("benches/proxy-packages/preact-local-proxy")},isValid(){return validateFileDep(this.dependencies.framework)}}];function getBaseBenchmarkConfig(e){let r=path.basename(e).replace(".html","");let o=path.posix.relative(toUrl(benchesRoot()),toUrl(e));let a;if(r=="02_replace1k"){const n=5;a=[{name:"duration",mode:"performance",entryName:measureName},{name:"usedJSHeapSize",mode:"expression",expression:"window.usedJSHeapSize"}];for(let e=0;e<n;e++){const t=`run-warmup-${e}`;a.push({name:t,mode:"performance",entryName:t})}a.push({name:"run-final",mode:"performance",entryName:"run-final"})}else{a=[{name:"duration",mode:"performance",entryName:measureName},{name:"usedJSHeapSize",mode:"expression",expression:"window.usedJSHeapSize"}]}return{name:r,url:o,measurement:a}}export async function generateSingleConfig(e,r){const o=await benchesRoot("src",e);const a=await stat(o);if(!a.isFile){throw new Error(`Given path is not a file: ${o}`)}await generateConfig(o,{...defaultBenchOptions,...r})}export async function generateConfig(e,r){let o;let a;const n=getBaseBenchmarkConfig(e);if(Array.isArray(r.browser)){o=r.browser.map(e=>({browser:parseBrowserOption(e)}))}else{a=parseBrowserOption(r.browser)}if(a.name=="chrome"&&r.trace){const m=baseTraceLogDir(n.name);await del("**/*",{cwd:m});await mkdir(m,{recursive:true});a.trace={logDir:m}}let t;if(!r.framework){t=frameworks}else if(typeof r.framework==="string"){const p=frameworks.find(e=>e.label==r.framework);t=p?[p]:[]}else if(Array.isArray(r.framework)){t=frameworks.filter(e=>r.framework.includes(e.label))}else{throw new Error(`Unrecognized framework option: ${r.framework}`)}if(t.length==0){console.error(`Framework options did not match any configured frameworks:\n`+`\tProvided option: ${r.framework}\n`+`\tAvailable frameworks: [${frameworks.map(e=>JSON.stringify(e.label)).join(", ")}]\n`);throw new Error(`Framework option did not match any configured frameworks: ${r.framework}`)}const s=[];for(let r of t){let e=r.dependencies.framework;if(typeof e!=="string"){throw new Error("Only string/npm dependencies are supported at this time")}if(!await r.isValid()){const f=`Could not locate path for ${r.label}: ${r.dependencies.framework}. \nSkipping...`;if(!warnings.has(f)){console.warn(f);warnings.add(f)}continue}s.push({...n,packageVersions:r,browser:a,expand:o})}if(r.prepare!==false){await prepare(s.map(e=>e.packageVersions.label))}const i={$schema:TACH_SCHEMA,sampleSize:r["sample-size"],timeout:r.timeout,horizons:r.horizon.split(","),benchmarks:s};if(i.benchmarks.length==0){if(r.framework){const l=frameworks.map(e=>e.label).join(", ");throw new Error(`No benchmarks created. Does the specified framework match one of the configured frameworks? ${l}`)}else{throw new Error(`Unknown failure: no benchmarks created. frameworksToRun: ${t}`)}}const c=await writeConfig(n.name,i);return{name:n.name,configPath:c,config:i}}async function writeConfig(e,r){const o=benchesRoot("dist",e+".config.json");await mkdir(path.dirname(o),{recursive:true});await writeFile(o,JSON.stringify(r,null,2),"utf8");return o}function parseBrowserOption(e){let r;const o=e.indexOf("@");if(o!==-1){r=e.substring(o+1);e=e.substring(0,o)}const a=e.endsWith("-headless");if(a===true){e=e.replace(/-headless$/,"")}const n=e;const t={name:n,headless:a};if(r!==undefined){t.remoteUrl=r}if(t.name=="chrome"){t.addArguments=["--js-flags=--expose-gc","--enable-precise-memory-info"]}return t}