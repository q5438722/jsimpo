it('creates source maps for .mjs output files by default',function(){var _0x28f140={'vjxFW':'utf-8','RQICM':'bundle0.mjs.map'};var _0x491144=require('fs');var _0x4780ca=_0x491144['readFileSync'](__filename,_0x28f140['vjxFW']);var _0x106371=/sourceMappingURL\s*=\s*(.*)/['exec'](_0x4780ca);expect(_0x106371[0x1])['toBe'](_0x28f140['RQICM']);});