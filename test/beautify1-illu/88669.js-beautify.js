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
}('2.a=3(i,e){0 1=d;1.7=b t(i,e)};4.s(2.a.u,{v:3(h){0 1=d;0 9={};4.r([\'x\',\'q\',\'p\',\'o\',\'l\',\'n\',\'w\',\'L\',\'I\',\'H\',\'J\'],3(m){9[m]=4.y(1.7[m],1.7,h)});k 9}});2.M=4.G(3(){0 6={};0 c=5.8.g;j(5.8.f){6.z=5.8.f}j(!c)E b D("g K C B A F");k b 2.a(c,6)});', 49, 49, ['var', 'self', 'MongoInternals', 'function', '_', 'process', 'connectionOptions', 'mongo', 'env', 'ret', 'RemoteCollectionDriver', 'new', 'mongoUrl', 'this', 'options', 'MONGO_OPLOG_URL', 'MONGO_URL', 'name', 'mongo_url', 'if', 'return', 'upsert', '', 'remove', 'update', 'insert', 'findOne', 'each', 'extend', 'MongoConnection', 'prototype', 'open', '_ensureIndex', 'find', 'bind', 'oplogUrl', 'in', 'set', 'be', 'Error', 'throw', 'environment', 'once', 'dropCollection', '_createCappedCollection', 'rawCollection', 'must', '_dropIndex', 'defaultRemoteCollectionDriver'], 0, {}));