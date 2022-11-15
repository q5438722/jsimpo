function _0x54b4(_0x16ec30, _0x5a3284) {
    return _0x54b4 = function (_0x7a77b2, _0x54b4f3) {
        _0x7a77b2 = _0x7a77b2 - 479;
        let _0x3193b9 = _0x7a77[_0x7a77b2];
        return _0x3193b9;
    }, _0x54b4(_0x16ec30, _0x5a3284);
}
const MESSAGE_ID_UNIQUE = 'unique', MESSAGE_ID_CONFLICTING = 'conflicting', conflictingFlags = [
        [
            _0x316bae(488),
            _0x316bae(489),
            _0x316bae(490)
        ],
        [
            'Block',
            _0x316bae(491)
        ]
    ], isCommentCheckFlags = _0x55edd3 => _0x55edd3[_0x316bae(492)] === _0x316bae(493) && !_0x55edd3[_0x316bae(494)] && !_0x55edd3['optional'] && _0x55edd3[_0x316bae(495)][_0x316bae(492)] === 'Identifier' && _0x55edd3[_0x316bae(495)]['name'] === 'CommentCheckFlags' && _0x55edd3[_0x316bae(496)]['type'] === 'Identifier', flatFlags = _0x56d3d0 => {
        const _0x499000 = _0x316bae, _0x324a0d = [], _0x1b7e49 = [_0x56d3d0];
        while (_0x1b7e49[_0x499000(497)] > 0) {
            const {
                left: _0x2070b0,
                right: _0xb4dbc7
            } = _0x1b7e49[_0x499000(498)]();
            for (const _0x401a35 of [
                    _0x2070b0,
                    _0xb4dbc7
                ]) {
                if (_0x401a35[_0x499000(492)] === _0x499000(499) && _0x401a35[_0x499000(500)] === '|') {
                    _0x1b7e49[_0x499000(501)](_0x401a35);
                    continue;
                }
                if (!isCommentCheckFlags(_0x401a35))
                    return [];
                _0x324a0d[_0x499000(501)](_0x401a35);
            }
        }
        return _0x324a0d[_0x499000(502)](_0x1d4074 => _0x1d4074['property']['name']);
    };
module['exports'] = {
    'meta': {
        'type': _0x316bae(503),
        'docs': { 'url': _0x316bae(504) },
        'messages': {
            [MESSAGE_ID_UNIQUE]: _0x316bae(505),
            [MESSAGE_ID_CONFLICTING]: _0x316bae(506)
        }
    },
    'create'(_0x2bd592) {
        return {
            ':not(BinaryExpression) > BinaryExpression[operator="|"]'(_0x2945a2) {
                const _0x1689df = _0x54b4, _0x3f89d9 = flatFlags(_0x2945a2);
                if (_0x3f89d9[_0x1689df(497)] < 2)
                    return;
                const _0x8d7085 = new Set(_0x3f89d9);
                if (_0x8d7085['size'] !== _0x3f89d9['length']) {
                    _0x2bd592[_0x1689df(507)]({
                        'node': _0x2945a2,
                        'messageId': MESSAGE_ID_UNIQUE
                    });
                    return;
                }
                for (const _0x1cd0b8 of conflictingFlags) {
                    const _0x293f7b = _0x1cd0b8[_0x1689df(508)](_0x279bdc => _0x8d7085[_0x1689df(509)](_0x279bdc));
                    _0x293f7b['length'] > 1 && _0x2bd592[_0x1689df(507)]({
                        'node': _0x2945a2,
                        'messageId': MESSAGE_ID_CONFLICTING,
                        'data': { 'flags': _0x293f7b['map'](_0x58e37d => _0x1689df(510) + _0x58e37d + '\'')[_0x1689df(511)](', ') }
                    });
                }
            }
        };
    }
};