const _0x3d21 = [
    'payload',
    'onPush:ok',
    'errMsg',
    'subscribePush:fail\x20请确保当前运行环境已包含\x20push\x20模块',
    'onPush:fail\x20请先调用\x20uni.subscribePush',
    'offPush:ok',
    '1127212gPaqIB',
    '63igRcuX',
    '13762KulFnm',
    '607072EOqKPf',
    '6XFqRjl',
    '41656GJcmVR',
    '1FLxXvf',
    '734657SEuzyG',
    '235562CBxKmp',
    '1fjSEFb',
    '1272271HYVjGd',
    'push',
    'getClientInfo',
    'addEventListener',
    'receive',
    'onPushMessage',
    '__UUID__'
];
function _0x5e30(_0x4638e4, _0x1fb8e9) {
    return _0x5e30 = function (_0x3d2118, _0x5e306c) {
        _0x3d2118 = _0x3d2118 - 0x10d;
        let _0x48bdb0 = _0x3d21[_0x3d2118];
        return _0x48bdb0;
    }, _0x5e30(_0x4638e4, _0x1fb8e9);
}
(function (_0x38fcac, _0x58932f) {
    const _0x3de761 = _0x5e30;
    while (!![]) {
        try {
            const _0x2d2c77 = parseInt(_0x3de761(0x10d)) + parseInt(_0x3de761(0x10e)) * parseInt(_0x3de761(0x10f)) + parseInt(_0x3de761(0x110)) + -parseInt(_0x3de761(0x111)) * parseInt(_0x3de761(0x112)) + parseInt(_0x3de761(0x113)) * -parseInt(_0x3de761(0x114)) + parseInt(_0x3de761(0x115)) * parseInt(_0x3de761(0x116)) + -parseInt(_0x3de761(0x117));
            if (_0x2d2c77 === _0x58932f)
                break;
            else
                _0x38fcac['push'](_0x38fcac['shift']());
        } catch (_0xd8a917) {
            _0x38fcac['push'](_0x38fcac['shift']());
        }
    }
}(_0x3d21, 0x8d994));
import { publish } from '../../bridge';
let onPushing, isListening = ![], unsubscribe = ![];
export function subscribePush(_0x1e9afd, _0x45b526) {
    const _0x1cef9d = _0x5e30, _0x372dd4 = plus[_0x1cef9d(0x118)][_0x1cef9d(0x119)]();
    return _0x372dd4 ? (!isListening && (isListening = !![], plus['push'][_0x1cef9d(0x11a)](_0x1cef9d(0x11b), _0x57db64 => {
        const _0x21b0ee = _0x1cef9d;
        onPushing && !unsubscribe && publish(_0x21b0ee(0x11c), {
            'messageId': _0x57db64[_0x21b0ee(0x11d)],
            'data': _0x57db64[_0x21b0ee(0x11e)],
            'errMsg': _0x21b0ee(0x11f)
        });
    })), unsubscribe = ![], _0x372dd4[_0x1cef9d(0x120)] = 'subscribePush:ok', _0x372dd4) : { 'errMsg': _0x1cef9d(0x121) };
}
export function unsubscribePush(_0x1bced9) {
    return unsubscribe = !![], { 'errMsg': 'unsubscribePush:ok' };
}
export function onPush() {
    const _0x4aadb4 = _0x5e30;
    if (!isListening)
        return { 'errMsg': _0x4aadb4(0x122) };
    if (plus[_0x4aadb4(0x118)]['getClientInfo']())
        return onPushing = !![], { 'errMsg': _0x4aadb4(0x11f) };
    return { 'errMsg': 'onPush:fail\x20请确保当前运行环境已包含\x20push\x20模块' };
}
export function offPush(_0x56813a) {
    const _0x350489 = _0x5e30;
    return onPushing = ![], { 'errMsg': _0x350489(0x123) };
}
