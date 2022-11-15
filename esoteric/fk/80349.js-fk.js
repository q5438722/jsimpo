import {
  publish
} from '../../bridge'

let onPushing

let isListening = ![]

let unsubscribe = ![]

export function subscribePush (params, callbackId) {
  const clientInfo = plus.push.getClientInfo()
  if (clientInfo) {
    if (!isListening) {
      isListening = !![]
      plus.push.addEventListener('receive', msg => {
        if (onPushing && !unsubscribe) {
          publish('onPushMessage', {
            messageId: msg.__UUID__,
            data: msg.payload,
            errMsg: 'onPush:ok'
          })
        }
      })
    }
    unsubscribe = ![]
    clientInfo.errMsg = 'subscribePush:ok'
    return clientInfo
  } else {
    return {
      errMsg: 'subscribePush:fail 请确保当前运行环境已包含 push 模块'
    }
  }
}

export function unsubscribePush (params) {
  unsubscribe = !![]
  return {
    errMsg: 'unsubscribePush:ok'
  }
}

export function onPush () {
  if (!isListening) {
    return {
      errMsg: 'onPush:fail 请先调用 uni.subscribePush'
    }
  }
  if (plus.push.getClientInfo()) {
    onPushing = !![]
    return {
      errMsg: 'onPush:ok'
    }
  }
  return {
    errMsg: 'onPush:fail 请确保当前运行环境已包含 push 模块'
  }
}

export function offPush (params) {
  onPushing = ![]
  return {
    errMsg: 'offPush:ok'
  }
}
