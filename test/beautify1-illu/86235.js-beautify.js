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
}('5 0=2(\'../../4/3\');5 1=2(\'../../4/3\');6(7 a){0=2(\'./8\')}b.9={0:0,1:1};', 12, 12, ['renderWebGL', 'renderCanvas', 'require', 'NOOP', 'utils', 'var', 'if', 'typeof', 'PointLightWebGLRenderer', 'exports', 'WEBGL_RENDERER', 'module'], 0, {}));