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
}('5["a"]=["+2##-###-####","+2#########","+0-9##-#######","+4##-###-####","+4#########","+0-8##-#######","+1##-###-####","+1#########","+0-7##-#######","+3##-###-####","+3#########","+0-6##-#######",];', 11, 11, ['91', '917', '919', '916', '918', 'module', '', '', '', '', 'exports'], 0, {}));
