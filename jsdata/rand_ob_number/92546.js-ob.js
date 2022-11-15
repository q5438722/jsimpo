'use strict';
jest['setMock']('../../BatchedBridge/NativeModules', { 'BlobModule': require('../__mocks__/BlobModule') });
const Blob = require('../Blob'), File = require('../File');
describe('babel\x207\x20smoke\x20test', function () {
    it('should\x20be\x20able\x20to\x20extend\x20a\x20class\x20with\x20native\x20name', function () {
        let _0x12ed53 = ![];
        class _0x2f80ab {
            constructor() {
                return _0x12ed53 = !![], { 'foo': 'PASS' };
            }
        }
        class _0x189145 extends _0x2f80ab {
            constructor() {
                super();
            }
        }
        expect(new _0x189145()['foo'])['toBe']('PASS'), expect(_0x12ed53)['toBe'](!![]);
    });
}), describe('Blob', function () {
    it('regression\x20caused\x20by\x20circular\x20dep\x20&&\x20babel\x207', function () {
        const _0x17b2c9 = new Blob([], { 'type': 'image/jpeg' });
        expect(_0x17b2c9)['toBeInstanceOf'](Blob);
    });
}), describe('File', function () {
    it('should\x20create\x20empty\x20file', () => {
        const _0xee5adf = new File([], 'test.jpg');
        expect(_0xee5adf)['toBeInstanceOf'](File), expect(_0xee5adf['data']['offset'])['toBe'](-0x1 * 0x1240 + 0x43 * 0x1f + 0xa23), expect(_0xee5adf['data']['size'])['toBe'](-0x1b74 + 0x637 * -0x1 + 0x21ab), expect(_0xee5adf['size'])['toBe'](-0x3 * 0x295 + -0x45d + 0xc1c), expect(_0xee5adf['type'])['toBe'](''), expect(_0xee5adf['name'])['toBe']('test.jpg'), expect(_0xee5adf['lastModified'])['toEqual'](expect['any'](Number));
    }), it('should\x20create\x20empty\x20file\x20with\x20type', () => {
        const _0x772ed0 = new File([], 'test.jpg', { 'type': 'image/jpeg' });
        expect(_0x772ed0['type'])['toBe']('image/jpeg');
    }), it('should\x20create\x20empty\x20file\x20with\x20lastModified', () => {
        const _0xeea755 = new File([], 'test.jpg', { 'lastModified': 0x539 });
        expect(_0xeea755['lastModified'])['toBe'](-0xebf + 0x4 * 0x5f8 + -0x1f4 * 0x2);
    }), it('should\x20throw\x20on\x20invalid\x20arguments', () => {
        expect(() => new File())['toThrow'](), expect(() => new File([]))['toThrow']();
    });
});
