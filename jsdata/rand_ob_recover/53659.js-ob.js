const common = require(_0x554ae5(239)), fixtures = require('../common/fixtures'), assert = require(_0x554ae5(240)), {exec} = require(_0x554ae5(241)), nodeBinary = process['argv'][-1291 * 1 + 2398 + -369 * 3];
if (!common[_0x554ae5(242)])
    common[_0x554ae5(243)](_0x554ae5(244));
const selfRefModule = fixtures[_0x554ae5(245)](_0x554ae5(246)), fixtureA = fixtures[_0x554ae5(245)](_0x554ae5(247));
exec('"' + nodeBinary + _0x554ae5(248) + fixtureA + '"', { 'cwd': selfRefModule }, (_0x37fda1, _0x26db5d, _0x3879dc) => {
    const _0x3d53b0 = _0x554ae5;
    assert[_0x3d53b0(249)](_0x37fda1), assert[_0x3d53b0(250)](_0x26db5d, 'A\n');
});