let Scheduler, runtime, performance, cancelCallback, scheduleCallback, NormalPriority, UserBlockingPriority;
function _0x28bd(_0x635097, _0x5370fa) {
    return _0x28bd = function (_0x295717, _0x4b6b13) {
        _0x295717 = _0x295717 - (9785 + -5845 + -3709 * 1);
        let _0x5bb39e = _0x16cc[_0x295717];
        return _0x5bb39e;
    }, _0x28bd(_0x635097, _0x5370fa);
}
describe(_0xfac560(242), () => {
    const _0x5608f9 = _0xfac560, _0x4a6a18 = {
            'GfhNY': _0x5608f9(243),
            'MPjew': function (_0x14e2d4, _0x21ca49) {
                return _0x14e2d4(_0x21ca49);
            },
            'tKaJk': _0x5608f9(244),
            'jmvlH': function (_0x8e0c86, _0x1cff52) {
                return _0x8e0c86 !== _0x1cff52;
            },
            'CKMrD': _0x5608f9(245),
            'yCxkj': _0x5608f9(246),
            'LwBxj': _0x5608f9(247),
            'QvKte': _0x5608f9(248),
            'rwHFK': 'Task',
            'oSYhG': function (_0x8f76eb, _0xf81d3b, _0x4d5433) {
                return _0x8f76eb(_0xf81d3b, _0x4d5433);
            },
            'LkBwl': _0x5608f9(249),
            'BXVAb': function (_0x26fd84, _0x14c4e7, _0x2b2baa) {
                return _0x26fd84(_0x14c4e7, _0x2b2baa);
            },
            'mCCtT': 'Yield at 5ms',
            'jECGZ': _0x5608f9(250),
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
            'KeZFy': _0x5608f9(251),
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
            'uPhKS': _0x5608f9(252),
            'EHGbX': function (_0x5c8b96, _0x232a7c, _0x2760c0) {
                return _0x5c8b96(_0x232a7c, _0x2760c0);
            },
            'GKpFj': _0x5608f9(253),
            'LDAbH': 'multiple tasks at different priority',
            'QLgpP': _0x5608f9(254),
            'lKOSD': function (_0x35c343, _0x5b3616, _0x5225fe) {
                return _0x35c343(_0x5b3616, _0x5225fe);
            },
            'zqTtX': _0x5608f9(255),
            'jDlLd': 'schedule new task after queue has emptied',
            'XBhKB': function (_0xed030, _0x5a0a66, _0x124e1e) {
                return _0xed030(_0x5a0a66, _0x124e1e);
            },
            'cBdXG': 'schedule new task after a cancellation'
        };
    _0x4a6a18[_0x5608f9(256)](beforeEach, () => {
        const _0x269f2f = _0x5608f9;
        jest[_0x269f2f(257)](), runtime = _0x11f77c(), jest[_0x269f2f(258)](_0x269f2f(243)), performance = global[_0x269f2f(259)], Scheduler = require(_0x4a6a18[_0x269f2f(260)]), cancelCallback = Scheduler['unstable_cancelCallback'], scheduleCallback = Scheduler[_0x269f2f(261)], NormalPriority = Scheduler['unstable_NormalPriority'], UserBlockingPriority = Scheduler[_0x269f2f(262)];
    }), _0x4a6a18[_0x5608f9(263)](afterEach, () => {
        const _0x346075 = _0x5608f9;
        delete global[_0x346075(259)];
        if (!runtime[_0x346075(264)]())
            throw _0x4a6a18[_0x346075(265)](Error, _0x4a6a18[_0x346075(266)]);
    });
    function _0x11f77c() {
        const _0x4e9fdd = _0x5608f9, _0x396997 = {
                'McEEr': function (_0x513530, _0x248ad2) {
                    return _0x513530(_0x248ad2);
                },
                'XxgDk': _0x4a6a18[_0x4e9fdd(267)],
                'yhPsK': _0x4a6a18[_0x4e9fdd(268)],
                'Zvgwi': function (_0x4aaf68, _0x32380b) {
                    return _0x4a6a18['MPjew'](_0x4aaf68, _0x32380b);
                },
                'rziGY': _0x4a6a18['LwBxj'],
                'HpPQY': function (_0x4812c5) {
                    return _0x4812c5();
                }
            };
        let _0x1dbec1 = 751 * 9 + -6147 * -1 + 54 * -239, _0x3b3649 = [], _0x4bea6f = 306 + -307 + 1;
        global[_0x4e9fdd(259)] = {
            'now'() {
                return _0x4bea6f;
            }
        }, global['setTimeout'] = (_0x5835ff, _0x44c27a) => {
            const _0x28db5d = _0x4e9fdd, _0x1ce84d = _0x1dbec1++;
            return _0x5b2cfe(_0x28db5d(269)), _0x1ce84d;
        }, global[_0x4e9fdd(270)] = _0x1e84fb => {
        }, global[_0x4e9fdd(271)] = function () {
            const _0x1f5b4b = { 'pPQBq': 'Should be unused' };
            return {
                'port1': {},
                'port2': {
                    'postMessage'() {
                        const _0x42eb36 = _0x28bd;
                        throw Error(_0x1f5b4b[_0x42eb36(272)]);
                    }
                }
            };
        };
        let _0x3273f0 = null;
        global['setImmediate'] = function (_0x228bfa) {
            const _0x33b40c = _0x4e9fdd;
            if (_0x3273f0)
                throw _0x396997['McEEr'](Error, _0x396997[_0x33b40c(273)]);
            _0x5b2cfe(_0x396997[_0x33b40c(274)]), _0x3273f0 = _0x228bfa;
        };
        function _0x966950() {
            const _0x1394e1 = _0x4e9fdd;
            if (_0x4a6a18['jmvlH'](_0x3b3649[_0x1394e1(275)], 6694 + 52 + -3373 * 2))
                throw Error(_0x1394e1(276));
        }
        function _0x10310e(_0x2dd07a) {
            _0x4bea6f += _0x2dd07a;
        }
        function _0x511ecc() {
            const _0x185bca = _0x4e9fdd;
            _0x966950();
            if (!_0x3273f0)
                throw Error(_0x185bca(277));
            const _0x1e0ba6 = _0x3273f0;
            _0x3273f0 = null, _0x396997[_0x185bca(278)](_0x5b2cfe, _0x396997[_0x185bca(279)]), _0x396997['HpPQY'](_0x1e0ba6);
        }
        function _0x5b2cfe(_0x1dac54) {
            const _0x216dd5 = _0x4e9fdd;
            _0x3b3649[_0x216dd5(280)](_0x1dac54);
        }
        function _0x4cef01() {
            return _0x3b3649['length'] === 2871 + 1509 * 3 + 54 * -137;
        }
        function _0x291e57(_0x4f3853) {
            const _0x3e8e72 = _0x4e9fdd, _0x1f6650 = _0x3b3649;
            _0x3b3649 = [], _0x4a6a18[_0x3e8e72(265)](expect, _0x1f6650)[_0x3e8e72(281)](_0x4f3853);
        }
        return {
            'advanceTime': _0x10310e,
            'fireSetImmediate': _0x511ecc,
            'log': _0x5b2cfe,
            'isLogEmpty': _0x4cef01,
            'assertLog': _0x291e57
        };
    }
    _0x4a6a18[_0x5608f9(282)](it, _0x5608f9(283), () => {
        const _0x3de2fc = _0x5608f9, _0x4c4413 = {
                'umqvi': _0x4a6a18['QvKte'],
                'Qacss': _0x4a6a18['rwHFK']
            };
        global[_0x3de2fc(284)] = () => {
            throw new Error(_0x4c4413['umqvi']);
        }, _0x4a6a18[_0x3de2fc(285)](scheduleCallback, NormalPriority, () => {
            const _0x704d10 = _0x3de2fc;
            runtime[_0x704d10(286)](_0x4c4413[_0x704d10(287)]);
        }), runtime[_0x3de2fc(288)]([_0x4a6a18[_0x3de2fc(268)]]), runtime['fireSetImmediate'](), runtime['assertLog']([
            _0x4a6a18[_0x3de2fc(289)],
            'Task'
        ]);
    }), _0x4a6a18[_0x5608f9(282)](it, _0x5608f9(290), () => {
        const _0x5eaef3 = _0x5608f9, _0x5cd99c = { 'onOfE': _0x4a6a18[_0x5eaef3(291)] };
        _0x4a6a18[_0x5eaef3(285)](scheduleCallback, NormalPriority, () => {
            const _0x53260e = _0x5eaef3;
            runtime[_0x53260e(286)](_0x5cd99c['onOfE']);
        }), runtime[_0x5eaef3(288)]([_0x4a6a18['yCxkj']]), runtime[_0x5eaef3(292)](), runtime[_0x5eaef3(288)]([
            'setImmediate Callback',
            _0x4a6a18['rwHFK']
        ]);
    }), _0x4a6a18[_0x5608f9(293)](it, _0x4a6a18[_0x5608f9(294)], () => {
        const _0x4e4ab8 = _0x5608f9, _0x3d0b8b = {
                'eGoWb': _0x4a6a18['LkBwl'],
                'vKaYG': _0x4a6a18[_0x4e4ab8(291)]
            };
        _0x4a6a18[_0x4e4ab8(295)](scheduleCallback, NormalPriority, () => {
            const _0x51322c = _0x4e4ab8, _0x2a4364 = { 'JgCTv': _0x3d0b8b[_0x51322c(296)] };
            runtime['log'](_0x3d0b8b[_0x51322c(297)]);
            while (!Scheduler[_0x51322c(298)]()) {
                runtime[_0x51322c(299)](4363 * 1 + -8733 * 1 + -141 * -31);
            }
            return runtime[_0x51322c(286)](_0x51322c(300) + performance['now']() + 'ms'), () => {
                const _0xa5530f = _0x51322c;
                runtime[_0xa5530f(286)](_0x2a4364[_0xa5530f(301)]);
            };
        }), runtime['assertLog']([_0x4a6a18[_0x4e4ab8(268)]]), runtime[_0x4e4ab8(292)](), runtime[_0x4e4ab8(288)]([
            _0x4a6a18[_0x4e4ab8(289)],
            _0x4e4ab8(302),
            _0x4a6a18[_0x4e4ab8(303)],
            _0x4a6a18[_0x4e4ab8(268)]
        ]), runtime[_0x4e4ab8(292)](), runtime[_0x4e4ab8(288)]([
            _0x4a6a18[_0x4e4ab8(289)],
            _0x4a6a18[_0x4e4ab8(304)]
        ]);
    }), _0x4a6a18['EHGbX'](it, _0x4a6a18[_0x5608f9(305)], () => {
        const _0x14cdcd = _0x5608f9, _0x1173ce = _0x14cdcd(306)['split']('|');
        let _0x268fdf = -50 * 22 + 31 * 49 + -419;
        while (!![]) {
            switch (_0x1173ce[_0x268fdf++]) {
            case '0':
                runtime[_0x14cdcd(292)]();
                continue;
            case '1':
                runtime[_0x14cdcd(288)]([
                    _0x4a6a18['LwBxj'],
                    'A',
                    'B'
                ]);
                continue;
            case '2':
                scheduleCallback(NormalPriority, () => {
                    const _0x5ad2d2 = _0x14cdcd;
                    runtime[_0x5ad2d2(286)]('A');
                });
                continue;
            case '3':
                runtime[_0x14cdcd(288)]([_0x4a6a18[_0x14cdcd(268)]]);
                continue;
            case '4':
                _0x4a6a18[_0x14cdcd(295)](scheduleCallback, NormalPriority, () => {
                    const _0x5f5d45 = _0x14cdcd;
                    runtime[_0x5f5d45(286)]('B');
                });
                continue;
            }
            break;
        }
    }), _0x4a6a18[_0x5608f9(307)](it, _0x4a6a18[_0x5608f9(308)], () => {
        const _0x5e43f5 = _0x5608f9, _0x34bbdc = _0x4a6a18[_0x5e43f5(309)][_0x5e43f5(310)]('|');
        let _0x714bab = -1653 + 7958 * -1 + 9611;
        while (!![]) {
            switch (_0x34bbdc[_0x714bab++]) {
            case '0':
                runtime[_0x5e43f5(288)]([_0x5e43f5(246)]);
                continue;
            case '1':
                runtime[_0x5e43f5(288)]([
                    _0x4a6a18[_0x5e43f5(289)],
                    'B',
                    'A'
                ]);
                continue;
            case '2':
                runtime[_0x5e43f5(292)]();
                continue;
            case '3':
                _0x4a6a18[_0x5e43f5(295)](scheduleCallback, NormalPriority, () => {
                    const _0x3df311 = _0x5e43f5;
                    runtime[_0x3df311(286)]('A');
                });
                continue;
            case '4':
                _0x4a6a18[_0x5e43f5(295)](scheduleCallback, UserBlockingPriority, () => {
                    const _0x2ccc6c = _0x5e43f5;
                    runtime[_0x2ccc6c(286)]('B');
                });
                continue;
            }
            break;
        }
    }), it(_0x4a6a18[_0x5608f9(311)], () => {
        const _0x48f153 = _0x5608f9;
        scheduleCallback(NormalPriority, () => {
            const _0xef6020 = _0x28bd;
            runtime[_0xef6020(286)]('A'), runtime['advanceTime'](-1128 + 2828 + 3299);
        }), _0x4a6a18[_0x48f153(312)](scheduleCallback, NormalPriority, () => {
            const _0x80b47e = _0x48f153;
            runtime[_0x80b47e(286)]('B');
        }), runtime[_0x48f153(288)]([_0x4a6a18[_0x48f153(268)]]), runtime[_0x48f153(292)](), runtime['assertLog']([
            _0x4a6a18[_0x48f153(289)],
            'A',
            _0x4a6a18[_0x48f153(268)]
        ]), runtime[_0x48f153(292)](), runtime['assertLog']([
            _0x4a6a18[_0x48f153(289)],
            'B'
        ]);
    }), _0x4a6a18['lKOSD'](it, _0x4a6a18['zqTtX'], () => {
        const _0x5c844d = _0x5608f9, _0x4aafe2 = { 'QkBdV': _0x4a6a18[_0x5c844d(291)] }, _0x118285 = _0x4a6a18['xmFBm'](scheduleCallback, NormalPriority, () => {
                runtime['log'](_0x4aafe2['QkBdV']);
            });
        runtime[_0x5c844d(288)]([_0x4a6a18['yCxkj']]), cancelCallback(_0x118285), runtime[_0x5c844d(288)]([]);
    }), _0x4a6a18['lKOSD'](it, _0x5608f9(313), () => {
        const _0x1e9983 = _0x5608f9, _0x14a6f5 = {
                'TdtCa': _0x4a6a18[_0x1e9983(314)],
                'VgVPN': function (_0x49b097, _0x271954) {
                    const _0x424cd9 = _0x1e9983;
                    return _0x4a6a18[_0x424cd9(256)](_0x49b097, _0x271954);
                }
            };
        _0x4a6a18[_0x1e9983(315)](scheduleCallback, NormalPriority, () => {
            const _0x457d07 = _0x1e9983;
            runtime[_0x457d07(286)](_0x14a6f5['TdtCa']);
            throw _0x14a6f5[_0x457d07(316)](Error, _0x14a6f5[_0x457d07(317)]);
        }), _0x4a6a18[_0x1e9983(318)](scheduleCallback, NormalPriority, () => {
            const _0xf8a471 = _0x1e9983;
            runtime[_0xf8a471(286)](_0xf8a471(251));
        }), runtime[_0x1e9983(288)]([_0x4a6a18['yCxkj']]), _0x4a6a18[_0x1e9983(256)](expect, () => runtime[_0x1e9983(292)]())[_0x1e9983(319)]('Oops!'), runtime[_0x1e9983(288)]([
            _0x4a6a18['LwBxj'],
            _0x4a6a18['CERSI'],
            _0x1e9983(246)
        ]), runtime[_0x1e9983(292)](), runtime[_0x1e9983(288)]([
            _0x4a6a18[_0x1e9983(289)],
            _0x4a6a18[_0x1e9983(320)]
        ]);
    }), _0x4a6a18[_0x5608f9(321)](it, _0x4a6a18['jDlLd'], () => {
        const _0x3b951e = _0x5608f9, _0x1942e2 = '1|2|6|0|3|4|7|5'[_0x3b951e(310)]('|');
        let _0x4c1856 = 9951 + 3119 * -2 + -3713;
        while (!![]) {
            switch (_0x1942e2[_0x4c1856++]) {
            case '0':
                runtime['assertLog']([
                    _0x4a6a18[_0x3b951e(289)],
                    'A'
                ]);
                continue;
            case '1':
                _0x4a6a18[_0x3b951e(318)](scheduleCallback, NormalPriority, () => {
                    const _0x554255 = _0x3b951e;
                    runtime[_0x554255(286)]('A');
                });
                continue;
            case '2':
                runtime[_0x3b951e(288)]([_0x4a6a18['yCxkj']]);
                continue;
            case '3':
                _0x4a6a18['ryokY'](scheduleCallback, NormalPriority, () => {
                    const _0x490d31 = _0x3b951e;
                    runtime[_0x490d31(286)]('B');
                });
                continue;
            case '4':
                runtime[_0x3b951e(288)]([_0x4a6a18[_0x3b951e(268)]]);
                continue;
            case '5':
                runtime['assertLog']([
                    _0x3b951e(247),
                    'B'
                ]);
                continue;
            case '6':
                runtime[_0x3b951e(292)]();
                continue;
            case '7':
                runtime['fireSetImmediate']();
                continue;
            }
            break;
        }
    }), _0x4a6a18[_0x5608f9(322)](it, _0x4a6a18[_0x5608f9(323)], () => {
        const _0x12ec53 = _0x5608f9, _0x356274 = _0x4a6a18[_0x12ec53(282)](scheduleCallback, NormalPriority, () => {
                const _0x11b84e = _0x12ec53;
                runtime[_0x11b84e(286)]('A');
            });
        runtime[_0x12ec53(288)]([_0x4a6a18[_0x12ec53(268)]]), _0x4a6a18[_0x12ec53(256)](cancelCallback, _0x356274), runtime['fireSetImmediate'](), runtime[_0x12ec53(288)]([_0x12ec53(247)]), scheduleCallback(NormalPriority, () => {
            runtime['log']('B');
        }), runtime[_0x12ec53(288)]([_0x12ec53(246)]), runtime[_0x12ec53(292)](), runtime[_0x12ec53(288)]([
            _0x4a6a18[_0x12ec53(289)],
            'B'
        ]);
    });
}), it(_0xfac560(324), () => {
    const _0x585a69 = _0xfac560, _0x4a3f03 = {
            'wdxrL': function (_0x4b4fdc, _0x1680ae) {
                return _0x4b4fdc(_0x1680ae);
            },
            'DlsSi': _0x585a69(243),
            'pZAiW': function (_0x45f09f, _0x48d53e) {
                return _0x45f09f(_0x48d53e);
            }
        };
    jest[_0x585a69(257)]();
    const _0x442cc6 = global['setImmediate'];
    try {
        delete global[_0x585a69(284)], jest[_0x585a69(258)](_0x585a69(243)), _0x4a3f03[_0x585a69(325)](expect, () => {
            const _0x3cee0e = _0x585a69;
            _0x4a3f03[_0x3cee0e(326)](require, _0x4a3f03[_0x3cee0e(327)]);
        })[_0x585a69(328)][_0x585a69(319)]();
    } finally {
        global[_0x585a69(284)] = _0x442cc6;
    }
});