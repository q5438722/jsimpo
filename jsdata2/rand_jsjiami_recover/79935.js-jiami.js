const fs = require('fs');
const path = require('path');
const {getJson} = require('./json');
function parseThemeByJsonStr(_0x133488, _0x59004d, _0x8ca81a) {
    if (_0x133488['indexOf']('@') === -1) {
        return _0x133488;
    }
    _0x59004d['forEach'](_0x48a7ce => {
        _0x133488 = _0x133488['replace'](new RegExp('@' + _0x48a7ce, 'g'), _0x8ca81a[_0x48a7ce]);
    });
    return _0x133488;
}
const themeJsonPath = path['join'](process['env']['UNI_INPUT_DIR'], 'theme.json');
function hasTheme() {
    return fs['existsSync'](themeJsonPath);
}
function darkmode() {
    return !!(global['uniPlugin']['options'] || {})['darkmode'];
}
module['exports'] = {
    'darkmode': darkmode,
    'hasTheme': hasTheme,
    'initTheme'() {
        if (!hasTheme()) {
            if ('ohRqs' !== 'ohRqs') {
                if (jsonStr['indexOf']('@') === -1) {
                    return jsonStr;
                }
                keys['forEach'](_0x183d41 => {
                    jsonStr = jsonStr['replace'](new RegExp('@' + _0x183d41, 'g'), theme[_0x183d41]);
                });
                return jsonStr;
            } else {
                return;
            }
        }
        if (darkmode()) {
            if ('VmoqB' !== 'VmoqB') {
                console['error'](e);
            } else {
                return;
            }
        }
        try {
            const _0x492a12 = getJson('theme.json', !![]);
            global['uniPlugin']['defaultTheme'] = _0x492a12['light'];
        } catch (_0x5b9535) {
            if ('ggcaV' !== 'mKyuY') {
                console['error'](_0x5b9535);
            } else {
                return !!(global['uniPlugin']['options'] || {})['darkmode'];
            }
        }
    },
    'parseTheme'(_0x16a9ce) {
        const _0x42ef64 = global['uniPlugin']['defaultTheme'];
        if (!_0x42ef64) {
            return _0x16a9ce;
        }
        const _0x4e26b1 = Object['keys'](_0x42ef64);
        if (!_0x4e26b1['length']) {
            return _0x16a9ce;
        }
        if (typeof _0x16a9ce === 'string') {
            if ('skcGu' !== 'WDYIs') {
                return parseThemeByJsonStr(_0x16a9ce, _0x4e26b1, _0x42ef64);
            } else {
                return fs['existsSync'](themeJsonPath);
            }
        }
        return JSON['parse'](parseThemeByJsonStr(JSON['stringify'](_0x16a9ce), _0x4e26b1, _0x42ef64));
    }
};