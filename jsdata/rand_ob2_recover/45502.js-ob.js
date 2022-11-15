var async = require(_0x34e82b(386));
const {expect} = require(_0x34e82b(387)), assert = require('assert');
module['exports'] = function () {
    var _0x2e1861 = _0x34e82b;
    async function _0x7a23d(_0x17b4e1) {
        var _0x50b09b = await Promise['resolve'](_0x17b4e1);
        return _0x50b09b;
    }
    this[_0x2e1861(388)](3);
    const _0x181386 = [
            1,
            2,
            3
        ], _0x198c25 = {
            'a': 1,
            'b': 2,
            'c': 3
        };
    it(_0x2e1861(389), _0x128666 => {
        var _0x4ad1b8 = _0x2e1861;
        async[_0x4ad1b8(390)](_0x7a23d)(42, (_0x42af0f, _0x2b8591) => {
            assert(_0x2b8591 === 42), _0x128666(_0x42af0f);
        });
    }), it(_0x2e1861(391), _0x454de5 => {
        var _0x11ac3e = _0x2e1861;
        async[_0x11ac3e(390)](async () => {
            var _0x53c61e = _0x11ac3e;
            throw new Error(_0x53c61e(392));
        })(_0x5ad0a4 => {
            var _0x3c53b4 = _0x11ac3e;
            assert(_0x5ad0a4['message'] = _0x3c53b4(392)), _0x454de5();
        });
    }), it(_0x2e1861(393), _0x3cc277 => {
        async['each'](_0x181386, _0x7a23d, _0x3cc277);
    }), it(_0x2e1861(394), _0x562fe9 => {
        async['eachLimit'](_0x181386, 2, _0x7a23d, _0x562fe9);
    }), it(_0x2e1861(395), _0x4d677e => {
        var _0x230d9d = _0x2e1861;
        async[_0x230d9d(396)](_0x181386, _0x7a23d, _0x4d677e);
    }), it(_0x2e1861(397), _0x5091b4 => {
        var _0x25f23a = _0x2e1861;
        async[_0x25f23a(398)](_0x181386, _0x7a23d, _0x5091b4);
    }), it(_0x2e1861(399), _0x3b515f => {
        var _0x9def9d = _0x2e1861;
        async[_0x9def9d(400)](_0x181386, 2, _0x7a23d, _0x3b515f);
    }), it(_0x2e1861(401), _0xb49cf9 => {
        async['eachOfSeries'](_0x181386, _0x7a23d, _0xb49cf9);
    }), it(_0x2e1861(402), _0x5bbbf9 => {
        async['map'](_0x181386, _0x7a23d, (_0x4db70c, _0x3f04c8) => {
            var _0x5845e4 = _0x2155;
            expect(_0x3f04c8)['to'][_0x5845e4(403)](_0x181386), _0x5bbbf9(_0x4db70c);
        });
    }), it(_0x2e1861(404), _0x3e3db3 => {
        var _0x275073 = _0x2e1861;
        async[_0x275073(405)](_0x181386, 2, _0x7a23d, (_0x50db18, _0x3fd816) => {
            var _0x271cc6 = _0x275073;
            expect(_0x3fd816)['to'][_0x271cc6(403)](_0x181386), _0x3e3db3(_0x50db18);
        });
    }), it('should handle async functions in mapSeries', _0x1898a4 => {
        var _0xe1a33f = _0x2e1861;
        async[_0xe1a33f(406)](_0x181386, _0x7a23d, (_0x21e4e9, _0x1fa16b) => {
            var _0x755cdf = _0xe1a33f;
            expect(_0x1fa16b)['to'][_0x755cdf(403)](_0x181386), _0x1898a4(_0x21e4e9);
        });
    }), it(_0x2e1861(407), _0x4c1ae9 => {
        async['mapValues'](_0x198c25, _0x7a23d, (_0x27690c, _0x14c6f6) => {
            var _0x513d98 = _0x2155;
            expect(_0x14c6f6)['to'][_0x513d98(403)](_0x198c25), _0x4c1ae9(_0x27690c);
        });
    }), it(_0x2e1861(408), _0x1417ed => {
        var _0x3b854b = _0x2e1861;
        async[_0x3b854b(409)](_0x198c25, 2, _0x7a23d, (_0x4ee093, _0x3b390f) => {
            var _0x3e57df = _0x3b854b;
            expect(_0x3b390f)['to'][_0x3e57df(403)](_0x198c25), _0x1417ed(_0x4ee093);
        });
    }), it('should handle async functions in mapValuesSeries', _0x39287c => {
        var _0x220b81 = _0x2e1861;
        async[_0x220b81(410)](_0x198c25, _0x7a23d, (_0x20ccbe, _0x1cae67) => {
            var _0x3acc1e = _0x220b81;
            expect(_0x1cae67)['to'][_0x3acc1e(403)](_0x198c25), _0x39287c(_0x20ccbe);
        });
    }), it(_0x2e1861(411), _0x179e40 => {
        var _0xf9a11 = _0x2e1861;
        async[_0xf9a11(412)](_0x181386, _0x7a23d, (_0x5eb8cb, _0x48d3c7) => {
            var _0x45e231 = _0xf9a11;
            expect(_0x48d3c7)['to'][_0x45e231(403)](_0x181386), _0x179e40(_0x5eb8cb);
        });
    }), it(_0x2e1861(413), _0x3e4252 => {
        async['filterLimit'](_0x181386, 2, _0x7a23d, (_0x1bec82, _0x54fbb0) => {
            var _0x25daf6 = _0x2155;
            expect(_0x54fbb0)['to'][_0x25daf6(403)](_0x181386), _0x3e4252(_0x1bec82);
        });
    }), it(_0x2e1861(414), _0x4866bb => {
        var _0x5cab40 = _0x2e1861;
        async[_0x5cab40(415)](_0x181386, _0x7a23d, (_0x21a6b0, _0x32250b) => {
            var _0x5ede8d = _0x5cab40;
            expect(_0x32250b)['to'][_0x5ede8d(403)](_0x181386), _0x4866bb(_0x21a6b0);
        });
    }), it(_0x2e1861(416), _0xd5e987 => {
        var _0xa02a8 = _0x2e1861;
        async[_0xa02a8(417)](_0x181386, _0x7a23d, (_0x5f35db, _0x2720c8) => {
            var _0x262e8a = _0xa02a8;
            expect(_0x2720c8)['to'][_0x262e8a(403)]([]), _0xd5e987(_0x5f35db);
        });
    }), it(_0x2e1861(418), _0x5cd07c => {
        var _0x23e4b9 = _0x2e1861;
        async[_0x23e4b9(419)](_0x181386, 2, _0x7a23d, (_0x50e731, _0x4b8a57) => {
            expect(_0x4b8a57)['to']['eql']([]), _0x5cd07c(_0x50e731);
        });
    }), it(_0x2e1861(420), _0x5a7387 => {
        var _0x36e28a = _0x2e1861;
        async[_0x36e28a(421)](_0x181386, _0x7a23d, (_0x413340, _0x43334d) => {
            expect(_0x43334d)['to']['eql']([]), _0x5a7387(_0x413340);
        });
    }), it(_0x2e1861(422), _0x49a5c8 => {
        async['every'](_0x181386, _0x7a23d, (_0x4d32ab, _0x38ee5f) => {
            expect(_0x38ee5f)['to']['eql'](!![]), _0x49a5c8(_0x4d32ab);
        });
    }), it('should handle async functions in everyLimit', _0x4ab2eb => {
        var _0xde6347 = _0x2e1861;
        async[_0xde6347(423)](_0x181386, 2, _0x7a23d, (_0xf38342, _0x1ad703) => {
            var _0x322e14 = _0xde6347;
            expect(_0x1ad703)['to'][_0x322e14(403)](!![]), _0x4ab2eb(_0xf38342);
        });
    }), it(_0x2e1861(424), _0xa47f31 => {
        var _0x5afa1c = _0x2e1861;
        async[_0x5afa1c(425)](_0x181386, _0x7a23d, (_0x20887e, _0x4fada6) => {
            var _0x41e27d = _0x5afa1c;
            expect(_0x4fada6)['to'][_0x41e27d(403)](!![]), _0xa47f31(_0x20887e);
        });
    }), it(_0x2e1861(426), _0x28a321 => {
        var _0x49dccb = _0x2e1861;
        async[_0x49dccb(427)](_0x181386, _0x7a23d, (_0x3093bb, _0x2673a7) => {
            var _0x2a4615 = _0x49dccb;
            expect(_0x2673a7)['to'][_0x2a4615(403)](!![]), _0x28a321(_0x3093bb);
        });
    }), it('should handle async functions in someLimit', _0x2835ee => {
        async['someLimit'](_0x181386, 2, _0x7a23d, (_0xd3ec34, _0x1e00c3) => {
            var _0x4ae1eb = _0x2155;
            expect(_0x1e00c3)['to'][_0x4ae1eb(403)](!![]), _0x2835ee(_0xd3ec34);
        });
    }), it(_0x2e1861(428), _0x20a129 => {
        var _0xc3b8c6 = _0x2e1861;
        async[_0xc3b8c6(429)](_0x181386, _0x7a23d, (_0x59b754, _0x46b277) => {
            expect(_0x46b277)['to']['eql'](!![]), _0x20a129(_0x59b754);
        });
    }), it(_0x2e1861(430), _0x4f2735 => {
        var _0x2d6c47 = _0x2e1861;
        async[_0x2d6c47(431)](_0x181386, _0x7a23d, (_0x5acc5b, _0x8fc60) => {
            var _0x365227 = _0x2d6c47;
            expect(_0x8fc60)['to'][_0x365227(403)]({
                1: [1],
                2: [2],
                3: [3]
            }), _0x4f2735(_0x5acc5b);
        });
    }), it(_0x2e1861(432), _0x4a81eb => {
        var _0x784fde = _0x2e1861;
        async[_0x784fde(433)](_0x181386, 2, _0x7a23d, (_0x4660ae, _0x4ada0a) => {
            var _0x112fe4 = _0x784fde;
            expect(_0x4ada0a)['to'][_0x112fe4(403)]({
                1: [1],
                2: [2],
                3: [3]
            }), _0x4a81eb(_0x4660ae);
        });
    }), it(_0x2e1861(434), _0x5556b7 => {
        async['groupBySeries'](_0x181386, _0x7a23d, (_0x624adf, _0x589270) => {
            var _0x30cb8b = _0x2155;
            expect(_0x589270)['to'][_0x30cb8b(403)]({
                1: [1],
                2: [2],
                3: [3]
            }), _0x5556b7(_0x624adf);
        });
    }), it('should handle async functions in concat', _0x37b6c0 => {
        var _0x23f811 = _0x2e1861;
        async[_0x23f811(435)](_0x181386, _0x7a23d, (_0x6df87c, _0xcaa3ce) => {
            expect(_0xcaa3ce)['to']['eql'](_0x181386), _0x37b6c0(_0x6df87c);
        });
    }), it('should handle async functions in concatLimit', _0x72ee2b => {
        var _0x244a39 = _0x2e1861;
        async[_0x244a39(436)](_0x181386, 2, _0x7a23d, (_0x427a5f, _0x117c6b) => {
            var _0x13f58 = _0x244a39;
            expect(_0x427a5f)['to'][_0x13f58(403)](null), expect(_0x117c6b)['to'][_0x13f58(403)](_0x181386), _0x72ee2b(_0x427a5f);
        });
    }), it(_0x2e1861(437), _0x30f120 => {
        var _0x119507 = _0x2e1861;
        async[_0x119507(438)](_0x181386, _0x7a23d, (_0x49a4a4, _0x2731ae) => {
            var _0x3228fb = _0x119507;
            expect(_0x2731ae)['to'][_0x3228fb(403)](_0x181386), _0x30f120(_0x49a4a4);
        });
    }), it(_0x2e1861(439), _0x2b9240 => {
        var _0xfc5b68 = _0x2e1861;
        async[_0xfc5b68(440)](_0x181386, 0, async (_0x4619f7, _0x12af3f) => {
            var _0x5b612e = _0xfc5b68, _0x5896b9 = await Promise[_0x5b612e(441)](_0x4619f7 + _0x12af3f);
            return _0x5896b9;
        }, (_0xe66a03, _0x25ad7d) => {
            expect(_0x25ad7d)['to']['eql'](6), _0x2b9240(_0xe66a03);
        });
    }), it(_0x2e1861(442), _0x5b8c20 => {
        async['reduceRight'](_0x181386, 0, async (_0x302cb6, _0x2becbd) => {
            var _0x3225a1 = _0x2155, _0x571f14 = await Promise[_0x3225a1(441)](_0x302cb6 + _0x2becbd);
            return _0x571f14;
        }, (_0x2c692e, _0x4f580b) => {
            expect(_0x4f580b)['to']['eql'](6), _0x5b8c20(_0x2c692e);
        });
    }), it(_0x2e1861(443), _0x406dd1 => {
        var _0x224621 = _0x2e1861;
        async[_0x224621(444)]([
            3,
            2,
            1
        ], _0x7a23d, (_0x109d86, _0x495c47) => {
            var _0x261cbb = _0x224621;
            expect(_0x495c47)['to'][_0x261cbb(403)](_0x181386), _0x406dd1(_0x109d86);
        });
    }), it(_0x2e1861(445), _0x324a03 => {
        var _0x263aa5 = _0x2e1861;
        async[_0x263aa5(446)](_0x198c25, async (_0x5e9d9e, _0x1f534a, _0x4517a0) => {
            var _0x1fd13c = _0x263aa5;
            _0x5e9d9e[_0x4517a0] = await Promise[_0x1fd13c(441)](_0x1f534a);
        }, (_0x3773ba, _0x2b452a) => {
            var _0x329c18 = _0x263aa5;
            expect(_0x2b452a)['to'][_0x329c18(403)](_0x198c25), _0x324a03(_0x3773ba);
        });
    }), it(_0x2e1861(447), _0x507887 => {
        var _0x1a5d8d = _0x2e1861;
        async[_0x1a5d8d(448)]([
            _0x7a23d,
            _0x7a23d
        ], _0x181386)((_0x35cbdb, _0x45f0ac) => {
            expect(_0x45f0ac)['to']['eql']([
                _0x181386,
                _0x181386
            ]), _0x507887(_0x35cbdb);
        });
    }), it(_0x2e1861(449), _0x57f203 => {
        var _0x46962c = _0x2e1861;
        async[_0x46962c(450)]([
            _0x7a23d,
            _0x7a23d
        ], _0x181386)((_0x12c2fd, _0x5d216a) => {
            expect(_0x5d216a)['to']['eql']([
                _0x181386,
                _0x181386
            ]), _0x57f203(_0x12c2fd);
        });
    }), it('should handle async functions in auto', _0x354702 => {
        var _0x2316ab = _0x2e1861;
        async[_0x2316ab(451)]({
            async 'a'() {
                var _0x4226a5 = _0x2316ab;
                return await Promise[_0x4226a5(441)](1);
            },
            async 'b'() {
                var _0x2b0f4a = _0x2316ab;
                return await Promise[_0x2b0f4a(441)](2);
            },
            'c': [
                'a',
                'b',
                async function (_0x189e3e) {
                    var _0x45c8fb = _0x2316ab;
                    return await Promise[_0x45c8fb(441)](_0x189e3e['a'] + _0x189e3e['b']);
                }
            ]
        }, (_0x4d915c, _0x52981b) => {
            var _0x1c055f = _0x2316ab;
            expect(_0x52981b)['to'][_0x1c055f(403)]({
                'a': 1,
                'b': 2,
                'c': 3
            }), _0x354702(_0x4d915c);
        });
    }), it(_0x2e1861(452), _0x15efc6 => {
        async['autoInject']({
            'z': async function () {
                return 0;
            },
            'a': async function () {
                return 1;
            },
            'b': function (_0x183c54, _0x4ccd5b) {
                _0x4ccd5b(null, _0x183c54 + 1);
            },
            async 'c'(_0x26d68a, _0x4bbddc) {
                var _0x2bac56 = _0x2155;
                return await Promise[_0x2bac56(441)](_0x26d68a + _0x4bbddc);
            },
            'd': async _0x59ede1 => {
                return await Promise['resolve'](_0x59ede1 + 1);
            }
        }, (_0x598478, _0x50e91f) => {
            var _0x4100f7 = _0x2155;
            expect(_0x50e91f)['to'][_0x4100f7(403)]({
                'z': 0,
                'a': 1,
                'b': 2,
                'c': 3,
                'd': 4
            }), _0x15efc6(_0x598478);
        });
    }), it(_0x2e1861(453), _0x307d64 => {
        var _0x1c2134 = _0x2e1861;
        async[_0x1c2134(454)]({
            async 'a'() {
                var _0xaf4eca = _0x1c2134;
                return await Promise[_0xaf4eca(441)](1);
            },
            async 'b'(_0x84cc2f) {
                return await Promise['resolve'](_0x84cc2f + 1);
            },
            async 'c'(_0x231b43, _0xb5dc31) {
                return await Promise['resolve'](_0x231b43 + _0xb5dc31);
            },
            async 'd'(_0x20ee13) {
                var _0x3a405d = _0x1c2134;
                return await Promise[_0x3a405d(441)](_0x20ee13 + 1);
            }
        }, (_0x338872, _0x34de74) => {
            expect(_0x34de74)['to']['eql']({
                'a': 1,
                'b': 2,
                'c': 3,
                'd': 4
            }), _0x307d64(_0x338872);
        });
    }), it(_0x2e1861(455), _0x1a19be => {
        var _0xa76ded = _0x2e1861, _0x473611 = [], _0xf01c32 = async[_0xa76ded(456)](async _0x215151 => {
                var _0xf9e4c8 = _0xa76ded;
                _0x473611[_0xf9e4c8(457)](await Promise['resolve'](_0x215151));
            }, 2);
        _0xf01c32['drain'](() => {
            var _0x7eeb5a = _0xa76ded;
            expect(_0x473611)['to'][_0x7eeb5a(403)]([
                [
                    1,
                    2
                ],
                [3]
            ]), _0x1a19be();
        }), _0xf01c32['push'](1), _0xf01c32[_0xa76ded(457)](2), _0xf01c32[_0xa76ded(457)](3);
    }), it(_0x2e1861(458), _0x43670d => {
        var _0x2922a5 = _0x2e1861, _0x13d8ed = [], _0x432c8e = async[_0x2922a5(459)](async _0x55d8ec => {
                var _0x4e3d50 = _0x2922a5;
                _0x13d8ed[_0x4e3d50(457)](await Promise[_0x4e3d50(441)](_0x55d8ec));
            }, 2);
        _0x432c8e[_0x2922a5(460)](() => {
            var _0x516e0c = _0x2922a5;
            expect(_0x13d8ed)['to'][_0x516e0c(403)]([
                1,
                2,
                3
            ]), _0x43670d();
        }), _0x432c8e[_0x2922a5(457)](1), _0x432c8e['push'](2), _0x432c8e[_0x2922a5(457)](3);
    }), it(_0x2e1861(461), _0x1ef9ac => {
        var _0x3e5a70 = _0x2e1861, _0xd62509 = [], _0x5664af = async[_0x3e5a70(462)](async _0x1ed787 => {
                var _0x1d51b0 = _0x3e5a70;
                _0xd62509[_0x1d51b0(457)](await Promise['resolve'](_0x1ed787));
            }, 2);
        _0x5664af[_0x3e5a70(460)](() => {
            var _0x27d3f4 = _0x3e5a70;
            expect(_0xd62509)['to'][_0x27d3f4(403)]([
                1,
                2,
                3
            ]), _0x1ef9ac();
        }), _0x5664af[_0x3e5a70(457)](1), _0x5664af['push'](2), _0x5664af[_0x3e5a70(457)](3);
    }), it(_0x2e1861(463), _0x461f0a => {
        var _0x597ffb = _0x2e1861;
        async[_0x597ffb(464)](async _0x167976 => _0x167976 + 1, async _0x444b86 => _0x444b86 + 1, async _0x3e9a80 => _0x3e9a80 + 1)(0, (_0x17f7e3, _0x2e5de0) => {
            var _0x560b89 = _0x597ffb;
            expect(_0x2e5de0)['to'][_0x560b89(465)](3), _0x461f0a(_0x17f7e3);
        });
    }), it(_0x2e1861(466), _0x1c709d => {
        var _0x1555c4 = _0x2e1861;
        async[_0x1555c4(467)](async _0x53398b => _0x53398b + 1, async _0x48bbcd => _0x48bbcd + 1, async _0x11e6aa => _0x11e6aa + 1)(0, (_0x5e663e, _0x4edaac) => {
            var _0x3b2139 = _0x1555c4;
            expect(_0x4edaac)['to'][_0x3b2139(465)](3), _0x1c709d(_0x5e663e);
        });
    }), it(_0x2e1861(468), _0x28fa1e => {
        var _0x1f5ee3 = 0;
        async['whilst'](async () => _0x1f5ee3 < 3, async () => {
            return _0x1f5ee3 += 1, _0x1f5ee3;
        }, _0x28fa1e);
    }), it(_0x2e1861(469), _0x120a1d => {
        var _0x2801a0 = _0x2e1861, _0x385c69 = 0;
        async[_0x2801a0(470)](async () => {
            return _0x385c69 += 1, _0x385c69;
        }, async _0x25e450 => _0x25e450 < 3, _0x120a1d);
    }), it(_0x2e1861(471), _0x5d4c7c => {
        var _0x5c8eda = 0;
        async['until'](async () => _0x5c8eda > 3, async () => {
            return _0x5c8eda += 1, _0x5c8eda;
        }, _0x5d4c7c);
    }), it(_0x2e1861(472), _0x585b0a => {
        var _0x48e429 = _0x2e1861, _0x47922c = 0;
        async[_0x48e429(473)](async () => {
            return _0x47922c += 1, _0x47922c;
        }, async _0x5df3ff => _0x5df3ff > 3, _0x585b0a);
    }), it(_0x2e1861(474), _0x2e1854 => {
        var _0x4ae475 = _0x2e1861, _0x5609b2 = 0;
        async[_0x4ae475(475)](async () => {
            _0x5609b2 += 1;
            if (_0x5609b2 > 10)
                throw new Error('too big');
        }, _0x5692b7 => {
            var _0x9896eb = _0x4ae475;
            expect(_0x5692b7['message'])['to'][_0x9896eb(465)](_0x9896eb(476)), _0x2e1854();
        });
    }), it('should handle async functions in parallel', _0x133d2e => {
        var _0x40fbbb = _0x2e1861;
        async[_0x40fbbb(477)]([
            async () => 1,
            async () => 2,
            async () => 3
        ], (_0x4f1b2b, _0x943a24) => {
            expect(_0x943a24)['to']['eql']([
                1,
                2,
                3
            ]), _0x133d2e(_0x4f1b2b);
        });
    }), it(_0x2e1861(478), _0x21d947 => {
        var _0x2a8d46 = _0x2e1861;
        async[_0x2a8d46(477)]({
            'a': async () => 1,
            'b': async () => 2,
            'c': async () => 3
        }, (_0x1f9b00, _0x14cb98) => {
            var _0x3ce620 = _0x2a8d46;
            expect(_0x14cb98)['to'][_0x3ce620(403)]({
                'a': 1,
                'b': 2,
                'c': 3
            }), _0x21d947(_0x1f9b00);
        });
    }), it(_0x2e1861(479), _0x249101 => {
        async['parallelLimit']([
            async () => 1,
            async () => 2,
            async () => 3
        ], 2, (_0x4bfd28, _0x57549f) => {
            expect(_0x57549f)['to']['eql']([
                1,
                2,
                3
            ]), _0x249101(_0x4bfd28);
        });
    }), it('should handle async functions in parallelLimit (object)', _0x33dc74 => {
        var _0x3b527f = _0x2e1861;
        async[_0x3b527f(480)]({
            'a': async () => 1,
            'b': async () => 2,
            'c': async () => 3
        }, 2, (_0x521ecd, _0x513a86) => {
            var _0x1ca892 = _0x3b527f;
            expect(_0x513a86)['to'][_0x1ca892(403)]({
                'a': 1,
                'b': 2,
                'c': 3
            }), _0x33dc74(_0x521ecd);
        });
    }), it(_0x2e1861(481), _0x240b6e => {
        async['series']([
            async () => 1,
            async () => 2,
            async () => 3
        ], (_0x37d289, _0x2f9460) => {
            var _0x189b9c = _0x2155;
            expect(_0x2f9460)['to'][_0x189b9c(403)]([
                1,
                2,
                3
            ]), _0x240b6e(_0x37d289);
        });
    }), it('should handle async functions in series (object)', _0x152b45 => {
        var _0x120b1d = _0x2e1861;
        async[_0x120b1d(482)]({
            'a': async () => 1,
            'b': async () => 2,
            'c': async () => 3
        }, (_0x4d3a25, _0x1f8c7f) => {
            expect(_0x1f8c7f)['to']['eql']({
                'a': 1,
                'b': 2,
                'c': 3
            }), _0x152b45(_0x4d3a25);
        });
    }), it(_0x2e1861(483), _0x3c450b => {
        var _0x4752a2 = _0x2e1861;
        async[_0x4752a2(484)]([
            async () => 1,
            async () => 2,
            async () => 3
        ], (_0x1f8771, _0x2185a3) => {
            var _0x2bfb4d = _0x4752a2;
            expect(_0x2185a3)['to'][_0x2bfb4d(403)](1), _0x3c450b(_0x1f8771);
        });
    }), it('should handle async functions in retry', _0x3d5aa2 => {
        var _0x405906 = _0x2e1861, _0x13a3c3 = 0;
        async[_0x405906(485)](4, async () => {
            var _0x4d7db8 = _0x405906;
            _0x13a3c3 += 1;
            if (_0x13a3c3 < 3)
                throw new Error(_0x4d7db8(486));
            return _0x13a3c3;
        }, (_0x34369e, _0x511384) => {
            var _0x466410 = _0x405906;
            expect(_0x511384)['to'][_0x466410(403)](3), _0x3d5aa2(_0x34369e);
        });
    }), it(_0x2e1861(487), _0x5c8a55 => {
        var _0x5e0590 = 0;
        async['retryable'](4, async () => {
            _0x5e0590 += 1;
            if (_0x5e0590 < 3)
                throw new Error('fail');
            return _0x5e0590;
        })((_0x290db7, _0x4377c3) => {
            expect(_0x4377c3)['to']['eql'](3), _0x5c8a55(_0x290db7);
        });
    }), it(_0x2e1861(488), _0x18b224 => {
        var _0x4d3e3c = _0x2e1861, _0x239db1 = 0;
        async[_0x4d3e3c(489)](4, async () => {
            return _0x239db1 += 1, _0x239db1;
        }, (_0x3d2007, _0x3372ad) => {
            var _0x2b81b8 = _0x4d3e3c;
            expect(_0x3372ad)['to'][_0x2b81b8(403)]([
                1,
                2,
                3,
                4
            ]), _0x18b224(_0x3d2007);
        });
    }), it(_0x2e1861(490), _0x3094ce => {
        var _0x55d253 = _0x2e1861, _0x45b566 = 0;
        async[_0x55d253(491)](4, 2, async () => {
            return _0x45b566 += 1, _0x45b566;
        }, (_0x545383, _0x347d3d) => {
            var _0x2edbf2 = _0x55d253;
            expect(_0x347d3d)['to'][_0x2edbf2(403)]([
                1,
                2,
                3,
                4
            ]), _0x3094ce(_0x545383);
        });
    }), it(_0x2e1861(492), _0x138b71 => {
        var _0x3af797 = 0;
        async['timesSeries'](4, async () => {
            return _0x3af797 += 1, _0x3af797;
        }, (_0x31d53a, _0x33a802) => {
            var _0x35e746 = _0x2155;
            expect(_0x33a802)['to'][_0x35e746(403)]([
                1,
                2,
                3,
                4
            ]), _0x138b71(_0x31d53a);
        });
    }), it(_0x2e1861(493), _0x45cc43 => {
        var _0x165458 = _0x2e1861;
        async[_0x165458(494)]([
            async () => 1,
            async _0xdbbd67 => _0xdbbd67 + 1,
            async _0x4b70aa => [
                _0x4b70aa,
                _0x4b70aa + 1
            ],
            async ([_0x30d27e, _0x5230a7]) => _0x30d27e + _0x5230a7
        ], (_0x331cc3, _0x1f5b76) => {
            var _0x1e4b30 = _0x165458;
            expect(_0x1f5b76)['to'][_0x1e4b30(403)](5), _0x45cc43(_0x331cc3);
        });
    }), it(_0x2e1861(495), _0x5ddd0f => {
        var _0x57e4a6 = _0x2e1861;
        async[_0x57e4a6(496)]([
            async () => {
                var _0x52a958 = _0x57e4a6;
                throw new Error(_0x52a958(497));
            },
            async () => {
                var _0x4dda36 = _0x57e4a6;
                throw new Error(_0x4dda36(498));
            },
            async () => 5,
            async () => {
                var _0x59c25d = _0x57e4a6;
                throw new Error(_0x59c25d(499));
            }
        ], (_0x1192da, _0x11232e) => {
            var _0x115851 = _0x57e4a6;
            expect(_0x11232e)['to'][_0x115851(403)](5), _0x5ddd0f();
        });
    }), it('should handle async functions in dir', _0x212d04 => {
        var _0xa3a476 = _0x2e1861;
        async[_0xa3a476(500)](async _0xb9cb35 => _0xb9cb35, _0xa3a476(501)), setTimeout(_0x212d04);
    }), it(_0x2e1861(502), _0x503981 => {
        var _0xfd9436 = _0x2e1861;
        async[_0xfd9436(503)](async _0x4de61e => _0x4de61e, _0xfd9436(501)), setTimeout(_0x503981);
    }), it(_0x2e1861(504), () => {
        var _0x303d5d = _0x2e1861, _0x19aa0f = async[_0x303d5d(505)](_0x7a23d);
        assert(_0x19aa0f === _0x7a23d);
    }), it(_0x2e1861(506), _0x5868a8 => {
        var _0xe14f7c = _0x2e1861, _0x33815e = async[_0xe14f7c(507)](_0x7a23d);
        _0x33815e(1, () => {
            _0x33815e(1, _0x5868a8);
        });
    }), it(_0x2e1861(508), _0x2d581c => {
        var _0x39f22b = _0x2e1861, _0x25d0a0 = async[_0x39f22b(509)](_0x7a23d);
        _0x25d0a0(1, (_0x1cc34a, _0x55affb) => {
            expect(_0x55affb)['to']['eql']({ 'value': 1 }), _0x2d581c(_0x1cc34a);
        });
    }), it('should handle async functions in reflect (error case)', _0x4a89be => {
        var _0x4a0000 = _0x2e1861, _0x28d142, _0x4b3021 = async[_0x4a0000(509)](async () => {
                var _0xb0ebbb = _0x4a0000;
                _0x28d142 = new Error(_0xb0ebbb(501));
                throw _0x28d142;
            });
        _0x4b3021(1, (_0x356361, _0x92bad6) => {
            var _0x571781 = _0x4a0000;
            expect(_0x92bad6)['to'][_0x571781(403)]({
                'error': _0x28d142,
                'value': undefined
            }), _0x4a89be(_0x356361);
        });
    }), it('should handle async functions in timeout', _0xab0713 => {
        var _0x4b3d07 = _0x2e1861, _0x3787d4 = async[_0x4b3d07(510)](_0x7a23d, 50);
        _0x3787d4(1, (_0x597014, _0x129676) => {
            var _0x106ba1 = _0x4b3d07;
            expect(_0x129676)['to'][_0x106ba1(403)](1), _0xab0713(_0x597014);
        });
    }), it(_0x2e1861(511), _0x845395 => {
        var _0x5ebabe = _0x2e1861, _0x430a76 = async[_0x5ebabe(510)](async _0x4c845f => {
                return await new Promise(_0x2abbb4 => setTimeout(_0x2abbb4, 100)), _0x4c845f;
            }, 20);
        _0x430a76(1, _0x20238a => {
            var _0x4cd69a = _0x5ebabe;
            expect(_0x20238a['message'])['to'][_0x4cd69a(512)](/timed out/), _0x845395();
        });
    });
};