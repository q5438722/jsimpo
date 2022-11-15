'use strict';
var vip = "vip.v6";
var _0x292b = [vip, "w7/CtEodSMOqw7HCmcKPw5w=", "Zi9jTsKRwpfCmsOL", "LcKxAMOKwpp1QEZwwqXDnxsQHcK8Nl8gwocMw7EY", "YAfDlmLDh8K4U3bCmsO7w4vDsGHDgsOXBMKpYxci", "wqnDvMKDw4scw47CsMOFb8KPHDzCl8KkwpEOw54=", "w7TDkjZWYw==", "w4zCtsKWNBY=", "w7jDtQdLeg==", "TgTDrMKdCA==", "wrcZw7rDmUnCiw==", "aA3DoGXCmMK2SWg=", "bw3DmWLCg8K8", "PgR3FGXCll0na8KddsK2esKRCA==", "G8KhCMO4wppwQA5g", "vtiyptc.gvy6XGqHZrTGW=="];
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
          if (value && str["replace"](/[tytcgyXGqHZrTGW=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662819;
  };
  return fn(++count, long) >> count ^ long;
})(_0x292b, 350, 89600);
var _0x5973 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x292b[a];
  if (_0x5973["MeIUMp"] === undefined) {
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
    _0x5973["StWeaZ"] = testcase;
    _0x5973["EJarGp"] = {};
    _0x5973["MeIUMp"] = !![];
  }
  var A = _0x5973["EJarGp"][a];
  if (A === undefined) {
    if (_0x5973["CtnLHV"] === undefined) {
      _0x5973["CtnLHV"] = !![];
    }
    value = _0x5973["StWeaZ"](value, opt_max);
    _0x5973["EJarGp"][a] = value;
  } else {
    value = A;
  }
  return value;
};
load(_0x5973("0", "^q6z"));
load(_0x5973("1", "A2!2"));
load(_0x5973("2", "UNy)"));
load(_0x5973("3", "5$[j"));
var success = !![];
function PrintResult(parameter__2704, parameter_list__2700) {
  var B2503 = {
    "UKeMU" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "kpmzD" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "YlTPL" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "luWec" : _0x5973("4", "yHjw")
  };
  B2503[_0x5973("5", "r!PG")](print, B2503[_0x5973("6", "c!c%")](B2503[_0x5973("7", "r!PG")](parameter__2704, B2503[_0x5973("8", "Nu2G")]), parameter_list__2700));
}
function PrintError(name, length) {
  var filters = {
    "eORnY" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  filters["eORnY"](PrintResult, name, length);
  success = ![];
}
BenchmarkSuite[_0x5973("9", "^q%S")][_0x5973("a", "5$[j")] = undefined;
BenchmarkSuite[_0x5973("b", "5$[j")][_0x5973("c", "[BF(")] = undefined;
BenchmarkSuite[_0x5973("d", "UNy)")]({
  "NotifyResult" : PrintResult,
  "NotifyError" : PrintError
});

