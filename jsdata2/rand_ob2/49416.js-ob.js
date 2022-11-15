var _0x2c2e = [
    '1655iqgGNt',
    '1150086ZTMLAX',
    '119pbbYql',
    '2753TSdEes',
    '187834TADSLW',
    '648736xzfyjC',
    '444142ESfwaw',
    'handleLogout',
    'error',
    'status',
    '1277428PBsfNV',
    '419nZZeUq'
];
(function (_0x18e25c, _0x954c9e) {
    var _0x32f221 = _0x3fb4;
    while (!![]) {
        try {
            var _0x94e58d = parseInt(_0x32f221(0x9c)) + -parseInt(_0x32f221(0x9d)) * parseInt(_0x32f221(0x9e)) + -parseInt(_0x32f221(0x9f)) + -parseInt(_0x32f221(0xa0)) * -parseInt(_0x32f221(0xa1)) + -parseInt(_0x32f221(0xa2)) + parseInt(_0x32f221(0xa3)) + parseInt(_0x32f221(0xa4));
            if (_0x94e58d === _0x954c9e)
                break;
            else
                _0x18e25c['push'](_0x18e25c['shift']());
        } catch (_0xb12f90) {
            _0x18e25c['push'](_0x18e25c['shift']());
        }
    }
}(_0x2c2e, 0xa2bb4));
import _0x31d0eb from '../../lib/auth0';
function _0x3fb4(_0x7b3d15, _0x32a2e2) {
    return _0x3fb4 = function (_0x2c2e9a, _0x3fb414) {
        _0x2c2e9a = _0x2c2e9a - 0x9c;
        var _0x1d1b00 = _0x2c2e[_0x2c2e9a];
        return _0x1d1b00;
    }, _0x3fb4(_0x7b3d15, _0x32a2e2);
}
export default async function logout(_0x3621c9, _0x1ffcfb) {
    var _0x52ff78 = _0x3fb4;
    try {
        await _0x31d0eb[_0x52ff78(0xa5)](_0x3621c9, _0x1ffcfb);
    } catch (_0x5a78ec) {
        console[_0x52ff78(0xa6)](_0x5a78ec), _0x1ffcfb['status'](_0x5a78ec[_0x52ff78(0xa7)] || 0x1f4)['end'](_0x5a78ec['message']);
    }
}
