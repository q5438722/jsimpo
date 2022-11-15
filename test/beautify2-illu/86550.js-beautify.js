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
}('2 9=e(\'../../H/9\');2 h=e(\'./h\');2 g=e(\'../F/g\');2 f=o g();c 8(4,x,y,3,5){2 m=k.D(4);2 n=k.A(4);f.E(x,y,x+m,y+n);2 7=h(f,3);d(7){5.s(o 9(7.x,7.y,4,7.w))}}c u(a,b){v a.z-b.z}2 l=c(x,y,3){d(!L.K(3)){3=[3]}2 5=[];2 j=[];q(2 i=0;i<3.r;i++){2 6=3[i].6;q(2 p=0;p<6.r;p++){2 4=k.B(6[p].y-y,6[p].x-x);d(j.I(4)===-1){8(4,x,y,3,5);8(4-0.t,x,y,3,5);8(4+0.t,x,y,3,5);j.s(4)}}}v 5.C(u)};J.G=l;', 48, 48, ['', '', 'var', 'polygons', 'angle', 'intersects', 'points', 'closestIntersect', 'CheckIntersects', 'Vector4', '', '', 'function', 'if', 'require', 'segment', 'Line', 'GetLineToPolygon', '', 'angles', 'Math', 'GetRaysFromPointToPolygon', 'dx', 'dy', 'new', '', 'for', 'length', 'push', '00001', 'SortIntersects', 'return', '', '', '', '', 'sin', 'atan2', 'sort', 'cos', 'setTo', 'line', 'exports', 'math', 'indexOf', 'module', 'isArray', 'Array'], 0, {}));
