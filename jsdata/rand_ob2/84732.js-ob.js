const _0x3ece = [
    'a\x20middleware\x20factory\x20is\x20called\x20on\x20a\x20new\x20source\x20with\x20a\x20new\x20player',
    'the\x20factory\x20was\x20called\x20once',
    'vid2',
    'the\x20factory\x20was\x20called\x20again',
    'a\x20middleware\x20without\x20a\x20setSource\x20gets\x20chosen\x20implicitly',
    'we\x20have\x201\x20middleware\x20set',
    '301laIsmg',
    '2521DCLhFh',
    '874644dNSEYI',
    '26737CRExYs',
    '19qZIpqb',
    '58dayQDQ',
    '7337MqaYqM',
    '1wFNbPQ',
    '761227AcuzRA',
    '919052XkMupm',
    '177933blcPDA',
    'module',
    'Middleware',
    'clock',
    'useFakeTimers',
    'restore',
    'test',
    'middleware\x20can\x20be\x20added\x20with\x20the\x20use\x20method',
    'use',
    'foo',
    'equal',
    'getMiddleware',
    'pop',
    'we\x20are\x20able\x20to\x20add\x20middleware',
    'push',
    'get',
    'currentTime',
    'our\x20middleware\x20chain\x20return\x20currectly\x20for\x20',
    'deepEqual',
    'we\x20got\x20called\x20in\x20the\x20correct\x20order\x20for\x20',
    'duration',
    'middleware\x20set\x20iterates\x20through\x20the\x20middleware\x20array\x20in\x20the\x20right\x20order',
    'middleware\x20mediate\x20iterates\x20through\x20the\x20middleware\x20array\x20twice',
    'play',
    'middleware\x20got\x20called\x20the\x20same\x20number\x20of\x20times',
    'the\x20tech\x20method\x20only\x20gets\x20called\x20once',
    'both\x20middleware\x20got\x20called\x20after\x20the\x20tech',
    'then',
    'the\x20value\x20returned\x20by\x20the\x20tech\x20is\x20passed\x20through\x20the\x20middleware',
    'the\x20value\x20returned\x20to\x20the\x20player\x20is\x20the\x20value\x20returned\x20from\x20the\x20tech',
    'the\x20play\x20has\x20not\x20been\x20cancelled\x20in\x20middleware\x201',
    'middleware\x20mediate\x20allows\x20and\x20can\x20detect\x20cancellation',
    'TERMINATOR',
    'mediate',
    'both\x20middleware\x20run\x20until\x20middleware\x20terminates',
    'the\x20tech\x20should\x20not\x20be\x20called\x20if\x20a\x20middleware\x20terminates',
    'both\x20middleware\x20run\x20after\x20the\x20tech',
    'null\x20is\x20returned\x20through\x20the\x20middleware\x20if\x20a\x20middleware\x20terminated\x20previously',
    'the\x20play\x20has\x20been\x20cancelled\x20in\x20middleware\x201',
    'setSource\x20is\x20run\x20asynchronously',
    'setTimeout',
    'video/foo',
    'no\x20accumulator\x20was\x20returned\x20yet',
    'tick',
    'we\x20got\x20the\x20same\x20source\x20back',
    'length',
    'http://example.com/video.mp4',
    'vid1',
    'type',
    'we\x20selected\x20a\x20new\x20type\x20of\x20video/mp4',
    'src',
    'we\x20got\x20one\x20middleware',
    'we\x20chose\x20the\x20one\x20middleware',
    'setSource\x20can\x20select\x20multiple\x20middleware\x20from\x20multiple\x20types',
    'bar',
    'video/bar',
    'video/mp4',
    'setSource',
    'we\x20selected\x20a\x20new\x20src\x20of\x20video.mp4',
    'we\x20got\x20two\x20middleware',
    'barmw\x20is\x20the\x20first\x20middleware',
    'foomw\x20is\x20the\x20first\x20middleware',
    'a\x20middleware\x20without\x20a\x20mediator\x20method\x20will\x20not\x20throw\x20an\x20error',
    'pause',
    'pauseCalled\x20was\x20called\x20once\x20and\x20no\x20error\x20was\x20thrown',
    'a\x20middleware\x20factory\x20is\x20not\x20called\x20on\x20source\x20change',
    'the\x20factory\x20was\x20not\x20called\x20again'
];
const _0x2c871a = _0xd815;
(function (_0x1f0bf9, _0x45345e) {
    const _0x441ca0 = _0xd815;
    while (!![]) {
        try {
            const _0x3f51da = parseInt(_0x441ca0(0x98)) * -parseInt(_0x441ca0(0x99)) + parseInt(_0x441ca0(0x9a)) + parseInt(_0x441ca0(0x9b)) * parseInt(_0x441ca0(0x9c)) + parseInt(_0x441ca0(0x9d)) * -parseInt(_0x441ca0(0x9e)) + -parseInt(_0x441ca0(0x9f)) * parseInt(_0x441ca0(0xa0)) + parseInt(_0x441ca0(0xa1)) + parseInt(_0x441ca0(0xa2));
            if (_0x3f51da === _0x45345e)
                break;
            else
                _0x1f0bf9['push'](_0x1f0bf9['shift']());
        } catch (_0x201e1e) {
            _0x1f0bf9['push'](_0x1f0bf9['shift']());
        }
    }
}(_0x3ece, 0x82616));
function _0xd815(_0x2c98e9, _0x1cffbc) {
    return _0xd815 = function (_0x3ece91, _0xd815c0) {
        _0x3ece91 = _0x3ece91 - 0x98;
        let _0x4b2c8e = _0x3ece[_0x3ece91];
        return _0x4b2c8e;
    }, _0xd815(_0x2c98e9, _0x1cffbc);
}
import * as _0x350658 from '../../../src/js/tech/middleware.js';
import _0x3eb305 from 'sinon';
import _0x53ba92 from 'global/window';
QUnit[_0x2c871a(0xa3)](_0x2c871a(0xa4), {
    'beforeEach'(_0x564414) {
        const _0x448d32 = _0x2c871a;
        this[_0x448d32(0xa5)] = _0x3eb305[_0x448d32(0xa6)]();
    },
    'afterEach'(_0x3ca940) {
        const _0x51a127 = _0x2c871a;
        this['clock'][_0x51a127(0xa7)]();
    }
}), QUnit[_0x2c871a(0xa8)](_0x2c871a(0xa9), function (_0x5a5b4e) {
    const _0x34e703 = _0x2c871a, _0x4f97aa = {}, _0xe2bdaf = () => _0x4f97aa;
    _0x350658[_0x34e703(0xaa)](_0x34e703(0xab), _0xe2bdaf), _0x5a5b4e[_0x34e703(0xac)](_0x350658[_0x34e703(0xad)]('foo')[_0x34e703(0xae)](), _0xe2bdaf, _0x34e703(0xaf));
}), QUnit[_0x2c871a(0xa8)]('middleware\x20get\x20iterates\x20through\x20the\x20middleware\x20array\x20in\x20the\x20right\x20order', function (_0x5e6f08) {
    const _0x10a1ec = _0x2c871a, _0x177f11 = [], _0x529fad = [], _0x178aec = [], _0x1c1e9a = [
            {
                'currentTime'(_0x11a72f) {
                    const _0x4bce14 = _0xd815;
                    return _0x177f11[_0x4bce14(0xb0)](_0x11a72f), _0x11a72f * 0x2;
                },
                'duration'(_0x42748d) {
                    const _0x366324 = _0xd815;
                    return _0x529fad[_0x366324(0xb0)](_0x42748d), _0x42748d + 0x2;
                },
                'foo'(_0x867ed) {
                    const _0x4da0c5 = _0xd815;
                    return _0x178aec[_0x4da0c5(0xb0)](_0x867ed), _0x867ed / 0x2;
                }
            },
            {
                'currentTime'(_0x1ea346) {
                    const _0x3257dd = _0xd815;
                    return _0x177f11[_0x3257dd(0xb0)](_0x1ea346), _0x1ea346 + 0x2;
                },
                'duration'(_0x2e8402) {
                    return _0x529fad['push'](_0x2e8402), _0x2e8402 / 0x2;
                },
                'foo'(_0x59f008) {
                    const _0xbc3301 = _0xd815;
                    return _0x178aec[_0xbc3301(0xb0)](_0x59f008), _0x59f008 + 0x3;
                }
            }
        ], _0x1ce7ab = {
            'currentTime'(_0x1db8ff) {
                return 0x5;
            },
            'duration'(_0x2b6546) {
                return 0x5;
            },
            'foo'(_0x50ad09) {
                return 0x5;
            }
        }, _0x4f446f = _0x350658[_0x10a1ec(0xb1)](_0x1c1e9a, _0x1ce7ab, _0x10a1ec(0xb2)), _0x2ab4c2 = _0x350658['get'](_0x1c1e9a, _0x1ce7ab, 'duration'), _0x333614 = _0x350658[_0x10a1ec(0xb1)](_0x1c1e9a, _0x1ce7ab, _0x10a1ec(0xab)), _0x102d08 = (_0x4f30c8, _0x9f7cdf, _0x573556, _0x1ca5e4, _0x16fde9) => {
            const _0x2edd86 = _0x10a1ec;
            _0x5e6f08[_0x2edd86(0xac)](_0x4f30c8, _0x9f7cdf, _0x2edd86(0xb3) + _0x16fde9), _0x5e6f08[_0x2edd86(0xb4)](_0x573556, _0x1ca5e4, _0x2edd86(0xb5) + _0x16fde9);
        };
    _0x102d08(_0x4f446f, 0xe, _0x177f11, [
        0x5,
        0x7
    ], _0x10a1ec(0xb2)), _0x102d08(_0x2ab4c2, 4.5, _0x529fad, [
        0x5,
        2.5
    ], _0x10a1ec(0xb6)), _0x102d08(_0x333614, 0x4, _0x178aec, [
        0x5,
        0x8
    ], _0x10a1ec(0xab));
}), QUnit[_0x2c871a(0xa8)](_0x2c871a(0xb7), function (_0x2e4fb5) {
    const _0x117a62 = _0x2c871a, _0x50d34e = [], _0x294cf6 = [], _0x311008 = [], _0x43ce4b = [
            {
                'currentTime'(_0x5b3482) {
                    const _0x395c07 = _0xd815;
                    return _0x50d34e[_0x395c07(0xb0)](_0x5b3482), _0x5b3482 * 0x2;
                },
                'duration'(_0xc3e124) {
                    const _0x3113ec = _0xd815;
                    return _0x294cf6[_0x3113ec(0xb0)](_0xc3e124), _0xc3e124 + 0x2;
                },
                'foo'(_0x3dcf9b) {
                    const _0x17fa9a = _0xd815;
                    return _0x311008[_0x17fa9a(0xb0)](_0x3dcf9b), _0x3dcf9b / 0x2;
                }
            },
            {
                'currentTime'(_0x207d2d) {
                    const _0x36a0ea = _0xd815;
                    return _0x50d34e[_0x36a0ea(0xb0)](_0x207d2d), _0x207d2d + 0x2;
                },
                'duration'(_0xcd47ad) {
                    const _0x49b285 = _0xd815;
                    return _0x294cf6[_0x49b285(0xb0)](_0xcd47ad), _0xcd47ad / 0x2;
                },
                'foo'(_0x31e760) {
                    const _0xc1288e = _0xd815;
                    return _0x311008[_0xc1288e(0xb0)](_0x31e760), _0x31e760 + 0x3;
                }
            }
        ], _0x18aa95 = {
            'currentTime'(_0x422952) {
                const _0x1147a0 = _0xd815;
                return _0x50d34e[_0x1147a0(0xb0)](_0x422952), _0x422952 / 0x2;
            },
            'duration'(_0x49071c) {
                return _0x294cf6['push'](_0x49071c), _0x49071c;
            },
            'foo'(_0x924b21) {
                return _0x311008['push'](_0x924b21), _0x924b21;
            }
        }, _0x477370 = _0x350658['set'](_0x43ce4b, _0x18aa95, 'currentTime', 0xa), _0x1c1946 = _0x350658['set'](_0x43ce4b, _0x18aa95, _0x117a62(0xb6), 0xa), _0x3209a8 = _0x350658['set'](_0x43ce4b, _0x18aa95, _0x117a62(0xab), 0xa), _0x19e106 = (_0xc980c9, _0x2cf7a5, _0x3a6c94, _0x5369c2, _0x8a4c57) => {
            const _0x571117 = _0x117a62;
            _0x2e4fb5[_0x571117(0xac)](_0xc980c9, _0x2cf7a5, 'our\x20middleware\x20chain\x20return\x20currectly\x20for\x20' + _0x8a4c57), _0x2e4fb5[_0x571117(0xb4)](_0x3a6c94, _0x5369c2, 'we\x20got\x20called\x20in\x20the\x20correct\x20order\x20for\x20' + _0x8a4c57);
        };
    _0x19e106(_0x477370, 0xb, _0x50d34e, [
        0xa,
        0x14,
        0x16
    ], _0x117a62(0xb2)), _0x19e106(_0x1c1946, 0x6, _0x294cf6, [
        0xa,
        0xc,
        0x6
    ], _0x117a62(0xb6)), _0x19e106(_0x3209a8, 0x8, _0x311008, [
        0xa,
        0x5,
        0x8
    ], _0x117a62(0xab));
}), QUnit[_0x2c871a(0xa8)](_0x2c871a(0xb8), function (_0x32dd69) {
    const _0x3de03e = _0x2c871a;
    let _0x4ceb2f = 0x0, _0x3415ad = 0x0, _0x4ad4a8 = 0x0, _0x7e9ec0, _0x463dd9, _0x13d251, _0x16839c, _0x5bf5da;
    const _0x34ac4e = [
            {
                'callPlay'() {
                    _0x4ceb2f++;
                },
                'play'(_0x594217, _0x4f9e92) {
                    _0x3415ad++, _0x463dd9 = _0x4f9e92, _0x16839c = _0x594217;
                }
            },
            {
                'callPlay'() {
                    _0x4ceb2f++;
                },
                'play'(_0x3edf33, _0x3bbfdb) {
                    _0x3415ad++, _0x13d251 = _0x3bbfdb, _0x5bf5da = _0x3edf33;
                }
            }
        ], _0x3edc52 = {
            'play'() {
                return _0x4ad4a8++, _0x7e9ec0 = {
                    'then': () => {
                    }
                }, _0x7e9ec0;
            }
        }, _0x908bc8 = _0x350658['mediate'](_0x34ac4e, _0x3edc52, _0x3de03e(0xb9));
    _0x32dd69[_0x3de03e(0xac)](_0x4ceb2f, _0x3415ad, _0x3de03e(0xba)), _0x32dd69[_0x3de03e(0xac)](_0x4ceb2f, 0x2, 'both\x20middleware\x20got\x20called\x20before\x20the\x20tech'), _0x32dd69[_0x3de03e(0xac)](_0x4ad4a8, 0x1, _0x3de03e(0xbb)), _0x32dd69[_0x3de03e(0xac)](_0x3415ad, 0x2, _0x3de03e(0xbc)), _0x32dd69['deepEqual'](_0x463dd9[_0x3de03e(0xbd)], _0x7e9ec0[_0x3de03e(0xbd)], _0x3de03e(0xbe)), _0x32dd69[_0x3de03e(0xb4)](_0x13d251, _0x7e9ec0, 'the\x20value\x20returned\x20by\x20the\x20tech\x20is\x20passed\x20through\x20the\x20middleware'), _0x32dd69[_0x3de03e(0xb4)](_0x908bc8, _0x7e9ec0, _0x3de03e(0xbf)), _0x32dd69[_0x3de03e(0xac)](_0x16839c, ![], _0x3de03e(0xc0)), _0x32dd69['equal'](_0x5bf5da, ![], 'the\x20play\x20has\x20not\x20been\x20cancelled\x20in\x20middleware\x202');
}), QUnit[_0x2c871a(0xa8)](_0x2c871a(0xc1), function (_0x2d0a91) {
    const _0x30e785 = _0x2c871a;
    let _0x556258 = 0x0, _0x337f00 = 0x0, _0x458665 = 0x0, _0x124ee1, _0x55229b, _0xe9926c, _0x4ab472;
    const _0xbd20ea = [
            {
                'callPlay'() {
                    _0x556258++;
                },
                'play'(_0x41d4aa, _0x15cd68) {
                    _0x337f00++, _0x124ee1 = _0x15cd68, _0xe9926c = _0x41d4aa;
                }
            },
            {
                'callPlay'() {
                    const _0x3d41c7 = _0xd815;
                    return _0x556258++, _0x350658[_0x3d41c7(0xc2)];
                },
                'play'(_0x2ddc11, _0x42458e) {
                    _0x337f00++, _0x55229b = _0x42458e, _0x4ab472 = _0x2ddc11;
                }
            }
        ], _0x4f21a8 = {
            'play'() {
                return _0x458665++, {
                    'then': () => {
                    }
                };
            }
        }, _0x7ac998 = _0x350658[_0x30e785(0xc3)](_0xbd20ea, _0x4f21a8, 'play');
    _0x2d0a91[_0x30e785(0xac)](_0x556258, 0x2, _0x30e785(0xc4)), _0x2d0a91[_0x30e785(0xac)](_0x458665, 0x0, _0x30e785(0xc5)), _0x2d0a91['equal'](_0x337f00, 0x2, _0x30e785(0xc6)), _0x2d0a91[_0x30e785(0xac)](_0x124ee1, null, _0x30e785(0xc7)), _0x2d0a91[_0x30e785(0xac)](_0x55229b, null, _0x30e785(0xc7)), _0x2d0a91[_0x30e785(0xac)](_0x7ac998, null, 'null\x20is\x20returned\x20to\x20the\x20player\x20if\x20a\x20middleware\x20terminated\x20previously'), _0x2d0a91[_0x30e785(0xac)](_0xe9926c, !![], _0x30e785(0xc8)), _0x2d0a91[_0x30e785(0xac)](_0x4ab472, !![], 'the\x20play\x20has\x20been\x20cancelled\x20in\x20middleware\x202');
}), QUnit[_0x2c871a(0xa8)](_0x2c871a(0xc9), function (_0xb43e04) {
    const _0x371093 = _0x2c871a;
    let _0x116695, _0x3761ae;
    _0x350658['setSource']({
        'id'() {
            return 'vid1';
        },
        'setTimeout': _0x53ba92[_0x371093(0xca)]
    }, {
        'src': _0x371093(0xab),
        'type': _0x371093(0xcb)
    }, function (_0x51703b, _0x3b4fd8) {
        _0x116695 = _0x51703b, _0x3761ae = _0x3b4fd8;
    }), _0xb43e04[_0x371093(0xac)](_0x116695, undefined, 'no\x20src\x20was\x20returned\x20yet'), _0xb43e04['equal'](_0x3761ae, undefined, _0x371093(0xcc)), this[_0x371093(0xa5)][_0x371093(0xcd)](0x1), _0xb43e04['deepEqual'](_0x116695, {
        'src': _0x371093(0xab),
        'type': _0x371093(0xcb)
    }, _0x371093(0xce)), _0xb43e04[_0x371093(0xac)](_0x3761ae[_0x371093(0xcf)], 0x0, 'we\x20did\x20not\x20accumulate\x20any\x20middleware\x20since\x20there\x20were\x20none');
}), QUnit['test']('setSource\x20selects\x20a\x20source\x20based\x20on\x20the\x20middleware\x20given', function (_0x51bbba) {
    const _0x1b904f = _0x2c871a;
    let _0x358ca6, _0x20feb3;
    const _0x1d42fd = {
            'setSource'(_0x3346d8, _0x422f59) {
                const _0x178fdd = _0xd815;
                _0x422f59(null, {
                    'src': _0x178fdd(0xd0),
                    'type': 'video/mp4'
                });
            }
        }, _0xcc1c84 = () => _0x1d42fd;
    _0x350658[_0x1b904f(0xaa)](_0x1b904f(0xcb), _0xcc1c84), _0x350658['setSource']({
        'id'() {
            const _0x44e722 = _0x1b904f;
            return _0x44e722(0xd1);
        },
        'setTimeout': _0x53ba92[_0x1b904f(0xca)]
    }, {
        'src': 'foo',
        'type': _0x1b904f(0xcb)
    }, function (_0x28f6dc, _0x5370aa) {
        _0x358ca6 = _0x28f6dc, _0x20feb3 = _0x5370aa;
    }), this[_0x1b904f(0xa5)]['tick'](0x1), _0x51bbba[_0x1b904f(0xac)](_0x358ca6[_0x1b904f(0xd2)], 'video/mp4', _0x1b904f(0xd3)), _0x51bbba[_0x1b904f(0xac)](_0x358ca6[_0x1b904f(0xd4)], 'http://example.com/video.mp4', 'we\x20selected\x20a\x20new\x20src\x20of\x20video.mp4'), _0x51bbba[_0x1b904f(0xac)](_0x20feb3[_0x1b904f(0xcf)], 0x1, _0x1b904f(0xd5)), _0x51bbba['equal'](_0x20feb3[0x0], _0x1d42fd, _0x1b904f(0xd6)), _0x350658[_0x1b904f(0xad)](_0x1b904f(0xcb))[_0x1b904f(0xae)]();
}), QUnit[_0x2c871a(0xa8)](_0x2c871a(0xd7), function (_0x375958) {
    const _0x5194e3 = _0x2c871a;
    let _0x432c94, _0x54dac2;
    const _0x428dd8 = {
            'setSource'(_0x1bd12f, _0x461389) {
                const _0x1f8501 = _0xd815;
                _0x461389(null, {
                    'src': _0x1f8501(0xd8),
                    'type': _0x1f8501(0xd9)
                });
            }
        }, _0x495ad2 = {
            'setSource'(_0x17fffb, _0x1b9cc2) {
                const _0x345ac6 = _0xd815;
                _0x1b9cc2(null, {
                    'src': _0x345ac6(0xd0),
                    'type': _0x345ac6(0xda)
                });
            }
        }, _0x2ea6b9 = () => _0x428dd8, _0x4f0e9c = () => _0x495ad2;
    _0x350658[_0x5194e3(0xaa)](_0x5194e3(0xcb), _0x2ea6b9), _0x350658[_0x5194e3(0xaa)](_0x5194e3(0xd9), _0x4f0e9c), _0x350658[_0x5194e3(0xdb)]({
        'id'() {
            return 'vid1';
        },
        'setTimeout': _0x53ba92[_0x5194e3(0xca)]
    }, {
        'src': _0x5194e3(0xab),
        'type': _0x5194e3(0xcb)
    }, function (_0xe8c7f7, _0x461983) {
        _0x432c94 = _0xe8c7f7, _0x54dac2 = _0x461983;
    }), this[_0x5194e3(0xa5)][_0x5194e3(0xcd)](0x1), _0x375958['equal'](_0x432c94['type'], 'video/mp4', _0x5194e3(0xd3)), _0x375958[_0x5194e3(0xac)](_0x432c94[_0x5194e3(0xd4)], _0x5194e3(0xd0), _0x5194e3(0xdc)), _0x375958['equal'](_0x54dac2[_0x5194e3(0xcf)], 0x2, _0x5194e3(0xdd)), _0x375958[_0x5194e3(0xac)](_0x54dac2[0x0], _0x428dd8, 'foomw\x20is\x20the\x20first\x20middleware'), _0x375958[_0x5194e3(0xac)](_0x54dac2[0x1], _0x495ad2, _0x5194e3(0xde)), _0x350658[_0x5194e3(0xad)]('video/foo')['pop'](), _0x350658[_0x5194e3(0xad)](_0x5194e3(0xd9))['pop']();
}), QUnit[_0x2c871a(0xa8)]('setSource\x20will\x20select\x20all\x20middleware\x20of\x20a\x20given\x20type,\x20until\x20src\x20change', function (_0x26a09b) {
    const _0x56181e = _0x2c871a;
    let _0x2e36b0, _0x4aa98e;
    const _0x4589cd = {
            'setSource'(_0x16b668, _0x447eed) {
                const _0x3d249a = _0xd815;
                _0x447eed(null, {
                    'src': _0x3d249a(0xd8),
                    'type': _0x3d249a(0xcb)
                });
            }
        }, _0x32619f = {
            'setSource'(_0x4d4d02, _0x114467) {
                const _0x5d0d38 = _0xd815;
                _0x114467(null, {
                    'src': _0x5d0d38(0xd0),
                    'type': _0x5d0d38(0xda)
                });
            }
        }, _0x2928fa = {
            'setSource'(_0x566816, _0x57316e) {
                const _0x4da5a2 = _0xd815;
                _0x57316e(null, {
                    'src': _0x4da5a2(0xd0),
                    'type': _0x4da5a2(0xda)
                });
            }
        }, _0x5f376f = () => _0x4589cd, _0x19ea93 = () => _0x32619f, _0x40d517 = () => _0x2928fa;
    _0x350658[_0x56181e(0xaa)](_0x56181e(0xcb), _0x5f376f), _0x350658[_0x56181e(0xaa)]('video/foo', _0x19ea93), _0x350658['use'](_0x56181e(0xcb), _0x40d517), _0x350658[_0x56181e(0xdb)]({
        'id'() {
            const _0x4e650c = _0x56181e;
            return _0x4e650c(0xd1);
        },
        'setTimeout': _0x53ba92['setTimeout']
    }, {
        'src': _0x56181e(0xab),
        'type': _0x56181e(0xcb)
    }, function (_0x5b3c32, _0x460774) {
        _0x2e36b0 = _0x5b3c32, _0x4aa98e = _0x460774;
    }), this[_0x56181e(0xa5)]['tick'](0x1), _0x26a09b[_0x56181e(0xac)](_0x2e36b0[_0x56181e(0xd2)], _0x56181e(0xda), _0x56181e(0xd3)), _0x26a09b[_0x56181e(0xac)](_0x2e36b0[_0x56181e(0xd4)], _0x56181e(0xd0), _0x56181e(0xdc)), _0x26a09b[_0x56181e(0xac)](_0x4aa98e['length'], 0x2, 'we\x20got\x20two\x20middleware'), _0x26a09b['equal'](_0x4aa98e[0x0], _0x4589cd, 'foomw\x20is\x20the\x20first\x20middleware'), _0x26a09b[_0x56181e(0xac)](_0x4aa98e[0x1], _0x32619f, _0x56181e(0xdf)), _0x350658[_0x56181e(0xad)](_0x56181e(0xcb))[_0x56181e(0xae)](), _0x350658[_0x56181e(0xad)]('video/foo')['pop'](), _0x350658[_0x56181e(0xad)](_0x56181e(0xcb))[_0x56181e(0xae)]();
}), QUnit['test'](_0x2c871a(0xe0), function (_0x546869) {
    const _0x450ddd = _0x2c871a;
    let _0x59eb91 = 0x0;
    const _0xe8271 = {}, _0x2477c5 = () => _0xe8271, _0x4b7e5d = () => ({
            'pause'() {
                _0x59eb91++;
            }
        });
    _0x350658['mediate']([
        _0x2477c5(),
        _0x4b7e5d()
    ], {
        'pause': () => {
        }
    }, _0x450ddd(0xe1)), _0x546869[_0x450ddd(0xac)](_0x59eb91, 0x1, _0x450ddd(0xe2));
}), QUnit['test'](_0x2c871a(0xe3), function (_0x2a0c5d) {
    const _0x150223 = _0x2c871a;
    let _0x40c576 = 0x0;
    const _0x4716ce = {
            'setSource'(_0x3063e4, _0x1d3071) {
                const _0x4a7c18 = _0xd815;
                _0x1d3071(null, {
                    'src': _0x4a7c18(0xd0),
                    'type': _0x4a7c18(0xda)
                });
            }
        }, _0x426495 = () => {
            return _0x40c576++, _0x4716ce;
        };
    _0x350658['use']('video/foo', _0x426495), _0x350658[_0x150223(0xdb)]({
        'id'() {
            const _0x431199 = _0x150223;
            return _0x431199(0xd1);
        },
        'setTimeout': _0x53ba92[_0x150223(0xca)]
    }, {
        'src': _0x150223(0xab),
        'type': _0x150223(0xcb)
    }, function () {
    }), this[_0x150223(0xa5)][_0x150223(0xcd)](0x1), _0x2a0c5d[_0x150223(0xac)](_0x40c576, 0x1, 'the\x20factory\x20was\x20called\x20once'), _0x350658[_0x150223(0xdb)]({
        'id'() {
            return 'vid1';
        },
        'setTimeout': _0x53ba92['setTimeout']
    }, {
        'src': 'bar',
        'type': 'video/foo'
    }, function () {
    }), this['clock'][_0x150223(0xcd)](0x1), _0x2a0c5d[_0x150223(0xac)](_0x40c576, 0x1, _0x150223(0xe4)), _0x350658[_0x150223(0xad)](_0x150223(0xcb))[_0x150223(0xae)]();
}), QUnit[_0x2c871a(0xa8)](_0x2c871a(0xe5), function (_0x402e45) {
    const _0x4b2fe7 = _0x2c871a;
    let _0x35a98b = 0x0;
    const _0xe52f85 = {
            'setSource'(_0x339fbf, _0x48136d) {
                const _0x2186fc = _0xd815;
                _0x48136d(null, {
                    'src': _0x2186fc(0xd0),
                    'type': 'video/mp4'
                });
            }
        }, _0x487817 = () => {
            return _0x35a98b++, _0xe52f85;
        };
    _0x350658['use'](_0x4b2fe7(0xcb), _0x487817), _0x350658['setSource']({
        'id'() {
            return 'vid1';
        },
        'setTimeout': _0x53ba92[_0x4b2fe7(0xca)]
    }, {
        'src': _0x4b2fe7(0xab),
        'type': _0x4b2fe7(0xcb)
    }, function () {
    }), this[_0x4b2fe7(0xa5)][_0x4b2fe7(0xcd)](0x1), _0x402e45['equal'](_0x35a98b, 0x1, _0x4b2fe7(0xe6)), _0x350658['setSource']({
        'id'() {
            const _0x5aac61 = _0x4b2fe7;
            return _0x5aac61(0xe7);
        },
        'setTimeout': _0x53ba92[_0x4b2fe7(0xca)]
    }, {
        'src': 'bar',
        'type': 'video/foo'
    }, function () {
    }), this[_0x4b2fe7(0xa5)]['tick'](0x1), _0x402e45['equal'](_0x35a98b, 0x2, _0x4b2fe7(0xe8)), _0x350658[_0x4b2fe7(0xad)]('video/foo')[_0x4b2fe7(0xae)]();
}), QUnit[_0x2c871a(0xa8)](_0x2c871a(0xe9), function (_0x463ac0) {
    const _0xa409c7 = _0x2c871a;
    let _0x477819 = [];
    const _0x4bdca0 = {
            'currentTime'(_0x4a7c9b) {
            }
        }, _0x5d143e = () => _0x4bdca0;
    _0x350658[_0xa409c7(0xaa)](_0xa409c7(0xcb), _0x5d143e), _0x350658[_0xa409c7(0xdb)]({
        'id'() {
            return 'vid1';
        },
        'setTimeout': _0x53ba92[_0xa409c7(0xca)]
    }, {
        'src': _0xa409c7(0xab),
        'type': _0xa409c7(0xcb)
    }, function (_0x5a8d80, _0x2ca0df) {
        _0x477819 = _0x2ca0df;
    }), this[_0xa409c7(0xa5)][_0xa409c7(0xcd)](0x1), _0x463ac0['equal'](_0x477819[_0xa409c7(0xcf)], 0x1, _0xa409c7(0xea)), _0x350658[_0xa409c7(0xad)](_0xa409c7(0xcb))[_0xa409c7(0xae)]();
});
