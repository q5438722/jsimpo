const common = require('../common');
function _0x5866(_0x25d73c, _0x26eeb0) {
    return _0x5866 = function (_0x5ac72b, _0x16958d) {
        _0x5ac72b = _0x5ac72b - (-6140 + -34 * -179 + 327);
        let _0x1a6176 = _0x2138[_0x5ac72b];
        return _0x1a6176;
    }, _0x5866(_0x25d73c, _0x26eeb0);
}
if (!common[_0x3e636f(285)])
    common[_0x3e636f(286)](_0x3e636f(287));
const assert = require(_0x3e636f(288)), tls = require(_0x3e636f(289)), fixtures = require(_0x3e636f(290)), options = {
        'key': fixtures[_0x3e636f(291)]('agent2-key.pem'),
        'cert': fixtures[_0x3e636f(291)]('agent2-cert.pem')
    }, messageUtf8 = 'x\u221Aab c', messageAscii = _0x3e636f(292), server = tls[_0x3e636f(293)](options, common['mustCall'](function (_0xd445e1) {
        const _0x3dde3e = _0x3e636f, _0x54f148 = { 'pkQrx': 'server: on secureConnection' };
        console[_0x3dde3e(294)](_0x54f148['pkQrx'], _0xd445e1[_0x3dde3e(295)]()), _0xd445e1[_0x3dde3e(296)](messageUtf8);
    }));
server[_0x3e636f(297)](-2951 + -11 * -883 + -6762, function () {
    const _0x328bbe = _0x3e636f, _0x324486 = {
            'eoJis': _0x328bbe(298),
            'JCycV': function (_0x6b013e, _0x27918c) {
                return _0x6b013e === _0x27918c;
            },
            'BSxdm': _0x328bbe(299),
            'XWcoc': '4|0|2|1|3',
            'YiBij': 'closed',
            'KmCFR': _0x328bbe(300),
            'SKeMy': 'secureConnect',
            'VPqWs': 'close'
        }, _0x31a426 = tls[_0x328bbe(301)]({
            'port': this[_0x328bbe(302)]()['port'],
            'rejectUnauthorized': ![]
        });
    let _0x49e57 = '';
    _0x31a426[_0x328bbe(303)]('ascii'), _0x31a426['on']('data', function (_0x5dcf2a) {
        const _0x333ba3 = _0x328bbe;
        console[_0x333ba3(294)](_0x324486[_0x333ba3(304)], _0x5dcf2a), assert['ok'](_0x324486['JCycV'](typeof _0x5dcf2a, 'string')), _0x49e57 += _0x5dcf2a;
    }), _0x31a426['on'](_0x324486[_0x328bbe(305)], common[_0x328bbe(306)](() => {
        const _0x79e956 = _0x328bbe;
        console[_0x79e956(294)](_0x324486[_0x79e956(307)]);
    })), _0x31a426['on'](_0x324486[_0x328bbe(308)], common[_0x328bbe(306)](function () {
        const _0x23a80d = _0x328bbe, _0x2c8a25 = _0x324486[_0x23a80d(309)][_0x23a80d(310)]('|');
        let _0x89bf31 = 7269 + 2122 + 1 * -9391;
        while (!![]) {
            switch (_0x2c8a25[_0x89bf31++]) {
            case '0':
                assert[_0x23a80d(311)](_0x31a426[_0x23a80d(312)], _0x324486[_0x23a80d(313)]);
                continue;
            case '1':
                assert[_0x23a80d(311)](messageAscii, _0x49e57);
                continue;
            case '2':
                assert['notStrictEqual'](messageUtf8, _0x49e57);
                continue;
            case '3':
                server[_0x23a80d(314)]();
                continue;
            case '4':
                console[_0x23a80d(294)](_0x324486['KmCFR']);
                continue;
            }
            break;
        }
    }));
});