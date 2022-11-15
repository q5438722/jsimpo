'use strict';
const _0x399b = [
    'includes',
    'start',
    'end',
    '140139eQDVLj',
    '15413LmjOUp',
    '1ZotUed',
    '329803DVejnr',
    '130607pWiRBB',
    '224039shbTqu',
    '181DNLCEX',
    '529CcOvrt',
    '53593jMurfr',
    '../common.js',
    'assert',
    'deepEqual',
    'replace',
    'eep',
    'eepStrict'
];
function _0x3170(_0x17d28b, _0xe0c902) {
    return _0x3170 = function (_0x399b9a, _0x3170b3) {
        _0x399b9a = _0x399b9a - 0x15f;
        let _0x9cc0d3 = _0x399b[_0x399b9a];
        return _0x9cc0d3;
    }, _0x3170(_0x17d28b, _0xe0c902);
}
const _0xdb3a5 = _0x3170;
(function (_0x175833, _0x2d45e6) {
    const _0xcda5d4 = _0x3170;
    while (!![]) {
        try {
            const _0x2de1dc = parseInt(_0xcda5d4(0x15f)) + parseInt(_0xcda5d4(0x160)) + parseInt(_0xcda5d4(0x161)) * parseInt(_0xcda5d4(0x162)) + -parseInt(_0xcda5d4(0x163)) + -parseInt(_0xcda5d4(0x164)) + -parseInt(_0xcda5d4(0x165)) * -parseInt(_0xcda5d4(0x166)) + -parseInt(_0xcda5d4(0x167));
            if (_0x2de1dc === _0x2d45e6)
                break;
            else
                _0x175833['push'](_0x175833['shift']());
        } catch (_0x40fdde) {
            _0x175833['push'](_0x175833['shift']());
        }
    }
}(_0x399b, 0x2a341));
const common = require(_0xdb3a5(0x168)), assert = require(_0xdb3a5(0x169)), primValues = {
        'string': 'a',
        'number': 0x1,
        'object': { 0x0: 'a' },
        'array': [
            0x1,
            0x2,
            0x3
        ]
    }, bench = common['createBenchmark'](main, {
        'primitive': Object['keys'](primValues),
        'n': [0x4e20],
        'strict': [
            0x0,
            0x1
        ],
        'method': [
            _0xdb3a5(0x16a),
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
    _0x1c5743 && (_0x10dad2 = _0x10dad2[_0x27207b(0x16b)](_0x27207b(0x16c), _0x27207b(0x16d)));
    const _0x312e2c = assert[_0x10dad2], _0x55b9b0 = _0x10dad2[_0x27207b(0x16e)]('not') ? _0x5c0618 : _0x574093;
    bench[_0x27207b(0x16f)]();
    for (let _0x292a58 = 0x0; _0x292a58 < _0x48c795; ++_0x292a58) {
        _0x312e2c([_0x15c383], [_0x55b9b0]);
    }
    bench[_0x27207b(0x170)](_0x48c795);
}
