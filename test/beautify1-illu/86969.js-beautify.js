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
}('2 a={};M.N=a;2 v=s(\'./v\');2 p=s(\'./p\');2 g=s(\'../L/g\');(u(){a.n=u(h,t){2 n=[],E=t.K.G;2 6=t.6;r(2 i=0;i<h.c;i++){2 4=h[i][0],3=h[i][1];5((4.B||4.z)&&(3.B||3.z))w;5(!a.C(4.y,3.y))w;6.W+=1;5(g.x(4.e,3.e)){r(2 j=4.7.c>1?1:0;j<4.7.c;j++){2 d=4.7[j];r(2 k=3.7.c>1?1:0;k<3.7.c;k++){2 9=3.7[k];5((d===4&&9===3)||g.x(d.e,9.e)){2 F=p.T(d,9),l=E[F],f;5(l&&l.Q){f=l.b}J{f=I}2 b=v.V(d,9,f);6.U+=1;5(b.H)6.O+=1;5(b.P){n.R(b);6.S+=1}}}}}}q n};a.C=u(8,m){5(8.o===m.o&&8.o!==0)q 8.o>0;q(8.D&m.A)!==0&&(m.D&8.A)!==0}})();', 59, 59, ['', '', 'var', 'bodyB', 'bodyA', 'if', 'metrics', 'parts', 'filterA', 'partB', 'Detector', 'collision', 'length', 'partA', 'bounds', 'previousCollision', 'Bounds', 'broadphasePairs', '', '', '', 'pair', 'filterB', 'collisions', 'group', 'Pair', 'return', 'for', 'require', 'engine', 'function', 'SAT', 'continue', 'overlaps', 'collisionFilter', 'isSleeping', 'category', 'isStatic', 'canCollide', 'mask', 'pairsTable', 'pairId', 'table', 'reused', 'null', 'else', 'pairs', 'geometry', 'module', 'exports', 'narrowReuseCount', 'collided', 'isActive', 'push', 'narrowDetections', 'id', 'narrowphaseTests', 'collides', 'midphaseTests'], 0, {}));
