'use strict';
const _0xa9b1 = [
    '621277qAaKbE',
    '1ciDxFS',
    '835437ZzNbPn',
    '5569SATstp',
    '52VUTNeJ',
    '756955ZFExys',
    '1144164rGMNGX',
    '358628efGglt',
    '1PBevdv',
    '1jFMsuS',
    '2649413HBLyTq',
    'enableAutomock',
    'mock',
    '../NativeTiming',
    '../JSTimers',
    'spyOn',
    'setTimeout',
    'warn',
    'mockRestore',
    'should\x20call\x20function\x20with\x20setTimeout',
    'callTimers',
    'toBe',
    'clearTimeout',
    'should\x20call\x20nested\x20queueReactNativeMicrotask\x20when\x20cleared',
    'clearReactNativeMicrotask',
    'queueReactNativeMicrotask',
    'should\x20call\x20nested\x20requestAnimationFrame\x20when\x20cleared',
    'cancelAnimationFrame',
    'requestAnimationFrame',
    'should\x20call\x20nested\x20setInterval\x20when\x20cleared',
    'clearInterval',
    'setInterval',
    'toBeCalledTimes',
    'should\x20not\x20call\x20function\x20with\x20clearReactNativeMicrotask',
    'not',
    'toBeCalled',
    'should\x20call\x20functions\x20in\x20the\x20right\x20order\x20with\x20queueReactNativeMicrotask',
    'callReactNativeMicrotasks',
    'should\x20call\x20nested\x20queueReactNativeMicrotask',
    'should\x20call\x20function\x20with\x20requestAnimationFrame',
    'should\x20not\x20call\x20function\x20if\x20we\x20don\x27t\x20callTimers',
    'should\x20call\x20setInterval\x20as\x20many\x20times\x20as\x20callTimers\x20is\x20called',
    'should\x20still\x20execute\x20all\x20callbacks\x20even\x20if\x20one\x20throws',
    'error',
    'bind',
    'toThrow',
    'should\x20clear\x20timers\x20even\x20if\x20callback\x20throws',
    'should\x20not\x20warn\x20if\x20callback\x20is\x20called\x20on\x20cancelled\x20timer',
    'should\x20only\x20call\x20callback\x20once\x20for\x20setTimeout',
    'should\x20only\x20call\x20callback\x20once\x20for\x20requestAnimationFrame',
    'should\x20re-throw\x20first\x20exception',
    'second\x20error',
    'should\x20pass\x20along\x20errors\x20thrown\x20from\x20queueReactNativeMicrotask',
    'error\x20within\x20queueReactNativeMicrotask',
    'createTimer',
    'calls',
    'toThrowError',
    'should\x20throw\x20all\x20errors\x20from\x20queueReactNativeMicrotask',
    'first\x20error',
    'length',
    'error\x20within\x20setTimeout',
    'should\x20pass\x20along\x20errors\x20thrown\x20from\x20setInterval',
    'error\x20within\x20setInterval',
    'deleteTimer'
];
const _0x50061c = _0x5988;
(function (_0x51ad97, _0x2669c0) {
    const _0x3fe62c = _0x5988;
    while (!![]) {
        try {
            const _0x64ca5e = parseInt(_0x3fe62c(0x107)) * parseInt(_0x3fe62c(0x108)) + parseInt(_0x3fe62c(0x109)) + parseInt(_0x3fe62c(0x10a)) * -parseInt(_0x3fe62c(0x10b)) + parseInt(_0x3fe62c(0x10c)) + parseInt(_0x3fe62c(0x10d)) + -parseInt(_0x3fe62c(0x10e)) * -parseInt(_0x3fe62c(0x10f)) + parseInt(_0x3fe62c(0x110)) * -parseInt(_0x3fe62c(0x111));
            if (_0x64ca5e === _0x2669c0)
                break;
            else
                _0x51ad97['push'](_0x51ad97['shift']());
        } catch (_0x56f3fd) {
            _0x51ad97['push'](_0x51ad97['shift']());
        }
    }
}(_0xa9b1, 0xbdcf4));
function _0x5988(_0x29e877, _0x89278e) {
    return _0x5988 = function (_0xa9b1d, _0x598858) {
        _0xa9b1d = _0xa9b1d - 0x107;
        let _0x59b6c7 = _0xa9b1[_0xa9b1d];
        return _0x59b6c7;
    }, _0x5988(_0x29e877, _0x89278e);
}
const NativeTiming = {
    'createTimer': jest['fn'](),
    'deleteTimer': jest['fn'](),
    'setSendIdleEvents': jest['fn']()
};
jest[_0x50061c(0x112)]()[_0x50061c(0x113)](_0x50061c(0x114), () => ({
    '__esModule': !![],
    'default': NativeTiming
}))['unmock'](_0x50061c(0x115));
const JSTimers = require(_0x50061c(0x115));
describe('JSTimers', function () {
    const _0x131038 = _0x50061c;
    beforeEach(function () {
        const _0x59ec48 = _0x5988;
        jest[_0x59ec48(0x116)](console, 'warn'), global[_0x59ec48(0x117)] = JSTimers[_0x59ec48(0x117)];
    }), afterEach(() => {
        const _0xe759e9 = _0x5988;
        console[_0xe759e9(0x118)][_0xe759e9(0x119)]();
    }), it(_0x131038(0x11a), function () {
        const _0x1f1c5b = _0x131038;
        let _0xc0cd53 = ![];
        const _0x178ba4 = JSTimers['setTimeout'](function () {
            _0xc0cd53 = !![];
        });
        JSTimers[_0x1f1c5b(0x11b)]([_0x178ba4]), expect(_0xc0cd53)[_0x1f1c5b(0x11c)](!![]);
    }), it('should\x20call\x20nested\x20setTimeout\x20when\x20cleared', function () {
        const _0x37d946 = _0x131038;
        let _0x236b73, _0x48b0ab, _0x24afc5, _0xee0aef = 0x0;
        _0x236b73 = JSTimers[_0x37d946(0x117)](function () {
            const _0x124cfe = _0x37d946;
            JSTimers[_0x124cfe(0x11d)](_0x236b73), _0x48b0ab = JSTimers['setTimeout'](function () {
                const _0x9589e6 = _0x124cfe;
                JSTimers['clearTimeout'](_0x48b0ab), _0x24afc5 = JSTimers[_0x9589e6(0x117)](function () {
                    _0xee0aef += 0x1;
                });
            });
        }), JSTimers[_0x37d946(0x11b)]([_0x236b73]), JSTimers[_0x37d946(0x11b)]([_0x48b0ab]), JSTimers[_0x37d946(0x11b)]([_0x24afc5]), expect(_0xee0aef)['toBe'](0x1);
    }), it(_0x131038(0x11e), function () {
        const _0x4c2494 = _0x131038;
        let _0x1d395a, _0x40835b, _0x4a7bf7, _0x380f6f = 0x0;
        _0x1d395a = JSTimers['queueReactNativeMicrotask'](function () {
            const _0x13746c = _0x5988;
            JSTimers[_0x13746c(0x11f)](_0x1d395a), _0x40835b = JSTimers[_0x13746c(0x120)](function () {
                const _0x3f894c = _0x13746c;
                JSTimers['clearReactNativeMicrotask'](_0x40835b), _0x4a7bf7 = JSTimers[_0x3f894c(0x120)](function () {
                    _0x380f6f += 0x1;
                });
            });
        }), JSTimers[_0x4c2494(0x11b)]([_0x1d395a]), JSTimers[_0x4c2494(0x11b)]([_0x40835b]), JSTimers[_0x4c2494(0x11b)]([_0x4a7bf7]), expect(_0x380f6f)[_0x4c2494(0x11c)](0x1);
    }), it(_0x131038(0x121), function () {
        const _0x411d5b = _0x131038;
        let _0x2e2c99, _0x4b9ecc, _0x46e7d8, _0x317af0 = 0x0;
        _0x2e2c99 = JSTimers['requestAnimationFrame'](function () {
            const _0x47b1fc = _0x5988;
            JSTimers[_0x47b1fc(0x122)](_0x2e2c99), _0x4b9ecc = JSTimers[_0x47b1fc(0x123)](function () {
                const _0x2a6b20 = _0x47b1fc;
                JSTimers[_0x2a6b20(0x122)](_0x4b9ecc), _0x46e7d8 = JSTimers['requestAnimationFrame'](function () {
                    _0x317af0 += 0x1;
                });
            });
        }), JSTimers['callTimers']([_0x2e2c99]), JSTimers[_0x411d5b(0x11b)]([_0x4b9ecc]), JSTimers[_0x411d5b(0x11b)]([_0x46e7d8]), expect(_0x317af0)[_0x411d5b(0x11c)](0x1);
    }), it(_0x131038(0x124), function () {
        const _0x34edb3 = _0x131038;
        let _0x1e1327, _0x25520f, _0x59ca1e, _0x575683 = 0x0;
        _0x1e1327 = JSTimers['setInterval'](function () {
            const _0x2d5c76 = _0x5988;
            JSTimers[_0x2d5c76(0x125)](_0x1e1327), _0x25520f = JSTimers[_0x2d5c76(0x126)](function () {
                const _0x145ce5 = _0x2d5c76;
                JSTimers['clearInterval'](_0x25520f), _0x59ca1e = JSTimers[_0x145ce5(0x126)](function () {
                    _0x575683 += 0x1;
                });
            });
        }), JSTimers[_0x34edb3(0x11b)]([_0x1e1327]), JSTimers[_0x34edb3(0x11b)]([_0x25520f]), JSTimers['callTimers']([_0x59ca1e]), expect(_0x575683)[_0x34edb3(0x11c)](0x1);
    }), it('should\x20call\x20function\x20with\x20setInterval', function () {
        const _0x4b8462 = _0x131038, _0x57e684 = jest['fn'](), _0x40b6b5 = JSTimers['setInterval'](_0x57e684);
        JSTimers['callTimers']([_0x40b6b5]), expect(_0x57e684)[_0x4b8462(0x127)](0x1);
    }), it('should\x20call\x20function\x20with\x20queueReactNativeMicrotask', function () {
        const _0x316882 = _0x131038, _0x5a4b3a = jest['fn']();
        JSTimers[_0x316882(0x120)](_0x5a4b3a), JSTimers['callReactNativeMicrotasks'](), expect(_0x5a4b3a)[_0x316882(0x127)](0x1);
    }), it(_0x131038(0x128), function () {
        const _0xa13ec3 = _0x131038, _0x2408a6 = jest['fn'](), _0x48b578 = JSTimers[_0xa13ec3(0x120)](_0x2408a6);
        JSTimers[_0xa13ec3(0x11f)](_0x48b578), JSTimers['callReactNativeMicrotasks'](), expect(_0x2408a6)[_0xa13ec3(0x129)][_0xa13ec3(0x12a)]();
    }), it(_0x131038(0x12b), function () {
        const _0x4cff25 = _0x131038;
        let _0x3fbb3c = 0x0, _0x32152d = null, _0x1e239a = null;
        JSTimers[_0x4cff25(0x120)](function () {
            _0x32152d = _0x3fbb3c++;
        }), JSTimers[_0x4cff25(0x120)](function () {
            _0x1e239a = _0x3fbb3c++;
        }), JSTimers[_0x4cff25(0x12c)](), expect(_0x32152d)[_0x4cff25(0x11c)](0x0), expect(_0x1e239a)['toBe'](0x1);
    }), it('should\x20call\x20functions\x20in\x20the\x20right\x20order\x20with\x20nested\x20queueReactNativeMicrotask', function () {
        const _0x3ecccb = _0x131038;
        let _0x4bec15 = 0x0, _0x162b89 = null, _0x4825c6 = null, _0x494ef2 = null;
        JSTimers['queueReactNativeMicrotask'](function () {
            const _0x48b11b = _0x5988;
            _0x162b89 = _0x4bec15++, JSTimers[_0x48b11b(0x120)](function () {
                _0x494ef2 = _0x4bec15++;
            }), _0x4825c6 = _0x4bec15++;
        }), JSTimers[_0x3ecccb(0x12c)](), expect(_0x162b89)[_0x3ecccb(0x11c)](0x0), expect(_0x4825c6)[_0x3ecccb(0x11c)](0x1), expect(_0x494ef2)[_0x3ecccb(0x11c)](0x2);
    }), it(_0x131038(0x12d), function () {
        const _0x58eb34 = _0x131038;
        let _0x50b12d = ![], _0x118876 = ![];
        JSTimers['queueReactNativeMicrotask'](function () {
            const _0x5a67af = _0x5988;
            _0x50b12d = !![], JSTimers[_0x5a67af(0x120)](function () {
                _0x118876 = !![];
            });
        }), JSTimers[_0x58eb34(0x12c)](), expect(_0x50b12d)['toBe'](!![]), expect(_0x118876)[_0x58eb34(0x11c)](!![]);
    }), it(_0x131038(0x12e), function () {
        const _0x3c5f7a = _0x131038, _0xc178f8 = jest['fn'](), _0x5df8f9 = JSTimers[_0x3c5f7a(0x123)](_0xc178f8);
        JSTimers[_0x3c5f7a(0x11b)]([_0x5df8f9]), expect(_0xc178f8)['toBeCalledTimes'](0x1);
    }), it(_0x131038(0x12f), function () {
        const _0x38a973 = _0x131038, _0x44f464 = jest['fn']();
        JSTimers[_0x38a973(0x117)](_0x44f464, 0xa), expect(_0x44f464)[_0x38a973(0x129)]['toBeCalled'](), JSTimers[_0x38a973(0x126)](_0x44f464, 0xa), expect(_0x44f464)[_0x38a973(0x129)][_0x38a973(0x12a)](), JSTimers[_0x38a973(0x123)](_0x44f464), expect(_0x44f464)['not'][_0x38a973(0x12a)]();
    }), it(_0x131038(0x130), function () {
        const _0x5f1183 = _0x131038, _0x1e80c7 = jest['fn'](), _0x1d3b7f = JSTimers['setInterval'](_0x1e80c7, 0xa);
        JSTimers[_0x5f1183(0x11b)]([_0x1d3b7f]), JSTimers[_0x5f1183(0x11b)]([_0x1d3b7f]), JSTimers[_0x5f1183(0x11b)]([_0x1d3b7f]), JSTimers[_0x5f1183(0x11b)]([_0x1d3b7f]), expect(_0x1e80c7)['toBeCalledTimes'](0x4);
    }), it('should\x20only\x20call\x20the\x20function\x20who\x27s\x20id\x20we\x20pass\x20in', function () {
        const _0x2291bb = _0x131038;
        let _0x5dbe96 = ![], _0x401ec0 = ![];
        JSTimers[_0x2291bb(0x117)](function () {
            _0x5dbe96 = !![];
        });
        const _0x4cd698 = JSTimers[_0x2291bb(0x117)](function () {
            _0x401ec0 = !![];
        });
        JSTimers[_0x2291bb(0x11b)]([_0x4cd698]), expect(_0x5dbe96)[_0x2291bb(0x11c)](![]), expect(_0x401ec0)['toBe'](!![]);
    }), it('should\x20work\x20with\x20calling\x20multiple\x20timers', function () {
        const _0x49458f = _0x131038;
        let _0x3665d4 = ![], _0xbe4d6a = ![];
        const _0x34618f = JSTimers[_0x49458f(0x117)](function () {
                _0x3665d4 = !![];
            }), _0x3ec739 = JSTimers[_0x49458f(0x117)](function () {
                _0xbe4d6a = !![];
            });
        JSTimers['callTimers']([
            _0x34618f,
            _0x3ec739
        ]), expect(_0x3665d4)['toBe'](!![]), expect(_0xbe4d6a)[_0x49458f(0x11c)](!![]);
    }), it(_0x131038(0x131), function () {
        const _0x1e7f8b = _0x131038, _0x43d7f3 = JSTimers[_0x1e7f8b(0x117)](function () {
                const _0x194011 = _0x1e7f8b;
                throw new Error(_0x194011(0x132));
            }, 0xa);
        let _0x5b0983 = ![];
        const _0x1d86f8 = JSTimers[_0x1e7f8b(0x117)](function () {
            _0x5b0983 = !![];
        }, 0xa);
        expect(JSTimers['callTimers'][_0x1e7f8b(0x133)](null, [
            _0x43d7f3,
            _0x1d86f8
        ]))[_0x1e7f8b(0x134)](), expect(_0x5b0983)[_0x1e7f8b(0x11c)](!![]);
    }), it(_0x131038(0x135), function () {
        const _0x494a4c = _0x131038, _0x15cc0d = JSTimers[_0x494a4c(0x117)](function () {
                throw new Error('error');
            }, 0xa);
        expect(JSTimers[_0x494a4c(0x11b)][_0x494a4c(0x133)](null, [_0x15cc0d]))['toThrow'](_0x494a4c(0x132)), JSTimers['callTimers'][_0x494a4c(0x133)](null, [_0x15cc0d]);
    }), it(_0x131038(0x136), function () {
        const _0x58bd2d = _0x131038, _0x508098 = jest['fn'](), _0x410cf = JSTimers[_0x58bd2d(0x117)](_0x508098, 0xa);
        JSTimers[_0x58bd2d(0x11d)](_0x410cf), JSTimers[_0x58bd2d(0x11b)]([_0x410cf]), expect(_0x508098)[_0x58bd2d(0x129)][_0x58bd2d(0x12a)](), expect(console['warn'])[_0x58bd2d(0x129)][_0x58bd2d(0x12a)]();
    }), it('should\x20warn\x20when\x20callTimers\x20is\x20called\x20with\x20garbage\x20timer\x20id', function () {
        const _0x6dbfc8 = _0x131038;
        JSTimers[_0x6dbfc8(0x11b)]([0x539]), expect(console[_0x6dbfc8(0x118)])[_0x6dbfc8(0x12a)]();
    }), it(_0x131038(0x137), function () {
        const _0x13d487 = _0x131038, _0x2f1c74 = jest['fn'](), _0x5c1205 = JSTimers[_0x13d487(0x117)](_0x2f1c74, 0xa);
        JSTimers[_0x13d487(0x11b)]([_0x5c1205]), expect(_0x2f1c74)['toBeCalledTimes'](0x1), JSTimers[_0x13d487(0x11b)]([_0x5c1205]), expect(_0x2f1c74)['toBeCalledTimes'](0x1), expect(console[_0x13d487(0x118)])[_0x13d487(0x129)]['toBeCalled']();
    }), it(_0x131038(0x138), function () {
        const _0x25fb15 = _0x131038, _0x26f5cc = jest['fn'](), _0x2889ff = JSTimers[_0x25fb15(0x123)](_0x26f5cc, 0xa);
        JSTimers[_0x25fb15(0x11b)]([_0x2889ff]), expect(_0x26f5cc)[_0x25fb15(0x127)](0x1), JSTimers[_0x25fb15(0x11b)]([_0x2889ff]), expect(_0x26f5cc)[_0x25fb15(0x127)](0x1), expect(console['warn'])[_0x25fb15(0x129)][_0x25fb15(0x12a)]();
    }), it(_0x131038(0x139), function () {
        const _0x1ebe9c = _0x131038, _0x42251e = JSTimers[_0x1ebe9c(0x117)](function () {
                throw new Error('first\x20error');
            }), _0x427192 = JSTimers['setTimeout'](function () {
                const _0x4e37c9 = _0x1ebe9c;
                throw new Error(_0x4e37c9(0x13a));
            });
        expect(JSTimers[_0x1ebe9c(0x11b)][_0x1ebe9c(0x133)](null, [
            _0x42251e,
            _0x427192
        ]))['toThrowError']('first\x20error');
    }), it(_0x131038(0x13b), function () {
        const _0x1a4046 = _0x131038;
        JSTimers['queueReactNativeMicrotask'](function () {
            const _0x2cad21 = _0x5988;
            throw new Error(_0x2cad21(0x13c));
        }), NativeTiming[_0x1a4046(0x13d)] = jest['fn'](), JSTimers[_0x1a4046(0x12c)](), expect(NativeTiming['createTimer'])['toBeCalled']();
        const _0x254370 = NativeTiming[_0x1a4046(0x13d)][_0x1a4046(0x113)][_0x1a4046(0x13e)][0x0][0x0];
        expect(JSTimers[_0x1a4046(0x11b)][_0x1a4046(0x133)](null, [_0x254370]))[_0x1a4046(0x13f)](_0x1a4046(0x13c));
    }), it(_0x131038(0x140), function () {
        const _0x4cf198 = _0x131038;
        JSTimers[_0x4cf198(0x120)](function () {
            const _0x32047b = _0x4cf198;
            throw new Error(_0x32047b(0x141));
        }), JSTimers['queueReactNativeMicrotask'](function () {
            throw new Error('second\x20error');
        }), NativeTiming['createTimer'] = jest['fn'](), JSTimers[_0x4cf198(0x12c)](), expect(NativeTiming[_0x4cf198(0x13d)][_0x4cf198(0x113)][_0x4cf198(0x13e)][_0x4cf198(0x142)])[_0x4cf198(0x11c)](0x2);
        const _0x127c71 = NativeTiming[_0x4cf198(0x13d)][_0x4cf198(0x113)][_0x4cf198(0x13e)][0x0][0x0];
        expect(JSTimers[_0x4cf198(0x11b)]['bind'](null, [_0x127c71]))['toThrowError'](_0x4cf198(0x141));
        const _0x4d3a7d = NativeTiming[_0x4cf198(0x13d)][_0x4cf198(0x113)][_0x4cf198(0x13e)][0x1][0x0];
        expect(JSTimers[_0x4cf198(0x11b)][_0x4cf198(0x133)](null, [_0x4d3a7d]))[_0x4cf198(0x13f)](_0x4cf198(0x13a));
    }), it('should\x20pass\x20along\x20errors\x20thrown\x20from\x20setTimeout', function () {
        const _0x44e786 = _0x131038, _0x475afe = JSTimers[_0x44e786(0x117)](function () {
                throw new Error('error\x20within\x20setTimeout');
            });
        expect(JSTimers['callTimers'][_0x44e786(0x133)](null, [_0x475afe]))[_0x44e786(0x13f)](_0x44e786(0x143));
    }), it('should\x20throw\x20all\x20errors\x20from\x20setTimeout', function () {
        const _0x2e1790 = _0x131038, _0x11beaa = JSTimers[_0x2e1790(0x117)](function () {
                const _0x239093 = _0x2e1790;
                throw new Error(_0x239093(0x141));
            }), _0x43fd60 = JSTimers[_0x2e1790(0x117)](function () {
                const _0x400187 = _0x2e1790;
                throw new Error(_0x400187(0x13a));
            });
        NativeTiming['createTimer'] = jest['fn'](), expect(JSTimers[_0x2e1790(0x11b)][_0x2e1790(0x133)](null, [
            _0x11beaa,
            _0x43fd60
        ]))[_0x2e1790(0x13f)](_0x2e1790(0x141)), expect(NativeTiming['createTimer']['mock']['calls'][_0x2e1790(0x142)])[_0x2e1790(0x11c)](0x1);
        const _0x574abd = NativeTiming['createTimer'][_0x2e1790(0x113)][_0x2e1790(0x13e)][0x0][0x0];
        expect(JSTimers[_0x2e1790(0x11b)][_0x2e1790(0x133)](null, [_0x574abd]))[_0x2e1790(0x13f)]('second\x20error');
    }), it(_0x131038(0x144), function () {
        const _0x16ba1e = _0x131038, _0x488201 = JSTimers[_0x16ba1e(0x126)](function () {
                const _0xbbcedb = _0x16ba1e;
                throw new Error(_0xbbcedb(0x145));
            });
        expect(JSTimers['callTimers'][_0x16ba1e(0x133)](null, [_0x488201]))['toThrowError'](_0x16ba1e(0x145));
    }), it('should\x20not\x20call\x20to\x20native\x20when\x20clearing\x20a\x20null\x20timer', function () {
        const _0x52c73b = _0x131038, _0x1aabb1 = JSTimers['setTimeout'](() => {
            });
        JSTimers['clearTimeout'](_0x1aabb1), NativeTiming[_0x52c73b(0x146)] = jest['fn'](), JSTimers[_0x52c73b(0x11d)](null), expect(NativeTiming['deleteTimer'][_0x52c73b(0x113)]['calls'][_0x52c73b(0x142)])[_0x52c73b(0x11c)](0x0);
    });
});
