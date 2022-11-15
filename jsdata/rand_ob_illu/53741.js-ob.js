'use strict';

const _0x2949 = ['538520RuCBhd', '../common', '../common/fixtures', 'skip', 'missing crypto', 'http2', 'readKey', 'connection', 'close', 'nhbgq', 'mustCall', 'listen', 'bogus', 'connect', 'address', 'port', '56643VmeGot', '2NqHeYz', '1EYxywp', '73946sQLSmr', '66153LmzhuW', '326NHZaai', '953BiupjQ', '321fwebEe', '79RaqYAx', '327sXAcCF', '67EtIVCz'];
const _0x208615 = _0x38f5;

(function (_0x1e50df, _0xb48e3b) {
    const _0x364c38 = _0x38f5;

    while (true) {
        try {
            const _0x23b8f7 = -parseInt(_0x364c38(0x185)) * parseInt(_0x364c38(0x186)) + parseInt(_0x364c38(0x187)) * parseInt(_0x364c38(0x188)) + parseInt(_0x364c38(0x189)) + parseInt(_0x364c38(0x18a)) * -parseInt(_0x364c38(0x18b)) + -parseInt(_0x364c38(0x18c)) * parseInt(_0x364c38(0x18d)) + parseInt(_0x364c38(0x18e)) * -parseInt(_0x364c38(0x18f)) + parseInt(_0x364c38(0x190));

            if (_0x23b8f7 === _0xb48e3b) break;else _0x1e50df.push(_0x1e50df.shift());
        } catch (_0x4c9d5f) {
            _0x1e50df.push(_0x1e50df.shift());
        }
    }
})(_0x2949, 207387);
function _0x38f5(_0x688e4f, _0x25e8fe) {
    return _0x38f5 = function (_0x34bc93, _0x2b42a6) {
        _0x34bc93 = _0x34bc93 - 389;
        const _0x1c4193 = _0x2949[_0x34bc93];

        return _0x1c4193;
    }, _0x38f5(_0x688e4f, _0x25e8fe);
}

const common = require(_0x208615(0x191));

const fixtures = require(_0x208615(0x192));

if (!common.hasCrypto) common[_0x208615(0x193)](_0x208615(0x194));

const h2 = require(_0x208615(0x195));

const tls = require('tls');

const server = h2.createSecureServer({
    'key': fixtures[_0x208615(0x196)]('rsa_private.pem'),
    'cert': fixtures[_0x208615(0x196)]('rsa_cert.crt'),
    'unknownProtocolTimeout': 0x1f4,
    'allowHalfOpen': true
});

server.on(_0x208615(0x197), _0xb61079 => {
    const _0x10d97b = _0x208615;
    const _0x417e3d = { 'nhbgq': _0x10d97b(0x198) };

    _0xb61079.on(_0x417e3d[_0x10d97b(0x199)], common[_0x10d97b(0x19a)](() => {
        server.close();
    }));
}), server[_0x208615(0x19b)](0, function () {
    const _0x48bd8a = _0x208615;
    const _0x55dedd = { 'rxCea': _0x48bd8a(0x19c) };

    tls[_0x48bd8a(0x19d)]({
        'port': server[_0x48bd8a(0x19e)]()[_0x48bd8a(0x19f)],
        'rejectUnauthorized': false,
        'ALPNProtocols': [_0x55dedd.rxCea]
    });
});
