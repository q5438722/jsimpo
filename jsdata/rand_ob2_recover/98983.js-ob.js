function _0xc700(_0x4ce3b9, _0x5d3e45) {
    return _0xc700 = function (_0x35bc09, _0xc700d1) {
        _0x35bc09 = _0x35bc09 - 129;
        let _0x1f82f2 = _0x35bc[_0x35bc09];
        return _0x1f82f2;
    }, _0xc700(_0x4ce3b9, _0x5d3e45);
}
const chai = require('chai'), path = require(_0x4e6231(138)), overrideEnv = require('process-utils/override-env'), fs = require('fs'), conditionallyLoadDotenv = require(_0x4e6231(139));
chai[_0x4e6231(140)](require(_0x4e6231(141)));
const expect = require('chai')['expect'];
describe('test/unit/lib/cli/conditionally-load-dotenv.test.js', () => {
    const _0x56b5d2 = _0x4e6231;
    let _0x48c806;
    before(async () => {
        const _0x20c8ef = _0xc700, _0x3aaeb4 = _0x20c8ef(142);
        await fs[_0x20c8ef(143)][_0x20c8ef(144)](path[_0x20c8ef(145)](_0x20c8ef(146)), _0x3aaeb4);
        const _0x363826 = _0x20c8ef(147), _0x2b1679 = _0x20c8ef(148);
        await fs[_0x20c8ef(143)][_0x20c8ef(144)](path[_0x20c8ef(145)](_0x20c8ef(149) + _0x363826), _0x2b1679);
    }), beforeEach(() => {
        conditionallyLoadDotenv['clear'](), {restoreEnv: _0x48c806} = overrideEnv();
    }), afterEach(() => {
        _0x48c806 && _0x48c806();
    }), it(_0x56b5d2(150), async () => {
        const _0x5418c3 = _0x56b5d2;
        await conditionallyLoadDotenv({}, { 'useDotenv': !![] }), expect(process[_0x5418c3(151)]['DEFAULT_ENV_VARIABLE'])['to'][_0x5418c3(152)](_0x5418c3(153)), expect(process['env'][_0x5418c3(154)])['to']['be']['undefined'];
    }), it(_0x56b5d2(155), async () => {
        const _0x198826 = _0x56b5d2;
        await conditionallyLoadDotenv({ 'stage': _0x198826(147) }, { 'useDotenv': !![] }), expect(process[_0x198826(151)][_0x198826(156)])['to']['be'][_0x198826(157)], expect(process[_0x198826(151)][_0x198826(154)])['to']['equal'](_0x198826(158));
    });
});