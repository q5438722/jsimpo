import * as _0x309926 from '../../../src/js/tech/middleware.js';
import _0x35aaae from 'sinon';
import _0x537c8b from 'global/window';
QUnit['module']('Middleware', {
    'beforeEach'(_0x1c57d3) {
        this['clock'] = _0x35aaae['useFakeTimers']();
    },
    'afterEach'(_0x36df42) {
        this['clock']['restore']();
    }
}), QUnit['test']('middleware\x20can\x20be\x20added\x20with\x20the\x20use\x20method', function (_0x13f42e) {
    const _0x24bdb8 = {}, _0x395431 = () => _0x24bdb8;
    _0x309926['use']('foo', _0x395431), _0x13f42e['equal'](_0x309926['getMiddleware']('foo')['pop'](), _0x395431, 'we\x20are\x20able\x20to\x20add\x20middleware');
}), QUnit['test']('middleware\x20get\x20iterates\x20through\x20the\x20middleware\x20array\x20in\x20the\x20right\x20order', function (_0x4052a6) {
    const _0x45e877 = [], _0x4df4d0 = [], _0x5dc77e = [], _0x177a2b = [
            {
                'currentTime'(_0x50d6bc) {
                    return _0x45e877['push'](_0x50d6bc), _0x50d6bc * (-0x174b + 0x1f07 + -0x7ba);
                },
                'duration'(_0x10d8cf) {
                    return _0x4df4d0['push'](_0x10d8cf), _0x10d8cf + (0xcc1 + 0x2013 + -0x2cd2);
                },
                'foo'(_0x165a49) {
                    return _0x5dc77e['push'](_0x165a49), _0x165a49 / (0xf4 * -0x3 + 0x1745 + -0x1467);
                }
            },
            {
                'currentTime'(_0x494e32) {
                    return _0x45e877['push'](_0x494e32), _0x494e32 + (0x1 * -0x2515 + -0x1a29 + 0x3f40);
                },
                'duration'(_0x4307bf) {
                    return _0x4df4d0['push'](_0x4307bf), _0x4307bf / (0x1 * 0x17e5 + -0xab + 0x1738 * -0x1);
                },
                'foo'(_0x28f036) {
                    return _0x5dc77e['push'](_0x28f036), _0x28f036 + (-0x1 * 0x5b7 + 0x7a5 + -0x1eb * 0x1);
                }
            }
        ], _0x1a1416 = {
            'currentTime'(_0xe8fd6) {
                return 0x4 * -0x24b + 0x26 * 0x83 + -0xa41;
            },
            'duration'(_0x192173) {
                return 0x1b6d + 0xf7 + -0x1c5f;
            },
            'foo'(_0x29f00d) {
                return -0x1c7 + 0x6 * -0x3fd + 0x19ba;
            }
        }, _0x52df53 = _0x309926['get'](_0x177a2b, _0x1a1416, 'currentTime'), _0x32d81d = _0x309926['get'](_0x177a2b, _0x1a1416, 'duration'), _0x424a8c = _0x309926['get'](_0x177a2b, _0x1a1416, 'foo'), _0x264c03 = (_0x366577, _0x43ea1c, _0x23c540, _0x41a3a7, _0x39449b) => {
            _0x4052a6['equal'](_0x366577, _0x43ea1c, 'our\x20middleware\x20chain\x20return\x20currectly\x20for\x20' + _0x39449b), _0x4052a6['deepEqual'](_0x23c540, _0x41a3a7, 'we\x20got\x20called\x20in\x20the\x20correct\x20order\x20for\x20' + _0x39449b);
        };
    _0x264c03(_0x52df53, -0x658 + 0x2 * -0xb2f + -0x20e * -0xe, _0x45e877, [
        0x304 * -0x6 + -0x1fe8 * -0x1 + -0x3 * 0x499,
        -0x4ee * -0x1 + 0x920 + -0x1 * 0xe07
    ], 'currentTime'), _0x264c03(_0x32d81d, -0xb12 * 0x1 + -0x25 * -0x62 + -0x4 * 0xc5 + 0.5, _0x4df4d0, [
        0x10e * -0x1b + -0x969 + 0x25e8,
        0xf25 + -0xd * 0xc9 + -0x4ee + 0.5
    ], 'duration'), _0x264c03(_0x424a8c, 0x1 * -0x49c + -0x1 * 0x2546 + 0x29e6, _0x5dc77e, [
        0xa5c + -0xec5 + 0x46e,
        -0x7 * -0x4df + -0x15db + -0xc36
    ], 'foo');
}), QUnit['test']('middleware\x20set\x20iterates\x20through\x20the\x20middleware\x20array\x20in\x20the\x20right\x20order', function (_0x3f61aa) {
    const _0x221046 = [], _0x58806b = [], _0x91095e = [], _0x142612 = [
            {
                'currentTime'(_0x17e5c9) {
                    return _0x221046['push'](_0x17e5c9), _0x17e5c9 * (-0x553 * -0x7 + 0x754 + -0x2c97);
                },
                'duration'(_0xc461e0) {
                    return _0x58806b['push'](_0xc461e0), _0xc461e0 + (0x10a7 + 0x1 * -0x757 + 0x4a7 * -0x2);
                },
                'foo'(_0x338730) {
                    return _0x91095e['push'](_0x338730), _0x338730 / (-0x1 * 0xda1 + 0x1 * -0x11cb + 0x1f6e);
                }
            },
            {
                'currentTime'(_0x5495b1) {
                    return _0x221046['push'](_0x5495b1), _0x5495b1 + (0x5 * 0x1d5 + -0x89 * 0x2d + 0xeee);
                },
                'duration'(_0x143bd6) {
                    return _0x58806b['push'](_0x143bd6), _0x143bd6 / (0x1805 + -0x204f + 0x24 * 0x3b);
                },
                'foo'(_0x13f23d) {
                    return _0x91095e['push'](_0x13f23d), _0x13f23d + (-0x107 * -0x14 + 0x22c7 * -0x1 + 0xe3e);
                }
            }
        ], _0x1e06d1 = {
            'currentTime'(_0x7ef67c) {
                return _0x221046['push'](_0x7ef67c), _0x7ef67c / (-0x1f22 + -0x12fd * -0x1 + -0x11 * -0xb7);
            },
            'duration'(_0x56e533) {
                return _0x58806b['push'](_0x56e533), _0x56e533;
            },
            'foo'(_0x1d7c56) {
                return _0x91095e['push'](_0x1d7c56), _0x1d7c56;
            }
        }, _0x2d4fc4 = _0x309926['set'](_0x142612, _0x1e06d1, 'currentTime', -0x24b9 * -0x1 + -0x3b * -0x75 + 0x2 * -0x1fd3), _0x4be12a = _0x309926['set'](_0x142612, _0x1e06d1, 'duration', -0x2d2 + 0x1ede + -0x2cd * 0xa), _0x13a9ae = _0x309926['set'](_0x142612, _0x1e06d1, 'foo', -0x1f4 * -0x4 + 0x2 * -0x2ef + -0x2 * 0xf4), _0x74eb80 = (_0x26c222, _0x3d8d3d, _0x58b046, _0x11e3fe, _0x180e78) => {
            _0x3f61aa['equal'](_0x26c222, _0x3d8d3d, 'our\x20middleware\x20chain\x20return\x20currectly\x20for\x20' + _0x180e78), _0x3f61aa['deepEqual'](_0x58b046, _0x11e3fe, 'we\x20got\x20called\x20in\x20the\x20correct\x20order\x20for\x20' + _0x180e78);
        };
    _0x74eb80(_0x2d4fc4, -0x15 * -0xe + -0x1079 * -0x1 + -0x1194, _0x221046, [
        0x8d + 0x106 + -0x189,
        -0x1f52 + -0x3c7 + -0x232d * -0x1,
        0x1103 + 0x2375 + -0x3462
    ], 'currentTime'), _0x74eb80(_0x4be12a, -0x24aa + -0x40f * -0x9 + 0x29, _0x58806b, [
        0x2 * -0xcbe + -0x5a4 + -0x1 * -0x1f2a,
        -0x8 * 0x19b + 0xcb3 * 0x1 + -0x7 * -0x7,
        -0x15c9 + -0x25 * -0xb + 0x1438
    ], 'duration'), _0x74eb80(_0x13a9ae, 0x7 * 0x3d7 + 0x6 + 0x1adf * -0x1, _0x91095e, [
        0x1485 + 0x11bb + -0x2636,
        0x240e + 0x1 * -0x1f9a + -0x46f,
        0x11aa + -0x1 * 0xf6d + 0x71 * -0x5
    ], 'foo');
}), QUnit['test']('middleware\x20mediate\x20iterates\x20through\x20the\x20middleware\x20array\x20twice', function (_0x10b960) {
    let _0x30f788 = 0x740 * -0x3 + 0x2626 * -0x1 + -0x2b9 * -0x16, _0x5cae03 = -0x2 * -0x3d7 + -0x147 * 0xd + 0x8ed, _0x230e6d = 0xd66 + -0x299 * 0x8 + -0xd2 * -0x9, _0x1cf117, _0x47fe30, _0x1adc31, _0x3f5227, _0x5782fb;
    const _0x384713 = [
            {
                'callPlay'() {
                    _0x30f788++;
                },
                'play'(_0x141d43, _0x224120) {
                    _0x5cae03++, _0x47fe30 = _0x224120, _0x3f5227 = _0x141d43;
                }
            },
            {
                'callPlay'() {
                    _0x30f788++;
                },
                'play'(_0x22108b, _0x3bbe0c) {
                    _0x5cae03++, _0x1adc31 = _0x3bbe0c, _0x5782fb = _0x22108b;
                }
            }
        ], _0x3180f8 = {
            'play'() {
                return _0x230e6d++, _0x1cf117 = {
                    'then': () => {
                    }
                }, _0x1cf117;
            }
        }, _0x44d108 = _0x309926['mediate'](_0x384713, _0x3180f8, 'play');
    _0x10b960['equal'](_0x30f788, _0x5cae03, 'middleware\x20got\x20called\x20the\x20same\x20number\x20of\x20times'), _0x10b960['equal'](_0x30f788, -0x44a + -0x2483 + 0x28cf, 'both\x20middleware\x20got\x20called\x20before\x20the\x20tech'), _0x10b960['equal'](_0x230e6d, 0x1959 * -0x1 + 0xa4b * -0x3 + 0xb3f * 0x5, 'the\x20tech\x20method\x20only\x20gets\x20called\x20once'), _0x10b960['equal'](_0x5cae03, -0x3f1 + -0x1ba6 + 0x1f99, 'both\x20middleware\x20got\x20called\x20after\x20the\x20tech'), _0x10b960['deepEqual'](_0x47fe30['then'], _0x1cf117['then'], 'the\x20value\x20returned\x20by\x20the\x20tech\x20is\x20passed\x20through\x20the\x20middleware'), _0x10b960['deepEqual'](_0x1adc31, _0x1cf117, 'the\x20value\x20returned\x20by\x20the\x20tech\x20is\x20passed\x20through\x20the\x20middleware'), _0x10b960['deepEqual'](_0x44d108, _0x1cf117, 'the\x20value\x20returned\x20to\x20the\x20player\x20is\x20the\x20value\x20returned\x20from\x20the\x20tech'), _0x10b960['equal'](_0x3f5227, ![], 'the\x20play\x20has\x20not\x20been\x20cancelled\x20in\x20middleware\x201'), _0x10b960['equal'](_0x5782fb, ![], 'the\x20play\x20has\x20not\x20been\x20cancelled\x20in\x20middleware\x202');
}), QUnit['test']('middleware\x20mediate\x20allows\x20and\x20can\x20detect\x20cancellation', function (_0x2aabac) {
    let _0x3a6005 = -0x28 * 0x67 + 0x16db + -0x6c3, _0x4022ef = 0x7ac + 0x1 * -0x2231 + -0x5d * -0x49, _0x482f9c = 0x4 * -0x2dd + -0x1 * -0x2272 + -0x16fe, _0x11eacc, _0x44cb6c, _0x10e944, _0x5257d2;
    const _0x29c8df = [
            {
                'callPlay'() {
                    _0x3a6005++;
                },
                'play'(_0x30a15a, _0x1a6813) {
                    _0x4022ef++, _0x11eacc = _0x1a6813, _0x10e944 = _0x30a15a;
                }
            },
            {
                'callPlay'() {
                    return _0x3a6005++, _0x309926['TERMINATOR'];
                },
                'play'(_0x11be5b, _0x364bce) {
                    _0x4022ef++, _0x44cb6c = _0x364bce, _0x5257d2 = _0x11be5b;
                }
            }
        ], _0x141cd9 = {
            'play'() {
                return _0x482f9c++, {
                    'then': () => {
                    }
                };
            }
        }, _0x595f16 = _0x309926['mediate'](_0x29c8df, _0x141cd9, 'play');
    _0x2aabac['equal'](_0x3a6005, -0x252e + 0x811 * 0x3 + -0x1 * -0xcfd, 'both\x20middleware\x20run\x20until\x20middleware\x20terminates'), _0x2aabac['equal'](_0x482f9c, -0x5 * 0x204 + 0x1 * -0x1acb + 0x24df * 0x1, 'the\x20tech\x20should\x20not\x20be\x20called\x20if\x20a\x20middleware\x20terminates'), _0x2aabac['equal'](_0x4022ef, -0x1 * 0x1785 + -0xe3b + 0x25c2, 'both\x20middleware\x20run\x20after\x20the\x20tech'), _0x2aabac['equal'](_0x11eacc, null, 'null\x20is\x20returned\x20through\x20the\x20middleware\x20if\x20a\x20middleware\x20terminated\x20previously'), _0x2aabac['equal'](_0x44cb6c, null, 'null\x20is\x20returned\x20through\x20the\x20middleware\x20if\x20a\x20middleware\x20terminated\x20previously'), _0x2aabac['equal'](_0x595f16, null, 'null\x20is\x20returned\x20to\x20the\x20player\x20if\x20a\x20middleware\x20terminated\x20previously'), _0x2aabac['equal'](_0x10e944, !![], 'the\x20play\x20has\x20been\x20cancelled\x20in\x20middleware\x201'), _0x2aabac['equal'](_0x5257d2, !![], 'the\x20play\x20has\x20been\x20cancelled\x20in\x20middleware\x202');
}), QUnit['test']('setSource\x20is\x20run\x20asynchronously', function (_0x47b096) {
    let _0x971faf, _0x4d7ec1;
    _0x309926['setSource']({
        'id'() {
            return 'vid1';
        },
        'setTimeout': _0x537c8b['setTimeout']
    }, {
        'src': 'foo',
        'type': 'video/foo'
    }, function (_0x1e58c4, _0x27e5dd) {
        _0x971faf = _0x1e58c4, _0x4d7ec1 = _0x27e5dd;
    }), _0x47b096['equal'](_0x971faf, undefined, 'no\x20src\x20was\x20returned\x20yet'), _0x47b096['equal'](_0x4d7ec1, undefined, 'no\x20accumulator\x20was\x20returned\x20yet'), this['clock']['tick'](-0x370 * -0x2 + -0x4 * -0x527 + 0x1b7b * -0x1), _0x47b096['deepEqual'](_0x971faf, {
        'src': 'foo',
        'type': 'video/foo'
    }, 'we\x20got\x20the\x20same\x20source\x20back'), _0x47b096['equal'](_0x4d7ec1['length'], 0x199c + 0xb85 + -0x2521, 'we\x20did\x20not\x20accumulate\x20any\x20middleware\x20since\x20there\x20were\x20none');
}), QUnit['test']('setSource\x20selects\x20a\x20source\x20based\x20on\x20the\x20middleware\x20given', function (_0x579e1e) {
    let _0xcc5c15, _0x1aced7;
    const _0x55653e = {
            'setSource'(_0x4a75bd, _0x1f587a) {
                _0x1f587a(null, {
                    'src': 'http://example.com/video.mp4',
                    'type': 'video/mp4'
                });
            }
        }, _0x2fc96f = () => _0x55653e;
    _0x309926['use']('video/foo', _0x2fc96f), _0x309926['setSource']({
        'id'() {
            return 'vid1';
        },
        'setTimeout': _0x537c8b['setTimeout']
    }, {
        'src': 'foo',
        'type': 'video/foo'
    }, function (_0x26fc58, _0x4e8299) {
        _0xcc5c15 = _0x26fc58, _0x1aced7 = _0x4e8299;
    }), this['clock']['tick'](-0x8 * -0x18 + -0x19 * -0x115 + -0x1 * 0x1bcc), _0x579e1e['equal'](_0xcc5c15['type'], 'video/mp4', 'we\x20selected\x20a\x20new\x20type\x20of\x20video/mp4'), _0x579e1e['equal'](_0xcc5c15['src'], 'http://example.com/video.mp4', 'we\x20selected\x20a\x20new\x20src\x20of\x20video.mp4'), _0x579e1e['equal'](_0x1aced7['length'], -0x2342 + 0x608 + 0x1d3b, 'we\x20got\x20one\x20middleware'), _0x579e1e['equal'](_0x1aced7[-0xe70 + -0x3 * 0xab6 + 0xf86 * 0x3], _0x55653e, 'we\x20chose\x20the\x20one\x20middleware'), _0x309926['getMiddleware']('video/foo')['pop']();
}), QUnit['test']('setSource\x20can\x20select\x20multiple\x20middleware\x20from\x20multiple\x20types', function (_0x2183b8) {
    let _0x535ed5, _0x3ad5a8;
    const _0x5ecd86 = {
            'setSource'(_0x185812, _0x20e4a3) {
                _0x20e4a3(null, {
                    'src': 'bar',
                    'type': 'video/bar'
                });
            }
        }, _0x11012c = {
            'setSource'(_0x392ce1, _0x53cb8b) {
                _0x53cb8b(null, {
                    'src': 'http://example.com/video.mp4',
                    'type': 'video/mp4'
                });
            }
        }, _0x1223cb = () => _0x5ecd86, _0x37c229 = () => _0x11012c;
    _0x309926['use']('video/foo', _0x1223cb), _0x309926['use']('video/bar', _0x37c229), _0x309926['setSource']({
        'id'() {
            return 'vid1';
        },
        'setTimeout': _0x537c8b['setTimeout']
    }, {
        'src': 'foo',
        'type': 'video/foo'
    }, function (_0x2ce71c, _0x23292a) {
        _0x535ed5 = _0x2ce71c, _0x3ad5a8 = _0x23292a;
    }), this['clock']['tick'](0x1 * 0x1be + -0x37b + 0xdf * 0x2), _0x2183b8['equal'](_0x535ed5['type'], 'video/mp4', 'we\x20selected\x20a\x20new\x20type\x20of\x20video/mp4'), _0x2183b8['equal'](_0x535ed5['src'], 'http://example.com/video.mp4', 'we\x20selected\x20a\x20new\x20src\x20of\x20video.mp4'), _0x2183b8['equal'](_0x3ad5a8['length'], 0x15 * -0x8b + 0xff + 0x56 * 0x1f, 'we\x20got\x20two\x20middleware'), _0x2183b8['equal'](_0x3ad5a8[0x6cd + 0x14d1 + -0x65 * 0x46], _0x5ecd86, 'foomw\x20is\x20the\x20first\x20middleware'), _0x2183b8['equal'](_0x3ad5a8[0x11a + -0x1521 + 0x1408], _0x11012c, 'barmw\x20is\x20the\x20first\x20middleware'), _0x309926['getMiddleware']('video/foo')['pop'](), _0x309926['getMiddleware']('video/bar')['pop']();
}), QUnit['test']('setSource\x20will\x20select\x20all\x20middleware\x20of\x20a\x20given\x20type,\x20until\x20src\x20change', function (_0x1a1856) {
    let _0x4b2ec3, _0x564361;
    const _0xc05fcd = {
            'setSource'(_0x5b76f7, _0x1ab573) {
                _0x1ab573(null, {
                    'src': 'bar',
                    'type': 'video/foo'
                });
            }
        }, _0x11164b = {
            'setSource'(_0x462dd6, _0x2d849a) {
                _0x2d849a(null, {
                    'src': 'http://example.com/video.mp4',
                    'type': 'video/mp4'
                });
            }
        }, _0x305ded = {
            'setSource'(_0x579fab, _0x13ac0d) {
                _0x13ac0d(null, {
                    'src': 'http://example.com/video.mp4',
                    'type': 'video/mp4'
                });
            }
        }, _0x43ce4d = () => _0xc05fcd, _0x4147b5 = () => _0x11164b, _0x9047b8 = () => _0x305ded;
    _0x309926['use']('video/foo', _0x43ce4d), _0x309926['use']('video/foo', _0x4147b5), _0x309926['use']('video/foo', _0x9047b8), _0x309926['setSource']({
        'id'() {
            return 'vid1';
        },
        'setTimeout': _0x537c8b['setTimeout']
    }, {
        'src': 'foo',
        'type': 'video/foo'
    }, function (_0x35d6f9, _0x3fc85d) {
        _0x4b2ec3 = _0x35d6f9, _0x564361 = _0x3fc85d;
    }), this['clock']['tick'](-0x597 * -0x5 + -0x1 * -0x259 + -0x1e4b), _0x1a1856['equal'](_0x4b2ec3['type'], 'video/mp4', 'we\x20selected\x20a\x20new\x20type\x20of\x20video/mp4'), _0x1a1856['equal'](_0x4b2ec3['src'], 'http://example.com/video.mp4', 'we\x20selected\x20a\x20new\x20src\x20of\x20video.mp4'), _0x1a1856['equal'](_0x564361['length'], -0x2a9 * -0x2 + 0xf2c + -0x147c, 'we\x20got\x20two\x20middleware'), _0x1a1856['equal'](_0x564361[0x3 * 0x28f + -0xc * -0xb4 + -0x55f * 0x3], _0xc05fcd, 'foomw\x20is\x20the\x20first\x20middleware'), _0x1a1856['equal'](_0x564361[0x3 * -0x342 + -0xb * -0x200 + 0x3 * -0x413], _0x11164b, 'foomw\x20is\x20the\x20first\x20middleware'), _0x309926['getMiddleware']('video/foo')['pop'](), _0x309926['getMiddleware']('video/foo')['pop'](), _0x309926['getMiddleware']('video/foo')['pop']();
}), QUnit['test']('a\x20middleware\x20without\x20a\x20mediator\x20method\x20will\x20not\x20throw\x20an\x20error', function (_0x43b9e2) {
    let _0x4e3840 = -0xcf3 + -0x33 * -0x85 + -0xd8c;
    const _0x3c203 = {}, _0x4d9dd6 = () => _0x3c203, _0x413c51 = () => ({
            'pause'() {
                _0x4e3840++;
            }
        });
    _0x309926['mediate']([
        _0x4d9dd6(),
        _0x413c51()
    ], {
        'pause': () => {
        }
    }, 'pause'), _0x43b9e2['equal'](_0x4e3840, 0x22fe * 0x1 + -0x2043 + -0x2ba, 'pauseCalled\x20was\x20called\x20once\x20and\x20no\x20error\x20was\x20thrown');
}), QUnit['test']('a\x20middleware\x20factory\x20is\x20not\x20called\x20on\x20source\x20change', function (_0xe3a986) {
    let _0x5575d4 = 0x1a0 * 0x5 + 0x1946 + -0x2166;
    const _0x58f268 = {
            'setSource'(_0x5e15ae, _0x2f8eb0) {
                _0x2f8eb0(null, {
                    'src': 'http://example.com/video.mp4',
                    'type': 'video/mp4'
                });
            }
        }, _0x18f340 = () => {
            return _0x5575d4++, _0x58f268;
        };
    _0x309926['use']('video/foo', _0x18f340), _0x309926['setSource']({
        'id'() {
            return 'vid1';
        },
        'setTimeout': _0x537c8b['setTimeout']
    }, {
        'src': 'foo',
        'type': 'video/foo'
    }, function () {
    }), this['clock']['tick'](0xe04 + 0x1de9 + 0x15f6 * -0x2), _0xe3a986['equal'](_0x5575d4, -0x135 * 0x1f + -0x6a * -0x1 + 0x2502, 'the\x20factory\x20was\x20called\x20once'), _0x309926['setSource']({
        'id'() {
            return 'vid1';
        },
        'setTimeout': _0x537c8b['setTimeout']
    }, {
        'src': 'bar',
        'type': 'video/foo'
    }, function () {
    }), this['clock']['tick'](-0xb7 * 0x3 + 0xedf + -0xcb9), _0xe3a986['equal'](_0x5575d4, -0x1 * 0x21ce + -0x2 * 0x997 + 0xa99 * 0x5, 'the\x20factory\x20was\x20not\x20called\x20again'), _0x309926['getMiddleware']('video/foo')['pop']();
}), QUnit['test']('a\x20middleware\x20factory\x20is\x20called\x20on\x20a\x20new\x20source\x20with\x20a\x20new\x20player', function (_0x55705c) {
    let _0x5a148d = -0xb8f * 0x3 + 0x122 + 0x218b;
    const _0x2eaf7c = {
            'setSource'(_0xb99f76, _0x1d7712) {
                _0x1d7712(null, {
                    'src': 'http://example.com/video.mp4',
                    'type': 'video/mp4'
                });
            }
        }, _0x297ee1 = () => {
            return _0x5a148d++, _0x2eaf7c;
        };
    _0x309926['use']('video/foo', _0x297ee1), _0x309926['setSource']({
        'id'() {
            return 'vid1';
        },
        'setTimeout': _0x537c8b['setTimeout']
    }, {
        'src': 'foo',
        'type': 'video/foo'
    }, function () {
    }), this['clock']['tick'](0xd * -0x20 + 0x2102 + -0x1f61), _0x55705c['equal'](_0x5a148d, -0x181d * 0x1 + 0x4b3 + -0x3 * -0x679, 'the\x20factory\x20was\x20called\x20once'), _0x309926['setSource']({
        'id'() {
            return 'vid2';
        },
        'setTimeout': _0x537c8b['setTimeout']
    }, {
        'src': 'bar',
        'type': 'video/foo'
    }, function () {
    }), this['clock']['tick'](0x26dc + 0x1 * 0x23d1 + 0x4 * -0x12ab), _0x55705c['equal'](_0x5a148d, -0x13f + 0x1 * 0x3b4 + -0x1 * 0x273, 'the\x20factory\x20was\x20called\x20again'), _0x309926['getMiddleware']('video/foo')['pop']();
}), QUnit['test']('a\x20middleware\x20without\x20a\x20setSource\x20gets\x20chosen\x20implicitly', function (_0x3d9f7c) {
    let _0x39ec98 = [];
    const _0x570a3d = {
            'currentTime'(_0x4a0cb3) {
            }
        }, _0x1ec2c6 = () => _0x570a3d;
    _0x309926['use']('video/foo', _0x1ec2c6), _0x309926['setSource']({
        'id'() {
            return 'vid1';
        },
        'setTimeout': _0x537c8b['setTimeout']
    }, {
        'src': 'foo',
        'type': 'video/foo'
    }, function (_0x3ca165, _0x111c7a) {
        _0x39ec98 = _0x111c7a;
    }), this['clock']['tick'](-0xe15 + 0x1 * 0x1396 + 0x1 * -0x580), _0x3d9f7c['equal'](_0x39ec98['length'], 0x9a1 + 0x1511 + -0x1eb1, 'we\x20have\x201\x20middleware\x20set'), _0x309926['getMiddleware']('video/foo')['pop']();
});
