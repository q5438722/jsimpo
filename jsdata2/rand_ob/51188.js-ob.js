'use strict';
const _0x8383 = [
    '22447AAoDct',
    '2yaGvnQ',
    '156745mvwTRV',
    '112737VlDWFp',
    '4WUPhrl',
    '../common.js',
    '\x0a\x20\x20var\x20b\x20=\x20Math.random();\x0a\x20\x20var\x20c\x20=\x20a\x20+\x20b;\x0a',
    'start',
    'oYASn',
    'createContext',
    'end',
    'runInContext',
    '33811FwDBvd',
    '1wsptKy',
    '66377QohrMA',
    '1eMDTnI',
    '173819WJQWnS',
    '3907TTHQne'
];
const _0x5ad8f7 = _0x3d75;
(function (_0x21f549, _0x45e272) {
    const _0x5812d1 = _0x3d75;
    while (!![]) {
        try {
            const _0x807915 = -parseInt(_0x5812d1(0x196)) * parseInt(_0x5812d1(0x197)) + parseInt(_0x5812d1(0x198)) * parseInt(_0x5812d1(0x199)) + -parseInt(_0x5812d1(0x19a)) + -parseInt(_0x5812d1(0x19b)) + -parseInt(_0x5812d1(0x19c)) * parseInt(_0x5812d1(0x19d)) + -parseInt(_0x5812d1(0x19e)) + parseInt(_0x5812d1(0x19f)) * parseInt(_0x5812d1(0x1a0));
            if (_0x807915 === _0x45e272)
                break;
            else
                _0x21f549['push'](_0x21f549['shift']());
        } catch (_0x5a23cc) {
            _0x21f549['push'](_0x21f549['shift']());
        }
    }
}(_0x8383, 0x17 * 0x2114 + -0x27ecb * -0x1 + -0x3e0c2));
const common = require(_0x5ad8f7(0x1a1)), bench = common['createBenchmark'](main, { 'n': [-0x2ca + 0x1035 * -0x1 + 0x2c5 * 0x7] }), vm = require('vm'), ctxFn = new vm['Script'](_0x5ad8f7(0x1a2));
function _0x3d75(_0x1bad66, _0x3cbacd) {
    return _0x3d75 = function (_0x2170e4, _0x2a221b) {
        _0x2170e4 = _0x2170e4 - (0x12bb + 0x1e7 * -0xf + 0xb64);
        let _0x1ef182 = _0x8383[_0x2170e4];
        return _0x1ef182;
    }, _0x3d75(_0x1bad66, _0x3cbacd);
}
function main({n: _0x299d84}) {
    const _0x111a86 = _0x5ad8f7, _0xf8086a = {
            'oYASn': function (_0x7a8f81, _0x305b8c) {
                return _0x7a8f81 < _0x305b8c;
            }
        };
    bench[_0x111a86(0x1a3)]();
    let _0x5c41cc;
    for (let _0x105d97 = 0x2312 + 0xf37 + -0x3249; _0xf8086a[_0x111a86(0x1a4)](_0x105d97, _0x299d84); _0x105d97++) {
        _0x5c41cc = vm[_0x111a86(0x1a5)]({ 'a': 'a' });
    }
    bench[_0x111a86(0x1a6)](_0x299d84), ctxFn[_0x111a86(0x1a7)](_0x5c41cc);
}
