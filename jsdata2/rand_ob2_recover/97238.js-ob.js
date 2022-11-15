let Scheduler, runtime, performance, cancelCallback, scheduleCallback, NormalPriority, UserBlockingPriority;
describe('SchedulerDOMSetImmediate', () => {
    const _0x2b158d = _0x50c4;
    beforeEach(() => {
        const _0x1403a3 = _0x50c4;
        jest['resetModules'](), runtime = _0x2e6187(), jest[_0x1403a3(278)](_0x1403a3(279)), performance = global[_0x1403a3(280)], Scheduler = require(_0x1403a3(279)), cancelCallback = Scheduler['unstable_cancelCallback'], scheduleCallback = Scheduler[_0x1403a3(281)], NormalPriority = Scheduler[_0x1403a3(282)], UserBlockingPriority = Scheduler[_0x1403a3(283)];
    }), afterEach(() => {
        const _0x40a6ad = _0x50c4;
        delete global['performance'];
        if (!runtime[_0x40a6ad(284)]())
            throw Error('Test exited without clearing log.');
    });
    function _0x2e6187() {
        const _0xc14e2 = _0x50c4;
        let _0x27f3d2 = 0, _0x16bccd = [], _0x51a99e = 0;
        global[_0xc14e2(280)] = {
            'now'() {
                return _0x51a99e;
            }
        }, global[_0xc14e2(285)] = (_0x4b0452, _0x357f3e) => {
            const _0x4c9809 = _0x27f3d2++;
            return _0x45db7f('Set Timer'), _0x4c9809;
        }, global['clearTimeout'] = _0x3deaee => {
        }, global[_0xc14e2(286)] = function () {
            return {
                'port1': {},
                'port2': {
                    'postMessage'() {
                        throw Error('Should be unused');
                    }
                }
            };
        };
        let _0x48d960 = null;
        global['setImmediate'] = function (_0x51ce3d) {
            const _0x1d3e91 = _0xc14e2;
            if (_0x48d960)
                throw Error('Message event already scheduled');
            _0x45db7f(_0x1d3e91(287)), _0x48d960 = _0x51ce3d;
        };
        function _0x17ad47() {
            const _0x3b9fc8 = _0xc14e2;
            if (_0x16bccd[_0x3b9fc8(288)] !== 0)
                throw Error(_0x3b9fc8(289));
        }
        function _0x1c72d2(_0x2bf3c2) {
            _0x51a99e += _0x2bf3c2;
        }
        function _0x217c33() {
            const _0x516d02 = _0xc14e2;
            _0x17ad47();
            if (!_0x48d960)
                throw Error(_0x516d02(290));
            const _0x2598bd = _0x48d960;
            _0x48d960 = null, _0x45db7f(_0x516d02(291)), _0x2598bd();
        }
        function _0x45db7f(_0x4be052) {
            _0x16bccd['push'](_0x4be052);
        }
        function _0x7c2b07() {
            const _0x259bcf = _0xc14e2;
            return _0x16bccd[_0x259bcf(288)] === 0;
        }
        function _0xeeb4da(_0x1ae719) {
            const _0x2b118d = _0xc14e2, _0x4ca841 = _0x16bccd;
            _0x16bccd = [], expect(_0x4ca841)[_0x2b118d(292)](_0x1ae719);
        }
        return {
            'advanceTime': _0x1c72d2,
            'fireSetImmediate': _0x217c33,
            'log': _0x45db7f,
            'isLogEmpty': _0x7c2b07,
            'assertLog': _0xeeb4da
        };
    }
    it('does not use setImmediate override', () => {
        const _0x55e909 = _0x50c4;
        global[_0x55e909(293)] = () => {
            throw new Error('Should not throw');
        }, scheduleCallback(NormalPriority, () => {
            const _0x43b5e4 = _0x55e909;
            runtime[_0x43b5e4(294)](_0x43b5e4(295));
        }), runtime[_0x55e909(296)]([_0x55e909(287)]), runtime[_0x55e909(297)](), runtime['assertLog']([
            _0x55e909(291),
            'Task'
        ]);
    }), it(_0x2b158d(298), () => {
        const _0x45a445 = _0x2b158d;
        scheduleCallback(NormalPriority, () => {
            const _0x2b323b = _0x50c4;
            runtime['log'](_0x2b323b(295));
        }), runtime[_0x45a445(296)]([_0x45a445(287)]), runtime[_0x45a445(297)](), runtime[_0x45a445(296)]([
            _0x45a445(291),
            _0x45a445(295)
        ]);
    }), it(_0x2b158d(299), () => {
        const _0x51b839 = _0x2b158d;
        scheduleCallback(NormalPriority, () => {
            const _0xf5057b = _0x50c4;
            runtime[_0xf5057b(294)](_0xf5057b(295));
            while (!Scheduler[_0xf5057b(300)]()) {
                runtime['advanceTime'](1);
            }
            return runtime[_0xf5057b(294)](_0xf5057b(301) + performance[_0xf5057b(302)]() + 'ms'), () => {
                const _0x2c5d01 = _0xf5057b;
                runtime['log'](_0x2c5d01(303));
            };
        }), runtime[_0x51b839(296)]([_0x51b839(287)]), runtime[_0x51b839(297)](), runtime[_0x51b839(296)]([
            _0x51b839(291),
            _0x51b839(295),
            'Yield at 5ms',
            _0x51b839(287)
        ]), runtime['fireSetImmediate'](), runtime[_0x51b839(296)]([
            _0x51b839(291),
            _0x51b839(303)
        ]);
    }), it('multiple tasks', () => {
        const _0x3dabef = _0x2b158d;
        scheduleCallback(NormalPriority, () => {
            const _0x32dabd = _0x50c4;
            runtime[_0x32dabd(294)]('A');
        }), scheduleCallback(NormalPriority, () => {
            const _0x54f959 = _0x50c4;
            runtime[_0x54f959(294)]('B');
        }), runtime[_0x3dabef(296)]([_0x3dabef(287)]), runtime[_0x3dabef(297)](), runtime[_0x3dabef(296)]([
            'setImmediate Callback',
            'A',
            'B'
        ]);
    }), it('multiple tasks at different priority', () => {
        const _0x5dbdfa = _0x2b158d;
        scheduleCallback(NormalPriority, () => {
            const _0x1c41cc = _0x50c4;
            runtime[_0x1c41cc(294)]('A');
        }), scheduleCallback(UserBlockingPriority, () => {
            const _0x5b44f1 = _0x50c4;
            runtime[_0x5b44f1(294)]('B');
        }), runtime[_0x5dbdfa(296)]([_0x5dbdfa(287)]), runtime[_0x5dbdfa(297)](), runtime[_0x5dbdfa(296)]([
            _0x5dbdfa(291),
            'B',
            'A'
        ]);
    }), it(_0x2b158d(304), () => {
        const _0x1b62c9 = _0x2b158d;
        scheduleCallback(NormalPriority, () => {
            const _0x27e73f = _0x50c4;
            runtime[_0x27e73f(294)]('A'), runtime[_0x27e73f(305)](4999);
        }), scheduleCallback(NormalPriority, () => {
            const _0x31ee26 = _0x50c4;
            runtime[_0x31ee26(294)]('B');
        }), runtime['assertLog']([_0x1b62c9(287)]), runtime[_0x1b62c9(297)](), runtime['assertLog']([
            _0x1b62c9(291),
            'A',
            _0x1b62c9(287)
        ]), runtime[_0x1b62c9(297)](), runtime[_0x1b62c9(296)]([
            _0x1b62c9(291),
            'B'
        ]);
    }), it(_0x2b158d(306), () => {
        const _0x266b5e = _0x2b158d, _0x3e4226 = scheduleCallback(NormalPriority, () => {
                const _0x5c0f1d = _0x50c4;
                runtime['log'](_0x5c0f1d(295));
            });
        runtime[_0x266b5e(296)](['Set Immediate']), cancelCallback(_0x3e4226), runtime[_0x266b5e(296)]([]);
    }), it(_0x2b158d(307), () => {
        const _0x3a7908 = _0x2b158d;
        scheduleCallback(NormalPriority, () => {
            const _0xe4b6c5 = _0x50c4;
            runtime[_0xe4b6c5(294)](_0xe4b6c5(308));
            throw Error(_0xe4b6c5(308));
        }), scheduleCallback(NormalPriority, () => {
            const _0x24762b = _0x50c4;
            runtime[_0x24762b(294)]('Yay');
        }), runtime[_0x3a7908(296)]([_0x3a7908(287)]), expect(() => runtime[_0x3a7908(297)]())[_0x3a7908(309)]('Oops!'), runtime[_0x3a7908(296)]([
            _0x3a7908(291),
            'Oops!',
            _0x3a7908(287)
        ]), runtime[_0x3a7908(297)](), runtime[_0x3a7908(296)]([
            _0x3a7908(291),
            _0x3a7908(310)
        ]);
    }), it(_0x2b158d(311), () => {
        const _0x3af585 = _0x2b158d;
        scheduleCallback(NormalPriority, () => {
            runtime['log']('A');
        }), runtime[_0x3af585(296)](['Set Immediate']), runtime['fireSetImmediate'](), runtime[_0x3af585(296)]([
            'setImmediate Callback',
            'A'
        ]), scheduleCallback(NormalPriority, () => {
            const _0x2ff739 = _0x3af585;
            runtime[_0x2ff739(294)]('B');
        }), runtime[_0x3af585(296)]([_0x3af585(287)]), runtime[_0x3af585(297)](), runtime[_0x3af585(296)]([
            _0x3af585(291),
            'B'
        ]);
    }), it(_0x2b158d(312), () => {
        const _0x391a7c = _0x2b158d, _0x357b69 = scheduleCallback(NormalPriority, () => {
                const _0x430215 = _0x50c4;
                runtime[_0x430215(294)]('A');
            });
        runtime['assertLog']([_0x391a7c(287)]), cancelCallback(_0x357b69), runtime[_0x391a7c(297)](), runtime['assertLog']([_0x391a7c(291)]), scheduleCallback(NormalPriority, () => {
            const _0x581027 = _0x391a7c;
            runtime[_0x581027(294)]('B');
        }), runtime['assertLog']([_0x391a7c(287)]), runtime[_0x391a7c(297)](), runtime[_0x391a7c(296)]([
            _0x391a7c(291),
            'B'
        ]);
    });
}), it(_0x2bb4f1(313), () => {
    const _0xa458f4 = _0x2bb4f1;
    jest[_0xa458f4(314)]();
    const _0x1e24ec = global[_0xa458f4(293)];
    try {
        delete global[_0xa458f4(293)], jest['unmock']('scheduler'), expect(() => {
            require('scheduler');
        })[_0xa458f4(315)][_0xa458f4(309)]();
    } finally {
        global['setImmediate'] = _0x1e24ec;
    }
});