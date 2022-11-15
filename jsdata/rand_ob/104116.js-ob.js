'use strict';
const _0x18d2 = [
    '164uIlicD',
    '60072NgIQVl',
    '269211tNiIjr',
    'unique',
    'conflicting',
    'Leading',
    'Dangling',
    'Block',
    'Line',
    'type',
    'MemberExpression',
    'computed',
    'object',
    'Identifier',
    'CommentCheckFlags',
    'property',
    'QIbQS',
    'length',
    'shift',
    'SOKLD',
    'OqkbC',
    'push',
    'DzHyz',
    'map',
    'name',
    'exports',
    'suggestion',
    'https://github.com/prettier/prettier/blob/main/scripts/tools/eslint-plugin-prettier-internal-rules/no-conflicting-comment-check-flags.js',
    'Do\x20not\x20use\x20same\x20flag\x20multiple\x20times.',
    'Do\x20not\x20use\x20{{flags}}\x20together.',
    'ovTVK',
    'HIxxL',
    'report',
    'filter',
    'paLzH',
    '\x27CommentCheckFlags.',
    'join',
    '381520QSQePC',
    '217iMweUw',
    '1961dAcEhU',
    '325744WDHVEh',
    '121171Ofozuu',
    '4QopJWR',
    '1523swpAXo'
];
function _0x22e5(_0xb6a35a, _0x1974a0) {
    return _0x22e5 = function (_0x4dd87b, _0x5f5a51) {
        _0x4dd87b = _0x4dd87b - (0x1ede + 0x8e + -0x3e * 0x7d);
        let _0x136172 = _0x18d2[_0x4dd87b];
        return _0x136172;
    }, _0x22e5(_0xb6a35a, _0x1974a0);
}
const _0x5029aa = _0x22e5;
(function (_0x22de0d, _0xdc8ff9) {
    const _0x57c167 = _0x22e5;
    while (!![]) {
        try {
            const _0x1bbee4 = parseInt(_0x57c167(0x126)) + parseInt(_0x57c167(0x127)) * -parseInt(_0x57c167(0x128)) + parseInt(_0x57c167(0x129)) + -parseInt(_0x57c167(0x12a)) * -parseInt(_0x57c167(0x12b)) + parseInt(_0x57c167(0x12c)) * -parseInt(_0x57c167(0x12d)) + parseInt(_0x57c167(0x12e)) + -parseInt(_0x57c167(0x12f));
            if (_0x1bbee4 === _0xdc8ff9)
                break;
            else
                _0x22de0d['push'](_0x22de0d['shift']());
        } catch (_0x339258) {
            _0x22de0d['push'](_0x22de0d['shift']());
        }
    }
}(_0x18d2, 0x6dc13 + -0x72a79 + 0x27fc9 * 0x2));
const MESSAGE_ID_UNIQUE = _0x5029aa(0x130), MESSAGE_ID_CONFLICTING = _0x5029aa(0x131), conflictingFlags = [
        [
            _0x5029aa(0x132),
            'Trailing',
            _0x5029aa(0x133)
        ],
        [
            _0x5029aa(0x134),
            _0x5029aa(0x135)
        ]
    ], isCommentCheckFlags = _0x2b416a => _0x2b416a[_0x5029aa(0x136)] === _0x5029aa(0x137) && !_0x2b416a[_0x5029aa(0x138)] && !_0x2b416a['optional'] && _0x2b416a[_0x5029aa(0x139)][_0x5029aa(0x136)] === _0x5029aa(0x13a) && _0x2b416a['object']['name'] === _0x5029aa(0x13b) && _0x2b416a[_0x5029aa(0x13c)][_0x5029aa(0x136)] === 'Identifier', flatFlags = _0x3465b9 => {
        const _0x39a86e = _0x5029aa, _0x59761e = {
                'QIbQS': function (_0x1e8ab5, _0xc1e001) {
                    return _0x1e8ab5 > _0xc1e001;
                },
                'SOKLD': function (_0x4caccd, _0xce5118) {
                    return _0x4caccd === _0xce5118;
                },
                'OqkbC': 'BinaryExpression',
                'DzHyz': function (_0x12de8e, _0x275b31) {
                    return _0x12de8e(_0x275b31);
                }
            }, _0x343201 = [], _0x4d2525 = [_0x3465b9];
        while (_0x59761e[_0x39a86e(0x13d)](_0x4d2525[_0x39a86e(0x13e)], 0x4f7 * -0x1 + 0x1997 * 0x1 + 0x1e0 * -0xb)) {
            const {
                left: _0x311ce2,
                right: _0x4d2038
            } = _0x4d2525[_0x39a86e(0x13f)]();
            for (const _0x38723d of [
                    _0x311ce2,
                    _0x4d2038
                ]) {
                if (_0x59761e[_0x39a86e(0x140)](_0x38723d['type'], _0x59761e[_0x39a86e(0x141)]) && _0x38723d['operator'] === '|') {
                    _0x4d2525[_0x39a86e(0x142)](_0x38723d);
                    continue;
                }
                if (!_0x59761e[_0x39a86e(0x143)](isCommentCheckFlags, _0x38723d))
                    return [];
                _0x343201[_0x39a86e(0x142)](_0x38723d);
            }
        }
        return _0x343201[_0x39a86e(0x144)](_0x51bac2 => _0x51bac2[_0x39a86e(0x13c)][_0x39a86e(0x145)]);
    };
module[_0x5029aa(0x146)] = {
    'meta': {
        'type': _0x5029aa(0x147),
        'docs': { 'url': _0x5029aa(0x148) },
        'messages': {
            [MESSAGE_ID_UNIQUE]: _0x5029aa(0x149),
            [MESSAGE_ID_CONFLICTING]: _0x5029aa(0x14a)
        }
    },
    'create'(_0x1b65ee) {
        const _0x3139f0 = {
            'ovTVK': function (_0x23d3bd, _0x59ba72) {
                return _0x23d3bd < _0x59ba72;
            },
            'HIxxL': function (_0x45a91e, _0x3d7876) {
                return _0x45a91e !== _0x3d7876;
            },
            'paLzH': function (_0xd15a4a, _0x4e34ac) {
                return _0xd15a4a > _0x4e34ac;
            }
        };
        return {
            ':not(BinaryExpression)\x20>\x20BinaryExpression[operator=\x22|\x22]'(_0x53c077) {
                const _0x22bf6d = _0x22e5, _0xbf8a3f = flatFlags(_0x53c077);
                if (_0x3139f0[_0x22bf6d(0x14b)](_0xbf8a3f[_0x22bf6d(0x13e)], 0x3 * 0x7b2 + 0x1613 + -0x2d27 * 0x1))
                    return;
                const _0x24db42 = new Set(_0xbf8a3f);
                if (_0x3139f0[_0x22bf6d(0x14c)](_0x24db42['size'], _0xbf8a3f['length'])) {
                    _0x1b65ee[_0x22bf6d(0x14d)]({
                        'node': _0x53c077,
                        'messageId': MESSAGE_ID_UNIQUE
                    });
                    return;
                }
                for (const _0x4da47a of conflictingFlags) {
                    const _0x2b2a10 = _0x4da47a[_0x22bf6d(0x14e)](_0xc388f6 => _0x24db42['has'](_0xc388f6));
                    _0x3139f0[_0x22bf6d(0x14f)](_0x2b2a10[_0x22bf6d(0x13e)], 0x1d40 + 0x1e29 + -0x3b68) && _0x1b65ee[_0x22bf6d(0x14d)]({
                        'node': _0x53c077,
                        'messageId': MESSAGE_ID_CONFLICTING,
                        'data': { 'flags': _0x2b2a10[_0x22bf6d(0x144)](_0x20f44d => _0x22bf6d(0x150) + _0x20f44d + '\x27')[_0x22bf6d(0x151)](',\x20') }
                    });
                }
            }
        };
    }
};
