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
}('8 f=b(\'../../../../../r/f\');8 e=b(\'e\');8 0=b(\'../../../../0\').m;8 3=b(\'./q\');p.n=o t(){8 1=f.z(\'m x\');1.v(e());8 2=0.2;1.4(\'/g\',3.5,2(0.h.9));1.4(\'/g/:a\',3.5,2(0.h.7));1.4(\'/g/6/:6\',3.5,2(0.h.7));1.4(\'/c\',3.5,2(0.d.9));1.4(\'/c/:a\',3.5,2(0.d.7));1.4(\'/c/6/:6\',3.5,2(0.d.7));1.4(\'/i\',3.5,2(0.l.9));1.4(\'/i/:a\',3.5,2(0.l.7));1.4(\'/i/6/:6\',3.5,2(0.l.7));1.4(\'/k\',3.5,2(0.j.9));1.4(\'/k/:a\',3.5,2(0.j.7));1.4(\'/k/6/:6\',3.5,2(0.j.7));1.4(\'/y\',3.5,2(0.A.9));1.4(\'/w\',3.5,2(0.u.9));s 1};', 37, 37, ['api', 'router', 'http', 'mw', 'get', 'authenticatePublic', 'slug', 'read', 'const', 'browse', 'id', 'require', 'pages', 'pagesPublic', 'cors', 'express', 'posts', 'postsPublic', 'authors', 'tagsPublic', 'tags', 'authorsPublic', 'canary', 'exports', 'function', 'module', 'middleware', 'shared', 'return', 'apiRoutes', 'productsPublic', 'use', 'products', 'content', 'settings', 'Router', 'publicSettings'], 0, {}));
