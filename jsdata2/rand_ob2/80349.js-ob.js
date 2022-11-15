const _0x11cc = [
    'onPush:ok',
    'offPush:ok',
    '14488SXpjin',
    '44clZZGN',
    '314371IvSXAJ',
    '792188LtvTgL',
    '1aYGoSt',
    '116489RqPEKB',
    '3dPpVOT',
    '1SxmUAX',
    '987379pZyVFb',
    '483286doEaRC',
    '2pyeWkl',
    '5479sxkujJ',
    '358HPMiHa',
    'push',
    'getClientInfo',
    'addEventListener',
    'receive',
    'onPushMessage',
    '__UUID__',
    'payload',
    'errMsg',
    'subscribePush:ok',
    'subscribePush:fail\x20请确保当前运行环境已包含\x20push\x20模块'
];
(function (_0x492b5f, _0x1d9f48) {
    const _0x245409 = _0x5081;
    while (!![]) {
        try {
            const _0x24ed28 = -parseInt(_0x245409(0x139)) * -parseInt(_0x245409(0x13a)) + parseInt(_0x245409(0x13b)) + -parseInt(_0x245409(0x13c)) * parseInt(_0x245409(0x13d)) + -parseInt(_0x245409(0x13e)) * -parseInt(_0x245409(0x13f)) + parseInt(_0x245409(0x140)) * parseInt(_0x245409(0x141)) + -parseInt(_0x245409(0x142)) * -parseInt(_0x245409(0x143)) + -parseInt(_0x245409(0x144)) * parseInt(_0x245409(0x145));
            if (_0x24ed28 === _0x1d9f48)
                break;
            else
                _0x492b5f['push'](_0x492b5f['shift']());
        } catch (_0x5897cf) {
            _0x492b5f['push'](_0x492b5f['shift']());
        }
    }
}(_0x11cc, 0x7a757));
import { publish } from '../../bridge';
let onPushing, isListening = ![], unsubscribe = ![];
function _0x5081(_0xbc72f6, _0x2a95db) {
    return _0x5081 = function (_0x11cc0f, _0x5081fc) {
        _0x11cc0f = _0x11cc0f - 0x139;
        let _0x564c81 = _0x11cc[_0x11cc0f];
        return _0x564c81;
    }, _0x5081(_0xbc72f6, _0x2a95db);
}
export function subscribePush(_0x5da947, _0xde7714) {
    const _0x5b2340 = _0x5081, _0x5f39b1 = plus[_0x5b2340(0x146)][_0x5b2340(0x147)]();
    return _0x5f39b1 ? (!isListening && (isListening = !![], plus[_0x5b2340(0x146)][_0x5b2340(0x148)](_0x5b2340(0x149), _0x17ba90 => {
        const _0x2a18d5 = _0x5b2340;
        onPushing && !unsubscribe && publish(_0x2a18d5(0x14a), {
            'messageId': _0x17ba90[_0x2a18d5(0x14b)],
            'data': _0x17ba90[_0x2a18d5(0x14c)],
            'errMsg': 'onPush:ok'
        });
    })), unsubscribe = ![], _0x5f39b1[_0x5b2340(0x14d)] = _0x5b2340(0x14e), _0x5f39b1) : { 'errMsg': _0x5b2340(0x14f) };
}
export function unsubscribePush(_0x4a4d10) {
    return unsubscribe = !![], { 'errMsg': 'unsubscribePush:ok' };
}
export function onPush() {
    const _0x1e8bad = _0x5081;
    if (!isListening)
        return { 'errMsg': 'onPush:fail\x20请先调用\x20uni.subscribePush' };
    if (plus[_0x1e8bad(0x146)][_0x1e8bad(0x147)]())
        return onPushing = !![], { 'errMsg': _0x1e8bad(0x150) };
    return { 'errMsg': 'onPush:fail\x20请确保当前运行环境已包含\x20push\x20模块' };
}
export function offPush(_0x2a9583) {
    const _0x57c512 = _0x5081;
    return onPushing = ![], { 'errMsg': _0x57c512(0x151) };
}
