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
}('8 3(1,0){4(!1&&!0){2 9}4(!1||!0){2 a}2(1.5==0.5&&3(1.7,0.7)&&3(1.6,0.6))}', 11, 11, ['node2', 'node1', 'return', 'treeEqual', 'if', 'val', 'right', 'left', 'function', 'true', 'false'], 0, {}));