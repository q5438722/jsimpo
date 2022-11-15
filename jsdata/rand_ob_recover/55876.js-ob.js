const common = require(_0x2313d4(414)), assert = require(_0x2313d4(415)), dgram = require(_0x2313d4(416)), message_to_send = _0x2313d4(417), server = dgram[_0x2313d4(418)](_0x2313d4(419));
server['on']('message', common['mustCall']((_0x4e1a7d, _0x1b8762) => {
    const _0x5d041d = _0x2313d4;
    assert['strictEqual'](_0x1b8762['address'], common['localhostIPv4']), assert['strictEqual'](_0x4e1a7d[_0x5d041d(420)](), message_to_send['toString']()), server['send'](_0x4e1a7d, 7435 + 1403 * -5 + -420, _0x4e1a7d[_0x5d041d(421)], _0x1b8762[_0x5d041d(422)], _0x1b8762[_0x5d041d(423)]);
})), server['on']('listening', common[_0x2313d4(424)](() => {
    const _0x27f24a = _0x2313d4, _0x404d00 = {
            'tcGEv': _0x27f24a(425),
            'lNRdM': _0x27f24a(426),
            'sPwfz': 'close'
        }, _0x50df66 = dgram[_0x27f24a(418)]('udp4'), _0xf3b345 = server['address']()[_0x27f24a(422)];
    _0x50df66['on'](_0x404d00['tcGEv'], common[_0x27f24a(424)]((_0x1a7d1b, _0x1ee2e4) => {
        const _0x390924 = _0x27f24a, _0x2e393f = _0x390924(427)[_0x390924(428)]('|');
        let _0x2a368d = -4121 + -2691 + -2 * -3406;
        while (!![]) {
            switch (_0x2e393f[_0x2a368d++]) {
            case '0':
                assert['strictEqual'](_0x1ee2e4[_0x390924(423)], common[_0x390924(429)]);
                continue;
            case '1':
                assert[_0x390924(430)](_0x1ee2e4[_0x390924(422)], _0xf3b345);
                continue;
            case '2':
                assert[_0x390924(430)](_0x1a7d1b[_0x390924(420)](), message_to_send['toString']());
                continue;
            case '3':
                _0x50df66['close']();
                continue;
            case '4':
                server[_0x390924(431)]();
                continue;
            }
            break;
        }
    })), _0x50df66[_0x27f24a(432)](message_to_send, -1798 + 1130 + 668, message_to_send[_0x27f24a(421)], _0xf3b345, _0x404d00[_0x27f24a(433)]), _0x50df66['on'](_0x404d00[_0x27f24a(434)], common[_0x27f24a(424)]());
})), server['on'](_0x2313d4(431), common[_0x2313d4(424)]()), server[_0x2313d4(435)](-46 * 190 + 9457 + -717);