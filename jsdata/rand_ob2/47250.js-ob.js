const _0x1c5e = [
    'assign',
    'env',
    '191143blxEah',
    '3yVBUqA',
    '503eTfbee',
    '131nrqqlf',
    '639411sKjVwp',
    '480947ZAywng',
    '321124AhbgPD',
    '893215OqxFPR',
    '189284ygRDHq',
    'setTimeout',
    'should\x20parse\x20JSON\x20body',
    'toEqual',
    'should\x20not\x20throw\x20if\x20request\x20body\x20is\x20already\x20parsed\x20in\x20custom\x20middleware',
    'Nextjs',
    'should\x20not\x20throw\x20if\x20request\x27s\x20content-type\x20is\x20invalid',
    'toBe',
    'then',
    '/api',
    'POST',
    'application/json;',
    'stringify',
    'status',
    'appPort'
];
const _0x37b6f0 = _0x2efe;
(function (_0x39ec76, _0x400d4c) {
    const _0x128d3e = _0x2efe;
    while (!![]) {
        try {
            const _0x4ac57d = parseInt(_0x128d3e(0xe6)) * -parseInt(_0x128d3e(0xe7)) + parseInt(_0x128d3e(0xe8)) * parseInt(_0x128d3e(0xe9)) + parseInt(_0x128d3e(0xea)) + -parseInt(_0x128d3e(0xeb)) + parseInt(_0x128d3e(0xec)) + parseInt(_0x128d3e(0xed)) + -parseInt(_0x128d3e(0xee));
            if (_0x4ac57d === _0x400d4c)
                break;
            else
                _0x39ec76['push'](_0x39ec76['shift']());
        } catch (_0x332b63) {
            _0x39ec76['push'](_0x39ec76['shift']());
        }
    }
}(_0x1c5e, 0xa508f));
import { join } from 'path';
import {
    killApp,
    findPort,
    launchApp,
    fetchViaHTTP,
    initNextServerScript
} from 'next-test-utils';
import _0x4e1d04 from 'clone';
import _0x13c38d from 'get-port';
jest[_0x37b6f0(0xef)](0x3e8 * 0x3c * 0x2);
const appDir = join(__dirname, '../');
let appPort, app, server;
jest[_0x37b6f0(0xef)](0x3e8 * 0x3c * 0x2);
const context = {};
function _0x2efe(_0x1b95ff, _0x16a905) {
    return _0x2efe = function (_0x1c5e14, _0x2efe3a) {
        _0x1c5e14 = _0x1c5e14 - 0xe6;
        let _0x3b493f = _0x1c5e[_0x1c5e14];
        return _0x3b493f;
    }, _0x2efe(_0x1b95ff, _0x16a905);
}
function runTests() {
    const _0x342d17 = _0x37b6f0;
    it(_0x342d17(0xf0), async () => {
        const _0x52785e = _0x342d17;
        appPort = await findPort(), app = await launchApp(appDir, appPort, {});
        const _0x910610 = await makeRequest();
        expect(_0x910610)[_0x52785e(0xf1)]([{ 'title': 'Nextjs' }]), killApp(app);
    }), it(_0x342d17(0xf2), async () => {
        const _0x4ad7b9 = _0x342d17;
        await startServer();
        const _0x19690c = await makeRequest();
        expect(_0x19690c)['toEqual']([{ 'title': _0x4ad7b9(0xf3) }]), killApp(server);
    }), it(_0x342d17(0xf4), async () => {
        const _0x4b21b9 = _0x342d17;
        await startServer();
        const _0x3f143e = await makeRequestWithInvalidContentType();
        expect(_0x3f143e)[_0x4b21b9(0xf5)](0xc8), killApp(server);
    });
}
async function makeRequest() {
    const _0x2fbec8 = _0x37b6f0, _0x1ce5a5 = await fetchViaHTTP(appPort, '/api', null, {
            'method': 'POST',
            'headers': { 'Content-Type': 'application/json;\x20charset=utf-8' },
            'body': JSON['stringify']([{ 'title': 'Nextjs' }])
        })[_0x2fbec8(0xf6)](_0x5b8cd1 => _0x5b8cd1['ok'] && _0x5b8cd1['json']());
    return _0x1ce5a5;
}
async function makeRequestWithInvalidContentType() {
    const _0x55c5a9 = _0x37b6f0, _0x553ea7 = await fetchViaHTTP(appPort, _0x55c5a9(0xf7), null, {
            'method': _0x55c5a9(0xf8),
            'headers': { 'Content-Type': _0x55c5a9(0xf9) },
            'body': JSON[_0x55c5a9(0xfa)]([{ 'title': _0x55c5a9(0xf3) }])
        })[_0x55c5a9(0xf6)](_0x5d9ec4 => _0x5d9ec4[_0x55c5a9(0xfb)]);
    return _0x553ea7;
}
const startServer = async (_0x531e3d = {}, _0x74d50c) => {
    const _0x1fce24 = _0x37b6f0, _0x5c452f = join(appDir, 'server.js');
    context[_0x1fce24(0xfc)] = appPort = await _0x13c38d();
    const _0x4b118a = Object[_0x1fce24(0xfd)]({}, _0x4e1d04(process[_0x1fce24(0xfe)]), { 'PORT': '' + appPort }, _0x531e3d);
    server = await initNextServerScript(_0x5c452f, /ready on/i, _0x4b118a, /ReferenceError: options is not defined/, _0x74d50c);
};
runTests();
