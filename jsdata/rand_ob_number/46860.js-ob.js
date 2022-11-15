import {
    findPort,
    killApp,
    launchApp,
    nextBuild,
    nextStart
} from 'next-test-utils';
import _0x1b78be from 'next-webdriver';
import { join } from 'path';
jest['setTimeout']((0x1436 + 0x2 * 0x4b7 + 0x7a * -0x36) * (0xae7 * 0x2 + 0x869 + -0x1dfb));
const appDir = join(__dirname, '../');
let appPort, app, browser;
function runTests() {
    it('should\x20load\x20static\x20unicode\x20image', async () => {
        const _0xd5c94f = await browser['elementById']('static')['getAttribute']('src');
        expect(_0xd5c94f)['toMatch'](/_next%2Fstatic%2Fimage%2Fpublic%2F%C3%A4%C3%B6%C3%BC(.+)png/);
        const _0x24e4f4 = await fetch(_0xd5c94f);
        expect(_0x24e4f4['status'])['toBe'](0x1 * 0x25b5 + -0xa71 + -0x1a7c);
    }), it('should\x20load\x20internal\x20unicode\x20image', async () => {
        const _0x58e5bd = await browser['elementById']('internal')['getAttribute']('src');
        expect(_0x58e5bd)['toMatch']('/_next/image?url=%2F%C3%A4%C3%B6%C3%BC.png');
        const _0xac8c0f = await fetch(_0x58e5bd);
        expect(_0xac8c0f['status'])['toBe'](0xe * 0x8 + -0x1 * 0xf75 + 0xfcd);
    }), it('should\x20load\x20external\x20unicode\x20image', async () => {
        const _0x5e0c99 = await browser['elementById']('external')['getAttribute']('src');
        expect(_0x5e0c99)['toMatch']('/_next/image?url=https%3A%2F%2Fimage-optimization-test.vercel.app%2F%C3%A4%C3%B6%C3%BC.png');
        const _0xa44221 = await fetch(_0x5e0c99);
        expect(_0xa44221['status'])['toBe'](-0x1805 + 0x167e + 0xc5 * 0x3);
    }), it('should\x20load\x20internal\x20image\x20with\x20space', async () => {
        const _0x285843 = await browser['elementById']('internal-space')['getAttribute']('src');
        expect(_0x285843)['toMatch']('/_next/image?url=%2Fhello%2520world.jpg');
        const _0xba65ac = await fetch(_0x285843);
        expect(_0xba65ac['status'])['toBe'](-0x1ebe + -0x17db + 0x3761);
    }), it('should\x20load\x20external\x20image\x20with\x20space', async () => {
        const _0x571a62 = await browser['elementById']('external-space')['getAttribute']('src');
        expect(_0x571a62)['toMatch']('/_next/image?url=https%3A%2F%2Fimage-optimization-test.vercel.app%2Fhello%2520world.jpg');
        const _0x55c13a = await fetch(_0x571a62);
        expect(_0x55c13a['status'])['toBe'](0x2200 + -0x11fc * -0x1 + -0x3334);
    });
}
describe('Image\x20Component\x20Unicode\x20Image\x20URL', () => {
    describe('dev\x20mode', () => {
        beforeAll(async () => {
            appPort = await findPort(), app = await launchApp(appDir, appPort), browser = await _0x1b78be(appPort, '/');
        }), afterAll(() => {
            killApp(app), browser && browser['close']();
        }), runTests();
    }), describe('server\x20mode', () => {
        beforeAll(async () => {
            await nextBuild(appDir), appPort = await findPort(), app = await nextStart(appDir, appPort), browser = await _0x1b78be(appPort, '/');
        }), afterAll(() => {
            killApp(app), browser && browser['close']();
        }), runTests();
    });
});
