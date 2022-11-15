'use strict';
var vip = "vip.v6";
var _0x3543 = [vip, "YXBs", "OMKKw7TCrQ==", "w7pZwoMxwovDi0gXAMO2wq1pwoTCssKeTMKfwo/CnMO+eUfCqiAlB8KHaBVtWTPDisO9Q8KqRMORwr3CpsKDwqfDlcOpTcKKXMOrJsKeX2fDsMKEM8KUQW8cBztKwqkSwrg=", "HgHDmcO0w7XCuknDqinDo0TDmU3CuUfDhU4Sw4snbMO/w5ETMsOlXgJHRAbCvcKywpJGw4hLwp1CJkcRw6vDnA==", "SGl6N3p8wqDCrVtuw7RlIsKN", "c1N5LVl2wpTCqlh7", "BgDDlkTCqMODwrY=", "MzzDvRNwViJbUsO+UMOWIHEdFsOQ", "wp/Cpkczwrhmew==", "YmvidQltp.Av6LmnhyGwewC=="];
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
          if (value && str["replace"](/[YmdQltALmnhyGwewC=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 661987;
  };
  return fn(++count, long) >> count ^ long;
})(_0x3543, 426, 109056);
var _0x5745 = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x3543[a];
  if (_0x5745["GgjPuC"] === undefined) {
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
    _0x5745["nmpnBb"] = testcase;
    _0x5745["CzyAXF"] = {};
    _0x5745["GgjPuC"] = !![];
  }
  var A = _0x5745["CzyAXF"][a];
  if (A === undefined) {
    if (_0x5745["RCVZkI"] === undefined) {
      _0x5745["RCVZkI"] = !![];
    }
    value = _0x5745["nmpnBb"](value, opt_max);
    _0x5745["CzyAXF"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
var _interopRequireDefault = require(_0x5745("0", "[w0Q"));
Object[_0x5745("1", "r]3u")](exports, _0x5745("2", "r]3u"), {
  "value" : !![]
});
exports[_0x5745("3", "TxPR")] = void 0;
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _jsxRuntime = require(_0x5745("4", "4o8P"));
var _default = (0, _createSvgIcon[_0x5745("5", "elo%")])((0, _jsxRuntime[_0x5745("6", "$l3U")])(_0x5745("7", "LYuc"), {
  "d" : _0x5745("8", "n&st")
}), "ModeCommentRounded");
exports["default"] = _default;

