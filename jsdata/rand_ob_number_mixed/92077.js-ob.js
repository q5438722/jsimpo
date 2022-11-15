'use strict';
const NativeTiming = {
    'createTimer': jest['fn'](),
    'deleteTimer': jest['fn'](),
    'setSendIdleEvents': jest['fn']()
};
jest['enableAutomock']()['mock']('../NativeTiming', () => ({
    '__esModule': !![],
    'default': NativeTiming
}))['unmock']('../JSTimers');
const JSTimers = require('../JSTimers');
describe('JSTimers', function () {
    beforeEach(function () {
        jest['spyOn'](console, 'warn'), global['setTimeout'] = JSTimers['setTimeout'];
    }), afterEach(() => {
        console['warn']['mockRestore']();
    }), it('should\x20call\x20function\x20with\x20setTimeout', function () {
        let _0x890b84 = ![];
        const _0x3acb05 = JSTimers['setTimeout'](function () {
            _0x890b84 = !![];
        });
        JSTimers['callTimers']([_0x3acb05]), expect(_0x890b84)['toBe'](!![]);
    }), it('should\x20call\x20nested\x20setTimeout\x20when\x20cleared', function () {
        let _0x431e3b, _0x5d95b3, _0x2d6881, _0x2205f5 = 0x2379 + 0xdfb + -0x3174;
        _0x431e3b = JSTimers['setTimeout'](function () {
            JSTimers['clearTimeout'](_0x431e3b), _0x5d95b3 = JSTimers['setTimeout'](function () {
                JSTimers['clearTimeout'](_0x5d95b3), _0x2d6881 = JSTimers['setTimeout'](function () {
                    _0x2205f5 += -0x67 * -0x58 + 0x4 * -0x500 + -0xf67;
                });
            });
        }), JSTimers['callTimers']([_0x431e3b]), JSTimers['callTimers']([_0x5d95b3]), JSTimers['callTimers']([_0x2d6881]), expect(_0x2205f5)['toBe'](0x1c9 * -0xd + -0x12d6 * -0x2 + -0xe76);
    }), it('should\x20call\x20nested\x20queueReactNativeMicrotask\x20when\x20cleared', function () {
        let _0x5d3342, _0x197e32, _0x4ad210, _0x3ff416 = 0x1f74 + 0x2405 + -0x4379;
        _0x5d3342 = JSTimers['queueReactNativeMicrotask'](function () {
            JSTimers['clearReactNativeMicrotask'](_0x5d3342), _0x197e32 = JSTimers['queueReactNativeMicrotask'](function () {
                JSTimers['clearReactNativeMicrotask'](_0x197e32), _0x4ad210 = JSTimers['queueReactNativeMicrotask'](function () {
                    _0x3ff416 += 0x3 * 0x392 + 0x6d + -0x19 * 0x72;
                });
            });
        }), JSTimers['callTimers']([_0x5d3342]), JSTimers['callTimers']([_0x197e32]), JSTimers['callTimers']([_0x4ad210]), expect(_0x3ff416)['toBe'](-0x2705 + -0x12fd * 0x2 + 0x4d00);
    }), it('should\x20call\x20nested\x20requestAnimationFrame\x20when\x20cleared', function () {
        let _0x45429c, _0x302c35, _0x38a0e1, _0x448bcf = -0x65 * -0x5d + -0x22e5 * -0x1 + -0x51d * 0xe;
        _0x45429c = JSTimers['requestAnimationFrame'](function () {
            JSTimers['cancelAnimationFrame'](_0x45429c), _0x302c35 = JSTimers['requestAnimationFrame'](function () {
                JSTimers['cancelAnimationFrame'](_0x302c35), _0x38a0e1 = JSTimers['requestAnimationFrame'](function () {
                    _0x448bcf += -0x163f + -0x1 * 0x26b + -0x5 * -0x4ef;
                });
            });
        }), JSTimers['callTimers']([_0x45429c]), JSTimers['callTimers']([_0x302c35]), JSTimers['callTimers']([_0x38a0e1]), expect(_0x448bcf)['toBe'](-0x1 * 0x2135 + -0x2 * -0x5bf + 0x8b * 0x28);
    }), it('should\x20call\x20nested\x20setInterval\x20when\x20cleared', function () {
        let _0x390613, _0x452408, _0x39a0d1, _0x2ea970 = -0xcce + -0x6 * -0x4af + 0x2 * -0x7a6;
        _0x390613 = JSTimers['setInterval'](function () {
            JSTimers['clearInterval'](_0x390613), _0x452408 = JSTimers['setInterval'](function () {
                JSTimers['clearInterval'](_0x452408), _0x39a0d1 = JSTimers['setInterval'](function () {
                    _0x2ea970 += -0x1a44 + -0x1f5b + 0x1cd * 0x20;
                });
            });
        }), JSTimers['callTimers']([_0x390613]), JSTimers['callTimers']([_0x452408]), JSTimers['callTimers']([_0x39a0d1]), expect(_0x2ea970)['toBe'](0x2 * -0x98b + 0x1b6f + -0x858);
    }), it('should\x20call\x20function\x20with\x20setInterval', function () {
        const _0x566ff7 = jest['fn'](), _0x1081ab = JSTimers['setInterval'](_0x566ff7);
        JSTimers['callTimers']([_0x1081ab]), expect(_0x566ff7)['toBeCalledTimes'](-0x1 * -0x448 + -0x1b * 0x8b + 0x376 * 0x3);
    }), it('should\x20call\x20function\x20with\x20queueReactNativeMicrotask', function () {
        const _0x53b3ab = jest['fn']();
        JSTimers['queueReactNativeMicrotask'](_0x53b3ab), JSTimers['callReactNativeMicrotasks'](), expect(_0x53b3ab)['toBeCalledTimes'](-0x1515 + -0x1b1c + 0x3032);
    }), it('should\x20not\x20call\x20function\x20with\x20clearReactNativeMicrotask', function () {
        const _0x4bff43 = jest['fn'](), _0x2c9a65 = JSTimers['queueReactNativeMicrotask'](_0x4bff43);
        JSTimers['clearReactNativeMicrotask'](_0x2c9a65), JSTimers['callReactNativeMicrotasks'](), expect(_0x4bff43)['not']['toBeCalled']();
    }), it('should\x20call\x20functions\x20in\x20the\x20right\x20order\x20with\x20queueReactNativeMicrotask', function () {
        let _0x457053 = -0x1 * -0x253d + -0x1cc1 + -0x3 * 0x2d4, _0x40091d = null, _0x8dbf43 = null;
        JSTimers['queueReactNativeMicrotask'](function () {
            _0x40091d = _0x457053++;
        }), JSTimers['queueReactNativeMicrotask'](function () {
            _0x8dbf43 = _0x457053++;
        }), JSTimers['callReactNativeMicrotasks'](), expect(_0x40091d)['toBe'](0x25cb + -0x2 * -0x1071 + -0x3 * 0x178f), expect(_0x8dbf43)['toBe'](-0x3 * -0x1bd + -0x2e8 + 0x24e * -0x1);
    }), it('should\x20call\x20functions\x20in\x20the\x20right\x20order\x20with\x20nested\x20queueReactNativeMicrotask', function () {
        let _0x13d58a = 0x8dc + 0x1404 + 0x21 * -0xe0, _0x58ef4c = null, _0x44862b = null, _0x1c0dcf = null;
        JSTimers['queueReactNativeMicrotask'](function () {
            _0x58ef4c = _0x13d58a++, JSTimers['queueReactNativeMicrotask'](function () {
                _0x1c0dcf = _0x13d58a++;
            }), _0x44862b = _0x13d58a++;
        }), JSTimers['callReactNativeMicrotasks'](), expect(_0x58ef4c)['toBe'](0x88a + -0x2100 + 0x1876), expect(_0x44862b)['toBe'](0x2347 + 0x1f * 0xbc + 0x36a * -0x11), expect(_0x1c0dcf)['toBe'](0x1b9d + 0xb25 + -0x26c0);
    }), it('should\x20call\x20nested\x20queueReactNativeMicrotask', function () {
        let _0x125a85 = ![], _0x5c726e = ![];
        JSTimers['queueReactNativeMicrotask'](function () {
            _0x125a85 = !![], JSTimers['queueReactNativeMicrotask'](function () {
                _0x5c726e = !![];
            });
        }), JSTimers['callReactNativeMicrotasks'](), expect(_0x125a85)['toBe'](!![]), expect(_0x5c726e)['toBe'](!![]);
    }), it('should\x20call\x20function\x20with\x20requestAnimationFrame', function () {
        const _0x9c8724 = jest['fn'](), _0x10f7ae = JSTimers['requestAnimationFrame'](_0x9c8724);
        JSTimers['callTimers']([_0x10f7ae]), expect(_0x9c8724)['toBeCalledTimes'](0xaa2 + 0x124b + 0x4d2 * -0x6);
    }), it('should\x20not\x20call\x20function\x20if\x20we\x20don\x27t\x20callTimers', function () {
        const _0x5f0bf2 = jest['fn']();
        JSTimers['setTimeout'](_0x5f0bf2, -0x3 * -0x2c3 + -0xa0 * -0x2f + -0x259f), expect(_0x5f0bf2)['not']['toBeCalled'](), JSTimers['setInterval'](_0x5f0bf2, -0x1 * 0x6a6 + 0x232e + 0xe * -0x209), expect(_0x5f0bf2)['not']['toBeCalled'](), JSTimers['requestAnimationFrame'](_0x5f0bf2), expect(_0x5f0bf2)['not']['toBeCalled']();
    }), it('should\x20call\x20setInterval\x20as\x20many\x20times\x20as\x20callTimers\x20is\x20called', function () {
        const _0x277869 = jest['fn'](), _0x5a76a6 = JSTimers['setInterval'](_0x277869, -0x1944 + -0x2416 * 0x1 + 0x3d64);
        JSTimers['callTimers']([_0x5a76a6]), JSTimers['callTimers']([_0x5a76a6]), JSTimers['callTimers']([_0x5a76a6]), JSTimers['callTimers']([_0x5a76a6]), expect(_0x277869)['toBeCalledTimes'](-0x108f + 0x744 + 0x1 * 0x94f);
    }), it('should\x20only\x20call\x20the\x20function\x20who\x27s\x20id\x20we\x20pass\x20in', function () {
        let _0x4dcbc0 = ![], _0x596148 = ![];
        JSTimers['setTimeout'](function () {
            _0x4dcbc0 = !![];
        });
        const _0x1d3fe8 = JSTimers['setTimeout'](function () {
            _0x596148 = !![];
        });
        JSTimers['callTimers']([_0x1d3fe8]), expect(_0x4dcbc0)['toBe'](![]), expect(_0x596148)['toBe'](!![]);
    }), it('should\x20work\x20with\x20calling\x20multiple\x20timers', function () {
        let _0x516221 = ![], _0x408ebb = ![];
        const _0x5ae1f2 = JSTimers['setTimeout'](function () {
                _0x516221 = !![];
            }), _0x1a1939 = JSTimers['setTimeout'](function () {
                _0x408ebb = !![];
            });
        JSTimers['callTimers']([
            _0x5ae1f2,
            _0x1a1939
        ]), expect(_0x516221)['toBe'](!![]), expect(_0x408ebb)['toBe'](!![]);
    }), it('should\x20still\x20execute\x20all\x20callbacks\x20even\x20if\x20one\x20throws', function () {
        const _0x2b48eb = JSTimers['setTimeout'](function () {
            throw new Error('error');
        }, -0x120d + -0x1 * -0xed5 + -0x6 * -0x8b);
        let _0x53b990 = ![];
        const _0x3d72b8 = JSTimers['setTimeout'](function () {
            _0x53b990 = !![];
        }, 0x23bd + 0xfdd * 0x2 + -0x436d);
        expect(JSTimers['callTimers']['bind'](null, [
            _0x2b48eb,
            _0x3d72b8
        ]))['toThrow'](), expect(_0x53b990)['toBe'](!![]);
    }), it('should\x20clear\x20timers\x20even\x20if\x20callback\x20throws', function () {
        const _0x258529 = JSTimers['setTimeout'](function () {
            throw new Error('error');
        }, 0x1a7e + -0x1b91 + 0x11d);
        expect(JSTimers['callTimers']['bind'](null, [_0x258529]))['toThrow']('error'), JSTimers['callTimers']['bind'](null, [_0x258529]);
    }), it('should\x20not\x20warn\x20if\x20callback\x20is\x20called\x20on\x20cancelled\x20timer', function () {
        const _0x55255d = jest['fn'](), _0x256b76 = JSTimers['setTimeout'](_0x55255d, -0x110d + 0x21ce + 0x185 * -0xb);
        JSTimers['clearTimeout'](_0x256b76), JSTimers['callTimers']([_0x256b76]), expect(_0x55255d)['not']['toBeCalled'](), expect(console['warn'])['not']['toBeCalled']();
    }), it('should\x20warn\x20when\x20callTimers\x20is\x20called\x20with\x20garbage\x20timer\x20id', function () {
        JSTimers['callTimers']([-0x14a1 * 0x1 + 0x2391 + 0x1 * -0x9b7]), expect(console['warn'])['toBeCalled']();
    }), it('should\x20only\x20call\x20callback\x20once\x20for\x20setTimeout', function () {
        const _0x14a64e = jest['fn'](), _0x380217 = JSTimers['setTimeout'](_0x14a64e, -0x88a * 0x1 + 0x1e20 + -0x158c);
        JSTimers['callTimers']([_0x380217]), expect(_0x14a64e)['toBeCalledTimes'](0xefa * -0x1 + -0x2564 + 0x345f), JSTimers['callTimers']([_0x380217]), expect(_0x14a64e)['toBeCalledTimes'](0x2 * 0xf0d + -0x1de1 * 0x1 + -0x38), expect(console['warn'])['not']['toBeCalled']();
    }), it('should\x20only\x20call\x20callback\x20once\x20for\x20requestAnimationFrame', function () {
        const _0x3eec3f = jest['fn'](), _0x3c87fd = JSTimers['requestAnimationFrame'](_0x3eec3f, -0xf43 + -0xc * 0x139 + 0x1 * 0x1df9);
        JSTimers['callTimers']([_0x3c87fd]), expect(_0x3eec3f)['toBeCalledTimes'](-0x2 * -0xe59 + -0x14ec + -0x7c5), JSTimers['callTimers']([_0x3c87fd]), expect(_0x3eec3f)['toBeCalledTimes'](0x5 * 0x385 + 0xa2 * -0x1d + 0xc2), expect(console['warn'])['not']['toBeCalled']();
    }), it('should\x20re-throw\x20first\x20exception', function () {
        const _0x594f45 = JSTimers['setTimeout'](function () {
                throw new Error('first\x20error');
            }), _0x141122 = JSTimers['setTimeout'](function () {
                throw new Error('second\x20error');
            });
        expect(JSTimers['callTimers']['bind'](null, [
            _0x594f45,
            _0x141122
        ]))['toThrowError']('first\x20error');
    }), it('should\x20pass\x20along\x20errors\x20thrown\x20from\x20queueReactNativeMicrotask', function () {
        JSTimers['queueReactNativeMicrotask'](function () {
            throw new Error('error\x20within\x20queueReactNativeMicrotask');
        }), NativeTiming['createTimer'] = jest['fn'](), JSTimers['callReactNativeMicrotasks'](), expect(NativeTiming['createTimer'])['toBeCalled']();
        const _0xc44499 = NativeTiming['createTimer']['mock']['calls'][-0x3c0 + -0x1 * 0x84 + 0x444][-0x293 * -0x5 + 0x1031 + -0x14 * 0x174];
        expect(JSTimers['callTimers']['bind'](null, [_0xc44499]))['toThrowError']('error\x20within\x20queueReactNativeMicrotask');
    }), it('should\x20throw\x20all\x20errors\x20from\x20queueReactNativeMicrotask', function () {
        JSTimers['queueReactNativeMicrotask'](function () {
            throw new Error('first\x20error');
        }), JSTimers['queueReactNativeMicrotask'](function () {
            throw new Error('second\x20error');
        }), NativeTiming['createTimer'] = jest['fn'](), JSTimers['callReactNativeMicrotasks'](), expect(NativeTiming['createTimer']['mock']['calls']['length'])['toBe'](0x6 * -0x44c + -0x2517 + 0x3ee1);
        const _0x38e347 = NativeTiming['createTimer']['mock']['calls'][0x1 * -0xb3a + 0x1b4b + -0x1011][0x6c9 * 0x5 + -0x12 * -0x1cd + -0x4257];
        expect(JSTimers['callTimers']['bind'](null, [_0x38e347]))['toThrowError']('first\x20error');
        const _0xe7383f = NativeTiming['createTimer']['mock']['calls'][-0x4 * -0xbd + 0x6d * 0x9 + -0x6c8][-0x4f * 0x23 + 0x3 * 0x871 + -0xe86];
        expect(JSTimers['callTimers']['bind'](null, [_0xe7383f]))['toThrowError']('second\x20error');
    }), it('should\x20pass\x20along\x20errors\x20thrown\x20from\x20setTimeout', function () {
        const _0xb1d039 = JSTimers['setTimeout'](function () {
            throw new Error('error\x20within\x20setTimeout');
        });
        expect(JSTimers['callTimers']['bind'](null, [_0xb1d039]))['toThrowError']('error\x20within\x20setTimeout');
    }), it('should\x20throw\x20all\x20errors\x20from\x20setTimeout', function () {
        const _0x3f170b = JSTimers['setTimeout'](function () {
                throw new Error('first\x20error');
            }), _0x3d2401 = JSTimers['setTimeout'](function () {
                throw new Error('second\x20error');
            });
        NativeTiming['createTimer'] = jest['fn'](), expect(JSTimers['callTimers']['bind'](null, [
            _0x3f170b,
            _0x3d2401
        ]))['toThrowError']('first\x20error'), expect(NativeTiming['createTimer']['mock']['calls']['length'])['toBe'](-0x24e5 + 0x1 * -0x14d5 + -0x39bb * -0x1);
        const _0x5ab945 = NativeTiming['createTimer']['mock']['calls'][-0x1784 + 0x13e9 + 0x39b][0xd67 + -0x16d6 + 0x96f * 0x1];
        expect(JSTimers['callTimers']['bind'](null, [_0x5ab945]))['toThrowError']('second\x20error');
    }), it('should\x20pass\x20along\x20errors\x20thrown\x20from\x20setInterval', function () {
        const _0x23d979 = JSTimers['setInterval'](function () {
            throw new Error('error\x20within\x20setInterval');
        });
        expect(JSTimers['callTimers']['bind'](null, [_0x23d979]))['toThrowError']('error\x20within\x20setInterval');
    }), it('should\x20not\x20call\x20to\x20native\x20when\x20clearing\x20a\x20null\x20timer', function () {
        const _0x353bd2 = JSTimers['setTimeout'](() => {
        });
        JSTimers['clearTimeout'](_0x353bd2), NativeTiming['deleteTimer'] = jest['fn'](), JSTimers['clearTimeout'](null), expect(NativeTiming['deleteTimer']['mock']['calls']['length'])['toBe'](0x24ba + -0x49a + -0x2020);
    });
});
