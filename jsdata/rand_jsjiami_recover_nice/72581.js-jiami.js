'use strict';
const ModuleFilenameHelpers = require("./ModuleFilenameHelpers");
const NormalModule = require("./NormalModule");
const createSchemaValidation = require("./util/create-schema-validation");
const validate = createSchemaValidation(require("../schemas/plugins/LoaderOptionsPlugin.check.js"), () => {
  return require("../schemas/plugins/LoaderOptionsPlugin.json");
}, {
  "name" : "Loader Options Plugin",
  "baseDataPath" : "options"
});
class LoaderOptionsPlugin {
  constructor(options = {}) {
    validate(options);
    if (typeof options !== "object") {
      options = {};
    }
    if (!options["test"]) {
      options["test"] = {
        "test" : () => {
          return !![];
        }
      };
    }
    this["options"] = options;
  }
  ["apply"](serverConfig) {
    const obj = this["options"];
    serverConfig["hooks"]["compilation"]["tap"](_0x5ca863["oDBmQ"], (mmCoreSplitViewBlock) => {
      NormalModule["getCompilationHooks"](mmCoreSplitViewBlock)["loader"]["tap"](_0x5ca863["oDBmQ"], (global, remote) => {
        const B1213 = remote["resource"];
        if (!B1213) {
          return;
        }
        const B1215 = B1213["indexOf"]("?");
        if (ModuleFilenameHelpers["matchObject"](obj, B1215 < 0 ? B1213 : B1213["substr"](0, B1215))) {
          for (const name of Object["keys"](obj)) {
            if (name === "include" || name === _0x5ca863["xLgRr"] || name === "test") {
              continue;
            }
            global[name] = obj[name];
          }
        }
      });
    });
  }
}
module["exports"] = LoaderOptionsPlugin;

