try {
  const util = require("util");

  if (typeof util.inherits !== "function") throw "";module.exports = util.inherits;
} catch (i) {
  module.exports = require("./inherits_browser.js");
}