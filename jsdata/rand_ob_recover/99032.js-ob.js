const WebSocket = require('ws'), {expect} = require(_0x107c77(482)), awsRequest = require(_0x107c77(483)), log = require(_0x107c77(484))[_0x107c77(485)](_0x107c77(486)), wait = require(_0x107c77(487)), fixtures = require(_0x107c77(488)), {confirmCloudWatchLogs} = require(_0x107c77(489)), {deployService, removeService} = require('../../utils/integration'), {createApi, deleteApi, getRoutes, createStage, deleteStage} = require(_0x107c77(490));
function _0x30c6(_0x4cbe07, _0x52cdf4) {
    return _0x30c6 = function (_0x160276, _0x5d7011) {
        _0x160276 = _0x160276 - (-9408 + -4348 + 14226);
        let _0x14840e = _0x11bc[_0x160276];
        return _0x14840e;
    }, _0x30c6(_0x4cbe07, _0x52cdf4);
}
describe(_0x107c77(491), function () {
    const _0x38bf33 = _0x107c77, _0x5e17fd = {
            'YCNkw': _0x38bf33(492),
            'vgKyk': function (_0x19abbb, _0x23c098) {
                return _0x19abbb(_0x23c098);
            },
            'swsIE': function (_0x19370d, _0x196123) {
                return _0x19370d(_0x196123);
            },
            'LTpEi': function (_0x378360, _0x5e197a, _0x17d18c, _0x57261a) {
                return _0x378360(_0x5e197a, _0x17d18c, _0x57261a);
            },
            'pdJQo': _0x38bf33(493),
            'hZCSK': function (_0x813af4, _0x27d2e9, _0x3218a4) {
                return _0x813af4(_0x27d2e9, _0x3218a4);
            },
            'stMIr': _0x38bf33(494),
            'wKveJ': _0x38bf33(495),
            'efMJL': function (_0x49aab8) {
                return _0x49aab8();
            },
            'PyoRA': function (_0x43390d, _0x2c5923) {
                return _0x43390d(_0x2c5923);
            },
            'tCoZI': function (_0x143d05, _0x41ec29, _0x8d1cce) {
                return _0x143d05(_0x41ec29, _0x8d1cce);
            },
            'kaNpk': _0x38bf33(496),
            'qvZsI': 'Unexpected message',
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
            'pGlQv': _0x38bf33(497),
            'xOkXu': _0x38bf33(498),
            'ZmUkE': _0x38bf33(499),
            'LuqfC': function (_0x3cb528, _0x541ea6) {
                return _0x3cb528 * _0x541ea6;
            },
            'ijbaq': _0x38bf33(500),
            'dqYlk': _0x38bf33(501)
        };
    this[_0x38bf33(502)](_0x5e17fd[_0x38bf33(503)](-2627 * -1 + 1958 + -15 * 239, 1 * 3253 + -37 * -26 + -4155) * (-3859 + -24 * -257 + 11 * -209));
    let _0x1af6a8, _0x2f80c1, _0x1b18f3, _0x39ce16, _0x63fe43;
    const _0x418c85 = _0x5e17fd[_0x38bf33(504)];
    _0x5e17fd[_0x38bf33(505)](before, async () => {
        const _0x4cec9d = _0x38bf33, _0x2bc0c8 = await fixtures[_0x4cec9d(506)](_0x5e17fd[_0x4cec9d(507)]);
        return {
            servicePath: _0x1b18f3,
            updateConfig: _0x39ce16
        } = _0x2bc0c8, _0x2f80c1 = _0x2bc0c8[_0x4cec9d(508)][_0x4cec9d(509)], _0x1af6a8 = _0x2f80c1 + '-' + _0x418c85, _0x5e17fd[_0x4cec9d(510)](deployService, _0x1b18f3);
    }), _0x5e17fd[_0x38bf33(505)](after, () => {
        const _0x1c68eb = _0x38bf33;
        if (!_0x63fe43)
            return null;
        return _0x5e17fd[_0x1c68eb(511)](removeService, _0x1b18f3);
    });
    async function _0x27d830() {
        const _0xdc4f94 = _0x38bf33, _0x503b01 = await _0x5e17fd[_0xdc4f94(512)](awsRequest, _0x5e17fd[_0xdc4f94(513)], _0xdc4f94(514), { 'StackName': _0x1af6a8 }), _0x2017eb = _0x503b01[_0xdc4f94(515)][5 * -55 + -6824 + -31 * -229][_0xdc4f94(516)][_0xdc4f94(517)](_0x5b9dd8 => _0x5b9dd8['OutputKey'] === _0xdc4f94(518))[_0xdc4f94(519)];
        return _0x2017eb;
    }
    _0x5e17fd[_0x38bf33(520)](describe, _0x5e17fd['ijbaq'], () => {
        const _0x355fc6 = _0x38bf33, _0xe12742 = {
                'DfTYZ': function (_0x43c5f4, _0x5da528) {
                    const _0x14d624 = _0x30c6;
                    return _0x5e17fd[_0x14d624(511)](_0x43c5f4, _0x5da528);
                },
                'LLuxN': _0x355fc6(521),
                'KkPwu': function (_0x26b52a, _0x3a2e5b, _0x1de9e4) {
                    const _0x969fe1 = _0x355fc6;
                    return _0x5e17fd[_0x969fe1(522)](_0x26b52a, _0x3a2e5b, _0x1de9e4);
                },
                'elSMz': _0x5e17fd[_0x355fc6(523)],
                'dogCD': _0x5e17fd[_0x355fc6(524)],
                'JtcEz': function (_0x21aff3) {
                    const _0x34bcca = _0x355fc6;
                    return _0x5e17fd[_0x34bcca(525)](_0x21aff3);
                }
            };
        let _0x1b64be;
        _0x5e17fd[_0x355fc6(526)](after, () => clearTimeout(_0x1b64be)), _0x5e17fd[_0x355fc6(527)](it, _0x5e17fd['kaNpk'], async () => {
            const _0x150e23 = await _0xe12742['JtcEz'](_0x27d830);
            return new Promise((_0x3f4c0b, _0xff5688) => {
                const _0xc826bb = _0x30c6, _0x5e9fe1 = {
                        'Myvnp': function (_0x3f2d89, _0x5a4774) {
                            const _0x34375a = _0x30c6;
                            return _0xe12742[_0x34375a(528)](_0x3f2d89, _0x5a4774);
                        },
                        'OAPmw': _0xe12742[_0xc826bb(529)],
                        'zaHgi': function (_0x72a5da, _0x21b4f4, _0x33c2aa) {
                            return _0xe12742['KkPwu'](_0x72a5da, _0x21b4f4, _0x33c2aa);
                        }
                    }, _0x37d0ae = new WebSocket(_0x150e23);
                _0xff5688 = (_0x16925c => _0x425c20 => {
                    const _0x33dc3d = _0xc826bb;
                    _0x5e9fe1['Myvnp'](_0x16925c, _0x425c20);
                    try {
                        _0x37d0ae[_0x33dc3d(530)]();
                    } catch (_0x82f74d) {
                    }
                })(_0xff5688);
                const _0x7f7858 = () => {
                    const _0x359215 = _0xc826bb;
                    log[_0x359215(531)](_0x359215(532)), _0x37d0ae['send'](JSON[_0x359215(533)]({
                        'action': 'hello',
                        'name': _0x5e9fe1[_0x359215(534)]
                    })), _0x1b64be = _0x5e9fe1[_0x359215(535)](setTimeout, _0x7f7858, -2460 + -5268 + 8728);
                };
                _0x37d0ae['on'](_0xc826bb(536), _0xff5688), _0x37d0ae['on'](_0xe12742[_0xc826bb(537)], _0x7f7858), _0x37d0ae['on'](_0xc826bb(530), _0x3f4c0b), _0x37d0ae['on'](_0xe12742['dogCD'], _0x3bdbcb => {
                    const _0x378aa9 = _0xc826bb;
                    _0x63fe43 = !![], _0x5e9fe1[_0x378aa9(538)](clearTimeout, _0x1b64be);
                    try {
                        log[_0x378aa9(531)](_0x378aa9(539) + _0x3bdbcb), _0x5e9fe1[_0x378aa9(538)](expect, _0x3bdbcb)['to'][_0x378aa9(540)](_0x378aa9(541));
                    } finally {
                        _0x37d0ae['close']();
                    }
                });
            })['finally'](() => clearTimeout(_0x1b64be));
        });
    }), _0x5e17fd[_0x38bf33(520)](describe, _0x5e17fd[_0x38bf33(542)], () => {
        const _0x336492 = _0x38bf33, _0x4c6f3f = {
                'anHGE': function (_0x1c5b90, _0x1cfb68) {
                    const _0x55dced = _0x30c6;
                    return _0x5e17fd[_0x55dced(526)](_0x1c5b90, _0x1cfb68);
                },
                'yenHK': _0x5e17fd[_0x336492(543)],
                'tOCdV': _0x5e17fd[_0x336492(544)],
                'uZTDU': _0x5e17fd[_0x336492(524)],
                'GnKLn': function (_0xe0e4e0, _0xf55d2f, _0x363e1b) {
                    const _0x3a3e2e = _0x336492;
                    return _0x5e17fd[_0x3a3e2e(520)](_0xe0e4e0, _0xf55d2f, _0x363e1b);
                },
                'yBzRU': function (_0x4e305f) {
                    return _0x5e17fd['IMlCm'](_0x4e305f);
                },
                'KkHWf': _0x336492(545),
                'iuEjR': function (_0x3d12c0, _0x2072b3) {
                    const _0x220549 = _0x336492;
                    return _0x5e17fd[_0x220549(526)](_0x3d12c0, _0x2072b3);
                },
                'vdVIu': _0x336492(546),
                'RAjZm': function (_0x2121e3, _0x131867) {
                    const _0x506947 = _0x336492;
                    return _0x5e17fd[_0x506947(505)](_0x2121e3, _0x131867);
                },
                'WUGfV': function (_0x35f123, _0x2736db, _0x28540d) {
                    return _0x35f123(_0x2736db, _0x28540d);
                },
                'QLfyv': function (_0x33f5f6, _0x398409) {
                    return _0x5e17fd['iigKt'](_0x33f5f6, _0x398409);
                },
                'mjNVn': function (_0x2bdba4, _0x418dcb, _0x10ac4a) {
                    const _0x26ef90 = _0x336492;
                    return _0x5e17fd[_0x26ef90(520)](_0x2bdba4, _0x418dcb, _0x10ac4a);
                },
                'SQKyM': _0x5e17fd[_0x336492(504)],
                'eeHuj': function (_0x4183ae, _0x1a97ff) {
                    return _0x4183ae(_0x1a97ff);
                },
                'uNZiA': function (_0x5946cf, _0x1e8d92) {
                    return _0x5946cf(_0x1e8d92);
                },
                'lxISt': function (_0x55815e, _0x56fbeb) {
                    const _0x3d00f6 = _0x336492;
                    return _0x5e17fd[_0x3d00f6(505)](_0x55815e, _0x56fbeb);
                },
                'BxEZy': function (_0x54fcee, _0x181b82, _0x21318d) {
                    const _0x2020e1 = _0x336492;
                    return _0x5e17fd[_0x2020e1(520)](_0x54fcee, _0x181b82, _0x21318d);
                }
            };
        _0x5e17fd[_0x336492(520)](it, _0x5e17fd[_0x336492(547)], async function () {
            const _0x389d6e = _0x336492, _0x35731f = {
                    'MzBzi': function (_0x56fb10, _0x443fda, _0x49920) {
                        return _0x4c6f3f['GnKLn'](_0x56fb10, _0x443fda, _0x49920);
                    }
                };
            if (!_0x63fe43)
                this[_0x389d6e(548)]();
            const _0x14082d = await _0x4c6f3f[_0x389d6e(549)](_0x27d830);
            return log[_0x389d6e(531)]('WebSocket Server URL ' + _0x14082d), _0x4c6f3f[_0x389d6e(550)](expect, _0x14082d)['to'][_0x389d6e(551)](/wss:\/\/.+\.execute-api\..+\.amazonaws\.com.+/), new Promise((_0x292c25, _0x295b21) => {
                const _0x3c2f0e = _0x389d6e, _0x5e3b8a = {
                        'dYOGH': function (_0x1c6cfc, _0x33e7d6) {
                            return _0x4c6f3f['anHGE'](_0x1c6cfc, _0x33e7d6);
                        },
                        'iHcHp': _0x3c2f0e(552),
                        'jQpRz': function (_0x1fc385, _0x182681) {
                            const _0x5c2579 = _0x3c2f0e;
                            return _0x4c6f3f[_0x5c2579(550)](_0x1fc385, _0x182681);
                        },
                        'cGpfg': _0x4c6f3f[_0x3c2f0e(553)]
                    }, _0x553825 = new WebSocket(_0x14082d);
                let _0x479aed = ![];
                _0x295b21 = (_0x345a40 => _0x417032 => {
                    const _0x111e89 = _0x3c2f0e;
                    _0x479aed = !![], _0x5e3b8a[_0x111e89(554)](_0x345a40, _0x417032);
                    try {
                        _0x553825['close']();
                    } catch (_0x53d457) {
                    }
                })(_0x295b21), _0x553825['on'](_0x4c6f3f['tOCdV'], _0x295b21), _0x553825['on'](_0x3c2f0e(494), () => {
                    const _0x5b6150 = _0x3c2f0e;
                    _0x35731f[_0x5b6150(555)](confirmCloudWatchLogs, _0x5b6150(556) + _0x1af6a8, () => {
                        const _0x37489a = _0x5b6150;
                        if (_0x479aed)
                            throw new Error(_0x5e3b8a[_0x37489a(557)]);
                        return _0x553825[_0x37489a(558)]('test message'), _0x5e3b8a[_0x37489a(559)](wait, 3895 + -6 * 585 + -115 * -1);
                    })[_0x5b6150(560)](_0x434677 => {
                        const _0x3ce46e = _0x5b6150;
                        _0x5e3b8a[_0x3ce46e(559)](expect, _0x434677[_0x3ce46e(561)] > 2776 + 2895 + -5671)['to'][_0x3ce46e(540)](!![]), _0x553825['close']();
                    }, _0x295b21);
                }), _0x553825['on'](_0x3c2f0e(530), _0x292c25), _0x553825['on'](_0x4c6f3f[_0x3c2f0e(562)], _0x76562e => {
                    const _0x1af1d9 = _0x3c2f0e;
                    log[_0x1af1d9(531)]('Unexpected WebSocket message', _0x76562e), _0x5e3b8a['jQpRz'](_0x295b21, new Error(_0x5e3b8a[_0x1af1d9(563)]));
                });
            });
        }), _0x5e17fd['gBeYl'](describe, _0x5e17fd[_0x336492(564)], () => {
            const _0x37f300 = _0x336492, _0x5a0734 = {
                    'zgzKL': function (_0x22e6a9, _0x39dc4d) {
                        return _0x4c6f3f['QLfyv'](_0x22e6a9, _0x39dc4d);
                    },
                    'xtFNc': function (_0x27fa10, _0x32afb6, _0x3283a6) {
                        const _0x45095f = _0x30c6;
                        return _0x4c6f3f[_0x45095f(565)](_0x27fa10, _0x32afb6, _0x3283a6);
                    },
                    'xDMpl': _0x4c6f3f[_0x37f300(566)],
                    'pDlVQ': function (_0x3fda2a, _0x1eaef6) {
                        const _0x525268 = _0x37f300;
                        return _0x4c6f3f[_0x525268(567)](_0x3fda2a, _0x1eaef6);
                    }
                };
            let _0x3db44b;
            _0x4c6f3f['uNZiA'](before, async function () {
                const _0x13dc5c = _0x37f300;
                if (!_0x63fe43)
                    this[_0x13dc5c(548)]();
                const _0x1898e0 = _0x418c85 + '-' + _0x2f80c1 + _0x13dc5c(568), _0x51a507 = await _0x5a0734['zgzKL'](createApi, _0x1898e0);
                return _0x3db44b = _0x51a507[_0x13dc5c(569)], await _0x5a0734[_0x13dc5c(570)](createStage, _0x3db44b, _0x5a0734['xDMpl']), await _0x39ce16({ 'provider': { 'apiGateway': { 'websocketApiId': _0x3db44b } } }), _0x5a0734[_0x13dc5c(571)](deployService, _0x1b18f3);
            }), _0x4c6f3f[_0x37f300(572)](after, async () => {
                const _0x26f243 = _0x37f300, _0x1eb701 = _0x4c6f3f['KkHWf']['split']('|');
                let _0x3557fb = -336 + -104 * -5 + -184;
                while (!![]) {
                    switch (_0x1eb701[_0x3557fb++]) {
                    case '0':
                        await _0x4c6f3f[_0x26f243(573)](deployService, _0x1b18f3);
                        continue;
                    case '1':
                        await deleteApi(_0x3db44b);
                        continue;
                    case '2':
                        if (!_0x63fe43)
                            return;
                        continue;
                    case '3':
                        log[_0x26f243(531)](_0x4c6f3f[_0x26f243(574)]);
                        continue;
                    case '4':
                        await _0x4c6f3f[_0x26f243(575)](_0x39ce16, { 'provider': { 'apiGateway': { 'websocketApiId': null } } });
                        continue;
                    case '5':
                        await _0x4c6f3f[_0x26f243(576)](deleteStage, _0x3db44b, 'dev');
                        continue;
                    }
                    break;
                }
            }), _0x4c6f3f[_0x37f300(577)](it, 'should add the routes to the referenced API', async () => {
                const _0x233c70 = _0x37f300, _0x243fcc = await _0x5a0734[_0x233c70(571)](getRoutes, _0x3db44b);
                _0x5a0734[_0x233c70(571)](expect, _0x243fcc[_0x233c70(561)])['to'][_0x233c70(540)](-2718 + -4 * 135 + -466 * -7);
            });
        });
    });
});