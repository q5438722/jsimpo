import { join } from 'path';
import {
    killApp,
    findPort,
    launchApp,
    fetchViaHTTP,
    initNextServerScript
} from 'next-test-utils';
import _0x109189 from 'clone';
import _0x5ea4ee from 'get-port';
jest['setTimeout']((-0x16c5 + -0x1 * 0x135d + 0x2e0a) * (0xb8c + 0x1000 + 0xb8 * -0x26) * (0xc * 0x31a + 0x445 + 0x29 * -0x103));
const appDir = join(__dirname, '../');
let appPort, app, server;
jest['setTimeout']((0x4 * 0x218 + -0x14b5 + 0x103d) * (0x3 * -0x8f + 0x1553 + -0x136a) * (-0x4a5 + -0x2 * -0x1315 + -0x2183));
const context = {};
function runTests() {
    it('should\x20parse\x20JSON\x20body', async () => {
        appPort = await findPort(), app = await launchApp(appDir, appPort, {});
        const _0x45f04d = await makeRequest();
        expect(_0x45f04d)['toEqual']([{ 'title': 'Nextjs' }]), killApp(app);
    }), it('should\x20not\x20throw\x20if\x20request\x20body\x20is\x20already\x20parsed\x20in\x20custom\x20middleware', async () => {
        await startServer();
        const _0x155f5d = await makeRequest();
        expect(_0x155f5d)['toEqual']([{ 'title': 'Nextjs' }]), killApp(server);
    }), it('should\x20not\x20throw\x20if\x20request\x27s\x20content-type\x20is\x20invalid', async () => {
        await startServer();
        const _0x506a6d = await makeRequestWithInvalidContentType();
        expect(_0x506a6d)['toBe'](0x15d7 + 0x3ac + -0x1e7 * 0xd), killApp(server);
    });
}
async function makeRequest() {
    const _0x218e5d = await fetchViaHTTP(appPort, '/api', null, {
        'method': 'POST',
        'headers': { 'Content-Type': 'application/json;\x20charset=utf-8' },
        'body': JSON['stringify']([{ 'title': 'Nextjs' }])
    })['then'](_0x53fda5 => _0x53fda5['ok'] && _0x53fda5['json']());
    return _0x218e5d;
}
async function makeRequestWithInvalidContentType() {
    const _0x4c5882 = await fetchViaHTTP(appPort, '/api', null, {
        'method': 'POST',
        'headers': { 'Content-Type': 'application/json;' },
        'body': JSON['stringify']([{ 'title': 'Nextjs' }])
    })['then'](_0x3aecff => _0x3aecff['status']);
    return _0x4c5882;
}
const startServer = async (_0x35957b = {}, _0x4eb08b) => {
    const _0x3e21d9 = join(appDir, 'server.js');
    context['appPort'] = appPort = await _0x5ea4ee();
    const _0x3d41e0 = Object['assign']({}, _0x109189(process['env']), { 'PORT': '' + appPort }, _0x35957b);
    server = await initNextServerScript(_0x3e21d9, /ready on/i, _0x3d41e0, /ReferenceError: options is not defined/, _0x4eb08b);
};
runTests();
