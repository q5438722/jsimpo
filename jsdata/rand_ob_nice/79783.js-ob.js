'use strict';
const _0x3baa = ["env", "UNI_PLATFORM", "fxBwb", "script", "JiEOB", "template", "isAppNVue", "customBlocks", "length", "create", "attrs", "module", "vOVBm", "lang", "mWYUn", "cEeZc", "assign", "keys", "parse", "stringify", "forEach", "src", "from", "MNqQh", "2723yDJOlm", "371hyfXZj", "1214255mUpbOZ", "1142943aEgDnc", "5501qhyyWa", "12zEIYjp", "1cTqAja", "775206NQXWWr", "40945SsCzAE", "1pYRyvo", "1487FBbBAW", "594aFrmUz", "@dcloudio/uni-cli-shared/lib/platform", "@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/preprocess", 
"content", "preprocess", "type", "trim", "renderjs", "mp-", "export default {}", "filter-modules", "base64"];
function _0x3d05(isBgroundImg, stgs) {
  return _0x3d05 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (31 * -321 + -5740 + 15856);
    let _0x327c1f = _0x3baa[isBgroundImg];
    return _0x327c1f;
  }, _0x3d05(isBgroundImg, stgs);
}
const _0x47649c = _0x3d05;
(function(data, val) {
  const toMonths = _0x3d05;
  for (; !![];) {
    try {
      const nodeval = -parseInt(toMonths(165)) * -parseInt(toMonths(166)) + -parseInt(toMonths(167)) + parseInt(toMonths(168)) + -parseInt(toMonths(169)) * -parseInt(toMonths(170)) + -parseInt(toMonths(171)) * -parseInt(toMonths(172)) + -parseInt(toMonths(173)) * -parseInt(toMonths(174)) + -parseInt(toMonths(175)) * parseInt(toMonths(176));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x3f0fef) {
      data["push"](data["shift"]());
    }
  }
})(_0x3baa, -22302 + -75 * -16475 + -275517);
const {
  getPlatformFilterTag : getPlatformFilterTag,
  normalizeNodeModules : normalizeNodeModules,
  jsPreprocessOptions : jsPreprocessOptions
} = require(_0x47649c(177));
const preprocessor = require(_0x47649c(178));
const FILTER_TAG = getPlatformFilterTag();
function preprocessBlock(props) {
  const buildModFnName = _0x47649c;
  return props["content"] && (props[buildModFnName(179)] = preprocessor[buildModFnName(180)](props[buildModFnName(179)], jsPreprocessOptions["context"], {
    "type" : jsPreprocessOptions[buildModFnName(181)]
  })[buildModFnName(182)]()), props;
}
module["exports"] = function init(map, layersControl) {
  const parseInt = _0x47649c;
  const data = {
    "vOVBm" : function(name, initialValue) {
      return name === initialValue;
    },
    "mWYUn" : parseInt(183),
    "cEeZc" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "fxBwb" : parseInt(184),
    "JiEOB" : parseInt(185),
    "tjtHa" : parseInt(186),
    "MNqQh" : parseInt(187)
  };
  if (process[parseInt(188)][parseInt(189)] && process[parseInt(188)]["UNI_PLATFORM"]["indexOf"](data[parseInt(190)]) === -1 * 4042 + 990 * 1 + 7 * 436 && !map[parseInt(191)]) {
    map[parseInt(191)] = {
      "type" : parseInt(191),
      "content" : data[parseInt(192)],
      "start" : 100,
      "attrs" : {},
      "end" : 125
    };
  }
  if (!map[parseInt(193)] || !FILTER_TAG || layersControl[parseInt(194)]) {
    return map[parseInt(195)][parseInt(196)] = -75 * 120 + -4982 + 2 * 6991, map;
  }
  const descriptor = Object[parseInt(197)](null);
  map["customBlocks"] = map[parseInt(195)]["filter"]((properties) => {
    const get = parseInt;
    if (properties[get(198)][get(199)] && (data["vOVBm"](properties["type"], FILTER_TAG) || data[get(200)](properties[get(198)][get(201)], FILTER_TAG))) {
      return descriptor[properties["attrs"]["module"]] = preprocessBlock(properties), !![];
    }
    if (properties[get(198)]["module"] && (data[get(200)](properties[get(181)], data[get(202)]) || properties[get(198)]["lang"] === data[get(202)])) {
      properties[get(181)] = data[get(202)];
      properties[get(198)][get(201)] = "js";
      map[get(183)] = data[get(203)](preprocessBlock, properties);
      descriptor[properties[get(198)][get(199)]] = Object[get(204)]({}, properties, {
        "content" : ""
      });
    }
  });
  if (Object[parseInt(205)](descriptor)[parseInt(196)]) {
    const message = JSON[parseInt(206)](JSON[parseInt(207)](descriptor));
    Object[parseInt(205)](message)[parseInt(208)]((tokenOrFunction) => {
      const rel2Mstr = parseInt;
      const same = message[tokenOrFunction];
      if (same[rel2Mstr(198)][rel2Mstr(209)]) {
        same[rel2Mstr(198)][rel2Mstr(209)] = data["cEeZc"](normalizeNodeModules, same[rel2Mstr(198)][rel2Mstr(209)]);
      }
    });
    map[parseInt(193)][parseInt(198)][data["tjtHa"]] = Buffer[parseInt(210)](JSON["stringify"](message))["toString"](data[parseInt(211)]);
  }
  return map;
};

