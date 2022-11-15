var _0x19f3 = [
    '743irlDVp',
    '638523LYSzFY',
    '60385eUgscX',
    '1qqrXlW',
    'chai',
    'lodash',
    'some',
    'equal',
    'some\x20false',
    'some\x20early\x20return',
    'push',
    'eql',
    'callback',
    'error',
    'exist',
    'should\x20not\x20get\x20here',
    'some\x20no\x20callback',
    'someLimit',
    'someLimit\x20false',
    'someLimit\x20canceled',
    'setImmediate',
    'someSeries\x20canceled',
    'someSeries',
    'someLimit\x20short-circuit',
    'someSeries\x20doesn\x27t\x20cause\x20stack\x20overflow\x20(#1293)',
    'range',
    'partial',
    'someLimit\x20doesn\x27t\x20cause\x20stack\x20overflow\x20(#1293)',
    'any\x20alias',
    'any',
    'anyLimit\x20alias',
    'anySeries\x20alias',
    'anySeries',
    'function',
    '720hnFEGE',
    '685cblTqx',
    '6971STMJOW',
    '39TBtfxa',
    '336521sjIAfE',
    '1TcKELS',
    '473679FdMriX',
    '17PFJBoe'
];
var _0x3fc742 = _0x11dc;
function _0x11dc(_0x4d3ef6, _0x616dbc) {
    return _0x11dc = function (_0x19f3ce, _0x11dcf5) {
        _0x19f3ce = _0x19f3ce - 0x1a2;
        var _0x636b66 = _0x19f3[_0x19f3ce];
        return _0x636b66;
    }, _0x11dc(_0x4d3ef6, _0x616dbc);
}
(function (_0xaad17c, _0x273d60) {
    var _0x5eeffb = _0x11dc;
    while (!![]) {
        try {
            var _0x4bdfc9 = -parseInt(_0x5eeffb(0x1a2)) * parseInt(_0x5eeffb(0x1a3)) + parseInt(_0x5eeffb(0x1a4)) * parseInt(_0x5eeffb(0x1a5)) + -parseInt(_0x5eeffb(0x1a6)) * parseInt(_0x5eeffb(0x1a7)) + parseInt(_0x5eeffb(0x1a8)) + -parseInt(_0x5eeffb(0x1a9)) * parseInt(_0x5eeffb(0x1aa)) + parseInt(_0x5eeffb(0x1ab)) + parseInt(_0x5eeffb(0x1ac)) * -parseInt(_0x5eeffb(0x1ad));
            if (_0x4bdfc9 === _0x273d60)
                break;
            else
                _0xaad17c['push'](_0xaad17c['shift']());
        } catch (_0x17e9fd) {
            _0xaad17c['push'](_0xaad17c['shift']());
        }
    }
}(_0x19f3, 0x75836));
var async = require('../lib'), {expect} = require(_0x3fc742(0x1ae)), _ = require(_0x3fc742(0x1af));
describe(_0x3fc742(0x1b0), () => {
    var _0x9fec50 = _0x3fc742;
    it('some\x20true', _0xb6bdbd => {
        async['some']([
            0x3,
            0x1,
            0x2
        ], (_0x156083, _0x269cb4) => {
            setTimeout(() => {
                _0x269cb4(null, _0x156083 === 0x1);
            }, 0x0);
        }, (_0x3f8013, _0x3d7227) => {
            var _0x34626a = _0x11dc;
            expect(_0x3f8013)['to'][_0x34626a(0x1b1)](null), expect(_0x3d7227)['to'][_0x34626a(0x1b1)](!![]), _0xb6bdbd();
        });
    }), it(_0x9fec50(0x1b2), _0x48d833 => {
        var _0xede499 = _0x9fec50;
        async[_0xede499(0x1b0)]([
            0x3,
            0x1,
            0x2
        ], (_0x1ab109, _0x370abf) => {
            setTimeout(() => {
                _0x370abf(null, _0x1ab109 === 0xa);
            }, 0x0);
        }, (_0x2f0384, _0x2ded59) => {
            var _0x11bc79 = _0xede499;
            expect(_0x2f0384)['to'][_0x11bc79(0x1b1)](null), expect(_0x2ded59)['to'][_0x11bc79(0x1b1)](![]), _0x48d833();
        });
    }), it(_0x9fec50(0x1b3), _0x4281a1 => {
        var _0x1f3412 = [];
        async['some']([
            0x1,
            0x2,
            0x3
        ], (_0x106cd8, _0x1a8b64) => {
            setTimeout(() => {
                var _0x101ce5 = _0x11dc;
                _0x1f3412[_0x101ce5(0x1b4)](_0x106cd8), _0x1a8b64(null, _0x106cd8 === 0x1);
            }, _0x106cd8 * 0x5);
        }, () => {
            _0x1f3412['push']('callback');
        }), setTimeout(() => {
            var _0x33942f = _0x11dc;
            expect(_0x1f3412)['to'][_0x33942f(0x1b5)]([
                0x1,
                _0x33942f(0x1b6),
                0x2,
                0x3
            ]), _0x4281a1();
        }, 0x19);
    }), it('some\x20error', _0x220e7e => {
        var _0x519dde = _0x9fec50;
        async[_0x519dde(0x1b0)]([
            0x3,
            0x1,
            0x2
        ], (_0x47d67b, _0x1a6efb) => {
            setTimeout(() => {
                _0x1a6efb('error');
            }, 0x0);
        }, (_0xe21e8d, _0x356e50) => {
            var _0x3a04a4 = _0x519dde;
            expect(_0xe21e8d)['to'][_0x3a04a4(0x1b1)](_0x3a04a4(0x1b7)), expect(_0x356e50)['to']['not'][_0x3a04a4(0x1b8)], _0x220e7e();
        });
    }), it('some\x20canceled', _0xd3e12f => {
        var _0x9b5ce1 = _0x9fec50, _0x27e17f = [];
        async[_0x9b5ce1(0x1b0)]([
            0x3,
            0x1,
            0x2
        ], (_0x526341, _0x3a4182) => {
            var _0x1eb21b = _0x9b5ce1;
            _0x27e17f[_0x1eb21b(0x1b4)](_0x526341);
            if (_0x526341 === 0x1)
                return _0x3a4182(![]);
            _0x3a4182();
        }, () => {
            var _0x22bf4d = _0x9b5ce1;
            throw new Error(_0x22bf4d(0x1b9));
        }), setTimeout(() => {
            var _0x16e04e = _0x9b5ce1;
            expect(_0x27e17f)['to'][_0x16e04e(0x1b5)]([
                0x3,
                0x1,
                0x2
            ]), _0xd3e12f();
        }, 0x19);
    }), it(_0x9fec50(0x1ba), _0x223df7 => {
        var _0x145939 = _0x9fec50, _0x784da8 = [];
        async[_0x145939(0x1b0)]([
            0x1,
            0x2,
            0x3
        ], (_0x461af0, _0x47164c) => {
            var _0x1dc207 = _0x145939;
            _0x784da8[_0x1dc207(0x1b4)](_0x461af0), _0x47164c();
        }), setTimeout(() => {
            var _0x50a218 = _0x145939;
            expect(_0x784da8)['to'][_0x50a218(0x1b5)]([
                0x1,
                0x2,
                0x3
            ]), _0x223df7();
        }, 0xa);
    }), it('someLimit\x20true', _0x3cc75c => {
        var _0x3014dd = _0x9fec50;
        async[_0x3014dd(0x1bb)]([
            0x3,
            0x1,
            0x2
        ], 0x2, (_0x1998c9, _0x175a62) => {
            setTimeout(() => {
                _0x175a62(null, _0x1998c9 === 0x2);
            }, 0x0);
        }, (_0x5f1cdd, _0x3d5c3e) => {
            var _0x4f2676 = _0x3014dd;
            expect(_0x5f1cdd)['to']['equal'](null), expect(_0x3d5c3e)['to'][_0x4f2676(0x1b1)](!![]), _0x3cc75c();
        });
    }), it(_0x9fec50(0x1bc), _0x166757 => {
        var _0x88a13f = _0x9fec50;
        async[_0x88a13f(0x1bb)]([
            0x3,
            0x1,
            0x2
        ], 0x2, (_0x238feb, _0x32bb9e) => {
            setTimeout(() => {
                _0x32bb9e(null, _0x238feb === 0xa);
            }, 0x0);
        }, (_0x1140ac, _0x28174b) => {
            var _0x2cebb9 = _0x88a13f;
            expect(_0x1140ac)['to'][_0x2cebb9(0x1b1)](null), expect(_0x28174b)['to'][_0x2cebb9(0x1b1)](![]), _0x166757();
        });
    }), it(_0x9fec50(0x1bd), _0x72f1ec => {
        var _0xbbadcf = _0x9fec50, _0x2c966b = [];
        async[_0xbbadcf(0x1bb)]([
            0x1,
            0x1,
            0x2,
            0x2,
            0x3
        ], 0x2, (_0x141180, _0x436c3c) => {
            var _0x8d2c04 = _0xbbadcf;
            _0x2c966b['push'](_0x141180), async[_0x8d2c04(0x1be)](() => {
                if (_0x141180 === 0x2)
                    return _0x436c3c(![]);
                _0x436c3c();
            });
        }, () => {
            var _0x4ae1ca = _0xbbadcf;
            throw new Error(_0x4ae1ca(0x1b9));
        }), setTimeout(() => {
            expect(_0x2c966b)['to']['eql']([
                0x1,
                0x1,
                0x2,
                0x2
            ]), _0x72f1ec();
        }, 0x32);
    }), it(_0x9fec50(0x1bf), _0x1a029c => {
        var _0x1a7d2f = _0x9fec50, _0xa1e36d = [];
        async[_0x1a7d2f(0x1c0)]([
            0x1,
            0x2,
            0x3
        ], (_0x87ad3c, _0x4b6e22) => {
            var _0x1f55d9 = _0x1a7d2f;
            _0xa1e36d['push'](_0x87ad3c), async[_0x1f55d9(0x1be)](() => {
                if (_0x87ad3c === 0x2)
                    return _0x4b6e22(![]);
                _0x4b6e22();
            });
        }, () => {
            var _0x445caa = _0x1a7d2f;
            throw new Error(_0x445caa(0x1b9));
        }), setTimeout(() => {
            expect(_0xa1e36d)['to']['eql']([
                0x1,
                0x2
            ]), _0x1a029c();
        }, 0x32);
    }), it(_0x9fec50(0x1c1), _0x1d4b9a => {
        var _0x2592af = 0x0;
        async['someLimit']([
            0x3,
            0x1,
            0x2
        ], 0x1, (_0x107463, _0xf58bc1) => {
            _0x2592af++, _0xf58bc1(null, _0x107463 === 0x1);
        }, (_0x5dedbe, _0x3db522) => {
            var _0x398389 = _0x11dc;
            expect(_0x5dedbe)['to'][_0x398389(0x1b1)](null), expect(_0x3db522)['to'][_0x398389(0x1b1)](!![]), expect(_0x2592af)['to'][_0x398389(0x1b1)](0x2), _0x1d4b9a();
        });
    }), it(_0x9fec50(0x1c2), _0x1fdb7c => {
        var _0x3cf962 = _0x9fec50, _0x149668 = _[_0x3cf962(0x1c3)](0x2710);
        let _0x5a45d5 = 0x0;
        async[_0x3cf962(0x1c0)](_0x149668, (_0x5df95a, _0x5aa292) => {
            var _0x379fed = _0x3cf962;
            _0x5a45d5 += 0x1, async[_0x379fed(0x1be)](_[_0x379fed(0x1c4)](_0x5aa292, null, !![]));
        }, _0x3afd78 => {
            var _0x1f1dc5 = _0x3cf962;
            expect(_0x3afd78)['to'][_0x1f1dc5(0x1b1)](null), expect(_0x5a45d5)['to'][_0x1f1dc5(0x1b1)](0x1), _0x1fdb7c();
        });
    }), it(_0x9fec50(0x1c5), _0x1cbfb1 => {
        var _0x190cfd = _0x9fec50, _0x2421b3 = _['range'](0x2710);
        let _0x51ec76 = 0x0;
        async[_0x190cfd(0x1bb)](_0x2421b3, 0x64, (_0x3b7f60, _0x592315) => {
            var _0x36157e = _0x190cfd;
            _0x51ec76 += 0x1, async[_0x36157e(0x1be)](_[_0x36157e(0x1c4)](_0x592315, null, !![]));
        }, _0x44e32c => {
            var _0x178e7d = _0x190cfd;
            expect(_0x44e32c)['to'][_0x178e7d(0x1b1)](null), expect(_0x51ec76)['to'][_0x178e7d(0x1b1)](0x64), _0x1cbfb1();
        });
    }), it(_0x9fec50(0x1c6), () => {
        var _0x2f80c9 = _0x9fec50;
        expect(async[_0x2f80c9(0x1c7)])['to'][_0x2f80c9(0x1b1)](async[_0x2f80c9(0x1b0)]);
    }), it(_0x9fec50(0x1c8), () => {
        var _0x4487df = _0x9fec50;
        expect(async['anyLimit'])['to'][_0x4487df(0x1b1)](async['someLimit']);
    }), it(_0x9fec50(0x1c9), () => {
        var _0x2cdcb3 = _0x9fec50;
        expect(async[_0x2cdcb3(0x1ca)])['to']['be']['a'](_0x2cdcb3(0x1cb)), expect(async[_0x2cdcb3(0x1ca)])['to'][_0x2cdcb3(0x1b1)](async[_0x2cdcb3(0x1c0)]);
    });
});
