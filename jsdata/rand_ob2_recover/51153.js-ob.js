const common = require(_0xdb3a5(360)), assert = require(_0xdb3a5(361)), primValues = {
        'string': 'a',
        'number': 1,
        'object': { 0: 'a' },
        'array': [
            1,
            2,
            3
        ]
    }, bench = common['createBenchmark'](main, {
        'primitive': Object['keys'](primValues),
        'n': [20000],
        'strict': [
            0,
            1
        ],
        'method': [
            _0xdb3a5(362),
            'notDeepEqual'
        ]
    });
function main({
    n: _0x48c795,
    primitive: _0x5ceebc,
    method: _0x10dad2,
    strict: _0x1c5743
}) {
    const _0x27207b = _0xdb3a5, _0x28bb86 = primValues[_0x5ceebc], _0x15c383 = _0x28bb86, _0x574093 = _0x28bb86, _0x5c0618 = 'b';
    _0x1c5743 && (_0x10dad2 = _0x10dad2[_0x27207b(363)](_0x27207b(364), _0x27207b(365)));
    const _0x312e2c = assert[_0x10dad2], _0x55b9b0 = _0x10dad2[_0x27207b(366)]('not') ? _0x5c0618 : _0x574093;
    bench[_0x27207b(367)]();
    for (let _0x292a58 = 0; _0x292a58 < _0x48c795; ++_0x292a58) {
        _0x312e2c([_0x15c383], [_0x55b9b0]);
    }
    bench[_0x27207b(368)](_0x48c795);
}