/**
 * @license
    2020 Photon Storm Ltd.
 @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/
'use strict';
var vip = "vip.v6";
var _0x3a3c = [vip, "T8OuwrAfEg==", "w4nDsTg7woRN", "w4zDmDrChmU=", "ci3DmD5a", "wofCnWTCncK6", "fsKIC3DCkA==", "WU0sZsOvwpPDig==", "C8KOwpoVByMIfMKiw4Qb", "w5d+SMKswqw=", "J8KLW8Oewq3Dkw==", "w5jDukpxKA==", "viVXCgcpuYnu.v6CuFeBZUz=="];
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
          if (value && str["replace"](/[VXCgcuYnuCuFeBZUz=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662314;
  };
  return fn(++count, long) >> count ^ long;
})(_0x3a3c, 271, 69376);
var _0x2648 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x3a3c[a];
  if (_0x2648["fyigJV"] === undefined) {
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
    _0x2648["DhLjyh"] = testcase;
    _0x2648["jiqGZO"] = {};
    _0x2648["fyigJV"] = !![];
  }
  var A = _0x2648["jiqGZO"][a];
  if (A === undefined) {
    if (_0x2648["ItNBap"] === undefined) {
      _0x2648["ItNBap"] = !![];
    }
    value = _0x2648["DhLjyh"](value, opt_max);
    _0x2648["jiqGZO"][a] = value;
  } else {
    value = A;
  }
  return value;
};
var SafeRange = require(_0x2648("0", "(dIi"));
var EachInRange = function(value, action, target, location, key) {
  var gl = {
    "ewiUU" : function(name, initialValue) {
      return name === initialValue;
    },
    "NqBcf" : function(require, load, callback, id) {
      return require(load, callback, id);
    },
    "jOyks" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "Vrezn" : function(name, initialValue) {
      return name === initialValue;
    },
    "aHLXJ" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    }
  };
  if (gl[_0x2648("1", "@BF@")](location, undefined)) {
    location = 0;
  }
  if (key === undefined) {
    key = value[_0x2648("2", "a]*8")];
  }
  if (gl[_0x2648("3", "[eGa")](SafeRange, value, location, key)) {
    var i;
    var map = [null];
    i = 5;
    for (; gl[_0x2648("4", "(dIi")](i, arguments[_0x2648("5", "*Y(D")]); i++) {
      if (gl[_0x2648("6", "J(^#")]("ylOPP", _0x2648("7", "rsFX"))) {
        key = value["length"];
      } else {
        map["push"](arguments[i]);
      }
    }
    i = location;
    for (; gl[_0x2648("8", "3E2&")](i, key); i++) {
      map[0] = value[i];
      action[_0x2648("9", "kwU1")](target, map);
    }
  }
  return value;
};
module[_0x2648("a", "^[xi")] = EachInRange;

