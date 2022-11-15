/**
 * @license
    2020 Photon Storm Ltd.
 @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
'use strict';
var vip = "vip.v6";
var _0xfc0f = [vip, "w7ESwpTDlsO0", "woLCgcObw6Mc", "w6toCjzDgw==", "wqw9w4HCjsOl", "W8Knwr4nwodp", "wo9Ww5JxwojCs8Kh", "FMObw6vDpH7DpcKaCVnDqzo=", "w5YJw4LCp14=", "aUE3XMOs", "w4FbN8O+dw==", "FQvDijvDpA==", "wp8Dw5gcw4k=", "Jvipd.vn6skaRqqTtjPtUDgo=="];
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
          if (value && str["replace"](/[JdnskaRqqTtjPtUDgo=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662315;
  };
  return fn(++count, long) >> count ^ long;
})(_0xfc0f, 186, 47616);
var _0xd8ec = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0xfc0f[a];
  if (_0xd8ec["uWLIBx"] === undefined) {
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
    _0xd8ec["mfjQaU"] = testcase;
    _0xd8ec["JdSGhW"] = {};
    _0xd8ec["uWLIBx"] = !![];
  }
  var A = _0xd8ec["JdSGhW"][a];
  if (A === undefined) {
    if (_0xd8ec["mmpdEM"] === undefined) {
      _0xd8ec["mmpdEM"] = !![];
    }
    value = _0xd8ec["mfjQaU"](value, opt_max);
    _0xd8ec["JdSGhW"][a] = value;
  } else {
    value = A;
  }
  return value;
};
var SafeRange = require(_0xd8ec("0", "9L*D"));
var CountAllMatching = function(data, location, transpose, value, key) {
  var gl = {
    "VNaYZ" : function(name, initialValue) {
      return name === initialValue;
    },
    "pcmFA" : function(name, initialValue) {
      return name === initialValue;
    },
    "FhFkh" : function(require, load, callback, id) {
      return require(load, callback, id);
    },
    "Nojne" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "EyGMq" : _0xd8ec("1", "TDp]"),
    "BMZQx" : function(name, initialValue) {
      return name === initialValue;
    },
    "SHdmP" : function(name, initialValue) {
      return name === initialValue;
    },
    "exfFR" : "TLSCF",
    "HqWYb" : _0xd8ec("2", "O)b)")
  };
  if (gl["VNaYZ"](value, undefined)) {
    value = 0;
  }
  if (gl[_0xd8ec("3", "UsW3")](key, undefined)) {
    key = data["length"];
  }
  var _0x4455ff = 0;
  if (gl["FhFkh"](SafeRange, data, value, key)) {
    var type = value;
    for (; gl[_0xd8ec("4", "WMCt")](type, key); type++) {
      if (_0xd8ec("5", "qYwo") === gl[_0xd8ec("6", "Tdq[")]) {
        var info = data[type];
        if (gl[_0xd8ec("7", "vf9j")](info[location], transpose)) {
          if (gl[_0xd8ec("8", "tkoW")](gl[_0xd8ec("9", "a2Qh")], gl["HqWYb"])) {
            var info = data[type];
            if (gl["VNaYZ"](info[location], transpose)) {
              _0x4455ff++;
            }
          } else {
            _0x4455ff++;
          }
        }
      } else {
        key = data[_0xd8ec("a", "#]yB")];
      }
    }
  }
  return _0x4455ff;
};
module[_0xd8ec("b", "bCue")] = CountAllMatching;

