function _0x13a1(_0xfa861e, _0xfe3888) {
    return _0x13a1 = function (_0x37a647, _0x426c26) {
        _0x37a647 = _0x37a647 - (6588 + 8337 + -7379 * 2);
        let _0x3f033b = _0x1722[_0x37a647];
        return _0x3f033b;
    }, _0x13a1(_0xfa861e, _0xfe3888);
}
const strapiAdmin = require(_0x7b373(179)), {getConfigUrls, getAbsoluteServerUrl} = require('strapi-utils'), loadConfiguration = require('../core/app-configuration'), ee = require(_0x7b373(180)), addSlash = require(_0x7b373(181));
module['exports'] = async function ({browser: _0x2d8c81}) {
    const _0x51acf9 = _0x7b373, _0x4745f1 = {
            'iXgmW': function (_0x4bba10, _0x4b234f) {
                return _0x4bba10(_0x4b234f);
            },
            'xGTRU': function (_0xdf4051, _0x2e9dac, _0x5ef1e0) {
                return _0xdf4051(_0x2e9dac, _0x5ef1e0);
            },
            'PsdFm': _0x51acf9(182),
            'okqbq': 'server.admin.port',
            'BHePK': _0x51acf9(183),
            'SYEZg': _0x51acf9(184)
        }, _0x5afd88 = process[_0x51acf9(185)](), _0x919a41 = _0x4745f1['iXgmW'](loadConfiguration, _0x5afd88), {adminPath: _0x138a55} = _0x4745f1[_0x51acf9(186)](getConfigUrls, _0x919a41['get'](_0x4745f1[_0x51acf9(187)]), !![]), _0x87cd56 = _0x919a41['get'](_0x4745f1['okqbq'], -4738 + -6751 + 1 * 19489), _0x2bd548 = _0x919a41[_0x51acf9(188)](_0x51acf9(189), _0x4745f1[_0x51acf9(190)]), _0x23fde5 = _0x919a41[_0x51acf9(188)](_0x4745f1['SYEZg'], []);
    _0x4745f1['iXgmW'](ee, { 'dir': _0x5afd88 }), strapiAdmin[_0x51acf9(191)]({
        'dir': _0x5afd88,
        'port': _0x87cd56,
        'host': _0x2bd548,
        'browser': _0x2d8c81,
        'options': {
            'backend': getAbsoluteServerUrl(_0x919a41, !![]),
            'publicPath': _0x4745f1['iXgmW'](addSlash, _0x138a55),
            'watchIgnoreFiles': _0x23fde5,
            'features': ee[_0x51acf9(192)] ? ee[_0x51acf9(193)][_0x51acf9(194)]() : []
        }
    });
};