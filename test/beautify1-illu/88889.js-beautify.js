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
}('a={};5 d=\'F\';9(f.C){5 m=1(u){c!!B.A};a.D=1(w){m=w};5 3={};5 b=[];a.E=3;a.I=1(2,6,i){9(!7.t(3,2)){3[2]={};3[2][6]=i;7.g(b,1(4){4.r(d,2,3[2])});c}5 q=3[2];9(!7.t(q,6))3[2][6]=0;3[2][6]+=i;5 k={};k[6]=3[2][6];7.g(b,1(4){4.G(d,2,k)})};f.z(1(){f.H("y",1(){5 4=8;9(!m(8.u)){4.s();c}b.x(4);7.g(3,1(j,2){4.r(d,2,j)});4.X(1(){b=7.U(b,4)});4.s()},{T:V})})}W{a.v=Y J.R(d);p.l.M({3:1(){c a.v.L()},j:1(){5 n=[];7.g(8,1(o,e){9(e!==\'K\')n.x({e:e,o:o})});c n}});p.l.N(1(){8.h=f.O("y")});p.l.Q(1(){9(8.h){8.h.P();8.h=S}})}', 61, 61, ['', 'function', 'pkg', 'factsByPackage', 'sub', 'var', 'fact', '_', 'this', 'if', 'Facts', 'activeSubscriptions', 'return', 'serverFactsCollection', 'name', 'Meteor', 'each', '_stopHandle', 'increment', 'facts', 'changedField', 'serverFacts', 'userIdFilter', 'factArray', 'value', 'Template', 'packageFacts', 'added', 'ready', 'has', 'userId', 'server', 'filter', 'push', 'meteor_facts', 'defer', 'autopublish', 'Package', 'isServer', 'setUserIdFilter', '_factsByPackage', 'meteor_Facts_server', 'changed', 'publish', 'incrementServerFact', 'Mongo', '_id', 'find', 'helpers', 'onCreated', 'subscribe', 'stop', 'onDestroyed', 'Collection', 'null', 'is_auto', 'without', 'true', 'else', 'onStop', 'new'], 0, {}));
