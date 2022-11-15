const common = require(_0x1770d5(310)), tmpdir = require('../common/tmpdir'), assert = require(_0x1770d5(311)), fs = require('fs'), path = require(_0x1770d5(312));
tmpdir[_0x1770d5(313)]();
{
    assert[_0x1770d5(314)](() => fs[_0x1770d5(315)](path[_0x1770d5(316)](tmpdir[_0x1770d5(312)], _0x1770d5(317)), { 'recursive': !![] }), { 'code': 'ENOENT' });
}
function _0x39d7(_0x208c8d, _0x484bdb) {
    return _0x39d7 = function (_0x4ab0f8, _0x4b0da0) {
        _0x4ab0f8 = _0x4ab0f8 - (9 * -304 + 8656 + -11 * 511);
        let _0x201228 = _0x3817[_0x4ab0f8];
        return _0x201228;
    }, _0x39d7(_0x208c8d, _0x484bdb);
}
{
    fs['rmdir'](path[_0x1770d5(316)](tmpdir[_0x1770d5(312)], 'noexist.txt'), { 'recursive': !![] }, common['mustCall'](_0x4caca7 => {
        const _0x41a434 = _0x1770d5, _0x209e5f = { 'Wiopb': 'ENOENT' };
        assert['strictEqual'](_0x4caca7[_0x41a434(318)], _0x209e5f[_0x41a434(319)]);
    }));
}
{
    assert[_0x1770d5(320)](() => fs[_0x1770d5(321)][_0x1770d5(322)](path['join'](tmpdir[_0x1770d5(312)], _0x1770d5(317)), { 'recursive': !![] }), { 'code': _0x1770d5(323) })['then'](common[_0x1770d5(324)]());
}