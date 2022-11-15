'use strict';
const common = require('../common'), assert = require('assert'), dgram = require('dgram'), message_to_send = 'A\x20message\x20to\x20send', server = dgram['createSocket']('udp4');
server['on']('message', common['mustCall']((_0x2239a1, _0x3d5a2c) => {
    assert['strictEqual'](_0x3d5a2c['address'], common['localhostIPv4']), assert['strictEqual'](_0x2239a1['toString'](), message_to_send['toString']()), server['send'](_0x2239a1, 0x0, _0x2239a1['length'], _0x3d5a2c['port'], _0x3d5a2c['address']);
})), server['on']('listening', common['mustCall'](() => {
    const _0x3eb0c9 = {
            'ZLIfg': '1|4|0|2|3',
            'rKKPO': 'udp4',
            'vXUHi': 'message',
            'EiBAP': 'localhost',
            'AGhpD': 'close'
        }, _0x4ff15f = dgram['createSocket'](_0x3eb0c9['rKKPO']), _0x5135d0 = server['address']()['port'];
    _0x4ff15f['on'](_0x3eb0c9['vXUHi'], common['mustCall']((_0x158190, _0x101adc) => {
        const _0x391862 = _0x3eb0c9['ZLIfg']['split']('|');
        let _0x4fae24 = 0x0;
        while (!![]) {
            switch (_0x391862[_0x4fae24++]) {
            case '0':
                assert['strictEqual'](_0x158190['toString'](), message_to_send['toString']());
                continue;
            case '1':
                assert['strictEqual'](_0x101adc['address'], common['localhostIPv4']);
                continue;
            case '2':
                _0x4ff15f['close']();
                continue;
            case '3':
                server['close']();
                continue;
            case '4':
                assert['strictEqual'](_0x101adc['port'], _0x5135d0);
                continue;
            }
            break;
        }
    })), _0x4ff15f['send'](message_to_send, 0x0, message_to_send['length'], _0x5135d0, _0x3eb0c9['EiBAP']), _0x4ff15f['on'](_0x3eb0c9['AGhpD'], common['mustCall']());
})), server['on']('close', common['mustCall']()), server['bind'](0x0);
