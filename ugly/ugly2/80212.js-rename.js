export function previewImage({urls:e,current:r},i){const{invokeCallbackHandler:a}=UniServiceJSBridge;getApp().$router.push({type:"navigateTo",path:"/preview-image",params:{urls:e,current:r}},function(){a(i,{errMsg:"previewImage:ok"})},function(){a(i,{errMsg:"previewImage:fail"})})}