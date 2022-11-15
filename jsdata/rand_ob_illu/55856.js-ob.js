'use strict';

const _0x2353 = ['1030428liIzsG', '438147uccwyB', '5XiTKRs', '181739rwYgzs', '1598DoiwvI', '3101nhJrcA', '../common', 'assert', 'http', 'allocUnsafe', 'length', 'thanks', 'data', 'end', 'close', 'strictEqual', 'writeHead', 'write', 'BQBUK', 'mustCall', 'POST', 'address', 'port', 'cNpcj', 'setEncoding', 'WEBVq', 'uwfWk', '757002ASLgYt', '37rOMDJQ', '26623vxrlbT', '18650iTrYZy', '47wAhZxY'];

function _0x4eb5(_0x5017f7, _0x237533) {
    return _0x4eb5 = function (_0x42ac01, _0x14f71d) {
        _0x42ac01 = _0x42ac01 - 125;
        const _0x341d96 = _0x2353[_0x42ac01];

        return _0x341d96;
    }, _0x4eb5(_0x5017f7, _0x237533);
}
const _0x6046f9 = _0x4eb5;

(function (_0xc8e508, _0x50f143) {
    const _0xcd483f = _0x4eb5;

    while (true) {
        try {
            const _0x35c5c5 = -parseInt(_0xcd483f(0x7d)) + -parseInt(_0xcd483f(0x7e)) * parseInt(_0xcd483f(0x7f)) + -parseInt(_0xcd483f(0x80)) * parseInt(_0xcd483f(0x81)) + -parseInt(_0xcd483f(0x82)) + parseInt(_0xcd483f(0x83)) + -parseInt(_0xcd483f(0x84)) * parseInt(_0xcd483f(0x85)) + parseInt(_0xcd483f(0x86)) * parseInt(_0xcd483f(0x87));

            if (_0x35c5c5 === _0x50f143) break;else _0xc8e508.push(_0xc8e508.shift());
        } catch (_0x3aa004) {
            _0xc8e508.push(_0xc8e508.shift());
        }
    }
})(_0x2353, 835819);

const common = require(_0x6046f9(0x88));

const assert = require(_0x6046f9(0x89));

const http = require(_0x6046f9(0x8a));

const bufferSize = 5242880;
var measuredSize = 0;

const buffer = Buffer[_0x6046f9(0x8b)](bufferSize);

// Unevaluable loop test expression
for (let i = 0; i < buffer[_0x6046f9(0x8c)]; i++) {
    buffer[i] = i % 256;
}
const server = http.Server(function (_0xc95f24, _0x418138) {
    const _0x21e9fd = _0x6046f9;
    const _0x502f9e = {
        'BQBUK': _0x21e9fd(0x8d),
        'FSuiY': _0x21e9fd(0x8e),
        'KFRcO': _0x21e9fd(0x8f)
    };

    server[_0x21e9fd(0x90)]();
    var _0x5c75c1 = 0;

    _0xc95f24.on(_0x502f9e.FSuiY, _0x239f4e => {
        const _0x2c1d6d = _0x21e9fd;

        measuredSize += _0x239f4e[_0x2c1d6d(0x8c)];
        for (let _0x36248c = 0; _0x36248c < _0x239f4e[_0x2c1d6d(0x8c)]; _0x36248c++) {
            assert[_0x2c1d6d(0x91)](_0x239f4e[_0x36248c], buffer[_0x5c75c1]), _0x5c75c1++;
        }
    }), _0xc95f24.on(_0x502f9e.KFRcO, common.mustCall(() => {
        const _0xe23c0d = _0x21e9fd;

        assert[_0xe23c0d(0x91)](measuredSize, bufferSize), _0x418138[_0xe23c0d(0x92)](200), _0x418138[_0xe23c0d(0x93)](_0x502f9e[_0xe23c0d(0x94)]), _0x418138[_0xe23c0d(0x8f)]();
    }));
});

server.listen(0, common[_0x6046f9(0x95)](() => {
    const _0xc76062 = _0x6046f9;
    const _0x50adad = {
        'OjtMO': _0xc76062(0x8d),
        'WEBVq': 'utf8',
        'eudaE': _0xc76062(0x8e),
        'uwfWk': _0xc76062(0x8f),
        'cNpcj': _0xc76062(0x96)
    };

    const _0x5959eb = http.request({
        'port': server[_0xc76062(0x97)]()[_0xc76062(0x98)],
        'method': _0x50adad[_0xc76062(0x99)],
        'path': '/',
        'headers': { 'content-length': buffer[_0xc76062(0x8c)] }
    }, common[_0xc76062(0x95)](_0x153cb2 => {
        const _0x37fc8e = _0xc76062;

        _0x153cb2[_0x37fc8e(0x9a)](_0x50adad[_0x37fc8e(0x9b)]);
        var _0x2e6852 = '';

        _0x153cb2.on(_0x50adad.eudaE, _0x5b55c4 => _0x2e6852 += _0x5b55c4), _0x153cb2.on(_0x50adad[_0x37fc8e(0x9c)], common.mustCall(() => {
            const _0x452675 = _0x37fc8e;

            assert[_0x452675(0x91)](_0x2e6852, _0x50adad.OjtMO);
        }));
    }));

    _0x5959eb.end(buffer);
}));
