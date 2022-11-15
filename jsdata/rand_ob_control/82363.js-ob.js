const should = require('should'), sinon = require('sinon'), urlUtils = require('../../../core/shared/url-utils'), urlService = require('../../../core/frontend/services/url'), getUrl = require('../../../core/frontend/meta/url'), testUtils = require('../../utils');
describe('getUrl', function () {
    const _0x2750e2 = {
        'MgBkX': 'getUrlByResourceId',
        'LJSOd': 'urlFor',
        'vhcAi': 'post\x20url',
        'UYhPS': function (_0x37c9ac, _0xd06bba) {
            return _0x37c9ac(_0xd06bba);
        },
        'Jjdgu': 'draft',
        'VBxbn': '/404/',
        'RfhFV': function (_0x35e91c, _0x18a758) {
            return _0x35e91c + _0x18a758;
        },
        'IbSqv': '/p/',
        'NUfVS': 'relative',
        'bLbaA': function (_0x494adb, _0x166b93) {
            return _0x494adb + _0x166b93;
        },
        'OxSVq': 'absolute',
        'iiNtI': function (_0x5e3865, _0x23930c, _0x722032) {
            return _0x5e3865(_0x23930c, _0x722032);
        },
        'pFIhS': function (_0x2e0910, _0x3ba3a4) {
            return _0x2e0910 + _0x3ba3a4;
        },
        'pdTKj': function (_0x555737, _0x5a5113) {
            return _0x555737 + _0x5a5113;
        },
        'GzRab': 'absolute\x20secure',
        'XlKcF': function (_0x4f9787, _0x5224c1, _0x3d66d1) {
            return _0x4f9787(_0x5224c1, _0x3d66d1);
        },
        'HlBwZ': function (_0x9e44c, _0x1896f2) {
            return _0x9e44c + _0x1896f2;
        },
        'cedbO': function (_0x13a4ea, _0x5628b0) {
            return _0x13a4ea + _0x5628b0;
        },
        'rvsNO': function (_0x250028, _0x3cf1a0, _0x5ad608) {
            return _0x250028(_0x3cf1a0, _0x5ad608);
        },
        'XOGzN': 'not\x20absolute,\x20not\x20secure',
        'gGvVk': function (_0x174eb9, _0x4d91c7, _0x1fd3ff) {
            return _0x174eb9(_0x4d91c7, _0x1fd3ff);
        },
        'BTvhX': 'absolute,\x20not\x20secure',
        'jodHx': function (_0x9f47c0, _0x31f020, _0x31580d) {
            return _0x9f47c0(_0x31f020, _0x31580d);
        },
        'AhWhW': 'absolute,\x20secure',
        'zvIIG': 'absolute\x20post\x20url',
        'IfGND': '/*/amp/',
        'pcJya': 'absolute/*/amp/',
        'dlYSn': function (_0xc455a6, _0x575d6f, _0x544cdd) {
            return _0xc455a6(_0x575d6f, _0x544cdd);
        },
        'YKwEc': 'absolute/*/',
        'khZsw': 'tag\x20url',
        'mmxjH': 'secure\x20tag\x20url',
        'CPLRi': function (_0x4ad05e, _0x3d610e) {
            return _0x4ad05e(_0x3d610e);
        },
        'xGzzs': 'author\x20url',
        'UwETh': 'absolute\x20secure\x20author\x20url',
        'sALiE': function (_0x4701fa, _0x5977cb, _0x2489e6) {
            return _0x4701fa(_0x5977cb, _0x2489e6);
        },
        'nOFJz': 'About\x20Me',
        'eoGGH': '/about-me/',
        'YwKAP': 'about-me',
        'LONIJ': 'nav',
        'qHFTd': 'nav\x20url',
        'fyelh': function (_0x12d123, _0x404fbf) {
            return _0x12d123(_0x404fbf);
        },
        'bzpwA': 'absolute\x20nav\x20url',
        'SxlEP': function (_0x1e8a43, _0x1091df) {
            return _0x1e8a43(_0x1091df);
        },
        'HAANj': '/*/',
        'eqDRn': function (_0x255211, _0x2462eb) {
            return _0x255211(_0x2462eb);
        },
        'djpEA': function (_0x48c0e9, _0x438a37) {
            return _0x48c0e9(_0x438a37);
        },
        'kyfIJ': function (_0x172811, _0x243fa7, _0x21acf7) {
            return _0x172811(_0x243fa7, _0x21acf7);
        },
        'tQnOz': 'should\x20return\x20url\x20for\x20a\x20post',
        'lzuXi': 'preview\x20url:\x20drafts/scheduled\x20posts',
        'WtZfH': function (_0x4eaa1b, _0x44d762, _0x24ff84) {
            return _0x4eaa1b(_0x44d762, _0x24ff84);
        },
        'Czqce': 'should\x20return\x20absolute\x20url\x20for\x20a\x20post',
        'XnUdH': 'should\x20return\x20absolute\x20url\x20for\x20a\x20post\x20and\x20remove\x20/amp/\x20in\x20url',
        'rvLXG': 'should\x20return\x20url\x20for\x20a\x20tag',
        'UpGGU': 'should\x20return\x20secure\x20url\x20for\x20a\x20tag',
        'vclsi': 'should\x20return\x20url\x20for\x20a\x20author',
        'YVGfw': 'should\x20return\x20secure\x20absolute\x20url\x20for\x20a\x20author',
        'kDwZM': function (_0x3c8618, _0x4e7ddf, _0x57ba26) {
            return _0x3c8618(_0x4e7ddf, _0x57ba26);
        },
        'axiPM': 'should\x20return\x20url\x20for\x20a\x20nav',
        'Awnam': 'should\x20return\x20absolute\x20url\x20for\x20a\x20nav',
        'givtH': function (_0x4a4ca3, _0x7de897, _0x3869eb) {
            return _0x4a4ca3(_0x7de897, _0x3869eb);
        },
        'kzTiN': 'should\x20return\x20`relativeUrl`\x20and\x20remove\x20/amp/\x20in\x20url'
    };
    _0x2750e2['eqDRn'](beforeEach, function () {
        sinon['stub'](urlService, _0x2750e2['MgBkX']), sinon['stub'](urlUtils, _0x2750e2['LJSOd']);
    }), _0x2750e2['djpEA'](afterEach, function () {
        sinon['restore']();
    }), _0x2750e2['kyfIJ'](it, _0x2750e2['tQnOz'], function () {
        const _0x479b82 = testUtils['DataGenerator']['forKnex']['createPost']();
        urlService['getUrlByResourceId']['withArgs'](_0x479b82['id'], {
            'absolute': undefined,
            'secure': undefined,
            'withSubdirectory': !![]
        })['returns'](_0x2750e2['vhcAi']), _0x2750e2['UYhPS'](getUrl, _0x479b82)['should']['eql'](_0x2750e2['vhcAi']);
    }), _0x2750e2['kyfIJ'](describe, _0x2750e2['lzuXi'], function () {
        const _0x43b184 = {
            'zOOmf': _0x2750e2['Jjdgu'],
            'NiVuW': _0x2750e2['VBxbn'],
            'nzBYO': function (_0x39fd40, _0x2a9c09) {
                return _0x2750e2['RfhFV'](_0x39fd40, _0x2a9c09);
            },
            'TSNLg': _0x2750e2['IbSqv'],
            'Sutmk': _0x2750e2['NUfVS'],
            'MPuVv': function (_0x9fb462, _0x32e350) {
                return _0x2750e2['UYhPS'](_0x9fb462, _0x32e350);
            },
            'tqpUg': function (_0x495ffb, _0x565032) {
                return _0x2750e2['RfhFV'](_0x495ffb, _0x565032);
            },
            'RQRsF': function (_0x29ca7e, _0xcd3de4) {
                return _0x2750e2['bLbaA'](_0x29ca7e, _0xcd3de4);
            },
            'JHzea': _0x2750e2['OxSVq'],
            'CvKhu': function (_0xbc0de8, _0x203748, _0x590d78) {
                return _0x2750e2['iiNtI'](_0xbc0de8, _0x203748, _0x590d78);
            },
            'vUpdC': function (_0x41f6f9, _0xaef988) {
                return _0x2750e2['pFIhS'](_0x41f6f9, _0xaef988);
            },
            'EpjVI': function (_0x413a18, _0x17d23b) {
                return _0x2750e2['pdTKj'](_0x413a18, _0x17d23b);
            },
            'YyzxK': _0x2750e2['GzRab'],
            'iwmWN': function (_0x5abfd2, _0x50ec5f, _0x1c081f) {
                return _0x2750e2['XlKcF'](_0x5abfd2, _0x50ec5f, _0x1c081f);
            },
            'pOLJG': function (_0x1e8c61, _0x5509de) {
                return _0x2750e2['HlBwZ'](_0x1e8c61, _0x5509de);
            },
            'aaijd': function (_0x235ca8, _0x5c32b0) {
                return _0x2750e2['cedbO'](_0x235ca8, _0x5c32b0);
            }
        };
        _0x2750e2['rvsNO'](it, _0x2750e2['XOGzN'], function () {
            const _0xdf648d = testUtils['DataGenerator']['forKnex']['createPost']({ 'status': _0x43b184['zOOmf'] });
            urlService['getUrlByResourceId']['withArgs'](_0xdf648d['id'])['returns'](_0x43b184['NiVuW']), urlUtils['urlFor']['withArgs']({
                'relativeUrl': _0x43b184['nzBYO'](_0x43b184['nzBYO'](_0x43b184['TSNLg'], _0xdf648d['uuid']), '/'),
                'secure': undefined
            }, null, undefined)['returns'](_0x43b184['Sutmk']);
            let _0x1ef136 = _0x43b184['MPuVv'](getUrl, _0xdf648d);
            urlService['getUrlByResourceId']['calledOnce']['should']['be']['true'](), urlUtils['urlFor']['withArgs']({
                'relativeUrl': _0x43b184['nzBYO'](_0x43b184['nzBYO'](_0x43b184['TSNLg'], _0xdf648d['uuid']), '/'),
                'secure': undefined
            }, null, undefined)['calledOnce']['should']['be']['true'](), _0x1ef136['should']['eql'](_0x43b184['Sutmk']);
        }), _0x2750e2['gGvVk'](it, _0x2750e2['BTvhX'], function () {
            const _0xf4d805 = testUtils['DataGenerator']['forKnex']['createPost']({ 'status': _0x43b184['zOOmf'] });
            urlService['getUrlByResourceId']['withArgs'](_0xf4d805['id'])['returns'](_0x43b184['NiVuW']), urlUtils['urlFor']['withArgs']({
                'relativeUrl': _0x43b184['tqpUg'](_0x43b184['RQRsF'](_0x43b184['TSNLg'], _0xf4d805['uuid']), '/'),
                'secure': undefined
            }, null, !![])['returns'](_0x43b184['JHzea']);
            let _0x1f1d14 = _0x43b184['CvKhu'](getUrl, _0xf4d805, !![]);
            urlService['getUrlByResourceId']['calledOnce']['should']['be']['true'](), urlUtils['urlFor']['withArgs']({
                'relativeUrl': _0x43b184['RQRsF'](_0x43b184['vUpdC'](_0x43b184['TSNLg'], _0xf4d805['uuid']), '/'),
                'secure': undefined
            }, null, !![])['calledOnce']['should']['be']['true'](), _0x1f1d14['should']['eql'](_0x43b184['JHzea']);
        }), _0x2750e2['jodHx'](it, _0x2750e2['AhWhW'], function () {
            const _0x53ab6f = testUtils['DataGenerator']['forKnex']['createPost']({ 'status': _0x43b184['zOOmf'] });
            _0x53ab6f['secure'] = !![], urlService['getUrlByResourceId']['withArgs'](_0x53ab6f['id'])['returns'](_0x43b184['NiVuW']), urlUtils['urlFor']['withArgs']({
                'relativeUrl': _0x43b184['EpjVI'](_0x43b184['EpjVI'](_0x43b184['TSNLg'], _0x53ab6f['uuid']), '/'),
                'secure': !![]
            }, null, !![])['returns'](_0x43b184['YyzxK']);
            let _0x360c3a = _0x43b184['iwmWN'](getUrl, _0x53ab6f, !![]);
            urlService['getUrlByResourceId']['calledOnce']['should']['be']['true'](), urlUtils['urlFor']['withArgs']({
                'relativeUrl': _0x43b184['pOLJG'](_0x43b184['aaijd'](_0x43b184['TSNLg'], _0x53ab6f['uuid']), '/'),
                'secure': !![]
            }, null, !![])['calledOnce']['should']['be']['true'](), _0x360c3a['should']['eql'](_0x43b184['YyzxK']);
        });
    }), _0x2750e2['WtZfH'](it, _0x2750e2['Czqce'], function () {
        const _0x1173be = testUtils['DataGenerator']['forKnex']['createPost']();
        urlService['getUrlByResourceId']['withArgs'](_0x1173be['id'], {
            'absolute': !![],
            'secure': undefined,
            'withSubdirectory': !![]
        })['returns'](_0x2750e2['zvIIG']), _0x2750e2['jodHx'](getUrl, _0x1173be, !![])['should']['eql'](_0x2750e2['zvIIG']);
    }), _0x2750e2['WtZfH'](it, _0x2750e2['XnUdH'], function () {
        const _0x1ddf97 = { 'relativeUrl': _0x2750e2['IfGND'] };
        urlUtils['urlFor']['withArgs'](_0x1ddf97, {}, !![])['returns'](_0x2750e2['pcJya']), _0x2750e2['dlYSn'](getUrl, _0x1ddf97, !![])['should']['eql'](_0x2750e2['YKwEc']), urlService['getUrlByResourceId']['called']['should']['be']['false']();
    }), _0x2750e2['WtZfH'](it, _0x2750e2['rvLXG'], function () {
        const _0x178275 = testUtils['DataGenerator']['forKnex']['createTag']();
        _0x178275['parent'] = null, urlService['getUrlByResourceId']['withArgs'](_0x178275['id'], {
            'absolute': undefined,
            'secure': undefined,
            'withSubdirectory': !![]
        })['returns'](_0x2750e2['khZsw']), _0x2750e2['UYhPS'](getUrl, _0x178275)['should']['eql'](_0x2750e2['khZsw']);
    }), _0x2750e2['WtZfH'](it, _0x2750e2['UpGGU'], function () {
        const _0x141b6f = testUtils['DataGenerator']['forKnex']['createTag']();
        _0x141b6f['parent'] = null, _0x141b6f['secure'] = !![], urlService['getUrlByResourceId']['withArgs'](_0x141b6f['id'], {
            'absolute': undefined,
            'secure': !![],
            'withSubdirectory': !![]
        })['returns'](_0x2750e2['mmxjH']), _0x2750e2['CPLRi'](getUrl, _0x141b6f)['should']['eql'](_0x2750e2['mmxjH']);
    }), _0x2750e2['WtZfH'](it, _0x2750e2['vclsi'], function () {
        const _0x45ed58 = testUtils['DataGenerator']['forKnex']['createUser']();
        urlService['getUrlByResourceId']['withArgs'](_0x45ed58['id'], {
            'absolute': undefined,
            'secure': undefined,
            'withSubdirectory': !![]
        })['returns'](_0x2750e2['xGzzs']), _0x2750e2['CPLRi'](getUrl, _0x45ed58)['should']['eql'](_0x2750e2['xGzzs']);
    }), _0x2750e2['WtZfH'](it, _0x2750e2['YVGfw'], function () {
        const _0x2c475d = testUtils['DataGenerator']['forKnex']['createUser']();
        _0x2c475d['secure'] = !![], urlService['getUrlByResourceId']['withArgs'](_0x2c475d['id'], {
            'absolute': !![],
            'secure': !![],
            'withSubdirectory': !![]
        })['returns'](_0x2750e2['UwETh']), _0x2750e2['sALiE'](getUrl, _0x2c475d, !![])['should']['eql'](_0x2750e2['UwETh']);
    }), _0x2750e2['kDwZM'](it, _0x2750e2['axiPM'], function () {
        const _0x2c3d3d = {
            'label': _0x2750e2['nOFJz'],
            'url': _0x2750e2['eoGGH'],
            'slug': _0x2750e2['YwKAP'],
            'current': !![]
        };
        urlUtils['urlFor']['withArgs'](_0x2750e2['LONIJ'], {
            'nav': _0x2c3d3d,
            'secure': _0x2c3d3d['secure']
        }, undefined)['returns'](_0x2750e2['qHFTd']), _0x2750e2['fyelh'](getUrl, _0x2c3d3d)['should']['equal'](_0x2750e2['qHFTd']);
    }), _0x2750e2['kDwZM'](it, _0x2750e2['Awnam'], function () {
        const _0x4219ca = {
            'label': _0x2750e2['nOFJz'],
            'url': _0x2750e2['eoGGH'],
            'slug': _0x2750e2['YwKAP'],
            'current': !![]
        };
        urlUtils['urlFor']['withArgs'](_0x2750e2['LONIJ'], {
            'nav': _0x4219ca,
            'secure': _0x4219ca['secure']
        }, !![])['returns'](_0x2750e2['bzpwA']), _0x2750e2['sALiE'](getUrl, _0x4219ca, !![])['should']['equal'](_0x2750e2['bzpwA']);
    }), _0x2750e2['givtH'](it, _0x2750e2['kzTiN'], function () {
        const _0x403ef4 = { 'relativeUrl': _0x2750e2['IfGND'] };
        urlUtils['urlFor']['withArgs'](_0x403ef4, {}, undefined)['returns'](_0x403ef4['relativeUrl']), _0x2750e2['SxlEP'](getUrl, _0x403ef4)['should']['eql'](_0x2750e2['HAANj']), urlService['getUrlByResourceId']['called']['should']['be']['false']();
    });
});
