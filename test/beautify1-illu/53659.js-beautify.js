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
}('\'i f\';1 2=3(\'../2\');1 5=3(\'../2/5\');1 4=3(\'4\');1{a}=3(\'j\');1 b=8.o[0];k(!2.m)2.h(\'8.g e l v B p\');1 c=5.7(\'z\');1 d=5.7(\'y.w\');a(`"${b}"-r q"${d}"`,{s:c},(9,6,t)=>{4.u(9);4.x(6,\'A\\n\')});', 38, 38, ['', 'const', 'common', 'require', 'assert', 'fixtures', 'stdout', 'path', 'process', 'err', 'exec', 'nodeBinary', 'selfRefModule', 'fixtureA', 'is', 'strict', 'chdir', 'skip', 'use', 'child_process', 'if', 'not', 'isMainThread', '', 'argv', 'Workers', 'self_ref', '', 'cwd', 'stderr', 'ifError', 'available', 'js', 'strictEqual', 'printA', 'self_ref_module', '', 'in'], 0, {}));
