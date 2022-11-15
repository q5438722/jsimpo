const _0x5503 = [
    '237195gbTMoG',
    '47757IORNBj',
    '31BxXQZj',
    '../../../../../core/server/services/auth',
    '../../../../../core/server/models',
    'sinon',
    'should',
    'Session\x20Service',
    'user-agent',
    'origin',
    'referrer',
    '127.0.0.1',
    'sendStatus',
    'bububang',
    'http://host.tld',
    'sets\x20req.session.user_id,origin,user_agent,ip\x20and\x20calls\x20sendStatus\x20with\x20201\x20if\x20the\x20check\x20succeeds',
    'oops',
    'calls\x20next\x20with\x20InternalServerError\x20if\x20destroy\x20errors',
    'calls\x20sendStatus\x20with\x20204\x20if\x20destroy\x20does\x20not\x20error',
    'dagIS',
    'init',
    'restore',
    'createSession',
    'uOHnV',
    'npaMe',
    'LkuDE',
    'BoEXt',
    'kqnxv',
    'vOXeO',
    'QCJNj',
    'sets\x20req.session.origin\x20from\x20the\x20Referer\x20header',
    'wuNCO',
    'stub',
    'withArgs',
    'xDFzy',
    'returns',
    'ScRyK',
    'user',
    'User',
    'forge',
    'callsFake',
    'equal',
    'session',
    'http://ghost.org',
    'fzzRM',
    'AfyEP',
    'get',
    'vbaML',
    'YTGgO',
    'iNzZW',
    'IcDnt',
    'iCJiG',
    'apkZj',
    'split',
    'user_id',
    'GddgY',
    'user_agent',
    'destroySession',
    'cficT',
    'InternalServerError',
    'FvqkS',
    'chAYD',
    'yLqiV',
    'YBEuH',
    'TZogv',
    'CSCDv',
    'XuDbO',
    'GgDmT',
    'rpavQ',
    'errorType',
    'Mfrsf',
    'QmRkV',
    'lePKd',
    'LJvzm',
    'UWVVO',
    '119705rTRRtf',
    '1483ICipDm',
    '185zVuDVe',
    '458xTUdOP',
    '914XWgIsR',
    '5DLlEhh',
    '36469inzDOs',
    '653IbJRIq',
    '317gkffEN'
];
const _0xc36769 = _0x8ff5;
(function (_0x17c8e3, _0x11722a) {
    const _0x13fe89 = _0x8ff5;
    while (!![]) {
        try {
            const _0x3e5492 = parseInt(_0x13fe89(0x71)) + -parseInt(_0x13fe89(0x72)) * parseInt(_0x13fe89(0x73)) + parseInt(_0x13fe89(0x74)) * -parseInt(_0x13fe89(0x75)) + -parseInt(_0x13fe89(0x76)) * parseInt(_0x13fe89(0x77)) + -parseInt(_0x13fe89(0x78)) * parseInt(_0x13fe89(0x79)) + -parseInt(_0x13fe89(0x7a)) + -parseInt(_0x13fe89(0x7b)) * -parseInt(_0x13fe89(0x7c));
            if (_0x3e5492 === _0x11722a)
                break;
            else
                _0x17c8e3['push'](_0x17c8e3['shift']());
        } catch (_0x46e61d) {
            _0x17c8e3['push'](_0x17c8e3['shift']());
        }
    }
}(_0x5503, 0x67df9 * 0x1 + 0xfc23 + 0x20e * -0x18e));
function _0x8ff5(_0x327e1a, _0x5381f9) {
    return _0x8ff5 = function (_0x3c482b, _0x2e0c1f) {
        _0x3c482b = _0x3c482b - (-0xe2d * 0x2 + -0x1 * -0xb17 + 0x11b4);
        let _0x458740 = _0x5503[_0x3c482b];
        return _0x458740;
    }, _0x8ff5(_0x327e1a, _0x5381f9);
}
const sessionMiddleware = require(_0xc36769(0x7d))['session'], models = require(_0xc36769(0x7e)), sinon = require(_0xc36769(0x7f)), should = require(_0xc36769(0x80));
describe(_0xc36769(0x81), function () {
    const _0x3187a7 = _0xc36769, _0xc57beb = {
            'OxuBi': function (_0x2c09b0) {
                return _0x2c09b0();
            },
            'wuNCO': function (_0x530cab) {
                return _0x530cab();
            },
            'xDFzy': _0x3187a7(0x82),
            'CyZuV': _0x3187a7(0x83),
            'rqoQE': _0x3187a7(0x84),
            'ScRyK': 'http://ghost.org/path',
            'npaMe': _0x3187a7(0x85),
            'vOXeO': _0x3187a7(0x86),
            'uOHnV': '0|3|5|1|4|2',
            'LkuDE': function (_0x42d79d) {
                return _0x42d79d();
            },
            'BoEXt': _0x3187a7(0x87),
            'kqnxv': _0x3187a7(0x88),
            'QCJNj': function (_0x110f15, _0x362cb9, _0x4305fb) {
                return _0x110f15(_0x362cb9, _0x4305fb);
            },
            'fzzRM': _0x3187a7(0x89),
            'GgDmT': 'destroy',
            'cficT': function (_0x5555e6) {
                return _0x5555e6();
            },
            'dagIS': function (_0x4ee295, _0x35ee73) {
                return _0x4ee295(_0x35ee73);
            },
            'nkGYm': _0x3187a7(0x8a),
            'FvqkS': function (_0x4939c6) {
                return _0x4939c6();
            },
            'chAYD': 'calls\x20req.session.destroy',
            'XuDbO': _0x3187a7(0x8b),
            'dQrrm': function (_0x4b56fd, _0x76993a, _0x46ef7c) {
                return _0x4b56fd(_0x76993a, _0x46ef7c);
            },
            'lePKd': _0x3187a7(0x8c)
        };
    _0xc57beb[_0x3187a7(0x8d)](before, function () {
        const _0x24b55e = _0x3187a7;
        models[_0x24b55e(0x8e)]();
    }), afterEach(function () {
        const _0x4bbfcb = _0x3187a7;
        sinon[_0x4bbfcb(0x8f)]();
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
    describe(_0x3187a7(0x90), function () {
        const _0x1a771c = _0x3187a7, _0x534ad6 = {
                'apkZj': _0xc57beb[_0x1a771c(0x91)],
                'IcDnt': _0xc57beb[_0x1a771c(0x92)],
                'GddgY': function (_0x2cae16) {
                    const _0x2bbe82 = _0x1a771c;
                    return _0xc57beb[_0x2bbe82(0x93)](_0x2cae16);
                },
                'iNzZW': _0xc57beb[_0x1a771c(0x94)],
                'AfyEP': function (_0x2ec6ac) {
                    return _0x2ec6ac();
                },
                'vbaML': _0xc57beb[_0x1a771c(0x95)],
                'YTGgO': _0x1a771c(0x82),
                'iCJiG': _0xc57beb[_0x1a771c(0x96)]
            };
        _0xc57beb[_0x1a771c(0x97)](it, _0x1a771c(0x98), function (_0x1a2c3d) {
            const _0x1db4d4 = _0x1a771c, _0x245647 = _0xc57beb['OxuBi'](_0x4555d1), _0x24571b = _0xc57beb[_0x1db4d4(0x99)](_0x423cab);
            sinon[_0x1db4d4(0x9a)](_0x245647, 'get')[_0x1db4d4(0x9b)](_0xc57beb[_0x1db4d4(0x9c)])[_0x1db4d4(0x9d)]('')[_0x1db4d4(0x9b)](_0xc57beb['CyZuV'])[_0x1db4d4(0x9d)]('')[_0x1db4d4(0x9b)](_0xc57beb['rqoQE'])[_0x1db4d4(0x9d)](_0xc57beb[_0x1db4d4(0x9e)]), _0x245647['ip'] = _0xc57beb[_0x1db4d4(0x92)], _0x245647[_0x1db4d4(0x9f)] = models[_0x1db4d4(0xa0)][_0x1db4d4(0xa1)]({ 'id': 0x17 }), sinon[_0x1db4d4(0x9a)](_0x24571b, _0xc57beb[_0x1db4d4(0x96)])[_0x1db4d4(0xa2)](function () {
                const _0x3517d9 = _0x1db4d4;
                should[_0x3517d9(0xa3)](_0x245647[_0x3517d9(0xa4)][_0x3517d9(0x83)], _0x3517d9(0xa5)), _0x1a2c3d();
            }), sessionMiddleware[_0x1db4d4(0x90)](_0x245647, _0x24571b);
        }), _0xc57beb['QCJNj'](it, _0xc57beb[_0x1a771c(0xa6)], function (_0x574ab) {
            const _0x685e03 = _0x1a771c, _0x250920 = _0x534ad6[_0x685e03(0xa7)](_0x4555d1), _0xc8a2ef = _0x534ad6[_0x685e03(0xa7)](_0x423cab);
            sinon[_0x685e03(0x9a)](_0x250920, _0x685e03(0xa8))['withArgs'](_0x685e03(0x83))[_0x685e03(0x9d)](_0x534ad6[_0x685e03(0xa9)])[_0x685e03(0x9b)](_0x534ad6[_0x685e03(0xaa)])[_0x685e03(0x9d)](_0x534ad6[_0x685e03(0xab)]), _0x250920['ip'] = _0x534ad6[_0x685e03(0xac)], _0x250920[_0x685e03(0x9f)] = models[_0x685e03(0xa0)][_0x685e03(0xa1)]({ 'id': 0x17 }), sinon[_0x685e03(0x9a)](_0xc8a2ef, _0x534ad6[_0x685e03(0xad)])[_0x685e03(0xa2)](function (_0x1da858) {
                const _0x3cc8ea = _0x685e03, _0xdf8c25 = _0x534ad6[_0x3cc8ea(0xae)][_0x3cc8ea(0xaf)]('|');
                let _0x26d711 = 0x1dea + 0xa * -0x5 + 0x13d * -0x18;
                while (!![]) {
                    switch (_0xdf8c25[_0x26d711++]) {
                    case '0':
                        should[_0x3cc8ea(0xa3)](_0x250920[_0x3cc8ea(0xa4)][_0x3cc8ea(0xb0)], 0x935 * 0x2 + -0xbf5 + 0xa * -0xa3);
                        continue;
                    case '1':
                        should[_0x3cc8ea(0xa3)](_0x250920[_0x3cc8ea(0xa4)]['ip'], _0x534ad6[_0x3cc8ea(0xac)]);
                        continue;
                    case '2':
                        _0x534ad6[_0x3cc8ea(0xb1)](_0x574ab);
                        continue;
                    case '3':
                        should['equal'](_0x250920[_0x3cc8ea(0xa4)][_0x3cc8ea(0x83)], 'http://host.tld');
                        continue;
                    case '4':
                        should[_0x3cc8ea(0xa3)](_0x1da858, -0xc3f + 0x407 * -0x9 + 0x91 * 0x57);
                        continue;
                    case '5':
                        should[_0x3cc8ea(0xa3)](_0x250920['session'][_0x3cc8ea(0xb2)], _0x534ad6[_0x3cc8ea(0xab)]);
                        continue;
                    }
                    break;
                }
            }), sessionMiddleware[_0x685e03(0x90)](_0x250920, _0xc8a2ef);
        });
    }), describe(_0x3187a7(0xb3), function () {
        const _0x26c545 = _0x3187a7, _0x439e23 = {
                'TZogv': function (_0x127157) {
                    return _0x127157();
                },
                'CSCDv': function (_0x4e39e3) {
                    const _0x55f747 = _0x8ff5;
                    return _0xc57beb[_0x55f747(0x93)](_0x4e39e3);
                },
                'yLqiV': function (_0x2250c2) {
                    const _0x2466d5 = _0x8ff5;
                    return _0xc57beb[_0x2466d5(0xb4)](_0x2250c2);
                },
                'QmRkV': function (_0x595294) {
                    const _0x244e65 = _0x8ff5;
                    return _0xc57beb[_0x244e65(0xb4)](_0x595294);
                },
                'YBEuH': _0xc57beb['GgDmT'],
                'bOtAZ': _0xc57beb['vOXeO'],
                'rpavQ': function (_0x40c6f7, _0x4843e0) {
                    return _0xc57beb['dagIS'](_0x40c6f7, _0x4843e0);
                },
                'QoNvF': _0xc57beb['nkGYm'],
                'Mfrsf': _0x26c545(0xb5),
                'LJvzm': function (_0x51357a) {
                    const _0x495e5d = _0x26c545;
                    return _0xc57beb[_0x495e5d(0xb6)](_0x51357a);
                }
            };
        _0xc57beb[_0x26c545(0x97)](it, _0xc57beb[_0x26c545(0xb7)], function (_0xb5b5a7) {
            const _0x1d6eb1 = _0x26c545, _0x31e153 = _0x439e23[_0x1d6eb1(0xb8)](_0x4555d1), _0x30c048 = _0x439e23['QmRkV'](_0x423cab), _0x2eb034 = sinon[_0x1d6eb1(0x9a)](_0x31e153['session'], _0x439e23[_0x1d6eb1(0xb9)])[_0x1d6eb1(0xa2)](function (_0x6d8113) {
                    const _0x19bdb5 = _0x1d6eb1;
                    _0x439e23[_0x19bdb5(0xba)](_0x6d8113);
                });
            sinon['stub'](_0x30c048, _0x439e23['bOtAZ'])['callsFake'](function () {
                const _0x4693e4 = _0x1d6eb1;
                should[_0x4693e4(0xa3)](_0x2eb034['callCount'], -0x24b8 + -0x1 * 0x21fa + 0x46b3), _0x439e23[_0x4693e4(0xbb)](_0xb5b5a7);
            }), sessionMiddleware[_0x1d6eb1(0xb3)](_0x31e153, _0x30c048);
        }), it(_0xc57beb[_0x26c545(0xbc)], function (_0x51726f) {
            const _0x21f394 = _0x26c545, _0x40708e = _0xc57beb['LkuDE'](_0x4555d1), _0x491c57 = _0xc57beb[_0x21f394(0x93)](_0x423cab);
            sinon[_0x21f394(0x9a)](_0x40708e[_0x21f394(0xa4)], _0xc57beb[_0x21f394(0xbd)])[_0x21f394(0xa2)](function (_0x190ce8) {
                const _0x4021d0 = _0x21f394;
                _0x439e23[_0x4021d0(0xbe)](_0x190ce8, new Error(_0x439e23['QoNvF']));
            }), sessionMiddleware['destroySession'](_0x40708e, _0x491c57, function _0x3957e1(_0x2fb5a9) {
                const _0x25ade7 = _0x21f394;
                should[_0x25ade7(0xa3)](_0x2fb5a9[_0x25ade7(0xbf)], _0x439e23[_0x25ade7(0xc0)]), _0x439e23[_0x25ade7(0xc1)](_0x51726f);
            });
        }), _0xc57beb['dQrrm'](it, _0xc57beb[_0x26c545(0xc2)], function (_0x4f74b4) {
            const _0x26a759 = _0x26c545, _0x21c949 = {
                    'UWVVO': function (_0x4d5358) {
                        const _0xc0cd9e = _0x8ff5;
                        return _0x439e23[_0xc0cd9e(0xc3)](_0x4d5358);
                    }
                }, _0x53f00e = _0x439e23[_0x26a759(0xc3)](_0x4555d1), _0x2f4cfd = _0x423cab();
            sinon['stub'](_0x53f00e[_0x26a759(0xa4)], _0x439e23['YBEuH'])['callsFake'](function (_0x5b6b1b) {
                const _0x47e170 = _0x26a759;
                _0x21c949[_0x47e170(0xc4)](_0x5b6b1b);
            }), sinon[_0x26a759(0x9a)](_0x2f4cfd, _0x26a759(0x86))[_0x26a759(0xa2)](function (_0x26bf06) {
                const _0x2d822c = _0x26a759;
                should[_0x2d822c(0xa3)](_0x26bf06, 0x22d0 + -0x1a6e + -0x796), _0x4f74b4();
            }), sessionMiddleware[_0x26a759(0xb3)](_0x53f00e, _0x2f4cfd);
        });
    });
});
