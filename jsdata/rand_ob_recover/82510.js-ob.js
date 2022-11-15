const should = require('should'), sinon = require(_0x30a0f9(452)), urlService = require(_0x30a0f9(453)), helpers = require(_0x30a0f9(454)), models = require(_0x30a0f9(455)), testUtils = require('../../utils');
describe(_0x30a0f9(456), function () {
    const _0xc73197 = _0x30a0f9, _0xe224ba = {
            'mUdhb': _0xc73197(457),
            'CwcCQ': _0xc73197(458),
            'wycXS': 'Thomas',
            'MyCmS': 'false',
            'DDYHF': function (_0x3088b3, _0x2a6b24) {
                return _0x3088b3(_0x2a6b24);
            },
            'fWWyU': _0xc73197(459),
            'sXCWN': _0xc73197(460),
            'xRUKo': _0xc73197(461),
            'fCTOW': _0xc73197(462),
            'JYoxn': 'ghost',
            'BKdFT': ' forever',
            'JdSLS': function (_0x4653b2, _0x5f266d) {
                return _0x4653b2(_0x5f266d);
            },
            'TonGR': _0xc73197(463),
            'hOzbH': _0xc73197(464),
            'JVxiM': _0xc73197(465),
            'DXuRQ': '&hellip; ',
            'lGpZd': _0xc73197(466),
            'THMIW': 'foo',
            'FbvYI': 'foo-bar',
            'TORhJ': _0xc73197(467),
            'qObpx': 'author url 1',
            'JkTqP': 'author url 2',
            'INsqv': _0xc73197(468),
            'ILrSO': function (_0x21673a, _0xc67fc3) {
                return _0x21673a(_0xc67fc3);
            },
            'zbHqf': _0xc73197(469),
            'hAZcq': _0xc73197(470),
            'xPPye': 'baz',
            'OmiMF': _0xc73197(471),
            'nBgUZ': _0xc73197(472),
            'BMAlQ': _0xc73197(473),
            'LKLBm': _0xc73197(474),
            'DrFDL': 'author url b',
            'IITep': _0xc73197(475),
            'MOfQU': function (_0x172872, _0x2a62bb) {
                return _0x172872(_0x2a62bb);
            },
            'mPIQi': _0xc73197(476),
            'hlbNm': function (_0x5996ee, _0x1bb6be) {
                return _0x5996ee(_0x1bb6be);
            },
            'Coylu': function (_0x157b46, _0x5aef1f, _0x212a12) {
                return _0x157b46(_0x5aef1f, _0x212a12);
            },
            'uZQFZ': _0xc73197(477),
            'muSRq': _0xc73197(478),
            'YGlJK': 'can add a single prefix to multiple authors',
            'UvLeC': function (_0x532f19, _0x12c62f, _0x342adb) {
                return _0x532f19(_0x12c62f, _0x342adb);
            },
            'XtcTb': 'can add a prefix and suffix to multiple authors',
            'DGiRw': function (_0x1e67a0, _0x5a51d9, _0x35e093) {
                return _0x1e67a0(_0x5a51d9, _0x35e093);
            },
            'GTAvb': 'can add a prefix and suffix with HTML',
            'FZwZc': _0xc73197(479),
            'jxTgL': 'can autolink authors to author pages',
            'uJDZD': _0xc73197(480),
            'kqwwr': 'can list authors to a specified no.',
            'TRJhf': function (_0x1ab087, _0x19d058, _0x106ee9) {
                return _0x1ab087(_0x19d058, _0x106ee9);
            },
            'GlmbR': _0xc73197(481),
            'hNkmQ': _0xc73197(482)
        };
    before(function () {
        models['init']();
    }), beforeEach(function () {
        const _0x4f09c6 = _0xc73197;
        sinon[_0x4f09c6(483)](urlService, _0xe224ba[_0x4f09c6(484)]);
    }), _0xe224ba[_0xc73197(485)](afterEach, function () {
        sinon['restore']();
    }), _0xe224ba[_0xc73197(486)](it, _0xe224ba[_0xc73197(487)], function () {
        const _0x3b231c = _0xc73197, _0x2b84be = [
                testUtils['DataGenerator'][_0x3b231c(488)][_0x3b231c(489)]({ 'name': _0xe224ba['CwcCQ'] }),
                testUtils[_0x3b231c(490)]['forKnex']['createUser']({ 'name': _0xe224ba[_0x3b231c(491)] })
            ], _0x5ae449 = helpers['authors']['call']({ 'authors': _0x2b84be }, { 'hash': { 'autolink': _0xe224ba['MyCmS'] } });
        should[_0x3b231c(492)](_0x5ae449), _0xe224ba[_0x3b231c(493)](String, _0x5ae449)[_0x3b231c(494)]['equal'](_0xe224ba['fWWyU']);
    }), it(_0xc73197(495), function () {
        const _0x199609 = _0xc73197, _0x160a4e = [
                testUtils[_0x199609(490)][_0x199609(488)][_0x199609(489)]({ 'name': _0x199609(496) }),
                testUtils['DataGenerator'][_0x199609(488)][_0x199609(489)]({ 'name': _0xe224ba['sXCWN'] })
            ], _0x3d7c34 = helpers[_0x199609(497)]['call']({ 'authors': _0x160a4e }, { 'hash': { 'autolink': _0xe224ba[_0x199609(498)] } });
        should['exist'](_0x3d7c34), String(_0x3d7c34)['should'][_0x199609(499)](_0xe224ba[_0x199609(500)]);
    }), _0xe224ba[_0xc73197(486)](it, _0xe224ba[_0xc73197(501)], function () {
        const _0x3c7c74 = _0xc73197, _0x137b8f = [
                testUtils[_0x3c7c74(490)][_0x3c7c74(488)][_0x3c7c74(489)]({ 'name': _0xe224ba[_0x3c7c74(502)] }),
                testUtils['DataGenerator'][_0x3c7c74(488)][_0x3c7c74(489)]({ 'name': _0xe224ba['JYoxn'] })
            ], _0x307166 = helpers[_0x3c7c74(497)]['call']({ 'authors': _0x137b8f }, {
                'hash': {
                    'separator': '|',
                    'autolink': _0xe224ba[_0x3c7c74(498)]
                }
            });
        should[_0x3c7c74(492)](_0x307166), _0xe224ba[_0x3c7c74(493)](String, _0x307166)[_0x3c7c74(494)]['equal'](_0x3c7c74(503));
    }), _0xe224ba['Coylu'](it, _0xe224ba[_0xc73197(504)], function () {
        const _0x49e3da = _0xc73197, _0x162de1 = [
                testUtils[_0x49e3da(490)][_0x49e3da(488)][_0x49e3da(489)]({ 'name': _0x49e3da(462) }),
                testUtils['DataGenerator']['forKnex'][_0x49e3da(489)]({ 'name': _0xe224ba['JYoxn'] })
            ], _0x5d4b49 = helpers[_0x49e3da(497)][_0x49e3da(505)]({ 'authors': _0x162de1 }, {
                'hash': {
                    'prefix': _0x49e3da(466),
                    'autolink': _0xe224ba[_0x49e3da(498)]
                }
            });
        should[_0x49e3da(492)](_0x5d4b49), _0xe224ba[_0x49e3da(493)](String, _0x5d4b49)[_0x49e3da(494)][_0x49e3da(499)]('on haunted, ghost');
    }), _0xe224ba[_0xc73197(506)](it, _0xc73197(507), function () {
        const _0x213a38 = _0xc73197, _0x3a8cd6 = [
                testUtils[_0x213a38(490)][_0x213a38(488)]['createUser']({ 'name': _0xe224ba['fCTOW'] }),
                testUtils['DataGenerator']['forKnex']['createUser']({ 'name': _0xe224ba[_0x213a38(508)] })
            ], _0x6f3717 = helpers[_0x213a38(497)][_0x213a38(505)]({ 'authors': _0x3a8cd6 }, {
                'hash': {
                    'suffix': _0xe224ba[_0x213a38(509)],
                    'autolink': _0xe224ba[_0x213a38(498)]
                }
            });
        should[_0x213a38(492)](_0x6f3717), _0xe224ba[_0x213a38(510)](String, _0x6f3717)['should'][_0x213a38(499)](_0xe224ba[_0x213a38(511)]);
    }), _0xe224ba['UvLeC'](it, _0xe224ba[_0xc73197(512)], function () {
        const _0x277bdb = _0xc73197, _0x19a9e5 = [
                testUtils[_0x277bdb(490)][_0x277bdb(488)][_0x277bdb(489)]({ 'name': _0xe224ba[_0x277bdb(502)] }),
                testUtils[_0x277bdb(490)]['forKnex'][_0x277bdb(489)]({ 'name': _0x277bdb(513) })
            ], _0x65a625 = helpers[_0x277bdb(497)][_0x277bdb(505)]({ 'authors': _0x19a9e5 }, {
                'hash': {
                    'suffix': _0x277bdb(514),
                    'prefix': 'on ',
                    'autolink': 'false'
                }
            });
        should[_0x277bdb(492)](_0x65a625), String(_0x65a625)[_0x277bdb(494)]['equal'](_0xe224ba['hOzbH']);
    }), _0xe224ba[_0xc73197(515)](it, _0xe224ba[_0xc73197(516)], function () {
        const _0x4b7585 = _0xc73197, _0x2855cb = [
                testUtils[_0x4b7585(490)]['forKnex']['createUser']({ 'name': _0xe224ba['fCTOW'] }),
                testUtils[_0x4b7585(490)][_0x4b7585(488)][_0x4b7585(489)]({ 'name': _0xe224ba[_0x4b7585(508)] })
            ], _0x442300 = helpers['authors']['call']({ 'authors': _0x2855cb }, {
                'hash': {
                    'suffix': _0xe224ba[_0x4b7585(517)],
                    'prefix': _0xe224ba[_0x4b7585(518)],
                    'autolink': _0xe224ba[_0x4b7585(498)]
                }
            });
        should[_0x4b7585(492)](_0x442300), _0xe224ba['JdSLS'](String, _0x442300)['should'][_0x4b7585(499)]('&hellip; haunted, ghost &bull;');
    }), _0xe224ba[_0xc73197(515)](it, _0xe224ba['FZwZc'], function () {
        const _0x334acb = _0xc73197, _0x270ce4 = helpers['authors'][_0x334acb(505)]({}, {
                'hash': {
                    'prefix': _0xe224ba[_0x334acb(519)],
                    'suffix': _0xe224ba[_0x334acb(509)],
                    'autolink': _0xe224ba['MyCmS']
                }
            });
        should[_0x334acb(492)](_0x270ce4), String(_0x270ce4)[_0x334acb(494)][_0x334acb(499)]('');
    }), _0xe224ba['DGiRw'](it, _0xe224ba['jxTgL'], function () {
        const _0x3d6b89 = _0xc73197, _0x1d9531 = [
                testUtils['DataGenerator']['forKnex']['createUser']({
                    'name': _0xe224ba['THMIW'],
                    'slug': _0xe224ba[_0x3d6b89(520)]
                }),
                testUtils[_0x3d6b89(490)][_0x3d6b89(488)][_0x3d6b89(489)]({
                    'name': _0xe224ba[_0x3d6b89(521)],
                    'slug': _0xe224ba[_0x3d6b89(521)]
                })
            ];
        urlService[_0x3d6b89(457)][_0x3d6b89(522)](_0x1d9531[288 * 3 + -7648 + 6784]['id'])[_0x3d6b89(523)](_0xe224ba[_0x3d6b89(524)]), urlService[_0x3d6b89(457)][_0x3d6b89(522)](_0x1d9531[5130 + 1097 + -3113 * 2]['id'])[_0x3d6b89(523)](_0xe224ba[_0x3d6b89(525)]);
        const _0x429fdd = helpers[_0x3d6b89(497)][_0x3d6b89(505)]({ 'authors': _0x1d9531 });
        should['exist'](_0x429fdd), String(_0x429fdd)[_0x3d6b89(494)][_0x3d6b89(499)](_0xe224ba[_0x3d6b89(526)]);
    }), _0xe224ba[_0xc73197(515)](it, _0xc73197(527), function () {
        const _0x333f2a = _0xc73197, _0x240b46 = [
                testUtils['DataGenerator'][_0x333f2a(488)][_0x333f2a(489)]({
                    'name': _0xe224ba[_0x333f2a(528)],
                    'slug': _0xe224ba['FbvYI']
                }),
                testUtils['DataGenerator']['forKnex']['createUser']({
                    'name': _0xe224ba['TORhJ'],
                    'slug': _0xe224ba[_0x333f2a(521)]
                })
            ];
        urlService[_0x333f2a(457)][_0x333f2a(522)](_0x240b46[-1 * 9778 + 4 * 2053 + 1566]['id'])[_0x333f2a(523)](_0xe224ba[_0x333f2a(524)]);
        const _0xff39f0 = helpers[_0x333f2a(497)]['call']({ 'authors': _0x240b46 }, { 'hash': { 'limit': '1' } });
        should['exist'](_0xff39f0), _0xe224ba[_0x333f2a(529)](String, _0xff39f0)[_0x333f2a(494)][_0x333f2a(499)]('<a href="author url 1">foo</a>');
    }), it(_0xe224ba[_0xc73197(530)], function () {
        const _0x36766e = _0xc73197, _0x2119e0 = [
                testUtils[_0x36766e(490)][_0x36766e(488)][_0x36766e(489)]({
                    'name': _0xe224ba[_0x36766e(528)],
                    'slug': _0xe224ba[_0x36766e(520)]
                }),
                testUtils[_0x36766e(490)]['forKnex'][_0x36766e(489)]({
                    'name': _0x36766e(467),
                    'slug': _0x36766e(467)
                })
            ];
        urlService[_0x36766e(457)][_0x36766e(522)](_0x2119e0[1 * 8719 + 1 * 1299 + 371 * -27]['id'])[_0x36766e(523)]('author url 2');
        const _0x38571e = helpers['authors'][_0x36766e(505)]({ 'authors': _0x2119e0 }, { 'hash': { 'from': '2' } });
        should[_0x36766e(492)](_0x38571e), String(_0x38571e)[_0x36766e(494)][_0x36766e(499)](_0xe224ba[_0x36766e(531)]);
    }), _0xe224ba[_0xc73197(515)](it, _0xe224ba[_0xc73197(532)], function () {
        const _0x531b6e = _0xc73197, _0x4bbb9 = [
                testUtils[_0x531b6e(490)][_0x531b6e(488)][_0x531b6e(489)]({
                    'name': _0xe224ba[_0x531b6e(528)],
                    'slug': _0x531b6e(533)
                }),
                testUtils[_0x531b6e(490)][_0x531b6e(488)][_0x531b6e(489)]({
                    'name': _0xe224ba['TORhJ'],
                    'slug': _0xe224ba['TORhJ']
                })
            ];
        urlService['getUrlByResourceId'][_0x531b6e(522)](_0x4bbb9[-6024 + -1 * 1569 + -3 * -2531]['id'])[_0x531b6e(523)](_0xe224ba[_0x531b6e(534)]);
        const _0x32201d = helpers[_0x531b6e(497)]['call']({ 'authors': _0x4bbb9 }, { 'hash': { 'to': '1' } });
        should['exist'](_0x32201d), String(_0x32201d)[_0x531b6e(494)][_0x531b6e(499)]('<a href="author url">foo</a>');
    }), _0xe224ba[_0xc73197(535)](it, _0xc73197(536), function () {
        const _0x4ed1c5 = _0xc73197, _0x97357d = [
                testUtils[_0x4ed1c5(490)][_0x4ed1c5(488)][_0x4ed1c5(489)]({
                    'name': 'foo',
                    'slug': _0xe224ba[_0x4ed1c5(520)]
                }),
                testUtils[_0x4ed1c5(490)][_0x4ed1c5(488)]['createUser']({
                    'name': _0xe224ba[_0x4ed1c5(521)],
                    'slug': _0x4ed1c5(467)
                }),
                testUtils[_0x4ed1c5(490)][_0x4ed1c5(488)][_0x4ed1c5(489)]({
                    'name': _0xe224ba[_0x4ed1c5(537)],
                    'slug': _0xe224ba['xPPye']
                })
            ];
        urlService[_0x4ed1c5(457)][_0x4ed1c5(522)](_0x97357d[-4548 + 873 + 4 * 919]['id'])[_0x4ed1c5(523)](_0xe224ba['JkTqP']), urlService[_0x4ed1c5(457)][_0x4ed1c5(522)](_0x97357d[7271 + -444 + -1 * 6825]['id'])['returns'](_0x4ed1c5(538));
        const _0x76e2b0 = helpers[_0x4ed1c5(497)][_0x4ed1c5(505)]({ 'authors': _0x97357d }, {
            'hash': {
                'from': '2',
                'to': '3'
            }
        });
        should[_0x4ed1c5(492)](_0x76e2b0), String(_0x76e2b0)[_0x4ed1c5(494)][_0x4ed1c5(499)](_0xe224ba[_0x4ed1c5(539)]);
    }), it(_0xe224ba[_0xc73197(540)], function () {
        const _0x39c45c = _0xc73197, _0xa19eb5 = [
                testUtils['DataGenerator'][_0x39c45c(488)]['createUser']({
                    'name': _0x39c45c(541),
                    'slug': _0xe224ba['FbvYI']
                }),
                testUtils['DataGenerator'][_0x39c45c(488)][_0x39c45c(489)]({
                    'name': _0xe224ba[_0x39c45c(521)],
                    'slug': _0xe224ba['TORhJ']
                }),
                testUtils[_0x39c45c(490)][_0x39c45c(488)][_0x39c45c(489)]({
                    'name': _0xe224ba['xPPye'],
                    'slug': _0xe224ba['xPPye']
                })
            ];
        urlService[_0x39c45c(457)][_0x39c45c(522)](_0xa19eb5[-1046 + 3461 * 2 + 1 * -5875]['id'])[_0x39c45c(523)](_0xe224ba[_0x39c45c(542)]);
        const _0x12200e = helpers[_0x39c45c(497)][_0x39c45c(505)]({ 'authors': _0xa19eb5 }, {
            'hash': {
                'from': '2',
                'limit': '1'
            }
        });
        should[_0x39c45c(492)](_0x12200e), _0xe224ba[_0x39c45c(529)](String, _0x12200e)[_0x39c45c(494)][_0x39c45c(499)](_0xe224ba[_0x39c45c(543)]);
    }), it(_0xe224ba[_0xc73197(544)], function () {
        const _0x3ae255 = _0xc73197, _0xa29a47 = [
                testUtils[_0x3ae255(490)][_0x3ae255(488)]['createUser']({
                    'name': _0x3ae255(541),
                    'slug': _0xe224ba[_0x3ae255(520)]
                }),
                testUtils[_0x3ae255(490)][_0x3ae255(488)][_0x3ae255(489)]({
                    'name': _0xe224ba['TORhJ'],
                    'slug': _0xe224ba[_0x3ae255(521)]
                }),
                testUtils['DataGenerator'][_0x3ae255(488)]['createUser']({
                    'name': _0xe224ba[_0x3ae255(537)],
                    'slug': _0xe224ba[_0x3ae255(537)]
                })
            ];
        urlService[_0x3ae255(457)][_0x3ae255(522)](_0xa29a47[4 * -1016 + 3 * 441 + -2741 * -1]['id'])[_0x3ae255(523)](_0xe224ba[_0x3ae255(545)]), urlService[_0x3ae255(457)][_0x3ae255(522)](_0xa29a47[-6981 + -3201 + 10183]['id'])[_0x3ae255(523)](_0xe224ba[_0x3ae255(546)]), urlService['getUrlByResourceId'][_0x3ae255(522)](_0xa29a47[-17 * -332 + 9901 + -11 * 1413]['id'])[_0x3ae255(523)](_0xe224ba[_0x3ae255(547)]);
        const _0x2fabcd = helpers['authors'][_0x3ae255(505)]({ 'authors': _0xa29a47 }, {
            'hash': {
                'from': '1',
                'to': '3',
                'limit': '2'
            }
        });
        should[_0x3ae255(492)](_0x2fabcd), _0xe224ba[_0x3ae255(548)](String, _0x2fabcd)[_0x3ae255(494)][_0x3ae255(499)](_0xe224ba[_0x3ae255(549)]);
    });
});