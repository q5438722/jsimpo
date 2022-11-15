function _0x2654(_0x3abee0, _0x42dbec) {
    return _0x2654 = function (_0x431cb2, _0x265434) {
        _0x431cb2 = _0x431cb2 - 323;
        let _0x4cb170 = _0x431c[_0x431cb2];
        return _0x4cb170;
    }, _0x2654(_0x3abee0, _0x42dbec);
}
module[_0x57b184(332)] = {
    'meta': {
        'type': _0x57b184(333),
        'docs': {
            'description': _0x57b184(334),
            'category': _0x57b184(335),
            'recommended': ![],
            'url': _0x57b184(336)
        },
        'deprecated': !![],
        'replacedBy': [],
        'schema': [{
                'type': _0x57b184(337),
                'properties': {
                    'exceptions': {
                        'type': _0x57b184(338),
                        'items': {
                            'enum': [
                                'apply',
                                _0x57b184(339),
                                _0x57b184(340),
                                _0x57b184(341),
                                _0x57b184(342),
                                _0x57b184(343),
                                _0x57b184(344),
                                'isExtensible',
                                'getOwnPropertyNames',
                                _0x57b184(345)
                            ]
                        },
                        'uniqueItems': !![]
                    }
                },
                'additionalProperties': ![]
            }],
        'messages': { 'preferReflect': _0x57b184(346) }
    },
    'create'(_0xd337a8) {
        const _0x108ac6 = _0x57b184, _0x33d900 = {
                'apply': _0x108ac6(347),
                'call': _0x108ac6(348),
                'defineProperty': _0x108ac6(349),
                'getOwnPropertyDescriptor': _0x108ac6(350),
                'getPrototypeOf': _0x108ac6(351),
                'setPrototypeOf': _0x108ac6(352),
                'isExtensible': _0x108ac6(353),
                'getOwnPropertyNames': _0x108ac6(354),
                'preventExtensions': _0x108ac6(355)
            }, _0x4ee3e2 = {
                'apply': _0x108ac6(356),
                'call': 'Reflect.apply',
                'defineProperty': 'Reflect.defineProperty',
                'getOwnPropertyDescriptor': _0x108ac6(357),
                'getPrototypeOf': _0x108ac6(358),
                'setPrototypeOf': _0x108ac6(359),
                'isExtensible': 'Reflect.isExtensible',
                'getOwnPropertyNames': _0x108ac6(360),
                'preventExtensions': _0x108ac6(361)
            }, _0x60f238 = (_0xd337a8['options'][0] || {})['exceptions'] || [];
        function _0xcb5209(_0x347a7d, _0x1816f3, _0x43adb7) {
            const _0x13b03a = _0x108ac6;
            _0xd337a8['report']({
                'node': _0x347a7d,
                'messageId': _0x13b03a(362),
                'data': {
                    'existing': _0x1816f3,
                    'substitute': _0x43adb7
                }
            });
        }
        return {
            'CallExpression'(_0x565d1b) {
                const _0x26ce0a = _0x108ac6, _0x330738 = (_0x565d1b[_0x26ce0a(363)]['property'] || {})['name'], _0x24265c = (_0x565d1b[_0x26ce0a(363)][_0x26ce0a(337)] || {})[_0x26ce0a(364)] === _0x26ce0a(365), _0x226942 = Object[_0x26ce0a(366)][_0x26ce0a(367)][_0x26ce0a(339)](_0x4ee3e2, _0x330738), _0x1abd41 = _0x60f238[_0x26ce0a(368)](_0x330738) !== -1;
                _0x226942 && !_0x24265c && !_0x1abd41 && _0xcb5209(_0x565d1b, _0x33d900[_0x330738], _0x4ee3e2[_0x330738]);
            },
            'UnaryExpression'(_0x17d8da) {
                const _0x4ee032 = _0x108ac6, _0x6db4e9 = _0x17d8da[_0x4ee032(369)] === _0x4ee032(340), _0x26dc39 = _0x17d8da['argument'][_0x4ee032(370)] === _0x4ee032(371), _0x1ef4ce = _0x60f238[_0x4ee032(368)](_0x4ee032(340)) !== -1;
                _0x6db4e9 && !_0x26dc39 && !_0x1ef4ce && _0xcb5209(_0x17d8da, _0x4ee032(372), 'Reflect.deleteProperty');
            }
        };
    }
};