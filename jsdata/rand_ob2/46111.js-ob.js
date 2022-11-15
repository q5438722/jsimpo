const _0x1d28 = [
    'assign',
    'env',
    'Serverless\x20Trace',
    'readFile',
    '.next/BUILD_ID',
    'utf8',
    'readJSON',
    '.next/prerender-manifest.json',
    'routes',
    '/revalidate',
    'toEqual',
    '/_next/data/',
    '/revalidate.json',
    'should\x20set\x20correct\x20Cache-Control\x20header',
    'http://localhost:',
    'headers',
    'get',
    'Cache-Control',
    'toMatch',
    's-maxage=10,\x20stale-while-revalidate',
    '101232kFKtMC',
    '1073134VYPxVs',
    '1402156ugZvIl',
    '249879YWFlan',
    '1088760CufwAR',
    '178fVfQVl',
    '3022eWPtuD',
    '64pBXcpj',
    '1044kZPlnW',
    '../',
    'setTimeout',
    'server.js'
];
const _0x1fda49 = _0x4468;
(function (_0x2a695d, _0x39306b) {
    const _0x23632a = _0x4468;
    while (!![]) {
        try {
            const _0x4f5e4a = parseInt(_0x23632a(0x136)) + parseInt(_0x23632a(0x137)) + parseInt(_0x23632a(0x138)) + -parseInt(_0x23632a(0x139)) + -parseInt(_0x23632a(0x13a)) + -parseInt(_0x23632a(0x13b)) * parseInt(_0x23632a(0x13c)) + parseInt(_0x23632a(0x13d)) * parseInt(_0x23632a(0x13e));
            if (_0x4f5e4a === _0x39306b)
                break;
            else
                _0x2a695d['push'](_0x2a695d['shift']());
        } catch (_0x36f0a6) {
            _0x2a695d['push'](_0x2a695d['shift']());
        }
    }
}(_0x1d28, 0xbb33f));
function _0x4468(_0x579ca5, _0x5f293d) {
    return _0x4468 = function (_0x1d280f, _0x4468f7) {
        _0x1d280f = _0x1d280f - 0x136;
        let _0x339341 = _0x1d28[_0x1d280f];
        return _0x339341;
    }, _0x4468(_0x579ca5, _0x5f293d);
}
import _0x2fa3c8 from 'fs-extra';
import { join } from 'path';
import {
    nextBuild,
    findPort,
    killApp,
    initNextServerScript
} from 'next-test-utils';
const appDir = join(__dirname, _0x1fda49(0x13f));
jest[_0x1fda49(0x140)](0x3e8 * 0x3c * 0x2);
let appPort, app, buildId;
const nextStart = async (_0x44f0d, _0x27fe08) => {
    const _0x5b61ad = _0x1fda49, _0x5c8589 = join(_0x44f0d, _0x5b61ad(0x141)), _0x1f7ec0 = Object[_0x5b61ad(0x142)]({ ...process[_0x5b61ad(0x143)] }, { 'PORT': '' + _0x27fe08 });
    return initNextServerScript(_0x5c8589, /ready on/i, _0x1f7ec0, /ReferenceError: options is not defined/);
};
describe(_0x1fda49(0x144), () => {
    const _0x4f35c4 = _0x1fda49;
    beforeAll(async () => {
        const _0x5a287e = _0x4468;
        await nextBuild(appDir), appPort = await findPort(), app = await nextStart(appDir, appPort), buildId = await _0x2fa3c8[_0x5a287e(0x145)](join(appDir, _0x5a287e(0x146)), _0x5a287e(0x147));
    }), afterAll(() => killApp(app)), it('should\x20have\x20revalidate\x20page\x20in\x20prerender-manifest\x20with\x20correct\x20interval', async () => {
        const _0x48cee8 = _0x4468, _0x22e15c = await _0x2fa3c8[_0x48cee8(0x148)](join(appDir, _0x48cee8(0x149)));
        expect(_0x22e15c[_0x48cee8(0x14a)][_0x48cee8(0x14b)])[_0x48cee8(0x14c)]({
            'initialRevalidateSeconds': 0xa,
            'dataRoute': _0x48cee8(0x14d) + buildId + _0x48cee8(0x14e),
            'srcRoute': null
        });
    }), it(_0x4f35c4(0x14f), async () => {
        const _0x5b3bf3 = _0x4f35c4, _0x2c233b = _0x5b3bf3(0x150) + appPort + _0x5b3bf3(0x14b), _0x21e360 = await fetch(_0x2c233b);
        expect(_0x21e360[_0x5b3bf3(0x151)][_0x5b3bf3(0x152)](_0x5b3bf3(0x153)))[_0x5b3bf3(0x154)](_0x5b3bf3(0x155));
    });
});
