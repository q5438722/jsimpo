const _0x245a = [
    'afterSeal',
    'testcase',
    'chunks',
    'name',
    'getChunkModulesIterable',
    'add',
    'dvsZZ',
    'sUXEO',
    'not',
    'xlmOl',
    'page1',
    'BPLcl',
    'ridJy',
    'page3',
    'toContain',
    'hooks',
    '167009yHrPqQ',
    '1640170DsxYsh',
    '536698UMwHfk',
    '203007DkyqHh',
    '641083wGsaWh',
    '2SPbKwn',
    '254457hvTgEE',
    '6BpqzmU',
    '1460852gOgMDq',
    'exports',
    'other-vendors',
    'app',
    './page2.js',
    './page3.js',
    'react',
    './other-vendors',
    'resolve',
    './app.js',
    'pXUkM',
    'EtLEE',
    'SywVL',
    'KQOwy',
    'NAhrM',
    'rHuOM',
    'kRFHt',
    'prop-types',
    'single',
    '[name].js',
    'react-vendors'
];
const _0x587d2a = _0x2074;
function _0x2074(_0x3bf0a3, _0x170e87) {
    return _0x2074 = function (_0x4cd7f2, _0x2268ee) {
        _0x4cd7f2 = _0x4cd7f2 - (-0x22c + 0x1e8d + -0x1ab2);
        let _0x3878dd = _0x245a[_0x4cd7f2];
        return _0x3878dd;
    }, _0x2074(_0x3bf0a3, _0x170e87);
}
(function (_0x260e5b, _0x4ca58d) {
    const _0x49cf5e = _0x2074;
    while (!![]) {
        try {
            const _0x211799 = -parseInt(_0x49cf5e(0x1af)) + parseInt(_0x49cf5e(0x1b0)) + parseInt(_0x49cf5e(0x1b1)) + parseInt(_0x49cf5e(0x1b2)) + -parseInt(_0x49cf5e(0x1b3)) * parseInt(_0x49cf5e(0x1b4)) + parseInt(_0x49cf5e(0x1b5)) * -parseInt(_0x49cf5e(0x1b6)) + parseInt(_0x49cf5e(0x1b7));
            if (_0x211799 === _0x4ca58d)
                break;
            else
                _0x260e5b['push'](_0x260e5b['shift']());
        } catch (_0x41cf40) {
            _0x260e5b['push'](_0x260e5b['shift']());
        }
    }
}(_0x245a, -0x6a * -0x22cd + -0x47eb9 + 0x167 * 0x257), module[_0x587d2a(0x1b8)] = {
    'entry'() {
        const _0x52cd00 = _0x587d2a, _0x3b3864 = {
                'pXUkM': _0x52cd00(0x1b9),
                'SywVL': _0x52cd00(0x1ba),
                'KQOwy': 'react-vendors',
                'EtLEE': _0x52cd00(0x1bb),
                'NAhrM': _0x52cd00(0x1bc),
                'rHuOM': _0x52cd00(0x1bd),
                'kRFHt': 'react-dom',
                'SjbyT': _0x52cd00(0x1be)
            };
        return Promise[_0x52cd00(0x1bf)]({
            'app': {
                'import': _0x52cd00(0x1c0),
                'dependOn': [_0x3b3864[_0x52cd00(0x1c1)]]
            },
            'page1': {
                'import': './page1.js',
                'dependOn': [
                    _0x3b3864['SywVL'],
                    _0x3b3864['KQOwy']
                ]
            },
            'page2': {
                'import': _0x3b3864[_0x52cd00(0x1c2)],
                'dependOn': [
                    _0x3b3864[_0x52cd00(0x1c3)],
                    _0x3b3864[_0x52cd00(0x1c4)]
                ]
            },
            'page3': {
                'import': _0x3b3864[_0x52cd00(0x1c5)],
                'dependOn': [_0x3b3864[_0x52cd00(0x1c3)]]
            },
            'react-vendors': [
                _0x3b3864[_0x52cd00(0x1c6)],
                _0x3b3864[_0x52cd00(0x1c7)],
                _0x52cd00(0x1c8)
            ],
            'other-vendors': _0x3b3864['SjbyT']
        });
    },
    'target': 'web',
    'optimization': { 'runtimeChunk': _0x587d2a(0x1c9) },
    'output': { 'filename': _0x587d2a(0x1ca) },
    'plugins': [function () {
            const _0xb05979 = _0x587d2a, _0x65a7f2 = {
                    'dvsZZ': 'other-vendors',
                    'sUXEO': function (_0x360597, _0x19d716) {
                        return _0x360597(_0x19d716);
                    },
                    'xlmOl': _0xb05979(0x1cb),
                    'ridJy': _0xb05979(0x1ba),
                    'BPLcl': function (_0x255a2d, _0x3b3541) {
                        return _0x255a2d(_0x3b3541);
                    }
                }, _0x59a004 = _0x4e833b => {
                    const _0x2e4a2f = _0xb05979;
                    _0x4e833b['hooks'][_0x2e4a2f(0x1cc)]['tap'](_0x2e4a2f(0x1cd), () => {
                        const _0x14d1d1 = _0x2e4a2f, {chunkGraph: _0x13b8e2} = _0x4e833b, _0x164121 = {};
                        for (const _0x391e4a of _0x4e833b[_0x14d1d1(0x1ce)]) {
                            _0x164121[_0x391e4a[_0x14d1d1(0x1cf)]] = new Set();
                            for (const _0x57e9ee of _0x13b8e2[_0x14d1d1(0x1d0)](_0x391e4a)) {
                                _0x164121[_0x391e4a[_0x14d1d1(0x1cf)]][_0x14d1d1(0x1d1)](_0x57e9ee['identifier']());
                            }
                        }
                        for (const _0x5ad20c of _0x164121[_0x65a7f2[_0x14d1d1(0x1d2)]]) {
                            _0x65a7f2[_0x14d1d1(0x1d3)](expect, [..._0x164121[_0x14d1d1(0x1ba)]])[_0x14d1d1(0x1d4)]['toContain'](_0x5ad20c);
                        }
                        for (const _0x4eda4b of [
                                ..._0x164121[_0x65a7f2[_0x14d1d1(0x1d2)]],
                                ..._0x164121[_0x65a7f2[_0x14d1d1(0x1d5)]],
                                ..._0x164121[_0x65a7f2['ridJy']]
                            ]) {
                            _0x65a7f2['sUXEO'](expect, _0x164121[_0x14d1d1(0x1d6)])[_0x14d1d1(0x1d4)]['toContain'](_0x4eda4b), _0x65a7f2[_0x14d1d1(0x1d7)](expect, _0x164121['page2'])[_0x14d1d1(0x1d4)]['toContain'](_0x4eda4b);
                        }
                        for (const _0x171a3d of [
                                ..._0x164121[_0x65a7f2[_0x14d1d1(0x1d2)]],
                                ..._0x164121[_0x65a7f2[_0x14d1d1(0x1d8)]]
                            ]) {
                            _0x65a7f2['BPLcl'](expect, [..._0x164121[_0x14d1d1(0x1d9)]])[_0x14d1d1(0x1d4)][_0x14d1d1(0x1da)](_0x171a3d);
                        }
                    });
                };
            this[_0xb05979(0x1db)]['compilation']['tap'](_0xb05979(0x1cd), _0x59a004);
        }]
});
