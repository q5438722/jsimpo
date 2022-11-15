const MESSAGE_ID_UNIQUE = _0x5029aa(304), MESSAGE_ID_CONFLICTING = _0x5029aa(305), conflictingFlags = [
        [
            _0x5029aa(306),
            'Trailing',
            _0x5029aa(307)
        ],
        [
            _0x5029aa(308),
            _0x5029aa(309)
        ]
    ], isCommentCheckFlags = _0x2b416a => _0x2b416a[_0x5029aa(310)] === _0x5029aa(311) && !_0x2b416a[_0x5029aa(312)] && !_0x2b416a['optional'] && _0x2b416a[_0x5029aa(313)][_0x5029aa(310)] === _0x5029aa(314) && _0x2b416a['object']['name'] === _0x5029aa(315) && _0x2b416a[_0x5029aa(316)][_0x5029aa(310)] === 'Identifier', flatFlags = _0x3465b9 => {
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
        while (_0x59761e[_0x39a86e(317)](_0x4d2525[_0x39a86e(318)], 1271 * -1 + 6551 * 1 + 480 * -11)) {
            const {
                left: _0x311ce2,
                right: _0x4d2038
            } = _0x4d2525[_0x39a86e(319)]();
            for (const _0x38723d of [
                    _0x311ce2,
                    _0x4d2038
                ]) {
                if (_0x59761e[_0x39a86e(320)](_0x38723d['type'], _0x59761e[_0x39a86e(321)]) && _0x38723d['operator'] === '|') {
                    _0x4d2525[_0x39a86e(322)](_0x38723d);
                    continue;
                }
                if (!_0x59761e[_0x39a86e(323)](isCommentCheckFlags, _0x38723d))
                    return [];
                _0x343201[_0x39a86e(322)](_0x38723d);
            }
        }
        return _0x343201[_0x39a86e(324)](_0x51bac2 => _0x51bac2[_0x39a86e(316)][_0x39a86e(325)]);
    };
module[_0x5029aa(326)] = {
    'meta': {
        'type': _0x5029aa(327),
        'docs': { 'url': _0x5029aa(328) },
        'messages': {
            [MESSAGE_ID_UNIQUE]: _0x5029aa(329),
            [MESSAGE_ID_CONFLICTING]: _0x5029aa(330)
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
            ':not(BinaryExpression) > BinaryExpression[operator="|"]'(_0x53c077) {
                const _0x22bf6d = _0x22e5, _0xbf8a3f = flatFlags(_0x53c077);
                if (_0x3139f0[_0x22bf6d(331)](_0xbf8a3f[_0x22bf6d(318)], 3 * 1970 + 5651 + -11559 * 1))
                    return;
                const _0x24db42 = new Set(_0xbf8a3f);
                if (_0x3139f0[_0x22bf6d(332)](_0x24db42['size'], _0xbf8a3f['length'])) {
                    _0x1b65ee[_0x22bf6d(333)]({
                        'node': _0x53c077,
                        'messageId': MESSAGE_ID_UNIQUE
                    });
                    return;
                }
                for (const _0x4da47a of conflictingFlags) {
                    const _0x2b2a10 = _0x4da47a[_0x22bf6d(334)](_0xc388f6 => _0x24db42['has'](_0xc388f6));
                    _0x3139f0[_0x22bf6d(335)](_0x2b2a10[_0x22bf6d(318)], 7488 + 7721 + -15208) && _0x1b65ee[_0x22bf6d(333)]({
                        'node': _0x53c077,
                        'messageId': MESSAGE_ID_CONFLICTING,
                        'data': { 'flags': _0x2b2a10[_0x22bf6d(324)](_0x20f44d => _0x22bf6d(336) + _0x20f44d + '\'')[_0x22bf6d(337)](', ') }
                    });
                }
            }
        };
    }
};