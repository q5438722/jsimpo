const _0x15f4 = [
    'path',
    'static',
    'existsSync',
    'assign',
    'resolve',
    'env',
    'UNI_OUTPUT_DIR',
    'UNI_INPUT_DIR',
    'uniPlugin',
    'forEach',
    'name',
    'push',
    '/**/*',
    'UNI_SUBPACKAGES',
    'uniModules',
    'ADjKu',
    'HQjAL',
    'string',
    'app-plus',
    '[name].[ext]',
    'concat',
    'copyWebpackOptions',
    'DgXTj',
    'qlGpt',
    'vqFAN',
    'UNI_PLATFORM',
    'CbNKX',
    'lMNYR',
    'exports',
    '169351qhVDLl',
    '1MIFUBa',
    '48803WFzdlT',
    '438156jGnPyn',
    '1ajLQWt',
    '191537VvOOJT',
    '643191akoJrH',
    '10970ssjkyR',
    '19YvKTFb',
    '1541234LWrNrv'
];
const _0x4c04e0 = _0x2831;
(function (_0x4bcf4a, _0x95c7ae) {
    const _0x4fd111 = _0x2831;
    while (!![]) {
        try {
            const _0x55ae63 = -parseInt(_0x4fd111(0x18c)) * parseInt(_0x4fd111(0x18d)) + parseInt(_0x4fd111(0x18e)) + -parseInt(_0x4fd111(0x18f)) + -parseInt(_0x4fd111(0x190)) * parseInt(_0x4fd111(0x191)) + -parseInt(_0x4fd111(0x192)) + parseInt(_0x4fd111(0x193)) * parseInt(_0x4fd111(0x194)) + parseInt(_0x4fd111(0x195));
            if (_0x55ae63 === _0x95c7ae)
                break;
            else
                _0x4bcf4a['push'](_0x4bcf4a['shift']());
        } catch (_0x2f4b94) {
            _0x4bcf4a['push'](_0x4bcf4a['shift']());
        }
    }
}(_0x15f4, -0x21ab2 + -0x1 * -0xbf4b + -0x6caef * -0x1));
const fs = require('fs'), path = require(_0x4c04e0(0x196)), assetsDir = _0x4c04e0(0x197);
function getAssetsCopyOption(_0x1bda7a, _0x22a554 = {}) {
    const _0x1a350b = _0x4c04e0;
    if (path['isAbsolute'](_0x1bda7a)) {
        if (fs[_0x1a350b(0x198)](_0x1bda7a))
            return Object[_0x1a350b(0x199)]({
                'from': _0x1bda7a,
                'to': path[_0x1a350b(0x19a)](process[_0x1a350b(0x19b)][_0x1a350b(0x19c)])
            }, _0x22a554);
    }
    const _0x26143a = _0x1bda7a;
    _0x1bda7a = path['resolve'](process['env'][_0x1a350b(0x19d)], _0x1bda7a);
    if (fs['existsSync'](_0x1bda7a))
        return Object[_0x1a350b(0x199)]({
            'from': _0x1bda7a,
            'to': path[_0x1a350b(0x19a)](process[_0x1a350b(0x19b)][_0x1a350b(0x19c)], _0x26143a)
        }, _0x22a554);
}
function getAssetsCopyOptions(_0x5a4411) {
    const _0x3d8b53 = _0x4c04e0, _0x26940a = {
            'OcezR': function (_0x24de2d, _0xbe2dd4) {
                return _0x24de2d !== _0xbe2dd4;
            },
            'BFMta': function (_0x125634, _0x27330a, _0x19b943) {
                return _0x125634(_0x27330a, _0x19b943);
            }
        }, _0x5417d6 = [];
    global[_0x3d8b53(0x19e)]['platforms'][_0x3d8b53(0x19f)](_0x84c718 => {
        const _0xecc9f4 = _0x3d8b53;
        _0x26940a['OcezR'](global[_0xecc9f4(0x19e)][_0xecc9f4(0x1a0)], _0x84c718) && _0x5417d6[_0xecc9f4(0x1a1)](_0x84c718 + _0xecc9f4(0x1a2));
    });
    const _0x51cc50 = [], _0x16cc24 = getAssetsCopyOption(_0x5a4411, { 'ignore': _0x5417d6 });
    return _0x16cc24 && _0x51cc50['push'](_0x16cc24), process[_0x3d8b53(0x1a3)] && Object['keys'](process[_0x3d8b53(0x1a3)])[_0x3d8b53(0x19f)](_0x92549 => {
        const _0x131fc1 = _0x3d8b53, _0x54b1fe = _0x26940a['BFMta'](getAssetsCopyOption, path['join'](_0x92549, _0x5a4411), { 'ignore': _0x5417d6 });
        _0x54b1fe && _0x51cc50[_0x131fc1(0x1a1)](_0x54b1fe);
    }), _0x51cc50;
}
function getUniModulesAssetsCopyOptions(_0x52a3bf) {
    const _0x5bc3ed = _0x4c04e0, _0x327c64 = {
            'ADjKu': function (_0x14c99d, _0x2086b1) {
                return _0x14c99d + _0x2086b1;
            },
            'HQjAL': function (_0x1cde85, _0x10ecff) {
                return _0x1cde85 + _0x10ecff;
            },
            'jPZDp': function (_0x358708, _0x421395) {
                return _0x358708 + _0x421395;
            }
        }, _0x170b7f = [];
    return global[_0x5bc3ed(0x1a4)][_0x5bc3ed(0x19f)](_0x82daf0 => {
        const _0x88da61 = _0x5bc3ed;
        _0x170b7f[_0x88da61(0x1a1)](...getAssetsCopyOptions(_0x327c64[_0x88da61(0x1a5)](_0x327c64[_0x88da61(0x1a6)](_0x327c64['jPZDp']('uni_modules/', _0x82daf0), '/'), _0x52a3bf)));
    }), _0x170b7f;
}
function _0x2831(_0x1cb187, _0x4595f0) {
    return _0x2831 = function (_0x18683e, _0x3ed815) {
        _0x18683e = _0x18683e - (0xf65 + -0x24c0 + 0x16e7);
        let _0x373dd0 = _0x15f4[_0x18683e];
        return _0x373dd0;
    }, _0x2831(_0x1cb187, _0x4595f0);
}
function getCopyWebpackPluginOptions(_0x4a9648, _0x3420d2) {
    const _0x44b30f = _0x4c04e0, _0x447701 = {
            'qlGpt': function (_0x44c2c2, _0x1575ab) {
                return _0x44c2c2 === _0x1575ab;
            },
            'STQJs': _0x44b30f(0x1a7),
            'vqFAN': function (_0x388b3a, _0x416ae9) {
                return _0x388b3a(_0x416ae9);
            },
            'DgXTj': function (_0x3e0ca1, _0x328dbb, _0x488fd9, _0x172e3b) {
                return _0x3e0ca1(_0x328dbb, _0x488fd9, _0x172e3b);
            },
            'CbNKX': _0x44b30f(0x1a8),
            'lMNYR': 'android*.json',
            'TSdFe': _0x44b30f(0x1a9)
        }, _0x565d88 = getAssetsCopyOptions(assetsDir)[_0x44b30f(0x1aa)](_0x447701['vqFAN'](getUniModulesAssetsCopyOptions, assetsDir));
    return global[_0x44b30f(0x19e)][_0x44b30f(0x1ab)][_0x44b30f(0x19f)](_0x2fcf38 => {
        const _0x37c0d3 = _0x44b30f, _0x3e8a23 = _0x447701[_0x37c0d3(0x1ac)](_0x2fcf38, _0x4a9648, _0x3420d2, _0x565d88) || [];
        _0x3e8a23[_0x37c0d3(0x19f)](_0xcfb424 => {
            const _0x5cba35 = _0x37c0d3;
            _0x447701[_0x5cba35(0x1ad)](typeof _0xcfb424, _0x447701['STQJs']) && (_0xcfb424 = _0x447701[_0x5cba35(0x1ae)](getAssetsCopyOption, _0xcfb424)), _0xcfb424 && _0x565d88[_0x5cba35(0x1a1)](_0xcfb424);
        });
    }), process[_0x44b30f(0x19b)][_0x44b30f(0x1af)] === _0x447701[_0x44b30f(0x1b0)] && _0x565d88['push']({
        'from': path[_0x44b30f(0x19a)](process[_0x44b30f(0x19b)][_0x44b30f(0x19d)], _0x447701[_0x44b30f(0x1b1)]),
        'to': _0x447701['TSdFe']
    }), _0x565d88;
}
module[_0x4c04e0(0x1b2)] = {
    'assetsDir': assetsDir,
    'getCopyWebpackPluginOptions': getCopyWebpackPluginOptions
};
