eval(function (p, a, c, k, e, d) {
  e = function (c) {
    return c.toString(36);
  };if (!''.replace(/^/, String)) {
    while (c--) {
      d[c.toString(a)] = k[c] || c.toString(a);
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
}('a 2;7(2=0;2<6;2++){c(2){b 1:{g}}8 4=3;()=>4}e(2).f(6);a 5=0;7(2=0;2<6;2++){c(2){b 0:{h}}5++;8 4=3;()=>4}e(5).f(9);5=0;7(2=0;2<6;2++){c(2){b 0:{7(a d=0;d<6;d++){8 4=3;()=>4;5++;g}g}}8 4=3;()=>4}e(5).f(1);', 18, 18, ['', '', 'i', '', 'z', 'j', '10', 'for', 'const', '', 'var', 'case', 'switch', 'k', 'expect', 'toBe', 'break', 'continue'], 0, {}));