const Point = require("../point/Point");

const GetNearestPoint = function (r, e, t) {
  if (t === undefined) {
    t = new Point();
  }const n = r.x1;
  const i = r.y1;
  const a = r.x2;
  const o = r.y2;
  const v = (a - n) * (a - n) + (o - i) * (o - i);
  if (v === 0) {
    return t;
  }const u = ((e.x - n) * (a - n) + (e.y - i) * (o - i)) / v;
  t.x = n + u * (a - n);t.y = i + u * (o - i);return t;
};

module.exports = GetNearestPoint;
