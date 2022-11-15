'use strict';
var _0xa334 = ["1MrZdsD", "636003ZnvRFQ", "123393kvwgkE", "10ZwqSXM", "131861qpunFg", "316541ZrdDPY", "419LUVdns", "1931MYXSQs", "1082090yISryF", "394488bwQJYQ", "../", "tape", "dotted alias", "--a.b", "aa.bb", "IncBG", "MgITF", "miweO", "equal", "end", "dotted default", "IhDDS", "jXeol"];
function _0x3597(totalExpectedResults, entrySelector) {
  return _0x3597 = function(hashOrKey, value) {
    hashOrKey = hashOrKey - (-7647 + 1253 * -7 + 1657 * 10);
    var _0xe52a04 = _0xa334[hashOrKey];
    return _0xe52a04;
  }, _0x3597(totalExpectedResults, entrySelector);
}
var _0x2d69ab = _0x3597;
(function(data, val) {
  var toMonths = _0x3597;
  for (; !![];) {
    try {
      var nodeval = parseInt(toMonths(152)) * -parseInt(toMonths(153)) + -parseInt(toMonths(154)) * -parseInt(toMonths(155)) + -parseInt(toMonths(156)) + parseInt(toMonths(157)) + parseInt(toMonths(158)) * -parseInt(toMonths(159)) + parseInt(toMonths(160)) + -parseInt(toMonths(161));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x19d838) {
      data["push"](data["shift"]());
    }
  }
})(_0xa334, -1004453 + -1 * -679711 + 985862);
var parse = require(_0x2d69ab(162));
var test = require(_0x2d69ab(163));
test(_0x2d69ab(164), function(docs) {
  var now = _0x2d69ab;
  var rpm_traffic = {
    "IncBG" : function(require, load, callback) {
      return require(load, callback);
    },
    "MgITF" : now(165),
    "miweO" : now(166)
  };
  var items = rpm_traffic[now(167)](parse, [rpm_traffic[now(168)], "22"], {
    "default" : {
      "a.b" : 11
    },
    "alias" : {
      "a.b" : rpm_traffic[now(169)]
    }
  });
  docs["equal"](items["a"]["b"], 48 * 11 + 1 * -4281 + 5 * 755);
  docs[now(170)](items["aa"]["bb"], -1019 * 4 + -2937 + -3 * -2345);
  docs[now(171)]();
}), test(_0x2d69ab(172), function(myPreferences) {
  var getPreferenceKey = _0x2d69ab;
  var view = {
    "IhDDS" : function(require, load, callback) {
      return require(load, callback);
    },
    "utnBm" : getPreferenceKey(166)
  };
  var items = view[getPreferenceKey(173)](parse, "", {
    "default" : {
      "a.b" : 11
    },
    "alias" : {
      "a.b" : view["utnBm"]
    }
  });
  myPreferences[getPreferenceKey(170)](items["a"]["b"], -7083 + -1 * 9601 + 16695);
  myPreferences[getPreferenceKey(170)](items["aa"]["bb"], 1 * -5315 + 394 * -21 + 13600);
  myPreferences[getPreferenceKey(171)]();
}), test("dotted default with no alias", function(myPreferences) {
  var getPreferenceKey = _0x2d69ab;
  var view = {
    "jXeol" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  var attrs = view[getPreferenceKey(174)](parse, "", {
    "default" : {
      "a.b" : 11
    }
  });
  myPreferences[getPreferenceKey(170)](attrs["a"]["b"], 14 * 53 + 6777 + 2 * -3754);
  myPreferences[getPreferenceKey(171)]();
});

