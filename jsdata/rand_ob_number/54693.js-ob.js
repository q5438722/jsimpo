'use strict';
const common = require('../common');
if (!common['hasCrypto'])
    common['skip']('missing\x20crypto');
const assert = require('assert'), tls = require('tls'), options = {
        'SNICallback': (_0x453472, _0x9c1269) => {
            _0x9c1269(null, tls['createSecureContext']());
        }
    }, server = tls['createServer'](options, _0x4df383 => {
        assert['fail']('Should\x20not\x20be\x20called');
    })['on']('tlsClientError', common['mustCall']((_0x26069a, _0x40b44c) => {
        assert(/SSL_use_certificate:passed a null parameter/i['test'](_0x26069a['message'])), server['close']();
    }))['listen'](0xda6 + -0x19b8 + 0xc12, common['mustCall'](() => {
        const _0x1bd076 = tls['connect']({
            'port': server['address']()['port'],
            'rejectUnauthorized': ![],
            'servername': 'any.name'
        }, common['mustNotCall']());
        _0x1bd076['on']('error', common['mustCall'](_0x2066a0 => {
            assert(/Client network socket disconnected/['test'](_0x2066a0['message']));
        }));
    }));
