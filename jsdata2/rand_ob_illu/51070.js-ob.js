'use strict';

const _0x3c1e = ['1VslmZc', '844knThcg', '1043qvJvvC', '3448WtSLzG', '159LZJMxE', '656926IClPOZ', '616832kdlScW', '818298AVQjzp', '1557384dMRqOn', '../common.js', 'from', 'fill', 'allocUnsafe', 'oRbSk', 'concat', 'end', '406189chqhRU'];
const _0x622373 = _0x3e6e;

(function (_0x142972, _0xe745db) {
    const _0x383526 = _0x3e6e;

    while (true) {
        try {
            const _0x530aea = parseInt(_0x383526(0x11a)) * -parseInt(_0x383526(0x11b)) + -parseInt(_0x383526(0x11c)) * -parseInt(_0x383526(0x11d)) + -parseInt(_0x383526(0x11e)) * -parseInt(_0x383526(0x11f)) + -parseInt(_0x383526(0x120)) + -parseInt(_0x383526(0x121)) + -parseInt(_0x383526(0x122)) + parseInt(_0x383526(0x123));

            if (_0x530aea === _0xe745db) break;else _0x142972.push(_0x142972.shift());
        } catch (_0xa9b8e8) {
            _0x142972.push(_0x142972.shift());
        }
    }
})(_0x3c1e, 487663);

const common = require(_0x622373(0x124));

const bench = common.createBenchmark(main, {
    'extraSize': [1, 256, 1024],
    'n': [800000]
});

function _0x3e6e(_0x21d5cb, _0x2d2c7e) {
    return _0x3e6e = function (_0x5bb043, _0x362cf8) {
        _0x5bb043 = _0x5bb043 - 282;
        const _0x3edd1a = _0x3c1e[_0x5bb043];

        return _0x3edd1a;
    }, _0x3e6e(_0x21d5cb, _0x2d2c7e);
}
function main({
    n: _0x29c6a9,
    extraSize: _0x52213c
}) {
    const _0x4e5090 = _0x622373;
    const _0x1516fa = {
        'oRbSk': function (_0x583dc7, _0x3dbdc4) {
            return _0x583dc7 * _0x3dbdc4;
        }
    };
    const _0x36a0fc = 4;
    const _0x2a383d = 256;

    const _0x356cab = Array[_0x4e5090(0x125)]({ 'length': _0x36a0fc })[_0x4e5090(0x126)](Buffer[_0x4e5090(0x127)](_0x2a383d));

    const _0x4924af = _0x1516fa[_0x4e5090(0x128)](_0x36a0fc, _0x2a383d) + _0x52213c;

    bench.start();
    for (let _0x1b86da = 0; _0x1b86da < _0x29c6a9; _0x1b86da++) {
        Buffer[_0x4e5090(0x129)](_0x356cab, _0x4924af);
    }
    bench[_0x4e5090(0x12a)](_0x29c6a9);
}
