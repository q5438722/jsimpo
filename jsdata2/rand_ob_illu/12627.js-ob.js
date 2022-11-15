'use strict';

const _0x1722 = ['BHePK', 'watchAdmin', 'isEE', 'features', 'getEnabled', '1789QycnVa', '191BsTbnY', '62qSXeDF', '19571MBNKSE', '8ibFpgo', '1270zLGbyM', '14fIoCzo', '84329TMCxNS', '260235uGbLfp', '1cBDTiu', '1501258TWRHUg', '1666651GCMLei', 'strapi-admin', '../utils/ee', '../utils/addSlash', 'server', 'localhost', 'server.admin.watchIgnoreFiles', 'cwd', 'xGTRU', 'PsdFm', 'get', 'server.admin.host'];
const _0x7b373 = _0x13a1;

(function (_0x5ebcd6, _0x329ad2) {
    const _0x3c8842 = _0x13a1;

    while (true) {
        try {
            const _0x39ef49 = parseInt(_0x3c8842(0xa7)) * parseInt(_0x3c8842(0xa8)) + -parseInt(_0x3c8842(0xa9)) * -parseInt(_0x3c8842(0xaa)) + -parseInt(_0x3c8842(0xab)) * parseInt(_0x3c8842(0xac)) + parseInt(_0x3c8842(0xad)) * -parseInt(_0x3c8842(0xae)) + parseInt(_0x3c8842(0xaf)) * parseInt(_0x3c8842(0xb0)) + -parseInt(_0x3c8842(0xb1)) + parseInt(_0x3c8842(0xb2));

            if (_0x39ef49 === _0x329ad2) break;else _0x5ebcd6.push(_0x5ebcd6.shift());
        } catch (_0x2370ed) {
            _0x5ebcd6.push(_0x5ebcd6.shift());
        }
    }
})(_0x1722, 789963);
function _0x13a1(_0xfa861e, _0xfe3888) {
    return _0x13a1 = function (_0x37a647, _0x426c26) {
        _0x37a647 = _0x37a647 - 167;
        const _0x3f033b = _0x1722[_0x37a647];

        return _0x3f033b;
    }, _0x13a1(_0xfa861e, _0xfe3888);
}

const strapiAdmin = require(_0x7b373(0xb3));

var { getConfigUrls, getAbsoluteServerUrl } = require('strapi-utils');

const loadConfiguration = require('../core/app-configuration');

const ee = require(_0x7b373(0xb4));

const addSlash = require(_0x7b373(0xb5));

module['exports'] = async function ({ browser: _0x2d8c81 }) {
    const _0x51acf9 = _0x7b373;
    const _0x4745f1 = {
        'iXgmW': function (_0x4bba10, _0x4b234f) {
            return _0x4bba10(_0x4b234f);
        },
        'xGTRU': function (_0xdf4051, _0x2e9dac, _0x5ef1e0) {
            return _0xdf4051(_0x2e9dac, _0x5ef1e0);
        },
        'PsdFm': _0x51acf9(0xb6),
        'okqbq': 'server.admin.port',
        'BHePK': _0x51acf9(0xb7),
        'SYEZg': _0x51acf9(0xb8)
    };

    const _0x5afd88 = process[_0x51acf9(0xb9)]();

    const _0x919a41 = _0x4745f1.iXgmW(loadConfiguration, _0x5afd88);

    var { adminPath: _0x138a55 } = _0x4745f1[_0x51acf9(0xba)](getConfigUrls, _0x919a41.get(_0x4745f1[_0x51acf9(0xbb)]), true);

    const _0x87cd56 = _0x919a41.get(_0x4745f1.okqbq, 8000);

    const _0x2bd548 = _0x919a41[_0x51acf9(0xbc)](_0x51acf9(0xbd), _0x4745f1[_0x51acf9(0xbe)]);

    const _0x23fde5 = _0x919a41[_0x51acf9(0xbc)](_0x4745f1.SYEZg, []);

    _0x4745f1.iXgmW(ee, { 'dir': _0x5afd88 }), strapiAdmin[_0x51acf9(0xbf)]({
        'dir': _0x5afd88,
        'port': _0x87cd56,
        'host': _0x2bd548,
        'browser': _0x2d8c81,
        'options': {
            'backend': getAbsoluteServerUrl(_0x919a41, true),
            'publicPath': _0x4745f1.iXgmW(addSlash, _0x138a55),
            'watchIgnoreFiles': _0x23fde5,
            'features': ee[_0x51acf9(0xc0)] ? ee[_0x51acf9(0xc1)][_0x51acf9(0xc2)]() : []
        }
    });
};
