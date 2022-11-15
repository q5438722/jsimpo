var _0x41aa = [
    '1UgOPps',
    '204199tHMkSD',
    '1197cJSMgo',
    '199owdXDH',
    '178287bqFXdY',
    '240018BxYxNC',
    'function',
    'map',
    'gJgFS',
    'split',
    'qmAGe',
    'apply',
    'concat',
    'eHtIO',
    'QmrLo',
    'pop',
    'length',
    '135553DbPgwp',
    '2PMkTzE',
    '485eJsUMi',
    '1381hoTHhA',
    '62169XPMrnI'
];
function _0x4f40(_0x30c792, _0x22d457) {
    return _0x4f40 = function (_0x303175, _0x4178a7) {
        _0x303175 = _0x303175 - (0x1e7 * 0x9 + 0x576 * -0x2 + 0x1 * -0x5c9);
        var _0x33ff02 = _0x41aa[_0x303175];
        return _0x33ff02;
    }, _0x4f40(_0x30c792, _0x22d457);
}
(function (_0x2c1199, _0x29f0dc) {
    var _0x53d3c6 = _0x4f40;
    while (!![]) {
        try {
            var _0x5c22f3 = parseInt(_0x53d3c6(0x6a)) * -parseInt(_0x53d3c6(0x6b)) + -parseInt(_0x53d3c6(0x6c)) * -parseInt(_0x53d3c6(0x6d)) + parseInt(_0x53d3c6(0x6e)) + parseInt(_0x53d3c6(0x6f)) * parseInt(_0x53d3c6(0x70)) + parseInt(_0x53d3c6(0x71)) * -parseInt(_0x53d3c6(0x72)) + -parseInt(_0x53d3c6(0x73)) + parseInt(_0x53d3c6(0x74));
            if (_0x5c22f3 === _0x29f0dc)
                break;
            else
                _0x2c1199['push'](_0x2c1199['shift']());
        } catch (_0x448798) {
            _0x2c1199['push'](_0x2c1199['shift']());
        }
    }
}(_0x41aa, -0x9a0c1 * 0x1 + 0x305a3 + 0xe0f9d));
import _0x490943 from './reduce';
import _0x517d3d from './internal/wrapAsync';
import {
    promiseCallback,
    PROMISE_SYMBOL
} from './internal/promiseCallback';
export default function seq(..._0x22149b) {
    var _0x18b6e5 = _0x4f40, _0x189cd4 = {
            'gJgFS': '1|4|2|0|3',
            'qmAGe': function (_0x490ad7, _0x1105a8, _0x10e237, _0x2fb5ef, _0x27dd4a) {
                return _0x490ad7(_0x1105a8, _0x10e237, _0x2fb5ef, _0x27dd4a);
            },
            'QmrLo': _0x18b6e5(0x75)
        }, _0x3892bd = _0x22149b[_0x18b6e5(0x76)](_0x517d3d);
    return function (..._0x297332) {
        var _0x2526ba = _0x18b6e5, _0x1ca97c = _0x189cd4[_0x2526ba(0x77)][_0x2526ba(0x78)]('|'), _0x1e2f87 = 0x2387 + -0x1c13 + -0x774;
        while (!![]) {
            switch (_0x1ca97c[_0x1e2f87++]) {
            case '0':
                _0x189cd4[_0x2526ba(0x79)](_0x490943, _0x3892bd, _0x297332, (_0x3d7a1c, _0x1791f0, _0x18c268) => {
                    var _0x5b24aa = _0x2526ba, _0x2c6427 = {
                            'eHtIO': function (_0x42cf78, _0x4848a6, _0x115003) {
                                return _0x42cf78(_0x4848a6, _0x115003);
                            }
                        };
                    _0x1791f0[_0x5b24aa(0x7a)](_0x14673d, _0x3d7a1c[_0x5b24aa(0x7b)]((_0x468c9b, ..._0x2fcfe1) => {
                        var _0x4c31a7 = _0x5b24aa;
                        _0x2c6427[_0x4c31a7(0x7c)](_0x18c268, _0x468c9b, _0x2fcfe1);
                    }));
                }, (_0x252fb2, _0x32f23c) => _0xb69985(_0x252fb2, ..._0x32f23c));
                continue;
            case '1':
                var _0x14673d = this;
                continue;
            case '2':
                typeof _0xb69985 == _0x189cd4[_0x2526ba(0x7d)] ? _0x297332[_0x2526ba(0x7e)]() : _0xb69985 = promiseCallback();
                continue;
            case '3':
                return _0xb69985[PROMISE_SYMBOL];
            case '4':
                var _0xb69985 = _0x297332[_0x297332[_0x2526ba(0x7f)] - (0x33 * -0x7d + -0xe68 + 0x2750)];
                continue;
            }
            break;
        }
    };
}
