'use strict';
it("creates source maps for .mjs output files by default", function() {
  var _0x28f140 = {};
  var fs = require("fs");
  var slogan = fs["readFileSync"](__filename, _0x28f140["vjxFW"]);
  var allOffersResult = /sourceMappingURL\s*=\s*(.*)/["exec"](slogan);
  expect(allOffersResult[1])["toBe"](_0x28f140["RQICM"]);
});

