load("../base.js");load("tagged-template.js");load("array-indexof-includes.js");load("spread-call.js");load("has-own-property.js");load("array-map.js");load("array-reduce.js");function PrintResult(e, r) {
  console.log(e);console.log(e + "-Numbers(Score): " + r);
}function PrintError(e, r) {
  PrintResult(e, r);
}BenchmarkSuite.config.doWarmup = undefined;BenchmarkSuite.config.doDeterministic = undefined;BenchmarkSuite.RunSuites({ NotifyResult: PrintResult, NotifyError: PrintError });
