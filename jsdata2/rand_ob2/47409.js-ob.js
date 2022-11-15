const _0x50d9 = [
    'should\x20send\x20keep-alive\x20for\x20getServerSideProps',
    '/ssr',
    '231676VOaSNB',
    '1778bBouLm',
    '292xsMtOM',
    '1UBTgWk',
    '728193NDXxHb',
    '1yXpCbs',
    '136631PaluNw',
    '282845TBSKuM',
    '1229128hqYmuw',
    '190599ItFdhp',
    '11GhUOob',
    'setTimeout',
    '../',
    'headers',
    'end',
    'stringify',
    'listen',
    'close',
    'production',
    'log',
    '/api/json',
    'toEqual',
    'keep-alive',
    'should\x20send\x20keep-alive\x20for\x20getStaticProps',
    '/ssg',
    'elementById',
    'props',
    'text',
    'parse',
    'should\x20send\x20keep-alive\x20for\x20getStaticPaths',
    '/blog/first',
    'first'
];
const _0x5e6669 = _0x52df;
function _0x52df(_0x16f7b2, _0x561a14) {
    return _0x52df = function (_0x50d972, _0x52dfb6) {
        _0x50d972 = _0x50d972 - 0x159;
        let _0x560d1a = _0x50d9[_0x50d972];
        return _0x560d1a;
    }, _0x52df(_0x16f7b2, _0x561a14);
}
(function (_0x15c499, _0x39e84f) {
    const _0x2d7286 = _0x52df;
    while (!![]) {
        try {
            const _0x12510f = -parseInt(_0x2d7286(0x159)) + -parseInt(_0x2d7286(0x15a)) * parseInt(_0x2d7286(0x15b)) + -parseInt(_0x2d7286(0x15c)) * -parseInt(_0x2d7286(0x15d)) + parseInt(_0x2d7286(0x15e)) * parseInt(_0x2d7286(0x15f)) + -parseInt(_0x2d7286(0x160)) + -parseInt(_0x2d7286(0x161)) + parseInt(_0x2d7286(0x162)) * parseInt(_0x2d7286(0x163));
            if (_0x12510f === _0x39e84f)
                break;
            else
                _0x15c499['push'](_0x15c499['shift']());
        } catch (_0x18aa99) {
            _0x15c499['push'](_0x15c499['shift']());
        }
    }
}(_0x50d9, 0xaa8dc));
import { join } from 'path';
import { createServer } from 'http';
import {
    fetchViaHTTP,
    nextBuild,
    findPort,
    nextStart,
    launchApp,
    killApp
} from 'next-test-utils';
import _0x2a7687 from 'next-webdriver';
jest[_0x5e6669(0x164)](0x3e8 * 0x3c * 0x1);
const appDir = join(__dirname, _0x5e6669(0x165));
let appPort, app, mockServer;
describe('node-fetch-keep-alive', () => {
    const _0x392131 = _0x5e6669;
    describe('dev', () => {
        beforeAll(async () => {
            const _0x5d8ea8 = _0x52df;
            mockServer = createServer((_0x23501f, _0x20ba6a) => {
                const _0x53e8a3 = _0x52df, {connection: _0x477667} = _0x23501f[_0x53e8a3(0x166)];
                _0x20ba6a[_0x53e8a3(0x167)](JSON[_0x53e8a3(0x168)]({ 'connection': _0x477667 }));
            }), mockServer[_0x5d8ea8(0x169)](0xabe1), appPort = await findPort(), app = await launchApp(appDir, appPort);
        }), afterAll(async () => {
            const _0xc785f4 = _0x52df;
            await killApp(app), mockServer[_0xc785f4(0x16a)]();
        }), _0x22e791();
    }), describe(_0x392131(0x16b), () => {
        beforeAll(async () => {
            const _0x197557 = _0x52df;
            mockServer = createServer((_0xb7bc0, _0x27ff2b) => {
                const _0x3d1838 = _0x52df, {connection: _0x496278} = _0xb7bc0[_0x3d1838(0x166)];
                _0x27ff2b[_0x3d1838(0x167)](JSON[_0x3d1838(0x168)]({ 'connection': _0x496278 }));
            }), mockServer[_0x197557(0x169)](0xabe1);
            const {
                stdout: _0x146392,
                stderr: _0x14ed33
            } = await nextBuild(appDir, [], {
                'stdout': !![],
                'stderr': !![]
            });
            if (_0x146392)
                console[_0x197557(0x16c)](_0x146392);
            if (_0x14ed33)
                console['error'](_0x14ed33);
            appPort = await findPort(), app = await nextStart(appDir, appPort);
        }), afterAll(async () => {
            await killApp(app), mockServer['close']();
        }), _0x22e791();
    });
    function _0x22e791() {
        const _0x345ff4 = _0x392131;
        it('should\x20send\x20keep-alive\x20for\x20json\x20API', async () => {
            const _0x362dba = _0x52df, _0x89dd1 = await fetchViaHTTP(appPort, _0x362dba(0x16d)), _0x133bb3 = await _0x89dd1['json']();
            expect(_0x133bb3)[_0x362dba(0x16e)]({ 'connection': _0x362dba(0x16f) });
        }), it(_0x345ff4(0x170), async () => {
            const _0x38946b = _0x345ff4, _0x2250c8 = await _0x2a7687(appPort, _0x38946b(0x171)), _0x527472 = await _0x2250c8[_0x38946b(0x172)](_0x38946b(0x173))[_0x38946b(0x174)](), _0x2476b1 = JSON[_0x38946b(0x175)](_0x527472);
            expect(_0x2476b1)['toEqual']({ 'connection': _0x38946b(0x16f) }), await _0x2250c8[_0x38946b(0x16a)]();
        }), it(_0x345ff4(0x176), async () => {
            const _0x3c30d4 = _0x345ff4, _0x6355ae = await _0x2a7687(appPort, _0x3c30d4(0x177)), _0x2df030 = await _0x6355ae[_0x3c30d4(0x172)](_0x3c30d4(0x173))['text'](), _0x2cb829 = JSON['parse'](_0x2df030);
            expect(_0x2cb829)[_0x3c30d4(0x16e)]({ 'slug': _0x3c30d4(0x178) }), await _0x6355ae['close']();
        }), it(_0x345ff4(0x179), async () => {
            const _0x3f7fe7 = _0x345ff4, _0x5169a2 = await _0x2a7687(appPort, _0x3f7fe7(0x17a)), _0x15feb5 = await _0x5169a2[_0x3f7fe7(0x172)](_0x3f7fe7(0x173))[_0x3f7fe7(0x174)](), _0x18b480 = JSON[_0x3f7fe7(0x175)](_0x15feb5);
            expect(_0x18b480)[_0x3f7fe7(0x16e)]({ 'connection': 'keep-alive' }), await _0x5169a2[_0x3f7fe7(0x16a)]();
        });
    }
});
