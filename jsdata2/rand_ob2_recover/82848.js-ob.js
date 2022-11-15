function _0x1fcf(_0x1342c8, _0x579bd3) {
    return _0x1fcf = function (_0x403ef6, _0x1fcfba) {
        _0x403ef6 = _0x403ef6 - 221;
        var _0x53e174 = _0x403e[_0x403ef6];
        return _0x53e174;
    }, _0x1fcf(_0x1342c8, _0x579bd3);
}
describe('toDebugString', function () {
    var _0x4230f1 = _0x1fcf;
    it(_0x4230f1(231), function () {
        var _0x1f98c1 = _0x4230f1;
        expect(toDebugString(_0x1f98c1(232)))[_0x1f98c1(233)](_0x1f98c1(232)), expect(toDebugString(123))[_0x1f98c1(233)](_0x1f98c1(234)), expect(toDebugString({ 'a': { 'b': 'c' } }))['toEqual'](_0x1f98c1(235)), expect(toDebugString(function _0x256001() {
            var _0x2b07a7 = 10;
        }))[_0x1f98c1(233)](_0x1f98c1(236)), expect(toDebugString())['toEqual']('undefined');
        var _0x95de16 = {};
        _0x95de16['a'] = _0x95de16, expect(toDebugString(_0x95de16))['toEqual'](_0x1f98c1(237)), expect(toDebugString([
            _0x95de16,
            _0x95de16
        ]))[_0x1f98c1(233)]('[{"a":"..."},"..."]');
    }), it(_0x4230f1(238), function () {
        var _0x164da2 = _0x4230f1, _0x2023c1 = { 'b': { 'c': { 'd': 1 } } };
        expect(toDebugString(_0x2023c1, 1))[_0x164da2(233)]('{"b":"..."}'), expect(toDebugString(_0x2023c1, 2))[_0x164da2(233)](_0x164da2(239)), expect(toDebugString(_0x2023c1, 3))[_0x164da2(233)](_0x164da2(240));
    }), they('should convert its argument that object to string  and ignore max depth when maxDepth = $prop', [
        NaN,
        null,
        undefined,
        !![],
        ![],
        -1,
        0
    ], function (_0x3d299a) {
        var _0x1e0e1a = _0x4230f1, _0x1b5698 = { 'b': { 'c': { 'd': 1 } } };
        expect(toDebugString(_0x1b5698, _0x3d299a))[_0x1e0e1a(233)](_0x1e0e1a(240));
    });
}), describe(_0x6d669b(241), function () {
    var _0x333d0e = _0x6d669b;
    it(_0x333d0e(231), function () {
        var _0x122ede = _0x333d0e;
        expect(serializeObject({ 'a': { 'b': 'c' } }))[_0x122ede(233)](_0x122ede(235));
        var _0x594782 = {};
        _0x594782['a'] = _0x594782, expect(serializeObject(_0x594782))['toEqual'](_0x122ede(237)), expect(serializeObject([
            _0x594782,
            _0x594782
        ]))[_0x122ede(233)](_0x122ede(242));
    }), it(_0x333d0e(238), function () {
        var _0xffae9 = _0x333d0e, _0x1341b9 = { 'b': { 'c': { 'd': 1 } } };
        expect(serializeObject(_0x1341b9, 1))[_0xffae9(233)](_0xffae9(243)), expect(serializeObject(_0x1341b9, 2))[_0xffae9(233)](_0xffae9(239)), expect(serializeObject(_0x1341b9, 3))[_0xffae9(233)](_0xffae9(240));
    }), they('should convert its argument that object to string  and ignore max depth when maxDepth = $prop', [
        NaN,
        null,
        undefined,
        !![],
        ![],
        -1,
        0
    ], function (_0x55e3c6) {
        var _0x56635f = _0x333d0e, _0x1f2ddc = { 'b': { 'c': { 'd': 1 } } };
        expect(serializeObject(_0x1f2ddc, _0x55e3c6))[_0x56635f(233)](_0x56635f(240));
    });
});