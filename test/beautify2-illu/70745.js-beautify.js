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
}('4("5 3 2 0 1.6 7 c b a 8:9",d(){});4("5 3 2 0 1.6 7 c b a 8:9",d(){});', 14, 14, ['when', 'output', 'successfully', 'compile', 'it', 'should', 'library', 'is', 'type', 'name', 'of', 'object', 'an', 'function'], 0, {}));
