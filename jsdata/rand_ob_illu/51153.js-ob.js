'use strict';

const _0x36bd = ['start', 'UjzoL', 'EYFjo', '5446IdSYDG', '96wGYwbJ', '728843KdlTVK', '1QiRJZk', '719525pHqAea', '326oCGlLA', '1663NqvHgA', '24776CKVLRi', '1646675WcFZLj', '1163285JrCQqS', '../common.js', 'assert', 'createBenchmark', 'keys', 'deepEqual', 'notDeepEqual', 'eep', 'eepStrict', 'replace', 'lfbqH', 'ahAro', 'includes', 'not'];
const _0x191ebe = _0x60b5;

function _0x60b5(_0xa98fc9, _0x50d2b9) {
    return _0x60b5 = function (_0x32ea7a, _0x43eb03) {
        _0x32ea7a = _0x32ea7a - 198;
        const _0x5a4455 = _0x36bd[_0x32ea7a];

        return _0x5a4455;
    }, _0x60b5(_0xa98fc9, _0x50d2b9);
}
(function (_0x1c482d, _0x47d299) {
    const _0x21f148 = _0x60b5;

    while (true) {
        try {
            const _0x38b553 = parseInt(_0x21f148(0xc6)) * -parseInt(_0x21f148(0xc7)) + parseInt(_0x21f148(0xc8)) * parseInt(_0x21f148(0xc9)) + parseInt(_0x21f148(0xca)) + -parseInt(_0x21f148(0xcb)) * parseInt(_0x21f148(0xcc)) + parseInt(_0x21f148(0xcd)) + parseInt(_0x21f148(0xce)) + -parseInt(_0x21f148(0xcf));

            if (_0x38b553 === _0x47d299) break;else _0x1c482d.push(_0x1c482d.shift());
        } catch (_0x30fc23) {
            _0x1c482d.push(_0x1c482d.shift());
        }
    }
})(_0x36bd, 891580);

const common = require(_0x191ebe(0xd0));

const assert = require(_0x191ebe(0xd1));

const primValues = {
    'string': 'a',
    'number': 0x1,
    'object': { 0x0: 'a' },
    'array': [1, 2, 3]
};

const bench = common[_0x191ebe(0xd2)](main, {
    'primitive': Object[_0x191ebe(0xd3)](primValues),
    'n': [20000],
    'strict': [0, 1],
    'method': [_0x191ebe(0xd4), _0x191ebe(0xd5)]
});

function main({
    n: _0x25a6d9,
    primitive: _0x63be42,
    method: _0x2969a3,
    strict: _0x56b77a
}) {
    const _0x245621 = _0x191ebe;
    const _0x49553d = {
        'lfbqH': _0x245621(0xd6),
        'ahAro': _0x245621(0xd7),
        'UjzoL': function (_0x2ed869, _0x3f134a) {
            return _0x2ed869 < _0x3f134a;
        },
        'EYFjo': function (_0xbd375f, _0x69fdf9, _0x741b99) {
            return _0xbd375f(_0x69fdf9, _0x741b99);
        }
    };
    const _0x27b2b4 = primValues[_0x63be42];
    const _0x5b6735 = _0x27b2b4;
    const _0x4f4dcc = _0x27b2b4;
    const _0x3c66fb = 'b';

    _0x56b77a && (_0x2969a3 = _0x2969a3[_0x245621(0xd8)](_0x49553d[_0x245621(0xd9)], _0x49553d[_0x245621(0xda)]));
    const _0x506365 = assert[_0x2969a3];

    const _0x49bdc7 = _0x2969a3[_0x245621(0xdb)](_0x245621(0xdc)) ? _0x3c66fb : _0x4f4dcc;

    bench[_0x245621(0xdd)]();
    for (let _0x169b49 = 0; _0x49553d[_0x245621(0xde)](_0x169b49, _0x25a6d9); ++_0x169b49) {
        _0x49553d[_0x245621(0xdf)](_0x506365, [_0x5b6735], [_0x49bdc7]);
    }
    bench.end(_0x25a6d9);
}
