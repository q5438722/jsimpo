"use strict";

const common = require("../common.js");

const bench = common.createBenchmark(main, { extraSize: [1, 256, 1024], n: [8e5] });
function main({ n: e, extraSize: n }) {
  const c = 4;
  const o = 256;
  const t = Array.from({ length: c }).fill(Buffer.allocUnsafe(o));
  const r = 1024 + n;
  bench.start();for (let n = 0; n < e; n++) {
    Buffer.concat(t, r);
  }bench.end(e);
}