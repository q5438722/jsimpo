'use strict';
const _0xd042 = [
    'toBeInstanceOf',
    'data',
    'offset',
    'size',
    'type',
    'lastModified',
    'toEqual',
    'any',
    'test.jpg',
    'toThrow',
    '421076BqtDFu',
    '271989jrCYZX',
    '551897KaEOXn',
    '74843tmtMIU',
    '9Rydbyk',
    '713961dJkmIB',
    '798025PlfxOQ',
    '857NrAcOZ',
    '1471jpoCsp',
    'setMock',
    '../../BatchedBridge/NativeModules',
    '../Blob',
    '../File',
    'babel\x207\x20smoke\x20test',
    'should\x20be\x20able\x20to\x20extend\x20a\x20class\x20with\x20native\x20name',
    'PASS',
    'foo',
    'toBe',
    'Blob',
    'regression\x20caused\x20by\x20circular\x20dep\x20&&\x20babel\x207',
    'image/jpeg',
    'File',
    'should\x20create\x20empty\x20file'
];
const _0x311f9e = _0x31a9;
function _0x31a9(_0x480310, _0x5a5de2) {
    return _0x31a9 = function (_0xd042b2, _0x31a92a) {
        _0xd042b2 = _0xd042b2 - 0x1a2;
        let _0xfcdcba = _0xd042[_0xd042b2];
        return _0xfcdcba;
    }, _0x31a9(_0x480310, _0x5a5de2);
}
(function (_0xf6d616, _0x2252a3) {
    const _0x461e3d = _0x31a9;
    while (!![]) {
        try {
            const _0x13605c = parseInt(_0x461e3d(0x1a2)) + -parseInt(_0x461e3d(0x1a3)) + -parseInt(_0x461e3d(0x1a4)) + parseInt(_0x461e3d(0x1a5)) * parseInt(_0x461e3d(0x1a6)) + parseInt(_0x461e3d(0x1a7)) + parseInt(_0x461e3d(0x1a8)) + parseInt(_0x461e3d(0x1a9)) * -parseInt(_0x461e3d(0x1aa));
            if (_0x13605c === _0x2252a3)
                break;
            else
                _0xf6d616['push'](_0xf6d616['shift']());
        } catch (_0x2517d9) {
            _0xf6d616['push'](_0xf6d616['shift']());
        }
    }
}(_0xd042, 0x7f784));
jest[_0x311f9e(0x1ab)](_0x311f9e(0x1ac), { 'BlobModule': require('../__mocks__/BlobModule') });
const Blob = require(_0x311f9e(0x1ad)), File = require(_0x311f9e(0x1ae));
describe(_0x311f9e(0x1af), function () {
    const _0x1fef31 = _0x311f9e;
    it(_0x1fef31(0x1b0), function () {
        const _0x574325 = _0x1fef31;
        let _0x2a51d7 = ![];
        class _0x3f92f7 {
            constructor() {
                const _0x332d7e = _0x31a9;
                return _0x2a51d7 = !![], { 'foo': _0x332d7e(0x1b1) };
            }
        }
        class _0x2b895d extends _0x3f92f7 {
            constructor() {
                super();
            }
        }
        expect(new _0x2b895d()[_0x574325(0x1b2)])[_0x574325(0x1b3)](_0x574325(0x1b1)), expect(_0x2a51d7)['toBe'](!![]);
    });
}), describe(_0x311f9e(0x1b4), function () {
    const _0x4e1338 = _0x311f9e;
    it(_0x4e1338(0x1b5), function () {
        const _0x58bc11 = _0x4e1338, _0x15fedd = new Blob([], { 'type': _0x58bc11(0x1b6) });
        expect(_0x15fedd)['toBeInstanceOf'](Blob);
    });
}), describe(_0x311f9e(0x1b7), function () {
    const _0x1141f = _0x311f9e;
    it(_0x1141f(0x1b8), () => {
        const _0x21855f = _0x1141f, _0x2fc769 = new File([], 'test.jpg');
        expect(_0x2fc769)[_0x21855f(0x1b9)](File), expect(_0x2fc769[_0x21855f(0x1ba)][_0x21855f(0x1bb)])[_0x21855f(0x1b3)](0x0), expect(_0x2fc769[_0x21855f(0x1ba)][_0x21855f(0x1bc)])[_0x21855f(0x1b3)](0x0), expect(_0x2fc769[_0x21855f(0x1bc)])[_0x21855f(0x1b3)](0x0), expect(_0x2fc769[_0x21855f(0x1bd)])[_0x21855f(0x1b3)](''), expect(_0x2fc769['name'])[_0x21855f(0x1b3)]('test.jpg'), expect(_0x2fc769[_0x21855f(0x1be)])[_0x21855f(0x1bf)](expect[_0x21855f(0x1c0)](Number));
    }), it('should\x20create\x20empty\x20file\x20with\x20type', () => {
        const _0x26c6ca = _0x1141f, _0x144fdf = new File([], 'test.jpg', { 'type': _0x26c6ca(0x1b6) });
        expect(_0x144fdf[_0x26c6ca(0x1bd)])['toBe'](_0x26c6ca(0x1b6));
    }), it('should\x20create\x20empty\x20file\x20with\x20lastModified', () => {
        const _0x4aab0b = _0x1141f, _0x226db3 = new File([], _0x4aab0b(0x1c1), { 'lastModified': 0x539 });
        expect(_0x226db3[_0x4aab0b(0x1be)])[_0x4aab0b(0x1b3)](0x539);
    }), it('should\x20throw\x20on\x20invalid\x20arguments', () => {
        const _0x1d08fc = _0x1141f;
        expect(() => new File())[_0x1d08fc(0x1c2)](), expect(() => new File([]))[_0x1d08fc(0x1c2)]();
    });
});
