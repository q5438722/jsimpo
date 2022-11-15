'use strict';
var _0xd994 = ["functionName", "24Dvuseo", "8867Hcepfg", "1005926SXohtd", "321899Znuwey", "200717blkHBx", "1RbieQz", "290584DEKhBa", "917474gAYKWc", "91741lmrkFy", "5NWtNJu", "start", "Tests that console.profile/profileEnd will record CPU profile when inspector front-end is connected.", "addScript", '\nfunction collectProfiles()\n{\n  console.profile("outer");\n  console.profile(42);\n  console.profileEnd("outer");\n  console.profileEnd(42);\n}', "fail", "bpCNb", "completeTest", "Profiler", "evaluate", 
"then", "onConsoleProfileFinished", "params", "profile", "push", "Bqvfh", "Cannot retrive headers: ", "Cannot find '42' profile header", "ddKyb", "length", "QfGmm", "LKuLc", "VGgwt", "title", "IDnfn", "collectProfiles function not found in the profile: ", "SUCCESS: found 'collectProfiles' function in the profile", "log", "cpGTG", "nodes", "collectProfiles", "HpiOU", "stringify", "bjiMP", "some", "callFrame"];
var _0x190168 = _0x2a5c;
(function(data, val) {
  var toMonths = _0x2a5c;
  for (; !![];) {
    try {
      var nodeval = -parseInt(toMonths(406)) * parseInt(toMonths(407)) + parseInt(toMonths(408)) + parseInt(toMonths(409)) + parseInt(toMonths(410)) * parseInt(toMonths(411)) + -parseInt(toMonths(412)) + -parseInt(toMonths(413)) + -parseInt(toMonths(414)) * -parseInt(toMonths(415));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x39109e) {
      data["push"](data["shift"]());
    }
  }
})(_0xd994, 1 * -568189 + -5 * -68342 + 580 * 1367);
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
function _0x2a5c(totalExpectedResults, entrySelector) {
  return _0x2a5c = function(hashOrKey, value) {
    hashOrKey = hashOrKey - (-3175 + 3558 + -23 * -1);
    var _0x82efe8 = _0xd994[hashOrKey];
    return _0x82efe8;
  }, _0x2a5c(totalExpectedResults, entrySelector);
}
function findFunctionInProfile(functionName, sourceArn) {
  var rel2Mstr = _0x190168;
  return functionName[rel2Mstr(449)]((same) => {
    return same[rel2Mstr(450)][rel2Mstr(451)] === sourceArn;
  });
}
;
