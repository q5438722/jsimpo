'use strict';
const _0x3934 = [
    'jUzlC',
    'vdZVD',
    'ThgAf',
    'VKXfG',
    'ApiId',
    'dbxqM',
    'split',
    'oIFHM',
    'APfeg',
    'length',
    '147paGxyu',
    '1901JXkzHB',
    '1091606dWAxfN',
    '570555GxApsa',
    '511zsLoQw',
    '609nVNTMm',
    '1XhyqMI',
    '1295265aLRDTg',
    '331536YvUZjW',
    '1818474NTnotO',
    'chai',
    '@serverless/test/aws-request',
    'log',
    'timers-ext/promise/sleep',
    '../../fixtures/programmatic',
    '../../utils/integration',
    '../../utils/websocket',
    'AWS\x20-\x20API\x20Gateway\x20Websocket\x20Integration\x20Test',
    'websocket',
    'CloudFormation',
    'describeStacks',
    'Hello,\x20serverless',
    'error',
    'open',
    'close',
    'message',
    'serverless',
    'should\x20expose\x20a\x20websocket\x20route\x20that\x20can\x20reply\x20to\x20a\x20message',
    'Stop\x20propagation',
    'test\x20message',
    'Unexpected\x20WebSocket\x20message',
    'dev',
    'when\x20using\x20an\x20existing\x20websocket\x20API',
    'Two-Way\x20Setup',
    'Minimal\x20Setup',
    'timeout',
    'RtuXB',
    'WxiQl',
    'ZYGrn',
    'jfLEZ',
    'setup',
    'serviceConfig',
    'service',
    'LpTfM',
    'PiRAa',
    'Stacks',
    'Outputs',
    'OutputKey',
    'ServiceEndpointWebsocket',
    'rYJHq',
    'IdThQ',
    'NGBKo',
    'GFesL',
    'mFdzB',
    'KhWmn',
    'eMMyG',
    'gXuGy',
    'DjvWV',
    'wDcGp',
    'NVSNG',
    'iQboH',
    'jVaXf',
    'debug',
    'send',
    'stringify',
    'RHDJq',
    'zqagv',
    'RqETP',
    'BoPXc',
    'sTXsN',
    'amznR',
    'Received\x20WebSocket\x20message:\x20',
    'vLBAN',
    'finally',
    'lPgLz',
    'OLgXt',
    '0|4|5|3|2|1',
    'MrPmw',
    'Synbn',
    'PiZDO',
    'vxjoS',
    'Unexpected\x20message',
    'UHjKO',
    'skip',
    'WebSocket\x20Server\x20URL\x20',
    'match',
    'eSnqW',
    'qQONT',
    'TmsyE',
    'bWlkn',
    'EnYQt',
    'EMGRn',
    'PVjvo',
    'JjZjr',
    '/aws/websocket/',
    'jxqyo',
    'yVnPn',
    'XSYpI',
    'HEHoN',
    'Leotz',
    'equal',
    'UhNGP'
];
function _0x2dd6(_0x2ad173, _0x1140bb) {
    return _0x2dd6 = function (_0x12e618, _0x1a1791) {
        _0x12e618 = _0x12e618 - (-0x1504 * 0x1 + 0x583 + 0x1074);
        let _0x40c287 = _0x3934[_0x12e618];
        return _0x40c287;
    }, _0x2dd6(_0x2ad173, _0x1140bb);
}
const _0x37c5b0 = _0x2dd6;
(function (_0x4e2057, _0xfb60df) {
    const _0x24e67c = _0x2dd6;
    while (!![]) {
        try {
            const _0x2693de = parseInt(_0x24e67c(0xf3)) * parseInt(_0x24e67c(0xf4)) + -parseInt(_0x24e67c(0xf5)) + parseInt(_0x24e67c(0xf6)) + -parseInt(_0x24e67c(0xf7)) * -parseInt(_0x24e67c(0xf8)) + parseInt(_0x24e67c(0xf9)) * -parseInt(_0x24e67c(0xfa)) + parseInt(_0x24e67c(0xfb)) + parseInt(_0x24e67c(0xfc));
            if (_0x2693de === _0xfb60df)
                break;
            else
                _0x4e2057['push'](_0x4e2057['shift']());
        } catch (_0x18f05e) {
            _0x4e2057['push'](_0x4e2057['shift']());
        }
    }
}(_0x3934, -0xe42d * 0x1b + 0x6ed3e + -0x1 * -0x1f3e35));
const WebSocket = require('ws'), {expect} = require(_0x37c5b0(0xfd)), awsRequest = require(_0x37c5b0(0xfe)), log = require(_0x37c5b0(0xff))['get']('serverless:test'), wait = require(_0x37c5b0(0x100)), fixtures = require(_0x37c5b0(0x101)), {confirmCloudWatchLogs} = require('../../utils/misc'), {deployService, removeService} = require(_0x37c5b0(0x102)), {createApi, deleteApi, getRoutes, createStage, deleteStage} = require(_0x37c5b0(0x103));
describe(_0x37c5b0(0x104), function () {
    const _0x268188 = _0x37c5b0, _0x13aa03 = {
            'gSRgl': _0x268188(0x105),
            'LpTfM': function (_0x2a9e6a, _0x53a35e) {
                return _0x2a9e6a(_0x53a35e);
            },
            'LHlFS': function (_0x300373, _0x1e65a5, _0xe615d6, _0x2a35f0) {
                return _0x300373(_0x1e65a5, _0xe615d6, _0x2a35f0);
            },
            'sGsOh': _0x268188(0x106),
            'PiRAa': _0x268188(0x107),
            'NGBKo': _0x268188(0x108),
            'GFesL': _0x268188(0x109),
            'mFdzB': _0x268188(0x10a),
            'KhWmn': _0x268188(0x10b),
            'UHjKO': _0x268188(0x10c),
            'eMMyG': 'Sending\x20message\x20to\x20\x27hello\x27\x20route',
            'grpvd': _0x268188(0x10d),
            'rYJHq': function (_0xb22908, _0x4154e8, _0x3bdb28) {
                return _0xb22908(_0x4154e8, _0x3bdb28);
            },
            'gXuGy': function (_0x190622) {
                return _0x190622();
            },
            'LbwyC': _0x268188(0x10e),
            'bROAv': function (_0x52d38c, _0x41402e) {
                return _0x52d38c > _0x41402e;
            },
            'Synbn': _0x268188(0x10f),
            'PiZDO': _0x268188(0x110),
            'vxjoS': _0x268188(0x111),
            'OLgXt': function (_0xe7db1d, _0x214f48) {
                return _0xe7db1d(_0x214f48);
            },
            'ZYGrn': _0x268188(0x112),
            'TUmih': 'Deleting\x20external\x20websocket\x20API...',
            'MrPmw': function (_0x1b5c54, _0x54e4fc) {
                return _0x1b5c54(_0x54e4fc);
            },
            'Onamn': 'should\x20expose\x20an\x20accessible\x20websocket\x20endpoint',
            'ThgAf': _0x268188(0x113),
            'RtuXB': function (_0x1a18a8, _0x10c3b3) {
                return _0x1a18a8 * _0x10c3b3;
            },
            'WxiQl': function (_0x2dbedb, _0x290cfc) {
                return _0x2dbedb * _0x290cfc;
            },
            'jfLEZ': function (_0x5b3754, _0x4825bd) {
                return _0x5b3754(_0x4825bd);
            },
            'IdThQ': _0x268188(0x114),
            'lPgLz': _0x268188(0x115)
        };
    this[_0x268188(0x116)](_0x13aa03[_0x268188(0x117)](_0x13aa03[_0x268188(0x118)](0x6 * -0x107 + -0xc * -0x1aa + 0x9e6 * -0x1, 0x1 * 0x17e7 + -0xb87 + -0xc24), 0x116e * -0x1 + -0x71f * 0x3 + 0x26d5));
    let _0x1b0873, _0x483bb9, _0x3b8e31, _0x47099c, _0x369a16;
    const _0x29b45a = _0x13aa03[_0x268188(0x119)];
    _0x13aa03[_0x268188(0x11a)](before, async () => {
        const _0x3ea25f = _0x268188, _0x543a5a = await fixtures[_0x3ea25f(0x11b)](_0x13aa03['gSRgl']);
        return {
            servicePath: _0x3b8e31,
            updateConfig: _0x47099c
        } = _0x543a5a, _0x483bb9 = _0x543a5a[_0x3ea25f(0x11c)][_0x3ea25f(0x11d)], _0x1b0873 = _0x483bb9 + '-' + _0x29b45a, _0x13aa03[_0x3ea25f(0x11e)](deployService, _0x3b8e31);
    }), after(() => {
        if (!_0x369a16)
            return null;
        return _0x13aa03['LpTfM'](removeService, _0x3b8e31);
    });
    async function _0x438547() {
        const _0x4cfc76 = _0x268188, _0x1e05b6 = await _0x13aa03['LHlFS'](awsRequest, _0x13aa03['sGsOh'], _0x13aa03[_0x4cfc76(0x11f)], { 'StackName': _0x1b0873 }), _0x340561 = _0x1e05b6[_0x4cfc76(0x120)][-0x115a * 0x1 + 0x5e3 * -0x1 + 0x173d * 0x1][_0x4cfc76(0x121)]['find'](_0x1c28fe => _0x1c28fe[_0x4cfc76(0x122)] === _0x4cfc76(0x123))['OutputValue'];
        return _0x340561;
    }
    _0x13aa03[_0x268188(0x124)](describe, _0x13aa03[_0x268188(0x125)], () => {
        const _0xd5b6bd = _0x268188, _0x1977ca = {
                'DjvWV': function (_0xe7f56, _0x59ed4e) {
                    return _0x13aa03['LpTfM'](_0xe7f56, _0x59ed4e);
                },
                'iQboH': _0x13aa03[_0xd5b6bd(0x126)],
                'MenHV': _0x13aa03[_0xd5b6bd(0x127)],
                'BoPXc': _0x13aa03[_0xd5b6bd(0x128)],
                'vBBkh': _0x13aa03[_0xd5b6bd(0x129)],
                'sTXsN': _0x13aa03['UHjKO'],
                'wDcGp': _0x13aa03[_0xd5b6bd(0x12a)],
                'NINMG': _0x13aa03['grpvd'],
                'NVSNG': function (_0x3ccf2b, _0x40e276, _0x548c56) {
                    const _0x319ece = _0xd5b6bd;
                    return _0x13aa03[_0x319ece(0x124)](_0x3ccf2b, _0x40e276, _0x548c56);
                },
                'QATxO': function (_0x50bcc9) {
                    const _0x2b92a4 = _0xd5b6bd;
                    return _0x13aa03[_0x2b92a4(0x12b)](_0x50bcc9);
                }
            };
        let _0x46525b;
        _0x13aa03['LpTfM'](after, () => clearTimeout(_0x46525b)), _0x13aa03[_0xd5b6bd(0x124)](it, _0x13aa03['LbwyC'], async () => {
            const _0x2c635f = _0xd5b6bd, _0x1ecc4c = {
                    'jVaXf': function (_0x1117ed, _0x383d80) {
                        const _0x280dce = _0x2dd6;
                        return _0x1977ca[_0x280dce(0x12c)](_0x1117ed, _0x383d80);
                    },
                    'vqkFc': _0x1977ca[_0x2c635f(0x12d)],
                    'RHDJq': 'hello',
                    'zqagv': _0x1977ca['NINMG'],
                    'RqETP': function (_0x31e5cd, _0x9826af, _0x4d05d3) {
                        const _0x4a0f0a = _0x2c635f;
                        return _0x1977ca[_0x4a0f0a(0x12e)](_0x31e5cd, _0x9826af, _0x4d05d3);
                    }
                }, _0x299719 = await _0x1977ca['QATxO'](_0x438547);
            return new Promise((_0x50c310, _0x2d8465) => {
                const _0x450558 = _0x2c635f, _0x4aeaf0 = {
                        'amznR': function (_0x4ab0fd, _0x4273bd) {
                            const _0x32dcda = _0x2dd6;
                            return _0x1977ca[_0x32dcda(0x12c)](_0x4ab0fd, _0x4273bd);
                        },
                        'vLBAN': _0x1977ca[_0x450558(0x12f)]
                    }, _0xa347a3 = new WebSocket(_0x299719);
                _0x2d8465 = (_0x22069a => _0x1d7b64 => {
                    const _0x1c57a7 = _0x450558;
                    _0x1ecc4c[_0x1c57a7(0x130)](_0x22069a, _0x1d7b64);
                    try {
                        _0xa347a3[_0x1c57a7(0x10b)]();
                    } catch (_0x22ce0d) {
                    }
                })(_0x2d8465);
                const _0x2cde65 = () => {
                    const _0x5db579 = _0x450558;
                    log[_0x5db579(0x131)](_0x1ecc4c['vqkFc']), _0xa347a3[_0x5db579(0x132)](JSON[_0x5db579(0x133)]({
                        'action': _0x1ecc4c[_0x5db579(0x134)],
                        'name': _0x1ecc4c[_0x5db579(0x135)]
                    })), _0x46525b = _0x1ecc4c[_0x5db579(0x136)](setTimeout, _0x2cde65, -0x1 * 0x67 + 0xf0a + -0xabb);
                };
                _0xa347a3['on'](_0x1977ca['MenHV'], _0x2d8465), _0xa347a3['on'](_0x1977ca[_0x450558(0x137)], _0x2cde65), _0xa347a3['on'](_0x1977ca['vBBkh'], _0x50c310), _0xa347a3['on'](_0x1977ca[_0x450558(0x138)], _0x41e2d4 => {
                    const _0x3069e8 = _0x450558;
                    _0x369a16 = !![], _0x4aeaf0[_0x3069e8(0x139)](clearTimeout, _0x46525b);
                    try {
                        log[_0x3069e8(0x131)](_0x3069e8(0x13a) + _0x41e2d4), expect(_0x41e2d4)['to']['equal'](_0x4aeaf0[_0x3069e8(0x13b)]);
                    } finally {
                        _0xa347a3[_0x3069e8(0x10b)]();
                    }
                });
            })[_0x2c635f(0x13c)](() => clearTimeout(_0x46525b));
        });
    }), describe(_0x13aa03[_0x268188(0x13d)], () => {
        const _0x21424e = _0x268188, _0x906f3d = {
                'VKXfG': function (_0x5139d4, _0x4f6a65) {
                    const _0x31094d = _0x2dd6;
                    return _0x13aa03[_0x31094d(0x13e)](_0x5139d4, _0x4f6a65);
                },
                'oIFHM': function (_0x11fd3c, _0x4a783c, _0x2901b6) {
                    const _0x3c8cb5 = _0x2dd6;
                    return _0x13aa03[_0x3c8cb5(0x124)](_0x11fd3c, _0x4a783c, _0x2901b6);
                },
                'MuEpq': _0x13aa03['ZYGrn'],
                'pUMcR': _0x21424e(0x13f),
                'xpsHt': _0x13aa03['TUmih'],
                'pTOuP': function (_0x482fde, _0x1691f7) {
                    return _0x482fde(_0x1691f7);
                },
                'bHdTu': function (_0x42ef16, _0x173935) {
                    return _0x13aa03['OLgXt'](_0x42ef16, _0x173935);
                },
                'APfeg': function (_0x46e6e5, _0x2d1e14) {
                    const _0x11a40f = _0x21424e;
                    return _0x13aa03[_0x11a40f(0x140)](_0x46e6e5, _0x2d1e14);
                },
                'dbxqM': function (_0x42ac1b, _0x10e8ff) {
                    const _0xc97185 = _0x21424e;
                    return _0x13aa03[_0xc97185(0x140)](_0x42ac1b, _0x10e8ff);
                }
            };
        _0x13aa03[_0x21424e(0x124)](it, _0x13aa03['Onamn'], async function () {
            const _0x3dcc09 = _0x21424e, _0x2b4a2a = {
                    'bWlkn': function (_0x30a91b, _0x298a7a) {
                        const _0x5d8bae = _0x2dd6;
                        return _0x13aa03[_0x5d8bae(0x11e)](_0x30a91b, _0x298a7a);
                    },
                    'eSnqW': function (_0x47d3f0, _0x244438) {
                        return _0x13aa03['bROAv'](_0x47d3f0, _0x244438);
                    },
                    'qQONT': _0x13aa03[_0x3dcc09(0x141)],
                    'TmsyE': _0x13aa03[_0x3dcc09(0x142)],
                    'EnYQt': _0x13aa03[_0x3dcc09(0x143)],
                    'caSJS': _0x3dcc09(0x144),
                    'MLIxb': _0x13aa03[_0x3dcc09(0x127)],
                    'kUlCg': 'close',
                    'UhNGP': _0x13aa03[_0x3dcc09(0x145)]
                };
            if (!_0x369a16)
                this[_0x3dcc09(0x146)]();
            const _0x2ad2cd = await _0x13aa03['gXuGy'](_0x438547);
            return log[_0x3dcc09(0x131)](_0x3dcc09(0x147) + _0x2ad2cd), _0x13aa03[_0x3dcc09(0x11e)](expect, _0x2ad2cd)['to'][_0x3dcc09(0x148)](/wss:\/\/.+\.execute-api\..+\.amazonaws\.com.+/), new Promise((_0x242154, _0x56819c) => {
                const _0x11c6ed = _0x3dcc09, _0x733a06 = {
                        'HEHoN': function (_0x4b23b5, _0x400f14) {
                            return _0x2b4a2a['bWlkn'](_0x4b23b5, _0x400f14);
                        },
                        'Leotz': function (_0x36d918, _0x2b8348) {
                            const _0x50e0ef = _0x2dd6;
                            return _0x2b4a2a[_0x50e0ef(0x149)](_0x36d918, _0x2b8348);
                        },
                        'EMGRn': _0x2b4a2a[_0x11c6ed(0x14a)],
                        'PVjvo': _0x2b4a2a[_0x11c6ed(0x14b)],
                        'JjZjr': function (_0x3520ba, _0x158abf) {
                            const _0x620dc0 = _0x11c6ed;
                            return _0x2b4a2a[_0x620dc0(0x14c)](_0x3520ba, _0x158abf);
                        },
                        'jUzlC': _0x2b4a2a[_0x11c6ed(0x14d)],
                        'vdZVD': _0x2b4a2a['caSJS']
                    }, _0x44c319 = new WebSocket(_0x2ad2cd);
                let _0x6eb621 = ![];
                _0x56819c = (_0x3e4cd3 => _0x42d88e => {
                    const _0xd1951b = _0x11c6ed;
                    _0x6eb621 = !![], _0x733a06['HEHoN'](_0x3e4cd3, _0x42d88e);
                    try {
                        _0x44c319[_0xd1951b(0x10b)]();
                    } catch (_0x399cc3) {
                    }
                })(_0x56819c), _0x44c319['on'](_0x2b4a2a['MLIxb'], _0x56819c), _0x44c319['on'](_0x11c6ed(0x10a), () => {
                    const _0x754467 = _0x11c6ed, _0x5eed3a = {
                            'jxqyo': _0x733a06[_0x754467(0x14e)],
                            'yVnPn': _0x733a06[_0x754467(0x14f)],
                            'XSYpI': function (_0xba7054, _0x194a80) {
                                const _0x389fb5 = _0x754467;
                                return _0x733a06[_0x389fb5(0x150)](_0xba7054, _0x194a80);
                            }
                        };
                    confirmCloudWatchLogs(_0x754467(0x151) + _0x1b0873, () => {
                        const _0x14b6f6 = _0x754467;
                        if (_0x6eb621)
                            throw new Error(_0x5eed3a[_0x14b6f6(0x152)]);
                        return _0x44c319['send'](_0x5eed3a[_0x14b6f6(0x153)]), _0x5eed3a[_0x14b6f6(0x154)](wait, -0x2 * 0x162 + 0x1860 + -0x25 * 0x88);
                    })['then'](_0x590810 => {
                        const _0x52e45e = _0x754467;
                        _0x733a06[_0x52e45e(0x155)](expect, _0x733a06[_0x52e45e(0x156)](_0x590810['length'], 0x73a + -0x14ff + 0xdc5))['to'][_0x52e45e(0x157)](!![]), _0x44c319['close']();
                    }, _0x56819c);
                }), _0x44c319['on'](_0x2b4a2a['kUlCg'], _0x242154), _0x44c319['on'](_0x2b4a2a[_0x11c6ed(0x158)], _0x4a3b6c => {
                    const _0xf0c53d = _0x11c6ed;
                    log[_0xf0c53d(0x131)](_0x733a06[_0xf0c53d(0x159)], _0x4a3b6c), _0x733a06[_0xf0c53d(0x150)](_0x56819c, new Error(_0x733a06[_0xf0c53d(0x15a)]));
                });
            });
        }), describe(_0x13aa03[_0x21424e(0x15b)], () => {
            const _0x41d76a = _0x21424e;
            let _0x83d305;
            before(async function () {
                const _0x2b34cd = _0x2dd6;
                if (!_0x369a16)
                    this[_0x2b34cd(0x146)]();
                const _0x20a9af = _0x29b45a + '-' + _0x483bb9 + '-ext-api', _0xf485 = await _0x906f3d[_0x2b34cd(0x15c)](createApi, _0x20a9af);
                return _0x83d305 = _0xf485[_0x2b34cd(0x15d)], await _0x906f3d['oIFHM'](createStage, _0x83d305, _0x906f3d['MuEpq']), await _0x47099c({ 'provider': { 'apiGateway': { 'websocketApiId': _0x83d305 } } }), _0x906f3d[_0x2b34cd(0x15c)](deployService, _0x3b8e31);
            }), _0x906f3d[_0x41d76a(0x15e)](after, async () => {
                const _0x19cea6 = _0x41d76a, _0x1589e6 = _0x906f3d['pUMcR'][_0x19cea6(0x15f)]('|');
                let _0x43a87c = 0x1a19 + -0x1 * -0x20 + -0x1a39;
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
                        await _0x906f3d[_0x19cea6(0x160)](deleteStage, _0x83d305, _0x19cea6(0x112));
                        continue;
                    }
                    break;
                }
            }), _0x906f3d[_0x41d76a(0x160)](it, 'should\x20add\x20the\x20routes\x20to\x20the\x20referenced\x20API', async () => {
                const _0x29c5e9 = _0x41d76a, _0x554bf9 = await _0x906f3d[_0x29c5e9(0x161)](getRoutes, _0x83d305);
                expect(_0x554bf9[_0x29c5e9(0x162)])['to'][_0x29c5e9(0x157)](0x4ea + -0xf7d + 0xa97);
            });
        });
    });
});
