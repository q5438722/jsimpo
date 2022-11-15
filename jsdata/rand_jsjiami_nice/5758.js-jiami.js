'use strict';
var vip = "vip.v6";
var _0x74c0 = [vip, "wopQBw==", "eMKgw7/CiFcNwo/CoQ==", "wr1XwprDiMKN", "U8KiwrPDjsKIKg==", "w4hFw68=", "a8OGcMOIag==", "w53DusOfJcOW", "wqQ+w6suKQ==", "wrTCnDjDvcOn", "w7tpwo3CiSc=", "UnBcZsOPwpJDw5vDpsO7G8KM", "w77DrMOXw6Epwq/DqQ==", "w7TDosO2w7op", "wos5ccKSw70=", "XcOZwpvDin7CjgzDnEDDtTE=", "EMOYPyLDog==", "d8KKYA==", "ScOibcOBwrzDkw==", "w6PDq8Oi", "w6DDmcO3QQ==", "PsKdwpA=", "wpTCj8K9dSZJwoJXw6zDncOhw6gWC8Oww78cw73ChFQMYg==", "W1bDp8OB", "JsKxAcOb", "Qm03wrbChA==", "wqYHd8Kqw4PDlw3Cjw==", "KsKUwpN5Mw==", 
"wpvCosONHCE=", "IcKMInfDkl0=", "vipzb.v6bQJweXaQrlbtMBnu=="];
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
          if (value && str["replace"](/[zbbQJweXaQrlbtMBnu=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662077;
  };
  return fn(++count, long) >> count ^ long;
})(_0x74c0, 277, 70912);
var _0x1924 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x74c0[c];
  if (_0x1924["dPgpwr"] === undefined) {
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
    _0x1924["PHVNUw"] = testcase;
    _0x1924["keIeLe"] = {};
    _0x1924["dPgpwr"] = !![];
  }
  var e = _0x1924["keIeLe"][c];
  if (e === undefined) {
    if (_0x1924["lkvdvY"] === undefined) {
      _0x1924["lkvdvY"] = !![];
    }
    x = _0x1924["PHVNUw"](x, alpha);
    _0x1924["keIeLe"][c] = x;
  } else {
    x = e;
  }
  return x;
};
var mkdirp = require(_0x1924("0", "[Tbr"));
var path = require("path");
var fs = require("fs");
var exists = fs[_0x1924("1", "RCGg")] || path["exists"];
var test = require(_0x1924("2", "3K)c"))["test"];
var _0777 = parseInt("0777", 8);
var _0755 = parseInt(_0x1924("3", "W*&s"), 8);
test(_0x1924("4", "YAbE"), function(execute) {
  var def = {
    "EttBY" : function(dest_operand, source_operand) {
      return dest_operand & source_operand;
    },
    "bErzm" : _0x1924("5", "R#Ll"),
    "CDwct" : function(require, load, callback) {
      return require(load, callback);
    },
    "TOmos" : function(mmCoreSecondsDay, daysInterval) {
      return mmCoreSecondsDay * daysInterval;
    },
    "yBofR" : function(mmCoreSecondsDay, daysInterval) {
      return mmCoreSecondsDay * daysInterval;
    },
    "zTjyv" : _0x1924("6", "ZZ(T"),
    "szkKL" : function(require, load, callback, id) {
      return require(load, callback, id);
    }
  };
  execute[_0x1924("7", "[^jm")](5);
  var m = Math[_0x1924("8", "8CUL")](def["TOmos"](Math["random"](), Math["pow"](16, 4)))[_0x1924("9", "$DW[")](16);
  var y = Math[_0x1924("a", "YAbE")](def[_0x1924("b", "#[^n")](Math[_0x1924("c", "Rq1J")](), Math[_0x1924("d", "@J1M")](16, 4)))[_0x1924("e", "cWWj")](16);
  var cx = Math[_0x1924("f", "sW%A")](def["yBofR"](Math[_0x1924("10", "(9XQ")](), Math[_0x1924("11", "!j&r")](16, 4)))["toString"](16);
  var status = process["cwd"]();
  process["chdir"](def[_0x1924("12", "QTTW")]);
  var path = [m, y, cx]["join"]("/");
  def[_0x1924("13", "nJva")](mkdirp, path, _0755, function(token) {
    execute["ifError"](token);
    def[_0x1924("14", "e%76")](exists, path, function(token) {
      var promptEventHandlers = {
        "YQULL" : function(obj, path) {
          return def[_0x1924("15", "msJ#")](obj, path);
        },
        "VIsCq" : def[_0x1924("16", "39Fc")]
      };
      execute["ok"](token, _0x1924("17", "&MUm"));
      fs["stat"](path, function(token, commands) {
        execute[_0x1924("18", "3K)c")](token);
        process[_0x1924("19", "3K)c")](status);
        execute["equal"](promptEventHandlers[_0x1924("1a", "$DW[")](commands["mode"], _0777), _0755);
        execute["ok"](commands[_0x1924("1b", "9Qj&")](), promptEventHandlers[_0x1924("1c", "12SO")]);
      });
    });
  });
});

