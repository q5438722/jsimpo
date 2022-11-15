'use strict';
const _0x4d16 = ["window.stories = ", "stringify", "114489nmukoI", "703812efGYYq", "1xhIWSf", "949211qqehEv", "78NLOZWE", "15937KsCvwy", "104378wMcFsX", "54386TJCsee", "21QgKJxI", "505833WvHPMu", "node-fetch", "https://hacker-news.firebaseio.com/v0/item/", ".json", "json", "top-stories.json", "otbVj", "XWTWP", "ZtVvH", "VykCy"];
const _0x3ce696 = _0x1262;
(function(data, val) {
  const toMonths = _0x1262;
  for (; !![];) {
    try {
      const nodeval = -parseInt(toMonths(352)) + parseInt(toMonths(353)) + parseInt(toMonths(354)) * parseInt(toMonths(355)) + parseInt(toMonths(356)) * -parseInt(toMonths(357)) + -parseInt(toMonths(358)) + parseInt(toMonths(359)) * parseInt(toMonths(360)) + -parseInt(toMonths(361));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x2db48c) {
      data["push"](data["shift"]());
    }
  }
})(_0x4d16, 1276707 + -845074 * 1 + 10 * 39571);
function _0x1262(isBgroundImg, stgs) {
  return _0x1262 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (-947 * -3 + -2 * -1361 + -5211);
    let _0x3f0760 = _0x4d16[isBgroundImg];
    return _0x3f0760;
  }, _0x1262(isBgroundImg, stgs);
}
const fetch = require(_0x3ce696(362));
const {
  writeFileSync : writeFileSync
} = require("fs");
const stories = -3742 + 5631 + -1 * 1839;
async function getStory(_sourceStr) {
  const now = _0x3ce696;
  const rpm_traffic = await fetch(now(363) + _sourceStr + now(364));
  return await rpm_traffic[now(365)]();
}
async function getTopStories() {
  const now = _0x3ce696;
  const _related2 = {
    "eZSpc" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "wTbsP" : "https://hacker-news.firebaseio.com/v0/topstories.js",
    "otbVj" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "XWTWP" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "ZtVvH" : function(require, load, callback) {
      return require(load, callback);
    },
    "VykCy" : now(366)
  };
  const rpm_traffic = await _related2["eZSpc"](fetch, _related2["wTbsP"]);
  const conf_lang_text = await rpm_traffic[now(365)]();
  const value = [];
  for (let i = -111 * 17 + 1 * 2591 + -704; _related2[now(367)](i, stories); i++) {
    const relationName = conf_lang_text[i];
    value["push"](await _related2[now(368)](getStory, relationName));
  }
  _related2[now(369)](writeFileSync, _related2[now(370)], now(371) + JSON[now(372)](value));
}
getTopStories();

