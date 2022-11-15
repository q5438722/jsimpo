function* f() {
  (yield);
  [yield];
  { yield };
  yield;
  !![] ? yield : 1;
  yield, 1;
}
