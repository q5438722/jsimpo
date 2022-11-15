const _0x5451 = [
    '../',
    'should\x20parse\x20JSON\x20body',
    'toEqual',
    'should\x20not\x20throw\x20if\x20request\x20body\x20is\x20already\x20parsed\x20in\x20custom\x20middleware',
    'Nextjs',
    'should\x20not\x20throw\x20if\x20request\x27s\x20content-type\x20is\x20invalid',
    'toBe',
    '/api',
    'application/json;\x20charset=utf-8',
    'stringify',
    'then',
    'POST',
    'application/json;',
    'status',
    'server.js',
    'appPort',
    'assign',
    'env',
    '134688UahfOt',
    '378242GyXIQo',
    '37MJmiCx',
    '11298UkcNqg',
    '51391zDbRdB',
    '548GCgTUH',
    '94iPgnnh',
    '366616dZJBSc',
    '554488KqiSge'
];
const _0x169df7 = _0x45bc;
(function (_0x3f5528, _0x2e4adf) {
    const _0x5bca83 = _0x45bc;
    while (!![]) {
        try {
            const _0x4142ea = parseInt(_0x5bca83(0x1c0)) + -parseInt(_0x5bca83(0x1c1)) + -parseInt(_0x5bca83(0x1c2)) * parseInt(_0x5bca83(0x1c3)) + -parseInt(_0x5bca83(0x1c4)) + parseInt(_0x5bca83(0x1c5)) * parseInt(_0x5bca83(0x1c6)) + parseInt(_0x5bca83(0x1c7)) + parseInt(_0x5bca83(0x1c8));
            if (_0x4142ea === _0x2e4adf)
                break;
            else
                _0x3f5528['push'](_0x3f5528['shift']());
        } catch (_0x415f00) {
            _0x3f5528['push'](_0x3f5528['shift']());
        }
    }
}(_0x5451, 0x3f63d));
import { join } from 'path';
import {
    killApp,
    findPort,
    launchApp,
    fetchViaHTTP,
    initNextServerScript
} from 'next-test-utils';
import _0x28b477 from 'clone';
import _0x11e1e7 from 'get-port';
jest['setTimeout'](0x3e8 * 0x3c * 0x2);
const appDir = join(__dirname, _0x169df7(0x1c9));
let appPort, app, server;
function _0x45bc(_0x1fa986, _0x46e70e) {
    return _0x45bc = function (_0x5451a7, _0x45bc2f) {
        _0x5451a7 = _0x5451a7 - 0x1c0;
        let _0x52a24a = _0x5451[_0x5451a7];
        return _0x52a24a;
    }, _0x45bc(_0x1fa986, _0x46e70e);
}
jest['setTimeout'](0x3e8 * 0x3c * 0x2);
const context = {};
function runTests() {
    const _0x27ff2d = _0x169df7;
    it(_0x27ff2d(0x1ca), async () => {
        const _0x24476c = _0x27ff2d;
        appPort = await findPort(), app = await launchApp(appDir, appPort, {});
        const _0x1c7f44 = await makeRequest();
        expect(_0x1c7f44)[_0x24476c(0x1cb)]([{ 'title': 'Nextjs' }]), killApp(app);
    }), it(_0x27ff2d(0x1cc), async () => {
        const _0x3c3420 = _0x27ff2d;
        await startServer();
        const _0xaece30 = await makeRequest();
        expect(_0xaece30)[_0x3c3420(0x1cb)]([{ 'title': _0x3c3420(0x1cd) }]), killApp(server);
    }), it(_0x27ff2d(0x1ce), async () => {
        const _0x26c862 = _0x27ff2d;
        await startServer();
        const _0x5260a2 = await makeRequestWithInvalidContentType();
        expect(_0x5260a2)[_0x26c862(0x1cf)](0xc8), killApp(server);
    });
}
async function makeRequest() {
    const _0x24b6cd = _0x169df7, _0x9a4f19 = await fetchViaHTTP(appPort, _0x24b6cd(0x1d0), null, {
            'method': 'POST',
            'headers': { 'Content-Type': _0x24b6cd(0x1d1) },
            'body': JSON[_0x24b6cd(0x1d2)]([{ 'title': _0x24b6cd(0x1cd) }])
        })[_0x24b6cd(0x1d3)](_0x2cafec => _0x2cafec['ok'] && _0x2cafec['json']());
    return _0x9a4f19;
}
async function makeRequestWithInvalidContentType() {
    const _0x3fc0a9 = _0x169df7, _0x20c558 = await fetchViaHTTP(appPort, '/api', null, {
            'method': _0x3fc0a9(0x1d4),
            'headers': { 'Content-Type': _0x3fc0a9(0x1d5) },
            'body': JSON['stringify']([{ 'title': 'Nextjs' }])
        })[_0x3fc0a9(0x1d3)](_0x2cc852 => _0x2cc852[_0x3fc0a9(0x1d6)]);
    return _0x20c558;
}
const startServer = async (_0x1c835b = {}, _0x4bbb33) => {
    const _0x4a1899 = _0x169df7, _0x27ba1a = join(appDir, _0x4a1899(0x1d7));
    context[_0x4a1899(0x1d8)] = appPort = await _0x11e1e7();
    const _0x38e910 = Object[_0x4a1899(0x1d9)]({}, _0x28b477(process[_0x4a1899(0x1da)]), { 'PORT': '' + appPort }, _0x1c835b);
    server = await initNextServerScript(_0x27ba1a, /ready on/i, _0x38e910, /ReferenceError: options is not defined/, _0x4bbb33);
};
runTests();
