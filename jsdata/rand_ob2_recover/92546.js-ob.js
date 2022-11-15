jest[_0x311f9e(427)](_0x311f9e(428), { 'BlobModule': require('../__mocks__/BlobModule') });
const Blob = require(_0x311f9e(429)), File = require(_0x311f9e(430));
describe(_0x311f9e(431), function () {
    const _0x1fef31 = _0x311f9e;
    it(_0x1fef31(432), function () {
        const _0x574325 = _0x1fef31;
        let _0x2a51d7 = ![];
        class _0x3f92f7 {
            constructor() {
                const _0x332d7e = _0x31a9;
                return _0x2a51d7 = !![], { 'foo': _0x332d7e(433) };
            }
        }
        class _0x2b895d extends _0x3f92f7 {
            constructor() {
                super();
            }
        }
        expect(new _0x2b895d()[_0x574325(434)])[_0x574325(435)](_0x574325(433)), expect(_0x2a51d7)['toBe'](!![]);
    });
}), describe(_0x311f9e(436), function () {
    const _0x4e1338 = _0x311f9e;
    it(_0x4e1338(437), function () {
        const _0x58bc11 = _0x4e1338, _0x15fedd = new Blob([], { 'type': _0x58bc11(438) });
        expect(_0x15fedd)['toBeInstanceOf'](Blob);
    });
}), describe(_0x311f9e(439), function () {
    const _0x1141f = _0x311f9e;
    it(_0x1141f(440), () => {
        const _0x21855f = _0x1141f, _0x2fc769 = new File([], 'test.jpg');
        expect(_0x2fc769)[_0x21855f(441)](File), expect(_0x2fc769[_0x21855f(442)][_0x21855f(443)])[_0x21855f(435)](0), expect(_0x2fc769[_0x21855f(442)][_0x21855f(444)])[_0x21855f(435)](0), expect(_0x2fc769[_0x21855f(444)])[_0x21855f(435)](0), expect(_0x2fc769[_0x21855f(445)])[_0x21855f(435)](''), expect(_0x2fc769['name'])[_0x21855f(435)]('test.jpg'), expect(_0x2fc769[_0x21855f(446)])[_0x21855f(447)](expect[_0x21855f(448)](Number));
    }), it('should create empty file with type', () => {
        const _0x26c6ca = _0x1141f, _0x144fdf = new File([], 'test.jpg', { 'type': _0x26c6ca(438) });
        expect(_0x144fdf[_0x26c6ca(445)])['toBe'](_0x26c6ca(438));
    }), it('should create empty file with lastModified', () => {
        const _0x4aab0b = _0x1141f, _0x226db3 = new File([], _0x4aab0b(449), { 'lastModified': 1337 });
        expect(_0x226db3[_0x4aab0b(446)])[_0x4aab0b(435)](1337);
    }), it('should throw on invalid arguments', () => {
        const _0x1d08fc = _0x1141f;
        expect(() => new File())[_0x1d08fc(450)](), expect(() => new File([]))[_0x1d08fc(450)]();
    });
});