'use strict';
const _0x11bc = [
    'open',
    'message',
    'should\x20expose\x20a\x20websocket\x20route\x20that\x20can\x20reply\x20to\x20a\x20message',
    'dev',
    'should\x20expose\x20an\x20accessible\x20websocket\x20endpoint',
    'when\x20using\x20an\x20existing\x20websocket\x20API',
    'Two-Way\x20Setup',
    'Minimal\x20Setup',
    'timeout',
    'LuqfC',
    'pGlQv',
    'iigKt',
    'setup',
    'YCNkw',
    'serviceConfig',
    'service',
    'vgKyk',
    'swsIE',
    'LTpEi',
    'pdJQo',
    'describeStacks',
    'Stacks',
    'Outputs',
    'find',
    'ServiceEndpointWebsocket',
    'OutputValue',
    'gBeYl',
    'serverless',
    'hZCSK',
    'stMIr',
    'wKveJ',
    'efMJL',
    'PyoRA',
    'tCoZI',
    'DfTYZ',
    'LLuxN',
    'close',
    'debug',
    'Sending\x20message\x20to\x20\x27hello\x27\x20route',
    'stringify',
    'OAPmw',
    'zaHgi',
    'error',
    'elSMz',
    'Myvnp',
    'Received\x20WebSocket\x20message:\x20',
    'equal',
    'Hello,\x20serverless',
    'dqYlk',
    'qvZsI',
    'jcGFU',
    '2|4|5|0|3|1',
    'Deleting\x20external\x20websocket\x20API...',
    'xOkXu',
    'skip',
    'yBzRU',
    'anHGE',
    'match',
    'Stop\x20propagation',
    'yenHK',
    'dYOGH',
    'MzBzi',
    '/aws/websocket/',
    'iHcHp',
    'send',
    'jQpRz',
    'then',
    'length',
    'uZTDU',
    'cGpfg',
    'ZmUkE',
    'mjNVn',
    'SQKyM',
    'eeHuj',
    '-ext-api',
    'ApiId',
    'xtFNc',
    'pDlVQ',
    'lxISt',
    'iuEjR',
    'vdVIu',
    'RAjZm',
    'WUGfV',
    'BxEZy',
    '1oNgrBb',
    '59031XfhiDX',
    '1017MrBjUs',
    '209OqdcFA',
    '10qmzOsn',
    '3581RGGsHB',
    '1ZVjcpr',
    '102247veYlLI',
    '108844TRDxOK',
    '93136EUlGDZ',
    '1rqHhgU',
    '187217AEDwnU',
    'chai',
    '@serverless/test/aws-request',
    'log',
    'get',
    'serverless:test',
    'timers-ext/promise/sleep',
    '../../fixtures/programmatic',
    '../../utils/misc',
    '../../utils/websocket',
    'AWS\x20-\x20API\x20Gateway\x20Websocket\x20Integration\x20Test',
    'websocket',
    'CloudFormation'
];
const _0x107c77 = _0x30c6;
(function (_0x4197d3, _0x52fed3) {
    const _0xba0170 = _0x30c6;
    while (!![]) {
        try {
            const _0x27ad73 = parseInt(_0xba0170(0x1d6)) * parseInt(_0xba0170(0x1d7)) + -parseInt(_0xba0170(0x1d8)) * -parseInt(_0xba0170(0x1d9)) + parseInt(_0xba0170(0x1da)) * parseInt(_0xba0170(0x1db)) + -parseInt(_0xba0170(0x1dc)) * parseInt(_0xba0170(0x1dd)) + -parseInt(_0xba0170(0x1de)) + -parseInt(_0xba0170(0x1df)) + -parseInt(_0xba0170(0x1e0)) * -parseInt(_0xba0170(0x1e1));
            if (_0x27ad73 === _0x52fed3)
                break;
            else
                _0x4197d3['push'](_0x4197d3['shift']());
        } catch (_0x496aed) {
            _0x4197d3['push'](_0x4197d3['shift']());
        }
    }
}(_0x11bc, -0x54d5e * -0x1 + 0x481b4 + -0x6e762));
const WebSocket = require('ws'), {expect} = require(_0x107c77(0x1e2)), awsRequest = require(_0x107c77(0x1e3)), log = require(_0x107c77(0x1e4))[_0x107c77(0x1e5)](_0x107c77(0x1e6)), wait = require(_0x107c77(0x1e7)), fixtures = require(_0x107c77(0x1e8)), {confirmCloudWatchLogs} = require(_0x107c77(0x1e9)), {deployService, removeService} = require('../../utils/integration'), {createApi, deleteApi, getRoutes, createStage, deleteStage} = require(_0x107c77(0x1ea));
function _0x30c6(_0x4cbe07, _0x52cdf4) {
    return _0x30c6 = function (_0x160276, _0x5d7011) {
        _0x160276 = _0x160276 - (-0x24c0 + -0x10fc + 0x3792);
        let _0x14840e = _0x11bc[_0x160276];
        return _0x14840e;
    }, _0x30c6(_0x4cbe07, _0x52cdf4);
}
describe(_0x107c77(0x1eb), function () {
    const _0x38bf33 = _0x107c77, _0x5e17fd = {
            'YCNkw': _0x38bf33(0x1ec),
            'vgKyk': function (_0x19abbb, _0x23c098) {
                return _0x19abbb(_0x23c098);
            },
            'swsIE': function (_0x19370d, _0x196123) {
                return _0x19370d(_0x196123);
            },
            'LTpEi': function (_0x378360, _0x5e197a, _0x17d18c, _0x57261a) {
                return _0x378360(_0x5e197a, _0x17d18c, _0x57261a);
            },
            'pdJQo': _0x38bf33(0x1ed),
            'hZCSK': function (_0x813af4, _0x27d2e9, _0x3218a4) {
                return _0x813af4(_0x27d2e9, _0x3218a4);
            },
            'stMIr': _0x38bf33(0x1ee),
            'wKveJ': _0x38bf33(0x1ef),
            'efMJL': function (_0x49aab8) {
                return _0x49aab8();
            },
            'PyoRA': function (_0x43390d, _0x2c5923) {
                return _0x43390d(_0x2c5923);
            },
            'tCoZI': function (_0x143d05, _0x41ec29, _0x8d1cce) {
                return _0x143d05(_0x41ec29, _0x8d1cce);
            },
            'kaNpk': _0x38bf33(0x1f0),
            'qvZsI': 'Unexpected\x20message',
            'jcGFU': 'error',
            'gBeYl': function (_0x4b3ef6, _0x3a35a0, _0x56b240) {
                return _0x4b3ef6(_0x3a35a0, _0x56b240);
            },
            'IMlCm': function (_0xbdede6) {
                return _0xbdede6();
            },
            'iigKt': function (_0x23e6d6, _0x20c5de) {
                return _0x23e6d6(_0x20c5de);
            },
            'pGlQv': _0x38bf33(0x1f1),
            'xOkXu': _0x38bf33(0x1f2),
            'ZmUkE': _0x38bf33(0x1f3),
            'LuqfC': function (_0x3cb528, _0x541ea6) {
                return _0x3cb528 * _0x541ea6;
            },
            'ijbaq': _0x38bf33(0x1f4),
            'dqYlk': _0x38bf33(0x1f5)
        };
    this[_0x38bf33(0x1f6)](_0x5e17fd[_0x38bf33(0x1f7)](-0xa43 * -0x1 + 0x7a6 + -0xf * 0xef, 0x1 * 0xcb5 + -0x25 * -0x1a + -0x103b) * (-0xf13 + -0x18 * -0x101 + 0xb * -0xd1));
    let _0x1af6a8, _0x2f80c1, _0x1b18f3, _0x39ce16, _0x63fe43;
    const _0x418c85 = _0x5e17fd[_0x38bf33(0x1f8)];
    _0x5e17fd[_0x38bf33(0x1f9)](before, async () => {
        const _0x4cec9d = _0x38bf33, _0x2bc0c8 = await fixtures[_0x4cec9d(0x1fa)](_0x5e17fd[_0x4cec9d(0x1fb)]);
        return {
            servicePath: _0x1b18f3,
            updateConfig: _0x39ce16
        } = _0x2bc0c8, _0x2f80c1 = _0x2bc0c8[_0x4cec9d(0x1fc)][_0x4cec9d(0x1fd)], _0x1af6a8 = _0x2f80c1 + '-' + _0x418c85, _0x5e17fd[_0x4cec9d(0x1fe)](deployService, _0x1b18f3);
    }), _0x5e17fd[_0x38bf33(0x1f9)](after, () => {
        const _0x1c68eb = _0x38bf33;
        if (!_0x63fe43)
            return null;
        return _0x5e17fd[_0x1c68eb(0x1ff)](removeService, _0x1b18f3);
    });
    async function _0x27d830() {
        const _0xdc4f94 = _0x38bf33, _0x503b01 = await _0x5e17fd[_0xdc4f94(0x200)](awsRequest, _0x5e17fd[_0xdc4f94(0x201)], _0xdc4f94(0x202), { 'StackName': _0x1af6a8 }), _0x2017eb = _0x503b01[_0xdc4f94(0x203)][0x5 * -0x37 + -0x1aa8 + -0x1f * -0xe5][_0xdc4f94(0x204)][_0xdc4f94(0x205)](_0x5b9dd8 => _0x5b9dd8['OutputKey'] === _0xdc4f94(0x206))[_0xdc4f94(0x207)];
        return _0x2017eb;
    }
    _0x5e17fd[_0x38bf33(0x208)](describe, _0x5e17fd['ijbaq'], () => {
        const _0x355fc6 = _0x38bf33, _0xe12742 = {
                'DfTYZ': function (_0x43c5f4, _0x5da528) {
                    const _0x14d624 = _0x30c6;
                    return _0x5e17fd[_0x14d624(0x1ff)](_0x43c5f4, _0x5da528);
                },
                'LLuxN': _0x355fc6(0x209),
                'KkPwu': function (_0x26b52a, _0x3a2e5b, _0x1de9e4) {
                    const _0x969fe1 = _0x355fc6;
                    return _0x5e17fd[_0x969fe1(0x20a)](_0x26b52a, _0x3a2e5b, _0x1de9e4);
                },
                'elSMz': _0x5e17fd[_0x355fc6(0x20b)],
                'dogCD': _0x5e17fd[_0x355fc6(0x20c)],
                'JtcEz': function (_0x21aff3) {
                    const _0x34bcca = _0x355fc6;
                    return _0x5e17fd[_0x34bcca(0x20d)](_0x21aff3);
                }
            };
        let _0x1b64be;
        _0x5e17fd[_0x355fc6(0x20e)](after, () => clearTimeout(_0x1b64be)), _0x5e17fd[_0x355fc6(0x20f)](it, _0x5e17fd['kaNpk'], async () => {
            const _0x150e23 = await _0xe12742['JtcEz'](_0x27d830);
            return new Promise((_0x3f4c0b, _0xff5688) => {
                const _0xc826bb = _0x30c6, _0x5e9fe1 = {
                        'Myvnp': function (_0x3f2d89, _0x5a4774) {
                            const _0x34375a = _0x30c6;
                            return _0xe12742[_0x34375a(0x210)](_0x3f2d89, _0x5a4774);
                        },
                        'OAPmw': _0xe12742[_0xc826bb(0x211)],
                        'zaHgi': function (_0x72a5da, _0x21b4f4, _0x33c2aa) {
                            return _0xe12742['KkPwu'](_0x72a5da, _0x21b4f4, _0x33c2aa);
                        }
                    }, _0x37d0ae = new WebSocket(_0x150e23);
                _0xff5688 = (_0x16925c => _0x425c20 => {
                    const _0x33dc3d = _0xc826bb;
                    _0x5e9fe1['Myvnp'](_0x16925c, _0x425c20);
                    try {
                        _0x37d0ae[_0x33dc3d(0x212)]();
                    } catch (_0x82f74d) {
                    }
                })(_0xff5688);
                const _0x7f7858 = () => {
                    const _0x359215 = _0xc826bb;
                    log[_0x359215(0x213)](_0x359215(0x214)), _0x37d0ae['send'](JSON[_0x359215(0x215)]({
                        'action': 'hello',
                        'name': _0x5e9fe1[_0x359215(0x216)]
                    })), _0x1b64be = _0x5e9fe1[_0x359215(0x217)](setTimeout, _0x7f7858, -0x99c + -0x1494 + 0x2218);
                };
                _0x37d0ae['on'](_0xc826bb(0x218), _0xff5688), _0x37d0ae['on'](_0xe12742[_0xc826bb(0x219)], _0x7f7858), _0x37d0ae['on'](_0xc826bb(0x212), _0x3f4c0b), _0x37d0ae['on'](_0xe12742['dogCD'], _0x3bdbcb => {
                    const _0x378aa9 = _0xc826bb;
                    _0x63fe43 = !![], _0x5e9fe1[_0x378aa9(0x21a)](clearTimeout, _0x1b64be);
                    try {
                        log[_0x378aa9(0x213)](_0x378aa9(0x21b) + _0x3bdbcb), _0x5e9fe1[_0x378aa9(0x21a)](expect, _0x3bdbcb)['to'][_0x378aa9(0x21c)](_0x378aa9(0x21d));
                    } finally {
                        _0x37d0ae['close']();
                    }
                });
            })['finally'](() => clearTimeout(_0x1b64be));
        });
    }), _0x5e17fd[_0x38bf33(0x208)](describe, _0x5e17fd[_0x38bf33(0x21e)], () => {
        const _0x336492 = _0x38bf33, _0x4c6f3f = {
                'anHGE': function (_0x1c5b90, _0x1cfb68) {
                    const _0x55dced = _0x30c6;
                    return _0x5e17fd[_0x55dced(0x20e)](_0x1c5b90, _0x1cfb68);
                },
                'yenHK': _0x5e17fd[_0x336492(0x21f)],
                'tOCdV': _0x5e17fd[_0x336492(0x220)],
                'uZTDU': _0x5e17fd[_0x336492(0x20c)],
                'GnKLn': function (_0xe0e4e0, _0xf55d2f, _0x363e1b) {
                    const _0x3a3e2e = _0x336492;
                    return _0x5e17fd[_0x3a3e2e(0x208)](_0xe0e4e0, _0xf55d2f, _0x363e1b);
                },
                'yBzRU': function (_0x4e305f) {
                    return _0x5e17fd['IMlCm'](_0x4e305f);
                },
                'KkHWf': _0x336492(0x221),
                'iuEjR': function (_0x3d12c0, _0x2072b3) {
                    const _0x220549 = _0x336492;
                    return _0x5e17fd[_0x220549(0x20e)](_0x3d12c0, _0x2072b3);
                },
                'vdVIu': _0x336492(0x222),
                'RAjZm': function (_0x2121e3, _0x131867) {
                    const _0x506947 = _0x336492;
                    return _0x5e17fd[_0x506947(0x1f9)](_0x2121e3, _0x131867);
                },
                'WUGfV': function (_0x35f123, _0x2736db, _0x28540d) {
                    return _0x35f123(_0x2736db, _0x28540d);
                },
                'QLfyv': function (_0x33f5f6, _0x398409) {
                    return _0x5e17fd['iigKt'](_0x33f5f6, _0x398409);
                },
                'mjNVn': function (_0x2bdba4, _0x418dcb, _0x10ac4a) {
                    const _0x26ef90 = _0x336492;
                    return _0x5e17fd[_0x26ef90(0x208)](_0x2bdba4, _0x418dcb, _0x10ac4a);
                },
                'SQKyM': _0x5e17fd[_0x336492(0x1f8)],
                'eeHuj': function (_0x4183ae, _0x1a97ff) {
                    return _0x4183ae(_0x1a97ff);
                },
                'uNZiA': function (_0x5946cf, _0x1e8d92) {
                    return _0x5946cf(_0x1e8d92);
                },
                'lxISt': function (_0x55815e, _0x56fbeb) {
                    const _0x3d00f6 = _0x336492;
                    return _0x5e17fd[_0x3d00f6(0x1f9)](_0x55815e, _0x56fbeb);
                },
                'BxEZy': function (_0x54fcee, _0x181b82, _0x21318d) {
                    const _0x2020e1 = _0x336492;
                    return _0x5e17fd[_0x2020e1(0x208)](_0x54fcee, _0x181b82, _0x21318d);
                }
            };
        _0x5e17fd[_0x336492(0x208)](it, _0x5e17fd[_0x336492(0x223)], async function () {
            const _0x389d6e = _0x336492, _0x35731f = {
                    'MzBzi': function (_0x56fb10, _0x443fda, _0x49920) {
                        return _0x4c6f3f['GnKLn'](_0x56fb10, _0x443fda, _0x49920);
                    }
                };
            if (!_0x63fe43)
                this[_0x389d6e(0x224)]();
            const _0x14082d = await _0x4c6f3f[_0x389d6e(0x225)](_0x27d830);
            return log[_0x389d6e(0x213)]('WebSocket\x20Server\x20URL\x20' + _0x14082d), _0x4c6f3f[_0x389d6e(0x226)](expect, _0x14082d)['to'][_0x389d6e(0x227)](/wss:\/\/.+\.execute-api\..+\.amazonaws\.com.+/), new Promise((_0x292c25, _0x295b21) => {
                const _0x3c2f0e = _0x389d6e, _0x5e3b8a = {
                        'dYOGH': function (_0x1c6cfc, _0x33e7d6) {
                            return _0x4c6f3f['anHGE'](_0x1c6cfc, _0x33e7d6);
                        },
                        'iHcHp': _0x3c2f0e(0x228),
                        'jQpRz': function (_0x1fc385, _0x182681) {
                            const _0x5c2579 = _0x3c2f0e;
                            return _0x4c6f3f[_0x5c2579(0x226)](_0x1fc385, _0x182681);
                        },
                        'cGpfg': _0x4c6f3f[_0x3c2f0e(0x229)]
                    }, _0x553825 = new WebSocket(_0x14082d);
                let _0x479aed = ![];
                _0x295b21 = (_0x345a40 => _0x417032 => {
                    const _0x111e89 = _0x3c2f0e;
                    _0x479aed = !![], _0x5e3b8a[_0x111e89(0x22a)](_0x345a40, _0x417032);
                    try {
                        _0x553825['close']();
                    } catch (_0x53d457) {
                    }
                })(_0x295b21), _0x553825['on'](_0x4c6f3f['tOCdV'], _0x295b21), _0x553825['on'](_0x3c2f0e(0x1ee), () => {
                    const _0x5b6150 = _0x3c2f0e;
                    _0x35731f[_0x5b6150(0x22b)](confirmCloudWatchLogs, _0x5b6150(0x22c) + _0x1af6a8, () => {
                        const _0x37489a = _0x5b6150;
                        if (_0x479aed)
                            throw new Error(_0x5e3b8a[_0x37489a(0x22d)]);
                        return _0x553825[_0x37489a(0x22e)]('test\x20message'), _0x5e3b8a[_0x37489a(0x22f)](wait, 0xf37 + -0x6 * 0x249 + -0x73 * -0x1);
                    })[_0x5b6150(0x230)](_0x434677 => {
                        const _0x3ce46e = _0x5b6150;
                        _0x5e3b8a[_0x3ce46e(0x22f)](expect, _0x434677[_0x3ce46e(0x231)] > 0xad8 + 0xb4f + -0x1627)['to'][_0x3ce46e(0x21c)](!![]), _0x553825['close']();
                    }, _0x295b21);
                }), _0x553825['on'](_0x3c2f0e(0x212), _0x292c25), _0x553825['on'](_0x4c6f3f[_0x3c2f0e(0x232)], _0x76562e => {
                    const _0x1af1d9 = _0x3c2f0e;
                    log[_0x1af1d9(0x213)]('Unexpected\x20WebSocket\x20message', _0x76562e), _0x5e3b8a['jQpRz'](_0x295b21, new Error(_0x5e3b8a[_0x1af1d9(0x233)]));
                });
            });
        }), _0x5e17fd['gBeYl'](describe, _0x5e17fd[_0x336492(0x234)], () => {
            const _0x37f300 = _0x336492, _0x5a0734 = {
                    'zgzKL': function (_0x22e6a9, _0x39dc4d) {
                        return _0x4c6f3f['QLfyv'](_0x22e6a9, _0x39dc4d);
                    },
                    'xtFNc': function (_0x27fa10, _0x32afb6, _0x3283a6) {
                        const _0x45095f = _0x30c6;
                        return _0x4c6f3f[_0x45095f(0x235)](_0x27fa10, _0x32afb6, _0x3283a6);
                    },
                    'xDMpl': _0x4c6f3f[_0x37f300(0x236)],
                    'pDlVQ': function (_0x3fda2a, _0x1eaef6) {
                        const _0x525268 = _0x37f300;
                        return _0x4c6f3f[_0x525268(0x237)](_0x3fda2a, _0x1eaef6);
                    }
                };
            let _0x3db44b;
            _0x4c6f3f['uNZiA'](before, async function () {
                const _0x13dc5c = _0x37f300;
                if (!_0x63fe43)
                    this[_0x13dc5c(0x224)]();
                const _0x1898e0 = _0x418c85 + '-' + _0x2f80c1 + _0x13dc5c(0x238), _0x51a507 = await _0x5a0734['zgzKL'](createApi, _0x1898e0);
                return _0x3db44b = _0x51a507[_0x13dc5c(0x239)], await _0x5a0734[_0x13dc5c(0x23a)](createStage, _0x3db44b, _0x5a0734['xDMpl']), await _0x39ce16({ 'provider': { 'apiGateway': { 'websocketApiId': _0x3db44b } } }), _0x5a0734[_0x13dc5c(0x23b)](deployService, _0x1b18f3);
            }), _0x4c6f3f[_0x37f300(0x23c)](after, async () => {
                const _0x26f243 = _0x37f300, _0x1eb701 = _0x4c6f3f['KkHWf']['split']('|');
                let _0x3557fb = -0x150 + -0x68 * -0x5 + -0xb8;
                while (!![]) {
                    switch (_0x1eb701[_0x3557fb++]) {
                    case '0':
                        await _0x4c6f3f[_0x26f243(0x23d)](deployService, _0x1b18f3);
                        continue;
                    case '1':
                        await deleteApi(_0x3db44b);
                        continue;
                    case '2':
                        if (!_0x63fe43)
                            return;
                        continue;
                    case '3':
                        log[_0x26f243(0x213)](_0x4c6f3f[_0x26f243(0x23e)]);
                        continue;
                    case '4':
                        await _0x4c6f3f[_0x26f243(0x23f)](_0x39ce16, { 'provider': { 'apiGateway': { 'websocketApiId': null } } });
                        continue;
                    case '5':
                        await _0x4c6f3f[_0x26f243(0x240)](deleteStage, _0x3db44b, 'dev');
                        continue;
                    }
                    break;
                }
            }), _0x4c6f3f[_0x37f300(0x241)](it, 'should\x20add\x20the\x20routes\x20to\x20the\x20referenced\x20API', async () => {
                const _0x233c70 = _0x37f300, _0x243fcc = await _0x5a0734[_0x233c70(0x23b)](getRoutes, _0x3db44b);
                _0x5a0734[_0x233c70(0x23b)](expect, _0x243fcc[_0x233c70(0x231)])['to'][_0x233c70(0x21c)](-0xa9e + -0x4 * 0x87 + -0x1d2 * -0x7);
            });
        });
    });
});
