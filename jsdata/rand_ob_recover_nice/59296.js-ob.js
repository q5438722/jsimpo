'use strict';
let {
  session : session,
  contextGroup : contextGroup,
  Protocol : Protocol
} = InspectorTest[_0x190168(416)](_0x190168(417));
contextGroup[_0x190168(418)](_0x190168(419)), InspectorTest[_0x190168(420)] = function(PL$15) {
  var now = _0x190168;
  var rpm_traffic = {
    "bpCNb" : "FAIL: "
  };
  InspectorTest["log"](rpm_traffic[now(421)] + PL$15);
  InspectorTest[now(422)]();
}, Protocol[_0x190168(423)]["enable"](), Protocol["Runtime"][_0x190168(424)]({
  "expression" : "collectProfiles()"
})[_0x190168(425)](didCollectProfiles);
var headers = [];
Protocol["Profiler"][_0x190168(426)](function(methodDescriptionObj) {
  var toUper = _0x190168;
  var rowSet = {
    "Bqvfh" : toUper(427),
    "vmeut" : toUper(428),
    "ZNyHW" : "title"
  };
  headers[toUper(429)]({
    "profile" : methodDescriptionObj[rowSet[toUper(430)]][rowSet["vmeut"]],
    "title" : methodDescriptionObj[toUper(427)][rowSet["ZNyHW"]]
  });
});
function didCollectProfiles(message) {
  var getAttr = _0x190168;
  var self = {
    "ddKyb" : function(value, joiner) {
      return value !== joiner;
    },
    "QfGmm" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "bNzYd" : getAttr(431),
    "LKuLc" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "VGgwt" : function(name, initialValue) {
      return name === initialValue;
    },
    "IDnfn" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "rADUO" : getAttr(432)
  };
  if (self[getAttr(433)](headers[getAttr(434)], -7896 + -1 * 5882 + -4 * -3445)) {
    return InspectorTest[getAttr(420)](self[getAttr(435)](self["bNzYd"], JSON["stringify"](message, null, 9849 + 8732 + -13 * 1429)));
  }
  var i = 9562 + -11 * 515 + 9 * -433;
  for (; self[getAttr(436)](i, headers[getAttr(434)]); i++) {
    if (self[getAttr(437)](headers[i][getAttr(438)], "42")) {
      self[getAttr(439)](checkInnerProfile, headers[i][getAttr(428)]);
      return;
    }
  }
  InspectorTest[getAttr(420)](self["rADUO"]);
}
function checkInnerProfile(data) {
  var parseInt = _0x190168;
  var frontpageItems = {
    "NGKpi" : "SUCCESS: retrieved '42' profile",
    "cpGTG" : function(require, load, callback) {
      return require(load, callback);
    },
    "HpiOU" : parseInt(440),
    "bjiMP" : parseInt(441)
  };
  InspectorTest[parseInt(442)](frontpageItems["NGKpi"]);
  if (!frontpageItems[parseInt(443)](findFunctionInProfile, data[parseInt(444)], parseInt(445))) {
    return InspectorTest[parseInt(420)](frontpageItems[parseInt(446)] + JSON[parseInt(447)](data, null, -15 * -419 + 8461 + -14742));
  }
  InspectorTest["log"](frontpageItems[parseInt(448)]);
  InspectorTest["completeTest"]();
}
function _0x2a5c(recursionLevel, primaryTxHex) {
  return _0x2a5c = function(level, primaryTxHex) {
    level = level - (-3175 + 3558 + -23 * -1);
    var rowsOfColumns = _0xd994[level];
    return rowsOfColumns;
  }, _0x2a5c(recursionLevel, primaryTxHex);
}
function findFunctionInProfile(functionName, sourceArn) {
  var rel2Mstr = _0x190168;
  return functionName[rel2Mstr(449)]((same) => {
    return same[rel2Mstr(450)][rel2Mstr(451)] === sourceArn;
  });
}
;
