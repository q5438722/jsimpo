const _0xd15f = [
    'keys',
    'length',
    'string',
    'parse',
    'stringify',
    '20006docIRP',
    '184239LKtdHR',
    '22937gAgYwa',
    '14RQcano',
    '1CxEhhK',
    '42802fwtTBs',
    '1lwfpsc',
    '125714fNJcNs',
    '421924GeCYIK',
    '6umcCdH',
    '41032vIJxqe',
    'path',
    'indexOf',
    'forEach',
    'replace',
    'join',
    'env',
    'theme.json',
    'existsSync',
    'uniPlugin',
    'darkmode',
    'defaultTheme',
    'light',
    'error'
];
function _0x410b(_0x3a71d7, _0x5f0bd2) {
    return _0x410b = function (_0xd15f82, _0x410bd2) {
        _0xd15f82 = _0xd15f82 - 0x11d;
        let _0x216ec9 = _0xd15f[_0xd15f82];
        return _0x216ec9;
    }, _0x410b(_0x3a71d7, _0x5f0bd2);
}
const _0x1bee04 = _0x410b;
(function (_0x490bd1, _0x42c05d) {
    const _0x225dce = _0x410b;
    while (!![]) {
        try {
            const _0x48de63 = parseInt(_0x225dce(0x11d)) + parseInt(_0x225dce(0x11e)) + -parseInt(_0x225dce(0x11f)) * -parseInt(_0x225dce(0x120)) + -parseInt(_0x225dce(0x121)) * -parseInt(_0x225dce(0x122)) + -parseInt(_0x225dce(0x123)) * parseInt(_0x225dce(0x124)) + -parseInt(_0x225dce(0x125)) + parseInt(_0x225dce(0x126)) * parseInt(_0x225dce(0x127));
            if (_0x48de63 === _0x42c05d)
                break;
            else
                _0x490bd1['push'](_0x490bd1['shift']());
        } catch (_0x2f2924) {
            _0x490bd1['push'](_0x490bd1['shift']());
        }
    }
}(_0xd15f, 0x411df));
const fs = require('fs'), path = require(_0x1bee04(0x128)), {getJson} = require('./json');
function parseThemeByJsonStr(_0x38f7cd, _0xe347b1, _0x4c50ab) {
    const _0x29fc6e = _0x1bee04;
    if (_0x38f7cd[_0x29fc6e(0x129)]('@') === -0x1)
        return _0x38f7cd;
    return _0xe347b1[_0x29fc6e(0x12a)](_0x1720f3 => {
        const _0x121251 = _0x29fc6e;
        _0x38f7cd = _0x38f7cd[_0x121251(0x12b)](new RegExp('@' + _0x1720f3, 'g'), _0x4c50ab[_0x1720f3]);
    }), _0x38f7cd;
}
const themeJsonPath = path[_0x1bee04(0x12c)](process[_0x1bee04(0x12d)]['UNI_INPUT_DIR'], _0x1bee04(0x12e));
function hasTheme() {
    const _0x3d0140 = _0x1bee04;
    return fs[_0x3d0140(0x12f)](themeJsonPath);
}
function darkmode() {
    const _0xcf8b69 = _0x1bee04;
    return !!(global[_0xcf8b69(0x130)]['options'] || {})[_0xcf8b69(0x131)];
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
            const _0x3c3238 = getJson(_0x38d8de(0x12e), !![]);
            global[_0x38d8de(0x130)][_0x38d8de(0x132)] = _0x3c3238[_0x38d8de(0x133)];
        } catch (_0x20a7c5) {
            console[_0x38d8de(0x134)](_0x20a7c5);
        }
    },
    'parseTheme'(_0x247d68) {
        const _0x36cd35 = _0x1bee04, _0xc780b = global[_0x36cd35(0x130)][_0x36cd35(0x132)];
        if (!_0xc780b)
            return _0x247d68;
        const _0x5745e3 = Object[_0x36cd35(0x135)](_0xc780b);
        if (!_0x5745e3[_0x36cd35(0x136)])
            return _0x247d68;
        if (typeof _0x247d68 === _0x36cd35(0x137))
            return parseThemeByJsonStr(_0x247d68, _0x5745e3, _0xc780b);
        return JSON[_0x36cd35(0x138)](parseThemeByJsonStr(JSON[_0x36cd35(0x139)](_0x247d68), _0x5745e3, _0xc780b));
    }
};
