'use strict';
const _0x56af = [
    '2305636EZwUMp',
    '../common.js',
    'assert',
    'createBenchmark',
    'keys',
    'deepEqual',
    'notDeepEqual',
    'eep',
    'includes',
    'not',
    'start',
    'end',
    '482431TReOAQ',
    '3txEGzf',
    '78586WCKbOL',
    '357052uSiLPN',
    '1158825TBlrpx',
    '272876MNtXLe',
    '193501CiBaLx'
];
const _0xdeef75 = _0x1c6c;
function _0x1c6c(_0x53e5b3, _0x2c8532) {
    return _0x1c6c = function (_0x56affe, _0x1c6c10) {
        _0x56affe = _0x56affe - 0xd0;
        let _0x4c9178 = _0x56af[_0x56affe];
        return _0x4c9178;
    }, _0x1c6c(_0x53e5b3, _0x2c8532);
}
(function (_0x446949, _0x56c414) {
    const _0x2c6c6f = _0x1c6c;
    while (!![]) {
        try {
            const _0x49de9e = -parseInt(_0x2c6c6f(0xd0)) + parseInt(_0x2c6c6f(0xd1)) * parseInt(_0x2c6c6f(0xd2)) + -parseInt(_0x2c6c6f(0xd3)) + -parseInt(_0x2c6c6f(0xd4)) + parseInt(_0x2c6c6f(0xd5)) + -parseInt(_0x2c6c6f(0xd6)) + parseInt(_0x2c6c6f(0xd7));
            if (_0x49de9e === _0x56c414)
                break;
            else
                _0x446949['push'](_0x446949['shift']());
        } catch (_0x25faf7) {
            _0x446949['push'](_0x446949['shift']());
        }
    }
}(_0x56af, 0x97f7d));
const common = require(_0xdeef75(0xd8)), assert = require(_0xdeef75(0xd9)), primValues = {
        'string': 'a',
        'number': 0x1,
        'object': { 0x0: 'a' },
        'array': [
            0x1,
            0x2,
            0x3
        ]
    }, bench = common[_0xdeef75(0xda)](main, {
        'primitive': Object[_0xdeef75(0xdb)](primValues),
        'n': [0x4e20],
        'strict': [
            0x0,
            0x1
        ],
        'method': [
            _0xdeef75(0xdc),
            _0xdeef75(0xdd)
        ]
    });
function main({
    n: _0x2fa546,
    primitive: _0x3e85bb,
    method: _0x55e8b5,
    strict: _0x3e052a
}) {
    const _0x39d599 = _0xdeef75, _0x20bdcd = primValues[_0x3e85bb], _0xd66ddd = _0x20bdcd, _0xecbf0c = _0x20bdcd, _0x322877 = 'b';
    _0x3e052a && (_0x55e8b5 = _0x55e8b5['replace'](_0x39d599(0xde), 'eepStrict'));
    const _0x4fd286 = assert[_0x55e8b5], _0x576aa2 = _0x55e8b5[_0x39d599(0xdf)](_0x39d599(0xe0)) ? _0x322877 : _0xecbf0c;
    bench[_0x39d599(0xe1)]();
    for (let _0x2c88a9 = 0x0; _0x2c88a9 < _0x2fa546; ++_0x2c88a9) {
        _0x4fd286([_0xd66ddd], [_0x576aa2]);
    }
    bench[_0x39d599(0xe2)](_0x2fa546);
}
