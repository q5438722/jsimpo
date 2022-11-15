'use strict';
Object['defineProperty'](exports, '__esModule', { 'value': !![] }), exports['dynamicRef'] = void 0x0;
const codegen_1 = require('../../compile/codegen'), names_1 = require('../../compile/names'), ref_1 = require('../core/ref'), def = {
        'keyword': '$dynamicRef',
        'schemaType': 'string',
        'code': _0x574362 => dynamicRef(_0x574362, _0x574362['schema'])
    };
function dynamicRef(_0x501068, _0x3e79aa) {
    const _0x3c31b6 = {
            'mxiJX': function (_0x387f7f, _0x58c599, _0x1c8f3b) {
                return _0x387f7f(_0x58c599, _0x1c8f3b);
            },
            'VkIcD': function (_0x72b7f2, _0x5e3ca4, _0x4cbe17) {
                return _0x72b7f2(_0x5e3ca4, _0x4cbe17);
            },
            'lnEqY': function (_0x452fc5, _0x4dfb32) {
                return _0x452fc5 !== _0x4dfb32;
            },
            'Zrpwn': function (_0x245fa8) {
                return _0x245fa8();
            },
            'LeoKu': 'valid',
            'OaLpr': function (_0x1a38ee, _0x366644) {
                return _0x1a38ee(_0x366644);
            }
        }, {
            gen: _0x3259f0,
            keyword: _0x41dbf1,
            it: _0x1a2779
        } = _0x501068;
    if (_0x3c31b6['lnEqY'](_0x3e79aa[0x0], '#'))
        throw new Error('\x22' + _0x41dbf1 + '\x22\x20only\x20supports\x20hash\x20fragment\x20reference');
    const _0xab0669 = _0x3e79aa['slice'](0x1);
    if (_0x1a2779['allErrors'])
        _0x3c31b6['Zrpwn'](_0x245133);
    else {
        const _0x5bdf31 = _0x3259f0['let'](_0x3c31b6['LeoKu'], ![]);
        _0x3c31b6['OaLpr'](_0x245133, _0x5bdf31), _0x501068['ok'](_0x5bdf31);
    }
    function _0x245133(_0x3e86ed) {
        if (_0x1a2779['schemaEnv']['root']['dynamicAnchors'][_0xab0669]) {
            const _0x5f2bf3 = _0x3259f0['let']('_v', codegen_1['_']`${ names_1['default']['dynamicAnchors'] }${ codegen_1['getProperty'](_0xab0669) }`);
            _0x3259f0['if'](_0x5f2bf3, _0x3c31b6['mxiJX'](_0x3f9d98, _0x5f2bf3, _0x3e86ed), _0x3c31b6['VkIcD'](_0x3f9d98, _0x1a2779['validateName'], _0x3e86ed));
        } else
            _0x3c31b6['VkIcD'](_0x3f9d98, _0x1a2779['validateName'], _0x3e86ed)();
    }
    function _0x3f9d98(_0x5f3b0e, _0x851132) {
        return _0x851132 ? () => _0x3259f0['block'](() => {
            ref_1['callRef'](_0x501068, _0x5f3b0e), _0x3259f0['let'](_0x851132, !![]);
        }) : () => ref_1['callRef'](_0x501068, _0x5f3b0e);
    }
}
exports['dynamicRef'] = dynamicRef, exports['default'] = def;
