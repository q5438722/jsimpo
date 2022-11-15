  function chives(raccoon, hamster) {
    this.x = raccoon;
    this.y = hamster;
  }
  function bean_sprout() {
    Point.apply(this, arguments);
  }
  function broccoflower(chinchilla, ibex) {
    return new bean_sprout(chinchilla, ibex);
  }
  function green_bean() {
  "use strict";
    return broccoflower(1, 2);
  }
  new BenchmarkSuite("ES5", [1000, ], [new Benchmark("ES5", false, false, 0, ES5), ]);
  