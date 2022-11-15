import _0xac315 from 'fs-extra';
import { join } from 'path';
import {
    nextBuild,
    findPort,
    killApp,
    initNextServerScript
} from 'next-test-utils';
const appDir = join(__dirname, '../');
jest['setTimeout']((-0xcee + -0x387 * 0x9 + 0x3095) * (-0x2072 + -0x705 + -0x1 * -0x27b3) * (-0x16cb + 0x2705 + 0x81c * -0x2));
let appPort, app, buildId;
const nextStart = async (_0x1fc6dc, _0x4acd25) => {
    const _0x123118 = join(_0x1fc6dc, 'server.js'), _0x386ba6 = Object['assign']({ ...process['env'] }, { 'PORT': '' + _0x4acd25 });
    return initNextServerScript(_0x123118, /ready on/i, _0x386ba6, /ReferenceError: options is not defined/);
};
describe('Serverless\x20Trace', () => {
    beforeAll(async () => {
        await nextBuild(appDir), appPort = await findPort(), app = await nextStart(appDir, appPort), buildId = await _0xac315['readFile'](join(appDir, '.next/BUILD_ID'), 'utf8');
    }), afterAll(() => killApp(app)), it('should\x20have\x20revalidate\x20page\x20in\x20prerender-manifest\x20with\x20correct\x20interval', async () => {
        const _0x48da31 = await _0xac315['readJSON'](join(appDir, '.next/prerender-manifest.json'));
        expect(_0x48da31['routes']['/revalidate'])['toEqual']({
            'initialRevalidateSeconds': 0xa,
            'dataRoute': '/_next/data/' + buildId + '/revalidate.json',
            'srcRoute': null
        });
    }), it('should\x20set\x20correct\x20Cache-Control\x20header', async () => {
        const _0x1c856d = 'http://localhost:' + appPort + '/revalidate', _0x5593f0 = await fetch(_0x1c856d);
        expect(_0x5593f0['headers']['get']('Cache-Control'))['toMatch']('s-maxage=10,\x20stale-while-revalidate');
    });
});
