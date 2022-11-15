module['exports'] = {
    'entry'() {
        const _0x2bda39 = {
            'RiqmS': './app.js',
            'SsGpq': 'other-vendors',
            'Yzpvj': './page1.js',
            'inSqD': 'app',
            'cNQOp': 'react-vendors',
            'HXVJx': './page2.js',
            'SjRJZ': './page3.js',
            'KBYmY': 'react',
            'DllIV': 'react-dom',
            'FZZPO': 'prop-types',
            'JRyKY': './other-vendors'
        };
        return Promise['resolve']({
            'app': {
                'import': _0x2bda39['RiqmS'],
                'dependOn': [_0x2bda39['SsGpq']]
            },
            'page1': {
                'import': _0x2bda39['Yzpvj'],
                'dependOn': [
                    _0x2bda39['inSqD'],
                    _0x2bda39['cNQOp']
                ]
            },
            'page2': {
                'import': _0x2bda39['HXVJx'],
                'dependOn': [
                    _0x2bda39['inSqD'],
                    _0x2bda39['cNQOp']
                ]
            },
            'page3': {
                'import': _0x2bda39['SjRJZ'],
                'dependOn': [_0x2bda39['inSqD']]
            },
            'react-vendors': [
                _0x2bda39['KBYmY'],
                _0x2bda39['DllIV'],
                _0x2bda39['FZZPO']
            ],
            'other-vendors': _0x2bda39['JRyKY']
        });
    },
    'target': 'web',
    'optimization': { 'runtimeChunk': 'single' },
    'output': { 'filename': '[name].js' },
    'plugins': [function () {
            const _0x553bb9 = {
                    'Hbpcc': 'other-vendors',
                    'rYxrM': function (_0x157deb, _0x53e273) {
                        return _0x157deb(_0x53e273);
                    },
                    'gStmR': 'react-vendors',
                    'BNhhr': 'app',
                    'TmHVw': function (_0x401cbf, _0x3454c3) {
                        return _0x401cbf(_0x3454c3);
                    },
                    'ttruy': 'testcase'
                }, _0xa2fce6 = _0x2df0f5 => {
                    _0x2df0f5['hooks']['afterSeal']['tap'](_0x553bb9['ttruy'], () => {
                        const {chunkGraph: _0x22742f} = _0x2df0f5, _0x377c85 = {};
                        for (const _0x4ec61a of _0x2df0f5['chunks']) {
                            _0x377c85[_0x4ec61a['name']] = new Set();
                            for (const _0x4d5f6f of _0x22742f['getChunkModulesIterable'](_0x4ec61a)) {
                                _0x377c85[_0x4ec61a['name']]['add'](_0x4d5f6f['identifier']());
                            }
                        }
                        for (const _0x4b90b7 of _0x377c85[_0x553bb9['Hbpcc']]) {
                            _0x553bb9['rYxrM'](expect, [..._0x377c85['app']])['not']['toContain'](_0x4b90b7);
                        }
                        for (const _0xb8c662 of [
                                ..._0x377c85[_0x553bb9['Hbpcc']],
                                ..._0x377c85[_0x553bb9['gStmR']],
                                ..._0x377c85[_0x553bb9['BNhhr']]
                            ]) {
                            _0x553bb9['TmHVw'](expect, _0x377c85['page1'])['not']['toContain'](_0xb8c662), _0x553bb9['TmHVw'](expect, _0x377c85['page2'])['not']['toContain'](_0xb8c662);
                        }
                        for (const _0x5067e2 of [
                                ..._0x377c85[_0x553bb9['Hbpcc']],
                                ..._0x377c85[_0x553bb9['BNhhr']]
                            ]) {
                            _0x553bb9['TmHVw'](expect, [..._0x377c85['page3']])['not']['toContain'](_0x5067e2);
                        }
                    });
                };
            this['hooks']['compilation']['tap'](_0x553bb9['ttruy'], _0xa2fce6);
        }]
};
