'use strict';
var vip = "vip.v6";
var _0x43b8 = [vip, "fsKfW8O3", "dMKnTsOuwoo=", "woJQw7XCuA==", "w5fDncONw5bDgMO8DWYwUMOewrpM", "wq0Xwp/CscKh", "fCvDocKPwovCuFk=", "ZmbCtC9HThfCksKwwpXDtsO1wonDmcO3wphQw6lSdg==", "WELDhMKFK8KrOMOpw41nwqpwPMKEw53DqFTDrQ==", "wo/DiD0NwonCgMOMY2JCR8O2w4vCvMOwwqbCgSrDlsKMw6XCncKMIllvFwjDggBfL8KFw6PCscKcw7/CjC/Cp17DusOwDF4nw5M=", "FMOSwrN9", "DMK5w4Qmw6M=", "PT5ow6hsfw==", "vip.JvSzn6LWwPgEQHaYc=="];
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
          if (value && str["replace"](/[JSznLWwPgEQHaYc=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662325;
  };
  return fn(++count, long) >> count ^ long;
})(_0x43b8, 104, 26624);
var _0x5cef = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x43b8[a];
  if (_0x5cef["KaOvZo"] === undefined) {
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
    _0x5cef["VuvKEq"] = testcase;
    _0x5cef["oJipku"] = {};
    _0x5cef["KaOvZo"] = !![];
  }
  var A = _0x5cef["oJipku"][a];
  if (A === undefined) {
    if (_0x5cef["qExrED"] === undefined) {
      _0x5cef["qExrED"] = !![];
    }
    value = _0x5cef["VuvKEq"](value, opt_max);
    _0x5cef["oJipku"][a] = value;
  } else {
    value = A;
  }
  return value;
};
module["exports"] = {
  "description" : _0x5cef("0", "TGs8"),
  "tolerance" : 0.002,
  "config" : {
    "type" : _0x5cef("1", "z!9X"),
    "data" : {
      "labels" : [_0x5cef("2", "%)i]"), "Adam", _0x5cef("3", "zmZ9"), _0x5cef("4", "oFwF"), _0x5cef("5", "yMKT"), _0x5cef("6", "4#KL"), "Anthony", _0x5cef("7", "8G@z"), _0x5cef("8", "oIyh"), _0x5cef("9", "@peO")],
      "datasets" : [{
        "backgroundColor" : _0x5cef("a", "G[tS"),
        "borderColor" : _0x5cef("b", "l6e1"),
        "borderWidth" : 1,
        "data" : [101, 185, 24, 311, 17, 21, 462, 340, 140, 24]
      }]
    },
    "options" : {
      "scales" : {
        "x" : {
          "backgroundColor" : "#eee"
        }
      }
    }
  },
  "options" : {
    "spriteText" : !![],
    "canvas" : {
      "width" : 185,
      "height" : 185
    }
  }
};

