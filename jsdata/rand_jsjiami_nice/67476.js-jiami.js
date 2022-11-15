'use strict';
var vip = "vip.v6";
var _0x1b7e = [vip, "w7YUCx1Aw7TDmg==", "wp7CgMKLw6pldR3DtE7Dig==", "wpElw48yw7stNMOHDw==", "KsOxw74RZsK2TA==", "w4NiD0bCkwIwR2xMw53Cjw==", "TVHDoUXDv2pHYMKc", "vijbpS.zvS6WqVgldPxfYW=="];
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
          if (value && str["replace"](/[jbSzSWqVgldPxfYW=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662153;
  };
  return fn(++count, long) >> count ^ long;
})(_0x1b7e, 299, 76544);
var _0x5a02 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x1b7e[a];
  if (_0x5a02["mxFNeF"] === undefined) {
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
    _0x5a02["vOaKuC"] = testcase;
    _0x5a02["iiheop"] = {};
    _0x5a02["mxFNeF"] = !![];
  }
  var A = _0x5a02["iiheop"][a];
  if (A === undefined) {
    if (_0x5a02["PgPsEW"] === undefined) {
      _0x5a02["PgPsEW"] = !![];
    }
    value = _0x5a02["vOaKuC"](value, opt_max);
    _0x5a02["iiheop"][a] = value;
  } else {
    value = A;
  }
  return value;
};
const {
  ModuleFederationPlugin : ModuleFederationPlugin
} = require(_0x5a02("0", "HRHr"))["container"];
module[_0x5a02("1", "i!V6")] = {
  "mode" : "production",
  "entry" : _0x5a02("2", "K7g!"),
  "output" : {
    "filename" : "[name]_bundle.js"
  },
  "plugins" : [new ModuleFederationPlugin({
    "name" : _0x5a02("3", "6NAe"),
    "exposes" : {
      "./entry" : {
        "import" : _0x5a02("4", "azkd"),
        "name" : _0x5a02("5", "hQpJ")
      }
    }
  })]
};

