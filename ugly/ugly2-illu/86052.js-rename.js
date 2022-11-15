const Utils = require("../../renderer/webgl/Utils");

const StrokePathWebGL = function (r, a, e, t, l) {
  const o = r.strokeTint;
  const v = Utils.getTintAppendFloatAlpha(a.strokeColor, a.strokeAlpha * e);
  o.TL = v;o.TR = v;o.BL = v;o.BR = v;const i = a.pathData;
  var h = i.length - 1;
  const s = a.lineWidth;
  const n = s / 2;
  var p = i[0] - t;
  var k = i[1] - l;
  if (!a.closePath) {
    h -= 2;
  }for (var L = 2; L < h; L += 2) {
    const b = i[L] - t;
    const c = i[L + 1] - l;
    r.batchLine(p, k, b, c, n, n, s, L - 2, a.closePath ? L === h - 1 : false);p = b;k = c;
  }
};

module.exports = StrokePathWebGL;
