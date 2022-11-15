'use strict';
Object['defineProperty'](exports, '__esModule', { 'value': !![] }), exports['dynamicRef'] = void (0x24a0 + 0x3d * 0x36 + -0x317e);
const codegen_1 = require('../../compile/codegen'), names_1 = require('../../compile/names'), ref_1 = require('../core/ref'), def = {
        'keyword': '$dynamicRef',
        'schemaType': 'string',
        'code': _0x3a72da => dynamicRef(_0x3a72da, _0x3a72da['schema'])
    };
function dynamicRef(_0x52d9b2, _0x2f60ef) {
    const {
        gen: _0x4c9389,
        keyword: _0x14b91a,
        it: _0x28907d
    } = _0x52d9b2;
    if (_0x2f60ef[0xd1 * 0x1 + -0x1 * -0x9af + -0xa80] !== '#')
        throw new Error('\x22' + _0x14b91a + '\x22\x20only\x20supports\x20hash\x20fragment\x20reference');
    const _0x1d1a9c = _0x2f60ef['slice'](-0x368 + -0x765 * 0x1 + 0xace);
    if (_0x28907d['allErrors'])
        _0x3b22f0();
    else {
        const _0x3c8d8e = _0x4c9389['let']('valid', ![]);
        _0x3b22f0(_0x3c8d8e), _0x52d9b2['ok'](_0x3c8d8e);
    }
    function _0x3b22f0(_0x26ed53) {
        if (_0x28907d['schemaEnv']['root']['dynamicAnchors'][_0x1d1a9c]) {
            const _0x1d9b4f = _0x4c9389['let']('_v', codegen_1['_']`${ names_1['default']['dynamicAnchors'] }${ codegen_1['getProperty'](_0x1d1a9c) }`);
            _0x4c9389['if'](_0x1d9b4f, _0x13bdb7(_0x1d9b4f, _0x26ed53), _0x13bdb7(_0x28907d['validateName'], _0x26ed53));
        } else
            _0x13bdb7(_0x28907d['validateName'], _0x26ed53)();
    }
    function _0x13bdb7(_0x409cdd, _0x447324) {
        return _0x447324 ? () => _0x4c9389['block'](() => {
            ref_1['callRef'](_0x52d9b2, _0x409cdd), _0x4c9389['let'](_0x447324, !![]);
        }) : () => ref_1['callRef'](_0x52d9b2, _0x409cdd);
    }
}
exports['dynamicRef'] = dynamicRef, exports['default'] = def;
