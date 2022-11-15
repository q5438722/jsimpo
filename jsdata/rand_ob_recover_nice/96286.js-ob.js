'use strict';
var parse = require(_0x2d69ab(162));
var test = require(_0x2d69ab(163));
test(_0x2d69ab(164), function(myPreferences) {
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
  myPreferences["equal"](items["a"]["b"], 48 * 11 + 1 * -4281 + 5 * 755);
  myPreferences[now(170)](items["aa"]["bb"], -1019 * 4 + -2937 + -3 * -2345);
  myPreferences[now(171)]();
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

