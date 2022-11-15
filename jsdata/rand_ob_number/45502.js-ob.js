var async = require('../../lib');
const {expect} = require('chai'), assert = require('assert');
module['exports'] = function () {
    async function _0x5bbf96(_0x120b63) {
        var _0x25c142 = await Promise['resolve'](_0x120b63);
        return _0x25c142;
    }
    this['retries'](0x1 * -0x1805 + -0xa42 + 0x224a);
    const _0xfe2d58 = [
            0x1d42 + -0x9 * 0x28b + -0x65e,
            0x1 * -0x7c1 + -0x25e + -0xa21 * -0x1,
            -0x13f4 + 0x12 * 0x3c + 0xfbf
        ], _0x4d7b47 = {
            'a': 0x1,
            'b': 0x2,
            'c': 0x3
        };
    it('should\x20asyncify\x20async\x20functions', _0x436019 => {
        async['asyncify'](_0x5bbf96)(-0x4 * 0x2a5 + 0x8d * 0xe + 0x308, (_0x529798, _0x13a29e) => {
            assert(_0x13a29e === -0x299 * -0x5 + -0xfdd * -0x2 + -0x2c8d), _0x436019(_0x529798);
        });
    }), it('should\x20handle\x20errors\x20in\x20async\x20functions', _0x490fd6 => {
        async['asyncify'](async () => {
            throw new Error('thrown\x20error');
        })(_0xc18991 => {
            assert(_0xc18991['message'] = 'thrown\x20error'), _0x490fd6();
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20each', _0x516b83 => {
        async['each'](_0xfe2d58, _0x5bbf96, _0x516b83);
    }), it('should\x20handle\x20async\x20functions\x20in\x20eachLimit', _0x56a125 => {
        async['eachLimit'](_0xfe2d58, -0x49 * -0x55 + 0x18bd + -0x30f8, _0x5bbf96, _0x56a125);
    }), it('should\x20handle\x20async\x20functions\x20in\x20eachSeries', _0x540e45 => {
        async['eachSeries'](_0xfe2d58, _0x5bbf96, _0x540e45);
    }), it('should\x20handle\x20async\x20functions\x20in\x20eachOf', _0x7ac2b2 => {
        async['eachOf'](_0xfe2d58, _0x5bbf96, _0x7ac2b2);
    }), it('should\x20handle\x20async\x20functions\x20in\x20eachOfLimit', _0xdade77 => {
        async['eachOfLimit'](_0xfe2d58, 0x1f92 + 0x1819 * -0x1 + -0x3 * 0x27d, _0x5bbf96, _0xdade77);
    }), it('should\x20handle\x20async\x20functions\x20in\x20eachOfSeries', _0x3406a0 => {
        async['eachOfSeries'](_0xfe2d58, _0x5bbf96, _0x3406a0);
    }), it('should\x20handle\x20async\x20functions\x20in\x20map', _0x3cb0a1 => {
        async['map'](_0xfe2d58, _0x5bbf96, (_0x3af881, _0x3d320e) => {
            expect(_0x3d320e)['to']['eql'](_0xfe2d58), _0x3cb0a1(_0x3af881);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20mapLimit', _0x3f0597 => {
        async['mapLimit'](_0xfe2d58, 0x63 * -0xe + 0x76e * 0x2 + -0x970, _0x5bbf96, (_0x4a2804, _0x9c6c64) => {
            expect(_0x9c6c64)['to']['eql'](_0xfe2d58), _0x3f0597(_0x4a2804);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20mapSeries', _0x1799b8 => {
        async['mapSeries'](_0xfe2d58, _0x5bbf96, (_0x21ffb6, _0x41b1fb) => {
            expect(_0x41b1fb)['to']['eql'](_0xfe2d58), _0x1799b8(_0x21ffb6);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20mapValues', _0x267545 => {
        async['mapValues'](_0x4d7b47, _0x5bbf96, (_0x503f81, _0xa76302) => {
            expect(_0xa76302)['to']['eql'](_0x4d7b47), _0x267545(_0x503f81);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20mapValuesLimit', _0x22e328 => {
        async['mapValuesLimit'](_0x4d7b47, -0x1780 + -0xcbf * -0x3 + 0x4e9 * -0x3, _0x5bbf96, (_0x4a0114, _0x3c082a) => {
            expect(_0x3c082a)['to']['eql'](_0x4d7b47), _0x22e328(_0x4a0114);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20mapValuesSeries', _0x2ae704 => {
        async['mapValuesSeries'](_0x4d7b47, _0x5bbf96, (_0x4e38fb, _0x51da3d) => {
            expect(_0x51da3d)['to']['eql'](_0x4d7b47), _0x2ae704(_0x4e38fb);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20filter', _0x192fbf => {
        async['filter'](_0xfe2d58, _0x5bbf96, (_0x117fae, _0x218eb8) => {
            expect(_0x218eb8)['to']['eql'](_0xfe2d58), _0x192fbf(_0x117fae);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20filterLimit', _0x54e901 => {
        async['filterLimit'](_0xfe2d58, 0x203d + 0x2 * 0x9a4 + -0x3383, _0x5bbf96, (_0x1bf094, _0x3f9909) => {
            expect(_0x3f9909)['to']['eql'](_0xfe2d58), _0x54e901(_0x1bf094);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20filterSeries', _0x1168d8 => {
        async['filterSeries'](_0xfe2d58, _0x5bbf96, (_0x4ed06c, _0x4ff21e) => {
            expect(_0x4ff21e)['to']['eql'](_0xfe2d58), _0x1168d8(_0x4ed06c);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20reject', _0xedbb6c => {
        async['reject'](_0xfe2d58, _0x5bbf96, (_0x3267e9, _0x53b91e) => {
            expect(_0x53b91e)['to']['eql']([]), _0xedbb6c(_0x3267e9);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20rejectLimit', _0x10f6f0 => {
        async['rejectLimit'](_0xfe2d58, 0x1 * 0x23ff + -0x16c3 + -0xd3a, _0x5bbf96, (_0x278e6b, _0x1b9c72) => {
            expect(_0x1b9c72)['to']['eql']([]), _0x10f6f0(_0x278e6b);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20rejectSeries', _0x39cf1f => {
        async['rejectSeries'](_0xfe2d58, _0x5bbf96, (_0x24e5db, _0x26b97e) => {
            expect(_0x26b97e)['to']['eql']([]), _0x39cf1f(_0x24e5db);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20every', _0x4e88ff => {
        async['every'](_0xfe2d58, _0x5bbf96, (_0xd56200, _0x233851) => {
            expect(_0x233851)['to']['eql'](!![]), _0x4e88ff(_0xd56200);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20everyLimit', _0x41007a => {
        async['everyLimit'](_0xfe2d58, 0x34 * -0x2b + -0x1ab * -0x2 + -0x568 * -0x1, _0x5bbf96, (_0x1ce29a, _0x1f602c) => {
            expect(_0x1f602c)['to']['eql'](!![]), _0x41007a(_0x1ce29a);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20everySeries', _0x40ad32 => {
        async['everySeries'](_0xfe2d58, _0x5bbf96, (_0x1ff659, _0x38994c) => {
            expect(_0x38994c)['to']['eql'](!![]), _0x40ad32(_0x1ff659);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20some', _0x15345e => {
        async['some'](_0xfe2d58, _0x5bbf96, (_0x193517, _0x1f5d97) => {
            expect(_0x1f5d97)['to']['eql'](!![]), _0x15345e(_0x193517);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20someLimit', _0x1d526c => {
        async['someLimit'](_0xfe2d58, -0x1070 * -0x1 + 0xa35 + -0x1aa3 * 0x1, _0x5bbf96, (_0x17e1c7, _0x3d3a7b) => {
            expect(_0x3d3a7b)['to']['eql'](!![]), _0x1d526c(_0x17e1c7);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20someSeries', _0x580406 => {
        async['someSeries'](_0xfe2d58, _0x5bbf96, (_0x544aaa, _0x36ae35) => {
            expect(_0x36ae35)['to']['eql'](!![]), _0x580406(_0x544aaa);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20groupBy', _0x34d807 => {
        async['groupBy'](_0xfe2d58, _0x5bbf96, (_0x402a9d, _0x260afd) => {
            expect(_0x260afd)['to']['eql']({
                0x1: [0x24ff + -0x1a98 + -0x1 * 0xa66],
                0x2: [-0xf76 + 0x25 * -0xb + -0xb * -0x18d],
                0x3: [-0x38c + -0x18c4 + -0x1c53 * -0x1]
            }), _0x34d807(_0x402a9d);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20groupByLimit', _0x33a972 => {
        async['groupByLimit'](_0xfe2d58, -0x1374 + 0x198f + -0x619, _0x5bbf96, (_0x56ed4f, _0x84d390) => {
            expect(_0x84d390)['to']['eql']({
                0x1: [0x16b9 * -0x1 + -0x1aab + -0xf * -0x34b],
                0x2: [0x20 * 0xf8 + 0x1 * 0x215 + -0x2113 * 0x1],
                0x3: [-0x1 * 0x24a + 0x12ba + -0x91 * 0x1d]
            }), _0x33a972(_0x56ed4f);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20groupBySeries', _0x7c4ae3 => {
        async['groupBySeries'](_0xfe2d58, _0x5bbf96, (_0x1012cb, _0x2876e4) => {
            expect(_0x2876e4)['to']['eql']({
                0x1: [-0x1f8f + -0x20db + 0x406b],
                0x2: [-0x3 * -0x3a1 + 0xc33 + -0x1714],
                0x3: [-0xf29 + -0x2 * 0x1229 + -0x2 * -0x19bf]
            }), _0x7c4ae3(_0x1012cb);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20concat', _0x4299d5 => {
        async['concat'](_0xfe2d58, _0x5bbf96, (_0x126a1e, _0x3968f0) => {
            expect(_0x3968f0)['to']['eql'](_0xfe2d58), _0x4299d5(_0x126a1e);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20concatLimit', _0x472406 => {
        async['concatLimit'](_0xfe2d58, -0x1 * 0x3f2 + -0x2643 + 0x2a37, _0x5bbf96, (_0xa97dab, _0x1c0b30) => {
            expect(_0xa97dab)['to']['eql'](null), expect(_0x1c0b30)['to']['eql'](_0xfe2d58), _0x472406(_0xa97dab);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20concatSeries', _0x3a4149 => {
        async['concatSeries'](_0xfe2d58, _0x5bbf96, (_0x38831e, _0xaebdb8) => {
            expect(_0xaebdb8)['to']['eql'](_0xfe2d58), _0x3a4149(_0x38831e);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20reduce', _0x52ff30 => {
        async['reduce'](_0xfe2d58, -0x2443 + 0x1798 + 0xcab, async (_0x22f6e2, _0x4c651a) => {
            var _0x10bb4b = await Promise['resolve'](_0x22f6e2 + _0x4c651a);
            return _0x10bb4b;
        }, (_0x368a7f, _0x36664b) => {
            expect(_0x36664b)['to']['eql'](-0x76d * 0x5 + 0xc1 * -0x29 + -0x42 * -0x108), _0x52ff30(_0x368a7f);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20reduceRight', _0x2840d7 => {
        async['reduceRight'](_0xfe2d58, 0x186a + -0x1fbd + -0x271 * -0x3, async (_0x37ae06, _0x148f6f) => {
            var _0x206e64 = await Promise['resolve'](_0x37ae06 + _0x148f6f);
            return _0x206e64;
        }, (_0x548bad, _0x4cba05) => {
            expect(_0x4cba05)['to']['eql'](-0x118e + 0x10 * 0x5b + -0xbe4 * -0x1), _0x2840d7(_0x548bad);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20sortBy', _0x2cc6cb => {
        async['sortBy']([
            -0x1080 + -0x154c + 0x1 * 0x25cf,
            -0x26a8 + -0x1 * 0x1edd + 0x1 * 0x4587,
            0xc7b + -0x1113 + 0x1 * 0x499
        ], _0x5bbf96, (_0x273ae7, _0x355d01) => {
            expect(_0x355d01)['to']['eql'](_0xfe2d58), _0x2cc6cb(_0x273ae7);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20transform', _0x4adfef => {
        async['transform'](_0x4d7b47, async (_0xadab1d, _0x3becc3, _0x13cb4a) => {
            _0xadab1d[_0x13cb4a] = await Promise['resolve'](_0x3becc3);
        }, (_0x6192b5, _0xa7c6bc) => {
            expect(_0xa7c6bc)['to']['eql'](_0x4d7b47), _0x4adfef(_0x6192b5);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20applyEach', _0x225bf5 => {
        async['applyEach']([
            _0x5bbf96,
            _0x5bbf96
        ], _0xfe2d58)((_0x571c26, _0x54d300) => {
            expect(_0x54d300)['to']['eql']([
                _0xfe2d58,
                _0xfe2d58
            ]), _0x225bf5(_0x571c26);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20applyEachSeries', _0x3964ab => {
        async['applyEachSeries']([
            _0x5bbf96,
            _0x5bbf96
        ], _0xfe2d58)((_0x3640c1, _0x1a19b8) => {
            expect(_0x1a19b8)['to']['eql']([
                _0xfe2d58,
                _0xfe2d58
            ]), _0x3964ab(_0x3640c1);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20auto', _0x41e262 => {
        async['auto']({
            async 'a'() {
                return await Promise['resolve'](-0x1211 * 0x2 + 0x1e22 + 0x601);
            },
            async 'b'() {
                return await Promise['resolve'](-0x5 * -0x467 + 0x1 * -0x943 + -0xcbe);
            },
            'c': [
                'a',
                'b',
                async function (_0x72efeb) {
                    return await Promise['resolve'](_0x72efeb['a'] + _0x72efeb['b']);
                }
            ]
        }, (_0x555c44, _0x44b227) => {
            expect(_0x44b227)['to']['eql']({
                'a': 0x1,
                'b': 0x2,
                'c': 0x3
            }), _0x41e262(_0x555c44);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20autoInject', _0x891638 => {
        async['autoInject']({
            'z': async function () {
                return -0x18bd + -0x1e9c + 0x3759;
            },
            'a': async function () {
                return -0x2 * 0xa67 + 0xc11 * -0x3 + 0x3902;
            },
            'b': function (_0x59225c, _0x1dd5dd) {
                _0x1dd5dd(null, _0x59225c + (0x2092 + -0x203 * 0x13 + 0x2d4 * 0x2));
            },
            async 'c'(_0x53aa90, _0x33be15) {
                return await Promise['resolve'](_0x53aa90 + _0x33be15);
            },
            'd': async _0x17f779 => {
                return await Promise['resolve'](_0x17f779 + (0x1262 + 0x1 * -0x2189 + 0xf28));
            }
        }, (_0x4bfcdc, _0x1a71c4) => {
            expect(_0x1a71c4)['to']['eql']({
                'z': 0x0,
                'a': 0x1,
                'b': 0x2,
                'c': 0x3,
                'd': 0x4
            }), _0x891638(_0x4bfcdc);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20autoInject\x20(shorthand)', _0x3742d7 => {
        async['autoInject']({
            async 'a'() {
                return await Promise['resolve'](0xb * -0x296 + 0x1 * -0x1999 + -0x4 * -0xd83);
            },
            async 'b'(_0x52c3ea) {
                return await Promise['resolve'](_0x52c3ea + (-0x1020 + 0x11 * 0xfd + -0xac));
            },
            async 'c'(_0x3de416, _0x5a22c2) {
                return await Promise['resolve'](_0x3de416 + _0x5a22c2);
            },
            async 'd'(_0x335698) {
                return await Promise['resolve'](_0x335698 + (-0xb3d + 0x157 * 0x1d + -0x1b9d * 0x1));
            }
        }, (_0x5e02d9, _0x2ac237) => {
            expect(_0x2ac237)['to']['eql']({
                'a': 0x1,
                'b': 0x2,
                'c': 0x3,
                'd': 0x4
            }), _0x3742d7(_0x5e02d9);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20cargo', _0x1f3f8d => {
        var _0x3296d9 = [], _0x4c4edf = async['cargo'](async _0xcf3287 => {
                _0x3296d9['push'](await Promise['resolve'](_0xcf3287));
            }, -0x3b * -0x42 + 0xc3 * -0xa + 0x796 * -0x1);
        _0x4c4edf['drain'](() => {
            expect(_0x3296d9)['to']['eql']([
                [
                    -0x178e + 0x2322 + -0xb93,
                    0x229f * 0x1 + -0x747 + -0x1b56 * 0x1
                ],
                [-0x1191 * -0x1 + -0x1 * -0xc2f + -0x1dbd]
            ]), _0x1f3f8d();
        }), _0x4c4edf['push'](0x2 * -0x583 + 0x62e + 0x4d9), _0x4c4edf['push'](0x109e + -0x1a * -0x106 + -0x4 * 0xace), _0x4c4edf['push'](0x1 * 0x127f + 0x6 * -0x219 + -0x5e6);
    }), it('should\x20handle\x20async\x20functions\x20in\x20queue', _0x3b5f13 => {
        var _0x5b9d1a = [], _0x1df897 = async['queue'](async _0x3d9891 => {
                _0x5b9d1a['push'](await Promise['resolve'](_0x3d9891));
            }, -0xbf5 * 0x3 + 0xcce * 0x2 + -0xef * -0xb);
        _0x1df897['drain'](() => {
            expect(_0x5b9d1a)['to']['eql']([
                0x13b2 + -0x185 * 0x5 + -0xc18,
                -0x54c + -0x11 * -0x197 + -0x15b9,
                0x2111 + -0x2ef + -0x1e1f
            ]), _0x3b5f13();
        }), _0x1df897['push'](0xaf6 + -0xb * 0x77 + 0x11 * -0x58), _0x1df897['push'](-0x16f9 + 0x199 * 0x2 + 0x1 * 0x13c9), _0x1df897['push'](-0x1 * -0x209 + 0x35 * -0x13 + 0x1e9);
    }), it('should\x20handle\x20async\x20functions\x20in\x20priorityQueue', _0x3b1679 => {
        var _0x4860e7 = [], _0xa2942e = async['priorityQueue'](async _0x419da1 => {
                _0x4860e7['push'](await Promise['resolve'](_0x419da1));
            }, -0x1 * 0x1fc + -0xb6f + 0xd6d);
        _0xa2942e['drain'](() => {
            expect(_0x4860e7)['to']['eql']([
                0x1 * -0x429 + 0x1dc3 + -0x1 * 0x1999,
                -0x2e * 0x28 + 0x25 * -0xeb + 0x2929,
                -0xea5 * 0x1 + 0x4ff * -0x5 + 0x27a3
            ]), _0x3b1679();
        }), _0xa2942e['push'](0xa * -0xb9 + 0x3 * -0xa2d + 0x25c2), _0xa2942e['push'](-0xdba + 0x520 + 0x89c), _0xa2942e['push'](-0x1c57 * -0x1 + -0x37a + -0x18da);
    }), it('should\x20handle\x20async\x20functions\x20in\x20compose', _0x3ee97f => {
        async['compose'](async _0x2b6cd8 => _0x2b6cd8 + (0xe3d + -0x17f * -0x2 + -0x5be * 0x3), async _0x2368ac => _0x2368ac + (-0x25f0 + -0x2611 + 0x11a * 0x45), async _0x114277 => _0x114277 + (0x1391 * 0x1 + 0x138 * 0x2 + 0x160 * -0x10))(0x18e * 0x5 + -0x1f1a + 0x1754, (_0x1d2f26, _0x26b39c) => {
            expect(_0x26b39c)['to']['equal'](0xb03 + 0x17 * 0x13d + -0x277b), _0x3ee97f(_0x1d2f26);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20seq', _0x196f4b => {
        async['seq'](async _0x18c1c1 => _0x18c1c1 + (0x6d * -0x4 + 0x1281 + 0x2 * -0x866), async _0x36375e => _0x36375e + (-0x1401 + 0x1a9 * 0x3 + 0xf07), async _0x2d28d7 => _0x2d28d7 + (-0x1 * -0x824 + -0x100b + -0x1fa * -0x4))(-0x229a + 0x151b * -0x1 + 0x37b5, (_0x997845, _0x2f3ee4) => {
            expect(_0x2f3ee4)['to']['equal'](-0x13a * -0x1f + 0x93b + -0x2f3e * 0x1), _0x196f4b(_0x997845);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20whilst', _0x5dcde3 => {
        var _0xe8e394 = 0x1 * 0x19f7 + -0x1093 + 0x1 * -0x964;
        async['whilst'](async () => _0xe8e394 < -0x122 + -0x31 * -0xc0 + 0x239b * -0x1, async () => {
            return _0xe8e394 += 0xc3f + -0x1421 * -0x1 + -0x205f, _0xe8e394;
        }, _0x5dcde3);
    }), it('should\x20handle\x20async\x20functions\x20in\x20doWhilst', _0x1e7afc => {
        var _0x2b9d32 = 0x3e * -0x1b + -0xdc4 + -0x17 * -0xe2;
        async['doWhilst'](async () => {
            return _0x2b9d32 += -0x1b36 + 0x1e1 * 0x7 + 0xe10, _0x2b9d32;
        }, async _0x4fe9c5 => _0x4fe9c5 < 0x7dc * -0x2 + 0xbfd + 0x3be, _0x1e7afc);
    }), it('should\x20handle\x20async\x20functions\x20in\x20until', _0x2e2044 => {
        var _0x25820c = 0x1924 + -0x5 * 0x2f5 + 0xf1 * -0xb;
        async['until'](async () => _0x25820c > 0xecc + -0x1b88 + -0xcbf * -0x1, async () => {
            return _0x25820c += -0x107e * 0x1 + -0x85b + 0x18da, _0x25820c;
        }, _0x2e2044);
    }), it('should\x20handle\x20async\x20functions\x20in\x20doUntil', _0x4bc0d2 => {
        var _0x4e58cb = 0xa * -0xdc + -0xb * 0x139 + 0x63 * 0x39;
        async['doUntil'](async () => {
            return _0x4e58cb += 0x1 * -0x6b5 + 0x13 * 0x65 + -0xc9, _0x4e58cb;
        }, async _0xe61c81 => _0xe61c81 > -0x1 * 0x1c7d + 0x1 * 0x814 + 0x146c, _0x4bc0d2);
    }), it('should\x20handle\x20async\x20functions\x20in\x20forever', _0x2ef4f2 => {
        var _0x18c2c7 = -0x6f * 0x59 + 0x22 * -0x81 + 0x37b9;
        async['forever'](async () => {
            _0x18c2c7 += -0xb * -0x313 + -0xc65 + -0x156b;
            if (_0x18c2c7 > 0x27 * 0x6d + -0x1 * 0x5e3 + -0xaae)
                throw new Error('too\x20big');
        }, _0x5a1fc1 => {
            expect(_0x5a1fc1['message'])['to']['equal']('too\x20big'), _0x2ef4f2();
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20parallel', _0x449e54 => {
        async['parallel']([
            async () => -0x1 * 0x1154 + -0x3 * -0x1e8 + 0x1 * 0xb9d,
            async () => 0x2039 + -0x32d + -0x1d0a,
            async () => 0x8f * -0x5 + 0x7a6 * 0x3 + -0x4 * 0x509
        ], (_0x3aa6a7, _0x2f159b) => {
            expect(_0x2f159b)['to']['eql']([
                -0x16e2 + -0x20e8 + -0x37cb * -0x1,
                -0x11a1 + -0x244f + 0x35f2,
                0xe45 * -0x2 + 0x2683 + 0x1e * -0x55
            ]), _0x449e54(_0x3aa6a7);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20parallel\x20(object)', _0x5cad68 => {
        async['parallel']({
            'a': async () => 0x1f85 + -0x5a3 * -0x1 + -0x2527,
            'b': async () => 0xca * 0x12 + -0x1 * 0xe97 + 0x1 * 0x65,
            'c': async () => 0x7ad + -0x1 * 0x26d7 + -0x1 * -0x1f2d
        }, (_0x3b0b97, _0x17179f) => {
            expect(_0x17179f)['to']['eql']({
                'a': 0x1,
                'b': 0x2,
                'c': 0x3
            }), _0x5cad68(_0x3b0b97);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20parallelLimit', _0x5c9de2 => {
        async['parallelLimit']([
            async () => -0x1 * 0xc17 + 0xb52 + 0xc6,
            async () => 0x25b7 + 0x230e + -0x1 * 0x48c3,
            async () => 0x2254 + 0x3a * -0x1f + -0x33 * 0x89
        ], -0x99b * -0x2 + 0x1204 * -0x1 + -0x8 * 0x26, (_0x20d01f, _0xa5b81) => {
            expect(_0xa5b81)['to']['eql']([
                -0x3 * -0xb29 + -0xc73 * -0x2 + -0xe98 * 0x4,
                -0x9d7 + -0x185c + -0x3f * -0x8b,
                0x1a3a + -0xd3f + -0xcf8
            ]), _0x5c9de2(_0x20d01f);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20parallelLimit\x20(object)', _0x4596e2 => {
        async['parallelLimit']({
            'a': async () => 0x1 * -0x412 + 0x2 * -0x5b2 + 0xf77,
            'b': async () => 0xe9b * -0x1 + -0xffb * -0x1 + -0x23 * 0xa,
            'c': async () => 0xd1 * -0x6 + -0xfbc + 0x97 * 0x23
        }, -0x53 * 0x23 + -0x75f + 0x12ba, (_0x10c046, _0x4bba2d) => {
            expect(_0x4bba2d)['to']['eql']({
                'a': 0x1,
                'b': 0x2,
                'c': 0x3
            }), _0x4596e2(_0x10c046);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20series', _0x3d756a => {
        async['series']([
            async () => 0x2562 + 0x1 * 0x1b09 + -0x406a,
            async () => 0x2c5 * 0xc + -0x1 * 0x45d + -0x1 * 0x1cdd,
            async () => 0x14cf + 0x126 * -0x7 + -0xcc2
        ], (_0x579eb4, _0x30373b) => {
            expect(_0x30373b)['to']['eql']([
                0x2229 + -0x1f14 + -0x2 * 0x18a,
                0x2 * 0xfa3 + 0x1784 + -0x1 * 0x36c8,
                -0x1268 + -0x1ee6 + 0x3151
            ]), _0x3d756a(_0x579eb4);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20series\x20(object)', _0x257a83 => {
        async['series']({
            'a': async () => 0x2af * -0x3 + -0x35 * 0x5 + -0xd * -0xb3,
            'b': async () => -0x1a4b + -0x11f2 + 0x2c3f,
            'c': async () => 0x19f + 0x2b3 * -0x1 + 0x117 * 0x1
        }, (_0x7dceec, _0x104904) => {
            expect(_0x104904)['to']['eql']({
                'a': 0x1,
                'b': 0x2,
                'c': 0x3
            }), _0x257a83(_0x7dceec);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20race', _0xa4ac26 => {
        async['race']([
            async () => -0x59 * 0x21 + -0xad * -0x2 + 0x90 * 0x12,
            async () => -0x28f * -0xb + 0x2e * -0x3a + -0x11b7,
            async () => -0x155f * -0x1 + -0x927 + -0x7d * 0x19
        ], (_0x5af656, _0x5ee8f4) => {
            expect(_0x5ee8f4)['to']['eql'](0xf8 * 0x6 + 0x1367 + -0x1936), _0xa4ac26(_0x5af656);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20retry', _0x43ef5a => {
        var _0x5716bf = 0x313 * 0x2 + 0x8f1 * -0x2 + 0xbbc;
        async['retry'](0x1 * 0x2395 + 0x2d * 0x4b + -0x30c0, async () => {
            _0x5716bf += -0xb95 + 0x955 * -0x2 + 0x790 * 0x4;
            if (_0x5716bf < 0x1c1 * 0x2 + -0x127 + -0x4b * 0x8)
                throw new Error('fail');
            return _0x5716bf;
        }, (_0x3735d6, _0x2ae6be) => {
            expect(_0x2ae6be)['to']['eql'](-0x75d + -0x1ca6 + 0x2406), _0x43ef5a(_0x3735d6);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20retryable', _0x2db768 => {
        var _0x15ee8a = 0x1 * 0x1457 + 0x10e6 + -0x253d * 0x1;
        async['retryable'](0x1a73 + -0xe65 + -0xc0a, async () => {
            _0x15ee8a += -0x111e + -0xda9 + 0x28 * 0xc5;
            if (_0x15ee8a < -0x221f + 0xbb2 + -0x8 * -0x2ce)
                throw new Error('fail');
            return _0x15ee8a;
        })((_0x576331, _0x26710d) => {
            expect(_0x26710d)['to']['eql'](-0x10c9 + -0x1 * -0x295 + 0xe37), _0x2db768(_0x576331);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20times', _0x8c60d0 => {
        var _0x3277bb = 0x1975 + 0x13fc + -0x2d71 * 0x1;
        async['times'](-0x4dc + 0x1 * 0xc07 + -0x1 * 0x727, async () => {
            return _0x3277bb += 0x17e * -0x19 + -0x3d1 + 0x2920, _0x3277bb;
        }, (_0x41224a, _0x2f2eda) => {
            expect(_0x2f2eda)['to']['eql']([
                -0x8 * -0x10b + 0x1dfe + -0x2655,
                0x2268 + 0x75e + 0x129 * -0x24,
                0x32b * 0x1 + -0xa + -0xe * 0x39,
                0x1554 + -0x3 * 0x2bb + 0x1 * -0xd1f
            ]), _0x8c60d0(_0x41224a);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20timesLimit', _0x2ae088 => {
        var _0x5aa5b5 = 0x1ad8 + 0x19ed * 0x1 + 0x34c5 * -0x1;
        async['timesLimit'](0xb * 0x101 + -0x2 * -0x10ac + -0x2c5f, -0x7f0 + -0xa62 + -0x4 * -0x495, async () => {
            return _0x5aa5b5 += 0x10c5 + -0x5fa + -0xaca, _0x5aa5b5;
        }, (_0x4e6092, _0x12f431) => {
            expect(_0x12f431)['to']['eql']([
                0x35f * -0x5 + 0x5e + 0x107e,
                -0x1de2 + -0x21 + 0x1e05,
                0x14b1 + -0x4ed * 0x1 + -0xfc1,
                0x11 * -0xdd + 0x5e * -0x23 + -0x1b8b * -0x1
            ]), _0x2ae088(_0x4e6092);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20timesSeries', _0x324ad7 => {
        var _0x4f6284 = 0x596 + -0x831 + 0x29b;
        async['timesSeries'](-0x1c5 * -0x7 + 0x36f * -0x2 + 0x581 * -0x1, async () => {
            return _0x4f6284 += 0x5 * -0x581 + -0x1052 + -0x2bd8 * -0x1, _0x4f6284;
        }, (_0x41c994, _0x9ba48e) => {
            expect(_0x9ba48e)['to']['eql']([
                0x210d * -0x1 + -0xb6b + 0xa5 * 0x45,
                0x1b8e + 0x7b2 + -0x233e,
                -0x5 * -0x403 + 0x15d3 * -0x1 + 0x1c7,
                -0x1201 + -0x3f * 0x9d + 0x715 * 0x8
            ]), _0x324ad7(_0x41c994);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20waterfall', _0x504652 => {
        async['waterfall']([
            async () => -0x5 * 0xad + 0x64 * 0x5f + -0x21ba,
            async _0x5508e7 => _0x5508e7 + (-0x1c02 + 0x1f5d * -0x1 + 0x3b60),
            async _0xea9b40 => [
                _0xea9b40,
                _0xea9b40 + (-0x3b3 + -0x1216 * 0x1 + 0x15ca * 0x1)
            ],
            async ([_0x5b60f5, _0x37e401]) => _0x5b60f5 + _0x37e401
        ], (_0x1efb15, _0x21ee8d) => {
            expect(_0x21ee8d)['to']['eql'](-0x1c99 + 0x35 * -0x8d + 0x1345 * 0x3), _0x504652(_0x1efb15);
        });
    }), it('should\x20handle\x20async\x20functons\x20in\x20tryEach', _0x251478 => {
        async['tryEach']([
            async () => {
                throw new Error('fail1');
            },
            async () => {
                throw new Error('fail2');
            },
            async () => -0x12e8 + 0xc * 0x14d + 0x351,
            async () => {
                throw new Error('shoult\x20not\x20get\x20here');
            }
        ], (_0x322678, _0x17d41f) => {
            expect(_0x17d41f)['to']['eql'](-0x1 * 0x1288 + -0x10d4 + 0x2361), _0x251478();
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20dir', _0x4ba3b4 => {
        async['dir'](async _0x3c1998 => _0x3c1998, 'foo'), setTimeout(_0x4ba3b4);
    }), it('should\x20handle\x20async\x20functions\x20in\x20log', _0x367562 => {
        async['log'](async _0x2d2c5b => _0x2d2c5b, 'foo'), setTimeout(_0x367562);
    }), it('should\x20handle\x20async\x20functions\x20in\x20ensureAsync', () => {
        var _0x35cd62 = async['ensureAsync'](_0x5bbf96);
        assert(_0x35cd62 === _0x5bbf96);
    }), it('should\x20handle\x20async\x20functions\x20in\x20memoize', _0x57a17c => {
        var _0x47ab23 = async['memoize'](_0x5bbf96);
        _0x47ab23(-0x1de2 + 0x1 * 0x24d8 + -0x6f5, () => {
            _0x47ab23(0x2ca * -0x9 + 0x93f + 0xfdc, _0x57a17c);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20reflect', _0x1f974b => {
        var _0x14a9a2 = async['reflect'](_0x5bbf96);
        _0x14a9a2(-0x142d + 0xa3b * -0x3 + 0x1 * 0x32df, (_0x2ff6b3, _0x363551) => {
            expect(_0x363551)['to']['eql']({ 'value': 0x1 }), _0x1f974b(_0x2ff6b3);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20reflect\x20(error\x20case)', _0xfadd2d => {
        var _0x441d39, _0x101a01 = async['reflect'](async () => {
                _0x441d39 = new Error('foo');
                throw _0x441d39;
            });
        _0x101a01(0x2fd + 0xac4 + -0xdc0, (_0x4177a8, _0x5f41c6) => {
            expect(_0x5f41c6)['to']['eql']({
                'error': _0x441d39,
                'value': undefined
            }), _0xfadd2d(_0x4177a8);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20timeout', _0x257e47 => {
        var _0xc666fc = async['timeout'](_0x5bbf96, -0xa9 * 0x12 + -0x64e * 0x2 + 0x5 * 0x4f0);
        _0xc666fc(0x166a + 0x2 * -0x4f + -0x15cb, (_0x255cfe, _0x1d4a8c) => {
            expect(_0x1d4a8c)['to']['eql'](0xb37 + -0xce7 + 0x1b1), _0x257e47(_0x255cfe);
        });
    }), it('should\x20handle\x20async\x20functions\x20in\x20timeout\x20(error\x20case)', _0x3ce49a => {
        var _0x409c36 = async['timeout'](async _0xa4ae0e => {
            return await new Promise(_0x4142d9 => setTimeout(_0x4142d9, 0x148b + -0x12a * -0x2 + -0x167b)), _0xa4ae0e;
        }, 0x1010 + 0x9 * 0x279 + -0x263d);
        _0x409c36(-0x18b * 0x17 + 0x2033 + 0x34b, _0x2d9a1b => {
            expect(_0x2d9a1b['message'])['to']['match'](/timed out/), _0x3ce49a();
        });
    });
};
