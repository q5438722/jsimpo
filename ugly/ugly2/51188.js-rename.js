"use strict";const common=require("../common.js");const bench=common.createBenchmark(main,{n:[100]});const vm=require("vm");const ctxFn=new vm.Script(`
  var b = Math.random();
  var c = a + b;
`);function main({n:t}){bench.start();let c;for(let n=0;n<t;n++){c=vm.createContext({a:"a"})}bench.end(t);ctxFn.runInContext(c)}