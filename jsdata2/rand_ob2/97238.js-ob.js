'use strict';
const _0x2dc6 = [
    'isLogEmpty',
    'setTimeout',
    'MessageChannel',
    'Set\x20Immediate',
    'length',
    'Log\x20is\x20not\x20empty.\x20Call\x20assertLog\x20before\x20continuing.',
    'No\x20setImmediate\x20was\x20scheduled',
    'setImmediate\x20Callback',
    'toEqual',
    'setImmediate',
    'log',
    'Task',
    'assertLog',
    'fireSetImmediate',
    'task\x20that\x20finishes\x20before\x20deadline',
    'task\x20with\x20continuation',
    'unstable_shouldYield',
    'Yield\x20at\x20',
    'now',
    'Continuation',
    'multiple\x20tasks\x20with\x20a\x20yield\x20in\x20between',
    'advanceTime',
    'cancels\x20tasks',
    'throws\x20when\x20a\x20task\x20errors\x20then\x20continues\x20in\x20a\x20new\x20event',
    'Oops!',
    'toThrow',
    'Yay',
    'schedule\x20new\x20task\x20after\x20queue\x20has\x20emptied',
    'schedule\x20new\x20task\x20after\x20a\x20cancellation',
    'does\x20not\x20crash\x20if\x20setImmediate\x20is\x20undefined',
    'resetModules',
    'not',
    '12443zuNxdl',
    '31GzOSOx',
    '725004IlEdIn',
    '283375UKFIby',
    '1wBZFPU',
    '490651jZLRQY',
    '43107xWLkak',
    '5WVroJQ',
    '237960Cmefxh',
    '479ICWQFu',
    '3166LFcbQQ',
    'unmock',
    'scheduler',
    'performance',
    'unstable_scheduleCallback',
    'unstable_NormalPriority',
    'unstable_UserBlockingPriority'
];
function _0x50c4(_0x359b36, _0x3e39dc) {
    return _0x50c4 = function (_0x2dc63a, _0x50c463) {
        _0x2dc63a = _0x2dc63a - 0x10b;
        let _0x52c4cd = _0x2dc6[_0x2dc63a];
        return _0x52c4cd;
    }, _0x50c4(_0x359b36, _0x3e39dc);
}
const _0x2bb4f1 = _0x50c4;
(function (_0x44ca84, _0x27196c) {
    const _0x11f179 = _0x50c4;
    while (!![]) {
        try {
            const _0x3e476e = -parseInt(_0x11f179(0x10b)) * -parseInt(_0x11f179(0x10c)) + parseInt(_0x11f179(0x10d)) + parseInt(_0x11f179(0x10e)) * parseInt(_0x11f179(0x10f)) + parseInt(_0x11f179(0x110)) + -parseInt(_0x11f179(0x111)) * parseInt(_0x11f179(0x112)) + parseInt(_0x11f179(0x113)) + -parseInt(_0x11f179(0x114)) * parseInt(_0x11f179(0x115));
            if (_0x3e476e === _0x27196c)
                break;
            else
                _0x44ca84['push'](_0x44ca84['shift']());
        } catch (_0x559536) {
            _0x44ca84['push'](_0x44ca84['shift']());
        }
    }
}(_0x2dc6, 0x5f612));
let Scheduler, runtime, performance, cancelCallback, scheduleCallback, NormalPriority, UserBlockingPriority;
describe('SchedulerDOMSetImmediate', () => {
    const _0x2b158d = _0x50c4;
    beforeEach(() => {
        const _0x1403a3 = _0x50c4;
        jest['resetModules'](), runtime = _0x2e6187(), jest[_0x1403a3(0x116)](_0x1403a3(0x117)), performance = global[_0x1403a3(0x118)], Scheduler = require(_0x1403a3(0x117)), cancelCallback = Scheduler['unstable_cancelCallback'], scheduleCallback = Scheduler[_0x1403a3(0x119)], NormalPriority = Scheduler[_0x1403a3(0x11a)], UserBlockingPriority = Scheduler[_0x1403a3(0x11b)];
    }), afterEach(() => {
        const _0x40a6ad = _0x50c4;
        delete global['performance'];
        if (!runtime[_0x40a6ad(0x11c)]())
            throw Error('Test\x20exited\x20without\x20clearing\x20log.');
    });
    function _0x2e6187() {
        const _0xc14e2 = _0x50c4;
        let _0x27f3d2 = 0x0, _0x16bccd = [], _0x51a99e = 0x0;
        global[_0xc14e2(0x118)] = {
            'now'() {
                return _0x51a99e;
            }
        }, global[_0xc14e2(0x11d)] = (_0x4b0452, _0x357f3e) => {
            const _0x4c9809 = _0x27f3d2++;
            return _0x45db7f('Set\x20Timer'), _0x4c9809;
        }, global['clearTimeout'] = _0x3deaee => {
        }, global[_0xc14e2(0x11e)] = function () {
            return {
                'port1': {},
                'port2': {
                    'postMessage'() {
                        throw Error('Should\x20be\x20unused');
                    }
                }
            };
        };
        let _0x48d960 = null;
        global['setImmediate'] = function (_0x51ce3d) {
            const _0x1d3e91 = _0xc14e2;
            if (_0x48d960)
                throw Error('Message\x20event\x20already\x20scheduled');
            _0x45db7f(_0x1d3e91(0x11f)), _0x48d960 = _0x51ce3d;
        };
        function _0x17ad47() {
            const _0x3b9fc8 = _0xc14e2;
            if (_0x16bccd[_0x3b9fc8(0x120)] !== 0x0)
                throw Error(_0x3b9fc8(0x121));
        }
        function _0x1c72d2(_0x2bf3c2) {
            _0x51a99e += _0x2bf3c2;
        }
        function _0x217c33() {
            const _0x516d02 = _0xc14e2;
            _0x17ad47();
            if (!_0x48d960)
                throw Error(_0x516d02(0x122));
            const _0x2598bd = _0x48d960;
            _0x48d960 = null, _0x45db7f(_0x516d02(0x123)), _0x2598bd();
        }
        function _0x45db7f(_0x4be052) {
            _0x16bccd['push'](_0x4be052);
        }
        function _0x7c2b07() {
            const _0x259bcf = _0xc14e2;
            return _0x16bccd[_0x259bcf(0x120)] === 0x0;
        }
        function _0xeeb4da(_0x1ae719) {
            const _0x2b118d = _0xc14e2, _0x4ca841 = _0x16bccd;
            _0x16bccd = [], expect(_0x4ca841)[_0x2b118d(0x124)](_0x1ae719);
        }
        return {
            'advanceTime': _0x1c72d2,
            'fireSetImmediate': _0x217c33,
            'log': _0x45db7f,
            'isLogEmpty': _0x7c2b07,
            'assertLog': _0xeeb4da
        };
    }
    it('does\x20not\x20use\x20setImmediate\x20override', () => {
        const _0x55e909 = _0x50c4;
        global[_0x55e909(0x125)] = () => {
            throw new Error('Should\x20not\x20throw');
        }, scheduleCallback(NormalPriority, () => {
            const _0x43b5e4 = _0x55e909;
            runtime[_0x43b5e4(0x126)](_0x43b5e4(0x127));
        }), runtime[_0x55e909(0x128)]([_0x55e909(0x11f)]), runtime[_0x55e909(0x129)](), runtime['assertLog']([
            _0x55e909(0x123),
            'Task'
        ]);
    }), it(_0x2b158d(0x12a), () => {
        const _0x45a445 = _0x2b158d;
        scheduleCallback(NormalPriority, () => {
            const _0x2b323b = _0x50c4;
            runtime['log'](_0x2b323b(0x127));
        }), runtime[_0x45a445(0x128)]([_0x45a445(0x11f)]), runtime[_0x45a445(0x129)](), runtime[_0x45a445(0x128)]([
            _0x45a445(0x123),
            _0x45a445(0x127)
        ]);
    }), it(_0x2b158d(0x12b), () => {
        const _0x51b839 = _0x2b158d;
        scheduleCallback(NormalPriority, () => {
            const _0xf5057b = _0x50c4;
            runtime[_0xf5057b(0x126)](_0xf5057b(0x127));
            while (!Scheduler[_0xf5057b(0x12c)]()) {
                runtime['advanceTime'](0x1);
            }
            return runtime[_0xf5057b(0x126)](_0xf5057b(0x12d) + performance[_0xf5057b(0x12e)]() + 'ms'), () => {
                const _0x2c5d01 = _0xf5057b;
                runtime['log'](_0x2c5d01(0x12f));
            };
        }), runtime[_0x51b839(0x128)]([_0x51b839(0x11f)]), runtime[_0x51b839(0x129)](), runtime[_0x51b839(0x128)]([
            _0x51b839(0x123),
            _0x51b839(0x127),
            'Yield\x20at\x205ms',
            _0x51b839(0x11f)
        ]), runtime['fireSetImmediate'](), runtime[_0x51b839(0x128)]([
            _0x51b839(0x123),
            _0x51b839(0x12f)
        ]);
    }), it('multiple\x20tasks', () => {
        const _0x3dabef = _0x2b158d;
        scheduleCallback(NormalPriority, () => {
            const _0x32dabd = _0x50c4;
            runtime[_0x32dabd(0x126)]('A');
        }), scheduleCallback(NormalPriority, () => {
            const _0x54f959 = _0x50c4;
            runtime[_0x54f959(0x126)]('B');
        }), runtime[_0x3dabef(0x128)]([_0x3dabef(0x11f)]), runtime[_0x3dabef(0x129)](), runtime[_0x3dabef(0x128)]([
            'setImmediate\x20Callback',
            'A',
            'B'
        ]);
    }), it('multiple\x20tasks\x20at\x20different\x20priority', () => {
        const _0x5dbdfa = _0x2b158d;
        scheduleCallback(NormalPriority, () => {
            const _0x1c41cc = _0x50c4;
            runtime[_0x1c41cc(0x126)]('A');
        }), scheduleCallback(UserBlockingPriority, () => {
            const _0x5b44f1 = _0x50c4;
            runtime[_0x5b44f1(0x126)]('B');
        }), runtime[_0x5dbdfa(0x128)]([_0x5dbdfa(0x11f)]), runtime[_0x5dbdfa(0x129)](), runtime[_0x5dbdfa(0x128)]([
            _0x5dbdfa(0x123),
            'B',
            'A'
        ]);
    }), it(_0x2b158d(0x130), () => {
        const _0x1b62c9 = _0x2b158d;
        scheduleCallback(NormalPriority, () => {
            const _0x27e73f = _0x50c4;
            runtime[_0x27e73f(0x126)]('A'), runtime[_0x27e73f(0x131)](0x1387);
        }), scheduleCallback(NormalPriority, () => {
            const _0x31ee26 = _0x50c4;
            runtime[_0x31ee26(0x126)]('B');
        }), runtime['assertLog']([_0x1b62c9(0x11f)]), runtime[_0x1b62c9(0x129)](), runtime['assertLog']([
            _0x1b62c9(0x123),
            'A',
            _0x1b62c9(0x11f)
        ]), runtime[_0x1b62c9(0x129)](), runtime[_0x1b62c9(0x128)]([
            _0x1b62c9(0x123),
            'B'
        ]);
    }), it(_0x2b158d(0x132), () => {
        const _0x266b5e = _0x2b158d, _0x3e4226 = scheduleCallback(NormalPriority, () => {
                const _0x5c0f1d = _0x50c4;
                runtime['log'](_0x5c0f1d(0x127));
            });
        runtime[_0x266b5e(0x128)](['Set\x20Immediate']), cancelCallback(_0x3e4226), runtime[_0x266b5e(0x128)]([]);
    }), it(_0x2b158d(0x133), () => {
        const _0x3a7908 = _0x2b158d;
        scheduleCallback(NormalPriority, () => {
            const _0xe4b6c5 = _0x50c4;
            runtime[_0xe4b6c5(0x126)](_0xe4b6c5(0x134));
            throw Error(_0xe4b6c5(0x134));
        }), scheduleCallback(NormalPriority, () => {
            const _0x24762b = _0x50c4;
            runtime[_0x24762b(0x126)]('Yay');
        }), runtime[_0x3a7908(0x128)]([_0x3a7908(0x11f)]), expect(() => runtime[_0x3a7908(0x129)]())[_0x3a7908(0x135)]('Oops!'), runtime[_0x3a7908(0x128)]([
            _0x3a7908(0x123),
            'Oops!',
            _0x3a7908(0x11f)
        ]), runtime[_0x3a7908(0x129)](), runtime[_0x3a7908(0x128)]([
            _0x3a7908(0x123),
            _0x3a7908(0x136)
        ]);
    }), it(_0x2b158d(0x137), () => {
        const _0x3af585 = _0x2b158d;
        scheduleCallback(NormalPriority, () => {
            runtime['log']('A');
        }), runtime[_0x3af585(0x128)](['Set\x20Immediate']), runtime['fireSetImmediate'](), runtime[_0x3af585(0x128)]([
            'setImmediate\x20Callback',
            'A'
        ]), scheduleCallback(NormalPriority, () => {
            const _0x2ff739 = _0x3af585;
            runtime[_0x2ff739(0x126)]('B');
        }), runtime[_0x3af585(0x128)]([_0x3af585(0x11f)]), runtime[_0x3af585(0x129)](), runtime[_0x3af585(0x128)]([
            _0x3af585(0x123),
            'B'
        ]);
    }), it(_0x2b158d(0x138), () => {
        const _0x391a7c = _0x2b158d, _0x357b69 = scheduleCallback(NormalPriority, () => {
                const _0x430215 = _0x50c4;
                runtime[_0x430215(0x126)]('A');
            });
        runtime['assertLog']([_0x391a7c(0x11f)]), cancelCallback(_0x357b69), runtime[_0x391a7c(0x129)](), runtime['assertLog']([_0x391a7c(0x123)]), scheduleCallback(NormalPriority, () => {
            const _0x581027 = _0x391a7c;
            runtime[_0x581027(0x126)]('B');
        }), runtime['assertLog']([_0x391a7c(0x11f)]), runtime[_0x391a7c(0x129)](), runtime[_0x391a7c(0x128)]([
            _0x391a7c(0x123),
            'B'
        ]);
    });
}), it(_0x2bb4f1(0x139), () => {
    const _0xa458f4 = _0x2bb4f1;
    jest[_0xa458f4(0x13a)]();
    const _0x1e24ec = global[_0xa458f4(0x125)];
    try {
        delete global[_0xa458f4(0x125)], jest['unmock']('scheduler'), expect(() => {
            require('scheduler');
        })[_0xa458f4(0x13b)][_0xa458f4(0x135)]();
    } finally {
        global['setImmediate'] = _0x1e24ec;
    }
});
