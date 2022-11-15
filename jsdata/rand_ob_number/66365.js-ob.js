'use strict';
var expect = require('expect.js'), promiseRetry = require('../'), promiseDelay = require('sleep-promise');
describe('promise-retry', function () {
    it('should\x20call\x20fn\x20again\x20if\x20retry\x20was\x20called', function () {
        var _0x49797f = -0x3e6 * -0x3 + -0x189a + 0xce8;
        return promiseRetry(function (_0x18aec7) {
            return _0x49797f += 0x11 * 0x77 + 0x3 * -0x1ce + -0x27c, promiseDelay(-0x67 * 0x51 + -0x2407 + 0x44a8)['then'](function () {
                return _0x49797f <= 0x2496 + -0x1d0b * 0x1 + -0x789 && _0x18aec7(new Error('foo')), 'final';
            });
        }, { 'factor': 0x1 })['then'](function (_0x4f5071) {
            expect(_0x4f5071)['to']['be']('final'), expect(_0x49797f)['to']['be'](0x1b57 + 0x23 * 0x9d + -0x30cb);
        }, function () {
            throw new Error('should\x20not\x20fail');
        });
    }), it('should\x20call\x20fn\x20with\x20the\x20attempt\x20number', function () {
        var _0x2cfe89 = 0x160d + -0x14 * -0x9b + -0x247 * 0xf;
        return promiseRetry(function (_0x300c83, _0x303fed) {
            return _0x2cfe89 += 0x18ad + 0x238c + -0x3c38, expect(_0x2cfe89)['to']['equal'](_0x303fed), promiseDelay(0x1e54 + -0x664 + -0x36a * 0x7)['then'](function () {
                return _0x2cfe89 <= -0x99f * -0x3 + 0x11 * 0x39 + -0x4 * 0x829 && _0x300c83(new Error('foo')), 'final';
            });
        }, { 'factor': 0x1 })['then'](function (_0x838578) {
            expect(_0x838578)['to']['be']('final'), expect(_0x2cfe89)['to']['be'](-0x1 * 0x1187 + 0x1ad * -0x10 + 0x2c5a);
        }, function () {
            throw new Error('should\x20not\x20fail');
        });
    }), it('should\x20not\x20retry\x20on\x20fulfillment\x20if\x20retry\x20was\x20not\x20called', function () {
        var _0x55af31 = 0x235a + -0x136 + -0x1b5 * 0x14;
        return promiseRetry(function () {
            return _0x55af31 += 0x8cc + -0xd06 + -0x3 * -0x169, promiseDelay(0x1615 * -0x1 + 0x14a5 + -0xbd * -0x2)['then'](function () {
                return 'final';
            });
        })['then'](function (_0x1464b7) {
            expect(_0x1464b7)['to']['be']('final'), expect(_0x55af31)['to']['be'](-0x42e + -0x9c4 + 0x1 * 0xdf3);
        }, function () {
            throw new Error('should\x20not\x20fail');
        });
    }), it('should\x20not\x20retry\x20on\x20rejection\x20if\x20retry\x20was\x20not\x20called', function () {
        var _0x28da10 = -0x53d + -0x12 * 0x1f1 + 0x1b * 0x17d;
        return promiseRetry(function () {
            return _0x28da10 += -0x1dbd + -0x22c4 + -0x2041 * -0x2, promiseDelay(-0x56d * 0x6 + 0x1e7a + 0x21e)['then'](function () {
                throw new Error('foo');
            });
        })['then'](function () {
            throw new Error('should\x20not\x20succeed');
        }, function (_0x2de143) {
            expect(_0x2de143['message'])['to']['be']('foo'), expect(_0x28da10)['to']['be'](0x178 * -0x12 + 0x72f * -0x3 + -0x2ffe * -0x1);
        });
    }), it('should\x20not\x20retry\x20on\x20rejection\x20if\x20nr\x20of\x20retries\x20is\x200', function () {
        var _0x50e6ed = 0x1ce1 + -0x59d + -0x5d1 * 0x4;
        return promiseRetry(function (_0x441c34) {
            return _0x50e6ed += 0xd * -0x14b + 0xb02 * 0x2 + -0x94 * 0x9, promiseDelay(0x1 * 0x1646 + -0x252e * 0x1 + -0x779 * -0x2)['then'](function () {
                throw new Error('foo');
            })['catch'](_0x441c34);
        }, { 'retries': 0x0 })['then'](function () {
            throw new Error('should\x20not\x20succeed');
        }, function (_0x85a3a1) {
            expect(_0x85a3a1['message'])['to']['be']('foo'), expect(_0x50e6ed)['to']['be'](-0x9ec + 0x12bc * -0x2 + 0x2f65);
        });
    }), it('should\x20reject\x20the\x20promise\x20if\x20the\x20retries\x20were\x20exceeded', function () {
        var _0x4f1a9b = -0x2392 + -0x7 * 0x388 + 0x3c4a;
        return promiseRetry(function (_0xc361a) {
            return _0x4f1a9b += -0x1edd + -0x7 * 0x556 + -0x94 * -0x76, promiseDelay(-0x9ff * -0x2 + 0x79d + -0x1b91)['then'](function () {
                throw new Error('foo');
            })['catch'](_0xc361a);
        }, {
            'retries': 0x2,
            'factor': 0x1
        })['then'](function () {
            throw new Error('should\x20not\x20succeed');
        }, function (_0x2618f4) {
            expect(_0x2618f4['message'])['to']['be']('foo'), expect(_0x4f1a9b)['to']['be'](0x23ce + -0x1133 + 0x2a8 * -0x7);
        });
    }), it('should\x20pass\x20options\x20to\x20the\x20underlying\x20retry\x20module', function () {
        var _0x43b2fd = 0x1b9b * -0x1 + -0x1a5 * -0x1 + 0x19f6 * 0x1;
        return promiseRetry(function (_0x3bcc4f) {
            return promiseDelay(-0xdd5 + 0x1ca3 * 0x1 + -0x5a * 0x2a)['then'](function () {
                return _0x43b2fd < 0x64 * 0x2f + -0xb * -0x197 + -0x5 * 0x72b && (_0x43b2fd += -0x2 * -0x97a + 0x5 * 0x39 + -0x1410, _0x3bcc4f(new Error('foo'))), 'final';
            });
        }, {
            'retries': 0x1,
            'factor': 0x1
        })['then'](function () {
            throw new Error('should\x20not\x20succeed');
        }, function (_0xf50f51) {
            expect(_0xf50f51['message'])['to']['be']('foo');
        });
    }), it('should\x20convert\x20direct\x20fulfillments\x20into\x20promises', function () {
        return promiseRetry(function () {
            return 'final';
        }, { 'factor': 0x1 })['then'](function (_0x255580) {
            expect(_0x255580)['to']['be']('final');
        }, function () {
            throw new Error('should\x20not\x20fail');
        });
    }), it('should\x20convert\x20direct\x20rejections\x20into\x20promises', function () {
        promiseRetry(function () {
            throw new Error('foo');
        }, {
            'retries': 0x1,
            'factor': 0x1
        })['then'](function () {
            throw new Error('should\x20not\x20succeed');
        }, function (_0x3dfaa9) {
            expect(_0x3dfaa9['message'])['to']['be']('foo');
        });
    }), it('should\x20not\x20crash\x20on\x20undefined\x20rejections', function () {
        return promiseRetry(function () {
            throw undefined;
        }, {
            'retries': 0x1,
            'factor': 0x1
        })['then'](function () {
            throw new Error('should\x20not\x20succeed');
        }, function (_0x1958c0) {
            expect(_0x1958c0)['to']['be'](undefined);
        })['then'](function () {
            return promiseRetry(function (_0x37a7cf) {
                _0x37a7cf();
            }, {
                'retries': 0x1,
                'factor': 0x1
            });
        })['then'](function () {
            throw new Error('should\x20not\x20succeed');
        }, function (_0x4a42bd) {
            expect(_0x4a42bd)['to']['be'](undefined);
        });
    }), it('should\x20retry\x20if\x20retry()\x20was\x20called\x20with\x20undefined', function () {
        var _0x3cac89 = 0xc97 + -0x1bf6 + 0xf5f;
        return promiseRetry(function (_0x5ff595) {
            return _0x3cac89 += 0x26ab * -0x1 + -0x66a * 0x3 + 0x1 * 0x39ea, promiseDelay(0x1 * -0x8c5 + -0x1 * -0x2c5 + 0x305 * 0x2)['then'](function () {
                return _0x3cac89 <= -0x4ba + 0x19d1 + 0x303 * -0x7 && _0x5ff595(), 'final';
            });
        }, { 'factor': 0x1 })['then'](function (_0x37dacb) {
            expect(_0x37dacb)['to']['be']('final'), expect(_0x3cac89)['to']['be'](0x22ae + -0x8 * -0x2da + -0x397b);
        }, function () {
            throw new Error('should\x20not\x20fail');
        });
    }), it('should\x20work\x20with\x20several\x20retries\x20in\x20the\x20same\x20chain', function () {
        var _0xcf662 = 0x10d * -0x9 + 0x27c * 0x6 + -0x573;
        return promiseRetry(function (_0xf965bd) {
            return _0xcf662 += 0x1 * 0x2655 + -0x184b + -0xe09, promiseDelay(-0x1e03 + 0x6fe + 0x170f)['then'](function () {
                _0xf965bd(new Error('foo'));
            })['catch'](function (_0x146427) {
                _0xf965bd(_0x146427);
            });
        }, {
            'retries': 0x1,
            'factor': 0x1
        })['then'](function () {
            throw new Error('should\x20not\x20succeed');
        }, function (_0x3b76e1) {
            expect(_0x3b76e1['message'])['to']['be']('foo'), expect(_0xcf662)['to']['be'](0xa06 + -0x1992 + 0xf8e);
        });
    }), it('should\x20allow\x20options\x20to\x20be\x20passed\x20first', function () {
        var _0x3deecb = 0x59 * -0x2a + -0xafb * -0x3 + 0x5 * -0x3ab;
        return promiseRetry({ 'factor': 0x1 }, function (_0x4565d6) {
            return _0x3deecb += 0x2 * 0x28b + 0x14fa + 0x1a0f * -0x1, promiseDelay(-0x3 * -0x9d9 + -0xa99 + -0x12e8)['then'](function () {
                return _0x3deecb <= 0x6d9 + -0x3 * -0x50b + -0x15f8 && _0x4565d6(new Error('foo')), 'final';
            });
        })['then'](function (_0x42102f) {
            expect(_0x42102f)['to']['be']('final'), expect(_0x3deecb)['to']['be'](-0x2cb + -0x112e + -0x4 * -0x4ff);
        }, function () {
            throw new Error('should\x20not\x20fail');
        });
    });
});
