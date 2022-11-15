'use strict';
var vip = "vip.v6";
var _0x18da = [vip, "w7/DtsOXw5p5", "XF1K", "UDvCuAHCpMOPwq7Dvy1v", "UzjCsQk=", "VsK8wohYw78=", "IsK9DUnCicOPGw==", "KyDCo8Ou", "w7PDr8K9bA==", "wovDmDfDlQ==", "wqAWL8OaBMOnwr8=", "w7HDv8OCw4hmAsOBDxU=", "w7V4w6lIMQ==", "WQIQVWXDvsK4WSDCr8OmDk0scsKk", "OlnDog==", "BDnCqcO7HU4/", "vCiGpyWNx.fFLv6XcWfPtwTd=="];
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
          if (value && str["replace"](/[CGyWNxfFLXcWfPtwTd=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 661930;
  };
  return fn(++count, long) >> count ^ long;
})(_0x18da, 104, 26624);
var _0x3d25 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x18da[a];
  if (_0x3d25["ovhzTF"] === undefined) {
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
    _0x3d25["mkQtKI"] = testcase;
    _0x3d25["ablwgH"] = {};
    _0x3d25["ovhzTF"] = !![];
  }
  var A = _0x3d25["ablwgH"][a];
  if (A === undefined) {
    if (_0x3d25["oFbixb"] === undefined) {
      _0x3d25["oFbixb"] = !![];
    }
    value = _0x3d25["mkQtKI"](value, opt_max);
    _0x3d25["ablwgH"][a] = value;
  } else {
    value = A;
  }
  return value;
};
module[_0x3d25("0", "IBE@")] = ["Rock", _0x3d25("1", "1kEU"), _0x3d25("2", "h&ta"), _0x3d25("3", "&[MC"), _0x3d25("4", "&[MC"), _0x3d25("5", "%qQN"), _0x3d25("6", "Mlks"), _0x3d25("7", "IBE@"), _0x3d25("8", "zLwT"), _0x3d25("9", "m$&V"), _0x3d25("a", "3[Uo"), _0x3d25("b", "1kEU"), _0x3d25("c", "9D&I"), "Reggae", _0x3d25("d", "V5Io"), "Blues", "Non Music", _0x3d25("e", "6QBs")];

