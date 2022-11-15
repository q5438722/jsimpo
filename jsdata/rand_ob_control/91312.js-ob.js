const path = require('path'), pkgJson = require('./package-json'), resourceTestHelper = require('../resource-test-helper'), root = path['join'](__dirname, 'fixtures', 'package-json'), name = 'husky', initialValue = JSON['stringify']({ 'hooks': {} }, null, 0x2), updateValue = JSON['stringify']({ 'hooks': { 'pre-commit': 'lint-staged' } }, null, 0x2);
describe('packageJson\x20resource', () => {
    const _0x2d08e7 = {
        'EgZTj': function (_0x10e3af, _0x31a707) {
            return _0x10e3af(_0x31a707);
        },
        'unREJ': function (_0x2a9bba, _0x480722) {
            return _0x2a9bba(_0x480722);
        },
        'DmAte': function (_0x1b9a3b, _0x12d0ff) {
            return _0x1b9a3b(_0x12d0ff);
        },
        'PqGuP': function (_0x3ce759, _0x6b90c4, _0x2f98ce) {
            return _0x3ce759(_0x6b90c4, _0x2f98ce);
        },
        'QnZZN': function (_0x7ebf72, _0xf43be1, _0x1f4587) {
            return _0x7ebf72(_0xf43be1, _0x1f4587);
        },
        'VbQQk': function (_0x130bf0, _0x561be8, _0x32d239) {
            return _0x130bf0(_0x561be8, _0x32d239);
        }
    };
    _0x2d08e7['PqGuP'](test, 'e2e\x20package\x20resource\x20test', async () => {
        await _0x2d08e7['EgZTj'](resourceTestHelper, {
            'resourceModule': pkgJson,
            'resourceName': 'PackageJson',
            'context': { 'root': root },
            'initialObject': {
                'name': name,
                'value': initialValue
            },
            'partialUpdate': { 'value': updateValue }
        });
    }), _0x2d08e7['QnZZN'](test, 'handles\x20multiple\x20parallel\x20create\x20calls', async () => {
        const _0xbc28a1 = pkgJson['create']({ 'root': root }, {
                'name': 'husky',
                'value': JSON['parse'](initialValue)
            }), _0x58b770 = pkgJson['create']({ 'root': root }, {
                'name': 'husky2',
                'value': JSON['parse'](initialValue)
            }), _0x2cb47e = await _0xbc28a1, _0x5dcba3 = await _0x58b770;
        _0x2d08e7['unREJ'](expect, _0x2cb47e)['toMatchSnapshot'](), _0x2d08e7['unREJ'](expect, _0x5dcba3)['toMatchSnapshot'](), await pkgJson['destroy']({ 'root': root }, _0x2cb47e), await pkgJson['destroy']({ 'root': root }, _0x5dcba3);
    }), _0x2d08e7['VbQQk'](test, 'handles\x20object\x20values', async () => {
        const _0x366266 = await pkgJson['create']({ 'root': root }, {
            'name': name,
            'value': JSON['parse'](initialValue)
        });
        _0x2d08e7['DmAte'](expect, _0x366266)['toMatchSnapshot'](), await pkgJson['destroy']({ 'root': root }, _0x366266);
    });
});
