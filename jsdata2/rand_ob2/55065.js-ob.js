'use strict';
const _0x26e2 = [
    'key=val&key2=val2',
    'throws',
    'valueOf',
    '781777gXjaUV',
    '5vIqdgf',
    '30621bNGGTm',
    '39067tEFZDH',
    '1026535lIQmCt',
    '2ApiTld',
    '179761QDHikI',
    '252364FGIiSI',
    '1dURgeS',
    '320833jViWZe',
    '../common',
    'assert',
    'iterator',
    'TypeError',
    'Query\x20pairs\x20must\x20be\x20iterable',
    'ERR_INVALID_TUPLE',
    'Each\x20query\x20pair\x20must\x20be\x20an\x20iterable\x20[name,\x20value]\x20tuple',
    'toString',
    'strictEqual',
    'key',
    'val',
    'key2',
    'val2',
    'map'
];
const _0x4cd8cd = _0x5605;
(function (_0x2526fb, _0x42a20e) {
    const _0x1ddf9b = _0x5605;
    while (!![]) {
        try {
            const _0x1c394c = -parseInt(_0x1ddf9b(0xf3)) + parseInt(_0x1ddf9b(0xf4)) * parseInt(_0x1ddf9b(0xf5)) + -parseInt(_0x1ddf9b(0xf6)) + parseInt(_0x1ddf9b(0xf7)) + parseInt(_0x1ddf9b(0xf8)) * parseInt(_0x1ddf9b(0xf9)) + parseInt(_0x1ddf9b(0xfa)) + parseInt(_0x1ddf9b(0xfb)) * -parseInt(_0x1ddf9b(0xfc));
            if (_0x1c394c === _0x42a20e)
                break;
            else
                _0x2526fb['push'](_0x2526fb['shift']());
        } catch (_0x238108) {
            _0x2526fb['push'](_0x2526fb['shift']());
        }
    }
}(_0x26e2, 0x9ea79));
require(_0x4cd8cd(0xfd));
const assert = require(_0x4cd8cd(0xfe));
function makeIterableFunc(_0x3bdc82) {
    const _0x52e508 = _0x4cd8cd;
    return Object['assign'](() => {
    }, {
        [Symbol[_0x52e508(0xff)]]() {
            const _0x465b12 = _0x52e508;
            return _0x3bdc82[Symbol[_0x465b12(0xff)]]();
        }
    });
}
function _0x5605(_0x1bec6a, _0x12c4fb) {
    return _0x5605 = function (_0x26e240, _0x5605c8) {
        _0x26e240 = _0x26e240 - 0xf3;
        let _0x3d5ca7 = _0x26e2[_0x26e240];
        return _0x3d5ca7;
    }, _0x5605(_0x1bec6a, _0x12c4fb);
}
{
    const iterableError = {
            'code': 'ERR_ARG_NOT_ITERABLE',
            'name': _0x4cd8cd(0x100),
            'message': _0x4cd8cd(0x101)
        }, tupleError = {
            'code': _0x4cd8cd(0x102),
            'name': _0x4cd8cd(0x100),
            'message': _0x4cd8cd(0x103)
        };
    let params;
    params = new URLSearchParams(undefined), assert['strictEqual'](params[_0x4cd8cd(0x104)](), ''), params = new URLSearchParams(null), assert[_0x4cd8cd(0x105)](params['toString'](), ''), params = new URLSearchParams(makeIterableFunc([
        [
            _0x4cd8cd(0x106),
            _0x4cd8cd(0x107)
        ],
        [
            _0x4cd8cd(0x108),
            'val2'
        ]
    ])), assert[_0x4cd8cd(0x105)](params[_0x4cd8cd(0x104)](), 'key=val&key2=val2'), params = new URLSearchParams(makeIterableFunc([
        [
            _0x4cd8cd(0x106),
            'val'
        ],
        [
            'key2',
            _0x4cd8cd(0x109)
        ]
    ][_0x4cd8cd(0x10a)](makeIterableFunc))), assert[_0x4cd8cd(0x105)](params[_0x4cd8cd(0x104)](), _0x4cd8cd(0x10b)), assert[_0x4cd8cd(0x10c)](() => new URLSearchParams([[0x1]]), tupleError), assert[_0x4cd8cd(0x10c)](() => new URLSearchParams([[
            0x1,
            0x2,
            0x3
        ]]), tupleError), assert[_0x4cd8cd(0x10c)](() => new URLSearchParams({ [Symbol[_0x4cd8cd(0xff)]]: 0x2a }), iterableError), assert[_0x4cd8cd(0x10c)](() => new URLSearchParams([{}]), tupleError), assert[_0x4cd8cd(0x10c)](() => new URLSearchParams(['a']), tupleError), assert['throws'](() => new URLSearchParams([null]), tupleError), assert[_0x4cd8cd(0x10c)](() => new URLSearchParams([{ [Symbol[_0x4cd8cd(0xff)]]: 0x2a }]), tupleError);
}
{
    const obj = {
            'toString'() {
                const _0x31a891 = _0x4cd8cd;
                throw new Error(_0x31a891(0x104));
            },
            'valueOf'() {
                const _0x1ab4c3 = _0x4cd8cd;
                throw new Error(_0x1ab4c3(0x10d));
            }
        }, sym = Symbol(), toStringError = /^Error: toString$/, symbolError = /^TypeError: Cannot convert a Symbol value to a string$/;
    assert[_0x4cd8cd(0x10c)](() => new URLSearchParams({ 'a': obj }), toStringError), assert[_0x4cd8cd(0x10c)](() => new URLSearchParams([[
            'a',
            obj
        ]]), toStringError), assert[_0x4cd8cd(0x10c)](() => new URLSearchParams(sym), symbolError), assert['throws'](() => new URLSearchParams({ [sym]: 'a' }), symbolError), assert[_0x4cd8cd(0x10c)](() => new URLSearchParams({ 'a': sym }), symbolError), assert[_0x4cd8cd(0x10c)](() => new URLSearchParams([[
            sym,
            'a'
        ]]), symbolError), assert[_0x4cd8cd(0x10c)](() => new URLSearchParams([[
            'a',
            sym
        ]]), symbolError);
}
