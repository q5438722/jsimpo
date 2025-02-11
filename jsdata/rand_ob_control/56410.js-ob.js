'use strict';
const common = require('../common');
if (!common['hasCrypto'])
    common['skip']('missing\x20crypto');
const assert = require('assert'), tls = require('tls');
tls['createServer']({ 'ciphers': 'AECDH-NULL-SHA' })['listen'](0x0, common['mustCall'](close)), tls['createServer'](assert['fail'])['listen'](0x0, common['mustCall'](close)), tls['createServer']({})['listen'](0x0, common['mustCall'](close)), assert['throws'](() => tls['createServer']('this\x20is\x20not\x20valid'), {
    'code': 'ERR_INVALID_ARG_TYPE',
    'name': 'TypeError',
    'message': 'The\x20\x22options\x22\x20argument\x20must\x20be\x20of\x20type\x20object.\x20' + 'Received\x20type\x20string\x20(\x27this\x20is\x20not\x20valid\x27)'
}), tls['createServer']()['listen'](0x0, common['mustCall'](close));
function close() {
    this['close']();
}
