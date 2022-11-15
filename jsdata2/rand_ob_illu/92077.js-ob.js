'use strict';

const _0x2698 = ['should call nested queueReactNativeMicrotask when cleared', 'should call function with setInterval', 'should call function with queueReactNativeMicrotask', 'should not call function with clearReactNativeMicrotask', 'should call functions in the right order with nested queueReactNativeMicrotask', 'should call nested queueReactNativeMicrotask', 'should not call function if we don\'t callTimers', 'should call setInterval as many times as callTimers is called', 'should only call the function who\'s id we pass in', 'should not warn if callback is called on cancelled timer', 'should warn when callTimers is called with garbage timer id', 'should only call callback once for requestAnimationFrame', 'should pass along errors thrown from queueReactNativeMicrotask', 'should throw all errors from queueReactNativeMicrotask', 'should pass along errors thrown from setTimeout', 'should throw all errors from setTimeout', 'should not call to native when clearing a null timer', 'spyOn', 'warn', 'setTimeout', 'PLLMy', 'mockRestore', 'MrSSD', 'callTimers', 'MEDak', 'qbnds', 'toBe', 'NyhGH', 'FWJjH', 'queueReactNativeMicrotask', 'clearReactNativeMicrotask', 'umtWh', 'FtKjY', 'should call nested requestAnimationFrame when cleared', 'requestAnimationFrame', 'cancelAnimationFrame', 'gJFpv', 'VrQKK', 'should call nested setInterval when cleared', 'setInterval', 'clearInterval', 'TdWul', 'toBeCalledTimes', 'Ukoya', 'callReactNativeMicrotasks', 'fxJTZ', 'toBeCalled', 'should call functions in the right order with queueReactNativeMicrotask', 'MIZGE', 'bFduW', 'lcjhu', 'zwNXJ', 'uEpsd', 'not', 'KzKdZ', 'XytMI', 'HGfMy', 'should work with calling multiple timers', 'cwsDp', 'toThrow', 'should clear timers even if callback throws', 'UmXYI', 'LUDwE', 'bind', 'clearTimeout', 'aSBPr', 'iIyIV', 'KdIGQ', 'gwmOs', 'lGOQt', 'NaovP', 'uAcKv', 'tmTuw', 'should re-throw first exception', 'hXfoY', 'aAZqM', 'ednIP', 'ARURf', 'QWDWk', 'eGgMa', 'ZppLw', 'createTimer', 'toThrowError', 'adwZK', 'aNpRG', 'chEnp', 'calls', 'length', 'ihqNt', 'hjUbr', 'error within setTimeout', 'RuwML', 'LDqiy', 'FWLWy', 'NNuSa', 'sxaQs', 'jIHXX', 'deleteTimer', '2991Mtzryd', '261mnNZpr', '817699CeDswl', '1YaHahH', '2307HywLBW', '189cZjMZm', '622040kIUGPc', '15513dMoqkk', '73sbiakb', '7aLOyng', '126735aaNpzU', '1573425niObHB', 'enableAutomock', 'mock', '../NativeTiming', '../JSTimers', 'JSTimers', 'error', 'first error', 'second error', 'error within queueReactNativeMicrotask', 'should call nested setTimeout when cleared'];

function _0x336e(_0x53696a, _0x3f4108) {
    return _0x336e = function (_0x2e681e, _0x2bebec) {
        _0x2e681e = _0x2e681e - 374;
        const _0x573dd7 = _0x2698[_0x2e681e];

        return _0x573dd7;
    }, _0x336e(_0x53696a, _0x3f4108);
}
const _0x492eff = _0x336e;

(function (_0x337dff, _0x5d5677) {
    const _0x5b954b = _0x336e;

    while (true) {
        try {
            const _0x41c809 = -parseInt(_0x5b954b(0x176)) * -parseInt(_0x5b954b(0x177)) + parseInt(_0x5b954b(0x178)) * -parseInt(_0x5b954b(0x179)) + -parseInt(_0x5b954b(0x17a)) * -parseInt(_0x5b954b(0x17b)) + parseInt(_0x5b954b(0x17c)) + -parseInt(_0x5b954b(0x17d)) * parseInt(_0x5b954b(0x17e)) + parseInt(_0x5b954b(0x17f)) * -parseInt(_0x5b954b(0x180)) + parseInt(_0x5b954b(0x181));

            if (_0x41c809 === _0x5d5677) break;else _0x337dff.push(_0x337dff.shift());
        } catch (_0x4acc1f) {
            _0x337dff.push(_0x337dff.shift());
        }
    }
})(_0x2698, 574846);
const NativeTiming = {
    'createTimer': jest.fn(),
    'deleteTimer': jest.fn(),
    'setSendIdleEvents': jest.fn()
};

jest[_0x492eff(0x182)]()[_0x492eff(0x183)](_0x492eff(0x184), () => ({
    '__esModule': true,
    'default': NativeTiming
})).unmock(_0x492eff(0x185));

const JSTimers = require(_0x492eff(0x185));

describe(_0x492eff(0x186), function () {
    const _0x4a3c44 = _0x492eff;
    const _0x27ed97 = {
        'umtWh': function (_0x1a6a6d, _0x1fb1b5) {
            return _0x1a6a6d(_0x1fb1b5);
        },
        'gJFpv': function (_0x1ce967, _0xc47b7d) {
            return _0x1ce967(_0xc47b7d);
        },
        'TYkxs': function (_0x2300bb, _0x3bac25) {
            return _0x2300bb(_0x3bac25);
        },
        'fxJTZ': function (_0x1dea8a, _0x4798ad) {
            return _0x1dea8a(_0x4798ad);
        },
        'bFduW': function (_0x902d0a, _0x10e8f0) {
            return _0x902d0a(_0x10e8f0);
        },
        'uEpsd': function (_0x4bed5b, _0x514bef) {
            return _0x4bed5b(_0x514bef);
        },
        'KzKdZ': function (_0x2f9ead, _0x4ee6e9) {
            return _0x2f9ead(_0x4ee6e9);
        },
        'UmXYI': _0x4a3c44(0x187),
        'BMEmK': function (_0x579de5, _0x40c10b) {
            return _0x579de5(_0x40c10b);
        },
        'LUDwE': function (_0x1b474d, _0x1ef82c) {
            return _0x1b474d(_0x1ef82c);
        },
        'aSBPr': function (_0x7b2c32, _0x19e504) {
            return _0x7b2c32(_0x19e504);
        },
        'KdIGQ': function (_0xf08e3e, _0x55ac46) {
            return _0xf08e3e(_0x55ac46);
        },
        'gwmOs': function (_0xd81ea4, _0x5a60d2) {
            return _0xd81ea4(_0x5a60d2);
        },
        'uAcKv': function (_0x2919c4, _0x276a1c) {
            return _0x2919c4(_0x276a1c);
        },
        'hXfoY': _0x4a3c44(0x188),
        'aAZqM': _0x4a3c44(0x189),
        'eGgMa': _0x4a3c44(0x18a),
        'ZppLw': function (_0x571b18, _0x35edb8) {
            return _0x571b18(_0x35edb8);
        },
        'chEnp': function (_0x13c8de, _0x3d339c) {
            return _0x13c8de(_0x3d339c);
        },
        'RuwML': function (_0x33cb1b, _0x46874e) {
            return _0x33cb1b(_0x46874e);
        },
        'NNuSa': function (_0x6d3d9, _0x84c542) {
            return _0x6d3d9(_0x84c542);
        },
        'KNwcW': function (_0x33cbee, _0x59fbac) {
            return _0x33cbee(_0x59fbac);
        },
        'jIHXX': 'error within setInterval',
        'PLLMy': function (_0x1f8424, _0x14423f) {
            return _0x1f8424(_0x14423f);
        },
        'MrSSD': function (_0x3ed4d5, _0x132dff, _0x4b5db9) {
            return _0x3ed4d5(_0x132dff, _0x4b5db9);
        },
        'MEDak': function (_0x4223df, _0x3a89a6, _0x56e7ee) {
            return _0x4223df(_0x3a89a6, _0x56e7ee);
        },
        'qbnds': _0x4a3c44(0x18b),
        'NyhGH': function (_0x1de25b, _0x43bd55, _0x13c45a) {
            return _0x1de25b(_0x43bd55, _0x13c45a);
        },
        'FWJjH': _0x4a3c44(0x18c),
        'FtKjY': function (_0x23cd5a, _0x240af8, _0x7416e5) {
            return _0x23cd5a(_0x240af8, _0x7416e5);
        },
        'VrQKK': function (_0x157996, _0x5a4766, _0x7bcbb5) {
            return _0x157996(_0x5a4766, _0x7bcbb5);
        },
        'TdWul': _0x4a3c44(0x18d),
        'Ukoya': _0x4a3c44(0x18e),
        'ITmGG': _0x4a3c44(0x18f),
        'wFfPN': function (_0x4eecf5, _0x16b3c2, _0x34bda8) {
            return _0x4eecf5(_0x16b3c2, _0x34bda8);
        },
        'MIZGE': _0x4a3c44(0x190),
        'EKgTQ': function (_0x15ee6c, _0x469f1a, _0x419fff) {
            return _0x15ee6c(_0x469f1a, _0x419fff);
        },
        'cwyNk': _0x4a3c44(0x191),
        'lcjhu': function (_0x3a844f, _0x10858a, _0x12edda) {
            return _0x3a844f(_0x10858a, _0x12edda);
        },
        'zwNXJ': _0x4a3c44(0x192),
        'XytMI': function (_0x55bde4, _0x2f40d1, _0x2e1e3c) {
            return _0x55bde4(_0x2f40d1, _0x2e1e3c);
        },
        'todkp': _0x4a3c44(0x193),
        'ZAuax': _0x4a3c44(0x194),
        'HGfMy': function (_0x2020cf, _0x48a3ff, _0x57ee98) {
            return _0x2020cf(_0x48a3ff, _0x57ee98);
        },
        'DifsV': _0x4a3c44(0x195),
        'EJnvK': _0x4a3c44(0x196),
        'iIyIV': 'should only call callback once for setTimeout',
        'lGOQt': function (_0x286561, _0x3e3c83, _0x34de64) {
            return _0x286561(_0x3e3c83, _0x34de64);
        },
        'NaovP': _0x4a3c44(0x197),
        'tmTuw': function (_0x3e65d8, _0x10093e, _0x41b2d2) {
            return _0x3e65d8(_0x10093e, _0x41b2d2);
        },
        'ARURf': function (_0x5ea3ca, _0x55e99d, _0x5a4b8d) {
            return _0x5ea3ca(_0x55e99d, _0x5a4b8d);
        },
        'QWDWk': _0x4a3c44(0x198),
        'adwZK': function (_0x59c9e0, _0x4e3448, _0x1e8690) {
            return _0x59c9e0(_0x4e3448, _0x1e8690);
        },
        'aNpRG': _0x4a3c44(0x199),
        'ihqNt': function (_0xcb5036, _0x105f2c, _0xaf988c) {
            return _0xcb5036(_0x105f2c, _0xaf988c);
        },
        'hjUbr': _0x4a3c44(0x19a),
        'LDqiy': _0x4a3c44(0x19b),
        'sxaQs': 'should pass along errors thrown from setInterval',
        'Oslvk': function (_0x4921ca, _0xfe8422, _0x17770a) {
            return _0x4921ca(_0xfe8422, _0x17770a);
        },
        'HSIAh': _0x4a3c44(0x19c)
    };

    _0x27ed97.KNwcW(beforeEach, function () {
        const _0x30b288 = _0x4a3c44;

        jest[_0x30b288(0x19d)](console, _0x30b288(0x19e)), global[_0x30b288(0x19f)] = JSTimers[_0x30b288(0x19f)];
    }), _0x27ed97[_0x4a3c44(0x1a0)](afterEach, () => {
        const _0x4b33ff = _0x4a3c44;

        console[_0x4b33ff(0x19e)][_0x4b33ff(0x1a1)]();
    }), _0x27ed97[_0x4a3c44(0x1a2)](it, 'should call function with setTimeout', function () {
        const _0x50f584 = _0x4a3c44;
        var _0x5a6bc5 = false;

        const _0x14eb60 = JSTimers[_0x50f584(0x19f)](function () {
            _0x5a6bc5 = true;
        });

        JSTimers[_0x50f584(0x1a3)]([JSTimers[_0x50f584(0x19f)](function () {
            _0x5a6bc5 = true;
        })]), _0x27ed97.umtWh(expect, _0x5a6bc5).toBe(true);
    }), _0x27ed97[_0x4a3c44(0x1a4)](it, _0x27ed97[_0x4a3c44(0x1a5)], function () {
        const _0x386340 = _0x4a3c44;

        var _0x4aef56;

        var _0x7bef4e;

        var _0x53cb92;

        var _0x2008cb = 0;

        _0x4aef56 = JSTimers[_0x386340(0x19f)](function () {
            const _0xf01390 = _0x386340;

            JSTimers.clearTimeout(_0x4aef56), _0x7bef4e = JSTimers[_0xf01390(0x19f)](function () {
                const _0x690d0a = _0xf01390;

                JSTimers.clearTimeout(_0x7bef4e), _0x53cb92 = JSTimers[_0x690d0a(0x19f)](function () {
                    _0x2008cb += 1;
                });
            });
        }), JSTimers[_0x386340(0x1a3)]([_0x4aef56]), JSTimers[_0x386340(0x1a3)]([JSTimers[_0xf01390(0x19f)](function () {
            const _0x690d0a = _0xf01390;
            JSTimers.clearTimeout(_0x7bef4e), _0x53cb92 = JSTimers[_0x690d0a(0x19f)](function () {
                _0x2008cb += 1;
            });
        })]), JSTimers[_0x386340(0x1a3)]([JSTimers[_0x690d0a(0x19f)](function () {
            _0x2008cb += 1;
        })]), expect(_0x2008cb)[_0x386340(0x1a6)](1);
    }), _0x27ed97[_0x4a3c44(0x1a7)](it, _0x27ed97[_0x4a3c44(0x1a8)], function () {
        const _0xa4449 = _0x4a3c44;

        var _0xbf53c1;

        var _0x343154;

        var _0x3c532b;

        var _0x4d2541 = 0;

        _0xbf53c1 = JSTimers[_0xa4449(0x1a9)](function () {
            const _0x454070 = _0xa4449;

            JSTimers[_0x454070(0x1aa)](_0xbf53c1), _0x343154 = JSTimers[_0x454070(0x1a9)](function () {
                const _0x117737 = _0x454070;

                JSTimers[_0x117737(0x1aa)](_0x343154), _0x3c532b = JSTimers.queueReactNativeMicrotask(function () {
                    _0x4d2541 += 1;
                });
            });
        }), JSTimers[_0xa4449(0x1a3)]([_0xbf53c1]), JSTimers[_0xa4449(0x1a3)]([JSTimers[_0x454070(0x1a9)](function () {
            const _0x117737 = _0x454070;
            JSTimers[_0x117737(0x1aa)](_0x343154), _0x3c532b = JSTimers.queueReactNativeMicrotask(function () {
                _0x4d2541 += 1;
            });
        })]), JSTimers[_0xa4449(0x1a3)]([JSTimers.queueReactNativeMicrotask(function () {
            _0x4d2541 += 1;
        })]), _0x27ed97[_0xa4449(0x1ab)](expect, _0x4d2541)[_0xa4449(0x1a6)](1);
    }), _0x27ed97[_0x4a3c44(0x1ac)](it, _0x4a3c44(0x1ad), function () {
        const _0x143319 = _0x4a3c44;

        var _0x3c99fd;

        var _0x4abead;

        var _0x396cc1;

        var _0x3656ac = 0;

        _0x3c99fd = JSTimers[_0x143319(0x1ae)](function () {
            const _0xb15924 = _0x143319;

            JSTimers[_0xb15924(0x1af)](_0x3c99fd), _0x4abead = JSTimers[_0xb15924(0x1ae)](function () {
                const _0x481575 = _0xb15924;

                JSTimers[_0x481575(0x1af)](_0x4abead), _0x396cc1 = JSTimers[_0x481575(0x1ae)](function () {
                    _0x3656ac += 1;
                });
            });
        }), JSTimers.callTimers([_0x3c99fd]), JSTimers[_0x143319(0x1a3)]([JSTimers[_0xb15924(0x1ae)](function () {
            const _0x481575 = _0xb15924;
            JSTimers[_0x481575(0x1af)](_0x4abead), _0x396cc1 = JSTimers[_0x481575(0x1ae)](function () {
                _0x3656ac += 1;
            });
        })]), JSTimers[_0x143319(0x1a3)]([JSTimers[_0x481575(0x1ae)](function () {
            _0x3656ac += 1;
        })]), _0x27ed97[_0x143319(0x1b0)](expect, _0x3656ac)[_0x143319(0x1a6)](1);
    }), _0x27ed97[_0x4a3c44(0x1b1)](it, _0x4a3c44(0x1b2), function () {
        const _0x23abb6 = _0x4a3c44;

        var _0x5634cc;

        var _0x24ce44;

        var _0x4d834f;

        var _0x57a862 = 0;

        _0x5634cc = JSTimers[_0x23abb6(0x1b3)](function () {
            const _0x2ad38c = _0x23abb6;

            JSTimers[_0x2ad38c(0x1b4)](_0x5634cc), _0x24ce44 = JSTimers.setInterval(function () {
                const _0xf3491c = _0x2ad38c;

                JSTimers[_0xf3491c(0x1b4)](_0x24ce44), _0x4d834f = JSTimers[_0xf3491c(0x1b3)](function () {
                    _0x57a862 += 1;
                });
            });
        }), JSTimers[_0x23abb6(0x1a3)]([_0x5634cc]), JSTimers[_0x23abb6(0x1a3)]([JSTimers.setInterval(function () {
            const _0xf3491c = _0x2ad38c;
            JSTimers[_0xf3491c(0x1b4)](_0x24ce44), _0x4d834f = JSTimers[_0xf3491c(0x1b3)](function () {
                _0x57a862 += 1;
            });
        })]), JSTimers[_0x23abb6(0x1a3)]([JSTimers[_0xf3491c(0x1b3)](function () {
            _0x57a862 += 1;
        })]), _0x27ed97[_0x23abb6(0x1b0)](expect, _0x57a862)[_0x23abb6(0x1a6)](1);
    }), it(_0x27ed97[_0x4a3c44(0x1b5)], function () {
        const _0x59c8be = _0x4a3c44;

        const _0x52ff47 = jest.fn();

        const _0x25ed6b = JSTimers.setInterval(_0x52ff47);

        JSTimers.callTimers([_0x25ed6b]), expect(_0x52ff47)[_0x59c8be(0x1b6)](1);
    }), _0x27ed97[_0x4a3c44(0x1b1)](it, _0x27ed97[_0x4a3c44(0x1b7)], function () {
        const _0x327dc3 = _0x4a3c44;

        const _0x4b70a0 = jest.fn();

        JSTimers[_0x327dc3(0x1a9)](_0x4b70a0), JSTimers[_0x327dc3(0x1b8)](), _0x27ed97.TYkxs(expect, _0x4b70a0)[_0x327dc3(0x1b6)](1);
    }), _0x27ed97[_0x4a3c44(0x1b1)](it, _0x27ed97.ITmGG, function () {
        const _0x7cde93 = _0x4a3c44;

        const _0x2c99b3 = jest.fn();

        const _0xe24be6 = JSTimers[_0x7cde93(0x1a9)](_0x2c99b3);

        JSTimers.clearReactNativeMicrotask(_0xe24be6), JSTimers.callReactNativeMicrotasks(), _0x27ed97[_0x7cde93(0x1b9)](expect, _0x2c99b3).not[_0x7cde93(0x1ba)]();
    }), _0x27ed97.wFfPN(it, _0x4a3c44(0x1bb), function () {
        const _0x179adc = _0x4a3c44;
        var _0x42bf09 = 0;
        var _0x5c5b5a = null;
        var _0x5d0d32 = null;

        JSTimers[_0x179adc(0x1a9)](function () {
            _0x5c5b5a = _0x42bf09++;
        }), JSTimers[_0x179adc(0x1a9)](function () {
            _0x5d0d32 = _0x42bf09++;
        }), JSTimers.callReactNativeMicrotasks(), expect(_0x5c5b5a)[_0x179adc(0x1a6)](0), expect(_0x5d0d32).toBe(1);
    }), it(_0x27ed97[_0x4a3c44(0x1bc)], function () {
        const _0x14ccb5 = _0x4a3c44;
        var _0x579747 = 0;
        var _0x42d236 = null;
        var _0x19b5a3 = null;
        var _0x2ecbae = null;

        JSTimers.queueReactNativeMicrotask(function () {
            _0x42d236 = _0x579747++, JSTimers.queueReactNativeMicrotask(function () {
                _0x2ecbae = _0x579747++;
            }), _0x19b5a3 = _0x579747++;
        }), JSTimers[_0x14ccb5(0x1b8)](), expect(_0x42d236)[_0x14ccb5(0x1a6)](0), _0x27ed97[_0x14ccb5(0x1b9)](expect, _0x19b5a3)[_0x14ccb5(0x1a6)](1), _0x27ed97[_0x14ccb5(0x1bd)](expect, _0x2ecbae)[_0x14ccb5(0x1a6)](2);
    }), _0x27ed97.EKgTQ(it, _0x27ed97.cwyNk, function () {
        const _0x3884a0 = _0x4a3c44;
        var _0x5c35db = false;
        var _0x19f0ca = false;

        JSTimers[_0x3884a0(0x1a9)](function () {
            const _0x28886f = _0x3884a0;

            _0x5c35db = true, JSTimers[_0x28886f(0x1a9)](function () {
                _0x19f0ca = true;
            });
        }), JSTimers[_0x3884a0(0x1b8)](), expect(_0x5c35db)[_0x3884a0(0x1a6)](true), _0x27ed97[_0x3884a0(0x1bd)](expect, _0x19f0ca)[_0x3884a0(0x1a6)](true);
    }), _0x27ed97[_0x4a3c44(0x1be)](it, 'should call function with requestAnimationFrame', function () {
        const _0x3516d4 = _0x4a3c44;

        const _0x150010 = jest.fn();

        const _0x4ecd7e = JSTimers[_0x3516d4(0x1ae)](_0x150010);

        JSTimers[_0x3516d4(0x1a3)]([_0x4ecd7e]), expect(_0x150010)[_0x3516d4(0x1b6)](1);
    }), it(_0x27ed97[_0x4a3c44(0x1bf)], function () {
        const _0x11d2f0 = _0x4a3c44;

        const _0x3dc955 = jest.fn();

        JSTimers[_0x11d2f0(0x19f)](_0x3dc955, 10), _0x27ed97[_0x11d2f0(0x1c0)](expect, _0x3dc955)[_0x11d2f0(0x1c1)][_0x11d2f0(0x1ba)](), JSTimers.setInterval(_0x3dc955, 10), expect(_0x3dc955)[_0x11d2f0(0x1c1)][_0x11d2f0(0x1ba)](), JSTimers[_0x11d2f0(0x1ae)](_0x3dc955), expect(_0x3dc955).not[_0x11d2f0(0x1ba)]();
    }), _0x27ed97.XytMI(it, _0x27ed97.todkp, function () {
        const _0x5663ca = _0x4a3c44;

        const _0x4cc813 = jest.fn();

        const _0x4d5861 = JSTimers.setInterval(_0x4cc813, 10);

        JSTimers.callTimers([_0x4d5861]), JSTimers[_0x5663ca(0x1a3)]([_0x4d5861]), JSTimers[_0x5663ca(0x1a3)]([_0x4d5861]), JSTimers[_0x5663ca(0x1a3)]([_0x4d5861]), _0x27ed97[_0x5663ca(0x1c2)](expect, _0x4cc813)[_0x5663ca(0x1b6)](4);
    }), _0x27ed97[_0x4a3c44(0x1c3)](it, _0x27ed97.ZAuax, function () {
        const _0x10ab93 = _0x4a3c44;
        var _0x4815f8 = false;
        var _0x19e460 = false;

        JSTimers.setTimeout(function () {
            _0x4815f8 = true;
        });

        const _0x815624 = JSTimers[_0x10ab93(0x19f)](function () {
            _0x19e460 = true;
        });

        JSTimers[_0x10ab93(0x1a3)]([JSTimers[_0x10ab93(0x19f)](function () {
            _0x19e460 = true;
        })]), expect(_0x4815f8).toBe(false), _0x27ed97[_0x10ab93(0x1c2)](expect, _0x19e460).toBe(true);
    }), _0x27ed97[_0x4a3c44(0x1c4)](it, _0x4a3c44(0x1c5), function () {
        const _0x43e1fb = _0x4a3c44;
        var _0x4bd986 = false;
        var _0x429350 = false;

        const _0x44d42d = JSTimers[_0x43e1fb(0x19f)](function () {
            _0x4bd986 = true;
        });

        const _0x47964b = JSTimers[_0x43e1fb(0x19f)](function () {
            _0x429350 = true;
        });

        JSTimers[_0x43e1fb(0x1a3)]([_0x44d42d, _0x47964b]), expect(_0x4bd986)[_0x43e1fb(0x1a6)](true), _0x27ed97[_0x43e1fb(0x1c2)](expect, _0x429350)[_0x43e1fb(0x1a6)](true);
    }), _0x27ed97[_0x4a3c44(0x1c4)](it, 'should still execute all callbacks even if one throws', function () {
        const _0x4b9bb9 = _0x4a3c44;
        const _0x4230ea = { 'cwsDp': _0x27ed97.UmXYI };

        const _0x12484c = JSTimers[_0x4b9bb9(0x19f)](function () {
            const _0x1601a1 = _0x4b9bb9;

            throw new Error(_0x4230ea[_0x1601a1(0x1c6)]);
        }, 10);

        var _0x3fc0d9 = false;

        const _0x4578f9 = JSTimers.setTimeout(function () {
            _0x3fc0d9 = true;
        }, 10);

        _0x27ed97.BMEmK(expect, JSTimers[_0x4b9bb9(0x1a3)].bind(null, [_0x12484c, JSTimers.setTimeout(function () {
            _0x3fc0d9 = true;
        }, 10)]))[_0x4b9bb9(0x1c7)](), expect(_0x3fc0d9)[_0x4b9bb9(0x1a6)](true);
    }), it(_0x4a3c44(0x1c8), function () {
        const _0x2c71ad = _0x4a3c44;

        const _0x28a293 = JSTimers[_0x2c71ad(0x19f)](function () {
            const _0x1f2405 = _0x2c71ad;

            throw new Error(_0x27ed97[_0x1f2405(0x1c9)]);
        }, 10);

        _0x27ed97[_0x2c71ad(0x1ca)](expect, JSTimers[_0x2c71ad(0x1a3)][_0x2c71ad(0x1cb)](null, [_0x28a293]))[_0x2c71ad(0x1c7)](_0x27ed97[_0x2c71ad(0x1c9)]), JSTimers[_0x2c71ad(0x1a3)][_0x2c71ad(0x1cb)](null, [_0x28a293]);
    }), it(_0x27ed97.DifsV, function () {
        const _0x20eaed = _0x4a3c44;

        const _0x40d8fb = jest.fn();

        const _0x7f511d = JSTimers[_0x20eaed(0x19f)](_0x40d8fb, 10);

        JSTimers[_0x20eaed(0x1cc)](_0x7f511d), JSTimers[_0x20eaed(0x1a3)]([_0x7f511d]), _0x27ed97[_0x20eaed(0x1cd)](expect, _0x40d8fb)[_0x20eaed(0x1c1)][_0x20eaed(0x1ba)](), expect(console[_0x20eaed(0x19e)])[_0x20eaed(0x1c1)][_0x20eaed(0x1ba)]();
    }), _0x27ed97.HGfMy(it, _0x27ed97.EJnvK, function () {
        const _0x5e6b7b = _0x4a3c44;

        JSTimers[_0x5e6b7b(0x1a3)]([1337]), _0x27ed97[_0x5e6b7b(0x1cd)](expect, console[_0x5e6b7b(0x19e)])[_0x5e6b7b(0x1ba)]();
    }), _0x27ed97[_0x4a3c44(0x1c4)](it, _0x27ed97[_0x4a3c44(0x1ce)], function () {
        const _0x4858ba = _0x4a3c44;

        const _0x804e40 = jest.fn();

        const _0x30947b = JSTimers[_0x4858ba(0x19f)](_0x804e40, 10);

        JSTimers[_0x4858ba(0x1a3)]([_0x30947b]), expect(_0x804e40)[_0x4858ba(0x1b6)](1), JSTimers[_0x4858ba(0x1a3)]([_0x30947b]), _0x27ed97[_0x4858ba(0x1cf)](expect, _0x804e40)[_0x4858ba(0x1b6)](1), _0x27ed97[_0x4858ba(0x1d0)](expect, console.warn)[_0x4858ba(0x1c1)].toBeCalled();
    }), _0x27ed97[_0x4a3c44(0x1d1)](it, _0x27ed97[_0x4a3c44(0x1d2)], function () {
        const _0x8d8978 = _0x4a3c44;

        const _0x4549ba = jest.fn();

        const _0xbc3114 = JSTimers[_0x8d8978(0x1ae)](_0x4549ba, 10);

        JSTimers[_0x8d8978(0x1a3)]([_0xbc3114]), _0x27ed97[_0x8d8978(0x1d3)](expect, _0x4549ba)[_0x8d8978(0x1b6)](1), JSTimers.callTimers([_0xbc3114]), _0x27ed97[_0x8d8978(0x1d3)](expect, _0x4549ba)[_0x8d8978(0x1b6)](1), _0x27ed97[_0x8d8978(0x1d3)](expect, console[_0x8d8978(0x19e)])[_0x8d8978(0x1c1)][_0x8d8978(0x1ba)]();
    }), _0x27ed97[_0x4a3c44(0x1d4)](it, _0x4a3c44(0x1d5), function () {
        const _0x2c643d = _0x4a3c44;
        const _0x4ff3e4 = {
            'wFZlJ': _0x27ed97[_0x2c643d(0x1d6)],
            'ednIP': _0x27ed97[_0x2c643d(0x1d7)]
        };

        const _0x286697 = JSTimers[_0x2c643d(0x19f)](function () {
            throw new Error(_0x4ff3e4.wFZlJ);
        });

        const _0x13ab3d = JSTimers[_0x2c643d(0x19f)](function () {
            const _0x22e6f2 = _0x2c643d;

            throw new Error(_0x4ff3e4[_0x22e6f2(0x1d8)]);
        });

        _0x27ed97[_0x2c643d(0x1d3)](expect, JSTimers[_0x2c643d(0x1a3)][_0x2c643d(0x1cb)](null, [_0x286697, _0x13ab3d])).toThrowError(_0x2c643d(0x188));
    }), _0x27ed97[_0x4a3c44(0x1d9)](it, _0x27ed97[_0x4a3c44(0x1da)], function () {
        const _0xbdc5a8 = _0x4a3c44;

        JSTimers[_0xbdc5a8(0x1a9)](function () {
            const _0x44eb12 = _0xbdc5a8;

            throw new Error(_0x27ed97[_0x44eb12(0x1db)]);
        }), NativeTiming['createTimer'] = jest.fn(), JSTimers[_0xbdc5a8(0x1b8)](), _0x27ed97[_0xbdc5a8(0x1dc)](expect, NativeTiming[_0xbdc5a8(0x1dd)]).toBeCalled();

        const _0xd80e14 = NativeTiming[_0xbdc5a8(0x1dd)][_0xbdc5a8(0x183)].calls[0][0];

        _0x27ed97[_0xbdc5a8(0x1dc)](expect, JSTimers[_0xbdc5a8(0x1a3)][_0xbdc5a8(0x1cb)](null, [NativeTiming[_0xbdc5a8(0x1dd)][_0xbdc5a8(0x183)].calls[0][0]]))[_0xbdc5a8(0x1de)](_0x27ed97.eGgMa);
    }), _0x27ed97[_0x4a3c44(0x1df)](it, _0x27ed97[_0x4a3c44(0x1e0)], function () {
        const _0x2e757f = _0x4a3c44;

        JSTimers.queueReactNativeMicrotask(function () {
            const _0x227270 = _0x336e;

            throw new Error(_0x27ed97[_0x227270(0x1d6)]);
        }), JSTimers.queueReactNativeMicrotask(function () {
            const _0x1e38bf = _0x336e;

            throw new Error(_0x1e38bf(0x189));
        }), NativeTiming['createTimer'] = jest.fn(), JSTimers[_0x2e757f(0x1b8)](), _0x27ed97[_0x2e757f(0x1e1)](expect, NativeTiming[_0x2e757f(0x1dd)][_0x2e757f(0x183)][_0x2e757f(0x1e2)][_0x2e757f(0x1e3)]).toBe(2);

        const _0x55eb7a = NativeTiming.createTimer.mock[_0x2e757f(0x1e2)][0][0];

        _0x27ed97.chEnp(expect, JSTimers[_0x2e757f(0x1a3)].bind(null, [NativeTiming.createTimer.mock[_0x2e757f(0x1e2)][0][0]])).toThrowError(_0x27ed97.hXfoY);

        const _0x34f7f0 = NativeTiming[_0x2e757f(0x1dd)][_0x2e757f(0x183)][_0x2e757f(0x1e2)][1][0];

        _0x27ed97.chEnp(expect, JSTimers.callTimers[_0x2e757f(0x1cb)](null, [NativeTiming[_0x2e757f(0x1dd)][_0x2e757f(0x183)][_0x2e757f(0x1e2)][1][0]]))[_0x2e757f(0x1de)](_0x27ed97[_0x2e757f(0x1d7)]);
    }), _0x27ed97[_0x4a3c44(0x1e4)](it, _0x27ed97[_0x4a3c44(0x1e5)], function () {
        const _0x51db31 = _0x4a3c44;

        const _0x4eb491 = JSTimers[_0x51db31(0x19f)](function () {
            const _0x4c04bb = _0x51db31;

            throw new Error(_0x4c04bb(0x1e6));
        });

        _0x27ed97[_0x51db31(0x1e7)](expect, JSTimers[_0x51db31(0x1a3)].bind(null, [_0x4eb491]))[_0x51db31(0x1de)](_0x51db31(0x1e6));
    }), _0x27ed97[_0x4a3c44(0x1e4)](it, _0x27ed97[_0x4a3c44(0x1e8)], function () {
        const _0x5b7a7e = _0x4a3c44;
        const _0x49a2af = { 'FWLWy': _0x27ed97[_0x5b7a7e(0x1d7)] };

        const _0x43dc22 = JSTimers[_0x5b7a7e(0x19f)](function () {
            const _0x48a1df = _0x5b7a7e;

            throw new Error(_0x48a1df(0x188));
        });

        const _0x37b636 = JSTimers[_0x5b7a7e(0x19f)](function () {
            const _0x4467b7 = _0x5b7a7e;

            throw new Error(_0x49a2af[_0x4467b7(0x1e9)]);
        });

        NativeTiming[_0x5b7a7e(0x1dd)] = jest.fn(), _0x27ed97[_0x5b7a7e(0x1ea)](expect, JSTimers.callTimers[_0x5b7a7e(0x1cb)](null, [_0x43dc22, _0x37b636]))[_0x5b7a7e(0x1de)](_0x27ed97.hXfoY), _0x27ed97[_0x5b7a7e(0x1ea)](expect, NativeTiming.createTimer[_0x5b7a7e(0x183)].calls[_0x5b7a7e(0x1e3)]).toBe(1);

        const _0x5ca40f = NativeTiming[_0x5b7a7e(0x1dd)][_0x5b7a7e(0x183)].calls[0][0];

        _0x27ed97.KNwcW(expect, JSTimers[_0x5b7a7e(0x1a3)].bind(null, [NativeTiming[_0x5b7a7e(0x1dd)][_0x5b7a7e(0x183)].calls[0][0]]))[_0x5b7a7e(0x1de)](_0x27ed97[_0x5b7a7e(0x1d7)]);
    }), it(_0x27ed97[_0x4a3c44(0x1eb)], function () {
        const _0x140a6b = _0x4a3c44;

        const _0x129080 = JSTimers.setInterval(function () {
            throw new Error(_0x27ed97.jIHXX);
        });

        expect(JSTimers[_0x140a6b(0x1a3)][_0x140a6b(0x1cb)](null, [_0x129080]))[_0x140a6b(0x1de)](_0x27ed97[_0x140a6b(0x1ec)]);
    }), _0x27ed97.Oslvk(it, _0x27ed97.HSIAh, function () {
        const _0x284ec6 = _0x4a3c44;

        const _0x10d5ba = JSTimers.setTimeout(() => {});

        JSTimers[_0x284ec6(0x1cc)](_0x10d5ba), NativeTiming['deleteTimer'] = jest.fn(), JSTimers[_0x284ec6(0x1cc)](null), expect(NativeTiming[_0x284ec6(0x1ed)].mock[_0x284ec6(0x1e2)][_0x284ec6(0x1e3)]).toBe(0);
    });
});
