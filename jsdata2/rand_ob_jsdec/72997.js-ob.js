
(function (_0x330ff5, _0x837d41) {
    var _0x4a5772 = _0x2a77;
    while (!![]) {
        try {
            var _0x590041 = parseInt(_0x4a5772(0x1df)) + -parseInt(_0x4a5772(0x1e0)) + parseInt(_0x4a5772(0x1e1)) + parseInt(_0x4a5772(0x1e2)) * parseInt(_0x4a5772(0x1e3)) + parseInt(_0x4a5772(0x1e4)) + parseInt(_0x4a5772(0x1e5)) + parseInt(_0x4a5772(0x1e6)) * -parseInt(_0x4a5772(0x1e7));
            if (_0x590041 === _0x837d41)
                break;
            else
                _0x330ff5['push'](_0x330ff5['shift']());
        } catch (_0x4d663c) {
            _0x330ff5['push'](_0x330ff5['shift']());
        }
    }
}(_0x2e45, 0x2 * 0x43e1d + 0x2 * 0x3607f + -0x1f52));
import _0x56ed66 from 'lodash';
import { login } from 'passport/lib/http/request';
import { Observable } from 'rx';
function login$(..._0x3f2a6c) {
    var _0x3d89ea = _0x2a77;
    if (_0x56ed66['isFunction'](_0x56ed66[_0x3d89ea(0x1e8)](_0x3f2a6c)))
        return login[_0x3d89ea(0x1e9)](this, _0x3f2a6c);
    return Observable[_0x3d89ea(0x1ea)](login)[_0x3d89ea(0x1e9)](this, _0x3f2a6c);
}
function _0x2a77(_0x29293c, _0x44221b) {
    return _0x2a77 = function (_0x36792e, _0x4967a9) {
        _0x36792e = _0x36792e - (-0x26c9 + 0x1b89 + 0xd1f * 0x1);
        var _0x2c314d = _0x2e45[_0x36792e];
        return _0x2c314d;
    }, _0x2a77(_0x29293c, _0x44221b);
}
export default function passportLogin() {
    var _0x5d72ea = {
        'mitih': function (_0x172c17) {
            return _0x172c17();
        }
    };
    return (_0x1891d2, _0x4362da, _0x33ae7a) => {
        var _0x1970a8 = _0x2a77;
        _0x1891d2['login'] = _0x1891d2[_0x1970a8(0x1eb)] = login$, _0x5d72ea['mitih'](_0x33ae7a);
    };
}