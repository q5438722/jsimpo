const _0x27d0 = [
    'elementById',
    'static',
    'getAttribute',
    'src',
    'toMatch',
    'toBe',
    'internal',
    '/_next/image?url=%2F%C3%A4%C3%B6%C3%BC.png',
    'status',
    'external',
    'should\x20load\x20internal\x20image\x20with\x20space',
    'should\x20load\x20external\x20image\x20with\x20space',
    'external-space',
    '/_next/image?url=https%3A%2F%2Fimage-optimization-test.vercel.app%2Fhello%2520world.jpg',
    'Image\x20Component\x20Unicode\x20Image\x20URL',
    'close',
    '34731TwAaaC',
    '897931Rgszrt',
    '1wKchLm',
    '8vvSvJJ',
    '33355GyJlle',
    '50877meYYMV',
    '2yVRFbq',
    '690961AvAepz',
    '987519HjEnwq',
    '6TsPEUO',
    '18417qZlTNJ',
    'setTimeout',
    '../',
    'should\x20load\x20static\x20unicode\x20image'
];
function _0x5b47(_0x57aa5f, _0x5b721c) {
    return _0x5b47 = function (_0x27d04f, _0x5b47d4) {
        _0x27d04f = _0x27d04f - 0x1f0;
        let _0x810f25 = _0x27d0[_0x27d04f];
        return _0x810f25;
    }, _0x5b47(_0x57aa5f, _0x5b721c);
}
const _0x7698e9 = _0x5b47;
(function (_0x5a6a15, _0x4d0eaf) {
    const _0x3ad92d = _0x5b47;
    while (!![]) {
        try {
            const _0x5bdec6 = parseInt(_0x3ad92d(0x1f0)) + parseInt(_0x3ad92d(0x1f1)) * -parseInt(_0x3ad92d(0x1f2)) + -parseInt(_0x3ad92d(0x1f3)) * parseInt(_0x3ad92d(0x1f4)) + parseInt(_0x3ad92d(0x1f5)) * parseInt(_0x3ad92d(0x1f6)) + parseInt(_0x3ad92d(0x1f7)) + parseInt(_0x3ad92d(0x1f8)) + parseInt(_0x3ad92d(0x1f9)) * -parseInt(_0x3ad92d(0x1fa));
            if (_0x5bdec6 === _0x4d0eaf)
                break;
            else
                _0x5a6a15['push'](_0x5a6a15['shift']());
        } catch (_0x580f44) {
            _0x5a6a15['push'](_0x5a6a15['shift']());
        }
    }
}(_0x27d0, 0x83c2c));
import {
    findPort,
    killApp,
    launchApp,
    nextBuild,
    nextStart
} from 'next-test-utils';
import _0x3ff4be from 'next-webdriver';
import { join } from 'path';
jest[_0x7698e9(0x1fb)](0x3e8 * 0x3c);
const appDir = join(__dirname, _0x7698e9(0x1fc));
let appPort, app, browser;
function runTests() {
    const _0x58b465 = _0x7698e9;
    it(_0x58b465(0x1fd), async () => {
        const _0x2c2431 = _0x58b465, _0x2be758 = await browser[_0x2c2431(0x1fe)](_0x2c2431(0x1ff))[_0x2c2431(0x200)](_0x2c2431(0x201));
        expect(_0x2be758)[_0x2c2431(0x202)](/_next%2Fstatic%2Fimage%2Fpublic%2F%C3%A4%C3%B6%C3%BC(.+)png/);
        const _0x27038a = await fetch(_0x2be758);
        expect(_0x27038a['status'])[_0x2c2431(0x203)](0xc8);
    }), it('should\x20load\x20internal\x20unicode\x20image', async () => {
        const _0x5bc2d4 = _0x58b465, _0x23a52d = await browser[_0x5bc2d4(0x1fe)](_0x5bc2d4(0x204))[_0x5bc2d4(0x200)]('src');
        expect(_0x23a52d)['toMatch'](_0x5bc2d4(0x205));
        const _0x34d79b = await fetch(_0x23a52d);
        expect(_0x34d79b[_0x5bc2d4(0x206)])[_0x5bc2d4(0x203)](0xc8);
    }), it('should\x20load\x20external\x20unicode\x20image', async () => {
        const _0xdb4066 = _0x58b465, _0x48160d = await browser[_0xdb4066(0x1fe)](_0xdb4066(0x207))[_0xdb4066(0x200)](_0xdb4066(0x201));
        expect(_0x48160d)['toMatch']('/_next/image?url=https%3A%2F%2Fimage-optimization-test.vercel.app%2F%C3%A4%C3%B6%C3%BC.png');
        const _0x5499f4 = await fetch(_0x48160d);
        expect(_0x5499f4['status'])[_0xdb4066(0x203)](0xc8);
    }), it(_0x58b465(0x208), async () => {
        const _0x11812c = _0x58b465, _0x5c7521 = await browser[_0x11812c(0x1fe)]('internal-space')[_0x11812c(0x200)](_0x11812c(0x201));
        expect(_0x5c7521)[_0x11812c(0x202)]('/_next/image?url=%2Fhello%2520world.jpg');
        const _0x13af9b = await fetch(_0x5c7521);
        expect(_0x13af9b[_0x11812c(0x206)])[_0x11812c(0x203)](0xc8);
    }), it(_0x58b465(0x209), async () => {
        const _0x11c099 = _0x58b465, _0x289201 = await browser['elementById'](_0x11c099(0x20a))[_0x11c099(0x200)](_0x11c099(0x201));
        expect(_0x289201)[_0x11c099(0x202)](_0x11c099(0x20b));
        const _0x4683dc = await fetch(_0x289201);
        expect(_0x4683dc[_0x11c099(0x206)])[_0x11c099(0x203)](0xc8);
    });
}
describe(_0x7698e9(0x20c), () => {
    describe('dev\x20mode', () => {
        beforeAll(async () => {
            appPort = await findPort(), app = await launchApp(appDir, appPort), browser = await _0x3ff4be(appPort, '/');
        }), afterAll(() => {
            const _0x52c7bd = _0x5b47;
            killApp(app), browser && browser[_0x52c7bd(0x20d)]();
        }), runTests();
    }), describe('server\x20mode', () => {
        beforeAll(async () => {
            await nextBuild(appDir), appPort = await findPort(), app = await nextStart(appDir, appPort), browser = await _0x3ff4be(appPort, '/');
        }), afterAll(() => {
            const _0x3cf9cc = _0x5b47;
            killApp(app), browser && browser[_0x3cf9cc(0x20d)]();
        }), runTests();
    });
});
