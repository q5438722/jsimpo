'use strict';
const common = require('../common');
if (!common['hasCrypto'])
    common['skip']('missing\x20crypto');
const assert = require('assert'), fs = require('fs'), fixtures = require('../common/fixtures'), tls = require('tls');
function filenamePEM(_0x5ea530) {
    return fixtures['path']('keys', _0x5ea530 + '.pem');
}
function loadPEM(_0x69f29c) {
    return fs['readFileSync'](filenamePEM(_0x69f29c));
}
const caCert = loadPEM('ca1-cert'), opts = {
        'host': 'www.nodejs.org',
        'port': 0x1bb,
        'rejectUnauthorized': !![]
    };
tls['connect'](opts, common['mustCall'](end)), opts['ca'] = caCert, tls['connect'](opts, fail)['on']('error', common['mustCall'](_0x58e0c4 => {
    assert['strictEqual'](_0x58e0c4['message'], 'unable\x20to\x20get\x20local\x20issuer\x20certificate');
}));
function fail() {
    assert['fail']('should\x20fail\x20to\x20connect');
}
opts['secureContext'] = tls['createSecureContext'](), tls['connect'](opts, common['mustCall'](end)), opts['secureContext']['context']['addCACert'](caCert), tls['connect'](opts, common['mustCall'](end));
function end() {
    this['end']();
}
