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
}('3 8=d(0,1,2){3 6=4.9(0.1,1);3 a=4.7(0.e,1);0.1=6;0.c=a-6;3 5=4.9(0.2,2);3 b=4.7(0.f,2);0.2=5;0.j=b-5;i 0};h.g=8;', 20, 20, ['target', 'x', 'y', 'var', 'Math', 'minY', 'minX', 'max', 'MergeXY', 'min', 'maxX', 'maxY', 'width', 'function', 'right', 'bottom', 'exports', 'module', 'return', 'height'], 0, {}));
