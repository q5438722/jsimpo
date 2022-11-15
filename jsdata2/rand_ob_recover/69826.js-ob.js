module['exports'] = {
    'entry'() {
        const _0x32f4fb = _0xf36c, _0x46c6a3 = {
                'qgmDE': _0x32f4fb(432),
                'rfQNq': _0x32f4fb(433),
                'rPgBs': './page1.js',
                'tjFeb': _0x32f4fb(434),
                'WfdOt': _0x32f4fb(435),
                'VxTrc': _0x32f4fb(436),
                'UMgoY': _0x32f4fb(437),
                'hMbxW': _0x32f4fb(438),
                'cEAZR': './other-vendors'
            };
        return Promise[_0x32f4fb(439)]({
            'app': {
                'import': _0x46c6a3['qgmDE'],
                'dependOn': [_0x46c6a3['rfQNq']]
            },
            'page1': {
                'import': _0x46c6a3[_0x32f4fb(440)],
                'dependOn': [
                    _0x46c6a3[_0x32f4fb(441)],
                    _0x46c6a3[_0x32f4fb(442)]
                ]
            },
            'page2': {
                'import': _0x32f4fb(443),
                'dependOn': [
                    _0x46c6a3[_0x32f4fb(441)],
                    _0x32f4fb(435)
                ]
            },
            'page3': {
                'import': _0x46c6a3['VxTrc'],
                'dependOn': ['app']
            },
            'react-vendors': [
                _0x46c6a3['UMgoY'],
                _0x32f4fb(444),
                _0x46c6a3[_0x32f4fb(445)]
            ],
            'other-vendors': _0x46c6a3[_0x32f4fb(446)]
        });
    },
    'target': 'web',
    'optimization': { 'runtimeChunk': 'single' },
    'output': { 'filename': _0x3d63ab(447) },
    'plugins': [function () {
            const _0x3dc98d = _0x3d63ab, _0x4f290e = {
                    'dwibd': function (_0x60053f, _0x187a47) {
                        return _0x60053f(_0x187a47);
                    },
                    'PqXpc': _0x3dc98d(433),
                    'fJBhC': _0x3dc98d(435),
                    'matdu': _0x3dc98d(434),
                    'xLIbi': function (_0x25bcc9, _0x1c0cd7) {
                        return _0x25bcc9(_0x1c0cd7);
                    }
                }, _0x215632 = _0x3bd036 => {
                    const _0x22381c = _0x3dc98d;
                    _0x3bd036[_0x22381c(448)][_0x22381c(449)][_0x22381c(450)](_0x22381c(451), () => {
                        const _0x1e7e34 = _0x22381c, {chunkGraph: _0xb3b201} = _0x3bd036, _0x413c94 = {};
                        for (const _0x4e9fd0 of _0x3bd036[_0x1e7e34(452)]) {
                            _0x413c94[_0x4e9fd0[_0x1e7e34(453)]] = new Set();
                            for (const _0x4c7d47 of _0xb3b201[_0x1e7e34(454)](_0x4e9fd0)) {
                                _0x413c94[_0x4e9fd0[_0x1e7e34(453)]][_0x1e7e34(455)](_0x4c7d47[_0x1e7e34(456)]());
                            }
                        }
                        for (const _0x4e5a95 of _0x413c94[_0x1e7e34(433)]) {
                            _0x4f290e[_0x1e7e34(457)](expect, [..._0x413c94[_0x1e7e34(434)]])[_0x1e7e34(458)][_0x1e7e34(459)](_0x4e5a95);
                        }
                        for (const _0x40d80d of [
                                ..._0x413c94[_0x4f290e[_0x1e7e34(460)]],
                                ..._0x413c94[_0x4f290e[_0x1e7e34(461)]],
                                ..._0x413c94[_0x1e7e34(434)]
                            ]) {
                            _0x4f290e[_0x1e7e34(457)](expect, _0x413c94[_0x1e7e34(462)])[_0x1e7e34(458)][_0x1e7e34(459)](_0x40d80d), expect(_0x413c94[_0x1e7e34(463)])[_0x1e7e34(458)][_0x1e7e34(459)](_0x40d80d);
                        }
                        for (const _0x618a54 of [
                                ..._0x413c94[_0x4f290e[_0x1e7e34(460)]],
                                ..._0x413c94[_0x4f290e[_0x1e7e34(464)]]
                            ]) {
                            _0x4f290e['xLIbi'](expect, [..._0x413c94[_0x1e7e34(465)]])['not'][_0x1e7e34(459)](_0x618a54);
                        }
                    });
                };
            this[_0x3dc98d(448)][_0x3dc98d(466)][_0x3dc98d(450)](_0x3dc98d(451), _0x215632);
        }]
};