const _0x23c2 = [
    'join',
    'package-json',
    'husky',
    'stringify',
    'packageJson\x20resource',
    'e2e\x20package\x20resource\x20test',
    'PackageJson',
    'create',
    'parse',
    'toMatchSnapshot',
    'destroy',
    'handles\x20object\x20values',
    '1SpNFWn',
    '684407lABEaF',
    '533363HwkNma',
    '260212clRXUj',
    '265505CDMuHc',
    '1QuisEr',
    '468778Jychec',
    '373821nWRBTR',
    '1141685QhnMiL',
    'path',
    './package-json'
];
const _0x31e40 = _0x4df0;
(function (_0x11c512, _0x3f04aa) {
    const _0x4420d9 = _0x4df0;
    while (!![]) {
        try {
            const _0x27907a = -parseInt(_0x4420d9(0x161)) * -parseInt(_0x4420d9(0x162)) + -parseInt(_0x4420d9(0x163)) + parseInt(_0x4420d9(0x164)) + parseInt(_0x4420d9(0x165)) * parseInt(_0x4420d9(0x166)) + parseInt(_0x4420d9(0x167)) + parseInt(_0x4420d9(0x168)) + -parseInt(_0x4420d9(0x169));
            if (_0x27907a === _0x3f04aa)
                break;
            else
                _0x11c512['push'](_0x11c512['shift']());
        } catch (_0x52fe81) {
            _0x11c512['push'](_0x11c512['shift']());
        }
    }
}(_0x23c2, 0x5c34b));
function _0x4df0(_0xf149d4, _0x5dcc07) {
    return _0x4df0 = function (_0x23c2ed, _0x4df0de) {
        _0x23c2ed = _0x23c2ed - 0x161;
        let _0xe088ac = _0x23c2[_0x23c2ed];
        return _0xe088ac;
    }, _0x4df0(_0xf149d4, _0x5dcc07);
}
const path = require(_0x31e40(0x16a)), pkgJson = require(_0x31e40(0x16b)), resourceTestHelper = require('../resource-test-helper'), root = path[_0x31e40(0x16c)](__dirname, 'fixtures', _0x31e40(0x16d)), name = _0x31e40(0x16e), initialValue = JSON[_0x31e40(0x16f)]({ 'hooks': {} }, null, 0x2), updateValue = JSON[_0x31e40(0x16f)]({ 'hooks': { 'pre-commit': 'lint-staged' } }, null, 0x2);
describe(_0x31e40(0x170), () => {
    const _0x18b913 = _0x31e40;
    test(_0x18b913(0x171), async () => {
        const _0x45531d = _0x18b913;
        await resourceTestHelper({
            'resourceModule': pkgJson,
            'resourceName': _0x45531d(0x172),
            'context': { 'root': root },
            'initialObject': {
                'name': name,
                'value': initialValue
            },
            'partialUpdate': { 'value': updateValue }
        });
    }), test('handles\x20multiple\x20parallel\x20create\x20calls', async () => {
        const _0x2661fd = _0x18b913, _0x1160c2 = pkgJson[_0x2661fd(0x173)]({ 'root': root }, {
                'name': 'husky',
                'value': JSON[_0x2661fd(0x174)](initialValue)
            }), _0x56e018 = pkgJson[_0x2661fd(0x173)]({ 'root': root }, {
                'name': 'husky2',
                'value': JSON[_0x2661fd(0x174)](initialValue)
            }), _0x5057c9 = await _0x1160c2, _0x216dec = await _0x56e018;
        expect(_0x5057c9)['toMatchSnapshot'](), expect(_0x216dec)[_0x2661fd(0x175)](), await pkgJson[_0x2661fd(0x176)]({ 'root': root }, _0x5057c9), await pkgJson[_0x2661fd(0x176)]({ 'root': root }, _0x216dec);
    }), test(_0x18b913(0x177), async () => {
        const _0x36b1e5 = _0x18b913, _0x168c57 = await pkgJson[_0x36b1e5(0x173)]({ 'root': root }, {
                'name': name,
                'value': JSON[_0x36b1e5(0x174)](initialValue)
            });
        expect(_0x168c57)[_0x36b1e5(0x175)](), await pkgJson[_0x36b1e5(0x176)]({ 'root': root }, _0x168c57);
    });
});
