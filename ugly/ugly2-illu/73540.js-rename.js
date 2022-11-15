import findLastIndex from "./findLastIndex.js";import isArrayLike from "./isArrayLike.js";function findLast(i, t, e) {
  var n;
  const r = Object(i);
  if (!isArrayLike(i)) {
    i = Object.keys(i);n = t;t = i => n(r[i], i, r);
  }const s = findLastIndex(i, t, e);
  return s > -1 ? r[n ? i[s] : s] : undefined;
}export default findLast;
