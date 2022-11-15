const _0x58ab = ['option', 'default', 'require', 'forEach', 'IaSep', 'prismjs/components/prism-', '.js', 'getBaseLanguageName', '1225909vvHUMH', '1ORQQoU', '1409026LmgMxU', '2681BmVtUv', '339tdJCRS', '324019tXMoZW', '4ITQGGm', '1015750XuRfXc', '731415OSfTea', '22oIbVoK', '84242RsadLu', 'prismjs', 'languages', 'find', 'isArray', 'includes', 'exports', 'kuTFL', 'Prism doesn\'t support language \'', 'cQWYV'];
const _0x3d11b6 = _0x5deb;

(function (_0x445ccd, _0x510b8c) {
    const _0x2d178d = _0x5deb;

    while (true) {
        try {
            const _0x215574 = parseInt(_0x2d178d(0x18f)) * parseInt(_0x2d178d(0x190)) + parseInt(_0x2d178d(0x191)) + parseInt(_0x2d178d(0x192)) * -parseInt(_0x2d178d(0x193)) + -parseInt(_0x2d178d(0x194)) * -parseInt(_0x2d178d(0x195)) + -parseInt(_0x2d178d(0x196)) + parseInt(_0x2d178d(0x197)) + parseInt(_0x2d178d(0x198)) * -parseInt(_0x2d178d(0x199));

            if (_0x215574 === _0x510b8c) break;else _0x445ccd.push(_0x445ccd.shift());
        } catch (_0x36bbe4) {
            _0x445ccd.push(_0x445ccd.shift());
        }
    }
})(_0x58ab, 884493);

const Prism = require(_0x3d11b6(0x19a));

const prismComponents = require('prismjs/components');

const getBaseLanguageName = (_0x1cb20b, _0x56b721 = prismComponents) => {
    const _0x452709 = _0x3d11b6;

    if (_0x56b721[_0x452709(0x19b)][_0x1cb20b]) return _0x1cb20b;
    return Object.keys(_0x56b721[_0x452709(0x19b)])[_0x452709(0x19c)](_0x2acc85 => {
        const _0x3df5bd = _0x452709;
        var { alias: _0x469991 } = _0x56b721.languages[_0x2acc85];

        if (!_0x469991) return false;
        return Array[_0x3df5bd(0x19d)](_0x469991) ? _0x469991[_0x3df5bd(0x19e)](_0x1cb20b) : _0x469991 === _0x1cb20b;
    });
};

function _0x5deb(_0x26ac5a, _0x355e55) {
    return _0x5deb = function (_0x51bcd2, _0x13fe0d) {
        _0x51bcd2 = _0x51bcd2 - 399;
        const _0x3aa739 = _0x58ab[_0x51bcd2];

        return _0x3aa739;
    }, _0x5deb(_0x26ac5a, _0x355e55);
}
module[_0x3d11b6(0x19f)] = function loadPrismLanguage(_0x2171f3) {
    const _0x50d114 = _0x3d11b6;
    const _0x2773c9 = {
        'kuTFL': function (_0x422372, _0x336d0b) {
            return _0x422372(_0x336d0b);
        },
        'cQWYV': function (_0x452f7a, _0x5d4f35) {
            return _0x452f7a === _0x5d4f35;
        },
        'IaSep': function (_0x38d473, _0x2ccd58) {
            return _0x38d473(_0x2ccd58);
        }
    };

    const _0xcb6911 = _0x2773c9[_0x50d114(0x1a0)](getBaseLanguageName, _0x2171f3);

    if (!_0xcb6911) throw new Error(_0x50d114(0x1a1) + _0x2171f3 + '\'.');
    if (Prism[_0x50d114(0x19b)][_0xcb6911]) return;
    const _0x2f3d6f = prismComponents.languages[_0xcb6911];

    if (_0x2773c9[_0x50d114(0x1a2)](_0x2f3d6f[_0x50d114(0x1a3)], _0x50d114(0x1a4))) return;
    _0x2f3d6f[_0x50d114(0x1a5)] && (Array[_0x50d114(0x19d)](_0x2f3d6f[_0x50d114(0x1a5)]) ? _0x2f3d6f[_0x50d114(0x1a5)][_0x50d114(0x1a6)](loadPrismLanguage) : loadPrismLanguage(_0x2f3d6f[_0x50d114(0x1a5)])), _0x2773c9[_0x50d114(0x1a7)](require, _0x50d114(0x1a8) + _0xcb6911 + _0x50d114(0x1a9));
}, module[_0x3d11b6(0x19f)][_0x3d11b6(0x1aa)] = getBaseLanguageName;
