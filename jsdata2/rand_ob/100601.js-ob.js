const _0x4b9f = [
    '$template',
    'template',
    '$connectionSet',
    'connectionSet',
    '$form',
    'form',
    'layout',
    '$host',
    'host',
    '$dataWindow',
    'dataWindow',
    'event',
    '$xfa',
    'xfa',
    'trim',
    'qJTBi',
    'CUCIF',
    'XFA\x20-\x20Invalid\x20index\x20in\x20SOM\x20expression',
    'XFA\x20-\x20SOM\x20expression\x20contains\x20a\x20JavaScript\x20subexpression\x20which\x20is\x20not\x20supported\x20for\x20now.',
    'match',
    'dot',
    'length',
    'charAt',
    'iZNec',
    'jOjMQ',
    'index',
    'wwSKS',
    'fRVBL',
    'dotDot',
    'dotHash',
    'dotBracket',
    'vLUkK',
    'dotParen',
    'push',
    'eCEGH',
    'get',
    'HtpbA',
    'qQetJ',
    'ONDgX',
    'DYPwn',
    'VZQXl',
    'set',
    'children',
    'fttvH',
    'SlhAg',
    'filter',
    'map',
    'reduce',
    'concat',
    'Uotez',
    'xyCbS',
    'some',
    'operator',
    'name',
    'hlYWi',
    'KTokj',
    'cMwJI',
    'slice',
    'YlrSZ',
    'mxQMB',
    'XFA\x20-\x20Cannot\x20create\x20a\x20node.',
    'MunNJ',
    '19gErYQs',
    '5029bpiLhR',
    '342086EItUAm',
    '1edFoAO',
    '1kFMmTJ',
    '374341PjZNzO',
    '3iFbPTj',
    '113074XoUITY',
    '243358tQAGBu',
    '27QnjRmE',
    '19529IHvzop',
    '976255CVcPYD',
    'datasets'
];
const _0x4d97f8 = _0xb2cb;
(function (_0xfb043c, _0x8c6aa9) {
    const _0x31d6fa = _0xb2cb;
    while (!![]) {
        try {
            const _0x4c8ae5 = -parseInt(_0x31d6fa(0xbb)) * parseInt(_0x31d6fa(0xbc)) + parseInt(_0x31d6fa(0xbd)) * -parseInt(_0x31d6fa(0xbe)) + -parseInt(_0x31d6fa(0xbf)) * -parseInt(_0x31d6fa(0xc0)) + parseInt(_0x31d6fa(0xc1)) * -parseInt(_0x31d6fa(0xc2)) + parseInt(_0x31d6fa(0xc3)) + -parseInt(_0x31d6fa(0xc4)) * parseInt(_0x31d6fa(0xc5)) + parseInt(_0x31d6fa(0xc6));
            if (_0x4c8ae5 === _0x8c6aa9)
                break;
            else
                _0xfb043c['push'](_0xfb043c['shift']());
        } catch (_0x5c8478) {
            _0xfb043c['push'](_0xfb043c['shift']());
        }
    }
}(_0x4b9f, 0x1f87b + 0x1 * 0x7a082 + -0x52ce9));
import {
    $appendChild,
    $getChildrenByClass,
    $getChildrenByName,
    $getParent,
    $namespaceId,
    XFAObject,
    XFAObjectArray,
    XmlObject
} from './xfa_object.js';
import { warn } from '../../shared/util.js';
const namePattern = /^[^.[]+/, indexPattern = /^[^\]]+/, operators = {
        'dot': 0x0,
        'dotDot': 0x1,
        'dotHash': 0x2,
        'dotBracket': 0x3,
        'dotParen': 0x4
    }, shortcuts = new Map([
        [
            '$data',
            (_0x31933a, _0x18b03d) => _0x31933a[_0x4d97f8(0xc7)]['data']
        ],
        [
            _0x4d97f8(0xc8),
            (_0x15f4ff, _0x3a4bc6) => _0x15f4ff[_0x4d97f8(0xc9)]
        ],
        [
            _0x4d97f8(0xca),
            (_0x4ae9f7, _0x5c9ddd) => _0x4ae9f7[_0x4d97f8(0xcb)]
        ],
        [
            _0x4d97f8(0xcc),
            (_0x471366, _0x101476) => _0x471366[_0x4d97f8(0xcd)]
        ],
        [
            '$layout',
            (_0x2832e1, _0x3a841e) => _0x2832e1[_0x4d97f8(0xce)]
        ],
        [
            _0x4d97f8(0xcf),
            (_0x1cae7f, _0x13ba39) => _0x1cae7f[_0x4d97f8(0xd0)]
        ],
        [
            _0x4d97f8(0xd1),
            (_0x4915c6, _0x5aa47e) => _0x4915c6[_0x4d97f8(0xd2)]
        ],
        [
            '$event',
            (_0x5b5d80, _0x42e5cf) => _0x5b5d80[_0x4d97f8(0xd3)]
        ],
        [
            '!',
            (_0x4131dd, _0x245cab) => _0x4131dd[_0x4d97f8(0xc7)]
        ],
        [
            _0x4d97f8(0xd4),
            (_0x133380, _0x2bdbe) => _0x133380
        ],
        [
            _0x4d97f8(0xd5),
            (_0x321101, _0xc30e65) => _0x321101
        ],
        [
            '$',
            (_0x135f58, _0x1b76ca) => _0x1b76ca
        ]
    ]), somCache = new WeakMap();
function parseIndex(_0x32ab08) {
    const _0x30068f = _0x4d97f8, _0x5a97af = {
            'qJTBi': function (_0x198762, _0x56e093) {
                return _0x198762 === _0x56e093;
            },
            'CUCIF': function (_0x29cdb9, _0x3e35aa, _0x28b2e5) {
                return _0x29cdb9(_0x3e35aa, _0x28b2e5);
            }
        };
    _0x32ab08 = _0x32ab08[_0x30068f(0xd6)]();
    if (_0x5a97af[_0x30068f(0xd7)](_0x32ab08, '*'))
        return Infinity;
    return _0x5a97af[_0x30068f(0xd8)](parseInt, _0x32ab08, 0x1878 + -0x1b5 + -0x16b9) || -0x22b3 + -0x7 * 0x10d + 0x2a0e;
}
function parseExpression(_0x45645f, _0x3a58ba, _0x35a7bb = !![]) {
    const _0xc55386 = _0x4d97f8, _0x1ca93a = {
            'nGiKp': function (_0x329125, _0x5b67a4) {
                return _0x329125 === _0x5b67a4;
            },
            'iZNec': function (_0x4a0e36, _0x1d57a5) {
                return _0x4a0e36(_0x1d57a5);
            },
            'jOjMQ': _0xc55386(0xd9),
            'wwSKS': function (_0x44fd12, _0x30612d) {
                return _0x44fd12(_0x30612d);
            },
            'fRVBL': function (_0x5bfce6, _0x2e242e) {
                return _0x5bfce6 + _0x2e242e;
            },
            'wBqQD': 'XFA\x20-\x20SOM\x20expression\x20contains\x20a\x20FormCalc\x20subexpression\x20which\x20is\x20not\x20supported\x20for\x20now.',
            'vLUkK': _0xc55386(0xda)
        };
    let _0x5a3c60 = _0x45645f[_0xc55386(0xdb)](namePattern);
    if (!_0x5a3c60)
        return null;
    let [_0x32e451] = _0x5a3c60;
    const _0x490d3b = [{
            'name': _0x32e451,
            'cacheName': '.' + _0x32e451,
            'index': 0x0,
            'js': null,
            'formCalc': null,
            'operator': operators[_0xc55386(0xdc)]
        }];
    let _0x5e991e = _0x32e451[_0xc55386(0xdd)];
    while (_0x5e991e < _0x45645f[_0xc55386(0xdd)]) {
        const _0x24c7db = _0x5e991e, _0x4fcdee = _0x45645f[_0xc55386(0xde)](_0x5e991e++);
        if (_0x1ca93a['nGiKp'](_0x4fcdee, '[')) {
            _0x5a3c60 = _0x45645f['slice'](_0x5e991e)['match'](indexPattern);
            if (!_0x5a3c60)
                return _0x1ca93a[_0xc55386(0xdf)](warn, _0x1ca93a[_0xc55386(0xe0)]), null;
            _0x490d3b[_0x490d3b[_0xc55386(0xdd)] - (0x4cf + -0xc32 + 0x764)][_0xc55386(0xe1)] = _0x1ca93a[_0xc55386(0xe2)](parseIndex, _0x5a3c60[-0x183d + 0xab7 * 0x3 + -0x7e8]), _0x5e991e += _0x1ca93a[_0xc55386(0xe3)](_0x5a3c60[-0x250b + -0x2f5 * -0x7 + -0x82c * -0x2][_0xc55386(0xdd)], -0x1a0 * -0x8 + -0x1fa4 + 0x12a5);
            continue;
        }
        let _0xc22b4f;
        switch (_0x45645f[_0xc55386(0xde)](_0x5e991e)) {
        case '.':
            if (!_0x3a58ba)
                return null;
            _0x5e991e++, _0xc22b4f = operators[_0xc55386(0xe4)];
            break;
        case '#':
            _0x5e991e++, _0xc22b4f = operators[_0xc55386(0xe5)];
            break;
        case '[':
            if (_0x35a7bb)
                return warn(_0x1ca93a['wBqQD']), null;
            _0xc22b4f = operators[_0xc55386(0xe6)];
            break;
        case '(':
            if (_0x35a7bb)
                return _0x1ca93a['wwSKS'](warn, _0x1ca93a[_0xc55386(0xe7)]), null;
            _0xc22b4f = operators[_0xc55386(0xe8)];
            break;
        default:
            _0xc22b4f = operators[_0xc55386(0xdc)];
            break;
        }
        _0x5a3c60 = _0x45645f['slice'](_0x5e991e)[_0xc55386(0xdb)](namePattern);
        if (!_0x5a3c60)
            break;
        [_0x32e451] = _0x5a3c60, _0x5e991e += _0x32e451['length'], _0x490d3b[_0xc55386(0xe9)]({
            'name': _0x32e451,
            'cacheName': _0x45645f['slice'](_0x24c7db, _0x5e991e),
            'operator': _0xc22b4f,
            'index': 0x0,
            'js': null,
            'formCalc': null
        });
    }
    return _0x490d3b;
}
function _0xb2cb(_0xff52a7, _0xd48e99) {
    return _0xb2cb = function (_0x39b0a5, _0x13452e) {
        _0x39b0a5 = _0x39b0a5 - (-0x1e11 * -0x1 + -0x4 * -0x7b0 + -0x3c16);
        let _0x4035a8 = _0x4b9f[_0x39b0a5];
        return _0x4035a8;
    }, _0xb2cb(_0xff52a7, _0xd48e99);
}
function searchNode(_0x25515f, _0x5d3ceb, _0x192ada, _0x266aff = !![], _0x3d421f = !![]) {
    const _0x4c0121 = _0x4d97f8, _0x110c64 = {
            'eCEGH': function (_0x39a916, _0x16fd75, _0x3d416d) {
                return _0x39a916(_0x16fd75, _0x3d416d);
            },
            'HtpbA': function (_0x2be44f, _0x36cb5d, _0x3243e3) {
                return _0x2be44f(_0x36cb5d, _0x3243e3);
            },
            'qQetJ': function (_0x2eeac7, _0x12c5d2) {
                return _0x2eeac7 === _0x12c5d2;
            },
            'ONDgX': function (_0x52c17d, _0x58bfd9) {
                return _0x52c17d || _0x58bfd9;
            },
            'DYPwn': function (_0x426d68, _0x382bc2) {
                return _0x426d68 < _0x382bc2;
            },
            'VZQXl': function (_0x2b204d, _0x1756bd) {
                return _0x2b204d instanceof _0x1756bd;
            },
            'fttvH': function (_0x8caa5b, _0x3fc154) {
                return _0x8caa5b === _0x3fc154;
            },
            'SlhAg': function (_0x4192b8, _0x51edd7) {
                return _0x4192b8 === _0x51edd7;
            }
        }, _0x5472f7 = _0x110c64[_0x4c0121(0xea)](parseExpression, _0x192ada, _0x266aff);
    if (!_0x5472f7)
        return null;
    const _0x250322 = shortcuts[_0x4c0121(0xeb)](_0x5472f7[0x4b1 * 0x3 + 0x1d * 0x102 + -0x2b4d]['name']);
    let _0x4c673f = 0x127 * 0x7 + 0xc09 + 0x53 * -0x3e, _0x438f26;
    _0x250322 ? (_0x438f26 = !![], _0x25515f = [_0x110c64[_0x4c0121(0xec)](_0x250322, _0x25515f, _0x5d3ceb)], _0x4c673f = -0x22c + 0x534 + -0x307) : (_0x438f26 = _0x110c64[_0x4c0121(0xed)](_0x5d3ceb, null), _0x25515f = [_0x110c64[_0x4c0121(0xee)](_0x5d3ceb, _0x25515f)]);
    for (let _0x3e63b7 = _0x5472f7[_0x4c0121(0xdd)]; _0x110c64[_0x4c0121(0xef)](_0x4c673f, _0x3e63b7); _0x4c673f++) {
        const {
                name: _0xa74f2b,
                cacheName: _0x21503c,
                operator: _0x4d2692,
                index: _0x44da3a
            } = _0x5472f7[_0x4c673f], _0x16a9ee = [];
        for (const _0x1cccf3 of _0x25515f) {
            if (!_0x110c64[_0x4c0121(0xf0)](_0x1cccf3, XFAObject))
                continue;
            let _0x35cd2b, _0x363106;
            _0x3d421f && (_0x363106 = somCache[_0x4c0121(0xeb)](_0x1cccf3), !_0x363106 && (_0x363106 = new Map(), somCache[_0x4c0121(0xf1)](_0x1cccf3, _0x363106)), _0x35cd2b = _0x363106[_0x4c0121(0xeb)](_0x21503c));
            if (!_0x35cd2b) {
                switch (_0x4d2692) {
                case operators['dot']:
                    _0x35cd2b = _0x1cccf3[$getChildrenByName](_0xa74f2b, ![]);
                    break;
                case operators[_0x4c0121(0xe4)]:
                    _0x35cd2b = _0x1cccf3[$getChildrenByName](_0xa74f2b, !![]);
                    break;
                case operators[_0x4c0121(0xe5)]:
                    _0x35cd2b = _0x1cccf3[$getChildrenByClass](_0xa74f2b);
                    _0x35cd2b instanceof XFAObjectArray ? _0x35cd2b = _0x35cd2b[_0x4c0121(0xf2)] : _0x35cd2b = [_0x35cd2b];
                    break;
                default:
                    break;
                }
                _0x3d421f && _0x363106['set'](_0x21503c, _0x35cd2b);
            }
            _0x35cd2b['length'] > -0x538 * -0x5 + 0x19a6 + -0x33be && _0x16a9ee[_0x4c0121(0xe9)](_0x35cd2b);
        }
        if (_0x110c64[_0x4c0121(0xf3)](_0x16a9ee[_0x4c0121(0xdd)], 0x4 * -0x60a + -0x1 * -0x5bb + 0x126d * 0x1) && !_0x438f26 && _0x110c64[_0x4c0121(0xf4)](_0x4c673f, 0x107b * 0x2 + 0x93b + -0x2a31)) {
            const _0x366bc2 = _0x5d3ceb[$getParent]();
            _0x5d3ceb = _0x366bc2;
            if (!_0x5d3ceb)
                return null;
            _0x4c673f = -(0x6e1 + 0x4 * -0x26 + -0x648), _0x25515f = [_0x5d3ceb];
            continue;
        }
        isFinite(_0x44da3a) ? _0x25515f = _0x16a9ee[_0x4c0121(0xf5)](_0x4208de => _0x44da3a < _0x4208de[_0x4c0121(0xdd)])[_0x4c0121(0xf6)](_0x1e8368 => _0x1e8368[_0x44da3a]) : _0x25515f = _0x16a9ee[_0x4c0121(0xf7)]((_0x5efb72, _0x286a70) => _0x5efb72[_0x4c0121(0xf8)](_0x286a70), []);
    }
    if (_0x25515f[_0x4c0121(0xdd)] === 0x1bd6 + 0x229 * -0x5 + -0x26f * 0x7)
        return null;
    return _0x25515f;
}
function createNodes(_0x35efed, _0x46ea82) {
    const _0x77460 = _0x4d97f8, _0x5d3a24 = {
            'Uotez': function (_0xf3a33f, _0x4baa3f) {
                return _0xf3a33f(_0x4baa3f);
            },
            'xyCbS': function (_0x2906f3, _0x4fefdc) {
                return _0x2906f3 <= _0x4fefdc;
            }
        };
    let _0x22d676 = null;
    for (const {
                name: _0x1c1d71,
                index: _0x4057c1
            } of _0x46ea82) {
        for (let _0x32703b = 0x352 + -0xda5 + 0xa53, _0x1123a8 = !_0x5d3a24[_0x77460(0xf9)](isFinite, _0x4057c1) ? -0x1389 + 0x449 * -0x5 + 0x28f6 : _0x4057c1; _0x5d3a24[_0x77460(0xfa)](_0x32703b, _0x1123a8); _0x32703b++) {
            _0x22d676 = new XmlObject(_0x35efed[$namespaceId], _0x1c1d71), _0x35efed[$appendChild](_0x22d676);
        }
        _0x35efed = _0x22d676;
    }
    return _0x22d676;
}
function createDataNode(_0x6b9402, _0x120c55, _0x4d025b) {
    const _0x55087d = _0x4d97f8, _0x522ae4 = {
            'vlecE': function (_0x35d151, _0x5c2094) {
                return _0x35d151(_0x5c2094);
            },
            'hlYWi': function (_0xe3100b, _0x1e2678, _0x1658a7) {
                return _0xe3100b(_0x1e2678, _0x1658a7);
            },
            'KTokj': function (_0x49cea2, _0x23f17f) {
                return _0x49cea2 || _0x23f17f;
            },
            'cMwJI': function (_0x492f63, _0x1c8fff) {
                return _0x492f63 < _0x1c8fff;
            },
            'YlrSZ': function (_0x5ed17e, _0x5ee62d, _0xe29c7e) {
                return _0x5ed17e(_0x5ee62d, _0xe29c7e);
            },
            'mxQMB': function (_0x1031ff, _0x5caaeb) {
                return _0x1031ff instanceof _0x5caaeb;
            },
            'MunNJ': function (_0x1a366f, _0x29bbc8) {
                return _0x1a366f - _0x29bbc8;
            }
        }, _0x386ab1 = _0x522ae4['vlecE'](parseExpression, _0x4d025b);
    if (!_0x386ab1)
        return null;
    if (_0x386ab1[_0x55087d(0xfb)](_0x2e8512 => _0x2e8512[_0x55087d(0xfc)] === operators[_0x55087d(0xe4)]))
        return null;
    const _0x5a38a3 = shortcuts[_0x55087d(0xeb)](_0x386ab1[-0xa02 * -0x1 + -0xc7 * 0x29 + -0xc1 * -0x1d][_0x55087d(0xfd)]);
    let _0x25824e = 0x3 * -0x88d + -0x3 * -0x254 + 0x12ab;
    _0x5a38a3 ? (_0x6b9402 = _0x522ae4[_0x55087d(0xfe)](_0x5a38a3, _0x6b9402, _0x120c55), _0x25824e = 0x15b3 + 0x2112 + -0x36c4) : _0x6b9402 = _0x522ae4[_0x55087d(0xff)](_0x120c55, _0x6b9402);
    for (let _0x40d847 = _0x386ab1[_0x55087d(0xdd)]; _0x522ae4[_0x55087d(0x100)](_0x25824e, _0x40d847); _0x25824e++) {
        const {
            name: _0x27187b,
            operator: _0x4e6a02,
            index: _0x288af5
        } = _0x386ab1[_0x25824e];
        if (!_0x522ae4['vlecE'](isFinite, _0x288af5))
            return _0x386ab1[_0x25824e][_0x55087d(0xe1)] = -0x9d * 0x37 + -0x2482 + 0x463d, createNodes(_0x6b9402, _0x386ab1[_0x55087d(0x101)](_0x25824e));
        let _0x497b4e;
        switch (_0x4e6a02) {
        case operators[_0x55087d(0xdc)]:
            _0x497b4e = _0x6b9402[$getChildrenByName](_0x27187b, ![]);
            break;
        case operators['dotDot']:
            _0x497b4e = _0x6b9402[$getChildrenByName](_0x27187b, !![]);
            break;
        case operators[_0x55087d(0xe5)]:
            _0x497b4e = _0x6b9402[$getChildrenByClass](_0x27187b);
            _0x497b4e instanceof XFAObjectArray ? _0x497b4e = _0x497b4e[_0x55087d(0xf2)] : _0x497b4e = [_0x497b4e];
            break;
        default:
            break;
        }
        if (_0x497b4e[_0x55087d(0xdd)] === 0x1 * 0x13f + -0xb7e * -0x1 + -0xcbd * 0x1)
            return _0x522ae4[_0x55087d(0x102)](createNodes, _0x6b9402, _0x386ab1[_0x55087d(0x101)](_0x25824e));
        if (_0x288af5 < _0x497b4e[_0x55087d(0xdd)]) {
            const _0x230794 = _0x497b4e[_0x288af5];
            if (!_0x522ae4[_0x55087d(0x103)](_0x230794, XFAObject))
                return _0x522ae4['vlecE'](warn, _0x55087d(0x104)), null;
            _0x6b9402 = _0x230794;
        } else
            return _0x386ab1[_0x25824e][_0x55087d(0xe1)] = _0x522ae4[_0x55087d(0x105)](_0x288af5, _0x497b4e[_0x55087d(0xdd)]), _0x522ae4[_0x55087d(0x102)](createNodes, _0x6b9402, _0x386ab1[_0x55087d(0x101)](_0x25824e));
    }
    return null;
}
export {
    createDataNode,
    searchNode
};
