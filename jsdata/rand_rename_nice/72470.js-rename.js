'use strict';
class EntryOptionPlugin {
  apply(compiler) {
    compiler.hooks.entryOption.tap("EntryOptionPlugin", (n, i) => {
      EntryOptionPlugin.applyEntryOption(compiler, n, i);
      return true;
    });
  }
  static applyEntryOption(compiler, patch, opts) {
    if (typeof opts === "function") {
      const JSONPatch = require("./DynamicEntryPlugin");
      (new JSONPatch(patch, opts)).apply(compiler);
    } else {
      const JSONPatch = require("./EntryPlugin");
      for (const key of Object.keys(opts)) {
        const options = opts[key];
        const urlTree = EntryOptionPlugin.entryDescriptionToOptions(compiler, key, options);
        for (const snapTarget of options.import) {
          (new JSONPatch(patch, snapTarget, urlTree)).apply(compiler);
        }
      }
    }
  }
  static entryDescriptionToOptions(selector, i, options) {
    const r = {
      name : i,
      filename : options.filename,
      runtime : options.runtime,
      layer : options.layer,
      dependOn : options.dependOn,
      publicPath : options.publicPath,
      chunkLoading : options.chunkLoading,
      wasmLoading : options.wasmLoading,
      library : options.library
    };
    if (options.layer !== undefined && !selector.options.experiments.layers) {
      throw new Error("'entryOptions.layer' is only allowed when 'experiments.layers' is enabled");
    }
    if (options.chunkLoading) {
      const _this = require("./javascript/EnableChunkLoadingPlugin");
      _this.checkEnabled(selector, options.chunkLoading);
    }
    if (options.wasmLoading) {
      const _this = require("./wasm/EnableWasmLoadingPlugin");
      _this.checkEnabled(selector, options.wasmLoading);
    }
    if (options.library) {
      const _this = require("./library/EnableLibraryPlugin");
      _this.checkEnabled(selector, options.library.type);
    }
    return r;
  }
}
module.exports = EntryOptionPlugin;

