import{publish}from"../../bridge";let onPushing;let isListening=false;let unsubscribe=false;export function subscribePush(s,e){const u=plus.push.getClientInfo();if(u){if(!isListening){isListening=true;plus.push.addEventListener("receive",s=>{if(onPushing&&!unsubscribe){publish("onPushMessage",{messageId:s.__UUID__,data:s.payload,errMsg:"onPush:ok"})}})}unsubscribe=false;u.errMsg="subscribePush:ok";return u}else{return{errMsg:"subscribePush:fail 请确保当前运行环境已包含 push 模块"}}}export function unsubscribePush(s){unsubscribe=true;return{errMsg:"unsubscribePush:ok"}}export function onPush(){if(!isListening){return{errMsg:"onPush:fail 请先调用 uni.subscribePush"}}if(plus.push.getClientInfo()){onPushing=true;return{errMsg:"onPush:ok"}}return{errMsg:"onPush:fail 请确保当前运行环境已包含 push 模块"}}export function offPush(s){onPushing=false;return{errMsg:"offPush:ok"}}