const supportsWebAssembly = require("../../../helpers/supportsWebAssembly");

module.exports = function (s) {
  return supportsWebAssembly();
};