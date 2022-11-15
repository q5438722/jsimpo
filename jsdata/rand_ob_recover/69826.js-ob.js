module[_0x587d2a(440)] = {
    'entry'() {
        const _0x52cd00 = _0x587d2a, _0x3b3864 = {
                'pXUkM': _0x52cd00(441),
                'SywVL': _0x52cd00(442),
                'KQOwy': 'react-vendors',
                'EtLEE': _0x52cd00(443),
                'NAhrM': _0x52cd00(444),
                'rHuOM': _0x52cd00(445),
                'kRFHt': 'react-dom',
                'SjbyT': _0x52cd00(446)
            };
        return Promise[_0x52cd00(447)]({
            'app': {
                'import': _0x52cd00(448),
                'dependOn': [_0x3b3864[_0x52cd00(449)]]
            },
            'page1': {
                'import': './page1.js',
                'dependOn': [
                    _0x3b3864['SywVL'],
                    _0x3b3864['KQOwy']
                ]
            },
            'page2': {
                'import': _0x3b3864[_0x52cd00(450)],
                'dependOn': [
                    _0x3b3864[_0x52cd00(451)],
                    _0x3b3864[_0x52cd00(452)]
                ]
            },
            'page3': {
                'import': _0x3b3864[_0x52cd00(453)],
                'dependOn': [_0x3b3864[_0x52cd00(451)]]
            },
            'react-vendors': [
                _0x3b3864[_0x52cd00(454)],
                _0x3b3864[_0x52cd00(455)],
                _0x52cd00(456)
            ],
            'other-vendors': _0x3b3864['SjbyT']
        });
    },
    'target': 'web',
    'optimization': { 'runtimeChunk': _0x587d2a(457) },
    'output': { 'filename': _0x587d2a(458) },
    'plugins': [function () {
            const _0xb05979 = _0x587d2a, _0x65a7f2 = {
                    'dvsZZ': 'other-vendors',
                    'sUXEO': function (_0x360597, _0x19d716) {
                        return _0x360597(_0x19d716);
                    },
                    'xlmOl': _0xb05979(459),
                    'ridJy': _0xb05979(442),
                    'BPLcl': function (_0x255a2d, _0x3b3541) {
                        return _0x255a2d(_0x3b3541);
                    }
                }, _0x59a004 = _0x4e833b => {
                    const _0x2e4a2f = _0xb05979;
                    _0x4e833b['hooks'][_0x2e4a2f(460)]['tap'](_0x2e4a2f(461), () => {
                        const _0x14d1d1 = _0x2e4a2f, {chunkGraph: _0x13b8e2} = _0x4e833b, _0x164121 = {};
                        for (const _0x391e4a of _0x4e833b[_0x14d1d1(462)]) {
                            _0x164121[_0x391e4a[_0x14d1d1(463)]] = new Set();
                            for (const _0x57e9ee of _0x13b8e2[_0x14d1d1(464)](_0x391e4a)) {
                                _0x164121[_0x391e4a[_0x14d1d1(463)]][_0x14d1d1(465)](_0x57e9ee['identifier']());
                            }
                        }
                        for (const _0x5ad20c of _0x164121[_0x65a7f2[_0x14d1d1(466)]]) {
                            _0x65a7f2[_0x14d1d1(467)](expect, [..._0x164121[_0x14d1d1(442)]])[_0x14d1d1(468)]['toContain'](_0x5ad20c);
                        }
                        for (const _0x4eda4b of [
                                ..._0x164121[_0x65a7f2[_0x14d1d1(466)]],
                                ..._0x164121[_0x65a7f2[_0x14d1d1(469)]],
                                ..._0x164121[_0x65a7f2['ridJy']]
                            ]) {
                            _0x65a7f2['sUXEO'](expect, _0x164121[_0x14d1d1(470)])[_0x14d1d1(468)]['toContain'](_0x4eda4b), _0x65a7f2[_0x14d1d1(471)](expect, _0x164121['page2'])[_0x14d1d1(468)]['toContain'](_0x4eda4b);
                        }
                        for (const _0x171a3d of [
                                ..._0x164121[_0x65a7f2[_0x14d1d1(466)]],
                                ..._0x164121[_0x65a7f2[_0x14d1d1(472)]]
                            ]) {
                            _0x65a7f2['BPLcl'](expect, [..._0x164121[_0x14d1d1(473)]])[_0x14d1d1(468)][_0x14d1d1(474)](_0x171a3d);
                        }
                    });
                };
            this[_0xb05979(475)]['compilation']['tap'](_0xb05979(461), _0x59a004);
        }]
};