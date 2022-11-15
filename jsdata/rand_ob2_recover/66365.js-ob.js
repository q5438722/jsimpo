var expect = require('expect.js'), promiseRetry = require('../'), promiseDelay = require('sleep-promise');
function _0x3a98(_0x3b6b05, _0x51a5e) {
    return _0x3a98 = function (_0x40c774, _0x3a98b0) {
        _0x40c774 = _0x40c774 - 246;
        var _0x3f74e9 = _0x40c7[_0x40c774];
        return _0x3f74e9;
    }, _0x3a98(_0x3b6b05, _0x51a5e);
}
describe(_0x40b23b(257), function () {
    var _0x922735 = _0x40b23b;
    it(_0x922735(258), function () {
        var _0x5b1642 = _0x922735, _0x1791d3 = 0;
        return promiseRetry(function (_0x3f306a) {
            return _0x1791d3 += 1, promiseDelay(10)['then'](function () {
                var _0x2cff04 = _0x3a98;
                return _0x1791d3 <= 2 && _0x3f306a(new Error(_0x2cff04(259))), 'final';
            });
        }, { 'factor': 1 })[_0x5b1642(260)](function (_0x40ee8c) {
            var _0x3c39fe = _0x5b1642;
            expect(_0x40ee8c)['to']['be'](_0x3c39fe(261)), expect(_0x1791d3)['to']['be'](3);
        }, function () {
            var _0x80c5a = _0x5b1642;
            throw new Error(_0x80c5a(262));
        });
    }), it(_0x922735(263), function () {
        var _0x5565d3 = _0x922735, _0xe8299e = 0;
        return promiseRetry(function (_0xbfd889, _0x16ec20) {
            var _0x4f0ec9 = _0x3a98;
            return _0xe8299e += 1, expect(_0xe8299e)['to'][_0x4f0ec9(264)](_0x16ec20), promiseDelay(10)[_0x4f0ec9(260)](function () {
                var _0x31736e = _0x4f0ec9;
                return _0xe8299e <= 2 && _0xbfd889(new Error(_0x31736e(259))), 'final';
            });
        }, { 'factor': 1 })[_0x5565d3(260)](function (_0x1de84e) {
            var _0x52187a = _0x5565d3;
            expect(_0x1de84e)['to']['be'](_0x52187a(261)), expect(_0xe8299e)['to']['be'](3);
        }, function () {
            var _0x584770 = _0x5565d3;
            throw new Error(_0x584770(262));
        });
    }), it(_0x922735(265), function () {
        var _0x29437d = 0;
        return promiseRetry(function () {
            return _0x29437d += 1, promiseDelay(10)['then'](function () {
                return 'final';
            });
        })['then'](function (_0x55e198) {
            var _0x45d74b = _0x3a98;
            expect(_0x55e198)['to']['be'](_0x45d74b(261)), expect(_0x29437d)['to']['be'](1);
        }, function () {
            var _0x58f705 = _0x3a98;
            throw new Error(_0x58f705(262));
        });
    }), it(_0x922735(266), function () {
        var _0x15d7c5 = _0x922735, _0x27e693 = 0;
        return promiseRetry(function () {
            return _0x27e693 += 1, promiseDelay(10)['then'](function () {
                throw new Error('foo');
            });
        })[_0x15d7c5(260)](function () {
            var _0xc9244d = _0x15d7c5;
            throw new Error(_0xc9244d(267));
        }, function (_0x5cee70) {
            var _0x2c0ba1 = _0x15d7c5;
            expect(_0x5cee70[_0x2c0ba1(268)])['to']['be'](_0x2c0ba1(259)), expect(_0x27e693)['to']['be'](1);
        });
    }), it(_0x922735(269), function () {
        var _0x4a57fd = _0x922735, _0x119255 = 0;
        return promiseRetry(function (_0x5286bb) {
            return _0x119255 += 1, promiseDelay(10)['then'](function () {
                var _0x2bb2fe = _0x3a98;
                throw new Error(_0x2bb2fe(259));
            })['catch'](_0x5286bb);
        }, { 'retries': 0 })[_0x4a57fd(260)](function () {
            var _0x5b8cf2 = _0x4a57fd;
            throw new Error(_0x5b8cf2(267));
        }, function (_0x26871b) {
            var _0x77196a = _0x4a57fd;
            expect(_0x26871b[_0x77196a(268)])['to']['be']('foo'), expect(_0x119255)['to']['be'](1);
        });
    }), it(_0x922735(270), function () {
        var _0x50a746 = _0x922735, _0x531c8b = 0;
        return promiseRetry(function (_0x398c90) {
            var _0x29f47f = _0x3a98;
            return _0x531c8b += 1, promiseDelay(10)[_0x29f47f(260)](function () {
                throw new Error('foo');
            })['catch'](_0x398c90);
        }, {
            'retries': 2,
            'factor': 1
        })[_0x50a746(260)](function () {
            var _0x5eae84 = _0x50a746;
            throw new Error(_0x5eae84(267));
        }, function (_0x56082c) {
            var _0x45175e = _0x50a746;
            expect(_0x56082c['message'])['to']['be'](_0x45175e(259)), expect(_0x531c8b)['to']['be'](3);
        });
    }), it(_0x922735(271), function () {
        var _0xf23b8a = _0x922735, _0x1a8c79 = 0;
        return promiseRetry(function (_0x4d42bc) {
            var _0x383045 = _0x3a98;
            return promiseDelay(10)[_0x383045(260)](function () {
                var _0x415c76 = _0x383045;
                return _0x1a8c79 < 2 && (_0x1a8c79 += 1, _0x4d42bc(new Error(_0x415c76(259)))), _0x415c76(261);
            });
        }, {
            'retries': 1,
            'factor': 1
        })[_0xf23b8a(260)](function () {
            var _0x139371 = _0xf23b8a;
            throw new Error(_0x139371(267));
        }, function (_0x143b2c) {
            var _0x360203 = _0xf23b8a;
            expect(_0x143b2c[_0x360203(268)])['to']['be'](_0x360203(259));
        });
    }), it(_0x922735(272), function () {
        var _0x427b99 = _0x922735;
        return promiseRetry(function () {
            return 'final';
        }, { 'factor': 1 })[_0x427b99(260)](function (_0xfc899c) {
            expect(_0xfc899c)['to']['be']('final');
        }, function () {
            throw new Error('should not fail');
        });
    }), it(_0x922735(273), function () {
        var _0x2ee12d = _0x922735;
        promiseRetry(function () {
            var _0x4a817f = _0x3a98;
            throw new Error(_0x4a817f(259));
        }, {
            'retries': 1,
            'factor': 1
        })[_0x2ee12d(260)](function () {
            throw new Error('should not succeed');
        }, function (_0x5f1209) {
            var _0x4ab120 = _0x2ee12d;
            expect(_0x5f1209[_0x4ab120(268)])['to']['be'](_0x4ab120(259));
        });
    }), it('should not crash on undefined rejections', function () {
        var _0x2cf2b0 = _0x922735;
        return promiseRetry(function () {
            throw undefined;
        }, {
            'retries': 1,
            'factor': 1
        })[_0x2cf2b0(260)](function () {
            var _0x2fe0c9 = _0x2cf2b0;
            throw new Error(_0x2fe0c9(267));
        }, function (_0x2eb90d) {
            expect(_0x2eb90d)['to']['be'](undefined);
        })['then'](function () {
            return promiseRetry(function (_0x25c9cd) {
                _0x25c9cd();
            }, {
                'retries': 1,
                'factor': 1
            });
        })['then'](function () {
            var _0x242949 = _0x2cf2b0;
            throw new Error(_0x242949(267));
        }, function (_0xb47b0c) {
            expect(_0xb47b0c)['to']['be'](undefined);
        });
    }), it(_0x922735(274), function () {
        var _0x146b5e = _0x922735, _0x176093 = 0;
        return promiseRetry(function (_0x10e41a) {
            var _0x125a92 = _0x3a98;
            return _0x176093 += 1, promiseDelay(10)[_0x125a92(260)](function () {
                return _0x176093 <= 2 && _0x10e41a(), 'final';
            });
        }, { 'factor': 1 })[_0x146b5e(260)](function (_0x2d314e) {
            expect(_0x2d314e)['to']['be']('final'), expect(_0x176093)['to']['be'](3);
        }, function () {
            throw new Error('should not fail');
        });
    }), it(_0x922735(275), function () {
        var _0x2bb407 = _0x922735, _0x345249 = 0;
        return promiseRetry(function (_0x1e09ab) {
            var _0x20d253 = _0x3a98;
            return _0x345249 += 1, promiseDelay(10)[_0x20d253(260)](function () {
                var _0x388f1a = _0x20d253;
                _0x1e09ab(new Error(_0x388f1a(259)));
            })[_0x20d253(276)](function (_0xa697c8) {
                _0x1e09ab(_0xa697c8);
            });
        }, {
            'retries': 1,
            'factor': 1
        })[_0x2bb407(260)](function () {
            throw new Error('should not succeed');
        }, function (_0x57c815) {
            var _0x590c1 = _0x2bb407;
            expect(_0x57c815['message'])['to']['be'](_0x590c1(259)), expect(_0x345249)['to']['be'](2);
        });
    }), it('should allow options to be passed first', function () {
        var _0x321f50 = _0x922735, _0x1edea6 = 0;
        return promiseRetry({ 'factor': 1 }, function (_0x27bdae) {
            var _0x81c4b = _0x3a98;
            return _0x1edea6 += 1, promiseDelay(10)[_0x81c4b(260)](function () {
                var _0x404426 = _0x81c4b;
                return _0x1edea6 <= 2 && _0x27bdae(new Error(_0x404426(259))), _0x404426(261);
            });
        })[_0x321f50(260)](function (_0x1b41bc) {
            var _0x3339de = _0x321f50;
            expect(_0x1b41bc)['to']['be'](_0x3339de(261)), expect(_0x1edea6)['to']['be'](3);
        }, function () {
            throw new Error('should not fail');
        });
    });
});