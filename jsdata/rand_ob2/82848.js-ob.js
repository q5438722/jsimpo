'use strict';
var _0x3db8 = [
    '1XHqQDD',
    '129686gfjWTr',
    '4441154iwRVce',
    'toDebugString',
    'should\x20convert\x20its\x20argument\x20to\x20a\x20string',
    'string',
    'toEqual',
    '123',
    '{\x22a\x22:{\x22b\x22:\x22c\x22}}',
    'undefined',
    '[{\x22a\x22:\x22...\x22},\x22...\x22]',
    '{\x22b\x22:\x22...\x22}',
    '{\x22b\x22:{\x22c\x22:{\x22d\x22:1}}}',
    'should\x20convert\x20its\x20argument\x20that\x20object\x20to\x20string\x20\x20and\x20ignore\x20max\x20depth\x20when\x20maxDepth\x20=\x20$prop',
    '{\x22a\x22:\x22...\x22}',
    'should\x20convert\x20its\x20argument\x20that\x20are\x20objects\x20to\x20string\x20based\x20on\x20maxDepth',
    '2kGUcdH',
    '815720MdtoGD',
    '938kXIfxb',
    '499VmTOkF',
    '384157JqMTDY',
    '4rpobkI',
    '127Ezrghi',
    '5902MFkpAK',
    '778511eiZVjO'
];
function _0x25e0(_0x5eb98e, _0x37f167) {
    return _0x25e0 = function (_0x3db8f7, _0x25e0d7) {
        _0x3db8f7 = _0x3db8f7 - 0x1c1;
        var _0x1d4ea5 = _0x3db8[_0x3db8f7];
        return _0x1d4ea5;
    }, _0x25e0(_0x5eb98e, _0x37f167);
}
var _0x20124c = _0x25e0;
(function (_0x2dd471, _0x28c59) {
    var _0xd0ff5 = _0x25e0;
    while (!![]) {
        try {
            var _0x2be098 = -parseInt(_0xd0ff5(0x1c1)) * parseInt(_0xd0ff5(0x1c2)) + -parseInt(_0xd0ff5(0x1c3)) * parseInt(_0xd0ff5(0x1c4)) + parseInt(_0xd0ff5(0x1c5)) * -parseInt(_0xd0ff5(0x1c6)) + -parseInt(_0xd0ff5(0x1c7)) * -parseInt(_0xd0ff5(0x1c8)) + -parseInt(_0xd0ff5(0x1c9)) + parseInt(_0xd0ff5(0x1ca)) * parseInt(_0xd0ff5(0x1cb)) + parseInt(_0xd0ff5(0x1cc));
            if (_0x2be098 === _0x28c59)
                break;
            else
                _0x2dd471['push'](_0x2dd471['shift']());
        } catch (_0x33d40a) {
            _0x2dd471['push'](_0x2dd471['shift']());
        }
    }
}(_0x3db8, 0xdd219));
describe(_0x20124c(0x1cd), function () {
    var _0x2a1531 = _0x20124c;
    it(_0x2a1531(0x1ce), function () {
        var _0x1640a3 = _0x2a1531;
        expect(toDebugString(_0x1640a3(0x1cf)))[_0x1640a3(0x1d0)](_0x1640a3(0x1cf)), expect(toDebugString(0x7b))[_0x1640a3(0x1d0)](_0x1640a3(0x1d1)), expect(toDebugString({ 'a': { 'b': 'c' } }))[_0x1640a3(0x1d0)](_0x1640a3(0x1d2)), expect(toDebugString(function _0x38daa4() {
            var _0x21b472 = 0xa;
        }))[_0x1640a3(0x1d0)]('function\x20fn()'), expect(toDebugString())[_0x1640a3(0x1d0)](_0x1640a3(0x1d3));
        var _0x58ce40 = {};
        _0x58ce40['a'] = _0x58ce40, expect(toDebugString(_0x58ce40))[_0x1640a3(0x1d0)]('{\x22a\x22:\x22...\x22}'), expect(toDebugString([
            _0x58ce40,
            _0x58ce40
        ]))[_0x1640a3(0x1d0)](_0x1640a3(0x1d4));
    }), it('should\x20convert\x20its\x20argument\x20that\x20are\x20objects\x20to\x20string\x20based\x20on\x20maxDepth', function () {
        var _0x4a03ed = _0x2a1531, _0x5248f4 = { 'b': { 'c': { 'd': 0x1 } } };
        expect(toDebugString(_0x5248f4, 0x1))[_0x4a03ed(0x1d0)](_0x4a03ed(0x1d5)), expect(toDebugString(_0x5248f4, 0x2))[_0x4a03ed(0x1d0)]('{\x22b\x22:{\x22c\x22:\x22...\x22}}'), expect(toDebugString(_0x5248f4, 0x3))[_0x4a03ed(0x1d0)](_0x4a03ed(0x1d6));
    }), they(_0x2a1531(0x1d7), [
        NaN,
        null,
        undefined,
        !![],
        ![],
        -0x1,
        0x0
    ], function (_0x28c488) {
        var _0x37cd23 = _0x2a1531, _0x475207 = { 'b': { 'c': { 'd': 0x1 } } };
        expect(toDebugString(_0x475207, _0x28c488))[_0x37cd23(0x1d0)](_0x37cd23(0x1d6));
    });
}), describe('serializeObject', function () {
    var _0x158676 = _0x20124c;
    it(_0x158676(0x1ce), function () {
        var _0x175fb0 = _0x158676;
        expect(serializeObject({ 'a': { 'b': 'c' } }))[_0x175fb0(0x1d0)]('{\x22a\x22:{\x22b\x22:\x22c\x22}}');
        var _0x1fdc68 = {};
        _0x1fdc68['a'] = _0x1fdc68, expect(serializeObject(_0x1fdc68))['toEqual'](_0x175fb0(0x1d8)), expect(serializeObject([
            _0x1fdc68,
            _0x1fdc68
        ]))['toEqual'](_0x175fb0(0x1d4));
    }), it(_0x158676(0x1d9), function () {
        var _0x5cdcbc = _0x158676, _0x29196c = { 'b': { 'c': { 'd': 0x1 } } };
        expect(serializeObject(_0x29196c, 0x1))[_0x5cdcbc(0x1d0)]('{\x22b\x22:\x22...\x22}'), expect(serializeObject(_0x29196c, 0x2))[_0x5cdcbc(0x1d0)]('{\x22b\x22:{\x22c\x22:\x22...\x22}}'), expect(serializeObject(_0x29196c, 0x3))[_0x5cdcbc(0x1d0)](_0x5cdcbc(0x1d6));
    }), they('should\x20convert\x20its\x20argument\x20that\x20object\x20to\x20string\x20\x20and\x20ignore\x20max\x20depth\x20when\x20maxDepth\x20=\x20$prop', [
        NaN,
        null,
        undefined,
        !![],
        ![],
        -0x1,
        0x0
    ], function (_0x371b96) {
        var _0x1f925e = _0x158676, _0xc8a6bc = { 'b': { 'c': { 'd': 0x1 } } };
        expect(serializeObject(_0xc8a6bc, _0x371b96))[_0x1f925e(0x1d0)](_0x1f925e(0x1d6));
    });
});
