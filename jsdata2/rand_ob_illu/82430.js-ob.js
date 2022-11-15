const _0x2b41 = ['not uri', 'add', 'field formats', 'should fail with no tags', 'should pass with some fields', 'edit', 'required fields', 'WbplI', 'restore', 'kOIiT', 'XSznU', 'Yvgil', 'kdNWM', 'vkKGE', 'bPGmP', 'tdFpT', 'input', 'tags', 'then', 'catch', 'errorType', 'ValidationError', 'reject', 'equal', 'JXHpW', 'jsoPr', 'a fail', 'bXcUE', 'pdZYB', 'XuyqF', 'name', 'not', 'parent', 'exist', 'data', 'created_at', 'created_by', 'updated_at', 'updated_by', 'sKKuG', ',starts-with-coma', 'repeat', 'abc', 'forEach', 'should fail for bad ', 'map', 'xqXUT', 'XxFlb', 'all', 'rajDK', 'kHkOz', 'NfwVh', 'UXzmK', 'NhPcs', 'bbwmr', 'mEqWq', 'NSadb', 'nRzLL', 'QHdaE', 'THDKJ', 'EPxev', 'ZYsWX', 'bvEcx', '196nHQzhg', '331WIWMTm', '285658zprHer', '109LRVtdx', '1019qkNEMa', '152808ZEjsjG', '1CPdepz', '254298jttRrL', '88132HQMewe', '29734kUQDQb', '1Bugcvj', '@tryghost/errors', 'lodash', 'should', 'sinon', 'bluebird', '../../../../../../../core/server/api/canary/utils/validators', 'should fail with no data', 'should fail with no tags in array', 'should fail without required fields', 'should remove `strip`able fields and leave regular fields', 'pass', 'strip me'];
const _0x56f88f = _0x5a21;

(function (_0x44fc8e, _0x5525d9) {
    const _0x15dcd2 = _0x5a21;

    while (true) {
        try {
            const _0x29acde = parseInt(_0x15dcd2(0xf2)) * parseInt(_0x15dcd2(0xf3)) + parseInt(_0x15dcd2(0xf4)) + parseInt(_0x15dcd2(0xf5)) * parseInt(_0x15dcd2(0xf6)) + -parseInt(_0x15dcd2(0xf7)) + parseInt(_0x15dcd2(0xf8)) * -parseInt(_0x15dcd2(0xf9)) + parseInt(_0x15dcd2(0xfa)) + parseInt(_0x15dcd2(0xfb)) * parseInt(_0x15dcd2(0xfc));

            if (_0x29acde === _0x5525d9) break;else _0x44fc8e.push(_0x44fc8e.shift());
        } catch (_0x4d45b0) {
            _0x44fc8e.push(_0x44fc8e.shift());
        }
    }
})(_0x2b41, 172365);

const errors = require(_0x56f88f(0xfd));

const _ = require(_0x56f88f(0xfe));

const should = require(_0x56f88f(0xff));

const sinon = require(_0x56f88f(0x100));

const Promise = require(_0x56f88f(0x101));

const validators = require(_0x56f88f(0x102));

function _0x5a21(_0x32e60d, _0x1d60bd) {
    return _0x5a21 = function (_0xe74127, _0x1b1b90) {
        _0xe74127 = _0xe74127 - 242;
        const _0x2b5c9b = _0x2b41[_0xe74127];

        return _0x2b5c9b;
    }, _0x5a21(_0x32e60d, _0x1d60bd);
}
describe('Unit: canary/utils/validators/input/tags', function () {
    const _0x5373f6 = _0x56f88f;
    const _0x44145e = {
        'bPGmP': 'ValidationError',
        'NfwVh': _0x5373f6(0x103),
        'JXHpW': function (_0x4a9e6f, _0xa16819, _0x451345) {
            return _0x4a9e6f(_0xa16819, _0x451345);
        },
        'qxafV': _0x5373f6(0x104),
        'uuiPy': _0x5373f6(0x105),
        'pdZYB': _0x5373f6(0x106),
        'kHkOz': _0x5373f6(0x107),
        'XSznU': _0x5373f6(0x108),
        'Yvgil': _0x5373f6(0x109),
        'kdNWM': 'tags',
        'vkKGE': _0x5373f6(0x10a),
        'sKKuG': _0x5373f6(0x10b),
        'UXzmK': _0x5373f6(0x10c),
        'vQeLH': function (_0x2b6153, _0x2428a4, _0x34425e) {
            return _0x2b6153(_0x2428a4, _0x34425e);
        },
        'zHRSG': 'should fail with more than tags',
        'ogJCx': _0x5373f6(0x10d),
        'rajDK': _0x5373f6(0x10e),
        'NhPcs': function (_0x246055, _0x240775, _0x2dd10c) {
            return _0x246055(_0x240775, _0x2dd10c);
        },
        'OFGgZ': _0x5373f6(0x10f),
        'WbplI': function (_0x175d40, _0x5af891) {
            return _0x175d40(_0x5af891);
        },
        'kOIiT': function (_0x1b3c67, _0x32d5b5, _0x2dc3fb) {
            return _0x1b3c67(_0x32d5b5, _0x2dc3fb);
        }
    };

    _0x44145e[_0x5373f6(0x110)](afterEach, function () {
        const _0x12609f = _0x5373f6;

        sinon[_0x12609f(0x111)]();
    }), _0x44145e[_0x5373f6(0x112)](describe, _0x5373f6(0x10a), function () {
        const _0xd57a7c = _0x5373f6;
        const _0x469694 = {
            'tdFpT': 'ValidationError',
            'bXcUE': _0x44145e.kHkOz,
            'XuyqF': _0x44145e[_0xd57a7c(0x113)],
            'AxvdD': function (_0x4f536c, _0x33dc46) {
                return _0x4f536c !== _0x33dc46;
            },
            'qKoUN': _0x44145e[_0xd57a7c(0x114)]
        };
        const _0x7d3faf = {
            'docName': _0x44145e[_0xd57a7c(0x115)],
            'method': _0x44145e[_0xd57a7c(0x116)]
        };

        _0x44145e.JXHpW(describe, 'required fields', function () {
            const _0x34d5ae = _0xd57a7c;
            const _0x547b57 = { 'jsoPr': _0x44145e[_0x34d5ae(0x117)] };

            it(_0x44145e.NfwVh, function () {
                const _0x49d34a = _0x34d5ae;
                const _0x4433b0 = { 'oPeRz': _0x469694[_0x49d34a(0x118)] };
                const _0x408326 = {
                    'options': {},
                    'data': {}
                };

                return validators[_0x49d34a(0x119)][_0x49d34a(0x11a)][_0x49d34a(0x10a)](_0x7d3faf, _0x408326)[_0x49d34a(0x11b)](Promise.reject)[_0x49d34a(0x11c)](_0x302b19 => {
                    const _0x17c211 = _0x49d34a;

                    _0x302b19[_0x17c211(0x11d)][_0x17c211(0xff)].equal(_0x4433b0.oPeRz);
                });
            }), _0x44145e.JXHpW(it, _0x34d5ae(0x10c), function () {
                const _0x44e232 = _0x34d5ae;
                const _0x2d0112 = { 'ZawEv': _0x44e232(0x11e) };
                const _0x234d4d = {
                    'options': {},
                    'data': { 'posts': [] }
                };

                return validators[_0x44e232(0x119)][_0x44e232(0x11a)][_0x44e232(0x10a)](_0x7d3faf, _0x234d4d).then(Promise[_0x44e232(0x11f)])[_0x44e232(0x11c)](_0x28fd7c => {
                    const _0x566176 = _0x44e232;

                    _0x28fd7c[_0x566176(0x11d)].should[_0x566176(0x120)](_0x2d0112.ZawEv);
                });
            }), _0x44145e[_0x34d5ae(0x121)](it, _0x44145e.qxafV, function () {
                const _0x481b2b = _0x34d5ae;
                const _0x336971 = {
                    'options': {},
                    'data': { 'tags': [] }
                };

                return validators[_0x481b2b(0x119)][_0x481b2b(0x11a)].add(_0x7d3faf, _0x336971)[_0x481b2b(0x11b)](Promise[_0x481b2b(0x11f)]).catch(_0x20830a => {
                    const _0x97de0e = _0x481b2b;

                    _0x20830a.errorType[_0x97de0e(0xff)][_0x97de0e(0x120)](_0x547b57[_0x97de0e(0x122)]);
                });
            }), it('should fail with more than tags', function () {
                const _0x2415f4 = _0x34d5ae;
                const _0x1138df = {
                    'options': {},
                    'data': {
                        'tags': [],
                        'posts': []
                    }
                };

                return validators[_0x2415f4(0x119)].tags[_0x2415f4(0x10a)](_0x7d3faf, _0x1138df)[_0x2415f4(0x11b)](Promise[_0x2415f4(0x11f)])[_0x2415f4(0x11c)](_0x2ea302 => {
                    const _0x4e77a8 = _0x2415f4;

                    _0x2ea302.errorType.should[_0x4e77a8(0x120)](_0x4e77a8(0x11e));
                });
            }), it(_0x44145e.uuiPy, function () {
                const _0x116ec8 = _0x34d5ae;
                const _0x1898e4 = {
                    'options': {},
                    'data': { 'tags': [{ 'what': _0x116ec8(0x123) }] }
                };

                return validators[_0x116ec8(0x119)][_0x116ec8(0x11a)][_0x116ec8(0x10a)](_0x7d3faf, _0x1898e4)[_0x116ec8(0x11b)](Promise.reject)[_0x116ec8(0x11c)](_0x32b533 => {
                    const _0xbdfc1b = _0x116ec8;

                    _0x32b533[_0xbdfc1b(0x11d)][_0xbdfc1b(0xff)].equal(_0x547b57[_0xbdfc1b(0x122)]);
                });
            }), it('should pass with required fields', function () {
                const _0x4d5051 = _0x34d5ae;
                const _0x12adcc = {
                    'options': {},
                    'data': { 'tags': [{ 'name': _0x469694[_0x4d5051(0x124)] }] }
                };

                return validators.input.tags[_0x4d5051(0x10a)](_0x7d3faf, _0x12adcc);
            }), _0x44145e[_0x34d5ae(0x121)](it, _0x44145e[_0x34d5ae(0x125)], function () {
                const _0x49e83e = _0x34d5ae;
                const _0x4dc404 = {
                    'options': {},
                    'data': {
                        'tags': [{
                            'name': _0x469694[_0x49e83e(0x124)],
                            'parent': _0x469694[_0x49e83e(0x126)],
                            'created_at': _0x469694[_0x49e83e(0x126)],
                            'created_by': _0x469694[_0x49e83e(0x126)],
                            'updated_at': _0x469694[_0x49e83e(0x126)],
                            'updated_by': _0x469694.XuyqF
                        }]
                    }
                };

                const _0x179d2e = validators[_0x49e83e(0x119)][_0x49e83e(0x11a)][_0x49e83e(0x10a)](_0x7d3faf, _0x4dc404);

                return should.exist(_0x4dc404.data.tags[0][_0x49e83e(0x127)]), should[_0x49e83e(0x128)].exist(_0x4dc404.data[_0x49e83e(0x11a)][0][_0x49e83e(0x129)]), should[_0x49e83e(0x128)][_0x49e83e(0x12a)](_0x4dc404[_0x49e83e(0x12b)].tags[0][_0x49e83e(0x12c)]), should.not[_0x49e83e(0x12a)](_0x4dc404[_0x49e83e(0x12b)][_0x49e83e(0x11a)][0][_0x49e83e(0x12d)]), should[_0x49e83e(0x128)].exist(_0x4dc404[_0x49e83e(0x12b)].tags[0][_0x49e83e(0x12e)]), should[_0x49e83e(0x128)].exist(_0x4dc404[_0x49e83e(0x12b)].tags[0][_0x49e83e(0x12f)]), _0x179d2e;
            });
        }), describe(_0x44145e[_0xd57a7c(0x130)], function () {
            const _0x413ba4 = _0xd57a7c;
            const _0x36216d = {
                'name': [123, new Date(), _0x413ba4(0x131), '', _[_0x413ba4(0x132)]('a', 192), null],
                'slug': [123, new Date(), _[_0x413ba4(0x132)]('a', 192)],
                'description': [123, new Date(), _[_0x413ba4(0x132)]('a', 501)],
                'feature_image': [123, new Date(), _0x469694.qKoUN],
                'visibility': [123, new Date(), _0x413ba4(0x133), null],
                'meta_title': [123, new Date(), _[_0x413ba4(0x132)]('a', 301)],
                'meta_description': [123, new Date(), _[_0x413ba4(0x132)]('a', 501)]
            };

            Object.keys(_0x36216d)[_0x413ba4(0x134)](_0x521698 => {
                const _0x2454c2 = _0x413ba4;
                const _0x45cd89 = {
                    'NzjFi': _0x469694.tdFpT,
                    'xqXUT': function (_0x1df18c, _0x4f0deb) {
                        return _0x469694.AxvdD(_0x1df18c, _0x4f0deb);
                    },
                    'WtQTA': 'abc'
                };

                it(_0x2454c2(0x135) + _0x521698, function () {
                    const _0x4c46a5 = _0x2454c2;
                    const _0x491c93 = _0x36216d[_0x521698];

                    const _0x1189e2 = _0x491c93[_0x4c46a5(0x136)](_0x30d4ac => {
                        const _0x38d62e = _0x4c46a5;
                        const _0x58a034 = { 'XxFlb': _0x45cd89.NzjFi };
                        const _0x359eb0 = {};

                        _0x359eb0[_0x521698] = _0x30d4ac;
                        _0x45cd89[_0x38d62e(0x137)](_0x521698, _0x38d62e(0x127)) && (_0x359eb0[_0x38d62e(0x127)] = _0x45cd89.WtQTA);
                        const _0x10db7f = {
                            'options': {},
                            'data': { 'tags': [{}] }
                        };

                        return validators.input[_0x38d62e(0x11a)][_0x38d62e(0x10a)](_0x7d3faf, _0x10db7f)[_0x38d62e(0x11b)](Promise[_0x38d62e(0x11f)])[_0x38d62e(0x11c)](_0xef5db => {
                            const _0x1deb8e = _0x38d62e;

                            _0xef5db[_0x1deb8e(0x11d)][_0x1deb8e(0xff)][_0x1deb8e(0x120)](_0x58a034[_0x1deb8e(0x138)]);
                        });
                    });

                    return Promise[_0x4c46a5(0x139)](_0x1189e2);
                });
            });
        });
    }), _0x44145e[_0x5373f6(0x112)](describe, _0x44145e[_0x5373f6(0x13a)], function () {
        const _0x337a28 = _0x5373f6;
        const _0x4f779d = {
            'bvEcx': _0x44145e[_0x337a28(0x13b)],
            'bbwmr': _0x44145e[_0x337a28(0x13c)],
            'NSadb': _0x44145e[_0x337a28(0x13d)],
            'THDKJ': function (_0x807bd2, _0x680188, _0x19f225) {
                return _0x44145e.vQeLH(_0x807bd2, _0x680188, _0x19f225);
            },
            'EPxev': _0x44145e.zHRSG,
            'ZYsWX': _0x44145e.ogJCx
        };
        const _0x5613e5 = {
            'docName': _0x44145e[_0x337a28(0x115)],
            'method': _0x44145e[_0x337a28(0x13a)]
        };

        _0x44145e[_0x337a28(0x13e)](describe, _0x44145e.OFGgZ, function () {
            const _0x1d4874 = _0x337a28;
            const _0x20796f = { 'nRzLL': _0x1d4874(0x11e) };

            it(_0x4f779d[_0x1d4874(0x13f)], function () {
                const _0x3ba9df = _0x1d4874;
                const _0x1f7963 = { 'mEqWq': 'ValidationError' };
                const _0x549fbb = {
                    'options': {},
                    'data': {}
                };

                return validators[_0x3ba9df(0x119)][_0x3ba9df(0x11a)][_0x3ba9df(0x10e)](_0x5613e5, _0x549fbb)[_0x3ba9df(0x11b)](Promise.reject)[_0x3ba9df(0x11c)](_0x384847 => {
                    const _0x4d7793 = _0x3ba9df;

                    _0x384847.errorType[_0x4d7793(0xff)][_0x4d7793(0x120)](_0x1f7963[_0x4d7793(0x140)]);
                });
            }), it(_0x4f779d[_0x1d4874(0x141)], function () {
                const _0x297b61 = _0x1d4874;
                const _0x1e548a = { 'QHdaE': _0x20796f[_0x297b61(0x142)] };
                const _0x2744aa = {
                    'options': {},
                    'data': { 'posts': [] }
                };

                return validators[_0x297b61(0x119)][_0x297b61(0x11a)][_0x297b61(0x10e)](_0x5613e5, _0x2744aa).then(Promise[_0x297b61(0x11f)]).catch(_0x53be4b => {
                    const _0x453d6c = _0x297b61;

                    _0x53be4b[_0x453d6c(0x11d)][_0x453d6c(0xff)][_0x453d6c(0x120)](_0x1e548a[_0x453d6c(0x143)]);
                });
            }), _0x4f779d[_0x1d4874(0x144)](it, _0x4f779d[_0x1d4874(0x145)], function () {
                const _0x105e3f = _0x1d4874;
                const _0x465dd3 = { 'cgMex': _0x105e3f(0x11e) };
                const _0x349622 = {
                    'options': {},
                    'data': {
                        'tags': [],
                        'posts': []
                    }
                };

                return validators.input[_0x105e3f(0x11a)][_0x105e3f(0x10e)](_0x5613e5, _0x349622).then(Promise[_0x105e3f(0x11f)])[_0x105e3f(0x11c)](_0x4a1692 => {
                    const _0x5f0f56 = _0x105e3f;

                    _0x4a1692[_0x5f0f56(0x11d)].should[_0x5f0f56(0x120)](_0x465dd3.cgMex);
                });
            }), it(_0x4f779d[_0x1d4874(0x146)], function () {
                const _0x108e39 = _0x1d4874;
                const _0x4eae54 = {
                    'options': {},
                    'data': { 'tags': [{ 'name': _0x4f779d[_0x108e39(0x147)] }] }
                };

                return validators[_0x108e39(0x119)][_0x108e39(0x11a)][_0x108e39(0x10e)](_0x5613e5, _0x4eae54);
            });
        });
    });
});
