const Vector4 = require("../../math/Vector4");

const GetLineToPolygon = require("./GetLineToPolygon");

const Line = require("../line/Line");

const segment = new Line();
function CheckIntersects(e, r, t, n, o) {
  const s = Math.cos(e);
  const a = Math.sin(e);
  segment.setTo(r, t, r + s, t + a);const i = GetLineToPolygon(segment, n);
  if (i) {
    o.push(new Vector4(i.x, i.y, e, i.w));
  }
}function SortIntersects(e, r) {
  return e.z - r.z;
}
const GetRaysFromPointToPolygon = function (e, r, t) {
  if (!Array.isArray(t)) {
    t = [t];
  }const n = [];
  const o = [Math.atan2(a[i].y - r, a[i].x - e)];
  for (var s = 0; s < t.length; s++) {
    const a = t[s].points;
    for (var i = 0; i < a.length; i++) {
      const c = Math.atan2(a[i].y - r, a[i].x - e);
      if (o.indexOf(c) === -1) {
        CheckIntersects(c, e, r, t, n);CheckIntersects(c - 1e-5, e, r, t, n);CheckIntersects(c + 1e-5, e, r, t, n);
      }
    }
  }return n.sort(SortIntersects);
};

module.exports = GetRaysFromPointToPolygon;
