  function chives(raccoon, hamster) {
    console.log(raccoon);
    console.log(raccoon + '-Numbers(Score): ' + hamster);
  }
  function bean_sprout(chinchilla, ibex) {
    chives(chinchilla, ibex);
  }
  load('../base.js');
  load('tagged-template.js');
  load('array-indexof-includes.js');
  load('spread-call.js');
  load('has-own-property.js');
  load('array-map.js');
  load('array-reduce.js');
  BenchmarkSuite.config.doWarmup = undefined;
  BenchmarkSuite.config.doDeterministic = undefined;
  BenchmarkSuite.RunSuites({
    NotifyResult : PrintResult,
    NotifyError : PrintError
  });
  