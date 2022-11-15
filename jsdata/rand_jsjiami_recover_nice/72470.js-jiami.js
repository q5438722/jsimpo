'use strict';
class EntryOptionPlugin {
  ["apply"](targetObj) {
    targetObj["hooks"]["entryOption"]["tap"]("EntryOptionPlugin", (mmCoreSplitViewBlock, mmaPushNotificationsComponent) => {
      EntryOptionPlugin["applyEntryOption"](targetObj, mmCoreSplitViewBlock, mmaPushNotificationsComponent);
      return !![];
    });
  }
  static ["applyEntryOption"](move, name, factories) {
    if (typeof factories === _0x4f63e4["azqZh"]) {
      const HtmlAttribute = require("./DynamicEntryPlugin");
      (new HtmlAttribute(name, factories))["apply"](move);
    } else {
      if (_0x4f63e4["MDPlv"] !== "FIUYa") {
        const cube = require(_0x4f63e4["lQkwF"]);
        cube["checkEnabled"](move, desc["chunkLoading"]);
      } else {
        const InjectResult = require("./EntryPlugin");
        for (const binaryDataType of Object["keys"](factories)) {
          const config = factories[binaryDataType];
          const connector = EntryOptionPlugin["entryDescriptionToOptions"](move, binaryDataType, config);
          for (const bootstrap of config["import"]) {
            if ("MHSzT" !== _0x4f63e4["XsjxA"]) {
              (new InjectResult(name, bootstrap, connector))["apply"](move);
            } else {
              (new InjectResult(name, bootstrap, connector))["apply"](move);
            }
          }
        }
      }
    }
  }
  static ["entryDescriptionToOptions"](sym, newPrinter, data) {
    const _0x270154 = {
      "name" : newPrinter,
      "filename" : data["filename"],
      "runtime" : data["runtime"],
      "layer" : data["layer"],
      "dependOn" : data["dependOn"],
      "publicPath" : data["publicPath"],
      "chunkLoading" : data["chunkLoading"],
      "wasmLoading" : data["wasmLoading"],
      "library" : data["library"]
    };
    if (data["layer"] !== undefined && !sym["options"]["experiments"]["layers"]) {
      if (_0x58477e["iqHnB"] === _0x58477e["UZJsE"]) {
        const symAttrs = require(_0x58477e["RLLin"]);
        symAttrs["checkEnabled"](sym, data["wasmLoading"]);
      } else {
        throw new Error("'entryOptions.layer' is only allowed when 'experiments.layers' is enabled");
      }
    }
    if (data["chunkLoading"]) {
      if ("EMHDE" !== _0x58477e["vJmjM"]) {
        const symAttrs = require(_0x58477e["oVOmw"]);
        symAttrs["checkEnabled"](sym, data["chunkLoading"]);
      } else {
        throw new Error("'entryOptions.layer' is only allowed when 'experiments.layers' is enabled");
      }
    }
    if (data["wasmLoading"]) {
      const symAttrs = require(_0x58477e["RLLin"]);
      symAttrs["checkEnabled"](sym, data["wasmLoading"]);
    }
    if (data["library"]) {
      const crossvent = require(_0x58477e["FwhoR"]);
      crossvent["checkEnabled"](sym, data["library"]["type"]);
    }
    return _0x270154;
  }
}
module["exports"] = EntryOptionPlugin;

