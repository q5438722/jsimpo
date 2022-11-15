const _0x460a = ['KZsBe', 'writeFileAsync', 'zIlqh', 'eZrKJ', 'writeJsonAsync', 'rejects', 'rGjVE', 'xVspL', 'ensureDirAsync', 'vsYWl', 'SJuXI', 'Vnmkp', 'resolves', 'all', 'readJsonAsync', 'sALmn', 'tGnPr', 'Ponyq', 'cdxQi', 'SXnOZ', 'grXpM', 'unlocks file even if reading fails', 'CempM', 'KduGs', 'gOEyP', 'callsFake', 'delay', 'withArgs', 'OdEiM', 'returns', 'KNoOU', '#set', 'qpHQF', 'gbhHl', 'fUaEy', 'ThrUu', 'wSPau', 'oLDqy', 'RUuSl', 'NIimb', 'QhDoc', 'AQbFX', 'VdNGk', 'afCuv', 'VxbAL', 'qkwFI', 'ZYfig', 'KASky', 'sMMCS', 'ucftd', 'VecxW', 'sets values for object', 'ySeTE', 'pGLLS', 'smShQ', 'sOrco', 'tXPGy', 'XnERG', 'eUDmX', 'VJYSD', 'readFileAsync', 'nmIyD', 'KMJyE', 'parse', 'JhdjP', 'ayoMJ', 'MQjzx', 'ZptbU', 'gMKdK', 'unlocks file when finished writing', 'TWPoD', 'HrxOd', 'NkhdI', 'UIqIp', 'BDkGs', 'remove', 'statAsync', 'XFLkh', 'BUKXc', 'clxJj', 'vXeYO', 'hbqtf', 'jImcf', 'should have caught!', 'message', '1sZeYIx', '431771rZbRMd', '1149zleJVA', '56eXlNCi', '2vMooIs', '40651CCKfjZ', '5JcODdp', '89818pKAVgb', '1279280eXjfNb', '485015IpAvBF', '679529kzkMgl', '../spec_helper', 'path', 'bluebird', 'promisifyAll', 'lib/util/fs', 'lib/util/env', 'lib/util/exit', 'lib/util/file', 'file.json', 'Must specify path to file when creating new FileUtil()', 'ensure', 'items', 'bar', 'foo', 'unlockAsync', 'foo.baz', 'lockAsync', 'fail!', 'FILE_UNLOCK_TIMEOUT', 'resolves entire object if given no key', 'resolves value for key when one is set', 'resolves undefined if value is undefined', 'resolves empty object when contents file does not exist', 'resolves empty object when contents file is empty', 'resolves empty object when it can\'t get lock on file on initial read', 'resolves empty object when contents file has invalid json', 'debounces reading from disk', 'locks file while reading', 'unlocks file when finished reading', 'lolz', 'Expected `key` to be of type `string` or `object`, got `number`', 'qux', 'utf8', 'leaves existing values alone', 'updates file on disk', 'locks file while writing', 'locks file while removing', 'unlocks file when finished removing', 'unlocks file even if removing fails', '#transaction', '#get', '#remove', 'join', 'tmpdir', 'cypress', 'file_spec', 'dir', 'removeAsync', 'catch', 'mqSpR', 'itogq', 'MTKwE', 'throw', 'KxFZL', 'AGdMC', 'LtkMD', 'unlockSync', 'called', 'stub', 'spy', 'yield', 'fiSke', 'ZAsSU', 'EEJuI', 'fileUtil', 'HuYME', 'JizMf', 'transaction', 'get', 'then', 'iDcLC', 'concat', 'set', 'kdnVS', 'FYdSL', 'eql', 'swuWC', 'baz', 'QyRGQ', 'NnBoB', 'UMOSO', 'KipBO', 'qnYpt', 'EEXIST', 'IRGuP', 'PDmyy', 'gCeDm', 'YrsdG', 'dTOgk', 'OGksk', 'equal', 'wPkhF', 'OUjOA', 'VPrOT', 'sqqHQ', 'AFVuC', 'XxrXM', 'wnpCl', 'ieytt', 'YfADs', 'undefined', 'sOIzO', 'cGRPq', 'aKfTr', 'xVCii', 'cfeJN', 'Jahsv'];
const _0x54382e = _0x3434;

(function (_0x5e9453, _0x1b368d) {
    const _0x5cb364 = _0x3434;

    while (true) {
        try {
            const _0x1db37d = -parseInt(_0x5cb364(0x88)) * parseInt(_0x5cb364(0x89)) + parseInt(_0x5cb364(0x8a)) * parseInt(_0x5cb364(0x8b)) + parseInt(_0x5cb364(0x8c)) * parseInt(_0x5cb364(0x8d)) + parseInt(_0x5cb364(0x8e)) * -parseInt(_0x5cb364(0x8f)) + parseInt(_0x5cb364(0x90)) + -parseInt(_0x5cb364(0x91)) + parseInt(_0x5cb364(0x92));

            if (_0x1db37d === _0x1b368d) break;else _0x5e9453.push(_0x5e9453.shift());
        } catch (_0x43f8ac) {
            _0x5e9453.push(_0x5e9453.shift());
        }
    }
})(_0x460a, 738579), require(_0x54382e(0x93));

const os = require('os');

const path = require(_0x54382e(0x94));

const Promise = require(_0x54382e(0x95));

const lockFile = Promise[_0x54382e(0x96)](require('lockfile'));

var { fs } = require(root + _0x54382e(0x97));

const env = require(root + _0x54382e(0x98));

const exit = require(root + _0x54382e(0x99));

const FileUtil = require(root + _0x54382e(0x9a));

function _0x3434(_0x13f464, _0x5c7b58) {
    return _0x3434 = function (_0x40ae05, _0x5b561c) {
        _0x40ae05 = _0x40ae05 - 136;
        const _0x1577e9 = _0x460a[_0x40ae05];

        return _0x1577e9;
    }, _0x3434(_0x13f464, _0x5c7b58);
}
describe(_0x54382e(0x9a), () => {
    const _0x4e98d7 = _0x54382e;
    const _0x12b76f = {
        'ThrUu': _0x4e98d7(0x9b),
        'MTKwE': function (_0x1e1a0c, _0x204054) {
            return _0x1e1a0c(_0x204054);
        },
        'KxFZL': _0x4e98d7(0x9c),
        'LtkMD': '3|2|0|4|1',
        'kTJNh': _0x4e98d7(0x9d),
        'xxiFj': 'unlockSync',
        'ZAsSU': _0x4e98d7(0x9e),
        'EEJuI': 'baz',
        'HuYME': function (_0x43096f, _0x4d0625, _0x5ac6e6) {
            return _0x43096f(_0x4d0625, _0x5ac6e6);
        },
        'JizMf': 'ensures returned promise completely resolves before moving on with queue',
        'UMOSO': _0x4e98d7(0x9f),
        'KipBO': _0x4e98d7(0xa0),
        'XxrXM': 'default',
        'tGnPr': function (_0x58eb8a, _0x3e5e25) {
            return _0x58eb8a(_0x3e5e25);
        },
        'SXnOZ': function (_0x32e701, _0x2564fd) {
            return _0x32e701(_0x2564fd);
        },
        'grXpM': _0x4e98d7(0xa1),
        'NnBoB': function (_0x2e5956, _0x122b3d) {
            return _0x2e5956(_0x122b3d);
        },
        'lxdXJ': _0x4e98d7(0xa2),
        'qnYpt': function (_0x4b399a, _0x1c7a67) {
            return _0x4b399a(_0x1c7a67);
        },
        'MQjzx': _0x4e98d7(0xa3),
        'PDmyy': function (_0x286e57, _0x389bd4) {
            return _0x286e57(_0x389bd4);
        },
        'tiIXP': 'readJsonAsync',
        'RUuSl': _0x4e98d7(0xa4),
        'IRGuP': _0x4e98d7(0xa5),
        'gCeDm': _0x4e98d7(0xa6),
        'YrsdG': function (_0x263b06, _0x2fdf41, _0x4851c3) {
            return _0x263b06(_0x2fdf41, _0x4851c3);
        },
        'fWVtI': _0x4e98d7(0xa7),
        'oAUTU': 'resolves value for path when one is set',
        'wyOBr': function (_0x38a83f, _0x21ee00, _0x144097) {
            return _0x38a83f(_0x21ee00, _0x144097);
        },
        'AFVuC': 'resolves default value if given key is undefined',
        'ieytt': _0x4e98d7(0xa8),
        'sOIzO': function (_0x1cc59e, _0x43cd8f, _0x17b8b0) {
            return _0x1cc59e(_0x43cd8f, _0x17b8b0);
        },
        'cGRPq': 'resolves null if value is null',
        'xVCii': function (_0x24b000, _0x2cc7b3, _0x4eed2a) {
            return _0x24b000(_0x2cc7b3, _0x4eed2a);
        },
        'cfeJN': _0x4e98d7(0xa9),
        'ZuwlC': function (_0x48e379, _0x5a2f4d, _0x1b5819) {
            return _0x48e379(_0x5a2f4d, _0x1b5819);
        },
        'KZsBe': _0x4e98d7(0xaa),
        'eZrKJ': function (_0x6775d3, _0x3fc5fc, _0x5df087) {
            return _0x6775d3(_0x3fc5fc, _0x5df087);
        },
        'RLkMj': _0x4e98d7(0xab),
        'mKtSv': _0x4e98d7(0xac),
        'SJuXI': _0x4e98d7(0xad),
        'sALmn': _0x4e98d7(0xae),
        'cdxQi': function (_0xf14951, _0x182848, _0x4add83) {
            return _0xf14951(_0x182848, _0x4add83);
        },
        'hRzze': _0x4e98d7(0xaf),
        'gOEyP': function (_0x475a1d, _0x144a0c, _0x49737d) {
            return _0x475a1d(_0x144a0c, _0x49737d);
        },
        'BVeRY': 'times out and carries on if unlocking times out',
        'ySeTE': _0x4e98d7(0xb0),
        'qpHQF': function (_0x4f62de, _0x13c9eb) {
            return _0x4f62de(_0x13c9eb);
        },
        'LpLwg': _0x4e98d7(0xb1),
        'gbhHl': function (_0x3071f5, _0x349170) {
            return _0x3071f5(_0x349170);
        },
        'fUaEy': _0x4e98d7(0xb2),
        'tyNid': _0x4e98d7(0xb3),
        'wSPau': function (_0x26db16, _0x1bb717) {
            return _0x26db16(_0x1bb717);
        },
        'oLDqy': 'outputJsonAsync',
        'BDkGs': function (_0x4c4b77, _0x5416a0) {
            return _0x4c4b77(_0x5416a0);
        },
        'NIimb': 'throws if 1st argument is not a string or plain object',
        'afCuv': 'sets value for given key',
        'ZYfig': 'sets value for given path',
        'VecxW': function (_0x58713a, _0x5c01e0, _0x5cdb3) {
            return _0x58713a(_0x5c01e0, _0x5cdb3);
        },
        'RrqYa': function (_0x167840, _0x3d5f11, _0xb1e730) {
            return _0x167840(_0x3d5f11, _0xb1e730);
        },
        'pGLLS': _0x4e98d7(0xb4),
        'VJYSD': function (_0x1db0c9, _0x25a319, _0x3624d5) {
            return _0x1db0c9(_0x25a319, _0x3624d5);
        },
        'qaOyP': _0x4e98d7(0xb5),
        'ayoMJ': _0x4e98d7(0xb6),
        'gMKdK': function (_0x200271, _0x38e087, _0x4dde62) {
            return _0x200271(_0x38e087, _0x4dde62);
        },
        'NkhdI': 'unlocks file even if writing fails',
        'XFLkh': _0x4e98d7(0xb7),
        'clxJj': _0x4e98d7(0xb8),
        'jImcf': _0x4e98d7(0xb9),
        'mqSpR': function (_0x3b8632, _0x3fdf2e, _0x56b45a) {
            return _0x3b8632(_0x3fdf2e, _0x56b45a);
        },
        'itogq': 'throws if path is not specified',
        'AGdMC': 'unlocks file on exit',
        'GsVVi': function (_0x2d4637, _0x1c3b26, _0x422b50) {
            return _0x2d4637(_0x1c3b26, _0x422b50);
        },
        'fiSke': _0x4e98d7(0xba),
        'KNoOU': function (_0x480085, _0x2653a3, _0x28b7a7) {
            return _0x480085(_0x2653a3, _0x28b7a7);
        },
        'QyRGQ': _0x4e98d7(0xbb),
        'UIqIp': _0x4e98d7(0xbc)
    };

    beforeEach(function () {
        const _0x61997a = _0x4e98d7;

        return this['dir'] = path[_0x61997a(0xbd)](os[_0x61997a(0xbe)](), _0x61997a(0xbf), _0x61997a(0xc0)), this['path'] = path.join(this[_0x61997a(0xc1)], _0x12b76f.ThrUu), fs[_0x61997a(0xc2)](this[_0x61997a(0xc1)])[_0x61997a(0xc3)](() => {});
    }), _0x12b76f[_0x4e98d7(0xc4)](it, _0x12b76f[_0x4e98d7(0xc5)], () => {
        const _0x3d604f = _0x4e98d7;

        _0x12b76f[_0x3d604f(0xc6)](expect, () => {
            return new FileUtil();
        }).to[_0x3d604f(0xc7)](_0x12b76f[_0x3d604f(0xc8)]);
    }), _0x12b76f[_0x4e98d7(0xc4)](it, _0x12b76f[_0x4e98d7(0xc9)], function () {
        const _0x4650c4 = _0x4e98d7;

        const _0x50b260 = _0x12b76f[_0x4650c4(0xca)].split('|');

        var _0x2bf3d1 = 0;

        while (true) {
            switch (_0x50b260[_0x2bf3d1++]) {
                case '0':
                    new FileUtil({ 'path': this[_0x4650c4(0x94)] });
                    continue;
                case '1':
                    _0x12b76f[_0x4650c4(0xc6)](expect, lockFile[_0x4650c4(0xcb)]).to.be[_0x4650c4(0xcc)];
                    continue;
                case '2':
                    sinon[_0x4650c4(0xcd)](exit, _0x12b76f.kTJNh);
                    continue;
                case '3':
                    sinon[_0x4650c4(0xce)](lockFile, _0x12b76f.xxiFj);
                    continue;
                case '4':
                    exit[_0x4650c4(0x9d)][_0x4650c4(0xcf)]();
                    continue;
            }
            break;
        }
    }), _0x12b76f.GsVVi(context, _0x12b76f[_0x4e98d7(0xd0)], () => {
        const _0x4741d8 = _0x4e98d7;
        const _0x1f0b66 = {
            'iDcLC': _0x12b76f[_0x4741d8(0xd1)],
            'RXFJM': _0x12b76f[_0x4741d8(0xd2)]
        };

        beforeEach(function () {
            const _0x6b817e = _0x4741d8;

            this[_0x6b817e(0xd3)] = new FileUtil({ 'path': this[_0x6b817e(0x94)] });
        }), _0x12b76f[_0x4741d8(0xd4)](it, _0x12b76f[_0x4741d8(0xd5)], function () {
            const _0x5e9606 = _0x4741d8;
            const _0x3d865d = { 'bOyJK': _0x12b76f[_0x5e9606(0xd1)] };

            return Promise.all([this[_0x5e9606(0xd3)][_0x5e9606(0xd6)](_0x3e4ba3 => {
                const _0x45d666 = _0x5e9606;

                return _0x3e4ba3[_0x45d666(0xd7)](_0x45d666(0x9e), [])[_0x45d666(0xd8)](_0x114d21 => {
                    const _0x3d0f07 = _0x45d666;

                    return _0x3e4ba3.set(_0x3d0f07(0x9e), _0x114d21.concat(_0x3d0f07(0xa0)));
                });
            }), this.fileUtil[_0x5e9606(0xd6)](_0xfdc853 => {
                const _0x5289b6 = _0x5e9606;

                return _0xfdc853[_0x5289b6(0xd7)](_0x1f0b66[_0x5289b6(0xd9)], [])[_0x5289b6(0xd8)](_0x37e28f => {
                    const _0x25b1ba = _0x5289b6;

                    return _0xfdc853.set('items', _0x37e28f[_0x25b1ba(0xda)](_0x25b1ba(0x9f)));
                });
            }), this[_0x5e9606(0xd3)][_0x5e9606(0xd6)](_0x45a729 => {
                const _0x5c61d8 = _0x5e9606;
                const _0x466bb2 = {
                    'fEiuU': _0x5c61d8(0x9e),
                    'kdnVS': _0x1f0b66.RXFJM
                };

                return _0x45a729[_0x5c61d8(0xd7)](_0x1f0b66.iDcLC, []).then(_0x1832a6 => {
                    const _0x28c494 = _0x5c61d8;

                    return _0x45a729[_0x28c494(0xdb)](_0x466bb2.fEiuU, _0x1832a6[_0x28c494(0xda)](_0x466bb2[_0x28c494(0xdc)]));
                });
            })])[_0x5e9606(0xd8)](() => {
                const _0x244658 = _0x5e9606;
                const _0x363231 = {
                    'FYdSL': function (_0x578132, _0x45af1c) {
                        return _0x578132(_0x45af1c);
                    },
                    'swuWC': _0x244658(0x9f)
                };

                return this.fileUtil[_0x244658(0xd6)](_0x388d11 => {
                    const _0x49beea = _0x244658;

                    return _0x388d11.get(_0x3d865d.bOyJK)[_0x49beea(0xd8)](_0x262ca4 => {
                        const _0x5a76f1 = _0x49beea;

                        _0x363231[_0x5a76f1(0xdd)](expect, _0x262ca4).to[_0x5a76f1(0xde)](['foo', _0x363231[_0x5a76f1(0xdf)], _0x5a76f1(0xe0)]);
                    });
                });
            });
        });
    }), _0x12b76f.KNoOU(context, _0x12b76f[_0x4e98d7(0xe1)], () => {
        const _0x38e8a0 = _0x4e98d7;
        const _0x215ab0 = {
            'wnpCl': function (_0x5362ae, _0x3568d3) {
                const _0x5a5db8 = _0x3434;

                return _0x12b76f[_0x5a5db8(0xe2)](_0x5362ae, _0x3568d3);
            },
            'OUjOA': _0x12b76f.lxdXJ,
            'VPrOT': _0x12b76f[_0x38e8a0(0xe3)],
            'YfADs': _0x12b76f[_0x38e8a0(0xe4)],
            'aKfTr': function (_0x141687, _0x56f899) {
                const _0x552614 = _0x38e8a0;

                return _0x12b76f[_0x552614(0xe5)](_0x141687, _0x56f899);
            },
            'rGjVE': _0x12b76f.MQjzx,
            'ELmQB': _0x38e8a0(0xe6),
            'xVspL': function (_0x3ed705, _0x4ed26b) {
                const _0xe6fcb4 = _0x38e8a0;

                return _0x12b76f[_0xe6fcb4(0xe5)](_0x3ed705, _0x4ed26b);
            },
            'vsYWl': function (_0x790ca3, _0x18349b) {
                return _0x12b76f.PDmyy(_0x790ca3, _0x18349b);
            },
            'Vnmkp': _0x12b76f.tiIXP,
            'CempM': _0x12b76f.RUuSl,
            'OdEiM': _0x12b76f[_0x38e8a0(0xe7)]
        };

        _0x12b76f[_0x38e8a0(0xe8)](beforeEach, function () {
            const _0x1b948a = _0x38e8a0;

            this[_0x1b948a(0xd3)] = new FileUtil({ 'path': this[_0x1b948a(0x94)] });
        }), _0x12b76f[_0x38e8a0(0xd4)](it, _0x12b76f[_0x38e8a0(0xe9)], function () {
            const _0x15a969 = _0x38e8a0;

            return this[_0x15a969(0xd3)][_0x15a969(0xd7)]()[_0x15a969(0xd8)](_0x5ebdeb => {
                const _0x2e5e20 = _0x15a969;

                _0x215ab0.wnpCl(expect, _0x5ebdeb).to[_0x2e5e20(0xde)]({});
            });
        }), _0x12b76f[_0x38e8a0(0xea)](it, _0x12b76f.fWVtI, function () {
            const _0x4ce385 = _0x38e8a0;
            const _0x10ee2c = {
                'dTOgk': _0x4ce385(0xa0),
                'OGksk': function (_0x3583df, _0x437bc6) {
                    const _0x210eaf = _0x4ce385;

                    return _0x12b76f[_0x210eaf(0xc6)](_0x3583df, _0x437bc6);
                },
                'wPkhF': _0x12b76f[_0x4ce385(0xe3)]
            };

            return this[_0x4ce385(0xd3)][_0x4ce385(0xdb)](_0x12b76f[_0x4ce385(0xe4)], _0x12b76f[_0x4ce385(0xe3)])[_0x4ce385(0xd8)](() => {
                const _0x46c56c = _0x4ce385;

                return this[_0x46c56c(0xd3)].get(_0x10ee2c[_0x46c56c(0xeb)]);
            })[_0x4ce385(0xd8)](_0xa31b65 => {
                const _0x1b76fc = _0x4ce385;

                _0x10ee2c[_0x1b76fc(0xec)](expect, _0xa31b65).to[_0x1b76fc(0xed)](_0x10ee2c[_0x1b76fc(0xee)]);
            });
        }), _0x12b76f[_0x38e8a0(0xea)](it, _0x12b76f.oAUTU, function () {
            const _0x3252e6 = _0x38e8a0;
            const _0xc761eb = {
                'sqqHQ': function (_0x155bf3, _0xe64a8f) {
                    return _0x155bf3(_0xe64a8f);
                }
            };

            return this.fileUtil.set(_0x215ab0[_0x3252e6(0xef)], _0x215ab0[_0x3252e6(0xf0)])[_0x3252e6(0xd8)](() => {
                const _0x862650 = _0x3252e6;

                return this[_0x862650(0xd3)][_0x862650(0xd7)](_0x215ab0[_0x862650(0xef)]);
            })[_0x3252e6(0xd8)](_0x3ea542 => {
                const _0x53ebf5 = _0x3252e6;

                _0xc761eb[_0x53ebf5(0xf1)](expect, _0x3ea542).to[_0x53ebf5(0xed)](_0x53ebf5(0x9f));
            });
        }), _0x12b76f.wyOBr(it, _0x12b76f[_0x38e8a0(0xf2)], function () {
            const _0x4f52f5 = _0x38e8a0;

            return this[_0x4f52f5(0xd3)].get('foo', _0x12b76f[_0x4f52f5(0xf3)])[_0x4f52f5(0xd8)](_0x4ffd79 => {
                const _0x1660f9 = _0x4f52f5;

                _0x215ab0[_0x1660f9(0xf4)](expect, _0x4ffd79).to.equal('default');
            });
        }), it(_0x12b76f[_0x38e8a0(0xf5)], function () {
            const _0x3cff59 = _0x38e8a0;

            return this[_0x3cff59(0xd3)].get(_0x215ab0[_0x3cff59(0xf6)]).then(_0x4b2931 => {
                const _0x16f4d9 = _0x3cff59;

                expect(_0x4b2931).to.be[_0x16f4d9(0xf7)];
            });
        }), _0x12b76f[_0x38e8a0(0xf8)](it, _0x12b76f[_0x38e8a0(0xf9)], function () {
            const _0x64f4b2 = _0x38e8a0;

            return this[_0x64f4b2(0xd3)][_0x64f4b2(0xdb)](_0x64f4b2(0xa0), null).then(() => {
                const _0x3622e2 = _0x64f4b2;

                return this[_0x3622e2(0xd3)].get(_0x215ab0[_0x3622e2(0xf6)]);
            })[_0x64f4b2(0xd8)](_0x38e6b8 => {
                const _0x4b7459 = _0x64f4b2;

                _0x215ab0[_0x4b7459(0xfa)](expect, _0x38e6b8).to.be.null;
            });
        }), _0x12b76f[_0x38e8a0(0xfb)](it, _0x12b76f[_0x38e8a0(0xfc)], function () {
            const _0xaddcdf = _0x38e8a0;
            const _0x40a203 = {
                'Jahsv': function (_0x121c73, _0x543016) {
                    const _0x4bbeef = _0x3434;

                    return _0x12b76f[_0x4bbeef(0xc6)](_0x121c73, _0x543016);
                }
            };

            return fs[_0xaddcdf(0xc2)](this[_0xaddcdf(0xc1)])[_0xaddcdf(0xd8)](() => {
                const _0x5aa04b = _0xaddcdf;

                return this[_0x5aa04b(0xd3)][_0x5aa04b(0xd7)]();
            })[_0xaddcdf(0xd8)](_0x5ff100 => {
                const _0x2482bb = _0xaddcdf;

                _0x40a203[_0x2482bb(0xfd)](expect, _0x5ff100).to.eql({});
            });
        }), _0x12b76f.ZuwlC(it, _0x12b76f[_0x38e8a0(0xfe)], function () {
            const _0x37bfff = _0x38e8a0;
            const _0x444fad = {
                'zIlqh': function (_0x4f31f4, _0x41b85d) {
                    const _0x5efcf5 = _0x3434;

                    return _0x215ab0[_0x5efcf5(0xfa)](_0x4f31f4, _0x41b85d);
                }
            };

            return fs.ensureDirAsync(this[_0x37bfff(0xc1)])[_0x37bfff(0xd8)](() => {
                const _0x4a2f26 = _0x37bfff;

                return fs[_0x4a2f26(0xff)](path[_0x4a2f26(0xbd)](this[_0x4a2f26(0xc1)], 'file.json'), '');
            })[_0x37bfff(0xd8)](() => {
                const _0x5f1613 = _0x37bfff;

                return this[_0x5f1613(0xd3)][_0x5f1613(0xd7)]();
            })[_0x37bfff(0xd8)](_0x2378c3 => {
                const _0x175d1b = _0x37bfff;

                _0x444fad[_0x175d1b(0x100)](expect, _0x2378c3).to[_0x175d1b(0xde)]({});
            });
        }), _0x12b76f[_0x38e8a0(0x101)](it, _0x12b76f.RLkMj, function () {
            const _0x3c0fe9 = _0x38e8a0;

            return fs.ensureDirAsync(this[_0x3c0fe9(0xc1)]).then(() => {
                const _0x295a51 = _0x3c0fe9;

                return fs[_0x295a51(0x102)](this[_0x295a51(0x94)], { 'foo': 'bar' });
            })[_0x3c0fe9(0xd8)](() => {
                const _0x2bfd58 = _0x3c0fe9;

                return sinon[_0x2bfd58(0xcd)](lockFile, _0x2bfd58(0xa3))[_0x2bfd58(0x103)]({
                    'name': '',
                    'message': '',
                    'code': _0x2bfd58(0xe6)
                }), this[_0x2bfd58(0xd3)][_0x2bfd58(0xd7)]();
            }).then(_0xb72b50 => {
                const _0x2d75f9 = _0x3c0fe9;

                expect(_0xb72b50).to[_0x2d75f9(0xde)]({});
            });
        }), it('resolves cached contents when it can\'t get lock on file after an initial read', function () {
            const _0x284bf6 = _0x38e8a0;

            return this[_0x284bf6(0xd3)][_0x284bf6(0xdb)](_0x284bf6(0xa0), _0x12b76f[_0x284bf6(0xe3)])[_0x284bf6(0xd8)](() => {
                const _0x1f55e0 = _0x284bf6;

                return sinon.stub(lockFile, _0x215ab0[_0x1f55e0(0x104)])[_0x1f55e0(0x103)]({
                    'name': '',
                    'message': '',
                    'code': _0x215ab0.ELmQB
                }), this[_0x1f55e0(0xd3)][_0x1f55e0(0xd7)]();
            })[_0x284bf6(0xd8)](_0xcc4208 => {
                const _0xba4f3d = _0x284bf6;

                _0x215ab0[_0xba4f3d(0x105)](expect, _0xcc4208).to[_0xba4f3d(0xde)]({ 'foo': _0x215ab0[_0xba4f3d(0xf0)] });
            });
        }), it(_0x12b76f.mKtSv, function () {
            const _0x5b18f2 = _0x38e8a0;

            return fs[_0x5b18f2(0x106)](this.dir).then(() => {
                const _0x1daf2b = _0x5b18f2;

                return fs[_0x1daf2b(0xff)](path[_0x1daf2b(0xbd)](this[_0x1daf2b(0xc1)], _0x1daf2b(0x9b)), '{');
            })[_0x5b18f2(0xd8)](() => {
                return this.fileUtil.get();
            })[_0x5b18f2(0xd8)](_0x1a3dba => {
                const _0x4bf10f = _0x5b18f2;

                _0x215ab0[_0x4bf10f(0x107)](expect, _0x1a3dba).to[_0x4bf10f(0xde)]({});
            });
        }), _0x12b76f[_0x38e8a0(0x101)](it, _0x12b76f[_0x38e8a0(0x108)], function () {
            const _0x478b32 = _0x38e8a0;

            return sinon[_0x478b32(0xcd)](fs, _0x215ab0[_0x478b32(0x109)])[_0x478b32(0x10a)]({}), Promise[_0x478b32(0x10b)]([this[_0x478b32(0xd3)][_0x478b32(0xd7)](), this[_0x478b32(0xd3)].get(), this[_0x478b32(0xd3)][_0x478b32(0xd7)]()])[_0x478b32(0xd8)](() => {
                const _0xff9343 = _0x478b32;

                _0x215ab0.vsYWl(expect, fs[_0xff9343(0x10c)]).to.be.calledOnce;
            });
        }), it(_0x12b76f[_0x38e8a0(0x10d)], function () {
            const _0xcd00ba = _0x38e8a0;
            const _0x442a74 = {
                'Ponyq': function (_0x37632c, _0x5a360e) {
                    const _0x329717 = _0x3434;

                    return _0x12b76f[_0x329717(0x10e)](_0x37632c, _0x5a360e);
                }
            };

            return sinon[_0xcd00ba(0xce)](lockFile, _0xcd00ba(0xa3)), this[_0xcd00ba(0xd3)].get()[_0xcd00ba(0xd8)](() => {
                const _0x96505e = _0xcd00ba;

                _0x442a74[_0x96505e(0x10f)](expect, lockFile[_0x96505e(0xa3)]).to.be[_0x96505e(0xcc)];
            });
        }), _0x12b76f[_0x38e8a0(0x110)](it, _0x12b76f.hRzze, function () {
            const _0x5917b4 = _0x38e8a0;
            const _0x18c784 = {
                'QMeXB': function (_0x4acd44, _0x32d60d) {
                    const _0x3e45e1 = _0x3434;

                    return _0x12b76f[_0x3e45e1(0x111)](_0x4acd44, _0x32d60d);
                }
            };

            return sinon[_0x5917b4(0xce)](lockFile, _0x12b76f[_0x5917b4(0x112)]), this[_0x5917b4(0xd3)][_0x5917b4(0xd7)]()[_0x5917b4(0xd8)](() => {
                const _0x43d7e5 = _0x5917b4;

                _0x18c784.QMeXB(expect, lockFile.unlockAsync).to.be[_0x43d7e5(0xcc)];
            });
        }), _0x12b76f.cdxQi(it, _0x38e8a0(0x113), function () {
            const _0x4554b7 = _0x38e8a0;
            const _0x4b6ff1 = {
                'KduGs': function (_0x2fb8f2, _0x5243a9) {
                    return _0x2fb8f2(_0x5243a9);
                }
            };

            return sinon[_0x4554b7(0xce)](lockFile, _0x4554b7(0xa1)), sinon[_0x4554b7(0xcd)](fs, _0x215ab0[_0x4554b7(0x109)])[_0x4554b7(0x103)](new Error(_0x215ab0[_0x4554b7(0x114)])), this[_0x4554b7(0xd3)].get()[_0x4554b7(0xc3)](() => {
                const _0x295578 = _0x4554b7;

                _0x4b6ff1[_0x295578(0x115)](expect, lockFile[_0x295578(0xa1)]).to.be[_0x295578(0xcc)];
            });
        }), _0x12b76f[_0x38e8a0(0x116)](it, _0x12b76f.BVeRY, function () {
            const _0x21dff9 = _0x38e8a0;

            return sinon.stub(lockFile, _0x215ab0[_0x21dff9(0x104)])[_0x21dff9(0x10a)](), sinon.stub(lockFile, 'unlockAsync')[_0x21dff9(0x117)](() => {
                const _0xb73c42 = _0x21dff9;

                return Promise[_0xb73c42(0x118)](1000000000);
            }), sinon[_0x21dff9(0xcd)](fs, _0x215ab0[_0x21dff9(0x109)])[_0x21dff9(0x10a)]({}), sinon[_0x21dff9(0xcd)](env, _0x21dff9(0xd7))[_0x21dff9(0x119)](_0x215ab0[_0x21dff9(0x11a)])[_0x21dff9(0x11b)](100), this[_0x21dff9(0xd3)][_0x21dff9(0xd7)]();
        });
    }), _0x12b76f[_0x4e98d7(0x11c)](context, _0x4e98d7(0x11d), () => {
        const _0x2968e1 = _0x4e98d7;
        const _0x4e09cf = {
            'QhDoc': function (_0x128d69, _0x4784ec) {
                const _0x525f9f = _0x3434;

                return _0x12b76f[_0x525f9f(0x11e)](_0x128d69, _0x4784ec);
            },
            'AQbFX': _0x12b76f.LpLwg,
            'sMMCS': function (_0x5bb7ae, _0x10998b) {
                const _0x28adf6 = _0x3434;

                return _0x12b76f[_0x28adf6(0x11f)](_0x5bb7ae, _0x10998b);
            },
            'VdNGk': 'Expected `key` to be of type `string` or `object`, got `array`',
            'ucftd': _0x12b76f[_0x2968e1(0xe3)],
            'KASky': _0x12b76f.lxdXJ,
            'sOrco': _0x12b76f.EEJuI,
            'tXPGy': _0x12b76f[_0x2968e1(0x120)],
            'smShQ': _0x12b76f[_0x2968e1(0xe4)],
            'nmIyD': _0x12b76f[_0x2968e1(0x121)],
            'KMJyE': _0x12b76f.tyNid,
            'ZptbU': function (_0x1b0b02, _0x4d2b02) {
                return _0x12b76f.gbhHl(_0x1b0b02, _0x4d2b02);
            },
            'HrxOd': function (_0x1c9167, _0x45f2fc) {
                const _0x360c5a = _0x2968e1;

                return _0x12b76f[_0x360c5a(0x122)](_0x1c9167, _0x45f2fc);
            },
            'TWPoD': _0x12b76f.grXpM,
            'wjHmU': _0x12b76f[_0x2968e1(0x123)],
            'gcDbV': _0x12b76f[_0x2968e1(0x124)]
        };

        _0x12b76f.BDkGs(beforeEach, function () {
            const _0x13d9f1 = _0x2968e1;

            this[_0x13d9f1(0xd3)] = new FileUtil({ 'path': this.path });
        }), it(_0x12b76f[_0x2968e1(0x125)], function () {
            const _0x816a53 = _0x2968e1;

            _0x4e09cf[_0x816a53(0x126)](expect, () => {
                const _0x234b0b = _0x816a53;

                return this[_0x234b0b(0xd3)][_0x234b0b(0xdb)](1);
            }).to[_0x816a53(0xc7)](_0x4e09cf[_0x816a53(0x127)]), _0x4e09cf.sMMCS(expect, () => {
                const _0x1d0240 = _0x816a53;

                return this[_0x1d0240(0xd3)][_0x1d0240(0xdb)]([]);
            }).to.throw(_0x4e09cf[_0x816a53(0x128)]);
        }), it(_0x12b76f[_0x2968e1(0x129)], function () {
            const _0x4b4a5b = _0x2968e1;
            const _0x3a1b46 = {
                'VxbAL': function (_0x1b7ba3, _0x34421f) {
                    const _0x2a2c14 = _0x3434;

                    return _0x12b76f[_0x2a2c14(0xe8)](_0x1b7ba3, _0x34421f);
                },
                'qkwFI': _0x4b4a5b(0x9f)
            };

            return this[_0x4b4a5b(0xd3)][_0x4b4a5b(0xdb)]('foo', _0x12b76f[_0x4b4a5b(0xe3)]).then(() => {
                const _0x11f162 = _0x4b4a5b;

                return this.fileUtil.get(_0x11f162(0xa0));
            })[_0x4b4a5b(0xd8)](_0x53016c => {
                const _0x59e746 = _0x4b4a5b;

                _0x3a1b46[_0x59e746(0x12a)](expect, _0x53016c).to[_0x59e746(0xed)](_0x3a1b46[_0x59e746(0x12b)]);
            });
        }), it(_0x12b76f[_0x2968e1(0x12c)], function () {
            const _0x843597 = _0x2968e1;

            return this[_0x843597(0xd3)][_0x843597(0xdb)](_0x4e09cf[_0x843597(0x12d)], _0x4e09cf.ucftd)[_0x843597(0xd8)](() => {
                const _0x2d224e = _0x843597;

                return this[_0x2d224e(0xd3)][_0x2d224e(0xd7)]();
            }).then(_0x5b84ba => {
                const _0x565858 = _0x843597;

                _0x4e09cf[_0x565858(0x12e)](expect, _0x5b84ba).to[_0x565858(0xde)]({ 'foo': { 'baz': _0x4e09cf[_0x565858(0x12f)] } });
            });
        }), _0x12b76f[_0x2968e1(0x130)](it, _0x2968e1(0x131), function () {
            const _0x38d376 = _0x2968e1;

            return this.fileUtil.set({
                'foo': _0x38d376(0x9f),
                'baz': { 'qux': _0x12b76f[_0x38d376(0x132)] }
            }).then(() => {
                const _0x79cb43 = _0x38d376;

                return this[_0x79cb43(0xd3)][_0x79cb43(0xd7)]();
            })[_0x38d376(0xd8)](_0x296fd6 => {
                const _0x2c592a = _0x38d376;

                expect(_0x296fd6).to[_0x2c592a(0xde)]({
                    'foo': _0x2c592a(0x9f),
                    'baz': { 'qux': _0x2c592a(0xb0) }
                });
            });
        }), _0x12b76f.RrqYa(it, _0x12b76f[_0x2968e1(0x133)], function () {
            const _0x1e67c1 = _0x2968e1;
            const _0x4ad8ed = {
                'krdLo': function (_0x38cd55, _0x657cdf) {
                    const _0x110e6f = _0x3434;

                    return _0x4e09cf[_0x110e6f(0x12e)](_0x38cd55, _0x657cdf);
                },
                'XnERG': _0x4e09cf[_0x1e67c1(0x12f)],
                'eUDmX': _0x4e09cf.tXPGy
            };

            return this.fileUtil[_0x1e67c1(0xdb)](_0x4e09cf[_0x1e67c1(0x134)], _0x4e09cf[_0x1e67c1(0x12f)])[_0x1e67c1(0xd8)](() => {
                const _0x2f751f = _0x1e67c1;

                return this[_0x2f751f(0xd3)].set(_0x4e09cf[_0x2f751f(0x135)], _0x4e09cf[_0x2f751f(0x136)]);
            })[_0x1e67c1(0xd8)](() => {
                const _0x20341f = _0x1e67c1;

                return this[_0x20341f(0xd3)].get();
            })[_0x1e67c1(0xd8)](_0x31e67b => {
                const _0x229cb1 = _0x1e67c1;

                _0x4ad8ed.krdLo(expect, _0x31e67b).to.eql({
                    'foo': _0x4ad8ed[_0x229cb1(0x137)],
                    'baz': _0x4ad8ed[_0x229cb1(0x138)]
                });
            });
        }), _0x12b76f[_0x2968e1(0x139)](it, _0x12b76f.qaOyP, function () {
            const _0x8c5e2a = _0x2968e1;
            const _0x1e7ca4 = {
                'HTMyV': function (_0xac0495, _0x525ed1) {
                    const _0xec6934 = _0x3434;

                    return _0x12b76f[_0xec6934(0x11e)](_0xac0495, _0x525ed1);
                },
                'JhdjP': _0x8c5e2a(0x9f)
            };

            return this[_0x8c5e2a(0xd3)][_0x8c5e2a(0xdb)](_0x12b76f[_0x8c5e2a(0xe4)], _0x8c5e2a(0x9f))[_0x8c5e2a(0xd8)](() => {
                const _0x26571b = _0x8c5e2a;

                return fs[_0x26571b(0x13a)](path[_0x26571b(0xbd)](this[_0x26571b(0xc1)], _0x4e09cf[_0x26571b(0x13b)]), _0x4e09cf[_0x26571b(0x13c)]);
            })[_0x8c5e2a(0xd8)](_0x6b8d5f => {
                const _0x2061c2 = _0x8c5e2a;

                _0x1e7ca4.HTMyV(expect, JSON[_0x2061c2(0x13d)](_0x6b8d5f)).to[_0x2061c2(0xde)]({ 'foo': _0x1e7ca4[_0x2061c2(0x13e)] });
            });
        }), _0x12b76f[_0x2968e1(0x139)](it, _0x12b76f[_0x2968e1(0x13f)], function () {
            const _0x2fedec = _0x2968e1;

            return sinon[_0x2fedec(0xce)](lockFile, _0x12b76f[_0x2fedec(0x140)]), this[_0x2fedec(0xd3)].set(_0x12b76f[_0x2fedec(0xe4)], _0x12b76f.UMOSO).then(() => {
                const _0x4aa9c4 = _0x2fedec;

                _0x4e09cf[_0x4aa9c4(0x141)](expect, lockFile[_0x4aa9c4(0xa3)]).to.be[_0x4aa9c4(0xcc)];
            });
        }), _0x12b76f[_0x2968e1(0x142)](it, _0x2968e1(0x143), function () {
            const _0x5bec26 = _0x2968e1;

            return sinon[_0x5bec26(0xce)](lockFile, _0x4e09cf[_0x5bec26(0x144)]), this[_0x5bec26(0xd3)][_0x5bec26(0xdb)](_0x4e09cf[_0x5bec26(0x134)], _0x5bec26(0x9f))[_0x5bec26(0xd8)](() => {
                const _0x5904a3 = _0x5bec26;

                _0x4e09cf[_0x5904a3(0x145)](expect, lockFile[_0x5904a3(0xa1)]).to.be.called;
            });
        }), it(_0x12b76f[_0x2968e1(0x146)], function () {
            const _0x4b4536 = _0x2968e1;

            return sinon[_0x4b4536(0xce)](lockFile, _0x4e09cf[_0x4b4536(0x144)]), sinon.stub(fs, _0x4e09cf.wjHmU)[_0x4b4536(0x103)](new Error(_0x4e09cf.gcDbV)), this[_0x4b4536(0xd3)][_0x4b4536(0xdb)](_0x4e09cf[_0x4b4536(0x134)], _0x4e09cf[_0x4b4536(0x12f)])[_0x4b4536(0xc3)](() => {
                const _0x29d033 = _0x4b4536;

                _0x4e09cf[_0x29d033(0x145)](expect, lockFile[_0x29d033(0xa1)]).to.be[_0x29d033(0xcc)];
            });
        });
    }), context(_0x12b76f[_0x4e98d7(0x147)], () => {
        const _0x13666b = _0x4e98d7;
        const _0x5e2bc0 = {
            'hbqtf': function (_0x306cb9, _0x596202) {
                const _0x147977 = _0x3434;

                return _0x12b76f[_0x147977(0x148)](_0x306cb9, _0x596202);
            },
            'BUKXc': _0x12b76f.MQjzx,
            'vXeYO': 'unlockAsync'
        };

        _0x12b76f[_0x13666b(0x148)](beforeEach, function () {
            const _0x48c333 = _0x13666b;

            this[_0x48c333(0xd3)] = new FileUtil({ 'path': this[_0x48c333(0x94)] });
        }), it('removes the file', function () {
            const _0x428b22 = _0x13666b;

            return this.fileUtil[_0x428b22(0x149)]()[_0x428b22(0xd8)](() => {
                const _0x293de2 = _0x428b22;

                return fs[_0x293de2(0x14a)](this[_0x293de2(0x94)]);
            })[_0x428b22(0xc3)](() => {});
        }), it(_0x12b76f[_0x13666b(0x14b)], function () {
            const _0x656cdd = _0x13666b;

            return sinon[_0x656cdd(0xce)](lockFile, _0x5e2bc0[_0x656cdd(0x14c)]), this[_0x656cdd(0xd3)][_0x656cdd(0x149)]()[_0x656cdd(0xd8)](() => {
                const _0x8c7d20 = _0x656cdd;

                _0x5e2bc0.hbqtf(expect, lockFile[_0x8c7d20(0xa3)]).to.be[_0x8c7d20(0xcc)];
            });
        }), it(_0x12b76f[_0x13666b(0x14d)], function () {
            const _0x523c09 = _0x13666b;

            return sinon.spy(lockFile, _0x5e2bc0[_0x523c09(0x14e)]), this[_0x523c09(0xd3)][_0x523c09(0x149)]().then(() => {
                const _0x4da0bd = _0x523c09;

                _0x5e2bc0[_0x4da0bd(0x14f)](expect, lockFile[_0x4da0bd(0xa1)]).to.be[_0x4da0bd(0xcc)];
            });
        }), _0x12b76f.gMKdK(it, _0x12b76f[_0x13666b(0x150)], function () {
            const _0x45ea3e = _0x13666b;

            return sinon.spy(lockFile, _0x12b76f[_0x45ea3e(0x112)]), sinon[_0x45ea3e(0xcd)](fs, 'removeAsync')[_0x45ea3e(0x103)](new Error(_0x12b76f[_0x45ea3e(0x124)])), this[_0x45ea3e(0xd3)][_0x45ea3e(0x149)]()[_0x45ea3e(0xd8)](() => {
                const _0x509732 = _0x45ea3e;

                throw new Error(_0x509732(0x151));
            })[_0x45ea3e(0xc3)](_0x3fcfd9 => {
                const _0x1967a0 = _0x45ea3e;

                _0x5e2bc0[_0x1967a0(0x14f)](expect, _0x3fcfd9[_0x1967a0(0x152)]).to.eq(_0x1967a0(0xa4)), _0x5e2bc0[_0x1967a0(0x14f)](expect, lockFile.unlockAsync).to.be.called;
            });
        });
    });
});
