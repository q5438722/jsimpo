'use strict';
const {
  nodeResolve : nodeResolve
} = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const json = require("@rollup/plugin-json");
module.exports = {
  input : "src/cli-entry.mjs",
  output : {
    file : "dist/index.mjs",
    format : "es",
    sourcemap : false,
    exports : "none"
  },
  external : ["node:events", "node:fs", "node:path", "node:process", "node:stream", "node:url"],
  plugins : [{
    name : "brute-replace",
    transform(e, path) {
      const r = path.replace(__dirname, "").replace(/\\+/g, "/");
      if (r === "/node_modules/concat-stream/index.js") {
        return e.replace("'readable-stream'", "'stream'");
      }
      if (r === "/node_modules/unified-args/lib/options.js") {
        return e.replace("'./schema'", "'./schema.json'");
      }
      if (r === "/node_modules/chokidar/lib/fsevents-handler.js") {
        return e.replace("fsevents = require('fsevents');", "fsevents = undefined;");
      }
      return e.replace("var Glob = require('./glob.js').Glob", "");
    }
  }, json({
    preferConst : true
  }), nodeResolve({
    exportConditions : ["node"]
  }), commonjs(), {
    name : "banner",
    renderChunk(prefix) {
      const _$1 = "// Don't change this file manually,\n" + "// it is generated from tools/node-lint-md-cli-rollup";
      return prefix.replace("'use strict';", "'use strict';\n\n" + _$1);
    }
  }]
};

