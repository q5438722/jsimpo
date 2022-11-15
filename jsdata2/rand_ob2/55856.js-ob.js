'use strict';
const _0x1706 = [
    '5IBkEWp',
    'assert',
    'allocUnsafe',
    'length',
    'close',
    'data',
    'strictEqual',
    'mustCall',
    'writeHead',
    'write',
    'thanks',
    'end',
    'listen',
    'request',
    'address',
    'POST',
    'setEncoding',
    'utf8',
    '772915YUapSQ',
    '1377407JNVqgt',
    '1QfMtlw',
    '631393rsLwsh',
    '406466FADShh',
    '698SnNlTz',
    '1708FTIvsR',
    '445573AZVJnX',
    '2KTtIUj',
    '274283nxpPJs'
];
const _0x3c7d2a = _0x5734;
(function (_0x11da52, _0x113c28) {
    const _0x2ef49b = _0x5734;
    while (!![]) {
        try {
            const _0x2d529d = parseInt(_0x2ef49b(0x190)) + -parseInt(_0x2ef49b(0x191)) * -parseInt(_0x2ef49b(0x192)) + parseInt(_0x2ef49b(0x193)) + -parseInt(_0x2ef49b(0x194)) + parseInt(_0x2ef49b(0x195)) * -parseInt(_0x2ef49b(0x196)) + -parseInt(_0x2ef49b(0x197)) * -parseInt(_0x2ef49b(0x198)) + -parseInt(_0x2ef49b(0x199)) * parseInt(_0x2ef49b(0x19a));
            if (_0x2d529d === _0x113c28)
                break;
            else
                _0x11da52['push'](_0x11da52['shift']());
        } catch (_0x373be9) {
            _0x11da52['push'](_0x11da52['shift']());
        }
    }
}(_0x1706, 0xab94c));
const common = require('../common'), assert = require(_0x3c7d2a(0x19b)), http = require('http'), bufferSize = 0x5 * 0x400 * 0x400;
let measuredSize = 0x0;
const buffer = Buffer[_0x3c7d2a(0x19c)](bufferSize);
function _0x5734(_0x4d1126, _0x222907) {
    return _0x5734 = function (_0x170642, _0x5734c0) {
        _0x170642 = _0x170642 - 0x190;
        let _0xf65bb7 = _0x1706[_0x170642];
        return _0xf65bb7;
    }, _0x5734(_0x4d1126, _0x222907);
}
for (let i = 0x0; i < buffer[_0x3c7d2a(0x19d)]; i++) {
    buffer[i] = i % 0x100;
}
const server = http['Server'](function (_0x5740c4, _0x473e5d) {
    const _0x2ea1c0 = _0x3c7d2a;
    server[_0x2ea1c0(0x19e)]();
    let _0x35dfa9 = 0x0;
    _0x5740c4['on'](_0x2ea1c0(0x19f), _0x1824c0 => {
        const _0x21720f = _0x2ea1c0;
        measuredSize += _0x1824c0[_0x21720f(0x19d)];
        for (let _0x1cfb2a = 0x0; _0x1cfb2a < _0x1824c0['length']; _0x1cfb2a++) {
            assert[_0x21720f(0x1a0)](_0x1824c0[_0x1cfb2a], buffer[_0x35dfa9]), _0x35dfa9++;
        }
    }), _0x5740c4['on']('end', common[_0x2ea1c0(0x1a1)](() => {
        const _0x26ff29 = _0x2ea1c0;
        assert['strictEqual'](measuredSize, bufferSize), _0x473e5d[_0x26ff29(0x1a2)](0xc8), _0x473e5d[_0x26ff29(0x1a3)](_0x26ff29(0x1a4)), _0x473e5d[_0x26ff29(0x1a5)]();
    }));
});
server[_0x3c7d2a(0x1a6)](0x0, common['mustCall'](() => {
    const _0x280b73 = _0x3c7d2a, _0x220d8b = http[_0x280b73(0x1a7)]({
            'port': server[_0x280b73(0x1a8)]()['port'],
            'method': _0x280b73(0x1a9),
            'path': '/',
            'headers': { 'content-length': buffer['length'] }
        }, common[_0x280b73(0x1a1)](_0x1a45dd => {
            const _0x313940 = _0x280b73;
            _0x1a45dd[_0x313940(0x1aa)](_0x313940(0x1ab));
            let _0x4d1944 = '';
            _0x1a45dd['on']('data', _0x535d6b => _0x4d1944 += _0x535d6b), _0x1a45dd['on']('end', common['mustCall'](() => {
                const _0x3b94e2 = _0x313940;
                assert[_0x3b94e2(0x1a0)](_0x4d1944, 'thanks');
            }));
        }));
    _0x220d8b[_0x280b73(0x1a5)](buffer);
}));
