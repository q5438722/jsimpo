'use strict';
var vip = "vip.v6";
var _0x2bc4 = [vip, "M0HDs8KfEw==", "SmA/LMOz", "w5LDjcO5WA==", "N8OSwo7CqsOa", "YnPDlcO0w68=", "X1jDl3fCtw==", "ZHcmUcOtwr0=", "Y8ObMcOHbw==", "w61sc3Mv", "vmVnDWVipO.v6OlBJentgnD=="];
(function(obj, count, long) {
  var fn = function(to, value, str, val, key) {
    value = value >> 8;
    key = "po";
    var str = "shift";
    var method = "push";
    if (value < to) {
      for (; --to;) {
        val = obj[str]();
        if (value === to) {
          value = val;
          str = obj[key + "p"]();
        } else {
          if (value && str["replace"](/[mVnDWVOOlBJentgnD=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662119;
  };
  return fn(++count, long) >> count ^ long;
})(_0x2bc4, 114, 29184);
var _0x22f9 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x2bc4[a];
  if (_0x22f9["MsLUSv"] === undefined) {
    (function() {
      var jid = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
      var listeners = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      if (!jid["atob"]) {
        jid["atob"] = function(i) {
          var str = String(i)["replace"](/=+$/, "");
          var bc = 0;
          var bs;
          var buffer;
          var Y = 0;
          var pix_color = "";
          for (; buffer = str["charAt"](Y++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? pix_color = pix_color + String["fromCharCode"](255 & bs >> (-2 * bc & 6)) : 0) {
            buffer = listeners["indexOf"](buffer);
          }
          return pix_color;
        };
      }
    })();
    var testcase = function(data, fn) {
      var secretKey = [];
      var y = 0;
      var temp;
      var testResult = "";
      var tempData = "";
      data = atob(data);
      var val = 0;
      var key = data["length"];
      for (; val < key; val++) {
        tempData = tempData + ("%" + ("00" + data["charCodeAt"](val)["toString"](16))["slice"](-2));
      }
      data = decodeURIComponent(tempData);
      var x = 0;
      for (; x < 256; x++) {
        secretKey[x] = x;
      }
      x = 0;
      for (; x < 256; x++) {
        y = (y + secretKey[x] + fn["charCodeAt"](x % fn["length"])) % 256;
        temp = secretKey[x];
        secretKey[x] = secretKey[y];
        secretKey[y] = temp;
      }
      x = 0;
      y = 0;
      var i = 0;
      for (; i < data["length"]; i++) {
        x = (x + 1) % 256;
        y = (y + secretKey[x]) % 256;
        temp = secretKey[x];
        secretKey[x] = secretKey[y];
        secretKey[y] = temp;
        testResult = testResult + String["fromCharCode"](data["charCodeAt"](i) ^ secretKey[(secretKey[x] + secretKey[y]) % 256]);
      }
      return testResult;
    };
    _0x22f9["iZsPWE"] = testcase;
    _0x22f9["cpBmxA"] = {};
    _0x22f9["MsLUSv"] = !![];
  }
  var A = _0x22f9["cpBmxA"][a];
  if (A === undefined) {
    if (_0x22f9["DHDZGI"] === undefined) {
      _0x22f9["DHDZGI"] = !![];
    }
    value = _0x22f9["iZsPWE"](value, opt_max);
    _0x22f9["cpBmxA"][a] = value;
  } else {
    value = A;
  }
  return value;
};
(function() {
  function assert(done) {
    TESTS[_0x22f9("1", "yDo5")](assertTrue, TESTS[_0x22f9("2", "%8kJ")](done) instanceof done);
    TESTS["FLLFD"](assertTrue, TESTS[_0x22f9("3", "#g2n")](TESTS[_0x22f9("4", "pQeY")](done, 5), done));
    TESTS["auCvj"](assertTrue, TESTS["bEBwL"](done(1, 2, 3), done));
  }
  var TESTS = {
    "FLLFD" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "ogPQu" : function(saveNotifs) {
      return saveNotifs();
    },
    "bEBwL" : function(impromptuInstance, Impromptu) {
      return impromptuInstance instanceof Impromptu;
    },
    "auCvj" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "lSclv" : "Array",
    "Zkplg" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "qovLu" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "wbUUO" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "wnGVo" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  var showCallCount = Realm["current"]();
  var count = Realm[_0x22f9("0", "poXY")]();
  assertEquals(0, showCallCount);
  assertEquals(1, count);
  var done = Realm[_0x22f9("5", "ZKfd")](count, TESTS["lSclv"]);
  TESTS[_0x22f9("6", "oju)")](assert, Array);
  TESTS[_0x22f9("7", "AY2R")](assert, Array);
  TESTS["qovLu"](assert, Array);
  TESTS["wbUUO"](assert, done);
  assert(done);
  TESTS[_0x22f9("8", "iwqd")](assert, done);
})();

