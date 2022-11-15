const _0x459b = [
    '81jnAlIZ',
    '2181ptyOrF',
    '950885xDyxQo',
    '1255787JXzhIF',
    '1NSGokS',
    '4343vnnEyO',
    '4OhWcHX',
    '399628YnXnhJ',
    '342041ssXCoq',
    '1WsiHmo',
    '625777DpFogu',
    '../',
    '/some-page',
    'text',
    'toBe',
    '1,2',
    'rewrites\x20destination\x20query'
];
const _0x403e23 = _0x2c4b;
(function (_0x239600, _0x5f5b12) {
    const _0x539c94 = _0x2c4b;
    while (!![]) {
        try {
            const _0x299ea5 = parseInt(_0x539c94(0x152)) * -parseInt(_0x539c94(0x153)) + -parseInt(_0x539c94(0x154)) + parseInt(_0x539c94(0x155)) * parseInt(_0x539c94(0x156)) + parseInt(_0x539c94(0x157)) * parseInt(_0x539c94(0x158)) + -parseInt(_0x539c94(0x159)) + parseInt(_0x539c94(0x15a)) + -parseInt(_0x539c94(0x15b)) * -parseInt(_0x539c94(0x15c));
            if (_0x299ea5 === _0x5f5b12)
                break;
            else
                _0x239600['push'](_0x239600['shift']());
        } catch (_0x4e6ccd) {
            _0x239600['push'](_0x239600['shift']());
        }
    }
}(_0x459b, 0xae44b));
import { join } from 'path';
import {
    findPort,
    killApp,
    launchApp,
    nextBuild,
    nextStart
} from 'next-test-utils';
import _0x4d7ec4 from 'next-webdriver';
jest['setTimeout'](0x3e8 * 0x3c * 0x2);
const appDir = join(__dirname, _0x403e23(0x15d));
let appPort, app;
const runTests = () => {
    it('should\x20contain\x20all\x20values\x20passed\x20in\x20param\x20as\x20array', async () => {
        const _0x549736 = _0x2c4b, _0x31bb06 = await _0x4d7ec4(appPort, _0x549736(0x15e));
        expect(await _0x31bb06['elementByCss']('#items')[_0x549736(0x15f)]())[_0x549736(0x160)](_0x549736(0x161));
    });
};
function _0x2c4b(_0x345a43, _0x3a0d0b) {
    return _0x2c4b = function (_0x459bb3, _0x2c4b6b) {
        _0x459bb3 = _0x459bb3 - 0x152;
        let _0x438017 = _0x459b[_0x459bb3];
        return _0x438017;
    }, _0x2c4b(_0x345a43, _0x3a0d0b);
}
describe(_0x403e23(0x162), () => {
    describe('dev\x20mode', () => {
        beforeAll(async () => {
            appPort = await findPort(), app = await launchApp(appDir, appPort);
        }), afterAll(() => killApp(app)), runTests();
    }), describe('production\x20mode', () => {
        beforeAll(async () => {
            await nextBuild(appDir), appPort = await findPort(), app = await nextStart(appDir, appPort);
        }), afterAll(() => killApp(app)), runTests();
    });
});
