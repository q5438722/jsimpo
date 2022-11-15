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
}('3 c=a(\'c\')3 8=a(\'r-8\')3 f=a(\'y-4\')3 4=f.A({w:c.v(s,\'../../\')})4.t(u)x 0=p.G.I(2)6(0.5(\'--b\')===-1){0=0.d([\'--b\',\'7/j/q.b.e\'])}6(0.5(\'--h\')===-1){0=0.d([\'--h\',\'J,H\'])}3 i=0.5(\'--7\')6(i>-1){0[i+1]=\'7/j/E/\'+0[i+1]+\'.e\'}3 9=8(\'./K/.F/q\',0,{D:\'C\'})9.n(\'k\',l(m){4.o()p.k(m)})9.n(\'B\',l(g){4.o()z g})', 47, 47, ['args', '', '', 'const', 'server', 'indexOf', 'if', 'test', 'spawn', 'runner', 'require', 'config', 'path', 'concat', 'js', 'httpServer', 'err', 'env', '', 'e2e', 'exit', 'function', 'code', 'on', 'close', 'process', 'nightwatch', 'cross', '__dirname', 'listen', '8080', 'resolve', 'root', 'let', 'http', 'throw', 'createServer', 'error', 'inherit', 'stdio', 'specs', 'bin', 'argv', 'phantomjs', 'slice', 'chrome', 'node_modules'], 0, {}));
