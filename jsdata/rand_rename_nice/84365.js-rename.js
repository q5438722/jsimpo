'use strict';
module.exports = require(`./package.json`);
for (const key of [`dependencies`, `devDependencies`, `peerDependencies`]) {
  for (const name of Object.keys(module.exports[key] || {})) {
    module.exports[key][name] = require(name);
  }
}
;
