const should = require(_0x93f938(259)), sinon = require(_0x93f938(260)), urlUtils = require(_0x93f938(261)), urlService = require('../../../core/frontend/services/url'), getUrl = require(_0x93f938(262)), testUtils = require(_0x93f938(263));
function _0x350d(_0x45accb, _0x4b197b) {
    return _0x350d = function (_0x1ec2e1, _0x27ed04) {
        _0x1ec2e1 = _0x1ec2e1 - (7158 + -33 * -138 + -11464);
        let _0x2c169e = _0x2209[_0x1ec2e1];
        return _0x2c169e;
    }, _0x350d(_0x45accb, _0x4b197b);
}
describe(_0x93f938(264), function () {
    const _0x1ef5c6 = _0x93f938, _0x2517d8 = {
            'kIhgl': _0x1ef5c6(265),
            'znxHG': function (_0x499ae4, _0x72ede9) {
                return _0x499ae4(_0x72ede9);
            },
            'qDSYE': _0x1ef5c6(266),
            'acKsf': _0x1ef5c6(267),
            'xMokj': '/404/',
            'uVxQw': function (_0x145f20, _0x420691) {
                return _0x145f20 + _0x420691;
            },
            'NUIMe': _0x1ef5c6(268),
            'tvUqZ': _0x1ef5c6(269),
            'xWKCQ': function (_0x2c2a52, _0x5703bb, _0x155d9f) {
                return _0x2c2a52(_0x5703bb, _0x155d9f);
            },
            'axpAc': _0x1ef5c6(270),
            'PhxKj': _0x1ef5c6(271),
            'iIvkr': function (_0x51e03f, _0x9ba3c7, _0x51b6a8) {
                return _0x51e03f(_0x9ba3c7, _0x51b6a8);
            },
            'lyVIi': _0x1ef5c6(272),
            'EUUbW': 'absolute post url',
            'uLhNW': _0x1ef5c6(273),
            'Awrzx': _0x1ef5c6(274),
            'ylSLM': 'secure tag url',
            'DJVGh': function (_0x5c2402, _0xf221d1) {
                return _0x5c2402(_0xf221d1);
            },
            'zectT': _0x1ef5c6(275),
            'NlQIv': _0x1ef5c6(276),
            'OLRMl': function (_0x2bdc2c, _0x3b1c14, _0x160f1a) {
                return _0x2bdc2c(_0x3b1c14, _0x160f1a);
            },
            'cnGfP': _0x1ef5c6(277),
            'UHEtg': '/about-me/',
            'PPuFp': _0x1ef5c6(278),
            'aJMzC': _0x1ef5c6(279),
            'yjVRA': _0x1ef5c6(280),
            'IQhoU': function (_0x2d81f3, _0x396d3f, _0x21df3c) {
                return _0x2d81f3(_0x396d3f, _0x21df3c);
            },
            'BHyFj': _0x1ef5c6(281),
            'hplzL': function (_0x210bd7, _0x150163) {
                return _0x210bd7(_0x150163);
            },
            'SFygc': _0x1ef5c6(282),
            'xRNda': _0x1ef5c6(283),
            'XsxnC': function (_0xb66b96, _0x2c6bfd, _0x441c2f) {
                return _0xb66b96(_0x2c6bfd, _0x441c2f);
            },
            'JzEMp': _0x1ef5c6(284),
            'OvCeF': 'should return secure url for a tag',
            'nJVBg': _0x1ef5c6(285),
            'EvuDH': function (_0x4e0242, _0x2a1db9, _0xc3cc9d) {
                return _0x4e0242(_0x2a1db9, _0xc3cc9d);
            },
            'TCuIU': 'should return absolute url for a nav'
        };
    _0x2517d8['hplzL'](beforeEach, function () {
        const _0x9c816e = _0x1ef5c6;
        sinon['stub'](urlService, 'getUrlByResourceId'), sinon['stub'](urlUtils, _0x2517d8[_0x9c816e(286)]);
    }), _0x2517d8['hplzL'](afterEach, function () {
        const _0x455c58 = _0x1ef5c6;
        sinon[_0x455c58(287)]();
    }), _0x2517d8['IQhoU'](it, _0x2517d8[_0x1ef5c6(288)], function () {
        const _0x380cce = _0x1ef5c6, _0x2d857c = testUtils[_0x380cce(289)][_0x380cce(290)][_0x380cce(291)]();
        urlService[_0x380cce(292)]['withArgs'](_0x2d857c['id'], {
            'absolute': undefined,
            'secure': undefined,
            'withSubdirectory': !![]
        })['returns'](_0x380cce(266)), _0x2517d8[_0x380cce(293)](getUrl, _0x2d857c)[_0x380cce(259)][_0x380cce(294)](_0x2517d8[_0x380cce(295)]);
    }), _0x2517d8['IQhoU'](describe, _0x2517d8[_0x1ef5c6(296)], function () {
        const _0x2f5589 = _0x1ef5c6, _0x2944f6 = {
                'APzyF': _0x2517d8[_0x2f5589(297)],
                'DioEO': function (_0x4e50a4, _0x553c3f) {
                    return _0x4e50a4 + _0x553c3f;
                },
                'szSOI': _0x2f5589(268),
                'dtiBU': _0x2517d8[_0x2f5589(298)],
                'ObxZL': _0x2f5589(299),
                'bZqYv': function (_0xfc0761, _0x1ed4b8) {
                    return _0xfc0761 + _0x1ed4b8;
                },
                'TjWzS': _0x2517d8[_0x2f5589(300)],
                'FESMj': function (_0x2d0c5d, _0x24bbd2, _0x105095) {
                    return _0x2517d8['xWKCQ'](_0x2d0c5d, _0x24bbd2, _0x105095);
                },
                'lLeaJ': function (_0x1434bd, _0x4a1d2c) {
                    const _0xc33440 = _0x2f5589;
                    return _0x2517d8[_0xc33440(301)](_0x1434bd, _0x4a1d2c);
                }
            };
        _0x2517d8[_0x2f5589(302)](it, _0x2f5589(303), function () {
            const _0x95e1c1 = _0x2f5589, _0x164202 = testUtils['DataGenerator'][_0x95e1c1(290)][_0x95e1c1(291)]({ 'status': _0x2944f6['APzyF'] });
            urlService[_0x95e1c1(292)][_0x95e1c1(304)](_0x164202['id'])[_0x95e1c1(305)](_0x95e1c1(299)), urlUtils['urlFor'][_0x95e1c1(304)]({
                'relativeUrl': _0x2944f6['DioEO'](_0x2944f6['szSOI'] + _0x164202[_0x95e1c1(306)], '/'),
                'secure': undefined
            }, null, undefined)[_0x95e1c1(305)](_0x2944f6['dtiBU']);
            let _0x1567e6 = getUrl(_0x164202);
            urlService[_0x95e1c1(292)]['calledOnce']['should']['be']['true'](), urlUtils[_0x95e1c1(265)][_0x95e1c1(304)]({
                'relativeUrl': _0x2944f6[_0x95e1c1(307)](_0x2944f6[_0x95e1c1(308)], _0x164202['uuid']) + '/',
                'secure': undefined
            }, null, undefined)[_0x95e1c1(309)][_0x95e1c1(259)]['be'][_0x95e1c1(310)](), _0x1567e6[_0x95e1c1(259)]['eql'](_0x95e1c1(270));
        }), it(_0x2f5589(311), function () {
            const _0x3ebffc = _0x2f5589, _0x2659e7 = testUtils[_0x3ebffc(289)][_0x3ebffc(290)][_0x3ebffc(291)]({ 'status': _0x3ebffc(267) });
            urlService['getUrlByResourceId'][_0x3ebffc(304)](_0x2659e7['id'])[_0x3ebffc(305)](_0x2944f6['ObxZL']), urlUtils[_0x3ebffc(265)][_0x3ebffc(304)]({
                'relativeUrl': _0x2944f6[_0x3ebffc(312)](_0x2944f6[_0x3ebffc(312)](_0x2944f6[_0x3ebffc(308)], _0x2659e7['uuid']), '/'),
                'secure': undefined
            }, null, !![])[_0x3ebffc(305)](_0x2944f6[_0x3ebffc(313)]);
            let _0x4dc8db = _0x2944f6['FESMj'](getUrl, _0x2659e7, !![]);
            urlService[_0x3ebffc(292)][_0x3ebffc(309)][_0x3ebffc(259)]['be'][_0x3ebffc(310)](), urlUtils[_0x3ebffc(265)][_0x3ebffc(304)]({
                'relativeUrl': _0x2944f6['lLeaJ'](_0x2944f6['szSOI'] + _0x2659e7['uuid'], '/'),
                'secure': undefined
            }, null, !![])['calledOnce'][_0x3ebffc(259)]['be'][_0x3ebffc(310)](), _0x4dc8db[_0x3ebffc(259)][_0x3ebffc(294)]('absolute');
        }), _0x2517d8['iIvkr'](it, _0x2517d8[_0x2f5589(314)], function () {
            const _0x595dd7 = _0x2f5589, _0x3db350 = testUtils[_0x595dd7(289)]['forKnex'][_0x595dd7(291)]({ 'status': _0x2517d8[_0x595dd7(297)] });
            _0x3db350[_0x595dd7(315)] = !![], urlService['getUrlByResourceId'][_0x595dd7(304)](_0x3db350['id'])[_0x595dd7(305)](_0x2517d8['xMokj']), urlUtils[_0x595dd7(265)][_0x595dd7(304)]({
                'relativeUrl': _0x2517d8[_0x595dd7(301)](_0x2517d8[_0x595dd7(316)] + _0x3db350[_0x595dd7(306)], '/'),
                'secure': !![]
            }, null, !![])[_0x595dd7(305)](_0x2517d8['tvUqZ']);
            let _0x3eaf5b = _0x2517d8[_0x595dd7(302)](getUrl, _0x3db350, !![]);
            urlService[_0x595dd7(292)]['calledOnce'][_0x595dd7(259)]['be'][_0x595dd7(310)](), urlUtils[_0x595dd7(265)]['withArgs']({
                'relativeUrl': _0x2517d8['uVxQw'](_0x2517d8[_0x595dd7(316)] + _0x3db350['uuid'], '/'),
                'secure': !![]
            }, null, !![])[_0x595dd7(309)][_0x595dd7(259)]['be']['true'](), _0x3eaf5b[_0x595dd7(259)][_0x595dd7(294)](_0x2517d8[_0x595dd7(317)]);
        });
    }), _0x2517d8[_0x1ef5c6(318)](it, 'should return absolute url for a post', function () {
        const _0x2f285d = _0x1ef5c6, _0x4e4bb4 = testUtils[_0x2f285d(289)][_0x2f285d(290)]['createPost']();
        urlService[_0x2f285d(292)]['withArgs'](_0x4e4bb4['id'], {
            'absolute': !![],
            'secure': undefined,
            'withSubdirectory': !![]
        })[_0x2f285d(305)](_0x2517d8[_0x2f285d(319)]), _0x2517d8[_0x2f285d(320)](getUrl, _0x4e4bb4, !![])[_0x2f285d(259)][_0x2f285d(294)](_0x2517d8[_0x2f285d(319)]);
    }), _0x2517d8[_0x1ef5c6(318)](it, 'should return absolute url for a post and remove /amp/ in url', function () {
        const _0x4f74ef = _0x1ef5c6, _0x401e1d = { 'relativeUrl': _0x2517d8[_0x4f74ef(321)] };
        urlUtils[_0x4f74ef(265)][_0x4f74ef(304)](_0x401e1d, {}, !![])[_0x4f74ef(305)](_0x2517d8[_0x4f74ef(322)]), getUrl(_0x401e1d, !![])[_0x4f74ef(259)][_0x4f74ef(294)](_0x4f74ef(323)), urlService[_0x4f74ef(292)]['called'][_0x4f74ef(259)]['be']['false']();
    }), _0x2517d8[_0x1ef5c6(324)](it, _0x2517d8[_0x1ef5c6(325)], function () {
        const _0x3176ee = _0x1ef5c6, _0x190122 = testUtils[_0x3176ee(289)][_0x3176ee(290)][_0x3176ee(326)]();
        _0x190122[_0x3176ee(327)] = null, urlService[_0x3176ee(292)][_0x3176ee(304)](_0x190122['id'], {
            'absolute': undefined,
            'secure': undefined,
            'withSubdirectory': !![]
        })[_0x3176ee(305)](_0x3176ee(328)), _0x2517d8['znxHG'](getUrl, _0x190122)[_0x3176ee(259)][_0x3176ee(294)](_0x3176ee(328));
    }), it(_0x2517d8[_0x1ef5c6(329)], function () {
        const _0x163a93 = _0x1ef5c6, _0x56e4af = testUtils[_0x163a93(289)][_0x163a93(290)][_0x163a93(326)]();
        _0x56e4af[_0x163a93(327)] = null, _0x56e4af[_0x163a93(315)] = !![], urlService[_0x163a93(292)][_0x163a93(304)](_0x56e4af['id'], {
            'absolute': undefined,
            'secure': !![],
            'withSubdirectory': !![]
        })[_0x163a93(305)](_0x2517d8['ylSLM']), _0x2517d8[_0x163a93(330)](getUrl, _0x56e4af)[_0x163a93(259)][_0x163a93(294)](_0x2517d8['ylSLM']);
    }), _0x2517d8[_0x1ef5c6(324)](it, 'should return url for a author', function () {
        const _0x72d01d = _0x1ef5c6, _0x5b2675 = testUtils['DataGenerator'][_0x72d01d(290)]['createUser']();
        urlService[_0x72d01d(292)][_0x72d01d(304)](_0x5b2675['id'], {
            'absolute': undefined,
            'secure': undefined,
            'withSubdirectory': !![]
        })[_0x72d01d(305)](_0x2517d8[_0x72d01d(331)]), getUrl(_0x5b2675)[_0x72d01d(259)][_0x72d01d(294)](_0x2517d8[_0x72d01d(331)]);
    }), _0x2517d8['XsxnC'](it, _0x2517d8[_0x1ef5c6(332)], function () {
        const _0x6be416 = _0x1ef5c6, _0x42c1a3 = testUtils[_0x6be416(289)]['forKnex'][_0x6be416(333)]();
        _0x42c1a3[_0x6be416(315)] = !![], urlService[_0x6be416(292)][_0x6be416(304)](_0x42c1a3['id'], {
            'absolute': !![],
            'secure': !![],
            'withSubdirectory': !![]
        })['returns'](_0x2517d8[_0x6be416(334)]), _0x2517d8[_0x6be416(335)](getUrl, _0x42c1a3, !![])[_0x6be416(259)][_0x6be416(294)](_0x2517d8[_0x6be416(334)]);
    }), _0x2517d8[_0x1ef5c6(336)](it, _0x1ef5c6(337), function () {
        const _0x44b776 = _0x1ef5c6, _0x278e89 = {
                'label': _0x2517d8['cnGfP'],
                'url': _0x2517d8[_0x44b776(338)],
                'slug': _0x2517d8[_0x44b776(339)],
                'current': !![]
            };
        urlUtils['urlFor']['withArgs'](_0x44b776(340), {
            'nav': _0x278e89,
            'secure': _0x278e89[_0x44b776(315)]
        }, undefined)[_0x44b776(305)](_0x2517d8[_0x44b776(341)]), getUrl(_0x278e89)[_0x44b776(259)][_0x44b776(342)](_0x2517d8['aJMzC']);
    }), _0x2517d8['EvuDH'](it, _0x2517d8[_0x1ef5c6(343)], function () {
        const _0x37c91a = _0x1ef5c6, _0x4f6395 = {
                'label': _0x2517d8[_0x37c91a(344)],
                'url': _0x2517d8[_0x37c91a(338)],
                'slug': _0x2517d8['PPuFp'],
                'current': !![]
            };
        urlUtils[_0x37c91a(265)][_0x37c91a(304)]('nav', {
            'nav': _0x4f6395,
            'secure': _0x4f6395['secure']
        }, !![])['returns'](_0x2517d8[_0x37c91a(345)]), _0x2517d8[_0x37c91a(318)](getUrl, _0x4f6395, !![])[_0x37c91a(259)]['equal'](_0x2517d8[_0x37c91a(345)]);
    }), it('should return `relativeUrl` and remove /amp/ in url', function () {
        const _0xbe1bc9 = _0x1ef5c6, _0x244d74 = { 'relativeUrl': _0xbe1bc9(273) };
        urlUtils[_0xbe1bc9(265)]['withArgs'](_0x244d74, {}, undefined)[_0xbe1bc9(305)](_0x244d74['relativeUrl']), _0x2517d8[_0xbe1bc9(330)](getUrl, _0x244d74)[_0xbe1bc9(259)][_0xbe1bc9(294)](_0x2517d8[_0xbe1bc9(346)]), urlService['getUrlByResourceId']['called']['should']['be'][_0xbe1bc9(347)]();
    });
});