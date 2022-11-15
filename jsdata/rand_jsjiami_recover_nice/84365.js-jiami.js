'use strict';
module["exports"] = require("./package.json");
for (const key of ["dependencies", "devDependencies", "peerDependencies"]) {
  for (const ext of Object["keys"](module["exports"][key] || {})) {
    module["exports"][key][ext] = require(ext);
  }
}
;
