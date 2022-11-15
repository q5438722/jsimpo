'use strict';
const MESSAGE_ID_UNIQUE = 'unique', MESSAGE_ID_CONFLICTING = 'conflicting', conflictingFlags = [
        [
            'Leading',
            'Trailing',
            'Dangling'
        ],
        [
            'Block',
            'Line'
        ]
    ], isCommentCheckFlags = _0x1300d9 => _0x1300d9['type'] === 'MemberExpression' && !_0x1300d9['computed'] && !_0x1300d9['optional'] && _0x1300d9['object']['type'] === 'Identifier' && _0x1300d9['object']['name'] === 'CommentCheckFlags' && _0x1300d9['property']['type'] === 'Identifier', flatFlags = _0xc957fb => {
        const _0x1ff4ce = {
                'kXwvr': function (_0x14d888, _0x3b1fca) {
                    return _0x14d888 > _0x3b1fca;
                },
                'ZPUqF': function (_0x3a77c8, _0x2b4a4c) {
                    return _0x3a77c8 === _0x2b4a4c;
                },
                'zCxNs': 'BinaryExpression',
                'NeGjf': function (_0x4e833b, _0x4d4890) {
                    return _0x4e833b(_0x4d4890);
                }
            }, _0xeda627 = [], _0x3f62bd = [_0xc957fb];
        while (_0x1ff4ce['kXwvr'](_0x3f62bd['length'], 0x0)) {
            const {
                left: _0x5ebc13,
                right: _0xca1618
            } = _0x3f62bd['shift']();
            for (const _0x46cf7e of [
                    _0x5ebc13,
                    _0xca1618
                ]) {
                if (_0x1ff4ce['ZPUqF'](_0x46cf7e['type'], _0x1ff4ce['zCxNs']) && _0x1ff4ce['ZPUqF'](_0x46cf7e['operator'], '|')) {
                    _0x3f62bd['push'](_0x46cf7e);
                    continue;
                }
                if (!_0x1ff4ce['NeGjf'](isCommentCheckFlags, _0x46cf7e))
                    return [];
                _0xeda627['push'](_0x46cf7e);
            }
        }
        return _0xeda627['map'](_0x1b311f => _0x1b311f['property']['name']);
    };
module['exports'] = {
    'meta': {
        'type': 'suggestion',
        'docs': { 'url': 'https://github.com/prettier/prettier/blob/main/scripts/tools/eslint-plugin-prettier-internal-rules/no-conflicting-comment-check-flags.js' },
        'messages': {
            [MESSAGE_ID_UNIQUE]: 'Do\x20not\x20use\x20same\x20flag\x20multiple\x20times.',
            [MESSAGE_ID_CONFLICTING]: 'Do\x20not\x20use\x20{{flags}}\x20together.'
        }
    },
    'create'(_0x24b54b) {
        const _0x1b5810 = {
            'ZyHqV': function (_0x38fb38, _0x2da1f8) {
                return _0x38fb38(_0x2da1f8);
            },
            'iRzJi': function (_0x3eacef, _0x206716) {
                return _0x3eacef < _0x206716;
            },
            'SFvVB': function (_0x52d8bd, _0x313fd0) {
                return _0x52d8bd !== _0x313fd0;
            },
            'pBWZA': function (_0x15b43c, _0x2dc6a0) {
                return _0x15b43c > _0x2dc6a0;
            }
        };
        return {
            ':not(BinaryExpression)\x20>\x20BinaryExpression[operator=\x22|\x22]'(_0x308faf) {
                const _0x2e3ea3 = _0x1b5810['ZyHqV'](flatFlags, _0x308faf);
                if (_0x1b5810['iRzJi'](_0x2e3ea3['length'], 0x2))
                    return;
                const _0x47e4a3 = new Set(_0x2e3ea3);
                if (_0x1b5810['SFvVB'](_0x47e4a3['size'], _0x2e3ea3['length'])) {
                    _0x24b54b['report']({
                        'node': _0x308faf,
                        'messageId': MESSAGE_ID_UNIQUE
                    });
                    return;
                }
                for (const _0x2212fb of conflictingFlags) {
                    const _0x3674fd = _0x2212fb['filter'](_0x584675 => _0x47e4a3['has'](_0x584675));
                    _0x1b5810['pBWZA'](_0x3674fd['length'], 0x1) && _0x24b54b['report']({
                        'node': _0x308faf,
                        'messageId': MESSAGE_ID_CONFLICTING,
                        'data': { 'flags': _0x3674fd['map'](_0x415786 => '\x27CommentCheckFlags.' + _0x415786 + '\x27')['join'](',\x20') }
                    });
                }
            }
        };
    }
};
