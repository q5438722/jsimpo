const WebSocket = require('ws'), {expect} = require(_0x37c5b0(253)), awsRequest = require(_0x37c5b0(254)), log = require(_0x37c5b0(255))['get']('serverless:test'), wait = require(_0x37c5b0(256)), fixtures = require(_0x37c5b0(257)), {confirmCloudWatchLogs} = require('../../utils/misc'), {deployService, removeService} = require(_0x37c5b0(258)), {createApi, deleteApi, getRoutes, createStage, deleteStage} = require(_0x37c5b0(259));
describe(_0x37c5b0(260), function () {
    const _0x268188 = _0x37c5b0, _0x13aa03 = {
            'gSRgl': _0x268188(261),
            'LpTfM': function (_0x2a9e6a, _0x53a35e) {
                return _0x2a9e6a(_0x53a35e);
            },
            'LHlFS': function (_0x300373, _0x1e65a5, _0xe615d6, _0x2a35f0) {
                return _0x300373(_0x1e65a5, _0xe615d6, _0x2a35f0);
            },
            'sGsOh': _0x268188(262),
            'PiRAa': _0x268188(263),
            'NGBKo': _0x268188(264),
            'GFesL': _0x268188(265),
            'mFdzB': _0x268188(266),
            'KhWmn': _0x268188(267),
            'UHjKO': _0x268188(268),
            'eMMyG': 'Sending message to \'hello\' route',
            'grpvd': _0x268188(269),
            'rYJHq': function (_0xb22908, _0x4154e8, _0x3bdb28) {
                return _0xb22908(_0x4154e8, _0x3bdb28);
            },
            'gXuGy': function (_0x190622) {
                return _0x190622();
            },
            'LbwyC': _0x268188(270),
            'bROAv': function (_0x52d38c, _0x41402e) {
                return _0x52d38c > _0x41402e;
            },
            'Synbn': _0x268188(271),
            'PiZDO': _0x268188(272),
            'vxjoS': _0x268188(273),
            'OLgXt': function (_0xe7db1d, _0x214f48) {
                return _0xe7db1d(_0x214f48);
            },
            'ZYGrn': _0x268188(274),
            'TUmih': 'Deleting external websocket API...',
            'MrPmw': function (_0x1b5c54, _0x54e4fc) {
                return _0x1b5c54(_0x54e4fc);
            },
            'Onamn': 'should expose an accessible websocket endpoint',
            'ThgAf': _0x268188(275),
            'RtuXB': function (_0x1a18a8, _0x10c3b3) {
                return _0x1a18a8 * _0x10c3b3;
            },
            'WxiQl': function (_0x2dbedb, _0x290cfc) {
                return _0x2dbedb * _0x290cfc;
            },
            'jfLEZ': function (_0x5b3754, _0x4825bd) {
                return _0x5b3754(_0x4825bd);
            },
            'IdThQ': _0x268188(276),
            'lPgLz': _0x268188(277)
        };
    this[_0x268188(278)](_0x13aa03[_0x268188(279)](_0x13aa03[_0x268188(280)](6 * -263 + -12 * -426 + 2534 * -1, 1 * 6119 + -2951 + -3108), 4462 * -1 + -1823 * 3 + 9941));
    let _0x1b0873, _0x483bb9, _0x3b8e31, _0x47099c, _0x369a16;
    const _0x29b45a = _0x13aa03[_0x268188(281)];
    _0x13aa03[_0x268188(282)](before, async () => {
        const _0x3ea25f = _0x268188, _0x543a5a = await fixtures[_0x3ea25f(283)](_0x13aa03['gSRgl']);
        return {
            servicePath: _0x3b8e31,
            updateConfig: _0x47099c
        } = _0x543a5a, _0x483bb9 = _0x543a5a[_0x3ea25f(284)][_0x3ea25f(285)], _0x1b0873 = _0x483bb9 + '-' + _0x29b45a, _0x13aa03[_0x3ea25f(286)](deployService, _0x3b8e31);
    }), after(() => {
        if (!_0x369a16)
            return null;
        return _0x13aa03['LpTfM'](removeService, _0x3b8e31);
    });
    async function _0x438547() {
        const _0x4cfc76 = _0x268188, _0x1e05b6 = await _0x13aa03['LHlFS'](awsRequest, _0x13aa03['sGsOh'], _0x13aa03[_0x4cfc76(287)], { 'StackName': _0x1b0873 }), _0x340561 = _0x1e05b6[_0x4cfc76(288)][-4442 * 1 + 1507 * -1 + 5949 * 1][_0x4cfc76(289)]['find'](_0x1c28fe => _0x1c28fe[_0x4cfc76(290)] === _0x4cfc76(291))['OutputValue'];
        return _0x340561;
    }
    _0x13aa03[_0x268188(292)](describe, _0x13aa03[_0x268188(293)], () => {
        const _0xd5b6bd = _0x268188, _0x1977ca = {
                'DjvWV': function (_0xe7f56, _0x59ed4e) {
                    return _0x13aa03['LpTfM'](_0xe7f56, _0x59ed4e);
                },
                'iQboH': _0x13aa03[_0xd5b6bd(294)],
                'MenHV': _0x13aa03[_0xd5b6bd(295)],
                'BoPXc': _0x13aa03[_0xd5b6bd(296)],
                'vBBkh': _0x13aa03[_0xd5b6bd(297)],
                'sTXsN': _0x13aa03['UHjKO'],
                'wDcGp': _0x13aa03[_0xd5b6bd(298)],
                'NINMG': _0x13aa03['grpvd'],
                'NVSNG': function (_0x3ccf2b, _0x40e276, _0x548c56) {
                    const _0x319ece = _0xd5b6bd;
                    return _0x13aa03[_0x319ece(292)](_0x3ccf2b, _0x40e276, _0x548c56);
                },
                'QATxO': function (_0x50bcc9) {
                    const _0x2b92a4 = _0xd5b6bd;
                    return _0x13aa03[_0x2b92a4(299)](_0x50bcc9);
                }
            };
        let _0x46525b;
        _0x13aa03['LpTfM'](after, () => clearTimeout(_0x46525b)), _0x13aa03[_0xd5b6bd(292)](it, _0x13aa03['LbwyC'], async () => {
            const _0x2c635f = _0xd5b6bd, _0x1ecc4c = {
                    'jVaXf': function (_0x1117ed, _0x383d80) {
                        const _0x280dce = _0x2dd6;
                        return _0x1977ca[_0x280dce(300)](_0x1117ed, _0x383d80);
                    },
                    'vqkFc': _0x1977ca[_0x2c635f(301)],
                    'RHDJq': 'hello',
                    'zqagv': _0x1977ca['NINMG'],
                    'RqETP': function (_0x31e5cd, _0x9826af, _0x4d05d3) {
                        const _0x4a0f0a = _0x2c635f;
                        return _0x1977ca[_0x4a0f0a(302)](_0x31e5cd, _0x9826af, _0x4d05d3);
                    }
                }, _0x299719 = await _0x1977ca['QATxO'](_0x438547);
            return new Promise((_0x50c310, _0x2d8465) => {
                const _0x450558 = _0x2c635f, _0x4aeaf0 = {
                        'amznR': function (_0x4ab0fd, _0x4273bd) {
                            const _0x32dcda = _0x2dd6;
                            return _0x1977ca[_0x32dcda(300)](_0x4ab0fd, _0x4273bd);
                        },
                        'vLBAN': _0x1977ca[_0x450558(303)]
                    }, _0xa347a3 = new WebSocket(_0x299719);
                _0x2d8465 = (_0x22069a => _0x1d7b64 => {
                    const _0x1c57a7 = _0x450558;
                    _0x1ecc4c[_0x1c57a7(304)](_0x22069a, _0x1d7b64);
                    try {
                        _0xa347a3[_0x1c57a7(267)]();
                    } catch (_0x22ce0d) {
                    }
                })(_0x2d8465);
                const _0x2cde65 = () => {
                    const _0x5db579 = _0x450558;
                    log[_0x5db579(305)](_0x1ecc4c['vqkFc']), _0xa347a3[_0x5db579(306)](JSON[_0x5db579(307)]({
                        'action': _0x1ecc4c[_0x5db579(308)],
                        'name': _0x1ecc4c[_0x5db579(309)]
                    })), _0x46525b = _0x1ecc4c[_0x5db579(310)](setTimeout, _0x2cde65, -1 * 103 + 3850 + -2747);
                };
                _0xa347a3['on'](_0x1977ca['MenHV'], _0x2d8465), _0xa347a3['on'](_0x1977ca[_0x450558(311)], _0x2cde65), _0xa347a3['on'](_0x1977ca['vBBkh'], _0x50c310), _0xa347a3['on'](_0x1977ca[_0x450558(312)], _0x41e2d4 => {
                    const _0x3069e8 = _0x450558;
                    _0x369a16 = !![], _0x4aeaf0[_0x3069e8(313)](clearTimeout, _0x46525b);
                    try {
                        log[_0x3069e8(305)](_0x3069e8(314) + _0x41e2d4), expect(_0x41e2d4)['to']['equal'](_0x4aeaf0[_0x3069e8(315)]);
                    } finally {
                        _0xa347a3[_0x3069e8(267)]();
                    }
                });
            })[_0x2c635f(316)](() => clearTimeout(_0x46525b));
        });
    }), describe(_0x13aa03[_0x268188(317)], () => {
        const _0x21424e = _0x268188, _0x906f3d = {
                'VKXfG': function (_0x5139d4, _0x4f6a65) {
                    const _0x31094d = _0x2dd6;
                    return _0x13aa03[_0x31094d(318)](_0x5139d4, _0x4f6a65);
                },
                'oIFHM': function (_0x11fd3c, _0x4a783c, _0x2901b6) {
                    const _0x3c8cb5 = _0x2dd6;
                    return _0x13aa03[_0x3c8cb5(292)](_0x11fd3c, _0x4a783c, _0x2901b6);
                },
                'MuEpq': _0x13aa03['ZYGrn'],
                'pUMcR': _0x21424e(319),
                'xpsHt': _0x13aa03['TUmih'],
                'pTOuP': function (_0x482fde, _0x1691f7) {
                    return _0x482fde(_0x1691f7);
                },
                'bHdTu': function (_0x42ef16, _0x173935) {
                    return _0x13aa03['OLgXt'](_0x42ef16, _0x173935);
                },
                'APfeg': function (_0x46e6e5, _0x2d1e14) {
                    const _0x11a40f = _0x21424e;
                    return _0x13aa03[_0x11a40f(320)](_0x46e6e5, _0x2d1e14);
                },
                'dbxqM': function (_0x42ac1b, _0x10e8ff) {
                    const _0xc97185 = _0x21424e;
                    return _0x13aa03[_0xc97185(320)](_0x42ac1b, _0x10e8ff);
                }
            };
        _0x13aa03[_0x21424e(292)](it, _0x13aa03['Onamn'], async function () {
            const _0x3dcc09 = _0x21424e, _0x2b4a2a = {
                    'bWlkn': function (_0x30a91b, _0x298a7a) {
                        const _0x5d8bae = _0x2dd6;
                        return _0x13aa03[_0x5d8bae(286)](_0x30a91b, _0x298a7a);
                    },
                    'eSnqW': function (_0x47d3f0, _0x244438) {
                        return _0x13aa03['bROAv'](_0x47d3f0, _0x244438);
                    },
                    'qQONT': _0x13aa03[_0x3dcc09(321)],
                    'TmsyE': _0x13aa03[_0x3dcc09(322)],
                    'EnYQt': _0x13aa03[_0x3dcc09(323)],
                    'caSJS': _0x3dcc09(324),
                    'MLIxb': _0x13aa03[_0x3dcc09(295)],
                    'kUlCg': 'close',
                    'UhNGP': _0x13aa03[_0x3dcc09(325)]
                };
            if (!_0x369a16)
                this[_0x3dcc09(326)]();
            const _0x2ad2cd = await _0x13aa03['gXuGy'](_0x438547);
            return log[_0x3dcc09(305)](_0x3dcc09(327) + _0x2ad2cd), _0x13aa03[_0x3dcc09(286)](expect, _0x2ad2cd)['to'][_0x3dcc09(328)](/wss:\/\/.+\.execute-api\..+\.amazonaws\.com.+/), new Promise((_0x242154, _0x56819c) => {
                const _0x11c6ed = _0x3dcc09, _0x733a06 = {
                        'HEHoN': function (_0x4b23b5, _0x400f14) {
                            return _0x2b4a2a['bWlkn'](_0x4b23b5, _0x400f14);
                        },
                        'Leotz': function (_0x36d918, _0x2b8348) {
                            const _0x50e0ef = _0x2dd6;
                            return _0x2b4a2a[_0x50e0ef(329)](_0x36d918, _0x2b8348);
                        },
                        'EMGRn': _0x2b4a2a[_0x11c6ed(330)],
                        'PVjvo': _0x2b4a2a[_0x11c6ed(331)],
                        'JjZjr': function (_0x3520ba, _0x158abf) {
                            const _0x620dc0 = _0x11c6ed;
                            return _0x2b4a2a[_0x620dc0(332)](_0x3520ba, _0x158abf);
                        },
                        'jUzlC': _0x2b4a2a[_0x11c6ed(333)],
                        'vdZVD': _0x2b4a2a['caSJS']
                    }, _0x44c319 = new WebSocket(_0x2ad2cd);
                let _0x6eb621 = ![];
                _0x56819c = (_0x3e4cd3 => _0x42d88e => {
                    const _0xd1951b = _0x11c6ed;
                    _0x6eb621 = !![], _0x733a06['HEHoN'](_0x3e4cd3, _0x42d88e);
                    try {
                        _0x44c319[_0xd1951b(267)]();
                    } catch (_0x399cc3) {
                    }
                })(_0x56819c), _0x44c319['on'](_0x2b4a2a['MLIxb'], _0x56819c), _0x44c319['on'](_0x11c6ed(266), () => {
                    const _0x754467 = _0x11c6ed, _0x5eed3a = {
                            'jxqyo': _0x733a06[_0x754467(334)],
                            'yVnPn': _0x733a06[_0x754467(335)],
                            'XSYpI': function (_0xba7054, _0x194a80) {
                                const _0x389fb5 = _0x754467;
                                return _0x733a06[_0x389fb5(336)](_0xba7054, _0x194a80);
                            }
                        };
                    confirmCloudWatchLogs(_0x754467(337) + _0x1b0873, () => {
                        const _0x14b6f6 = _0x754467;
                        if (_0x6eb621)
                            throw new Error(_0x5eed3a[_0x14b6f6(338)]);
                        return _0x44c319['send'](_0x5eed3a[_0x14b6f6(339)]), _0x5eed3a[_0x14b6f6(340)](wait, -2 * 354 + 6240 + -37 * 136);
                    })['then'](_0x590810 => {
                        const _0x52e45e = _0x754467;
                        _0x733a06[_0x52e45e(341)](expect, _0x733a06[_0x52e45e(342)](_0x590810['length'], 1850 + -5375 + 3525))['to'][_0x52e45e(343)](!![]), _0x44c319['close']();
                    }, _0x56819c);
                }), _0x44c319['on'](_0x2b4a2a['kUlCg'], _0x242154), _0x44c319['on'](_0x2b4a2a[_0x11c6ed(344)], _0x4a3b6c => {
                    const _0xf0c53d = _0x11c6ed;
                    log[_0xf0c53d(305)](_0x733a06[_0xf0c53d(345)], _0x4a3b6c), _0x733a06[_0xf0c53d(336)](_0x56819c, new Error(_0x733a06[_0xf0c53d(346)]));
                });
            });
        }), describe(_0x13aa03[_0x21424e(347)], () => {
            const _0x41d76a = _0x21424e;
            let _0x83d305;
            before(async function () {
                const _0x2b34cd = _0x2dd6;
                if (!_0x369a16)
                    this[_0x2b34cd(326)]();
                const _0x20a9af = _0x29b45a + '-' + _0x483bb9 + '-ext-api', _0xf485 = await _0x906f3d[_0x2b34cd(348)](createApi, _0x20a9af);
                return _0x83d305 = _0xf485[_0x2b34cd(349)], await _0x906f3d['oIFHM'](createStage, _0x83d305, _0x906f3d['MuEpq']), await _0x47099c({ 'provider': { 'apiGateway': { 'websocketApiId': _0x83d305 } } }), _0x906f3d[_0x2b34cd(348)](deployService, _0x3b8e31);
            }), _0x906f3d[_0x41d76a(350)](after, async () => {
                const _0x19cea6 = _0x41d76a, _0x1589e6 = _0x906f3d['pUMcR'][_0x19cea6(351)]('|');
                let _0x43a87c = 6681 + -1 * -32 + -6713;
                while (!![]) {
                    switch (_0x1589e6[_0x43a87c++]) {
                    case '0':
                        if (!_0x369a16)
                            return;
                        continue;
                    case '1':
                        await _0x906f3d['VKXfG'](deleteApi, _0x83d305);
                        continue;
                    case '2':
                        log['debug'](_0x906f3d['xpsHt']);
                        continue;
                    case '3':
                        await _0x906f3d['pTOuP'](deployService, _0x3b8e31);
                        continue;
                    case '4':
                        await _0x906f3d['bHdTu'](_0x47099c, { 'provider': { 'apiGateway': { 'websocketApiId': null } } });
                        continue;
                    case '5':
                        await _0x906f3d[_0x19cea6(352)](deleteStage, _0x83d305, _0x19cea6(274));
                        continue;
                    }
                    break;
                }
            }), _0x906f3d[_0x41d76a(352)](it, 'should add the routes to the referenced API', async () => {
                const _0x29c5e9 = _0x41d76a, _0x554bf9 = await _0x906f3d[_0x29c5e9(353)](getRoutes, _0x83d305);
                expect(_0x554bf9[_0x29c5e9(354)])['to'][_0x29c5e9(343)](1258 + -3965 + 2711);
            });
        });
    });
});