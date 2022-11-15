'use strict';
const ModuleFilenameHelpers = require("./ModuleFilenameHelpers");
const NormalModule = require("./NormalModule");
const createSchemaValidation = require("./util/create-schema-validation");
const validate = createSchemaValidation(require("../schemas/plugins/LoaderOptionsPlugin.check.js"), () => {
  return require("../schemas/plugins/LoaderOptionsPlugin.json");
}, {
  name : "Loader Options Plugin",
  baseDataPath : "options"
});
class LoaderOptionsPlugin {
  constructor(options = {}) {
    validate(options);
    if (typeof options !== "object") {
      options = {};
    }
    if (!options.test) {
      options.test = {
        test : () => {
          return true;
        }
      };
    }
    this.options = options;
  }
  apply(options) {
    const opts = this.options;
    options.hooks.compilation.tap("LoaderOptionsPlugin", (e) => {
      NormalModule.getCompilationHooks(e).loader.tap("LoaderOptionsPlugin", (e, camAPI) => {
        const resource = camAPI.resource;
        if (!resource) {
          return;
        }
        const i = resource.indexOf("?");
        if (ModuleFilenameHelpers.matchObject(opts, i < 0 ? resource : resource.substr(0, i))) {
          for (const key of Object.keys(opts)) {
            if (key === "include" || key === "exclude" || key === "test") {
              continue;
            }
            e[key] = opts[key];
          }
        }
      });
    });
  }
}
module.exports = LoaderOptionsPlugin;

