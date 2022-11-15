'use strict';
const common = require('../common');
if (!common['hasCrypto'])
    common['skip']('missing crypto');
const assert = require('assert');
const fs = require('fs');
const fixtures = require('../common/fixtures');
const tls = require('tls');
function filenamePEM(_0x38d9a7) {
    return fixtures['path']('keys', _0x38d9a7 + '.pem');
}
function loadPEM(_0x27d3ef) {
    return fs['readFileSync'](filenamePEM(_0x27d3ef));
}
const caCert = loadPEM('ca1-cert');
const opts = { 'rejectUnauthorized': !![] };
tls['connect'](opts, common['mustCall'](end));
opts['ca'] = caCert;
tls['connect'](opts, fail)['on']('error', common['mustCall'](_0x3070c6 => {
    assert['strictEqual'](_0x3070c6['message'], 'unable to get local issuer certificate');
}));
function fail() {
    assert['fail']('should fail to connect');
}
opts['secureContext'] = tls['createSecureContext']();
tls['connect'](opts, common['mustCall'](end));
opts['secureContext']['context']['addCACert'](caCert);
tls['connect'](opts, common['mustCall'](end));
function end() {
    this['end']();
}