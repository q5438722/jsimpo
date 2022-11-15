const errors = require(_0x56f88f(253)), _ = require(_0x56f88f(254)), should = require(_0x56f88f(255)), sinon = require(_0x56f88f(256)), Promise = require(_0x56f88f(257)), validators = require(_0x56f88f(258));
function _0x5a21(_0x32e60d, _0x1d60bd) {
    return _0x5a21 = function (_0xe74127, _0x1b1b90) {
        _0xe74127 = _0xe74127 - (-9397 + 29 * -182 + 14917);
        let _0x2b5c9b = _0x2b41[_0xe74127];
        return _0x2b5c9b;
    }, _0x5a21(_0x32e60d, _0x1d60bd);
}
describe('Unit: canary/utils/validators/input/tags', function () {
    const _0x5373f6 = _0x56f88f, _0x44145e = {
            'bPGmP': 'ValidationError',
            'NfwVh': _0x5373f6(259),
            'JXHpW': function (_0x4a9e6f, _0xa16819, _0x451345) {
                return _0x4a9e6f(_0xa16819, _0x451345);
            },
            'qxafV': _0x5373f6(260),
            'uuiPy': _0x5373f6(261),
            'pdZYB': _0x5373f6(262),
            'kHkOz': _0x5373f6(263),
            'XSznU': _0x5373f6(264),
            'Yvgil': _0x5373f6(265),
            'kdNWM': 'tags',
            'vkKGE': _0x5373f6(266),
            'sKKuG': _0x5373f6(267),
            'UXzmK': _0x5373f6(268),
            'vQeLH': function (_0x2b6153, _0x2428a4, _0x34425e) {
                return _0x2b6153(_0x2428a4, _0x34425e);
            },
            'zHRSG': 'should fail with more than tags',
            'ogJCx': _0x5373f6(269),
            'rajDK': _0x5373f6(270),
            'NhPcs': function (_0x246055, _0x240775, _0x2dd10c) {
                return _0x246055(_0x240775, _0x2dd10c);
            },
            'OFGgZ': _0x5373f6(271),
            'WbplI': function (_0x175d40, _0x5af891) {
                return _0x175d40(_0x5af891);
            },
            'kOIiT': function (_0x1b3c67, _0x32d5b5, _0x2dc3fb) {
                return _0x1b3c67(_0x32d5b5, _0x2dc3fb);
            }
        };
    _0x44145e[_0x5373f6(272)](afterEach, function () {
        const _0x12609f = _0x5373f6;
        sinon[_0x12609f(273)]();
    }), _0x44145e[_0x5373f6(274)](describe, _0x5373f6(266), function () {
        const _0xd57a7c = _0x5373f6, _0x469694 = {
                'tdFpT': 'ValidationError',
                'bXcUE': _0x44145e['kHkOz'],
                'XuyqF': _0x44145e[_0xd57a7c(275)],
                'AxvdD': function (_0x4f536c, _0x33dc46) {
                    return _0x4f536c !== _0x33dc46;
                },
                'qKoUN': _0x44145e[_0xd57a7c(276)]
            }, _0x7d3faf = {
                'docName': _0x44145e[_0xd57a7c(277)],
                'method': _0x44145e[_0xd57a7c(278)]
            };
        _0x44145e['JXHpW'](describe, 'required fields', function () {
            const _0x34d5ae = _0xd57a7c, _0x547b57 = { 'jsoPr': _0x44145e[_0x34d5ae(279)] };
            it(_0x44145e['NfwVh'], function () {
                const _0x49d34a = _0x34d5ae, _0x4433b0 = { 'oPeRz': _0x469694[_0x49d34a(280)] }, _0x408326 = {
                        'options': {},
                        'data': {}
                    };
                return validators[_0x49d34a(281)][_0x49d34a(282)][_0x49d34a(266)](_0x7d3faf, _0x408326)[_0x49d34a(283)](Promise['reject'])[_0x49d34a(284)](_0x302b19 => {
                    const _0x17c211 = _0x49d34a;
                    _0x302b19[_0x17c211(285)][_0x17c211(255)]['equal'](_0x4433b0['oPeRz']);
                });
            }), _0x44145e['JXHpW'](it, _0x34d5ae(268), function () {
                const _0x44e232 = _0x34d5ae, _0x2d0112 = { 'ZawEv': _0x44e232(286) }, _0x234d4d = {
                        'options': {},
                        'data': { 'posts': [] }
                    };
                return validators[_0x44e232(281)][_0x44e232(282)][_0x44e232(266)](_0x7d3faf, _0x234d4d)['then'](Promise[_0x44e232(287)])[_0x44e232(284)](_0x28fd7c => {
                    const _0x566176 = _0x44e232;
                    _0x28fd7c[_0x566176(285)]['should'][_0x566176(288)](_0x2d0112['ZawEv']);
                });
            }), _0x44145e[_0x34d5ae(289)](it, _0x44145e['qxafV'], function () {
                const _0x481b2b = _0x34d5ae, _0x336971 = {
                        'options': {},
                        'data': { 'tags': [] }
                    };
                return validators[_0x481b2b(281)][_0x481b2b(282)]['add'](_0x7d3faf, _0x336971)[_0x481b2b(283)](Promise[_0x481b2b(287)])['catch'](_0x20830a => {
                    const _0x97de0e = _0x481b2b;
                    _0x20830a['errorType'][_0x97de0e(255)][_0x97de0e(288)](_0x547b57[_0x97de0e(290)]);
                });
            }), it('should fail with more than tags', function () {
                const _0x2415f4 = _0x34d5ae, _0x1138df = {
                        'options': {},
                        'data': {
                            'tags': [],
                            'posts': []
                        }
                    };
                return validators[_0x2415f4(281)]['tags'][_0x2415f4(266)](_0x7d3faf, _0x1138df)[_0x2415f4(283)](Promise[_0x2415f4(287)])[_0x2415f4(284)](_0x2ea302 => {
                    const _0x4e77a8 = _0x2415f4;
                    _0x2ea302['errorType']['should'][_0x4e77a8(288)](_0x4e77a8(286));
                });
            }), it(_0x44145e['uuiPy'], function () {
                const _0x116ec8 = _0x34d5ae, _0x1898e4 = {
                        'options': {},
                        'data': { 'tags': [{ 'what': _0x116ec8(291) }] }
                    };
                return validators[_0x116ec8(281)][_0x116ec8(282)][_0x116ec8(266)](_0x7d3faf, _0x1898e4)[_0x116ec8(283)](Promise['reject'])[_0x116ec8(284)](_0x32b533 => {
                    const _0xbdfc1b = _0x116ec8;
                    _0x32b533[_0xbdfc1b(285)][_0xbdfc1b(255)]['equal'](_0x547b57[_0xbdfc1b(290)]);
                });
            }), it('should pass with required fields', function () {
                const _0x4d5051 = _0x34d5ae, _0x12adcc = {
                        'options': {},
                        'data': { 'tags': [{ 'name': _0x469694[_0x4d5051(292)] }] }
                    };
                return validators['input']['tags'][_0x4d5051(266)](_0x7d3faf, _0x12adcc);
            }), _0x44145e[_0x34d5ae(289)](it, _0x44145e[_0x34d5ae(293)], function () {
                const _0x49e83e = _0x34d5ae, _0x4dc404 = {
                        'options': {},
                        'data': {
                            'tags': [{
                                    'name': _0x469694[_0x49e83e(292)],
                                    'parent': _0x469694[_0x49e83e(294)],
                                    'created_at': _0x469694[_0x49e83e(294)],
                                    'created_by': _0x469694[_0x49e83e(294)],
                                    'updated_at': _0x469694[_0x49e83e(294)],
                                    'updated_by': _0x469694['XuyqF']
                                }]
                        }
                    };
                let _0x179d2e = validators[_0x49e83e(281)][_0x49e83e(282)][_0x49e83e(266)](_0x7d3faf, _0x4dc404);
                return should['exist'](_0x4dc404['data']['tags'][944 + -2430 + 1486][_0x49e83e(295)]), should[_0x49e83e(296)]['exist'](_0x4dc404['data'][_0x49e83e(282)][-3239 + -6109 + 9348][_0x49e83e(297)]), should[_0x49e83e(296)][_0x49e83e(298)](_0x4dc404[_0x49e83e(299)]['tags'][-2914 * 1 + 3 * -2458 + 16 * 643][_0x49e83e(300)]), should['not'][_0x49e83e(298)](_0x4dc404[_0x49e83e(299)][_0x49e83e(282)][9549 + -4618 + -4931 * 1][_0x49e83e(301)]), should[_0x49e83e(296)]['exist'](_0x4dc404[_0x49e83e(299)]['tags'][-5631 + -1346 * -7 + 3791 * -1][_0x49e83e(302)]), should[_0x49e83e(296)]['exist'](_0x4dc404[_0x49e83e(299)]['tags'][2230 + -1 * 7214 + 4984][_0x49e83e(303)]), _0x179d2e;
            });
        }), describe(_0x44145e[_0xd57a7c(304)], function () {
            const _0x413ba4 = _0xd57a7c, _0x36216d = {
                    'name': [
                        1 * -8363 + -2119 + 10605,
                        new Date(),
                        _0x413ba4(305),
                        '',
                        _[_0x413ba4(306)]('a', -4160 + -1440 * -1 + 2912),
                        null
                    ],
                    'slug': [
                        1597 * 2 + 2657 * -1 + -23 * 18,
                        new Date(),
                        _[_0x413ba4(306)]('a', -903 * -1 + 5269 + -23 * 260)
                    ],
                    'description': [
                        -7126 + 233 + 7016 * 1,
                        new Date(),
                        _[_0x413ba4(306)]('a', -8727 + 9255 * -1 + 18483)
                    ],
                    'feature_image': [
                        -3752 + -102 * 89 + 12953,
                        new Date(),
                        _0x469694['qKoUN']
                    ],
                    'visibility': [
                        -596 * -8 + -3320 + 265 * -5,
                        new Date(),
                        _0x413ba4(307),
                        null
                    ],
                    'meta_title': [
                        -746 * 1 + -5 * -307 + -37 * 18,
                        new Date(),
                        _[_0x413ba4(306)]('a', 6678 + 4186 + -1 * 10563)
                    ],
                    'meta_description': [
                        -1 * 433 + 839 * -2 + -2 * -1117,
                        new Date(),
                        _[_0x413ba4(306)]('a', -6 * -1271 + 83 * 109 + 8086 * -2)
                    ]
                };
            Object['keys'](_0x36216d)[_0x413ba4(308)](_0x521698 => {
                const _0x2454c2 = _0x413ba4, _0x45cd89 = {
                        'NzjFi': _0x469694['tdFpT'],
                        'xqXUT': function (_0x1df18c, _0x4f0deb) {
                            return _0x469694['AxvdD'](_0x1df18c, _0x4f0deb);
                        },
                        'WtQTA': 'abc'
                    };
                it(_0x2454c2(309) + _0x521698, function () {
                    const _0x4c46a5 = _0x2454c2, _0x491c93 = _0x36216d[_0x521698], _0x1189e2 = _0x491c93[_0x4c46a5(310)](_0x30d4ac => {
                            const _0x38d62e = _0x4c46a5, _0x58a034 = { 'XxFlb': _0x45cd89['NzjFi'] }, _0x359eb0 = {};
                            _0x359eb0[_0x521698] = _0x30d4ac;
                            _0x45cd89[_0x38d62e(311)](_0x521698, _0x38d62e(295)) && (_0x359eb0[_0x38d62e(295)] = _0x45cd89['WtQTA']);
                            const _0x10db7f = {
                                'options': {},
                                'data': { 'tags': [_0x359eb0] }
                            };
                            return validators['input'][_0x38d62e(282)][_0x38d62e(266)](_0x7d3faf, _0x10db7f)[_0x38d62e(283)](Promise[_0x38d62e(287)])[_0x38d62e(284)](_0xef5db => {
                                const _0x1deb8e = _0x38d62e;
                                _0xef5db[_0x1deb8e(285)][_0x1deb8e(255)][_0x1deb8e(288)](_0x58a034[_0x1deb8e(312)]);
                            });
                        });
                    return Promise[_0x4c46a5(313)](_0x1189e2);
                });
            });
        });
    }), _0x44145e[_0x5373f6(274)](describe, _0x44145e[_0x5373f6(314)], function () {
        const _0x337a28 = _0x5373f6, _0x4f779d = {
                'bvEcx': _0x44145e[_0x337a28(315)],
                'bbwmr': _0x44145e[_0x337a28(316)],
                'NSadb': _0x44145e[_0x337a28(317)],
                'THDKJ': function (_0x807bd2, _0x680188, _0x19f225) {
                    return _0x44145e['vQeLH'](_0x807bd2, _0x680188, _0x19f225);
                },
                'EPxev': _0x44145e['zHRSG'],
                'ZYsWX': _0x44145e['ogJCx']
            }, _0x5613e5 = {
                'docName': _0x44145e[_0x337a28(277)],
                'method': _0x44145e[_0x337a28(314)]
            };
        _0x44145e[_0x337a28(318)](describe, _0x44145e['OFGgZ'], function () {
            const _0x1d4874 = _0x337a28, _0x20796f = { 'nRzLL': _0x1d4874(286) };
            it(_0x4f779d[_0x1d4874(319)], function () {
                const _0x3ba9df = _0x1d4874, _0x1f7963 = { 'mEqWq': 'ValidationError' }, _0x549fbb = {
                        'options': {},
                        'data': {}
                    };
                return validators[_0x3ba9df(281)][_0x3ba9df(282)][_0x3ba9df(270)](_0x5613e5, _0x549fbb)[_0x3ba9df(283)](Promise['reject'])[_0x3ba9df(284)](_0x384847 => {
                    const _0x4d7793 = _0x3ba9df;
                    _0x384847['errorType'][_0x4d7793(255)][_0x4d7793(288)](_0x1f7963[_0x4d7793(320)]);
                });
            }), it(_0x4f779d[_0x1d4874(321)], function () {
                const _0x297b61 = _0x1d4874, _0x1e548a = { 'QHdaE': _0x20796f[_0x297b61(322)] }, _0x2744aa = {
                        'options': {},
                        'data': { 'posts': [] }
                    };
                return validators[_0x297b61(281)][_0x297b61(282)][_0x297b61(270)](_0x5613e5, _0x2744aa)['then'](Promise[_0x297b61(287)])['catch'](_0x53be4b => {
                    const _0x453d6c = _0x297b61;
                    _0x53be4b[_0x453d6c(285)][_0x453d6c(255)][_0x453d6c(288)](_0x1e548a[_0x453d6c(323)]);
                });
            }), _0x4f779d[_0x1d4874(324)](it, _0x4f779d[_0x1d4874(325)], function () {
                const _0x105e3f = _0x1d4874, _0x465dd3 = { 'cgMex': _0x105e3f(286) }, _0x349622 = {
                        'options': {},
                        'data': {
                            'tags': [],
                            'posts': []
                        }
                    };
                return validators['input'][_0x105e3f(282)][_0x105e3f(270)](_0x5613e5, _0x349622)['then'](Promise[_0x105e3f(287)])[_0x105e3f(284)](_0x4a1692 => {
                    const _0x5f0f56 = _0x105e3f;
                    _0x4a1692[_0x5f0f56(285)]['should'][_0x5f0f56(288)](_0x465dd3['cgMex']);
                });
            }), it(_0x4f779d[_0x1d4874(326)], function () {
                const _0x108e39 = _0x1d4874, _0x4eae54 = {
                        'options': {},
                        'data': { 'tags': [{ 'name': _0x4f779d[_0x108e39(327)] }] }
                    };
                return validators[_0x108e39(281)][_0x108e39(282)][_0x108e39(270)](_0x5613e5, _0x4eae54);
            });
        });
    });
});