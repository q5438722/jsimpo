const should = require('should'), sinon = require(_0x340dad(149)), urlService = require(_0x340dad(150)), helpers = require('../../../core/frontend/helpers'), models = require(_0x340dad(151)), testUtils = require(_0x340dad(152));
describe(_0x340dad(153), function () {
    const _0x4dd480 = _0x340dad, _0x2d92f3 = {
            'fKGKR': 'getUrlByResourceId',
            'BgpAI': _0x4dd480(154),
            'qiKtD': function (_0x3fcd66, _0x2b83a6) {
                return _0x3fcd66(_0x2b83a6);
            },
            'YhKdR': _0x4dd480(155),
            'aacNG': 'John O\'Nolan',
            'gjRhY': _0x4dd480(156),
            'qmxTx': _0x4dd480(157),
            'qwJLH': _0x4dd480(158),
            'iggCz': _0x4dd480(159),
            'FEjjQ': _0x4dd480(160),
            'OmJck': _0x4dd480(161),
            'AglqX': _0x4dd480(162),
            'enSyV': _0x4dd480(163),
            'HOBLe': function (_0xab3a1a, _0x5c7310) {
                return _0xab3a1a(_0x5c7310);
            },
            'nqhOb': _0x4dd480(164),
            'YBaLY': 'on haunted, ghost forever',
            'qjrAM': _0x4dd480(165),
            'rgDvl': _0x4dd480(166),
            'hYeJz': '&hellip; haunted, ghost &bull;',
            'LjcDv': function (_0x471c6d, _0x2876d4) {
                return _0x471c6d(_0x2876d4);
            },
            'PiaSP': _0x4dd480(167),
            'SXqLu': 'foo-bar',
            'rsBVM': _0x4dd480(168),
            'cMrly': 'author url 2',
            'JRRJz': function (_0x3e7656, _0x515f85) {
                return _0x3e7656(_0x515f85);
            },
            'OAykB': function (_0x39f997, _0x1376f3) {
                return _0x39f997(_0x1376f3);
            },
            'OGRYy': _0x4dd480(169),
            'SDMiW': _0x4dd480(170),
            'pGlrY': _0x4dd480(171),
            'cUrtD': 'author url 3',
            'mZOEj': function (_0x251799, _0x5f5443) {
                return _0x251799(_0x5f5443);
            },
            'AjvIV': _0x4dd480(172),
            'IyzfG': _0x4dd480(173),
            'cpVVJ': _0x4dd480(174),
            'hBcZD': 'author url b',
            'vroom': _0x4dd480(175),
            'yLnmN': '<a href="author url a">foo</a>, <a href="author url b">bar</a>, <a href="author url c">baz</a>',
            'haJml': function (_0x464744, _0x5c5ad7, _0xc426c6) {
                return _0x464744(_0x5c5ad7, _0xc426c6);
            },
            'YcyQG': _0x4dd480(176),
            'GsSIP': 'can return string with authors with special chars',
            'Echwc': _0x4dd480(177),
            'ZBiLa': 'can add a single suffix to multiple authors',
            'CeovO': _0x4dd480(178),
            'KFSOT': function (_0xdc1673, _0x265121, _0x26fc70) {
                return _0xdc1673(_0x265121, _0x26fc70);
            },
            'vJOvQ': function (_0x5dd114, _0x293a7c, _0x2821f2) {
                return _0x5dd114(_0x293a7c, _0x2821f2);
            },
            'tHkuN': _0x4dd480(179),
            'gJYwj': _0x4dd480(180),
            'BkgTk': _0x4dd480(181),
            'lxPvz': function (_0x44124f, _0x4da71f, _0x10ab9d) {
                return _0x44124f(_0x4da71f, _0x10ab9d);
            },
            'ankBL': _0x4dd480(182),
            'hAwNI': 'can limit no. authors and output from 2',
            'nOeBc': _0x4dd480(183)
        };
    before(function () {
        const _0x3a7b83 = _0x4dd480;
        models[_0x3a7b83(184)]();
    }), beforeEach(function () {
        const _0x1f580d = _0x4dd480;
        sinon[_0x1f580d(185)](urlService, _0x2d92f3[_0x1f580d(186)]);
    }), _0x2d92f3[_0x4dd480(187)](afterEach, function () {
        const _0x51142b = _0x4dd480;
        sinon[_0x51142b(188)]();
    }), _0x2d92f3['haJml'](it, _0x2d92f3[_0x4dd480(189)], function () {
        const _0x4f4743 = _0x4dd480, _0x2ba00f = [
                testUtils[_0x4f4743(190)][_0x4f4743(191)][_0x4f4743(192)]({ 'name': _0x4f4743(193) }),
                testUtils[_0x4f4743(190)][_0x4f4743(191)]['createUser']({ 'name': 'Thomas' })
            ], _0x727aa9 = helpers[_0x4f4743(194)][_0x4f4743(195)]({ 'authors': _0x2ba00f }, { 'hash': { 'autolink': _0x2d92f3[_0x4f4743(196)] } });
        should[_0x4f4743(197)](_0x727aa9), _0x2d92f3[_0x4f4743(198)](String, _0x727aa9)['should'][_0x4f4743(199)](_0x2d92f3['YhKdR']);
    }), _0x2d92f3[_0x4dd480(200)](it, _0x2d92f3['GsSIP'], function () {
        const _0x14bcfe = _0x4dd480, _0x50cefa = [
                testUtils[_0x14bcfe(190)][_0x14bcfe(191)][_0x14bcfe(192)]({ 'name': _0x2d92f3['aacNG'] }),
                testUtils[_0x14bcfe(190)][_0x14bcfe(191)][_0x14bcfe(192)]({ 'name': _0x2d92f3[_0x14bcfe(201)] })
            ], _0x5e983a = helpers[_0x14bcfe(194)][_0x14bcfe(195)]({ 'authors': _0x50cefa }, { 'hash': { 'autolink': _0x2d92f3[_0x14bcfe(196)] } });
        should[_0x14bcfe(197)](_0x5e983a), String(_0x5e983a)[_0x14bcfe(202)]['equal'](_0x2d92f3[_0x14bcfe(203)]);
    }), _0x2d92f3[_0x4dd480(200)](it, _0x2d92f3['Echwc'], function () {
        const _0x583bec = _0x4dd480, _0x5a5bd8 = [
                testUtils[_0x583bec(190)][_0x583bec(191)][_0x583bec(192)]({ 'name': _0x2d92f3[_0x583bec(204)] }),
                testUtils[_0x583bec(190)][_0x583bec(191)]['createUser']({ 'name': _0x583bec(160) })
            ], _0x4fc8c2 = helpers[_0x583bec(194)]['call']({ 'authors': _0x5a5bd8 }, {
                'hash': {
                    'separator': '|',
                    'autolink': _0x2d92f3[_0x583bec(196)]
                }
            });
        should[_0x583bec(197)](_0x4fc8c2), _0x2d92f3[_0x583bec(198)](String, _0x4fc8c2)['should'][_0x583bec(199)](_0x2d92f3['iggCz']);
    }), it(_0x4dd480(205), function () {
        const _0x17e518 = _0x4dd480, _0x2cc43c = [
                testUtils[_0x17e518(190)][_0x17e518(191)]['createUser']({ 'name': _0x17e518(158) }),
                testUtils[_0x17e518(190)][_0x17e518(191)][_0x17e518(192)]({ 'name': _0x2d92f3['FEjjQ'] })
            ], _0x44ddc4 = helpers[_0x17e518(194)][_0x17e518(195)]({ 'authors': _0x2cc43c }, {
                'hash': {
                    'prefix': _0x2d92f3[_0x17e518(206)],
                    'autolink': _0x2d92f3[_0x17e518(196)]
                }
            });
        should[_0x17e518(197)](_0x44ddc4), String(_0x44ddc4)[_0x17e518(202)][_0x17e518(199)](_0x2d92f3['AglqX']);
    }), _0x2d92f3['haJml'](it, _0x2d92f3[_0x4dd480(207)], function () {
        const _0x2bb8f3 = _0x4dd480, _0x4a7664 = [
                testUtils['DataGenerator']['forKnex'][_0x2bb8f3(192)]({ 'name': _0x2d92f3[_0x2bb8f3(204)] }),
                testUtils[_0x2bb8f3(190)][_0x2bb8f3(191)][_0x2bb8f3(192)]({ 'name': _0x2bb8f3(160) })
            ], _0x591f19 = helpers['authors'][_0x2bb8f3(195)]({ 'authors': _0x4a7664 }, {
                'hash': {
                    'suffix': _0x2d92f3['enSyV'],
                    'autolink': _0x2d92f3['BgpAI']
                }
            });
        should[_0x2bb8f3(197)](_0x591f19), _0x2d92f3[_0x2bb8f3(208)](String, _0x591f19)[_0x2bb8f3(202)]['equal'](_0x2d92f3[_0x2bb8f3(209)]);
    }), it(_0x4dd480(210), function () {
        const _0x308324 = _0x4dd480, _0x2fefe6 = [
                testUtils['DataGenerator'][_0x308324(191)][_0x308324(192)]({ 'name': _0x2d92f3[_0x308324(204)] }),
                testUtils['DataGenerator'][_0x308324(191)][_0x308324(192)]({ 'name': _0x308324(160) })
            ], _0x130e3b = helpers[_0x308324(194)][_0x308324(195)]({ 'authors': _0x2fefe6 }, {
                'hash': {
                    'suffix': ' forever',
                    'prefix': _0x2d92f3[_0x308324(206)],
                    'autolink': _0x2d92f3[_0x308324(196)]
                }
            });
        should[_0x308324(197)](_0x130e3b), _0x2d92f3[_0x308324(208)](String, _0x130e3b)[_0x308324(202)][_0x308324(199)](_0x2d92f3[_0x308324(211)]);
    }), _0x2d92f3[_0x4dd480(200)](it, _0x2d92f3[_0x4dd480(212)], function () {
        const _0x5231f7 = _0x4dd480, _0x587703 = [
                testUtils[_0x5231f7(190)][_0x5231f7(191)][_0x5231f7(192)]({ 'name': 'haunted' }),
                testUtils['DataGenerator']['forKnex'][_0x5231f7(192)]({ 'name': _0x5231f7(160) })
            ], _0x382447 = helpers[_0x5231f7(194)][_0x5231f7(195)]({ 'authors': _0x587703 }, {
                'hash': {
                    'suffix': _0x2d92f3[_0x5231f7(213)],
                    'prefix': _0x2d92f3[_0x5231f7(214)],
                    'autolink': _0x5231f7(154)
                }
            });
        should['exist'](_0x382447), _0x2d92f3[_0x5231f7(208)](String, _0x382447)[_0x5231f7(202)][_0x5231f7(199)](_0x2d92f3[_0x5231f7(215)]);
    }), _0x2d92f3[_0x4dd480(216)](it, _0x4dd480(217), function () {
        const _0x16c5b4 = _0x4dd480, _0x2299fd = helpers[_0x16c5b4(194)][_0x16c5b4(195)]({}, {
                'hash': {
                    'prefix': _0x2d92f3[_0x16c5b4(206)],
                    'suffix': _0x2d92f3['enSyV'],
                    'autolink': 'false'
                }
            });
        should[_0x16c5b4(197)](_0x2299fd), _0x2d92f3[_0x16c5b4(218)](String, _0x2299fd)['should'][_0x16c5b4(199)]('');
    }), _0x2d92f3[_0x4dd480(219)](it, _0x2d92f3[_0x4dd480(220)], function () {
        const _0x22951e = _0x4dd480, _0x334f56 = [
                testUtils[_0x22951e(190)][_0x22951e(191)]['createUser']({
                    'name': _0x2d92f3[_0x22951e(221)],
                    'slug': _0x2d92f3[_0x22951e(222)]
                }),
                testUtils[_0x22951e(190)][_0x22951e(191)]['createUser']({
                    'name': _0x2d92f3['rsBVM'],
                    'slug': 'bar'
                })
            ];
        urlService[_0x22951e(223)]['withArgs'](_0x334f56[-5923 * 1 + 9330 + -3407 * 1]['id'])[_0x22951e(224)](_0x22951e(225)), urlService['getUrlByResourceId'][_0x22951e(226)](_0x334f56[-2350 + 4608 + 1 * -2257]['id'])['returns'](_0x2d92f3[_0x22951e(227)]);
        const _0x260ca3 = helpers[_0x22951e(194)]['call']({ 'authors': _0x334f56 });
        should[_0x22951e(197)](_0x260ca3), _0x2d92f3[_0x22951e(228)](String, _0x260ca3)[_0x22951e(202)][_0x22951e(199)](_0x22951e(229));
    }), _0x2d92f3[_0x4dd480(219)](it, _0x2d92f3[_0x4dd480(230)], function () {
        const _0x38205d = _0x4dd480, _0x4746f9 = [
                testUtils[_0x38205d(190)][_0x38205d(191)][_0x38205d(192)]({
                    'name': _0x2d92f3[_0x38205d(221)],
                    'slug': _0x2d92f3[_0x38205d(222)]
                }),
                testUtils[_0x38205d(190)][_0x38205d(191)][_0x38205d(192)]({
                    'name': _0x38205d(168),
                    'slug': _0x2d92f3[_0x38205d(231)]
                })
            ];
        urlService['getUrlByResourceId'][_0x38205d(226)](_0x4746f9[-3 * -1546 + 178 * -26 + 1 * -10]['id'])['returns'](_0x38205d(225));
        const _0x948a0a = helpers['authors']['call']({ 'authors': _0x4746f9 }, { 'hash': { 'limit': '1' } });
        should[_0x38205d(197)](_0x948a0a), String(_0x948a0a)[_0x38205d(202)][_0x38205d(199)](_0x38205d(232));
    }), _0x2d92f3[_0x4dd480(219)](it, _0x2d92f3[_0x4dd480(233)], function () {
        const _0x44eb07 = _0x4dd480, _0x5b05a6 = [
                testUtils['DataGenerator']['forKnex'][_0x44eb07(192)]({
                    'name': _0x2d92f3[_0x44eb07(221)],
                    'slug': _0x2d92f3[_0x44eb07(222)]
                }),
                testUtils['DataGenerator'][_0x44eb07(191)][_0x44eb07(192)]({
                    'name': _0x44eb07(168),
                    'slug': _0x2d92f3[_0x44eb07(231)]
                })
            ];
        urlService[_0x44eb07(223)][_0x44eb07(226)](_0x5b05a6[4862 + 2 * -1534 + -1793]['id'])[_0x44eb07(224)](_0x2d92f3['cMrly']);
        const _0x3cfd65 = helpers[_0x44eb07(194)][_0x44eb07(195)]({ 'authors': _0x5b05a6 }, { 'hash': { 'from': '2' } });
        should[_0x44eb07(197)](_0x3cfd65), _0x2d92f3[_0x44eb07(234)](String, _0x3cfd65)[_0x44eb07(202)][_0x44eb07(199)](_0x2d92f3[_0x44eb07(235)]);
    }), _0x2d92f3[_0x4dd480(236)](it, _0x4dd480(237), function () {
        const _0x4d3b58 = _0x4dd480, _0x13fc9e = [
                testUtils['DataGenerator'][_0x4d3b58(191)][_0x4d3b58(192)]({
                    'name': _0x2d92f3[_0x4d3b58(221)],
                    'slug': _0x2d92f3[_0x4d3b58(222)]
                }),
                testUtils[_0x4d3b58(190)]['forKnex'][_0x4d3b58(192)]({
                    'name': _0x2d92f3[_0x4d3b58(231)],
                    'slug': _0x2d92f3[_0x4d3b58(231)]
                })
            ];
        urlService[_0x4d3b58(223)][_0x4d3b58(226)](_0x13fc9e[9 * -1 + -2 * -4613 + -9217]['id'])[_0x4d3b58(224)](_0x2d92f3['SDMiW']);
        const _0x137324 = helpers['authors'][_0x4d3b58(195)]({ 'authors': _0x13fc9e }, { 'hash': { 'to': '1' } });
        should['exist'](_0x137324), _0x2d92f3[_0x4d3b58(234)](String, _0x137324)['should'][_0x4d3b58(199)](_0x4d3b58(238));
    }), it(_0x2d92f3[_0x4dd480(239)], function () {
        const _0x1fb1f2 = _0x4dd480, _0x740e73 = [
                testUtils[_0x1fb1f2(190)][_0x1fb1f2(191)][_0x1fb1f2(192)]({
                    'name': _0x2d92f3['PiaSP'],
                    'slug': _0x2d92f3[_0x1fb1f2(222)]
                }),
                testUtils[_0x1fb1f2(190)][_0x1fb1f2(191)][_0x1fb1f2(192)]({
                    'name': _0x2d92f3['rsBVM'],
                    'slug': _0x2d92f3[_0x1fb1f2(231)]
                }),
                testUtils['DataGenerator'][_0x1fb1f2(191)][_0x1fb1f2(192)]({
                    'name': _0x2d92f3[_0x1fb1f2(240)],
                    'slug': _0x2d92f3[_0x1fb1f2(240)]
                })
            ];
        urlService['getUrlByResourceId'][_0x1fb1f2(226)](_0x740e73[-3282 + -1 * -4133 + -170 * 5]['id'])[_0x1fb1f2(224)](_0x2d92f3[_0x1fb1f2(227)]), urlService[_0x1fb1f2(223)][_0x1fb1f2(226)](_0x740e73[9697 + 271 * -5 + -8340]['id'])[_0x1fb1f2(224)](_0x2d92f3[_0x1fb1f2(241)]);
        const _0x77202b = helpers['authors']['call']({ 'authors': _0x740e73 }, {
            'hash': {
                'from': '2',
                'to': '3'
            }
        });
        should[_0x1fb1f2(197)](_0x77202b), _0x2d92f3[_0x1fb1f2(187)](String, _0x77202b)[_0x1fb1f2(202)][_0x1fb1f2(199)](_0x2d92f3[_0x1fb1f2(242)]);
    }), it(_0x2d92f3[_0x4dd480(243)], function () {
        const _0x18682b = _0x4dd480, _0x2f1e6e = [
                testUtils['DataGenerator'][_0x18682b(191)]['createUser']({
                    'name': _0x2d92f3['PiaSP'],
                    'slug': _0x18682b(244)
                }),
                testUtils['DataGenerator'][_0x18682b(191)]['createUser']({
                    'name': _0x2d92f3[_0x18682b(231)],
                    'slug': _0x18682b(168)
                }),
                testUtils[_0x18682b(190)][_0x18682b(191)]['createUser']({
                    'name': _0x2d92f3[_0x18682b(240)],
                    'slug': _0x18682b(171)
                })
            ];
        urlService['getUrlByResourceId'][_0x18682b(226)](_0x2f1e6e[1 * -9742 + 2449 * 1 + 7294]['id'])[_0x18682b(224)](_0x18682b(245));
        const _0x281fe8 = helpers['authors'][_0x18682b(195)]({ 'authors': _0x2f1e6e }, {
            'hash': {
                'from': '2',
                'limit': '1'
            }
        });
        should[_0x18682b(197)](_0x281fe8), String(_0x281fe8)[_0x18682b(202)][_0x18682b(199)](_0x2d92f3['IyzfG']);
    }), _0x2d92f3[_0x4dd480(236)](it, _0x2d92f3['nOeBc'], function () {
        const _0x28eca3 = _0x4dd480, _0x2cc247 = [
                testUtils[_0x28eca3(190)][_0x28eca3(191)][_0x28eca3(192)]({
                    'name': _0x2d92f3[_0x28eca3(221)],
                    'slug': _0x28eca3(244)
                }),
                testUtils[_0x28eca3(190)]['forKnex'][_0x28eca3(192)]({
                    'name': _0x2d92f3[_0x28eca3(231)],
                    'slug': _0x2d92f3[_0x28eca3(231)]
                }),
                testUtils['DataGenerator']['forKnex']['createUser']({
                    'name': _0x2d92f3[_0x28eca3(240)],
                    'slug': _0x2d92f3[_0x28eca3(240)]
                })
            ];
        urlService['getUrlByResourceId']['withArgs'](_0x2cc247[-1 * 13 + -6587 + -75 * -88]['id'])[_0x28eca3(224)](_0x2d92f3[_0x28eca3(246)]), urlService[_0x28eca3(223)][_0x28eca3(226)](_0x2cc247[3287 * 3 + 3108 + -12968]['id'])[_0x28eca3(224)](_0x2d92f3[_0x28eca3(247)]), urlService[_0x28eca3(223)][_0x28eca3(226)](_0x2cc247[3639 * -1 + 1343 + 3 * 766]['id'])[_0x28eca3(224)](_0x2d92f3[_0x28eca3(248)]);
        const _0x1d2066 = helpers[_0x28eca3(194)][_0x28eca3(195)]({ 'authors': _0x2cc247 }, {
            'hash': {
                'from': '1',
                'to': '3',
                'limit': '2'
            }
        });
        should['exist'](_0x1d2066), _0x2d92f3['mZOEj'](String, _0x1d2066)[_0x28eca3(202)]['equal'](_0x2d92f3['yLnmN']);
    });
});