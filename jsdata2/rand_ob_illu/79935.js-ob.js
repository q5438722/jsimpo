const _0x583c = ['34oHfYHs', '534109CyljqU', 'path', './json', 'Kcxve', 'forEach', 'replace', 'CiFox', 'join', 'env', 'UNI_INPUT_DIR', 'theme.json', 'existsSync', 'uniPlugin', 'darkmode', 'exports', 'Agdoq', 'YuCbZ', 'LBItc', 'RnXDw', 'defaultTheme', 'light', 'error', 'string', 'length', 'XWkNI', 'PuTYQ', 'mbwhN', 'parse', 'stringify', '43948cLSJGC', '9MfvyAA', '38932zgUgrh', '153845JtmKKc', '1047TzyjbK', '85kEITWk', '2Aagvyh', '7968KsHYbt', '11377XWRqxa'];
const _0x596951 = _0x56c7;

(function (_0x5d62e8, _0x46feea) {
    const _0x1d3c7b = _0x56c7;

    while (true) {
        try {
            const _0x5ebded = -parseInt(_0x1d3c7b(0xaf)) + -parseInt(_0x1d3c7b(0xb0)) * -parseInt(_0x1d3c7b(0xb1)) + parseInt(_0x1d3c7b(0xb2)) + parseInt(_0x1d3c7b(0xb3)) * -parseInt(_0x1d3c7b(0xb4)) + parseInt(_0x1d3c7b(0xb5)) * parseInt(_0x1d3c7b(0xb6)) + -parseInt(_0x1d3c7b(0xb7)) * -parseInt(_0x1d3c7b(0xb8)) + -parseInt(_0x1d3c7b(0xb9));

            if (_0x5ebded === _0x46feea) break;else _0x5d62e8.push(_0x5d62e8.shift());
        } catch (_0x4986e6) {
            _0x5d62e8.push(_0x5d62e8.shift());
        }
    }
})(_0x583c, 239935);

const fs = require('fs');

const path = require(_0x596951(0xba));

var { getJson } = require(_0x596951(0xbb));

function _0x56c7(_0x4c09a8, _0x55ae6b) {
    return _0x56c7 = function (_0x2099c3, _0x53289e) {
        _0x2099c3 = _0x2099c3 - 175;
        const _0x3be0d3 = _0x583c[_0x2099c3];

        return _0x3be0d3;
    }, _0x56c7(_0x4c09a8, _0x55ae6b);
}
function parseThemeByJsonStr(_0x2da51e, _0x213c4b, _0x20f40d) {
    const _0x411e5f = _0x596951;
    const _0x206856 = {
        'CiFox': function (_0xf9ae2f, _0x603d1) {
            return _0xf9ae2f + _0x603d1;
        },
        'Kcxve': function (_0x2f18f0, _0x44f5d6) {
            return _0x2f18f0 === _0x44f5d6;
        }
    };

    if (_0x206856[_0x411e5f(0xbc)](_0x2da51e.indexOf('@'), -1)) return _0x2da51e;
    return _0x213c4b[_0x411e5f(0xbd)](_0x51c0d0 => {
        const _0x440214 = _0x411e5f;

        _0x2da51e = _0x2da51e[_0x440214(0xbe)](new RegExp(_0x206856[_0x440214(0xbf)]('@', _0x51c0d0), 'g'), _0x20f40d[_0x51c0d0]);
    }), _0x2da51e;
}

const themeJsonPath = path[_0x596951(0xc0)](process[_0x596951(0xc1)][_0x596951(0xc2)], _0x596951(0xc3));

function hasTheme() {
    const _0x530a52 = _0x596951;

    return fs[_0x530a52(0xc4)](themeJsonPath);
}
function darkmode() {
    const _0xf03fae = _0x596951;

    return !!(global[_0xf03fae(0xc5)].options || {})[_0xf03fae(0xc6)];
}
module[_0x596951(0xc7)] = {
    'darkmode': darkmode,
    'hasTheme': hasTheme,
    'initTheme'() {
        const _0x3955bf = _0x596951;
        const _0x36fc8c = {
            'Agdoq': function (_0x1a8d03) {
                return _0x1a8d03();
            },
            'YuCbZ': function (_0x3f989a) {
                return _0x3f989a();
            },
            'LBItc': function (_0x53676f, _0x235db8, _0x40cbb0) {
                return _0x53676f(_0x235db8, _0x40cbb0);
            },
            'RnXDw': _0x3955bf(0xc3)
        };

        if (!_0x36fc8c[_0x3955bf(0xc8)](hasTheme)) return;
        if (_0x36fc8c[_0x3955bf(0xc9)](darkmode)) return;
        try {
            const _0x44890b = _0x36fc8c[_0x3955bf(0xca)](getJson, _0x36fc8c[_0x3955bf(0xcb)], true);

            global[_0x3955bf(0xc5)][_0x3955bf(0xcc)] = _0x44890b[_0x3955bf(0xcd)];
        } catch (_0x257f21) {
            console[_0x3955bf(0xce)](_0x257f21);
        }
    },
    'parseTheme'(_0x27d4de) {
        const _0x31546d = _0x596951;
        const _0xb5a441 = {
            'XWkNI': function (_0x12e718, _0x136936) {
                return _0x12e718 === _0x136936;
            },
            'PuTYQ': _0x31546d(0xcf),
            'mbwhN': function (_0x3dcefb, _0x3bcfb9, _0x11331b, _0x5bec1c) {
                return _0x3dcefb(_0x3bcfb9, _0x11331b, _0x5bec1c);
            }
        };

        const _0x360b12 = global[_0x31546d(0xc5)].defaultTheme;

        if (!_0x360b12) return _0x27d4de;

        const _0x3f3800 = Object.keys(_0x360b12);

        if (!_0x3f3800[_0x31546d(0xd0)]) return _0x27d4de;
        if (_0xb5a441[_0x31546d(0xd1)](typeof _0x27d4de, _0xb5a441[_0x31546d(0xd2)])) return _0xb5a441[_0x31546d(0xd3)](parseThemeByJsonStr, _0x27d4de, _0x3f3800, _0x360b12);
        return JSON[_0x31546d(0xd4)](_0xb5a441.mbwhN(parseThemeByJsonStr, JSON[_0x31546d(0xd5)](_0x27d4de), _0x3f3800, _0x360b12));
    }
};
