'use strict';
var supportsWebAssembly = require("../../../helpers/supportsWebAssembly");
module["exports"] = function(canCreateDiscussions) {
  return supportsWebAssembly();
};

