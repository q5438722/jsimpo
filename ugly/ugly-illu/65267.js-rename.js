load("../base.js");load("super.js");load("default-constructor.js");load("leaf-constructors.js");var success = true;
function PrintResult(r, e) {
  print(r + "-Classes(Score): " + e);
}function PrintError(r, e) {
  PrintResult(r, e);success = false;
}BenchmarkSuite.config.doWarmup = undefined;BenchmarkSuite.config.doDeterministic = undefined;BenchmarkSuite.RunSuites({ NotifyResult: PrintResult, NotifyError: PrintError });