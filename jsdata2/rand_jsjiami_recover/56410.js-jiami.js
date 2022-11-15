'use strict';
const common = require('../common');
if (!common['hasCrypto'])
    common['skip']('missing crypto');
const assert = require('assert');
const tls = require('tls');
tls['createServer']({ 'ciphers': 'AECDH-NULL-SHA' })['listen'](0, common['mustCall'](close));
tls['createServer'](assert['fail'])['listen'](0, common['mustCall'](close));
tls['createServer']({})['listen'](0, common['mustCall'](close));
assert['throws'](() => tls['createServer']('this is not valid'), {
    'code': 'ERR_INVALID_ARG_TYPE',
    'name': 'TypeError',
    'message': 'The "options" argument must be of type object. ' + 'Received type string (\'this is not valid\')'
});
tls['createServer']()['listen'](0, common['mustCall'](close));
function close() {
    this['close']();
}