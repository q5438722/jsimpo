module.exports = { getPage: getPage };function getPage(e, t, n) {
  const g = {};
  const i = (t - 1) * n;
  const s = t * n;
  g.items = e.slice(i, s);if (g.items.length === 0) {
    return g;
  }if (t > 1) {
    g.prev = t - 1;
  }if (s < e.length) {
    g.next = t + 1;
  }if (g.items.length !== e.length) {
    g.current = t;g.first = 1;g.last = Math.ceil(e.length / n);
  }return g;
}
