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
}('9.a=[\'#8 c 7\',\'\',\'5 6 0;\',\'\',\'4 b 1;\',\'4 0 3;\',\'\',\'d i 2;\',\'\',\'j h ()\',\'{\',\'    g = e(1, 2) * 3;\',\'}\',\'\'].f(\'\\k\');', 21, 21, ['float', 'uMainSampler', 'outTexCoord', 'uBrightness', 'uniform', 'precision', 'mediump', 'PHASER_COPY_FS', 'define', 'module', 'exports', 'sampler2D', 'SHADER_NAME', 'varying', 'texture2D', 'join', 'gl_FragColor', 'main', 'vec2', 'void', 'n'], 0, {}));