const _0x1996 = [
    '5KluCRU',
    '105142cXLjDk',
    '275698mCIUEN',
    '44993JvYjpt',
    '109061dJPseT',
    '3bUIPaC',
    '847975aehADM',
    'setTimeout',
    'load',
    'TypeScript\x20Features',
    'should\x20alias\x20components',
    '/basic-alias',
    'body',
    '/resolve-order',
    'text',
    'toMatch',
    '/resolve-fallback',
    'should\x20resolve\x20a\x20single\x20matching\x20alias',
    'should\x20not\x20resolve\x20to\x20.d.ts\x20files',
    '/alias-to-d-ts',
    '2311PYVkUA',
    '141BHIcbG',
    '64901qGlLvs'
];
const _0x38d32a = _0x4874;
(function (_0x10dad2, _0x3740db) {
    const _0x1f9af3 = _0x4874;
    while (!![]) {
        try {
            const _0x576a64 = parseInt(_0x1f9af3(0x1e4)) * -parseInt(_0x1f9af3(0x1e5)) + -parseInt(_0x1f9af3(0x1e6)) * parseInt(_0x1f9af3(0x1e7)) + parseInt(_0x1f9af3(0x1e8)) + -parseInt(_0x1f9af3(0x1e9)) + parseInt(_0x1f9af3(0x1ea)) + parseInt(_0x1f9af3(0x1eb)) * parseInt(_0x1f9af3(0x1ec)) + parseInt(_0x1f9af3(0x1ed));
            if (_0x576a64 === _0x3740db)
                break;
            else
                _0x10dad2['push'](_0x10dad2['shift']());
        } catch (_0x2caca1) {
            _0x10dad2['push'](_0x10dad2['shift']());
        }
    }
}(_0x1996, 0x61787));
import { join } from 'path';
import _0x948ec6 from 'cheerio';
function _0x4874(_0xfc6b14, _0x5c711d) {
    return _0x4874 = function (_0x199678, _0x48743c) {
        _0x199678 = _0x199678 - 0x1e4;
        let _0x3d82e7 = _0x1996[_0x199678];
        return _0x3d82e7;
    }, _0x4874(_0xfc6b14, _0x5c711d);
}
import {
    renderViaHTTP,
    findPort,
    launchApp,
    killApp
} from 'next-test-utils';
jest[_0x38d32a(0x1ee)](0x3e8 * 0x3c * 0x2);
const appDir = join(__dirname, '..');
let appPort, app;
async function get$(_0x2ddce0, _0x3d0891) {
    const _0x5d6d6c = _0x38d32a, _0x693666 = await renderViaHTTP(appPort, _0x2ddce0, _0x3d0891);
    return _0x948ec6[_0x5d6d6c(0x1ef)](_0x693666);
}
describe(_0x38d32a(0x1f0), () => {
    describe('default\x20behavior', () => {
        const _0x244ccd = _0x4874;
        beforeAll(async () => {
            appPort = await findPort(), app = await launchApp(appDir, appPort, {});
        }), afterAll(() => killApp(app)), it(_0x244ccd(0x1f1), async () => {
            const _0x46b294 = _0x244ccd, _0x57bf90 = await get$(_0x46b294(0x1f2));
            expect(_0x57bf90(_0x46b294(0x1f3))['text']())['toMatch'](/World/);
        }), it('should\x20resolve\x20the\x20first\x20item\x20in\x20the\x20array\x20first', async () => {
            const _0x208ee7 = _0x244ccd, _0x2bd8a0 = await get$(_0x208ee7(0x1f4));
            expect(_0x2bd8a0(_0x208ee7(0x1f3))[_0x208ee7(0x1f5)]())[_0x208ee7(0x1f6)](/Hello from a/);
        }), it('should\x20resolve\x20the\x20second\x20item\x20in\x20as\x20a\x20fallback', async () => {
            const _0x61d471 = _0x244ccd, _0x5080bd = await get$(_0x61d471(0x1f7));
            expect(_0x5080bd(_0x61d471(0x1f3))[_0x61d471(0x1f5)]())[_0x61d471(0x1f6)](/Hello from only b/);
        }), it(_0x244ccd(0x1f8), async () => {
            const _0x40f81d = _0x244ccd, _0x3982da = await get$('/single-alias');
            expect(_0x3982da(_0x40f81d(0x1f3))[_0x40f81d(0x1f5)]())[_0x40f81d(0x1f6)](/Hello/);
        }), it(_0x244ccd(0x1f9), async () => {
            const _0x29d4bf = _0x244ccd, _0x3d1c77 = await get$(_0x29d4bf(0x1fa));
            expect(_0x3d1c77(_0x29d4bf(0x1f3))[_0x29d4bf(0x1f5)]())[_0x29d4bf(0x1f6)](/Not aliased to d\.ts file/);
        });
    });
});
