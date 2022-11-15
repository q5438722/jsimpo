function _0x4df0(_0xf149d4, _0x5dcc07) {
    return _0x4df0 = function (_0x23c2ed, _0x4df0de) {
        _0x23c2ed = _0x23c2ed - 353;
        let _0xe088ac = _0x23c2[_0x23c2ed];
        return _0xe088ac;
    }, _0x4df0(_0xf149d4, _0x5dcc07);
}
const path = require(_0x31e40(362)), pkgJson = require(_0x31e40(363)), resourceTestHelper = require('../resource-test-helper'), root = path[_0x31e40(364)](__dirname, 'fixtures', _0x31e40(365)), name = _0x31e40(366), initialValue = JSON[_0x31e40(367)]({ 'hooks': {} }, null, 2), updateValue = JSON[_0x31e40(367)]({ 'hooks': { 'pre-commit': 'lint-staged' } }, null, 2);
describe(_0x31e40(368), () => {
    const _0x18b913 = _0x31e40;
    test(_0x18b913(369), async () => {
        const _0x45531d = _0x18b913;
        await resourceTestHelper({
            'resourceModule': pkgJson,
            'resourceName': _0x45531d(370),
            'context': { 'root': root },
            'initialObject': {
                'name': name,
                'value': initialValue
            },
            'partialUpdate': { 'value': updateValue }
        });
    }), test('handles multiple parallel create calls', async () => {
        const _0x2661fd = _0x18b913, _0x1160c2 = pkgJson[_0x2661fd(371)]({ 'root': root }, {
                'name': 'husky',
                'value': JSON[_0x2661fd(372)](initialValue)
            }), _0x56e018 = pkgJson[_0x2661fd(371)]({ 'root': root }, {
                'name': 'husky2',
                'value': JSON[_0x2661fd(372)](initialValue)
            }), _0x5057c9 = await _0x1160c2, _0x216dec = await _0x56e018;
        expect(_0x5057c9)['toMatchSnapshot'](), expect(_0x216dec)[_0x2661fd(373)](), await pkgJson[_0x2661fd(374)]({ 'root': root }, _0x5057c9), await pkgJson[_0x2661fd(374)]({ 'root': root }, _0x216dec);
    }), test(_0x18b913(375), async () => {
        const _0x36b1e5 = _0x18b913, _0x168c57 = await pkgJson[_0x36b1e5(371)]({ 'root': root }, {
                'name': name,
                'value': JSON[_0x36b1e5(372)](initialValue)
            });
        expect(_0x168c57)[_0x36b1e5(373)](), await pkgJson[_0x36b1e5(374)]({ 'root': root }, _0x168c57);
    });
});