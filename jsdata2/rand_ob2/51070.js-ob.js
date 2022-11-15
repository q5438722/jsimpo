'use strict';
const _0x4b18 = [
    '348002qMllwq',
    '46781pbfcDw',
    '6pttPWE',
    '453984DngatC',
    '1621ZCyWJv',
    '166CWOkrJ',
    '88816zPhRqo',
    '358959YYlPLI',
    'createBenchmark',
    'fill',
    'start',
    'concat',
    'end',
    '73155nEOfxY'
];
const _0x46ce4e = _0x5cf7;
(function (_0x314ded, _0x25825f) {
    const _0xcf0b90 = _0x5cf7;
    while (!![]) {
        try {
            const _0x53da6b = -parseInt(_0xcf0b90(0x10e)) + parseInt(_0xcf0b90(0x10f)) + -parseInt(_0xcf0b90(0x110)) * parseInt(_0xcf0b90(0x111)) + -parseInt(_0xcf0b90(0x112)) + -parseInt(_0xcf0b90(0x113)) * -parseInt(_0xcf0b90(0x114)) + parseInt(_0xcf0b90(0x115)) + parseInt(_0xcf0b90(0x116));
            if (_0x53da6b === _0x25825f)
                break;
            else
                _0x314ded['push'](_0x314ded['shift']());
        } catch (_0x5312ad) {
            _0x314ded['push'](_0x314ded['shift']());
        }
    }
}(_0x4b18, 0x3ec0e));
const common = require('../common.js'), bench = common[_0x46ce4e(0x117)](main, {
        'extraSize': [
            0x1,
            0x100,
            0x4 * 0x100
        ],
        'n': [0xc3500]
    });
function _0x5cf7(_0x4bcae6, _0x4386ff) {
    return _0x5cf7 = function (_0x4b18a6, _0x5cf71c) {
        _0x4b18a6 = _0x4b18a6 - 0x10e;
        let _0x58e3a8 = _0x4b18[_0x4b18a6];
        return _0x58e3a8;
    }, _0x5cf7(_0x4bcae6, _0x4386ff);
}
function main({
    n: _0xb2764a,
    extraSize: _0x4607af
}) {
    const _0x259512 = _0x46ce4e, _0x4170ac = 0x4, _0x81200c = 0x100, _0x361764 = Array['from']({ 'length': _0x4170ac })[_0x259512(0x118)](Buffer['allocUnsafe'](_0x81200c)), _0x52f8d0 = _0x4170ac * _0x81200c + _0x4607af;
    bench[_0x259512(0x119)]();
    for (let _0x50adfb = 0x0; _0x50adfb < _0xb2764a; _0x50adfb++) {
        Buffer[_0x259512(0x11a)](_0x361764, _0x52f8d0);
    }
    bench[_0x259512(0x11b)](_0xb2764a);
}
