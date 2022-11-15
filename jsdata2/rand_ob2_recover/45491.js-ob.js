var async = require('../lib'), {expect} = require(_0x2c3326(282)), _ = require(_0x2c3326(283));
function _0x1cc7(_0x3bede9, _0x11a7c2) {
    return _0x1cc7 = function (_0x2abece, _0x1cc7f1) {
        _0x2abece = _0x2abece - 273;
        var _0x1d4840 = _0x2abe[_0x2abece];
        return _0x1d4840;
    }, _0x1cc7(_0x3bede9, _0x11a7c2);
}
describe(_0x2c3326(284), () => {
    var _0x3dd31a = _0x2c3326;
    it(_0x3dd31a(285), _0x5cabb4 => {
        var _0x3cb4cb = _0x3dd31a;
        async[_0x3cb4cb(286)]([
            3,
            1,
            2
        ], 1, (_0x2e5564, _0x45faf2) => {
            setTimeout(() => {
                _0x45faf2(null, _0x2e5564 >= 1);
            }, 0);
        }, (_0x517a66, _0x4383af) => {
            var _0x3d6906 = _0x3cb4cb;
            expect(_0x517a66)['to'][_0x3d6906(287)](null), expect(_0x4383af)['to'][_0x3d6906(287)](!![]), _0x5cabb4();
        });
    }), it(_0x3dd31a(288), _0x24e270 => {
        var _0x33af4f = _0x3dd31a;
        async[_0x33af4f(286)]([
            3,
            1,
            2
        ], 2, (_0x240542, _0x449f17) => {
            setTimeout(() => {
                _0x449f17(null, _0x240542 === 2);
            }, 0);
        }, (_0x3e9d37, _0x372636) => {
            var _0x4bdb2b = _0x33af4f;
            expect(_0x3e9d37)['to'][_0x4bdb2b(287)](null), expect(_0x372636)['to'][_0x4bdb2b(287)](![]), _0x24e270();
        });
    }), it(_0x3dd31a(289), _0x3a3b06 => {
        var _0x3c3bae = _0x3dd31a, _0x1b849c = 0;
        async[_0x3c3bae(286)]([
            3,
            1,
            2
        ], 1, (_0x35418a, _0x9807e0) => {
            _0x1b849c++, _0x9807e0(null, _0x35418a === 1);
        }, (_0x1e9e3e, _0x2440a6) => {
            var _0x119ac6 = _0x3c3bae;
            expect(_0x1e9e3e)['to']['equal'](null), expect(_0x2440a6)['to'][_0x119ac6(287)](![]), expect(_0x1b849c)['to'][_0x119ac6(287)](1), _0x3a3b06();
        });
    }), it('true', _0x207272 => {
        var _0x47cb3a = _0x3dd31a;
        async[_0x47cb3a(284)]([
            1,
            2,
            3
        ], (_0x30e422, _0x2e065b) => {
            setTimeout(() => {
                _0x2e065b(null, !![]);
            }, 0);
        }, (_0x230215, _0x43afab) => {
            var _0x1200ba = _0x47cb3a;
            expect(_0x230215)['to'][_0x1200ba(287)](null), expect(_0x43afab)['to'][_0x1200ba(287)](!![]), _0x207272();
        });
    }), it(_0x3dd31a(290), _0x44f2a9 => {
        var _0x30829d = _0x3dd31a;
        async[_0x30829d(284)]([
            1,
            2,
            3
        ], (_0x11d33b, _0x22df5f) => {
            setTimeout(() => {
                _0x22df5f(null, _0x11d33b % 2);
            }, 0);
        }, (_0x105a83, _0x2352bd) => {
            var _0x55ee00 = _0x30829d;
            expect(_0x105a83)['to'][_0x55ee00(287)](null), expect(_0x2352bd)['to'][_0x55ee00(287)](![]), _0x44f2a9();
        });
    }), it('early return', _0x17e335 => {
        var _0x104386 = [];
        async['every']([
            1,
            2,
            3
        ], (_0x3187f3, _0x3a8b18) => {
            setTimeout(() => {
                var _0x5e27ba = _0x1cc7;
                _0x104386[_0x5e27ba(291)](_0x3187f3), _0x3a8b18(null, _0x3187f3 === 1);
            }, _0x3187f3 * 5);
        }, () => {
            var _0x367ed6 = _0x1cc7;
            _0x104386[_0x367ed6(291)](_0x367ed6(292));
        }), setTimeout(() => {
            var _0x57670f = _0x1cc7;
            expect(_0x104386)['to'][_0x57670f(293)]([
                1,
                2,
                _0x57670f(292),
                3
            ]), _0x17e335();
        }, 25);
    }), it(_0x3dd31a(294), _0x5af248 => {
        var _0x33d24d = _0x3dd31a;
        async[_0x33d24d(284)]([
            1,
            2,
            3
        ], (_0x565730, _0x46482c) => {
            setTimeout(() => {
                var _0x2f5a29 = _0x1cc7;
                _0x46482c(_0x2f5a29(294));
            }, 0);
        }, (_0xbfb53a, _0x566821) => {
            var _0x21c53d = _0x33d24d;
            expect(_0xbfb53a)['to'][_0x21c53d(287)](_0x21c53d(294)), expect(_0x566821)['to'][_0x21c53d(295)][_0x21c53d(296)], _0x5af248();
        });
    }), it(_0x3dd31a(297), _0x20543e => {
        var _0xa189b4 = _0x3dd31a, _0xa97af3 = [];
        async[_0xa189b4(284)]([
            1,
            2,
            3
        ], (_0x1b370f, _0x7a03c6) => {
            var _0x4dfa87 = _0xa189b4;
            _0xa97af3[_0x4dfa87(291)](_0x1b370f);
            if (_0x1b370f === 2)
                return _0x7a03c6(![], !![]);
            _0x7a03c6(null, !![]);
        }, () => {
            var _0x3fbf0c = _0xa189b4;
            throw new Error(_0x3fbf0c(298));
        }), setTimeout(() => {
            var _0x2e9a80 = _0xa189b4;
            expect(_0xa97af3)['to'][_0x2e9a80(293)]([
                1,
                2,
                3
            ]), _0x20543e();
        }, 25);
    }), it(_0x3dd31a(299), _0x21d2a6 => {
        var _0x1741e7 = _0x3dd31a, _0x4e50a3 = _[_0x1741e7(300)](10000);
        let _0x322a7b = 0;
        async['everySeries'](_0x4e50a3, (_0x29149f, _0x5e74b2) => {
            var _0x55f991 = _0x1741e7;
            _0x322a7b += 1, async[_0x55f991(301)](_[_0x55f991(302)](_0x5e74b2, null, ![]));
        }, _0x56f07f => {
            var _0x5bf0a2 = _0x1741e7;
            expect(_0x56f07f)['to'][_0x5bf0a2(287)](null), expect(_0x322a7b)['to'][_0x5bf0a2(287)](1), _0x21d2a6();
        });
    }), it(_0x3dd31a(303), _0x21eee2 => {
        var _0x46f65b = _0x3dd31a, _0x500f79 = [];
        async[_0x46f65b(304)]([
            1,
            2,
            3
        ], (_0x397d9e, _0x2c2d4f) => {
            var _0x2504fa = _0x46f65b;
            _0x500f79[_0x2504fa(291)](_0x397d9e), async[_0x2504fa(301)](() => {
                if (_0x397d9e === 2)
                    return _0x2c2d4f(![], !![]);
                _0x2c2d4f(null, !![]);
            });
        }, () => {
            throw new Error('should not get here');
        }), setTimeout(() => {
            var _0xbb49b6 = _0x46f65b;
            expect(_0x500f79)['to'][_0xbb49b6(293)]([
                1,
                2
            ]), _0x21eee2();
        }, 50);
    }), it(_0x3dd31a(305), _0x37cd5c => {
        var _0x50b56f = _0x3dd31a, _0x39d002 = _[_0x50b56f(300)](10000);
        let _0x3a585a = 0;
        async['everyLimit'](_0x39d002, 100, (_0x1bd921, _0x5cc89a) => {
            var _0x1be473 = _0x50b56f;
            _0x3a585a += 1, async[_0x1be473(301)](_[_0x1be473(302)](_0x5cc89a, null, ![]));
        }, _0x23faaf => {
            var _0x41057f = _0x50b56f;
            expect(_0x23faaf)['to']['equal'](null), expect(_0x3a585a)['to'][_0x41057f(287)](100), _0x37cd5c();
        });
    }), it(_0x3dd31a(306), _0x56462e => {
        var _0x2f71d0 = [];
        async['everyLimit']([
            1,
            1,
            2,
            2,
            3
        ], 2, (_0x372719, _0x2b06ed) => {
            _0x2f71d0['push'](_0x372719), async['setImmediate'](() => {
                if (_0x372719 === 2)
                    return _0x2b06ed(![], !![]);
                _0x2b06ed(null, !![]);
            });
        }, () => {
            var _0x2eb387 = _0x1cc7;
            throw new Error(_0x2eb387(307));
        }), setTimeout(() => {
            var _0x506a13 = _0x1cc7;
            expect(_0x2f71d0)['to'][_0x506a13(293)]([
                1,
                1,
                2,
                2
            ]), _0x56462e();
        }, 50);
    }), it(_0x3dd31a(308), () => {
        var _0x169b02 = _0x3dd31a;
        expect(async[_0x169b02(309)])['to'][_0x169b02(287)](async[_0x169b02(284)]);
    }), it(_0x3dd31a(310), () => {
        var _0x4f8b1a = _0x3dd31a;
        expect(async['allLimit'])['to'][_0x4f8b1a(287)](async[_0x4f8b1a(286)]);
    }), it(_0x3dd31a(311), () => {
        var _0x17dc91 = _0x3dd31a;
        expect(async['allSeries'])['to']['be']['a']('function'), expect(async[_0x17dc91(312)])['to'][_0x17dc91(287)](async['everySeries']);
    });
});