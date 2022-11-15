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
}('2 u=(m.k&&m.k.y&&m.k.y.c(\'.\'))||[];l q(v){2 7=v.c(\' \');2 j=7.8>1?7[0]:\'=\';2 o=(7.8>1?7[1]:7[0]).c(\'.\');b(2 i=0;i<3;++i){2 f=p(u[i]||0);2 g=p(o[i]||0);5(f===g){A}5(j===\'<\'){4 f<g}t 5(j===\'>=\'){4 f>=g}t{4 9}}4 j===\'>=\'}l n(s){2 h=s.c(/ ?&& ?/);5(h.8===0){4 9}b(2 i=0;i<h.8;++i){5(!q(h[i])){4 9}}4 w}l r(6){5(x 6===\'G\'){4 6}5(6&&x 6===\'D\'){b(2 i=0;i<6.8;++i){5(n(6[i])){4 w}}4 9}4 n(6)}2 d=F(\'./a.E\');2 a={};b(2 e H d){5(J.C.I.K(d,e)){a[e]=r(d[e])}}z.B=a;', 47, 47, ['', '', 'var', '', 'return', 'if', 'specifierValue', 'parts', 'length', 'false', 'core', 'for', 'split', 'data', 'mod', 'cur', 'ver', 'specifiers', '', 'op', 'versions', 'function', 'process', 'matchesRange', 'versionParts', 'Number', 'specifierIncluded', 'versionIncluded', 'range', 'else', 'current', 'specifier', 'true', 'typeof', 'node', 'module', 'continue', 'exports', 'prototype', 'object', 'json', 'require', 'boolean', 'in', 'hasOwnProperty', 'Object', 'call'], 0, {}));
