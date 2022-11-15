eval(function (p, a, c, k, e, d) {
  e = function (c) {
    return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
  };if (!''.replace(/^/, String)) {
    while (c--) {
      d[e(c)] = k[c] || e(c);
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
}('t("s r u z p w l j k o y m.");h 5(a,b,c){8 e=a.x;8 d=e+b;n c+d+b}g(8 i=0;i<B;++i){5({x:1},2,3)}6("5({x:1}, 2, 4)","9");6("5({x:7}, 2, 4)","A");6("5({x:2}, 7, 4)","v");6("5({x:7}, 7, 4)","q");6("5({x:1}, 2, 7)","f");', 38, 38, ['', '', '', '', '', 'destructiveAddForBoxedInteger', 'shouldBe', '2147483647', 'var', '', '', '', '', '', 'a_', '2147483652', 'for', 'function', '', 'additions', 'on', 'destructive', 'works', 'return', 'unboxed', 'recovery', '6442450945', 'tests', 'This', 'description', 'that', '4294967300', 'of', '', 'integers', 'speculation', '2147483655', '100'], 0, {}));
