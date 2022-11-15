import {
    onInitialClientRender,
    onRouteUpdate
} from '../gatsby-browser';
import { Minimatch } from 'minimatch';
import {
    getLCP,
    getFID,
    getCLS
} from 'web-vitals/base';
jest['mock']('web-vitals/base', () => {
    const _0x419a3c = {
        'aCLpx': function (_0x57786d, _0x39863c) {
            return _0x57786d(_0x39863c);
        },
        'tzdMS': function (_0x5d9359, _0x410b38, _0x32da9d, _0x4eb2d2) {
            return _0x5d9359(_0x410b38, _0x32da9d, _0x4eb2d2);
        },
        'OJzMv': function (_0x539827, _0x46ac7b) {
            return _0x539827(_0x46ac7b);
        },
        'HuEOY': function (_0x53df2d, _0x18786a, _0x4c2a0f, _0x52be98) {
            return _0x53df2d(_0x18786a, _0x4c2a0f, _0x52be98);
        }
    };
    function _0x5078c7(_0x12cc97, _0x23df94, _0x593b64) {
        return {
            'name': _0x12cc97,
            'id': _0x23df94,
            'value': _0x593b64
        };
    }
    return {
        'getLCP': jest['fn'](_0x3b3ab4 => {
            _0x419a3c['aCLpx'](_0x3b3ab4, _0x419a3c['tzdMS'](_0x5078c7, 'LCP', '1', '300'));
        }),
        'getFID': jest['fn'](_0x2e0145 => {
            _0x419a3c['OJzMv'](_0x2e0145, _0x419a3c['HuEOY'](_0x5078c7, 'FID', '2', '150'));
        }),
        'getCLS': jest['fn'](_0x7cdd24 => {
            _0x419a3c['OJzMv'](_0x7cdd24, _0x419a3c['HuEOY'](_0x5078c7, 'CLS', '3', '0.10'));
        })
    };
}), describe('gatsby-plugin-google-analytics', () => {
    const _0x45c766 = {
        'urYgQ': function (_0x354156, _0x4dc645, _0x4bbf2e) {
            return _0x354156(_0x4dc645, _0x4bbf2e);
        },
        'ERLLs': function (_0x445755, _0x13d3ea) {
            return _0x445755(_0x13d3ea);
        },
        'FmRxK': function (_0xfde05a, _0x16a455) {
            return _0xfde05a(_0x16a455);
        },
        'SRzyH': function (_0x168ef2, _0x2fc6a4) {
            return _0x168ef2(_0x2fc6a4);
        },
        'MraVG': '1|6|4|2|5|7|3|0',
        'xpemm': function (_0xa077c4, _0x46b934) {
            return _0xa077c4(_0x46b934);
        },
        'HYvao': function (_0x2e6bd6, _0x2bb50e) {
            return _0x2e6bd6(_0x2bb50e);
        },
        'YkwzI': '5|0|4|6|2|1|3',
        'NVVil': function (_0x5ded4e, _0x3e1bb3) {
            return _0x5ded4e(_0x3e1bb3);
        },
        'lNecF': function (_0x4978d5, _0x449168, _0x5ad830) {
            return _0x4978d5(_0x449168, _0x5ad830);
        },
        'gDDYA': function (_0x2310dd, _0x14222d, _0x2a3742) {
            return _0x2310dd(_0x14222d, _0x2a3742);
        },
        'hoNvC': function (_0x51fbaa, _0x4ef654, _0x353453) {
            return _0x51fbaa(_0x4ef654, _0x353453);
        },
        'lcxFH': function (_0x9331fa, _0x4af569, _0xed631a) {
            return _0x9331fa(_0x4af569, _0xed631a);
        },
        'REmYu': function (_0x4046a3, _0x39800d, _0x2df374) {
            return _0x4046a3(_0x39800d, _0x2df374);
        },
        'iTKKf': function (_0x40a082, _0x140f09, _0x2f83f3) {
            return _0x40a082(_0x140f09, _0x2f83f3);
        }
    };
    _0x45c766['iTKKf'](describe, 'gatsby-browser', () => {
        const _0x392072 = {
            'XEHSu': function (_0x26c9bc, _0x8bd7d, _0xf2154) {
                return _0x45c766['urYgQ'](_0x26c9bc, _0x8bd7d, _0xf2154);
            },
            'poKDi': function (_0x17576f, _0x5aa527) {
                return _0x45c766['ERLLs'](_0x17576f, _0x5aa527);
            },
            'FBLoh': function (_0x549856, _0x459716) {
                return _0x45c766['FmRxK'](_0x549856, _0x459716);
            },
            'uJvHs': function (_0x2c802b, _0x121607) {
                return _0x45c766['SRzyH'](_0x2c802b, _0x121607);
            },
            'msPpT': function (_0x31c24f, _0x2ff5e2) {
                return _0x45c766['SRzyH'](_0x31c24f, _0x2ff5e2);
            },
            'hlFFJ': _0x45c766['MraVG'],
            'amyec': function (_0x33291c, _0x14a3e5, _0x259f05) {
                return _0x45c766['urYgQ'](_0x33291c, _0x14a3e5, _0x259f05);
            },
            'PNcbq': function (_0xa5607b, _0x36da98) {
                return _0x45c766['xpemm'](_0xa5607b, _0x36da98);
            },
            'emBWt': function (_0x447900, _0xdf2b3b) {
                return _0x45c766['HYvao'](_0x447900, _0xdf2b3b);
            },
            'DYPfX': _0x45c766['YkwzI'],
            'mStXo': function (_0xe6be91, _0x22e3e2) {
                return _0x45c766['HYvao'](_0xe6be91, _0x22e3e2);
            },
            'EZwHn': function (_0x57f4b8, _0x4d15b2) {
                return _0x45c766['NVVil'](_0x57f4b8, _0x4d15b2);
            },
            'wBuae': function (_0x2fb962, _0x439c91, _0x24a7e0) {
                return _0x45c766['urYgQ'](_0x2fb962, _0x439c91, _0x24a7e0);
            },
            'AIMhT': function (_0x595b9a, _0x43d9d5, _0x2f7042) {
                return _0x45c766['lNecF'](_0x595b9a, _0x43d9d5, _0x2f7042);
            },
            'SrXfB': function (_0x31241a, _0x5f5c42, _0x45d95c) {
                return _0x45c766['gDDYA'](_0x31241a, _0x5f5c42, _0x45d95c);
            },
            'PJmth': function (_0x2dc6fa, _0x9626b4, _0x14bf4a) {
                return _0x45c766['hoNvC'](_0x2dc6fa, _0x9626b4, _0x14bf4a);
            },
            'IZhvy': function (_0x4f2aba, _0x8d5f7a, _0x567c5a) {
                return _0x45c766['lcxFH'](_0x4f2aba, _0x8d5f7a, _0x567c5a);
            },
            'qIMBt': function (_0x1544a5, _0x5c5ad0, _0x525d3c) {
                return _0x45c766['REmYu'](_0x1544a5, _0x5c5ad0, _0x525d3c);
            }
        };
        _0x45c766['REmYu'](describe, 'onRouteUpdate', () => {
            const _0x125cbe = {
                'Poqtp': function (_0x35e4f0, _0x4352e1) {
                    return _0x392072['poKDi'](_0x35e4f0, _0x4352e1);
                },
                'GVVPQ': function (_0x312a9f, _0x3d646f) {
                    return _0x392072['FBLoh'](_0x312a9f, _0x3d646f);
                },
                'MROeY': function (_0x4b4fbd, _0x375665) {
                    return _0x392072['FBLoh'](_0x4b4fbd, _0x375665);
                },
                'MLZoJ': function (_0x1d58f1, _0x2b5fa1) {
                    return _0x392072['FBLoh'](_0x1d58f1, _0x2b5fa1);
                },
                'xvlrC': function (_0x4a79b2, _0x53b36a) {
                    return _0x392072['uJvHs'](_0x4a79b2, _0x53b36a);
                },
                'RFQms': function (_0x307a75, _0x5c8844) {
                    return _0x392072['uJvHs'](_0x307a75, _0x5c8844);
                },
                'yIFln': function (_0x44cb68, _0xe0417b) {
                    return _0x392072['uJvHs'](_0x44cb68, _0xe0417b);
                },
                'cQcCE': function (_0x50f925, _0x50eca2) {
                    return _0x392072['msPpT'](_0x50f925, _0x50eca2);
                },
                'GXRyE': _0x392072['hlFFJ'],
                'yWdaD': function (_0x4c0990, _0x479180, _0x24e182) {
                    return _0x392072['amyec'](_0x4c0990, _0x479180, _0x24e182);
                },
                'TPLKU': function (_0x3b9048, _0x1ddf18) {
                    return _0x392072['PNcbq'](_0x3b9048, _0x1ddf18);
                },
                'BZTAe': function (_0x2754a8, _0x16f1ea) {
                    return _0x392072['emBWt'](_0x2754a8, _0x16f1ea);
                },
                'LDDMP': _0x392072['DYPfX'],
                'GMaSC': function (_0x3cb3ec, _0x45fc46) {
                    return _0x392072['mStXo'](_0x3cb3ec, _0x45fc46);
                },
                'nDJGS': function (_0x5ec010, _0x17d81f) {
                    return _0x392072['EZwHn'](_0x5ec010, _0x17d81f);
                },
                'wXXzo': function (_0x51aaa6, _0x481a17, _0x519060) {
                    return _0x392072['wBuae'](_0x51aaa6, _0x481a17, _0x519060);
                },
                'KeVRX': function (_0x331096, _0x3bf9c3, _0x15aeb0) {
                    return _0x392072['AIMhT'](_0x331096, _0x3bf9c3, _0x15aeb0);
                },
                'wexmm': function (_0x58a1a7, _0x4c498c, _0x17d23c) {
                    return _0x392072['SrXfB'](_0x58a1a7, _0x4c498c, _0x17d23c);
                },
                'heIlJ': function (_0x7bfa30, _0x579473, _0x4a58a1) {
                    return _0x392072['PJmth'](_0x7bfa30, _0x579473, _0x4a58a1);
                }
            };
            _0x392072['IZhvy'](describe, 'in\x20non-production\x20env', () => {
                _0x392072['XEHSu'](it, 'does\x20not\x20send\x20page\x20view', () => {
                    window['ga'] = jest['fn'](), _0x125cbe['Poqtp'](onRouteUpdate, {}), _0x125cbe['Poqtp'](expect, window['ga'])['not']['toHaveBeenCalled']();
                });
            }), _0x392072['qIMBt'](describe, 'in\x20production\x20env', () => {
                const _0x4ff6dc = {
                    'asVSf': function (_0x3c6767, _0x3a72c7, _0x366d47) {
                        return _0x125cbe['yWdaD'](_0x3c6767, _0x3a72c7, _0x366d47);
                    },
                    'ZfIvV': function (_0x4f6586, _0x459929) {
                        return _0x125cbe['BZTAe'](_0x4f6586, _0x459929);
                    },
                    'nNOIN': _0x125cbe['LDDMP']
                };
                let _0x4a0e6c;
                _0x125cbe['BZTAe'](beforeAll, () => {
                    _0x4a0e6c = process['env']['NODE_ENV'], process['env']['NODE_ENV'] = 'production';
                }), _0x125cbe['BZTAe'](afterAll, () => {
                    process['env']['NODE_ENV'] = _0x4a0e6c;
                }), _0x125cbe['GMaSC'](beforeEach, () => {
                    jest['useFakeTimers'](), jest['clearAllMocks'](), window['ga'] = jest['fn']();
                }), _0x125cbe['nDJGS'](afterEach, () => {
                    jest['useRealTimers']();
                }), _0x125cbe['yWdaD'](it, 'does\x20not\x20send\x20page\x20view\x20when\x20ga\x20is\x20undefined', () => {
                    delete window['ga'], _0x125cbe['Poqtp'](onRouteUpdate, {}), jest['runAllTimers'](), _0x125cbe['GVVPQ'](expect, setTimeout)['not']['toHaveBeenCalled']();
                }), _0x125cbe['wXXzo'](it, 'does\x20not\x20send\x20page\x20view\x20when\x20path\x20is\x20excluded', () => {
                    const _0x32d5b1 = new Minimatch('/test-pages/**');
                    window['excludeGAPaths'] = [_0x32d5b1['makeRe']()], _0x125cbe['MROeY'](onRouteUpdate, { 'location': { 'pathname': '/test-pages/example' } }), jest['runAllTimers'](), _0x125cbe['MLZoJ'](expect, window['ga'])['not']['toHaveBeenCalled']();
                }), _0x125cbe['KeVRX'](it, 'sends\x20page\x20view', () => {
                    _0x125cbe['xvlrC'](onRouteUpdate, {}), jest['runAllTimers'](), _0x125cbe['RFQms'](expect, window['ga'])['toHaveBeenCalledTimes'](0x2);
                }), _0x125cbe['KeVRX'](it, 'uses\x20setTimeout\x20with\x20a\x20minimum\x20delay\x20of\x2032ms', () => {
                    _0x125cbe['yIFln'](onRouteUpdate, {}), jest['runAllTimers'](), _0x125cbe['yIFln'](expect, setTimeout)['toHaveBeenCalledWith'](expect['any'](Function), 0x20), _0x125cbe['cQcCE'](expect, window['ga'])['toHaveBeenCalledTimes'](0x2);
                }), _0x125cbe['wexmm'](it, 'uses\x20setTimeout\x20with\x20the\x20provided\x20pageTransitionDelay\x20value', () => {
                    _0x4ff6dc['asVSf'](onRouteUpdate, {}, { 'pageTransitionDelay': 0x3e8 }), jest['runAllTimers'](), _0x4ff6dc['ZfIvV'](expect, setTimeout)['toHaveBeenCalledWith'](expect['any'](Function), 0x3e8), _0x4ff6dc['ZfIvV'](expect, window['ga'])['toHaveBeenCalledTimes'](0x2);
                }), _0x125cbe['wexmm'](it, 'sends\x20core\x20web\x20vitals\x20when\x20enabled', async () => {
                    const _0x2f26bc = _0x125cbe['GXRyE']['split']('|');
                    let _0x5f027f = 0x0;
                    while (!![]) {
                        switch (_0x2f26bc[_0x5f027f++]) {
                        case '0':
                            _0x125cbe['cQcCE'](expect, window['ga'])['toBeCalledWith']('send', 'event', expect['objectContaining']({
                                'eventAction': 'CLS',
                                'eventCategory': 'Web\x20Vitals',
                                'eventLabel': '3',
                                'eventValue': 0x64
                            }));
                            continue;
                        case '1':
                            _0x125cbe['yWdaD'](onInitialClientRender, {}, { 'enableWebVitalsTracking': !![] });
                            continue;
                        case '2':
                            jest['runAllTimers']();
                            continue;
                        case '3':
                            _0x125cbe['TPLKU'](expect, window['ga'])['toBeCalledWith']('send', 'event', expect['objectContaining']({
                                'eventAction': 'FID',
                                'eventCategory': 'Web\x20Vitals',
                                'eventLabel': '2',
                                'eventValue': 0x96
                            }));
                            continue;
                        case '4':
                            await Promise['resolve']();
                            continue;
                        case '5':
                            _0x125cbe['BZTAe'](expect, window['ga'])['toBeCalledTimes'](0x3);
                            continue;
                        case '6':
                            await Promise['resolve']();
                            continue;
                        case '7':
                            _0x125cbe['BZTAe'](expect, window['ga'])['toBeCalledWith']('send', 'event', expect['objectContaining']({
                                'eventAction': 'LCP',
                                'eventCategory': 'Web\x20Vitals',
                                'eventLabel': '1',
                                'eventValue': 0x12c
                            }));
                            continue;
                        }
                        break;
                    }
                }), _0x125cbe['heIlJ'](it, 'sends\x20nothing\x20when\x20web\x20vitals\x20tracking\x20is\x20disabled', async () => {
                    const _0x5c4aa9 = _0x4ff6dc['nNOIN']['split']('|');
                    let _0xdc3df1 = 0x0;
                    while (!![]) {
                        switch (_0x5c4aa9[_0xdc3df1++]) {
                        case '0':
                            await Promise['resolve']();
                            continue;
                        case '1':
                            _0x4ff6dc['ZfIvV'](expect, getFID)['not']['toBeCalled']();
                            continue;
                        case '2':
                            _0x4ff6dc['ZfIvV'](expect, getLCP)['not']['toBeCalled']();
                            continue;
                        case '3':
                            _0x4ff6dc['ZfIvV'](expect, getCLS)['not']['toBeCalled']();
                            continue;
                        case '4':
                            await Promise['resolve']();
                            continue;
                        case '5':
                            _0x4ff6dc['asVSf'](onInitialClientRender, {}, { 'enableWebVitalsTracking': ![] });
                            continue;
                        case '6':
                            jest['runAllTimers']();
                            continue;
                        }
                        break;
                    }
                });
            });
        });
    });
});
