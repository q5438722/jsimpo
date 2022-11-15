import { publish } from "../../bridge";var onPushing;
var isListening = false;
var unsubscribe = false;
export function subscribePush(s, e) {
  const u = plus.push.getClientInfo();
  if (u) {
    if (!isListening) {
      isListening = true;plus.push.addEventListener("receive", s => {
        if (onPushing && !unsubscribe) {
          publish("onPushMessage", { messageId: s.__UUID__, data: s.payload, errMsg: "onPush:ok" });
        }
      });
    }unsubscribe = false;u.errMsg = "subscribePush:ok";return u;
  } else {
    return { errMsg: "subscribePush:fail \u8BF7\u786E\u4FDD\u5F53\u524D\u8FD0\u884C\u73AF\u5883\u5DF2\u5305\u542B push \u6A21\u5757" };
  }
}export function unsubscribePush(s) {
  unsubscribe = true;return { errMsg: "unsubscribePush:ok" };
}export function onPush() {
  if (!isListening) {
    return { errMsg: "onPush:fail \u8BF7\u5148\u8C03\u7528 uni.subscribePush" };
  }if (plus.push.getClientInfo()) {
    onPushing = true;return { errMsg: "onPush:ok" };
  }return { errMsg: "onPush:fail \u8BF7\u786E\u4FDD\u5F53\u524D\u8FD0\u884C\u73AF\u5883\u5DF2\u5305\u542B push \u6A21\u5757" };
}export function offPush(s) {
  onPushing = false;return { errMsg: "offPush:ok" };
}
