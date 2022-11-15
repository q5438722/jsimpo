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
}('d.y({h:"g j z 9-8 l",k:\'1.5.0\',n:o});p.i({f:\'3.0.2\',\'m-A-x\':\'1.1.0\'});d.q(w(4){4.a(\'v\');4.a([\'r\',\'s\',\'9-8\'],\'6\');4.b(\'e.t-c.7\',\'6\');4.b(\'e.u-c.7\',\'6\')});', 37, 37, ['', '', '', '', 'api', '', 'server', 'js', 'generator', 'boilerplate', 'use', 'addFiles', 'tests', 'Package', 'web', 'parse5', 'Tests', 'summary', 'depends', 'for', 'version', 'package', 'stream', 'documentation', 'null', 'Npm', 'onTest', 'underscore', 'tinytest', 'browser', 'cordova', 'ecmascript', 'function', 'string', 'describe', 'the', 'to'], 0, {}));
