const Detector = {};
module.exports = Detector;
const SAT = require("./SAT");

const Pair = require("./Pair");

const Bounds = require("../geometry/Bounds");

(function () {
  Detector.collisions = function (r, e) {
    const o = [];
    const i = e.pairs.table;
    const t = e.metrics;
    for (var s = 0; s < r.length; s++) {
      const a = r[s][0];
      const n = r[s][1];
      if ((a.isStatic || a.isSleeping) && (n.isStatic || n.isSleeping)) continue;if (!Detector.canCollide(a.collisionFilter, n.collisionFilter)) continue;t.midphaseTests += 1;if (Bounds.overlaps(a.bounds, n.bounds)) {
        for (var l = a.parts.length > 1 ? 1 : 0; l < a.parts.length; l++) {
          const u = a.parts[l];
          for (var c = n.parts.length > 1 ? 1 : 0; c < n.parts.length; c++) {
            const p = n.parts[c];
            if (u === a && p === n || Bounds.overlaps(u.bounds, p.bounds)) {
              const d = Pair.id(u, p);
              const v = i[d];
              var f;
              if (v && v.isActive) {
                f = v.collision;
              } else {
                f = null;
              }const g = SAT.collides(u, p, f);
              t.narrowphaseTests += 1;if (g.reused) t.narrowReuseCount += 1;if (g.collided) {
                o.push(g);t.narrowDetections += 1;
              }
            }
          }
        }
      }
    }return o;
  };Detector.canCollide = function (r, e) {
    if (r.group === e.group && r.group !== 0) return r.group > 0;return (r.mask & e.category) !== 0 && (e.mask & r.category) !== 0;
  };
})();
