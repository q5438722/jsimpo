'use strict';
var _0x403e = [
    '42731uCbnCc',
    '479eBvAnd',
    '3334VqSXXS',
    'should\x20convert\x20its\x20argument\x20to\x20a\x20string',
    'string',
    'toEqual',
    '123',
    '{\x22a\x22:{\x22b\x22:\x22c\x22}}',
    'function\x20fn()',
    '{\x22a\x22:\x22...\x22}',
    'should\x20convert\x20its\x20argument\x20that\x20are\x20objects\x20to\x20string\x20based\x20on\x20maxDepth',
    '{\x22b\x22:{\x22c\x22:\x22...\x22}}',
    '{\x22b\x22:{\x22c\x22:{\x22d\x22:1}}}',
    'serializeObject',
    '[{\x22a\x22:\x22...\x22},\x22...\x22]',
    '{\x22b\x22:\x22...\x22}',
    '31478FsUwsD',
    '988647pfYwpb',
    '1106950tqzhXi',
    '273085EyQsRF',
    '15qofQAW',
    '48079HYroDV',
    '3nfolcD'
];
var _0x6d669b = _0x1fcf;
(function (_0x4258f1, _0x1b0552) {
    var _0x4a224b = _0x1fcf;
    while (!![]) {
        try {
            var _0x23ee59 = parseInt(_0x4a224b(0xdd)) + -parseInt(_0x4a224b(0xde)) + parseInt(_0x4a224b(0xdf)) + -parseInt(_0x4a224b(0xe0)) + parseInt(_0x4a224b(0xe1)) * -parseInt(_0x4a224b(0xe2)) + -parseInt(_0x4a224b(0xe3)) * parseInt(_0x4a224b(0xe4)) + parseInt(_0x4a224b(0xe5)) * parseInt(_0x4a224b(0xe6));
            if (_0x23ee59 === _0x1b0552)
                break;
            else
                _0x4258f1['push'](_0x4258f1['shift']());
        } catch (_0x2a1dde) {
            _0x4258f1['push'](_0x4258f1['shift']());
        }
    }
}(_0x403e, 0x986b0));
function _0x1fcf(_0x1342c8, _0x579bd3) {
    return _0x1fcf = function (_0x403ef6, _0x1fcfba) {
        _0x403ef6 = _0x403ef6 - 0xdd;
        var _0x53e174 = _0x403e[_0x403ef6];
        return _0x53e174;
    }, _0x1fcf(_0x1342c8, _0x579bd3);
}
describe('toDebugString', function () {
    var _0x4230f1 = _0x1fcf;
    it(_0x4230f1(0xe7), function () {
        var _0x1f98c1 = _0x4230f1;
        expect(toDebugString(_0x1f98c1(0xe8)))[_0x1f98c1(0xe9)](_0x1f98c1(0xe8)), expect(toDebugString(0x7b))[_0x1f98c1(0xe9)](_0x1f98c1(0xea)), expect(toDebugString({ 'a': { 'b': 'c' } }))['toEqual'](_0x1f98c1(0xeb)), expect(toDebugString(function _0x256001() {
            var _0x2b07a7 = 0xa;
        }))[_0x1f98c1(0xe9)](_0x1f98c1(0xec)), expect(toDebugString())['toEqual']('undefined');
        var _0x95de16 = {};
        _0x95de16['a'] = _0x95de16, expect(toDebugString(_0x95de16))['toEqual'](_0x1f98c1(0xed)), expect(toDebugString([
            _0x95de16,
            _0x95de16
        ]))[_0x1f98c1(0xe9)]('[{\x22a\x22:\x22...\x22},\x22...\x22]');
    }), it(_0x4230f1(0xee), function () {
        var _0x164da2 = _0x4230f1, _0x2023c1 = { 'b': { 'c': { 'd': 0x1 } } };
        expect(toDebugString(_0x2023c1, 0x1))[_0x164da2(0xe9)]('{\x22b\x22:\x22...\x22}'), expect(toDebugString(_0x2023c1, 0x2))[_0x164da2(0xe9)](_0x164da2(0xef)), expect(toDebugString(_0x2023c1, 0x3))[_0x164da2(0xe9)](_0x164da2(0xf0));
    }), they('should\x20convert\x20its\x20argument\x20that\x20object\x20to\x20string\x20\x20and\x20ignore\x20max\x20depth\x20when\x20maxDepth\x20=\x20$prop', [
        NaN,
        null,
        undefined,
        !![],
        ![],
        -0x1,
        0x0
    ], function (_0x3d299a) {
        var _0x1e0e1a = _0x4230f1, _0x1b5698 = { 'b': { 'c': { 'd': 0x1 } } };
        expect(toDebugString(_0x1b5698, _0x3d299a))[_0x1e0e1a(0xe9)](_0x1e0e1a(0xf0));
    });
}), describe(_0x6d669b(0xf1), function () {
    var _0x333d0e = _0x6d669b;
    it(_0x333d0e(0xe7), function () {
        var _0x122ede = _0x333d0e;
        expect(serializeObject({ 'a': { 'b': 'c' } }))[_0x122ede(0xe9)](_0x122ede(0xeb));
        var _0x594782 = {};
        _0x594782['a'] = _0x594782, expect(serializeObject(_0x594782))['toEqual'](_0x122ede(0xed)), expect(serializeObject([
            _0x594782,
            _0x594782
        ]))[_0x122ede(0xe9)](_0x122ede(0xf2));
    }), it(_0x333d0e(0xee), function () {
        var _0xffae9 = _0x333d0e, _0x1341b9 = { 'b': { 'c': { 'd': 0x1 } } };
        expect(serializeObject(_0x1341b9, 0x1))[_0xffae9(0xe9)](_0xffae9(0xf3)), expect(serializeObject(_0x1341b9, 0x2))[_0xffae9(0xe9)](_0xffae9(0xef)), expect(serializeObject(_0x1341b9, 0x3))[_0xffae9(0xe9)](_0xffae9(0xf0));
    }), they('should\x20convert\x20its\x20argument\x20that\x20object\x20to\x20string\x20\x20and\x20ignore\x20max\x20depth\x20when\x20maxDepth\x20=\x20$prop', [
        NaN,
        null,
        undefined,
        !![],
        ![],
        -0x1,
        0x0
    ], function (_0x55e3c6) {
        var _0x56635f = _0x333d0e, _0x1f2ddc = { 'b': { 'c': { 'd': 0x1 } } };
        expect(serializeObject(_0x1f2ddc, _0x55e3c6))[_0x56635f(0xe9)](_0x56635f(0xf0));
    });
});
