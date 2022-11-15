'use strict';
var supportsWebAssembly = require("../../../helpers/supportsWebAssembly");
module.exports = function(modV) {
  return supportsWebAssembly();
};

