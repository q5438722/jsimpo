'use strict';
const _0xb73b = [
    'rsa_cert.crt',
    'connection',
    'mustCall',
    'close',
    'address',
    'port',
    'bogus',
    '405904zvEXUS',
    '44477yJbAsB',
    '2tqJHta',
    '2508ATjoXj',
    '147881yxrAyO',
    '1orCHaf',
    '404804slIfXa',
    '161531ihXUYx',
    '1totqTh',
    '680364cUeZpT',
    '../common',
    '../common/fixtures',
    'skip',
    'missing\x20crypto',
    'http2',
    'tls',
    'readKey'
];
const _0x2cb232 = _0x4988;
(function (_0x5d7226, _0x3dca01) {
    const _0x3fe95b = _0x4988;
    while (!![]) {
        try {
            const _0x176673 = parseInt(_0x3fe95b(0xb7)) + parseInt(_0x3fe95b(0xb8)) * parseInt(_0x3fe95b(0xb9)) + -parseInt(_0x3fe95b(0xba)) + parseInt(_0x3fe95b(0xbb)) * parseInt(_0x3fe95b(0xbc)) + parseInt(_0x3fe95b(0xbd)) + -parseInt(_0x3fe95b(0xbe)) * parseInt(_0x3fe95b(0xbf)) + -parseInt(_0x3fe95b(0xc0));
            if (_0x176673 === _0x3dca01)
                break;
            else
                _0x5d7226['push'](_0x5d7226['shift']());
        } catch (_0x48d4b5) {
            _0x5d7226['push'](_0x5d7226['shift']());
        }
    }
}(_0xb73b, 0x31984));
const common = require(_0x2cb232(0xc1)), fixtures = require(_0x2cb232(0xc2));
if (!common['hasCrypto'])
    common[_0x2cb232(0xc3)](_0x2cb232(0xc4));
function _0x4988(_0x261234, _0x1e1f8d) {
    return _0x4988 = function (_0xb73b5f, _0x498890) {
        _0xb73b5f = _0xb73b5f - 0xb7;
        let _0x4eabc8 = _0xb73b[_0xb73b5f];
        return _0x4eabc8;
    }, _0x4988(_0x261234, _0x1e1f8d);
}
const h2 = require(_0x2cb232(0xc5)), tls = require(_0x2cb232(0xc6)), server = h2['createSecureServer']({
        'key': fixtures[_0x2cb232(0xc7)]('rsa_private.pem'),
        'cert': fixtures['readKey'](_0x2cb232(0xc8)),
        'unknownProtocolTimeout': 0x1f4,
        'allowHalfOpen': !![]
    });
server['on'](_0x2cb232(0xc9), _0x10d3ff => {
    const _0x557a70 = _0x2cb232;
    _0x10d3ff['on']('close', common[_0x557a70(0xca)](() => {
        const _0x44144a = _0x557a70;
        server[_0x44144a(0xcb)]();
    }));
}), server['listen'](0x0, function () {
    const _0x935667 = _0x2cb232;
    tls['connect']({
        'port': server[_0x935667(0xcc)]()[_0x935667(0xcd)],
        'rejectUnauthorized': ![],
        'ALPNProtocols': [_0x935667(0xce)]
    });
});
