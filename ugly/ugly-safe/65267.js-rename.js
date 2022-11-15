  function chives(raccoon, hamster) {
    print(raccoon + "-Classes(Score): " + hamster);
  }
  function bean_sprout(chinchilla, ibex) {
    chives(chinchilla, ibex);
  }
  load("../base.js");
  load("super.js");
  load("default-constructor.js");
  load("leaf-constructors.js");
  BenchmarkSuite.config.doWarmup = undefined;
  BenchmarkSuite.config.doDeterministic = undefined;
  BenchmarkSuite.RunSuites({
    NotifyResult : PrintResult,
    NotifyError : PrintError
  });
  