'use strict';
const _0x4046 = ["SEinn", "promises", "writeFile", "resolve", "iwXEk", "Mexnw", ".env.", "VrJip", "clear", "aqiNb", "jIFMo", "should load environment variables from default .env file if no matching stage", "env", "equal", "bwfkm", "MRmfW", "STAGE_ENV_VARIABLE", "undefined", "GfXQi", "UGRYs", "KuLOh", "748389ztvznA", "687224CZcEwm", "1843783RzAEUo", "1XeDSwg", "236661tgLTok", "1860071newkZJ", "1wBtojK", "1061430NnypcR", "1xpoVDM", "3381685XSIqrf", "chai", "path", "chai-as-promised", "test/unit/lib/cli/conditionally-load-dotenv.test.js", 
"DEFAULT_ENV_VARIABLE=valuefromdefault", ".env", "testing", "STAGE_ENV_VARIABLE=valuefromstage", "valuefromdefault", "valuefromstage", "should load environment variables from stage .env file if matching stage"];
const _0x5efa07 = _0x4f4c;
(function(data, val) {
  const toMonths = _0x4f4c;
  for (; !![];) {
    try {
      const nodeval = parseInt(toMonths(114)) + parseInt(toMonths(115)) + parseInt(toMonths(116)) + -parseInt(toMonths(117)) * -parseInt(toMonths(118)) + -parseInt(toMonths(119)) * -parseInt(toMonths(120)) + -parseInt(toMonths(121)) + -parseInt(toMonths(122)) * parseInt(toMonths(123));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x32733d) {
      data["push"](data["shift"]());
    }
  }
})(_0x4046, -9342 * -115 + -34613 * -26 + 4285 * -243);
const chai = require(_0x5efa07(124));
const path = require(_0x5efa07(125));
const overrideEnv = require("process-utils/override-env");
const fs = require("fs");
const conditionallyLoadDotenv = require("../../../../lib/cli/conditionally-load-dotenv");
chai["use"](require(_0x5efa07(126)));
const expect = require(_0x5efa07(124))["expect"];
function _0x4f4c(isBgroundImg, stgs) {
  return _0x4f4c = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (49 * -12 + 1 * 4907 + -4205);
    let _0x22003e = _0x4046[isBgroundImg];
    return _0x22003e;
  }, _0x4f4c(isBgroundImg, stgs);
}
describe(_0x5efa07(127), () => {
  const _findNodeIndex = _0x5efa07;
  const list = {
    "SEinn" : _findNodeIndex(128),
    "iwXEk" : _findNodeIndex(129),
    "Mexnw" : _findNodeIndex(130),
    "gjicm" : _findNodeIndex(131),
    "aqiNb" : function(saveNotifs) {
      return saveNotifs();
    },
    "UGRYs" : function(require, load, callback) {
      return require(load, callback);
    },
    "bwfkm" : _findNodeIndex(132),
    "MRmfW" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "VrJip" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "KuLOh" : _findNodeIndex(133),
    "jIFMo" : function(require, load, callback) {
      return require(load, callback);
    },
    "GfXQi" : function(require, load, callback) {
      return require(load, callback);
    },
    "sGVtd" : _findNodeIndex(134)
  };
  let data;
  before(async() => {
    const getResponsesAnalysisDataPrefixCacheKey = _findNodeIndex;
    const artistTrack = list[getResponsesAnalysisDataPrefixCacheKey(135)];
    await fs[getResponsesAnalysisDataPrefixCacheKey(136)][getResponsesAnalysisDataPrefixCacheKey(137)](path[getResponsesAnalysisDataPrefixCacheKey(138)](list[getResponsesAnalysisDataPrefixCacheKey(139)]), artistTrack);
    const groupId = list[getResponsesAnalysisDataPrefixCacheKey(140)];
    const GET_AUTH_URL_TIMEOUT = list["gjicm"];
    await fs[getResponsesAnalysisDataPrefixCacheKey(136)][getResponsesAnalysisDataPrefixCacheKey(137)](path[getResponsesAnalysisDataPrefixCacheKey(138)](getResponsesAnalysisDataPrefixCacheKey(141) + groupId), GET_AUTH_URL_TIMEOUT);
  });
  list[_findNodeIndex(142)](beforeEach, () => {
    const wrapIndex = _findNodeIndex;
    conditionallyLoadDotenv[wrapIndex(143)]();
    ({
      restoreEnv : data
    } = list[wrapIndex(144)](overrideEnv));
  });
  list[_findNodeIndex(142)](afterEach, () => {
    const wrapIndex = _findNodeIndex;
    if (data) {
      list[wrapIndex(144)](data);
    }
  });
  list[_findNodeIndex(145)](it, _findNodeIndex(146), async() => {
    const wrapIndex = _findNodeIndex;
    await list["UGRYs"](conditionallyLoadDotenv, {}, {
      "useDotenv" : !![]
    });
    expect(process[wrapIndex(147)]["DEFAULT_ENV_VARIABLE"])["to"][wrapIndex(148)](list[wrapIndex(149)]);
    list[wrapIndex(150)](expect, process[wrapIndex(147)][wrapIndex(151)])["to"]["be"][wrapIndex(152)];
  });
  list[_findNodeIndex(153)](it, list["sGVtd"], async() => {
    const wrapIndex = _findNodeIndex;
    await list[wrapIndex(154)](conditionallyLoadDotenv, {
      "stage" : list[wrapIndex(140)]
    }, {
      "useDotenv" : !![]
    });
    expect(process[wrapIndex(147)]["DEFAULT_ENV_VARIABLE"])["to"]["be"][wrapIndex(152)];
    list[wrapIndex(142)](expect, process[wrapIndex(147)]["STAGE_ENV_VARIABLE"])["to"]["equal"](list[wrapIndex(155)]);
  });
});

