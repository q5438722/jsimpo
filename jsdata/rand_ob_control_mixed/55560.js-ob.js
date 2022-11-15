'use strict';
const common = require('../common');
if (!common['hasCrypto'])
    common['skip']('missing\x20crypto');
const assert = require('assert'), tls = require('tls'), fixtures = require('../common/fixtures'), options = {
        'key': fixtures['readKey']('agent2-key.pem'),
        'cert': fixtures['readKey']('agent2-cert.pem')
    }, messageUtf8 = 'x√ab\x20c', messageAscii = 'xb\x08\x1aab\x20c', server = tls['Server'](options, common['mustCall'](function (_0x3a185d) {
        const _0x1034b1 = { 'ZDOTv': 'server:\x20on\x20secureConnection' };
        console['log'](_0x1034b1['ZDOTv'], _0x3a185d['getProtocol']()), _0x3a185d['end'](messageUtf8);
    }));
server['listen'](0x0, function () {
    const _0x421f3e = {
            'MvcSD': 'client:\x20on\x20data',
            'DcXys': function (_0x1cb7ea, _0x4d6f30) {
                return _0x1cb7ea === _0x4d6f30;
            },
            'cAqJo': 'string',
            'iOBgj': 'client:\x20on\x20secureConnect',
            'RSmdQ': '1|4|0|2|3',
            'MaVqP': 'client:\x20on\x20close',
            'hiigH': 'closed',
            'wvRLL': 'ascii',
            'NJLGv': 'data',
            'Jzhul': 'secureConnect',
            'KaFfc': 'close'
        }, _0x2e0f4a = tls['connect']({
            'port': this['address']()['port'],
            'rejectUnauthorized': ![]
        });
    let _0x1840e6 = '';
    _0x2e0f4a['setEncoding'](_0x421f3e['wvRLL']), _0x2e0f4a['on'](_0x421f3e['NJLGv'], function (_0x17e638) {
        console['log'](_0x421f3e['MvcSD'], _0x17e638), assert['ok'](_0x421f3e['DcXys'](typeof _0x17e638, _0x421f3e['cAqJo'])), _0x1840e6 += _0x17e638;
    }), _0x2e0f4a['on'](_0x421f3e['Jzhul'], common['mustCall'](() => {
        console['log'](_0x421f3e['iOBgj']);
    })), _0x2e0f4a['on'](_0x421f3e['KaFfc'], common['mustCall'](function () {
        const _0x458089 = _0x421f3e['RSmdQ']['split']('|');
        let _0x36e887 = 0x0;
        while (!![]) {
            switch (_0x458089[_0x36e887++]) {
            case '0':
                assert['notStrictEqual'](messageUtf8, _0x1840e6);
                continue;
            case '1':
                console['log'](_0x421f3e['MaVqP']);
                continue;
            case '2':
                assert['strictEqual'](messageAscii, _0x1840e6);
                continue;
            case '3':
                server['close']();
                continue;
            case '4':
                assert['strictEqual'](_0x2e0f4a['readyState'], _0x421f3e['hiigH']);
                continue;
            }
            break;
        }
    }));
});
