function _0x2931(_0x440f91, _0x59f39c) {
    return _0x2931 = function (_0x29d160, _0x2931f9) {
        _0x29d160 = _0x29d160 - 426;
        let _0x55a497 = _0x29d1[_0x29d160];
        return _0x55a497;
    }, _0x2931(_0x440f91, _0x59f39c);
}
module['exports'] = {
    'meta': {
        'type': _0x24afba(436),
        'docs': {
            'description': _0x24afba(437),
            'category': 'Stylistic Issues',
            'recommended': ![],
            'url': _0x24afba(438)
        },
        'schema': [{
                'oneOf': [
                    {
                        'type': _0x24afba(439),
                        'minimum': 0
                    },
                    {
                        'type': _0x24afba(440),
                        'properties': {
                            'maximum': {
                                'type': _0x24afba(439),
                                'minimum': 0
                            },
                            'max': {
                                'type': _0x24afba(439),
                                'minimum': 0
                            }
                        },
                        'additionalProperties': ![]
                    }
                ]
            }],
        'messages': { 'tooDeeply': _0x24afba(441) }
    },
    'create'(_0x2eb2d6) {
        const _0x3d7b6f = _0x24afba, _0x3644dc = [], _0x15e232 = _0x2eb2d6[_0x3d7b6f(442)][0];
        let _0x166df6 = 4;
        typeof _0x15e232 === _0x3d7b6f(440) && (Object[_0x3d7b6f(443)][_0x3d7b6f(444)][_0x3d7b6f(445)](_0x15e232, _0x3d7b6f(446)) || Object[_0x3d7b6f(443)][_0x3d7b6f(444)]['call'](_0x15e232, _0x3d7b6f(447))) && (_0x166df6 = _0x15e232[_0x3d7b6f(446)] || _0x15e232[_0x3d7b6f(447)]);
        typeof _0x15e232 === _0x3d7b6f(448) && (_0x166df6 = _0x15e232);
        function _0x442db8() {
            const _0x59513e = _0x3d7b6f;
            _0x3644dc[_0x59513e(449)](0);
        }
        function _0x3038b0() {
            const _0xe0899a = _0x3d7b6f;
            _0x3644dc[_0xe0899a(450)]();
        }
        function _0x4403b8(_0x2da224) {
            const _0x10c85a = _0x3d7b6f, _0xe61aae = ++_0x3644dc[_0x3644dc[_0x10c85a(451)] - 1];
            _0xe61aae > _0x166df6 && _0x2eb2d6[_0x10c85a(452)]({
                'node': _0x2da224,
                'messageId': _0x10c85a(453),
                'data': {
                    'depth': _0xe61aae,
                    'maxDepth': _0x166df6
                }
            });
        }
        function _0x2f3116() {
            const _0x3ef794 = _0x3d7b6f;
            _0x3644dc[_0x3644dc[_0x3ef794(451)] - 1]--;
        }
        return {
            'Program': _0x442db8,
            'FunctionDeclaration': _0x442db8,
            'FunctionExpression': _0x442db8,
            'ArrowFunctionExpression': _0x442db8,
            'IfStatement'(_0xb6d3ec) {
                const _0x26a3c2 = _0x3d7b6f;
                _0xb6d3ec['parent'][_0x26a3c2(454)] !== _0x26a3c2(455) && _0x4403b8(_0xb6d3ec);
            },
            'SwitchStatement': _0x4403b8,
            'TryStatement': _0x4403b8,
            'DoWhileStatement': _0x4403b8,
            'WhileStatement': _0x4403b8,
            'WithStatement': _0x4403b8,
            'ForStatement': _0x4403b8,
            'ForInStatement': _0x4403b8,
            'ForOfStatement': _0x4403b8,
            'IfStatement:exit': _0x2f3116,
            'SwitchStatement:exit': _0x2f3116,
            'TryStatement:exit': _0x2f3116,
            'DoWhileStatement:exit': _0x2f3116,
            'WhileStatement:exit': _0x2f3116,
            'WithStatement:exit': _0x2f3116,
            'ForStatement:exit': _0x2f3116,
            'ForInStatement:exit': _0x2f3116,
            'ForOfStatement:exit': _0x2f3116,
            'FunctionDeclaration:exit': _0x3038b0,
            'FunctionExpression:exit': _0x3038b0,
            'ArrowFunctionExpression:exit': _0x3038b0,
            'Program:exit': _0x3038b0
        };
    }
};