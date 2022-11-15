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
}('a 8 b\'8\';a{f}b\'y\';a c b\'c\';a e b\'./1-3-2\';a i b\'../z/i\';x 9(k){A i(8.v(w,k))}j(\'@I-B/J\',()=>{j(\'H.0.0\',()=>{j(\'1-3-2\',()=>{l(\'G F C D\',()=>{d 6=e({n:9(\'./1-3-2.5/6.7\'),8:o.u(\'./1-3-2.5/6.7\'),},{c},{},);d 4=9(\'./1-3-2.5/4.7\');f(6).q.p(4,\'r s t h g m\')});l(\'h g E\',()=>{d 6=e({n:9(\'./1-3-2.5/4.7\'),8:o.u(\'./1-3-2.5/4.7\'),},{c},{},);d 4=9(\'./1-3-2.5/4.7\');f(6).q.p(4,\'r s t h g m\')})})})});', 46, 46, ['', 'collapse', 'collapsedheight', 'rename', 'expected', 'test', 'actual', 'js', 'path', 'read', 'import', 'from', 'jscodeshift', 'const', 'transform', 'expect', 'be', 'should', 'readFile', 'describe', 'fileName', 'it', 'correct', 'source', 'require', 'equal', 'to', 'The', 'transformed', 'version', 'resolve', 'join', '__dirname', 'function', 'chai', 'util', 'return', 'ui', 'as', 'needed', 'idempotent', 'props', 'transforms', 'v5', 'material', 'codemod'], 0, {}));
