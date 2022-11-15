load("../base.js");load("toLocaleString.js");function PrintResult(e, n) {
  console.log(e);console.log(e + "-Dates(Score): " + n);
}function PrintError(e, n) {
  PrintResult(e, n);
}BenchmarkSuite.config.doWarmup = undefined;BenchmarkSuite.config.doDeterministic = undefined;BenchmarkSuite.RunSuites({ NotifyResult: PrintResult, NotifyError: PrintError });
