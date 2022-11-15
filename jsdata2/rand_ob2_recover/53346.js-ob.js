const astUtils = require(_0x5be21f(258)), SIDE_EFFECT_FREE_NODE_TYPES = new Set([
        _0x5be21f(259),
        _0x5be21f(260),
        _0x5be21f(261),
        _0x5be21f(262)
    ]);
function _0xfe6c(_0x2d90f5, _0x494e63) {
    return _0xfe6c = function (_0x1b2af7, _0xfe6ccd) {
        _0x1b2af7 = _0x1b2af7 - 249;
        let _0x334af6 = _0x1b2a[_0x1b2af7];
        return _0x334af6;
    }, _0xfe6c(_0x2d90f5, _0x494e63);
}
module[_0x5be21f(263)] = {
    'meta': {
        'type': _0x5be21f(264),
        'docs': {
            'description': _0x5be21f(265),
            'category': _0x5be21f(266),
            'recommended': ![],
            'url': _0x5be21f(267)
        },
        'schema': [],
        'fixable': _0x5be21f(268),
        'messages': { 'unexpected': _0x5be21f(269) }
    },
    'create'(_0x22f6d7) {
        const _0x158fd5 = _0x5be21f, _0x295061 = _0x22f6d7[_0x158fd5(270)]();
        let _0x4f9dd7 = null;
        function _0x32b96a(_0x34014c) {
            const _0x44cfe9 = _0x158fd5;
            return SIDE_EFFECT_FREE_NODE_TYPES[_0x44cfe9(271)](_0x34014c['type']);
        }
        function _0x3127cd(_0x2b04ad) {
            const _0x1cf859 = _0x158fd5, _0xbff0 = _0x2b04ad[_0x1cf859(272)], _0x40f794 = _0xbff0[_0x1cf859(272)]['type'] === 'ChainExpression' ? _0xbff0['parent']['parent'] : _0xbff0['parent'];
            _0x22f6d7['report']({
                'node': _0x40f794,
                'messageId': _0x1cf859(273),
                'loc': _0xbff0[_0x1cf859(274)][_0x1cf859(275)],
                'fix'(_0x3aa165) {
                    const _0x38626a = _0x1cf859;
                    if (!_0x32b96a(_0x40f794['arguments'][0]))
                        return null;
                    const _0x1beb5d = [
                            [
                                _0x295061[_0x38626a(276)](_0xbff0[_0x38626a(277)], astUtils[_0x38626a(278)]),
                                _0x295061[_0x38626a(279)](_0xbff0)
                            ],
                            [
                                _0x295061[_0x38626a(276)](_0xbff0, astUtils[_0x38626a(278)]),
                                _0x295061[_0x38626a(279)](_0x40f794)
                            ]
                        ], _0xeab77b = _0x1beb5d[0][0], _0x39c3c9 = _0x1beb5d[1][1];
                    if (_0x295061[_0x38626a(280)](_0xeab77b, _0x39c3c9))
                        return null;
                    return _0x1beb5d[_0x38626a(281)](([_0x203d69, _0x6a4e26]) => _0x3aa165[_0x38626a(282)]([
                        _0x203d69['range'][0],
                        _0x6a4e26[_0x38626a(283)][1]
                    ]));
                }
            });
        }
        function _0x4f91f3(_0x108064) {
            const _0x304bb9 = _0x158fd5;
            if (!astUtils[_0x304bb9(284)](_0x108064['parent'], null, _0x304bb9(285)))
                return ![];
            const _0x251eb9 = _0x108064[_0x304bb9(272)][_0x304bb9(272)][_0x304bb9(286)] === _0x304bb9(287) ? _0x108064[_0x304bb9(272)][_0x304bb9(272)] : _0x108064[_0x304bb9(272)];
            return _0x251eb9[_0x304bb9(272)][_0x304bb9(286)] === _0x304bb9(288) && _0x251eb9['parent'][_0x304bb9(289)] === _0x251eb9 && _0x251eb9[_0x304bb9(272)]['arguments'][_0x304bb9(290)] === 1 && _0x251eb9['parent'][_0x304bb9(291)][0][_0x304bb9(286)] !== _0x304bb9(292);
        }
        function _0x2a108e(_0x5d7d25) {
            _0x4f9dd7 = {
                'isBound': _0x4f91f3(_0x5d7d25),
                'thisFound': ![],
                'upper': _0x4f9dd7
            };
        }
        function _0x25b47b(_0x173dc0) {
            const _0x5758d3 = _0x158fd5;
            _0x4f9dd7['isBound'] && !_0x4f9dd7['thisFound'] && _0x3127cd(_0x173dc0), _0x4f9dd7 = _0x4f9dd7[_0x5758d3(293)];
        }
        function _0x5cddec(_0x19361c) {
            _0x4f91f3(_0x19361c) && _0x3127cd(_0x19361c);
        }
        function _0x4ba3bc() {
            _0x4f9dd7 && (_0x4f9dd7['thisFound'] = !![]);
        }
        return {
            'ArrowFunctionExpression:exit': _0x5cddec,
            'FunctionDeclaration': _0x2a108e,
            'FunctionDeclaration:exit': _0x25b47b,
            'FunctionExpression': _0x2a108e,
            'FunctionExpression:exit': _0x25b47b,
            'ThisExpression': _0x4ba3bc
        };
    }
};