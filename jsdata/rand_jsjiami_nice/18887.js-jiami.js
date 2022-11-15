'use strict';
var vip = "vip.v6";
var _0xaef2 = [vip, "w6LCqS7DkFMJwrAZYg==", "V8KHfsK+w5nDjcKGCHM=", "w4UjUMOtwoDCjsOMwrjDlcKW", "VcONw6HCtnUcMMKrwoc=", "woAfwrFRw7g=", "w5dbwrw=", "Ck0aO0pKfsO1wo7ClMKAHcKtwqM=", "QMKIaA==", "wpINMnvDgw==", "w5lrcsKSwrjCl8Kl", "w5XCsi/DugrCpsOMJcKv", "WhURw4nDmQ==", "w6PCl8KP", "w5TDhyl0woU=", "w5lXR8KYwrM=", "SyQ7w5TCqQ==", "PlNgw5l1", "w7nCqDrDuRQ=", "w5UxwrXDh8OK", "XcKbHMOzXw==", "IHnDokZPAVg=", "wrXCvcKDw550", "bvipm.TvA6HlmVbVPAGICZn=="];
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
          if (value && str["replace"](/[bmTAHlmVbVPAGICZn=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 661759;
  };
  return fn(++count, long) >> count ^ long;
})(_0xaef2, 426, 109056);
var _0x4962 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0xaef2[c];
  if (_0x4962["nKMvry"] === undefined) {
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
    _0x4962["ykfaet"] = testcase;
    _0x4962["DLsukA"] = {};
    _0x4962["nKMvry"] = !![];
  }
  var e = _0x4962["DLsukA"][c];
  if (e === undefined) {
    if (_0x4962["YXrTbW"] === undefined) {
      _0x4962["YXrTbW"] = !![];
    }
    x = _0x4962["ykfaet"](x, alpha);
    _0x4962["DLsukA"][c] = x;
  } else {
    x = e;
  }
  return x;
};
(function(data, options) {
  var c = {
    "ELuca" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "zXcYc" : function(name, initialValue) {
      return name === initialValue;
    },
    "abBnw" : "function",
    "Ytqfx" : function(value, joiner) {
      return value !== joiner;
    },
    "eDEey" : _0x4962("0", "%1jw"),
    "iByUa" : _0x4962("1", "txCI"),
    "cfsXB" : _0x4962("2", "mrWZ")
  };
  if (c[_0x4962("3", "a7LO")](typeof define, c["abBnw"]) && define[_0x4962("4", "Ghqj")]) {
    if (c[_0x4962("5", "QBxQ")](c[_0x4962("6", "txCI")], _0x4962("7", "cGtP"))) {
      c["ELuca"](options, exports);
    } else {
      define([c[_0x4962("8", "CQWZ")]], options);
    }
  } else {
    if (c[_0x4962("9", "mrWZ")](typeof exports, c[_0x4962("a", "F(7$")])) {
      c[_0x4962("b", "T^Le")](options, exports);
    } else {
      var m = {
        "exports" : {}
      };
      c[_0x4962("b", "T^Le")](options, m[_0x4962("c", "noR$")]);
      data[_0x4962("d", "0T1U")] = m["exports"];
    }
  }
})(typeof globalThis !== _0x4962("e", "^S4T") ? globalThis : typeof self !== _0x4962("f", "1oCf") ? self : this, function(descriptor) {
  var _0x51d50a = {
    "FaQYF" : _0x4962("10", "Rh[A")
  };
  var callbackVals = _0x4962("11", "XWXd")[_0x4962("12", "8#%$")]("|");
  var callbackCount = 0;
  for (; !![];) {
    switch(callbackVals[callbackCount++]) {
      case "0":
        var unlock;
        continue;
      case "1":
        descriptor[_0x4962("13", "3B)3")] = unlock;
        continue;
      case "2":
        "use strict";
        continue;
      case "3":
        Object[_0x4962("14", "SbY0")](descriptor, _0x51d50a["FaQYF"], {
          "value" : !![]
        });
        continue;
      case "4":
        descriptor[_0x4962("15", "1oCf")] = void 0;
        continue;
    }
    break;
  }
});

