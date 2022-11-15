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
}('c 9=1;5 8(){d\'h\'}5 l(){c 7=2;5 6(){d\'a\'}5 f(){b(\'1\');0(1,9);o{p(n)}m(e){k()}0(2,7);0(\'h\',8());0(\'a\',6());5 g(){0(1,9);o{p(n)}m(e){k()}0(2,7);0(\'h\',8());0(\'a\',6())}g()}f()}l();5 q(){c 7=2;5 6(){d\'a\'}b(\'1\');5 f(){b(\'1\');0(1,9);0(2,7);0(\'h\',8());0(\'a\',6());5 g(){0(1,9);0(2,7);0(\'h\',8());0(\'a\',6())}g()}f()}q();5 r(){c 7=2;5 6(){d\'a\'}5 f(){b(\'c 9 = 3; c 7 = 4;\');0(3,9);0(4,7);b(\'5 6() { d "j"; }\');b(\'5 8() { d "i"; }\');0(\'i\',8());0(\'j\',6());5 g(){0(3,9);0(4,7);0(\'i\',8());0(\'j\',6())}g()}f()}r();', 28, 28, ['assertEquals', '', '', '', '', 'function', 'local_function', 'y', 'global_function', 'x', 'local', 'eval', 'var', 'return', '', '', '', 'global', 'new_nonglobal', 'new_local', 'assertUnreachable', 'testNoShadowing', 'catch', 'asdf', 'try', 'typeof', 'testNoShadowing2', 'testShadowing'], 0, {}));
