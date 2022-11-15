'use strict';
const _0x7a77 = [
    'property',
    'length',
    'shift',
    'BinaryExpression',
    'operator',
    'push',
    'map',
    'suggestion',
    'https://github.com/prettier/prettier/blob/main/scripts/tools/eslint-plugin-prettier-internal-rules/no-conflicting-comment-check-flags.js',
    'Do\x20not\x20use\x20same\x20flag\x20multiple\x20times.',
    'Do\x20not\x20use\x20{{flags}}\x20together.',
    'report',
    'filter',
    'has',
    '\x27CommentCheckFlags.',
    'join',
    '163719gmyguI',
    '553520zAQNuZ',
    '2wIuZzG',
    '229589rnqJFQ',
    '3LVmnVk',
    '109259JgIiZv',
    '583590bMyLhy',
    '17521viFTst',
    '245481Iuzdnp',
    'Leading',
    'Trailing',
    'Dangling',
    'Line',
    'type',
    'MemberExpression',
    'computed',
    'object'
];
const _0x316bae = _0x54b4;
(function (_0x2fd190, _0x992f61) {
    const _0x53e918 = _0x54b4;
    while (!![]) {
        try {
            const _0x5906be = -parseInt(_0x53e918(0x1df)) + parseInt(_0x53e918(0x1e0)) + parseInt(_0x53e918(0x1e1)) * parseInt(_0x53e918(0x1e2)) + -parseInt(_0x53e918(0x1e3)) * -parseInt(_0x53e918(0x1e4)) + -parseInt(_0x53e918(0x1e5)) + -parseInt(_0x53e918(0x1e6)) + -parseInt(_0x53e918(0x1e7));
            if (_0x5906be === _0x992f61)
                break;
            else
                _0x2fd190['push'](_0x2fd190['shift']());
        } catch (_0x2be310) {
            _0x2fd190['push'](_0x2fd190['shift']());
        }
    }
}(_0x7a77, 0x509b4));
function _0x54b4(_0x16ec30, _0x5a3284) {
    return _0x54b4 = function (_0x7a77b2, _0x54b4f3) {
        _0x7a77b2 = _0x7a77b2 - 0x1df;
        let _0x3193b9 = _0x7a77[_0x7a77b2];
        return _0x3193b9;
    }, _0x54b4(_0x16ec30, _0x5a3284);
}
const MESSAGE_ID_UNIQUE = 'unique', MESSAGE_ID_CONFLICTING = 'conflicting', conflictingFlags = [
        [
            _0x316bae(0x1e8),
            _0x316bae(0x1e9),
            _0x316bae(0x1ea)
        ],
        [
            'Block',
            _0x316bae(0x1eb)
        ]
    ], isCommentCheckFlags = _0x55edd3 => _0x55edd3[_0x316bae(0x1ec)] === _0x316bae(0x1ed) && !_0x55edd3[_0x316bae(0x1ee)] && !_0x55edd3['optional'] && _0x55edd3[_0x316bae(0x1ef)][_0x316bae(0x1ec)] === 'Identifier' && _0x55edd3[_0x316bae(0x1ef)]['name'] === 'CommentCheckFlags' && _0x55edd3[_0x316bae(0x1f0)]['type'] === 'Identifier', flatFlags = _0x56d3d0 => {
        const _0x499000 = _0x316bae, _0x324a0d = [], _0x1b7e49 = [_0x56d3d0];
        while (_0x1b7e49[_0x499000(0x1f1)] > 0x0) {
            const {
                left: _0x2070b0,
                right: _0xb4dbc7
            } = _0x1b7e49[_0x499000(0x1f2)]();
            for (const _0x401a35 of [
                    _0x2070b0,
                    _0xb4dbc7
                ]) {
                if (_0x401a35[_0x499000(0x1ec)] === _0x499000(0x1f3) && _0x401a35[_0x499000(0x1f4)] === '|') {
                    _0x1b7e49[_0x499000(0x1f5)](_0x401a35);
                    continue;
                }
                if (!isCommentCheckFlags(_0x401a35))
                    return [];
                _0x324a0d[_0x499000(0x1f5)](_0x401a35);
            }
        }
        return _0x324a0d[_0x499000(0x1f6)](_0x1d4074 => _0x1d4074['property']['name']);
    };
module['exports'] = {
    'meta': {
        'type': _0x316bae(0x1f7),
        'docs': { 'url': _0x316bae(0x1f8) },
        'messages': {
            [MESSAGE_ID_UNIQUE]: _0x316bae(0x1f9),
            [MESSAGE_ID_CONFLICTING]: _0x316bae(0x1fa)
        }
    },
    'create'(_0x2bd592) {
        return {
            ':not(BinaryExpression)\x20>\x20BinaryExpression[operator=\x22|\x22]'(_0x2945a2) {
                const _0x1689df = _0x54b4, _0x3f89d9 = flatFlags(_0x2945a2);
                if (_0x3f89d9[_0x1689df(0x1f1)] < 0x2)
                    return;
                const _0x8d7085 = new Set(_0x3f89d9);
                if (_0x8d7085['size'] !== _0x3f89d9['length']) {
                    _0x2bd592[_0x1689df(0x1fb)]({
                        'node': _0x2945a2,
                        'messageId': MESSAGE_ID_UNIQUE
                    });
                    return;
                }
                for (const _0x1cd0b8 of conflictingFlags) {
                    const _0x293f7b = _0x1cd0b8[_0x1689df(0x1fc)](_0x279bdc => _0x8d7085[_0x1689df(0x1fd)](_0x279bdc));
                    _0x293f7b['length'] > 0x1 && _0x2bd592[_0x1689df(0x1fb)]({
                        'node': _0x2945a2,
                        'messageId': MESSAGE_ID_CONFLICTING,
                        'data': { 'flags': _0x293f7b['map'](_0x58e37d => _0x1689df(0x1fe) + _0x58e37d + '\x27')[_0x1689df(0x1ff)](',\x20') }
                    });
                }
            }
        };
    }
};
