'use strict';
var _0x1989 = ["table", "length", "isStatic", "isSleeping", "canCollide", "collisionFilter", "midphaseTests", "overlaps", "bounds", "eKeXo", "parts", "split", "collides", "isActive", "collided", "push", "narrowDetections", "reused", "DmpUC", "group", "mask", "category", "iaMEA", "13ErjCBF", "12563SmkFWl", "396134uNPbId", "1403wDucwA", "1qcZkMy", "21401ERIQIe", "1FLgIaZ", "72858UxoNPL", "315146wMQbNW", "1gjzYJy", "1snZFrd", "1182306pFSMbl", "exports", "./Pair", "../geometry/Bounds", "2|1|0|3|5|4", 
"collisions", "pairs"];
var _0x1e1075 = _0x57c9;
(function(data, val) {
  var toMonths = _0x57c9;
  for (; !![];) {
    try {
      var nodeval = parseInt(toMonths(104)) * -parseInt(toMonths(105)) + -parseInt(toMonths(106)) + parseInt(toMonths(107)) * -parseInt(toMonths(108)) + -parseInt(toMonths(109)) * -parseInt(toMonths(110)) + -parseInt(toMonths(111)) + parseInt(toMonths(112)) * -parseInt(toMonths(113)) + parseInt(toMonths(114)) * parseInt(toMonths(115));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x5c0b5b) {
      data["push"](data["shift"]());
    }
  }
})(_0x1989, -424 * -832 + 2909 * 35 + -199736);
var Detector = {};
module[_0x1e1075(116)] = Detector;
var SAT = require("./SAT");
var Pair = require(_0x1e1075(117));
var Bounds = require(_0x1e1075(118));
function _0x57c9(totalExpectedResults, entrySelector) {
  return _0x57c9 = function(hashOrKey, value) {
    hashOrKey = hashOrKey - (-4893 + -102 * -36 + 1 * 1325);
    var _0x4d2e8d = _0x1989[hashOrKey];
    return _0x4d2e8d;
  }, _0x57c9(totalExpectedResults, entrySelector);
}
(function() {
  var normalizeNumber = _0x1e1075;
  var obj = {
    "eKeXo" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "DuVsv" : function(_num1, _num2) {
      return _num1 > _num2;
    },
    "DPXYI" : normalizeNumber(119),
    "DmpUC" : function(name, initialValue) {
      return name === initialValue;
    },
    "zceGi" : function(value, joiner) {
      return value !== joiner;
    },
    "iaMEA" : function(value, joiner) {
      return value !== joiner;
    }
  };
  Detector[normalizeNumber(120)] = function(options, obj) {
    var parseInt = normalizeNumber;
    var retval = [];
    var mappings = obj[parseInt(121)][parseInt(122)];
    var tmpObj = obj["metrics"];
    var name = -1 * -2858 + -9181 + 6323;
    for (; obj["eKeXo"](name, options[parseInt(123)]); name++) {
      var values = options[name][-2551 * 2 + 4925 + 177];
      var map = options[name][-4 * -181 + -6189 + 1 * 5466];
      if ((values[parseInt(124)] || values[parseInt(125)]) && (map[parseInt(124)] || map[parseInt(125)])) {
        continue;
      }
      if (!Detector[parseInt(126)](values[parseInt(127)], map[parseInt(127)])) {
        continue;
      }
      tmpObj[parseInt(128)] += 6189 * 1 + -2879 * 3 + 2449;
      if (Bounds[parseInt(129)](values[parseInt(130)], map[parseInt(130)])) {
        var name = obj["DuVsv"](values["parts"][parseInt(123)], 1198 * -7 + 6050 + 2337) ? 497 * 7 + 7604 + -2 * 5541 : 1560 + 2 * -2897 + 4234;
        for (; obj[parseInt(131)](name, values[parseInt(132)][parseInt(123)]); name++) {
          var data = values[parseInt(132)][name];
          var key = obj["DuVsv"](map[parseInt(132)][parseInt(123)], -449 + -4612 + 5062) ? -4601 + 87 * -43 + -3 * -2781 : -8194 + 1346 + 64 * 107;
          for (; obj[parseInt(131)](key, map[parseInt(132)][parseInt(123)]); key++) {
            var entries = map[parseInt(132)][key];
            if (data === values && entries === map || Bounds[parseInt(129)](data[parseInt(130)], entries[parseInt(130)])) {
              var callbackVals = obj["DPXYI"][parseInt(133)]("|");
              var callbackCount = 7834 + -8551 + 717;
              for (; !![];) {
                switch(callbackVals[callbackCount++]) {
                  case "0":
                    var result = SAT[parseInt(134)](data, entries, item);
                    continue;
                  case "1":
                    if (map && map[parseInt(135)]) {
                      item = map["collision"];
                    } else {
                      item = null;
                    }
                    continue;
                  case "2":
                    var entry = Pair["id"](data, entries);
                    var map = mappings[entry];
                    var item;
                    continue;
                  case "3":
                    tmpObj["narrowphaseTests"] += 8412 + 3 * 44 + -8543 * 1;
                    continue;
                  case "4":
                    if (result[parseInt(136)]) {
                      retval[parseInt(137)](result);
                      tmpObj[parseInt(138)] += -9323 * -1 + 401 * -6 + 38 * -182;
                    }
                    continue;
                  case "5":
                    if (result[parseInt(139)]) {
                      tmpObj["narrowReuseCount"] += -8548 + 1 * -8801 + 17350;
                    }
                    continue;
                }
                break;
              }
            }
          }
        }
      }
    }
    return retval;
  };
  Detector[normalizeNumber(126)] = function(a, b) {
    var getSymbolIterator = normalizeNumber;
    if (obj[getSymbolIterator(140)](a[getSymbolIterator(141)], b[getSymbolIterator(141)]) && a[getSymbolIterator(141)] !== 869 * 5 + 5717 + -10062) {
      return obj["DuVsv"](a[getSymbolIterator(141)], -1 * 7423 + -1186 + 8609);
    }
    return obj["zceGi"](a[getSymbolIterator(142)] & b[getSymbolIterator(143)], 1 * -959 + -9227 + 10186) && obj[getSymbolIterator(144)](b[getSymbolIterator(142)] & a[getSymbolIterator(143)], 1955 + 8110 + -10065);
  };
})();

