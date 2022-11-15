'use strict';
const _0x4fc6 = [
    'sPwfz',
    'bind',
    '1663868tJEWlT',
    '170347WremSV',
    '4QILPFu',
    '88001VphGDa',
    '9DFIRjE',
    '1788044wwRsJN',
    '619929FNVHuO',
    '1749213JCVAvk',
    '2080423CrJwsu',
    '../common',
    'assert',
    'dgram',
    'A\x20message\x20to\x20send',
    'createSocket',
    'udp4',
    'toString',
    'length',
    'port',
    'address',
    'mustCall',
    'message',
    'localhost',
    '0|1|2|3|4',
    'split',
    'localhostIPv4',
    'strictEqual',
    'close',
    'send',
    'lNRdM'
];
function _0x3d76(_0x1ca7ce, _0x511532) {
    return _0x3d76 = function (_0x4cc952, _0x444ac9) {
        _0x4cc952 = _0x4cc952 - (0xb * 0x1be + 0xa * -0x2bb + 0x9b9);
        let _0x29e123 = _0x4fc6[_0x4cc952];
        return _0x29e123;
    }, _0x3d76(_0x1ca7ce, _0x511532);
}
const _0x2313d4 = _0x3d76;
(function (_0x30fd63, _0x241250) {
    const _0x4e1521 = _0x3d76;
    while (!![]) {
        try {
            const _0x443c10 = parseInt(_0x4e1521(0x195)) + parseInt(_0x4e1521(0x196)) * -parseInt(_0x4e1521(0x197)) + -parseInt(_0x4e1521(0x198)) * -parseInt(_0x4e1521(0x199)) + -parseInt(_0x4e1521(0x19a)) + parseInt(_0x4e1521(0x19b)) + -parseInt(_0x4e1521(0x19c)) + parseInt(_0x4e1521(0x19d));
            if (_0x443c10 === _0x241250)
                break;
            else
                _0x30fd63['push'](_0x30fd63['shift']());
        } catch (_0x1646e1) {
            _0x30fd63['push'](_0x30fd63['shift']());
        }
    }
}(_0x4fc6, -0x22 * -0xabfa + -0x6a872 + -0x1e052));
const common = require(_0x2313d4(0x19e)), assert = require(_0x2313d4(0x19f)), dgram = require(_0x2313d4(0x1a0)), message_to_send = _0x2313d4(0x1a1), server = dgram[_0x2313d4(0x1a2)](_0x2313d4(0x1a3));
server['on']('message', common['mustCall']((_0x4e1a7d, _0x1b8762) => {
    const _0x5d041d = _0x2313d4;
    assert['strictEqual'](_0x1b8762['address'], common['localhostIPv4']), assert['strictEqual'](_0x4e1a7d[_0x5d041d(0x1a4)](), message_to_send['toString']()), server['send'](_0x4e1a7d, 0x1d0b + 0x57b * -0x5 + -0x1a4, _0x4e1a7d[_0x5d041d(0x1a5)], _0x1b8762[_0x5d041d(0x1a6)], _0x1b8762[_0x5d041d(0x1a7)]);
})), server['on']('listening', common[_0x2313d4(0x1a8)](() => {
    const _0x27f24a = _0x2313d4, _0x404d00 = {
            'tcGEv': _0x27f24a(0x1a9),
            'lNRdM': _0x27f24a(0x1aa),
            'sPwfz': 'close'
        }, _0x50df66 = dgram[_0x27f24a(0x1a2)]('udp4'), _0xf3b345 = server['address']()[_0x27f24a(0x1a6)];
    _0x50df66['on'](_0x404d00['tcGEv'], common[_0x27f24a(0x1a8)]((_0x1a7d1b, _0x1ee2e4) => {
        const _0x390924 = _0x27f24a, _0x2e393f = _0x390924(0x1ab)[_0x390924(0x1ac)]('|');
        let _0x2a368d = -0x1019 + -0xa83 + -0x2 * -0xd4e;
        while (!![]) {
            switch (_0x2e393f[_0x2a368d++]) {
            case '0':
                assert['strictEqual'](_0x1ee2e4[_0x390924(0x1a7)], common[_0x390924(0x1ad)]);
                continue;
            case '1':
                assert[_0x390924(0x1ae)](_0x1ee2e4[_0x390924(0x1a6)], _0xf3b345);
                continue;
            case '2':
                assert[_0x390924(0x1ae)](_0x1a7d1b[_0x390924(0x1a4)](), message_to_send['toString']());
                continue;
            case '3':
                _0x50df66['close']();
                continue;
            case '4':
                server[_0x390924(0x1af)]();
                continue;
            }
            break;
        }
    })), _0x50df66[_0x27f24a(0x1b0)](message_to_send, -0x706 + 0x46a + 0x29c, message_to_send[_0x27f24a(0x1a5)], _0xf3b345, _0x404d00[_0x27f24a(0x1b1)]), _0x50df66['on'](_0x404d00[_0x27f24a(0x1b2)], common[_0x27f24a(0x1a8)]());
})), server['on'](_0x2313d4(0x1af), common[_0x2313d4(0x1a8)]()), server[_0x2313d4(0x1b3)](-0x2e * 0xbe + 0x24f1 + -0x2cd);
