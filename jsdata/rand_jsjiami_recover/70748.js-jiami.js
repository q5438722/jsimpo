it('creates source maps for .mjs output files by default', function () {
    var _0x491144 = require('fs');
    var _0x4780ca = _0x491144['readFileSync'](__filename, 'utf-8');
    var _0x106371 = /sourceMappingURL\s*=\s*(.*)/['exec'](_0x4780ca);
    expect(_0x106371[1])['toBe']('bundle0.mjs.map');
});