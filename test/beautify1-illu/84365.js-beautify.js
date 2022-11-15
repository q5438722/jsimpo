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
}('0.1=7(`./9.8`);5(4 2 6[`a`,`e`,`b`]){5(4 3 6 d.c(0.1[2]||{})){0.1[2][3]=7(3)}}', 15, 15, ['module', 'exports', 'key', 'dep', 'const', 'for', 'of', 'require', 'json', 'package', 'dependencies', 'peerDependencies', 'keys', 'Object', 'devDependencies'], 0, {}));
