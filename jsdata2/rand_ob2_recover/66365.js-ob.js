function _0x556b(_0x11617f, _0x360192) {
    return _0x556b = function (_0x3a5e4c, _0x556b3f) {
        _0x3a5e4c = _0x3a5e4c - 296;
        var _0x2ec233 = _0x3a5e[_0x3a5e4c];
        return _0x2ec233;
    }, _0x556b(_0x11617f, _0x360192);
}
var expect = require(_0x1a32aa(306)), promiseRetry = require(_0x1a32aa(307)), promiseDelay = require(_0x1a32aa(308));
describe(_0x1a32aa(309), function () {
    var _0x1af453 = _0x1a32aa;
    it(_0x1af453(310), function () {
        var _0x39252c = _0x1af453, _0x4a8a8f = 0;
        return promiseRetry(function (_0x45e2c8) {
            return _0x4a8a8f += 1, promiseDelay(10)['then'](function () {
                var _0x283a2f = _0x556b;
                return _0x4a8a8f <= 2 && _0x45e2c8(new Error(_0x283a2f(311))), _0x283a2f(312);
            });
        }, { 'factor': 1 })[_0x39252c(313)](function (_0x51617e) {
            var _0x5454be = _0x39252c;
            expect(_0x51617e)['to']['be'](_0x5454be(312)), expect(_0x4a8a8f)['to']['be'](3);
        }, function () {
            throw new Error('should not fail');
        });
    }), it('should call fn with the attempt number', function () {
        var _0x329fad = _0x1af453, _0x33660b = 0;
        return promiseRetry(function (_0xf2b9a9, _0x22d809) {
            var _0xed90f0 = _0x556b;
            return _0x33660b += 1, expect(_0x33660b)['to']['equal'](_0x22d809), promiseDelay(10)[_0xed90f0(313)](function () {
                var _0x45ca04 = _0xed90f0;
                return _0x33660b <= 2 && _0xf2b9a9(new Error(_0x45ca04(311))), _0x45ca04(312);
            });
        }, { 'factor': 1 })[_0x329fad(313)](function (_0x114249) {
            expect(_0x114249)['to']['be']('final'), expect(_0x33660b)['to']['be'](3);
        }, function () {
            var _0x329791 = _0x329fad;
            throw new Error(_0x329791(314));
        });
    }), it(_0x1af453(315), function () {
        var _0xdc9d0d = 0;
        return promiseRetry(function () {
            var _0x2c8f11 = _0x556b;
            return _0xdc9d0d += 1, promiseDelay(10)[_0x2c8f11(313)](function () {
                var _0x5c60ab = _0x2c8f11;
                return _0x5c60ab(312);
            });
        })['then'](function (_0x63a33) {
            var _0x53c604 = _0x556b;
            expect(_0x63a33)['to']['be'](_0x53c604(312)), expect(_0xdc9d0d)['to']['be'](1);
        }, function () {
            var _0x43a0d5 = _0x556b;
            throw new Error(_0x43a0d5(314));
        });
    }), it(_0x1af453(316), function () {
        var _0x3eb3cb = 0;
        return promiseRetry(function () {
            var _0x4755b8 = _0x556b;
            return _0x3eb3cb += 1, promiseDelay(10)[_0x4755b8(313)](function () {
                var _0x42c4c8 = _0x4755b8;
                throw new Error(_0x42c4c8(311));
            });
        })['then'](function () {
            var _0x2cb088 = _0x556b;
            throw new Error(_0x2cb088(317));
        }, function (_0x4986c0) {
            var _0xe33693 = _0x556b;
            expect(_0x4986c0['message'])['to']['be'](_0xe33693(311)), expect(_0x3eb3cb)['to']['be'](1);
        });
    }), it(_0x1af453(318), function () {
        var _0x333364 = _0x1af453, _0x302dad = 0;
        return promiseRetry(function (_0x1c1ba4) {
            var _0x87a28f = _0x556b;
            return _0x302dad += 1, promiseDelay(10)[_0x87a28f(313)](function () {
                var _0x50f9ea = _0x87a28f;
                throw new Error(_0x50f9ea(311));
            })[_0x87a28f(319)](_0x1c1ba4);
        }, { 'retries': 0 })[_0x333364(313)](function () {
            throw new Error('should not succeed');
        }, function (_0x5a96be) {
            var _0x5a0d47 = _0x333364;
            expect(_0x5a96be[_0x5a0d47(320)])['to']['be']('foo'), expect(_0x302dad)['to']['be'](1);
        });
    }), it(_0x1af453(321), function () {
        var _0x4d71aa = _0x1af453, _0x225aae = 0;
        return promiseRetry(function (_0x526d79) {
            var _0x4ce3ba = _0x556b;
            return _0x225aae += 1, promiseDelay(10)[_0x4ce3ba(313)](function () {
                throw new Error('foo');
            })[_0x4ce3ba(319)](_0x526d79);
        }, {
            'retries': 2,
            'factor': 1
        })[_0x4d71aa(313)](function () {
            var _0x2e823f = _0x4d71aa;
            throw new Error(_0x2e823f(317));
        }, function (_0x4c0432) {
            var _0x200a59 = _0x4d71aa;
            expect(_0x4c0432[_0x200a59(320)])['to']['be'](_0x200a59(311)), expect(_0x225aae)['to']['be'](3);
        });
    }), it('should pass options to the underlying retry module', function () {
        var _0x1393c5 = 0;
        return promiseRetry(function (_0x1bfa43) {
            return promiseDelay(10)['then'](function () {
                return _0x1393c5 < 2 && (_0x1393c5 += 1, _0x1bfa43(new Error('foo'))), 'final';
            });
        }, {
            'retries': 1,
            'factor': 1
        })['then'](function () {
            var _0x30740b = _0x556b;
            throw new Error(_0x30740b(317));
        }, function (_0x35ae23) {
            var _0x32b0e4 = _0x556b;
            expect(_0x35ae23[_0x32b0e4(320)])['to']['be'](_0x32b0e4(311));
        });
    }), it(_0x1af453(322), function () {
        var _0x1b8f1b = _0x1af453;
        return promiseRetry(function () {
            var _0x296a78 = _0x556b;
            return _0x296a78(312);
        }, { 'factor': 1 })[_0x1b8f1b(313)](function (_0x5aa12a) {
            var _0x2c0f22 = _0x1b8f1b;
            expect(_0x5aa12a)['to']['be'](_0x2c0f22(312));
        }, function () {
            throw new Error('should not fail');
        });
    }), it(_0x1af453(323), function () {
        var _0x4bf791 = _0x1af453;
        promiseRetry(function () {
            var _0x36f195 = _0x556b;
            throw new Error(_0x36f195(311));
        }, {
            'retries': 1,
            'factor': 1
        })[_0x4bf791(313)](function () {
            throw new Error('should not succeed');
        }, function (_0x412c3a) {
            var _0x3f95fd = _0x4bf791;
            expect(_0x412c3a[_0x3f95fd(320)])['to']['be'](_0x3f95fd(311));
        });
    }), it('should not crash on undefined rejections', function () {
        var _0x4b936a = _0x1af453;
        return promiseRetry(function () {
            throw undefined;
        }, {
            'retries': 1,
            'factor': 1
        })['then'](function () {
            var _0x21153a = _0x556b;
            throw new Error(_0x21153a(317));
        }, function (_0x3e358c) {
            expect(_0x3e358c)['to']['be'](undefined);
        })['then'](function () {
            return promiseRetry(function (_0x245d2b) {
                _0x245d2b();
            }, {
                'retries': 1,
                'factor': 1
            });
        })[_0x4b936a(313)](function () {
            throw new Error('should not succeed');
        }, function (_0x4890cc) {
            expect(_0x4890cc)['to']['be'](undefined);
        });
    }), it(_0x1af453(324), function () {
        var _0x45853a = _0x1af453, _0x478214 = 0;
        return promiseRetry(function (_0x41e58e) {
            return _0x478214 += 1, promiseDelay(10)['then'](function () {
                var _0x144b37 = _0x556b;
                return _0x478214 <= 2 && _0x41e58e(), _0x144b37(312);
            });
        }, { 'factor': 1 })[_0x45853a(313)](function (_0x7da02b) {
            var _0x45d3b1 = _0x45853a;
            expect(_0x7da02b)['to']['be'](_0x45d3b1(312)), expect(_0x478214)['to']['be'](3);
        }, function () {
            var _0x3692a3 = _0x45853a;
            throw new Error(_0x3692a3(314));
        });
    }), it(_0x1af453(325), function () {
        var _0x3198fa = 0;
        return promiseRetry(function (_0x3ed310) {
            var _0x1cd090 = _0x556b;
            return _0x3198fa += 1, promiseDelay(10)[_0x1cd090(313)](function () {
                var _0x38a6a2 = _0x1cd090;
                _0x3ed310(new Error(_0x38a6a2(311)));
            })[_0x1cd090(319)](function (_0x457699) {
                _0x3ed310(_0x457699);
            });
        }, {
            'retries': 1,
            'factor': 1
        })['then'](function () {
            var _0x20813e = _0x556b;
            throw new Error(_0x20813e(317));
        }, function (_0x3f216d) {
            var _0x1ad87e = _0x556b;
            expect(_0x3f216d['message'])['to']['be'](_0x1ad87e(311)), expect(_0x3198fa)['to']['be'](2);
        });
    }), it(_0x1af453(326), function () {
        var _0x10ff9b = _0x1af453, _0x4a2911 = 0;
        return promiseRetry({ 'factor': 1 }, function (_0x396b27) {
            return _0x4a2911 += 1, promiseDelay(10)['then'](function () {
                var _0x365912 = _0x556b;
                return _0x4a2911 <= 2 && _0x396b27(new Error(_0x365912(311))), _0x365912(312);
            });
        })[_0x10ff9b(313)](function (_0x2f30e0) {
            var _0x1313d0 = _0x10ff9b;
            expect(_0x2f30e0)['to']['be'](_0x1313d0(312)), expect(_0x4a2911)['to']['be'](3);
        }, function () {
            throw new Error('should not fail');
        });
    });
});