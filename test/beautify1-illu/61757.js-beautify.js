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
}('7 0={};4.3(0,"1",{6:8(){9"2"},b:a});5(0.1,"2");4.3(0,\'1\',{});5(0.1,"2");7 0={};4.3(0,"1",{6:8(){9"2"},b:a});5(0.1,"2");4.3(0,\'1\',{});5(0.1,"2");7 0={};4.3(0,"1",{6:8(){9"2"},b:a});5(0.1,"2");4.3(0,\'1\',{});5(0.1,"2");', 12, 12, ['obj', 'x', '42', 'defineProperty', 'Object', 'assertEquals', 'get', 'var', 'function', 'return', 'false', 'configurable'], 0, {}));