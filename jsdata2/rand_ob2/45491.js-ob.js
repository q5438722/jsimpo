var _0x2abe = [
    'equal',
    'everyLimit\x20false',
    'everyLimit\x20short-circuit',
    'false',
    'push',
    'callback',
    'eql',
    'error',
    'not',
    'exist',
    'canceled',
    'should\x20not\x20get\x20here',
    'everySeries\x20doesn\x27t\x20cause\x20stack\x20overflow\x20(#1293)',
    'range',
    'setImmediate',
    'partial',
    'everySeries\x20canceled',
    'everySeries',
    'everyLimit\x20doesn\x27t\x20cause\x20stack\x20overflow\x20(#1293)',
    'everyLimit\x20canceled',
    'final\x20callback\x20-\x20should\x20not\x20get\x20here',
    'all\x20alias',
    'all',
    'allLimit\x20alias',
    'allSeries\x20alias',
    'allSeries',
    '267231QufZDp',
    '1UnuxSZ',
    '572136LgCUcv',
    '862084DvmrrF',
    '30327TGXjGx',
    '59752eBKBTM',
    '9357jepcgm',
    '46KsHHrM',
    '1622563iGKJep',
    'chai',
    'lodash',
    'every',
    'everyLimit\x20true',
    'everyLimit'
];
var _0x2c3326 = _0x1cc7;
(function (_0x18bf1f, _0x2b5b99) {
    var _0x12e873 = _0x1cc7;
    while (!![]) {
        try {
            var _0xb7b582 = parseInt(_0x12e873(0x111)) + parseInt(_0x12e873(0x112)) * parseInt(_0x12e873(0x113)) + parseInt(_0x12e873(0x114)) + -parseInt(_0x12e873(0x115)) + parseInt(_0x12e873(0x116)) + -parseInt(_0x12e873(0x117)) * -parseInt(_0x12e873(0x118)) + -parseInt(_0x12e873(0x119));
            if (_0xb7b582 === _0x2b5b99)
                break;
            else
                _0x18bf1f['push'](_0x18bf1f['shift']());
        } catch (_0x3ca193) {
            _0x18bf1f['push'](_0x18bf1f['shift']());
        }
    }
}(_0x2abe, 0x8386f));
var async = require('../lib'), {expect} = require(_0x2c3326(0x11a)), _ = require(_0x2c3326(0x11b));
function _0x1cc7(_0x3bede9, _0x11a7c2) {
    return _0x1cc7 = function (_0x2abece, _0x1cc7f1) {
        _0x2abece = _0x2abece - 0x111;
        var _0x1d4840 = _0x2abe[_0x2abece];
        return _0x1d4840;
    }, _0x1cc7(_0x3bede9, _0x11a7c2);
}
describe(_0x2c3326(0x11c), () => {
    var _0x3dd31a = _0x2c3326;
    it(_0x3dd31a(0x11d), _0x5cabb4 => {
        var _0x3cb4cb = _0x3dd31a;
        async[_0x3cb4cb(0x11e)]([
            0x3,
            0x1,
            0x2
        ], 0x1, (_0x2e5564, _0x45faf2) => {
            setTimeout(() => {
                _0x45faf2(null, _0x2e5564 >= 0x1);
            }, 0x0);
        }, (_0x517a66, _0x4383af) => {
            var _0x3d6906 = _0x3cb4cb;
            expect(_0x517a66)['to'][_0x3d6906(0x11f)](null), expect(_0x4383af)['to'][_0x3d6906(0x11f)](!![]), _0x5cabb4();
        });
    }), it(_0x3dd31a(0x120), _0x24e270 => {
        var _0x33af4f = _0x3dd31a;
        async[_0x33af4f(0x11e)]([
            0x3,
            0x1,
            0x2
        ], 0x2, (_0x240542, _0x449f17) => {
            setTimeout(() => {
                _0x449f17(null, _0x240542 === 0x2);
            }, 0x0);
        }, (_0x3e9d37, _0x372636) => {
            var _0x4bdb2b = _0x33af4f;
            expect(_0x3e9d37)['to'][_0x4bdb2b(0x11f)](null), expect(_0x372636)['to'][_0x4bdb2b(0x11f)](![]), _0x24e270();
        });
    }), it(_0x3dd31a(0x121), _0x3a3b06 => {
        var _0x3c3bae = _0x3dd31a, _0x1b849c = 0x0;
        async[_0x3c3bae(0x11e)]([
            0x3,
            0x1,
            0x2
        ], 0x1, (_0x35418a, _0x9807e0) => {
            _0x1b849c++, _0x9807e0(null, _0x35418a === 0x1);
        }, (_0x1e9e3e, _0x2440a6) => {
            var _0x119ac6 = _0x3c3bae;
            expect(_0x1e9e3e)['to']['equal'](null), expect(_0x2440a6)['to'][_0x119ac6(0x11f)](![]), expect(_0x1b849c)['to'][_0x119ac6(0x11f)](0x1), _0x3a3b06();
        });
    }), it('true', _0x207272 => {
        var _0x47cb3a = _0x3dd31a;
        async[_0x47cb3a(0x11c)]([
            0x1,
            0x2,
            0x3
        ], (_0x30e422, _0x2e065b) => {
            setTimeout(() => {
                _0x2e065b(null, !![]);
            }, 0x0);
        }, (_0x230215, _0x43afab) => {
            var _0x1200ba = _0x47cb3a;
            expect(_0x230215)['to'][_0x1200ba(0x11f)](null), expect(_0x43afab)['to'][_0x1200ba(0x11f)](!![]), _0x207272();
        });
    }), it(_0x3dd31a(0x122), _0x44f2a9 => {
        var _0x30829d = _0x3dd31a;
        async[_0x30829d(0x11c)]([
            0x1,
            0x2,
            0x3
        ], (_0x11d33b, _0x22df5f) => {
            setTimeout(() => {
                _0x22df5f(null, _0x11d33b % 0x2);
            }, 0x0);
        }, (_0x105a83, _0x2352bd) => {
            var _0x55ee00 = _0x30829d;
            expect(_0x105a83)['to'][_0x55ee00(0x11f)](null), expect(_0x2352bd)['to'][_0x55ee00(0x11f)](![]), _0x44f2a9();
        });
    }), it('early\x20return', _0x17e335 => {
        var _0x104386 = [];
        async['every']([
            0x1,
            0x2,
            0x3
        ], (_0x3187f3, _0x3a8b18) => {
            setTimeout(() => {
                var _0x5e27ba = _0x1cc7;
                _0x104386[_0x5e27ba(0x123)](_0x3187f3), _0x3a8b18(null, _0x3187f3 === 0x1);
            }, _0x3187f3 * 0x5);
        }, () => {
            var _0x367ed6 = _0x1cc7;
            _0x104386[_0x367ed6(0x123)](_0x367ed6(0x124));
        }), setTimeout(() => {
            var _0x57670f = _0x1cc7;
            expect(_0x104386)['to'][_0x57670f(0x125)]([
                0x1,
                0x2,
                _0x57670f(0x124),
                0x3
            ]), _0x17e335();
        }, 0x19);
    }), it(_0x3dd31a(0x126), _0x5af248 => {
        var _0x33d24d = _0x3dd31a;
        async[_0x33d24d(0x11c)]([
            0x1,
            0x2,
            0x3
        ], (_0x565730, _0x46482c) => {
            setTimeout(() => {
                var _0x2f5a29 = _0x1cc7;
                _0x46482c(_0x2f5a29(0x126));
            }, 0x0);
        }, (_0xbfb53a, _0x566821) => {
            var _0x21c53d = _0x33d24d;
            expect(_0xbfb53a)['to'][_0x21c53d(0x11f)](_0x21c53d(0x126)), expect(_0x566821)['to'][_0x21c53d(0x127)][_0x21c53d(0x128)], _0x5af248();
        });
    }), it(_0x3dd31a(0x129), _0x20543e => {
        var _0xa189b4 = _0x3dd31a, _0xa97af3 = [];
        async[_0xa189b4(0x11c)]([
            0x1,
            0x2,
            0x3
        ], (_0x1b370f, _0x7a03c6) => {
            var _0x4dfa87 = _0xa189b4;
            _0xa97af3[_0x4dfa87(0x123)](_0x1b370f);
            if (_0x1b370f === 0x2)
                return _0x7a03c6(![], !![]);
            _0x7a03c6(null, !![]);
        }, () => {
            var _0x3fbf0c = _0xa189b4;
            throw new Error(_0x3fbf0c(0x12a));
        }), setTimeout(() => {
            var _0x2e9a80 = _0xa189b4;
            expect(_0xa97af3)['to'][_0x2e9a80(0x125)]([
                0x1,
                0x2,
                0x3
            ]), _0x20543e();
        }, 0x19);
    }), it(_0x3dd31a(0x12b), _0x21d2a6 => {
        var _0x1741e7 = _0x3dd31a, _0x4e50a3 = _[_0x1741e7(0x12c)](0x2710);
        let _0x322a7b = 0x0;
        async['everySeries'](_0x4e50a3, (_0x29149f, _0x5e74b2) => {
            var _0x55f991 = _0x1741e7;
            _0x322a7b += 0x1, async[_0x55f991(0x12d)](_[_0x55f991(0x12e)](_0x5e74b2, null, ![]));
        }, _0x56f07f => {
            var _0x5bf0a2 = _0x1741e7;
            expect(_0x56f07f)['to'][_0x5bf0a2(0x11f)](null), expect(_0x322a7b)['to'][_0x5bf0a2(0x11f)](0x1), _0x21d2a6();
        });
    }), it(_0x3dd31a(0x12f), _0x21eee2 => {
        var _0x46f65b = _0x3dd31a, _0x500f79 = [];
        async[_0x46f65b(0x130)]([
            0x1,
            0x2,
            0x3
        ], (_0x397d9e, _0x2c2d4f) => {
            var _0x2504fa = _0x46f65b;
            _0x500f79[_0x2504fa(0x123)](_0x397d9e), async[_0x2504fa(0x12d)](() => {
                if (_0x397d9e === 0x2)
                    return _0x2c2d4f(![], !![]);
                _0x2c2d4f(null, !![]);
            });
        }, () => {
            throw new Error('should\x20not\x20get\x20here');
        }), setTimeout(() => {
            var _0xbb49b6 = _0x46f65b;
            expect(_0x500f79)['to'][_0xbb49b6(0x125)]([
                0x1,
                0x2
            ]), _0x21eee2();
        }, 0x32);
    }), it(_0x3dd31a(0x131), _0x37cd5c => {
        var _0x50b56f = _0x3dd31a, _0x39d002 = _[_0x50b56f(0x12c)](0x2710);
        let _0x3a585a = 0x0;
        async['everyLimit'](_0x39d002, 0x64, (_0x1bd921, _0x5cc89a) => {
            var _0x1be473 = _0x50b56f;
            _0x3a585a += 0x1, async[_0x1be473(0x12d)](_[_0x1be473(0x12e)](_0x5cc89a, null, ![]));
        }, _0x23faaf => {
            var _0x41057f = _0x50b56f;
            expect(_0x23faaf)['to']['equal'](null), expect(_0x3a585a)['to'][_0x41057f(0x11f)](0x64), _0x37cd5c();
        });
    }), it(_0x3dd31a(0x132), _0x56462e => {
        var _0x2f71d0 = [];
        async['everyLimit']([
            0x1,
            0x1,
            0x2,
            0x2,
            0x3
        ], 0x2, (_0x372719, _0x2b06ed) => {
            _0x2f71d0['push'](_0x372719), async['setImmediate'](() => {
                if (_0x372719 === 0x2)
                    return _0x2b06ed(![], !![]);
                _0x2b06ed(null, !![]);
            });
        }, () => {
            var _0x2eb387 = _0x1cc7;
            throw new Error(_0x2eb387(0x133));
        }), setTimeout(() => {
            var _0x506a13 = _0x1cc7;
            expect(_0x2f71d0)['to'][_0x506a13(0x125)]([
                0x1,
                0x1,
                0x2,
                0x2
            ]), _0x56462e();
        }, 0x32);
    }), it(_0x3dd31a(0x134), () => {
        var _0x169b02 = _0x3dd31a;
        expect(async[_0x169b02(0x135)])['to'][_0x169b02(0x11f)](async[_0x169b02(0x11c)]);
    }), it(_0x3dd31a(0x136), () => {
        var _0x4f8b1a = _0x3dd31a;
        expect(async['allLimit'])['to'][_0x4f8b1a(0x11f)](async[_0x4f8b1a(0x11e)]);
    }), it(_0x3dd31a(0x137), () => {
        var _0x17dc91 = _0x3dd31a;
        expect(async['allSeries'])['to']['be']['a']('function'), expect(async[_0x17dc91(0x138)])['to'][_0x17dc91(0x11f)](async['everySeries']);
    });
});
