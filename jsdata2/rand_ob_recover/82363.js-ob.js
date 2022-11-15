const should = require(_0x221e8d(495)), sinon = require('sinon'), urlUtils = require(_0x221e8d(496)), urlService = require(_0x221e8d(497)), getUrl = require(_0x221e8d(498)), testUtils = require(_0x221e8d(499));
function _0x11f7(_0x2dd77c, _0x448c42) {
    return _0x11f7 = function (_0x2b857a, _0x3317c5) {
        _0x2b857a = _0x2b857a - (-1125 + -7563 + 1 * 9173);
        let _0x8e6e1a = _0x1286[_0x2b857a];
        return _0x8e6e1a;
    }, _0x11f7(_0x2dd77c, _0x448c42);
}
describe('getUrl', function () {
    const _0x1d56d2 = _0x221e8d, _0x615975 = {
            'FTQXJ': _0x1d56d2(500),
            'YEPpR': 'urlFor',
            'SEVIS': _0x1d56d2(501),
            'UTznm': function (_0x5977b2, _0x5cca78) {
                return _0x5977b2 + _0x5cca78;
            },
            'VLFlt': _0x1d56d2(502),
            'WuVbT': 'absolute secure',
            'OTMCe': _0x1d56d2(503),
            'kcBZN': _0x1d56d2(504),
            'kinNO': function (_0x132e67, _0xb7f2ec, _0x537bfd) {
                return _0x132e67(_0xb7f2ec, _0x537bfd);
            },
            'EFVob': function (_0x4bb6a0, _0x11f25c) {
                return _0x4bb6a0 + _0x11f25c;
            },
            'rpLoh': function (_0x58fcb7, _0x546247, _0x5155ef) {
                return _0x58fcb7(_0x546247, _0x5155ef);
            },
            'BPaKz': _0x1d56d2(505),
            'rUXLG': _0x1d56d2(506),
            'DGZQD': _0x1d56d2(507),
            'LWCHZ': 'absolute/*/',
            'PYqNa': 'tag url',
            'QEfdR': function (_0x6bb71d, _0x5b3c8f) {
                return _0x6bb71d(_0x5b3c8f);
            },
            'FWpfY': _0x1d56d2(508),
            'Effdx': function (_0x2021ba, _0x31bb16) {
                return _0x2021ba(_0x31bb16);
            },
            'ncNnZ': _0x1d56d2(509),
            'qhPdI': function (_0x5b8086, _0x6e4bc) {
                return _0x5b8086(_0x6e4bc);
            },
            'fyUga': _0x1d56d2(510),
            'XwZly': '/about-me/',
            'TdZSf': _0x1d56d2(511),
            'twpko': _0x1d56d2(512),
            'bZBRV': 'nav url',
            'fBhSs': 'About Me',
            'OzNDx': 'absolute nav url',
            'kzJvs': function (_0x25e292, _0x11f004, _0x158253) {
                return _0x25e292(_0x11f004, _0x158253);
            },
            'MHeWR': 'should return url for a post',
            'AYzmU': _0x1d56d2(513),
            'tZXWu': _0x1d56d2(514),
            'dTDYF': function (_0x5965a4, _0x1157d7, _0x12799f) {
                return _0x5965a4(_0x1157d7, _0x12799f);
            },
            'TxmlY': _0x1d56d2(515),
            'EzgNp': _0x1d56d2(516),
            'PvBuR': function (_0x36904c, _0x281c02, _0x54e54d) {
                return _0x36904c(_0x281c02, _0x54e54d);
            },
            'vGJYJ': 'should return url for a nav',
            'Xeuxu': function (_0x597e76, _0x18ab57, _0x284902) {
                return _0x597e76(_0x18ab57, _0x284902);
            },
            'llVZh': _0x1d56d2(517)
        };
    beforeEach(function () {
        const _0x2c9cc4 = _0x1d56d2;
        sinon[_0x2c9cc4(518)](urlService, _0x615975[_0x2c9cc4(519)]), sinon[_0x2c9cc4(518)](urlUtils, _0x615975['YEPpR']);
    }), afterEach(function () {
        const _0x41d18d = _0x1d56d2;
        sinon[_0x41d18d(520)]();
    }), _0x615975['kzJvs'](it, _0x615975[_0x1d56d2(521)], function () {
        const _0x41cd40 = _0x1d56d2, _0x577811 = testUtils[_0x41cd40(522)][_0x41cd40(523)][_0x41cd40(524)]();
        urlService[_0x41cd40(500)][_0x41cd40(525)](_0x577811['id'], {
            'absolute': undefined,
            'secure': undefined,
            'withSubdirectory': !![]
        })['returns'](_0x615975['SEVIS']), getUrl(_0x577811)[_0x41cd40(495)]['eql'](_0x615975[_0x41cd40(526)]);
    }), _0x615975[_0x1d56d2(527)](describe, _0x615975['AYzmU'], function () {
        const _0x4a2ba0 = _0x1d56d2, _0x82efbd = {
                'kFbIh': _0x4a2ba0(528),
                'WIgdM': _0x615975[_0x4a2ba0(529)],
                'qPSjd': function (_0x28e8b2, _0x43092e) {
                    const _0x2a1786 = _0x4a2ba0;
                    return _0x615975[_0x2a1786(530)](_0x28e8b2, _0x43092e);
                },
                'VbYyi': _0x615975[_0x4a2ba0(531)],
                'mCLvK': _0x4a2ba0(532),
                'OjPKM': function (_0x4874a0, _0x958582) {
                    return _0x4874a0(_0x958582);
                },
                'SaaWW': function (_0x7967d8, _0x33c871) {
                    const _0x67142d = _0x4a2ba0;
                    return _0x615975[_0x67142d(530)](_0x7967d8, _0x33c871);
                },
                'pGENW': _0x615975['kcBZN'],
                'JrCZE': function (_0x12f1d1, _0x1ebd1c, _0x5b0db0) {
                    const _0x5e7a07 = _0x4a2ba0;
                    return _0x615975[_0x5e7a07(533)](_0x12f1d1, _0x1ebd1c, _0x5b0db0);
                },
                'lOPer': function (_0x13a764, _0x818b9c) {
                    const _0x16bac3 = _0x4a2ba0;
                    return _0x615975[_0x16bac3(534)](_0x13a764, _0x818b9c);
                }
            };
        _0x615975[_0x4a2ba0(535)](it, _0x4a2ba0(536), function () {
            const _0x3be6c9 = _0x4a2ba0, _0xeeee88 = testUtils[_0x3be6c9(522)]['forKnex']['createPost']({ 'status': _0x82efbd[_0x3be6c9(537)] });
            urlService[_0x3be6c9(500)][_0x3be6c9(525)](_0xeeee88['id'])[_0x3be6c9(538)](_0x82efbd[_0x3be6c9(539)]), urlUtils[_0x3be6c9(540)][_0x3be6c9(525)]({
                'relativeUrl': _0x82efbd['qPSjd'](_0x82efbd[_0x3be6c9(541)](_0x82efbd[_0x3be6c9(542)], _0xeeee88['uuid']), '/'),
                'secure': undefined
            }, null, undefined)[_0x3be6c9(538)](_0x82efbd[_0x3be6c9(543)]);
            let _0x23ab42 = _0x82efbd[_0x3be6c9(544)](getUrl, _0xeeee88);
            urlService[_0x3be6c9(500)][_0x3be6c9(545)][_0x3be6c9(495)]['be'][_0x3be6c9(546)](), urlUtils[_0x3be6c9(540)][_0x3be6c9(525)]({
                'relativeUrl': _0x82efbd[_0x3be6c9(541)](_0x82efbd['VbYyi'], _0xeeee88[_0x3be6c9(547)]) + '/',
                'secure': undefined
            }, null, undefined)['calledOnce'][_0x3be6c9(495)]['be'][_0x3be6c9(546)](), _0x23ab42['should'][_0x3be6c9(548)](_0x82efbd['mCLvK']);
        }), it(_0x615975[_0x4a2ba0(549)], function () {
            const _0x38c719 = _0x4a2ba0, _0x2a729c = testUtils['DataGenerator'][_0x38c719(523)][_0x38c719(524)]({ 'status': _0x82efbd['kFbIh'] });
            urlService[_0x38c719(500)][_0x38c719(525)](_0x2a729c['id'])[_0x38c719(538)](_0x82efbd['WIgdM']), urlUtils[_0x38c719(540)][_0x38c719(525)]({
                'relativeUrl': _0x82efbd[_0x38c719(550)](_0x82efbd['VbYyi'], _0x2a729c[_0x38c719(547)]) + '/',
                'secure': undefined
            }, null, !![])[_0x38c719(538)](_0x82efbd[_0x38c719(551)]);
            let _0x62db23 = _0x82efbd[_0x38c719(552)](getUrl, _0x2a729c, !![]);
            urlService['getUrlByResourceId'][_0x38c719(545)][_0x38c719(495)]['be'][_0x38c719(546)](), urlUtils[_0x38c719(540)][_0x38c719(525)]({
                'relativeUrl': _0x82efbd['lOPer'](_0x82efbd['VbYyi'], _0x2a729c[_0x38c719(547)]) + '/',
                'secure': undefined
            }, null, !![])[_0x38c719(545)][_0x38c719(495)]['be'][_0x38c719(546)](), _0x62db23[_0x38c719(495)][_0x38c719(548)](_0x82efbd[_0x38c719(551)]);
        }), _0x615975['rpLoh'](it, _0x4a2ba0(553), function () {
            const _0x590fd3 = _0x4a2ba0, _0x5ad6c7 = testUtils['DataGenerator'][_0x590fd3(523)]['createPost']({ 'status': _0x590fd3(528) });
            _0x5ad6c7[_0x590fd3(554)] = !![], urlService[_0x590fd3(500)][_0x590fd3(525)](_0x5ad6c7['id'])['returns']('/404/'), urlUtils['urlFor'][_0x590fd3(525)]({
                'relativeUrl': _0x615975[_0x590fd3(530)](_0x615975[_0x590fd3(531)] + _0x5ad6c7['uuid'], '/'),
                'secure': !![]
            }, null, !![])['returns'](_0x590fd3(555));
            let _0x518d7e = getUrl(_0x5ad6c7, !![]);
            urlService[_0x590fd3(500)][_0x590fd3(545)][_0x590fd3(495)]['be'][_0x590fd3(546)](), urlUtils[_0x590fd3(540)]['withArgs']({
                'relativeUrl': _0x615975[_0x590fd3(530)](_0x615975['UTznm'](_0x615975[_0x590fd3(531)], _0x5ad6c7[_0x590fd3(547)]), '/'),
                'secure': !![]
            }, null, !![])['calledOnce']['should']['be'][_0x590fd3(546)](), _0x518d7e[_0x590fd3(495)][_0x590fd3(548)](_0x615975[_0x590fd3(556)]);
        });
    }), _0x615975[_0x1d56d2(527)](it, _0x1d56d2(557), function () {
        const _0x1421c0 = _0x1d56d2, _0x3ae2d6 = testUtils[_0x1421c0(522)][_0x1421c0(523)][_0x1421c0(524)]();
        urlService[_0x1421c0(500)][_0x1421c0(525)](_0x3ae2d6['id'], {
            'absolute': !![],
            'secure': undefined,
            'withSubdirectory': !![]
        })[_0x1421c0(538)](_0x615975[_0x1421c0(558)]), getUrl(_0x3ae2d6, !![])['should'][_0x1421c0(548)](_0x615975[_0x1421c0(558)]);
    }), _0x615975[_0x1d56d2(527)](it, _0x615975[_0x1d56d2(559)], function () {
        const _0x5900c2 = _0x1d56d2, _0x18f3f6 = { 'relativeUrl': _0x5900c2(560) };
        urlUtils[_0x5900c2(540)]['withArgs'](_0x18f3f6, {}, !![])[_0x5900c2(538)](_0x615975['DGZQD']), _0x615975[_0x5900c2(535)](getUrl, _0x18f3f6, !![])[_0x5900c2(495)][_0x5900c2(548)](_0x615975[_0x5900c2(561)]), urlService[_0x5900c2(500)][_0x5900c2(562)][_0x5900c2(495)]['be'][_0x5900c2(563)]();
    }), it(_0x1d56d2(564), function () {
        const _0x3b0048 = _0x1d56d2, _0x3a13a0 = testUtils[_0x3b0048(522)][_0x3b0048(523)][_0x3b0048(565)]();
        _0x3a13a0[_0x3b0048(566)] = null, urlService[_0x3b0048(500)][_0x3b0048(525)](_0x3a13a0['id'], {
            'absolute': undefined,
            'secure': undefined,
            'withSubdirectory': !![]
        })[_0x3b0048(538)](_0x615975[_0x3b0048(567)]), _0x615975['QEfdR'](getUrl, _0x3a13a0)[_0x3b0048(495)][_0x3b0048(548)](_0x615975[_0x3b0048(567)]);
    }), _0x615975[_0x1d56d2(568)](it, _0x615975[_0x1d56d2(569)], function () {
        const _0x74cbcf = _0x1d56d2, _0x356090 = testUtils[_0x74cbcf(522)][_0x74cbcf(523)][_0x74cbcf(565)]();
        _0x356090[_0x74cbcf(566)] = null, _0x356090[_0x74cbcf(554)] = !![], urlService[_0x74cbcf(500)][_0x74cbcf(525)](_0x356090['id'], {
            'absolute': undefined,
            'secure': !![],
            'withSubdirectory': !![]
        })['returns'](_0x615975['FWpfY']), _0x615975[_0x74cbcf(570)](getUrl, _0x356090)[_0x74cbcf(495)][_0x74cbcf(548)](_0x615975['FWpfY']);
    }), it(_0x615975[_0x1d56d2(571)], function () {
        const _0x2e5e15 = _0x1d56d2, _0x5193d6 = testUtils['DataGenerator'][_0x2e5e15(523)][_0x2e5e15(572)]();
        urlService[_0x2e5e15(500)][_0x2e5e15(525)](_0x5193d6['id'], {
            'absolute': undefined,
            'secure': undefined,
            'withSubdirectory': !![]
        })[_0x2e5e15(538)](_0x615975['ncNnZ']), _0x615975[_0x2e5e15(573)](getUrl, _0x5193d6)[_0x2e5e15(495)]['eql'](_0x615975[_0x2e5e15(574)]);
    }), _0x615975['PvBuR'](it, _0x1d56d2(575), function () {
        const _0x4abf3e = _0x1d56d2, _0x133097 = testUtils[_0x4abf3e(522)][_0x4abf3e(523)]['createUser']();
        _0x133097[_0x4abf3e(554)] = !![], urlService[_0x4abf3e(500)][_0x4abf3e(525)](_0x133097['id'], {
            'absolute': !![],
            'secure': !![],
            'withSubdirectory': !![]
        })[_0x4abf3e(538)]('absolute secure author url'), _0x615975[_0x4abf3e(535)](getUrl, _0x133097, !![])[_0x4abf3e(495)][_0x4abf3e(548)](_0x615975[_0x4abf3e(576)]);
    }), _0x615975['PvBuR'](it, _0x615975[_0x1d56d2(577)], function () {
        const _0x3a9934 = _0x1d56d2, _0x25e940 = {
                'label': 'About Me',
                'url': _0x615975[_0x3a9934(578)],
                'slug': _0x615975[_0x3a9934(579)],
                'current': !![]
            };
        urlUtils['urlFor'][_0x3a9934(525)](_0x615975[_0x3a9934(580)], {
            'nav': _0x25e940,
            'secure': _0x25e940['secure']
        }, undefined)['returns'](_0x615975[_0x3a9934(581)]), getUrl(_0x25e940)[_0x3a9934(495)][_0x3a9934(582)](_0x615975['bZBRV']);
    }), _0x615975[_0x1d56d2(583)](it, _0x615975[_0x1d56d2(584)], function () {
        const _0x1c427e = _0x1d56d2, _0x3c530e = {
                'label': _0x615975[_0x1c427e(585)],
                'url': _0x615975[_0x1c427e(578)],
                'slug': _0x615975['TdZSf'],
                'current': !![]
            };
        urlUtils['urlFor']['withArgs'](_0x615975[_0x1c427e(580)], {
            'nav': _0x3c530e,
            'secure': _0x3c530e[_0x1c427e(554)]
        }, !![])[_0x1c427e(538)](_0x615975[_0x1c427e(586)]), getUrl(_0x3c530e, !![])[_0x1c427e(495)]['equal'](_0x1c427e(587));
    }), _0x615975[_0x1d56d2(583)](it, 'should return `relativeUrl` and remove /amp/ in url', function () {
        const _0x40aaf4 = _0x1d56d2, _0x21cb6d = { 'relativeUrl': _0x40aaf4(560) };
        urlUtils[_0x40aaf4(540)][_0x40aaf4(525)](_0x21cb6d, {}, undefined)[_0x40aaf4(538)](_0x21cb6d[_0x40aaf4(588)]), getUrl(_0x21cb6d)[_0x40aaf4(495)]['eql'](_0x40aaf4(589)), urlService['getUrlByResourceId'][_0x40aaf4(562)]['should']['be']['false']();
    });
});