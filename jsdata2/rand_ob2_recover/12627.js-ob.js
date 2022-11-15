function _0x40a8(_0x29ee90, _0x9feed9) {
    return _0x40a8 = function (_0x44e2e4, _0x40a89f) {
        _0x44e2e4 = _0x44e2e4 - 460;
        let _0x329855 = _0x44e2[_0x44e2e4];
        return _0x329855;
    }, _0x40a8(_0x29ee90, _0x9feed9);
}
const strapiAdmin = require('strapi-admin'), {getConfigUrls, getAbsoluteServerUrl} = require(_0x43a093(470)), loadConfiguration = require(_0x43a093(471)), ee = require('../utils/ee'), addSlash = require(_0x43a093(472));
module[_0x43a093(473)] = async function ({browser: _0x1249b9}) {
    const _0x5f4672 = _0x43a093, _0x2ddf77 = process[_0x5f4672(474)](), _0x5a06e4 = loadConfiguration(_0x2ddf77), {adminPath: _0x21936e} = getConfigUrls(_0x5a06e4[_0x5f4672(475)](_0x5f4672(476)), !![]), _0x4b7361 = _0x5a06e4[_0x5f4672(475)](_0x5f4672(477), 8000), _0x5c6d94 = _0x5a06e4[_0x5f4672(475)](_0x5f4672(478), _0x5f4672(479)), _0x354b17 = _0x5a06e4[_0x5f4672(475)]('server.admin.watchIgnoreFiles', []);
    ee({ 'dir': _0x2ddf77 }), strapiAdmin[_0x5f4672(480)]({
        'dir': _0x2ddf77,
        'port': _0x4b7361,
        'host': _0x5c6d94,
        'browser': _0x1249b9,
        'options': {
            'backend': getAbsoluteServerUrl(_0x5a06e4, !![]),
            'publicPath': addSlash(_0x21936e),
            'watchIgnoreFiles': _0x354b17,
            'features': ee[_0x5f4672(481)] ? ee[_0x5f4672(482)][_0x5f4672(483)]() : []
        }
    });
};