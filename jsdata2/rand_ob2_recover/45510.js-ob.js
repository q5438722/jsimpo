var async = require('../lib'), {expect} = require(_0x3fc742(430)), _ = require(_0x3fc742(431));
describe(_0x3fc742(432), () => {
    var _0x9fec50 = _0x3fc742;
    it('some true', _0xb6bdbd => {
        async['some']([
            3,
            1,
            2
        ], (_0x156083, _0x269cb4) => {
            setTimeout(() => {
                _0x269cb4(null, _0x156083 === 1);
            }, 0);
        }, (_0x3f8013, _0x3d7227) => {
            var _0x34626a = _0x11dc;
            expect(_0x3f8013)['to'][_0x34626a(433)](null), expect(_0x3d7227)['to'][_0x34626a(433)](!![]), _0xb6bdbd();
        });
    }), it(_0x9fec50(434), _0x48d833 => {
        var _0xede499 = _0x9fec50;
        async[_0xede499(432)]([
            3,
            1,
            2
        ], (_0x1ab109, _0x370abf) => {
            setTimeout(() => {
                _0x370abf(null, _0x1ab109 === 10);
            }, 0);
        }, (_0x2f0384, _0x2ded59) => {
            var _0x11bc79 = _0xede499;
            expect(_0x2f0384)['to'][_0x11bc79(433)](null), expect(_0x2ded59)['to'][_0x11bc79(433)](![]), _0x48d833();
        });
    }), it(_0x9fec50(435), _0x4281a1 => {
        var _0x1f3412 = [];
        async['some']([
            1,
            2,
            3
        ], (_0x106cd8, _0x1a8b64) => {
            setTimeout(() => {
                var _0x101ce5 = _0x11dc;
                _0x1f3412[_0x101ce5(436)](_0x106cd8), _0x1a8b64(null, _0x106cd8 === 1);
            }, _0x106cd8 * 5);
        }, () => {
            _0x1f3412['push']('callback');
        }), setTimeout(() => {
            var _0x33942f = _0x11dc;
            expect(_0x1f3412)['to'][_0x33942f(437)]([
                1,
                _0x33942f(438),
                2,
                3
            ]), _0x4281a1();
        }, 25);
    }), it('some error', _0x220e7e => {
        var _0x519dde = _0x9fec50;
        async[_0x519dde(432)]([
            3,
            1,
            2
        ], (_0x47d67b, _0x1a6efb) => {
            setTimeout(() => {
                _0x1a6efb('error');
            }, 0);
        }, (_0xe21e8d, _0x356e50) => {
            var _0x3a04a4 = _0x519dde;
            expect(_0xe21e8d)['to'][_0x3a04a4(433)](_0x3a04a4(439)), expect(_0x356e50)['to']['not'][_0x3a04a4(440)], _0x220e7e();
        });
    }), it('some canceled', _0xd3e12f => {
        var _0x9b5ce1 = _0x9fec50, _0x27e17f = [];
        async[_0x9b5ce1(432)]([
            3,
            1,
            2
        ], (_0x526341, _0x3a4182) => {
            var _0x1eb21b = _0x9b5ce1;
            _0x27e17f[_0x1eb21b(436)](_0x526341);
            if (_0x526341 === 1)
                return _0x3a4182(![]);
            _0x3a4182();
        }, () => {
            var _0x22bf4d = _0x9b5ce1;
            throw new Error(_0x22bf4d(441));
        }), setTimeout(() => {
            var _0x16e04e = _0x9b5ce1;
            expect(_0x27e17f)['to'][_0x16e04e(437)]([
                3,
                1,
                2
            ]), _0xd3e12f();
        }, 25);
    }), it(_0x9fec50(442), _0x223df7 => {
        var _0x145939 = _0x9fec50, _0x784da8 = [];
        async[_0x145939(432)]([
            1,
            2,
            3
        ], (_0x461af0, _0x47164c) => {
            var _0x1dc207 = _0x145939;
            _0x784da8[_0x1dc207(436)](_0x461af0), _0x47164c();
        }), setTimeout(() => {
            var _0x50a218 = _0x145939;
            expect(_0x784da8)['to'][_0x50a218(437)]([
                1,
                2,
                3
            ]), _0x223df7();
        }, 10);
    }), it('someLimit true', _0x3cc75c => {
        var _0x3014dd = _0x9fec50;
        async[_0x3014dd(443)]([
            3,
            1,
            2
        ], 2, (_0x1998c9, _0x175a62) => {
            setTimeout(() => {
                _0x175a62(null, _0x1998c9 === 2);
            }, 0);
        }, (_0x5f1cdd, _0x3d5c3e) => {
            var _0x4f2676 = _0x3014dd;
            expect(_0x5f1cdd)['to']['equal'](null), expect(_0x3d5c3e)['to'][_0x4f2676(433)](!![]), _0x3cc75c();
        });
    }), it(_0x9fec50(444), _0x166757 => {
        var _0x88a13f = _0x9fec50;
        async[_0x88a13f(443)]([
            3,
            1,
            2
        ], 2, (_0x238feb, _0x32bb9e) => {
            setTimeout(() => {
                _0x32bb9e(null, _0x238feb === 10);
            }, 0);
        }, (_0x1140ac, _0x28174b) => {
            var _0x2cebb9 = _0x88a13f;
            expect(_0x1140ac)['to'][_0x2cebb9(433)](null), expect(_0x28174b)['to'][_0x2cebb9(433)](![]), _0x166757();
        });
    }), it(_0x9fec50(445), _0x72f1ec => {
        var _0xbbadcf = _0x9fec50, _0x2c966b = [];
        async[_0xbbadcf(443)]([
            1,
            1,
            2,
            2,
            3
        ], 2, (_0x141180, _0x436c3c) => {
            var _0x8d2c04 = _0xbbadcf;
            _0x2c966b['push'](_0x141180), async[_0x8d2c04(446)](() => {
                if (_0x141180 === 2)
                    return _0x436c3c(![]);
                _0x436c3c();
            });
        }, () => {
            var _0x4ae1ca = _0xbbadcf;
            throw new Error(_0x4ae1ca(441));
        }), setTimeout(() => {
            expect(_0x2c966b)['to']['eql']([
                1,
                1,
                2,
                2
            ]), _0x72f1ec();
        }, 50);
    }), it(_0x9fec50(447), _0x1a029c => {
        var _0x1a7d2f = _0x9fec50, _0xa1e36d = [];
        async[_0x1a7d2f(448)]([
            1,
            2,
            3
        ], (_0x87ad3c, _0x4b6e22) => {
            var _0x1f55d9 = _0x1a7d2f;
            _0xa1e36d['push'](_0x87ad3c), async[_0x1f55d9(446)](() => {
                if (_0x87ad3c === 2)
                    return _0x4b6e22(![]);
                _0x4b6e22();
            });
        }, () => {
            var _0x445caa = _0x1a7d2f;
            throw new Error(_0x445caa(441));
        }), setTimeout(() => {
            expect(_0xa1e36d)['to']['eql']([
                1,
                2
            ]), _0x1a029c();
        }, 50);
    }), it(_0x9fec50(449), _0x1d4b9a => {
        var _0x2592af = 0;
        async['someLimit']([
            3,
            1,
            2
        ], 1, (_0x107463, _0xf58bc1) => {
            _0x2592af++, _0xf58bc1(null, _0x107463 === 1);
        }, (_0x5dedbe, _0x3db522) => {
            var _0x398389 = _0x11dc;
            expect(_0x5dedbe)['to'][_0x398389(433)](null), expect(_0x3db522)['to'][_0x398389(433)](!![]), expect(_0x2592af)['to'][_0x398389(433)](2), _0x1d4b9a();
        });
    }), it(_0x9fec50(450), _0x1fdb7c => {
        var _0x3cf962 = _0x9fec50, _0x149668 = _[_0x3cf962(451)](10000);
        let _0x5a45d5 = 0;
        async[_0x3cf962(448)](_0x149668, (_0x5df95a, _0x5aa292) => {
            var _0x379fed = _0x3cf962;
            _0x5a45d5 += 1, async[_0x379fed(446)](_[_0x379fed(452)](_0x5aa292, null, !![]));
        }, _0x3afd78 => {
            var _0x1f1dc5 = _0x3cf962;
            expect(_0x3afd78)['to'][_0x1f1dc5(433)](null), expect(_0x5a45d5)['to'][_0x1f1dc5(433)](1), _0x1fdb7c();
        });
    }), it(_0x9fec50(453), _0x1cbfb1 => {
        var _0x190cfd = _0x9fec50, _0x2421b3 = _['range'](10000);
        let _0x51ec76 = 0;
        async[_0x190cfd(443)](_0x2421b3, 100, (_0x3b7f60, _0x592315) => {
            var _0x36157e = _0x190cfd;
            _0x51ec76 += 1, async[_0x36157e(446)](_[_0x36157e(452)](_0x592315, null, !![]));
        }, _0x44e32c => {
            var _0x178e7d = _0x190cfd;
            expect(_0x44e32c)['to'][_0x178e7d(433)](null), expect(_0x51ec76)['to'][_0x178e7d(433)](100), _0x1cbfb1();
        });
    }), it(_0x9fec50(454), () => {
        var _0x2f80c9 = _0x9fec50;
        expect(async[_0x2f80c9(455)])['to'][_0x2f80c9(433)](async[_0x2f80c9(432)]);
    }), it(_0x9fec50(456), () => {
        var _0x4487df = _0x9fec50;
        expect(async['anyLimit'])['to'][_0x4487df(433)](async['someLimit']);
    }), it(_0x9fec50(457), () => {
        var _0x2cdcb3 = _0x9fec50;
        expect(async[_0x2cdcb3(458)])['to']['be']['a'](_0x2cdcb3(459)), expect(async[_0x2cdcb3(458)])['to'][_0x2cdcb3(433)](async[_0x2cdcb3(448)]);
    });
});