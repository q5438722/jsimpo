const NativeTiming = {
    'createTimer': jest['fn'](),
    'deleteTimer': jest['fn'](),
    'setSendIdleEvents': jest['fn']()
};
jest[_0xbac6b0(481)]()[_0xbac6b0(482)](_0xbac6b0(483), () => ({
    '__esModule': !![],
    'default': NativeTiming
}))[_0xbac6b0(484)](_0xbac6b0(485));
const JSTimers = require(_0xbac6b0(485));
describe(_0xbac6b0(486), function () {
    const _0x544a92 = _0xbac6b0;
    beforeEach(function () {
        const _0x2f8493 = _0x7947;
        jest[_0x2f8493(487)](console, 'warn'), global[_0x2f8493(488)] = JSTimers[_0x2f8493(488)];
    }), afterEach(() => {
        const _0x4e987f = _0x7947;
        console[_0x4e987f(489)]['mockRestore']();
    }), it(_0x544a92(490), function () {
        const _0x1d526d = _0x544a92;
        let _0xcfe926 = ![];
        const _0x44fc22 = JSTimers[_0x1d526d(488)](function () {
            _0xcfe926 = !![];
        });
        JSTimers['callTimers']([_0x44fc22]), expect(_0xcfe926)[_0x1d526d(491)](!![]);
    }), it(_0x544a92(492), function () {
        const _0x317fe7 = _0x544a92;
        let _0x38d011, _0x2744bc, _0x302a12, _0xb72e7e = 0;
        _0x38d011 = JSTimers['setTimeout'](function () {
            const _0x5b0747 = _0x7947;
            JSTimers[_0x5b0747(493)](_0x38d011), _0x2744bc = JSTimers[_0x5b0747(488)](function () {
                JSTimers['clearTimeout'](_0x2744bc), _0x302a12 = JSTimers['setTimeout'](function () {
                    _0xb72e7e += 1;
                });
            });
        }), JSTimers[_0x317fe7(494)]([_0x38d011]), JSTimers[_0x317fe7(494)]([_0x2744bc]), JSTimers[_0x317fe7(494)]([_0x302a12]), expect(_0xb72e7e)[_0x317fe7(491)](1);
    }), it(_0x544a92(495), function () {
        const _0x215018 = _0x544a92;
        let _0x336808, _0x43f628, _0x226a4e, _0x3d137b = 0;
        _0x336808 = JSTimers[_0x215018(496)](function () {
            const _0x3ac12c = _0x215018;
            JSTimers[_0x3ac12c(497)](_0x336808), _0x43f628 = JSTimers[_0x3ac12c(496)](function () {
                const _0x443d6b = _0x3ac12c;
                JSTimers[_0x443d6b(497)](_0x43f628), _0x226a4e = JSTimers[_0x443d6b(496)](function () {
                    _0x3d137b += 1;
                });
            });
        }), JSTimers[_0x215018(494)]([_0x336808]), JSTimers[_0x215018(494)]([_0x43f628]), JSTimers[_0x215018(494)]([_0x226a4e]), expect(_0x3d137b)[_0x215018(491)](1);
    }), it(_0x544a92(498), function () {
        const _0x3c9ecd = _0x544a92;
        let _0x203f94, _0x359302, _0x2f983d, _0x81685d = 0;
        _0x203f94 = JSTimers[_0x3c9ecd(499)](function () {
            const _0x3586cb = _0x3c9ecd;
            JSTimers[_0x3586cb(500)](_0x203f94), _0x359302 = JSTimers['requestAnimationFrame'](function () {
                const _0x121013 = _0x3586cb;
                JSTimers['cancelAnimationFrame'](_0x359302), _0x2f983d = JSTimers[_0x121013(499)](function () {
                    _0x81685d += 1;
                });
            });
        }), JSTimers[_0x3c9ecd(494)]([_0x203f94]), JSTimers[_0x3c9ecd(494)]([_0x359302]), JSTimers[_0x3c9ecd(494)]([_0x2f983d]), expect(_0x81685d)[_0x3c9ecd(491)](1);
    }), it(_0x544a92(501), function () {
        const _0x53101b = _0x544a92;
        let _0x58db8, _0x336f61, _0x425c4c, _0x39d315 = 0;
        _0x58db8 = JSTimers['setInterval'](function () {
            const _0x501b98 = _0x7947;
            JSTimers[_0x501b98(502)](_0x58db8), _0x336f61 = JSTimers[_0x501b98(503)](function () {
                const _0x284ed6 = _0x501b98;
                JSTimers[_0x284ed6(502)](_0x336f61), _0x425c4c = JSTimers[_0x284ed6(503)](function () {
                    _0x39d315 += 1;
                });
            });
        }), JSTimers[_0x53101b(494)]([_0x58db8]), JSTimers[_0x53101b(494)]([_0x336f61]), JSTimers[_0x53101b(494)]([_0x425c4c]), expect(_0x39d315)[_0x53101b(491)](1);
    }), it(_0x544a92(504), function () {
        const _0x21126d = _0x544a92, _0x222397 = jest['fn'](), _0x214e86 = JSTimers[_0x21126d(503)](_0x222397);
        JSTimers[_0x21126d(494)]([_0x214e86]), expect(_0x222397)[_0x21126d(505)](1);
    }), it(_0x544a92(506), function () {
        const _0x410117 = _0x544a92, _0x49c307 = jest['fn']();
        JSTimers['queueReactNativeMicrotask'](_0x49c307), JSTimers['callReactNativeMicrotasks'](), expect(_0x49c307)[_0x410117(505)](1);
    }), it(_0x544a92(507), function () {
        const _0x3df3dd = _0x544a92, _0x237801 = jest['fn'](), _0x4d92ec = JSTimers['queueReactNativeMicrotask'](_0x237801);
        JSTimers[_0x3df3dd(497)](_0x4d92ec), JSTimers[_0x3df3dd(508)](), expect(_0x237801)['not'][_0x3df3dd(509)]();
    }), it(_0x544a92(510), function () {
        const _0x210c33 = _0x544a92;
        let _0x518474 = 0, _0x1e359e = null, _0x33cfec = null;
        JSTimers['queueReactNativeMicrotask'](function () {
            _0x1e359e = _0x518474++;
        }), JSTimers[_0x210c33(496)](function () {
            _0x33cfec = _0x518474++;
        }), JSTimers[_0x210c33(508)](), expect(_0x1e359e)[_0x210c33(491)](0), expect(_0x33cfec)['toBe'](1);
    }), it(_0x544a92(511), function () {
        const _0x4df64e = _0x544a92;
        let _0x2d7e27 = 0, _0x43d01d = null, _0x11dbe2 = null, _0x4c5a65 = null;
        JSTimers['queueReactNativeMicrotask'](function () {
            const _0x58067d = _0x7947;
            _0x43d01d = _0x2d7e27++, JSTimers[_0x58067d(496)](function () {
                _0x4c5a65 = _0x2d7e27++;
            }), _0x11dbe2 = _0x2d7e27++;
        }), JSTimers[_0x4df64e(508)](), expect(_0x43d01d)['toBe'](0), expect(_0x11dbe2)[_0x4df64e(491)](1), expect(_0x4c5a65)['toBe'](2);
    }), it('should call nested queueReactNativeMicrotask', function () {
        const _0x29426b = _0x544a92;
        let _0x2aa690 = ![], _0x1a7e97 = ![];
        JSTimers['queueReactNativeMicrotask'](function () {
            const _0x60ebb6 = _0x7947;
            _0x2aa690 = !![], JSTimers[_0x60ebb6(496)](function () {
                _0x1a7e97 = !![];
            });
        }), JSTimers[_0x29426b(508)](), expect(_0x2aa690)['toBe'](!![]), expect(_0x1a7e97)[_0x29426b(491)](!![]);
    }), it(_0x544a92(512), function () {
        const _0x45cf67 = _0x544a92, _0x526b8b = jest['fn'](), _0x2857a1 = JSTimers[_0x45cf67(499)](_0x526b8b);
        JSTimers[_0x45cf67(494)]([_0x2857a1]), expect(_0x526b8b)['toBeCalledTimes'](1);
    }), it(_0x544a92(513), function () {
        const _0x12950e = _0x544a92, _0x468850 = jest['fn']();
        JSTimers['setTimeout'](_0x468850, 10), expect(_0x468850)[_0x12950e(514)][_0x12950e(509)](), JSTimers[_0x12950e(503)](_0x468850, 10), expect(_0x468850)[_0x12950e(514)][_0x12950e(509)](), JSTimers[_0x12950e(499)](_0x468850), expect(_0x468850)[_0x12950e(514)][_0x12950e(509)]();
    }), it(_0x544a92(515), function () {
        const _0xea32ee = _0x544a92, _0x424e7e = jest['fn'](), _0x2d14d3 = JSTimers[_0xea32ee(503)](_0x424e7e, 10);
        JSTimers[_0xea32ee(494)]([_0x2d14d3]), JSTimers[_0xea32ee(494)]([_0x2d14d3]), JSTimers[_0xea32ee(494)]([_0x2d14d3]), JSTimers[_0xea32ee(494)]([_0x2d14d3]), expect(_0x424e7e)[_0xea32ee(505)](4);
    }), it(_0x544a92(516), function () {
        const _0x46b5ed = _0x544a92;
        let _0x41fbb8 = ![], _0x16880e = ![];
        JSTimers[_0x46b5ed(488)](function () {
            _0x41fbb8 = !![];
        });
        const _0x32f8df = JSTimers['setTimeout'](function () {
            _0x16880e = !![];
        });
        JSTimers[_0x46b5ed(494)]([_0x32f8df]), expect(_0x41fbb8)[_0x46b5ed(491)](![]), expect(_0x16880e)[_0x46b5ed(491)](!![]);
    }), it('should work with calling multiple timers', function () {
        const _0x5e4067 = _0x544a92;
        let _0x5608bd = ![], _0x29e80a = ![];
        const _0x44235e = JSTimers[_0x5e4067(488)](function () {
                _0x5608bd = !![];
            }), _0x2430ea = JSTimers[_0x5e4067(488)](function () {
                _0x29e80a = !![];
            });
        JSTimers[_0x5e4067(494)]([
            _0x44235e,
            _0x2430ea
        ]), expect(_0x5608bd)[_0x5e4067(491)](!![]), expect(_0x29e80a)['toBe'](!![]);
    }), it(_0x544a92(517), function () {
        const _0x3b1b43 = _0x544a92, _0x3471f9 = JSTimers[_0x3b1b43(488)](function () {
                throw new Error('error');
            }, 10);
        let _0x22d8a3 = ![];
        const _0x5db9d8 = JSTimers[_0x3b1b43(488)](function () {
            _0x22d8a3 = !![];
        }, 10);
        expect(JSTimers[_0x3b1b43(494)][_0x3b1b43(518)](null, [
            _0x3471f9,
            _0x5db9d8
        ]))[_0x3b1b43(519)](), expect(_0x22d8a3)[_0x3b1b43(491)](!![]);
    }), it(_0x544a92(520), function () {
        const _0xff9321 = _0x544a92, _0x38bb4f = JSTimers[_0xff9321(488)](function () {
                throw new Error('error');
            }, 10);
        expect(JSTimers['callTimers']['bind'](null, [_0x38bb4f]))[_0xff9321(519)](_0xff9321(521)), JSTimers['callTimers']['bind'](null, [_0x38bb4f]);
    }), it(_0x544a92(522), function () {
        const _0xc8c601 = _0x544a92, _0xa5417b = jest['fn'](), _0x44d835 = JSTimers[_0xc8c601(488)](_0xa5417b, 10);
        JSTimers[_0xc8c601(493)](_0x44d835), JSTimers[_0xc8c601(494)]([_0x44d835]), expect(_0xa5417b)[_0xc8c601(514)][_0xc8c601(509)](), expect(console[_0xc8c601(489)])['not']['toBeCalled']();
    }), it(_0x544a92(523), function () {
        const _0x7f7b52 = _0x544a92;
        JSTimers[_0x7f7b52(494)]([1337]), expect(console['warn'])[_0x7f7b52(509)]();
    }), it(_0x544a92(524), function () {
        const _0x456710 = _0x544a92, _0x5126d8 = jest['fn'](), _0x10afe6 = JSTimers['setTimeout'](_0x5126d8, 10);
        JSTimers[_0x456710(494)]([_0x10afe6]), expect(_0x5126d8)['toBeCalledTimes'](1), JSTimers[_0x456710(494)]([_0x10afe6]), expect(_0x5126d8)[_0x456710(505)](1), expect(console[_0x456710(489)])['not'][_0x456710(509)]();
    }), it(_0x544a92(525), function () {
        const _0x5029bd = _0x544a92, _0x43b5da = jest['fn'](), _0x101628 = JSTimers['requestAnimationFrame'](_0x43b5da, 10);
        JSTimers[_0x5029bd(494)]([_0x101628]), expect(_0x43b5da)[_0x5029bd(505)](1), JSTimers[_0x5029bd(494)]([_0x101628]), expect(_0x43b5da)[_0x5029bd(505)](1), expect(console['warn'])[_0x5029bd(514)]['toBeCalled']();
    }), it('should re-throw first exception', function () {
        const _0x4f87c7 = _0x544a92, _0x481392 = JSTimers['setTimeout'](function () {
                throw new Error('first error');
            }), _0x3c5488 = JSTimers['setTimeout'](function () {
                const _0x3a0838 = _0x7947;
                throw new Error(_0x3a0838(526));
            });
        expect(JSTimers[_0x4f87c7(494)][_0x4f87c7(518)](null, [
            _0x481392,
            _0x3c5488
        ]))[_0x4f87c7(527)](_0x4f87c7(528));
    }), it(_0x544a92(529), function () {
        const _0x3039bc = _0x544a92;
        JSTimers[_0x3039bc(496)](function () {
            const _0x29ef98 = _0x3039bc;
            throw new Error(_0x29ef98(530));
        }), NativeTiming[_0x3039bc(531)] = jest['fn'](), JSTimers[_0x3039bc(508)](), expect(NativeTiming['createTimer'])[_0x3039bc(509)]();
        const _0x3034fc = NativeTiming['createTimer'][_0x3039bc(482)][_0x3039bc(532)][0][0];
        expect(JSTimers['callTimers'][_0x3039bc(518)](null, [_0x3034fc]))[_0x3039bc(527)](_0x3039bc(530));
    }), it(_0x544a92(533), function () {
        const _0x2dfbb9 = _0x544a92;
        JSTimers[_0x2dfbb9(496)](function () {
            const _0x13aee9 = _0x2dfbb9;
            throw new Error(_0x13aee9(528));
        }), JSTimers[_0x2dfbb9(496)](function () {
            const _0x5ebc0a = _0x2dfbb9;
            throw new Error(_0x5ebc0a(526));
        }), NativeTiming[_0x2dfbb9(531)] = jest['fn'](), JSTimers['callReactNativeMicrotasks'](), expect(NativeTiming[_0x2dfbb9(531)][_0x2dfbb9(482)][_0x2dfbb9(532)][_0x2dfbb9(534)])[_0x2dfbb9(491)](2);
        const _0x5ae606 = NativeTiming['createTimer']['mock'][_0x2dfbb9(532)][0][0];
        expect(JSTimers[_0x2dfbb9(494)][_0x2dfbb9(518)](null, [_0x5ae606]))['toThrowError']('first error');
        const _0x1c56bc = NativeTiming[_0x2dfbb9(531)][_0x2dfbb9(482)]['calls'][1][0];
        expect(JSTimers['callTimers']['bind'](null, [_0x1c56bc]))[_0x2dfbb9(527)](_0x2dfbb9(526));
    }), it('should pass along errors thrown from setTimeout', function () {
        const _0x42bcfe = _0x544a92, _0x107cf6 = JSTimers[_0x42bcfe(488)](function () {
                const _0x130c3b = _0x42bcfe;
                throw new Error(_0x130c3b(535));
            });
        expect(JSTimers[_0x42bcfe(494)][_0x42bcfe(518)](null, [_0x107cf6]))[_0x42bcfe(527)]('error within setTimeout');
    }), it(_0x544a92(536), function () {
        const _0x565b3c = _0x544a92, _0x7481c9 = JSTimers[_0x565b3c(488)](function () {
                const _0x508b47 = _0x565b3c;
                throw new Error(_0x508b47(528));
            }), _0x39ab93 = JSTimers[_0x565b3c(488)](function () {
                const _0x5dd16e = _0x565b3c;
                throw new Error(_0x5dd16e(526));
            });
        NativeTiming['createTimer'] = jest['fn'](), expect(JSTimers['callTimers']['bind'](null, [
            _0x7481c9,
            _0x39ab93
        ]))[_0x565b3c(527)](_0x565b3c(528)), expect(NativeTiming[_0x565b3c(531)]['mock'][_0x565b3c(532)]['length'])[_0x565b3c(491)](1);
        const _0x1262eb = NativeTiming[_0x565b3c(531)][_0x565b3c(482)][_0x565b3c(532)][0][0];
        expect(JSTimers[_0x565b3c(494)][_0x565b3c(518)](null, [_0x1262eb]))[_0x565b3c(527)]('second error');
    }), it('should pass along errors thrown from setInterval', function () {
        const _0x495c12 = _0x544a92, _0x26265f = JSTimers[_0x495c12(503)](function () {
                const _0x434d18 = _0x495c12;
                throw new Error(_0x434d18(537));
            });
        expect(JSTimers[_0x495c12(494)]['bind'](null, [_0x26265f]))[_0x495c12(527)](_0x495c12(537));
    }), it(_0x544a92(538), function () {
        const _0xb0b923 = _0x544a92, _0x558742 = JSTimers[_0xb0b923(488)](() => {
            });
        JSTimers[_0xb0b923(493)](_0x558742), NativeTiming[_0xb0b923(539)] = jest['fn'](), JSTimers[_0xb0b923(493)](null), expect(NativeTiming[_0xb0b923(539)]['mock'][_0xb0b923(532)][_0xb0b923(534)])[_0xb0b923(491)](0);
    });
});