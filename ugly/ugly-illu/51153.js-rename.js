"use strict";

const common = require("../common.js");

const assert = require("assert");

const primValues = { string: "a", number: 1, object: { 0: "a" }, array: [1, 2, 3] };
const bench = common.createBenchmark(main, { primitive: Object.keys(primValues), n: [2e4], strict: [0, 1], method: ["deepEqual", "notDeepEqual"] });
function main({ n: t, primitive: e, method: n, strict: s }) {
  const c = primValues[e];
  const r = c;
  const o = c;
  const i = "b";
  if (s) {
    n = n.replace("eep", "eepStrict");
  }const a = assert[n];
  const m = n.includes("not") ? i : o;
  bench.start();for (let e = 0; e < t; ++e) {
    a([primValues[e]], [n.includes("not") ? i : o]);
  }bench.end(t);
}
