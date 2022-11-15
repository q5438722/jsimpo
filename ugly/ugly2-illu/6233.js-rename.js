define(["./append", "../function/makeIterator_"], function (f, l) {
  function n(n, r, e) {
    r = l(r, e);const t = [];
    if (n == null) {
      return t;
    }var u = -1;
    const i = n.length;
    while (++u < i) {
      const a = r(n[u], u, n);
      if (a != null) {
        f(t, a);
      }
    }return t;
  }return n;
});
