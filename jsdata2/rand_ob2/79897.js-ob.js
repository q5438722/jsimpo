const _0xcd88 = [
    '1635143lENrec',
    '1321hgNWmm',
    '73hrWlqg',
    '397Ljueee',
    '2075xvoNrT',
    '1uGySoc',
    '639257LgQRgU',
    'path',
    'static',
    'isAbsolute',
    'existsSync',
    'assign',
    'env',
    'UNI_OUTPUT_DIR',
    'resolve',
    'UNI_INPUT_DIR',
    'platforms',
    'forEach',
    'uniPlugin',
    'push',
    '/**/*',
    'UNI_SUBPACKAGES',
    'uni_modules/',
    'concat',
    'copyWebpackOptions',
    'string',
    'UNI_PLATFORM',
    'app-plus',
    'android*.json',
    '[name].[ext]',
    'exports',
    '1554064CXykgg',
    '1249559ntQgtE',
    '735268SkECLw',
    '2YRAyYR'
];
const _0x17ba9b = _0x294e;
(function (_0x4617fe, _0x17a3d1) {
    const _0x26007c = _0x294e;
    while (!![]) {
        try {
            const _0x16217e = -parseInt(_0x26007c(0x186)) + parseInt(_0x26007c(0x187)) + -parseInt(_0x26007c(0x188)) * -parseInt(_0x26007c(0x189)) + -parseInt(_0x26007c(0x18a)) + parseInt(_0x26007c(0x18b)) * -parseInt(_0x26007c(0x18c)) + parseInt(_0x26007c(0x18d)) * parseInt(_0x26007c(0x18e)) + parseInt(_0x26007c(0x18f)) * parseInt(_0x26007c(0x190));
            if (_0x16217e === _0x17a3d1)
                break;
            else
                _0x4617fe['push'](_0x4617fe['shift']());
        } catch (_0x4f24f4) {
            _0x4617fe['push'](_0x4617fe['shift']());
        }
    }
}(_0xcd88, 0xdb1cf));
const fs = require('fs'), path = require(_0x17ba9b(0x191)), assetsDir = _0x17ba9b(0x192);
function getAssetsCopyOption(_0x1906f6, _0x40632 = {}) {
    const _0x91fe5c = _0x17ba9b;
    if (path[_0x91fe5c(0x193)](_0x1906f6)) {
        if (fs[_0x91fe5c(0x194)](_0x1906f6))
            return Object[_0x91fe5c(0x195)]({
                'from': _0x1906f6,
                'to': path['resolve'](process[_0x91fe5c(0x196)][_0x91fe5c(0x197)])
            }, _0x40632);
    }
    const _0x1ec4e1 = _0x1906f6;
    _0x1906f6 = path[_0x91fe5c(0x198)](process[_0x91fe5c(0x196)][_0x91fe5c(0x199)], _0x1906f6);
    if (fs['existsSync'](_0x1906f6))
        return Object[_0x91fe5c(0x195)]({
            'from': _0x1906f6,
            'to': path['resolve'](process[_0x91fe5c(0x196)][_0x91fe5c(0x197)], _0x1ec4e1)
        }, _0x40632);
}
function _0x294e(_0xd8b90f, _0x47d283) {
    return _0x294e = function (_0xcd8879, _0x294e5d) {
        _0xcd8879 = _0xcd8879 - 0x186;
        let _0x4e20a1 = _0xcd88[_0xcd8879];
        return _0x4e20a1;
    }, _0x294e(_0xd8b90f, _0x47d283);
}
function getAssetsCopyOptions(_0x55ec94) {
    const _0xbbdfbd = _0x17ba9b, _0x209aef = [];
    global['uniPlugin'][_0xbbdfbd(0x19a)][_0xbbdfbd(0x19b)](_0x9fbe38 => {
        const _0x9ebdff = _0xbbdfbd;
        global[_0x9ebdff(0x19c)]['name'] !== _0x9fbe38 && _0x209aef[_0x9ebdff(0x19d)](_0x9fbe38 + _0x9ebdff(0x19e));
    });
    const _0x3b70e6 = [], _0x527054 = getAssetsCopyOption(_0x55ec94, { 'ignore': _0x209aef });
    return _0x527054 && _0x3b70e6[_0xbbdfbd(0x19d)](_0x527054), process[_0xbbdfbd(0x19f)] && Object['keys'](process[_0xbbdfbd(0x19f)])['forEach'](_0x16dec9 => {
        const _0x37431b = _0xbbdfbd, _0x2ea595 = getAssetsCopyOption(path['join'](_0x16dec9, _0x55ec94), { 'ignore': _0x209aef });
        _0x2ea595 && _0x3b70e6[_0x37431b(0x19d)](_0x2ea595);
    }), _0x3b70e6;
}
function getUniModulesAssetsCopyOptions(_0x4056c7) {
    const _0x3863c1 = _0x17ba9b, _0x5d453c = [];
    return global['uniModules'][_0x3863c1(0x19b)](_0x745d4f => {
        const _0x5598e8 = _0x3863c1;
        _0x5d453c[_0x5598e8(0x19d)](...getAssetsCopyOptions(_0x5598e8(0x1a0) + _0x745d4f + '/' + _0x4056c7));
    }), _0x5d453c;
}
function getCopyWebpackPluginOptions(_0x5a801d, _0x1d2bd3) {
    const _0x1203f7 = _0x17ba9b, _0x31f01a = getAssetsCopyOptions(assetsDir)[_0x1203f7(0x1a1)](getUniModulesAssetsCopyOptions(assetsDir));
    return global[_0x1203f7(0x19c)][_0x1203f7(0x1a2)][_0x1203f7(0x19b)](_0x539de6 => {
        const _0x420a97 = _0x1203f7, _0x1e225b = _0x539de6(_0x5a801d, _0x1d2bd3, _0x31f01a) || [];
        _0x1e225b[_0x420a97(0x19b)](_0x44ef97 => {
            const _0x25fe2c = _0x420a97;
            typeof _0x44ef97 === _0x25fe2c(0x1a3) && (_0x44ef97 = getAssetsCopyOption(_0x44ef97)), _0x44ef97 && _0x31f01a[_0x25fe2c(0x19d)](_0x44ef97);
        });
    }), process[_0x1203f7(0x196)][_0x1203f7(0x1a4)] === _0x1203f7(0x1a5) && _0x31f01a[_0x1203f7(0x19d)]({
        'from': path[_0x1203f7(0x198)](process[_0x1203f7(0x196)]['UNI_INPUT_DIR'], _0x1203f7(0x1a6)),
        'to': _0x1203f7(0x1a7)
    }), _0x31f01a;
}
module[_0x17ba9b(0x1a8)] = {
    'assetsDir': assetsDir,
    'getCopyWebpackPluginOptions': getCopyWebpackPluginOptions
};
