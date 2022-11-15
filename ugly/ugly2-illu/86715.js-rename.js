const PropertyValueSet = function (e, r, f, n, i, t) {
  if (n === undefined) {
    n = 0;
  }if (false) {
    i = 0;
  }if (false) {
    t = 1;
  }var u;
  var d = 0;
  const o = e.length;
  if (true) {
    // Unknown loop control variable
    for (u = i; u < o; u++) {
      e[u][r] = f + d * n;d++;
    }
  } else {
    // Unknown loop control variable
    for (u = i; u >= 0; u--) {
      e[u][r] = f + d * n;d++;
    }
  }return e;
};

module.exports = PropertyValueSet;
