import { publish } from '../../bridge';
let onPushing, isListening = ![], unsubscribe = ![];
export function subscribePush(_0x2d3cc3, _0x375e82) {
    const _0x535167 = plus['push']['getClientInfo']();
    return _0x535167 ? (!isListening && (isListening = !![], plus['push']['addEventListener']('receive', _0x4017f9 => {
        onPushing && !unsubscribe && publish('onPushMessage', {
            'messageId': _0x4017f9['__UUID__'],
            'data': _0x4017f9['payload'],
            'errMsg': 'onPush:ok'
        });
    })), unsubscribe = ![], _0x535167['errMsg'] = 'subscribePush:ok', _0x535167) : { 'errMsg': 'subscribePush:fail\x20请确保当前运行环境已包含\x20push\x20模块' };
}
export function unsubscribePush(_0x4d7e0c) {
    return unsubscribe = !![], { 'errMsg': 'unsubscribePush:ok' };
}
export function onPush() {
    if (!isListening)
        return { 'errMsg': 'onPush:fail\x20请先调用\x20uni.subscribePush' };
    if (plus['push']['getClientInfo']())
        return onPushing = !![], { 'errMsg': 'onPush:ok' };
    return { 'errMsg': 'onPush:fail\x20请确保当前运行环境已包含\x20push\x20模块' };
}
export function offPush(_0x29387a) {
    return onPushing = ![], { 'errMsg': 'offPush:ok' };
}
