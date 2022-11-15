'use strict';
const _0x53d4 = [
    'cancelAnimationFrame',
    'should\x20call\x20nested\x20setInterval\x20when\x20cleared',
    'clearInterval',
    'setInterval',
    'should\x20call\x20function\x20with\x20setInterval',
    'toBeCalledTimes',
    'should\x20call\x20function\x20with\x20queueReactNativeMicrotask',
    'should\x20not\x20call\x20function\x20with\x20clearReactNativeMicrotask',
    'callReactNativeMicrotasks',
    'toBeCalled',
    'should\x20call\x20functions\x20in\x20the\x20right\x20order\x20with\x20queueReactNativeMicrotask',
    'should\x20call\x20functions\x20in\x20the\x20right\x20order\x20with\x20nested\x20queueReactNativeMicrotask',
    'should\x20call\x20function\x20with\x20requestAnimationFrame',
    'should\x20not\x20call\x20function\x20if\x20we\x20don\x27t\x20callTimers',
    'not',
    'should\x20call\x20setInterval\x20as\x20many\x20times\x20as\x20callTimers\x20is\x20called',
    'should\x20only\x20call\x20the\x20function\x20who\x27s\x20id\x20we\x20pass\x20in',
    'should\x20still\x20execute\x20all\x20callbacks\x20even\x20if\x20one\x20throws',
    'bind',
    'toThrow',
    'should\x20clear\x20timers\x20even\x20if\x20callback\x20throws',
    'error',
    'should\x20not\x20warn\x20if\x20callback\x20is\x20called\x20on\x20cancelled\x20timer',
    'should\x20warn\x20when\x20callTimers\x20is\x20called\x20with\x20garbage\x20timer\x20id',
    'should\x20only\x20call\x20callback\x20once\x20for\x20setTimeout',
    'should\x20only\x20call\x20callback\x20once\x20for\x20requestAnimationFrame',
    'second\x20error',
    'toThrowError',
    'first\x20error',
    'should\x20pass\x20along\x20errors\x20thrown\x20from\x20queueReactNativeMicrotask',
    'error\x20within\x20queueReactNativeMicrotask',
    'createTimer',
    'calls',
    'should\x20throw\x20all\x20errors\x20from\x20queueReactNativeMicrotask',
    'length',
    'error\x20within\x20setTimeout',
    'should\x20throw\x20all\x20errors\x20from\x20setTimeout',
    'error\x20within\x20setInterval',
    'should\x20not\x20call\x20to\x20native\x20when\x20clearing\x20a\x20null\x20timer',
    'deleteTimer',
    '20747MBIyVL',
    '83RBdILG',
    '319eCEmAH',
    '4121bpgpmS',
    '111844lQeIvd',
    '852843FSyJBb',
    '1cjWaGZ',
    '370127dDVgTr',
    '1rRsGPe',
    '639629rUylRc',
    '1353398mOeWgD',
    'enableAutomock',
    'mock',
    '../NativeTiming',
    'unmock',
    '../JSTimers',
    'JSTimers',
    'spyOn',
    'setTimeout',
    'warn',
    'should\x20call\x20function\x20with\x20setTimeout',
    'toBe',
    'should\x20call\x20nested\x20setTimeout\x20when\x20cleared',
    'clearTimeout',
    'callTimers',
    'should\x20call\x20nested\x20queueReactNativeMicrotask\x20when\x20cleared',
    'queueReactNativeMicrotask',
    'clearReactNativeMicrotask',
    'should\x20call\x20nested\x20requestAnimationFrame\x20when\x20cleared',
    'requestAnimationFrame'
];
const _0xbac6b0 = _0x7947;
function _0x7947(_0x431b33, _0x5f4dc6) {
    return _0x7947 = function (_0x53d4af, _0x7947d8) {
        _0x53d4af = _0x53d4af - 0x1d6;
        let _0x3f0a31 = _0x53d4[_0x53d4af];
        return _0x3f0a31;
    }, _0x7947(_0x431b33, _0x5f4dc6);
}
(function (_0x489de5, _0x406f62) {
    const _0x52231a = _0x7947;
    while (!![]) {
        try {
            const _0x291d11 = parseInt(_0x52231a(0x1d6)) * -parseInt(_0x52231a(0x1d7)) + parseInt(_0x52231a(0x1d8)) * parseInt(_0x52231a(0x1d9)) + parseInt(_0x52231a(0x1da)) + parseInt(_0x52231a(0x1db)) * parseInt(_0x52231a(0x1dc)) + -parseInt(_0x52231a(0x1dd)) + -parseInt(_0x52231a(0x1de)) * parseInt(_0x52231a(0x1df)) + parseInt(_0x52231a(0x1e0));
            if (_0x291d11 === _0x406f62)
                break;
            else
                _0x489de5['push'](_0x489de5['shift']());
        } catch (_0x1ba981) {
            _0x489de5['push'](_0x489de5['shift']());
        }
    }
}(_0x53d4, 0xdbf3f));
const NativeTiming = {
    'createTimer': jest['fn'](),
    'deleteTimer': jest['fn'](),
    'setSendIdleEvents': jest['fn']()
};
jest[_0xbac6b0(0x1e1)]()[_0xbac6b0(0x1e2)](_0xbac6b0(0x1e3), () => ({
    '__esModule': !![],
    'default': NativeTiming
}))[_0xbac6b0(0x1e4)](_0xbac6b0(0x1e5));
const JSTimers = require(_0xbac6b0(0x1e5));
describe(_0xbac6b0(0x1e6), function () {
    const _0x544a92 = _0xbac6b0;
    beforeEach(function () {
        const _0x2f8493 = _0x7947;
        jest[_0x2f8493(0x1e7)](console, 'warn'), global[_0x2f8493(0x1e8)] = JSTimers[_0x2f8493(0x1e8)];
    }), afterEach(() => {
        const _0x4e987f = _0x7947;
        console[_0x4e987f(0x1e9)]['mockRestore']();
    }), it(_0x544a92(0x1ea), function () {
        const _0x1d526d = _0x544a92;
        let _0xcfe926 = ![];
        const _0x44fc22 = JSTimers[_0x1d526d(0x1e8)](function () {
            _0xcfe926 = !![];
        });
        JSTimers['callTimers']([_0x44fc22]), expect(_0xcfe926)[_0x1d526d(0x1eb)](!![]);
    }), it(_0x544a92(0x1ec), function () {
        const _0x317fe7 = _0x544a92;
        let _0x38d011, _0x2744bc, _0x302a12, _0xb72e7e = 0x0;
        _0x38d011 = JSTimers['setTimeout'](function () {
            const _0x5b0747 = _0x7947;
            JSTimers[_0x5b0747(0x1ed)](_0x38d011), _0x2744bc = JSTimers[_0x5b0747(0x1e8)](function () {
                JSTimers['clearTimeout'](_0x2744bc), _0x302a12 = JSTimers['setTimeout'](function () {
                    _0xb72e7e += 0x1;
                });
            });
        }), JSTimers[_0x317fe7(0x1ee)]([_0x38d011]), JSTimers[_0x317fe7(0x1ee)]([_0x2744bc]), JSTimers[_0x317fe7(0x1ee)]([_0x302a12]), expect(_0xb72e7e)[_0x317fe7(0x1eb)](0x1);
    }), it(_0x544a92(0x1ef), function () {
        const _0x215018 = _0x544a92;
        let _0x336808, _0x43f628, _0x226a4e, _0x3d137b = 0x0;
        _0x336808 = JSTimers[_0x215018(0x1f0)](function () {
            const _0x3ac12c = _0x215018;
            JSTimers[_0x3ac12c(0x1f1)](_0x336808), _0x43f628 = JSTimers[_0x3ac12c(0x1f0)](function () {
                const _0x443d6b = _0x3ac12c;
                JSTimers[_0x443d6b(0x1f1)](_0x43f628), _0x226a4e = JSTimers[_0x443d6b(0x1f0)](function () {
                    _0x3d137b += 0x1;
                });
            });
        }), JSTimers[_0x215018(0x1ee)]([_0x336808]), JSTimers[_0x215018(0x1ee)]([_0x43f628]), JSTimers[_0x215018(0x1ee)]([_0x226a4e]), expect(_0x3d137b)[_0x215018(0x1eb)](0x1);
    }), it(_0x544a92(0x1f2), function () {
        const _0x3c9ecd = _0x544a92;
        let _0x203f94, _0x359302, _0x2f983d, _0x81685d = 0x0;
        _0x203f94 = JSTimers[_0x3c9ecd(0x1f3)](function () {
            const _0x3586cb = _0x3c9ecd;
            JSTimers[_0x3586cb(0x1f4)](_0x203f94), _0x359302 = JSTimers['requestAnimationFrame'](function () {
                const _0x121013 = _0x3586cb;
                JSTimers['cancelAnimationFrame'](_0x359302), _0x2f983d = JSTimers[_0x121013(0x1f3)](function () {
                    _0x81685d += 0x1;
                });
            });
        }), JSTimers[_0x3c9ecd(0x1ee)]([_0x203f94]), JSTimers[_0x3c9ecd(0x1ee)]([_0x359302]), JSTimers[_0x3c9ecd(0x1ee)]([_0x2f983d]), expect(_0x81685d)[_0x3c9ecd(0x1eb)](0x1);
    }), it(_0x544a92(0x1f5), function () {
        const _0x53101b = _0x544a92;
        let _0x58db8, _0x336f61, _0x425c4c, _0x39d315 = 0x0;
        _0x58db8 = JSTimers['setInterval'](function () {
            const _0x501b98 = _0x7947;
            JSTimers[_0x501b98(0x1f6)](_0x58db8), _0x336f61 = JSTimers[_0x501b98(0x1f7)](function () {
                const _0x284ed6 = _0x501b98;
                JSTimers[_0x284ed6(0x1f6)](_0x336f61), _0x425c4c = JSTimers[_0x284ed6(0x1f7)](function () {
                    _0x39d315 += 0x1;
                });
            });
        }), JSTimers[_0x53101b(0x1ee)]([_0x58db8]), JSTimers[_0x53101b(0x1ee)]([_0x336f61]), JSTimers[_0x53101b(0x1ee)]([_0x425c4c]), expect(_0x39d315)[_0x53101b(0x1eb)](0x1);
    }), it(_0x544a92(0x1f8), function () {
        const _0x21126d = _0x544a92, _0x222397 = jest['fn'](), _0x214e86 = JSTimers[_0x21126d(0x1f7)](_0x222397);
        JSTimers[_0x21126d(0x1ee)]([_0x214e86]), expect(_0x222397)[_0x21126d(0x1f9)](0x1);
    }), it(_0x544a92(0x1fa), function () {
        const _0x410117 = _0x544a92, _0x49c307 = jest['fn']();
        JSTimers['queueReactNativeMicrotask'](_0x49c307), JSTimers['callReactNativeMicrotasks'](), expect(_0x49c307)[_0x410117(0x1f9)](0x1);
    }), it(_0x544a92(0x1fb), function () {
        const _0x3df3dd = _0x544a92, _0x237801 = jest['fn'](), _0x4d92ec = JSTimers['queueReactNativeMicrotask'](_0x237801);
        JSTimers[_0x3df3dd(0x1f1)](_0x4d92ec), JSTimers[_0x3df3dd(0x1fc)](), expect(_0x237801)['not'][_0x3df3dd(0x1fd)]();
    }), it(_0x544a92(0x1fe), function () {
        const _0x210c33 = _0x544a92;
        let _0x518474 = 0x0, _0x1e359e = null, _0x33cfec = null;
        JSTimers['queueReactNativeMicrotask'](function () {
            _0x1e359e = _0x518474++;
        }), JSTimers[_0x210c33(0x1f0)](function () {
            _0x33cfec = _0x518474++;
        }), JSTimers[_0x210c33(0x1fc)](), expect(_0x1e359e)[_0x210c33(0x1eb)](0x0), expect(_0x33cfec)['toBe'](0x1);
    }), it(_0x544a92(0x1ff), function () {
        const _0x4df64e = _0x544a92;
        let _0x2d7e27 = 0x0, _0x43d01d = null, _0x11dbe2 = null, _0x4c5a65 = null;
        JSTimers['queueReactNativeMicrotask'](function () {
            const _0x58067d = _0x7947;
            _0x43d01d = _0x2d7e27++, JSTimers[_0x58067d(0x1f0)](function () {
                _0x4c5a65 = _0x2d7e27++;
            }), _0x11dbe2 = _0x2d7e27++;
        }), JSTimers[_0x4df64e(0x1fc)](), expect(_0x43d01d)['toBe'](0x0), expect(_0x11dbe2)[_0x4df64e(0x1eb)](0x1), expect(_0x4c5a65)['toBe'](0x2);
    }), it('should\x20call\x20nested\x20queueReactNativeMicrotask', function () {
        const _0x29426b = _0x544a92;
        let _0x2aa690 = ![], _0x1a7e97 = ![];
        JSTimers['queueReactNativeMicrotask'](function () {
            const _0x60ebb6 = _0x7947;
            _0x2aa690 = !![], JSTimers[_0x60ebb6(0x1f0)](function () {
                _0x1a7e97 = !![];
            });
        }), JSTimers[_0x29426b(0x1fc)](), expect(_0x2aa690)['toBe'](!![]), expect(_0x1a7e97)[_0x29426b(0x1eb)](!![]);
    }), it(_0x544a92(0x200), function () {
        const _0x45cf67 = _0x544a92, _0x526b8b = jest['fn'](), _0x2857a1 = JSTimers[_0x45cf67(0x1f3)](_0x526b8b);
        JSTimers[_0x45cf67(0x1ee)]([_0x2857a1]), expect(_0x526b8b)['toBeCalledTimes'](0x1);
    }), it(_0x544a92(0x201), function () {
        const _0x12950e = _0x544a92, _0x468850 = jest['fn']();
        JSTimers['setTimeout'](_0x468850, 0xa), expect(_0x468850)[_0x12950e(0x202)][_0x12950e(0x1fd)](), JSTimers[_0x12950e(0x1f7)](_0x468850, 0xa), expect(_0x468850)[_0x12950e(0x202)][_0x12950e(0x1fd)](), JSTimers[_0x12950e(0x1f3)](_0x468850), expect(_0x468850)[_0x12950e(0x202)][_0x12950e(0x1fd)]();
    }), it(_0x544a92(0x203), function () {
        const _0xea32ee = _0x544a92, _0x424e7e = jest['fn'](), _0x2d14d3 = JSTimers[_0xea32ee(0x1f7)](_0x424e7e, 0xa);
        JSTimers[_0xea32ee(0x1ee)]([_0x2d14d3]), JSTimers[_0xea32ee(0x1ee)]([_0x2d14d3]), JSTimers[_0xea32ee(0x1ee)]([_0x2d14d3]), JSTimers[_0xea32ee(0x1ee)]([_0x2d14d3]), expect(_0x424e7e)[_0xea32ee(0x1f9)](0x4);
    }), it(_0x544a92(0x204), function () {
        const _0x46b5ed = _0x544a92;
        let _0x41fbb8 = ![], _0x16880e = ![];
        JSTimers[_0x46b5ed(0x1e8)](function () {
            _0x41fbb8 = !![];
        });
        const _0x32f8df = JSTimers['setTimeout'](function () {
            _0x16880e = !![];
        });
        JSTimers[_0x46b5ed(0x1ee)]([_0x32f8df]), expect(_0x41fbb8)[_0x46b5ed(0x1eb)](![]), expect(_0x16880e)[_0x46b5ed(0x1eb)](!![]);
    }), it('should\x20work\x20with\x20calling\x20multiple\x20timers', function () {
        const _0x5e4067 = _0x544a92;
        let _0x5608bd = ![], _0x29e80a = ![];
        const _0x44235e = JSTimers[_0x5e4067(0x1e8)](function () {
                _0x5608bd = !![];
            }), _0x2430ea = JSTimers[_0x5e4067(0x1e8)](function () {
                _0x29e80a = !![];
            });
        JSTimers[_0x5e4067(0x1ee)]([
            _0x44235e,
            _0x2430ea
        ]), expect(_0x5608bd)[_0x5e4067(0x1eb)](!![]), expect(_0x29e80a)['toBe'](!![]);
    }), it(_0x544a92(0x205), function () {
        const _0x3b1b43 = _0x544a92, _0x3471f9 = JSTimers[_0x3b1b43(0x1e8)](function () {
                throw new Error('error');
            }, 0xa);
        let _0x22d8a3 = ![];
        const _0x5db9d8 = JSTimers[_0x3b1b43(0x1e8)](function () {
            _0x22d8a3 = !![];
        }, 0xa);
        expect(JSTimers[_0x3b1b43(0x1ee)][_0x3b1b43(0x206)](null, [
            _0x3471f9,
            _0x5db9d8
        ]))[_0x3b1b43(0x207)](), expect(_0x22d8a3)[_0x3b1b43(0x1eb)](!![]);
    }), it(_0x544a92(0x208), function () {
        const _0xff9321 = _0x544a92, _0x38bb4f = JSTimers[_0xff9321(0x1e8)](function () {
                throw new Error('error');
            }, 0xa);
        expect(JSTimers['callTimers']['bind'](null, [_0x38bb4f]))[_0xff9321(0x207)](_0xff9321(0x209)), JSTimers['callTimers']['bind'](null, [_0x38bb4f]);
    }), it(_0x544a92(0x20a), function () {
        const _0xc8c601 = _0x544a92, _0xa5417b = jest['fn'](), _0x44d835 = JSTimers[_0xc8c601(0x1e8)](_0xa5417b, 0xa);
        JSTimers[_0xc8c601(0x1ed)](_0x44d835), JSTimers[_0xc8c601(0x1ee)]([_0x44d835]), expect(_0xa5417b)[_0xc8c601(0x202)][_0xc8c601(0x1fd)](), expect(console[_0xc8c601(0x1e9)])['not']['toBeCalled']();
    }), it(_0x544a92(0x20b), function () {
        const _0x7f7b52 = _0x544a92;
        JSTimers[_0x7f7b52(0x1ee)]([0x539]), expect(console['warn'])[_0x7f7b52(0x1fd)]();
    }), it(_0x544a92(0x20c), function () {
        const _0x456710 = _0x544a92, _0x5126d8 = jest['fn'](), _0x10afe6 = JSTimers['setTimeout'](_0x5126d8, 0xa);
        JSTimers[_0x456710(0x1ee)]([_0x10afe6]), expect(_0x5126d8)['toBeCalledTimes'](0x1), JSTimers[_0x456710(0x1ee)]([_0x10afe6]), expect(_0x5126d8)[_0x456710(0x1f9)](0x1), expect(console[_0x456710(0x1e9)])['not'][_0x456710(0x1fd)]();
    }), it(_0x544a92(0x20d), function () {
        const _0x5029bd = _0x544a92, _0x43b5da = jest['fn'](), _0x101628 = JSTimers['requestAnimationFrame'](_0x43b5da, 0xa);
        JSTimers[_0x5029bd(0x1ee)]([_0x101628]), expect(_0x43b5da)[_0x5029bd(0x1f9)](0x1), JSTimers[_0x5029bd(0x1ee)]([_0x101628]), expect(_0x43b5da)[_0x5029bd(0x1f9)](0x1), expect(console['warn'])[_0x5029bd(0x202)]['toBeCalled']();
    }), it('should\x20re-throw\x20first\x20exception', function () {
        const _0x4f87c7 = _0x544a92, _0x481392 = JSTimers['setTimeout'](function () {
                throw new Error('first\x20error');
            }), _0x3c5488 = JSTimers['setTimeout'](function () {
                const _0x3a0838 = _0x7947;
                throw new Error(_0x3a0838(0x20e));
            });
        expect(JSTimers[_0x4f87c7(0x1ee)][_0x4f87c7(0x206)](null, [
            _0x481392,
            _0x3c5488
        ]))[_0x4f87c7(0x20f)](_0x4f87c7(0x210));
    }), it(_0x544a92(0x211), function () {
        const _0x3039bc = _0x544a92;
        JSTimers[_0x3039bc(0x1f0)](function () {
            const _0x29ef98 = _0x3039bc;
            throw new Error(_0x29ef98(0x212));
        }), NativeTiming[_0x3039bc(0x213)] = jest['fn'](), JSTimers[_0x3039bc(0x1fc)](), expect(NativeTiming['createTimer'])[_0x3039bc(0x1fd)]();
        const _0x3034fc = NativeTiming['createTimer'][_0x3039bc(0x1e2)][_0x3039bc(0x214)][0x0][0x0];
        expect(JSTimers['callTimers'][_0x3039bc(0x206)](null, [_0x3034fc]))[_0x3039bc(0x20f)](_0x3039bc(0x212));
    }), it(_0x544a92(0x215), function () {
        const _0x2dfbb9 = _0x544a92;
        JSTimers[_0x2dfbb9(0x1f0)](function () {
            const _0x13aee9 = _0x2dfbb9;
            throw new Error(_0x13aee9(0x210));
        }), JSTimers[_0x2dfbb9(0x1f0)](function () {
            const _0x5ebc0a = _0x2dfbb9;
            throw new Error(_0x5ebc0a(0x20e));
        }), NativeTiming[_0x2dfbb9(0x213)] = jest['fn'](), JSTimers['callReactNativeMicrotasks'](), expect(NativeTiming[_0x2dfbb9(0x213)][_0x2dfbb9(0x1e2)][_0x2dfbb9(0x214)][_0x2dfbb9(0x216)])[_0x2dfbb9(0x1eb)](0x2);
        const _0x5ae606 = NativeTiming['createTimer']['mock'][_0x2dfbb9(0x214)][0x0][0x0];
        expect(JSTimers[_0x2dfbb9(0x1ee)][_0x2dfbb9(0x206)](null, [_0x5ae606]))['toThrowError']('first\x20error');
        const _0x1c56bc = NativeTiming[_0x2dfbb9(0x213)][_0x2dfbb9(0x1e2)]['calls'][0x1][0x0];
        expect(JSTimers['callTimers']['bind'](null, [_0x1c56bc]))[_0x2dfbb9(0x20f)](_0x2dfbb9(0x20e));
    }), it('should\x20pass\x20along\x20errors\x20thrown\x20from\x20setTimeout', function () {
        const _0x42bcfe = _0x544a92, _0x107cf6 = JSTimers[_0x42bcfe(0x1e8)](function () {
                const _0x130c3b = _0x42bcfe;
                throw new Error(_0x130c3b(0x217));
            });
        expect(JSTimers[_0x42bcfe(0x1ee)][_0x42bcfe(0x206)](null, [_0x107cf6]))[_0x42bcfe(0x20f)]('error\x20within\x20setTimeout');
    }), it(_0x544a92(0x218), function () {
        const _0x565b3c = _0x544a92, _0x7481c9 = JSTimers[_0x565b3c(0x1e8)](function () {
                const _0x508b47 = _0x565b3c;
                throw new Error(_0x508b47(0x210));
            }), _0x39ab93 = JSTimers[_0x565b3c(0x1e8)](function () {
                const _0x5dd16e = _0x565b3c;
                throw new Error(_0x5dd16e(0x20e));
            });
        NativeTiming['createTimer'] = jest['fn'](), expect(JSTimers['callTimers']['bind'](null, [
            _0x7481c9,
            _0x39ab93
        ]))[_0x565b3c(0x20f)](_0x565b3c(0x210)), expect(NativeTiming[_0x565b3c(0x213)]['mock'][_0x565b3c(0x214)]['length'])[_0x565b3c(0x1eb)](0x1);
        const _0x1262eb = NativeTiming[_0x565b3c(0x213)][_0x565b3c(0x1e2)][_0x565b3c(0x214)][0x0][0x0];
        expect(JSTimers[_0x565b3c(0x1ee)][_0x565b3c(0x206)](null, [_0x1262eb]))[_0x565b3c(0x20f)]('second\x20error');
    }), it('should\x20pass\x20along\x20errors\x20thrown\x20from\x20setInterval', function () {
        const _0x495c12 = _0x544a92, _0x26265f = JSTimers[_0x495c12(0x1f7)](function () {
                const _0x434d18 = _0x495c12;
                throw new Error(_0x434d18(0x219));
            });
        expect(JSTimers[_0x495c12(0x1ee)]['bind'](null, [_0x26265f]))[_0x495c12(0x20f)](_0x495c12(0x219));
    }), it(_0x544a92(0x21a), function () {
        const _0xb0b923 = _0x544a92, _0x558742 = JSTimers[_0xb0b923(0x1e8)](() => {
            });
        JSTimers[_0xb0b923(0x1ed)](_0x558742), NativeTiming[_0xb0b923(0x21b)] = jest['fn'](), JSTimers[_0xb0b923(0x1ed)](null), expect(NativeTiming[_0xb0b923(0x21b)]['mock'][_0xb0b923(0x214)][_0xb0b923(0x216)])[_0xb0b923(0x1eb)](0x0);
    });
});
