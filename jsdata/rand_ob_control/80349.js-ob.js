import { publish } from '../../bridge';
let onPushing, isListening = ![], unsubscribe = ![];
export function subscribePush(_0x37f93d, _0x5a133c) {
    const _0x474857 = {
            'FuCHL': function (_0x534909, _0x404a5d) {
                return _0x534909 && _0x404a5d;
            },
            'XYUsq': function (_0x585ec7, _0x3e6c5d, _0x17ae28) {
                return _0x585ec7(_0x3e6c5d, _0x17ae28);
            },
            'naLur': 'onPushMessage',
            'rZGmM': 'onPush:ok',
            'CgOKz': 'receive',
            'ATVHk': 'subscribePush:ok',
            'TGiKt': 'subscribePush:fail\x20请确保当前运行环境已包含\x20push\x20模块'
        }, _0x1e32c5 = plus['push']['getClientInfo']();
    return _0x1e32c5 ? (!isListening && (isListening = !![], plus['push']['addEventListener'](_0x474857['CgOKz'], _0x2edcac => {
        _0x474857['FuCHL'](onPushing, !unsubscribe) && _0x474857['XYUsq'](publish, _0x474857['naLur'], {
            'messageId': _0x2edcac['__UUID__'],
            'data': _0x2edcac['payload'],
            'errMsg': _0x474857['rZGmM']
        });
    })), unsubscribe = ![], _0x1e32c5['errMsg'] = _0x474857['ATVHk'], _0x1e32c5) : { 'errMsg': _0x474857['TGiKt'] };
}
export function unsubscribePush(_0x2a6c9d) {
    const _0x523659 = { 'cwNuE': 'unsubscribePush:ok' };
    return unsubscribe = !![], { 'errMsg': _0x523659['cwNuE'] };
}
export function onPush() {
    const _0x1c0be2 = {
        'yZCXr': 'onPush:fail\x20请先调用\x20uni.subscribePush',
        'FxQCG': 'onPush:ok',
        'zhuSI': 'onPush:fail\x20请确保当前运行环境已包含\x20push\x20模块'
    };
    if (!isListening)
        return { 'errMsg': _0x1c0be2['yZCXr'] };
    if (plus['push']['getClientInfo']())
        return onPushing = !![], { 'errMsg': _0x1c0be2['FxQCG'] };
    return { 'errMsg': _0x1c0be2['zhuSI'] };
}
export function offPush(_0x12509d) {
    const _0x34beb4 = { 'MpbkL': 'offPush:ok' };
    return onPushing = ![], { 'errMsg': _0x34beb4['MpbkL'] };
}
