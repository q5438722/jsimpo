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
    ], isCommentCheckFlags = _0x3cee0b => _0x3cee0b['type'] === 'MemberExpression' && !_0x3cee0b['computed'] && !_0x3cee0b['optional'] && _0x3cee0b['object']['type'] === 'Identifier' && _0x3cee0b['object']['name'] === 'CommentCheckFlags' && _0x3cee0b['property']['type'] === 'Identifier', flatFlags = _0x2f55be => {
        const _0xfe94eb = [], _0x4d5407 = [_0x2f55be];
        while (_0x4d5407['length'] > -0x21f8 + 0x1196 + 0x1062) {
            const {
                left: _0x5009b6,
                right: _0x41b429
            } = _0x4d5407['shift']();
            for (const _0x1be0eb of [
                    _0x5009b6,
                    _0x41b429
                ]) {
                if (_0x1be0eb['type'] === 'BinaryExpression' && _0x1be0eb['operator'] === '|') {
                    _0x4d5407['push'](_0x1be0eb);
                    continue;
                }
                if (!isCommentCheckFlags(_0x1be0eb))
                    return [];
                _0xfe94eb['push'](_0x1be0eb);
            }
        }
        return _0xfe94eb['map'](_0xc8f2e9 => _0xc8f2e9['property']['name']);
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
    'create'(_0x4c9158) {
        return {
            ':not(BinaryExpression)\x20>\x20BinaryExpression[operator=\x22|\x22]'(_0x53aa55) {
                const _0x5908c0 = flatFlags(_0x53aa55);
                if (_0x5908c0['length'] < -0x1985 * -0x1 + -0xef0 * -0x2 + -0x3763)
                    return;
                const _0x2de6e1 = new Set(_0x5908c0);
                if (_0x2de6e1['size'] !== _0x5908c0['length']) {
                    _0x4c9158['report']({
                        'node': _0x53aa55,
                        'messageId': MESSAGE_ID_UNIQUE
                    });
                    return;
                }
                for (const _0x367540 of conflictingFlags) {
                    const _0x472bc7 = _0x367540['filter'](_0x2a659e => _0x2de6e1['has'](_0x2a659e));
                    _0x472bc7['length'] > -0x23ca + -0x246a + 0x4835 && _0x4c9158['report']({
                        'node': _0x53aa55,
                        'messageId': MESSAGE_ID_CONFLICTING,
                        'data': { 'flags': _0x472bc7['map'](_0x44971b => '\x27CommentCheckFlags.' + _0x44971b + '\x27')['join'](',\x20') }
                    });
                }
            }
        };
    }
};
