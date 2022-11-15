import { looseEqual } from "uni-shared";function setResult(t, e, n) {
  t[e] = n;
}function diffElmData(t, e) {
  var n;
  var f;
  var l;
  var o;
  for (f in t) {
    l = t[f];o = e[f];if (!looseEqual(o, l)) {
      setResult(n || (n = Object.create(null)), f, l);
    }
  }return n;
}export function diff(t, e, n) {
  var f;
  var l;
  var o;
  for (f in t) {
    l = t[f];o = e[f];if (!o) {
      setResult(n, f, l);continue;
    }const u = diffElmData(l, o);
    u && setResult(n, f, u);
  }return n;
}
