import _0x5aa478 from'normalize-url';import{localhostValidator,editorValidator,composeValidators,fCCValidator,httpValidator}from'./FormValidators';export{default as BlockSaveButton}from'./block-save-button';export{default as BlockSaveWrapper}from'./block-save-wrapper';export{default as Form}from'./Form.js';export{default as FormFields}from'./FormFields.js';const normalizeOptions={'stripWWW':![]};export function formatUrlValues(values,options){var ssqqeU={'cqxCg':function(callee,param1,param2,param3,param4){return callee(param1,param2,param3,param4);},'hCYQn':function(x,y){return x===y;},'iIXSr':'githubLink','nGTvq':function(x,y){return x===y;},'iWGhj':'url'};const {isEditorLinkAllowed,isLocalLinkAllowed,types}=options;const validatedValues={'values':{},'errors':[],'invalidValues':[]};const urlValues=Object['keys'](values)['reduce']((result,key)=>{let value=values[key];const nullOrWarning=ssqqeU['cqxCg'](composeValidators,fCCValidator,httpValidator,isLocalLinkAllowed?null:localhostValidator,ssqqeU['hCYQn'](key,ssqqeU['iIXSr'])||isEditorLinkAllowed?null:editorValidator)(value);if(nullOrWarning){validatedValues['invalidValues']['push'](nullOrWarning);}if(value&&ssqqeU['nGTvq'](types[key],ssqqeU['iWGhj'])){try{value=_0x5aa478(value,normalizeOptions);}catch(_0x149a13){validatedValues['errors']['push']({'error':_0x149a13,'value':value});}}return{...result,[key]:value};},{});validatedValues['values']=urlValues;return validatedValues;}