import normalizeUrl from"normalize-url";import{localhostValidator,editorValidator,composeValidators,fCCValidator,httpValidator}from"./FormValidators";export{default as BlockSaveButton}from"./block-save-button";export{default as BlockSaveWrapper}from"./block-save-wrapper";export{default as Form}from"./Form.js";export{default as FormFields}from"./FormFields.js";const normalizeOptions={stripWWW:false};export function formatUrlValues(t,o){const{isEditorLinkAllowed:e,isLocalLinkAllowed:i,types:s}=o;const d={values:{},errors:[],invalidValues:[]};const r=Object.keys(t).reduce((o,r)=>{let a=t[r];const l=composeValidators(fCCValidator,httpValidator,i?null:localhostValidator,r==="githubLink"||e?null:editorValidator)(a);if(l){d.invalidValues.push(l)}if(a&&s[r]==="url"){try{a=normalizeUrl(a,normalizeOptions)}catch(o){d.errors.push({error:o,value:a})}}return{...o,[r]:a}},{});d.values=r;return d}