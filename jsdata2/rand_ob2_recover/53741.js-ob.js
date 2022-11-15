const common = require(_0x2cb232(193)), fixtures = require(_0x2cb232(194));
if (!common['hasCrypto'])
    common[_0x2cb232(195)](_0x2cb232(196));
function _0x4988(_0x261234, _0x1e1f8d) {
    return _0x4988 = function (_0xb73b5f, _0x498890) {
        _0xb73b5f = _0xb73b5f - 183;
        let _0x4eabc8 = _0xb73b[_0xb73b5f];
        return _0x4eabc8;
    }, _0x4988(_0x261234, _0x1e1f8d);
}
const h2 = require(_0x2cb232(197)), tls = require(_0x2cb232(198)), server = h2['createSecureServer']({
        'key': fixtures[_0x2cb232(199)]('rsa_private.pem'),
        'cert': fixtures['readKey'](_0x2cb232(200)),
        'unknownProtocolTimeout': 500,
        'allowHalfOpen': !![]
    });
server['on'](_0x2cb232(201), _0x10d3ff => {
    const _0x557a70 = _0x2cb232;
    _0x10d3ff['on']('close', common[_0x557a70(202)](() => {
        const _0x44144a = _0x557a70;
        server[_0x44144a(203)]();
    }));
}), server['listen'](0, function () {
    const _0x935667 = _0x2cb232;
    tls['connect']({
        'port': server[_0x935667(204)]()[_0x935667(205)],
        'rejectUnauthorized': ![],
        'ALPNProtocols': [_0x935667(206)]
    });
});