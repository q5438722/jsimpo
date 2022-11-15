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
}('9 2 8\'./2.7\';a 5=(4,3)=>{6 f.e(3).b((0,1)=>{0[`${4}.${1}`]=3[1];6 0},2)};d c 5;', 16, 16, ['acc', 'current', 'commonTrads', 'messages', 'pluginId', 'formatMessagesWithPluginId', 'return', 'json', 'from', 'import', 'const', 'reduce', 'default', 'export', 'keys', 'Object'], 0, {}));
