const common = require(_0x18c122(200)), fixtures = require(_0x18c122(201)), assert = require(_0x18c122(202)), {exec} = require(_0x18c122(203)), nodeBinary = process[_0x18c122(204)][0];
if (!common[_0x18c122(205)])
    common['skip'](_0x18c122(206));
const selfRefModule = fixtures[_0x18c122(207)](_0x18c122(208)), fixtureA = fixtures['path'](_0x18c122(209));
exec('"' + nodeBinary + _0x18c122(210) + fixtureA + '"', { 'cwd': selfRefModule }, (_0x3eb602, _0x172f6a, _0x593a00) => {
    const _0x4251c9 = _0x18c122;
    assert[_0x4251c9(211)](_0x3eb602), assert[_0x4251c9(212)](_0x172f6a, 'A\n');
});