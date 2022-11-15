'use strict';
const _0x16cc = [
    'oSYhG',
    'log',
    'Qacss',
    'assertLog',
    'LwBxj',
    'task\x20that\x20finishes\x20before\x20deadline',
    'rwHFK',
    'fireSetImmediate',
    'JFIGE',
    'uPhKS',
    'BXVAb',
    'eGoWb',
    'vKaYG',
    'unstable_shouldYield',
    'advanceTime',
    'Yield\x20at\x20',
    'JgCTv',
    'Task',
    'mCCtT',
    'LkBwl',
    'GKpFj',
    '2|4|3|0|1',
    'EHGbX',
    'LDAbH',
    'jECGZ',
    'split',
    'QLgpP',
    'xmFBm',
    'throws\x20when\x20a\x20task\x20errors\x20then\x20continues\x20in\x20a\x20new\x20event',
    'CERSI',
    'Xcxin',
    'VgVPN',
    'TdtCa',
    'lOukm',
    'toThrow',
    'KeZFy',
    'lKOSD',
    'XBhKB',
    'cBdXG',
    'does\x20not\x20crash\x20if\x20setImmediate\x20is\x20undefined',
    'pZAiW',
    'wdxrL',
    'DlsSi',
    'not',
    '2FkOAHy',
    '200723rHpPsf',
    '144560Hxyswf',
    '504229pITpYd',
    '1OlhpxM',
    '274210mTnplJ',
    '43826mJKuxp',
    '6GSuQKA',
    '89006YaMPdb',
    '2JhjLYc',
    '990426kCNOML',
    'SchedulerDOMSetImmediate',
    'scheduler',
    'Test\x20exited\x20without\x20clearing\x20log.',
    'Message\x20event\x20already\x20scheduled',
    'Set\x20Immediate',
    'setImmediate\x20Callback',
    'Should\x20not\x20throw',
    'Continuation',
    '3|4|0|2|1',
    'Yay',
    'task\x20with\x20continuation',
    'multiple\x20tasks',
    'multiple\x20tasks\x20with\x20a\x20yield\x20in\x20between',
    'cancels\x20tasks',
    'vYJnB',
    'resetModules',
    'unmock',
    'performance',
    'GfhNY',
    'unstable_scheduleCallback',
    'unstable_UserBlockingPriority',
    'uLsny',
    'isLogEmpty',
    'MPjew',
    'tKaJk',
    'CKMrD',
    'yCxkj',
    'Set\x20Timer',
    'clearTimeout',
    'MessageChannel',
    'pPQBq',
    'XxgDk',
    'yhPsK',
    'length',
    'Log\x20is\x20not\x20empty.\x20Call\x20assertLog\x20before\x20continuing.',
    'No\x20setImmediate\x20was\x20scheduled',
    'Zvgwi',
    'rziGY',
    'push',
    'toEqual',
    'Qtzfb',
    'does\x20not\x20use\x20setImmediate\x20override',
    'setImmediate'
];
const _0xfac560 = _0x28bd;
(function (_0x327f6a, _0xd9221) {
    const _0x166875 = _0x28bd;
    while (!![]) {
        try {
            const _0x56e67b = -parseInt(_0x166875(0xe7)) * -parseInt(_0x166875(0xe8)) + parseInt(_0x166875(0xe9)) + -parseInt(_0x166875(0xea)) * parseInt(_0x166875(0xeb)) + -parseInt(_0x166875(0xec)) + parseInt(_0x166875(0xed)) * -parseInt(_0x166875(0xee)) + -parseInt(_0x166875(0xef)) * parseInt(_0x166875(0xf0)) + parseInt(_0x166875(0xf1));
            if (_0x56e67b === _0xd9221)
                break;
            else
                _0x327f6a['push'](_0x327f6a['shift']());
        } catch (_0x5a2a9c) {
            _0x327f6a['push'](_0x327f6a['shift']());
        }
    }
}(_0x16cc, -0x1b * -0xfad + 0x13e73 + 0x1f0af));
let Scheduler, runtime, performance, cancelCallback, scheduleCallback, NormalPriority, UserBlockingPriority;
function _0x28bd(_0x635097, _0x5370fa) {
    return _0x28bd = function (_0x295717, _0x4b6b13) {
        _0x295717 = _0x295717 - (0x2639 + -0x16d5 + -0xe7d * 0x1);
        let _0x5bb39e = _0x16cc[_0x295717];
        return _0x5bb39e;
    }, _0x28bd(_0x635097, _0x5370fa);
}
describe(_0xfac560(0xf2), () => {
    const _0x5608f9 = _0xfac560, _0x4a6a18 = {
            'GfhNY': _0x5608f9(0xf3),
            'MPjew': function (_0x14e2d4, _0x21ca49) {
                return _0x14e2d4(_0x21ca49);
            },
            'tKaJk': _0x5608f9(0xf4),
            'jmvlH': function (_0x8e0c86, _0x1cff52) {
                return _0x8e0c86 !== _0x1cff52;
            },
            'CKMrD': _0x5608f9(0xf5),
            'yCxkj': _0x5608f9(0xf6),
            'LwBxj': _0x5608f9(0xf7),
            'QvKte': _0x5608f9(0xf8),
            'rwHFK': 'Task',
            'oSYhG': function (_0x8f76eb, _0xf81d3b, _0x4d5433) {
                return _0x8f76eb(_0xf81d3b, _0x4d5433);
            },
            'LkBwl': _0x5608f9(0xf9),
            'BXVAb': function (_0x26fd84, _0x14c4e7, _0x2b2baa) {
                return _0x26fd84(_0x14c4e7, _0x2b2baa);
            },
            'mCCtT': 'Yield\x20at\x205ms',
            'jECGZ': _0x5608f9(0xfa),
            'xmFBm': function (_0x2c3039, _0x119515, _0x3bf8b0) {
                return _0x2c3039(_0x119515, _0x3bf8b0);
            },
            'CERSI': 'Oops!',
            'vYJnB': function (_0x5d2fdd, _0x22ed99) {
                return _0x5d2fdd(_0x22ed99);
            },
            'Xcxin': function (_0x1aaf2c, _0x204f91, _0x4e6634) {
                return _0x1aaf2c(_0x204f91, _0x4e6634);
            },
            'lOukm': function (_0x392da2, _0x423b22, _0x1f5d8e) {
                return _0x392da2(_0x423b22, _0x1f5d8e);
            },
            'KeZFy': _0x5608f9(0xfb),
            'ryokY': function (_0x1058ed, _0x479689, _0x40f9ac) {
                return _0x1058ed(_0x479689, _0x40f9ac);
            },
            'Qtzfb': function (_0x24c472, _0x35f980, _0x47dab9) {
                return _0x24c472(_0x35f980, _0x47dab9);
            },
            'uLsny': function (_0x2ec9d5, _0x1166c4) {
                return _0x2ec9d5(_0x1166c4);
            },
            'JFIGE': function (_0x4db81e, _0x4e06b4, _0x4d1454) {
                return _0x4db81e(_0x4e06b4, _0x4d1454);
            },
            'uPhKS': _0x5608f9(0xfc),
            'EHGbX': function (_0x5c8b96, _0x232a7c, _0x2760c0) {
                return _0x5c8b96(_0x232a7c, _0x2760c0);
            },
            'GKpFj': _0x5608f9(0xfd),
            'LDAbH': 'multiple\x20tasks\x20at\x20different\x20priority',
            'QLgpP': _0x5608f9(0xfe),
            'lKOSD': function (_0x35c343, _0x5b3616, _0x5225fe) {
                return _0x35c343(_0x5b3616, _0x5225fe);
            },
            'zqTtX': _0x5608f9(0xff),
            'jDlLd': 'schedule\x20new\x20task\x20after\x20queue\x20has\x20emptied',
            'XBhKB': function (_0xed030, _0x5a0a66, _0x124e1e) {
                return _0xed030(_0x5a0a66, _0x124e1e);
            },
            'cBdXG': 'schedule\x20new\x20task\x20after\x20a\x20cancellation'
        };
    _0x4a6a18[_0x5608f9(0x100)](beforeEach, () => {
        const _0x269f2f = _0x5608f9;
        jest[_0x269f2f(0x101)](), runtime = _0x11f77c(), jest[_0x269f2f(0x102)](_0x269f2f(0xf3)), performance = global[_0x269f2f(0x103)], Scheduler = require(_0x4a6a18[_0x269f2f(0x104)]), cancelCallback = Scheduler['unstable_cancelCallback'], scheduleCallback = Scheduler[_0x269f2f(0x105)], NormalPriority = Scheduler['unstable_NormalPriority'], UserBlockingPriority = Scheduler[_0x269f2f(0x106)];
    }), _0x4a6a18[_0x5608f9(0x107)](afterEach, () => {
        const _0x346075 = _0x5608f9;
        delete global[_0x346075(0x103)];
        if (!runtime[_0x346075(0x108)]())
            throw _0x4a6a18[_0x346075(0x109)](Error, _0x4a6a18[_0x346075(0x10a)]);
    });
    function _0x11f77c() {
        const _0x4e9fdd = _0x5608f9, _0x396997 = {
                'McEEr': function (_0x513530, _0x248ad2) {
                    return _0x513530(_0x248ad2);
                },
                'XxgDk': _0x4a6a18[_0x4e9fdd(0x10b)],
                'yhPsK': _0x4a6a18[_0x4e9fdd(0x10c)],
                'Zvgwi': function (_0x4aaf68, _0x32380b) {
                    return _0x4a6a18['MPjew'](_0x4aaf68, _0x32380b);
                },
                'rziGY': _0x4a6a18['LwBxj'],
                'HpPQY': function (_0x4812c5) {
                    return _0x4812c5();
                }
            };
        let _0x1dbec1 = 0x2ef * 0x9 + -0x1803 * -0x1 + 0x36 * -0xef, _0x3b3649 = [], _0x4bea6f = 0x132 + -0x133 + 0x1;
        global[_0x4e9fdd(0x103)] = {
            'now'() {
                return _0x4bea6f;
            }
        }, global['setTimeout'] = (_0x5835ff, _0x44c27a) => {
            const _0x28db5d = _0x4e9fdd, _0x1ce84d = _0x1dbec1++;
            return _0x5b2cfe(_0x28db5d(0x10d)), _0x1ce84d;
        }, global[_0x4e9fdd(0x10e)] = _0x1e84fb => {
        }, global[_0x4e9fdd(0x10f)] = function () {
            const _0x1f5b4b = { 'pPQBq': 'Should\x20be\x20unused' };
            return {
                'port1': {},
                'port2': {
                    'postMessage'() {
                        const _0x42eb36 = _0x28bd;
                        throw Error(_0x1f5b4b[_0x42eb36(0x110)]);
                    }
                }
            };
        };
        let _0x3273f0 = null;
        global['setImmediate'] = function (_0x228bfa) {
            const _0x33b40c = _0x4e9fdd;
            if (_0x3273f0)
                throw _0x396997['McEEr'](Error, _0x396997[_0x33b40c(0x111)]);
            _0x5b2cfe(_0x396997[_0x33b40c(0x112)]), _0x3273f0 = _0x228bfa;
        };
        function _0x966950() {
            const _0x1394e1 = _0x4e9fdd;
            if (_0x4a6a18['jmvlH'](_0x3b3649[_0x1394e1(0x113)], 0x1a26 + 0x34 + -0xd2d * 0x2))
                throw Error(_0x1394e1(0x114));
        }
        function _0x10310e(_0x2dd07a) {
            _0x4bea6f += _0x2dd07a;
        }
        function _0x511ecc() {
            const _0x185bca = _0x4e9fdd;
            _0x966950();
            if (!_0x3273f0)
                throw Error(_0x185bca(0x115));
            const _0x1e0ba6 = _0x3273f0;
            _0x3273f0 = null, _0x396997[_0x185bca(0x116)](_0x5b2cfe, _0x396997[_0x185bca(0x117)]), _0x396997['HpPQY'](_0x1e0ba6);
        }
        function _0x5b2cfe(_0x1dac54) {
            const _0x216dd5 = _0x4e9fdd;
            _0x3b3649[_0x216dd5(0x118)](_0x1dac54);
        }
        function _0x4cef01() {
            return _0x3b3649['length'] === 0xb37 + 0x5e5 * 0x3 + 0x36 * -0x89;
        }
        function _0x291e57(_0x4f3853) {
            const _0x3e8e72 = _0x4e9fdd, _0x1f6650 = _0x3b3649;
            _0x3b3649 = [], _0x4a6a18[_0x3e8e72(0x109)](expect, _0x1f6650)[_0x3e8e72(0x119)](_0x4f3853);
        }
        return {
            'advanceTime': _0x10310e,
            'fireSetImmediate': _0x511ecc,
            'log': _0x5b2cfe,
            'isLogEmpty': _0x4cef01,
            'assertLog': _0x291e57
        };
    }
    _0x4a6a18[_0x5608f9(0x11a)](it, _0x5608f9(0x11b), () => {
        const _0x3de2fc = _0x5608f9, _0x4c4413 = {
                'umqvi': _0x4a6a18['QvKte'],
                'Qacss': _0x4a6a18['rwHFK']
            };
        global[_0x3de2fc(0x11c)] = () => {
            throw new Error(_0x4c4413['umqvi']);
        }, _0x4a6a18[_0x3de2fc(0x11d)](scheduleCallback, NormalPriority, () => {
            const _0x704d10 = _0x3de2fc;
            runtime[_0x704d10(0x11e)](_0x4c4413[_0x704d10(0x11f)]);
        }), runtime[_0x3de2fc(0x120)]([_0x4a6a18[_0x3de2fc(0x10c)]]), runtime['fireSetImmediate'](), runtime['assertLog']([
            _0x4a6a18[_0x3de2fc(0x121)],
            'Task'
        ]);
    }), _0x4a6a18[_0x5608f9(0x11a)](it, _0x5608f9(0x122), () => {
        const _0x5eaef3 = _0x5608f9, _0x5cd99c = { 'onOfE': _0x4a6a18[_0x5eaef3(0x123)] };
        _0x4a6a18[_0x5eaef3(0x11d)](scheduleCallback, NormalPriority, () => {
            const _0x53260e = _0x5eaef3;
            runtime[_0x53260e(0x11e)](_0x5cd99c['onOfE']);
        }), runtime[_0x5eaef3(0x120)]([_0x4a6a18['yCxkj']]), runtime[_0x5eaef3(0x124)](), runtime[_0x5eaef3(0x120)]([
            'setImmediate\x20Callback',
            _0x4a6a18['rwHFK']
        ]);
    }), _0x4a6a18[_0x5608f9(0x125)](it, _0x4a6a18[_0x5608f9(0x126)], () => {
        const _0x4e4ab8 = _0x5608f9, _0x3d0b8b = {
                'eGoWb': _0x4a6a18['LkBwl'],
                'vKaYG': _0x4a6a18[_0x4e4ab8(0x123)]
            };
        _0x4a6a18[_0x4e4ab8(0x127)](scheduleCallback, NormalPriority, () => {
            const _0x51322c = _0x4e4ab8, _0x2a4364 = { 'JgCTv': _0x3d0b8b[_0x51322c(0x128)] };
            runtime['log'](_0x3d0b8b[_0x51322c(0x129)]);
            while (!Scheduler[_0x51322c(0x12a)]()) {
                runtime[_0x51322c(0x12b)](0x110b * 0x1 + -0x221d * 0x1 + -0x8d * -0x1f);
            }
            return runtime[_0x51322c(0x11e)](_0x51322c(0x12c) + performance['now']() + 'ms'), () => {
                const _0xa5530f = _0x51322c;
                runtime[_0xa5530f(0x11e)](_0x2a4364[_0xa5530f(0x12d)]);
            };
        }), runtime['assertLog']([_0x4a6a18[_0x4e4ab8(0x10c)]]), runtime[_0x4e4ab8(0x124)](), runtime[_0x4e4ab8(0x120)]([
            _0x4a6a18[_0x4e4ab8(0x121)],
            _0x4e4ab8(0x12e),
            _0x4a6a18[_0x4e4ab8(0x12f)],
            _0x4a6a18[_0x4e4ab8(0x10c)]
        ]), runtime[_0x4e4ab8(0x124)](), runtime[_0x4e4ab8(0x120)]([
            _0x4a6a18[_0x4e4ab8(0x121)],
            _0x4a6a18[_0x4e4ab8(0x130)]
        ]);
    }), _0x4a6a18['EHGbX'](it, _0x4a6a18[_0x5608f9(0x131)], () => {
        const _0x14cdcd = _0x5608f9, _0x1173ce = _0x14cdcd(0x132)['split']('|');
        let _0x268fdf = -0x32 * 0x16 + 0x1f * 0x31 + -0x1a3;
        while (!![]) {
            switch (_0x1173ce[_0x268fdf++]) {
            case '0':
                runtime[_0x14cdcd(0x124)]();
                continue;
            case '1':
                runtime[_0x14cdcd(0x120)]([
                    _0x4a6a18['LwBxj'],
                    'A',
                    'B'
                ]);
                continue;
            case '2':
                scheduleCallback(NormalPriority, () => {
                    const _0x5ad2d2 = _0x14cdcd;
                    runtime[_0x5ad2d2(0x11e)]('A');
                });
                continue;
            case '3':
                runtime[_0x14cdcd(0x120)]([_0x4a6a18[_0x14cdcd(0x10c)]]);
                continue;
            case '4':
                _0x4a6a18[_0x14cdcd(0x127)](scheduleCallback, NormalPriority, () => {
                    const _0x5f5d45 = _0x14cdcd;
                    runtime[_0x5f5d45(0x11e)]('B');
                });
                continue;
            }
            break;
        }
    }), _0x4a6a18[_0x5608f9(0x133)](it, _0x4a6a18[_0x5608f9(0x134)], () => {
        const _0x5e43f5 = _0x5608f9, _0x34bbdc = _0x4a6a18[_0x5e43f5(0x135)][_0x5e43f5(0x136)]('|');
        let _0x714bab = -0x675 + 0x1f16 * -0x1 + 0x258b;
        while (!![]) {
            switch (_0x34bbdc[_0x714bab++]) {
            case '0':
                runtime[_0x5e43f5(0x120)]([_0x5e43f5(0xf6)]);
                continue;
            case '1':
                runtime[_0x5e43f5(0x120)]([
                    _0x4a6a18[_0x5e43f5(0x121)],
                    'B',
                    'A'
                ]);
                continue;
            case '2':
                runtime[_0x5e43f5(0x124)]();
                continue;
            case '3':
                _0x4a6a18[_0x5e43f5(0x127)](scheduleCallback, NormalPriority, () => {
                    const _0x3df311 = _0x5e43f5;
                    runtime[_0x3df311(0x11e)]('A');
                });
                continue;
            case '4':
                _0x4a6a18[_0x5e43f5(0x127)](scheduleCallback, UserBlockingPriority, () => {
                    const _0x2ccc6c = _0x5e43f5;
                    runtime[_0x2ccc6c(0x11e)]('B');
                });
                continue;
            }
            break;
        }
    }), it(_0x4a6a18[_0x5608f9(0x137)], () => {
        const _0x48f153 = _0x5608f9;
        scheduleCallback(NormalPriority, () => {
            const _0xef6020 = _0x28bd;
            runtime[_0xef6020(0x11e)]('A'), runtime['advanceTime'](-0x468 + 0xb0c + 0xce3);
        }), _0x4a6a18[_0x48f153(0x138)](scheduleCallback, NormalPriority, () => {
            const _0x80b47e = _0x48f153;
            runtime[_0x80b47e(0x11e)]('B');
        }), runtime[_0x48f153(0x120)]([_0x4a6a18[_0x48f153(0x10c)]]), runtime[_0x48f153(0x124)](), runtime['assertLog']([
            _0x4a6a18[_0x48f153(0x121)],
            'A',
            _0x4a6a18[_0x48f153(0x10c)]
        ]), runtime[_0x48f153(0x124)](), runtime['assertLog']([
            _0x4a6a18[_0x48f153(0x121)],
            'B'
        ]);
    }), _0x4a6a18['lKOSD'](it, _0x4a6a18['zqTtX'], () => {
        const _0x5c844d = _0x5608f9, _0x4aafe2 = { 'QkBdV': _0x4a6a18[_0x5c844d(0x123)] }, _0x118285 = _0x4a6a18['xmFBm'](scheduleCallback, NormalPriority, () => {
                runtime['log'](_0x4aafe2['QkBdV']);
            });
        runtime[_0x5c844d(0x120)]([_0x4a6a18['yCxkj']]), cancelCallback(_0x118285), runtime[_0x5c844d(0x120)]([]);
    }), _0x4a6a18['lKOSD'](it, _0x5608f9(0x139), () => {
        const _0x1e9983 = _0x5608f9, _0x14a6f5 = {
                'TdtCa': _0x4a6a18[_0x1e9983(0x13a)],
                'VgVPN': function (_0x49b097, _0x271954) {
                    const _0x424cd9 = _0x1e9983;
                    return _0x4a6a18[_0x424cd9(0x100)](_0x49b097, _0x271954);
                }
            };
        _0x4a6a18[_0x1e9983(0x13b)](scheduleCallback, NormalPriority, () => {
            const _0x457d07 = _0x1e9983;
            runtime[_0x457d07(0x11e)](_0x14a6f5['TdtCa']);
            throw _0x14a6f5[_0x457d07(0x13c)](Error, _0x14a6f5[_0x457d07(0x13d)]);
        }), _0x4a6a18[_0x1e9983(0x13e)](scheduleCallback, NormalPriority, () => {
            const _0xf8a471 = _0x1e9983;
            runtime[_0xf8a471(0x11e)](_0xf8a471(0xfb));
        }), runtime[_0x1e9983(0x120)]([_0x4a6a18['yCxkj']]), _0x4a6a18[_0x1e9983(0x100)](expect, () => runtime[_0x1e9983(0x124)]())[_0x1e9983(0x13f)]('Oops!'), runtime[_0x1e9983(0x120)]([
            _0x4a6a18['LwBxj'],
            _0x4a6a18['CERSI'],
            _0x1e9983(0xf6)
        ]), runtime[_0x1e9983(0x124)](), runtime[_0x1e9983(0x120)]([
            _0x4a6a18[_0x1e9983(0x121)],
            _0x4a6a18[_0x1e9983(0x140)]
        ]);
    }), _0x4a6a18[_0x5608f9(0x141)](it, _0x4a6a18['jDlLd'], () => {
        const _0x3b951e = _0x5608f9, _0x1942e2 = '1|2|6|0|3|4|7|5'[_0x3b951e(0x136)]('|');
        let _0x4c1856 = 0x26df + 0xc2f * -0x2 + -0xe81;
        while (!![]) {
            switch (_0x1942e2[_0x4c1856++]) {
            case '0':
                runtime['assertLog']([
                    _0x4a6a18[_0x3b951e(0x121)],
                    'A'
                ]);
                continue;
            case '1':
                _0x4a6a18[_0x3b951e(0x13e)](scheduleCallback, NormalPriority, () => {
                    const _0x554255 = _0x3b951e;
                    runtime[_0x554255(0x11e)]('A');
                });
                continue;
            case '2':
                runtime[_0x3b951e(0x120)]([_0x4a6a18['yCxkj']]);
                continue;
            case '3':
                _0x4a6a18['ryokY'](scheduleCallback, NormalPriority, () => {
                    const _0x490d31 = _0x3b951e;
                    runtime[_0x490d31(0x11e)]('B');
                });
                continue;
            case '4':
                runtime[_0x3b951e(0x120)]([_0x4a6a18[_0x3b951e(0x10c)]]);
                continue;
            case '5':
                runtime['assertLog']([
                    _0x3b951e(0xf7),
                    'B'
                ]);
                continue;
            case '6':
                runtime[_0x3b951e(0x124)]();
                continue;
            case '7':
                runtime['fireSetImmediate']();
                continue;
            }
            break;
        }
    }), _0x4a6a18[_0x5608f9(0x142)](it, _0x4a6a18[_0x5608f9(0x143)], () => {
        const _0x12ec53 = _0x5608f9, _0x356274 = _0x4a6a18[_0x12ec53(0x11a)](scheduleCallback, NormalPriority, () => {
                const _0x11b84e = _0x12ec53;
                runtime[_0x11b84e(0x11e)]('A');
            });
        runtime[_0x12ec53(0x120)]([_0x4a6a18[_0x12ec53(0x10c)]]), _0x4a6a18[_0x12ec53(0x100)](cancelCallback, _0x356274), runtime['fireSetImmediate'](), runtime[_0x12ec53(0x120)]([_0x12ec53(0xf7)]), scheduleCallback(NormalPriority, () => {
            runtime['log']('B');
        }), runtime[_0x12ec53(0x120)]([_0x12ec53(0xf6)]), runtime[_0x12ec53(0x124)](), runtime[_0x12ec53(0x120)]([
            _0x4a6a18[_0x12ec53(0x121)],
            'B'
        ]);
    });
}), it(_0xfac560(0x144), () => {
    const _0x585a69 = _0xfac560, _0x4a3f03 = {
            'wdxrL': function (_0x4b4fdc, _0x1680ae) {
                return _0x4b4fdc(_0x1680ae);
            },
            'DlsSi': _0x585a69(0xf3),
            'pZAiW': function (_0x45f09f, _0x48d53e) {
                return _0x45f09f(_0x48d53e);
            }
        };
    jest[_0x585a69(0x101)]();
    const _0x442cc6 = global['setImmediate'];
    try {
        delete global[_0x585a69(0x11c)], jest[_0x585a69(0x102)](_0x585a69(0xf3)), _0x4a3f03[_0x585a69(0x145)](expect, () => {
            const _0x3cee0e = _0x585a69;
            _0x4a3f03[_0x3cee0e(0x146)](require, _0x4a3f03[_0x3cee0e(0x147)]);
        })[_0x585a69(0x148)][_0x585a69(0x13f)]();
    } finally {
        global[_0x585a69(0x11c)] = _0x442cc6;
    }
});
