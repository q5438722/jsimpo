const internals = {};
exports.arrayToObject = function (r) {
  const e = {};
  for (var t = 0, n = r.length; t < n; ++t) {
    if (typeof r[t] !== "undefined") {
      e[t] = r[t];
    }
  }return e;
};exports.merge = function (r, e) {
  if (!e) {
    return r;
  }if (typeof e !== "object") {
    if (Array.isArray(r)) {
      r.push(e);
    } else {
      r[e] = true;
    }return r;
  }if (typeof r !== "object") {
    r = [r].concat(e);return r;
  }if (Array.isArray(r) && !Array.isArray(e)) {
    r = exports.arrayToObject(r);
  }const t = Object.keys(e);
  for (var n = 0, o = t.length; n < o; ++n) {
    const f = t[n];
    const u = e[f];
    if (!r[f]) {
      r[f] = u;
    } else {
      r[f] = exports.merge(r[f], u);
    }
  }return r;
};exports.decode = function (e) {
  try {
    return decodeURIComponent(e.replace(/\+/g, " "));
  } catch (r) {
    return e;
  }
};exports.compact = function (r, e) {
  if (typeof r !== "object" || r === null) {
    return r;
  }e = e || [];const t = e.indexOf(r);
  if (t !== -1) {
    return e[t];
  }e.push(r);if (Array.isArray(r)) {
    const n = [];
    for (var o = 0, f = r.length; o < f; ++o) {
      if (typeof r[o] !== "undefined") {
        n.push(r[o]);
      }
    }return n;
  }const u = Object.keys(r);
  // Unknown loop control variable
  for (o = 0, f = u.length; o < f; ++o) {
    const c = u[o];
    r[c] = exports.compact(r[c], e);
  }return r;
};exports.isRegExp = function (r) {
  return Object.prototype.toString.call(r) === "[object RegExp]";
};exports.isBuffer = function (r) {
  if (r === null || typeof r === "undefined") {
    return false;
  }return !!(r.constructor && r.constructor.isBuffer && r.constructor.isBuffer(r));
};
