'use strict';
var _0x40c7 = [
    'should\x20convert\x20direct\x20rejections\x20into\x20promises',
    'should\x20retry\x20if\x20retry()\x20was\x20called\x20with\x20undefined',
    'should\x20work\x20with\x20several\x20retries\x20in\x20the\x20same\x20chain',
    'catch',
    '950140tERbTA',
    '1HRuUlb',
    '1613887DtjOhC',
    '507488GrfTPW',
    '1584664ezUalL',
    '1FQGuIf',
    '1pKtDIM',
    '266194ccEIgi',
    '545454KtLBUP',
    '30ZIWOHE',
    '22454ZzICSs',
    'promise-retry',
    'should\x20call\x20fn\x20again\x20if\x20retry\x20was\x20called',
    'foo',
    'then',
    'final',
    'should\x20not\x20fail',
    'should\x20call\x20fn\x20with\x20the\x20attempt\x20number',
    'equal',
    'should\x20not\x20retry\x20on\x20fulfillment\x20if\x20retry\x20was\x20not\x20called',
    'should\x20not\x20retry\x20on\x20rejection\x20if\x20retry\x20was\x20not\x20called',
    'should\x20not\x20succeed',
    'message',
    'should\x20not\x20retry\x20on\x20rejection\x20if\x20nr\x20of\x20retries\x20is\x200',
    'should\x20reject\x20the\x20promise\x20if\x20the\x20retries\x20were\x20exceeded',
    'should\x20pass\x20options\x20to\x20the\x20underlying\x20retry\x20module',
    'should\x20convert\x20direct\x20fulfillments\x20into\x20promises'
];
var _0x40b23b = _0x3a98;
(function (_0x19797d, _0x1ee826) {
    var _0x3db68b = _0x3a98;
    while (!![]) {
        try {
            var _0x25ac8b = parseInt(_0x3db68b(0xf6)) + parseInt(_0x3db68b(0xf7)) * -parseInt(_0x3db68b(0xf8)) + -parseInt(_0x3db68b(0xf9)) + parseInt(_0x3db68b(0xfa)) * parseInt(_0x3db68b(0xfb)) + parseInt(_0x3db68b(0xfc)) * parseInt(_0x3db68b(0xfd)) + -parseInt(_0x3db68b(0xfe)) + -parseInt(_0x3db68b(0xff)) * -parseInt(_0x3db68b(0x100));
            if (_0x25ac8b === _0x1ee826)
                break;
            else
                _0x19797d['push'](_0x19797d['shift']());
        } catch (_0x54603d) {
            _0x19797d['push'](_0x19797d['shift']());
        }
    }
}(_0x40c7, 0xc536d));
var expect = require('expect.js'), promiseRetry = require('../'), promiseDelay = require('sleep-promise');
function _0x3a98(_0x3b6b05, _0x51a5e) {
    return _0x3a98 = function (_0x40c774, _0x3a98b0) {
        _0x40c774 = _0x40c774 - 0xf6;
        var _0x3f74e9 = _0x40c7[_0x40c774];
        return _0x3f74e9;
    }, _0x3a98(_0x3b6b05, _0x51a5e);
}
describe(_0x40b23b(0x101), function () {
    var _0x922735 = _0x40b23b;
    it(_0x922735(0x102), function () {
        var _0x5b1642 = _0x922735, _0x1791d3 = 0x0;
        return promiseRetry(function (_0x3f306a) {
            return _0x1791d3 += 0x1, promiseDelay(0xa)['then'](function () {
                var _0x2cff04 = _0x3a98;
                return _0x1791d3 <= 0x2 && _0x3f306a(new Error(_0x2cff04(0x103))), 'final';
            });
        }, { 'factor': 0x1 })[_0x5b1642(0x104)](function (_0x40ee8c) {
            var _0x3c39fe = _0x5b1642;
            expect(_0x40ee8c)['to']['be'](_0x3c39fe(0x105)), expect(_0x1791d3)['to']['be'](0x3);
        }, function () {
            var _0x80c5a = _0x5b1642;
            throw new Error(_0x80c5a(0x106));
        });
    }), it(_0x922735(0x107), function () {
        var _0x5565d3 = _0x922735, _0xe8299e = 0x0;
        return promiseRetry(function (_0xbfd889, _0x16ec20) {
            var _0x4f0ec9 = _0x3a98;
            return _0xe8299e += 0x1, expect(_0xe8299e)['to'][_0x4f0ec9(0x108)](_0x16ec20), promiseDelay(0xa)[_0x4f0ec9(0x104)](function () {
                var _0x31736e = _0x4f0ec9;
                return _0xe8299e <= 0x2 && _0xbfd889(new Error(_0x31736e(0x103))), 'final';
            });
        }, { 'factor': 0x1 })[_0x5565d3(0x104)](function (_0x1de84e) {
            var _0x52187a = _0x5565d3;
            expect(_0x1de84e)['to']['be'](_0x52187a(0x105)), expect(_0xe8299e)['to']['be'](0x3);
        }, function () {
            var _0x584770 = _0x5565d3;
            throw new Error(_0x584770(0x106));
        });
    }), it(_0x922735(0x109), function () {
        var _0x29437d = 0x0;
        return promiseRetry(function () {
            return _0x29437d += 0x1, promiseDelay(0xa)['then'](function () {
                return 'final';
            });
        })['then'](function (_0x55e198) {
            var _0x45d74b = _0x3a98;
            expect(_0x55e198)['to']['be'](_0x45d74b(0x105)), expect(_0x29437d)['to']['be'](0x1);
        }, function () {
            var _0x58f705 = _0x3a98;
            throw new Error(_0x58f705(0x106));
        });
    }), it(_0x922735(0x10a), function () {
        var _0x15d7c5 = _0x922735, _0x27e693 = 0x0;
        return promiseRetry(function () {
            return _0x27e693 += 0x1, promiseDelay(0xa)['then'](function () {
                throw new Error('foo');
            });
        })[_0x15d7c5(0x104)](function () {
            var _0xc9244d = _0x15d7c5;
            throw new Error(_0xc9244d(0x10b));
        }, function (_0x5cee70) {
            var _0x2c0ba1 = _0x15d7c5;
            expect(_0x5cee70[_0x2c0ba1(0x10c)])['to']['be'](_0x2c0ba1(0x103)), expect(_0x27e693)['to']['be'](0x1);
        });
    }), it(_0x922735(0x10d), function () {
        var _0x4a57fd = _0x922735, _0x119255 = 0x0;
        return promiseRetry(function (_0x5286bb) {
            return _0x119255 += 0x1, promiseDelay(0xa)['then'](function () {
                var _0x2bb2fe = _0x3a98;
                throw new Error(_0x2bb2fe(0x103));
            })['catch'](_0x5286bb);
        }, { 'retries': 0x0 })[_0x4a57fd(0x104)](function () {
            var _0x5b8cf2 = _0x4a57fd;
            throw new Error(_0x5b8cf2(0x10b));
        }, function (_0x26871b) {
            var _0x77196a = _0x4a57fd;
            expect(_0x26871b[_0x77196a(0x10c)])['to']['be']('foo'), expect(_0x119255)['to']['be'](0x1);
        });
    }), it(_0x922735(0x10e), function () {
        var _0x50a746 = _0x922735, _0x531c8b = 0x0;
        return promiseRetry(function (_0x398c90) {
            var _0x29f47f = _0x3a98;
            return _0x531c8b += 0x1, promiseDelay(0xa)[_0x29f47f(0x104)](function () {
                throw new Error('foo');
            })['catch'](_0x398c90);
        }, {
            'retries': 0x2,
            'factor': 0x1
        })[_0x50a746(0x104)](function () {
            var _0x5eae84 = _0x50a746;
            throw new Error(_0x5eae84(0x10b));
        }, function (_0x56082c) {
            var _0x45175e = _0x50a746;
            expect(_0x56082c['message'])['to']['be'](_0x45175e(0x103)), expect(_0x531c8b)['to']['be'](0x3);
        });
    }), it(_0x922735(0x10f), function () {
        var _0xf23b8a = _0x922735, _0x1a8c79 = 0x0;
        return promiseRetry(function (_0x4d42bc) {
            var _0x383045 = _0x3a98;
            return promiseDelay(0xa)[_0x383045(0x104)](function () {
                var _0x415c76 = _0x383045;
                return _0x1a8c79 < 0x2 && (_0x1a8c79 += 0x1, _0x4d42bc(new Error(_0x415c76(0x103)))), _0x415c76(0x105);
            });
        }, {
            'retries': 0x1,
            'factor': 0x1
        })[_0xf23b8a(0x104)](function () {
            var _0x139371 = _0xf23b8a;
            throw new Error(_0x139371(0x10b));
        }, function (_0x143b2c) {
            var _0x360203 = _0xf23b8a;
            expect(_0x143b2c[_0x360203(0x10c)])['to']['be'](_0x360203(0x103));
        });
    }), it(_0x922735(0x110), function () {
        var _0x427b99 = _0x922735;
        return promiseRetry(function () {
            return 'final';
        }, { 'factor': 0x1 })[_0x427b99(0x104)](function (_0xfc899c) {
            expect(_0xfc899c)['to']['be']('final');
        }, function () {
            throw new Error('should\x20not\x20fail');
        });
    }), it(_0x922735(0x111), function () {
        var _0x2ee12d = _0x922735;
        promiseRetry(function () {
            var _0x4a817f = _0x3a98;
            throw new Error(_0x4a817f(0x103));
        }, {
            'retries': 0x1,
            'factor': 0x1
        })[_0x2ee12d(0x104)](function () {
            throw new Error('should\x20not\x20succeed');
        }, function (_0x5f1209) {
            var _0x4ab120 = _0x2ee12d;
            expect(_0x5f1209[_0x4ab120(0x10c)])['to']['be'](_0x4ab120(0x103));
        });
    }), it('should\x20not\x20crash\x20on\x20undefined\x20rejections', function () {
        var _0x2cf2b0 = _0x922735;
        return promiseRetry(function () {
            throw undefined;
        }, {
            'retries': 0x1,
            'factor': 0x1
        })[_0x2cf2b0(0x104)](function () {
            var _0x2fe0c9 = _0x2cf2b0;
            throw new Error(_0x2fe0c9(0x10b));
        }, function (_0x2eb90d) {
            expect(_0x2eb90d)['to']['be'](undefined);
        })['then'](function () {
            return promiseRetry(function (_0x25c9cd) {
                _0x25c9cd();
            }, {
                'retries': 0x1,
                'factor': 0x1
            });
        })['then'](function () {
            var _0x242949 = _0x2cf2b0;
            throw new Error(_0x242949(0x10b));
        }, function (_0xb47b0c) {
            expect(_0xb47b0c)['to']['be'](undefined);
        });
    }), it(_0x922735(0x112), function () {
        var _0x146b5e = _0x922735, _0x176093 = 0x0;
        return promiseRetry(function (_0x10e41a) {
            var _0x125a92 = _0x3a98;
            return _0x176093 += 0x1, promiseDelay(0xa)[_0x125a92(0x104)](function () {
                return _0x176093 <= 0x2 && _0x10e41a(), 'final';
            });
        }, { 'factor': 0x1 })[_0x146b5e(0x104)](function (_0x2d314e) {
            expect(_0x2d314e)['to']['be']('final'), expect(_0x176093)['to']['be'](0x3);
        }, function () {
            throw new Error('should\x20not\x20fail');
        });
    }), it(_0x922735(0x113), function () {
        var _0x2bb407 = _0x922735, _0x345249 = 0x0;
        return promiseRetry(function (_0x1e09ab) {
            var _0x20d253 = _0x3a98;
            return _0x345249 += 0x1, promiseDelay(0xa)[_0x20d253(0x104)](function () {
                var _0x388f1a = _0x20d253;
                _0x1e09ab(new Error(_0x388f1a(0x103)));
            })[_0x20d253(0x114)](function (_0xa697c8) {
                _0x1e09ab(_0xa697c8);
            });
        }, {
            'retries': 0x1,
            'factor': 0x1
        })[_0x2bb407(0x104)](function () {
            throw new Error('should\x20not\x20succeed');
        }, function (_0x57c815) {
            var _0x590c1 = _0x2bb407;
            expect(_0x57c815['message'])['to']['be'](_0x590c1(0x103)), expect(_0x345249)['to']['be'](0x2);
        });
    }), it('should\x20allow\x20options\x20to\x20be\x20passed\x20first', function () {
        var _0x321f50 = _0x922735, _0x1edea6 = 0x0;
        return promiseRetry({ 'factor': 0x1 }, function (_0x27bdae) {
            var _0x81c4b = _0x3a98;
            return _0x1edea6 += 0x1, promiseDelay(0xa)[_0x81c4b(0x104)](function () {
                var _0x404426 = _0x81c4b;
                return _0x1edea6 <= 0x2 && _0x27bdae(new Error(_0x404426(0x103))), _0x404426(0x105);
            });
        })[_0x321f50(0x104)](function (_0x1b41bc) {
            var _0x3339de = _0x321f50;
            expect(_0x1b41bc)['to']['be'](_0x3339de(0x105)), expect(_0x1edea6)['to']['be'](0x3);
        }, function () {
            throw new Error('should\x20not\x20fail');
        });
    });
});
