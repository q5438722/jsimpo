it("creates source maps for .mjs output files by default", function () {
	const fs = require("fs");

	const source = fs.readFileSync(__filename, "utf-8");
	const match = /sourceMappingURL\s*=\s*(.*)/.exec(source);

	expect(match[1]).toBe("bundle+[].mjs.map");
});
