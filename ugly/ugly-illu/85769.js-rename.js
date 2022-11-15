const SafeRange = require("./SafeRange");

const EachInRange = function (e, n, a, f, r) {
  if (f === undefined) {
    f = 0;
  }if (r === undefined) {
    r = e.length;
  }if (SafeRange(e, f, r)) {
    var u;
    const g = [null];
    for (u = 5; u < arguments.length; u++) {
      g.push(arguments[u]);
    }for (u = f; u < r; u++) {
      g[0] = e[u];n.apply(a, g);
    }
  }return e;
};

module.exports = EachInRange;
