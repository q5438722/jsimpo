function _0x38f5(_0x688e4f, _0x25e8fe) {
    return _0x38f5 = function (_0x34bc93, _0x2b42a6) {
        _0x34bc93 = _0x34bc93 - (-6827 + 83 * 20 + 5556);
        let _0x1c4193 = _0x2949[_0x34bc93];
        return _0x1c4193;
    }, _0x38f5(_0x688e4f, _0x25e8fe);
}
const common = require(_0x208615(401)), fixtures = require(_0x208615(402));
if (!common['hasCrypto'])
    common[_0x208615(403)](_0x208615(404));
const h2 = require(_0x208615(405)), tls = require('tls'), server = h2['createSecureServer']({
        'key': fixtures[_0x208615(406)]('rsa_private.pem'),
        'cert': fixtures[_0x208615(406)]('rsa_cert.crt'),
        'unknownProtocolTimeout': 500,
        'allowHalfOpen': !![]
    });
server['on'](_0x208615(407), _0xb61079 => {
    const _0x10d97b = _0x208615, _0x417e3d = { 'nhbgq': _0x10d97b(408) };
    _0xb61079['on'](_0x417e3d[_0x10d97b(409)], common[_0x10d97b(410)](() => {
        server['close']();
    }));
}), server[_0x208615(411)](-14 * -632 + 2 * -3408 + 2 * -1016, function () {
    const _0x48bd8a = _0x208615, _0x55dedd = { 'rxCea': _0x48bd8a(412) };
    tls[_0x48bd8a(413)]({
        'port': server[_0x48bd8a(414)]()[_0x48bd8a(415)],
        'rejectUnauthorized': ![],
        'ALPNProtocols': [_0x55dedd['rxCea']]
    });
});