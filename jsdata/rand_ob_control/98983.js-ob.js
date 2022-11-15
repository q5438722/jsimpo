'use strict';
const chai = require('chai'), path = require('path'), overrideEnv = require('process-utils/override-env'), fs = require('fs'), conditionallyLoadDotenv = require('../../../../lib/cli/conditionally-load-dotenv');
chai['use'](require('chai-as-promised'));
const expect = require('chai')['expect'];
describe('test/unit/lib/cli/conditionally-load-dotenv.test.js', () => {
    const _0x3dcdf1 = {
        'kKZeH': 'DEFAULT_ENV_VARIABLE=valuefromdefault',
        'vkYBo': '.env',
        'ShMer': 'testing',
        'SJWqE': 'STAGE_ENV_VARIABLE=valuefromstage',
        'yUdQk': function (_0x11a72a) {
            return _0x11a72a();
        },
        'qbsdj': function (_0x4e7310, _0x4c673b, _0x5d2b37) {
            return _0x4e7310(_0x4c673b, _0x5d2b37);
        },
        'njaLT': function (_0x3706a8, _0x193625) {
            return _0x3706a8(_0x193625);
        },
        'pWWjY': 'valuefromdefault',
        'vnVYr': 'valuefromstage',
        'EqFpq': function (_0x47de80, _0x2548a5) {
            return _0x47de80(_0x2548a5);
        },
        'XNPjO': function (_0x5f1f2, _0x941153) {
            return _0x5f1f2(_0x941153);
        },
        'nRhOa': function (_0x116ce2, _0x546ddf) {
            return _0x116ce2(_0x546ddf);
        },
        'ojgiO': 'should\x20load\x20environment\x20variables\x20from\x20default\x20.env\x20file\x20if\x20no\x20matching\x20stage',
        'FyNFx': function (_0x1789e1, _0x33a826, _0x2a597f) {
            return _0x1789e1(_0x33a826, _0x2a597f);
        },
        'CIJtS': 'should\x20load\x20environment\x20variables\x20from\x20stage\x20.env\x20file\x20if\x20matching\x20stage'
    };
    let _0x281ed0;
    _0x3dcdf1['EqFpq'](before, async () => {
        const _0x5af281 = _0x3dcdf1['kKZeH'];
        await fs['promises']['writeFile'](path['resolve'](_0x3dcdf1['vkYBo']), _0x5af281);
        const _0x183974 = _0x3dcdf1['ShMer'], _0x38a0fe = _0x3dcdf1['SJWqE'];
        await fs['promises']['writeFile'](path['resolve']('.env.' + _0x183974), _0x38a0fe);
    }), _0x3dcdf1['XNPjO'](beforeEach, () => {
        conditionallyLoadDotenv['clear'](), {restoreEnv: _0x281ed0} = _0x3dcdf1['yUdQk'](overrideEnv);
    }), _0x3dcdf1['nRhOa'](afterEach, () => {
        _0x281ed0 && _0x3dcdf1['yUdQk'](_0x281ed0);
    }), _0x3dcdf1['qbsdj'](it, _0x3dcdf1['ojgiO'], async () => {
        await _0x3dcdf1['qbsdj'](conditionallyLoadDotenv, {}, { 'useDotenv': !![] }), _0x3dcdf1['njaLT'](expect, process['env']['DEFAULT_ENV_VARIABLE'])['to']['equal'](_0x3dcdf1['pWWjY']), _0x3dcdf1['njaLT'](expect, process['env']['STAGE_ENV_VARIABLE'])['to']['be']['undefined'];
    }), _0x3dcdf1['FyNFx'](it, _0x3dcdf1['CIJtS'], async () => {
        await _0x3dcdf1['qbsdj'](conditionallyLoadDotenv, { 'stage': _0x3dcdf1['ShMer'] }, { 'useDotenv': !![] }), _0x3dcdf1['njaLT'](expect, process['env']['DEFAULT_ENV_VARIABLE'])['to']['be']['undefined'], _0x3dcdf1['njaLT'](expect, process['env']['STAGE_ENV_VARIABLE'])['to']['equal'](_0x3dcdf1['vnVYr']);
    });
});
