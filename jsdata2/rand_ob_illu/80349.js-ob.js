const _0x5b54 = ['__UUID__', 'lidSk', 'errMsg', 'subscribePush:ok', 'oWLWc', 'unsubscribePush:ok', 'FBNpp', 'XTvYL', 'onPush:fail \u8BF7\u786E\u4FDD\u5F53\u524D\u8FD0\u884C\u73AF\u5883\u5DF2\u5305\u542B push \u6A21\u5757', 'offPush:ok', '254781AJuoNp', '9qyjNWZ', '17831VybjuC', '248254wqhlOi', '271640IlaLTd', '234574ntRzST', '370715FuGKbM', '1LqNMle', '1ionlLV', '361723vXiOIa', 'onPush:ok', 'subscribePush:fail \u8BF7\u786E\u4FDD\u5F53\u524D\u8FD0\u884C\u73AF\u5883\u5DF2\u5305\u542B push \u6A21\u5757', 'push', 'getClientInfo', 'addEventListener', 'VeBWo', 'KBMWg'];

(function (_0x4966d1, _0x49a039) {
    const _0xe4c1a0 = _0x4713;

    while (true) {
        try {
            const _0xeff946 = parseInt(_0xe4c1a0(0xa5)) + -parseInt(_0xe4c1a0(0xa6)) * parseInt(_0xe4c1a0(0xa7)) + parseInt(_0xe4c1a0(0xa8)) + -parseInt(_0xe4c1a0(0xa9)) + parseInt(_0xe4c1a0(0xaa)) + -parseInt(_0xe4c1a0(0xab)) * parseInt(_0xe4c1a0(0xac)) + -parseInt(_0xe4c1a0(0xad)) * -parseInt(_0xe4c1a0(0xae));

            if (_0xeff946 === _0x49a039) break;else _0x4966d1.push(_0x4966d1.shift());
        } catch (_0x23124c) {
            _0x4966d1.push(_0x4966d1.shift());
        }
    }
})(_0x5b54, 296498);
function _0x4713(_0xf7b931, _0x3492e1) {
    return _0x4713 = function (_0x158fe7, _0x244b4) {
        _0x158fe7 = _0x158fe7 - 165;
        const _0x15fa53 = _0x5b54[_0x158fe7];

        return _0x15fa53;
    }, _0x4713(_0xf7b931, _0x3492e1);
}
import { publish } from '../../bridge';
var onPushing;
var isListening = false;
var unsubscribe = false;

export function subscribePush(_0x437423, _0x340e34) {
    const _0x29264e = _0x4713;
    const _0x21aaf1 = {
        'VeBWo': function (_0x425cae, _0x108282) {
            return _0x425cae && _0x108282;
        },
        'KBMWg': function (_0x4146f1, _0x1e4acd, _0x974471) {
            return _0x4146f1(_0x1e4acd, _0x974471);
        },
        'ZWnbZ': 'onPushMessage',
        'lidSk': _0x29264e(0xaf),
        'oWLWc': _0x29264e(0xb0)
    };

    const _0x3c9f26 = plus[_0x29264e(0xb1)][_0x29264e(0xb2)]();

    return _0x3c9f26 ? (!isListening && (isListening = true, plus[_0x29264e(0xb1)][_0x29264e(0xb3)]('receive', _0x224440 => {
        const _0x42533b = _0x29264e;

        _0x21aaf1[_0x42533b(0xb4)](onPushing, !unsubscribe) && _0x21aaf1[_0x42533b(0xb5)](publish, _0x21aaf1.ZWnbZ, {
            'messageId': _0x224440[_0x42533b(0xb6)],
            'data': _0x224440.payload,
            'errMsg': _0x21aaf1[_0x42533b(0xb7)]
        });
    })), unsubscribe = false, _0x3c9f26[_0x29264e(0xb8)] = _0x29264e(0xb9), _0x3c9f26) : { 'errMsg': _0x21aaf1[_0x29264e(0xba)] };
}
export function unsubscribePush(_0x39ad6f) {
    const _0x492c78 = _0x4713;
    const _0x4ae5a3 = { 'FBNpp': _0x492c78(0xbb) };

    return unsubscribe = true, { 'errMsg': _0x4ae5a3[_0x492c78(0xbc)] };
}
export function onPush() {
    const _0x42f561 = _0x4713;
    const _0x5a2823 = { 'XTvYL': _0x42f561(0xaf) };

    if (!isListening) return { 'errMsg': 'onPush:fail \u8BF7\u5148\u8C03\u7528 uni.subscribePush' };
    if (plus[_0x42f561(0xb1)].getClientInfo()) return onPushing = true, { 'errMsg': _0x5a2823[_0x42f561(0xbd)] };
    return { 'errMsg': _0x42f561(0xbe) };
}
export function offPush(_0x40364c) {
    const _0x3c318e = _0x4713;
    const _0x27ef0a = { 'GFNQa': _0x3c318e(0xbf) };

    return onPushing = false, { 'errMsg': _0x27ef0a.GFNQa };
}
