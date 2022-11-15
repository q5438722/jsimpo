'use strict';
const common = require('../common'), fixtures = require('../common/fixtures');
if (!common['hasCrypto'])
    common['skip']('missing\x20crypto');
const h2 = require('http2'), tls = require('tls'), server = h2['createSecureServer']({
        'key': fixtures['readKey']('rsa_private.pem'),
        'cert': fixtures['readKey']('rsa_cert.crt'),
        'unknownProtocolTimeout': 0x1f4,
        'allowHalfOpen': !![]
    });
server['on']('connection', _0x1ad3e5 => {
    _0x1ad3e5['on']('close', common['mustCall'](() => {
        server['close']();
    }));
}), server['listen'](0x53 * 0xd + 0x2295 + -0x26cc, function () {
    tls['connect']({
        'port': server['address']()['port'],
        'rejectUnauthorized': ![],
        'ALPNProtocols': ['bogus']
    });
});
