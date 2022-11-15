'use strict';
const {
  getPlatformFilterTag : getPlatformFilterTag,
  normalizeNodeModules : normalizeNodeModules,
  jsPreprocessOptions : jsPreprocessOptions
} = require("@dcloudio/uni-cli-shared/lib/platform");
const preprocessor = require("@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/preprocess");
const FILTER_TAG = getPlatformFilterTag();
function preprocessBlock(appContentMap) {
  if (appContentMap["content"]) {
    appContentMap["content"] = preprocessor["preprocess"](appContentMap["content"], jsPreprocessOptions["context"], {
      "type" : jsPreprocessOptions["type"]
    })["trim"]();
  }
  return appContentMap;
}
module["exports"] = function init(items, flightPhase) {
  if (process["env"]["UNI_PLATFORM"] && process["env"]["UNI_PLATFORM"]["indexOf"](_0x302942["vvJsU"]) === 0 && !items["script"]) {
    items["script"] = {
      "type" : _0x302942["LCyFl"],
      "content" : "export default {}",
      "start" : 100,
      "attrs" : {},
      "end" : 125
    };
  }
  if (!items["template"] || !FILTER_TAG || flightPhase["isAppNVue"]) {
    items["customBlocks"]["length"] = 0;
    return items;
  }
  const target = Object["create"](null);
  items["customBlocks"] = items["customBlocks"]["filter"]((settings) => {
    if (settings["attrs"]["module"] && (settings["type"] === FILTER_TAG || settings["attrs"]["lang"] === FILTER_TAG)) {
      if (_0x302942["sselN"] !== _0x302942["MzgNh"]) {
        target[settings["attrs"]["module"]] = preprocessBlock(settings);
        return !![];
      } else {
        items["customBlocks"]["length"] = 0;
        return items;
      }
    }
    if (settings["attrs"]["module"] && (settings["type"] === _0x302942["sbFcL"] || settings["attrs"]["lang"] === "renderjs")) {
      if (_0x302942["zSaPH"] === _0x302942["nRdSQ"]) {
        if (settings["content"]) {
          settings["content"] = preprocessor["preprocess"](settings["content"], jsPreprocessOptions["context"], {
            "type" : jsPreprocessOptions["type"]
          })["trim"]();
        }
        return settings;
      } else {
        settings["type"] = "renderjs";
        settings["attrs"]["lang"] = "js";
        items["renderjs"] = preprocessBlock(settings);
        target[settings["attrs"]["module"]] = Object["assign"]({}, settings, {
          "content" : ""
        });
      }
    }
  });
  if (Object["keys"](target)["length"]) {
    if (_0x302942["uojRB"] !== _0x302942["uojRB"]) {
      if (block["attrs"]["module"] && (block["type"] === FILTER_TAG || block["attrs"]["lang"] === FILTER_TAG)) {
        target[block["attrs"]["module"]] = preprocessBlock(block);
        return !![];
      }
      if (block["attrs"]["module"] && (block["type"] === _0x302942["sbFcL"] || block["attrs"]["lang"] === _0x302942["sbFcL"])) {
        block["type"] = _0x302942["sbFcL"];
        block["attrs"]["lang"] = "js";
        items["renderjs"] = preprocessBlock(block);
        target[block["attrs"]["module"]] = Object["assign"]({}, block, {
          "content" : ""
        });
      }
    } else {
      const PL$15 = JSON["parse"](JSON["stringify"](target));
      Object["keys"](PL$15)["forEach"]((_dynamic) => {
        const res = PL$15[_dynamic];
        if (res["attrs"]["src"]) {
          res["attrs"]["src"] = normalizeNodeModules(res["attrs"]["src"]);
        }
      });
      items["template"]["attrs"][_0x302942["Zuzwa"]] = Buffer["from"](JSON["stringify"](PL$15))["toString"]("base64");
    }
  }
  return items;
};

