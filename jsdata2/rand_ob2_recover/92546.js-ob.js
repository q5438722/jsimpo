jest['setMock'](_0x389c6(423), { 'BlobModule': require(_0x389c6(424)) });
const Blob = require(_0x389c6(425)), File = require(_0x389c6(426));
describe(_0x389c6(427), function () {
    const _0x5d0f47 = _0x389c6;
    it(_0x5d0f47(428), function () {
        const _0x1ef5c9 = _0x5d0f47;
        let _0x586d96 = ![];
        class _0x6e5f47 {
            constructor() {
                const _0x286e2c = _0x1e06;
                return _0x586d96 = !![], { 'foo': _0x286e2c(429) };
            }
        }
        class _0xf1978a extends _0x6e5f47 {
            constructor() {
                super();
            }
        }
        expect(new _0xf1978a()['foo'])[_0x1ef5c9(430)](_0x1ef5c9(429)), expect(_0x586d96)[_0x1ef5c9(430)](!![]);
    });
}), describe('Blob', function () {
    const _0x24b480 = _0x389c6;
    it(_0x24b480(431), function () {
        const _0xd26982 = _0x24b480, _0x2e3a2e = new Blob([], { 'type': _0xd26982(432) });
        expect(_0x2e3a2e)['toBeInstanceOf'](Blob);
    });
}), describe(_0x389c6(433), function () {
    const _0x51fbb0 = _0x389c6;
    it(_0x51fbb0(434), () => {
        const _0x1f9467 = _0x51fbb0, _0x5e48c1 = new File([], _0x1f9467(435));
        expect(_0x5e48c1)[_0x1f9467(436)](File), expect(_0x5e48c1['data'][_0x1f9467(437)])[_0x1f9467(430)](0), expect(_0x5e48c1[_0x1f9467(438)]['size'])[_0x1f9467(430)](0), expect(_0x5e48c1[_0x1f9467(439)])['toBe'](0), expect(_0x5e48c1[_0x1f9467(440)])[_0x1f9467(430)](''), expect(_0x5e48c1[_0x1f9467(441)])['toBe'](_0x1f9467(435)), expect(_0x5e48c1['lastModified'])['toEqual'](expect['any'](Number));
    }), it(_0x51fbb0(442), () => {
        const _0x465318 = _0x51fbb0, _0xa3a811 = new File([], 'test.jpg', { 'type': _0x465318(432) });
        expect(_0xa3a811[_0x465318(440)])[_0x465318(430)]('image/jpeg');
    }), it(_0x51fbb0(443), () => {
        const _0x5670d8 = _0x51fbb0, _0x53f7a4 = new File([], _0x5670d8(435), { 'lastModified': 1337 });
        expect(_0x53f7a4['lastModified'])['toBe'](1337);
    }), it(_0x51fbb0(444), () => {
        const _0x568310 = _0x51fbb0;
        expect(() => new File())[_0x568310(445)](), expect(() => new File([]))[_0x568310(445)]();
    });
});