'use strict';
const _0x5b08 = [
    'schemaEnv',
    'root',
    'dynamicAnchors',
    'default',
    'getProperty',
    'validateName',
    'let',
    '419WNZSdR',
    '34AYoNQj',
    '31ZeKrCy',
    '6493tNvJqk',
    '181538ZDfiNM',
    '91421MJJqqO',
    '2VHJMGu',
    '68739QVGZhQ',
    '177277htbskQ',
    '529056ZsIirr',
    'dynamicRef',
    '../../compile/codegen',
    '../../compile/names',
    '../core/ref',
    '$dynamicRef',
    'string',
    'schema',
    '\x22\x20only\x20supports\x20hash\x20fragment\x20reference',
    'slice',
    'valid'
];
const _0x3bc5f0 = _0x1bf0;
function _0x1bf0(_0x258942, _0x3a9aef) {
    return _0x1bf0 = function (_0x5b0887, _0x1bf0b4) {
        _0x5b0887 = _0x5b0887 - 0x1f0;
        let _0x33bc58 = _0x5b08[_0x5b0887];
        return _0x33bc58;
    }, _0x1bf0(_0x258942, _0x3a9aef);
}
(function (_0x2f41b0, _0x22ae25) {
    const _0xa9d8bc = _0x1bf0;
    while (!![]) {
        try {
            const _0x141967 = -parseInt(_0xa9d8bc(0x1f0)) * -parseInt(_0xa9d8bc(0x1f1)) + parseInt(_0xa9d8bc(0x1f2)) * parseInt(_0xa9d8bc(0x1f3)) + -parseInt(_0xa9d8bc(0x1f4)) + -parseInt(_0xa9d8bc(0x1f5)) + -parseInt(_0xa9d8bc(0x1f6)) * parseInt(_0xa9d8bc(0x1f7)) + -parseInt(_0xa9d8bc(0x1f8)) + parseInt(_0xa9d8bc(0x1f9));
            if (_0x141967 === _0x22ae25)
                break;
            else
                _0x2f41b0['push'](_0x2f41b0['shift']());
        } catch (_0x22975c) {
            _0x2f41b0['push'](_0x2f41b0['shift']());
        }
    }
}(_0x5b08, 0x264c7));
Object['defineProperty'](exports, '__esModule', { 'value': !![] }), exports[_0x3bc5f0(0x1fa)] = void 0x0;
const codegen_1 = require(_0x3bc5f0(0x1fb)), names_1 = require(_0x3bc5f0(0x1fc)), ref_1 = require(_0x3bc5f0(0x1fd)), def = {
        'keyword': _0x3bc5f0(0x1fe),
        'schemaType': _0x3bc5f0(0x1ff),
        'code': _0x1e6de7 => dynamicRef(_0x1e6de7, _0x1e6de7[_0x3bc5f0(0x200)])
    };
function dynamicRef(_0x581d20, _0x54d995) {
    const _0x21b3ca = _0x3bc5f0, {
            gen: _0x13c41d,
            keyword: _0x4875e5,
            it: _0x211630
        } = _0x581d20;
    if (_0x54d995[0x0] !== '#')
        throw new Error('\x22' + _0x4875e5 + _0x21b3ca(0x201));
    const _0x4dc5ec = _0x54d995[_0x21b3ca(0x202)](0x1);
    if (_0x211630['allErrors'])
        _0x528255();
    else {
        const _0x273f60 = _0x13c41d['let'](_0x21b3ca(0x203), ![]);
        _0x528255(_0x273f60), _0x581d20['ok'](_0x273f60);
    }
    function _0x528255(_0x394311) {
        const _0x4b8a6e = _0x21b3ca;
        if (_0x211630[_0x4b8a6e(0x204)][_0x4b8a6e(0x205)][_0x4b8a6e(0x206)][_0x4dc5ec]) {
            const _0x2ad82e = _0x13c41d['let']('_v', codegen_1['_']`${ names_1[_0x4b8a6e(0x207)][_0x4b8a6e(0x206)] }${ codegen_1[_0x4b8a6e(0x208)](_0x4dc5ec) }`);
            _0x13c41d['if'](_0x2ad82e, _0x5e5690(_0x2ad82e, _0x394311), _0x5e5690(_0x211630[_0x4b8a6e(0x209)], _0x394311));
        } else
            _0x5e5690(_0x211630[_0x4b8a6e(0x209)], _0x394311)();
    }
    function _0x5e5690(_0x3d1350, _0x158780) {
        return _0x158780 ? () => _0x13c41d['block'](() => {
            const _0x4ece08 = _0x1bf0;
            ref_1['callRef'](_0x581d20, _0x3d1350), _0x13c41d[_0x4ece08(0x20a)](_0x158780, !![]);
        }) : () => ref_1['callRef'](_0x581d20, _0x3d1350);
    }
}
exports[_0x3bc5f0(0x1fa)] = dynamicRef, exports[_0x3bc5f0(0x207)] = def;
