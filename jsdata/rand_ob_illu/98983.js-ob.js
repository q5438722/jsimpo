'use strict';

const _0x4046 = ['SEinn', 'promises', 'writeFile', 'resolve', 'iwXEk', 'Mexnw', '.env.', 'VrJip', 'clear', 'aqiNb', 'jIFMo', 'should load environment variables from default .env file if no matching stage', 'env', 'equal', 'bwfkm', 'MRmfW', 'STAGE_ENV_VARIABLE', 'undefined', 'GfXQi', 'UGRYs', 'KuLOh', '748389ztvznA', '687224CZcEwm', '1843783RzAEUo', '1XeDSwg', '236661tgLTok', '1860071newkZJ', '1wBtojK', '1061430NnypcR', '1xpoVDM', '3381685XSIqrf', 'chai', 'path', 'chai-as-promised', 'test/unit/lib/cli/conditionally-load-dotenv.test.js', 'DEFAULT_ENV_VARIABLE=valuefromdefault', '.env', 'testing', 'STAGE_ENV_VARIABLE=valuefromstage', 'valuefromdefault', 'valuefromstage', 'should load environment variables from stage .env file if matching stage'];
const _0x5efa07 = _0x4f4c;

(function (_0x1b6095, _0x40b2ef) {
    const _0x21106e = _0x4f4c;

    while (true) {
        try {
            const _0x1ebc93 = parseInt(_0x21106e(0x72)) + parseInt(_0x21106e(0x73)) + parseInt(_0x21106e(0x74)) + -parseInt(_0x21106e(0x75)) * -parseInt(_0x21106e(0x76)) + -parseInt(_0x21106e(0x77)) * -parseInt(_0x21106e(0x78)) + -parseInt(_0x21106e(0x79)) + -parseInt(_0x21106e(0x7a)) * parseInt(_0x21106e(0x7b));

            if (_0x1ebc93 === _0x40b2ef) break;else _0x1b6095.push(_0x1b6095.shift());
        } catch (_0x32733d) {
            _0x1b6095.push(_0x1b6095.shift());
        }
    }
})(_0x4046, 933013);

const chai = require(_0x5efa07(0x7c));

const path = require(_0x5efa07(0x7d));

const overrideEnv = require('process-utils/override-env');

const fs = require('fs');

const conditionallyLoadDotenv = require('../../../../lib/cli/conditionally-load-dotenv');

chai.use(require(_0x5efa07(0x7e)));

const expect = require(_0x5efa07(0x7c)).expect;

function _0x4f4c(_0x31b605, _0xe97df7) {
    return _0x4f4c = function (_0x5cec5d, _0x4e5039) {
        _0x5cec5d = _0x5cec5d - 114;
        const _0x22003e = _0x4046[_0x5cec5d];

        return _0x22003e;
    }, _0x4f4c(_0x31b605, _0xe97df7);
}
describe(_0x5efa07(0x7f), () => {
    const _0x14755d = _0x5efa07;
    const _0x22ec40 = {
        'SEinn': _0x14755d(0x80),
        'iwXEk': _0x14755d(0x81),
        'Mexnw': _0x14755d(0x82),
        'gjicm': _0x14755d(0x83),
        'aqiNb': function (_0xb30bd0) {
            return _0xb30bd0();
        },
        'UGRYs': function (_0xe4bdb9, _0x342687, _0x226b86) {
            return _0xe4bdb9(_0x342687, _0x226b86);
        },
        'bwfkm': _0x14755d(0x84),
        'MRmfW': function (_0x47d790, _0x2b4485) {
            return _0x47d790(_0x2b4485);
        },
        'VrJip': function (_0x516b85, _0x27c04b) {
            return _0x516b85(_0x27c04b);
        },
        'KuLOh': _0x14755d(0x85),
        'jIFMo': function (_0x3688d8, _0x4c650c, _0x7e9a9b) {
            return _0x3688d8(_0x4c650c, _0x7e9a9b);
        },
        'GfXQi': function (_0x185bb8, _0x335559, _0x43c68e) {
            return _0x185bb8(_0x335559, _0x43c68e);
        },
        'sGVtd': _0x14755d(0x86)
    };

    var _0x7dba1e;

    before(async () => {
        const _0x5265dc = _0x14755d;

        const _0x46f5c4 = _0x22ec40[_0x5265dc(0x87)];

        await fs[_0x5265dc(0x88)][_0x5265dc(0x89)](path[_0x5265dc(0x8a)](_0x22ec40[_0x5265dc(0x8b)]), _0x46f5c4);

        const _0x2fd9ab = _0x22ec40[_0x5265dc(0x8c)];

        const _0xb2acd9 = _0x22ec40.gjicm;

        await fs[_0x5265dc(0x88)][_0x5265dc(0x89)](path[_0x5265dc(0x8a)](_0x5265dc(0x8d) + _0x2fd9ab), _0xb2acd9);
    }), _0x22ec40[_0x14755d(0x8e)](beforeEach, () => {
        const _0x3e0a9c = _0x14755d;

        conditionallyLoadDotenv[_0x3e0a9c(0x8f)](), ({ restoreEnv: _0x7dba1e } = _0x22ec40[_0x3e0a9c(0x90)](overrideEnv));
    }), _0x22ec40[_0x14755d(0x8e)](afterEach, () => {
        const _0x236566 = _0x14755d;

        _0x7dba1e && _0x22ec40[_0x236566(0x90)](_0x7dba1e);
    }), _0x22ec40[_0x14755d(0x91)](it, _0x14755d(0x92), async () => {
        const _0x3561f5 = _0x14755d;

        await _0x22ec40.UGRYs(conditionallyLoadDotenv, {}, { 'useDotenv': true }), expect(process[_0x3561f5(0x93)].DEFAULT_ENV_VARIABLE).to[_0x3561f5(0x94)](_0x22ec40[_0x3561f5(0x95)]), _0x22ec40[_0x3561f5(0x96)](expect, process[_0x3561f5(0x93)][_0x3561f5(0x97)]).to.be[_0x3561f5(0x98)];
    }), _0x22ec40[_0x14755d(0x99)](it, _0x22ec40.sGVtd, async () => {
        const _0x963788 = _0x14755d;

        await _0x22ec40[_0x963788(0x9a)](conditionallyLoadDotenv, { 'stage': _0x22ec40[_0x963788(0x8c)] }, { 'useDotenv': true }), expect(process[_0x963788(0x93)].DEFAULT_ENV_VARIABLE).to.be[_0x963788(0x98)], _0x22ec40[_0x963788(0x8e)](expect, process[_0x963788(0x93)].STAGE_ENV_VARIABLE).to.equal(_0x22ec40[_0x963788(0x9b)]);
    });
});
