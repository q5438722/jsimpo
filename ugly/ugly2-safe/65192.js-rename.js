  function chives(raccoon, hamster) {
    console.log(raccoon);
    console.log(raccoon + "-Dates(Score): " + hamster);
  }
  function bean_sprout(chinchilla, ibex) {
    chives(chinchilla, ibex);
  }
  load("../base.js");
  load("toLocaleString.js");
  BenchmarkSuite.config.doWarmup = undefined;
  BenchmarkSuite.config.doDeterministic = undefined;
  BenchmarkSuite.RunSuites({
    NotifyResult : PrintResult,
    NotifyError : PrintError
  });
  