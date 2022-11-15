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
}('2["3"]=["#{0}, \u067E\u0644\u0627\u06A9 #{1}","#{0}, #{0}, \u067E\u0644\u0627\u06A9 #{1}"];', 4, 4, ['street_name', 'building_number', 'module', 'exports'], 0, {}));
