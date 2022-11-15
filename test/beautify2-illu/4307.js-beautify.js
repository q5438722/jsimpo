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
}('0 8=3(\'../\');0 7=3(\'7\');0 6=3(\'e\').6;0 5=3(\'5\');6(\'1\',c(4){4.d(2);0 1=5.f(a+\'/1/i.k\');0 b=8(1,{g:a+\'/1\'});b.h(c(l,9){7.j(9,{4:4})})});', 22, 22, ['var', 'stream', '', 'require', 't', 'fs', 'test', 'vm', 'browserify', 'src', '__dirname', '', 'function', 'plan', 'tap', 'createReadStream', 'basedir', 'bundle', 'main', 'runInNewContext', 'js', 'err'], 0, {}));
