'use strict';
const _0x1f22 = [
    '../Blob',
    '../File',
    'babel\x207\x20smoke\x20test',
    'should\x20be\x20able\x20to\x20extend\x20a\x20class\x20with\x20native\x20name',
    'PASS',
    'toBe',
    'regression\x20caused\x20by\x20circular\x20dep\x20&&\x20babel\x207',
    'image/jpeg',
    'File',
    'should\x20create\x20empty\x20file',
    'test.jpg',
    'toBeInstanceOf',
    'offset',
    'data',
    'size',
    'type',
    'name',
    'should\x20create\x20empty\x20file\x20with\x20type',
    'should\x20create\x20empty\x20file\x20with\x20lastModified',
    'should\x20throw\x20on\x20invalid\x20arguments',
    'toThrow',
    '181303fSGmyU',
    '941uIHiph',
    '259WCuoAb',
    '197868EGeSmG',
    '1YYdDQL',
    '470172vaITYL',
    '6597olfnAt',
    '48LonzwL',
    '1ZRxuAr',
    '69868HOwDVx',
    '37zPHKkf',
    '6406rvheRC',
    '../../BatchedBridge/NativeModules',
    '../__mocks__/BlobModule'
];
const _0x389c6 = _0x1e06;
function _0x1e06(_0xf463e0, _0x846ee5) {
    return _0x1e06 = function (_0x1f22bf, _0x1e06a6) {
        _0x1f22bf = _0x1f22bf - 0x19b;
        let _0x18eb2c = _0x1f22[_0x1f22bf];
        return _0x18eb2c;
    }, _0x1e06(_0xf463e0, _0x846ee5);
}
(function (_0x1d02b9, _0x25794c) {
    const _0x293a65 = _0x1e06;
    while (!![]) {
        try {
            const _0x1d1d4e = parseInt(_0x293a65(0x19b)) + parseInt(_0x293a65(0x19c)) * parseInt(_0x293a65(0x19d)) + -parseInt(_0x293a65(0x19e)) * parseInt(_0x293a65(0x19f)) + -parseInt(_0x293a65(0x1a0)) + -parseInt(_0x293a65(0x1a1)) * -parseInt(_0x293a65(0x1a2)) + parseInt(_0x293a65(0x1a3)) * -parseInt(_0x293a65(0x1a4)) + parseInt(_0x293a65(0x1a5)) * parseInt(_0x293a65(0x1a6));
            if (_0x1d1d4e === _0x25794c)
                break;
            else
                _0x1d02b9['push'](_0x1d02b9['shift']());
        } catch (_0x41d52a) {
            _0x1d02b9['push'](_0x1d02b9['shift']());
        }
    }
}(_0x1f22, 0x3ac98));
jest['setMock'](_0x389c6(0x1a7), { 'BlobModule': require(_0x389c6(0x1a8)) });
const Blob = require(_0x389c6(0x1a9)), File = require(_0x389c6(0x1aa));
describe(_0x389c6(0x1ab), function () {
    const _0x5d0f47 = _0x389c6;
    it(_0x5d0f47(0x1ac), function () {
        const _0x1ef5c9 = _0x5d0f47;
        let _0x586d96 = ![];
        class _0x6e5f47 {
            constructor() {
                const _0x286e2c = _0x1e06;
                return _0x586d96 = !![], { 'foo': _0x286e2c(0x1ad) };
            }
        }
        class _0xf1978a extends _0x6e5f47 {
            constructor() {
                super();
            }
        }
        expect(new _0xf1978a()['foo'])[_0x1ef5c9(0x1ae)](_0x1ef5c9(0x1ad)), expect(_0x586d96)[_0x1ef5c9(0x1ae)](!![]);
    });
}), describe('Blob', function () {
    const _0x24b480 = _0x389c6;
    it(_0x24b480(0x1af), function () {
        const _0xd26982 = _0x24b480, _0x2e3a2e = new Blob([], { 'type': _0xd26982(0x1b0) });
        expect(_0x2e3a2e)['toBeInstanceOf'](Blob);
    });
}), describe(_0x389c6(0x1b1), function () {
    const _0x51fbb0 = _0x389c6;
    it(_0x51fbb0(0x1b2), () => {
        const _0x1f9467 = _0x51fbb0, _0x5e48c1 = new File([], _0x1f9467(0x1b3));
        expect(_0x5e48c1)[_0x1f9467(0x1b4)](File), expect(_0x5e48c1['data'][_0x1f9467(0x1b5)])[_0x1f9467(0x1ae)](0x0), expect(_0x5e48c1[_0x1f9467(0x1b6)]['size'])[_0x1f9467(0x1ae)](0x0), expect(_0x5e48c1[_0x1f9467(0x1b7)])['toBe'](0x0), expect(_0x5e48c1[_0x1f9467(0x1b8)])[_0x1f9467(0x1ae)](''), expect(_0x5e48c1[_0x1f9467(0x1b9)])['toBe'](_0x1f9467(0x1b3)), expect(_0x5e48c1['lastModified'])['toEqual'](expect['any'](Number));
    }), it(_0x51fbb0(0x1ba), () => {
        const _0x465318 = _0x51fbb0, _0xa3a811 = new File([], 'test.jpg', { 'type': _0x465318(0x1b0) });
        expect(_0xa3a811[_0x465318(0x1b8)])[_0x465318(0x1ae)]('image/jpeg');
    }), it(_0x51fbb0(0x1bb), () => {
        const _0x5670d8 = _0x51fbb0, _0x53f7a4 = new File([], _0x5670d8(0x1b3), { 'lastModified': 0x539 });
        expect(_0x53f7a4['lastModified'])['toBe'](0x539);
    }), it(_0x51fbb0(0x1bc), () => {
        const _0x568310 = _0x51fbb0;
        expect(() => new File())[_0x568310(0x1bd)](), expect(() => new File([]))[_0x568310(0x1bd)]();
    });
});
