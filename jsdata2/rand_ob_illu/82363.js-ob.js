const _0x1286 = ['tZXWu', '/*/amp/', 'LWCHZ', 'called', 'false', 'should return url for a tag', 'createTag', 'parent', 'PYqNa', 'dTDYF', 'TxmlY', 'Effdx', 'EzgNp', 'createUser', 'qhPdI', 'ncNnZ', 'should return secure absolute url for a author', 'fyUga', 'vGJYJ', 'XwZly', 'TdZSf', 'twpko', 'bZBRV', 'equal', 'Xeuxu', 'llVZh', 'fBhSs', 'OzNDx', 'absolute nav url', 'relativeUrl', '/*/', '182698ReWTOL', '2OAlGru', '5XMHfsM', '51411LVieQX', '491300QzdWuv', '1292314MQrgae', '605501OAzeHI', '1gmuAfQ', '390173hgNCSr', '2423811tquWIC', 'should', '../../../core/shared/url-utils', '../../../core/frontend/services/url', '../../../core/frontend/meta/url', '../../utils', 'getUrlByResourceId', 'post url', '/p/', '/404/', 'absolute', 'absolute, not secure', 'absolute post url', 'absolute/*/amp/', 'secure tag url', 'author url', 'absolute secure author url', 'about-me', 'nav', 'preview url: drafts/scheduled posts', 'should return absolute url for a post and remove /amp/ in url', 'should return secure url for a tag', 'should return url for a author', 'should return absolute url for a nav', 'stub', 'FTQXJ', 'restore', 'MHeWR', 'DataGenerator', 'forKnex', 'createPost', 'withArgs', 'SEVIS', 'kzJvs', 'draft', 'OTMCe', 'UTznm', 'VLFlt', 'relative', 'kinNO', 'EFVob', 'rpLoh', 'not absolute, not secure', 'kFbIh', 'returns', 'WIgdM', 'urlFor', 'qPSjd', 'VbYyi', 'mCLvK', 'OjPKM', 'calledOnce', 'true', 'uuid', 'eql', 'BPaKz', 'SaaWW', 'pGENW', 'JrCZE', 'absolute, secure', 'secure', 'absolute secure', 'WuVbT', 'should return absolute url for a post', 'rUXLG'];
const _0x221e8d = _0x11f7;

(function (_0x4cfbd6, _0x3ee116) {
    const _0x562cd8 = _0x11f7;

    while (true) {
        try {
            const _0x11744a = -parseInt(_0x562cd8(0x1e5)) * parseInt(_0x562cd8(0x1e6)) + -parseInt(_0x562cd8(0x1e7)) * parseInt(_0x562cd8(0x1e8)) + parseInt(_0x562cd8(0x1e9)) + -parseInt(_0x562cd8(0x1ea)) + parseInt(_0x562cd8(0x1eb)) * -parseInt(_0x562cd8(0x1ec)) + parseInt(_0x562cd8(0x1ed)) + parseInt(_0x562cd8(0x1ee));

            if (_0x11744a === _0x3ee116) break;else _0x4cfbd6.push(_0x4cfbd6.shift());
        } catch (_0x5185a5) {
            _0x4cfbd6.push(_0x4cfbd6.shift());
        }
    }
})(_0x1286, 785018);

const should = require(_0x221e8d(0x1ef));

const sinon = require('sinon');

const urlUtils = require(_0x221e8d(0x1f0));

const urlService = require(_0x221e8d(0x1f1));

const getUrl = require(_0x221e8d(0x1f2));

const testUtils = require(_0x221e8d(0x1f3));

function _0x11f7(_0x2dd77c, _0x448c42) {
    return _0x11f7 = function (_0x2b857a, _0x3317c5) {
        _0x2b857a = _0x2b857a - 485;
        const _0x8e6e1a = _0x1286[_0x2b857a];

        return _0x8e6e1a;
    }, _0x11f7(_0x2dd77c, _0x448c42);
}
describe('getUrl', function () {
    const _0x1d56d2 = _0x221e8d;
    const _0x615975 = {
        'FTQXJ': _0x1d56d2(0x1f4),
        'YEPpR': 'urlFor',
        'SEVIS': _0x1d56d2(0x1f5),
        'UTznm': function (_0x5977b2, _0x5cca78) {
            return _0x5977b2 + _0x5cca78;
        },
        'VLFlt': _0x1d56d2(0x1f6),
        'WuVbT': 'absolute secure',
        'OTMCe': _0x1d56d2(0x1f7),
        'kcBZN': _0x1d56d2(0x1f8),
        'kinNO': function (_0x132e67, _0xb7f2ec, _0x537bfd) {
            return _0x132e67(_0xb7f2ec, _0x537bfd);
        },
        'EFVob': function (_0x4bb6a0, _0x11f25c) {
            return _0x4bb6a0 + _0x11f25c;
        },
        'rpLoh': function (_0x58fcb7, _0x546247, _0x5155ef) {
            return _0x58fcb7(_0x546247, _0x5155ef);
        },
        'BPaKz': _0x1d56d2(0x1f9),
        'rUXLG': _0x1d56d2(0x1fa),
        'DGZQD': _0x1d56d2(0x1fb),
        'LWCHZ': 'absolute/*/',
        'PYqNa': 'tag url',
        'QEfdR': function (_0x6bb71d, _0x5b3c8f) {
            return _0x6bb71d(_0x5b3c8f);
        },
        'FWpfY': _0x1d56d2(0x1fc),
        'Effdx': function (_0x2021ba, _0x31bb16) {
            return _0x2021ba(_0x31bb16);
        },
        'ncNnZ': _0x1d56d2(0x1fd),
        'qhPdI': function (_0x5b8086, _0x6e4bc) {
            return _0x5b8086(_0x6e4bc);
        },
        'fyUga': _0x1d56d2(0x1fe),
        'XwZly': '/about-me/',
        'TdZSf': _0x1d56d2(0x1ff),
        'twpko': _0x1d56d2(0x200),
        'bZBRV': 'nav url',
        'fBhSs': 'About Me',
        'OzNDx': 'absolute nav url',
        'kzJvs': function (_0x25e292, _0x11f004, _0x158253) {
            return _0x25e292(_0x11f004, _0x158253);
        },
        'MHeWR': 'should return url for a post',
        'AYzmU': _0x1d56d2(0x201),
        'tZXWu': _0x1d56d2(0x202),
        'dTDYF': function (_0x5965a4, _0x1157d7, _0x12799f) {
            return _0x5965a4(_0x1157d7, _0x12799f);
        },
        'TxmlY': _0x1d56d2(0x203),
        'EzgNp': _0x1d56d2(0x204),
        'PvBuR': function (_0x36904c, _0x281c02, _0x54e54d) {
            return _0x36904c(_0x281c02, _0x54e54d);
        },
        'vGJYJ': 'should return url for a nav',
        'Xeuxu': function (_0x597e76, _0x18ab57, _0x284902) {
            return _0x597e76(_0x18ab57, _0x284902);
        },
        'llVZh': _0x1d56d2(0x205)
    };

    beforeEach(function () {
        const _0x2c9cc4 = _0x1d56d2;

        sinon[_0x2c9cc4(0x206)](urlService, _0x615975[_0x2c9cc4(0x207)]), sinon[_0x2c9cc4(0x206)](urlUtils, _0x615975.YEPpR);
    }), afterEach(function () {
        const _0x41d18d = _0x1d56d2;

        sinon[_0x41d18d(0x208)]();
    }), _0x615975.kzJvs(it, _0x615975[_0x1d56d2(0x209)], function () {
        const _0x41cd40 = _0x1d56d2;

        const _0x577811 = testUtils[_0x41cd40(0x20a)][_0x41cd40(0x20b)][_0x41cd40(0x20c)]();

        urlService[_0x41cd40(0x1f4)][_0x41cd40(0x20d)](_0x577811.id, {
            'absolute': undefined,
            'secure': undefined,
            'withSubdirectory': true
        }).returns(_0x615975.SEVIS), getUrl(_0x577811)[_0x41cd40(0x1ef)].eql(_0x615975[_0x41cd40(0x20e)]);
    }), _0x615975[_0x1d56d2(0x20f)](describe, _0x615975.AYzmU, function () {
        const _0x4a2ba0 = _0x1d56d2;
        const _0x82efbd = {
            'kFbIh': _0x4a2ba0(0x210),
            'WIgdM': _0x615975[_0x4a2ba0(0x211)],
            'qPSjd': function (_0x28e8b2, _0x43092e) {
                const _0x2a1786 = _0x4a2ba0;

                return _0x615975[_0x2a1786(0x212)](_0x28e8b2, _0x43092e);
            },
            'VbYyi': _0x615975[_0x4a2ba0(0x213)],
            'mCLvK': _0x4a2ba0(0x214),
            'OjPKM': function (_0x4874a0, _0x958582) {
                return _0x4874a0(_0x958582);
            },
            'SaaWW': function (_0x7967d8, _0x33c871) {
                const _0x67142d = _0x4a2ba0;

                return _0x615975[_0x67142d(0x212)](_0x7967d8, _0x33c871);
            },
            'pGENW': _0x615975.kcBZN,
            'JrCZE': function (_0x12f1d1, _0x1ebd1c, _0x5b0db0) {
                const _0x5e7a07 = _0x4a2ba0;

                return _0x615975[_0x5e7a07(0x215)](_0x12f1d1, _0x1ebd1c, _0x5b0db0);
            },
            'lOPer': function (_0x13a764, _0x818b9c) {
                const _0x16bac3 = _0x4a2ba0;

                return _0x615975[_0x16bac3(0x216)](_0x13a764, _0x818b9c);
            }
        };

        _0x615975[_0x4a2ba0(0x217)](it, _0x4a2ba0(0x218), function () {
            const _0x3be6c9 = _0x4a2ba0;

            const _0xeeee88 = testUtils[_0x3be6c9(0x20a)].forKnex.createPost({ 'status': _0x82efbd[_0x3be6c9(0x219)] });

            urlService[_0x3be6c9(0x1f4)][_0x3be6c9(0x20d)](_0xeeee88.id)[_0x3be6c9(0x21a)](_0x82efbd[_0x3be6c9(0x21b)]), urlUtils[_0x3be6c9(0x21c)][_0x3be6c9(0x20d)]({
                'relativeUrl': _0x82efbd.qPSjd(_0x82efbd[_0x3be6c9(0x21d)](_0x82efbd[_0x3be6c9(0x21e)], _0xeeee88.uuid), '/'),
                'secure': undefined
            }, null, undefined)[_0x3be6c9(0x21a)](_0x82efbd[_0x3be6c9(0x21f)]);

            const _0x23ab42 = _0x82efbd[_0x3be6c9(0x220)](getUrl, _0xeeee88);

            urlService[_0x3be6c9(0x1f4)][_0x3be6c9(0x221)][_0x3be6c9(0x1ef)].be[_0x3be6c9(0x222)](), urlUtils[_0x3be6c9(0x21c)][_0x3be6c9(0x20d)]({
                'relativeUrl': _0x82efbd[_0x3be6c9(0x21d)](_0x82efbd.VbYyi, _0xeeee88[_0x3be6c9(0x223)]) + '/',
                'secure': undefined
            }, null, undefined).calledOnce[_0x3be6c9(0x1ef)].be[_0x3be6c9(0x222)](), _0x23ab42.should[_0x3be6c9(0x224)](_0x82efbd.mCLvK);
        }), it(_0x615975[_0x4a2ba0(0x225)], function () {
            const _0x38c719 = _0x4a2ba0;

            const _0x2a729c = testUtils.DataGenerator[_0x38c719(0x20b)][_0x38c719(0x20c)]({ 'status': _0x82efbd.kFbIh });

            urlService[_0x38c719(0x1f4)][_0x38c719(0x20d)](_0x2a729c.id)[_0x38c719(0x21a)](_0x82efbd.WIgdM), urlUtils[_0x38c719(0x21c)][_0x38c719(0x20d)]({
                'relativeUrl': _0x82efbd[_0x38c719(0x226)](_0x82efbd.VbYyi, _0x2a729c[_0x38c719(0x223)]) + '/',
                'secure': undefined
            }, null, true)[_0x38c719(0x21a)](_0x82efbd[_0x38c719(0x227)]);

            const _0x62db23 = _0x82efbd[_0x38c719(0x228)](getUrl, _0x2a729c, true);

            urlService.getUrlByResourceId[_0x38c719(0x221)][_0x38c719(0x1ef)].be[_0x38c719(0x222)](), urlUtils[_0x38c719(0x21c)][_0x38c719(0x20d)]({
                'relativeUrl': _0x82efbd.lOPer(_0x82efbd.VbYyi, _0x2a729c[_0x38c719(0x223)]) + '/',
                'secure': undefined
            }, null, true)[_0x38c719(0x221)][_0x38c719(0x1ef)].be[_0x38c719(0x222)](), _0x62db23[_0x38c719(0x1ef)][_0x38c719(0x224)](_0x82efbd[_0x38c719(0x227)]);
        }), _0x615975.rpLoh(it, _0x4a2ba0(0x229), function () {
            const _0x590fd3 = _0x4a2ba0;

            const _0x5ad6c7 = testUtils.DataGenerator[_0x590fd3(0x20b)].createPost({ 'status': _0x590fd3(0x210) });

            _0x5ad6c7[_0x590fd3(0x22a)] = true, urlService[_0x590fd3(0x1f4)][_0x590fd3(0x20d)](_0x5ad6c7.id).returns('/404/'), urlUtils.urlFor[_0x590fd3(0x20d)]({
                'relativeUrl': _0x615975[_0x590fd3(0x212)](_0x615975[_0x590fd3(0x213)] + _0x5ad6c7.uuid, '/'),
                'secure': true
            }, null, true).returns(_0x590fd3(0x22b));

            const _0x518d7e = getUrl(_0x5ad6c7, true);

            urlService[_0x590fd3(0x1f4)][_0x590fd3(0x221)][_0x590fd3(0x1ef)].be[_0x590fd3(0x222)](), urlUtils[_0x590fd3(0x21c)].withArgs({
                'relativeUrl': _0x615975[_0x590fd3(0x212)](_0x615975.UTznm(_0x615975[_0x590fd3(0x213)], _0x5ad6c7[_0x590fd3(0x223)]), '/'),
                'secure': true
            }, null, true).calledOnce.should.be[_0x590fd3(0x222)](), _0x518d7e[_0x590fd3(0x1ef)][_0x590fd3(0x224)](_0x615975[_0x590fd3(0x22c)]);
        });
    }), _0x615975[_0x1d56d2(0x20f)](it, _0x1d56d2(0x22d), function () {
        const _0x1421c0 = _0x1d56d2;

        const _0x3ae2d6 = testUtils[_0x1421c0(0x20a)][_0x1421c0(0x20b)][_0x1421c0(0x20c)]();

        urlService[_0x1421c0(0x1f4)][_0x1421c0(0x20d)](_0x3ae2d6.id, {
            'absolute': true,
            'secure': undefined,
            'withSubdirectory': true
        })[_0x1421c0(0x21a)](_0x615975[_0x1421c0(0x22e)]), getUrl(_0x3ae2d6, true).should[_0x1421c0(0x224)](_0x615975[_0x1421c0(0x22e)]);
    }), _0x615975[_0x1d56d2(0x20f)](it, _0x615975[_0x1d56d2(0x22f)], function () {
        const _0x5900c2 = _0x1d56d2;
        const _0x18f3f6 = { 'relativeUrl': _0x5900c2(0x230) };

        urlUtils[_0x5900c2(0x21c)].withArgs(_0x18f3f6, {}, true)[_0x5900c2(0x21a)](_0x615975.DGZQD), _0x615975[_0x5900c2(0x217)](getUrl, _0x18f3f6, true)[_0x5900c2(0x1ef)][_0x5900c2(0x224)](_0x615975[_0x5900c2(0x231)]), urlService[_0x5900c2(0x1f4)][_0x5900c2(0x232)][_0x5900c2(0x1ef)].be[_0x5900c2(0x233)]();
    }), it(_0x1d56d2(0x234), function () {
        const _0x3b0048 = _0x1d56d2;

        const _0x3a13a0 = testUtils[_0x3b0048(0x20a)][_0x3b0048(0x20b)][_0x3b0048(0x235)]();

        _0x3a13a0[_0x3b0048(0x236)] = null, urlService[_0x3b0048(0x1f4)][_0x3b0048(0x20d)](_0x3a13a0.id, {
            'absolute': undefined,
            'secure': undefined,
            'withSubdirectory': true
        })[_0x3b0048(0x21a)](_0x615975[_0x3b0048(0x237)]), _0x615975.QEfdR(getUrl, _0x3a13a0)[_0x3b0048(0x1ef)][_0x3b0048(0x224)](_0x615975[_0x3b0048(0x237)]);
    }), _0x615975[_0x1d56d2(0x238)](it, _0x615975[_0x1d56d2(0x239)], function () {
        const _0x74cbcf = _0x1d56d2;

        const _0x356090 = testUtils[_0x74cbcf(0x20a)][_0x74cbcf(0x20b)][_0x74cbcf(0x235)]();

        _0x356090[_0x74cbcf(0x236)] = null, _0x356090[_0x74cbcf(0x22a)] = true, urlService[_0x74cbcf(0x1f4)][_0x74cbcf(0x20d)](_0x356090.id, {
            'absolute': undefined,
            'secure': true,
            'withSubdirectory': true
        }).returns(_0x615975.FWpfY), _0x615975[_0x74cbcf(0x23a)](getUrl, _0x356090)[_0x74cbcf(0x1ef)][_0x74cbcf(0x224)](_0x615975.FWpfY);
    }), it(_0x615975[_0x1d56d2(0x23b)], function () {
        const _0x2e5e15 = _0x1d56d2;

        const _0x5193d6 = testUtils.DataGenerator[_0x2e5e15(0x20b)][_0x2e5e15(0x23c)]();

        urlService[_0x2e5e15(0x1f4)][_0x2e5e15(0x20d)](_0x5193d6.id, {
            'absolute': undefined,
            'secure': undefined,
            'withSubdirectory': true
        })[_0x2e5e15(0x21a)](_0x615975.ncNnZ), _0x615975[_0x2e5e15(0x23d)](getUrl, _0x5193d6)[_0x2e5e15(0x1ef)].eql(_0x615975[_0x2e5e15(0x23e)]);
    }), _0x615975.PvBuR(it, _0x1d56d2(0x23f), function () {
        const _0x4abf3e = _0x1d56d2;

        const _0x133097 = testUtils[_0x4abf3e(0x20a)][_0x4abf3e(0x20b)].createUser();

        _0x133097[_0x4abf3e(0x22a)] = true, urlService[_0x4abf3e(0x1f4)][_0x4abf3e(0x20d)](_0x133097.id, {
            'absolute': true,
            'secure': true,
            'withSubdirectory': true
        })[_0x4abf3e(0x21a)]('absolute secure author url'), _0x615975[_0x4abf3e(0x217)](getUrl, _0x133097, true)[_0x4abf3e(0x1ef)][_0x4abf3e(0x224)](_0x615975[_0x4abf3e(0x240)]);
    }), _0x615975.PvBuR(it, _0x615975[_0x1d56d2(0x241)], function () {
        const _0x3a9934 = _0x1d56d2;
        const _0x25e940 = {
            'label': 'About Me',
            'url': _0x615975[_0x3a9934(0x242)],
            'slug': _0x615975[_0x3a9934(0x243)],
            'current': true
        };

        urlUtils.urlFor[_0x3a9934(0x20d)](_0x615975[_0x3a9934(0x244)], {
            'nav': _0x25e940,
            'secure': _0x25e940.secure
        }, undefined).returns(_0x615975[_0x3a9934(0x245)]), getUrl(_0x25e940)[_0x3a9934(0x1ef)][_0x3a9934(0x246)](_0x615975.bZBRV);
    }), _0x615975[_0x1d56d2(0x247)](it, _0x615975[_0x1d56d2(0x248)], function () {
        const _0x1c427e = _0x1d56d2;
        const _0x3c530e = {
            'label': _0x615975[_0x1c427e(0x249)],
            'url': _0x615975[_0x1c427e(0x242)],
            'slug': _0x615975.TdZSf,
            'current': true
        };

        urlUtils.urlFor.withArgs(_0x615975[_0x1c427e(0x244)], {
            'nav': _0x3c530e,
            'secure': _0x3c530e[_0x1c427e(0x22a)]
        }, true)[_0x1c427e(0x21a)](_0x615975[_0x1c427e(0x24a)]), getUrl(_0x3c530e, true)[_0x1c427e(0x1ef)].equal(_0x1c427e(0x24b));
    }), _0x615975[_0x1d56d2(0x247)](it, 'should return `relativeUrl` and remove /amp/ in url', function () {
        const _0x40aaf4 = _0x1d56d2;
        const _0x21cb6d = { 'relativeUrl': _0x40aaf4(0x230) };

        urlUtils[_0x40aaf4(0x21c)][_0x40aaf4(0x20d)](_0x21cb6d, {}, undefined)[_0x40aaf4(0x21a)](_0x21cb6d[_0x40aaf4(0x24c)]), getUrl(_0x21cb6d)[_0x40aaf4(0x1ef)].eql(_0x40aaf4(0x24d)), urlService.getUrlByResourceId[_0x40aaf4(0x232)].should.be.false();
    });
});
