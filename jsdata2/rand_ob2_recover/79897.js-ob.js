const fs = require('fs'), path = require(_0x17ba9b(401)), assetsDir = _0x17ba9b(402);
function getAssetsCopyOption(_0x1906f6, _0x40632 = {}) {
    const _0x91fe5c = _0x17ba9b;
    if (path[_0x91fe5c(403)](_0x1906f6)) {
        if (fs[_0x91fe5c(404)](_0x1906f6))
            return Object[_0x91fe5c(405)]({
                'from': _0x1906f6,
                'to': path['resolve'](process[_0x91fe5c(406)][_0x91fe5c(407)])
            }, _0x40632);
    }
    const _0x1ec4e1 = _0x1906f6;
    _0x1906f6 = path[_0x91fe5c(408)](process[_0x91fe5c(406)][_0x91fe5c(409)], _0x1906f6);
    if (fs['existsSync'](_0x1906f6))
        return Object[_0x91fe5c(405)]({
            'from': _0x1906f6,
            'to': path['resolve'](process[_0x91fe5c(406)][_0x91fe5c(407)], _0x1ec4e1)
        }, _0x40632);
}
function _0x294e(_0xd8b90f, _0x47d283) {
    return _0x294e = function (_0xcd8879, _0x294e5d) {
        _0xcd8879 = _0xcd8879 - 390;
        let _0x4e20a1 = _0xcd88[_0xcd8879];
        return _0x4e20a1;
    }, _0x294e(_0xd8b90f, _0x47d283);
}
function getAssetsCopyOptions(_0x55ec94) {
    const _0xbbdfbd = _0x17ba9b, _0x209aef = [];
    global['uniPlugin'][_0xbbdfbd(410)][_0xbbdfbd(411)](_0x9fbe38 => {
        const _0x9ebdff = _0xbbdfbd;
        global[_0x9ebdff(412)]['name'] !== _0x9fbe38 && _0x209aef[_0x9ebdff(413)](_0x9fbe38 + _0x9ebdff(414));
    });
    const _0x3b70e6 = [], _0x527054 = getAssetsCopyOption(_0x55ec94, { 'ignore': _0x209aef });
    return _0x527054 && _0x3b70e6[_0xbbdfbd(413)](_0x527054), process[_0xbbdfbd(415)] && Object['keys'](process[_0xbbdfbd(415)])['forEach'](_0x16dec9 => {
        const _0x37431b = _0xbbdfbd, _0x2ea595 = getAssetsCopyOption(path['join'](_0x16dec9, _0x55ec94), { 'ignore': _0x209aef });
        _0x2ea595 && _0x3b70e6[_0x37431b(413)](_0x2ea595);
    }), _0x3b70e6;
}
function getUniModulesAssetsCopyOptions(_0x4056c7) {
    const _0x3863c1 = _0x17ba9b, _0x5d453c = [];
    return global['uniModules'][_0x3863c1(411)](_0x745d4f => {
        const _0x5598e8 = _0x3863c1;
        _0x5d453c[_0x5598e8(413)](...getAssetsCopyOptions(_0x5598e8(416) + _0x745d4f + '/' + _0x4056c7));
    }), _0x5d453c;
}
function getCopyWebpackPluginOptions(_0x5a801d, _0x1d2bd3) {
    const _0x1203f7 = _0x17ba9b, _0x31f01a = getAssetsCopyOptions(assetsDir)[_0x1203f7(417)](getUniModulesAssetsCopyOptions(assetsDir));
    return global[_0x1203f7(412)][_0x1203f7(418)][_0x1203f7(411)](_0x539de6 => {
        const _0x420a97 = _0x1203f7, _0x1e225b = _0x539de6(_0x5a801d, _0x1d2bd3, _0x31f01a) || [];
        _0x1e225b[_0x420a97(411)](_0x44ef97 => {
            const _0x25fe2c = _0x420a97;
            typeof _0x44ef97 === _0x25fe2c(419) && (_0x44ef97 = getAssetsCopyOption(_0x44ef97)), _0x44ef97 && _0x31f01a[_0x25fe2c(413)](_0x44ef97);
        });
    }), process[_0x1203f7(406)][_0x1203f7(420)] === _0x1203f7(421) && _0x31f01a[_0x1203f7(413)]({
        'from': path[_0x1203f7(408)](process[_0x1203f7(406)]['UNI_INPUT_DIR'], _0x1203f7(422)),
        'to': _0x1203f7(423)
    }), _0x31f01a;
}
module[_0x17ba9b(424)] = {
    'assetsDir': assetsDir,
    'getCopyWebpackPluginOptions': getCopyWebpackPluginOptions
};