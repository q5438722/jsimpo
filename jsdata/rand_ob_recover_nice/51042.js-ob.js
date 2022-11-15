'use strict';
function _0x4907(isBgroundImg, stgs) {
  return _0x4907 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (4381 + -1 * 2946 + 68 * -17);
    let _0x4b799e = _0x208f[isBgroundImg];
    return _0x4b799e;
  }, _0x4907(isBgroundImg, stgs);
}
const common = require(_0x58b135(290));
const crypto = require("crypto");
const bench = common[_0x58b135(291)](main, {
  "writes" : [-823 * 6 + 2996 + 2442],
  "algo" : [_0x58b135(292), _0x58b135(293)],
  "type" : [_0x58b135(294), _0x58b135(295), _0x58b135(296)],
  "out" : [_0x58b135(297), "binary", "buffer"],
  "len" : [-5 * -1525 + -3385 + -1 * 4238, -4119 + 908 + 1 * 4235, -6295 * -15 + -91891 + 334 * 299, (139 * 13 + 9124 + -9907) * (19 * 148 + -1 * 1439 + 1 * -349)],
  "api" : [_0x58b135(298), "stream"]
});
function main({
  api : api,
  type : collection,
  len : id,
  out : fields,
  writes : group,
  algo : parentDocumentId
}) {
  const requester = _0x58b135;
  const global = {
    "LiHde" : function(name, initialValue) {
      return name === initialValue;
    },
    "exywh" : requester(299),
    "NlYiw" : requester(300),
    "wQtjR" : "asc",
    "ykpvU" : "ascii",
    "TZtkh" : "utf",
    "SDCri" : function(_num1, _num2) {
      return _num1 / _num2;
    },
    "kdyuv" : requester(301),
    "fnXbQ" : "buf"
  };
  if (global[requester(302)](api, global["exywh"]) && /^v0\.[0-8]\./[requester(303)](process[requester(304)])) {
    console["error"](global["NlYiw"]);
    api = requester(298);
  }
  let div;
  let model;
  switch(collection) {
    case global[requester(305)]:
      div = "a"["repeat"](id);
      model = global["ykpvU"];
      break;
    case global[requester(306)]:
      div = "\u00fc"[requester(307)](global[requester(308)](id, -27 * 41 + 7090 + -5981 * 1));
      model = global[requester(309)];
      break;
    case global[requester(310)]:
      div = Buffer[requester(311)](id, "b");
      break;
    default:
      throw new Error(requester(312) + collection);
  }
  const create = global[requester(302)](api, global[requester(313)]) ? streamWrite : legacyWrite;
  bench[requester(314)]();
  create(parentDocumentId, div, model, group, id, fields);
}
function legacyWrite(algo, encoding, maxlen, message, selector, context) {
  const now = _0x58b135;
  const window = {
    "GDSjY" : function(mmCoreSecondsDay, daysInterval) {
      return mmCoreSecondsDay * daysInterval;
    },
    "keYZh" : function(_num1, _num2) {
      return _num1 / _num2;
    },
    "gBSjo" : function(mmCoreSecondsDay, daysInterval) {
      return mmCoreSecondsDay * daysInterval;
    },
    "cnmGq" : function(_num1, _num2) {
      return _num1 > _num2;
    },
    "hHoyj" : now(315),
    "HPuAe" : now(316),
    "TsFKG" : "binary"
  };
  const processEvaluatorsCallback = window["GDSjY"](message, selector);
  const universalSendCommand = window[now(317)](processEvaluatorsCallback, -5107 + 7820 + -541 * 5);
  const artistTrack = window[now(318)](universalSendCommand, window[now(319)](window["gBSjo"](4491 + -46 * 89 + 57 * 11, 1382 + 1921 + -2279), 7603 * 1 + -4545 + -2034));
  for (; window[now(320)](message--, -7183 + -472 + -1 * -7655);) {
    const rpm_traffic = crypto["createHash"](algo);
    rpm_traffic[now(321)](encoding, maxlen);
    let body = rpm_traffic["digest"](context);
    if (context === window[now(322)] && typeof body === window[now(323)]) {
      body = Buffer["from"](body, window["TsFKG"]);
    }
  }
  bench[now(324)](artistTrack);
}
function streamWrite(algo, data, message, chunk, len, id) {
  const figureOutWhatToReload = _0x58b135;
  const apiListener = {
    "KrIXJ" : function(mmCoreSecondsDay, daysInterval) {
      return mmCoreSecondsDay * daysInterval;
    },
    "ohFHD" : function(_num1, _num2) {
      return _num1 / _num2;
    },
    "SaSde" : function(value, joiner) {
      return value !== joiner;
    },
    "LrPVy" : figureOutWhatToReload(315)
  };
  const cmd = apiListener[figureOutWhatToReload(325)](chunk, len);
  const register = apiListener["KrIXJ"](cmd, 5444 + -7043 * -1 + -12479);
  const numKeysDeleted = apiListener["ohFHD"](register, apiListener[figureOutWhatToReload(325)](apiListener["KrIXJ"](-253 + -9861 + 11138, 7346 + -8278 * -1 + -14600), 229 * 25 + -9160 + -13 * -343));
  for (; chunk-- > -1220 + 3757 + 1 * -2537;) {
    const actions = crypto[figureOutWhatToReload(326)](algo);
    if (apiListener["SaSde"](id, apiListener["LrPVy"])) {
      actions[figureOutWhatToReload(327)](id);
    }
    actions[figureOutWhatToReload(328)](data, message);
    actions[figureOutWhatToReload(324)]();
    actions[figureOutWhatToReload(329)]();
  }
  bench[figureOutWhatToReload(324)](numKeysDeleted);
}
;
