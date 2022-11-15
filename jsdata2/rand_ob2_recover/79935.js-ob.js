const fs = require('fs'), path = require(_0x1bee04(296)), {getJson} = require('./json');
function parseThemeByJsonStr(_0x38f7cd, _0xe347b1, _0x4c50ab) {
    const _0x29fc6e = _0x1bee04;
    if (_0x38f7cd[_0x29fc6e(297)]('@') === -1)
        return _0x38f7cd;
    return _0xe347b1[_0x29fc6e(298)](_0x1720f3 => {
        const _0x121251 = _0x29fc6e;
        _0x38f7cd = _0x38f7cd[_0x121251(299)](new RegExp('@' + _0x1720f3, 'g'), _0x4c50ab[_0x1720f3]);
    }), _0x38f7cd;
}
const themeJsonPath = path[_0x1bee04(300)](process[_0x1bee04(301)]['UNI_INPUT_DIR'], _0x1bee04(302));
function hasTheme() {
    const _0x3d0140 = _0x1bee04;
    return fs[_0x3d0140(303)](themeJsonPath);
}
function darkmode() {
    const _0xcf8b69 = _0x1bee04;
    return !!(global[_0xcf8b69(304)]['options'] || {})[_0xcf8b69(305)];
}
module['exports'] = {
    'darkmode': darkmode,
    'hasTheme': hasTheme,
    'initTheme'() {
        const _0x38d8de = _0x1bee04;
        if (!hasTheme())
            return;
        if (darkmode())
            return;
        try {
            const _0x3c3238 = getJson(_0x38d8de(302), !![]);
            global[_0x38d8de(304)][_0x38d8de(306)] = _0x3c3238[_0x38d8de(307)];
        } catch (_0x20a7c5) {
            console[_0x38d8de(308)](_0x20a7c5);
        }
    },
    'parseTheme'(_0x247d68) {
        const _0x36cd35 = _0x1bee04, _0xc780b = global[_0x36cd35(304)][_0x36cd35(306)];
        if (!_0xc780b)
            return _0x247d68;
        const _0x5745e3 = Object[_0x36cd35(309)](_0xc780b);
        if (!_0x5745e3[_0x36cd35(310)])
            return _0x247d68;
        if (typeof _0x247d68 === _0x36cd35(311))
            return parseThemeByJsonStr(_0x247d68, _0x5745e3, _0xc780b);
        return JSON[_0x36cd35(312)](parseThemeByJsonStr(JSON[_0x36cd35(313)](_0x247d68), _0x5745e3, _0xc780b));
    }
};