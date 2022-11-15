'use strict';
const _0x29d1 = [
    'options',
    'prototype',
    'hasOwnProperty',
    'call',
    'maximum',
    'max',
    'number',
    'push',
    'pop',
    'length',
    'report',
    'tooDeeply',
    'type',
    'IfStatement',
    '961374VCkpmT',
    '231681cEsBCn',
    '76JSecmX',
    '4228qvwDXJ',
    '1366276IgkgAH',
    '819396PJfSHu',
    '14PFjGOs',
    '91248Oswrdm',
    '236713MhFxoi',
    '2CiLvSB',
    'suggestion',
    'enforce\x20a\x20maximum\x20depth\x20that\x20blocks\x20can\x20be\x20nested',
    'https://eslint.org/docs/rules/max-depth',
    'integer',
    'object',
    'Blocks\x20are\x20nested\x20too\x20deeply\x20({{depth}}).\x20Maximum\x20allowed\x20is\x20{{maxDepth}}.'
];
const _0x24afba = _0x2931;
(function (_0x48d510, _0x3b05c5) {
    const _0x569d90 = _0x2931;
    while (!![]) {
        try {
            const _0x55a651 = parseInt(_0x569d90(0x1aa)) + -parseInt(_0x569d90(0x1ab)) + parseInt(_0x569d90(0x1ac)) * parseInt(_0x569d90(0x1ad)) + parseInt(_0x569d90(0x1ae)) + -parseInt(_0x569d90(0x1af)) + -parseInt(_0x569d90(0x1b0)) * parseInt(_0x569d90(0x1b1)) + parseInt(_0x569d90(0x1b2)) * parseInt(_0x569d90(0x1b3));
            if (_0x55a651 === _0x3b05c5)
                break;
            else
                _0x48d510['push'](_0x48d510['shift']());
        } catch (_0x12f078) {
            _0x48d510['push'](_0x48d510['shift']());
        }
    }
}(_0x29d1, 0xc1cff));
function _0x2931(_0x440f91, _0x59f39c) {
    return _0x2931 = function (_0x29d160, _0x2931f9) {
        _0x29d160 = _0x29d160 - 0x1aa;
        let _0x55a497 = _0x29d1[_0x29d160];
        return _0x55a497;
    }, _0x2931(_0x440f91, _0x59f39c);
}
module['exports'] = {
    'meta': {
        'type': _0x24afba(0x1b4),
        'docs': {
            'description': _0x24afba(0x1b5),
            'category': 'Stylistic\x20Issues',
            'recommended': ![],
            'url': _0x24afba(0x1b6)
        },
        'schema': [{
                'oneOf': [
                    {
                        'type': _0x24afba(0x1b7),
                        'minimum': 0x0
                    },
                    {
                        'type': _0x24afba(0x1b8),
                        'properties': {
                            'maximum': {
                                'type': _0x24afba(0x1b7),
                                'minimum': 0x0
                            },
                            'max': {
                                'type': _0x24afba(0x1b7),
                                'minimum': 0x0
                            }
                        },
                        'additionalProperties': ![]
                    }
                ]
            }],
        'messages': { 'tooDeeply': _0x24afba(0x1b9) }
    },
    'create'(_0x2eb2d6) {
        const _0x3d7b6f = _0x24afba, _0x3644dc = [], _0x15e232 = _0x2eb2d6[_0x3d7b6f(0x1ba)][0x0];
        let _0x166df6 = 0x4;
        typeof _0x15e232 === _0x3d7b6f(0x1b8) && (Object[_0x3d7b6f(0x1bb)][_0x3d7b6f(0x1bc)][_0x3d7b6f(0x1bd)](_0x15e232, _0x3d7b6f(0x1be)) || Object[_0x3d7b6f(0x1bb)][_0x3d7b6f(0x1bc)]['call'](_0x15e232, _0x3d7b6f(0x1bf))) && (_0x166df6 = _0x15e232[_0x3d7b6f(0x1be)] || _0x15e232[_0x3d7b6f(0x1bf)]);
        typeof _0x15e232 === _0x3d7b6f(0x1c0) && (_0x166df6 = _0x15e232);
        function _0x442db8() {
            const _0x59513e = _0x3d7b6f;
            _0x3644dc[_0x59513e(0x1c1)](0x0);
        }
        function _0x3038b0() {
            const _0xe0899a = _0x3d7b6f;
            _0x3644dc[_0xe0899a(0x1c2)]();
        }
        function _0x4403b8(_0x2da224) {
            const _0x10c85a = _0x3d7b6f, _0xe61aae = ++_0x3644dc[_0x3644dc[_0x10c85a(0x1c3)] - 0x1];
            _0xe61aae > _0x166df6 && _0x2eb2d6[_0x10c85a(0x1c4)]({
                'node': _0x2da224,
                'messageId': _0x10c85a(0x1c5),
                'data': {
                    'depth': _0xe61aae,
                    'maxDepth': _0x166df6
                }
            });
        }
        function _0x2f3116() {
            const _0x3ef794 = _0x3d7b6f;
            _0x3644dc[_0x3644dc[_0x3ef794(0x1c3)] - 0x1]--;
        }
        return {
            'Program': _0x442db8,
            'FunctionDeclaration': _0x442db8,
            'FunctionExpression': _0x442db8,
            'ArrowFunctionExpression': _0x442db8,
            'IfStatement'(_0xb6d3ec) {
                const _0x26a3c2 = _0x3d7b6f;
                _0xb6d3ec['parent'][_0x26a3c2(0x1c6)] !== _0x26a3c2(0x1c7) && _0x4403b8(_0xb6d3ec);
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
