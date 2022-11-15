const _0x47cf = [
    'required\x20fields',
    'input',
    'then',
    'reject',
    'catch',
    'should',
    'equal',
    'ValidationError',
    'errorType',
    'should\x20fail\x20with\x20no\x20tags\x20in\x20array',
    'should\x20fail\x20with\x20more\x20than\x20tags',
    'should\x20fail\x20without\x20required\x20fields',
    'a\x20fail',
    'should\x20pass\x20with\x20required\x20fields',
    'pass',
    'should\x20remove\x20`strip`able\x20fields\x20and\x20leave\x20regular\x20fields',
    'strip\x20me',
    'exist',
    'data',
    'not',
    'parent',
    'created_at',
    'created_by',
    'field\x20formats',
    ',starts-with-coma',
    'repeat',
    'abc',
    'forEach',
    'should\x20fail\x20for\x20bad\x20',
    'map',
    'name',
    'all',
    'edit',
    'should\x20fail\x20with\x20no\x20data',
    'should\x20fail\x20with\x20no\x20tags',
    'should\x20pass\x20with\x20some\x20fields',
    '395885cdUVpt',
    '1yRZoqR',
    '126275kYggTx',
    '470730dbqvIH',
    '368592whHXdP',
    '4108rlvFBC',
    '397884BRhRbE',
    '41jukQql',
    '5491oFWPYo',
    '@tryghost/errors',
    'lodash',
    'sinon',
    'bluebird',
    '../../../../../../../core/server/api/canary/utils/validators',
    'Unit:\x20canary/utils/validators/input/tags',
    'add',
    'tags'
];
function _0x1e1b(_0x4b80fe, _0x39c897) {
    return _0x1e1b = function (_0x47cf25, _0x1e1bd2) {
        _0x47cf25 = _0x47cf25 - 0xd2;
        let _0x3d5064 = _0x47cf[_0x47cf25];
        return _0x3d5064;
    }, _0x1e1b(_0x4b80fe, _0x39c897);
}
const _0x5b63fd = _0x1e1b;
(function (_0x5b24da, _0x419fba) {
    const _0x121a13 = _0x1e1b;
    while (!![]) {
        try {
            const _0x43e821 = -parseInt(_0x121a13(0xd2)) * -parseInt(_0x121a13(0xd3)) + parseInt(_0x121a13(0xd4)) + -parseInt(_0x121a13(0xd5)) + parseInt(_0x121a13(0xd6)) + parseInt(_0x121a13(0xd7)) + -parseInt(_0x121a13(0xd8)) + parseInt(_0x121a13(0xd9)) * parseInt(_0x121a13(0xda));
            if (_0x43e821 === _0x419fba)
                break;
            else
                _0x5b24da['push'](_0x5b24da['shift']());
        } catch (_0x6bfe31) {
            _0x5b24da['push'](_0x5b24da['shift']());
        }
    }
}(_0x47cf, 0x3d5f1));
const errors = require(_0x5b63fd(0xdb)), _ = require(_0x5b63fd(0xdc)), should = require('should'), sinon = require(_0x5b63fd(0xdd)), Promise = require(_0x5b63fd(0xde)), validators = require(_0x5b63fd(0xdf));
describe(_0x5b63fd(0xe0), function () {
    const _0x18dc67 = _0x5b63fd;
    afterEach(function () {
        sinon['restore']();
    }), describe(_0x18dc67(0xe1), function () {
        const _0x17375b = _0x18dc67, _0x59aac2 = {
                'docName': _0x17375b(0xe2),
                'method': _0x17375b(0xe1)
            };
        describe(_0x17375b(0xe3), function () {
            const _0x3bb370 = _0x17375b;
            it('should\x20fail\x20with\x20no\x20data', function () {
                const _0x4edcff = _0x1e1b, _0x4a2403 = {
                        'options': {},
                        'data': {}
                    };
                return validators[_0x4edcff(0xe4)][_0x4edcff(0xe2)][_0x4edcff(0xe1)](_0x59aac2, _0x4a2403)[_0x4edcff(0xe5)](Promise[_0x4edcff(0xe6)])[_0x4edcff(0xe7)](_0x49f5f9 => {
                    const _0x426f48 = _0x4edcff;
                    _0x49f5f9['errorType'][_0x426f48(0xe8)][_0x426f48(0xe9)](_0x426f48(0xea));
                });
            }), it('should\x20fail\x20with\x20no\x20tags', function () {
                const _0x18e3dc = _0x1e1b, _0x59d703 = {
                        'options': {},
                        'data': { 'posts': [] }
                    };
                return validators[_0x18e3dc(0xe4)][_0x18e3dc(0xe2)]['add'](_0x59aac2, _0x59d703)[_0x18e3dc(0xe5)](Promise[_0x18e3dc(0xe6)])[_0x18e3dc(0xe7)](_0x7a2b0e => {
                    const _0x1e6890 = _0x18e3dc;
                    _0x7a2b0e[_0x1e6890(0xeb)][_0x1e6890(0xe8)][_0x1e6890(0xe9)](_0x1e6890(0xea));
                });
            }), it(_0x3bb370(0xec), function () {
                const _0x27c9b9 = _0x3bb370, _0x17117f = {
                        'options': {},
                        'data': { 'tags': [] }
                    };
                return validators['input'][_0x27c9b9(0xe2)][_0x27c9b9(0xe1)](_0x59aac2, _0x17117f)[_0x27c9b9(0xe5)](Promise['reject'])[_0x27c9b9(0xe7)](_0x551df2 => {
                    const _0x4da9cb = _0x27c9b9;
                    _0x551df2[_0x4da9cb(0xeb)]['should']['equal'](_0x4da9cb(0xea));
                });
            }), it(_0x3bb370(0xed), function () {
                const _0x255cc0 = _0x3bb370, _0x5bf78d = {
                        'options': {},
                        'data': {
                            'tags': [],
                            'posts': []
                        }
                    };
                return validators[_0x255cc0(0xe4)][_0x255cc0(0xe2)][_0x255cc0(0xe1)](_0x59aac2, _0x5bf78d)['then'](Promise[_0x255cc0(0xe6)])[_0x255cc0(0xe7)](_0x5a1925 => {
                    const _0x1718dc = _0x255cc0;
                    _0x5a1925[_0x1718dc(0xeb)][_0x1718dc(0xe8)][_0x1718dc(0xe9)](_0x1718dc(0xea));
                });
            }), it(_0x3bb370(0xee), function () {
                const _0x1062b7 = _0x3bb370, _0x3b17b1 = {
                        'options': {},
                        'data': { 'tags': [{ 'what': _0x1062b7(0xef) }] }
                    };
                return validators[_0x1062b7(0xe4)][_0x1062b7(0xe2)][_0x1062b7(0xe1)](_0x59aac2, _0x3b17b1)[_0x1062b7(0xe5)](Promise[_0x1062b7(0xe6)])['catch'](_0x19e683 => {
                    const _0x4a0067 = _0x1062b7;
                    _0x19e683[_0x4a0067(0xeb)][_0x4a0067(0xe8)][_0x4a0067(0xe9)](_0x4a0067(0xea));
                });
            }), it(_0x3bb370(0xf0), function () {
                const _0x4fb528 = _0x3bb370, _0x4a9d00 = {
                        'options': {},
                        'data': { 'tags': [{ 'name': _0x4fb528(0xf1) }] }
                    };
                return validators[_0x4fb528(0xe4)][_0x4fb528(0xe2)][_0x4fb528(0xe1)](_0x59aac2, _0x4a9d00);
            }), it(_0x3bb370(0xf2), function () {
                const _0x7a406a = _0x3bb370, _0xd824bb = {
                        'options': {},
                        'data': {
                            'tags': [{
                                    'name': _0x7a406a(0xf1),
                                    'parent': _0x7a406a(0xf3),
                                    'created_at': _0x7a406a(0xf3),
                                    'created_by': _0x7a406a(0xf3),
                                    'updated_at': _0x7a406a(0xf3),
                                    'updated_by': _0x7a406a(0xf3)
                                }]
                        }
                    };
                let _0x521919 = validators['input'][_0x7a406a(0xe2)][_0x7a406a(0xe1)](_0x59aac2, _0xd824bb);
                return should[_0x7a406a(0xf4)](_0xd824bb[_0x7a406a(0xf5)][_0x7a406a(0xe2)][0x0]['name']), should[_0x7a406a(0xf6)][_0x7a406a(0xf4)](_0xd824bb['data'][_0x7a406a(0xe2)][0x0][_0x7a406a(0xf7)]), should[_0x7a406a(0xf6)][_0x7a406a(0xf4)](_0xd824bb['data'][_0x7a406a(0xe2)][0x0][_0x7a406a(0xf8)]), should['not'][_0x7a406a(0xf4)](_0xd824bb[_0x7a406a(0xf5)][_0x7a406a(0xe2)][0x0][_0x7a406a(0xf9)]), should[_0x7a406a(0xf6)]['exist'](_0xd824bb[_0x7a406a(0xf5)][_0x7a406a(0xe2)][0x0]['updated_at']), should[_0x7a406a(0xf6)][_0x7a406a(0xf4)](_0xd824bb['data'][_0x7a406a(0xe2)][0x0]['updated_by']), _0x521919;
            });
        }), describe(_0x17375b(0xfa), function () {
            const _0x794af1 = _0x17375b, _0x11f3da = {
                    'name': [
                        0x7b,
                        new Date(),
                        _0x794af1(0xfb),
                        '',
                        _[_0x794af1(0xfc)]('a', 0xc0),
                        null
                    ],
                    'slug': [
                        0x7b,
                        new Date(),
                        _[_0x794af1(0xfc)]('a', 0xc0)
                    ],
                    'description': [
                        0x7b,
                        new Date(),
                        _[_0x794af1(0xfc)]('a', 0x1f5)
                    ],
                    'feature_image': [
                        0x7b,
                        new Date(),
                        'not\x20uri'
                    ],
                    'visibility': [
                        0x7b,
                        new Date(),
                        _0x794af1(0xfd),
                        null
                    ],
                    'meta_title': [
                        0x7b,
                        new Date(),
                        _[_0x794af1(0xfc)]('a', 0x12d)
                    ],
                    'meta_description': [
                        0x7b,
                        new Date(),
                        _['repeat']('a', 0x1f5)
                    ]
                };
            Object['keys'](_0x11f3da)[_0x794af1(0xfe)](_0x1e9558 => {
                const _0x445f8d = _0x794af1;
                it(_0x445f8d(0xff) + _0x1e9558, function () {
                    const _0x280651 = _0x445f8d, _0x2a8d2e = _0x11f3da[_0x1e9558], _0x358971 = _0x2a8d2e[_0x280651(0x100)](_0x2bb884 => {
                            const _0x3c69bc = _0x280651, _0x28f2b2 = {};
                            _0x28f2b2[_0x1e9558] = _0x2bb884;
                            _0x1e9558 !== _0x3c69bc(0x101) && (_0x28f2b2[_0x3c69bc(0x101)] = _0x3c69bc(0xfd));
                            const _0x106b53 = {
                                'options': {},
                                'data': { 'tags': [_0x28f2b2] }
                            };
                            return validators[_0x3c69bc(0xe4)]['tags'][_0x3c69bc(0xe1)](_0x59aac2, _0x106b53)['then'](Promise[_0x3c69bc(0xe6)])[_0x3c69bc(0xe7)](_0x1086d6 => {
                                const _0x27372f = _0x3c69bc;
                                _0x1086d6['errorType'][_0x27372f(0xe8)][_0x27372f(0xe9)](_0x27372f(0xea));
                            });
                        });
                    return Promise[_0x280651(0x102)](_0x358971);
                });
            });
        });
    }), describe(_0x18dc67(0x103), function () {
        const _0x1b9d04 = _0x18dc67, _0x2eef71 = {
                'docName': _0x1b9d04(0xe2),
                'method': 'edit'
            };
        describe('required\x20fields', function () {
            const _0x48a0ee = _0x1b9d04;
            it(_0x48a0ee(0x104), function () {
                const _0x54b2cd = _0x48a0ee, _0x57cf4a = {
                        'options': {},
                        'data': {}
                    };
                return validators['input'][_0x54b2cd(0xe2)][_0x54b2cd(0x103)](_0x2eef71, _0x57cf4a)[_0x54b2cd(0xe5)](Promise['reject'])['catch'](_0x5e4f04 => {
                    const _0x5a1567 = _0x54b2cd;
                    _0x5e4f04[_0x5a1567(0xeb)][_0x5a1567(0xe8)][_0x5a1567(0xe9)](_0x5a1567(0xea));
                });
            }), it(_0x48a0ee(0x105), function () {
                const _0x2222a5 = _0x48a0ee, _0x5382e3 = {
                        'options': {},
                        'data': { 'posts': [] }
                    };
                return validators[_0x2222a5(0xe4)][_0x2222a5(0xe2)][_0x2222a5(0x103)](_0x2eef71, _0x5382e3)[_0x2222a5(0xe5)](Promise[_0x2222a5(0xe6)])['catch'](_0x69500d => {
                    const _0x18385f = _0x2222a5;
                    _0x69500d[_0x18385f(0xeb)][_0x18385f(0xe8)][_0x18385f(0xe9)](_0x18385f(0xea));
                });
            }), it('should\x20fail\x20with\x20more\x20than\x20tags', function () {
                const _0x27e96f = _0x48a0ee, _0x21dda3 = {
                        'options': {},
                        'data': {
                            'tags': [],
                            'posts': []
                        }
                    };
                return validators[_0x27e96f(0xe4)][_0x27e96f(0xe2)][_0x27e96f(0x103)](_0x2eef71, _0x21dda3)[_0x27e96f(0xe5)](Promise[_0x27e96f(0xe6)])[_0x27e96f(0xe7)](_0x41ed46 => {
                    const _0x2e3a90 = _0x27e96f;
                    _0x41ed46[_0x2e3a90(0xeb)][_0x2e3a90(0xe8)]['equal'](_0x2e3a90(0xea));
                });
            }), it(_0x48a0ee(0x106), function () {
                const _0x39afcc = _0x48a0ee, _0x4e53db = {
                        'options': {},
                        'data': { 'tags': [{ 'name': _0x39afcc(0xf1) }] }
                    };
                return validators[_0x39afcc(0xe4)][_0x39afcc(0xe2)][_0x39afcc(0x103)](_0x2eef71, _0x4e53db);
            });
        });
    });
});
