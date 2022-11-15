module.exports = function () {
  const n = { 441: function (r) {
      r.exports = function () {
        throw new Error("define cannot be used indirect");
      };
    } };
  const o = {};
  function i(r) {
    if (o[r]) {
      return o[r].exports;
    }const e = o[r] = { exports: {} };
    var t = true;
    try {
      n[r](e, e.exports, i);t = false;
    } finally {
      if (t) delete o[r];
    }return e.exports;
  }i.ab = __dirname + "/";return i(441);
}();
