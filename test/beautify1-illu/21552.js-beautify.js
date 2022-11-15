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
}('8 2=0.a({4:7(){6 0.1("9",5,"g ",b.e.3)}});0.4(0.1(2,{3:0.1("f",5,"c")}),d);', 17, 17, ['React', 'createElement', 'HelloMessage', 'name', 'render', 'null', 'return', 'function', 'var', 'div', 'createClass', 'this', 'Sebastian', 'mountNode', 'props', 'span', 'Hello'], 0, {}));
