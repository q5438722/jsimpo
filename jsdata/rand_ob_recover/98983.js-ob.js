const chai = require(_0x5efa07(124)), path = require(_0x5efa07(125)), overrideEnv = require('process-utils/override-env'), fs = require('fs'), conditionallyLoadDotenv = require('../../../../lib/cli/conditionally-load-dotenv');
chai['use'](require(_0x5efa07(126)));
const expect = require(_0x5efa07(124))['expect'];
function _0x4f4c(_0x31b605, _0xe97df7) {
    return _0x4f4c = function (_0x5cec5d, _0x4e5039) {
        _0x5cec5d = _0x5cec5d - (49 * -12 + 1 * 4907 + -4205);
        let _0x22003e = _0x4046[_0x5cec5d];
        return _0x22003e;
    }, _0x4f4c(_0x31b605, _0xe97df7);
}
describe(_0x5efa07(127), () => {
    const _0x14755d = _0x5efa07, _0x22ec40 = {
            'SEinn': _0x14755d(128),
            'iwXEk': _0x14755d(129),
            'Mexnw': _0x14755d(130),
            'gjicm': _0x14755d(131),
            'aqiNb': function (_0xb30bd0) {
                return _0xb30bd0();
            },
            'UGRYs': function (_0xe4bdb9, _0x342687, _0x226b86) {
                return _0xe4bdb9(_0x342687, _0x226b86);
            },
            'bwfkm': _0x14755d(132),
            'MRmfW': function (_0x47d790, _0x2b4485) {
                return _0x47d790(_0x2b4485);
            },
            'VrJip': function (_0x516b85, _0x27c04b) {
                return _0x516b85(_0x27c04b);
            },
            'KuLOh': _0x14755d(133),
            'jIFMo': function (_0x3688d8, _0x4c650c, _0x7e9a9b) {
                return _0x3688d8(_0x4c650c, _0x7e9a9b);
            },
            'GfXQi': function (_0x185bb8, _0x335559, _0x43c68e) {
                return _0x185bb8(_0x335559, _0x43c68e);
            },
            'sGVtd': _0x14755d(134)
        };
    let _0x7dba1e;
    before(async () => {
        const _0x5265dc = _0x14755d, _0x46f5c4 = _0x22ec40[_0x5265dc(135)];
        await fs[_0x5265dc(136)][_0x5265dc(137)](path[_0x5265dc(138)](_0x22ec40[_0x5265dc(139)]), _0x46f5c4);
        const _0x2fd9ab = _0x22ec40[_0x5265dc(140)], _0xb2acd9 = _0x22ec40['gjicm'];
        await fs[_0x5265dc(136)][_0x5265dc(137)](path[_0x5265dc(138)](_0x5265dc(141) + _0x2fd9ab), _0xb2acd9);
    }), _0x22ec40[_0x14755d(142)](beforeEach, () => {
        const _0x3e0a9c = _0x14755d;
        conditionallyLoadDotenv[_0x3e0a9c(143)](), {restoreEnv: _0x7dba1e} = _0x22ec40[_0x3e0a9c(144)](overrideEnv);
    }), _0x22ec40[_0x14755d(142)](afterEach, () => {
        const _0x236566 = _0x14755d;
        _0x7dba1e && _0x22ec40[_0x236566(144)](_0x7dba1e);
    }), _0x22ec40[_0x14755d(145)](it, _0x14755d(146), async () => {
        const _0x3561f5 = _0x14755d;
        await _0x22ec40['UGRYs'](conditionallyLoadDotenv, {}, { 'useDotenv': !![] }), expect(process[_0x3561f5(147)]['DEFAULT_ENV_VARIABLE'])['to'][_0x3561f5(148)](_0x22ec40[_0x3561f5(149)]), _0x22ec40[_0x3561f5(150)](expect, process[_0x3561f5(147)][_0x3561f5(151)])['to']['be'][_0x3561f5(152)];
    }), _0x22ec40[_0x14755d(153)](it, _0x22ec40['sGVtd'], async () => {
        const _0x963788 = _0x14755d;
        await _0x22ec40[_0x963788(154)](conditionallyLoadDotenv, { 'stage': _0x22ec40[_0x963788(140)] }, { 'useDotenv': !![] }), expect(process[_0x963788(147)]['DEFAULT_ENV_VARIABLE'])['to']['be'][_0x963788(152)], _0x22ec40[_0x963788(142)](expect, process[_0x963788(147)]['STAGE_ENV_VARIABLE'])['to']['equal'](_0x22ec40[_0x963788(155)]);
    });
});