'use strict';
var f = require('react'), g = 60103;
exports['Fragment'] = 60107;
if ('function' === typeof Symbol && Symbol['for']) {
    var h = Symbol['for'];
    g = h('react.element');
    exports['Fragment'] = h('react.fragment');
}
var m = require('react/lib/ReactCurrentOwner'), n = Object['prototype']['hasOwnProperty'], p = {
        'key': !0,
        'ref': !0,
        '__self': !0,
        '__source': !0
    };
function q(_0x3e9148, _0x42643f, _0x238c73) {
    var _0x42d9b5 = '0|6|5|2|4|3|1'['split']('|'), _0x5b9f01 = 0;
    while (!![]) {
        switch (_0x42d9b5[_0x5b9f01++]) {
        case '0':
            var _0x58419a, _0x531b90 = {}, _0x4ab2cb = null, _0x116559 = null;
            continue;
        case '1':
            return {
                '$$typeof': g,
                'type': _0x3e9148,
                'key': _0x4ab2cb,
                'ref': _0x116559,
                'props': _0x531b90,
                '_owner': m['current']
            };
        case '2':
            void 0 !== _0x42643f['ref'] && (_0x116559 = _0x42643f['ref']);
            continue;
        case '3':
            if (_0x3e9148 && _0x3e9148['defaultProps'])
                for (_0x58419a in (_0x42643f = _0x3e9148['defaultProps'], _0x42643f))
                    void 0 === _0x531b90[_0x58419a] && (_0x531b90[_0x58419a] = _0x42643f[_0x58419a]);
            continue;
        case '4':
            for (_0x58419a in _0x42643f)
                n['call'](_0x42643f, _0x58419a) && !p['hasOwnProperty'](_0x58419a) && (_0x531b90[_0x58419a] = _0x42643f[_0x58419a]);
            continue;
        case '5':
            void 0 !== _0x42643f['key'] && (_0x4ab2cb = '' + _0x42643f['key']);
            continue;
        case '6':
            void 0 !== _0x238c73 && (_0x4ab2cb = '' + _0x238c73);
            continue;
        }
        break;
    }
}
exports['jsx'] = q;
exports['jsxs'] = q;