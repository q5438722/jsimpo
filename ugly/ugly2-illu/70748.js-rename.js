it("creates source maps for .mjs output files by default", function () {
  const e = require("fs");

  const a = e.readFileSync(__filename, "utf-8");
  const r = /sourceMappingURL\s*=\s*(.*)/.exec(a);
  expect(r[1]).toBe("bundle0.mjs.map");
});
