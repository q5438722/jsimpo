var { browsers } = require("./browsers");

function unpackRegion(u) {
  return Object.keys(u).reduce((e, r) => {
    const n = u[r];
    e[browsers[r]] = Object.keys(n).reduce((r, e) => {
      const u = n[e];
      if (e === "_") {
        u.split(" ").forEach(e => r[e] = null);
      } else {
        r[e] = u;
      }return r;
    }, {});return e;
  }, {});
}module.exports = unpackRegion;module.exports.default = unpackRegion;
