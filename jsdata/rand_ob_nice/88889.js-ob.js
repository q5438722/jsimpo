'use strict';
var _0xa893 = ["meteor_facts", "publish", "FttuA", "ZqCee", "userId", "without", "push", "setUserIdFilter", "server", "Collection", "helpers", "oamxe", "_id", "serverFacts", "onCreated", "_stopHandle", "subscribe", "SDWnV", "onDestroyed", "509855SPJFHn", "878014pDaDab", "144986TwuKNh", "5CbBgzp", "124RxoVHU", "12310ehDccq", "15057lfxvhF", "109DZmQtv", "1stoCGc", "1690141URRbcT", "3763DjPRVs", "42MMuurp", "meteor_Facts_server", "isServer", "2|6|1|3|4|0|5", "split", "1|5|4|0|3|6|2", "VbvCC", "has", 
"each", "added", "autopublish", "_factsByPackage", "2|1|5|4|3|0"];
var _0x3b7a45 = _0x3b52;
(function(data, val) {
  var toMonths = _0x3b52;
  for (; !![];) {
    try {
      var nodeval = -parseInt(toMonths(415)) + parseInt(toMonths(416)) + parseInt(toMonths(417)) * -parseInt(toMonths(418)) + parseInt(toMonths(419)) * parseInt(toMonths(420)) + parseInt(toMonths(421)) * parseInt(toMonths(422)) + -parseInt(toMonths(423)) * parseInt(toMonths(424)) + -parseInt(toMonths(425)) * parseInt(toMonths(426));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x29be5b) {
      data["push"](data["shift"]());
    }
  }
})(_0xa893, 735608 * 2 + 1859814 + -2368335), Facts = {};
var serverFactsCollection = _0x3b7a45(427);
function _0x3b52(totalExpectedResults, entrySelector) {
  return _0x3b52 = function(hashOrKey, value) {
    hashOrKey = hashOrKey - (-7189 + 5 * -1159 + -1 * -13399);
    var _0xa57c8f = _0xa893[hashOrKey];
    return _0xa57c8f;
  }, _0x3b52(totalExpectedResults, entrySelector);
}
if (Meteor[_0x3b7a45(428)]) {
  var FMbinn = _0x3b7a45(429)[_0x3b7a45(430)]("|");
  var ghiiEn = -7798 + -2224 + 10022;
  for (; !![];) {
    switch(FMbinn[ghiiEn++]) {
      case "0":
        Facts["incrementServerFact"] = function(evt, p, change) {
          var rel2Mstr = _0x3b7a45;
          var same = {
            "VbvCC" : rel2Mstr(431)
          };
          var callbackVals = same[rel2Mstr(432)][rel2Mstr(430)]("|");
          var callbackCount = 7571 + 377 * 22 + -15865;
          for (; !![];) {
            switch(callbackVals[callbackCount++]) {
              case "0":
                factsByPackage[evt][p] += change;
                continue;
              case "1":
                if (!_[rel2Mstr(433)](factsByPackage, evt)) {
                  factsByPackage[evt] = {};
                  factsByPackage[evt][p] = change;
                  _[rel2Mstr(434)](activeSubscriptions, function(myPreferences) {
                    var getPreferenceKey = rel2Mstr;
                    myPreferences[getPreferenceKey(435)](serverFactsCollection, evt, factsByPackage[evt]);
                  });
                  return;
                }
                continue;
              case "2":
                _[rel2Mstr(434)](activeSubscriptions, function(GestureStateTypes) {
                  GestureStateTypes["changed"](serverFactsCollection, evt, persistentParams);
                });
                continue;
              case "3":
                var persistentParams = {};
                continue;
              case "4":
                if (!_[rel2Mstr(433)](list, p)) {
                  factsByPackage[evt][p] = -5430 + 4754 + -169 * -4;
                }
                continue;
              case "5":
                var list = factsByPackage[evt];
                continue;
              case "6":
                persistentParams[p] = factsByPackage[evt][p];
                continue;
            }
            break;
          }
        };
        continue;
      case "1":
        var factsByPackage = {};
        continue;
      case "2":
        var userIdFilter = function(canCreateDiscussions) {
          var gotoNewOfflinePage = _0x3b7a45;
          return !!Package[gotoNewOfflinePage(436)];
        };
        continue;
      case "3":
        var activeSubscriptions = [];
        continue;
      case "4":
        Facts[_0x3b7a45(437)] = factsByPackage;
        continue;
      case "5":
        Meteor["defer"](function() {
          var nu = _0x3b7a45;
          var rpm_traffic = {
            "FttuA" : nu(438),
            "ZqCee" : function(saveNotifs, notifications) {
              return saveNotifs(notifications);
            },
            "LJFVu" : nu(439)
          };
          Meteor[nu(440)](rpm_traffic["LJFVu"], function() {
            var now = nu;
            var callbackVals = rpm_traffic[now(441)][now(430)]("|");
            var callbackCount = -5025 + 510 + 15 * 301;
            for (; !![];) {
              switch(callbackVals[callbackCount++]) {
                case "0":
                  backEl["ready"]();
                  continue;
                case "1":
                  if (!rpm_traffic[now(442)](userIdFilter, this[now(443)])) {
                    backEl["ready"]();
                    return;
                  }
                  continue;
                case "2":
                  var backEl = this;
                  continue;
                case "3":
                  backEl["onStop"](function() {
                    var mat = now;
                    activeSubscriptions = _[mat(444)](activeSubscriptions, backEl);
                  });
                  continue;
                case "4":
                  _[now(434)](factsByPackage, function(leftFence, duration) {
                    var mat = now;
                    backEl[mat(435)](serverFactsCollection, duration, leftFence);
                  });
                  continue;
                case "5":
                  activeSubscriptions[now(445)](backEl);
                  continue;
              }
              break;
            }
          }, {
            "is_auto" : !![]
          });
        });
        continue;
      case "6":
        Facts[_0x3b7a45(446)] = function(canCreateDiscussions) {
          userIdFilter = canCreateDiscussions;
        };
        continue;
    }
    break;
  }
} else {
  Facts[_0x3b7a45(447)] = new (Mongo[_0x3b7a45(448)])(serverFactsCollection);
  Template["serverFacts"][_0x3b7a45(449)]({
    "factsByPackage" : function() {
      var gotoNewOfflinePage = _0x3b7a45;
      return Facts[gotoNewOfflinePage(447)]["find"]();
    },
    "facts" : function() {
      var lastCallback = _0x3b7a45;
      var base = {
        "oamxe" : function(value, joiner) {
          return value !== joiner;
        }
      };
      var PL$6 = [];
      return _[lastCallback(434)](this, function(command_module_id, i) {
        var cb = lastCallback;
        if (base[cb(450)](i, cb(451))) {
          PL$6[cb(445)]({
            "name" : i,
            "value" : command_module_id
          });
        }
      }), PL$6;
    }
  });
  Template[_0x3b7a45(452)][_0x3b7a45(453)](function() {
    var now = _0x3b7a45;
    var rpm_traffic = {
      "SDWnV" : now(439)
    };
    this[now(454)] = Meteor[now(455)](rpm_traffic[now(456)]);
  });
  Template[_0x3b7a45(452)][_0x3b7a45(457)](function() {
    var gotoNewOfflinePage = _0x3b7a45;
    if (this[gotoNewOfflinePage(454)]) {
      this[gotoNewOfflinePage(454)]["stop"]();
      this[gotoNewOfflinePage(454)] = null;
    }
  });
}
;
