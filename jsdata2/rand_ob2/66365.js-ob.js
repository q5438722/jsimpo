'use strict';
var _0x3a5e = [
    'catch',
    'message',
    'should\x20reject\x20the\x20promise\x20if\x20the\x20retries\x20were\x20exceeded',
    'should\x20convert\x20direct\x20fulfillments\x20into\x20promises',
    'should\x20convert\x20direct\x20rejections\x20into\x20promises',
    'should\x20retry\x20if\x20retry()\x20was\x20called\x20with\x20undefined',
    'should\x20work\x20with\x20several\x20retries\x20in\x20the\x20same\x20chain',
    'should\x20allow\x20options\x20to\x20be\x20passed\x20first',
    '153177BamaHU',
    '82CpJzGS',
    '536AOwXfB',
    '199167VILJGr',
    '117497IiRhos',
    '2zWCGHg',
    '136308OiOZxI',
    '177284OUiFBs',
    '10iiulky',
    '14173zjjOmQ',
    'expect.js',
    '../',
    'sleep-promise',
    'promise-retry',
    'should\x20call\x20fn\x20again\x20if\x20retry\x20was\x20called',
    'foo',
    'final',
    'then',
    'should\x20not\x20fail',
    'should\x20not\x20retry\x20on\x20fulfillment\x20if\x20retry\x20was\x20not\x20called',
    'should\x20not\x20retry\x20on\x20rejection\x20if\x20retry\x20was\x20not\x20called',
    'should\x20not\x20succeed',
    'should\x20not\x20retry\x20on\x20rejection\x20if\x20nr\x20of\x20retries\x20is\x200'
];
var _0x1a32aa = _0x556b;
(function (_0x26d2d7, _0x378970) {
    var _0x441435 = _0x556b;
    while (!![]) {
        try {
            var _0x340749 = -parseInt(_0x441435(0x128)) + parseInt(_0x441435(0x129)) * parseInt(_0x441435(0x12a)) + parseInt(_0x441435(0x12b)) + parseInt(_0x441435(0x12c)) * parseInt(_0x441435(0x12d)) + parseInt(_0x441435(0x12e)) + -parseInt(_0x441435(0x12f)) + -parseInt(_0x441435(0x130)) * parseInt(_0x441435(0x131));
            if (_0x340749 === _0x378970)
                break;
            else
                _0x26d2d7['push'](_0x26d2d7['shift']());
        } catch (_0x11f39e) {
            _0x26d2d7['push'](_0x26d2d7['shift']());
        }
    }
}(_0x3a5e, 0x22b96));
function _0x556b(_0x11617f, _0x360192) {
    return _0x556b = function (_0x3a5e4c, _0x556b3f) {
        _0x3a5e4c = _0x3a5e4c - 0x128;
        var _0x2ec233 = _0x3a5e[_0x3a5e4c];
        return _0x2ec233;
    }, _0x556b(_0x11617f, _0x360192);
}
var expect = require(_0x1a32aa(0x132)), promiseRetry = require(_0x1a32aa(0x133)), promiseDelay = require(_0x1a32aa(0x134));
describe(_0x1a32aa(0x135), function () {
    var _0x1af453 = _0x1a32aa;
    it(_0x1af453(0x136), function () {
        var _0x39252c = _0x1af453, _0x4a8a8f = 0x0;
        return promiseRetry(function (_0x45e2c8) {
            return _0x4a8a8f += 0x1, promiseDelay(0xa)['then'](function () {
                var _0x283a2f = _0x556b;
                return _0x4a8a8f <= 0x2 && _0x45e2c8(new Error(_0x283a2f(0x137))), _0x283a2f(0x138);
            });
        }, { 'factor': 0x1 })[_0x39252c(0x139)](function (_0x51617e) {
            var _0x5454be = _0x39252c;
            expect(_0x51617e)['to']['be'](_0x5454be(0x138)), expect(_0x4a8a8f)['to']['be'](0x3);
        }, function () {
            throw new Error('should\x20not\x20fail');
        });
    }), it('should\x20call\x20fn\x20with\x20the\x20attempt\x20number', function () {
        var _0x329fad = _0x1af453, _0x33660b = 0x0;
        return promiseRetry(function (_0xf2b9a9, _0x22d809) {
            var _0xed90f0 = _0x556b;
            return _0x33660b += 0x1, expect(_0x33660b)['to']['equal'](_0x22d809), promiseDelay(0xa)[_0xed90f0(0x139)](function () {
                var _0x45ca04 = _0xed90f0;
                return _0x33660b <= 0x2 && _0xf2b9a9(new Error(_0x45ca04(0x137))), _0x45ca04(0x138);
            });
        }, { 'factor': 0x1 })[_0x329fad(0x139)](function (_0x114249) {
            expect(_0x114249)['to']['be']('final'), expect(_0x33660b)['to']['be'](0x3);
        }, function () {
            var _0x329791 = _0x329fad;
            throw new Error(_0x329791(0x13a));
        });
    }), it(_0x1af453(0x13b), function () {
        var _0xdc9d0d = 0x0;
        return promiseRetry(function () {
            var _0x2c8f11 = _0x556b;
            return _0xdc9d0d += 0x1, promiseDelay(0xa)[_0x2c8f11(0x139)](function () {
                var _0x5c60ab = _0x2c8f11;
                return _0x5c60ab(0x138);
            });
        })['then'](function (_0x63a33) {
            var _0x53c604 = _0x556b;
            expect(_0x63a33)['to']['be'](_0x53c604(0x138)), expect(_0xdc9d0d)['to']['be'](0x1);
        }, function () {
            var _0x43a0d5 = _0x556b;
            throw new Error(_0x43a0d5(0x13a));
        });
    }), it(_0x1af453(0x13c), function () {
        var _0x3eb3cb = 0x0;
        return promiseRetry(function () {
            var _0x4755b8 = _0x556b;
            return _0x3eb3cb += 0x1, promiseDelay(0xa)[_0x4755b8(0x139)](function () {
                var _0x42c4c8 = _0x4755b8;
                throw new Error(_0x42c4c8(0x137));
            });
        })['then'](function () {
            var _0x2cb088 = _0x556b;
            throw new Error(_0x2cb088(0x13d));
        }, function (_0x4986c0) {
            var _0xe33693 = _0x556b;
            expect(_0x4986c0['message'])['to']['be'](_0xe33693(0x137)), expect(_0x3eb3cb)['to']['be'](0x1);
        });
    }), it(_0x1af453(0x13e), function () {
        var _0x333364 = _0x1af453, _0x302dad = 0x0;
        return promiseRetry(function (_0x1c1ba4) {
            var _0x87a28f = _0x556b;
            return _0x302dad += 0x1, promiseDelay(0xa)[_0x87a28f(0x139)](function () {
                var _0x50f9ea = _0x87a28f;
                throw new Error(_0x50f9ea(0x137));
            })[_0x87a28f(0x13f)](_0x1c1ba4);
        }, { 'retries': 0x0 })[_0x333364(0x139)](function () {
            throw new Error('should\x20not\x20succeed');
        }, function (_0x5a96be) {
            var _0x5a0d47 = _0x333364;
            expect(_0x5a96be[_0x5a0d47(0x140)])['to']['be']('foo'), expect(_0x302dad)['to']['be'](0x1);
        });
    }), it(_0x1af453(0x141), function () {
        var _0x4d71aa = _0x1af453, _0x225aae = 0x0;
        return promiseRetry(function (_0x526d79) {
            var _0x4ce3ba = _0x556b;
            return _0x225aae += 0x1, promiseDelay(0xa)[_0x4ce3ba(0x139)](function () {
                throw new Error('foo');
            })[_0x4ce3ba(0x13f)](_0x526d79);
        }, {
            'retries': 0x2,
            'factor': 0x1
        })[_0x4d71aa(0x139)](function () {
            var _0x2e823f = _0x4d71aa;
            throw new Error(_0x2e823f(0x13d));
        }, function (_0x4c0432) {
            var _0x200a59 = _0x4d71aa;
            expect(_0x4c0432[_0x200a59(0x140)])['to']['be'](_0x200a59(0x137)), expect(_0x225aae)['to']['be'](0x3);
        });
    }), it('should\x20pass\x20options\x20to\x20the\x20underlying\x20retry\x20module', function () {
        var _0x1393c5 = 0x0;
        return promiseRetry(function (_0x1bfa43) {
            return promiseDelay(0xa)['then'](function () {
                return _0x1393c5 < 0x2 && (_0x1393c5 += 0x1, _0x1bfa43(new Error('foo'))), 'final';
            });
        }, {
            'retries': 0x1,
            'factor': 0x1
        })['then'](function () {
            var _0x30740b = _0x556b;
            throw new Error(_0x30740b(0x13d));
        }, function (_0x35ae23) {
            var _0x32b0e4 = _0x556b;
            expect(_0x35ae23[_0x32b0e4(0x140)])['to']['be'](_0x32b0e4(0x137));
        });
    }), it(_0x1af453(0x142), function () {
        var _0x1b8f1b = _0x1af453;
        return promiseRetry(function () {
            var _0x296a78 = _0x556b;
            return _0x296a78(0x138);
        }, { 'factor': 0x1 })[_0x1b8f1b(0x139)](function (_0x5aa12a) {
            var _0x2c0f22 = _0x1b8f1b;
            expect(_0x5aa12a)['to']['be'](_0x2c0f22(0x138));
        }, function () {
            throw new Error('should\x20not\x20fail');
        });
    }), it(_0x1af453(0x143), function () {
        var _0x4bf791 = _0x1af453;
        promiseRetry(function () {
            var _0x36f195 = _0x556b;
            throw new Error(_0x36f195(0x137));
        }, {
            'retries': 0x1,
            'factor': 0x1
        })[_0x4bf791(0x139)](function () {
            throw new Error('should\x20not\x20succeed');
        }, function (_0x412c3a) {
            var _0x3f95fd = _0x4bf791;
            expect(_0x412c3a[_0x3f95fd(0x140)])['to']['be'](_0x3f95fd(0x137));
        });
    }), it('should\x20not\x20crash\x20on\x20undefined\x20rejections', function () {
        var _0x4b936a = _0x1af453;
        return promiseRetry(function () {
            throw undefined;
        }, {
            'retries': 0x1,
            'factor': 0x1
        })['then'](function () {
            var _0x21153a = _0x556b;
            throw new Error(_0x21153a(0x13d));
        }, function (_0x3e358c) {
            expect(_0x3e358c)['to']['be'](undefined);
        })['then'](function () {
            return promiseRetry(function (_0x245d2b) {
                _0x245d2b();
            }, {
                'retries': 0x1,
                'factor': 0x1
            });
        })[_0x4b936a(0x139)](function () {
            throw new Error('should\x20not\x20succeed');
        }, function (_0x4890cc) {
            expect(_0x4890cc)['to']['be'](undefined);
        });
    }), it(_0x1af453(0x144), function () {
        var _0x45853a = _0x1af453, _0x478214 = 0x0;
        return promiseRetry(function (_0x41e58e) {
            return _0x478214 += 0x1, promiseDelay(0xa)['then'](function () {
                var _0x144b37 = _0x556b;
                return _0x478214 <= 0x2 && _0x41e58e(), _0x144b37(0x138);
            });
        }, { 'factor': 0x1 })[_0x45853a(0x139)](function (_0x7da02b) {
            var _0x45d3b1 = _0x45853a;
            expect(_0x7da02b)['to']['be'](_0x45d3b1(0x138)), expect(_0x478214)['to']['be'](0x3);
        }, function () {
            var _0x3692a3 = _0x45853a;
            throw new Error(_0x3692a3(0x13a));
        });
    }), it(_0x1af453(0x145), function () {
        var _0x3198fa = 0x0;
        return promiseRetry(function (_0x3ed310) {
            var _0x1cd090 = _0x556b;
            return _0x3198fa += 0x1, promiseDelay(0xa)[_0x1cd090(0x139)](function () {
                var _0x38a6a2 = _0x1cd090;
                _0x3ed310(new Error(_0x38a6a2(0x137)));
            })[_0x1cd090(0x13f)](function (_0x457699) {
                _0x3ed310(_0x457699);
            });
        }, {
            'retries': 0x1,
            'factor': 0x1
        })['then'](function () {
            var _0x20813e = _0x556b;
            throw new Error(_0x20813e(0x13d));
        }, function (_0x3f216d) {
            var _0x1ad87e = _0x556b;
            expect(_0x3f216d['message'])['to']['be'](_0x1ad87e(0x137)), expect(_0x3198fa)['to']['be'](0x2);
        });
    }), it(_0x1af453(0x146), function () {
        var _0x10ff9b = _0x1af453, _0x4a2911 = 0x0;
        return promiseRetry({ 'factor': 0x1 }, function (_0x396b27) {
            return _0x4a2911 += 0x1, promiseDelay(0xa)['then'](function () {
                var _0x365912 = _0x556b;
                return _0x4a2911 <= 0x2 && _0x396b27(new Error(_0x365912(0x137))), _0x365912(0x138);
            });
        })[_0x10ff9b(0x139)](function (_0x2f30e0) {
            var _0x1313d0 = _0x10ff9b;
            expect(_0x2f30e0)['to']['be'](_0x1313d0(0x138)), expect(_0x4a2911)['to']['be'](0x3);
        }, function () {
            throw new Error('should\x20not\x20fail');
        });
    });
});
