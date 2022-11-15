'use strict';
const _0x3764 = [
    '644353ITLiLg',
    '2vertbz',
    '339DRqEgg',
    '257keFftX',
    '705870OHYfse',
    '11NfzmyM',
    '111373HYbrBZ',
    '1aUWWWY',
    '2706139ZEgqmu',
    'path',
    'util',
    './Chunk',
    './util/identifier',
    'string',
    'NnpsI',
    'exec',
    '\x22\x20+\x20(',
    '\x20+\x20\x22\x22).replace(/(^[.-]|[^a-zA-Z0-9_-])+/g,\x20\x22_\x22)\x20+\x20\x22',
    'oObJQ',
    'slice',
    'isArray',
    'wWWIk',
    'HKGPA',
    'vjbkR',
    'BXhSl',
    'Path\x20variable\x20',
    '\x20not\x20implemented\x20in\x20this\x20context:\x20',
    'get',
    'deprecate',
    'set',
    'file',
    'query',
    'base',
    'name',
    '[filebase]\x20is\x20now\x20[base]',
    'fullhash',
    'hashWithLength',
    'chunkhash',
    'contenthash',
    'modulehash',
    'moduleid',
    '[moduleid]\x20is\x20now\x20[id]',
    'DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_MODULE_ID',
    'url',
    'chunkGraph',
    'BBNXp',
    'jYQyd',
    'FphTi',
    'KvtlP',
    'length',
    'ekaLR',
    'yOfAR',
    'pdWWe',
    'PWxdD',
    'MuBFL',
    'hWvLu',
    'kMlHD',
    'UbCHe',
    'filebase',
    'CfvTF',
    'hash',
    'DoYRx',
    'GHZBO',
    'gtaPb',
    'chunk',
    'FMbcU',
    'quSdj',
    'efgah',
    'UQInR',
    'rKXwz',
    'contentHash',
    'contentHashWithLength',
    'fJOxD',
    'CWLXb',
    'module',
    'FjnmN',
    'getRenderedModuleHash',
    'runtime',
    'euzXz',
    'gBtyR',
    'KMohZ',
    'fvRbB',
    'GaUpC',
    'fHdZT',
    'BUKYW',
    'tSdka',
    'rrBWE',
    'vvohB',
    'Bzwvl',
    'replace',
    'EbnLc',
    'WRCMD',
    'yArkt',
    'startsWith',
    'TemplatedPathPlugin',
    'apply',
    'hooks',
    'compilation',
    'tap',
    'assetPath',
    'exports',
    '1QUCiDN',
    '924459WxkENL',
    '606755mNtEFY',
    '2wSNhBV'
];
const _0x44c614 = _0x5cfa;
(function (_0x46b7a6, _0x49a3f7) {
    const _0x267bbd = _0x5cfa;
    while (!![]) {
        try {
            const _0x32932d = -parseInt(_0x267bbd(0x154)) * parseInt(_0x267bbd(0x155)) + -parseInt(_0x267bbd(0x156)) * -parseInt(_0x267bbd(0x157)) + parseInt(_0x267bbd(0x158)) * parseInt(_0x267bbd(0x159)) + -parseInt(_0x267bbd(0x15a)) * parseInt(_0x267bbd(0x15b)) + parseInt(_0x267bbd(0x15c)) + -parseInt(_0x267bbd(0x15d)) * -parseInt(_0x267bbd(0x15e)) + -parseInt(_0x267bbd(0x15f)) * parseInt(_0x267bbd(0x160));
            if (_0x32932d === _0x49a3f7)
                break;
            else
                _0x46b7a6['push'](_0x46b7a6['shift']());
        } catch (_0x85b53f) {
            _0x46b7a6['push'](_0x46b7a6['shift']());
        }
    }
}(_0x3764, -0x14d12f + -0x1f68 + 0x1fdb63));
function _0x5cfa(_0x338625, _0x4e6a6b) {
    return _0x5cfa = function (_0x9e3f54, _0x1fb44b) {
        _0x9e3f54 = _0x9e3f54 - (0x102a * -0x1 + 0x2151 * -0x1 + 0x32cf);
        let _0x54da49 = _0x3764[_0x9e3f54];
        return _0x54da49;
    }, _0x5cfa(_0x338625, _0x4e6a6b);
}
const {basename, extname} = require(_0x44c614(0x161)), util = require(_0x44c614(0x162)), Chunk = require(_0x44c614(0x163)), Module = require('./Module'), {parseResource} = require(_0x44c614(0x164)), REGEXP = /\[\\*([\w:]+)\\*\]/gi, prepareId = _0x4b3d12 => {
        const _0x761dc = _0x44c614, _0x12eafb = { 'NnpsI': _0x761dc(0x165) };
        if (typeof _0x4b3d12 !== _0x12eafb[_0x761dc(0x166)])
            return _0x4b3d12;
        if (/^"\s\+*.*\+\s*"$/['test'](_0x4b3d12)) {
            const _0x5a170f = /^"\s\+*\s*(.*)\s*\+\s*"$/[_0x761dc(0x167)](_0x4b3d12);
            return _0x761dc(0x168) + _0x5a170f[0x610 + -0x6a9 * 0x1 + 0xb * 0xe] + _0x761dc(0x169);
        }
        return _0x4b3d12['replace'](/(^[.-]|[^a-zA-Z0-9_-])+/g, '_');
    }, hashLength = (_0x266136, _0x359de4, _0x5eb3b9, _0x5a964e) => {
        const _0x10be13 = {
                'oObJQ': function (_0x58e554, _0xd21972) {
                    return _0x58e554(_0xd21972);
                },
                'UhXiH': function (_0x5359ce, _0x18850f, _0x174c80, _0x40d742) {
                    return _0x5359ce(_0x18850f, _0x174c80, _0x40d742);
                }
            }, _0x18cd86 = (_0x3e6d46, _0xe23767, _0x52f52f) => {
                const _0x3c4fd4 = _0x5cfa;
                let _0x3d0a70;
                const _0x376a9b = _0xe23767 && parseInt(_0xe23767, 0x3 * 0x7e1 + -0x91 + -0x1708);
                if (_0x376a9b && _0x359de4)
                    _0x3d0a70 = _0x10be13[_0x3c4fd4(0x16a)](_0x359de4, _0x376a9b);
                else {
                    const _0x5dd80a = _0x10be13['UhXiH'](_0x266136, _0x3e6d46, _0xe23767, _0x52f52f);
                    _0x3d0a70 = _0x376a9b ? _0x5dd80a[_0x3c4fd4(0x16b)](0x103d * 0x2 + -0x1f84 + -0xf6, _0x376a9b) : _0x5dd80a;
                }
                if (_0x5eb3b9) {
                    _0x5eb3b9['immutable'] = !![];
                    if (Array[_0x3c4fd4(0x16c)](_0x5eb3b9[_0x5a964e]))
                        _0x5eb3b9[_0x5a964e] = [
                            ..._0x5eb3b9[_0x5a964e],
                            _0x3d0a70
                        ];
                    else
                        _0x5eb3b9[_0x5a964e] ? _0x5eb3b9[_0x5a964e] = [
                            _0x5eb3b9[_0x5a964e],
                            _0x3d0a70
                        ] : _0x5eb3b9[_0x5a964e] = _0x3d0a70;
                }
                return _0x3d0a70;
            };
        return _0x18cd86;
    }, replacer = (_0x4bacf7, _0x3312a3) => {
        const _0x2a7ce1 = {
                'wWWIk': function (_0x475b6e, _0x4a6092) {
                    return _0x475b6e === _0x4a6092;
                },
                'HKGPA': 'function',
                'GKPiw': function (_0x4543e7) {
                    return _0x4543e7();
                },
                'vjbkR': function (_0xd68a6f, _0x3eeeb2) {
                    return _0xd68a6f === _0x3eeeb2;
                },
                'BXhSl': function (_0x16d03d, _0x373e33) {
                    return _0x16d03d === _0x373e33;
                }
            }, _0x24d32f = (_0xd6713b, _0x59b5ea, _0x2c86d6) => {
                const _0xe331b9 = _0x5cfa;
                _0x2a7ce1[_0xe331b9(0x16d)](typeof _0x4bacf7, _0x2a7ce1[_0xe331b9(0x16e)]) && (_0x4bacf7 = _0x2a7ce1['GKPiw'](_0x4bacf7));
                if (_0x2a7ce1[_0xe331b9(0x16f)](_0x4bacf7, null) || _0x2a7ce1[_0xe331b9(0x170)](_0x4bacf7, undefined)) {
                    if (!_0x3312a3)
                        throw new Error(_0xe331b9(0x171) + _0xd6713b + _0xe331b9(0x172) + _0x2c86d6);
                    return '';
                } else
                    return '' + _0x4bacf7;
            };
        return _0x24d32f;
    }, deprecationCache = new Map(), deprecatedFunction = (() => () => {
    })(), deprecated = (_0x37cbf8, _0x34d953, _0x422033) => {
        const _0x581a34 = _0x44c614, _0x4fc7c1 = {
                'ojOea': function (_0xb8cb42) {
                    return _0xb8cb42();
                },
                'tqnmQ': function (_0x4be5f3, ..._0x57334c) {
                    return _0x4be5f3(..._0x57334c);
                },
                'rEkfq': function (_0x484bd6, _0x285994) {
                    return _0x484bd6 === _0x285994;
                }
            };
        let _0x4a50f5 = deprecationCache[_0x581a34(0x173)](_0x34d953);
        return _0x4fc7c1['rEkfq'](_0x4a50f5, undefined) && (_0x4a50f5 = util[_0x581a34(0x174)](deprecatedFunction, _0x34d953, _0x422033), deprecationCache[_0x581a34(0x175)](_0x34d953, _0x4a50f5)), (..._0x2b863f) => {
            return _0x4fc7c1['ojOea'](_0x4a50f5), _0x4fc7c1['tqnmQ'](_0x37cbf8, ..._0x2b863f);
        };
    }, replacePathVariables = (_0x8ad322, _0x888c83, _0x342789) => {
        const _0x48b1d7 = _0x44c614, _0x3119e6 = {
                'EbnLc': function (_0x3bea55, _0x387f4b) {
                    return _0x3bea55 + _0x387f4b;
                },
                'WRCMD': function (_0x340497, _0x251f69) {
                    return _0x340497 !== _0x251f69;
                },
                'yArkt': function (_0x1ad603, _0x26cd79, _0xe85f6d, _0x150876) {
                    return _0x1ad603(_0x26cd79, _0xe85f6d, _0x150876);
                },
                'BBNXp': function (_0x32b108, _0x14e9f0) {
                    return _0x32b108 === _0x14e9f0;
                },
                'jYQyd': _0x48b1d7(0x165),
                'FphTi': function (_0x14bb46, _0x4994ab) {
                    return _0x14bb46(_0x4994ab);
                },
                'KvtlP': function (_0x21016b, _0x1c6b11) {
                    return _0x21016b - _0x1c6b11;
                },
                'yvcZR': _0x48b1d7(0x176),
                'ekaLR': _0x48b1d7(0x177),
                'crGyH': function (_0x2dd35a, _0x4c0f71, _0x487118) {
                    return _0x2dd35a(_0x4c0f71, _0x487118);
                },
                'yOfAR': 'fragment',
                'pdWWe': function (_0xd16098, _0x182039, _0x25b2f5) {
                    return _0xd16098(_0x182039, _0x25b2f5);
                },
                'PWxdD': _0x48b1d7(0x161),
                'MuBFL': _0x48b1d7(0x178),
                'hWvLu': function (_0x43b2bc, _0x371e42) {
                    return _0x43b2bc(_0x371e42);
                },
                'kMlHD': _0x48b1d7(0x179),
                'UbCHe': 'ext',
                'Bzwvl': function (_0xac1e2, _0x31a7df, _0x2843d1) {
                    return _0xac1e2(_0x31a7df, _0x2843d1);
                },
                'CfvTF': _0x48b1d7(0x17a),
                'gBtyR': function (_0xe4ec3b, _0x4857df, _0x36b57b, _0x21f120, _0x559597) {
                    return _0xe4ec3b(_0x4857df, _0x36b57b, _0x21f120, _0x559597);
                },
                'DoYRx': _0x48b1d7(0x17b),
                'GHZBO': '[hash]\x20is\x20now\x20[fullhash]\x20(also\x20consider\x20using\x20[chunkhash]\x20or\x20[contenthash],\x20see\x20documentation\x20for\x20details)',
                'gtaPb': 'DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_HASH',
                'FMbcU': function (_0x503c8b, _0x21c1c6) {
                    return _0x503c8b(_0x21c1c6);
                },
                'quSdj': function (_0x2c5d43, _0x28dae5) {
                    return _0x2c5d43 instanceof _0x28dae5;
                },
                'efgah': function (_0x4ce710, _0x514b6b) {
                    return _0x4ce710 in _0x514b6b;
                },
                'UQInR': _0x48b1d7(0x17c),
                'rKXwz': _0x48b1d7(0x17d),
                'wmduc': function (_0x3eace0, _0x891c76) {
                    return _0x3eace0 in _0x891c76;
                },
                'fJOxD': 'contentHashWithLength',
                'CWLXb': _0x48b1d7(0x17e),
                'FjnmN': function (_0x44ec0e, _0x5d6adf) {
                    return _0x44ec0e(_0x5d6adf);
                },
                'XnxvE': function (_0x35e8c3, _0x11275e) {
                    return _0x35e8c3(_0x11275e);
                },
                'euzXz': function (_0x347c95, _0x51b75b) {
                    return _0x347c95 in _0x51b75b;
                },
                'KMohZ': function (_0xfb55da, _0x87c795) {
                    return _0xfb55da(_0x87c795);
                },
                'fvRbB': _0x48b1d7(0x17f),
                'GaUpC': 'hash',
                'fHdZT': _0x48b1d7(0x180),
                'nNoIn': function (_0x5e1b56, _0x2d5376, _0x2f236e, _0x2728c7) {
                    return _0x5e1b56(_0x2d5376, _0x2f236e, _0x2728c7);
                },
                'CcDmO': _0x48b1d7(0x181),
                'HUSct': _0x48b1d7(0x182),
                'BUKYW': _0x48b1d7(0x183),
                'tSdka': function (_0x15ccb1, _0x5981b8) {
                    return _0x15ccb1(_0x5981b8);
                },
                'rrBWE': function (_0x2009ba, _0x265383) {
                    return _0x2009ba === _0x265383;
                },
                'LTCNF': 'runtime',
                'vvohB': function (_0x3dcffe, _0x498be3) {
                    return _0x3dcffe(_0x498be3);
                }
            }, _0x5bc75d = _0x888c83[_0x48b1d7(0x184)], _0x43c5dd = new Map();
        if (_0x3119e6[_0x48b1d7(0x185)](typeof _0x888c83['filename'], _0x3119e6[_0x48b1d7(0x186)])) {
            const {
                    path: _0x133768,
                    query: _0x3ba6aa,
                    fragment: _0x36d4c7
                } = _0x3119e6[_0x48b1d7(0x187)](parseResource, _0x888c83['filename']), _0x4bd41d = extname(_0x133768), _0x4ad73e = basename(_0x133768), _0x148a84 = _0x4ad73e[_0x48b1d7(0x16b)](0x2563 * 0x1 + -0x19 * 0xf + -0x8fb * 0x4, _0x3119e6[_0x48b1d7(0x188)](_0x4ad73e[_0x48b1d7(0x189)], _0x4bd41d[_0x48b1d7(0x189)])), _0x5cb8a9 = _0x133768['slice'](0x42f * -0x8 + -0x1e1c + 0x3f94, _0x3119e6[_0x48b1d7(0x188)](_0x133768[_0x48b1d7(0x189)], _0x4ad73e[_0x48b1d7(0x189)]));
            _0x43c5dd[_0x48b1d7(0x175)](_0x3119e6['yvcZR'], replacer(_0x133768)), _0x43c5dd[_0x48b1d7(0x175)](_0x3119e6[_0x48b1d7(0x18a)], _0x3119e6['crGyH'](replacer, _0x3ba6aa, !![])), _0x43c5dd[_0x48b1d7(0x175)](_0x3119e6[_0x48b1d7(0x18b)], _0x3119e6[_0x48b1d7(0x18c)](replacer, _0x36d4c7, !![])), _0x43c5dd[_0x48b1d7(0x175)](_0x3119e6[_0x48b1d7(0x18d)], replacer(_0x5cb8a9, !![])), _0x43c5dd[_0x48b1d7(0x175)](_0x3119e6[_0x48b1d7(0x18e)], _0x3119e6[_0x48b1d7(0x18f)](replacer, _0x4ad73e)), _0x43c5dd[_0x48b1d7(0x175)](_0x3119e6[_0x48b1d7(0x190)], _0x3119e6[_0x48b1d7(0x18f)](replacer, _0x148a84)), _0x43c5dd[_0x48b1d7(0x175)](_0x3119e6[_0x48b1d7(0x191)], _0x3119e6['Bzwvl'](replacer, _0x4bd41d, !![])), _0x43c5dd[_0x48b1d7(0x175)](_0x48b1d7(0x192), _0x3119e6['yArkt'](deprecated, _0x3119e6[_0x48b1d7(0x18f)](replacer, _0x4ad73e), _0x3119e6[_0x48b1d7(0x193)], 'DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_FILENAME'));
        }
        if (_0x888c83[_0x48b1d7(0x194)]) {
            const _0x5940e7 = _0x3119e6['gBtyR'](hashLength, _0x3119e6['hWvLu'](replacer, _0x888c83[_0x48b1d7(0x194)]), _0x888c83[_0x48b1d7(0x17c)], _0x342789, _0x3119e6[_0x48b1d7(0x195)]);
            _0x43c5dd[_0x48b1d7(0x175)](_0x3119e6['DoYRx'], _0x5940e7), _0x43c5dd['set']('hash', deprecated(_0x5940e7, _0x3119e6[_0x48b1d7(0x196)], _0x3119e6[_0x48b1d7(0x197)]));
        }
        if (_0x888c83[_0x48b1d7(0x198)]) {
            const _0x4ee9c4 = _0x888c83[_0x48b1d7(0x198)], _0x517580 = _0x888c83['contentHashType'], _0xf3948a = _0x3119e6['FMbcU'](replacer, _0x4ee9c4['id']), _0xdbd0b7 = replacer(_0x4ee9c4['name'] || _0x4ee9c4['id']), _0x31c06c = hashLength(_0x3119e6[_0x48b1d7(0x199)](replacer, _0x3119e6[_0x48b1d7(0x19a)](_0x4ee9c4, Chunk) ? _0x4ee9c4['renderedHash'] : _0x4ee9c4[_0x48b1d7(0x194)]), _0x3119e6[_0x48b1d7(0x19b)](_0x3119e6[_0x48b1d7(0x19c)], _0x4ee9c4) ? _0x4ee9c4[_0x48b1d7(0x17c)] : undefined, _0x342789, _0x3119e6[_0x48b1d7(0x19d)]), _0x17f2ad = hashLength(_0x3119e6[_0x48b1d7(0x199)](replacer, _0x888c83[_0x48b1d7(0x19e)] || _0x517580 && _0x4ee9c4[_0x48b1d7(0x19e)] && _0x4ee9c4[_0x48b1d7(0x19e)][_0x517580]), _0x888c83[_0x48b1d7(0x19f)] || (_0x3119e6['wmduc'](_0x3119e6[_0x48b1d7(0x1a0)], _0x4ee9c4) && _0x4ee9c4[_0x48b1d7(0x19f)] ? _0x4ee9c4[_0x48b1d7(0x19f)][_0x517580] : undefined), _0x342789, _0x3119e6['CWLXb']);
            _0x43c5dd[_0x48b1d7(0x175)]('id', _0xf3948a), _0x43c5dd[_0x48b1d7(0x175)](_0x3119e6[_0x48b1d7(0x190)], _0xdbd0b7), _0x43c5dd[_0x48b1d7(0x175)](_0x48b1d7(0x17d), _0x31c06c), _0x43c5dd[_0x48b1d7(0x175)](_0x3119e6[_0x48b1d7(0x1a1)], _0x17f2ad);
        }
        if (_0x888c83[_0x48b1d7(0x1a2)]) {
            const _0x7a791 = _0x888c83[_0x48b1d7(0x1a2)], _0x1f460e = _0x3119e6[_0x48b1d7(0x1a3)](replacer, () => prepareId(_0x7a791 instanceof Module ? _0x5bc75d['getModuleId'](_0x7a791) : _0x7a791['id'])), _0x4bac69 = _0x3119e6['gBtyR'](hashLength, _0x3119e6['XnxvE'](replacer, () => _0x7a791 instanceof Module ? _0x5bc75d[_0x48b1d7(0x1a4)](_0x7a791, _0x888c83[_0x48b1d7(0x1a5)]) : _0x7a791['hash']), _0x3119e6[_0x48b1d7(0x1a6)](_0x3119e6[_0x48b1d7(0x19c)], _0x7a791) ? _0x7a791[_0x48b1d7(0x17c)] : undefined, _0x342789, 'modulehash'), _0x5cc950 = _0x3119e6[_0x48b1d7(0x1a7)](hashLength, _0x3119e6[_0x48b1d7(0x1a8)](replacer, _0x888c83[_0x48b1d7(0x19e)]), undefined, _0x342789, _0x48b1d7(0x17e));
            _0x43c5dd[_0x48b1d7(0x175)]('id', _0x1f460e), _0x43c5dd['set'](_0x3119e6[_0x48b1d7(0x1a9)], _0x4bac69), _0x43c5dd[_0x48b1d7(0x175)](_0x48b1d7(0x17e), _0x5cc950), _0x43c5dd[_0x48b1d7(0x175)](_0x3119e6[_0x48b1d7(0x1aa)], _0x888c83[_0x48b1d7(0x19e)] ? _0x5cc950 : _0x4bac69), _0x43c5dd[_0x48b1d7(0x175)](_0x3119e6[_0x48b1d7(0x1ab)], _0x3119e6['nNoIn'](deprecated, _0x1f460e, _0x3119e6['CcDmO'], _0x3119e6['HUSct']));
        }
        return _0x888c83[_0x48b1d7(0x183)] && _0x43c5dd['set'](_0x3119e6[_0x48b1d7(0x1ac)], _0x3119e6[_0x48b1d7(0x1ad)](replacer, _0x888c83[_0x48b1d7(0x183)])), _0x3119e6[_0x48b1d7(0x1ae)](typeof _0x888c83[_0x48b1d7(0x1a5)], _0x48b1d7(0x165)) ? _0x43c5dd['set'](_0x3119e6['LTCNF'], _0x3119e6[_0x48b1d7(0x1af)](replacer, () => prepareId(_0x888c83['runtime']))) : _0x43c5dd[_0x48b1d7(0x175)](_0x3119e6['LTCNF'], _0x3119e6['vvohB'](replacer, '_')), _0x3119e6[_0x48b1d7(0x1ae)](typeof _0x8ad322, 'function') && (_0x8ad322 = _0x3119e6[_0x48b1d7(0x1b0)](_0x8ad322, _0x888c83, _0x342789)), _0x8ad322 = _0x8ad322[_0x48b1d7(0x1b1)](REGEXP, (_0x5c91a8, _0x22d5e6) => {
            const _0x7f54f3 = _0x48b1d7;
            if (_0x3119e6[_0x7f54f3(0x1b2)](_0x22d5e6['length'], -0x25aa + 0x44e + 0x1 * 0x215e) === _0x5c91a8[_0x7f54f3(0x189)]) {
                const _0x11a78e = /^(\w+)(?::(\w+))?$/['exec'](_0x22d5e6);
                if (!_0x11a78e)
                    return _0x5c91a8;
                const [, _0x2933a9, _0x1f6e91] = _0x11a78e, _0x41c38b = _0x43c5dd[_0x7f54f3(0x173)](_0x2933a9);
                if (_0x3119e6[_0x7f54f3(0x1b3)](_0x41c38b, undefined))
                    return _0x3119e6[_0x7f54f3(0x1b4)](_0x41c38b, _0x5c91a8, _0x1f6e91, _0x8ad322);
            } else {
                if (_0x5c91a8[_0x7f54f3(0x1b5)]('[\x5c') && _0x5c91a8['endsWith']('\x5c]'))
                    return '[' + _0x5c91a8['slice'](-0x871 + -0x17ef + 0x2062, -(0x1049 + 0x1451 + -0x2498)) + ']';
            }
            return _0x5c91a8;
        }), _0x8ad322;
    }, plugin = _0x44c614(0x1b6);
class TemplatedPathPlugin {
    [_0x44c614(0x1b7)](_0x32876b) {
        const _0x230402 = _0x44c614;
        _0x32876b[_0x230402(0x1b8)][_0x230402(0x1b9)][_0x230402(0x1ba)](plugin, _0x32022e => {
            const _0x5358f8 = _0x230402;
            _0x32022e[_0x5358f8(0x1b8)][_0x5358f8(0x1bb)][_0x5358f8(0x1ba)](plugin, replacePathVariables);
        });
    }
}
module[_0x44c614(0x1bc)] = TemplatedPathPlugin;
