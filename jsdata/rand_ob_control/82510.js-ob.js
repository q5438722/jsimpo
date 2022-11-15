const should = require('should'), sinon = require('sinon'), urlService = require('../../../core/frontend/services/url'), helpers = require('../../../core/frontend/helpers'), models = require('../../../core/server/models'), testUtils = require('../../utils');
describe('{{authors}}\x20helper', function () {
    const _0x52e2cb = {
        'QkNDa': 'getUrlByResourceId',
        'JXIFh': 'Michael',
        'TPdND': 'Thomas',
        'ssVQh': 'false',
        'ayxAg': function (_0x40a0c4, _0x526f8f) {
            return _0x40a0c4(_0x526f8f);
        },
        'ydijZ': 'Michael,\x20Thomas',
        'heELv': 'John\x20O\x27Nolan',
        'hyXWd': 'AB=CD`EF',
        'nqbKh': function (_0x1d7afe, _0x3f8546) {
            return _0x1d7afe(_0x3f8546);
        },
        'MiEHC': 'John\x20O&#x27;Nolan,\x20AB&#x3D;CD&#x60;EF',
        'JzKJq': 'haunted',
        'pfTzy': 'ghost',
        'dVmTE': 'haunted|ghost',
        'kocaL': 'on\x20',
        'zZsCE': 'on\x20haunted,\x20ghost',
        'Ewrux': '\x20forever',
        'QArFT': 'haunted,\x20ghost\x20forever',
        'ywPQI': 'on\x20haunted,\x20ghost\x20forever',
        'ySRhz': '\x20&bull;',
        'ltDEu': '&hellip;\x20',
        'xJVXC': function (_0x140c33, _0x3506e0) {
            return _0x140c33(_0x3506e0);
        },
        'SSltO': '&hellip;\x20haunted,\x20ghost\x20&bull;',
        'tSTTL': 'foo',
        'hWKJB': 'foo-bar',
        'Hfhje': 'bar',
        'gdNOv': 'author\x20url\x201',
        'UZsfN': 'author\x20url\x202',
        'bQaBC': '<a\x20href=\x22author\x20url\x201\x22>foo</a>,\x20<a\x20href=\x22author\x20url\x202\x22>bar</a>',
        'iljEX': function (_0x4c58ce, _0x4cec5d) {
            return _0x4c58ce(_0x4cec5d);
        },
        'kwWpy': '<a\x20href=\x22author\x20url\x201\x22>foo</a>',
        'lpHwR': function (_0x4e9b7e, _0x16821e) {
            return _0x4e9b7e(_0x16821e);
        },
        'Cjjsi': '<a\x20href=\x22author\x20url\x202\x22>bar</a>',
        'VjHKZ': 'author\x20url',
        'XKmWd': '<a\x20href=\x22author\x20url\x22>foo</a>',
        'SsvuD': 'baz',
        'oQRDY': 'author\x20url\x203',
        'yZnjA': '<a\x20href=\x22author\x20url\x202\x22>bar</a>,\x20<a\x20href=\x22author\x20url\x203\x22>baz</a>',
        'xfUyJ': 'author\x20url\x20x',
        'KXlAI': function (_0x1b08b3, _0x2330de) {
            return _0x1b08b3(_0x2330de);
        },
        'GKmjq': '<a\x20href=\x22author\x20url\x20x\x22>bar</a>',
        'lgiMF': 'author\x20url\x20a',
        'KzARE': 'author\x20url\x20b',
        'zbYVq': 'author\x20url\x20c',
        'LtYdZ': function (_0x596474, _0x3f5394) {
            return _0x596474(_0x3f5394);
        },
        'lZPCd': '<a\x20href=\x22author\x20url\x20a\x22>foo</a>,\x20<a\x20href=\x22author\x20url\x20b\x22>bar</a>,\x20<a\x20href=\x22author\x20url\x20c\x22>baz</a>',
        'hVLhy': function (_0x34315a, _0x33d642) {
            return _0x34315a(_0x33d642);
        },
        'aOUFy': function (_0x21b762, _0x5a365f) {
            return _0x21b762(_0x5a365f);
        },
        'NbFre': function (_0x1d56f6, _0x5714c8) {
            return _0x1d56f6(_0x5714c8);
        },
        'DfUEZ': function (_0x512aa5, _0xe2839d, _0x4b46e6) {
            return _0x512aa5(_0xe2839d, _0x4b46e6);
        },
        'ezYzF': 'can\x20return\x20string\x20with\x20authors',
        'jyCMk': function (_0x35086c, _0x1eeba3, _0x7fcead) {
            return _0x35086c(_0x1eeba3, _0x7fcead);
        },
        'fHCMM': 'can\x20return\x20string\x20with\x20authors\x20with\x20special\x20chars',
        'Mpkag': function (_0x2e929d, _0x3611ff, _0xe3f1c0) {
            return _0x2e929d(_0x3611ff, _0xe3f1c0);
        },
        'AwMZW': 'can\x20use\x20a\x20different\x20separator',
        'ioYax': function (_0x5b34f6, _0x17e5d9, _0x4757c6) {
            return _0x5b34f6(_0x17e5d9, _0x4757c6);
        },
        'ZduyW': 'can\x20add\x20a\x20single\x20prefix\x20to\x20multiple\x20authors',
        'DMIgf': function (_0x51ddb2, _0x2f1100, _0xe6e3c7) {
            return _0x51ddb2(_0x2f1100, _0xe6e3c7);
        },
        'ifizL': 'can\x20add\x20a\x20single\x20suffix\x20to\x20multiple\x20authors',
        'TsDEn': function (_0x34db33, _0x2e3859, _0x3ff7f8) {
            return _0x34db33(_0x2e3859, _0x3ff7f8);
        },
        'jsXAo': 'can\x20add\x20a\x20prefix\x20and\x20suffix\x20to\x20multiple\x20authors',
        'EkZgX': function (_0x2a4aa4, _0x29c678, _0x434ff6) {
            return _0x2a4aa4(_0x29c678, _0x434ff6);
        },
        'aCvxM': 'can\x20add\x20a\x20prefix\x20and\x20suffix\x20with\x20HTML',
        'ixLiv': 'does\x20not\x20add\x20prefix\x20or\x20suffix\x20if\x20no\x20authors\x20exist',
        'vlfDU': 'can\x20autolink\x20authors\x20to\x20author\x20pages',
        'XZKuj': function (_0x1fd601, _0x5720d3, _0xf19538) {
            return _0x1fd601(_0x5720d3, _0xf19538);
        },
        'uCQbm': 'can\x20limit\x20no.\x20authors\x20output\x20to\x201',
        'EBmdj': function (_0x45938d, _0x3b1ed2, _0x469d39) {
            return _0x45938d(_0x3b1ed2, _0x469d39);
        },
        'zaFHZ': 'can\x20list\x20authors\x20from\x20a\x20specified\x20no.',
        'wQtnO': function (_0x39b6a0, _0x2a05df, _0x131ea6) {
            return _0x39b6a0(_0x2a05df, _0x131ea6);
        },
        'nXODI': 'can\x20list\x20authors\x20to\x20a\x20specified\x20no.',
        'PimPt': function (_0x25ab01, _0x4a09b8, _0x3f3fee) {
            return _0x25ab01(_0x4a09b8, _0x3f3fee);
        },
        'tycFq': 'can\x20list\x20authors\x20in\x20a\x20range',
        'YRACq': 'can\x20limit\x20no.\x20authors\x20and\x20output\x20from\x202',
        'HoHgr': 'can\x20list\x20authors\x20in\x20a\x20range\x20(ignore\x20limit)'
    };
    _0x52e2cb['hVLhy'](before, function () {
        models['init']();
    }), _0x52e2cb['aOUFy'](beforeEach, function () {
        sinon['stub'](urlService, _0x52e2cb['QkNDa']);
    }), _0x52e2cb['NbFre'](afterEach, function () {
        sinon['restore']();
    }), _0x52e2cb['DfUEZ'](it, _0x52e2cb['ezYzF'], function () {
        const _0x561908 = [
                testUtils['DataGenerator']['forKnex']['createUser']({ 'name': _0x52e2cb['JXIFh'] }),
                testUtils['DataGenerator']['forKnex']['createUser']({ 'name': _0x52e2cb['TPdND'] })
            ], _0xd08f07 = helpers['authors']['call']({ 'authors': _0x561908 }, { 'hash': { 'autolink': _0x52e2cb['ssVQh'] } });
        should['exist'](_0xd08f07), _0x52e2cb['ayxAg'](String, _0xd08f07)['should']['equal'](_0x52e2cb['ydijZ']);
    }), _0x52e2cb['jyCMk'](it, _0x52e2cb['fHCMM'], function () {
        const _0x4ccd65 = [
                testUtils['DataGenerator']['forKnex']['createUser']({ 'name': _0x52e2cb['heELv'] }),
                testUtils['DataGenerator']['forKnex']['createUser']({ 'name': _0x52e2cb['hyXWd'] })
            ], _0x52e82a = helpers['authors']['call']({ 'authors': _0x4ccd65 }, { 'hash': { 'autolink': _0x52e2cb['ssVQh'] } });
        should['exist'](_0x52e82a), _0x52e2cb['nqbKh'](String, _0x52e82a)['should']['equal'](_0x52e2cb['MiEHC']);
    }), _0x52e2cb['Mpkag'](it, _0x52e2cb['AwMZW'], function () {
        const _0x2691bb = [
                testUtils['DataGenerator']['forKnex']['createUser']({ 'name': _0x52e2cb['JzKJq'] }),
                testUtils['DataGenerator']['forKnex']['createUser']({ 'name': _0x52e2cb['pfTzy'] })
            ], _0x160b88 = helpers['authors']['call']({ 'authors': _0x2691bb }, {
                'hash': {
                    'separator': '|',
                    'autolink': _0x52e2cb['ssVQh']
                }
            });
        should['exist'](_0x160b88), _0x52e2cb['nqbKh'](String, _0x160b88)['should']['equal'](_0x52e2cb['dVmTE']);
    }), _0x52e2cb['ioYax'](it, _0x52e2cb['ZduyW'], function () {
        const _0x254f47 = [
                testUtils['DataGenerator']['forKnex']['createUser']({ 'name': _0x52e2cb['JzKJq'] }),
                testUtils['DataGenerator']['forKnex']['createUser']({ 'name': _0x52e2cb['pfTzy'] })
            ], _0x39b30e = helpers['authors']['call']({ 'authors': _0x254f47 }, {
                'hash': {
                    'prefix': _0x52e2cb['kocaL'],
                    'autolink': _0x52e2cb['ssVQh']
                }
            });
        should['exist'](_0x39b30e), _0x52e2cb['nqbKh'](String, _0x39b30e)['should']['equal'](_0x52e2cb['zZsCE']);
    }), _0x52e2cb['DMIgf'](it, _0x52e2cb['ifizL'], function () {
        const _0x4f1424 = [
                testUtils['DataGenerator']['forKnex']['createUser']({ 'name': _0x52e2cb['JzKJq'] }),
                testUtils['DataGenerator']['forKnex']['createUser']({ 'name': _0x52e2cb['pfTzy'] })
            ], _0x4f8e5d = helpers['authors']['call']({ 'authors': _0x4f1424 }, {
                'hash': {
                    'suffix': _0x52e2cb['Ewrux'],
                    'autolink': _0x52e2cb['ssVQh']
                }
            });
        should['exist'](_0x4f8e5d), _0x52e2cb['nqbKh'](String, _0x4f8e5d)['should']['equal'](_0x52e2cb['QArFT']);
    }), _0x52e2cb['TsDEn'](it, _0x52e2cb['jsXAo'], function () {
        const _0x4ee1ab = [
                testUtils['DataGenerator']['forKnex']['createUser']({ 'name': _0x52e2cb['JzKJq'] }),
                testUtils['DataGenerator']['forKnex']['createUser']({ 'name': _0x52e2cb['pfTzy'] })
            ], _0x5dcab4 = helpers['authors']['call']({ 'authors': _0x4ee1ab }, {
                'hash': {
                    'suffix': _0x52e2cb['Ewrux'],
                    'prefix': _0x52e2cb['kocaL'],
                    'autolink': _0x52e2cb['ssVQh']
                }
            });
        should['exist'](_0x5dcab4), _0x52e2cb['nqbKh'](String, _0x5dcab4)['should']['equal'](_0x52e2cb['ywPQI']);
    }), _0x52e2cb['EkZgX'](it, _0x52e2cb['aCvxM'], function () {
        const _0x284551 = [
                testUtils['DataGenerator']['forKnex']['createUser']({ 'name': _0x52e2cb['JzKJq'] }),
                testUtils['DataGenerator']['forKnex']['createUser']({ 'name': _0x52e2cb['pfTzy'] })
            ], _0x5c8040 = helpers['authors']['call']({ 'authors': _0x284551 }, {
                'hash': {
                    'suffix': _0x52e2cb['ySRhz'],
                    'prefix': _0x52e2cb['ltDEu'],
                    'autolink': _0x52e2cb['ssVQh']
                }
            });
        should['exist'](_0x5c8040), _0x52e2cb['xJVXC'](String, _0x5c8040)['should']['equal'](_0x52e2cb['SSltO']);
    }), _0x52e2cb['EkZgX'](it, _0x52e2cb['ixLiv'], function () {
        const _0x1841dc = helpers['authors']['call']({}, {
            'hash': {
                'prefix': _0x52e2cb['kocaL'],
                'suffix': _0x52e2cb['Ewrux'],
                'autolink': _0x52e2cb['ssVQh']
            }
        });
        should['exist'](_0x1841dc), _0x52e2cb['xJVXC'](String, _0x1841dc)['should']['equal']('');
    }), _0x52e2cb['EkZgX'](it, _0x52e2cb['vlfDU'], function () {
        const _0x6281dd = [
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': _0x52e2cb['tSTTL'],
                'slug': _0x52e2cb['hWKJB']
            }),
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': _0x52e2cb['Hfhje'],
                'slug': _0x52e2cb['Hfhje']
            })
        ];
        urlService['getUrlByResourceId']['withArgs'](_0x6281dd[0x0]['id'])['returns'](_0x52e2cb['gdNOv']), urlService['getUrlByResourceId']['withArgs'](_0x6281dd[0x1]['id'])['returns'](_0x52e2cb['UZsfN']);
        const _0x207054 = helpers['authors']['call']({ 'authors': _0x6281dd });
        should['exist'](_0x207054), _0x52e2cb['xJVXC'](String, _0x207054)['should']['equal'](_0x52e2cb['bQaBC']);
    }), _0x52e2cb['XZKuj'](it, _0x52e2cb['uCQbm'], function () {
        const _0x507279 = [
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': _0x52e2cb['tSTTL'],
                'slug': _0x52e2cb['hWKJB']
            }),
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': _0x52e2cb['Hfhje'],
                'slug': _0x52e2cb['Hfhje']
            })
        ];
        urlService['getUrlByResourceId']['withArgs'](_0x507279[0x0]['id'])['returns'](_0x52e2cb['gdNOv']);
        const _0x55f0de = helpers['authors']['call']({ 'authors': _0x507279 }, { 'hash': { 'limit': '1' } });
        should['exist'](_0x55f0de), _0x52e2cb['iljEX'](String, _0x55f0de)['should']['equal'](_0x52e2cb['kwWpy']);
    }), _0x52e2cb['EBmdj'](it, _0x52e2cb['zaFHZ'], function () {
        const _0x2e7ec8 = [
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': _0x52e2cb['tSTTL'],
                'slug': _0x52e2cb['hWKJB']
            }),
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': _0x52e2cb['Hfhje'],
                'slug': _0x52e2cb['Hfhje']
            })
        ];
        urlService['getUrlByResourceId']['withArgs'](_0x2e7ec8[0x1]['id'])['returns'](_0x52e2cb['UZsfN']);
        const _0x2fc907 = helpers['authors']['call']({ 'authors': _0x2e7ec8 }, { 'hash': { 'from': '2' } });
        should['exist'](_0x2fc907), _0x52e2cb['lpHwR'](String, _0x2fc907)['should']['equal'](_0x52e2cb['Cjjsi']);
    }), _0x52e2cb['wQtnO'](it, _0x52e2cb['nXODI'], function () {
        const _0x5e1e57 = [
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': _0x52e2cb['tSTTL'],
                'slug': _0x52e2cb['hWKJB']
            }),
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': _0x52e2cb['Hfhje'],
                'slug': _0x52e2cb['Hfhje']
            })
        ];
        urlService['getUrlByResourceId']['withArgs'](_0x5e1e57[0x0]['id'])['returns'](_0x52e2cb['VjHKZ']);
        const _0x4c0b11 = helpers['authors']['call']({ 'authors': _0x5e1e57 }, { 'hash': { 'to': '1' } });
        should['exist'](_0x4c0b11), _0x52e2cb['lpHwR'](String, _0x4c0b11)['should']['equal'](_0x52e2cb['XKmWd']);
    }), _0x52e2cb['PimPt'](it, _0x52e2cb['tycFq'], function () {
        const _0x1bf083 = [
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': _0x52e2cb['tSTTL'],
                'slug': _0x52e2cb['hWKJB']
            }),
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': _0x52e2cb['Hfhje'],
                'slug': _0x52e2cb['Hfhje']
            }),
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': _0x52e2cb['SsvuD'],
                'slug': _0x52e2cb['SsvuD']
            })
        ];
        urlService['getUrlByResourceId']['withArgs'](_0x1bf083[0x1]['id'])['returns'](_0x52e2cb['UZsfN']), urlService['getUrlByResourceId']['withArgs'](_0x1bf083[0x2]['id'])['returns'](_0x52e2cb['oQRDY']);
        const _0x53e2dd = helpers['authors']['call']({ 'authors': _0x1bf083 }, {
            'hash': {
                'from': '2',
                'to': '3'
            }
        });
        should['exist'](_0x53e2dd), _0x52e2cb['lpHwR'](String, _0x53e2dd)['should']['equal'](_0x52e2cb['yZnjA']);
    }), _0x52e2cb['PimPt'](it, _0x52e2cb['YRACq'], function () {
        const _0x577049 = [
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': _0x52e2cb['tSTTL'],
                'slug': _0x52e2cb['hWKJB']
            }),
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': _0x52e2cb['Hfhje'],
                'slug': _0x52e2cb['Hfhje']
            }),
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': _0x52e2cb['SsvuD'],
                'slug': _0x52e2cb['SsvuD']
            })
        ];
        urlService['getUrlByResourceId']['withArgs'](_0x577049[0x1]['id'])['returns'](_0x52e2cb['xfUyJ']);
        const _0x1493c1 = helpers['authors']['call']({ 'authors': _0x577049 }, {
            'hash': {
                'from': '2',
                'limit': '1'
            }
        });
        should['exist'](_0x1493c1), _0x52e2cb['KXlAI'](String, _0x1493c1)['should']['equal'](_0x52e2cb['GKmjq']);
    }), _0x52e2cb['PimPt'](it, _0x52e2cb['HoHgr'], function () {
        const _0x3b3989 = [
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': _0x52e2cb['tSTTL'],
                'slug': _0x52e2cb['hWKJB']
            }),
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': _0x52e2cb['Hfhje'],
                'slug': _0x52e2cb['Hfhje']
            }),
            testUtils['DataGenerator']['forKnex']['createUser']({
                'name': _0x52e2cb['SsvuD'],
                'slug': _0x52e2cb['SsvuD']
            })
        ];
        urlService['getUrlByResourceId']['withArgs'](_0x3b3989[0x0]['id'])['returns'](_0x52e2cb['lgiMF']), urlService['getUrlByResourceId']['withArgs'](_0x3b3989[0x1]['id'])['returns'](_0x52e2cb['KzARE']), urlService['getUrlByResourceId']['withArgs'](_0x3b3989[0x2]['id'])['returns'](_0x52e2cb['zbYVq']);
        const _0x335086 = helpers['authors']['call']({ 'authors': _0x3b3989 }, {
            'hash': {
                'from': '1',
                'to': '3',
                'limit': '2'
            }
        });
        should['exist'](_0x335086), _0x52e2cb['LtYdZ'](String, _0x335086)['should']['equal'](_0x52e2cb['lZPCd']);
    });
});
