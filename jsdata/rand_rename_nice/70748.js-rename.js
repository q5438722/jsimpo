'use strict';
it("creates source maps for .mjs output files by default", function() {
  var fs = require("fs");
  var level = fs.readFileSync(__filename, "utf-8");
  var adjustedLevel = /sourceMappingURL\s*=\s*(.*)/.exec(level);
  expect(adjustedLevel[1]).toBe("bundle0.mjs.map");
});

