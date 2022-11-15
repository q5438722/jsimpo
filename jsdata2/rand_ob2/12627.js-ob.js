'use strict';
const _0x44e2 = [
    '1MYSKhn',
    '3lvMBln',
    '130639ZpsOMk',
    '1337728dAFypu',
    '586430lgVLUi',
    '2207JXyMYT',
    '1213MoJpZy',
    'strapi-utils',
    '../core/app-configuration',
    '../utils/addSlash',
    'exports',
    'cwd',
    'get',
    'server',
    'server.admin.port',
    'server.admin.host',
    'localhost',
    'watchAdmin',
    'isEE',
    'features',
    'getEnabled',
    '1268660FxLtpG',
    '406139whdLWh',
    '1250374gLrwnS'
];
const _0x43a093 = _0x40a8;
(function (_0x27e98a, _0x11ffea) {
    const _0x19a760 = _0x40a8;
    while (!![]) {
        try {
            const _0x282f90 = parseInt(_0x19a760(0x1cc)) + parseInt(_0x19a760(0x1cd)) + -parseInt(_0x19a760(0x1ce)) * parseInt(_0x19a760(0x1cf)) + parseInt(_0x19a760(0x1d0)) * -parseInt(_0x19a760(0x1d1)) + -parseInt(_0x19a760(0x1d2)) + -parseInt(_0x19a760(0x1d3)) + -parseInt(_0x19a760(0x1d4)) * -parseInt(_0x19a760(0x1d5));
            if (_0x282f90 === _0x11ffea)
                break;
            else
                _0x27e98a['push'](_0x27e98a['shift']());
        } catch (_0x50bf04) {
            _0x27e98a['push'](_0x27e98a['shift']());
        }
    }
}(_0x44e2, 0xbfc21));
function _0x40a8(_0x29ee90, _0x9feed9) {
    return _0x40a8 = function (_0x44e2e4, _0x40a89f) {
        _0x44e2e4 = _0x44e2e4 - 0x1cc;
        let _0x329855 = _0x44e2[_0x44e2e4];
        return _0x329855;
    }, _0x40a8(_0x29ee90, _0x9feed9);
}
const strapiAdmin = require('strapi-admin'), {getConfigUrls, getAbsoluteServerUrl} = require(_0x43a093(0x1d6)), loadConfiguration = require(_0x43a093(0x1d7)), ee = require('../utils/ee'), addSlash = require(_0x43a093(0x1d8));
module[_0x43a093(0x1d9)] = async function ({browser: _0x1249b9}) {
    const _0x5f4672 = _0x43a093, _0x2ddf77 = process[_0x5f4672(0x1da)](), _0x5a06e4 = loadConfiguration(_0x2ddf77), {adminPath: _0x21936e} = getConfigUrls(_0x5a06e4[_0x5f4672(0x1db)](_0x5f4672(0x1dc)), !![]), _0x4b7361 = _0x5a06e4[_0x5f4672(0x1db)](_0x5f4672(0x1dd), 0x1f40), _0x5c6d94 = _0x5a06e4[_0x5f4672(0x1db)](_0x5f4672(0x1de), _0x5f4672(0x1df)), _0x354b17 = _0x5a06e4[_0x5f4672(0x1db)]('server.admin.watchIgnoreFiles', []);
    ee({ 'dir': _0x2ddf77 }), strapiAdmin[_0x5f4672(0x1e0)]({
        'dir': _0x2ddf77,
        'port': _0x4b7361,
        'host': _0x5c6d94,
        'browser': _0x1249b9,
        'options': {
            'backend': getAbsoluteServerUrl(_0x5a06e4, !![]),
            'publicPath': addSlash(_0x21936e),
            'watchIgnoreFiles': _0x354b17,
            'features': ee[_0x5f4672(0x1e1)] ? ee[_0x5f4672(0x1e2)][_0x5f4672(0x1e3)]() : []
        }
    });
};
