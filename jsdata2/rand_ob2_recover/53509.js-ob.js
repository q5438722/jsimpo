function _0xc29b(_0x56958a, _0x3b848e) {
    return _0xc29b = function (_0x1afc11, _0xc29b98) {
        _0x1afc11 = _0x1afc11 - 436;
        let _0x1cbc91 = _0x1afc[_0x1afc11];
        return _0x1cbc91;
    }, _0xc29b(_0x56958a, _0x3b848e);
}
module[_0x38ce9d(446)] = {
    'meta': {
        'type': _0x38ce9d(447),
        'docs': {
            'description': _0x38ce9d(448),
            'category': 'Stylistic Issues',
            'recommended': ![],
            'url': _0x38ce9d(449)
        },
        'fixable': _0x38ce9d(450),
        'schema': [{
                'enum': [
                    _0x38ce9d(451),
                    _0x38ce9d(452)
                ]
            }],
        'messages': {
            'expected': _0x38ce9d(453),
            'unexpected': _0x38ce9d(454)
        }
    },
    'create'(_0x1c38a4) {
        return {
            'Program': function _0x28b0e4(_0x4cd4db) {
                const _0x4aea09 = _0xc29b, _0xae4ed8 = _0x1c38a4[_0x4aea09(455)](), _0x111008 = {
                        'column': 0,
                        'line': 1
                    }, _0x753cb9 = _0x1c38a4[_0x4aea09(456)][0] || 'never';
                if (!_0xae4ed8[_0x4aea09(457)] && _0x753cb9 === _0x4aea09(451))
                    _0x1c38a4[_0x4aea09(458)]({
                        'node': _0x4cd4db,
                        'loc': _0x111008,
                        'messageId': _0x4aea09(459),
                        'fix'(_0x2271b0) {
                            const _0x33ab34 = _0x4aea09;
                            return _0x2271b0[_0x33ab34(460)]([
                                0,
                                1
                            ], '\uFEFF');
                        }
                    });
                else
                    _0xae4ed8['hasBOM'] && _0x753cb9 === 'never' && _0x1c38a4['report']({
                        'node': _0x4cd4db,
                        'loc': _0x111008,
                        'messageId': _0x4aea09(461),
                        'fix'(_0x1ffad3) {
                            const _0x5811da = _0x4aea09;
                            return _0x1ffad3[_0x5811da(462)]([
                                -1,
                                0
                            ]);
                        }
                    });
            }
        };
    }
};