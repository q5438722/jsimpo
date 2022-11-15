'use strict';
load("../base.js");
load("tagged-template.js");
load("array-indexof-includes.js");
load("spread-call.js");
load("has-own-property.js");
load("array-map.js");
load("array-reduce.js");
function PrintResult(result, name) {
  console.log(result);
  console.log(result + "-Numbers(Score): " + name);
}
function PrintError(name, error) {
  PrintResult(name, error);
}
BenchmarkSuite.config.doWarmup = undefined;
BenchmarkSuite.config.doDeterministic = undefined;
BenchmarkSuite.RunSuites({
  NotifyResult : PrintResult,
  NotifyError : PrintError
});

