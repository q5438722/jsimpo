'use strict';

const _0x5d28 = ['156281GPSihk', '16NNjpNa', '../action', '../const', 'exports', 'strings are not supplying the value to append, ', 'the append const action may be more appropriate', 'nargs must be OPTIONAL to supply const', 'PcuXD', 'MVfrC', 'ynvHr', 'TOrMj', 'nargs for append actions must be > 0; if arg ', 'EcoRq', 'iXfeW', 'constant', 'OPTIONAL', 'call', 'inherits', 'prototype', 'dest', 'set', '104iWYqEY', '1954zwzcZb', '915870bfOHgd', '1695861dCSHEN', '3ezZjGQ', '424157QqNrba', '5ZZFKHe', '253507KUchVr', '894984GDGDhs'];
const _0x3f2fec = _0xfc86;

(function (_0x2bf5e4, _0x5b545e) {
    const _0x27270d = _0xfc86;

    while (true) {
        try {
            const _0x25a6df = -parseInt(_0x27270d(0xba)) * -parseInt(_0x27270d(0xbb)) + -parseInt(_0x27270d(0xbc)) + -parseInt(_0x27270d(0xbd)) + parseInt(_0x27270d(0xbe)) * -parseInt(_0x27270d(0xbf)) + parseInt(_0x27270d(0xc0)) * parseInt(_0x27270d(0xc1)) + parseInt(_0x27270d(0xc2)) + -parseInt(_0x27270d(0xc3)) * -parseInt(_0x27270d(0xc4));

            if (_0x25a6df === _0x5b545e) break;else _0x2bf5e4.push(_0x2bf5e4.shift());
        } catch (_0x254e95) {
            _0x2bf5e4.push(_0x2bf5e4.shift());
        }
    }
})(_0x5d28, 982029);
function _0xfc86(_0x16b85e, _0x48b2de) {
    return _0xfc86 = function (_0x97a37b, _0x520eeb) {
        _0x97a37b = _0x97a37b - 186;
        const _0x127700 = _0x5d28[_0x97a37b];

        return _0x127700;
    }, _0xfc86(_0x16b85e, _0x48b2de);
}

const util = require('util');

const Action = require(_0x3f2fec(0xc5));

const c = require(_0x3f2fec(0xc6));

const ActionAppend = module[_0x3f2fec(0xc7)] = function ActionAppend(_0x508d95) {
    const _0x2b6b73 = _0x3f2fec;
    const _0x1110e8 = {
        'PcuXD': function (_0x2e1c1e, _0x508382) {
            return _0x2e1c1e || _0x508382;
        },
        'MVfrC': function (_0x477628, _0x2f8ed0) {
            return _0x477628 <= _0x2f8ed0;
        },
        'ynvHr': function (_0x5588c1, _0x4106a3) {
            return _0x5588c1 + _0x4106a3;
        },
        'TOrMj': function (_0x46b372, _0x3fbd89) {
            return _0x46b372 + _0x3fbd89;
        },
        'EcoRq': _0x2b6b73(0xc8),
        'iXfeW': _0x2b6b73(0xc9),
        'qaIts': function (_0x5ef7b9, _0x3d10e7) {
            return _0x5ef7b9 !== _0x3d10e7;
        },
        'ffpUs': _0x2b6b73(0xca)
    };

    _0x508d95 = _0x1110e8[_0x2b6b73(0xcb)](_0x508d95, {});
    if (_0x1110e8[_0x2b6b73(0xcc)](this.nargs, 0)) throw new Error(_0x1110e8[_0x2b6b73(0xcd)](_0x1110e8[_0x2b6b73(0xce)](_0x2b6b73(0xcf), _0x1110e8[_0x2b6b73(0xd0)]), _0x1110e8[_0x2b6b73(0xd1)]));
    if (!!this[_0x2b6b73(0xd2)] && _0x1110e8.qaIts(this.nargs, c[_0x2b6b73(0xd3)])) throw new Error(_0x1110e8.ffpUs);
    Action[_0x2b6b73(0xd4)](this, _0x508d95);
};

util[_0x3f2fec(0xd5)](ActionAppend, Action), ActionAppend[_0x3f2fec(0xd6)][_0x3f2fec(0xd4)] = function (_0x2fa9f3, _0x340d17, _0x1ae164) {
    const _0x53baeb = _0x3f2fec;

    const _0x2ce045 = (_0x340d17[this[_0x53baeb(0xd7)]] || []).slice();

    _0x2ce045.push(_0x1ae164), _0x340d17[_0x53baeb(0xd8)](this.dest, _0x2ce045);
};
