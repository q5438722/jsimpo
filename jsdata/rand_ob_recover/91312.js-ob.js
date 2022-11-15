const path = require(_0x5540a9(286)), pkgJson = require(_0x5540a9(287)), resourceTestHelper = require(_0x5540a9(288)), root = path[_0x5540a9(289)](__dirname, _0x5540a9(290), _0x5540a9(291)), name = _0x5540a9(292), initialValue = JSON[_0x5540a9(293)]({ 'hooks': {} }, null, -3187 * -3 + 2 * 1300 + 1351 * -9), updateValue = JSON[_0x5540a9(293)]({ 'hooks': { 'pre-commit': _0x5540a9(294) } }, null, -42 * -79 + -197 * 33 + 3185);
describe(_0x5540a9(295), () => {
    const _0x29f6bd = _0x5540a9, _0x4be880 = {
            'brziC': function (_0x376505, _0x28741a) {
                return _0x376505(_0x28741a);
            },
            'uxpbr': function (_0x2d82c7, _0x480556) {
                return _0x2d82c7(_0x480556);
            },
            'WAXzT': function (_0x48bac6, _0x1d1d07) {
                return _0x48bac6(_0x1d1d07);
            },
            'tWuGX': function (_0x5dd0dc, _0x47acab) {
                return _0x5dd0dc(_0x47acab);
            },
            'iMjDm': function (_0x25369e, _0x180be5, _0x24a454) {
                return _0x25369e(_0x180be5, _0x24a454);
            }
        };
    test(_0x29f6bd(296), async () => {
        await _0x4be880['brziC'](resourceTestHelper, {
            'resourceModule': pkgJson,
            'resourceName': 'PackageJson',
            'context': { 'root': root },
            'initialObject': {
                'name': name,
                'value': initialValue
            },
            'partialUpdate': { 'value': updateValue }
        });
    }), _0x4be880[_0x29f6bd(297)](test, _0x29f6bd(298), async () => {
        const _0x3b4e62 = _0x29f6bd, _0x57d3c9 = pkgJson['create']({ 'root': root }, {
                'name': _0x3b4e62(292),
                'value': JSON[_0x3b4e62(299)](initialValue)
            }), _0x29bae4 = pkgJson[_0x3b4e62(300)]({ 'root': root }, {
                'name': _0x3b4e62(301),
                'value': JSON[_0x3b4e62(299)](initialValue)
            }), _0x2f7337 = await _0x57d3c9, _0x598128 = await _0x29bae4;
        _0x4be880[_0x3b4e62(302)](expect, _0x2f7337)[_0x3b4e62(303)](), _0x4be880[_0x3b4e62(304)](expect, _0x598128)['toMatchSnapshot'](), await pkgJson[_0x3b4e62(305)]({ 'root': root }, _0x2f7337), await pkgJson[_0x3b4e62(305)]({ 'root': root }, _0x598128);
    }), test(_0x29f6bd(306), async () => {
        const _0x4f7af6 = _0x29f6bd, _0x30c78b = await pkgJson['create']({ 'root': root }, {
                'name': name,
                'value': JSON[_0x4f7af6(299)](initialValue)
            });
        _0x4be880['tWuGX'](expect, _0x30c78b)[_0x4f7af6(303)](), await pkgJson[_0x4f7af6(305)]({ 'root': root }, _0x30c78b);
    });
});