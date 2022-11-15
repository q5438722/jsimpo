'use strict';
const chai = require('chai');
const path = require('path');
const overrideEnv = require('process-utils/override-env');
const fs = require('fs');
const conditionallyLoadDotenv = require('../../../../lib/cli/conditionally-load-dotenv');
chai['use'](require('chai-as-promised'));
const expect = require('chai')['expect'];
describe('test/unit/lib/cli/conditionally-load-dotenv.test.js', () => {
    let _0x479608;
    before(async () => {
        const _0x38b0aa = 'DEFAULT_ENV_VARIABLE=valuefromdefault';
        await fs['promises']['writeFile'](path['resolve']('.env'), _0x38b0aa);
        const _0x1032b7 = 'testing';
        const _0x2b1214 = 'STAGE_ENV_VARIABLE=valuefromstage';
        await fs['promises']['writeFile'](path['resolve']('.env.' + _0x1032b7), _0x2b1214);
    });
    beforeEach(() => {
        conditionallyLoadDotenv['clear']();
        ({restoreEnv} = overrideEnv());
    });
    afterEach(() => {
        _0x479608 && _0x479608();
    });
    it('should load environment variables from default .env file if no matching stage', async () => {
        await _0xfb7434['tWhQR'](conditionallyLoadDotenv, {}, { 'useDotenv': !![] });
        expect(process['env']['DEFAULT_ENV_VARIABLE'])['to']['equal']('valuefromdefault');
        expect(process['env']['STAGE_ENV_VARIABLE'])['to']['be']['undefined'];
    });
    it('should load environment variables from stage .env file if matching stage', async () => {
        await conditionallyLoadDotenv({ 'stage': 'testing' }, { 'useDotenv': !![] });
        expect(process['env']['DEFAULT_ENV_VARIABLE'])['to']['be']['undefined'];
        expect(process['env']['STAGE_ENV_VARIABLE'])['to']['equal']('valuefromstage');
    });
});