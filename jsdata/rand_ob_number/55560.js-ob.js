'use strict';
const common = require('../common');
if (!common['hasCrypto'])
    common['skip']('missing\x20crypto');
const assert = require('assert'), tls = require('tls'), fixtures = require('../common/fixtures'), options = {
        'key': fixtures['readKey']('agent2-key.pem'),
        'cert': fixtures['readKey']('agent2-cert.pem')
    }, messageUtf8 = 'x√ab\x20c', messageAscii = 'xb\x08\x1aab\x20c', server = tls['Server'](options, common['mustCall'](function (_0x1a2ed0) {
        console['log']('server:\x20on\x20secureConnection', _0x1a2ed0['getProtocol']()), _0x1a2ed0['end'](messageUtf8);
    }));
server['listen'](0x82f + 0x12a2 + -0x1ad1, function () {
    const _0x3a28fd = tls['connect']({
        'port': this['address']()['port'],
        'rejectUnauthorized': ![]
    });
    let _0x3a2bd2 = '';
    _0x3a28fd['setEncoding']('ascii'), _0x3a28fd['on']('data', function (_0x456600) {
        console['log']('client:\x20on\x20data', _0x456600), assert['ok'](typeof _0x456600 === 'string'), _0x3a2bd2 += _0x456600;
    }), _0x3a28fd['on']('secureConnect', common['mustCall'](() => {
        console['log']('client:\x20on\x20secureConnect');
    })), _0x3a28fd['on']('close', common['mustCall'](function () {
        console['log']('client:\x20on\x20close'), assert['strictEqual'](_0x3a28fd['readyState'], 'closed'), assert['notStrictEqual'](messageUtf8, _0x3a2bd2), assert['strictEqual'](messageAscii, _0x3a2bd2), server['close']();
    }));
});
