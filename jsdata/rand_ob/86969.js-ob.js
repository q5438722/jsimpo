var _0x1989 = [
    'table',
    'length',
    'isStatic',
    'isSleeping',
    'canCollide',
    'collisionFilter',
    'midphaseTests',
    'overlaps',
    'bounds',
    'eKeXo',
    'parts',
    'split',
    'collides',
    'isActive',
    'collided',
    'push',
    'narrowDetections',
    'reused',
    'DmpUC',
    'group',
    'mask',
    'category',
    'iaMEA',
    '13ErjCBF',
    '12563SmkFWl',
    '396134uNPbId',
    '1403wDucwA',
    '1qcZkMy',
    '21401ERIQIe',
    '1FLgIaZ',
    '72858UxoNPL',
    '315146wMQbNW',
    '1gjzYJy',
    '1snZFrd',
    '1182306pFSMbl',
    'exports',
    './Pair',
    '../geometry/Bounds',
    '2|1|0|3|5|4',
    'collisions',
    'pairs'
];
var _0x1e1075 = _0x57c9;
(function (_0x5f1de3, _0x32b482) {
    var _0x5f3eae = _0x57c9;
    while (!![]) {
        try {
            var _0x2deb06 = parseInt(_0x5f3eae(0x68)) * -parseInt(_0x5f3eae(0x69)) + -parseInt(_0x5f3eae(0x6a)) + parseInt(_0x5f3eae(0x6b)) * -parseInt(_0x5f3eae(0x6c)) + -parseInt(_0x5f3eae(0x6d)) * -parseInt(_0x5f3eae(0x6e)) + -parseInt(_0x5f3eae(0x6f)) + parseInt(_0x5f3eae(0x70)) * -parseInt(_0x5f3eae(0x71)) + parseInt(_0x5f3eae(0x72)) * parseInt(_0x5f3eae(0x73));
            if (_0x2deb06 === _0x32b482)
                break;
            else
                _0x5f1de3['push'](_0x5f1de3['shift']());
        } catch (_0x5c0b5b) {
            _0x5f1de3['push'](_0x5f1de3['shift']());
        }
    }
}(_0x1989, -0x1a8 * -0x340 + 0xb5d * 0x23 + -0x30c38));
var Detector = {};
module[_0x1e1075(0x74)] = Detector;
var SAT = require('./SAT'), Pair = require(_0x1e1075(0x75)), Bounds = require(_0x1e1075(0x76));
function _0x57c9(_0x4744b0, _0x587429) {
    return _0x57c9 = function (_0x997ff0, _0x2e5869) {
        _0x997ff0 = _0x997ff0 - (-0x131d + -0x66 * -0x24 + 0x1 * 0x52d);
        var _0x4d2e8d = _0x1989[_0x997ff0];
        return _0x4d2e8d;
    }, _0x57c9(_0x4744b0, _0x587429);
}
(function () {
    var _0x3592e0 = _0x1e1075, _0x3f08ac = {
            'eKeXo': function (_0x573e15, _0x46a56a) {
                return _0x573e15 < _0x46a56a;
            },
            'DuVsv': function (_0x3e4e85, _0x590895) {
                return _0x3e4e85 > _0x590895;
            },
            'DPXYI': _0x3592e0(0x77),
            'DmpUC': function (_0x1766ef, _0x73b078) {
                return _0x1766ef === _0x73b078;
            },
            'zceGi': function (_0x573ec4, _0x1b8644) {
                return _0x573ec4 !== _0x1b8644;
            },
            'iaMEA': function (_0x6cca9d, _0x40df1b) {
                return _0x6cca9d !== _0x40df1b;
            }
        };
    Detector[_0x3592e0(0x78)] = function (_0x2b7355, _0x1e6963) {
        var _0x38c782 = _0x3592e0, _0x49386e = [], _0x43806e = _0x1e6963[_0x38c782(0x79)][_0x38c782(0x7a)], _0xfb7b95 = _0x1e6963['metrics'];
        for (var _0x1c2836 = -0x1 * -0xb2a + -0x23dd + 0x18b3; _0x3f08ac['eKeXo'](_0x1c2836, _0x2b7355[_0x38c782(0x7b)]); _0x1c2836++) {
            var _0x5aacb9 = _0x2b7355[_0x1c2836][-0x9f7 * 0x2 + 0x133d + 0xb1], _0x2ff1c2 = _0x2b7355[_0x1c2836][-0x4 * -0xb5 + -0x182d + 0x1 * 0x155a];
            if ((_0x5aacb9[_0x38c782(0x7c)] || _0x5aacb9[_0x38c782(0x7d)]) && (_0x2ff1c2[_0x38c782(0x7c)] || _0x2ff1c2[_0x38c782(0x7d)]))
                continue;
            if (!Detector[_0x38c782(0x7e)](_0x5aacb9[_0x38c782(0x7f)], _0x2ff1c2[_0x38c782(0x7f)]))
                continue;
            _0xfb7b95[_0x38c782(0x80)] += 0x182d * 0x1 + -0xb3f * 0x3 + 0x991;
            if (Bounds[_0x38c782(0x81)](_0x5aacb9[_0x38c782(0x82)], _0x2ff1c2[_0x38c782(0x82)]))
                for (var _0x480bb7 = _0x3f08ac['DuVsv'](_0x5aacb9['parts'][_0x38c782(0x7b)], 0x4ae * -0x7 + 0x17a2 + 0x921) ? 0x1f1 * 0x7 + 0x1db4 + -0x2 * 0x15a5 : 0x618 + 0x2 * -0xb51 + 0x108a; _0x3f08ac[_0x38c782(0x83)](_0x480bb7, _0x5aacb9[_0x38c782(0x84)][_0x38c782(0x7b)]); _0x480bb7++) {
                    var _0x4d111f = _0x5aacb9[_0x38c782(0x84)][_0x480bb7];
                    for (var _0x1078cb = _0x3f08ac['DuVsv'](_0x2ff1c2[_0x38c782(0x84)][_0x38c782(0x7b)], -0x1c1 + -0x1204 + 0x13c6) ? -0x11f9 + 0x57 * -0x2b + -0x3 * -0xadd : -0x2002 + 0x542 + 0x40 * 0x6b; _0x3f08ac[_0x38c782(0x83)](_0x1078cb, _0x2ff1c2[_0x38c782(0x84)][_0x38c782(0x7b)]); _0x1078cb++) {
                        var _0x582792 = _0x2ff1c2[_0x38c782(0x84)][_0x1078cb];
                        if (_0x4d111f === _0x5aacb9 && _0x582792 === _0x2ff1c2 || Bounds[_0x38c782(0x81)](_0x4d111f[_0x38c782(0x82)], _0x582792[_0x38c782(0x82)])) {
                            var _0x21990b = _0x3f08ac['DPXYI'][_0x38c782(0x85)]('|'), _0x5506e7 = 0x1e9a + -0x2167 + 0x2cd;
                            while (!![]) {
                                switch (_0x21990b[_0x5506e7++]) {
                                case '0':
                                    var _0x57fbfe = SAT[_0x38c782(0x86)](_0x4d111f, _0x582792, _0x1c5b89);
                                    continue;
                                case '1':
                                    _0x59a97e && _0x59a97e[_0x38c782(0x87)] ? _0x1c5b89 = _0x59a97e['collision'] : _0x1c5b89 = null;
                                    continue;
                                case '2':
                                    var _0x272233 = Pair['id'](_0x4d111f, _0x582792), _0x59a97e = _0x43806e[_0x272233], _0x1c5b89;
                                    continue;
                                case '3':
                                    _0xfb7b95['narrowphaseTests'] += 0x20dc + 0x3 * 0x2c + -0x215f * 0x1;
                                    continue;
                                case '4':
                                    _0x57fbfe[_0x38c782(0x88)] && (_0x49386e[_0x38c782(0x89)](_0x57fbfe), _0xfb7b95[_0x38c782(0x8a)] += -0x246b * -0x1 + 0x191 * -0x6 + 0x26 * -0xb6);
                                    continue;
                                case '5':
                                    if (_0x57fbfe[_0x38c782(0x8b)])
                                        _0xfb7b95['narrowReuseCount'] += -0x2164 + 0x1 * -0x2261 + 0x43c6;
                                    continue;
                                }
                                break;
                            }
                        }
                    }
                }
        }
        return _0x49386e;
    }, Detector[_0x3592e0(0x7e)] = function (_0x3a4d52, _0x3b084a) {
        var _0x5e199c = _0x3592e0;
        if (_0x3f08ac[_0x5e199c(0x8c)](_0x3a4d52[_0x5e199c(0x8d)], _0x3b084a[_0x5e199c(0x8d)]) && _0x3a4d52[_0x5e199c(0x8d)] !== 0x365 * 0x5 + 0x1655 + -0x274e)
            return _0x3f08ac['DuVsv'](_0x3a4d52[_0x5e199c(0x8d)], -0x1 * 0x1cff + -0x4a2 + 0x21a1);
        return _0x3f08ac['zceGi'](_0x3a4d52[_0x5e199c(0x8e)] & _0x3b084a[_0x5e199c(0x8f)], 0x1 * -0x3bf + -0x240b + 0x27ca) && _0x3f08ac[_0x5e199c(0x90)](_0x3b084a[_0x5e199c(0x8e)] & _0x3a4d52[_0x5e199c(0x8f)], 0x7a3 + 0x1fae + -0x2751);
    };
}());
