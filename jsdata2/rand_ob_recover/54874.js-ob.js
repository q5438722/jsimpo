const common = require('../common'), assert = require('assert'), net = require(_0x27b1c7(486));
function _0x242c(_0x1a5a45, _0x5112fc) {
    return _0x242c = function (_0x3f2dd1, _0x28f201) {
        _0x3f2dd1 = _0x3f2dd1 - (-5 * 1027 + 9860 + -4249);
        let _0xdc563d = _0x4289[_0x3f2dd1];
        return _0xdc563d;
    }, _0x242c(_0x1a5a45, _0x5112fc);
}
let connections = -7312 + 7 + 7305, dataEvents = 1749 + -5783 + 4034, conn;
const server = net[_0x27b1c7(487)](function (_0x29f642) {
    const _0x20b43b = _0x27b1c7, _0x439300 = {
            'VuaBW': _0x20b43b(488),
            'qEREJ': function (_0x386b71, _0x30e5e1) {
                return _0x386b71 === _0x30e5e1;
            }
        };
    connections++, _0x29f642['end'](_0x439300[_0x20b43b(489)]);
    if (_0x439300[_0x20b43b(490)](connections, -20 * 361 + 8675 + 725 * -2))
        server[_0x20b43b(491)]();
});
server['listen'](6376 + 9989 + 15 * -1091, function () {
    const _0x14262b = _0x27b1c7, _0x2583fb = {
            'CEZvZ': function (_0x432b5f, _0x391d62, _0x5c3223) {
                return _0x432b5f(_0x391d62, _0x5c3223);
            },
            'SVHUi': _0x14262b(492),
            'FaTyX': 'localhost',
            'CmcZk': function (_0x3933ba, _0x47c217) {
                return _0x3933ba(_0x47c217);
            }
        };
    conn = net['createConnection'](this[_0x14262b(493)]()[_0x14262b(494)], 'localhost'), conn[_0x14262b(495)](), conn['on'](_0x2583fb['SVHUi'], _0x301ae7), conn = net[_0x14262b(496)](this[_0x14262b(493)]()[_0x14262b(494)], 'localhost'), conn[_0x14262b(497)](), conn['resume'](), conn['on'](_0x2583fb[_0x14262b(498)], _0x301ae7), conn = net[_0x14262b(496)](this[_0x14262b(493)]()[_0x14262b(494)], _0x2583fb[_0x14262b(499)]), conn[_0x14262b(497)](), conn['on'](_0x2583fb[_0x14262b(498)], common['mustNotCall']()), _0x2583fb['CmcZk'](_0x54a708, conn), conn = net[_0x14262b(496)](this[_0x14262b(493)]()['port'], _0x2583fb[_0x14262b(499)]), conn[_0x14262b(495)](), conn[_0x14262b(497)](), conn[_0x14262b(495)](), conn['on'](_0x2583fb[_0x14262b(498)], _0x301ae7), conn = net['createConnection'](this['address']()[_0x14262b(494)], _0x14262b(500)), conn[_0x14262b(495)](), conn[_0x14262b(495)](), conn[_0x14262b(497)](), conn['on'](_0x2583fb[_0x14262b(498)], common['mustNotCall']()), _0x54a708(conn);
    function _0x301ae7() {
        dataEvents++;
    }
    function _0x54a708(_0x83186f) {
        const _0xc1b280 = _0x14262b, _0x55f529 = { 'MZkSZ': _0xc1b280(492) };
        _0x2583fb[_0xc1b280(501)](setTimeout, function () {
            const _0x2afa97 = _0xc1b280;
            _0x83186f[_0x2afa97(502)](_0x55f529[_0x2afa97(503)]), _0x83186f[_0x2afa97(495)]();
        }, 6942 + -4677 * 1 + -2165);
    }
}), process['on'](_0x27b1c7(504), function () {
    const _0x1c206f = _0x27b1c7;
    assert['strictEqual'](connections, 68 * -86 + -9531 + 15384), assert[_0x1c206f(505)](dataEvents, -1 * -9583 + -876 * 6 + -47 * 92);
});