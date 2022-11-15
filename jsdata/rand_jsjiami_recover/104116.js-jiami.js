'use strict';
const MESSAGE_ID_UNIQUE = 'unique';
const MESSAGE_ID_CONFLICTING = 'conflicting';
const conflictingFlags = [
    [
        'Leading',
        'Trailing',
        'Dangling'
    ],
    [
        'Block',
        'Line'
    ]
];
const isCommentCheckFlags = _0x2d04b3 => _0x2d04b3['type'] === 'MemberExpression' && !_0x2d04b3['computed'] && !_0x2d04b3['optional'] && _0x2d04b3['object']['type'] === 'Identifier' && _0x2d04b3['object']['name'] === 'CommentCheckFlags' && _0x2d04b3['property']['type'] === 'Identifier';
const flatFlags = _0x9a2a8a => {
    const _0x1c4200 = [];
    const _0x3a62db = [_0x9a2a8a];
    while (_0x3a62db['length'] > 0) {
        const {left, right} = _0x3a62db['shift']();
        for (const _0x9a2a8a of [
                left,
                right
            ]) {
            if (_0x9a2a8a['type'] === 'BinaryExpression' && _0x9a2a8a['operator'] === '|') {
                if ('fqHXL' !== 'BatRi') {
                    _0x3a62db['push'](_0x9a2a8a);
                    continue;
                } else {
                    return [];
                }
            }
            if (!isCommentCheckFlags(_0x9a2a8a)) {
                return [];
            }
            _0x1c4200['push'](_0x9a2a8a);
        }
    }
    return _0x1c4200['map'](_0x9a2a8a => _0x9a2a8a['property']['name']);
};
module['exports'] = {
    'meta': {
        'type': 'suggestion',
        'docs': { 'url': 'https://github.com/prettier/prettier/blob/main/scripts/tools/eslint-plugin-prettier-internal-rules/no-conflicting-comment-check-flags.js' },
        'messages': {
            [MESSAGE_ID_UNIQUE]: 'Do not use same flag multiple times.',
            [MESSAGE_ID_CONFLICTING]: 'Do not use {{flags}} together.'
        }
    },
    'create'(_0x4ed934) {
        return {
            ':not(BinaryExpression) > BinaryExpression[operator="|"]'(_0x49a4d4) {
                if ('aVTpi' !== 'zbFOu') {
                    const _0x56010b = flatFlags(_0x49a4d4);
                    if (_0x56010b['length'] < 2) {
                        return;
                    }
                    const _0x171e1a = new Set(_0x56010b);
                    if (_0x171e1a['size'] !== _0x56010b['length']) {
                        _0x4ed934['report']({
                            'node': _0x49a4d4,
                            'messageId': MESSAGE_ID_UNIQUE
                        });
                        return;
                    }
                    for (const _0x443be9 of conflictingFlags) {
                        const _0x4b6428 = _0x443be9['filter'](_0x34fa74 => _0x171e1a['has'](_0x34fa74));
                        if (_0x4b6428['length'] > 1) {
                            _0x4ed934['report']({
                                'node': _0x49a4d4,
                                'messageId': MESSAGE_ID_CONFLICTING,
                                'data': { 'flags': _0x4b6428['map'](_0x1042c1 => '\'CommentCheckFlags.' + _0x1042c1 + '\'')['join'](', ') }
                            });
                        }
                    }
                } else {
                    return;
                }
            }
        };
    }
};