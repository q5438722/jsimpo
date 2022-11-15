var _0x4363 = [
    'isFunction',
    'last',
    'fromNodeCallback',
    'apply',
    'logIn',
    '829999wdcEPi',
    '1RSwNPh',
    '990151zElkxe',
    '203647KLSoZQ',
    '3083sgllLO',
    '207lWKGqu',
    '738460SIkaHD',
    '976314lAHzjw',
    '61vZwTRJ',
    '63631ZZOjIJ'
];
(function (_0x2b20b3, _0x20539f) {
    var _0x1152fc = _0x5964;
    while (!![]) {
        try {
            var _0x336a37 = -parseInt(_0x1152fc(0x106)) * -parseInt(_0x1152fc(0x107)) + parseInt(_0x1152fc(0x108)) + parseInt(_0x1152fc(0x109)) + -parseInt(_0x1152fc(0x10a)) * -parseInt(_0x1152fc(0x10b)) + parseInt(_0x1152fc(0x10c)) + parseInt(_0x1152fc(0x10d)) + parseInt(_0x1152fc(0x10e)) * -parseInt(_0x1152fc(0x10f));
            if (_0x336a37 === _0x20539f)
                break;
            else
                _0x2b20b3['push'](_0x2b20b3['shift']());
        } catch (_0x53ef09) {
            _0x2b20b3['push'](_0x2b20b3['shift']());
        }
    }
}(_0x4363, 0x78e9d));
import _0x6edb2f from 'lodash';
import { login } from 'passport/lib/http/request';
import { Observable } from 'rx';
function _0x5964(_0x13e4e1, _0x3bd89e) {
    return _0x5964 = function (_0x436344, _0x5964f1) {
        _0x436344 = _0x436344 - 0x106;
        var _0x46c4f0 = _0x4363[_0x436344];
        return _0x46c4f0;
    }, _0x5964(_0x13e4e1, _0x3bd89e);
}
function login$(..._0x188053) {
    var _0x3000ac = _0x5964;
    if (_0x6edb2f[_0x3000ac(0x110)](_0x6edb2f[_0x3000ac(0x111)](_0x188053)))
        return login['apply'](this, _0x188053);
    return Observable[_0x3000ac(0x112)](login)[_0x3000ac(0x113)](this, _0x188053);
}
export default function passportLogin() {
    return (_0x60a19d, _0x56fb4f, _0x3f259a) => {
        var _0x4e3aea = _0x5964;
        _0x60a19d['login'] = _0x60a19d[_0x4e3aea(0x114)] = login$, _0x3f259a();
    };
}
