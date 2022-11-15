module.exports = function e() {
  return function (e, n, r) {
    const t = new Date();
    if (n._responseTime) return r();n._responseTime = true;n.on("header", function () {
      const e = new Date() - t;
      n.setHeader("X-Response-Time", e + "ms");
    });r();
  };
};
