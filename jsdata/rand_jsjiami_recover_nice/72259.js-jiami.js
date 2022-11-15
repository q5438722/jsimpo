'use strict';
const RuntimeGlobals = require("../RuntimeGlobals");
const ExportWebpackRequireRuntimeModule = require("./ExportWebpackRequireRuntimeModule");
const ModuleChunkLoadingRuntimeModule = require("./ModuleChunkLoadingRuntimeModule");
class ModuleChunkLoadingPlugin {
  ["apply"](serverConfig) {
    serverConfig["hooks"]["thisCompilation"]["tap"]("ModuleChunkLoadingPlugin", (event) => {
      const min = event["outputOptions"]["chunkLoading"];
      const require = (callback) => {
        const minMaxMatch = callback["getEntryOptions"]();
        const id = minMaxMatch && minMaxMatch["chunkLoading"] || min;
        return id === "import";
      };
      const target = new WeakSet;
      const getCollection = (type, options) => {
        var callbackVals = _0x10bd21["GaifQ"]["split"]("|");
        var callbackCount = 0;
        for (; !![];) {
          switch(callbackVals[callbackCount++]) {
            case "0":
              event["addRuntimeModule"](type, new ModuleChunkLoadingRuntimeModule(options));
              continue;
            case "1":
              if (target["has"](type)) {
                return;
              }
              continue;
            case "2":
              options["add"](RuntimeGlobals["hasOwnProperty"]);
              continue;
            case "3":
              if (!require(type)) {
                return;
              }
              continue;
            case "4":
              target["add"](type);
              continue;
            case "5":
              options["add"](RuntimeGlobals["moduleFactoriesAddOnly"]);
              continue;
          }
          break;
        }
      };
      event["hooks"]["runtimeRequirementInTree"]["for"](RuntimeGlobals["ensureChunkHandlers"])["tap"](_0x2d21b1["uAOkP"], getCollection);
      event["hooks"]["runtimeRequirementInTree"]["for"](RuntimeGlobals["baseURI"])["tap"]("ModuleChunkLoadingPlugin", getCollection);
      event["hooks"]["runtimeRequirementInTree"]["for"](RuntimeGlobals["externalInstallChunk"])["tap"](_0x2d21b1["uAOkP"], getCollection);
      event["hooks"]["runtimeRequirementInTree"]["for"](RuntimeGlobals["onChunksLoaded"])["tap"](_0x2d21b1["uAOkP"], getCollection);
      event["hooks"]["runtimeRequirementInTree"]["for"](RuntimeGlobals["externalInstallChunk"])["tap"]("ModuleChunkLoadingPlugin", (type, canCreateDiscussions) => {
        if (!require(type)) {
          return;
        }
        event["addRuntimeModule"](type, new ExportWebpackRequireRuntimeModule);
      });
      event["hooks"]["runtimeRequirementInTree"]["for"](RuntimeGlobals["ensureChunkHandlers"])["tap"](_0x2d21b1["uAOkP"], (amdSpecList, options) => {
        if (!require(amdSpecList)) {
          return;
        }
        options["add"](RuntimeGlobals["getChunkScriptFilename"]);
      });
    });
  }
}
module["exports"] = ModuleChunkLoadingPlugin;

