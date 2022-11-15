function _0xa616(_0x5bb558, _0x33e0a4) {
    return _0xa616 = function (_0x1a8a60, _0xa616d3) {
        _0x1a8a60 = _0x1a8a60 - 320;
        var _0x44b95d = _0x1a8a[_0x1a8a60];
        return _0x44b95d;
    }, _0xa616(_0x5bb558, _0x33e0a4);
}
var async = require('../../lib');
const {expect} = require(_0x278c32(332)), assert = require(_0x278c32(333));
module['exports'] = function () {
    var _0x14dd12 = _0x278c32;
    async function _0x2e6bba(_0x9887a9) {
        var _0x576ae2 = _0xa616, _0x2f30ea = await Promise[_0x576ae2(334)](_0x9887a9);
        return _0x2f30ea;
    }
    this[_0x14dd12(335)](3);
    const _0x16aa54 = [
            1,
            2,
            3
        ], _0x17d1d5 = {
            'a': 1,
            'b': 2,
            'c': 3
        };
    it(_0x14dd12(336), _0x185502 => {
        var _0x5a3b5c = _0x14dd12;
        async[_0x5a3b5c(337)](_0x2e6bba)(42, (_0xfb549c, _0x54b1fd) => {
            assert(_0x54b1fd === 42), _0x185502(_0xfb549c);
        });
    }), it(_0x14dd12(338), _0x127c4d => {
        var _0x2b6399 = _0x14dd12;
        async[_0x2b6399(337)](async () => {
            var _0x5592a4 = _0x2b6399;
            throw new Error(_0x5592a4(339));
        })(_0x9f3318 => {
            var _0x1ffc3f = _0x2b6399;
            assert(_0x9f3318[_0x1ffc3f(340)] = _0x1ffc3f(339)), _0x127c4d();
        });
    }), it('should handle async functions in each', _0x363a12 => {
        async['each'](_0x16aa54, _0x2e6bba, _0x363a12);
    }), it(_0x14dd12(341), _0x437815 => {
        var _0x5032d7 = _0x14dd12;
        async[_0x5032d7(342)](_0x16aa54, 2, _0x2e6bba, _0x437815);
    }), it(_0x14dd12(343), _0x2a83ab => {
        var _0x3b89c3 = _0x14dd12;
        async[_0x3b89c3(344)](_0x16aa54, _0x2e6bba, _0x2a83ab);
    }), it(_0x14dd12(345), _0x145563 => {
        var _0x3253b6 = _0x14dd12;
        async[_0x3253b6(346)](_0x16aa54, _0x2e6bba, _0x145563);
    }), it(_0x14dd12(347), _0x5f0d13 => {
        var _0x701967 = _0x14dd12;
        async[_0x701967(348)](_0x16aa54, 2, _0x2e6bba, _0x5f0d13);
    }), it(_0x14dd12(349), _0x45c658 => {
        var _0x22325c = _0x14dd12;
        async[_0x22325c(350)](_0x16aa54, _0x2e6bba, _0x45c658);
    }), it('should handle async functions in map', _0x1bbcca => {
        var _0x527181 = _0x14dd12;
        async[_0x527181(351)](_0x16aa54, _0x2e6bba, (_0xdf393, _0x4e436c) => {
            var _0x533612 = _0x527181;
            expect(_0x4e436c)['to'][_0x533612(352)](_0x16aa54), _0x1bbcca(_0xdf393);
        });
    }), it(_0x14dd12(353), _0x17014f => {
        var _0x398448 = _0x14dd12;
        async[_0x398448(354)](_0x16aa54, 2, _0x2e6bba, (_0x5460dd, _0x5b6eae) => {
            expect(_0x5b6eae)['to']['eql'](_0x16aa54), _0x17014f(_0x5460dd);
        });
    }), it(_0x14dd12(355), _0x2b3ff3 => {
        var _0x1e22fa = _0x14dd12;
        async[_0x1e22fa(356)](_0x16aa54, _0x2e6bba, (_0x4a9c23, _0x5b9249) => {
            var _0x223e3b = _0x1e22fa;
            expect(_0x5b9249)['to'][_0x223e3b(352)](_0x16aa54), _0x2b3ff3(_0x4a9c23);
        });
    }), it(_0x14dd12(357), _0xf4bdac => {
        var _0x43dd45 = _0x14dd12;
        async[_0x43dd45(358)](_0x17d1d5, _0x2e6bba, (_0x242a0c, _0x21ea7e) => {
            var _0x5064d8 = _0x43dd45;
            expect(_0x21ea7e)['to'][_0x5064d8(352)](_0x17d1d5), _0xf4bdac(_0x242a0c);
        });
    }), it(_0x14dd12(359), _0x23a5f8 => {
        var _0x43bf10 = _0x14dd12;
        async[_0x43bf10(360)](_0x17d1d5, 2, _0x2e6bba, (_0x218850, _0x2cf319) => {
            var _0x349900 = _0x43bf10;
            expect(_0x2cf319)['to'][_0x349900(352)](_0x17d1d5), _0x23a5f8(_0x218850);
        });
    }), it(_0x14dd12(361), _0x1d2e05 => {
        async['mapValuesSeries'](_0x17d1d5, _0x2e6bba, (_0x25f7a0, _0x5f0533) => {
            var _0x1445e2 = _0xa616;
            expect(_0x5f0533)['to'][_0x1445e2(352)](_0x17d1d5), _0x1d2e05(_0x25f7a0);
        });
    }), it(_0x14dd12(362), _0x345204 => {
        var _0x4142f4 = _0x14dd12;
        async[_0x4142f4(363)](_0x16aa54, _0x2e6bba, (_0x2512bc, _0x250a27) => {
            expect(_0x250a27)['to']['eql'](_0x16aa54), _0x345204(_0x2512bc);
        });
    }), it(_0x14dd12(364), _0x4d1020 => {
        var _0x575462 = _0x14dd12;
        async[_0x575462(365)](_0x16aa54, 2, _0x2e6bba, (_0x1dc93d, _0x5a8658) => {
            var _0x2e1f3c = _0x575462;
            expect(_0x5a8658)['to'][_0x2e1f3c(352)](_0x16aa54), _0x4d1020(_0x1dc93d);
        });
    }), it('should handle async functions in filterSeries', _0x5d60b6 => {
        var _0x4eb412 = _0x14dd12;
        async[_0x4eb412(366)](_0x16aa54, _0x2e6bba, (_0x6903f, _0x5f328a) => {
            var _0x4caa5b = _0x4eb412;
            expect(_0x5f328a)['to'][_0x4caa5b(352)](_0x16aa54), _0x5d60b6(_0x6903f);
        });
    }), it('should handle async functions in reject', _0x263c27 => {
        var _0x15c941 = _0x14dd12;
        async[_0x15c941(367)](_0x16aa54, _0x2e6bba, (_0x32d645, _0x2175e5) => {
            var _0x3c2450 = _0x15c941;
            expect(_0x2175e5)['to'][_0x3c2450(352)]([]), _0x263c27(_0x32d645);
        });
    }), it(_0x14dd12(368), _0x5a5387 => {
        var _0x31d690 = _0x14dd12;
        async[_0x31d690(369)](_0x16aa54, 2, _0x2e6bba, (_0x4f5d70, _0x52201b) => {
            expect(_0x52201b)['to']['eql']([]), _0x5a5387(_0x4f5d70);
        });
    }), it(_0x14dd12(370), _0x3ede0e => {
        var _0x5d9228 = _0x14dd12;
        async[_0x5d9228(371)](_0x16aa54, _0x2e6bba, (_0x1074ab, _0x1b0166) => {
            var _0x3e4cc1 = _0x5d9228;
            expect(_0x1b0166)['to'][_0x3e4cc1(352)]([]), _0x3ede0e(_0x1074ab);
        });
    }), it(_0x14dd12(372), _0x10c1c7 => {
        var _0x5d1a31 = _0x14dd12;
        async[_0x5d1a31(373)](_0x16aa54, _0x2e6bba, (_0x23d82f, _0x357b52) => {
            var _0xcc7155 = _0x5d1a31;
            expect(_0x357b52)['to'][_0xcc7155(352)](!![]), _0x10c1c7(_0x23d82f);
        });
    }), it(_0x14dd12(374), _0x2d1ff3 => {
        var _0x24ba84 = _0x14dd12;
        async[_0x24ba84(375)](_0x16aa54, 2, _0x2e6bba, (_0x3db7c5, _0x2f10ba) => {
            var _0x1e0e34 = _0x24ba84;
            expect(_0x2f10ba)['to'][_0x1e0e34(352)](!![]), _0x2d1ff3(_0x3db7c5);
        });
    }), it(_0x14dd12(376), _0x18177a => {
        var _0x28ffe5 = _0x14dd12;
        async[_0x28ffe5(377)](_0x16aa54, _0x2e6bba, (_0x20fae0, _0x3654c0) => {
            var _0x9a0e04 = _0x28ffe5;
            expect(_0x3654c0)['to'][_0x9a0e04(352)](!![]), _0x18177a(_0x20fae0);
        });
    }), it(_0x14dd12(378), _0x201027 => {
        var _0x5a0f8c = _0x14dd12;
        async[_0x5a0f8c(379)](_0x16aa54, _0x2e6bba, (_0x21b437, _0x4bdd03) => {
            expect(_0x4bdd03)['to']['eql'](!![]), _0x201027(_0x21b437);
        });
    }), it(_0x14dd12(380), _0x3d76d5 => {
        var _0xa89aa3 = _0x14dd12;
        async[_0xa89aa3(381)](_0x16aa54, 2, _0x2e6bba, (_0x5202b8, _0x4708b2) => {
            var _0x513c85 = _0xa89aa3;
            expect(_0x4708b2)['to'][_0x513c85(352)](!![]), _0x3d76d5(_0x5202b8);
        });
    }), it('should handle async functions in someSeries', _0x36c41a => {
        async['someSeries'](_0x16aa54, _0x2e6bba, (_0x221df2, _0x395f39) => {
            var _0x350383 = _0xa616;
            expect(_0x395f39)['to'][_0x350383(352)](!![]), _0x36c41a(_0x221df2);
        });
    }), it('should handle async functions in groupBy', _0xcc8871 => {
        var _0x1b958d = _0x14dd12;
        async[_0x1b958d(382)](_0x16aa54, _0x2e6bba, (_0x15e0b7, _0x3afd2a) => {
            var _0x178e33 = _0x1b958d;
            expect(_0x3afd2a)['to'][_0x178e33(352)]({
                1: [1],
                2: [2],
                3: [3]
            }), _0xcc8871(_0x15e0b7);
        });
    }), it(_0x14dd12(383), _0x10f50f => {
        var _0x1644ed = _0x14dd12;
        async[_0x1644ed(384)](_0x16aa54, 2, _0x2e6bba, (_0x5651d3, _0x273749) => {
            var _0x293fcc = _0x1644ed;
            expect(_0x273749)['to'][_0x293fcc(352)]({
                1: [1],
                2: [2],
                3: [3]
            }), _0x10f50f(_0x5651d3);
        });
    }), it(_0x14dd12(385), _0x1cf8c5 => {
        var _0x320fe5 = _0x14dd12;
        async[_0x320fe5(386)](_0x16aa54, _0x2e6bba, (_0xd05deb, _0x295e12) => {
            var _0x36d663 = _0x320fe5;
            expect(_0x295e12)['to'][_0x36d663(352)]({
                1: [1],
                2: [2],
                3: [3]
            }), _0x1cf8c5(_0xd05deb);
        });
    }), it('should handle async functions in concat', _0x4d94b5 => {
        var _0x4a035c = _0x14dd12;
        async[_0x4a035c(387)](_0x16aa54, _0x2e6bba, (_0x331333, _0x24ef14) => {
            var _0x2003cc = _0x4a035c;
            expect(_0x24ef14)['to'][_0x2003cc(352)](_0x16aa54), _0x4d94b5(_0x331333);
        });
    }), it(_0x14dd12(388), _0x13c402 => {
        var _0x4ebd2c = _0x14dd12;
        async[_0x4ebd2c(389)](_0x16aa54, 2, _0x2e6bba, (_0x5ae7de, _0x3695b2) => {
            var _0xe14929 = _0x4ebd2c;
            expect(_0x5ae7de)['to'][_0xe14929(352)](null), expect(_0x3695b2)['to'][_0xe14929(352)](_0x16aa54), _0x13c402(_0x5ae7de);
        });
    }), it(_0x14dd12(390), _0x5924ed => {
        var _0x3f4979 = _0x14dd12;
        async[_0x3f4979(391)](_0x16aa54, _0x2e6bba, (_0x247eb8, _0x5e72e6) => {
            var _0x16dddd = _0x3f4979;
            expect(_0x5e72e6)['to'][_0x16dddd(352)](_0x16aa54), _0x5924ed(_0x247eb8);
        });
    }), it(_0x14dd12(392), _0x40b7c5 => {
        var _0x53b5ce = _0x14dd12;
        async[_0x53b5ce(393)](_0x16aa54, 0, async (_0x33f192, _0x340966) => {
            var _0x12c91e = await Promise['resolve'](_0x33f192 + _0x340966);
            return _0x12c91e;
        }, (_0x48c3bf, _0x36d7a0) => {
            expect(_0x36d7a0)['to']['eql'](6), _0x40b7c5(_0x48c3bf);
        });
    }), it(_0x14dd12(394), _0x2e426d => {
        var _0x46c704 = _0x14dd12;
        async[_0x46c704(395)](_0x16aa54, 0, async (_0x373740, _0x2fc5d0) => {
            var _0x510762 = _0x46c704, _0x1aa3c8 = await Promise[_0x510762(334)](_0x373740 + _0x2fc5d0);
            return _0x1aa3c8;
        }, (_0x1ac30e, _0x3b86f1) => {
            var _0x253ac0 = _0x46c704;
            expect(_0x3b86f1)['to'][_0x253ac0(352)](6), _0x2e426d(_0x1ac30e);
        });
    }), it(_0x14dd12(396), _0x3c679f => {
        var _0x53e6a2 = _0x14dd12;
        async[_0x53e6a2(397)]([
            3,
            2,
            1
        ], _0x2e6bba, (_0x657bb, _0x413e99) => {
            expect(_0x413e99)['to']['eql'](_0x16aa54), _0x3c679f(_0x657bb);
        });
    }), it(_0x14dd12(398), _0x1d3ceb => {
        var _0x47279b = _0x14dd12;
        async[_0x47279b(399)](_0x17d1d5, async (_0x528a2a, _0x1d9b66, _0x279280) => {
            var _0xf6a5e9 = _0x47279b;
            _0x528a2a[_0x279280] = await Promise[_0xf6a5e9(334)](_0x1d9b66);
        }, (_0x227cfe, _0xe5cb5d) => {
            expect(_0xe5cb5d)['to']['eql'](_0x17d1d5), _0x1d3ceb(_0x227cfe);
        });
    }), it(_0x14dd12(400), _0x49cf9a => {
        async['applyEach']([
            _0x2e6bba,
            _0x2e6bba
        ], _0x16aa54)((_0x3c9cf8, _0x4acb03) => {
            expect(_0x4acb03)['to']['eql']([
                _0x16aa54,
                _0x16aa54
            ]), _0x49cf9a(_0x3c9cf8);
        });
    }), it(_0x14dd12(401), _0x5bbe7e => {
        async['applyEachSeries']([
            _0x2e6bba,
            _0x2e6bba
        ], _0x16aa54)((_0x2530ab, _0x1dc686) => {
            var _0x346c7b = _0xa616;
            expect(_0x1dc686)['to'][_0x346c7b(352)]([
                _0x16aa54,
                _0x16aa54
            ]), _0x5bbe7e(_0x2530ab);
        });
    }), it(_0x14dd12(402), _0x3f4172 => {
        var _0x341ab9 = _0x14dd12;
        async[_0x341ab9(403)]({
            async 'a'() {
                var _0x101a6a = _0x341ab9;
                return await Promise[_0x101a6a(334)](1);
            },
            async 'b'() {
                var _0x127e2c = _0x341ab9;
                return await Promise[_0x127e2c(334)](2);
            },
            'c': [
                'a',
                'b',
                async function (_0x469f8f) {
                    var _0x3aae1c = _0x341ab9;
                    return await Promise[_0x3aae1c(334)](_0x469f8f['a'] + _0x469f8f['b']);
                }
            ]
        }, (_0x60e15e, _0x2459b8) => {
            var _0x3696c5 = _0x341ab9;
            expect(_0x2459b8)['to'][_0x3696c5(352)]({
                'a': 1,
                'b': 2,
                'c': 3
            }), _0x3f4172(_0x60e15e);
        });
    }), it(_0x14dd12(404), _0x183b24 => {
        var _0x2af7ce = _0x14dd12;
        async[_0x2af7ce(405)]({
            'z': async function () {
                return 0;
            },
            'a': async function () {
                return 1;
            },
            'b': function (_0x55cab3, _0x648cff) {
                _0x648cff(null, _0x55cab3 + 1);
            },
            async 'c'(_0x4c8002, _0x3134be) {
                var _0x5dcc36 = _0x2af7ce;
                return await Promise[_0x5dcc36(334)](_0x4c8002 + _0x3134be);
            },
            'd': async _0x7f3a88 => {
                return await Promise['resolve'](_0x7f3a88 + 1);
            }
        }, (_0x19a0e8, _0x2f0264) => {
            var _0x72223f = _0x2af7ce;
            expect(_0x2f0264)['to'][_0x72223f(352)]({
                'z': 0,
                'a': 1,
                'b': 2,
                'c': 3,
                'd': 4
            }), _0x183b24(_0x19a0e8);
        });
    }), it(_0x14dd12(406), _0x408b3a => {
        var _0xb7dad2 = _0x14dd12;
        async[_0xb7dad2(405)]({
            async 'a'() {
                return await Promise['resolve'](1);
            },
            async 'b'(_0xee8378) {
                var _0x27c47e = _0xb7dad2;
                return await Promise[_0x27c47e(334)](_0xee8378 + 1);
            },
            async 'c'(_0x1a7f31, _0x3dc1ef) {
                var _0xf1baa5 = _0xb7dad2;
                return await Promise[_0xf1baa5(334)](_0x1a7f31 + _0x3dc1ef);
            },
            async 'd'(_0x3bb5fc) {
                var _0x5e340c = _0xb7dad2;
                return await Promise[_0x5e340c(334)](_0x3bb5fc + 1);
            }
        }, (_0x2acacd, _0x55e976) => {
            var _0x21d426 = _0xb7dad2;
            expect(_0x55e976)['to'][_0x21d426(352)]({
                'a': 1,
                'b': 2,
                'c': 3,
                'd': 4
            }), _0x408b3a(_0x2acacd);
        });
    }), it(_0x14dd12(407), _0x3f7aa7 => {
        var _0x4c97ee = _0x14dd12, _0x1bd82e = [], _0x39d38e = async['cargo'](async _0x11c35f => {
                var _0x478b82 = _0xa616;
                _0x1bd82e[_0x478b82(408)](await Promise[_0x478b82(334)](_0x11c35f));
            }, 2);
        _0x39d38e[_0x4c97ee(409)](() => {
            var _0xab7d29 = _0x4c97ee;
            expect(_0x1bd82e)['to'][_0xab7d29(352)]([
                [
                    1,
                    2
                ],
                [3]
            ]), _0x3f7aa7();
        }), _0x39d38e[_0x4c97ee(408)](1), _0x39d38e[_0x4c97ee(408)](2), _0x39d38e[_0x4c97ee(408)](3);
    }), it(_0x14dd12(410), _0x3eefa1 => {
        var _0x4d3a9a = _0x14dd12, _0x5baa33 = [], _0x55be0c = async['queue'](async _0x157575 => {
                var _0xe85714 = _0xa616;
                _0x5baa33[_0xe85714(408)](await Promise[_0xe85714(334)](_0x157575));
            }, 2);
        _0x55be0c[_0x4d3a9a(409)](() => {
            expect(_0x5baa33)['to']['eql']([
                1,
                2,
                3
            ]), _0x3eefa1();
        }), _0x55be0c[_0x4d3a9a(408)](1), _0x55be0c[_0x4d3a9a(408)](2), _0x55be0c['push'](3);
    }), it('should handle async functions in priorityQueue', _0x16bf03 => {
        var _0x45e511 = _0x14dd12, _0xfd5fdd = [], _0x76362f = async[_0x45e511(411)](async _0x1d9f27 => {
                var _0xf1badb = _0x45e511;
                _0xfd5fdd[_0xf1badb(408)](await Promise['resolve'](_0x1d9f27));
            }, 2);
        _0x76362f['drain'](() => {
            var _0x11df28 = _0x45e511;
            expect(_0xfd5fdd)['to'][_0x11df28(352)]([
                1,
                2,
                3
            ]), _0x16bf03();
        }), _0x76362f[_0x45e511(408)](1), _0x76362f[_0x45e511(408)](2), _0x76362f[_0x45e511(408)](3);
    }), it(_0x14dd12(412), _0x2dbe5f => {
        var _0x14e4cc = _0x14dd12;
        async[_0x14e4cc(413)](async _0x269841 => _0x269841 + 1, async _0x4299d3 => _0x4299d3 + 1, async _0xfb4781 => _0xfb4781 + 1)(0, (_0x439ac0, _0x715f7e) => {
            var _0x3fe3bf = _0x14e4cc;
            expect(_0x715f7e)['to'][_0x3fe3bf(414)](3), _0x2dbe5f(_0x439ac0);
        });
    }), it(_0x14dd12(415), _0x1a9488 => {
        var _0x18030c = _0x14dd12;
        async[_0x18030c(416)](async _0x5c6c7d => _0x5c6c7d + 1, async _0x3c9fac => _0x3c9fac + 1, async _0x67e0e6 => _0x67e0e6 + 1)(0, (_0x27b078, _0x52dc0f) => {
            expect(_0x52dc0f)['to']['equal'](3), _0x1a9488(_0x27b078);
        });
    }), it(_0x14dd12(417), _0x31262b => {
        var _0x8929ac = _0x14dd12, _0x372980 = 0;
        async[_0x8929ac(418)](async () => _0x372980 < 3, async () => {
            return _0x372980 += 1, _0x372980;
        }, _0x31262b);
    }), it(_0x14dd12(419), _0x70e724 => {
        var _0x14c340 = _0x14dd12, _0x53b229 = 0;
        async[_0x14c340(420)](async () => {
            return _0x53b229 += 1, _0x53b229;
        }, async _0x36c0f5 => _0x36c0f5 < 3, _0x70e724);
    }), it(_0x14dd12(421), _0x48616f => {
        var _0x35b155 = _0x14dd12, _0x334ab4 = 0;
        async[_0x35b155(422)](async () => _0x334ab4 > 3, async () => {
            return _0x334ab4 += 1, _0x334ab4;
        }, _0x48616f);
    }), it(_0x14dd12(423), _0x7da1d6 => {
        var _0x5b894a = _0x14dd12, _0xc3c249 = 0;
        async[_0x5b894a(424)](async () => {
            return _0xc3c249 += 1, _0xc3c249;
        }, async _0x28eedb => _0x28eedb > 3, _0x7da1d6);
    }), it(_0x14dd12(425), _0x4e93d5 => {
        var _0x337d48 = 0;
        async['forever'](async () => {
            _0x337d48 += 1;
            if (_0x337d48 > 10)
                throw new Error('too big');
        }, _0x1a612e => {
            var _0x416b74 = _0xa616;
            expect(_0x1a612e[_0x416b74(340)])['to'][_0x416b74(414)]('too big'), _0x4e93d5();
        });
    }), it(_0x14dd12(426), _0x121a54 => {
        var _0x2e787d = _0x14dd12;
        async[_0x2e787d(427)]([
            async () => 1,
            async () => 2,
            async () => 3
        ], (_0x1693ff, _0x38add8) => {
            var _0x2960a8 = _0x2e787d;
            expect(_0x38add8)['to'][_0x2960a8(352)]([
                1,
                2,
                3
            ]), _0x121a54(_0x1693ff);
        });
    }), it(_0x14dd12(428), _0x11eece => {
        var _0xb6d868 = _0x14dd12;
        async[_0xb6d868(427)]({
            'a': async () => 1,
            'b': async () => 2,
            'c': async () => 3
        }, (_0x3b20d8, _0x4b4e95) => {
            var _0x4bf524 = _0xb6d868;
            expect(_0x4b4e95)['to'][_0x4bf524(352)]({
                'a': 1,
                'b': 2,
                'c': 3
            }), _0x11eece(_0x3b20d8);
        });
    }), it(_0x14dd12(429), _0x1e8174 => {
        var _0x3a6e33 = _0x14dd12;
        async[_0x3a6e33(430)]([
            async () => 1,
            async () => 2,
            async () => 3
        ], 2, (_0x3d5260, _0x4cfcb9) => {
            var _0x1e0e74 = _0x3a6e33;
            expect(_0x4cfcb9)['to'][_0x1e0e74(352)]([
                1,
                2,
                3
            ]), _0x1e8174(_0x3d5260);
        });
    }), it(_0x14dd12(431), _0x209cfb => {
        async['parallelLimit']({
            'a': async () => 1,
            'b': async () => 2,
            'c': async () => 3
        }, 2, (_0x51d68d, _0x27dee0) => {
            var _0x14daf5 = _0xa616;
            expect(_0x27dee0)['to'][_0x14daf5(352)]({
                'a': 1,
                'b': 2,
                'c': 3
            }), _0x209cfb(_0x51d68d);
        });
    }), it(_0x14dd12(432), _0x199998 => {
        var _0x4911a6 = _0x14dd12;
        async[_0x4911a6(433)]([
            async () => 1,
            async () => 2,
            async () => 3
        ], (_0x3107fa, _0x472dd4) => {
            expect(_0x472dd4)['to']['eql']([
                1,
                2,
                3
            ]), _0x199998(_0x3107fa);
        });
    }), it('should handle async functions in series (object)', _0x146d0e => {
        var _0x5ed382 = _0x14dd12;
        async[_0x5ed382(433)]({
            'a': async () => 1,
            'b': async () => 2,
            'c': async () => 3
        }, (_0x392983, _0x2c4fbb) => {
            var _0x4264e3 = _0x5ed382;
            expect(_0x2c4fbb)['to'][_0x4264e3(352)]({
                'a': 1,
                'b': 2,
                'c': 3
            }), _0x146d0e(_0x392983);
        });
    }), it(_0x14dd12(434), _0x1af425 => {
        var _0x486187 = _0x14dd12;
        async[_0x486187(435)]([
            async () => 1,
            async () => 2,
            async () => 3
        ], (_0xeb3cea, _0x5983c0) => {
            var _0x37aafe = _0x486187;
            expect(_0x5983c0)['to'][_0x37aafe(352)](1), _0x1af425(_0xeb3cea);
        });
    }), it('should handle async functions in retry', _0x44ea51 => {
        var _0x2f9533 = _0x14dd12, _0x2b60a4 = 0;
        async[_0x2f9533(436)](4, async () => {
            var _0x48802d = _0x2f9533;
            _0x2b60a4 += 1;
            if (_0x2b60a4 < 3)
                throw new Error(_0x48802d(437));
            return _0x2b60a4;
        }, (_0x1e9197, _0x2beb5f) => {
            var _0xd40d32 = _0x2f9533;
            expect(_0x2beb5f)['to'][_0xd40d32(352)](3), _0x44ea51(_0x1e9197);
        });
    }), it(_0x14dd12(438), _0x291c5a => {
        var _0x4abcde = _0x14dd12, _0x33a39c = 0;
        async[_0x4abcde(439)](4, async () => {
            var _0x554ec0 = _0x4abcde;
            _0x33a39c += 1;
            if (_0x33a39c < 3)
                throw new Error(_0x554ec0(437));
            return _0x33a39c;
        })((_0x47b720, _0x420f4d) => {
            expect(_0x420f4d)['to']['eql'](3), _0x291c5a(_0x47b720);
        });
    }), it('should handle async functions in times', _0xe5866b => {
        var _0xd9dda7 = 0;
        async['times'](4, async () => {
            return _0xd9dda7 += 1, _0xd9dda7;
        }, (_0x1a9746, _0x4e7114) => {
            expect(_0x4e7114)['to']['eql']([
                1,
                2,
                3,
                4
            ]), _0xe5866b(_0x1a9746);
        });
    }), it('should handle async functions in timesLimit', _0x54519c => {
        var _0x461fc2 = 0;
        async['timesLimit'](4, 2, async () => {
            return _0x461fc2 += 1, _0x461fc2;
        }, (_0x4b6aed, _0xcb95b8) => {
            var _0x3d10ec = _0xa616;
            expect(_0xcb95b8)['to'][_0x3d10ec(352)]([
                1,
                2,
                3,
                4
            ]), _0x54519c(_0x4b6aed);
        });
    }), it('should handle async functions in timesSeries', _0x2135b1 => {
        var _0x5d8f6d = _0x14dd12, _0x2ac2f9 = 0;
        async[_0x5d8f6d(440)](4, async () => {
            return _0x2ac2f9 += 1, _0x2ac2f9;
        }, (_0x1b01c8, _0x229a65) => {
            var _0x2ad6d5 = _0x5d8f6d;
            expect(_0x229a65)['to'][_0x2ad6d5(352)]([
                1,
                2,
                3,
                4
            ]), _0x2135b1(_0x1b01c8);
        });
    }), it(_0x14dd12(441), _0x576c8d => {
        var _0x357e39 = _0x14dd12;
        async[_0x357e39(442)]([
            async () => 1,
            async _0x4c05e5 => _0x4c05e5 + 1,
            async _0x443e0a => [
                _0x443e0a,
                _0x443e0a + 1
            ],
            async ([_0x1cbb24, _0x298df5]) => _0x1cbb24 + _0x298df5
        ], (_0x4a3f44, _0x2651a6) => {
            var _0x242ea0 = _0x357e39;
            expect(_0x2651a6)['to'][_0x242ea0(352)](5), _0x576c8d(_0x4a3f44);
        });
    }), it(_0x14dd12(443), _0x12c7e7 => {
        var _0x589c68 = _0x14dd12;
        async[_0x589c68(444)]([
            async () => {
                var _0x88868d = _0x589c68;
                throw new Error(_0x88868d(445));
            },
            async () => {
                var _0x511e61 = _0x589c68;
                throw new Error(_0x511e61(446));
            },
            async () => 5,
            async () => {
                var _0x1e94db = _0x589c68;
                throw new Error(_0x1e94db(447));
            }
        ], (_0x20adb5, _0x33cdf7) => {
            var _0xba1d19 = _0x589c68;
            expect(_0x33cdf7)['to'][_0xba1d19(352)](5), _0x12c7e7();
        });
    }), it(_0x14dd12(448), _0x5b0ac9 => {
        var _0x6e4eed = _0x14dd12;
        async[_0x6e4eed(449)](async _0x2bfac6 => _0x2bfac6, 'foo'), setTimeout(_0x5b0ac9);
    }), it(_0x14dd12(450), _0x3f55e2 => {
        var _0x5945fb = _0x14dd12;
        async['log'](async _0x3374cf => _0x3374cf, _0x5945fb(451)), setTimeout(_0x3f55e2);
    }), it('should handle async functions in ensureAsync', () => {
        var _0x119092 = _0x14dd12, _0x4dc704 = async[_0x119092(452)](_0x2e6bba);
        assert(_0x4dc704 === _0x2e6bba);
    }), it(_0x14dd12(453), _0x4f359b => {
        var _0x254444 = _0x14dd12, _0x424484 = async[_0x254444(454)](_0x2e6bba);
        _0x424484(1, () => {
            _0x424484(1, _0x4f359b);
        });
    }), it(_0x14dd12(455), _0x53725c => {
        var _0x71932c = _0x14dd12, _0x298a70 = async[_0x71932c(456)](_0x2e6bba);
        _0x298a70(1, (_0x574076, _0x29fb95) => {
            expect(_0x29fb95)['to']['eql']({ 'value': 1 }), _0x53725c(_0x574076);
        });
    }), it('should handle async functions in reflect (error case)', _0x700303 => {
        var _0x1e1a45 = _0x14dd12, _0x118c25, _0x13d0bf = async[_0x1e1a45(456)](async () => {
                var _0xd2b9a9 = _0x1e1a45;
                _0x118c25 = new Error(_0xd2b9a9(451));
                throw _0x118c25;
            });
        _0x13d0bf(1, (_0x3a5aaf, _0x452b25) => {
            var _0x18d46a = _0x1e1a45;
            expect(_0x452b25)['to'][_0x18d46a(352)]({
                'error': _0x118c25,
                'value': undefined
            }), _0x700303(_0x3a5aaf);
        });
    }), it(_0x14dd12(457), _0x18c49b => {
        var _0xdf9f69 = _0x14dd12, _0x2d655e = async[_0xdf9f69(458)](_0x2e6bba, 50);
        _0x2d655e(1, (_0x31beb7, _0x4607c4) => {
            var _0x12b118 = _0xdf9f69;
            expect(_0x4607c4)['to'][_0x12b118(352)](1), _0x18c49b(_0x31beb7);
        });
    }), it('should handle async functions in timeout (error case)', _0x2d3472 => {
        var _0x5a7e03 = _0x14dd12, _0x5464ff = async[_0x5a7e03(458)](async _0x38106e => {
                return await new Promise(_0x2d1862 => setTimeout(_0x2d1862, 100)), _0x38106e;
            }, 20);
        _0x5464ff(1, _0x296c72 => {
            var _0x285bc9 = _0x5a7e03;
            expect(_0x296c72[_0x285bc9(340)])['to'][_0x285bc9(459)](/timed out/), _0x2d3472();
        });
    });
};