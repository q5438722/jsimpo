'use strict';
const _0x167e = [
    '602817suWcvE',
    '559329hiKwRB',
    '11551TWiwhh',
    '47VPWYAw',
    '1797dpFpdf',
    '411USvDvG',
    '3pKRVzs',
    '25620WBegzQ',
    '../common',
    'assert',
    'assign',
    'iterator',
    'ERR_ARG_NOT_ITERABLE',
    'TypeError',
    'ERR_INVALID_TUPLE',
    'Each\x20query\x20pair\x20must\x20be\x20an\x20iterable\x20[name,\x20value]\x20tuple',
    'toString',
    'strictEqual',
    'key',
    'val',
    'val2',
    'key=val&key2=val2',
    'throws',
    'zrjvP',
    '759127WYBclb',
    '79579ASZtKu'
];
const _0x132269 = _0x1270;
(function (_0x2d8ac2, _0x611262) {
    const _0x4b26dd = _0x1270;
    while (!![]) {
        try {
            const _0x1ed001 = parseInt(_0x4b26dd(0x116)) + parseInt(_0x4b26dd(0x117)) + parseInt(_0x4b26dd(0x118)) + -parseInt(_0x4b26dd(0x119)) + parseInt(_0x4b26dd(0x11a)) * parseInt(_0x4b26dd(0x11b)) + -parseInt(_0x4b26dd(0x11c)) * parseInt(_0x4b26dd(0x11d)) + -parseInt(_0x4b26dd(0x11e)) * parseInt(_0x4b26dd(0x11f));
            if (_0x1ed001 === _0x611262)
                break;
            else
                _0x2d8ac2['push'](_0x2d8ac2['shift']());
        } catch (_0x4d4860) {
            _0x2d8ac2['push'](_0x2d8ac2['shift']());
        }
    }
}(_0x167e, 0x1 * -0xbce93 + 0xf2c64 + -0xd919 * -0x7));
require(_0x132269(0x120));
function _0x1270(_0x40d52b, _0x3fa61d) {
    return _0x1270 = function (_0x53a342, _0x519f74) {
        _0x53a342 = _0x53a342 - (0x23b2 + 0x189d + -0x3b39);
        let _0x30ed33 = _0x167e[_0x53a342];
        return _0x30ed33;
    }, _0x1270(_0x40d52b, _0x3fa61d);
}
const assert = require(_0x132269(0x121));
function makeIterableFunc(_0x4c894b) {
    const _0x28b16a = _0x132269;
    return Object[_0x28b16a(0x122)](() => {
    }, {
        [Symbol[_0x28b16a(0x123)]]() {
            const _0x47f37b = _0x28b16a;
            return _0x4c894b[Symbol[_0x47f37b(0x123)]]();
        }
    });
}
{
    const iterableError = {
            'code': _0x132269(0x124),
            'name': _0x132269(0x125),
            'message': 'Query\x20pairs\x20must\x20be\x20iterable'
        }, tupleError = {
            'code': _0x132269(0x126),
            'name': _0x132269(0x125),
            'message': _0x132269(0x127)
        };
    let params;
    params = new URLSearchParams(undefined), assert['strictEqual'](params[_0x132269(0x128)](), ''), params = new URLSearchParams(null), assert[_0x132269(0x129)](params[_0x132269(0x128)](), ''), params = new URLSearchParams(makeIterableFunc([
        [
            _0x132269(0x12a),
            _0x132269(0x12b)
        ],
        [
            'key2',
            _0x132269(0x12c)
        ]
    ])), assert['strictEqual'](params[_0x132269(0x128)](), _0x132269(0x12d)), params = new URLSearchParams(makeIterableFunc([
        [
            _0x132269(0x12a),
            _0x132269(0x12b)
        ],
        [
            'key2',
            _0x132269(0x12c)
        ]
    ]['map'](makeIterableFunc))), assert[_0x132269(0x129)](params[_0x132269(0x128)](), _0x132269(0x12d)), assert[_0x132269(0x12e)](() => new URLSearchParams([[-0x2383 + -0x16 * 0x13c + 0x3eac]]), tupleError), assert['throws'](() => new URLSearchParams([[
            0xd8 + -0x1a21 + 0x194a,
            -0x10b3 + 0x2 * 0x37b + 0x9bf,
            -0x1a11 * -0x1 + 0xc75 + -0x2683
        ]]), tupleError), assert[_0x132269(0x12e)](() => new URLSearchParams({ [Symbol[_0x132269(0x123)]]: 0xb83 + -0x471 + -0x34 * 0x22 }), iterableError), assert['throws'](() => new URLSearchParams([{}]), tupleError), assert[_0x132269(0x12e)](() => new URLSearchParams(['a']), tupleError), assert[_0x132269(0x12e)](() => new URLSearchParams([null]), tupleError), assert[_0x132269(0x12e)](() => new URLSearchParams([{ [Symbol[_0x132269(0x123)]]: -0x7d * -0x49 + 0x12 * 0x1 + -0x238d }]), tupleError);
}
{
    const obj = {
            'toString'() {
                const _0x25b902 = _0x132269, _0x4d4ec9 = { 'zrjvP': 'toString' };
                throw new Error(_0x4d4ec9[_0x25b902(0x12f)]);
            },
            'valueOf'() {
                throw new Error('valueOf');
            }
        }, sym = Symbol(), toStringError = /^Error: toString$/, symbolError = /^TypeError: Cannot convert a Symbol value to a string$/;
    assert['throws'](() => new URLSearchParams({ 'a': obj }), toStringError), assert[_0x132269(0x12e)](() => new URLSearchParams([[
            'a',
            obj
        ]]), toStringError), assert[_0x132269(0x12e)](() => new URLSearchParams(sym), symbolError), assert[_0x132269(0x12e)](() => new URLSearchParams({ [sym]: 'a' }), symbolError), assert[_0x132269(0x12e)](() => new URLSearchParams({ 'a': sym }), symbolError), assert[_0x132269(0x12e)](() => new URLSearchParams([[
            sym,
            'a'
        ]]), symbolError), assert[_0x132269(0x12e)](() => new URLSearchParams([[
            'a',
            sym
        ]]), symbolError);
}
