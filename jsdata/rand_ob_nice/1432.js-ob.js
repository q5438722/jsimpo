'use strict';
const _0x2b93 = ["activatePackage", "sCvef", "deactivatePackage", "VRaRg", "commands", "filter", "includes", "forEach", "name", "988229ZWAzBs", "841492BJvMBw", "88471TGgFHs", "8rCwKiU", "524579gQQNyw", "5137COJXNl", "139kOjcuW", "1367NOkmXU", "401NjVKjp", "199807cGITua", "8qhWsyD", "temp", "track", "git-diff:move-to-previous-diff", "git-diff", "fixtures", "git.git", "When the module is deactivated", "AKbyX", "mkdirSync", "git-diff-spec-", "copySync", "join", "working-dir", "moveSync", ".git", "workspace", 
"getElement", "jdQpj", "sample.js", "getActiveTextEditor", "views", "ZQuEU", "xzgLF", "removes all registered command hooks after deactivation.", "dVfJS", "JEdYm", "packages"];
const _0x51c5df = _0x311b;
(function(data, val) {
  const toMonths = _0x311b;
  for (; !![];) {
    try {
      const nodeval = parseInt(toMonths(117)) + parseInt(toMonths(118)) + parseInt(toMonths(119)) * parseInt(toMonths(120)) + -parseInt(toMonths(121)) + parseInt(toMonths(122)) * parseInt(toMonths(123)) + -parseInt(toMonths(124)) * parseInt(toMonths(125)) + parseInt(toMonths(126)) * -parseInt(toMonths(127));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x200d9a) {
      data["push"](data["shift"]());
    }
  }
})(_0x2b93, 4202 * -2 + -1 * 843747 + 1432481);
function _0x311b(isBgroundImg, stgs) {
  return _0x311b = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (-8646 + -1 * -6530 + 2233);
    let _0x2aecd2 = _0x2b93[isBgroundImg];
    return _0x2aecd2;
  }, _0x311b(isBgroundImg, stgs);
}
const path = require("path");
const fs = require("fs-plus");
const temp = require(_0x51c5df(128))[_0x51c5df(129)]();
const commands = ["git-diff:toggle-diff-list", "git-diff:move-to-next-diff", _0x51c5df(130)];
describe(_0x51c5df(131), () => {
  const now = _0x51c5df;
  const rpm_traffic = {
    "nLYic" : now(132),
    "WHaRc" : now(133),
    "jdQpj" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "AKbyX" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "ZQuEU" : function(require, load, callback) {
      return require(load, callback);
    },
    "xzgLF" : now(134)
  };
  let xPathQuery;
  let xPathResults;
  rpm_traffic[now(135)](beforeEach, () => {
    const getResponsesAnalysisDataPrefixCacheKey = now;
    const B523 = temp[getResponsesAnalysisDataPrefixCacheKey(136)](getResponsesAnalysisDataPrefixCacheKey(137));
    fs[getResponsesAnalysisDataPrefixCacheKey(138)](path[getResponsesAnalysisDataPrefixCacheKey(139)](__dirname, rpm_traffic["nLYic"], getResponsesAnalysisDataPrefixCacheKey(140)), B523);
    fs[getResponsesAnalysisDataPrefixCacheKey(141)](path["join"](B523, rpm_traffic["WHaRc"]), path[getResponsesAnalysisDataPrefixCacheKey(139)](B523, getResponsesAnalysisDataPrefixCacheKey(142)));
    atom["project"]["setPaths"]([B523]);
    jasmine["attachToDOM"](atom[getResponsesAnalysisDataPrefixCacheKey(143)][getResponsesAnalysisDataPrefixCacheKey(144)]());
    rpm_traffic[getResponsesAnalysisDataPrefixCacheKey(145)](waitsForPromise, () => {
      return atom["workspace"]["open"](getResponsesAnalysisDataPrefixCacheKey(146));
    });
    rpm_traffic["AKbyX"](runs, () => {
      const updateDevicesAfterDelay = getResponsesAnalysisDataPrefixCacheKey;
      xPathQuery = atom["workspace"][updateDevicesAfterDelay(147)]();
      xPathResults = atom[updateDevicesAfterDelay(148)]["getView"](xPathQuery);
    });
  });
  rpm_traffic[now(149)](describe, rpm_traffic[now(150)], () => {
    const getResponsesAnalysisDataPrefixCacheKey = now;
    const _destructure2 = {
      "BXqzu" : function(mmCoreSplitViewBlock, $state) {
        const now = _0x311b;
        return rpm_traffic[now(135)](mmCoreSplitViewBlock, $state);
      },
      "dVfJS" : getResponsesAnalysisDataPrefixCacheKey(131),
      "JEdYm" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "sCvef" : function(mmCoreSplitViewBlock, $state) {
        const now = getResponsesAnalysisDataPrefixCacheKey;
        return rpm_traffic[now(135)](mmCoreSplitViewBlock, $state);
      }
    };
    rpm_traffic["ZQuEU"](it, getResponsesAnalysisDataPrefixCacheKey(151), () => {
      const edgeId = getResponsesAnalysisDataPrefixCacheKey;
      const opts = {
        "VRaRg" : function(model, relations) {
          return _destructure2["BXqzu"](model, relations);
        },
        "fugbE" : _destructure2[edgeId(152)]
      };
      _destructure2[edgeId(153)](waitsForPromise, () => {
        return atom[edgeId(154)][edgeId(155)](edgeId(131));
      });
      _destructure2[edgeId(156)](waitsForPromise, () => {
        return atom[edgeId(154)][edgeId(157)]("git-diff");
      });
      runs(() => {
        const trim = edgeId;
        opts[trim(158)](expect, atom[trim(154)]["isPackageActive"](opts["fugbE"]))["toBe"](![]);
        atom[trim(159)]["findCommands"]({
          "target" : xPathResults
        })[trim(160)](({
          name : instance
        }) => {
          return commands[trim(161)](instance);
        })[trim(162)]((data) => {
          return expect(commands)["not"]["toContain"](data[trim(163)]);
        });
      });
    });
  });
});

