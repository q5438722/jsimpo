'use strict';
const common = require('../common');
const fixtures = require('../common/fixtures');
if (!common['hasCrypto'])
    common['skip']('missing crypto');
const h2 = require('http2');
const tls = require('tls');
const server = h2['createSecureServer']({
    'key': fixtures['readKey']('rsa_private.pem'),
    'cert': fixtures['readKey']('rsa_cert.crt'),
    'unknownProtocolTimeout': 500,
    'allowHalfOpen': !![]
});
server['on']('connection', _0x84e02e => {
    _0x84e02e['on']('close', common['mustCall'](() => {
        server['close']();
    }));
});
server['listen'](0, function () {
    tls['connect']({
        'port': server['address']()['port'],
        'rejectUnauthorized': ![],
        'ALPNProtocols': ['bogus']
    });
});