'use strict';
module[_0x3a6f32(207)] = require(_0x3a6f32(208));
for (const key of ["dependencies", "devDependencies", _0x3a6f32(209)]) {
  for (const ext of Object[_0x3a6f32(210)](module[_0x3a6f32(207)][key] || {})) {
    module["exports"][key][ext] = require(ext);
  }
}
;
