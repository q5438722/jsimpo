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
}('8 4=1.0;7{1.0=6;9=2.3(\'5\')}e{1.0=4}b=2.3(\'5/d.a\').c;', 15, 15, ['noDeprecation', 'process', 'Npm', 'require', 'oldNoDeprecationValue', 'mongodb', 'true', 'try', 'const', 'NpmModuleMongodb', 'json', 'NpmModuleMongodbVersion', 'version', 'package', 'finally'], 0, {}));
