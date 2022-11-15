eval(function (p, a, c, k, e, d) {
  e = function (c) {
    return c;
  };if (!''.replace(/^/, String)) {
    while (c--) {
      d[c] = k[c] || c;
    }k = [function (e) {
      return d[e];
    }];e = function () {
      return '\\w+';
    };c = 1;
  };while (c--) {
    if (k[c]) {
      p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    }
  }return p;
}('3 2 1 4{5(){7 0=()=>6;0();8()}}3 2 1 4{5(){7 0=()=>6;0();8()}}3 2 1 4{5(){7 0=()=>6;0();8()}}3 2 1 4{5(){7 0=()=>6;0();8()}}3 2 1 4{5(){7 0=()=>6;0();8()}}', 9, 9, ['fn', 'extends', 'Foo', 'class', 'Bar', 'constructor', 'this', 'const', 'super'], 0, {}));
