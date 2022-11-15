const _0x31d5 = [
    '../',
    'out',
    'Export\x20Dyanmic\x20Pages',
    '/regression/jeff-is-cool',
    'NnBSW',
    'mxfMV',
    'DkXhc',
    'suMwK',
    'GmGXe',
    'text',
    'toBe',
    'SlZwg',
    'eval',
    'window.__AS_PATHS',
    'toEqual',
    'close',
    '650761UYESKd',
    '70847RMGlsT',
    '428297GUEwES',
    '519919LKmHEe',
    '707877KcwwOh',
    '1VmcabQ',
    '103470SKZBWH',
    '993407oLmOKZ',
    '1NqHnQV'
];
const _0x4e1f8e = _0x1b9d;
(function (_0x1a19df, _0x982950) {
    const _0x408362 = _0x1b9d;
    while (!![]) {
        try {
            const _0x151a98 = -parseInt(_0x408362(0x1b9)) + -parseInt(_0x408362(0x1ba)) + parseInt(_0x408362(0x1bb)) + parseInt(_0x408362(0x1bc)) + -parseInt(_0x408362(0x1bd)) + -parseInt(_0x408362(0x1be)) * parseInt(_0x408362(0x1bf)) + -parseInt(_0x408362(0x1c0)) * -parseInt(_0x408362(0x1c1));
            if (_0x151a98 === _0x982950)
                break;
            else
                _0x1a19df['push'](_0x1a19df['shift']());
        } catch (_0x13abae) {
            _0x1a19df['push'](_0x1a19df['shift']());
        }
    }
}(_0x31d5, -0x1cdfd + 0xf584 + 0x714d5));
function _0x1b9d(_0x301c08, _0x4376f1) {
    return _0x1b9d = function (_0x583e7c, _0x2707b5) {
        _0x583e7c = _0x583e7c - (-0x9 * -0x3d + 0x11 * -0x12f + -0x3 * -0x691);
        let _0x5ae38f = _0x31d5[_0x583e7c];
        return _0x5ae38f;
    }, _0x1b9d(_0x301c08, _0x4376f1);
}
import { join } from 'path';
import _0x48bbf1 from 'cheerio';
import _0x41a247 from 'next-webdriver';
import {
    nextBuild,
    nextExport,
    startCleanStaticServer,
    stopApp,
    renderViaHTTP
} from 'next-test-utils';
jest['setTimeout']((0x2435 + -0x5 * -0x71 + -0x2 * 0x1141) * (0x6 * 0x8 + -0x36a + 0x376));
const appDir = join(__dirname, _0x4e1f8e(0x1c2)), outdir = join(appDir, _0x4e1f8e(0x1c3));
describe(_0x4e1f8e(0x1c4), () => {
    const _0x1ab956 = _0x4e1f8e, _0x351ae7 = {
            'mxfMV': function (_0x1c4033, _0x27d7ce) {
                return _0x1c4033(_0x27d7ce);
            },
            'DkXhc': function (_0x37f7b0, _0x53591a, _0x45797f) {
                return _0x37f7b0(_0x53591a, _0x45797f);
            },
            'oacMi': function (_0x46b235, _0x15335c) {
                return _0x46b235(_0x15335c);
            },
            'suMwK': _0x1ab956(0x1c5),
            'NnBSW': function (_0x3197b2, _0x15b850) {
                return _0x3197b2(_0x15b850);
            },
            'GmGXe': '#asPath',
            'aWAWZ': function (_0x5bb88e, _0x35f4ba) {
                return _0x5bb88e(_0x35f4ba);
            },
            'iXVPX': 'should\x20of\x20exported\x20with\x20correct\x20asPath',
            'SlZwg': 'should\x20hydrate\x20with\x20correct\x20asPath'
        };
    let _0x13c17b, _0x4cb789;
    _0x351ae7[_0x1ab956(0x1c6)](beforeAll, async () => {
        const _0x170b53 = _0x1ab956;
        await _0x351ae7[_0x170b53(0x1c7)](nextBuild, appDir), await _0x351ae7[_0x170b53(0x1c8)](nextExport, appDir, { 'outdir': outdir }), _0x13c17b = await startCleanStaticServer(outdir), _0x4cb789 = _0x13c17b['address']()['port'];
    }), _0x351ae7['aWAWZ'](afterAll, async () => {
        await _0x351ae7['oacMi'](stopApp, _0x13c17b);
    }), _0x351ae7[_0x1ab956(0x1c8)](it, _0x351ae7['iXVPX'], async () => {
        const _0x11d4e6 = _0x1ab956, _0x5ae878 = await renderViaHTTP(_0x4cb789, _0x351ae7[_0x11d4e6(0x1c9)]), _0x2cda21 = _0x48bbf1['load'](_0x5ae878);
        _0x351ae7['NnBSW'](expect, _0x351ae7[_0x11d4e6(0x1c6)](_0x2cda21, _0x351ae7[_0x11d4e6(0x1ca)])[_0x11d4e6(0x1cb)]())[_0x11d4e6(0x1cc)](_0x11d4e6(0x1c5));
    }), _0x351ae7[_0x1ab956(0x1c8)](it, _0x351ae7[_0x1ab956(0x1cd)], async () => {
        const _0x1386b3 = _0x1ab956;
        expect['assertions'](-0xf99 + -0x2 * 0xb4e + 0x86 * 0x49);
        const _0x109eb2 = await _0x351ae7[_0x1386b3(0x1c8)](_0x41a247, _0x4cb789, _0x351ae7[_0x1386b3(0x1c9)]);
        try {
            expect(await _0x109eb2[_0x1386b3(0x1ce)](_0x1386b3(0x1cf)))[_0x1386b3(0x1d0)]([_0x351ae7[_0x1386b3(0x1c9)]]);
        } finally {
            await _0x109eb2[_0x1386b3(0x1d1)]();
        }
    });
});
