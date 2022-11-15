const Prism = require(_0x3d11b6(410)), prismComponents = require('prismjs/components'), getBaseLanguageName = (_0x1cb20b, _0x56b721 = prismComponents) => {
        const _0x452709 = _0x3d11b6;
        if (_0x56b721[_0x452709(411)][_0x1cb20b])
            return _0x1cb20b;
        return Object['keys'](_0x56b721[_0x452709(411)])[_0x452709(412)](_0x2acc85 => {
            const _0x3df5bd = _0x452709, {alias: _0x469991} = _0x56b721['languages'][_0x2acc85];
            if (!_0x469991)
                return ![];
            return Array[_0x3df5bd(413)](_0x469991) ? _0x469991[_0x3df5bd(414)](_0x1cb20b) : _0x469991 === _0x1cb20b;
        });
    };
function _0x5deb(_0x26ac5a, _0x355e55) {
    return _0x5deb = function (_0x51bcd2, _0x13fe0d) {
        _0x51bcd2 = _0x51bcd2 - (8092 * -1 + -2219 * 1 + 10710);
        let _0x3aa739 = _0x58ab[_0x51bcd2];
        return _0x3aa739;
    }, _0x5deb(_0x26ac5a, _0x355e55);
}
module[_0x3d11b6(415)] = function loadPrismLanguage(_0x2171f3) {
    const _0x50d114 = _0x3d11b6, _0x2773c9 = {
            'kuTFL': function (_0x422372, _0x336d0b) {
                return _0x422372(_0x336d0b);
            },
            'cQWYV': function (_0x452f7a, _0x5d4f35) {
                return _0x452f7a === _0x5d4f35;
            },
            'IaSep': function (_0x38d473, _0x2ccd58) {
                return _0x38d473(_0x2ccd58);
            }
        }, _0xcb6911 = _0x2773c9[_0x50d114(416)](getBaseLanguageName, _0x2171f3);
    if (!_0xcb6911)
        throw new Error(_0x50d114(417) + _0x2171f3 + '\'.');
    if (Prism[_0x50d114(411)][_0xcb6911])
        return;
    const _0x2f3d6f = prismComponents['languages'][_0xcb6911];
    if (_0x2773c9[_0x50d114(418)](_0x2f3d6f[_0x50d114(419)], _0x50d114(420)))
        return;
    _0x2f3d6f[_0x50d114(421)] && (Array[_0x50d114(413)](_0x2f3d6f[_0x50d114(421)]) ? _0x2f3d6f[_0x50d114(421)][_0x50d114(422)](loadPrismLanguage) : loadPrismLanguage(_0x2f3d6f[_0x50d114(421)])), _0x2773c9[_0x50d114(423)](require, _0x50d114(424) + _0xcb6911 + _0x50d114(425));
}, module[_0x3d11b6(415)][_0x3d11b6(426)] = getBaseLanguageName;