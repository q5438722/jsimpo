function _0x4c07(_0x52a292, _0x3474db) {
    return _0x4c07 = function (_0x5b30d3, _0x4c07d7) {
        _0x5b30d3 = _0x5b30d3 - 161;
        let _0x1c2200 = _0x5b30[_0x5b30d3];
        return _0x1c2200;
    }, _0x4c07(_0x52a292, _0x3474db);
}
const {expect} = require(_0x264ad1(174)), resolveMeta = require(_0x264ad1(175)), isPropertyResolved = require(_0x264ad1(176));
describe(_0x264ad1(177), () => {
    const _0x279915 = _0x264ad1;
    let _0x147c64;
    before(() => {
        const _0x17ee74 = _0x4c07;
        _0x147c64 = resolveMeta({
            'root': _0x17ee74(178),
            'childParent': {
                'child': _0x17ee74(178),
                'ok': !![]
            },
            'parent': _0x17ee74(178),
            'rooto': _0x17ee74(179)
        });
    }), it(_0x279915(180), () => {
        const _0x1686d2 = _0x279915;
        expect(isPropertyResolved(_0x147c64, _0x1686d2(181)))['to']['be'][_0x1686d2(182)], expect(isPropertyResolved(_0x147c64, _0x1686d2(183)))['to']['be'][_0x1686d2(182)];
    }), it(_0x279915(184), () => {
        const _0x3e434d = _0x279915;
        expect(isPropertyResolved(_0x147c64, _0x3e434d(185)))['to']['be']['false'];
    }), it(_0x279915(186), () => {
        const _0x375146 = _0x279915;
        expect(isPropertyResolved(_0x147c64, _0x375146(187)))['to']['be']['false'];
    }), it(_0x279915(188), () => {
        const _0x46a174 = _0x279915;
        expect(isPropertyResolved(_0x147c64, _0x46a174(189)))['to']['be'][_0x46a174(190)], expect(isPropertyResolved(_0x147c64, _0x46a174(191)))['to']['be']['true'];
    }), it(_0x279915(192), () => {
        const _0xe84aaa = _0x279915;
        expect(isPropertyResolved(_0x147c64, 'elo'))['to']['be'][_0xe84aaa(190)], expect(isPropertyResolved(_0x147c64, 'childParent\0none'))['to']['be'][_0xe84aaa(190)];
    });
});