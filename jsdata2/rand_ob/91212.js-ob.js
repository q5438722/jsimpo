const _0xa74f = [
    'NODE_ENV',
    'production',
    'VDBqr',
    'does\x20not\x20send\x20page\x20view\x20when\x20ga\x20is\x20undefined',
    'toHaveBeenCalled',
    '/test-pages/**',
    'rIhMy',
    '/test-pages/example',
    'runAllTimers',
    'EHWDs',
    'sends\x20page\x20view',
    'toHaveBeenCalledTimes',
    'any',
    'WZGnH',
    'uses\x20setTimeout\x20with\x20the\x20provided\x20pageTransitionDelay\x20value',
    'PGrEx',
    'ZKdtM',
    'naupo',
    'resolve',
    'event',
    'jyaUZ',
    'toBeCalledWith',
    'send',
    'objectContaining',
    'Web\x20Vitals',
    'toBeCalledTimes',
    'xrWLB',
    'FOxvd',
    'sends\x20nothing\x20when\x20web\x20vitals\x20tracking\x20is\x20disabled',
    'tRlzk',
    'split',
    'toBeCalled',
    'zHfHX',
    '247994OAdzUv',
    '1ZrPnmr',
    '243581wCrfDo',
    '549881xsKfxk',
    '759333PaKVWW',
    '119082UtEgdr',
    '15TDBxio',
    '38355ZkKsFz',
    '2279282PYEfIj',
    'mock',
    'web-vitals/base',
    'jYMeP',
    'XDSKI',
    '300',
    'FID',
    '150',
    'GYZPi',
    'CLS',
    '0.10',
    'gatsby-plugin-google-analytics',
    '5|0|1|7|4|2|3|6',
    'xjqEq',
    'gatsby-browser',
    'kydBM',
    'mymnB',
    'XCKcZ',
    'cnoox',
    'ADtAQ',
    'IvrGy',
    'XjqqC',
    'PtIvH',
    'cGoSi',
    'qpBVL',
    'UMEbX',
    'ypzUY',
    'in\x20non-production\x20env',
    'does\x20not\x20send\x20page\x20view',
    'wQuBL',
    'not',
    'kHERM',
    'cGICU',
    'ZTJLM',
    'NReid',
    'env'
];
const _0x4e1440 = _0x1cfc;
(function (_0x24918c, _0xac4224) {
    const _0xe032ef = _0x1cfc;
    while (!![]) {
        try {
            const _0x1030c2 = parseInt(_0xe032ef(0x11a)) * parseInt(_0xe032ef(0x11b)) + -parseInt(_0xe032ef(0x11c)) + -parseInt(_0xe032ef(0x11d)) + -parseInt(_0xe032ef(0x11e)) + parseInt(_0xe032ef(0x11f)) + -parseInt(_0xe032ef(0x120)) * parseInt(_0xe032ef(0x121)) + parseInt(_0xe032ef(0x122));
            if (_0x1030c2 === _0xac4224)
                break;
            else
                _0x24918c['push'](_0x24918c['shift']());
        } catch (_0x14f0a5) {
            _0x24918c['push'](_0x24918c['shift']());
        }
    }
}(_0xa74f, -0xdf54b * 0x1 + 0x49048 + 0x3b * 0x4b13));
function _0x1cfc(_0x304b77, _0x35d45c) {
    return _0x1cfc = function (_0x1c2eee, _0x16dea7) {
        _0x1c2eee = _0x1c2eee - (0x41 + 0x14ed + -0x1414);
        let _0x5e8dc0 = _0xa74f[_0x1c2eee];
        return _0x5e8dc0;
    }, _0x1cfc(_0x304b77, _0x35d45c);
}
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
jest[_0x4e1440(0x123)](_0x4e1440(0x124), () => {
    const _0x3791e6 = {
        'jYMeP': function (_0x3e1289, _0x1b5dfd) {
            return _0x3e1289(_0x1b5dfd);
        },
        'XDSKI': function (_0x47eaa6, _0xfba8c5, _0x56cc97, _0x4b5efe) {
            return _0x47eaa6(_0xfba8c5, _0x56cc97, _0x4b5efe);
        },
        'GYZPi': function (_0x51a06c, _0x3e6bfb) {
            return _0x51a06c(_0x3e6bfb);
        }
    };
    function _0x287dc0(_0x478c18, _0xdecff3, _0x195dc4) {
        return {
            'name': _0x478c18,
            'id': _0xdecff3,
            'value': _0x195dc4
        };
    }
    return {
        'getLCP': jest['fn'](_0x27176b => {
            const _0x2fc658 = _0x1cfc;
            _0x3791e6[_0x2fc658(0x125)](_0x27176b, _0x3791e6[_0x2fc658(0x126)](_0x287dc0, 'LCP', '1', _0x2fc658(0x127)));
        }),
        'getFID': jest['fn'](_0x11c7ec => {
            const _0x1df707 = _0x1cfc;
            _0x11c7ec(_0x3791e6[_0x1df707(0x126)](_0x287dc0, _0x1df707(0x128), '2', _0x1df707(0x129)));
        }),
        'getCLS': jest['fn'](_0x1c1d38 => {
            const _0x4c75da = _0x1cfc;
            _0x3791e6[_0x4c75da(0x12a)](_0x1c1d38, _0x3791e6[_0x4c75da(0x126)](_0x287dc0, _0x4c75da(0x12b), '3', _0x4c75da(0x12c)));
        })
    };
}), describe(_0x4e1440(0x12d), () => {
    const _0x117276 = _0x4e1440, _0x1b2687 = {
            'kydBM': function (_0x186de0, _0x13c49f) {
                return _0x186de0(_0x13c49f);
            },
            'mymnB': _0x117276(0x12e),
            'tGQqs': function (_0x1cb5e6, _0x17ad3c) {
                return _0x1cb5e6(_0x17ad3c);
            },
            'XCKcZ': '3|4|0|6|2|5|1',
            'cnoox': function (_0x190ae7, _0x2e1334) {
                return _0x190ae7(_0x2e1334);
            },
            'IvrGy': function (_0x2f6f83, _0x20e169) {
                return _0x2f6f83(_0x20e169);
            },
            'ADtAQ': function (_0x2b7741, _0x531391, _0x1054cc) {
                return _0x2b7741(_0x531391, _0x1054cc);
            },
            'XjqqC': function (_0x53ef26, _0x487a69, _0x514d2e) {
                return _0x53ef26(_0x487a69, _0x514d2e);
            },
            'xjqEq': function (_0x56b47d, _0x4a5841, _0x2bd339) {
                return _0x56b47d(_0x4a5841, _0x2bd339);
            }
        };
    _0x1b2687[_0x117276(0x12f)](describe, _0x117276(0x130), () => {
        const _0x677402 = _0x117276, _0x24cfb0 = {
                'VDBqr': function (_0x50d623, _0x55f7c7, _0x55b29a) {
                    return _0x50d623(_0x55f7c7, _0x55b29a);
                },
                'kHERM': function (_0x53e1f7, _0x521776) {
                    const _0x23835f = _0x1cfc;
                    return _0x1b2687[_0x23835f(0x131)](_0x53e1f7, _0x521776);
                },
                'cGICU': _0x1b2687[_0x677402(0x132)],
                'ZTJLM': function (_0x29e810, _0x929f07) {
                    return _0x1b2687['tGQqs'](_0x29e810, _0x929f07);
                },
                'ToNzH': _0x1b2687[_0x677402(0x133)],
                'NReid': function (_0x35f177, _0xa47f30) {
                    const _0x19bacb = _0x677402;
                    return _0x1b2687[_0x19bacb(0x134)](_0x35f177, _0xa47f30);
                },
                'PtIvH': function (_0xace747, _0x13b328) {
                    return _0x1b2687['IvrGy'](_0xace747, _0x13b328);
                },
                'WZGnH': function (_0x389fed, _0x53e553, _0x4b6e98) {
                    const _0x3cf949 = _0x677402;
                    return _0x1b2687[_0x3cf949(0x135)](_0x389fed, _0x53e553, _0x4b6e98);
                },
                'cGoSi': function (_0x496890, _0x3eff9d) {
                    return _0x496890(_0x3eff9d);
                },
                'qpBVL': function (_0x576f73, _0x44a9fe) {
                    const _0xcc424a = _0x677402;
                    return _0x1b2687[_0xcc424a(0x136)](_0x576f73, _0x44a9fe);
                },
                'UMEbX': function (_0x27c3ca, _0x562052) {
                    return _0x27c3ca(_0x562052);
                },
                'ypzUY': function (_0x2cfeb0, _0x1e4e5d, _0xa3951) {
                    const _0x37679f = _0x677402;
                    return _0x1b2687[_0x37679f(0x137)](_0x2cfeb0, _0x1e4e5d, _0xa3951);
                }
            };
        _0x1b2687[_0x677402(0x12f)](describe, 'onRouteUpdate', () => {
            const _0x4e00ad = _0x677402, _0x35e16c = {
                    'wQuBL': function (_0x4498ea, _0x5cc918) {
                        const _0x3d5ca6 = _0x1cfc;
                        return _0x24cfb0[_0x3d5ca6(0x138)](_0x4498ea, _0x5cc918);
                    },
                    'rIhMy': function (_0x313180, _0x2c2d1) {
                        const _0x11fc6b = _0x1cfc;
                        return _0x24cfb0[_0x11fc6b(0x139)](_0x313180, _0x2c2d1);
                    },
                    'EHWDs': function (_0x26e424, _0x9636d0) {
                        const _0x6e354b = _0x1cfc;
                        return _0x24cfb0[_0x6e354b(0x13a)](_0x26e424, _0x9636d0);
                    },
                    'DeWsb': function (_0x1d0775, _0x226c5c) {
                        const _0x302906 = _0x1cfc;
                        return _0x24cfb0[_0x302906(0x13b)](_0x1d0775, _0x226c5c);
                    },
                    'PGrEx': function (_0x31c54b, _0x2d48c0, _0x5487d8) {
                        const _0x168cbf = _0x1cfc;
                        return _0x24cfb0[_0x168cbf(0x13c)](_0x31c54b, _0x2d48c0, _0x5487d8);
                    },
                    'ZKdtM': function (_0x421321, _0x5728b4) {
                        return _0x421321(_0x5728b4);
                    }
                };
            _0x24cfb0[_0x4e00ad(0x13c)](describe, _0x4e00ad(0x13d), () => {
                const _0x1197f6 = _0x4e00ad;
                _0x24cfb0['VDBqr'](it, _0x1197f6(0x13e), () => {
                    const _0x1b2c19 = _0x1197f6;
                    window['ga'] = jest['fn'](), _0x35e16c[_0x1b2c19(0x13f)](onRouteUpdate, {}), expect(window['ga'])[_0x1b2c19(0x140)]['toHaveBeenCalled']();
                });
            }), describe('in\x20production\x20env', () => {
                const _0x4b4c5c = _0x4e00ad, _0x32cf41 = {
                        'fBOYa': function (_0x408b49, _0x56f59d) {
                            const _0x544de5 = _0x1cfc;
                            return _0x24cfb0[_0x544de5(0x141)](_0x408b49, _0x56f59d);
                        },
                        'naupo': _0x24cfb0[_0x4b4c5c(0x142)],
                        'dFmXa': function (_0xbbdc66, _0x3ab2d8) {
                            const _0x1b6343 = _0x4b4c5c;
                            return _0x24cfb0[_0x1b6343(0x143)](_0xbbdc66, _0x3ab2d8);
                        },
                        'jyaUZ': function (_0xa8bc7f, _0x367bc5) {
                            const _0x399b9f = _0x4b4c5c;
                            return _0x24cfb0[_0x399b9f(0x143)](_0xa8bc7f, _0x367bc5);
                        },
                        'xrWLB': function (_0x123f26, _0xedbca5, _0x57837f) {
                            return _0x24cfb0['VDBqr'](_0x123f26, _0xedbca5, _0x57837f);
                        },
                        'FOxvd': function (_0x3b8550, _0x4d8773) {
                            return _0x24cfb0['ZTJLM'](_0x3b8550, _0x4d8773);
                        },
                        'tRlzk': _0x24cfb0['ToNzH'],
                        'zHfHX': function (_0x13cd98, _0x22d29b) {
                            const _0x468905 = _0x4b4c5c;
                            return _0x24cfb0[_0x468905(0x144)](_0x13cd98, _0x22d29b);
                        }
                    };
                let _0x52a7fc;
                _0x24cfb0[_0x4b4c5c(0x138)](beforeAll, () => {
                    const _0x2e5927 = _0x4b4c5c;
                    _0x52a7fc = process[_0x2e5927(0x145)][_0x2e5927(0x146)], process[_0x2e5927(0x145)][_0x2e5927(0x146)] = _0x2e5927(0x147);
                }), _0x24cfb0['PtIvH'](afterAll, () => {
                    const _0x1fca61 = _0x4b4c5c;
                    process[_0x1fca61(0x145)][_0x1fca61(0x146)] = _0x52a7fc;
                }), _0x24cfb0[_0x4b4c5c(0x138)](beforeEach, () => {
                    jest['useFakeTimers'](), jest['clearAllMocks'](), window['ga'] = jest['fn']();
                }), afterEach(() => {
                    jest['useRealTimers']();
                }), _0x24cfb0[_0x4b4c5c(0x148)](it, _0x4b4c5c(0x149), () => {
                    const _0x34ca57 = _0x4b4c5c;
                    delete window['ga'], _0x32cf41['fBOYa'](onRouteUpdate, {}), jest['runAllTimers'](), expect(setTimeout)[_0x34ca57(0x140)][_0x34ca57(0x14a)]();
                }), _0x24cfb0['WZGnH'](it, 'does\x20not\x20send\x20page\x20view\x20when\x20path\x20is\x20excluded', () => {
                    const _0x17ec8e = _0x4b4c5c, _0x51e717 = new Minimatch(_0x17ec8e(0x14b));
                    window['excludeGAPaths'] = [_0x51e717['makeRe']()], _0x35e16c[_0x17ec8e(0x14c)](onRouteUpdate, { 'location': { 'pathname': _0x17ec8e(0x14d) } }), jest[_0x17ec8e(0x14e)](), _0x35e16c[_0x17ec8e(0x14f)](expect, window['ga'])[_0x17ec8e(0x140)][_0x17ec8e(0x14a)]();
                }), it(_0x4b4c5c(0x150), () => {
                    const _0x1cd914 = _0x4b4c5c;
                    _0x35e16c[_0x1cd914(0x14f)](onRouteUpdate, {}), jest['runAllTimers'](), _0x35e16c['EHWDs'](expect, window['ga'])[_0x1cd914(0x151)](-0x1e00 + -0x40 * 0x90 + 0x4202);
                }), it('uses\x20setTimeout\x20with\x20a\x20minimum\x20delay\x20of\x2032ms', () => {
                    const _0x4d7b14 = _0x4b4c5c;
                    _0x35e16c['DeWsb'](onRouteUpdate, {}), jest[_0x4d7b14(0x14e)](), _0x35e16c['DeWsb'](expect, setTimeout)['toHaveBeenCalledWith'](expect[_0x4d7b14(0x152)](Function), 0x3 * -0x137 + -0x44b * 0x1 + 0x810), _0x35e16c['DeWsb'](expect, window['ga'])['toHaveBeenCalledTimes'](0x2 * -0x864 + -0x1d9 * -0x10 + -0xcc6);
                }), _0x24cfb0[_0x4b4c5c(0x153)](it, _0x4b4c5c(0x154), () => {
                    const _0x269891 = _0x4b4c5c;
                    _0x35e16c[_0x269891(0x155)](onRouteUpdate, {}, { 'pageTransitionDelay': 0x3e8 }), jest['runAllTimers'](), _0x35e16c[_0x269891(0x156)](expect, setTimeout)['toHaveBeenCalledWith'](expect['any'](Function), -0x17 * -0x25 + 0x20cb * 0x1 + -0x2036), _0x35e16c['ZKdtM'](expect, window['ga'])[_0x269891(0x151)](-0x6 * 0x44f + 0x1 * -0x2367 + 0x3d43);
                }), _0x24cfb0[_0x4b4c5c(0x153)](it, 'sends\x20core\x20web\x20vitals\x20when\x20enabled', async () => {
                    const _0x467da3 = _0x4b4c5c, _0x253058 = _0x32cf41[_0x467da3(0x157)]['split']('|');
                    let _0x59ec0a = -0x23b2 + 0x908 + 0x1aaa;
                    while (!![]) {
                        switch (_0x253058[_0x59ec0a++]) {
                        case '0':
                            await Promise[_0x467da3(0x158)]();
                            continue;
                        case '1':
                            await Promise[_0x467da3(0x158)]();
                            continue;
                        case '2':
                            _0x32cf41['dFmXa'](expect, window['ga'])['toBeCalledWith']('send', _0x467da3(0x159), expect['objectContaining']({
                                'eventAction': 'LCP',
                                'eventCategory': 'Web\x20Vitals',
                                'eventLabel': '1',
                                'eventValue': 0x12c
                            }));
                            continue;
                        case '3':
                            _0x32cf41[_0x467da3(0x15a)](expect, window['ga'])[_0x467da3(0x15b)](_0x467da3(0x15c), 'event', expect[_0x467da3(0x15d)]({
                                'eventAction': _0x467da3(0x128),
                                'eventCategory': _0x467da3(0x15e),
                                'eventLabel': '2',
                                'eventValue': 0x96
                            }));
                            continue;
                        case '4':
                            expect(window['ga'])[_0x467da3(0x15f)](0x853 + 0x6d * -0x4c + 0x180c);
                            continue;
                        case '5':
                            _0x32cf41[_0x467da3(0x160)](onInitialClientRender, {}, { 'enableWebVitalsTracking': !![] });
                            continue;
                        case '6':
                            _0x32cf41[_0x467da3(0x161)](expect, window['ga'])[_0x467da3(0x15b)](_0x467da3(0x15c), _0x467da3(0x159), expect[_0x467da3(0x15d)]({
                                'eventAction': _0x467da3(0x12b),
                                'eventCategory': _0x467da3(0x15e),
                                'eventLabel': '3',
                                'eventValue': 0x64
                            }));
                            continue;
                        case '7':
                            jest['runAllTimers']();
                            continue;
                        }
                        break;
                    }
                }), _0x24cfb0[_0x4b4c5c(0x153)](it, _0x4b4c5c(0x162), async () => {
                    const _0x31b03d = _0x4b4c5c, _0x447c8f = _0x32cf41[_0x31b03d(0x163)][_0x31b03d(0x164)]('|');
                    let _0x1aafc5 = -0x125 * -0x14 + 0x1c14 + -0x32f8;
                    while (!![]) {
                        switch (_0x447c8f[_0x1aafc5++]) {
                        case '0':
                            await Promise['resolve']();
                            continue;
                        case '1':
                            _0x32cf41[_0x31b03d(0x161)](expect, getCLS)[_0x31b03d(0x140)][_0x31b03d(0x165)]();
                            continue;
                        case '2':
                            _0x32cf41[_0x31b03d(0x166)](expect, getLCP)['not'][_0x31b03d(0x165)]();
                            continue;
                        case '3':
                            onInitialClientRender({}, { 'enableWebVitalsTracking': ![] });
                            continue;
                        case '4':
                            await Promise[_0x31b03d(0x158)]();
                            continue;
                        case '5':
                            expect(getFID)[_0x31b03d(0x140)][_0x31b03d(0x165)]();
                            continue;
                        case '6':
                            jest[_0x31b03d(0x14e)]();
                            continue;
                        }
                        break;
                    }
                });
            });
        });
    });
});
