const path = require('path'), pkgJson = require('./package-json'), resourceTestHelper = require('../resource-test-helper'), root = path['join'](__dirname, 'fixtures', 'package-json'), name = 'husky', initialValue = JSON['stringify']({ 'hooks': {} }, null, 0x59d + 0x1 * -0x1ba6 + -0x3 * -0x759), updateValue = JSON['stringify']({ 'hooks': { 'pre-commit': 'lint-staged' } }, null, 0x113e * -0x1 + -0xb3 * 0x12 + 0x6 * 0x4f9);
describe('packageJson\x20resource', () => {
    test('e2e\x20package\x20resource\x20test', async () => {
        await resourceTestHelper({
            'resourceModule': pkgJson,
            'resourceName': 'PackageJson',
            'context': { 'root': root },
            'initialObject': {
                'name': name,
                'value': initialValue
            },
            'partialUpdate': { 'value': updateValue }
        });
    }), test('handles\x20multiple\x20parallel\x20create\x20calls', async () => {
        const _0x42b2ab = pkgJson['create']({ 'root': root }, {
                'name': 'husky',
                'value': JSON['parse'](initialValue)
            }), _0x3bb784 = pkgJson['create']({ 'root': root }, {
                'name': 'husky2',
                'value': JSON['parse'](initialValue)
            }), _0x39df3d = await _0x42b2ab, _0x549c47 = await _0x3bb784;
        expect(_0x39df3d)['toMatchSnapshot'](), expect(_0x549c47)['toMatchSnapshot'](), await pkgJson['destroy']({ 'root': root }, _0x39df3d), await pkgJson['destroy']({ 'root': root }, _0x549c47);
    }), test('handles\x20object\x20values', async () => {
        const _0x1c0df6 = await pkgJson['create']({ 'root': root }, {
            'name': name,
            'value': JSON['parse'](initialValue)
        });
        expect(_0x1c0df6)['toMatchSnapshot'](), await pkgJson['destroy']({ 'root': root }, _0x1c0df6);
    });
});
