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
}('\'i l\';b(\'../p\');8 7=b(\'7\');8 a=b(\'o\').a;g(6.n[2]===\'0\'){6.f(\'1\');q(5(){6.f(\'2\')},m);6.c(\'e\',5(){6.4.j(\'3\')})}k{8 0=a(w,[\'0\'],{y:A});8 d=[];z 4=\'\';0.c(\'B\',5(9){d.r(9);g(9===\'2\')0.e()});0.4.c(\'x\',5(h){4+=h});0.s(\'t\',5(){7.u(d,[\'1\',\'2\']);7.v(4,\'3\')})}', 38, 38, ['child', '', '', '', 'stdout', 'function', 'process', 'assert', 'const', 'msg', 'fork', 'require', 'on', 'ipc', 'disconnect', 'send', 'if', 'chunk', 'use', 'write', 'else', 'strict', '200', 'argv', 'child_process', 'common', 'setTimeout', 'push', 'once', 'exit', 'deepStrictEqual', 'strictEqual', '__filename', 'data', 'silent', 'let', 'true', 'message'], 0, {}));