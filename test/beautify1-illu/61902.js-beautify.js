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
}('8 1=/a/9;8 3="b";1.6(3);4(5,1.2);1.2=0;1.6(3);4(5,1.2);1.2=0;1.6(3);4(5,1.2);1=/a/9;1.7(3);4(5,1.2);1.2=0;1.7(3);4(5,1.2);1.2=0;1.7(3);4(5,1.2);', 12, 12, ['', 're', 'lastIndex', 'str', 'assertEquals', '', 'test', 'exec', 'var', 'g', '', 'bbbbabbbbabbbb'], 0, {}));
