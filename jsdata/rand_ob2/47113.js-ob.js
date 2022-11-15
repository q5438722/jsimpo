const _0x7bbb = [
    '/resolve-order',
    'body',
    'text',
    'should\x20resolve\x20the\x20second\x20item\x20in\x20as\x20a\x20fallback',
    '/resolve-fallback',
    'should\x20resolve\x20a\x20single\x20matching\x20alias',
    '/single-alias',
    'should\x20not\x20resolve\x20to\x20.d.ts\x20files',
    '/alias-to-d-ts',
    '590344BvprNe',
    '116288ChfBiD',
    '1rwLEaZ',
    '190159slfBer',
    '1GAzqLH',
    '447493yxzgmZ',
    '10945MaQqVB',
    '65XijpvP',
    '273248aJtuOM',
    '1259673nrjzjT',
    'setTimeout',
    'load',
    'TypeScript\x20Features',
    'default\x20behavior',
    'should\x20alias\x20components',
    '/basic-alias',
    'toMatch'
];
const _0x10d4d3 = _0x189a;
(function (_0x40325c, _0x432dd7) {
    const _0x4bbec3 = _0x189a;
    while (!![]) {
        try {
            const _0x5759c6 = -parseInt(_0x4bbec3(0x142)) + -parseInt(_0x4bbec3(0x143)) + -parseInt(_0x4bbec3(0x144)) * parseInt(_0x4bbec3(0x145)) + -parseInt(_0x4bbec3(0x146)) * -parseInt(_0x4bbec3(0x147)) + -parseInt(_0x4bbec3(0x148)) * parseInt(_0x4bbec3(0x149)) + parseInt(_0x4bbec3(0x14a)) + parseInt(_0x4bbec3(0x14b));
            if (_0x5759c6 === _0x432dd7)
                break;
            else
                _0x40325c['push'](_0x40325c['shift']());
        } catch (_0x148a81) {
            _0x40325c['push'](_0x40325c['shift']());
        }
    }
}(_0x7bbb, 0x5ade6));
import { join } from 'path';
function _0x189a(_0x42fca0, _0x542e99) {
    return _0x189a = function (_0x7bbb4b, _0x189a12) {
        _0x7bbb4b = _0x7bbb4b - 0x142;
        let _0x548594 = _0x7bbb[_0x7bbb4b];
        return _0x548594;
    }, _0x189a(_0x42fca0, _0x542e99);
}
import _0x1bd450 from 'cheerio';
import {
    renderViaHTTP,
    findPort,
    launchApp,
    killApp
} from 'next-test-utils';
jest[_0x10d4d3(0x14c)](0x3e8 * 0x3c * 0x2);
const appDir = join(__dirname, '..');
let appPort, app;
async function get$(_0x24ed56, _0x57d4ec) {
    const _0x762487 = _0x10d4d3, _0x10451b = await renderViaHTTP(appPort, _0x24ed56, _0x57d4ec);
    return _0x1bd450[_0x762487(0x14d)](_0x10451b);
}
describe(_0x10d4d3(0x14e), () => {
    const _0x656f43 = _0x10d4d3;
    describe(_0x656f43(0x14f), () => {
        const _0x2f5745 = _0x656f43;
        beforeAll(async () => {
            appPort = await findPort(), app = await launchApp(appDir, appPort, {});
        }), afterAll(() => killApp(app)), it(_0x2f5745(0x150), async () => {
            const _0x362828 = _0x2f5745, _0x242e66 = await get$(_0x362828(0x151));
            expect(_0x242e66('body')['text']())[_0x362828(0x152)](/World/);
        }), it('should\x20resolve\x20the\x20first\x20item\x20in\x20the\x20array\x20first', async () => {
            const _0x20a2ec = _0x2f5745, _0x2450bb = await get$(_0x20a2ec(0x153));
            expect(_0x2450bb(_0x20a2ec(0x154))[_0x20a2ec(0x155)]())[_0x20a2ec(0x152)](/Hello from a/);
        }), it(_0x2f5745(0x156), async () => {
            const _0x171cda = _0x2f5745, _0x97bbec = await get$(_0x171cda(0x157));
            expect(_0x97bbec(_0x171cda(0x154))[_0x171cda(0x155)]())[_0x171cda(0x152)](/Hello from only b/);
        }), it(_0x2f5745(0x158), async () => {
            const _0x4d8ae3 = _0x2f5745, _0x19fc6a = await get$(_0x4d8ae3(0x159));
            expect(_0x19fc6a(_0x4d8ae3(0x154))['text']())[_0x4d8ae3(0x152)](/Hello/);
        }), it(_0x2f5745(0x15a), async () => {
            const _0x4c348c = _0x2f5745, _0x5407e2 = await get$(_0x4c348c(0x15b));
            expect(_0x5407e2(_0x4c348c(0x154))[_0x4c348c(0x155)]())[_0x4c348c(0x152)](/Not aliased to d\.ts file/);
        });
    });
});
