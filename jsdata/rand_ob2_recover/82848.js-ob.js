describe(_0x20124c(461), function () {
    var _0x2a1531 = _0x20124c;
    it(_0x2a1531(462), function () {
        var _0x1640a3 = _0x2a1531;
        expect(toDebugString(_0x1640a3(463)))[_0x1640a3(464)](_0x1640a3(463)), expect(toDebugString(123))[_0x1640a3(464)](_0x1640a3(465)), expect(toDebugString({ 'a': { 'b': 'c' } }))[_0x1640a3(464)](_0x1640a3(466)), expect(toDebugString(function _0x38daa4() {
            var _0x21b472 = 10;
        }))[_0x1640a3(464)]('function fn()'), expect(toDebugString())[_0x1640a3(464)](_0x1640a3(467));
        var _0x58ce40 = {};
        _0x58ce40['a'] = _0x58ce40, expect(toDebugString(_0x58ce40))[_0x1640a3(464)]('{"a":"..."}'), expect(toDebugString([
            _0x58ce40,
            _0x58ce40
        ]))[_0x1640a3(464)](_0x1640a3(468));
    }), it('should convert its argument that are objects to string based on maxDepth', function () {
        var _0x4a03ed = _0x2a1531, _0x5248f4 = { 'b': { 'c': { 'd': 1 } } };
        expect(toDebugString(_0x5248f4, 1))[_0x4a03ed(464)](_0x4a03ed(469)), expect(toDebugString(_0x5248f4, 2))[_0x4a03ed(464)]('{"b":{"c":"..."}}'), expect(toDebugString(_0x5248f4, 3))[_0x4a03ed(464)](_0x4a03ed(470));
    }), they(_0x2a1531(471), [
        NaN,
        null,
        undefined,
        !![],
        ![],
        -1,
        0
    ], function (_0x28c488) {
        var _0x37cd23 = _0x2a1531, _0x475207 = { 'b': { 'c': { 'd': 1 } } };
        expect(toDebugString(_0x475207, _0x28c488))[_0x37cd23(464)](_0x37cd23(470));
    });
}), describe('serializeObject', function () {
    var _0x158676 = _0x20124c;
    it(_0x158676(462), function () {
        var _0x175fb0 = _0x158676;
        expect(serializeObject({ 'a': { 'b': 'c' } }))[_0x175fb0(464)]('{"a":{"b":"c"}}');
        var _0x1fdc68 = {};
        _0x1fdc68['a'] = _0x1fdc68, expect(serializeObject(_0x1fdc68))['toEqual'](_0x175fb0(472)), expect(serializeObject([
            _0x1fdc68,
            _0x1fdc68
        ]))['toEqual'](_0x175fb0(468));
    }), it(_0x158676(473), function () {
        var _0x5cdcbc = _0x158676, _0x29196c = { 'b': { 'c': { 'd': 1 } } };
        expect(serializeObject(_0x29196c, 1))[_0x5cdcbc(464)]('{"b":"..."}'), expect(serializeObject(_0x29196c, 2))[_0x5cdcbc(464)]('{"b":{"c":"..."}}'), expect(serializeObject(_0x29196c, 3))[_0x5cdcbc(464)](_0x5cdcbc(470));
    }), they('should convert its argument that object to string  and ignore max depth when maxDepth = $prop', [
        NaN,
        null,
        undefined,
        !![],
        ![],
        -1,
        0
    ], function (_0x371b96) {
        var _0x1f925e = _0x158676, _0xc8a6bc = { 'b': { 'c': { 'd': 1 } } };
        expect(serializeObject(_0xc8a6bc, _0x371b96))[_0x1f925e(464)](_0x1f925e(470));
    });
});