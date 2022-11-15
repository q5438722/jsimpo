'use strict';

const common = require('../common.js');

const bench = common.createBenchmark(main, {
  n: ['1']
});

const vm = require('vm');

const ctxFn = new vm.Script(`
  var b = Math.random();
  var c = a + b;
`);


function main({ n }) {
  bench.start();
  var context;

  // Unevaluable loop test expression
  for (let i = 0; i < n; i++) {
    context = vm.createContext({ a: 'a' });
  }
  bench.end(n);
  ctxFn.runInContext(context);
}
