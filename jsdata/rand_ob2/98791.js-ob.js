'use strict';
const _0x5b30 = [
    '775096SLJVUi',
    '62OLjbEU',
    '7899HTOmJe',
    '95276cfxgGE',
    '3eXAGzk',
    '11512prhgpB',
    '114ZDMlkl',
    '2032510ttoLbc',
    'chai',
    '../../../../../lib/configuration/variables/resolve-meta',
    '../../../../../lib/configuration/variables/is-property-resolved',
    'test/unit/lib/configuration/variables/is-property-resolved.test.js',
    '${a:}',
    'foo',
    'should\x20match\x20property\x20directly',
    'root',
    'false',
    'childParent\x00child',
    'should\x20match\x20if\x20children\x20are\x20behind\x20variables',
    'childParent',
    'should\x20match\x20if\x20parent\x20is\x20behind\x20variables',
    'parent\x00parentChild',
    'should\x20not\x20match\x20not\x20affected',
    'rooto',
    'true',
    'childParent\x00ok',
    'should\x20not\x20match\x20not\x20existing',
    '32usHKDk',
    '14428kgeggk',
    '190vqeowB',
    '5877nzcFFM',
    '1iNZdiO'
];
const _0x264ad1 = _0x4c07;
(function (_0x20e1d0, _0x6bb49) {
    const _0x22253f = _0x4c07;
    while (!![]) {
        try {
            const _0x2a545a = -parseInt(_0x22253f(0xa1)) * parseInt(_0x22253f(0xa2)) + -parseInt(_0x22253f(0xa3)) * parseInt(_0x22253f(0xa4)) + -parseInt(_0x22253f(0xa5)) * -parseInt(_0x22253f(0xa6)) + parseInt(_0x22253f(0xa7)) * parseInt(_0x22253f(0xa8)) + parseInt(_0x22253f(0xa9)) * parseInt(_0x22253f(0xaa)) + -parseInt(_0x22253f(0xab)) * parseInt(_0x22253f(0xac)) + parseInt(_0x22253f(0xad));
            if (_0x2a545a === _0x6bb49)
                break;
            else
                _0x20e1d0['push'](_0x20e1d0['shift']());
        } catch (_0x37f94f) {
            _0x20e1d0['push'](_0x20e1d0['shift']());
        }
    }
}(_0x5b30, 0xa90fe));
function _0x4c07(_0x52a292, _0x3474db) {
    return _0x4c07 = function (_0x5b30d3, _0x4c07d7) {
        _0x5b30d3 = _0x5b30d3 - 0xa1;
        let _0x1c2200 = _0x5b30[_0x5b30d3];
        return _0x1c2200;
    }, _0x4c07(_0x52a292, _0x3474db);
}
const {expect} = require(_0x264ad1(0xae)), resolveMeta = require(_0x264ad1(0xaf)), isPropertyResolved = require(_0x264ad1(0xb0));
describe(_0x264ad1(0xb1), () => {
    const _0x279915 = _0x264ad1;
    let _0x147c64;
    before(() => {
        const _0x17ee74 = _0x4c07;
        _0x147c64 = resolveMeta({
            'root': _0x17ee74(0xb2),
            'childParent': {
                'child': _0x17ee74(0xb2),
                'ok': !![]
            },
            'parent': _0x17ee74(0xb2),
            'rooto': _0x17ee74(0xb3)
        });
    }), it(_0x279915(0xb4), () => {
        const _0x1686d2 = _0x279915;
        expect(isPropertyResolved(_0x147c64, _0x1686d2(0xb5)))['to']['be'][_0x1686d2(0xb6)], expect(isPropertyResolved(_0x147c64, _0x1686d2(0xb7)))['to']['be'][_0x1686d2(0xb6)];
    }), it(_0x279915(0xb8), () => {
        const _0x3e434d = _0x279915;
        expect(isPropertyResolved(_0x147c64, _0x3e434d(0xb9)))['to']['be']['false'];
    }), it(_0x279915(0xba), () => {
        const _0x375146 = _0x279915;
        expect(isPropertyResolved(_0x147c64, _0x375146(0xbb)))['to']['be']['false'];
    }), it(_0x279915(0xbc), () => {
        const _0x46a174 = _0x279915;
        expect(isPropertyResolved(_0x147c64, _0x46a174(0xbd)))['to']['be'][_0x46a174(0xbe)], expect(isPropertyResolved(_0x147c64, _0x46a174(0xbf)))['to']['be']['true'];
    }), it(_0x279915(0xc0), () => {
        const _0xe84aaa = _0x279915;
        expect(isPropertyResolved(_0x147c64, 'elo'))['to']['be'][_0xe84aaa(0xbe)], expect(isPropertyResolved(_0x147c64, 'childParent\x00none'))['to']['be'][_0xe84aaa(0xbe)];
    });
});
