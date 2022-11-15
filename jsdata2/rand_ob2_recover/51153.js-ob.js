const common = require(_0xdeef75(216)), assert = require(_0xdeef75(217)), primValues = {
        'string': 'a',
        'number': 1,
        'object': { 0: 'a' },
        'array': [
            1,
            2,
            3
        ]
    }, bench = common[_0xdeef75(218)](main, {
        'primitive': Object[_0xdeef75(219)](primValues),
        'n': [20000],
        'strict': [
            0,
            1
        ],
        'method': [
            _0xdeef75(220),
            _0xdeef75(221)
        ]
    });
function main({
    n: _0x2fa546,
    primitive: _0x3e85bb,
    method: _0x55e8b5,
    strict: _0x3e052a
}) {
    const _0x39d599 = _0xdeef75, _0x20bdcd = primValues[_0x3e85bb], _0xd66ddd = _0x20bdcd, _0xecbf0c = _0x20bdcd, _0x322877 = 'b';
    _0x3e052a && (_0x55e8b5 = _0x55e8b5['replace'](_0x39d599(222), 'eepStrict'));
    const _0x4fd286 = assert[_0x55e8b5], _0x576aa2 = _0x55e8b5[_0x39d599(223)](_0x39d599(224)) ? _0x322877 : _0xecbf0c;
    bench[_0x39d599(225)]();
    for (let _0x2c88a9 = 0; _0x2c88a9 < _0x2fa546; ++_0x2c88a9) {
        _0x4fd286([_0xd66ddd], [_0x576aa2]);
    }
    bench[_0x39d599(226)](_0x2fa546);
}