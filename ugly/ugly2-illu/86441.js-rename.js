const MergeXY = function (t, a, r) {
  const e = Math.min(t.x, a);
  const h = Math.max(t.right, a);
  t.x = e;t.width = h - e;const i = Math.min(t.y, r);
  const m = Math.max(t.bottom, r);
  t.y = i;t.height = m - i;return t;
};

module.exports = MergeXY;
