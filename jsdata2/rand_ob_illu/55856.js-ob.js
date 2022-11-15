'use strict';

const _0x33dd = ['IJokt', 'end', '2rmtjBV', '444073FYIagN', '959756sHdMZp', '98lERtvz', '1049VRVjoc', '265392xtJDVU', '958916sYPgTJ', '1ysaxKW', '299681Hewywx', '385625kPFBFB', 'assert', 'allocUnsafe', 'length', 'Server', 'close', 'data', 'iUQSs', 'strictEqual', 'wYIwK', 'mustCall', 'writeHead', 'utf8', 'POST', 'request', 'port', 'BOOtO', 'setEncoding', 'ckpvt', 'bMhuZ'];
const _0x45cb28 = _0x3f10;

(function (_0x1fedc5, _0x3e1588) {
    const _0x41121c = _0x3f10;

    while (true) {
        try {
            const _0x226813 = -parseInt(_0x41121c(0x72)) * parseInt(_0x41121c(0x73)) + parseInt(_0x41121c(0x74)) + parseInt(_0x41121c(0x75)) * -parseInt(_0x41121c(0x76)) + parseInt(_0x41121c(0x77)) + parseInt(_0x41121c(0x78)) + -parseInt(_0x41121c(0x79)) * parseInt(_0x41121c(0x7a)) + -parseInt(_0x41121c(0x7b));

            if (_0x226813 === _0x3e1588) break;else _0x1fedc5.push(_0x1fedc5.shift());
        } catch (_0x4258a4) {
            _0x1fedc5.push(_0x1fedc5.shift());
        }
    }
})(_0x33dd, 507810);

const common = require('../common');

const assert = require(_0x45cb28(0x7c));

const http = require('http');

const bufferSize = 5242880;
var measuredSize = 0;

const buffer = Buffer[_0x45cb28(0x7d)](bufferSize);

// Unevaluable loop test expression
for (let i = 0; i < buffer[_0x45cb28(0x7e)]; i++) {
    buffer[i] = i % 256;
}

const server = http[_0x45cb28(0x7f)](function (_0x455e79, _0x1e7d56) {
    const _0x263534 = _0x45cb28;
    const _0x530c64 = {
        'iUQSs': function (_0x49bcb6, _0x3e8803) {
            return _0x49bcb6 < _0x3e8803;
        },
        'wYIwK': 'end'
    };

    server[_0x263534(0x80)]();
    var _0x39fde2 = 0;

    _0x455e79.on(_0x263534(0x81), _0x3dcd2b => {
        const _0x3c04fc = _0x263534;

        measuredSize += _0x3dcd2b[_0x3c04fc(0x7e)];
        for (let _0x51ae8c = 0; _0x530c64[_0x3c04fc(0x82)](_0x51ae8c, _0x3dcd2b.length); _0x51ae8c++) {
            assert[_0x3c04fc(0x83)](_0x3dcd2b[_0x51ae8c], buffer[_0x39fde2]), _0x39fde2++;
        }
    }), _0x455e79.on(_0x530c64[_0x263534(0x84)], common[_0x263534(0x85)](() => {
        const _0x29c9f7 = _0x263534;

        assert[_0x29c9f7(0x83)](measuredSize, bufferSize), _0x1e7d56[_0x29c9f7(0x86)](200), _0x1e7d56.write('thanks'), _0x1e7d56.end();
    }));
});

function _0x3f10(_0x4a14ba, _0x5f2bd5) {
    return _0x3f10 = function (_0x113265, _0x5234b5) {
        _0x113265 = _0x113265 - 114;
        const _0xe4d57a = _0x33dd[_0x113265];

        return _0xe4d57a;
    }, _0x3f10(_0x4a14ba, _0x5f2bd5);
}
server.listen(0, common.mustCall(() => {
    const _0x207800 = _0x45cb28;
    const _0x5efed4 = {
        'ckpvt': _0x207800(0x87),
        'bMhuZ': 'data',
        'IJokt': 'end',
        'BOOtO': _0x207800(0x88)
    };

    const _0x2b4cf4 = http[_0x207800(0x89)]({
        'port': server.address()[_0x207800(0x8a)],
        'method': _0x5efed4[_0x207800(0x8b)],
        'path': '/',
        'headers': { 'content-length': buffer[_0x207800(0x7e)] }
    }, common[_0x207800(0x85)](_0x12c207 => {
        const _0x1cb679 = _0x207800;

        _0x12c207[_0x1cb679(0x8c)](_0x5efed4[_0x1cb679(0x8d)]);
        var _0x854673 = '';

        _0x12c207.on(_0x5efed4[_0x1cb679(0x8e)], _0x3ee3ba => _0x854673 += _0x3ee3ba), _0x12c207.on(_0x5efed4[_0x1cb679(0x8f)], common[_0x1cb679(0x85)](() => {
            const _0x19bdda = _0x1cb679;

            assert[_0x19bdda(0x83)](_0x854673, 'thanks');
        }));
    }));

    _0x2b4cf4[_0x207800(0x90)](buffer);
}));
