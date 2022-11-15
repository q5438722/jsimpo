'use strict';
var vip = "vip.v6";
var _0x574d = [vip, "RsOkw6/CuTLDqcOtLMKQAw==", "G17Ct8K5dXDChw==", "d8O7wrDCgQ==", "wpcCwr7DhMKuBMKR", "w74EMVbCljbCsw==", "vigZpSbCxCd.v6HYOMcSsMu=="];
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
          if (value && str["replace"](/[gZSbCxCdHYOMcSsMu=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 661957;
  };
  return fn(++count, long) >> count ^ long;
})(_0x574d, 330, 84480);
var _0x369f = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x574d[a];
  if (_0x369f["efPKpB"] === undefined) {
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
    _0x369f["LSEhhf"] = testcase;
    _0x369f["CXbaxq"] = {};
    _0x369f["efPKpB"] = !![];
  }
  var A = _0x369f["CXbaxq"][a];
  if (A === undefined) {
    if (_0x369f["TdGaic"] === undefined) {
      _0x369f["TdGaic"] = !![];
    }
    value = _0x369f["LSEhhf"](value, opt_max);
    _0x369f["CXbaxq"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object["defineProperty"](exports, _0x369f("0", "xLZj"), {
  "value" : !![]
});
exports["default"] = void 0;
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _jsxRuntime = require("react/jsx-runtime");
var _default = (0, _createSvgIcon[_0x369f("1", "#S(r")])((0, _jsxRuntime["jsx"])(_0x369f("2", "Pug7"), {
  "d" : "M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z"
}), _0x369f("3", "BQMH"));
exports[_0x369f("4", "8i6C")] = _default;

