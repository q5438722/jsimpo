const _0x54ad = [
    'find',
    'isArray',
    'Prism\x20doesn\x27t\x20support\x20language\x20\x27',
    'option',
    'default',
    'require',
    'forEach',
    '.js',
    'exports',
    'getBaseLanguageName',
    '73vffEAx',
    '19121dwHkwf',
    '41ToaGCs',
    '36797eJiwHd',
    '211ZLWKsY',
    '1081KdYVDk',
    '102818vzgefd',
    '1FqZEqt',
    '406596kUeWiD',
    '727784pfTrct',
    '56272OYKxFl',
    '15NXNYaC',
    'languages'
];
const _0x3c6f3d = _0x31bb;
(function (_0xa76d86, _0x641d30) {
    const _0x721ed8 = _0x31bb;
    while (!![]) {
        try {
            const _0x441fd6 = -parseInt(_0x721ed8(0xb5)) * -parseInt(_0x721ed8(0xb6)) + parseInt(_0x721ed8(0xb7)) * -parseInt(_0x721ed8(0xb8)) + parseInt(_0x721ed8(0xb9)) * -parseInt(_0x721ed8(0xba)) + -parseInt(_0x721ed8(0xbb)) * -parseInt(_0x721ed8(0xbc)) + -parseInt(_0x721ed8(0xbd)) + parseInt(_0x721ed8(0xbe)) + -parseInt(_0x721ed8(0xbf)) * -parseInt(_0x721ed8(0xc0));
            if (_0x441fd6 === _0x641d30)
                break;
            else
                _0xa76d86['push'](_0xa76d86['shift']());
        } catch (_0x46edf6) {
            _0xa76d86['push'](_0xa76d86['shift']());
        }
    }
}(_0x54ad, 0xe25af));
const Prism = require('prismjs'), prismComponents = require('prismjs/components'), getBaseLanguageName = (_0xa4a9fc, _0x5d70c3 = prismComponents) => {
        const _0x2de901 = _0x31bb;
        if (_0x5d70c3[_0x2de901(0xc1)][_0xa4a9fc])
            return _0xa4a9fc;
        return Object['keys'](_0x5d70c3[_0x2de901(0xc1)])[_0x2de901(0xc2)](_0x19f040 => {
            const _0x129e98 = _0x2de901, {alias: _0x316774} = _0x5d70c3[_0x129e98(0xc1)][_0x19f040];
            if (!_0x316774)
                return ![];
            return Array[_0x129e98(0xc3)](_0x316774) ? _0x316774['includes'](_0xa4a9fc) : _0x316774 === _0xa4a9fc;
        });
    };
function _0x31bb(_0x43110c, _0x151f56) {
    return _0x31bb = function (_0x54ad9d, _0x31bbbc) {
        _0x54ad9d = _0x54ad9d - 0xb5;
        let _0x1bccbb = _0x54ad[_0x54ad9d];
        return _0x1bccbb;
    }, _0x31bb(_0x43110c, _0x151f56);
}
module['exports'] = function loadPrismLanguage(_0x297b0f) {
    const _0x4eb6c7 = _0x31bb, _0x4321a4 = getBaseLanguageName(_0x297b0f);
    if (!_0x4321a4)
        throw new Error(_0x4eb6c7(0xc4) + _0x297b0f + '\x27.');
    if (Prism['languages'][_0x4321a4])
        return;
    const _0x39042e = prismComponents[_0x4eb6c7(0xc1)][_0x4321a4];
    if (_0x39042e[_0x4eb6c7(0xc5)] === _0x4eb6c7(0xc6))
        return;
    _0x39042e[_0x4eb6c7(0xc7)] && (Array[_0x4eb6c7(0xc3)](_0x39042e[_0x4eb6c7(0xc7)]) ? _0x39042e[_0x4eb6c7(0xc7)][_0x4eb6c7(0xc8)](loadPrismLanguage) : loadPrismLanguage(_0x39042e[_0x4eb6c7(0xc7)])), require('prismjs/components/prism-' + _0x4321a4 + _0x4eb6c7(0xc9));
}, module[_0x3c6f3d(0xca)][_0x3c6f3d(0xcb)] = getBaseLanguageName;
