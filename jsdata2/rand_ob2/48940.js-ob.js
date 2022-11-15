var _0x11e0 = [
    '105vNFOId',
    'env',
    'SECRET_COOKIE_PASSWORD',
    'NODE_ENV',
    'production',
    '326114cvXhkz',
    '1rqJeSR',
    '436921qtfbRG',
    '96459uDyhDU',
    '5QYMoBw',
    '187248zVnwWa',
    '213572LvgGOn',
    '853635WRiOsW',
    '132poXWWp'
];
(function (_0x7bad4a, _0x33bfba) {
    var _0x472017 = _0x1ae6;
    while (!![]) {
        try {
            var _0xd97f28 = -parseInt(_0x472017(0x1ad)) + parseInt(_0x472017(0x1ae)) * parseInt(_0x472017(0x1af)) + parseInt(_0x472017(0x1b0)) * -parseInt(_0x472017(0x1b1)) + -parseInt(_0x472017(0x1b2)) + parseInt(_0x472017(0x1b3)) + parseInt(_0x472017(0x1b4)) + -parseInt(_0x472017(0x1b5)) * parseInt(_0x472017(0x1b6));
            if (_0xd97f28 === _0x33bfba)
                break;
            else
                _0x7bad4a['push'](_0x7bad4a['shift']());
        } catch (_0x2ef210) {
            _0x7bad4a['push'](_0x7bad4a['shift']());
        }
    }
}(_0x11e0, 0x78c13));
import { withIronSession } from 'next-iron-session';
function _0x1ae6(_0x263160, _0x5621de) {
    return _0x1ae6 = function (_0x11e09c, _0x1ae6f3) {
        _0x11e09c = _0x11e09c - 0x1ad;
        var _0x473ada = _0x11e0[_0x11e09c];
        return _0x473ada;
    }, _0x1ae6(_0x263160, _0x5621de);
}
export default function withSession(_0x3b64df) {
    var _0xd602e9 = _0x1ae6;
    return withIronSession(_0x3b64df, {
        'password': process[_0xd602e9(0x1b7)][_0xd602e9(0x1b8)],
        'cookieName': 'next.js/examples/with-iron-session',
        'cookieOptions': { 'secure': process[_0xd602e9(0x1b7)][_0xd602e9(0x1b9)] === _0xd602e9(0x1ba) ? !![] : ![] }
    });
}
