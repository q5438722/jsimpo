const SafeRange = require("./SafeRange");

const CountAllMatching = function (e, n, a, f, r) {
  if (f === undefined) {
    f = 0;
  }if (r === undefined) {
    r = e.length;
  }var i = 0;
  if (SafeRange(e, f, r)) {
    for (var t = f; t < r; t++) {
      const u = e[t];
      if (u[n] === a) {
        i++;
      }
    }
  }return i;
};

module.exports = CountAllMatching;
