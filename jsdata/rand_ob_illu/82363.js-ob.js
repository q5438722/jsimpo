const _0x2209 = ['lyVIi', 'secure', 'NUIMe', 'tvUqZ', 'IQhoU', 'EUUbW', 'iIvkr', 'uLhNW', 'Awrzx', 'absolute/*/', 'XsxnC', 'JzEMp', 'createTag', 'parent', 'tag url', 'OvCeF', 'DJVGh', 'zectT', 'nJVBg', 'createUser', 'NlQIv', 'OLRMl', 'EvuDH', 'should return url for a nav', 'UHEtg', 'PPuFp', 'nav', 'aJMzC', 'equal', 'TCuIU', 'cnGfP', 'yjVRA', 'BHyFj', 'false', '996159WeAGzB', '80197BJBjbv', '699313hHegCb', '135496rqADbK', '5xQtxrl', '5WOepgH', '12397wptEey', '2REIAbr', '239753WefhGJ', '45965EiDTnL', '20jIExMS', 'should', 'sinon', '../../../core/shared/url-utils', '../../../core/frontend/meta/url', '../../utils', 'getUrl', 'urlFor', 'post url', 'draft', '/p/', 'absolute secure', 'relative', 'absolute', 'absolute, secure', '/*/amp/', 'absolute/*/amp/', 'author url', 'absolute secure author url', 'About Me', 'about-me', 'nav url', 'absolute nav url', '/*/', 'should return url for a post', 'preview url: drafts/scheduled posts', 'should return url for a tag', 'should return secure absolute url for a author', 'kIhgl', 'restore', 'SFygc', 'DataGenerator', 'forKnex', 'createPost', 'getUrlByResourceId', 'znxHG', 'eql', 'qDSYE', 'xRNda', 'acKsf', 'axpAc', '/404/', 'PhxKj', 'uVxQw', 'xWKCQ', 'not absolute, not secure', 'withArgs', 'returns', 'uuid', 'DioEO', 'szSOI', 'calledOnce', 'true', 'absolute, not secure', 'bZqYv', 'TjWzS'];
const _0x93f938 = _0x350d;

(function (_0x454af6, _0x3ec5ce) {
    const _0xbc7591 = _0x350d;

    while (true) {
        try {
            const _0x58ee66 = parseInt(_0xbc7591(0xf8)) + -parseInt(_0xbc7591(0xf9)) + parseInt(_0xbc7591(0xfa)) + parseInt(_0xbc7591(0xfb)) * parseInt(_0xbc7591(0xfc)) + parseInt(_0xbc7591(0xfd)) * -parseInt(_0xbc7591(0xfe)) + -parseInt(_0xbc7591(0xff)) * parseInt(_0xbc7591(0x100)) + parseInt(_0xbc7591(0x101)) * -parseInt(_0xbc7591(0x102));

            if (_0x58ee66 === _0x3ec5ce) break;else _0x454af6.push(_0x454af6.shift());
        } catch (_0x42ccfe) {
            _0x454af6.push(_0x454af6.shift());
        }
    }
})(_0x2209, 831964);

const should = require(_0x93f938(0x103));

const sinon = require(_0x93f938(0x104));

const urlUtils = require(_0x93f938(0x105));

const urlService = require('../../../core/frontend/services/url');

const getUrl = require(_0x93f938(0x106));

const testUtils = require(_0x93f938(0x107));

function _0x350d(_0x45accb, _0x4b197b) {
    return _0x350d = function (_0x1ec2e1, _0x27ed04) {
        _0x1ec2e1 = _0x1ec2e1 - 248;
        const _0x2c169e = _0x2209[_0x1ec2e1];

        return _0x2c169e;
    }, _0x350d(_0x45accb, _0x4b197b);
}
describe(_0x93f938(0x108), function () {
    const _0x1ef5c6 = _0x93f938;
    const _0x2517d8 = {
        'kIhgl': _0x1ef5c6(0x109),
        'znxHG': function (_0x499ae4, _0x72ede9) {
            return _0x499ae4(_0x72ede9);
        },
        'qDSYE': _0x1ef5c6(0x10a),
        'acKsf': _0x1ef5c6(0x10b),
        'xMokj': '/404/',
        'uVxQw': function (_0x145f20, _0x420691) {
            return _0x145f20 + _0x420691;
        },
        'NUIMe': _0x1ef5c6(0x10c),
        'tvUqZ': _0x1ef5c6(0x10d),
        'xWKCQ': function (_0x2c2a52, _0x5703bb, _0x155d9f) {
            return _0x2c2a52(_0x5703bb, _0x155d9f);
        },
        'axpAc': _0x1ef5c6(0x10e),
        'PhxKj': _0x1ef5c6(0x10f),
        'iIvkr': function (_0x51e03f, _0x9ba3c7, _0x51b6a8) {
            return _0x51e03f(_0x9ba3c7, _0x51b6a8);
        },
        'lyVIi': _0x1ef5c6(0x110),
        'EUUbW': 'absolute post url',
        'uLhNW': _0x1ef5c6(0x111),
        'Awrzx': _0x1ef5c6(0x112),
        'ylSLM': 'secure tag url',
        'DJVGh': function (_0x5c2402, _0xf221d1) {
            return _0x5c2402(_0xf221d1);
        },
        'zectT': _0x1ef5c6(0x113),
        'NlQIv': _0x1ef5c6(0x114),
        'OLRMl': function (_0x2bdc2c, _0x3b1c14, _0x160f1a) {
            return _0x2bdc2c(_0x3b1c14, _0x160f1a);
        },
        'cnGfP': _0x1ef5c6(0x115),
        'UHEtg': '/about-me/',
        'PPuFp': _0x1ef5c6(0x116),
        'aJMzC': _0x1ef5c6(0x117),
        'yjVRA': _0x1ef5c6(0x118),
        'IQhoU': function (_0x2d81f3, _0x396d3f, _0x21df3c) {
            return _0x2d81f3(_0x396d3f, _0x21df3c);
        },
        'BHyFj': _0x1ef5c6(0x119),
        'hplzL': function (_0x210bd7, _0x150163) {
            return _0x210bd7(_0x150163);
        },
        'SFygc': _0x1ef5c6(0x11a),
        'xRNda': _0x1ef5c6(0x11b),
        'XsxnC': function (_0xb66b96, _0x2c6bfd, _0x441c2f) {
            return _0xb66b96(_0x2c6bfd, _0x441c2f);
        },
        'JzEMp': _0x1ef5c6(0x11c),
        'OvCeF': 'should return secure url for a tag',
        'nJVBg': _0x1ef5c6(0x11d),
        'EvuDH': function (_0x4e0242, _0x2a1db9, _0xc3cc9d) {
            return _0x4e0242(_0x2a1db9, _0xc3cc9d);
        },
        'TCuIU': 'should return absolute url for a nav'
    };

    _0x2517d8.hplzL(beforeEach, function () {
        const _0x9c816e = _0x1ef5c6;

        sinon.stub(urlService, 'getUrlByResourceId'), sinon.stub(urlUtils, _0x2517d8[_0x9c816e(0x11e)]);
    }), _0x2517d8.hplzL(afterEach, function () {
        const _0x455c58 = _0x1ef5c6;

        sinon[_0x455c58(0x11f)]();
    }), _0x2517d8.IQhoU(it, _0x2517d8[_0x1ef5c6(0x120)], function () {
        const _0x380cce = _0x1ef5c6;

        const _0x2d857c = testUtils[_0x380cce(0x121)][_0x380cce(0x122)][_0x380cce(0x123)]();

        urlService[_0x380cce(0x124)].withArgs(_0x2d857c.id, {
            'absolute': undefined,
            'secure': undefined,
            'withSubdirectory': true
        }).returns(_0x380cce(0x10a)), _0x2517d8[_0x380cce(0x125)](getUrl, _0x2d857c)[_0x380cce(0x103)][_0x380cce(0x126)](_0x2517d8[_0x380cce(0x127)]);
    }), _0x2517d8.IQhoU(describe, _0x2517d8[_0x1ef5c6(0x128)], function () {
        const _0x2f5589 = _0x1ef5c6;
        const _0x2944f6 = {
            'APzyF': _0x2517d8[_0x2f5589(0x129)],
            'DioEO': function (_0x4e50a4, _0x553c3f) {
                return _0x4e50a4 + _0x553c3f;
            },
            'szSOI': _0x2f5589(0x10c),
            'dtiBU': _0x2517d8[_0x2f5589(0x12a)],
            'ObxZL': _0x2f5589(0x12b),
            'bZqYv': function (_0xfc0761, _0x1ed4b8) {
                return _0xfc0761 + _0x1ed4b8;
            },
            'TjWzS': _0x2517d8[_0x2f5589(0x12c)],
            'FESMj': function (_0x2d0c5d, _0x24bbd2, _0x105095) {
                return _0x2517d8.xWKCQ(_0x2d0c5d, _0x24bbd2, _0x105095);
            },
            'lLeaJ': function (_0x1434bd, _0x4a1d2c) {
                const _0xc33440 = _0x2f5589;

                return _0x2517d8[_0xc33440(0x12d)](_0x1434bd, _0x4a1d2c);
            }
        };

        _0x2517d8[_0x2f5589(0x12e)](it, _0x2f5589(0x12f), function () {
            const _0x95e1c1 = _0x2f5589;

            const _0x164202 = testUtils.DataGenerator[_0x95e1c1(0x122)][_0x95e1c1(0x123)]({ 'status': _0x2944f6.APzyF });

            urlService[_0x95e1c1(0x124)][_0x95e1c1(0x130)](_0x164202.id)[_0x95e1c1(0x131)](_0x95e1c1(0x12b)), urlUtils.urlFor[_0x95e1c1(0x130)]({
                'relativeUrl': _0x2944f6.DioEO(_0x2944f6.szSOI + _0x164202[_0x95e1c1(0x132)], '/'),
                'secure': undefined
            }, null, undefined)[_0x95e1c1(0x131)](_0x2944f6.dtiBU);

            const _0x1567e6 = getUrl(_0x164202);

            urlService[_0x95e1c1(0x124)].calledOnce.should.be.true(), urlUtils[_0x95e1c1(0x109)][_0x95e1c1(0x130)]({
                'relativeUrl': _0x2944f6[_0x95e1c1(0x133)](_0x2944f6[_0x95e1c1(0x134)], _0x164202.uuid) + '/',
                'secure': undefined
            }, null, undefined)[_0x95e1c1(0x135)][_0x95e1c1(0x103)].be[_0x95e1c1(0x136)](), _0x1567e6[_0x95e1c1(0x103)].eql(_0x95e1c1(0x10e));
        }), it(_0x2f5589(0x137), function () {
            const _0x3ebffc = _0x2f5589;

            const _0x2659e7 = testUtils[_0x3ebffc(0x121)][_0x3ebffc(0x122)][_0x3ebffc(0x123)]({ 'status': _0x3ebffc(0x10b) });

            urlService.getUrlByResourceId[_0x3ebffc(0x130)](_0x2659e7.id)[_0x3ebffc(0x131)](_0x2944f6.ObxZL), urlUtils[_0x3ebffc(0x109)][_0x3ebffc(0x130)]({
                'relativeUrl': _0x2944f6[_0x3ebffc(0x138)](_0x2944f6[_0x3ebffc(0x138)](_0x2944f6[_0x3ebffc(0x134)], _0x2659e7.uuid), '/'),
                'secure': undefined
            }, null, true)[_0x3ebffc(0x131)](_0x2944f6[_0x3ebffc(0x139)]);

            const _0x4dc8db = _0x2944f6.FESMj(getUrl, _0x2659e7, true);

            urlService[_0x3ebffc(0x124)][_0x3ebffc(0x135)][_0x3ebffc(0x103)].be[_0x3ebffc(0x136)](), urlUtils[_0x3ebffc(0x109)][_0x3ebffc(0x130)]({
                'relativeUrl': _0x2944f6.lLeaJ(_0x2944f6.szSOI + _0x2659e7.uuid, '/'),
                'secure': undefined
            }, null, true).calledOnce[_0x3ebffc(0x103)].be[_0x3ebffc(0x136)](), _0x4dc8db[_0x3ebffc(0x103)][_0x3ebffc(0x126)]('absolute');
        }), _0x2517d8.iIvkr(it, _0x2517d8[_0x2f5589(0x13a)], function () {
            const _0x595dd7 = _0x2f5589;

            const _0x3db350 = testUtils[_0x595dd7(0x121)].forKnex[_0x595dd7(0x123)]({ 'status': _0x2517d8[_0x595dd7(0x129)] });

            _0x3db350[_0x595dd7(0x13b)] = true, urlService.getUrlByResourceId[_0x595dd7(0x130)](_0x3db350.id)[_0x595dd7(0x131)](_0x2517d8.xMokj), urlUtils[_0x595dd7(0x109)][_0x595dd7(0x130)]({
                'relativeUrl': _0x2517d8[_0x595dd7(0x12d)](_0x2517d8[_0x595dd7(0x13c)] + _0x3db350[_0x595dd7(0x132)], '/'),
                'secure': true
            }, null, true)[_0x595dd7(0x131)](_0x2517d8.tvUqZ);

            const _0x3eaf5b = _0x2517d8[_0x595dd7(0x12e)](getUrl, _0x3db350, true);

            urlService[_0x595dd7(0x124)].calledOnce[_0x595dd7(0x103)].be[_0x595dd7(0x136)](), urlUtils[_0x595dd7(0x109)].withArgs({
                'relativeUrl': _0x2517d8.uVxQw(_0x2517d8[_0x595dd7(0x13c)] + _0x3db350.uuid, '/'),
                'secure': true
            }, null, true)[_0x595dd7(0x135)][_0x595dd7(0x103)].be.true(), _0x3eaf5b[_0x595dd7(0x103)][_0x595dd7(0x126)](_0x2517d8[_0x595dd7(0x13d)]);
        });
    }), _0x2517d8[_0x1ef5c6(0x13e)](it, 'should return absolute url for a post', function () {
        const _0x2f285d = _0x1ef5c6;

        const _0x4e4bb4 = testUtils[_0x2f285d(0x121)][_0x2f285d(0x122)].createPost();

        urlService[_0x2f285d(0x124)].withArgs(_0x4e4bb4.id, {
            'absolute': true,
            'secure': undefined,
            'withSubdirectory': true
        })[_0x2f285d(0x131)](_0x2517d8[_0x2f285d(0x13f)]), _0x2517d8[_0x2f285d(0x140)](getUrl, _0x4e4bb4, true)[_0x2f285d(0x103)][_0x2f285d(0x126)](_0x2517d8[_0x2f285d(0x13f)]);
    }), _0x2517d8[_0x1ef5c6(0x13e)](it, 'should return absolute url for a post and remove /amp/ in url', function () {
        const _0x4f74ef = _0x1ef5c6;
        const _0x401e1d = { 'relativeUrl': _0x2517d8[_0x4f74ef(0x141)] };

        urlUtils[_0x4f74ef(0x109)][_0x4f74ef(0x130)](_0x401e1d, {}, true)[_0x4f74ef(0x131)](_0x2517d8[_0x4f74ef(0x142)]), getUrl(_0x401e1d, true)[_0x4f74ef(0x103)][_0x4f74ef(0x126)](_0x4f74ef(0x143)), urlService[_0x4f74ef(0x124)].called[_0x4f74ef(0x103)].be.false();
    }), _0x2517d8[_0x1ef5c6(0x144)](it, _0x2517d8[_0x1ef5c6(0x145)], function () {
        const _0x3176ee = _0x1ef5c6;

        const _0x190122 = testUtils[_0x3176ee(0x121)][_0x3176ee(0x122)][_0x3176ee(0x146)]();

        _0x190122[_0x3176ee(0x147)] = null, urlService[_0x3176ee(0x124)][_0x3176ee(0x130)](_0x190122.id, {
            'absolute': undefined,
            'secure': undefined,
            'withSubdirectory': true
        })[_0x3176ee(0x131)](_0x3176ee(0x148)), _0x2517d8.znxHG(getUrl, _0x190122)[_0x3176ee(0x103)][_0x3176ee(0x126)](_0x3176ee(0x148));
    }), it(_0x2517d8[_0x1ef5c6(0x149)], function () {
        const _0x163a93 = _0x1ef5c6;

        const _0x56e4af = testUtils[_0x163a93(0x121)][_0x163a93(0x122)][_0x163a93(0x146)]();

        _0x56e4af[_0x163a93(0x147)] = null, _0x56e4af[_0x163a93(0x13b)] = true, urlService[_0x163a93(0x124)][_0x163a93(0x130)](_0x56e4af.id, {
            'absolute': undefined,
            'secure': true,
            'withSubdirectory': true
        })[_0x163a93(0x131)](_0x2517d8.ylSLM), _0x2517d8[_0x163a93(0x14a)](getUrl, _0x56e4af)[_0x163a93(0x103)][_0x163a93(0x126)](_0x2517d8.ylSLM);
    }), _0x2517d8[_0x1ef5c6(0x144)](it, 'should return url for a author', function () {
        const _0x72d01d = _0x1ef5c6;

        const _0x5b2675 = testUtils.DataGenerator[_0x72d01d(0x122)].createUser();

        urlService[_0x72d01d(0x124)][_0x72d01d(0x130)](_0x5b2675.id, {
            'absolute': undefined,
            'secure': undefined,
            'withSubdirectory': true
        })[_0x72d01d(0x131)](_0x2517d8[_0x72d01d(0x14b)]), getUrl(_0x5b2675)[_0x72d01d(0x103)][_0x72d01d(0x126)](_0x2517d8[_0x72d01d(0x14b)]);
    }), _0x2517d8.XsxnC(it, _0x2517d8[_0x1ef5c6(0x14c)], function () {
        const _0x6be416 = _0x1ef5c6;

        const _0x42c1a3 = testUtils[_0x6be416(0x121)].forKnex[_0x6be416(0x14d)]();

        _0x42c1a3[_0x6be416(0x13b)] = true, urlService[_0x6be416(0x124)][_0x6be416(0x130)](_0x42c1a3.id, {
            'absolute': true,
            'secure': true,
            'withSubdirectory': true
        }).returns(_0x2517d8[_0x6be416(0x14e)]), _0x2517d8[_0x6be416(0x14f)](getUrl, _0x42c1a3, true)[_0x6be416(0x103)][_0x6be416(0x126)](_0x2517d8[_0x6be416(0x14e)]);
    }), _0x2517d8[_0x1ef5c6(0x150)](it, _0x1ef5c6(0x151), function () {
        const _0x44b776 = _0x1ef5c6;
        const _0x278e89 = {
            'label': _0x2517d8.cnGfP,
            'url': _0x2517d8[_0x44b776(0x152)],
            'slug': _0x2517d8[_0x44b776(0x153)],
            'current': true
        };

        urlUtils.urlFor.withArgs(_0x44b776(0x154), {
            'nav': _0x278e89,
            'secure': _0x278e89[_0x44b776(0x13b)]
        }, undefined)[_0x44b776(0x131)](_0x2517d8[_0x44b776(0x155)]), getUrl(_0x278e89)[_0x44b776(0x103)][_0x44b776(0x156)](_0x2517d8.aJMzC);
    }), _0x2517d8.EvuDH(it, _0x2517d8[_0x1ef5c6(0x157)], function () {
        const _0x37c91a = _0x1ef5c6;
        const _0x4f6395 = {
            'label': _0x2517d8[_0x37c91a(0x158)],
            'url': _0x2517d8[_0x37c91a(0x152)],
            'slug': _0x2517d8.PPuFp,
            'current': true
        };

        urlUtils[_0x37c91a(0x109)][_0x37c91a(0x130)]('nav', {
            'nav': _0x4f6395,
            'secure': _0x4f6395.secure
        }, true).returns(_0x2517d8[_0x37c91a(0x159)]), _0x2517d8[_0x37c91a(0x13e)](getUrl, _0x4f6395, true)[_0x37c91a(0x103)].equal(_0x2517d8[_0x37c91a(0x159)]);
    }), it('should return `relativeUrl` and remove /amp/ in url', function () {
        const _0xbe1bc9 = _0x1ef5c6;
        const _0x244d74 = { 'relativeUrl': _0xbe1bc9(0x111) };

        urlUtils[_0xbe1bc9(0x109)].withArgs(_0x244d74, {}, undefined)[_0xbe1bc9(0x131)](_0x244d74.relativeUrl), _0x2517d8[_0xbe1bc9(0x14a)](getUrl, _0x244d74)[_0xbe1bc9(0x103)][_0xbe1bc9(0x126)](_0x2517d8[_0xbe1bc9(0x15a)]), urlService.getUrlByResourceId.called.should.be[_0xbe1bc9(0x15b)]();
    });
});
