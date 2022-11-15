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
}('2("(4(0)) =>",3,"8 5 7 6");2("4(0) =>",3,"g k i h j");2("(a, 4(0)) =>",3,"8 5 7 6");2("(1, 4(0)) =>",3,"8 5 7 6");2("(b(0)) =>",3,"\'b\' o l n");2("(m(0)) =>",3,"8 5 7 6");2("[4(0).9] = [1];",e,"0 f d c");2("[[4(0).9]] = [[1]];",e,"0 f d c");2("(4(0)) =>",3,"8 5 7 6");2("4(0) =>",3,"g k i h j");2("(a, 4(0)) =>",3,"8 5 7 6");2("(1, 4(0)) =>",3,"8 5 7 6");2("(b(0)) =>",3,"\'b\' o l n");2("(m(0)) =>",3,"8 5 7 6");2("[4(0).9] = [1];",e,"0 f d c");2("[[4(0).9]] = [[1]];",e,"0 f d c");', 25, 25, ['foo', '', 'assertThrows', 'SyntaxError', 'import', 'destructuring', 'target', 'assignment', 'Invalid', 'then', '', 'super', 'defined', 'not', 'ReferenceError', 'is', 'Malformed', 'parameter', 'function', 'list', 'arrow', 'unexpected', 'bar', 'here', 'keyword'], 0, {}));
