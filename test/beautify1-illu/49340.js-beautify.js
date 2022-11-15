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
}('i.h={j:[\'<1>\'],k:\'m\',l:[\'3\',\'2\',\'6\',\'g\',\'f\'],a:[\'<1>[/\\\\\\\\](5|.9)[/\\\\\\\\]\'],8:[\'[/\\\\\\\\]5[/\\\\\\\\].+\\\\.(3|2)$\'],c:{\'^.+\\\\.(3|2)$\':\'n-0\',},o:[\'0-4-7/y\',\'0-4-7/C\',],B:{\'\\\\.(w|v|q|p)$\':\'r-s-u\',\'\\\\.(t|D|A|z|x)$\':\'<1>/d/e/b.6\',},}', 40, 40, ['jest', 'rootDir', 'tsx', 'ts', 'watch', 'node_modules', 'js', 'typeahead', 'transformIgnorePatterns', 'next', 'testPathIgnorePatterns', 'fileMock', 'transform', 'test', '__mocks__', 'jsx', 'json', 'exports', 'module', 'roots', 'testEnvironment', 'moduleFileExtensions', 'jsdom', 'babel', 'watchPlugins', 'scss', 'sass', 'identity', 'obj', 'gif', 'proxy', 'less', 'css', 'png', 'filename', 'svg', 'eot', 'moduleNameMapper', 'testname', 'ttf'], 0, {}));
