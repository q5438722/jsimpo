const _0x49e0 = [
    '829002UVzliU',
    '128179SqrbVc',
    '2GsOPej',
    '2170882mTkFqc',
    'setTimeout',
    '../',
    'Export\x20Dyanmic\x20Pages',
    'address',
    'port',
    'should\x20of\x20exported\x20with\x20correct\x20asPath',
    '/regression/jeff-is-cool',
    'load',
    '#asPath',
    'text',
    'should\x20hydrate\x20with\x20correct\x20asPath',
    'eval',
    'toEqual',
    'close',
    '139241eoeGtF',
    '2rAMIWP',
    '586623bkIHjZ',
    '30131XTsdTp',
    '15bExpAQ',
    '28pylZXz',
    '7517ErUGpg'
];
const _0x310e7a = _0x27e0;
(function (_0x43bfb0, _0x312121) {
    const _0x257eb0 = _0x27e0;
    while (!![]) {
        try {
            const _0x1c5cba = parseInt(_0x257eb0(0x7b)) * parseInt(_0x257eb0(0x7c)) + -parseInt(_0x257eb0(0x7d)) + -parseInt(_0x257eb0(0x7e)) * parseInt(_0x257eb0(0x7f)) + -parseInt(_0x257eb0(0x80)) * parseInt(_0x257eb0(0x81)) + -parseInt(_0x257eb0(0x82)) + -parseInt(_0x257eb0(0x83)) * -parseInt(_0x257eb0(0x84)) + parseInt(_0x257eb0(0x85));
            if (_0x1c5cba === _0x312121)
                break;
            else
                _0x43bfb0['push'](_0x43bfb0['shift']());
        } catch (_0x5d02bf) {
            _0x43bfb0['push'](_0x43bfb0['shift']());
        }
    }
}(_0x49e0, 0x993c8));
import { join } from 'path';
import _0xec97f9 from 'cheerio';
import _0x534411 from 'next-webdriver';
import {
    nextBuild,
    nextExport,
    startCleanStaticServer,
    stopApp,
    renderViaHTTP
} from 'next-test-utils';
function _0x27e0(_0x7f0e86, _0x1ba93f) {
    return _0x27e0 = function (_0x49e05b, _0x27e034) {
        _0x49e05b = _0x49e05b - 0x7b;
        let _0x4f0894 = _0x49e0[_0x49e05b];
        return _0x4f0894;
    }, _0x27e0(_0x7f0e86, _0x1ba93f);
}
jest[_0x310e7a(0x86)](0x3e8 * 0x3c);
const appDir = join(__dirname, _0x310e7a(0x87)), outdir = join(appDir, 'out');
describe(_0x310e7a(0x88), () => {
    const _0x1188eb = _0x310e7a;
    let _0x2e2bed, _0x1b0472;
    beforeAll(async () => {
        const _0x279c84 = _0x27e0;
        await nextBuild(appDir), await nextExport(appDir, { 'outdir': outdir }), _0x2e2bed = await startCleanStaticServer(outdir), _0x1b0472 = _0x2e2bed[_0x279c84(0x89)]()[_0x279c84(0x8a)];
    }), afterAll(async () => {
        await stopApp(_0x2e2bed);
    }), it(_0x1188eb(0x8b), async () => {
        const _0x145cba = _0x1188eb, _0x587da5 = await renderViaHTTP(_0x1b0472, _0x145cba(0x8c)), _0x5b181d = _0xec97f9[_0x145cba(0x8d)](_0x587da5);
        expect(_0x5b181d(_0x145cba(0x8e))[_0x145cba(0x8f)]())['toBe'](_0x145cba(0x8c));
    }), it(_0x1188eb(0x90), async () => {
        const _0x16d22e = _0x1188eb;
        expect['assertions'](0x1);
        const _0x2cb6b8 = await _0x534411(_0x1b0472, _0x16d22e(0x8c));
        try {
            expect(await _0x2cb6b8[_0x16d22e(0x91)]('window.__AS_PATHS'))[_0x16d22e(0x92)](['/regression/jeff-is-cool']);
        } finally {
            await _0x2cb6b8[_0x16d22e(0x93)]();
        }
    });
});
