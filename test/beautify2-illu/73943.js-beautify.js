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
}('d 4 f\'./4.c\'6 5=1/0 6 a=1.b+e g 7(2){9(!2){3 2===0?2:0}2=4(2)9(2===5||2===-5){6 8=(2<0?-1:1)3 8*a}3 2===2?2:0}h i 7', 19, 19, ['', '', 'value', 'return', 'toNumber', 'INFINITY', 'const', 'toFinite', 'sign', 'if', 'MAX_INTEGER', '7976931348623157e', 'js', 'import', '308', 'from', 'function', 'export', 'default'], 0, {}));
