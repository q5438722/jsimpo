const errors = require(_0x5b63fd(219)), _ = require(_0x5b63fd(220)), should = require('should'), sinon = require(_0x5b63fd(221)), Promise = require(_0x5b63fd(222)), validators = require(_0x5b63fd(223));
describe(_0x5b63fd(224), function () {
    const _0x18dc67 = _0x5b63fd;
    afterEach(function () {
        sinon['restore']();
    }), describe(_0x18dc67(225), function () {
        const _0x17375b = _0x18dc67, _0x59aac2 = {
                'docName': _0x17375b(226),
                'method': _0x17375b(225)
            };
        describe(_0x17375b(227), function () {
            const _0x3bb370 = _0x17375b;
            it('should fail with no data', function () {
                const _0x4edcff = _0x1e1b, _0x4a2403 = {
                        'options': {},
                        'data': {}
                    };
                return validators[_0x4edcff(228)][_0x4edcff(226)][_0x4edcff(225)](_0x59aac2, _0x4a2403)[_0x4edcff(229)](Promise[_0x4edcff(230)])[_0x4edcff(231)](_0x49f5f9 => {
                    const _0x426f48 = _0x4edcff;
                    _0x49f5f9['errorType'][_0x426f48(232)][_0x426f48(233)](_0x426f48(234));
                });
            }), it('should fail with no tags', function () {
                const _0x18e3dc = _0x1e1b, _0x59d703 = {
                        'options': {},
                        'data': { 'posts': [] }
                    };
                return validators[_0x18e3dc(228)][_0x18e3dc(226)]['add'](_0x59aac2, _0x59d703)[_0x18e3dc(229)](Promise[_0x18e3dc(230)])[_0x18e3dc(231)](_0x7a2b0e => {
                    const _0x1e6890 = _0x18e3dc;
                    _0x7a2b0e[_0x1e6890(235)][_0x1e6890(232)][_0x1e6890(233)](_0x1e6890(234));
                });
            }), it(_0x3bb370(236), function () {
                const _0x27c9b9 = _0x3bb370, _0x17117f = {
                        'options': {},
                        'data': { 'tags': [] }
                    };
                return validators['input'][_0x27c9b9(226)][_0x27c9b9(225)](_0x59aac2, _0x17117f)[_0x27c9b9(229)](Promise['reject'])[_0x27c9b9(231)](_0x551df2 => {
                    const _0x4da9cb = _0x27c9b9;
                    _0x551df2[_0x4da9cb(235)]['should']['equal'](_0x4da9cb(234));
                });
            }), it(_0x3bb370(237), function () {
                const _0x255cc0 = _0x3bb370, _0x5bf78d = {
                        'options': {},
                        'data': {
                            'tags': [],
                            'posts': []
                        }
                    };
                return validators[_0x255cc0(228)][_0x255cc0(226)][_0x255cc0(225)](_0x59aac2, _0x5bf78d)['then'](Promise[_0x255cc0(230)])[_0x255cc0(231)](_0x5a1925 => {
                    const _0x1718dc = _0x255cc0;
                    _0x5a1925[_0x1718dc(235)][_0x1718dc(232)][_0x1718dc(233)](_0x1718dc(234));
                });
            }), it(_0x3bb370(238), function () {
                const _0x1062b7 = _0x3bb370, _0x3b17b1 = {
                        'options': {},
                        'data': { 'tags': [{ 'what': _0x1062b7(239) }] }
                    };
                return validators[_0x1062b7(228)][_0x1062b7(226)][_0x1062b7(225)](_0x59aac2, _0x3b17b1)[_0x1062b7(229)](Promise[_0x1062b7(230)])['catch'](_0x19e683 => {
                    const _0x4a0067 = _0x1062b7;
                    _0x19e683[_0x4a0067(235)][_0x4a0067(232)][_0x4a0067(233)](_0x4a0067(234));
                });
            }), it(_0x3bb370(240), function () {
                const _0x4fb528 = _0x3bb370, _0x4a9d00 = {
                        'options': {},
                        'data': { 'tags': [{ 'name': _0x4fb528(241) }] }
                    };
                return validators[_0x4fb528(228)][_0x4fb528(226)][_0x4fb528(225)](_0x59aac2, _0x4a9d00);
            }), it(_0x3bb370(242), function () {
                const _0x7a406a = _0x3bb370, _0xd824bb = {
                        'options': {},
                        'data': {
                            'tags': [{
                                    'name': _0x7a406a(241),
                                    'parent': _0x7a406a(243),
                                    'created_at': _0x7a406a(243),
                                    'created_by': _0x7a406a(243),
                                    'updated_at': _0x7a406a(243),
                                    'updated_by': _0x7a406a(243)
                                }]
                        }
                    };
                let _0x521919 = validators['input'][_0x7a406a(226)][_0x7a406a(225)](_0x59aac2, _0xd824bb);
                return should[_0x7a406a(244)](_0xd824bb[_0x7a406a(245)][_0x7a406a(226)][0]['name']), should[_0x7a406a(246)][_0x7a406a(244)](_0xd824bb['data'][_0x7a406a(226)][0][_0x7a406a(247)]), should[_0x7a406a(246)][_0x7a406a(244)](_0xd824bb['data'][_0x7a406a(226)][0][_0x7a406a(248)]), should['not'][_0x7a406a(244)](_0xd824bb[_0x7a406a(245)][_0x7a406a(226)][0][_0x7a406a(249)]), should[_0x7a406a(246)]['exist'](_0xd824bb[_0x7a406a(245)][_0x7a406a(226)][0]['updated_at']), should[_0x7a406a(246)][_0x7a406a(244)](_0xd824bb['data'][_0x7a406a(226)][0]['updated_by']), _0x521919;
            });
        }), describe(_0x17375b(250), function () {
            const _0x794af1 = _0x17375b, _0x11f3da = {
                    'name': [
                        123,
                        new Date(),
                        _0x794af1(251),
                        '',
                        _[_0x794af1(252)]('a', 192),
                        null
                    ],
                    'slug': [
                        123,
                        new Date(),
                        _[_0x794af1(252)]('a', 192)
                    ],
                    'description': [
                        123,
                        new Date(),
                        _[_0x794af1(252)]('a', 501)
                    ],
                    'feature_image': [
                        123,
                        new Date(),
                        'not uri'
                    ],
                    'visibility': [
                        123,
                        new Date(),
                        _0x794af1(253),
                        null
                    ],
                    'meta_title': [
                        123,
                        new Date(),
                        _[_0x794af1(252)]('a', 301)
                    ],
                    'meta_description': [
                        123,
                        new Date(),
                        _['repeat']('a', 501)
                    ]
                };
            Object['keys'](_0x11f3da)[_0x794af1(254)](_0x1e9558 => {
                const _0x445f8d = _0x794af1;
                it(_0x445f8d(255) + _0x1e9558, function () {
                    const _0x280651 = _0x445f8d, _0x2a8d2e = _0x11f3da[_0x1e9558], _0x358971 = _0x2a8d2e[_0x280651(256)](_0x2bb884 => {
                            const _0x3c69bc = _0x280651, _0x28f2b2 = {};
                            _0x28f2b2[_0x1e9558] = _0x2bb884;
                            _0x1e9558 !== _0x3c69bc(257) && (_0x28f2b2[_0x3c69bc(257)] = _0x3c69bc(253));
                            const _0x106b53 = {
                                'options': {},
                                'data': { 'tags': [_0x28f2b2] }
                            };
                            return validators[_0x3c69bc(228)]['tags'][_0x3c69bc(225)](_0x59aac2, _0x106b53)['then'](Promise[_0x3c69bc(230)])[_0x3c69bc(231)](_0x1086d6 => {
                                const _0x27372f = _0x3c69bc;
                                _0x1086d6['errorType'][_0x27372f(232)][_0x27372f(233)](_0x27372f(234));
                            });
                        });
                    return Promise[_0x280651(258)](_0x358971);
                });
            });
        });
    }), describe(_0x18dc67(259), function () {
        const _0x1b9d04 = _0x18dc67, _0x2eef71 = {
                'docName': _0x1b9d04(226),
                'method': 'edit'
            };
        describe('required fields', function () {
            const _0x48a0ee = _0x1b9d04;
            it(_0x48a0ee(260), function () {
                const _0x54b2cd = _0x48a0ee, _0x57cf4a = {
                        'options': {},
                        'data': {}
                    };
                return validators['input'][_0x54b2cd(226)][_0x54b2cd(259)](_0x2eef71, _0x57cf4a)[_0x54b2cd(229)](Promise['reject'])['catch'](_0x5e4f04 => {
                    const _0x5a1567 = _0x54b2cd;
                    _0x5e4f04[_0x5a1567(235)][_0x5a1567(232)][_0x5a1567(233)](_0x5a1567(234));
                });
            }), it(_0x48a0ee(261), function () {
                const _0x2222a5 = _0x48a0ee, _0x5382e3 = {
                        'options': {},
                        'data': { 'posts': [] }
                    };
                return validators[_0x2222a5(228)][_0x2222a5(226)][_0x2222a5(259)](_0x2eef71, _0x5382e3)[_0x2222a5(229)](Promise[_0x2222a5(230)])['catch'](_0x69500d => {
                    const _0x18385f = _0x2222a5;
                    _0x69500d[_0x18385f(235)][_0x18385f(232)][_0x18385f(233)](_0x18385f(234));
                });
            }), it('should fail with more than tags', function () {
                const _0x27e96f = _0x48a0ee, _0x21dda3 = {
                        'options': {},
                        'data': {
                            'tags': [],
                            'posts': []
                        }
                    };
                return validators[_0x27e96f(228)][_0x27e96f(226)][_0x27e96f(259)](_0x2eef71, _0x21dda3)[_0x27e96f(229)](Promise[_0x27e96f(230)])[_0x27e96f(231)](_0x41ed46 => {
                    const _0x2e3a90 = _0x27e96f;
                    _0x41ed46[_0x2e3a90(235)][_0x2e3a90(232)]['equal'](_0x2e3a90(234));
                });
            }), it(_0x48a0ee(262), function () {
                const _0x39afcc = _0x48a0ee, _0x4e53db = {
                        'options': {},
                        'data': { 'tags': [{ 'name': _0x39afcc(241) }] }
                    };
                return validators[_0x39afcc(228)][_0x39afcc(226)][_0x39afcc(259)](_0x2eef71, _0x4e53db);
            });
        });
    });
});