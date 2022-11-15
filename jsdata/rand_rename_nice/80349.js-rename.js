'use strict';
import{
  publish as publish
}from "../../bridge";
let selfCompletionActive;
let isListening = false;
let alreadyMarked = false;
function login(lineStyleUnchangable, arrowSizeUnchangable) {
  const result = plus.push.getClientInfo();
  if (result) {
    if (!isListening) {
      isListening = true;
      plus.push.addEventListener("receive", (packet) => {
        if (selfCompletionActive && !alreadyMarked) {
          publish("onPushMessage", {
            messageId : packet.__UUID__,
            data : packet.payload,
            errMsg : "onPush:ok"
          });
        }
      });
    }
    alreadyMarked = false;
    result.errMsg = "subscribePush:ok";
    return result;
  } else {
    return {
      errMsg : "subscribePush:fail \u8bf7\u786e\u4fdd\u5f53\u524d\u8fd0\u884c\u73af\u5883\u5df2\u5305\u542b push \u6a21\u5757"
    };
  }
}
export{
  login as subscribePush
};
function attributeNameInfo(attributeName) {
  alreadyMarked = true;
  return {
    errMsg : "unsubscribePush:ok"
  };
}
export{
  attributeNameInfo as unsubscribePush
};
function simplifyCall() {
  if (!isListening) {
    return {
      errMsg : "onPush:fail \u8bf7\u5148\u8c03\u7528 uni.subscribePush"
    };
  }
  if (plus.push.getClientInfo()) {
    selfCompletionActive = true;
    return {
      errMsg : "onPush:ok"
    };
  }
  return {
    errMsg : "onPush:fail \u8bf7\u786e\u4fdd\u5f53\u524d\u8fd0\u884c\u73af\u5883\u5df2\u5305\u542b push \u6a21\u5757"
  };
}
export{
  simplifyCall as onPush
};
function TwitterWidgetFactory(twitterWidgetURL) {
  selfCompletionActive = false;
  return {
    errMsg : "offPush:ok"
  };
}
export{
  TwitterWidgetFactory as offPush
};

