'use strict';
var _0x4d11 = [
    '_wnafT2',
    '_wnafT4',
    'two',
    'red',
    'zero',
    '_wnafT1',
    'prime',
    'mont',
    'cmpn',
    '_maxwellTrick',
    'redN',
    'div',
    '_wnafT3',
    'pointFromJSON',
    'gRed',
    'exports',
    'prototype',
    'point',
    'Not\x20implemented',
    'teQEI',
    'jpoint',
    'ZFsqR',
    'length',
    'step',
    'gVnHS',
    'iDvoo',
    'push',
    'AqmsT',
    'CMUGA',
    'WUYwg',
    'fGWSs',
    'mixedAdd',
    'points',
    'obRci',
    'neg',
    'add',
    'CuAaM',
    'aXzQE',
    'precomputed',
    '_wnafMul',
    'affine',
    '_getNAFPoints',
    'toaHC',
    'DRZGZ',
    'YEFKz',
    'IoOio',
    'URJOG',
    'type',
    'baCLz',
    'EdaHf',
    'Hauff',
    'VSgXu',
    'DPAeL',
    'dofhZ',
    'toP',
    '3|1|2|0|4',
    'iUbMr',
    'wnd',
    'JGCLl',
    'ECAni',
    'esdiy',
    'ZKOft',
    'nGORD',
    'AZZOj',
    'max',
    'cmp',
    'YzLfR',
    'toJ',
    'tctGR',
    'tVzUV',
    'DyHQs',
    'dblp',
    'LJjjc',
    'fwnGr',
    'CxFHI',
    'LjQoB',
    'YGisl',
    'curve',
    'BasePoint',
    'CDDxo',
    'validate',
    'toArray',
    'byteLength',
    'Qwjvh',
    'xIUiM',
    'AKWEf',
    'BCchs',
    'EtVoT',
    'oVOKp',
    'UqBZj',
    'rThZo',
    'slice',
    'DYcvG',
    'VayYE',
    'pointFromX',
    'MFmaD',
    'encodeCompressed',
    'encode',
    '_encode',
    'getY',
    'isEven',
    'concat',
    'precompute',
    'doubles',
    'naf',
    'beta',
    'ceil',
    'XdEZr',
    'bitLength',
    '_getDoubles',
    '1|3|0|4|2',
    'jFnwh',
    'muOAu',
    'dbl',
    '2|1|0|4|5|3',
    'swqMM',
    'MIZbA',
    'HwJKA',
    '_getBeta',
    '284416ACLxBD',
    '1451953zzYbvP',
    '820271WbSzsG',
    '2NpAuoE',
    '1152568DaCLVT',
    '1191039UwrRdd',
    '1UOPxId',
    '302853KDXPpu',
    '2865756wlKHEr',
    'bn.js',
    '../../elliptic',
    'utils',
    'getJSF',
    'assert',
    '9|8|6|4|0|3|11|13|5|1|12|2|10|7',
    'split',
    'one',
    'toRed'
];
var _0x17b045 = _0x35e1;
(function (_0x757698, _0x5daa77) {
    var _0x34a895 = _0x35e1;
    while (!![]) {
        try {
            var _0x5da74c = parseInt(_0x34a895(0x18e)) + parseInt(_0x34a895(0x18f)) + parseInt(_0x34a895(0x190)) * parseInt(_0x34a895(0x191)) + -parseInt(_0x34a895(0x192)) + -parseInt(_0x34a895(0x193)) * -parseInt(_0x34a895(0x194)) + parseInt(_0x34a895(0x195)) + -parseInt(_0x34a895(0x196));
            if (_0x5da74c === _0x5daa77)
                break;
            else
                _0x757698['push'](_0x757698['shift']());
        } catch (_0x4cfa64) {
            _0x757698['push'](_0x757698['shift']());
        }
    }
}(_0x4d11, -0x367f5 + -0x683aa * -0x3 + -0x3210a));
function _0x35e1(_0x15a558, _0x513f15) {
    return _0x35e1 = function (_0x54f0cb, _0x298144) {
        _0x54f0cb = _0x54f0cb - (-0xb63 + -0xc7 * 0x29 + 0x2cd0);
        var _0x3cb06c = _0x4d11[_0x54f0cb];
        return _0x3cb06c;
    }, _0x35e1(_0x15a558, _0x513f15);
}
var BN = require(_0x17b045(0x197)), elliptic = require(_0x17b045(0x198)), utils = elliptic[_0x17b045(0x199)], getNAF = utils['getNAF'], getJSF = utils[_0x17b045(0x19a)], assert = utils[_0x17b045(0x19b)];
function BaseCurve(_0x135d31, _0x585732) {
    var _0x59c46f = _0x17b045, _0xbd9a2f = _0x59c46f(0x19c)[_0x59c46f(0x19d)]('|'), _0x4c4e21 = -0x1082 + -0x1636 + -0x19d * -0x18;
    while (!![]) {
        switch (_0xbd9a2f[_0x4c4e21++]) {
        case '0':
            this[_0x59c46f(0x19e)] = new BN(0x1 * 0xe4e + 0x17 * 0x161 + -0x26 * 0x136)[_0x59c46f(0x19f)](this['red']);
            continue;
        case '1':
            this[_0x59c46f(0x1a0)] = new Array(-0x209b + -0x1f63 + 0x2 * 0x2001);
            continue;
        case '2':
            this[_0x59c46f(0x1a1)] = new Array(-0x3f9 + -0xcc6 + -0x1 * -0x10c3);
            continue;
        case '3':
            this[_0x59c46f(0x1a2)] = new BN(-0xa9c + -0x108a * 0x1 + 0x1b28)[_0x59c46f(0x19f)](this[_0x59c46f(0x1a3)]);
            continue;
        case '4':
            this[_0x59c46f(0x1a4)] = new BN(-0x142f + 0x1 * -0x32c + 0x7c9 * 0x3)[_0x59c46f(0x19f)](this[_0x59c46f(0x1a3)]);
            continue;
        case '5':
            this[_0x59c46f(0x1a5)] = new Array(0x2579 + -0x766 * 0x2 + -0x1 * 0x16a9);
            continue;
        case '6':
            this[_0x59c46f(0x1a3)] = _0x585732[_0x59c46f(0x1a6)] ? BN[_0x59c46f(0x1a3)](_0x585732[_0x59c46f(0x1a6)]) : BN[_0x59c46f(0x1a7)](this['p']);
            continue;
        case '7':
            !_0x23f6bb || _0x23f6bb[_0x59c46f(0x1a8)](-0x2183 + -0x8aa * 0x4 + -0x448f * -0x1) > -0x3b * 0xa7 + 0x120d * -0x1 + 0x388a ? this['redN'] = null : (this[_0x59c46f(0x1a9)] = !![], this[_0x59c46f(0x1aa)] = this['n'][_0x59c46f(0x19f)](this['red']));
            continue;
        case '8':
            this['p'] = new BN(_0x585732['p'], -0x18e7 + -0x127b + 0x2b72);
            continue;
        case '9':
            this['type'] = _0x135d31;
            continue;
        case '10':
            var _0x23f6bb = this['n'] && this['p'][_0x59c46f(0x1ab)](this['n']);
            continue;
        case '11':
            this['n'] = _0x585732['n'] && new BN(_0x585732['n'], -0xeaf + 0x12 * -0x15 + 0x1039 * 0x1);
            continue;
        case '12':
            this[_0x59c46f(0x1ac)] = new Array(-0x10 * 0x10 + -0x33 * -0x15 + 0x1 * -0x32b);
            continue;
        case '13':
            this['g'] = _0x585732['g'] && this[_0x59c46f(0x1ad)](_0x585732['g'], _0x585732[_0x59c46f(0x1ae)]);
            continue;
        }
        break;
    }
}
module[_0x17b045(0x1af)] = BaseCurve, BaseCurve[_0x17b045(0x1b0)][_0x17b045(0x1b1)] = function point() {
    var _0x2b90de = _0x17b045;
    throw new Error(_0x2b90de(0x1b2));
}, BaseCurve[_0x17b045(0x1b0)]['validate'] = function validate() {
    var _0x56722c = _0x17b045, _0x2d2afc = { 'teQEI': _0x56722c(0x1b2) };
    throw new Error(_0x2d2afc[_0x56722c(0x1b3)]);
}, BaseCurve[_0x17b045(0x1b0)]['_fixedNafMul'] = function _fixedNafMul(_0x4a276e, _0x48fbed) {
    var _0x10cf02 = _0x17b045, _0xc6419e = {
            'ZFsqR': function (_0x153167, _0x2ea325) {
                return _0x153167 < _0x2ea325;
            },
            'gVnHS': function (_0x197506, _0x5f30a2) {
                return _0x197506 - _0x5f30a2;
            },
            'eorEE': function (_0x4b4f77, _0x2e737e) {
                return _0x4b4f77 + _0x2e737e;
            },
            'GXqxz': function (_0x3cbad7, _0x2e66f5) {
                return _0x3cbad7 >= _0x2e66f5;
            },
            'iDvoo': function (_0xb6caac, _0x18bf28) {
                return _0xb6caac << _0x18bf28;
            },
            'AqmsT': function (_0x5209df, _0x3636ac) {
                return _0x5209df << _0x3636ac;
            },
            'lENWR': function (_0x20fb50, _0x2f6972) {
                return _0x20fb50 + _0x2f6972;
            },
            'CMUGA': function (_0x5e7b23, _0x100a06) {
                return _0x5e7b23 === _0x100a06;
            },
            'WUYwg': function (_0x1dfea3, _0x384f8e) {
                return _0x1dfea3 % _0x384f8e;
            },
            'fGWSs': function (_0x3c612a, _0xcb1c26) {
                return _0x3c612a > _0xcb1c26;
            },
            'obRci': function (_0x42baae, _0x2f3255) {
                return _0x42baae === _0x2f3255;
            },
            'CuAaM': function (_0x27d7ce, _0x550420, _0x1e0d1b) {
                return _0x27d7ce(_0x550420, _0x1e0d1b);
            },
            'aXzQE': function (_0x259bc1, _0x57d850) {
                return _0x259bc1(_0x57d850);
            }
        }, _0x8f99a7 = '9|1|8|5|6|10|4|2|3|7|0'[_0x10cf02(0x19d)]('|'), _0x492d08 = 0x1234 + 0x1ffc + -0x3230;
    while (!![]) {
        switch (_0x8f99a7[_0x492d08++]) {
        case '0':
            return _0x26e213['toP']();
        case '1':
            var _0x76105b = _0x4a276e['_getDoubles']();
            continue;
        case '2':
            var _0x26e213 = this[_0x10cf02(0x1b4)](null, null, null);
            continue;
        case '3':
            var _0x4ef0ae = this[_0x10cf02(0x1b4)](null, null, null);
            continue;
        case '4':
            for (var _0x34160f = -0x3 * 0xcd1 + -0x2143 * -0x1 + 0x1 * 0x530; _0xc6419e[_0x10cf02(0x1b5)](_0x34160f, _0x54f0fa[_0x10cf02(0x1b6)]); _0x34160f += _0x76105b[_0x10cf02(0x1b7)]) {
                var _0x3199bf = 0x7 * -0x35b + -0x1 * -0x26bd + -0xf40;
                for (var _0x48fbed = _0xc6419e[_0x10cf02(0x1b8)](_0xc6419e['eorEE'](_0x34160f, _0x76105b[_0x10cf02(0x1b7)]), 0x44b + 0x1689 + 0x2fb * -0x9); _0xc6419e['GXqxz'](_0x48fbed, _0x34160f); _0x48fbed--)
                    _0x3199bf = _0xc6419e['eorEE'](_0xc6419e[_0x10cf02(0x1b9)](_0x3199bf, -0x1 * -0x2168 + 0x1 * -0x21d5 + -0xa * -0xb), _0x54f0fa[_0x48fbed]);
                _0x450d9f[_0x10cf02(0x1ba)](_0x3199bf);
            }
            continue;
        case '5':
            var _0x60619a = _0xc6419e[_0x10cf02(0x1b8)](_0xc6419e[_0x10cf02(0x1bb)](0x363 + -0x6f1 * -0x3 + -0x1835, _0xc6419e['lENWR'](_0x76105b[_0x10cf02(0x1b7)], -0x1631 + -0x4a * 0x16 + 0x1c8e)), _0xc6419e[_0x10cf02(0x1bc)](_0xc6419e[_0x10cf02(0x1bd)](_0x76105b[_0x10cf02(0x1b7)], 0x1ccd + -0x17d2 + 0x4f9 * -0x1), 0x1 * -0x9e3 + 0x43 * 0x1 + -0x8 * -0x134) ? 0x16 * -0x34 + 0x41 * -0x4f + 0x1889 : 0xe54 + 0x1bcc + -0x2a1f);
            continue;
        case '6':
            _0x60619a /= 0x9b1 * -0x3 + -0x8 * -0xf8 + 0x1556;
            continue;
        case '7':
            for (var _0x2a2425 = _0x60619a; _0xc6419e[_0x10cf02(0x1be)](_0x2a2425, -0x349 * -0xb + 0x18 * 0x105 + -0x91 * 0x6b); _0x2a2425--) {
                for (var _0x34160f = 0x1 * -0xec1 + -0x10e3 + 0x1fa4; _0x34160f < _0x450d9f[_0x10cf02(0x1b6)]; _0x34160f++) {
                    var _0x3199bf = _0x450d9f[_0x34160f];
                    if (_0x3199bf === _0x2a2425)
                        _0x4ef0ae = _0x4ef0ae[_0x10cf02(0x1bf)](_0x76105b[_0x10cf02(0x1c0)][_0x34160f]);
                    else {
                        if (_0xc6419e[_0x10cf02(0x1c1)](_0x3199bf, -_0x2a2425))
                            _0x4ef0ae = _0x4ef0ae[_0x10cf02(0x1bf)](_0x76105b[_0x10cf02(0x1c0)][_0x34160f][_0x10cf02(0x1c2)]());
                    }
                }
                _0x26e213 = _0x26e213[_0x10cf02(0x1c3)](_0x4ef0ae);
            }
            continue;
        case '8':
            var _0x54f0fa = _0xc6419e[_0x10cf02(0x1c4)](getNAF, _0x48fbed, -0xe14 + -0x3 * 0x990 + 0x2ac5);
            continue;
        case '9':
            _0xc6419e[_0x10cf02(0x1c5)](assert, _0x4a276e[_0x10cf02(0x1c6)]);
            continue;
        case '10':
            var _0x450d9f = [];
            continue;
        }
        break;
    }
}, BaseCurve[_0x17b045(0x1b0)][_0x17b045(0x1c7)] = function _wnafMul(_0x5dea47, _0x523719) {
    var _0x3b76c3 = _0x17b045, _0x17ba7a = {
            'toaHC': function (_0x1b7531, _0x202bec, _0x57a523) {
                return _0x1b7531(_0x202bec, _0x57a523);
            },
            'zIsuZ': function (_0x559055, _0x1b5811) {
                return _0x559055 - _0x1b5811;
            },
            'DRZGZ': function (_0x286882, _0x3b9259) {
                return _0x286882 >= _0x3b9259;
            },
            'YEFKz': function (_0x3bc436, _0x1bf67c) {
                return _0x3bc436 >= _0x1bf67c;
            },
            'pqhkt': function (_0x2f1666, _0x3f59c5) {
                return _0x2f1666 === _0x3f59c5;
            },
            'IoOio': function (_0x3daa65, _0x23173b) {
                return _0x3daa65 >= _0x23173b;
            },
            'qcUrA': function (_0x117fc8, _0x17a531) {
                return _0x117fc8(_0x17a531);
            },
            'URJOG': function (_0x1d393e, _0x1b0108) {
                return _0x1d393e !== _0x1b0108;
            },
            'baCLz': _0x3b76c3(0x1c8),
            'EdaHf': function (_0x18bc06, _0x565f39) {
                return _0x18bc06 >> _0x565f39;
            },
            'gAzoN': function (_0x4962ac, _0x5db620) {
                return _0x4962ac - _0x5db620;
            },
            'Hauff': function (_0x567621, _0x3655b6) {
                return _0x567621 >> _0x3655b6;
            },
            'VSgXu': function (_0x608b01, _0x1a782c) {
                return _0x608b01 >> _0x1a782c;
            },
            'DPAeL': function (_0x250a11, _0x3cc45d) {
                return _0x250a11 - _0x3cc45d;
            },
            'dofhZ': function (_0x26aaf1, _0x6dee68) {
                return _0x26aaf1 === _0x6dee68;
            }
        }, _0x2271ee = 0xe67 + -0x36 * 0x83 + -0x1 * -0xd3f, _0x1dd6fe = _0x5dea47[_0x3b76c3(0x1c9)](_0x2271ee);
    _0x2271ee = _0x1dd6fe['wnd'];
    var _0x2ccedc = _0x1dd6fe[_0x3b76c3(0x1c0)], _0x1d1014 = _0x17ba7a[_0x3b76c3(0x1ca)](getNAF, _0x523719, _0x2271ee), _0x133a30 = this['jpoint'](null, null, null);
    for (var _0x38a293 = _0x17ba7a['zIsuZ'](_0x1d1014['length'], -0x2626 + -0xf2c + 0x3553 * 0x1); _0x17ba7a[_0x3b76c3(0x1cb)](_0x38a293, 0x1558 + 0x19f7 + -0x2f4f); _0x38a293--) {
        for (var _0x523719 = -0x4a * -0x4d + 0x12c9 + -0x290b; _0x17ba7a[_0x3b76c3(0x1cc)](_0x38a293, -0xe3 * 0x19 + -0x199b + 0x2fc6) && _0x17ba7a['pqhkt'](_0x1d1014[_0x38a293], 0x1b8d * 0x1 + 0x10 * 0x9e + -0x256d); _0x38a293--)
            _0x523719++;
        if (_0x17ba7a[_0x3b76c3(0x1cd)](_0x38a293, 0x68c * -0x5 + -0xa * -0x2e4 + -0x5 * -0xc4))
            _0x523719++;
        _0x133a30 = _0x133a30['dblp'](_0x523719);
        if (_0x38a293 < 0x303 + -0x1 * -0x1311 + 0x75c * -0x3)
            break;
        var _0x3eb390 = _0x1d1014[_0x38a293];
        _0x17ba7a['qcUrA'](assert, _0x17ba7a[_0x3b76c3(0x1ce)](_0x3eb390, -0x22a6 + 0x567 * -0x2 + 0x2d74));
        if (_0x5dea47[_0x3b76c3(0x1cf)] === _0x17ba7a[_0x3b76c3(0x1d0)]) {
            if (_0x3eb390 > -0x249 * -0x3 + 0x1d * 0x49 + -0xf20)
                _0x133a30 = _0x133a30[_0x3b76c3(0x1bf)](_0x2ccedc[_0x17ba7a[_0x3b76c3(0x1d1)](_0x17ba7a['gAzoN'](_0x3eb390, -0x24f7 + 0xb * 0x1ae + 0x9 * 0x20e), -0x1f8 + -0x53d + 0x1 * 0x736)]);
            else
                _0x133a30 = _0x133a30['mixedAdd'](_0x2ccedc[_0x17ba7a[_0x3b76c3(0x1d2)](-_0x3eb390 - (-0xe20 + -0x16dd + 0x24fe), -0x2002 + -0xa * 0x32b + 0x3fb1)][_0x3b76c3(0x1c2)]());
        } else {
            if (_0x3eb390 > -0x1e2c + -0x23df * 0x1 + 0x13f * 0x35)
                _0x133a30 = _0x133a30['add'](_0x2ccedc[_0x17ba7a[_0x3b76c3(0x1d3)](_0x17ba7a[_0x3b76c3(0x1d4)](_0x3eb390, 0x4 * -0x38 + -0xb41 + 0xc22 * 0x1), -0x355 * 0x2 + -0x1490 + 0x1b3b)]);
            else
                _0x133a30 = _0x133a30['add'](_0x2ccedc[-_0x3eb390 - (0x25cd + -0x263c * 0x1 + -0x10 * -0x7) >> 0x1d95 + -0xdbe * -0x1 + -0x2b52]['neg']());
        }
    }
    return _0x17ba7a[_0x3b76c3(0x1d5)](_0x5dea47[_0x3b76c3(0x1cf)], _0x17ba7a[_0x3b76c3(0x1d0)]) ? _0x133a30[_0x3b76c3(0x1d6)]() : _0x133a30;
}, BaseCurve[_0x17b045(0x1b0)]['_wnafMulAdd'] = function _wnafMulAdd(_0x1b1601, _0x262a35, _0x3f24b4, _0x114d17, _0x162569) {
    var _0x23b70e = _0x17b045, _0x214c62 = {
            'iUbMr': function (_0x548257, _0x1c6404) {
                return _0x548257 < _0x1c6404;
            },
            'JGCLl': function (_0xdb5e3f, _0x220d54) {
                return _0xdb5e3f - _0x220d54;
            },
            'ECAni': function (_0x46ea90, _0x321b7a) {
                return _0x46ea90 >= _0x321b7a;
            },
            'esdiy': function (_0x486ed8, _0x21a435) {
                return _0x486ed8 !== _0x21a435;
            },
            'ZKOft': function (_0x1eaa42, _0x20e0bc) {
                return _0x1eaa42 !== _0x20e0bc;
            },
            'nGORD': function (_0x175887, _0x14eb37, _0xe4f536) {
                return _0x175887(_0x14eb37, _0xe4f536);
            },
            'AZZOj': function (_0x1a026d, _0xbbe22b, _0x1c7e11) {
                return _0x1a026d(_0xbbe22b, _0x1c7e11);
            },
            'YzLfR': function (_0x5c5936, _0xa35f15) {
                return _0x5c5936 === _0xa35f15;
            },
            'Jdjwp': function (_0x177e25, _0x2228cd, _0x13cc08) {
                return _0x177e25(_0x2228cd, _0x13cc08);
            },
            'SlihW': _0x23b70e(0x1d7),
            'tctGR': function (_0x3a7f35, _0x33d926) {
                return _0x3a7f35 | _0x33d926;
            },
            'tVzUV': function (_0x3fe728, _0x3dadb0) {
                return _0x3fe728 + _0x3dadb0;
            },
            'ERgOl': function (_0x55a564, _0x1c3f65) {
                return _0x55a564 + _0x1c3f65;
            },
            'DyHQs': function (_0x3e5d01, _0x2a3deb) {
                return _0x3e5d01 !== _0x2a3deb;
            },
            'RAZLU': function (_0x5b36c3, _0x3d55de) {
                return _0x5b36c3 > _0x3d55de;
            },
            'xTrVv': function (_0x594406, _0x16babc) {
                return _0x594406 - _0x16babc;
            },
            'LJjjc': function (_0x1b11ce, _0x590c68) {
                return _0x1b11ce >> _0x590c68;
            },
            'fwnGr': function (_0x20822d, _0x2ab8f7) {
                return _0x20822d - _0x2ab8f7;
            },
            'CxFHI': function (_0x292ecd, _0x4ca2bc) {
                return _0x292ecd === _0x4ca2bc;
            },
            'LjQoB': _0x23b70e(0x1c8),
            'YGisl': function (_0xafa071, _0x31dacb) {
                return _0xafa071 < _0x31dacb;
            }
        }, _0x2b1e88 = this[_0x23b70e(0x1a5)], _0x5965b0 = this[_0x23b70e(0x1a0)], _0x5c0658 = this[_0x23b70e(0x1ac)], _0x23cc67 = -0x16 * -0xcd + -0x1cbe + 0xb20;
    for (var _0x4b336e = 0xe25 + -0x3a * 0x8e + 0x5 * 0x39b; _0x214c62[_0x23b70e(0x1d8)](_0x4b336e, _0x114d17); _0x4b336e++) {
        var _0xddbfb6 = _0x262a35[_0x4b336e], _0x2a7e43 = _0xddbfb6[_0x23b70e(0x1c9)](_0x1b1601);
        _0x2b1e88[_0x4b336e] = _0x2a7e43[_0x23b70e(0x1d9)], _0x5965b0[_0x4b336e] = _0x2a7e43[_0x23b70e(0x1c0)];
    }
    for (var _0x4b336e = _0x214c62[_0x23b70e(0x1da)](_0x114d17, -0x1 * -0x303 + 0x87e * 0x1 + 0x1 * -0xb80); _0x214c62[_0x23b70e(0x1db)](_0x4b336e, 0x7 * -0x18b + -0x7a5 + -0x1 * -0x1273); _0x4b336e -= 0x536 + 0x6 * 0x7f + 0x6 * -0x15d) {
        var _0x33387d = _0x214c62[_0x23b70e(0x1da)](_0x4b336e, -0xef2 + 0x1 * 0xea3 + -0x1 * -0x50), _0x2fb642 = _0x4b336e;
        if (_0x214c62[_0x23b70e(0x1dc)](_0x2b1e88[_0x33387d], 0x1503 + 0xc6d + -0x216f) || _0x214c62[_0x23b70e(0x1dd)](_0x2b1e88[_0x2fb642], 0x1444 + 0x17e6 + -0x2c29)) {
            _0x5c0658[_0x33387d] = _0x214c62[_0x23b70e(0x1de)](getNAF, _0x3f24b4[_0x33387d], _0x2b1e88[_0x33387d]), _0x5c0658[_0x2fb642] = _0x214c62[_0x23b70e(0x1df)](getNAF, _0x3f24b4[_0x2fb642], _0x2b1e88[_0x2fb642]), _0x23cc67 = Math[_0x23b70e(0x1e0)](_0x5c0658[_0x33387d][_0x23b70e(0x1b6)], _0x23cc67), _0x23cc67 = Math[_0x23b70e(0x1e0)](_0x5c0658[_0x2fb642][_0x23b70e(0x1b6)], _0x23cc67);
            continue;
        }
        var _0x4e2d9c = [
            _0x262a35[_0x33387d],
            null,
            null,
            _0x262a35[_0x2fb642]
        ];
        if (_0x262a35[_0x33387d]['y'][_0x23b70e(0x1e1)](_0x262a35[_0x2fb642]['y']) === -0x1739 + -0xb1a + 0x2253)
            _0x4e2d9c[0x1768 + 0x4f5 * -0x6 + 0x657] = _0x262a35[_0x33387d][_0x23b70e(0x1c3)](_0x262a35[_0x2fb642]), _0x4e2d9c[-0x1c92 * -0x1 + -0xc3e + 0x829 * -0x2] = _0x262a35[_0x33387d]['toJ']()[_0x23b70e(0x1bf)](_0x262a35[_0x2fb642][_0x23b70e(0x1c2)]());
        else
            _0x214c62[_0x23b70e(0x1e2)](_0x262a35[_0x33387d]['y'][_0x23b70e(0x1e1)](_0x262a35[_0x2fb642]['y']['redNeg']()), -0x1741 + 0x58 + 0x16e9) ? (_0x4e2d9c[0x65b + 0x167a + -0xc * 0x267] = _0x262a35[_0x33387d][_0x23b70e(0x1e3)]()[_0x23b70e(0x1bf)](_0x262a35[_0x2fb642]), _0x4e2d9c[-0x1 * -0x1426 + 0xf1 * -0xd + 0x11 * -0x77] = _0x262a35[_0x33387d][_0x23b70e(0x1c3)](_0x262a35[_0x2fb642][_0x23b70e(0x1c2)]())) : (_0x4e2d9c[-0x1008 * -0x2 + -0xbf1 * 0x1 + -0x141e * 0x1] = _0x262a35[_0x33387d][_0x23b70e(0x1e3)]()[_0x23b70e(0x1bf)](_0x262a35[_0x2fb642]), _0x4e2d9c[0x5d1 + 0x8 * -0x19 + -0x507] = _0x262a35[_0x33387d][_0x23b70e(0x1e3)]()[_0x23b70e(0x1bf)](_0x262a35[_0x2fb642][_0x23b70e(0x1c2)]()));
        var _0x2ea674 = [
                -(0x21a7 + 0x1a5c + -0xc0 * 0x50),
                -(0x8e2 + -0x1 * 0xb0d + 0x8b * 0x4),
                -(-0xce8 + -0x128 + -0x2d1 * -0x5),
                -(0x1cb4 + -0x1e9f + 0x2 * 0xf9),
                0x188e + 0x1 * 0x1ba7 + 0x4bf * -0xb,
                -0x353 + -0x5 * 0x3cf + -0x111 * -0x15,
                -0x2488 + -0x1 * -0x259d + -0x110,
                -0xd25 + 0x1e33 + -0x110d,
                -0x1695 + 0x21dd * -0x1 + 0x3875
            ], _0xcb19d = _0x214c62['Jdjwp'](getJSF, _0x3f24b4[_0x33387d], _0x3f24b4[_0x2fb642]);
        _0x23cc67 = Math[_0x23b70e(0x1e0)](_0xcb19d[-0x16 * -0xcb + 0x1eb * 0x3 + -0x1733][_0x23b70e(0x1b6)], _0x23cc67), _0x5c0658[_0x33387d] = new Array(_0x23cc67), _0x5c0658[_0x2fb642] = new Array(_0x23cc67);
        for (var _0x3ba928 = -0xb61 + 0x842 + 0x31f * 0x1; _0x214c62[_0x23b70e(0x1d8)](_0x3ba928, _0x23cc67); _0x3ba928++) {
            var _0x458ed9 = _0x214c62['SlihW'][_0x23b70e(0x19d)]('|'), _0x1fb1ec = -0x865 + 0x55f * 0x1 + -0x183 * -0x2;
            while (!![]) {
                switch (_0x458ed9[_0x1fb1ec++]) {
                case '0':
                    _0x5c0658[_0x2fb642][_0x3ba928] = -0x4a * -0x63 + 0x2585 + -0x4223;
                    continue;
                case '1':
                    var _0x38644b = _0x214c62[_0x23b70e(0x1e4)](_0xcb19d[0x9c0 + -0x1f43 + 0x1584][_0x3ba928], 0x56e + -0x1dea + 0x187c);
                    continue;
                case '2':
                    _0x5c0658[_0x33387d][_0x3ba928] = _0x2ea674[_0x214c62[_0x23b70e(0x1e5)](_0x7136db, 0x21a4 * 0x1 + -0x14c3 + 0x338 * -0x4) * (-0x23fb + 0xa48 + 0x19b6) + _0x214c62['ERgOl'](_0x38644b, 0x373 * -0x2 + 0xfdb + 0xbf * -0xc)];
                    continue;
                case '3':
                    var _0x7136db = _0x214c62[_0x23b70e(0x1e4)](_0xcb19d[-0x2 * 0xf6a + -0x1 * -0x631 + 0x18a3][_0x3ba928], 0x1b8b + -0x47c * 0x7 + 0xc5 * 0x5);
                    continue;
                case '4':
                    _0x5965b0[_0x33387d] = _0x4e2d9c;
                    continue;
                }
                break;
            }
        }
    }
    var _0x8678fa = this[_0x23b70e(0x1b4)](null, null, null), _0x4a853c = this[_0x23b70e(0x1a1)];
    for (var _0x4b336e = _0x23cc67; _0x4b336e >= -0x8e * 0x13 + 0x4 * 0x60a + -0xd9e; _0x4b336e--) {
        var _0x238865 = 0x1e84 + -0x4f1 + -0x1993;
        while (_0x4b336e >= 0x1a0 + 0x3 * -0x5d7 + 0xd * 0x139) {
            var _0x1fbca9 = !![];
            for (var _0x3ba928 = 0x7b4 + -0x1a7d * 0x1 + 0x12c9; _0x3ba928 < _0x114d17; _0x3ba928++) {
                _0x4a853c[_0x3ba928] = _0x5c0658[_0x3ba928][_0x4b336e] | -0x2 * -0x147 + -0x1ca2 * -0x1 + -0x1f30;
                if (_0x214c62[_0x23b70e(0x1e6)](_0x4a853c[_0x3ba928], -0x3 * 0x551 + -0x1 * 0x607 + -0x1 * -0x15fa))
                    _0x1fbca9 = ![];
            }
            if (!_0x1fbca9)
                break;
            _0x238865++, _0x4b336e--;
        }
        if (_0x214c62[_0x23b70e(0x1db)](_0x4b336e, 0x29 * -0x23 + -0x1aae + -0x13 * -0x1b3))
            _0x238865++;
        _0x8678fa = _0x8678fa[_0x23b70e(0x1e7)](_0x238865);
        if (_0x214c62[_0x23b70e(0x1d8)](_0x4b336e, 0x26a6 * -0x1 + -0x3bd + -0x3 * -0xe21))
            break;
        for (var _0x3ba928 = -0x5df + -0xf98 * 0x1 + -0x44b * -0x5; _0x214c62['iUbMr'](_0x3ba928, _0x114d17); _0x3ba928++) {
            var _0x2cf948 = _0x4a853c[_0x3ba928], _0xddbfb6;
            if (_0x2cf948 === -0x13f6 + -0x115 * 0x1f + 0x3581)
                continue;
            else {
                if (_0x214c62['RAZLU'](_0x2cf948, -0x443 * -0x3 + 0x1 * -0x2 + -0xcc7))
                    _0xddbfb6 = _0x5965b0[_0x3ba928][_0x214c62['xTrVv'](_0x2cf948, -0x900 + -0x76b + 0x106c) >> -0x1 * 0x21e2 + -0xa59 * 0x2 + 0x3695];
                else {
                    if (_0x214c62['iUbMr'](_0x2cf948, 0x1557 + 0xd56 + 0x21 * -0x10d))
                        _0xddbfb6 = _0x5965b0[_0x3ba928][_0x214c62[_0x23b70e(0x1e8)](_0x214c62[_0x23b70e(0x1e9)](-_0x2cf948, 0xce * 0x20 + 0xa * -0x35f + 0x7f7), -0x1 * -0x1d47 + 0x18bb + -0x3601)]['neg']();
                }
            }
            if (_0x214c62[_0x23b70e(0x1ea)](_0xddbfb6['type'], _0x214c62[_0x23b70e(0x1eb)]))
                _0x8678fa = _0x8678fa[_0x23b70e(0x1bf)](_0xddbfb6);
            else
                _0x8678fa = _0x8678fa[_0x23b70e(0x1c3)](_0xddbfb6);
        }
    }
    for (var _0x4b336e = 0x1dcc + -0x115d * -0x2 + -0x4086; _0x214c62[_0x23b70e(0x1ec)](_0x4b336e, _0x114d17); _0x4b336e++)
        _0x5965b0[_0x4b336e] = null;
    if (_0x162569)
        return _0x8678fa;
    else
        return _0x8678fa['toP']();
};
function BasePoint(_0x283b38, _0x2d972d) {
    var _0x38bd7d = _0x17b045;
    this[_0x38bd7d(0x1ed)] = _0x283b38, this[_0x38bd7d(0x1cf)] = _0x2d972d, this[_0x38bd7d(0x1c6)] = null;
}
BaseCurve[_0x17b045(0x1ee)] = BasePoint, BasePoint['prototype']['eq'] = function eq() {
    var _0x352306 = _0x17b045, _0x3113dd = { 'CDDxo': _0x352306(0x1b2) };
    throw new Error(_0x3113dd[_0x352306(0x1ef)]);
}, BasePoint[_0x17b045(0x1b0)]['validate'] = function validate() {
    var _0x1bb764 = _0x17b045;
    return this[_0x1bb764(0x1ed)][_0x1bb764(0x1f0)](this);
}, BaseCurve['prototype']['decodePoint'] = function decodePoint(_0x48d6de, _0x310398) {
    var _0x2c21f0 = _0x17b045, _0x864eb7 = {
            'Qwjvh': function (_0x46b934, _0x948d08) {
                return _0x46b934 === _0x948d08;
            },
            'xIUiM': function (_0x102094, _0x201b9b) {
                return _0x102094 === _0x201b9b;
            },
            'oldFO': function (_0x2a427f, _0x55a39c) {
                return _0x2a427f - _0x55a39c;
            },
            'VyGab': function (_0x25b473, _0x50fb8b) {
                return _0x25b473 * _0x50fb8b;
            },
            'AKWEf': function (_0x2f6e2f, _0x2de6ec) {
                return _0x2f6e2f === _0x2de6ec;
            },
            'BCchs': function (_0xec232a, _0x252133) {
                return _0xec232a(_0x252133);
            },
            'uwjJe': function (_0x339b00, _0x165f73) {
                return _0x339b00 === _0x165f73;
            },
            'EtVoT': function (_0x3d319d, _0x574b60) {
                return _0x3d319d === _0x574b60;
            },
            'oVOKp': function (_0x494e62, _0x42376d) {
                return _0x494e62(_0x42376d);
            },
            'UqBZj': function (_0x5753b9, _0x53b21f) {
                return _0x5753b9 === _0x53b21f;
            },
            'rThZo': function (_0x55938d, _0x1c15d9) {
                return _0x55938d % _0x1c15d9;
            },
            'lnctw': function (_0x1bd7c1, _0x4c60a4) {
                return _0x1bd7c1 - _0x4c60a4;
            },
            'CwrEr': function (_0x59b371, _0x594771) {
                return _0x59b371 + _0x594771;
            },
            'DYcvG': function (_0x9adbd0, _0x4163ea) {
                return _0x9adbd0 + _0x4163ea;
            },
            'VayYE': function (_0x4708ca, _0x47428a) {
                return _0x4708ca - _0x47428a;
            },
            'MFmaD': function (_0x25b122, _0x3b5928) {
                return _0x25b122 === _0x3b5928;
            },
            'enRGV': 'Unknown\x20point\x20format'
        };
    _0x48d6de = utils[_0x2c21f0(0x1f1)](_0x48d6de, _0x310398);
    var _0x11d323 = this['p'][_0x2c21f0(0x1f2)]();
    if ((_0x864eb7[_0x2c21f0(0x1f3)](_0x48d6de[0x1dd + -0x14d1 + 0x12f4 * 0x1], 0x9 * -0x2f5 + 0x1ad9 + -0x38) || _0x48d6de[0x20 * -0x91 + 0x8 * 0x457 + -0x1098] === 0x612 + 0x1 * 0x125f + -0x186b || _0x864eb7[_0x2c21f0(0x1f4)](_0x48d6de[0xc77 + 0x4 * 0x473 + -0x1e43], -0x200 * 0x3 + -0x4b * 0x6f + 0x1346 * 0x2)) && _0x864eb7[_0x2c21f0(0x1f4)](_0x864eb7['oldFO'](_0x48d6de[_0x2c21f0(0x1b6)], -0x2026 + 0xb * 0x2ff + -0x2 * 0x67), _0x864eb7['VyGab'](0x314 + -0x425 * 0x7 + -0xe5 * -0x1d, _0x11d323))) {
        if (_0x864eb7[_0x2c21f0(0x1f5)](_0x48d6de[0x965 + -0x7cf + 0x2 * -0xcb], -0x650 + -0x1d93 * -0x1 + -0x295 * 0x9))
            _0x864eb7[_0x2c21f0(0x1f6)](assert, _0x864eb7['uwjJe'](_0x48d6de[_0x48d6de[_0x2c21f0(0x1b6)] - (-0x1 * 0x5d1 + 0x2 * -0x7f6 + 0x1fa * 0xb)] % (-0x1 * -0x11 + -0x57f + 0x570), 0x124 * 0x1 + -0x761 * 0x3 + 0x14ff));
        else {
            if (_0x864eb7[_0x2c21f0(0x1f7)](_0x48d6de[-0x703 + 0x1 * 0x10b2 + -0x43 * 0x25], 0x4 * 0x928 + -0x2d7 * 0x1 + -0x21c2 * 0x1))
                _0x864eb7[_0x2c21f0(0x1f8)](assert, _0x864eb7[_0x2c21f0(0x1f9)](_0x864eb7[_0x2c21f0(0x1fa)](_0x48d6de[_0x864eb7['lnctw'](_0x48d6de[_0x2c21f0(0x1b6)], 0xe6e * 0x1 + 0x1 * 0xb3 + 0x20 * -0x79)], 0x13a0 + 0xf33 * -0x1 + -0x46b), -0x3c3 + 0x1 * -0x2373 + 0x2737));
        }
        var _0x3f5fb6 = this[_0x2c21f0(0x1b1)](_0x48d6de['slice'](0x1a16 * -0x1 + 0x1d48 + -0x331, _0x864eb7['CwrEr'](-0x5 * 0x54b + -0x22e9 + 0x3d61, _0x11d323)), _0x48d6de[_0x2c21f0(0x1fb)](_0x864eb7[_0x2c21f0(0x1fc)](0x12d + 0x2039 + 0x53 * -0x67, _0x11d323), _0x864eb7[_0x2c21f0(0x1fc)](0x2 * -0x6f8 + 0xda1 + -0x2 * -0x28, (-0x1a23 + -0x2189 + -0x2 * -0x1dd7) * _0x11d323)));
        return _0x3f5fb6;
    } else {
        if ((_0x864eb7['UqBZj'](_0x48d6de[-0x1 * 0x1793 + -0x5 * -0x2b + 0x48c * 0x5], -0x25ec * 0x1 + 0x2559 + 0x95 * 0x1) || _0x864eb7[_0x2c21f0(0x1f9)](_0x48d6de[-0x24b9 + 0x15cd * -0x1 + 0x3a86], 0x265 * -0xb + -0xe4a + 0x28a4)) && _0x864eb7[_0x2c21f0(0x1fd)](_0x48d6de[_0x2c21f0(0x1b6)], -0x228f + -0x23b7 + 0x4647) === _0x11d323)
            return this[_0x2c21f0(0x1fe)](_0x48d6de['slice'](0x1 * 0x21ff + 0xdde + -0x2fdc, 0xfe7 + 0x1 * -0x228e + 0x12a8 + _0x11d323), _0x864eb7[_0x2c21f0(0x1ff)](_0x48d6de[0x16f7 + 0x33e * -0x1 + 0x231 * -0x9], 0x1359 + -0x1749 + 0x3f3));
    }
    throw new Error(_0x864eb7['enRGV']);
}, BasePoint[_0x17b045(0x1b0)][_0x17b045(0x200)] = function encodeCompressed(_0x4c0115) {
    var _0x275e67 = _0x17b045;
    return this[_0x275e67(0x201)](_0x4c0115, !![]);
}, BasePoint[_0x17b045(0x1b0)][_0x17b045(0x202)] = function _encode(_0x3980fd) {
    var _0x1d2650 = _0x17b045, _0x2ec7c3 = this['curve']['p'][_0x1d2650(0x1f2)](), _0x441912 = this['getX']()[_0x1d2650(0x1f1)]('be', _0x2ec7c3);
    if (_0x3980fd)
        return [this[_0x1d2650(0x203)]()[_0x1d2650(0x204)]() ? -0x1 * 0x1119 + 0x1ae1 + 0x9c6 * -0x1 : 0x6 * -0x2c7 + 0x1740 + 0x231 * -0x3][_0x1d2650(0x205)](_0x441912);
    return [-0x1 * 0x1db3 + -0x1ae5 + 0x389c][_0x1d2650(0x205)](_0x441912, this['getY']()[_0x1d2650(0x1f1)]('be', _0x2ec7c3));
}, BasePoint[_0x17b045(0x1b0)][_0x17b045(0x201)] = function encode(_0x267289, _0x52e22e) {
    var _0x18055a = _0x17b045;
    return utils['encode'](this[_0x18055a(0x202)](_0x52e22e), _0x267289);
}, BasePoint[_0x17b045(0x1b0)][_0x17b045(0x206)] = function precompute(_0x33b87d) {
    var _0x575e11 = _0x17b045, _0x294d99 = { 'FGerd': '2|4|3|1|5|6|0' }, _0x21ed23 = _0x294d99['FGerd'][_0x575e11(0x19d)]('|'), _0x3265f1 = -0xccd + 0x1 * 0x10e7 + 0xa * -0x69;
    while (!![]) {
        switch (_0x21ed23[_0x3265f1++]) {
        case '0':
            return this;
        case '1':
            _0x5599b4[_0x575e11(0x207)] = this['_getDoubles'](-0x243b + -0x14 * 0xff + 0x382b, _0x33b87d);
            continue;
        case '2':
            if (this[_0x575e11(0x1c6)])
                return this;
            continue;
        case '3':
            _0x5599b4[_0x575e11(0x208)] = this['_getNAFPoints'](-0x1ce0 + 0x9dc + -0x5c * -0x35);
            continue;
        case '4':
            var _0x5599b4 = {
                'doubles': null,
                'naf': null,
                'beta': null
            };
            continue;
        case '5':
            _0x5599b4[_0x575e11(0x209)] = this['_getBeta']();
            continue;
        case '6':
            this[_0x575e11(0x1c6)] = _0x5599b4;
            continue;
        }
        break;
    }
}, BasePoint[_0x17b045(0x1b0)]['_hasDoubles'] = function _hasDoubles(_0x4d6691) {
    var _0x4994e1 = _0x17b045, _0x3df297 = {
            'IOrUS': function (_0x42021e, _0x59c935) {
                return _0x42021e >= _0x59c935;
            },
            'XdEZr': function (_0x5f2f3f, _0x25d4f3) {
                return _0x5f2f3f / _0x25d4f3;
            }
        };
    if (!this[_0x4994e1(0x1c6)])
        return ![];
    var _0xa01405 = this[_0x4994e1(0x1c6)][_0x4994e1(0x207)];
    if (!_0xa01405)
        return ![];
    return _0x3df297['IOrUS'](_0xa01405[_0x4994e1(0x1c0)][_0x4994e1(0x1b6)], Math[_0x4994e1(0x20a)](_0x3df297[_0x4994e1(0x20b)](_0x4d6691[_0x4994e1(0x20c)]() + (-0xf49 + -0x10c * -0x2 + 0x6 * 0x233), _0xa01405['step'])));
}, BasePoint['prototype'][_0x17b045(0x20d)] = function _getDoubles(_0x4847d1, _0x38921a) {
    var _0x41a077 = _0x17b045, _0x4ea784 = {
            'jFnwh': _0x41a077(0x20e),
            'muOAu': function (_0x45e677, _0xe829d9) {
                return _0x45e677 < _0xe829d9;
            }
        }, _0x2f6b62 = _0x4ea784[_0x41a077(0x20f)][_0x41a077(0x19d)]('|'), _0x38e13e = 0x1537 * -0x1 + -0x69 * 0x2b + 0x26da;
    while (!![]) {
        switch (_0x2f6b62[_0x38e13e++]) {
        case '0':
            var _0x21994c = this;
            continue;
        case '1':
            if (this[_0x41a077(0x1c6)] && this[_0x41a077(0x1c6)][_0x41a077(0x207)])
                return this['precomputed'][_0x41a077(0x207)];
            continue;
        case '2':
            return {
                'step': _0x4847d1,
                'points': _0x9ba94d
            };
        case '3':
            var _0x9ba94d = [this];
            continue;
        case '4':
            for (var _0x1d1e8b = 0x17cc * -0x1 + 0x17 * 0x5 + 0x1759; _0x1d1e8b < _0x38921a; _0x1d1e8b += _0x4847d1) {
                for (var _0x1ffaab = -0x1 * -0x2360 + 0x1 * 0x18ad + -0x3c0d; _0x4ea784[_0x41a077(0x210)](_0x1ffaab, _0x4847d1); _0x1ffaab++)
                    _0x21994c = _0x21994c[_0x41a077(0x211)]();
                _0x9ba94d[_0x41a077(0x1ba)](_0x21994c);
            }
            continue;
        }
        break;
    }
}, BasePoint[_0x17b045(0x1b0)][_0x17b045(0x1c9)] = function _getNAFPoints(_0x55bea9) {
    var _0x511525 = _0x17b045, _0x12997f = {
            'Zmpnv': _0x511525(0x212),
            'swqMM': function (_0x2ac13c, _0x234a85) {
                return _0x2ac13c - _0x234a85;
            },
            'MIZbA': function (_0x18aea5, _0x1f2769) {
                return _0x18aea5 << _0x1f2769;
            },
            'HwJKA': function (_0x21d1d5, _0x4852f5) {
                return _0x21d1d5 === _0x4852f5;
            },
            'qYIhL': function (_0x47f09, _0x33ae0b) {
                return _0x47f09 < _0x33ae0b;
            }
        }, _0x4bc7c1 = _0x12997f['Zmpnv'][_0x511525(0x19d)]('|'), _0x5d0212 = 0x1e65 * 0x1 + -0xb14 + -0x5 * 0x3dd;
    while (!![]) {
        switch (_0x4bc7c1[_0x5d0212++]) {
        case '0':
            var _0x5c5fc9 = _0x12997f[_0x511525(0x213)](_0x12997f[_0x511525(0x214)](0x3d6 * 0x9 + 0xc17 + -0x2e9c, _0x55bea9), -0x1076 + -0x1 * 0x202d + 0x30a4);
            continue;
        case '1':
            var _0x5d5d02 = [this];
            continue;
        case '2':
            if (this[_0x511525(0x1c6)] && this[_0x511525(0x1c6)][_0x511525(0x208)])
                return this[_0x511525(0x1c6)][_0x511525(0x208)];
            continue;
        case '3':
            return {
                'wnd': _0x55bea9,
                'points': _0x5d5d02
            };
        case '4':
            var _0x43dfde = _0x12997f[_0x511525(0x215)](_0x5c5fc9, -0x14b1 * 0x1 + -0x14c6 * 0x1 + -0x8 * -0x52f) ? null : this[_0x511525(0x211)]();
            continue;
        case '5':
            for (var _0x412f99 = 0x1161 + 0x61 * 0x13 + 0x1b * -0xe9; _0x12997f['qYIhL'](_0x412f99, _0x5c5fc9); _0x412f99++)
                _0x5d5d02[_0x412f99] = _0x5d5d02[_0x12997f[_0x511525(0x213)](_0x412f99, -0x1 * -0x2529 + 0x11ca + -0x1b79 * 0x2)][_0x511525(0x1c3)](_0x43dfde);
            continue;
        }
        break;
    }
}, BasePoint[_0x17b045(0x1b0)][_0x17b045(0x216)] = function _getBeta() {
    return null;
}, BasePoint[_0x17b045(0x1b0)][_0x17b045(0x1e7)] = function dblp(_0x5c6c00) {
    var _0xa9d755 = {
            'ETJIW': function (_0x5060b3, _0x5d8136) {
                return _0x5060b3 < _0x5d8136;
            }
        }, _0x176a9a = this;
    for (var _0x19d346 = 0xd * -0x265 + -0x523 + 0x2444; _0xa9d755['ETJIW'](_0x19d346, _0x5c6c00); _0x19d346++)
        _0x176a9a = _0x176a9a['dbl']();
    return _0x176a9a;
};
