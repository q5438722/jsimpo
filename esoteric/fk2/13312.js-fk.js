class A {
  run() {
    babelHelpers.classStaticPrivateMethodSet(A, A, _method, !+[]+!+[]);
    [babelHelpers.classStaticPrivateFieldDestructureSet(A, A, _method).value] = [!+[]+!+[]];
  }

}

function _method() {}
