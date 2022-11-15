'use strict';
const _0x35bc = [
    '9pgEJdP',
    '7271gBEozS',
    '631514XMJtMm',
    '917070rXhAqw',
    '49048oMxnZB',
    'path',
    '../../../../lib/cli/conditionally-load-dotenv',
    'use',
    'chai-as-promised',
    'DEFAULT_ENV_VARIABLE=valuefromdefault',
    'promises',
    'writeFile',
    'resolve',
    '.env',
    'testing',
    'STAGE_ENV_VARIABLE=valuefromstage',
    '.env.',
    'should\x20load\x20environment\x20variables\x20from\x20default\x20.env\x20file\x20if\x20no\x20matching\x20stage',
    'env',
    'equal',
    'valuefromdefault',
    'STAGE_ENV_VARIABLE',
    'should\x20load\x20environment\x20variables\x20from\x20stage\x20.env\x20file\x20if\x20matching\x20stage',
    'DEFAULT_ENV_VARIABLE',
    'undefined',
    'valuefromstage',
    '358125kJWjOY',
    '462871tyXJUk',
    '4XDLIjq',
    '62573kcLilK'
];
const _0x4e6231 = _0xc700;
(function (_0x1eda1d, _0x153a80) {
    const _0x285407 = _0xc700;
    while (!![]) {
        try {
            const _0xd5ef84 = -parseInt(_0x285407(0x81)) + -parseInt(_0x285407(0x82)) + -parseInt(_0x285407(0x83)) * parseInt(_0x285407(0x84)) + -parseInt(_0x285407(0x85)) * parseInt(_0x285407(0x86)) + parseInt(_0x285407(0x87)) + parseInt(_0x285407(0x88)) + parseInt(_0x285407(0x89));
            if (_0xd5ef84 === _0x153a80)
                break;
            else
                _0x1eda1d['push'](_0x1eda1d['shift']());
        } catch (_0x5941e7) {
            _0x1eda1d['push'](_0x1eda1d['shift']());
        }
    }
}(_0x35bc, 0x70869));
function _0xc700(_0x4ce3b9, _0x5d3e45) {
    return _0xc700 = function (_0x35bc09, _0xc700d1) {
        _0x35bc09 = _0x35bc09 - 0x81;
        let _0x1f82f2 = _0x35bc[_0x35bc09];
        return _0x1f82f2;
    }, _0xc700(_0x4ce3b9, _0x5d3e45);
}
const chai = require('chai'), path = require(_0x4e6231(0x8a)), overrideEnv = require('process-utils/override-env'), fs = require('fs'), conditionallyLoadDotenv = require(_0x4e6231(0x8b));
chai[_0x4e6231(0x8c)](require(_0x4e6231(0x8d)));
const expect = require('chai')['expect'];
describe('test/unit/lib/cli/conditionally-load-dotenv.test.js', () => {
    const _0x56b5d2 = _0x4e6231;
    let _0x48c806;
    before(async () => {
        const _0x20c8ef = _0xc700, _0x3aaeb4 = _0x20c8ef(0x8e);
        await fs[_0x20c8ef(0x8f)][_0x20c8ef(0x90)](path[_0x20c8ef(0x91)](_0x20c8ef(0x92)), _0x3aaeb4);
        const _0x363826 = _0x20c8ef(0x93), _0x2b1679 = _0x20c8ef(0x94);
        await fs[_0x20c8ef(0x8f)][_0x20c8ef(0x90)](path[_0x20c8ef(0x91)](_0x20c8ef(0x95) + _0x363826), _0x2b1679);
    }), beforeEach(() => {
        conditionallyLoadDotenv['clear'](), {restoreEnv: _0x48c806} = overrideEnv();
    }), afterEach(() => {
        _0x48c806 && _0x48c806();
    }), it(_0x56b5d2(0x96), async () => {
        const _0x5418c3 = _0x56b5d2;
        await conditionallyLoadDotenv({}, { 'useDotenv': !![] }), expect(process[_0x5418c3(0x97)]['DEFAULT_ENV_VARIABLE'])['to'][_0x5418c3(0x98)](_0x5418c3(0x99)), expect(process['env'][_0x5418c3(0x9a)])['to']['be']['undefined'];
    }), it(_0x56b5d2(0x9b), async () => {
        const _0x198826 = _0x56b5d2;
        await conditionallyLoadDotenv({ 'stage': _0x198826(0x93) }, { 'useDotenv': !![] }), expect(process[_0x198826(0x97)][_0x198826(0x9c)])['to']['be'][_0x198826(0x9d)], expect(process[_0x198826(0x97)][_0x198826(0x9a)])['to']['equal'](_0x198826(0x9e));
    });
});
