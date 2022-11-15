'use strict';
const RuntimeGlobals = require(_0x350ad3(261));
const ExportWebpackRequireRuntimeModule = require("./ExportWebpackRequireRuntimeModule");
const ModuleChunkLoadingRuntimeModule = require(_0x350ad3(262));
class ModuleChunkLoadingPlugin {
  [_0x350ad3(263)](same) {
    const rel2Mstr = _0x350ad3;
    const args = {
      "QWlWI" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "CYogA" : rel2Mstr(264),
      "iDTDw" : "1|3|4|0|2|5",
      "GnOIB" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "TPMOb" : rel2Mstr(265)
    };
    same[rel2Mstr(266)][rel2Mstr(267)][rel2Mstr(268)](args[rel2Mstr(269)], (color) => {
      const floor = rel2Mstr;
      const map = {
        "zTWZF" : args[floor(270)],
        "pkXgS" : args[floor(271)],
        "qaHZi" : function(url, key) {
          const parseInt = floor;
          return args[parseInt(272)](url, key);
        }
      };
      const min = color[floor(273)]["chunkLoading"];
      const req = (options) => {
        const String = floor;
        const minMaxMatch = options[String(274)]();
        const deviceHandle = minMaxMatch && minMaxMatch[String(275)] || min;
        return deviceHandle === map[String(276)];
      };
      const arr = new WeakSet;
      const memoryWriteHandler = (val, len) => {
        const parseInt = floor;
        const callbackVals = map[parseInt(277)][parseInt(278)]("|");
        let callbackCount = 7857 + 1674 + -27 * 353;
        for (; !![];) {
          switch(callbackVals[callbackCount++]) {
            case "0":
              len[parseInt(279)](RuntimeGlobals[parseInt(280)]);
              continue;
            case "1":
              if (arr[parseInt(281)](val)) {
                return;
              }
              continue;
            case "2":
              len[parseInt(279)](RuntimeGlobals[parseInt(282)]);
              continue;
            case "3":
              arr[parseInt(279)](val);
              continue;
            case "4":
              if (!map[parseInt(283)](req, val)) {
                return;
              }
              continue;
            case "5":
              color[parseInt(284)](val, new ModuleChunkLoadingRuntimeModule(len));
              continue;
          }
          break;
        }
      };
      color[floor(266)][floor(285)][floor(286)](RuntimeGlobals[floor(287)])[floor(268)](args[floor(269)], memoryWriteHandler);
      color["hooks"][floor(285)][floor(286)](RuntimeGlobals[floor(288)])[floor(268)](args[floor(269)], memoryWriteHandler);
      color[floor(266)][floor(285)][floor(286)](RuntimeGlobals["externalInstallChunk"])[floor(268)](args[floor(269)], memoryWriteHandler);
      color["hooks"][floor(285)][floor(286)](RuntimeGlobals[floor(289)])[floor(268)](args["TPMOb"], memoryWriteHandler);
      color[floor(266)][floor(285)][floor(286)](RuntimeGlobals[floor(290)])[floor(268)](args[floor(269)], (key, canCreateDiscussions) => {
        const parseInt = floor;
        if (!args[parseInt(291)](req, key)) {
          return;
        }
        color[parseInt(284)](key, new ExportWebpackRequireRuntimeModule);
      });
      color[floor(266)]["runtimeRequirementInTree"][floor(286)](RuntimeGlobals[floor(287)])[floor(268)](args[floor(269)], (reply, myPreferences) => {
        const getPreferenceKey = floor;
        if (!args["QWlWI"](req, reply)) {
          return;
        }
        myPreferences[getPreferenceKey(279)](RuntimeGlobals["getChunkScriptFilename"]);
      });
    });
  }
}
function _0x1953(isBgroundImg, stgs) {
  return _0x1953 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (8507 + 2753 + 1 * -11013);
    let _0x1d39e4 = _0x2976[isBgroundImg];
    return _0x1d39e4;
  }, _0x1953(isBgroundImg, stgs);
}
module[_0x350ad3(292)] = ModuleChunkLoadingPlugin;

