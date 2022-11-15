'use strict';
const _0x358f = ["aiUre", "MvcDH", "mgRlC", "foo", "qoMUW", "Ynlbf", "eehnN", "ZflGP", "wKpEU", "false", "wePfZ", "nMppm", "sRZqV", "SWYHi", "should match if parent is behind variables", "yVUNZ", "mWpDR", "BTtJL", "uETLi", "childParent\x00ok", "lmUdz", "XtizJ", "true", "368728rPnxvs", "128463pLYavS", "14657mYXtCG", "16nZzryC", "66417xPAkam", "4VxrgcM", "379400odMqOY", "348203wnOYax", "15749oKWTcW", "5hCvSsY", "test/unit/lib/configuration/variables/is-property-resolved.test.js", "${a:}", "root", "childParent\x00child", 
"childParent", "parent\x00parentChild", "elo", "should match property directly", "should match if children are behind variables", "should not match not existing"];
const _0x210542 = _0x36d0;
(function(data, val) {
  const toMonths = _0x36d0;
  for (; !![];) {
    try {
      const nodeval = parseInt(toMonths(296)) + parseInt(toMonths(297)) + -parseInt(toMonths(298)) * -parseInt(toMonths(299)) + -parseInt(toMonths(300)) * -parseInt(toMonths(301)) + -parseInt(toMonths(302)) + -parseInt(toMonths(303)) + parseInt(toMonths(304)) * -parseInt(toMonths(305));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x4e98b3) {
      data["push"](data["shift"]());
    }
  }
})(_0x358f, -134315 + 179585 + 145753);
function _0x36d0(isBgroundImg, stgs) {
  return _0x36d0 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (2 * 2787 + 3527 * -1 + 103 * -17);
    let _0x16008b = _0x358f[isBgroundImg];
    return _0x16008b;
  }, _0x36d0(isBgroundImg, stgs);
}
const {
  expect : expect
} = require("chai");
const resolveMeta = require("../../../../../lib/configuration/variables/resolve-meta");
const isPropertyResolved = require("../../../../../lib/configuration/variables/is-property-resolved");
describe(_0x210542(306), () => {
  const min = _0x210542;
  const c = {
    "MvcDH" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "mgRlC" : min(307),
    "eehnN" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "ZflGP" : function(require, load, callback) {
      return require(load, callback);
    },
    "wKpEU" : min(308),
    "wePfZ" : min(309),
    "sRZqV" : function(require, load, callback) {
      return require(load, callback);
    },
    "FSILz" : min(310),
    "koteW" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "jVaBW" : function(require, load, callback) {
      return require(load, callback);
    },
    "yVUNZ" : min(311),
    "aiUre" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "BTtJL" : function(require, load, callback) {
      return require(load, callback);
    },
    "rulMU" : "rooto",
    "uETLi" : function(require, load, callback) {
      return require(load, callback);
    },
    "XtizJ" : function(require, load, callback) {
      return require(load, callback);
    },
    "OzQme" : min(312),
    "qoMUW" : function(require, load, callback) {
      return require(load, callback);
    },
    "Ynlbf" : min(313),
    "nMppm" : min(314),
    "SWYHi" : function(require, load, callback) {
      return require(load, callback);
    },
    "mWpDR" : "should not match not affected",
    "lmUdz" : min(315)
  };
  let code;
  c[min(316)](before, () => {
    const insert = min;
    code = c[insert(317)](resolveMeta, {
      "root" : insert(307),
      "childParent" : {
        "child" : insert(307),
        "ok" : !![]
      },
      "parent" : c[insert(318)],
      "rooto" : insert(319)
    });
  });
  c[min(320)](it, c[min(321)], () => {
    const _getNodeName = min;
    c[_getNodeName(322)](expect, c[_getNodeName(323)](isPropertyResolved, code, c[_getNodeName(324)]))["to"]["be"][_getNodeName(325)];
    expect(c[_getNodeName(323)](isPropertyResolved, code, c[_getNodeName(326)]))["to"]["be"][_getNodeName(325)];
  });
  it(c[min(327)], () => {
    const _getNodeName = min;
    c["eehnN"](expect, c[_getNodeName(328)](isPropertyResolved, code, c["FSILz"]))["to"]["be"][_getNodeName(325)];
  });
  c[min(329)](it, min(330), () => {
    const _getNodeName = min;
    c["koteW"](expect, c["jVaBW"](isPropertyResolved, code, c[_getNodeName(331)]))["to"]["be"][_getNodeName(325)];
  });
  c["SWYHi"](it, c[min(332)], () => {
    const _getNodeName = min;
    c[_getNodeName(316)](expect, c[_getNodeName(333)](isPropertyResolved, code, c["rulMU"]))["to"]["be"]["true"];
    c["aiUre"](expect, c[_getNodeName(334)](isPropertyResolved, code, _getNodeName(335)))["to"]["be"]["true"];
  });
  c["SWYHi"](it, c[min(336)], () => {
    const _getNodeName = min;
    expect(c[_getNodeName(337)](isPropertyResolved, code, c["OzQme"]))["to"]["be"]["true"];
    c[_getNodeName(316)](expect, c[_getNodeName(337)](isPropertyResolved, code, "childParent\x00none"))["to"]["be"][_getNodeName(338)];
  });
});

