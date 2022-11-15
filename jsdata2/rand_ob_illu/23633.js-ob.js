const _0x17ab = ['NBzUo', 'useBuiltIns is false', 'mKxKR', 'getPolyfillPlugins', 'ANTNz', 'sLCRe', 'UeVaw', 'MVWdF', 'rvUgn', 'bUpvH', 'DupkD', 'assign', 'OZeBJ', 'KnLnY', 'GrNdf', 'jgWyY', 'uheXl', 'XbRgA', 'bODOR', 'AIlRd', 'SWPaq', 'MyJCK', 'bUFdQ', 'length', 'TmpHL', 'fljvf', 'vRmDR', 'regenerator is set to false', 'returns an array with core js 3 usage plugin', 'qxFBj', 'uCAhp', 'Ifbxx', 'returns an array with core js 3 usage plugin and add regenerator usage plugin', 'DKYZM', 'toBe', 'gdSlw', 'nDxeu', 'RmpYq', 'SQnxQ', 'dvveg', 'SezJW', 'KLTZV', 'returns an array with core js 2 entry plugin', 'IxdgQ', 'IeNsa', 'zYaba', 'qVOKX', 'rnVSH', 'EiYku', 'jSnbp', 'kwYcn', 'mPwzL', 'LSvYL', 'dENji', 'WjeWg', 'AnUVh', 'tEepu', 'tAmRb', 'VvOyo', 'jOgSR', 'keys', 'sort', '98564GdEwWm', '3557cwGsIQ', '313JLafkh', '2rumOVH', '114854jmNbYl', '1184146qufxHW', '1LMxGld', '26089VcXJAd', '46PIGWyV', '436258wKWvHT', '1665073udfHdL', '2gkwjvV', 'default', 'transform-arrow-functions', 'es.map', 'should return in built-ins array', 'systemjs', 'proposal-dynamic-import', 'ESMs should be transformed', 'modules is set to false', 'modules is not set to false', 'usage', 'returns no polyfill plugins', 'corejs is not given', 'useBuiltIns is set to usage', 'useBuiltIns is set to entry', 'returns an array with core js 2 usage plugin', 'regenerator is set to true', 'using corejs 3', 'useBuiltIns is not false', 'SrOke', 'VGxJC', 'RiNtF', 'wzmlm', 'AyRYo', 'transformIncludesAndExcludes', 'Lhmba', 'toEqual', 'Ulqfl', 'GSufA', 'mMIuG', 'uNgnH', 'getModulesPluginNames', 'DXMAP', 'proposal-export-namespace-from', 'SZbLV', 'jIytE', 'hSiUI', 'xSAtq', 'syntax-export-namespace-from', 'FzyPf', 'zuNiP', 'IJOOy', 'xeiSk', 'DfKTI', 'ecCtN', 'jeuhP', 'sFOzr', 'dHoFA', 'EyLik', 'fUuPW', 'TkQsG', 'tKBux', 'TQGkJ', 'eqSic', 'GvymV', 'ybdYU', 'commonjs', 'hStnm', 'ffrdy', 'jgnnk', 'ToaUI', 'XMMEN', 'dZSSG', 'returns specified modules transform and syntax-dynamic-import', 'UVmsV', 'transform-modules-systemjs', 'dynamic imports should not be transformed', 'qHzXL', 'NJAFD', 'nJbhD', 'VQPmz', 'NumOA', 'yJSkZ', 'QxnzA', 'VOpkm', 'gNpzI', 'FilEU', 'YoYPP', 'uVgaK', 'xWDEt', 'foVOG', 'works', 'mitTM', 'ZllzF', 'NnEkb', 'BEKfM', 'EIIsT', 'aPxtJ', 'PfsCF', 'using corejs 2', 'MMsXR', 'entry', 'DTnas'];
const _0x3f3eb5 = _0x1b91;

(function (_0x476c21, _0x1f0c76) {
    const _0x389838 = _0x1b91;

    while (true) {
        try {
            const _0x33539e = parseInt(_0x389838(0xef)) + -parseInt(_0x389838(0xf0)) * -parseInt(_0x389838(0xf1)) + parseInt(_0x389838(0xf2)) * parseInt(_0x389838(0xf3)) + -parseInt(_0x389838(0xf4)) * -parseInt(_0x389838(0xf5)) + parseInt(_0x389838(0xf6)) * parseInt(_0x389838(0xf7)) + parseInt(_0x389838(0xf8)) + parseInt(_0x389838(0xf9)) * -parseInt(_0x389838(0xfa));

            if (_0x33539e === _0x1f0c76) break;else _0x476c21.push(_0x476c21.shift());
        } catch (_0x1decc5) {
            _0x476c21.push(_0x476c21.shift());
        }
    }
})(_0x17ab, 931965);
import _0x380de9 from '@babel/compat-data/plugins';
import * as _0x1d1968 from '../lib/index';
import _0x5c0ad8 from '../lib/polyfills/regenerator';
import _0x324797 from '../lib/polyfills/babel-polyfill';
function _0x1b91(_0xb381fb, _0x9e5d7) {
    return _0x1b91 = function (_0x407bf3, _0x7ba182) {
        _0x407bf3 = _0x407bf3 - 239;
        const _0x5cac55 = _0x17ab[_0x407bf3];

        return _0x5cac55;
    }, _0x1b91(_0xb381fb, _0x9e5d7);
}
import _0x522b91 from '../lib/module-transformations';
import _0x24aec2 from '../lib/available-plugins';
import _0x4d95e0 from 'babel-plugin-polyfill-corejs2';
import _0x361afe from 'babel-plugin-polyfill-corejs3';
import _0x2905d9 from 'babel-plugin-polyfill-regenerator';

const pluginCoreJS2 = _0x4d95e0[_0x3f3eb5(0xfb)];

const pluginCoreJS3 = _0x361afe.default;

const pluginRegenerator = _0x2905d9[_0x3f3eb5(0xfb)];

describe('babel-preset-env', () => {
    const _0xd9fc0b = _0x3f3eb5;
    const _0x53177 = {
        'VGxJC': function (_0x59de11, _0x44d14d) {
            return _0x59de11(_0x44d14d);
        },
        'RiNtF': _0xd9fc0b(0xfc),
        'wzmlm': _0xd9fc0b(0xfd),
        'BeGNy': function (_0x40ff65, _0x25f7b7, _0x4dbbe5) {
            return _0x40ff65(_0x25f7b7, _0x4dbbe5);
        },
        'LpGLa': 'should return in transforms array',
        'Ulqfl': function (_0x206d15, _0x174f48, _0x3bd131) {
            return _0x206d15(_0x174f48, _0x3bd131);
        },
        'GSufA': _0xd9fc0b(0xfe),
        'xSAtq': 'syntax-dynamic-import',
        'reaEe': 'returns only syntax plugins',
        'Szfzf': _0xd9fc0b(0xff),
        'DXMAP': _0xd9fc0b(0x100),
        'SZbLV': 'returns specified modules transform and proposal-dynamic-import',
        'jIytE': 'export namespace from should be transformed',
        'hSiUI': 'transform-modules-commonjs',
        'FzyPf': 'dynamic imports should be transformed',
        'zuNiP': 'ESMs should not be transformed',
        'IJOOy': _0xd9fc0b(0x101),
        'xeiSk': _0xd9fc0b(0x102),
        'ecCtN': function (_0x46772d, _0x37c29a, _0x541d62) {
            return _0x46772d(_0x37c29a, _0x541d62);
        },
        'jeuhP': _0xd9fc0b(0x103),
        'UeVaw': _0xd9fc0b(0x104),
        'NnEkb': _0xd9fc0b(0x105),
        'BEKfM': function (_0x3917b5, _0x3f48f4) {
            return _0x3917b5(_0x3f48f4);
        },
        'MVWdF': function (_0x5dd58a, _0x4fce17, _0x70ef34) {
            return _0x5dd58a(_0x4fce17, _0x70ef34);
        },
        'rvUgn': function (_0x141bce, _0x3afb46, _0xcb6ac9) {
            return _0x141bce(_0x3afb46, _0xcb6ac9);
        },
        'bUpvH': _0xd9fc0b(0x106),
        'iFKmn': function (_0x54f4ec, _0x47e49b, _0x4c03d2) {
            return _0x54f4ec(_0x47e49b, _0x4c03d2);
        },
        'OZeBJ': _0xd9fc0b(0x107),
        'nDxeu': _0xd9fc0b(0x108),
        'EIIsT': _0xd9fc0b(0x109),
        'aPxtJ': function (_0x27253c, _0x1017c1, _0x4eea0b) {
            return _0x27253c(_0x1017c1, _0x4eea0b);
        },
        'PfsCF': _0xd9fc0b(0x10a),
        'MMsXR': _0xd9fc0b(0x10b),
        'DTnas': 'returns an array with core js 3 entry plugin',
        'NBzUo': 'returns an array with core js 3 entry plugin and remove regenerator entry plugin',
        'ANTNz': function (_0x255803, _0x3ce8ea, _0x242e7d) {
            return _0x255803(_0x3ce8ea, _0x242e7d);
        },
        'sLCRe': _0xd9fc0b(0x10c),
        'SrOke': function (_0x1852c7, _0x4a7c2a, _0x393954) {
            return _0x1852c7(_0x4a7c2a, _0x393954);
        },
        'QAbmD': 'transformIncludesAndExcludes',
        'uNgnH': function (_0x4387e3, _0x6be935, _0x4ad197) {
            return _0x4387e3(_0x6be935, _0x4ad197);
        },
        'eiHjF': 'getPolyfillPlugins',
        'jOgSR': function (_0x44d326, _0x49b9bd, _0x1919b7) {
            return _0x44d326(_0x49b9bd, _0x1919b7);
        }
    };

    _0x53177[_0xd9fc0b(0x10d)](describe, _0x53177.QAbmD, () => {
        const _0x1c5b5d = _0xd9fc0b;
        const _0x1727a1 = {
            'AyRYo': function (_0x59c48c, _0x5166ac) {
                const _0x806e36 = _0x1b91;

                return _0x53177[_0x806e36(0x10e)](_0x59c48c, _0x5166ac);
            },
            'Lhmba': _0x53177[_0x1c5b5d(0x10f)],
            'mMIuG': _0x53177[_0x1c5b5d(0x110)]
        };

        _0x53177.BeGNy(it, _0x53177.LpGLa, () => {
            const _0xcdc152 = _0x1c5b5d;

            _0x1727a1[_0xcdc152(0x111)](expect, _0x1d1968[_0xcdc152(0x112)]([_0x1727a1[_0xcdc152(0x113)]]))[_0xcdc152(0x114)]({
                'all': [_0x1727a1[_0xcdc152(0x113)]],
                'plugins': new Set(['transform-arrow-functions']),
                'builtIns': new Set()
            });
        }), _0x53177[_0x1c5b5d(0x115)](it, _0x53177[_0x1c5b5d(0x116)], () => {
            const _0x2b993c = _0x1c5b5d;

            expect(_0x1d1968[_0x2b993c(0x112)]([_0x2b993c(0xfd)]))[_0x2b993c(0x114)]({
                'all': ['es.map'],
                'plugins': new Set(),
                'builtIns': new Set([_0x1727a1[_0x2b993c(0x117)]])
            });
        });
    }), _0x53177[_0xd9fc0b(0x118)](describe, _0xd9fc0b(0x119), () => {
        const _0x5c8095 = _0xd9fc0b;
        const _0x38f1d1 = {
            'ybdYU': 'returns syntax plugins',
            'sFOzr': function (_0x20d6b8, _0x514587) {
                return _0x20d6b8(_0x514587);
            },
            'endol': _0x53177.Szfzf,
            'ryQCh': _0x53177[_0x5c8095(0x11a)],
            'dHoFA': _0x5c8095(0x11b),
            'EyLik': _0x53177[_0x5c8095(0x11c)],
            'fUuPW': function (_0x53b62a, _0x2b73f1, _0x46446d) {
                return _0x53b62a(_0x2b73f1, _0x46446d);
            },
            'TkQsG': _0x53177[_0x5c8095(0x11d)],
            'tKBux': _0x53177[_0x5c8095(0x11e)],
            'ijJPe': _0x53177[_0x5c8095(0x11f)],
            'TQGkJ': _0x5c8095(0x120),
            'eqSic': _0x53177[_0x5c8095(0x121)],
            'GvymV': _0x53177[_0x5c8095(0x122)],
            'ffrdy': _0x53177[_0x5c8095(0x123)]
        };

        _0x53177[_0x5c8095(0x115)](describe, _0x53177[_0x5c8095(0x124)], () => {
            const _0x1ea491 = _0x5c8095;
            const _0x911420 = { 'DfKTI': _0x53177[_0x1ea491(0x11f)] };

            _0x53177.Ulqfl(it, _0x53177.reaEe, () => {
                const _0x44f5b5 = _0x1ea491;

                expect(_0x1d1968[_0x44f5b5(0x119)]({
                    'modules': false,
                    'transformations': _0x522b91,
                    'shouldTransformESM': false,
                    'shouldTransformDynamicImport': false,
                    'shouldTransformExportNamespaceFrom': false
                }))[_0x44f5b5(0x114)]([_0x911420[_0x44f5b5(0x125)], 'syntax-export-namespace-from']);
            });
        }), _0x53177[_0x5c8095(0x126)](describe, _0x53177[_0x5c8095(0x127)], () => {
            const _0xd7b466 = _0x5c8095;
            const _0x1b2344 = {
                'VOpkm': function (_0x5521e5, _0x111bb9) {
                    const _0x4c1431 = _0x1b91;

                    return _0x38f1d1[_0x4c1431(0x128)](_0x5521e5, _0x111bb9);
                },
                'UVmsV': _0x38f1d1.endol,
                'gNpzI': _0x38f1d1.ryQCh,
                'eCrAB': _0x38f1d1[_0xd7b466(0x129)],
                'FilEU': _0x38f1d1[_0xd7b466(0x12a)],
                'aITaF': function (_0x28afd9, _0x569461, _0x20c9cd) {
                    const _0x3987c3 = _0xd7b466;

                    return _0x38f1d1[_0x3987c3(0x12b)](_0x28afd9, _0x569461, _0x20c9cd);
                },
                'xWDEt': _0x38f1d1[_0xd7b466(0x12c)],
                'jgnnk': function (_0x11d32c, _0x2e26f7) {
                    const _0x127baf = _0xd7b466;

                    return _0x38f1d1[_0x127baf(0x128)](_0x11d32c, _0x2e26f7);
                },
                'ToaUI': _0x38f1d1[_0xd7b466(0x12d)],
                'XMMEN': _0x38f1d1.ijJPe,
                'HwHVT': _0x38f1d1[_0xd7b466(0x12e)],
                'dZSSG': function (_0x579322, _0x2cd6c4, _0x567c76) {
                    const _0x44a9c3 = _0xd7b466;

                    return _0x38f1d1[_0x44a9c3(0x12b)](_0x579322, _0x2cd6c4, _0x567c76);
                },
                'yJSkZ': function (_0x51c4a1, _0x3c1470, _0x563e39) {
                    const _0x4354e2 = _0xd7b466;

                    return _0x38f1d1[_0x4354e2(0x12b)](_0x51c4a1, _0x3c1470, _0x563e39);
                },
                'QxnzA': _0x38f1d1[_0xd7b466(0x12f)]
            };

            _0x38f1d1[_0xd7b466(0x12b)](describe, _0x38f1d1[_0xd7b466(0x130)], () => {
                const _0x553faa = _0xd7b466;
                const _0xdec72e = {
                    'hStnm': 'syntax-dynamic-import',
                    'KwMPw': _0x553faa(0x120)
                };

                it(_0x38f1d1[_0x553faa(0x131)], () => {
                    const _0x1e2829 = _0x553faa;

                    expect(_0x1d1968.getModulesPluginNames({
                        'modules': _0x1e2829(0x132),
                        'transformations': _0x522b91,
                        'shouldTransformESM': false,
                        'shouldTransformDynamicImport': false,
                        'shouldTransformExportNamespaceFrom': false
                    }))[_0x1e2829(0x114)]([_0xdec72e[_0x1e2829(0x133)], _0xdec72e.KwMPw]);
                });
            }), describe(_0x38f1d1[_0xd7b466(0x134)], () => {
                const _0x9ce400 = _0xd7b466;
                const _0x4c357f = {
                    'nJbhD': function (_0x322c44, _0x3a74be) {
                        const _0x2396df = _0x1b91;

                        return _0x1b2344[_0x2396df(0x135)](_0x322c44, _0x3a74be);
                    },
                    'VQPmz': _0x9ce400(0x132),
                    'NumOA': _0x1b2344[_0x9ce400(0x136)],
                    'pKolG': _0x1b2344[_0x9ce400(0x137)],
                    'uRVmW': _0x1b2344.HwHVT,
                    'qHzXL': function (_0x322e97, _0x4cc3d6, _0x2a6b7f) {
                        const _0xa5dc31 = _0x9ce400;

                        return _0x1b2344[_0xa5dc31(0x138)](_0x322e97, _0x4cc3d6, _0x2a6b7f);
                    },
                    'NJAFD': _0x9ce400(0x139),
                    'lZCil': _0x1b2344[_0x9ce400(0x13a)],
                    'YoYPP': _0x9ce400(0x13b),
                    'uVgaK': _0x9ce400(0x100),
                    'foVOG': function (_0x9fd242, _0x31fef1, _0x423f17) {
                        const _0x1d7919 = _0x9ce400;

                        return _0x1b2344[_0x1d7919(0x138)](_0x9fd242, _0x31fef1, _0x423f17);
                    }
                };

                _0x1b2344[_0x9ce400(0x138)](describe, _0x9ce400(0x13c), () => {
                    const _0x221c6f = _0x9ce400;

                    _0x4c357f[_0x221c6f(0x13d)](it, _0x4c357f[_0x221c6f(0x13e)], () => {
                        const _0x3baa62 = _0x221c6f;

                        _0x4c357f[_0x3baa62(0x13f)](expect, _0x1d1968[_0x3baa62(0x119)]({
                            'modules': _0x4c357f[_0x3baa62(0x140)],
                            'transformations': _0x522b91,
                            'shouldTransformESM': true,
                            'shouldTransformDynamicImport': false,
                            'shouldTransformExportNamespaceFrom': false
                        }))[_0x3baa62(0x114)]([_0x4c357f[_0x3baa62(0x141)], _0x4c357f.pKolG, _0x4c357f.uRVmW]);
                    });
                }), _0x1b2344[_0x9ce400(0x142)](describe, _0x1b2344[_0x9ce400(0x143)], () => {
                    const _0x17afdd = _0x9ce400;
                    const _0x5d24a5 = {
                        'mitTM': function (_0x462066, _0x242c8f) {
                            const _0x1c71ba = _0x1b91;

                            return _0x1b2344[_0x1c71ba(0x144)](_0x462066, _0x242c8f);
                        },
                        'IcDIn': _0x1b2344[_0x17afdd(0x13a)],
                        'BcDmI': 'transform-modules-systemjs',
                        'PNyrj': _0x1b2344[_0x17afdd(0x145)],
                        'ZllzF': _0x1b2344.eCrAB
                    };

                    it(_0x1b2344[_0x17afdd(0x146)], () => {
                        const _0x16d414 = _0x17afdd;

                        _0x4c357f.nJbhD(expect, _0x1d1968[_0x16d414(0x119)]({
                            'modules': _0x4c357f.lZCil,
                            'transformations': _0x522b91,
                            'shouldTransformESM': true,
                            'shouldTransformDynamicImport': true,
                            'shouldTransformExportNamespaceFrom': false
                        }))[_0x16d414(0x114)]([_0x4c357f[_0x16d414(0x147)], _0x4c357f[_0x16d414(0x148)], _0x4c357f.uRVmW]);
                    }), _0x1b2344.aITaF(describe, _0x1b2344[_0x17afdd(0x149)], () => {
                        const _0x7457ce = _0x17afdd;

                        _0x4c357f[_0x7457ce(0x14a)](it, _0x7457ce(0x14b), () => {
                            const _0x3eca6c = _0x7457ce;

                            _0x5d24a5[_0x3eca6c(0x14c)](expect, _0x1d1968[_0x3eca6c(0x119)]({
                                'modules': _0x5d24a5.IcDIn,
                                'transformations': _0x522b91,
                                'shouldTransformESM': true,
                                'shouldTransformDynamicImport': true,
                                'shouldTransformExportNamespaceFrom': true
                            }))[_0x3eca6c(0x114)]([_0x5d24a5.BcDmI, _0x5d24a5.PNyrj, _0x5d24a5[_0x3eca6c(0x14d)]]);
                        });
                    });
                });
            });
        });
    }), _0x53177.uNgnH(describe, _0x53177.eiHjF, () => {
        const _0x2d9397 = _0xd9fc0b;
        const _0x56cedb = {
            'mKxKR': function (_0x42163f, _0x5a24f8) {
                return _0x42163f(_0x5a24f8);
            },
            'xAzIb': function (_0x420c27, _0x1aa096, _0x3c2417) {
                return _0x420c27(_0x1aa096, _0x3c2417);
            },
            'FkKyz': _0x53177[_0x2d9397(0x14e)],
            'KnLnY': function (_0x2b99a3, _0x1b5307) {
                return _0x53177.BEKfM(_0x2b99a3, _0x1b5307);
            },
            'jgWyY': function (_0x554b5b, _0x4ef5c1) {
                const _0x4e77e0 = _0x2d9397;

                return _0x53177[_0x4e77e0(0x14f)](_0x554b5b, _0x4ef5c1);
            },
            'GrNdf': _0x53177[_0x2d9397(0x150)],
            'uheXl': function (_0x452fee, _0x589be4, _0x106bb1) {
                const _0x35f27b = _0x2d9397;

                return _0x53177[_0x35f27b(0x151)](_0x452fee, _0x589be4, _0x106bb1);
            },
            'XbRgA': _0x53177[_0x2d9397(0x152)],
            'bODOR': _0x2d9397(0x153),
            'vRmDR': _0x53177[_0x2d9397(0x154)],
            'RmpYq': _0x2d9397(0x155),
            'YvWhR': function (_0x310d68, _0x3de5cf) {
                return _0x310d68(_0x3de5cf);
            },
            'SQnxQ': _0x53177[_0x2d9397(0x156)],
            'dvveg': _0x53177[_0x2d9397(0x157)],
            'SezJW': function (_0x442dc0, _0x45165f, _0x103433) {
                const _0x46eda4 = _0x2d9397;

                return _0x53177[_0x46eda4(0x151)](_0x442dc0, _0x45165f, _0x103433);
            }
        };
        const _0x480016 = {
            'polyfillTargets': [],
            'include': new Set(),
            'exclude': new Set(),
            'proposals': false,
            'shippedProposals': false,
            'debug': false
        };

        _0x53177[_0x2d9397(0x151)](describe, _0x2d9397(0x158), () => {
            _0x56cedb.xAzIb(it, _0x56cedb.FkKyz, () => {
                const _0x1d8a44 = _0x1b91;

                _0x56cedb[_0x1d8a44(0x159)](expect, _0x1d1968[_0x1d8a44(0x15a)](Object.assign({
                    'useBuiltIns': false,
                    'corejs': false,
                    'regenerator': false
                }, _0x480016)))[_0x1d8a44(0x114)]([]);
            });
        }), _0x53177[_0x2d9397(0x15b)](describe, _0x53177[_0x2d9397(0x15c)], () => {
            const _0x3bc7a7 = _0x2d9397;
            const _0x387435 = {
                'VlpNX': _0x53177[_0x3bc7a7(0x15d)],
                'DupkD': _0x53177[_0x3bc7a7(0x14e)],
                'KLTZV': function (_0x4ae81d, _0x1bf7e7) {
                    const _0x45c96b = _0x3bc7a7;

                    return _0x53177[_0x45c96b(0x14f)](_0x4ae81d, _0x1bf7e7);
                },
                'WNvHf': function (_0x3e12e5, _0x524f05, _0x1be646) {
                    const _0x340f7c = _0x3bc7a7;

                    return _0x53177[_0x340f7c(0x15e)](_0x3e12e5, _0x524f05, _0x1be646);
                }
            };

            _0x53177[_0x3bc7a7(0x15f)](describe, _0x53177[_0x3bc7a7(0x160)], () => {
                const _0x107e24 = _0x3bc7a7;

                it(_0x387435[_0x107e24(0x161)], () => {
                    const _0x4c82ea = _0x107e24;

                    expect(_0x1d1968[_0x4c82ea(0x15a)](Object[_0x4c82ea(0x162)]({
                        'useBuiltIns': _0x387435.VlpNX,
                        'corejs': false,
                        'regenerator': false
                    }, _0x480016)))[_0x4c82ea(0x114)]([]);
                });
            }), _0x53177.iFKmn(describe, _0x53177[_0x3bc7a7(0x163)], () => {
                const _0x2aad39 = _0x3bc7a7;
                const _0x7aa45b = {
                    'AIlRd': function (_0x24985d, _0x10a1c0) {
                        const _0x5e1653 = _0x1b91;

                        return _0x56cedb[_0x5e1653(0x164)](_0x24985d, _0x10a1c0);
                    },
                    'SWPaq': function (_0x448a6f, _0x225357) {
                        return _0x56cedb.jgWyY(_0x448a6f, _0x225357);
                    },
                    'MyJCK': function (_0x441839, _0x1230f9, _0x3a6575) {
                        return _0x56cedb.xAzIb(_0x441839, _0x1230f9, _0x3a6575);
                    },
                    'bUFdQ': _0x56cedb[_0x2aad39(0x165)],
                    'QshOv': function (_0x4b4632, _0x13e7ac) {
                        const _0x4465d8 = _0x2aad39;

                        return _0x56cedb[_0x4465d8(0x166)](_0x4b4632, _0x13e7ac);
                    },
                    'uCAhp': function (_0x1e051a, _0x1db311, _0x25cd7c) {
                        const _0x4e0747 = _0x2aad39;

                        return _0x56cedb[_0x4e0747(0x167)](_0x1e051a, _0x1db311, _0x25cd7c);
                    },
                    'Ifbxx': _0x56cedb[_0x2aad39(0x168)]
                };

                _0x56cedb[_0x2aad39(0x167)](describe, _0x56cedb[_0x2aad39(0x169)], () => {
                    const _0x52f159 = _0x2aad39;
                    const _0x11655c = {
                        'TmpHL': function (_0x5608c3, _0xcdacb6) {
                            const _0x489d87 = _0x1b91;

                            return _0x7aa45b[_0x489d87(0x16a)](_0x5608c3, _0xcdacb6);
                        },
                        'fljvf': function (_0x2ebd2c, _0x4fdab5) {
                            const _0x504b68 = _0x1b91;

                            return _0x7aa45b[_0x504b68(0x16b)](_0x2ebd2c, _0x4fdab5);
                        }
                    };

                    _0x7aa45b[_0x52f159(0x16c)](it, _0x7aa45b[_0x52f159(0x16d)], () => {
                        const _0x4a772b = _0x52f159;

                        const _0x4915b6 = _0x1d1968[_0x4a772b(0x15a)](Object[_0x4a772b(0x162)]({
                            'useBuiltIns': _0x4a772b(0x104),
                            'corejs': { 'major': 0x2 },
                            'regenerator': false
                        }, _0x480016));

                        expect(_0x4915b6[_0x4a772b(0x16e)]).toBe(2), _0x11655c[_0x4a772b(0x16f)](expect, _0x4915b6[0][0])[_0x4a772b(0x114)](pluginCoreJS2), _0x11655c[_0x4a772b(0x170)](expect, _0x4915b6[1][0])[_0x4a772b(0x114)](_0x324797);
                    });
                }), _0x56cedb[_0x2aad39(0x167)](describe, _0x56cedb[_0x2aad39(0x171)], () => {
                    const _0x1707eb = _0x2aad39;
                    const _0x58e519 = {
                        'qxFBj': function (_0x418103, _0x251af5) {
                            return _0x418103(_0x251af5);
                        },
                        'IvINM': _0x1707eb(0x104),
                        'DKYZM': function (_0x16cc7b, _0x154b21) {
                            return _0x7aa45b.QshOv(_0x16cc7b, _0x154b21);
                        },
                        'gdSlw': function (_0x3c4d43, _0x79e1ec) {
                            return _0x3c4d43(_0x79e1ec);
                        }
                    };

                    describe(_0x1707eb(0x172), () => {
                        const _0x563502 = _0x1707eb;

                        _0x7aa45b[_0x563502(0x16c)](it, _0x563502(0x173), () => {
                            const _0x594b3c = _0x563502;

                            const _0x4606ca = _0x1d1968[_0x594b3c(0x15a)](Object[_0x594b3c(0x162)]({
                                'useBuiltIns': _0x594b3c(0x104),
                                'corejs': { 'major': 0x3 },
                                'regenerator': false
                            }, _0x480016));

                            _0x58e519[_0x594b3c(0x174)](expect, _0x4606ca[_0x594b3c(0x16e)]).toBe(2), _0x58e519[_0x594b3c(0x174)](expect, _0x4606ca[0][0]).toEqual(pluginCoreJS3), expect(_0x4606ca[1][0])[_0x594b3c(0x114)](_0x324797);
                        });
                    }), _0x7aa45b[_0x1707eb(0x175)](describe, _0x7aa45b[_0x1707eb(0x176)], () => {
                        const _0x3750e7 = _0x1707eb;

                        it(_0x3750e7(0x177), () => {
                            const _0x1e0910 = _0x3750e7;

                            const _0xfebe38 = _0x1d1968[_0x1e0910(0x15a)](Object.assign({
                                'useBuiltIns': _0x58e519.IvINM,
                                'corejs': { 'major': 0x3 },
                                'regenerator': true
                            }, _0x480016));

                            _0x58e519[_0x1e0910(0x178)](expect, _0xfebe38[_0x1e0910(0x16e)])[_0x1e0910(0x179)](3), _0x58e519[_0x1e0910(0x178)](expect, _0xfebe38[0][0])[_0x1e0910(0x114)](pluginCoreJS3), _0x58e519[_0x1e0910(0x17a)](expect, _0xfebe38[1][0])[_0x1e0910(0x114)](_0x324797), expect(_0xfebe38[2][0])[_0x1e0910(0x114)](pluginRegenerator);
                        });
                    });
                });
            }), describe(_0x53177[_0x3bc7a7(0x17b)], () => {
                const _0x39a86e = _0x3bc7a7;
                const _0x26192d = {
                    'IeNsa': _0x56cedb[_0x39a86e(0x17c)],
                    'rnVSH': function (_0x8bb4a7, _0x5b5ef6) {
                        return _0x56cedb.YvWhR(_0x8bb4a7, _0x5b5ef6);
                    },
                    'zYaba': function (_0x2c2093, _0x8ac2e, _0x41a863) {
                        const _0x477257 = _0x39a86e;

                        return _0x56cedb[_0x477257(0x167)](_0x2c2093, _0x8ac2e, _0x41a863);
                    },
                    'qVOKX': _0x56cedb[_0x39a86e(0x17d)],
                    'EiYku': _0x56cedb[_0x39a86e(0x17e)],
                    'jSnbp': function (_0x4c1b07, _0xc548d0, _0x543595) {
                        return _0x4c1b07(_0xc548d0, _0x543595);
                    },
                    'obumV': _0x56cedb.XbRgA
                };

                _0x56cedb[_0x39a86e(0x17f)](describe, 'using corejs 2', () => {
                    const _0x4beea9 = _0x39a86e;
                    const _0x107320 = {
                        'IxdgQ': function (_0x1c2569, _0x5f2ef3) {
                            const _0x7250f4 = _0x1b91;

                            return _0x387435[_0x7250f4(0x180)](_0x1c2569, _0x5f2ef3);
                        }
                    };

                    _0x387435.WNvHf(it, _0x4beea9(0x181), () => {
                        const _0x21da6a = _0x4beea9;

                        const _0x19e9a4 = _0x1d1968.getPolyfillPlugins(Object[_0x21da6a(0x162)]({
                            'useBuiltIns': _0x21da6a(0x155),
                            'corejs': { 'major': 0x2 },
                            'regenerator': true
                        }, _0x480016));

                        _0x107320[_0x21da6a(0x182)](expect, _0x19e9a4.length)[_0x21da6a(0x179)](2), expect(_0x19e9a4[0][0]).toEqual(_0x324797), _0x107320.IxdgQ(expect, _0x19e9a4[1][0])[_0x21da6a(0x114)](pluginCoreJS2);
                    });
                }), _0x56cedb[_0x39a86e(0x17f)](describe, _0x56cedb[_0x39a86e(0x171)], () => {
                    const _0x370f37 = _0x39a86e;
                    const _0x5adbf4 = {
                        'LSvYL': _0x26192d[_0x370f37(0x183)],
                        'dENji': function (_0x3fcaa8, _0x22f8c8) {
                            return _0x3fcaa8(_0x22f8c8);
                        },
                        'WjeWg': function (_0x90e27f, _0x5daa36) {
                            return _0x26192d.rnVSH(_0x90e27f, _0x5daa36);
                        },
                        'kwYcn': function (_0x37e6ae, _0x397067, _0x1b5f76) {
                            const _0x1af6e4 = _0x370f37;

                            return _0x26192d[_0x1af6e4(0x184)](_0x37e6ae, _0x397067, _0x1b5f76);
                        },
                        'mPwzL': _0x26192d[_0x370f37(0x185)],
                        'PSIJx': function (_0x1c4371, _0x212993) {
                            const _0x378377 = _0x370f37;

                            return _0x26192d[_0x378377(0x186)](_0x1c4371, _0x212993);
                        },
                        'hBmZv': function (_0x2b5270, _0x3b1a87, _0x568d3a) {
                            const _0x50eae6 = _0x370f37;

                            return _0x26192d[_0x50eae6(0x184)](_0x2b5270, _0x3b1a87, _0x568d3a);
                        },
                        'AnUVh': _0x26192d[_0x370f37(0x187)]
                    };

                    _0x26192d[_0x370f37(0x188)](describe, _0x26192d.obumV, () => {
                        const _0x2aab9e = _0x370f37;

                        _0x5adbf4[_0x2aab9e(0x189)](it, _0x5adbf4[_0x2aab9e(0x18a)], () => {
                            const _0x1ab40d = _0x2aab9e;

                            const _0x3e5544 = _0x1d1968[_0x1ab40d(0x15a)](Object.assign({
                                'useBuiltIns': _0x5adbf4[_0x1ab40d(0x18b)],
                                'corejs': { 'major': 0x3 },
                                'regenerator': true
                            }, _0x480016));

                            _0x5adbf4[_0x1ab40d(0x18c)](expect, _0x3e5544[_0x1ab40d(0x16e)]).toBe(2), expect(_0x3e5544[0][0]).toEqual(pluginCoreJS3), _0x5adbf4.WjeWg(expect, _0x3e5544[1][0])[_0x1ab40d(0x114)](_0x324797);
                        });
                    }), _0x26192d[_0x370f37(0x188)](describe, _0x370f37(0x172), () => {
                        const _0x3601a7 = _0x370f37;
                        const _0x4e7f3b = {
                            'tEepu': _0x5adbf4[_0x3601a7(0x18b)],
                            'tAmRb': function (_0x354a62, _0x193651) {
                                return _0x354a62(_0x193651);
                            },
                            'VvOyo': function (_0x2b6182, _0x1af9d0) {
                                const _0x241126 = _0x3601a7;

                                return _0x5adbf4[_0x241126(0x18d)](_0x2b6182, _0x1af9d0);
                            },
                            'Zgnoh': function (_0xc39880, _0x2e499c) {
                                return _0x5adbf4.PSIJx(_0xc39880, _0x2e499c);
                            }
                        };

                        _0x5adbf4.hBmZv(it, _0x5adbf4[_0x3601a7(0x18e)], () => {
                            const _0x1a9fbd = _0x3601a7;

                            const _0x1f2bc4 = _0x1d1968.getPolyfillPlugins(Object[_0x1a9fbd(0x162)]({
                                'useBuiltIns': _0x4e7f3b[_0x1a9fbd(0x18f)],
                                'corejs': { 'major': 0x3 },
                                'regenerator': false
                            }, _0x480016));

                            _0x4e7f3b[_0x1a9fbd(0x190)](expect, _0x1f2bc4[_0x1a9fbd(0x16e)])[_0x1a9fbd(0x179)](3), _0x4e7f3b.VvOyo(expect, _0x1f2bc4[0][0])[_0x1a9fbd(0x114)](pluginCoreJS3), _0x4e7f3b[_0x1a9fbd(0x191)](expect, _0x1f2bc4[1][0]).toEqual(_0x324797), _0x4e7f3b.Zgnoh(expect, _0x1f2bc4[2][0])[_0x1a9fbd(0x114)](_0x5c0ad8);
                        });
                    });
                });
            });
        });
    }), _0x53177[_0xd9fc0b(0x192)](it, 'available-plugins is in sync with @babel/compat-data', () => {
        const _0x690cce = _0xd9fc0b;

        const _0x113a7f = Object[_0x690cce(0x193)](_0x24aec2)[_0x690cce(0x194)]();

        const _0xdb7d49 = Object[_0x690cce(0x193)](_0x380de9)[_0x690cce(0x194)]();

        expect(_0x113a7f)[_0x690cce(0x114)](expect.arrayContaining(_0xdb7d49));
    });
});
