require(_0x132269(288));
function _0x1270(_0x40d52b, _0x3fa61d) {
    return _0x1270 = function (_0x53a342, _0x519f74) {
        _0x53a342 = _0x53a342 - (9138 + 6301 + -15161);
        let _0x30ed33 = _0x167e[_0x53a342];
        return _0x30ed33;
    }, _0x1270(_0x40d52b, _0x3fa61d);
}
const assert = require(_0x132269(289));
function makeIterableFunc(_0x4c894b) {
    const _0x28b16a = _0x132269;
    return Object[_0x28b16a(290)](() => {
    }, {
        [Symbol[_0x28b16a(291)]]() {
            const _0x47f37b = _0x28b16a;
            return _0x4c894b[Symbol[_0x47f37b(291)]]();
        }
    });
}
{
    const iterableError = {
            'code': _0x132269(292),
            'name': _0x132269(293),
            'message': 'Query pairs must be iterable'
        }, tupleError = {
            'code': _0x132269(294),
            'name': _0x132269(293),
            'message': _0x132269(295)
        };
    let params;
    params = new URLSearchParams(undefined), assert['strictEqual'](params[_0x132269(296)](), ''), params = new URLSearchParams(null), assert[_0x132269(297)](params[_0x132269(296)](), ''), params = new URLSearchParams(makeIterableFunc([
        [
            _0x132269(298),
            _0x132269(299)
        ],
        [
            'key2',
            _0x132269(300)
        ]
    ])), assert['strictEqual'](params[_0x132269(296)](), _0x132269(301)), params = new URLSearchParams(makeIterableFunc([
        [
            _0x132269(298),
            _0x132269(299)
        ],
        [
            'key2',
            _0x132269(300)
        ]
    ]['map'](makeIterableFunc))), assert[_0x132269(297)](params[_0x132269(296)](), _0x132269(301)), assert[_0x132269(302)](() => new URLSearchParams([[-9091 + -22 * 316 + 16044]]), tupleError), assert['throws'](() => new URLSearchParams([[
            216 + -6689 + 6474,
            -4275 + 2 * 891 + 2495,
            -6673 * -1 + 3189 + -9859
        ]]), tupleError), assert[_0x132269(302)](() => new URLSearchParams({ [Symbol[_0x132269(291)]]: 2947 + -1137 + -52 * 34 }), iterableError), assert['throws'](() => new URLSearchParams([{}]), tupleError), assert[_0x132269(302)](() => new URLSearchParams(['a']), tupleError), assert[_0x132269(302)](() => new URLSearchParams([null]), tupleError), assert[_0x132269(302)](() => new URLSearchParams([{ [Symbol[_0x132269(291)]]: -125 * -73 + 18 * 1 + -9101 }]), tupleError);
}
{
    const obj = {
            'toString'() {
                const _0x25b902 = _0x132269, _0x4d4ec9 = { 'zrjvP': 'toString' };
                throw new Error(_0x4d4ec9[_0x25b902(303)]);
            },
            'valueOf'() {
                throw new Error('valueOf');
            }
        }, sym = Symbol(), toStringError = /^Error: toString$/, symbolError = /^TypeError: Cannot convert a Symbol value to a string$/;
    assert['throws'](() => new URLSearchParams({ 'a': obj }), toStringError), assert[_0x132269(302)](() => new URLSearchParams([[
            'a',
            obj
        ]]), toStringError), assert[_0x132269(302)](() => new URLSearchParams(sym), symbolError), assert[_0x132269(302)](() => new URLSearchParams({ [sym]: 'a' }), symbolError), assert[_0x132269(302)](() => new URLSearchParams({ 'a': sym }), symbolError), assert[_0x132269(302)](() => new URLSearchParams([[
            sym,
            'a'
        ]]), symbolError), assert[_0x132269(302)](() => new URLSearchParams([[
            'a',
            sym
        ]]), symbolError);
}