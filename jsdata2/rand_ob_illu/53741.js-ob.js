'use strict';

const _0x4947 = ['connection', 'ZSmHo', 'mustCall', 'close', 'connect', 'address', 'port', 'bogus', '1vpdsAd', '274609edHVTU', '3vbmBrQ', '31666QsJSyK', '869BhALIE', '97wqemmn', '33422HXnimG', '1717LoLsga', '80QaXgFf', '1kymWWu', '123679LFSnQE', '253899DDqRjV', '../common', '../common/fixtures', 'skip', 'missing crypto', 'http2', 'tls', 'createSecureServer', 'rsa_private.pem', 'readKey', 'rsa_cert.crt'];

function _0x3eec(_0x2fa50b, _0x486630) {
    return _0x3eec = function (_0x19b4fa, _0x1e6039) {
        _0x19b4fa = _0x19b4fa - 363;
        const _0x312c38 = _0x4947[_0x19b4fa];

        return _0x312c38;
    }, _0x3eec(_0x2fa50b, _0x486630);
}
const _0x55b03e = _0x3eec;

(function (_0x14e51a, _0x21db35) {
    const _0x1008b4 = _0x3eec;

    while (true) {
        try {
            const _0x52f19c = -parseInt(_0x1008b4(0x16b)) * -parseInt(_0x1008b4(0x16c)) + parseInt(_0x1008b4(0x16d)) * parseInt(_0x1008b4(0x16e)) + parseInt(_0x1008b4(0x16f)) * parseInt(_0x1008b4(0x170)) + -parseInt(_0x1008b4(0x171)) + parseInt(_0x1008b4(0x172)) * -parseInt(_0x1008b4(0x173)) + parseInt(_0x1008b4(0x174)) * parseInt(_0x1008b4(0x175)) + -parseInt(_0x1008b4(0x176));

            if (_0x52f19c === _0x21db35) break;else _0x14e51a.push(_0x14e51a.shift());
        } catch (_0x3eb34e) {
            _0x14e51a.push(_0x14e51a.shift());
        }
    }
})(_0x4947, 152898);

const common = require(_0x55b03e(0x177));

const fixtures = require(_0x55b03e(0x178));

if (!common.hasCrypto) common[_0x55b03e(0x179)](_0x55b03e(0x17a));

const h2 = require(_0x55b03e(0x17b));

const tls = require(_0x55b03e(0x17c));

const server = h2[_0x55b03e(0x17d)]({
    'key': fixtures.readKey(_0x55b03e(0x17e)),
    'cert': fixtures[_0x55b03e(0x17f)](_0x55b03e(0x180)),
    'unknownProtocolTimeout': 0x1f4,
    'allowHalfOpen': true
});

server.on(_0x55b03e(0x181), _0x3dfb6b => {
    const _0x50c435 = _0x55b03e;
    const _0x12b070 = { 'ZSmHo': 'close' };

    _0x3dfb6b.on(_0x12b070[_0x50c435(0x182)], common[_0x50c435(0x183)](() => {
        const _0x9aae13 = _0x50c435;

        server[_0x9aae13(0x184)]();
    }));
}), server.listen(0, function () {
    const _0x5a6a55 = _0x55b03e;

    tls[_0x5a6a55(0x185)]({
        'port': server[_0x5a6a55(0x186)]()[_0x5a6a55(0x187)],
        'rejectUnauthorized': false,
        'ALPNProtocols': [_0x5a6a55(0x188)]
    });
});
