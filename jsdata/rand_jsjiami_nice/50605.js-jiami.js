'use strict';
var vip = "vip.v6";
var _0x1d6d = [vip, "wrrCniVZ", "w6lAVDXCuQ==", "w7PDplcR", "YcOcJVrCqcOn", "wpXDr8KZM8KtBQ==", "wrpQP8OkwpE=", "w60jw71YKg==", "wrcaw6vDjcOEJQ==", "w5fDvB/CsREB", "b8Oswo9Qw7g=", "w6zDgsOndsOQfw==", "V3fCpsKmw7DDgw==", "EWZNGw==", "SsK8QMKq", "cSjDrCjChg==", "w41BGXE=", "fcKLdMKHw5Q=", "wqs0w5fDgcOh", "wpbDt8OHwonDvTtFwpBZ", "VMK8XsKgw6s7", "a8OVKknCucOuw7zDhQ==", "w47CgsO9w5Mm", "wpnCrsKWwoLCiMOGSsKS", "VsKkeMKkw5c=", "ScK5X8Krw7o=", "w4vCjxTDuHU=", "BkzDp8KFDsKDBMOOwp0=", "wo1aOMOgwrc=", "HvLqipMlWfITb.fv6nAFJE=="];
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
          if (value && str["replace"](/[HLqMlWfITbfnAFJE=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662032;
  };
  return fn(++count, long) >> count ^ long;
})(_0x1d6d, 214, 54784);
var _0x28a1 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x1d6d[c];
  if (_0x28a1["NBRcxE"] === undefined) {
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
    _0x28a1["oiZSRt"] = testcase;
    _0x28a1["TOQfQK"] = {};
    _0x28a1["NBRcxE"] = !![];
  }
  var e = _0x28a1["TOQfQK"][c];
  if (e === undefined) {
    if (_0x28a1["hMMrFX"] === undefined) {
      _0x28a1["hMMrFX"] = !![];
    }
    x = _0x28a1["oiZSRt"](x, alpha);
    _0x28a1["TOQfQK"][c] = x;
  } else {
    x = e;
  }
  return x;
};
(function(klass) {
  function factory(limit, window, data, c) {
    if (array[_0x28a1("3", "SKfq")](window[_0x28a1("4", "@9Z7")], !![])) {
      var callbackVals = array[_0x28a1("5", "5xrV")][_0x28a1("6", "5xrV")]("|");
      var callbackCount = 0;
      for (; !![];) {
        switch(callbackVals[callbackCount++]) {
          case "0":
            var value = window[_0x28a1("7", "&bD2")] || 0;
            continue;
          case "1":
            c[_0x28a1("8", "UG40")] = 2;
            continue;
          case "2":
            var init = array[_0x28a1("9", "r$Ah")](typeof window[_0x28a1("a", "JSs#")], array[_0x28a1("b", "x1&D")]) ? window[_0x28a1("c", "BXo%")] : 1;
            continue;
          case "3":
            var i = 0;
            var j = 0;
            for (; i < data[_0x28a1("d", "eDKw")]; i++, j = j + 2) {
              c[_0x28a1("e", "wC@4")][j] = array[_0x28a1("f", "r$Ah")](value, array[_0x28a1("10", "KOS0")](i, init));
              c["points"][j + 1] = data[i];
            }
            continue;
          case "4":
            if (array["lSmwv"](c["points"], undefined)) {
              c[_0x28a1("11", "LSK!")][_0x28a1("12", "[Jx6")] = array[_0x28a1("13", "ikh0")](data[_0x28a1("14", "B1A[")], 2);
            } else {
              c[_0x28a1("15", "sJ*^")] = [];
            }
            continue;
        }
        break;
      }
    }
  }
  var array = {
    "tcvlI" : function(name, initialValue) {
      return name === initialValue;
    },
    "lmKfY" : _0x28a1("0", "s2T4"),
    "IKlxp" : _0x28a1("1", "5xrV"),
    "Ciqho" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "fWOMg" : function(mmCoreSecondsDay, daysInterval) {
      return mmCoreSecondsDay * daysInterval;
    },
    "lSmwv" : function(value, joiner) {
      return value !== joiner;
    },
    "cioqn" : function(mmCoreSecondsDay, daysInterval) {
      return mmCoreSecondsDay * daysInterval;
    },
    "GBGEZ" : _0x28a1("2", "eDKw"),
    "lAUbQ" : "0.0.2"
  };
  "use strict";
  klass[_0x28a1("16", "lhbn")]["plugins"][_0x28a1("17", "5xrV")]({
    "init" : function(flightPhase) {
      flightPhase[_0x28a1("18", "M^^0")]["processRawData"][_0x28a1("19", "Ce0%")](factory);
    },
    "name" : array[_0x28a1("1a", "5xrV")],
    "version" : array[_0x28a1("1b", "LSK!")]
  });
})(jQuery);

