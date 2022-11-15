const _0x2e45 = ['68436ZRbTwg', '481619dlUPnZ', '546362UHRLDl', '5BiKTne', 'last', 'apply', 'fromNodeCallback', 'logIn', '1606607iDLBmr', '1478177AtVpVq', '1256623EauGUC', '1787396kTXtUO', '1XOSrdO'];

(function (_0x330ff5, _0x837d41) {
    const _0x4a5772 = _0x2a77;

    while (true) {
        try {
            const _0x590041 = parseInt(_0x4a5772(0x1df)) + -parseInt(_0x4a5772(0x1e0)) + parseInt(_0x4a5772(0x1e1)) + parseInt(_0x4a5772(0x1e2)) * parseInt(_0x4a5772(0x1e3)) + parseInt(_0x4a5772(0x1e4)) + parseInt(_0x4a5772(0x1e5)) + parseInt(_0x4a5772(0x1e6)) * -parseInt(_0x4a5772(0x1e7));

            if (_0x590041 === _0x837d41) break;else _0x330ff5.push(_0x330ff5.shift());
        } catch (_0x4d663c) {
            _0x330ff5.push(_0x330ff5.shift());
        }
    }
})(_0x2e45, 990694);
import _0x56ed66 from 'lodash';
import { login } from 'passport/lib/http/request';
import { Observable } from 'rx';
function login$(..._0x3f2a6c) {
    const _0x3d89ea = _0x2a77;

    if (_0x56ed66.isFunction(_0x56ed66[_0x3d89ea(0x1e8)](_0x3f2a6c))) return login[_0x3d89ea(0x1e9)](this, _0x3f2a6c);
    return Observable[_0x3d89ea(0x1ea)](login)[_0x3d89ea(0x1e9)](this, _0x3f2a6c);
}
function _0x2a77(_0x29293c, _0x44221b) {
    return _0x2a77 = function (_0x36792e, _0x4967a9) {
        _0x36792e = _0x36792e - 479;
        const _0x2c314d = _0x2e45[_0x36792e];

        return _0x2c314d;
    }, _0x2a77(_0x29293c, _0x44221b);
}
export default function passportLogin() {
    const _0x5d72ea = {
        'mitih': function (_0x172c17) {
            return _0x172c17();
        }
    };

    return (_0x1891d2, _0x4362da, _0x33ae7a) => {
        const _0x1970a8 = _0x2a77;

        _0x1891d2['login'] = _0x1891d2[_0x1970a8(0x1eb)] = login$, _0x5d72ea.mitih(_0x33ae7a);
    };
}
