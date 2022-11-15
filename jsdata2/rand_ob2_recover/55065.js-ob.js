require(_0x4cd8cd(253));
const assert = require(_0x4cd8cd(254));
function makeIterableFunc(_0x3bdc82) {
    const _0x52e508 = _0x4cd8cd;
    return Object['assign'](() => {
    }, {
        [Symbol[_0x52e508(255)]]() {
            const _0x465b12 = _0x52e508;
            return _0x3bdc82[Symbol[_0x465b12(255)]]();
        }
    });
}
function _0x5605(_0x1bec6a, _0x12c4fb) {
    return _0x5605 = function (_0x26e240, _0x5605c8) {
        _0x26e240 = _0x26e240 - 243;
        let _0x3d5ca7 = _0x26e2[_0x26e240];
        return _0x3d5ca7;
    }, _0x5605(_0x1bec6a, _0x12c4fb);
}
{
    const iterableError = {
            'code': 'ERR_ARG_NOT_ITERABLE',
            'name': _0x4cd8cd(256),
            'message': _0x4cd8cd(257)
        }, tupleError = {
            'code': _0x4cd8cd(258),
            'name': _0x4cd8cd(256),
            'message': _0x4cd8cd(259)
        };
    let params;
    params = new URLSearchParams(undefined), assert['strictEqual'](params[_0x4cd8cd(260)](), ''), params = new URLSearchParams(null), assert[_0x4cd8cd(261)](params['toString'](), ''), params = new URLSearchParams(makeIterableFunc([
        [
            _0x4cd8cd(262),
            _0x4cd8cd(263)
        ],
        [
            _0x4cd8cd(264),
            'val2'
        ]
    ])), assert[_0x4cd8cd(261)](params[_0x4cd8cd(260)](), 'key=val&key2=val2'), params = new URLSearchParams(makeIterableFunc([
        [
            _0x4cd8cd(262),
            'val'
        ],
        [
            'key2',
            _0x4cd8cd(265)
        ]
    ][_0x4cd8cd(266)](makeIterableFunc))), assert[_0x4cd8cd(261)](params[_0x4cd8cd(260)](), _0x4cd8cd(267)), assert[_0x4cd8cd(268)](() => new URLSearchParams([[1]]), tupleError), assert[_0x4cd8cd(268)](() => new URLSearchParams([[
            1,
            2,
            3
        ]]), tupleError), assert[_0x4cd8cd(268)](() => new URLSearchParams({ [Symbol[_0x4cd8cd(255)]]: 42 }), iterableError), assert[_0x4cd8cd(268)](() => new URLSearchParams([{}]), tupleError), assert[_0x4cd8cd(268)](() => new URLSearchParams(['a']), tupleError), assert['throws'](() => new URLSearchParams([null]), tupleError), assert[_0x4cd8cd(268)](() => new URLSearchParams([{ [Symbol[_0x4cd8cd(255)]]: 42 }]), tupleError);
}
{
    const obj = {
            'toString'() {
                const _0x31a891 = _0x4cd8cd;
                throw new Error(_0x31a891(260));
            },
            'valueOf'() {
                const _0x1ab4c3 = _0x4cd8cd;
                throw new Error(_0x1ab4c3(269));
            }
        }, sym = Symbol(), toStringError = /^Error: toString$/, symbolError = /^TypeError: Cannot convert a Symbol value to a string$/;
    assert[_0x4cd8cd(268)](() => new URLSearchParams({ 'a': obj }), toStringError), assert[_0x4cd8cd(268)](() => new URLSearchParams([[
            'a',
            obj
        ]]), toStringError), assert[_0x4cd8cd(268)](() => new URLSearchParams(sym), symbolError), assert['throws'](() => new URLSearchParams({ [sym]: 'a' }), symbolError), assert[_0x4cd8cd(268)](() => new URLSearchParams({ 'a': sym }), symbolError), assert[_0x4cd8cd(268)](() => new URLSearchParams([[
            sym,
            'a'
        ]]), symbolError), assert[_0x4cd8cd(268)](() => new URLSearchParams([[
            'a',
            sym
        ]]), symbolError);
}