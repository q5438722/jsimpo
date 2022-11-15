'use strict';
const _0x1721 = [
    '229260OxjRKk',
    '471984RqIRBB',
    '500409CBTOXO',
    '131RzlfVg',
    '6221kCBltl',
    '299158cPpboC',
    '2JNunyM',
    '240440fuTaxk',
    '2GZIhDl',
    '../common',
    'hasCrypto',
    'skip',
    'http2',
    'tls',
    'createSecureServer',
    'readKey',
    'rsa_private.pem',
    'rsa_cert.crt',
    'close',
    'mustCall',
    'address',
    'port',
    'bogus',
    '9kIGISH',
    '20001XAktha'
];
const _0x1ed4c9 = _0x5e50;
(function (_0x318e73, _0x555131) {
    const _0x265733 = _0x5e50;
    while (!![]) {
        try {
            const _0x2a4b81 = parseInt(_0x265733(0x19c)) * parseInt(_0x265733(0x19d)) + -parseInt(_0x265733(0x19e)) + parseInt(_0x265733(0x19f)) + -parseInt(_0x265733(0x1a0)) + -parseInt(_0x265733(0x1a1)) * -parseInt(_0x265733(0x1a2)) + parseInt(_0x265733(0x1a3)) * -parseInt(_0x265733(0x1a4)) + -parseInt(_0x265733(0x1a5)) * -parseInt(_0x265733(0x1a6));
            if (_0x2a4b81 === _0x555131)
                break;
            else
                _0x318e73['push'](_0x318e73['shift']());
        } catch (_0x203193) {
            _0x318e73['push'](_0x318e73['shift']());
        }
    }
}(_0x1721, 0x9753f));
const common = require(_0x1ed4c9(0x1a7)), fixtures = require('../common/fixtures');
function _0x5e50(_0x173b8e, _0x428592) {
    return _0x5e50 = function (_0x172137, _0x5e50ab) {
        _0x172137 = _0x172137 - 0x19c;
        let _0x1b5502 = _0x1721[_0x172137];
        return _0x1b5502;
    }, _0x5e50(_0x173b8e, _0x428592);
}
if (!common[_0x1ed4c9(0x1a8)])
    common[_0x1ed4c9(0x1a9)]('missing\x20crypto');
const h2 = require(_0x1ed4c9(0x1aa)), tls = require(_0x1ed4c9(0x1ab)), server = h2[_0x1ed4c9(0x1ac)]({
        'key': fixtures[_0x1ed4c9(0x1ad)](_0x1ed4c9(0x1ae)),
        'cert': fixtures[_0x1ed4c9(0x1ad)](_0x1ed4c9(0x1af)),
        'unknownProtocolTimeout': 0x1f4,
        'allowHalfOpen': !![]
    });
server['on']('connection', _0x1d8d13 => {
    const _0x3a5d7c = _0x1ed4c9;
    _0x1d8d13['on'](_0x3a5d7c(0x1b0), common[_0x3a5d7c(0x1b1)](() => {
        const _0x2f242c = _0x3a5d7c;
        server[_0x2f242c(0x1b0)]();
    }));
}), server['listen'](0x0, function () {
    const _0x4338cb = _0x1ed4c9;
    tls['connect']({
        'port': server[_0x4338cb(0x1b2)]()[_0x4338cb(0x1b3)],
        'rejectUnauthorized': ![],
        'ALPNProtocols': [_0x4338cb(0x1b4)]
    });
});
