const _0x3519 = [
    'src',
    'toMatch',
    'status',
    'toBe',
    'internal',
    '/_next/image?url=%2F%C3%A4%C3%B6%C3%BC.png',
    'should\x20load\x20external\x20unicode\x20image',
    '/_next/image?url=https%3A%2F%2Fimage-optimization-test.vercel.app%2F%C3%A4%C3%B6%C3%BC.png',
    '/_next/image?url=%2Fhello%2520world.jpg',
    'should\x20load\x20external\x20image\x20with\x20space',
    '/_next/image?url=https%3A%2F%2Fimage-optimization-test.vercel.app%2Fhello%2520world.jpg',
    'Image\x20Component\x20Unicode\x20Image\x20URL',
    'close',
    'server\x20mode',
    '363013QjDPco',
    '1BIpYWE',
    '1069409xkrnyX',
    '48QlJtfJ',
    '15144xkbsSM',
    '761cFHaSF',
    '926UyxzwJ',
    '1550521pdPefP',
    '9910PqEnDh',
    '474149IoetSU',
    '../',
    'should\x20load\x20static\x20unicode\x20image',
    'elementById',
    'static',
    'getAttribute'
];
function _0x4777(_0x40107d, _0x4bdc02) {
    return _0x4777 = function (_0x3519d0, _0x4777f2) {
        _0x3519d0 = _0x3519d0 - 0x8c;
        let _0x1f1651 = _0x3519[_0x3519d0];
        return _0x1f1651;
    }, _0x4777(_0x40107d, _0x4bdc02);
}
const _0x46ac8e = _0x4777;
(function (_0x27c1a6, _0x9b8399) {
    const _0x468f17 = _0x4777;
    while (!![]) {
        try {
            const _0x4ce523 = parseInt(_0x468f17(0x8c)) + -parseInt(_0x468f17(0x8d)) * -parseInt(_0x468f17(0x8e)) + -parseInt(_0x468f17(0x8f)) * -parseInt(_0x468f17(0x90)) + parseInt(_0x468f17(0x91)) * parseInt(_0x468f17(0x92)) + -parseInt(_0x468f17(0x93)) + parseInt(_0x468f17(0x94)) + -parseInt(_0x468f17(0x95));
            if (_0x4ce523 === _0x9b8399)
                break;
            else
                _0x27c1a6['push'](_0x27c1a6['shift']());
        } catch (_0x2fe831) {
            _0x27c1a6['push'](_0x27c1a6['shift']());
        }
    }
}(_0x3519, 0xcf56c));
import {
    findPort,
    killApp,
    launchApp,
    nextBuild,
    nextStart
} from 'next-test-utils';
import _0x4ac584 from 'next-webdriver';
import { join } from 'path';
jest['setTimeout'](0x3e8 * 0x3c);
const appDir = join(__dirname, _0x46ac8e(0x96));
let appPort, app, browser;
function runTests() {
    const _0x4c7afa = _0x46ac8e;
    it(_0x4c7afa(0x97), async () => {
        const _0x29bc76 = _0x4c7afa, _0x2c8b2a = await browser[_0x29bc76(0x98)](_0x29bc76(0x99))[_0x29bc76(0x9a)](_0x29bc76(0x9b));
        expect(_0x2c8b2a)[_0x29bc76(0x9c)](/_next%2Fstatic%2Fimage%2Fpublic%2F%C3%A4%C3%B6%C3%BC(.+)png/);
        const _0x40fff7 = await fetch(_0x2c8b2a);
        expect(_0x40fff7[_0x29bc76(0x9d)])[_0x29bc76(0x9e)](0xc8);
    }), it('should\x20load\x20internal\x20unicode\x20image', async () => {
        const _0x4cd914 = _0x4c7afa, _0x522dc5 = await browser[_0x4cd914(0x98)](_0x4cd914(0x9f))['getAttribute'](_0x4cd914(0x9b));
        expect(_0x522dc5)['toMatch'](_0x4cd914(0xa0));
        const _0x2098df = await fetch(_0x522dc5);
        expect(_0x2098df['status'])[_0x4cd914(0x9e)](0xc8);
    }), it(_0x4c7afa(0xa1), async () => {
        const _0x35b8d5 = _0x4c7afa, _0x241e73 = await browser[_0x35b8d5(0x98)]('external')[_0x35b8d5(0x9a)]('src');
        expect(_0x241e73)[_0x35b8d5(0x9c)](_0x35b8d5(0xa2));
        const _0x34b4e5 = await fetch(_0x241e73);
        expect(_0x34b4e5['status'])[_0x35b8d5(0x9e)](0xc8);
    }), it('should\x20load\x20internal\x20image\x20with\x20space', async () => {
        const _0x234853 = _0x4c7afa, _0x5046ba = await browser[_0x234853(0x98)]('internal-space')[_0x234853(0x9a)](_0x234853(0x9b));
        expect(_0x5046ba)['toMatch'](_0x234853(0xa3));
        const _0x46d094 = await fetch(_0x5046ba);
        expect(_0x46d094[_0x234853(0x9d)])[_0x234853(0x9e)](0xc8);
    }), it(_0x4c7afa(0xa4), async () => {
        const _0x7c0d23 = _0x4c7afa, _0x1b562f = await browser[_0x7c0d23(0x98)]('external-space')[_0x7c0d23(0x9a)](_0x7c0d23(0x9b));
        expect(_0x1b562f)[_0x7c0d23(0x9c)](_0x7c0d23(0xa5));
        const _0x17ec7c = await fetch(_0x1b562f);
        expect(_0x17ec7c['status'])[_0x7c0d23(0x9e)](0xc8);
    });
}
describe(_0x46ac8e(0xa6), () => {
    const _0x5d19aa = _0x46ac8e;
    describe('dev\x20mode', () => {
        beforeAll(async () => {
            appPort = await findPort(), app = await launchApp(appDir, appPort), browser = await _0x4ac584(appPort, '/');
        }), afterAll(() => {
            const _0x1e8c9f = _0x4777;
            killApp(app), browser && browser[_0x1e8c9f(0xa7)]();
        }), runTests();
    }), describe(_0x5d19aa(0xa8), () => {
        beforeAll(async () => {
            await nextBuild(appDir), appPort = await findPort(), app = await nextStart(appDir, appPort), browser = await _0x4ac584(appPort, '/');
        }), afterAll(() => {
            killApp(app), browser && browser['close']();
        }), runTests();
    });
});
