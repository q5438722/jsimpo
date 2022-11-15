'use strict';
const chai = require('chai'), path = require('path'), overrideEnv = require('process-utils/override-env'), fs = require('fs'), conditionallyLoadDotenv = require('../../../../lib/cli/conditionally-load-dotenv');
chai['use'](require('chai-as-promised'));
const expect = require('chai')['expect'];
describe('test/unit/lib/cli/conditionally-load-dotenv.test.js', () => {
    let _0x458858;
    before(async () => {
        const _0x5455ee = 'DEFAULT_ENV_VARIABLE=valuefromdefault';
        await fs['promises']['writeFile'](path['resolve']('.env'), _0x5455ee);
        const _0x555818 = 'testing', _0x43f872 = 'STAGE_ENV_VARIABLE=valuefromstage';
        await fs['promises']['writeFile'](path['resolve']('.env.' + _0x555818), _0x43f872);
    }), beforeEach(() => {
        conditionallyLoadDotenv['clear'](), {restoreEnv: _0x458858} = overrideEnv();
    }), afterEach(() => {
        _0x458858 && _0x458858();
    }), it('should\x20load\x20environment\x20variables\x20from\x20default\x20.env\x20file\x20if\x20no\x20matching\x20stage', async () => {
        await conditionallyLoadDotenv({}, { 'useDotenv': !![] }), expect(process['env']['DEFAULT_ENV_VARIABLE'])['to']['equal']('valuefromdefault'), expect(process['env']['STAGE_ENV_VARIABLE'])['to']['be']['undefined'];
    }), it('should\x20load\x20environment\x20variables\x20from\x20stage\x20.env\x20file\x20if\x20matching\x20stage', async () => {
        await conditionallyLoadDotenv({ 'stage': 'testing' }, { 'useDotenv': !![] }), expect(process['env']['DEFAULT_ENV_VARIABLE'])['to']['be']['undefined'], expect(process['env']['STAGE_ENV_VARIABLE'])['to']['equal']('valuefromstage');
    });
});
