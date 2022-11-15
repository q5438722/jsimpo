'use strict';
const _0x40ba = [
    '947784kmejdl',
    '5KjSecw',
    '268115dFSkXh',
    '1597626QyfwPp',
    '1630118hqnfsx',
    '1760901sPhlmv',
    '1815635NQxxUR',
    '306drEGJB',
    '23993jVvEiA',
    'worker_threads',
    'once',
    'beforeExit',
    'mustCall',
    'log',
    'world',
    'message',
    'exit',
    'unref'
];
const _0x40d741 = _0x5ddd;
(function (_0x590768, _0x3d373f) {
    const _0x51e6d0 = _0x5ddd;
    while (!![]) {
        try {
            const _0x222df9 = -parseInt(_0x51e6d0(0x177)) + -parseInt(_0x51e6d0(0x178)) * -parseInt(_0x51e6d0(0x179)) + -parseInt(_0x51e6d0(0x17a)) + -parseInt(_0x51e6d0(0x17b)) + -parseInt(_0x51e6d0(0x17c)) + -parseInt(_0x51e6d0(0x17d)) + parseInt(_0x51e6d0(0x17e)) * parseInt(_0x51e6d0(0x17f));
            if (_0x222df9 === _0x3d373f)
                break;
            else
                _0x590768['push'](_0x590768['shift']());
        } catch (_0x58df25) {
            _0x590768['push'](_0x590768['shift']());
        }
    }
}(_0x40ba, 0xe3241));
const common = require('../common'), {Worker} = require(_0x40d741(0x180)), w = new Worker('\x0aconst\x20{\x20parentPort\x20}\x20=\x20require(\x27worker_threads\x27);\x0aparentPort.once(\x27message\x27,\x20(msg)\x20=>\x20{\x0a\x20\x20parentPort.postMessage(msg);\x0a});\x0a', { 'eval': !![] });
function _0x5ddd(_0xc1896c, _0x783d2e) {
    return _0x5ddd = function (_0x40ba66, _0x5ddd0e) {
        _0x40ba66 = _0x40ba66 - 0x177;
        let _0x2bafa6 = _0x40ba[_0x40ba66];
        return _0x2bafa6;
    }, _0x5ddd(_0xc1896c, _0x783d2e);
}
process[_0x40d741(0x181)](_0x40d741(0x182), common[_0x40d741(0x183)](() => {
    const _0x46b847 = _0x40d741;
    console[_0x46b847(0x184)](_0x46b847(0x182)), w['ref'](), w['postMessage']({ 'hello': _0x46b847(0x185) });
})), w['once']('message', common[_0x40d741(0x183)](_0x39eb93 => {
    const _0x244ac9 = _0x40d741;
    console[_0x244ac9(0x184)](_0x244ac9(0x186), _0x39eb93);
})), w['on'](_0x40d741(0x187), common[_0x40d741(0x183)](() => {
    const _0x5f1e1f = _0x40d741;
    console[_0x5f1e1f(0x184)]('exit');
})), w[_0x40d741(0x188)]();
