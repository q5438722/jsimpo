module.exports = function () {
  const n = { 957: function (r) {
      r.exports = { import: function () {
          throw new Error("System.import cannot be used indirectly");
        } };
    } };
  const o = {};
  function i(r) {
    if (o[r]) {
      return o[r].exports;
    }const t = o[r] = { exports: {} };
    var e = true;
    try {
      n[r](t, t.exports, i);e = false;
    } finally {
      if (e) delete o[r];
    }return t.exports;
  }i.ab = __dirname + "/";return i(957);
}();
