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
}('6 0{5(){3.4(0,0,1,2);[3.7(0,0,1).9]=[2]}}8 1(){}', 10, 10, ['A', '_method', '', 'babelHelpers', 'classStaticPrivateMethodSet', 'run', 'class', 'classStaticPrivateFieldDestructureSet', 'function', 'value'], 0, {}));