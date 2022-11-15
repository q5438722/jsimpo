import { join } from 'path';
import {
    findPort,
    killApp,
    launchApp,
    nextBuild,
    nextStart
} from 'next-test-utils';
import _0xc40317 from 'next-webdriver';
jest['setTimeout']((0x1dd8 + 0x1 * -0x7a2 + 0x3 * -0x61a) * (0xd * -0x229 + 0x1ac3 + 0x18e) * (0x2 * 0xf2 + -0x46 * -0x5b + -0x1ac4));
const appDir = join(__dirname, '../');
let appPort, app;
const runTests = () => {
    it('should\x20contain\x20all\x20values\x20passed\x20in\x20param\x20as\x20array', async () => {
        const _0x54176b = await _0xc40317(appPort, '/some-page');
        expect(await _0x54176b['elementByCss']('#items')['text']())['toBe']('1,2');
    });
};
describe('rewrites\x20destination\x20query', () => {
    describe('dev\x20mode', () => {
        beforeAll(async () => {
            appPort = await findPort(), app = await launchApp(appDir, appPort);
        }), afterAll(() => killApp(app)), runTests();
    }), describe('production\x20mode', () => {
        beforeAll(async () => {
            await nextBuild(appDir), appPort = await findPort(), app = await nextStart(appDir, appPort);
        }), afterAll(() => killApp(app)), runTests();
    });
});
