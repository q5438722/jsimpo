it('creates source maps for .mjs output files by default', function () {
    var _0x117e11 = _0x1120, _0x1aea77 = require('fs'), _0x5279e5 = _0x1aea77[_0x117e11(263)](__filename, 'utf-8'), _0xa0ca1a = /sourceMappingURL\s*=\s*(.*)/[_0x117e11(264)](_0x5279e5);
    expect(_0xa0ca1a[1])[_0x117e11(265)](_0x117e11(266));
});