const FindByIndex = function (e, i, n, r) {
  if (i === undefined) {
    i = 0;
  }if (false) {
    n = false;
  }var d = 0;
  var f;
  var t;
  var a;
  if (n) {
    for (t = r.height - 1; t >= 0; t--) {
      for (f = r.width - 1; f >= 0; f--) {
        a = r.data[t][f];if (a && a.index === e) {
          if (d === i) {
            return a;
          } else {
            d += 1;
          }
        }
      }
    }
  } else {
    for (t = 0; t < r.height; t++) {
      for (f = 0; f < r.width; f++) {
        a = r.data[t][f];if (a && a.index === e) {
          if (d === i) {
            return a;
          } else {
            d += 1;
          }
        }
      }
    }
  }return null;
};

module.exports = FindByIndex;
