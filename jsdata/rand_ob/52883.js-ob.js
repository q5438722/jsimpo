'use strict';
const _0x592c = [
    '../../compile/names',
    '../core/ref',
    '$dynamicRef',
    'string',
    'schema',
    'valid',
    'slice',
    'allErrors',
    'let',
    'ImOpC',
    'TNnzO',
    'schemaEnv',
    'root',
    'dynamicAnchors',
    'default',
    'getProperty',
    'yyenc',
    'qwkSi',
    'validateName',
    'callRef',
    '54xygOjz',
    '2113kfVqXm',
    '227rNCpyy',
    '23wABPZf',
    '74717haJaKZ',
    '6AJORjt',
    '507223imZruW',
    '257459JIVyuJ',
    '2821rUbjZd',
    '18luIsNe',
    '567349bICwbI',
    'defineProperty',
    'dynamicRef',
    '../../compile/codegen'
];
const _0x1234b8 = _0x2d4f;
(function (_0x5038b6, _0x3e82ad) {
    const _0x5114b9 = _0x2d4f;
    while (!![]) {
        try {
            const _0x40c43c = -parseInt(_0x5114b9(0xdc)) * -parseInt(_0x5114b9(0xdd)) + -parseInt(_0x5114b9(0xde)) * parseInt(_0x5114b9(0xdf)) + -parseInt(_0x5114b9(0xe0)) * -parseInt(_0x5114b9(0xe1)) + -parseInt(_0x5114b9(0xe2)) + -parseInt(_0x5114b9(0xe3)) + -parseInt(_0x5114b9(0xe4)) * parseInt(_0x5114b9(0xe5)) + parseInt(_0x5114b9(0xe6));
            if (_0x40c43c === _0x3e82ad)
                break;
            else
                _0x5038b6['push'](_0x5038b6['shift']());
        } catch (_0x16e7ba) {
            _0x5038b6['push'](_0x5038b6['shift']());
        }
    }
}(_0x592c, 0x24c36 + -0x89687 + 0xb01a1));
Object[_0x1234b8(0xe7)](exports, '__esModule', { 'value': !![] }), exports[_0x1234b8(0xe8)] = void (0x10 * -0x44 + 0x102d + 0x1 * -0xbed);
const codegen_1 = require(_0x1234b8(0xe9)), names_1 = require(_0x1234b8(0xea)), ref_1 = require(_0x1234b8(0xeb)), def = {
        'keyword': _0x1234b8(0xec),
        'schemaType': _0x1234b8(0xed),
        'code': _0x464d19 => dynamicRef(_0x464d19, _0x464d19[_0x1234b8(0xee)])
    };
function dynamicRef(_0x5dc88c, _0x1dfd06) {
    const _0x2b30d2 = _0x1234b8, _0x1ad5e4 = {
            'yyenc': function (_0x97e610, _0x3561f0, _0x41a7bb) {
                return _0x97e610(_0x3561f0, _0x41a7bb);
            },
            'qwkSi': function (_0x32d3ec, _0x803bd, _0x4a6b24) {
                return _0x32d3ec(_0x803bd, _0x4a6b24);
            },
            'ImOpC': _0x2b30d2(0xef),
            'TNnzO': function (_0xe08fcf, _0x3a9a12) {
                return _0xe08fcf(_0x3a9a12);
            }
        }, {
            gen: _0x356686,
            keyword: _0x194e38,
            it: _0xe738a0
        } = _0x5dc88c;
    if (_0x1dfd06[-0x41c * -0x4 + -0x4 * 0x707 + 0xbac] !== '#')
        throw new Error('\x22' + _0x194e38 + '\x22\x20only\x20supports\x20hash\x20fragment\x20reference');
    const _0x346221 = _0x1dfd06[_0x2b30d2(0xf0)](-0x23fb + -0x19f1 + 0xbf * 0x53);
    if (_0xe738a0[_0x2b30d2(0xf1)])
        _0x297b70();
    else {
        const _0x4f1964 = _0x356686[_0x2b30d2(0xf2)](_0x1ad5e4[_0x2b30d2(0xf3)], ![]);
        _0x1ad5e4[_0x2b30d2(0xf4)](_0x297b70, _0x4f1964), _0x5dc88c['ok'](_0x4f1964);
    }
    function _0x297b70(_0x3d1a4d) {
        const _0x1f5383 = _0x2b30d2;
        if (_0xe738a0[_0x1f5383(0xf5)][_0x1f5383(0xf6)][_0x1f5383(0xf7)][_0x346221]) {
            const _0x78419c = _0x356686[_0x1f5383(0xf2)]('_v', codegen_1['_']`${ names_1[_0x1f5383(0xf8)][_0x1f5383(0xf7)] }${ codegen_1[_0x1f5383(0xf9)](_0x346221) }`);
            _0x356686['if'](_0x78419c, _0x1ad5e4[_0x1f5383(0xfa)](_0x4e2b2e, _0x78419c, _0x3d1a4d), _0x1ad5e4[_0x1f5383(0xfb)](_0x4e2b2e, _0xe738a0[_0x1f5383(0xfc)], _0x3d1a4d));
        } else
            _0x1ad5e4[_0x1f5383(0xfb)](_0x4e2b2e, _0xe738a0[_0x1f5383(0xfc)], _0x3d1a4d)();
    }
    function _0x4e2b2e(_0x5f13da, _0xd683a7) {
        return _0xd683a7 ? () => _0x356686['block'](() => {
            const _0x148947 = _0x2d4f;
            ref_1[_0x148947(0xfd)](_0x5dc88c, _0x5f13da), _0x356686[_0x148947(0xf2)](_0xd683a7, !![]);
        }) : () => ref_1['callRef'](_0x5dc88c, _0x5f13da);
    }
}
function _0x2d4f(_0x4e82ba, _0x50f879) {
    return _0x2d4f = function (_0x3ec115, _0x491186) {
        _0x3ec115 = _0x3ec115 - (-0x1 * -0x22be + -0x2 * 0xc5b + -0x92c);
        let _0x4f48f5 = _0x592c[_0x3ec115];
        return _0x4f48f5;
    }, _0x2d4f(_0x4e82ba, _0x50f879);
}
exports[_0x1234b8(0xe8)] = dynamicRef, exports[_0x1234b8(0xf8)] = def;