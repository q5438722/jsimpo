import { publish } from '../../bridge';

var onPushing;
var isListening = false;
var unsubscribe = false;


export function subscribePush(params, callbackId) {
  const clientInfo = plus.push.getClientInfo();

  if (clientInfo) {
    if (!isListening) {
      isListening = true;
      plus.push.addEventListener('receive', msg => {
        if (onPushing && !unsubscribe) {
          publish('onPushMessage', {
            messageId: msg.__UUID__,
            data: msg.payload,
            errMsg: 'onPush:ok'
          });
        }
      });
    }
    unsubscribe = false;
    clientInfo.errMsg = 'subscribePush:ok';
    return clientInfo;
  } else {
    return {
      errMsg: 'subscribePush:fail \u8BF7\u786E\u4FDD\u5F53\u524D\u8FD0\u884C\u73AF\u5883\u5DF2\u5305\u542B push \u6A21\u5757'
    };
  }
}

export function unsubscribePush(params) {
  unsubscribe = true;
  return {
    errMsg: 'unsubscribePush:ok'
  };
}

export function onPush() {
  if (!isListening) {
    return {
      errMsg: 'onPush:fail \u8BF7\u5148\u8C03\u7528 uni.subscribePush'
    };
  }
  if (plus.push.getClientInfo()) {
    onPushing = true;
    return {
      errMsg: 'onPush:ok'
    };
  }
  return {
    errMsg: 'onPush:fail \u8BF7\u786E\u4FDD\u5F53\u524D\u8FD0\u884C\u73AF\u5883\u5DF2\u5305\u542B push \u6A21\u5757'
  };
}

export function offPush(params) {
  onPushing = false;
  return {
    errMsg: 'offPush:ok'
  };
}
