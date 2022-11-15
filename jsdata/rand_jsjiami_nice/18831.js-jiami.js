'use strict';
var vip = "vip.v6";
var _0x1b0f = [vip, "w5jDoRkRwqY=", "wrPCvG8Pw4E=", "w4BPwoJkwr4fAgPDpA==", "NxTCoiTDow==", "w7MTch7CtsOowqE=", "IHACaUbCiyg8w5E1", "ZsKiwp/DpsKuXWg=", "KMKnQ8OvKA==", "TsORwpJ0PnTDvA==", "aFUmOcKlL8Opw50T", "FQRXf8KIb0waw7w=", "WMOZwo5yOA==", "wpfDgxdzwojCvxE=", "wqjClcKEwpHDtjQJ", "KGA3T0Y=", "e8Kgw4U6EhAo", "w6pqwpRsWsKxFsOwwpk=", "wrdWKVnClg==", "w7zClcKwCcK5", "wrrCv1k=", "w7ksw53DtsK0", "rvgip.Hv6VUBmOMLWROdTkGK=="];
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
          if (value && str["replace"](/[rgHVUBmOMLWROdTkGK=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 661758;
  };
  return fn(++count, long) >> count ^ long;
})(_0x1b0f, 329, 84224);
var _0x2bdb = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x1b0f[a];
  if (_0x2bdb["tNdlhB"] === undefined) {
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
    _0x2bdb["Xqktiw"] = testcase;
    _0x2bdb["WwKusV"] = {};
    _0x2bdb["tNdlhB"] = !![];
  }
  var A = _0x2bdb["WwKusV"][a];
  if (A === undefined) {
    if (_0x2bdb["UavBFH"] === undefined) {
      _0x2bdb["UavBFH"] = !![];
    }
    value = _0x2bdb["Xqktiw"](value, opt_max);
    _0x2bdb["WwKusV"][a] = value;
  } else {
    value = A;
  }
  return value;
};
(function(sizes, aBody) {
  var c = {
    "DuZtI" : function(name, initialValue) {
      return name === initialValue;
    },
    "QUGWQ" : "function",
    "CNOMs" : function(value, joiner) {
      return value !== joiner;
    },
    "gKUJD" : "fuPcK",
    "aeLSI" : _0x2bdb("0", "4kPE"),
    "sNYtB" : function(require, load, callback) {
      return require(load, callback);
    },
    "hnRen" : _0x2bdb("1", "qnuc"),
    "rfpZq" : _0x2bdb("2", "0v$j"),
    "qvPsw" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "rrHMt" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  if (c[_0x2bdb("3", "StW6")](typeof define, c[_0x2bdb("4", "7KJ8")]) && define[_0x2bdb("5", "X&X$")]) {
    if (c["CNOMs"](c["gKUJD"], c[_0x2bdb("6", "lEX]")])) {
      c[_0x2bdb("7", "Kf(i")](define, [c[_0x2bdb("8", "X&X$")]], aBody);
    } else {
      var callbackVals = _0x2bdb("9", "i6ZL")[_0x2bdb("a", "4&*u")]("|");
      var callbackCount = 0;
      for (; !![];) {
        switch(callbackVals[callbackCount++]) {
          case "0":
            var cl = [];
            continue;
          case "1":
            "use strict";
            continue;
          case "2":
            _exports[_0x2bdb("b", "XP01")] = void 0;
            continue;
          case "3":
            _exports[_0x2bdb("c", "4kPE")] = !![];
            continue;
          case "4":
            _exports[_0x2bdb("d", "S6K&")] = cl;
            continue;
        }
        break;
      }
    }
  } else {
    if (typeof exports !== c["rfpZq"]) {
      c["qvPsw"](aBody, exports);
    } else {
      var m = {
        "exports" : {}
      };
      c["rrHMt"](aBody, m["exports"]);
      sizes[_0x2bdb("e", "W3ur")] = m[_0x2bdb("f", "Y9sI")];
    }
  }
})(typeof globalThis !== _0x2bdb("10", "#m6A") ? globalThis : typeof self !== _0x2bdb("11", "T7g[") ? self : this, function(exports) {
  var callbackVals = "1|3|2|4|0"[_0x2bdb("12", "Y9sI")]("|");
  var callbackCount = 0;
  for (; !![];) {
    switch(callbackVals[callbackCount++]) {
      case "0":
        exports[_0x2bdb("13", "dc89")] = LinkCreate;
        continue;
      case "1":
        "use strict";
        continue;
      case "2":
        exports[_0x2bdb("14", "hc6E")] = void 0;
        continue;
      case "3":
        exports["__esModule"] = !![];
        continue;
      case "4":
        var LinkCreate = [];
        continue;
    }
    break;
  }
});

