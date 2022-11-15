new BenchmarkSuite("ES5", [1e3], [new Benchmark("ES5", false, false, 0, ES5)]);function Point(n, t) {
  this.x = n;this.y = t;
}function MyPoint() {
  Point.apply(this, arguments);
}function makePoint(n, t) {
  return new MyPoint(n, t);
}function ES5() {
  "use strict";
  return makePoint(1, 2);
}
