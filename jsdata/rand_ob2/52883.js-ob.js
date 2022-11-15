'use strict';
const _0x2fc9 = [
    'valid',
    'schemaEnv',
    'dynamicAnchors',
    'let',
    'getProperty',
    'validateName',
    'block',
    'callRef',
    'default',
    '5RDKPpY',
    '39295HQXypB',
    '439913EWzfuZ',
    '743225qebMvB',
    '437145jecUCr',
    '11542RLyrfs',
    '8mrmbXL',
    '1604gEzEfP',
    '141dIvRSV',
    '734XGVhYh',
    '1138ZBtrDM',
    'defineProperty',
    '__esModule',
    'dynamicRef',
    '../../compile/names',
    '../core/ref',
    '$dynamicRef',
    'allErrors'
];
const _0x583672 = _0x42ac;
(function (_0x2db8e4, _0x67887f) {
    const _0x53f8a3 = _0x42ac;
    while (!![]) {
        try {
            const _0x8ef796 = -parseInt(_0x53f8a3(0xfb)) * parseInt(_0x53f8a3(0xfc)) + parseInt(_0x53f8a3(0xfd)) + -parseInt(_0x53f8a3(0xfe)) + parseInt(_0x53f8a3(0xff)) + -parseInt(_0x53f8a3(0x100)) * parseInt(_0x53f8a3(0x101)) + -parseInt(_0x53f8a3(0x102)) * parseInt(_0x53f8a3(0x103)) + -parseInt(_0x53f8a3(0x104)) * -parseInt(_0x53f8a3(0x105));
            if (_0x8ef796 === _0x67887f)
                break;
            else
                _0x2db8e4['push'](_0x2db8e4['shift']());
        } catch (_0x5e6b38) {
            _0x2db8e4['push'](_0x2db8e4['shift']());
        }
    }
}(_0x2fc9, 0x6ee06));
function _0x42ac(_0x30e71d, _0x48e155) {
    return _0x42ac = function (_0x2fc9e1, _0x42acda) {
        _0x2fc9e1 = _0x2fc9e1 - 0xfb;
        let _0x220529 = _0x2fc9[_0x2fc9e1];
        return _0x220529;
    }, _0x42ac(_0x30e71d, _0x48e155);
}
Object[_0x583672(0x106)](exports, _0x583672(0x107), { 'value': !![] }), exports[_0x583672(0x108)] = void 0x0;
const codegen_1 = require('../../compile/codegen'), names_1 = require(_0x583672(0x109)), ref_1 = require(_0x583672(0x10a)), def = {
        'keyword': _0x583672(0x10b),
        'schemaType': 'string',
        'code': _0x5c2baa => dynamicRef(_0x5c2baa, _0x5c2baa['schema'])
    };
function dynamicRef(_0x221876, _0x135b0a) {
    const _0x309050 = _0x583672, {
            gen: _0x27487b,
            keyword: _0x194e5f,
            it: _0x374008
        } = _0x221876;
    if (_0x135b0a[0x0] !== '#')
        throw new Error('\x22' + _0x194e5f + '\x22\x20only\x20supports\x20hash\x20fragment\x20reference');
    const _0x5a5411 = _0x135b0a['slice'](0x1);
    if (_0x374008[_0x309050(0x10c)])
        _0x1f60f8();
    else {
        const _0x306496 = _0x27487b['let'](_0x309050(0x10d), ![]);
        _0x1f60f8(_0x306496), _0x221876['ok'](_0x306496);
    }
    function _0x1f60f8(_0x152068) {
        const _0x2117af = _0x309050;
        if (_0x374008[_0x2117af(0x10e)]['root'][_0x2117af(0x10f)][_0x5a5411]) {
            const _0x2ebe3a = _0x27487b[_0x2117af(0x110)]('_v', codegen_1['_']`${ names_1['default'][_0x2117af(0x10f)] }${ codegen_1[_0x2117af(0x111)](_0x5a5411) }`);
            _0x27487b['if'](_0x2ebe3a, _0x1a4278(_0x2ebe3a, _0x152068), _0x1a4278(_0x374008[_0x2117af(0x112)], _0x152068));
        } else
            _0x1a4278(_0x374008[_0x2117af(0x112)], _0x152068)();
    }
    function _0x1a4278(_0xc9c4db, _0x313c17) {
        const _0x1c6e79 = _0x309050;
        return _0x313c17 ? () => _0x27487b[_0x1c6e79(0x113)](() => {
            const _0x181b72 = _0x1c6e79;
            ref_1[_0x181b72(0x114)](_0x221876, _0xc9c4db), _0x27487b[_0x181b72(0x110)](_0x313c17, !![]);
        }) : () => ref_1[_0x1c6e79(0x114)](_0x221876, _0xc9c4db);
    }
}
exports[_0x583672(0x108)] = dynamicRef, exports[_0x583672(0x115)] = def;
