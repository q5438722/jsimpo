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
}('U("V/W/I/I-X-3.T");(M Y(){S(O.P.Q);0 t=11;0 y=R;0 q=Z;0 n=14;0 G=13;0 a=2;0 u=a+1;0 r=4;0 c=1;0 m=(M(){0 8=L N();0 J=8.w(z,15,15).D("B").7;0 x=8.l(\'x\',h).i([j,t]).7;0 C=8.l(\'C\',h).i([j,y]).7;8.k(J,g.d(a),[x,C]);0 m=8.K();0 A=m.p.B;6(t,A.5(a)());6(y,A.5(a+1)());18 m})();0 3=L N();0 E=3.17("p","B",15,15);3.19("9",16,E);0 H=3.w(z,10).D("o").7;0 F=3.w(z,12).D("b").7;0 e=3.l(\'e\',h).i([j,q]).7;0 f=3.l(\'f\',h).i([j,n]).7;0 s=3.l(\'s\',h).i([j,G]).7;3.k(E,g.d(u),[e,f]);3.k(H,g.d(r),[s,f]);3.k(F,g.d(c),[e,s]);3.k(F,g.d(c+1),[f,e]);0 v=3.K(m);0 9=v.p.9;0 o=v.p.o;0 b=v.p.b;6(t,9.5(a)());6(q,9.5(u)());6(n,9.5(u+1)());6(G,o.5(r)());6(n,o.5(r+1)());6(q,b.5(c)());6(n,b.5(c+1)());6(q,b.5(c+2)())})();', 62, 72, ['const', '', '', 'builder', '', 'get', 'assertEquals', 'index', 'builder_for_import', 'table2', 'offset1', 'table4', 'offset4', 'I32Const', 'f3', 'f4', 'WasmInitExpr', 'kSig_i_v', 'addBody', 'kExprI32Const', 'addActiveElementSegment', 'addFunction', 'instance_for_import', 'value4', 'table3', 'exports', 'value3', 'offset3', 'f5', 'value1', 'offset2', 'instance', 'addTable', 'f1', 'value2', 'kWasmAnyFunc', 'table1', 'table', 'f2', 'exportAs', 't2', 't4', 'value5', 't3', 'wasm', 't1', 'instantiate', 'new', 'function', 'WasmModuleBuilder', 'arguments', 'callee', 'name', '22', 'print', 'js', 'load', 'test', 'mjsunit', 'module', 'TestInitMultipleTables', '46', '', '', '', '', '57', '', 'kExternalTable', 'addImportedTable', 'return', 'addExportOfKind'], 0, {}));