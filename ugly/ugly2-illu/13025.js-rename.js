const oneOf = function () {
  // Unknown loop control variable
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) {
    n[r] = arguments[r];
  }if (n.length === 1) {
    return n[0];
  }return new OneOfNode(n);
};
