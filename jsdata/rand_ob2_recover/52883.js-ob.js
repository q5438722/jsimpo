function _0x42ac(_0x30e71d, _0x48e155) {
    return _0x42ac = function (_0x2fc9e1, _0x42acda) {
        _0x2fc9e1 = _0x2fc9e1 - 251;
        let _0x220529 = _0x2fc9[_0x2fc9e1];
        return _0x220529;
    }, _0x42ac(_0x30e71d, _0x48e155);
}
Object[_0x583672(262)](exports, _0x583672(263), { 'value': !![] }), exports[_0x583672(264)] = void 0;
const codegen_1 = require('../../compile/codegen'), names_1 = require(_0x583672(265)), ref_1 = require(_0x583672(266)), def = {
        'keyword': _0x583672(267),
        'schemaType': 'string',
        'code': _0x5c2baa => dynamicRef(_0x5c2baa, _0x5c2baa['schema'])
    };
function dynamicRef(_0x221876, _0x135b0a) {
    const _0x309050 = _0x583672, {
            gen: _0x27487b,
            keyword: _0x194e5f,
            it: _0x374008
        } = _0x221876;
    if (_0x135b0a[0] !== '#')
        throw new Error('"' + _0x194e5f + '" only supports hash fragment reference');
    const _0x5a5411 = _0x135b0a['slice'](1);
    if (_0x374008[_0x309050(268)])
        _0x1f60f8();
    else {
        const _0x306496 = _0x27487b['let'](_0x309050(269), ![]);
        _0x1f60f8(_0x306496), _0x221876['ok'](_0x306496);
    }
    function _0x1f60f8(_0x152068) {
        const _0x2117af = _0x309050;
        if (_0x374008[_0x2117af(270)]['root'][_0x2117af(271)][_0x5a5411]) {
            const _0x2ebe3a = _0x27487b[_0x2117af(272)]('_v', codegen_1['_']`${ names_1['default'][_0x2117af(271)] }${ codegen_1[_0x2117af(273)](_0x5a5411) }`);
            _0x27487b['if'](_0x2ebe3a, _0x1a4278(_0x2ebe3a, _0x152068), _0x1a4278(_0x374008[_0x2117af(274)], _0x152068));
        } else
            _0x1a4278(_0x374008[_0x2117af(274)], _0x152068)();
    }
    function _0x1a4278(_0xc9c4db, _0x313c17) {
        const _0x1c6e79 = _0x309050;
        return _0x313c17 ? () => _0x27487b[_0x1c6e79(275)](() => {
            const _0x181b72 = _0x1c6e79;
            ref_1[_0x181b72(276)](_0x221876, _0xc9c4db), _0x27487b[_0x181b72(272)](_0x313c17, !![]);
        }) : () => ref_1[_0x1c6e79(276)](_0x221876, _0xc9c4db);
    }
}
exports[_0x583672(264)] = dynamicRef, exports[_0x583672(277)] = def;