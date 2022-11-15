function foo() {
  // Unknown loop control variable
  for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) {
    n[o] = arguments[o];
  }const a = n[0];
}
