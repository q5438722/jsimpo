it('creates\x20source\x20maps\x20for\x20.mjs\x20output\x20files\x20by\x20default', function () {
    var _0x5a1736 = require('fs'), _0x66cf79 = _0x5a1736['readFileSync'](__filename, 'utf-8'), _0xf50a77 = /sourceMappingURL\s*=\s*(.*)/['exec'](_0x66cf79);
    expect(_0xf50a77[-0x2401 + -0x3d * -0x5d + 0xdd9])['toBe']('bundle0.mjs.map');
});
