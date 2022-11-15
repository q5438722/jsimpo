const _0x2127 = ['12406KPNPyp', '29LwZrHi', '139yDsHLH', '73WjigKN', '1jfRwmS', '1561774EfNsVf', 'IuIXb', 'invalid frontColor "', 'linear', 'WAYiL', 'duration', 'timingFunc', 'BMqgj', '1kOUGEe', '199939duRHtO', '312Roudlj', '980rqhkgQ', '365492BMhjjM', '382227vBdWxc'];

(function (_0x1f963c, _0xbce730) {
    const _0x425009 = _0x3efa;

    while (true) {
        try {
            const _0x4c75e1 = parseInt(_0x425009(0x1da)) * parseInt(_0x425009(0x1db)) + -parseInt(_0x425009(0x1dc)) * parseInt(_0x425009(0x1dd)) + -parseInt(_0x425009(0x1de)) + -parseInt(_0x425009(0x1df)) + parseInt(_0x425009(0x1e0)) * -parseInt(_0x425009(0x1e1)) + -parseInt(_0x425009(0x1e2)) * parseInt(_0x425009(0x1e3)) + -parseInt(_0x425009(0x1e4)) * -parseInt(_0x425009(0x1e5));

            if (_0x4c75e1 === _0xbce730) break;else _0x1f963c.push(_0x1f963c.shift());
        } catch (_0x54b88d) {
            _0x1f963c.push(_0x1f963c.shift());
        }
    }
})(_0x2127, 338313);
function _0x3efa(_0x378bd6, _0x1d46fe) {
    return _0x3efa = function (_0x2ad676, _0x58f43e) {
        _0x2ad676 = _0x2ad676 - 474;
        const _0x997694 = _0x2127[_0x2ad676];

        return _0x997694;
    }, _0x3efa(_0x378bd6, _0x1d46fe);
}
const FRONT_COLORS = ['#ffffff', '#000000'];

export const setNavigationBarColor = {
    'frontColor': {
        'type': String,
        'required': true,
        'validator'(_0x540734, _0xe6365f) {
            const _0xbf819d = _0x3efa;
            const _0x2d451c = {
                'IuIXb': function (_0x3c6b50, _0x19ec74) {
                    return _0x3c6b50 === _0x19ec74;
                }
            };

            if (_0x2d451c[_0xbf819d(0x1e6)](FRONT_COLORS.indexOf(_0x540734), -1)) return _0xbf819d(0x1e7) + _0x540734 + '"';
        }
    },
    'backgroundColor': {
        'type': String,
        'required': true
    },
    'animation': {
        'type': Object,
        'default'() {
            const _0x287851 = _0x3efa;
            const _0x3887bd = { 'WAYiL': _0x287851(0x1e8) };

            return {
                'duration': 0x0,
                'timingFunc': _0x3887bd[_0x287851(0x1e9)]
            };
        },
        'validator'(_0x44470e = {}, _0x1b5339) {
            const _0x5fe3dc = _0x3efa;
            const _0x3d0bf5 = { 'BMqgj': _0x5fe3dc(0x1e8) };

            _0x1b5339['animation'] = {
                'duration': _0x44470e[_0x5fe3dc(0x1ea)] || 0,
                'timingFunc': _0x44470e[_0x5fe3dc(0x1eb)] || _0x3d0bf5[_0x5fe3dc(0x1ec)]
            };
        }
    }
};
export const setNavigationBarTitle = {
    'title': {
        'type': String,
        'required': true
    }
};
