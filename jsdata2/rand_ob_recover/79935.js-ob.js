const fs = require('fs'), path = require(_0x596951(186)), {getJson} = require(_0x596951(187));
function _0x56c7(_0x4c09a8, _0x55ae6b) {
    return _0x56c7 = function (_0x2099c3, _0x53289e) {
        _0x2099c3 = _0x2099c3 - (3117 * 1 + 7 * -735 + -2203 * -1);
        let _0x3be0d3 = _0x583c[_0x2099c3];
        return _0x3be0d3;
    }, _0x56c7(_0x4c09a8, _0x55ae6b);
}
function parseThemeByJsonStr(_0x2da51e, _0x213c4b, _0x20f40d) {
    const _0x411e5f = _0x596951, _0x206856 = {
            'CiFox': function (_0xf9ae2f, _0x603d1) {
                return _0xf9ae2f + _0x603d1;
            },
            'Kcxve': function (_0x2f18f0, _0x44f5d6) {
                return _0x2f18f0 === _0x44f5d6;
            }
        };
    if (_0x206856[_0x411e5f(188)](_0x2da51e['indexOf']('@'), -(3 * -3063 + 3162 + 6028)))
        return _0x2da51e;
    return _0x213c4b[_0x411e5f(189)](_0x51c0d0 => {
        const _0x440214 = _0x411e5f;
        _0x2da51e = _0x2da51e[_0x440214(190)](new RegExp(_0x206856[_0x440214(191)]('@', _0x51c0d0), 'g'), _0x20f40d[_0x51c0d0]);
    }), _0x2da51e;
}
const themeJsonPath = path[_0x596951(192)](process[_0x596951(193)][_0x596951(194)], _0x596951(195));
function hasTheme() {
    const _0x530a52 = _0x596951;
    return fs[_0x530a52(196)](themeJsonPath);
}
function darkmode() {
    const _0xf03fae = _0x596951;
    return !!(global[_0xf03fae(197)]['options'] || {})[_0xf03fae(198)];
}
module[_0x596951(199)] = {
    'darkmode': darkmode,
    'hasTheme': hasTheme,
    'initTheme'() {
        const _0x3955bf = _0x596951, _0x36fc8c = {
                'Agdoq': function (_0x1a8d03) {
                    return _0x1a8d03();
                },
                'YuCbZ': function (_0x3f989a) {
                    return _0x3f989a();
                },
                'LBItc': function (_0x53676f, _0x235db8, _0x40cbb0) {
                    return _0x53676f(_0x235db8, _0x40cbb0);
                },
                'RnXDw': _0x3955bf(195)
            };
        if (!_0x36fc8c[_0x3955bf(200)](hasTheme))
            return;
        if (_0x36fc8c[_0x3955bf(201)](darkmode))
            return;
        try {
            const _0x44890b = _0x36fc8c[_0x3955bf(202)](getJson, _0x36fc8c[_0x3955bf(203)], !![]);
            global[_0x3955bf(197)][_0x3955bf(204)] = _0x44890b[_0x3955bf(205)];
        } catch (_0x257f21) {
            console[_0x3955bf(206)](_0x257f21);
        }
    },
    'parseTheme'(_0x27d4de) {
        const _0x31546d = _0x596951, _0xb5a441 = {
                'XWkNI': function (_0x12e718, _0x136936) {
                    return _0x12e718 === _0x136936;
                },
                'PuTYQ': _0x31546d(207),
                'mbwhN': function (_0x3dcefb, _0x3bcfb9, _0x11331b, _0x5bec1c) {
                    return _0x3dcefb(_0x3bcfb9, _0x11331b, _0x5bec1c);
                }
            }, _0x360b12 = global[_0x31546d(197)]['defaultTheme'];
        if (!_0x360b12)
            return _0x27d4de;
        const _0x3f3800 = Object['keys'](_0x360b12);
        if (!_0x3f3800[_0x31546d(208)])
            return _0x27d4de;
        if (_0xb5a441[_0x31546d(209)](typeof _0x27d4de, _0xb5a441[_0x31546d(210)]))
            return _0xb5a441[_0x31546d(211)](parseThemeByJsonStr, _0x27d4de, _0x3f3800, _0x360b12);
        return JSON[_0x31546d(212)](_0xb5a441['mbwhN'](parseThemeByJsonStr, JSON[_0x31546d(213)](_0x27d4de), _0x3f3800, _0x360b12));
    }
};