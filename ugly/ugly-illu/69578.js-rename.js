require.ensure([], function (e) {
  e("./split.js");
});require.ensure([], function (e) {
  e("./split-2.js");
}, "split");it("sorts the usedIds array to prevent churn", function () {
  const e = require("fs");

  const r = require("path");

  const s = JSON.parse(e.readFileSync(r.join(__dirname, "records.json"), "utf-8"));
  expect(s.chunks.usedIds).toEqual([0, 1, 2]);
});
