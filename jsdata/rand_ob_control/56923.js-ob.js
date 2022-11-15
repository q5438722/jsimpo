'use strict';
const common = require('../common');
if (!common['hasCrypto'])
    common['skip']('missing\x20crypto');
const assert = require('assert'), fs = require('fs'), fixtures = require('../common/fixtures'), tls = require('tls');
function filenamePEM(_0x1d1339) {
    const _0x483464 = { 'ceHng': 'keys' };
    return fixtures['path'](_0x483464['ceHng'], _0x1d1339 + '.pem');
}
function loadPEM(_0xf902d8) {
    const _0x5b2cd2 = {
        'TUqiP': function (_0x564cdf, _0x5b985e) {
            return _0x564cdf(_0x5b985e);
        }
    };
    return fs['readFileSync'](_0x5b2cd2['TUqiP'](filenamePEM, _0xf902d8));
}
const caCert = loadPEM('ca1-cert'), opts = {
        'host': 'www.nodejs.org',
        'port': 0x1bb,
        'rejectUnauthorized': !![]
    };
tls['connect'](opts, common['mustCall'](end)), opts['ca'] = caCert, tls['connect'](opts, fail)['on']('error', common['mustCall'](_0x11186a => {
    const _0x3c5e5a = { 'zCwuz': 'unable\x20to\x20get\x20local\x20issuer\x20certificate' };
    assert['strictEqual'](_0x11186a['message'], _0x3c5e5a['zCwuz']);
}));
function fail() {
    const _0x387f5f = { 'siERw': 'should\x20fail\x20to\x20connect' };
    assert['fail'](_0x387f5f['siERw']);
}
opts['secureContext'] = tls['createSecureContext'](), tls['connect'](opts, common['mustCall'](end)), opts['secureContext']['context']['addCACert'](caCert), tls['connect'](opts, common['mustCall'](end));
function end() {
    this['end']();
}
