const _0x5e23 = [
    'LzZOM',
    'unsubscribePush:ok',
    'rdfoi',
    'onPush:fail\x20请先调用\x20uni.subscribePush',
    'onPush:ok',
    'onPush:fail\x20请确保当前运行环境已包含\x20push\x20模块',
    'FpgwO',
    'WqQhA',
    'bnoEv',
    '217405lCGHwm',
    '304952SPYxlV',
    '1181064mPVwnK',
    '170197qlNgSe',
    '1259cNJIEE',
    '947QqarBr',
    '610736LmVMfX',
    '152384FQRSHl',
    'receive',
    'subscribePush:fail\x20请确保当前运行环境已包含\x20push\x20模块',
    'push',
    'addEventListener',
    'QGIRL',
    'fGGdv',
    'gYKVx',
    'payload',
    'LvxaV',
    'errMsg',
    'subscribePush:ok'
];
function _0x144f(_0xafe496, _0x1e1fbd) {
    return _0x144f = function (_0xc1ebe3, _0x435772) {
        _0xc1ebe3 = _0xc1ebe3 - (-0x870 + 0xb27 + -0x12f * 0x1);
        let _0x414ecd = _0x5e23[_0xc1ebe3];
        return _0x414ecd;
    }, _0x144f(_0xafe496, _0x1e1fbd);
}
(function (_0x34919a, _0x1b86ca) {
    const _0x46bbfd = _0x144f;
    while (!![]) {
        try {
            const _0x2c6325 = -parseInt(_0x46bbfd(0x188)) + parseInt(_0x46bbfd(0x189)) + parseInt(_0x46bbfd(0x18a)) + parseInt(_0x46bbfd(0x18b)) + parseInt(_0x46bbfd(0x18c)) * -parseInt(_0x46bbfd(0x18d)) + parseInt(_0x46bbfd(0x18e)) + -parseInt(_0x46bbfd(0x18f));
            if (_0x2c6325 === _0x1b86ca)
                break;
            else
                _0x34919a['push'](_0x34919a['shift']());
        } catch (_0x2a7bf7) {
            _0x34919a['push'](_0x34919a['shift']());
        }
    }
}(_0x5e23, 0x1 * -0x12ce36 + 0x1049fb + 0x153c5 * 0xa));
import { publish } from '../../bridge';
let onPushing, isListening = ![], unsubscribe = ![];
export function subscribePush(_0x150b0f, _0x559029) {
    const _0x5cefa8 = _0x144f, _0x59efde = {
            'QGIRL': function (_0x1db782, _0x27226b) {
                return _0x1db782 && _0x27226b;
            },
            'fGGdv': function (_0x14f77b, _0x238fff, _0x4e171e) {
                return _0x14f77b(_0x238fff, _0x4e171e);
            },
            'gYKVx': 'onPushMessage',
            'LvxaV': 'onPush:ok',
            'JGkEj': _0x5cefa8(0x190),
            'LzZOM': _0x5cefa8(0x191)
        }, _0x357693 = plus[_0x5cefa8(0x192)]['getClientInfo']();
    return _0x357693 ? (!isListening && (isListening = !![], plus['push'][_0x5cefa8(0x193)](_0x59efde['JGkEj'], _0x99ac7b => {
        const _0x411527 = _0x5cefa8;
        _0x59efde[_0x411527(0x194)](onPushing, !unsubscribe) && _0x59efde[_0x411527(0x195)](publish, _0x59efde[_0x411527(0x196)], {
            'messageId': _0x99ac7b['__UUID__'],
            'data': _0x99ac7b[_0x411527(0x197)],
            'errMsg': _0x59efde[_0x411527(0x198)]
        });
    })), unsubscribe = ![], _0x357693[_0x5cefa8(0x199)] = _0x5cefa8(0x19a), _0x357693) : { 'errMsg': _0x59efde[_0x5cefa8(0x19b)] };
}
export function unsubscribePush(_0x4ca530) {
    const _0x3d23f3 = _0x144f, _0x17e6c3 = { 'rdfoi': _0x3d23f3(0x19c) };
    return unsubscribe = !![], { 'errMsg': _0x17e6c3[_0x3d23f3(0x19d)] };
}
export function onPush() {
    const _0x53ab6a = _0x144f, _0x43c3be = {
            'FpgwO': _0x53ab6a(0x19e),
            'WqQhA': _0x53ab6a(0x19f),
            'oklLY': _0x53ab6a(0x1a0)
        };
    if (!isListening)
        return { 'errMsg': _0x43c3be[_0x53ab6a(0x1a1)] };
    if (plus[_0x53ab6a(0x192)]['getClientInfo']())
        return onPushing = !![], { 'errMsg': _0x43c3be[_0x53ab6a(0x1a2)] };
    return { 'errMsg': _0x43c3be['oklLY'] };
}
export function offPush(_0xdde23f) {
    const _0x488b98 = _0x144f, _0xcd69f7 = { 'bnoEv': 'offPush:ok' };
    return onPushing = ![], { 'errMsg': _0xcd69f7[_0x488b98(0x1a3)] };
}
