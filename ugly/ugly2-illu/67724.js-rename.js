module.exports = function (r) {
  try {
    const t = require(r + ".js");
  } catch (r) {}try {
    const e = require("" + r + ".js");
  } catch (r) {}try {
    const c = require("./" + r + ".js");
  } catch (r) {}try {
    const n = require("./" + r);
  } catch (r) {}return { a: typeof t === "function", b: typeof e === "function", c: typeof c === "function", d: typeof n === "function" };
};
