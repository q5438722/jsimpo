'use strict';

const _0x1645 = ['rtvPG', 'HIfiV', 'hommU', 'essih', 'dhZUC', 'SZjmb', 'KlDmJ', 'Avjul', 'udAib', 'deleteTimer', '3723smKDqA', '359dbNkCk', '70813fkMeNr', '1AqPRqz', '727483yJRzeq', '109013IuYKzd', '11wVHbUM', '1365460ocOIsa', '1143992veTtfA', '2299104vzzBql', 'enableAutomock', 'mock', '../NativeTiming', 'unmock', '../JSTimers', 'first error', 'second error', 'error within setTimeout', 'error within setInterval', 'should call function with setTimeout', 'should call nested setTimeout when cleared', 'should call nested setInterval when cleared', 'should call function with setInterval', 'should call functions in the right order with nested queueReactNativeMicrotask', 'should call function with requestAnimationFrame', 'should only call the function who\'s id we pass in', 'should work with calling multiple timers', 'should clear timers even if callback throws', 'should not warn if callback is called on cancelled timer', 'should warn when callTimers is called with garbage timer id', 'should throw all errors from queueReactNativeMicrotask', 'should pass along errors thrown from setTimeout', 'should throw all errors from setTimeout', 'should not call to native when clearing a null timer', 'jfgfB', 'setTimeout', 'mockRestore', 'mVsyd', 'callTimers', 'cLBmu', 'toBe', 'clearTimeout', 'queueReactNativeMicrotask', 'clearReactNativeMicrotask', 'VPbWc', 'should call nested requestAnimationFrame when cleared', 'requestAnimationFrame', 'cancelAnimationFrame', 'clearInterval', 'setInterval', 'YxnIf', 'rRMeN', 'hAYkZ', 'oAySZ', 'callReactNativeMicrotasks', 'not', 'toBeCalled', 'eZowH', 'ciuMs', 'SQePF', 'hsHPv', 'should not call function if we don\'t callTimers', 'iBjsu', 'ROqMY', 'should call setInterval as many times as callTimers is called', 'toBeCalledTimes', 'hNwUV', 'uFJZS', 'xYKFE', 'dLhEV', 'BNZDP', 'dVJKu', 'bind', 'toThrow', 'FZCmP', 'error', 'TJzYi', 'IOsdO', 'CiMXw', 'warn', 'ZyWWx', 'should only call callback once for requestAnimationFrame', 'uFLKK', 'wkGuI', 'evFdN', 'wLDYf', 'kGNuj', 'toThrowError', 'WPGPs', 'UYnms', 'yPJux', 'createTimer', 'calls', 'JwXqt', 'NhHip', 'length', 'BsLFq', 'rBeSS', 'roQAv', 'UxNxq', 'fbQam'];
const _0x9b2e12 = _0x13b9;

(function (_0x217aed, _0x1b4a8e) {
    const _0x32bff3 = _0x13b9;

    while (true) {
        try {
            const _0x5e44a6 = parseInt(_0x32bff3(0xb2)) * -parseInt(_0x32bff3(0xb3)) + parseInt(_0x32bff3(0xb4)) * parseInt(_0x32bff3(0xb5)) + parseInt(_0x32bff3(0xb6)) + -parseInt(_0x32bff3(0xb7)) * parseInt(_0x32bff3(0xb8)) + parseInt(_0x32bff3(0xb9)) + -parseInt(_0x32bff3(0xba)) + parseInt(_0x32bff3(0xbb));

            if (_0x5e44a6 === _0x1b4a8e) break;else _0x217aed.push(_0x217aed.shift());
        } catch (_0x48ec61) {
            _0x217aed.push(_0x217aed.shift());
        }
    }
})(_0x1645, 783168);
const NativeTiming = {
    'createTimer': jest.fn(),
    'deleteTimer': jest.fn(),
    'setSendIdleEvents': jest.fn()
};

jest[_0x9b2e12(0xbc)]()[_0x9b2e12(0xbd)](_0x9b2e12(0xbe), () => ({
    '__esModule': true,
    'default': NativeTiming
}))[_0x9b2e12(0xbf)](_0x9b2e12(0xc0));

const JSTimers = require(_0x9b2e12(0xc0));

function _0x13b9(_0x373e89, _0x2c0b27) {
    return _0x13b9 = function (_0x15780f, _0x1a6e20) {
        _0x15780f = _0x15780f - 178;
        const _0x52629b = _0x1645[_0x15780f];

        return _0x52629b;
    }, _0x13b9(_0x373e89, _0x2c0b27);
}
describe('JSTimers', function () {
    const _0x1a6ad8 = _0x9b2e12;
    const _0x238c96 = {
        'jfgfB': 'warn',
        'cLBmu': function (_0x32a273, _0x1341c8) {
            return _0x32a273(_0x1341c8);
        },
        'MIQdb': function (_0x240733, _0x16be2c) {
            return _0x240733(_0x16be2c);
        },
        'VPbWc': function (_0x3aab3f, _0x50c4eb) {
            return _0x3aab3f(_0x50c4eb);
        },
        'rRMeN': function (_0x2914d3, _0x247432) {
            return _0x2914d3(_0x247432);
        },
        'SQePF': function (_0x56bf39, _0x1c2a6e) {
            return _0x56bf39(_0x1c2a6e);
        },
        'iBjsu': function (_0x726009, _0x3c0fa7) {
            return _0x726009(_0x3c0fa7);
        },
        'dVJKu': function (_0x3a20a3, _0x33c76b) {
            return _0x3a20a3(_0x33c76b);
        },
        'BNZDP': 'error',
        'TJzYi': function (_0x333896, _0x35b228) {
            return _0x333896(_0x35b228);
        },
        'uFLKK': function (_0x2ba322, _0x1a0a14) {
            return _0x2ba322(_0x1a0a14);
        },
        'wkGuI': function (_0x22b4b0, _0x5f417f) {
            return _0x22b4b0(_0x5f417f);
        },
        'wLDYf': _0x1a6ad8(0xc1),
        'HIfiV': _0x1a6ad8(0xc2),
        'UYnms': 'error within queueReactNativeMicrotask',
        'jgycm': function (_0x5e38d2, _0x4a3eb1) {
            return _0x5e38d2(_0x4a3eb1);
        },
        'BsLFq': function (_0x32c3b5, _0xebb475) {
            return _0x32c3b5(_0xebb475);
        },
        'rBeSS': function (_0x50a784, _0x2386bc) {
            return _0x50a784(_0x2386bc);
        },
        'UxNxq': _0x1a6ad8(0xc3),
        'fbQam': function (_0x2166f6, _0x35359d) {
            return _0x2166f6(_0x35359d);
        },
        'hommU': function (_0x3bb1d8, _0x321fa5) {
            return _0x3bb1d8(_0x321fa5);
        },
        'hyBlO': function (_0x315274, _0x2ea234) {
            return _0x315274(_0x2ea234);
        },
        'SZjmb': _0x1a6ad8(0xc4),
        'KlDmJ': function (_0x48abc4, _0x163b39) {
            return _0x48abc4(_0x163b39);
        },
        'mVsyd': _0x1a6ad8(0xc5),
        'unfPc': _0x1a6ad8(0xc6),
        'YneNZ': function (_0x2ac781, _0x86055d, _0x3513a3) {
            return _0x2ac781(_0x86055d, _0x3513a3);
        },
        'hoNiJ': _0x1a6ad8(0xc7),
        'YxnIf': _0x1a6ad8(0xc8),
        'hAYkZ': 'should call function with queueReactNativeMicrotask',
        'SSXSE': function (_0x85e663, _0x26a23b, _0x284ea3) {
            return _0x85e663(_0x26a23b, _0x284ea3);
        },
        'oAySZ': 'should not call function with clearReactNativeMicrotask',
        'eZowH': 'should call functions in the right order with queueReactNativeMicrotask',
        'jbqoN': function (_0x3142ff, _0x261b7d, _0x2e7e6f) {
            return _0x3142ff(_0x261b7d, _0x2e7e6f);
        },
        'ciuMs': _0x1a6ad8(0xc9),
        'hsHPv': function (_0x1cf0e4, _0x332e91, _0x38ded5) {
            return _0x1cf0e4(_0x332e91, _0x38ded5);
        },
        'KLgUW': _0x1a6ad8(0xca),
        'ROqMY': function (_0x53b9a5, _0x15883d, _0x2aa02d) {
            return _0x53b9a5(_0x15883d, _0x2aa02d);
        },
        'hNwUV': function (_0x243883, _0xfcdec8, _0x3abc0c) {
            return _0x243883(_0xfcdec8, _0x3abc0c);
        },
        'uFJZS': _0x1a6ad8(0xcb),
        'SNzvg': function (_0x4e050f, _0x2f9726, _0x2a4075) {
            return _0x4e050f(_0x2f9726, _0x2a4075);
        },
        'xYKFE': _0x1a6ad8(0xcc),
        'dLhEV': function (_0x4482bd, _0x3d42fb, _0x28c7f3) {
            return _0x4482bd(_0x3d42fb, _0x28c7f3);
        },
        'FZCmP': _0x1a6ad8(0xcd),
        'IOsdO': function (_0x562a07, _0x13e6b8, _0x4edbd3) {
            return _0x562a07(_0x13e6b8, _0x4edbd3);
        },
        'CiMXw': _0x1a6ad8(0xce),
        'ZyWWx': function (_0x25c734, _0x828444, _0x4a1780) {
            return _0x25c734(_0x828444, _0x4a1780);
        },
        'tLvWt': _0x1a6ad8(0xcf),
        'Ddaky': 'should only call callback once for setTimeout',
        'evFdN': 'should re-throw first exception',
        'WPGPs': 'should pass along errors thrown from queueReactNativeMicrotask',
        'JwXqt': _0x1a6ad8(0xd0),
        'roQAv': _0x1a6ad8(0xd1),
        'rtvPG': _0x1a6ad8(0xd2),
        'essih': function (_0x42b659, _0x3c285e, _0x18e8d5) {
            return _0x42b659(_0x3c285e, _0x18e8d5);
        },
        'dhZUC': 'should pass along errors thrown from setInterval',
        'Avjul': function (_0x634303, _0x17133d, _0x4d2e15) {
            return _0x634303(_0x17133d, _0x4d2e15);
        },
        'udAib': _0x1a6ad8(0xd3)
    };

    _0x238c96.KlDmJ(beforeEach, function () {
        const _0x4bf908 = _0x1a6ad8;

        jest.spyOn(console, _0x238c96[_0x4bf908(0xd4)]), global['setTimeout'] = JSTimers[_0x4bf908(0xd5)];
    }), afterEach(() => {
        const _0x3948cb = _0x1a6ad8;

        console.warn[_0x3948cb(0xd6)]();
    }), it(_0x238c96[_0x1a6ad8(0xd7)], function () {
        const _0x7e28fb = _0x1a6ad8;
        var _0x3dbf09 = false;

        const _0x4e9165 = JSTimers[_0x7e28fb(0xd5)](function () {
            _0x3dbf09 = true;
        });

        JSTimers[_0x7e28fb(0xd8)]([JSTimers[_0x7e28fb(0xd5)](function () {
            _0x3dbf09 = true;
        })]), _0x238c96[_0x7e28fb(0xd9)](expect, _0x3dbf09)[_0x7e28fb(0xda)](true);
    }), it(_0x238c96.unfPc, function () {
        const _0x4aafa1 = _0x1a6ad8;

        var _0x36c84c;

        var _0x474b49;

        var _0x652d35;

        var _0x560cfd = 0;

        _0x36c84c = JSTimers[_0x4aafa1(0xd5)](function () {
            const _0x4df247 = _0x4aafa1;

            JSTimers[_0x4df247(0xdb)](_0x36c84c), _0x474b49 = JSTimers.setTimeout(function () {
                JSTimers.clearTimeout(_0x474b49), _0x652d35 = JSTimers.setTimeout(function () {
                    _0x560cfd += 1;
                });
            });
        }), JSTimers[_0x4aafa1(0xd8)]([_0x36c84c]), JSTimers[_0x4aafa1(0xd8)]([JSTimers.setTimeout(function () {
            JSTimers.clearTimeout(_0x474b49), _0x652d35 = JSTimers.setTimeout(function () {
                _0x560cfd += 1;
            });
        })]), JSTimers.callTimers([JSTimers.setTimeout(function () {
            _0x560cfd += 1;
        })]), _0x238c96.MIQdb(expect, _0x560cfd).toBe(1);
    }), _0x238c96.YneNZ(it, 'should call nested queueReactNativeMicrotask when cleared', function () {
        const _0x5d6677 = _0x1a6ad8;

        var _0x16a305;

        var _0x517fb6;

        var _0x5f1901;

        var _0x1f8fde = 0;

        _0x16a305 = JSTimers[_0x5d6677(0xdc)](function () {
            const _0x131999 = _0x5d6677;

            JSTimers[_0x131999(0xdd)](_0x16a305), _0x517fb6 = JSTimers[_0x131999(0xdc)](function () {
                JSTimers.clearReactNativeMicrotask(_0x517fb6), _0x5f1901 = JSTimers.queueReactNativeMicrotask(function () {
                    _0x1f8fde += 1;
                });
            });
        }), JSTimers[_0x5d6677(0xd8)]([_0x16a305]), JSTimers.callTimers([JSTimers[_0x131999(0xdc)](function () {
            JSTimers.clearReactNativeMicrotask(_0x517fb6), _0x5f1901 = JSTimers.queueReactNativeMicrotask(function () {
                _0x1f8fde += 1;
            });
        })]), JSTimers[_0x5d6677(0xd8)]([JSTimers.queueReactNativeMicrotask(function () {
            _0x1f8fde += 1;
        })]), _0x238c96[_0x5d6677(0xde)](expect, _0x1f8fde).toBe(1);
    }), _0x238c96.YneNZ(it, _0x1a6ad8(0xdf), function () {
        const _0x3398e1 = _0x1a6ad8;

        var _0x2b38eb;

        var _0x370805;

        var _0x1f18fa;

        var _0x15267a = 0;

        _0x2b38eb = JSTimers[_0x3398e1(0xe0)](function () {
            const _0x2c2d19 = _0x3398e1;

            JSTimers[_0x2c2d19(0xe1)](_0x2b38eb), _0x370805 = JSTimers[_0x2c2d19(0xe0)](function () {
                const _0x4a5a5e = _0x2c2d19;

                JSTimers[_0x4a5a5e(0xe1)](_0x370805), _0x1f18fa = JSTimers.requestAnimationFrame(function () {
                    _0x15267a += 1;
                });
            });
        }), JSTimers[_0x3398e1(0xd8)]([_0x2b38eb]), JSTimers.callTimers([JSTimers[_0x2c2d19(0xe0)](function () {
            const _0x4a5a5e = _0x2c2d19;
            JSTimers[_0x4a5a5e(0xe1)](_0x370805), _0x1f18fa = JSTimers.requestAnimationFrame(function () {
                _0x15267a += 1;
            });
        })]), JSTimers[_0x3398e1(0xd8)]([JSTimers.requestAnimationFrame(function () {
            _0x15267a += 1;
        })]), _0x238c96[_0x3398e1(0xde)](expect, _0x15267a)[_0x3398e1(0xda)](1);
    }), _0x238c96.YneNZ(it, _0x238c96.hoNiJ, function () {
        const _0x46e745 = _0x1a6ad8;

        var _0x2100ae;

        var _0x3126a7;

        var _0x288d2f;

        var _0x1f34cb = 0;

        _0x2100ae = JSTimers.setInterval(function () {
            const _0x41b8a0 = _0x13b9;

            JSTimers[_0x41b8a0(0xe2)](_0x2100ae), _0x3126a7 = JSTimers[_0x41b8a0(0xe3)](function () {
                const _0x1c2db5 = _0x41b8a0;

                JSTimers.clearInterval(_0x3126a7), _0x288d2f = JSTimers[_0x1c2db5(0xe3)](function () {
                    _0x1f34cb += 1;
                });
            });
        }), JSTimers[_0x46e745(0xd8)]([_0x2100ae]), JSTimers[_0x46e745(0xd8)]([JSTimers[_0x41b8a0(0xe3)](function () {
            const _0x1c2db5 = _0x41b8a0;
            JSTimers.clearInterval(_0x3126a7), _0x288d2f = JSTimers[_0x1c2db5(0xe3)](function () {
                _0x1f34cb += 1;
            });
        })]), JSTimers.callTimers([JSTimers[_0x1c2db5(0xe3)](function () {
            _0x1f34cb += 1;
        })]), expect(_0x1f34cb)[_0x46e745(0xda)](1);
    }), it(_0x238c96[_0x1a6ad8(0xe4)], function () {
        const _0x41aa67 = _0x1a6ad8;

        const _0x494324 = jest.fn();

        const _0x5c20f5 = JSTimers[_0x41aa67(0xe3)](_0x494324);

        JSTimers[_0x41aa67(0xd8)]([_0x5c20f5]), _0x238c96[_0x41aa67(0xe5)](expect, _0x494324).toBeCalledTimes(1);
    }), it(_0x238c96[_0x1a6ad8(0xe6)], function () {
        const _0x1a51f0 = _0x1a6ad8;

        const _0x580998 = jest.fn();

        JSTimers[_0x1a51f0(0xdc)](_0x580998), JSTimers.callReactNativeMicrotasks(), expect(_0x580998).toBeCalledTimes(1);
    }), _0x238c96.SSXSE(it, _0x238c96[_0x1a6ad8(0xe7)], function () {
        const _0x5e178f = _0x1a6ad8;

        const _0x25505f = jest.fn();

        const _0x484f16 = JSTimers[_0x5e178f(0xdc)](_0x25505f);

        JSTimers[_0x5e178f(0xdd)](_0x484f16), JSTimers[_0x5e178f(0xe8)](), _0x238c96.SQePF(expect, _0x25505f)[_0x5e178f(0xe9)][_0x5e178f(0xea)]();
    }), _0x238c96.SSXSE(it, _0x238c96[_0x1a6ad8(0xeb)], function () {
        const _0x5f2b8a = _0x1a6ad8;
        var _0x4e491d = 0;
        var _0x4c234a = null;
        var _0x120c98 = null;

        JSTimers[_0x5f2b8a(0xdc)](function () {
            _0x4c234a = _0x4e491d++;
        }), JSTimers[_0x5f2b8a(0xdc)](function () {
            _0x120c98 = _0x4e491d++;
        }), JSTimers.callReactNativeMicrotasks(), expect(_0x4c234a)[_0x5f2b8a(0xda)](0), expect(_0x120c98)[_0x5f2b8a(0xda)](1);
    }), _0x238c96.jbqoN(it, _0x238c96[_0x1a6ad8(0xec)], function () {
        const _0xf743fe = _0x1a6ad8;
        var _0x5c04d9 = 0;
        var _0x166e19 = null;
        var _0x55de71 = null;
        var _0x19c32a = null;

        JSTimers[_0xf743fe(0xdc)](function () {
            const _0x541524 = _0xf743fe;

            _0x166e19 = _0x5c04d9++, JSTimers[_0x541524(0xdc)](function () {
                _0x19c32a = _0x5c04d9++;
            }), _0x55de71 = _0x5c04d9++;
        }), JSTimers.callReactNativeMicrotasks(), _0x238c96[_0xf743fe(0xed)](expect, _0x166e19).toBe(0), _0x238c96.SQePF(expect, _0x55de71)[_0xf743fe(0xda)](1), _0x238c96[_0xf743fe(0xed)](expect, _0x19c32a)[_0xf743fe(0xda)](2);
    }), it('should call nested queueReactNativeMicrotask', function () {
        const _0x2e740b = _0x1a6ad8;
        var _0x47e884 = false;
        var _0x300d17 = false;

        JSTimers[_0x2e740b(0xdc)](function () {
            const _0x3f121b = _0x2e740b;

            _0x47e884 = true, JSTimers[_0x3f121b(0xdc)](function () {
                _0x300d17 = true;
            });
        }), JSTimers[_0x2e740b(0xe8)](), expect(_0x47e884)[_0x2e740b(0xda)](true), _0x238c96[_0x2e740b(0xed)](expect, _0x300d17)[_0x2e740b(0xda)](true);
    }), _0x238c96.hsHPv(it, _0x238c96.KLgUW, function () {
        const _0x3f51ba = _0x1a6ad8;

        const _0x23150c = jest.fn();

        const _0x5d1421 = JSTimers[_0x3f51ba(0xe0)](_0x23150c);

        JSTimers[_0x3f51ba(0xd8)]([_0x5d1421]), _0x238c96[_0x3f51ba(0xed)](expect, _0x23150c).toBeCalledTimes(1);
    }), _0x238c96[_0x1a6ad8(0xee)](it, _0x1a6ad8(0xef), function () {
        const _0x4e2838 = _0x1a6ad8;

        const _0x48c96e = jest.fn();

        JSTimers[_0x4e2838(0xd5)](_0x48c96e, 10), _0x238c96[_0x4e2838(0xed)](expect, _0x48c96e)[_0x4e2838(0xe9)][_0x4e2838(0xea)](), JSTimers[_0x4e2838(0xe3)](_0x48c96e, 10), _0x238c96[_0x4e2838(0xf0)](expect, _0x48c96e)[_0x4e2838(0xe9)][_0x4e2838(0xea)](), JSTimers[_0x4e2838(0xe0)](_0x48c96e), _0x238c96[_0x4e2838(0xf0)](expect, _0x48c96e).not[_0x4e2838(0xea)]();
    }), _0x238c96[_0x1a6ad8(0xf1)](it, _0x1a6ad8(0xf2), function () {
        const _0x5d96fa = _0x1a6ad8;

        const _0x244878 = jest.fn();

        const _0x472abf = JSTimers.setInterval(_0x244878, 10);

        JSTimers[_0x5d96fa(0xd8)]([_0x472abf]), JSTimers[_0x5d96fa(0xd8)]([_0x472abf]), JSTimers.callTimers([_0x472abf]), JSTimers[_0x5d96fa(0xd8)]([_0x472abf]), _0x238c96.dVJKu(expect, _0x244878)[_0x5d96fa(0xf3)](4);
    }), _0x238c96[_0x1a6ad8(0xf4)](it, _0x238c96[_0x1a6ad8(0xf5)], function () {
        const _0x4e05d7 = _0x1a6ad8;
        var _0x379b77 = false;
        var _0x1c2d6e = false;

        JSTimers[_0x4e05d7(0xd5)](function () {
            _0x379b77 = true;
        });

        const _0x5827ba = JSTimers[_0x4e05d7(0xd5)](function () {
            _0x1c2d6e = true;
        });

        JSTimers[_0x4e05d7(0xd8)]([JSTimers[_0x4e05d7(0xd5)](function () {
            _0x1c2d6e = true;
        })]), _0x238c96.dVJKu(expect, _0x379b77)[_0x4e05d7(0xda)](false), expect(_0x1c2d6e)[_0x4e05d7(0xda)](true);
    }), _0x238c96.SNzvg(it, _0x238c96[_0x1a6ad8(0xf6)], function () {
        const _0x1d4278 = _0x1a6ad8;
        var _0x54ea42 = false;
        var _0x5b7fa4 = false;

        const _0x245e46 = JSTimers[_0x1d4278(0xd5)](function () {
            _0x54ea42 = true;
        });

        const _0x39b0b3 = JSTimers[_0x1d4278(0xd5)](function () {
            _0x5b7fa4 = true;
        });

        JSTimers[_0x1d4278(0xd8)]([_0x245e46, _0x39b0b3]), expect(_0x54ea42)[_0x1d4278(0xda)](true), expect(_0x5b7fa4).toBe(true);
    }), _0x238c96[_0x1a6ad8(0xf7)](it, 'should still execute all callbacks even if one throws', function () {
        const _0x2eb5f9 = _0x1a6ad8;

        const _0x27d243 = JSTimers[_0x2eb5f9(0xd5)](function () {
            const _0x294fb5 = _0x2eb5f9;

            throw new Error(_0x238c96[_0x294fb5(0xf8)]);
        }, 10);

        var _0x4cbca4 = false;

        const _0x2b0c12 = JSTimers.setTimeout(function () {
            _0x4cbca4 = true;
        }, 10);

        _0x238c96[_0x2eb5f9(0xf9)](expect, JSTimers[_0x2eb5f9(0xd8)][_0x2eb5f9(0xfa)](null, [_0x27d243, JSTimers.setTimeout(function () {
            _0x4cbca4 = true;
        }, 10)]))[_0x2eb5f9(0xfb)](), expect(_0x4cbca4).toBe(true);
    }), _0x238c96.dLhEV(it, _0x238c96[_0x1a6ad8(0xfc)], function () {
        const _0x4746db = _0x1a6ad8;

        const _0x4af51f = JSTimers[_0x4746db(0xd5)](function () {
            const _0xa41b67 = _0x4746db;

            throw new Error(_0xa41b67(0xfd));
        }, 10);

        _0x238c96[_0x4746db(0xfe)](expect, JSTimers[_0x4746db(0xd8)][_0x4746db(0xfa)](null, [_0x4af51f]))[_0x4746db(0xfb)](_0x238c96[_0x4746db(0xf8)]), JSTimers[_0x4746db(0xd8)][_0x4746db(0xfa)](null, [_0x4af51f]);
    }), _0x238c96[_0x1a6ad8(0xff)](it, _0x238c96[_0x1a6ad8(0x100)], function () {
        const _0x22be33 = _0x1a6ad8;

        const _0x5e6f8f = jest.fn();

        const _0x1a34c = JSTimers[_0x22be33(0xd5)](_0x5e6f8f, 10);

        JSTimers[_0x22be33(0xdb)](_0x1a34c), JSTimers[_0x22be33(0xd8)]([_0x1a34c]), expect(_0x5e6f8f)[_0x22be33(0xe9)].toBeCalled(), _0x238c96[_0x22be33(0xfe)](expect, console[_0x22be33(0x101)])[_0x22be33(0xe9)][_0x22be33(0xea)]();
    }), _0x238c96[_0x1a6ad8(0x102)](it, _0x238c96.tLvWt, function () {
        const _0x23cf0a = _0x1a6ad8;

        JSTimers.callTimers([1337]), expect(console[_0x23cf0a(0x101)])[_0x23cf0a(0xea)]();
    }), it(_0x238c96.Ddaky, function () {
        const _0xba29e6 = _0x1a6ad8;

        const _0x549bd7 = jest.fn();

        const _0x13ef3e = JSTimers[_0xba29e6(0xd5)](_0x549bd7, 10);

        JSTimers.callTimers([_0x13ef3e]), _0x238c96[_0xba29e6(0xfe)](expect, _0x549bd7)[_0xba29e6(0xf3)](1), JSTimers[_0xba29e6(0xd8)]([_0x13ef3e]), expect(_0x549bd7)[_0xba29e6(0xf3)](1), _0x238c96[_0xba29e6(0xfe)](expect, console[_0xba29e6(0x101)])[_0xba29e6(0xe9)][_0xba29e6(0xea)]();
    }), _0x238c96[_0x1a6ad8(0x102)](it, _0x1a6ad8(0x103), function () {
        const _0x10d00e = _0x1a6ad8;

        const _0x526f6a = jest.fn();

        const _0x409728 = JSTimers.requestAnimationFrame(_0x526f6a, 10);

        JSTimers.callTimers([_0x409728]), _0x238c96[_0x10d00e(0x104)](expect, _0x526f6a)[_0x10d00e(0xf3)](1), JSTimers[_0x10d00e(0xd8)]([_0x409728]), _0x238c96[_0x10d00e(0x105)](expect, _0x526f6a).toBeCalledTimes(1), expect(console[_0x10d00e(0x101)]).not[_0x10d00e(0xea)]();
    }), _0x238c96[_0x1a6ad8(0x102)](it, _0x238c96[_0x1a6ad8(0x106)], function () {
        const _0x50c71b = _0x1a6ad8;
        const _0xc059ac = { 'kGNuj': _0x238c96.HIfiV };

        const _0x190e41 = JSTimers[_0x50c71b(0xd5)](function () {
            const _0x2a20d4 = _0x50c71b;

            throw new Error(_0x238c96[_0x2a20d4(0x107)]);
        });

        const _0x4ac622 = JSTimers[_0x50c71b(0xd5)](function () {
            const _0xc11af6 = _0x50c71b;

            throw new Error(_0xc059ac[_0xc11af6(0x108)]);
        });

        _0x238c96[_0x50c71b(0x105)](expect, JSTimers[_0x50c71b(0xd8)][_0x50c71b(0xfa)](null, [_0x190e41, _0x4ac622]))[_0x50c71b(0x109)](_0x238c96.wLDYf);
    }), it(_0x238c96[_0x1a6ad8(0x10a)], function () {
        const _0x40975a = _0x1a6ad8;
        const _0x29d77e = { 'yPJux': _0x238c96[_0x40975a(0x10b)] };

        JSTimers.queueReactNativeMicrotask(function () {
            const _0x282af8 = _0x40975a;

            throw new Error(_0x29d77e[_0x282af8(0x10c)]);
        }), NativeTiming['createTimer'] = jest.fn(), JSTimers.callReactNativeMicrotasks(), _0x238c96.wkGuI(expect, NativeTiming[_0x40975a(0x10d)])[_0x40975a(0xea)]();

        const _0x1bd589 = NativeTiming.createTimer[_0x40975a(0xbd)][_0x40975a(0x10e)][0][0];

        _0x238c96[_0x40975a(0x105)](expect, JSTimers[_0x40975a(0xd8)].bind(null, [NativeTiming.createTimer[_0x40975a(0xbd)][_0x40975a(0x10e)][0][0]]))[_0x40975a(0x109)](_0x238c96.UYnms);
    }), it(_0x238c96[_0x1a6ad8(0x10f)], function () {
        const _0x5d0d52 = _0x1a6ad8;
        const _0x506fa3 = { 'NhHip': _0x238c96[_0x5d0d52(0x107)] };

        JSTimers.queueReactNativeMicrotask(function () {
            const _0x173a99 = _0x5d0d52;

            throw new Error(_0x506fa3[_0x173a99(0x110)]);
        }), JSTimers[_0x5d0d52(0xdc)](function () {
            const _0x4bca48 = _0x5d0d52;

            throw new Error(_0x4bca48(0xc2));
        }), NativeTiming[_0x5d0d52(0x10d)] = jest.fn(), JSTimers[_0x5d0d52(0xe8)](), _0x238c96.jgycm(expect, NativeTiming[_0x5d0d52(0x10d)].mock.calls[_0x5d0d52(0x111)]).toBe(2);

        const _0x3a9170 = NativeTiming.createTimer[_0x5d0d52(0xbd)].calls[0][0];

        _0x238c96[_0x5d0d52(0x112)](expect, JSTimers.callTimers[_0x5d0d52(0xfa)](null, [NativeTiming.createTimer[_0x5d0d52(0xbd)].calls[0][0]])).toThrowError(_0x238c96.wLDYf);

        const _0x236447 = NativeTiming[_0x5d0d52(0x10d)][_0x5d0d52(0xbd)][_0x5d0d52(0x10e)][1][0];

        _0x238c96[_0x5d0d52(0x113)](expect, JSTimers[_0x5d0d52(0xd8)][_0x5d0d52(0xfa)](null, [NativeTiming[_0x5d0d52(0x10d)][_0x5d0d52(0xbd)][_0x5d0d52(0x10e)][1][0]]))[_0x5d0d52(0x109)](_0x5d0d52(0xc2));
    }), _0x238c96[_0x1a6ad8(0x102)](it, _0x238c96[_0x1a6ad8(0x114)], function () {
        const _0x156e47 = _0x1a6ad8;
        const _0x529c39 = { 'rNewo': _0x238c96[_0x156e47(0x115)] };

        const _0x5ccdef = JSTimers[_0x156e47(0xd5)](function () {
            throw new Error(_0x529c39.rNewo);
        });

        _0x238c96[_0x156e47(0x116)](expect, JSTimers[_0x156e47(0xd8)][_0x156e47(0xfa)](null, [_0x5ccdef]))[_0x156e47(0x109)](_0x238c96[_0x156e47(0x115)]);
    }), _0x238c96[_0x1a6ad8(0x102)](it, _0x238c96[_0x1a6ad8(0x117)], function () {
        const _0x1a1be8 = _0x1a6ad8;
        const _0x2de229 = { 'bdNxA': _0x238c96[_0x1a1be8(0x118)] };

        const _0xecfb4b = JSTimers[_0x1a1be8(0xd5)](function () {
            const _0x263c3b = _0x1a1be8;

            throw new Error(_0x238c96[_0x263c3b(0x107)]);
        });

        const _0x3f305c = JSTimers.setTimeout(function () {
            throw new Error(_0x2de229.bdNxA);
        });

        NativeTiming['createTimer'] = jest.fn(), _0x238c96[_0x1a1be8(0x119)](expect, JSTimers.callTimers[_0x1a1be8(0xfa)](null, [_0xecfb4b, _0x3f305c]))[_0x1a1be8(0x109)](_0x238c96[_0x1a1be8(0x107)]), expect(NativeTiming[_0x1a1be8(0x10d)][_0x1a1be8(0xbd)].calls[_0x1a1be8(0x111)])[_0x1a1be8(0xda)](1);

        const _0x6160d1 = NativeTiming[_0x1a1be8(0x10d)][_0x1a1be8(0xbd)][_0x1a1be8(0x10e)][0][0];

        _0x238c96.hyBlO(expect, JSTimers[_0x1a1be8(0xd8)][_0x1a1be8(0xfa)](null, [NativeTiming[_0x1a1be8(0x10d)][_0x1a1be8(0xbd)][_0x1a1be8(0x10e)][0][0]]))[_0x1a1be8(0x109)](_0x238c96[_0x1a1be8(0x118)]);
    }), _0x238c96[_0x1a6ad8(0x11a)](it, _0x238c96[_0x1a6ad8(0x11b)], function () {
        const _0x4574ce = _0x1a6ad8;

        const _0x5c48e9 = JSTimers[_0x4574ce(0xe3)](function () {
            const _0x519f41 = _0x4574ce;

            throw new Error(_0x238c96[_0x519f41(0x11c)]);
        });

        _0x238c96[_0x4574ce(0x11d)](expect, JSTimers[_0x4574ce(0xd8)][_0x4574ce(0xfa)](null, [_0x5c48e9]))[_0x4574ce(0x109)](_0x238c96[_0x4574ce(0x11c)]);
    }), _0x238c96[_0x1a6ad8(0x11e)](it, _0x238c96[_0x1a6ad8(0x11f)], function () {
        const _0xa2fcc6 = _0x1a6ad8;

        const _0x336908 = JSTimers[_0xa2fcc6(0xd5)](() => {});

        JSTimers[_0xa2fcc6(0xdb)](_0x336908), NativeTiming[_0xa2fcc6(0x120)] = jest.fn(), JSTimers.clearTimeout(null), _0x238c96[_0xa2fcc6(0x11d)](expect, NativeTiming.deleteTimer.mock.calls[_0xa2fcc6(0x111)])[_0xa2fcc6(0xda)](0);
    });
});
