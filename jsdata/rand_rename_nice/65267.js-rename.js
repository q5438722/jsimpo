'use strict';
load("../base.js");
load("super.js");
load("default-constructor.js");
load("leaf-constructors.js");
var success = true;
function PrintResult(name, result) {
  print(name + "-Classes(Score): " + result);
}
function PrintError(name, error) {
  PrintResult(name, error);
  success = false;
}
BenchmarkSuite.config.doWarmup = undefined;
BenchmarkSuite.config.doDeterministic = undefined;
BenchmarkSuite.RunSuites({
  NotifyResult : PrintResult,
  NotifyError : PrintError
});
