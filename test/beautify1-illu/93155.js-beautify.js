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
}('p a q\'../../../o-r/s-4/a\';t n l m(c,9){5 3={};5 e={};5 8={};5 4=k a();c.C().g((d)=>{3[d.1()]=E;8[d.1()]=B});3[9.1()]=0;4.f(9,3[9.1()]);D(!4.A()){5 6=4.z();6.u().g((2)=>{7(!e[2.1()]){5 j=c.v(6,2);5 h=3[2.1()];5 b=3[6.1()]+j.w;7(b<h){3[2.1()]=b;7(4.i(2)){4.x(2,3[2.1()])}8[2.1()]=6}7(!4.i(2)){4.f(2,3[2.1()])}}});e[6.1()]=6}y{3,8,}}', 41, 41, ['', 'getKey', 'neighbor', 'distances', 'queue', 'const', 'currentVertex', 'if', 'previousVertices', 'startVertex', 'PriorityQueue', 'distanceToNeighborFromCurrent', 'graph', 'vertex', 'visitedVertices', 'add', 'forEach', 'existingDistanceToNeighbor', 'hasValue', 'edge', 'new', 'function', 'dijkstra', 'default', 'data', 'import', 'from', 'structures', 'priority', 'export', 'getNeighbors', 'findEdge', 'weight', 'changePriority', 'return', 'poll', 'isEmpty', 'null', 'getAllVertices', 'while', 'Infinity'], 0, {}));