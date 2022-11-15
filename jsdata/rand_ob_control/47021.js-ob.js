import { join } from 'path';
import _0x3d98eb from 'cheerio';
import _0x58d9c7 from 'next-webdriver';
import {
    nextBuild,
    nextExport,
    startCleanStaticServer,
    stopApp,
    renderViaHTTP
} from 'next-test-utils';
jest['setTimeout'](0x3e8 * 0x3c);
const appDir = join(__dirname, '../'), outdir = join(appDir, 'out');
describe('Export\x20Dyanmic\x20Pages', () => {
    const _0x2ddb1c = {
        'BPeON': function (_0x351aad, _0x53f0e0) {
            return _0x351aad(_0x53f0e0);
        },
        'IURKK': function (_0x5d23eb, _0xbd3437, _0xd53cad) {
            return _0x5d23eb(_0xbd3437, _0xd53cad);
        },
        'eKlvb': function (_0x543e15, _0x4aa0b6) {
            return _0x543e15(_0x4aa0b6);
        },
        'xiUgE': function (_0x42c1e8, _0x2c126d) {
            return _0x42c1e8(_0x2c126d);
        },
        'zbGHe': function (_0x4917b6, _0x5f5bdd, _0xc488c3) {
            return _0x4917b6(_0x5f5bdd, _0xc488c3);
        },
        'GzfSJ': '/regression/jeff-is-cool',
        'MXrbK': function (_0x56e37d, _0x427b35) {
            return _0x56e37d(_0x427b35);
        },
        'VqLsk': '#asPath',
        'ncTkp': 'should\x20of\x20exported\x20with\x20correct\x20asPath',
        'NknrN': function (_0x527029, _0x13398e, _0x56f0e0) {
            return _0x527029(_0x13398e, _0x56f0e0);
        },
        'veTou': 'should\x20hydrate\x20with\x20correct\x20asPath'
    };
    let _0x4c0c5f, _0x5d7b04;
    _0x2ddb1c['MXrbK'](beforeAll, async () => {
        await _0x2ddb1c['BPeON'](nextBuild, appDir), await _0x2ddb1c['IURKK'](nextExport, appDir, { 'outdir': outdir }), _0x4c0c5f = await _0x2ddb1c['eKlvb'](startCleanStaticServer, outdir), _0x5d7b04 = _0x4c0c5f['address']()['port'];
    }), _0x2ddb1c['MXrbK'](afterAll, async () => {
        await _0x2ddb1c['xiUgE'](stopApp, _0x4c0c5f);
    }), _0x2ddb1c['zbGHe'](it, _0x2ddb1c['ncTkp'], async () => {
        const _0x50964e = await _0x2ddb1c['zbGHe'](renderViaHTTP, _0x5d7b04, _0x2ddb1c['GzfSJ']), _0x3d71e1 = _0x3d98eb['load'](_0x50964e);
        _0x2ddb1c['xiUgE'](expect, _0x2ddb1c['MXrbK'](_0x3d71e1, _0x2ddb1c['VqLsk'])['text']())['toBe'](_0x2ddb1c['GzfSJ']);
    }), _0x2ddb1c['NknrN'](it, _0x2ddb1c['veTou'], async () => {
        expect['assertions'](0x1);
        const _0x44954c = await _0x2ddb1c['zbGHe'](_0x58d9c7, _0x5d7b04, _0x2ddb1c['GzfSJ']);
        try {
            _0x2ddb1c['MXrbK'](expect, await _0x44954c['eval']('window.__AS_PATHS'))['toEqual']([_0x2ddb1c['GzfSJ']]);
        } finally {
            await _0x44954c['close']();
        }
    });
});
