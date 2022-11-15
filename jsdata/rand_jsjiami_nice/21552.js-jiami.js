'use strict';
var vip = "vip.v6";
var _0x4256 = [vip, "w47CqcOFbMKY", "wojCtBbDoA==", "w4rClMOTNELCqMKRwo3Diw==", "C19y", "w7zCsH8rw4Zo", "HCfCv8KAbg==", "Yveipm.v6NwKWlFbRKHCfRb=="];
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
          if (value && str["replace"](/[YemNwKWlFbRKHCfRb=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 661791;
  };
  return fn(++count, long) >> count ^ long;
})(_0x4256, 105, 26880);
var _0x4bff = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x4256[a];
  if (_0x4bff["lrYubC"] === undefined) {
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
    _0x4bff["TokeiN"] = testcase;
    _0x4bff["rASIyw"] = {};
    _0x4bff["lrYubC"] = !![];
  }
  var A = _0x4bff["rASIyw"][a];
  if (A === undefined) {
    if (_0x4bff["DxceUs"] === undefined) {
      _0x4bff["DxceUs"] = !![];
    }
    value = _0x4bff["TokeiN"](value, opt_max);
    _0x4bff["rASIyw"][a] = value;
  } else {
    value = A;
  }
  return value;
};
var HelloMessage = React["createClass"]({
  "render" : function() {
    var _0x22ed51 = {
      "dKAek" : _0x4bff("0", "uHw&"),
      "nCCQr" : _0x4bff("1", "fWNd")
    };
    return React["createElement"](_0x22ed51[_0x4bff("2", "yKE(")], null, _0x22ed51["nCCQr"], this[_0x4bff("3", "enk*")][_0x4bff("4", "SJJ[")]);
  }
});
React["render"](React["createElement"](HelloMessage, {
  "name" : React["createElement"]("span", null, _0x4bff("5", "pxNp"))
}), mountNode);

