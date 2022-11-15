'use strict';
const _0x431c = [
    'Reflect.getOwnPropertyDescriptor',
    'Reflect.getPrototypeOf',
    'Reflect.setPrototypeOf',
    'Reflect.getOwnPropertyNames',
    'Reflect.preventExtensions',
    'preferReflect',
    'callee',
    'name',
    'Reflect',
    'prototype',
    'hasOwnProperty',
    'indexOf',
    'operator',
    'type',
    'Identifier',
    'the\x20delete\x20keyword',
    '2jFeqgc',
    '845124JsauUP',
    '1790769gbWVPF',
    '958686REXfvj',
    '71492lSsoZX',
    '1478871FCeglm',
    '937295fItyyE',
    '68178BoodtV',
    '8HqxjfC',
    'exports',
    'suggestion',
    'require\x20`Reflect`\x20methods\x20where\x20applicable',
    'ECMAScript\x206',
    'https://eslint.org/docs/rules/prefer-reflect',
    'object',
    'array',
    'call',
    'delete',
    'defineProperty',
    'getOwnPropertyDescriptor',
    'getPrototypeOf',
    'setPrototypeOf',
    'preventExtensions',
    'Avoid\x20using\x20{{existing}},\x20instead\x20use\x20{{substitute}}.',
    'Function.prototype.apply',
    'Function.prototype.call',
    'Object.defineProperty',
    'Object.getOwnPropertyDescriptor',
    'Object.getPrototypeOf',
    'Object.setPrototypeOf',
    'Object.isExtensible',
    'Object.getOwnPropertyNames',
    'Object.preventExtensions',
    'Reflect.apply'
];
const _0x57b184 = _0x2654;
(function (_0x4044ab, _0x2df284) {
    const _0x12613a = _0x2654;
    while (!![]) {
        try {
            const _0x44799a = parseInt(_0x12613a(0x143)) * -parseInt(_0x12613a(0x144)) + parseInt(_0x12613a(0x145)) + parseInt(_0x12613a(0x146)) + -parseInt(_0x12613a(0x147)) + parseInt(_0x12613a(0x148)) + -parseInt(_0x12613a(0x149)) + parseInt(_0x12613a(0x14a)) * -parseInt(_0x12613a(0x14b));
            if (_0x44799a === _0x2df284)
                break;
            else
                _0x4044ab['push'](_0x4044ab['shift']());
        } catch (_0x16390d) {
            _0x4044ab['push'](_0x4044ab['shift']());
        }
    }
}(_0x431c, 0xf033b));
function _0x2654(_0x3abee0, _0x42dbec) {
    return _0x2654 = function (_0x431cb2, _0x265434) {
        _0x431cb2 = _0x431cb2 - 0x143;
        let _0x4cb170 = _0x431c[_0x431cb2];
        return _0x4cb170;
    }, _0x2654(_0x3abee0, _0x42dbec);
}
module[_0x57b184(0x14c)] = {
    'meta': {
        'type': _0x57b184(0x14d),
        'docs': {
            'description': _0x57b184(0x14e),
            'category': _0x57b184(0x14f),
            'recommended': ![],
            'url': _0x57b184(0x150)
        },
        'deprecated': !![],
        'replacedBy': [],
        'schema': [{
                'type': _0x57b184(0x151),
                'properties': {
                    'exceptions': {
                        'type': _0x57b184(0x152),
                        'items': {
                            'enum': [
                                'apply',
                                _0x57b184(0x153),
                                _0x57b184(0x154),
                                _0x57b184(0x155),
                                _0x57b184(0x156),
                                _0x57b184(0x157),
                                _0x57b184(0x158),
                                'isExtensible',
                                'getOwnPropertyNames',
                                _0x57b184(0x159)
                            ]
                        },
                        'uniqueItems': !![]
                    }
                },
                'additionalProperties': ![]
            }],
        'messages': { 'preferReflect': _0x57b184(0x15a) }
    },
    'create'(_0xd337a8) {
        const _0x108ac6 = _0x57b184, _0x33d900 = {
                'apply': _0x108ac6(0x15b),
                'call': _0x108ac6(0x15c),
                'defineProperty': _0x108ac6(0x15d),
                'getOwnPropertyDescriptor': _0x108ac6(0x15e),
                'getPrototypeOf': _0x108ac6(0x15f),
                'setPrototypeOf': _0x108ac6(0x160),
                'isExtensible': _0x108ac6(0x161),
                'getOwnPropertyNames': _0x108ac6(0x162),
                'preventExtensions': _0x108ac6(0x163)
            }, _0x4ee3e2 = {
                'apply': _0x108ac6(0x164),
                'call': 'Reflect.apply',
                'defineProperty': 'Reflect.defineProperty',
                'getOwnPropertyDescriptor': _0x108ac6(0x165),
                'getPrototypeOf': _0x108ac6(0x166),
                'setPrototypeOf': _0x108ac6(0x167),
                'isExtensible': 'Reflect.isExtensible',
                'getOwnPropertyNames': _0x108ac6(0x168),
                'preventExtensions': _0x108ac6(0x169)
            }, _0x60f238 = (_0xd337a8['options'][0x0] || {})['exceptions'] || [];
        function _0xcb5209(_0x347a7d, _0x1816f3, _0x43adb7) {
            const _0x13b03a = _0x108ac6;
            _0xd337a8['report']({
                'node': _0x347a7d,
                'messageId': _0x13b03a(0x16a),
                'data': {
                    'existing': _0x1816f3,
                    'substitute': _0x43adb7
                }
            });
        }
        return {
            'CallExpression'(_0x565d1b) {
                const _0x26ce0a = _0x108ac6, _0x330738 = (_0x565d1b[_0x26ce0a(0x16b)]['property'] || {})['name'], _0x24265c = (_0x565d1b[_0x26ce0a(0x16b)][_0x26ce0a(0x151)] || {})[_0x26ce0a(0x16c)] === _0x26ce0a(0x16d), _0x226942 = Object[_0x26ce0a(0x16e)][_0x26ce0a(0x16f)][_0x26ce0a(0x153)](_0x4ee3e2, _0x330738), _0x1abd41 = _0x60f238[_0x26ce0a(0x170)](_0x330738) !== -0x1;
                _0x226942 && !_0x24265c && !_0x1abd41 && _0xcb5209(_0x565d1b, _0x33d900[_0x330738], _0x4ee3e2[_0x330738]);
            },
            'UnaryExpression'(_0x17d8da) {
                const _0x4ee032 = _0x108ac6, _0x6db4e9 = _0x17d8da[_0x4ee032(0x171)] === _0x4ee032(0x154), _0x26dc39 = _0x17d8da['argument'][_0x4ee032(0x172)] === _0x4ee032(0x173), _0x1ef4ce = _0x60f238[_0x4ee032(0x170)](_0x4ee032(0x154)) !== -0x1;
                _0x6db4e9 && !_0x26dc39 && !_0x1ef4ce && _0xcb5209(_0x17d8da, _0x4ee032(0x174), 'Reflect.deleteProperty');
            }
        };
    }
};
