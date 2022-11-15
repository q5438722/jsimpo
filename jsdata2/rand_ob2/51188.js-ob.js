'use strict';
const _0x57e9 = [
    '74yBGTkq',
    '2WVeyWu',
    '259357ZtEGKr',
    '299MAdfnB',
    '237BYshVZ',
    '21883bwvQPF',
    '51053FVyoMI',
    '6STPCgw',
    '../common.js',
    'createBenchmark',
    'start',
    'createContext',
    'runInContext',
    '400013LVrOki',
    '1mlWuKI',
    '1AiYAbN',
    '390468PnwQzR',
    '6043VSdVrU'
];
const _0xfaa78e = _0x4c09;
(function (_0x2656fa, _0x110822) {
    const _0x5e721a = _0x4c09;
    while (!![]) {
        try {
            const _0x4e0e1e = -parseInt(_0x5e721a(0x1bc)) * parseInt(_0x5e721a(0x1bd)) + -parseInt(_0x5e721a(0x1be)) * -parseInt(_0x5e721a(0x1bf)) + parseInt(_0x5e721a(0x1c0)) * parseInt(_0x5e721a(0x1c1)) + parseInt(_0x5e721a(0x1c2)) * -parseInt(_0x5e721a(0x1c3)) + -parseInt(_0x5e721a(0x1c4)) * -parseInt(_0x5e721a(0x1c5)) + parseInt(_0x5e721a(0x1c6)) + parseInt(_0x5e721a(0x1c7)) * parseInt(_0x5e721a(0x1c8));
            if (_0x4e0e1e === _0x110822)
                break;
            else
                _0x2656fa['push'](_0x2656fa['shift']());
        } catch (_0x5ac5b9) {
            _0x2656fa['push'](_0x2656fa['shift']());
        }
    }
}(_0x57e9, 0x4da23));
const common = require(_0xfaa78e(0x1c9)), bench = common[_0xfaa78e(0x1ca)](main, { 'n': [0x64] }), vm = require('vm'), ctxFn = new vm['Script']('\x0a\x20\x20var\x20b\x20=\x20Math.random();\x0a\x20\x20var\x20c\x20=\x20a\x20+\x20b;\x0a');
function _0x4c09(_0x3ec16f, _0x170454) {
    return _0x4c09 = function (_0x57e971, _0x4c09a0) {
        _0x57e971 = _0x57e971 - 0x1bc;
        let _0x3d7eea = _0x57e9[_0x57e971];
        return _0x3d7eea;
    }, _0x4c09(_0x3ec16f, _0x170454);
}
function main({n: _0x7e9572}) {
    const _0x1abcb2 = _0xfaa78e;
    bench[_0x1abcb2(0x1cb)]();
    let _0x34a028;
    for (let _0x378b8e = 0x0; _0x378b8e < _0x7e9572; _0x378b8e++) {
        _0x34a028 = vm[_0x1abcb2(0x1cc)]({ 'a': 'a' });
    }
    bench['end'](_0x7e9572), ctxFn[_0x1abcb2(0x1cd)](_0x34a028);
}
