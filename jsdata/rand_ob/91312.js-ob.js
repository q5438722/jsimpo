const _0x1c28 = [
    '37019TmxzDD',
    '34601NgBcKK',
    '94214ADfgGo',
    '119030OCHIlm',
    '1622dHKHdt',
    '41SFWWCe',
    '239047fyongo',
    '296168oHukPa',
    '1iDZOTc',
    'path',
    './package-json',
    '../resource-test-helper',
    'join',
    'fixtures',
    'package-json',
    'husky',
    'stringify',
    'lint-staged',
    'packageJson\x20resource',
    'e2e\x20package\x20resource\x20test',
    'iMjDm',
    'handles\x20multiple\x20parallel\x20create\x20calls',
    'parse',
    'create',
    'husky2',
    'uxpbr',
    'toMatchSnapshot',
    'WAXzT',
    'destroy',
    'handles\x20object\x20values',
    '7RQHiSr'
];
const _0x5540a9 = _0x248a;
function _0x248a(_0x559522, _0x89ddf2) {
    return _0x248a = function (_0x1b592e, _0x2d8d18) {
        _0x1b592e = _0x1b592e - (-0x601 + 0x14e8 + -0xdd3);
        let _0x4034ab = _0x1c28[_0x1b592e];
        return _0x4034ab;
    }, _0x248a(_0x559522, _0x89ddf2);
}
(function (_0x502de4, _0x14b287) {
    const _0x48d8ae = _0x248a;
    while (!![]) {
        try {
            const _0x326896 = parseInt(_0x48d8ae(0x114)) * parseInt(_0x48d8ae(0x115)) + parseInt(_0x48d8ae(0x116)) + -parseInt(_0x48d8ae(0x117)) + -parseInt(_0x48d8ae(0x118)) + parseInt(_0x48d8ae(0x119)) * parseInt(_0x48d8ae(0x11a)) + -parseInt(_0x48d8ae(0x11b)) + parseInt(_0x48d8ae(0x11c)) * parseInt(_0x48d8ae(0x11d));
            if (_0x326896 === _0x14b287)
                break;
            else
                _0x502de4['push'](_0x502de4['shift']());
        } catch (_0x55bc80) {
            _0x502de4['push'](_0x502de4['shift']());
        }
    }
}(_0x1c28, 0x4a3b4 + -0x16dc4 + -0x189f));
const path = require(_0x5540a9(0x11e)), pkgJson = require(_0x5540a9(0x11f)), resourceTestHelper = require(_0x5540a9(0x120)), root = path[_0x5540a9(0x121)](__dirname, _0x5540a9(0x122), _0x5540a9(0x123)), name = _0x5540a9(0x124), initialValue = JSON[_0x5540a9(0x125)]({ 'hooks': {} }, null, -0xc73 * -0x3 + 0x2 * 0x514 + 0x547 * -0x9), updateValue = JSON[_0x5540a9(0x125)]({ 'hooks': { 'pre-commit': _0x5540a9(0x126) } }, null, -0x2a * -0x4f + -0xc5 * 0x21 + 0xc71);
describe(_0x5540a9(0x127), () => {
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
    test(_0x29f6bd(0x128), async () => {
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
    }), _0x4be880[_0x29f6bd(0x129)](test, _0x29f6bd(0x12a), async () => {
        const _0x3b4e62 = _0x29f6bd, _0x57d3c9 = pkgJson['create']({ 'root': root }, {
                'name': _0x3b4e62(0x124),
                'value': JSON[_0x3b4e62(0x12b)](initialValue)
            }), _0x29bae4 = pkgJson[_0x3b4e62(0x12c)]({ 'root': root }, {
                'name': _0x3b4e62(0x12d),
                'value': JSON[_0x3b4e62(0x12b)](initialValue)
            }), _0x2f7337 = await _0x57d3c9, _0x598128 = await _0x29bae4;
        _0x4be880[_0x3b4e62(0x12e)](expect, _0x2f7337)[_0x3b4e62(0x12f)](), _0x4be880[_0x3b4e62(0x130)](expect, _0x598128)['toMatchSnapshot'](), await pkgJson[_0x3b4e62(0x131)]({ 'root': root }, _0x2f7337), await pkgJson[_0x3b4e62(0x131)]({ 'root': root }, _0x598128);
    }), test(_0x29f6bd(0x132), async () => {
        const _0x4f7af6 = _0x29f6bd, _0x30c78b = await pkgJson['create']({ 'root': root }, {
                'name': name,
                'value': JSON[_0x4f7af6(0x12b)](initialValue)
            });
        _0x4be880['tWuGX'](expect, _0x30c78b)[_0x4f7af6(0x12f)](), await pkgJson[_0x4f7af6(0x131)]({ 'root': root }, _0x30c78b);
    });
});
