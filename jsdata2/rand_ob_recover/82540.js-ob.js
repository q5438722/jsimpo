function _0x8ff5(_0x327e1a, _0x5381f9) {
    return _0x8ff5 = function (_0x3c482b, _0x2e0c1f) {
        _0x3c482b = _0x3c482b - (-3629 * 2 + -1 * -2839 + 4532);
        let _0x458740 = _0x5503[_0x3c482b];
        return _0x458740;
    }, _0x8ff5(_0x327e1a, _0x5381f9);
}
const sessionMiddleware = require(_0xc36769(125))['session'], models = require(_0xc36769(126)), sinon = require(_0xc36769(127)), should = require(_0xc36769(128));
describe(_0xc36769(129), function () {
    const _0x3187a7 = _0xc36769, _0xc57beb = {
            'OxuBi': function (_0x2c09b0) {
                return _0x2c09b0();
            },
            'wuNCO': function (_0x530cab) {
                return _0x530cab();
            },
            'xDFzy': _0x3187a7(130),
            'CyZuV': _0x3187a7(131),
            'rqoQE': _0x3187a7(132),
            'ScRyK': 'http://ghost.org/path',
            'npaMe': _0x3187a7(133),
            'vOXeO': _0x3187a7(134),
            'uOHnV': '0|3|5|1|4|2',
            'LkuDE': function (_0x42d79d) {
                return _0x42d79d();
            },
            'BoEXt': _0x3187a7(135),
            'kqnxv': _0x3187a7(136),
            'QCJNj': function (_0x110f15, _0x362cb9, _0x4305fb) {
                return _0x110f15(_0x362cb9, _0x4305fb);
            },
            'fzzRM': _0x3187a7(137),
            'GgDmT': 'destroy',
            'cficT': function (_0x5555e6) {
                return _0x5555e6();
            },
            'dagIS': function (_0x4ee295, _0x35ee73) {
                return _0x4ee295(_0x35ee73);
            },
            'nkGYm': _0x3187a7(138),
            'FvqkS': function (_0x4939c6) {
                return _0x4939c6();
            },
            'chAYD': 'calls req.session.destroy',
            'XuDbO': _0x3187a7(139),
            'dQrrm': function (_0x4b56fd, _0x76993a, _0x46ef7c) {
                return _0x4b56fd(_0x76993a, _0x46ef7c);
            },
            'lePKd': _0x3187a7(140)
        };
    _0xc57beb[_0x3187a7(141)](before, function () {
        const _0x24b55e = _0x3187a7;
        models[_0x24b55e(142)]();
    }), afterEach(function () {
        const _0x4bbfcb = _0x3187a7;
        sinon[_0x4bbfcb(143)]();
    });
    const _0x4555d1 = function _0x23e93d() {
            return {
                'session': {
                    'destroy'() {
                    }
                },
                'user': null,
                'body': {},
                'get'() {
                }
            };
        }, _0x423cab = function _0x208ddc() {
            return {
                'sendStatus'() {
                }
            };
        };
    describe(_0x3187a7(144), function () {
        const _0x1a771c = _0x3187a7, _0x534ad6 = {
                'apkZj': _0xc57beb[_0x1a771c(145)],
                'IcDnt': _0xc57beb[_0x1a771c(146)],
                'GddgY': function (_0x2cae16) {
                    const _0x2bbe82 = _0x1a771c;
                    return _0xc57beb[_0x2bbe82(147)](_0x2cae16);
                },
                'iNzZW': _0xc57beb[_0x1a771c(148)],
                'AfyEP': function (_0x2ec6ac) {
                    return _0x2ec6ac();
                },
                'vbaML': _0xc57beb[_0x1a771c(149)],
                'YTGgO': _0x1a771c(130),
                'iCJiG': _0xc57beb[_0x1a771c(150)]
            };
        _0xc57beb[_0x1a771c(151)](it, _0x1a771c(152), function (_0x1a2c3d) {
            const _0x1db4d4 = _0x1a771c, _0x245647 = _0xc57beb['OxuBi'](_0x4555d1), _0x24571b = _0xc57beb[_0x1db4d4(153)](_0x423cab);
            sinon[_0x1db4d4(154)](_0x245647, 'get')[_0x1db4d4(155)](_0xc57beb[_0x1db4d4(156)])[_0x1db4d4(157)]('')[_0x1db4d4(155)](_0xc57beb['CyZuV'])[_0x1db4d4(157)]('')[_0x1db4d4(155)](_0xc57beb['rqoQE'])[_0x1db4d4(157)](_0xc57beb[_0x1db4d4(158)]), _0x245647['ip'] = _0xc57beb[_0x1db4d4(146)], _0x245647[_0x1db4d4(159)] = models[_0x1db4d4(160)][_0x1db4d4(161)]({ 'id': 23 }), sinon[_0x1db4d4(154)](_0x24571b, _0xc57beb[_0x1db4d4(150)])[_0x1db4d4(162)](function () {
                const _0x3517d9 = _0x1db4d4;
                should[_0x3517d9(163)](_0x245647[_0x3517d9(164)][_0x3517d9(131)], _0x3517d9(165)), _0x1a2c3d();
            }), sessionMiddleware[_0x1db4d4(144)](_0x245647, _0x24571b);
        }), _0xc57beb['QCJNj'](it, _0xc57beb[_0x1a771c(166)], function (_0x574ab) {
            const _0x685e03 = _0x1a771c, _0x250920 = _0x534ad6[_0x685e03(167)](_0x4555d1), _0xc8a2ef = _0x534ad6[_0x685e03(167)](_0x423cab);
            sinon[_0x685e03(154)](_0x250920, _0x685e03(168))['withArgs'](_0x685e03(131))[_0x685e03(157)](_0x534ad6[_0x685e03(169)])[_0x685e03(155)](_0x534ad6[_0x685e03(170)])[_0x685e03(157)](_0x534ad6[_0x685e03(171)]), _0x250920['ip'] = _0x534ad6[_0x685e03(172)], _0x250920[_0x685e03(159)] = models[_0x685e03(160)][_0x685e03(161)]({ 'id': 23 }), sinon[_0x685e03(154)](_0xc8a2ef, _0x534ad6[_0x685e03(173)])[_0x685e03(162)](function (_0x1da858) {
                const _0x3cc8ea = _0x685e03, _0xdf8c25 = _0x534ad6[_0x3cc8ea(174)][_0x3cc8ea(175)]('|');
                let _0x26d711 = 7658 + 10 * -5 + 317 * -24;
                while (!![]) {
                    switch (_0xdf8c25[_0x26d711++]) {
                    case '0':
                        should[_0x3cc8ea(163)](_0x250920[_0x3cc8ea(164)][_0x3cc8ea(176)], 2357 * 2 + -3061 + 10 * -163);
                        continue;
                    case '1':
                        should[_0x3cc8ea(163)](_0x250920[_0x3cc8ea(164)]['ip'], _0x534ad6[_0x3cc8ea(172)]);
                        continue;
                    case '2':
                        _0x534ad6[_0x3cc8ea(177)](_0x574ab);
                        continue;
                    case '3':
                        should['equal'](_0x250920[_0x3cc8ea(164)][_0x3cc8ea(131)], 'http://host.tld');
                        continue;
                    case '4':
                        should[_0x3cc8ea(163)](_0x1da858, -3135 + 1031 * -9 + 145 * 87);
                        continue;
                    case '5':
                        should[_0x3cc8ea(163)](_0x250920['session'][_0x3cc8ea(178)], _0x534ad6[_0x3cc8ea(171)]);
                        continue;
                    }
                    break;
                }
            }), sessionMiddleware[_0x685e03(144)](_0x250920, _0xc8a2ef);
        });
    }), describe(_0x3187a7(179), function () {
        const _0x26c545 = _0x3187a7, _0x439e23 = {
                'TZogv': function (_0x127157) {
                    return _0x127157();
                },
                'CSCDv': function (_0x4e39e3) {
                    const _0x55f747 = _0x8ff5;
                    return _0xc57beb[_0x55f747(147)](_0x4e39e3);
                },
                'yLqiV': function (_0x2250c2) {
                    const _0x2466d5 = _0x8ff5;
                    return _0xc57beb[_0x2466d5(180)](_0x2250c2);
                },
                'QmRkV': function (_0x595294) {
                    const _0x244e65 = _0x8ff5;
                    return _0xc57beb[_0x244e65(180)](_0x595294);
                },
                'YBEuH': _0xc57beb['GgDmT'],
                'bOtAZ': _0xc57beb['vOXeO'],
                'rpavQ': function (_0x40c6f7, _0x4843e0) {
                    return _0xc57beb['dagIS'](_0x40c6f7, _0x4843e0);
                },
                'QoNvF': _0xc57beb['nkGYm'],
                'Mfrsf': _0x26c545(181),
                'LJvzm': function (_0x51357a) {
                    const _0x495e5d = _0x26c545;
                    return _0xc57beb[_0x495e5d(182)](_0x51357a);
                }
            };
        _0xc57beb[_0x26c545(151)](it, _0xc57beb[_0x26c545(183)], function (_0xb5b5a7) {
            const _0x1d6eb1 = _0x26c545, _0x31e153 = _0x439e23[_0x1d6eb1(184)](_0x4555d1), _0x30c048 = _0x439e23['QmRkV'](_0x423cab), _0x2eb034 = sinon[_0x1d6eb1(154)](_0x31e153['session'], _0x439e23[_0x1d6eb1(185)])[_0x1d6eb1(162)](function (_0x6d8113) {
                    const _0x19bdb5 = _0x1d6eb1;
                    _0x439e23[_0x19bdb5(186)](_0x6d8113);
                });
            sinon['stub'](_0x30c048, _0x439e23['bOtAZ'])['callsFake'](function () {
                const _0x4693e4 = _0x1d6eb1;
                should[_0x4693e4(163)](_0x2eb034['callCount'], -9400 + -1 * 8698 + 18099), _0x439e23[_0x4693e4(187)](_0xb5b5a7);
            }), sessionMiddleware[_0x1d6eb1(179)](_0x31e153, _0x30c048);
        }), it(_0xc57beb[_0x26c545(188)], function (_0x51726f) {
            const _0x21f394 = _0x26c545, _0x40708e = _0xc57beb['LkuDE'](_0x4555d1), _0x491c57 = _0xc57beb[_0x21f394(147)](_0x423cab);
            sinon[_0x21f394(154)](_0x40708e[_0x21f394(164)], _0xc57beb[_0x21f394(189)])[_0x21f394(162)](function (_0x190ce8) {
                const _0x4021d0 = _0x21f394;
                _0x439e23[_0x4021d0(190)](_0x190ce8, new Error(_0x439e23['QoNvF']));
            }), sessionMiddleware['destroySession'](_0x40708e, _0x491c57, function _0x3957e1(_0x2fb5a9) {
                const _0x25ade7 = _0x21f394;
                should[_0x25ade7(163)](_0x2fb5a9[_0x25ade7(191)], _0x439e23[_0x25ade7(192)]), _0x439e23[_0x25ade7(193)](_0x51726f);
            });
        }), _0xc57beb['dQrrm'](it, _0xc57beb[_0x26c545(194)], function (_0x4f74b4) {
            const _0x26a759 = _0x26c545, _0x21c949 = {
                    'UWVVO': function (_0x4d5358) {
                        const _0xc0cd9e = _0x8ff5;
                        return _0x439e23[_0xc0cd9e(195)](_0x4d5358);
                    }
                }, _0x53f00e = _0x439e23[_0x26a759(195)](_0x4555d1), _0x2f4cfd = _0x423cab();
            sinon['stub'](_0x53f00e[_0x26a759(164)], _0x439e23['YBEuH'])['callsFake'](function (_0x5b6b1b) {
                const _0x47e170 = _0x26a759;
                _0x21c949[_0x47e170(196)](_0x5b6b1b);
            }), sinon[_0x26a759(154)](_0x2f4cfd, _0x26a759(134))[_0x26a759(162)](function (_0x26bf06) {
                const _0x2d822c = _0x26a759;
                should[_0x2d822c(163)](_0x26bf06, 8912 + -6766 + -1942), _0x4f74b4();
            }), sessionMiddleware[_0x26a759(179)](_0x53f00e, _0x2f4cfd);
        });
    });
});