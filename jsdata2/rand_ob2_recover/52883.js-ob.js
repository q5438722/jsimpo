Object['defineProperty'](exports, '__esModule', { 'value': !![] }), exports[_0x3bc5f0(506)] = void 0;
const codegen_1 = require(_0x3bc5f0(507)), names_1 = require(_0x3bc5f0(508)), ref_1 = require(_0x3bc5f0(509)), def = {
        'keyword': _0x3bc5f0(510),
        'schemaType': _0x3bc5f0(511),
        'code': _0x1e6de7 => dynamicRef(_0x1e6de7, _0x1e6de7[_0x3bc5f0(512)])
    };
function dynamicRef(_0x581d20, _0x54d995) {
    const _0x21b3ca = _0x3bc5f0, {
            gen: _0x13c41d,
            keyword: _0x4875e5,
            it: _0x211630
        } = _0x581d20;
    if (_0x54d995[0] !== '#')
        throw new Error('"' + _0x4875e5 + _0x21b3ca(513));
    const _0x4dc5ec = _0x54d995[_0x21b3ca(514)](1);
    if (_0x211630['allErrors'])
        _0x528255();
    else {
        const _0x273f60 = _0x13c41d['let'](_0x21b3ca(515), ![]);
        _0x528255(_0x273f60), _0x581d20['ok'](_0x273f60);
    }
    function _0x528255(_0x394311) {
        const _0x4b8a6e = _0x21b3ca;
        if (_0x211630[_0x4b8a6e(516)][_0x4b8a6e(517)][_0x4b8a6e(518)][_0x4dc5ec]) {
            const _0x2ad82e = _0x13c41d['let']('_v', codegen_1['_']`${ names_1[_0x4b8a6e(519)][_0x4b8a6e(518)] }${ codegen_1[_0x4b8a6e(520)](_0x4dc5ec) }`);
            _0x13c41d['if'](_0x2ad82e, _0x5e5690(_0x2ad82e, _0x394311), _0x5e5690(_0x211630[_0x4b8a6e(521)], _0x394311));
        } else
            _0x5e5690(_0x211630[_0x4b8a6e(521)], _0x394311)();
    }
    function _0x5e5690(_0x3d1350, _0x158780) {
        return _0x158780 ? () => _0x13c41d['block'](() => {
            const _0x4ece08 = _0x1bf0;
            ref_1['callRef'](_0x581d20, _0x3d1350), _0x13c41d[_0x4ece08(522)](_0x158780, !![]);
        }) : () => ref_1['callRef'](_0x581d20, _0x3d1350);
    }
}
exports[_0x3bc5f0(506)] = dynamicRef, exports[_0x3bc5f0(519)] = def;