"use strict";
load("../base.js");load("abstract-equality.js");var success = true;
function PrintResult(r, t) {
  print(`Operators-${r}(Score): ${t}`);
}function PrintError(r, t) {
  PrintResult(r, t);success = false;
}BenchmarkSuite.config.doWarmup = undefined;BenchmarkSuite.config.doDeterministic = undefined;BenchmarkSuite.RunSuites({ NotifyResult: PrintResult, NotifyError: PrintError });