"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");

const ExportWebpackRequireRuntimeModule = require("./ExportWebpackRequireRuntimeModule");

const ModuleChunkLoadingRuntimeModule = require("./ModuleChunkLoadingRuntimeModule");

class ModuleChunkLoadingPlugin {
  apply(e) {
    e.hooks.thisCompilation.tap("ModuleChunkLoadingPlugin", u => {
      const o = u.outputOptions.chunkLoading;

      const t = e => {
        const n = e.getEntryOptions();
        const u = n && n.chunkLoading || o;
        return u === "import";
      };

      const i = new WeakSet();

      const e = (e, n) => {
        if (i.has(e)) return;i.add(e);if (!t(e)) return;n.add(RuntimeGlobals.moduleFactoriesAddOnly);n.add(RuntimeGlobals.hasOwnProperty);u.addRuntimeModule(e, new ModuleChunkLoadingRuntimeModule(n));
      };

      u.hooks.runtimeRequirementInTree.for(RuntimeGlobals.ensureChunkHandlers).tap("ModuleChunkLoadingPlugin", e);u.hooks.runtimeRequirementInTree.for(RuntimeGlobals.baseURI).tap("ModuleChunkLoadingPlugin", e);u.hooks.runtimeRequirementInTree.for(RuntimeGlobals.externalInstallChunk).tap("ModuleChunkLoadingPlugin", e);u.hooks.runtimeRequirementInTree.for(RuntimeGlobals.onChunksLoaded).tap("ModuleChunkLoadingPlugin", e);u.hooks.runtimeRequirementInTree.for(RuntimeGlobals.externalInstallChunk).tap("ModuleChunkLoadingPlugin", (e, n) => {
        if (!t(e)) return;u.addRuntimeModule(e, new ExportWebpackRequireRuntimeModule());
      });u.hooks.runtimeRequirementInTree.for(RuntimeGlobals.ensureChunkHandlers).tap("ModuleChunkLoadingPlugin", (e, n) => {
        if (!t(e)) return;n.add(RuntimeGlobals.getChunkScriptFilename);
      });
    });
  }
}module.exports = ModuleChunkLoadingPlugin;
