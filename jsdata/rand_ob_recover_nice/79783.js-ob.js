'use strict';
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

