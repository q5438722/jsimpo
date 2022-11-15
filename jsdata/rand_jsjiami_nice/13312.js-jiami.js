'use strict';
var vip = "vip.v6";
var _0x59e4 = [vip, "w4V7w6nDhMKDwphGwqPDiFDDlMOhwpbDshtPw7PCon3Cl8OvAcKQw53Dom3Chw==", "WMKLwrDCh8O7wp5MWMKew4DDoMKHw49xw4DDg3sAQxNRDhTCm8K4DgTDn1PDmzXDiMKrBVlpcA==", "woRxUsKtdQ==", "wofDqcOE", "evihOp.Shv6nLCyOExHnjSUw=="];
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
          if (value && str["replace"](/[ehOShnLCyOExHnjSUw=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 661698;
  };
  return fn(++count, long) >> count ^ long;
})(_0x59e4, 275, 70400);
var _0x548e = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x59e4[a];
  if (_0x548e["xQENlV"] === undefined) {
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
    _0x548e["WreeWB"] = testcase;
    _0x548e["LtqvFX"] = {};
    _0x548e["xQENlV"] = !![];
  }
  var A = _0x548e["LtqvFX"][a];
  if (A === undefined) {
    if (_0x548e["bFBUBw"] === undefined) {
      _0x548e["bFBUBw"] = !![];
    }
    value = _0x548e["WreeWB"](value, opt_max);
    _0x548e["LtqvFX"][a] = value;
  } else {
    value = A;
  }
  return value;
};
class A {
  [_0x548e("0", "v!&1")]() {
    babelHelpers[_0x548e("1", "JVtF")](A, A, _method, 2);
    [babelHelpers[_0x548e("2", "X]Re")](A, A, _method)[_0x548e("3", "Q!t(")]] = [2];
  }
}
function _method() {
}
;
