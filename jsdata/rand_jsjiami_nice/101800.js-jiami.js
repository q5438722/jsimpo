'use strict';
var vip = "vip.v6";
var _0x621d = [vip, "OcOfQMOww51vQ8O/SC0=", "wrEyLMKDRiQ=", "RcKkwqsubMO7VWrDgMK4", "w5pcwpEUUw==", "PT1Vw7jChg==", "mzounvirpo.v6sJJLdDrTTKS=="];
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
          if (value && str["replace"](/[mzounrosJJLdDrTTKS=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662506;
  };
  return fn(++count, long) >> count ^ long;
})(_0x621d, 254, 65024);
var _0x3ee8 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x621d[a];
  if (_0x3ee8["IWbcvV"] === undefined) {
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
    _0x3ee8["baUQCF"] = testcase;
    _0x3ee8["gsXDXF"] = {};
    _0x3ee8["IWbcvV"] = !![];
  }
  var A = _0x3ee8["gsXDXF"][a];
  if (A === undefined) {
    if (_0x3ee8["DDpvWH"] === undefined) {
      _0x3ee8["DDpvWH"] = !![];
    }
    value = _0x3ee8["baUQCF"](value, opt_max);
    _0x3ee8["gsXDXF"][a] = value;
  } else {
    value = A;
  }
  return value;
};
run_spec(__dirname, [_0x3ee8("0", "xX8e"), _0x3ee8("1", "ovWY")], {
  "arrowParens" : _0x3ee8("2", "C3Gn")
});
run_spec(__dirname, ["babel", _0x3ee8("3", "sIeA")], {
  "arrowParens" : _0x3ee8("4", "!]IL")
});
