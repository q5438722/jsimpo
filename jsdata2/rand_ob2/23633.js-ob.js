const _0xe443 = [
    'es.map',
    'getModulesPluginNames',
    'modules\x20is\x20set\x20to\x20false',
    'returns\x20only\x20syntax\x20plugins',
    'syntax-dynamic-import',
    'syntax-export-namespace-from',
    'modules\x20is\x20not\x20set\x20to\x20false',
    'ESMs\x20should\x20not\x20be\x20transformed',
    'ESMs\x20should\x20be\x20transformed',
    'dynamic\x20imports\x20should\x20not\x20be\x20transformed',
    'returns\x20specified\x20modules\x20transform\x20and\x20syntax-dynamic-import',
    'commonjs',
    'transform-modules-commonjs',
    'returns\x20specified\x20modules\x20transform\x20and\x20proposal-dynamic-import',
    'systemjs',
    'proposal-dynamic-import',
    'export\x20namespace\x20from\x20should\x20be\x20transformed',
    'works',
    'transform-modules-systemjs',
    'proposal-export-namespace-from',
    'getPolyfillPlugins',
    'useBuiltIns\x20is\x20false',
    'returns\x20no\x20polyfill\x20plugins',
    'assign',
    'corejs\x20is\x20not\x20given',
    'useBuiltIns\x20is\x20set\x20to\x20usage',
    'usage',
    'length',
    'toBe',
    'returns\x20an\x20array\x20with\x20core\x20js\x203\x20usage\x20plugin',
    'regenerator\x20is\x20set\x20to\x20true',
    'returns\x20an\x20array\x20with\x20core\x20js\x203\x20usage\x20plugin\x20and\x20add\x20regenerator\x20usage\x20plugin',
    'using\x20corejs\x202',
    'returns\x20an\x20array\x20with\x20core\x20js\x202\x20entry\x20plugin',
    'entry',
    'using\x20corejs\x203',
    'returns\x20an\x20array\x20with\x20core\x20js\x203\x20entry\x20plugin',
    'regenerator\x20is\x20set\x20to\x20false',
    'available-plugins\x20is\x20in\x20sync\x20with\x20@babel/compat-data',
    'keys',
    'sort',
    '381098yvcPaq',
    '2fyNjQd',
    '151082tcbAJQ',
    '18MLSEVs',
    '16861ogjGBF',
    '250yAlexM',
    '91bPUpba',
    '816YjpDwc',
    '243Nwqjha',
    '37088aaBPqI',
    '23qrYNkb',
    '1780607QEIZwZ',
    'default',
    'babel-preset-env',
    'should\x20return\x20in\x20transforms\x20array',
    'transform-arrow-functions',
    'toEqual'
];
const _0x567ea = _0x59c6;
(function (_0x611482, _0x251fb1) {
    const _0x19fa1 = _0x59c6;
    while (!![]) {
        try {
            const _0x8e6eeb = parseInt(_0x19fa1(0x191)) * parseInt(_0x19fa1(0x192)) + parseInt(_0x19fa1(0x193)) + -parseInt(_0x19fa1(0x194)) * -parseInt(_0x19fa1(0x195)) + parseInt(_0x19fa1(0x196)) * -parseInt(_0x19fa1(0x197)) + -parseInt(_0x19fa1(0x198)) * -parseInt(_0x19fa1(0x199)) + -parseInt(_0x19fa1(0x19a)) * -parseInt(_0x19fa1(0x19b)) + -parseInt(_0x19fa1(0x19c));
            if (_0x8e6eeb === _0x251fb1)
                break;
            else
                _0x611482['push'](_0x611482['shift']());
        } catch (_0x3db7f2) {
            _0x611482['push'](_0x611482['shift']());
        }
    }
}(_0xe443, 0x7175b));
import _0x2f31be from '@babel/compat-data/plugins';
import * as _0x40505d from '../lib/index';
import _0x424006 from '../lib/polyfills/regenerator';
import _0xb70f88 from '../lib/polyfills/babel-polyfill';
import _0x555261 from '../lib/module-transformations';
import _0x1a4f8d from '../lib/available-plugins';
import _0x2db2e7 from 'babel-plugin-polyfill-corejs2';
import _0x1be091 from 'babel-plugin-polyfill-corejs3';
import _0x3e231a from 'babel-plugin-polyfill-regenerator';
function _0x59c6(_0x4391a4, _0x19742c) {
    return _0x59c6 = function (_0xe443cb, _0x59c63a) {
        _0xe443cb = _0xe443cb - 0x191;
        let _0x577639 = _0xe443[_0xe443cb];
        return _0x577639;
    }, _0x59c6(_0x4391a4, _0x19742c);
}
const pluginCoreJS2 = _0x2db2e7[_0x567ea(0x19d)], pluginCoreJS3 = _0x1be091[_0x567ea(0x19d)], pluginRegenerator = _0x3e231a[_0x567ea(0x19d)];
describe(_0x567ea(0x19e), () => {
    const _0xc06977 = _0x567ea;
    describe('transformIncludesAndExcludes', () => {
        const _0x2f7ca7 = _0x59c6;
        it(_0x2f7ca7(0x19f), () => {
            const _0x4fc610 = _0x2f7ca7;
            expect(_0x40505d['transformIncludesAndExcludes']([_0x4fc610(0x1a0)]))[_0x4fc610(0x1a1)]({
                'all': [_0x4fc610(0x1a0)],
                'plugins': new Set([_0x4fc610(0x1a0)]),
                'builtIns': new Set()
            });
        }), it('should\x20return\x20in\x20built-ins\x20array', () => {
            const _0xde492d = _0x2f7ca7;
            expect(_0x40505d['transformIncludesAndExcludes']([_0xde492d(0x1a2)]))[_0xde492d(0x1a1)]({
                'all': [_0xde492d(0x1a2)],
                'plugins': new Set(),
                'builtIns': new Set([_0xde492d(0x1a2)])
            });
        });
    }), describe(_0xc06977(0x1a3), () => {
        const _0x42202c = _0xc06977;
        describe(_0x42202c(0x1a4), () => {
            const _0x25c250 = _0x42202c;
            it(_0x25c250(0x1a5), () => {
                const _0xe18070 = _0x25c250;
                expect(_0x40505d[_0xe18070(0x1a3)]({
                    'modules': ![],
                    'transformations': _0x555261,
                    'shouldTransformESM': ![],
                    'shouldTransformDynamicImport': ![],
                    'shouldTransformExportNamespaceFrom': ![]
                }))[_0xe18070(0x1a1)]([
                    _0xe18070(0x1a6),
                    _0xe18070(0x1a7)
                ]);
            });
        }), describe(_0x42202c(0x1a8), () => {
            const _0x5a2042 = _0x42202c;
            describe(_0x5a2042(0x1a9), () => {
                it('returns\x20syntax\x20plugins', () => {
                    const _0x426495 = _0x59c6;
                    expect(_0x40505d[_0x426495(0x1a3)]({
                        'modules': 'commonjs',
                        'transformations': _0x555261,
                        'shouldTransformESM': ![],
                        'shouldTransformDynamicImport': ![],
                        'shouldTransformExportNamespaceFrom': ![]
                    }))[_0x426495(0x1a1)]([
                        _0x426495(0x1a6),
                        _0x426495(0x1a7)
                    ]);
                });
            }), describe(_0x5a2042(0x1aa), () => {
                const _0x482c0c = _0x5a2042;
                describe(_0x482c0c(0x1ab), () => {
                    const _0x53244c = _0x482c0c;
                    it(_0x53244c(0x1ac), () => {
                        const _0x3ae8f3 = _0x53244c;
                        expect(_0x40505d[_0x3ae8f3(0x1a3)]({
                            'modules': _0x3ae8f3(0x1ad),
                            'transformations': _0x555261,
                            'shouldTransformESM': !![],
                            'shouldTransformDynamicImport': ![],
                            'shouldTransformExportNamespaceFrom': ![]
                        }))[_0x3ae8f3(0x1a1)]([
                            _0x3ae8f3(0x1ae),
                            'syntax-dynamic-import',
                            _0x3ae8f3(0x1a7)
                        ]);
                    });
                }), describe('dynamic\x20imports\x20should\x20be\x20transformed', () => {
                    const _0x13c05d = _0x482c0c;
                    it(_0x13c05d(0x1af), () => {
                        const _0x3cdb08 = _0x13c05d;
                        expect(_0x40505d['getModulesPluginNames']({
                            'modules': _0x3cdb08(0x1b0),
                            'transformations': _0x555261,
                            'shouldTransformESM': !![],
                            'shouldTransformDynamicImport': !![],
                            'shouldTransformExportNamespaceFrom': ![]
                        }))[_0x3cdb08(0x1a1)]([
                            'transform-modules-systemjs',
                            _0x3cdb08(0x1b1),
                            'syntax-export-namespace-from'
                        ]);
                    }), describe(_0x13c05d(0x1b2), () => {
                        const _0xfedfd9 = _0x13c05d;
                        it(_0xfedfd9(0x1b3), () => {
                            const _0x8a896f = _0xfedfd9;
                            expect(_0x40505d[_0x8a896f(0x1a3)]({
                                'modules': _0x8a896f(0x1b0),
                                'transformations': _0x555261,
                                'shouldTransformESM': !![],
                                'shouldTransformDynamicImport': !![],
                                'shouldTransformExportNamespaceFrom': !![]
                            }))['toEqual']([
                                _0x8a896f(0x1b4),
                                _0x8a896f(0x1b1),
                                _0x8a896f(0x1b5)
                            ]);
                        });
                    });
                });
            });
        });
    }), describe(_0xc06977(0x1b6), () => {
        const _0x28dac0 = _0xc06977, _0x51f648 = {
                'polyfillTargets': [],
                'include': new Set(),
                'exclude': new Set(),
                'proposals': ![],
                'shippedProposals': ![],
                'debug': ![]
            };
        describe(_0x28dac0(0x1b7), () => {
            const _0x2e918d = _0x28dac0;
            it(_0x2e918d(0x1b8), () => {
                const _0x3513b0 = _0x2e918d;
                expect(_0x40505d[_0x3513b0(0x1b6)](Object[_0x3513b0(0x1b9)]({
                    'useBuiltIns': ![],
                    'corejs': ![],
                    'regenerator': ![]
                }, _0x51f648)))['toEqual']([]);
            });
        }), describe('useBuiltIns\x20is\x20not\x20false', () => {
            const _0x186b00 = _0x28dac0;
            describe(_0x186b00(0x1ba), () => {
                it('returns\x20no\x20polyfill\x20plugins', () => {
                    const _0x375126 = _0x59c6;
                    expect(_0x40505d['getPolyfillPlugins'](Object[_0x375126(0x1b9)]({
                        'useBuiltIns': 'usage',
                        'corejs': ![],
                        'regenerator': ![]
                    }, _0x51f648)))[_0x375126(0x1a1)]([]);
                });
            }), describe(_0x186b00(0x1bb), () => {
                describe('using\x20corejs\x202', () => {
                    it('returns\x20an\x20array\x20with\x20core\x20js\x202\x20usage\x20plugin', () => {
                        const _0x108d9c = _0x59c6, _0x3746bf = _0x40505d[_0x108d9c(0x1b6)](Object['assign']({
                                'useBuiltIns': _0x108d9c(0x1bc),
                                'corejs': { 'major': 0x2 },
                                'regenerator': ![]
                            }, _0x51f648));
                        expect(_0x3746bf[_0x108d9c(0x1bd)])[_0x108d9c(0x1be)](0x2), expect(_0x3746bf[0x0][0x0])[_0x108d9c(0x1a1)](pluginCoreJS2), expect(_0x3746bf[0x1][0x0])[_0x108d9c(0x1a1)](_0xb70f88);
                    });
                }), describe('using\x20corejs\x203', () => {
                    const _0x25bf94 = _0x59c6;
                    describe('regenerator\x20is\x20set\x20to\x20false', () => {
                        const _0x1d6db3 = _0x59c6;
                        it(_0x1d6db3(0x1bf), () => {
                            const _0x31705a = _0x1d6db3, _0x200fae = _0x40505d[_0x31705a(0x1b6)](Object[_0x31705a(0x1b9)]({
                                    'useBuiltIns': 'usage',
                                    'corejs': { 'major': 0x3 },
                                    'regenerator': ![]
                                }, _0x51f648));
                            expect(_0x200fae[_0x31705a(0x1bd)])[_0x31705a(0x1be)](0x2), expect(_0x200fae[0x0][0x0])[_0x31705a(0x1a1)](pluginCoreJS3), expect(_0x200fae[0x1][0x0])['toEqual'](_0xb70f88);
                        });
                    }), describe(_0x25bf94(0x1c0), () => {
                        const _0x92843b = _0x25bf94;
                        it(_0x92843b(0x1c1), () => {
                            const _0x599a32 = _0x92843b, _0x543665 = _0x40505d[_0x599a32(0x1b6)](Object['assign']({
                                    'useBuiltIns': _0x599a32(0x1bc),
                                    'corejs': { 'major': 0x3 },
                                    'regenerator': !![]
                                }, _0x51f648));
                            expect(_0x543665[_0x599a32(0x1bd)])[_0x599a32(0x1be)](0x3), expect(_0x543665[0x0][0x0])['toEqual'](pluginCoreJS3), expect(_0x543665[0x1][0x0])[_0x599a32(0x1a1)](_0xb70f88), expect(_0x543665[0x2][0x0])[_0x599a32(0x1a1)](pluginRegenerator);
                        });
                    });
                });
            }), describe('useBuiltIns\x20is\x20set\x20to\x20entry', () => {
                const _0x3f5ee8 = _0x186b00;
                describe(_0x3f5ee8(0x1c2), () => {
                    const _0x5a3c96 = _0x3f5ee8;
                    it(_0x5a3c96(0x1c3), () => {
                        const _0x317c15 = _0x5a3c96, _0x26bf32 = _0x40505d[_0x317c15(0x1b6)](Object[_0x317c15(0x1b9)]({
                                'useBuiltIns': _0x317c15(0x1c4),
                                'corejs': { 'major': 0x2 },
                                'regenerator': !![]
                            }, _0x51f648));
                        expect(_0x26bf32[_0x317c15(0x1bd)])['toBe'](0x2), expect(_0x26bf32[0x0][0x0])[_0x317c15(0x1a1)](_0xb70f88), expect(_0x26bf32[0x1][0x0])[_0x317c15(0x1a1)](pluginCoreJS2);
                    });
                }), describe(_0x3f5ee8(0x1c5), () => {
                    const _0x724701 = _0x3f5ee8;
                    describe('regenerator\x20is\x20set\x20to\x20true', () => {
                        const _0x1f3b14 = _0x59c6;
                        it(_0x1f3b14(0x1c6), () => {
                            const _0x203443 = _0x1f3b14, _0x5261fd = _0x40505d[_0x203443(0x1b6)](Object[_0x203443(0x1b9)]({
                                    'useBuiltIns': 'entry',
                                    'corejs': { 'major': 0x3 },
                                    'regenerator': !![]
                                }, _0x51f648));
                            expect(_0x5261fd[_0x203443(0x1bd)])[_0x203443(0x1be)](0x2), expect(_0x5261fd[0x0][0x0])[_0x203443(0x1a1)](pluginCoreJS3), expect(_0x5261fd[0x1][0x0])['toEqual'](_0xb70f88);
                        });
                    }), describe(_0x724701(0x1c7), () => {
                        it('returns\x20an\x20array\x20with\x20core\x20js\x203\x20entry\x20plugin\x20and\x20remove\x20regenerator\x20entry\x20plugin', () => {
                            const _0x3b78b4 = _0x59c6, _0x24062d = _0x40505d[_0x3b78b4(0x1b6)](Object['assign']({
                                    'useBuiltIns': _0x3b78b4(0x1c4),
                                    'corejs': { 'major': 0x3 },
                                    'regenerator': ![]
                                }, _0x51f648));
                            expect(_0x24062d['length'])[_0x3b78b4(0x1be)](0x3), expect(_0x24062d[0x0][0x0])[_0x3b78b4(0x1a1)](pluginCoreJS3), expect(_0x24062d[0x1][0x0])[_0x3b78b4(0x1a1)](_0xb70f88), expect(_0x24062d[0x2][0x0])[_0x3b78b4(0x1a1)](_0x424006);
                        });
                    });
                });
            });
        });
    }), it(_0xc06977(0x1c8), () => {
        const _0x3bc79d = _0xc06977, _0x8ad54d = Object[_0x3bc79d(0x1c9)](_0x1a4f8d)['sort'](), _0x4d824e = Object['keys'](_0x2f31be)[_0x3bc79d(0x1ca)]();
        expect(_0x8ad54d)['toEqual'](expect['arrayContaining'](_0x4d824e));
    });
});
