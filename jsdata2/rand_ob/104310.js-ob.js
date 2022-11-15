'use strict';
const _0xaf48 = [
    'blue',
    'descriptor',
    'expected',
    'a\x20flag',
    'schemas',
    'levenUnknownHandler',
    'xTXbs',
    '_hasDeprecationWarned',
    'AnySchema',
    'create',
    'push',
    'alias',
    'AliasSchema',
    'name',
    'boolean',
    'flag',
    'type',
    'int',
    'IntegerSchema',
    'LBTyC',
    'StringSchema',
    'BRtXl',
    'choices',
    'object',
    'redirect',
    'BooleanSchema',
    'rzkqr',
    'flags',
    'flatMap',
    'oppositeDescription',
    'path',
    'exception',
    'validate',
    'option',
    'deprecated',
    'isArray',
    'array',
    'ArraySchema',
    'pVSZS',
    'ehEsj',
    '621fmfKmc',
    '521UpVpqI',
    '1021aseGpn',
    '653ZAyzGD',
    '52xJLvUy',
    '8590vLEwRF',
    '34499iJIiQk',
    '13CIaKiF',
    '161130CCjTjN',
    '226ibRjMI',
    '2085BkDdxM',
    '20266xiFjMD',
    '5hmLIFp',
    'vnopts',
    'leven',
    'chalk',
    '../utils/get-last.js',
    'apiDescriptor',
    'key',
    '\x20without\x20an\x20argument',
    'ChoiceSchema',
    '_flags',
    'sort',
    'preprocess',
    'gttDs',
    'Ejleh',
    'fQcYl',
    'length',
    'includes',
    'find',
    'logger',
    'warn',
    'Unknown\x20flag\x20',
    'yellow',
    'value',
    'did\x20you\x20mean\x20'
];
const _0x4e4b2c = _0x1027;
(function (_0x18e2d3, _0x1a5a4a) {
    const _0x51de0c = _0x1027;
    while (!![]) {
        try {
            const _0x1a72f5 = parseInt(_0x51de0c(0x189)) * parseInt(_0x51de0c(0x18a)) + parseInt(_0x51de0c(0x18b)) * -parseInt(_0x51de0c(0x18c)) + -parseInt(_0x51de0c(0x18d)) * parseInt(_0x51de0c(0x18e)) + -parseInt(_0x51de0c(0x18f)) * -parseInt(_0x51de0c(0x190)) + parseInt(_0x51de0c(0x191)) + parseInt(_0x51de0c(0x192)) * parseInt(_0x51de0c(0x193)) + -parseInt(_0x51de0c(0x194)) * -parseInt(_0x51de0c(0x195));
            if (_0x1a72f5 === _0x1a5a4a)
                break;
            else
                _0x18e2d3['push'](_0x18e2d3['shift']());
        } catch (_0x31aeb3) {
            _0x18e2d3['push'](_0x18e2d3['shift']());
        }
    }
}(_0xaf48, 0xc86f + 0xa133e + -0x4df3c));
const vnopts = require(_0x4e4b2c(0x196)), leven = require(_0x4e4b2c(0x197)), chalk = require(_0x4e4b2c(0x198)), getLast = require(_0x4e4b2c(0x199)), cliDescriptor = {
        'key': _0xfb07e1 => _0xfb07e1['length'] === 0x2e3 + 0x1b8f + -0x1e71 ? '-' + _0xfb07e1 : '--' + _0xfb07e1,
        'value': _0x3f03a8 => vnopts[_0x4e4b2c(0x19a)]['value'](_0x3f03a8),
        'pair': ({
            key: _0x2d46c6,
            value: _0x114188
        }) => _0x114188 === ![] ? '--no-' + _0x2d46c6 : _0x114188 === !![] ? cliDescriptor[_0x4e4b2c(0x19b)](_0x2d46c6) : _0x114188 === '' ? cliDescriptor[_0x4e4b2c(0x19b)](_0x2d46c6) + _0x4e4b2c(0x19c) : cliDescriptor[_0x4e4b2c(0x19b)](_0x2d46c6) + '=' + _0x114188
    };
class FlagSchema extends vnopts[_0x4e4b2c(0x19d)] {
    constructor({
        name: _0x13f679,
        flags: _0x3d95c8
    }) {
        const _0x5067f3 = _0x4e4b2c;
        super({
            'name': _0x13f679,
            'choices': _0x3d95c8
        }), this[_0x5067f3(0x19e)] = [..._0x3d95c8][_0x5067f3(0x19f)]();
    }
    [_0x4e4b2c(0x1a0)](_0x4443e6, _0x16f256) {
        const _0x1fb03e = _0x4e4b2c, _0x4c483d = {
                'gttDs': function (_0x5ac59e, _0x44560e) {
                    return _0x5ac59e === _0x44560e;
                },
                'Ejleh': 'string',
                'fQcYl': function (_0x23756a, _0x1e7304) {
                    return _0x23756a > _0x1e7304;
                }
            };
        if (_0x4c483d[_0x1fb03e(0x1a1)](typeof _0x4443e6, _0x4c483d[_0x1fb03e(0x1a2)]) && _0x4c483d[_0x1fb03e(0x1a3)](_0x4443e6[_0x1fb03e(0x1a4)], -0x96a + 0x5 * 0x43c + 0xe * -0xd7) && !this[_0x1fb03e(0x19e)][_0x1fb03e(0x1a5)](_0x4443e6)) {
            const _0x567193 = this['_flags'][_0x1fb03e(0x1a6)](_0x142e4b => leven(_0x142e4b, _0x4443e6) < 0x32d + 0x1ff7 + 0x187 * -0x17);
            if (_0x567193)
                return _0x16f256[_0x1fb03e(0x1a7)][_0x1fb03e(0x1a8)]([
                    _0x1fb03e(0x1a9) + chalk[_0x1fb03e(0x1aa)](_0x16f256['descriptor'][_0x1fb03e(0x1ab)](_0x4443e6)) + ',',
                    _0x1fb03e(0x1ac) + chalk[_0x1fb03e(0x1ad)](_0x16f256[_0x1fb03e(0x1ae)][_0x1fb03e(0x1ab)](_0x567193)) + '?'
                ]['join']('\x20')), _0x567193;
        }
        return _0x4443e6;
    }
    [_0x4e4b2c(0x1af)]() {
        const _0x45ba0f = _0x4e4b2c;
        return _0x45ba0f(0x1b0);
    }
}
let hasDeprecationWarned;
function normalizeOptions(_0xd09534, _0x29d504, {
    logger: _0x55e0cf,
    isCLI: isCLI = ![],
    passThrough: passThrough = ![]
} = {}) {
    const _0x3ebfe9 = _0x4e4b2c, _0x21f286 = {
            'xTXbs': function (_0x2a0d78, _0x287450) {
                return _0x2a0d78 !== _0x287450;
            }
        }, _0x103846 = !passThrough ? (_0x2d1e3b, _0x3b72bd, _0x17051a) => {
            const _0xa14380 = _0x1027, {
                    _: _0x16e9f7,
                    ..._0x2ffa9f
                } = _0x17051a[_0xa14380(0x1b1)];
            return vnopts[_0xa14380(0x1b2)](_0x2d1e3b, _0x3b72bd, {
                ..._0x17051a,
                'schemas': _0x2ffa9f
            });
        } : Array['isArray'](passThrough) ? (_0x9e9914, _0x14aee6) => !passThrough[_0x3ebfe9(0x1a5)](_0x9e9914) ? undefined : { [_0x9e9914]: _0x14aee6 } : (_0x4b2b12, _0x124864) => ({ [_0x4b2b12]: _0x124864 }), _0x4fa46d = isCLI ? cliDescriptor : vnopts[_0x3ebfe9(0x19a)], _0xc107a1 = optionInfosToSchemas(_0x29d504, { 'isCLI': isCLI }), _0x4c4e39 = new vnopts['Normalizer'](_0xc107a1, {
            'logger': _0x55e0cf,
            'unknown': _0x103846,
            'descriptor': _0x4fa46d
        }), _0x326b88 = _0x21f286[_0x3ebfe9(0x1b3)](_0x55e0cf, ![]);
    _0x326b88 && hasDeprecationWarned && (_0x4c4e39[_0x3ebfe9(0x1b4)] = hasDeprecationWarned);
    const _0x13e528 = _0x4c4e39['normalize'](_0xd09534);
    return _0x326b88 && (hasDeprecationWarned = _0x4c4e39[_0x3ebfe9(0x1b4)]), _0x13e528;
}
function optionInfosToSchemas(_0x498d6d, {isCLI: _0x1fb445}) {
    const _0x349dd3 = _0x4e4b2c, _0x1128e2 = [];
    _0x1fb445 && _0x1128e2['push'](vnopts[_0x349dd3(0x1b5)][_0x349dd3(0x1b6)]({ 'name': '_' }));
    for (const _0x67e167 of _0x498d6d) {
        _0x1128e2[_0x349dd3(0x1b7)](optionInfoToSchema(_0x67e167, {
            'isCLI': _0x1fb445,
            'optionInfos': _0x498d6d
        })), _0x67e167[_0x349dd3(0x1b8)] && _0x1fb445 && _0x1128e2[_0x349dd3(0x1b7)](vnopts[_0x349dd3(0x1b9)][_0x349dd3(0x1b6)]({
            'name': _0x67e167[_0x349dd3(0x1b8)],
            'sourceName': _0x67e167[_0x349dd3(0x1ba)]
        }));
    }
    return _0x1128e2;
}
function optionInfoToSchema(_0x49b77b, {
    isCLI: _0x34aa7d,
    optionInfos: _0x357dd2
}) {
    const _0x3be2c0 = _0x4e4b2c, _0x38d883 = {
            'LBTyC': 'string',
            'BRtXl': 'choice',
            'RCdzQ': _0x3be2c0(0x1bb),
            'rzkqr': _0x3be2c0(0x1bc)
        };
    let _0x2c7b09;
    const _0x260aa0 = { 'name': _0x49b77b[_0x3be2c0(0x1ba)] }, _0x522be2 = {};
    switch (_0x49b77b[_0x3be2c0(0x1bd)]) {
    case _0x3be2c0(0x1be):
        _0x2c7b09 = vnopts[_0x3be2c0(0x1bf)];
        _0x34aa7d && (_0x260aa0[_0x3be2c0(0x1a0)] = _0x571291 => Number(_0x571291));
        break;
    case _0x38d883[_0x3be2c0(0x1c0)]:
        _0x2c7b09 = vnopts[_0x3be2c0(0x1c1)];
        break;
    case _0x38d883[_0x3be2c0(0x1c2)]:
        _0x2c7b09 = vnopts[_0x3be2c0(0x19d)], _0x260aa0[_0x3be2c0(0x1c3)] = _0x49b77b['choices']['map'](_0x6192e6 => typeof _0x6192e6 === _0x3be2c0(0x1c4) && _0x6192e6['redirect'] ? {
            ..._0x6192e6,
            'redirect': {
                'to': {
                    'key': _0x49b77b[_0x3be2c0(0x1ba)],
                    'value': _0x6192e6[_0x3be2c0(0x1c5)]
                }
            }
        } : _0x6192e6);
        break;
    case _0x38d883['RCdzQ']:
        _0x2c7b09 = vnopts[_0x3be2c0(0x1c6)];
        break;
    case _0x38d883[_0x3be2c0(0x1c7)]:
        _0x2c7b09 = FlagSchema, _0x260aa0[_0x3be2c0(0x1c8)] = _0x357dd2[_0x3be2c0(0x1c9)](_0x5d583d => [
            _0x5d583d[_0x3be2c0(0x1b8)],
            _0x5d583d['description'] && _0x5d583d[_0x3be2c0(0x1ba)],
            _0x5d583d[_0x3be2c0(0x1ca)] && 'no-' + _0x5d583d[_0x3be2c0(0x1ba)]
        ]['filter'](Boolean));
        break;
    case _0x3be2c0(0x1cb):
        _0x2c7b09 = vnopts['StringSchema'];
        break;
    default:
        throw new Error('Unexpected\x20type\x20' + _0x49b77b[_0x3be2c0(0x1bd)]);
    }
    _0x49b77b[_0x3be2c0(0x1cc)] ? _0x260aa0['validate'] = (_0x212477, _0x5f08cc, _0x593e05) => _0x49b77b[_0x3be2c0(0x1cc)](_0x212477) || _0x5f08cc[_0x3be2c0(0x1cd)](_0x212477, _0x593e05) : _0x260aa0[_0x3be2c0(0x1cd)] = (_0x343b07, _0x419f23, _0x2b0922) => _0x343b07 === undefined || _0x419f23[_0x3be2c0(0x1cd)](_0x343b07, _0x2b0922);
    _0x49b77b[_0x3be2c0(0x1c5)] && (_0x522be2['redirect'] = _0x19bf4d => !_0x19bf4d ? undefined : {
        'to': {
            'key': _0x49b77b['redirect'][_0x3be2c0(0x1ce)],
            'value': _0x49b77b['redirect']['value']
        }
    });
    _0x49b77b[_0x3be2c0(0x1cf)] && (_0x522be2[_0x3be2c0(0x1cf)] = !![]);
    if (_0x34aa7d && !_0x49b77b['array']) {
        const _0x17d701 = _0x260aa0['preprocess'] || (_0x17c2bf => _0x17c2bf);
        _0x260aa0[_0x3be2c0(0x1a0)] = (_0x249d66, _0x4d3229, _0x531049) => _0x4d3229[_0x3be2c0(0x1a0)](_0x17d701(Array[_0x3be2c0(0x1d0)](_0x249d66) ? getLast(_0x249d66) : _0x249d66), _0x531049);
    }
    return _0x49b77b[_0x3be2c0(0x1d1)] ? vnopts[_0x3be2c0(0x1d2)][_0x3be2c0(0x1b6)]({
        ..._0x34aa7d ? { 'preprocess': _0x39054c => Array[_0x3be2c0(0x1d0)](_0x39054c) ? _0x39054c : [_0x39054c] } : {},
        ..._0x522be2,
        'valueSchema': _0x2c7b09[_0x3be2c0(0x1b6)](_0x260aa0)
    }) : _0x2c7b09['create']({
        ..._0x260aa0,
        ..._0x522be2
    });
}
function normalizeApiOptions(_0x41830d, _0x4eba6e, _0x2bcc0e) {
    const _0x2fd2b5 = _0x4e4b2c, _0x4c56bd = {
            'pVSZS': function (_0x571bbd, _0x555e75, _0x1d7ca4, _0x48a524) {
                return _0x571bbd(_0x555e75, _0x1d7ca4, _0x48a524);
            }
        };
    return _0x4c56bd[_0x2fd2b5(0x1d3)](normalizeOptions, _0x41830d, _0x4eba6e, _0x2bcc0e);
}
function _0x1027(_0x4a2c1a, _0x49dde5) {
    return _0x1027 = function (_0x55fac6, _0x2efc02) {
        _0x55fac6 = _0x55fac6 - (0xc67 + -0x437 + 0x1 * -0x6a7);
        let _0x49a5df = _0xaf48[_0x55fac6];
        return _0x49a5df;
    }, _0x1027(_0x4a2c1a, _0x49dde5);
}
function normalizeCliOptions(_0x3564ea, _0x125c7d, _0x21da4f) {
    const _0x2b6a66 = _0x4e4b2c, _0x99b092 = {
            'ehEsj': function (_0x1214c3, _0x4b60d6, _0x312b9c, _0x2d5f1b) {
                return _0x1214c3(_0x4b60d6, _0x312b9c, _0x2d5f1b);
            }
        };
    return _0x99b092[_0x2b6a66(0x1d4)](normalizeOptions, _0x3564ea, _0x125c7d, {
        'isCLI': !![],
        ..._0x21da4f
    });
}
module['exports'] = {
    'normalizeApiOptions': normalizeApiOptions,
    'normalizeCliOptions': normalizeCliOptions
};
