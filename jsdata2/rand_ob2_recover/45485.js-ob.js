var async = require('../lib'), {expect} = require('chai'), assert = require(_0x1cc08f(132));
describe(_0x1cc08f(133), () => {
    var _0x17ca00 = _0x1cc08f;
    it(_0x17ca00(133), _0x4ed64e => {
        var _0x3501b0 = _0x17ca00, _0x59025f = [], _0x5b3520 = [
                40,
                40,
                20
            ], _0x2d6ddb = async['cargo']((_0x21e743, _0x8b22ad) => {
                var _0x2d737f = _0x5b27;
                setTimeout(() => {
                    var _0x42c79c = _0x5b27;
                    _0x59025f[_0x42c79c(134)]('process ' + _0x21e743[_0x42c79c(135)](' ')), _0x8b22ad('error', _0x42c79c(136));
                }, _0x5b3520[_0x2d737f(137)]());
            }, 2);
        _0x2d6ddb[_0x3501b0(134)](1, (_0x1be44a, _0x57a4a0) => {
            var _0x14f340 = _0x3501b0;
            expect(_0x1be44a)['to']['equal'](_0x14f340(138)), expect(_0x57a4a0)['to'][_0x14f340(139)](_0x14f340(136)), expect(_0x2d6ddb[_0x14f340(140)]())['to'][_0x14f340(139)](3), _0x59025f[_0x14f340(134)](_0x14f340(141) + 1);
        }), _0x2d6ddb[_0x3501b0(134)](2, (_0xd98a09, _0x7e8779) => {
            var _0x41ce8b = _0x3501b0;
            expect(_0xd98a09)['to'][_0x41ce8b(139)](_0x41ce8b(138)), expect(_0x7e8779)['to'][_0x41ce8b(139)]('arg'), expect(_0x2d6ddb[_0x41ce8b(140)]())['to']['equal'](3), _0x59025f[_0x41ce8b(134)](_0x41ce8b(141) + 2);
        }), expect(_0x2d6ddb[_0x3501b0(140)]())['to'][_0x3501b0(139)](2), setTimeout(() => {
            var _0xeee83c = _0x3501b0;
            _0x2d6ddb[_0xeee83c(134)](3, (_0x26fc1e, _0x4614cd) => {
                var _0x19cb09 = _0xeee83c;
                expect(_0x26fc1e)['to'][_0x19cb09(139)](_0x19cb09(138)), expect(_0x4614cd)['to'][_0x19cb09(139)]('arg'), expect(_0x2d6ddb['length']())['to'][_0x19cb09(139)](1), _0x59025f[_0x19cb09(134)]('callback ' + 3);
            });
        }, 15), setTimeout(() => {
            var _0x1c6264 = _0x3501b0;
            _0x2d6ddb[_0x1c6264(134)](4, (_0x497138, _0x99185d) => {
                var _0x294904 = _0x1c6264;
                expect(_0x497138)['to']['equal'](_0x294904(138)), expect(_0x99185d)['to'][_0x294904(139)]('arg'), expect(_0x2d6ddb[_0x294904(140)]())['to'][_0x294904(139)](1), _0x59025f['push'](_0x294904(141) + 4);
            }), expect(_0x2d6ddb[_0x1c6264(140)]())['to'][_0x1c6264(139)](2), _0x2d6ddb['push'](5, (_0x5594bc, _0x117abe) => {
                var _0x2ef606 = _0x1c6264;
                expect(_0x5594bc)['to'][_0x2ef606(139)](_0x2ef606(138)), expect(_0x117abe)['to'][_0x2ef606(139)](_0x2ef606(136)), expect(_0x2d6ddb['length']())['to'][_0x2ef606(139)](0), _0x59025f[_0x2ef606(134)](_0x2ef606(141) + 5);
            });
        }, 30), _0x2d6ddb['drain'](() => {
            var _0xee7538 = _0x3501b0;
            expect(_0x59025f)['to'][_0xee7538(142)]([
                _0xee7538(143),
                _0xee7538(144),
                _0xee7538(145),
                _0xee7538(146),
                _0xee7538(147),
                _0xee7538(148),
                'process 5',
                'callback 5'
            ]), expect(_0x2d6ddb[_0xee7538(140)]())['to'][_0xee7538(139)](0), _0x4ed64e();
        });
    }), it(_0x17ca00(149), _0x268be5 => {
        var _0x1396af = _0x17ca00, _0x41aefc = [], _0x2b4220 = [
                40,
                60,
                60,
                20
            ], _0x57a220 = async[_0x1396af(133)]((_0x1b39aa, _0x5ed3bc) => {
                var _0x30eddf = _0x1396af;
                setTimeout(() => {
                    var _0xee823b = _0x5b27;
                    _0x41aefc[_0xee823b(134)](_0xee823b(150) + _0x1b39aa[_0xee823b(135)](' ')), _0x5ed3bc('error', 'arg');
                }, _0x2b4220[_0x30eddf(137)]());
            }, 2);
        _0x57a220[_0x1396af(134)](1), setTimeout(() => {
            var _0x226adc = _0x1396af;
            _0x57a220[_0x226adc(134)](2);
        }, 20), setTimeout(() => {
            var _0x27f94f = _0x1396af;
            _0x57a220[_0x27f94f(134)](3), _0x57a220[_0x27f94f(134)](4), _0x57a220[_0x27f94f(134)](5);
        }, 80), _0x57a220[_0x1396af(151)](() => {
            var _0x53c573 = _0x1396af;
            expect(_0x41aefc)['to'][_0x53c573(142)]([
                _0x53c573(152),
                _0x53c573(153),
                _0x53c573(146),
                'process 5'
            ]), _0x268be5();
        });
    }), it('bulk task', _0x4dd2ca => {
        var _0x4aaa1f = _0x17ca00, _0x219564 = [], _0x4eef9c = [
                30,
                20
            ], _0x1b79a2 = async[_0x4aaa1f(133)]((_0x25f749, _0x1d9eb0) => {
                var _0x56e881 = _0x4aaa1f;
                setTimeout(() => {
                    var _0xb3f0e0 = _0x5b27;
                    _0x219564[_0xb3f0e0(134)](_0xb3f0e0(150) + _0x25f749[_0xb3f0e0(135)](' ')), _0x1d9eb0('error', _0x25f749['join'](' '));
                }, _0x4eef9c[_0x56e881(137)]());
            }, 3);
        _0x1b79a2[_0x4aaa1f(134)]([
            1,
            2,
            3,
            4
        ], (_0x49f013, _0x199e6e) => {
            var _0xde3e55 = _0x4aaa1f;
            expect(_0x49f013)['to'][_0xde3e55(139)](_0xde3e55(138)), _0x219564[_0xde3e55(134)](_0xde3e55(141) + _0x199e6e);
        }), expect(_0x1b79a2[_0x4aaa1f(140)]())['to'][_0x4aaa1f(139)](4), setTimeout(() => {
            var _0x4b6717 = _0x4aaa1f;
            expect(_0x219564)['to'][_0x4b6717(142)]([
                _0x4b6717(154),
                _0x4b6717(155),
                _0x4b6717(155),
                _0x4b6717(155),
                _0x4b6717(156),
                _0x4b6717(148)
            ]), expect(_0x1b79a2[_0x4b6717(140)]())['to'][_0x4b6717(139)](0), _0x4dd2ca();
        }, 200);
    }), it(_0x17ca00(157), _0x5f0b93 => {
        var _0x493bb3 = _0x17ca00, _0x4598c9 = async['cargo']((_0x420f65, _0x302780) => {
                _0x302780();
            }, 3), _0x207c59 = 0;
        _0x4598c9[_0x493bb3(151)](() => {
            _0x207c59++;
        });
        for (var _0x271f85 = 0; _0x271f85 < 10; _0x271f85++) {
            _0x4598c9['push'](_0x271f85);
        }
        setTimeout(() => {
            var _0x4bedf3 = _0x493bb3;
            expect(_0x207c59)['to'][_0x4bedf3(139)](1), _0x5f0b93();
        }, 50);
    }), it(_0x17ca00(158), _0x4769dd => {
        var _0x3c1964 = async['cargo']((_0x291ab0, _0x47876c) => {
            _0x47876c();
        }, 3);
        function _0x865c1e() {
            var _0x29397d = _0x5b27;
            for (var _0x35e904 = 0; _0x35e904 < 10; _0x35e904++) {
                _0x3c1964[_0x29397d(134)](_0x35e904);
            }
        }
        var _0x51a5d6 = 0;
        _0x3c1964['drain'](() => {
            var _0x96d306 = _0x5b27;
            _0x51a5d6++, _0x51a5d6 === 1 ? _0x865c1e() : (expect(_0x51a5d6)['to'][_0x96d306(139)](2), _0x4769dd());
        }), _0x865c1e();
    }), it(_0x17ca00(159), _0x4878e9 => {
        var _0x3af321 = _0x17ca00, _0x524742 = [], _0x8a1dbe = async[_0x3af321(133)]((_0x3123a8, _0x1b446a) => {
                var _0x3e2935 = _0x3af321;
                _0x524742[_0x3e2935(134)](_0x3e2935(150) + _0x3123a8), async[_0x3e2935(160)](_0x1b446a);
            }, 1);
        _0x8a1dbe[_0x3af321(161)] = 3, _0x8a1dbe[_0x3af321(162)](() => {
            var _0x18a085 = _0x3af321;
            assert(_0x8a1dbe[_0x18a085(163)]() == 3, 'cargo should be saturated now'), _0x524742[_0x18a085(134)](_0x18a085(162));
        }), _0x8a1dbe['empty'](() => {
            var _0x524767 = _0x3af321;
            assert(_0x8a1dbe[_0x524767(140)]() === 0, 'cargo should be empty now'), _0x524742[_0x524767(134)](_0x524767(164));
        }), _0x8a1dbe[_0x3af321(151)](() => {
            var _0x337c2a = _0x3af321;
            assert(_0x8a1dbe[_0x337c2a(140)]() === 0 && _0x8a1dbe[_0x337c2a(163)]() === 0, _0x337c2a(165)), _0x524742['push'](_0x337c2a(151)), expect(_0x524742)['to']['eql']([
                _0x337c2a(166),
                'process bar',
                'saturated',
                _0x337c2a(167),
                _0x337c2a(168),
                _0x337c2a(162),
                _0x337c2a(169),
                'bar cb',
                _0x337c2a(164),
                'saturated',
                _0x337c2a(170),
                'zoo cb',
                _0x337c2a(171),
                'moo cb',
                _0x337c2a(151)
            ]), _0x4878e9();
        }), _0x8a1dbe[_0x3af321(134)](_0x3af321(172), () => {
            _0x524742['push']('foo cb');
        }), _0x8a1dbe[_0x3af321(134)](_0x3af321(173), () => {
            var _0x4d9140 = _0x3af321;
            _0x524742[_0x4d9140(134)](_0x4d9140(174));
        }), _0x8a1dbe['push'](_0x3af321(175), () => {
            var _0x595798 = _0x3af321;
            _0x524742[_0x595798(134)](_0x595798(176));
        }), _0x8a1dbe[_0x3af321(134)](_0x3af321(177), () => {
            _0x524742['push']('poo cb');
        }), _0x8a1dbe[_0x3af321(134)](_0x3af321(178), () => {
            var _0x398d50 = _0x3af321;
            _0x524742['push'](_0x398d50(179));
        });
    }), it(_0x17ca00(180), _0x160041 => {
        var _0x3b9041 = _0x17ca00, _0xda8af = ![], _0x11dd3c = async[_0x3b9041(133)]((_0x51f89f, _0x469391) => {
                var _0x43e3d2 = _0x3b9041;
                !_0xda8af ? (expect(_0x11dd3c[_0x43e3d2(181)])['to'][_0x43e3d2(139)](1), assert(_0x51f89f[_0x43e3d2(140)] === 1, 'should start with payload = 1')) : (expect(_0x11dd3c[_0x43e3d2(181)])['to']['equal'](2), assert(_0x51f89f[_0x43e3d2(140)] === 2, 'next call shold have payload = 2')), _0xda8af = !![], setTimeout(_0x469391, 25);
            }, 1);
        _0x11dd3c['drain'](_0x160041), expect(_0x11dd3c[_0x3b9041(181)])['to'][_0x3b9041(139)](1), _0x11dd3c[_0x3b9041(134)]([
            1,
            2,
            3
        ]), setTimeout(() => {
            _0x11dd3c['payload'] = 2;
        }, 15);
    }), it(_0x17ca00(182), _0x4d09ac => {
        var _0x57ad21 = _0x17ca00, _0x8fb9a9 = ![];
        function _0xa135f4(_0x568d39) {
            var _0x411f0b = _0x5b27;
            return _0x568d39[_0x411f0b(182)]()[_0x411f0b(183)](_0x5ac6ed => {
                var _0x12bb12 = _0x411f0b;
                return _0x5ac6ed[_0x12bb12(184)];
            });
        }
        var _0x6524f8 = async[_0x57ad21(133)]((_0x33de94, _0x17005e) => {
            var _0x8d3d6c = _0x57ad21;
            !_0x8fb9a9 ? expect(_0x33de94)['to']['eql']([
                _0x8d3d6c(172),
                _0x8d3d6c(173)
            ]) : expect(_0x33de94)['to'][_0x8d3d6c(142)]([_0x8d3d6c(185)]), expect(_0xa135f4(_0x6524f8))['to']['eql'](_0x33de94), async['setImmediate'](() => {
                var _0x601f23 = _0x8d3d6c;
                expect(_0xa135f4(_0x6524f8))['to'][_0x601f23(142)](_0x33de94), _0x8fb9a9 = !![], _0x17005e();
            });
        }, 2);
        _0x6524f8[_0x57ad21(151)](() => {
            var _0x580694 = _0x57ad21;
            expect(_0x6524f8[_0x580694(182)]())['to'][_0x580694(142)]([]), expect(_0x6524f8[_0x580694(163)]())['to'][_0x580694(139)](0), _0x4d09ac();
        }), _0x6524f8[_0x57ad21(134)](_0x57ad21(172)), _0x6524f8['push'](_0x57ad21(173)), _0x6524f8[_0x57ad21(134)](_0x57ad21(185));
    }), it('running', _0x33f9fb => {
        var _0x1b4708 = _0x17ca00, _0x43ecd1 = async['cargo']((_0x1e5330, _0x27c067) => {
                var _0x26ee1b = _0x5b27;
                expect(_0x43ecd1[_0x26ee1b(163)]())['to']['equal'](1), async[_0x26ee1b(160)](() => {
                    var _0x2471a8 = _0x26ee1b;
                    expect(_0x43ecd1[_0x2471a8(163)]())['to'][_0x2471a8(139)](1), _0x27c067();
                });
            }, 2);
        _0x43ecd1[_0x1b4708(151)](() => {
            expect(_0x43ecd1['running']())['to']['equal'](0), _0x33f9fb();
        }), _0x43ecd1[_0x1b4708(134)]('foo'), _0x43ecd1['push']('bar'), _0x43ecd1[_0x1b4708(134)](_0x1b4708(185));
    });
});