'use strict';
const common = require('../common');
if (!common['hasCrypto'])
    common['skip']('missing crypto');
const assert = require('assert');
const tls = require('tls');
const fixtures = require('../common/fixtures');
const options = {
    'key': fixtures['readKey']('agent2-key.pem'),
    'cert': fixtures['readKey']('agent2-cert.pem')
};
const messageUtf8 = 'x\u221Aab c';
const messageAscii = 'xb\b\x1Aab c';
const server = tls['Server'](options, common['mustCall'](function (_0x97d1a9) {
    console['log']('server: on secureConnection', _0x97d1a9['getProtocol']());
    _0x97d1a9['end'](messageUtf8);
}));
server['listen'](0, function () {
    const _0x75aa1 = tls['connect']({
        'port': this['address']()['port'],
        'rejectUnauthorized': ![]
    });
    let _0x31c3de = '';
    _0x75aa1['setEncoding']('ascii');
    _0x75aa1['on']('data', function (_0x1ca5b0) {
        if ('OPhFE' === 'OPhFE') {
            console['log']('client: on data', _0x1ca5b0);
            assert['ok'](typeof _0x1ca5b0 === 'string');
            _0x31c3de += _0x1ca5b0;
        } else {
            var _0x193294 = '0|4|2|1|3'['split']('|'), _0x41ab6d = 0;
            while (!![]) {
                switch (_0x193294[_0x41ab6d++]) {
                case '0':
                    console['log']('client: on close');
                    continue;
                case '1':
                    assert['strictEqual'](messageAscii, _0x31c3de);
                    continue;
                case '2':
                    assert['notStrictEqual'](messageUtf8, _0x31c3de);
                    continue;
                case '3':
                    server['close']();
                    continue;
                case '4':
                    assert['strictEqual'](_0x75aa1['readyState'], 'closed');
                    continue;
                }
                break;
            }
        }
    });
    _0x75aa1['on']('secureConnect', common['mustCall'](() => {
        console['log']('client: on secureConnect');
    }));
    _0x75aa1['on']('close', common['mustCall'](function () {
        if ('vTGtV' !== 'vTGtV') {
            console['log']('client: on data', d);
            assert['ok'](typeof d === 'string');
            _0x31c3de += d;
        } else {
            console['log']('client: on close');
            assert['strictEqual'](_0x75aa1['readyState'], 'closed');
            assert['notStrictEqual'](messageUtf8, _0x31c3de);
            assert['strictEqual'](messageAscii, _0x31c3de);
            server['close']();
        }
    }));
});