define(["./kindOf"], function (l) {
  const r = this;
  function n(n) {
    const e = [];
    const i = l(n);
    var t;
    if (n != null) {
      if (n.length == null || i === "String" || i === "Function" || i === "RegExp" || n === r) {
        e[e.length] = n;
      } else {
        t = n.length;while (t--) {
          e[t] = n[t];
        }
      }
    }return e;
  }return n;
});
