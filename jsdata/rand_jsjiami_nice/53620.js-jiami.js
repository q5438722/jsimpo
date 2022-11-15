'use strict';
var vip = "vip.v6";
var _0x562b = [vip, "wq0nwqkXfXHCmcKT", "w5bDiMOpwo4=", "w6xJwpPCvWLDkho0", "AsO8CMOtw5A=", "w7nDhwBC", "wowqwo0tYQ==", "GnvDhMOUQg==", "WMOBwq7CqQY=", "wqHCrjogWQ==", "wpHCo8OjUX8=", "wqB7wo4SwrU=", "fMKzw4DCpRvCrnLDpQ==", "wprDgcKAfWXCn0fCsRY=", "XsKZw4ceIMO/w4bCoCZlwo4=", "w6USDTh2w6ZuwrFLw7Uk", "EsOgE8Oow5fDtcOwDSrDjnU=", "wpPCvcOcdcK2w7sx", "ZsK2wp7Dr8KiPsK2GTw1wqA=", "wq3DoMKTWMOcwokSw6fCi8OqTQ==", "woLDhMKHRcKPw4Aa", "w7cVDDRnw6Y=", "w6s9Q0MNw5rChm9KI8O+f8Kx", "ofcvihXnpYeN.v6YGKTrzBCf=="];
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
          if (value && str["replace"](/[ofchXnYeNYGKTrzBCf=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662055;
  };
  return fn(++count, long) >> count ^ long;
})(_0x562b, 460, 117760);
var _0xde59 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x562b[c];
  if (_0xde59["BPIhpF"] === undefined) {
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
    _0xde59["aMMLyq"] = testcase;
    _0xde59["zNiCqZ"] = {};
    _0xde59["BPIhpF"] = !![];
  }
  var e = _0xde59["zNiCqZ"][c];
  if (e === undefined) {
    if (_0xde59["SrJYLf"] === undefined) {
      _0xde59["SrJYLf"] = !![];
    }
    x = _0xde59["aMMLyq"](x, alpha);
    _0xde59["zNiCqZ"][c] = x;
  } else {
    x = e;
  }
  return x;
};
"use strict";
const common = require("../common");
const assert = require(_0xde59("0", "DovU"));
const spawn = require(_0xde59("1", "UCbj"))["spawn"];
if (process["argv"][2] === "child") {
  process["abort"]();
} else {
  const p = spawn(process[_0xde59("2", "N$f9")], [__filename, "child"]);
  p["on"](_0xde59("3", "mCG1"), common[_0xde59("4", "Gjak")]((a, expected) => {
    var c = {
      "sPBkW" : function(require, load, callback) {
        return require(load, callback);
      },
      "XHyLk" : _0xde59("5", "nyYR"),
      "Dpgnx" : _0xde59("6", "2HAy"),
      "APfWo" : function(name, initialValue) {
        return name === initialValue;
      },
      "dFcbD" : _0xde59("7", "N$f9"),
      "MucJX" : "nIzfr"
    };
    if (common["isWindows"]) {
      assert["strictEqual"](a, 134);
      assert["strictEqual"](expected, null);
    } else {
      if (c[_0xde59("8", "tqBl")](c[_0xde59("9", "Ah%e")], c["MucJX"])) {
        const p = c[_0xde59("a", "yIAb")](spawn, process["execPath"], [__filename, c[_0xde59("b", ")$Lh")]]);
        p["on"](c[_0xde59("c", "$ndL")], common[_0xde59("d", "uAjR")]((a, expected) => {
          if (common[_0xde59("e", "1c7V")]) {
            assert[_0xde59("f", "rigf")](a, 134);
            assert[_0xde59("10", "DovU")](expected, null);
          } else {
            assert["strictEqual"](a, null);
            assert[_0xde59("11", "nyYR")](expected, _0xde59("12", "k*Fk"));
          }
        }));
      } else {
        assert[_0xde59("13", "XY$y")](a, null);
        assert[_0xde59("14", "tp!A")](expected, _0xde59("15", "b5bf"));
      }
    }
  }));
}
;
