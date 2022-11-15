'use strict';
const getBabelWebpackConfig = require(_0x50b5f6(159));
const {
  startDevServer : startDevServer
} = require(_0x50b5f6(160));
module[_0x50b5f6(161)] = (el, same, extraInfo) => {
  const rel2Mstr = _0x50b5f6;
  const compiledMetaTag = {
    "gGDpI" : function(require, load, callback, id) {
      return require(load, callback, id);
    },
    "iCmJN" : function(require, load, callback) {
      return require(load, callback);
    },
    "ExCDP" : rel2Mstr(162)
  };
  return compiledMetaTag["iCmJN"](el, compiledMetaTag[rel2Mstr(163)], async(SEVERITIES) => {
    const now = rel2Mstr;
    return startDevServer({
      "options" : SEVERITIES,
      "webpackConfig" : compiledMetaTag[now(164)](getBabelWebpackConfig, el, same, extraInfo)
    });
  }), same[rel2Mstr(165)][rel2Mstr(166)] = !![], same;
};

