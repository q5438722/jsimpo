'use strict';
const common = require('../common');
if (!common['hasCrypto'])
    common['skip']('missing crypto');
const assert = require('assert');
const tls = require('tls');
const options = {
    'SNICallback': (_0x1bc8a5, _0x5d902f) => {
        _0x5d902f(null, tls['createSecureContext']());
    }
};
const server = tls['createServer'](options, _0x53a327 => {
    assert['fail']('Should not be called');
})['on']('tlsClientError', common['mustCall']((_0x4ce04f, _0x9a4296) => {
    assert(/SSL_use_certificate:passed a null parameter/i['test'](_0x4ce04f['message']));
    server['close']();
}))['listen'](0, common['mustCall'](() => {
    const _0x4ae9eb = tls['connect']({
        'port': server['address']()['port'],
        'rejectUnauthorized': ![],
        'servername': 'any.name'
    }, common['mustNotCall']());
    _0x4ae9eb['on']('error', common['mustCall'](_0x3f2bc0 => {
        assert(/Client network socket disconnected/['test'](_0x3f2bc0['message']));
    }));
}));