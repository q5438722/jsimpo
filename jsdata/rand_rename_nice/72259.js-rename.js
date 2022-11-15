'use strict';
const RuntimeGlobals = require("../RuntimeGlobals");
const ExportWebpackRequireRuntimeModule = require("./ExportWebpackRequireRuntimeModule");
const ModuleChunkLoadingRuntimeModule = require("./ModuleChunkLoadingRuntimeModule");
class ModuleChunkLoadingPlugin {
  apply(enterIndex) {
    enterIndex.hooks.thisCompilation.tap("ModuleChunkLoadingPlugin", (data) => {
      const update = data.outputOptions.chunkLoading;
      const mergeCommonModules = (newModules) => {
        const origCluster = newModules.getEntryOptions();
        const id = origCluster && origCluster.chunkLoading || update;
        return id === "import";
      };
      const updatedSet = new WeakSet;
      const _loop = (i, len) => {
        if (updatedSet.has(i)) {
          return;
        }
        updatedSet.add(i);
        if (!mergeCommonModules(i)) {
          return;
        }
        len.add(RuntimeGlobals.moduleFactoriesAddOnly);
        len.add(RuntimeGlobals.hasOwnProperty);
        data.addRuntimeModule(i, new ModuleChunkLoadingRuntimeModule(len));
      };
      data.hooks.runtimeRequirementInTree.for(RuntimeGlobals.ensureChunkHandlers).tap("ModuleChunkLoadingPlugin", _loop);
      data.hooks.runtimeRequirementInTree.for(RuntimeGlobals.baseURI).tap("ModuleChunkLoadingPlugin", _loop);
      data.hooks.runtimeRequirementInTree.for(RuntimeGlobals.externalInstallChunk).tap("ModuleChunkLoadingPlugin", _loop);
      data.hooks.runtimeRequirementInTree.for(RuntimeGlobals.onChunksLoaded).tap("ModuleChunkLoadingPlugin", _loop);
      data.hooks.runtimeRequirementInTree.for(RuntimeGlobals.externalInstallChunk).tap("ModuleChunkLoadingPlugin", (e, n) => {
        if (!mergeCommonModules(e)) {
          return;
        }
        data.addRuntimeModule(e, new ExportWebpackRequireRuntimeModule);
      });
      data.hooks.runtimeRequirementInTree.for(RuntimeGlobals.ensureChunkHandlers).tap("ModuleChunkLoadingPlugin", (e, ClassesProxy) => {
        if (!mergeCommonModules(e)) {
          return;
        }
        ClassesProxy.add(RuntimeGlobals.getChunkScriptFilename);
      });
    });
  }
}
module.exports = ModuleChunkLoadingPlugin;

