"use strict";

var { nodeResolve } = require("@rollup/plugin-node-resolve");

const commonjs = require("@rollup/plugin-commonjs");

const json = require("@rollup/plugin-json");

module.exports = { input: "src/cli-entry.mjs", output: { file: "dist/index.mjs", format: "es", sourcemap: false, exports: "none" }, external: ["node:events", "node:fs", "node:path", "node:process", "node:stream", "node:url"], plugins: [{ name: "brute-replace", transform(e, n) {
      const r = n.replace(__dirname, "").replace(/\\+/g, "/");
      if (r === "/node_modules/concat-stream/index.js") {
        return e.replace("'readable-stream'", "'stream'");
      }if (r === "/node_modules/unified-args/lib/options.js") {
        return e.replace("'./schema'", "'./schema.json'");
      }if (r === "/node_modules/chokidar/lib/fsevents-handler.js") {
        return e.replace("fsevents = require('fsevents');", "fsevents = undefined;");
      }return e.replace("var Glob = require('./glob.js').Glob", "");
    } }, json({ preferConst: true }), nodeResolve({ exportConditions: ["node"] }), commonjs(), { name: "banner", renderChunk(e) {
      const n = "// Don't change this file manually,\n// it is generated from tools/node-lint-md-cli-rollup";
      return e.replace("'use strict';", "'use strict';\n\n// Don't change this file manually,\n// it is generated from tools/node-lint-md-cli-rollup");
    } }] };
