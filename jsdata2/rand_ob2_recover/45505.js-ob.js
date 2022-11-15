var async = require(_0x3e4ef5(258)), {expect} = require(_0x3e4ef5(259)), assert = require(_0x3e4ef5(260));
describe(_0x3e4ef5(261), function () {
    var _0x5977d9 = _0x3e4ef5;
    this[_0x5977d9(262)](3), it(_0x5977d9(263), _0xafff05 => {
        var _0x141118 = _0x5977d9, _0xbf1c4f = [], _0x14960c = [
                50,
                10,
                180,
                10
            ], _0x2b7880 = async[_0x141118(261)]((_0x372094, _0x2f7925) => {
                var _0x2c4230 = _0x141118;
                setTimeout(() => {
                    var _0x54ff6f = _0x187e;
                    _0xbf1c4f[_0x54ff6f(264)](_0x54ff6f(265) + _0x372094), _0x2f7925(_0x54ff6f(266), 'arg');
                }, _0x14960c[_0x2c4230(267)]());
            }, 2);
        _0x2b7880[_0x141118(264)](1, (_0x3aa89d, _0x388dfc) => {
            var _0x28fdd1 = _0x141118;
            expect(_0x3aa89d)['to'][_0x28fdd1(268)](_0x28fdd1(266)), expect(_0x388dfc)['to'][_0x28fdd1(268)](_0x28fdd1(269)), expect(_0x2b7880[_0x28fdd1(270)]())['to']['equal'](1), _0xbf1c4f['push'](_0x28fdd1(271) + 1);
        }), _0x2b7880['push'](2, (_0x849c26, _0x46a931) => {
            var _0x516c42 = _0x141118;
            expect(_0x849c26)['to'][_0x516c42(268)](_0x516c42(266)), expect(_0x46a931)['to'][_0x516c42(268)](_0x516c42(269)), expect(_0x2b7880[_0x516c42(270)]())['to'][_0x516c42(268)](2), _0xbf1c4f[_0x516c42(264)]('callback ' + 2);
        }), _0x2b7880[_0x141118(264)](3, (_0x43500d, _0xdb31bd) => {
            var _0x29a420 = _0x141118;
            expect(_0x43500d)['to'][_0x29a420(268)](_0x29a420(266)), expect(_0xdb31bd)['to'][_0x29a420(268)](_0x29a420(269)), expect(_0x2b7880['length']())['to'][_0x29a420(268)](0), _0xbf1c4f['push']('callback ' + 3);
        }), _0x2b7880[_0x141118(264)](4, (_0x2819b8, _0x133ffd) => {
            var _0x1e3246 = _0x141118;
            expect(_0x2819b8)['to'][_0x1e3246(268)](_0x1e3246(266)), expect(_0x133ffd)['to']['equal'](_0x1e3246(269)), expect(_0x2b7880[_0x1e3246(270)]())['to'][_0x1e3246(268)](0), _0xbf1c4f[_0x1e3246(264)](_0x1e3246(271) + 4);
        }), expect(_0x2b7880[_0x141118(270)]())['to']['equal'](4), expect(_0x2b7880[_0x141118(272)])['to'][_0x141118(268)](2), _0x2b7880[_0x141118(273)](() => {
            var _0x2c8ce2 = _0x141118;
            expect(_0xbf1c4f)['to']['eql']([
                _0x2c8ce2(274),
                'callback 2',
                'process 1',
                _0x2c8ce2(275),
                _0x2c8ce2(276),
                'callback 4',
                _0x2c8ce2(277),
                'callback 3'
            ]), expect(_0x2b7880[_0x2c8ce2(272)])['to'][_0x2c8ce2(268)](2), expect(_0x2b7880[_0x2c8ce2(270)]())['to'][_0x2c8ce2(268)](0), _0xafff05();
        });
    }), it(_0x5977d9(278), _0x5186c9 => {
        var _0x53c3fd = _0x5977d9, _0x51f8af = [], _0x33c0bd = [
                50,
                10,
                180,
                10
            ], _0x30a77f = async[_0x53c3fd(261)]((_0x42e5ec, _0x3774f6) => {
                var _0x329806 = _0x53c3fd;
                setTimeout(() => {
                    var _0x623e8e = _0x187e;
                    _0x51f8af[_0x623e8e(264)](_0x623e8e(265) + _0x42e5ec), _0x3774f6(_0x623e8e(266), _0x623e8e(269));
                }, _0x33c0bd[_0x329806(267)]());
            });
        _0x30a77f[_0x53c3fd(264)](1, (_0x5b3a06, _0x5823b0) => {
            var _0x343bc7 = _0x53c3fd;
            expect(_0x5b3a06)['to'][_0x343bc7(268)](_0x343bc7(266)), expect(_0x5823b0)['to']['equal'](_0x343bc7(269)), expect(_0x30a77f[_0x343bc7(270)]())['to'][_0x343bc7(268)](3), _0x51f8af[_0x343bc7(264)](_0x343bc7(271) + 1);
        }), _0x30a77f['push'](2, (_0x2c1ad4, _0x2c2569) => {
            var _0x2f7b2e = _0x53c3fd;
            expect(_0x2c1ad4)['to'][_0x2f7b2e(268)](_0x2f7b2e(266)), expect(_0x2c2569)['to'][_0x2f7b2e(268)](_0x2f7b2e(269)), expect(_0x30a77f['length']())['to'][_0x2f7b2e(268)](2), _0x51f8af['push'](_0x2f7b2e(271) + 2);
        }), _0x30a77f[_0x53c3fd(264)](3, (_0x19dbe5, _0x1224c7) => {
            var _0x16023f = _0x53c3fd;
            expect(_0x19dbe5)['to'][_0x16023f(268)](_0x16023f(266)), expect(_0x1224c7)['to'][_0x16023f(268)](_0x16023f(269)), expect(_0x30a77f[_0x16023f(270)]())['to']['equal'](1), _0x51f8af['push'](_0x16023f(271) + 3);
        }), _0x30a77f[_0x53c3fd(264)](4, (_0x52981e, _0x2199c4) => {
            var _0x5222c7 = _0x53c3fd;
            expect(_0x52981e)['to']['equal'](_0x5222c7(266)), expect(_0x2199c4)['to'][_0x5222c7(268)](_0x5222c7(269)), expect(_0x30a77f['length']())['to'][_0x5222c7(268)](0), _0x51f8af[_0x5222c7(264)](_0x5222c7(271) + 4);
        }), expect(_0x30a77f['length']())['to'][_0x53c3fd(268)](4), expect(_0x30a77f['concurrency'])['to'][_0x53c3fd(268)](1), _0x30a77f[_0x53c3fd(273)](() => {
            var _0x19b247 = _0x53c3fd;
            expect(_0x51f8af)['to'][_0x19b247(279)]([
                _0x19b247(280),
                _0x19b247(275),
                _0x19b247(274),
                _0x19b247(281),
                _0x19b247(277),
                _0x19b247(282),
                _0x19b247(276),
                _0x19b247(283)
            ]), expect(_0x30a77f[_0x19b247(272)])['to'][_0x19b247(268)](1), expect(_0x30a77f[_0x19b247(270)]())['to'][_0x19b247(268)](0), _0x5186c9();
        });
    }), it('zero concurrency', _0x408d16 => {
        var _0x21b54f = _0x5977d9;
        expect(() => {
            var _0x2020cf = _0x187e;
            async[_0x2020cf(261)]((_0x24ed91, _0x270da5) => {
                _0x270da5(null, _0x24ed91);
            }, 0);
        })['to'][_0x21b54f(284)](), _0x408d16();
    }), it(_0x5977d9(285), _0x321d5b => {
        var _0x53e1ef = _0x5977d9, _0x5d5937 = [], _0x429b2f = async['queue']((_0x2e53e8, _0x493181) => {
                var _0x102683 = _0x187e;
                _0x493181(_0x2e53e8[_0x102683(286)] === 'foo' ? new Error(_0x102683(287)) : null);
            }, 2);
        _0x429b2f[_0x53e1ef(273)](() => {
            var _0x3936b3 = _0x53e1ef;
            expect(_0x5d5937)['to'][_0x3936b3(279)]([
                'bar',
                _0x3936b3(287)
            ]), _0x321d5b();
        }), _0x429b2f['push']({ 'name': _0x53e1ef(288) }, _0x394766 => {
            var _0x54ce7b = _0x53e1ef;
            if (_0x394766) {
                _0x5d5937[_0x54ce7b(264)]('barError');
                return;
            }
            _0x5d5937['push'](_0x54ce7b(288));
        }), _0x429b2f[_0x53e1ef(264)]({ 'name': _0x53e1ef(289) }, _0x2cc671 => {
            var _0x38dde6 = _0x53e1ef;
            if (_0x2cc671) {
                _0x5d5937[_0x38dde6(264)]('fooError');
                return;
            }
            _0x5d5937[_0x38dde6(264)]('foo');
        });
    }), it('pushAsync', _0x32c331 => {
        var _0xcf690f = _0x5977d9;
        const _0x86f67b = [];
        var _0x216ff3 = async['queue']((_0x303b9a, _0x250745) => {
            var _0x399a71 = _0x187e;
            if (_0x303b9a === 2)
                return _0x250745(new Error(_0x399a71(290)));
            _0x250745();
        });
        _0x216ff3[_0xcf690f(291)](1, () => {
            throw new Error('should not be called');
        })[_0xcf690f(292)](() => _0x86f67b[_0xcf690f(264)](1)), _0x216ff3[_0xcf690f(291)](2)[_0xcf690f(293)](_0x5aecaf => {
            var _0x405856 = _0xcf690f;
            expect(_0x5aecaf[_0x405856(294)])['to']['equal'](_0x405856(290)), _0x86f67b[_0x405856(264)](2);
        }), _0x216ff3[_0xcf690f(291)]([
            3,
            4
        ])['map'](_0x1f9dd6 => _0x1f9dd6[_0xcf690f(292)](() => _0x86f67b[_0xcf690f(264)]('arr'))), _0x216ff3[_0xcf690f(273)](() => setTimeout(() => {
            var _0x310f58 = _0xcf690f;
            console[_0x310f58(295)](_0x310f58(273)), expect(_0x86f67b)['to']['eql']([
                1,
                2,
                'arr',
                _0x310f58(296)
            ]), _0x32c331();
        }));
    }), it('unshiftAsync', _0x2e67dc => {
        var _0x245729 = _0x5977d9;
        const _0x38961d = [];
        var _0x2eedcb = async[_0x245729(261)]((_0x1a1d6e, _0x3ff9f5) => {
            var _0x544ba3 = _0x245729;
            if (_0x1a1d6e === 2)
                return _0x3ff9f5(new Error(_0x544ba3(290)));
            _0x3ff9f5();
        });
        _0x2eedcb[_0x245729(297)](1)[_0x245729(292)](() => _0x38961d[_0x245729(264)](1)), _0x2eedcb[_0x245729(297)](2)['catch'](_0xa740e2 => {
            var _0x1285c2 = _0x245729;
            expect(_0xa740e2[_0x1285c2(294)])['to'][_0x1285c2(268)](_0x1285c2(290)), _0x38961d[_0x1285c2(264)](2);
        }), _0x2eedcb['unshiftAsync']([
            3,
            4
        ])['map'](_0x36fed7 => _0x36fed7[_0x245729(292)](() => _0x38961d[_0x245729(264)](_0x245729(296)))), _0x2eedcb[_0x245729(273)](() => setTimeout(() => {
            var _0x3c3b09 = _0x245729;
            console[_0x3c3b09(295)](_0x3c3b09(273)), expect(_0x38961d)['to'][_0x3c3b09(279)]([
                _0x3c3b09(296),
                'arr',
                2,
                1
            ]), _0x2e67dc();
        }));
    }), it(_0x5977d9(298), _0xa282ec => {
        var _0x35a4f6 = _0x5977d9, _0x594e75 = [], _0x10b78c = async[_0x35a4f6(261)]((_0x363e0d, _0xff3d8f) => {
                var _0x5af22 = _0x35a4f6;
                _0xff3d8f(_0x363e0d['name'] === _0x5af22(289) ? new Error(_0x5af22(287)) : null);
            }, 2);
        _0x10b78c[_0x35a4f6(266)]((_0x4b2a75, _0x52b23b) => {
            var _0x438204 = _0x35a4f6;
            expect(_0x4b2a75)['to']['exist'], expect(_0x4b2a75[_0x438204(294)])['to'][_0x438204(268)]('fooError'), expect(_0x52b23b[_0x438204(286)])['to'][_0x438204(268)](_0x438204(289)), _0x594e75[_0x438204(264)](_0x438204(287));
        }), _0x10b78c['drain'](() => {
            var _0x1e0fc2 = _0x35a4f6;
            expect(_0x594e75)['to'][_0x1e0fc2(279)]([
                _0x1e0fc2(287),
                'bar'
            ]), _0xa282ec();
        }), _0x10b78c[_0x35a4f6(264)]({ 'name': 'foo' }), _0x10b78c[_0x35a4f6(264)]({ 'name': _0x35a4f6(288) }, _0x32284c => {
            var _0x29bd7d = _0x35a4f6;
            expect(_0x32284c)['to']['not']['exist'], _0x594e75[_0x29bd7d(264)]('bar');
        });
    }), it('changing concurrency', _0x3ee821 => {
        var _0x363c5d = _0x5977d9, _0x49d623 = async[_0x363c5d(261)]((_0x55efda, _0x4e1e2d) => {
                setTimeout(() => {
                    _0x4e1e2d();
                }, 10);
            }, 1);
        for (var _0x441ae4 = 0; _0x441ae4 < 50; _0x441ae4++) {
            _0x49d623[_0x363c5d(264)]('');
        }
        _0x49d623[_0x363c5d(273)](_0x3ee821), setTimeout(() => {
            var _0x23b0dd = _0x363c5d;
            expect(_0x49d623[_0x23b0dd(272)])['to']['equal'](1), _0x49d623[_0x23b0dd(272)] = 2, setTimeout(() => {
                var _0x883a57 = _0x23b0dd;
                expect(_0x49d623[_0x883a57(299)]())['to'][_0x883a57(268)](2), _0x49d623['concurrency'] = 5, setTimeout(() => {
                    var _0x34403e = _0x883a57;
                    expect(_0x49d623[_0x34403e(299)]())['to'][_0x34403e(268)](5);
                }, 40);
            }, 40);
        }, 40);
    }), it(_0x5977d9(300), function (_0x364440) {
        var _0x599e19 = _0x5977d9;
        this[_0x599e19(262)](3);
        var _0x437b2c = [], _0x490e5a = [
                50,
                10,
                180,
                10
            ], _0x560612 = [], _0x4324d7 = 0, _0x231bbf = async['queue']((_0x3871d4, _0x1823f6) => {
                var _0x3f4df4 = _0x599e19;
                _0x4324d7++, _0x560612[_0x3f4df4(264)](_0x4324d7), setTimeout(() => {
                    var _0x401356 = _0x3f4df4;
                    _0x437b2c[_0x401356(264)](_0x401356(265) + _0x3871d4), _0x4324d7--, _0x1823f6(_0x401356(266), _0x401356(269));
                }, _0x490e5a[_0x3f4df4(267)]());
            }, 2);
        _0x231bbf[_0x599e19(264)](1), _0x231bbf['push'](2), _0x231bbf[_0x599e19(264)](3), _0x231bbf[_0x599e19(264)](4), _0x231bbf[_0x599e19(273)](() => {
            var _0x158c8a = _0x599e19;
            expect(_0x4324d7)['to'][_0x158c8a(279)](0), expect(_0x560612)['to'][_0x158c8a(279)]([
                1,
                2,
                2,
                2
            ]), expect(_0x437b2c)['to'][_0x158c8a(279)]([
                _0x158c8a(274),
                'process 1',
                _0x158c8a(276),
                'process 3'
            ]), _0x364440();
        });
    }), it(_0x5977d9(301), _0xc8bd4b => {
        var _0x396d10 = _0x5977d9, _0x507b62 = async[_0x396d10(261)](() => {
            }, 1);
        expect(() => {
            var _0x410653 = _0x396d10;
            _0x507b62[_0x410653(264)]({}, 1);
        })['to'][_0x396d10(284)](), _0xc8bd4b();
    }), it('push with arrays', _0x182f6e => {
        var _0xb09f14 = _0x5977d9;
        const _0xc27e9f = [];
        var _0x38fe6b = async['queue']((_0x2d07a9, _0x19fbb8) => {
            var _0x4e7b95 = _0x187e;
            _0xc27e9f[_0x4e7b95(264)](_0x2d07a9), _0x19fbb8();
        }, 1);
        _0x38fe6b[_0xb09f14(264)]([
            [
                1,
                2,
                3
            ],
            [
                4,
                5,
                6
            ]
        ]), _0x38fe6b[_0xb09f14(273)](() => {
            var _0x523d07 = _0xb09f14;
            expect(_0xc27e9f)['to'][_0x523d07(279)]([
                [
                    1,
                    2,
                    3
                ],
                [
                    4,
                    5,
                    6
                ]
            ]), _0x182f6e();
        });
    }), it(_0x5977d9(302), _0x2f6664 => {
        var _0x32106d = _0x5977d9, _0x3d618b = [], _0x52605c = async[_0x32106d(261)]((_0x277e61, _0x516674) => {
                _0x3d618b['push'](_0x277e61), _0x516674();
            }, 1);
        _0x52605c['unshift'](4), _0x52605c['unshift'](3), _0x52605c[_0x32106d(302)](2), _0x52605c['unshift'](1), setTimeout(() => {
            var _0x24f159 = _0x32106d;
            expect(_0x3d618b)['to'][_0x24f159(279)]([
                1,
                2,
                3,
                4
            ]), _0x2f6664();
        }, 100);
    }), it(_0x5977d9(303), _0x1ca744 => {
        var _0xcd53bb = _0x5977d9, _0x1fa908 = async[_0xcd53bb(261)]((_0x7dd756, _0x1a0ed5) => {
                var _0x6f173 = _0xcd53bb;
                _0x1a0ed5(), expect(() => {
                    _0x1a0ed5();
                })['to'][_0x6f173(284)](), _0x1ca744();
            }, 2);
        _0x1fa908[_0xcd53bb(264)](1);
    }), it('bulk task', _0x531f8d => {
        var _0x71d5f2 = _0x5977d9, _0xcff3da = [], _0x4f8dc8 = [
                50,
                10,
                180,
                10
            ], _0x2a103f = async[_0x71d5f2(261)]((_0x160556, _0x53aee5) => {
                var _0xe5ac33 = _0x71d5f2;
                setTimeout(() => {
                    var _0x534de6 = _0x187e;
                    _0xcff3da[_0x534de6(264)]('process ' + _0x160556), _0x53aee5('error', _0x160556);
                }, _0x4f8dc8[_0xe5ac33(304)](0, 1)[0]);
            }, 2);
        _0x2a103f[_0x71d5f2(264)]([
            1,
            2,
            3,
            4
        ], (_0x32e21f, _0x121eab) => {
            var _0xe4764 = _0x71d5f2;
            expect(_0x32e21f)['to']['equal'](_0xe4764(266)), _0xcff3da[_0xe4764(264)]('callback ' + _0x121eab);
        }), expect(_0x2a103f[_0x71d5f2(270)]())['to'][_0x71d5f2(268)](4), expect(_0x2a103f[_0x71d5f2(272)])['to'][_0x71d5f2(268)](2), _0x2a103f[_0x71d5f2(273)](() => {
            var _0x282f0c = _0x71d5f2;
            expect(_0xcff3da)['to']['eql']([
                _0x282f0c(274),
                'callback 2',
                _0x282f0c(280),
                _0x282f0c(275),
                _0x282f0c(276),
                _0x282f0c(283),
                'process 3',
                _0x282f0c(282)
            ]), expect(_0x2a103f[_0x282f0c(272)])['to']['equal'](2), expect(_0x2a103f['length']())['to']['equal'](0), _0x531f8d();
        });
    }), it(_0x5977d9(305), _0x28fbdb => {
        var _0x47f07d = _0x5977d9, _0x492824 = async[_0x47f07d(261)]((_0x85ac7d, _0x4c8ad0) => {
                var _0x15b7be = _0x47f07d;
                expect(_0x492824[_0x15b7be(305)]())['to'][_0x15b7be(268)](![]), _0x4c8ad0();
            }, 1);
        expect(_0x492824['idle']())['to'][_0x47f07d(268)](!![]), _0x492824[_0x47f07d(302)](4), _0x492824['unshift'](3), _0x492824[_0x47f07d(302)](2), _0x492824[_0x47f07d(302)](1), expect(_0x492824[_0x47f07d(305)]())['to'][_0x47f07d(268)](![]), _0x492824['drain'](() => {
            var _0x5cc506 = _0x47f07d;
            expect(_0x492824['idle']())['to'][_0x5cc506(268)](!![]), _0x28fbdb();
        });
    }), it(_0x5977d9(306), _0xda069a => {
        var _0x128afa = _0x5977d9, _0x3dc009 = [], _0x255bad = 0, _0x385e1c = [], _0x20058c = [
                _0x128afa(280),
                _0x128afa(274),
                _0x128afa(277)
            ], _0x4963a1 = async[_0x128afa(261)]((_0x27eeac, _0x2a4b81) => {
                var _0x5bb296 = _0x128afa;
                _0x255bad++, _0x3dc009['push']('process ' + _0x27eeac), _0x385e1c[_0x5bb296(264)](_0x255bad), setTimeout(() => {
                    _0x255bad--, _0x2a4b81();
                }, 10);
            }, 2);
        _0x4963a1[_0x128afa(264)](1), _0x4963a1[_0x128afa(264)](2, _0x1cea6c), _0x4963a1[_0x128afa(264)](3);
        function _0x1cea6c() {
            var _0x14190b = _0x128afa;
            _0x4963a1[_0x14190b(306)](), expect(_0x385e1c)['to'][_0x14190b(279)]([
                1,
                2,
                2
            ]), expect(_0x3dc009)['to'][_0x14190b(279)](_0x20058c), setTimeout(_0x227fb3, 5), setTimeout(_0x58259e, 10);
        }
        function _0x227fb3() {
            var _0x487a21 = _0x128afa;
            _0x4963a1[_0x487a21(264)](4);
        }
        function _0x58259e() {
            var _0x1cc882 = _0x128afa;
            expect(_0x385e1c)['to'][_0x1cc882(279)]([
                1,
                2,
                2
            ]), expect(_0x3dc009)['to'][_0x1cc882(279)](_0x20058c), _0x4963a1[_0x1cc882(307)](), _0x4963a1[_0x1cc882(264)](5), _0x4963a1[_0x1cc882(264)](6), _0x4963a1[_0x1cc882(273)](_0x6dd67f);
        }
        function _0x6dd67f() {
            var _0x149a23 = _0x128afa;
            expect(_0x385e1c)['to'][_0x149a23(279)]([
                1,
                2,
                2,
                1,
                2,
                2
            ]), expect(_0x3dc009)['to'][_0x149a23(279)]([
                'process 1',
                _0x149a23(274),
                'process 3',
                'process 4',
                _0x149a23(308),
                _0x149a23(309)
            ]), _0xda069a();
        }
    }), it(_0x5977d9(310), _0x5d67e0 => {
        var _0x461412 = _0x5977d9, _0x4b264f = [], _0x27f312 = async[_0x461412(261)]((_0x1db007, _0x299469) => {
                var _0x4e62f4 = _0x461412;
                _0x1db007['isLongRunning'] ? (_0x27f312[_0x4e62f4(306)](), setTimeout(() => {
                    var _0x1ec2a1 = _0x4e62f4;
                    _0x4b264f[_0x1ec2a1(264)](_0x1db007['id']), _0x27f312[_0x1ec2a1(307)](), _0x299469();
                }, 50)) : (_0x4b264f[_0x4e62f4(264)](_0x1db007['id']), setTimeout(_0x299469, 10));
            }, 10);
        _0x27f312[_0x461412(264)]({
            'id': 1,
            'isLongRunning': !![]
        }), _0x27f312[_0x461412(264)]({ 'id': 2 }), _0x27f312[_0x461412(264)]({ 'id': 3 }), _0x27f312[_0x461412(264)]({ 'id': 4 }), _0x27f312[_0x461412(264)]({ 'id': 5 }), _0x27f312[_0x461412(273)](() => {
            var _0x2062a5 = _0x461412;
            expect(_0x4b264f)['to'][_0x2062a5(279)]([
                1,
                2,
                3,
                4,
                5
            ]), _0x5d67e0();
        });
    }), it('start paused', _0x4d5169 => {
        var _0x5a3d15 = _0x5977d9, _0x131833 = async[_0x5a3d15(261)]((_0x38c61a, _0xf8b767) => {
                var _0x440cb1 = _0x5a3d15;
                _0x38c61a === 2 && (expect(_0x131833[_0x440cb1(270)]())['to'][_0x440cb1(268)](1), expect(_0x131833['running']())['to'][_0x440cb1(268)](2)), setTimeout(() => {
                    _0xf8b767();
                }, 40);
            }, 2);
        _0x131833[_0x5a3d15(306)](), _0x131833[_0x5a3d15(264)]([
            1,
            2,
            3
        ]), setTimeout(() => {
            var _0x209bd0 = _0x5a3d15;
            expect(_0x131833['running']())['to'][_0x209bd0(268)](0), _0x131833[_0x209bd0(307)]();
        }, 5), _0x131833[_0x5a3d15(273)](_0x4d5169);
    }), it('kill', _0x429e01 => {
        var _0x328c86 = _0x5977d9, _0x574265 = async[_0x328c86(261)](() => {
                setTimeout(() => {
                    var _0x33c4ba = _0x187e;
                    throw new Error(_0x33c4ba(311));
                }, 20);
            }, 1);
        _0x574265['drain'](() => {
            throw new Error('Function should never be called');
        }), _0x574265[_0x328c86(264)](0), _0x574265[_0x328c86(312)](), setTimeout(() => {
            var _0x27f456 = _0x328c86;
            expect(_0x574265[_0x27f456(270)]())['to']['equal'](0), _0x429e01();
        }, 40);
    }), it('events', _0xdcc217 => {
        var _0xea417c = _0x5977d9, _0x1e9770 = [], _0x1f2b13 = async[_0xea417c(261)]((_0x2944e8, _0x1efaa8) => {
                var _0x1b30c2 = _0xea417c;
                _0x1e9770[_0x1b30c2(264)](_0x1b30c2(265) + _0x2944e8), setTimeout(_0x1efaa8, 10);
            }, 3);
        _0x1f2b13[_0xea417c(272)] = 3, _0x1f2b13[_0xea417c(313)](() => {
            var _0x38b8ed = _0xea417c;
            assert(_0x1f2b13[_0x38b8ed(299)]() == 3, _0x38b8ed(314)), _0x1e9770['push']('saturated');
        }), _0x1f2b13[_0xea417c(315)](() => {
            var _0x1f0daf = _0xea417c;
            assert(_0x1f2b13[_0x1f0daf(270)]() === 0, _0x1f0daf(316)), _0x1e9770[_0x1f0daf(264)](_0x1f0daf(315));
        }), _0x1f2b13['drain'](() => {
            var _0xebc63b = _0xea417c;
            assert(_0x1f2b13[_0xebc63b(270)]() === 0 && _0x1f2b13[_0xebc63b(299)]() === 0, _0xebc63b(317)), _0x1e9770[_0xebc63b(264)]('drain'), expect(_0x1e9770)['to']['eql']([
                _0xebc63b(318),
                _0xebc63b(319),
                _0xebc63b(313),
                _0xebc63b(320),
                _0xebc63b(321),
                _0xebc63b(313),
                'process poo',
                _0xebc63b(322),
                'empty',
                _0xebc63b(313),
                _0xebc63b(323),
                _0xebc63b(324),
                _0xebc63b(325),
                _0xebc63b(326),
                _0xebc63b(273)
            ]), _0xdcc217();
        }), _0x1f2b13[_0xea417c(264)]('foo', () => {
            var _0x2d1ac2 = _0xea417c;
            _0x1e9770[_0x2d1ac2(264)](_0x2d1ac2(321));
        }), _0x1f2b13[_0xea417c(264)](_0xea417c(288), () => {
            var _0x34f153 = _0xea417c;
            _0x1e9770[_0x34f153(264)](_0x34f153(322));
        }), _0x1f2b13[_0xea417c(264)](_0xea417c(327), () => {
            var _0x4e3bfd = _0xea417c;
            _0x1e9770[_0x4e3bfd(264)]('zoo cb');
        }), _0x1f2b13[_0xea417c(264)](_0xea417c(328), () => {
            var _0x36cb69 = _0xea417c;
            _0x1e9770[_0x36cb69(264)](_0x36cb69(325));
        }), _0x1f2b13[_0xea417c(264)](_0xea417c(329), () => {
            var _0x315085 = _0xea417c;
            _0x1e9770[_0x315085(264)](_0x315085(326));
        });
    }), it(_0x5977d9(315), _0x290050 => {
        var _0x2e89d3 = _0x5977d9, _0x54429a = [], _0x5558fa = async[_0x2e89d3(261)]((_0x223632, _0x40740b) => {
                var _0x14e5b9 = _0x2e89d3;
                _0x54429a['push']('process ' + _0x223632), async[_0x14e5b9(330)](_0x40740b);
            }, 3);
        _0x5558fa['drain'](() => {
            var _0x5a340f = _0x2e89d3;
            assert(_0x5558fa[_0x5a340f(270)]() === 0 && _0x5558fa[_0x5a340f(299)]() === 0, 'queue should be empty now and no more workers should be running'), _0x54429a[_0x5a340f(264)](_0x5a340f(273)), expect(_0x54429a)['to'][_0x5a340f(279)]([_0x5a340f(273)]), _0x290050();
        }), _0x5558fa[_0x2e89d3(264)]([]);
    }), it(_0x5977d9(331), _0xa4049c => {
        var _0x54c56d = _0x5977d9, _0x330bc6 = [], _0x596088 = async['queue']((_0x283ce8, _0x3fc575) => {
                var _0x3aa35f = _0x187e;
                _0x330bc6[_0x3aa35f(264)]('process ' + _0x283ce8), async['setImmediate'](_0x3fc575);
            }, 1);
        _0x596088[_0x54c56d(315)](() => {
            var _0x5b3769 = _0x54c56d;
            _0x330bc6[_0x5b3769(264)](_0x5b3769(315)), assert(_0x596088[_0x5b3769(305)]() === ![], 'tasks should be running when empty is called'), expect(_0x596088[_0x5b3769(299)]())['to'][_0x5b3769(268)](1);
        }), _0x596088[_0x54c56d(273)](() => {
            var _0x2f1ae2 = _0x54c56d;
            _0x330bc6[_0x2f1ae2(264)](_0x2f1ae2(273)), expect(_0x330bc6)['to'][_0x2f1ae2(279)]([
                _0x2f1ae2(315),
                _0x2f1ae2(280),
                _0x2f1ae2(273)
            ]), _0xa4049c();
        }), _0x596088[_0x54c56d(264)](1);
    }), it(_0x5977d9(313), _0x3def55 => {
        var _0x5241ab = _0x5977d9, _0x50e6c7 = ![], _0x3b07ed = async[_0x5241ab(261)]((_0x5a6797, _0x57233c) => {
                var _0x38f81c = _0x5241ab;
                async[_0x38f81c(330)](_0x57233c);
            }, 2);
        _0x3b07ed['saturated'](() => {
            _0x50e6c7 = !![];
        }), _0x3b07ed[_0x5241ab(273)](() => {
            var _0x3e47c5 = _0x5241ab;
            assert(_0x50e6c7, _0x3e47c5(332)), _0x3def55();
        }), _0x3b07ed[_0x5241ab(264)]([
            _0x5241ab(289),
            _0x5241ab(288),
            _0x5241ab(333),
            _0x5241ab(329)
        ]);
    }), it(_0x5977d9(334), _0x152637 => {
        var _0x1ef29f = _0x5977d9, _0x31e010 = async[_0x1ef29f(261)]((_0x2e2f72, _0x73fe3a) => {
                _0x73fe3a(null, _0x2e2f72);
            });
        expect(_0x31e010[_0x1ef29f(334)])['to'][_0x1ef29f(268)](![]), _0x31e010['push']('a'), expect(_0x31e010['started'])['to'][_0x1ef29f(268)](!![]), _0x152637();
    }), context(_0x5977d9(335), () => {
        var _0x2e165c = _0x5977d9;
        it(_0x2e165c(336), _0x15ed7 => {
            var _0x1a1856 = _0x2e165c, _0x59efaa = [], _0x383b9b = async[_0x1a1856(261)]((_0x11621f, _0x5ab4a6) => {
                    var _0x426c15 = _0x1a1856;
                    _0x59efaa[_0x426c15(264)](_0x426c15(265) + _0x11621f), async[_0x426c15(330)](_0x5ab4a6);
                }, 4);
            _0x383b9b[_0x1a1856(313)](() => {
                var _0x6a04b2 = _0x1a1856;
                _0x59efaa[_0x6a04b2(264)]('saturated');
            }), _0x383b9b[_0x1a1856(315)](() => {
                var _0x33ec3e = _0x1a1856;
                expect(_0x59efaa[_0x33ec3e(337)](_0x33ec3e(313)))['to']['be']['above'](-1), setTimeout(() => {
                    var _0x60f903 = _0x33ec3e;
                    expect(_0x59efaa)[_0x60f903(279)]([
                        _0x60f903(338),
                        _0x60f903(339),
                        'process foo2',
                        'saturated',
                        'process foo3',
                        _0x60f903(340),
                        _0x60f903(313),
                        _0x60f903(341),
                        _0x60f903(342),
                        'foo2 cb',
                        _0x60f903(343),
                        _0x60f903(344)
                    ]), _0x15ed7();
                }, 50);
            }), _0x383b9b['push'](_0x1a1856(345), () => {
                var _0x2d37b8 = _0x1a1856;
                _0x59efaa[_0x2d37b8(264)](_0x2d37b8(340));
            }), _0x383b9b[_0x1a1856(264)](_0x1a1856(346), () => {
                var _0x400128 = _0x1a1856;
                _0x59efaa[_0x400128(264)](_0x400128(342));
            }), _0x383b9b[_0x1a1856(264)](_0x1a1856(347), () => {
                var _0x5cf9fb = _0x1a1856;
                _0x59efaa['push'](_0x5cf9fb(348));
            }), _0x383b9b[_0x1a1856(264)](_0x1a1856(349), () => {
                var _0x4fb914 = _0x1a1856;
                _0x59efaa['push'](_0x4fb914(343));
            }), _0x383b9b[_0x1a1856(264)](_0x1a1856(350), () => {
                var _0x33ab89 = _0x1a1856;
                _0x59efaa[_0x33ab89(264)](_0x33ab89(344));
            });
        });
    }), context(_0x5977d9(351), () => {
        var _0x1e1381 = _0x5977d9;
        it(_0x1e1381(352), _0x551494 => {
            var _0x59b39e = _0x1e1381, _0x96604d = [], _0x3843f7 = async['queue']((_0xa2e907, _0x4e45f4) => {
                    var _0x99f778 = _0x187e;
                    _0x96604d[_0x99f778(264)](_0x99f778(265) + _0xa2e907), async[_0x99f778(330)](_0x4e45f4);
                }, 10);
            expect(_0x3843f7[_0x59b39e(353)])['to'][_0x59b39e(268)](2.5), _0x551494();
        }), it(_0x1e1381(354), _0x12fb86 => {
            var _0x27dc8c = _0x1e1381, _0x1f15ed = [], _0x1bad8b = async[_0x27dc8c(261)]((_0x2bab01, _0x2f114a) => {
                    var _0x33315e = _0x27dc8c;
                    _0x1f15ed['push'](_0x33315e(265) + _0x2bab01), async[_0x33315e(330)](_0x2f114a);
                }, 10);
            _0x1bad8b[_0x27dc8c(353)] = 4, expect(_0x1bad8b['buffer'])['to']['not'][_0x27dc8c(268)](2.5), expect(_0x1bad8b[_0x27dc8c(353)])['to'][_0x27dc8c(268)](4), _0x12fb86();
        }), it(_0x1e1381(355), _0x9d9c3e => {
            var _0x4b6d27 = _0x1e1381, _0x12a519 = [], _0x2b632b = async[_0x4b6d27(261)]((_0x1e623a, _0x10af36) => {
                    var _0x5e15bc = _0x4b6d27;
                    _0x12a519[_0x5e15bc(264)](_0x5e15bc(265) + _0x1e623a), async['setImmediate'](_0x10af36);
                }, 4);
            _0x2b632b[_0x4b6d27(356)](() => {
                var _0x188a97 = _0x4b6d27;
                _0x12a519[_0x188a97(264)](_0x188a97(356));
            }), _0x2b632b[_0x4b6d27(315)](() => {
                var _0x104e02 = _0x4b6d27;
                expect(_0x12a519[_0x104e02(337)](_0x104e02(356)))['to']['be'][_0x104e02(357)](-1), setTimeout(() => {
                    var _0x5f180a = _0x104e02;
                    expect(_0x12a519)[_0x5f180a(279)]([
                        'process foo0',
                        _0x5f180a(339),
                        _0x5f180a(358),
                        _0x5f180a(359),
                        _0x5f180a(340),
                        _0x5f180a(356),
                        'process foo4',
                        _0x5f180a(342),
                        _0x5f180a(356),
                        _0x5f180a(348),
                        _0x5f180a(356),
                        _0x5f180a(343),
                        _0x5f180a(356),
                        'foo4 cb',
                        _0x5f180a(356)
                    ]), _0x9d9c3e();
                }, 50);
            }), _0x2b632b[_0x4b6d27(264)](_0x4b6d27(345), () => {
                var _0x1d2b86 = _0x4b6d27;
                _0x12a519['push'](_0x1d2b86(340));
            }), _0x2b632b[_0x4b6d27(264)](_0x4b6d27(346), () => {
                var _0x17730a = _0x4b6d27;
                _0x12a519['push'](_0x17730a(342));
            }), _0x2b632b[_0x4b6d27(264)](_0x4b6d27(347), () => {
                var _0x3b9b64 = _0x4b6d27;
                _0x12a519[_0x3b9b64(264)](_0x3b9b64(348));
            }), _0x2b632b[_0x4b6d27(264)]('foo3', () => {
                var _0x5d9fd3 = _0x4b6d27;
                _0x12a519[_0x5d9fd3(264)](_0x5d9fd3(343));
            }), _0x2b632b[_0x4b6d27(264)]('foo4', () => {
                _0x12a519['push']('foo4 cb');
            });
        });
    }), context(_0x5977d9(360), () => {
        var _0x67c098 = _0x5977d9;
        it(_0x67c098(361), _0xd2c1f1 => {
            var _0x3af9df = _0x67c098, _0x200ae1 = async['queue']((_0x3949ea, _0x523cad) => {
                    async['setImmediate'](() => {
                        var _0xe9477b = _0x187e;
                        expect(_0x200ae1[_0xe9477b(360)]()['length'])['to'][_0xe9477b(268)](_0x200ae1[_0xe9477b(299)]()), _0x523cad();
                    });
                }, 2);
            _0x200ae1['drain'](() => {
                var _0x3f81cf = _0x187e;
                expect(_0x200ae1[_0x3f81cf(360)]()[_0x3f81cf(270)])['to'][_0x3f81cf(268)](0), expect(_0x200ae1['running']())['to'][_0x3f81cf(268)](0), _0xd2c1f1();
            }), _0x200ae1[_0x3af9df(264)](_0x3af9df(289)), _0x200ae1[_0x3af9df(264)](_0x3af9df(288)), _0x200ae1[_0x3af9df(264)](_0x3af9df(333));
        }), it('should contain the items being processed', _0x197ba0 => {
            var _0x52f9e9 = _0x67c098, _0x735483 = {
                    'foo': [_0x52f9e9(289)],
                    'foo_cb': [
                        _0x52f9e9(289),
                        _0x52f9e9(288)
                    ],
                    'bar': [
                        _0x52f9e9(289),
                        'bar'
                    ],
                    'bar_cb': [
                        'bar',
                        _0x52f9e9(333)
                    ],
                    'baz': [
                        _0x52f9e9(288),
                        'baz'
                    ],
                    'baz_cb': [_0x52f9e9(333)]
                };
            function _0x44f422(_0x137806) {
                var _0x43ec9e = _0x52f9e9;
                return _0x137806[_0x43ec9e(360)]()[_0x43ec9e(362)](_0x442423 => {
                    return _0x442423['data'];
                });
            }
            var _0x5de3f8 = async[_0x52f9e9(261)]((_0x402660, _0x500d3d) => {
                var _0x4b2d48 = _0x52f9e9;
                expect(_0x44f422(_0x5de3f8))['to'][_0x4b2d48(279)](_0x735483[_0x402660]), expect(_0x5de3f8[_0x4b2d48(360)]()[_0x4b2d48(270)])['to'][_0x4b2d48(268)](_0x5de3f8[_0x4b2d48(299)]()), async['setImmediate'](() => {
                    var _0x59164b = _0x4b2d48;
                    expect(_0x44f422(_0x5de3f8))['to'][_0x59164b(279)](_0x735483[_0x402660 + _0x59164b(363)]), expect(_0x5de3f8['workersList']()[_0x59164b(270)])['to'][_0x59164b(268)](_0x5de3f8[_0x59164b(299)]()), _0x500d3d();
                });
            }, 2);
            _0x5de3f8['drain'](() => {
                var _0x4f72bb = _0x52f9e9;
                expect(_0x5de3f8[_0x4f72bb(360)]())['to']['eql']([]), expect(_0x5de3f8[_0x4f72bb(360)]()['length'])['to'][_0x4f72bb(268)](_0x5de3f8['running']()), _0x197ba0();
            }), _0x5de3f8['push'](_0x52f9e9(289)), _0x5de3f8[_0x52f9e9(264)](_0x52f9e9(288)), _0x5de3f8[_0x52f9e9(264)]('baz');
        });
    }), it(_0x5977d9(364), _0x4cb807 => {
        var _0x1c4a54 = _0x5977d9, _0x3b8ddc = [], _0x2e880b = async[_0x1c4a54(261)]((_0x58be8e, _0x596302) => {
                var _0x1c9996 = _0x1c4a54;
                _0x3b8ddc[_0x1c9996(264)](_0x58be8e), async['setImmediate'](_0x596302);
            });
        _0x2e880b[_0x1c4a54(264)]([
            1,
            2,
            3,
            4,
            5
        ]), _0x2e880b[_0x1c4a54(364)](_0x58e1db => {
            return _0x58e1db['data'] === 3;
        }), _0x2e880b[_0x1c4a54(273)](() => {
            var _0x221ea7 = _0x1c4a54;
            expect(_0x3b8ddc)['to'][_0x221ea7(279)]([
                1,
                2,
                4,
                5
            ]), _0x4cb807();
        });
    }), it('should be iterable', _0x18d50e => {
        var _0x2e4c04 = _0x5977d9, _0x1cf3ea = async['queue']((_0x440891, _0x299c13) => {
                var _0x575708 = _0x187e;
                _0x440891 === 3 && (_0x1cf3ea[_0x575708(264)](6), expect([..._0x1cf3ea])['to'][_0x575708(279)]([
                    4,
                    5,
                    6
                ])), async[_0x575708(330)](_0x299c13);
            });
        _0x1cf3ea[_0x2e4c04(264)]([
            1,
            2,
            3,
            4,
            5
        ]), expect([..._0x1cf3ea])['to'][_0x2e4c04(279)]([
            1,
            2,
            3,
            4,
            5
        ]), _0x1cf3ea[_0x2e4c04(273)](() => {
            var _0x3f1563 = _0x2e4c04;
            expect([..._0x1cf3ea])['to'][_0x3f1563(279)]([]), _0x18d50e();
        });
    }), it(_0x5977d9(365), () => {
        var _0x3978f8 = _0x5977d9, _0x321985 = async['queue'](() => {
            });
        expect(() => {
            var _0x694b78 = _0x187e;
            _0x321985[_0x694b78(273)] = () => {
            };
        })['to'][_0x3978f8(284)]();
    });
});