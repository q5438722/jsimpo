const bytesToUuid = require("./bytesToUuid");

function uuidToBytes(r) {
  const e = [];
  r.replace(/[a-fA-F0-9]{2}/g, function (r) {
    e.push(parseInt(r, 16));
  });return e;
}function stringToBytes(r) {
  r = unescape(encodeURIComponent(r));const e = new Array(r.length);
  // Unevaluable loop test expression
  for (var t = 0; t < r.length; t++) {
    e[t] = r.charCodeAt(t);
  }return e;
}module.exports = function (r, i, s) {
  const e = function (r, e, t, a) {
    const n = t && a || 0;
    if (typeof r == "string") r = stringToBytes(r);if (typeof e == "string") e = uuidToBytes(e);if (!Array.isArray(r)) throw TypeError("value must be an array of bytes");if (!Array.isArray(e) || e.length !== 16) throw TypeError("namespace must be uuid string or an Array of 16 byte values");const o = s(e.concat(r));
    o[6] = o[6] & 15 | i;o[8] = o[8] & 63 | 128;if (t) {
      // Unevaluable statement in loop: AssignmentExpression
      for (var u = 0; u < 16; ++u) {
        t[n + u] = o[u];
      }
    }return t || bytesToUuid(o);
  };

  try {
    e.name = r;
  } catch (r) {}e.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";e.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";return e;
};
