'use strict';
function _0x1a88(isBgroundImg, stgs) {
  return _0x1a88 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (1728 + -5361 + 3764);
    let _0x27dff7 = _0xf53e[isBgroundImg];
    return _0x27dff7;
  }, _0x1a88(isBgroundImg, stgs);
}
class EntryOptionPlugin {
  [_0x2d986c(143)](colData) {
    const parseInt = _0x2d986c;
    const frontpageItems = {
      "AveAY" : "EntryOptionPlugin"
    };
    colData["hooks"][parseInt(144)][parseInt(145)](frontpageItems[parseInt(146)], (mmCoreSplitViewBlock, mmaPushNotificationsComponent) => {
      const updateDevicesAfterDelay = parseInt;
      return EntryOptionPlugin[updateDevicesAfterDelay(147)](colData, mmCoreSplitViewBlock, mmaPushNotificationsComponent), !![];
    });
  }
  static [_0x2d986c(147)](PL$22, name, factories) {
    const cleanKey = _0x2d986c;
    const deps = {
      "PYmwk" : function(name, initialValue) {
        return name === initialValue;
      },
      "JTopT" : "function",
      "pmHHL" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "BNinj" : cleanKey(148)
    };
    if (deps[cleanKey(149)](typeof factories, deps[cleanKey(150)])) {
      const HtmlAttribute = deps[cleanKey(151)](require, cleanKey(152));
      (new HtmlAttribute(name, factories))["apply"](PL$22);
    } else {
      const InjectResult = require(deps[cleanKey(153)]);
      for (const binaryDataType of Object[cleanKey(154)](factories)) {
        const result = factories[binaryDataType];
        const connector = EntryOptionPlugin[cleanKey(155)](PL$22, binaryDataType, result);
        for (const actual of result[cleanKey(156)]) {
          (new InjectResult(name, actual, connector))["apply"](PL$22);
        }
      }
    }
  }
  static [_0x2d986c(155)](colData, newPrinter, data) {
    const parseInt = _0x2d986c;
    const formats = {
      "EyduE" : function(value, joiner) {
        return value !== joiner;
      },
      "DBDrm" : parseInt(157),
      "zuekf" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "osimk" : parseInt(158)
    };
    const _0x44e1fc = {
      "name" : newPrinter,
      "filename" : data[parseInt(159)],
      "runtime" : data[parseInt(160)],
      "layer" : data[parseInt(161)],
      "dependOn" : data[parseInt(162)],
      "publicPath" : data[parseInt(163)],
      "chunkLoading" : data["chunkLoading"],
      "wasmLoading" : data["wasmLoading"],
      "library" : data["library"]
    };
    if (formats[parseInt(164)](data[parseInt(161)], undefined) && !colData[parseInt(165)][parseInt(166)][parseInt(167)]) {
      throw new Error(formats[parseInt(168)]);
    }
    if (data[parseInt(169)]) {
      const frontpageItems = require("./javascript/EnableChunkLoadingPlugin");
      frontpageItems[parseInt(170)](colData, data[parseInt(169)]);
    }
    if (data["wasmLoading"]) {
      const symAttrs = formats[parseInt(171)](require, parseInt(172));
      symAttrs["checkEnabled"](colData, data[parseInt(173)]);
    }
    if (data[parseInt(174)]) {
      const frontpageItems = formats[parseInt(171)](require, formats["osimk"]);
      frontpageItems[parseInt(170)](colData, data[parseInt(174)][parseInt(175)]);
    }
    return _0x44e1fc;
  }
}
module[_0x2d986c(176)] = EntryOptionPlugin;
