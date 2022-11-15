'use strict';

const _0x167e = ['602817suWcvE', '559329hiKwRB', '11551TWiwhh', '47VPWYAw', '1797dpFpdf', '411USvDvG', '3pKRVzs', '25620WBegzQ', '../common', 'assert', 'assign', 'iterator', 'ERR_ARG_NOT_ITERABLE', 'TypeError', 'ERR_INVALID_TUPLE', 'Each query pair must be an iterable [name, value] tuple', 'toString', 'strictEqual', 'key', 'val', 'val2', 'key=val&key2=val2', 'throws', 'zrjvP', '759127WYBclb', '79579ASZtKu'];
const _0x132269 = _0x1270;

(function (_0x2d8ac2, _0x611262) {
    const _0x4b26dd = _0x1270;

    while (true) {
        try {
            const _0x1ed001 = parseInt(_0x4b26dd(0x116)) + parseInt(_0x4b26dd(0x117)) + parseInt(_0x4b26dd(0x118)) + -parseInt(_0x4b26dd(0x119)) + parseInt(_0x4b26dd(0x11a)) * parseInt(_0x4b26dd(0x11b)) + -parseInt(_0x4b26dd(0x11c)) * parseInt(_0x4b26dd(0x11d)) + -parseInt(_0x4b26dd(0x11e)) * parseInt(_0x4b26dd(0x11f));

            if (_0x1ed001 === _0x611262) break;else _0x2d8ac2.push(_0x2d8ac2.shift());
        } catch (_0x4d4860) {
            _0x2d8ac2.push(_0x2d8ac2.shift());
        }
    }
})(_0x167e, 609664);
require(_0x132269(0x120));
function _0x1270(_0x40d52b, _0x3fa61d) {
    return _0x1270 = function (_0x53a342, _0x519f74) {
        _0x53a342 = _0x53a342 - 278;
        const _0x30ed33 = _0x167e[_0x53a342];

        return _0x30ed33;
    }, _0x1270(_0x40d52b, _0x3fa61d);
}

const assert = require(_0x132269(0x121));

function makeIterableFunc(_0x4c894b) {
    const _0x28b16a = _0x132269;

    return Object[_0x28b16a(0x122)](() => {}, {
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
        'message': 'Query pairs must be iterable'
    };
    const tupleError = {
        'code': _0x132269(0x126),
        'name': _0x132269(0x125),
        'message': _0x132269(0x127)
    };
    var params;

    params = new URLSearchParams(undefined), assert.strictEqual(params[_0x132269(0x128)](), ''), params = new URLSearchParams(null), assert[_0x132269(0x129)](params[_0x132269(0x128)](), ''), params = new URLSearchParams(makeIterableFunc([[_0x132269(0x12a), _0x132269(0x12b)], ['key2', _0x132269(0x12c)]])), assert.strictEqual(params[_0x132269(0x128)](), _0x132269(0x12d)), params = new URLSearchParams(makeIterableFunc([[_0x132269(0x12a), _0x132269(0x12b)], ['key2', _0x132269(0x12c)]].map(makeIterableFunc))), assert[_0x132269(0x129)](params[_0x132269(0x128)](), _0x132269(0x12d)), assert[_0x132269(0x12e)](() => new URLSearchParams([[1]]), tupleError), assert.throws(() => new URLSearchParams([[1, 2, 3]]), tupleError), assert[_0x132269(0x12e)](() => new URLSearchParams({ [Symbol[_0x132269(0x123)]]: 42 }), iterableError), assert.throws(() => new URLSearchParams([{}]), tupleError), assert[_0x132269(0x12e)](() => new URLSearchParams(['a']), tupleError), assert[_0x132269(0x12e)](() => new URLSearchParams([null]), tupleError), assert[_0x132269(0x12e)](() => new URLSearchParams([{ [Symbol[_0x132269(0x123)]]: 42 }]), tupleError);
}
{
    const obj = {
        'toString'() {
            const _0x25b902 = _0x132269;
            const _0x4d4ec9 = { 'zrjvP': 'toString' };

            throw new Error(_0x4d4ec9[_0x25b902(0x12f)]);
        },
        'valueOf'() {
            throw new Error('valueOf');
        }
    };
    const sym = Symbol();
    const toStringError = /^Error: toString$/;
    const symbolError = /^TypeError: Cannot convert a Symbol value to a string$/;

    assert.throws(() => new URLSearchParams({ 'a': obj }), toStringError), assert[_0x132269(0x12e)](() => new URLSearchParams([['a', obj]]), toStringError), assert[_0x132269(0x12e)](() => new URLSearchParams(sym), symbolError), assert[_0x132269(0x12e)](() => new URLSearchParams({ [sym]: 'a' }), symbolError), assert[_0x132269(0x12e)](() => new URLSearchParams({ 'a': sym }), symbolError), assert[_0x132269(0x12e)](() => new URLSearchParams([[sym, 'a']]), symbolError), assert[_0x132269(0x12e)](() => new URLSearchParams([['a', sym]]), symbolError);
}
