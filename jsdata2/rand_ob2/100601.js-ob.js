const _0x232e = [
    '524089rLBwgj',
    'datasets',
    'template',
    '$connectionSet',
    'connectionSet',
    '$form',
    'form',
    '$host',
    '$dataWindow',
    'dataWindow',
    '$event',
    'event',
    '$xfa',
    'trim',
    'length',
    'charAt',
    'slice',
    'match',
    'XFA\x20-\x20Invalid\x20index\x20in\x20SOM\x20expression',
    'index',
    'dotDot',
    'dotHash',
    'XFA\x20-\x20SOM\x20expression\x20contains\x20a\x20FormCalc\x20subexpression\x20which\x20is\x20not\x20supported\x20for\x20now.',
    'XFA\x20-\x20SOM\x20expression\x20contains\x20a\x20JavaScript\x20subexpression\x20which\x20is\x20not\x20supported\x20for\x20now.',
    'push',
    'get',
    'name',
    'set',
    'dot',
    'children',
    'concat',
    'some',
    'operator',
    'XFA\x20-\x20Cannot\x20create\x20a\x20node.',
    '166218XgHzws',
    '99952aukXrk',
    '244447yUicSN',
    '88136NGmoPQ',
    '1nELadI',
    '72883EHVOuz',
    '277020WYzRRN',
    '1UGgGCq'
];
const _0x533138 = _0x4104;
(function (_0xe01e50, _0x221bb9) {
    const _0x36200c = _0x4104;
    while (!![]) {
        try {
            const _0x147ce9 = parseInt(_0x36200c(0xab)) + -parseInt(_0x36200c(0xac)) + -parseInt(_0x36200c(0xad)) + parseInt(_0x36200c(0xae)) + -parseInt(_0x36200c(0xaf)) * -parseInt(_0x36200c(0xb0)) + -parseInt(_0x36200c(0xb1)) + -parseInt(_0x36200c(0xb2)) * -parseInt(_0x36200c(0xb3));
            if (_0x147ce9 === _0x221bb9)
                break;
            else
                _0xe01e50['push'](_0xe01e50['shift']());
        } catch (_0x48dd8a) {
            _0xe01e50['push'](_0xe01e50['shift']());
        }
    }
}(_0x232e, 0x38213));
function _0x4104(_0x2a0793, _0x2f0c7a) {
    return _0x4104 = function (_0x232ebe, _0x41043f) {
        _0x232ebe = _0x232ebe - 0xab;
        let _0x44fb6d = _0x232e[_0x232ebe];
        return _0x44fb6d;
    }, _0x4104(_0x2a0793, _0x2f0c7a);
}
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
            (_0x588094, _0xa42569) => _0x588094[_0x533138(0xb4)]['data']
        ],
        [
            '$template',
            (_0x210ff1, _0x54e9ae) => _0x210ff1[_0x533138(0xb5)]
        ],
        [
            _0x533138(0xb6),
            (_0x3beb57, _0x201dbf) => _0x3beb57[_0x533138(0xb7)]
        ],
        [
            _0x533138(0xb8),
            (_0x3c2056, _0x196fdc) => _0x3c2056[_0x533138(0xb9)]
        ],
        [
            '$layout',
            (_0x635d38, _0x376b7d) => _0x635d38['layout']
        ],
        [
            _0x533138(0xba),
            (_0xcc70b1, _0x13f5d6) => _0xcc70b1['host']
        ],
        [
            _0x533138(0xbb),
            (_0x47d5c0, _0x2b1f91) => _0x47d5c0[_0x533138(0xbc)]
        ],
        [
            _0x533138(0xbd),
            (_0x561648, _0x203770) => _0x561648[_0x533138(0xbe)]
        ],
        [
            '!',
            (_0x42ac5d, _0x49a00a) => _0x42ac5d[_0x533138(0xb4)]
        ],
        [
            _0x533138(0xbf),
            (_0x3e60a1, _0x315e5d) => _0x3e60a1
        ],
        [
            'xfa',
            (_0x320443, _0x4665c6) => _0x320443
        ],
        [
            '$',
            (_0x133ae2, _0x2532e9) => _0x2532e9
        ]
    ]), somCache = new WeakMap();
function parseIndex(_0x38d6f1) {
    const _0x18181c = _0x533138;
    _0x38d6f1 = _0x38d6f1[_0x18181c(0xc0)]();
    if (_0x38d6f1 === '*')
        return Infinity;
    return parseInt(_0x38d6f1, 0xa) || 0x0;
}
function parseExpression(_0x41bb18, _0x5c6753, _0x4b3512 = !![]) {
    const _0x410b42 = _0x533138;
    let _0x5ea6cd = _0x41bb18['match'](namePattern);
    if (!_0x5ea6cd)
        return null;
    let [_0x1d48f4] = _0x5ea6cd;
    const _0x1eb1df = [{
            'name': _0x1d48f4,
            'cacheName': '.' + _0x1d48f4,
            'index': 0x0,
            'js': null,
            'formCalc': null,
            'operator': operators['dot']
        }];
    let _0xb7027c = _0x1d48f4[_0x410b42(0xc1)];
    while (_0xb7027c < _0x41bb18[_0x410b42(0xc1)]) {
        const _0x238c4d = _0xb7027c, _0x195d79 = _0x41bb18[_0x410b42(0xc2)](_0xb7027c++);
        if (_0x195d79 === '[') {
            _0x5ea6cd = _0x41bb18[_0x410b42(0xc3)](_0xb7027c)[_0x410b42(0xc4)](indexPattern);
            if (!_0x5ea6cd)
                return warn(_0x410b42(0xc5)), null;
            _0x1eb1df[_0x1eb1df[_0x410b42(0xc1)] - 0x1][_0x410b42(0xc6)] = parseIndex(_0x5ea6cd[0x0]), _0xb7027c += _0x5ea6cd[0x0][_0x410b42(0xc1)] + 0x1;
            continue;
        }
        let _0x3c819b;
        switch (_0x41bb18[_0x410b42(0xc2)](_0xb7027c)) {
        case '.':
            if (!_0x5c6753)
                return null;
            _0xb7027c++, _0x3c819b = operators[_0x410b42(0xc7)];
            break;
        case '#':
            _0xb7027c++, _0x3c819b = operators[_0x410b42(0xc8)];
            break;
        case '[':
            if (_0x4b3512)
                return warn(_0x410b42(0xc9)), null;
            _0x3c819b = operators['dotBracket'];
            break;
        case '(':
            if (_0x4b3512)
                return warn(_0x410b42(0xca)), null;
            _0x3c819b = operators['dotParen'];
            break;
        default:
            _0x3c819b = operators['dot'];
            break;
        }
        _0x5ea6cd = _0x41bb18[_0x410b42(0xc3)](_0xb7027c)[_0x410b42(0xc4)](namePattern);
        if (!_0x5ea6cd)
            break;
        [_0x1d48f4] = _0x5ea6cd, _0xb7027c += _0x1d48f4[_0x410b42(0xc1)], _0x1eb1df[_0x410b42(0xcb)]({
            'name': _0x1d48f4,
            'cacheName': _0x41bb18[_0x410b42(0xc3)](_0x238c4d, _0xb7027c),
            'operator': _0x3c819b,
            'index': 0x0,
            'js': null,
            'formCalc': null
        });
    }
    return _0x1eb1df;
}
function searchNode(_0x18cff0, _0x78e14c, _0x55581e, _0x136df8 = !![], _0x191d07 = !![]) {
    const _0x13aead = _0x533138, _0x1bbee1 = parseExpression(_0x55581e, _0x136df8);
    if (!_0x1bbee1)
        return null;
    const _0x4bdc23 = shortcuts[_0x13aead(0xcc)](_0x1bbee1[0x0][_0x13aead(0xcd)]);
    let _0x5cdd96 = 0x0, _0x1651a1;
    _0x4bdc23 ? (_0x1651a1 = !![], _0x18cff0 = [_0x4bdc23(_0x18cff0, _0x78e14c)], _0x5cdd96 = 0x1) : (_0x1651a1 = _0x78e14c === null, _0x18cff0 = [_0x78e14c || _0x18cff0]);
    for (let _0x746543 = _0x1bbee1[_0x13aead(0xc1)]; _0x5cdd96 < _0x746543; _0x5cdd96++) {
        const {
                name: _0x487b98,
                cacheName: _0x23c9d9,
                operator: _0x13cbbe,
                index: _0x152f38
            } = _0x1bbee1[_0x5cdd96], _0x404f90 = [];
        for (const _0xe9041a of _0x18cff0) {
            if (!(_0xe9041a instanceof XFAObject))
                continue;
            let _0x14de99, _0x452eb7;
            _0x191d07 && (_0x452eb7 = somCache[_0x13aead(0xcc)](_0xe9041a), !_0x452eb7 && (_0x452eb7 = new Map(), somCache[_0x13aead(0xce)](_0xe9041a, _0x452eb7)), _0x14de99 = _0x452eb7[_0x13aead(0xcc)](_0x23c9d9));
            if (!_0x14de99) {
                switch (_0x13cbbe) {
                case operators[_0x13aead(0xcf)]:
                    _0x14de99 = _0xe9041a[$getChildrenByName](_0x487b98, ![]);
                    break;
                case operators[_0x13aead(0xc7)]:
                    _0x14de99 = _0xe9041a[$getChildrenByName](_0x487b98, !![]);
                    break;
                case operators[_0x13aead(0xc8)]:
                    _0x14de99 = _0xe9041a[$getChildrenByClass](_0x487b98);
                    _0x14de99 instanceof XFAObjectArray ? _0x14de99 = _0x14de99[_0x13aead(0xd0)] : _0x14de99 = [_0x14de99];
                    break;
                default:
                    break;
                }
                _0x191d07 && _0x452eb7[_0x13aead(0xce)](_0x23c9d9, _0x14de99);
            }
            _0x14de99[_0x13aead(0xc1)] > 0x0 && _0x404f90[_0x13aead(0xcb)](_0x14de99);
        }
        if (_0x404f90[_0x13aead(0xc1)] === 0x0 && !_0x1651a1 && _0x5cdd96 === 0x0) {
            const _0x19336f = _0x78e14c[$getParent]();
            _0x78e14c = _0x19336f;
            if (!_0x78e14c)
                return null;
            _0x5cdd96 = -0x1, _0x18cff0 = [_0x78e14c];
            continue;
        }
        isFinite(_0x152f38) ? _0x18cff0 = _0x404f90['filter'](_0x1f3be3 => _0x152f38 < _0x1f3be3['length'])['map'](_0x541dfd => _0x541dfd[_0x152f38]) : _0x18cff0 = _0x404f90['reduce']((_0x4b4e79, _0x436c93) => _0x4b4e79[_0x13aead(0xd1)](_0x436c93), []);
    }
    if (_0x18cff0['length'] === 0x0)
        return null;
    return _0x18cff0;
}
function createNodes(_0x479490, _0x5c1f50) {
    let _0x40889d = null;
    for (const {
                name: _0x3732c2,
                index: _0x5a0eb5
            } of _0x5c1f50) {
        for (let _0x72924a = 0x0, _0x3069e1 = !isFinite(_0x5a0eb5) ? 0x0 : _0x5a0eb5; _0x72924a <= _0x3069e1; _0x72924a++) {
            _0x40889d = new XmlObject(_0x479490[$namespaceId], _0x3732c2), _0x479490[$appendChild](_0x40889d);
        }
        _0x479490 = _0x40889d;
    }
    return _0x40889d;
}
function createDataNode(_0x21dd70, _0x56d846, _0x3f2d00) {
    const _0x26a012 = _0x533138, _0x59305d = parseExpression(_0x3f2d00);
    if (!_0x59305d)
        return null;
    if (_0x59305d[_0x26a012(0xd2)](_0xda0d35 => _0xda0d35[_0x26a012(0xd3)] === operators[_0x26a012(0xc7)]))
        return null;
    const _0x3f2ef7 = shortcuts[_0x26a012(0xcc)](_0x59305d[0x0][_0x26a012(0xcd)]);
    let _0x99eda7 = 0x0;
    _0x3f2ef7 ? (_0x21dd70 = _0x3f2ef7(_0x21dd70, _0x56d846), _0x99eda7 = 0x1) : _0x21dd70 = _0x56d846 || _0x21dd70;
    for (let _0x522aa2 = _0x59305d['length']; _0x99eda7 < _0x522aa2; _0x99eda7++) {
        const {
            name: _0x3d3ca8,
            operator: _0x414252,
            index: _0x3c741b
        } = _0x59305d[_0x99eda7];
        if (!isFinite(_0x3c741b))
            return _0x59305d[_0x99eda7]['index'] = 0x0, createNodes(_0x21dd70, _0x59305d[_0x26a012(0xc3)](_0x99eda7));
        let _0x9bb11;
        switch (_0x414252) {
        case operators['dot']:
            _0x9bb11 = _0x21dd70[$getChildrenByName](_0x3d3ca8, ![]);
            break;
        case operators['dotDot']:
            _0x9bb11 = _0x21dd70[$getChildrenByName](_0x3d3ca8, !![]);
            break;
        case operators['dotHash']:
            _0x9bb11 = _0x21dd70[$getChildrenByClass](_0x3d3ca8);
            _0x9bb11 instanceof XFAObjectArray ? _0x9bb11 = _0x9bb11[_0x26a012(0xd0)] : _0x9bb11 = [_0x9bb11];
            break;
        default:
            break;
        }
        if (_0x9bb11[_0x26a012(0xc1)] === 0x0)
            return createNodes(_0x21dd70, _0x59305d[_0x26a012(0xc3)](_0x99eda7));
        if (_0x3c741b < _0x9bb11[_0x26a012(0xc1)]) {
            const _0x13e559 = _0x9bb11[_0x3c741b];
            if (!(_0x13e559 instanceof XFAObject))
                return warn(_0x26a012(0xd4)), null;
            _0x21dd70 = _0x13e559;
        } else
            return _0x59305d[_0x99eda7][_0x26a012(0xc6)] = _0x3c741b - _0x9bb11[_0x26a012(0xc1)], createNodes(_0x21dd70, _0x59305d['slice'](_0x99eda7));
    }
    return null;
}
export {
    createDataNode,
    searchNode
};
