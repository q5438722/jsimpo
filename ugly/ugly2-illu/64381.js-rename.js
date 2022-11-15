var global = 1;
global = 2;function f() {
  const a = { a: 1 };
  global = "a";for (var l = global; l < 2; l++) {
    delete a[l];
  }
}const a = { a: 1 };
global = "a";for (var l = global; l < 2; l++) {
  delete a[l];
}
