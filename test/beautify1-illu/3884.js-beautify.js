eval(function (p, a, c, k, e, d) {
  e = function (c) {
    return c;
  };if (!''.replace(/^/, String)) {
    while (c--) {
      d[c] = k[c] || c;
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
}('0["1"]=["\u0631\u0648\u0633\u062A\u0627","\u0634\u0647\u0631","\u062F\u0647\u06A9\u062F\u0647","\u0628\u0646\u062F\u0631","\u062F\u0698","\u0628\u0646\u062F\u0631\u06AF\u0627\u0647","\u0646\u0627\u062D\u06CC\u0647"];', 2, 2, ['module', 'exports'], 0, {}));
