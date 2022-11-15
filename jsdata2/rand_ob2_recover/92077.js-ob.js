function _0x5988(_0x29e877, _0x89278e) {
    return _0x5988 = function (_0xa9b1d, _0x598858) {
        _0xa9b1d = _0xa9b1d - 263;
        let _0x59b6c7 = _0xa9b1[_0xa9b1d];
        return _0x59b6c7;
    }, _0x5988(_0x29e877, _0x89278e);
}
const NativeTiming = {
    'createTimer': jest['fn'](),
    'deleteTimer': jest['fn'](),
    'setSendIdleEvents': jest['fn']()
};
jest[_0x50061c(274)]()[_0x50061c(275)](_0x50061c(276), () => ({
    '__esModule': !![],
    'default': NativeTiming
}))['unmock'](_0x50061c(277));
const JSTimers = require(_0x50061c(277));
describe('JSTimers', function () {
    const _0x131038 = _0x50061c;
    beforeEach(function () {
        const _0x59ec48 = _0x5988;
        jest[_0x59ec48(278)](console, 'warn'), global[_0x59ec48(279)] = JSTimers[_0x59ec48(279)];
    }), afterEach(() => {
        const _0xe759e9 = _0x5988;
        console[_0xe759e9(280)][_0xe759e9(281)]();
    }), it(_0x131038(282), function () {
        const _0x1f1c5b = _0x131038;
        let _0xc0cd53 = ![];
        const _0x178ba4 = JSTimers['setTimeout'](function () {
            _0xc0cd53 = !![];
        });
        JSTimers[_0x1f1c5b(283)]([_0x178ba4]), expect(_0xc0cd53)[_0x1f1c5b(284)](!![]);
    }), it('should call nested setTimeout when cleared', function () {
        const _0x37d946 = _0x131038;
        let _0x236b73, _0x48b0ab, _0x24afc5, _0xee0aef = 0;
        _0x236b73 = JSTimers[_0x37d946(279)](function () {
            const _0x124cfe = _0x37d946;
            JSTimers[_0x124cfe(285)](_0x236b73), _0x48b0ab = JSTimers['setTimeout'](function () {
                const _0x9589e6 = _0x124cfe;
                JSTimers['clearTimeout'](_0x48b0ab), _0x24afc5 = JSTimers[_0x9589e6(279)](function () {
                    _0xee0aef += 1;
                });
            });
        }), JSTimers[_0x37d946(283)]([_0x236b73]), JSTimers[_0x37d946(283)]([_0x48b0ab]), JSTimers[_0x37d946(283)]([_0x24afc5]), expect(_0xee0aef)['toBe'](1);
    }), it(_0x131038(286), function () {
        const _0x4c2494 = _0x131038;
        let _0x1d395a, _0x40835b, _0x4a7bf7, _0x380f6f = 0;
        _0x1d395a = JSTimers['queueReactNativeMicrotask'](function () {
            const _0x13746c = _0x5988;
            JSTimers[_0x13746c(287)](_0x1d395a), _0x40835b = JSTimers[_0x13746c(288)](function () {
                const _0x3f894c = _0x13746c;
                JSTimers['clearReactNativeMicrotask'](_0x40835b), _0x4a7bf7 = JSTimers[_0x3f894c(288)](function () {
                    _0x380f6f += 1;
                });
            });
        }), JSTimers[_0x4c2494(283)]([_0x1d395a]), JSTimers[_0x4c2494(283)]([_0x40835b]), JSTimers[_0x4c2494(283)]([_0x4a7bf7]), expect(_0x380f6f)[_0x4c2494(284)](1);
    }), it(_0x131038(289), function () {
        const _0x411d5b = _0x131038;
        let _0x2e2c99, _0x4b9ecc, _0x46e7d8, _0x317af0 = 0;
        _0x2e2c99 = JSTimers['requestAnimationFrame'](function () {
            const _0x47b1fc = _0x5988;
            JSTimers[_0x47b1fc(290)](_0x2e2c99), _0x4b9ecc = JSTimers[_0x47b1fc(291)](function () {
                const _0x2a6b20 = _0x47b1fc;
                JSTimers[_0x2a6b20(290)](_0x4b9ecc), _0x46e7d8 = JSTimers['requestAnimationFrame'](function () {
                    _0x317af0 += 1;
                });
            });
        }), JSTimers['callTimers']([_0x2e2c99]), JSTimers[_0x411d5b(283)]([_0x4b9ecc]), JSTimers[_0x411d5b(283)]([_0x46e7d8]), expect(_0x317af0)[_0x411d5b(284)](1);
    }), it(_0x131038(292), function () {
        const _0x34edb3 = _0x131038;
        let _0x1e1327, _0x25520f, _0x59ca1e, _0x575683 = 0;
        _0x1e1327 = JSTimers['setInterval'](function () {
            const _0x2d5c76 = _0x5988;
            JSTimers[_0x2d5c76(293)](_0x1e1327), _0x25520f = JSTimers[_0x2d5c76(294)](function () {
                const _0x145ce5 = _0x2d5c76;
                JSTimers['clearInterval'](_0x25520f), _0x59ca1e = JSTimers[_0x145ce5(294)](function () {
                    _0x575683 += 1;
                });
            });
        }), JSTimers[_0x34edb3(283)]([_0x1e1327]), JSTimers[_0x34edb3(283)]([_0x25520f]), JSTimers['callTimers']([_0x59ca1e]), expect(_0x575683)[_0x34edb3(284)](1);
    }), it('should call function with setInterval', function () {
        const _0x4b8462 = _0x131038, _0x57e684 = jest['fn'](), _0x40b6b5 = JSTimers['setInterval'](_0x57e684);
        JSTimers['callTimers']([_0x40b6b5]), expect(_0x57e684)[_0x4b8462(295)](1);
    }), it('should call function with queueReactNativeMicrotask', function () {
        const _0x316882 = _0x131038, _0x5a4b3a = jest['fn']();
        JSTimers[_0x316882(288)](_0x5a4b3a), JSTimers['callReactNativeMicrotasks'](), expect(_0x5a4b3a)[_0x316882(295)](1);
    }), it(_0x131038(296), function () {
        const _0xa13ec3 = _0x131038, _0x2408a6 = jest['fn'](), _0x48b578 = JSTimers[_0xa13ec3(288)](_0x2408a6);
        JSTimers[_0xa13ec3(287)](_0x48b578), JSTimers['callReactNativeMicrotasks'](), expect(_0x2408a6)[_0xa13ec3(297)][_0xa13ec3(298)]();
    }), it(_0x131038(299), function () {
        const _0x4cff25 = _0x131038;
        let _0x3fbb3c = 0, _0x32152d = null, _0x1e239a = null;
        JSTimers[_0x4cff25(288)](function () {
            _0x32152d = _0x3fbb3c++;
        }), JSTimers[_0x4cff25(288)](function () {
            _0x1e239a = _0x3fbb3c++;
        }), JSTimers[_0x4cff25(300)](), expect(_0x32152d)[_0x4cff25(284)](0), expect(_0x1e239a)['toBe'](1);
    }), it('should call functions in the right order with nested queueReactNativeMicrotask', function () {
        const _0x3ecccb = _0x131038;
        let _0x4bec15 = 0, _0x162b89 = null, _0x4825c6 = null, _0x494ef2 = null;
        JSTimers['queueReactNativeMicrotask'](function () {
            const _0x48b11b = _0x5988;
            _0x162b89 = _0x4bec15++, JSTimers[_0x48b11b(288)](function () {
                _0x494ef2 = _0x4bec15++;
            }), _0x4825c6 = _0x4bec15++;
        }), JSTimers[_0x3ecccb(300)](), expect(_0x162b89)[_0x3ecccb(284)](0), expect(_0x4825c6)[_0x3ecccb(284)](1), expect(_0x494ef2)[_0x3ecccb(284)](2);
    }), it(_0x131038(301), function () {
        const _0x58eb34 = _0x131038;
        let _0x50b12d = ![], _0x118876 = ![];
        JSTimers['queueReactNativeMicrotask'](function () {
            const _0x5a67af = _0x5988;
            _0x50b12d = !![], JSTimers[_0x5a67af(288)](function () {
                _0x118876 = !![];
            });
        }), JSTimers[_0x58eb34(300)](), expect(_0x50b12d)['toBe'](!![]), expect(_0x118876)[_0x58eb34(284)](!![]);
    }), it(_0x131038(302), function () {
        const _0x3c5f7a = _0x131038, _0xc178f8 = jest['fn'](), _0x5df8f9 = JSTimers[_0x3c5f7a(291)](_0xc178f8);
        JSTimers[_0x3c5f7a(283)]([_0x5df8f9]), expect(_0xc178f8)['toBeCalledTimes'](1);
    }), it(_0x131038(303), function () {
        const _0x38a973 = _0x131038, _0x44f464 = jest['fn']();
        JSTimers[_0x38a973(279)](_0x44f464, 10), expect(_0x44f464)[_0x38a973(297)]['toBeCalled'](), JSTimers[_0x38a973(294)](_0x44f464, 10), expect(_0x44f464)[_0x38a973(297)][_0x38a973(298)](), JSTimers[_0x38a973(291)](_0x44f464), expect(_0x44f464)['not'][_0x38a973(298)]();
    }), it(_0x131038(304), function () {
        const _0x5f1183 = _0x131038, _0x1e80c7 = jest['fn'](), _0x1d3b7f = JSTimers['setInterval'](_0x1e80c7, 10);
        JSTimers[_0x5f1183(283)]([_0x1d3b7f]), JSTimers[_0x5f1183(283)]([_0x1d3b7f]), JSTimers[_0x5f1183(283)]([_0x1d3b7f]), JSTimers[_0x5f1183(283)]([_0x1d3b7f]), expect(_0x1e80c7)['toBeCalledTimes'](4);
    }), it('should only call the function who\'s id we pass in', function () {
        const _0x2291bb = _0x131038;
        let _0x5dbe96 = ![], _0x401ec0 = ![];
        JSTimers[_0x2291bb(279)](function () {
            _0x5dbe96 = !![];
        });
        const _0x4cd698 = JSTimers[_0x2291bb(279)](function () {
            _0x401ec0 = !![];
        });
        JSTimers[_0x2291bb(283)]([_0x4cd698]), expect(_0x5dbe96)[_0x2291bb(284)](![]), expect(_0x401ec0)['toBe'](!![]);
    }), it('should work with calling multiple timers', function () {
        const _0x49458f = _0x131038;
        let _0x3665d4 = ![], _0xbe4d6a = ![];
        const _0x34618f = JSTimers[_0x49458f(279)](function () {
                _0x3665d4 = !![];
            }), _0x3ec739 = JSTimers[_0x49458f(279)](function () {
                _0xbe4d6a = !![];
            });
        JSTimers['callTimers']([
            _0x34618f,
            _0x3ec739
        ]), expect(_0x3665d4)['toBe'](!![]), expect(_0xbe4d6a)[_0x49458f(284)](!![]);
    }), it(_0x131038(305), function () {
        const _0x1e7f8b = _0x131038, _0x43d7f3 = JSTimers[_0x1e7f8b(279)](function () {
                const _0x194011 = _0x1e7f8b;
                throw new Error(_0x194011(306));
            }, 10);
        let _0x5b0983 = ![];
        const _0x1d86f8 = JSTimers[_0x1e7f8b(279)](function () {
            _0x5b0983 = !![];
        }, 10);
        expect(JSTimers['callTimers'][_0x1e7f8b(307)](null, [
            _0x43d7f3,
            _0x1d86f8
        ]))[_0x1e7f8b(308)](), expect(_0x5b0983)[_0x1e7f8b(284)](!![]);
    }), it(_0x131038(309), function () {
        const _0x494a4c = _0x131038, _0x15cc0d = JSTimers[_0x494a4c(279)](function () {
                throw new Error('error');
            }, 10);
        expect(JSTimers[_0x494a4c(283)][_0x494a4c(307)](null, [_0x15cc0d]))['toThrow'](_0x494a4c(306)), JSTimers['callTimers'][_0x494a4c(307)](null, [_0x15cc0d]);
    }), it(_0x131038(310), function () {
        const _0x58bd2d = _0x131038, _0x508098 = jest['fn'](), _0x410cf = JSTimers[_0x58bd2d(279)](_0x508098, 10);
        JSTimers[_0x58bd2d(285)](_0x410cf), JSTimers[_0x58bd2d(283)]([_0x410cf]), expect(_0x508098)[_0x58bd2d(297)][_0x58bd2d(298)](), expect(console['warn'])[_0x58bd2d(297)][_0x58bd2d(298)]();
    }), it('should warn when callTimers is called with garbage timer id', function () {
        const _0x6dbfc8 = _0x131038;
        JSTimers[_0x6dbfc8(283)]([1337]), expect(console[_0x6dbfc8(280)])[_0x6dbfc8(298)]();
    }), it(_0x131038(311), function () {
        const _0x13d487 = _0x131038, _0x2f1c74 = jest['fn'](), _0x5c1205 = JSTimers[_0x13d487(279)](_0x2f1c74, 10);
        JSTimers[_0x13d487(283)]([_0x5c1205]), expect(_0x2f1c74)['toBeCalledTimes'](1), JSTimers[_0x13d487(283)]([_0x5c1205]), expect(_0x2f1c74)['toBeCalledTimes'](1), expect(console[_0x13d487(280)])[_0x13d487(297)]['toBeCalled']();
    }), it(_0x131038(312), function () {
        const _0x25fb15 = _0x131038, _0x26f5cc = jest['fn'](), _0x2889ff = JSTimers[_0x25fb15(291)](_0x26f5cc, 10);
        JSTimers[_0x25fb15(283)]([_0x2889ff]), expect(_0x26f5cc)[_0x25fb15(295)](1), JSTimers[_0x25fb15(283)]([_0x2889ff]), expect(_0x26f5cc)[_0x25fb15(295)](1), expect(console['warn'])[_0x25fb15(297)][_0x25fb15(298)]();
    }), it(_0x131038(313), function () {
        const _0x1ebe9c = _0x131038, _0x42251e = JSTimers[_0x1ebe9c(279)](function () {
                throw new Error('first error');
            }), _0x427192 = JSTimers['setTimeout'](function () {
                const _0x4e37c9 = _0x1ebe9c;
                throw new Error(_0x4e37c9(314));
            });
        expect(JSTimers[_0x1ebe9c(283)][_0x1ebe9c(307)](null, [
            _0x42251e,
            _0x427192
        ]))['toThrowError']('first error');
    }), it(_0x131038(315), function () {
        const _0x1a4046 = _0x131038;
        JSTimers['queueReactNativeMicrotask'](function () {
            const _0x2cad21 = _0x5988;
            throw new Error(_0x2cad21(316));
        }), NativeTiming[_0x1a4046(317)] = jest['fn'](), JSTimers[_0x1a4046(300)](), expect(NativeTiming['createTimer'])['toBeCalled']();
        const _0x254370 = NativeTiming[_0x1a4046(317)][_0x1a4046(275)][_0x1a4046(318)][0][0];
        expect(JSTimers[_0x1a4046(283)][_0x1a4046(307)](null, [_0x254370]))[_0x1a4046(319)](_0x1a4046(316));
    }), it(_0x131038(320), function () {
        const _0x4cf198 = _0x131038;
        JSTimers[_0x4cf198(288)](function () {
            const _0x32047b = _0x4cf198;
            throw new Error(_0x32047b(321));
        }), JSTimers['queueReactNativeMicrotask'](function () {
            throw new Error('second error');
        }), NativeTiming['createTimer'] = jest['fn'](), JSTimers[_0x4cf198(300)](), expect(NativeTiming[_0x4cf198(317)][_0x4cf198(275)][_0x4cf198(318)][_0x4cf198(322)])[_0x4cf198(284)](2);
        const _0x127c71 = NativeTiming[_0x4cf198(317)][_0x4cf198(275)][_0x4cf198(318)][0][0];
        expect(JSTimers[_0x4cf198(283)]['bind'](null, [_0x127c71]))['toThrowError'](_0x4cf198(321));
        const _0x4d3a7d = NativeTiming[_0x4cf198(317)][_0x4cf198(275)][_0x4cf198(318)][1][0];
        expect(JSTimers[_0x4cf198(283)][_0x4cf198(307)](null, [_0x4d3a7d]))[_0x4cf198(319)](_0x4cf198(314));
    }), it('should pass along errors thrown from setTimeout', function () {
        const _0x44e786 = _0x131038, _0x475afe = JSTimers[_0x44e786(279)](function () {
                throw new Error('error within setTimeout');
            });
        expect(JSTimers['callTimers'][_0x44e786(307)](null, [_0x475afe]))[_0x44e786(319)](_0x44e786(323));
    }), it('should throw all errors from setTimeout', function () {
        const _0x2e1790 = _0x131038, _0x11beaa = JSTimers[_0x2e1790(279)](function () {
                const _0x239093 = _0x2e1790;
                throw new Error(_0x239093(321));
            }), _0x43fd60 = JSTimers[_0x2e1790(279)](function () {
                const _0x400187 = _0x2e1790;
                throw new Error(_0x400187(314));
            });
        NativeTiming['createTimer'] = jest['fn'](), expect(JSTimers[_0x2e1790(283)][_0x2e1790(307)](null, [
            _0x11beaa,
            _0x43fd60
        ]))[_0x2e1790(319)](_0x2e1790(321)), expect(NativeTiming['createTimer']['mock']['calls'][_0x2e1790(322)])[_0x2e1790(284)](1);
        const _0x574abd = NativeTiming['createTimer'][_0x2e1790(275)][_0x2e1790(318)][0][0];
        expect(JSTimers[_0x2e1790(283)][_0x2e1790(307)](null, [_0x574abd]))[_0x2e1790(319)]('second error');
    }), it(_0x131038(324), function () {
        const _0x16ba1e = _0x131038, _0x488201 = JSTimers[_0x16ba1e(294)](function () {
                const _0xbbcedb = _0x16ba1e;
                throw new Error(_0xbbcedb(325));
            });
        expect(JSTimers['callTimers'][_0x16ba1e(307)](null, [_0x488201]))['toThrowError'](_0x16ba1e(325));
    }), it('should not call to native when clearing a null timer', function () {
        const _0x52c73b = _0x131038, _0x1aabb1 = JSTimers['setTimeout'](() => {
            });
        JSTimers['clearTimeout'](_0x1aabb1), NativeTiming[_0x52c73b(326)] = jest['fn'](), JSTimers[_0x52c73b(285)](null), expect(NativeTiming['deleteTimer'][_0x52c73b(275)]['calls'][_0x52c73b(322)])[_0x52c73b(284)](0);
    });
});