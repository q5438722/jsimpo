const common = require(_0x191ebe(208)), assert = require(_0x191ebe(209)), primValues = {
        'string': 'a',
        'number': 1,
        'object': { 0: 'a' },
        'array': [
            -1 * 7915 + -9333 + 17249,
            -5792 + 2404 + 3390,
            8530 + 107 * -29 + 4 * -1356
        ]
    }, bench = common[_0x191ebe(210)](main, {
        'primitive': Object[_0x191ebe(211)](primValues),
        'n': [-28749 + 5863 * 2 + 123 * 301],
        'strict': [
            9996 + 1170 * -5 + -1382 * 3,
            -101 + -5 * 1489 + 7547
        ],
        'method': [
            _0x191ebe(212),
            _0x191ebe(213)
        ]
    });
function main({
    n: _0x25a6d9,
    primitive: _0x63be42,
    method: _0x2969a3,
    strict: _0x56b77a
}) {
    const _0x245621 = _0x191ebe, _0x49553d = {
            'lfbqH': _0x245621(214),
            'ahAro': _0x245621(215),
            'UjzoL': function (_0x2ed869, _0x3f134a) {
                return _0x2ed869 < _0x3f134a;
            },
            'EYFjo': function (_0xbd375f, _0x69fdf9, _0x741b99) {
                return _0xbd375f(_0x69fdf9, _0x741b99);
            }
        }, _0x27b2b4 = primValues[_0x63be42], _0x5b6735 = _0x27b2b4, _0x4f4dcc = _0x27b2b4, _0x3c66fb = 'b';
    _0x56b77a && (_0x2969a3 = _0x2969a3[_0x245621(216)](_0x49553d[_0x245621(217)], _0x49553d[_0x245621(218)]));
    const _0x506365 = assert[_0x2969a3], _0x49bdc7 = _0x2969a3[_0x245621(219)](_0x245621(220)) ? _0x3c66fb : _0x4f4dcc;
    bench[_0x245621(221)]();
    for (let _0x169b49 = 7863 + 5819 + -13682; _0x49553d[_0x245621(222)](_0x169b49, _0x25a6d9); ++_0x169b49) {
        _0x49553d[_0x245621(223)](_0x506365, [_0x5b6735], [_0x49bdc7]);
    }
    bench['end'](_0x25a6d9);
}