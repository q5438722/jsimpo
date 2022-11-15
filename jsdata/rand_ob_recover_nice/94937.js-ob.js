'use strict';
const debug = require(_0x39829e(258))(_0x39829e(259));
const tryLoadWebpackConfig = require(_0x39829e(260));
const {
  allowModuleSourceInPlace : allowModuleSourceInPlace
} = require("../utils/webpack-helpers");
const {
  addCypressToWebpackEslintRulesInPlace : addCypressToWebpackEslintRulesInPlace
} = require("../utils/eslint-helpers");
const {
  getTranspileFolders : getTranspileFolders
} = require(_0x39829e(261));
const {
  addFolderToBabelLoaderTranspileInPlace : addFolderToBabelLoaderTranspileInPlace
} = require(_0x39829e(262));
function _0x1e08(isBgroundImg, stgs) {
  return _0x1e08 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (-5 * 1931 + -1428 + -11 * -1030);
    let _0x3ffb08 = _0x3f41[isBgroundImg];
    return _0x3ffb08;
  }, _0x1e08(isBgroundImg, stgs);
}
module[_0x39829e(263)] = function process(tokens, {
  webpackConfigPath : tiles
} = {
  "webpackConfigPath" : _0x39829e(264)
}) {
  const get = _0x39829e;
  const tileFuncs = {
    "RiFIb" : function(require, load, callback) {
      return require(load, callback);
    },
    "MZWol" : get(265),
    "xjAta" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "ntzfC" : "\u26a0\ufe0f Could not find Webpack options for react-scripts. Make sure that you have react-scripts module available.",
    "CNrxN" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "XuvWW" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  process[get(266)]["FAST_REFRESH"] = tileFuncs[get(267)];
  const to = tileFuncs[get(268)](tryLoadWebpackConfig, tiles);
  if (!to) {
    throw new Error(tileFuncs[get(269)]);
  }
  return tileFuncs[get(270)](addCypressToWebpackEslintRulesInPlace, to), tileFuncs["CNrxN"](getTranspileFolders, tokens)[get(271)]((tiles) => {
    const loadVideoCodec = get;
    tileFuncs[loadVideoCodec(272)](allowModuleSourceInPlace, tiles, to);
    addFolderToBabelLoaderTranspileInPlace(tiles, to);
  }), tileFuncs[get(273)](debug, get(274), to), to;
};

