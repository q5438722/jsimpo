it('should handle var injection in require.ensure with error callback', function (_0x467889) {
    var _0x614f9d = _0x1a05, _0x5d6fbf = {
            'ENOIW': function (_0x3acd2f, _0x201311) {
                return _0x3acd2f(_0x201311);
            }
        };
    require[_0x614f9d(465)]([], function (_0x218cac) {
        var _0x14924b = _0x614f9d;
        _0x5d6fbf[_0x14924b(466)](_0x218cac, _0x14924b(467));
        var _0x27f3e1 = module['x'];
        _0x467889();
    }, function (_0x16ccbf) {
    }, _0x614f9d(468));
});