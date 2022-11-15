'use strict';

const _0x1023 = ['write', 'ionEW', 'listen', 'mustCall', 'error', 'keep-alive', 'address', 'port', 'close', 'cGvGX', 'DicEk', 'expectsError', 'ECONNRESET', 'get', 'toGmz', 'destroy', 'LCSlW', '65bGzgMf', '4226tpIbfV', '249686rHIoHu', '2XzhHca', '95ZUQoim', '7837DoCLAU', '4233QvTrfn', '241FDhYzn', '132SDGqNt', '6578CLeJXv', '86938TgpRqe', '5cxyifg', '1466152sLGMrv', '../common', 'http', 'Server', 'Part of my res.'];

function _0x24af(_0x12af6c, _0x208c96) {
    return _0x24af = function (_0x44332b, _0x2ec538) {
        _0x44332b = _0x44332b - 442;
        const _0x58f13d = _0x1023[_0x44332b];

        return _0x58f13d;
    }, _0x24af(_0x12af6c, _0x208c96);
}
const _0x3ecdc1 = _0x24af;

(function (_0x599101, _0x4fbf84) {
    const _0x5125ae = _0x24af;

    while (true) {
        try {
            const _0x1de1b3 = parseInt(_0x5125ae(0x1ba)) * parseInt(_0x5125ae(0x1bb)) + -parseInt(_0x5125ae(0x1bc)) * -parseInt(_0x5125ae(0x1bd)) + parseInt(_0x5125ae(0x1be)) * parseInt(_0x5125ae(0x1bf)) + -parseInt(_0x5125ae(0x1c0)) * -parseInt(_0x5125ae(0x1c1)) + parseInt(_0x5125ae(0x1c2)) * -parseInt(_0x5125ae(0x1c3)) + -parseInt(_0x5125ae(0x1c4)) * -parseInt(_0x5125ae(0x1c5)) + -parseInt(_0x5125ae(0x1c6));

            if (_0x1de1b3 === _0x4fbf84) break;else _0x599101.push(_0x599101.shift());
        } catch (_0x1505d8) {
            _0x599101.push(_0x599101.shift());
        }
    }
})(_0x1023, 638972);

const common = require(_0x3ecdc1(0x1c7));

const http = require(_0x3ecdc1(0x1c8));

{
    var serverRes;

    const server = http[_0x3ecdc1(0x1c9)](function (_0x27d7c8, _0x2f6d80) {
        const _0x24f039 = _0x3ecdc1;
        const _0x2f16e0 = { 'ionEW': _0x24f039(0x1ca) };

        _0x2f6d80[_0x24f039(0x1cb)](_0x2f16e0[_0x24f039(0x1cc)]), serverRes = _0x2f6d80;
    });

    server[_0x3ecdc1(0x1cd)](0, common[_0x3ecdc1(0x1ce)](function () {
        const _0x10390a = _0x3ecdc1;
        const _0x21f0e6 = {
            'cGvGX': 'aborted',
            'DicEk': _0x10390a(0x1cf),
            'iEwfX': _0x10390a(0x1d0)
        };

        http.get({
            'port': this[_0x10390a(0x1d1)]()[_0x10390a(0x1d2)],
            'headers': { 'connection': _0x21f0e6.iEwfX }
        }, common[_0x10390a(0x1ce)](function (_0x3d77ee) {
            const _0x32b948 = _0x10390a;

            server[_0x32b948(0x1d3)](), serverRes.destroy(), _0x3d77ee.on(_0x21f0e6[_0x32b948(0x1d4)], common[_0x32b948(0x1ce)]()), _0x3d77ee.on(_0x21f0e6[_0x32b948(0x1d5)], common[_0x32b948(0x1d6)]({ 'code': _0x32b948(0x1d7) }));
        }));
    }));
}
{
    var serverRes;
    const server = http.Server(function (_0x2d34d4, _0xf50754) {
        const _0x20a750 = _0x3ecdc1;

        _0xf50754[_0x20a750(0x1cb)]('Part of my res.'), serverRes = _0xf50754;
    });

    server[_0x3ecdc1(0x1cd)](0, common.mustCall(function () {
        const _0x258965 = _0x3ecdc1;
        const _0xa961b4 = {
            'LCSlW': 'aborted',
            'toGmz': 'keep-alive'
        };

        http[_0x258965(0x1d8)]({
            'port': this[_0x258965(0x1d1)]().port,
            'headers': { 'connection': _0xa961b4[_0x258965(0x1d9)] }
        }, common[_0x258965(0x1ce)](function (_0x44101e) {
            const _0x8c8827 = _0x258965;

            server[_0x8c8827(0x1d3)](), serverRes[_0x8c8827(0x1da)](), _0x44101e.on(_0xa961b4[_0x8c8827(0x1db)], common[_0x8c8827(0x1ce)]());
        }));
    }));
}
