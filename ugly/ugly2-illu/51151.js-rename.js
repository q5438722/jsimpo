"use strict";

const common = require("../common.js");

var { PerformanceObserver, performance } = require("perf_hooks");

const bench = common.createBenchmark(main, { n: [1e5], observe: ["all", "measure"] });
function test() {
  ;performance.mark("a");performance.mark("b");performance.measure("a to b", "a", "b");
}function main({ n: e, observe: r }) {
  const n = r === "all" ? ["mark", "measure"] : [r];
  const o = new PerformanceObserver(() => {
    bench.end(e);
  });
  o.observe({ entryTypes: n, buffered: true });bench.start();performance.mark("start");for (let e = 0; e < 1e5; e++) {
    ;performance.mark("a");performance.mark("b");performance.measure("a to b", "a", "b");
  }
}