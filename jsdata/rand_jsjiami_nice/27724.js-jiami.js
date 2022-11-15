'use strict';
var vip = "vip.v6";
var _0x550c = [vip, "wpPCiT7CoQ==", "LcOJVsOWJ8KZFcOuw6HCucOlDcOAwovDlVDCtcOkKhtcLnE/BD9NwqXDrzvDi8O9wojDusKww75gE8Knw7h/woPDoF1/ehPChhljwqsCwogzYhHDksKpw5sAw4zCpXnDncKfw6DCu8OtwrXCpA8lwrUNw6VrwrlnC8O4w5DCih5JWcKQUlTDucOPw47CocKOdnPDrGDCpcOYSR5cJSXDunMUw7nDpMO6wrssw79sYzwCNsKVwppjBcKpE8O1wpAAw41xXWMIPB9KaDPCsljCisK3LsOMwps7eknCnHAGeS3CnznDsDADwq/Ci8O2w53DhC0KZQULwqECIMOlwos=", "JsKxw7E=", "wo5ISMOJw4hbY8K5w6JgwqgAw5I4K8OcccKtLGTCsxw1CMOZGMKIacO0HVNmw77DlsKzSMOOwotWO0PDrxbDsnjChsODw55aw7pEwo14w7JVw5XCuE8owrIsw4fDr8K7wq11ZGvDrsKyw6dEwprCvcOEDMOcBk0Fwr/CosOZRMKOw6/Cu2JICsKubMKWw4bCmn59KsOYYMOPb0DDuxvCqg==", 
"KMKnw69TwoPCscOQ", "CsOzwqtBwq4JUcKyw5YQw4/DikzClcKAwrpBwqU0Iyc2XsKic8O8w5vCoMK8wpxLwpbDg8OiwopuKsOdwq/DscOQZUQT", "wpJIB8K8PUDDvMOPw5/DnExrwrUK", "wotZGGbDuh3CqXEvw5I=", "w7ZCZsKdw4YBZQ==", "wqDCpsOGw7NlwojCuMO/OsKcwr0xwp/DtcKIA8OQUMKKw4Fu", "cWkMwogTwqV4", "IsOtcw==", "wqw4DQ==", "viAGpgOSSPDh.bdvZ6Kt=="];
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
          if (value && str["replace"](/[AGgOSSPDhbdZKt=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 661849;
  };
  return fn(++count, long) >> count ^ long;
})(_0x550c, 486, 124416);
var _0x56ae = function(a, opt_max) {
  a = ~~"0x"["concat"](a);
  var value = _0x550c[a];
  if (_0x56ae["KmZWnF"] === undefined) {
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
    _0x56ae["BSENLY"] = testcase;
    _0x56ae["Culklj"] = {};
    _0x56ae["KmZWnF"] = !![];
  }
  var A = _0x56ae["Culklj"][a];
  if (A === undefined) {
    if (_0x56ae["XDMxzY"] === undefined) {
      _0x56ae["XDMxzY"] = !![];
    }
    value = _0x56ae["BSENLY"](value, opt_max);
    _0x56ae["Culklj"][a] = value;
  } else {
    value = A;
  }
  return value;
};
"use strict";
var _interopRequireDefault = require(_0x56ae("0", "vJiY"));
Object[_0x56ae("1", "&9fy")](exports, _0x56ae("2", "3F$k"), {
  "value" : !![]
});
exports[_0x56ae("3", "cGU]")] = void 0;
var _createSvgIcon = _interopRequireDefault(require(_0x56ae("4", "*%YH")));
var _jsxRuntime = require("react/jsx-runtime");
var _default = (0, _createSvgIcon[_0x56ae("5", "]WRs")])([(0, _jsxRuntime[_0x56ae("6", "k5o(")])("path", {
  "d" : "M12 4.14 6 6.39v4.7c0 3.33 1.76 6.44 4.33 8.04-1.56-4.89 2.5-9.8 7.67-9.05V6.39l-6-2.25z",
  "opacity" : ".3"
}, "0"), (0, _jsxRuntime[_0x56ae("7", "H![Z")])(_0x56ae("8", "9Bak"), {
  "d" : _0x56ae("9", "5Yi1")
}, "1"), (0, _jsxRuntime[_0x56ae("a", "VDFT")])(_0x56ae("8", "9Bak"), {
  "d" : _0x56ae("b", "wgQA")
}, "2")], "AddModeratorTwoTone");
exports[_0x56ae("c", "VDFT")] = _default;

