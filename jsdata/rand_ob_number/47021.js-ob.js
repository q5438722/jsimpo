import { join } from 'path';
import _0x4a5764 from 'cheerio';
import _0xf34349 from 'next-webdriver';
import {
    nextBuild,
    nextExport,
    startCleanStaticServer,
    stopApp,
    renderViaHTTP
} from 'next-test-utils';
jest['setTimeout']((-0x2225 + -0xbe3 * 0x3 + 0x33 * 0x172) * (-0x426 * -0x3 + -0x1 * -0x11f4 + 0x36 * -0x8f));
const appDir = join(__dirname, '../'), outdir = join(appDir, 'out');
describe('Export\x20Dyanmic\x20Pages', () => {
    let _0x21a88d, _0x19a46f;
    beforeAll(async () => {
        await nextBuild(appDir), await nextExport(appDir, { 'outdir': outdir }), _0x21a88d = await startCleanStaticServer(outdir), _0x19a46f = _0x21a88d['address']()['port'];
    }), afterAll(async () => {
        await stopApp(_0x21a88d);
    }), it('should\x20of\x20exported\x20with\x20correct\x20asPath', async () => {
        const _0x1edd35 = await renderViaHTTP(_0x19a46f, '/regression/jeff-is-cool'), _0x168666 = _0x4a5764['load'](_0x1edd35);
        expect(_0x168666('#asPath')['text']())['toBe']('/regression/jeff-is-cool');
    }), it('should\x20hydrate\x20with\x20correct\x20asPath', async () => {
        expect['assertions'](0xd * 0x135 + 0x10c7 * -0x1 + -0x1 * -0x117);
        const _0x129cad = await _0xf34349(_0x19a46f, '/regression/jeff-is-cool');
        try {
            expect(await _0x129cad['eval']('window.__AS_PATHS'))['toEqual'](['/regression/jeff-is-cool']);
        } finally {
            await _0x129cad['close']();
        }
    });
});
