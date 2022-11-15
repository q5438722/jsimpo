'use strict';
describe('toDebugString', function () {
    it('should\x20convert\x20its\x20argument\x20to\x20a\x20string', function () {
        expect(toDebugString('string'))['toEqual']('string'), expect(toDebugString(0x185 * 0x5 + 0x23c9 + -0x2ae7))['toEqual']('123'), expect(toDebugString({ 'a': { 'b': 'c' } }))['toEqual']('{\x22a\x22:{\x22b\x22:\x22c\x22}}'), expect(toDebugString(function _0x340355() {
            var _0x4801f8 = 0x1ff2 + -0xd45 + -0x12a3;
        }))['toEqual']('function\x20fn()'), expect(toDebugString())['toEqual']('undefined');
        var _0x44cec8 = {};
        _0x44cec8['a'] = _0x44cec8, expect(toDebugString(_0x44cec8))['toEqual']('{\x22a\x22:\x22...\x22}'), expect(toDebugString([
            _0x44cec8,
            _0x44cec8
        ]))['toEqual']('[{\x22a\x22:\x22...\x22},\x22...\x22]');
    }), it('should\x20convert\x20its\x20argument\x20that\x20are\x20objects\x20to\x20string\x20based\x20on\x20maxDepth', function () {
        var _0x3cea2b = { 'b': { 'c': { 'd': 0x1 } } };
        expect(toDebugString(_0x3cea2b, 0x1bd6 + -0x258b + -0x2 * -0x4db))['toEqual']('{\x22b\x22:\x22...\x22}'), expect(toDebugString(_0x3cea2b, -0x3cd * -0x5 + -0xa01 + -0x8fe))['toEqual']('{\x22b\x22:{\x22c\x22:\x22...\x22}}'), expect(toDebugString(_0x3cea2b, 0xef1 + -0x9 * 0x11 + 0x3 * -0x4c7))['toEqual']('{\x22b\x22:{\x22c\x22:{\x22d\x22:1}}}');
    }), they('should\x20convert\x20its\x20argument\x20that\x20object\x20to\x20string\x20\x20and\x20ignore\x20max\x20depth\x20when\x20maxDepth\x20=\x20$prop', [
        NaN,
        null,
        undefined,
        !![],
        ![],
        -(-0x1da9 + 0x188 + 0x1c22),
        -0x6fb * 0x1 + -0x10c1 + 0x17bc
    ], function (_0x468a05) {
        var _0x2a8cbf = { 'b': { 'c': { 'd': 0x1 } } };
        expect(toDebugString(_0x2a8cbf, _0x468a05))['toEqual']('{\x22b\x22:{\x22c\x22:{\x22d\x22:1}}}');
    });
}), describe('serializeObject', function () {
    it('should\x20convert\x20its\x20argument\x20to\x20a\x20string', function () {
        expect(serializeObject({ 'a': { 'b': 'c' } }))['toEqual']('{\x22a\x22:{\x22b\x22:\x22c\x22}}');
        var _0x5eac68 = {};
        _0x5eac68['a'] = _0x5eac68, expect(serializeObject(_0x5eac68))['toEqual']('{\x22a\x22:\x22...\x22}'), expect(serializeObject([
            _0x5eac68,
            _0x5eac68
        ]))['toEqual']('[{\x22a\x22:\x22...\x22},\x22...\x22]');
    }), it('should\x20convert\x20its\x20argument\x20that\x20are\x20objects\x20to\x20string\x20based\x20on\x20maxDepth', function () {
        var _0x4846a5 = { 'b': { 'c': { 'd': 0x1 } } };
        expect(serializeObject(_0x4846a5, -0x204b + 0x10d4 + 0xf78))['toEqual']('{\x22b\x22:\x22...\x22}'), expect(serializeObject(_0x4846a5, 0x264f + 0x1 * 0x152b + 0x2b4 * -0x16))['toEqual']('{\x22b\x22:{\x22c\x22:\x22...\x22}}'), expect(serializeObject(_0x4846a5, 0x1 * -0x656 + -0x4 * -0x683 + 0x691 * -0x3))['toEqual']('{\x22b\x22:{\x22c\x22:{\x22d\x22:1}}}');
    }), they('should\x20convert\x20its\x20argument\x20that\x20object\x20to\x20string\x20\x20and\x20ignore\x20max\x20depth\x20when\x20maxDepth\x20=\x20$prop', [
        NaN,
        null,
        undefined,
        !![],
        ![],
        -(-0xc1 + -0x3 * -0x8ad + -0x1945),
        -0x54b + 0x18e0 + -0x687 * 0x3
    ], function (_0x4c3a3f) {
        var _0x4beab3 = { 'b': { 'c': { 'd': 0x1 } } };
        expect(serializeObject(_0x4beab3, _0x4c3a3f))['toEqual']('{\x22b\x22:{\x22c\x22:{\x22d\x22:1}}}');
    });
});
