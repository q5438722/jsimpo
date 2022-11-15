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
}('\'f g\';4 6=3(\'../../6\');4 1=3(\'1\');4 7=3(`./b/${6.c}/h`);7.i(2(9){1.a(9,\'o m\')});2 0(8){7.j(2(){1.a(n,8)},8)}0(k);0(l);0(5);0(d);0(\'e\');0([]);0({});', 25, 25, ['testRecv', 'assert', 'function', 'require', 'const', '', 'common', 'addon', 'desiredRecv', 'msg', 'strictEqual', 'build', 'buildType', 'true', 'Hello', 'use', 'strict', '3_callbacks', 'RunCallback', 'RunCallbackWithRecv', 'undefined', 'null', 'world', 'this', 'hello'], 0, {}));
