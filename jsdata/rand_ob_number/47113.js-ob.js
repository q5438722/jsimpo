import { join } from 'path';
import _0x24bd0d from 'cheerio';
import {
    renderViaHTTP,
    findPort,
    launchApp,
    killApp
} from 'next-test-utils';
jest['setTimeout']((-0x1d41 + -0x73 * -0x43 + 0x310) * (-0x1 * 0xad1 + 0x2a9 * -0x4 + 0x15b1) * (0x3 * -0x455 + -0x10d * 0x5 + 0x1242));
const appDir = join(__dirname, '..');
let appPort, app;
async function get$(_0x14552e, _0x3deffa) {
    const _0x5e9ac1 = await renderViaHTTP(appPort, _0x14552e, _0x3deffa);
    return _0x24bd0d['load'](_0x5e9ac1);
}
describe('TypeScript\x20Features', () => {
    describe('default\x20behavior', () => {
        beforeAll(async () => {
            appPort = await findPort(), app = await launchApp(appDir, appPort, {});
        }), afterAll(() => killApp(app)), it('should\x20alias\x20components', async () => {
            const _0x5511e3 = await get$('/basic-alias');
            expect(_0x5511e3('body')['text']())['toMatch'](/World/);
        }), it('should\x20resolve\x20the\x20first\x20item\x20in\x20the\x20array\x20first', async () => {
            const _0x5dd30d = await get$('/resolve-order');
            expect(_0x5dd30d('body')['text']())['toMatch'](/Hello from a/);
        }), it('should\x20resolve\x20the\x20second\x20item\x20in\x20as\x20a\x20fallback', async () => {
            const _0x14e063 = await get$('/resolve-fallback');
            expect(_0x14e063('body')['text']())['toMatch'](/Hello from only b/);
        }), it('should\x20resolve\x20a\x20single\x20matching\x20alias', async () => {
            const _0x5a5a54 = await get$('/single-alias');
            expect(_0x5a5a54('body')['text']())['toMatch'](/Hello/);
        }), it('should\x20not\x20resolve\x20to\x20.d.ts\x20files', async () => {
            const _0x17d8c1 = await get$('/alias-to-d-ts');
            expect(_0x17d8c1('body')['text']())['toMatch'](/Not aliased to d\.ts file/);
        });
    });
});
